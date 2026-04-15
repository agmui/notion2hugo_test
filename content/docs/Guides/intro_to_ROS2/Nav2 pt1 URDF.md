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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=beca5d81c158c55c87d0b5dbefdcdd2fccd2446e0abbe896e95be936e7a1dc3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=0a4edb9ad07a7944682d7dc75b19bb78aab4a82dbbf24242025c0d2fd052e309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=c23dbcb6a121747ead8dafb80d158ed8a0cac00b18b0c1c55109055be3035f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=9103351e10eeabd73f2c9d2395b0ccb540f3c2115eb90a11754397f2a49a062f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=6a5826d7b610f20ed98417287e055e444a41bd70796d32e297ae85f7f02ac29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=9f4ae37e2a9d6055c3c4aaa2033b82c0955388d2f06bab8edebce2f32d573b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=720821c04747c8812ac29708ba56ea6683a3dbfd6614f1021c6cdf64119054e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=a7520393f7892ca0ce2c2319f17aa291d8ccc559839e79b8433017b42b074ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=e03fff8a5074ad715666c46f853e1f9f66622dd2f66b2f12d2bfdf8716e47bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=c7a694ea912ac963c4864d5331c5bddac7356e4c1170c754e404401903d22951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S35YFKW2%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4DGuo4FV7Ts%2BP%2BSKmBO6iDc5idwrWHJNnczl4Djc%2FqAiEAhfqN8s2ZrVR%2BvBVLpCn9Fr2Dh1jdyl4vllaZeIV7N%2FIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLykOhLFBqsDse%2Bc2SrcA9AuH3pxR2EBJ29wYKuzzDqOwFu5aSlIoTNN6xuPjUjcXheQ%2F6TLsC2CNzrc4zpdQtPSzint7ZtyXeTJw0RzEhPbbFN8DrCAnCGikBIzb%2BQKx5z7EDJ3IpWeY25Qrf7nL1Gtd%2BFGZYFdpuF%2BdxKuGdVTIVqV0wgrNAQCSbmHeIkbmtoOgrvtlxGzcpaHSgLT%2FdVfd25Mu0UxNpA82hSfwYL0vJRc6Pyk4afDb21vqns%2BnRrI4k2X6VmEG%2FiUX9FNp3eaNfnMv1d42Oezr0bwxrKiAsuMdN8INaFAnwXL3wkwKxLPquxfCu6hrrA4JeWOQ1OjlU0hC53UNHn72Ony9w24Iwzv5IknW2dBMOrKPUadWgqePLl3dnVZi9QuP2zuDAe30ZsFUMQ%2Bj1S9grB02Id0kIOoFv0Uu6OhWzA7Fu3Wls8NCTS5rZpU59SvEHwdPuK9sDqLlgfpy9IghcgdUEGjnYVAVHbfgMzvFs2miu84or%2BEKkO8aQ%2BXf11nrF2iHSIDRnu2G2G3Ycxh%2BcI40KmYsDLWwzYR6AISk4dXStIExfAmNJuIQGO%2F5J1s2mNmPMyOywt0tg67HNtO2L9uz2ja4kHfwrrnvaBjzQmJUtOl6xVyfOtGtpr%2BJmk%2FMMzj%2B84GOqUBOGXwqGa3q5u4%2FYXjh7zcReBDAHSq96%2FZ%2B9g4QkXRlOqdIhNm3sn04cffRwTHRTQ6F%2BCK6iFh5W1p3Xm27rSqapSA3vT8VzOjlr7FoUjkcAbKPjFXtdu7vbWEKDVaCUfZeKlPEUhCD6YxBl2B%2B4xLZ5HEe5cHIEvZqx8bej%2BeKtcIkiKmmTpSPoYoO%2Ba6nbBdaGdMVdkd3JLX0cY0F3oGMG7Wn3KQ&X-Amz-Signature=12823673fac34d605df86fe4ba64fd84a513d3d92f0cc14828725ad8f1f17fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVEKJYZ%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4amGdrmF5EorlbR9LOdCzg6K%2BxvuFwYw%2FlT7%2BKEoF5AiEA2xnGn9oQhhskxB9tQFic2mfzRxBiWfO1YloPcwQX2XEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeplNLXKc%2Bj1iKbMircA441O6ZzT5vpB14bpsELdVerPKyiSfvp5R7vHgmEP6LpcvgmOO3JKsPSDR%2Bqo6kLoisyCjo%2BGOvcAaXMjwGnMVDtVC42b1z80kbKpFsFuvZH5ogWqX9Tq08ctpcwjJ%2Bqhvup45PaMMmpPA9l1hK9vmEtEvvlVihhAvAo4g0Uf9c2uA74q8av5LBorX%2BSYmVtgrp7Z6dBFIqQfTtTehITpLUO9%2Fnu%2FbL53%2Bz8XJ9cCmIWOAFpLwES4geFkfMkrt%2FX2QAq0TY4A9ejVezM8A0TQdB5HPjfih8DbfMJGZUK6tNN1dqNPUqP1CGZf1KvFd7jCmHyHTwmr5B4OSUxt%2F4x%2Fmel79kQqKBwGryI%2BxXN7agGDVNw%2FRZROwoGPvX4OGMyeynIxFiqZU%2Bjd0%2BrTLCfsT%2Fv2jHfOjqRkR1w30F%2FwnBvQNougMrCfOJU3Od1%2Fk0NkZ2q3JeJA0UCQ0AmpdWPnxH6k6G%2FvZHiB15SHZNFmzbNDBrd75Fdp1HaQZAohgA3Q1WV%2FG2bKFmFCnraZFwPxvOA%2FfxOaDUbJX792L%2F%2BkIHXUzt6xOGtTFdBXztt5qPvcWabesSQhRONSjws65Y6ZzN9gBGgcpNjL2oXOOhRYPAM0N9o2jeQVwcou3%2BCMNbh%2B84GOqUBqRfRb9z6utu55fV1wOy8GfOncM7%2FJZfQv%2FyDPNlcA0AYPbFUVnpCMEGLLwczNbjorP%2BJc%2BSTk48JRTCyOUXfXZ5951FjX%2FKFoNJNDuOI4ixM5z6SRlh6zLI3NLUCHo%2B%2Bx%2FPg83PBlAx3dMJYbNfw6ndKKyG6748Qk8PSfbVZnILi2ftrup6QttfI0K1XuM5GiCZNuakDCees7J2zvzTtLlmKyCEj&X-Amz-Signature=13c9ae82c5124553a34bac818a7c04b14f62724d04a7e3acba80c347e999dad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBK37HO%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLLFJ6oMjv8uIYB4gSfF7%2FfprRF%2BQ1HkmriooBxJpOKwIhAIc6zsVGfIfHXdPRozzIZA04Fxh%2F%2B7OaDz5KQnzIslEyKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOdy1U1fA%2BNoJXRGQq3AMs8HDDrXq0BsfEaiCx0pXgSbWK3CA6%2BMSjPaUYlpmkD9UGJs8f7JwuooRH21SwTPS5cs6g8yiGGL6gnWqdRn31W6ZP115i3VCY7SnjOVK0gtftzLihWGeukbqOuaoqf35pPWjnrUiR0WYClX2VaLhoWbBtfrLnKssqsYK0cc3ZYxF1zTxEH3RmeaBRA70LFptJFaX8pDmuG3iMPTsfDA1ISFac%2B%2FgmrTvoDpfKyNhJkUsYkDqZJzqBZlXtE%2BHP%2F7RcI2CmnETW2k5zxglbrajOPuwyyDofVUk0V%2BQ%2BJhDuTvuWAbaOe4Ml35pM1%2BfyjZR3vAdLGLVZVhqe%2BXz8i3kCUUd8HnUaYtIql5P2g421D0qHe6s6JHbC8Z1bkFa7VEAPKNNuveoJxAlR5bAYMbieKQuXKOi%2FAWBA8AXB3XB2HI8zGNmqoKyvJkmMVaPSIEyLPcYk0zlQt1Erm%2BBQ18hohTqv9ivQI6cOKJL2sL15JpAdMO3ljV1Cwv5B8FupKDx9AhZntHKLdhzGhzu9gvpIoGov9xBCAvU4L3U5yJZ4HyGK%2BfFNeWWlpijbdkfKwz8QwkpvKLCh43hDMth8MhTHHLfDlVQNvBU7GrMbjgbk7GcQ0ECAV6F1n85VaTD04fvOBjqkAS2z1iafmBGPqGJX8190DUu5VXykxzT6z6n55ioRU89gjK1MdxWWnkjeavvxQ5RdDQWps1gQUSz0YC%2FoTQeBOwCdDIwCmailfXw9A4WxlPb6KE%2FQkMMztsk9lZ7cVrNWlGqwbm6AWOvRQTtdNsAqk1rKYEJRnx6Elu428DksPHpWxdLBKubrfHMW26afjXx49vlIAX%2BvyXTuyF%2FyLxbZ2Bv2uagw&X-Amz-Signature=bc29eee271eedec858ede69b612f75127b7b245c15750e6aee7f8aa7c9211617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=1a83d29d6be2c367ad2345c68416b5b92420d5b33ac1e7cd65ae2f8cf19182c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPR6NUOC%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqpCndrv6gCDNo%2BDoXIZDxKVwQ8k1qouwE3kThLB0X8AiAB9EPKv41TfBI9z8xMv6XtS7bAvtcP%2BaXS4B%2ButisYjyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAkfWNANMuC%2Fg%2FcmgKtwDgvKMT6j4InD3yushca9qfTBnG%2BjTBxHXC3KYTxl57qzUNoXpRCoeBnOA1M17Ngsj4lIK%2FimGHem8jhsYS%2B8C7OyHjYwN8%2BLzWiDmdS2fqaqxzzq2QlS6LeOXuBqPb2A0bWjXmbsq4csGI5DyCyq7RfhyndIPHtgdfBu2TxQDSzceZMf0qV4siLW%2B2yo0Cf%2F3MwizBD%2F91sT88%2FPq9x911tvt7w6vBa%2F1jZ9kQc%2F15ZEGqoUF6fEwUpI5vlrB8j6%2Fv9mnhWaqQ9DnXUNLPnIKKz%2BNjXlAFYKyxdOsx1SRC5SjzPZUM%2BUSSPG1L1nc6Y5OOVasNRL79F8M4PYqyD8o3nGzl08A4FsZYtFhvtMMQ9DbGaCM149BoJxVJck82iZqVzq8oVg5FA6cxsmcKi843XRRPlzh9l0KEgv8GZK6tespkQSy2pk7O9ZEr8MNhrJUPZLcsi4WASSe1DkqHSBrRPOfZ4EaeNVf%2F553nTPSroDL1tq6KhJUzg0mJZ0QiIqVxuldU9mUbOcKVChW%2Bu30UrSlTbpzak4YJPqt2n81nFobPpLNqGTMcWpasQv51jE0YyoAuZBU56kkvttsDRYXMIHyifFmfD10iT5KETHQBGjiAem8beGm4IyBSOkwteL7zgY6pgHPB2iiiIg03WTXRl%2BZB6xdybRdEEyQCFkzfKjW6ZMoaE1%2B0U02%2BCdvC8JI7%2BgHnJMyiCc7NCpZRn6HJZksslJ8eedVREw%2FxvY%2FhoyykkdZ8fy6MC4vV953F89mZ5fQ7Ca%2FAQqiPHWpuFmVYqNAJzNqo2jS4EOUYPRTKlJ6njPiSUjbi5IzkWJdBrqcpCXwMz6r1TwsU6syGH1nVsZQGmwpYRrgVOCN&X-Amz-Signature=c0aae5c387e4d74013f828706a66f8b9b811e32aca330150d5b14fd9d3a2809a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=d3c89c3a07abd49b7f8fa98798b02a569e8fa926c27c615d94127d6c160f06de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRZ2OZH%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdQND7BZ%2BPzW%2BePT%2FuOpUDKILQjHld%2FWw%2B7KTHegTedAiBABERH4kGuDsHU2d3AC%2BWedR%2BEdRi22dggJxdOO7gWkyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAi8BbnSEfGFbCYe%2BKtwD2R6QWNgfrroYCjz84EvHdZSPzt%2BPHMhSdXrFi1ekJZdVYW6fMDCouthfPiV6qgVVQA6W0uQKfg22WGsSKgPjOgkCU%2BnMFvdRA8Ommew9fRhC%2BmsQ0VrJZktF0KVl8HhLiAowl3jvPPHI7i9vCaSY8CAQbwv5e0aGUeHQSrPSOKbQNvNvbFX9H4Xazlhty1zLX4d27GujnZlPxdtDEiDH7dZvzRY%2BoFtWpAac9yjzJKY3XhV4adjIM0wq6e0jx7f3ko4ybDHFMU8bQQ2c%2FHLLAzG%2FgO%2FuKDa%2FmthqJqDcH0QjjN%2FPBX7XfQA82G%2BWaL8TNVq%2BtfWEnN9zat58yzUtamRtHaexMYPtHbTZM38grb4LvjukDrAMA8rdMPRp1XDTk%2BljeVVaRSYkZLXJXoZEe1qYQiXNPYe0xNF980TcXFeL%2BsJC41V3j2%2Baa9lD8IfMgjdu9vpXkn4%2B2wUl80lf2THBPLSRIrja0PhQxUCZnr0t8fYAqdgjgi2lJyqBzkp5DpCbnRMgldyD%2BvKBH7qONozzUJuzhK2h%2F91SV7yeK%2FIpblTGUn8%2FU5CC%2F5MkBTermMgZ7vkYWbu1kJIekczhiAmmTRzm%2F5MCYIc%2BDgPkYXo2BIno12YE5SqnPrIwjuL7zgY6pgGyhuETiAY3irXotJVldNceiRQYGMtEhz1EWwxjjxudho1s8ufnU1QYJy7FWX4LXdNLiAIlOZNVJh9hLJcUhAV4EQhXekRSx3qnFWk7JPF3Nfw9NJWySWfDYkmUGwuBoZ2tdWWtBJXb1p2P876CAnmCSiXSnkr%2F84KKWb3KOs3qJZc1rV9MRXVIXQl9UJR1CiBPRYOvXI8VR79gIBjfM5iHMmqn%2FhEa&X-Amz-Signature=8dbd972dea76f38180075400e9df75162bab5d03e256f8995e8236d63e78c483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=15404ab17423fe668edbfa420ebfd7ef27bad0283d061d5251a7ae58d4c6d7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDXUKJNB%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGL2LfQu3HNajYcHfc9Ci8d8XipErh7YlOQJJNZYesrJAiEAgTeriDlHWcKO%2Ff0CHELc0M2YKA1Wy7i8x47bZvTcBWEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMoPxjHx2N8lY6pPCrcAwiw4WRvxn0nRpNJdOK9RJ5ONGW0p7uhvrxl8IIPjbFjSM4VQrJCKOkPxfsEvvQO68dFWidelfvr7GLKllxcxTsfygvQEdE4WryvrdJ400gFxIFNcgaw9t6czrXD6FZoE3JvwPo2fzYKD4VNeJNjbj1POE0eqxQvKMbFglq4qwQpDPFaq9qaRazVEi8nRe4mldpMWJLuf9nPyUMhkpeBZohQqoknThjSx8vbSDuOs3O7n48l8DSgcTW05RauJGvdZ68UhXi6HjNNyhd5VXz9Gmvv9jc8Tc4mXeT3hFexvlITCqw9INFWUTsOTqoCtQQL0NkYEA94B6hJZDdXWWRl%2Fta%2F0FNge01k1hwSKc2C59J%2F2PkAxMtCOnWN9b1T7VAaaYWc7ztrq%2F2u3xtozkNcRYEGUDvzr1t2zyy3A0RgbN7IEo7hOsS%2BlHwK7GNAZiXkjW6wsTxx8nrlku5BXl%2Fu%2BX7sBgs2dfZtSKTMEpuJvKCpmqPT2IGhUyrwTCF%2BTZB7t%2BY7x50NuOcyVrmzodieozKpJ46rgHAqlBx8fSkbrM7TjmmJrOZcEqktm38zVfV4%2FGxaW7q3m2NC62gaFD0kCtU2KZC2GaNlQNQjEUK1SKhLuc%2FaAHSyfrdGfhkbML7j%2B84GOqUBM0Aqjwi0vnsVOSPwoU9tiriyg4tR2%2FdPXqLlvzMr9Mp3i3RGhczd0M91QGGGSLCC1xMQ1BWkVRyvuN0k45v01Pb8CbHTMSW0CtYz0X%2Bka%2BDKhOCSvAa6aZMyXdJhLoGS2vARqMRhRZ5jzq5JrL8FEt5cqfGke25WwwIk4CIVkDeluln92Xo74GLq12FLbFx%2FxSb%2FP%2BUDuSQe5gc6a9K1saKT6lXn&X-Amz-Signature=ce5d2151858b171a84334218420887090f960af441886623534d9e08aca52f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=dd1624cddc8c5b558780d1dd22a785d5ec2964aa3142f0962799d4ca8b1fa5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQHTDZR%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvpPA4Afx3DVD%2Bis3A7RHtQBc0NJjHOzMUQ%2FPIeON2SQIgM5JtFfbcOfCOZ0LMbI0HExjBlc8Ss%2BiJYuT2YcJ1zqsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQ%2BZOjTbF11g3tuzSrcA7DVwmlHMsJHUAqEloBqDu98byKHPRtQ1mPgqm7hJAy1QKFPkUUjLAsFoYCFQqCQcz99O7j68BEymCtehBLirH8F6R9HqC1w1OkzZZLEgd3i6pTx0aqWNAPJiALRGGMNqnj37TpgzrJueS6M9pZX2K%2F20FjifQjYNZjBpuMf0a7Q4NYcfnRqBEgTwfCqPTbq1kESp3V315RKiZAvGXxG3lHIVJWY0TDt%2FMknTz3J11IoTbsT4daX2rB1yGhUCGYCf6oIG5aRzt%2BZnNV6c5KBcgI3phRvmxeWfFBjFLnMWQYMtMJt%2Fa1Wlb64muG0D6kNI3WQSjz8YTna08eMbuG7JcpxDx2LM6GRhxrztF8rqwc4IQTdmFsXiwQejXV8x7yPnje3eCrYVVBLnYNxDSs%2F1A2pKJ5BWd9nLBea%2BuiIHBjSkoTO6rGLStq9lqyTccmrkJM2g%2BB%2B5j2t%2FiJJoQCrsHgAypZpMxwsiQMsAgsjjb9kAh3qeONTJQ%2FZxUlW0K1A7IRnAS8B%2BZ3QLGntvxwlOjbTsROvwEy259WxXkbDZzGpXYjFUewLUJj4Fvu4nlikYpdkSUIp36qo4E1fXLoxCYpKRYZB%2BZ6U%2FFO2i0rgx7ex2oQTVMaq9HpF4%2FiJMPDj%2B84GOqUB5T%2F7FaU1OrgGUcU%2BU%2FmtO7liV3hqc4Zr9AGuZnNGDj59COT9QTnIYg0zMBO%2FlL0uwH7rN6%2BMnHXf%2B%2BD3wVTMbRv9tJgfORklzew3rbv3yFeniuoYRX%2BgBVAYXbrHFGB8Lz0dqD5lO%2BwtgIoINovzXs83WZ7Z9caCZH4lpTwAto2hNq4ctzn%2FwH4DRBg3YF4bDnvgnWGq7yls6XSX8aIK20TGcql2&X-Amz-Signature=5129ea88c76964f016dd4da0d7de81deaa05c86698b2bf9c4a823afd8957f366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=6799dbd631af0858c0c7ae303341d5ee51b71f3d7690da8abb002c493079e64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3OOAP57%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy4VJYJDEydOJQTzKkleHzsgz6KkoTUdexLZQv6S7YAAiADnwO%2Fbix59e%2Fwzo1LSPEmevxNbqrFVN%2FEspQNmipWgiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtVnR1XHX9YP2mCqAKtwD2bXAwUo5v0lPVL%2FVr0UxldqCiAYKSwwg2DFMPgcLCgRRyUBF5eXPeBXRBb5L8yxloy%2BBQskYXuJnfIYlOfB%2BTo4hDtYuDko2Gzt%2FWFJz6Tq%2BTSfuxrZ0unHdqzVgUZtV1JPAVFM2UL65FTVvtszR7DLGy7%2BScyRKAJ4fe2ZCH4s4SgdcxqbnckrwgYukwRXteWOHCQi9J7i5qOdoeztqNR46hJHeXW%2BERV1PqRbkxzcGCMFRTc7IT1Yz0D0RtoPQmDE5LF4zHaJOACZj0ByNTmyR32l01W4bO0h5WnemwwWKXbQKkWx41KTQ1RqVTuYqz%2BOcCrgwGf4xNKzw9s4zzp%2FnSJzjomzH9PVfjqx4F6t8uc6k0bd9WHls1Hppoowl%2FtHM7EQGStlbKZjz0uQmZ1dfzhiO6iboV%2FOPirmCk3sq%2F1Zv2SYXyHO%2F6Lag0u5cgtxJZt9DdGeQk8HcQdabGwVgZwap4SH%2Fygc08MJcEKy5y8OQH8zZ2JfXMaB%2BvF5FF0SUg0%2FNe3qzA%2Bsyy0qysp8%2B0pbHogcoVXST%2FOIapDmhTaePEVmL2bdIr5mgPmOqY7XGW7Lng9xKPLCoKJFJ%2B1qL9fqfErf6QVK83w2ignzoM4RZKMpIt6cxeR4wtOP7zgY6pgGjNfp2tkk9Oxn9jczwjMIPNpk4r68eng67dfDbKK4sajkLPgvDkuseecvOjjBzrZ4oPQbuO9eme8gFVtxcQ8Gt9LzqpTMTet0IrV2oB1v6FSPbuY9M62E1iZxbxP5a1EfK4Cu67ggpWxUy4Mx8USKZnIsLYOCbXi%2F4mNViKWdERXa22rkLll77tRHclD1KJvlQBKT5Ro0B3POMMCXfzAeqTAIRN5Ue&X-Amz-Signature=3970a26ce82ace63335804ee628d2f936947406018d777920d45e70ea510d464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VAJDJ6C%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZo%2BySW14To12VJB%2BfkJeaJmfjTz1BoblzGIK4dx91xAiEAxJlQZgJU4FnakpBusz4ekCJvp%2BDjMXw4%2Fii0CmAVCtkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES8vX8MWclMlb40vircA3lq7TRK%2BmNSgoXndeYgSFKu92BA9fnmcTLMjC17PfUbAZZTvUkNRgFBtKogegx0s0QyQLcaEWD6jgAZgS7D1WFGRqZT0zso0e3gTV5GvUdpSIa8jldbmKzk0hPj%2Bxtw0jHWbm01us8TR1Mydq%2F3ZWjevsL8ZaunSeeEnX9qKqgf%2FIQ6zd0eZeTtkPOWSuP4e3fL7wCEqY7UdCHIwZHGGfjMgjYsZEk2bOWur6tO6%2BeoDkDEkuG1Ub4knk%2BTHzGpsLsjzwUZo44iTUEeZ6jPTWRQ2A%2FeQi%2Fd5WNwwzRJKYNYu39I9G6Y9u%2FbCdRNHaxxOY%2FRWKrBfOOXDqOA3DGUfg1i%2F0aiZlCSxbtIIx8PsOg8asFgrpOkQCtWr1jMwapRKYE9BLAAzVMSMHHBVU7hOiNx5WR53fmfSAClqrAbcPDrw4FDWazdwaeEagSCwzuHPLHINAjAWOQFAoQzpIlJcG7Yjw2KfAR9Rp1ZZH6%2F8kCCv0Pk9sIdTiSIE8EQ8QfnACph1vgH7Jah6ON6EjPuj0JHh%2FsjKvF5mTHBJEk7f2Nku9snoEOMJE1AzlMVV3512Bs40D7St82aSGjXnn5y%2FFj4B6y0mkKjtn2lcNBLMEwkFT5eqkaqBCw6U834MN7j%2B84GOqUBbFSLaRlAzIPDx35gTuIKBt7%2FAcvbg7jWRBi2BdfdypJnZD9ybO1E0dSVEA8Ga31I4Q5EanAEH7mkx4vfGR1zA3OerthGRU1R6n%2FXNersgX8iEmf34VoK62ZwvhTijeUBHSucA3tq5JMzyw6G7D8W1AyrqyjoaTrAamNmiHpKEbbtRlFvvLD%2F2QO61FnVVC70rhqE2zHOqtSQURzv%2FelCnb%2FfEOw3&X-Amz-Signature=f9ef4c23265e505720d14839e78dd4fa1b3b6b89cdf1f404418619c487cedcea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677JFYFCD%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIVvHrIzV3uJch7EaZc068ovYuqy3cf%2BbEmsFRer6zTgIgHt%2BO91lNlm%2B%2BqlYbkM%2Fhlrl7JPreRhs5vZu2aD0Jqp8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcXZKjWiVZbb4%2FFyircA%2FKbPrdLFUTCQ9Uh6EXLRBTZFvAZB9a5s%2BGywR39v0rRitu5ej4uV7qT%2B%2FqvISBjBpQP3UWQfGsdn%2F7wiXGaBeOTZAHQQkSV%2FPo6xjk9FcAE1yIcJloQype7U93Jal52EaZnybqEBFiSPn%2FCIhzW8S%2Fg6ZSCpY3ILWHtUAIlr2RG21q9XQAbNWptReKNglTBRtxiQrSkQfvYZTTRMseFsySgiXjzDGaOpH0y%2B6x9CVXUDydEegUQzxnzwsarJt9Un1O%2Bn6kZ1hhdT9CTkaGIEpcxV%2FChdXb7axYBkA7NR1E%2BkCk7yr6eVfs4HyGh%2F0K7%2FpyMfDSEowV8Z6yBHCR0IfZZofR%2Bhub1KEkqKleZV4U1As8mVIByhS0HRfrqaK361LQuCpTOCbYO1pWAz%2B%2FLlJ0YK13yZIqU6rU5LucQZSvTtVpOijxs1ZBXIWaR6koTgHEvGNkWMNU%2FuctbWu0Z7LPoHZ%2Bj%2FhvTvEWmYbTerdM66WgiAOtew6gSpp8HFqEbYbEpNks5Sm5jPukeVAxMSwJYxcGmmFEZ9OSkZejssiqItC4S1cF%2BT6U4QghZ1fxDRpdEDbybL4bYgyCs88192ry%2BFtYzakwKMQKrVJq2KIQf6ydlrudroJqXJBVEMIjk%2B84GOqUBPZ6EZ4RIrPfqEcCrMILxIsF9r3K28Ae9kmUgVFb1W7zpiLPJd2g1OP3kz%2BL6prZReRTAu4JVCfQkJ0X2Ls06zAQ%2FFpJMor%2Fu72VaRNX9gu%2BJc5Rleperzxgx9vhKVoLTEgNrGwtXYvolL6I4kr5B%2FvbqXo71Fv7j8ytBFooirVk3KVcYh385q428VuE1%2FdaBJkjn6GTocgmFhF81KBRVlPPunEsy&X-Amz-Signature=40c1e9939e6af4769be61b9ed90b8874dd26ad283893eb3683ce14dd47997250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=e89f6f85c5586124fd10d8b4ecffc51063aea4b766eeb87f451f49eef284db55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDWDOL5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwnPefZ%2B2q2HcWc%2FvmGkV5MChflBMxIRWW2Ajrvwk6kQIgVfCZx6wFtVYMRmxpc%2FM264%2FTl21veaAoWcIyP1LRLwMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Ylm6%2BlsYOVrSmqSrcA3DwexsB6FqrXfHTzltkvuHko62PvW8tRSc8hZ%2FIIzpTqYyc7AKP0kZupLSCJnYPdRo2RWV0UIpjTC%2BauTxLubcycmEl6EAGo8vo6CnGTGYxaU5fmMyd1Lmq7YivFq1FtDUjOp457xLNnFh2%2FfRWVUBBFz9OOk0oxm6hen2QUG0%2BpdUXgJTCMK%2FRuWGt7JxvQydlCEMMMLZ4JRsMJnYbTcZM179oZsPYhsZVrmSFIJycmZNeSM2X%2BEs7HST1Vy92o40cfdcI9hjtIL3xx8g2tkz%2BicYl8wjNXoIqz0E3CFh0iQAOauDNMKl44qRmNZjRX7TJIH3VHMX9CrM13UrCPGtCVcrE1agIHxrzzGrJ1jKQlqc704uWA67EzM25Q7WRbw%2Fqyid09E4IoDst%2BjuPFv9QCRDoSkP6XO%2Bsn4fmy5HE8%2Bfn7%2B0nDJIxzKvUw%2B5OpOTw6ZarHBvHfSnhF6jnbPRzgubv0eLicR4Cfc0Uodo4LNO1tMj%2FLQmVXNWzvg84HjNFeUVZUqoPMOoieIHCirQks%2FsZwiKvWAGpBZwsDFjIO9aY4cF82JsSyW7E02Ipler%2FCoXECjsirMN%2BKslmYZeD5qh8vPDNRhAsD1djfkHEnUHjiZg9ZBr8zz%2BuMMrj%2B84GOqUBMk3GEHacd4JOckcDYWNOhl%2Bms7IUgGTYZ5w2R%2BKj7GOn0rqKhaNRuGeUUw5EGk61seGIRIPhH1t6VzMxs5vDjVWPL6Cn7RhatfOB0D1Uc2FYpl6yf%2BXMWPU4Fb%2FZ5vA6LzD4%2Bc7L3SIdV%2FcvlAZ3xRNRKFq5Se%2Bl0mi3dPeVz85CRhed7n1vydyBTOGli6mGfUbJbgIct3QFXrxezajVQRnPlZDE&X-Amz-Signature=ee4ea667dbb8218334e421a2acdb171aa33cea97daea268281ffa103374401bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC7TUWA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLJJKghU%2FE7kEBmmVhY9s3jUPQMDI3nF2%2BtCjsSQgoxAIgBBw%2BPP%2FHBLzMW0TEKoFejCL3Vw6hDu3kvPeXB42PTLoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0EGckQAKHtfntMVircA8Nv0xn%2FYqJ53Ze57l%2FPr5XtYSsUAdlsXbYaKP4SlE5TbhKoewRUWv8n7zUEWinzHG9IlbtPfSB8v0uw2PXF%2B2UnVh9ebH8FpD9xINDjcbLfpV2F7Paa6gW1CTeEtZ4Uc%2FnuwOoZbYQccv7OACcDTTUy%2FLM66d1Oxr8fvCHJT6Wb%2BwSYS73oshDPHVOYv8zjwaNMQGiqg1kaxKqU%2BRdnXRYrTHeT12DzR3LUAkmZkReJsR6nGGKabt3MhNQj5Sklt5QHuIbQ13MAXRifvrtBqcKkZdtOKxPQvZQsMzikrwChdu6o14ej7Q3jvIjFr6J0VgxSTDg0BFL5HlUqyCo57NxwLhaWlsb7VyUeUTujMwdzm6QqHGYwuyTpVn1HMmpFxQT7YmQdffBz7AQj0AF00qVCr2%2BLi7x%2FBXTC3rwryZBaqSu3k8xrNsBZX6AQp1nccWSXiNiQBX7E7IbZCvfGaDTN8QpaSZdDwqYF0gRPKJE4900odLpoWq66paBlY9AXjwc3qjYhhqLdD2OVArXhdVX0Op8sDJB4lDVKpVJEzTLSb3XNHD8zrmAkOeHkRrnOMyzCGMUT5UE70NtPy%2F2Zn6iVXe4sThQ0OjbVuEYXGOvssKNRluFSV6ERAOWSMK7k%2B84GOqUBSFv%2FePEkftnLBW64qOFXCpGsilzdk8hYqKDxzDAAx30ccJ3XRXs7zgF9STROOAiih9j39hYAqJ1rVm8y07mKLMcSnthxCp%2FHxPYKb%2FAB8xUkwfvRDuG%2BZXx7Zv2UgH2MUsrRh8ikIb2wDFi6mujGZE2KR8W1jVQwv5tBZiFssl9DgATqW9o8WR3VOHBPC22O93Umwc6jldDG4zKUviwLvtKGKXzY&X-Amz-Signature=61f2fc5de917c5546ad4db6160c825fda7c00eb19c0195667085f34b37bdf0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC7TUWA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLJJKghU%2FE7kEBmmVhY9s3jUPQMDI3nF2%2BtCjsSQgoxAIgBBw%2BPP%2FHBLzMW0TEKoFejCL3Vw6hDu3kvPeXB42PTLoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0EGckQAKHtfntMVircA8Nv0xn%2FYqJ53Ze57l%2FPr5XtYSsUAdlsXbYaKP4SlE5TbhKoewRUWv8n7zUEWinzHG9IlbtPfSB8v0uw2PXF%2B2UnVh9ebH8FpD9xINDjcbLfpV2F7Paa6gW1CTeEtZ4Uc%2FnuwOoZbYQccv7OACcDTTUy%2FLM66d1Oxr8fvCHJT6Wb%2BwSYS73oshDPHVOYv8zjwaNMQGiqg1kaxKqU%2BRdnXRYrTHeT12DzR3LUAkmZkReJsR6nGGKabt3MhNQj5Sklt5QHuIbQ13MAXRifvrtBqcKkZdtOKxPQvZQsMzikrwChdu6o14ej7Q3jvIjFr6J0VgxSTDg0BFL5HlUqyCo57NxwLhaWlsb7VyUeUTujMwdzm6QqHGYwuyTpVn1HMmpFxQT7YmQdffBz7AQj0AF00qVCr2%2BLi7x%2FBXTC3rwryZBaqSu3k8xrNsBZX6AQp1nccWSXiNiQBX7E7IbZCvfGaDTN8QpaSZdDwqYF0gRPKJE4900odLpoWq66paBlY9AXjwc3qjYhhqLdD2OVArXhdVX0Op8sDJB4lDVKpVJEzTLSb3XNHD8zrmAkOeHkRrnOMyzCGMUT5UE70NtPy%2F2Zn6iVXe4sThQ0OjbVuEYXGOvssKNRluFSV6ERAOWSMK7k%2B84GOqUBSFv%2FePEkftnLBW64qOFXCpGsilzdk8hYqKDxzDAAx30ccJ3XRXs7zgF9STROOAiih9j39hYAqJ1rVm8y07mKLMcSnthxCp%2FHxPYKb%2FAB8xUkwfvRDuG%2BZXx7Zv2UgH2MUsrRh8ikIb2wDFi6mujGZE2KR8W1jVQwv5tBZiFssl9DgATqW9o8WR3VOHBPC22O93Umwc6jldDG4zKUviwLvtKGKXzY&X-Amz-Signature=4853b938157d6f832452042d77eb2407da03c397a994dff317e85da7dc6b33ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC7TUWA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLJJKghU%2FE7kEBmmVhY9s3jUPQMDI3nF2%2BtCjsSQgoxAIgBBw%2BPP%2FHBLzMW0TEKoFejCL3Vw6hDu3kvPeXB42PTLoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0EGckQAKHtfntMVircA8Nv0xn%2FYqJ53Ze57l%2FPr5XtYSsUAdlsXbYaKP4SlE5TbhKoewRUWv8n7zUEWinzHG9IlbtPfSB8v0uw2PXF%2B2UnVh9ebH8FpD9xINDjcbLfpV2F7Paa6gW1CTeEtZ4Uc%2FnuwOoZbYQccv7OACcDTTUy%2FLM66d1Oxr8fvCHJT6Wb%2BwSYS73oshDPHVOYv8zjwaNMQGiqg1kaxKqU%2BRdnXRYrTHeT12DzR3LUAkmZkReJsR6nGGKabt3MhNQj5Sklt5QHuIbQ13MAXRifvrtBqcKkZdtOKxPQvZQsMzikrwChdu6o14ej7Q3jvIjFr6J0VgxSTDg0BFL5HlUqyCo57NxwLhaWlsb7VyUeUTujMwdzm6QqHGYwuyTpVn1HMmpFxQT7YmQdffBz7AQj0AF00qVCr2%2BLi7x%2FBXTC3rwryZBaqSu3k8xrNsBZX6AQp1nccWSXiNiQBX7E7IbZCvfGaDTN8QpaSZdDwqYF0gRPKJE4900odLpoWq66paBlY9AXjwc3qjYhhqLdD2OVArXhdVX0Op8sDJB4lDVKpVJEzTLSb3XNHD8zrmAkOeHkRrnOMyzCGMUT5UE70NtPy%2F2Zn6iVXe4sThQ0OjbVuEYXGOvssKNRluFSV6ERAOWSMK7k%2B84GOqUBSFv%2FePEkftnLBW64qOFXCpGsilzdk8hYqKDxzDAAx30ccJ3XRXs7zgF9STROOAiih9j39hYAqJ1rVm8y07mKLMcSnthxCp%2FHxPYKb%2FAB8xUkwfvRDuG%2BZXx7Zv2UgH2MUsrRh8ikIb2wDFi6mujGZE2KR8W1jVQwv5tBZiFssl9DgATqW9o8WR3VOHBPC22O93Umwc6jldDG4zKUviwLvtKGKXzY&X-Amz-Signature=9fc378c2a49a175548bb144af6cd76a6db304b90a213b8deeb8c25fa43659ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC7TUWA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLJJKghU%2FE7kEBmmVhY9s3jUPQMDI3nF2%2BtCjsSQgoxAIgBBw%2BPP%2FHBLzMW0TEKoFejCL3Vw6hDu3kvPeXB42PTLoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0EGckQAKHtfntMVircA8Nv0xn%2FYqJ53Ze57l%2FPr5XtYSsUAdlsXbYaKP4SlE5TbhKoewRUWv8n7zUEWinzHG9IlbtPfSB8v0uw2PXF%2B2UnVh9ebH8FpD9xINDjcbLfpV2F7Paa6gW1CTeEtZ4Uc%2FnuwOoZbYQccv7OACcDTTUy%2FLM66d1Oxr8fvCHJT6Wb%2BwSYS73oshDPHVOYv8zjwaNMQGiqg1kaxKqU%2BRdnXRYrTHeT12DzR3LUAkmZkReJsR6nGGKabt3MhNQj5Sklt5QHuIbQ13MAXRifvrtBqcKkZdtOKxPQvZQsMzikrwChdu6o14ej7Q3jvIjFr6J0VgxSTDg0BFL5HlUqyCo57NxwLhaWlsb7VyUeUTujMwdzm6QqHGYwuyTpVn1HMmpFxQT7YmQdffBz7AQj0AF00qVCr2%2BLi7x%2FBXTC3rwryZBaqSu3k8xrNsBZX6AQp1nccWSXiNiQBX7E7IbZCvfGaDTN8QpaSZdDwqYF0gRPKJE4900odLpoWq66paBlY9AXjwc3qjYhhqLdD2OVArXhdVX0Op8sDJB4lDVKpVJEzTLSb3XNHD8zrmAkOeHkRrnOMyzCGMUT5UE70NtPy%2F2Zn6iVXe4sThQ0OjbVuEYXGOvssKNRluFSV6ERAOWSMK7k%2B84GOqUBSFv%2FePEkftnLBW64qOFXCpGsilzdk8hYqKDxzDAAx30ccJ3XRXs7zgF9STROOAiih9j39hYAqJ1rVm8y07mKLMcSnthxCp%2FHxPYKb%2FAB8xUkwfvRDuG%2BZXx7Zv2UgH2MUsrRh8ikIb2wDFi6mujGZE2KR8W1jVQwv5tBZiFssl9DgATqW9o8WR3VOHBPC22O93Umwc6jldDG4zKUviwLvtKGKXzY&X-Amz-Signature=6511fca2adb9f47e78d10272777b299f1eaf7fe1f0d3b60b25b61d996aa85b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOL7YD45%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7yV76NNP6Zx0oQz%2Fv8ZwUR3AgiVK3aSCPv54gQ4QzDAiAQX%2FNV2CQS8W6rIyBd9Tsn2phi6jt%2BzHX7Hj1HPxP58iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCnaUt22lEiR11u2vKtwDixHEBkbDOZ%2BGpWxE9Y%2FgJarWDLatlHdS3BTVFBtE3zBSoGVarABdmMXoQL9bNs2HDdYx9rhMn6jOwakcjW0bPomw1dNtOm7m7LQ9vWwzwI3P2%2FLbeQqKFh9BxLWUlZC1od7B8MYFIKMrvlHAGvrRh8AnUITefi%2BKDerMnqWmBIXr6AiecWSyxsFPmSdzbOKI4DTPuhI%2BMDMoswLDzwZ2%2BBvACSd2Kn7r0ZDbX%2FVtcOUPmQf5rSiFo6PhBL5uyX9KdbqXwFM49HKYUanlnBunBW58x69CnqpqOvjHOOz1IVitSF7%2Fdl3Hc3cwFlDl21FxTzareIRk5l1Kmwc%2BXCyutP8dpU6l3RRZ4KeXBrhrzeWQNPJ70E5QTn30BpkXjuuaQIazxoJq0LRRkySnNIX2sIZjeP25NvJP5RY8fRIN5kSsny2Ro1MD18sDP%2B5HpiqDteaLEtXOX0bnd8b%2BCD4Ynk0e9kVcAIm%2Bx4dG4dL12fVx2YzrWCUhGbj2s%2Bp8qtSJTWpHfnJUIWHTv161t9pqIWFOSSfLJtqwOBKqBZXnjyFv4d3PiS7RCQSTcYEE8AB2UeTjUmcCiOc%2FGyCJQ7K8ADNVJIXUFOLyVCzCuS34j9PHePypd6Xsdv7JNRgwhuT7zgY6pgGrPI7Ib3uSZHDz%2FSenhIwXkAtRAii0zokJEy65h%2BlIs%2B4%2FxdumaYNUDYhvZAMXr5%2FEsRtnwKVAuMjdwMV5YZX5WAdpTMOHItpAw9wFnb6hp%2BWXIa%2F%2FFkWUVhGyXE02AjCQqf8lRhvUYwPUj7nPG%2FRCXSa8Z77Zzz%2BbUdHzWLESY9El80ZJyZrnTGOySdJth6DlVx46%2BYPq9d9XbDy2TeHvVjy9ajxp&X-Amz-Signature=bdb42404dbc3063b9be201f116811a2213b2a3bed892fdd32aaed86e6a68fa75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC7TUWA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLJJKghU%2FE7kEBmmVhY9s3jUPQMDI3nF2%2BtCjsSQgoxAIgBBw%2BPP%2FHBLzMW0TEKoFejCL3Vw6hDu3kvPeXB42PTLoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0EGckQAKHtfntMVircA8Nv0xn%2FYqJ53Ze57l%2FPr5XtYSsUAdlsXbYaKP4SlE5TbhKoewRUWv8n7zUEWinzHG9IlbtPfSB8v0uw2PXF%2B2UnVh9ebH8FpD9xINDjcbLfpV2F7Paa6gW1CTeEtZ4Uc%2FnuwOoZbYQccv7OACcDTTUy%2FLM66d1Oxr8fvCHJT6Wb%2BwSYS73oshDPHVOYv8zjwaNMQGiqg1kaxKqU%2BRdnXRYrTHeT12DzR3LUAkmZkReJsR6nGGKabt3MhNQj5Sklt5QHuIbQ13MAXRifvrtBqcKkZdtOKxPQvZQsMzikrwChdu6o14ej7Q3jvIjFr6J0VgxSTDg0BFL5HlUqyCo57NxwLhaWlsb7VyUeUTujMwdzm6QqHGYwuyTpVn1HMmpFxQT7YmQdffBz7AQj0AF00qVCr2%2BLi7x%2FBXTC3rwryZBaqSu3k8xrNsBZX6AQp1nccWSXiNiQBX7E7IbZCvfGaDTN8QpaSZdDwqYF0gRPKJE4900odLpoWq66paBlY9AXjwc3qjYhhqLdD2OVArXhdVX0Op8sDJB4lDVKpVJEzTLSb3XNHD8zrmAkOeHkRrnOMyzCGMUT5UE70NtPy%2F2Zn6iVXe4sThQ0OjbVuEYXGOvssKNRluFSV6ERAOWSMK7k%2B84GOqUBSFv%2FePEkftnLBW64qOFXCpGsilzdk8hYqKDxzDAAx30ccJ3XRXs7zgF9STROOAiih9j39hYAqJ1rVm8y07mKLMcSnthxCp%2FHxPYKb%2FAB8xUkwfvRDuG%2BZXx7Zv2UgH2MUsrRh8ikIb2wDFi6mujGZE2KR8W1jVQwv5tBZiFssl9DgATqW9o8WR3VOHBPC22O93Umwc6jldDG4zKUviwLvtKGKXzY&X-Amz-Signature=0eaa7e3fe25763430a5aba959b0b3db5fdba9780b36f70fec14303ed0a3d02c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC7TUWA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLJJKghU%2FE7kEBmmVhY9s3jUPQMDI3nF2%2BtCjsSQgoxAIgBBw%2BPP%2FHBLzMW0TEKoFejCL3Vw6hDu3kvPeXB42PTLoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0EGckQAKHtfntMVircA8Nv0xn%2FYqJ53Ze57l%2FPr5XtYSsUAdlsXbYaKP4SlE5TbhKoewRUWv8n7zUEWinzHG9IlbtPfSB8v0uw2PXF%2B2UnVh9ebH8FpD9xINDjcbLfpV2F7Paa6gW1CTeEtZ4Uc%2FnuwOoZbYQccv7OACcDTTUy%2FLM66d1Oxr8fvCHJT6Wb%2BwSYS73oshDPHVOYv8zjwaNMQGiqg1kaxKqU%2BRdnXRYrTHeT12DzR3LUAkmZkReJsR6nGGKabt3MhNQj5Sklt5QHuIbQ13MAXRifvrtBqcKkZdtOKxPQvZQsMzikrwChdu6o14ej7Q3jvIjFr6J0VgxSTDg0BFL5HlUqyCo57NxwLhaWlsb7VyUeUTujMwdzm6QqHGYwuyTpVn1HMmpFxQT7YmQdffBz7AQj0AF00qVCr2%2BLi7x%2FBXTC3rwryZBaqSu3k8xrNsBZX6AQp1nccWSXiNiQBX7E7IbZCvfGaDTN8QpaSZdDwqYF0gRPKJE4900odLpoWq66paBlY9AXjwc3qjYhhqLdD2OVArXhdVX0Op8sDJB4lDVKpVJEzTLSb3XNHD8zrmAkOeHkRrnOMyzCGMUT5UE70NtPy%2F2Zn6iVXe4sThQ0OjbVuEYXGOvssKNRluFSV6ERAOWSMK7k%2B84GOqUBSFv%2FePEkftnLBW64qOFXCpGsilzdk8hYqKDxzDAAx30ccJ3XRXs7zgF9STROOAiih9j39hYAqJ1rVm8y07mKLMcSnthxCp%2FHxPYKb%2FAB8xUkwfvRDuG%2BZXx7Zv2UgH2MUsrRh8ikIb2wDFi6mujGZE2KR8W1jVQwv5tBZiFssl9DgATqW9o8WR3VOHBPC22O93Umwc6jldDG4zKUviwLvtKGKXzY&X-Amz-Signature=12e39dd00a20c2a271ca700028c224b8f344a010ccaa085a92425d520a87fdd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC7TUWA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLJJKghU%2FE7kEBmmVhY9s3jUPQMDI3nF2%2BtCjsSQgoxAIgBBw%2BPP%2FHBLzMW0TEKoFejCL3Vw6hDu3kvPeXB42PTLoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0EGckQAKHtfntMVircA8Nv0xn%2FYqJ53Ze57l%2FPr5XtYSsUAdlsXbYaKP4SlE5TbhKoewRUWv8n7zUEWinzHG9IlbtPfSB8v0uw2PXF%2B2UnVh9ebH8FpD9xINDjcbLfpV2F7Paa6gW1CTeEtZ4Uc%2FnuwOoZbYQccv7OACcDTTUy%2FLM66d1Oxr8fvCHJT6Wb%2BwSYS73oshDPHVOYv8zjwaNMQGiqg1kaxKqU%2BRdnXRYrTHeT12DzR3LUAkmZkReJsR6nGGKabt3MhNQj5Sklt5QHuIbQ13MAXRifvrtBqcKkZdtOKxPQvZQsMzikrwChdu6o14ej7Q3jvIjFr6J0VgxSTDg0BFL5HlUqyCo57NxwLhaWlsb7VyUeUTujMwdzm6QqHGYwuyTpVn1HMmpFxQT7YmQdffBz7AQj0AF00qVCr2%2BLi7x%2FBXTC3rwryZBaqSu3k8xrNsBZX6AQp1nccWSXiNiQBX7E7IbZCvfGaDTN8QpaSZdDwqYF0gRPKJE4900odLpoWq66paBlY9AXjwc3qjYhhqLdD2OVArXhdVX0Op8sDJB4lDVKpVJEzTLSb3XNHD8zrmAkOeHkRrnOMyzCGMUT5UE70NtPy%2F2Zn6iVXe4sThQ0OjbVuEYXGOvssKNRluFSV6ERAOWSMK7k%2B84GOqUBSFv%2FePEkftnLBW64qOFXCpGsilzdk8hYqKDxzDAAx30ccJ3XRXs7zgF9STROOAiih9j39hYAqJ1rVm8y07mKLMcSnthxCp%2FHxPYKb%2FAB8xUkwfvRDuG%2BZXx7Zv2UgH2MUsrRh8ikIb2wDFi6mujGZE2KR8W1jVQwv5tBZiFssl9DgATqW9o8WR3VOHBPC22O93Umwc6jldDG4zKUviwLvtKGKXzY&X-Amz-Signature=9fc378c2a49a175548bb144af6cd76a6db304b90a213b8deeb8c25fa43659ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC7TUWA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLJJKghU%2FE7kEBmmVhY9s3jUPQMDI3nF2%2BtCjsSQgoxAIgBBw%2BPP%2FHBLzMW0TEKoFejCL3Vw6hDu3kvPeXB42PTLoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0EGckQAKHtfntMVircA8Nv0xn%2FYqJ53Ze57l%2FPr5XtYSsUAdlsXbYaKP4SlE5TbhKoewRUWv8n7zUEWinzHG9IlbtPfSB8v0uw2PXF%2B2UnVh9ebH8FpD9xINDjcbLfpV2F7Paa6gW1CTeEtZ4Uc%2FnuwOoZbYQccv7OACcDTTUy%2FLM66d1Oxr8fvCHJT6Wb%2BwSYS73oshDPHVOYv8zjwaNMQGiqg1kaxKqU%2BRdnXRYrTHeT12DzR3LUAkmZkReJsR6nGGKabt3MhNQj5Sklt5QHuIbQ13MAXRifvrtBqcKkZdtOKxPQvZQsMzikrwChdu6o14ej7Q3jvIjFr6J0VgxSTDg0BFL5HlUqyCo57NxwLhaWlsb7VyUeUTujMwdzm6QqHGYwuyTpVn1HMmpFxQT7YmQdffBz7AQj0AF00qVCr2%2BLi7x%2FBXTC3rwryZBaqSu3k8xrNsBZX6AQp1nccWSXiNiQBX7E7IbZCvfGaDTN8QpaSZdDwqYF0gRPKJE4900odLpoWq66paBlY9AXjwc3qjYhhqLdD2OVArXhdVX0Op8sDJB4lDVKpVJEzTLSb3XNHD8zrmAkOeHkRrnOMyzCGMUT5UE70NtPy%2F2Zn6iVXe4sThQ0OjbVuEYXGOvssKNRluFSV6ERAOWSMK7k%2B84GOqUBSFv%2FePEkftnLBW64qOFXCpGsilzdk8hYqKDxzDAAx30ccJ3XRXs7zgF9STROOAiih9j39hYAqJ1rVm8y07mKLMcSnthxCp%2FHxPYKb%2FAB8xUkwfvRDuG%2BZXx7Zv2UgH2MUsrRh8ikIb2wDFi6mujGZE2KR8W1jVQwv5tBZiFssl9DgATqW9o8WR3VOHBPC22O93Umwc6jldDG4zKUviwLvtKGKXzY&X-Amz-Signature=9e21dcc573603c34b30107eb2cd42d109f53626adc9524778da1ea09c3fc8dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC7TUWA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLJJKghU%2FE7kEBmmVhY9s3jUPQMDI3nF2%2BtCjsSQgoxAIgBBw%2BPP%2FHBLzMW0TEKoFejCL3Vw6hDu3kvPeXB42PTLoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0EGckQAKHtfntMVircA8Nv0xn%2FYqJ53Ze57l%2FPr5XtYSsUAdlsXbYaKP4SlE5TbhKoewRUWv8n7zUEWinzHG9IlbtPfSB8v0uw2PXF%2B2UnVh9ebH8FpD9xINDjcbLfpV2F7Paa6gW1CTeEtZ4Uc%2FnuwOoZbYQccv7OACcDTTUy%2FLM66d1Oxr8fvCHJT6Wb%2BwSYS73oshDPHVOYv8zjwaNMQGiqg1kaxKqU%2BRdnXRYrTHeT12DzR3LUAkmZkReJsR6nGGKabt3MhNQj5Sklt5QHuIbQ13MAXRifvrtBqcKkZdtOKxPQvZQsMzikrwChdu6o14ej7Q3jvIjFr6J0VgxSTDg0BFL5HlUqyCo57NxwLhaWlsb7VyUeUTujMwdzm6QqHGYwuyTpVn1HMmpFxQT7YmQdffBz7AQj0AF00qVCr2%2BLi7x%2FBXTC3rwryZBaqSu3k8xrNsBZX6AQp1nccWSXiNiQBX7E7IbZCvfGaDTN8QpaSZdDwqYF0gRPKJE4900odLpoWq66paBlY9AXjwc3qjYhhqLdD2OVArXhdVX0Op8sDJB4lDVKpVJEzTLSb3XNHD8zrmAkOeHkRrnOMyzCGMUT5UE70NtPy%2F2Zn6iVXe4sThQ0OjbVuEYXGOvssKNRluFSV6ERAOWSMK7k%2B84GOqUBSFv%2FePEkftnLBW64qOFXCpGsilzdk8hYqKDxzDAAx30ccJ3XRXs7zgF9STROOAiih9j39hYAqJ1rVm8y07mKLMcSnthxCp%2FHxPYKb%2FAB8xUkwfvRDuG%2BZXx7Zv2UgH2MUsrRh8ikIb2wDFi6mujGZE2KR8W1jVQwv5tBZiFssl9DgATqW9o8WR3VOHBPC22O93Umwc6jldDG4zKUviwLvtKGKXzY&X-Amz-Signature=30100564053dec4446ffc50c25ad840d562659b44800ab1495449ec5f23c86a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC7TUWA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLJJKghU%2FE7kEBmmVhY9s3jUPQMDI3nF2%2BtCjsSQgoxAIgBBw%2BPP%2FHBLzMW0TEKoFejCL3Vw6hDu3kvPeXB42PTLoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0EGckQAKHtfntMVircA8Nv0xn%2FYqJ53Ze57l%2FPr5XtYSsUAdlsXbYaKP4SlE5TbhKoewRUWv8n7zUEWinzHG9IlbtPfSB8v0uw2PXF%2B2UnVh9ebH8FpD9xINDjcbLfpV2F7Paa6gW1CTeEtZ4Uc%2FnuwOoZbYQccv7OACcDTTUy%2FLM66d1Oxr8fvCHJT6Wb%2BwSYS73oshDPHVOYv8zjwaNMQGiqg1kaxKqU%2BRdnXRYrTHeT12DzR3LUAkmZkReJsR6nGGKabt3MhNQj5Sklt5QHuIbQ13MAXRifvrtBqcKkZdtOKxPQvZQsMzikrwChdu6o14ej7Q3jvIjFr6J0VgxSTDg0BFL5HlUqyCo57NxwLhaWlsb7VyUeUTujMwdzm6QqHGYwuyTpVn1HMmpFxQT7YmQdffBz7AQj0AF00qVCr2%2BLi7x%2FBXTC3rwryZBaqSu3k8xrNsBZX6AQp1nccWSXiNiQBX7E7IbZCvfGaDTN8QpaSZdDwqYF0gRPKJE4900odLpoWq66paBlY9AXjwc3qjYhhqLdD2OVArXhdVX0Op8sDJB4lDVKpVJEzTLSb3XNHD8zrmAkOeHkRrnOMyzCGMUT5UE70NtPy%2F2Zn6iVXe4sThQ0OjbVuEYXGOvssKNRluFSV6ERAOWSMK7k%2B84GOqUBSFv%2FePEkftnLBW64qOFXCpGsilzdk8hYqKDxzDAAx30ccJ3XRXs7zgF9STROOAiih9j39hYAqJ1rVm8y07mKLMcSnthxCp%2FHxPYKb%2FAB8xUkwfvRDuG%2BZXx7Zv2UgH2MUsrRh8ikIb2wDFi6mujGZE2KR8W1jVQwv5tBZiFssl9DgATqW9o8WR3VOHBPC22O93Umwc6jldDG4zKUviwLvtKGKXzY&X-Amz-Signature=8a0461a7deea3f480c2b3e07baf49d0ff94381c23c5a895b62963af2bba496ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


