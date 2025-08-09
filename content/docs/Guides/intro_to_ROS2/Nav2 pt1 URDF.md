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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=fedd554690de6187701db8a5693cf8f01f6b13a3f49f5bdc534bbc30141be38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=01896f6194df52b0a66983b970e9eb0fe61355965b5e85444c686303f0ba98df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=134e7177306e298e0f55575a0d190b62af01ef1b67e2acae6ca97d17b6b740aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=a83875102804a7e8d66fb95e39d7fb413a0c987bb833999a479a2d25c8bcd63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=43ec36b38ad6d807b5bae35b9f2e16a472761d9917a8c7c2a7ec2adea6ebe262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=2224f00ed3fa8b02defb8aa7397f7900ae81852c1b1a477a44aa3c60c9f400bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=902ef162f51e4595fc562729d7b8903b417fc861f292fb8676f3240c466e16ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=be56a79013a95e88d39d40ed343cb1bba0faadac4a9d74fff42a45deca1f8188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=9d24b8294eaf7c7329e432f555aa23aa580859e847e15b7ef7c0ef0a11294d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=967fe0713b169d019946e0fcc330d75d60865e85ab90e19735e0c8f9368c8236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRQHV53D%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHGwTLB71bj1k7sZdI7ebkP0GLGjqPb3CNs%2FrZCBz4Q%2BAiBHps6PcAGCndcNLhrkOQSeBe%2FbQiBhKC6bIb2%2B%2FvjlxyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwGVEnb%2Bz3N7xdiM3KtwDD5%2BXRCyVJjfxYFA5KPh5mJ4khNs9T41LfydL%2FtEd%2FkUOEYkl8jDnRvUV5FjummwDCz9m0xWdfVgNrl%2Bq408A7fhTPxTUryioQnAaxvp6Xn06j%2Fygn%2F9P3rWGdC7LiMkpSq32Zo78leQfdPFBJ07R6sPi%2Bgpa02n4%2BeSWuBTxli7fp4X9c1j6JUbWaBWFsYBv0bvMrcw5ZoK6R8tdELE%2BH1A6rB7xzXVz2h98uQR5mYtiWyBw1LdgDBoLnrixS8zrz4aPWSD265lutvvlRE0IdIRR5wnzxxJaKtu3sCVeq8PFFKX2UaGM7ZS2%2Fe5f%2F9nMJVVtl%2BXx2znVJkXWm2hjdQmaW%2BKD7HomgtCrnSWn1NTXRo2Q%2FvfmEraKKlwKWimQvPEXRPx%2B%2BiJfhB7%2F8LE4084w0alE3PglKzoDAxOOHwpr4qvu9LEEjZukfW0LxnNZNoYMnSpXxU6zs5%2BmQ32F7Wj400aCnVuQqZ0%2FoPxd5Q%2BsVMrZ5UbKslPVxAEiF%2FrY4dqWvzBMqKhmY4cYMT932p4L8OTtUrPXS9RvkR%2BPBDJtXAZanwmSn4b%2F9Pwn8%2BomvV1DzavI2jQqhysSCKibHFHESJj0sQCW5Ocmv1OwvRAcRFoc6U1FfJnv4oYws%2FbaxAY6pgHid3B%2B%2FlWzySWQRzZ5bSyTziJKwrYASKhxSEI9ziKFO3J%2FHhYic%2FAftmEtc7%2Bt%2BjxYoKt7owG7UMb78S5YAeSNYHEuyfLJ5dYVeB1sbe4Bjp88V6tyPxaKJZ5cLiPsyGKyFEXQ3OM7ItYxm3JMBJXH8gH8Gs15YwpzzH1JeuP4Vf6%2BRpJqhj%2Bc38zUddi%2FNPI7Xzxwz4%2B4IiYTaQdEuRwH%2BQ0%2FCBy4&X-Amz-Signature=1b626f43d8572780a109ecae0b9b71b045a3407db2bca701cef033d37491b594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZXQ5JT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC%2BOcu7O0NbQusA1x9z4dfqhBegQqjMyfjhXi8vrqdldwIhANnk7eDaO4yMNR1NEfBkF9ePs5opnrN93YECDMMucknGKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0jJ6VifcQi3W2sY0q3AOus%2FtVmyDFPQbRlSsf6sSJ%2Fd3kc9wFA2V57Xr2Rnxou4JLqaiOlCrGWcJxfoZ0d%2FLIeV5xgXmngELVzvLmnD5t1KyBdVmv91XoRFqqlvx2siJSohlwmR9oCGQ1PNIX81ItaB1BIwf3BhStTHElK8Y0e3ES76F4fnX4h53B2VkJkgFjTi3Rl1P%2Bjfyb3R%2FsC7NpfqPuvkqKyzIyG9jLslhP2IgGE7orsxfvUby41zd626a21OSV0o2ViYcC5rLjFUtle8YXxnztb7ZqI5QQAZs5DO%2FD8E0R0JX2aUCFV4MMlXrhmbDi%2BqUzPxJHnfhlc%2BKjuVF7d6ZsC389LJBIi5%2B6syP4lDEu8FqypYtlHI7%2BKJWLZVItRP0Zsokqv%2F1VPam0rGQuamxd7dUSy8peEZ4i5ijPQzpDM4a7bMITAtSpeo6uJXpCDeUKr4R63Vcv2v%2BggHQnDocqUaUz5n2NaHaFRT%2BGwiZYdL%2F72mr7mtGgV2EdCffmCb2mR4kKluVU1KC6jtIrqG2KDcF1WYQc%2FqxnS6dNCcujBsULOEymkNZAI2cgc5ZIwFdkuQIytw8ZFT1W6wE96jGS1bk6CSIEx9NrZMjWo3vMhX53xCrfaxgBRhnq1%2BV032Yph4xsJzDd9drEBjqkAfs7FwlFuwek%2FgZPRd6GYx3h3PdyDJUbasAZpTQ%2B1GfQM1gngD05eGgZ5CyfuvQe5POuFpXVPFoM6vK0oMbOV%2Bt3A%2BQg8qdCbMrM14QX%2FZ2f5xSrdbqlt46QE1SfKvXsasSGPmTwDPZNq7O1RMTM%2FeQrvQKSsPllmyz2PSMO4ppiq5EqR0w7kUd2zPnZKN4yYrNTKecW3BIybDDIFk11nQWE6%2BJ%2F&X-Amz-Signature=9204eb45ca6fd93a1276d816d84da0957d48c77a6e680f6ae35057d24d3fff6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZU2X7I5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIE3YImj1lIaw7qsdNpyurMhISmfyyXVMxshBxek6z%2BanAiAoQGjFjKTWSMSc9MAg9ual8Qmr2krfxV5sbU2vviSUtyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GwOuq1JF%2Bh3hnAWKtwDthBIqGy4ikCJg8PO7JR8GE5pcYAjonXr93hrrurGOQ%2FUAeqKWTKEOhBbDzFXakh2pePySbzF7yhbdEBkQPYOiX9m9Oukf0XFsQkkR%2B4dhCGOOm24%2F20i82tISfIZydzH5BaziwV0c3LC5gZoKan0WT6kY3rZmLJWu7%2FmzehNfDb0BOTmUQFisTajN1vHz9l3gn4FOdZ5qddEf2QxVb2sK%2BmkF%2BJW6y4ipKh8OTOQ1D3V4Vr8zJ%2BpOPzTdyHv3%2FcQ7%2FVIrkahshmlv3aFWQj7vdkyIxIYABNTeonnAZpKSodPGJ8EAOblVsvRhKNLSCYdTBXNhaU6pFSiflIKOyHtR%2FA8z8f3Q6PPd%2Fr8uD4WGr8kAh1Mz8pgkjrN6eF%2Fl4q%2FIl2h2PEGTYk8NP7xZr7mGOMQvdnHgf4zirgfV%2BmqjyGW8DNzT4Y1voYpMLy3zWq%2BwThzHtcF8nHy84zedVaBOsqYVuvMPTV3qaTib28qD2ArqUSltcfxh2EEZBDxGmL7i%2FFa3EDnqn7JFE1mm6Ymwk4TpQAaNrM%2B4UW7L2Qam4Mu9XvETivS5ZrhDSsv%2FKHRexnYPpQxcdRk52JI%2FJX5RV0J3MTsRATedm%2FIEymojix5RNyPGr3eV8KZeagwjfbaxAY6pgF8GI38MA5qgg1%2FxKpkSQewfmIQkb%2BN6nJISlvcPm2EzQqHzcC3PFxckh8n7DaQHnYzqYI9Mzf8a3NG4WCuJu2TaM8U6qRxxJDe2Q%2F8V4Zk7wC4La3nWxXXP5yHWeztcyOOnd9yVWgsUYWJOACrGg9S%2Bt2tBiXU938sD4AmwkCQYP%2BlZlsOBFrT1C79%2BAPXaP3ZhBlNh2WlBHB8g%2BJTpxgyW%2F0p5Vv6&X-Amz-Signature=8160f96f9341ba09a5f0cd3b1688b0ae3481e02a21f192ebbf198a8e09df5b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=06450a7ad04e5f66e1dead19dcf62f77dfed508f3543739c9d27ffd1ce198da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXGMFTML%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDzXpFV%2Bs7rxT7f1dzENK3CpTg9J8OdfCWjyWCv4zrMdwIhAKWoz75isP054Dp3ud4Ymrp6Ssb1aej8ec%2FGVYuhgcGhKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B35lgjj2C30kdeBQq3AOHz4gcll0G3v4ev80RwAsh6cCH6aYYLdGRTC3y35cLuQyIz6jR40kg%2FyHGkeu60x1d6072RrhAREfhLxkPwcPHUKfWllx%2FB1PiTGZysQUxZ7%2B7shB04CXWswyAoVxshh%2BYcPY0jM5xNL0ryqWs%2F4W%2F2dts2npEK4m9KaNs6WmmKZBz6n3EhZVez4sbnRgAiuCcO5U2L6GYSqEL1vFPn0k5OBwAwiu6nJZGlJoLXUEkpLtwfcGSBOJCiZI7plyA8VFJ2EdNUaBIHBl1lxr6kGR%2FrbT8lclMUqXirAImv%2Fs1JXPOQ2pRfsWXSjbONBbYfBzx6sG8rtmO77C2Jefrehy4YL9%2B47JSUXHb%2FwUlUT37Rj3nGNH6g9UkI1dPGCu%2FkpX8Umif8hX17JqjlQBr3b%2FI0UBm30pcLbaK00KlkibltyHU1GPC4VEsirt%2FGxbAI7KajpPgeXvc9qNTHPvQA51qR10DZNJYs6XypMvTG5ygigS9pXvVmntTSVU4HOGZ5vtj9Q3Yd9z6qX6NagOpCj6teeE5tqhUDuimJG99g%2FYEI8NNnWgmZfAq0a4eTT2MEE28dVDpNWwI3XN2NWn797HaPiA%2BIl%2FPL3SEpM3qtRVUMWKJFMyr7HVub%2BQjGDCL9trEBjqkAcmiA9k6ZVgj7IQ91ybW75l8yoca1mpdzjC7pOxNYFghggfEt%2F6XJYpkX8oC%2B0yzJnL0ZakSLDrN1r62ExKzR8gCdwMv15QxUqRHIFG89qdBB31MX%2B7R5VNUlUyOX6H6BAaeiMboBXIwtw8VzwBHymZE5zu7mPFgx4yLHyn%2BSPYgFalmx8zYgKhkE1qV%2FbqA6%2B7C4TurIbM12y75vL%2FxzMzjNVwc&X-Amz-Signature=33c2dfec8cab7b96605cc8293c925cb0f2cda3c4a05d3fc495a2bb90c390b38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=484d5e595d68b4c13c0059fdf53b6772d418bae21698c4e25d74a1c7c2e44562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BXFF5Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFc7bg977BMUuRy2dpheTEbxoaHzgUHb46Jcl8nnlK4lAiBgsuU9snclzaOX9%2B%2BsrI%2FjZWr5hhBlDmKiGmv8j8LcQCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYcQEKV%2FBeBDdkVVoKtwDb2bC5gOHVowqOYkBl%2FYECmeMt1AoneHgxqIPBmyrHl2ZeN%2FZjbOicnY%2F9eMR2hiocCm9hHYzJnebu%2FZRsClMCXEI3hUD4GeMKBcO8cMMgoR3dHqNhCkG1ejMsU2K38wGeN6qUzbyAzAL%2Br3WrmBHtMnFC%2F0MpMONjDFMqOExDaRATlO%2BZH%2FjWA%2FYSi0X2hEqzkvEgaeUhuwMk8F598d12ljSGGpVQu%2BpKqD4pufZ6RptHAIozEgfBkxMjSNdTY01koF5HhAhIxKR3KFBn9IXffEKqPgPtdug%2Fm5zxgzxoZosr88%2F9cYSvKULUpSA6Uv59F8Om%2FBSYijRCNT15BtMhKhmc9S7ZXyifHZQbzox0RsN%2BCDsXljwLw8gcNNvJw2HQU4dO0tDsYFjj9NdOHDsj1g1CAxw9lbiXfqaxrxTMmo393m%2BL%2B6PMy8OTvW93qehvh08DVl%2BTNy2zN7%2FXBjgZ%2BhY2ikYigRGYdWA0j3DJJe%2BqzfXjsG5z5g9GKOXR94soJ4ENcE1%2BNVM7qyyJpUvPstut8evNlXN9bVqRUwRf2sTjrRYcMy52uTE4AcP%2BcWYUTauVZq3ZxWSFyZ0rRcdeIcNSEvhUqknFSAke22Hy4YODDw6ZmBO%2BsL3btww2vXaxAY6pgFntS3hNe%2BBXLvaGBXBH%2BOQIq70z4nigp60ZBgVqKyqIXw6ZzXF5jA%2FeKYji9wmqfSlGCio8LTxz2SvTt%2FGHmNZ7shzens6qj8MOzzdvkLzEXDTylFDs66b0AfjC32RbtCRrZB%2FZRKlUfgmm0xbObNYtAHbWXp2QMSrPOiaZq19dNFmyoyz0UWsv6SyCwaQThfCNi0x%2FhOuurM7C0evqIzAMWP7Geld&X-Amz-Signature=0d9da664ad680e5521624056f5521f3614283b82d5a7d88b4404b4d637487985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=d7f4421bd62b3fc3bb08e2700b5005ace20a2e5d6925b4fccb0a7029eaadbfb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5PLCOBO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDAIa0ScQ%2B0VQ4LoaYfQpJtnupa%2FshaSJvmOjMZkR%2BI%2FAIhAKYo5buqFzjVobf6EjQMXYd%2BiCVKMAG6R%2F4f1jc%2FWUy9KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFtvEuB8OoAgWJNSwq3APneiHopzztrAjR5%2F9NbbcCnmJpU%2F3lC6L%2BQAC4Q%2BalT9k9C4nOlhGqbfoCBVL1ZsMZLPYGeYfv0oaumMMW0d9vCAvpQxE1g%2B4UEbql7ns0ywFlTaAfdRxqBBU0ChGnzQXlBTzn%2FkLuqs58x9eNWVaWfSTKTrogDhxbvxxMNFA7xYmdYQI6MGigv5cxIcvoDFU0PtA2OoMkiwgi6eHen5kPEmAUKTM9XD0AmrLaARSXnbQxt52W9IJQtC0lcw2jNv5NN4qS%2BjJDp1Ckh52bQpzcioiJaJBXvPPx1oBdeWbg%2BpQ9K0CJAymlTvjezXvR%2FYMvhblFjkyMnwjnz6iJ30I%2F9W4ZX7jg99VokohKqODJ1bp0oq9wVr4mL%2FeicbCejnufpyQYJJkbXrj1eDIUzOaMOGhBVDD9XnlqeCjpaE3Yv229GIp%2BTqWEP3gxdWr%2BrCPSg2nQo99lz3L5aO7XMguRq5CSQS6yWJv41jEG6heFB2%2BVTMafgMLd7pZbJM1CpkXPYvPI9wBQ1%2FqbehWKy4MtLGfxqXpRQIxdAE8fkSbnbshoLF8%2BQn5EvNPjhCLg3jRggFIELcC3WlAybeyEQN3rFYqnfFOswIXHNjKZcsHHzGtp%2FRJs%2FNeETt%2FWJjDt9drEBjqkAZAY0VDyQ0wEEt0vlIM5LABBlFPxJJ0X%2F9KAlCC8qTIJ0j8%2FiNQXkXaTqZa1bCtNkJxpAnWbqWdJhL1LAcxgesi6QWFmR%2F2j9ndsTlbxBIJAd7wRqSN6LjaG62ln8RNdw1V%2Bc7JUwC%2BLTe29sXWnuDmpbFjKPKBXv3gxRcQnyO48KYNCzJzlN8zvj0nFoZRP9Nbzf2CeqM7MT%2F5rPpJPKvdylEe2&X-Amz-Signature=a2bebbc93686a35cfed7464403150166919a932f2b6ea2f45c532133d4852e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=4da5e3f547ee50ca0a84ce625fc9ae095fc8e5ad66828b7840594063afb8de72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLMWZ5LX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDMPbL%2BxyZi%2F8YLOdcS%2FemsxWDdlynoT%2BN4n7lzXEcTggIgFcgSGOr0xxhsRSV7xA1G%2B%2F%2F46KHdH0HQhzZssqbf9zAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjwlN6tRSMgRGXMFCrcA9nDxBhvKhc8SpXZdA0v8acugDGjU293%2FrcPYqGbomBwDY8b2xbZeNtL95rgXD%2BExhOEl%2BxWOe2PaiaXu2xL2qs1ha6mXgdVFJM%2FWJfvwT0IK9RODEW2UgA3P7Ru9fkQRGuIiNNVzuMoDa9wNrzzm40yeqlKBM81Ovi65NLelubiXa11NqwQu4w5Dflj432pqKOZswvL8k8r8BBlTVB5CrTfP70eB2F3yKorrHT7uPWp%2B59eHGroD9RXQ6cHaVx5zQI95CGP0Pj07gOFFtAz4xTawHN96d0HHRl46J9ZCOAT0Xkf985TAcJMMq7cGWN7JH74SVeWnmb6lM5toAeBflOEG5f%2Fm8JWaEwGKyMox7w8upG%2BYfbsx%2FPJEc7LDp0B1LA29bbmHIjU88cBSRWxM6Xi4aSYeC5DxBhY0zVe%2BMhXx7y1yVg2sqcqWGF9ODQpf%2B3P4sBdCQMWdNQoPcneDDEtSFMVeVuz5zs5il72noW83FeGPTaFF4Pwft%2B2BbgxiUJ1tFuWKZGsb3tfOToGj6CmnJA8RPQ16zg6%2BFIXVZTNpGrnKEntsM%2BzYAZm4Zh6U7PRyWkcUOkTW2dB4dZvfTrS1L%2FqTsb2Zv1h6QAS4DHN3%2Fe79vaXS1Q9kiPkMOX12sQGOqUBHEqYy3nCd26nGWL3WCKoXLLSBP4%2FN5WWpePV%2BqLWRhpBaglDN9MnXwYfGC8n4%2FYCGYqE0zUAxi3%2BwL76NeWicVFK9tzUTqbZBYM8N1MEscoB7kEr24bI1LdBHogAoB%2F67qe7dqhkthnUyKB0sLjOvzUTqhP7rRMRhiNfPLKNC6nOR15%2BjjlYKDgnTccDGAEXOvZeRodTwNqDuUIKqa7EkBr2RHIN&X-Amz-Signature=8283d9dbfd7567e72d8d6eec949bcc95cb4c81a7bc7970915739aa8a763e0dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSBZJLQ6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBq4w3hHdHHrJaoIpo3k84VXtmW8hIsikbsH7yK0nXVgAiA%2FKybG0%2BPH6nQWufrNerGXha615%2FeS%2BOiaGQ3wUdeDTyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZKqQ%2B%2Ba5WVfjwHQLKtwDfe6UEZlMoywqBWIVmgpYQGNXfxAWYf7Q%2BXC3JHBHMPAI9zxPouhdDyQ492UHellsXllsAQog5XmRwQ6jc2LrPc2AuVf3zuIB3zlHsJ2F0hqRtuf6DOBVHSmO%2Fs%2FfzGxqFcP5cKOLcT8OISQcukCb2SW6L4oWx%2FLSHE7urlcGmKY22fkF6sTi7GtUNtAPR5u6JqhBvHCIoGlIqvtpX4ejb2QaF4SgQgrxbnWTpizUVhsiM0pzpfdgwccJRk5X%2FW6YA67JF1B4s1PNeJZeOFNwB0AJg793xdblX%2FRgR6e7LJ5%2B5fYNH1ng86vNMOn2eYORHYy4ojG3Gr1%2FeDXmr6u15QV2xbrSd3CExcM4GDHh0eEIaLAi3eBcpfQWDlIGQ95TNW50XbfK%2BaKncir09sfj3DO%2FJFdPls19sCWngXrGphVNDZlTwdFD3Jzq8cN5Mx4%2BdwNAibIG1s4keMWQZEIkOKXnLpeCsz%2BUaUWvE3IutgUTkiQLlo%2BeaFg7FN5xdHwXGVbN1LGBboEuGuidXvqFVnIR2YgFWYDJHr3twZgnbUakJYvnljpURzu%2FZnP6ukps5vwyZXMUALdmX7EbwABzQF1qFEAu7raBryN2LHHa65cCD8mBoWBTBAGMyxgw1PbaxAY6pgFVikJTvrDBz3jKLrEXMAkU3QN6zVb6V96TGOzsRgK6bLKiJ%2FlBXlQA2Oiyk6cYiK1M%2BGCx2EyNz4Vs5CrWVTNROOIVV9VZXQhiG263zV2Ya9gfjkaYxc%2FyjxAgnGcAQvNbkCnObywDaX671G6asBNaMUS8HRkRn4Q6ru4uYMigqcjz3QOETFpIg4pzenlr5znT344iPu8ws3rEU9zfTp%2F8hmRslge0&X-Amz-Signature=168b46de4c4d0d007b0e5bd10b6ac44d6f5e2855877a816764aa89c311140fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJNYWTXQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICpk7x4O%2FsliOTr0GyHYHpef8ScV6p1vohPprX5FRvNIAiEApc2olGHeLKrX6D0YevTEx1YVUamaIrTiWfKkAPyOyMEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgi304UzEl3o2BxyyrcA8aAheZwGsG%2FGD%2BhJbd%2Bpor8hn5KImWqi0xsiwj20EH9eg53Wm%2Fhvcimd8P4p8h3gCwUAd9iivhH%2B2%2FpSPrP%2FnfQL6T9t%2Bp5FDgdtuB68IkdJzqAGLdSn83XN6K5bjH551Bv2%2BLyVrfLCm0ulOh24ZU5%2FA2LXSHw0ho7MXIiJ2FuFxmgslCvhL37AsDAg62O9YQAcQBJZicPm%2ByXUSRa%2F6WI0aX4p8Y543%2FSpl0lkhUAwbBIUV1Y7JuDTKC7NQ79SLWjzy7QFiGVEPZ%2FPXLrSYeyiLvUu3X%2BLBsXSS4AHXhzC2%2FCmV7VGezNfc2W66WnVQwqa%2FP6iuTaArP6r5ISIHL5JIhfqwzdMkNFLZkJ%2BxmwjHgdMeDKmARjLGLeWom%2B7EeH95P1rRgHljTS9h0dVGq%2BnG3bK4QAxfOztU00kBKDjhx8m7bmfFF9rUsrkY7EZtcMDaViRth7y2ixSVeFU%2BFjYtrDOWovn%2FDRWs4PoCk0MUY5reuTTuCxF7E15XYC01MPvCgVGiUXCByjjWEXfccyvEQbqWqAlJ9%2FWSzxncxzq1pHMBrVk6p2eaFTTeSkRatV7N6D4%2BjU%2FRsQ5F5YluyzjkiAukuPmLxww%2FX08JOORdVw3idb4UXF5aqfMJP22sQGOqUBOigwEFftGIp6%2Fr18ceRd%2BJkseITVyD02bYtSpI7jXdGp%2BhMH85B8o%2FLbZ1iTGrbsglk56XY5Qv3AckrDGV3%2FKITQSKQingjRNinZpiFayep1Rd0pngoopp0WjCkUhTd2VwfNqRO9GfYrKsmKFntL4JcbTV2QMLpRJesNUIXeMYAqU8Okt1%2FoSA%2FhSnwyLiYcOlexKsJe4dltMnVWNiEIa0V10SYj&X-Amz-Signature=2ea11b98ec9eb65cc657106605f092c3cc798c58305940639b9336d434243a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBWN4D6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHZyyMeyaX8%2FmPAbAYGcD4vJN9ZM3dZAjVMUECQUHkAQAiEAxzgxW3peEP%2FD6uPCMqSIMkiilc3QfV9Yt5LN85hiVUMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg4ktRc3%2FZpaC2KQircA5efLB6wUoZ7Bk%2BIbIraZpJb1v3xQ%2FObrjtiysBlHgBCu57vjG%2F0jO3OjBnvWNvfIrW6nieREkLG5klB4VQzTIzCPD5h36reUf8pg9HgbWglLxhdVxSqpyVdPlgyIlqOOKtD%2Bh5%2FpynDEuu1Anv75zpsHBaPfeIDYEk5xH8gmVU%2BWJJ8RStwASUZxYOcST46%2Fi4LVN%2FKtDNErRl9ewxeYEARrbvVPnzaUVtsj63N2PbkP%2Fx9%2FW1Lv6%2FPCuqDvkCUuEFVC1wJ5CmLDqKPOIJ5mE6tdVuT3c29%2FTSiB01eGGhtuUOXhkZbQtPMKq4M1kt9Dooyici8waAjPgJthjOx13%2F63lWhFBBujfNNy9hbgp2YRHcVVVD5VoihV6JXUEaEbPdxTSriscOz3Zemty%2BLqq7bMcUh7xy2F%2F2hg2xyNHI%2FJhViaQXlEySCszzr1KSL6CLnHelmWRFIu3LP3gjbi5KEmfV3jrgL%2B3x5bUaLoXSE2X0P%2BOiKSLzsMrotaOZyZQXbK862uTFEDvJ78xMnVILc7IacX386GOAorahLTOzSWaffzhJSVhFrzig94xzTHVjMzb2mV%2B0yIMqPvjNku8mUm%2FupoPMh2XLl6ipD5MWK20eth70ZW0znFe%2FRMKL22sQGOqUBdH4qPP%2Bc18olFcoamonefll2%2BXHvhVoFVchxFs%2FObWAQMXSPk%2B9nveyKlWKTLqfLub2%2F6NcbUm4SL4vBqmteTLTxjriAL%2Fxal%2FOx4YmfbeXUj0IYg62IFU4GuFLm9ZTt6xzgR5IDws3iriiruIUWB1jsr8KgNrAObwPmXPbVkWu11Al2fGYtz7n2cmDJnL5vxGeT8mTm1GGzNVbgaG4DH7Wyj6Kn&X-Amz-Signature=c814efa35f8513f475a0c20a92a6b76fb3d94f138ac61f50ab07978c3125e198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2MKSNOA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIQDbuWw4A57DabNcAa7W4nDICZdby1%2FgSdgznyv1%2BikEcwIfDb%2F9yw1aWKyy%2BRE%2BT4TPX8vjGZyqvAExgEsiYEC%2BNCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNUDnA5sA%2BZLb4lARKtwDozhNpPMW568Th5eGw2c5xUVmDluhGOhZ9jOOrwOiA4ch97HpwmbjXkjaJm%2F%2FASXrOBRpNiOGdtjLcYehboKnQGL3gukPjEpXgp3%2FdivJWL3tjFEmimUKxdH891iXnnV00A7nciWRsHjV89bnNVwTLSINuDd0WbfGIQEj8AB4Jx6Db4x8Dhi%2B0Wtnl9X5HTEfQefS6QyiyvsxI%2BpCSG6jZydDStqIr6MO0bn5lCUH0GknaNDuFaOg2pZNv2uhCCNlwi9Wmn11aYePbIycj802pdHLtA5Yo8iQ81ma5F5xDR2gYsXlgr6yytz2f%2FNXglArsfShWiJGqVSVyttOkNA7h%2FfiCFYxlsxuQkDrn6grY3r5L3X%2FzbU%2BnCy%2F9A0FdU0urfXE%2FOno%2FfhqnYKBmq2HsO5oSO9TGr1yBWqEMRPju1SQoomJhGqrNV8SVPnRQRB%2BR8C9gqpWfvVW9aFilHQe8F5%2Bx9jE4JBKMm4O70ZFKyLve%2F5ywsYrx1lwKJicCaOOgQg%2FSbessbhYqOb0Y2WRjMMuyQ7468kZgN7tiiwTfZUzXAmC7jo%2F1nKp56rqf%2FM8SOy%2FZnQm9%2BhPK5LvPet1QPFCQNkUbUMSEOE39cc0ZdYZmVgZNO2hO81ve5wwlvbaxAY6pgGnteKldUgGiq5AqB%2BFpkcqVp2i0OFQnJSedGFbYP%2BE9lAHatCDKrs0W3dGt01W83N4qUb5NDhRMBSv%2F1VSyW18fTnZvRYyemuf%2BJcb2rap9jfajY5pbqKjiyjEAYd9Dj9w7bW0K%2FjCFBgLw9PuDJRT5x2uXI7cjNJ5g2Iu2LrPAHC%2BhRKXQJTR6y1khv3%2BPu%2BA9MGZLtAbudrHwpRO6FCElD21J6lF&X-Amz-Signature=6aff485ae345907295758b2b4f5f9bb4ce30421a7337ae0922085881ce8fbc35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=ffd03c55356d9552b80b6f52d7af17cb6d68ab208fc4a486bb5a9ca3808dcb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMBUWGL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxQAqJ0e3UAzZUczLrRGrn8sGq22wY%2BAcB3eAYgNsA7wIhAPliM8JN8416VZ40rywvY5ltvMih8I3sWpEg95l6qWooKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjoMpuhhWweMYsGGgq3ANt%2Bgo8w9p12b%2B10S4XfOyLV6SzI7jQsqN8xsMxC5eWo1a8ZzHgt6El4RJnC4ckLWMXDCH24ZfaeMe1atWPRZMMx5tfCgVHIWdaUui3bSLKR1n%2Fo7C0oBULGQdNLpiscUmIdxZKOOZ02u7oqIMUr1DLyQNk1mkVzk9d9b2i7eSRSxt8TZDs7aZhSCRspwBlnV3VdAapbGTKhWk5hpMYu0aMWTETV2n987JbxcKcBNWFdKDTrngPctp0i54P4iV80drMsg2WdQo1T2R8xppTWsVPtbxNmSwLPEPiQVFtAuq8mUEy33%2Fch4hIpa%2F2dAA8FhM02wwztR%2BnyhNg%2FyZrY4GMoelvSrZguTAI6cFihoJqduRi19GRVQqrSempxV40qiyURPJlStDXRKFqQ1hdO2oB1Gi9PQMADKzgFGpVHCGkW5P6egFA1Kn36UIpFka2bcg7aTsRbvGy3ftGx3LA1ilAnYeG5%2FPyNXscYnsq%2FZTudKadsMpPuwvB8h3qDD8nk6dxvQbHwgiL9WVCMKWiC4sb3xj1Bu4A4P5xexMRWWOQAxOtDQlBIAEbHZ%2BaYJhq6vE7HlTDVWpIfH54oTJlOVnOKZ9pIW%2BT8pSpdo2f8ihbjFFzAawH9jneustbOzDU9trEBjqkAeO1BBT0cL9%2FYQiX7pSsThasmWM%2B8Q%2BMAfcSXLagGU1j8aDXgskjHSY8yCIxSSCjJ%2F3QmVGXB6eGJFIasZPyD%2BSO5tEm0Ic8RjqLuEXNpf9Oy3xGvN5RQIRJ4qzsA%2FJKiO1tabxsUUKqO628xhvKMdE1YeAnC6%2FDA1ILf46g%2Bd3gWq9Mk8yzFZEO9teQkyathizPa8zVKaVSqCwqFpgOJ%2F9Kdk54&X-Amz-Signature=bf94f130dd04712bcc12de5d9ec4c1418be8e20c5fb18de8cca5bcd4e5da644a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH5GNPRH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICeZw6JScQXLPMicdCCQ6R9OviDlmXji5NwU9mr%2B%2Fbm%2BAiBNQW0XhN2eSCVhZdEK2gwCydG%2BoV25UAV2fh6J6kkOSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7NT0eqH7Z2mJAr0KtwDvzN1XBjGQEvD0KIvYHlEmBpyuYycvg1WhojWJpQU2VNY0ruInUii9x8jqTkHtlZXWOHxc82JcPFYJUMbqa986JBKVeq5VHkVNPpZam89oJDkp%2F3wvLf%2FZMNQhNp1j4oRv%2BndhS5U74M7TFK6ES8IPmEj9SBRaePYQ4yjeR52fr1gE1ejqkrKMO4XYNBr5H3fSK%2B0nTcU1TmpmMRsCfTOS7k1IvjE%2Fk2wu8dZhQL7%2B8LO4FO55fDVmKjLK9pltousmBtdIgMfUn%2BARhc7mBOb5W5leDzuyMchNAdB5MdthOfsuo%2Bb4zPkyUNH0i3W4hD0jhNuhcHJUlDl61wZoNLayi10vdpgRjy7K%2FGt0wToIErID7Y2FYBFWjgG%2FhV%2FIWqgZmxqKeS2bd6wTqzeGysT8CxSnq1ZVtfKaAi17%2BAIi5r4Mu1c7dQf3qDx7TDPvoykFTxthe0cPlyGg9VyKMWOms0j1tajbSTbvKFwo2AoAr%2Fw9kYcGETS5HCxaOaacbncFqdkCddLXcnfDCnjDy6tV%2BtDKmxl3IMgwsiviabsClRqff9Qf8R3K7jXAMekjfZbRQddEM7h8uZc2mwF2sEsbtmDXctlD11%2BoAudzxxCoW3Nn5%2FtXxdxHJZ%2BV5swjvbaxAY6pgFYNiWu%2FrXNcfzkGISx3yPE3Et7uk210oyLLZVv5WMi5JAfzd18rW7MEJ4zmCIygbiyxX6Thk0JqASy4mgWoYaswR88IXnif68OXYuHrGbyKK9dpTU4pxNBGwHNZH3a4CnCwXj6RC8mJvevrWr4Oqem6R79kwK5Z5KlLDySGjFx05e5%2BcLZYSWC4JadHOkgXg3OOgA3r9rybka6Kq97gow8RBXplAC%2F&X-Amz-Signature=3aa3c7a0eeb7c96082c2c17a1a865bd3d5c64e4f7b80c928074c3388db208c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH5GNPRH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICeZw6JScQXLPMicdCCQ6R9OviDlmXji5NwU9mr%2B%2Fbm%2BAiBNQW0XhN2eSCVhZdEK2gwCydG%2BoV25UAV2fh6J6kkOSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7NT0eqH7Z2mJAr0KtwDvzN1XBjGQEvD0KIvYHlEmBpyuYycvg1WhojWJpQU2VNY0ruInUii9x8jqTkHtlZXWOHxc82JcPFYJUMbqa986JBKVeq5VHkVNPpZam89oJDkp%2F3wvLf%2FZMNQhNp1j4oRv%2BndhS5U74M7TFK6ES8IPmEj9SBRaePYQ4yjeR52fr1gE1ejqkrKMO4XYNBr5H3fSK%2B0nTcU1TmpmMRsCfTOS7k1IvjE%2Fk2wu8dZhQL7%2B8LO4FO55fDVmKjLK9pltousmBtdIgMfUn%2BARhc7mBOb5W5leDzuyMchNAdB5MdthOfsuo%2Bb4zPkyUNH0i3W4hD0jhNuhcHJUlDl61wZoNLayi10vdpgRjy7K%2FGt0wToIErID7Y2FYBFWjgG%2FhV%2FIWqgZmxqKeS2bd6wTqzeGysT8CxSnq1ZVtfKaAi17%2BAIi5r4Mu1c7dQf3qDx7TDPvoykFTxthe0cPlyGg9VyKMWOms0j1tajbSTbvKFwo2AoAr%2Fw9kYcGETS5HCxaOaacbncFqdkCddLXcnfDCnjDy6tV%2BtDKmxl3IMgwsiviabsClRqff9Qf8R3K7jXAMekjfZbRQddEM7h8uZc2mwF2sEsbtmDXctlD11%2BoAudzxxCoW3Nn5%2FtXxdxHJZ%2BV5swjvbaxAY6pgFYNiWu%2FrXNcfzkGISx3yPE3Et7uk210oyLLZVv5WMi5JAfzd18rW7MEJ4zmCIygbiyxX6Thk0JqASy4mgWoYaswR88IXnif68OXYuHrGbyKK9dpTU4pxNBGwHNZH3a4CnCwXj6RC8mJvevrWr4Oqem6R79kwK5Z5KlLDySGjFx05e5%2BcLZYSWC4JadHOkgXg3OOgA3r9rybka6Kq97gow8RBXplAC%2F&X-Amz-Signature=c9714767175d001db56359ea9a247658822972333fef15a53fc7d9b97ffb28c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH5GNPRH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICeZw6JScQXLPMicdCCQ6R9OviDlmXji5NwU9mr%2B%2Fbm%2BAiBNQW0XhN2eSCVhZdEK2gwCydG%2BoV25UAV2fh6J6kkOSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7NT0eqH7Z2mJAr0KtwDvzN1XBjGQEvD0KIvYHlEmBpyuYycvg1WhojWJpQU2VNY0ruInUii9x8jqTkHtlZXWOHxc82JcPFYJUMbqa986JBKVeq5VHkVNPpZam89oJDkp%2F3wvLf%2FZMNQhNp1j4oRv%2BndhS5U74M7TFK6ES8IPmEj9SBRaePYQ4yjeR52fr1gE1ejqkrKMO4XYNBr5H3fSK%2B0nTcU1TmpmMRsCfTOS7k1IvjE%2Fk2wu8dZhQL7%2B8LO4FO55fDVmKjLK9pltousmBtdIgMfUn%2BARhc7mBOb5W5leDzuyMchNAdB5MdthOfsuo%2Bb4zPkyUNH0i3W4hD0jhNuhcHJUlDl61wZoNLayi10vdpgRjy7K%2FGt0wToIErID7Y2FYBFWjgG%2FhV%2FIWqgZmxqKeS2bd6wTqzeGysT8CxSnq1ZVtfKaAi17%2BAIi5r4Mu1c7dQf3qDx7TDPvoykFTxthe0cPlyGg9VyKMWOms0j1tajbSTbvKFwo2AoAr%2Fw9kYcGETS5HCxaOaacbncFqdkCddLXcnfDCnjDy6tV%2BtDKmxl3IMgwsiviabsClRqff9Qf8R3K7jXAMekjfZbRQddEM7h8uZc2mwF2sEsbtmDXctlD11%2BoAudzxxCoW3Nn5%2FtXxdxHJZ%2BV5swjvbaxAY6pgFYNiWu%2FrXNcfzkGISx3yPE3Et7uk210oyLLZVv5WMi5JAfzd18rW7MEJ4zmCIygbiyxX6Thk0JqASy4mgWoYaswR88IXnif68OXYuHrGbyKK9dpTU4pxNBGwHNZH3a4CnCwXj6RC8mJvevrWr4Oqem6R79kwK5Z5KlLDySGjFx05e5%2BcLZYSWC4JadHOkgXg3OOgA3r9rybka6Kq97gow8RBXplAC%2F&X-Amz-Signature=26c4038352e1de26d3825b9c92b812bf4258f3cbef0367c290e5f6d1fa301ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH5GNPRH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICeZw6JScQXLPMicdCCQ6R9OviDlmXji5NwU9mr%2B%2Fbm%2BAiBNQW0XhN2eSCVhZdEK2gwCydG%2BoV25UAV2fh6J6kkOSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7NT0eqH7Z2mJAr0KtwDvzN1XBjGQEvD0KIvYHlEmBpyuYycvg1WhojWJpQU2VNY0ruInUii9x8jqTkHtlZXWOHxc82JcPFYJUMbqa986JBKVeq5VHkVNPpZam89oJDkp%2F3wvLf%2FZMNQhNp1j4oRv%2BndhS5U74M7TFK6ES8IPmEj9SBRaePYQ4yjeR52fr1gE1ejqkrKMO4XYNBr5H3fSK%2B0nTcU1TmpmMRsCfTOS7k1IvjE%2Fk2wu8dZhQL7%2B8LO4FO55fDVmKjLK9pltousmBtdIgMfUn%2BARhc7mBOb5W5leDzuyMchNAdB5MdthOfsuo%2Bb4zPkyUNH0i3W4hD0jhNuhcHJUlDl61wZoNLayi10vdpgRjy7K%2FGt0wToIErID7Y2FYBFWjgG%2FhV%2FIWqgZmxqKeS2bd6wTqzeGysT8CxSnq1ZVtfKaAi17%2BAIi5r4Mu1c7dQf3qDx7TDPvoykFTxthe0cPlyGg9VyKMWOms0j1tajbSTbvKFwo2AoAr%2Fw9kYcGETS5HCxaOaacbncFqdkCddLXcnfDCnjDy6tV%2BtDKmxl3IMgwsiviabsClRqff9Qf8R3K7jXAMekjfZbRQddEM7h8uZc2mwF2sEsbtmDXctlD11%2BoAudzxxCoW3Nn5%2FtXxdxHJZ%2BV5swjvbaxAY6pgFYNiWu%2FrXNcfzkGISx3yPE3Et7uk210oyLLZVv5WMi5JAfzd18rW7MEJ4zmCIygbiyxX6Thk0JqASy4mgWoYaswR88IXnif68OXYuHrGbyKK9dpTU4pxNBGwHNZH3a4CnCwXj6RC8mJvevrWr4Oqem6R79kwK5Z5KlLDySGjFx05e5%2BcLZYSWC4JadHOkgXg3OOgA3r9rybka6Kq97gow8RBXplAC%2F&X-Amz-Signature=01723dd8920dd75288ad394f84e825bb6d0bdaa44d8d0235ca520f14e83714a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH5GNPRH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICeZw6JScQXLPMicdCCQ6R9OviDlmXji5NwU9mr%2B%2Fbm%2BAiBNQW0XhN2eSCVhZdEK2gwCydG%2BoV25UAV2fh6J6kkOSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7NT0eqH7Z2mJAr0KtwDvzN1XBjGQEvD0KIvYHlEmBpyuYycvg1WhojWJpQU2VNY0ruInUii9x8jqTkHtlZXWOHxc82JcPFYJUMbqa986JBKVeq5VHkVNPpZam89oJDkp%2F3wvLf%2FZMNQhNp1j4oRv%2BndhS5U74M7TFK6ES8IPmEj9SBRaePYQ4yjeR52fr1gE1ejqkrKMO4XYNBr5H3fSK%2B0nTcU1TmpmMRsCfTOS7k1IvjE%2Fk2wu8dZhQL7%2B8LO4FO55fDVmKjLK9pltousmBtdIgMfUn%2BARhc7mBOb5W5leDzuyMchNAdB5MdthOfsuo%2Bb4zPkyUNH0i3W4hD0jhNuhcHJUlDl61wZoNLayi10vdpgRjy7K%2FGt0wToIErID7Y2FYBFWjgG%2FhV%2FIWqgZmxqKeS2bd6wTqzeGysT8CxSnq1ZVtfKaAi17%2BAIi5r4Mu1c7dQf3qDx7TDPvoykFTxthe0cPlyGg9VyKMWOms0j1tajbSTbvKFwo2AoAr%2Fw9kYcGETS5HCxaOaacbncFqdkCddLXcnfDCnjDy6tV%2BtDKmxl3IMgwsiviabsClRqff9Qf8R3K7jXAMekjfZbRQddEM7h8uZc2mwF2sEsbtmDXctlD11%2BoAudzxxCoW3Nn5%2FtXxdxHJZ%2BV5swjvbaxAY6pgFYNiWu%2FrXNcfzkGISx3yPE3Et7uk210oyLLZVv5WMi5JAfzd18rW7MEJ4zmCIygbiyxX6Thk0JqASy4mgWoYaswR88IXnif68OXYuHrGbyKK9dpTU4pxNBGwHNZH3a4CnCwXj6RC8mJvevrWr4Oqem6R79kwK5Z5KlLDySGjFx05e5%2BcLZYSWC4JadHOkgXg3OOgA3r9rybka6Kq97gow8RBXplAC%2F&X-Amz-Signature=560f2f710d69e48c588b933ee3affc401eaf065e1da813075b2e518c6ad5aa3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH5GNPRH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICeZw6JScQXLPMicdCCQ6R9OviDlmXji5NwU9mr%2B%2Fbm%2BAiBNQW0XhN2eSCVhZdEK2gwCydG%2BoV25UAV2fh6J6kkOSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7NT0eqH7Z2mJAr0KtwDvzN1XBjGQEvD0KIvYHlEmBpyuYycvg1WhojWJpQU2VNY0ruInUii9x8jqTkHtlZXWOHxc82JcPFYJUMbqa986JBKVeq5VHkVNPpZam89oJDkp%2F3wvLf%2FZMNQhNp1j4oRv%2BndhS5U74M7TFK6ES8IPmEj9SBRaePYQ4yjeR52fr1gE1ejqkrKMO4XYNBr5H3fSK%2B0nTcU1TmpmMRsCfTOS7k1IvjE%2Fk2wu8dZhQL7%2B8LO4FO55fDVmKjLK9pltousmBtdIgMfUn%2BARhc7mBOb5W5leDzuyMchNAdB5MdthOfsuo%2Bb4zPkyUNH0i3W4hD0jhNuhcHJUlDl61wZoNLayi10vdpgRjy7K%2FGt0wToIErID7Y2FYBFWjgG%2FhV%2FIWqgZmxqKeS2bd6wTqzeGysT8CxSnq1ZVtfKaAi17%2BAIi5r4Mu1c7dQf3qDx7TDPvoykFTxthe0cPlyGg9VyKMWOms0j1tajbSTbvKFwo2AoAr%2Fw9kYcGETS5HCxaOaacbncFqdkCddLXcnfDCnjDy6tV%2BtDKmxl3IMgwsiviabsClRqff9Qf8R3K7jXAMekjfZbRQddEM7h8uZc2mwF2sEsbtmDXctlD11%2BoAudzxxCoW3Nn5%2FtXxdxHJZ%2BV5swjvbaxAY6pgFYNiWu%2FrXNcfzkGISx3yPE3Et7uk210oyLLZVv5WMi5JAfzd18rW7MEJ4zmCIygbiyxX6Thk0JqASy4mgWoYaswR88IXnif68OXYuHrGbyKK9dpTU4pxNBGwHNZH3a4CnCwXj6RC8mJvevrWr4Oqem6R79kwK5Z5KlLDySGjFx05e5%2BcLZYSWC4JadHOkgXg3OOgA3r9rybka6Kq97gow8RBXplAC%2F&X-Amz-Signature=ad7524492fa5e6762c5a1537ce3cdfad37a9bc71302c93fbace8c00b8f4e6779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH5GNPRH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICeZw6JScQXLPMicdCCQ6R9OviDlmXji5NwU9mr%2B%2Fbm%2BAiBNQW0XhN2eSCVhZdEK2gwCydG%2BoV25UAV2fh6J6kkOSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7NT0eqH7Z2mJAr0KtwDvzN1XBjGQEvD0KIvYHlEmBpyuYycvg1WhojWJpQU2VNY0ruInUii9x8jqTkHtlZXWOHxc82JcPFYJUMbqa986JBKVeq5VHkVNPpZam89oJDkp%2F3wvLf%2FZMNQhNp1j4oRv%2BndhS5U74M7TFK6ES8IPmEj9SBRaePYQ4yjeR52fr1gE1ejqkrKMO4XYNBr5H3fSK%2B0nTcU1TmpmMRsCfTOS7k1IvjE%2Fk2wu8dZhQL7%2B8LO4FO55fDVmKjLK9pltousmBtdIgMfUn%2BARhc7mBOb5W5leDzuyMchNAdB5MdthOfsuo%2Bb4zPkyUNH0i3W4hD0jhNuhcHJUlDl61wZoNLayi10vdpgRjy7K%2FGt0wToIErID7Y2FYBFWjgG%2FhV%2FIWqgZmxqKeS2bd6wTqzeGysT8CxSnq1ZVtfKaAi17%2BAIi5r4Mu1c7dQf3qDx7TDPvoykFTxthe0cPlyGg9VyKMWOms0j1tajbSTbvKFwo2AoAr%2Fw9kYcGETS5HCxaOaacbncFqdkCddLXcnfDCnjDy6tV%2BtDKmxl3IMgwsiviabsClRqff9Qf8R3K7jXAMekjfZbRQddEM7h8uZc2mwF2sEsbtmDXctlD11%2BoAudzxxCoW3Nn5%2FtXxdxHJZ%2BV5swjvbaxAY6pgFYNiWu%2FrXNcfzkGISx3yPE3Et7uk210oyLLZVv5WMi5JAfzd18rW7MEJ4zmCIygbiyxX6Thk0JqASy4mgWoYaswR88IXnif68OXYuHrGbyKK9dpTU4pxNBGwHNZH3a4CnCwXj6RC8mJvevrWr4Oqem6R79kwK5Z5KlLDySGjFx05e5%2BcLZYSWC4JadHOkgXg3OOgA3r9rybka6Kq97gow8RBXplAC%2F&X-Amz-Signature=6bd6c77029bf66140e339b06445b31d42aff2625f04653f0ba921e99662e3969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH5GNPRH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICeZw6JScQXLPMicdCCQ6R9OviDlmXji5NwU9mr%2B%2Fbm%2BAiBNQW0XhN2eSCVhZdEK2gwCydG%2BoV25UAV2fh6J6kkOSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7NT0eqH7Z2mJAr0KtwDvzN1XBjGQEvD0KIvYHlEmBpyuYycvg1WhojWJpQU2VNY0ruInUii9x8jqTkHtlZXWOHxc82JcPFYJUMbqa986JBKVeq5VHkVNPpZam89oJDkp%2F3wvLf%2FZMNQhNp1j4oRv%2BndhS5U74M7TFK6ES8IPmEj9SBRaePYQ4yjeR52fr1gE1ejqkrKMO4XYNBr5H3fSK%2B0nTcU1TmpmMRsCfTOS7k1IvjE%2Fk2wu8dZhQL7%2B8LO4FO55fDVmKjLK9pltousmBtdIgMfUn%2BARhc7mBOb5W5leDzuyMchNAdB5MdthOfsuo%2Bb4zPkyUNH0i3W4hD0jhNuhcHJUlDl61wZoNLayi10vdpgRjy7K%2FGt0wToIErID7Y2FYBFWjgG%2FhV%2FIWqgZmxqKeS2bd6wTqzeGysT8CxSnq1ZVtfKaAi17%2BAIi5r4Mu1c7dQf3qDx7TDPvoykFTxthe0cPlyGg9VyKMWOms0j1tajbSTbvKFwo2AoAr%2Fw9kYcGETS5HCxaOaacbncFqdkCddLXcnfDCnjDy6tV%2BtDKmxl3IMgwsiviabsClRqff9Qf8R3K7jXAMekjfZbRQddEM7h8uZc2mwF2sEsbtmDXctlD11%2BoAudzxxCoW3Nn5%2FtXxdxHJZ%2BV5swjvbaxAY6pgFYNiWu%2FrXNcfzkGISx3yPE3Et7uk210oyLLZVv5WMi5JAfzd18rW7MEJ4zmCIygbiyxX6Thk0JqASy4mgWoYaswR88IXnif68OXYuHrGbyKK9dpTU4pxNBGwHNZH3a4CnCwXj6RC8mJvevrWr4Oqem6R79kwK5Z5KlLDySGjFx05e5%2BcLZYSWC4JadHOkgXg3OOgA3r9rybka6Kq97gow8RBXplAC%2F&X-Amz-Signature=f326ec4002b98827a49a3cc52b21aaa69b522f70ad6d396b8aadd063136e8f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH5GNPRH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICeZw6JScQXLPMicdCCQ6R9OviDlmXji5NwU9mr%2B%2Fbm%2BAiBNQW0XhN2eSCVhZdEK2gwCydG%2BoV25UAV2fh6J6kkOSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7NT0eqH7Z2mJAr0KtwDvzN1XBjGQEvD0KIvYHlEmBpyuYycvg1WhojWJpQU2VNY0ruInUii9x8jqTkHtlZXWOHxc82JcPFYJUMbqa986JBKVeq5VHkVNPpZam89oJDkp%2F3wvLf%2FZMNQhNp1j4oRv%2BndhS5U74M7TFK6ES8IPmEj9SBRaePYQ4yjeR52fr1gE1ejqkrKMO4XYNBr5H3fSK%2B0nTcU1TmpmMRsCfTOS7k1IvjE%2Fk2wu8dZhQL7%2B8LO4FO55fDVmKjLK9pltousmBtdIgMfUn%2BARhc7mBOb5W5leDzuyMchNAdB5MdthOfsuo%2Bb4zPkyUNH0i3W4hD0jhNuhcHJUlDl61wZoNLayi10vdpgRjy7K%2FGt0wToIErID7Y2FYBFWjgG%2FhV%2FIWqgZmxqKeS2bd6wTqzeGysT8CxSnq1ZVtfKaAi17%2BAIi5r4Mu1c7dQf3qDx7TDPvoykFTxthe0cPlyGg9VyKMWOms0j1tajbSTbvKFwo2AoAr%2Fw9kYcGETS5HCxaOaacbncFqdkCddLXcnfDCnjDy6tV%2BtDKmxl3IMgwsiviabsClRqff9Qf8R3K7jXAMekjfZbRQddEM7h8uZc2mwF2sEsbtmDXctlD11%2BoAudzxxCoW3Nn5%2FtXxdxHJZ%2BV5swjvbaxAY6pgFYNiWu%2FrXNcfzkGISx3yPE3Et7uk210oyLLZVv5WMi5JAfzd18rW7MEJ4zmCIygbiyxX6Thk0JqASy4mgWoYaswR88IXnif68OXYuHrGbyKK9dpTU4pxNBGwHNZH3a4CnCwXj6RC8mJvevrWr4Oqem6R79kwK5Z5KlLDySGjFx05e5%2BcLZYSWC4JadHOkgXg3OOgA3r9rybka6Kq97gow8RBXplAC%2F&X-Amz-Signature=6fc2ddc3561c702ebc8387a6a8389b14c681f166e00ee198f66fbb467b013dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH5GNPRH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICeZw6JScQXLPMicdCCQ6R9OviDlmXji5NwU9mr%2B%2Fbm%2BAiBNQW0XhN2eSCVhZdEK2gwCydG%2BoV25UAV2fh6J6kkOSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7NT0eqH7Z2mJAr0KtwDvzN1XBjGQEvD0KIvYHlEmBpyuYycvg1WhojWJpQU2VNY0ruInUii9x8jqTkHtlZXWOHxc82JcPFYJUMbqa986JBKVeq5VHkVNPpZam89oJDkp%2F3wvLf%2FZMNQhNp1j4oRv%2BndhS5U74M7TFK6ES8IPmEj9SBRaePYQ4yjeR52fr1gE1ejqkrKMO4XYNBr5H3fSK%2B0nTcU1TmpmMRsCfTOS7k1IvjE%2Fk2wu8dZhQL7%2B8LO4FO55fDVmKjLK9pltousmBtdIgMfUn%2BARhc7mBOb5W5leDzuyMchNAdB5MdthOfsuo%2Bb4zPkyUNH0i3W4hD0jhNuhcHJUlDl61wZoNLayi10vdpgRjy7K%2FGt0wToIErID7Y2FYBFWjgG%2FhV%2FIWqgZmxqKeS2bd6wTqzeGysT8CxSnq1ZVtfKaAi17%2BAIi5r4Mu1c7dQf3qDx7TDPvoykFTxthe0cPlyGg9VyKMWOms0j1tajbSTbvKFwo2AoAr%2Fw9kYcGETS5HCxaOaacbncFqdkCddLXcnfDCnjDy6tV%2BtDKmxl3IMgwsiviabsClRqff9Qf8R3K7jXAMekjfZbRQddEM7h8uZc2mwF2sEsbtmDXctlD11%2BoAudzxxCoW3Nn5%2FtXxdxHJZ%2BV5swjvbaxAY6pgFYNiWu%2FrXNcfzkGISx3yPE3Et7uk210oyLLZVv5WMi5JAfzd18rW7MEJ4zmCIygbiyxX6Thk0JqASy4mgWoYaswR88IXnif68OXYuHrGbyKK9dpTU4pxNBGwHNZH3a4CnCwXj6RC8mJvevrWr4Oqem6R79kwK5Z5KlLDySGjFx05e5%2BcLZYSWC4JadHOkgXg3OOgA3r9rybka6Kq97gow8RBXplAC%2F&X-Amz-Signature=1925bd2fec21bc25428bb2780b2d372185b34b7ef7c38f7245fe0251a8b891f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
