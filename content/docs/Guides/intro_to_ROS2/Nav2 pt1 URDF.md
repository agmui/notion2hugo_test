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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=92f2415e08d9a939fe64954e7d163cf82fec1d4c6fc0987feddd24e9bdf97898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=71d27e2640a4c686ed182433d2c8cf9aa12c670c61d908cfd29dbf421f96b1f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=470a300189311b7b3f17b2ab048c4e45471325dc27e531389b2cf66a5410e463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=dd2dcb57615092ea34e0817026f3df04e10b764c3ddf0bbf8ee4506c67bb744c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=4d2fc3c92feed71e98cd5a4d39efa39a68af93939f50109b42f9cf1e26eff957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=f1f34de6572beee47207c3a27aeb068e6a3798135578deb1dc6e73d3268ef3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=6f8f2c2b889607e7982ae75734c52cdd01d97df0f4cebefcb431bb94b9a9d3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=a9c740efc876b4201bb6514795346481a6220e26dadff09a38b51aa9da30ec7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=2705a5a1a90535b81156f6a49739646ae01323b6b692f39dd74df2d9f4c0410b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=190a2f213b29f4d6e3b38f26a4ef402248affb3c0d2f0114d9740a549f73b1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAV5MJU5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBUjmYHAqmXZNVfr8GiF5YciomasAKgpyVfemMgbrM45AiAnnZcUHMMTB28ltDZoqqJoz7RCE3NsbR3TWwzySEqQ4yr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMfXmGPWPK6caRBNW%2FKtwDxSOaBZEe277wLfnuzz31SuPQucu2aPoMhhAwO5Bq%2B%2FegiW5BucRMTQSc40NWeWGNAXkujWXdnknsIpXLv2pJH4G88iQ4wlvNjk%2BkB77SaQ2vS%2Bgdruv30YV8vfYPM%2BNKNCiRrFsrZBH22UvyRu5ZNEyxUc%2BKm5eNqE%2BlpRzxNklcvs09ZrqPp2A4dGoUlKNx7uRelmUfWafgXlPfyz2yUYwNZsAsV39ezE35FtKlES68hWa%2BBEYYNI9hzTy4PvZR6io3I6Wss3CyySpDMma8WCOikmiRBMXOskCBvXcDnVSQ8WPJklxaXU02lUWnDYpCKUK9%2FBw%2FcTHWUgeX6F1l1aoA01Q9Q8IrWws4Qb3yfYW%2BOie1zrQkQtmrHOqgkKCQuG%2B1%2BTg56sXXrzSrJXid5I4ag5Vg5uNd3nwV45LTRDAAttxkFNeEpkcpKFoPDd4Ull%2FAqf68LvW5gWiiVsl6J37pKBWT1mEZQSXKk%2Fc2T8iUtPKHa104wLUSuO6VupMyZWrNWzlWFfg6x4KTdzSdC9nWx3UorZqbbcs0tldrLz8EOJLBCX%2FglOOnovmWDQNDfQOEcK%2FqhWGVn73HNBzoZNwlYr2mcs4Vu5252G%2FQbP707if3lKPZZ23briww7dj%2BxAY6pgHNGOlEcvdIrP3VanTIztZ6upHmSyQ7RMZkk6WrgQlcODePHqXII%2B69GhEanIjQ7GodWxxSasEtWCrdKslM%2B6JDUJz1DUmtERybFODwmwuambiIkU%2FTuspE%2B9%2Fzu%2F23mYC1DEJStj8qjSETRl7AcmE%2FGo%2Fgjv0VGVYhCgrK0IE3duD%2BY83y0q8tCimXZ5HlRV1CMrJjNb21QQ6j1yJmkpZ21U2OYNe1&X-Amz-Signature=e06a56f93ae5744eeca28323df476f32491cb2dda2c219d9e16a8cc106e0e5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWB4Y7QA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDlUUfYQAkR4bzHXa4Tth%2FOvWNfI4r6ktqVWdiLafmOswIgeBJ5Nz%2BV7uAlAVJeEMVJhOiE3EzI%2BrKkEE9nDmHIGvEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOA4sGbCqy3MNI2jHircAxnPKoN3wi5IZrcp5u%2FuvCqevRoMdKDc%2FDEFrYQGuILRNCH4KCagBPWF3nQZgoHLRIRvlpkFoUAyQ%2FCGFArpkmuVIi5KUlDxX2CamGiYSRI27SQOBaXPwKgPzCiQsSdYKVaVCAjjirjiVMZrtiagpIcRDAtUy5t2Pe7Z4jlS7oySBma2VFivush0thN0Ph1OPpvuqWg66TGALifEEa3An57jiYbPUSnQlxh92SLDerdXfoz2fXVtIidoJJMAmGFm4un9FkIbjLuD8XWZvHpFS3i%2BGWK5B%2B8u%2FahoNGkYOkjMO5UxP9EJcg9IHzCs9BGU1iCKtvlXP1VBpOCPDtEHtVVW8V%2FLXd%2BxRgmhSzWxtaJW69c8PR2GceToE9PDXwiJY47sFTvVygs%2F0hUBBl9UD7UU%2BzAObHVQ27BdZslO6sVswZHtjKYXhHPDaYrmqW8CHv8MoRdW9Rv2qz9fC%2FcNt7midu0JUbP%2BxaTIBWK3F6RIiTWsZpJxqSN1el5IGhkGo%2FezrNOBNehCiUmEwr%2BXaz6DWxh1XZ0acE1FdBUcI%2F4RqVl9MvvCDieo7uTA78oQQz1nyk15wDdWjuTKd0PlkhuLJ44o4PN8oOZUoRcrV%2FPFyxByHzN%2BUZUsMVDHMMfZ%2FsQGOqUBkHO7kmchkqpRfrH4fiCVHUzYqwiPtqAH%2FBMX9PAGkEyBnHz7K9B2IYAST%2B9lv0xn6m%2FItelEDcdtV%2FXJ47HLB2zQ1vla5MOIl5gLLQcy%2FmjY2t5Hc4Stapz1fV7n0j8YxkAK61VCeLzYF2xj%2B%2BxsVepPkid%2BEY89xIXMujIuN6%2FBAsuV1ROEa0EA0YkEdrrupLKUSMDm78YOrOyJsnHCLFCIUNFJ&X-Amz-Signature=13f9896d346290d49d747247e2acefc51ba318aa19cb9e0bfa76a4900261724b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEUBQHEC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEpeuE056X5XkM74AKyiMPrGa55f4hbNBhJp%2BMw9MyOhAiEA0SK%2FJyviD4cqgnrIBRQS35FAay8upZqHSnAEFUfp%2FVYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCBNmXmzzoZNZxga5CrcA3B1lnxT5GjzlXq94UeVcytZzlM9oORXElESEXUJHMGefNWgyGmwZYg9XcBxELmLWOllaIeKVlmSwe25fdhgkhZjCBg%2B77syIVX2dbGE4AmxfgGE%2F0FXXJ9qwdDcGp71mWMRbl7LmsYFTmJ4fkUDSmgYWWqxAc2Ux4OrGntdIsX0IPhGobmOQpl%2BwsMpL1IiRVFMICmoc12jWkng%2Bj9uveiWYi6KoggyXH3A8emGn7tny5%2FoHYcJV31Z%2FrAWraS3rwJr7wjbAEcBXxeCYBM%2FOfUOb9yLDmlSS%2FziLhyukY4O0uJO%2BB89VG13YS09ikC5%2FJitJHSwXvTavDfHi2f%2BCGuNuE4jOysU9PHybuBU4R29jhcOm3oKV%2Fn1heXuWYzMKvmoqQyAjKwojaSI6pAk4MguCL1cSZVClOdZbuFH9kDGDpio9f1mwk0iXUqw6BCXEJ1LBYQVJ37N9uh%2FNlx7ydG0DtD5OQuPdNoTMPsLVcxCbAhRtn9PkR3xch%2FEGgUKxxK349fTull%2Fw%2FXP1JNnzYqw5bB1a4R5YWwgLIg73s6dWP5HQC1dOTvbL%2FXtbKx%2BhA7fDo7Jlax6K2vHRfcyWjStVPKX%2B45rrm5MvHpn30eANmZXdezRydews6byMJjY%2FsQGOqUBFxvnvOeE1bhGG6j2hJJittDvUly%2FRM6xoUDAkio2FjIv32cYIKUcyQWdDa2T1k8jd8zWe0aTXtMjY3eU8htACDtct6vOx1Io6fS%2BVnQ1yh2mz3Rdrk0Ul6qbt5OQ3RpexVazWnfplqNjwOWEgcmePDGYXp79kZR1DIoZOKRzdD7HabjiZ8Qs2EjaapHBBQjA%2FiIJKIADJ9S7pmWC5uab0WWrkLdk&X-Amz-Signature=48781df785a8b69ba1d923e165cb74a6e42abb8f5dd91a297fc1b16b3d7fc491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=82ede83d252657af62e4931e82f6655c7019e5de8569eb3c0fe904b62011dd2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HT3PUHH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDw2YzOZ0CsyGnwD6SCFrjyNDMdTxv2%2BErm%2FnM2ywZRswIhAJ5ycmUqt7c4S2nxqbn3fHT4XzbzPc191Okv9SVYTx%2FtKv8DCGcQABoMNjM3NDIzMTgzODA1IgzVmpda%2Bx7XE26PPUQq3AOJqCOQLdS8FQBAL37Duaur%2F%2FcLd67bYNa8oiobF9VI8yuCgAc%2BSVWbMsmtiT5bq%2FvU7NmEfXHRLLNAsWY%2BELDi45Cw8uiiFAxz%2B%2FP7RfITmq3FwDK1ZY7YUnYLWdyIchhGySmCRtJufem6mZPW1ikt%2FJ8LnTDo1c73Y0WHZXYlm9soIGV%2Fxq3d9EO8LjyrvA2Fs%2B98CIoDWB2YLKtotn5Von%2FoAWDG1sxPEdVONVoGlvjuEiYVITiLQBmLLmbk87dQtieTtuneZ1c3xEPoJElmtSKdwmipKEDt%2FGf91gOvy0BgLcOKXt6nxHeBut8jZHv%2B%2Fd0NUhboOgBMLkRhn46c8TOlv6Fg%2BHJP%2BkOMsbe%2Bi5C8HJ6lJF9ZBetkB%2BVHsHi%2BIXUsOcMA9a8c0hVzZKtVbuTzvfgxZ6nhwb1cBydXb5lMO48tT83rzrP0JqgBuqg8lrywQ2s1F97LUvfa0WpU1HnvIoZ%2BeTYtG6PnaCAykpWXUfOjBojZc168YMjG%2F8gNxUhvlizTKwPBTwUzUVmeVkV1zTGBBdvC7UNopoG%2BJaovBRcJO6N2bnaJSYaQcEoMup%2BCFFSTRj5D4m75De3BXafMGTfScAB8r7mLOGAcZHuPKki1WytjBMU0njDj1%2F7EBjqkATESSBRqmI8O5SHGmGYevgiNvqIrajcarjC%2BCKEnlyel4EWXZ9OZj7AZooUy9sBi%2BZCEue1Q5x%2FgU%2B7Rk80FsdBBbuNAEMfyY9XydWzeQtk8tyZV5TX6FGaI1eo0lSUzttjmvudws0oK%2Fh8dirXWcQp4CD8oMcFy1lBlk757XiOkNEnB7GxtBlrKAC1Rc7WToZ67oRwBY15758%2FQ0iCr8eBuhyVp&X-Amz-Signature=d330530640307f932862b3956bcde6aaa63a59e1f173548db59eae2e67555ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=61766f907384a36b341bd271e645f4e9654a9e93cd06efe63f5d247d5c14df0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G4E5MFM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIETDeW7g9PhbUgEPATCiCU07WB7XbpAsM29VijAhJWH4AiAX7CtBKYqJnlV1ezvA33veT4N9NbLNjRI91aYjkXWPTCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMqeiOMW4E2f2IntY%2BKtwD4yyc7mbVnzx2NK4Ha1sewFkSXF%2B0x6IMhGovqyRi1OBCJyQPpcdhTVZE%2B5uLI3X58TwjLA%2BcMhVN1gxdI0rTR0I3%2B9ld%2F4NKvZ58ahYVbKoKrULH7HLW3BSEAohNcMtWkZQgXJvxLUo8GS7J6q5ql%2BXJWXIywPIYB%2FQdgABACn3JI5V6t9UHEb93x5i8VtSAPMpa0eF2aganFyFa3C9huWDcq50N3UQT60jY2QziN5AFSTEXcq0F94GPK94JTg0xqFWU8uzGYpRvl%2Fm4q9gO0pAkaT10SdGGCHtjvZbm2wSgPT0LyPH38ZGaxd9lNPDEg8ixzwtnyL4J%2F1ZQXhL3xb%2FXcdhTy1kfAne1c38vGzQGETsnmJ0KPfpW0ZrOxmCAp9O%2FJo%2FoeYi%2BjWBjxHcD7FBNLuqy%2BSfNDcIDEYZi4Sbfuo13k8vFBR%2FCYaBJ3YxyqN5r595MgzUxPTFJenGbyPV1CaB6OaJ3m6KKQoDuhK%2BdKX9J50yGsyO2e9%2FUmPG5Mac4Gx9LTUIXLIAQERMGPLjrobAq23k4EWgW1obxgmJwJ5TliQn9krLpUTOeelLblq7BvYdb3eysCoaDZNOx9VX9Fo0n3KkweBFrGIoWJN6p%2BT2ztEDKL8fgdPgwvtj%2BxAY6pgFfwmsghHNo4PrXQln2KseutLnRRes1kwEcSAvdgwXSgd1vY6n%2F5zH2eqTQ9QlSDP6Uh4wZD%2FtuuOyeACR7OVDs071rmvYYT6iMUB6D8FMUOTC6%2BhwWuyqQdm4RTwr1woj2VNRBJd4d5hU6mxxKwcGzs59ag9PREp9SaEfsvbV1fymK7w6CuQurXIXWrbRO8AS3G%2FIQFjrZFeccTYbcN6YGG5%2BmXvsU&X-Amz-Signature=c41c272392c130b490003891a61c579380348ab179235dced465479784627f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=b7dc912e3ab77c25242f061a091b076ea5c11cc51dabc3695152e8504c76c5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEIXYVQN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICMb7dnl21JGXWDlxxUZb9kYWQjZoJPSzAE3UIzF3lo%2FAiANF7dOLcMKkzAwhn5n3VbH7TDA%2Bay0uiwq%2F%2Ba3cSL3eCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMsihqU6oBDHmsVKK%2BKtwDdlFsrkRBSupIsGg0V2EijrhQc3SKvBhCg%2F42p5MjpYPTiXHB%2FGNb2s3OyavTz96V2iSAOCmn114zXnBmrLC6etlJ%2Ft4eyBQMwtT9uN6VnXWaVs5tBoQcQ%2FqziFrnFbIMlDkYvlOEwoddgZLnW%2FJ%2Bk4hhoGyrlB44jxd9RGl8aPYph7aW6S3LiMfUhkRaMUgiV5lA9YkL6noK0pA64K0IKb8Bga%2FzsWGXpdMCG%2FB2FmYipbwT4Jq6da9%2FU%2FiwrU4lrnMvrpxtkaU7t%2FZ1%2Fh6VFay%2Fm8CPL8O83Z5N3gcwQd7YdJZ%2F%2F9AekUr5RJ1lOVffPhfbnM8OVr7uqx8KmnKv4AB8wWatC7wq6ZWVh6YPLywVlY%2FJ27Rp7%2Bl3kICng4HkUCOShHhRGHLRdBoMQzrz5NCqSRLTPx9naEinCgL82MU4C7XdtUiV5teVW3yNfT9MLi57u7NIrC%2BdWDqO4UQdxNafkH0iYC%2FhX1xa6JUP9x1u6ta50nncfot4HxsGMS4z%2FqrSIgUdGNziffgVDVe5DaPYcrCT1UfDoUcuDe5Q5PM2rammcwow7T8qGXkkYp9rmZcKyfLTi4LneWnE98ymUb5YE%2BkxeKfA9WLIuus%2F4lhmf%2BiHlM1sApMI4bswgdj%2BxAY6pgG1o9izXjECJrQlEJJg0DGLgHHAKo1wUbFsuzQbpCXc%2FR55IN6kTE7roWvZR0zZq0vWYKqksUPTqn9WKgxVuad54BoO8iO%2FYnItSPYyyonbGyyFeApY%2Bku8YafhM%2FGa%2F3qOA5PbJCg%2Ba69Md3E09SnNCZZpvZ4UfAKbFJ%2B3LEytuJVK%2BscDJw6ixhcQ2kXrzkL7a1ud6tSFafnKuMK7UHHq%2Fq0aB3TU&X-Amz-Signature=c68f423c14674df8a2a95c85e4851286f9ca310d7146b4836849dad754c0da05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=faa543cb1fd0a47f03308ac8867b71e8ada5cacd05506c76748013ab58575614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLL4BUN2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGlcuteZ0O2kKB1s9NwJ365jvWEoheuGAIG9mT2v3VwEAiBRa3ipEp9U6HsJGozfxpDSUjgiR%2B3WFkEqEc9TJ8Tr2ir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM6xhUzXqOEfie%2F9XxKtwDeJWIxSBvqstNdB8dKEdiyu8w%2BoiBU7hgQZRxeX1lUClaTTXGIZj8XzMueLJY%2FL5an6aI4pK4QTyEYo9k8b34qSkap%2FDYUNN2wFzCfH%2FwlKMQtqqhtJmFN298u7mXgfdGcyqImYDnPlvSeS%2BFYJlqT6CdbfuBnMYhUfMNB1TpyadNMmbtLji3uL0helvOcypfvfuJVjGsJKW%2BG%2B4RaZ3ljGYk9sYLoiQ2lFZiYX6CXIBVuRqZZwDyUlbKiIVFsdSG77sN7q4b7upO%2FrioTGNLgjUUQJgKrUQbbPwJM6FmQHcumpZ%2FaSqKqSXTRVaQ%2F%2F6n14vCYaV371c7XJ2xwiAyd%2Bzsdku%2F%2FkQiNpR69JGWmJq8B4rGm4eJHhqDcZ53sErmEeV2VvbmkqZOfkDhuBBTJo57lGYxzsr52fYCXXxIyzgBtP5n3BVvlxfV1%2FcznD6STupVcAF3teLhBZPXI6SRSo1L4ENriEzp%2F72ycIygRS5jle%2BND40gmHL%2Fc3mlT1wtsXyMYwrKlKcdjQqkcaZM9AHEoju9r%2FKq5idSHEGkGOa1sfdesOGQw3rj5L7latGk7e22hEubUz5tD5mF%2BIbWvJDd%2FdVEIecVWP9IRcERfw8XWnhbo6LX%2B4bQQMQwi9j%2BxAY6pgEx5zuzKmVOy03tvh8w7WoRRhY3AWsmAPxNdvII61XjjhlyDQMmNgaR7rh51PpsBCbPXNkNqxco0nNNsJOIo1WkBpwWNOvC6qX6v3YmLghDMO0Ke5Wf2cLuUQvOwRVQPAHs6%2B5%2FVdEOHXM0tn%2BuczuiCXzrYcxiqkRveaCyRVayfX%2F1ZVM%2BJOXxvKf1SLCJRYgkiON9XS4kGnatP%2F7TUZhtEOKGk%2FeV&X-Amz-Signature=329caf2914815c9d4b309ae4145904b4e378fdbfa3367416d114cec9b3dee9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EVMJ7NM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCasBua60NGfx19VFBvlQnwJmbUiLDcjqJK2spIdW9CrAIgT61FB1M2IRPfG8TlNqX7xoSoFwoW50%2BopU2alzabdn4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDD4CUZDxv%2FpaSxynYyrcA4jXgScUH3zDd94LvA5kgKCbGnhAETYOGzVsw7YKSrBQT4sihjNrrmlT7Va%2Bun21yQCnhlAFcWLWqVcmHrkShNGx9xpDtoC%2FBoCx0O1%2Fv4dKrNV4WHW8%2BzGAQxON2mTOaUSEA2KTNZ54VwcZFDATi9FApVCmrfplunlGoe85gpbwGgCZxRLekfeCPdzs9OAJ0JIOiH5ruyedWOS%2FYShggwpptip%2F1ZC8DtXNEYR7rHyAyiXxegSQiUNVAzLT1SaZQ70M2Gbt7IFEbMQpGzPGpgdf1G4hamuXuDUakDXUCj5nUd5ZWWfbhfustNJC8Yk7gyz21%2FDDduPLncc6FRHeDlg1TWPjtwGbJWCw04c8gBAQphZ6gx51nDZxgLZK6Mh0MFNZH7T%2BUyKWbnDNTO47vfLali1rfwp9PyLPthGhaH3E%2FORMh4O5b1GZ6kPJeKf479WrNa5zpWQ%2Bepd6O4AkjbfzLXZrvkcQ9z%2BtmFNpJtknniYK0eMl3D0JL9omi0KeNJyOmgZUPaZdmdX5iWdCqR2uUwDLozKKV0wEVzjTbuNUzgKLbHH9CE%2FiNGMDaXaQaa1fbxoKMvS0FKVF0F%2BkGD2fRdAq8LQ%2F2tl8SZdoBm0Jnz8upN%2BmXiDrl95CMMDY%2FsQGOqUB3xbdlNbWru6gzt795p6hwsPBncgIaEm1qgaJ0sFp86x1UhEZ1Zx5QfIYV%2BI%2FlvsSnqSzAmHEYdk43dhI7%2BouHvcevwqyEGePxiQFRadMaY6VyGMZkn1JZGSa8qCbmrTJHV6JQ5N1vkNA4WjZedbqKtETlgbDOpfeSbiKla7p0qgJtlQHEOOovlQMXp3YFdyxetDeWJ9RnUvXRBTCNOahPJuqbBWK&X-Amz-Signature=462bb2aa958459ef9502ac387e8e8577d2a05b6dd176df320017a95308b08bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQ52KLU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAnGgAExkUpgKQzZx46C6woZ0JCqa4EnPnR%2FEhqpLUZlAiB12YLtrv%2BMlubWJucFcweDn8fqjFsrodePvLkCsepQFyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMATfj9tfCXZeEniJrKtwDpUAYt%2BlU5ZTO%2FCmLTkZXt0bAwxz7q4KePYmJ4EkKEYZrG9GOppxjsM7TB76sUavDF0ODRNoEnVSziWfB6iA6GWLme4c%2FV1kWIlBc6hB50aagGHy0lmFcgYOEaFxURENx19p%2FRhR5TTiHrR2svVdkQ303WaRkf6f696jSFogqN9OPLrOY563ANwfIBVZ6wyxieMHFdiUfrNf5cZ4CORUwzGfMRC7jwLE0wUNexA75CibWnkm5U%2FpN1uQC5OjL4modxh8%2F9TXX%2BR2DxE80UW0t16s2OrpVM08RwPWZjz7D%2FhKPe8TIvvfa66Lk3%2FDcI2S6OGdeNSzTcQD7ycwBGUN6WaaHHuicpzytJuqytjuibDgymp2QMoJjt2DsVvfDi7zdwiTF6wexDeYlBDURn65E1YbnKhNA7ePa6QHoNoFOM%2F6TX3%2FkZEGohreu%2FonLAk5psF0F2LEzpCLpzDpZF0EJ1oFcbnwwiKneksOoDPe5QDPnTVdL6t%2FSOorRnpXoxHlkN%2BFKdLrxBRDH7PqrqSn7MJxFFRPcP9Y9bta9WVzPWy0HhTW9H98IQpxGlqBfC9JPiQnJYDuNMdzprD1iqZEDzb9Gv8%2B8El6fT6XqjvlxWn61khPAHwATONQ3qBQw3tf%2BxAY6pgEUPzLiPc%2BcIOkKGbECacf0AT2CU9S%2BGQeI6wsyIbADHvr20jDtBqedgzdzO1hFD0OqUpbmXhbJKnRXuOWd3kERfZbZJrlocqpN3UFVgX6UfCQVD%2FQ1CNXUdFSiSr32SVGGOVOUkVttVW2Yr5QJOXrkHY2B2e2fus5KH4P5GRGP3I8ZU628j6xp9j1gatziOFjQP1jN5ixhjmtPFATJGjMITKgkVwzH&X-Amz-Signature=ec15e8e0276db8e85c5eb36572f4b596c29908f7c53ab52c3f21e069dbabec74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUBTOQVS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCcQ%2FMOYw5lVgyfJxFLLFpntxB2TLulTaCDmGVXjamAOAIgPbKIYq5Tk5PYRKo68vsCRw4cpaYOAgD6LPkND8f78fkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMXcfye20io2Ed24NSrcA3VOQXF3CQg%2FpOGyrvtvuGvKE%2F7LNzZvRSC1kzyZ7jLA1AppDHbPpMn7YPO2ebugueNmuLqK0w5BKMN84pd%2FRXHY65k%2BDfEULUop6TrLuWAoGhCJ0ccj0GChGRCyuecgFORsc3ps2RQVRuYfLRaoJ4kk5tjw8Q8ABiFWXUrwz9yvRcnhpsG7WpM9dnwdg3bw1bDHKdTQxmA%2Bg8j7eIuCg0vW%2FFR3%2B6i01XDQYEplnc02YQwux85%2BMwOpx4FCPW4fRkrzFlseaDHRr0T%2BO9OtN9xE1KH9sZRsyTPf1E7lvh%2BS9wBSB1SV3OnPNhPCgwKZ%2FxmhzQiwvoUeaThVIn4sG%2Bx%2FSUpeS7DCrScoR7gZ0Bg11kpAslRHjhBLpbY7iu7SZZpRqU1VPTeWPPAgPw7haVHa80PbMpFbX40DbLc%2BXyzGI5YpkisVoX0O6UDa7J%2FOODBazcmuRri6egzd8my3MztjmzbAxypRZjlLjLjcyuFz76x5ChmOoGfojWBzznH6H50GSHhNwJOCgLs7xXva5cpUSwr0JLs3Wt9%2Bj9zpJSR9PNxlX5QiqdtmBnroVRa%2BjRFIMPM7L%2B7CFyrChVGom4djTiK91EvL46rSQTl8fyghj1wDJP9mhwaA%2Bs%2FSMP3X%2FsQGOqUBzpgfWZ8atowlYHPoXsqO3jkl1YycF5jNQdJDzZCTxdSLjnB6roK4rFNTxE8%2FIGLNit8mkrFhIoOLAYaPaQ84H5ruyHhNJRyonbD85sL6D9zPkD0IhyC2mt7RL7OFimxGPdIli0sOBLzqxwK%2Fe6An6ZsClRC07GpAaJd%2FYsSxkVwKq1Qp%2FE0X0c2f3fwJTtqWNuOyE%2Bv1fK4EvUad71zR2TgrslJ7&X-Amz-Signature=3591965829e596a59d6c8b349abf35f05998436a8b2a93c5439b403140ede544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633A7BB2W%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCWvnKruQsrtkQ5c1GHlHIJjtE5dWWD2UmmiqgbIchfggIgPGhDk%2FzpIlpXc7AAXh2iqUvydruHbw37WTTjkUlMyCwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEg48DdiNdASRPoa1CrcA7sJBiD6lBWdwUct9xHSoXhqe8hIJDwe1JoO2dmuXpk4Mh47BYU2DrH88%2FMGzhtN32p878AXnIaMh7ndYdUY8MeGmyG5WbvgI4VRUYbfrCudQrSh%2Fkmv7zPCVu1qUWDP0roLEljvck2pPbp3S8abI0vS58iM5I1tI3%2BjVR7EOdiIrASwSS4%2BafzF%2B2D9xTbaLR0iYYnJUt8RxNOJ0CUNpFSGQD8CLnuLQYMNAmY2yOxzk0KE3IXXeJLoDwV%2BN%2B3LquDP%2FUU5Tj6lKuGfmDFKDs5ghggb2cP4zV6DUTMr44zeH9Xt9UGN8sAgWEpLdTzbhqQbCDFwvUl39cxvVS5My3o%2Bm63G1UMsW464NYhGZ2yfSye0DTXOTy236cUuS93zeOx%2BVhmBqOuMQkduD2hB1S53Mar2gv8aZ2%2BGwxle19tesbRcyRQa9kxdqCdJj%2FzmXBirUf3xXiAXlQlowMpIbSU%2Fbow4x6s6VVWgpSB0t%2FqeMtzQ2JwxH4mGtJNLbVTYr0aPJmcNK99HIGw0GmKW71IMReKI5iUsYDm64hKE49L8O0msp%2F9N8Kx948PjH9GtRU%2F5U%2FO1Y6BdSZ%2BzZYsJD7K6jdi9mRHKBdQa4luAdOPoGsxIFKGEo1YjJBvkMNnX%2FsQGOqUBGHGqT8JOoCZpbyHzLHxw8St%2FGMp03d8SFcrG19K3JjCEA1mbKGSWAE%2F69ymmbSkWPHM0JZUot6HreuRosJ1usMTRkfkApLaNTms3u7F%2FXj4SPIJyoy%2B1%2FbkLyEWLymu75ARJPX%2BcdmWH4QyZcC%2F1G6RJ2XuozPdU%2FEHw%2B0NOlAv6vFy90l2c2%2FN%2BhaNA5cMH9wY6I12EI09Js8N78xukGAOO0IJf&X-Amz-Signature=2aabaa7204e32d0ea53ac9e534983ef2d4eba805e04e72fa6ecaf55d7eb260de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=e15edd5ea714e4776ecfc488094816287398745cca52a58ac22faff67c351d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=485203be5350ef5792f828dadf5384e3547f7422ad0a1a525328097315b62284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPIDSHO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCiv5RhAPYu1oF4eya9ju96qrFBPQbnLaWuP%2BcVzfn6zwIgeviVmQHEpiB3m4WR%2B%2F85Kq35QHZJ2KJnpLYIgpe%2Fs4cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDPo4WA6%2B4lihrfJkircA02fjCQd5wsbdU%2FF1o8BTGl%2Fe1R7Ly8bsSe0GVLSybBFeXK%2F6x6y4ENKUIjwgnfds38Ybwdu8iNdaaqiS7ndHTmaYD9cyhAFPNKLJxghuDFJ%2BMnljSdFMy5Zx4PTU85Dkj15jpRr5BUJPnJhqVTLTNqIJ%2BIPBMH%2Bpn0Xdbvdi7WEF0fkxt4XGcwtAh9C2Rr5Y00yIsRE39RGfOUm%2B6jiXeVpuqOQLedgtwd4X7UteUNIpts7D%2FuQXjqQETmHz1SKPpxCgfjKhhQN63MqQ7xPa45oQKepqurQOcggpiD14S%2Fp1iK9PEmx4DmJzujK1JR88qc0tf%2BM%2FQ3urFs%2B885ssdQhGs%2F3QcuIMyP1OBCTqN6kn%2F4ll9xsT1xAqvYAloPOjLz9t8%2Bh2Xk6SkHFU7IQ96dhmjeGH1BArx%2Fi1o5zJVCTwZVtW0bTmHqrNb1w37xbudEFzP2txwnL3rZugShoFw0jO189REIhGzSdIcYFaVDEaKBeXlhe8w0CFYN9LrMEVFFaPlmazHmxjwJmdD7s0mnOyXnARMlm6CnqmS0Zvm8KKLSDHBB9Q%2Bx2b%2FOI47udJTO2pTOXOno%2F7hfFK16Gc%2F0l5uhNS0wM9L5dopRbNhgdfpFmvFPe2aAWbafRMPTX%2FsQGOqUBAq3QGmWqgKZXFl9aO9LImBlELAIkzm%2FFQBjapQ8EeT3WBeQB6d9eaJSJMJOIc5h6XGOmJ5r%2Fatkn%2BvT95VrvenBKNVmSQMUy%2Bc3nPS5MmamHgjphOLvI3ivYN9I3gRS9IIoVXnM08HdxJXqow87tIMnfrUnZqCuBzO5Ula%2BPSlAvl8l9H%2BkhDXBqcWaaW4w2p6S%2FnBVDxBw%2BDhch6goLK35Frol2&X-Amz-Signature=65e36e7a82d71be9e99448fd27f7db03c8d7b2e0e1662fc912866e0ab3fbdcb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPIDSHO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCiv5RhAPYu1oF4eya9ju96qrFBPQbnLaWuP%2BcVzfn6zwIgeviVmQHEpiB3m4WR%2B%2F85Kq35QHZJ2KJnpLYIgpe%2Fs4cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDPo4WA6%2B4lihrfJkircA02fjCQd5wsbdU%2FF1o8BTGl%2Fe1R7Ly8bsSe0GVLSybBFeXK%2F6x6y4ENKUIjwgnfds38Ybwdu8iNdaaqiS7ndHTmaYD9cyhAFPNKLJxghuDFJ%2BMnljSdFMy5Zx4PTU85Dkj15jpRr5BUJPnJhqVTLTNqIJ%2BIPBMH%2Bpn0Xdbvdi7WEF0fkxt4XGcwtAh9C2Rr5Y00yIsRE39RGfOUm%2B6jiXeVpuqOQLedgtwd4X7UteUNIpts7D%2FuQXjqQETmHz1SKPpxCgfjKhhQN63MqQ7xPa45oQKepqurQOcggpiD14S%2Fp1iK9PEmx4DmJzujK1JR88qc0tf%2BM%2FQ3urFs%2B885ssdQhGs%2F3QcuIMyP1OBCTqN6kn%2F4ll9xsT1xAqvYAloPOjLz9t8%2Bh2Xk6SkHFU7IQ96dhmjeGH1BArx%2Fi1o5zJVCTwZVtW0bTmHqrNb1w37xbudEFzP2txwnL3rZugShoFw0jO189REIhGzSdIcYFaVDEaKBeXlhe8w0CFYN9LrMEVFFaPlmazHmxjwJmdD7s0mnOyXnARMlm6CnqmS0Zvm8KKLSDHBB9Q%2Bx2b%2FOI47udJTO2pTOXOno%2F7hfFK16Gc%2F0l5uhNS0wM9L5dopRbNhgdfpFmvFPe2aAWbafRMPTX%2FsQGOqUBAq3QGmWqgKZXFl9aO9LImBlELAIkzm%2FFQBjapQ8EeT3WBeQB6d9eaJSJMJOIc5h6XGOmJ5r%2Fatkn%2BvT95VrvenBKNVmSQMUy%2Bc3nPS5MmamHgjphOLvI3ivYN9I3gRS9IIoVXnM08HdxJXqow87tIMnfrUnZqCuBzO5Ula%2BPSlAvl8l9H%2BkhDXBqcWaaW4w2p6S%2FnBVDxBw%2BDhch6goLK35Frol2&X-Amz-Signature=3e32d065d2a25cb65e3f98e0934bb015ba6c483e7f42e51750a2973a54958e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPIDSHO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCiv5RhAPYu1oF4eya9ju96qrFBPQbnLaWuP%2BcVzfn6zwIgeviVmQHEpiB3m4WR%2B%2F85Kq35QHZJ2KJnpLYIgpe%2Fs4cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDPo4WA6%2B4lihrfJkircA02fjCQd5wsbdU%2FF1o8BTGl%2Fe1R7Ly8bsSe0GVLSybBFeXK%2F6x6y4ENKUIjwgnfds38Ybwdu8iNdaaqiS7ndHTmaYD9cyhAFPNKLJxghuDFJ%2BMnljSdFMy5Zx4PTU85Dkj15jpRr5BUJPnJhqVTLTNqIJ%2BIPBMH%2Bpn0Xdbvdi7WEF0fkxt4XGcwtAh9C2Rr5Y00yIsRE39RGfOUm%2B6jiXeVpuqOQLedgtwd4X7UteUNIpts7D%2FuQXjqQETmHz1SKPpxCgfjKhhQN63MqQ7xPa45oQKepqurQOcggpiD14S%2Fp1iK9PEmx4DmJzujK1JR88qc0tf%2BM%2FQ3urFs%2B885ssdQhGs%2F3QcuIMyP1OBCTqN6kn%2F4ll9xsT1xAqvYAloPOjLz9t8%2Bh2Xk6SkHFU7IQ96dhmjeGH1BArx%2Fi1o5zJVCTwZVtW0bTmHqrNb1w37xbudEFzP2txwnL3rZugShoFw0jO189REIhGzSdIcYFaVDEaKBeXlhe8w0CFYN9LrMEVFFaPlmazHmxjwJmdD7s0mnOyXnARMlm6CnqmS0Zvm8KKLSDHBB9Q%2Bx2b%2FOI47udJTO2pTOXOno%2F7hfFK16Gc%2F0l5uhNS0wM9L5dopRbNhgdfpFmvFPe2aAWbafRMPTX%2FsQGOqUBAq3QGmWqgKZXFl9aO9LImBlELAIkzm%2FFQBjapQ8EeT3WBeQB6d9eaJSJMJOIc5h6XGOmJ5r%2Fatkn%2BvT95VrvenBKNVmSQMUy%2Bc3nPS5MmamHgjphOLvI3ivYN9I3gRS9IIoVXnM08HdxJXqow87tIMnfrUnZqCuBzO5Ula%2BPSlAvl8l9H%2BkhDXBqcWaaW4w2p6S%2FnBVDxBw%2BDhch6goLK35Frol2&X-Amz-Signature=511cb69477112426c38df790b0a3150fc79390210c463b337d6282fa4e917600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPIDSHO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCiv5RhAPYu1oF4eya9ju96qrFBPQbnLaWuP%2BcVzfn6zwIgeviVmQHEpiB3m4WR%2B%2F85Kq35QHZJ2KJnpLYIgpe%2Fs4cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDPo4WA6%2B4lihrfJkircA02fjCQd5wsbdU%2FF1o8BTGl%2Fe1R7Ly8bsSe0GVLSybBFeXK%2F6x6y4ENKUIjwgnfds38Ybwdu8iNdaaqiS7ndHTmaYD9cyhAFPNKLJxghuDFJ%2BMnljSdFMy5Zx4PTU85Dkj15jpRr5BUJPnJhqVTLTNqIJ%2BIPBMH%2Bpn0Xdbvdi7WEF0fkxt4XGcwtAh9C2Rr5Y00yIsRE39RGfOUm%2B6jiXeVpuqOQLedgtwd4X7UteUNIpts7D%2FuQXjqQETmHz1SKPpxCgfjKhhQN63MqQ7xPa45oQKepqurQOcggpiD14S%2Fp1iK9PEmx4DmJzujK1JR88qc0tf%2BM%2FQ3urFs%2B885ssdQhGs%2F3QcuIMyP1OBCTqN6kn%2F4ll9xsT1xAqvYAloPOjLz9t8%2Bh2Xk6SkHFU7IQ96dhmjeGH1BArx%2Fi1o5zJVCTwZVtW0bTmHqrNb1w37xbudEFzP2txwnL3rZugShoFw0jO189REIhGzSdIcYFaVDEaKBeXlhe8w0CFYN9LrMEVFFaPlmazHmxjwJmdD7s0mnOyXnARMlm6CnqmS0Zvm8KKLSDHBB9Q%2Bx2b%2FOI47udJTO2pTOXOno%2F7hfFK16Gc%2F0l5uhNS0wM9L5dopRbNhgdfpFmvFPe2aAWbafRMPTX%2FsQGOqUBAq3QGmWqgKZXFl9aO9LImBlELAIkzm%2FFQBjapQ8EeT3WBeQB6d9eaJSJMJOIc5h6XGOmJ5r%2Fatkn%2BvT95VrvenBKNVmSQMUy%2Bc3nPS5MmamHgjphOLvI3ivYN9I3gRS9IIoVXnM08HdxJXqow87tIMnfrUnZqCuBzO5Ula%2BPSlAvl8l9H%2BkhDXBqcWaaW4w2p6S%2FnBVDxBw%2BDhch6goLK35Frol2&X-Amz-Signature=36ae644504939b1f93a9ccd6e291f4cda7f6d3feffdd0edf30f0f9bb59aa9d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPIDSHO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCiv5RhAPYu1oF4eya9ju96qrFBPQbnLaWuP%2BcVzfn6zwIgeviVmQHEpiB3m4WR%2B%2F85Kq35QHZJ2KJnpLYIgpe%2Fs4cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDPo4WA6%2B4lihrfJkircA02fjCQd5wsbdU%2FF1o8BTGl%2Fe1R7Ly8bsSe0GVLSybBFeXK%2F6x6y4ENKUIjwgnfds38Ybwdu8iNdaaqiS7ndHTmaYD9cyhAFPNKLJxghuDFJ%2BMnljSdFMy5Zx4PTU85Dkj15jpRr5BUJPnJhqVTLTNqIJ%2BIPBMH%2Bpn0Xdbvdi7WEF0fkxt4XGcwtAh9C2Rr5Y00yIsRE39RGfOUm%2B6jiXeVpuqOQLedgtwd4X7UteUNIpts7D%2FuQXjqQETmHz1SKPpxCgfjKhhQN63MqQ7xPa45oQKepqurQOcggpiD14S%2Fp1iK9PEmx4DmJzujK1JR88qc0tf%2BM%2FQ3urFs%2B885ssdQhGs%2F3QcuIMyP1OBCTqN6kn%2F4ll9xsT1xAqvYAloPOjLz9t8%2Bh2Xk6SkHFU7IQ96dhmjeGH1BArx%2Fi1o5zJVCTwZVtW0bTmHqrNb1w37xbudEFzP2txwnL3rZugShoFw0jO189REIhGzSdIcYFaVDEaKBeXlhe8w0CFYN9LrMEVFFaPlmazHmxjwJmdD7s0mnOyXnARMlm6CnqmS0Zvm8KKLSDHBB9Q%2Bx2b%2FOI47udJTO2pTOXOno%2F7hfFK16Gc%2F0l5uhNS0wM9L5dopRbNhgdfpFmvFPe2aAWbafRMPTX%2FsQGOqUBAq3QGmWqgKZXFl9aO9LImBlELAIkzm%2FFQBjapQ8EeT3WBeQB6d9eaJSJMJOIc5h6XGOmJ5r%2Fatkn%2BvT95VrvenBKNVmSQMUy%2Bc3nPS5MmamHgjphOLvI3ivYN9I3gRS9IIoVXnM08HdxJXqow87tIMnfrUnZqCuBzO5Ula%2BPSlAvl8l9H%2BkhDXBqcWaaW4w2p6S%2FnBVDxBw%2BDhch6goLK35Frol2&X-Amz-Signature=8dce3b9580617a1c8095df90c6fa1d4278aa68684ed642a4aa5ee74bdb7e0968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPIDSHO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCiv5RhAPYu1oF4eya9ju96qrFBPQbnLaWuP%2BcVzfn6zwIgeviVmQHEpiB3m4WR%2B%2F85Kq35QHZJ2KJnpLYIgpe%2Fs4cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDPo4WA6%2B4lihrfJkircA02fjCQd5wsbdU%2FF1o8BTGl%2Fe1R7Ly8bsSe0GVLSybBFeXK%2F6x6y4ENKUIjwgnfds38Ybwdu8iNdaaqiS7ndHTmaYD9cyhAFPNKLJxghuDFJ%2BMnljSdFMy5Zx4PTU85Dkj15jpRr5BUJPnJhqVTLTNqIJ%2BIPBMH%2Bpn0Xdbvdi7WEF0fkxt4XGcwtAh9C2Rr5Y00yIsRE39RGfOUm%2B6jiXeVpuqOQLedgtwd4X7UteUNIpts7D%2FuQXjqQETmHz1SKPpxCgfjKhhQN63MqQ7xPa45oQKepqurQOcggpiD14S%2Fp1iK9PEmx4DmJzujK1JR88qc0tf%2BM%2FQ3urFs%2B885ssdQhGs%2F3QcuIMyP1OBCTqN6kn%2F4ll9xsT1xAqvYAloPOjLz9t8%2Bh2Xk6SkHFU7IQ96dhmjeGH1BArx%2Fi1o5zJVCTwZVtW0bTmHqrNb1w37xbudEFzP2txwnL3rZugShoFw0jO189REIhGzSdIcYFaVDEaKBeXlhe8w0CFYN9LrMEVFFaPlmazHmxjwJmdD7s0mnOyXnARMlm6CnqmS0Zvm8KKLSDHBB9Q%2Bx2b%2FOI47udJTO2pTOXOno%2F7hfFK16Gc%2F0l5uhNS0wM9L5dopRbNhgdfpFmvFPe2aAWbafRMPTX%2FsQGOqUBAq3QGmWqgKZXFl9aO9LImBlELAIkzm%2FFQBjapQ8EeT3WBeQB6d9eaJSJMJOIc5h6XGOmJ5r%2Fatkn%2BvT95VrvenBKNVmSQMUy%2Bc3nPS5MmamHgjphOLvI3ivYN9I3gRS9IIoVXnM08HdxJXqow87tIMnfrUnZqCuBzO5Ula%2BPSlAvl8l9H%2BkhDXBqcWaaW4w2p6S%2FnBVDxBw%2BDhch6goLK35Frol2&X-Amz-Signature=0276783224d40f00cbbaf294a5761cb16a1a2a1435a03fec13532b53b4eba981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPIDSHO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCiv5RhAPYu1oF4eya9ju96qrFBPQbnLaWuP%2BcVzfn6zwIgeviVmQHEpiB3m4WR%2B%2F85Kq35QHZJ2KJnpLYIgpe%2Fs4cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDPo4WA6%2B4lihrfJkircA02fjCQd5wsbdU%2FF1o8BTGl%2Fe1R7Ly8bsSe0GVLSybBFeXK%2F6x6y4ENKUIjwgnfds38Ybwdu8iNdaaqiS7ndHTmaYD9cyhAFPNKLJxghuDFJ%2BMnljSdFMy5Zx4PTU85Dkj15jpRr5BUJPnJhqVTLTNqIJ%2BIPBMH%2Bpn0Xdbvdi7WEF0fkxt4XGcwtAh9C2Rr5Y00yIsRE39RGfOUm%2B6jiXeVpuqOQLedgtwd4X7UteUNIpts7D%2FuQXjqQETmHz1SKPpxCgfjKhhQN63MqQ7xPa45oQKepqurQOcggpiD14S%2Fp1iK9PEmx4DmJzujK1JR88qc0tf%2BM%2FQ3urFs%2B885ssdQhGs%2F3QcuIMyP1OBCTqN6kn%2F4ll9xsT1xAqvYAloPOjLz9t8%2Bh2Xk6SkHFU7IQ96dhmjeGH1BArx%2Fi1o5zJVCTwZVtW0bTmHqrNb1w37xbudEFzP2txwnL3rZugShoFw0jO189REIhGzSdIcYFaVDEaKBeXlhe8w0CFYN9LrMEVFFaPlmazHmxjwJmdD7s0mnOyXnARMlm6CnqmS0Zvm8KKLSDHBB9Q%2Bx2b%2FOI47udJTO2pTOXOno%2F7hfFK16Gc%2F0l5uhNS0wM9L5dopRbNhgdfpFmvFPe2aAWbafRMPTX%2FsQGOqUBAq3QGmWqgKZXFl9aO9LImBlELAIkzm%2FFQBjapQ8EeT3WBeQB6d9eaJSJMJOIc5h6XGOmJ5r%2Fatkn%2BvT95VrvenBKNVmSQMUy%2Bc3nPS5MmamHgjphOLvI3ivYN9I3gRS9IIoVXnM08HdxJXqow87tIMnfrUnZqCuBzO5Ula%2BPSlAvl8l9H%2BkhDXBqcWaaW4w2p6S%2FnBVDxBw%2BDhch6goLK35Frol2&X-Amz-Signature=df39b32c4954401ba36e565718b332432f06d0a04c9d43dd944f7f12d17c1d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPIDSHO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCiv5RhAPYu1oF4eya9ju96qrFBPQbnLaWuP%2BcVzfn6zwIgeviVmQHEpiB3m4WR%2B%2F85Kq35QHZJ2KJnpLYIgpe%2Fs4cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDPo4WA6%2B4lihrfJkircA02fjCQd5wsbdU%2FF1o8BTGl%2Fe1R7Ly8bsSe0GVLSybBFeXK%2F6x6y4ENKUIjwgnfds38Ybwdu8iNdaaqiS7ndHTmaYD9cyhAFPNKLJxghuDFJ%2BMnljSdFMy5Zx4PTU85Dkj15jpRr5BUJPnJhqVTLTNqIJ%2BIPBMH%2Bpn0Xdbvdi7WEF0fkxt4XGcwtAh9C2Rr5Y00yIsRE39RGfOUm%2B6jiXeVpuqOQLedgtwd4X7UteUNIpts7D%2FuQXjqQETmHz1SKPpxCgfjKhhQN63MqQ7xPa45oQKepqurQOcggpiD14S%2Fp1iK9PEmx4DmJzujK1JR88qc0tf%2BM%2FQ3urFs%2B885ssdQhGs%2F3QcuIMyP1OBCTqN6kn%2F4ll9xsT1xAqvYAloPOjLz9t8%2Bh2Xk6SkHFU7IQ96dhmjeGH1BArx%2Fi1o5zJVCTwZVtW0bTmHqrNb1w37xbudEFzP2txwnL3rZugShoFw0jO189REIhGzSdIcYFaVDEaKBeXlhe8w0CFYN9LrMEVFFaPlmazHmxjwJmdD7s0mnOyXnARMlm6CnqmS0Zvm8KKLSDHBB9Q%2Bx2b%2FOI47udJTO2pTOXOno%2F7hfFK16Gc%2F0l5uhNS0wM9L5dopRbNhgdfpFmvFPe2aAWbafRMPTX%2FsQGOqUBAq3QGmWqgKZXFl9aO9LImBlELAIkzm%2FFQBjapQ8EeT3WBeQB6d9eaJSJMJOIc5h6XGOmJ5r%2Fatkn%2BvT95VrvenBKNVmSQMUy%2Bc3nPS5MmamHgjphOLvI3ivYN9I3gRS9IIoVXnM08HdxJXqow87tIMnfrUnZqCuBzO5Ula%2BPSlAvl8l9H%2BkhDXBqcWaaW4w2p6S%2FnBVDxBw%2BDhch6goLK35Frol2&X-Amz-Signature=d0ea0ebe2469804e463aabfa36ec89303fdfb963e4d3a9d5a472e4289e7e757b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPIDSHO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCiv5RhAPYu1oF4eya9ju96qrFBPQbnLaWuP%2BcVzfn6zwIgeviVmQHEpiB3m4WR%2B%2F85Kq35QHZJ2KJnpLYIgpe%2Fs4cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDPo4WA6%2B4lihrfJkircA02fjCQd5wsbdU%2FF1o8BTGl%2Fe1R7Ly8bsSe0GVLSybBFeXK%2F6x6y4ENKUIjwgnfds38Ybwdu8iNdaaqiS7ndHTmaYD9cyhAFPNKLJxghuDFJ%2BMnljSdFMy5Zx4PTU85Dkj15jpRr5BUJPnJhqVTLTNqIJ%2BIPBMH%2Bpn0Xdbvdi7WEF0fkxt4XGcwtAh9C2Rr5Y00yIsRE39RGfOUm%2B6jiXeVpuqOQLedgtwd4X7UteUNIpts7D%2FuQXjqQETmHz1SKPpxCgfjKhhQN63MqQ7xPa45oQKepqurQOcggpiD14S%2Fp1iK9PEmx4DmJzujK1JR88qc0tf%2BM%2FQ3urFs%2B885ssdQhGs%2F3QcuIMyP1OBCTqN6kn%2F4ll9xsT1xAqvYAloPOjLz9t8%2Bh2Xk6SkHFU7IQ96dhmjeGH1BArx%2Fi1o5zJVCTwZVtW0bTmHqrNb1w37xbudEFzP2txwnL3rZugShoFw0jO189REIhGzSdIcYFaVDEaKBeXlhe8w0CFYN9LrMEVFFaPlmazHmxjwJmdD7s0mnOyXnARMlm6CnqmS0Zvm8KKLSDHBB9Q%2Bx2b%2FOI47udJTO2pTOXOno%2F7hfFK16Gc%2F0l5uhNS0wM9L5dopRbNhgdfpFmvFPe2aAWbafRMPTX%2FsQGOqUBAq3QGmWqgKZXFl9aO9LImBlELAIkzm%2FFQBjapQ8EeT3WBeQB6d9eaJSJMJOIc5h6XGOmJ5r%2Fatkn%2BvT95VrvenBKNVmSQMUy%2Bc3nPS5MmamHgjphOLvI3ivYN9I3gRS9IIoVXnM08HdxJXqow87tIMnfrUnZqCuBzO5Ula%2BPSlAvl8l9H%2BkhDXBqcWaaW4w2p6S%2FnBVDxBw%2BDhch6goLK35Frol2&X-Amz-Signature=3d9ec686a544bc0620d5ccd5a147c768db0f28e6916044dce39196f8654b1971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPIDSHO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCiv5RhAPYu1oF4eya9ju96qrFBPQbnLaWuP%2BcVzfn6zwIgeviVmQHEpiB3m4WR%2B%2F85Kq35QHZJ2KJnpLYIgpe%2Fs4cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDPo4WA6%2B4lihrfJkircA02fjCQd5wsbdU%2FF1o8BTGl%2Fe1R7Ly8bsSe0GVLSybBFeXK%2F6x6y4ENKUIjwgnfds38Ybwdu8iNdaaqiS7ndHTmaYD9cyhAFPNKLJxghuDFJ%2BMnljSdFMy5Zx4PTU85Dkj15jpRr5BUJPnJhqVTLTNqIJ%2BIPBMH%2Bpn0Xdbvdi7WEF0fkxt4XGcwtAh9C2Rr5Y00yIsRE39RGfOUm%2B6jiXeVpuqOQLedgtwd4X7UteUNIpts7D%2FuQXjqQETmHz1SKPpxCgfjKhhQN63MqQ7xPa45oQKepqurQOcggpiD14S%2Fp1iK9PEmx4DmJzujK1JR88qc0tf%2BM%2FQ3urFs%2B885ssdQhGs%2F3QcuIMyP1OBCTqN6kn%2F4ll9xsT1xAqvYAloPOjLz9t8%2Bh2Xk6SkHFU7IQ96dhmjeGH1BArx%2Fi1o5zJVCTwZVtW0bTmHqrNb1w37xbudEFzP2txwnL3rZugShoFw0jO189REIhGzSdIcYFaVDEaKBeXlhe8w0CFYN9LrMEVFFaPlmazHmxjwJmdD7s0mnOyXnARMlm6CnqmS0Zvm8KKLSDHBB9Q%2Bx2b%2FOI47udJTO2pTOXOno%2F7hfFK16Gc%2F0l5uhNS0wM9L5dopRbNhgdfpFmvFPe2aAWbafRMPTX%2FsQGOqUBAq3QGmWqgKZXFl9aO9LImBlELAIkzm%2FFQBjapQ8EeT3WBeQB6d9eaJSJMJOIc5h6XGOmJ5r%2Fatkn%2BvT95VrvenBKNVmSQMUy%2Bc3nPS5MmamHgjphOLvI3ivYN9I3gRS9IIoVXnM08HdxJXqow87tIMnfrUnZqCuBzO5Ula%2BPSlAvl8l9H%2BkhDXBqcWaaW4w2p6S%2FnBVDxBw%2BDhch6goLK35Frol2&X-Amz-Signature=c9549d680964b0090dd53cf14cdd403863cec374c1efbacfffdc9716df0db095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
