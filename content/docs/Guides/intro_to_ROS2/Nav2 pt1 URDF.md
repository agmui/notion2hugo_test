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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=cef0657acf5811d90b88b7a3d5b5f5c1661cfdeb9be767bb1dacde554f153ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=00ea55f3de55f9014a8338869538bb5d6b24b905102eaf3c8b30d638668aa486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=47a0d69a76dd9439e50ec63940002bc06b9dd54ded206042784948142dd62cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=63a04b4589698e89acf60acd86bf82d254460aefb556b4e569962370414d30db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=e597c57471e713d29f335f156b8af504d87612aabac644b206219256469dbf4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=170ad460d7e62372d97187e53cd7391a7653650caa29fbf6f5bf0cf9d58e57fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=1b686cb683273c390b63309f506d99dbe733cfb9a4fb545c6b44daad12d4394e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=74d58ec65ecc5a67a5e413ca78bc93045580759ae8053bce3b948e8968deb4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=84cbcb2d249eddee66c866b64e9fc972d2d5a6e7cd01608549574a112f44520d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=a976ed99f085ee5528572c88cb11d265b92524e40cc831e8d0aa73abeb2371e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMLCDXH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBg845LBbHxNcygQpXZ7j0t6ykz2J6bui%2FXm%2FJBFgSXvAiBY7Dk%2F1FdZMaEulhnuGeRQw7AEYPPbflxYJ7ikllCsOyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx95V3YqsDNxPvl3yKtwDbc1qkp5ILxsrpBNZXZMbBLCFqHoNGPhrZrlXlGzGHYK9bNXGKMZ%2BteLXXHn%2Blu6JPg3NwHKAH7HM5bOSfo3FBm393fwRO%2Fv6%2BG5The0lw2%2FWxv9Mm1NufbQlkbixXqXFeqNaZ171MKQWKgenk6B3qzRySkEyP3M9ON7L4DOTNmJYvT%2BBIFYl8xB7GwwbP3JOb34PlkO64bMA5oFHkGLNpf6tAFreMfRXkhFVUEVVLv5wOY9HYpSYUbBclGmU0%2FSz0kTRH%2BG6BDaSytGYju6E2pKUuzWz25L2B1BNU9Y1BHRYrMJqju9BdXiXn1BGoj7vneCF8GC85PrkhWjbc2W%2BRlS6aTfra7YH3keSCq5tJsB0%2BA7xKDY%2Frm6FSOgatH3Tf9Hsen5Xg3D47NjCPJubyIMjDF0YJYkc2HgX%2FhbQKDM%2FjbkrZRkyMsUzSVIq8qYcc%2BM8TzkVvzDOvp54%2FCEkJfsPSKRpVQ4TFc2aQT4a14xA%2F9%2FLXKeLJdAqCpfZmDjAFy8iH9eFNZlKGnG88PTPcfuyPcYfJrYE6UeUaLALYjCGlLg60nhHR59LshYRZTJbc%2B3hO%2BGONHAGKcjPXx8t%2FgRr9uQgrSqlroPQP7Hua4bi7p2Mu%2BeGXexrvjYwg7bRxAY6pgG7%2FaZB4%2BZUchE0AMLHPiocRygERUggSv3b7UGx3O%2BQTdPFDdYij5ADvMAMnDdGY%2BUq4440J7kPYbkWM%2B0fdhRwbChbaqSw%2BoWkav30gJPvdKldeUmVRKvfclJIaDxotLz2iVfEQZ9mQDT%2FNtu18G4ykvufolbONMXfhZHyiPUYft2fQWcQA5b3A6k2he7BMkrZADFwB%2BBpSMpt6yNCBd0%2FWHymP7M%2F&X-Amz-Signature=d21323452d363c8ba0db3e0cdfce9c8adfd1fa2d5272afac90fa3d85a6303607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7JZM5EH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC%2BTzA3yVRA%2B27wdywy6kuYa15igd4zvpHj9Z7qxTGIqgIgDwYIAujKNBk06m7RjYuLKFcew%2FWv8189NfEtzZ%2BV%2BdAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRtxVMIbmkj9CnlfSrcA2Nt4ag7CLXaD8yZFGaBz3pSBaipXHQQUrkAbei6prt3i46EEqiPxLOehEJ%2F3y6nZ%2FuI%2FaEBhd6QSCwDGp40%2BlBx7490xQFBGmL%2FnMJEk%2FdKRzFGz2WHQv0ng7d2rHfis9Yj0yNUIc%2FtZ4RzWRX63IavC3AgrSjDznhDGEi28ELR7Mf5i%2BDH52l2yhXQWB8cET5tZfkdxBDcB98HtyLb%2BFN77W0neK%2FQ%2F1V10jN23P5gpUMHZjfxbb36Tcdz%2BwZFH8yK7RskvkOtx7dTXse%2F1kS6Y3O1sOgghX%2Btcmnv%2B5uSUHEvBXj4qk9d833ruysWqLGTOfYRGxCz6wP5uk2kDAuqyFEMiWdtNCImYATNfnY8dpyao0M0Od3gWexUiEhPXxlE5m1KnlIRAOuQUvq2rmv7uH3mhPtyEY2h9tM0myal1EZV%2F%2BIiosrO7hqA9Ul%2Fwzb%2BMou8ZH9Chpfzf%2FVKkTvGAKYiT%2F9GNDTW08p8Ko3YxMUploVdCqZB0x9WStzG%2F4LZ2JjTmiOGU8rNeOuuamQphyWfeGkKpGRxX4yc5LHWbtwybw63Pm%2BGMbu4HEmvGZnaSrhc8nELlwPzU%2BzMkkytdYTNhL6JPGXOiglgMUJCOnZYBOH1jw1ewTydMIW20cQGOqUB2qVeg%2FuojjiADZb7hI2TKp0AibbQvQE3P5mQacwwh5oKI6V56oKSvwCmoyGoYFJ8fe43CPo69pKPSW0%2FyXTmZzPeKuiR1daixd2cZWAH7m7%2BliywD1UQGYaSUlztC82yDYAEkTMZV7Dnjs2qmPdEWezsNsS6C1mbil%2FHSad7Q%2BVQLclYFJZko3tm0syYKVG1vWCNZLQL%2FxMLLe8oyvNgWhQCyL7X&X-Amz-Signature=cd8f2c5ebe71e3298dd1f1933893a76bc25b5b427ee75775bf54b573f4659752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEL7BPFQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHBhZJ2u2TrxXbMx6d7EQbQIuisQbvMD96m4ZK4R5T5IAiBHUyMt0FrAnqnyAJmTAPWB9qTdqPlSw9qBTUuNFlZo0SqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdQyBHEiNytabAQGgKtwD%2Bsc1yMiGYXawdy8zIgfk1B8KN71xDeLmZxZHf%2Bm80Cn6AOEcN%2BcGb9bmIceol7zjgfoOFt4zCkfRrCtyM9I6i2qnJ3XIPojuFWoLxXISm9lW2ijT9Q7ytozfLIrNRItBnxiT%2F1QpHpycOZFjl0jn9ge%2B74JyplHs8Hr1WaVK5dDrTDkWrgdNE2VgxZvh0ZO1P96Dw1g2j7MAevvlqp8IV52JdSmSAM7ALhILNeLROGcBbtv%2BOwk9xhGm24Hgpx9bAw1N5ZtePGipnsmn1uKwuagSN1na5JYhhkPxCqlHcJ6IBOFGvcD2GBmUoB23ScRW2r0IT3rFxPrbDbHu30jeLHrVdF%2Fxdw8m8k4VIeX8bg4o2v7NpQ9%2BMFOEOlEqaoa14VUyknbE6tjnHk9YvcoLDUCu0HD23W0v60E%2FWME9pFltiq74WXsLW5zYgA9VRVUbix6hZyx92aN66lBW603TPQf9v66ocoIAKm4fUDpHAHps76o56%2FRSei4FseaCw89WEO54qFvGB0wKuvnSWWHlTGdlRJDuGGxze5mcI4AyyQGTUOkI4FDKSnCu1oePv4leQHWZtfvEo2pgOQVzvfVEAhWBUlZRE2ys0H4V0HZKXZNkRWwort44s3Y40eIw7LTRxAY6pgFAQphDPmyMB4T8ZihIU8e5esfcqDgJh%2BB33OCdSi7M72mL0OPioQxog9LwuwOc9sYTnKbG5s3OC5qSLkfMRLv%2F3xuv4xzqgvrLNpAyJAtXf7YM6PceR8S4FfTdUY5%2BXyorukVfdwj1ri7JyI6y0Xj7%2Bn8gOdqAceN4ec172YfqxHuKhmu75ZODCLDrBatD607U6W750rsm70pF4NajqXNqPvatwco%2F&X-Amz-Signature=492400c6c23994915ae499656b53e10a1fa4f29627cfe4d9862e2f305fe1aa34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=1ced00e35ac6ff4e28a72e27833baf8e577fe1baf5650870373f92e9d055334e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y424ZY3H%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIEoxmFyxQpMhWpyogFn6rdCQPQdVqGlYUURarG1Z5lGRAiBEEWESCpCH8qyk9r4ZSPkn%2FNNzv4Wtsgj8pY9oL%2BJpPSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlA03ujhtk8J7kfwwKtwDNsr8oRRWSDQOiZBsHiSFMQMxab3ChNfrUre6PoFyc4j8OnJIKb6qTAlAyqEgxUnK%2BkJnWWa3bBBCQhkmx9L4VDV%2FIGVvxjTLTcMpJktpEsy%2FX1LBE7UIN1sXWHO2S8NgQbMNjSFYtr9MRgTyoK65ys0TrtHFWz4Icbw64ArcAQGM2oynUOYsY1CQtYHtldz8a1Z5h427LXwuBvuYK5LVZxTXhsXcyLK36SpkdgArlZavKpipnk0S%2BjaGQXVId8u3kU%2Fvr1QhgZWryRv8Ttq%2F5guDKLZvVQxIXDgBVPjD%2BCC%2BSyrxVtP4TMoniYhV7T0TPHCC2IZiF1kkBVFUWpWTp%2FjCwQ5oYwD9EszNlucYUEQshnK%2F9GD4IjC%2F9RzgfeCJ3pAbSCFXteA1V4S01J%2BiotUyJL2Sv%2BUo8m6Hgxh6qOV0NKh4irc4yhU0Ay8VVfHjpd%2F5xhYaYeyU2F1floNIrcELTthpsQE%2FRhC6yrUIBSTjEaa%2BxPVK%2F9%2FChI%2Fxj4ltmdGG8BMIsumY%2F5CkNCs4j6tKeq7QCSSNlupLi%2BscEDbrJJBccwQmftArsuw0XI9NJrT2Xx21%2B%2FW%2B%2BMsy5HX22ERrR%2F49sIy31JNFFGCU7q2n8szWDBRBhF%2FrEl8wrrXRxAY6pgE11S6z3xQnpQxVg028GxqxxM9%2BvyZWkzKHdKWlZ6skNQ5Dt%2BoALQkVbkwT5JFrilJ5T7x62TNeYRe%2Frq1TfIuV9qRoBwFkZhR32US5oNCKenwij5uMa1uYU4yaYycAoMXRtI8SQCJzflNBctHCZ3Tj2rNJW0LVE3l4OxVGbvN0QC6xtWR2dDHXfZ1tBWTi%2BNyVkFC1sxLF%2FlVbHVL00T0nzV61cJBY&X-Amz-Signature=bb12f8c9611f4145c480d4c068069d72a1b859b76a6a190784c89825c4843b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=067810555847d65054d3aeb94ad995483ae3b80b778264f54df592d60f0347e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7WKR4Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDUaexijD1nk2gXqWdltRp4CgzHrqZjj2iZsJPckhoV0gIhAJ6fGZ4Uygg5ziC22%2FjtNPftL4xtFFPrMNGvPMmCFsAQKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEcZ23%2FkIEAL7Lis8q3AN2lI5kFG1N0noGikHS8EFP5MeJEXH9wLKy02T4IFu0uDN%2FgNGoFHrWm8JVp1K%2Bmh9DzgHqHaNJOxQ8rM4VBHYBdwq5XQYdPIdpIf6CUZ6udl4gMP5tDR89cTfkKlmoededh4lM49xWA4c2WiqOYYzMLoGJ4wp9yqpDDKVotloziQcOgeCrnFAg1uwxn4tNAaIXDamLy1dn4M5ymY7sDv47JTDOsPqmpNs%2Bp%2FlY347yZtdYX8UUQlIUhR9urdYIOQwGuevr9Y9cyIeh%2FmoT2HgnQgWG1LPDXhkDt3RjEvges4bgHJqJxI6z7BvdSFSmPg0Yx8ZVZKrXpHsxDdBdbxSbpp6glPBOTpDqY0Z9Y7l2ABe0Ey5fmOCCBjp2lS5tt3w9k1%2Fs3YG1rawEfx9f65%2FPPY5mxoYklgbx4rq1JJrsQaWyyib2NyEz%2FeH6RzZ%2F4b2CyKKk4Rju5Od3dxqh8UI4OC4KFZO3aWI3K%2BY3FKQ55mdZEO5BTGBlbku7Y7W0hZPKNHA94Vf1bkQQ%2BOibCF32fpRJaiNYYsvXSYW6nRD1Md1gTQfAWq56e6PsjWNatfaX9ekGwfxcesaeFkuz8r1ioYxNI7Wv%2B7ToJ9JtCFJ8WjSM1cWMAbPz3I3xkTCctdHEBjqkAfZ7qxxpdfAuIJce2VIga13RsOYsAry0NoSFJHjIdriIB10C0D4EGfL5U40EzmtZT41Z%2BohAF6HFc%2B6K58PRsIjnO5LsLDVg4I7v470NfcMJ6j%2BuA6v7OA%2F7fnpijemGFGO5S1TcsFHqBgA9js2RYvl%2FVn3svS8RvlANctaLZcl3cwmga9DLInFAieIkqtVcCXp9hlaWz1JH1z%2BnN2IVrAK5t%2FKR&X-Amz-Signature=e21eb1012fea35baa5e8d3d31460c04cee97beed0134a0c0e07dfa89e41a9d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=bb7203ec6f7a05788248712e60fa5aa2966b8eb5343e0a74930e8efcc70cca25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IT4MHE3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDcHE3%2BfhIamhr5BLEd2G%2BLskBQheMIct6N9SpvDdF%2BkwIhAJ1i6vCWfXwa7CrhS5C4O78yIkAkvhNEoZKsOHqYDa4KKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww3Sq41VPB%2FAIsd18q3AMTlj5Z1HiRCYigSNyGUT9aT0H5ZoE176RpWsucvOF%2Fkzx4Zxb7Us2lwQHpjQfOJ3H6FqELrFZ2KiGXAcyt%2BVDHNgmPBOeunumFCjc4YXzgpD%2Fj3pYIeOcHDmeBNt51tVbG7mG%2FAOrVjEshjiHQYkxYfM%2FqMWtU5%2B0xGJ3evuY4HHcsh8z3mc3QHQ6PJNvoELtbkkXRkSKUi377sTHGX5Y%2BsWvkTiDOwS9sQwHIosK15CaKiWqNq%2Fm8ksEOfsqmLatSt7RN6104uKxoiLMBU8uTOCvkvZ0xapuyCHIUviFaX4a6zx7QM1YsmfdkaMBqy%2FDUSreME3HRhrhfEPPTVGD7v%2BWfwImRi%2BR2ydLdVrFU9YFtgOMpWn6%2BokBDKoagHmcJv3BTvGufbnQ8eg4120hB3%2BXG9P1l2ds%2FPsqzhTJb7LtVMdiPiH2gl%2FwBvM8xDLAiTpvSP1rtN0WrVmzUxxhPH3WU451%2F%2FdxJnbtKn9etfdawyjXlV%2B15xkLeHwJjGgefn0Kjs4UEPnmXEAZ6E5AwU64JczLxxmuoPduB1rBKrxlhWsYQVvBhFBmjYrWsgQpeiFpXoB8WJAXHo5bhh2zOnrkBNAZj2dd6l%2BCWFTKN9h8EyTwZTAeeTdHH1TDJtNHEBjqkAdidFSoj4aLDaIWccddNL11up7%2B9fsfpe1P%2Ft4g%2FU6MFYKU9hCplEuBQH1xuOpV%2BpqFHn7cJub95UPZWJur0aEnizLtvnHNY5%2F5sT2YyZc%2FQfryEZPxX7%2BlJg2YgExgHQRz1nZOKeb6yK6ruI6pjhxNu9qBJh28lQwoxfg%2Be0xcOhdfYg6vD7uPYxhlrnl3T19Ss9lsNOclUq%2BaR8%2FZY5W8VEHVq&X-Amz-Signature=a1cc25260b9bdf139ce1b6e412e13d3a93acaef0b027730dd00159e4510092d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=edaf38366146a3bdae59f13c52299468901db37b1370040d7d11e5cac744610e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JE4XSDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCYQzGpAgZdRKZbLjdW7XLVuAcVVtUOYFw36wS%2BKJq7dQIgGd0QtogdgD%2Fe2Yh3jsD1UT%2FZbTqm9UQNWoqUmerhARUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnnOg1zrUzbc44gryrcA5Zzb4o%2F8TUybBnV187bZKS4f%2FeOo7Xev1u5ySQFCongn1xHY2WYfzR4eZH4uDC8J7qiMFpWOvLLmwJaUkNnWz%2FVS2mPLBUBmFoPqoA0RTCXH4lHeH1ahQeaj%2FW2niS8ZjwzuHk3Lk7b9HSOzluheuCNeZnhoOvSMqWezvmBffpkqxw6yB84JcBggDKZisUtq2fZnf1nuOrduMetPK1QCMbOCFwnOd5MjvngpDwlr%2F8532z5W5hQiunrQKfkvV2uw4772OZayHG2vjtoQ02D%2FyXb1UvXUEipOe2Zio17D6A0nQKIuCqnOMI3HhYUa08xpCdnNRJfY20Ru9pOfBrq9GDVie%2Fuwibj2fLJcePBqQH5eEKsGzpS82Q%2B8UardSOGdoe6xmhhGbDbmh5tjdqw0OvUNfTOpz5H66rqRrLPvcm%2ByPgphn0LyB7mSxQe%2FgxKoNwfcODjtOhyjNHQA3gHV4tUx916vZ1Yo1aLWrcO6MBJ503MHbvXmXkAH79rwDe9c4j3asKXrsA7iDk7Z770RjjTfTsxEg%2Bm7%2Bx8K2p4mZDwWJi%2FgS9C6nCZWnb6BQ77mjDd%2BMTt%2FxPtT6R1HjhPoCoxQNLdpaKnFTSdO5JxZjdyCP5SvGa2%2BcjtHQt2MM%2B00cQGOqUBW5jSKqs5Y5YfXPcgb5UuxIgthN%2B0ez3PieaIsEBTfnQEFC%2FwmR2BBrN8Yo%2FhgKKjl1AtXH5rd9VmjUcPy%2BLEI6S7U%2FS1JA9sei7thU5TsBT9XH0BKNeauumbOiPcNQfVwkuaU1zv5NPfqglsFYmvowdaM2HtNf%2F07NTUfcckXEgw3TzxEsYuEeDpszhqDGVJqJmDreKZ6%2BXhp%2FHxHbnq6Q6dSPnv&X-Amz-Signature=12ddda19ae02a46f491a2a83d36cd317d9e3fe248bbcf49497168706a586a132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHSTT4C%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDEapm%2BIWhidCJGexhslGwegpIzLCWyMS3qOfj7ut45xAiEAk9N1HCIDK7MLm1RhazxNNiUMMNi7PUMD0%2B%2BH%2F5Vr6E4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4tGWlI9txvA9PJbCrcA9G9xyRsJfLMiS%2BaB5%2BV8S6I1gZX6iFxaBENMPWjvIn6g2AXhFSGoI2yiNUWHOkCm9xqv%2FYneaOP6lEVtBjFwEnyZUpHhP2IreBhzmkpIQtEpbK5Yrj5VqILNQYYQSDJAD5rYxWmdPSo8beJbjxogG88Wms4fXmkC2p67waxhh0BG94DbcJ8WTbHlDtrNNXunuJFeT3yvJm9O925mJLs6MtpECDE%2FA%2FRKCX%2F4r4ip2Mpldlqsjij0Yd1vNkHpej%2Fteji401xRa7K6gr4%2FyFgB0EpK%2BtBy2%2B86wB9X46tZmoki7ikNhSzdL5UMRFh%2F7%2FZ0aO5HkxrvTnftWsR8%2FSUNZbTTXdBJix4M00uD7ytzbPIxM1tVv8AANAGwZPPlHreVL4Bjb1w%2Bfz7e5oMQLwbZtMh%2BWoU4hZwofDvws7maHCSshSaPizqKWODv29iamUiBlTPYdpGwiK5z2EE5cIZ8VWBRC1zZr9npw0JCfiYBgCWYn0lcOboWEN7k%2FG5c4kGbIfFalRjIqSBRFqPhWHUlQps4zd1fAf%2Bqwz4%2BHC6guDIGvAQVc1bq4GujiPAEotK8fzFCJByQs%2BL6fMfj1bn0Fd9k%2BIWCqBsZKC9e7G%2FyTZJQMR6M2rIkHRAGDg5MMC10cQGOqUBlsgRTykWTEfQjFofLA30VnGxCZaKHwqYpHJ0mORG8ZI8iyl6uAkCkbC2EZYLc4WFLWM4vhZ2C9PbBoUGEeUU9LCyvOCL0bqFXD70ZhBZ6R4qLggvP6syVjUirg58K1iJhXbA4rCQKZewhjhgmYoOY%2BbnwEnLUeMaQUOHLLi4jMfTZYhFrf067ysy0bmPayl3rSCN1V43U97Ocqq%2FV%2BxOrVxZLtac&X-Amz-Signature=f9dc8030a81693a225b82c38829f4650441952a97c97803416ee5d159e654279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXKXPS4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIH%2BkWm9141hlbwAnnNbYmGdwRYRidnjyJDZcy7WPDF1yAiEAoPONCRhL4IPtDOK%2FvNveLItOhHEMfZvOEOc5bdCHETIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtrfrofmeBB3fjXAircA%2BLFWtEU%2FDXNM9jz5r9itf2Wj%2FBiZkocPchj9y%2BI9FjmyJGIMDRS3YqrAiRo9H1%2BjR8pJj%2FTpwyFjSP1DDR%2Bpw9Ycn4maU7DGGSJpkYh7qQPJnNxn%2FM4DI80x7rdoq1D1aQaY7g5ky8UA8SO%2BfBnGpq9i84CEllISodLqggFLxB%2BrFaokoG7d8fQNFq%2BTcojS29tk4aHFu9%2BknW1PRMMNvDfYDVgW3Uvu0sa4RsjmgJxnsjJbEijnL1Lkro23PRvU4zb7%2FU5BRCZA0RqflNYC20f0Pjz0JkbDUYfD04GLY%2BDzTn4T8U7o3d4J2LX3SErct5rj%2FXhSN9G9d9xkBFkk%2FBhUDyH2gh7KR6BaOfHJL7EbVwycv03zOtsYYqNIJE0cXA8vlJrsDYTXNh2wZhJTDF88E2ifeXv4ym%2BV6EfzlEZ97%2BBwi%2Bq8Uo7K1%2F70N26byn1Qbk8UYEw77%2Bg7raJ2G5Nw6JNc%2F8UErp%2Ft%2FyGi1a5LNwXpHhhUi6AFafmFWTX9QmYE2K99t58UtjgdjqG6I06OIboU1egTNXXgwURgJ2vB405nhQUGlNaPiBSkBoFDrvBpLFVav3aoPa7uvhOUp5AQnBFkoC0zdIptfiQOUs1oz3Q%2BQucH3bBomEoMNy10cQGOqUBxtlCxAxSlc09Y1FZ0I%2BU%2BWBEJ1m2CgNjR1CFI9n3l7pglEIee07yrEonKuUIcL9b%2FoqQphbVz9a2PoojN5ikYLV5zmLZ3Tey4Cft2gLOhGoQlcVlGJdcHYOhBaznKNChHRnCyM0cJorkTAjWdb0HwIDhWM2c3LBxM6l637qfzIwiKqsg%2BnspoMzOmCvTJJJS69l9%2BaOFNbcdTDZNaPXjTHwFBgka&X-Amz-Signature=a70daa6ea21d0a65ee4aec1bc333bcd3b1eb022e3c755ed29e1297a8ee948f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFKZ25S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDitP6eMPXEEvaENho67Q5jz8lXw%2FXIiHaZsowFPzp5lwIgYQyEYPeJH%2BBqJR%2FK%2Fret8dFyXkdrl61u4aRbY0CD%2B%2FQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6fox7mcpU5I8s7ZircA0h%2Bsgi5csuh%2FfIgLseUuxyhei0QJiScFxR4Nex%2F9qQW32XaWnLQC%2BxpoouosjaPk%2BJQpzPqRpRg5tdKTL9aMA%2Fjkz%2FRQeclSEREFZ0QQQr0zZGamstSJWmGAQxVrlOKPqJCClWhnIOyitsZmPJS4Rs8P22sTonzeA%2FzaQ8Twz7s27zSdlar8fBi71hmWHh5BODLNXVumwLtB7B24flECVYsARHm3%2BaOltZW2nXpxaMzz8Lpz8d%2BfEEFF%2Bbe5TneBlDyTDDhzfjQrs%2BcQb2mt9haEPk%2FYSOMXHf6gQl6cR%2B8xomdxW7tCm5N%2FklahOQiFKtolu9Qvn2N2xlRjrMZKwy3T0JqxogZqGQJ82A7u8JIwpuI1AEqFt8FePS1mmDZk3foZJ0BSLIxuSm3G2q%2FhQ1fRU0oJ9S%2F5pNL31JNgg56aN319BrSBqF5m9vB%2BregQIr%2BI%2BflmgTsn1rfC%2B4IbGboeWh93NXIpKgopADCd5dZbKsrFfPluF%2FAnEzIAj2O22fO8Jsl9eqjbXWEjbs8FA%2Bd8RQX5UGkNwY9UPNRE5VvL0fN1o2O57td%2B4EHeTanOPY6kURd9laai5D4ZiSiXqSEVoFEmdRR9IuLtwbJ4gf88dftfmj5eBrXYAgEMJm10cQGOqUB0Gg28fi9qCGqZrM90u8h0U%2FBdzWm%2Bywuwz0wA87vjmlAlryNDENoCkvQqD6yevZeXEkJQAnx%2BmUEYFIdqfIVK%2BYnRu1stmOdALJJ0TUu%2BmYU6Da0J2WtpD6mbJEIjOyRp%2FaLGtENDeEerMWSq7nXjEFuFxeemdlHScPv%2BCjwJqUPWrnOmnx7%2FqAzhWBhAGuTXIwXnXqoFm3WkP5SxbltpdPA8Vlx&X-Amz-Signature=73ba2af4a6c97be06174a582dbf1a0a3edad0616ae2a3835da7ec351c6debc40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BCVEQEO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDtfUsoBXjYIe3AXtaZGHUzw%2ByzwkxRfcvZsepVipQ99AIgPS3oL%2Fv3JNvM%2FjdQA7U0CZtRSNaLdNiM3I3jL7JC%2FLoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGS82vqROxYOxuEHASrcA0osbSe4t1VTppt9Ub%2BifpgWpCURl6nZa1hhrg2munnXbchcCnVJtPZbAz8p%2FOYthrhmEJQ2SDLXQ5WmvwR%2BN0uqGK7jX20EC%2BdRxMPbiedijybm41NxhVrmxAumdEfLL%2FBznB%2F7AsMTfxvOvRxP%2F8QJK9rdoawiiQ6cA7So%2BvP4LW4pnaPWif6cuYf%2BmxL9hWLBmNOVQFlqjsiVxvWgenh70ja6sf7fkfuhH25f1IO8CnB3WGnq5brBsQ%2F1oU0jGzYQzAGEsDusgJSjdHGcdWXGRyMp9pXkUIvac4ZGFkAlX7jV9PT7Jmkh9dFdNTO6CN5sxnYLd2VoSTF%2BfUGe2LEVVrrpYj5pK80%2BFtHqKJocDu9laoJZ0owqWwGWdj3bv8onSIaRYsGqc8lttv6ugd7KZoTynogXUydAbdmpjeDdd4EpAk1jfkLra5tn260naL2N0wKG3Vl02UwUFl8qgzr%2FXsqLEUnLjsh5tmlj%2FQsJcGl7SAg8LaksdVGvxYrvN0NyUGa2iI85ZpSbADjmLkU5eJj6DbJ4sCS5OV6d01pxtWW%2BJRMbFM7BqJQzEpJxzpWZHXJbmsZDxS6rvFilbacAKbDXFwIrRjMpSDJd0dtK6KPyVIVOIC9xwffcMK%2B10cQGOqUBIXey3k5Vferj2H4lSc2FPnkeiSR0rrbZ61DNr3NBqojsedo1X04hp8jXlK7n6csKRdw%2B%2FTrkRTcEaqYKu1qUmLI6PbJsN9EMh8eRX0iW%2Fx%2BENnOeL6QTrtKQpCvZjH0k27rXjendtd11fzUIjamclTXZn4SRoc8So4kyM4fxdZib0Xdrr%2FJw1prnwHgDR0nXZIuVMXX6qUJD%2BHn3eHkY%2BrzNi0q0&X-Amz-Signature=2d4eae8362d309be9848930c204274f022573daf536f322e0d73699e8c54f7e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=14123bbe88d287787249f516b8919ce7e0b307bcb71c432b6c7277575df97a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOE74YV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCVfk4ceEjwCZNCmT6phqeRXMCvwzCuUfyeAi0YzejEsAIgVFkVJA88B%2BAGC%2BSXZOg3KDiD854%2FEj2kIw93VsUl6mIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuyfkhXYw6eCW0pircA8ptN9yL8KT04UowQhYizvJNk9sZK5q3poms0NhEORLgrdZH3qLsUxw3jG3dwKVE8J2L%2FMBBgoOV0tPvgOevEl2B4vVvhssqJOOqZ%2BCKVYUALdW%2BTS8v4BnHTr6Sdv7eYsP5gO5SGcyZoFLclYHJ4VRrLa%2BOKhH6ZruvXUOQMp2yxsU5HuXxq4OelWN2BuuzEXTplK3Phs%2FABLxCuUVfQpgIlIXXCml92TALsyxTG3Bx%2FQD4Cd%2FUWm1y6vBpJxXMiCWK%2FBngDC%2BJMZCptyhaNVwKFtvhCOkkWVBqEjAAAvdZWhhgtdvf5252Jf942BL%2BUv3WxobT3NNJaK6V%2BGOMdhdciqBC4oQLdZhygOUj5rSKHJHUdeg%2B%2BYDjq6mHYCi9UgTre2vHm3HKdZBdpJUxoVnx9%2FXGzVbm9PyznbR9vog08Npi7Sx1JqgelFxSNd0op72kkZ24I0iaykBeX1AwhsfSr7UpxHBN1En5p344wRojQdd3tPXBGoG%2B1VCLFv4gTUN%2F1zYO%2BeHF4v%2ByBSJLN%2Bn3O2TifWtbhMfPn1UbaRKeKlQrEXUBPcy5V60NBZHGrc%2F25u0CzI168QfwIsuesgcboTxdzjZbxiwLQcDMPwP12zFI0%2Bkg%2F2KA9n4uMIO20cQGOqUBQxGQ7QAUoxF72CjeMg6g5QOmCK%2FfxW3m2qIyjwRuXoUPlTferemrHY6tM0UOSqS1jKvzaaDHpe5IK84UYhNUqIQubdpcCMwh%2BNCkih3rFAqLb07pEsR41fSYxWIW%2Ba85PG8FE81iuo0UFDj5UVdr8LFXNpsNvu4zG3t7m4S9bsEmkTdCXuQGqrt8kC8%2Bt%2FjaPSv5AIzQl0qX9EUIsiados0Fosfy&X-Amz-Signature=d523ef1c1f55dc8d8f2152f054fc0be30f37f8de7230818af50720d806571b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BQ6Q7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICv14NShxdPSKRVTO4QConD44ngPs2Fg8pj9ZCg6McDaAiA9jmedwAZaOaB6NGzGASZqCAZLavORL94oQMy1Lk4%2F6CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHH4YAc1cte6NcmUKtwD4QZSlxRoKnTWLgbiGh9OQ6e3%2F8oRdjeLQrFhDyvcT6kSJ5%2BimE7k4zrkMUQUNulhXm2Jmrr2xLqjwgRtwmAE1GDVqSszP8Dkq%2BK0PO4Hg7BKo44wXYO89coMfSsf9aQyiamQ8myoRC5WAiCnOSDHtKEXuZ1AJGM6OkR%2BSsQSwk0HD9K7iIY1vXw7nstQ0AHOsh6O4l%2B7e%2FOR2ga84cfNrf%2Fte4HiSfKY5SHNX%2FtnclR%2FOAOIUL%2Bg2JSt5hZpM%2B2qrRcTcwgV%2FW51gqV3PdUwMpsZZ8OAV9s75Q%2FmCaELYYbBhZiPGOfHjf%2F0dhoIk78CUifILzx0hw1llLbFEEbDiCmJOOUL5DM0xuGM7l%2FqEld9wDY1iXV9amBpGFrnBZtqjq1btbAexcTiCcUFGsxkT9zmQfoDVKGZkAG89Eh4XMIGOze4BiTP%2BGqFLP00fDmWDouu%2BSlLfNxcJNtK1yPBdfqmCfs2Tbrqm%2Ft4kR%2BfOyvMAFbQJaqHlQwN89WPMJNrDnkHtsZTJPLFvvttGm9oBTeIuyH4R9BucHgP6u2n0%2FN45I%2BGvzK9mcDXj4lnp%2BBdKqWFKUzB%2FdP6nhpJmezF44m0A9PPq9taTBnzDNFV%2F1PFlEKZMPhxWhSqYgsw7LTRxAY6pgGou8aU4I4TcwA%2F5Cpgc7k2fm7lijnKo1myaMPq7CqDuVbOy6PPkvZTx3OQC0coDJe8wNGFMhaykKGY7K77vA1zaf3uVhGreHpe9Vq%2Fo%2ByqCUg4%2BM%2FlrlrAyYbHixvopU2sISpYFXZtr4Y8hbMYuFQia12LYrEteeHCTDA36MqZy87lhV9cs4Noxz2DvY%2Bel9IqOkwa%2Bcl0GX6yEe2hv217dG51643m&X-Amz-Signature=502b4c7ea322c9f127d654ec0291e18049733e20a1e2747402c4c7705cc04459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BQ6Q7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICv14NShxdPSKRVTO4QConD44ngPs2Fg8pj9ZCg6McDaAiA9jmedwAZaOaB6NGzGASZqCAZLavORL94oQMy1Lk4%2F6CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHH4YAc1cte6NcmUKtwD4QZSlxRoKnTWLgbiGh9OQ6e3%2F8oRdjeLQrFhDyvcT6kSJ5%2BimE7k4zrkMUQUNulhXm2Jmrr2xLqjwgRtwmAE1GDVqSszP8Dkq%2BK0PO4Hg7BKo44wXYO89coMfSsf9aQyiamQ8myoRC5WAiCnOSDHtKEXuZ1AJGM6OkR%2BSsQSwk0HD9K7iIY1vXw7nstQ0AHOsh6O4l%2B7e%2FOR2ga84cfNrf%2Fte4HiSfKY5SHNX%2FtnclR%2FOAOIUL%2Bg2JSt5hZpM%2B2qrRcTcwgV%2FW51gqV3PdUwMpsZZ8OAV9s75Q%2FmCaELYYbBhZiPGOfHjf%2F0dhoIk78CUifILzx0hw1llLbFEEbDiCmJOOUL5DM0xuGM7l%2FqEld9wDY1iXV9amBpGFrnBZtqjq1btbAexcTiCcUFGsxkT9zmQfoDVKGZkAG89Eh4XMIGOze4BiTP%2BGqFLP00fDmWDouu%2BSlLfNxcJNtK1yPBdfqmCfs2Tbrqm%2Ft4kR%2BfOyvMAFbQJaqHlQwN89WPMJNrDnkHtsZTJPLFvvttGm9oBTeIuyH4R9BucHgP6u2n0%2FN45I%2BGvzK9mcDXj4lnp%2BBdKqWFKUzB%2FdP6nhpJmezF44m0A9PPq9taTBnzDNFV%2F1PFlEKZMPhxWhSqYgsw7LTRxAY6pgGou8aU4I4TcwA%2F5Cpgc7k2fm7lijnKo1myaMPq7CqDuVbOy6PPkvZTx3OQC0coDJe8wNGFMhaykKGY7K77vA1zaf3uVhGreHpe9Vq%2Fo%2ByqCUg4%2BM%2FlrlrAyYbHixvopU2sISpYFXZtr4Y8hbMYuFQia12LYrEteeHCTDA36MqZy87lhV9cs4Noxz2DvY%2Bel9IqOkwa%2Bcl0GX6yEe2hv217dG51643m&X-Amz-Signature=6b8d9a19e7f10f390ef1ad607d96d32d5b45ed996ae6ab98a3672d890842587e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BQ6Q7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICv14NShxdPSKRVTO4QConD44ngPs2Fg8pj9ZCg6McDaAiA9jmedwAZaOaB6NGzGASZqCAZLavORL94oQMy1Lk4%2F6CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHH4YAc1cte6NcmUKtwD4QZSlxRoKnTWLgbiGh9OQ6e3%2F8oRdjeLQrFhDyvcT6kSJ5%2BimE7k4zrkMUQUNulhXm2Jmrr2xLqjwgRtwmAE1GDVqSszP8Dkq%2BK0PO4Hg7BKo44wXYO89coMfSsf9aQyiamQ8myoRC5WAiCnOSDHtKEXuZ1AJGM6OkR%2BSsQSwk0HD9K7iIY1vXw7nstQ0AHOsh6O4l%2B7e%2FOR2ga84cfNrf%2Fte4HiSfKY5SHNX%2FtnclR%2FOAOIUL%2Bg2JSt5hZpM%2B2qrRcTcwgV%2FW51gqV3PdUwMpsZZ8OAV9s75Q%2FmCaELYYbBhZiPGOfHjf%2F0dhoIk78CUifILzx0hw1llLbFEEbDiCmJOOUL5DM0xuGM7l%2FqEld9wDY1iXV9amBpGFrnBZtqjq1btbAexcTiCcUFGsxkT9zmQfoDVKGZkAG89Eh4XMIGOze4BiTP%2BGqFLP00fDmWDouu%2BSlLfNxcJNtK1yPBdfqmCfs2Tbrqm%2Ft4kR%2BfOyvMAFbQJaqHlQwN89WPMJNrDnkHtsZTJPLFvvttGm9oBTeIuyH4R9BucHgP6u2n0%2FN45I%2BGvzK9mcDXj4lnp%2BBdKqWFKUzB%2FdP6nhpJmezF44m0A9PPq9taTBnzDNFV%2F1PFlEKZMPhxWhSqYgsw7LTRxAY6pgGou8aU4I4TcwA%2F5Cpgc7k2fm7lijnKo1myaMPq7CqDuVbOy6PPkvZTx3OQC0coDJe8wNGFMhaykKGY7K77vA1zaf3uVhGreHpe9Vq%2Fo%2ByqCUg4%2BM%2FlrlrAyYbHixvopU2sISpYFXZtr4Y8hbMYuFQia12LYrEteeHCTDA36MqZy87lhV9cs4Noxz2DvY%2Bel9IqOkwa%2Bcl0GX6yEe2hv217dG51643m&X-Amz-Signature=29b6903861bf92034242787c7784518e53daece1ca1e80a3881dfaa4ce736b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BQ6Q7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICv14NShxdPSKRVTO4QConD44ngPs2Fg8pj9ZCg6McDaAiA9jmedwAZaOaB6NGzGASZqCAZLavORL94oQMy1Lk4%2F6CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHH4YAc1cte6NcmUKtwD4QZSlxRoKnTWLgbiGh9OQ6e3%2F8oRdjeLQrFhDyvcT6kSJ5%2BimE7k4zrkMUQUNulhXm2Jmrr2xLqjwgRtwmAE1GDVqSszP8Dkq%2BK0PO4Hg7BKo44wXYO89coMfSsf9aQyiamQ8myoRC5WAiCnOSDHtKEXuZ1AJGM6OkR%2BSsQSwk0HD9K7iIY1vXw7nstQ0AHOsh6O4l%2B7e%2FOR2ga84cfNrf%2Fte4HiSfKY5SHNX%2FtnclR%2FOAOIUL%2Bg2JSt5hZpM%2B2qrRcTcwgV%2FW51gqV3PdUwMpsZZ8OAV9s75Q%2FmCaELYYbBhZiPGOfHjf%2F0dhoIk78CUifILzx0hw1llLbFEEbDiCmJOOUL5DM0xuGM7l%2FqEld9wDY1iXV9amBpGFrnBZtqjq1btbAexcTiCcUFGsxkT9zmQfoDVKGZkAG89Eh4XMIGOze4BiTP%2BGqFLP00fDmWDouu%2BSlLfNxcJNtK1yPBdfqmCfs2Tbrqm%2Ft4kR%2BfOyvMAFbQJaqHlQwN89WPMJNrDnkHtsZTJPLFvvttGm9oBTeIuyH4R9BucHgP6u2n0%2FN45I%2BGvzK9mcDXj4lnp%2BBdKqWFKUzB%2FdP6nhpJmezF44m0A9PPq9taTBnzDNFV%2F1PFlEKZMPhxWhSqYgsw7LTRxAY6pgGou8aU4I4TcwA%2F5Cpgc7k2fm7lijnKo1myaMPq7CqDuVbOy6PPkvZTx3OQC0coDJe8wNGFMhaykKGY7K77vA1zaf3uVhGreHpe9Vq%2Fo%2ByqCUg4%2BM%2FlrlrAyYbHixvopU2sISpYFXZtr4Y8hbMYuFQia12LYrEteeHCTDA36MqZy87lhV9cs4Noxz2DvY%2Bel9IqOkwa%2Bcl0GX6yEe2hv217dG51643m&X-Amz-Signature=59a6a95fff2d9228f88164314abd82de7defb69b1977c93ffc514f929c5c996b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BQ6Q7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICv14NShxdPSKRVTO4QConD44ngPs2Fg8pj9ZCg6McDaAiA9jmedwAZaOaB6NGzGASZqCAZLavORL94oQMy1Lk4%2F6CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHH4YAc1cte6NcmUKtwD4QZSlxRoKnTWLgbiGh9OQ6e3%2F8oRdjeLQrFhDyvcT6kSJ5%2BimE7k4zrkMUQUNulhXm2Jmrr2xLqjwgRtwmAE1GDVqSszP8Dkq%2BK0PO4Hg7BKo44wXYO89coMfSsf9aQyiamQ8myoRC5WAiCnOSDHtKEXuZ1AJGM6OkR%2BSsQSwk0HD9K7iIY1vXw7nstQ0AHOsh6O4l%2B7e%2FOR2ga84cfNrf%2Fte4HiSfKY5SHNX%2FtnclR%2FOAOIUL%2Bg2JSt5hZpM%2B2qrRcTcwgV%2FW51gqV3PdUwMpsZZ8OAV9s75Q%2FmCaELYYbBhZiPGOfHjf%2F0dhoIk78CUifILzx0hw1llLbFEEbDiCmJOOUL5DM0xuGM7l%2FqEld9wDY1iXV9amBpGFrnBZtqjq1btbAexcTiCcUFGsxkT9zmQfoDVKGZkAG89Eh4XMIGOze4BiTP%2BGqFLP00fDmWDouu%2BSlLfNxcJNtK1yPBdfqmCfs2Tbrqm%2Ft4kR%2BfOyvMAFbQJaqHlQwN89WPMJNrDnkHtsZTJPLFvvttGm9oBTeIuyH4R9BucHgP6u2n0%2FN45I%2BGvzK9mcDXj4lnp%2BBdKqWFKUzB%2FdP6nhpJmezF44m0A9PPq9taTBnzDNFV%2F1PFlEKZMPhxWhSqYgsw7LTRxAY6pgGou8aU4I4TcwA%2F5Cpgc7k2fm7lijnKo1myaMPq7CqDuVbOy6PPkvZTx3OQC0coDJe8wNGFMhaykKGY7K77vA1zaf3uVhGreHpe9Vq%2Fo%2ByqCUg4%2BM%2FlrlrAyYbHixvopU2sISpYFXZtr4Y8hbMYuFQia12LYrEteeHCTDA36MqZy87lhV9cs4Noxz2DvY%2Bel9IqOkwa%2Bcl0GX6yEe2hv217dG51643m&X-Amz-Signature=e30591bc063f9e4150f5be878a22c8868f71d1fddf982e759966d1bec86c15b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BQ6Q7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICv14NShxdPSKRVTO4QConD44ngPs2Fg8pj9ZCg6McDaAiA9jmedwAZaOaB6NGzGASZqCAZLavORL94oQMy1Lk4%2F6CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHH4YAc1cte6NcmUKtwD4QZSlxRoKnTWLgbiGh9OQ6e3%2F8oRdjeLQrFhDyvcT6kSJ5%2BimE7k4zrkMUQUNulhXm2Jmrr2xLqjwgRtwmAE1GDVqSszP8Dkq%2BK0PO4Hg7BKo44wXYO89coMfSsf9aQyiamQ8myoRC5WAiCnOSDHtKEXuZ1AJGM6OkR%2BSsQSwk0HD9K7iIY1vXw7nstQ0AHOsh6O4l%2B7e%2FOR2ga84cfNrf%2Fte4HiSfKY5SHNX%2FtnclR%2FOAOIUL%2Bg2JSt5hZpM%2B2qrRcTcwgV%2FW51gqV3PdUwMpsZZ8OAV9s75Q%2FmCaELYYbBhZiPGOfHjf%2F0dhoIk78CUifILzx0hw1llLbFEEbDiCmJOOUL5DM0xuGM7l%2FqEld9wDY1iXV9amBpGFrnBZtqjq1btbAexcTiCcUFGsxkT9zmQfoDVKGZkAG89Eh4XMIGOze4BiTP%2BGqFLP00fDmWDouu%2BSlLfNxcJNtK1yPBdfqmCfs2Tbrqm%2Ft4kR%2BfOyvMAFbQJaqHlQwN89WPMJNrDnkHtsZTJPLFvvttGm9oBTeIuyH4R9BucHgP6u2n0%2FN45I%2BGvzK9mcDXj4lnp%2BBdKqWFKUzB%2FdP6nhpJmezF44m0A9PPq9taTBnzDNFV%2F1PFlEKZMPhxWhSqYgsw7LTRxAY6pgGou8aU4I4TcwA%2F5Cpgc7k2fm7lijnKo1myaMPq7CqDuVbOy6PPkvZTx3OQC0coDJe8wNGFMhaykKGY7K77vA1zaf3uVhGreHpe9Vq%2Fo%2ByqCUg4%2BM%2FlrlrAyYbHixvopU2sISpYFXZtr4Y8hbMYuFQia12LYrEteeHCTDA36MqZy87lhV9cs4Noxz2DvY%2Bel9IqOkwa%2Bcl0GX6yEe2hv217dG51643m&X-Amz-Signature=b973700d52e29a0b1e07d883768bff579409a05771d549d130f4ef9cb8257cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BQ6Q7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICv14NShxdPSKRVTO4QConD44ngPs2Fg8pj9ZCg6McDaAiA9jmedwAZaOaB6NGzGASZqCAZLavORL94oQMy1Lk4%2F6CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHH4YAc1cte6NcmUKtwD4QZSlxRoKnTWLgbiGh9OQ6e3%2F8oRdjeLQrFhDyvcT6kSJ5%2BimE7k4zrkMUQUNulhXm2Jmrr2xLqjwgRtwmAE1GDVqSszP8Dkq%2BK0PO4Hg7BKo44wXYO89coMfSsf9aQyiamQ8myoRC5WAiCnOSDHtKEXuZ1AJGM6OkR%2BSsQSwk0HD9K7iIY1vXw7nstQ0AHOsh6O4l%2B7e%2FOR2ga84cfNrf%2Fte4HiSfKY5SHNX%2FtnclR%2FOAOIUL%2Bg2JSt5hZpM%2B2qrRcTcwgV%2FW51gqV3PdUwMpsZZ8OAV9s75Q%2FmCaELYYbBhZiPGOfHjf%2F0dhoIk78CUifILzx0hw1llLbFEEbDiCmJOOUL5DM0xuGM7l%2FqEld9wDY1iXV9amBpGFrnBZtqjq1btbAexcTiCcUFGsxkT9zmQfoDVKGZkAG89Eh4XMIGOze4BiTP%2BGqFLP00fDmWDouu%2BSlLfNxcJNtK1yPBdfqmCfs2Tbrqm%2Ft4kR%2BfOyvMAFbQJaqHlQwN89WPMJNrDnkHtsZTJPLFvvttGm9oBTeIuyH4R9BucHgP6u2n0%2FN45I%2BGvzK9mcDXj4lnp%2BBdKqWFKUzB%2FdP6nhpJmezF44m0A9PPq9taTBnzDNFV%2F1PFlEKZMPhxWhSqYgsw7LTRxAY6pgGou8aU4I4TcwA%2F5Cpgc7k2fm7lijnKo1myaMPq7CqDuVbOy6PPkvZTx3OQC0coDJe8wNGFMhaykKGY7K77vA1zaf3uVhGreHpe9Vq%2Fo%2ByqCUg4%2BM%2FlrlrAyYbHixvopU2sISpYFXZtr4Y8hbMYuFQia12LYrEteeHCTDA36MqZy87lhV9cs4Noxz2DvY%2Bel9IqOkwa%2Bcl0GX6yEe2hv217dG51643m&X-Amz-Signature=a2499e7a499182d1b5bccefe88a756c15a20c598e2380aa58eede5a54c07bfe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BQ6Q7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICv14NShxdPSKRVTO4QConD44ngPs2Fg8pj9ZCg6McDaAiA9jmedwAZaOaB6NGzGASZqCAZLavORL94oQMy1Lk4%2F6CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHH4YAc1cte6NcmUKtwD4QZSlxRoKnTWLgbiGh9OQ6e3%2F8oRdjeLQrFhDyvcT6kSJ5%2BimE7k4zrkMUQUNulhXm2Jmrr2xLqjwgRtwmAE1GDVqSszP8Dkq%2BK0PO4Hg7BKo44wXYO89coMfSsf9aQyiamQ8myoRC5WAiCnOSDHtKEXuZ1AJGM6OkR%2BSsQSwk0HD9K7iIY1vXw7nstQ0AHOsh6O4l%2B7e%2FOR2ga84cfNrf%2Fte4HiSfKY5SHNX%2FtnclR%2FOAOIUL%2Bg2JSt5hZpM%2B2qrRcTcwgV%2FW51gqV3PdUwMpsZZ8OAV9s75Q%2FmCaELYYbBhZiPGOfHjf%2F0dhoIk78CUifILzx0hw1llLbFEEbDiCmJOOUL5DM0xuGM7l%2FqEld9wDY1iXV9amBpGFrnBZtqjq1btbAexcTiCcUFGsxkT9zmQfoDVKGZkAG89Eh4XMIGOze4BiTP%2BGqFLP00fDmWDouu%2BSlLfNxcJNtK1yPBdfqmCfs2Tbrqm%2Ft4kR%2BfOyvMAFbQJaqHlQwN89WPMJNrDnkHtsZTJPLFvvttGm9oBTeIuyH4R9BucHgP6u2n0%2FN45I%2BGvzK9mcDXj4lnp%2BBdKqWFKUzB%2FdP6nhpJmezF44m0A9PPq9taTBnzDNFV%2F1PFlEKZMPhxWhSqYgsw7LTRxAY6pgGou8aU4I4TcwA%2F5Cpgc7k2fm7lijnKo1myaMPq7CqDuVbOy6PPkvZTx3OQC0coDJe8wNGFMhaykKGY7K77vA1zaf3uVhGreHpe9Vq%2Fo%2ByqCUg4%2BM%2FlrlrAyYbHixvopU2sISpYFXZtr4Y8hbMYuFQia12LYrEteeHCTDA36MqZy87lhV9cs4Noxz2DvY%2Bel9IqOkwa%2Bcl0GX6yEe2hv217dG51643m&X-Amz-Signature=0fd18b292cdc0000d186334419cd34b4468d11d063de09504b85234825e6edb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BQ6Q7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICv14NShxdPSKRVTO4QConD44ngPs2Fg8pj9ZCg6McDaAiA9jmedwAZaOaB6NGzGASZqCAZLavORL94oQMy1Lk4%2F6CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHH4YAc1cte6NcmUKtwD4QZSlxRoKnTWLgbiGh9OQ6e3%2F8oRdjeLQrFhDyvcT6kSJ5%2BimE7k4zrkMUQUNulhXm2Jmrr2xLqjwgRtwmAE1GDVqSszP8Dkq%2BK0PO4Hg7BKo44wXYO89coMfSsf9aQyiamQ8myoRC5WAiCnOSDHtKEXuZ1AJGM6OkR%2BSsQSwk0HD9K7iIY1vXw7nstQ0AHOsh6O4l%2B7e%2FOR2ga84cfNrf%2Fte4HiSfKY5SHNX%2FtnclR%2FOAOIUL%2Bg2JSt5hZpM%2B2qrRcTcwgV%2FW51gqV3PdUwMpsZZ8OAV9s75Q%2FmCaELYYbBhZiPGOfHjf%2F0dhoIk78CUifILzx0hw1llLbFEEbDiCmJOOUL5DM0xuGM7l%2FqEld9wDY1iXV9amBpGFrnBZtqjq1btbAexcTiCcUFGsxkT9zmQfoDVKGZkAG89Eh4XMIGOze4BiTP%2BGqFLP00fDmWDouu%2BSlLfNxcJNtK1yPBdfqmCfs2Tbrqm%2Ft4kR%2BfOyvMAFbQJaqHlQwN89WPMJNrDnkHtsZTJPLFvvttGm9oBTeIuyH4R9BucHgP6u2n0%2FN45I%2BGvzK9mcDXj4lnp%2BBdKqWFKUzB%2FdP6nhpJmezF44m0A9PPq9taTBnzDNFV%2F1PFlEKZMPhxWhSqYgsw7LTRxAY6pgGou8aU4I4TcwA%2F5Cpgc7k2fm7lijnKo1myaMPq7CqDuVbOy6PPkvZTx3OQC0coDJe8wNGFMhaykKGY7K77vA1zaf3uVhGreHpe9Vq%2Fo%2ByqCUg4%2BM%2FlrlrAyYbHixvopU2sISpYFXZtr4Y8hbMYuFQia12LYrEteeHCTDA36MqZy87lhV9cs4Noxz2DvY%2Bel9IqOkwa%2Bcl0GX6yEe2hv217dG51643m&X-Amz-Signature=3ad7d90b531649f742e250c13d94e918925875e8caa5133b1593b20abf98e356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BQ6Q7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICv14NShxdPSKRVTO4QConD44ngPs2Fg8pj9ZCg6McDaAiA9jmedwAZaOaB6NGzGASZqCAZLavORL94oQMy1Lk4%2F6CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHH4YAc1cte6NcmUKtwD4QZSlxRoKnTWLgbiGh9OQ6e3%2F8oRdjeLQrFhDyvcT6kSJ5%2BimE7k4zrkMUQUNulhXm2Jmrr2xLqjwgRtwmAE1GDVqSszP8Dkq%2BK0PO4Hg7BKo44wXYO89coMfSsf9aQyiamQ8myoRC5WAiCnOSDHtKEXuZ1AJGM6OkR%2BSsQSwk0HD9K7iIY1vXw7nstQ0AHOsh6O4l%2B7e%2FOR2ga84cfNrf%2Fte4HiSfKY5SHNX%2FtnclR%2FOAOIUL%2Bg2JSt5hZpM%2B2qrRcTcwgV%2FW51gqV3PdUwMpsZZ8OAV9s75Q%2FmCaELYYbBhZiPGOfHjf%2F0dhoIk78CUifILzx0hw1llLbFEEbDiCmJOOUL5DM0xuGM7l%2FqEld9wDY1iXV9amBpGFrnBZtqjq1btbAexcTiCcUFGsxkT9zmQfoDVKGZkAG89Eh4XMIGOze4BiTP%2BGqFLP00fDmWDouu%2BSlLfNxcJNtK1yPBdfqmCfs2Tbrqm%2Ft4kR%2BfOyvMAFbQJaqHlQwN89WPMJNrDnkHtsZTJPLFvvttGm9oBTeIuyH4R9BucHgP6u2n0%2FN45I%2BGvzK9mcDXj4lnp%2BBdKqWFKUzB%2FdP6nhpJmezF44m0A9PPq9taTBnzDNFV%2F1PFlEKZMPhxWhSqYgsw7LTRxAY6pgGou8aU4I4TcwA%2F5Cpgc7k2fm7lijnKo1myaMPq7CqDuVbOy6PPkvZTx3OQC0coDJe8wNGFMhaykKGY7K77vA1zaf3uVhGreHpe9Vq%2Fo%2ByqCUg4%2BM%2FlrlrAyYbHixvopU2sISpYFXZtr4Y8hbMYuFQia12LYrEteeHCTDA36MqZy87lhV9cs4Noxz2DvY%2Bel9IqOkwa%2Bcl0GX6yEe2hv217dG51643m&X-Amz-Signature=8daad4e1c2b179e73e8352ed2149259d96fa7ed2b75f94bb0fb87a2f7ca6dc7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
