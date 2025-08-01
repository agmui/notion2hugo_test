---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T21:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T21:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=48aa57b7985389e06e4d01e036309b0d07d0c5f96740bbd20e6313ac7cee03d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=4912e466cf1cebf81fb979885c4ec8c0fe0c8455ef7ce86864fb480d9d338091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=c5a13766311367d134a84c4da2f62a825eee191fa5a4b854646e2d2e79212ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=563a6c02a9f9fe793bff9cd3d4b3428df06dd1e70ed03926f83237de096c6e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=a31c4d0ea9ffba77bd820a690f9f46ef31dcfac73ee625f2175ee3a1fc455c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=afd6338657d163ddae00398be84f5f25ad96b98c9e069a1d52b69f5ca2314e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=7129986097f3274b1594b011a49ad21ded2a58d5f3d158f0c3aac7d47087e0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=97db6061a1f8974a07207e858e6e759f48f69bac9049895744b4cb15eec0d5b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=50538091a0806c6562ee3538f361167485bddb76716748a61c61994d8cd3c716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

TODO: preview of robot we r going make

urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start must all urdf have these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3AT52ZY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T231005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO43K7RKeoy8PQnuoCTUmszrZ9f81jpp%2FJqZV51YVrCQIhAMmJv%2Fw%2BU%2B1vKMiAi5%2BG8yaRwzAbxi02bJUBy0hMNMKCKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYgh6tx6JykTC25tMq3APykRlLUO2DUAG13rfIoc5E4uR1%2BrPT2SAEsdFkB98a%2FjRoYC%2FCVruJ%2FyzFh%2B5AvtdlSnffPrPOV1duLbdWIrbaZ557LQYEdozMAtuti%2Fq80doOQx6rVQhWgGJSUAwrvl7LrQ7twk1M9vQPGdpEd%2BbvLcDgt6QTfa2e%2FoQ4hmvY0F%2FmC%2BEVx7gHJZUSGXMadKzRdlk4LJwXQ0dMVuWAQcHeKw24ujrPJehAYMFs5zl%2ByM6dJ%2FiSnWZzsLgYFSe8piy3SMMNmhY0nye5ARKkBmrjsnwyE7YPEAmuk84dCpf2X4DTc8MAAonOoDWrPDSB5nA4BG7SYM%2B1SexxbKBP1MF9poCO4%2BbFsVhDVM%2F%2Bp4%2BrvPuL93Jm3CXccoGWgH9hADjUSv%2B%2Bw5koSCJrTYKqldpwHxF9Rz0PhHhXk%2FfAMpD9MqEcEzyVE9kLz5dQJfint9ncg%2BqBzYQdFkZ%2BSWYueQQh%2BhtKUNpOtThFUqvZVi8Y5S9K7dUCpGTXrfRcrZBP0%2FQkyL9vYrnogceWqXE7Xx1mL%2BATfEaBc1plOcWIDZw1lNO%2BEFCrVXswJX%2B%2FGLQ8bNEehsUUlAQKmuyhAZynRGr5TZMsGn7TwEWwR6TUvy2AD44zjroXt5tNE4CaHDDo7bTEBjqkAW2kz%2F%2FpZc5voq88d1t6OUMMKqnHZb74GaimgytNxPJ9u2PnbDLfQepp2aE67r7VEwNO3DoppAyC2PnXzIQpTtrkw67vU76qOWF%2BII29%2F8oJgkOQHZ%2BPLsFhMBFoe8Z0RP5J066eRvMnZ91ku4PtjvO0wCpkaCg4eALMWUz081%2BRMLSmTYGpDmKI4J7WrfD1TL%2FsPG0YR8KGWa%2BYVlCAHBxAMvlg&X-Amz-Signature=6b887e8c028d684245c25cf96322b7669e1b90fca4d0cb95f626e9902ea40540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All of our code will go in between the `<robot>` tags 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5L4LOUN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T231010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWNoS4FU%2F6YXkUxJ%2Fh0JvdYmK1OJYUL1L56E79iiex5QIhAORdc0cuH66sv0XNj7rB9jWEJ6IsqM%2Fdqyne0CyLje8nKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPOVdNS9LtOahOPBwq3AN%2Bi5I1qX3%2BhIOQyvLHNn4CVCqr7cbCmCYqsq5SvDSgKnq1oVyxE4GlhNYpzZ5dqgymhC%2BTUVrcIQtbkS%2BrsLXyYjQ1AexuXhaJszcl226OttaVDDhWdCyoz7ov%2BXLOYmBtG%2BbYw6jFDgnmZ%2BvHf%2Be8v%2Fy09mye%2BrHMsAvtxaw12%2Fe7imkskXSyQVVUxzw9G09SUqWvX6bvrIMnSSieqVsfAYVuM1joSXYzdB8RW3KFSQExb6wQln3J0KWxCqsW96h07mxKKdcExZNTXCT4MiNkJGKv2CdQkf4S4hEPVKwx%2FC6vvq4smlFPr5JMn37JpzYCWY1%2B4Lyl8jjLAfzOkAWo7mhD9NPljMEsatNXokPnrwUpxQs7jnTt58t4MdfC%2FIKUTRQ18ZDIbVwIzeGskay7Wtq%2B%2B6fFrqRb5mQTi7ilIHGGcauGMTyDFiq7Efjrj3VxL2UeDFElGdOxK95WCzjFl1bIj8Lgq3Rgr3bDMQVbubJ%2BJJs81HD7U1%2BfSIDHONJFfIo%2F7crgrpRJ42VT%2FrCdEbQ8xZ3dSyoUaqitUFVTwEzXATVX9lqvVAdVaBhpkKP1a28E9jtN%2FIsyLBnAQTs6IHpY2n1ad1htAqXiqZO6w%2B%2FDIh0HRoU6aYTtHTD07bTEBjqkAWnpSAyG2sATXDLfnxwDFHskKL83MKcQBcrbra8DqFp0DS%2B6mV00hPitzXd1AtdZE%2FKdNWcbkQBRqDZTRgak4lzBn5QZn7CdKI%2FBGAzKP95eLJlFipvL7Y%2Fak5KJChi4AA0CsKZAL5KN%2BkSeGHOPVWapRcvp5X8kvbmUkjLti%2FYdCBGRWWtG1x7NoB%2Fig5GGRsslyLZkCRWzM2NQdeAM1EcanRWD&X-Amz-Signature=7ed6a37387815954a0e1797ef9a28c497a6ca3da6d6a07a88be639752751122e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      TODO:
  </details>

Lets now make a link for the body of the robot

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3HKXRRD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T231012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFm4kPsVNCnOfW761C1ijVFx2l7ztQ2oCK1Cy23yDxdIAiEAwgTuad3P6XJEk%2Ba8O%2BK20GdcWxC19w%2By2IVrMvPaeT4qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBb6vQXUcK38y0tJyrcA6Phx1hBDlhWLuAENVQ%2BgWqjb97z0onrZSWmlOkmwCzHJOGHtuW%2Fuw1NumZVTj7duexDJXYMMErIqFTT%2FQAh6BBHX9Gu1qdVo4m7A4yEaWbkj0yJ5qGHcNkfb68qp3EgCmzrPTClSoM2NZRzVxn0wNB6MP4KEkHLsZux1VQSHQwTgMdnlBLgb9%2BSaXcBa6RzFmntpidX1ye2EfvMVb6%2FkbPpEx9iqQqdOHE4YPXo45H8KIlsf8eOuHqpapHY2dpN7jd2N3tbmwvSp9NUSnjHepK2b9FJQoVv518NyesuLk7YyhzGr0tz%2F0hGPR68NHqbVO1MiOwHsUdO93nIocsdqCM0nqDeWZaA5jfe%2FduX%2F9Rvhf0kbIU2X91mLQckgCcl9USIWpOQaACVy%2FwAIpfZRMWVnTONPIV2B5nkTVxfp%2BMbUWzVh76EpbyhaKKoHX%2BhMYJmvblNTuNAoU6xqPUtdedLgBjrDw46buLLp2U44RfANqP1i2jzG80SazXJXmzMPvzX6kMe6RJxmjHp%2B%2BjhDiNvvPyTa5Zbib7Ih%2BjGAP56RUrgZtp6Y0MFfBJ2JxwMgLLV%2FUoaSh5q8Ic2FzOzUEBc7s9YKzLUUyQu3cxE0zJf6WbzwaxuaY%2FZ7q9xML3ttMQGOqUBIMcxtbXL02dj7G57m00dmiMnGetVE9GoUbOfCtuWUjrvyIjF51asoCsCpGqxEl%2BPaLSj1WNyOb0hF16JPM%2FjI%2FsZBBMmbWYHnNCAnsN8FsAhNYN91ZDHgIXBzM3Guz6mSODZtYqPHgb6SJZ%2BzB67Uav7CXMwNUrXoMnm2juuysusQAFvR89sCKmm3cY4nZcWwIG%2FM9Nf0GYs2DnlwtUWzCpSE2O1&X-Amz-Signature=e7f44b25258d012917e1ce37a2f1a007353cd50d1a468b8f85c9c699d35953be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=4bcbad8e82b1852deaa885681d058f25215bbe58e0e795b6e269d21271ed0172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWG6AFD2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T231014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcjozRAeZpcrmJFsCRFbW7IVXFVlBF9qQG0han9sYwpQIhAK9jiZbHcF5aeOcLBzyaxADDITf6xQ%2BI%2FqnthySzze1VKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu6kaWaOhhdNteMuMq3ANs2qicUsXMUETb%2FfVnuo22iX5XzLfUBQ4xONsyE8WOJ%2BGxrvuG3POlQuYXUuHJwLqbUhqD%2BsUKXq40On3aOJluAZM5Mw95iB5zOjsKaeVrJ37lLgpMT17A%2BoDUsD%2FpddwSw6x%2FIll9mqxUD8yOAJVatMw7gPSdgKXJWSqWfilN%2FYRpJ8iMJ24F0FfvxyNjDzr0OCvawRbYK0SPv114w%2Fp0oh4Zfes%2BZ8JBDk1XrnLRVZqY6vOS3WSVpVhJm277ie0ep9IzEPWwVRmLpNqUILa31KFQ22vkNQpxWf1kzxTsJTiEbQJDeoXrxAluT1fmvcySiN1QcTBI%2Fw7URhtAUFML4roYM2tn4OwHTOq7JiVbxxv2A8NjXtnWlxpJHJmQGtWz0Mi98cN6%2BQdLx2b5Af5tyqol527hVdiAc9jf%2BqFaS%2BewwtlBYqKtI%2FZSbfriqCAICybbWWtdh%2FZ%2F%2Ftwvcu1WGYuc7VUOC6tQlc7Vw5Mu23hbzlk1ec21NwUmBKDia9YKp1PX8LEQm4o9LmwhX5d8h5tu7uhWbr5bEUuLfDUr%2FdhD5QZiUobUmxEDHFIdyYFX3CruYdabsbmQDxo%2BSHcqKfg%2FMHXdovCmqjhDOmt7j%2FFP8mgci5lw4KtN3zCH7rTEBjqkAcV4s2BP14ElXCCOZaaY9f2PQgitFlxrvkaTHWmYEg%2FcnJdBLhRI1cppuJ3pF3g1LY6oD1bElWk9SloU0IjNutRCSyrj7yaJP7LidQNoKm7Ae39CNjFmH6sGmibTsoi2W%2FsjeiAvu7tUE%2FPwzmbg3637WXg3ng%2BEdAcXhH0JvJptvhg8vPjH5jg80I9KbbHcvq9l%2FcGxbmfXHuvIn%2Fd1ynC8X%2B%2FQ&X-Amz-Signature=db02e9571cb3c1850da063360234b25661ffb82aae25b7cd53c088ec3116e5a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=ee01f4c1ab7cfb917c6880d0c555a3058f6614c3c4ab5d220ad1be3fc622042c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XKHJWY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T231018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz6p8ea3A5XXdpPY1pHfXdqUVF%2Bhs1mkFk5sAb0Q9WiAIhAJyqEQ38fAvSscdW7gdgWzYDOZysg7X%2FjHXtDHRRRURfKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP%2FjkWdBhi3OamR%2Bkq3AMRHYsfuIS0NfdzT28CTyA4Z%2B2P8cNvV%2FBkokeTjjqzIDSZJF%2FA8OORjHuk%2FMO3VCU3jQYzg7pi16zp%2FRyZ7%2F8KQ0%2FxLtsgX7OSktFnwvZuVrnw%2FWd9VHhfNRsOlA7FIcgsb0h3tOVy0qziadDrmagyPL764FvZd8Zdxj6l%2B0cXGA9aTlrrcNkncT0PkLDeRWZ7P3s0ox%2BIILGtKtDgIzDZvvc9EUFdK6BmFyGNnJMXKtaONpOXGQUZrsxezK7VkTF8ZqMLfx8crxrca2P3MGmkCLfiv5sHRCy4Zg55RgMq%2BoSJpdfgeJHQeCSM1yYGeT9pMQApzQoBTSH5ASlRDTmgO1DbP3CKly6x5Aya28Uqj%2Bq28cWgSXlgscpZpyliJ2kBEaJPvMpqluIj783LUOOpUoLBs1p7KYIvLsEk79PK1V4oVTCC5qxHHxNHTA25xh9cjZGpONxhZoaXBuSDLxYilKkKLsnWynhQiLGVa6vYDmSuY9F9T5P7rPqBqSK1wyogOUL7RV42ZAdAO5K9fCr1Xb1%2FbLl%2F%2FYfJ%2FbJMixPD7V7dLwTAVdr%2BASHDn9Lp5pHeHSTODEnvR%2BN7TMXsLiCFc1w5iouGUIYsq%2F%2BNJwxKobRvr98BLSp7GIA9LDD87bTEBjqkAU06LVz8OHnBhbEoQ94Pl%2FRevphVy%2BADopo61%2BGiNUYnh24Fj51qI8WMor8d3SkU56zuQ%2FcCKtEBNrXNK8KNnV3AUEjxY8zbm0j2ddr%2BgKgCCsGVBLx%2B3PHTZoKsygzQ%2FXIGuN2Uo5IouxFN%2Fh2J0HokGWYm5lJgPHn%2FprEXMR9D7eeW9iWpyrQ%2FhpWPDVIpR%2BA8r2TYFtL4Y7B50LnZdNMIRh7z&X-Amz-Signature=3f496d373b2f0bf260d185022ee4c2283411d96d1f09169c97d00cc8c6dbbf26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=c0560e1afd892926f2a0516f78c7c69695ac2e005b9c896a815cb7c0c571d40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHAYQVZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T231019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDRYrAB89%2FrlQmIKTI1RMqV8Q69q0ZO03UhVK%2FCfJljAIhALctl%2BySHtBEj%2BMDSVhpL%2Fxo4rxRABCf1lYwDlvN8wODKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLk7mVs9d4xUJcZ3cq3APh2Q7%2Frwvo8tJ3te64mRHmnnqycTcr0cgdUwrALB6F5QpgBaeEYj3rMw%2BsfLKyDJpNsSa3JonV%2BZR%2Bx058eSPi3yZzfBJHAuQlDnaV90%2BEJ0oZXucTVrYv5OXd0Ou9fBn%2BSwWDA46ZFUmxUZHVT4AXSXvsg8rYE%2FMPG2FwIbrew%2FpVmPGysh9B5RSoLWCCHSJOpj6gtw%2F2qtgIj9uS39oxeNTbNyXgnaJW2tNKdHrvzBoWjK74vuE05QDGcVuiJtyu3AIBmw%2BU5nQEl2YNZ064b4aoJM8kI%2B6DSiSFMhF3epeWZ%2FnunkTqb0%2Fd%2F8eUUWlUkr2lm1mhGozleYAWQSWCPwG2EZcyqz6n6HmMocGoZMWQUjRqQNdBMgYOfJafInHFb5F5LTMaWj0iTY0326cUNtNr%2Fr7pExQ%2BkupL7x35JPmfzxnx2zpUKcLaWkOIVrKIZ4LecZ5pJbnJ7flaaUeKJtzyYNZdr5m5QW%2F5gpMkA1vur9Nwt%2Fau0n1NPhBHAUWyaRFAVGZktLoxmLL4DKjtuZZVidb7wB%2BK1UhDes%2B9K6lETrXC5HdTLYlofytmZbJVF9znhfbWnDXzk2yZ%2Fp00JEBYRPLIrKPar0ZTQHdYmQ222ZoLcXjDSQL0JjC%2F7bTEBjqkAWDcFxeIqdBcNY3zoitgkIW3SGk3lvA1Glr8oVcCUJDQQ54a8lNvElGgrSIGCferisd6xRoZNeJTBgMrErq7nZODMepKf%2BHswWj7kdw8EHTBg8PjTunFORQL%2BVkcmH9EWKy17lJOkDN3Vl9WgNVEWpQUi90LySb1r3cszqjlwfW%2FN%2Btn78R6%2FKlNHMFYPym7skqk%2BZv0YSa%2B9A8VX8Nce0%2FL6LcU&X-Amz-Signature=15f5ed65e5e39730c58d5603cb8f6de4838e803b84d522ae4c6ffa199d9851d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=335fab6151de4059226ce9e152b679f90c2b507e1542840f76fd212579b662f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYOUOTJ4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T231024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzHT5gRCtVAvTwe%2FhPROHoXSHauFmys513i5pDmPTPzAiAG6mbn6VOQtDjliBQFUHGWc0lf4jI%2BtwimJ%2FZ9esyWbSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4QONe%2FPoqV7Kg2CGKtwDA11kRyIS7q1MpjIrt%2FaTpmG0wykaMnrPXFSc6OhZvWNSdBEzjHFN1R33QNqrpgtkPu0bmBOCtSc73r8WxA0zVqpmPrpQWF528Skk%2FAxyyFamzvaMIIwzdhn2Sinks8UzclNgJ31ZNK1rKyPP3MzO7zDSLgrjBwGz%2Bk1dpv7YaBO2Tm%2BVW7MfqzEF2fRUT3d1M4zUnIXyHG5qSn%2FtGTboQqBT6OqzT1yuEScdHg15oKfwPuLlJ1iAx2zfbEWtkcICuW9j%2BzMa9nYdHDaIsoOadGkABgQ9Kg0QGCwO3vxmlrEGZHq7G2YKnlG%2BeGHVHC1Y5DOmw2XLOGgjhlaSrs6HrcYS1fYomZsjawJmfnrn19xAq6CNTthgqL5DqZUqVAqvD4zOCYlwtwD0T%2FcC9FYJIxC4SOeHSH94uP5Tze1QxkO82jg4mh24BEgY3HpJLtgA4rD%2B4DSW7h%2FCYMcOKUiga9dYhfMXYiKtlwrVe291x%2Bvu5LzUC7vhFmrxF6Oq1XDsJv9kGijypJxmb8iOFKmJwFblFvnzAVMQ7SdRUsGk5rsjXUc9H6qvjRUhX01F%2Fmy4Jsol%2FAPP9cqoWrLOvoV3P7nojMUXs%2FTXbn52Tjl8OXCBw3B6k2%2BD9KSuBPowuO20xAY6pgE53dtJI073ToBtflvkaFUzRJzcfVSCPapnys7K%2BoL4OVWKAVkzTPZ4gbJl297Yg%2FVH7LFGvHZJRkrOvnSDZ9L5%2BZqlVsl1PiSOKJ87MtJjEFt0lmUKVeC8HDVGgD7meUdAunJtOWk%2BiTOSVGNBFpuEoWcCacIiUVcA9ucyku9svtWAf1ipg%2Bx3FzegXewcfsE41DL%2F3ASR2p8pCTXTtBgvjqhsEQVY&X-Amz-Signature=13f8f3782b2a969cd6114363e26f9ebf61dc0257c5282607ba00a9a77d5f76bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- ~~origin~~
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- ~~origin~~
	- axis
- xacro:wheel

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDIDZMU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjOp2HQTF5%2BHilJub3Kx93bHDbMoZJO1BySuVFkOvkFAiEA83zvD2M0dg3pDg50QZUU7MG5h37qy6rES9nM%2FwGKYUIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa1oF5a3vZPHPpLgCrcA%2FpUZJlSDLn5vq4DfteLCwDj%2B7zPMt8sZTjqZzENeaio4OJ8Kyw%2BBgIeEprMTM20A0Y4hPsvf1lYEmf5tc4hjCUGPTBHD25%2BNoizZ4kXjbj49IBK0KkoP7OmQQn0ne6gCgaqcb9FS96DjdB1yDgE5vv2Z61SMwzpMYEtY7tOAbfK%2FyIth4t7p5VwppQW3FcyJPM%2Be31CdESlMAMoifUuNCTeolQJAh4v1JegIctL7JHdhlmwQy1nuHO85LLwwMWkeuviaiRPRM3KErScSIpoOBKRehm%2F%2Fu6l4Z0jeD1FzmAilTsctOCcrjHHHjMobahVogH7K%2BVgmZsNz6cya9C4k4W%2FZV8YOdJfwmi1o3POYLVgu99nLhYOStNy2jUXeWxOuN6S5ZfLAdHksMncjmdhHf1nve0KTtjUNLvcL3gj23xvO%2FEpXaBSAc6J%2FLuWb07eUNuJyI5BiLYIu9kZOHaKAt8AKgRvTiWXe6MXyiyXeDvG7mQm39CkeWV8onfuME99PyoL1yQBMGr%2FBF%2BS%2FCs7%2BQaUZtFZwKdm9iIo%2BlXzgpMIC3kSuVryAJRPlSNP%2FJYwPlX%2BTY8wnJRspD02tY61iIyheQpH08e%2B7Oo36uHLeGZsEN8iqq1sACgmMrSDMODttMQGOqUBs2PWldz9drz%2Bal2APhg6DQRFLLQC%2BcTwCAQEpj3rO14oahVh7uXnh0LjtbY6OGyEZrfzjWPnqvdXB4%2BcAvpOEbPgUf3oFiMffu%2F2sNOnpVHq0iy3IO%2FyD3NayAYzag1QOmLq%2BcAv6zayyc99h14dCKOyyXCY9Zg6sF8HsLFYKepDnH0OhQHRYolZa8i1eWaaiYI2VXA19jXiqt36ThqbqGpdM6Fn&X-Amz-Signature=b17abb9b8b597af2fdf7494daa9aa9f57fd70d3cdddfb820264a0d40631eb76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ZTFTU4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU00%2BFwH1DrJKlYaLPv8TaeDKKH1SFkTQjkYcjIA%2FcIAIgAssmTXValfjkti1FKdocjpsjg%2BSbP9ic0QJltOajtAEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvTNOUjsljIyPwBxircA%2FgVDUYug%2BSc5z94TrzsCjQz9b9s3KZmuWsWRcLAyRxEdpQ8nAJFT5wpUX7EfmkXdxJ%2BFLT3XaTFsYkSjmAcHJ%2BvQiMMkBV%2BGLhhGOyl8ik27SQHkjZF2TmK0k2hAkW4%2BwVZHDucEe0kCupmCxjkUVgMTcOFphkLz9%2FAyAm6ZHAIRY0ug0Vbh4r4dL70cXesgrKTd0bfC1%2FLSSdknWTfmc6NKflHB2hjjUXd3s%2BiGpBWefsJfKNx5ChfXbLDs%2FmSImOZ077LWVwljgkW0YeKnC0iaSVxxrf3eUmiHWt6DofrcostrNuk3h0u7hfH0LceADoNRK1k8HVIVbor57VITazczsBXE4NVUvDxShqR0kq6EEIXC5ZOaMlv2kql%2FcBFqnpjTAAmbyGlmBZkwXR8rJacMlky%2FHawtF0LFTG2N7zfTJP2WbSNEafaeeVXNogk4rEmdagI%2Fy9poYIUxFNOExv4YUnaps5IjumakEmOCCOc%2BOgnbRJJrKRGKaSZf2YsITZCPeqGeityTT%2FJJsvn49PfMvkhq88hTdgOoaiVFSMYDQMkz5CrqLRltr8h%2FpZtdAqxGSMHLuVIR%2FwShQXacd0BLpK58CABNSR59DUo1lAkvOanqC7pW5srrMC3MP3ttMQGOqUBMRIz%2FDHHLjHFs8MTAlM%2BV8evpWJwQkYkGmQUAf1qCCeSPZtThMs3Y7qI0ChO2c%2F16iOycnxFAuypOE2c8fNeZxP8yOaxlb1foi9L0U8kvj%2B2Cmu%2B4SeXJGas9FsP6xXu%2FaDAOwwd%2Fr53Nvt0Ie6%2Bt0xK1zB7%2FgOnQMGvPpx14AI08YWbvMZghNEdJ0Djvd7RpsPRHSIFZdRKEesA80AdMnCXgsLQ&X-Amz-Signature=c37fabfd37b31d92a2981876e5595b7b471c082785b9c6a2db4a144e5ea3c839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ZTFTU4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU00%2BFwH1DrJKlYaLPv8TaeDKKH1SFkTQjkYcjIA%2FcIAIgAssmTXValfjkti1FKdocjpsjg%2BSbP9ic0QJltOajtAEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvTNOUjsljIyPwBxircA%2FgVDUYug%2BSc5z94TrzsCjQz9b9s3KZmuWsWRcLAyRxEdpQ8nAJFT5wpUX7EfmkXdxJ%2BFLT3XaTFsYkSjmAcHJ%2BvQiMMkBV%2BGLhhGOyl8ik27SQHkjZF2TmK0k2hAkW4%2BwVZHDucEe0kCupmCxjkUVgMTcOFphkLz9%2FAyAm6ZHAIRY0ug0Vbh4r4dL70cXesgrKTd0bfC1%2FLSSdknWTfmc6NKflHB2hjjUXd3s%2BiGpBWefsJfKNx5ChfXbLDs%2FmSImOZ077LWVwljgkW0YeKnC0iaSVxxrf3eUmiHWt6DofrcostrNuk3h0u7hfH0LceADoNRK1k8HVIVbor57VITazczsBXE4NVUvDxShqR0kq6EEIXC5ZOaMlv2kql%2FcBFqnpjTAAmbyGlmBZkwXR8rJacMlky%2FHawtF0LFTG2N7zfTJP2WbSNEafaeeVXNogk4rEmdagI%2Fy9poYIUxFNOExv4YUnaps5IjumakEmOCCOc%2BOgnbRJJrKRGKaSZf2YsITZCPeqGeityTT%2FJJsvn49PfMvkhq88hTdgOoaiVFSMYDQMkz5CrqLRltr8h%2FpZtdAqxGSMHLuVIR%2FwShQXacd0BLpK58CABNSR59DUo1lAkvOanqC7pW5srrMC3MP3ttMQGOqUBMRIz%2FDHHLjHFs8MTAlM%2BV8evpWJwQkYkGmQUAf1qCCeSPZtThMs3Y7qI0ChO2c%2F16iOycnxFAuypOE2c8fNeZxP8yOaxlb1foi9L0U8kvj%2B2Cmu%2B4SeXJGas9FsP6xXu%2FaDAOwwd%2Fr53Nvt0Ie6%2Bt0xK1zB7%2FgOnQMGvPpx14AI08YWbvMZghNEdJ0Djvd7RpsPRHSIFZdRKEesA80AdMnCXgsLQ&X-Amz-Signature=0d2d44c77e9b2cdf34265984897c1f83aca836985a8a4b1c633f40f0967b6eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ZTFTU4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU00%2BFwH1DrJKlYaLPv8TaeDKKH1SFkTQjkYcjIA%2FcIAIgAssmTXValfjkti1FKdocjpsjg%2BSbP9ic0QJltOajtAEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvTNOUjsljIyPwBxircA%2FgVDUYug%2BSc5z94TrzsCjQz9b9s3KZmuWsWRcLAyRxEdpQ8nAJFT5wpUX7EfmkXdxJ%2BFLT3XaTFsYkSjmAcHJ%2BvQiMMkBV%2BGLhhGOyl8ik27SQHkjZF2TmK0k2hAkW4%2BwVZHDucEe0kCupmCxjkUVgMTcOFphkLz9%2FAyAm6ZHAIRY0ug0Vbh4r4dL70cXesgrKTd0bfC1%2FLSSdknWTfmc6NKflHB2hjjUXd3s%2BiGpBWefsJfKNx5ChfXbLDs%2FmSImOZ077LWVwljgkW0YeKnC0iaSVxxrf3eUmiHWt6DofrcostrNuk3h0u7hfH0LceADoNRK1k8HVIVbor57VITazczsBXE4NVUvDxShqR0kq6EEIXC5ZOaMlv2kql%2FcBFqnpjTAAmbyGlmBZkwXR8rJacMlky%2FHawtF0LFTG2N7zfTJP2WbSNEafaeeVXNogk4rEmdagI%2Fy9poYIUxFNOExv4YUnaps5IjumakEmOCCOc%2BOgnbRJJrKRGKaSZf2YsITZCPeqGeityTT%2FJJsvn49PfMvkhq88hTdgOoaiVFSMYDQMkz5CrqLRltr8h%2FpZtdAqxGSMHLuVIR%2FwShQXacd0BLpK58CABNSR59DUo1lAkvOanqC7pW5srrMC3MP3ttMQGOqUBMRIz%2FDHHLjHFs8MTAlM%2BV8evpWJwQkYkGmQUAf1qCCeSPZtThMs3Y7qI0ChO2c%2F16iOycnxFAuypOE2c8fNeZxP8yOaxlb1foi9L0U8kvj%2B2Cmu%2B4SeXJGas9FsP6xXu%2FaDAOwwd%2Fr53Nvt0Ie6%2Bt0xK1zB7%2FgOnQMGvPpx14AI08YWbvMZghNEdJ0Djvd7RpsPRHSIFZdRKEesA80AdMnCXgsLQ&X-Amz-Signature=c455539d6a60752c35c96c4a421d224dbbc3f5cf5309a817e05b2fa9d4774294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ZTFTU4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU00%2BFwH1DrJKlYaLPv8TaeDKKH1SFkTQjkYcjIA%2FcIAIgAssmTXValfjkti1FKdocjpsjg%2BSbP9ic0QJltOajtAEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvTNOUjsljIyPwBxircA%2FgVDUYug%2BSc5z94TrzsCjQz9b9s3KZmuWsWRcLAyRxEdpQ8nAJFT5wpUX7EfmkXdxJ%2BFLT3XaTFsYkSjmAcHJ%2BvQiMMkBV%2BGLhhGOyl8ik27SQHkjZF2TmK0k2hAkW4%2BwVZHDucEe0kCupmCxjkUVgMTcOFphkLz9%2FAyAm6ZHAIRY0ug0Vbh4r4dL70cXesgrKTd0bfC1%2FLSSdknWTfmc6NKflHB2hjjUXd3s%2BiGpBWefsJfKNx5ChfXbLDs%2FmSImOZ077LWVwljgkW0YeKnC0iaSVxxrf3eUmiHWt6DofrcostrNuk3h0u7hfH0LceADoNRK1k8HVIVbor57VITazczsBXE4NVUvDxShqR0kq6EEIXC5ZOaMlv2kql%2FcBFqnpjTAAmbyGlmBZkwXR8rJacMlky%2FHawtF0LFTG2N7zfTJP2WbSNEafaeeVXNogk4rEmdagI%2Fy9poYIUxFNOExv4YUnaps5IjumakEmOCCOc%2BOgnbRJJrKRGKaSZf2YsITZCPeqGeityTT%2FJJsvn49PfMvkhq88hTdgOoaiVFSMYDQMkz5CrqLRltr8h%2FpZtdAqxGSMHLuVIR%2FwShQXacd0BLpK58CABNSR59DUo1lAkvOanqC7pW5srrMC3MP3ttMQGOqUBMRIz%2FDHHLjHFs8MTAlM%2BV8evpWJwQkYkGmQUAf1qCCeSPZtThMs3Y7qI0ChO2c%2F16iOycnxFAuypOE2c8fNeZxP8yOaxlb1foi9L0U8kvj%2B2Cmu%2B4SeXJGas9FsP6xXu%2FaDAOwwd%2Fr53Nvt0Ie6%2Bt0xK1zB7%2FgOnQMGvPpx14AI08YWbvMZghNEdJ0Djvd7RpsPRHSIFZdRKEesA80AdMnCXgsLQ&X-Amz-Signature=1a50828a289e61f5467cf53e5e27ec2fdf1231a5170f1f77ba503637e60f406c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ZTFTU4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU00%2BFwH1DrJKlYaLPv8TaeDKKH1SFkTQjkYcjIA%2FcIAIgAssmTXValfjkti1FKdocjpsjg%2BSbP9ic0QJltOajtAEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvTNOUjsljIyPwBxircA%2FgVDUYug%2BSc5z94TrzsCjQz9b9s3KZmuWsWRcLAyRxEdpQ8nAJFT5wpUX7EfmkXdxJ%2BFLT3XaTFsYkSjmAcHJ%2BvQiMMkBV%2BGLhhGOyl8ik27SQHkjZF2TmK0k2hAkW4%2BwVZHDucEe0kCupmCxjkUVgMTcOFphkLz9%2FAyAm6ZHAIRY0ug0Vbh4r4dL70cXesgrKTd0bfC1%2FLSSdknWTfmc6NKflHB2hjjUXd3s%2BiGpBWefsJfKNx5ChfXbLDs%2FmSImOZ077LWVwljgkW0YeKnC0iaSVxxrf3eUmiHWt6DofrcostrNuk3h0u7hfH0LceADoNRK1k8HVIVbor57VITazczsBXE4NVUvDxShqR0kq6EEIXC5ZOaMlv2kql%2FcBFqnpjTAAmbyGlmBZkwXR8rJacMlky%2FHawtF0LFTG2N7zfTJP2WbSNEafaeeVXNogk4rEmdagI%2Fy9poYIUxFNOExv4YUnaps5IjumakEmOCCOc%2BOgnbRJJrKRGKaSZf2YsITZCPeqGeityTT%2FJJsvn49PfMvkhq88hTdgOoaiVFSMYDQMkz5CrqLRltr8h%2FpZtdAqxGSMHLuVIR%2FwShQXacd0BLpK58CABNSR59DUo1lAkvOanqC7pW5srrMC3MP3ttMQGOqUBMRIz%2FDHHLjHFs8MTAlM%2BV8evpWJwQkYkGmQUAf1qCCeSPZtThMs3Y7qI0ChO2c%2F16iOycnxFAuypOE2c8fNeZxP8yOaxlb1foi9L0U8kvj%2B2Cmu%2B4SeXJGas9FsP6xXu%2FaDAOwwd%2Fr53Nvt0Ie6%2Bt0xK1zB7%2FgOnQMGvPpx14AI08YWbvMZghNEdJ0Djvd7RpsPRHSIFZdRKEesA80AdMnCXgsLQ&X-Amz-Signature=4ff87f07d13582d5e85bc493cf27dcf245f15f47ee3571cccd7e8e444ec2c536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ZTFTU4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU00%2BFwH1DrJKlYaLPv8TaeDKKH1SFkTQjkYcjIA%2FcIAIgAssmTXValfjkti1FKdocjpsjg%2BSbP9ic0QJltOajtAEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvTNOUjsljIyPwBxircA%2FgVDUYug%2BSc5z94TrzsCjQz9b9s3KZmuWsWRcLAyRxEdpQ8nAJFT5wpUX7EfmkXdxJ%2BFLT3XaTFsYkSjmAcHJ%2BvQiMMkBV%2BGLhhGOyl8ik27SQHkjZF2TmK0k2hAkW4%2BwVZHDucEe0kCupmCxjkUVgMTcOFphkLz9%2FAyAm6ZHAIRY0ug0Vbh4r4dL70cXesgrKTd0bfC1%2FLSSdknWTfmc6NKflHB2hjjUXd3s%2BiGpBWefsJfKNx5ChfXbLDs%2FmSImOZ077LWVwljgkW0YeKnC0iaSVxxrf3eUmiHWt6DofrcostrNuk3h0u7hfH0LceADoNRK1k8HVIVbor57VITazczsBXE4NVUvDxShqR0kq6EEIXC5ZOaMlv2kql%2FcBFqnpjTAAmbyGlmBZkwXR8rJacMlky%2FHawtF0LFTG2N7zfTJP2WbSNEafaeeVXNogk4rEmdagI%2Fy9poYIUxFNOExv4YUnaps5IjumakEmOCCOc%2BOgnbRJJrKRGKaSZf2YsITZCPeqGeityTT%2FJJsvn49PfMvkhq88hTdgOoaiVFSMYDQMkz5CrqLRltr8h%2FpZtdAqxGSMHLuVIR%2FwShQXacd0BLpK58CABNSR59DUo1lAkvOanqC7pW5srrMC3MP3ttMQGOqUBMRIz%2FDHHLjHFs8MTAlM%2BV8evpWJwQkYkGmQUAf1qCCeSPZtThMs3Y7qI0ChO2c%2F16iOycnxFAuypOE2c8fNeZxP8yOaxlb1foi9L0U8kvj%2B2Cmu%2B4SeXJGas9FsP6xXu%2FaDAOwwd%2Fr53Nvt0Ie6%2Bt0xK1zB7%2FgOnQMGvPpx14AI08YWbvMZghNEdJ0Djvd7RpsPRHSIFZdRKEesA80AdMnCXgsLQ&X-Amz-Signature=a570e306413aafacc25e49b4152a423d144eab638574d8fc6f853908459b26bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ZTFTU4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU00%2BFwH1DrJKlYaLPv8TaeDKKH1SFkTQjkYcjIA%2FcIAIgAssmTXValfjkti1FKdocjpsjg%2BSbP9ic0QJltOajtAEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvTNOUjsljIyPwBxircA%2FgVDUYug%2BSc5z94TrzsCjQz9b9s3KZmuWsWRcLAyRxEdpQ8nAJFT5wpUX7EfmkXdxJ%2BFLT3XaTFsYkSjmAcHJ%2BvQiMMkBV%2BGLhhGOyl8ik27SQHkjZF2TmK0k2hAkW4%2BwVZHDucEe0kCupmCxjkUVgMTcOFphkLz9%2FAyAm6ZHAIRY0ug0Vbh4r4dL70cXesgrKTd0bfC1%2FLSSdknWTfmc6NKflHB2hjjUXd3s%2BiGpBWefsJfKNx5ChfXbLDs%2FmSImOZ077LWVwljgkW0YeKnC0iaSVxxrf3eUmiHWt6DofrcostrNuk3h0u7hfH0LceADoNRK1k8HVIVbor57VITazczsBXE4NVUvDxShqR0kq6EEIXC5ZOaMlv2kql%2FcBFqnpjTAAmbyGlmBZkwXR8rJacMlky%2FHawtF0LFTG2N7zfTJP2WbSNEafaeeVXNogk4rEmdagI%2Fy9poYIUxFNOExv4YUnaps5IjumakEmOCCOc%2BOgnbRJJrKRGKaSZf2YsITZCPeqGeityTT%2FJJsvn49PfMvkhq88hTdgOoaiVFSMYDQMkz5CrqLRltr8h%2FpZtdAqxGSMHLuVIR%2FwShQXacd0BLpK58CABNSR59DUo1lAkvOanqC7pW5srrMC3MP3ttMQGOqUBMRIz%2FDHHLjHFs8MTAlM%2BV8evpWJwQkYkGmQUAf1qCCeSPZtThMs3Y7qI0ChO2c%2F16iOycnxFAuypOE2c8fNeZxP8yOaxlb1foi9L0U8kvj%2B2Cmu%2B4SeXJGas9FsP6xXu%2FaDAOwwd%2Fr53Nvt0Ie6%2Bt0xK1zB7%2FgOnQMGvPpx14AI08YWbvMZghNEdJ0Djvd7RpsPRHSIFZdRKEesA80AdMnCXgsLQ&X-Amz-Signature=971ff64335bd75c9f66633916c3918c41e699e57d923cb950e8ca57484e303ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ZTFTU4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU00%2BFwH1DrJKlYaLPv8TaeDKKH1SFkTQjkYcjIA%2FcIAIgAssmTXValfjkti1FKdocjpsjg%2BSbP9ic0QJltOajtAEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvTNOUjsljIyPwBxircA%2FgVDUYug%2BSc5z94TrzsCjQz9b9s3KZmuWsWRcLAyRxEdpQ8nAJFT5wpUX7EfmkXdxJ%2BFLT3XaTFsYkSjmAcHJ%2BvQiMMkBV%2BGLhhGOyl8ik27SQHkjZF2TmK0k2hAkW4%2BwVZHDucEe0kCupmCxjkUVgMTcOFphkLz9%2FAyAm6ZHAIRY0ug0Vbh4r4dL70cXesgrKTd0bfC1%2FLSSdknWTfmc6NKflHB2hjjUXd3s%2BiGpBWefsJfKNx5ChfXbLDs%2FmSImOZ077LWVwljgkW0YeKnC0iaSVxxrf3eUmiHWt6DofrcostrNuk3h0u7hfH0LceADoNRK1k8HVIVbor57VITazczsBXE4NVUvDxShqR0kq6EEIXC5ZOaMlv2kql%2FcBFqnpjTAAmbyGlmBZkwXR8rJacMlky%2FHawtF0LFTG2N7zfTJP2WbSNEafaeeVXNogk4rEmdagI%2Fy9poYIUxFNOExv4YUnaps5IjumakEmOCCOc%2BOgnbRJJrKRGKaSZf2YsITZCPeqGeityTT%2FJJsvn49PfMvkhq88hTdgOoaiVFSMYDQMkz5CrqLRltr8h%2FpZtdAqxGSMHLuVIR%2FwShQXacd0BLpK58CABNSR59DUo1lAkvOanqC7pW5srrMC3MP3ttMQGOqUBMRIz%2FDHHLjHFs8MTAlM%2BV8evpWJwQkYkGmQUAf1qCCeSPZtThMs3Y7qI0ChO2c%2F16iOycnxFAuypOE2c8fNeZxP8yOaxlb1foi9L0U8kvj%2B2Cmu%2B4SeXJGas9FsP6xXu%2FaDAOwwd%2Fr53Nvt0Ie6%2Bt0xK1zB7%2FgOnQMGvPpx14AI08YWbvMZghNEdJ0Djvd7RpsPRHSIFZdRKEesA80AdMnCXgsLQ&X-Amz-Signature=c6e4add292904b97d088751d28a1148a60898671ab19414087807c12a9203f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ZTFTU4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU00%2BFwH1DrJKlYaLPv8TaeDKKH1SFkTQjkYcjIA%2FcIAIgAssmTXValfjkti1FKdocjpsjg%2BSbP9ic0QJltOajtAEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvTNOUjsljIyPwBxircA%2FgVDUYug%2BSc5z94TrzsCjQz9b9s3KZmuWsWRcLAyRxEdpQ8nAJFT5wpUX7EfmkXdxJ%2BFLT3XaTFsYkSjmAcHJ%2BvQiMMkBV%2BGLhhGOyl8ik27SQHkjZF2TmK0k2hAkW4%2BwVZHDucEe0kCupmCxjkUVgMTcOFphkLz9%2FAyAm6ZHAIRY0ug0Vbh4r4dL70cXesgrKTd0bfC1%2FLSSdknWTfmc6NKflHB2hjjUXd3s%2BiGpBWefsJfKNx5ChfXbLDs%2FmSImOZ077LWVwljgkW0YeKnC0iaSVxxrf3eUmiHWt6DofrcostrNuk3h0u7hfH0LceADoNRK1k8HVIVbor57VITazczsBXE4NVUvDxShqR0kq6EEIXC5ZOaMlv2kql%2FcBFqnpjTAAmbyGlmBZkwXR8rJacMlky%2FHawtF0LFTG2N7zfTJP2WbSNEafaeeVXNogk4rEmdagI%2Fy9poYIUxFNOExv4YUnaps5IjumakEmOCCOc%2BOgnbRJJrKRGKaSZf2YsITZCPeqGeityTT%2FJJsvn49PfMvkhq88hTdgOoaiVFSMYDQMkz5CrqLRltr8h%2FpZtdAqxGSMHLuVIR%2FwShQXacd0BLpK58CABNSR59DUo1lAkvOanqC7pW5srrMC3MP3ttMQGOqUBMRIz%2FDHHLjHFs8MTAlM%2BV8evpWJwQkYkGmQUAf1qCCeSPZtThMs3Y7qI0ChO2c%2F16iOycnxFAuypOE2c8fNeZxP8yOaxlb1foi9L0U8kvj%2B2Cmu%2B4SeXJGas9FsP6xXu%2FaDAOwwd%2Fr53Nvt0Ie6%2Bt0xK1zB7%2FgOnQMGvPpx14AI08YWbvMZghNEdJ0Djvd7RpsPRHSIFZdRKEesA80AdMnCXgsLQ&X-Amz-Signature=41d29f5ffb7f3887ab50c92d0cd09161893eec7846ab57dc0ec41ce8324a8a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
