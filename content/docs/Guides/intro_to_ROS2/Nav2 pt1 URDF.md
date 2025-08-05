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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=7069c71149028edf2536f1c5d9aabd40c522a2329b4d767dc451da9c3fe8d27a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=745dcc8d0b8fc382bc0ff326105b4d5e5ed305f58750eefaa697790e50bfcebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=c6a30a096646f89d0f9f613ea299eeff13e5f40609654f00b6eab25918184f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=ed368ecca08257ea278a17366094d06dfd80e71662023f709385f6ed529ca5be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=cf31a0ef22a2a7ce766ce5a81907184559941ba94072d8b056ffe53213547dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=e4b1134cddb3adc9912c6abf652b73c5c326661d28ef86c4a7fa9d71302183f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=1edf117daa74452b2a2aee4105e4c9a8ef8578f9e945279edf55f46514023811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=48e91564606e785d4add6334cdd86fdf46ea47841f8aac5f941a1ebd9878e2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=1b37bb5b450309f329c614bab04fc4b6ac4478accd127ee68e1f29a5b5f924b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=e8da775a4d664eb70e72291f03d328201c124479520894f2ec3e0e83d24d50ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTFCPBDW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDG4h%2BYwOM7UIPUR%2BzpNd8ft3kB9vwsOQ%2BsKzNuUNmfHwIgDG3vn70GlU0P8DFuOV%2BJgEdRrz1H%2FoCZpFa6qxH%2B1JQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFu736EV6QI6ANCCYircAyhs8S8ZXvhR8u5cjc5LcO0RjYPs5DOOqNnsREmy8H%2FnQwQ8X5dLVuoHSzyfFMyvHZ8r1lVxfF789hzleIIhqLfjtNLH%2BE3uY9AjyvbI%2FBckNmLLOZ1SNDaqoYOW%2Ffjh27PFJTzlTpxtshJhK%2FoEEi8QRpIc3rgalBz5xZj3TcgNbHNf1B%2F3X8HEulgNeOvlTLrD%2BIZAxcLqVuCXaxeYybSf4XGuDnGmM9tliRiqMwHHHQW4wc1Nq%2BzvNYZMBpu558V%2FcmI%2BzVBBV6shjNvlDcfEvjV9lGPXadvuSUQiA5%2F0KeO4pGSUA31V6MjtJxqhWX6HweGdT87DLFxRO30YFFn%2BrYmXgZREwLXPZi9TNOfk6WcBbgJaeOiFmhC9LdI4YcKuH%2B2NmXI%2BR2aTkWOxW%2B%2B0sYF1B7FrUT0P6fxdTfctOGkxWXISc%2FL%2BF0D%2FvfjbY3jOG%2F9lNJmDqURaQPymWs0gsPZ%2F%2FdwEURnZV6VLZJxbI8C2QtTNMcXdixFUSytZz5Lwb88yJEDkLNsZsBBVWLYiVZNE%2FTkeNhlZM%2Bm9rLC%2BM%2BnUYqb%2BfJgaYP7Ng87ICjlo5xbpV4TDdN92nZmUp4iHNP4BnPqWnd%2B4I92cJQj4i3GCkPTxGTpP3fwFMOqzxsQGOqUBBEmnctG9VYZTuV4Uk6zNDyI59TnQRip9OeL6mVSv21pF1zoN4Wprxljdb277%2B1aO5yxnDsYjurA0yf7Ry9sAtJK2M2X6PLOPOnVTlczEk9NZFv%2BMBwxkWf7fdRs2Wtg2rph3w4fFFFUzMWN9hAOJvTPPTVGraSqq%2BdTlBvJ9fy8c9ylY7RYim77LeqHjzxeZldmvVTTNwOSmd64gM2fyYPJwSgpu&X-Amz-Signature=f5a6abe2ec9e9d620a8db9c25625d6cae0c5f0e6a392504ce61e7f5eda004211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4HQSMP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDZEOIC8ZpMuLkiuxJ4TL7QJZWNTe5uddHUtjG4qyDpTAiAs0hRvsNDkWjvtjFHjehRIPas85TgpTyyHy3uO7kMjPSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMJUl8hGDfM%2FQhkK7jKtwD0vb%2F%2FaKCy8ErsBgeNg5kRGVhqP%2FA68hgmN4tLlelioLoN96w1mr%2BxasTCJ4ly9o4His8E9rhEnJ5Im77wTVILrLlfIowHL5DoAPh%2BJ6U4%2BDjNvYADKWC6TvY9%2FQkyScXJPNJfaNhZMRx5d%2FhurEPFAVHyiPIYcPdeVGcnrxAcatc7KAJ6%2BCx8v4knOIsast%2FZsj%2FmWZsJODp188FPStQiMuD4EPjTyy%2FFRrAUi4j9W2oREQxmctVbOn8hdTLLXg0tjvJkd9yfzhXzqzezjuv1AgdleyunJa8qnRjQRUel2yqenOV7Lkk57y9yRbarLb3x6jq3QBBcqoeNCxl3eDsQreUUiPiN9wW14WLcQUiio15kVEVQOrN%2Boc7HN7UhX1ns5cTNw0XXHV%2FhTfsF%2FCcmpsk%2BMFi%2BQfMtP5Rx7%2Fyl3NJ8iYMzvBlfNZwpn%2FD0%2BvYSlcXrS4ewEPCUXcBLWxAF0MxKAV4LaW9ncWhm1VwdSiOyvjhNdK3oQEJWe0xhzC1Q02S1gUa%2BbOb0SD9MSlhI7Rz3xnL09%2F0wz%2B9X1gEdu%2F8uOaisoqJS7qeGxlkZj0naeH02%2BSzl9YIKnPpDngpoUdCnUJN4kF6anLLK0PkYrFo0vQ6rCkh1OOLGy4wtbTGxAY6pgHzSEysQpTlZwWr8pBV7DeZKChV3e3HkGLnWTEWh4%2FcApaIofURjZym8E3BrFEbB9Wa55i2HNwZ6aZfUxJHK4%2FqRRSsZUYKMkq5FNjyyo8GIxZdYVMIliWyJBzvJd7HdzRidoDaA006KmpLfBML0SywZdpwmsqHa%2Ftosc%2BQHSbrylbBcAfW38%2FXSzNZJgKhIvBjd2RwV5fpDauCNUsV3KwiQg3gNMAT&X-Amz-Signature=df9056fae0e0563c8738103b9006b7d76c643ac609cb8c3563c1943b11fcf445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4N76I36%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDuzHtCVeW9V8yrfEuqWVY2svBD6eXYWr1ogJQCTiyauAiAFvVkpLezwjMa37uLljz4o4iYqf%2FYqJwLy0v9rxR0N1ir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMtTcbHUr1ULcmTiPeKtwDRqFKzLsV1lJ1lMVqPFMeN2s%2BtqXOaeFH46fbnXFYoHToEmgkC35pw5mSGOxRvj%2Fs7jEl8wEwLIk5lWzKbqj6MyUBAAH0Aci0qUqTCehyJLV3gSinp3JipqmX9aVtgZgd37OgvBcAfE8njeqmnvufDR0EIICDnyJGK%2Fa8IAViDDhg%2Fet4OXdgj4XW98JXuF8VePFo7kHz5KK%2BZFz4iS0Gqfx4Z6Z4vpJNOPwEmgKNUSlWwUmT%2FUif3QhkxM0tT42ya4Goa5UbUQUER93VywpG0%2FNkWbuX8R0RjYr2024av2lsxRNk7ttfgW6pAK3ZWxyfZb1tOTPZKhgXMmiB9yv3UNxEbKwceh8fjgoQudoCmCdqWEEIy%2BIrhnUUyHGbsTBJxWqz30XFCV2KICTZ268mQAJdxc5HaX3%2FSWkMriYhzGrzRJ1PoPG4gyDLsspkUnNI0Pm%2BdcS3NtHZ%2BjrpvEj40VcC0EDAs7%2FwtFPxtB59DF05SLlcZC7bk2rYgW%2FcGnNRsAhiOUdSy8TQIJpoN6L6Sl9NW4A8uJx3fq4wcQTvfPU2OQ3G6G3YD6C7CtnBTRx3JbY9XuA1wRPavLaOa4aTe7%2BSQGwdoXvt0L1jMyl%2BswmNGUErDCg4AKQdSJcwvrPGxAY6pgEcbHhx0d8A8FcQcvnFjXvsi8F2do4t9Pu%2Fdvr8rb%2BBjku2da7IRzJCrzuuhatGsKGwBxek2MZDwsv81CGKnz%2FvQBeo8MpdciVxUaOwTFzrJPh6YHk%2FkACYNGeDrkQnVwOOU53xH%2FfEpAPlBqdY9qlUVENMjOU94iimNWEGtuuoG010Qlt7tqia5kuLAx%2FZ0GSDozBJiQPXPw52wdi8Ro%2F2byw2XmsT&X-Amz-Signature=621928ac4b119fd7b4b82a57a2bd17c88ab0f03ab1325f4eb75b3976922495b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=5a3419ba9f525cb0161cfa1206617507988a1cf875fa6393eb657b54542677f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGLPMT7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIC0oG0yiQybpZ137cW8TPkXiZ25kzi3aBN01mirlWTx5AiEAnCTr49jYOQL%2Fef3dP%2FCGXGuJx6PRlydL4gmns7vDKA4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDG4GMe4KOKwderQsISrcAxxc7wj7ErgQPFvZzbQRrbdKZW3hemzFMR%2FyTRypczU%2FDNG9Nyvq2QxAS%2B43GdPNPmILP%2Bhk6xuEVMJ%2FaSbDxABJQ%2Bk9ReCSN1o62Z7V9E9nf7bXRPZMpgE926qh1Ab2fo3F5ivVTBjC32A2qRBceGjMVyHM5Lq3Llz5TD0a%2BUzfrgBz9iUuvUIYk1sMoCwaQM0vhEQw%2BYRDlzhOqFBgYMYBYjNqLSNVdn5FH2lLWaynjE33C4Ypl2Q2eYVzrs6NQ0AwaTDDqzRUTJak95aAclAc4KTHMJxP1HIe7CtXQnaej3Tt%2FD7Sj7l2ttG2Uq6Iz%2BtsvQnUUSQuIC8Xtn7aq8hypJ7noMG58FBc9Pl4SDpGjaNXwAbG9V6m%2FqZNtuiLbEAv%2BwMeYeaWe%2Bq%2BDTMVegwH8h%2BPW38HNkHq9HIPM%2BEKX8OE9NNsF2ROJ3zCo%2BYm5X1yTKHuWZLDy63xTQCDVGy2Rx2Dn4ueUKC3WywQs1IEwJc26WtTKJdjz63aYovq2s2R4GkRREE9kL4yVfZkbyhZgsHqPtoj7d8i8TMKhveYM5%2FuHG7ExjnhKrulspxA%2FP%2B0UaqQhiYmsAcmlRGbtWGWOjd%2BV3CF4cuaseHQRRpjsAfhi2rLZ3NPhFU%2FMI60xsQGOqUBRxgYybGc%2FZQvXliQcwv%2B6oPumdWbA1g9t2Svi8kI2eibWdNy0%2FnB%2F7ntoicNBBdCwhGvTtM2Nn0pg9jgEaIbhF7WhXGw1tfbD5p1ff2Qpt1TM1zm7IqOjZbNQnfane5pLriSh0ZJpYpek2lKD%2FdEPQxUBy1KNFg6lfOfeJn3TNr4PH09CYDBeYlYqtDRH8f0oUeTW5ZXfpESOU9Spk4ZKNx5PPjD&X-Amz-Signature=333156cd44d7f2e308e1e9648c6d4b4dc54623331fc9212965665b0d0ac5af58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=c161943def4103dff896dbaa588078078f4c10da28e2bf3192fe33dcc106da03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSFELWCW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIH%2Flp3Uk%2FDbEZsZKkkdB2sGuDITFkZo%2B3RoI%2BCVv27AJAiEA56bw%2F6KzEr6MuI9P1TiRocZ%2FaXeffl6otZhKHPEHeoMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBIEyFUsanXsj0vp2CrcA15kbQI1RKJM9E%2BG1QwlwXiuJqkjwulPbcW27DUiDi0asYSeafAjLep4VekBcqeOSUrjntAEHtxDI%2F%2Bt5fDQCp6%2FT5J%2FywpJtfqvF1JDV%2Fzp%2FDPZ2hh3%2BZePQPWLP%2BavRcypFzuXSmcQ74z6cV0CXF7%2Bv7EtTv4yFyQHmbJYihIqVTI1o0PxgZ99g4XnRN5Yt67FGuwBDoDoK3a1HXg98rQLsYvkaoZk9UTW5jKwWQxhXMnqomZUYephMslbVRi6%2BrdL38bXWWNeLvrPzcZTJ6zbh6eAcKugAhd8J4jhOfdrkF5GA274Mu%2BzjYe2XWXwHCn4Ga%2FsRBVBg2KMny0BaUyAQ%2BSoLfqIqv9fA6qCygirNQ3TSr3FYI6rl%2FhZ8Hgm3y2oPd5bFxo6G05ir3xlucKP0OoerRC4cFU0R1APaV%2B2OZ6MJV6zGM7MnOLxEak3gqBngHbQCL9hVq%2BtwfT1lpHQjr95TfP1CJ1O3a%2BFrFM8CGjmuv4R1WU%2FfwtcTTkDqC94yLn2y1xrnstTAh4hKUbDB259ud4DEP4XimZziZO9Ti4lpXnHAMNF%2BZSCwyClJgNI05Nkwkw8Y%2FKXx%2FjlKuHMVZBJNMkUGoC%2FIl4KO3PSriTESOSGz5YzefC3MKu0xsQGOqUB5ZZhHzuJscacEGId3IwMUM0hpYhLbHe41rKQHyjSFm0VP1wnI5AADfA8nuRTTxDYXcmpm7Rxw%2FPa58bNodYbxS9fiUHewcXAT08wAGldPO%2FiCZg5Hukwvv5BwKH83gNVpdY9BDbwNja%2Fx%2Bxs3FourU5UIkUaXhIGteJt1b5K3Zl0AtqQqXmxPegJrqA2I%2BYi%2Fhj2LI7aGIrHGQAKzW8RchNnhatp&X-Amz-Signature=6b69407460e8d28a95c60f9d490d2548c67205a6d467918d82faa9f103919f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=1c8c7e827e1a820767a3444235463d96b6d8dcf65be98e294d759e54a6b15af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPBHDEMH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIA%2B23P8ubu3JgL4V3bgi6aeLxU41thQLWGCOwZteVPRiAiEArMqk7IBOXV9jvOLbSBEjNuiePSpTwaVxHOm6qXsndmcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDat4BGD2LVDMM7iVyrcA6hJJD6tNcFPqBO%2FweXjuS8g8kCvUfmBCJI1eLYqiL%2Fqf62rouzAZmnyP%2F7WAVCUfE8fRRkRBctVbJytJ80PzqvPxma1xSsym%2B270v61B1NICcnRyUYFU2QMBlPsouR%2FmDJcRKq5g0LgZ3jzuNDlw8DZoTf7zjC9elMoeAnw8vcOzSDkw0caJRS18Qf5SoFOCMS3293CfiNtsRAqLSTo7Q6wBdOkJp1aFkQ1ntX9KRYnYCDpTjz8bcQ1ZF1%2FtKbFernRmBdnV0igxrroQM8uyuKwmO2WQnKsmmBeVdue6qDui71nJofM2qsI7fsd%2FFtY4vmjLPpBeSP8uSOl4DLMISQ44qUz%2BgYrGQx9KMOvEdcXPNAZOLaz04EpmP%2BeqQXgTwwwlwk3VVi6hf3Q0y8rVeIDDSsA4peHZOE5ymt8pKBawNzuwIg37xaCBAwhhl3o2f59wd0EzjY4wrzqXLUdoWMMQn6HKT5n7oIfEGmScCzk83nMZsDSFHWy5Ksk65U9E4R7DIcRrU2m0UCgxgX4F7QOohpsWL1WPWYEOrbgpSDEoBQTcn53sblyQ7idPLC0kVVn1JBBdxHGB%2BFEPdmDHOC%2FO59vrpK28aHk5mbHWGhkHEFHBeShp9ubJzF3MOuzxsQGOqUBeEmKCXV9GNviXlLDwUJ8Dq%2BsDlJJAyYgBancfE8h8%2BjmHrBUiK4yHY0smFQ1pXtjlFA0ayw0%2BBY3j7YStceWE3l1X4zQYhPaqDg79PDidRCSUfaiyVraHe9mHtdAOrglWfx%2FYx11CcRV7WqGPCrR31tWnUYR2V4YxBocKasoCH8LMzUGd5u%2FGOH9rJCTEZL6gP3A2%2Bnt918144vvBfNlojhwIllc&X-Amz-Signature=0d39aaa77fca1b594cbb74236513687dd0d13db13152d3c4d0b5e1f7c2065e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=204fce651ca47084d0dc99e434e6cad41026f20782ca99c7a690852c7a800c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM6AQ3D3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBuuKj%2BCOhEqMqjVLFEbjGS3YkolNKZSLvUoymZ6F%2BwUAiEA3EI3uDg2gQClAuROzrbs7yw0YdJHrh8Qox3xEEVJYP8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAH3xWScpu0jBIRvxSrcAzAX2zRC7shc2wbm2YuNr2iCCZz5P%2BthWqUxUsdMG6iCGdGzCXSfMhmgzwlJZtDk0OLpiO7UFSV4gleVaBAoErNOII1KhFi66YW4%2BQvnT%2BR1dQxG2ECQ7iYSEx0VazK0OP4SjRtqeVbJelUHcJ9PkRDknjCr5AmZq5s2otwrX3J%2BTPmDIQdmk60%2FdH9drTDZLLlyYgE0dOlN9eEFecgWLCAK%2F5n58faQeCKA3psSseZBYebVClQ8XscKIEcc1rJXkY0Fc4S5uEcHa9frOXrgyUyoRYcHnm3YPVo66IRkQ6Z%2Fbw9v0g3eRBXbF6jcUcVXHlP9PZKXC9clwGtmiF1OsseuwRBAXjVFc8PxF9oE6v1oW9j75Mo9FFjNW3c0KD8goW3vXJxvaUFmMw4LXAtgpWj04%2FUfQ1E%2FdUMj49Etki0qNFOm%2FhsKxLT2rjP7GC4ojc%2FRcPT1eLE4yOrqflidrU%2FRxyOAIQ8%2B%2FZcOFaLeLjMncYLjHdpcBP9CLyOjpkLiP8BfqX%2BZaZfoSOORegRyFRkkTlCXwS469HDIeHopz4vRrBSkJpej7MbarQdqe1VOXCqAgD9lOpDH%2FQTxyM3%2BHtnxS%2B%2BdxgfbvpaL1gjRUNHBkk8oryHqzUOZh5GlMLezxsQGOqUB2Da2hHxFCTnOai7MWDYTS5u%2Bl8sL2iJw6XyQiZg0%2BWcS2MWJfZ1kZUpAF5D6JUGEdRkGjd9lBBoFHsz5SZTWDxijiTt5sht%2FGZfFDsSl%2FID9EKlBHP8ArSjwCaMFB5KrAJIN3xqDtOvXY%2BGJUYOJMT6R9olUWDympFBfgtHA6UT8xUpbSHjJOqbJ5vNCQPoXUZnR9CHvOOlTi8ZSCsBvgR7s882S&X-Amz-Signature=deb3b307f267001f1b34b8fa5d68da1801938a9a3c08789a1faa2b351c843498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SIJ4UHJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCcDBJhURcLRIOxLzLcdBCOG0MleobznNG8CAtupeTCCQIgTg%2FAu9q1gqQJ6Fw8tEodgp1Fi9a5oRM2U30liqUhhdoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDENWbR7qbtzNP5OnOSrcAwEU4WUkHfdAm3gzb%2F8mZNBd7HF7BEbG3MqoTk6ah3Xkwd978B05cFxXvOkhvmMoKv4%2Bvq3rhkkbnvGVt4wS1qpZa3ojI5aZnV68qbJnLuFJtWLm1EQXK%2F9WJ72MOx5NSwubZVkVpqolsoj%2FZDVoUO2ihyLnG9wnbAaGl%2Fq2zFRspK9k24rLbeNhw6bCSDf6mYvSurF6%2Fb3m65Ut99fsfqdPoDIrBeiP2EWru66T%2FX%2BwVqxEDMH5PEOgtn%2BsbNg4ZQMrAB1tqQsmfiF0p7v9VLPT0g3OcJqOxwKMwZaLFZbyOAVT4dN8yLBHuR6vAYVvl5uGC4DD4J39j%2FLi%2B4Rk4jBfoXVEs0fCyajfusvSEq8ooOH5NKtsR9TI4TAXgzaCDVEpocDYMF%2Fp5DhXxOZjEKIq9nJf8pIE2sfpHva0RBUXySAL5ROOHqxcT2wuWaziWHJynYOGBzUfXVlDGKoUAaXdpkqgOmsCVLO%2BZI7ZEjeLeEWTSynoNT9Fw8cXe%2FyZfIQVLpZzxG0Ezm8x68%2FjrNvP1PykIx8IRDSGQb7MlMJcze9CKV0JglLcgsasVvW053ADZsF5zPa6HYnm1ZWuxFbNinQopP5SoKqJbuQ%2FK57lFnomOuiYxMzla4WfMKCzxsQGOqUBffnhqR3X6F%2B2ja0AxQHB1GVwMmsOLrUfDpPpDMY7QeXhxUqwkuK3fjUYQwAuiVtfZPc8pS%2FFlswrO%2Fxu6vrbYami2zXEGA7v07gjB1iCIPjN6I7imy8AXVZZ7h0AxU0zl6m%2BVBFYOgmCp0tEC0h4eQv2BAtNUkDGzgX6bFE%2FfKfCRF3Qva9F0PPgQzgcEQ4IG%2BzEjkm9aAhp2bDDX7xXtTmqXt8P&X-Amz-Signature=aeff9e40d9d387bb447ce74f0ce561f225ea1620f2764f3247a2a89820747606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRASOME%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDIwLUGW2mjRtgED9FJmRGg%2BZEnfbSNVZjCv%2Brc0pTwkAiAeBbZnNdnWjr8fTWAYfx6ZwUz%2FkD8PLMRxQFBIPP7tNSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMwEvFgwSB41FIUGiYKtwDB3nfJkHF%2B8a0z8qCzatyyQng%2FWCahcHTDDPmKPMQWA%2Bnigx0Us%2FtN%2FeTsgy9ZARSPXxVDhn4hqZ%2F8N0ToVFpR%2FCVoZFIPDbf0cleVPYmrP31cYSFnbjdyWVe0JQO4wsDNWPoIKmCe76Tocy3Ju91nkW7S8pkFheJtN9mmGqMRH6UG4n%2FGywoueZ0CQBpWd3iMscFg1U%2F1NEHbE6oX3lJTa93FUKZfx1o0CZs5yaVjtHIZNH6tHluM0LzUeIJxZNzhEnEmuQlBLuH53mt5D4EjDTajQ%2Fw3Sz9nwR5Qk1dKf8w%2FH52jfOAVbM85VRhcXhmwVNL6ONtw3UbNB1QFURDZ4YdMCIFV2csa0iP0e9d0HVAdF7%2FiFzh7qX8npb2xfMVZguQY72XKBRUkVopy7JpDDQ4m6UksyeR4ibOwUe%2F5iD0krkdlcebWVxSQstH7YL25JWFytBuyiD1MSj9lp31TVF%2FOGbjOwS9VC6jpYCkeHB6VwZJvpNWc1mHh%2BYPSzRO3rZ9MCkxbyV41by%2Fk9BRlIcsDKyQiYJyTu16AXposFdOzx9Urjc8etwIjoYmw6zlF8hm2hzFRJc5g%2B50303gDZ88clcu3HabxDNDfHBOKFNOAM9nikgXE4tw2l8wq7PGxAY6pgGMSLEZz%2FXvyrY0gDtFtjU4RGQBGffxntBcYoyB8s%2BB6L5zrN8txX3sAn1TlkBQr%2FjhXChfuSe%2F2QKBW4xFv%2BdE%2Bvho4cBHS24HTeznlaxLv1JpzG5K37WtgNdetJBVHbkmunmHOb7WHmwLrYIjIXZcFKBimFTzwexVX%2B23T5gFzCxMmvRTslZaMDKaRHVUNkvg%2FiHTy1Tb2HBQdG5Oo3APCbbc5SQu&X-Amz-Signature=8b27d2f7f95fdfe4389e25d223bae60611216a568ac34e10fc593ee80b3d7e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZC7LKH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAnnmPUIGRC69H6bvTVAGFlUm753SuZTXMM%2F0WlkCBaUAiBv8RgNBytgtojfJ12FqcEdu%2FN5lZrahnW0gwq%2Bx1Eylir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMLKPSqR8begVlh2c3KtwDKc028v4IJUB0TVKkmxaYXUWGUGD1yZXk5JqhyGMJeGiFnWve3HspXcOU%2FbWrQb5%2BoCcS5FOU1kdMN%2BGGPnJFieJs7zm9oDhM9uhRXITJBkTyfNf7PNy%2Fm1G7DJuI3Pi%2BrBuA2%2F6MGFaNCC4YsQeftWS%2Bl9EZUVi7c22%2FCFNUi%2BT%2FAsZelTmOFvNIH7Z7fHM84Kp4JSSDeZYLucvmVoGDtc0PXBr7Eczrku0jvkbZwsv5oYqiJUSZJcZj0o9qOAv%2F8hGUQZOdhXRpRGCVrxFLf%2FujV%2FtdROGjhaYEbbIr5laTmd0SuEm055WCJbzF5D73CVR3PR8xsfPqaw6LpSbzFnhMsv7Mc4yr%2Fi8d2g%2FXDE%2FIYjvxq4fLTlf94S5BYJkhdtb7FoY4VS0fnsL0smgE7nq4meH8R9V2hUTlJQNS0dpqRR%2Fcky%2F6cDJjbUPO0YjRzPqM8gcRtezHvMQLb1N%2FiKF%2Bm22NeVpf5pwvO6lWU9VI5DLL9bcRnl6t4AD11%2F2DBBGJxj3DFiktyYaQFFGAf%2Bv7lFcARuLtCNUU4z8P8yKRWMLYAQ%2FV%2FJhn39VIhJGasyUvCPPMuTUzF%2BYTnqgR6ZYwykHSjNVMz6oD7oZPPRKw%2Fib4B5PPfazH0%2F0w6rPGxAY6pgFI3%2BsHOEHFRDWeZ2sGQZT%2F%2FPtQbWE5nuGbIikazvRsF5K0eiwnT8Rexbr0lyDHIRRDl8OrfNdNML9vCTUGZx5iA6%2FSwkvze6oqDY%2F%2Frcn804zWjG48m%2Fz2q3wu5uTbV3CybjDVmxFmXulFYAay8aYQZAcgq28pVcy1y5%2FmZXpCPt%2BCCPw6vQ6Wn7R9G9jSRHukOOvdVgRDceX%2B6GFc6NUfEx%2FtIkAN&X-Amz-Signature=14561a30ee18a501c280956241aa36302378e372bdb68cc949d226f4d8bc15f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7CFJM4E%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCmhILFNYkkQY4ik0VtvwOzxyHszSoU6TbS7%2FYdjBLNQQIgY1WjuVYIYLlDNsBRWbq2HN4Izk0hzdnrd4E5KnFopAAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKUxpwHvVUh%2FX%2FqtYyrcA7Z19IXbYtejPeRknoTjmoaa%2B2u32Jnhe6Y%2Bvoak9Fe9i1wJNSkl0hkdyPjD6aDZLDxSYWj3zUhiudOwvxQTjqHh11nrCbLLN9r5Rb7%2B%2BB4uLFpAN9YX8%2BNKBT3aeUV0yb%2B7FTPkdHjXtruYFHGuEbm7gLfC5BHJGV4vsGb2NYU4AolIt4s%2FQProrvK1HYTSKw6m3vVwjv0SWwSOA042aZwrdSiDm3uLApop%2B9huMJaxH4NteDYC8w2VmnPoa8RV0wIte1dAoHuBBR5QJPmYhHUVXruBBsoOroGq%2Bk3aWJ1J8FNBoCSMV1KQb7e9PhLIk%2Fo5KrIqL9gF1m8I11ZguqQvIgQv0NDPolr7LEGGE%2BcCcBYURbZ%2BcvSEOOh5cAK9uYeLt4lTzcDLVQDN9FDUgUTm7vsEN%2Fs8O1P2tU6B1PAIImv3jSphI7LdZ7gCq8gUyyNxfGjsAQYmiCwods2xvXtDcuqRwrURrEXAePS7xCAFWx%2Bjcdd4ibwlyQ5hhbRLhDH6f7lIfRvcRjOayejiwOGqQrzh9xPuQwL%2BpUt6MOPyrxMzz7Wd47QjOAqYpNjAsmfVdpy7F3OnF9OxehuAyuTIuhGwYHXxKZsBCK2OGN2m1T8Pkn%2BVmV%2Fk0m%2FpMM20xsQGOqUBmlKil1gZZAJBWTmtRC1xGdVekhOaqzhkL%2BZzJZjnLu%2BNiDvkUsh0ksakEk4MUo7aAZ8zn8TEF1MTo21Dl3wj1kyOhOoPeoOPGZxjb1KoDS8wyh8SmV3axVmBotx4NuzKCu4ws%2Bj%2BYp48LYtO7S2%2FoMWrfJoFTs0aI%2FN0xQR1S81blHd%2FtoXfp9Uy%2FofKU5mllZiufl5PQL%2BZYqVvqc9ySLHS5fBY&X-Amz-Signature=0595423deb725e9d260be0246815667c472c9cbc39f74f1c90505bfa5dc24510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=fb9546d0ebbb08930f76b01d591e5e11792ca56d64e0ac975a048b6cf55783d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH5S4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCjgpaFpQUxWiT3msDJXIoMGVtAM9KIOBmO2Brw33bHLAIgJZTOdxJKuDjXN8WVrbXyKxlMRUIT496xs2Mm5BW47osq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJvASdwYbcIhW8MwSircA3THRfzRDquNt1qkGneoKjfO%2FuuCAWDNwEHEHwDPOtGbs2vo4PUMOaJApw63ZAADvla%2BO2NV6QR6JNHB3mYDB5wkSvWYzow9J4umj1oXXFgjiqHtcGfc8DHfmrok5Uzs779jh3KdxYMtTgHFYYG%2Fio9ICtEQ9SaJUKG69MxWKOXzRfHAaXIqUvYm2Hzbbe19KZCg1a%2FMFFxgS2HiwTpuywNoFFyVSTIeh6dUYeZ1SWyfSk4VTFcBUvmBHq9fV1pjNVtwsMHa8397pg%2FPvuM9yemBZyBKfoKPxcXPcqtQXYcwQGUGWRQtbCeCLkgdcLvuqQnaCSldLkJcC7UMQUmFLuKOTI2xf29B%2BBzfpyrX5%2FXjTh7IxGpHcD50wwbc1ZbP%2F1v6Bg3hBfh5sYfjD0paTVFrenzFrQpTFQzFYF3v4oWTl5hL5sC3lexOa%2B1qKNKpV0iJ3cu5hoAFdo2yY2oQ0U0nHS9SLP7kT%2BSqoIvul7VkrIDPzibwIhzCCTKekxy3VkCt4D7h5FIbEU3QBzQrm2Q3G9o0SZxNZ9AZ2k15JBJ88y6pvs8%2Fnzw6tF%2FmcT4%2BO83DnwNEt4WgjCTms6aLzVRr7BmTKTO2TdMBHT04A2mJrc3i9JI0YTvtqw4tMNi0xsQGOqUB%2BdJgP63auRx4GtuzE8bE7vUo3jbpTBoCSlq2bnh2Z0ZXoidKadRjXF8bsoQW17aWwcRGBBJYXIhT1H9iXmGYX2cjiyY1QL27kVnbOy6Q10UpdMGRc0oSID39mWLSlITTUBPrjIXzHnoHqouiy1f8fg4OB6EMFAllxvV%2B14sAfyU3O9ZqVp6RHKi1FqvFEVpTw0pZ848V%2F8tCv84XAebeDrCm9KSh&X-Amz-Signature=8434f705d6567487fff4517fbb382bee9afc5859b9721fcd057db5749230b4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN5MKGB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD0kCEA1anLPwsa%2FFFGs9V7bA41%2FX%2BWuYcvDRgJHVR6SgIhAJ9%2FOebMRCA%2FTXHZsLcT5lc1iaid6Idmg1%2BsS3IQamyVKv8DCFcQABoMNjM3NDIzMTgzODA1IgzZF8oXWA7abGuUo50q3AN%2Fg3BPM5%2BNeQjxwjQ5uj6uMmWeG92EDa7el%2B7KipTpwvNPelOe9gLDMgQsJ4%2FmZrW9wkbnagdOXQnQ7y4ZsCteUv1OIAZ28D1BcXbAy3DLRYfOZhxkQ41UY6biEOsD%2BUuXQv4JInpTS6IqltfwKCti8IYXmRlwYuhTQ8ZtUryPefa3a%2Bt5MnkoG7RKKwx6BsS9Jr3OSyzBo%2BHVoIZKvkxroreehu2skkFCo%2B5n%2FStpSQ8UJlKHRA2lLMKIPlfpUhwi8N0rq9sKmJL2rr0qmxKmKDZZIue8ljNbpS8Suth4uz3uX6abSv2h3XEYWyfXZPdqIWQLbOdDgKGTypLIJKlmcOqj8ISa%2Fkc01bHd7FR3YfV8MCmbGneMKP4sQSqW0i4%2B5w9BjY7gasTKD293eiGP7c6p3O8RT7Z5hvIYNTQr5yALTcF%2B%2FKeChDjhjkuI5y3P8Ob0SMRwpriRjEoKqELWCYKPBPnr9xHoid6ccICh8rFPj4pK39U3Xt4X9lQPEbkhxrSAurZleZMk9JvNTC0bPVxZRz6i%2BSJRSQcYDevArrC8MLo%2FgvwxB9P5kE3E5WLKpOAMf9Htmt%2FNlWdMgDo3FSqmHIRGo%2FNzlVPc6KA5PxOyQ5svpTFw8zBjoDCOtMbEBjqkAer7oYy78%2FlNXhf5upnLnA%2BFGeM1aNkWWFBgqWduCngJ0R7cPDmgT%2FJvtx5aYpHTO3jHT8pjSwcOk5ZOJvFmRQjKKqtpJaneJdnftoCcK4N2yJcEVH3DnC9rV90Gse72LVxcnO1YS3pZyZdLWqFdgj1%2FhhFGUPe5XYByWA1QCJWTlOSe6FmQPnJowccuyFgkmAgQxXhJEyu977RrBJMWHGBZ68wB&X-Amz-Signature=f83217091d7805c3426984a590af4dd55e86066d5657afba80b2bc9f217da515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN5MKGB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD0kCEA1anLPwsa%2FFFGs9V7bA41%2FX%2BWuYcvDRgJHVR6SgIhAJ9%2FOebMRCA%2FTXHZsLcT5lc1iaid6Idmg1%2BsS3IQamyVKv8DCFcQABoMNjM3NDIzMTgzODA1IgzZF8oXWA7abGuUo50q3AN%2Fg3BPM5%2BNeQjxwjQ5uj6uMmWeG92EDa7el%2B7KipTpwvNPelOe9gLDMgQsJ4%2FmZrW9wkbnagdOXQnQ7y4ZsCteUv1OIAZ28D1BcXbAy3DLRYfOZhxkQ41UY6biEOsD%2BUuXQv4JInpTS6IqltfwKCti8IYXmRlwYuhTQ8ZtUryPefa3a%2Bt5MnkoG7RKKwx6BsS9Jr3OSyzBo%2BHVoIZKvkxroreehu2skkFCo%2B5n%2FStpSQ8UJlKHRA2lLMKIPlfpUhwi8N0rq9sKmJL2rr0qmxKmKDZZIue8ljNbpS8Suth4uz3uX6abSv2h3XEYWyfXZPdqIWQLbOdDgKGTypLIJKlmcOqj8ISa%2Fkc01bHd7FR3YfV8MCmbGneMKP4sQSqW0i4%2B5w9BjY7gasTKD293eiGP7c6p3O8RT7Z5hvIYNTQr5yALTcF%2B%2FKeChDjhjkuI5y3P8Ob0SMRwpriRjEoKqELWCYKPBPnr9xHoid6ccICh8rFPj4pK39U3Xt4X9lQPEbkhxrSAurZleZMk9JvNTC0bPVxZRz6i%2BSJRSQcYDevArrC8MLo%2FgvwxB9P5kE3E5WLKpOAMf9Htmt%2FNlWdMgDo3FSqmHIRGo%2FNzlVPc6KA5PxOyQ5svpTFw8zBjoDCOtMbEBjqkAer7oYy78%2FlNXhf5upnLnA%2BFGeM1aNkWWFBgqWduCngJ0R7cPDmgT%2FJvtx5aYpHTO3jHT8pjSwcOk5ZOJvFmRQjKKqtpJaneJdnftoCcK4N2yJcEVH3DnC9rV90Gse72LVxcnO1YS3pZyZdLWqFdgj1%2FhhFGUPe5XYByWA1QCJWTlOSe6FmQPnJowccuyFgkmAgQxXhJEyu977RrBJMWHGBZ68wB&X-Amz-Signature=95b953561236cb8c225ca24c78233b1f1fa98ddf59fa0996e07505f04b2865ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN5MKGB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD0kCEA1anLPwsa%2FFFGs9V7bA41%2FX%2BWuYcvDRgJHVR6SgIhAJ9%2FOebMRCA%2FTXHZsLcT5lc1iaid6Idmg1%2BsS3IQamyVKv8DCFcQABoMNjM3NDIzMTgzODA1IgzZF8oXWA7abGuUo50q3AN%2Fg3BPM5%2BNeQjxwjQ5uj6uMmWeG92EDa7el%2B7KipTpwvNPelOe9gLDMgQsJ4%2FmZrW9wkbnagdOXQnQ7y4ZsCteUv1OIAZ28D1BcXbAy3DLRYfOZhxkQ41UY6biEOsD%2BUuXQv4JInpTS6IqltfwKCti8IYXmRlwYuhTQ8ZtUryPefa3a%2Bt5MnkoG7RKKwx6BsS9Jr3OSyzBo%2BHVoIZKvkxroreehu2skkFCo%2B5n%2FStpSQ8UJlKHRA2lLMKIPlfpUhwi8N0rq9sKmJL2rr0qmxKmKDZZIue8ljNbpS8Suth4uz3uX6abSv2h3XEYWyfXZPdqIWQLbOdDgKGTypLIJKlmcOqj8ISa%2Fkc01bHd7FR3YfV8MCmbGneMKP4sQSqW0i4%2B5w9BjY7gasTKD293eiGP7c6p3O8RT7Z5hvIYNTQr5yALTcF%2B%2FKeChDjhjkuI5y3P8Ob0SMRwpriRjEoKqELWCYKPBPnr9xHoid6ccICh8rFPj4pK39U3Xt4X9lQPEbkhxrSAurZleZMk9JvNTC0bPVxZRz6i%2BSJRSQcYDevArrC8MLo%2FgvwxB9P5kE3E5WLKpOAMf9Htmt%2FNlWdMgDo3FSqmHIRGo%2FNzlVPc6KA5PxOyQ5svpTFw8zBjoDCOtMbEBjqkAer7oYy78%2FlNXhf5upnLnA%2BFGeM1aNkWWFBgqWduCngJ0R7cPDmgT%2FJvtx5aYpHTO3jHT8pjSwcOk5ZOJvFmRQjKKqtpJaneJdnftoCcK4N2yJcEVH3DnC9rV90Gse72LVxcnO1YS3pZyZdLWqFdgj1%2FhhFGUPe5XYByWA1QCJWTlOSe6FmQPnJowccuyFgkmAgQxXhJEyu977RrBJMWHGBZ68wB&X-Amz-Signature=6ef532cb90af950eca9fad0bd46d1873d94210950cbce1a3d87da85dc75ed404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN5MKGB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD0kCEA1anLPwsa%2FFFGs9V7bA41%2FX%2BWuYcvDRgJHVR6SgIhAJ9%2FOebMRCA%2FTXHZsLcT5lc1iaid6Idmg1%2BsS3IQamyVKv8DCFcQABoMNjM3NDIzMTgzODA1IgzZF8oXWA7abGuUo50q3AN%2Fg3BPM5%2BNeQjxwjQ5uj6uMmWeG92EDa7el%2B7KipTpwvNPelOe9gLDMgQsJ4%2FmZrW9wkbnagdOXQnQ7y4ZsCteUv1OIAZ28D1BcXbAy3DLRYfOZhxkQ41UY6biEOsD%2BUuXQv4JInpTS6IqltfwKCti8IYXmRlwYuhTQ8ZtUryPefa3a%2Bt5MnkoG7RKKwx6BsS9Jr3OSyzBo%2BHVoIZKvkxroreehu2skkFCo%2B5n%2FStpSQ8UJlKHRA2lLMKIPlfpUhwi8N0rq9sKmJL2rr0qmxKmKDZZIue8ljNbpS8Suth4uz3uX6abSv2h3XEYWyfXZPdqIWQLbOdDgKGTypLIJKlmcOqj8ISa%2Fkc01bHd7FR3YfV8MCmbGneMKP4sQSqW0i4%2B5w9BjY7gasTKD293eiGP7c6p3O8RT7Z5hvIYNTQr5yALTcF%2B%2FKeChDjhjkuI5y3P8Ob0SMRwpriRjEoKqELWCYKPBPnr9xHoid6ccICh8rFPj4pK39U3Xt4X9lQPEbkhxrSAurZleZMk9JvNTC0bPVxZRz6i%2BSJRSQcYDevArrC8MLo%2FgvwxB9P5kE3E5WLKpOAMf9Htmt%2FNlWdMgDo3FSqmHIRGo%2FNzlVPc6KA5PxOyQ5svpTFw8zBjoDCOtMbEBjqkAer7oYy78%2FlNXhf5upnLnA%2BFGeM1aNkWWFBgqWduCngJ0R7cPDmgT%2FJvtx5aYpHTO3jHT8pjSwcOk5ZOJvFmRQjKKqtpJaneJdnftoCcK4N2yJcEVH3DnC9rV90Gse72LVxcnO1YS3pZyZdLWqFdgj1%2FhhFGUPe5XYByWA1QCJWTlOSe6FmQPnJowccuyFgkmAgQxXhJEyu977RrBJMWHGBZ68wB&X-Amz-Signature=877ae49c40209d67f6be00e750d1b2455388ed430e5bc665846a1a92b4d7a435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN5MKGB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD0kCEA1anLPwsa%2FFFGs9V7bA41%2FX%2BWuYcvDRgJHVR6SgIhAJ9%2FOebMRCA%2FTXHZsLcT5lc1iaid6Idmg1%2BsS3IQamyVKv8DCFcQABoMNjM3NDIzMTgzODA1IgzZF8oXWA7abGuUo50q3AN%2Fg3BPM5%2BNeQjxwjQ5uj6uMmWeG92EDa7el%2B7KipTpwvNPelOe9gLDMgQsJ4%2FmZrW9wkbnagdOXQnQ7y4ZsCteUv1OIAZ28D1BcXbAy3DLRYfOZhxkQ41UY6biEOsD%2BUuXQv4JInpTS6IqltfwKCti8IYXmRlwYuhTQ8ZtUryPefa3a%2Bt5MnkoG7RKKwx6BsS9Jr3OSyzBo%2BHVoIZKvkxroreehu2skkFCo%2B5n%2FStpSQ8UJlKHRA2lLMKIPlfpUhwi8N0rq9sKmJL2rr0qmxKmKDZZIue8ljNbpS8Suth4uz3uX6abSv2h3XEYWyfXZPdqIWQLbOdDgKGTypLIJKlmcOqj8ISa%2Fkc01bHd7FR3YfV8MCmbGneMKP4sQSqW0i4%2B5w9BjY7gasTKD293eiGP7c6p3O8RT7Z5hvIYNTQr5yALTcF%2B%2FKeChDjhjkuI5y3P8Ob0SMRwpriRjEoKqELWCYKPBPnr9xHoid6ccICh8rFPj4pK39U3Xt4X9lQPEbkhxrSAurZleZMk9JvNTC0bPVxZRz6i%2BSJRSQcYDevArrC8MLo%2FgvwxB9P5kE3E5WLKpOAMf9Htmt%2FNlWdMgDo3FSqmHIRGo%2FNzlVPc6KA5PxOyQ5svpTFw8zBjoDCOtMbEBjqkAer7oYy78%2FlNXhf5upnLnA%2BFGeM1aNkWWFBgqWduCngJ0R7cPDmgT%2FJvtx5aYpHTO3jHT8pjSwcOk5ZOJvFmRQjKKqtpJaneJdnftoCcK4N2yJcEVH3DnC9rV90Gse72LVxcnO1YS3pZyZdLWqFdgj1%2FhhFGUPe5XYByWA1QCJWTlOSe6FmQPnJowccuyFgkmAgQxXhJEyu977RrBJMWHGBZ68wB&X-Amz-Signature=a9a2afbfb650781bb428506a0c38a3c06a80f6c4626f9507894c7d52908f9f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN5MKGB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD0kCEA1anLPwsa%2FFFGs9V7bA41%2FX%2BWuYcvDRgJHVR6SgIhAJ9%2FOebMRCA%2FTXHZsLcT5lc1iaid6Idmg1%2BsS3IQamyVKv8DCFcQABoMNjM3NDIzMTgzODA1IgzZF8oXWA7abGuUo50q3AN%2Fg3BPM5%2BNeQjxwjQ5uj6uMmWeG92EDa7el%2B7KipTpwvNPelOe9gLDMgQsJ4%2FmZrW9wkbnagdOXQnQ7y4ZsCteUv1OIAZ28D1BcXbAy3DLRYfOZhxkQ41UY6biEOsD%2BUuXQv4JInpTS6IqltfwKCti8IYXmRlwYuhTQ8ZtUryPefa3a%2Bt5MnkoG7RKKwx6BsS9Jr3OSyzBo%2BHVoIZKvkxroreehu2skkFCo%2B5n%2FStpSQ8UJlKHRA2lLMKIPlfpUhwi8N0rq9sKmJL2rr0qmxKmKDZZIue8ljNbpS8Suth4uz3uX6abSv2h3XEYWyfXZPdqIWQLbOdDgKGTypLIJKlmcOqj8ISa%2Fkc01bHd7FR3YfV8MCmbGneMKP4sQSqW0i4%2B5w9BjY7gasTKD293eiGP7c6p3O8RT7Z5hvIYNTQr5yALTcF%2B%2FKeChDjhjkuI5y3P8Ob0SMRwpriRjEoKqELWCYKPBPnr9xHoid6ccICh8rFPj4pK39U3Xt4X9lQPEbkhxrSAurZleZMk9JvNTC0bPVxZRz6i%2BSJRSQcYDevArrC8MLo%2FgvwxB9P5kE3E5WLKpOAMf9Htmt%2FNlWdMgDo3FSqmHIRGo%2FNzlVPc6KA5PxOyQ5svpTFw8zBjoDCOtMbEBjqkAer7oYy78%2FlNXhf5upnLnA%2BFGeM1aNkWWFBgqWduCngJ0R7cPDmgT%2FJvtx5aYpHTO3jHT8pjSwcOk5ZOJvFmRQjKKqtpJaneJdnftoCcK4N2yJcEVH3DnC9rV90Gse72LVxcnO1YS3pZyZdLWqFdgj1%2FhhFGUPe5XYByWA1QCJWTlOSe6FmQPnJowccuyFgkmAgQxXhJEyu977RrBJMWHGBZ68wB&X-Amz-Signature=a0cafeef618585b995bb14578e871dc204a1871612c07e8bb4388c3afd62194b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN5MKGB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD0kCEA1anLPwsa%2FFFGs9V7bA41%2FX%2BWuYcvDRgJHVR6SgIhAJ9%2FOebMRCA%2FTXHZsLcT5lc1iaid6Idmg1%2BsS3IQamyVKv8DCFcQABoMNjM3NDIzMTgzODA1IgzZF8oXWA7abGuUo50q3AN%2Fg3BPM5%2BNeQjxwjQ5uj6uMmWeG92EDa7el%2B7KipTpwvNPelOe9gLDMgQsJ4%2FmZrW9wkbnagdOXQnQ7y4ZsCteUv1OIAZ28D1BcXbAy3DLRYfOZhxkQ41UY6biEOsD%2BUuXQv4JInpTS6IqltfwKCti8IYXmRlwYuhTQ8ZtUryPefa3a%2Bt5MnkoG7RKKwx6BsS9Jr3OSyzBo%2BHVoIZKvkxroreehu2skkFCo%2B5n%2FStpSQ8UJlKHRA2lLMKIPlfpUhwi8N0rq9sKmJL2rr0qmxKmKDZZIue8ljNbpS8Suth4uz3uX6abSv2h3XEYWyfXZPdqIWQLbOdDgKGTypLIJKlmcOqj8ISa%2Fkc01bHd7FR3YfV8MCmbGneMKP4sQSqW0i4%2B5w9BjY7gasTKD293eiGP7c6p3O8RT7Z5hvIYNTQr5yALTcF%2B%2FKeChDjhjkuI5y3P8Ob0SMRwpriRjEoKqELWCYKPBPnr9xHoid6ccICh8rFPj4pK39U3Xt4X9lQPEbkhxrSAurZleZMk9JvNTC0bPVxZRz6i%2BSJRSQcYDevArrC8MLo%2FgvwxB9P5kE3E5WLKpOAMf9Htmt%2FNlWdMgDo3FSqmHIRGo%2FNzlVPc6KA5PxOyQ5svpTFw8zBjoDCOtMbEBjqkAer7oYy78%2FlNXhf5upnLnA%2BFGeM1aNkWWFBgqWduCngJ0R7cPDmgT%2FJvtx5aYpHTO3jHT8pjSwcOk5ZOJvFmRQjKKqtpJaneJdnftoCcK4N2yJcEVH3DnC9rV90Gse72LVxcnO1YS3pZyZdLWqFdgj1%2FhhFGUPe5XYByWA1QCJWTlOSe6FmQPnJowccuyFgkmAgQxXhJEyu977RrBJMWHGBZ68wB&X-Amz-Signature=3809467a683bb3b707fa8c567c226466f369306ad796df417ec763459642ad38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN5MKGB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD0kCEA1anLPwsa%2FFFGs9V7bA41%2FX%2BWuYcvDRgJHVR6SgIhAJ9%2FOebMRCA%2FTXHZsLcT5lc1iaid6Idmg1%2BsS3IQamyVKv8DCFcQABoMNjM3NDIzMTgzODA1IgzZF8oXWA7abGuUo50q3AN%2Fg3BPM5%2BNeQjxwjQ5uj6uMmWeG92EDa7el%2B7KipTpwvNPelOe9gLDMgQsJ4%2FmZrW9wkbnagdOXQnQ7y4ZsCteUv1OIAZ28D1BcXbAy3DLRYfOZhxkQ41UY6biEOsD%2BUuXQv4JInpTS6IqltfwKCti8IYXmRlwYuhTQ8ZtUryPefa3a%2Bt5MnkoG7RKKwx6BsS9Jr3OSyzBo%2BHVoIZKvkxroreehu2skkFCo%2B5n%2FStpSQ8UJlKHRA2lLMKIPlfpUhwi8N0rq9sKmJL2rr0qmxKmKDZZIue8ljNbpS8Suth4uz3uX6abSv2h3XEYWyfXZPdqIWQLbOdDgKGTypLIJKlmcOqj8ISa%2Fkc01bHd7FR3YfV8MCmbGneMKP4sQSqW0i4%2B5w9BjY7gasTKD293eiGP7c6p3O8RT7Z5hvIYNTQr5yALTcF%2B%2FKeChDjhjkuI5y3P8Ob0SMRwpriRjEoKqELWCYKPBPnr9xHoid6ccICh8rFPj4pK39U3Xt4X9lQPEbkhxrSAurZleZMk9JvNTC0bPVxZRz6i%2BSJRSQcYDevArrC8MLo%2FgvwxB9P5kE3E5WLKpOAMf9Htmt%2FNlWdMgDo3FSqmHIRGo%2FNzlVPc6KA5PxOyQ5svpTFw8zBjoDCOtMbEBjqkAer7oYy78%2FlNXhf5upnLnA%2BFGeM1aNkWWFBgqWduCngJ0R7cPDmgT%2FJvtx5aYpHTO3jHT8pjSwcOk5ZOJvFmRQjKKqtpJaneJdnftoCcK4N2yJcEVH3DnC9rV90Gse72LVxcnO1YS3pZyZdLWqFdgj1%2FhhFGUPe5XYByWA1QCJWTlOSe6FmQPnJowccuyFgkmAgQxXhJEyu977RrBJMWHGBZ68wB&X-Amz-Signature=d97587f8c75b8c4be65f1f6877804fb5c4db9122d3e81c5ed1bce364d47d804e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN5MKGB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD0kCEA1anLPwsa%2FFFGs9V7bA41%2FX%2BWuYcvDRgJHVR6SgIhAJ9%2FOebMRCA%2FTXHZsLcT5lc1iaid6Idmg1%2BsS3IQamyVKv8DCFcQABoMNjM3NDIzMTgzODA1IgzZF8oXWA7abGuUo50q3AN%2Fg3BPM5%2BNeQjxwjQ5uj6uMmWeG92EDa7el%2B7KipTpwvNPelOe9gLDMgQsJ4%2FmZrW9wkbnagdOXQnQ7y4ZsCteUv1OIAZ28D1BcXbAy3DLRYfOZhxkQ41UY6biEOsD%2BUuXQv4JInpTS6IqltfwKCti8IYXmRlwYuhTQ8ZtUryPefa3a%2Bt5MnkoG7RKKwx6BsS9Jr3OSyzBo%2BHVoIZKvkxroreehu2skkFCo%2B5n%2FStpSQ8UJlKHRA2lLMKIPlfpUhwi8N0rq9sKmJL2rr0qmxKmKDZZIue8ljNbpS8Suth4uz3uX6abSv2h3XEYWyfXZPdqIWQLbOdDgKGTypLIJKlmcOqj8ISa%2Fkc01bHd7FR3YfV8MCmbGneMKP4sQSqW0i4%2B5w9BjY7gasTKD293eiGP7c6p3O8RT7Z5hvIYNTQr5yALTcF%2B%2FKeChDjhjkuI5y3P8Ob0SMRwpriRjEoKqELWCYKPBPnr9xHoid6ccICh8rFPj4pK39U3Xt4X9lQPEbkhxrSAurZleZMk9JvNTC0bPVxZRz6i%2BSJRSQcYDevArrC8MLo%2FgvwxB9P5kE3E5WLKpOAMf9Htmt%2FNlWdMgDo3FSqmHIRGo%2FNzlVPc6KA5PxOyQ5svpTFw8zBjoDCOtMbEBjqkAer7oYy78%2FlNXhf5upnLnA%2BFGeM1aNkWWFBgqWduCngJ0R7cPDmgT%2FJvtx5aYpHTO3jHT8pjSwcOk5ZOJvFmRQjKKqtpJaneJdnftoCcK4N2yJcEVH3DnC9rV90Gse72LVxcnO1YS3pZyZdLWqFdgj1%2FhhFGUPe5XYByWA1QCJWTlOSe6FmQPnJowccuyFgkmAgQxXhJEyu977RrBJMWHGBZ68wB&X-Amz-Signature=e6a2a419d5dbf4f1d145572ceacb048847f0e3f7cefd234982cc934368978f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN5MKGB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD0kCEA1anLPwsa%2FFFGs9V7bA41%2FX%2BWuYcvDRgJHVR6SgIhAJ9%2FOebMRCA%2FTXHZsLcT5lc1iaid6Idmg1%2BsS3IQamyVKv8DCFcQABoMNjM3NDIzMTgzODA1IgzZF8oXWA7abGuUo50q3AN%2Fg3BPM5%2BNeQjxwjQ5uj6uMmWeG92EDa7el%2B7KipTpwvNPelOe9gLDMgQsJ4%2FmZrW9wkbnagdOXQnQ7y4ZsCteUv1OIAZ28D1BcXbAy3DLRYfOZhxkQ41UY6biEOsD%2BUuXQv4JInpTS6IqltfwKCti8IYXmRlwYuhTQ8ZtUryPefa3a%2Bt5MnkoG7RKKwx6BsS9Jr3OSyzBo%2BHVoIZKvkxroreehu2skkFCo%2B5n%2FStpSQ8UJlKHRA2lLMKIPlfpUhwi8N0rq9sKmJL2rr0qmxKmKDZZIue8ljNbpS8Suth4uz3uX6abSv2h3XEYWyfXZPdqIWQLbOdDgKGTypLIJKlmcOqj8ISa%2Fkc01bHd7FR3YfV8MCmbGneMKP4sQSqW0i4%2B5w9BjY7gasTKD293eiGP7c6p3O8RT7Z5hvIYNTQr5yALTcF%2B%2FKeChDjhjkuI5y3P8Ob0SMRwpriRjEoKqELWCYKPBPnr9xHoid6ccICh8rFPj4pK39U3Xt4X9lQPEbkhxrSAurZleZMk9JvNTC0bPVxZRz6i%2BSJRSQcYDevArrC8MLo%2FgvwxB9P5kE3E5WLKpOAMf9Htmt%2FNlWdMgDo3FSqmHIRGo%2FNzlVPc6KA5PxOyQ5svpTFw8zBjoDCOtMbEBjqkAer7oYy78%2FlNXhf5upnLnA%2BFGeM1aNkWWFBgqWduCngJ0R7cPDmgT%2FJvtx5aYpHTO3jHT8pjSwcOk5ZOJvFmRQjKKqtpJaneJdnftoCcK4N2yJcEVH3DnC9rV90Gse72LVxcnO1YS3pZyZdLWqFdgj1%2FhhFGUPe5XYByWA1QCJWTlOSe6FmQPnJowccuyFgkmAgQxXhJEyu977RrBJMWHGBZ68wB&X-Amz-Signature=632196fca2dbaafb087a701a5a0e1e11699b29c0dbb45440ddf41abe5993b668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
