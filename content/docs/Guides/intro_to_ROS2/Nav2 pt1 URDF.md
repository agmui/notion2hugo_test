---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-16T13:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-16T13:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=1bc8130fbecfa3ef184f2f37f8b52a770041c1f875ce4c6fde8c257f08385e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=3e6e732adaf1c163d6587a09668f463de9faae9f1257dd3e3203bf084bef5ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=05cec23fcfa394574bc5d5b537e99f251761fe3ad4b2f886935f8269f92da5b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=1605a7e57b4bac19b3d3f1fb5dfffe1a35178fbc096063f6f5bbd51aee9a7bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=09092422f722347d7a8b235465699d588f388222508faeb305add77b21366b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=695c857a1882cf98224f34141c29451081398fff9b1fea7a70af962dfab479a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=d71778dd646f5a06a2bc7be9b880a942da41bdcd5be0498c0c5ab3282425c560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=c9c0879b0e18ac719441d1bb6f3020df73bca945f30b6de1fb75ea0c8e77c4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=a243073c202a19823ce4a5f6b335cbf97bfa83004934713c15d0540b807593b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=83c6cd3eacab9348b34106a84c319ec07f34f12b3539472001e1f308fe44c756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPVMRQEK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGbgaou3Iiws9rR0b%2BnhowYOL4WpQf4VvCD3iLpe%2F3eBAiBg6D833k84OT39%2FJGg2u9f9HHS41UUB6x8yflbSNXRxir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMp92YZO%2BzAJ27XySGKtwDvT7XlTlOAwzZuhWe6Ssc4S32MWL9WpLhbM057uqgsVKkgV4OO5rM1fO0EEzVP2s3zkoumTMoxn1yyeYIx5yxsF8erNhk9TWTJbfLQTRWWIhec3ANeSnMm1oAfkvCecT6l6QK42wGjklGjXqpibvRsCQ7NWxxy%2BReOWp7mG659RPRtmop7mJke4NiKEm8iJx%2BmVZyQl2naGIp%2Bd73I53ZaUxrwSuApSAHMuiHkIZko4JVETzsmjCFqvKZRdec%2BjanRQ5WJlYB4GSXdOUY8EpUgu%2BIzzScNpBB25%2BJG7W%2BECvzEfYDHp%2FbssHKVszUDIt7UmieYEt4uuOfTjDDaKi5aJrP8LcDNS6T9YKk35P9gvRIyIpYRC9Z0t3RQljY1ZiqQmCGeGMdX7cuMGLqhPZs%2FyxtSJSH6Pn0wHUTqhi5J6qoz02Wyt4YO%2FY4uKdX%2Fhsnfm5tIUDh0Fh1qGdiLTGzA9RLF04aMfjWrR%2BWQYeI70qSuObfSSM0m%2FLKN%2FYn3KIIZeCm3cRYV6IhimDoYG%2BwjLV6UHeMtI9YOa53dNOw40lPB6H6n9j6Tuybksa8YYoa%2FH2qiAiTGf0CytsQ0oNNmItUMH8IByz27pkzo4aZ%2FRtT%2BHtjO3JsL7wn8dswyZyCxQY6pgHw64679zprV%2BT4%2FQX%2BJ7BMY5FxCXzNE1yPI8GbA%2FHlH4k9sfa4uJbNt70a2%2BpLWt0qFVIv36vDdOOP9r8lwlfV34O3Zc%2Fj4hebHDWjvoafwwGwO92bvEPH9FGmsGMEVaufDriMWEzLAkHUKXbO%2BA9enbtV%2BV5%2BMXbLDzf7uMdc64c60Goulw8La6gaN1qpzLn4ewOHjVI9k66ztpaK9xWpZD9QzFth&X-Amz-Signature=08f0653d2bdf27fd9780ec1e0ac3d5b473d2bea5046d8411da34050d54e61f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWY7MXN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCZpQAZLqSx%2F1dwLPOlyB4fYP5SuKChQBzdB6bbxyjfrAIgKA780qofBQDt%2FmAznrwMjbPyAQFA8NgUizOjzkTEr%2F0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCQ%2FFwp4tNfWfNbGYSrcA68ueEuwPBSZ7%2F9H7j%2FEJvKreGMsTJgLqNwd%2B77Ud%2BPe2%2BWqlxvyhblswERzdjQFMNcud%2F785Iu6k2vzVsXywjQq0SaRAem%2BHSjBJnZLVa9PFzs9O6qLoNMCjEZ7XzOZKG2VaHDa5SBOTiyjvkp0oXOlyrXeBl0qN3%2BL99yxG7fL7%2BxlQylMpn8rrpwOu6McM3pjUBxkPGPPcoVPhAWV6Lfg9lSSJZRi7QuRNvYm5WC9tS5Ixkuphl2TzDS2dagZ9ltBjslbJP8yc4hsBezTFWcCZT5k2rPn2jgR3UqQ8ASzO1oyvCo4M5OyfB9xo%2BLjz8W7%2F83%2F0yJwS%2B9MQe0pqOr9VXHMjBWvCaf7VsMh2O8SLENY5EQHji2Mx5LlhuKirjnQDiSp4xZw2L3odekhLoNHUKwGXTumWpD0qJn7DoEL6KxM%2BGyE8I4Od%2F1QksWtA7hVIMpn9acAtUDARyd1zjPEEXfFmmZ%2FPaEsdi%2FPJvbmyWgx%2FeeMRtltwp3GMKUa1%2BqL2jDdLa%2FtgYkG2YLrN2%2FNXAaXd0HtbyLReLYx0xYTjN3SbQdP8uCzfeA%2F8YicKOWgaD1Cu0qeSf5Utzh%2Bdr5o%2B3OYhnRzNV6lwtjORmgJJ6diEbDGtY2sHcM0MNiWgsUGOqUB7MyGxMpzQBMfF53Tz1Z4omE9huJjS0D2L3BQ%2F6T%2FDMyFbz6QZ%2BOOQf4XM8dJ1Lue7R5aKlyAZHIjyr0QXbNGzofKloFkrhKIj8SK1nwphgIegC7D3ZSLXju6lE9%2FMeo1uQm8OxbHiThsjmR%2BC79vcZTwu4JUPqEi8IhbAZzZJW5VR%2FO3kYiNYmM2ApvGiE4yTBIfWPv%2FecLXMo5rRL8nwZD4Xtqp&X-Amz-Signature=3db86058844c620d313dce2723c7024c8b5b71be0f5c918ec92d2ed30a1a2208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG65CUSP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T175002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFq1PsIs7F78bofmUdeV%2B%2BP5d3ugGSKa0jeKMEqZeaGZAiA0QwMF5Soq6%2FErz97TmWVFz3dG%2Fr1rDSuYZ2z57M95SCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMp0LzFfdEfUTZeTYbKtwDkJKlBN67uaIK8mwRVa2f9Lxtbx1yRzaJY3UflQf%2FB5W8FsBemzbSeR772qGqNelGV%2BoaWyZIIbh9pLdTsv9tZGziYePrX7FEKwQoRYVde3bA1HZvmt3um3nAIH8W6KJRMLkxmBhBTBCpT0QR9JQPEsttyPH0DIdrQfG6ArTgQ51fmLEO%2Bm%2BAnF2x3d5%2BgFGq%2BRvlmD9VXefbpjU0DpMzpUHMW6DXl5CB35y9Mlm0dQLIoXouoiAaHPH%2BkaJYjM7Dt1IvN1GU425uJ37VjF5VB0Wl8yI%2BAfV7yVOyK4xKuDqM3c1Zhy4ut%2BLP9LtHEuYTfBnVAmpY9p0SMsSSfxcc%2FRBJZdc676LWNDHvH3R0XxHi2sIBhbXTtu86p1WMgYKjQBy6BFvxlB0f2ozMNZrDddKdcu%2FfgG7uJmitgJK3YSjICh8QgvdCHejd1LEOl0tlTURqRIef39Jh%2FmXePuj%2Fj5EpnHowLI9HsktqFoSrTSU8ju3LLGV5HBhUtG%2Bv%2FtJXuzfEFS%2BpasvFdxcGdvO62efkAqT84xLf%2F8KueC7N6qQ6cJqRn9NnfkbIp%2FoswWR6iAuOvL78bthefCmCwTrZE0g%2B2s9mtwMmvx77lsJhux4b5CuAEebUNPUKcKQw5puCxQY6pgE%2Ff6dDCG22mxg1kDhxw%2B8W4I3RXTSv66T313glSNShFGG%2Fx2cnc%2B8DlH%2BvagfUhb0jj0EqJPpniWvdh%2BJsz1c76n7G03TgvjLPFRVcRLWz63C3YnriVIHVXJBQLQIf3Mljd32lCiYSO9chuuWoECYpHV0Ro6J0dfrQT5bGmPvAncJwAeJBCdRvCVD6PMPrDgG0w5RoqaImUfitobUdzXjLSjF0R%2FIS&X-Amz-Signature=09c63bf0c1d43ce86af3c8f31f5adc6ee20b1461e3281f54050e3ef7e4ef7d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=c0c4f2f12311da2cd5076042ca7fec420c610e2fe80836d1eedd6e422bc2dcfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X4IBBJ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T175003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCrPuVBQ9yH1ZnR%2BK60F1ITL0pfaNbz%2BugXfuUYVrRfGgIhALGigjs3I%2FRbtE76IvUSlhv8yvDLgIGMLoF5lu0E0C7dKv8DCHcQABoMNjM3NDIzMTgzODA1IgzfLcdf49p2hupOR%2BAq3ANrMUeQs7usGH46axHYnrIUuxaJKp1E%2FWMGkdxPOUVrn%2FFoTdBnw30nY%2BoOudR4EQxv3AFfXBWdAS0Eh2ASLgfm3VmWMA0epxgsJ09A1A8LRFYL3V1JKla8FsH4D6FGtRdC7YfdEWF9kx0cjTctsn8ttMWgKVki5aFe7HY8hCx1qE79I4BGOOUyiqVwOKDw4gmB5%2Bb4m54gO9bAJa%2BkZYyuHdfKuJJ44i1HkcaqZmsSHUmQQ5cGQa0tVI6IbhMHWxw4CpjGrOOGICKA9IGbwDIduaOK1doHTXXFmFBEABuDIxj7Xa9ctkMvVexa2coNAdylfSD%2B1bTCOw9MSlsnOoAh3tDQ%2FDp8%2F4BEakMj%2FODBvxwgoc5npYnFGcnEEJL%2BfHjvsZLmEob0PW1d3CUWBLhqGLZFCDGdcdue3ZkpijpfhqKsGafn4o4lyUxhLM8f5PN1nW6rLSJMPWrBGz1JC%2BWQZVAP9tzYhJYqC9%2FAH7GfnejDhKz6h9exADq%2BVxo2W5%2BEktvfz0KwDQ%2Fza18OZFfCc%2FsyNGgO%2BjIjgRqNfEukFr4jXv%2FDOyjUN766sBwYTYA%2Fkyj3TnQqXluw6hW%2BN6hKudenfq1Uyop0H4yuDa6vFR57xNBmfCllAujz2jDlm4LFBjqkAcjdRqpsiCAy2Zrd9yV6ZTeUDmeqiQ9exCqYxU4jkjmrWppHPYQldP2d0a80X1EetFWvgqQQqhK79ikcE2kw%2F%2FoOxP6xUYMfs9LPBK4Q0tWbHcNUpmqKB6JMAV5Pg7UMm5ZxeiO5jFNUFJXKeqcHVxlVpsj6EwwmoXy0llsnENB8X0RixJW1RZa9oAQ4OTvMQ21Yf7%2BVVP4Y%2FiHbRNPOJhqm9RKC&X-Amz-Signature=567eb2bd24f16130aa334431b8a742bb891df76e68d30f8a9a0562283665e2fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=b289deeffd28517d96882a160b57c298958d9ed9c2b0646f53de353e9d1b34ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM36NIIF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T175005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGrYRGhGng3Sf8ONpUrHCQ4AGZfxpiIMWRgmCKSsklf2AiEA1BXozGeAs4Hy8WERdeVxL2qHKX%2FWc4JUI1ElfvTtDfcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIeHVqraYYmn84XbJSrcA51vyXpmtk7B76xXKfMLCKQyAt28p3V0a24mF%2FbAhDbbspG2BXfqTkIZvJ6FBM7c5%2FDrL3x0MNzw%2FXs5%2BHhZBxY3gYUki2DwJ7YLGgF2WRcw0Y8C03RYlaWWZG6A88RBwpfit0PswKtxnk9JcyvM1WGtAV1puco12xBh5OC7depGivpLi96dTC85kYI8%2F32%2BX76DJXMB%2Fy97EiminrG3rGFJ%2BIcYbvDYtqDvda3oZJt1nsVofsgqsS%2FY22W3x7s9sgJsfulPqfR6C3NYYyESAhc%2FZhnncVXiS%2FJq9E9n4L5R%2F1O3t2WClxF6c6E5BgWhDG3k0yrWc%2F9sZ8Yc2Nnh%2FHzzvGoQXqtkS61F%2BhBAztDAPYCnIgphZ9g5M7pWbQE1E4not6oo%2Fp7yMFiHwvo743fvmkO59CBuH0sUliQcGT6fKhVVbjaaaDLKoz6G%2FKezRUuTwtgmmHOEVWKNWGvnaHAtJyv7fUWNEgwdZ8wHcJwikdF4MCqluAJoHCwepjn4yFvL4eR4MwxgRG%2BK4C0xaFWUVsk9NOqEP0LyHszPayoQYDcH54aQFrMofExvmstO6lbkbsAbCS%2BPEuSozkNdj8n7WRJtKuiZb2xVEXv1UK7Pp%2BEwRkEdha0zPlNgMLOdgsUGOqUBKiKhjRn1fb%2BYcvRSGjdrR3I3JXPYDMMTamHjbT4sNjdwkGnC2Lw5sC%2B7B%2BdVd9E%2Bpf9jpTzqoHgA4hbDQUcS9d0kEqAg0mb4XoM2uJ5m0fq844Du2288PxnRg4yO07eoP9wnr61y02FTjnfCrvc1MC2Hxqk269ywXSP%2B%2B7ER0S%2Fn8X9KJt6FuZrhnjtvyODyDfppYkLOHvjKzXZ0%2B4G33DsdgroF&X-Amz-Signature=fe687cefe9b2fafcb1b6cce0d6b15ff5f6f6cf2a97ea7450417378a0eb7be313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=f617a05e5d8dc13d9bafc60dfe0cd05cdb62aaf1fa45f915c0b986e24847acf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJ4JFYA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T175006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCMktO0SAkwP03yzuB24u2bunnwyv6rht%2BdMZPf7bc7PQIhAMVGvAMmy9OvBX6jWlU22A3LF%2FJN1iZ20PruOzpcBztfKv8DCHcQABoMNjM3NDIzMTgzODA1IgwBlyfyhokce7cTFVMq3ANG%2FxIw%2FB%2FWYi8M6LeDHGkwWcc3jmT7SH7HloXrel8lGuxzcboaLzpQ7GGY7mLMOhBMTQvjxi1DeoPS8%2FBaRiCbslQIpCEpHl4xPEFf4U6pB6U4O5IImgl4xNMWNvSEcWsBaoCeihYplTqEZS1T464WnH7frfUGQNb6cCR%2BDcyoRrFae9M9vvpZFFuJDvqTAV7KL3DSke7t%2FZmvBsE9VBJhC%2FBIRU2JsiUAV3IYD5f99O5gxI9alj21PjOqJF1jPMF5XbhKFYlAuB%2Foj%2F9B%2BRRu5qu7qgfr3A1w2VrfTFu1e4hTlhqjgUJFDCcveKIV2G8L3X%2B9FlUJlx6bs6BG48Kde3aViSD478rG5vmSEPS1Y4W%2Fug9jsq2m9KDR%2FqGZ3ZNg2MkaQFblTisYMAj6mE0io0sds%2BE4nS7wlV1BF5TRtJXYqhWiOO1diW634TWurisub5AcIAReigkls6j2fz9mawzXyYLTrCPuw%2Bf33VVLRnsjkLzJ%2B1wAxJP7x7Lm1TYoYSYI7vOG8bk1Li9EICzADfEcXtnsucagiudbh46z7VeKe3XEzByEa4PkU%2F73dCWAEb4Kp43dW%2FGwiA%2F6epcveIplXbjaWOqH29ylwEo7pd2Mog13TX60ABIB2zCJmILFBjqkAVxvs6dBxrD7a6QisVUwByUG%2F38G%2FnvGE6ibnYHPrCya9FoVA9ytTpRoOduOOR4wSZ9DlEzySxu1pxLvFTOTSmLzTWyYj4yHeeiZmdvP%2FIVNmmRGoEj44P%2BP%2FWuvDfZcd1eiOczjLvWFB1x%2B2E8mblpMhyTjXST2EZK0SPGN6OoDWDXO1i9ZZqy8vYJ3YW9DOfhNkV0wEBj%2FUfuNZA4ckxJR4nz1&X-Amz-Signature=49b0281fdc065b2289e6b6ac38ca46fdcb82c1e0fdfb26d775208ef102b78478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=09424a56f286dd0e420cb76e2e800e63d2022b4b6f0eda6ccf52e43327b38811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQD7RJQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T175008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBUsQm%2BwWfdOAiXmyl1JpEv6P9tdwT7vvgdTalRYc6dyAiBUPNgY4WSA9fq3SFabq4UUMkdfFqiuDs4g2OSnT0JhCyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMqzKshN8w4SAEObEiKtwDE1FS8MztLVFrXT7%2BiChzD8TVRKfEkZ4%2Bfp7fng43wJBzAJYTBOnqwIZ1LUIJXVVr%2B5GXGre24A3p0Yk53njpGgJTfBbALvTXdEhdC6YLHD9%2B9BsUL0pWh24%2FJ4PQMpOeil4WPZpzPtLAuVZ7wTkwIHcmlGK7OqFBsbuMlids1A0MsDDS9fQ1YylxbaEgMxFYZzKmNc6G%2BE%2F60GC3IPp3HPLOvuuj5y1ZjF8eu%2FcsfWGUCs6LdFQLvJwBR30ONJPfArGOP9QGDPgPVSU9AKMGNiwMDdMRt815D%2BybMywb0Zgoi1orf%2B8qrURW2F1ElImVsV0MqLZshYGbe3pE3G3Cd7HJLdtnrlE%2FAeMH1Sze4rwLUvQ14JlPb1EHL%2FWPAIatyeOwnNE1mgkjYwGyN6CwytUDTjJJroNZlvBoHoz03HuLpgEw1RoskylkK0wEVCJtqA3Z8Lgk6xiyFR31X3csJIHh4b6YlEmiFSOPxHXUBN%2FIoCQR%2FjPVYfRyvIv38XIk1a2DRkaPmsIps5bZACeM2mXTcg33Dc37IN07ibEmjm14Iv8z1APHDMFUqPI4JDYWrA43OkIA4KLO%2B6cf4vj87Tc0JH0csXu39PGRVx2WnVV52NUdkMfiCzQjwjgwnp2CxQY6pgHht2zHKO7dkknVgLArQac4pB1zTsJRBrXzGdSnkMNk6uXy2PvTi6gQQ7YKvlyhMLquxZsAhXROMcl%2FR31D93hkhU1KsmdGOiLxD72ktgo0pkKy71vkE1BANAPEEvZjWav1gmPzOucwD2lXXnKe2yqJ%2BSXedKuXNhkN%2FHt%2FY6pRzaOqFBVuUGaMo1TULOV%2BihoHs3BtwU8eJhidqUvNRAq9M7iaIMDw&X-Amz-Signature=25358f7e6dfcf87108c184f7e3dfdd5ea7f309eb201d1d55daf22f7bca6fe827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

</details>



### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3FUVUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T175010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGsQMuWGOGeFa8GgPHgKekhYWWAPdtQVq9AECwCY4V3RAiBXGLjc8OE2jFVt9GyOvcS4VkQ2zypoCAP6p6KYMliZ7yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMKXmu22GtoXTK%2BTbtKtwD0AdtedADlfaD6ZyScLgNYC8QKHwG99ut35V4KZTaOQTroM%2BUdRVKNNCsqy6y1cijFNn5jk7vakQzMHhGyXPIDadagPFqhPGO3IN8eCWXWUscXBwRDTR%2BI%2FYSyPP%2BOijVC4IfwXWoREAzj45cdo2bSOeBZY3ZZiUTQD6C4He8669o3ONqfNkvC0gxrvbj1niMAp7LhtKB0Dlop09jhxpoyBLq%2FEWCzh3KPwphk73ln7V5vvi%2FwyVvOpiJWQCR3mRWfiZ106fezF6q3RZrSpC3F4bVH6pMn6eqlZr7899r5jI7Lbw5u0yNQNP%2B8w7UNfEgVdZJ%2FSSgNTWMzgWjOxbzmy1PIIDPcWkuSCAcI6dJ7P9CxEd5AW2phnh%2FQBqXE4Hx7jQ2EDUdv0GzL9UcyaLwf7vrKEBW2lwSq06k8%2BOHshrMOKVpc7oywHmqqO72%2BsD2J1nn%2Bt8NrvITzGACyZSr%2BF8dD38twBNJemWvWh4kUzEk3RPCKHIr%2FNLz9SrZWx2nB8Enls6XVXAEfXDEc6k06Oj0vLXqqplNPstjdmCcc9X9utMsuXN8prdADeJTQJaS5Szuh0BQVgYC2dx454o6PI17EXxDaY2r0ORUkVq7QcDvlqIO3JDMQgKbRVAwhZyCxQY6pgEaXUola3WJ8wa7ctrIqvrWsxLmw6IBKQEA8NqPK5Gpad0lLy6uaIvYneO6LI00sAtsRs8gjU2tA%2FC0uG2EM1KlEdl0JNfpZpnbpduTY6YtI9swBak%2F8Ew6tezdJrNPghsvxl5LyCXBHRkwfqR%2Bp9IALCVdFY7%2FfkXjMSLnq5MEHUCYL8rj%2BPEfF98U8VLSXmF19wS6qiCpDDSRSK9JpGwtTm1dpsDn&X-Amz-Signature=fbe3c65daa8d9d99f9a48eaa40a1a93c52a639e4f008e408d5edf323c5cad8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662772EVO2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T175012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGSAj08FVwnZooATk2QmGUi5EBJ4v19MZvyevX3j2OEoAiEA6MRFyCf1xf2dI%2BC7cdiBV3JTFZ4Yhp%2FAbxE6TQVWaCQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNn01CtJTuKgr8kBICrcA%2B%2Fq5FHIRGOgxGcVcfOAZotjCnfZAKGzubtfUx2yE8zmhpdypWJElKovcw%2F8%2BpU6HBIPLlS00vZlSro8dWyoAVoI482ROBuAHyBKQQV5KB2LQjrRK67ovHydPYojOz3MhZMWWCGbdN3uYf229Z%2FrnxqMxHkKGmzM7b9nBeZghI%2BByZ39XqzQrNveU%2BJra2eUaZbT6proX%2Fx9A3BaZA3EgLq0YaXLBHt1MEKQrtVpVLqTTlYSUdlZJCQg1dKKrzVYDfQ%2BVdEx9gPbpacKy5okuD97WjNts%2Bm%2Fnz6gF6IsRsCxpcirfXqTY2lh%2F%2BMFr8FPWZ4GfQjoD1gnlycJCzimN76QKVwDTnx%2BMVYLbBalIyRfSYQD2YQhhGLmZBnQ7HtnMx3oe4pNASno11%2Boc3LaTZobzQYZLEzLF%2B09nL2NJ8jbEgCBTyCbfeFNVLp5r2XfxvVS3bIqGYUE2znOlrsySF%2FfOpWAhwI4PXspWV0pGoOBWjZHq5K9aK3DNVjZZhqAE7il9T8fyEMSOE4incD1LF9T9pu6eUeFRQvdRzlkp14eFR4Z%2FbvJmQ7x5Bn%2BCkhx8B2GQ5GNVylICwUv47qJQIzg2a%2F84UduzfQRxHHWEwGiAPb1C1vijnzpSodfMKyegsUGOqUBFfIgHsHidwdC1Spg2pdB%2B91yGtgF7Wu3ONl8ijgwjf%2BwrhdsNYnrNyCtVIdInSa1A67YOS2oIkaaTtWhhVkzlQSSX6My4qD91HTp8RYc3XF9IhRdHA%2F0GzQZFZJHH1Ukn2kehi0LbJxL27FfTN0gjOPKAdqGejQl0yMf7t1DdOpqvixAZ1OtDY5W5Rl%2BKzZfsfRIYBBdTSBfl3vvJn1lL25mlbV%2F&X-Amz-Signature=6ae44e8fcdb2bc9a28c74370bc5218beacf511bcec44af066bb73e63c7e3045b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623W2RTTD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T175015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDRE%2BrSrpx6lnmMqXfq9MOkparv66wxD2zqf8wnP0b6ygIgHukuKPPd5%2BtajSIMhEgRqr9Ptn9IU3J7PezQcqPrZtMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMmOiwi1Ypud0eSbPCrcA%2BbxXo4gc%2BlvkBxkUxnnZCz1bvvZ9kC3izibq0pn4mkiW0o4VXHxEBAxahqG%2FohUg2SX80NRjp5NpXLJ6Wfccp6Qyli1s4cC%2BX%2BfVuYqRDacy1laKREIOj1c32lfUNtwq0ihMvjioDq9gOFUeJ%2BXjhr1YslAVK7M8HqcwVx18SvGRTR13I2Tf6GbQ7I2bT0cwJwIBVHB93LUteG2dQ8B23I83klelbslvvnu84aaD3BlqWrUaoemzicYaRgrRET47dJtlOi3oGAhVvAtHda24qWCqRTKWNoXpPzuV2G40sclngu0MX04CYpRBDdNNu0Thrbi9YuVsIc6VXDQhfobLi%2BRtin6MuXJrCr3gWjWeJjj77Apjg3OLxIDjdbPtXsLry3GofoqouAqunv0Wa7coXcq7JoN460XdLE4FIvzpZ4%2Fv8UU3WaL7RjXEj5JZ3zoOWcSPdAujVrmz%2B6%2BbKX5bPSpXVxpxBm%2FarGW%2BuB8Jc0BE0wdSr0bXit93D1atn0Z85oNxvFxsZEEnkVLQguo%2BqkNPgjIJypTkvLyxRls5EJuP7nmDg3xZCxoVYWQspGQhiJHQHJI%2BmyfezYCKQdKTsOnNVRP%2FwVhWJSmJnG7z%2B4cp1zu48nW9XVIgOcEMO%2BdgsUGOqUBE8MFJPGHTwBzL7JUEUUxSyblAo3ZpqCxgjfTjHP0JCQJTxgPvLef1K4TyI0fN5chCkbnghMnKBrc%2F1yQ54RqUSHctgeDtObq8qs%2FTFpdh6RncLE8%2BUsnhCEW1Fanf3ZZIVIyOhPAlOCe9fj76u5qeMTDGMBAirPrTse7%2B1linGamnX7TL%2ByeHTdfUNBtDofHSQUULTvTTFQOoN41OSMWOUfyrobH&X-Amz-Signature=f6c5f6f603a66c5bb89231aaa9421dd140210bc43668f51727a6edac044438d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O54KT5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T175017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCN2pDYNCCb4o%2FSpfs70Bu3rjyAryHCVGcXmGwN7zRtPAIhAPQUPqRt9gYixrD5oY1jnUj%2B5ZHgIFcIvoHqDa%2BGsQWTKv8DCHcQABoMNjM3NDIzMTgzODA1Igx%2BDv7e6apNGFvEnjwq3ANsWBk8f7h3N0ibSyitCGWFoHYY9l6xaAg5Bf6yG8bKyUFYJw6TM0LHv2pVGN%2FxkAzo%2Fwq0TscAPLMIEUBZ1fyP3oTM2y6qBotkfw0Y9cLKyBu9VUYaOM8RZrf0u9iyRgdzK6H8q2oSwVQuEjydLLu0G5MOzRe2bpTIkBRZkLIiufVora25gAtMHbG68dxD03yLIRtzsRthXfbN1O04KIW5zl28w8%2BdHdrI4eb9ReTYKfuC8o26U95dHYUZw3ZA197px9ZHyB9%2FxY42gNebiOS6KbxW0dkoKmPNSTKYlWmFhCOCF1N5nNfpQA9N7NKJ8nuyWS4Ex5ITYKmHhe45BixiBs8jmymMwq%2BhsS6GC1yrWozt5qFL0%2BMAU3c3y5XlCK0RaGQ4tJMhaVbPSdtmhxz6cr%2ByaUp%2FxfvS5NbdBIkl7jNB4sU1E3vwP2r3ajQmqnGnUQv%2BRI4NIfoLNcAYHzYuVZj92CPaqeTXwwyHtR3xhRCuXcwa9XKKhljiIGsMYXM9BzEhUj4FQxVZhUK10dc6hzfnNX0%2FUNYfAxzxQlW4GCrDPsYA2ogZ2VI2qVOheiS7o1ZJCaYPsas%2BxvkBk07tBmUjRPGbvvrs8NzyR0f%2FXuchVNsxEQ8rzjsbwzD8l4LFBjqkASmqm4T9WPq85ioCcJ2IBBteSJ5BPkD1behLzACgms4SAMzu1fRlg2JJy2r858DGkjlmKWEjwmpNhg6sUSe4bHIg080gh2oY1BAXWG%2BoZosrzCiRyQCDWCFaxzK%2BSOaiP8vRpeJwXkF3rOrzq5cvhRFk33mzpKd5Db2tm%2FgOphpbqfjp4IPjRl7l0vcugNaS%2FNNHziAuNIvolao8ZH3qT4bxIG2V&X-Amz-Signature=00bc94db223f4b1b32f3b4743f58121af370c3fff463b05b8e343ac2ce64d627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=039fa86332cd168199e6eed3dc2dba9dae0a35bda19fe3fbff1c91853d14eb92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQM22WO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDSJE4YHwy%2BmR71kr%2BwAW%2B2XhPGDtXAe%2FqnZNkMMtuwJAiEAy3F0W0SQHCY3mCMoIjr6QNlGEl0AJWHkbfqMSq1LB6Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDO9%2BU7X9GbahQbjaCCrcA6c5CCxT6vAxh5OgWi5KRc2rHeiGfYtZwhMeNyOYDPUTOcr%2FnNK2QzuHN4josMWfyBjbQ91d8DPZQGFvFx2d%2BO9xFaqm56r4aFEzsp15xsLk5TVQY5nSqpeLmDLItbZ5j%2F%2FR56QDLIE0oErrXxmgZCikvDPUsEywiic7JvYrrH2nitPPA5a2BmyPFjucpcHQEBq6MAfwUA3d%2B%2B9oBKwzTogDBJrLAhSRvKlSKzh1eO2RMiGh5nVxrHI%2Fm7eHOB%2Bg4XSfLQgLA%2FIZrecMagJIP%2FwRo3FAYcTi9tajc4V6d4nVpkK43qn5Uqk2sL9y8UXkSZ3tMKDM0ZfhAKDO5dUEqT6b%2FBz35MvCMjYDg2JC%2Fsr0zCHPkvwBbO8B0xidLGNtj9nDHaVxL6BnUpmK5aHU%2B3a81%2BXr7VgXcjUusGEoMn6WMRGLq5V8eLRvjpqEL%2Fm3hQxNvjGXit4gCjVsKiELAcADqanUufpI%2FCEiBqzxntibVsZ0wJ%2F1uiI5F2EkRPNVDb4xKjfl6lMNn4xUCwhxw3efJXB9YWbTUp9cKArPyxLjU9fRkjK%2Bgl9UBMwT9GnczM08OsRAkZrfkGC38bhzE4EqOo13%2BuFpNXouOokNVFdMThfcZ9jEK6fMZj5YMM6TgsUGOqUBqIYTgjF2mXCS5SKBtGpi29G3zAyYZPNvfweqI6wWrRRbSdm9lnSYYTHyWauAbuL5Ez0JBgh7XQrnyZ%2BBxuP4u%2FeKdIYy5qCkraJN9GB%2Flj1eL7%2Ff7Ho3NdSf8VnaV1sOLai%2FRXX%2BRAPOtx5joa3H3cNa3vKG5sqMfojIuGmIlBueGYBAPWaLzfYJQwmVrS5D4xoIuMuyWfNE7CHaaOTThMdS4FyT&X-Amz-Signature=f747a6f98497c57ec0b96c5cd4b73c07a29a7ebe7d500fd5bf7b4af0ac9e7bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=c87e0013744d39c01c2091cadd3070bc3a8309c8c14e8dc6263271130b24eff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=318e1fe64869cc856216b808fb50f90893b34c0ae58ba6903caaf8f1f327c2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=d1d6343654473107d7787f1b34de49cb611f8ff2cdd320b598ddc439cbb9e40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=c4db6f41a6f03498afa4400a5da83be17770e72b9cbac8468dfac42169c93364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673IESVZP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T175024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCXQFyvSytCqlKhGnD0WdkSrEiRT7BB%2FABHj4uUaKttMAIhAOfgJYzxvY8i6lm1Y%2FEDTd8PNuKhZ42XJEJ5I9XRnXYpKv8DCHcQABoMNjM3NDIzMTgzODA1Igw4dWX2rVhyRnhgCl0q3AOpD%2BbA%2FqDd6wkzX2FSjYhGVz9goQDGH5Gj1%2FmQPjJ%2B33xhG%2FMTf7i5aDGHDi%2FrtLsj5WXx7KZRcZuuoauRYcCqV9QZtYlXfXRkJBZ8k9ip6PpgtjkrlIim9gJFxMOTaj1SwFgVSo4wbE88mYyx4iXD5c1gvUeyhJ4JuoRjnA53oSNpl4udMRFNc8%2Bs9Wt2dhQ18t7%2BumV9W4Tbs8mvbZFoHPyxJHoCr6vBzHCvXYLgBUmXJ3hJ5%2B%2Fy%2FhGTBCep%2BNOX8YgFHYsgsvCQRgQX8LgyikG1%2FzHLni1oF%2FjNeSyhk%2B%2F5ZV%2FC6u151Tc01SeFwjIg4wfplXXbUxvEHY%2Fx3a9n996H37eK10VWEqENXYq4eTaasVt6J3vyT0GDhwS%2BjCkEqf2BPvl%2BoKH6m81kEF9gkV15s9mw2SjteptVSYYJzRVqNn%2FIQ561Y3VAhW5A8UDmnZjgxRknERrHbCxES7MVnjecD1%2Fvt24K9Cdlv2xJy11%2F9cPNbzocvNxlX%2Fl%2B6z%2B2Af9ovGJUvEp9VjPWcEtaH%2BuDxEX7jvNQxsRnIPomyF2SlT5Jdi06iYnhGWdNONWSLQ4Fmt3XcxexkLXNJ5url4XOiNYs9XJzG8uBf6RMff%2BsjPhCireBFo3H4zDqm4LFBjqkAUtCrDDWYYuBYIPwQVq1cu00pVfsWNlMC6stq1I%2BuaVmbDHj78YLhtA26GslQg%2BGjoE21s8%2BVSzzBAHU5JD3KzneY7BH9%2Be0jNDpxI3dBtvWkRqxDPMhIM0eM9hGzsQYNB%2BvDd7x%2B67d%2FR6cbyxbZ%2F1oAVpIqOxjHdX4QTttHbrLPa%2FYEmSIRQpza0ej9TqunbEnhjIM2hPWHLpMVCmurAwYp8TX&X-Amz-Signature=91f63e0b67f7f8a10725eb92a5cab90c7c88a8009b3bc122b080feadb4ad5263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=a10de039c48766037a1c0f201d0d371eba7c2d77adf24b723a1b66a47599eb66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=61c4b5a106074a7c7158f559fc25136b9b97e41525bd4466c5c231e0e4ea4006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=d1d6343654473107d7787f1b34de49cb611f8ff2cdd320b598ddc439cbb9e40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=d60c01a083fb86a1a3210ec7dd22e82f5d4d40c8a31564bfc8e6c4febc43ef36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=29b93ea2767904c0810b53614558818d7211858f38616254ed8b9eab7b4be9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQEDJ3KF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGrudP3Lt1oXTQ4hno8dt%2BMLkbGyDIS2M0XjbslVWWKGAiAe8SKykUr8TPCaeoB5lZGQjmpVM%2B4bLUb6L6D30LQ7cyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHfH7MtPzb0uDwd2bKtwDtp3OeFnju0nL3LoQt%2BPkAU0iW2%2BU304cFx%2Bo7DkOaUUFv%2BeTT7m1vMsCLd%2FU0PejhEwsURafoFOC6XsVU8oicS3olCf%2BpffJzzIcG%2FHGCoqPT2LEhlWDnthxpuyZeyPZjHAeVWAI4KjauQBVTQ7KbQNWNQ73xZmoOCAvEN%2BZcODSIMYC7r9mHlvblFoVCTQFOc5T40FSLY506N39jPxcxNWdrZVZhiDr8U0naCy5lPwoO%2BshSnRgmj4wmdrOgkeMPoffZFm41tWQXYm6%2B6GhnDmiKnc5Me4FoesSxOZ4Pdfmiq4gWM%2B5U%2FTZNVXecj%2BrdvTes4fc%2BnbFchHwOwQxMpMkamk0iV24F9zIz2gyQ%2FmF70isSp8PEPraxi43p%2BGlPmNyUZPZ82JXflrAYaFK0Y2PgZnSLnIoKMvaowKENhpcLgqxg4V7fzE6hN2ArhfD%2FNl4N5oPICm89WQ30iyacFqc45W4lEL8u9UTPVmJTNcQuns35KJ82r8KhH4Fn3NLozYc7vn1smncbykzg2U6tknzek7BBVU5gNwtTAiaDt8BuhxWJbx6%2B%2FBlyOX7RZRLxVrGo4yse9%2F9Hl0joDnLkwb0uslMo1qr8rB87PHEsHodK13e15%2FvCcQYSGEw6puCxQY6pgF3E6WHr7RPnPJkz%2FjKevIVOZvgGRNy8Bk%2BzPDbsxqNsEMTkcAAimZ7J9KcfmSvwlk%2B0lPnK0h1a5ggmnMwvekEsAOfx4Q4Pw%2FjFGWKSaerkdlrtJGroUUMsBhUImy05xvvo0BmHgP3nr2wIICHA3%2BsyuBYXmdfIfTIk4GZubNFSU3KpGdbo8%2B9TVEVB2Ghsn7oDNN3Fg%2FbSQux7MKLbY2uQc2FCzls&X-Amz-Signature=cabdb9a9ae7a1db243db86e1a35d4eadac8b66b4bbe8b5e0f1783caac378db48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


