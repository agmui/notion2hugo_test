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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=a9c4055ff071d31e4e4d918fb2303aa87976f530f2139ef52c6b58faf3725112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=1c3457d71367d144b516b13385aa5e9bed67e643b62fdb381a40d7e3f7b710f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=96e93f08a1b3080b1c2a7a44703da93857829a371df167fc95ffeb1bed6e8596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=bd3ce939e65f5331116741c9dbf564cf479b2ef931d75b2c1583f0c80d662ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=a716b0806a7d8bba1f1b4e88813b048fa9866f73e4e21fb638544683b245f84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=75cbdf47fea7f72c462421473b22433070797b50cdcfcc04f191586ed81ca195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=6277bb627b9457e285f75c04fe02c8737dc582a7557d6e337d118143f9b61a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=f54b2dff9a4c6215f41f3a97dddb51fbda7b4b551f255032527d45b13920bbfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=6cceba9122cfe4247dbfd561442aa5c9467f6918c35a3695c5108635aa5a3ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=73807ee7d9d2cb3024a7116c8fae76ca000af16442245a66de1324a76efec685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVA4OJZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC921U4uULRXYCNhS%2BbV5UhV%2FepoxxnX8Q7fCZpHE1W9gIhALOfIrGfzYYusOFM6VeGFWP0Np0awgpryzZI%2BirEuPLdKv8DCE0QABoMNjM3NDIzMTgzODA1Igz8cu2Lj8MEBk81KjIq3AOlxBzm7kixFEzGA100EHjGRwSJPP4f%2BO3DsYSIDW10NAkg7NiYFhPeL6sesoK7AUZr7CR2iAUwwqa46q6lcu07jhN1ZD0fxH2ZrcgbhZYT67KRudA2DYRi%2FqiiNcURJBXja1eIuW5pgZ%2FnzXlwPj7s%2BfxOBG1Whi07mEwqpRoOWlj%2F8jSudQyBdGgYdmeBtcXEHZ6swtEnCx5bxtSlGs1fy0ZeOufj0TU4XHQK7lTJU%2BdZpPWI0RY%2FSaaPXQOq4pSqLymwFPZC%2F%2BSdCuHXN5jGsqBDHEQrc2dAHJrW4OxP%2BqBtNwUR4KKBbAkp4YD%2FCbObbPQ4TbGCPWmtj4pz8q1d%2BXvI1ob5UaeqsGjd1bh2ajpdXjo3ZUkxzaqYFSFUQSIA4xqFHbZZTXA5JdVWXxqcDsVXFiY4Czk35maCpxb7dfIuUskygBNAzKnjnT0YhlaxgiHnNzfgw66aFuMGJhFlQ%2BIQEgEiwelJdgGWogVMi2yNa18%2F7BSi4WWDwHagSFJJ%2BiCbdgIyXRuSP6Re89TxOwUr3Bg7P4iMYQNNyB0xAPfEJuOLY4KesO19oUrySSBcmtg1lCHGBPTLpXtRTRVBDpgBKs41UdNRzTP5NSgbltN4jPYWLw1g0MeXcjDfnMTEBjqkAZna4KrswInDbq7qgCkxA0T0oxEVyX3jAV%2BtHAh1WfcJah2%2Bn7tQvNnY61fpLpVt1sz%2BYIRUEE%2FpZCbHZ9qCgAgMSU9OL44tnERH14e4oUr6dLPpriuo8ABarFwUYAl8eMlHA%2Bh2u4RkJOgGXmYWKyH3JvlEnpS11mvIY32gi8SmXxvT%2FKDKmlKapAHUzBCpQtzj%2FqNZVLmcVyIwuJRtq5fyS%2FWf&X-Amz-Signature=edca383a59e76c622b9240e1016a90f3964b36ae14a8672e0999aecfffb411f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVO5XYO5%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBK8ZYIVH9gCWyczhNh9B9ehWRM0a3DprqwOogfaJUCQAiEAkVYbWpQa1XYxouNzHBhJkImS6c4i7JTiwAYP%2FSvSS1cq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLqNLe4uh6q8lNX3lSrcA1C3SqNRPjFZWrYlgM1uhLKf5erLV%2BQtEsoeadapXvQE%2Bf6XtHCZYPYb64%2B33PZn%2FeOuqo2JoaXjR3Jldfm118uGIJezgABxm9ZF%2BhkHmOzPkN3P9eTrk9lOap2eLu3rIPVgnryVPmyL7%2FwncdhISdA2Kqq4MBgFG6ufFBHRKMj4YZ3ZcMOsjC0JYmaMcasxeSIbNJz2Sy9sDjr7jqHdJ4tQytHZdPYPb%2BjxwdScBIUMk0WljzoLomhspLbdtnwBgXAK1b6vPFSel4vz7ldR3XonOv895DBgi%2BujEaiV4FQFwz5UWDR7VmO4EAA7E3YTRdEoJuP1DH%2B2tg9OrOdp2PRkb7VRDD1SuvwxhDSluwxe%2FSxWrCbEznpZvDQAqth5Z1Rkim3Y9ESZqQ4fhkFIW4BG445T6jP%2B9YcGAYsO0tXT2lUhpTkBkH7a2DQdfLY9DFfu5NhG7m8jsC6O60TsgCxCkv%2FAHV%2B5cmA43jBvovIQPOw5XQbpgbjVgS6fLjO%2FjIjzrO1zRjjIKOnhwNIXXLFq%2FfrLqqXpkdgF%2BpLcJKRtFtBi%2BM92j1kHPru4Rf5MxHAsFBkDXAttC3ohrhXwjpCLJzRCqbBh9gBMNVoJuaPxsx7iY0lYJE4G%2BVwwMJedxMQGOqUBNDW767FF93jJDrYvh48TTVBD0U%2FmLva50D8lfbwS4TqK3aqt1HFCdcHbjQY7Q1vqRupaVSDgyToB5lsuu%2BnjIyB2Qn%2Fevzk%2BRzUIUV72K2osz535ft094ppGAM9XA6GzvKwwY55U3zye%2B4T8PHjXHn3%2FhrJvvoqm21xT7a1nIoXcVlZGKxUHINvP94mqgSIKGQ5%2FBQHY4RqYT0jbKDQf3nAyP14C&X-Amz-Signature=14a8f8824f2ffdfdc006fe3dc588959ecb26ef664eb277281d37307bcd454469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIL2PRD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIB7kPOeWGUNQcry7CgQh33Rct9y%2FzHuEwPprluEgRojXAiBMs7Kp2mLEGefJUn%2F5uKKSlfFPIdBey8AYG5R81mXqzCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMCMjKxpxnU6qvQW5mKtwDWM434khDcY0f1xITKb9j3NNEOiyhyo7OH95LVhg%2FTqRFds%2FKICTZZAg7bkm0dNqy%2FYFNvFzbxC4lfAa5o9xzfW3tT0Un5IZ1lZNb8BqzSGE%2BITx%2BufgXXnE7SczTRCatKSuJXdUyZJJUB4LTHR0LT13wscJHl3LmgOPom5V8OXxatN4elsYYCHg6HzJGqns8QpMMxO9vxdLFakf%2BSh4BCrnucdId47hEdRrEviUkoHI8HJVo85ltDaIt%2Fcf%2BLITwiCIwZh%2BIIcfj0oSyDEpYLfLlorhZcHR22LFQLoXX47iIRZftYctr3%2BH%2FImlDZxVaVoAHFKIxmf8CBrejj9N5UEgagmsmKCz5Bj%2BEMOye1haZtROQlOucuEP1tG5w6Kp6oI5dGxaaYX%2FHlvXATnB1Iu9uHO3459OjkhB1thtp%2FTVjWs3Y6oROSBDGLZ%2BKhr6jbzwKe3dZUB2WbsMGfburCnYSJ0DLrmHVKfipdmkzEvCnVEEITobyZP6nGPM4jBYU3yKVln4t9bWtkE2zcCBpH4Z7dGXx4HNmJrEep9N0rP969cDeNAcxAcTQkqKXWavgtMK%2Bd32FRRBmeamUS1xlaiWst8qtUN%2FHGBLPh%2BdsuqffQ95Pbrga63hdTiAwl53ExAY6pgFy8bi%2BLW46mzAc5N4LoHKZ5RIO4ZwcVDPC%2B17S5svoXmSegh0AFZvx1xORYTnDCewrCkVaZoY0ukWU3VLWvk8IPyutHaeqadXp1WMKRVIocCB1nuuGUon1%2BdOIwlVfrdUPtBqT%2BZyEx3bNljLGfyvIIFh1Efq%2BTbRA80qmV1zRVa%2FGvyeKxutUvaV01Ub%2BWDDSArpcG7DXk2WoqUrvRF2W64UzVoCr&X-Amz-Signature=ffbc28ff41b3dacbb303a8c9fbd8f573f25074c9de816469dfc7890b2c4f6ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=b0c85a15ef794933d35ccce6a52a43297580ac272f653bcb93faae08ea1f3acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFJ3P6J%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEterW9aKk5KB8lekjW7xnasuS1rgyr3BVzfhzJXw0FPAiEA42DYBD9dNLoKXxX%2FtFO%2BECZVPJfDrxW8wzWNlulEAaIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPMx6P33FElJg%2F%2B4pyrcA4qYkw%2B4z%2FoE0IJSEUGyBbNbN9OjkeplDcpjbBboIA%2F886aUygu3BM9DxZa%2F1XKfFSCDCpDLLgLSxwK%2Fbc2WwUgMg59oT4i7r2q8dC08c12sOBCdx6pl71vr9c%2Fjzn4gLJLvUpFp8VadxGsWLlv6Cf8PG2SZvCt6f%2FULY5F2KvhBldYGMND3ZWXhTL5c4Z3Xs7yalAYulcCLS7PwHCRYtDocyqUR0SkNnd6u9dM5v%2BkBm78SjVdnP5kIvlK%2FAi4kED%2FPi0acJUflPBezOt6PQHAyk0oD94arIloeSlnerDIy2aSyFCZG4jE3nSmDHhnUcU3YbvO7X%2FcK7z%2BgIu1wQWGFQpGgSPyDpZLoOoFnY5WWAOX%2FDOTuy1uyUOZXjxqLKKKcdydVwjeuiOpD%2FqjxAVvOuVYW8C0m2I%2BDWnDd42SqDzy16ODuyOHf2KNPe%2B6yk8CiiiZguZ01AwSl8HNC7fBJJRXe9V6PYqgjcblCa6qQ1etIpJRTcfjIrvOwDR08oGTuRnMGPThe%2FdfsDTUtm%2FRCVh7NHBC90kq92IhbfahX1i4FdHmDA3wA%2Bhoms1zIFIQkfO%2FFKc4sIr0gaZflpveboIa81mo9qQSwRHiJnxJC2QLRvn7B9srq0yw2MPKcxMQGOqUB80Bs5zbaMj1cVGIsJ4yzgkxdoJQn%2B55kzvshgfUNEJiFe7oSjyw6jZQ863KBO4X2GjZf%2FqqVJc2JVMAH2cudSmSj1IXrpkTZV0ws0UyoHDJoG7St7H3Z2oEdeOgRma6LkiPUVHtUUjUjyrkcACv07TaD757lbRG4SNaKziFC432gSPle0jBXuidrgbPB21uhvoCmiyqDl%2BUW3ULUx8XYzvl%2ByyEb&X-Amz-Signature=6e579d42afb85149671505715d08cea37dd81685714dda321b49ff09d5f6cd75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=74465ada290c8118fc7e3bc9af7c548a130f9165314f92ea19d418fc7fa0c346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7HNZGLE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQD7LAZ51aaFlJVVl5C5w1OgkH0TNSTq3NJXKcspxtXvQQIhAL0vPgn8mKsrrPnPd8pRcDaNFWQBeqxwN5UO3bOv2Tu5Kv8DCE0QABoMNjM3NDIzMTgzODA1IgxM6nyaUsbrq0%2B%2FrjQq3AO4Hv2TUlpRYC5DiVfFHQsirU9Z2l317zXYCgJ7fB9b8jhBOz68hruGSzndU5lIlNFZCEWVVvh5oG1qgIFaQy9szTGEmD51GHG0DYqYGGq2Xr3X58W8QarPIRAmn58%2Bzan%2BRBMlAcPuwVkQAO54B8guuLw1xa5gK9EvtqFf31DexLlOtEJNXisXJ4hkTwjc2s6GVFZl1Rx%2BNoIxDwKBnpDoTWSkFFss1EsHrzS2I7gdblnLrmp%2Bo6xq6eZai9YgzIyQTWRSGihwyn%2BZS8Mv6Bj77jUnouOEQL3bEJDMrfytlYi7noAg3nYtZ0KCwYOXRwH1hWHX3qA%2FwhdVOJKOR5QnHR0ZWfuTFbfJmdfHB6GIfaGVojGsFNAcBQ4NrLaFUvSW%2BSDaMunuYQU9%2FauVzulwwocTT5VVUicFDqcLADInJn8jJagm4rN4WNT9fDVv3h3cAwOG%2BUk1zlUfiqy5zvRw1y%2FBYT3b%2FEn7RSsZIpt5%2F5G1GmN7zZ9blzngE9BoOvkFQYtIHTaOOysdK%2FS5Eofhjst38R%2BhgvuGbSX1hWFM0RDCa75LCPjHOHFpV5cnrb2aeS%2FJFYCuY5rCZoVjn6Sgngdz7IGUMv%2FI8bWY8Kqr43paauMxBLL3a4FZhzCencTEBjqkARq3TR0cxyPNnoyCAJ2pvphR7znTzt8k1ylUak5vKuYXxonO4MfHp%2FVRcvKksmbI7ggALwA1F3Z%2BHoqv%2FARQi1kzXzxIcl8uM%2FnThNFsOtiG%2Fc8JZsz9KCZvbl0CDIWhDGyQGnOX63aG2tOHM7o%2F9xd34EJb6VvcvHFLsiUj3%2BW91Gassfra3DEQ0mmM%2BgayQQCLGsYIAOSCP43XACsLEZKrcgg2&X-Amz-Signature=aa8d5638ec62cb9c4d35329f40edebba226afde2d970b2fa2c0474987eb7d5d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=b62465b4890f2a01277cb82093389f254c5f281f2b6bbc52e2b23c00681f662b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFOU7B7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC61yUc5av7xgFAJeWMLlE%2BNYrygISs4YxE2%2BVddUkLfwIgQtlcNsg3eRrNDTpq%2FI%2F340Nr4r6CpBc9qyw%2BhZJvUWwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLbkyjpYZUAZT9BBkCrcA%2FTOdOzkv1mYJm5cVyZG0ENXVQJcIe%2BayK7cdaVf2R77My66LMwlq4l4vw3yHoX4vS8iBGQknZNujQIXPwrrop0Vd7QI89ocEb%2BHPF5R1VSN5gN%2FJ5s0iou5nvrHXo03cyNNr%2BJElPcyziD0yVfCPv2rIijOc%2BtMh9GhBZNPyGHK3XDQqRCS5eRE4lZq2CI%2FcOha2%2F%2BqhkHPlsJ63KGFtNrDnWCoogyZuFXq0qQtW43sUz%2BRCRQahen0z%2BL6ZyUM9h5Svl9STUxeSZWrG1H0TlPDZcmaMJfatF9qhpEnRGGPUoZdYlliyBv0l9s9z5tY4aj7Qz58ph9SialVmId3AQsXMjSt3ri3RINgDMR79Ylbd1ouZqoFcIJVDNcdwLdIetjFItrO0z1EVt7HzCwJRoBKyXkN2TNgtvpR%2B4bLaJWQcILNAsXfd6kW28RL7g8dabBb72sUq5QV%2BTlX7GJbtGoXSn6eg%2Bd6%2FSDTTd4D%2FdLyLMGR%2BuiMHZMXwEJwirEtH12asGJKre9390u2gJdYaYCm1K6A6yqNCC9wAgYC3UFd2q1MW%2BVvs1aVsfq32cXh32%2B8Jd6DDSO0UcpliyXGIZyQx1zlwoCHgx0G5W8YqA3VpnQgIhH7MF0%2FGQhzMKmdxMQGOqUBimbtBljirGx0Z0xMGyDAa1vGp0j4FdryhixxarHykPop7kyH9d9ZufOia6kQP5vGkhrTu1UbMAElSkC4VT%2FkAnvizGiuo%2FOkjtggg22gmSxs6Pk9v1qfRu%2FPB8GlTUvLblCpYFwd1IB%2BkhSuh3Nz4cv%2F2JOIvD3KIfxg6RGrCj6WTdHfDMGrvX%2ByE9Oez7JmjvM1TiChdHJyYlNxd3sd5HmDOdtZ&X-Amz-Signature=b70c78fdf113dd3c303e995664571ace0e3584c99cd04f383c8936860d433b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=82b71bb56c45c40bc1ac6ae4038daf2dbd37a608ac1273144b7b458e1af3a554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ERYGAH3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDtLYuCUo59Zeu453%2F7zKO8ZprE7C1FEN5q67or%2BqJZwAIgEZ1rrKGpyD%2FMmM4p%2FAYA6e%2BxrpA4TwC3maUV2yXGbSEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCmx%2FzgljpKFA2I7MyrcA5qh0UuMf1nP1Yso6hOGOlW8GcXIOQKof6dtsKvrh0mYOTdSG6u2KOprTy7jwtuEcXjSwZgCaCBzs8GsYfPa%2FRWD2o%2FWyUMM3U4q7RjRDILADt%2FyI%2BzJrdICQ5FIFFKT4YHRoWKsTE%2BeS3DdKNsmJGom7CMcS5pQv9NnOTIfvyFFkzS2NRgehWENxRSb97Mu05W5SSZ5VU87N9vUE5YdNrkQbFNyrS352PA7JgctVAqrXeGbXz9zV4l4SXi6rVDKTl1AcAGMY5JopXAk0xHzSS8K9EnivR1w2UwQpsLF3jRllbPEkeGWRWWjkdmXULJeg8wzGH5oWWYH%2Frjfm2GGtp3vog0J%2FYyrxVLZwo84tnZA6bDnnUkUEQ4FkKpyJbfkN9yA5YNF4aCObQQY%2FrckTKZqN8UTc9whC5TNVGlkzhbFG7GCNG4Rrst%2BPg2UWcCH%2BEkJQ2xCDZh8zBkaYzuzaSUzzXoLF%2F1R%2Bulve0v%2F4P7LDJRiE0EyJqMoDkd6uJy9mGU4NZX3KER3iixhnnkNG2JdpXpU0nMLv%2BnOvpF3crnenXEiq5WBEZShrJTesRYcKb8wKIchEZzDNEyKLI5kWvexJEvGoPS8AuHvCqk9N4KIVb4vgdoR4itbemhyMKOdxMQGOqUBPWicN46JDZ2YcpW%2Fk34XKdrlvsjCv6wvyXl7c7pZeAtw34RFN9rWWsP3a0zXmwSlmSUKOrNF%2Be0CT5nPTSGEoE05oZfg5uYSFGoQalE4OS5W8yHi%2BeW95WtTnaiPhbpZyuLuUCObvdocH7n6LBYcyTh3r%2BMET3j%2FXo9cXmyu%2B7lWfZdO8T9iWA1VKkwV29GqnBwj1xNhwGfYhjq6y%2FECxYhCEyBf&X-Amz-Signature=00039d234b59b1e152142e1f2dcff6f9e592d604e92a022c1317620051f07184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635XD364S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIAMui%2FInm4Tx2NR8%2FkJinl0Joqu7tz5XGHgwd%2BcnfHuIAiEAlr%2BJijygaihOp%2FbYwUNTH1k3icQ63oNzXvtZvxgZbicq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDAej7I5p1SHqcU4QPCrcA4g5%2BcfZqaC8ndrnv8cJsBese3ulF58%2BxWXtoEcuaiwTaVJVEfVTWLeY8zgoPXcdFeSSKo%2FaY5nyM6sTZIoslJtscEHuF1aKaBxHjpsP0l%2BblLZr8yk0ByR7FD3qTJLYT5nPto261c5xm8FPL1indm5rEW2sjfD%2Bg%2FVYryDHvgEwXjPE0FSyvXzeoneH7FIoi09qbjh3qwOnLUf%2FQ6tLD83cYa%2B15YLD7Chm32ePi%2BeWTMl2RARKWxzitXacdCqds%2FwAZP5zHrhWStAAVIrES5FHxQw3oYV%2FDY6cBjIDTmPP5IfwUvDFoVWiS3Tu3eWHYXIM8VlErwEClYQJqru8BbTrHIw9ftgnkjqayKBsXPKLmjrqbogD0JRJ5U8pTBYC3c6Y6LP%2FsKAOxxqNTKit0nDFL60lx0yE5Pv4pDc8ZaPg51HubIHOY0b7qPPWu9BEWvn2L0fKeW8sfWtfA5j18aWjTs09XH9TtPixyrx%2BOqKmi0%2F8Z4LHC98vF1NXQiCIDQLueNAS2WlFRZgzQd%2BxK6lQmxfG2V8zVOX0L8Bppzpb1tMMMa%2F0u24HMLnXIzl6FBkBfUoM3pJ6TcLWi4BNK5QPI7lOFYV6%2B48sAlM93OE2A0kQif2DP5u5GsiYMPWcxMQGOqUB2mkCXeeTc91ZUUfHDIWS7ujDUskMbozyEME8QBxSu2l4yVph348U99FBykiRZYIKlJ3X4qdEJOoS2swllL%2BnY1ep7MU3H2JLxfCuJ4t6l2qlNt7oPXIAElYjUHkZJX3z3UFc7lD49qSYNwI33%2Fi7ann0K7GNX91b8xNHlQ3VueMX3wvxhsf3k2%2FHewRlVMKpFCGpv42%2Bevov8EHigMpPoRcIPyAo&X-Amz-Signature=bfb5342ecabeb135d536c79d652c3da152706a8e2caa47b372b6af33f24a8018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA5S7FLO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQD9Ca3L%2FQzdG0BLeMECqWk0H5Qn%2FiebS%2FsDaNZuueceWAIhAIlbkyXAxzMlcuE6ZWedIKH79QVgaYBcuP5q5Xw0LCW0Kv8DCE0QABoMNjM3NDIzMTgzODA1Igw%2FHoXExy3t911e6s0q3ANv7rupKcTSZbHANLSyZ1NTb3Txvo9TaKjbaehVBl7Q3UEY1StwJ9gsmggthctuMq6JmBZT%2Bm9kBU%2BUrCdG3r2iueWnJX89lCrJiv9P8vTWGZ8AX6HeXH9Tk7sS6qKK%2FFrrovtxx7ylS4EF0QoP%2FU5NFd89%2FvpLHJdT%2BbkzsiHhLxXycV0W0O2XOTkWa1AIubRasrTUQ38sgQKh2rWpzG8iFm5XrDJ2u3ciQ%2Be5Qx4aGAnhL%2FxIslFeAW%2FWKICZCkMvW3rl%2Bu4aVYlo%2Bcdmu680b8EQFWtVr5ibLSgvrlk1ippmsmHQDcCCyYkPJtSypB7l9qFOVVaB3mpj59RueD4AMsZBMXFAkNNMB5y%2BBjYOH6jS7Dl1JVRB%2F2GJN65wxz9FJACA8qnRrM3%2BP1gK0KXkJ%2FbGNyXGOlAR8Rf7V%2BKcvUwfEGJKvd3%2BtJICNLz0zh6m9BGlR0eXyCIWc1TvdSSP%2FWJZpLx6oT7%2Fq3eBNourLh7zJYsCpVKzIx%2Fy6no%2BcAMBsM4O5ku7ikgH1Zl4JlX1ll7rHKIi%2F2luW2oy09BcyLkgDuX%2BCnH%2B4F%2Ff1D0owtK%2BcN1S5Pw4mgUOZMBHeLf4oe8lFdlKPmy8HS4qgJe%2Bic%2FbJaZQBPXpXPBLLDDCncTEBjqkAdVETb3fkuu7DlHU4J6sw8tNX1oc%2FsI6IxMXAXCxURKwL5elUuao%2BIpThFo5sGVQOkxl6AlD447YHMYg7xCH%2Bp%2Bu1rt2pyL7yqrHpjSpHwDAURKPw0emwTJEABZljtHCGr5OfDhWeSniwtmKAtIKPCBgi91%2BZrv26TZxqZD%2BSgKy5YPwH0Bipwe4vwCGXC%2B%2B5gU2V1ZEfIZZldXHS1E1%2FcdZpIS2&X-Amz-Signature=c735b625b49ab5e9308e10d41ce3241e8108e1074e30bf81bac578c7c6d439b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEHSNBLM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGTV%2Bl5u6yJKiWAWwpZDPZW1ebLqRK8Wt%2F5fke7TehfVAiEA7yhpMDE%2B0oamruxU3D5nsUTVFrSQuTzmfg0OpcyelyUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFaxQjoefFVFJ%2FNIVSrcA1UVK6I5yr7AZYdiyn9dicx4Tcc0%2F%2FmXGwMuq3gcDBp2izyivblPvPlLq223ePv8l2ZLgpXAc5TStwPXd4dBTk4Vpuz0z3GGlADlePIXNpS5FjKET5wIyXoFMO450J6BAjAjeiLIxHIj3HYFEOHWW%2FM%2BS4WbIauGswvnG0waIvEjt0EzvoiJo50AEaVWKV5tYPUmYw5E%2FeLGYegy%2BX5B973kXjr1xI11o%2FzH9UsWZqs1AooOxCx0JnaiBxgE91dT76hykycMkoXFLJ3C9nKVRqtyMmu2dmg9yLf%2BI3F%2BNjp5eBF01U20D4Ivocj8SKkMdiABqhiY1d4rCY3qUCPMY0JDgqcjNGU8H1RzU2flmcQa8%2BI3wf4ctkIATiZ4X57TmbJ8PR2%2FPU8mfdtv1npkFEtzbUsqGxhE%2Bq3V6ECmuSMlNK%2F709QNTAv3YQwk6A%2Ffe4tadn7VLNpxadg2NLtHf0USP3GICY2eoKeHJU1y9vsdHRtiaJFGB2WSrk9L%2FP6J%2BMAIIB2E8yLWOkGdSmrWx5Snqqt8lONtoZVRRToXB3vYdWvcG%2Bxzsv2ghcUujir9oQD5Yfb%2FdtV%2F7hATjng0jLXXiKUC7p%2BuuOnUg9WuiwgukkR%2FpqTHYwxN3ZOKMOmcxMQGOqUBbLN99p6EgqDfqhYLEnkCilvYJyvAVZ5CsVXGZk8r%2BveiUdz%2FG0Y8rQrO4PvURWi6mxaLozxU%2F%2FYCI%2BfJvwL63JpNFLS8Ddi2%2FQvuSqeLmDsfRalOZpqpq6cURKlH8HxC7%2BG%2FXEt7aF0%2BfSozegPkZs5Sn1TFXVkXEqi%2BxkOjcWlGO1z9ggdc85r4%2BBkkiT7Yu2Kg%2FQxwpJ0H6BMzDa3SMLG5Q3qP&X-Amz-Signature=1ef8b222b2456cabd340e959d67e3979b1c8185d521c52f4ca9bf9543a8dc9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZXUULQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBYpFBGroeoUtbrszBG%2FZkrq9BaYbqFIdSdf%2FbmlDA89AiBkCrfQ%2F9%2BZSF3GY%2FoG1gBKm1lDf0hQS8hzc7XFR9fV%2BCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMsuotkHF52U4c4UBmKtwDI%2FSyNVh3DQoVd%2BbiO5Fn2v489B9jkQsRNn4Q2hPC1T%2F%2B%2BDzJqEYgn5b3Xi8O49CdHJ5u1xh1jukn07vS8O529JYXRb0jIjpbifPplHkj5dAHWilo5BaY6fNHhYnbARWNKMpqJIaOpzAwrS0Jleu1V8wDvmR61VZXmmlaNSidBONZ7w0N%2FBsFOcaT5pBosFXz2JtC7osoPYwd8evd7QYZJxWK8DqXPuA6%2F5nV0lXp0oecXXIrMayuIMArkj1LuLZioDwo51sqisUe3UVYOiCwEKNw0cm56kXdWfffn0LuPt2thsmnBVdmLZ7yOn4IPozXyyFa%2B3NbbeXyC5uL%2BNuLkAwxfeL9uFyK37YGe07feyzXBlE6HiUHlkCYUW6I0sJl8pe6pyyqtnLeePMhiO868Hla2mGRft7p9E7RN9CpWR4FntmVAB5oQyCZ8nz60S%2FaaDMwbEGZo7My7o5La7Jhh9IeS0jwlR3AXCVF%2Fd4%2BZbrl1V1YcIY7pNRWVH5LL%2B4vuniDeXjNhEHU%2FAxUvmUeME2kcnR6pxhoo0JR77gFQSGh5bhvY6s77s8ayrGGr2d7XgnVIY4Q8F1juVmgmXPV79H%2F%2FLNGVZWK8g6ACBYN7pXGfC%2BskY74y59ECUow5J3ExAY6pgGnORPBDpMCDkgImNTEjwqDp1m91cK1ZwuSIxCwsjPULC0M5XZPbkHJsXxJQjoSnIh4Bq9PebMzwhl%2FdSWvu5dV9OPtV%2F0YYa%2Fc7%2Fq7TEU8e71XwSX%2BHQykXVOvAgOsWusNCGjXgTtqjF30aucfXpsFym6BIcmL6lZBt5HVfqNGBwr%2B7jbKq2ZK%2FDEc51VbViV8fxiNSCpoBJfhN9xOrptXKpMKpSBR&X-Amz-Signature=aaa3519c264d88bf9e5643fd6b38a4e9ddedae49ead31add3670689c42b3d0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=bc3b20689a31b6440175a80a61b69b93ea026117ac16946c97a099ef38b9026d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624E3BUBO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIB9eCe1uwvCdwIA%2Fcva6CKIKG0%2B4XEB89pssWrn8v3VSAiEAoPI7VPem%2BB6RikEG9hVY7Rfw0bmFbH5jjNNGZVYW0q8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHA0jcayX9c%2FIJgUNCrcA5ixZJCvVVTOQdBRj%2FsGWNuwupN57yYu7o5VH37aVJ11WaSVkwtwS%2B%2FJSxxDGFxXWBAe9fRJtkKedX%2BN0KE4tpxxIWdl%2BA5uo0QgE84uKXeENXhuQA%2ByA7kCwqySV0N%2B0PzCtOx85dFu8Bs7uv2qA2qyyk457CAZ0UhxdYdMKjPfG8Mlu1FCuQmAGVafYQR90YdU42Xzly6TP%2Fb3a58dBiy6sT8MMdbDnJoWKTa5dAFDqloKfhzQc53ap9UYUvcoIbzSEMmfxmeCX0rHpqCl6o8C6Iy8fzObTdFJ85VWJQvZpJIz5J9K9Is6NW9cbemuOnqRzibRe2X%2Bz10yvIgVPUwedQAKXSoOmwM4hDU2sMROPAAKKVeBBkHxz79FCahGrBYXMt9n3nO5vlBGGEvkGcUQXAIbPw8JeeyWeaj9OxfGHD46tfmgZFGC2Qe77ITKmLWJClHP%2F2jmhW0hGm9kgzXHcV0P1zmXhnrrzXuTuKE%2FQKxmD8hj8CKR%2BJkG0eGvqD5%2BtI1h481iZ5xbVV6FonzOwspAtlI5S8knrZ2Pf0nRJuxzs8XGto26m7wFxTmxJ7%2BHKK%2Fdp2hDyT0XFPqEwBYBec25F6mmeN%2BiFYWn5ZyK2Xad78g%2BdT1jyr0rMJ6dxMQGOqUBZ%2BmqIcpJXTPsTpU7SMDdauGNXx5Qn8ojq%2F9gdsrrDxTh%2Fan1QnuIcq%2B6KF7rwR3LnaMd74ufYinlfW0y8zHLyTaHqg10i8pgdtEJirgTIIE0lfFDemY061PWoU3zpkdr9BB6Z9SjmtGsjP66vPx3TZfHjTyMnjCNuCUrwqJ6LtYtj6jZqcliBIG0a6nULFLG9Nqzg95t7fHqJe23vGqVSy78RsVg&X-Amz-Signature=897816adf35c7a58fcf11c11fff93aa46ec271335473e291d85ffe1b49edb663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICHJQBW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDI47Z0aRZPn0m%2B6AbSM3xeYLJA7m0WFNGs9Oh7KCEt4AIhAPP5T%2Bde9tOdV3%2FcPONfFwf4XC7y%2FN4IvtOHTLx3divZKv8DCE0QABoMNjM3NDIzMTgzODA1Igxqyf7pJ1qOMIuoRNEq3AMoYk6dDmvHrx5qZnxOws59Lw8cUfbS0cxeaCWCSHw42IHjrjkFXcu%2BISUyagUhYj4I0VWZlZjRJ5Lp7lbG6mk9aZD0AcNfijyAe2OjlHAvDmzFsRkaaF4BDuXMYEZuLigJhcQgSw6583%2BpQgjI8pekiifnsiafQipoIUSrc2sW8NjkvdpoCPPHqPReZVoKW89H8%2BnV2SulAMjGksUxFCx9aB7n1EFEamcx%2BQoEvenKmfVKcFeTeTVL%2BSHM7inQK1AIBvuqQqvukU6rVTJLcrWgD01XCQl1Ovg%2Bb%2BBTzd2tb%2B%2Fj7dGgNuR5obQVbzvZELDvido7gs6oFnHTVCRSz2nFfabX6bggHx9ajSVN9%2FzWaBT5V3%2B%2BwI8xg%2FAceFA%2B4OW85hBsPxSOPfzLg983%2F528AafOdWdJigXVQapVkf6%2Bizvsu6bYqFV6VyMe1xacvLAN8F%2BBaY%2B%2BBaDoUI0l1NjCS7DSGkRsDWeuceaIM%2BKbmPcqd3vK2ws2Vi8WpoM4l%2BHpaIA0kD0oi0CxQVY8jgxeSWYanm8it5FNuYmwb4e6o2wfIs1UhbH83xPk9H%2FhZwX%2BlUXQhX866Vrvc35xA8YOinhk6N0DqKFJAs1uQ85StZAr5a%2BLrO9nSGhENzCfncTEBjqkAXh5T%2BFTP8qKUUcLzZN1UX0u1f8YcKHLnjHubKVH%2BKKKe743qXb6Kve20UcABksFPPvlqMUnyhVfhqv1q72Kfd4JJEdAQjwX3sQJ%2Fi3lMX5VhQ28QXGDHDN8y6ufH%2BlB4nKQQAyE1Gq0d0ROML4fx69B57BFcpj3ff1S71WJ1gy9aIj56ecTzPVPuCM3J74t2RwNo10teZ3x60ujCPejcBwanOEc&X-Amz-Signature=7c8b19119e5f2e00b4a0616cf27228e8aaa3d637861f7f0be910bdc083fba7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICHJQBW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDI47Z0aRZPn0m%2B6AbSM3xeYLJA7m0WFNGs9Oh7KCEt4AIhAPP5T%2Bde9tOdV3%2FcPONfFwf4XC7y%2FN4IvtOHTLx3divZKv8DCE0QABoMNjM3NDIzMTgzODA1Igxqyf7pJ1qOMIuoRNEq3AMoYk6dDmvHrx5qZnxOws59Lw8cUfbS0cxeaCWCSHw42IHjrjkFXcu%2BISUyagUhYj4I0VWZlZjRJ5Lp7lbG6mk9aZD0AcNfijyAe2OjlHAvDmzFsRkaaF4BDuXMYEZuLigJhcQgSw6583%2BpQgjI8pekiifnsiafQipoIUSrc2sW8NjkvdpoCPPHqPReZVoKW89H8%2BnV2SulAMjGksUxFCx9aB7n1EFEamcx%2BQoEvenKmfVKcFeTeTVL%2BSHM7inQK1AIBvuqQqvukU6rVTJLcrWgD01XCQl1Ovg%2Bb%2BBTzd2tb%2B%2Fj7dGgNuR5obQVbzvZELDvido7gs6oFnHTVCRSz2nFfabX6bggHx9ajSVN9%2FzWaBT5V3%2B%2BwI8xg%2FAceFA%2B4OW85hBsPxSOPfzLg983%2F528AafOdWdJigXVQapVkf6%2Bizvsu6bYqFV6VyMe1xacvLAN8F%2BBaY%2B%2BBaDoUI0l1NjCS7DSGkRsDWeuceaIM%2BKbmPcqd3vK2ws2Vi8WpoM4l%2BHpaIA0kD0oi0CxQVY8jgxeSWYanm8it5FNuYmwb4e6o2wfIs1UhbH83xPk9H%2FhZwX%2BlUXQhX866Vrvc35xA8YOinhk6N0DqKFJAs1uQ85StZAr5a%2BLrO9nSGhENzCfncTEBjqkAXh5T%2BFTP8qKUUcLzZN1UX0u1f8YcKHLnjHubKVH%2BKKKe743qXb6Kve20UcABksFPPvlqMUnyhVfhqv1q72Kfd4JJEdAQjwX3sQJ%2Fi3lMX5VhQ28QXGDHDN8y6ufH%2BlB4nKQQAyE1Gq0d0ROML4fx69B57BFcpj3ff1S71WJ1gy9aIj56ecTzPVPuCM3J74t2RwNo10teZ3x60ujCPejcBwanOEc&X-Amz-Signature=c4196851d62154e8326d3d3c021ef22f27d609309b30c56c078dd4e221f7da2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICHJQBW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDI47Z0aRZPn0m%2B6AbSM3xeYLJA7m0WFNGs9Oh7KCEt4AIhAPP5T%2Bde9tOdV3%2FcPONfFwf4XC7y%2FN4IvtOHTLx3divZKv8DCE0QABoMNjM3NDIzMTgzODA1Igxqyf7pJ1qOMIuoRNEq3AMoYk6dDmvHrx5qZnxOws59Lw8cUfbS0cxeaCWCSHw42IHjrjkFXcu%2BISUyagUhYj4I0VWZlZjRJ5Lp7lbG6mk9aZD0AcNfijyAe2OjlHAvDmzFsRkaaF4BDuXMYEZuLigJhcQgSw6583%2BpQgjI8pekiifnsiafQipoIUSrc2sW8NjkvdpoCPPHqPReZVoKW89H8%2BnV2SulAMjGksUxFCx9aB7n1EFEamcx%2BQoEvenKmfVKcFeTeTVL%2BSHM7inQK1AIBvuqQqvukU6rVTJLcrWgD01XCQl1Ovg%2Bb%2BBTzd2tb%2B%2Fj7dGgNuR5obQVbzvZELDvido7gs6oFnHTVCRSz2nFfabX6bggHx9ajSVN9%2FzWaBT5V3%2B%2BwI8xg%2FAceFA%2B4OW85hBsPxSOPfzLg983%2F528AafOdWdJigXVQapVkf6%2Bizvsu6bYqFV6VyMe1xacvLAN8F%2BBaY%2B%2BBaDoUI0l1NjCS7DSGkRsDWeuceaIM%2BKbmPcqd3vK2ws2Vi8WpoM4l%2BHpaIA0kD0oi0CxQVY8jgxeSWYanm8it5FNuYmwb4e6o2wfIs1UhbH83xPk9H%2FhZwX%2BlUXQhX866Vrvc35xA8YOinhk6N0DqKFJAs1uQ85StZAr5a%2BLrO9nSGhENzCfncTEBjqkAXh5T%2BFTP8qKUUcLzZN1UX0u1f8YcKHLnjHubKVH%2BKKKe743qXb6Kve20UcABksFPPvlqMUnyhVfhqv1q72Kfd4JJEdAQjwX3sQJ%2Fi3lMX5VhQ28QXGDHDN8y6ufH%2BlB4nKQQAyE1Gq0d0ROML4fx69B57BFcpj3ff1S71WJ1gy9aIj56ecTzPVPuCM3J74t2RwNo10teZ3x60ujCPejcBwanOEc&X-Amz-Signature=64ed11a855221b532f36c77827f11b3830509b572a84affe3c521cf11962b7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICHJQBW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDI47Z0aRZPn0m%2B6AbSM3xeYLJA7m0WFNGs9Oh7KCEt4AIhAPP5T%2Bde9tOdV3%2FcPONfFwf4XC7y%2FN4IvtOHTLx3divZKv8DCE0QABoMNjM3NDIzMTgzODA1Igxqyf7pJ1qOMIuoRNEq3AMoYk6dDmvHrx5qZnxOws59Lw8cUfbS0cxeaCWCSHw42IHjrjkFXcu%2BISUyagUhYj4I0VWZlZjRJ5Lp7lbG6mk9aZD0AcNfijyAe2OjlHAvDmzFsRkaaF4BDuXMYEZuLigJhcQgSw6583%2BpQgjI8pekiifnsiafQipoIUSrc2sW8NjkvdpoCPPHqPReZVoKW89H8%2BnV2SulAMjGksUxFCx9aB7n1EFEamcx%2BQoEvenKmfVKcFeTeTVL%2BSHM7inQK1AIBvuqQqvukU6rVTJLcrWgD01XCQl1Ovg%2Bb%2BBTzd2tb%2B%2Fj7dGgNuR5obQVbzvZELDvido7gs6oFnHTVCRSz2nFfabX6bggHx9ajSVN9%2FzWaBT5V3%2B%2BwI8xg%2FAceFA%2B4OW85hBsPxSOPfzLg983%2F528AafOdWdJigXVQapVkf6%2Bizvsu6bYqFV6VyMe1xacvLAN8F%2BBaY%2B%2BBaDoUI0l1NjCS7DSGkRsDWeuceaIM%2BKbmPcqd3vK2ws2Vi8WpoM4l%2BHpaIA0kD0oi0CxQVY8jgxeSWYanm8it5FNuYmwb4e6o2wfIs1UhbH83xPk9H%2FhZwX%2BlUXQhX866Vrvc35xA8YOinhk6N0DqKFJAs1uQ85StZAr5a%2BLrO9nSGhENzCfncTEBjqkAXh5T%2BFTP8qKUUcLzZN1UX0u1f8YcKHLnjHubKVH%2BKKKe743qXb6Kve20UcABksFPPvlqMUnyhVfhqv1q72Kfd4JJEdAQjwX3sQJ%2Fi3lMX5VhQ28QXGDHDN8y6ufH%2BlB4nKQQAyE1Gq0d0ROML4fx69B57BFcpj3ff1S71WJ1gy9aIj56ecTzPVPuCM3J74t2RwNo10teZ3x60ujCPejcBwanOEc&X-Amz-Signature=f7a4464da0ee6ab03c8d9c6329b2aec68ac724c0b7b6dbd13cd02101d16595a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICHJQBW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDI47Z0aRZPn0m%2B6AbSM3xeYLJA7m0WFNGs9Oh7KCEt4AIhAPP5T%2Bde9tOdV3%2FcPONfFwf4XC7y%2FN4IvtOHTLx3divZKv8DCE0QABoMNjM3NDIzMTgzODA1Igxqyf7pJ1qOMIuoRNEq3AMoYk6dDmvHrx5qZnxOws59Lw8cUfbS0cxeaCWCSHw42IHjrjkFXcu%2BISUyagUhYj4I0VWZlZjRJ5Lp7lbG6mk9aZD0AcNfijyAe2OjlHAvDmzFsRkaaF4BDuXMYEZuLigJhcQgSw6583%2BpQgjI8pekiifnsiafQipoIUSrc2sW8NjkvdpoCPPHqPReZVoKW89H8%2BnV2SulAMjGksUxFCx9aB7n1EFEamcx%2BQoEvenKmfVKcFeTeTVL%2BSHM7inQK1AIBvuqQqvukU6rVTJLcrWgD01XCQl1Ovg%2Bb%2BBTzd2tb%2B%2Fj7dGgNuR5obQVbzvZELDvido7gs6oFnHTVCRSz2nFfabX6bggHx9ajSVN9%2FzWaBT5V3%2B%2BwI8xg%2FAceFA%2B4OW85hBsPxSOPfzLg983%2F528AafOdWdJigXVQapVkf6%2Bizvsu6bYqFV6VyMe1xacvLAN8F%2BBaY%2B%2BBaDoUI0l1NjCS7DSGkRsDWeuceaIM%2BKbmPcqd3vK2ws2Vi8WpoM4l%2BHpaIA0kD0oi0CxQVY8jgxeSWYanm8it5FNuYmwb4e6o2wfIs1UhbH83xPk9H%2FhZwX%2BlUXQhX866Vrvc35xA8YOinhk6N0DqKFJAs1uQ85StZAr5a%2BLrO9nSGhENzCfncTEBjqkAXh5T%2BFTP8qKUUcLzZN1UX0u1f8YcKHLnjHubKVH%2BKKKe743qXb6Kve20UcABksFPPvlqMUnyhVfhqv1q72Kfd4JJEdAQjwX3sQJ%2Fi3lMX5VhQ28QXGDHDN8y6ufH%2BlB4nKQQAyE1Gq0d0ROML4fx69B57BFcpj3ff1S71WJ1gy9aIj56ecTzPVPuCM3J74t2RwNo10teZ3x60ujCPejcBwanOEc&X-Amz-Signature=0df4efb4820ca317acbf13e392a2d86bc9c6438b18b6dc37c0bd2daba57f2168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICHJQBW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDI47Z0aRZPn0m%2B6AbSM3xeYLJA7m0WFNGs9Oh7KCEt4AIhAPP5T%2Bde9tOdV3%2FcPONfFwf4XC7y%2FN4IvtOHTLx3divZKv8DCE0QABoMNjM3NDIzMTgzODA1Igxqyf7pJ1qOMIuoRNEq3AMoYk6dDmvHrx5qZnxOws59Lw8cUfbS0cxeaCWCSHw42IHjrjkFXcu%2BISUyagUhYj4I0VWZlZjRJ5Lp7lbG6mk9aZD0AcNfijyAe2OjlHAvDmzFsRkaaF4BDuXMYEZuLigJhcQgSw6583%2BpQgjI8pekiifnsiafQipoIUSrc2sW8NjkvdpoCPPHqPReZVoKW89H8%2BnV2SulAMjGksUxFCx9aB7n1EFEamcx%2BQoEvenKmfVKcFeTeTVL%2BSHM7inQK1AIBvuqQqvukU6rVTJLcrWgD01XCQl1Ovg%2Bb%2BBTzd2tb%2B%2Fj7dGgNuR5obQVbzvZELDvido7gs6oFnHTVCRSz2nFfabX6bggHx9ajSVN9%2FzWaBT5V3%2B%2BwI8xg%2FAceFA%2B4OW85hBsPxSOPfzLg983%2F528AafOdWdJigXVQapVkf6%2Bizvsu6bYqFV6VyMe1xacvLAN8F%2BBaY%2B%2BBaDoUI0l1NjCS7DSGkRsDWeuceaIM%2BKbmPcqd3vK2ws2Vi8WpoM4l%2BHpaIA0kD0oi0CxQVY8jgxeSWYanm8it5FNuYmwb4e6o2wfIs1UhbH83xPk9H%2FhZwX%2BlUXQhX866Vrvc35xA8YOinhk6N0DqKFJAs1uQ85StZAr5a%2BLrO9nSGhENzCfncTEBjqkAXh5T%2BFTP8qKUUcLzZN1UX0u1f8YcKHLnjHubKVH%2BKKKe743qXb6Kve20UcABksFPPvlqMUnyhVfhqv1q72Kfd4JJEdAQjwX3sQJ%2Fi3lMX5VhQ28QXGDHDN8y6ufH%2BlB4nKQQAyE1Gq0d0ROML4fx69B57BFcpj3ff1S71WJ1gy9aIj56ecTzPVPuCM3J74t2RwNo10teZ3x60ujCPejcBwanOEc&X-Amz-Signature=310dccf5e1a3973be8b2548b5b72055323a28278a37c96fdfebcf9ae71b41ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICHJQBW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDI47Z0aRZPn0m%2B6AbSM3xeYLJA7m0WFNGs9Oh7KCEt4AIhAPP5T%2Bde9tOdV3%2FcPONfFwf4XC7y%2FN4IvtOHTLx3divZKv8DCE0QABoMNjM3NDIzMTgzODA1Igxqyf7pJ1qOMIuoRNEq3AMoYk6dDmvHrx5qZnxOws59Lw8cUfbS0cxeaCWCSHw42IHjrjkFXcu%2BISUyagUhYj4I0VWZlZjRJ5Lp7lbG6mk9aZD0AcNfijyAe2OjlHAvDmzFsRkaaF4BDuXMYEZuLigJhcQgSw6583%2BpQgjI8pekiifnsiafQipoIUSrc2sW8NjkvdpoCPPHqPReZVoKW89H8%2BnV2SulAMjGksUxFCx9aB7n1EFEamcx%2BQoEvenKmfVKcFeTeTVL%2BSHM7inQK1AIBvuqQqvukU6rVTJLcrWgD01XCQl1Ovg%2Bb%2BBTzd2tb%2B%2Fj7dGgNuR5obQVbzvZELDvido7gs6oFnHTVCRSz2nFfabX6bggHx9ajSVN9%2FzWaBT5V3%2B%2BwI8xg%2FAceFA%2B4OW85hBsPxSOPfzLg983%2F528AafOdWdJigXVQapVkf6%2Bizvsu6bYqFV6VyMe1xacvLAN8F%2BBaY%2B%2BBaDoUI0l1NjCS7DSGkRsDWeuceaIM%2BKbmPcqd3vK2ws2Vi8WpoM4l%2BHpaIA0kD0oi0CxQVY8jgxeSWYanm8it5FNuYmwb4e6o2wfIs1UhbH83xPk9H%2FhZwX%2BlUXQhX866Vrvc35xA8YOinhk6N0DqKFJAs1uQ85StZAr5a%2BLrO9nSGhENzCfncTEBjqkAXh5T%2BFTP8qKUUcLzZN1UX0u1f8YcKHLnjHubKVH%2BKKKe743qXb6Kve20UcABksFPPvlqMUnyhVfhqv1q72Kfd4JJEdAQjwX3sQJ%2Fi3lMX5VhQ28QXGDHDN8y6ufH%2BlB4nKQQAyE1Gq0d0ROML4fx69B57BFcpj3ff1S71WJ1gy9aIj56ecTzPVPuCM3J74t2RwNo10teZ3x60ujCPejcBwanOEc&X-Amz-Signature=64ed11a855221b532f36c77827f11b3830509b572a84affe3c521cf11962b7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICHJQBW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDI47Z0aRZPn0m%2B6AbSM3xeYLJA7m0WFNGs9Oh7KCEt4AIhAPP5T%2Bde9tOdV3%2FcPONfFwf4XC7y%2FN4IvtOHTLx3divZKv8DCE0QABoMNjM3NDIzMTgzODA1Igxqyf7pJ1qOMIuoRNEq3AMoYk6dDmvHrx5qZnxOws59Lw8cUfbS0cxeaCWCSHw42IHjrjkFXcu%2BISUyagUhYj4I0VWZlZjRJ5Lp7lbG6mk9aZD0AcNfijyAe2OjlHAvDmzFsRkaaF4BDuXMYEZuLigJhcQgSw6583%2BpQgjI8pekiifnsiafQipoIUSrc2sW8NjkvdpoCPPHqPReZVoKW89H8%2BnV2SulAMjGksUxFCx9aB7n1EFEamcx%2BQoEvenKmfVKcFeTeTVL%2BSHM7inQK1AIBvuqQqvukU6rVTJLcrWgD01XCQl1Ovg%2Bb%2BBTzd2tb%2B%2Fj7dGgNuR5obQVbzvZELDvido7gs6oFnHTVCRSz2nFfabX6bggHx9ajSVN9%2FzWaBT5V3%2B%2BwI8xg%2FAceFA%2B4OW85hBsPxSOPfzLg983%2F528AafOdWdJigXVQapVkf6%2Bizvsu6bYqFV6VyMe1xacvLAN8F%2BBaY%2B%2BBaDoUI0l1NjCS7DSGkRsDWeuceaIM%2BKbmPcqd3vK2ws2Vi8WpoM4l%2BHpaIA0kD0oi0CxQVY8jgxeSWYanm8it5FNuYmwb4e6o2wfIs1UhbH83xPk9H%2FhZwX%2BlUXQhX866Vrvc35xA8YOinhk6N0DqKFJAs1uQ85StZAr5a%2BLrO9nSGhENzCfncTEBjqkAXh5T%2BFTP8qKUUcLzZN1UX0u1f8YcKHLnjHubKVH%2BKKKe743qXb6Kve20UcABksFPPvlqMUnyhVfhqv1q72Kfd4JJEdAQjwX3sQJ%2Fi3lMX5VhQ28QXGDHDN8y6ufH%2BlB4nKQQAyE1Gq0d0ROML4fx69B57BFcpj3ff1S71WJ1gy9aIj56ecTzPVPuCM3J74t2RwNo10teZ3x60ujCPejcBwanOEc&X-Amz-Signature=7420db45b3cd46dcd81762dfdee40bfa28c3edd21f015c3ad698ac082b2b60ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICHJQBW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDI47Z0aRZPn0m%2B6AbSM3xeYLJA7m0WFNGs9Oh7KCEt4AIhAPP5T%2Bde9tOdV3%2FcPONfFwf4XC7y%2FN4IvtOHTLx3divZKv8DCE0QABoMNjM3NDIzMTgzODA1Igxqyf7pJ1qOMIuoRNEq3AMoYk6dDmvHrx5qZnxOws59Lw8cUfbS0cxeaCWCSHw42IHjrjkFXcu%2BISUyagUhYj4I0VWZlZjRJ5Lp7lbG6mk9aZD0AcNfijyAe2OjlHAvDmzFsRkaaF4BDuXMYEZuLigJhcQgSw6583%2BpQgjI8pekiifnsiafQipoIUSrc2sW8NjkvdpoCPPHqPReZVoKW89H8%2BnV2SulAMjGksUxFCx9aB7n1EFEamcx%2BQoEvenKmfVKcFeTeTVL%2BSHM7inQK1AIBvuqQqvukU6rVTJLcrWgD01XCQl1Ovg%2Bb%2BBTzd2tb%2B%2Fj7dGgNuR5obQVbzvZELDvido7gs6oFnHTVCRSz2nFfabX6bggHx9ajSVN9%2FzWaBT5V3%2B%2BwI8xg%2FAceFA%2B4OW85hBsPxSOPfzLg983%2F528AafOdWdJigXVQapVkf6%2Bizvsu6bYqFV6VyMe1xacvLAN8F%2BBaY%2B%2BBaDoUI0l1NjCS7DSGkRsDWeuceaIM%2BKbmPcqd3vK2ws2Vi8WpoM4l%2BHpaIA0kD0oi0CxQVY8jgxeSWYanm8it5FNuYmwb4e6o2wfIs1UhbH83xPk9H%2FhZwX%2BlUXQhX866Vrvc35xA8YOinhk6N0DqKFJAs1uQ85StZAr5a%2BLrO9nSGhENzCfncTEBjqkAXh5T%2BFTP8qKUUcLzZN1UX0u1f8YcKHLnjHubKVH%2BKKKe743qXb6Kve20UcABksFPPvlqMUnyhVfhqv1q72Kfd4JJEdAQjwX3sQJ%2Fi3lMX5VhQ28QXGDHDN8y6ufH%2BlB4nKQQAyE1Gq0d0ROML4fx69B57BFcpj3ff1S71WJ1gy9aIj56ecTzPVPuCM3J74t2RwNo10teZ3x60ujCPejcBwanOEc&X-Amz-Signature=8ee3e60ea1152de3606c3b0c176b8be5b862fb6f0b19cdc60e7d98dbdfc9cc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICHJQBW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDI47Z0aRZPn0m%2B6AbSM3xeYLJA7m0WFNGs9Oh7KCEt4AIhAPP5T%2Bde9tOdV3%2FcPONfFwf4XC7y%2FN4IvtOHTLx3divZKv8DCE0QABoMNjM3NDIzMTgzODA1Igxqyf7pJ1qOMIuoRNEq3AMoYk6dDmvHrx5qZnxOws59Lw8cUfbS0cxeaCWCSHw42IHjrjkFXcu%2BISUyagUhYj4I0VWZlZjRJ5Lp7lbG6mk9aZD0AcNfijyAe2OjlHAvDmzFsRkaaF4BDuXMYEZuLigJhcQgSw6583%2BpQgjI8pekiifnsiafQipoIUSrc2sW8NjkvdpoCPPHqPReZVoKW89H8%2BnV2SulAMjGksUxFCx9aB7n1EFEamcx%2BQoEvenKmfVKcFeTeTVL%2BSHM7inQK1AIBvuqQqvukU6rVTJLcrWgD01XCQl1Ovg%2Bb%2BBTzd2tb%2B%2Fj7dGgNuR5obQVbzvZELDvido7gs6oFnHTVCRSz2nFfabX6bggHx9ajSVN9%2FzWaBT5V3%2B%2BwI8xg%2FAceFA%2B4OW85hBsPxSOPfzLg983%2F528AafOdWdJigXVQapVkf6%2Bizvsu6bYqFV6VyMe1xacvLAN8F%2BBaY%2B%2BBaDoUI0l1NjCS7DSGkRsDWeuceaIM%2BKbmPcqd3vK2ws2Vi8WpoM4l%2BHpaIA0kD0oi0CxQVY8jgxeSWYanm8it5FNuYmwb4e6o2wfIs1UhbH83xPk9H%2FhZwX%2BlUXQhX866Vrvc35xA8YOinhk6N0DqKFJAs1uQ85StZAr5a%2BLrO9nSGhENzCfncTEBjqkAXh5T%2BFTP8qKUUcLzZN1UX0u1f8YcKHLnjHubKVH%2BKKKe743qXb6Kve20UcABksFPPvlqMUnyhVfhqv1q72Kfd4JJEdAQjwX3sQJ%2Fi3lMX5VhQ28QXGDHDN8y6ufH%2BlB4nKQQAyE1Gq0d0ROML4fx69B57BFcpj3ff1S71WJ1gy9aIj56ecTzPVPuCM3J74t2RwNo10teZ3x60ujCPejcBwanOEc&X-Amz-Signature=8620a2d7ac2071b9b94e9c69b038966de02198dd99d0bf9112df44a2f08af1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
