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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=cede87d1e0e16772f39ba58ae090eea5d19e145493e101c41d015f575a03402f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=995317eb1a73c7a177ed6362ae73114c7fb725b576e9f882eac6adb22e09a27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=eb58b3b759a1c1f2dc03870b0c2271efe65bfda7f313ebd6b34d7e3ba9ab7fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=89d0be480647c821e28f349ec876d8ea6128bd605156752cd81ab0ee6dd12466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=f2f93eca61e48ac1e285d953c910b62d8ada19e75991b1fe3225a57b1f5eb3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=f3689bfb31cb08ef53ddf61da040e6e9043bfee19882f7c7974790a6b9401c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=3fd52c365677a9fb2f659104d460cb35a2a06dd484b1a7c16bf9153cb60be5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=dfb9fe47c6ffcd06bb8975705dcf2c3c1f0eaa591a97320166c3f64e68b79072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=7b7028ccc3e442b33e5dfa974ef029ea8551a637b65fb20c1ce2bb8aa0ab250a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=72a7c73f8cc7faaaeb547c1c923933d0d2fa7a80a91571afb7523360ac5bf42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJKMRUA%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZT91Th2Z16dq3me2lc28R%2Fe%2FTBpwakMqa1D287D6FoAiEAueOTvJx0JAc9efru8gQAnQwmqQKqvGI%2BNN9SLBrtr8sqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIL3MnoizhNQM%2FBmtircA632ewFCDiO7FZft%2FDNclaFqZaffpozJRIQviXbv6r2LiB9wQYYpnhJs%2BHHgvyooVG342Bfb2YWszAm%2By0mN7bWydXTUuekhfnLW8XObuhVJ7zk4cyZ88l8M18Qk88HOq2PZncq3Viu%2Fbw87pq2yUxqe5Svr5GAsgCRPMbbN7x9OLblRSI89gzujouTue9UOfX1AYjIeGyLgflMpiCib9Y9LEqpRHO7Sw07HH8M5rRpyKvHJsqb2CXJNXoUJtHGcAfnsbKaPALfwpuk38jl9P7PMMBZRC7CdlaDKAw7bJcbJN8FJWanR9UiwQwdoQn%2BmxBtqpYDh1SOD1w0ZX3mvd%2FY46bAnTYXy2fkcQjbt5GPMPZNogFT48c3viHYAEexyYul4sj0HIx3y2xglgvb4tgbwjwTsFft9tmh0v%2FDctzGjsCg5%2FHInqmGPq%2F%2FiQIVUBgclBiqXFdJORCFvfkWUa8WFUtSx2ZNb8AvvNjHaTIobC5YuqANsXOVH%2FJ6s4tbfjWzAMknsozt3PyeGaNmTy0BF8m3UpnLK9LecqE3qbjeuHhbVyeyPaW9MVGc16umht6HRtjb2lAS0zffRRk3hTYgyU%2FRsVnGg6R4evdgs111IvQ3zOB7M%2BZtCDy9fMK%2Fz0coGOqUBB2jPjeHn5virqYTNE%2Birz%2BMc4YdHuD61ZaCLOkjLIVZ7MQJXs5we4mPTOMgZGrrlqQDpqxFRWWWkeEvUszKPLrXEQp2TV1F8qjIT27%2FHgJKBJpaYAJOO0UArAyG1PZHSmHOU0rZWj3OHmBOuVR3QK0t9FdGbIYc25RfUw5T7zxlrIkQjwRF5qrSgMGDJ%2Fn1P5xqF5SxbKZq4ol1y7qC9LYRVGLHo&X-Amz-Signature=b19d9882f339ab9c301e7537876f417f6b14745f888a992d004b1d359638cd83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UTTBSPM%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIdDiJzzYEQrrCPupKuETLVSg5es2wjTxvBlnDoxbSTAiBM3IjByDXKw5uNISLmdRE4wERzAhpT%2FSTwMKi2qgFa7yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtop%2BfNum6zO5XXGzKtwDFyz48j8lcFo7cCVfXQLt%2BGHuOJWSUfDiwJaVdrexIOY4Cjf84cjgnIU7y5PvrHzvfpAR4Ugpz35EAnqZNlBVmPH0bhAlDt6DYCNXAsdFOPyqKZM78pWyht9L7TKzIqun28uRkqW1B8v4Xr5oFUrGtiC7h4zrvpH0D9Q6dN9vuhxgCpnP9BESWebZzRwzeNTkY1Gr2YvYyh2DGs%2FXUKVj6Bka1PEw%2FMhuy6gUpRfmNGWy5wfAeu9q09ftAw1O8QfAGcoyC8lCNUOisT6MBjZ8pY2DZw0b5iJIAhlYkuKWN%2FCowmLNpsFg3lxu9Yzlb00MNf0tf61cpB2AJj8R0Azj%2FWfRH25AgDBIUPrNDdHqgAhY3qAURtrvqD5%2F8TctUmVyBDO7uYhmAbrNqHcnLIjbuoGGh1PyJ%2BaLP7%2B20c6rtcjfJXVrOJOFQFAqawkDwfjzhdFw7JQG8Cl4QAiZXOFUUlg7qJUVxV8WaDyN78vkfMeErAnI4FwZLkOaMUeAHtUtgc70TqO%2FxqzqlzTL0A89LA1ia80NFPmYuGp3NhrtoRMX1lAjLXGoX0BjJzxRz8gr2AYsjIrX%2BCBHStva3wt9SSCfQ4CBWMDkNhut%2BPPj696lvV8e1rNE1FxHQocwuP3RygY6pgE1c25ZwD1RHmwPRmXkgjyOQSNn6YU%2F4z9xKzjf4USm4SaccmTmoxB%2BOMBjA%2Fi9eKRnDl6T7AeW1bYHpQsaBQz3%2FDdVGYWT0FFpYUC0%2BCbFO0A8%2BIFvzzfK5Kr61U8sQTVVNFg0rtmBEWAyvsH9va77g9ojOI5BvNBN1gMW4kIlwU1jO%2FXxK6LKHpe3H8CCVzT4tBjzoWOHXUmI3zf5WZVOsFxx4avz&X-Amz-Signature=57c021103a38d1d7cee040d89aa34b12fa7fa5fa63583d29c474a566e111e3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQB7J22%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7%2FWIFx%2B2XX81EpDyFOcQPY0qStzGSKQV2s%2FR55mT4WgIhAIQpyB%2FaToPdkrzl4ZJd3m14m4uNboCjJwLsM02DldAXKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzij8NgKscAEwGJ9mEq3ANXsRHBujUlrKoJ9cVjzBRWFjEa06A8rCdU9WeBnQrlB6DWl1rcWjGNkgBvjqtepKkkbmNZ4HsjH54xvxRzVEoLF7t5aSUVoHYx%2FN61cJMB7jx9oeSq8knPkWvdb8W2sZdQ0bnK8L1ROhcOMmwLu6S%2BjUl%2FRiJZhZ4D5tLFYFy8Tqm05d82urVeTWqJWFRAHdwzJRNzMBy%2BfE7YDFQOTRdkUutY4inyHG2k%2FK9cR4msHENtVo2wSKqjD20%2B%2BGy86bWP8N4ZzCwSr5JveDlTFaymjU54Zc64FZYKsM3uie3atQx8gagw%2BWfuN6eEXDoRPENndBWa%2Brs1%2BVaNeIkjs4DDTPzOmYG1RavIyoIAIQe46ZdccqSg3ZTDjDc%2F8yXbXty02Pvyky0c15YfAYyiziz2UcHQ73rJnjenOZwAxCuVQQBxVfondCZ%2F1yXnxrStgKLhlrElv2jGIZBaGsPLdqRj0we5513FK8FYnbj6SbvRmCC6ImjVK6O%2Bo2d4yKj5PSyTb23UXrmBXy99W3gl%2F4n7C8Tx%2BeGIcxP7Z2c2%2BiNeetYvOqCeHMHXgTuaSs63oN7UupOHCWNYbod3vgMUu6frZrbbefMhX8sskqOg5SEPV829j2DRf%2BXiYEupoDDJ89HKBjqkAYANaGVmi%2FlCcAuf1m%2Bi5RTLA%2FRcw9ow4mWMXHwBg0P2V2g8kF%2BWCIIJlV3rO7nQom2A1Nepfk82QeeAThIz8jdtp0fCrsSIeXL3GJmtkoSPfcIDRR8W5raCAzeGIYZCu0J7fLlD%2BlH6APuD4E9ZqptPGWs6DcNPnPeYWM3reGcijRn9NFKbW9rAejRJsIbGpaavPjZ8SQwsEeg37ckDmlLl2QmW&X-Amz-Signature=4b6a96458c48a45fdbbcdf5e2ec8b362da0bad98929c9c85c1e2c545eb43ff2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=154f238d04ab46cc20ceb5847a5b48ed47de03676f78eccdd7a23e7756b06f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674B523PI%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXfY%2BVQVMIDVucQR4e4Uon4bY4j7NtJL9PDk4T8NdgSAIhAMJy3hVfkEwLvlu67npETvoUxOmd0Qppfz9UBnv6GY9mKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHPyx5B692dYZgL%2BUq3AMOskh%2FQjgtmK4gJ68s746VAI%2FUeiZ8KcYTpucXGE7gMxIKbUFxjdcxkuWJr35k6v4x8uaS4uvgQxkCuxwMlTKfk8k7rfroLWeUE3RSMdiDlIzF01O%2FxRMoequpEI3zPjrv%2BJeLghiBtxuQ65uCiXcVeqdmvsRkyFT2rxm4ECikDe9kmo97F5YYHHDtemex0U0GLl5vv0IB6v0kbvJkBjewMRNZQwaDAeyABaajX8VqSj9R0ZwOsB5O3hPXavG2M%2BDLPR2g%2FEasC6zxe9A5XO%2FXTmi6GxL8GPJ2VOf08tIl3fd7AGUiKTE00S1yZE2YHwnRU6UC0tZEP9AZyM9zYAYWsflZzma2baH%2BewlqEBjTB%2F82u%2F9Sek%2BMZr4gfht4aJi%2B92xHxtYGRgtNPSM%2B8T3o8Jb0lK%2FSjjvEeTSdkheaR4iKLSxa8nCJU0geLJWjB9FD1WGm%2FnZshjmn28UcL4ZoglHkLfC0Vx9Di3a0BDc7wNRMcVUePNHEtk5g7VGvgmUnel84iFmgoSwGR%2F9GRFD4ZUpPAjxsIQuqyydrvkbMzZhq732z7EIoEUvZGY6W96PKQxnNiQSB5KW9u3G8QO91S9MXWrblpIjsAFJ4r9DIUgseUe%2B3TB2vOv96%2BzCS8dHKBjqkAZs%2BVFr3IK26SF9PqD%2Fl2jL0xjc4XXch%2BCiiGg04ngKoCz%2BSbXkRpinAFF6J2qgYAzNIQ9cE8G02z5HLpPcv9cKMjzudcvT1klXDaqSr3IbeiIvPsGVphj2zAd7SeyWvyqjMOveMqhb%2FmOu3hioUZJMYcftsRVSat9j45Te6KhtpiN0gfdBKAC1DHHur0QMMr1%2FSj8dMrc%2BKB09iKImWp5QsGD2D&X-Amz-Signature=ed91dae2f90be5f59e526e46471bc51608e83e00f039e36421358d0e16df316a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=8049501954227d51e39ef99503f679ff9b444a78cdc4dd7b6dade549b8e7b979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT5FTNRT%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA69SWU7Xb8sM8ntQGFi5oL%2FEWZTchelTjCTSVgJLLIjAiEAuDjUn3wPb3lC0EibkJBgSlaolE%2B3btEhYF24HOtWrwYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOW3JieWkV%2FLkN%2BUACrcA5kQKbYDiv%2B9KyuJORzyw2J9JBA4mDBw3AZsEUhCa2sXbklLUXcLp%2BSP2qChFYt%2Bm9LntEC3uugq3RHmhk1pi3c4VhmdJnhf1uJxOlPjXo5slJY%2FwGCfhJ0%2BPgh14neKKUaMsdO9cbyaBMqEaQrMkBcYzwgRK1yTvEEGfape6PaPaXmue5sCqOstUuCrYEHeUT10MHqbF0KUfrE6VgxvojvHVXwk2uvzBaM1cw%2Fue0%2B7oyrQQE2zmBfN3ByLgOruyd1QZDHDVcTQiymXfHKqFis6SZPrAtoaAb4f66N7OltpTuOYHRQM8gRHmRuPAc1X0hucTX2GpgtttCIQzCjf%2FHGlMa0NxIUGx%2Bg3vNxvlNQhph0dkI8E4RZwBoCLVmp55ZbdjmK2W4tAcbjdh9lhQAkWnjzcmei6%2Fu00KThy5hMA870H%2BvbQlQZSsfIQ4F3x3X6tFPcJpG%2BmfrzPgvDSFWHznFiWbHVo1QVDPk%2FWmSpOIAkvfkdtS6OLnMnbHjEH%2Bdl4S%2FjBJSXa%2FxaaNFtI509QyifQt%2FSj61TaOFBQ2Thn5GE2N7b3cL4iSDxGkFK%2BkP6BeFhAn5gQAZDP7453YxJZChFJw1FeFufb6ouZ4cDSRlViDnoZ%2B%2BNlRYcVMJPx0coGOqUBjTEEht%2BkiRiz5GtYCfxteawNUCidWYAG4ItYYpzIQnRVRexQVzYldUVC8HalsuyySbanPGzcVmeUwjGjRIQgqLtQBvvE80Ekl7KV0WDdJhkh3rpINE6ajHFoIXovSgt4bEUAK44%2Bxtncl0DkShaX0BaHE%2B6wIJDBtHmnWlGFXTGNAfNT%2BT0J3lIkJW%2FVZZuwmgTflbdCDyddscc2IuR3zCvxIO60&X-Amz-Signature=c25762ff7f52f66d4b0aed58f9d84c5912baf7844735f45cc7fa0ab724289271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=d44ca5976a56d899ca76a8c005a928a255cf080dc966b0f8ab96062f7cbf40fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCVRGUN%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxA3x2IxoMz81NPKAVp%2BwruoW7Jp%2BL9KTYL9mbr7oWeAiEAr7ExgABpAdBUstQs71aMmJPWuT4EMnlhB9wfEkeXaxEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDX8Q58r74%2BaIDkDqSrcA%2FuKpi07C%2FO4kNC%2FOa6m7p3Sk7K3K8VglIMhUxSF9W%2Fj8Ll2bPh29%2F9GTi2aff8sbviTAB0XHJAx4fay1kipt9V5wydPvocT6G3cHp8z6U%2Bqsy3vOD1eafI%2BiwuXYusIK9UsjQXCAt90beRSufDSKmdVhTAe7smVybARRYMJmaO0Gr%2BjkN6X18Ef3uIUdEnG8cMX7kFxXjRL%2Bc5GV%2F9LJVLpFUcogTQnBiyl8CNxDSdi7FEpdjD6V1X2qMvCjGppQsUkIPgpi9diU%2BI%2FDsGVEPj5gG5OkfTp50xnrkfIZcgETbdV1BOo5wrdpdzffuAO5ftFlxc%2FonXHouKYQpiZI0hZdda%2Bq5b%2FkHuq5jlnPUbEy6AXJRuXh6Va4yci0i%2FFAJ%2FepZfaLMM1LxpSaFJt%2Fs3RU07Q7sYHfE1UkHocz26FXTrBmhlykzk86mb891g5%2BlfBKlw4ILj2oQ5WYwAGlaB3zTf9xGSHvf%2F0fy6CoUqII9nG7oZ6HKNw6u9Vh2a6OiC0bJ9NQrtJ8jYYYcjD0C0RAf%2FuWunvJHsx%2FvzLUbPwMLycTOWfAAKkWxw1ClM3pgFkdI3VkE3CpnijIAqobX5AMnyl3Jw9lgiOR4IZhkVBD2ANrUT%2Fq77Wq%2FkPMO6B0coGOqUBzaxCgKynKDlxv93%2FoYm0O5i%2BNQ7v2fogpFjiLZs5TijXxqCxSayQJ7yq9GF2dlJqOc5dcKH4VgxO5tj4pyWd7UCvL1trn38qImRtYImCkzxls3blzKSsyyim0KA1VUul6tQjiG3NXS6jtVyAU9PRWuX08MS2oqe82wMVG%2Bo2gy7MD26iv5iSb%2BJ%2B2btSJe290GVSYi4ucTu78xp%2FzjSuCS8Uv7L5&X-Amz-Signature=cf48c86d77c9ea866afcad274c455d936927f71560709d9e806d06650cdde8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=2c40853f23be0d6d511f821da75fd5cff4fbf9a2b1c2a49a9daed048c2251518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCTZ4SZ3%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyWR2cgOUbWFZcA57GQ6p37uN7JTgCGCwjjnOdPeytaAiEA0%2F45%2FMpUIq2diiqKgcTR0RvK3m%2Fa42LeKx3qafZvJdEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzG5nBlNxCadmK6SSrcAwXM3fzBqhZWNybfsMR3tYYBmyBc%2FW6dIYtZ6bGCF%2BI8oG243wNeVoJzTOpKWCTBrJpIEd30r2NZXomKK%2BpXSLnbAF46Rp8nL7G71%2ByDybNDsAF7RTugef%2BO0FZbZ0G46xz%2FOupuNvYB9%2FiyMQ5x7Zt1IY1yVSZrRk0AlJzhkenDK6a4afO69tXyHm9LQCFJXtqqgZBUtZlDVtCaaz4ppa%2FKwfwfUBs4WjGHy6yB7aaw%2BPonfkjVTcSXLk7ssgeZATCtF6fNUmWIHIM22iiG%2F3HNh7SZZnO4O6EXlNNCv3ShirjaowF9HkOWOWD8m9sScH03aJW6QuTdJgG2mMWufT1jIPh2UxzNvxF%2FfVSa9Rx%2FWM66UC7vFL4hDryTElvQTy8lFZ3jFYGEW0bDJBr8qsNO6BSmTd3RqB3OOEGleBBaApQjxi6E9O6GoalRRodbWP%2F7nRlGAtqVED8a6kfM66yDCfF9ekkIjO7iZ415HKUtOdmwt8PjNTfaH26TUltagiXFYOJjEK5L4UpnVzpXpHKKB%2FtiSFod4estWMwBvJYSs4f5NSO304WlL%2F%2FoFpG45qV9%2Fa9199clu8KYhEhLinYFZmV9lACgbJ0%2BTykLyWEgQKR25E7Ghe6R8iakMKP20coGOqUBPkL%2FFb9c%2FmRSzUKAJV970H6JfiR9zTlrZCufw3vIHfEXZ4d3Hu0ojHKJtD8NKyXQhKfQbv3ndff8bh4GnqJH9EgbTmddcUXwngdQkwMwq3E8qtw7MQLxJpNaFx353au5TTu8bTBfLFJ82iMAkQTDL4tnZG%2F2mHllmzr%2FA4PaV7FGlXx5tlPIE2jzBF9FYteBWJxu0UkSUU%2FCYSPU56bsyuvOEFx0&X-Amz-Signature=eda0739fc7c16d68d9e002b5c18010ae3fa2988d6696d275bfade9bf76cad896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=c544030336662cb3e982b6eee2487bd65b38243ed16abd37a74c95d97d9c8ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642PV4HZM%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8fOSDTdYQYyhngQRrRmw0CXkytoRAvWNml7xnXlgFGAiEA5cZCyaE6fGgFRuOIG9boy5GlN0E1F85jQZEpDRTZuvAqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmKsKB%2FfTymjFjeDCrcA5P5AgEZcnCD0tfmCclL6WolwWXKnaOoJxgS6x7%2FGPAqiJTGWcYqWBDrJQ8Qi52PaZfZ61yrCagMxFZNJRKC7gAm%2BnkYWrEd5obfHyAjinIerxEn4sBSqBnHBvJK%2BJd%2FI0YgJa58D71QUdbFavUwr2oyF9BucYZ374o0FdYmHkTvthbX5d2PuSyTLH%2FBCDi3%2FMuxnYTF6VEh7mato8caUz6GCAYo78ALFI%2F%2BbhkpaIJB6A4vVSBnIt3LhfOeXKM2DFAS%2FExS6CXYZdLkAJUNj%2F%2FL6%2F27suHrj3drjSiQRnRLJS45vLreyv8%2Bjxs41ww3N0ILPWeBMcat2irr834W4sYOue0pt3jFwy1055NiufLs3uinuRYNlMOcskF4vkohMPFnWNr9H69BRZFh5nVJDZ%2BUcqdm1QvwXolrktBtp4Txz5Y4UJVSfxLvURNqMyAVWujSeHw%2BYqqivFJ9jlXzpnKVuip3V4A%2BmNf1kHjgiU%2BQwdse2yrWTCtfmrJZBjFx8%2FNZ%2FLzuVW72Esni%2FOvU3VgYNUKjcYyuqcVbndjszN4UelPuuxDLybHjyJWcDAhaEw3IhDRiWMdK9Sc%2BjXWtUJYieZ1Og5hQ%2FCiQNvzxypclDArtGSfrikd3mlJ3MI710coGOqUB14lIL2hzENYaL3zvd8LSaoxE3eUP0FgUfS94IwClhUrrnZRwrhd1xWJ6uuGpQN8R0YGTSLSZc4oWsQ%2Fu6fUcq6llVZ45M2fiuPBn6qKpU4FToj0ISz8bQATrIveZlRXcAIs%2BR1VY9TTV0eCWKe2M%2FWzQS1t7JUnltQznju8BKL7lgzZceta7jxWJPmZqkeUdPqPBI6689STuiVZukSsmjL7uHFYw&X-Amz-Signature=139fb4e3871fc977f43d0fffcdeb75f98a008e05a54884d5f25f50b40a913fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MP435V6%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsuAM9Lv4nPgWapzae7NscmzZkPdptZ9b9CShue98pJQIhAM30J0sBSHT%2BdmHq4Z3Rcpwq6O%2BcVAwPkNCdlwTu9rfdKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJC3LLZIbuQpCpdtIq3AMiI6VmA2X75gCdMnerlfdbhEBZ2YI33%2FLRSIod0DQT0RtdoAoGt%2BZIQrdM8HJPSW8AzuRiVxEVy4oSC8o6zWFkSydTOdFkToWEMUn%2F7vKxkndWbYvr0eAc2yDarQeNHM2mPyeMJIlCPgE351MEGuSESxNQLJH%2BnkoPCwGAPUlrb3t%2Fne2Rm%2FZh6jnuOFbqPmmGtXSvk5Sr8y6s3dkxg7ShBHAPZr02hDidwtZSfXt6WoHX6pzr12IKkIRy3pxtF8Eym%2F5y1P4zHWbabEmokKCn29sWoOlRPBAeRDanW69xLJ9xD4kgX9R7RgOU0WKlfL1a9yIB%2BNsRcM5kEL1%2B6C8kVSsoWMIhatZ0Dtu3ddWn2NDlOB9EAc3QlN4BqCV%2BEtHc5Dn5VW1sZUg6fBikVn3qPm5KUyTSkuVb4QD27Bp23MTBeb12BRmXfiNsU46fYRf7WnRoR%2F42s7TTb4xdOFA50P%2BXwede5KKU6Hro%2Fe4HlO66QqzR7bQuNNFzvaaeuHH8mn4PxPbgoDXttmmDtrOyvWNq%2FMm5yzhP5nPlbX0J7ux7yKHPzeyGXUG%2BRFmVaYCa541jc4Y12eAFYD8kRm%2B4EvcRcltqo42ba1SKzyMxQxOATqz9dcycmGZrrzDq7NHKBjqkAYICLcGndFCMvhNYXGqbCqoudIUxbmk0difRr5NehJhUOsYuvsCv5%2Fk6Li9AV%2FlXj4rQXkAnfpfgWMuyXkiHl%2BPGGjGDAyuAHhZ0cJVf8lv5YIiMm9yd%2BupwL0BzOmmIRg%2BT4vBxPIrrCiwuCjhhFbOlQzkV%2BCJ0S3VJ0WXjJ9mkRTSCR0X9kBRlF1u02N3yF5iY8opzsCFXbMYeFhB6Bviwq7SJ&X-Amz-Signature=de1ec9843719a2b6384f75cdb1aac705972c80c9a7fb7cc72cabfd2f5464486e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIPTPPJN%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLFlmKb5aM1FghjYCSfi9ns%2F0G%2BK62ri6qk9bNarCzVAiEAm%2FPjnfeiuDB4OkysPM7yj2Fch1zGJK55U7LM51HIZm4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOokhzlJRuW67H2MzyrcA1ybd41qk%2Ft9%2FKaG8H%2FbpORE0T5KObIZquJ8C28INx38Ur6ySx8QaiEsCS3FYnudaCuvgfR2kqj0La3C6UrxS9erlefkEtSXqLpFe%2FL3BGq%2Fl5%2FW%2Bdm23vbnUzUf%2BwUgD42V2hZEFgjsFY2vYG7uoB0ClYnekvKb4E7pjg15sNqkaiC11QN%2F%2FVgzC6xOttIbm2JP6yarxYoaDxApqyZJkmF1TGdbQAhyWklRe%2B3qU3UIjDbvFNRAcW65znN9w%2BRbrJGYqMbOUs0FtIbJzapWjBP9FeZMA%2BZOUDtQt98WygQkcLq7xAQtRGJ3e7hjBKl4KjfwDPu1o1GNHQ1yFavQY19Vor7ItX1UreBWmastSs%2BMuqq1n6Ujutnq9Yz%2F8tEmQVx%2Bt30M8Js3zyiwIC80Bsd80iZV2wq%2Bm6aeq7fJzNV04pfcD0DtyBwzXi4CnXFnlwMracs6BUvZwozxw0ZEhKIx4n1eTtlxLx20in32KkrFPvKWnzWJqWbEjEUQP3xW0BLBwEP82Q3rFEpMF%2FB6vtWzpzWAp2CrSJM8jK8Z60iCkJ9qu5emGvdZ6XpdZrwyhnmYq0jpuZqvM63DPAzwXrqA1N78stNhKvzO7%2B%2B8rWoQWRkYbiVE96rwwoCxMKP20coGOqUBjUMNp7dMv%2BPW998UlSfxBm36K7lr3h0uXgCbeCe8qpEwIYikfABFrvjTFhA5sikC12x5kKKeLcMNoWWEXrCtxOYQh0zqqPlTHy6hmO2gvIgYVfexdzErNKn%2BVQJb7Ek%2FDcTKYENVzCqAGfeR6sEob%2B49BS3mYNT%2FjGvDPIwJaY%2Bd%2F1%2Bc6HPdv8P9PYKnyjFmzO24ZYha103fqqw6mZI9xv1SwYS3&X-Amz-Signature=91727e6f5c906fd2cc32ce7ea2c34cd2cc06c1c20f0586bc1c7117bb1992f2cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=72760940a29bda3bf8e12761e1f9a64f69d386d8c1fbc592f31545ddecc05229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJOZHS4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTTaBcAT0PxEUqQS6Xq%2FiKNkH%2F7DbVoas1ipbB0IKMjAiA2V7MKhtbQ02fF%2B%2FE6Rw1zfudZCZ9bdwfL0pgEvgQELSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyVr%2BAHBWWx3hST5OKtwDsmtsoFmHWkFesuDh6iGwUsAnWkBC9DlvjZhv5FwYe9sQXLtJBex88IieDivXvRK33zto7kCOTdIzCST7K%2FUoHZ6I8fDdUFxi1RojMg14oVNyi8KjBn2fOWL3MKP5h8O%2BUPUzZ6cS%2B%2F%2BjPYD8tRcsMrYw1eI4FlUVQQOJU6GbtSUpXd4IUyGoLc142HEpkQk3d7H%2FVu2Pm46T28riwVPCXrKZDuLrgaF75u76HfTwovMxYXtd2nbb8GVRQ6%2B7%2FhTA6M6i5rpIMZZBsXkgDAr0EY%2BcYzKpGhqIxm%2FOORCGd4jSgXs80Hdld2ezYilBN11IFxLa665wnVYF%2FlXyPdGqSeMOPiiingVi%2FaRw2DoTK%2BLAurzmFTTKhQVWHkKdjAuGUc%2FXD0wsLDSQEYWMiukwAvAz7b6c4OooFz27AL17ySeUcWpYVosWvLZzaimLbxsrhQB5u8%2FsDYQzR%2BwRpF1GuF8CR8CoELk0M41QcjBHdQ3yNGWgJl1rDSdK3RZBJO9%2BHLxJOmyY20XU%2F05xU2deRbnmpyghV7o9wCktmbqNJU87X82Eb88Ber5y3Vmn%2ByyQjrh0wHF10oFQhUtYFyV6Q1vSrzdydoqral2WmOedAGYCXje1TRaHkhtVyJcwnvHRygY6pgGG%2FDNftNl16BQIhvBYAZZBXd%2BicXsBhlQlzUjz0yeAXQtAqw1ZcY9gT85gwMEasAcIxjEai%2FxG2btPGG1IlKlf9yFooLq0OkxxTodNHrKRZYXjQ9SWr%2BgQKDsuDv2jEv6VKe8sVd5M5kZhQ3RcS1z4PZpGRhYRfI%2BvcdxkRAk0hQs7wDABoJ216E%2B1TaNRSDuydZhs94qBxAXSzFvRE6ON74jGHTxE&X-Amz-Signature=cd2fd1ff2bfd052467191f9d6525c8f2c4994d9c0169aa6307dc067ff7991143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLGWQ6V%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5NdPp3aB5RG9772qUtA6ifCBV7Fq4dIU9TPLpVAcdwIgOzuJvh5RXVkBZPD0M%2FtafV8DGkoFnBBrpIDJoumD08sqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrYgVIpHCFbpezoBCrcAzMjFWL56JrezNzRHnTwKzVSNRNNfT4t%2BXOPHs%2BYJHr0DugtMiGcKpq9ptgSG3mw8zBdKjLF5bm%2B3Hbm82nUfV5dLnSBWJJh8oPTplh8GxMpsosWSJyUTcBRlOQeBKv%2FdnaylQGcjHjybnk4JiRttPaFPWcLmhJCmWouixWRhSIZb2ZPJRVYO2L%2BRXjiSpwIbgVhe%2F%2B%2BfYu%2BVk5QGHa0hPiMVmh3hujbCngk%2FX7K1qC%2FVnFs8qeFjt29X4D%2FNhwpF29pKvyPWTQN08UqkPmgTg%2BB7J4njlEDfOK4ne6SLOaWiU8f%2BsJeIdY5MotZnZNqMx0mHYC%2FkDTUFfbweo68rBxfB2ESjf4Ykrb0d6tAA19iIo1Ln%2Ba1%2BYNn6qOYYmCVHZZs1lIwPsT0avBE4LcfzIcV4hUCJIcvFU%2F8%2BQ0kMlXkDXPVhbmNiu4tnNQzEH%2BcJMroGhYZCH8JXbjYZrYXICau4oNkxTWElVDT9XCsVtKLbr6%2BWmmdWzyIN1FLPK%2BB98xeAbnLJf667%2BEGsuGhgX2CjpFMTm0OS%2BrjQd4iouT6W69LNR%2FKxgBneS0BGLCBLvEfjgTJhvnr4YQFldTC3t9o0Dq%2BxkRFQYKerE2JcdopC7Fo%2Fohiu9nKiyHJMIz10coGOqUByFAvSEp%2BxWyRyIpnFIn4JOetJAHrOunyf2K4BC%2BWlNOzc%2B54KUzeUShXWL3RaNKkP1jjWceLw2JiE1E7KcwTzVZKSxYhXnwCkaUCAg1Un8HM1QCHtMOPg4MiK8ck5puzPSHMWq%2FK10S6U9LGJJhMOeXKLNbKxSCTdD6UyNvr%2BAVstudxQk44BgFX5MZFViymNxsT7R4oDESTjJWFJp6iK%2Bm%2BWH91&X-Amz-Signature=3132aa910ba6f76ab2b6b02525025ca6d1964ae986fa6d9f55fa1e1a76a49700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLGWQ6V%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5NdPp3aB5RG9772qUtA6ifCBV7Fq4dIU9TPLpVAcdwIgOzuJvh5RXVkBZPD0M%2FtafV8DGkoFnBBrpIDJoumD08sqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrYgVIpHCFbpezoBCrcAzMjFWL56JrezNzRHnTwKzVSNRNNfT4t%2BXOPHs%2BYJHr0DugtMiGcKpq9ptgSG3mw8zBdKjLF5bm%2B3Hbm82nUfV5dLnSBWJJh8oPTplh8GxMpsosWSJyUTcBRlOQeBKv%2FdnaylQGcjHjybnk4JiRttPaFPWcLmhJCmWouixWRhSIZb2ZPJRVYO2L%2BRXjiSpwIbgVhe%2F%2B%2BfYu%2BVk5QGHa0hPiMVmh3hujbCngk%2FX7K1qC%2FVnFs8qeFjt29X4D%2FNhwpF29pKvyPWTQN08UqkPmgTg%2BB7J4njlEDfOK4ne6SLOaWiU8f%2BsJeIdY5MotZnZNqMx0mHYC%2FkDTUFfbweo68rBxfB2ESjf4Ykrb0d6tAA19iIo1Ln%2Ba1%2BYNn6qOYYmCVHZZs1lIwPsT0avBE4LcfzIcV4hUCJIcvFU%2F8%2BQ0kMlXkDXPVhbmNiu4tnNQzEH%2BcJMroGhYZCH8JXbjYZrYXICau4oNkxTWElVDT9XCsVtKLbr6%2BWmmdWzyIN1FLPK%2BB98xeAbnLJf667%2BEGsuGhgX2CjpFMTm0OS%2BrjQd4iouT6W69LNR%2FKxgBneS0BGLCBLvEfjgTJhvnr4YQFldTC3t9o0Dq%2BxkRFQYKerE2JcdopC7Fo%2Fohiu9nKiyHJMIz10coGOqUByFAvSEp%2BxWyRyIpnFIn4JOetJAHrOunyf2K4BC%2BWlNOzc%2B54KUzeUShXWL3RaNKkP1jjWceLw2JiE1E7KcwTzVZKSxYhXnwCkaUCAg1Un8HM1QCHtMOPg4MiK8ck5puzPSHMWq%2FK10S6U9LGJJhMOeXKLNbKxSCTdD6UyNvr%2BAVstudxQk44BgFX5MZFViymNxsT7R4oDESTjJWFJp6iK%2Bm%2BWH91&X-Amz-Signature=5bf1b08e7dd3f86f88e234e4e049921073f78eda75afda3bab45dac3cff55d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLGWQ6V%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5NdPp3aB5RG9772qUtA6ifCBV7Fq4dIU9TPLpVAcdwIgOzuJvh5RXVkBZPD0M%2FtafV8DGkoFnBBrpIDJoumD08sqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrYgVIpHCFbpezoBCrcAzMjFWL56JrezNzRHnTwKzVSNRNNfT4t%2BXOPHs%2BYJHr0DugtMiGcKpq9ptgSG3mw8zBdKjLF5bm%2B3Hbm82nUfV5dLnSBWJJh8oPTplh8GxMpsosWSJyUTcBRlOQeBKv%2FdnaylQGcjHjybnk4JiRttPaFPWcLmhJCmWouixWRhSIZb2ZPJRVYO2L%2BRXjiSpwIbgVhe%2F%2B%2BfYu%2BVk5QGHa0hPiMVmh3hujbCngk%2FX7K1qC%2FVnFs8qeFjt29X4D%2FNhwpF29pKvyPWTQN08UqkPmgTg%2BB7J4njlEDfOK4ne6SLOaWiU8f%2BsJeIdY5MotZnZNqMx0mHYC%2FkDTUFfbweo68rBxfB2ESjf4Ykrb0d6tAA19iIo1Ln%2Ba1%2BYNn6qOYYmCVHZZs1lIwPsT0avBE4LcfzIcV4hUCJIcvFU%2F8%2BQ0kMlXkDXPVhbmNiu4tnNQzEH%2BcJMroGhYZCH8JXbjYZrYXICau4oNkxTWElVDT9XCsVtKLbr6%2BWmmdWzyIN1FLPK%2BB98xeAbnLJf667%2BEGsuGhgX2CjpFMTm0OS%2BrjQd4iouT6W69LNR%2FKxgBneS0BGLCBLvEfjgTJhvnr4YQFldTC3t9o0Dq%2BxkRFQYKerE2JcdopC7Fo%2Fohiu9nKiyHJMIz10coGOqUByFAvSEp%2BxWyRyIpnFIn4JOetJAHrOunyf2K4BC%2BWlNOzc%2B54KUzeUShXWL3RaNKkP1jjWceLw2JiE1E7KcwTzVZKSxYhXnwCkaUCAg1Un8HM1QCHtMOPg4MiK8ck5puzPSHMWq%2FK10S6U9LGJJhMOeXKLNbKxSCTdD6UyNvr%2BAVstudxQk44BgFX5MZFViymNxsT7R4oDESTjJWFJp6iK%2Bm%2BWH91&X-Amz-Signature=fae63a1809803e060a28073cfb84cb551b41601c8bf870c12df6cb880615da92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLGWQ6V%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5NdPp3aB5RG9772qUtA6ifCBV7Fq4dIU9TPLpVAcdwIgOzuJvh5RXVkBZPD0M%2FtafV8DGkoFnBBrpIDJoumD08sqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrYgVIpHCFbpezoBCrcAzMjFWL56JrezNzRHnTwKzVSNRNNfT4t%2BXOPHs%2BYJHr0DugtMiGcKpq9ptgSG3mw8zBdKjLF5bm%2B3Hbm82nUfV5dLnSBWJJh8oPTplh8GxMpsosWSJyUTcBRlOQeBKv%2FdnaylQGcjHjybnk4JiRttPaFPWcLmhJCmWouixWRhSIZb2ZPJRVYO2L%2BRXjiSpwIbgVhe%2F%2B%2BfYu%2BVk5QGHa0hPiMVmh3hujbCngk%2FX7K1qC%2FVnFs8qeFjt29X4D%2FNhwpF29pKvyPWTQN08UqkPmgTg%2BB7J4njlEDfOK4ne6SLOaWiU8f%2BsJeIdY5MotZnZNqMx0mHYC%2FkDTUFfbweo68rBxfB2ESjf4Ykrb0d6tAA19iIo1Ln%2Ba1%2BYNn6qOYYmCVHZZs1lIwPsT0avBE4LcfzIcV4hUCJIcvFU%2F8%2BQ0kMlXkDXPVhbmNiu4tnNQzEH%2BcJMroGhYZCH8JXbjYZrYXICau4oNkxTWElVDT9XCsVtKLbr6%2BWmmdWzyIN1FLPK%2BB98xeAbnLJf667%2BEGsuGhgX2CjpFMTm0OS%2BrjQd4iouT6W69LNR%2FKxgBneS0BGLCBLvEfjgTJhvnr4YQFldTC3t9o0Dq%2BxkRFQYKerE2JcdopC7Fo%2Fohiu9nKiyHJMIz10coGOqUByFAvSEp%2BxWyRyIpnFIn4JOetJAHrOunyf2K4BC%2BWlNOzc%2B54KUzeUShXWL3RaNKkP1jjWceLw2JiE1E7KcwTzVZKSxYhXnwCkaUCAg1Un8HM1QCHtMOPg4MiK8ck5puzPSHMWq%2FK10S6U9LGJJhMOeXKLNbKxSCTdD6UyNvr%2BAVstudxQk44BgFX5MZFViymNxsT7R4oDESTjJWFJp6iK%2Bm%2BWH91&X-Amz-Signature=adbfb505c8496b9bdc3b216e7eed6e83b3b06a88092fdae4a2ba8ef3ab1e3513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB7TW6RP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm9yK3HsEOY4TcMezh7pQ%2F5C94kB8KPDjELjU9sj0iJQIhAPf7HjlQXo6txvXmjf4RqEEbA%2FFEjnjTJLljY%2BRLBLe5KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRrxjKE32mPrwq1kwq3AOMI0eicLSan9pHxVdKQrOYJk2V2N1h%2BiyJz6B4pp6qD7KlX3bMQf4j1vxzNedKnumWzNkAGZ4MQf%2Fo322kmLOEILKa3S8wGGz5kgW5H9CPImfR1sT3e5eUj0jdt7XqInGAbuZFFhjGEqFgaUf6GPzH8XiScA4GyYGx%2F3vC7fH%2BeApLzJhePQwuFuHd1tbv64Jv3egp%2BZH%2BFK%2Bivt%2FOC3XmBuZ7U2YIJahABsHnSubirhfcVvklmkQ1y7ubbLNKlRbDDEaonud91V4Dux1io2478g094l7CEnYKoW4hgLCHutpMo%2F027fiqvhZQCCNa4Xdfy4NUQjq8afvNVRtzkPXOahgMbth6n7b9cCvt%2FUvCcALKsnm124Ir379HQVxAmSzRnr3a68mRQcY3eEt0GUKAfHMGqZQLCgLjN7vUKAH%2BG1phonlYwqGZVSWFXnQ4cPm9rncl4j8hewCOB3EO%2B0ZPmma54FpdT9WO5O%2BQFLuOAhOXwUdNo0%2FKqxrf3MJUH5OjRrinfcrI%2FhtLzRkVpEtzLSf9du8AcljU6YcAa1mO9sOSR017GIliCTaC1sWHGLjt1nXglAPS7ERZfuuSjAU2AdsHyer%2BVwhTIdfNLsH9HZ856XpQt5svMxze2TCf8tHKBjqkAcK5cZNsCMMDnJQMegz5dCwBKgvw7yIwVNeBhXCdMyMTTG%2F%2FsrC5IvpEyCjqNoVcFIMRsA1td9xPbd4wMfvAvPuO3jxAjXfkiKjSlnuwLytFxe1laB58ZiVM1s8JEqO24agFQ8R4nr0uVuZzXxiOmapYhKDzN6taZEqt7Q%2BvdADTnV6HqcTUWJjGK8nafW%2BVUZta5Ij5Mv2UBdKXwINb8j3TM5Nf&X-Amz-Signature=610fff6e7a5e4060cc64e8a85f907d9eba59888489d7446349dcba859c4c10ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLGWQ6V%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5NdPp3aB5RG9772qUtA6ifCBV7Fq4dIU9TPLpVAcdwIgOzuJvh5RXVkBZPD0M%2FtafV8DGkoFnBBrpIDJoumD08sqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrYgVIpHCFbpezoBCrcAzMjFWL56JrezNzRHnTwKzVSNRNNfT4t%2BXOPHs%2BYJHr0DugtMiGcKpq9ptgSG3mw8zBdKjLF5bm%2B3Hbm82nUfV5dLnSBWJJh8oPTplh8GxMpsosWSJyUTcBRlOQeBKv%2FdnaylQGcjHjybnk4JiRttPaFPWcLmhJCmWouixWRhSIZb2ZPJRVYO2L%2BRXjiSpwIbgVhe%2F%2B%2BfYu%2BVk5QGHa0hPiMVmh3hujbCngk%2FX7K1qC%2FVnFs8qeFjt29X4D%2FNhwpF29pKvyPWTQN08UqkPmgTg%2BB7J4njlEDfOK4ne6SLOaWiU8f%2BsJeIdY5MotZnZNqMx0mHYC%2FkDTUFfbweo68rBxfB2ESjf4Ykrb0d6tAA19iIo1Ln%2Ba1%2BYNn6qOYYmCVHZZs1lIwPsT0avBE4LcfzIcV4hUCJIcvFU%2F8%2BQ0kMlXkDXPVhbmNiu4tnNQzEH%2BcJMroGhYZCH8JXbjYZrYXICau4oNkxTWElVDT9XCsVtKLbr6%2BWmmdWzyIN1FLPK%2BB98xeAbnLJf667%2BEGsuGhgX2CjpFMTm0OS%2BrjQd4iouT6W69LNR%2FKxgBneS0BGLCBLvEfjgTJhvnr4YQFldTC3t9o0Dq%2BxkRFQYKerE2JcdopC7Fo%2Fohiu9nKiyHJMIz10coGOqUByFAvSEp%2BxWyRyIpnFIn4JOetJAHrOunyf2K4BC%2BWlNOzc%2B54KUzeUShXWL3RaNKkP1jjWceLw2JiE1E7KcwTzVZKSxYhXnwCkaUCAg1Un8HM1QCHtMOPg4MiK8ck5puzPSHMWq%2FK10S6U9LGJJhMOeXKLNbKxSCTdD6UyNvr%2BAVstudxQk44BgFX5MZFViymNxsT7R4oDESTjJWFJp6iK%2Bm%2BWH91&X-Amz-Signature=3912394e8660d1f4a0baf0be23cfb89abfd84cdcb77abc5921afd24b36a8b07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLGWQ6V%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5NdPp3aB5RG9772qUtA6ifCBV7Fq4dIU9TPLpVAcdwIgOzuJvh5RXVkBZPD0M%2FtafV8DGkoFnBBrpIDJoumD08sqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrYgVIpHCFbpezoBCrcAzMjFWL56JrezNzRHnTwKzVSNRNNfT4t%2BXOPHs%2BYJHr0DugtMiGcKpq9ptgSG3mw8zBdKjLF5bm%2B3Hbm82nUfV5dLnSBWJJh8oPTplh8GxMpsosWSJyUTcBRlOQeBKv%2FdnaylQGcjHjybnk4JiRttPaFPWcLmhJCmWouixWRhSIZb2ZPJRVYO2L%2BRXjiSpwIbgVhe%2F%2B%2BfYu%2BVk5QGHa0hPiMVmh3hujbCngk%2FX7K1qC%2FVnFs8qeFjt29X4D%2FNhwpF29pKvyPWTQN08UqkPmgTg%2BB7J4njlEDfOK4ne6SLOaWiU8f%2BsJeIdY5MotZnZNqMx0mHYC%2FkDTUFfbweo68rBxfB2ESjf4Ykrb0d6tAA19iIo1Ln%2Ba1%2BYNn6qOYYmCVHZZs1lIwPsT0avBE4LcfzIcV4hUCJIcvFU%2F8%2BQ0kMlXkDXPVhbmNiu4tnNQzEH%2BcJMroGhYZCH8JXbjYZrYXICau4oNkxTWElVDT9XCsVtKLbr6%2BWmmdWzyIN1FLPK%2BB98xeAbnLJf667%2BEGsuGhgX2CjpFMTm0OS%2BrjQd4iouT6W69LNR%2FKxgBneS0BGLCBLvEfjgTJhvnr4YQFldTC3t9o0Dq%2BxkRFQYKerE2JcdopC7Fo%2Fohiu9nKiyHJMIz10coGOqUByFAvSEp%2BxWyRyIpnFIn4JOetJAHrOunyf2K4BC%2BWlNOzc%2B54KUzeUShXWL3RaNKkP1jjWceLw2JiE1E7KcwTzVZKSxYhXnwCkaUCAg1Un8HM1QCHtMOPg4MiK8ck5puzPSHMWq%2FK10S6U9LGJJhMOeXKLNbKxSCTdD6UyNvr%2BAVstudxQk44BgFX5MZFViymNxsT7R4oDESTjJWFJp6iK%2Bm%2BWH91&X-Amz-Signature=8f73ad771fa31447929e2993863d106b8cbf6702f8af8c391b12ea4e4c622adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLGWQ6V%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5NdPp3aB5RG9772qUtA6ifCBV7Fq4dIU9TPLpVAcdwIgOzuJvh5RXVkBZPD0M%2FtafV8DGkoFnBBrpIDJoumD08sqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrYgVIpHCFbpezoBCrcAzMjFWL56JrezNzRHnTwKzVSNRNNfT4t%2BXOPHs%2BYJHr0DugtMiGcKpq9ptgSG3mw8zBdKjLF5bm%2B3Hbm82nUfV5dLnSBWJJh8oPTplh8GxMpsosWSJyUTcBRlOQeBKv%2FdnaylQGcjHjybnk4JiRttPaFPWcLmhJCmWouixWRhSIZb2ZPJRVYO2L%2BRXjiSpwIbgVhe%2F%2B%2BfYu%2BVk5QGHa0hPiMVmh3hujbCngk%2FX7K1qC%2FVnFs8qeFjt29X4D%2FNhwpF29pKvyPWTQN08UqkPmgTg%2BB7J4njlEDfOK4ne6SLOaWiU8f%2BsJeIdY5MotZnZNqMx0mHYC%2FkDTUFfbweo68rBxfB2ESjf4Ykrb0d6tAA19iIo1Ln%2Ba1%2BYNn6qOYYmCVHZZs1lIwPsT0avBE4LcfzIcV4hUCJIcvFU%2F8%2BQ0kMlXkDXPVhbmNiu4tnNQzEH%2BcJMroGhYZCH8JXbjYZrYXICau4oNkxTWElVDT9XCsVtKLbr6%2BWmmdWzyIN1FLPK%2BB98xeAbnLJf667%2BEGsuGhgX2CjpFMTm0OS%2BrjQd4iouT6W69LNR%2FKxgBneS0BGLCBLvEfjgTJhvnr4YQFldTC3t9o0Dq%2BxkRFQYKerE2JcdopC7Fo%2Fohiu9nKiyHJMIz10coGOqUByFAvSEp%2BxWyRyIpnFIn4JOetJAHrOunyf2K4BC%2BWlNOzc%2B54KUzeUShXWL3RaNKkP1jjWceLw2JiE1E7KcwTzVZKSxYhXnwCkaUCAg1Un8HM1QCHtMOPg4MiK8ck5puzPSHMWq%2FK10S6U9LGJJhMOeXKLNbKxSCTdD6UyNvr%2BAVstudxQk44BgFX5MZFViymNxsT7R4oDESTjJWFJp6iK%2Bm%2BWH91&X-Amz-Signature=42b7ad1c44bf2280df4199621611114128eb67c71e00412d28ff3dc04dbdf8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLGWQ6V%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5NdPp3aB5RG9772qUtA6ifCBV7Fq4dIU9TPLpVAcdwIgOzuJvh5RXVkBZPD0M%2FtafV8DGkoFnBBrpIDJoumD08sqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrYgVIpHCFbpezoBCrcAzMjFWL56JrezNzRHnTwKzVSNRNNfT4t%2BXOPHs%2BYJHr0DugtMiGcKpq9ptgSG3mw8zBdKjLF5bm%2B3Hbm82nUfV5dLnSBWJJh8oPTplh8GxMpsosWSJyUTcBRlOQeBKv%2FdnaylQGcjHjybnk4JiRttPaFPWcLmhJCmWouixWRhSIZb2ZPJRVYO2L%2BRXjiSpwIbgVhe%2F%2B%2BfYu%2BVk5QGHa0hPiMVmh3hujbCngk%2FX7K1qC%2FVnFs8qeFjt29X4D%2FNhwpF29pKvyPWTQN08UqkPmgTg%2BB7J4njlEDfOK4ne6SLOaWiU8f%2BsJeIdY5MotZnZNqMx0mHYC%2FkDTUFfbweo68rBxfB2ESjf4Ykrb0d6tAA19iIo1Ln%2Ba1%2BYNn6qOYYmCVHZZs1lIwPsT0avBE4LcfzIcV4hUCJIcvFU%2F8%2BQ0kMlXkDXPVhbmNiu4tnNQzEH%2BcJMroGhYZCH8JXbjYZrYXICau4oNkxTWElVDT9XCsVtKLbr6%2BWmmdWzyIN1FLPK%2BB98xeAbnLJf667%2BEGsuGhgX2CjpFMTm0OS%2BrjQd4iouT6W69LNR%2FKxgBneS0BGLCBLvEfjgTJhvnr4YQFldTC3t9o0Dq%2BxkRFQYKerE2JcdopC7Fo%2Fohiu9nKiyHJMIz10coGOqUByFAvSEp%2BxWyRyIpnFIn4JOetJAHrOunyf2K4BC%2BWlNOzc%2B54KUzeUShXWL3RaNKkP1jjWceLw2JiE1E7KcwTzVZKSxYhXnwCkaUCAg1Un8HM1QCHtMOPg4MiK8ck5puzPSHMWq%2FK10S6U9LGJJhMOeXKLNbKxSCTdD6UyNvr%2BAVstudxQk44BgFX5MZFViymNxsT7R4oDESTjJWFJp6iK%2Bm%2BWH91&X-Amz-Signature=58df46c3f7783961f1588c9961fa0eeb9bbbfb797a79b25cc97412a619d44196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLGWQ6V%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5NdPp3aB5RG9772qUtA6ifCBV7Fq4dIU9TPLpVAcdwIgOzuJvh5RXVkBZPD0M%2FtafV8DGkoFnBBrpIDJoumD08sqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrYgVIpHCFbpezoBCrcAzMjFWL56JrezNzRHnTwKzVSNRNNfT4t%2BXOPHs%2BYJHr0DugtMiGcKpq9ptgSG3mw8zBdKjLF5bm%2B3Hbm82nUfV5dLnSBWJJh8oPTplh8GxMpsosWSJyUTcBRlOQeBKv%2FdnaylQGcjHjybnk4JiRttPaFPWcLmhJCmWouixWRhSIZb2ZPJRVYO2L%2BRXjiSpwIbgVhe%2F%2B%2BfYu%2BVk5QGHa0hPiMVmh3hujbCngk%2FX7K1qC%2FVnFs8qeFjt29X4D%2FNhwpF29pKvyPWTQN08UqkPmgTg%2BB7J4njlEDfOK4ne6SLOaWiU8f%2BsJeIdY5MotZnZNqMx0mHYC%2FkDTUFfbweo68rBxfB2ESjf4Ykrb0d6tAA19iIo1Ln%2Ba1%2BYNn6qOYYmCVHZZs1lIwPsT0avBE4LcfzIcV4hUCJIcvFU%2F8%2BQ0kMlXkDXPVhbmNiu4tnNQzEH%2BcJMroGhYZCH8JXbjYZrYXICau4oNkxTWElVDT9XCsVtKLbr6%2BWmmdWzyIN1FLPK%2BB98xeAbnLJf667%2BEGsuGhgX2CjpFMTm0OS%2BrjQd4iouT6W69LNR%2FKxgBneS0BGLCBLvEfjgTJhvnr4YQFldTC3t9o0Dq%2BxkRFQYKerE2JcdopC7Fo%2Fohiu9nKiyHJMIz10coGOqUByFAvSEp%2BxWyRyIpnFIn4JOetJAHrOunyf2K4BC%2BWlNOzc%2B54KUzeUShXWL3RaNKkP1jjWceLw2JiE1E7KcwTzVZKSxYhXnwCkaUCAg1Un8HM1QCHtMOPg4MiK8ck5puzPSHMWq%2FK10S6U9LGJJhMOeXKLNbKxSCTdD6UyNvr%2BAVstudxQk44BgFX5MZFViymNxsT7R4oDESTjJWFJp6iK%2Bm%2BWH91&X-Amz-Signature=a07cab4ed4af916c35c9178a3c956bc10ea9fba18a1fefca24c7e0666cc870e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLGWQ6V%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5NdPp3aB5RG9772qUtA6ifCBV7Fq4dIU9TPLpVAcdwIgOzuJvh5RXVkBZPD0M%2FtafV8DGkoFnBBrpIDJoumD08sqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrYgVIpHCFbpezoBCrcAzMjFWL56JrezNzRHnTwKzVSNRNNfT4t%2BXOPHs%2BYJHr0DugtMiGcKpq9ptgSG3mw8zBdKjLF5bm%2B3Hbm82nUfV5dLnSBWJJh8oPTplh8GxMpsosWSJyUTcBRlOQeBKv%2FdnaylQGcjHjybnk4JiRttPaFPWcLmhJCmWouixWRhSIZb2ZPJRVYO2L%2BRXjiSpwIbgVhe%2F%2B%2BfYu%2BVk5QGHa0hPiMVmh3hujbCngk%2FX7K1qC%2FVnFs8qeFjt29X4D%2FNhwpF29pKvyPWTQN08UqkPmgTg%2BB7J4njlEDfOK4ne6SLOaWiU8f%2BsJeIdY5MotZnZNqMx0mHYC%2FkDTUFfbweo68rBxfB2ESjf4Ykrb0d6tAA19iIo1Ln%2Ba1%2BYNn6qOYYmCVHZZs1lIwPsT0avBE4LcfzIcV4hUCJIcvFU%2F8%2BQ0kMlXkDXPVhbmNiu4tnNQzEH%2BcJMroGhYZCH8JXbjYZrYXICau4oNkxTWElVDT9XCsVtKLbr6%2BWmmdWzyIN1FLPK%2BB98xeAbnLJf667%2BEGsuGhgX2CjpFMTm0OS%2BrjQd4iouT6W69LNR%2FKxgBneS0BGLCBLvEfjgTJhvnr4YQFldTC3t9o0Dq%2BxkRFQYKerE2JcdopC7Fo%2Fohiu9nKiyHJMIz10coGOqUByFAvSEp%2BxWyRyIpnFIn4JOetJAHrOunyf2K4BC%2BWlNOzc%2B54KUzeUShXWL3RaNKkP1jjWceLw2JiE1E7KcwTzVZKSxYhXnwCkaUCAg1Un8HM1QCHtMOPg4MiK8ck5puzPSHMWq%2FK10S6U9LGJJhMOeXKLNbKxSCTdD6UyNvr%2BAVstudxQk44BgFX5MZFViymNxsT7R4oDESTjJWFJp6iK%2Bm%2BWH91&X-Amz-Signature=1eb2828b7070e46f5e6954a6f74b61317c4296245906eded779c2523868630f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


