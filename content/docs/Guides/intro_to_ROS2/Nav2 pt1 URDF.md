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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=d9463b4e10b403fe6372acbf811ea8ccb21db6e4ebbc2d3050edae0e61b4486d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=77eb9e892a1b5aa6056d8f2c8b8f388fe0ffb0e1994b1fcf42ee336860e73d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=d0f47e041c384eb15f1105f9ccac39b95c16849d5a28d68f4ec1ad3d50b16574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=8bafba79ca559ae0c8649b7060dea12a2667fc67afd32ecd59358f73d2d86a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=2834e53b02698251e73a00546a54650a623f1f930be5565228a7e76e5287a2cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=0da5ed3e39f5752b941e2518dd572b9c65e18f8b46c57c255abd217c8b6f9535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=84153c2820a8477ce1830554078f1d3ad1d70cdef6e493686faee47fec247535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=cc1b0ed5df9d390f0a3cc309fa523979584718e5fce5edd578c42e142b32a985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=88dc3b4e2fec42d38578c6772ef30939c156483a47feb959026c2a7cb1c70953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=4e6c0da15a664efbd00a978d0279b7f6daf9aa9851f18e2fc089552fb0f470ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625IS54QP%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEO5Cv1FMpIvtqQgRxNMmIpmXCKN%2FcDK4ZPv5Srw0IdGAiEArK%2Bpw3aqd2SspdNuyl9%2Ba7KXS0ZkjEHTxCxfgLfRsf0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPmV8xHTxGDHn9i3iircA2Nhl7uHaJG7Iw7ZjSOWzHEu70U6wnIzOVGm3I1VkAoodcK34pZNcwBybyeOKl5Z0aSXmhb9SCe8bFDo1Xten4NAIDH%2BbbBCYatRR4B05%2BCeGIrElJv6myA62F%2BfdWzRJYG6oimUaqx0iua4NIPyspSOfgusKi8hN2yv8qNbnFpV7V3Q9vOF0RUMNnTHINwhMUlqRUj7nkJqpuBtwmJSwLqqJ3kMLdniZvHhdi0sBDLChq5Hcf%2Fr4O9QGCv4UsIHvXHpS3vvSsDVLYLo3c9nZ48uXbzAltktBl0g0VvcohPDLMCEU4daKov9RQ6Cmp6AB0Qihu8RnYZne5U3mFobbgBQodeq6Ajlrfl9wdTDIcLqa%2FFd3ccKrB4h2xADUITet9rB2cz9MtKd40BaXnVip8CANRHz7qAUJrbFWCl7YHNxxx5Me78Z3RM4bSV0o%2FOU%2BDTEvxPQTJdLnhenLeDbwHkK4Qlfy2oZ%2BktszFRyY0lq1G9tvGamy6MDZ3f8c8uTix7mbvES95qW5EjYc4H4oqL2m8p2%2FsIV3xRQq7vMDIQRLyPiH1G89eb%2Bpk%2BXozEENTn655WYniYqWJBHUg7ESWUW6m0RUIOEB1ezrBF5vFql1omqrvy6qhOaMIM4MNLnmsgGOqUB9%2FMAGsa8YBaLRAg2AVefSc9%2F3yGaa5ulQIRDyvAn3480sXMEFZq6RYUfpZy2xnKgqww10ye%2BeEuUpGUtej9mm%2FldJ6cY0%2FQgQp00P4toKK2UX4rEoORKsu0rkII86PgwvILRQJtQ1ma7c3AcUI1d4eHeiTTJbRmUV%2B33zAfjEvzVwIzVFLOrnFR06jQmGmegss8eUNR0G8vIbaRsOfL1wvytS4%2BN&X-Amz-Signature=984f4b609ac201ce79b431d196a0a9a5d817e666a80f740b601404fcaa8dcb2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZWV4QC%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDe2YfUJ%2BOHC6yv33YC1Xg%2FCsWgVRfEaUb384UuzLaCuAiEA9C4XVAEQvGOZrXmCske%2FHpRmsaGmnUWJvQne25aAEb8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJKjWzaO9T4or9fJsSrcA%2BTWIDyH%2FSJt1dgzYx0e6x3dGKY%2FN178vWvCAQVIZGLxiNc2KDbhMF6Pxv6ObYIkC3zall4FARBuZOJoFNdxLauN1%2Fd6AVrwwUGWmhpR0VZuAjQCGt3N%2BbgnpEly75TpB6TXmkXlZ8A7dJU8tGkZFGBKJVlttvNxv09CZnDxcu8AUAkn4MpWrP9q2lVX7w5cJL41a3ewrQtVSRN5JcaRAbCxd%2FCPrHdaZgp0V52VMr4CrN2tgOGs65phnEhSkGuH5NS%2BwU6zPltrby3dDUmp2WbquGRFuM7gnnAZEqDVDtwuuK9BunzUXNAHSSYZRKzbJRN%2Fen%2F%2B9cVD5CS6fHncNXp7t1boWZSNpZADg%2B5JDSMIMt9m8X6LyFOq6zXYzqgpCpEAPybN8C7VvZJ2NVZt7rLcKDyBex7kstXftcqfycbKBXXkLx2%2Fsq%2B7UQUYELdJO1pPbkEHQLxPlpvyvxsQgeYxiVffMhe%2FYgK0PmzGhovmJEwyQEAZ0ygTAd8OIiI8Ohac1Z%2BdIF3dR0b5Q3qVXCh50GOMGIZRRzyDrbFe7AmbFL%2FswD5j9gP%2BqKywChXkX8PfRvULfVFiTPmaAOyWoGSCNkGlUgnBHQBOGVbSPGbEfnSoH4I5M%2FiGYjCuMPHnmsgGOqUBbYPvAA0k7%2BR3OwJakgmfaMzFKh6r2egVe7Il1gsKgqcLpNW%2B2oV4MFDMSCqi222SK9nf3k5FmD%2F3zuUpe9h1UF0SZcl78PtyFD3bBjEyAGlTVH5OsqpqxMzVPScNyynlsZasd11bANidibbh%2Bmyj56b35msMxvEi1oKacNFdnCPuE8gMv7Xw%2FsWqF6hJuBB7DVGam7hplryZ3JG0H9EVAqJU5vo6&X-Amz-Signature=d1f43fad510205f83083e022375ac7221f944a894a14a716893be266a16c1b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN4FEU4J%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCQfvaIet4PKtSRB8ZdM5RV4bSLJonyn1HwLzZS9ILpSAIhAJKMOLxd5lO3C9%2BlwYa8NQK2L9iDgt5KPJcrvVdKIvOXKv8DCDsQABoMNjM3NDIzMTgzODA1IgwyfCoCQSk%2FMwgyLoIq3ANSz0xdl7LqMVsIZ8qqAgG61TD7LUng9Ju3LRIda9ZVtbI2ycJmXqIcl5CpaBonVcD48PjkhVCuY0vz%2FgnyLa0U6i9qJEUdxgjEK08qtaFwkFLNMSlvlPLJt7WV8GiiBMmdFNWEwlu2rs0a%2FwU1mBL61bbxw6QcjlvqepHh72ExToTqTpTe7tFNR2K8EqJqDCgCx3KqMgAAcUak4R5TiDFgLwJhlKWwEPOp1EekxgEFARnOcPtOTfdzI8WX1hSzS9iIEl2LkMcYwRerFBM3MjausLGz5o%2F5e0%2Fxhcn8Dwo88tJL42RoFEbNNpafvCO0rWDunw9nNUmIxwrMgz58%2F6C6Hc5ZVFxhk0z5tupgNRjqX2BrRaFRXGDTollhJiDe4vThu5fAfoliAIP0ZR9Eg9MiESF6f7pE3kz81Wr%2FjUSXaCtoHSVOiQSvUsZYXa8XWURMPoSIzYneh7G4bb4mhCnWjuafPnGd2U87N31iwYcc18rQ8DABimOvEA23CRDb2DRCvSUr%2B9NJIENJFRUdQKokZDO7GfE8aSU4Ys1KXaqzL6JT3lqDgofGaNBmzy7eSVRkYoxXRGqoYUDOyc0YJdlkXHADwkPptnvw3Zbf75BW%2F5kBk21CmHdS9Q1wPjC%2B6JrIBjqkAfl3XHbEScbyPveHRr%2BX51t6RkcSgqYql9rpIBiUfm6CP2gTFQYaFcwO%2FDQu%2FpxWO7Ui0aZo7UNx9X9V9az7L9zb3JXnr1oY53quHaQd2YmykSNVPyQl9Mg0jVWuPf830538%2FDAC%2B%2BzV3msuKMaKpWmdloOUNXSLu%2BORPuk%2BIn9EpOcTnBDJhSVN6QZryGOg2%2Fp53YJK53AAH%2FCX51jzgYhCLZFU&X-Amz-Signature=926133e7c7199545ca514989d459bb2715141d73a6d526a32c7d7f78c5558029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=30d7b43c061a5b0b94a2f49fc0ed846936ce7cae2e52fcc3fe665d775b970a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ES5XZIX%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDQ8J4iyTeF9MQLPDwtXXBXhjptnQfMl%2Fdij1KugmjFAAiEA0D7uYK4GTaPgLdZZ%2BzbY3hYjcRMP0SEj6mH%2FVhhKLTkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCN%2Fn%2Ffn9QmqArk4iircA84ZAec9%2BeotHpxw3h0parl5GOUSC0k43qR4wBvWrC7Fn8%2FICSLjH5KFY3%2BIZOBtUGgBwTYjOrrm9NOZu3n%2Ffz14eP7bCONF5Slh9PyLuMXXQHKRma2%2F4c7TSNE9W1bzozZHRyU%2FbqTMZrM9tnWTOOLBY4hDjCXwGzE4NVpLfYfANmCDvTGenzNwAI81cNqB3LstOLf3vJXWcGRPvb0Fz6bp91lwqLEAz9Dzsi5i%2B7%2BS3e8lmgyX3srtuBIHtFsUycOsYfa86yFEmtJ2t%2Bx6%2F%2BlZl2MNKRYHzite3m7WW3eDGBUBne%2FBglxHbphAIR%2BfC1dqOP7Hl5JA54sW82z7M7o%2BuVxyxBfKG8S85fiQS2jw0gpVcQjnbNOLcQVAltEjpbDM09ADXm5hdCsIQGvR1%2BgVFf3iMA7cWcwnMHJrJt4pZ%2B22aMcVOcAYUBH4xcGx1f4qrQxj4X4ujg%2B4gFEZ%2FugZYKwiK3NPRhNVWelglYlOfCT4TZltgKiLT2XIPbe6JyzES5PxZcqg98B676M%2FxrxhMoWafBHehmARpkH%2B7%2BTpByumL25Bx%2BDm0eVJ3lLktLAFxKTp2OFAhJMV5JGIWBvhHlJWhv9u7g4L9EwDV9fcLdrd1JgekIyOFabgMPnnmsgGOqUBOIFqIgmIGbSZsYUHe1%2BSQMKE6590dcdklpXQH2p7%2F2f1aeYzc1eKBaN3HzOE0a4XXl83O6%2BhinQeE93x46RxRbDT9qnAFtmwQ7%2F5j%2FV9p1TiF6mMHLFxNdzqKZ7ssM9ax6oecYLVjKhFoUqXNoXIYNaG47XrsJX2SnP%2Fr2cz4Nw621FPcLaxI7g8vy5bUcjRKiWKpv%2FUJ%2FjseuOL%2Bgrwk%2F5fXi%2Bt&X-Amz-Signature=d0119cff3db98b5377b8fce26d1052bea1df9c26608c12d9193d0bd897cd3cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=b8f4d46d06921df2f47eb037373f8678cacb68fea13e49eca47b9048bee81ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STS6R247%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCU7Qr0T1DS9GJIBoq0v5uBMOePNInWuAP5PltlhMCjQQIgJnVHfwX%2BeAyhBDkXCDuQUKEmZopfknWXkwcIXx45%2BYcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHsmQdlxIbQEFh%2B1MyrcA5NoTBLP896QzGWYPvUN99VCPBClXTxX9FjmvG2aH7h2RMx%2FQ%2BPvDSpgDHaqvAqY7%2B4KGAlRigy33%2FTx0CjzAAIUL%2FS%2B4SUPmgVOS%2BFHLjIiixYiHJo6lN9VrThxg%2FP3my2Mepo219Jup6Ga3isQLypVaGqQZeK05vVI7AknS5RZHFbDE0cJ0%2FstInG2veC%2BFprSPVBpLm1C6n0W1v2Gih6TcihhqYy3YZnySl9Bjy5rMp9V5ESfbp%2BKaOG6unRnBPdp50gQzidE%2FC5YtsD5nV3rzvbyR6fVXgkZlWNwEmIDofnP%2FvKOIz5gk9KFjqp2L%2FbaL6ki8qrpt1ishfMrXpgmQvu8Zjg6xioOj7%2F%2F2jgWLNpUu8uJNvlq6DCPSkpRJ%2FXbg3mLCOhf%2FSZ6APooVkN834uRIsmey39so5825i3%2Fh97ZepUhQWi5Rs0MmFMzRAKWnxAYn1QlMkletby5S7NGpKe8FjZDLvPIBetI8KKRidoMtc8tVFMkYnw8fSMlJw3Y%2FSVjSKyhtZ3ddjln56bU9kNI1TRUxFHyEVj8XUZNKD%2FpCxzu7UWFPNB8QsnVVKauzIt9%2BTDyvLXiLC%2FdEvO%2Ful6%2FRVhcbde63K4l6zCfIIIRlNaF0fQncWbLMNfnmsgGOqUByxMzcAKa298bMy9bk%2BSw19DBC%2BtodJV0g3pemLqaiS75VjDomX3fB9AMd%2BYMvxmSx%2BYEqoOYOZD2ZNw492bFJQZJiCNpP0zviCCveM1RIm22VYA0DP%2BzH5KXYSchIgoahCfb5NLrW5KKyO0pK33YjaRs04FYXAXsPc%2FI39jmrGOllYvp%2FwJqMfeccDP9dIjLTGQHaok4PlvhV2lgUb5QvrO67So1&X-Amz-Signature=3ecb0b6bfd9ccef79b181be6ce5c01a7097c5a56d095eddcce2eb6418c2c847a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=36d54d3c7f241d50d1b3b88116f1b73dee80caac5904389e077990501dc433e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IM54OAQ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQClG06xTh3OIBZ4Ky%2FQGjixcy7yct7r6NmHesK9BXpGsQIhAIQPo8OMxl%2BHjUmyyn0hpuyYw0eDNzxBXYk3GeJdMrqoKv8DCDsQABoMNjM3NDIzMTgzODA1Igznlfo7pXRRG3MspMwq3AP%2BQQwqJn6dBma73op%2B%2FDHaXrlE6uS6Lg9kDZoYu%2F1nb%2FCHwj2t8Qf98nqFjHMHzyWr%2BzSITnBf6TgxxV68vROCGM1fIkDTJLA5pAUmjEog1B05YicGgd3OZauQ0VKGIvwLhwxtizQktd5byMhq6uGqKpnZYGSK5cHugOUKmXu0y8G9KqU3jVGbjlEurOc5Bsj8wCHxAs0tWzGDgBEEraglDGQ%2Bt%2B425RlImlTGhYbgwopr%2B3fmdymOrIErk%2BMFB%2FKwDWqhcwyTxSYr8aUrviqATNammTt%2Fv6QlL7d22w%2FcPPb92FVZC1TmbguUR9lmf5IjytBNlCiRHMIGngkr9%2FiJv0JOYbYUqymq2mf5y2lbz2ZrRklRX5LqGy1WFxomZC5DtamNem2DmosncQofoDOQQg%2Fm3Pds%2FL1FYb24KIsO5vke7oOPQRe2fe4lJF5qCgRPWdHOJ%2BX0Gk4Zx7msQ35dffi9Xs%2B0qLXwv%2F%2FXuHIflQdb%2FdKS9QWbQNpBiQbMMdvXS1uCnB2dXCcMMFymGCJuHVhBjok%2FoLh7nVHzurUS2Onoyu9St21Bl1O3uud674t5dX03LsLwwg%2FX7sxS%2F3zpZBp8jPfUi%2B6y%2Fby0%2BdSTt6nbG1PJvU16PdeBMzDJ55rIBjqkAc1V%2FqOIpaqclQc0BjnyLfusQCbi%2Bi8FQtBtN7taCJ%2FVulxNuxDAJpyipwr4kzDP%2Fuaa%2BzBINUdfHEQ7fov6VqRKkAy%2By5iHyIGtDGJJbRD0UqS8R36eCCWuje%2Btq%2BHccZvCOAUZ%2Bz%2FU0pUuy9wSdy8Tw3Taf4dSjVluxmhaWrd95o5xXeAX%2FeTJkaW7o0M%2BmPNqTEQ9aJrzppvSU6oQ%2FyFqlpoe&X-Amz-Signature=7b77c362e3beea2a19852abbeb8c7d0f687b6d93d5d37786cf63b88f6030bc5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=f83bd15e854f2a7bcd524435acbc6a0afe4bcf3984265be909549e54af8aee59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOKSNZT%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDByjJ5c9pJgyNX5P8rhHBEjezUIB1rb0TDWUv9mfSgwAiEA8uU%2BGrpl168XrUW6bjd0hCoiRI4NgVCnSTjZzlQGuLMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOFS3qy7evqDN18nDyrcA4qOElAzFfPQbmd0iOfa%2BY2nzWqDNN2LYU8N0tQpEJiRL5Xpu%2Bp1h9KzC34hlQEmqCcVz%2BD1wzKziFhzf9KKS%2F0VTV9IZrorsULPb3ZKPFkGpUn%2BTMCr4ANmz36QEP1RpPbXZ35Qbw1KWUXzoYa12iawXqgt851x%2FMNRGSaiOd4Dr3GKSpkbw5jbplKYVjNdm4L25ouD11%2FR6pkBMaA%2FxXRabWpCtQPceOgcrYTy7pu5zIZK1sRK8OGAdifaLnWOXBBsPwpSVLRKmHgP0b8xbrYOu73qArghhrN761aUHnj6ve1IDMbx6XEbz0bUnNkWGjvCT9VRCIanusdidyNAPy359X5v6FiJbh4WFSF0%2FN22vhnoL0AKzEPp0lv4MegY47pLS3NDculroi6gxE1maGs0lYgV8QMqQmp3LMR00M50GAj85Nwk5PXSJfQaBpJ9719Ro79%2FrbMhjKrdCuO0OpVxANdvv13U0YbseBrtkhvbAoNGcY4rj5Ocu2L1sO99sBvcJChnmdoV3iCGd9s2rJM3hGYuEkG5sCdR%2BAvUcqeIGvRDTwSSO2%2FWpORL0IMNZbW0BFYP%2FnNU3mBQcfSberYX9%2FaGWjW5tBaiRlQIU4esBVzvNPYE6TFvdxvzML7nmsgGOqUB2bc80ehD5MRVT1ZkSd%2Fv575aNKfkT7TMalVjO1zQaFPZG4jYwv2uN%2BmKeBNwRhvDZCZEhrOYfaJvVeOjuLA%2BG1TlGcsbQChqwPqYhHHzj2A6hniwgIe2NFKrgANsYQ8XOikg5sv5B%2BHeOO3N2Y6fAmQblb8cyO8xWGb%2FpYkGWsj1GgiRJKYeT66akoprpyaCKXk%2BBGumun2AyJfGp3YLJa0N2Yos&X-Amz-Signature=837ee87162c1ad0137336a3f8c1cd0e4da7360c4df013b379264ad4278ee6bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=698ba1df0596b26170050ac7fb4b453d637a88ef6434d2d0b55a8f37f51d0dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654IDONDZ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFYxKTHr8ljouRXEEfCMPMn1V4mX%2F1u5K%2FTEoIDlcYmlAiEAnk1jstMAZw4mISv1fb3sUjhk6yg0C19oXCmMh%2BPfYSIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPyIiTDqO6Cn1Fig0yrcA40d1EN%2FkdE6Jvm9PvQHJxLecb5OR1PxR%2FvsArACSz8QtXidjLHVQTi9kd0IitehhjhLW5YL2LZSzjAFts3WLfTkE1cI1Ct89bGC%2FYSFwfl4we1nO5fxVYlD%2F9FNsBDMCy75ZnxFVTUIEPKJGeSvNGCq65v6JlDVKPj%2FkxUvzGuWTYrv8tQBt%2Fa%2FmWqU20AtlPseUklozWJE9NC2YaQv9BsosBalBurHIPGH0BggL3B1DpwGN%2FNEG3VFRJD4tQsTkYR1Y0ziy8jn9oO5C%2BCrslOHMmu0NwHyCXCiVmyo66VDNOlmDMpDFTxcxDJIMzsfD4mpMImgud4lKrdkIqzNmWx5oQe%2Bj6hxyw6rXR%2FLlRuPUWRag%2FKe4U9fr8YgrAzT9F3bQdyeGcLElxx5nwEdmH0c%2FF6LWF0kDUNQ0wA7dBqA9Ynv40sCXh1sJLs5N8DjlbQoriywskCUYWy5fSDmunIq%2FUvdMzM%2BJAgKEPIJfQI%2FWS8xSk3o3tCWWYxi%2Fj7Rr5kksbU%2F71JpmB5Vyl9sC%2Fs%2FdHk%2FObPZVVtWFgJSP1sF7nGBk%2FwiUtx27nryLwSqknfJfp1mxCQ%2BlBcxTC3BAm1ZD6CQX11cSmpOaKAhyx3XjsQ%2FA6AHVnDPQ%2FVkMOznmsgGOqUB8PgCsejzYYZuXx1z2wn95qf9g4W6%2BUBqvjnNjcQVZ1mkPUteyGijvFuloX53cCM%2FQd8Ivil4riRaXs668nvDsUgXToMNEFAn%2BccZejL3MChgFa0DGP5vPfJHb%2BBZjq5B39zUMf0Wn%2BVoXaJXnBIV4nwzgjWw5E4V6NQawPEGLp02i%2F3qDOtZ9QCwwI710A%2Bfax7ozsFyelww4Kc3uJAYYPm0kPbD&X-Amz-Signature=c3008982250785a10dbba3323dcf469907754adf32cef3eaf3bcb59123b8dfdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SGROD6L%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICX8avqnmza76PGIp8cUTZ5e16HaskrHui129VtEp0aQAiBZDjHxMwEC4x9krVZja3VpWNhQP1ssBaaOH1CnZGg9yir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM5jJDyI7MY9e4z8mmKtwD1dUoKaDp%2FCSzBjog8zSDxUFwF4rkyMiTc2AP%2FOCaQiVYwjajvoI5Ymni1WKOJ%2FljzFq7bwpYtvj0VjqVoeZ%2B45ciqc0Z4Ncpgld13Ct696JrrlknlG4CrsgaH%2BVfFT0Ypu%2B90MYtsi0tr3XiFy%2FADCo472StkFASuRnaPxWCy0aH%2BploGun8wvcxzUZAS0YdSY5N4kVdbqrY7S0yWR3smfi8f4QiYpVLXsDJhhIqJRnPTiomBkt6J6sP5EBOxA5XnkRe%2B7UYpK3XW1HCaVlWjsX5%2FtlPwITrimNKcJd7a9Xfkq6Oj%2F%2BOFxfnYD3W5hrkPyiZ%2Bo8DcheciLzbSrPXiWD1XeU3YwDOZWo4Rpo6y%2F1sXbYB5ptEvoutJ61jMI5iQpmnDIMjlNywCK3Ya8NcorC4r2ayRbwSe96PdPYA4qxP0aYROarUXpW8i%2BEEWV0cX04tzt6fY0bOz1%2F9VkJClU6IrK%2F9pbDfXgDCPTnXOujawQKsHJatxVEKlrwRZBIX92IzAWn8%2FvRuamP%2FC8MkDZBH7kqHhf1r71A53fJ%2FQjMgTy2tvwJbjmeP5JE%2Fza6FYXaIJbfFYMB02qFxGts8XxKDU%2B%2BiyreHkQ4bw4iPdxO1LepVI9WRr6Zb1TswwueayAY6pgFpa%2BMJg0AhhuSFRWQnuGpLJ0m%2FXtB2SGLrvgpOI5mFlQ0GzOQcUC3rBpqWAa5F8rKjHZYC2n92VavSydiOkKbDHJmdyM6pjEwA%2Fvlm4oCqNEgosVVnY8%2Bh5EKHk%2B0902k%2Bf70ch4afG8DHEKMeAFtOlmv1tHdj1tSz0U9udWYuBejQrvque9VoKyCvAJrPSOv6ctjv7py8kECBaKtf0A2epkHJBlJ%2F&X-Amz-Signature=69b33938c1e314150c095e31edfd56fb9c05b52eb757ddd677c0e9dc15b45629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATW6BMH%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDFBlYb7EVvLcACNV4egjPHlg3gTz4s71lFADkRkXVGtQIhAMc%2BwZDGWVE%2B2n5G4pt%2FWPU5OGJg4ZO3BOs4av9q5ofZKv8DCDsQABoMNjM3NDIzMTgzODA1IgznHZQeoUr%2FgBonQNUq3AOL2D6qyZzre0i07kqLrxJVjDN375%2BTdJ%2BvMFjVNyJbmtQdJC54%2FJm22yb8Au%2Fj4yXdlg93gqsvJLLr0%2BeCN4mXRHUPPcgOJ815fnxYI4PGU6pxsYSFSmnmoM9WlS3pzV6T1cqwVjRTtCBWDcyNk7wVt%2FE0BQ0%2FTlhPm41xICki6gY3qbaDcRyqpIBDr3YLceQCNnO0Q3vrVmiyzfl15USUaJPagnL1bqkQpHcRbGtFQ8TK5P8djOgiiULu12fLzbmBWXeOBc5k1JufoZf%2BRsenqLfV6bJ0WJyGc6zVa90a7duWj7yfjbH4Si6ZlhlXzompQuIOExAUJnuJCKIsEmK60YEaqWwrXnLaTMIZkr8M6NlervT84Q9kL5wLhrfdwdNc21pM9P57Bd2%2Buuhw3tk0UcnTE8XLDBSnmvbYljtfOOKf7fB1F6HItGx2vLy3SsXK3qLX768uOsiP0znWkrvtCbGcj8RWINGr40gaKQve12sj6U4KGowrB7ItYfa7WoG4JbDYDKMtt%2BLDZQXrHtfh3oNArcw9SA6HmHZNi7ZR41Kro3yKnPm7L7BW%2BwBSRk78OEqj0A7NXIA4u7Ts1i7ErV44c%2Bn0vCpcXKTkIirRsLyVzPWciAE%2Fj49pwDC155rIBjqkAeJMonwUNj6w69sfh7jhk0LSP8ObGQutaaauKolFLVomozr6Xdxz75dxR2ddlfHhOEcS%2FfVJ%2BNLA3n3%2Fa9SiXgvk5KfOYZEtMT9TyqidSEJUrr6teneT8EHmgERatWudWRO3bjCOQKdvjq7WlBigt2g7YTI0uu8wbkIXMXYek1lZuko%2FOYIkTM6mlkFiZdQ8fyxfdeqUr%2FF3%2B%2FxEUkHm6Gpg27tv&X-Amz-Signature=1a540be131c5bcfccdd81f254387b9273a043e88517b8d45807bc267f23122d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=8473332a3b68fbd0853fbf507f5f6bb688037df18aec3af532a89cf4d9804579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNX26X3%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXaow%2Bbnft3%2Ff61t8No3Qqys0tnRaIoUF6RSp%2BJudhWgIgZpykvWhmoIq57Tap6FQploVxus8qR6JchnHjJNaY7joq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDNNKnvInRYmOcdbjircA%2FPfpYYP64RW8fGKLJPdIACXp5vU8ZnRfG73tM3JOOufWq0KDMUNovzyKQUkhfkwaejnBKGdxLlFq7o%2BXFD%2FGn3uB7d8osed0rK8xHHCORMwLr2%2FzsqkdbwYwhJUSp5xiv4f16zf6mWQzrrCwiJsGcXKcJAr6RDTwvyTk%2F9Ct3kAreq1i0%2B0aG1CFghoQybULH%2FcG2ElF2MuAgA%2Bxx0imuXHPBM9yh0lANrE%2FInR%2B01umb6W6rfbUlv2cOR%2FjUiyxLckdTiXnqb59egdZxjOkFuckoxz32yCh3FUBX%2FcK890jxyddfxEmmEqaftS8BUt4P4DRGKQ6FjqyVQOht9Zc7rLIRxyKK9uDJKQx2InVkZGh%2F6MkLBNcqKTRf52cRuUgDqAQfsKliGS9jKuwsBzJD9gLCz5vSrq8Hk9yiWY0oBML0A1TzJhfteoxRbCIJjUVkW%2BDgRI4VlMjHCkQafqrAjNmNpZ510SqP%2FJF5bVJrQSJ%2Bl20uf47M%2BdLpJCDEXjsrXY4Bz3zpS5cocL6YX1oIe0eMHKnAc7UajoCvztjnOv8ZO4vZl0sv%2FaMCM5VwA%2FSnSgBYtlKZVRFIzK8D%2B6QVoqqLMV8f0%2F6ODVp29qcnShSKuQZa%2FnFM3Df%2BOPMPHnmsgGOqUBbmD7RSPywUfvFKul5ltdybX%2BC0JBTLvg5JU2DttwI2dW0fR24hIMG935KUyBhspiI98HIMT7L%2BKOnu%2BJWtGq2ST9l%2FKSg3j6q2HJow%2FDClEAc5RsZwS1r%2FeIamloNnMq0WSyYOHK3W7Lht%2FfE3VK7gg5JZBSC97HzIPGMUO5qfb0qeZoFgiNbgfsDWgr8DFE8HIM2F%2BWCP6Aswn28AOcQ28H53YW&X-Amz-Signature=4bce26d99fd5b141e2007f558d2c3a8cf34caadf850a14aa286f5e056fcd0fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQQOJ34%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEYxTxhJrlQ%2FlXXLa%2F6r%2FRsd5AButzu%2BXROB6OMZ6gc5AiACPddpPdjUTglSUbnbTMKrk07zDDYIzbCubmKP18n8wir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMI%2F1A2A69EBrZ2wD6KtwD33EyuPoZus5SgztS%2FMXTtr6yKy8xg9PpZA%2BW8knpcEAopEkWQ0D5x2R6UW9jym80w6KyaWZPIvlj2cgzFtEsfLHJRDS63nQBr%2FoNNVvZRrtvazsokUsHZbz7FhUPbTrSKLt%2Bb9lI%2FRyb5Y8fpesPF1cesVV1LIQjTkRgZ9NJY8jWiTN89oYQMri0dSo%2F%2B1NsGW%2F8opGHTxcxtSDCclzlzEQqHVSMQAis6tRlI%2FdiQyPlF0wR%2FhEABSaAl9SY0UnI48hhkan5OYZ6fuTu%2Bbq%2FOYjc6fcT80Bb6YIKWn2hGAWjc9cEuRgoFcVYPS3%2Bu0%2FmHPrLDYd05u%2BLgSkxC4ih1cAM%2B3eEn4seOBZBs2wq0JTQ8Y28hrO3LnRklCBWOxDXw2MzPfvOr0DZdlZUnsFD8tU%2FjVgaI7aiDZBdhgrnSaOByA6mHbfZVvJ7F7WyMfCB4CnaCWoeuc8AddyROGh8uJXwNJJo3jWUod6mnkEavyEasE20Lmfs5p%2BtbRRtRPFloNALm%2Fndc6iTCCfrwWDDtoxW%2FFMp2wXCyRaoSV3KZdxDkfA0YXtxyZiYVapCGCzJjWvBEvhLxflM5mKMMaVFwyloDCfk5SrOjPMGbr7UN%2BnBgSmskP0H5huDSGwwr%2BeayAY6pgGoi8oH9O84TQKo6X7%2B7D1gr3%2BerfnGSXRemU9%2FWNtizqdLU3lWTkCv4DiHWSxnK6LyU5%2BhfGXJ1VWkd9CbG%2FHz7UvmvdxyNZbBxgpg7r3tzDsvWdWwA7Yr6b8g0zqk%2Fcsku0F3oVZkVhV3vOiYBQLvK9A0As9Y%2BVd6G4KIMwYnzrIQUrNqRGVOGzs91eXcMfFGMwLdh10uIigi34kZJE1Th%2B5CgD2Z&X-Amz-Signature=175be5b8772b25926268facc4e60c3122dc9b5f77190965da5f7b15be44d083c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQQOJ34%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEYxTxhJrlQ%2FlXXLa%2F6r%2FRsd5AButzu%2BXROB6OMZ6gc5AiACPddpPdjUTglSUbnbTMKrk07zDDYIzbCubmKP18n8wir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMI%2F1A2A69EBrZ2wD6KtwD33EyuPoZus5SgztS%2FMXTtr6yKy8xg9PpZA%2BW8knpcEAopEkWQ0D5x2R6UW9jym80w6KyaWZPIvlj2cgzFtEsfLHJRDS63nQBr%2FoNNVvZRrtvazsokUsHZbz7FhUPbTrSKLt%2Bb9lI%2FRyb5Y8fpesPF1cesVV1LIQjTkRgZ9NJY8jWiTN89oYQMri0dSo%2F%2B1NsGW%2F8opGHTxcxtSDCclzlzEQqHVSMQAis6tRlI%2FdiQyPlF0wR%2FhEABSaAl9SY0UnI48hhkan5OYZ6fuTu%2Bbq%2FOYjc6fcT80Bb6YIKWn2hGAWjc9cEuRgoFcVYPS3%2Bu0%2FmHPrLDYd05u%2BLgSkxC4ih1cAM%2B3eEn4seOBZBs2wq0JTQ8Y28hrO3LnRklCBWOxDXw2MzPfvOr0DZdlZUnsFD8tU%2FjVgaI7aiDZBdhgrnSaOByA6mHbfZVvJ7F7WyMfCB4CnaCWoeuc8AddyROGh8uJXwNJJo3jWUod6mnkEavyEasE20Lmfs5p%2BtbRRtRPFloNALm%2Fndc6iTCCfrwWDDtoxW%2FFMp2wXCyRaoSV3KZdxDkfA0YXtxyZiYVapCGCzJjWvBEvhLxflM5mKMMaVFwyloDCfk5SrOjPMGbr7UN%2BnBgSmskP0H5huDSGwwr%2BeayAY6pgGoi8oH9O84TQKo6X7%2B7D1gr3%2BerfnGSXRemU9%2FWNtizqdLU3lWTkCv4DiHWSxnK6LyU5%2BhfGXJ1VWkd9CbG%2FHz7UvmvdxyNZbBxgpg7r3tzDsvWdWwA7Yr6b8g0zqk%2Fcsku0F3oVZkVhV3vOiYBQLvK9A0As9Y%2BVd6G4KIMwYnzrIQUrNqRGVOGzs91eXcMfFGMwLdh10uIigi34kZJE1Th%2B5CgD2Z&X-Amz-Signature=19255a244969f09f209abf80c605457c5aef1669ec7adc08a295c17849486cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQQOJ34%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEYxTxhJrlQ%2FlXXLa%2F6r%2FRsd5AButzu%2BXROB6OMZ6gc5AiACPddpPdjUTglSUbnbTMKrk07zDDYIzbCubmKP18n8wir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMI%2F1A2A69EBrZ2wD6KtwD33EyuPoZus5SgztS%2FMXTtr6yKy8xg9PpZA%2BW8knpcEAopEkWQ0D5x2R6UW9jym80w6KyaWZPIvlj2cgzFtEsfLHJRDS63nQBr%2FoNNVvZRrtvazsokUsHZbz7FhUPbTrSKLt%2Bb9lI%2FRyb5Y8fpesPF1cesVV1LIQjTkRgZ9NJY8jWiTN89oYQMri0dSo%2F%2B1NsGW%2F8opGHTxcxtSDCclzlzEQqHVSMQAis6tRlI%2FdiQyPlF0wR%2FhEABSaAl9SY0UnI48hhkan5OYZ6fuTu%2Bbq%2FOYjc6fcT80Bb6YIKWn2hGAWjc9cEuRgoFcVYPS3%2Bu0%2FmHPrLDYd05u%2BLgSkxC4ih1cAM%2B3eEn4seOBZBs2wq0JTQ8Y28hrO3LnRklCBWOxDXw2MzPfvOr0DZdlZUnsFD8tU%2FjVgaI7aiDZBdhgrnSaOByA6mHbfZVvJ7F7WyMfCB4CnaCWoeuc8AddyROGh8uJXwNJJo3jWUod6mnkEavyEasE20Lmfs5p%2BtbRRtRPFloNALm%2Fndc6iTCCfrwWDDtoxW%2FFMp2wXCyRaoSV3KZdxDkfA0YXtxyZiYVapCGCzJjWvBEvhLxflM5mKMMaVFwyloDCfk5SrOjPMGbr7UN%2BnBgSmskP0H5huDSGwwr%2BeayAY6pgGoi8oH9O84TQKo6X7%2B7D1gr3%2BerfnGSXRemU9%2FWNtizqdLU3lWTkCv4DiHWSxnK6LyU5%2BhfGXJ1VWkd9CbG%2FHz7UvmvdxyNZbBxgpg7r3tzDsvWdWwA7Yr6b8g0zqk%2Fcsku0F3oVZkVhV3vOiYBQLvK9A0As9Y%2BVd6G4KIMwYnzrIQUrNqRGVOGzs91eXcMfFGMwLdh10uIigi34kZJE1Th%2B5CgD2Z&X-Amz-Signature=917cfe539abc3f586b6ade125510f51abf4720c32832cc0ba8a08e1b487667f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQQOJ34%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEYxTxhJrlQ%2FlXXLa%2F6r%2FRsd5AButzu%2BXROB6OMZ6gc5AiACPddpPdjUTglSUbnbTMKrk07zDDYIzbCubmKP18n8wir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMI%2F1A2A69EBrZ2wD6KtwD33EyuPoZus5SgztS%2FMXTtr6yKy8xg9PpZA%2BW8knpcEAopEkWQ0D5x2R6UW9jym80w6KyaWZPIvlj2cgzFtEsfLHJRDS63nQBr%2FoNNVvZRrtvazsokUsHZbz7FhUPbTrSKLt%2Bb9lI%2FRyb5Y8fpesPF1cesVV1LIQjTkRgZ9NJY8jWiTN89oYQMri0dSo%2F%2B1NsGW%2F8opGHTxcxtSDCclzlzEQqHVSMQAis6tRlI%2FdiQyPlF0wR%2FhEABSaAl9SY0UnI48hhkan5OYZ6fuTu%2Bbq%2FOYjc6fcT80Bb6YIKWn2hGAWjc9cEuRgoFcVYPS3%2Bu0%2FmHPrLDYd05u%2BLgSkxC4ih1cAM%2B3eEn4seOBZBs2wq0JTQ8Y28hrO3LnRklCBWOxDXw2MzPfvOr0DZdlZUnsFD8tU%2FjVgaI7aiDZBdhgrnSaOByA6mHbfZVvJ7F7WyMfCB4CnaCWoeuc8AddyROGh8uJXwNJJo3jWUod6mnkEavyEasE20Lmfs5p%2BtbRRtRPFloNALm%2Fndc6iTCCfrwWDDtoxW%2FFMp2wXCyRaoSV3KZdxDkfA0YXtxyZiYVapCGCzJjWvBEvhLxflM5mKMMaVFwyloDCfk5SrOjPMGbr7UN%2BnBgSmskP0H5huDSGwwr%2BeayAY6pgGoi8oH9O84TQKo6X7%2B7D1gr3%2BerfnGSXRemU9%2FWNtizqdLU3lWTkCv4DiHWSxnK6LyU5%2BhfGXJ1VWkd9CbG%2FHz7UvmvdxyNZbBxgpg7r3tzDsvWdWwA7Yr6b8g0zqk%2Fcsku0F3oVZkVhV3vOiYBQLvK9A0As9Y%2BVd6G4KIMwYnzrIQUrNqRGVOGzs91eXcMfFGMwLdh10uIigi34kZJE1Th%2B5CgD2Z&X-Amz-Signature=76f51efa49903d77b698ea04a2b6ca07dc6ee72d12eb0cc487072649d5207ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STS6R247%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCU7Qr0T1DS9GJIBoq0v5uBMOePNInWuAP5PltlhMCjQQIgJnVHfwX%2BeAyhBDkXCDuQUKEmZopfknWXkwcIXx45%2BYcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHsmQdlxIbQEFh%2B1MyrcA5NoTBLP896QzGWYPvUN99VCPBClXTxX9FjmvG2aH7h2RMx%2FQ%2BPvDSpgDHaqvAqY7%2B4KGAlRigy33%2FTx0CjzAAIUL%2FS%2B4SUPmgVOS%2BFHLjIiixYiHJo6lN9VrThxg%2FP3my2Mepo219Jup6Ga3isQLypVaGqQZeK05vVI7AknS5RZHFbDE0cJ0%2FstInG2veC%2BFprSPVBpLm1C6n0W1v2Gih6TcihhqYy3YZnySl9Bjy5rMp9V5ESfbp%2BKaOG6unRnBPdp50gQzidE%2FC5YtsD5nV3rzvbyR6fVXgkZlWNwEmIDofnP%2FvKOIz5gk9KFjqp2L%2FbaL6ki8qrpt1ishfMrXpgmQvu8Zjg6xioOj7%2F%2F2jgWLNpUu8uJNvlq6DCPSkpRJ%2FXbg3mLCOhf%2FSZ6APooVkN834uRIsmey39so5825i3%2Fh97ZepUhQWi5Rs0MmFMzRAKWnxAYn1QlMkletby5S7NGpKe8FjZDLvPIBetI8KKRidoMtc8tVFMkYnw8fSMlJw3Y%2FSVjSKyhtZ3ddjln56bU9kNI1TRUxFHyEVj8XUZNKD%2FpCxzu7UWFPNB8QsnVVKauzIt9%2BTDyvLXiLC%2FdEvO%2Ful6%2FRVhcbde63K4l6zCfIIIRlNaF0fQncWbLMNfnmsgGOqUByxMzcAKa298bMy9bk%2BSw19DBC%2BtodJV0g3pemLqaiS75VjDomX3fB9AMd%2BYMvxmSx%2BYEqoOYOZD2ZNw492bFJQZJiCNpP0zviCCveM1RIm22VYA0DP%2BzH5KXYSchIgoahCfb5NLrW5KKyO0pK33YjaRs04FYXAXsPc%2FI39jmrGOllYvp%2FwJqMfeccDP9dIjLTGQHaok4PlvhV2lgUb5QvrO67So1&X-Amz-Signature=8b6f3cb683df54fc63bf342ca12711ce0e16a83e923ce9f44197240a86cf4978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQQOJ34%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEYxTxhJrlQ%2FlXXLa%2F6r%2FRsd5AButzu%2BXROB6OMZ6gc5AiACPddpPdjUTglSUbnbTMKrk07zDDYIzbCubmKP18n8wir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMI%2F1A2A69EBrZ2wD6KtwD33EyuPoZus5SgztS%2FMXTtr6yKy8xg9PpZA%2BW8knpcEAopEkWQ0D5x2R6UW9jym80w6KyaWZPIvlj2cgzFtEsfLHJRDS63nQBr%2FoNNVvZRrtvazsokUsHZbz7FhUPbTrSKLt%2Bb9lI%2FRyb5Y8fpesPF1cesVV1LIQjTkRgZ9NJY8jWiTN89oYQMri0dSo%2F%2B1NsGW%2F8opGHTxcxtSDCclzlzEQqHVSMQAis6tRlI%2FdiQyPlF0wR%2FhEABSaAl9SY0UnI48hhkan5OYZ6fuTu%2Bbq%2FOYjc6fcT80Bb6YIKWn2hGAWjc9cEuRgoFcVYPS3%2Bu0%2FmHPrLDYd05u%2BLgSkxC4ih1cAM%2B3eEn4seOBZBs2wq0JTQ8Y28hrO3LnRklCBWOxDXw2MzPfvOr0DZdlZUnsFD8tU%2FjVgaI7aiDZBdhgrnSaOByA6mHbfZVvJ7F7WyMfCB4CnaCWoeuc8AddyROGh8uJXwNJJo3jWUod6mnkEavyEasE20Lmfs5p%2BtbRRtRPFloNALm%2Fndc6iTCCfrwWDDtoxW%2FFMp2wXCyRaoSV3KZdxDkfA0YXtxyZiYVapCGCzJjWvBEvhLxflM5mKMMaVFwyloDCfk5SrOjPMGbr7UN%2BnBgSmskP0H5huDSGwwr%2BeayAY6pgGoi8oH9O84TQKo6X7%2B7D1gr3%2BerfnGSXRemU9%2FWNtizqdLU3lWTkCv4DiHWSxnK6LyU5%2BhfGXJ1VWkd9CbG%2FHz7UvmvdxyNZbBxgpg7r3tzDsvWdWwA7Yr6b8g0zqk%2Fcsku0F3oVZkVhV3vOiYBQLvK9A0As9Y%2BVd6G4KIMwYnzrIQUrNqRGVOGzs91eXcMfFGMwLdh10uIigi34kZJE1Th%2B5CgD2Z&X-Amz-Signature=b988a14d4d54922bcc8c72d78a751a48dd93ed2148b43c53984061496eec1016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQQOJ34%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEYxTxhJrlQ%2FlXXLa%2F6r%2FRsd5AButzu%2BXROB6OMZ6gc5AiACPddpPdjUTglSUbnbTMKrk07zDDYIzbCubmKP18n8wir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMI%2F1A2A69EBrZ2wD6KtwD33EyuPoZus5SgztS%2FMXTtr6yKy8xg9PpZA%2BW8knpcEAopEkWQ0D5x2R6UW9jym80w6KyaWZPIvlj2cgzFtEsfLHJRDS63nQBr%2FoNNVvZRrtvazsokUsHZbz7FhUPbTrSKLt%2Bb9lI%2FRyb5Y8fpesPF1cesVV1LIQjTkRgZ9NJY8jWiTN89oYQMri0dSo%2F%2B1NsGW%2F8opGHTxcxtSDCclzlzEQqHVSMQAis6tRlI%2FdiQyPlF0wR%2FhEABSaAl9SY0UnI48hhkan5OYZ6fuTu%2Bbq%2FOYjc6fcT80Bb6YIKWn2hGAWjc9cEuRgoFcVYPS3%2Bu0%2FmHPrLDYd05u%2BLgSkxC4ih1cAM%2B3eEn4seOBZBs2wq0JTQ8Y28hrO3LnRklCBWOxDXw2MzPfvOr0DZdlZUnsFD8tU%2FjVgaI7aiDZBdhgrnSaOByA6mHbfZVvJ7F7WyMfCB4CnaCWoeuc8AddyROGh8uJXwNJJo3jWUod6mnkEavyEasE20Lmfs5p%2BtbRRtRPFloNALm%2Fndc6iTCCfrwWDDtoxW%2FFMp2wXCyRaoSV3KZdxDkfA0YXtxyZiYVapCGCzJjWvBEvhLxflM5mKMMaVFwyloDCfk5SrOjPMGbr7UN%2BnBgSmskP0H5huDSGwwr%2BeayAY6pgGoi8oH9O84TQKo6X7%2B7D1gr3%2BerfnGSXRemU9%2FWNtizqdLU3lWTkCv4DiHWSxnK6LyU5%2BhfGXJ1VWkd9CbG%2FHz7UvmvdxyNZbBxgpg7r3tzDsvWdWwA7Yr6b8g0zqk%2Fcsku0F3oVZkVhV3vOiYBQLvK9A0As9Y%2BVd6G4KIMwYnzrIQUrNqRGVOGzs91eXcMfFGMwLdh10uIigi34kZJE1Th%2B5CgD2Z&X-Amz-Signature=3ae264f46e07fef80a4b34ac19492394bcf07052d01d54ef5d757868b234688c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQQOJ34%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEYxTxhJrlQ%2FlXXLa%2F6r%2FRsd5AButzu%2BXROB6OMZ6gc5AiACPddpPdjUTglSUbnbTMKrk07zDDYIzbCubmKP18n8wir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMI%2F1A2A69EBrZ2wD6KtwD33EyuPoZus5SgztS%2FMXTtr6yKy8xg9PpZA%2BW8knpcEAopEkWQ0D5x2R6UW9jym80w6KyaWZPIvlj2cgzFtEsfLHJRDS63nQBr%2FoNNVvZRrtvazsokUsHZbz7FhUPbTrSKLt%2Bb9lI%2FRyb5Y8fpesPF1cesVV1LIQjTkRgZ9NJY8jWiTN89oYQMri0dSo%2F%2B1NsGW%2F8opGHTxcxtSDCclzlzEQqHVSMQAis6tRlI%2FdiQyPlF0wR%2FhEABSaAl9SY0UnI48hhkan5OYZ6fuTu%2Bbq%2FOYjc6fcT80Bb6YIKWn2hGAWjc9cEuRgoFcVYPS3%2Bu0%2FmHPrLDYd05u%2BLgSkxC4ih1cAM%2B3eEn4seOBZBs2wq0JTQ8Y28hrO3LnRklCBWOxDXw2MzPfvOr0DZdlZUnsFD8tU%2FjVgaI7aiDZBdhgrnSaOByA6mHbfZVvJ7F7WyMfCB4CnaCWoeuc8AddyROGh8uJXwNJJo3jWUod6mnkEavyEasE20Lmfs5p%2BtbRRtRPFloNALm%2Fndc6iTCCfrwWDDtoxW%2FFMp2wXCyRaoSV3KZdxDkfA0YXtxyZiYVapCGCzJjWvBEvhLxflM5mKMMaVFwyloDCfk5SrOjPMGbr7UN%2BnBgSmskP0H5huDSGwwr%2BeayAY6pgGoi8oH9O84TQKo6X7%2B7D1gr3%2BerfnGSXRemU9%2FWNtizqdLU3lWTkCv4DiHWSxnK6LyU5%2BhfGXJ1VWkd9CbG%2FHz7UvmvdxyNZbBxgpg7r3tzDsvWdWwA7Yr6b8g0zqk%2Fcsku0F3oVZkVhV3vOiYBQLvK9A0As9Y%2BVd6G4KIMwYnzrIQUrNqRGVOGzs91eXcMfFGMwLdh10uIigi34kZJE1Th%2B5CgD2Z&X-Amz-Signature=917cfe539abc3f586b6ade125510f51abf4720c32832cc0ba8a08e1b487667f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQQOJ34%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEYxTxhJrlQ%2FlXXLa%2F6r%2FRsd5AButzu%2BXROB6OMZ6gc5AiACPddpPdjUTglSUbnbTMKrk07zDDYIzbCubmKP18n8wir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMI%2F1A2A69EBrZ2wD6KtwD33EyuPoZus5SgztS%2FMXTtr6yKy8xg9PpZA%2BW8knpcEAopEkWQ0D5x2R6UW9jym80w6KyaWZPIvlj2cgzFtEsfLHJRDS63nQBr%2FoNNVvZRrtvazsokUsHZbz7FhUPbTrSKLt%2Bb9lI%2FRyb5Y8fpesPF1cesVV1LIQjTkRgZ9NJY8jWiTN89oYQMri0dSo%2F%2B1NsGW%2F8opGHTxcxtSDCclzlzEQqHVSMQAis6tRlI%2FdiQyPlF0wR%2FhEABSaAl9SY0UnI48hhkan5OYZ6fuTu%2Bbq%2FOYjc6fcT80Bb6YIKWn2hGAWjc9cEuRgoFcVYPS3%2Bu0%2FmHPrLDYd05u%2BLgSkxC4ih1cAM%2B3eEn4seOBZBs2wq0JTQ8Y28hrO3LnRklCBWOxDXw2MzPfvOr0DZdlZUnsFD8tU%2FjVgaI7aiDZBdhgrnSaOByA6mHbfZVvJ7F7WyMfCB4CnaCWoeuc8AddyROGh8uJXwNJJo3jWUod6mnkEavyEasE20Lmfs5p%2BtbRRtRPFloNALm%2Fndc6iTCCfrwWDDtoxW%2FFMp2wXCyRaoSV3KZdxDkfA0YXtxyZiYVapCGCzJjWvBEvhLxflM5mKMMaVFwyloDCfk5SrOjPMGbr7UN%2BnBgSmskP0H5huDSGwwr%2BeayAY6pgGoi8oH9O84TQKo6X7%2B7D1gr3%2BerfnGSXRemU9%2FWNtizqdLU3lWTkCv4DiHWSxnK6LyU5%2BhfGXJ1VWkd9CbG%2FHz7UvmvdxyNZbBxgpg7r3tzDsvWdWwA7Yr6b8g0zqk%2Fcsku0F3oVZkVhV3vOiYBQLvK9A0As9Y%2BVd6G4KIMwYnzrIQUrNqRGVOGzs91eXcMfFGMwLdh10uIigi34kZJE1Th%2B5CgD2Z&X-Amz-Signature=f663c8bb2d5a3314e12c0d631d8dbe51b2170c2cb8a203373cc98dd9d56f3620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQQOJ34%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEYxTxhJrlQ%2FlXXLa%2F6r%2FRsd5AButzu%2BXROB6OMZ6gc5AiACPddpPdjUTglSUbnbTMKrk07zDDYIzbCubmKP18n8wir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMI%2F1A2A69EBrZ2wD6KtwD33EyuPoZus5SgztS%2FMXTtr6yKy8xg9PpZA%2BW8knpcEAopEkWQ0D5x2R6UW9jym80w6KyaWZPIvlj2cgzFtEsfLHJRDS63nQBr%2FoNNVvZRrtvazsokUsHZbz7FhUPbTrSKLt%2Bb9lI%2FRyb5Y8fpesPF1cesVV1LIQjTkRgZ9NJY8jWiTN89oYQMri0dSo%2F%2B1NsGW%2F8opGHTxcxtSDCclzlzEQqHVSMQAis6tRlI%2FdiQyPlF0wR%2FhEABSaAl9SY0UnI48hhkan5OYZ6fuTu%2Bbq%2FOYjc6fcT80Bb6YIKWn2hGAWjc9cEuRgoFcVYPS3%2Bu0%2FmHPrLDYd05u%2BLgSkxC4ih1cAM%2B3eEn4seOBZBs2wq0JTQ8Y28hrO3LnRklCBWOxDXw2MzPfvOr0DZdlZUnsFD8tU%2FjVgaI7aiDZBdhgrnSaOByA6mHbfZVvJ7F7WyMfCB4CnaCWoeuc8AddyROGh8uJXwNJJo3jWUod6mnkEavyEasE20Lmfs5p%2BtbRRtRPFloNALm%2Fndc6iTCCfrwWDDtoxW%2FFMp2wXCyRaoSV3KZdxDkfA0YXtxyZiYVapCGCzJjWvBEvhLxflM5mKMMaVFwyloDCfk5SrOjPMGbr7UN%2BnBgSmskP0H5huDSGwwr%2BeayAY6pgGoi8oH9O84TQKo6X7%2B7D1gr3%2BerfnGSXRemU9%2FWNtizqdLU3lWTkCv4DiHWSxnK6LyU5%2BhfGXJ1VWkd9CbG%2FHz7UvmvdxyNZbBxgpg7r3tzDsvWdWwA7Yr6b8g0zqk%2Fcsku0F3oVZkVhV3vOiYBQLvK9A0As9Y%2BVd6G4KIMwYnzrIQUrNqRGVOGzs91eXcMfFGMwLdh10uIigi34kZJE1Th%2B5CgD2Z&X-Amz-Signature=c735c4020f9ecfacc7f139e4a4680b3558bbbfa2c68060100409560b2789d423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQQOJ34%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEYxTxhJrlQ%2FlXXLa%2F6r%2FRsd5AButzu%2BXROB6OMZ6gc5AiACPddpPdjUTglSUbnbTMKrk07zDDYIzbCubmKP18n8wir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMI%2F1A2A69EBrZ2wD6KtwD33EyuPoZus5SgztS%2FMXTtr6yKy8xg9PpZA%2BW8knpcEAopEkWQ0D5x2R6UW9jym80w6KyaWZPIvlj2cgzFtEsfLHJRDS63nQBr%2FoNNVvZRrtvazsokUsHZbz7FhUPbTrSKLt%2Bb9lI%2FRyb5Y8fpesPF1cesVV1LIQjTkRgZ9NJY8jWiTN89oYQMri0dSo%2F%2B1NsGW%2F8opGHTxcxtSDCclzlzEQqHVSMQAis6tRlI%2FdiQyPlF0wR%2FhEABSaAl9SY0UnI48hhkan5OYZ6fuTu%2Bbq%2FOYjc6fcT80Bb6YIKWn2hGAWjc9cEuRgoFcVYPS3%2Bu0%2FmHPrLDYd05u%2BLgSkxC4ih1cAM%2B3eEn4seOBZBs2wq0JTQ8Y28hrO3LnRklCBWOxDXw2MzPfvOr0DZdlZUnsFD8tU%2FjVgaI7aiDZBdhgrnSaOByA6mHbfZVvJ7F7WyMfCB4CnaCWoeuc8AddyROGh8uJXwNJJo3jWUod6mnkEavyEasE20Lmfs5p%2BtbRRtRPFloNALm%2Fndc6iTCCfrwWDDtoxW%2FFMp2wXCyRaoSV3KZdxDkfA0YXtxyZiYVapCGCzJjWvBEvhLxflM5mKMMaVFwyloDCfk5SrOjPMGbr7UN%2BnBgSmskP0H5huDSGwwr%2BeayAY6pgGoi8oH9O84TQKo6X7%2B7D1gr3%2BerfnGSXRemU9%2FWNtizqdLU3lWTkCv4DiHWSxnK6LyU5%2BhfGXJ1VWkd9CbG%2FHz7UvmvdxyNZbBxgpg7r3tzDsvWdWwA7Yr6b8g0zqk%2Fcsku0F3oVZkVhV3vOiYBQLvK9A0As9Y%2BVd6G4KIMwYnzrIQUrNqRGVOGzs91eXcMfFGMwLdh10uIigi34kZJE1Th%2B5CgD2Z&X-Amz-Signature=35f8153e400c84d3c15f0bdeb3daab6459608540e6dbb184a12bbee87dc596eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


