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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=d01e8ebaa8c035be6f47eb4985e8084ce3c590f1f532d2443036f2edd963a20d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=0ab9a45e51eb81cfbfd5940192e2c37ff3c64762b88347a6ed8b3da29acf3c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=9e1ec5db94944486fee178a935a18e077f004088b5170b44599551085ba94a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=d8f6da813dfd914d69ada7c53e2f4f005af554fb9f2c63789a3796a348abeaf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=68e3d44b2e5aff4cb058af3ac4c7d94b88e7710419085034172209cd85a3d517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=bc86f37e68784c4e13fd7da78baa2f262bc13817b5da60914581b52e5e59a167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=cd00d4d9c82e54fe8c6306a97d25397e832030d0541badae5ecab5a2ae149a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=ecf53a905540d9174235318a32c055cf12b3456c90b1f6c9d70ad5e86bfa1953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=703011fbb244535e41e3b229bb11b23b717d3484ec8ca824a8dd4f55d409e8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=a69e909fb3bbe883f640f684f37a3715deb8d0d2df30c37e9aa775f8a88a5a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMMBGYU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC1%2FrRdeOHvDZvZ3Cd4mdyBHhP1FiW7zLHcqv0%2BwGMRngIhAI4zTy6nfDRrkOEyp%2FHKPZAVZluFaAjEzU3m80jERfoMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytiBmePnYa2ANYf7oq3AMi2EeWb8%2FdfXkw9jJXIwpc8G8CSMueR3remEMU1FWoJ5bK5v%2FlHiSr6w%2FFv9oRS%2BY4%2BgHtH0jdcNOLOqE5wVJjMA6jLuX6Tj92FmZuAKKkPPBn4iXbP2zHLNuEgkqV6qZlw2%2BkEiaYL0E9rxfYl493mu0ZifubX42%2FzLm1t%2F5r5acIC06wmg6zsKdry0qY%2FmItqsNvtM6PuLieXdth%2FGIdLSBxZLBMzo9LPhHZvvLZE5qKPyNuTdn7XbdKCoxB8r4EaUhmKIox53iZ7Xlf2e2G0KseHTZ2vDsP6pJeLqsiM679fxQalsRx2nHgpepaNrel3RRyNTriWQNWzcj7U3vgalffH6GSVg66iq38vLG8tJGeJWC7nKK0qQ4D3K04pCgPxe1vQf3kwnX8%2FGQsS52c4aStLHvGod9AL13%2B7TOB65QSZttQmsruY8QBI73WKeeAtra99Wdsdk8Ir4%2BA7ol7OH5PMPIHMzoub9Hk0LS7F11v8%2FjYY4YQhzmdJMfs%2BSvR0IzHPY%2BiBtKynFNmtMbWvz2BWjUaG%2Fadt%2BNYfV6z2L1XZZiXh1trfz8y5UMlP8JUMRYMvJMqb4Y6945HlTIOqWlEU3Un2IADEFseVzVZdurXUb5cTTjDvnHDlTDBktfEBjqkAU%2BdRr95G0baVwCqVQCEMFMy45OGhHtLnfiHE9ohB64fvADJVDTXa1aWRSBLP8sEcjLdodzhf53gqJmcAkZ7kx11liG4Etb%2BbCGaB8rdK9QIT55nGtdy2JHe79VDEohFKE9acEjGPUsfGg3ca3YMeFZKJZmgu%2BirXMrgOR12NajjcyTbtuCQHyvcv6j5s9gFFyCctyZVNAmz90z1f%2Fn8ZhlvOONB&X-Amz-Signature=1ac1832a3987683757a2251912356f9b3374821f09e0e14371bfff3de87adf83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6IRWHBT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFySdv4chP88xzylRGz%2BLcy1DLYALl83RPU504F2Fs7gAiBn2r3fXQzfZ1FwL5GMgWnFZobJUcKDDuIuSjIF8oQKfiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzDgoOeQ9iw0OlpGVKtwDw3BgtUviy004xGkB2idlnv48jwEwgP7nQkL2HUEKYYY797kSCH0koJ6WefMgWORbF5CPbppw75knuTDtZJWN%2F%2FPQI2i6Om%2FOPL9KjCmakp2gauCBmAqai6wvfm5XGLljkNmRR%2B23yjWg2R9rEo3Nivy3%2FBc1tV4JUtJq1ZuhBe5AxIQmOOGqQskzxN6ROIA%2Bl6tzmCabMm5JsXxs9ngAjd5%2FWH2yzYMVbj%2BOoaNXJ9tktfncUgKYcRiZ8DSPGp7kuSUe3nDXa4JS9Rxnm3oHWAv8jF%2FZ5%2BGuAxiHWiW01GPmfLdAFp0X6xe2gjS9gOgKQc2zecjzqOhi%2FmvneNBdrU3%2BDFk5DoHSEmwQ9ebmmxMtlwGgP0EBABvON4uF3Yu%2F80Brr22eFMDteIPsM10gGh%2FHCLSi%2B7Dyie9Orj6%2B3y0ysznDVtPGRWuiieHYkBqlvpJOJUATWMpZ0g0NX3h42X0im5T4Pxnr3h8GkX73s4cMFDIc0agvKTlB%2FXhrQN0O2ibD24E6Eij%2FYGI4HwC043hkR6BNQqPTLJg2k6y7DSlBPEYNegb8mCu%2BgBYPZQ5k6B7cmWa1zFJFSoIHkR6vbbr1z47StKoz4uw8OEg7%2FTc%2B3Rn7sytrZnaJJVQw05LXxAY6pgE%2FsrueZXleFY%2FhbL6ZoullRdibXF%2B5jK3QPJM%2F7qJj0ZgrqmtWfOwQIuB5HNRxOkFdJtUO2QzDTTjyQFBUFK2oNvh0v8mZ6qtmoKZZg8TeGxmTR0kyzY8VVOQafM2Drx8NwBm9tWLwSwAUDDjp6okH63X7o43gLfOorWLzm7Xp%2FCIpd8dH0QGf069zfxo9c5Nqlcf8Ta%2BYhCUHkWfR44ffPX6KpaRY&X-Amz-Signature=02eaed8a1460fa990002e37adcf350b2129d5cb22a83493a067775299ed55de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHY2KWF4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAPraWbQTvi1e9Ju7AqHhWvkJJYAzBXWoJt8%2F%2BWO4OqXAiEA2dnY8fg1FOX0AwfMQ3T18yhscMcMYnwPZAUHLlAcxUIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEccMz5Gmr58d%2Fu%2FDircA4wFZk2WxFOxB3sRMx32%2FQAoAZvTmyA08e3wTias2R2WLlAAQdnVoprzDy5Bgp4j9fUUD7Zrl5mTkEnbMvQI%2BM%2FyAfzvuztjo43Hd0feZmqBkEznEg82abv1qSxlmo7Jo7YRY5jlRCbgpgZrzk9IYO2hCpYI4rlEIDnrCuSURNHrrHvRuwTUdRJzPAiHA1FMmlaY0eO1gGEgRJvivZyBU%2BaTTpFV5jBBTKnaOEUVMcp52LWXFhfk88QPcxKjlLpTT4ux8XOezut0AYvdz5bL1bErn6Z%2B4pF8tpCh90fZZ8vx0%2F7isvitnzGB3lwq1xfibsjMov%2Bfvb%2Fie3gL6PnObLh6dQ2zuz%2FNqcSaZxe3NEfKy%2B8fEsPdFw4C4HLlALQcIafr5%2B9LICWvZvEPl2nUzS2FrLPAKbHIQmIuK3RwsA67g6n8oDa8c0o4DnEkhMYMXajOMJ3qgoGZ%2F4SWdrL2GUNSpw6%2B8V%2F7n8csTJ0zSpJG7K0rMd8cGNKuK9t3QtmTuqFsuoMPZhfbDG3CCtvIx9JUmLjioixhH5p4QC5cGEngNzjjdZbIxiGJf%2BBtoj6LPHvDUMfG8SASfPybMTR550x%2FXc3nWtM31h7Pr%2F5Dq8uF%2FP6x0o%2BHKGXC%2FFODMN2S18QGOqUBtqtudIS7v3Cm2157XHvL%2FsLTUwMgFLAPbAUVyuy7lTRIEsm1ej7oV0BS91zfSVB6MckFVQEV2xbmj8qYc2rRHinGxqyEpBAM52gVydCPayyj4zmO8BYf11C2t3NY0U%2Fv3oa8NgjtQqM4zLi4CmLmXxqa4eV0quJKD0UbYV1BD4XZIiLJjISBqFxCmKr0VujNukSdLn5jPCdyXMGai6A7qllc5ahq&X-Amz-Signature=515c953533887eb9f851ca81e11914a4649a40b675e6b5ed6af2026840eada8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=693f94c85d4b227874a456e559a4aa98ad6a8d46602ab17cae366a4257c03e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCGA6P6R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHZtyalPU%2BN1EQGJpvarhQh%2FHyacYLIm9W%2BPdDvsiQgoAiBhW6uY3H3BMwwNy0MMpNe%2BbK3Q5Ay9Sw8Sw4XYFF5TzCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9yijbi1v1vWKQVJWKtwDPUwXBb4y6oA8%2Fw5ri7Ay1I8DiUkx%2F%2FkdrMQ8wa041OqsIbvf4wuW4y6xZ4XkSwYrAw12iTRA6buQpWsXUP1qghnyDeyHsCkey9%2FRY%2Bk%2F5%2FKxJYFafb93XACxQOSxq%2FTX3vhzLdaUmGA4jLf%2BQeBMDRf%2FMnPMKEB5oEDSfrxOV0MH5uzEerUzttphW2GgIGBhr51gTg4FpWkfiXt8BjatVnnBgx4AhRX629cMdVncZym0R%2BPby9fBc%2BKwm218fXIlwMuOFlxM7khvKGzRQQSpurOYUXL77g%2Bx2zhZrjBhRs8C4A0n%2FO7fPdJB55kl1uph3Y4vi%2FByrOb4CQ6ElbanvNv%2BW2RNMSwwkAezx8w129Oc%2F%2FcZW4Ul30ym4Qnq23lSGYmOygAJOC4V19uStNINwHSNCghqNeapnL0sIqLNE4E2ilDz8OQAj19xH7SoX7V4LmQP8WUlep%2Fe73ZGEuLGn6P%2FgWFaIhQG5rDgvk6JCTV%2FuEfSehPYalBv8Ck%2Fk0gYoJBokR1N2Y0v0XTN1HUrLOTfCZ4KWJ1Gyph%2B6%2BNgDKYuHl5RxXCYKJQyVCTdPtE3t1JMIeCtwJ45lm6w8QVKYBzbYgj0qNX4f4ZOSTDPby4gXT5lRUXiAyD9MOAwmJPXxAY6pgF44IFg9ylUMWvI75Kd6ts0D2X4tNrh9tNfkinZsDeZnvnvQ2Pcsz2oc%2FOH2h6hp3x1Hkfrwjbt%2B4aPhux%2BpTFd%2F0oIWLY3e0TyALAAumGI6gVtRy1CYrHMYjopWsBN%2BoRpVMgcN9VaK1fzT4MEMfUS%2B4PXl7C%2Bq4DyQAOGFXS2FoydCISWjXtfHSw3DtT8ipO1uchrP0xGyiLpF6%2Fznjb8IVJ9RNQF&X-Amz-Signature=378bfc00f0412231e2becc1536333f49acc7d96d0b40ea1fcd2e514923984eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=e137804c1682f170a7c88cb0083ab56486584318b8cd4e14ad1950c71162de6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZE7W4ZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBJkQYXzNQYqgBQIq2ZjAk1cyeFOzKnCNK586Q%2Bvynb1AiBhhHUcjPIVhl9OV058otL%2FSvlUmSVhGA63OjidbG842iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbGb0sn8JR3iCbAiKtwD2bvcmONYsbuoVzYM%2Fb7rfwjTNlfR3K6Qq3f5fOnYo%2FvdwGi1kjsRl73O9DJ%2F5Y4HDVjn%2FPfRmO6FY55kvVGqpX9CikSoiOBxuvrS43Ll1EjGtLAtVj7n99hxXrIRdEj%2BDoZQefkNBFHh92IwAycGSaUgJfbWf8nRfO4o5cUfvHAUiTLgMf5uZOWz3GWSsRkx6qgKXmAswCqw61JggLCouQc1QYkG5ETOIa4WBf9kBWUZ3IQJrM%2FbX5P6EGdWhsG%2FfDMkrY7VbQoC6HgcxDG5g5MDYDw%2BilD%2FgCoRYNPeHO686iQGHKW%2FuA3LRy9u3%2BWgakq9BQJ1%2BesgAbn0MFT494ahWU2hFizqPRE4Mgf5DN7%2ByfkJGgb%2BpsXDVM70hJJe7PVpV%2FjShpx1U%2BLoAs44q0KMkWi2ZEJwgn7G6Q%2FaRyg4QC8vMU4ml8BvAj8YWYOw1LPprbL3W2AJn6buE%2FgSA1bzqVIR%2BWsmLgD3%2F2EVMgUKZLdu6jrI1aHgGyJXBEvYm4pcfX0TNuARzqnz7VMwKGc8xykpUQ4F0ojFV%2FgnBzfw0kbgsRk4ecT5Dn%2BVyp%2F9uYmBph1j7%2FwhBYAtJfzfL7EKbj9lkJBf0%2FzT8XGvUmSrQh2u59CgZIRveQcwj5PXxAY6pgEutm2Cc8NxE%2B0x76XterOtqEjiDVJ3jEC3f%2FJQ2CmAYD360Vd4iVgIgqahpAHgHRMWs3sRS5jvMeRyml7GehIR9wzyyJDZwz386Y5oHuTh7tDYwixdnYlW%2BsGvDbDMULVECoM3v1licHnXK9aF7rdmofQI6WBqOaXP60LWmzHtfDX0JZi0DdgZ9SIGtBpHS1BD6hTDEcdsnao44bW2MS9%2FaZsi%2FWux&X-Amz-Signature=3557945b08de6c246bdc8465dd10ad3f8bef9a00a2b015fbaef6ccda78368006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=0d4d4371ddc4078787f0552cbc8280e5ea4201a5710333f4c8dffffc97a4716c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652JDATM6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCCsMSlFFVp4UV%2BGuWQ%2FCnMVO0y2riuliqXsaGpRrVODgIhAKy6geDt5ts9wwA5%2Bg7YKCUe4ESmwqeXr6YhxxoM9ScdKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw3rodSlH7WdNcYeEq3ANdfEzfP%2FQ1swVj91r3lWTUGENQJKiTSMgmbKCABQJbp2O3MUKWmS4kyL4%2FSzIuYe2z%2F%2FeHAmAKlOPOhHxgpKdtQIcR8MQvmYHvrZRzfRIQ1JYwA%2BwyQ2vtGqdjN9tM6rBw7%2FHvy%2B9iRXc4vevVaZtGJZ4Ilb4HH%2BYRQGXp9DtCRZhBQOOpm8%2BoukiiCqhlDyc%2BVHS8GD3c5qg8GoCbjyJ5KF9qO0yIrLGv6%2BIWLvAP8S9xwFV4rS%2BnDkTAXXXGWQUkinX%2BJh7MlyP9Dup5KmuTsUxJfMljJokYmQ%2FTzyY8rkg39XxMYfn50xtmc%2BoW4UZOspHQtIPBvXNS%2FGZiCYDBWD%2FxrsR9te5QFQ8EmPp8EaMVAe5UscnRLtLA9TJohu9yyNFRwfBa%2FcNkYp9APxvgXieNjG%2FcjiZMuMkn97ZgOUmhjapjRCBPgCz9racW2vTfJXXuA18JucDE1R2UWe%2F6w9aRTVodps%2BPNluUKQvIkaRrZodARNO%2B6Y475rGEdXEwtyWaNsWALX2lS%2FBr7%2FloSpUsTOUBPMZzhkBvheDBSsuN1yt9qVUjlKu7NS3OO%2FOkYJ6OMSUCsC9lwf4OZ26dFnCOurhb%2BEpZRaVm%2FG7CLM2I9wufz%2B1BDw9tjTD3k9fEBjqkAQntyB%2BmFVLJe1dJ0BJIm8i%2FRMp20kc%2FG9jUJW4S7J8anxob6udO95k0brOScLLpFV0GyGCX%2BlZnrXeMwdVVOVuX4q6Hz%2B1KeJdJiUpTlGz7TlTHt2XxTrSU0yb5S8hSM99Pg4%2BXDSUl0VQbGqMoubZM2LG9y93XQLm5hfr%2BTkEB59eGp9ybpBHB6AF2dGKvq6pep9ncznBhEYib43AOa9YGm6d6&X-Amz-Signature=7546a46218d4f583309d8e29a1397c09e3634d432feb06790dd2adc330c2997f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=4d5be007672f264730d392fe4b476c12e8b20c592931539faf0c7ef1963f6776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7JD5HM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQClyaoDmBHTDycLCv29GeQLv1RB9xaZhtb1OA7JiGd2%2FQIhAN19WvT1zr%2Fl9F5DNtwt%2F4Zp6VJTdyx%2FM%2F%2BbtqKiDH9dKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfMQV3tMCH7ZYvYcAq3AM1WVId0JRnNZyP2Qda0zwEdFXn0iYwQEN2At6yI1EaKHtDWjVyICE4hGY4ifbKz6vaZE7GgfO6BFHTOGTXkvXdTjBtXq92Oz%2BxH1zzS9ONTijmpaMU%2FS1gijpSZSPt7GHIhVU1bnef188XaunrLTVOpOtXiWbUZ8SD7AiNpLko03PDxso%2Fv78hs7kle4rCAyHtsDvZ3GLTA%2BRnok0up4lwLgeq7P5wkCYJTx10r35JUEUJsET9L4%2F%2FlzS2cBDeVnokwwnLT%2BBuW37nmaZIkImm%2Bhk1Tv8OnmXS9OqDvMj962kieGmC8EObWBLDiut5sed0PdsWpxLN4%2Fmru%2BwAu5W670PO7JcqvRQG1F6OiOUtGEbT3%2FE9%2BM6%2BlTtdHtLci0qY3Vs0BLIz3qjEA%2F%2F7DHIgsxt4uKizO%2BAtwUeSKoyauGElxHkNmKUlnph18KewN1xgFjopoK0vz8bkqO3UeVtUGWuALD%2FDSy8wHr8%2BLbiafz1RNOQklY%2F8erP%2BKCEhqD4zmuouXJNmQDWgQsj1PA4ZY9O3Fu%2Ffz3MdWlXyJn5pAkGA5WyOMtGlQDFWeY5Nc6x1V1jX4n%2BuMBYxIw1ENsk1Gb%2BczYMQVK6XVayLmc5dzrDez1HQUViFxI6ipTDwktfEBjqkAZA8wB1zKFzIY5iISI6NuNvYKbQCYcStKy%2F69phhSuVWCPmDegSDRSYSV8seqibH%2BFAlMHNjkwc5AmqOj%2B9s98xMQu%2BFX%2BxezFXDOjEyxT306PeBL5XmU%2BUJaPAqOsf1FFt7fcEu6IWeHXGzYFnj7JSjtIfp2kP6aOe3cDysNj0t6f5Pv2CQETI%2FX8GWS8TN%2BoHKJGfhFU6eZJd%2Fh%2Bg4l8lIDpKK&X-Amz-Signature=e1c2e5a35bf5ba9f673903f649ebaf34fff1b1167c057a43bd3e2a14f540e870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJNYQJ5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC30DAtHSjZmQrWMK7Srx98c6hC6VPMIgkTYJIewr044wIhAKD4DCHCOCGj52o1dm6qyumHLxBc853CuYnJ3xn1Q88FKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHja1uZ1InswwdP%2Boq3AO7%2FN295Qvb1OCEI1fZTAgD%2BsambAPGCqwjfHKD9Kxd1AG7%2Fo5pLgmttkGg%2FIgQ6JV6GQCLNoh8gFqp8caTJ1WSBMJS1ElrC9kpUPOHS334703jVZIgmmKGec16%2BR9mb%2FpSOC9OgWqvYVOOXPt%2FiP0EiVZaRcBombnukjVLIlgtGMVkjQHLM0sp8WxPdutcoVdQoeJSbPTBsM3866SisnbYUrdBweTKEGguxf8uTmrjcSiYICsWenQZHEGnCjIiBIsydEsdG00p8K%2ByKKB5lic2j9dhiNw9oX1eIzZAZQR2aXBYTNsWfMu968rtooCps7khbJ%2FQyGvp5lxwHBNUTDBNdNrJFW34TK42eMfDkmk7OxpTmdKyShDlClITsR6CBcoevXga7mJmrXdNsF62fjcX9w6WtUdfjGcWvwP8jNEgvIRIfFgNF3pncWowgfgFLoTxPGldyKxtcv%2BNwB44jiiep8b3QD3m9QuyYeP0VoX2KPfy9TvN%2B2zHM%2BDZgNGNtAQIMu1LL7wNp6LKSIC5IOoedcG5RGaTzW2%2BEBU3AV%2FrXNO1huR8S0vJt4BYYkpjwZeRXa0Mm15QOTFPCIrMkeRhKwT5gH6MPcCabVPcz928Gdgcl9cGuBKawuRWcDDcktfEBjqkATQH33O74zQ%2Fg4R0E3m%2FHNJdyvfZemBdmGDwywx63XOLZ6bw93qSMNTi%2FcAOA3H1WSTqqpdip1sHHeyQHo6vA9FlbCtNQlg5EPoV3Kjr%2BIzCr04pWGHXQeUDjNpA0a9%2F9wx46skeFP472C9qMKj4GVWn0P9YlshhnmPKxgIdstnv%2FfZuiXQPjGVNUiS0xxxdw4uN4J9eN34ko9RAqKJbB%2B%2FVonS%2B&X-Amz-Signature=0d7cccdeaec28e8d2316616292e514ae0a3adb837a0b637c86899e45396352c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLJFFUR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCT5Ap2w8h6jzHbf2Qgugn0Rc50AhPPRajVyTAZFkMTxQIgZJNU5GpZpTn8ggUGjzRF%2FMpT7sADVp1PrK5AexqM0y8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdoL52xgrU8q92vXircA4LM2H%2Bq5cabA27bUOsp4VyyOcBow2fpsVusOMgt992sdjztba5vVL4zwTj6NpjaA%2BucqS4rHrBn6BQMQ8QRIx73dSjmWdA5X%2FBdmpwrBa0xhT3qv1CAPQC%2BPx4D7e2IoczzjI%2FI4M0MSKWTjfshfCPrAZHTpRZnm8ORYzrBvRGkawCBrrxQX8qfVbcoqjur3r9S70ZuFULJqdlmL%2BW%2FasiRYmyHmBU1FTLGQnEJdKuM%2ByLgxZifIaCVE%2BWgw%2F4JKxjXprx1yeXuSIAvfaMzowelvYwDpzKoUYTwksjy4vOa62BHJkUeVhg5B1ov3gF8D2FIj5Apo3eWfTTKcWv9e0PQVNRaSN%2B7pR0ryMfklWbDJ2By2oWalGUtlqfUqO%2Frh1Y6eembyHliApbQEL0iSuqBC0P3ML1dLK3eLBh8%2BgLbccKZPMrEjZzpWe7AuqY%2FXcwBHybGd2Gl0M8tgqSc1W4njaNgg0RID1ZA8cuJjx8aIxTlhkZnXEQwMRw6lK8inm3sIO18U4nL%2FMk0TrvgSfPCiG2gpVyAdOd6o5cGFiDAh%2Bh7Mxp2dGZcwrLhd0jtXZwfwrOY21gbStvJ4RmwhMfQjr4FDkPEpHI2kUkp1cXG1VdOQiEr%2FktDwjfvMIWT18QGOqUBL66g1UZUjPyBWYLmterS6DDGm3wKFTuO33GnyRoet61cewnpfxCoHPUHuu4h5F9i8TQO%2BS653hO3cOxcfxklcurCCBQAmm7lWm1Y0gGgO6dn8%2BHi%2BlzOthujtcA5udDqy4DMz3aMPRiCaeLe0JF8ZUqo0XatjZia%2BYayOwukeJMI5cvKmtMnzF8BzZXVgj2IMz1QEMf0GKkHRXLxjw%2BcYQFlMpyh&X-Amz-Signature=7f14b26ac03bdcf4c366f99fd108cc03b4a9db148ac5997acdb085386069ddea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TJCTNJE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDpj8TuYkyw2Hw59JHUIBVc%2FsBp4hFa9GTD1jSK%2FpocegIgMT2w%2BOJMEvr9AqvGDWHCRAvX2hbE8a0s0XVdGiLO3XoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw62a%2FWhmsitTYSgSrcAwTmWZqSYQLulsaZ9ig70eb30%2BNTt8i1XaPhx1ZyJOteIPahyDA07wfNtwh9B69rcj0%2F1FZb%2B%2Btw3uMGyaOpSGjp48VbRHGlyIxR7%2B12T8z%2FdGIMr%2BZdNxDX19L7BGw0pluaI8Z166i8woiea7xzrHIJZaueI1YivapGdX2Yxx2wl6LUwBvNS%2FPJMfHzzKdIdm0%2Bh04f5FswyrCqcccQ6Uv5iMOBdJU0uc%2BE1RqEFOgl3o%2Bm8WNUTlc4cbMFphqCexJcbEGtow1ZwC9Ngqzg%2FqqAYK2M0LUuzmUK6XRzpIk9WegPDYBAE6ZhNyOyhel429yp6tL4hDg5AJNkg2RF%2BLn6oBamfi3DNBeDDT2d9CqthQIrbIEXl7m9bfjV3vX3fsSD%2BEWzemUVx1IeGtkgoPgzid3rE0C9u%2BxI9N%2F5dP0X7GjWpsszagECn4FcYGJNr0UWKefhU%2B8%2FBobZNZMHit7ERcMIC8UP4ZlvfE6Sok9wRep1teXqzRjtV6f641tJEJOFFUuM07BQIK2UMJbvpKh6%2FYJgz6yfwbYF%2FBWttCJFiwnNOP%2F%2BSKqMPsoOfRS8dOu18M94jORASqem9h6z005QYg%2FKNlQm6zmo0xPWt08D8KRYzKcj7XWWM6ZGMPGS18QGOqUBQEcmiy9lq6jFdZrLwZdL6R8bdX6FfadG8m2zim9dVh60JrIMIVKCGybYCslx0vClgi25v4R3mqrfnNDNQ9SQ2wQi3EY4j3l5ym8pUF5bK9lk2IIkBhhlcXffK0n5t6OzEZIx%2F6k3dkRzahmDe0OJ5z7li%2Fkz8kdKEky%2Bi0Kwn0EK7G4mEsRrX0TwRnEEK6QCGP8l4oFmOAsQdeeSwUP%2F7cshhPLg&X-Amz-Signature=353ebece50107c75393d6daab0262215f4438309e6524cf184dc76113319be66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RRMDYB3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDcX37m68Ml8bNLP6Em%2FMRENt9gWS3s3DruO9G26NZrRAiBwiSpruzmG62AaPB1JvN1zLCFIJaMFKVP2hFrWxsZAqyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBNVfs7TVbC10InvEKtwDL7ZbQIzCMCdX%2FX9ddafX6qwoPxkPgwGj6CHBCJuCVYg5i9JD1J%2BpjeRD582i78eGyG%2FgVQWyGEIHBHHO6JsAG8Ty7ExuI9Jml7BU4mUjVqDCFZwgeie%2F1ccPAFEfYxNIKIZNtpPeRd9WNtmc62ZygeWVM8oz1sdiOLWXwN%2B%2FIJ%2FisMbKIgjkfSx7LKM%2BY%2BHTUcBN2dRCdaKEtc3ni5tnIKLgeNXTuvMEhFSSg7IhNS9xw3NL2ipyD1JEMGmzy%2BEid7fipzaQhmmvMMFxrREVzlVOsOUvoZlqBXZPjeVt3KXQK7KZgaSHlM1ublowwFPPYkTNABdPKTHoFz%2BiSCCoVPCyw42jaX4fDteoCxCNPtf%2FI9kJHLmSgdgHt3UUnRR7levNkKJkmMJEp%2B1pzqFOKIl7hAGr0MeRNoGcKV6tlT0EpBPNbAEfzhqu4Ye%2BpAc%2FZlecefSvJOHXyVDB808TDVLQMqrOEgxRi0wcErpmK43qc6ZIKOuqfBiPxURYXKdp0DO%2FgyYM0WpH%2FgRrW8nnW5SyXs6XXatIL5CNm1gpF%2F6nGPJErdBuHtuqpKqrMjCK%2Bk1oEqzD%2FzYQtAaM8idPiVIR9q5tj0B655wnZUlUrYCIEIUEOy6hmoUi8IYwzZLXxAY6pgGszQRamZU7Rwrsg5RfJ79isfh3o3kwilZKAnIYBJ6H%2F5bk3GMtFBlsmRXrzoIFq2%2BohNUD4u11UYCLuBEdKEIidgeYvQofMo5vwfx1ZY7MVh3YS%2BV5zwtEu0eFQ4U6FIRWFIZ%2F9idcT4APA0Hc4q%2FYWj1Ge%2BXxdRFPbUOoZKY58SWJr1k3pw70o34PoAB2GXN6IKN2Hnx11QwMzW6bDQdS2o%2F75WyR&X-Amz-Signature=90e2ad993ae0016ef83d2d1f1a2f0b291e831eba8b3296084f9945efcafec9df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=7a9ea2a66f67b07f60408947ef09da824da29e65445d3904a2382874be1972c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466344WQTHG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCGPwBGBIT7uKdu3JML2Xhm%2BssnI2yo8Ue0xPqu1hBZkAIgPm%2B1eIcg4WijtzVL%2B30BhVcGl%2FdAuLEU3%2F0Emqv%2F5wQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75aLA6e1bQDkcrOCrcA%2FVDmXJQIs2EVMJhclA%2F%2BmJswjYnWN7zlQ7FjJxgbFCsy%2BLrYDjLk1y9A3oWkblSINPTVpsUUo2X1OcYMIzRpAsjBhayyIpUHdVfP6fsXpf0QVO6UEx9QoLbHQtRIhHdT6aaO4%2FARgwItgU1K%2Fd3%2Fu3SZQnhmohZEVvTfZC1ZB%2BocoOimfhK53phmhi1Ps4VMzhu%2F8YOB%2FxxkucziNyVv9c7ooZl0lEcbRKCs6aL%2ByqXr5kl2smUcpVnFpuqDL8u6HKIt%2B0FwIGgZp%2FPqHMllhsekaOJGUYKodzMsSVU3%2Ff%2BKFIKnyP7XVzDESbrRMEDsruYvfX8tKqzw3j6M1UdjFuYoXtkTxEBw4Ju76YxiSNZ7Ssu4yuSVrMvlMsdmGSaUAmfztwJLbSjlfm1sQB1mhd5AfuT8TlWn67cPDqDozl22%2FM%2FaqGeiqerCaQ7C%2BMNxiFipx%2Bqga9lroDrO13E8I%2BEtH6lSG6%2FiuATtWjpuaTEgcMnagoq3GP75hgFVEda0B8ozJCWUc7L6NhxhS8bjweQvn46bQ12mXiYxlI1Z8b7aK8O5RBgfDk7SCVwRxbOLsDQ5Q%2Bal7asznlFHGv1W0p%2F8dHuxXNdEyU6o7Yyfr5vIyAK1%2FYS5CyM9y%2FLMO%2BS18QGOqUBNj95kuvfC7gJotyDhq0C90WD3hGYYNbR2%2BudFgtzQ38Cm8IcDBv2SE8lpi1G2%2BQt0F%2Bi3tsKUsa0tkKMjdrw5OXPwVvT%2BhxsO%2B5jsL9nMG3313RXI0hpiiizXBv4XgIWpTqQ4mOyEBJ0LwmDYLFUXSBkEulzIAjn7eZnrd4B8XMjXL5r1u3%2FEZcCZeIerBg%2B9Uqcl1KS2XD1cvBnH2Y7%2BgHoLgU5&X-Amz-Signature=40aa7ea0ad0265a53aecd2ae9bc9d7488679fac4f8e5dd8e7f25837a77c2ac54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZUACFR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBOcyeplWUO0Foi%2F8d9X%2BnJ4p6VC9lR3jgvK5%2FOSHwMaAiBi6solgZdltcL9uNo3TFBLYXv2FNHI0jpx92FRLh5t2yqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcdo2f%2BDH0NZxevKKtwD7yyvzTPHeJ8MWzblh1xM34%2BLS%2BEc1seHdxfqw5gbcgxmMVYVgkZTz0or4B3sQIM2n9o0rbwOJYjDDFalmPb11ItLZQFxVKwdCypsl9AEKuv72iWssmgBAPAA7RMxpERNmQRtL14kvyi5w7Sg1G7qA%2Btf4SsY0T3RT73voLXcP9NPPEfSzeGc4Ep%2Fu%2BLpfxAbQpLnCbIcpD9NAPRCsrCAN652r0WsBcFa3eGtGuQqEwqeYr2GDUgJXvH7rbYcli9vpcANQ8OCC3OOHiJYR19KnUl%2Fen8rn6nLZ1g%2FYk%2BM22qoosy7GqAQeM7w6lUiZLdUMIiPpPuZSLjQqlP1b0%2BbwlAYbqT3a6HbG%2FTKM2ZKJ56s8zq5dNb%2Blq5gQWabMN3z5l1Q5VoNpFAnFkAsKBzas%2BHpNPgoyEowIpNGZJpMVUlQ7dFR%2BKjcgvw6ENxH2rpQEGBNSUXVPdCa%2FfZ9Jh7ewWrOLlUTcrsN7GgXhOQs%2FtoRMUNQsdIXz8aLbaxYHretqzfriE75OtYSg%2Bc2XdxsSuUWZaElzvAwtJIcgFzVB%2BaTaqNhu7VVQZtMRPR4mN82hnnajSXGAjnaIAfmLj5Bs3D%2FsEQTlx%2BebYPwVxupGRew8dhPks284tYNGXMwn5PXxAY6pgFQgsAT0RWPR7HiIraBGMxuD7uLamTdTGog8AFODhUffpdaCkadYUAfhO5K9Rz0KGJED%2BLjhK64vBVPZ59BeCqWnquLlvKYFWqvky1uRUGdMY23SzKg6xFUjfqT4aLlD0nRKjA9Nj6QBXSOke0DRU5r0ykaU0GkVZviBTBU6QBs2KXC2T5bAGr2M4S6wRm4UepUr9EopX66Oy%2Bc%2F7r2aPUWXDxj6ed1&X-Amz-Signature=6efea6647f12780765a6be03ce11a8f4d6178b2986b08315fe123defc04706a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZUACFR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBOcyeplWUO0Foi%2F8d9X%2BnJ4p6VC9lR3jgvK5%2FOSHwMaAiBi6solgZdltcL9uNo3TFBLYXv2FNHI0jpx92FRLh5t2yqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcdo2f%2BDH0NZxevKKtwD7yyvzTPHeJ8MWzblh1xM34%2BLS%2BEc1seHdxfqw5gbcgxmMVYVgkZTz0or4B3sQIM2n9o0rbwOJYjDDFalmPb11ItLZQFxVKwdCypsl9AEKuv72iWssmgBAPAA7RMxpERNmQRtL14kvyi5w7Sg1G7qA%2Btf4SsY0T3RT73voLXcP9NPPEfSzeGc4Ep%2Fu%2BLpfxAbQpLnCbIcpD9NAPRCsrCAN652r0WsBcFa3eGtGuQqEwqeYr2GDUgJXvH7rbYcli9vpcANQ8OCC3OOHiJYR19KnUl%2Fen8rn6nLZ1g%2FYk%2BM22qoosy7GqAQeM7w6lUiZLdUMIiPpPuZSLjQqlP1b0%2BbwlAYbqT3a6HbG%2FTKM2ZKJ56s8zq5dNb%2Blq5gQWabMN3z5l1Q5VoNpFAnFkAsKBzas%2BHpNPgoyEowIpNGZJpMVUlQ7dFR%2BKjcgvw6ENxH2rpQEGBNSUXVPdCa%2FfZ9Jh7ewWrOLlUTcrsN7GgXhOQs%2FtoRMUNQsdIXz8aLbaxYHretqzfriE75OtYSg%2Bc2XdxsSuUWZaElzvAwtJIcgFzVB%2BaTaqNhu7VVQZtMRPR4mN82hnnajSXGAjnaIAfmLj5Bs3D%2FsEQTlx%2BebYPwVxupGRew8dhPks284tYNGXMwn5PXxAY6pgFQgsAT0RWPR7HiIraBGMxuD7uLamTdTGog8AFODhUffpdaCkadYUAfhO5K9Rz0KGJED%2BLjhK64vBVPZ59BeCqWnquLlvKYFWqvky1uRUGdMY23SzKg6xFUjfqT4aLlD0nRKjA9Nj6QBXSOke0DRU5r0ykaU0GkVZviBTBU6QBs2KXC2T5bAGr2M4S6wRm4UepUr9EopX66Oy%2Bc%2F7r2aPUWXDxj6ed1&X-Amz-Signature=fe3c5ea7c877b89e073a4836e6812b022d16dcc3d8cd9447f299cec832966718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZUACFR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBOcyeplWUO0Foi%2F8d9X%2BnJ4p6VC9lR3jgvK5%2FOSHwMaAiBi6solgZdltcL9uNo3TFBLYXv2FNHI0jpx92FRLh5t2yqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcdo2f%2BDH0NZxevKKtwD7yyvzTPHeJ8MWzblh1xM34%2BLS%2BEc1seHdxfqw5gbcgxmMVYVgkZTz0or4B3sQIM2n9o0rbwOJYjDDFalmPb11ItLZQFxVKwdCypsl9AEKuv72iWssmgBAPAA7RMxpERNmQRtL14kvyi5w7Sg1G7qA%2Btf4SsY0T3RT73voLXcP9NPPEfSzeGc4Ep%2Fu%2BLpfxAbQpLnCbIcpD9NAPRCsrCAN652r0WsBcFa3eGtGuQqEwqeYr2GDUgJXvH7rbYcli9vpcANQ8OCC3OOHiJYR19KnUl%2Fen8rn6nLZ1g%2FYk%2BM22qoosy7GqAQeM7w6lUiZLdUMIiPpPuZSLjQqlP1b0%2BbwlAYbqT3a6HbG%2FTKM2ZKJ56s8zq5dNb%2Blq5gQWabMN3z5l1Q5VoNpFAnFkAsKBzas%2BHpNPgoyEowIpNGZJpMVUlQ7dFR%2BKjcgvw6ENxH2rpQEGBNSUXVPdCa%2FfZ9Jh7ewWrOLlUTcrsN7GgXhOQs%2FtoRMUNQsdIXz8aLbaxYHretqzfriE75OtYSg%2Bc2XdxsSuUWZaElzvAwtJIcgFzVB%2BaTaqNhu7VVQZtMRPR4mN82hnnajSXGAjnaIAfmLj5Bs3D%2FsEQTlx%2BebYPwVxupGRew8dhPks284tYNGXMwn5PXxAY6pgFQgsAT0RWPR7HiIraBGMxuD7uLamTdTGog8AFODhUffpdaCkadYUAfhO5K9Rz0KGJED%2BLjhK64vBVPZ59BeCqWnquLlvKYFWqvky1uRUGdMY23SzKg6xFUjfqT4aLlD0nRKjA9Nj6QBXSOke0DRU5r0ykaU0GkVZviBTBU6QBs2KXC2T5bAGr2M4S6wRm4UepUr9EopX66Oy%2Bc%2F7r2aPUWXDxj6ed1&X-Amz-Signature=b94d09cfe14cc2b622adb742461ced4d14023d9701de9096dd30162d1f9c70f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZUACFR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBOcyeplWUO0Foi%2F8d9X%2BnJ4p6VC9lR3jgvK5%2FOSHwMaAiBi6solgZdltcL9uNo3TFBLYXv2FNHI0jpx92FRLh5t2yqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcdo2f%2BDH0NZxevKKtwD7yyvzTPHeJ8MWzblh1xM34%2BLS%2BEc1seHdxfqw5gbcgxmMVYVgkZTz0or4B3sQIM2n9o0rbwOJYjDDFalmPb11ItLZQFxVKwdCypsl9AEKuv72iWssmgBAPAA7RMxpERNmQRtL14kvyi5w7Sg1G7qA%2Btf4SsY0T3RT73voLXcP9NPPEfSzeGc4Ep%2Fu%2BLpfxAbQpLnCbIcpD9NAPRCsrCAN652r0WsBcFa3eGtGuQqEwqeYr2GDUgJXvH7rbYcli9vpcANQ8OCC3OOHiJYR19KnUl%2Fen8rn6nLZ1g%2FYk%2BM22qoosy7GqAQeM7w6lUiZLdUMIiPpPuZSLjQqlP1b0%2BbwlAYbqT3a6HbG%2FTKM2ZKJ56s8zq5dNb%2Blq5gQWabMN3z5l1Q5VoNpFAnFkAsKBzas%2BHpNPgoyEowIpNGZJpMVUlQ7dFR%2BKjcgvw6ENxH2rpQEGBNSUXVPdCa%2FfZ9Jh7ewWrOLlUTcrsN7GgXhOQs%2FtoRMUNQsdIXz8aLbaxYHretqzfriE75OtYSg%2Bc2XdxsSuUWZaElzvAwtJIcgFzVB%2BaTaqNhu7VVQZtMRPR4mN82hnnajSXGAjnaIAfmLj5Bs3D%2FsEQTlx%2BebYPwVxupGRew8dhPks284tYNGXMwn5PXxAY6pgFQgsAT0RWPR7HiIraBGMxuD7uLamTdTGog8AFODhUffpdaCkadYUAfhO5K9Rz0KGJED%2BLjhK64vBVPZ59BeCqWnquLlvKYFWqvky1uRUGdMY23SzKg6xFUjfqT4aLlD0nRKjA9Nj6QBXSOke0DRU5r0ykaU0GkVZviBTBU6QBs2KXC2T5bAGr2M4S6wRm4UepUr9EopX66Oy%2Bc%2F7r2aPUWXDxj6ed1&X-Amz-Signature=ea2df14c31f2d4d1a4f1e2624ee37f0c1a247dc7a8f2ae41fa36aeccd52dae0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZUACFR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBOcyeplWUO0Foi%2F8d9X%2BnJ4p6VC9lR3jgvK5%2FOSHwMaAiBi6solgZdltcL9uNo3TFBLYXv2FNHI0jpx92FRLh5t2yqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcdo2f%2BDH0NZxevKKtwD7yyvzTPHeJ8MWzblh1xM34%2BLS%2BEc1seHdxfqw5gbcgxmMVYVgkZTz0or4B3sQIM2n9o0rbwOJYjDDFalmPb11ItLZQFxVKwdCypsl9AEKuv72iWssmgBAPAA7RMxpERNmQRtL14kvyi5w7Sg1G7qA%2Btf4SsY0T3RT73voLXcP9NPPEfSzeGc4Ep%2Fu%2BLpfxAbQpLnCbIcpD9NAPRCsrCAN652r0WsBcFa3eGtGuQqEwqeYr2GDUgJXvH7rbYcli9vpcANQ8OCC3OOHiJYR19KnUl%2Fen8rn6nLZ1g%2FYk%2BM22qoosy7GqAQeM7w6lUiZLdUMIiPpPuZSLjQqlP1b0%2BbwlAYbqT3a6HbG%2FTKM2ZKJ56s8zq5dNb%2Blq5gQWabMN3z5l1Q5VoNpFAnFkAsKBzas%2BHpNPgoyEowIpNGZJpMVUlQ7dFR%2BKjcgvw6ENxH2rpQEGBNSUXVPdCa%2FfZ9Jh7ewWrOLlUTcrsN7GgXhOQs%2FtoRMUNQsdIXz8aLbaxYHretqzfriE75OtYSg%2Bc2XdxsSuUWZaElzvAwtJIcgFzVB%2BaTaqNhu7VVQZtMRPR4mN82hnnajSXGAjnaIAfmLj5Bs3D%2FsEQTlx%2BebYPwVxupGRew8dhPks284tYNGXMwn5PXxAY6pgFQgsAT0RWPR7HiIraBGMxuD7uLamTdTGog8AFODhUffpdaCkadYUAfhO5K9Rz0KGJED%2BLjhK64vBVPZ59BeCqWnquLlvKYFWqvky1uRUGdMY23SzKg6xFUjfqT4aLlD0nRKjA9Nj6QBXSOke0DRU5r0ykaU0GkVZviBTBU6QBs2KXC2T5bAGr2M4S6wRm4UepUr9EopX66Oy%2Bc%2F7r2aPUWXDxj6ed1&X-Amz-Signature=39946e8028c0b421325d140388017afd3b0cd44db799b9794cabfa977bda3316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZUACFR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBOcyeplWUO0Foi%2F8d9X%2BnJ4p6VC9lR3jgvK5%2FOSHwMaAiBi6solgZdltcL9uNo3TFBLYXv2FNHI0jpx92FRLh5t2yqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcdo2f%2BDH0NZxevKKtwD7yyvzTPHeJ8MWzblh1xM34%2BLS%2BEc1seHdxfqw5gbcgxmMVYVgkZTz0or4B3sQIM2n9o0rbwOJYjDDFalmPb11ItLZQFxVKwdCypsl9AEKuv72iWssmgBAPAA7RMxpERNmQRtL14kvyi5w7Sg1G7qA%2Btf4SsY0T3RT73voLXcP9NPPEfSzeGc4Ep%2Fu%2BLpfxAbQpLnCbIcpD9NAPRCsrCAN652r0WsBcFa3eGtGuQqEwqeYr2GDUgJXvH7rbYcli9vpcANQ8OCC3OOHiJYR19KnUl%2Fen8rn6nLZ1g%2FYk%2BM22qoosy7GqAQeM7w6lUiZLdUMIiPpPuZSLjQqlP1b0%2BbwlAYbqT3a6HbG%2FTKM2ZKJ56s8zq5dNb%2Blq5gQWabMN3z5l1Q5VoNpFAnFkAsKBzas%2BHpNPgoyEowIpNGZJpMVUlQ7dFR%2BKjcgvw6ENxH2rpQEGBNSUXVPdCa%2FfZ9Jh7ewWrOLlUTcrsN7GgXhOQs%2FtoRMUNQsdIXz8aLbaxYHretqzfriE75OtYSg%2Bc2XdxsSuUWZaElzvAwtJIcgFzVB%2BaTaqNhu7VVQZtMRPR4mN82hnnajSXGAjnaIAfmLj5Bs3D%2FsEQTlx%2BebYPwVxupGRew8dhPks284tYNGXMwn5PXxAY6pgFQgsAT0RWPR7HiIraBGMxuD7uLamTdTGog8AFODhUffpdaCkadYUAfhO5K9Rz0KGJED%2BLjhK64vBVPZ59BeCqWnquLlvKYFWqvky1uRUGdMY23SzKg6xFUjfqT4aLlD0nRKjA9Nj6QBXSOke0DRU5r0ykaU0GkVZviBTBU6QBs2KXC2T5bAGr2M4S6wRm4UepUr9EopX66Oy%2Bc%2F7r2aPUWXDxj6ed1&X-Amz-Signature=8ba47ffbb174e1109678223a736763b5ff1bc6d6b278dbd498d2ce68d44adb24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZUACFR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBOcyeplWUO0Foi%2F8d9X%2BnJ4p6VC9lR3jgvK5%2FOSHwMaAiBi6solgZdltcL9uNo3TFBLYXv2FNHI0jpx92FRLh5t2yqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcdo2f%2BDH0NZxevKKtwD7yyvzTPHeJ8MWzblh1xM34%2BLS%2BEc1seHdxfqw5gbcgxmMVYVgkZTz0or4B3sQIM2n9o0rbwOJYjDDFalmPb11ItLZQFxVKwdCypsl9AEKuv72iWssmgBAPAA7RMxpERNmQRtL14kvyi5w7Sg1G7qA%2Btf4SsY0T3RT73voLXcP9NPPEfSzeGc4Ep%2Fu%2BLpfxAbQpLnCbIcpD9NAPRCsrCAN652r0WsBcFa3eGtGuQqEwqeYr2GDUgJXvH7rbYcli9vpcANQ8OCC3OOHiJYR19KnUl%2Fen8rn6nLZ1g%2FYk%2BM22qoosy7GqAQeM7w6lUiZLdUMIiPpPuZSLjQqlP1b0%2BbwlAYbqT3a6HbG%2FTKM2ZKJ56s8zq5dNb%2Blq5gQWabMN3z5l1Q5VoNpFAnFkAsKBzas%2BHpNPgoyEowIpNGZJpMVUlQ7dFR%2BKjcgvw6ENxH2rpQEGBNSUXVPdCa%2FfZ9Jh7ewWrOLlUTcrsN7GgXhOQs%2FtoRMUNQsdIXz8aLbaxYHretqzfriE75OtYSg%2Bc2XdxsSuUWZaElzvAwtJIcgFzVB%2BaTaqNhu7VVQZtMRPR4mN82hnnajSXGAjnaIAfmLj5Bs3D%2FsEQTlx%2BebYPwVxupGRew8dhPks284tYNGXMwn5PXxAY6pgFQgsAT0RWPR7HiIraBGMxuD7uLamTdTGog8AFODhUffpdaCkadYUAfhO5K9Rz0KGJED%2BLjhK64vBVPZ59BeCqWnquLlvKYFWqvky1uRUGdMY23SzKg6xFUjfqT4aLlD0nRKjA9Nj6QBXSOke0DRU5r0ykaU0GkVZviBTBU6QBs2KXC2T5bAGr2M4S6wRm4UepUr9EopX66Oy%2Bc%2F7r2aPUWXDxj6ed1&X-Amz-Signature=c04031711683c9bf7fac026099054f423d4b2dda4e44c7658c55523987c6ec0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZUACFR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBOcyeplWUO0Foi%2F8d9X%2BnJ4p6VC9lR3jgvK5%2FOSHwMaAiBi6solgZdltcL9uNo3TFBLYXv2FNHI0jpx92FRLh5t2yqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcdo2f%2BDH0NZxevKKtwD7yyvzTPHeJ8MWzblh1xM34%2BLS%2BEc1seHdxfqw5gbcgxmMVYVgkZTz0or4B3sQIM2n9o0rbwOJYjDDFalmPb11ItLZQFxVKwdCypsl9AEKuv72iWssmgBAPAA7RMxpERNmQRtL14kvyi5w7Sg1G7qA%2Btf4SsY0T3RT73voLXcP9NPPEfSzeGc4Ep%2Fu%2BLpfxAbQpLnCbIcpD9NAPRCsrCAN652r0WsBcFa3eGtGuQqEwqeYr2GDUgJXvH7rbYcli9vpcANQ8OCC3OOHiJYR19KnUl%2Fen8rn6nLZ1g%2FYk%2BM22qoosy7GqAQeM7w6lUiZLdUMIiPpPuZSLjQqlP1b0%2BbwlAYbqT3a6HbG%2FTKM2ZKJ56s8zq5dNb%2Blq5gQWabMN3z5l1Q5VoNpFAnFkAsKBzas%2BHpNPgoyEowIpNGZJpMVUlQ7dFR%2BKjcgvw6ENxH2rpQEGBNSUXVPdCa%2FfZ9Jh7ewWrOLlUTcrsN7GgXhOQs%2FtoRMUNQsdIXz8aLbaxYHretqzfriE75OtYSg%2Bc2XdxsSuUWZaElzvAwtJIcgFzVB%2BaTaqNhu7VVQZtMRPR4mN82hnnajSXGAjnaIAfmLj5Bs3D%2FsEQTlx%2BebYPwVxupGRew8dhPks284tYNGXMwn5PXxAY6pgFQgsAT0RWPR7HiIraBGMxuD7uLamTdTGog8AFODhUffpdaCkadYUAfhO5K9Rz0KGJED%2BLjhK64vBVPZ59BeCqWnquLlvKYFWqvky1uRUGdMY23SzKg6xFUjfqT4aLlD0nRKjA9Nj6QBXSOke0DRU5r0ykaU0GkVZviBTBU6QBs2KXC2T5bAGr2M4S6wRm4UepUr9EopX66Oy%2Bc%2F7r2aPUWXDxj6ed1&X-Amz-Signature=37c4aa7f1a29461212167f3a390e6e1200112f22fd100fd029e0ea3515cd6b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZUACFR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBOcyeplWUO0Foi%2F8d9X%2BnJ4p6VC9lR3jgvK5%2FOSHwMaAiBi6solgZdltcL9uNo3TFBLYXv2FNHI0jpx92FRLh5t2yqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcdo2f%2BDH0NZxevKKtwD7yyvzTPHeJ8MWzblh1xM34%2BLS%2BEc1seHdxfqw5gbcgxmMVYVgkZTz0or4B3sQIM2n9o0rbwOJYjDDFalmPb11ItLZQFxVKwdCypsl9AEKuv72iWssmgBAPAA7RMxpERNmQRtL14kvyi5w7Sg1G7qA%2Btf4SsY0T3RT73voLXcP9NPPEfSzeGc4Ep%2Fu%2BLpfxAbQpLnCbIcpD9NAPRCsrCAN652r0WsBcFa3eGtGuQqEwqeYr2GDUgJXvH7rbYcli9vpcANQ8OCC3OOHiJYR19KnUl%2Fen8rn6nLZ1g%2FYk%2BM22qoosy7GqAQeM7w6lUiZLdUMIiPpPuZSLjQqlP1b0%2BbwlAYbqT3a6HbG%2FTKM2ZKJ56s8zq5dNb%2Blq5gQWabMN3z5l1Q5VoNpFAnFkAsKBzas%2BHpNPgoyEowIpNGZJpMVUlQ7dFR%2BKjcgvw6ENxH2rpQEGBNSUXVPdCa%2FfZ9Jh7ewWrOLlUTcrsN7GgXhOQs%2FtoRMUNQsdIXz8aLbaxYHretqzfriE75OtYSg%2Bc2XdxsSuUWZaElzvAwtJIcgFzVB%2BaTaqNhu7VVQZtMRPR4mN82hnnajSXGAjnaIAfmLj5Bs3D%2FsEQTlx%2BebYPwVxupGRew8dhPks284tYNGXMwn5PXxAY6pgFQgsAT0RWPR7HiIraBGMxuD7uLamTdTGog8AFODhUffpdaCkadYUAfhO5K9Rz0KGJED%2BLjhK64vBVPZ59BeCqWnquLlvKYFWqvky1uRUGdMY23SzKg6xFUjfqT4aLlD0nRKjA9Nj6QBXSOke0DRU5r0ykaU0GkVZviBTBU6QBs2KXC2T5bAGr2M4S6wRm4UepUr9EopX66Oy%2Bc%2F7r2aPUWXDxj6ed1&X-Amz-Signature=63ebba4a3ad1ddf34d3e4992e271f7fe3fc812f6f417bdf8ef70e11c476c8d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZUACFR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBOcyeplWUO0Foi%2F8d9X%2BnJ4p6VC9lR3jgvK5%2FOSHwMaAiBi6solgZdltcL9uNo3TFBLYXv2FNHI0jpx92FRLh5t2yqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcdo2f%2BDH0NZxevKKtwD7yyvzTPHeJ8MWzblh1xM34%2BLS%2BEc1seHdxfqw5gbcgxmMVYVgkZTz0or4B3sQIM2n9o0rbwOJYjDDFalmPb11ItLZQFxVKwdCypsl9AEKuv72iWssmgBAPAA7RMxpERNmQRtL14kvyi5w7Sg1G7qA%2Btf4SsY0T3RT73voLXcP9NPPEfSzeGc4Ep%2Fu%2BLpfxAbQpLnCbIcpD9NAPRCsrCAN652r0WsBcFa3eGtGuQqEwqeYr2GDUgJXvH7rbYcli9vpcANQ8OCC3OOHiJYR19KnUl%2Fen8rn6nLZ1g%2FYk%2BM22qoosy7GqAQeM7w6lUiZLdUMIiPpPuZSLjQqlP1b0%2BbwlAYbqT3a6HbG%2FTKM2ZKJ56s8zq5dNb%2Blq5gQWabMN3z5l1Q5VoNpFAnFkAsKBzas%2BHpNPgoyEowIpNGZJpMVUlQ7dFR%2BKjcgvw6ENxH2rpQEGBNSUXVPdCa%2FfZ9Jh7ewWrOLlUTcrsN7GgXhOQs%2FtoRMUNQsdIXz8aLbaxYHretqzfriE75OtYSg%2Bc2XdxsSuUWZaElzvAwtJIcgFzVB%2BaTaqNhu7VVQZtMRPR4mN82hnnajSXGAjnaIAfmLj5Bs3D%2FsEQTlx%2BebYPwVxupGRew8dhPks284tYNGXMwn5PXxAY6pgFQgsAT0RWPR7HiIraBGMxuD7uLamTdTGog8AFODhUffpdaCkadYUAfhO5K9Rz0KGJED%2BLjhK64vBVPZ59BeCqWnquLlvKYFWqvky1uRUGdMY23SzKg6xFUjfqT4aLlD0nRKjA9Nj6QBXSOke0DRU5r0ykaU0GkVZviBTBU6QBs2KXC2T5bAGr2M4S6wRm4UepUr9EopX66Oy%2Bc%2F7r2aPUWXDxj6ed1&X-Amz-Signature=f4897c9ab339a6215e54e4c5dda0a210ebd720cc340a56e618b4c59721323735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
