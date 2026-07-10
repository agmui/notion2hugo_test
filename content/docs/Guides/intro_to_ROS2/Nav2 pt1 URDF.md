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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=d09f564e3f99d42d2d7ca92eb403296d5fbdbe2739f9b3545091c9dae63bce81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=65fe2174b2a503ea62bc4c2c9bdf9a94961bfa0988113c9c0ee1f807e910225e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=d09abdc14b694fc86947ac139bc3ab55ea5ae0062f0f402888f9712a981bc5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=f00d9fe2ad26d8e5d49a96ef1ba4d082e77e1f2415fa47119d58706cbc831e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=11a00045c21b31e454af503e318a302ea314b82a48a5ba31455c5edc1d1c9647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=de9f20b4619652389ad7b93332a25a1aef00e0aa2f53f952d366dd3f37606f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=5e295188b3441b79b7a47ed1a7605ef4e83763881f056fd64a48722273ba3b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=59204daa3450c3e934f541152217332f7c3269a01b65218040e7ec72b191f096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=df7abff1549f5a3b3924f2742c3669e8b4f80f9a66db0be1502a5e0ebb196c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=4bf131b82cb964b8af023eb840c334397d7b3a9d86fce560cc0f688ddae4f034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJ35ORZ%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKmll7VI89L2uU3bsMrUOMdhM2o8EjxQ0BjI5B25IEYwIhAIpKg7hM%2Fa9R%2FG%2BMJgEtuzlGhGI9CHYW526RgBKwWh8oKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTPCccB56ke0NUlxMq3AMFJKSb3z0%2Bys7hLYFtSWufXZLSNfvenJT3IluElFBzyt%2BjfOgOKzL2P%2FnvCz3PGuhkrVCoWZMMry5r4BoyTVlfCCiSRZoh10FPAzRELcAfd7yS6yLfl0iGbnTdeMO10WI%2BdizhzKbaMhKpApx2sBWVpa9h98IqYvFhg%2FeXref4b8on91Aub3ZU3cLEfpwox7WqDURoADqnBVXI2ICiG82S2LdbVox341y2KXRipnH%2BaZkpDaMLAHilRHy3ZW6mJxXdI8VQJDm6zX24JJ3noh8FU2B11I6c56IBvlgkVWMeKEIAc99IJk%2FUzHxxcmXDTdP9ppRFSxwFsxqA1HGVuDW7zej21P3yG3nNFv79igUr%2B7m9FVGEMslyNtVNEqej%2BJBwp9m%2FUOTJcotfqmbfjUNQeAY%2F02E%2F53BxiskGk7U%2FriWL6F1RrjIrxTR4r7NlWPDZ31VuRCuNixV2OqmLKzPFK6SzsZcQUZAci91UnhHx6OBveWAoIGjnuiW3z%2BypomqJDKXCcFfyNa5meix0%2FVqQHz7e%2FuiLE9uHp%2BFUQ6kbL438PQJzh6e6pJfmLvGun2kr0EJo9hNREOV4YPNCmk%2BY%2FmAgLsdeT%2FJCRx5i9d%2BS5AkPwn7ENNTjiNNPIDDMtcHSBjqkAcIQ3r584mrEpbsehvJnTqS8MBipP59e0g3D%2BWKHL56Y8T1NNv%2BYqFfS38CaBvzDMfunrIl1%2BzUZGABu17xFyJYPTVvbix65eD9WQ2nFzG8uR6ONPtdAQTtB%2FwzZfJ%2FG1dCu9NDToRpkGLLRUBHzkOTXMOIMJtNCEfgJn98Lm0uW1NPZQUMiJ4f6ibaPKfcX772AbWzYCBk20WGTMAWwCLebsnLm&X-Amz-Signature=20b51b0487bb35baa7f0173f751b4d58c6c4ac7f094a23601e71a28071a9da4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU36PSN4%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG40V2QmIY0oTFv9zOn%2FW3%2FJJVbrOiF5aHYHDW%2Bh0JinAiEAs35HZrNZkRltNEOgqYPhwBV9NZuOe78HeH%2F8z%2Fz3ZbIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FdDXMgQzNaLhcmDyrcA1IJA%2FFIzolcGrJNJzD1pH1JEGJWUQpmurHLR%2FdhQzsl6bhl3otHI6vFlLTJiJTMjiJ5di2DK34MjO5GtoCboxapIhEG3xMo9beb8rkAXbk538P7aNsgsO%2FTvYGP2XdhaTVmiP6a5pgevuPd4iTPwmCoK%2Bid%2Frfri%2Fd5G82ti9gDkHMbWzyI%2FD2tLS49c8O4OMTgStwzqK1It2RnWddcbKVmwcut%2Bw0FN8njsJHzmTtFWTg8hNdYTZPWsLMObcTwKnI9XYSun3J0FYAp%2Bo53%2BaBNH8hgZlUgLUG99yqwPuuFPjBmWQ3RiBiRjjKDrIB5ANl%2FKIzhqW2QpHYMAQ5aS76mh%2Bg0ayW9UWKAdlwGnskTjyLluKy0f0k%2FZcWYGOlR96KPprfxsnqDvV2Ce%2FWnaomTtWCbtiKzqBrM5WWNzTIW1NjATLcjmAuRS0eB4nK82XuuDGFzCylJxW76OGP8eK1jwvOz1Bzf%2FU%2FxSPysRokRkIFrxwHUPExUZ37LeEoYEYg4LSLIl4d%2B0OXtuEsZ6hmfNBPWU%2FW2O1OZfRUcqFGvSkrZWjAwnbJTlOr%2FBtgmUDB2yJTZcnpH0Ybl%2FckUtemMDXztOkr1e9HPbe1Ull154BQvIB8Pe%2FDNP113MIi5wdIGOqUB6b25qnSEpBssMsndEOSKLOcy9ZGxfmwnavrBSQvT2VRMXH%2FBji6SKLJ4DRdGQCNr0LZfk3HHJ61qE8d4LATZBcvD4T8h1igDxVj0dVxMDsRXotsUMh7SUTYw93SbfOijRM88bhHTAUI3%2Bowcd7u9RJnAUBbrwYkomutRsB1aXiN8E9m4XrA4QXJ7xIdN2Djufxm%2FZkhzh99idWYIJrN1RSYVS4X6&X-Amz-Signature=cc78896be58fdc1db03741be5c38c216fb006f76b5cfaf471520e0d3454f6caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GOD2HS2%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvAG%2BkY4nTVkKCEZ6g9CAQKwbx193MK3nzSNhA15BwhQIhAJpDbQNb2suM9w%2FXlR12WFcX8%2FoWgKuS%2FtIacmV3U1YEKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHq5ek%2Bbo%2FtoMRdSQq3AMZGN4MfPtPgCDqmbyGd%2FCehJklRH%2FzGtJQgLxshIleCcwQu7g1S27559PI509PFWoE0LDtWMjQqIb6adHJpEy%2BcT3OfwANBQv9V7hkmW80azjWGoKBDNK1MBZ9ReCSfrRWeZg4Lyxgu3Xy0lDvu28wtfBWBfmkLfq5XMOhjHLvzxhVC1EDMTB7G7udBGFeTN3H%2Fbu2hEPaAS1AZixOJwqUE%2FAjK9DJW9Slzb9hZOuNw6PAcqrsgqzg9E3ZhmgI58FX6KPceInr20SijtR9V7r%2BfU8D4bhXRNJWg9ZsxgBC3MIWVqSpSn4IWpvWmAsZBNOVVgRF1gdBctM8cjnHagZDSb%2Btxpogp2UGHPSktbklicdjFG%2FIIAFejmFNOr7HZurBEpsymPV254LSJZXXpMPISUCthJn79SIVMgPz5WSwf%2F3BI3LxlA%2FxuMnUGXJUa0246BbZnVnMBGpbWfRkgW64YjLu%2Fohd5j6kLFZB3Ple32ISQPApFRw9UGLvhba%2F94gWdMSt6Xx%2Fgfleb0argKDmXsCXVbbe2kOjkQYr2IOBAFifJwcpqT6hT4DxTcx7MJRuh8CXyyidRb5%2B4LfOV1mG6a6A7pFZlWvNDhKdsMp%2BmbGCK5rKp0L7Yg5etzC1uMHSBjqkAQfcLwXt5jDR7V47VltGeo85yzzGk85TlKBKvNREirrbEPLakOcJVaKLBuQsIkKA2DQ%2FXjwPC%2FHQgqWne15ZmioqPoXHa3MFwBEHfXhU7Xu4qva0H4voWf2JN5F9pqSMArduviF2nxWL3Qk2LkmI%2BNCAJkAOLo6I8%2FFXhIWm80mJEgMn0SWSpGCGa2LeoMoJzJ1k02rPr8pVKQglgpPdnebLx7ku&X-Amz-Signature=2e7d6849c7b515e7dd9214385d29dc91e2e5c460f6984fbb2a0305fe5fbadb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=db9bc02e6994b653bbd534f4ee96e952e678fcf3036f25c260d0a24113c68962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACGCVIA%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6qkpqe8RRDgKRj0QeF2hIneUha%2FHvtnrRmsd9cHc%2F6AIgTbzGJwwoF8vvKmAqpaVyOyQFqqMJtUOCJ9xFtjQtDmAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLLRlVrhyLEv8QS%2BSrcAzL%2FPBty0nFtBO7yoZVn6tfjI4mGYq%2ByTMoXPYfU9C91M7%2BIItvi7veRja997DvmHk6nBozWPackRlr7M%2FN5JcFd1yhJzXOSYaenV6WKDKDT7GmrRimHIPNZgENdxnXbGHpTkd0DAn1KmDSEEeBadBDxAyWchXiKofo1xkGpRMi8lo4v2WZreBONyktbPcp2BArqRjntEDFoPUqFnta3gDcPoIEw9Rl2hGL05l203B83N9B56SCv%2BF6Tuqekzr7jzpaPYsUyne2r6Z7s6w6121zaz7t%2FX6%2FXCRBMrKstjLJm6mHflwyZ%2FKDzwOJkF9T8Rt%2FobKKgHAZW%2Bz6Kcj6sDuWU65mPO186%2FgWcnEc7aqUEtWKo3Dw3vYxQmzj5mc4RGAnoXJXk5GMTBE%2BzmMoo%2ByHEZaePefm3PuJ9gQp0wU2Jdai4rzHBfjIXUO3dEV%2B3RoK8YIKGZid2ZtFMbmRbqerE1lw2tYnJSCmHfA9Va8GzF2h18S8uBFtHYXBQ5oWjDgcS8C8NHRkIuhKh3M%2Bo7DtirdrV2meK1u1z07krPeqtSMRFmkwD4rVdxxZmEuZ4uAVGRzOR7GTZsJvhnstnduaqhSLNQjVU%2BCA4UvFhcabxPKM6oYucELn1N5ybMIO4wdIGOqUBRdtcamEEHbveWhApCmAMJrubN1GK2qt%2Bf8uz%2FNXpjOUfGeQVRyUNBZFCdQTjZwUbdnvdvG%2Ftei7OmC89ChHYFP6AaEwyfO%2F%2FVa2mIcx4Wc%2B22MS%2BaUMW34ZNWKfmdAX1U2Kec7oGZxFhtyr7IT16iIipLHQVJbD1s1cMMF74K9A3J2sj52VpdVPrKvglGY1T4ejOW5uZufKGesRJu9zo%2FaBL8CCv&X-Amz-Signature=7a44078103a8d773d46ccb18e09584194930fa86669b65a1ce557d3ac3f58d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=a345669b2992251f9978992bf33825d18542d494b1b9dad5d0c0f9cafb931b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPM3NHZ%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlYGICH%2FSqXJV7yuquEGXJfUNiLyODchHyji0HNnsTZQIgZ5BDmgjUKK5hC7vE21XZVbRqZQhxhJDdh8c3TurXmlEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHW%2BzCbpccVbqKmaSrcAyIwMBgX78ilBpsixGGaGYU1PhztZ2reTzkBZHKo9x5zmITkW5qIgFsW2sSYPxCOdzcrgy%2FOpKhWumMQtqXlHT4H88%2Br%2F2BB05yzeBA5eo8JdUBpQ2nMMuTUBIxP7V6xkdpY1opoKt969VRLfdds%2BjLkYPrlzgtL9v0sNO%2BvSMh7vsewIA7TI7Vykfp4mAjs%2BQrFxhR4wWSjIdINj3Pd9cQ5jn9u7VWfix9iSrcocVJrDrGROFChgb2MdebL0ne3v%2BtfJ8Db8LiRm0m1NO2Ud3DRu6kHaTYRJUMIkFl1wfwapKT2VgxXlRrslhVvGFyUt5skTakE9B8cqEgNDw2%2FX5RfHuKQ3umOiHnoc0zy3r2Ob3GyHmtQMFzu3UgxSv1BgZakohKBpi8XP57Mo764oB0Rk9kMTNdOgCizaWOyOtfL44FbFh9cTgFzPCTG8LGT2fBraSReAkB1C3mnUVhJ3OD4WxWn%2BG%2F82mGkXxktgNTPHvueC9KfqyE3u2Ze1lDInnZF%2FEFvFMFY1Ksg71bK9Uoub0Vim%2FpHeL1z5BzPrgsvg002jnb3vK4RA5xiPDD84L%2F4dn5ZoEDTC7NvOU9b%2BrSRNnicA3XoUSpHQ7%2FPcQxhhDlyzhEzR8%2Fr6pDwMKG6wdIGOqUBKqsOJYrbhc0vaVD1aL35Q1mM8BsIuZKRq1f2vtc%2F7%2FYUNqQIRdHcOwiu9gI0lwrJdlICCoFs%2B8wjzyxppI3khwWO0odiaeeW8vOQQIxeILxx9wdNUPh7IH%2FjTgpPj3Fb18K0ZJM%2BOrFIqXyU1IuZA4knq4lZw%2Fn7zE%2FUJtl89z02mCx%2FAFBCBqOQPf%2FT7UrISyceuilPZmkEfV5sPAEJPxg0lUtg&X-Amz-Signature=13eed9ace2384f365b86a2c76e41f63e170933c9df07bd30764e23800bb9ec30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=4bcced7b343323b7d9712d337f6a8e6672af966610ef21cb4f0d8b89d5a3628d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBJJQDVE%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEBSdezlRupbZwRFaiA8DfQBSmD7QLACiVDyLE5%2FlSBwIgLViedMSfXrL98FsOniWBOG1ZBuvMC706svrkWsdYU34qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2acKZ7zaQqW1Ro1yrcA29ne029Rt1vrmL90ELvxsseQMpOXwIL6Ps7ToRLtyCbhWJns0a0KtV603Km2Gr3UufkYGZbWCCsKMPgkceEzkAlxGmUwzEAnlNa8670T05pIoDLadQemNoWvVXpK4jF6bZrVImzMOBsJElaE719r9iVXo2g2u2gjCKcMdaGs1UAJaVs0ZVHnv5QnYPqv4xWBsVNDrnydQPSgSay6r9PmmP6FU0hzODpT4oMxbdUN0dVAf%2FMC1g2D513AIAecsNiVj4cJMQr8c8lIRA2iWhRWsap0ulI1Qh6FzU168yoD%2FNkRtMAvxSNElfLfpwSMdPbRO5RRu8YdP%2B6WB2JaZ0nlNeEuaPHMrh6V%2Fwe7wBYnRwli1VAtHOjg3EM2B9%2FZ3lVJOR8a2RZmKSPYtlZ4U%2F81PAzQj21NuSCX6N8nGOj19fvezBZ6%2FoLm%2BuTWDN8vc95QBSVOfNgy5YsGutiBgyqK7gt1%2BwBYlzrn1E1KYPTVoCCMeWtg3TWSTD3tn5qNsExialdg6vH3wFryghR0qfBDWTSRFdY4RZSn144QJD9UT0qCgFx%2B%2FPkFgL9NVJ58TjT03JSo5vRIfvrCwi4IxYh9cjIOFyJSTnFw1M7nlEOO1BgEiD0PdYdhY09dc%2BwMMG5wdIGOqUBOJcZtkTGZW03dEl%2BEEpzcUfoCXQInEK4Y6Pldr4CzVfeKLSniCo9tsT55utgbOfi7Yh0MhDigFjueHHPj4%2BPOu5R0fgaUM%2BSIMCP6D11kgvQr8xq91lbVLedlKuIYxQyisEfBr5CoueNZvtC%2Bfk2wLX3Oq8oD8RtUZe6NSJBbCfP1bBv1ZbB8gNcvSS8CK4sHacU1ZGOuP24qg7tW9V4%2FR7%2BvVOH&X-Amz-Signature=4926d77c888f22315072a16ea70a676aa262e447dbfb1f0929ccd5c0d18ac875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=d5adc7f84943f328a7b29eca94b691b39e360a403e31e07bd9556100e81353d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX7C2IK3%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiKPBdDrlXiqMTIlPTIIFm1qnCR4rrBJMhC3fcRVDIjAiB4myy852amwGIE%2BfSrKfoncJn9I1%2Bu%2B09z%2FSEnDbC81yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHnD0I1fOp%2B5SzdDKtwDqr2Jp1OCzneSwik7AJg8yzYqMLl4i%2FD81aQGnCDn%2B6lsi0pLc5olFnqd68dm%2BfXXeAb6dcTXs842P8Pn7e7r7BEWChoTJnz%2Buk7Vi2zkc4h6hqjRpB4SUeONJO6AoDnulGN0TofrMfVQs0rQ7qkZ%2Fo5Hqgg%2FpjPHQLHm3%2BD8H9Opm9Fb5wly%2BebY3G9MZ9qkVh6UXoJI4rFHXVvQZcdMZ6PDboBiDedyFivC7XE10YFeo4sJvCfdONUCUvR0gBD5uHEJB2tSNlxsTG1BeHt6er1BhNc7fayTR0ij7AkIaj4%2BrGyxPBKS2IyDKgfMNm3%2BUfDmfX29iaHjhckW0h%2FXDxQBIDN3eTFMJdJHvNv6CSzdeHLswk%2Fi2R3fr1S86hnCK4LELxLmNxmk0ztCfFI4%2FWpjcVaA37OozQA4qWZEjD3QYASUBcTpzuwZpj9QbXa5PhAXhj7VRYlHPKwh2pLN6DR3uNtAhvsZ1zizQY5hdXMi5t%2BdQJAhS6C2SXNxLkO1adWSzWQfzRwhNE3emgzqdIFmY4%2FeMbED4l%2Bi3OJ%2Bq1KiG%2BdNFnfDQu2kFVk0jca%2BYWVWnQMk9sC0psjVw6QLoTdzbvQo%2FhiHKXbLIAsZiLh4ENa3Up%2BUwfYJGecwtrjB0gY6pgGjX7ABqi6W3EHR2v0P6YEa2%2FS35Djz5REWHbshj9x5vOjyqi43PT6S%2BxT%2BvjhKO4O9rzxm9F%2BRqjlDlO1YHQULX6lD3KTTY7OwNQwCTgO8UhVPsLcamrcqg2M8walw8PT7MXlvvD68A7b7uMjyZ%2F9oA6hb2ld4%2BsyEbh0UWE8Uo05KaAsueEiSNchpdydNei0rbe8dFtRWEWPLLyy%2FPblc0ObXKIO5&X-Amz-Signature=3df39f95da75497a309838e782db833039f7a6f23f6a6110f1c8882d92964ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=810ae8c8adf204a4a84a1b9338e9913a9a5ae92795b65fdd35e0dbd9678c06a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TAOU27%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo%2FOiBH5H4a3OdmstiCnMGfLWyR9tquAjSc6%2BDkTmf7AIgORraffhuFtLA5O0wKO%2BCrqfh0gXMyXnXEWHrq2ZZfawqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZulpsJ7BPS69GZOCrcAx0zBYmfjLvfyK5mCu7e4DWcLaUpTZp410LUMisuglatwqnR5BTWXKv45WezO5ETjeWlaSAg%2FcicpQ3S5gkUeRbtX3VZ%2FTpdLlcB3OpoCGH6%2FUj1l6T3tr6QNDjTrVBdEWq1PoaBFts1CNNKUASidim9wGlWPnjZxa3RXWlHgrtfuv9klsKX13sIkrJPWnlngJK5Xye%2BqACm4XTnAGk9bJ%2BWyXf3cHWF8HpMTgr0%2F%2BRsAcRfXmmSggk59g1LprPpyIubbIM6WPJMQfnfEiS11Vtp21MFOILeSQplX1CmiMvwghTA4LQy5RXyupNw3yZPbQ9pPozwWQu54XH%2FK6otkzlu7hqmHyHH1HRH8kge6BdTCjDBeL3UaJKHbTm5T1c9AeMzQZbuyUWGPPZel%2FLsbe%2BktMEL2Xpq1kdkJn63nxEc0XfRDujMu35inDdjfjkVUQhf00dpvnKiN9lycy4bUpK1ycPnEgKLEwXLh28IeOd3TC8QxHcia9TKi8c3gFA0%2BvQt1XivU7EoWhzzkyAbjdSX4QU9XLA5%2ByJyj7WMUnDryHKsSBaycYYGLeH%2F0bf%2FXB4RgxlTNmyVf6usZtM4YVW4ZvNNXi4wlPzuydTYEdEg8H4MrESvYT64HMRYMPi5wdIGOqUBIz9SFKOi1MUTOPGpaBVAUSC%2FiJC4GGGdgv9zCopjmQbNnpSELvhy30k4O9libR69C1AX6%2F3rx22MFauO1hGBu1%2Fe%2Bi2i3uUqTDhbG6U3LWWsBjl6bN%2F38XAEKMvYpVs8lL2dYg1vro9sy3IyRkNMixyi9nXh%2B2lR119zY1zaaTzI6kQIifAcMSuU1wPae6cRldd1zLTYaBVq8Y5O%2F4NULo%2FkAHRS&X-Amz-Signature=4516d7b1de96b7c82599f399327fb56da4e83801af1b08044efa1bcc89789a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZDWNIZ%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtePGPVsRbSXnYE4A3yaSFVKWzUOlRxJ85cz%2F4SVzXKAiAUb538UYIKg3G1Zn73gaH%2Bd%2FuheM17LYt4PWafaigqIyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgDvjksk1hz3BdpqrKtwDO51LQPlAfrHPoGHCYM%2F46WswylaVLp2Nc%2F7Pi%2FzqtPIlCIPZi8NbLYGMkkLKErY%2FKmiM6JrLEeFyQazqfhljvGWb23wBdhLJ5USw8kyLiYddbJK%2F0kxwPopZxn9aKmFmub8xuTVDUCksLJGA5Oh3aTdGjjVaVh61VMCOcYFE12susEFi5sF4ai%2BwFPnjYBrWFDer2DYBRboQ4Vlma6Yc4xlQikdTVaMTbFA2MDFH3ST9VSk3LlcIBZhwLIIkjwXp3ErxA2CJwrVzj9NlIk6ylfLR2vUo7UwF0tC6Oo76QtAmfxy4kY3dgG9kRzE0cJYzSa2WLYK7DUFjIwPSjIjNBn6UHoZHUm2e1ueDpdjMDaEhrWsfF9wpZNywi8uSPw6PwVW0qNtbwfGOmO1Oaxb9sMVjcV6j8x4H1BCQiMzUfDDuvNdKo8k5ASOMQRi72kSln3E604B8%2B3Tqq%2BuyKKKBaJYdzFyoZBeFXWri%2Bc88des583PkeQPWoWZ%2FAHdrnNE1DaItZ1Hre0ClT6k1f4vcdd%2BAv69y%2BcNWdc9lVAie6OLxruMY9UE6KIe4fDIaduxTIo%2BcX8snP55jri84sxLksbjWukXqOugnnTSdT4f4%2BS6GPOp6cP%2F6dTv7O88wurnB0gY6pgFzv67HbRH4qrLMrZugavYAjJrgbnsMjAP06vbCf%2Bfz8BWB4wd58wHCDub8Z2s%2Bg3eLfAIjhi2uKb49vAokv8lpxSW6HUrjuUbiSZx48BkHj0RPS6PuQgAIiIK0VtZYf91TG3mw2P0S%2Bb7zQ9bS2T1ubFjND1d0BQ1A38zqtNbG2747XslzZ%2FiBwU%2B4q9dslIg0Hpl7bdtOWpNcsdEpC4U1IUkU5XmD&X-Amz-Signature=2d6658a007234e1c854b639cfe39300d920240d87a000c3575d53b372d3c3e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHCKOQ3M%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBN4%2B%2BXaNA32GkOmPuVAt526%2FMkGJ4FeF688dhmwWz%2BPAiBUVRe%2Bw4j4pn7OkbopOnDLQGDTQg%2Fl4rH5nF4o5WU5eyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp0b%2BBjsIb3etizk2KtwDG5L9UysnSKbPNM9Rjv2V3K2Eex1zB3Jr5nOJtnuAm9jKXfUwiNq01OdXVR4rp%2FQEOyVKO6JRUL46sOw%2Fa6vSnLohtI4hj3FX0d7ZUb4nJrJ%2FZr5WDKwd%2F0D9HqJsaDocAhxE6CieV0D8prUsPQU4hcIOJTrIIJZfhQIPfl%2F36DmJ3EdvsWSuhFUt%2BYhZl0olsimceX4Vb2e4bwNrEJ8Upex1zUQFlVN5wx3x81f5spx0K6bEqyHkZSHPdq7%2BhS3XvTxsyL96HN5pclBBXwJvG6NbLTGxbYfSzBNXt8QYTOvb9x7FyyBTC8jDQgheuVgMylkx84Sbo61%2BcS4g79HDx7J7QWUXhP30T8XFLjysPhLYnjoVRnMCmGRXx1U1z7DOaVABrz8oMhQHc9YqaGLhAGxGIzZ%2Bgl6sZmx3scWKaxCKUp5YSTped4Ump%2FqbFnhvac9z6sCUBguyF0FNYRbGywrevVE%2F0yDtvrvHWMr7fUBNd4cs41wLzdSnlUqdOD%2Bu5dVJ3z4QijYHWaLj6Wx1X1gcDDQIL72PFDOlpTmDF0Q4SoL9uGFcO9%2BOcibLQIvmwNMILUhMVWxVeScr0mzEIwZXNAS3Hhk0WInppAAU1YDhJst65A51Rcx3sPQwyrbB0gY6pgGlTbcRRQBVWdDrpXds8TXnylHANXDrwAbZrbVru6TacHgWIIZ2vcJmtVkf5qsTMZjWXlKYJj2A6%2FXOnc4nlURfcguNp7QG7EngyUXIxhTZ6LfvhXp387cxjoFDCZX1tBg4aeCMPhuDvPP5CQ81k%2BTr0CpSn4EYwd%2BE3JQijzzVnFvkSbYrQTB2xBhBPAir8%2BVgTKeDN4toHKwYenyqaMonvED6w7uN&X-Amz-Signature=a3aab1fc2c9517a4d10fce3ac2a707ba81c7756cd16534d49caa1544f3878e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=520ec5ef033af8b8b0b270f11ab27a7ddead796655fb020a68841e75c198300e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3RIIRT%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbyTUl3tw2cml3sAqN7wt51hl1NAXhOt7jr9YsaiuphAiABoywjeC8YXkk8oi75gOhLzlcn1msPGeZeKZgLpSXwNyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQl8Y3SrAfHVpJcrKtwDq4I%2BYi53fwob8PPdcjtcZKU0K%2FieIjxO81%2FJIo5rSocZb%2ByXQUTWWGWQga8yVbcuhjIYtIbWykQdaNCD%2FWuyF%2FSTqW8DdUcLcJkfaNhKaYf3kA%2BH51zcHF5N26BO5YNAJS9JgFvSkSBCzOW6BmH5%2BHAeuOZ5UUO3uzg3GxG673lpGxbYdl0KiI6L5WTlmMCsSE2lWyo%2ByWbVPAMCjXcPxxVJn9Ny%2BRY6p9T0g9psmt8HpQxicTI%2BJgEbcj4srgN76H6CLqwC65XNDMDleaDqwQzzYqTzHrUng6nkpkA42ESf4rCiZ%2BcXhdRbXTfNW6sPLZEJvhAJYYGb12AU1zi6YNEuVcUwhc1Wg%2FP%2FjNN7LzCWmGMk6Wz4CCb4Y9Aa6cIpwEwjX68WJh3RAjgO5POl9HMeGevJsP52nXqaXEOMhRdex6%2FtPzWkVPGvwrDL5RU1LD6Nc8oZRG%2BNvgueTpyMwzfZp4AoB4IZVJj3yZ8trPZ%2BipG7Ps4uq3g3o7HyltCKflp5tYpn5Je1ptQ4qyRvochjxPpmaJmm7B11VbbbrmXFYQw1pdhjIIX3rj9z8K345uUVRH2I6AFdQ7otYAnINkKo7pYlFDmwSVNgJHB2z8%2FzxIboSixDFRo%2BSH8wv7fB0gY6pgFUiatgyo0J%2FI0WrJWmLuwBfAT6zGyEI5dIbiWy3zdEmNAueTcRAv4vKv%2F4L%2B7lf1m1J2VYs93qeCTJlSO%2FXR94NXUrTOngRA%2FraEFFSzUqYWBzO8kppvT1fLNW%2F18tSm9fl0rw1JRL5vtL5MU1x0YusxMQpTw4m2YMRe5hCOD689IAtwfZH5aAKOtTdOrsHZDjS6RJqxiAuYwOliPO2NKYPBgJ3B8z&X-Amz-Signature=0a8011f53e59339519027014654c8ce69741c98f4b4a911f025b60c356438b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJGGNTV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbamWXFJlGK%2FYejwJc%2BQx7tmGOuAJQNe02lfR%2B7e%2BbnAiEAvZAfq5%2F5yOA%2Bo72u4oFKoXn1Qbs06GNuqzrNYllHQmoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRfzHXXYDya9h6akSrcAxq%2BFCENBQ6ULiJmyaUqKKgwv2Q7R8835OqkIQvP4LbRI3780GDAjwnYS9d6T08uZZ0uJ3qP%2FGNFnIKcu1Ux4CHllRcfy1uZlsY8MCzCXjA%2FZfM2Dx6mKe4vFAyYI%2Fl64tSd77ya%2BOBNzkYfJb4zoNWE6Um9otJS%2FvhY2n7YDa5Rf3QuUrBxF9oY6w8JLFR5Dwaa8V9HzFi0wGEtSGZ9KvQSgjqubykfNfVYpH4BRXrP1gPIGB7UkZV4gZ37aeO2Gnli4G65u8DHZ3by6GXDyc1fmghaUXh1abYee2dzAdXpM9e%2FS2wXGLt%2BYLcCC2odoZHkP73XZioIx5wcLv0CsEjiKmWm4MZ1bHlo1XFvDbbXC52GESpDv4DK8OkdJeihAuBb8k8Yh7srpQXd6O1N8qeKe6r4jKtxCaQPHSha%2F%2Fv5VKrq9aPftI4YzhwleGVImyfrLb3eBt4XtVdzuLdMpVJ33wxSjPkbr8pULPCNpap1Fc%2FgSgkJp4AA9FQsXYXaMfNgai%2BcU8itPH4HTNgGNOObFZF4NW9L656P4ORo4zarJ0splWehLQdhKntsYgLMGKmjdxcx6BkT0v8eHP7GymxmrC5T3LaxJkzMHS9eSxiszDqcrChMUWMvZJHuMLq5wdIGOqUBlTGU4o2hFZW8fMdbnTDEH1d2WRa%2FDO3aeJjrazSa2QjBqZmzzfop3VNhCGDlA1ZYFEl10fzOFz73U9VEQ1D7lbGBgsxaEf52cH9Y7XLqzeQCEC8Dth9lrxz%2BIA8r1KqriLaUgbz0swNaMiVMFwgRthhiBdkztj8WLbT2tDxMCERQtL8BHhRGgW2nKhdzGfL08BExpk5M983BEidQsl%2BXByCizEjO&X-Amz-Signature=8263d5dbe997c3dcf72e7b6c168adbbf25de68a23b8b444be65430eb1ba1cc49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJGGNTV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbamWXFJlGK%2FYejwJc%2BQx7tmGOuAJQNe02lfR%2B7e%2BbnAiEAvZAfq5%2F5yOA%2Bo72u4oFKoXn1Qbs06GNuqzrNYllHQmoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRfzHXXYDya9h6akSrcAxq%2BFCENBQ6ULiJmyaUqKKgwv2Q7R8835OqkIQvP4LbRI3780GDAjwnYS9d6T08uZZ0uJ3qP%2FGNFnIKcu1Ux4CHllRcfy1uZlsY8MCzCXjA%2FZfM2Dx6mKe4vFAyYI%2Fl64tSd77ya%2BOBNzkYfJb4zoNWE6Um9otJS%2FvhY2n7YDa5Rf3QuUrBxF9oY6w8JLFR5Dwaa8V9HzFi0wGEtSGZ9KvQSgjqubykfNfVYpH4BRXrP1gPIGB7UkZV4gZ37aeO2Gnli4G65u8DHZ3by6GXDyc1fmghaUXh1abYee2dzAdXpM9e%2FS2wXGLt%2BYLcCC2odoZHkP73XZioIx5wcLv0CsEjiKmWm4MZ1bHlo1XFvDbbXC52GESpDv4DK8OkdJeihAuBb8k8Yh7srpQXd6O1N8qeKe6r4jKtxCaQPHSha%2F%2Fv5VKrq9aPftI4YzhwleGVImyfrLb3eBt4XtVdzuLdMpVJ33wxSjPkbr8pULPCNpap1Fc%2FgSgkJp4AA9FQsXYXaMfNgai%2BcU8itPH4HTNgGNOObFZF4NW9L656P4ORo4zarJ0splWehLQdhKntsYgLMGKmjdxcx6BkT0v8eHP7GymxmrC5T3LaxJkzMHS9eSxiszDqcrChMUWMvZJHuMLq5wdIGOqUBlTGU4o2hFZW8fMdbnTDEH1d2WRa%2FDO3aeJjrazSa2QjBqZmzzfop3VNhCGDlA1ZYFEl10fzOFz73U9VEQ1D7lbGBgsxaEf52cH9Y7XLqzeQCEC8Dth9lrxz%2BIA8r1KqriLaUgbz0swNaMiVMFwgRthhiBdkztj8WLbT2tDxMCERQtL8BHhRGgW2nKhdzGfL08BExpk5M983BEidQsl%2BXByCizEjO&X-Amz-Signature=b2625dbcf7e8be7d76a08c21205c1cd6f333c5f5f5cec39a0a603be5ba0625a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJGGNTV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbamWXFJlGK%2FYejwJc%2BQx7tmGOuAJQNe02lfR%2B7e%2BbnAiEAvZAfq5%2F5yOA%2Bo72u4oFKoXn1Qbs06GNuqzrNYllHQmoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRfzHXXYDya9h6akSrcAxq%2BFCENBQ6ULiJmyaUqKKgwv2Q7R8835OqkIQvP4LbRI3780GDAjwnYS9d6T08uZZ0uJ3qP%2FGNFnIKcu1Ux4CHllRcfy1uZlsY8MCzCXjA%2FZfM2Dx6mKe4vFAyYI%2Fl64tSd77ya%2BOBNzkYfJb4zoNWE6Um9otJS%2FvhY2n7YDa5Rf3QuUrBxF9oY6w8JLFR5Dwaa8V9HzFi0wGEtSGZ9KvQSgjqubykfNfVYpH4BRXrP1gPIGB7UkZV4gZ37aeO2Gnli4G65u8DHZ3by6GXDyc1fmghaUXh1abYee2dzAdXpM9e%2FS2wXGLt%2BYLcCC2odoZHkP73XZioIx5wcLv0CsEjiKmWm4MZ1bHlo1XFvDbbXC52GESpDv4DK8OkdJeihAuBb8k8Yh7srpQXd6O1N8qeKe6r4jKtxCaQPHSha%2F%2Fv5VKrq9aPftI4YzhwleGVImyfrLb3eBt4XtVdzuLdMpVJ33wxSjPkbr8pULPCNpap1Fc%2FgSgkJp4AA9FQsXYXaMfNgai%2BcU8itPH4HTNgGNOObFZF4NW9L656P4ORo4zarJ0splWehLQdhKntsYgLMGKmjdxcx6BkT0v8eHP7GymxmrC5T3LaxJkzMHS9eSxiszDqcrChMUWMvZJHuMLq5wdIGOqUBlTGU4o2hFZW8fMdbnTDEH1d2WRa%2FDO3aeJjrazSa2QjBqZmzzfop3VNhCGDlA1ZYFEl10fzOFz73U9VEQ1D7lbGBgsxaEf52cH9Y7XLqzeQCEC8Dth9lrxz%2BIA8r1KqriLaUgbz0swNaMiVMFwgRthhiBdkztj8WLbT2tDxMCERQtL8BHhRGgW2nKhdzGfL08BExpk5M983BEidQsl%2BXByCizEjO&X-Amz-Signature=1932c6024f6e00d75075113468e6d9485d415bf78fe5ccc34741a7a69e6212f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJGGNTV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbamWXFJlGK%2FYejwJc%2BQx7tmGOuAJQNe02lfR%2B7e%2BbnAiEAvZAfq5%2F5yOA%2Bo72u4oFKoXn1Qbs06GNuqzrNYllHQmoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRfzHXXYDya9h6akSrcAxq%2BFCENBQ6ULiJmyaUqKKgwv2Q7R8835OqkIQvP4LbRI3780GDAjwnYS9d6T08uZZ0uJ3qP%2FGNFnIKcu1Ux4CHllRcfy1uZlsY8MCzCXjA%2FZfM2Dx6mKe4vFAyYI%2Fl64tSd77ya%2BOBNzkYfJb4zoNWE6Um9otJS%2FvhY2n7YDa5Rf3QuUrBxF9oY6w8JLFR5Dwaa8V9HzFi0wGEtSGZ9KvQSgjqubykfNfVYpH4BRXrP1gPIGB7UkZV4gZ37aeO2Gnli4G65u8DHZ3by6GXDyc1fmghaUXh1abYee2dzAdXpM9e%2FS2wXGLt%2BYLcCC2odoZHkP73XZioIx5wcLv0CsEjiKmWm4MZ1bHlo1XFvDbbXC52GESpDv4DK8OkdJeihAuBb8k8Yh7srpQXd6O1N8qeKe6r4jKtxCaQPHSha%2F%2Fv5VKrq9aPftI4YzhwleGVImyfrLb3eBt4XtVdzuLdMpVJ33wxSjPkbr8pULPCNpap1Fc%2FgSgkJp4AA9FQsXYXaMfNgai%2BcU8itPH4HTNgGNOObFZF4NW9L656P4ORo4zarJ0splWehLQdhKntsYgLMGKmjdxcx6BkT0v8eHP7GymxmrC5T3LaxJkzMHS9eSxiszDqcrChMUWMvZJHuMLq5wdIGOqUBlTGU4o2hFZW8fMdbnTDEH1d2WRa%2FDO3aeJjrazSa2QjBqZmzzfop3VNhCGDlA1ZYFEl10fzOFz73U9VEQ1D7lbGBgsxaEf52cH9Y7XLqzeQCEC8Dth9lrxz%2BIA8r1KqriLaUgbz0swNaMiVMFwgRthhiBdkztj8WLbT2tDxMCERQtL8BHhRGgW2nKhdzGfL08BExpk5M983BEidQsl%2BXByCizEjO&X-Amz-Signature=0a8057a86f952985673f81512afc6d55f8779c911c3b79be67bf2164fd92c978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLDPHN5%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC1krH3e4erNd80P5YGBAV6InAvBppZOpIGQlHVjEb7gIgcCA1v5OA%2F5zKf%2FdYLZZ7ehb2YZ%2Fl3%2BCM8I%2BQotxCeCsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwXJh00NIcl2iQYJircAxqES6MYtmfK3mq4NgW5R57Cp6F%2FWv90ntSE%2B72g3zcetFx7kh9xUUcbQ%2BFDsOn8VSZdEyEFctIHAICVdH%2FEaCERpFb0z0aQEKfzj6l%2FVyj9TuczlcynpYdPCgHGifD7%2BDRfTKi5FCF4kxxMAN6DJkXaK5PepP2qFiR0s0R1RKAygZDpsNSXa%2ByZyueOu1fKspvXvJrpTEAbe5lOqwdg0r2uGdKkmgzPT7zbZmIyX7SiZZxYsg4BQI0VvCHJpGxKPN3KanafkYzABf1R9gwGXJaLVHMuan%2BjzUIlsNqK8vM0h1a16hRI0KOEnsWpszL3pYrcYWpOjDAgiXxSnI00AURF4e4CCQ3ntw46nRwELx%2BpmxCerjap4xXzdfEwymoryuRi9o1S3umK8NAZ7lz86MneTCaIc5PcLmftODf35PRjLdqHvUZGglHasXjVE0leGVngdRg8NZf6zGCAbPEKQDaLryaIA6ezjSNI5ec98cF15uwbOYfVY7MNPjg7aW9xk%2FuTqaeOno11wRxuDT6k6%2BJwBTcj2Qhs4gj72FUrFmBBp2zsqezdK5LLAIzZHE9anLa5YdFma1qAlc5ISp5O3yKWo0GVYGi%2FdU7J690giKBeAeQykK48l4OST8ODMNG2wdIGOqUBTYmzdgOR1VwiXKN6UnUytqkqVvYR4C2n9ke9HhrQcU2T29H5L8i3f2t1IkMcLRXlO9EN6Q8htFtSDKLLoV0DsVuOptDNpVSWgPy8lPh02rMKEVebPM1nuGORSM4Jdh0cV6iFE5wVhFqnivc%2FlONxy6kGZyV4tEuiB1IzwvPrTimi6KmFUicgpeATmjyVCuEVkMmP4sLT32BzjH2QUzFb6CRXh10y&X-Amz-Signature=9356a965ea674823cec2ea4e7a7553be8f6eabe21aeeba60c6e93f209925f75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJGGNTV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbamWXFJlGK%2FYejwJc%2BQx7tmGOuAJQNe02lfR%2B7e%2BbnAiEAvZAfq5%2F5yOA%2Bo72u4oFKoXn1Qbs06GNuqzrNYllHQmoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRfzHXXYDya9h6akSrcAxq%2BFCENBQ6ULiJmyaUqKKgwv2Q7R8835OqkIQvP4LbRI3780GDAjwnYS9d6T08uZZ0uJ3qP%2FGNFnIKcu1Ux4CHllRcfy1uZlsY8MCzCXjA%2FZfM2Dx6mKe4vFAyYI%2Fl64tSd77ya%2BOBNzkYfJb4zoNWE6Um9otJS%2FvhY2n7YDa5Rf3QuUrBxF9oY6w8JLFR5Dwaa8V9HzFi0wGEtSGZ9KvQSgjqubykfNfVYpH4BRXrP1gPIGB7UkZV4gZ37aeO2Gnli4G65u8DHZ3by6GXDyc1fmghaUXh1abYee2dzAdXpM9e%2FS2wXGLt%2BYLcCC2odoZHkP73XZioIx5wcLv0CsEjiKmWm4MZ1bHlo1XFvDbbXC52GESpDv4DK8OkdJeihAuBb8k8Yh7srpQXd6O1N8qeKe6r4jKtxCaQPHSha%2F%2Fv5VKrq9aPftI4YzhwleGVImyfrLb3eBt4XtVdzuLdMpVJ33wxSjPkbr8pULPCNpap1Fc%2FgSgkJp4AA9FQsXYXaMfNgai%2BcU8itPH4HTNgGNOObFZF4NW9L656P4ORo4zarJ0splWehLQdhKntsYgLMGKmjdxcx6BkT0v8eHP7GymxmrC5T3LaxJkzMHS9eSxiszDqcrChMUWMvZJHuMLq5wdIGOqUBlTGU4o2hFZW8fMdbnTDEH1d2WRa%2FDO3aeJjrazSa2QjBqZmzzfop3VNhCGDlA1ZYFEl10fzOFz73U9VEQ1D7lbGBgsxaEf52cH9Y7XLqzeQCEC8Dth9lrxz%2BIA8r1KqriLaUgbz0swNaMiVMFwgRthhiBdkztj8WLbT2tDxMCERQtL8BHhRGgW2nKhdzGfL08BExpk5M983BEidQsl%2BXByCizEjO&X-Amz-Signature=f2fbca09a04df09df044515cf2e5ecd077a595311e3a3879cc11eef40785d8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJGGNTV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbamWXFJlGK%2FYejwJc%2BQx7tmGOuAJQNe02lfR%2B7e%2BbnAiEAvZAfq5%2F5yOA%2Bo72u4oFKoXn1Qbs06GNuqzrNYllHQmoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRfzHXXYDya9h6akSrcAxq%2BFCENBQ6ULiJmyaUqKKgwv2Q7R8835OqkIQvP4LbRI3780GDAjwnYS9d6T08uZZ0uJ3qP%2FGNFnIKcu1Ux4CHllRcfy1uZlsY8MCzCXjA%2FZfM2Dx6mKe4vFAyYI%2Fl64tSd77ya%2BOBNzkYfJb4zoNWE6Um9otJS%2FvhY2n7YDa5Rf3QuUrBxF9oY6w8JLFR5Dwaa8V9HzFi0wGEtSGZ9KvQSgjqubykfNfVYpH4BRXrP1gPIGB7UkZV4gZ37aeO2Gnli4G65u8DHZ3by6GXDyc1fmghaUXh1abYee2dzAdXpM9e%2FS2wXGLt%2BYLcCC2odoZHkP73XZioIx5wcLv0CsEjiKmWm4MZ1bHlo1XFvDbbXC52GESpDv4DK8OkdJeihAuBb8k8Yh7srpQXd6O1N8qeKe6r4jKtxCaQPHSha%2F%2Fv5VKrq9aPftI4YzhwleGVImyfrLb3eBt4XtVdzuLdMpVJ33wxSjPkbr8pULPCNpap1Fc%2FgSgkJp4AA9FQsXYXaMfNgai%2BcU8itPH4HTNgGNOObFZF4NW9L656P4ORo4zarJ0splWehLQdhKntsYgLMGKmjdxcx6BkT0v8eHP7GymxmrC5T3LaxJkzMHS9eSxiszDqcrChMUWMvZJHuMLq5wdIGOqUBlTGU4o2hFZW8fMdbnTDEH1d2WRa%2FDO3aeJjrazSa2QjBqZmzzfop3VNhCGDlA1ZYFEl10fzOFz73U9VEQ1D7lbGBgsxaEf52cH9Y7XLqzeQCEC8Dth9lrxz%2BIA8r1KqriLaUgbz0swNaMiVMFwgRthhiBdkztj8WLbT2tDxMCERQtL8BHhRGgW2nKhdzGfL08BExpk5M983BEidQsl%2BXByCizEjO&X-Amz-Signature=7b5498728b33926b441a58d8b77322f14e426f7b937b2ca0e1da07ba76f20591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJGGNTV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbamWXFJlGK%2FYejwJc%2BQx7tmGOuAJQNe02lfR%2B7e%2BbnAiEAvZAfq5%2F5yOA%2Bo72u4oFKoXn1Qbs06GNuqzrNYllHQmoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRfzHXXYDya9h6akSrcAxq%2BFCENBQ6ULiJmyaUqKKgwv2Q7R8835OqkIQvP4LbRI3780GDAjwnYS9d6T08uZZ0uJ3qP%2FGNFnIKcu1Ux4CHllRcfy1uZlsY8MCzCXjA%2FZfM2Dx6mKe4vFAyYI%2Fl64tSd77ya%2BOBNzkYfJb4zoNWE6Um9otJS%2FvhY2n7YDa5Rf3QuUrBxF9oY6w8JLFR5Dwaa8V9HzFi0wGEtSGZ9KvQSgjqubykfNfVYpH4BRXrP1gPIGB7UkZV4gZ37aeO2Gnli4G65u8DHZ3by6GXDyc1fmghaUXh1abYee2dzAdXpM9e%2FS2wXGLt%2BYLcCC2odoZHkP73XZioIx5wcLv0CsEjiKmWm4MZ1bHlo1XFvDbbXC52GESpDv4DK8OkdJeihAuBb8k8Yh7srpQXd6O1N8qeKe6r4jKtxCaQPHSha%2F%2Fv5VKrq9aPftI4YzhwleGVImyfrLb3eBt4XtVdzuLdMpVJ33wxSjPkbr8pULPCNpap1Fc%2FgSgkJp4AA9FQsXYXaMfNgai%2BcU8itPH4HTNgGNOObFZF4NW9L656P4ORo4zarJ0splWehLQdhKntsYgLMGKmjdxcx6BkT0v8eHP7GymxmrC5T3LaxJkzMHS9eSxiszDqcrChMUWMvZJHuMLq5wdIGOqUBlTGU4o2hFZW8fMdbnTDEH1d2WRa%2FDO3aeJjrazSa2QjBqZmzzfop3VNhCGDlA1ZYFEl10fzOFz73U9VEQ1D7lbGBgsxaEf52cH9Y7XLqzeQCEC8Dth9lrxz%2BIA8r1KqriLaUgbz0swNaMiVMFwgRthhiBdkztj8WLbT2tDxMCERQtL8BHhRGgW2nKhdzGfL08BExpk5M983BEidQsl%2BXByCizEjO&X-Amz-Signature=1932c6024f6e00d75075113468e6d9485d415bf78fe5ccc34741a7a69e6212f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJGGNTV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbamWXFJlGK%2FYejwJc%2BQx7tmGOuAJQNe02lfR%2B7e%2BbnAiEAvZAfq5%2F5yOA%2Bo72u4oFKoXn1Qbs06GNuqzrNYllHQmoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRfzHXXYDya9h6akSrcAxq%2BFCENBQ6ULiJmyaUqKKgwv2Q7R8835OqkIQvP4LbRI3780GDAjwnYS9d6T08uZZ0uJ3qP%2FGNFnIKcu1Ux4CHllRcfy1uZlsY8MCzCXjA%2FZfM2Dx6mKe4vFAyYI%2Fl64tSd77ya%2BOBNzkYfJb4zoNWE6Um9otJS%2FvhY2n7YDa5Rf3QuUrBxF9oY6w8JLFR5Dwaa8V9HzFi0wGEtSGZ9KvQSgjqubykfNfVYpH4BRXrP1gPIGB7UkZV4gZ37aeO2Gnli4G65u8DHZ3by6GXDyc1fmghaUXh1abYee2dzAdXpM9e%2FS2wXGLt%2BYLcCC2odoZHkP73XZioIx5wcLv0CsEjiKmWm4MZ1bHlo1XFvDbbXC52GESpDv4DK8OkdJeihAuBb8k8Yh7srpQXd6O1N8qeKe6r4jKtxCaQPHSha%2F%2Fv5VKrq9aPftI4YzhwleGVImyfrLb3eBt4XtVdzuLdMpVJ33wxSjPkbr8pULPCNpap1Fc%2FgSgkJp4AA9FQsXYXaMfNgai%2BcU8itPH4HTNgGNOObFZF4NW9L656P4ORo4zarJ0splWehLQdhKntsYgLMGKmjdxcx6BkT0v8eHP7GymxmrC5T3LaxJkzMHS9eSxiszDqcrChMUWMvZJHuMLq5wdIGOqUBlTGU4o2hFZW8fMdbnTDEH1d2WRa%2FDO3aeJjrazSa2QjBqZmzzfop3VNhCGDlA1ZYFEl10fzOFz73U9VEQ1D7lbGBgsxaEf52cH9Y7XLqzeQCEC8Dth9lrxz%2BIA8r1KqriLaUgbz0swNaMiVMFwgRthhiBdkztj8WLbT2tDxMCERQtL8BHhRGgW2nKhdzGfL08BExpk5M983BEidQsl%2BXByCizEjO&X-Amz-Signature=fdc56aaa300f8603107daf13205b1a8b69fda87b6b26d3f7f4d104f792f815b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJGGNTV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbamWXFJlGK%2FYejwJc%2BQx7tmGOuAJQNe02lfR%2B7e%2BbnAiEAvZAfq5%2F5yOA%2Bo72u4oFKoXn1Qbs06GNuqzrNYllHQmoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRfzHXXYDya9h6akSrcAxq%2BFCENBQ6ULiJmyaUqKKgwv2Q7R8835OqkIQvP4LbRI3780GDAjwnYS9d6T08uZZ0uJ3qP%2FGNFnIKcu1Ux4CHllRcfy1uZlsY8MCzCXjA%2FZfM2Dx6mKe4vFAyYI%2Fl64tSd77ya%2BOBNzkYfJb4zoNWE6Um9otJS%2FvhY2n7YDa5Rf3QuUrBxF9oY6w8JLFR5Dwaa8V9HzFi0wGEtSGZ9KvQSgjqubykfNfVYpH4BRXrP1gPIGB7UkZV4gZ37aeO2Gnli4G65u8DHZ3by6GXDyc1fmghaUXh1abYee2dzAdXpM9e%2FS2wXGLt%2BYLcCC2odoZHkP73XZioIx5wcLv0CsEjiKmWm4MZ1bHlo1XFvDbbXC52GESpDv4DK8OkdJeihAuBb8k8Yh7srpQXd6O1N8qeKe6r4jKtxCaQPHSha%2F%2Fv5VKrq9aPftI4YzhwleGVImyfrLb3eBt4XtVdzuLdMpVJ33wxSjPkbr8pULPCNpap1Fc%2FgSgkJp4AA9FQsXYXaMfNgai%2BcU8itPH4HTNgGNOObFZF4NW9L656P4ORo4zarJ0splWehLQdhKntsYgLMGKmjdxcx6BkT0v8eHP7GymxmrC5T3LaxJkzMHS9eSxiszDqcrChMUWMvZJHuMLq5wdIGOqUBlTGU4o2hFZW8fMdbnTDEH1d2WRa%2FDO3aeJjrazSa2QjBqZmzzfop3VNhCGDlA1ZYFEl10fzOFz73U9VEQ1D7lbGBgsxaEf52cH9Y7XLqzeQCEC8Dth9lrxz%2BIA8r1KqriLaUgbz0swNaMiVMFwgRthhiBdkztj8WLbT2tDxMCERQtL8BHhRGgW2nKhdzGfL08BExpk5M983BEidQsl%2BXByCizEjO&X-Amz-Signature=d28d38b7422c0646a1870075c1f59dd5f80419182d2b8895e81d0f965a5cf0ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJGGNTV%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbamWXFJlGK%2FYejwJc%2BQx7tmGOuAJQNe02lfR%2B7e%2BbnAiEAvZAfq5%2F5yOA%2Bo72u4oFKoXn1Qbs06GNuqzrNYllHQmoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRfzHXXYDya9h6akSrcAxq%2BFCENBQ6ULiJmyaUqKKgwv2Q7R8835OqkIQvP4LbRI3780GDAjwnYS9d6T08uZZ0uJ3qP%2FGNFnIKcu1Ux4CHllRcfy1uZlsY8MCzCXjA%2FZfM2Dx6mKe4vFAyYI%2Fl64tSd77ya%2BOBNzkYfJb4zoNWE6Um9otJS%2FvhY2n7YDa5Rf3QuUrBxF9oY6w8JLFR5Dwaa8V9HzFi0wGEtSGZ9KvQSgjqubykfNfVYpH4BRXrP1gPIGB7UkZV4gZ37aeO2Gnli4G65u8DHZ3by6GXDyc1fmghaUXh1abYee2dzAdXpM9e%2FS2wXGLt%2BYLcCC2odoZHkP73XZioIx5wcLv0CsEjiKmWm4MZ1bHlo1XFvDbbXC52GESpDv4DK8OkdJeihAuBb8k8Yh7srpQXd6O1N8qeKe6r4jKtxCaQPHSha%2F%2Fv5VKrq9aPftI4YzhwleGVImyfrLb3eBt4XtVdzuLdMpVJ33wxSjPkbr8pULPCNpap1Fc%2FgSgkJp4AA9FQsXYXaMfNgai%2BcU8itPH4HTNgGNOObFZF4NW9L656P4ORo4zarJ0splWehLQdhKntsYgLMGKmjdxcx6BkT0v8eHP7GymxmrC5T3LaxJkzMHS9eSxiszDqcrChMUWMvZJHuMLq5wdIGOqUBlTGU4o2hFZW8fMdbnTDEH1d2WRa%2FDO3aeJjrazSa2QjBqZmzzfop3VNhCGDlA1ZYFEl10fzOFz73U9VEQ1D7lbGBgsxaEf52cH9Y7XLqzeQCEC8Dth9lrxz%2BIA8r1KqriLaUgbz0swNaMiVMFwgRthhiBdkztj8WLbT2tDxMCERQtL8BHhRGgW2nKhdzGfL08BExpk5M983BEidQsl%2BXByCizEjO&X-Amz-Signature=8148c8db611b2ab43f8d4951efb8cea0f0ba1167cbf63b6f0cf58fd880a15d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


