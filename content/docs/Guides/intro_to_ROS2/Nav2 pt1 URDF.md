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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=dbf89a10991c4a2893ce15053804288048f3de1048e089dc50c15acd8f43d6a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=570a8a1d8deedd1935385e794d7626da970a61646f96dedd57dbcc5837acee93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=28b48b2c6f873edcdc962e7f9d9b160ff40625f681e13a3c6da8c332f6122c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=06838472a5b7806d566afb75ca5907407a1e8c03daabcfa1b0438b38c462a077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=bf64a9ec11d29d77007997160a1f1043731ee657007bb3e44ed4c01ff39883ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=ba7d7b1c41dc5b39aee5065d652718315957905a224aa076b973f8a9402c1264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=bce40be5777f5b9031c3ec2f520afbf8a5e8bf69733f9983da2d49a364b6de1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=655be2404c8f5bf5977048f9f4a6b3a21f1a5461a60f9689322d986dd72015f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=845dab0d85f8971fec9b461c0a61a5606047761f5209ace73f77c63ba7218051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=4b51c4d2eb4fdce00195af8ec5376abc4272884b3e80facb971eb78e2a1e2dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHFHYSC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T231000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC8WY2E336t2a%2B1%2B%2BZN2VIhb06%2BbWf5osI79GuaeF1poAIgOoO4n3o16yOOvO9qOxhXTYPW2%2Fr5fmP2f3DJ49t7kNEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJ0h5GddCb2%2FTatu0yrcA9E3E5CJDYzCQeTkhI6hiCLBNvsZ1YWXlXJahzbNjsg4Q0t%2B4tdgb3tNRrvBbOzvHSfW6BQwmMbh7IcYd%2FVe7ZfKUC4QbgeETqzH8pEu6lLGM%2FsMdI9loH8A6rX8UhmZXROUfpCt7PDYlH%2B7Sz89suFdE6vhNabrj%2F5yd4gWXfNDNYdClzGFToJ8tgtwfVp%2FHl9yNvMYgt2ydncbKaOUbo5g52BetD1y4Ko%2BkzDZsQVsC4ouEuvQxYV1E3vDJgRuSCfhzu5ZoC3fbCwVNj8tk5WklxCwp4zm4d5HYqfOiWwFN9RUsj0%2Fk7WVExTjBGYyyhMCfrZmuf9abTGxvTjDbOV1sWMPdPuV37PjFYjqEkDr4cDbzlUo7Fzy%2FKBXyPm%2BE%2FnPcjmRDFs7Yd4t4z622m8K%2FQsVH2TDax0IapQd5B4fi%2F6HqyzP2XuAeUxVS82wFhEmFzfJ3Mzh%2BSwttZtJPZpP%2F%2BR8kv6rHbOzAQPGp3bTq9lWVReb4PcQbTXRuVDb5CwELZYW3fqwYF6LTsNsb%2FUhiTPZoPrC7WQCLhmCmnhl82%2FlOzcfJtXcrMlGKHqXjyZlIecvpa9GW8e4H3irMpzt8XfD6CSGjLcvK80aG980LnhNCxR9MeOdbcjRMPuHysQGOqUBAEKY1JZa5yzZH%2BRPKBJga020mctFbe6VFC%2FIjFoYpjEVj4H1voBg2l%2FNW0%2FOXT%2BE9blIud4%2BvfcJOsXK0U4VjyvfQv2Zr1AadwBS53JQEJ3H6Blr9igsM5VKN60JDFedbO9KhzHnoMxhvC9wWxS4IcJ8%2FOyhxHnvgtNh6xbGXubqQM%2BLsjvC0nj%2BuJod8WAHzzELZh8VpUNhSxyCpzz6i4Mu29Ms&X-Amz-Signature=c1c5c76ef1e5b74e3cce15ad65d5c13975731f312b5cd4dda1aa4b104b8bbe41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYCFQGK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T231002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCICPUwK70n9uoIhMES8pUSzSK2hdir%2FKG3zr0%2BFei7flsAiEAgS0nKSuquCA944Hyx30hjldvKlDdEqsGSjhrocFjQoEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEpIOALqvsu4YWtrGSrcA1Oj6L3T5V7r8v8q7a2r8L7VIoTjv8vEfUSJgzK%2F%2FmxyGHRWi6F3EMbJya9%2FI6rPIsHpLo%2FCVtpjlm3UaHjXh%2FKa4xyoujUV%2B9tnvp2uzZtExUnHatfHzYhr4XpOwczGYI1iTYQgk%2FKC8176Lc9aE1bBn5cZ2VkLQ4m2VU%2BmBLMfhcZur5RIMUrON%2F5ee%2FB2ZqyxLEedNfJ12yBpGaotV2zMAfAOKQ13iSUJtHtekcX7T9EXcLiKBbBh%2FNcMVc9y49TVifJKwbJRZIaXu14SH8%2Fe%2FWUxW09ZghcHa1zIBREvnMuw%2FggPDG5evALK9YiodXuB1yFBHSpPyEqkTHZudV2YaUy%2FWG4XDyMNU36v4%2FNeL%2FCtptJfBcLeed1ayAsQ5h2iapk7mZp9uylOb%2FccTAtLRN1WVffmCKIcMpoFkDdN3YMec8G208w5eYZkit9qiuO%2FdSSV5GqAXTNBLt8crJAZBQMT6sUdujQ%2FqHYtHxLs0fjXV%2FS1avzOp%2BmxQfjHBQmJP7cK4WK0tzK%2FkMgpcZoJjU5X8sXZo1WaM50TWk80q6FWmenn74pnQjuC%2BEoKDuSh%2Bhyoxi5MQbNcyPENsCDBHw%2BbypStICYTKU3Qv0rbpubJsa8qIU4osOifMMuHysQGOqUBe5nG6eQwUcTviLSgtYO%2Fl%2BsRrouHXNXz8klL1jJlHcoiAzDBq%2FDUcCs9b24jEWW2WmaGmh5BCKRp0bA0BMiCa6acjvZw%2FgHOgQLLvIG4dRs1wZ%2Baee3r%2FgW7rE2kvIXwLHqQnS3WTnzJqZsH0FWJHmQ1vrVR5FYHKNmw1lIWBs%2BmEGvjCFfFBg5tHTZyvsRCAmqjLj9R72KTTlE4onyU67IB5r7o&X-Amz-Signature=9abfaf2800ef9ae9aed27497affa35e975170ed09e3d7a2052eb98e166dcd52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVBH4XV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDhwZHNtzt9w24zxdSgJrnMdqqAbYOaWuX16yjMxdGn6AIgJpa6NE5briKcTsIEikqWsx0vAwxsYiqjKU1UGfZ5Rygq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDB8ABAPCH3XQW%2BEY9CrcA2bV7vHbsSZpCm7alSGbRIRfoiuorPFgk1EtsfwPuOCnWmAxMa1LpXutBSXdnzt8HunVw%2BBH7myy8EAL%2Bg5wDnWLOfFXNa4U1V8j%2F%2B6leKC9DkaprFcueXh8KakmkEyP8Wc1Ih7O4rap6yNDFeIM6aVAecIHNxFDFeLZv923M8VjhfnICjbIXHO6qT1lUSlZZSBvl9wjpODOVVki4NgkGCuRDOxtGRD6PRfGxlHKA%2BQ8H48VFH2Qllg1ODsqYT6Iq2jpcmQIl4E%2Byi%2BXSdnbaGHpjCGRPANTYOaoONVLXfY0DIJodEfWCI8p6xDOzHy0JjsXBLuNcx%2BpCvy1knB7NJ5TWGkHAwnVy3ISftAQ7UUBXvQwmfLFhYpn%2BzQz%2BkHYnx1AWKm%2FcdsW1vHAsc%2Bf97DsX57BAH92AXl%2FyP3fTogyCZ21K%2B3Xu8bsftV%2B3POvOM%2BGPI%2FSg9dN%2FGfkhX5sL%2Fvdc8ps5peAf0zAgMjhPrWLdR6%2BjA8d3hoR0Ur3twTz0AE4IG4ufyB0FakyhZDnnKFZeylSlGFZD5sbhjutCYt8vYRAjDTofUoRoMF9Pf7u8u0FLKONYcIYSVKVECWLqCl718xopKiDPwV%2FJScHpuq0CgN98WWwW69SbXbqMLOIysQGOqUBWjam4mQKZDRgxJWnzWp0%2FYgeNzGw2FIk76U3NQm2yh5QGOpKwRA%2BTg648YgRmVlsG%2BlZhAFe%2Fi%2FYpRMkXDRQ8lRZvpAsfKIt9Asw1m0Sp40lZ5Q2c%2BetQiZnuVeqmQQe2yijlP1QRZkASnQ2IcMTex0on5%2FbLf5HzDTyvRjpX7QDwAOEuhJlmMrs%2BQx3MDrmVPNSJG4wetKp3NlvKp5wDcsn9oNm&X-Amz-Signature=f21d7aaca7a5ee1c82ea384086cbbfe2dacfd127517a2dc2997600d9ebbd8dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=0689c10c74cdf03fe4f5e9e4a8ece9ee9696b53360863644f83da5fb18e1e2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DGZ6U3M%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDy8Uwc0wR6suWYzLeIiLAUOna36w74wuNOUa1Nc7xsBgIhALzlwEMVEs6tAF7olGq4MRuPCF9%2BJom80nan7ZYH%2FjReKv8DCGcQABoMNjM3NDIzMTgzODA1IgxhD0n0s0LvWyAwPY0q3AOXInN9ZAShHOFQHmmtykmkLSJiGfGm%2FzEqKmjCSSWwbjnM0YxLA0KnxOJqJXTkW%2F61SNELm%2BDhJ4CqqUl%2FIMHdtsMnlI7xlpKhSVIRhzZ5y1RDm1TWfIBjTTh7%2FG%2FInFYLZUyDm%2BeMvt6hbcnZ4UwGxFTu%2FlFG94PwwMRbQGCm8UQH49k%2BF7iB4vkhDyTRDQPEDZ1YisHGVQG6JAoqJz%2BzO45s96DnNOTAf1trHixuyGZfS1XessPRlFx7n9BU0k5B%2F7KyOTtahYIkzpw4cw1IM7ViCEv%2F8TYv9SKxoI8pd9vFrc3t%2F%2BK%2Fh3%2F2Hb2CH6tM3eIr5h7i1rSd2iObzGtlNCrCVfQMC7Df9jNozhhFXHuR3NluLCi8rteWxZ%2FBjDcdWPL5GHPXMcOK7UPb4ZJr53ddwBg4x2JhGpMD%2BtYc8Dz%2BfvtAr8foFHIhvqe%2BBikhPCGZyh5tnUDj%2FVxydH8NDYeRAZvoyUN33BAOtbFCIz5WuAB8zW%2FHH9zCtJ1Cvv8aLjErNfmwt0thMt8Ths%2BfO3fI58GyZEzFyMj0vtzs5jsas%2BXRhOg%2BIcayWpTnOfWX6v7%2F%2FvftFNqLD5OQbntUWRmRcRDrTor6vGdIpSk3ioYMdcYWTCCWgTMFVjDRh8rEBjqkASDnXYkEfZA6UebInzZU60uc%2Bdx0aZMZS2CwK8jltCb7VO%2Frva0c%2F9D4UMUaDseEFJOEU%2BoAE2rtIyL6XOJdU5gz%2FyAXenByH6Sv8yoD4g0KDuMMwsOv0kfHY%2B1GLkJB4hBJgOQi8Cq%2FdgGKJnluwJN%2BqXZaj00eTiSmRS51lUzLKZiDtglnMAtgcKr8qGuR%2BRTstD0JH%2Fu34T0pQLOsZD%2Flqtav&X-Amz-Signature=a67873d992af74bf6ba66181d302f5e5455928790d85fb8073241983f309fc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=fa59e268a9081e720f473a5c9f2af649bf591ca36fe1dc6e3abd3c520db53750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMSG7VPM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T231008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHTLFVtrTdES8nKGH8MRS6OQbv2uVWWaCb6hJxrnS8KgAiEA0XcI35ojuFwSTF28ZuIh1UXKzSpKOpQILoP%2BTkqKnMwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEGUuo9K6P4vdIXm7SrcA8%2BNt6jT91sK%2Bi0BrgYktcSv8U46vzTfCsPkUXTJD%2FDe4PK3LhIEvU0nivHEZSUUHvjl%2Fuu%2BGIe3qaCemqLfnj%2FijTSX%2Fob4nRjTJ2r%2BM9f%2BdTG%2FVV1cmeVCVwRLYmuZkdXFVODixLY8x7c6Ewxra3le%2BrIJDp74%2BN93WKBcmbh3x68ciUzmhx%2Fe6DFciJCoCr1SmtqXvFH8qzgwqVz6%2BSpryvFjhh68wguJe5qRHCxTEBTqzJsniM8mtNkPjoZAgelBxP%2Fq5b%2Fg%2F9%2FwCdjj2LtdNW%2F0SFnaqjkf7zC2%2Bf5O1K%2F%2B7tlcQXpjqJrcgkJY%2FYEtQ0uI%2FOOL3VPpf2GzcA7iScWgaFSZV4lHFSwUYOvx6EUXoP54iv%2FVzvYWisCA7V%2FN4EP2MzCDG%2BQGjTrIwrXREJDEktoMQfDg2F3r%2BiJccE39Z07z2HeFfmlZw2%2Fe2w5b1AM4BPB%2FrBBm6MjGme3Sj26p58CzLO3YrybcM13CVmrMBe%2BDuD27dv4Ic59iWalmmx4dfrYwz7OmBv41VF0dLS4RU44TqWhLsqAM42bi3XsN9RWzIP6lj1vcOwYpbD88XQN4biONnpWelcyWOmw6N0z%2B%2FnXm1S8oZ%2BIkOoot25c2oBeQ2o1pDUyOMPuHysQGOqUBxisfUrei1NKk1DiPQu5WrNAcvWiOYT8OYrAx5a2sllhVFOf7mnLGTCMOCQrgQD22M3isFSiazsispXA4zpNJta6gDe%2Fw%2FXB32aVnfvsDc7uS0My4KDGCj957VgCuQqhB5R3QHj78HaFNsDuNyo0bS52NqF%2BFGLnAys%2FeuPDDf2sJqC3fW8e7Hkxz07nRwQYtGhtU8%2FNfJjwZnLy6gLtDqhqHcFnB&X-Amz-Signature=10d313d2ab6a30259655268eb7de9b43173a05ca5c5a80abb9d8a57d0d455d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=1d4d3bd9dc08068ef33dac7009812e2335570fa3db2d7bbebc2c5fcb9a1a7280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWKH5SE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T231009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIHtodrHuzpFRil3EbSoWUUqKw9HPuGpxRvm4KekBZ20pAiBeYLG%2BrazmVRm9XxOERApFPPQM5Zi4OcxGu9tfOiw49Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMYtpXD82Mvak9I%2BykKtwDg2bqJ7ufkE%2Bm2961G5aCWfi1tDN3v%2B%2BefSBgk6wqKkyMYQM1eh28wIN75GnzwEbVvq81g7gX1xNHI8x5W4nt3o0MCWCYl%2Bi3qljinTDERutuQeAJ5FNUK9EM%2Fkg4qzF%2FQ174J7tUZRJmpgBzYDyvMLiSiDgJn52aR3JC0q47DjPuQfg%2FBzcKUQGkM48LocT%2BY7ubXQU7iInahWypONLcCLJJPKgvAJy8b8pOc49wEI3FB8AW88HlSLCnUcAA7IbwnKrxtsCndcgFeMPD%2BmRVMAks6f0Uw%2BOjsARlVrOIuH2EVFXvvi%2BxCQkCaRjBqA76cRJe02Zd%2BaKcRHP17Km%2BJq7UOSJ38yF3uqP2nEvvfzYAT8jLsyK9QEfCT3p43Zz6xpjcUkgOvSOjNvG61ZCdD8TVJwFy3fFEkqOVceu4R%2B7c7Kw%2BOIaz0klmbK5J4tghdcc3qypWC3KBQthU3JxyPL5qdnR5VT4p6wqkOHJgJLnZAi%2BYTyfDzZYYrtwLdjNN1C%2F7DHvw1gsg%2BA2V%2B5did%2BSYCfCDATIy2hFIpyKmZY1pf7EeEvifieLlvCSCMw0jbKOP1s%2BY%2B4dtgngq2RNpelvFssTy4hl68sjGuXjDCfFW8I2kBVRFWVgXq8EwtIjKxAY6pgG5pEZakuVbo2GdPeOcfKIpVox%2F6WWLKjJkouP0zQlRnSdFLlf9b%2FvO3Lw4XHc722lK7MkETWC0jFlZxD1tNGq02ScFt1HmXATK%2BFXQG3g1EOYb4WkPMZv%2BHJBUV72CYn7ODpZfAoyt9ZuVGqZ1oMOI1A1ZQIhQ8KwvsAs7weKjOWLcrE3rwsloxD9DpQsHQGuXbwjmUt0xan33ps836lKtG8Fd%2Brdg&X-Amz-Signature=7112c4cef08576835e331868949e9984904574a9d505ca492c84cf01256a35df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=aef0355c68271d38b7363660edaaab018ebc51e408fa60bc75d4b1f31cbf25a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USAS4CE6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T231011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCPcTOhgVCzr5Qb%2Fk6%2FfMegAs%2Bs9qNgFXdSkFSFaU6I2AIhAKXTtSJuBFTLKkXlLdPzztww34NoI6BlBjr2S0lZkIs%2FKv8DCGcQABoMNjM3NDIzMTgzODA1IgyWGl61GlTI3uPaHX4q3ANVEe1kXfUIU13dyP9YhNG3H1QjfuW4DPlvwFv3N0M2JF8PRzaxxGQENYPpmSqfCQ9cNCgGOuuz40IdthaAqnQNIIgIWo8RcNSqzzKdt8V3cNdEFU0vjZzvPJT4tzix1WbbaGzbbXkWKSY3w8l6F5b2CDYE05DFQFcfeZJlooUA6nwT%2BLE%2FXj%2ByRKZiTKTuVO6O21PD3j7R7BhY7bWut3e7O6FohMwh3mXboyTv9360LZD%2B%2FB8ZSZFp7qAzo3wRoNX8h1DheUzkOmCBJD9Os1J00pPWc8KOP0aPAmk2naZCGMRV8ctV2aYe9UslbTIFQ2zCKpbMK7pfkXXHRj5lHuH5l5xralBNt6EtSA4EGR6ZWgz2q2sZhQF6M4SOsUsLFzCw6vd8tgwO3QbC1sce%2F2HOQ3GLWJLcKKAic3cfXZV5Pj%2FygJAWACOvmdEZkVyeu%2BQY4r6AhltA%2ByNtV6q9jyGYaPe4lZUVg917SbtP8Ex14XlFDWtbE3AOrZ8pbKsx%2BfBiLuM8Mtd1yUxkVMbCwgHjgMmIB6VtvacC5w0X0m5Q7G1mwcf%2F6kvD6Psgb6rJh8mcW%2Bg4rIdFe4prQ3dIOPL6s6JTMjxEq9Urlya8URBrGwpPFFPeL6eu981EEjDJh8rEBjqkAXj27qkDyDHQBtbIzX5rAudbFdW2edpEmNelqzdqxcz1K1cG5zARJFImeu216t7j34qSwpua2r60oYQLY2kCSlE8kCa0w%2FwZ2QR%2BvRf8qAAVyHpUjw5oqCLHy%2BkfgbLSFb09omKpecnDWSbHNFGi3hoyqs04XC%2FkuYgJ6bqaETEHx2MKPrWrjpTHKBlhAne2ODDADSimIt6VQx0cuM9wN3a1BXx7&X-Amz-Signature=ca6f5fe52712f62fa6b60a3787a86f9967aa6cf25a54456aa87002a3b2051d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZUPQGX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T231017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIFe7pNglA16JGqHQjZC1vqYjlro4ipeXqX7m%2FY69sT61AiAQOrTODMujjATji7AD%2B58ZOMbtTnFqcO%2BbFlcvW2AV0Cr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMFjaX9sdlp96LmPTMKtwD0%2F17v7YPWmR6DOTEWt4Hg47m8TceIkEHMTYb5g%2FNQ8gg8E5J6q1Noq6E7c5e86MQyKm6L9oFYSVvEr3DRJQyRMgLCvNXgopBJChyMroDFbGm0%2B8M70xlLTZ9mOf7E%2BUvp2TXXwc6glrv%2F4xUq%2Bh%2BdW0PGITnm4zxwBtmKTW0kbz%2FZ43%2BmqQ9I4%2FFsyQv7Psfxv1z6rHX3r8CF6tHKVasXjdotwCq42DM%2BC%2BxzcL%2FxDRI4sTBmQrLnQlMTkmXkhlw0Jfnm%2B4IxNPx9R5J3DPUBxsgePo2vKREa5fkVEpFrBjOTydleHs4P28CCU5eIxJgW1j20yRxURpurhjGJzqO3hZE16lkjOQRCLso%2FzTaM94ateB2p3PFbar1wI%2BM20vsQR4edFBQlo%2FbASaHRjudGg%2BPjML%2BtfL2q%2Bv7ReehC9GGu8jzoFIe1HdgEC3UiZnCuB7sMpqJ0vhUVWWR%2F2nSWzlins3RnSUW7T4D%2BJwMOED9PRPCE9z2rTK%2BKqBLsibumy9%2BYFDLhZLIIzIGV2B7fbA%2BHcX4L8QbdFbDBNOTGgwsdQHjvyTMPiFC3AA8FltdYPyipGrAwvojoYQl02NILNQwGffgNPbYapUvhRsjKMH%2B%2BZSY9JtvUAwRbwEwyofKxAY6pgGI7RcRpvGQaT2z7nmMsVIL2RGRHBV7x8e6n%2BLwrrDmJRfu3yOKFS8CKd1%2FhuTe25FYOMe9JuHtNvBZTRPaVC87qqqn%2FQNHwtXQGmpnM6miKjDJuMgg1jvkaBOx7HSbHJLCxsnHNFkBivB9LELNR6QUleIiKfqiNopg27kIn0FHcZsWvs43JKGYRZyaV%2BVlHDDh%2FlDPfCD%2Fn7TE%2FU5HCLYdenQs3aeN&X-Amz-Signature=07e4b61a346d21c19a83b29ee706761c0a29aca87ab9b9fa71be9a09d56ff728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZSSZB3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T231019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCKFKmCYcoY%2BEuRBnDc3f%2FYQ0HBKHrSWDx3eOohJToK8wIgRYRjhaSOux3FwBykcolYOaBZpHpXmEbcj%2BZ7YjuUj0Mq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDK2fRB0gU4lLT2OqUSrcAwLUJKCxtPFSP8sm3j5zAhquzRfVu4UJPyXOOQxDEMQKJuHrO6Jr%2BkfiwtdOoos%2FT8saIx%2F9i2iTp1T5sMW5VPPLe83D9DDJ0JH4URPcNPjYkS8Eizo9ssBV7iaYJ9cIqE7sZP5WrYikjqaHiO2JLCdQIMNmT%2Fm0kdenAMs%2BYgRzummG4CbEB2F5dUOIMxi%2BcQ079eGIM8rOUfWCb6M7JYWLViL9h27d%2BUu9ZmP4HkeNBJqllGiw5qU4R5QevGWkV%2F9q6%2FKgtkl0GioMVUmsHvueGJ%2BaA%2BGRwi41RUxGKUysbgHAPMZIoa7qcwWMocCNQWEUBFBtckqyf5cDk1FpL70KYou7Ou%2BWUm9bxY0ofDai1wUeP6LfA9YvrQWNqMcoCkNIF8XBnl0jbkg9eZdr236TTQxlhObLFwPlB2mMQF0SQwHUEDZBg93wfYfnHAPVmu0RswI%2FBWLBadS2Vca1%2F5gYpvEHLAEb3yDa4cNMtlRt8waVy9OByQDy0yKpEdIBcPNv%2B%2Bdf4EwTg5lEf5Le37GDLzNvJ259lYUJGM%2B%2BecTHC%2Fet0XIKqCWaD%2BMW0lgWZyDKez1xUcBHd%2Fuju5MW2toBpgl3uNX94ELmKVeBYyNwFZANx8yN3cyUU53gMNKJysQGOqUBtm%2Bd1BMtNRMOHkPOMN1661LXFTTRlsf13hhZ8WI4Y1uzfhfOwZ3yk%2B92SO%2FSzbOT0HGkTN3LBQLQPmvUhKtrSRgy6JnWjhjyfNg4tKoDIf1nDsAF7l8f%2Fkoq%2FZCLFQAxwTuFitPb41rOnWUukPhTvBFYSLWo19Gcis%2FOlwZ0efrHG%2BBnIRdzKvsH%2FSysqtzArPTyW1dvALaAkWl7lRtgQ2CPzhvv&X-Amz-Signature=d62ba4ef0c475ad5ba57ef879ab0bb7b05608c22f49951b2c541024a05230770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIQFIK3D%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T231021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCp4zLeaRTDHEo3hCqaA8w9ak25XvDS4J%2BufNYP%2BPG45wIhALOoSeXq0lQzJFdmlbRFlQNoDH7C22Uo1Fjl4af15ykTKv8DCGcQABoMNjM3NDIzMTgzODA1Igx7a%2BKBhCDDe3w%2F30Uq3AOPEZjkPTR%2Fy41Att12jIpPp82%2FiW4k7x2m6mcCwUBBAQ03I5sIDgd9PkGgE5FTmIof2Dw5PjzZtcRjxNC2GlkZP3cVy3DTgWDUGyjkGtHhDgF%2Bkxl3kje0aKz75ReqGgg0jeOxsRn%2F0Vt3Ys8Hp9CwlZi82pAUPOwziXONCW%2F9colMhHmbWVcWWp%2Bxjm6r3ndR2XVllno2rtbK9mZYBPQmItgtuTvWGwhwSbFem1BCscd%2BVuayCMRcj3Ij9fqagA5RfNpfIUgjgi%2FmSnQ0GVe8hnXCHdYcWKGDxTZzrWVYjr0bYdDCK4Fb%2Bld%2FqqqhayCFIdIdwsjNhjuFfeBFcWuwJKJyMp7i8UTjxiuWYtCR0x%2FGji4%2Bf%2FaJyLJv3tFqb5WeQfU2YlJAV1wYRBw7%2BCai6GCmIb4SWSgNXmCS0aLfmz6jPUTz5bkViPQ5NXogOok2jFh5gROvAzlaVpF645DkwWS5vJaKfEa%2B2D%2F2T2HmETGhdH4TRF5dUtkKs%2FflwaAow343sUSB0t6k9F13td9hq7T4%2FxJ5SC6epholmzZscVt7gYt%2Bbdzdhm1T0HQ91NS%2FJMj0xbme8kPZFKVIlooHRLRJlt00M2tTPDECmGV8UWexRKtpn1C8QNna%2FDD8h8rEBjqkARUmIFmh4p%2F3MlNEXwDBuGJgAHLMEl1vyd4AEBmzjYv2jeUf4hDNRvBkpUV%2FRJmVgu1%2BereYsgZ0WaatSr23vW0kze7HZxS85cu7O86h7R34DUYbE4vwIj79zK2ewyPeePH50G9GRT5qUPH%2BGeBPRYG8F8dzZwPA%2BTdGBD9DUWtfAx4yGg50fB4KbAS8R1oE6h3Cij7Nt07eEa3g9FWLj9RgIybf&X-Amz-Signature=dedc8955eb29697aef833d553af3d5b4b5c578fc77115626f7ce61f8653602d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYCFQGK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T231022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCICPUwK70n9uoIhMES8pUSzSK2hdir%2FKG3zr0%2BFei7flsAiEAgS0nKSuquCA944Hyx30hjldvKlDdEqsGSjhrocFjQoEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEpIOALqvsu4YWtrGSrcA1Oj6L3T5V7r8v8q7a2r8L7VIoTjv8vEfUSJgzK%2F%2FmxyGHRWi6F3EMbJya9%2FI6rPIsHpLo%2FCVtpjlm3UaHjXh%2FKa4xyoujUV%2B9tnvp2uzZtExUnHatfHzYhr4XpOwczGYI1iTYQgk%2FKC8176Lc9aE1bBn5cZ2VkLQ4m2VU%2BmBLMfhcZur5RIMUrON%2F5ee%2FB2ZqyxLEedNfJ12yBpGaotV2zMAfAOKQ13iSUJtHtekcX7T9EXcLiKBbBh%2FNcMVc9y49TVifJKwbJRZIaXu14SH8%2Fe%2FWUxW09ZghcHa1zIBREvnMuw%2FggPDG5evALK9YiodXuB1yFBHSpPyEqkTHZudV2YaUy%2FWG4XDyMNU36v4%2FNeL%2FCtptJfBcLeed1ayAsQ5h2iapk7mZp9uylOb%2FccTAtLRN1WVffmCKIcMpoFkDdN3YMec8G208w5eYZkit9qiuO%2FdSSV5GqAXTNBLt8crJAZBQMT6sUdujQ%2FqHYtHxLs0fjXV%2FS1avzOp%2BmxQfjHBQmJP7cK4WK0tzK%2FkMgpcZoJjU5X8sXZo1WaM50TWk80q6FWmenn74pnQjuC%2BEoKDuSh%2Bhyoxi5MQbNcyPENsCDBHw%2BbypStICYTKU3Qv0rbpubJsa8qIU4osOifMMuHysQGOqUBe5nG6eQwUcTviLSgtYO%2Fl%2BsRrouHXNXz8klL1jJlHcoiAzDBq%2FDUcCs9b24jEWW2WmaGmh5BCKRp0bA0BMiCa6acjvZw%2FgHOgQLLvIG4dRs1wZ%2Baee3r%2FgW7rE2kvIXwLHqQnS3WTnzJqZsH0FWJHmQ1vrVR5FYHKNmw1lIWBs%2BmEGvjCFfFBg5tHTZyvsRCAmqjLj9R72KTTlE4onyU67IB5r7o&X-Amz-Signature=96c540a24dd4784f991acb1e2cd030eba227266cc585e43d086c567381892a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=05a8ebd308e6c88bdcaee955f7259d959b3c10b37d2f2a9b3f8a129633634c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADBLGG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAFfrG3X4Qn5A1ZBfnqANGpRDVrDRTqa5UbZN06mZhQXAiAhAei5IqSayOXtz5leiKDvKsEpN7xKke6RuSvGGz0b%2Byr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMRvMUgQuGAm%2B0otZaKtwDZ7F7277WYN%2FUot9h4zYPhZf8DVJSKrPsQ1vN461Tanb2rBhoG1%2BKGMGFFFIdhjsCwAgfjeGTOGjLWohqkndZ4q5sZs8ZSKJ2Il%2BMB0HOjvwMnIL3Z14pUsjH2J5dpPXYAUyfY7soSe2tnVrubM3mAWWIy8gRn%2F%2FcgvK01X3a%2Flc%2FyvkB6VlT2Ti5oTW7N5yWcu2EHymx1wJmYdOvhVbVgmxc7uQcj%2FACQv51ctZ5vlUenIFm5scOFD32mGalonp29E7ZuYR2g9mTw4f%2BdnwP8wmRpI%2FrRX98%2F6q2HBJWzJUUbO6ypKAZdUKGfCKSTcBcQVDGtt3OehmGqVWbNlwzLqaDUYOUC5y3LP8xbVmbpH8WTzO04Bzxl0vLzXX5kZne5I10jPP9Je2VU7jI1dzCEIy3CDmzFudAR64%2FFMbWrj3pk95DSo9fx6UV0qHRVJivRNnDjvauoAFN3M8uJ81iEZT2LYFyJJ6j%2BNhA%2FxVhyNnnKA1nJ1HWprigaGJQCx7B1C8AwOIPAFMQ900c9UVDqyJpc9K6ei787%2Bd%2BLi5QItrsSZ1utFsZISjY8CS2yQFmjjD6JElXhpFtex0PNW0um2tx%2B9BfOpJMh117Y3noq33E9kD7G8lit3eg6ykwtIfKxAY6pgFR8Nge%2Bh%2FYfrzsGO2ATFrcCTZKU6TGwjLYw71b3Ql5aoeREo9i4GcJUQLx%2BimvrZzqsH%2BDL%2BW6F8P%2B91hgcsmbIHP4AMBO1X%2BCIaBjtUUmIizvfs2JglCoXYGI%2FfvgKYJolN7%2Bwe2QXukGFhtU%2FCq%2B4dhUWho5m6H%2FHt1EGU1W9gDNqj68V2bVpiVXgpEjrvNDvzO9PYXHMiwSyC0l3jOc%2BSSQOfNv&X-Amz-Signature=75ba9c72c7584940aad51719eca1996842e4c0a0d869513e5acbaa0e0d609161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJLXPEM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDdp58kscoK24d4NkRumZJAgb7fAHKVO4ADrZlIBqBF%2FQIgMtMHH7KLC%2FVSsQ%2BqlwhWIKO1TXn%2BdoZTqhxWKJMmT%2F8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCdDYcAqMZPQ3sXnDCrcA5BG0dGTZkj9rH7a4HnLHRKvkOIrVz%2BQFq2fXbpur4M8i3rX4yUtODKZUuaTjRpB2Et4NoHVPofb1dgKmzx8YRmPfwBDIfcewSDJ%2Bi4ZtDEkfIvwpth4iJgG9XqxNYxxewzseff%2BO5wMfN%2FgXDQ5iAC6ykQfu1yqjDcgWM7%2BGmNyZ3paTDasUyl4BGDYLZOXdN8VKua%2BILdUBJ9J5JpXY1ikQIai5AUDohHYHpm1hg%2F9AZcsx4KAB8z%2BIDu%2FiHaY6WozrSckPZUfPGSrDy2%2B%2FfZsQAEB9BWvIO%2FBfxj089zswxTVoJx3Wt70su%2ByvqPZIFs6%2B2QDcPJO4di1jhy9oZcc8FJZxEzpFVFBgD8GT5cGnNAC4WRR0zjLnjLznLCN8NvEieTtLSWcF%2FA18vKKkH9HZH%2FZoyDQfZiPN01VSEXmhRJTUnMUkQXbmEtoG246xYP7uul2uxx2TWRcqmpILY%2F8%2FiXxVTiCg5z24Mw22MDRiuTI9bARvnjPBnLMYbrBWB0SHjqdCUt8Mhb%2Fe6eEvI%2Fqmv3QY9aU2nE6rN3R0nd%2BrsA%2FyfkKMPUru%2F2Rz7bZYs%2FPW4Y7Pxnh%2F0HqsteV9bqSvLf0mCmIPScIiGUlzoWBY4S%2FviO%2FDFdLLMW8MPuHysQGOqUBSo0egb1L5h82uwjly1cCf5enHz4j9Ec%2FePyL0cesMWpQYATPL9eMvyfxqx%2BpMPmaRB1mVX7EDGgESrZeO7eHHK2jop86V8zh9k1sD9AVPKZMTvU9V5WtID2hFKXo13sUvhGRFspk8G61qnmMgy0d15MU%2B9%2F1Or%2FcLSXnPREwtM%2BOd5ak%2F33ocFDZ9veYqHg22JJ5XVDRsiRsIEgUNBdYEn5Ob8Pu&X-Amz-Signature=c5a711c8918d51df42744b9e75612789c554564927f2bd31338fb8db6b99f728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJLXPEM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDdp58kscoK24d4NkRumZJAgb7fAHKVO4ADrZlIBqBF%2FQIgMtMHH7KLC%2FVSsQ%2BqlwhWIKO1TXn%2BdoZTqhxWKJMmT%2F8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCdDYcAqMZPQ3sXnDCrcA5BG0dGTZkj9rH7a4HnLHRKvkOIrVz%2BQFq2fXbpur4M8i3rX4yUtODKZUuaTjRpB2Et4NoHVPofb1dgKmzx8YRmPfwBDIfcewSDJ%2Bi4ZtDEkfIvwpth4iJgG9XqxNYxxewzseff%2BO5wMfN%2FgXDQ5iAC6ykQfu1yqjDcgWM7%2BGmNyZ3paTDasUyl4BGDYLZOXdN8VKua%2BILdUBJ9J5JpXY1ikQIai5AUDohHYHpm1hg%2F9AZcsx4KAB8z%2BIDu%2FiHaY6WozrSckPZUfPGSrDy2%2B%2FfZsQAEB9BWvIO%2FBfxj089zswxTVoJx3Wt70su%2ByvqPZIFs6%2B2QDcPJO4di1jhy9oZcc8FJZxEzpFVFBgD8GT5cGnNAC4WRR0zjLnjLznLCN8NvEieTtLSWcF%2FA18vKKkH9HZH%2FZoyDQfZiPN01VSEXmhRJTUnMUkQXbmEtoG246xYP7uul2uxx2TWRcqmpILY%2F8%2FiXxVTiCg5z24Mw22MDRiuTI9bARvnjPBnLMYbrBWB0SHjqdCUt8Mhb%2Fe6eEvI%2Fqmv3QY9aU2nE6rN3R0nd%2BrsA%2FyfkKMPUru%2F2Rz7bZYs%2FPW4Y7Pxnh%2F0HqsteV9bqSvLf0mCmIPScIiGUlzoWBY4S%2FviO%2FDFdLLMW8MPuHysQGOqUBSo0egb1L5h82uwjly1cCf5enHz4j9Ec%2FePyL0cesMWpQYATPL9eMvyfxqx%2BpMPmaRB1mVX7EDGgESrZeO7eHHK2jop86V8zh9k1sD9AVPKZMTvU9V5WtID2hFKXo13sUvhGRFspk8G61qnmMgy0d15MU%2B9%2F1Or%2FcLSXnPREwtM%2BOd5ak%2F33ocFDZ9veYqHg22JJ5XVDRsiRsIEgUNBdYEn5Ob8Pu&X-Amz-Signature=f91a057860234cb6e623d2dcfd70bb47129f88fce3b152edbf09d3e4d9afac68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJLXPEM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDdp58kscoK24d4NkRumZJAgb7fAHKVO4ADrZlIBqBF%2FQIgMtMHH7KLC%2FVSsQ%2BqlwhWIKO1TXn%2BdoZTqhxWKJMmT%2F8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCdDYcAqMZPQ3sXnDCrcA5BG0dGTZkj9rH7a4HnLHRKvkOIrVz%2BQFq2fXbpur4M8i3rX4yUtODKZUuaTjRpB2Et4NoHVPofb1dgKmzx8YRmPfwBDIfcewSDJ%2Bi4ZtDEkfIvwpth4iJgG9XqxNYxxewzseff%2BO5wMfN%2FgXDQ5iAC6ykQfu1yqjDcgWM7%2BGmNyZ3paTDasUyl4BGDYLZOXdN8VKua%2BILdUBJ9J5JpXY1ikQIai5AUDohHYHpm1hg%2F9AZcsx4KAB8z%2BIDu%2FiHaY6WozrSckPZUfPGSrDy2%2B%2FfZsQAEB9BWvIO%2FBfxj089zswxTVoJx3Wt70su%2ByvqPZIFs6%2B2QDcPJO4di1jhy9oZcc8FJZxEzpFVFBgD8GT5cGnNAC4WRR0zjLnjLznLCN8NvEieTtLSWcF%2FA18vKKkH9HZH%2FZoyDQfZiPN01VSEXmhRJTUnMUkQXbmEtoG246xYP7uul2uxx2TWRcqmpILY%2F8%2FiXxVTiCg5z24Mw22MDRiuTI9bARvnjPBnLMYbrBWB0SHjqdCUt8Mhb%2Fe6eEvI%2Fqmv3QY9aU2nE6rN3R0nd%2BrsA%2FyfkKMPUru%2F2Rz7bZYs%2FPW4Y7Pxnh%2F0HqsteV9bqSvLf0mCmIPScIiGUlzoWBY4S%2FviO%2FDFdLLMW8MPuHysQGOqUBSo0egb1L5h82uwjly1cCf5enHz4j9Ec%2FePyL0cesMWpQYATPL9eMvyfxqx%2BpMPmaRB1mVX7EDGgESrZeO7eHHK2jop86V8zh9k1sD9AVPKZMTvU9V5WtID2hFKXo13sUvhGRFspk8G61qnmMgy0d15MU%2B9%2F1Or%2FcLSXnPREwtM%2BOd5ak%2F33ocFDZ9veYqHg22JJ5XVDRsiRsIEgUNBdYEn5Ob8Pu&X-Amz-Signature=c1f7b259f055c3670eb96e3030ccd901322f2c2322cbcf29c8175089ec6d0bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJLXPEM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDdp58kscoK24d4NkRumZJAgb7fAHKVO4ADrZlIBqBF%2FQIgMtMHH7KLC%2FVSsQ%2BqlwhWIKO1TXn%2BdoZTqhxWKJMmT%2F8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCdDYcAqMZPQ3sXnDCrcA5BG0dGTZkj9rH7a4HnLHRKvkOIrVz%2BQFq2fXbpur4M8i3rX4yUtODKZUuaTjRpB2Et4NoHVPofb1dgKmzx8YRmPfwBDIfcewSDJ%2Bi4ZtDEkfIvwpth4iJgG9XqxNYxxewzseff%2BO5wMfN%2FgXDQ5iAC6ykQfu1yqjDcgWM7%2BGmNyZ3paTDasUyl4BGDYLZOXdN8VKua%2BILdUBJ9J5JpXY1ikQIai5AUDohHYHpm1hg%2F9AZcsx4KAB8z%2BIDu%2FiHaY6WozrSckPZUfPGSrDy2%2B%2FfZsQAEB9BWvIO%2FBfxj089zswxTVoJx3Wt70su%2ByvqPZIFs6%2B2QDcPJO4di1jhy9oZcc8FJZxEzpFVFBgD8GT5cGnNAC4WRR0zjLnjLznLCN8NvEieTtLSWcF%2FA18vKKkH9HZH%2FZoyDQfZiPN01VSEXmhRJTUnMUkQXbmEtoG246xYP7uul2uxx2TWRcqmpILY%2F8%2FiXxVTiCg5z24Mw22MDRiuTI9bARvnjPBnLMYbrBWB0SHjqdCUt8Mhb%2Fe6eEvI%2Fqmv3QY9aU2nE6rN3R0nd%2BrsA%2FyfkKMPUru%2F2Rz7bZYs%2FPW4Y7Pxnh%2F0HqsteV9bqSvLf0mCmIPScIiGUlzoWBY4S%2FviO%2FDFdLLMW8MPuHysQGOqUBSo0egb1L5h82uwjly1cCf5enHz4j9Ec%2FePyL0cesMWpQYATPL9eMvyfxqx%2BpMPmaRB1mVX7EDGgESrZeO7eHHK2jop86V8zh9k1sD9AVPKZMTvU9V5WtID2hFKXo13sUvhGRFspk8G61qnmMgy0d15MU%2B9%2F1Or%2FcLSXnPREwtM%2BOd5ak%2F33ocFDZ9veYqHg22JJ5XVDRsiRsIEgUNBdYEn5Ob8Pu&X-Amz-Signature=8ef0e6ef9921141a8d504b1f2b7c3684e36b02c5ddc58a0eeef85ec89b97124d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJLXPEM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDdp58kscoK24d4NkRumZJAgb7fAHKVO4ADrZlIBqBF%2FQIgMtMHH7KLC%2FVSsQ%2BqlwhWIKO1TXn%2BdoZTqhxWKJMmT%2F8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCdDYcAqMZPQ3sXnDCrcA5BG0dGTZkj9rH7a4HnLHRKvkOIrVz%2BQFq2fXbpur4M8i3rX4yUtODKZUuaTjRpB2Et4NoHVPofb1dgKmzx8YRmPfwBDIfcewSDJ%2Bi4ZtDEkfIvwpth4iJgG9XqxNYxxewzseff%2BO5wMfN%2FgXDQ5iAC6ykQfu1yqjDcgWM7%2BGmNyZ3paTDasUyl4BGDYLZOXdN8VKua%2BILdUBJ9J5JpXY1ikQIai5AUDohHYHpm1hg%2F9AZcsx4KAB8z%2BIDu%2FiHaY6WozrSckPZUfPGSrDy2%2B%2FfZsQAEB9BWvIO%2FBfxj089zswxTVoJx3Wt70su%2ByvqPZIFs6%2B2QDcPJO4di1jhy9oZcc8FJZxEzpFVFBgD8GT5cGnNAC4WRR0zjLnjLznLCN8NvEieTtLSWcF%2FA18vKKkH9HZH%2FZoyDQfZiPN01VSEXmhRJTUnMUkQXbmEtoG246xYP7uul2uxx2TWRcqmpILY%2F8%2FiXxVTiCg5z24Mw22MDRiuTI9bARvnjPBnLMYbrBWB0SHjqdCUt8Mhb%2Fe6eEvI%2Fqmv3QY9aU2nE6rN3R0nd%2BrsA%2FyfkKMPUru%2F2Rz7bZYs%2FPW4Y7Pxnh%2F0HqsteV9bqSvLf0mCmIPScIiGUlzoWBY4S%2FviO%2FDFdLLMW8MPuHysQGOqUBSo0egb1L5h82uwjly1cCf5enHz4j9Ec%2FePyL0cesMWpQYATPL9eMvyfxqx%2BpMPmaRB1mVX7EDGgESrZeO7eHHK2jop86V8zh9k1sD9AVPKZMTvU9V5WtID2hFKXo13sUvhGRFspk8G61qnmMgy0d15MU%2B9%2F1Or%2FcLSXnPREwtM%2BOd5ak%2F33ocFDZ9veYqHg22JJ5XVDRsiRsIEgUNBdYEn5Ob8Pu&X-Amz-Signature=9b51ee0aa92cda6d8eac0a35234c2afdd2be6482b775f4e443beaeb11250f9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJLXPEM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDdp58kscoK24d4NkRumZJAgb7fAHKVO4ADrZlIBqBF%2FQIgMtMHH7KLC%2FVSsQ%2BqlwhWIKO1TXn%2BdoZTqhxWKJMmT%2F8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCdDYcAqMZPQ3sXnDCrcA5BG0dGTZkj9rH7a4HnLHRKvkOIrVz%2BQFq2fXbpur4M8i3rX4yUtODKZUuaTjRpB2Et4NoHVPofb1dgKmzx8YRmPfwBDIfcewSDJ%2Bi4ZtDEkfIvwpth4iJgG9XqxNYxxewzseff%2BO5wMfN%2FgXDQ5iAC6ykQfu1yqjDcgWM7%2BGmNyZ3paTDasUyl4BGDYLZOXdN8VKua%2BILdUBJ9J5JpXY1ikQIai5AUDohHYHpm1hg%2F9AZcsx4KAB8z%2BIDu%2FiHaY6WozrSckPZUfPGSrDy2%2B%2FfZsQAEB9BWvIO%2FBfxj089zswxTVoJx3Wt70su%2ByvqPZIFs6%2B2QDcPJO4di1jhy9oZcc8FJZxEzpFVFBgD8GT5cGnNAC4WRR0zjLnjLznLCN8NvEieTtLSWcF%2FA18vKKkH9HZH%2FZoyDQfZiPN01VSEXmhRJTUnMUkQXbmEtoG246xYP7uul2uxx2TWRcqmpILY%2F8%2FiXxVTiCg5z24Mw22MDRiuTI9bARvnjPBnLMYbrBWB0SHjqdCUt8Mhb%2Fe6eEvI%2Fqmv3QY9aU2nE6rN3R0nd%2BrsA%2FyfkKMPUru%2F2Rz7bZYs%2FPW4Y7Pxnh%2F0HqsteV9bqSvLf0mCmIPScIiGUlzoWBY4S%2FviO%2FDFdLLMW8MPuHysQGOqUBSo0egb1L5h82uwjly1cCf5enHz4j9Ec%2FePyL0cesMWpQYATPL9eMvyfxqx%2BpMPmaRB1mVX7EDGgESrZeO7eHHK2jop86V8zh9k1sD9AVPKZMTvU9V5WtID2hFKXo13sUvhGRFspk8G61qnmMgy0d15MU%2B9%2F1Or%2FcLSXnPREwtM%2BOd5ak%2F33ocFDZ9veYqHg22JJ5XVDRsiRsIEgUNBdYEn5Ob8Pu&X-Amz-Signature=101f9f6133db3de89a826ddf4303dbd9a7fe45f545339b1876aad7d98acf0c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJLXPEM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDdp58kscoK24d4NkRumZJAgb7fAHKVO4ADrZlIBqBF%2FQIgMtMHH7KLC%2FVSsQ%2BqlwhWIKO1TXn%2BdoZTqhxWKJMmT%2F8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCdDYcAqMZPQ3sXnDCrcA5BG0dGTZkj9rH7a4HnLHRKvkOIrVz%2BQFq2fXbpur4M8i3rX4yUtODKZUuaTjRpB2Et4NoHVPofb1dgKmzx8YRmPfwBDIfcewSDJ%2Bi4ZtDEkfIvwpth4iJgG9XqxNYxxewzseff%2BO5wMfN%2FgXDQ5iAC6ykQfu1yqjDcgWM7%2BGmNyZ3paTDasUyl4BGDYLZOXdN8VKua%2BILdUBJ9J5JpXY1ikQIai5AUDohHYHpm1hg%2F9AZcsx4KAB8z%2BIDu%2FiHaY6WozrSckPZUfPGSrDy2%2B%2FfZsQAEB9BWvIO%2FBfxj089zswxTVoJx3Wt70su%2ByvqPZIFs6%2B2QDcPJO4di1jhy9oZcc8FJZxEzpFVFBgD8GT5cGnNAC4WRR0zjLnjLznLCN8NvEieTtLSWcF%2FA18vKKkH9HZH%2FZoyDQfZiPN01VSEXmhRJTUnMUkQXbmEtoG246xYP7uul2uxx2TWRcqmpILY%2F8%2FiXxVTiCg5z24Mw22MDRiuTI9bARvnjPBnLMYbrBWB0SHjqdCUt8Mhb%2Fe6eEvI%2Fqmv3QY9aU2nE6rN3R0nd%2BrsA%2FyfkKMPUru%2F2Rz7bZYs%2FPW4Y7Pxnh%2F0HqsteV9bqSvLf0mCmIPScIiGUlzoWBY4S%2FviO%2FDFdLLMW8MPuHysQGOqUBSo0egb1L5h82uwjly1cCf5enHz4j9Ec%2FePyL0cesMWpQYATPL9eMvyfxqx%2BpMPmaRB1mVX7EDGgESrZeO7eHHK2jop86V8zh9k1sD9AVPKZMTvU9V5WtID2hFKXo13sUvhGRFspk8G61qnmMgy0d15MU%2B9%2F1Or%2FcLSXnPREwtM%2BOd5ak%2F33ocFDZ9veYqHg22JJ5XVDRsiRsIEgUNBdYEn5Ob8Pu&X-Amz-Signature=c1f7b259f055c3670eb96e3030ccd901322f2c2322cbcf29c8175089ec6d0bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJLXPEM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDdp58kscoK24d4NkRumZJAgb7fAHKVO4ADrZlIBqBF%2FQIgMtMHH7KLC%2FVSsQ%2BqlwhWIKO1TXn%2BdoZTqhxWKJMmT%2F8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCdDYcAqMZPQ3sXnDCrcA5BG0dGTZkj9rH7a4HnLHRKvkOIrVz%2BQFq2fXbpur4M8i3rX4yUtODKZUuaTjRpB2Et4NoHVPofb1dgKmzx8YRmPfwBDIfcewSDJ%2Bi4ZtDEkfIvwpth4iJgG9XqxNYxxewzseff%2BO5wMfN%2FgXDQ5iAC6ykQfu1yqjDcgWM7%2BGmNyZ3paTDasUyl4BGDYLZOXdN8VKua%2BILdUBJ9J5JpXY1ikQIai5AUDohHYHpm1hg%2F9AZcsx4KAB8z%2BIDu%2FiHaY6WozrSckPZUfPGSrDy2%2B%2FfZsQAEB9BWvIO%2FBfxj089zswxTVoJx3Wt70su%2ByvqPZIFs6%2B2QDcPJO4di1jhy9oZcc8FJZxEzpFVFBgD8GT5cGnNAC4WRR0zjLnjLznLCN8NvEieTtLSWcF%2FA18vKKkH9HZH%2FZoyDQfZiPN01VSEXmhRJTUnMUkQXbmEtoG246xYP7uul2uxx2TWRcqmpILY%2F8%2FiXxVTiCg5z24Mw22MDRiuTI9bARvnjPBnLMYbrBWB0SHjqdCUt8Mhb%2Fe6eEvI%2Fqmv3QY9aU2nE6rN3R0nd%2BrsA%2FyfkKMPUru%2F2Rz7bZYs%2FPW4Y7Pxnh%2F0HqsteV9bqSvLf0mCmIPScIiGUlzoWBY4S%2FviO%2FDFdLLMW8MPuHysQGOqUBSo0egb1L5h82uwjly1cCf5enHz4j9Ec%2FePyL0cesMWpQYATPL9eMvyfxqx%2BpMPmaRB1mVX7EDGgESrZeO7eHHK2jop86V8zh9k1sD9AVPKZMTvU9V5WtID2hFKXo13sUvhGRFspk8G61qnmMgy0d15MU%2B9%2F1Or%2FcLSXnPREwtM%2BOd5ak%2F33ocFDZ9veYqHg22JJ5XVDRsiRsIEgUNBdYEn5Ob8Pu&X-Amz-Signature=6af4689489d7761ad80296063bba504cfc86bccf6dff21f18037bd8229c967f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJLXPEM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDdp58kscoK24d4NkRumZJAgb7fAHKVO4ADrZlIBqBF%2FQIgMtMHH7KLC%2FVSsQ%2BqlwhWIKO1TXn%2BdoZTqhxWKJMmT%2F8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCdDYcAqMZPQ3sXnDCrcA5BG0dGTZkj9rH7a4HnLHRKvkOIrVz%2BQFq2fXbpur4M8i3rX4yUtODKZUuaTjRpB2Et4NoHVPofb1dgKmzx8YRmPfwBDIfcewSDJ%2Bi4ZtDEkfIvwpth4iJgG9XqxNYxxewzseff%2BO5wMfN%2FgXDQ5iAC6ykQfu1yqjDcgWM7%2BGmNyZ3paTDasUyl4BGDYLZOXdN8VKua%2BILdUBJ9J5JpXY1ikQIai5AUDohHYHpm1hg%2F9AZcsx4KAB8z%2BIDu%2FiHaY6WozrSckPZUfPGSrDy2%2B%2FfZsQAEB9BWvIO%2FBfxj089zswxTVoJx3Wt70su%2ByvqPZIFs6%2B2QDcPJO4di1jhy9oZcc8FJZxEzpFVFBgD8GT5cGnNAC4WRR0zjLnjLznLCN8NvEieTtLSWcF%2FA18vKKkH9HZH%2FZoyDQfZiPN01VSEXmhRJTUnMUkQXbmEtoG246xYP7uul2uxx2TWRcqmpILY%2F8%2FiXxVTiCg5z24Mw22MDRiuTI9bARvnjPBnLMYbrBWB0SHjqdCUt8Mhb%2Fe6eEvI%2Fqmv3QY9aU2nE6rN3R0nd%2BrsA%2FyfkKMPUru%2F2Rz7bZYs%2FPW4Y7Pxnh%2F0HqsteV9bqSvLf0mCmIPScIiGUlzoWBY4S%2FviO%2FDFdLLMW8MPuHysQGOqUBSo0egb1L5h82uwjly1cCf5enHz4j9Ec%2FePyL0cesMWpQYATPL9eMvyfxqx%2BpMPmaRB1mVX7EDGgESrZeO7eHHK2jop86V8zh9k1sD9AVPKZMTvU9V5WtID2hFKXo13sUvhGRFspk8G61qnmMgy0d15MU%2B9%2F1Or%2FcLSXnPREwtM%2BOd5ak%2F33ocFDZ9veYqHg22JJ5XVDRsiRsIEgUNBdYEn5Ob8Pu&X-Amz-Signature=fd0dfe7bb183e308759c53add8390ddde43625db4c11cf9e072e4aa0a5667672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJLXPEM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDdp58kscoK24d4NkRumZJAgb7fAHKVO4ADrZlIBqBF%2FQIgMtMHH7KLC%2FVSsQ%2BqlwhWIKO1TXn%2BdoZTqhxWKJMmT%2F8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCdDYcAqMZPQ3sXnDCrcA5BG0dGTZkj9rH7a4HnLHRKvkOIrVz%2BQFq2fXbpur4M8i3rX4yUtODKZUuaTjRpB2Et4NoHVPofb1dgKmzx8YRmPfwBDIfcewSDJ%2Bi4ZtDEkfIvwpth4iJgG9XqxNYxxewzseff%2BO5wMfN%2FgXDQ5iAC6ykQfu1yqjDcgWM7%2BGmNyZ3paTDasUyl4BGDYLZOXdN8VKua%2BILdUBJ9J5JpXY1ikQIai5AUDohHYHpm1hg%2F9AZcsx4KAB8z%2BIDu%2FiHaY6WozrSckPZUfPGSrDy2%2B%2FfZsQAEB9BWvIO%2FBfxj089zswxTVoJx3Wt70su%2ByvqPZIFs6%2B2QDcPJO4di1jhy9oZcc8FJZxEzpFVFBgD8GT5cGnNAC4WRR0zjLnjLznLCN8NvEieTtLSWcF%2FA18vKKkH9HZH%2FZoyDQfZiPN01VSEXmhRJTUnMUkQXbmEtoG246xYP7uul2uxx2TWRcqmpILY%2F8%2FiXxVTiCg5z24Mw22MDRiuTI9bARvnjPBnLMYbrBWB0SHjqdCUt8Mhb%2Fe6eEvI%2Fqmv3QY9aU2nE6rN3R0nd%2BrsA%2FyfkKMPUru%2F2Rz7bZYs%2FPW4Y7Pxnh%2F0HqsteV9bqSvLf0mCmIPScIiGUlzoWBY4S%2FviO%2FDFdLLMW8MPuHysQGOqUBSo0egb1L5h82uwjly1cCf5enHz4j9Ec%2FePyL0cesMWpQYATPL9eMvyfxqx%2BpMPmaRB1mVX7EDGgESrZeO7eHHK2jop86V8zh9k1sD9AVPKZMTvU9V5WtID2hFKXo13sUvhGRFspk8G61qnmMgy0d15MU%2B9%2F1Or%2FcLSXnPREwtM%2BOd5ak%2F33ocFDZ9veYqHg22JJ5XVDRsiRsIEgUNBdYEn5Ob8Pu&X-Amz-Signature=30b3df999dbb5f1d2467947c9428182e4751ed20ba2b2bb694babe0e5d4ca987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
