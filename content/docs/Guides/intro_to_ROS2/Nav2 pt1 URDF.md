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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=2a5810596c5d322380a1fdab73fb189d9779924d05f0477bc9ff2569059eb60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=93da695eefb9534839bc41ef37a6800d3ee9d8fa213764a2d991f2a6c6cb575c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=92b54f145da16235e4a701420bfe0a6aca3edce2c8c4e72d425ff6762f85d2bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=736d6283357fba3e38c26511551caf47eb111fbe2d2bd984dbe15b12b9d7e76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=57e6557205aaf1e665f5c00a36a74fce79d41b7aaa646f6e5fbe0947ed2233ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=cddc554aee432d64153b456d20fbc8077ba8aec7d49074d7cd48879ac072bcbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=3489751df19db6b099760a1ad4fc98a13b0c4eab86abfc15be24e6095ac46ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=30ac4165900ea03fd5b71cea183b85a52c61af6ca837ece05f621c84b0d288a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=d3afbd20bd368be7062159f9277dfd359bee88dc78dc765f4e1fd5951518fda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=993b5915a493072d736981e560c4d8ff28c19a5cdcce15d8d9192e3fdaf4599b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4F353GS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqtLOsQE4w9elzqRORw9zkgj2aaNzGH3a%2BV8x3y0bOOQIgXu3AOTrvuArbynfMle1zp9%2BfCuba3VrT8VY7EBpKmRcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFCsB2lIlNVBBb9P%2BCrcAw%2BOkD%2FaSk4zY5ZZf9Z2%2FtgBm2SlgH801pPON0Uq3P4CbbAvRgX0bfPqLkgPcfJpD0lZd8Ph1X2wd1mcNRPXqMHvx9KKZbwPZS5WmNbE6CQaeQyEo2TrDPMruNp7Mv5zOB2Q%2BpBs2GCm3Sxb1zGUQ3j7adZm%2FQTu532YSkSKdxcxoAufB6K3oKKFiTzDu094MWYtBwMyV7qOf%2FGrUB7rXPpowdnzSfZf8ht3%2FPKpnq%2BBrJO9tjLOJ33Tw70MReLhum0G5lwmS6u9wyaEm8Z0tditN6GbvWakT0g%2F7axuKyh8kmuCiFaoWODbFDMDkPtcF%2FcEaHnTongffkO7U5i3BdmgAm7zxdvo1KAO8qNpvgSWcfSWlzpG6QKyS2UfkLMfsfjcRaNKfdKqEuoz04c%2FdBCBQ7CSxyfIenIw7BWZ%2FT0zaDug6ZwAphjthuQfZLFp11xN0%2FquN5TOfRcQwN08Uojxm1beiSltE1h%2B%2B22xkzSLhtW850yuwcwO3BjP1xWcq%2BJlx0fWkLlna9dpqeTD4TMX%2FylvavlnUuxCB1rsEC355XvT8pWHS1qp%2B12RRo3jl3V%2B4zQfUpHGdZLSjhlwTyatATQKaR4LzgJicgay3jaVsWNfBU8eOQAD%2FlhTMNvSvcQGOqUBRLK6cHcYr%2F2SyGKO5Vte4L4FvAXIRnBInfnVv0AEy8b76vzaFUngN8ceuy7c%2F50VtpvCHn4ztBNSA0kVk4cRw3VJdeI6Xa0jfg9L2eQfjqMHbOMC1JPOZWGY1yvjHsdQ6%2BOAT7D14b41EACZpCEPEeaf7Sy0L6yJqdtnNTWMG1Ysfncc%2B4ABHN4m8SiaHrFEi7ZbIhrdW8ACsPXWTcJjm5UO4Vp%2F&X-Amz-Signature=3104c74893f25fa772b9b9f643ad236db6602f36c47ad2c458b1bd74ac8d4090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKN6FEO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdwLbrerG25LjsEhdvoAX3ElLw1HbtZBLW%2FSGiG6ajoQIhAN5TgBl6FGeaD08CqWtJkq7hO4XRPwqvKD4Q1BljFrOYKv8DCC8QABoMNjM3NDIzMTgzODA1IgyC7NgREPsaJCYSUvwq3AMBLHb5QiyXfQ0LifHwQvm6U%2FvmcZDZCOWKgjm79rfP%2BSNU0RS9bvWdgr4Usi7a%2F%2BVs%2BcnbOsuUNDkd3hd4ALF30%2BJS0wOd4GNY1stWPMUpwUK%2F%2F7k2NWATbR9ElL1g7BB%2Fs0SZRKYJNAofenzemmI6AAnqU0ogXn%2FNwV%2FB1M8c5wXc4AIo%2BnO2WweYJIYqYYZPYZTMk8EV%2BWwNYGm%2F6TvQ54ebwKbfnSm%2Bqzke2CWLmXQBFU1s0OCeZmCe%2BygH6TOjmBYnNZYF5l4fBf8yrnD8G0FNXupLTLfYWK4jSMMuWUR0oxxBpXjmPVbwevxP82yXoyhD3dZ3VG2uitm0m1t9De6kmVC0Q3l1CTrcWoRflI1ao3yqoVes6%2BiFC9wuX0B1w0ZDPk%2F66q7V4zF8JwGSNjwAU6fB7mJMwHJiUKtS03tiRfHCnDOlmM3eopKhgen5Fm74e0S8lyjihPPLN4bstWRYxrRbjXmkcsHKZiF2Bu0uvLDluwjM1sz8fHb%2Fd9hbouNG6xuBWmzW31AgCIFGpZtYhIxcsU2Wo7MqSi9PH9UHv3mghbeQd%2FFq6dcye7KuanYufG7cZ6rV3PheUbTfBa88oVZ%2BQZLMhXGGTj5xgrdZfsO8bMC9sRf8wDCH0r3EBjqkASSHpASO8IGNJQojSKGIvR33%2FFK5wVGuLVgp1EsgiTZ4N%2Bu66kotr0LotTnuIcATb0rTxpkjwGtAzBUQWKJea37015VP9Pp%2FxdHI3IRhkemv65WpZTuiFJlS53wJ39quZwse1vEcFazBjzIgpnSTfn1X%2BGb%2FGemxwd%2BR3OZJwkRLUXiaItjKvpus%2Flb00nDtYUs8l5XnYY0vQEgxrOlaKh2pNGiT&X-Amz-Signature=54a4e7b5441bbd04237ef81444a367e0c3fbbb785ba40cbe5472f3b2e5c2efc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXYIDK3V%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPVHxJUOQn%2FkRGkgJCb585Y8LeUfWTF%2BJYX%2FYpWOKRfQIgGoJdl8wj%2BpqyM5ve%2FjjiHuFVxVQFw31%2B7QnbWr6L16sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPf1G1599d%2Bp9InaoSrcA5uXBYOEqg6nXB0uqgRqj2Mi%2BRecq8g3DkDN3RJIIYhXaEt4%2FdGX2T%2FGPJFCnDBi1aHmXG8x4CQOTJqCeDVsVFRVgbckkn78GOqMAtMdYVWSeIQjvn0QYupr5ZZl1NalJdE9gd5XX2%2FRmVXOsUeVONi%2F7WyyVk8xxepHKqvBTjUUEttg9fxVVcFzpP59JUNtMhyY%2F5sE%2Fiq%2FHww9WJHA%2FnQ6TO6Ru110n0UHrPpelt2oU7BYpx0oWA9Zs9bBRPshpDrB%2FaZ0j00dtovJ6Lub5vWdZWRzMaVunuxYz0S%2FY6IJAlPK1mPp0IWkKk8ra0CNsg7GVqQByFrL%2FXdJ00PAwNa1PA4QY81xBXfb%2FWfTVbo%2Fh3CiZhcUehC78rN9hL0%2FoEy479A6wuqUwlpU2bCpOBbZwz5EyWI5akE80QnNWQc7r%2F3kVyrAxIInXAuLotrC6X0fKSLiBThA3kb1CGSO%2B4HsfNcJxh%2BTq3uQu1mYJd7NObZy%2FKUHQIorEW5expT5d82Y0BKkSTI9HT20TO1S05CTqAUbpjvliDFcou2OePky4%2Fe8y4DSecaKn%2Bu7sLAHbRU1K75EEgJwgYhGCUQZrJQDdX3drdpYCW1SyK2B7IkCuRHuyy9sPahKuTSfMPrRvcQGOqUBwQLwwAFdhd%2FVkebx%2FqfkMdLKViIMVauKp9A7W3Cgfhy%2BVYw3JCc%2BxezhRDOeJUPsP10xh75mbt%2BtQ5yEq8Ri6RnZjj3cbsHoYCWmvgqtQaheQEJPSl86sa0WG7e%2BvnOk4EiGA9WJRF8b5kVD07YVy%2BZasuVYzuv8Jlsj9HxxselaocCIMW5z0TVYq6%2FHvdUfHox8lZdDsw7G3dt3uIvVLv3QeRsL&X-Amz-Signature=6deaae82d427793c9cb500f9a25f0dd9df546add22d6bca2014c6fc4ddc04b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=afd8c8e170caa29aaf918bb598c32d5d78c5b85c0e6984f9698f5b242117602e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5LSLK6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9VXI6Otxc3MfMDc2vNH8MdNS1SFtfR2qBvH7ndn7vhAIgc36ZXy453Qlk%2BJIheoe93fdb3adYu3DrpXwUZPSiw84q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDCOcplag0ZhDeiUH9ircA1zh9q2WPK56%2FJ6LcAeciImpQtVkJS0f3UoOmQGQbWBEKf0IzJpHLldmbO4bou1GUE6TMnGBK5twErUH717YU787UkFHCMQcoE%2BwxsjM8WJsiSUJ0wGiSnVHQRRYkPVtOLmbxDgtnm1rJFJXooLQLQTXe6vd9tRWpb7qFcLOhyj03LseHFjJIeky%2FIMqQdk4ZPpSpZuQmfkjvfS12RuTtCRo8GeynT7Qn7HmnuGtk%2BI5jf5M2cJlCtEexaIYlvKhhHlD%2FG6f4DkyI2%2F219Zd3KDXGubutalW54NcMVgyzJEJ7zb0pfODqwBoFGkVcDcPyDjxqWgavfq3YHXk11rzcqXBPXnsPxV4pOXo%2BltqWbYU6i75yNOvin%2F5ukILGhpvl%2FFjDIh6TmoIkbI1d7ZTL3f%2B%2B0oHiPRwPEhXljsUtIiJUNkYECQ2RHZ49XRs8f%2BV5rigPUN8gT50k48%2BAIToSb63SQDmHL%2BSjOm7dS03pOZ3dSVEQ5V%2Bdg6f3RUkXTemS7Bzvn%2B8PZB1Au54slc3jn5MB9ptTFjeKT%2FG6%2B9FVTUUuCClbAv6g4q%2BMlDq1zBbK7RjrFEo1FgDtC1oA92HZT3n0VY59qKTIM56yCygVsrtwb08cciu2oSNopkaMKPSvcQGOqUBGf%2FXvJ6bokF8SP68kWCotGOb108RVgQucPWwPJ3IyBAyZmkzoARDclQp9UlhfUGlmjRQeLLAwQeROeCyc2wfqDAmTMj8B3FFijUkYtxwFGggltrvK0crX9uXOMJbFeS09uNjLyoxuE6FR7OXPCWXuSGxNPy5aa6hn5bkm7%2B1HAj3mrd3ABVdw6HyeoCE2QGzB16K8GCysEnvu62ZX4ZOhpbFnJfC&X-Amz-Signature=651af5302ad3a1a45fe703cabacdece66ca798ff68126a7c3e7ac1d340a7f65d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=a6888e3f09c997ae131c211755ed3aaec3095c7cbabacc479c299de4b534d3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ADU5NBY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKj92glcFklqGnfakcqOZD8c7QiZP1Bqy%2BD1Li3CthvAiBcXOjJXWXfrJJf2cTial36oVCzYyjVqpbEXVnfPw4CLir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMqf2DdR9SOOFqYZ9dKtwDYaOkqWYHPBTve5ypBKUQhnnOMMS%2BDmOxRotewwBXT1Yc8yDB77Cfz9alwGdlWr2zfuuhu%2FSTGKIbglWeL%2Biy90TI6BbnNYG90e32JlXW4zfdSpXDrHVhw8OdMVVf%2Fj8Z3CMxJIumurRShHG%2BiL8fQaJifx6%2BphKBNbRhHY%2BUwaKPc6BMHGL4RkrO9dlZcF44Po7J%2FB%2F38ZGgm6WXYR837pivzfPZXgIyZlFxiQlHHwLH5DRDgeRobSNjtiL5s%2BJ%2FjbgxbfFDer1%2Fem%2BKJZGnAznZd9uY0Z0XnIJBqT2iW2sQ%2B9sLufTfRXooBszxaHjs9zgcw%2BPXZWJxb0tzjBl6jPKP9esLflabhl5ul1UeHLtX9r%2BkwWQ6WxVysUPADZhKUxDe9XCfkbwJUcSVkGyUBDMuxJgXfD5iiShghUWnbaqBZUlFyc8Z%2FOswxV3h6V2E1ZeJRzgSqUCcqcYanbhohOZJ3aBePtEOArnYUvTey289wurR6fP4b86h%2Bh0RpOcP0%2Ftt3T%2B14fuW8Uga4Q3K9bajuBduF%2B34U6kVZowy6aXe8aeDbm7Ll%2B9sVc83kbxnU1IfaAugeQyKwQr3emyXxMO6RQzGHbtMDbuyvw%2BQ%2F9W9Ge5qw84jSzvcl7UwrNK9xAY6pgGnHBlzCJq1lz31BsNrcHYd6i3QjYK5IJRREUEG3N1%2FXZF0GMArOZEScf98pzUjDxfp1okDXU6kUKJZiGWbXshwmX8Q%2F5GRUZYurcNr9Hj%2FiRq6Z1uwKLt9B6XH8WHYPZ%2BPeg1gcciA1XbGu%2ByUbSDaZEWClxBl0fxk41F2pCx6a51Gv0N29mxKQ6MgXG1ipvCLo980lzyYb5ZuOqOSZiYo5%2Frg%2BxbQ&X-Amz-Signature=9710575dfbc8247b222662d55800e2b6ebf3e7327ef2f9434fc0cd84775eb0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=44dcd07820ec4c4296e5ca97d9e16b41df220bee495006a2cfd828ec61179983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCY2NQF3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGOYA2a01zA%2FyPf6OA3iB3XicmrpQQsaecaFrsh%2FX1AAiEAqt7LO8gBg1%2B8YhoRzIQ5qe94RBOKVF4znvqzEvHLut0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGsqeerRu7E%2FNRAPsyrcA1f3m7Z0RpMHWZbPpNgJLW53TLO%2Bt4cFdty%2BDDWibbtlYPXhquv4vqXMHyq9UWR4Lucw5tUzREbHTpvGKdpXf4gT15Sf8KLOoX6hVbPJvZjDLvDjTcoRbdPCRPASXQWIAWoLTUzh2ry1YvX%2FLGknCDj%2BmiHQnPSxPH2VxrTuoTPgf638sN9yft%2FeeLeNcIg3VVyXvejGg7GAaVhRdVexg04TZWHsmKuqF6DWRjVTOmRzZT38Ny4udbjT4Js45y%2BGirWKmZvDW7a5fPWPC8YC4%2B%2BROpUONhx%2FOVBUupPs29hULtC0VAylEwlHHIDN%2Fsjsb7Kt6VOKuWD%2B9eG5CLW06Sf%2BPtUxFR5p1OJ5qUH%2B106wmOnAE%2FW%2FnRwSXebZ5z3%2FzhZxR6mCqdC88PyPBDnU%2FsYPQRfPybg3XYNjdWbxS0y12v%2BunyFAUIbktAwC0r2fsiLD8si0s1SKRUOqleHrs5IH%2Beja2xkwxHQCZ9cT3T%2BGIn6nqVL1CE%2F3fe1gvA2abAqNBB1yAwT4SkzIKgCCEOwyxj8ZN18WLIZaQXS0I3mUdWp9ST3Qt34fTOngbJ%2ByvbK5916lly76QLaRcwi14AALr763fJZtp0ynD6fzxluOpIi3EWx4TGVUsGLJMOPSvcQGOqUB3P3hxLegnTo8G%2FIt8VZIUV3Q0FtIDY85jeuS0ZMbBr4IunajcvMkkGJDbjRg%2FNcO7dZ672CKMBDuBCYRWoImeeAcPelgQQbLWhVVF4kgJfi9Ddf4zSJvumwmHGkxXAY8vKv4%2FsBPNOQatiNE61YCmAEXjJoHcBUoPWZ3XjtBegPLt0bBZO4dn0eFPMUKmFx7D6yOAeEZrwrPaEhU32zkcg05%2FV3%2F&X-Amz-Signature=660f0b6f94b94cd04f197709f1698f339106343e750c1102d45fbc92df828474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=9a7214aa1c7ad37c6795097038e7a18bc5c0b1aed102141b20a7d3af77fe4df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JI4K4QV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2F5fp7oAitVVCgb9CSC2tm42xX4BDRge8ugb7yr1gh9AiEA8qtFzlHXLrrk5tlVcYv1joEjuhWcbW5%2Bel1vMoMdOjgq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDA1hsIAhw2tEGpHu8ircA7bJg7WfinceURVu3QwmZb5kMWLtIqDA3cFHg%2F7FlWcJ5qoVG02AuTMkbh8daKEfBXH79sG9UsdH67mYNIbbaIYQaJqfgYi1eic5z67jV19xDU9ZxEvfq228%2FncRzeCvxka%2BWm57GNJh4%2Fhw2doglfFdde8OcOVM3z0XaibV3oVIeMCmMsepwC4OySqJi%2FPX0hTZUIvFGo%2B34OZbBoARIKk7XFDx0VMohDlm8kDacOHQrRHcbvyfAqjfXodKWJYCzrqSI34wv2n3lRRPwREKL9AcKGfW%2Ba85jSR%2F7aNqdIyO6hnMcPuuqblswNv0BDvYS57gE%2FJUjH%2FToKAbA5mYelTRtfHgcu7TZujQdRpy8vUxcOD5JXmfNLYwvJ3jf%2FMY2krS0%2FkaGCZGQRMe6K8pSPedVmQCYL2D%2FWT6iINsyCN34GmeTlvfUzVIOvhUzeouKW2WoOHdmquG3A29ZUBLDDYYnyNOXC7Nt741U79SCNTLVRGQSQzOZebR%2FUBGew9uuCCmAf7ANxReb2l7pOKa9F2m3ix%2FTL%2B8ZMGH0rzpcNgXcUQ6s%2BymxaPynO5SBUlYGdsy3%2FmxyfxHpRA14k92%2FK8Ut9wXwlzutOBp%2Fp3iLXI%2Bx8yzXOK7U%2FRv%2FsVqMMPSvcQGOqUBQwETZXnML5pHx5IGHzyXsOd0ODq9eGZTI7QbVXvMxKKi30Sr6jPLxKTTC7IsjqPB%2FGyVVfk2einnMVtATuJQHx2sJB4BUluYPIkjCvdDc6yjoY1JJ2axF%2FB4jW8b15cBmyQemdR03dO2QazbF2Fx%2BSs2ZwGJcfBpbJvnXE3s2C%2FH69rCEbBm05mvfRRYC%2BxMwuVUhIXxl7SLdHVdi0yRiCu4CN%2BS&X-Amz-Signature=4630ccae8749379e6198fd287f29a6d66c77ba88d9b0880e676363ad1388c68c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA67E3TO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsI5nDND5eDM03xManB3cuj7ngFjAH0Xq628nejVuT7AIgHQ7pcPlpJttX9vtL9IyI4ToNXfontQKPJGitWdEsEN4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLj%2BwbruTI3A9UiGASrcA5NRIY3VraO3Kg7mpWl0g4ncTT9J%2B0N5FHmwkYBy61BSLKwtVqFKg1dwfn9Xna69uJ6U1c8tZ2%2FB%2FlEyZhi7R8IuDTUN0B9jwOUdJKXCr4rwSY6QBqEYr5xVcuNh6il%2FX4S%2FkH8KQPo3Z8x9iB9%2FO%2Fd8nt0pVVRyWZehPGhMHzmCgiW6sq6%2Fqwa9ep%2FtpX0AthwYCst3jFXAKYPD8FEL61vPzRbGJsqvEeN1EzYRpODE5eg%2FcZ8ESzDJ7OaqhYqYpgpUaWBujd8G0l3J%2BCn0PD8lrSVK%2Fwcg7SZIPo5F%2FCuXehBSDO1d3abtC11qoLK6le1fZeGthIbig%2FjGV0P0TLlMem%2FJyFJ6iHa%2F9QlC9xJMCWs0FXhlzFdu9VxV0jraC3MDOh%2F44SzVwqYsPhXAeuFDcgIxREfhF4A0v5U9Yguu90hBejS9tqVQHa9VsQqdbeieFS4BS07ge9%2FC%2Ffx4eXSYb%2Bblxgn1rWAgK243Wjx0blNEygx%2F%2FqZpOYcpQGKlAh1y5mz%2BOvNi1pqh9Kk41QdqtvSju4gkcVHiqQdO4AuoD9wh7a72ty4y%2FT0njcDRJFAVXvmhMNVI1S66SYpXpBZ40xPeyRDv6s1C4gfw%2BovEmDHVoqJph1MtsfPYMPPRvcQGOqUB02dSvonsP3gGpsFucDWPUVooO4iEopy2i5sCOD4EN%2FgAuh3XxSZMg4U1fdFTsC%2BFSZo8bwbQoaa4NhMod2NH4vwwNVxANxhiUQRKfwlX6eQD9epshrjqJOlVi65iPtQu0Ess7ZbvtNEWS2OYJAp5IbQyB9SgENJ4NpNPr5OJ9kXXalIRdttLJEmWZFQ60ZLXVukMAudCnwqzIv6Pm3wvjXreRC81&X-Amz-Signature=f9d3babfed45dba778c74d53337f8dc37320043c772cfff3089a1ae6a6b1d792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDKRKCL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAY1xh4FVPLlP6T6mIUkk0yJcwSXMYP%2FE6kfdLxI%2ByAAiAZtSmuhs7Pcwz4h641DoDHyJKqYbqUB0f4MrChtSxRmyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMM98USG2RSNuAhPUaKtwDmylaSflEuws4eC3PatJVXr2igHoyeGbDiYtu27%2FsmaolPDlvZQn57a4Vy1Ea%2FCMYL11ZWyYhupEgtvpBurEH7ocPeeE6oFx%2Bx5ZLhMog9f61wGH5nyxMEufSQyNjwy6vc5W40epyEIsv607v0rN25gYsJukcCDahNblH5hDECYVwkQ9t0UP0HI8p8pOoHsm4s0z4%2BfgA93NfSxmyR2dwTFVqfa50bAiOuKsjvlAM3fPU6UTJK74tX770ShHE5myYd1OUDM3EfD%2B3mOnit2diLKmawzLaq84vUSADbngIbuXyQ8HRu0y2nxagutvMuTT%2FFlJmevP15H77l9IbdnPXfYyaMWRRdBIDqJkqmOW0iRCndf9Qp0x4CnKWRytfYYwwJSjaFZ9qbYSQ9O%2BT5uc%2BxTSkyJX5hHyhx8kA1ZutK%2FSW8a8X8NrwTsU4q6fB4s6QMPJJ0a1tWnqYeTOyzT586I5b0s0R5u%2FMWuCpiE9T255j9JI2RVO38qV%2B8xauilXqJtwpb1ValxqTJK7eTVnkvfJZoPgoEthhuJtnpDQ86BQjdFSrt1DR9oZwVICJFPaOIUAfMuiI2PrMTqY6w%2BNJxaD6J1lY4%2BxYMLchicXMYcOwCtkYXyHOq9nP2nUw0tK9xAY6pgHHeM%2FAJZvdSO%2FrPEX6dsm0qTGMAkxf0zb%2FBrWIqf%2FOBaqcnX6n6dAomHqBrxE5OJufedoqAm2cWXJA83%2FLsoH7YSc0p6bKYTaAX0KYydK9jMWWFjXLkquOGLK7Tsen1pv%2BCfe9z4%2BclVYhiJX%2BqtgBq8TVnIqUJsSEdGRDMRTE0AjzOYb8qiNrI3liFZLS2BQTjUj%2FuV9Hh3aA5lqTQJU7OgwdUAAa&X-Amz-Signature=4fc55e6d197d009f35972cbbb20cdb598b528f918dfd679b062149d0b3fe8c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6ZFUZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FzvtK%2Fd2GwsFDyn%2Fl4ANESupdReeeSXv8Fbt5DbUm6AiBZ1reHd4bCFPnrxKqL5J%2BbYidG3n9KbJhMD6yn%2FhYb4ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM6oanZ9QvVvyhw24WKtwDXrcg9a%2B5CIgGnyxBSyeofKuGVXh%2FXx8Y6OPsdqVZT41uZ9XjuHxZBIn%2BxfwpUDjbbWMKiEJn%2FZQiuX1jbC7%2Fn3OTx67D%2FIFxiaa50Ffw1QRQOtMGHrm1BISPnSpsZObbxCcqkGHvyoZjBecDM2WS6RZA%2BRG%2B9TPnqykYOX6Y6SEKzdZL6lH11iSpPUIkp7DxovDYWDJVJR55sByn%2FmXwL8d2d%2FUtN0qpmldiajmXe76z164kEG3B2uPPaG9FOiow4LPwSpbPN4l1SciYaU%2FNa3muIwnZ9a234IOXzM56XDxop%2FP9frmRMJgx48Yx5gPoH5XJ4iEP%2FUvcbXUd783LSVHeJyGEzzlchTrkVK%2FDmnIfN3td8EmNPhveMZbho4oLBlckP%2FtqWWo9Yq01ssKx22m%2BmmDRmsyGX67CuJsNFWg8gND1jb3ig41SH%2Fb8CYPhKlQ4RCTbFfhP6xDp45se4CkMOabOWtwIFYyqyIEBfrthSH18e2MmtqNAxzjOUNLvzlO4x9lW9LlTwv7H6pTIPIFQHSEr0bd25KzUdqiJ%2BcQYkuC%2F11dpBmM3fejI7U%2BaQL6MMxPj%2FfqK%2Bp0HybP%2FThyKeJ3C%2Fj%2F6ra%2BjUEBWnxtTJ1IDw3rIp8%2FkJqswhdK9xAY6pgGCiS0K86ukqBih0uuvpmK9FeJUcWD9D4EA6NDBx7NfnSuza7ARiu%2FMsy%2BxF%2F8xPuqYZsCSKQB6G6HL7OERgt1Oc6EgQHl3Rz%2BgeHn8BIwmYlKSQgUi39aozu13E0Na2po8uMgQ4fjJ7Smi3nE7rhLZ54ruo8F%2BIjls4oc%2BlG%2B%2BOIoIM%2FgNjaLnbk%2FOuBnf75XQjvKclZSHTM7pycY2jIZvY0ZiFyZO&X-Amz-Signature=feb44c4bbfd62a349582fd71df104aee8212c91013f0fadd1ad51ec2b3f20214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U4RIRHM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV0VaU44vtk%2BajS4Vc0oRW%2BQFAqTM7YwACK2oy0U38%2FgIgGFVPUGuttutOiPQpJapZivfjK40CabSuyY6UjrXHyxoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM6F237zx%2BxTZZ3l6SrcAyWgUunEg7jZYT6yrNAmKCDcJ0fe%2BqR3TzL79Y6CAAODImgSnqKjCdqFZvb8lvd67SLlrtFUW5awdsw5kFT6HkEgzmQaNULGEMZpvyZ5DjbyiDm2hlqxBq5Sa3HaDhLsvgd9lumoe4Fb4Jjlws6D59dnuHGYa%2FH%2BC9f%2FH%2BgGlqe0LpTjdC9yNYKkKmDSGwDhyuc2N79ELVQrUeLw84WuqcyxAnRrr6VymvJl3orqbqaMXSaaX0ro28KvDm5tUnt7kcbBWATt5bEmEnI5BrQ49V63NjOgf4MaWjG6EJ8F5fEIwBttMGVqSvA%2FXPvriGOMhjcoAi%2FwraHz1y6klDiCSaScp3ReSbxdXLbbRKE0TxzynKE2PoYnmtHS2UAhvS3jBk5GNULMbWCGcAyCcL76zdWgLwq2zahBao0CsbZPsKfdgrORB4bFKZIdAQYiWrwDTi4LRWXHvZySJsrWW9nZZ2RO0AZ4JFLQn%2FArLdU8Xh%2B3QNeEwONr9sv2jqaU9bifN8iub0tZy2MVnkdrIQ6v9hiFQF2Gk6JGiDJ3PIBHhjwIc0fEPXckaeOeOq00Opl0M47nX0k5fgQnWawhEPlRCweQH%2Ba%2F%2Bptng36sOnZTRW%2FEP9bSFXJ11A1VwDYlMNrSvcQGOqUBH5NHDRhkVy07F5wqzPmKUkC2dAu%2BO2MnQi9p6NkAO%2Bgz5FQWTNrTxz39nJ%2BaLH6e1isxZ1thch2SSsxn4t%2BLuYPta7ir3tQXTerIEKLi2tz%2FKR8tb6NLf7Tg295Y%2B2ARNkiI91eI44O2jfkXJ3RMAiFWR4pk6b3ugvbbdHLGvN1s62Aa28rbbPMsenahIWOzfTrcxF2fSZeJeKBUvUwuuzaJAgc8&X-Amz-Signature=760643c8e7dd1179d325c20694bde6e32eab65f4607d99c6c0d99ff7b7e35660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=645fa6c21d0dda2d2073198864ed5fb79898ba9ba24804a518fc868b511827c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NGBA2G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIEjvu%2Bkt53c0RZfy%2Frj%2BEbkvO11zpTFA6lrirNDmIwIgP4FJvuCLAaBP7eoeYOxLjNickwcEvvd6G3W3AwzbOeUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHGABC31mAL685M%2F2CrcAzIV%2FUp1%2FyyKVR3Y%2BB5QRLPWRDpnW%2F2B4VLXVuCyI5f49WK7JS5HMFxsSSkEkPrN9gEdUdKL1%2F%2FerEGlxsG2uEvWndpojskkvm24orlP4NKGktOQvkUTNPgE7jKPMkCLMsJ4mUzGOvX2vcVd4OC9aiEISl%2BCZzvUHk7UvHXpqidnEpWFoEMw3Jb%2FGeqUoOlKd9ZBvKpT1eSYtFFMuiq9ZI%2BqbqFaAkHwwQnmvU3OFFM8iEFgxhuY4UZvU4PhjjtAbcPRs22bvSpBI%2F5tOFHYTOjDmgN3gjxbNP5C24LTfTmh1ab6OGpVrQWfEGYLdcUdTa34e7BlVIGmli2vwxs6rrys3P8GGi9WIgi6VqCEWlU3AyCf833db57ygVNFGlEot5QSs6BXfpxY39ZEL9qRRFzxkIzg5jgIbeN%2BjUzZg42vSECG19%2B5%2F7HvUqQm66rsfakJNiQ0WlN7RQxygXCXDIbLER2e2v7NYfcdoRWJvgYHvI5yL%2BZE5m9EpBE07kwbTlu5ag2VjRSX8gF80GbNaRQdR8C%2B4WF84EPsUYg1B7me8C6JBEHEecYJ98J2EoAe3zLQHv46CQAM2%2BU6LZ4CAWkraSqTlHHFV0ylAiS%2FJFUOXSpu8iV4IEMG%2FbywMK3SvcQGOqUB0bgLiQnYQU3FZ8kJBAuP57yWX6v%2BmjW1%2B4iAvrKR%2BxtA7R%2BCjSy7fm85Az3LWg%2Brw%2BSIigb5Zx4CHN3DGHDBAxIKrzQeTu3EEJvsSGYXDtJJQuRWO1qsfWTIQeLXE7A3HScKNzwoaSIwUl0mPGTI6%2FNJSSYRDVz%2B%2F1RMHm3p2XHiGSvq3rKFyoMoifBxtz86JxCqSqaagUxe%2BU%2BoD4uMP4fThPef&X-Amz-Signature=3ff728e12c1d779084272757e04d0a84b7e1ccda25ce09f4b9c62fa28c29c02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIV5QTG2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfXItgb26E0jZqUU%2BzHnp91sNqoI3k29T4wcG%2FeqCxlAiBK%2F9INu1EmmKwQosPwtyS1jNypXy1Jkis2oq3tIIrTair%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMg0huEilWra1EoDowKtwD208BOR1pNE4a9oAfrq8HN2k4kIJzYO02d1mxzdRO7hPJuI3PeojjWl4AnZg6SBph7bxtZrXOa1Csq8pL0Ng2vCh%2FmlFkiO4roRVyP0KHP7xvVgucUSHon0%2BTLhcuzFggWC7qSk6OWitx9Jwu%2FYlwWx5rTJUDteyUR84HHBbnHg5gI7O6X1KFNNd5brioeBORM5cdjNiEHUML6LVEFPCAoVyKU8HqyX3w5hsdZoJSVXCXBo%2BW7FAyG%2BC8tTvcd%2Fmq9OwPDNfVpA4ovjYBoov548zp8mSD8L9w2xm8nBBYK6109nucnPeZX2VIZiHT6CfTIJRVRcwBU2j4arvjLZJWHNIKBB3lzoNGRqXIRcgVFA%2B0PrfGFpzP%2BMQpLfYQD%2Fp7Xv5ujGDADh45PAPw8dijTB8Y8r2JBtOIelxAnVhHx6PF3ywPpwHjlgq7PfXaLmH2d3qJz8dNwlXnvNGCGjffZdwI%2BODatC77HkqYUg9Y7ZveOAZthfXUiDJrCGMUZvXqTPHsbEhW2wm9bZx8ekWqVKztj1EIqnq9vZWfUJdwp9hCfkxN8ETW7mwrccaoeXfZNr6meB3GYUQBee1u2c77p0MVHdAXa8toCA0fEg4iBX67BExCrcgl05ty91Yw%2FdG9xAY6pgHoixIWvvL%2B5L8xXEnBlh59a98xNxA0ayzxUoF%2BpZ2layXdOh%2BAybXnHVTeKGOVaf829BNQtMZtARUGHyELGDNZxaGPqqafCsMDO4AhPwsLwEXkTRY96%2B8n3plPJwwSl4UM3FecKZ8RtW8NPIBD5bzbxQzhuUPY3PmPVKU%2FwsoZexG%2Ffu22t4CR5%2BRo2k2jJW77v2Gg3jCRzbvZMrTM5Z2f7nbGKjbl&X-Amz-Signature=7d779c4ab48fe2fdd305a367503123ea5a00e5ff50ef0957f0b85c7d05b442ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIV5QTG2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfXItgb26E0jZqUU%2BzHnp91sNqoI3k29T4wcG%2FeqCxlAiBK%2F9INu1EmmKwQosPwtyS1jNypXy1Jkis2oq3tIIrTair%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMg0huEilWra1EoDowKtwD208BOR1pNE4a9oAfrq8HN2k4kIJzYO02d1mxzdRO7hPJuI3PeojjWl4AnZg6SBph7bxtZrXOa1Csq8pL0Ng2vCh%2FmlFkiO4roRVyP0KHP7xvVgucUSHon0%2BTLhcuzFggWC7qSk6OWitx9Jwu%2FYlwWx5rTJUDteyUR84HHBbnHg5gI7O6X1KFNNd5brioeBORM5cdjNiEHUML6LVEFPCAoVyKU8HqyX3w5hsdZoJSVXCXBo%2BW7FAyG%2BC8tTvcd%2Fmq9OwPDNfVpA4ovjYBoov548zp8mSD8L9w2xm8nBBYK6109nucnPeZX2VIZiHT6CfTIJRVRcwBU2j4arvjLZJWHNIKBB3lzoNGRqXIRcgVFA%2B0PrfGFpzP%2BMQpLfYQD%2Fp7Xv5ujGDADh45PAPw8dijTB8Y8r2JBtOIelxAnVhHx6PF3ywPpwHjlgq7PfXaLmH2d3qJz8dNwlXnvNGCGjffZdwI%2BODatC77HkqYUg9Y7ZveOAZthfXUiDJrCGMUZvXqTPHsbEhW2wm9bZx8ekWqVKztj1EIqnq9vZWfUJdwp9hCfkxN8ETW7mwrccaoeXfZNr6meB3GYUQBee1u2c77p0MVHdAXa8toCA0fEg4iBX67BExCrcgl05ty91Yw%2FdG9xAY6pgHoixIWvvL%2B5L8xXEnBlh59a98xNxA0ayzxUoF%2BpZ2layXdOh%2BAybXnHVTeKGOVaf829BNQtMZtARUGHyELGDNZxaGPqqafCsMDO4AhPwsLwEXkTRY96%2B8n3plPJwwSl4UM3FecKZ8RtW8NPIBD5bzbxQzhuUPY3PmPVKU%2FwsoZexG%2Ffu22t4CR5%2BRo2k2jJW77v2Gg3jCRzbvZMrTM5Z2f7nbGKjbl&X-Amz-Signature=d32cff30638e2730f9e5030b39e2b33250863b962ea323dd7b551bcc34414091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIV5QTG2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfXItgb26E0jZqUU%2BzHnp91sNqoI3k29T4wcG%2FeqCxlAiBK%2F9INu1EmmKwQosPwtyS1jNypXy1Jkis2oq3tIIrTair%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMg0huEilWra1EoDowKtwD208BOR1pNE4a9oAfrq8HN2k4kIJzYO02d1mxzdRO7hPJuI3PeojjWl4AnZg6SBph7bxtZrXOa1Csq8pL0Ng2vCh%2FmlFkiO4roRVyP0KHP7xvVgucUSHon0%2BTLhcuzFggWC7qSk6OWitx9Jwu%2FYlwWx5rTJUDteyUR84HHBbnHg5gI7O6X1KFNNd5brioeBORM5cdjNiEHUML6LVEFPCAoVyKU8HqyX3w5hsdZoJSVXCXBo%2BW7FAyG%2BC8tTvcd%2Fmq9OwPDNfVpA4ovjYBoov548zp8mSD8L9w2xm8nBBYK6109nucnPeZX2VIZiHT6CfTIJRVRcwBU2j4arvjLZJWHNIKBB3lzoNGRqXIRcgVFA%2B0PrfGFpzP%2BMQpLfYQD%2Fp7Xv5ujGDADh45PAPw8dijTB8Y8r2JBtOIelxAnVhHx6PF3ywPpwHjlgq7PfXaLmH2d3qJz8dNwlXnvNGCGjffZdwI%2BODatC77HkqYUg9Y7ZveOAZthfXUiDJrCGMUZvXqTPHsbEhW2wm9bZx8ekWqVKztj1EIqnq9vZWfUJdwp9hCfkxN8ETW7mwrccaoeXfZNr6meB3GYUQBee1u2c77p0MVHdAXa8toCA0fEg4iBX67BExCrcgl05ty91Yw%2FdG9xAY6pgHoixIWvvL%2B5L8xXEnBlh59a98xNxA0ayzxUoF%2BpZ2layXdOh%2BAybXnHVTeKGOVaf829BNQtMZtARUGHyELGDNZxaGPqqafCsMDO4AhPwsLwEXkTRY96%2B8n3plPJwwSl4UM3FecKZ8RtW8NPIBD5bzbxQzhuUPY3PmPVKU%2FwsoZexG%2Ffu22t4CR5%2BRo2k2jJW77v2Gg3jCRzbvZMrTM5Z2f7nbGKjbl&X-Amz-Signature=2ea767dd9c416028aa1d4060648aa1a88da504839c39951a27aeb6ae9dc631c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIV5QTG2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfXItgb26E0jZqUU%2BzHnp91sNqoI3k29T4wcG%2FeqCxlAiBK%2F9INu1EmmKwQosPwtyS1jNypXy1Jkis2oq3tIIrTair%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMg0huEilWra1EoDowKtwD208BOR1pNE4a9oAfrq8HN2k4kIJzYO02d1mxzdRO7hPJuI3PeojjWl4AnZg6SBph7bxtZrXOa1Csq8pL0Ng2vCh%2FmlFkiO4roRVyP0KHP7xvVgucUSHon0%2BTLhcuzFggWC7qSk6OWitx9Jwu%2FYlwWx5rTJUDteyUR84HHBbnHg5gI7O6X1KFNNd5brioeBORM5cdjNiEHUML6LVEFPCAoVyKU8HqyX3w5hsdZoJSVXCXBo%2BW7FAyG%2BC8tTvcd%2Fmq9OwPDNfVpA4ovjYBoov548zp8mSD8L9w2xm8nBBYK6109nucnPeZX2VIZiHT6CfTIJRVRcwBU2j4arvjLZJWHNIKBB3lzoNGRqXIRcgVFA%2B0PrfGFpzP%2BMQpLfYQD%2Fp7Xv5ujGDADh45PAPw8dijTB8Y8r2JBtOIelxAnVhHx6PF3ywPpwHjlgq7PfXaLmH2d3qJz8dNwlXnvNGCGjffZdwI%2BODatC77HkqYUg9Y7ZveOAZthfXUiDJrCGMUZvXqTPHsbEhW2wm9bZx8ekWqVKztj1EIqnq9vZWfUJdwp9hCfkxN8ETW7mwrccaoeXfZNr6meB3GYUQBee1u2c77p0MVHdAXa8toCA0fEg4iBX67BExCrcgl05ty91Yw%2FdG9xAY6pgHoixIWvvL%2B5L8xXEnBlh59a98xNxA0ayzxUoF%2BpZ2layXdOh%2BAybXnHVTeKGOVaf829BNQtMZtARUGHyELGDNZxaGPqqafCsMDO4AhPwsLwEXkTRY96%2B8n3plPJwwSl4UM3FecKZ8RtW8NPIBD5bzbxQzhuUPY3PmPVKU%2FwsoZexG%2Ffu22t4CR5%2BRo2k2jJW77v2Gg3jCRzbvZMrTM5Z2f7nbGKjbl&X-Amz-Signature=c1554a87d24b842839882ca42a07f8693f8f30160b826b2b35f15ed4754a35f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIV5QTG2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfXItgb26E0jZqUU%2BzHnp91sNqoI3k29T4wcG%2FeqCxlAiBK%2F9INu1EmmKwQosPwtyS1jNypXy1Jkis2oq3tIIrTair%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMg0huEilWra1EoDowKtwD208BOR1pNE4a9oAfrq8HN2k4kIJzYO02d1mxzdRO7hPJuI3PeojjWl4AnZg6SBph7bxtZrXOa1Csq8pL0Ng2vCh%2FmlFkiO4roRVyP0KHP7xvVgucUSHon0%2BTLhcuzFggWC7qSk6OWitx9Jwu%2FYlwWx5rTJUDteyUR84HHBbnHg5gI7O6X1KFNNd5brioeBORM5cdjNiEHUML6LVEFPCAoVyKU8HqyX3w5hsdZoJSVXCXBo%2BW7FAyG%2BC8tTvcd%2Fmq9OwPDNfVpA4ovjYBoov548zp8mSD8L9w2xm8nBBYK6109nucnPeZX2VIZiHT6CfTIJRVRcwBU2j4arvjLZJWHNIKBB3lzoNGRqXIRcgVFA%2B0PrfGFpzP%2BMQpLfYQD%2Fp7Xv5ujGDADh45PAPw8dijTB8Y8r2JBtOIelxAnVhHx6PF3ywPpwHjlgq7PfXaLmH2d3qJz8dNwlXnvNGCGjffZdwI%2BODatC77HkqYUg9Y7ZveOAZthfXUiDJrCGMUZvXqTPHsbEhW2wm9bZx8ekWqVKztj1EIqnq9vZWfUJdwp9hCfkxN8ETW7mwrccaoeXfZNr6meB3GYUQBee1u2c77p0MVHdAXa8toCA0fEg4iBX67BExCrcgl05ty91Yw%2FdG9xAY6pgHoixIWvvL%2B5L8xXEnBlh59a98xNxA0ayzxUoF%2BpZ2layXdOh%2BAybXnHVTeKGOVaf829BNQtMZtARUGHyELGDNZxaGPqqafCsMDO4AhPwsLwEXkTRY96%2B8n3plPJwwSl4UM3FecKZ8RtW8NPIBD5bzbxQzhuUPY3PmPVKU%2FwsoZexG%2Ffu22t4CR5%2BRo2k2jJW77v2Gg3jCRzbvZMrTM5Z2f7nbGKjbl&X-Amz-Signature=c64d9c1fc33f6a87ca458860b3045cda143f73d5875469f8abf2b8dcca2f0795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIV5QTG2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfXItgb26E0jZqUU%2BzHnp91sNqoI3k29T4wcG%2FeqCxlAiBK%2F9INu1EmmKwQosPwtyS1jNypXy1Jkis2oq3tIIrTair%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMg0huEilWra1EoDowKtwD208BOR1pNE4a9oAfrq8HN2k4kIJzYO02d1mxzdRO7hPJuI3PeojjWl4AnZg6SBph7bxtZrXOa1Csq8pL0Ng2vCh%2FmlFkiO4roRVyP0KHP7xvVgucUSHon0%2BTLhcuzFggWC7qSk6OWitx9Jwu%2FYlwWx5rTJUDteyUR84HHBbnHg5gI7O6X1KFNNd5brioeBORM5cdjNiEHUML6LVEFPCAoVyKU8HqyX3w5hsdZoJSVXCXBo%2BW7FAyG%2BC8tTvcd%2Fmq9OwPDNfVpA4ovjYBoov548zp8mSD8L9w2xm8nBBYK6109nucnPeZX2VIZiHT6CfTIJRVRcwBU2j4arvjLZJWHNIKBB3lzoNGRqXIRcgVFA%2B0PrfGFpzP%2BMQpLfYQD%2Fp7Xv5ujGDADh45PAPw8dijTB8Y8r2JBtOIelxAnVhHx6PF3ywPpwHjlgq7PfXaLmH2d3qJz8dNwlXnvNGCGjffZdwI%2BODatC77HkqYUg9Y7ZveOAZthfXUiDJrCGMUZvXqTPHsbEhW2wm9bZx8ekWqVKztj1EIqnq9vZWfUJdwp9hCfkxN8ETW7mwrccaoeXfZNr6meB3GYUQBee1u2c77p0MVHdAXa8toCA0fEg4iBX67BExCrcgl05ty91Yw%2FdG9xAY6pgHoixIWvvL%2B5L8xXEnBlh59a98xNxA0ayzxUoF%2BpZ2layXdOh%2BAybXnHVTeKGOVaf829BNQtMZtARUGHyELGDNZxaGPqqafCsMDO4AhPwsLwEXkTRY96%2B8n3plPJwwSl4UM3FecKZ8RtW8NPIBD5bzbxQzhuUPY3PmPVKU%2FwsoZexG%2Ffu22t4CR5%2BRo2k2jJW77v2Gg3jCRzbvZMrTM5Z2f7nbGKjbl&X-Amz-Signature=5dbdeeb6f4e062a575a39201e0502fe77b45fc34a5d0b8f7b98bb9e628e2afb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIV5QTG2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfXItgb26E0jZqUU%2BzHnp91sNqoI3k29T4wcG%2FeqCxlAiBK%2F9INu1EmmKwQosPwtyS1jNypXy1Jkis2oq3tIIrTair%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMg0huEilWra1EoDowKtwD208BOR1pNE4a9oAfrq8HN2k4kIJzYO02d1mxzdRO7hPJuI3PeojjWl4AnZg6SBph7bxtZrXOa1Csq8pL0Ng2vCh%2FmlFkiO4roRVyP0KHP7xvVgucUSHon0%2BTLhcuzFggWC7qSk6OWitx9Jwu%2FYlwWx5rTJUDteyUR84HHBbnHg5gI7O6X1KFNNd5brioeBORM5cdjNiEHUML6LVEFPCAoVyKU8HqyX3w5hsdZoJSVXCXBo%2BW7FAyG%2BC8tTvcd%2Fmq9OwPDNfVpA4ovjYBoov548zp8mSD8L9w2xm8nBBYK6109nucnPeZX2VIZiHT6CfTIJRVRcwBU2j4arvjLZJWHNIKBB3lzoNGRqXIRcgVFA%2B0PrfGFpzP%2BMQpLfYQD%2Fp7Xv5ujGDADh45PAPw8dijTB8Y8r2JBtOIelxAnVhHx6PF3ywPpwHjlgq7PfXaLmH2d3qJz8dNwlXnvNGCGjffZdwI%2BODatC77HkqYUg9Y7ZveOAZthfXUiDJrCGMUZvXqTPHsbEhW2wm9bZx8ekWqVKztj1EIqnq9vZWfUJdwp9hCfkxN8ETW7mwrccaoeXfZNr6meB3GYUQBee1u2c77p0MVHdAXa8toCA0fEg4iBX67BExCrcgl05ty91Yw%2FdG9xAY6pgHoixIWvvL%2B5L8xXEnBlh59a98xNxA0ayzxUoF%2BpZ2layXdOh%2BAybXnHVTeKGOVaf829BNQtMZtARUGHyELGDNZxaGPqqafCsMDO4AhPwsLwEXkTRY96%2B8n3plPJwwSl4UM3FecKZ8RtW8NPIBD5bzbxQzhuUPY3PmPVKU%2FwsoZexG%2Ffu22t4CR5%2BRo2k2jJW77v2Gg3jCRzbvZMrTM5Z2f7nbGKjbl&X-Amz-Signature=2ea767dd9c416028aa1d4060648aa1a88da504839c39951a27aeb6ae9dc631c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIV5QTG2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfXItgb26E0jZqUU%2BzHnp91sNqoI3k29T4wcG%2FeqCxlAiBK%2F9INu1EmmKwQosPwtyS1jNypXy1Jkis2oq3tIIrTair%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMg0huEilWra1EoDowKtwD208BOR1pNE4a9oAfrq8HN2k4kIJzYO02d1mxzdRO7hPJuI3PeojjWl4AnZg6SBph7bxtZrXOa1Csq8pL0Ng2vCh%2FmlFkiO4roRVyP0KHP7xvVgucUSHon0%2BTLhcuzFggWC7qSk6OWitx9Jwu%2FYlwWx5rTJUDteyUR84HHBbnHg5gI7O6X1KFNNd5brioeBORM5cdjNiEHUML6LVEFPCAoVyKU8HqyX3w5hsdZoJSVXCXBo%2BW7FAyG%2BC8tTvcd%2Fmq9OwPDNfVpA4ovjYBoov548zp8mSD8L9w2xm8nBBYK6109nucnPeZX2VIZiHT6CfTIJRVRcwBU2j4arvjLZJWHNIKBB3lzoNGRqXIRcgVFA%2B0PrfGFpzP%2BMQpLfYQD%2Fp7Xv5ujGDADh45PAPw8dijTB8Y8r2JBtOIelxAnVhHx6PF3ywPpwHjlgq7PfXaLmH2d3qJz8dNwlXnvNGCGjffZdwI%2BODatC77HkqYUg9Y7ZveOAZthfXUiDJrCGMUZvXqTPHsbEhW2wm9bZx8ekWqVKztj1EIqnq9vZWfUJdwp9hCfkxN8ETW7mwrccaoeXfZNr6meB3GYUQBee1u2c77p0MVHdAXa8toCA0fEg4iBX67BExCrcgl05ty91Yw%2FdG9xAY6pgHoixIWvvL%2B5L8xXEnBlh59a98xNxA0ayzxUoF%2BpZ2layXdOh%2BAybXnHVTeKGOVaf829BNQtMZtARUGHyELGDNZxaGPqqafCsMDO4AhPwsLwEXkTRY96%2B8n3plPJwwSl4UM3FecKZ8RtW8NPIBD5bzbxQzhuUPY3PmPVKU%2FwsoZexG%2Ffu22t4CR5%2BRo2k2jJW77v2Gg3jCRzbvZMrTM5Z2f7nbGKjbl&X-Amz-Signature=c44a6e915d53eecce6e05cea3d5f7697f1a368c761a50535d9bc81744d7fe249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIV5QTG2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfXItgb26E0jZqUU%2BzHnp91sNqoI3k29T4wcG%2FeqCxlAiBK%2F9INu1EmmKwQosPwtyS1jNypXy1Jkis2oq3tIIrTair%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMg0huEilWra1EoDowKtwD208BOR1pNE4a9oAfrq8HN2k4kIJzYO02d1mxzdRO7hPJuI3PeojjWl4AnZg6SBph7bxtZrXOa1Csq8pL0Ng2vCh%2FmlFkiO4roRVyP0KHP7xvVgucUSHon0%2BTLhcuzFggWC7qSk6OWitx9Jwu%2FYlwWx5rTJUDteyUR84HHBbnHg5gI7O6X1KFNNd5brioeBORM5cdjNiEHUML6LVEFPCAoVyKU8HqyX3w5hsdZoJSVXCXBo%2BW7FAyG%2BC8tTvcd%2Fmq9OwPDNfVpA4ovjYBoov548zp8mSD8L9w2xm8nBBYK6109nucnPeZX2VIZiHT6CfTIJRVRcwBU2j4arvjLZJWHNIKBB3lzoNGRqXIRcgVFA%2B0PrfGFpzP%2BMQpLfYQD%2Fp7Xv5ujGDADh45PAPw8dijTB8Y8r2JBtOIelxAnVhHx6PF3ywPpwHjlgq7PfXaLmH2d3qJz8dNwlXnvNGCGjffZdwI%2BODatC77HkqYUg9Y7ZveOAZthfXUiDJrCGMUZvXqTPHsbEhW2wm9bZx8ekWqVKztj1EIqnq9vZWfUJdwp9hCfkxN8ETW7mwrccaoeXfZNr6meB3GYUQBee1u2c77p0MVHdAXa8toCA0fEg4iBX67BExCrcgl05ty91Yw%2FdG9xAY6pgHoixIWvvL%2B5L8xXEnBlh59a98xNxA0ayzxUoF%2BpZ2layXdOh%2BAybXnHVTeKGOVaf829BNQtMZtARUGHyELGDNZxaGPqqafCsMDO4AhPwsLwEXkTRY96%2B8n3plPJwwSl4UM3FecKZ8RtW8NPIBD5bzbxQzhuUPY3PmPVKU%2FwsoZexG%2Ffu22t4CR5%2BRo2k2jJW77v2Gg3jCRzbvZMrTM5Z2f7nbGKjbl&X-Amz-Signature=8d56d60fd2bce6e7e77a039d17a00353bf1ac149897b0b8ce419b4bb179eb456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIV5QTG2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfXItgb26E0jZqUU%2BzHnp91sNqoI3k29T4wcG%2FeqCxlAiBK%2F9INu1EmmKwQosPwtyS1jNypXy1Jkis2oq3tIIrTair%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMg0huEilWra1EoDowKtwD208BOR1pNE4a9oAfrq8HN2k4kIJzYO02d1mxzdRO7hPJuI3PeojjWl4AnZg6SBph7bxtZrXOa1Csq8pL0Ng2vCh%2FmlFkiO4roRVyP0KHP7xvVgucUSHon0%2BTLhcuzFggWC7qSk6OWitx9Jwu%2FYlwWx5rTJUDteyUR84HHBbnHg5gI7O6X1KFNNd5brioeBORM5cdjNiEHUML6LVEFPCAoVyKU8HqyX3w5hsdZoJSVXCXBo%2BW7FAyG%2BC8tTvcd%2Fmq9OwPDNfVpA4ovjYBoov548zp8mSD8L9w2xm8nBBYK6109nucnPeZX2VIZiHT6CfTIJRVRcwBU2j4arvjLZJWHNIKBB3lzoNGRqXIRcgVFA%2B0PrfGFpzP%2BMQpLfYQD%2Fp7Xv5ujGDADh45PAPw8dijTB8Y8r2JBtOIelxAnVhHx6PF3ywPpwHjlgq7PfXaLmH2d3qJz8dNwlXnvNGCGjffZdwI%2BODatC77HkqYUg9Y7ZveOAZthfXUiDJrCGMUZvXqTPHsbEhW2wm9bZx8ekWqVKztj1EIqnq9vZWfUJdwp9hCfkxN8ETW7mwrccaoeXfZNr6meB3GYUQBee1u2c77p0MVHdAXa8toCA0fEg4iBX67BExCrcgl05ty91Yw%2FdG9xAY6pgHoixIWvvL%2B5L8xXEnBlh59a98xNxA0ayzxUoF%2BpZ2layXdOh%2BAybXnHVTeKGOVaf829BNQtMZtARUGHyELGDNZxaGPqqafCsMDO4AhPwsLwEXkTRY96%2B8n3plPJwwSl4UM3FecKZ8RtW8NPIBD5bzbxQzhuUPY3PmPVKU%2FwsoZexG%2Ffu22t4CR5%2BRo2k2jJW77v2Gg3jCRzbvZMrTM5Z2f7nbGKjbl&X-Amz-Signature=8a4d7cd162e6124dccc01d3e868cb9f5a990b12f774b03b2de11f01fd8459f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
