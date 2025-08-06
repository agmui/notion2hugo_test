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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=f20d08548a011c8804063c548431d2edc006c82e7bf968bb5f5cfe11fc880b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=001f560a496f46222b8a83a3f79a64c2ff0e8856ceaa828bce84bc2b55e08c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=c8e97fc2c2ba1ec34582e670de4fb37a63445028a0acefc4f62b0af85696b2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=57fdf686c03f87cb3e7d1f7407fe447407f47f0ba370bd00899062fdc3f99f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=7b27164b0c39c5a461f9ce48c09ab8bdf9ccde753f4136667245e0bd9bb004ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=60d6b9c7f21f3666e8295b8dfb149d36c571eb3de97273d2b8edc1be9365fdd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=f8cb7e1cb50413a6206cb954fcfd21975854ece84b96855d4982b1b58f8a7ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=46374a40310039e2dbd287262ac97a44bea6f067ec01629d1e3efdd030c20964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=9b5207eca93b43c4f2b99d592816c96f316058f056dc5c3da9ab7c675bf6da82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=c64b62860ffa73544fea29d1827e668aabb1770bd04d6975d66d6df911bcf907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLEH6TC5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCz0r1xO22ky%2FWNo5DOKOsH%2F2GV4r1da%2F0i2CUN5XJpJAIhAKkV7HpD9rTv2YL3K1rRD9QK6y1RaWnkU%2FKIGLGMNh3RKv8DCG4QABoMNjM3NDIzMTgzODA1IgwCoDMZu1RtU6ZDEzoq3AOL5Y27yYo2ldkJndZZb9KAmtK4u0miSM9q2wO5QcSeQe5QNpWii2qMMpDkFH%2FaOXOdPKgrZu8GJe2yx8cpmNiYqMfCzhbRjNUkTpH4Khczgq%2BbsEoElaCVYa2%2FrTKRdHaeuq3kISn%2F2ZU9ZloeESv0C1KVZVn6gx8qK4kX%2FzZYnRyDLiq4Fl38pxMVPBUPqytsjZWIBc3Aej5ZEshCZKNZjxoVIJuRr4r%2BX9ENMFlsK%2F%2FHEAlxAjpbfBtASXsOS85WuGsR3PmSiyRZHnuMyLlC50ERfNBmMZr%2FooD65NclQdt3W8kfKbdk4WYylDED1SWlPB8%2F2FxUU3S2PsbcdRHCBaO7lQZWI%2BV8psnJFI25nlU4xkqYMrTpOAcHpBMlB35%2BB3hNNBXJ1ILlXZ%2F6K1HXtHznHz7dAcYixG1cLWb%2BuF%2F5Dg8L3%2FsOd86eS0oijDYAP%2FjjQTqW2egqHa0n%2BrF22iTkNmzCylaCpxQE0%2FXbIxPjABU8XnYFG8eVKxusIYuGOSYiH32sUIQDQIZTMk0%2FC4%2B20BM%2B%2FMl2NFJzP9WbUw6npLhLNWFYg5fiPWkbnRE%2B6H%2BBOCToY2ayzMu5ixrxYzas0Z6NT7Fg7Ttb4VtPk3Lvb22WUaOVEoSVVzCqy8vEBjqkAbn0c8q8osJz9sAhgQ%2BZQAX5EZCTKfbjFA1krISvKqNQ7NxI5FNVm5J2RBUfnL3ypobj7tKe%2F8hHTXM8JdCSN6ORR6UW2ngB7qEk0%2FEaPM6SrjvI8h4EZ0zq%2Fd421sZ9U2F3XUEMMpFAv8CaFATw6hb7PIduYHAz0PbHfVdBkknQ4lMHcg0Bprnu6f97fqrq7hGyfNqYS%2B8ROX3sBvDD%2F%2FT59cVT&X-Amz-Signature=3cf3c7790b47347c4f05ec8e0483af01a38567126b89c04f04f8471e930d5da7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WADYLU3K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDMA9hjr7CK%2FJ06ATGIRPp9Jvz2hfJylqU%2B1iebmDtfyAIgQfKcR2f2tZFXls0%2BsMsI2bb43nxadj7h4IrC1KjIv2Aq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJV0yQDoZ8rHB%2FtpLyrcAzePpqX1iAm0cyhdVYj5fqu63PVn3CNZOwU4vME7NIg7kHLJZc1x7F0%2B5e3L%2BobDJGKs7sUY96j0C3oN356vS5Zp%2BL0I6PCayNstqa6J38FSxn5eJKnDv%2BZWAxTYSMEYwz7kFvUtRT7fApLmT7QVrQAJOe6CPCvbSMeFvY7IDENGxqqfA3mWaKV86imgIalK3otIDQ8Owni%2BWXLAjVD7swdNbGC5fPGrRDdr1kiVdq%2BL51GFtU78PID491mQPe0uaQEI7JSyHM6wugktMSQzD5tw5U9ybzi6%2BP77YpQDDp%2B9pmiJcLlTbVMW15O38y8U40hA%2BHSne6UQn11NJGIgHnLteMisUiZ9G9v5kov6sZcmV6SRHToGRUBDPwOD2LDAA91dTThD7hWCjkIOj7upXWFvyPYZyr2ug0VxSqjbGWcMZaDOlYFUpkfDFXFL9zhpYpCuZQCR8hP7qQfaWoGYh9DGQ%2FfQvVHTVlhGt7DRe75QJrmWPF1%2B5muOGuQ32ASMyRsSqh%2BXk7YYvFJ4BXkMJEtjiawJig2LoLIhCG%2FrFQvNPhDtOY452u0YIodaGtPdfpQKm5jWAVSBC63A1O55kP1ma8xyse0NiNleoU80V9l2eSOGac9f0sKDz86vMIXLy8QGOqUBJM%2FwhKSUlQQe10JzJ7uxPCyiGHT7%2BlvDAiwJIgNuYQQ4W45NszILKgx1qCBdp1wFtqs8GTZLNBFV%2FMyCAFjyFwkZWeE9UhtrltBRKvpqwyvA02VuBTTNSxx052EmvT2z18cYNwoLjstF6aKggg6lUHDu8JkMVrgYG6E95qN2iaOX0uDSp8jzLkG0myddgZ0MHF3lUpjxx1LSInqE3u28nqjSH7Vm&X-Amz-Signature=f274ae37908b007781bbf46ac2314ae97dee60f2a7fe39ffca6adc53a286fc14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U5OJLBO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGq2lz6XnCDr9FX95WNH7b%2BNThbXlN9KbkWq%2FzW581PBAiAnqbGv%2FLa4fawaR8QIKFuAkIeTh4z6dMsn1hRMxV6MLir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMqmcikOa19vJKyCzcKtwDxlhbMPvt1fMHTGPO44%2BOYSVpC0vWw878i%2F2xC3y4rHa3OfAeCogSNcRIj2%2BfR86Z9hLauZM3TEVveWkylGsGrta7ibJ%2Beu5Q9sXCmK5Jjn%2Fv64aNiEqTs3gjvZBQtjIL6rezfdqTOL5md180xO7ULVXFzWMhxiCtuXTnfyiWOU%2FkC4oiLuu%2FJ8T9bOa4wCiqubxR4SySh%2BKbIfm3JI4ZOezh7Uemv9UVrnwI%2BmCnIKzOL5ZNxERaovItmRKprYaFJW5uOw6wKBHEiHxbL%2FOxy8Nz%2F0lsZHCRoxCaWubZnGEsj3kyjTKzcPPw%2FijLCgMclknjxd4XKDG%2Bqm%2BMXlhk0ANhTWlNBfD0qwnYpMrPAE9JZzBIuoe2TvTTQ42xvQqE5bU2KAA4%2Bh%2FfK0S1qZi4dyWQihvUQgS3SQBnq8B5KXxiliYFPeYAtVgqjrM9Dy2sSZGvlgBw6f5OE1%2BE6Om7en65%2F9Te1TBnmWYAVuQ2mBYbulLW4cbu9KYwN1vqRyjv%2B8VczyYxSzdl7Knny5PhUV3%2BtVY15VSXq9UWjKCQdvbiTj06BVchphKeVfrtQhOuRG0zRc0VlrLrydnHr0btRCEDxaXum%2FXtGpZGrtx3%2B3X2vaD6eTe5zmVTlKkw7MrLxAY6pgFv%2FrzyEtFnGY%2FLzoxLpSeCHBUXTBI8AfNz1AyiD53OLT7%2FmW5PsHoZwuQWDJ%2FfA%2FrumvpDQ7RD%2FTKVR8Vf7PeYEFY46g6PRZADjLcYEoCFZVR3r%2FEbHReGS5ia3Z4bMANxV7WsCRVKRpNk%2BH0Rzlnc%2FIVmp%2BoZCaVv1EKLnKiu4MRB3mTQyvIZkcjnjrwcSgY3QLJ1tErL5em647pbtSnLJLKN2dyg&X-Amz-Signature=d4e880c38ad3708cdb2b0b7d8f4d1da6fbec8053c7a67c02ed2882d4cfbd6b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=bc7f30e5a527c1a9d48417af2364bdfacbab7489600304a6b7a56f9c5a28a85b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IFCXEM2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCyikjCNzfA0616EnsZg4dkl3ohIeywa3D3EW72hgMmUAIgA14HwF9QFLgaqQyxz7DwwGt1ITcLfVz4JpBE32lFUPgq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAwcIpWOOYfGVuQwwircA1eDmumI%2FCjTUS%2F9EbEUlK2tH%2BekSedwDpXIDHIt0EzbcQ3lTfBC4s4oDfl1APkV6safAdGjJtmcQ1SzC2t71k0w1XSnujwT%2BeTDDRNn%2BX%2BqDFR6ExoCL4rfcsPa4ySE%2FTVJELtrPEeajACu4yHdV2rURvIJ%2FFARmP8EIP%2B3ysX2Umxwtkleih5vJtqvFUJ1xd8c0KB8IrCzw4mF%2BtKmQVqo7n6f%2FTJ74ZmRuaYyiZV2J1%2Fy6ZEtCsm2BtBHFyUPZqBceEJ3KNFzYMyMclsFADj5lwqWjEKC2AnlnR2rFdO9ZWN8%2BX%2F9bLZXYgoSSENE5Y%2BDMPqo6zm3K6oeSW2sWsv8zLAkyj6cjVkJj4wbhk5rrcXlLL0AwrDPWVsilhrhcYcH2VZGFD15%2FEgW2L8j372szYxXLUAUOYMVO%2BvuChF7FObSiiwkPSC5UdALUiZ9%2Bg1PCaQMF1cww9bnWTLwSjoLL%2Ff8wbs8so1Icd6by1kOd%2FLZHrN%2FGTx2Lh5tABXqoBHBKNJr%2FPcUvG%2BYgDeDgYS0tSGGjbYTYw8HesjltaKnZkar2eMzyI79nBAexLxqf2%2B%2F1XJDrHIl9uqUDNDL%2FK6QIU%2F9S1754bDmrMGyO%2FAEYMRBNxg6wsJ%2Ff1OwMKfLy8QGOqUB4MxV4UsO%2F7fUKr9JoPkWU3tH1QcysWMPVvm9P40dcvlpL%2Bh%2BML5B%2BtUuXBCbz33sPL6Up28NjVv0Aw4mZDkEq0UbMPzAICVcPuq%2F9n%2Fhpt52UB72AEjLcMflgWEVZ1trIe0qlP8USadi%2FtyUYB7yHeLNVLxoyJF1ba%2F7hshXGFY039aA3wWcRTgIjm4UsVdEFvc9fCL0dnJPvT7CIrAeS1MoqJgc&X-Amz-Signature=a5421bee8bdf05be4b8804b2b4db646db8bac897316b86eb0aa10728b8a6c80a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=b3d59bee662a72bfb64859d938b94e21ddbd07a33a4bfd73e10669d832a85f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VML54CVY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAeAOy7cadsRiP1wlkwMA7%2FteWQB9fh%2FOpL1JnQp1S%2F0AiAtPYIaQu%2BjzIdDy8Bxf7CiTVUIBK0cXuWIcQEfOki3OCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMwdf4UaSPMkkIWt13KtwDjIPGISjHtoYVNueuLzdJxudXV2efg3U0RKBKxavRnwG697sArj4jRGPvDi%2BZuSCsgnP0KjI49NYYvgi1oxqFPS4xvWjd7THci68jocnWFf%2BojcDBewydwqq3ZfPkgKPIIK%2B1wCiFFGFDMKNWReLkTUotMVTDIMcEigG1k6DN2Mf7z2e5KDuUVx0qWtxzEMRxMZ1jiv13X8KfmhShJnL7OwXJfWwObFKvGuU4BRCIGaENUOdUjwyG%2Ft59%2BLFk8Yif6guvIxbnX5XXWk2%2FyykwzXshTgJa8HXAmvc7lYNT6dLynXu%2FmnMQ%2BVeX5Wu7bIfUbCqZGUL2JhiuyFdNjx8rcuBzyUy6a2iYibF3Z0QvwlXwnM2L0PeDatueiZs009QrFxBIvc7PH%2BRshJqwDmlb47%2FwBnx%2FlusE4wixmxV6F5s8nBmEC2ilLyfx7WDjCQM805UHjmNaFmAM1T%2BooWTOwgwt%2FImUqsuJ0IcyJ%2FM6cgFVLdUb%2BPuuEVBBx2vKS88rwIKMnU6EdCneMVklfcN5%2FSQLMTjxcoYNyzTmdwVn%2FsGuTR7MbpdEyT3DrRC5W1o2%2FSQ7WMb%2BUkuLNw719uDYAq%2BIVoek6XAPrr6SCNbvYzed%2F17qSsKv%2FYmFdFowqsvLxAY6pgH3%2BZwlj2qAWX4W%2BZRoMqNA5xQHb82bWkDiN%2B2pkkXzUnYSMHeT4N2GU%2FjQsGCHsBL9p3Lopk4hG7IFcPGVNjA6vb3YVOkHBSYt%2Buqyxy7hVvde9kzP8uSBEUDNuHQZM29OZMm68WzSD0tWQpMaDHb3br6U7eV3ipeDc3vJTcyU%2BZUbgUgip%2FgmVVnOWqu6pUzRHHOtYBYTJi1IxpDoB7B9ZSlu9FjV&X-Amz-Signature=05e98fa03522103b6ced9d66216a442bc525b3cbe8641a174641035511167d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=988857a3d349b8141385e4613731e4e3dc969f1d25aa277d1958ee7e7310483c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOJ6CF5K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIBECkArnqc150nyFM24VBMqcgmYAwl3evhD9Jy1GCluaAiAOl9uMS28IshnIuQouY9A4RzLSjCIvEskrETJBKX3CpCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMmvdtq%2BzChCvOE%2Ba%2FKtwDp7CNFO9zOQItuSvELBSFeS2GYTllAFNXTzE4Wrfd8C3uCRpyk403Om95DXlbAaHRoA4svPbY1F6EzOLeHZXV%2BqQA%2F76%2FcmSQL%2BUIx0dKAjmevQkHjYryTRgx3qjln79%2FlvsjGK57nDJy4xWgMhG6fbjQOXAE%2FC5vtftbyNeSI6Ei%2BUQ2z0K8VZa5dwxpW54McMK%2BP7nuBn4j3cLloI0S9VOuhZ41m4qEatJZq%2Br8pdYUiAZLjo4Efh8u%2BMyDqHGCgrVXIW21f5Udc3KTo4NZKSPfDsPeXMWL8EFDG6ONEaCIoPmEpPnSk5Wot8aE%2B4MqOnQOwwZtXYCHR%2BSc5ec1SgAS9Rw%2BG2nHsCpjzVHmvvGTOJhDTXMBNS9khamw9MbQmVDzYeOSJXHwJM1HRsrWb3XsB8z0AJUUzJLQVKUlx6S4ZiA4lVTLWarnVonrk4M%2BxWkMxd0WnY9GQm8I5hk1NOsHyb3qJm2%2B3o0L4hAyf3PWIc5OL%2Fyby9OMEDqIGY4Pw%2BoV6l5IV3LOX%2BPavWRMaK8zu1z6U8rAnQ6ck4I0qAzGu3NxsTUlL4t3eYpC7j1SZVKhTo%2F5jSmQQeAHzl1%2BqLS77yGKVMGQk2S5fbJPb5yPV8%2B3AhbmGVyABy8w9crLxAY6pgHiwOIpBJrlfzlRRvr3zkWge7auHrxUm2oTqBHZEWmqYeqLheOSqUaYHr7ZAwR%2Bd%2BK%2Bb4FEfe1XyqRaDEQ9%2BY3bZQSwr%2Bu535OvTwaoSiQ0%2Bei3xQRSonURt5WcwhRkwhEBhRhB0xyHaxxYVAmOIsIvIRFxSmS5%2FprXQrnRHZU2X0Esi8z0ANOuxzEfTovjADHAna%2FJy%2FP3cM4OsN%2FYfz8zEcYytyW1&X-Amz-Signature=0d0176702d8fff23cee98f482c1e5b996f8cf42578ad19b8470b77d60ae3bbdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=97ac025b00469861f589d65df51b0622bb437b4e3dbf2a03dc913b32a164d3ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LNLL3IC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDL3LuVH0ny70pMG3pemMEMdIt%2FrXZIIWEn9eeucOIPQAiEA6m1o%2FpExa4HI6gCUvXEhEewQu%2Fx1EtM4xIeF6p7%2BMh4q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDLV9LizZFiexNIAZWircA1Ob0m98%2FJiBX4uKnDyogUYRZM7wSVT%2FXnvI7Y3w%2FBvzA%2FLMJhtLqoIe60utOY4nT%2FKN%2FukcBYr56%2B%2B1cE516d4KaSQOhvP%2FokYyJ7Qpqw7O3748T9TjTGd62ndulLNNdWI%2B2SKHe0HeJCplCNrwZAtULtoHJ4MRr%2BnCShsCk3GDYA1Y2tE0Wvxi3qFofrrY7i07xClBJ%2FljAg8y%2BynHExvh2y0sTEeDafmuFbQUfQeBGjv2DM4VxzeH8xnFWC48nSBCTr0If4kCmO1LvN%2BFVtGb3qyO506xxD%2BQRNY4wL%2FgsPd6qvPx2uszRDwEd%2BO8lvV8WH%2B9fxvzu4IgL1fzEw0fY1T6VpjbpWQMf9n9d2JPt%2Fxs5CsL3shXzVtb1EW1V%2BrIhUP2ZYQCPnlIP0aTzS6q7zVPGbAW7YCBjwwfYmtBVqa%2BX908bCGISsY%2BPlQ2Ecm3nOgS%2BOb2t6yGF%2FjxUgAwF8MWIN5f3l8oBnC7uqF%2BJ4Cv%2BX6QgnzWiX%2BmRXwA6QNZjSTdFejRGK6G%2BrPqGAMRegp1R0CYFUAMnwgtJt0T3l%2BOEETe1b8k3GbfPnQSgFSwMNhF4sd%2BjuhFGto9xTpSiKGBL6RP6gjx8lfvc52PXJ2SnWgPEJiA2%2FAKMOPKy8QGOqUBHfRqjWRU4IJtfaIxJyO0ldirBK7%2BTO6xiVQ0EVRfNgg6OrweaauqXm9NWU1DLVTtwjWmj7Fa5yr8uv%2BS%2FFXq390w0fNPYPgSj6FhtcroGJb8LDPT0FrfkY8iV%2F4WTiRIEWlHn%2BWmOyETo2m704P%2FW6e7trXN3PcTC6Cn2qRNmrwdpZbDUbbvYs1ge4xKu0j2nzz48kpo0HM7u6FmeMARlHRz3O%2BU&X-Amz-Signature=4af15add378e422cffe424fec6ae1a54c19aa5ff8921715a14baf9a3825e01bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAWDZFHU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCQL8IB7yVR3o7T7o4ZsRTAGwGG%2F8FYS8QhNxKiFRP1pQIgH7SKsulLIC8wOuAp8FFFiH3l9AJMe1pW9xYR2CSJVToq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEtoC0ZH8O%2BeTaNBgyrcAyVQHPMSTsfhaplOwwWkDN0g9jAQPZ6yznIkLlLPS5yNp2%2B6j6X4EUtNxzVtaCVCXFploTW9QCWipD3fGczUT%2B8RB5cx2bY%2B1QF99x3y%2FTCKh%2FT%2FvtIzOsx5TfvkteI3i7dHg%2F9IZNi8OdI%2BkDVwP6WxNwes%2BE%2BCbu2w4wzW2YBxh%2Ble5sUCMWD%2BqukbfVeQ%2BZDBTxuXogNvmv5irx%2BXHPVHJp8mHulr2Wel8QSMnE%2BzrM4J0N69LMbgTSeG466LauHnV9fssWxolgoFkU2FL7TcbNMu4VYAuPf6mpaLaG22a55QYk%2FHt%2FLRJVUhXGLgM%2FRggoBOf2wuctKweB%2BISPq8iZizbmLmoqDV3sAptfYRwLyoNsjvKroCuaCoj3Od46yeLUK1emhfNbDLvOvd1MXRACwStlUaUWaN2tfTWrXbE2s53rJ7U9YbfZY0VzVRehfzTQHXsV1krwubWZMQFJF1Is5QHCmOXPGiywSz2WB1KK6wc19%2BEKqihwkdb4PwpS9ZGjdJmz%2BR7lkicz2ewANGQ3W0VWXb0G9KbPypagsiWz3cg6wbs1aDOu8OlrE3JoP6chXNdq0ecXbXuRnEpurrVe3J6t5Tz0ZaSiVdk%2FgB%2FeXNGIdS6EFrR1N8MJvLy8QGOqUBNV6wmedjduNa20D%2FJhgymQawbFzDe8tU6TwifsUEg7ZBuTuLpWoYudRk4P%2BAu9%2FSSVz1%2Bu5x5%2BJAOkgSr71kKhP1BWDk8r5QawC%2BbRpfkJ8eYb8PLraKXAEzf5mXQ0OrJkuYWSZv8jU06f%2BLoyM9hu5eJv0EAuvv%2Fy37QPw17a%2BNxC0yQSHMUNluDQAq6muTyqGrIGplqXAHRTlFSFvRSb9s0Qvd&X-Amz-Signature=5ae6324015c4121684ee17e2f2c7e3845eb8e4b7090d3fa8d9a16314e2d3f38e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662BSZIGM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCPk%2FiBh%2B%2B%2F8ABfpRVUBFmaXsp67kdDkUqckLNEplPOaQIhALJc7yx02U1pdtsyZeZ4wAo5MiPWqMHJkMWLxC8WyQ7qKv8DCG4QABoMNjM3NDIzMTgzODA1IgzB%2BtRCMsViCrlpyYEq3AMOvGJ2DTTQX8j%2F0%2BjQmnqcZhwLTmIi4IphGs3UScbjNDPIUvkKrp%2FEhhjLH5n%2Bz%2F3lYWWC%2BdSQn4l3X9XG%2FsDFrH5loHYEG2kbZfLWbpg20z4cfPvAig3JZtEA%2Fnnhk3VXgoDixPsPA%2BvQdmuCP5F83Yn9wPdl4Gb1ff6QLNsZpxTkMl%2FK0r1TPKM4C64LCWnWMdFQFkLU97NkjitzkFZLF5vtqdQ2ODa9JEV9sgSMC6gCDRDka3HRCnJXhPa6fRu3evcq9SeqRTS1%2BdlVC25gkJNY4ndkCDuk9te%2F45IQffUUterjBfd0Ihh9xks5qWBurcvrbZwkI8c3vyFN2qfGrxgvRO%2FeaDqLEgm7ijQcF949oucfSwyeLaxPVl5Gq0VQEqSXGPtEK6yRv7qiVsVcTl5I2HVhHsumLpnAGoSGvjXc%2F%2Fxe5kzC6uTAfGD4EPI2iaBHjxTDd9a5QvxT2L9SvMz%2Fn1CxR0OObc1uCSwDMsrB3RjNlJkzn26TDiWXtujmvFsopw2b3s%2B39TRV1SIVLV6x22mBF4AsBDw397xy00QXRHl4b0lgUVkuFIfr20Kx%2BMk96Zz4yWBgQYSisypWFJIM93sZYpHZbH0SVn%2FdUpAdJwOdjQYLBVgIvzC1y8vEBjqkASeBfzimkugrUfXlCzlJi54Y7RyXhfZwoyA%2FNTYCzG3%2FAvkoCiHjy8%2BqDbaILaClOV2WG9epFP5MVz0Bz2iR9hEN%2FEZwvOJCTVJ9ZV1wAbzV8JrnpHpwSJH2GRIAwRif7hqtPu3aBou1udgChq7Vzjhljj3tiTo6cs1Br6%2FUFWkUOUt5%2BA8RZCLGYPDQiTZMU2NW3aOgltxOcGljNnmvQuTVcc9w&X-Amz-Signature=b5750f5738d9de78e9787c5294227d5a2ec2b0b9e5325021455b5b45c7ba4315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7LAZRFZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDVPlsCrhfom9UTPZEB%2FkDfE6o3BNBIjWCRFyRRhd2D9wIhAIhsmuR%2FRcqGEXgwfIwxgItHf2KbO4Fmk7Q267ryapHjKv8DCG4QABoMNjM3NDIzMTgzODA1IgzyUXvws1yyj4924Ysq3APQIVHz%2B5ZxgUKoHbENA76J3h7oVft3vEK5DZ83MmZnrq1Y7YWLenjHAvm9ME%2BuRl2vOeX5K%2B7qqF3ndpkaJpTag%2F1hTcII5PzKl4DPefF2Fry%2BgCrwvYpMI%2FLu2NgN8gPGslLaq51lSgr9DyurPlxsqXnczG%2FfG4bfvTtArMOtTnR707H9GXdJYmYNjS5vZWgdcOE4%2BvRvEId%2BE2QtMjhMkHUZaGpvZEfTXwAOuqU9gL7bxvaDNN4a%2B89eMvIlqYZaaqwqKRa5lC9prUdvRVnfRlE10I6WCkwG0EnLckqmLp4DoCJLCzYGOeyf03i%2BDleVOmWfp5Iyt0fviFqyus9d4XUkDM7%2FuKxiWoROhMR0xUFomK9ykVC2B%2FOotOtdIl6f3Dg2gzYIRuPBGcUBeRqAxZYHT7oxyADghsEqKbmQIPy%2FEETO%2BCbqlIUClGFrtDlUOsSDxw289CVm2dJAm%2FV7IOjj7khGqcZ0jWb7rKEyQCUGSMA87dISGXUTQuYEh2RG8QUPJx7dOj8M70p1Ghv3p5QDOK8bBXxVSw%2BTg6HBpG2ZFUJO4GGrsCaS3z0QhB2KiMmZA5WMIaJGfMPvkks0rNPTcTUS94C%2FtUB5joQvLlLvD3ejFThCok0lUzCDy8vEBjqkAVJ5uLVYz928Z6bIS4%2FOldJ%2FNJzx0RuMhoHArl1IcOhqlVZk0T86lSsqGjWDwVGI8mIBLbovpBYkB43JtDBvDetZ0TU3KX3bscOzZq66V9eDFeGv3TpakPMBusY6cGXvfJ0CMGFqBwXWLIb3HBie68DqZ9bUj9PTMclVy3StuEfJ2z65NCEqPYK80tc13kTKWUBVf6hkO2KneH3G%2B0F5R9%2BLwpKb&X-Amz-Signature=4f45615ac8b9fb8a2b9f713c496382ae9735a329ba555dfcedd438cb4e14c57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZF6247B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCICAvEZ9ycrxtGZBTaFvYWvtaX9dTeCzUwEzX4muFIVPQAiBPH8AOMP05x6RXLi6E5ARz5MkdFsT5wYHqzkd8BLqrLir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM0Mw0UHZeO7cQv20UKtwDePP5v300p0qlOb23tvZo46XvYotDvgmkwrwLVKgUK%2FAkDoR64NcucDtaJY7AAUCvIh12v%2B2EAZ7H6CStqbkeB9%2BjFIKdhCuTbSQ0nFwN0zv%2B%2FktHnQ%2B7pHoQ3hgj6STKYs6QN2ZnVx7cp%2FR4VQ1UfHmQQFI5mz5wwqwWfs%2B3hH57b5BUSDjFmTGWIF9%2B%2Fbh2TCFUhTl%2B22BXySj3jPbL7xqLhwFyxy7k2iPRGs7z1XyIGTpo9qmNwyjakBmqDZ23cUyD98%2B7BwXwAds6dNOQHNOAjP%2BucN0rIcFttrbl1DBJCN9ol348QUms9xRNOu119OFGReUJJOi2tBh4MA8odZgU2yBmkfypIRVMSGWW4jqo2bMfPIi8RIHX%2Bo58%2FX7tFV2eK1h7i3c47EXkF944GDeZX2KFYMNcl%2FmBIoaYMmHrF4oZS7G2d2hYalxQPKQZ3jcGYTG%2BePtA5Gyf4AOt1%2BRJ0O9XSz7j6X0aFn6D5qfRnfGIJ%2FK4bQo%2FjbOyl0Q3awTmFGdcaeJrtYJKy9NpqLBYOVO6at%2B6T50exQskQiJGlYCCVujFs9uqRDYJL8ZX9c19yDt38F99s8cV9lA224Wmo1UsfYk3WKdpvIUtTx6yj4qa%2Fwag%2Ff9eRJow6srLxAY6pgGpDhI2%2FQf2oc8zQ3rwjt%2F3qA2v4pGHehV9cjfaW%2FpAFO7B9w8TYf3X6G8JF%2Bi8qPIzyFMbzUmS0VKc7Oiw7%2FJHCFL9m0jPrkLXtZYG94A2LJKJSWHVpdwV7s2S58OgQ3DoVWhmcLi1DJKGev%2B0JoBhXgWxNsMC1MJS%2BYxG5nbfvcNc7O4JO7B669a2bE9DRv65Y5TLTxFC1fZ0VWoTGjs3j9l0lU8p&X-Amz-Signature=7507e85658b9c65875dd61ff6831e11a412b734d8b4047e2945256391161ddd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=533c5f2ac0ba1674d7f27b19af2c48b62e11ea54afaaee1e50d6d548c6788a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJYZIQO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBouQgXkVLqE5MBuPswiV8X%2BbBcRs3KOD%2FxsfmhcEC%2FwAiBdf9NCEA3QIWFy5IkwBgtOVC2DnyHp1KZh3%2BKRQ07O5Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgcORDhaiQ2XkGs1TKtwDLbj6w1OOB5RcdORSspY3%2BVVtXsWSgZGFNzcLsv5dxb8fabtw2pqfNfGywpnReyP0HiR91TF2b3VXdgc%2BqzYFnSaP63VCN%2BWQ1P0aLShQ2vraIGahfllUHw2sWB6Z0jvaJyFf6gQVi3TckUsvkcVxBshwNpy0RL%2F%2FL8FQBMvNOWjyV90EQ3mN8q3J%2BE6hBWj5RadUzQQl8%2FSPfo8jIpvIcCqAumM25AvQfahc%2BN4WSjzH4gR2TfciKbF2NzPU3U2pYiGlJ71pnFXnowSFflnRN%2BNavz4uqoNpIoizClRc39Q5kLGxTktMRHufqXDYcJqDl1mFN1CjVG69DY%2Fc3s0ecZmvNgJGgPg%2FsqGW8lAkaxqgTM3KhnsUJwpbiAqau5s4r0m%2Bbm37Za2fJc1IQju26laI4hFv0uPMtW5pBVxwDk2bDDx51Zvvo%2B6hxBevQ5bkjkS%2BnPNN0eI5uNHEX6GUFA2%2FNcDoZwy3k%2BzZHFBR2%2B25VJSfGQl9sEkew0W5Q9osxhlkZKO3It17cTsD7TnbdaoEw3RiKemtt%2Bw6qXfFsLLibNbpPIhj1tQUX5Tnqsq9intOiAPOZgR3BICABc7hee%2F3wcPyhEcbVCjWPKxpd6wUWS9sIjb1Y7lmC8cwqcvLxAY6pgHzEryaAo4wrZ%2Fawr%2BiZqeDiLW5d10n%2Bb29jyQS55aUfsyr7VEm3HSm3K28jNCkFj69VBzER%2F1Kn5tq2hUPaR%2FNbM0PGta1wLeQT8FXGJNZ%2FQ2UP4qumSUfnvuRb%2BjTEvJ1%2BhY8WMdxqWEU4KDLcbecztrzkW28A1oGQTdOD9OuLd84XycN6%2FXzf30DE5B4LM5UtwWxl8S3pfP%2BqSf0yuxMSGMiRQMf&X-Amz-Signature=4bc9a96743b8426c782d63b40e10d439f65c898f0f557047dbfb980d417be6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XFMHPA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCID5tTo6J1gsGfYEL5B3z8s7%2BVmeAk6mv06S6yQVuaWvjAiBA6fy%2FfDh4DSZSg%2B4ncWyJXk4fy7cx3aJ8x7wAa9bV6Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMW0YzViDAs4r46swWKtwD6y502vnH8SrKDrZJydoBTJ6Z1kZclwQ%2FttCCLpDcYCeUptE%2FXX3CyB2WJJF3rJc58Luer4wYzMnwi1Ot63bpaiFuwMaV%2FFxyOZkt2FCRf4AZHy3C4ZalEA70b0hU14Zm3Q579wjwQ%2BWoClGgGxDD4PzrADcetsVeuXu9Wp2BOBSxmlQBfasvqkpFM0wKTLWM3yeT94kyn4SOu3u%2FgiHgds%2FfMx2wCsb%2FyxgNKTBVad0HZFvuprfqDM8arW278mSpiWBSA3u%2FL65DvUgd%2FKjWEmApVUsHk5OmC7VE1alyBc6vYBriFvT268IERSWq1zDEHO0bVF%2FCYq3yfJy4DRuNxYvL9h9g7V2gbs35%2F1LlzHCUEui%2BkdlleXUe7CSM%2BjE0LI31llevH1fj6uAqv8IN1fK0YkC%2F7ziizpJpvqPRax4UnV68BC9y%2BrtKYA5b8p88b7vOmS0QItEO0wygJFQ5Im1oKEBSEMZzyHSuLMiaB2JpJQN7vlVbRzLFuMt8C%2BpQqkT0HNUQaMNf2%2B9TTQxj%2Fb9yL3tqWW%2F2K%2FKd7zYTzUZMIvzYS5%2F3uoixkVZi98B3VkGJuAN9S0FEYUpMr7uQj4YrPJFn93cAgGVp3TJuIJapsvasVSjp1qFoQiswhcvLxAY6pgHGBIteo%2FDcdw3Y1Mk27M%2BqHUyI9MJapvIvAGtKMYmygqz5njm4eLe14JYTcs6eZgaPJ%2FdJczmn9F2fB5tPKHkv2sU4ei1ctcsDwMnI83uTw14x6%2BRaZX%2BN31c8Ks1ggRZEXUXCLgKiG7SKa3YS%2FkgNy%2F2fI2YRcPqgQT2Ak51glmPUrH9gBZJXIS48tIZ26lQ13TjWIorBqnTmuNMTkzVBKHM%2BuB2z&X-Amz-Signature=44620c94fc064442a06d5ad24e81bf793694ba3421239bf9b4ad2505dbcc8f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XFMHPA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCID5tTo6J1gsGfYEL5B3z8s7%2BVmeAk6mv06S6yQVuaWvjAiBA6fy%2FfDh4DSZSg%2B4ncWyJXk4fy7cx3aJ8x7wAa9bV6Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMW0YzViDAs4r46swWKtwD6y502vnH8SrKDrZJydoBTJ6Z1kZclwQ%2FttCCLpDcYCeUptE%2FXX3CyB2WJJF3rJc58Luer4wYzMnwi1Ot63bpaiFuwMaV%2FFxyOZkt2FCRf4AZHy3C4ZalEA70b0hU14Zm3Q579wjwQ%2BWoClGgGxDD4PzrADcetsVeuXu9Wp2BOBSxmlQBfasvqkpFM0wKTLWM3yeT94kyn4SOu3u%2FgiHgds%2FfMx2wCsb%2FyxgNKTBVad0HZFvuprfqDM8arW278mSpiWBSA3u%2FL65DvUgd%2FKjWEmApVUsHk5OmC7VE1alyBc6vYBriFvT268IERSWq1zDEHO0bVF%2FCYq3yfJy4DRuNxYvL9h9g7V2gbs35%2F1LlzHCUEui%2BkdlleXUe7CSM%2BjE0LI31llevH1fj6uAqv8IN1fK0YkC%2F7ziizpJpvqPRax4UnV68BC9y%2BrtKYA5b8p88b7vOmS0QItEO0wygJFQ5Im1oKEBSEMZzyHSuLMiaB2JpJQN7vlVbRzLFuMt8C%2BpQqkT0HNUQaMNf2%2B9TTQxj%2Fb9yL3tqWW%2F2K%2FKd7zYTzUZMIvzYS5%2F3uoixkVZi98B3VkGJuAN9S0FEYUpMr7uQj4YrPJFn93cAgGVp3TJuIJapsvasVSjp1qFoQiswhcvLxAY6pgHGBIteo%2FDcdw3Y1Mk27M%2BqHUyI9MJapvIvAGtKMYmygqz5njm4eLe14JYTcs6eZgaPJ%2FdJczmn9F2fB5tPKHkv2sU4ei1ctcsDwMnI83uTw14x6%2BRaZX%2BN31c8Ks1ggRZEXUXCLgKiG7SKa3YS%2FkgNy%2F2fI2YRcPqgQT2Ak51glmPUrH9gBZJXIS48tIZ26lQ13TjWIorBqnTmuNMTkzVBKHM%2BuB2z&X-Amz-Signature=093f7599fba58b37a38b33913e2bc564c0d811412cbc5bee5e532f9c5ffab48e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XFMHPA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCID5tTo6J1gsGfYEL5B3z8s7%2BVmeAk6mv06S6yQVuaWvjAiBA6fy%2FfDh4DSZSg%2B4ncWyJXk4fy7cx3aJ8x7wAa9bV6Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMW0YzViDAs4r46swWKtwD6y502vnH8SrKDrZJydoBTJ6Z1kZclwQ%2FttCCLpDcYCeUptE%2FXX3CyB2WJJF3rJc58Luer4wYzMnwi1Ot63bpaiFuwMaV%2FFxyOZkt2FCRf4AZHy3C4ZalEA70b0hU14Zm3Q579wjwQ%2BWoClGgGxDD4PzrADcetsVeuXu9Wp2BOBSxmlQBfasvqkpFM0wKTLWM3yeT94kyn4SOu3u%2FgiHgds%2FfMx2wCsb%2FyxgNKTBVad0HZFvuprfqDM8arW278mSpiWBSA3u%2FL65DvUgd%2FKjWEmApVUsHk5OmC7VE1alyBc6vYBriFvT268IERSWq1zDEHO0bVF%2FCYq3yfJy4DRuNxYvL9h9g7V2gbs35%2F1LlzHCUEui%2BkdlleXUe7CSM%2BjE0LI31llevH1fj6uAqv8IN1fK0YkC%2F7ziizpJpvqPRax4UnV68BC9y%2BrtKYA5b8p88b7vOmS0QItEO0wygJFQ5Im1oKEBSEMZzyHSuLMiaB2JpJQN7vlVbRzLFuMt8C%2BpQqkT0HNUQaMNf2%2B9TTQxj%2Fb9yL3tqWW%2F2K%2FKd7zYTzUZMIvzYS5%2F3uoixkVZi98B3VkGJuAN9S0FEYUpMr7uQj4YrPJFn93cAgGVp3TJuIJapsvasVSjp1qFoQiswhcvLxAY6pgHGBIteo%2FDcdw3Y1Mk27M%2BqHUyI9MJapvIvAGtKMYmygqz5njm4eLe14JYTcs6eZgaPJ%2FdJczmn9F2fB5tPKHkv2sU4ei1ctcsDwMnI83uTw14x6%2BRaZX%2BN31c8Ks1ggRZEXUXCLgKiG7SKa3YS%2FkgNy%2F2fI2YRcPqgQT2Ak51glmPUrH9gBZJXIS48tIZ26lQ13TjWIorBqnTmuNMTkzVBKHM%2BuB2z&X-Amz-Signature=62d79ab60723e4b90b6d2de294bf84a2acaa96d81b0682599b923d2b75f62e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XFMHPA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCID5tTo6J1gsGfYEL5B3z8s7%2BVmeAk6mv06S6yQVuaWvjAiBA6fy%2FfDh4DSZSg%2B4ncWyJXk4fy7cx3aJ8x7wAa9bV6Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMW0YzViDAs4r46swWKtwD6y502vnH8SrKDrZJydoBTJ6Z1kZclwQ%2FttCCLpDcYCeUptE%2FXX3CyB2WJJF3rJc58Luer4wYzMnwi1Ot63bpaiFuwMaV%2FFxyOZkt2FCRf4AZHy3C4ZalEA70b0hU14Zm3Q579wjwQ%2BWoClGgGxDD4PzrADcetsVeuXu9Wp2BOBSxmlQBfasvqkpFM0wKTLWM3yeT94kyn4SOu3u%2FgiHgds%2FfMx2wCsb%2FyxgNKTBVad0HZFvuprfqDM8arW278mSpiWBSA3u%2FL65DvUgd%2FKjWEmApVUsHk5OmC7VE1alyBc6vYBriFvT268IERSWq1zDEHO0bVF%2FCYq3yfJy4DRuNxYvL9h9g7V2gbs35%2F1LlzHCUEui%2BkdlleXUe7CSM%2BjE0LI31llevH1fj6uAqv8IN1fK0YkC%2F7ziizpJpvqPRax4UnV68BC9y%2BrtKYA5b8p88b7vOmS0QItEO0wygJFQ5Im1oKEBSEMZzyHSuLMiaB2JpJQN7vlVbRzLFuMt8C%2BpQqkT0HNUQaMNf2%2B9TTQxj%2Fb9yL3tqWW%2F2K%2FKd7zYTzUZMIvzYS5%2F3uoixkVZi98B3VkGJuAN9S0FEYUpMr7uQj4YrPJFn93cAgGVp3TJuIJapsvasVSjp1qFoQiswhcvLxAY6pgHGBIteo%2FDcdw3Y1Mk27M%2BqHUyI9MJapvIvAGtKMYmygqz5njm4eLe14JYTcs6eZgaPJ%2FdJczmn9F2fB5tPKHkv2sU4ei1ctcsDwMnI83uTw14x6%2BRaZX%2BN31c8Ks1ggRZEXUXCLgKiG7SKa3YS%2FkgNy%2F2fI2YRcPqgQT2Ak51glmPUrH9gBZJXIS48tIZ26lQ13TjWIorBqnTmuNMTkzVBKHM%2BuB2z&X-Amz-Signature=a114b570a0beb8f72fc8e738ee39839bd2ae1dfde93c3da191905879dbb1d1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XFMHPA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCID5tTo6J1gsGfYEL5B3z8s7%2BVmeAk6mv06S6yQVuaWvjAiBA6fy%2FfDh4DSZSg%2B4ncWyJXk4fy7cx3aJ8x7wAa9bV6Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMW0YzViDAs4r46swWKtwD6y502vnH8SrKDrZJydoBTJ6Z1kZclwQ%2FttCCLpDcYCeUptE%2FXX3CyB2WJJF3rJc58Luer4wYzMnwi1Ot63bpaiFuwMaV%2FFxyOZkt2FCRf4AZHy3C4ZalEA70b0hU14Zm3Q579wjwQ%2BWoClGgGxDD4PzrADcetsVeuXu9Wp2BOBSxmlQBfasvqkpFM0wKTLWM3yeT94kyn4SOu3u%2FgiHgds%2FfMx2wCsb%2FyxgNKTBVad0HZFvuprfqDM8arW278mSpiWBSA3u%2FL65DvUgd%2FKjWEmApVUsHk5OmC7VE1alyBc6vYBriFvT268IERSWq1zDEHO0bVF%2FCYq3yfJy4DRuNxYvL9h9g7V2gbs35%2F1LlzHCUEui%2BkdlleXUe7CSM%2BjE0LI31llevH1fj6uAqv8IN1fK0YkC%2F7ziizpJpvqPRax4UnV68BC9y%2BrtKYA5b8p88b7vOmS0QItEO0wygJFQ5Im1oKEBSEMZzyHSuLMiaB2JpJQN7vlVbRzLFuMt8C%2BpQqkT0HNUQaMNf2%2B9TTQxj%2Fb9yL3tqWW%2F2K%2FKd7zYTzUZMIvzYS5%2F3uoixkVZi98B3VkGJuAN9S0FEYUpMr7uQj4YrPJFn93cAgGVp3TJuIJapsvasVSjp1qFoQiswhcvLxAY6pgHGBIteo%2FDcdw3Y1Mk27M%2BqHUyI9MJapvIvAGtKMYmygqz5njm4eLe14JYTcs6eZgaPJ%2FdJczmn9F2fB5tPKHkv2sU4ei1ctcsDwMnI83uTw14x6%2BRaZX%2BN31c8Ks1ggRZEXUXCLgKiG7SKa3YS%2FkgNy%2F2fI2YRcPqgQT2Ak51glmPUrH9gBZJXIS48tIZ26lQ13TjWIorBqnTmuNMTkzVBKHM%2BuB2z&X-Amz-Signature=6163cdf0b79f398c91fa22d5f0ae4fef2ea9d321cde95f3e973b739b01880040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XFMHPA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCID5tTo6J1gsGfYEL5B3z8s7%2BVmeAk6mv06S6yQVuaWvjAiBA6fy%2FfDh4DSZSg%2B4ncWyJXk4fy7cx3aJ8x7wAa9bV6Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMW0YzViDAs4r46swWKtwD6y502vnH8SrKDrZJydoBTJ6Z1kZclwQ%2FttCCLpDcYCeUptE%2FXX3CyB2WJJF3rJc58Luer4wYzMnwi1Ot63bpaiFuwMaV%2FFxyOZkt2FCRf4AZHy3C4ZalEA70b0hU14Zm3Q579wjwQ%2BWoClGgGxDD4PzrADcetsVeuXu9Wp2BOBSxmlQBfasvqkpFM0wKTLWM3yeT94kyn4SOu3u%2FgiHgds%2FfMx2wCsb%2FyxgNKTBVad0HZFvuprfqDM8arW278mSpiWBSA3u%2FL65DvUgd%2FKjWEmApVUsHk5OmC7VE1alyBc6vYBriFvT268IERSWq1zDEHO0bVF%2FCYq3yfJy4DRuNxYvL9h9g7V2gbs35%2F1LlzHCUEui%2BkdlleXUe7CSM%2BjE0LI31llevH1fj6uAqv8IN1fK0YkC%2F7ziizpJpvqPRax4UnV68BC9y%2BrtKYA5b8p88b7vOmS0QItEO0wygJFQ5Im1oKEBSEMZzyHSuLMiaB2JpJQN7vlVbRzLFuMt8C%2BpQqkT0HNUQaMNf2%2B9TTQxj%2Fb9yL3tqWW%2F2K%2FKd7zYTzUZMIvzYS5%2F3uoixkVZi98B3VkGJuAN9S0FEYUpMr7uQj4YrPJFn93cAgGVp3TJuIJapsvasVSjp1qFoQiswhcvLxAY6pgHGBIteo%2FDcdw3Y1Mk27M%2BqHUyI9MJapvIvAGtKMYmygqz5njm4eLe14JYTcs6eZgaPJ%2FdJczmn9F2fB5tPKHkv2sU4ei1ctcsDwMnI83uTw14x6%2BRaZX%2BN31c8Ks1ggRZEXUXCLgKiG7SKa3YS%2FkgNy%2F2fI2YRcPqgQT2Ak51glmPUrH9gBZJXIS48tIZ26lQ13TjWIorBqnTmuNMTkzVBKHM%2BuB2z&X-Amz-Signature=a22a91ded8a0aa06464a3d98251c95b72282d5b07243a7f28aac823acc095a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XFMHPA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCID5tTo6J1gsGfYEL5B3z8s7%2BVmeAk6mv06S6yQVuaWvjAiBA6fy%2FfDh4DSZSg%2B4ncWyJXk4fy7cx3aJ8x7wAa9bV6Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMW0YzViDAs4r46swWKtwD6y502vnH8SrKDrZJydoBTJ6Z1kZclwQ%2FttCCLpDcYCeUptE%2FXX3CyB2WJJF3rJc58Luer4wYzMnwi1Ot63bpaiFuwMaV%2FFxyOZkt2FCRf4AZHy3C4ZalEA70b0hU14Zm3Q579wjwQ%2BWoClGgGxDD4PzrADcetsVeuXu9Wp2BOBSxmlQBfasvqkpFM0wKTLWM3yeT94kyn4SOu3u%2FgiHgds%2FfMx2wCsb%2FyxgNKTBVad0HZFvuprfqDM8arW278mSpiWBSA3u%2FL65DvUgd%2FKjWEmApVUsHk5OmC7VE1alyBc6vYBriFvT268IERSWq1zDEHO0bVF%2FCYq3yfJy4DRuNxYvL9h9g7V2gbs35%2F1LlzHCUEui%2BkdlleXUe7CSM%2BjE0LI31llevH1fj6uAqv8IN1fK0YkC%2F7ziizpJpvqPRax4UnV68BC9y%2BrtKYA5b8p88b7vOmS0QItEO0wygJFQ5Im1oKEBSEMZzyHSuLMiaB2JpJQN7vlVbRzLFuMt8C%2BpQqkT0HNUQaMNf2%2B9TTQxj%2Fb9yL3tqWW%2F2K%2FKd7zYTzUZMIvzYS5%2F3uoixkVZi98B3VkGJuAN9S0FEYUpMr7uQj4YrPJFn93cAgGVp3TJuIJapsvasVSjp1qFoQiswhcvLxAY6pgHGBIteo%2FDcdw3Y1Mk27M%2BqHUyI9MJapvIvAGtKMYmygqz5njm4eLe14JYTcs6eZgaPJ%2FdJczmn9F2fB5tPKHkv2sU4ei1ctcsDwMnI83uTw14x6%2BRaZX%2BN31c8Ks1ggRZEXUXCLgKiG7SKa3YS%2FkgNy%2F2fI2YRcPqgQT2Ak51glmPUrH9gBZJXIS48tIZ26lQ13TjWIorBqnTmuNMTkzVBKHM%2BuB2z&X-Amz-Signature=1959bc96f651efc5949a129dbe2c514d89b65f119534c2c20bd10a8ae697c665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XFMHPA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCID5tTo6J1gsGfYEL5B3z8s7%2BVmeAk6mv06S6yQVuaWvjAiBA6fy%2FfDh4DSZSg%2B4ncWyJXk4fy7cx3aJ8x7wAa9bV6Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMW0YzViDAs4r46swWKtwD6y502vnH8SrKDrZJydoBTJ6Z1kZclwQ%2FttCCLpDcYCeUptE%2FXX3CyB2WJJF3rJc58Luer4wYzMnwi1Ot63bpaiFuwMaV%2FFxyOZkt2FCRf4AZHy3C4ZalEA70b0hU14Zm3Q579wjwQ%2BWoClGgGxDD4PzrADcetsVeuXu9Wp2BOBSxmlQBfasvqkpFM0wKTLWM3yeT94kyn4SOu3u%2FgiHgds%2FfMx2wCsb%2FyxgNKTBVad0HZFvuprfqDM8arW278mSpiWBSA3u%2FL65DvUgd%2FKjWEmApVUsHk5OmC7VE1alyBc6vYBriFvT268IERSWq1zDEHO0bVF%2FCYq3yfJy4DRuNxYvL9h9g7V2gbs35%2F1LlzHCUEui%2BkdlleXUe7CSM%2BjE0LI31llevH1fj6uAqv8IN1fK0YkC%2F7ziizpJpvqPRax4UnV68BC9y%2BrtKYA5b8p88b7vOmS0QItEO0wygJFQ5Im1oKEBSEMZzyHSuLMiaB2JpJQN7vlVbRzLFuMt8C%2BpQqkT0HNUQaMNf2%2B9TTQxj%2Fb9yL3tqWW%2F2K%2FKd7zYTzUZMIvzYS5%2F3uoixkVZi98B3VkGJuAN9S0FEYUpMr7uQj4YrPJFn93cAgGVp3TJuIJapsvasVSjp1qFoQiswhcvLxAY6pgHGBIteo%2FDcdw3Y1Mk27M%2BqHUyI9MJapvIvAGtKMYmygqz5njm4eLe14JYTcs6eZgaPJ%2FdJczmn9F2fB5tPKHkv2sU4ei1ctcsDwMnI83uTw14x6%2BRaZX%2BN31c8Ks1ggRZEXUXCLgKiG7SKa3YS%2FkgNy%2F2fI2YRcPqgQT2Ak51glmPUrH9gBZJXIS48tIZ26lQ13TjWIorBqnTmuNMTkzVBKHM%2BuB2z&X-Amz-Signature=3ca6d34ac398de2f35cb61d550f2a1257df5cef098f161542bbb12fd0aea0cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XFMHPA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCID5tTo6J1gsGfYEL5B3z8s7%2BVmeAk6mv06S6yQVuaWvjAiBA6fy%2FfDh4DSZSg%2B4ncWyJXk4fy7cx3aJ8x7wAa9bV6Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMW0YzViDAs4r46swWKtwD6y502vnH8SrKDrZJydoBTJ6Z1kZclwQ%2FttCCLpDcYCeUptE%2FXX3CyB2WJJF3rJc58Luer4wYzMnwi1Ot63bpaiFuwMaV%2FFxyOZkt2FCRf4AZHy3C4ZalEA70b0hU14Zm3Q579wjwQ%2BWoClGgGxDD4PzrADcetsVeuXu9Wp2BOBSxmlQBfasvqkpFM0wKTLWM3yeT94kyn4SOu3u%2FgiHgds%2FfMx2wCsb%2FyxgNKTBVad0HZFvuprfqDM8arW278mSpiWBSA3u%2FL65DvUgd%2FKjWEmApVUsHk5OmC7VE1alyBc6vYBriFvT268IERSWq1zDEHO0bVF%2FCYq3yfJy4DRuNxYvL9h9g7V2gbs35%2F1LlzHCUEui%2BkdlleXUe7CSM%2BjE0LI31llevH1fj6uAqv8IN1fK0YkC%2F7ziizpJpvqPRax4UnV68BC9y%2BrtKYA5b8p88b7vOmS0QItEO0wygJFQ5Im1oKEBSEMZzyHSuLMiaB2JpJQN7vlVbRzLFuMt8C%2BpQqkT0HNUQaMNf2%2B9TTQxj%2Fb9yL3tqWW%2F2K%2FKd7zYTzUZMIvzYS5%2F3uoixkVZi98B3VkGJuAN9S0FEYUpMr7uQj4YrPJFn93cAgGVp3TJuIJapsvasVSjp1qFoQiswhcvLxAY6pgHGBIteo%2FDcdw3Y1Mk27M%2BqHUyI9MJapvIvAGtKMYmygqz5njm4eLe14JYTcs6eZgaPJ%2FdJczmn9F2fB5tPKHkv2sU4ei1ctcsDwMnI83uTw14x6%2BRaZX%2BN31c8Ks1ggRZEXUXCLgKiG7SKa3YS%2FkgNy%2F2fI2YRcPqgQT2Ak51glmPUrH9gBZJXIS48tIZ26lQ13TjWIorBqnTmuNMTkzVBKHM%2BuB2z&X-Amz-Signature=91daf6311d1b038a5dc5643b599ae4a408110e9cfe4e5afb3dbd3f0f86a613b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XFMHPA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCID5tTo6J1gsGfYEL5B3z8s7%2BVmeAk6mv06S6yQVuaWvjAiBA6fy%2FfDh4DSZSg%2B4ncWyJXk4fy7cx3aJ8x7wAa9bV6Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMW0YzViDAs4r46swWKtwD6y502vnH8SrKDrZJydoBTJ6Z1kZclwQ%2FttCCLpDcYCeUptE%2FXX3CyB2WJJF3rJc58Luer4wYzMnwi1Ot63bpaiFuwMaV%2FFxyOZkt2FCRf4AZHy3C4ZalEA70b0hU14Zm3Q579wjwQ%2BWoClGgGxDD4PzrADcetsVeuXu9Wp2BOBSxmlQBfasvqkpFM0wKTLWM3yeT94kyn4SOu3u%2FgiHgds%2FfMx2wCsb%2FyxgNKTBVad0HZFvuprfqDM8arW278mSpiWBSA3u%2FL65DvUgd%2FKjWEmApVUsHk5OmC7VE1alyBc6vYBriFvT268IERSWq1zDEHO0bVF%2FCYq3yfJy4DRuNxYvL9h9g7V2gbs35%2F1LlzHCUEui%2BkdlleXUe7CSM%2BjE0LI31llevH1fj6uAqv8IN1fK0YkC%2F7ziizpJpvqPRax4UnV68BC9y%2BrtKYA5b8p88b7vOmS0QItEO0wygJFQ5Im1oKEBSEMZzyHSuLMiaB2JpJQN7vlVbRzLFuMt8C%2BpQqkT0HNUQaMNf2%2B9TTQxj%2Fb9yL3tqWW%2F2K%2FKd7zYTzUZMIvzYS5%2F3uoixkVZi98B3VkGJuAN9S0FEYUpMr7uQj4YrPJFn93cAgGVp3TJuIJapsvasVSjp1qFoQiswhcvLxAY6pgHGBIteo%2FDcdw3Y1Mk27M%2BqHUyI9MJapvIvAGtKMYmygqz5njm4eLe14JYTcs6eZgaPJ%2FdJczmn9F2fB5tPKHkv2sU4ei1ctcsDwMnI83uTw14x6%2BRaZX%2BN31c8Ks1ggRZEXUXCLgKiG7SKa3YS%2FkgNy%2F2fI2YRcPqgQT2Ak51glmPUrH9gBZJXIS48tIZ26lQ13TjWIorBqnTmuNMTkzVBKHM%2BuB2z&X-Amz-Signature=98c44f7f6f0d01a6ded003dc653738275a6ea0ff2b34cb96b793e4f1ea1e6dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
