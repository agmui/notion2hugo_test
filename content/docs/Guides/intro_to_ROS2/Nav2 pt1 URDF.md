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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=bde50aed94f1c9a70e0053d119543ad807679a698ce3a619689d19f8a9af07bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=f8baedfa73a57490312d4df2c4a5fa010de416e10f68caad9b7db315f1a46ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=1f585817f63dcad759699e0e4ec4385d9bf4f22914c8c8f2613f41569e053361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=cad2b7e187afa8f07fdd64cf93147dc000552025b6a7ba6f6fea9268dad3c1a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=2ff51463fa02887f68efcb85d7dc03f9529221a6b1b2b7ef7a3142c9a7a902e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=45c7ab23f87ab08426db7a5f87f403845e846cada1c5d1548997eef090855b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=8707e29911b08a9780467eb6ccf0c9183303327b97798dace976dedb36adfd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=247ac054080aa0cadc6e1988d6f7b65951bd63f70996c0a874ec5a449a9c02fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=e236de5643128520359dbab7c5724765564cb9b8343b6c72215ff0e6d52922cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=c7736d38e1ba867af2a235cb1152267823295409273d288bf7e0fd878747ceed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2R7DBY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEDb2kSMC4qG5jWGSyLbNthQGGrddZxW8vdsTI0%2BOdUAiEAg7zsuQWA2oA5Vaf7YcnkmvCU0O9DD9vUtE9oCBqFsBcqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj289GAB3VhsTGJ4ircA1sYB5nQs5sRzKi267U2Zjc4ykHOPd4NUcH2owU8oOndIqmV6qSAe9q9Ps2XpkhQIDiobHlPKlcdJgQi1AZTXUCwOCjwAPCjdvlQ6WHJfqC0ycjARtBOL7%2Bx%2BxtENQBfVSDJ1BVmZt5Svnj%2BzAMWf7ycNyRoxUOx4GPwbvFXAewO5Y3zPnet8LNPYZOfnWgZoC2qVITApiabq3CDKuK7tGcgyerA8NqFuSy5g6DspLyWYTGu%2BMfS0KbnW0OlH63IcXHhpZUROsaG5WExWcZN02qf9GL%2F5FTFSfh%2B8sV74mu80yOvALIg%2BsjE6TnmdqVSq8FZu8rSk5DCfZKPJPSAd300nHKbphcdtXjVKeUZS5H%2BARF3u0EBwYcTFaKEaMYbpVL9NTWpQKv%2Fkln7FFZV9uxH%2FEbKztk1S5pbI6dBP3VKNKgYnMKImTo40ObTH0Fl1ag6JtTmprJyA4qhF%2BW600RA4eJt8SmDGjD%2FvU7Klo03R5dGSYycdULHAqzR67JWEehLuXZ4Lv0%2B6tMCInb%2Bmwr4u0rDdQ6aP8KpHaZ8Lqu%2F5tW6kZmT7DMWizbkaDpivMPIrfUaiYTGq%2FGZ%2BxlTPkgLgG9qQKKr45sUTFkWI0DNT4MuHkb%2BSP3X9XV3MM714MQGOqUB9ReJELKLDFslv2xUDhPhml4XuurkOPAiymv57RKDMeFv4AlxfmE%2Ft8FSwwvHQrKZb2TLF3PVMOA2yLJyyjTUPA9swffB%2Fq%2Bw0%2BYgCivqYh9FFg9Mrcqj8G7qe9jxtseMXAniDSR8%2B0GSpIMegln0dQoGZFNY%2B5rIG5BaDNtn6JBtxMglrzpNFYmhgA9nzQdBgdfpbD5nvYuwdLiD5Tr5UUV2VcXj&X-Amz-Signature=66b3ee19556753f1f553ec3b5c806f5cf014e293b2d14bd0176b684fe0fb7278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMI6KGM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbVuqdavaa7kWTJBAbcveaTT0vG7wpd9ieEseR1hFSBAiBWJKtDkklVtFkhC4S4s45hNr%2F4PdKmBVzwrDztNxQKKSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLKZn2Ya8ZcYkCP2DKtwDafs8MqAyGOxe62MHDcedFpKh5qWTUVQGJCgAjv%2BW712VgfmDDcy6xEd1oU5p1lPVpWHKR94a6Gv6Ja4JJryM3dgiZtLqJsHruQnFFjNjQXR5fQrIZdViqUOcrwOOPEEMgcg3dNu2rFcJM5VnsX3gWLDMCmtLy8y%2BW83veiQz5zDn%2BKsgt4sL1rKIh9d2Gw8cXXPgljVurTlRxz3QX6hDk56pOdFR71lFoX08W%2FcD9qi5yh7ixdcYGIeRyVT0Qc0wvV4pzrQv29kYa%2BBsB80WCYk74NAA8fKPFZHZKVLI6zf%2FbCcuzdSPh8K2Hn2HgcCr2GZ%2FTR6UzXUdvVRKBvfMMFPnvS4dcxwowN4HwdztN1Q48m4ZhZLLJ2mezwG7GsrVMy5Y3oYkfssGy29msHpqffwMwYnTdIjroFnwMgJyyoCVM4eTdp0wIAlidcnx7MXbMi9f04LD3JFiDsOGmz7qeC1VYmp2VwLsx0ygTpN%2B1MlepxvOV%2Fi7oTIFlCg9s2uABS%2FQqa1tDd7js0EaoAXIDQ8A0eRikvkdkJOKiP2ZH6M4Z7uJBeDJtG5PQ3vEbwRYq9nWkhpFnDX3PsUlgSmYZHRCpWA5jgx8zTaEAYTfTP%2Fuzb%2B2vbEYXh3gWHYwkvXgxAY6pgH99sH0ol814mq95MVnBbPYsLOzE3UUBRHSJ9J7%2FkJWvdjl4pYineDbQeihwmueRsK7M2YCge1uw66%2FiIHXs27iCDsTgH1sAKz%2F4siRctrLEhetfbxugMqa82ueiR%2BMVVqv6%2Be2ObhKn8W%2BphkP1IXSYDWmk8mY0cjUpWdPEtkfP747vfGNuGOmJN8mP2CaZ3n6TlAG5YEpZ2L4646hQXlV9kixuB4I&X-Amz-Signature=9210d8369dc7c0fcb9cb418042d12b6f3332a61444f454582816e687165a7693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZOKFRC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAZY5K2rXwoyf7r1MpgWm3gb1Sy9su3oq1yUvgSjAbUgIgT9JuRqEEqSgyfVb4PMEgKTzRvnB3ygvVVXv6TCP2VCgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKM6zvHdkxmMq34OwircA4ZgTY69v0LqRuf4r0xyTBTI7fSMa44MofL13LFcYOt%2BmUjaThmoxNqpU8Cuq5hiJUwVNx5etJaK4lMpRD2H8AmKQ%2BGAtcBDhn%2BDBvNpV4l5bk3gtuUXHQpZ3QY2xlQRxvtcY80gaE3%2FGsk4xECGrMCzjORBSOEJOuLfx94VwUnjQ45Rf1km4f3Z8OwHGEMZctzR2G4nduO%2BhqB1fRGselo4XubXLDSSNWpzvSNF4fStWTk3UrDP7WOWNw1zmQ0LVY%2FNNOdMOWQMr2XdDUB4pASvyMcKv%2BsWlnvAAXO9szw6rCjBYxqQ%2B3TSObPaB7c45gTmEpErn8bnqDvqflcExkNGplvU8Skgzz7GH0XG19DKG7eTYqc11nf7CrSBU2Z0b14GYC7sX79Q09BimAK2RNKak05yGS%2Bd2IXMEOtLe4Z%2BHOwxJhzmrvVvFCDu7IIR90SqnjsAihFCufRjN%2FKyUcnfz4wT9xbvlfqcrQ1bxqheb1s1xyRBON8wYvhpuyn2h2u5F4%2FUaN1Sv8gWDCYwm6QDL4ZC3YKb7meyQR2KI2L2sJvVXHusCXUywAwx1Ha3yrXV7kLz5mbfJecgC1D9dklzFvQ3pN1OMyRQYz518m%2Bhz1cxC7Os80fv3MFtMIT14MQGOqUBwlf5ccenwe92QAn1YdiMLMQZEzUNnCU4nbzCHhUnVHL3CJ1QFrcX%2BwJkHZApbV6QjI52YIecM8qfq7wa5NWq9gaKVIEW0OUwzSMVXKirjeQxXwwnTKGQ05ao5ejj36AaSyrNM6bZDyontzgdWJlsfvUlXNZItJXT4PlP4V2W2g3ZY0A5UtztMSnFy5Rp20DOCW584yT96DcMSBvPx0U5L3V27F8Q&X-Amz-Signature=28d09b544014f2db3b25b938209136342be2c1aeed41adea0791b26f7b163e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=91ba23684d1f9db6fbc8cad3ca1f1cb4472e951bac1f8323bb514a61dc89898b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQ7Q52H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T091002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAvf4UHAeaUiHAkhPm78svvVOweAixZOxY2JF0QIwONAiAYLHdy5QnBgAIjQ%2BGliSxpLUOmLdvI8Am46dLAoZsrxyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2BTabeIREsvFTU93KtwDCcOs95vO9MQSqm2NUSoGi6hZm1%2F9aRYKvo8LCDpsmg9GfTQBymrJCBVyiSVwiU6BEm%2BCRRhxd2yUAJbAACVkxPAxO4z%2FUdYBM3gHVNbeJYsBrprImS4pAISO%2BPkmWyqb%2B9%2FV%2FaR9oOvKISTmMKoUNDzJ3MbDDzrTMIwuoSxdHmr2s2YKgFjQusjUWeWf1Bsm4FQYyRZ3HoA8Xt2%2Bnbg60v0wU9SKSTuaGL2VVUkRP6J6a3mWUEQV6knfCO%2FCzaLisKdzfL5kUUx836%2BFI3YohXXTC4eUmVDirZ6R4iGxrAF3LGkCciw%2BdKcu4KnzrGbCmXypdVWFYluDKrqF8%2F%2Fe6IRw2ZaT%2BshIAYBAngwwcGe4z03NDoOn9FDoNfWREOHakZCOkuFntFp%2BcVSIQdPxGalxwjGFwYK3TaQxrv63QiNvEBOmXTt6o28hqlJBAB%2BlA5h0IX1iZQ7usnC%2BHdBtCAVh%2FxzPqi21nCStSdV5%2B8pl%2FkARTh6UJKdx30EB8lqd%2Fn3RthYnQWMHOaCHQ%2FAN8lwXoDbZ6WGNa6SrSIW9MO1IBMrpvjCy5%2BPOaJ1ryP4AjL%2FW11aeEhNR5QI8CMNpeRQhsGYEnExv6r9bkSgMRK%2B7z6xDVW%2B6cJXjmaUwxvXgxAY6pgE3KpH4nZWt2dOQWfm4yF74MMyvXXvHRo6Tdo4HaQudOmitDZuDdZNKGfCVO%2FumAP5%2BXp2%2BWXvxZZl8ByuONGryDfhoo2GOGHGIE%2Fp7%2BO68sB4tx4aVzDGzEmji6HVeH8UW%2Bl1q2u1NnB2kJ7sKomxQaR0%2BWNQfoo2%2FrUMUby48m4dusoCYA0NOgXbnVSDKqWg969mBt%2BM48JKNOqacUnklhjFcZElz&X-Amz-Signature=596037f067b5586c006367192c1b564e7017605739f8090b3b55c41e60cd0d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=50c75f2fa9230cb7ec08d90bac8f5b54387772dd2dc880838301d7e9e1c87f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU26QCM7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3S5YV3%2F7rdpUH66mAedUnRkir%2FymJb9O0kB%2BXG7z8iAiEA9gMkNHBUi6gzYnq2sdr43%2FsPuv6SL4aZjFQxgLX1ykAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrg6OpvcLXQ2NZFfircA1DMyoATyh9VMzAnlsc1SEEIzGhMLf16DJ%2F4Vz537BbYjgSt%2FXkbOwSYyUI%2Fejfcv4xopPujnotpiXJMo4HOLcAtg8%2BW%2FkKGgxfRVgMg4K2SM%2BUl1jG%2FOYCbOiMo8%2B81ybEsM8U0Adpb%2FvSCuiXWMTzEcQ2aXAZZtK7zkesSQ2CEn09p4EfDS1ikIieu08Qn1XG7z02iV1A40f0o4M2hsq7clgDIZaV%2FW4RBkWGuR4zstW4aIQE2Jiw58GCQ%2BzVMVuf335hUj8odMRtHH5m4U7rPeLL7ZlSt4oqIMaLVWEkFy1LqCFAZT6Ug6oHQKqNObbtJGR18Y0OsBkekzHSd4oHpFBo%2B2kuWhA0pG%2BVIet9cASb0PHrSivXJI7EC%2Fm5dL7ZXDR2EgBtGDPFd013%2F6jVjpoS47m8kH%2BG%2FYzDHaG8PHWNJ%2BE0JSCCyVZOGuzkiE67avXAVr1d3oa6biLQ2RZlDQ8lSbW7OAyE7Zhy5bTYxgyaAzwOwR0jWokVe5F91CVAa7ch%2FWcX3K7LIhP9Ka0vlVs05rr8DwZp9ct1sRXdHnq61xq8Xdoq%2Ft2wyDYVc68D0icFCMPCiX23WCFNxVhyKW6PKwCxmQW2JldjoIS%2FTEDd8mNWlsmYgmWF0MLX14MQGOqUBOudtxm5a3aVd8FdEaDNRusBJWsoLjl1dAroc%2BEH95Dd5zpzGHAoGIYbiESZDJnLRXXPMPdt2e7HXyOigErMfRnnCCcAq%2FrrEJGs%2F0HLun0rRfkt%2FubCunITD30Tq9rYSQ8MqM6jlIYjHWd8ss94cJdD%2BrwmGS%2BoNsw1LvL5yJb%2F65Yl0bvvB537gRecDceTSI7R%2Bcr%2Bd7LntkRNXrErj5%2FcHe88L&X-Amz-Signature=835419858f7ebc117366d117c9ac41f735c978876aa697261f0462a1ad2be2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=81ef1eeec81dff70b627f430b7e5ebed8a81236bd2abbe0f2fae6f8387eaa2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCOFX7K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGFnhD3kJ6BFyrjAip3YbE2oftgPcN5n5TxB2k4jFpRAiA2UedjNZ6YWmY1eQ%2FOqnZJXZOjyvk6bIxmk%2B4ahPLRiyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bd9xJ%2BOSemDnX%2BG8KtwDqBPCH5jA2al26yYmjnu%2FOOWGrVEYx8PasLYIPhMu5PbGmV6cRevDQbh6lMJM21DRm9MOaVb9voD6VoUq%2FpdunPCJrnfTUVjk6Oj9DH5SjDXroWTnz85rtlJIfWnDpnRxAp2ongij%2FWF3VeOta1%2FA5%2BKSFF9LZ9qklA3z%2FPyMxvTtHhM8RIiIKIaVJMisM6YoxFxPuxDklemhOef5nXlKEvSehEMWnV1KrAc1M9ZHlGxSTpUM6mH3kvN111H14Sb%2BOVNuPGDpleG9golfGX3ifjTujZJch3HUibdHIqaTcL4wg1HkK05BllNBYAUzXE2LcrTc7hWkG9r2kNjfIOo%2Fkkh4%2Fsy0ZQwXYPbDSPjpGG3Hc014Js9scWV%2Bp4lERDF%2FSNwag%2F9bDAk0IhwJrQSoyDqBMwuh4hhTZ0cVFfDiOdWSkF15XTl4p01Js3dBl55xSVvcYthypptb1mtF51v%2BRPn1RM0cSTUpo74e0EQ4JW5WrGTDNUwfp0Pwf3TvJ75AgbNhSD%2B4UhJxOFXn4ozKan33gKYt6OYY9oxYZJgH1M7tri1Wzly4iZUXHQFwI%2Bgzor0uYTwgQAZnF2sDNCG4TzLm%2BBd97UzZyjO175R9zbU9D8Vbeo0nRV58tD0w7PTgxAY6pgFN0v%2BS0edOR1vU0QiO5spw1nF4P70UdCfaEMWae2iit9SNaLBwdq5Ca%2FMh%2BEDsWuif0PGNDULjSYtoaZRc7LdApP0clVpAruaxsLXIXyiXc64E0sClM067JZ07U8dr9dzKdjWKX5ToCHirAkEDoPT4C269xF09vZGi59KulljYf6EPhbZzPR8iY3Ne%2BrTOKooyZJeVboFPnuasq5a%2BGstec%2BN6sgSh&X-Amz-Signature=b544a24d1aa0ab58fe6dc1703cabeada265663e072729bf61aca407da4efb6af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=31782e1590bc1efc39cd28581f291ebb38a09cf697eddc1ea3fc0800c074b7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWFWGSX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T091012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg73NJcSVOhJPSjkvdbmwAVjeV3EC0fvjzo9pll2gvJAIgJB%2F5xNe5TfRubH9eIEx7StEyaZS2GaaA2xs4Kj0LBwcqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4j%2Fvy0AJN67Un8RSrcA9KYshAgjUPNIaLQzsc%2F5Run6IoyvDOBvmHiLOC6RHClRhLDUEjV9n0KZb5BAPgKcRKmGCROeol8jiKcm8FDcVl%2F705gjxqOUdILl2a1oN2R0i%2BARRnMgG%2BM0yauZd0OfnU0i1zdFrBMo%2FLZbZeftj6TCWmFiki7AuzG7gu2jz6rFwXbh5raFjQrJ9oO48v0rddxhLkrheFL6ZIG3EBMg6NWNY2vyWmr7EdOmuo0BoEWNYzfpSceF4ftthiukmKYsnXVWj6sutJQauon%2B72HN7Gcfx%2BJsOzRbWvaxuTF1xj6DvSYJiJM%2Fw5hJ8tkx5NTCoUDQMJ65vlu%2Bs0jE4XtOxeRL%2ByxAdbbk51uSB1uKmvfbCssVeS9zZnk68kenw%2BszGA1nrcasTzOj%2FwXk4Jd4aYU3SYllDuSsIXMe2O5GVQhRROv3RkkKeKNhHDIGKp0Q4nfPClqxzKZ9JrINZL5zjuFshRpTAKP5SGolwHs%2B6iL8PL%2BRKYpeBXaI9pYSlLo2sKexTCDFx3oRmdL2iNF8kjjcwQXl18Sdw1L5xqZzDfQ3XKegcDKkdMgDSXaQbzZq4oEPI4qTRsyPAMAgfYP3fmMLoOganZePDWdCTjWb53fpT1TqR2DfUVTUzNiMIf14MQGOqUB0KiEnRKS7yl7EsXAa1qpc%2FexhXXAH7gPsM158y9SMnL9voowzO5i45cvVTFay8BeG98Q0XtRMb0kSMZSswzAYDJ0C6lQ4jCuOdEh79SowP0LQLvs68T%2Bc5%2B15x1qAS6izKcDU%2B73EXwG62EzBQLCuy92qn1P3%2BD7vWUh1kyAqTuVYbx3RQiIuPsVhj9dXVBtZt%2BVfp3q5YPo9ZDCoAP7bHAfXhl5&X-Amz-Signature=4d380c34c69751fe64e4d1a5515a957979de5b9f8dae79cbe69df9ebbcf54d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJPQ23F4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T091013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd58OxbrVS6YFB8qZgCpMvq1n2ekyInSzGQbxpCWOBbwIgGwOIJm7V7vAaM2WpoNsQiBgSrjD1LlW0%2FdASZmeQZg0qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHNgOekF3HHJw8rCSrcA2TeIsfitU7zIMgd5DCrmbeAXp2UGmfJxYY%2BX3BYEwKDhsZFzkKv%2BT9dbhh1FgIYT4sVVc27XSvFhnUdAlzcgemn%2FTfv89gGtwiriYzOx%2BiAyN81%2B1FDOjfL%2FcOXrDcUXrvyGm7dsa%2BVGZxfrXgzfHGwpPs1%2BIvdw16CQow9vK%2BfgJVWgG8gj75tWAbeBzCg5nrCSfk4POnMdS1l2OZWgWi55y2DBRJWOMCPDFtns1QjO0oZPzEhy5%2FA3lVHjBeptWfxEM42bHUTvldajq6yS7cQTDTSfk21uOb7WYKvc145G8u1FfAj9knwj9W96RJoS%2FXCOlzrfgn7ukRY1xJhILsVE54NdN2%2BeaxnZ%2BJJT57LZrCGIel2xoCgjkN1KKpPVyQ%2BQ4j37imbbjezzWVRJgiMY%2FgvJNXQL21r1fPocH834n8xSy8SFgRi6FAsZOeuxGjFmXu5q85jqEORdK7PeW3oVr1%2Ft%2BA8nCYlHz8NZoGUw20CYUoikoDsX7cNAr5DErjoWERTEZptWFoOciCSOSQ9AcO%2FQYVsw68ukll62Gmwu7fpdGyEjSXC%2FX6DZlUi%2FjzMEC4QrbYeB1xX6Po95RY5O2E4JTNMQWoiZgtiBjh3lOgXcsZ95Dzc4h3eMLX14MQGOqUB%2FHxeC4vzITlfKvx3dh%2BDtA39C0MJo1FAlyLPLsdKf6B%2B%2BR8%2BMvub020UpoF%2BHMrZ5%2FP6jr%2Bo%2FgKftQOcWSgL3Zpdv7ClUU95%2BUM8zKYHRUSQTsreRyUdnd5Jy4qK3hzNZV4%2FIBUUX5VfJQtPuH9HVU%2BobFaLlZxJaX0iWQCu4rEqBmJ9Jgg5%2BpWsr%2Fo3keUBoNIuYJTHE1WvUOv1haPsD4IqO9Xh&X-Amz-Signature=cd3856e7db19499422fc3b7ace45917123685de56f145a3a192b0d87ede53a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73WV7TZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T091016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkOM3Vr4u9QHiZXs77yBrfXeG5DrZXrGBx1cxxvWcCOAiB7QjuexfhuxchcmdaDm%2BvV8Q3GAvnTCf7L%2FA2LkHzu%2FyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM00bjROGaVslrlp1gKtwDt6RFet6GjouHs9sMaLZRYN57UZBxuo6ZJX0pWH6IJlIPOFacE3Aci9Xf0awLfTxARWMpNpbHtDZZK6alTwW%2FQIMf2fQqXa86KqI6rgn%2FNgusFmMwUBWH9wiyLl%2B0s8aUZqoW7uUEg2WNM%2BbUQPBxNi9%2FIdF8brezK13jnH4iOfQ09veN3do0TqX8eWSVv5znjcagVHPgFOqaKFttU5Ksu5cSkZEFE5NFRQODDkQU20DZa1NKOSIFyKoJQ1hAC%2FZqJUC2kJKzY3S4WASNHfiLGevvlgd3EsfSTa1SDoj6559TeQ6F%2Bd7qqD7mhe5mCVhwgeBsykWfE8NB8yWTywzwbgpA2CF7mL3Cd%2BwgnOyQnnDAXbdw7Gbgw3k6gERJaYrkJDNnmmlre2LR5bFgp6kf7ws9%2BZfj7OUr%2BsXASTPHGY5Ts%2Bt16MjWDXy2rYgzI6KbzrklNnw%2Frl8pg56eU%2Fqr0gxyLGU1KiX6Kg2nX5uDBCTgiEks0CYPAENO5EbnK%2F6zS7MqQRe2Hc7yxHIntVQrJJifr%2FhYWn5nbaV0u3wWauK05T796CCZ4D5KrtBuLz2WOEdrDgyx6dReWXxe91UuzS5mb2LZeKZEIvuwIXxaNnxT%2BM8ZPCsUxUS2mGYwv%2FXgxAY6pgG8SCTenfxunzM3prwjHKJXQZk%2FmM9YiscbleL2L56jGbPe1wc2Nd%2F7bQGnfkDIcm8D8O7ApNtsbu32Zp2wkaJmwhFrTrn%2Ff4SlmRZzaUMLr7GWfW5pKRCGqR44aPK44Mx%2FDzIO4EExClGOQZrYTvhpKf5A0%2F0kiCGzndRwlFnlIEFkXUYtp9hWsc%2B9aB2mrvHhiv3tv1X8A3zhQB1evrBeIRUo77kf&X-Amz-Signature=85bce221f857722753353d74640ace56d31f5a56a9840cfc591adac68dfb4bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJOQRKZ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpx86TqVJeG2nf4gG2vEKEIUJ2qWagemRbwX6ErjIikAiAFyLNsGQ3dIn1%2F2LV5UKX3nIYBJsmwcSUd3NuZtTvZECqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjpVFdyV%2B4xU3eB1uKtwDod%2BUubnRU7E5KiMGJYC%2F3wHv4BmTxklMYpp3aYC4GqaO1XUEHCXnGWH6d0gmam%2BoNYAxzl%2FAaJIj9rUGdw%2FHNOaVAVJQvWxIj4XxbUjyUB83Hvb6qWW6O4QcQE12Y%2BOtT%2FqUjwxCyDXBPA%2BUtAfaUlqP06BD8go7klAGypipNZ1XlE56ZAsruDTHgJlDqtIWhUtEWDIj%2FdIdx70K4Fsv2EtzGCSoZS%2B%2BL5b3q3y2WpsxAwdx4jY6wrDgNy%2BPLodkFh3lpVmzxlMgeZLhz8af4Ezj1iFlFqzEiUGF2pK44bpJXiYrf0t67kABc7ePjnqeUGlesQ4hNSKf1OVYR9C6J8J9VDwTIRx%2BnY0Su%2BOm1jPl%2Fv9n2kCf6pIaeamZBsvc4dKAZ9PMp2OeC%2F5zgCWVBU7YqsfXKb%2FBEhdWwc5HoNHdAJ7lHKw5XgkWN%2BEu814GmObA30ZymkyzMu1sGkbZho%2B%2BA5qnUxnsEv5PkHRH5EGfp%2BVlQk9QYs18pmacZ8Q5SxCEOW554qLB3OMk6Su44t8KKdMsRNyLLww4NubL5kT5G5SWU%2BpD3YQh3poyuIzk9onrBP9gdm8yv4nUPPlTkt%2FjAIfjQp9QWNergPrG7PwjLGudHJKMVh8r6eswxcPhxAY6pgGwJvov0syLSFeVWPJgU%2F5bp%2B%2BNstOwAORyXQpFDUoD%2FM7UQcZQC%2BJXre4l4pK4Gd%2F1NDOvAA4w31JxlhJILkTsM2A5Lu90YfpPxF0ZrtofdTYUVCHX9J4XBbA4WjpBzcbBCaOYn8u7inJGG0yz1hNmRNRPXFiLWr7cQd%2Ft%2FtpTx2SPWf6kIEIG9AiQp5gtCQBZYdtPrlcu8m4sIX7kDBaUVw7xZ6sj&X-Amz-Signature=0f8780d19d37068f0355eeee5f2b6c289224aa98ba0c027f1096ae0fa841bd31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=79bd29e9a2828e351054037452df643cb3e9ee1493621c0830e9320db98e22c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=860d6785a30c409323258460891d09a58a96a4a098d9a5ea7ec30599d4f67179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMEESN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8t65m4QaFetC4eaOv29AWrv7qDkRe5UnlY2MlPRt%2B%2FAiEAmeAJSeMTJ5bY9I8yb1yA7tU4dwpBYIxw0zQdBGMpqHAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ%2Bb8xIuo2ZhD6pZircA%2BcBcAsRU2U24vBDloVYoB8yEFBO9O9sTgvrn8FBe3V6nk%2BZl%2Fd3DSb7NEa9%2ByZQh9u%2BO6rpiuaUB9RFihkvUlevWOWDzdkQQqzbs7f5KIsm49yqOFxbbF6x0dI206WmJbCIT7e9emq3SmCS%2BhbdJ3TY9M%2B%2BBujhDmnzGpud31BIrh%2BbYm6%2Bv1nt%2F6%2BowcDy9STZCz68Q7y%2B%2F41MdPTM44uqKOVTXaOSgHDaQfH3p8aRORfnnqVZd7bwpaNpv5QC0JvMqYvzqD1i%2F63bQ3%2BkQ3zJ44JYQaou6Ipm1UioHUyFCUBVtCFLruN6o%2BCqFo%2FPrOyDhFd6zrJ0DoseNK4fhY9yVQrqPXxX7GKibCQeyDKhKOMCePiXwT3zj1hBokyOl1e1IH4rS%2FDRrqHfuubey7R3IPWKcUbTah%2BLhgBr0Z4JtQJTtOzX%2Fx2aRayOoJHLM5EcR%2Bj%2FhxKMXtBfuo0oI%2BMPS4Ut2RjW23YdHtO%2Bd9TZWSj9L9nDgFgxOSDC1BRWUWWOK25PCp2M9CZ93%2BIWQD2C5DJQ889%2BsvtF%2FyWLL4c4t1PKZkgu8tohFAP8m5j55bgams5pPzsYqJhsdISNeXQW%2F0rKRqki3XAw5ietfdmMRwr0XRGGzFP1pFRoMKj14MQGOqUBKkxmUHgj5wew5f4K5s5HOlN30xTDgvPEpgND2RyQEhzuCog490NQ3TnhlrY7l5XqGriENRBmNXUqixHqwYqRHhKB1ihajtdh0QJgHDopYJTtE%2BkX4WRy3%2F94FCBJKNGH1c7JuviENNsTRKKxKN0WvNd0T2f9XAjYf64gJNZvvYaw1U4M8EwwqgQyf4ta39pxSj0GY6VihsBSVXA10%2FbuX58ujQcf&X-Amz-Signature=4746b004762c24cc7a4f3d150cf64022ec53176e62067b14761ab540b84a06e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLWMU3T%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE97LimTW2ipz9n2q4lL6Oet5abN%2BVg6iwUwJps7IQuAiAm%2F%2BBjdEvTeVD1ZqFKMzsuwz0txe1j8CGtzW6r6jNr5yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcIEzUVzjUwZzMzJKtwDkun8%2BiXTIrIdnK%2FkMKSCPq0OUUKENlYsW%2FzO4cZYvJ0yxR14iR%2FrnEmp39bhCka1Trm01LSh7PRwaYlUA9kAOjZJqC1uyMEmhUDw9VpjszSAeN8%2FBGyy7WbOhC0hi4QtB60BFSjZM8oeQO%2BJbkYoykwxAUL9FhCMvAgNeNFE8ldlAqX%2FwFC39Mp8FvBpajusWg87JlG3eyCXYqA6Ftmn25hslSLSeNKORT7o5t60WmpK2GBiwidbJPn9oyYqOwWDHMOmBkHzb0WotEB7PJBZX0TU3oekFye6Wok0N7zNLntHKdeFBniYUEWHcwL2sqw7W8YrJKxzN5JPR8D9tRjHYxcxtFNr0EkTXEMoqrtZuw677FXeaMhhABeRypufS6yi6S3JiSiqGyglq1StiApSthQayZzAgqrrbuxYK09gXdXnNcB3LmjsK6Iygvq%2BOX3nuMfT1mSgUPLuvBi2I2OMj3ddb6rYZ49ZIH31yppIYPyHjtKuGIoXCaAQWvhdZmiCVlsNTix51FkxERAKf6pLZPUhjXQU7M8j%2BkQPsKfwM2awiwZrubBG5f8SI1wG3N1%2Fn3AnIeKti1dWj7X3KkVXxP9SpFi1nvCNRzZICIWgIwl53q7DN%2FX3jWtNCgEw7vXgxAY6pgHqczQrNPEDOIOwiwVWf8kw4PD0vl9MVAeIGb1T8%2FxbO2b5Tw0elejOwEw%2BP7fn%2BfpKkdS9na5SUKINrDjStNJUaOwWQw6lw4O%2Bjm3b8Zy%2BOx3fJyJwlFyUCn1Oa70IfTg9N9MB%2BUzjL5mTO6tnsd1%2FH5surV6Gc4g%2BLHRylU54HL%2BEhGff%2FAQsy0%2FREL5WoaQE7oQ9VF6CeUhAkxc4XMYFT0ythCU6&X-Amz-Signature=6496d13bc51244c5f3d78b2884a8444c30963bcca42a6d4d32166cb356c188cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLWMU3T%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE97LimTW2ipz9n2q4lL6Oet5abN%2BVg6iwUwJps7IQuAiAm%2F%2BBjdEvTeVD1ZqFKMzsuwz0txe1j8CGtzW6r6jNr5yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcIEzUVzjUwZzMzJKtwDkun8%2BiXTIrIdnK%2FkMKSCPq0OUUKENlYsW%2FzO4cZYvJ0yxR14iR%2FrnEmp39bhCka1Trm01LSh7PRwaYlUA9kAOjZJqC1uyMEmhUDw9VpjszSAeN8%2FBGyy7WbOhC0hi4QtB60BFSjZM8oeQO%2BJbkYoykwxAUL9FhCMvAgNeNFE8ldlAqX%2FwFC39Mp8FvBpajusWg87JlG3eyCXYqA6Ftmn25hslSLSeNKORT7o5t60WmpK2GBiwidbJPn9oyYqOwWDHMOmBkHzb0WotEB7PJBZX0TU3oekFye6Wok0N7zNLntHKdeFBniYUEWHcwL2sqw7W8YrJKxzN5JPR8D9tRjHYxcxtFNr0EkTXEMoqrtZuw677FXeaMhhABeRypufS6yi6S3JiSiqGyglq1StiApSthQayZzAgqrrbuxYK09gXdXnNcB3LmjsK6Iygvq%2BOX3nuMfT1mSgUPLuvBi2I2OMj3ddb6rYZ49ZIH31yppIYPyHjtKuGIoXCaAQWvhdZmiCVlsNTix51FkxERAKf6pLZPUhjXQU7M8j%2BkQPsKfwM2awiwZrubBG5f8SI1wG3N1%2Fn3AnIeKti1dWj7X3KkVXxP9SpFi1nvCNRzZICIWgIwl53q7DN%2FX3jWtNCgEw7vXgxAY6pgHqczQrNPEDOIOwiwVWf8kw4PD0vl9MVAeIGb1T8%2FxbO2b5Tw0elejOwEw%2BP7fn%2BfpKkdS9na5SUKINrDjStNJUaOwWQw6lw4O%2Bjm3b8Zy%2BOx3fJyJwlFyUCn1Oa70IfTg9N9MB%2BUzjL5mTO6tnsd1%2FH5surV6Gc4g%2BLHRylU54HL%2BEhGff%2FAQsy0%2FREL5WoaQE7oQ9VF6CeUhAkxc4XMYFT0ythCU6&X-Amz-Signature=cea4f604ac50a26c502ed163a88bf71e562a1b92c8116ccd3a3cb014cd9fed2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLWMU3T%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE97LimTW2ipz9n2q4lL6Oet5abN%2BVg6iwUwJps7IQuAiAm%2F%2BBjdEvTeVD1ZqFKMzsuwz0txe1j8CGtzW6r6jNr5yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcIEzUVzjUwZzMzJKtwDkun8%2BiXTIrIdnK%2FkMKSCPq0OUUKENlYsW%2FzO4cZYvJ0yxR14iR%2FrnEmp39bhCka1Trm01LSh7PRwaYlUA9kAOjZJqC1uyMEmhUDw9VpjszSAeN8%2FBGyy7WbOhC0hi4QtB60BFSjZM8oeQO%2BJbkYoykwxAUL9FhCMvAgNeNFE8ldlAqX%2FwFC39Mp8FvBpajusWg87JlG3eyCXYqA6Ftmn25hslSLSeNKORT7o5t60WmpK2GBiwidbJPn9oyYqOwWDHMOmBkHzb0WotEB7PJBZX0TU3oekFye6Wok0N7zNLntHKdeFBniYUEWHcwL2sqw7W8YrJKxzN5JPR8D9tRjHYxcxtFNr0EkTXEMoqrtZuw677FXeaMhhABeRypufS6yi6S3JiSiqGyglq1StiApSthQayZzAgqrrbuxYK09gXdXnNcB3LmjsK6Iygvq%2BOX3nuMfT1mSgUPLuvBi2I2OMj3ddb6rYZ49ZIH31yppIYPyHjtKuGIoXCaAQWvhdZmiCVlsNTix51FkxERAKf6pLZPUhjXQU7M8j%2BkQPsKfwM2awiwZrubBG5f8SI1wG3N1%2Fn3AnIeKti1dWj7X3KkVXxP9SpFi1nvCNRzZICIWgIwl53q7DN%2FX3jWtNCgEw7vXgxAY6pgHqczQrNPEDOIOwiwVWf8kw4PD0vl9MVAeIGb1T8%2FxbO2b5Tw0elejOwEw%2BP7fn%2BfpKkdS9na5SUKINrDjStNJUaOwWQw6lw4O%2Bjm3b8Zy%2BOx3fJyJwlFyUCn1Oa70IfTg9N9MB%2BUzjL5mTO6tnsd1%2FH5surV6Gc4g%2BLHRylU54HL%2BEhGff%2FAQsy0%2FREL5WoaQE7oQ9VF6CeUhAkxc4XMYFT0ythCU6&X-Amz-Signature=3618a0a363f5459265a8f2a37a34a0a17395c517bc38581fc8c52f4abee0c06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLWMU3T%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE97LimTW2ipz9n2q4lL6Oet5abN%2BVg6iwUwJps7IQuAiAm%2F%2BBjdEvTeVD1ZqFKMzsuwz0txe1j8CGtzW6r6jNr5yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcIEzUVzjUwZzMzJKtwDkun8%2BiXTIrIdnK%2FkMKSCPq0OUUKENlYsW%2FzO4cZYvJ0yxR14iR%2FrnEmp39bhCka1Trm01LSh7PRwaYlUA9kAOjZJqC1uyMEmhUDw9VpjszSAeN8%2FBGyy7WbOhC0hi4QtB60BFSjZM8oeQO%2BJbkYoykwxAUL9FhCMvAgNeNFE8ldlAqX%2FwFC39Mp8FvBpajusWg87JlG3eyCXYqA6Ftmn25hslSLSeNKORT7o5t60WmpK2GBiwidbJPn9oyYqOwWDHMOmBkHzb0WotEB7PJBZX0TU3oekFye6Wok0N7zNLntHKdeFBniYUEWHcwL2sqw7W8YrJKxzN5JPR8D9tRjHYxcxtFNr0EkTXEMoqrtZuw677FXeaMhhABeRypufS6yi6S3JiSiqGyglq1StiApSthQayZzAgqrrbuxYK09gXdXnNcB3LmjsK6Iygvq%2BOX3nuMfT1mSgUPLuvBi2I2OMj3ddb6rYZ49ZIH31yppIYPyHjtKuGIoXCaAQWvhdZmiCVlsNTix51FkxERAKf6pLZPUhjXQU7M8j%2BkQPsKfwM2awiwZrubBG5f8SI1wG3N1%2Fn3AnIeKti1dWj7X3KkVXxP9SpFi1nvCNRzZICIWgIwl53q7DN%2FX3jWtNCgEw7vXgxAY6pgHqczQrNPEDOIOwiwVWf8kw4PD0vl9MVAeIGb1T8%2FxbO2b5Tw0elejOwEw%2BP7fn%2BfpKkdS9na5SUKINrDjStNJUaOwWQw6lw4O%2Bjm3b8Zy%2BOx3fJyJwlFyUCn1Oa70IfTg9N9MB%2BUzjL5mTO6tnsd1%2FH5surV6Gc4g%2BLHRylU54HL%2BEhGff%2FAQsy0%2FREL5WoaQE7oQ9VF6CeUhAkxc4XMYFT0ythCU6&X-Amz-Signature=df70a9d081d26d76e4192e4599799fa98ba6f7726725783991fa5320137b9266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLWMU3T%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE97LimTW2ipz9n2q4lL6Oet5abN%2BVg6iwUwJps7IQuAiAm%2F%2BBjdEvTeVD1ZqFKMzsuwz0txe1j8CGtzW6r6jNr5yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcIEzUVzjUwZzMzJKtwDkun8%2BiXTIrIdnK%2FkMKSCPq0OUUKENlYsW%2FzO4cZYvJ0yxR14iR%2FrnEmp39bhCka1Trm01LSh7PRwaYlUA9kAOjZJqC1uyMEmhUDw9VpjszSAeN8%2FBGyy7WbOhC0hi4QtB60BFSjZM8oeQO%2BJbkYoykwxAUL9FhCMvAgNeNFE8ldlAqX%2FwFC39Mp8FvBpajusWg87JlG3eyCXYqA6Ftmn25hslSLSeNKORT7o5t60WmpK2GBiwidbJPn9oyYqOwWDHMOmBkHzb0WotEB7PJBZX0TU3oekFye6Wok0N7zNLntHKdeFBniYUEWHcwL2sqw7W8YrJKxzN5JPR8D9tRjHYxcxtFNr0EkTXEMoqrtZuw677FXeaMhhABeRypufS6yi6S3JiSiqGyglq1StiApSthQayZzAgqrrbuxYK09gXdXnNcB3LmjsK6Iygvq%2BOX3nuMfT1mSgUPLuvBi2I2OMj3ddb6rYZ49ZIH31yppIYPyHjtKuGIoXCaAQWvhdZmiCVlsNTix51FkxERAKf6pLZPUhjXQU7M8j%2BkQPsKfwM2awiwZrubBG5f8SI1wG3N1%2Fn3AnIeKti1dWj7X3KkVXxP9SpFi1nvCNRzZICIWgIwl53q7DN%2FX3jWtNCgEw7vXgxAY6pgHqczQrNPEDOIOwiwVWf8kw4PD0vl9MVAeIGb1T8%2FxbO2b5Tw0elejOwEw%2BP7fn%2BfpKkdS9na5SUKINrDjStNJUaOwWQw6lw4O%2Bjm3b8Zy%2BOx3fJyJwlFyUCn1Oa70IfTg9N9MB%2BUzjL5mTO6tnsd1%2FH5surV6Gc4g%2BLHRylU54HL%2BEhGff%2FAQsy0%2FREL5WoaQE7oQ9VF6CeUhAkxc4XMYFT0ythCU6&X-Amz-Signature=b794f254261ee6d0e8236f21b509f3171cae4e5038020e8f54265f44bd268acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLWMU3T%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE97LimTW2ipz9n2q4lL6Oet5abN%2BVg6iwUwJps7IQuAiAm%2F%2BBjdEvTeVD1ZqFKMzsuwz0txe1j8CGtzW6r6jNr5yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcIEzUVzjUwZzMzJKtwDkun8%2BiXTIrIdnK%2FkMKSCPq0OUUKENlYsW%2FzO4cZYvJ0yxR14iR%2FrnEmp39bhCka1Trm01LSh7PRwaYlUA9kAOjZJqC1uyMEmhUDw9VpjszSAeN8%2FBGyy7WbOhC0hi4QtB60BFSjZM8oeQO%2BJbkYoykwxAUL9FhCMvAgNeNFE8ldlAqX%2FwFC39Mp8FvBpajusWg87JlG3eyCXYqA6Ftmn25hslSLSeNKORT7o5t60WmpK2GBiwidbJPn9oyYqOwWDHMOmBkHzb0WotEB7PJBZX0TU3oekFye6Wok0N7zNLntHKdeFBniYUEWHcwL2sqw7W8YrJKxzN5JPR8D9tRjHYxcxtFNr0EkTXEMoqrtZuw677FXeaMhhABeRypufS6yi6S3JiSiqGyglq1StiApSthQayZzAgqrrbuxYK09gXdXnNcB3LmjsK6Iygvq%2BOX3nuMfT1mSgUPLuvBi2I2OMj3ddb6rYZ49ZIH31yppIYPyHjtKuGIoXCaAQWvhdZmiCVlsNTix51FkxERAKf6pLZPUhjXQU7M8j%2BkQPsKfwM2awiwZrubBG5f8SI1wG3N1%2Fn3AnIeKti1dWj7X3KkVXxP9SpFi1nvCNRzZICIWgIwl53q7DN%2FX3jWtNCgEw7vXgxAY6pgHqczQrNPEDOIOwiwVWf8kw4PD0vl9MVAeIGb1T8%2FxbO2b5Tw0elejOwEw%2BP7fn%2BfpKkdS9na5SUKINrDjStNJUaOwWQw6lw4O%2Bjm3b8Zy%2BOx3fJyJwlFyUCn1Oa70IfTg9N9MB%2BUzjL5mTO6tnsd1%2FH5surV6Gc4g%2BLHRylU54HL%2BEhGff%2FAQsy0%2FREL5WoaQE7oQ9VF6CeUhAkxc4XMYFT0ythCU6&X-Amz-Signature=de78e32aba8df81130ccf08ef03adfd84a92310d86513d98dd681ddaf51e328c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLWMU3T%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE97LimTW2ipz9n2q4lL6Oet5abN%2BVg6iwUwJps7IQuAiAm%2F%2BBjdEvTeVD1ZqFKMzsuwz0txe1j8CGtzW6r6jNr5yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcIEzUVzjUwZzMzJKtwDkun8%2BiXTIrIdnK%2FkMKSCPq0OUUKENlYsW%2FzO4cZYvJ0yxR14iR%2FrnEmp39bhCka1Trm01LSh7PRwaYlUA9kAOjZJqC1uyMEmhUDw9VpjszSAeN8%2FBGyy7WbOhC0hi4QtB60BFSjZM8oeQO%2BJbkYoykwxAUL9FhCMvAgNeNFE8ldlAqX%2FwFC39Mp8FvBpajusWg87JlG3eyCXYqA6Ftmn25hslSLSeNKORT7o5t60WmpK2GBiwidbJPn9oyYqOwWDHMOmBkHzb0WotEB7PJBZX0TU3oekFye6Wok0N7zNLntHKdeFBniYUEWHcwL2sqw7W8YrJKxzN5JPR8D9tRjHYxcxtFNr0EkTXEMoqrtZuw677FXeaMhhABeRypufS6yi6S3JiSiqGyglq1StiApSthQayZzAgqrrbuxYK09gXdXnNcB3LmjsK6Iygvq%2BOX3nuMfT1mSgUPLuvBi2I2OMj3ddb6rYZ49ZIH31yppIYPyHjtKuGIoXCaAQWvhdZmiCVlsNTix51FkxERAKf6pLZPUhjXQU7M8j%2BkQPsKfwM2awiwZrubBG5f8SI1wG3N1%2Fn3AnIeKti1dWj7X3KkVXxP9SpFi1nvCNRzZICIWgIwl53q7DN%2FX3jWtNCgEw7vXgxAY6pgHqczQrNPEDOIOwiwVWf8kw4PD0vl9MVAeIGb1T8%2FxbO2b5Tw0elejOwEw%2BP7fn%2BfpKkdS9na5SUKINrDjStNJUaOwWQw6lw4O%2Bjm3b8Zy%2BOx3fJyJwlFyUCn1Oa70IfTg9N9MB%2BUzjL5mTO6tnsd1%2FH5surV6Gc4g%2BLHRylU54HL%2BEhGff%2FAQsy0%2FREL5WoaQE7oQ9VF6CeUhAkxc4XMYFT0ythCU6&X-Amz-Signature=3618a0a363f5459265a8f2a37a34a0a17395c517bc38581fc8c52f4abee0c06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLWMU3T%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE97LimTW2ipz9n2q4lL6Oet5abN%2BVg6iwUwJps7IQuAiAm%2F%2BBjdEvTeVD1ZqFKMzsuwz0txe1j8CGtzW6r6jNr5yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcIEzUVzjUwZzMzJKtwDkun8%2BiXTIrIdnK%2FkMKSCPq0OUUKENlYsW%2FzO4cZYvJ0yxR14iR%2FrnEmp39bhCka1Trm01LSh7PRwaYlUA9kAOjZJqC1uyMEmhUDw9VpjszSAeN8%2FBGyy7WbOhC0hi4QtB60BFSjZM8oeQO%2BJbkYoykwxAUL9FhCMvAgNeNFE8ldlAqX%2FwFC39Mp8FvBpajusWg87JlG3eyCXYqA6Ftmn25hslSLSeNKORT7o5t60WmpK2GBiwidbJPn9oyYqOwWDHMOmBkHzb0WotEB7PJBZX0TU3oekFye6Wok0N7zNLntHKdeFBniYUEWHcwL2sqw7W8YrJKxzN5JPR8D9tRjHYxcxtFNr0EkTXEMoqrtZuw677FXeaMhhABeRypufS6yi6S3JiSiqGyglq1StiApSthQayZzAgqrrbuxYK09gXdXnNcB3LmjsK6Iygvq%2BOX3nuMfT1mSgUPLuvBi2I2OMj3ddb6rYZ49ZIH31yppIYPyHjtKuGIoXCaAQWvhdZmiCVlsNTix51FkxERAKf6pLZPUhjXQU7M8j%2BkQPsKfwM2awiwZrubBG5f8SI1wG3N1%2Fn3AnIeKti1dWj7X3KkVXxP9SpFi1nvCNRzZICIWgIwl53q7DN%2FX3jWtNCgEw7vXgxAY6pgHqczQrNPEDOIOwiwVWf8kw4PD0vl9MVAeIGb1T8%2FxbO2b5Tw0elejOwEw%2BP7fn%2BfpKkdS9na5SUKINrDjStNJUaOwWQw6lw4O%2Bjm3b8Zy%2BOx3fJyJwlFyUCn1Oa70IfTg9N9MB%2BUzjL5mTO6tnsd1%2FH5surV6Gc4g%2BLHRylU54HL%2BEhGff%2FAQsy0%2FREL5WoaQE7oQ9VF6CeUhAkxc4XMYFT0ythCU6&X-Amz-Signature=cb97f754679e9466fcb1040123708ad2e2fab906ba52521499d093e532b748fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLWMU3T%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE97LimTW2ipz9n2q4lL6Oet5abN%2BVg6iwUwJps7IQuAiAm%2F%2BBjdEvTeVD1ZqFKMzsuwz0txe1j8CGtzW6r6jNr5yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcIEzUVzjUwZzMzJKtwDkun8%2BiXTIrIdnK%2FkMKSCPq0OUUKENlYsW%2FzO4cZYvJ0yxR14iR%2FrnEmp39bhCka1Trm01LSh7PRwaYlUA9kAOjZJqC1uyMEmhUDw9VpjszSAeN8%2FBGyy7WbOhC0hi4QtB60BFSjZM8oeQO%2BJbkYoykwxAUL9FhCMvAgNeNFE8ldlAqX%2FwFC39Mp8FvBpajusWg87JlG3eyCXYqA6Ftmn25hslSLSeNKORT7o5t60WmpK2GBiwidbJPn9oyYqOwWDHMOmBkHzb0WotEB7PJBZX0TU3oekFye6Wok0N7zNLntHKdeFBniYUEWHcwL2sqw7W8YrJKxzN5JPR8D9tRjHYxcxtFNr0EkTXEMoqrtZuw677FXeaMhhABeRypufS6yi6S3JiSiqGyglq1StiApSthQayZzAgqrrbuxYK09gXdXnNcB3LmjsK6Iygvq%2BOX3nuMfT1mSgUPLuvBi2I2OMj3ddb6rYZ49ZIH31yppIYPyHjtKuGIoXCaAQWvhdZmiCVlsNTix51FkxERAKf6pLZPUhjXQU7M8j%2BkQPsKfwM2awiwZrubBG5f8SI1wG3N1%2Fn3AnIeKti1dWj7X3KkVXxP9SpFi1nvCNRzZICIWgIwl53q7DN%2FX3jWtNCgEw7vXgxAY6pgHqczQrNPEDOIOwiwVWf8kw4PD0vl9MVAeIGb1T8%2FxbO2b5Tw0elejOwEw%2BP7fn%2BfpKkdS9na5SUKINrDjStNJUaOwWQw6lw4O%2Bjm3b8Zy%2BOx3fJyJwlFyUCn1Oa70IfTg9N9MB%2BUzjL5mTO6tnsd1%2FH5surV6Gc4g%2BLHRylU54HL%2BEhGff%2FAQsy0%2FREL5WoaQE7oQ9VF6CeUhAkxc4XMYFT0ythCU6&X-Amz-Signature=3cfaa2f43474bca41a16ca5cee40a09b0eead0b08c07e3ba93f666c031d0c06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLWMU3T%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE97LimTW2ipz9n2q4lL6Oet5abN%2BVg6iwUwJps7IQuAiAm%2F%2BBjdEvTeVD1ZqFKMzsuwz0txe1j8CGtzW6r6jNr5yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOcIEzUVzjUwZzMzJKtwDkun8%2BiXTIrIdnK%2FkMKSCPq0OUUKENlYsW%2FzO4cZYvJ0yxR14iR%2FrnEmp39bhCka1Trm01LSh7PRwaYlUA9kAOjZJqC1uyMEmhUDw9VpjszSAeN8%2FBGyy7WbOhC0hi4QtB60BFSjZM8oeQO%2BJbkYoykwxAUL9FhCMvAgNeNFE8ldlAqX%2FwFC39Mp8FvBpajusWg87JlG3eyCXYqA6Ftmn25hslSLSeNKORT7o5t60WmpK2GBiwidbJPn9oyYqOwWDHMOmBkHzb0WotEB7PJBZX0TU3oekFye6Wok0N7zNLntHKdeFBniYUEWHcwL2sqw7W8YrJKxzN5JPR8D9tRjHYxcxtFNr0EkTXEMoqrtZuw677FXeaMhhABeRypufS6yi6S3JiSiqGyglq1StiApSthQayZzAgqrrbuxYK09gXdXnNcB3LmjsK6Iygvq%2BOX3nuMfT1mSgUPLuvBi2I2OMj3ddb6rYZ49ZIH31yppIYPyHjtKuGIoXCaAQWvhdZmiCVlsNTix51FkxERAKf6pLZPUhjXQU7M8j%2BkQPsKfwM2awiwZrubBG5f8SI1wG3N1%2Fn3AnIeKti1dWj7X3KkVXxP9SpFi1nvCNRzZICIWgIwl53q7DN%2FX3jWtNCgEw7vXgxAY6pgHqczQrNPEDOIOwiwVWf8kw4PD0vl9MVAeIGb1T8%2FxbO2b5Tw0elejOwEw%2BP7fn%2BfpKkdS9na5SUKINrDjStNJUaOwWQw6lw4O%2Bjm3b8Zy%2BOx3fJyJwlFyUCn1Oa70IfTg9N9MB%2BUzjL5mTO6tnsd1%2FH5surV6Gc4g%2BLHRylU54HL%2BEhGff%2FAQsy0%2FREL5WoaQE7oQ9VF6CeUhAkxc4XMYFT0ythCU6&X-Amz-Signature=b2f14cd4ecf7b61e3cd1853e28a85057edd97b7fd799bbc7915f35d70dfa3ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
