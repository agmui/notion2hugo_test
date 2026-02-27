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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=6217182420cc895350c598c92d0201f32aaac92fadf57bc11eb01446cb7fbc16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=5982865052f55807d5877cfb849c65f9db39561728566eeb52d48523dd14b542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=afee1bbe8a436975ca91b977602cfc73e1b74fbe92d10cbf67db0bb6b4ee3da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=39d9b785aaed1c96f0cae8914f82253b378313053202f2ab7108cd0367f8a5f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=04dbe5c77af9adfa4ec4700f372aee7cc437c1dbd7061faf918916af6c66397f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=fcc97138ff331a6556a4ed27bcfa768890fa336e5b70c6877edfe587af5526ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=9e9a9a2e39c7d480b9cae6b78225c1baa76a46ae4441fdff5dd5e4692a17a74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=22e6d042d7c6e8963b65c8812fb6ddadb793d1ea4829a43d05debfe2739f2373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=9e0acba08eb45a48721047e9401e049fb3b0803e4d47184296e3fa09c7debaaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=681326ec6cfb436716dc234ee8a9523452581dfd8384b44765dfdab65236e206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5FNLNFM%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC0udATJd%2Fv84B1QzncPTM7on0YPdGMYqRE537zWcSguAIgZxSlGcYdcwei76r0TpGFkpDouymgbOBh0ODroXx%2F2Owq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKIRZS8BtYCKEI2ISSrcA45dUpPnPYRHveOs578tRWAo4vh11%2BbKYGo6CKliCXv6gcfGPRd%2BbArrlg%2BYd8iRuQq2Vp8LUdfl7t15Jmk050zthk5h9FqFT8VshHqH19Mh4dh9Dc1535bhETudhIlv2Gv%2FUjHYOfSEM93ZQJfBToyxiG4Kfbi5S%2F%2F7spoHmE6wN10bxbbZXDv2yD3vcaW0Tte8afkZ%2Fw9Qc0mBURaDiSPCU3Iz%2FVdXXhu13a5CdcAlu4HQmyDnEbbwm2a3OYN2cIKoIfJ3P6JCUPKbr%2FCWJn6%2BRuUbN4eBnUg7LDNBktOH2%2FBQrHncAzcbsfI8BQBYZ2LEKOJektizhz%2FVjuZNQioh2o9KkeLLr3GHVLPKyVCkct0IFbGBmql4njqxfYuBGQiY87RYJvj%2FvEAkCjyybR9BIukKxmKMIyrnKdIuF3UNzbKLtY%2FmrbLGwUecNcGqRCs%2F60IAKi8m3zPOzhZLp3r5sEmmVsQykHIVxAdPkyjU1ruWnETjj7cSG9l4kzTjXzIt4oCZecusC4B5w4fcm2xlf9n%2BdzdcssvXwMd4uDLQQFuLn8RqZOVadVNkA0yrCMSTKBGFTIBRVln%2B9vp45eck7nxqNrKN8duprW%2BCK0YWn30UU5UMh5624WHMMOPag80GOqUBgPT2WKzNEgkKhKYegH4k4Cx2dern0W%2Fb6sFdmRkHAfyzTYm4mDLCixctL3PPYLxk1PoXubbOlaJ9%2Blft6EfSR4kwPP5MKkJevcxmDjvhQ5MKkiVUlnYMbFBYWp3v%2Fcz9XIYyLsHXsQbtRMxclRJEgiw1C0J4Kt6g8NfLm3Dn38UJLe1abngutHy3vaBLiZU6eQymxKZI10Ls4KroNBW9BYWDZ%2FfP&X-Amz-Signature=d7e2837dd42928ce8fe5a46e61c7467eb9985de15b30a84906606a4b8db98afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV77OFIN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICBD7ctkArRMGoIcEKcD29cNGIDlfOP6kwyGaToK%2FLFTAiAz0dPBMS83lKF9VNdC6IYVnR3P0ympRvYca0Gxbcj6xyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMlkza5MKl5ROYTLEzKtwDcr1PIULVQWiEzkC5J10xPWvetU3SxxwRVtqSjdmSFHEoJKa7VVfMq3%2BTOpsmLJ6WLEFXc%2FUDo%2B3kGDD3SpYF4YgQXE7HRu1faizNrbdh%2FPkyspCsuiIKHauOV7Wtl8Cx8duXXaBAfUhAeRan0XuAY%2FGCYjD2bz%2B%2BzyEIxkcHQ5H4ZPk2e99jnzz82nSb0pTZv9whz4goQbFJmpp4uAoo26U4JbffFuPACNntUR5ejFP6rIxO8NmGRtKeiNb9b%2B%2F0csjr118zrUdvzTIOyIHhZbq1WjFzrnGExnwqsCPPl8opmgAjbC0v7z9xCE2LyW%2Fxo1Ud%2FaLbFR64v6TzeZxUUxUWz5%2BRnEexolaaHvGaYRd2Ce1Srh82ccNW0zU0oUp7c5ItJfl7A266uXsn80XmOJkAQL61u7m2w%2BH0QvCCtcwmZ7%2FjtEXKfxapPTxZ%2BsR3UwnYDBqB8%2BtpwGROJed0XH9qIbqzS9Whid9PZa2W0A%2B4lUPFZ5%2Fg3nMMlirFTIkAgdtZz61AXu79q4oOZqDsI1JmDUTVCXF%2Bwptmb3ERQbBSVSjqL8Mr34lVtA5%2FkWHEMtpzrCNs23CYotjjTn%2FdE7evFJMKOLxbBVjGEV8WUucy9xOhmknmse6dYS0w3tqDzQY6pgFfaArwACOny8KmCWAG2cEkRfxu%2BWC0MvlOuK81%2Fl5EMU%2BFfvnT%2BTwOiv0wpQJESMMQ%2F3FSedc%2Fz%2F1kRQgSYoGyknyUBtN0p6sTauPxpTkh1EkyTVdUUtBRQlfq9aYQX5fQTxasZY9ZwidEbCnirh591mAiXF9%2B7OhAAGPvchOIcCa28mJeKDKsgOV62VnA1%2B%2F52tblbtHHgziUlgO%2Bnk4I5c9%2FsrgN&X-Amz-Signature=d8ebc0cdf02950a8a0f5ce55a156e0651a7c5bd4d8c5cccb9a963d5cfedf8bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DSOKM4Y%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCbs5F9OsLzbzQxoK3McH5mP1xSBPhXjM%2FbtQQNNR7WZQIhAKKpDXD9jQI%2Fbn6AEaQqQrbdycwpJtltL3ftn%2B6eolP%2FKv8DCDIQABoMNjM3NDIzMTgzODA1Igz%2FgbLE6tdWVdfyenIq3AORM73R7El7YE8neNXms8MdpG9MLWBGESJ9Agqt0exWjVTTNoFq3boPaLbdW4PxrwS5tin2%2B9zRiCvKfp4ZglY29DPdNtPfsS4Z2r5kUvqGzZiFOwmSNUxHJquVGv9ftkx%2BovdGP2IeCblfjEAHtRM7gOeBoCvbfa0O8nJPZAXVVsdsp2THEboFZwIkQaPSk%2BLC8Tgdlm5t2hb4bfk5opCt0q2WdJ5gpNm6f1M%2FUbScVgS70hka97NEyyAxJom1A9M9zBPuaNNTPuX2fJRInHmmhKK%2Ffp%2FKVwzT5hntmpPP1N%2BxZAcFUFsQsCVgpJfNhMeF9GN5Olbhz7QZ65aEuITZRABAyvHYWkQFNDJzgI2GAZ1lLilcQMehWcKwzGDmtfyGJ08ustHTqzuo1CtqDk0Rl6T44XRDdQQGzVCSXfqWgwbDmSgH5RPVapoU0udyEINzKlrmJUzTL6Ms0%2Bn0KxoJ6gflaUUXJB8c6CSbDXWOIrxPy23AaEDbUFQm0IzqK7i3EgGum76iwrxCUAbBeyeZXNzr2bTE1Hct3p7r4NsxMAOczf7%2FAtju9oSrTFXdI%2FPX6mWh0X4jHf5TqZ4dRCigiuDkzlwnlzwDyZD6po%2FWIvAGu0bKz5aaNi9UfDDn2oPNBjqkAQOM9h9kJwSmuDM%2FwaYf%2BACxUWv5HPHlNyoMhJ2GzukuYfzW6D7NBe2TwMpK1gDvPy7XC%2FlGrEgXVLAHzsKmar79doTg907IjDB2qnMrHd913PetVkhBdvKzf8%2FfSuEbpQPC6jdx7bwatKXcQ%2Fy18thoXnr3iAkcX%2BYGw9IHvdut4efRgy%2F1mc3S8m73npNtoyOqR4Or9GpsGxfo6J4SiKCYpeEA&X-Amz-Signature=615b537a77cb8cfe02f2c0efc860f7359556e2f16c638fd1464c6e12f94171ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=67f53c033da7ce646cbb86bb87021e91fa495c53e3f2adbc702e68cd1311c8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUIPCDS%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFt8wNIGUCm%2BitOArsUQsR6kkvdcUdyQCkBH8tjKA635AiEAhOcuvH5VKgdWellQC%2F%2BkO3YkGVuBiTxybbpC0Dunq%2BUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKqeVpNf8rWlnuNcdSrcA%2BBIKJPj%2F%2BumTTMqnKVEUFg9NWdmAxUehx71v94AWCGdDTHcbgyimDbwBIO%2F5OS%2BBtUgF35oXG%2BW%2FlmQuys6cFwxpLPTHCoFQjMGhNzAdP4a%2FE8ejj%2F8xJqqsremb3k01ussWVYUqNG%2BZPyw578en2hxQzPWpeVQirBA6wJX1AHZ8wz94d8E8blPhZE%2F7qMLqL61FOJAz5iKgmRW%2FotrERwCdB9SjpihnwseGCMLdrvt3Q0THNpWRoSHvtupFiRqilGwE4yz%2BKo6NIOE2G9nBXFiC%2B7qTVm0ITA3pwU29a4ias2yPcyGNGT07LCYqYXEgJMDDWttYkF9XL6HxuGtJYecyt92OvE4QSHTmdQ3uOC%2FhLrA1NEoii4Ys%2FjrjoP%2BdKPPgD5fptJVz3Qcsfc3nvEf6xm%2Brx02i241ngrIeBL9my%2Br1eDX%2FQsr3uK%2B%2F7sDsTJySEkv%2BzJuknVcqPiMWsf7GP0oLcy34kML342HUR7qt8MC1FhI5iLmdK%2BJuMgFqgT3va2wK30cpPCiqYSVzJSLl6ZmJ0KtYmPuMABQtYNfjQJwZyT%2Bd%2FZHsqfmPwSUNrxnnAePnCF%2B4JY2YyXHhKYC2ga6rSVwp0pRvRH03I3BhmrEWFkF36Y%2FGTP%2FMOvag80GOqUBP7wwaafTi%2FD0id0SyjSsvK6zSJE0i1jiZW41qrTBLpDpxTgKWjC7s5fqCRBJsqLBwDcz0s1l6T%2FUtVCZUKWLJW%2BVpHifp%2Bb%2BRd5rVMtoh3pT6s%2BEBefebJ1vYrAWR49SvNVZOLof8QF22T0nQ5%2FjrABgJ%2BKiYR2pUDlHvVybcis4PyXLH%2FH0M4y7GaDEQDU4u6z95D1Bv8Ye4bVpNu1DACm8punO&X-Amz-Signature=5d6eb5ec4b599cd04188764eddcf2b49c76c878f85e8f1949092be40d4876eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=926fbbb48c76d38726abfa461428229c586df9e68fe35b68f2a35accf17e6566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GRBLSP6%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID8Ad2kNDVDDpCR6YBspDOp%2BklRxfubSqZiMBfzRE04dAiB%2Br1rPVJgu9DGk8aCRBhQeeLwMlACT7c3enDjhZOHO7yr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMeRwy1K2G4tw4BSKoKtwDxbzclpBKyTU7kUsmGXLPg0USHfuDl9luWu3atdpEoy88ehPq%2BwwvHO6CmfxwOfx4J7nmJ%2F9JYUh1mKMgBgYfKdRGKViZdYa1mF9KUMEFZPHr%2Bw93JbFsZDP7WnIGZIVri9KpzhshayS0szxZkBO%2Boq1tEb4oxFslRX4QKx54iZQpEQQXLoq4r8yLaazTcRYtd7H%2Fe7dphvnzqDVsIBQMnZ6aFTwg8eB5sSdtZGhvN9znJXr%2B%2FwYRLptYq9d%2BzM5aaC%2B6Np4%2BcjcC%2BKVyq5ER9PVvmONbLodHnbzlUDKkkdIX%2BaMj66lxaQjpp1UiqrDPCdtFDWYncCLnXLC5saSKGaZMJ2vuSy6GI9PARlcOsY6RoL%2BcqYH3BJ9On0rum7GSpkNUptjSF%2B%2Biki5et9zZAWpTerpwQNwLSprbapVmuvdnEb%2FlYsMvMcT0aKAhSKOyP2FVd5n%2Fg4NZNaX4mvp4%2BHUXSM8TwnCwNIwmVOuO64p9eSyTIhn3%2FyjZYQrWH0tyDoAvrzZcZPsxe5pga9ySGIpekhepc3iGZWVheePrNEJHjZopBX9O0dcbmzrLF%2FMiqyHhsfwVQeRdpz8zO6Xl6y9lo96UrkeahPVsP2u3LT9oCIgHfLp7FY4YsvIw09qDzQY6pgEAJ7S1efNbJ2UCsdrgHxMKwHgDjBGXu33RyqCw%2BuZcn5JjtSvopP5HakD4txFwP7svx9dNKvJmac2KpX2Uv7i1TOWzriXI36Gl57cwcoI%2Frmy%2BvtE7bKHmsO20yt8v3ppXx0fuQaQ4UdZRWhzPP4TwW7DdQxX8sUFBY4fbTpDiKXcje%2FXsZ%2FqHcV2h29B%2BHiZYPOmbH6beHhHNwTiyFurcP1rWKVjK&X-Amz-Signature=884456f3cbb2634a6aa70d77bbb29ca210428135c3afb578a7cb1b25b0549346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=52185991c072ad9d2ce7fbb7fff63a638e3fab35bf50b4526f9a9fc2959a86d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKB4O2Y%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCMZ4voIcioIBpSKtXXLccSrru9va8AmNvAkqNiQvKV%2FQIhAKELsxsm0Mw%2Faaa4YnxdhadJrbgfnXlNLzfp%2Bk%2B9csdjKv8DCDIQABoMNjM3NDIzMTgzODA1IgzdmwWT0l9XmJnlmjwq3APwk19Iwmd5Y9lqQwCQ7YWy5sy2nmpBJGN70VX5Vq6QwqjAjvX831J%2Fd2mBGJWElrvir777ihKjP25ArmqtPe3fdGm5x9LgtQynFfjcTcgmxsGsMvv%2F%2FwqA2xjzxPrQ19%2Bq5EMQ0mupBpbtXTfIoGKbczXwVJvML2i%2FLOspEm6eQvju3HhBL3N26ZwRItaT3wyhT89iDXLXTL1zrR7J71B7P8nOfdiiakCfNx5z%2BLj5T7gKbI6HDoMYUVgR%2FIXy8KNiJ395Np1uIpgMcvdOMDQEFuD2ZWvh9Uetf4yo7DPEX9F20Xq9SfXlyxl3GVUhKCPtv3ghAdTirRLQE5WnNxqwpdpIGfbICvlq81RqazdkfF%2F8%2FIvUzF7vDkFbsKYDp55MrfFC%2FsvuFe748QlNHBi2RMztCFwlOY2mSr1Ip%2FwFF39l1%2Fw4gUVOqKQ3sbPcUpVm%2FvrQ1IsSQIUpLjml2pk0D0PPPSWB3q%2FTCq2CL%2B5FVYdjVutohdUSuzF6lnU7Vi30a9%2BMlBjhCAn7d7cGSG32PgS7g1FSStgnHmYLIJlhWJCXoGFiYoPD7%2FPz4giQaPX3AqrkFOb0fSB53cJVRBvGJwmZC27dea1g4dZd8vrlZOz4j6zkihbcKxI%2F8TDg2oPNBjqkAZdZPtCFQELIuSmDEE1N39gPjL3MKrO0MTGS%2FmPR1OvEmL5ODZkI6RiPEFEv5kuWaREnRAjCV4QgfINg2IDvMsQLFKjdSVnShkBH%2FXxS09xX3QLfd6BqO5PwSLdWFAt5c%2FA5GvJOMAAtk7WxezMxM%2FDGtss42UdHnEBmPJgP6UUcahNZp0KPRIge20PGEcJl2u0dOGXXGowqyU%2Brq2L8vNt2daBY&X-Amz-Signature=f969f1030acb7ad191db60f5818ef0ea04ed655c32eea368ec067f45bc787351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=603f3944cd78d0aa4fd26caf20bc8c8ed74c204f750b1f8eda69eaf5efdbfb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V6R5RYM%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEY%2FPTSTF6jF9snERcy5SZE8b7QWwXfIz76xD%2FtJXbRtAiEAmsC%2FKVfrdKXrxk8tN3ty1FYUmlNACt5uUGiJGlSyaDoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDORIw82UrLR3cmyA9CrcA1tCftnU%2BEjkeNKStazocaIxwnfdpn3UERW9ktAx%2BAUMLpW2fAPn8%2BliaB9%2F3Gor2WS4zrZBPBWvUxFkShL30011wyAdOSwnSie5hHclns61djYbkijBQhRBjd4CZSdhwY5mvfC48lHsrw3uZu2hEYD2fHLU32muZz90%2F%2B8u2DRpHdQ2A3lfQj8g1u5TL4opp9889yXhsg%2B%2FuIQlDGWLNgVY48EvrWkeuj9%2BEzY9mN7NeP2tx%2FNdi3LYxNpNH2OFHx%2FNB6hAwFMjt3eu2QFdXrUd8IkQu5s4nvAHKG4fEkPpniunKyt87%2FIA%2BCAsjbei2Bny5Kq5MTvEdutfu2mMf1g36vbKFZswQQBpUnHCtgIgobQCwXaovcKaUJfT%2B%2FNWMGuVQAHiyG2l3CtuHppAoKnhhzJLEb2%2B6tw0I5MnZ4d5ogHVtkV5u14ci35leRCj1%2F0MdwT21f%2BsptJbu8IicVsrJOyUXHAiIDn%2FrSuP9WzeQhRgqN2uw1KN4v57eKLZPETZsDYCcszBB3FQufRaD7bx5anycUK%2BxeHR92v%2Ff8OFwRqf9%2Fsm67zPlNCROsvfTLT6FMModOS0BbZ7OJuCdMARJ7G1keFy8UiPOnSzqVrxEegj16bQ6t5xJbURMJ3Zg80GOqUBVwwLrk4KpQ8X%2Bzy1yjnfelQkLJKQcz%2BjFQp7uKFZOz1YS3Pc74NwZ00AE%2BK%2BPw7bpkwtS3ZmkT7Ilzo1y8WoKiH1nSOxhShxK61%2BExuewgbJWLlm4QkW%2Bj%2Bm%2Bgm4xCOsm1prG6unpCB4y806f%2Bw6hhEKEmONn5AtHuEbZIEwUTgFAK6qsVSdYo4Gyb3%2B3F7TpCLIfBFirwIRlvcxCfoR1FLRoe%2Bp&X-Amz-Signature=125b76248556dfef290ca61be20609f807ecb0ec5ac824ffa8e2977d5b021305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=9572fb03e06e6bb6fdac1c6b4263387ed58e9413296d9da184fc3b33975d1f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQRPYDH%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB4S19utoJfPqur3MXUvIXBFhj8UpIBu2izLzD6buE3YAiEAqQfxGTNoRQRrS7i4TbKRKy6N0atbNlXupwmgkOchKEYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEoPX8WRNx2f1xKjPyrcA9V5JyxhnidGnK%2BSWpSIK82mu9a5bPVI2%2F4B1JAmmorCAla0hgMiWNBgXMagNrRszdMAfRnGU08mmWkoRZD5oq%2Fb6OAFIMeGepD8vcubjclgoMR8qSIboATEV%2FztxfbPvTUJVGX8pneQ3t49dQzmqIw4d67hfxZYgLciE7jQwC90q5FLoX7JLYvfhy7ieo3%2B7ncpgp%2BLFiMWxg8fL0YcrYeKK35pB8IFOsvQRjbYeEMOfMC9e5A%2FW7bsWr2m2ctadFvyKygPWIENiwgdulD1IsUVN%2B4wv0d7iyGyC72wSl54Zc6%2BWvZJ9EdwlqUdqAjFTbJAMqk1yyKayPgP6AAUqW6vRWC7YFJS6r4krwdvVJUcv2g%2BiNiwurmF9JAk6w%2BS3IcAmRC65nXPO1seLK8YbD12E2RScLeOO8g%2BTJNzTP8O6NB3KjeL1iCdfbJI%2BtJNHPd4q8wwkk8jVL4v%2BqeNYymIduHTft%2FBr1tCwO9959TD1Evs4OKvQOfJ55ywj4ImRQjddmmZcshz8Va%2FT%2FmHMYzxRIBz%2BfZjqkpTxuWe%2BGJONY2PWtbGlfSYQKr9V5sijLI1ZJ5rTmcPnneHHgo5%2BXpoHKoAn1mc3rLuLl0RzmNpf6tVpMNF9f3oU0koMNPag80GOqUBnU3Ll%2BEBcsgIfbmIIANVvEv00k20JyHrOjhGRCCI1YA%2BNxf%2BCX5sV5UPRZ6hqC9WTrU0YztFVUd54wdfllZ8mtMg8Lq1lrEoo7YJ5e7ZC0m1fnLcYlRKwdavZQzV41woRsJ1AOnAVh9%2F%2BIJ3gS94ZlRI3rOzFUKp3QTeEU%2FClFrQTw%2FIUNpF9gFThU5XtHbkh8dLmkt3AH6X3afT4fBiRMxRiUAp&X-Amz-Signature=8b02a8c172b58a86c6387570821c793b22efac55bbcc1269b7a454a517bebe98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRJO5QTH%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD9F30Y1CohKuWUwDK1eR7IuXJtJD4VgfC%2FmRmtv78sHwIgSKQI8cSC4ncZ4V2YR1YiGEGCBD2iZn2DpzdRvuvH1LMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDzEDvVUtQ1hJMUosircA7jaMB%2Bb3zOJpwS5TWatCyycDCASRTrUnr7WUXXzaEnLrd049sM5WC%2FJpAWqEf1N%2FOBrG%2Firsst24qSeozWM6DcKhdWoG0Ste75RhJ%2BI3jhDuz87REu9OZe1bYOmisXPzGU8kyXXpZRUj4xnqEl5Sd8%2FS2re6PvuBrgSRuvMWgp1PMBss6cJzYoVyjq8fiKrzMBJ6sFgrK9%2B%2BGAzZI40TIfixjfuqiOGxApBbsbd3AoxK1scIF0B1Oiji5LLe0CpOgLa5nAnaPLRNqbYtIEcILMIUpVmpZVJT0SDaecwe0rc%2FQfEOQ1FnaDNz2gvevCCaro%2Fpl5xqwnBSM4YchIjLf6cSzFoPzWdgxNB82xKnJRmcuGDec9eGkBM0P9lYmrcQfUtl3YWRjry7BCEmzEhkXIX0G0lyViBghkvsjGQhJozuwibAAcmWijyEKaioN5KkGnfzJhy5kTWm9czzqp1blSRc0IAm95%2BZwAKD3Qi71DIIOdTgSBKXKxncvZvbV4z%2F5NL%2FZH3uJwWDVR%2F9LqWdWS%2Br%2FmpOUXsLB4xn8Kfo4InN4BoRv3ruNrh3mB3sDveeFISTm0Baj4CIvDBN3JWafLogg8TS1ip%2FotSydr1ac2X6Y%2BtU%2F%2FNyFXQgr5MMNTag80GOqUBspF94zznfUIOWLXSfb9X87uR8h88JQKiDziO%2FuX2Np5VHOTNhrQShzxdZR%2Bx9ZVWqnZPMM09gpwlecBKM85%2BCX7GD5j0tLt49T%2FblvQB%2B1LCgO2xqXwHLVLfn515U2Hg8BZLa%2BLvoOySM%2Bmb9qFg2CcjGhYtjmxwySVv4wpku9PkDtSWNexNnenIQSwUGDt0OgLTzEDif3SuttMiHWy7n4sHVU1y&X-Amz-Signature=d540310ada196809b978425f47359adf8f9c0eeb08130c1d652cd43eb2bfb00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FPFJYKO%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBrxywxjnp0PP0taDExUAnqUQ9Dh%2FvScBrnlbZgT9thPAiEAoSf3Vb664PpVxH%2FJy3UR26EmU3pE850JWYPZNe2sz9Eq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGqLUbobx6UfHB0XDircA0P3jQE91cTdHrXPKu7%2BLdMU1RL2zyWFfZlBo%2Fsgr9E%2Fgkuz1THZUKbbxrk2j24C%2BnL3i0XnHozzi2Mrrdb0VKrZVhEHYPOO%2BxgdmHN7oOsB31w9ISDoSy73fEUAgaHy%2BWl6cmo3D3%2Fh0u68otvnvDufsiYol%2B9aYlA0MCCfmYHVKDTvHM1wBlBt5ebL5D%2BqqlPdIPcsD%2FzCaNrhnBmPh3ZkXtat9Qu50bBTYC0RL8ncx0Twqa5WC%2BtemuvZ96SpxqzZRsfeeELX6pt7Tf5HbmAHd6TfAH6AiCg4bf8S23WHVJhTW2M37HU94IQisogxMw7MWb1peLUAbi6Lw5lXENgMuBegzFphh7cXY1wmjkQEDFxjZ3qaLgl%2BRGhBGf4sw19l55aU%2BErtXF9MArMECWnEDTrw%2FK741q2H9XVJkeGuYIyDWVh2LX1tO9yiwBLSjNSNPlIp%2BaRkpaO474uoh8hsxCV3nnk7x3I4ftls3fSqBHnp6XxipgTX5rYiZ4JBe0iZp3Sf3f0Az9sOgrdReWiPUoeaemuRSmLpknb24hROindPPkU0V%2FU4C8PU5K9nTaSI2Nvb222q9%2BSa13hGJ%2F%2FJ8E3gzDpEntlxR7nQQ5aUOmVJmn334eglKj0%2FMIrZg80GOqUBU%2BWuB%2FeirJBy4%2FJFzjZbVzGg%2BGqVhaE6TIcIthkmEobGEozfu88bIXZ8CaaI1g7xz%2BVCvzKmhYUy5OmBS2A%2F4nxZyw3%2BSPd41rlXY4e41ONCnZrRQjcazML8Ae9laxKE5jQ4pcSIaH%2F%2Bytuff8aoV7G%2FrwdFiqwU%2FP7bE2DTqncRHMm9HPsQXo0b8snup%2FC3KJo%2FvBALfFuiVJsEyUVoIhuz30B2&X-Amz-Signature=1f14e10134aa6ae37be694f5a208b64518626a56c47109e72a7c293cf2221d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=132761c79b8d5c15749d2fcc888bba80fc2b9d3f3b5c82a3952ee6894805d0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BQAIKN%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDe6IyI3U3jY1LJoMLXYOQ07Mxt3XeRWML%2B2IBa%2FUbkqgIhAPJauotbXDMhIkpVKmmm5xqrGwwwnxK%2FOf9YNWYcoo8YKv8DCDIQABoMNjM3NDIzMTgzODA1Igy7zyG4YO9hMmw5NmAq3AMHviTcm%2B%2FnVsTWzU3Ue0WXeC%2FWwmyK%2FJmWIZxiYzexeDKeEo%2Bev4XQ%2FbJ5EK3fMm5wZUnmRCteePjjWo2UcppTTosEcrJKhkUhT01I%2Fonq54x3J6AzPHKQN5Exgr0tlJr3wHSBisOpV%2BsH8U%2Bfk%2BYj%2F8yCoqCOYrf1aYz1%2F%2BjffOvfTNvzkNRJJ1WHSn7jf%2Bo1cXTFr12fOBP8LK6cKvycRVPx%2B4pjF8jRy4T7GiZQpCwDou0rZoZe5kYTpSbe%2Bg47E2zi1RasXTDXPrnmR2W0hTABZ5APqg7JZXNbBc%2Fii0zViMz4WGe1UAYhuaNE8JPybap%2FESNDQujGhPPqsmr4FmjSDN%2B5gzyu0Nrt9oIA35nx9eDWKRlirXqz64ej2XypT5DEBYH583QDuG10Oa8LhjH05uCoIFEA3DV9dFOvb31T7%2BBtG7rlpKmb53Oy42q0cyqms9AjtElMurj24oqMDsriBcocCOkCjr%2B%2F%2FBQPe7MVsEBg1nbBsO8ktG%2F6RNt0eD57kcLiOt%2FOlnXqyYwckwkowEQHoGiM574aqIMuNH%2BSzcwwhpKudZlkil6sL8tDLjn2KOyPgytzrNF5pUjVK18%2FWObVHa%2FKq1O0kfmFhY6upd%2FD7pBkpqIEKzDS2oPNBjqkAU3bHzgK7XCSxP77zmTxyN%2B7vYbrVX%2BTKkuAk8zOkNtpv0nHZDWZ1NNg6ZZHGq7JF3awEs5vJkQvyZlzWC3IKWq8QYqorSYpI6uVPLbYgi8XQRsJpmcryHEYU7j2QZr2tZ63dYR4LeyhyQqDp4rnYTXPOMBdWJFHr27Goyr0A0gPyoqq6SO2n5zL1yUzP%2Ffa85PLjVyPsgjsRwWJaNMwZtwHwcNQ&X-Amz-Signature=f90f30e1aca206585d4942f6404023149cf9ca8271ba8869e4fa7ededfc83395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZSZVUY%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB5zf7APXbMuHI3M4aRmvWxZ76zoHG31M7hekkW3pozLAiEApPbdM9mKL4R%2BpRoKy2T8Gxjcc%2BlyB2bYu89G%2BKmZVIEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNcs1NT%2B8pd%2F8Fj3WSrcA8piqqQOAixQhC67cXxKspRyqp07Wo%2FT1WRb%2BTFcxP9pdqpRcDTX5rWG5ajAHYq8dNSlU%2FGle2SmoYj%2BytFulhJMfLjZJYskYF65loeJ49orJSaHubm%2BvAR%2F6rJekoUKu%2B8f%2FqwvzzM2AB98seOfXekkvn0h61DK5iWTBgVlIYMk%2FWk4JNF29upvKKIidaEem71dT8%2FeaHU5YErkUsP7P6gsOBJ29pOo6bQT9skPS1hwHh2I1OQHFXhTmDotq1VpPhELTsgRizylha2CIBRxh58DvkrHmSrYVBsvSMrPmDEuKTpefnpQjFFJ1ucYiZ6Vbxcp97RECAIC1rqrGl70rBe4rE56OlLjV2rTmEhWDBtazAx1HvtDZLDiwXkvec2LbmkHhaVL0yL3sBJZx1SjMZrAOoG4rFFqSGGiDNYS1IpAh9j9NCUhiqKBJFqCNPThbSfe4id7izjhNENe4DpFZuSFmyvdHMc8B6SNLyebWG6hKqvJUQqpWc5zXpKstDUahrFPpiW2OKb5rMpHGaNli%2BEDrYuYTXTjcHzJ5GcZoTxdk1gHeNFpwkYXULETRA7d3tNbBi56I2ybleB7rQpaRMk6n2zddkjsIsboEg7Nurtmtc8F5y5D4jRZ%2BDDgMMrZg80GOqUBFX3Hx2N4otHg2Z%2FXrg0NcGtn04AR05A%2BRv%2FW5IagpoZ5dNTePNbYIKMAKY6U62srrj5Lv6vR0xVUzXjeAji5Mq6AhDscCsPXQLhZQo7rLTzZNbX1qCtHl5ORtYDtyyPS8jhuHyr6pMyYiJFzpK6wVTJVwdiKV2Dfzuz%2BsPbplxC9A%2BQNilyzZbVlUZQ4EfSBn3JDj%2BajjbyyNJ%2BILy71UvbRZYB9&X-Amz-Signature=32cd811abd2801db28e3377967d669544dab58ed2be52a0907276aafd460ed14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZSZVUY%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB5zf7APXbMuHI3M4aRmvWxZ76zoHG31M7hekkW3pozLAiEApPbdM9mKL4R%2BpRoKy2T8Gxjcc%2BlyB2bYu89G%2BKmZVIEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNcs1NT%2B8pd%2F8Fj3WSrcA8piqqQOAixQhC67cXxKspRyqp07Wo%2FT1WRb%2BTFcxP9pdqpRcDTX5rWG5ajAHYq8dNSlU%2FGle2SmoYj%2BytFulhJMfLjZJYskYF65loeJ49orJSaHubm%2BvAR%2F6rJekoUKu%2B8f%2FqwvzzM2AB98seOfXekkvn0h61DK5iWTBgVlIYMk%2FWk4JNF29upvKKIidaEem71dT8%2FeaHU5YErkUsP7P6gsOBJ29pOo6bQT9skPS1hwHh2I1OQHFXhTmDotq1VpPhELTsgRizylha2CIBRxh58DvkrHmSrYVBsvSMrPmDEuKTpefnpQjFFJ1ucYiZ6Vbxcp97RECAIC1rqrGl70rBe4rE56OlLjV2rTmEhWDBtazAx1HvtDZLDiwXkvec2LbmkHhaVL0yL3sBJZx1SjMZrAOoG4rFFqSGGiDNYS1IpAh9j9NCUhiqKBJFqCNPThbSfe4id7izjhNENe4DpFZuSFmyvdHMc8B6SNLyebWG6hKqvJUQqpWc5zXpKstDUahrFPpiW2OKb5rMpHGaNli%2BEDrYuYTXTjcHzJ5GcZoTxdk1gHeNFpwkYXULETRA7d3tNbBi56I2ybleB7rQpaRMk6n2zddkjsIsboEg7Nurtmtc8F5y5D4jRZ%2BDDgMMrZg80GOqUBFX3Hx2N4otHg2Z%2FXrg0NcGtn04AR05A%2BRv%2FW5IagpoZ5dNTePNbYIKMAKY6U62srrj5Lv6vR0xVUzXjeAji5Mq6AhDscCsPXQLhZQo7rLTzZNbX1qCtHl5ORtYDtyyPS8jhuHyr6pMyYiJFzpK6wVTJVwdiKV2Dfzuz%2BsPbplxC9A%2BQNilyzZbVlUZQ4EfSBn3JDj%2BajjbyyNJ%2BILy71UvbRZYB9&X-Amz-Signature=541660947d80425ee762dd1f1cd1e84561b9ca22d69ae2e150c79424d324ad79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZSZVUY%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB5zf7APXbMuHI3M4aRmvWxZ76zoHG31M7hekkW3pozLAiEApPbdM9mKL4R%2BpRoKy2T8Gxjcc%2BlyB2bYu89G%2BKmZVIEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNcs1NT%2B8pd%2F8Fj3WSrcA8piqqQOAixQhC67cXxKspRyqp07Wo%2FT1WRb%2BTFcxP9pdqpRcDTX5rWG5ajAHYq8dNSlU%2FGle2SmoYj%2BytFulhJMfLjZJYskYF65loeJ49orJSaHubm%2BvAR%2F6rJekoUKu%2B8f%2FqwvzzM2AB98seOfXekkvn0h61DK5iWTBgVlIYMk%2FWk4JNF29upvKKIidaEem71dT8%2FeaHU5YErkUsP7P6gsOBJ29pOo6bQT9skPS1hwHh2I1OQHFXhTmDotq1VpPhELTsgRizylha2CIBRxh58DvkrHmSrYVBsvSMrPmDEuKTpefnpQjFFJ1ucYiZ6Vbxcp97RECAIC1rqrGl70rBe4rE56OlLjV2rTmEhWDBtazAx1HvtDZLDiwXkvec2LbmkHhaVL0yL3sBJZx1SjMZrAOoG4rFFqSGGiDNYS1IpAh9j9NCUhiqKBJFqCNPThbSfe4id7izjhNENe4DpFZuSFmyvdHMc8B6SNLyebWG6hKqvJUQqpWc5zXpKstDUahrFPpiW2OKb5rMpHGaNli%2BEDrYuYTXTjcHzJ5GcZoTxdk1gHeNFpwkYXULETRA7d3tNbBi56I2ybleB7rQpaRMk6n2zddkjsIsboEg7Nurtmtc8F5y5D4jRZ%2BDDgMMrZg80GOqUBFX3Hx2N4otHg2Z%2FXrg0NcGtn04AR05A%2BRv%2FW5IagpoZ5dNTePNbYIKMAKY6U62srrj5Lv6vR0xVUzXjeAji5Mq6AhDscCsPXQLhZQo7rLTzZNbX1qCtHl5ORtYDtyyPS8jhuHyr6pMyYiJFzpK6wVTJVwdiKV2Dfzuz%2BsPbplxC9A%2BQNilyzZbVlUZQ4EfSBn3JDj%2BajjbyyNJ%2BILy71UvbRZYB9&X-Amz-Signature=b2ad9ec8dc904bf4b54de7300f1c2e79a09f8cbfb8293ea1b102818a850bca7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZSZVUY%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB5zf7APXbMuHI3M4aRmvWxZ76zoHG31M7hekkW3pozLAiEApPbdM9mKL4R%2BpRoKy2T8Gxjcc%2BlyB2bYu89G%2BKmZVIEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNcs1NT%2B8pd%2F8Fj3WSrcA8piqqQOAixQhC67cXxKspRyqp07Wo%2FT1WRb%2BTFcxP9pdqpRcDTX5rWG5ajAHYq8dNSlU%2FGle2SmoYj%2BytFulhJMfLjZJYskYF65loeJ49orJSaHubm%2BvAR%2F6rJekoUKu%2B8f%2FqwvzzM2AB98seOfXekkvn0h61DK5iWTBgVlIYMk%2FWk4JNF29upvKKIidaEem71dT8%2FeaHU5YErkUsP7P6gsOBJ29pOo6bQT9skPS1hwHh2I1OQHFXhTmDotq1VpPhELTsgRizylha2CIBRxh58DvkrHmSrYVBsvSMrPmDEuKTpefnpQjFFJ1ucYiZ6Vbxcp97RECAIC1rqrGl70rBe4rE56OlLjV2rTmEhWDBtazAx1HvtDZLDiwXkvec2LbmkHhaVL0yL3sBJZx1SjMZrAOoG4rFFqSGGiDNYS1IpAh9j9NCUhiqKBJFqCNPThbSfe4id7izjhNENe4DpFZuSFmyvdHMc8B6SNLyebWG6hKqvJUQqpWc5zXpKstDUahrFPpiW2OKb5rMpHGaNli%2BEDrYuYTXTjcHzJ5GcZoTxdk1gHeNFpwkYXULETRA7d3tNbBi56I2ybleB7rQpaRMk6n2zddkjsIsboEg7Nurtmtc8F5y5D4jRZ%2BDDgMMrZg80GOqUBFX3Hx2N4otHg2Z%2FXrg0NcGtn04AR05A%2BRv%2FW5IagpoZ5dNTePNbYIKMAKY6U62srrj5Lv6vR0xVUzXjeAji5Mq6AhDscCsPXQLhZQo7rLTzZNbX1qCtHl5ORtYDtyyPS8jhuHyr6pMyYiJFzpK6wVTJVwdiKV2Dfzuz%2BsPbplxC9A%2BQNilyzZbVlUZQ4EfSBn3JDj%2BajjbyyNJ%2BILy71UvbRZYB9&X-Amz-Signature=e436ef5d5f969b3511f4585539b0076337b9a8dbba7e27869c1859a6d7d48d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOXDEAU%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCWOj9%2BeNRSHHCyhB83Y6PZyg2jolu685Egce9zvo4ApAIhAItD8Otg8X4rV7mjtvYhlCUAdhiWe1o4gI5MQDDQrbK%2FKv8DCDIQABoMNjM3NDIzMTgzODA1Igw3uoQo9y6Id4z4rMUq3APKaRgPLylAhJxbaRS2Dys7M%2BvkhmKkPSAUsWQo2gaVkFGLQysZ6aoS8qfL5BYKlcEBnHFbEWYJAwTbIMEslInZT1yd5fryaStmxj%2F7453Hfbqo3pUPRuufNFX29UwO946hRItVNSvCsfwJBk55T%2FoG1EskRl%2FS9be47LUo8Dpo4fZaZvDNU4OEnPUORtCoqsnRKrTdVvJ31wkB8FQ7epVb%2BGTC0CfIvaQtS2Uo1kaenpxyq3CHnnqoN2Y7mIwkK72Ji2Bpky5mgE0e2H9ZugN2wum94SU4Ql4tT5AIICPlFiOL%2BmiMWeRpv%2B5iq0S%2BR%2FzjNNPelczLXT5YUrxMPUomrF%2B1bNYQCjqHbkq5XzbDZBSMCTwz%2F5DBk751DW%2FR4U4AOjtIWKpCNeO1OC5AOarCeA77geHROzwN%2BNCNeAlLF3hrZHSRp9iRe68Bn2fBuKkvw%2BPMtj99Ht0VciyxK4xvfsY%2FrHYq35a7J2EqLSBiBD8pBAMhWfCMboaI2mmbzRCuDlFgMO%2B1frQV%2FfIWCDzETUNJEAeGi%2F6HUB80DliPiwNufKuv5Sfi3m1MrTL9LpjqYlK0MMPzJHZt%2FVfGdh5TgnI4MGKDqndJiIcusNYex4nELcEt8qOYV9%2FGLzCI2YPNBjqkAaDhA8aZcIrnsxV11LtWOSUGbyI5Qi05QKhvhnb0fSYcAz3eZCOF5njR3KLRrkM6om3%2B5GPcVWA2Bt%2FYhOaa3ukn3eLtYPCLgDwzd3%2BYvvD6ySZYmz48z94PlAX%2BwRIkQjEwMSzTDMBBVUMFuL%2F%2BpYj4i0WLAMfHNRO9KYZCLKBj63Ck3sWywQlD4popJclHHrqRxCjslThVt6BvkxS1qHZgq1SL&X-Amz-Signature=768c572b538cc4f40c97e8f0315994b0dd5daf1c5acf941e6bb9175c12fac133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZSZVUY%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB5zf7APXbMuHI3M4aRmvWxZ76zoHG31M7hekkW3pozLAiEApPbdM9mKL4R%2BpRoKy2T8Gxjcc%2BlyB2bYu89G%2BKmZVIEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNcs1NT%2B8pd%2F8Fj3WSrcA8piqqQOAixQhC67cXxKspRyqp07Wo%2FT1WRb%2BTFcxP9pdqpRcDTX5rWG5ajAHYq8dNSlU%2FGle2SmoYj%2BytFulhJMfLjZJYskYF65loeJ49orJSaHubm%2BvAR%2F6rJekoUKu%2B8f%2FqwvzzM2AB98seOfXekkvn0h61DK5iWTBgVlIYMk%2FWk4JNF29upvKKIidaEem71dT8%2FeaHU5YErkUsP7P6gsOBJ29pOo6bQT9skPS1hwHh2I1OQHFXhTmDotq1VpPhELTsgRizylha2CIBRxh58DvkrHmSrYVBsvSMrPmDEuKTpefnpQjFFJ1ucYiZ6Vbxcp97RECAIC1rqrGl70rBe4rE56OlLjV2rTmEhWDBtazAx1HvtDZLDiwXkvec2LbmkHhaVL0yL3sBJZx1SjMZrAOoG4rFFqSGGiDNYS1IpAh9j9NCUhiqKBJFqCNPThbSfe4id7izjhNENe4DpFZuSFmyvdHMc8B6SNLyebWG6hKqvJUQqpWc5zXpKstDUahrFPpiW2OKb5rMpHGaNli%2BEDrYuYTXTjcHzJ5GcZoTxdk1gHeNFpwkYXULETRA7d3tNbBi56I2ybleB7rQpaRMk6n2zddkjsIsboEg7Nurtmtc8F5y5D4jRZ%2BDDgMMrZg80GOqUBFX3Hx2N4otHg2Z%2FXrg0NcGtn04AR05A%2BRv%2FW5IagpoZ5dNTePNbYIKMAKY6U62srrj5Lv6vR0xVUzXjeAji5Mq6AhDscCsPXQLhZQo7rLTzZNbX1qCtHl5ORtYDtyyPS8jhuHyr6pMyYiJFzpK6wVTJVwdiKV2Dfzuz%2BsPbplxC9A%2BQNilyzZbVlUZQ4EfSBn3JDj%2BajjbyyNJ%2BILy71UvbRZYB9&X-Amz-Signature=9145a24c6ac17d70c04e9fcc2541a491570317131f049eed79bbb487cb830d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZSZVUY%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB5zf7APXbMuHI3M4aRmvWxZ76zoHG31M7hekkW3pozLAiEApPbdM9mKL4R%2BpRoKy2T8Gxjcc%2BlyB2bYu89G%2BKmZVIEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNcs1NT%2B8pd%2F8Fj3WSrcA8piqqQOAixQhC67cXxKspRyqp07Wo%2FT1WRb%2BTFcxP9pdqpRcDTX5rWG5ajAHYq8dNSlU%2FGle2SmoYj%2BytFulhJMfLjZJYskYF65loeJ49orJSaHubm%2BvAR%2F6rJekoUKu%2B8f%2FqwvzzM2AB98seOfXekkvn0h61DK5iWTBgVlIYMk%2FWk4JNF29upvKKIidaEem71dT8%2FeaHU5YErkUsP7P6gsOBJ29pOo6bQT9skPS1hwHh2I1OQHFXhTmDotq1VpPhELTsgRizylha2CIBRxh58DvkrHmSrYVBsvSMrPmDEuKTpefnpQjFFJ1ucYiZ6Vbxcp97RECAIC1rqrGl70rBe4rE56OlLjV2rTmEhWDBtazAx1HvtDZLDiwXkvec2LbmkHhaVL0yL3sBJZx1SjMZrAOoG4rFFqSGGiDNYS1IpAh9j9NCUhiqKBJFqCNPThbSfe4id7izjhNENe4DpFZuSFmyvdHMc8B6SNLyebWG6hKqvJUQqpWc5zXpKstDUahrFPpiW2OKb5rMpHGaNli%2BEDrYuYTXTjcHzJ5GcZoTxdk1gHeNFpwkYXULETRA7d3tNbBi56I2ybleB7rQpaRMk6n2zddkjsIsboEg7Nurtmtc8F5y5D4jRZ%2BDDgMMrZg80GOqUBFX3Hx2N4otHg2Z%2FXrg0NcGtn04AR05A%2BRv%2FW5IagpoZ5dNTePNbYIKMAKY6U62srrj5Lv6vR0xVUzXjeAji5Mq6AhDscCsPXQLhZQo7rLTzZNbX1qCtHl5ORtYDtyyPS8jhuHyr6pMyYiJFzpK6wVTJVwdiKV2Dfzuz%2BsPbplxC9A%2BQNilyzZbVlUZQ4EfSBn3JDj%2BajjbyyNJ%2BILy71UvbRZYB9&X-Amz-Signature=22c4bf3e864e88fe7b16ee61624520be13b29b5616fa322404296999d8e60000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZSZVUY%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB5zf7APXbMuHI3M4aRmvWxZ76zoHG31M7hekkW3pozLAiEApPbdM9mKL4R%2BpRoKy2T8Gxjcc%2BlyB2bYu89G%2BKmZVIEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNcs1NT%2B8pd%2F8Fj3WSrcA8piqqQOAixQhC67cXxKspRyqp07Wo%2FT1WRb%2BTFcxP9pdqpRcDTX5rWG5ajAHYq8dNSlU%2FGle2SmoYj%2BytFulhJMfLjZJYskYF65loeJ49orJSaHubm%2BvAR%2F6rJekoUKu%2B8f%2FqwvzzM2AB98seOfXekkvn0h61DK5iWTBgVlIYMk%2FWk4JNF29upvKKIidaEem71dT8%2FeaHU5YErkUsP7P6gsOBJ29pOo6bQT9skPS1hwHh2I1OQHFXhTmDotq1VpPhELTsgRizylha2CIBRxh58DvkrHmSrYVBsvSMrPmDEuKTpefnpQjFFJ1ucYiZ6Vbxcp97RECAIC1rqrGl70rBe4rE56OlLjV2rTmEhWDBtazAx1HvtDZLDiwXkvec2LbmkHhaVL0yL3sBJZx1SjMZrAOoG4rFFqSGGiDNYS1IpAh9j9NCUhiqKBJFqCNPThbSfe4id7izjhNENe4DpFZuSFmyvdHMc8B6SNLyebWG6hKqvJUQqpWc5zXpKstDUahrFPpiW2OKb5rMpHGaNli%2BEDrYuYTXTjcHzJ5GcZoTxdk1gHeNFpwkYXULETRA7d3tNbBi56I2ybleB7rQpaRMk6n2zddkjsIsboEg7Nurtmtc8F5y5D4jRZ%2BDDgMMrZg80GOqUBFX3Hx2N4otHg2Z%2FXrg0NcGtn04AR05A%2BRv%2FW5IagpoZ5dNTePNbYIKMAKY6U62srrj5Lv6vR0xVUzXjeAji5Mq6AhDscCsPXQLhZQo7rLTzZNbX1qCtHl5ORtYDtyyPS8jhuHyr6pMyYiJFzpK6wVTJVwdiKV2Dfzuz%2BsPbplxC9A%2BQNilyzZbVlUZQ4EfSBn3JDj%2BajjbyyNJ%2BILy71UvbRZYB9&X-Amz-Signature=0d4938eed973085d5b3af45c565b35c2c3e09f6f9d661afa73b16d20dc772318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZSZVUY%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB5zf7APXbMuHI3M4aRmvWxZ76zoHG31M7hekkW3pozLAiEApPbdM9mKL4R%2BpRoKy2T8Gxjcc%2BlyB2bYu89G%2BKmZVIEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNcs1NT%2B8pd%2F8Fj3WSrcA8piqqQOAixQhC67cXxKspRyqp07Wo%2FT1WRb%2BTFcxP9pdqpRcDTX5rWG5ajAHYq8dNSlU%2FGle2SmoYj%2BytFulhJMfLjZJYskYF65loeJ49orJSaHubm%2BvAR%2F6rJekoUKu%2B8f%2FqwvzzM2AB98seOfXekkvn0h61DK5iWTBgVlIYMk%2FWk4JNF29upvKKIidaEem71dT8%2FeaHU5YErkUsP7P6gsOBJ29pOo6bQT9skPS1hwHh2I1OQHFXhTmDotq1VpPhELTsgRizylha2CIBRxh58DvkrHmSrYVBsvSMrPmDEuKTpefnpQjFFJ1ucYiZ6Vbxcp97RECAIC1rqrGl70rBe4rE56OlLjV2rTmEhWDBtazAx1HvtDZLDiwXkvec2LbmkHhaVL0yL3sBJZx1SjMZrAOoG4rFFqSGGiDNYS1IpAh9j9NCUhiqKBJFqCNPThbSfe4id7izjhNENe4DpFZuSFmyvdHMc8B6SNLyebWG6hKqvJUQqpWc5zXpKstDUahrFPpiW2OKb5rMpHGaNli%2BEDrYuYTXTjcHzJ5GcZoTxdk1gHeNFpwkYXULETRA7d3tNbBi56I2ybleB7rQpaRMk6n2zddkjsIsboEg7Nurtmtc8F5y5D4jRZ%2BDDgMMrZg80GOqUBFX3Hx2N4otHg2Z%2FXrg0NcGtn04AR05A%2BRv%2FW5IagpoZ5dNTePNbYIKMAKY6U62srrj5Lv6vR0xVUzXjeAji5Mq6AhDscCsPXQLhZQo7rLTzZNbX1qCtHl5ORtYDtyyPS8jhuHyr6pMyYiJFzpK6wVTJVwdiKV2Dfzuz%2BsPbplxC9A%2BQNilyzZbVlUZQ4EfSBn3JDj%2BajjbyyNJ%2BILy71UvbRZYB9&X-Amz-Signature=3bbe001585554c9ee7c2b81355a594032eea66cc4ce286ec936fe20e9a0c8eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZSZVUY%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB5zf7APXbMuHI3M4aRmvWxZ76zoHG31M7hekkW3pozLAiEApPbdM9mKL4R%2BpRoKy2T8Gxjcc%2BlyB2bYu89G%2BKmZVIEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNcs1NT%2B8pd%2F8Fj3WSrcA8piqqQOAixQhC67cXxKspRyqp07Wo%2FT1WRb%2BTFcxP9pdqpRcDTX5rWG5ajAHYq8dNSlU%2FGle2SmoYj%2BytFulhJMfLjZJYskYF65loeJ49orJSaHubm%2BvAR%2F6rJekoUKu%2B8f%2FqwvzzM2AB98seOfXekkvn0h61DK5iWTBgVlIYMk%2FWk4JNF29upvKKIidaEem71dT8%2FeaHU5YErkUsP7P6gsOBJ29pOo6bQT9skPS1hwHh2I1OQHFXhTmDotq1VpPhELTsgRizylha2CIBRxh58DvkrHmSrYVBsvSMrPmDEuKTpefnpQjFFJ1ucYiZ6Vbxcp97RECAIC1rqrGl70rBe4rE56OlLjV2rTmEhWDBtazAx1HvtDZLDiwXkvec2LbmkHhaVL0yL3sBJZx1SjMZrAOoG4rFFqSGGiDNYS1IpAh9j9NCUhiqKBJFqCNPThbSfe4id7izjhNENe4DpFZuSFmyvdHMc8B6SNLyebWG6hKqvJUQqpWc5zXpKstDUahrFPpiW2OKb5rMpHGaNli%2BEDrYuYTXTjcHzJ5GcZoTxdk1gHeNFpwkYXULETRA7d3tNbBi56I2ybleB7rQpaRMk6n2zddkjsIsboEg7Nurtmtc8F5y5D4jRZ%2BDDgMMrZg80GOqUBFX3Hx2N4otHg2Z%2FXrg0NcGtn04AR05A%2BRv%2FW5IagpoZ5dNTePNbYIKMAKY6U62srrj5Lv6vR0xVUzXjeAji5Mq6AhDscCsPXQLhZQo7rLTzZNbX1qCtHl5ORtYDtyyPS8jhuHyr6pMyYiJFzpK6wVTJVwdiKV2Dfzuz%2BsPbplxC9A%2BQNilyzZbVlUZQ4EfSBn3JDj%2BajjbyyNJ%2BILy71UvbRZYB9&X-Amz-Signature=f3ac80b062d17d75a1d2527405b6a8a758e3a57c3c7f533326b5a61bde6ed1b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AZSZVUY%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIB5zf7APXbMuHI3M4aRmvWxZ76zoHG31M7hekkW3pozLAiEApPbdM9mKL4R%2BpRoKy2T8Gxjcc%2BlyB2bYu89G%2BKmZVIEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNcs1NT%2B8pd%2F8Fj3WSrcA8piqqQOAixQhC67cXxKspRyqp07Wo%2FT1WRb%2BTFcxP9pdqpRcDTX5rWG5ajAHYq8dNSlU%2FGle2SmoYj%2BytFulhJMfLjZJYskYF65loeJ49orJSaHubm%2BvAR%2F6rJekoUKu%2B8f%2FqwvzzM2AB98seOfXekkvn0h61DK5iWTBgVlIYMk%2FWk4JNF29upvKKIidaEem71dT8%2FeaHU5YErkUsP7P6gsOBJ29pOo6bQT9skPS1hwHh2I1OQHFXhTmDotq1VpPhELTsgRizylha2CIBRxh58DvkrHmSrYVBsvSMrPmDEuKTpefnpQjFFJ1ucYiZ6Vbxcp97RECAIC1rqrGl70rBe4rE56OlLjV2rTmEhWDBtazAx1HvtDZLDiwXkvec2LbmkHhaVL0yL3sBJZx1SjMZrAOoG4rFFqSGGiDNYS1IpAh9j9NCUhiqKBJFqCNPThbSfe4id7izjhNENe4DpFZuSFmyvdHMc8B6SNLyebWG6hKqvJUQqpWc5zXpKstDUahrFPpiW2OKb5rMpHGaNli%2BEDrYuYTXTjcHzJ5GcZoTxdk1gHeNFpwkYXULETRA7d3tNbBi56I2ybleB7rQpaRMk6n2zddkjsIsboEg7Nurtmtc8F5y5D4jRZ%2BDDgMMrZg80GOqUBFX3Hx2N4otHg2Z%2FXrg0NcGtn04AR05A%2BRv%2FW5IagpoZ5dNTePNbYIKMAKY6U62srrj5Lv6vR0xVUzXjeAji5Mq6AhDscCsPXQLhZQo7rLTzZNbX1qCtHl5ORtYDtyyPS8jhuHyr6pMyYiJFzpK6wVTJVwdiKV2Dfzuz%2BsPbplxC9A%2BQNilyzZbVlUZQ4EfSBn3JDj%2BajjbyyNJ%2BILy71UvbRZYB9&X-Amz-Signature=e0460f38ee6e3a5ef55ad4f7db95e40cd657af9aca60e6db2aec17ea04032f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


