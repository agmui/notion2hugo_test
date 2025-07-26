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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=053fbcf645731291487864bf107772fb21f668784c7782f9df82ea149fd48a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=610526ef53a5e8df3044af85b06594dec25f09ae055bf11ee4867b3f94e1d93c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=7a83269e68730fcb7914c7f79f7bff2e1f1697c27fecc3ea29c4dada6542f7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=5ccf12ab031231cacdc6c376e785a0a38f8eaf442a86b68ab0422c03be7be429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=89838cf419f85f4b624426c91b53865de2adad1768c52370c4e4e893e0fb4b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=96d0936bf7af3051401704638214570490d25b1035d0baae73b12d35fbb51b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=89e62a0dbb01c6743c131380fafacff2a773d87d275461d38de531db78e5cc28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=4cd8698e4f2c5043caae1ea464c50e333e3f2440fac6476ebaaf123e71d44379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=d4e9b79329efcb499206d0fe9b224cff5b7aef8c348079be18c0f1d2e462523c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=4a0b565c68ff8f1f73d14e22cc704a5b4b782235c35d836ba23fd90955722d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=556b0a95e4efb1a939fca6107b5a97a78a20b2d9aa08a0ad06aeab3143bc219c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=dcb454db409140a33d52770a1c4f895441dfe4462a3e587c370ce8e4007b30f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=6bb56b2a2c6a4050c9aa800af9027d65a3907b4c11562ac6fb2afd9e6bf82afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEGZLPV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD5C2Cff500u0jxblbaIOXqiYUo5UZVU2IJiIzpS6lPWQIhALvCjDSCHACYuJi%2BwVO0WN40T84joeK%2FJIoKkHRZAHSuKv8DCFkQABoMNjM3NDIzMTgzODA1IgxcXSUeVoXXqgAhzhEq3AOhV9OMnwdV%2F7%2F5jodFP9uIxN%2B9ybBL0g4aoo9Uw5dbx3vZ3x177irhXT3xl72SImI%2BYdxG%2BcOw6MU%2Fqm9IUICVJYWQSM8w3UVerJH6RG3IT5lohR8g%2Bz5APeP4yA1%2BLcXKFLvGLhIs9TgAt30lAebaAlhRhQlbARxYxH5yJW%2Fl%2Fd8NBmNp25BxqOA0UnQ3kUC4d8ysJfdPfM6MCZpx9XrlNgvV4i2r35xmRmCZDG7NU3OResh46oHp0LYgP%2BGZ03%2B7fwk2yyHrZ6zZSviOBJ62qaY5LZCqFfurg%2BobopzLmXfsnmOpf5ibXkeot9meeI818qMxHSicQB3XMcHThpaFtl8KSIe3shlOkK95oxYXpNUt%2BZ1xNsPZKSsB32xSDGJortGBMfsbyhHAST%2FLsIt4Ooi%2B3WsFqwtcJJwCqwodCWj0op%2FJfeVCqqqeIOZg52%2FtrOYc2JUeDsHTV7InO1dAPcGWqckzuNpn0iHOkuatfXW9Zq9gvYxkjtJgK3ZK9Vqmrlafn7ztkqhC5EO5XMLbhF7svgA4MQUZKjB6b%2BavdxO%2FIsP%2B9PiH%2B%2F8FoE3JxXvVtB%2FbPk%2BIsKIjaHLrJiwzQP2eba8L7lnlmI9KgzYKeNEZCDn%2F8k9wffHIDjD5hpLEBjqkAfpiPKK86RMcO8vhQxgIcNDcfn3wPfeoIT%2Bf7LgR4NIjUzZoyeKFvfbIn2wslKTL8GOqN6Omtxv66ITz9J3xby6aCLo2bmfq9IKhmVXFHDz8XYaAYDIALJ6WlBICtlr3rVEDdV1AXbOkjGWc%2Bqd4o%2BHYdSnKnwpyT94mCcB4V%2BVbvw4TpHz3BITnjDNziL4iTMXIDfpwyg1%2F9BLKRzkiWuEFfWDc&X-Amz-Signature=6f59bbe960ea6ba27e1a7dac29dbdbad0ded98b9576f394d370ee5c2e58c70ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQ22HDB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBHNDjI27v1LInfE3rk0503GGy8PVMyK8jiZ3ssoAhOeAiBOoxz4FvuTHdPJcUDf48uFERXO0UVRV762mY1V8Kdf4yr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMO8jcCkFKTno4gs6NKtwDPIe22gvRaZ%2FgGLr2gQ0ASbAlVWZ%2BP9caxFLUZ93lSJi89Ix%2FBZNorL%2BbqWHJCXj85ZoX1OxqdThV4a6CLU1aIxLSV7A%2Fa3RgAl7Lh7nTjzcIuHAkjfWHfsOD8BxAkfjJMvZm1woM9%2Fu9%2Bni4AeJy8f7%2BuSXb69FUOg9QI2Wa7nRTyZX4eOr4DF8xZi95GECqwtsXFnn8dblGnEEdV5y4k5H4TkcJs2Mz6P3W2cO93440IlwHGoBdzGxAn9aNK%2BJwG5z0QExkDBWb7okQdnZZS7jYXgC3LwTQu1zN0uhmZLR1BGhXX8RJ7mGRRk%2FdtSlK0wq66K9d4pDU2MZxdX7QZrykdDb5TiT%2BgoClJhyqfZrnK253kGGfSCX6ydVMy8b7R4%2FvJpG4dbJFVnMphYAOxsX7HkEYZCPJTMNkMDZ9Qiik%2FwMZqd4ON6PgYiOFTRp%2Bvz2HXp2DecRIFki81MUIUQhvLLl1QQZ1cA5gHLIjb8dg33XJiRfBYT82Q6OIkN5SZqswx7NTWI0%2FwDdXLMK0Wmmz9Tko3tM1JHPR4%2Fr4eQmPzc0RHX0ZRah19WiKiWaEOYn8Jed1gQpoZ98Zg1l3hcB3iCEsU876EcqpjQJPsx1rMi08hzaCZ6Eu2uswmIaSxAY6pgGZm84MSwM%2F28T0mltpuKr%2FRe2A8wYSoUenBsn2RgOaR7%2Fy780Hx2dIpro9pSBcPcGg2bxf%2BE9zezZNMT69qmMg1tqiG92ToN%2F7ATIj%2B26lQrVoPk%2B8Z99NBVD2akj7IrGUbPjVSclv6dHKSXhkYzot%2Fxe4goGI6A1moVPP2nFvQ2HlfBX1KzfrCl%2Fa6ZDH%2BJXRnZHwm46E85pHB1%2F3Iw5XHiAnjRFu&X-Amz-Signature=d9508a341fa8fbd42bd5a86e0a3e99f8a47eb3e10951bc3e7d3377001c0bc29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQ22HDB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBHNDjI27v1LInfE3rk0503GGy8PVMyK8jiZ3ssoAhOeAiBOoxz4FvuTHdPJcUDf48uFERXO0UVRV762mY1V8Kdf4yr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMO8jcCkFKTno4gs6NKtwDPIe22gvRaZ%2FgGLr2gQ0ASbAlVWZ%2BP9caxFLUZ93lSJi89Ix%2FBZNorL%2BbqWHJCXj85ZoX1OxqdThV4a6CLU1aIxLSV7A%2Fa3RgAl7Lh7nTjzcIuHAkjfWHfsOD8BxAkfjJMvZm1woM9%2Fu9%2Bni4AeJy8f7%2BuSXb69FUOg9QI2Wa7nRTyZX4eOr4DF8xZi95GECqwtsXFnn8dblGnEEdV5y4k5H4TkcJs2Mz6P3W2cO93440IlwHGoBdzGxAn9aNK%2BJwG5z0QExkDBWb7okQdnZZS7jYXgC3LwTQu1zN0uhmZLR1BGhXX8RJ7mGRRk%2FdtSlK0wq66K9d4pDU2MZxdX7QZrykdDb5TiT%2BgoClJhyqfZrnK253kGGfSCX6ydVMy8b7R4%2FvJpG4dbJFVnMphYAOxsX7HkEYZCPJTMNkMDZ9Qiik%2FwMZqd4ON6PgYiOFTRp%2Bvz2HXp2DecRIFki81MUIUQhvLLl1QQZ1cA5gHLIjb8dg33XJiRfBYT82Q6OIkN5SZqswx7NTWI0%2FwDdXLMK0Wmmz9Tko3tM1JHPR4%2Fr4eQmPzc0RHX0ZRah19WiKiWaEOYn8Jed1gQpoZ98Zg1l3hcB3iCEsU876EcqpjQJPsx1rMi08hzaCZ6Eu2uswmIaSxAY6pgGZm84MSwM%2F28T0mltpuKr%2FRe2A8wYSoUenBsn2RgOaR7%2Fy780Hx2dIpro9pSBcPcGg2bxf%2BE9zezZNMT69qmMg1tqiG92ToN%2F7ATIj%2B26lQrVoPk%2B8Z99NBVD2akj7IrGUbPjVSclv6dHKSXhkYzot%2Fxe4goGI6A1moVPP2nFvQ2HlfBX1KzfrCl%2Fa6ZDH%2BJXRnZHwm46E85pHB1%2F3Iw5XHiAnjRFu&X-Amz-Signature=13c3e3e958969a3e4f14145748642ba3a2dee8cb78052f298bfdf6f166b21df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQ22HDB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBHNDjI27v1LInfE3rk0503GGy8PVMyK8jiZ3ssoAhOeAiBOoxz4FvuTHdPJcUDf48uFERXO0UVRV762mY1V8Kdf4yr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMO8jcCkFKTno4gs6NKtwDPIe22gvRaZ%2FgGLr2gQ0ASbAlVWZ%2BP9caxFLUZ93lSJi89Ix%2FBZNorL%2BbqWHJCXj85ZoX1OxqdThV4a6CLU1aIxLSV7A%2Fa3RgAl7Lh7nTjzcIuHAkjfWHfsOD8BxAkfjJMvZm1woM9%2Fu9%2Bni4AeJy8f7%2BuSXb69FUOg9QI2Wa7nRTyZX4eOr4DF8xZi95GECqwtsXFnn8dblGnEEdV5y4k5H4TkcJs2Mz6P3W2cO93440IlwHGoBdzGxAn9aNK%2BJwG5z0QExkDBWb7okQdnZZS7jYXgC3LwTQu1zN0uhmZLR1BGhXX8RJ7mGRRk%2FdtSlK0wq66K9d4pDU2MZxdX7QZrykdDb5TiT%2BgoClJhyqfZrnK253kGGfSCX6ydVMy8b7R4%2FvJpG4dbJFVnMphYAOxsX7HkEYZCPJTMNkMDZ9Qiik%2FwMZqd4ON6PgYiOFTRp%2Bvz2HXp2DecRIFki81MUIUQhvLLl1QQZ1cA5gHLIjb8dg33XJiRfBYT82Q6OIkN5SZqswx7NTWI0%2FwDdXLMK0Wmmz9Tko3tM1JHPR4%2Fr4eQmPzc0RHX0ZRah19WiKiWaEOYn8Jed1gQpoZ98Zg1l3hcB3iCEsU876EcqpjQJPsx1rMi08hzaCZ6Eu2uswmIaSxAY6pgGZm84MSwM%2F28T0mltpuKr%2FRe2A8wYSoUenBsn2RgOaR7%2Fy780Hx2dIpro9pSBcPcGg2bxf%2BE9zezZNMT69qmMg1tqiG92ToN%2F7ATIj%2B26lQrVoPk%2B8Z99NBVD2akj7IrGUbPjVSclv6dHKSXhkYzot%2Fxe4goGI6A1moVPP2nFvQ2HlfBX1KzfrCl%2Fa6ZDH%2BJXRnZHwm46E85pHB1%2F3Iw5XHiAnjRFu&X-Amz-Signature=7538ce7a753bd0475ae67e4f7c198aabd1edda2411f9be6682af307bfd82cb11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQ22HDB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBHNDjI27v1LInfE3rk0503GGy8PVMyK8jiZ3ssoAhOeAiBOoxz4FvuTHdPJcUDf48uFERXO0UVRV762mY1V8Kdf4yr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMO8jcCkFKTno4gs6NKtwDPIe22gvRaZ%2FgGLr2gQ0ASbAlVWZ%2BP9caxFLUZ93lSJi89Ix%2FBZNorL%2BbqWHJCXj85ZoX1OxqdThV4a6CLU1aIxLSV7A%2Fa3RgAl7Lh7nTjzcIuHAkjfWHfsOD8BxAkfjJMvZm1woM9%2Fu9%2Bni4AeJy8f7%2BuSXb69FUOg9QI2Wa7nRTyZX4eOr4DF8xZi95GECqwtsXFnn8dblGnEEdV5y4k5H4TkcJs2Mz6P3W2cO93440IlwHGoBdzGxAn9aNK%2BJwG5z0QExkDBWb7okQdnZZS7jYXgC3LwTQu1zN0uhmZLR1BGhXX8RJ7mGRRk%2FdtSlK0wq66K9d4pDU2MZxdX7QZrykdDb5TiT%2BgoClJhyqfZrnK253kGGfSCX6ydVMy8b7R4%2FvJpG4dbJFVnMphYAOxsX7HkEYZCPJTMNkMDZ9Qiik%2FwMZqd4ON6PgYiOFTRp%2Bvz2HXp2DecRIFki81MUIUQhvLLl1QQZ1cA5gHLIjb8dg33XJiRfBYT82Q6OIkN5SZqswx7NTWI0%2FwDdXLMK0Wmmz9Tko3tM1JHPR4%2Fr4eQmPzc0RHX0ZRah19WiKiWaEOYn8Jed1gQpoZ98Zg1l3hcB3iCEsU876EcqpjQJPsx1rMi08hzaCZ6Eu2uswmIaSxAY6pgGZm84MSwM%2F28T0mltpuKr%2FRe2A8wYSoUenBsn2RgOaR7%2Fy780Hx2dIpro9pSBcPcGg2bxf%2BE9zezZNMT69qmMg1tqiG92ToN%2F7ATIj%2B26lQrVoPk%2B8Z99NBVD2akj7IrGUbPjVSclv6dHKSXhkYzot%2Fxe4goGI6A1moVPP2nFvQ2HlfBX1KzfrCl%2Fa6ZDH%2BJXRnZHwm46E85pHB1%2F3Iw5XHiAnjRFu&X-Amz-Signature=3184d2f3ed8148ad26e393444d0672dad92085fbdcaafb206764efccf025a922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQ22HDB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBHNDjI27v1LInfE3rk0503GGy8PVMyK8jiZ3ssoAhOeAiBOoxz4FvuTHdPJcUDf48uFERXO0UVRV762mY1V8Kdf4yr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMO8jcCkFKTno4gs6NKtwDPIe22gvRaZ%2FgGLr2gQ0ASbAlVWZ%2BP9caxFLUZ93lSJi89Ix%2FBZNorL%2BbqWHJCXj85ZoX1OxqdThV4a6CLU1aIxLSV7A%2Fa3RgAl7Lh7nTjzcIuHAkjfWHfsOD8BxAkfjJMvZm1woM9%2Fu9%2Bni4AeJy8f7%2BuSXb69FUOg9QI2Wa7nRTyZX4eOr4DF8xZi95GECqwtsXFnn8dblGnEEdV5y4k5H4TkcJs2Mz6P3W2cO93440IlwHGoBdzGxAn9aNK%2BJwG5z0QExkDBWb7okQdnZZS7jYXgC3LwTQu1zN0uhmZLR1BGhXX8RJ7mGRRk%2FdtSlK0wq66K9d4pDU2MZxdX7QZrykdDb5TiT%2BgoClJhyqfZrnK253kGGfSCX6ydVMy8b7R4%2FvJpG4dbJFVnMphYAOxsX7HkEYZCPJTMNkMDZ9Qiik%2FwMZqd4ON6PgYiOFTRp%2Bvz2HXp2DecRIFki81MUIUQhvLLl1QQZ1cA5gHLIjb8dg33XJiRfBYT82Q6OIkN5SZqswx7NTWI0%2FwDdXLMK0Wmmz9Tko3tM1JHPR4%2Fr4eQmPzc0RHX0ZRah19WiKiWaEOYn8Jed1gQpoZ98Zg1l3hcB3iCEsU876EcqpjQJPsx1rMi08hzaCZ6Eu2uswmIaSxAY6pgGZm84MSwM%2F28T0mltpuKr%2FRe2A8wYSoUenBsn2RgOaR7%2Fy780Hx2dIpro9pSBcPcGg2bxf%2BE9zezZNMT69qmMg1tqiG92ToN%2F7ATIj%2B26lQrVoPk%2B8Z99NBVD2akj7IrGUbPjVSclv6dHKSXhkYzot%2Fxe4goGI6A1moVPP2nFvQ2HlfBX1KzfrCl%2Fa6ZDH%2BJXRnZHwm46E85pHB1%2F3Iw5XHiAnjRFu&X-Amz-Signature=fd8919609d9b4511cd232d1d059354d57d71518a12750ad7e2f69753776ec59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQ22HDB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBHNDjI27v1LInfE3rk0503GGy8PVMyK8jiZ3ssoAhOeAiBOoxz4FvuTHdPJcUDf48uFERXO0UVRV762mY1V8Kdf4yr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMO8jcCkFKTno4gs6NKtwDPIe22gvRaZ%2FgGLr2gQ0ASbAlVWZ%2BP9caxFLUZ93lSJi89Ix%2FBZNorL%2BbqWHJCXj85ZoX1OxqdThV4a6CLU1aIxLSV7A%2Fa3RgAl7Lh7nTjzcIuHAkjfWHfsOD8BxAkfjJMvZm1woM9%2Fu9%2Bni4AeJy8f7%2BuSXb69FUOg9QI2Wa7nRTyZX4eOr4DF8xZi95GECqwtsXFnn8dblGnEEdV5y4k5H4TkcJs2Mz6P3W2cO93440IlwHGoBdzGxAn9aNK%2BJwG5z0QExkDBWb7okQdnZZS7jYXgC3LwTQu1zN0uhmZLR1BGhXX8RJ7mGRRk%2FdtSlK0wq66K9d4pDU2MZxdX7QZrykdDb5TiT%2BgoClJhyqfZrnK253kGGfSCX6ydVMy8b7R4%2FvJpG4dbJFVnMphYAOxsX7HkEYZCPJTMNkMDZ9Qiik%2FwMZqd4ON6PgYiOFTRp%2Bvz2HXp2DecRIFki81MUIUQhvLLl1QQZ1cA5gHLIjb8dg33XJiRfBYT82Q6OIkN5SZqswx7NTWI0%2FwDdXLMK0Wmmz9Tko3tM1JHPR4%2Fr4eQmPzc0RHX0ZRah19WiKiWaEOYn8Jed1gQpoZ98Zg1l3hcB3iCEsU876EcqpjQJPsx1rMi08hzaCZ6Eu2uswmIaSxAY6pgGZm84MSwM%2F28T0mltpuKr%2FRe2A8wYSoUenBsn2RgOaR7%2Fy780Hx2dIpro9pSBcPcGg2bxf%2BE9zezZNMT69qmMg1tqiG92ToN%2F7ATIj%2B26lQrVoPk%2B8Z99NBVD2akj7IrGUbPjVSclv6dHKSXhkYzot%2Fxe4goGI6A1moVPP2nFvQ2HlfBX1KzfrCl%2Fa6ZDH%2BJXRnZHwm46E85pHB1%2F3Iw5XHiAnjRFu&X-Amz-Signature=39db40589af3d038e3f5976371511c5fc5c26a7c586f7f9fae0bbcd368c10434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
