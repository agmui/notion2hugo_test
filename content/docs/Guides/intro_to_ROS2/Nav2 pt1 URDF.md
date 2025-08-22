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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=026088915c7d417a27ebedd582919af80718d06e1ca5e1477c5a001a636a0d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=30c4d0f5da4badc14cd72c9581f75ac3a3e6e8ca8b864950e5518e68d1268e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=605698856737fe52ecdb8524d72b99ee2cf2f8ae898522fc112112379e83facd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=3d018279f067f65b86a8a60985fa9427e9d622797cb5cce4c67cb4407a9530ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=d9bf2ceabda9e2e5f8dc889e95b8e2cd52c6ba0d1f00fe6e64502e138f4cca28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=2c9b072d4cfe13e022c925d1f5cb8ba8501139997337121eb1c4c6fe235e2429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=4d157868f98c2095c0e2959e16f3231931f30f92694a39d54ed54baf0cdd6a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=2290d03aa0c6ee38f42c54bf47e303ee754dacb7d2668930be38cba21459222c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=bf9d1d204569ed0968b7b4e1c5ebb89a49ecbda930b5cc316e64f2df2c658099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=2f501774457132932b0a144b9b414fe26a676fec9d98e7f52bdc2d6a740cde89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABX3RJT%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5mSU%2FjH9V9Swhuwq76jThA2hQAKjPMAHBzcnyf4MHFQIhAOcsIuTp%2FVGUZiDwYYS0CgkBuNP7iL4ar4uXUz62BIhcKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRLFycIRDe76K1n2kq3AMu0SteM0J4EJrgMGTCvtMFGkrHHIMhPau656ADIqgeOTiqtsfJ2gsXi1YrxZ%2Ftl9%2FOImfapRBRZLrxeAyCKqIIt%2FPNa1shfSsJFU3rlNOji0ZmqvK2csIdN0qyitiU2JA6geg9D9qxd137VgeVm1bVvpp3VhtuZExl152IxMbjDnNuUPeSYVtR4iBBTxVCtRbh8JPpxO1bje8U8ficSb8k3iE7GxKZt2Dbzb%2B9dVe7IU%2BhGBRFy%2FzlcCl0%2FuwRPxAxk3%2BkkPHknD%2B6WWoIZJflDyfPnxOKN6VV5Rm%2FSf%2FJns6j%2F1GIRS8wtTRlstXOUtBjFN3VeSOKXSjYVvpP99o5m22vMVLv4ynB55DgMi1hLTYs5unEZ7o22CFt%2Fn7A0TNnEoS%2FJtoOSqwxUGGFwtAFjbgKHTIPIv2e8mKRzfkhQBtUrPaXn7kYKIiTXNeLCYaVrYfHEuWkMrYqzT4lQB7v%2FdkOcNjDyzonyDPU9ECTySm0lnFfTD6iGrxkEqQXscni95jx%2FuKUy%2FYT7lCGCI%2FYom%2Byxljh36oZ%2BcmAd%2Fuxb5eSpTamODsErhchKToLVrpXugpv7SapTOCmdheFGJJ8K8kU8gCFA%2FOJH9xluq7uMq4GsxWGOmxlJs6KbjCJ8p7FBjqkAcy3wOioYHCCMIj729EJG%2FaTRDOCDb8tVn3g4TUuIS2mYNQlUEFTnG%2BkCCE5FpX0KjSMzf%2F90Fue003cq1H1zlmwfEnQOe0mXvWnnzRLg%2FdiUfOCFPsV1IhDdmULmunaESlj4fb6YuiJFY1ZNUDEIUaRPsHGYnCj306wZk%2BBuevBnzCaUrQCeenoczKF2gg8Fb%2Bc9moqLpQNoD%2BMcPucKR3krJYG&X-Amz-Signature=7aa829803e44bc4d1b2ec1342302a7537ffc3fedb88436c857eaae4d8d6ff09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYINJE3%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpu5FGd9hxC0CfKtcAo7FZ0yoqYU0GvJTJW1ktMqEMqAIgHHJRFqWWkukMtqJEHiLjEHK%2F19fmEmwn1nYvlVyg7PwqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5fFwp3z2h6y548zCrcAz9PW%2BIFblQV93h2B78vz%2Ft2rdJ2yRVBBaMbGwcFspt70PuS1hBzWf8aOGZF7cjdNEpNnUL%2BI0VIJNXtOXeyQLSGYBiQ77ms5aAAFTjWeTIDnXHPCS8JD37PfyR%2B4lULdqPd5Oi5vveILgJ1%2Bz0lRRCg8%2BlMzW%2Fysgb%2Fhh5J5nHPyxV19sQuMFspOObYV4jGVkJIRMTbmLdFwnu4evfOzQvp4%2BpqL4xiNtCF1V36RTk1i5iz7qGlmQ38J68hYrCNHdPzkdduqzioGMEnYN80X%2FLwlzWehw2Lkgo4tjV2GvDM%2Bg7YjzZmhrHajrdImhGvvXCfdGrnoWvN%2FMm4sEOTG87UM3CZLewXn%2BCuNh4xNov2RKupNcNrcDzKpb1IVgZv%2FzvgApdARrb8rrAvj5eW0AFD9vSPRImaWUjRG6Hxl04y7Ls23jcrvqNcq3EV%2FwfBb6YUxhFem99HhGSPOqR0bgsb1ALJB96IC4dYvcvOF%2BytZ5o8DI6dZ2cu3%2FDtViomlEVwJD48hMpLt4%2BxLwabY7P78vmUVUtz9tw2cP0Yf72T%2FCMMjaizfct7wibhmO41xO2jopWhqZrTClD1Kv6uJxy7YKygmbfLXk1Lqq2T3qerGleWNJ0fJ2TbedeqMInynsUGOqUBtjTXLWKuagicZfoRTpPzKNmq%2Bv2dSadwuC2lD5O6KKJoyAVNWJWKBsWXKsn1UXQvOF4zRFLBgOaRaZBbsoJN7uW1G8wWsT4VmTL4v7Yy4GqmVbmv71Hc0QEMHAuoPc8EykS9jcTV4oXBnun3UiijWghVQSVAf0n72HJJ7utk1%2Biiwwn0h3KND9cddjb%2FiaeTAIj%2F3k3TWBFolEb4a%2F21JVzoWK3W&X-Amz-Signature=cfa43adb2fca6c6827a307c55bd8a0e93de54acb603d738359b7dc8f2841fae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VET4D2O6%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3kmVUHOqXn7AkyW9c%2FVtIzpSK%2Bx6YWqybGspqPXfSCAiB9yD1aS0QtWqa6f1gh6nll5onp5im8EQSQ%2Fme9GCKuOyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQazsBJCbNXhYlG7mKtwDH0JkEDMJgT0mo8rTpCNML1qkesYUDSP1nBravLALVfjdgTSEdv%2BHwWu8kYpUiCXSs48Y3swksTY1cgKes6wdSBDPaNMuYvh5GTQeiymf3Hm3TAyruPi9MhTEwCEuwEGfs9xbFnx9A6Px%2Fdm6N5pC4Fo%2BOUJOPzuwnsFN8ejgcdi54%2Flto8DUyX7AU0ESZPHAVFSEQTeIDYk44eiOuRYP0dX%2BUyiWNgzkI%2FwUJxJkWNoT34KvS%2BhfOat4HbegdzIV%2F%2FqFjnm3W3fMgjzjeQ3zuXBmIUa48k3WE%2BIhuyzYrLaAPDS0f3mLn2EppM%2B91sZ1LiPDhrzZPazvufo%2FlnEvuNcQQgw%2FzzzoOg5jje%2Fkb2e7fKDug6jhnng0LDN%2Bg8nMQ4zCfsedTETzmHKKcnohhuNMGdrwChOXhI40BsSHns39LDZtY0WIwbxwDa%2BDseIeGrdZVRVfP7FB3vR7Ec2TJTUdePaGKO8v6jESPkD%2FMRQDDJ%2Bejcv3sLNVp6XS4g%2BN3S1dgIujItTCnAjb2fv%2FRdmKXlpj0kpi8tCcWkbbU7XX9I8DeIA7KWjkBznhmol2nriM36pWbfMBYRxrxN5f1NTR01jLYrqLRDXAkrQfk5AcsLoYWrSxYM%2Fn2GwwmPOexQY6pgHQ2duo0bUboc9O1zzsyoaIpD60SbE7lZ0uwMnu7NwBwuxA6p196rnbV22X28Dr%2BK6kGUfhuYv2CUafweBKeSuiEmPn57bl4FTCPEZNRpkNzrWU1z6Xp7s1FJh%2FSzbBJuXJujImSe%2FEUK9h4WJxbgOxOYQohICC67iE%2FoSNC2sXYbJBl79ZKLBbKbBtCRPgTyvqn2Bt7MD9xXyRosl%2BEGeOG6NHAY4J&X-Amz-Signature=d3541a8f1df31537e5ab34464e3444ec31c284f6daa448178c31d11974e8f818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=c629677da9dd01e4e60180dc59c0bf42cb3a3f975bb6a4523f8ad33646f18c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEAO5CV%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWtLJZn2n2xuj8QLFh42OAVFn8K6GrxLDmloRiTUBZZAiBwfhP3RmA6JGu%2Bqnjz8gH%2FkjUrm%2FzIuqRJ0UtKlMPt2iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKI1akLofTEHMOhXAKtwDCEgkZPj4poTIpE58p4DUxQw31iWe5ML1po8VeOSadLVJR6C82vuoWNKINqy%2BkPW6OXTOuYTXufZkyvBawLxHxCnZqrRxee%2BvBAZcX2T%2BBh8EQdVqB7YbxHj2DhZgYzj5tnr%2FEsaec05cAHC9wYOSZALj7AmR25wbt%2FctndizCnqA7g%2FoVl6KfPWiSGYS1DFFwD%2ByDvc1mkQq9pE0DD%2BsSfXOEhUrZ%2BNVHfJLtLEbl3UILJgDASx13C%2BUkatkpDUQHE%2FVwMte%2BLcftZ2NaPyB8bJeHv6gK2qWIAWC4jrXO%2BXdf2o6BajiaQOzrecpWBzSKqbYt2PH93PYEuo21LIVIbOdJR%2F5igqyOg4LHx7Krjf8C28lH369dTWF8oT2w7YSMgOMRraqdY6eogzgmsw0TL8W%2Bs0ejieWehlS%2BIxzMUdR9kQUWySAZRGuclxWRYyNnXPBJWl%2BzlyoKQp20HNOj%2BMgIOUnAlEd9SnCVDB2EbKNU1xSif41K9Ql%2BBCNFbd68Mj4rxN0zV9UqzTUNWbmH3WRIeg5G34I3oH5QY09qh3XwvmPAurAkhaxsoekDFb8ww9sNAwJZLEiKsFb6xP9xEjscsrvhOhB31feVxxFD5i0RIBxC4P7TQ8P0oswq%2FKexQY6pgFWlOZG37Hq3ku8pbRwSRhK3stEvuM0AOsLb0z4a0DQLHtVAbY5ncY5rrIQa0zgih2ZrKan4M8lp1yhKIc4%2Bq9gcD%2B3FBvENl7JiRpifzY2vDis4FSUoLClv41bSYxwHhhk6lhjtZQe1WR%2FSPXotPrsLfmKRQKS6ZLpPJWMYjUM4vdzteJsT9cIbjac3bvH2KBfE8c%2Bye9T%2FQddiIwlM%2BqZdpX7VI2w&X-Amz-Signature=c8c66674fab0d26cc7ad0dea27b681fb357a2474a7199ff8c664f791786777d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=99cd57f9b8855e04433c4b1ac40f990c99d008aefa1fdf2b66483126c8fcd86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HAV77W%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyuvV7LIvfAXZKKVu8J%2BOBOv9%2BKnm9m%2FTgTfFqr9kwJwIhAKgBQ5K2ir1UXvPJ7yRMVVyx2TUpgBwsk2cvTb1sv9O7KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9lbfYcEU1iPYRvB4q3AO2Y9pU9cQVZ%2BMxQhycgqkpBg%2FssL2GimqsS80BxDPzDFHvrvcIOal%2FWqB%2BD4hm9K%2BL%2BDxOl1vvdsow1GO6NOMi%2F6ZYvME1CF8PMFoTiwppI5RVDCXLE6YNv6XN4D%2BH0%2F%2F1VWjGoW%2BLghBj8SslDnTNA5euGw6cdglUK2MTnpnoRtFAhDCjTxxlI6g4SEdGofzh5ZaZVQIs2zBG0fiD8s4vRkSiVGcFDDYULxDdglVmqB86uDNBWmSM%2FUwEfYCcKoRhgCb%2F6pQf2Xh1i5cb0nK%2BKWm9%2BX7%2FJsZQ1f4aaZZNMExER%2Bxcxh3vmwENcfgnUTr86Y9IdArNrZYyGk2GOIXNXEmLGguEXR0RkUUBUV79LOFOaOrUxDR3wGQDTfRiYSC3ShTydr5ylVnhNC56DFc1eCApyJIaYuQppOmcYI3AgpI7oVHAcj2Mbc9zQTu1u758Mr1QBb%2B3fAUvf9OyrTMRV9qe%2F1%2BtnPPWECFy1fV6m%2FrIZe7c2iIp%2FyiaUUTUg98bEiyOH0vzw1wGm3mphMo1vWhYYtdSamcuBVOk90ZIEVqmS8XUnvcGKDHbK1Y77iPbRMV7D7r22cxeH8j1uxmNdDFX%2Fl0cEVAqBXljipxg8EnHg%2F3tWIIjp8U09zCJ857FBjqkAf%2BfJuPRDWgEycFhi5VKBGuRXk9xQ2KjJgYC87gBQqom3ErfNIoq9Ly47VoVDRxNJ9nOVq3eeim4tiT6wWsDOBvFF4nUhMOrf6j7F08fKQD7ttDg6ULfl88ZK%2BBGp%2BahaKTP8BGiWKchS17tijhnlFwR6mcg6VIlPY5CuYfvxr93DB2yI2fVYPH1z9B%2FsZLzn%2BRlu1ayHoDT4mJ6eQL2nGHDFkQq&X-Amz-Signature=58b352f3de1874eddeb266a381ea6afd27e4328fea54aa8f4551759db75adc67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=7f42bf00e1e47a1a001f105bcb02e94028c00c76ae8ddfef0872843a98947dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBHSXZF%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGmaw1slShJhI%2Bv0dr7uy5HX%2Fun9YqPI9izOWhyRD%2BJAIhAPX5c992K8ods7pLtnqNRc7%2FzOu2u1Q%2Bdo9EEeNh3BrZKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzblXIpN%2FDxB3XEM6Qq3AOFQdQvpkcYzkA737OuH2eQMDG%2BgV2bXKF7DM3woFbG%2FRj3B9MD2ZR5Bd4S42jebMiYTiqAzgLHYocu8EJdhf6HNBOG2Uz8c3M3KltkZGbyX5zZ6oGdRd19USI1vlrTx5Mdxelci8IGQ6f8fopj1cyd4GS6bzUesL%2BVgqqnOwhzR6SuVnQEskAoFmGApoCDhJgEygdHTKh%2Bs3rHq%2Bi0%2BmGwGyw2f1IzGB9jQw%2FEDG80tkEPeEqkIfqvGhd6WTB0dP0MopdxCbRPSlSEPWSoQtPs6RIjev8ve%2FthCcEhGB%2Fnr1lX99uEUtyXB5V%2FgHg0ZMUDhaySt51l%2B8N%2FJANwe0lVb6jcgLFd1kN06b4mTbScNtd6N2hgBAYzO0nLlQ%2B2abc1KFoz7EfXpdXyOcOeA%2Fk0Ty404JtMweUJf8c71TvJdtz6bQg10jh3s2JxpSFyuaVD1XwwukLAU14X6dds7sn%2BtGqfoSsyKrsQfGa49kdBLW4cDdoVRpyvgEP4u9OAnc465pIQEE%2B5jLL70ctfQapuu6ouiIlOaHieU2AJ57hrFp1osEV7QLTW%2BLgGuQU30DdalOhHyfXpFWstLl3sY2tkM%2B3Pq4sqLTBLBMNhxgYpswww9NmCf%2BRJyglJ7TDi8p7FBjqkAfez%2Fqav2wgqmKnlIKIj0ot5qm6qFVf9FVeCxgwqn0JHFK2bgSH9t6i6Lbzp3wJ1Fp7FJ%2FU5t82hwNVTY8PQFLH2LuR3XtTkIaENuGhpXGVG3i8pYK%2FBhrO2etnX5mgp9xlAAXrfnNiAA7SA4IQimrnIaoW7HEp7kljWAH7zMcmPhZHiGIPU4IqVmJUsenACmAdnGQfxZ1XfX424hUiwAZBsUWPT&X-Amz-Signature=5356d9b5024b752c5628f16d62ea71b08707031b868b8bf17f2abfe9e8f6b839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=45a2f03214e610130335c7f4545486040575c023b6a6c2e421e4d140a82c7fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECX7MLN%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8qvnAl%2Fx2n1LZ1CF5JNOASkvW1v1B6W3o%2Bn1AZv19ZAiEAiQlf4XJhfnwVzWUSK1lo4T%2FSO5PkukJToHvFRP%2BLjkwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FxEhJ359jqO9ExyyrcA4MEZtL04gMZPpEjQ%2BTkbLKFrQ%2FgkaH00sMzlkdU04uCEpQj077I5prChFnhunf19G2aK8Il0SAevZpX35ozWWf%2FxEdDWOy6p48ArUbAxuN7X1weD%2FZzIIZD1AhW0ps6WbsETOt8SWjpzureRQUB25okaW2OjaCYc3JUxvZKQ2aIrbefjsvh702kR4gEpQ%2B3KqXb07M2ESB11LZEsDOEIrKRwbHlX1nO2k6X5D5M1XaxP56rGgOicz2T%2BVMhituXXsT1%2F7%2FFVIRVCsBkChMue0CsdBcqOq8qHu1GdCIH%2BH3Bw5HE%2BCZzr8Dj68kEux%2BC2Rv2N0WBylrI8F6NkQh1QqMoTB%2BSkeP0XRa3a0sa3cn9HGfJSqA1Ns%2FNN0Y1DIliX2B8AMX0ka1MB6WtWFGj5xIO8V9sftz0qbdHlQ6E8TSXty6A%2BDmxhtLpu%2FsiplpVApkk%2BgilK%2BEhhA1djaQlQFnOK0wAjJ3bpgFPJkgGukQMzuk3uTgclKpAIlHjVYpB0iezVZdPxRm%2B%2Ffl0NiqSijZ7g9vWRp0BvoGxAp9Psk7Pm0fG90hoSydrpgFRgeXFjZwp6MGtgnjKbNgD%2BIR7Ljq0AOiIu8aE9ZMGq8iIDze2BLUIh5j1rO%2FuCne1MIrznsUGOqUBSorcng7CrcunIpDL3sdOpahtjHyjTR5uK5l5K4%2FQEJjCghkuPSipllO6xELCgYQQqLbgmwI8EMYXaLNZ5V2LEDVnFwnIKQl9O0PscG6yuo%2BP81eX0MOguEoXHp2WudAUnOyU1SUr%2FoKbxTeX25uEkwum4U5Af8BvrFqtG69PZgnvPG1LNBGNcZsmpX8zan%2BFkVV9E%2Feqe82C1D85AV7lIqpxgGm%2B&X-Amz-Signature=b6ed31b35c92cb1fc1679737425b7ee8b5686bbc991ad866b37e732c98dd3371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=965de955bed52c4b217bcafd9f5baf8c4090b9f2833db7584c2ce57656d75742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCXGNTEG%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPfXEHxnwUY%2FKhFtkHyCHBVeF9UoWgNLRQmSRWyLuQfQIgZ%2F7Ofsh015uIvntCmoEYOMVzH1BMk5U%2FNEkltNQchHsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgy5VWCfMExtEaEoSrcA7FEHDUFylEr2odYY4S4HOs%2FfgAuuiYbMQdNNSdbzguE5psYmTKMnHB%2FWfcUJtfjxNoZBxwVxxiBsvD%2F4gX6xpQQWDHKkLW2YVN7txmNK9Aftlp7R0CvNcMBWNapqVoHoEYpDEjnME%2FT4A3OrBcYrMQxlA2%2FqoQVyBmU4ij4NTAh0bn%2BPMYpQRPWd8ZwFR%2BsCFB4JHJruHCxQTIyUBj1wzvCSB6hqqwl2tDOV%2B0s3%2FCTG7wMeIXEayWZ%2FTo53m1J3c23Jd6m0sgTHMOigMkWbhVzATMqnxEg4JCA2MJic2PpCAjzOqDmE%2B%2Bt4S8SDNVYJuQ6ousHA%2BmyhOoaHWZFVn2VUm4RUCa2e1df0AvWVwrf12Ugv913ewUur46QkQ%2BJNr%2B5TdbPvsWMAmJvYlg8tHc0OAHcyNPydWeSqsPhhTu5mnGrr5g%2BrhH0MX4Ful86SHqVrLuW7M1Cc6aiyx9gAYYuqXVAtkrhTvJ2qD2q3kUIQGufdSCkx4zw0FFV0cgnYY4pLxUm%2FzDMVWH1OZzdwC8oaLOCTi1h%2BqwlG28Qabz8dEfBD2Xt8eoy%2BqcVLBY88swMxPWEGb9CVlcunD23c2NkoIW%2BzxUB974Icbi2vwkNDTZzmipFSCk36lWGMP7ynsUGOqUBiFIyjCqfEWguv8tFapxlIry0kR4Puuj8qKGonFaAi9TSBL9D4cYFTfLBug56Q18D6zjQNuK9BsEcyrKZPxeXoU0rtOrPqfpi6%2FfQHtzBrIHOwlfCegaSW8WumcoeitkVSUiWV6Fkw32E6rPLGk2iL3S45A6f4h4MtKYRExsGvRqlTHaEPColZn0UlpxOxNeAKjkTrCUIuSJfOcnS8BwHKLgxq%2Bzw&X-Amz-Signature=6a5878defc42267edda19cecf883b070f9c0a4973450d31dd7294f5cd549e74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJGUECU%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArgEo%2FkbShNl47PLpC%2BGCV7Ww78K8en3XbccKt35UqIAiA9lAbiuLfy7kPmWkTO9RVeBUFh9QpHJJC5eYvFcJ3UgyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQVL6DAKYvX6i6Z%2FKtwD1%2Bp5rfjmuy%2BAJK%2BV%2B9p89OSsamVjK3UAEKTJRcTGC4NN1AmSCPzXwOWh%2FTRbx9lPBgMX49PxpeDI%2BLmvIrROK9FAmDrgYXQ%2Bf9T4MAL5TbWCZ10SzoRqzd1K1hs0cgoiahPwkoxziqRHLJ5ZX5Sn7cLpBlSRbZfRJpdL0w01fFPnnj4W5ovGPmfYDjghBt1Zlm8K0DW%2Befm52VuEhgqIUrr7COOZgDoivbdS68%2FNwc6QS0jYxcNY8kZeFeua7qzPR5YTme975055e%2FK36j8cDN4PV9%2F8WNP7Ei6fGeRseiFUK%2BdE0Qlwd71O7fX2Eu%2FAzC5iCl%2FHUSQZ6KmQpn7oFyc29TnzqpFCnn7rGlQGsfyd64ILmhXMlNnL3PRFVCIVolfZVXy7jFkqYsOklZlmgxVZJmoKOy%2FHzErIgets6lFYZxCBNvfPomYnMi0qngWg4XLtkuE3pXFVwaV15p8wMKXOeu4RRKp7KnOmpinvumVW0rTDFeS8MVOaOdIaUDV7Y9sZ1S8A3zDnGj0POjFkFsyjN8%2F51zFKDcbxzf3smNfSproU9e6PA3e3XuLGlpjs3UaGp9JiaUqfk6EVbpXoH4nbKYsLSrgMn2GlwxNonjX9odS9LHEzCU9iY4Mw%2FvKexQY6pgGU9XY0jkf1Rd77TQMhiNARnzTzox3FK6pCy7o8B8vbvQC75PwsQL3oRfyCenIW1%2Fk9SaX6rcRgR2n3qWciT92QfdILx60IysqHqQ%2Fitt2x9xrfFfPJR2pWnCYTdIqGfx77TI1nzcXo3D%2FgyHwPSZh1UbCGskY84ZkfTDPijTmfeq%2Bb7zeNWjOyGdu3s%2FY05reRX6fS42hkbGWz1Nhx0z1ZY9U%2BSKze&X-Amz-Signature=94433f2f372d9e2b5ee8ac7b4e75da0474f8077cd21b33cfd899bb1fd0089192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRWQ6U6O%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPKLZpxp5mcNF1kw4H7PLgwt6ZJuIk3tNJlNw1KYvaQIhAIL88%2B908HMuK0UdNccC1Ub%2FCA5K3TV1BSwS3xe%2FfgpDKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqNyVN2Msr%2BvO0%2FY4q3APaau1IThONXubFimC3CfTDNqM2tX3d0uC0e3E0YviTMy9nLrMxoSeAwUIBZkg5JKnhwscBDGP4TzHZm5ZsNsQxrTkjbVehPqNqoMzjl8JWieWKT2jl2qp1Om6r7ICaOsZu6hCprLANThNzOPgawFvWEfBQxAat8AqHplkkBAnlE%2FY9T6HgGExddpU8jnrWAir3j3%2F3NQ8GurrI8iIu2Q3K6JIowhd4z5CyqXfk6v%2F61VX%2B%2F1tzMf7Qi358bU9p%2FZuidW3k64x8T1XIOYATrxcMNJ4jU9IYH1mSmiUI7HCxHOSMh%2FKvPfyjl74gCycmX7znX%2BC%2F9QfCnBoZozNyCE%2FbBsFDqk9AvjBwHTpCTg2HfakhwvAWzKFhNPI6owIMx49CrByWYfYuvrNEiZrxourZZCArN6O7cBxaJUMiHESantGDSqjmZHrAIKaBdf%2BkUKFUquzKJyCrXZlOLcl9WzJz%2BUiwAIUKebJflsfCG3QQF6NwGkn1oClt7Re%2B74o5zdIziEWp9rYvzRKJV%2Fw9tONs6ORF3JKq0jtOnCgaoDb%2BVsrWSB3At964tagn46cIr1AU5p9AShL1l2VNhrff1Ac8oAffg40fRERH%2BaIDQU39W1VBULhornhEfdznETCE857FBjqkAZKC%2Fk5Tg8DkCGwtMkQMXzssrJnnHUd6oLOF6WEI%2FIHvOD5jwXWHVPis6owQLQRlto5ZSk2WtXf95iHfywJ38ra6xBiF8NnFIyVf%2Fo22XuOq%2F%2BYdXHIoo%2BKoEOm9I6zgbZYHz08MV5frXDQuwljzzL%2F0paQMrULtabBmy7CAntqA749%2FzmTOmeZQ208fuoAHEjRVQmqgLcMzPd6KA%2Fsq%2BSsM9jvN&X-Amz-Signature=38aad2603e00b08c48c19e8a544ac6afdda13ff665f702843e01447bcdb13e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=f94372f30b3a8d6ad03122b210a2beb226f230c27f2b99d11c4e67c967f5247f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3H7PHE%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm2SEA0oC01NOmC4Wr6MA818yBZqyiyR%2FH7k6cS3mY%2FQIgKomVR4bN6I%2Ffo5JMLT90ADFpONbJM2xFE8ozBRlTVjkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FGxbizm5CcfGBySrcAzKAYs5KkjJkVTTH0sGL0XgVvtiw9Tu2V%2BjBAQ2%2BUxneD5nw3p2rk8MiKLMPDasdW42XwIcECVZWSBIZeQySwWQcqKyS%2BLaSdYn5n2ZDoJXP%2BmZEj8h06dbrTtuMq%2BkB57jpp3OaJrKf5pQN3RmO%2BUhixtMSd%2BYHZ1ej6llbzXVS6SAlg06qR8NAEUv7tEwzU199vE8ij5iCH8PlenG%2FiBW8TJYOv4XPIsfJ%2BPPlzywkZEVm1q0KPF5gOwa2Wi9gOr7018JEJalzYmN3eQ4OcPpHHtW0v8IxWT6J%2FcA6kkrSXKmUsoYYVVuh7zt30xtdOQtM2240IgA8EBB0s7LhDjmGaqNm4UuXMUWYHopK1QLlg8nJSrtkdfQn1okGQ%2B7GebvrvdEwDoR52rTwIxNNuaa3zg%2FasHPL3AFPoSya1VB8E%2BoQ0Mp53WhnoBtQmpxwLxfHFWE18yqodNeqIJLxXYETZmD5XhpeG6KhHedGuiilm0taOm6xgpWDIkmUz%2FqLGgN6nL7zdS%2F6RKraLi5rUd6vQqx26IOkcjquoI4jcta0g%2FN8ikBbb1ckh0E4Zh2hx2DoWDxJJrdWCBQZIyQyNjcpeqbAZj9PGmdV2odwmGVRsjwTEcUpoeOzd2fbMIbynsUGOqUB7kEU0Ca1y0%2FVRemLO34UL066nCBwoak19LevWJjuE%2BVk967UPEZlRGN5OkDYJGUWlI8%2BAhz1MI3WRcN%2FPmtd%2FJskLHRPJ%2B6U4LiYwWux64JGNDO80%2BA75Vy3B0s4ElTN1Kd5RYAnigWqAeKwSP%2Bd5cpY3j3P68y3ytDomtIaiRGBzFepXHo8g%2BEvxXpnvlC1syNSc%2FX9uX%2BNSxgPSGr65eSHZy7N&X-Amz-Signature=5bd507e60c9b35abc0b2e03c12fd41bc8f292e04f1ccaae4a063323dd6d8343b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IHBKCV%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMXJfO8HThLs3ZuX93VlQycqowI74G%2FECHt281vzJDYgIgfupgXSVKDDl3djaYimUwncbP4mwySCNSGN2AIvPk83QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwJWCBZPxgaRmpCkSrcAwVJxyVri%2FBwpJ6SG%2BJ6vdhu9E%2FVX2%2Fnja5s%2Bxqi%2B8MU%2Fp6%2BHJkHBSXUeZ3l5cAxxGLGkLK0epcfy5izY%2FZbiTvEUc9ge%2F%2BMbQy85T%2Bmir21%2Bklf4DKpFw6tv40oPVClsAxAT3zMfyzfmGsu8AE2NMAmk4N6eSRAEwaau8otZo1Ui75Ua0MkbVdEKCXuPkw5%2FCjvoOB6uGNPE0dHaBcXR%2FdOrYKvT0QjBpzYLm3K6UxqMo%2Bk%2BtwbhCsTZF2m58ZF17BfbdKzKJGgrR4fdb9Ef6C%2BV7AgE2B%2FJQTFlO%2B78vpc9yy7wA6PWFaLIW7jGr%2FN03N083UotCkVgI4DVceXiNMIj9bDT6MOMQZrpK2KaaN758kpNokVUZwYDAkrqgAtJoqgw2bZu398wBoP67%2Fn4S5KdbJZNJmrr9Iiz2tcAkeAyhqPlFHkmyzc9%2BPintY946McyMYTQae4d0VWhxwCXWKZViCai9FcUaHVIhknBtKQGivLDAZ08RCOjk%2FIewtDLd3ed%2B3Uhll%2BBeEcNKRc3eQa0ljBvAV3pvA1SWNS1rC1fbxu099djrHGUOk%2Bu%2FzENjWpyEybsvL6c%2BEtDmJqLJJDmYR8efh9Trvzcg4OmsDVwqFc3wFjXqjosBFoMOHynsUGOqUBI3B3Fr7mvwGs4NEOLRzj%2FGjB%2BBlyKh%2BTElQE5lZtDzll20wxsldP8Q2IPFRSibFFjUQFxI46KAHFKEudHGXScD0adCIIFL1tnnNpoTSrIm0ontGRngttbNTA44ETEaTBo6bB8r1KDbhPYY6o9Wjl3UjTMHDu1DP028BqyYvGD9N%2BFCALTg7JtU9zkqwCKRJk31mfSNuSCuc3MHtnyLlBoGW5pE4k&X-Amz-Signature=d3f52a667c3c53e3868656994e80eda7eb410e29f0ef7d09cc30bea2f2f77c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IHBKCV%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMXJfO8HThLs3ZuX93VlQycqowI74G%2FECHt281vzJDYgIgfupgXSVKDDl3djaYimUwncbP4mwySCNSGN2AIvPk83QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwJWCBZPxgaRmpCkSrcAwVJxyVri%2FBwpJ6SG%2BJ6vdhu9E%2FVX2%2Fnja5s%2Bxqi%2B8MU%2Fp6%2BHJkHBSXUeZ3l5cAxxGLGkLK0epcfy5izY%2FZbiTvEUc9ge%2F%2BMbQy85T%2Bmir21%2Bklf4DKpFw6tv40oPVClsAxAT3zMfyzfmGsu8AE2NMAmk4N6eSRAEwaau8otZo1Ui75Ua0MkbVdEKCXuPkw5%2FCjvoOB6uGNPE0dHaBcXR%2FdOrYKvT0QjBpzYLm3K6UxqMo%2Bk%2BtwbhCsTZF2m58ZF17BfbdKzKJGgrR4fdb9Ef6C%2BV7AgE2B%2FJQTFlO%2B78vpc9yy7wA6PWFaLIW7jGr%2FN03N083UotCkVgI4DVceXiNMIj9bDT6MOMQZrpK2KaaN758kpNokVUZwYDAkrqgAtJoqgw2bZu398wBoP67%2Fn4S5KdbJZNJmrr9Iiz2tcAkeAyhqPlFHkmyzc9%2BPintY946McyMYTQae4d0VWhxwCXWKZViCai9FcUaHVIhknBtKQGivLDAZ08RCOjk%2FIewtDLd3ed%2B3Uhll%2BBeEcNKRc3eQa0ljBvAV3pvA1SWNS1rC1fbxu099djrHGUOk%2Bu%2FzENjWpyEybsvL6c%2BEtDmJqLJJDmYR8efh9Trvzcg4OmsDVwqFc3wFjXqjosBFoMOHynsUGOqUBI3B3Fr7mvwGs4NEOLRzj%2FGjB%2BBlyKh%2BTElQE5lZtDzll20wxsldP8Q2IPFRSibFFjUQFxI46KAHFKEudHGXScD0adCIIFL1tnnNpoTSrIm0ontGRngttbNTA44ETEaTBo6bB8r1KDbhPYY6o9Wjl3UjTMHDu1DP028BqyYvGD9N%2BFCALTg7JtU9zkqwCKRJk31mfSNuSCuc3MHtnyLlBoGW5pE4k&X-Amz-Signature=424a9f2dfa2a18bb7792459133b54ed2a12b35da5e356e5b90cb0650c546cf21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IHBKCV%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMXJfO8HThLs3ZuX93VlQycqowI74G%2FECHt281vzJDYgIgfupgXSVKDDl3djaYimUwncbP4mwySCNSGN2AIvPk83QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwJWCBZPxgaRmpCkSrcAwVJxyVri%2FBwpJ6SG%2BJ6vdhu9E%2FVX2%2Fnja5s%2Bxqi%2B8MU%2Fp6%2BHJkHBSXUeZ3l5cAxxGLGkLK0epcfy5izY%2FZbiTvEUc9ge%2F%2BMbQy85T%2Bmir21%2Bklf4DKpFw6tv40oPVClsAxAT3zMfyzfmGsu8AE2NMAmk4N6eSRAEwaau8otZo1Ui75Ua0MkbVdEKCXuPkw5%2FCjvoOB6uGNPE0dHaBcXR%2FdOrYKvT0QjBpzYLm3K6UxqMo%2Bk%2BtwbhCsTZF2m58ZF17BfbdKzKJGgrR4fdb9Ef6C%2BV7AgE2B%2FJQTFlO%2B78vpc9yy7wA6PWFaLIW7jGr%2FN03N083UotCkVgI4DVceXiNMIj9bDT6MOMQZrpK2KaaN758kpNokVUZwYDAkrqgAtJoqgw2bZu398wBoP67%2Fn4S5KdbJZNJmrr9Iiz2tcAkeAyhqPlFHkmyzc9%2BPintY946McyMYTQae4d0VWhxwCXWKZViCai9FcUaHVIhknBtKQGivLDAZ08RCOjk%2FIewtDLd3ed%2B3Uhll%2BBeEcNKRc3eQa0ljBvAV3pvA1SWNS1rC1fbxu099djrHGUOk%2Bu%2FzENjWpyEybsvL6c%2BEtDmJqLJJDmYR8efh9Trvzcg4OmsDVwqFc3wFjXqjosBFoMOHynsUGOqUBI3B3Fr7mvwGs4NEOLRzj%2FGjB%2BBlyKh%2BTElQE5lZtDzll20wxsldP8Q2IPFRSibFFjUQFxI46KAHFKEudHGXScD0adCIIFL1tnnNpoTSrIm0ontGRngttbNTA44ETEaTBo6bB8r1KDbhPYY6o9Wjl3UjTMHDu1DP028BqyYvGD9N%2BFCALTg7JtU9zkqwCKRJk31mfSNuSCuc3MHtnyLlBoGW5pE4k&X-Amz-Signature=ae6cb90069a77e801e4f0a0a80929890659993af3e3bc954c9a8f0ad21c2b2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IHBKCV%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMXJfO8HThLs3ZuX93VlQycqowI74G%2FECHt281vzJDYgIgfupgXSVKDDl3djaYimUwncbP4mwySCNSGN2AIvPk83QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwJWCBZPxgaRmpCkSrcAwVJxyVri%2FBwpJ6SG%2BJ6vdhu9E%2FVX2%2Fnja5s%2Bxqi%2B8MU%2Fp6%2BHJkHBSXUeZ3l5cAxxGLGkLK0epcfy5izY%2FZbiTvEUc9ge%2F%2BMbQy85T%2Bmir21%2Bklf4DKpFw6tv40oPVClsAxAT3zMfyzfmGsu8AE2NMAmk4N6eSRAEwaau8otZo1Ui75Ua0MkbVdEKCXuPkw5%2FCjvoOB6uGNPE0dHaBcXR%2FdOrYKvT0QjBpzYLm3K6UxqMo%2Bk%2BtwbhCsTZF2m58ZF17BfbdKzKJGgrR4fdb9Ef6C%2BV7AgE2B%2FJQTFlO%2B78vpc9yy7wA6PWFaLIW7jGr%2FN03N083UotCkVgI4DVceXiNMIj9bDT6MOMQZrpK2KaaN758kpNokVUZwYDAkrqgAtJoqgw2bZu398wBoP67%2Fn4S5KdbJZNJmrr9Iiz2tcAkeAyhqPlFHkmyzc9%2BPintY946McyMYTQae4d0VWhxwCXWKZViCai9FcUaHVIhknBtKQGivLDAZ08RCOjk%2FIewtDLd3ed%2B3Uhll%2BBeEcNKRc3eQa0ljBvAV3pvA1SWNS1rC1fbxu099djrHGUOk%2Bu%2FzENjWpyEybsvL6c%2BEtDmJqLJJDmYR8efh9Trvzcg4OmsDVwqFc3wFjXqjosBFoMOHynsUGOqUBI3B3Fr7mvwGs4NEOLRzj%2FGjB%2BBlyKh%2BTElQE5lZtDzll20wxsldP8Q2IPFRSibFFjUQFxI46KAHFKEudHGXScD0adCIIFL1tnnNpoTSrIm0ontGRngttbNTA44ETEaTBo6bB8r1KDbhPYY6o9Wjl3UjTMHDu1DP028BqyYvGD9N%2BFCALTg7JtU9zkqwCKRJk31mfSNuSCuc3MHtnyLlBoGW5pE4k&X-Amz-Signature=367a262075fb9a0919644f84b7bc6c4e72b6793d8b546c13024ee65ebda8b073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PFNAX5F%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfqnV31ifKDc%2BbAgJP152ZiIf1KwVtjMteAEKdincfYAIhAOt9MCE%2FLPHc3RsfVhLO7FS6%2FipBs9S%2FzQSqepiTuyZAKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYts6MNyUH2T28XCcq3APbBIL9mGmfmALKpNQrF%2FlqRyfD44FxPTefeDAyQoEddEEGwlJfSC8NSRzfD%2B17BEDFfT%2FtpQF6tO1%2F86bEhCdcKd%2BpVphHEGaOYotjzFNaA2JZkv3ykKdGI4ZWScyWDerO%2Bw%2Fz%2BUUDqiV488CRAau1KNGtNWhlVqlyW9C1wPFUvhvPRCqeHSB7tNFPctu%2FY%2FDOvWx0SEJS2J7uzNotMMr8AclaRPw48h6ytYHHGu7v1aM%2BGpmYbhrutmXFh%2BF3y3V0bZhoLf4dFyrCyFCEXNNDx10x1LCn53Rm%2BA3kYqpBx54okcl5RQBFWJPkas5tjb87UCS2D37MGpKRqR7uPcAkdFf3rVT0LBReQBwg0yHdjDVoJ4MuwtPeS7ETjg2UsMxr%2FDRIMrct%2FIaVjdP6OHgouTQuCallDWifxey3hnrbF7%2FNzhZwBpgVx9D5Uj0aNHk3NZsGc1TN%2BUpz%2F6wpu9jSW0iprYjgQeafQ0GZtlltXbRZNjzyHOpQpJmX6MgMrIakdpcYcoppEc6dNHlaofstrnNLUgkkuk6uiCOyeBDaEF2Gq6L8iVvQGf7cTCFheloyOAKcjdPzFwcsIwoOZOSV5hJPe0LgMwo3JOmb1nGm0getQUbA1ooh%2B%2FMDIzCr8p7FBjqkAfs31G43VOMgFiCl3spQNRreveDcr6d8gZkOixvXwkHc8w6UYp8UF83RYxB3HSO3xrObo7hGKQgCx07%2BI1TVJmIMXvWr6AFjd9cHpUENTxFaumrDrnPhCDNTaAaTYY%2BLQPpCdLb5N4ieCcShGGGhlXt61L8GDvKF7%2BloOc5sud4MkAeSTJimrsJK0bznORRxF6JwxN1TYN8vWUltsqGMGRiMKv3k&X-Amz-Signature=b9e7172b125268c248bac220844935a539349b20dadd46c5f03cadb7091873f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IHBKCV%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMXJfO8HThLs3ZuX93VlQycqowI74G%2FECHt281vzJDYgIgfupgXSVKDDl3djaYimUwncbP4mwySCNSGN2AIvPk83QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwJWCBZPxgaRmpCkSrcAwVJxyVri%2FBwpJ6SG%2BJ6vdhu9E%2FVX2%2Fnja5s%2Bxqi%2B8MU%2Fp6%2BHJkHBSXUeZ3l5cAxxGLGkLK0epcfy5izY%2FZbiTvEUc9ge%2F%2BMbQy85T%2Bmir21%2Bklf4DKpFw6tv40oPVClsAxAT3zMfyzfmGsu8AE2NMAmk4N6eSRAEwaau8otZo1Ui75Ua0MkbVdEKCXuPkw5%2FCjvoOB6uGNPE0dHaBcXR%2FdOrYKvT0QjBpzYLm3K6UxqMo%2Bk%2BtwbhCsTZF2m58ZF17BfbdKzKJGgrR4fdb9Ef6C%2BV7AgE2B%2FJQTFlO%2B78vpc9yy7wA6PWFaLIW7jGr%2FN03N083UotCkVgI4DVceXiNMIj9bDT6MOMQZrpK2KaaN758kpNokVUZwYDAkrqgAtJoqgw2bZu398wBoP67%2Fn4S5KdbJZNJmrr9Iiz2tcAkeAyhqPlFHkmyzc9%2BPintY946McyMYTQae4d0VWhxwCXWKZViCai9FcUaHVIhknBtKQGivLDAZ08RCOjk%2FIewtDLd3ed%2B3Uhll%2BBeEcNKRc3eQa0ljBvAV3pvA1SWNS1rC1fbxu099djrHGUOk%2Bu%2FzENjWpyEybsvL6c%2BEtDmJqLJJDmYR8efh9Trvzcg4OmsDVwqFc3wFjXqjosBFoMOHynsUGOqUBI3B3Fr7mvwGs4NEOLRzj%2FGjB%2BBlyKh%2BTElQE5lZtDzll20wxsldP8Q2IPFRSibFFjUQFxI46KAHFKEudHGXScD0adCIIFL1tnnNpoTSrIm0ontGRngttbNTA44ETEaTBo6bB8r1KDbhPYY6o9Wjl3UjTMHDu1DP028BqyYvGD9N%2BFCALTg7JtU9zkqwCKRJk31mfSNuSCuc3MHtnyLlBoGW5pE4k&X-Amz-Signature=2346d304b1705688b458c170b0116483ac4544f150ff3fb631a9bcdf28aca2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IHBKCV%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMXJfO8HThLs3ZuX93VlQycqowI74G%2FECHt281vzJDYgIgfupgXSVKDDl3djaYimUwncbP4mwySCNSGN2AIvPk83QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwJWCBZPxgaRmpCkSrcAwVJxyVri%2FBwpJ6SG%2BJ6vdhu9E%2FVX2%2Fnja5s%2Bxqi%2B8MU%2Fp6%2BHJkHBSXUeZ3l5cAxxGLGkLK0epcfy5izY%2FZbiTvEUc9ge%2F%2BMbQy85T%2Bmir21%2Bklf4DKpFw6tv40oPVClsAxAT3zMfyzfmGsu8AE2NMAmk4N6eSRAEwaau8otZo1Ui75Ua0MkbVdEKCXuPkw5%2FCjvoOB6uGNPE0dHaBcXR%2FdOrYKvT0QjBpzYLm3K6UxqMo%2Bk%2BtwbhCsTZF2m58ZF17BfbdKzKJGgrR4fdb9Ef6C%2BV7AgE2B%2FJQTFlO%2B78vpc9yy7wA6PWFaLIW7jGr%2FN03N083UotCkVgI4DVceXiNMIj9bDT6MOMQZrpK2KaaN758kpNokVUZwYDAkrqgAtJoqgw2bZu398wBoP67%2Fn4S5KdbJZNJmrr9Iiz2tcAkeAyhqPlFHkmyzc9%2BPintY946McyMYTQae4d0VWhxwCXWKZViCai9FcUaHVIhknBtKQGivLDAZ08RCOjk%2FIewtDLd3ed%2B3Uhll%2BBeEcNKRc3eQa0ljBvAV3pvA1SWNS1rC1fbxu099djrHGUOk%2Bu%2FzENjWpyEybsvL6c%2BEtDmJqLJJDmYR8efh9Trvzcg4OmsDVwqFc3wFjXqjosBFoMOHynsUGOqUBI3B3Fr7mvwGs4NEOLRzj%2FGjB%2BBlyKh%2BTElQE5lZtDzll20wxsldP8Q2IPFRSibFFjUQFxI46KAHFKEudHGXScD0adCIIFL1tnnNpoTSrIm0ontGRngttbNTA44ETEaTBo6bB8r1KDbhPYY6o9Wjl3UjTMHDu1DP028BqyYvGD9N%2BFCALTg7JtU9zkqwCKRJk31mfSNuSCuc3MHtnyLlBoGW5pE4k&X-Amz-Signature=4aa8b83315ed48f7e7a13cdfe627268b5664a70aadcb58db7699c7303d86195e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IHBKCV%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMXJfO8HThLs3ZuX93VlQycqowI74G%2FECHt281vzJDYgIgfupgXSVKDDl3djaYimUwncbP4mwySCNSGN2AIvPk83QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwJWCBZPxgaRmpCkSrcAwVJxyVri%2FBwpJ6SG%2BJ6vdhu9E%2FVX2%2Fnja5s%2Bxqi%2B8MU%2Fp6%2BHJkHBSXUeZ3l5cAxxGLGkLK0epcfy5izY%2FZbiTvEUc9ge%2F%2BMbQy85T%2Bmir21%2Bklf4DKpFw6tv40oPVClsAxAT3zMfyzfmGsu8AE2NMAmk4N6eSRAEwaau8otZo1Ui75Ua0MkbVdEKCXuPkw5%2FCjvoOB6uGNPE0dHaBcXR%2FdOrYKvT0QjBpzYLm3K6UxqMo%2Bk%2BtwbhCsTZF2m58ZF17BfbdKzKJGgrR4fdb9Ef6C%2BV7AgE2B%2FJQTFlO%2B78vpc9yy7wA6PWFaLIW7jGr%2FN03N083UotCkVgI4DVceXiNMIj9bDT6MOMQZrpK2KaaN758kpNokVUZwYDAkrqgAtJoqgw2bZu398wBoP67%2Fn4S5KdbJZNJmrr9Iiz2tcAkeAyhqPlFHkmyzc9%2BPintY946McyMYTQae4d0VWhxwCXWKZViCai9FcUaHVIhknBtKQGivLDAZ08RCOjk%2FIewtDLd3ed%2B3Uhll%2BBeEcNKRc3eQa0ljBvAV3pvA1SWNS1rC1fbxu099djrHGUOk%2Bu%2FzENjWpyEybsvL6c%2BEtDmJqLJJDmYR8efh9Trvzcg4OmsDVwqFc3wFjXqjosBFoMOHynsUGOqUBI3B3Fr7mvwGs4NEOLRzj%2FGjB%2BBlyKh%2BTElQE5lZtDzll20wxsldP8Q2IPFRSibFFjUQFxI46KAHFKEudHGXScD0adCIIFL1tnnNpoTSrIm0ontGRngttbNTA44ETEaTBo6bB8r1KDbhPYY6o9Wjl3UjTMHDu1DP028BqyYvGD9N%2BFCALTg7JtU9zkqwCKRJk31mfSNuSCuc3MHtnyLlBoGW5pE4k&X-Amz-Signature=ae6cb90069a77e801e4f0a0a80929890659993af3e3bc954c9a8f0ad21c2b2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IHBKCV%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMXJfO8HThLs3ZuX93VlQycqowI74G%2FECHt281vzJDYgIgfupgXSVKDDl3djaYimUwncbP4mwySCNSGN2AIvPk83QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwJWCBZPxgaRmpCkSrcAwVJxyVri%2FBwpJ6SG%2BJ6vdhu9E%2FVX2%2Fnja5s%2Bxqi%2B8MU%2Fp6%2BHJkHBSXUeZ3l5cAxxGLGkLK0epcfy5izY%2FZbiTvEUc9ge%2F%2BMbQy85T%2Bmir21%2Bklf4DKpFw6tv40oPVClsAxAT3zMfyzfmGsu8AE2NMAmk4N6eSRAEwaau8otZo1Ui75Ua0MkbVdEKCXuPkw5%2FCjvoOB6uGNPE0dHaBcXR%2FdOrYKvT0QjBpzYLm3K6UxqMo%2Bk%2BtwbhCsTZF2m58ZF17BfbdKzKJGgrR4fdb9Ef6C%2BV7AgE2B%2FJQTFlO%2B78vpc9yy7wA6PWFaLIW7jGr%2FN03N083UotCkVgI4DVceXiNMIj9bDT6MOMQZrpK2KaaN758kpNokVUZwYDAkrqgAtJoqgw2bZu398wBoP67%2Fn4S5KdbJZNJmrr9Iiz2tcAkeAyhqPlFHkmyzc9%2BPintY946McyMYTQae4d0VWhxwCXWKZViCai9FcUaHVIhknBtKQGivLDAZ08RCOjk%2FIewtDLd3ed%2B3Uhll%2BBeEcNKRc3eQa0ljBvAV3pvA1SWNS1rC1fbxu099djrHGUOk%2Bu%2FzENjWpyEybsvL6c%2BEtDmJqLJJDmYR8efh9Trvzcg4OmsDVwqFc3wFjXqjosBFoMOHynsUGOqUBI3B3Fr7mvwGs4NEOLRzj%2FGjB%2BBlyKh%2BTElQE5lZtDzll20wxsldP8Q2IPFRSibFFjUQFxI46KAHFKEudHGXScD0adCIIFL1tnnNpoTSrIm0ontGRngttbNTA44ETEaTBo6bB8r1KDbhPYY6o9Wjl3UjTMHDu1DP028BqyYvGD9N%2BFCALTg7JtU9zkqwCKRJk31mfSNuSCuc3MHtnyLlBoGW5pE4k&X-Amz-Signature=94435efec0cf18e93da49fd0bfac6e1cfb32cb159c34bb1f8e6da43354b5744f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IHBKCV%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMXJfO8HThLs3ZuX93VlQycqowI74G%2FECHt281vzJDYgIgfupgXSVKDDl3djaYimUwncbP4mwySCNSGN2AIvPk83QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwJWCBZPxgaRmpCkSrcAwVJxyVri%2FBwpJ6SG%2BJ6vdhu9E%2FVX2%2Fnja5s%2Bxqi%2B8MU%2Fp6%2BHJkHBSXUeZ3l5cAxxGLGkLK0epcfy5izY%2FZbiTvEUc9ge%2F%2BMbQy85T%2Bmir21%2Bklf4DKpFw6tv40oPVClsAxAT3zMfyzfmGsu8AE2NMAmk4N6eSRAEwaau8otZo1Ui75Ua0MkbVdEKCXuPkw5%2FCjvoOB6uGNPE0dHaBcXR%2FdOrYKvT0QjBpzYLm3K6UxqMo%2Bk%2BtwbhCsTZF2m58ZF17BfbdKzKJGgrR4fdb9Ef6C%2BV7AgE2B%2FJQTFlO%2B78vpc9yy7wA6PWFaLIW7jGr%2FN03N083UotCkVgI4DVceXiNMIj9bDT6MOMQZrpK2KaaN758kpNokVUZwYDAkrqgAtJoqgw2bZu398wBoP67%2Fn4S5KdbJZNJmrr9Iiz2tcAkeAyhqPlFHkmyzc9%2BPintY946McyMYTQae4d0VWhxwCXWKZViCai9FcUaHVIhknBtKQGivLDAZ08RCOjk%2FIewtDLd3ed%2B3Uhll%2BBeEcNKRc3eQa0ljBvAV3pvA1SWNS1rC1fbxu099djrHGUOk%2Bu%2FzENjWpyEybsvL6c%2BEtDmJqLJJDmYR8efh9Trvzcg4OmsDVwqFc3wFjXqjosBFoMOHynsUGOqUBI3B3Fr7mvwGs4NEOLRzj%2FGjB%2BBlyKh%2BTElQE5lZtDzll20wxsldP8Q2IPFRSibFFjUQFxI46KAHFKEudHGXScD0adCIIFL1tnnNpoTSrIm0ontGRngttbNTA44ETEaTBo6bB8r1KDbhPYY6o9Wjl3UjTMHDu1DP028BqyYvGD9N%2BFCALTg7JtU9zkqwCKRJk31mfSNuSCuc3MHtnyLlBoGW5pE4k&X-Amz-Signature=2de05313c38802c509d781b3bba3ff1de482c334ecb0b3ee4ae398c65eb98bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IHBKCV%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMXJfO8HThLs3ZuX93VlQycqowI74G%2FECHt281vzJDYgIgfupgXSVKDDl3djaYimUwncbP4mwySCNSGN2AIvPk83QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwJWCBZPxgaRmpCkSrcAwVJxyVri%2FBwpJ6SG%2BJ6vdhu9E%2FVX2%2Fnja5s%2Bxqi%2B8MU%2Fp6%2BHJkHBSXUeZ3l5cAxxGLGkLK0epcfy5izY%2FZbiTvEUc9ge%2F%2BMbQy85T%2Bmir21%2Bklf4DKpFw6tv40oPVClsAxAT3zMfyzfmGsu8AE2NMAmk4N6eSRAEwaau8otZo1Ui75Ua0MkbVdEKCXuPkw5%2FCjvoOB6uGNPE0dHaBcXR%2FdOrYKvT0QjBpzYLm3K6UxqMo%2Bk%2BtwbhCsTZF2m58ZF17BfbdKzKJGgrR4fdb9Ef6C%2BV7AgE2B%2FJQTFlO%2B78vpc9yy7wA6PWFaLIW7jGr%2FN03N083UotCkVgI4DVceXiNMIj9bDT6MOMQZrpK2KaaN758kpNokVUZwYDAkrqgAtJoqgw2bZu398wBoP67%2Fn4S5KdbJZNJmrr9Iiz2tcAkeAyhqPlFHkmyzc9%2BPintY946McyMYTQae4d0VWhxwCXWKZViCai9FcUaHVIhknBtKQGivLDAZ08RCOjk%2FIewtDLd3ed%2B3Uhll%2BBeEcNKRc3eQa0ljBvAV3pvA1SWNS1rC1fbxu099djrHGUOk%2Bu%2FzENjWpyEybsvL6c%2BEtDmJqLJJDmYR8efh9Trvzcg4OmsDVwqFc3wFjXqjosBFoMOHynsUGOqUBI3B3Fr7mvwGs4NEOLRzj%2FGjB%2BBlyKh%2BTElQE5lZtDzll20wxsldP8Q2IPFRSibFFjUQFxI46KAHFKEudHGXScD0adCIIFL1tnnNpoTSrIm0ontGRngttbNTA44ETEaTBo6bB8r1KDbhPYY6o9Wjl3UjTMHDu1DP028BqyYvGD9N%2BFCALTg7JtU9zkqwCKRJk31mfSNuSCuc3MHtnyLlBoGW5pE4k&X-Amz-Signature=43be61ac8ba9b234e3fd657dfd1acd97fe6ed1d6b9b77275c36bc4f065af9e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


