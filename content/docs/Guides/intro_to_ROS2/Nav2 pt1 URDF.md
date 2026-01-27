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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=67787d79030665e7d39445fb29c0685c05c4ab82208c182a2a808e6ee853bba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=c3027bfdd965bcab953b4d0ddbed59ec4906c3ab22a656244c83d95e603436b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=41e7811011376f25a0187ab5c0e6bac94416013bad36d3bf011c089501f5bff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=0697fb36429e2e5260cbeb9834f1a25eb99ccd336a2bd4fe7a94c052c84ed6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=4170760e969ba0c6631df086463c7f3ce1892c72e0837c2649d5f41fd0f62a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=e8dd92f65c69057d0e05a5c26074a0b1f2199667fbc70ae0cfbec79850f39a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=acbc46da7866b03c135c7be3e4051b345fbf2ccb2fc47c1f4c4c386d65eacc76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=44f361640e971f611774d83cc8b298e3a8f7e9132afab7fd2a0b6e0433de0ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=f0c7d3c3a46b36b37991661060c6e92fef29c1972c647e5ec8c2ee4ddbecc2ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=9dde7362d0dc5ba0f6c7ed1a722ccbe5eab9c21e8329c9ee0d1835ba72fd9230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677YQXG3C%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl48T%2FpOYnKyzNt7YsI81z0%2BQhyKeqKLnYdPZ5MZhBLAIgIQfNButBcr3bH7YJqKlJiwEgtmJJzKCXWn%2BFRued55Qq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBhN8gohrAZmAV8BnircA0JGWmOMXRpAAxaaYlw%2FMEetAFTs2KeZ9ufW4Bttm2DmJqO5X99vLL09LaW7J8z8btmZjro1JG%2FLRAdaiALBgP0RGOIVr2QG4NPlc1LFIl1KMtmwtWau2XkK9dvYFAqm5HvFYzwScV5GUiutP4rdm0M9fVvGvTwuBrPBxK2XIIPeOZwUZ3YSs8JBJ4PZwR4%2BDxoglEYOVUIyYvfucAEB2sguZH07gLiAHlVZKOpG4N6EOI9%2BXU84n%2B6WGZSHFUOofQM28%2Bxu2hOtNw1O%2BtImvkwQE2bpE7SXVtPLEyO%2FAViY1QCJD8tZWtW1fF69IJfJO9RIn40QZTStvb6Gyo71JaJlla9d0nbqeQyXBdQ2IBPAWJIsechH4SDL%2BNy3weXcDUDADIxYu2vq6Zj%2B2rpZmiMhUSY4djkTYxaNlrWcUON0%2B7A1vEPFaDUr9vcWf29nt2bAfKW%2FJpW0J4HtOKwg7Xka6%2FyJioUvfuNiIHcNyB5LRNfobNlJ2uDn%2BO%2BaBqUpw8ZI%2BAZ4ipIGVkW%2FkznVsUDP9oB62YIh%2B0BePAvdIkzWkgdcLGTC7%2BQd2R%2BK01U%2FmdxNLFphrGIginiI63Bx22QCVOE8kQzq4rNl%2Be0UcRG8TgK773OU3%2FYP5KFuMJuz4MsGOqUBZnsgHJ4D1uP0XHpqQCRZ1FnTntbY03AW3Aws1XT4A%2BYYiVvP85E5eAIT1sRgMG6X0OjVVFCMPOHu2KDIJkhgTN9qZ9dmRLosx1%2FxLliYAm%2BGKfjpWLpPBcJBJokqipdJOXVBwmIxJ6WB8KXa4FFuvXktv2c85uNhptQHTidhYYV3dpTHxunUUQqdUszICqWZJ8S3laHKupFsv7CBhzTP3k1Z%2Bc%2BL&X-Amz-Signature=e95e3835e2972b9f200d918f10f3a89795119bc08526bf831a5c11545b4d29ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VQYYQ5%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHVLR%2FwaE4eGZiMdFZiOrkKvj6stMGBBJHK9RgZFRRcAiEA2O4yq6UQ1UMYXPgxEcD9p8OY2UliOREi2R0yxo3bTo0q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMWpyvMzoQbJ7qN5NircA8NegH%2F22GEvqVrh57hshXQJFIllDhrPU5rnkyNWI7YpHPS0F5TUZW7cQvssEnZ1bphU%2FlEU3uiOMzsZFI0aIcmSG1H42R2B5rlgHWhrzOpmEy4JRer9R9w8ycmVKES6FRkIl4VQdzCP80etOETL7uXYcCnjLusBxPiZPD5NN0Pn7%2FB0WgWOYx9Ld4KCblnprD%2BiWwTBJoQ%2FaB8wqoVXVVLmNxGbBXHCuuwmx71eyf%2BswOUHmeGkczlnaI2VZGW1Nd1aoVwH5c6yS6YQFLsVXc7SMYQwCRfrwQN9AX20jxgg48KcsoBLw86cD8zsoGtqNaORJh2wHHN1mrTeX%2Br9NVL578DiwQ7q8tq2DV5CD879unmVm3SQJN787FdR%2BeRfzoqq8PacXlqHHmE3ONyz%2FdG9K%2FTNDwqrq8YgKw7OWXqhrUHBwO4M2BTD5nYyHeTtzL1JgLmIl3epUbSyNKpclDk1SOq3cE6aPqfQmU%2BcRccIkWBVqGjM8V8bS%2BxnH3oLe3MSEMTxEzeFFPVUwLYLJmWfSyyj8tRGIGKd6G1L1Jp%2F0cv9GW94cK1NzlaTSePWpptDY90GjmIrI5xQGrmVSHUQel4Rsm%2BQQa2%2FRLkgmKqKe%2BZKp8DDDLM2hEewMKiw4MsGOqUB5SV8%2FTL0MB5yH8loS4Q%2BuQSn89pnxuHjpk02otovwiXpyQYBb2lhYgcJ1V1lTf8kC9wv5b07Xdgyvr2mO%2BI7lO3O0GYpOLJfQpPVfvP7335Xu629o9Ea733yHuyv8pVEeRGJ8MJ24KoSHbwzBemOUum%2F9l3wFm2UTe3wPHTC5Ajf5sJTqe7%2FWopivZl2fTOrT8xmNilbr2DsBxAiK21Rf%2Fwe4hKV&X-Amz-Signature=6301fbb2c8b1a0bbb636988b4d9b3386b802e40c876e473fe6bd8177db39de68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAWPVT6%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZmMsR9chWJ3unRw0htaIy7aclmGGO5Js1soRG4vxURAiEAqAtfWd037WKiwReojGpCLFm7zqwhmXJcf5F1yIzqWMEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEzYDbcyMTVRR7GekircAxUKSJmhos1ZigOL17lZ5yN1GOOB3mS3apWaPhPI%2BMWG9VBSGIAyzO3Bp5PFHHsJP0qXBsjxAXzQelYNB6nQtTNNMstBvf9ul9TsY%2BsGMGAh%2BJi3zOBdbXTTWUfle%2Bq9PcUivLn2kNble2dirQ6a066gYjnuOH7bk80T7TTr7LZ6mm3SnRuM70YC8bXpVy1Xp%2BgyXgNbEx76dCFIIIBD0qijSxJU%2BgqP1IXK5%2F15Tuwas387rmw6ftpV8RfveZJeLwvOE9E6Kras2RUdwOhitATNdmM7sw6EOQV8y4jlv5ya0G%2BLi2MmmvfMgQw6e6TPKapbaI8D9Y4XupFUj351HK7YAOV3QcgJWgQeDjQhomfleCrs8cFVy11dS65fTArFS58GkcRmCYuvJ5LhIYTpA%2FiLFVI1BuXNxpH9K1%2F9gqa6xJzjpw%2BNsJ3FEjXo0hBxKlf2ZeUcEg1E%2FDQkzrsyNIqWTEeuSgogSwHMCkdNZecE095TV%2FMn1namXQ4Fk8mgI0kdDbxbavxDTXb7jnvJQfL%2BMV%2Bg8j7cPRjVobsathwSPXwlGh9xq0hrlmMbpI2CMCeK1nfv%2Bz%2FpieqEicn8RFFv4rv826M6KqSawexgdOQdJmAeEU1ncjwaUPFmMOuy4MsGOqUBgFB5Q4zm5IsdeNBM2CtdjIpDR3EP34jntVNNagCQ8crydi9l4Oc1jmY8WTqxzDoofXZJW9Lqy7NCVKnTwiz0jkMprtIVsFKixK%2Bgx0Vv%2BxJ2to1K4mf4Wtars%2BxrpvPi1IzFlHxSyL0xw0nz7oV4ayI%2Bvk%2BZ6TR%2BdyVM0SmDFEW8C1%2F7hNpkfOt4BMHGnCzh7QN0koBlkClXEzQN10ea%2BRFDN4PY&X-Amz-Signature=26c1ccb928c10dae0fe95da11c2f1d96391fa8c943d16abe4801462e2091a31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=1fb9e9d0febedcbb8129dc00b1598227ecd1c373de1f43423c764eacf6b2dee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSQKIDEH%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBMSetG2xjQhcgcdk6%2FZHNroMTbikwH3Ut0G%2Bh2isgMAiBoRPoenfPOvPrx999%2F0SfNinGqc6wBPe81mOIsT8YsCSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMJtC3juMmLAQtgaQyKtwD75zu5CMJGstA2BBIx2f8LRDpc%2F9pD1ecX6WMWTcRZkFT3BIgIf%2BG2%2Fw1GZ0GZ8QX4Cq%2FF%2FFPCGGUcNS3ya%2BrZR%2BPpW0r4yJGLogSY5yFjzg8LpPn%2Fm2CmMPTsQ73vDDmnehzQTafnoe%2F%2F%2FP2GPp5vrkpw%2BQm06bMMRruTo5Ri%2B42JfPLkvVsTIrkmTO2yj9JxvJRZJD6JHZGhHccPc9qxNP0oGRW0rY6Bd9LoJuzeXMnThR2325kz3RepECpM69ExnjwYQpXIGH5eOhSIMZE%2FZ6BLSlhzi35HBgdOWkh7MMBSYghP3EMpVaqQXwMhP%2B8U3%2BwCgdrQlfoU%2F0z1YSWo17CUaZ6Og9FDaTx%2FslKqEQe4YJudiMCmyCZKLeqgW2rt7qVlUqcThkmmcTRx7HPoqb7cJpbe%2BxcDr0NNwp48eMf%2BmUKYJQ99Bl9crjwkIXmweHAzO%2FAdxx6hvpVLeGV5L7dICjj4LhNVr2p5JugjItYmNHR79x842lII8GaO1XHj7yRxgwPHpHHAcH6%2FSm2Qxszyc9UuIPn%2Bn63p7GFK5qyMiYYJ5inAMGpZBhSEs2PYOAcfzsIhFIymv%2F8k3i%2B%2B3RMGdR6xFXNLl4RcWeE0%2FTZRgWI2%2B9jGD%2BX10IwwbPgywY6pgFbNdRvSiaX68WsRVfhfIh4lwzvpKHv2Voxv1vMuYigoklR8PjU84AopCxUY0896ONMB2k81WI%2F5%2FvMhMw1BXYIDLHN81yQ%2FPKDGwvHUdKLA4%2BAFy6MU9wmjDLb3pJLUDxzcAEDhZYLqTWuf4zRO98ssp%2BpyIqRgnuI64l8eAxh5FVHGsLwhobj1TeyN%2FFo9alwhM6mT%2F4%2FLQ03DAlU7n7wqtT4TBGk&X-Amz-Signature=60e0d6c5545d3da8733748f3fc25c82e14c370e7f61f2b0f2222f416d6a4d30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=2821c940ecaeb5f9a9b7430c65ceef760cec4f534dc0914b52250a9411c8231c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDWODYZ3%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FeCGGrNHbvC6Gy9%2B9rKDPnK76OBIg3VZSYDHdluApKwIhAPlDid11KWjM2MHIq%2B8npv8utbIxpdPLPvzdckuFyqBwKv8DCEsQABoMNjM3NDIzMTgzODA1Igwgk1bd8ffJgdlXTEAq3APkaJ1q9SyXGC1P06fX3cEpuOvcQjnvsDpr022j5UTSN6QzEHb3itvOcuxXmYCcwQb8LdqhLkGSonxzb4BbjvyBlhxU1qpzjFYDk0dY15%2FWJCmzNtlZVFP3yMmsmU2kZ3sG6a%2BnA%2FVoYvI5a8LZ7BYX5so2nURbt4ZnoB7rD5PdUKcIaXk%2F%2BYQ4i8kMcEqwYPrU26XQrSj3bi2yal26iZgXX4yxzpvxKnwj7VG8z9RdyoT%2F2QnMJ14QzZ26FC7bDmuT7lTPtSgQN7j5WAq8s73qPkIYFp4UV3zZJHVkb9hXye5CU5o6Mz3jq%2FCtjoOc4B8Fm62PoQmzaoVVUJ8DR7DcnjHFE%2Fxytm1unSpnaw3lY0735j3n9uswtijEA3z55Scy%2BRc5JgqjdlxLsQidrZxC8ktG6jdOphWVy8lVvMUwWh4uiD0Ow7enxuZmcjQxGMBliqawpTTHiaMVjijhvWDUGeg93e5jsd5URacpPbLTN7Fkgo2NYkKcehkG0lm85FDgynZkBAZpGhxL2uL7cWs9zf%2BkFgVCc7ffVS8siCpLTfpJ8jYlIOXXLSM%2B4CW4D55Jw14jUw7n3fkFrzymFtusB%2F9ZnHrRuNokoRp2ObBnCA5ud63dbAeA0U6l%2BTDcsuDLBjqkATdGnvHwItzuRs3QWiUptfSQT7FjMUmP%2FaUsQRZsmUo3tXND6A8rLhSvuyZDczjtp%2FpgKpIekCg1jd29QfDXITeDhg7kXZz3jGCDdLH301XEggqiwnDNla84YxW1o5t5Zy%2FofIRaLl2BIVWGvQz7Mm0a9LOCOTzJekelJu00aCJmIXTN3pUiER1zE%2FebQD%2BWvWW0jZ3fhVETMiiVqxDwXO4DzHLj&X-Amz-Signature=832ef05fa8daa7ead426c7d0394baf35498eb5946e23db11b999d4a298b780d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=7cab39391dc806f6883d450775d42114456e60aa467bbeff756291c71dc92285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDSE4OX7%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKvwAiFaQXOG5IAu2fkbwwUfx4Is7bspvUmda%2Bcf03tAiEAmHXKCnYEBDvdPLpnebkDTl%2B4wr6uZ5ugAVXtqVbrPZQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA78gkf3%2BbtodfzH7SrcAxZh6Q0o9ai4GhRYhjI9MB3Wjpdda0fwkwcV5ph98HXNT6xoSxDSYm36ZyTX08yVJLMMtH9R92VfKyFpbb4W53l9h%2F%2BJProYsjHW8DvnZTdhg4JFAHSI08cZVI6yM2Ox9T7y7GZmX8YQu4Y%2FkFfH9ayf9s594OERXVj%2Fx1Gk1joXDlWGu1cGipD0U00T6rKxAt0Ni0sHvyXfw7dz3OGHsVSIn5MAt84VXy6TRKv27ccJ6c7aYJ3WtG7goLFWALM9yt0OUP1YQmX8Tz1zAT9ES5A%2BKpKnYbrszTiCyPS%2BGFDz1mRdp1Sn4mFYTbfZ2zjODQKP%2FxYBYEmue5%2BoPZmOH6h8asH9%2BrV2Nv26QYjYLxSALQpbIE5Srr0YWxLoT7ffRonMs%2FwougpU9VGM2I2sZGFd75VqhPa4agFLeNgxG0jjT2H%2BgTfGzJgrGphSn%2FKLE310WvkglpV1p4Ku2V6TW4bxyMdxwNYNWU8ECrT%2FINb2efMf9R40Wd4UzLiyp4hl4ktRZWE%2BHqCk3GriHacdZMB%2FxGOGObbfG4FyIe4FdZUKMddHb6mi4Vhdht6dQZ%2FahbWyyGbxK4MeXaUj2r%2F48h7Z%2FghD4Wp9hIWkpCKuQGhu4Zfb4qvzpm7azXR%2FMK2z4MsGOqUBzjBvt%2Bn3VPpV8NufyO3Km%2F7EPTlh4dFwlrDKiOEYN2Q1e%2FZZTsbFU48kkpUddzutVDnV8yhiw0OuGLotPRxDTpPUqkIagTe5s6vkD%2FmlGxYLAwlbtJJpo4ufuWw7Eh9fIeqYT%2FSlnn8Bi9DbXfwRbp54JLFHtnVnhgG7TpXVWz58eF8gAFkxFyTeHQRybStySsyBQtMrTcrXj11n0KRji1q5OKMm&X-Amz-Signature=e74db606b8b5c954f44db998bf2652586eb98a7b29d9420bd5010d541dd10eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=321455e2086cfb5e19b66b1fa23d2180aa9ac87569f644761111a3d1d6af21d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KAW7KD%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQwKCXkwgP5KqbEjTjHhjtYecS%2Fzcq6i2SXh%2FdK9pQHAiBfWM2TqibuN47FWFOzqWxIM7H3wTJ9k%2BOgJyr7HXPstyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMdCUxwYsH9JIf9cw%2BKtwD35YgGg4vY%2BjkFb%2FNNFdsQPPWPNbwh2t34N%2FDRzK3npRY5bBRm4cBZe4b%2FkuEnBkU4azZ9tlhtyr5SN1gwtwzw3%2F4GXcB0YVqX5cmvmjBnIM7nk3ZEvGVb%2Fqcp69N5XVxXe1UbW5OS%2F6nzk%2F0FXASAHQOOu1r45pAoI9Xt2%2B6UDwvch5dsiBMsIMIZaMuwP2p5R7pGJdggxrDZAnXm%2FAf27jMEnJ7oWBjyl%2BrT2PCt1kysBh3TJegqBW%2BCyCANZZXWyAofKMBub8BRECv34N3llfdbU8XxKcWkqKqyKMiCz7xFfoA56qGGYvCs45k3KaNcxf82SwiIKA3NvTHCiTWN3LFgik1yIf14F3WC%2FtuqhlmO4g76YFCyp71BWiprzMPsM47QNjmeecbpbonXlBUn8XqkR2l%2Bc9jmsDo%2F%2FRfonYCjxBx3c8txAKChHMSKGYN5831zFQgvKfyZJ4b7qw9zzidjgxuGOvZ9USXUlefmoUiFKA8B3lLJ3XC4sR4OG52bIlE5yb9M8oNQ1onzKETmjbcy%2BdfEMa45y07ecTAo5Y4FR1QEaofVzcm6G0%2Bitqa8MUIx3ny0Mu8iCalma%2BjbURMMr6NGxG0skwDisp2svDGSeWqz8o3pkyuMhIwmLLgywY6pgG2lJ%2Bg5eGzoyrRD%2Bmg5Nh8zXrcyQ5kv7ozdGedANd%2Fp1pCzY3vCm6BXe%2B9Vk0iRiCQq0BglgptrtlNJhNvUX4fK4YRKIuXWDH%2Bp03d1IUFzMjToGCC6Vg%2Buk9lngC9qsXvNN9%2F6ttxFU%2BVyMSMtnS62nda8BR4c6cZeHl0zqe7kdEz8H1gn3YTjuhLXxPXM10Cu0fnK%2BTr9k6GkKzKzcgeYM7PWphk&X-Amz-Signature=e1b7a3b32340da64b35708834c63f2b77116ce1f7d305e1e50c86224d14a8601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=d61bb51030254470f8abe448c39254a84bc5404003ca8d6bf9650461076d7b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYDHDUS%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgyARTWNwPv9Fw%2BWp30tupuaLQveAgAW5Pto8Jmbs6EAiAZhyAtz7AvS78ZtbntgRQK7GnwwXX4ykerf1lorguhlCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMQsZmS%2BmZPLYjerpgKtwDYUp%2BzX3n%2BnVos3qDDTJL9fUtmGLmumE%2Fkf2o6mjJgIzDX5QgXiJZP7EZdA8sFYhh%2FHQ8Pziv350MsC00SWh3j9ee9YiUmbHF9gIR0avHaqD9YS0ZBQ5DLrVR3OHNV6Fke3slxlUIJy%2ByopEMqGvA%2BoWMuM1nygAIT0FDARxSPq3ObjrXwQ6VZ%2FrVt0TbzeQAVobKd0FCE20OxJ2%2Fb%2Fg9tAZgCgeccKgyfrrghaZcx49HWMG7elUXPaT7WmUo3ZIlxMp9DorSLvEjvhDRtVtzVEokTM%2BRZmOIgYDtHCmmS3%2BWa94QH%2FXoVFXmnd2dkR6Q4pRwo8Xolq14R5JPg9I2kAe4XxrIPBxQcZUZD0nyh05YHm1Y6veaXkZzxPVVPgDIoK8ovi54P%2F6Vgw1%2Fd9C5O4Bx4gg9onb8zs%2BxhfVFqCWSNiKW7LWrDntLjdzP5fHC06AroRuaQOsKLZzghYSatIcIY30HzlnglzRPWjZ4kL1FWlOm9xTucd3EPXrBhLFiEi7hKWzVc8Z4ZXLWlVQWuNSuAKM6K%2BfC%2FfjRVYAl7nnve5C5M4Qrtq4ZV9yJBEktF9sbMaUbcritMP1e7QCqFryXiraEfxRGpBLxgDNqB6vWiCbxQkk9bZzVqbEwobLgywY6pgGeKTtyPlWWoLbXyvVmZlEivJ2CdQOZpArUfYCg4Xl%2FTF7SovIp8uDepwDTJvswzc%2Bg%2BV4CiBXRD8f%2FMv1E96eHwN56oXio%2ByIUX24H9TavaErCYrUq0VKHjaqY7nouwBYSb0KMML2iYfS%2BfgCS6KUArvQcZtVBZby8defi8Kr7EemT7aSeEtatvQkzk6JhFulmHT10ueFKa%2FwSnZMogoBxU4pa5wwB&X-Amz-Signature=535da7b481029f3551a117b03df1fa342bcb661fc163949007830799d59d4fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMREPBI%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsfsHDDnCGIJRAHZTgwblxsfBsEtyA80zm8jgHCLD%2BtQIgHtn2RSxKjtM1mTK5OtE710dD6Bcj4B7TJyE9yA3CJeUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEC4%2B26cSKr79d4zBSrcA8b3ADsqzkS09QvrSjKkmFraTE7HPFzH0GXDaK%2BjA%2BYCcWCsWpHl5vEtJFdMu3xsuV%2B2VhBQJFGAWsDIfvb8kFH7QohvLkxbdkmjM3ySLS%2FKpMVzugmJDpKEpJ07ohG3SK06JPehjWrcc3eHFSpmp15zaT9IUENxgFLcLtankP%2FgPWtRPmhgQD4rfeJgPqAUgmEBpky08u3wVp2RBc77WOfgXmg4TbvWOiuNTPc8mi9iPqoXfX2YfG88%2BZ%2F0zClrEV12Hx4AUxaf6CUkQenp7H9qenfUVYWCfIAF35j8r%2F8VL3yNRaW%2FXkQBtHum2t2yo5LygqVSGpkMCvrPqhhQ00E7OLvte98g5YIw21U%2FursIINEmrVtw5NLgk5VYdj7auoczFnF8sUF6cJQhTy1Ac5FiRfE7NqDevjy24Wd9L2TfMUez74AlsadEjptZ%2BBye2dhS0CZC1NTnA30LlTm5Y8XdBmFfz3qcNGKunMiWO4yTEfkGVov5uc1fBzQg4RGLlTx2S14WuDW3H1omamff1CKK6%2Bb4kJjrMqLRygT0aw6hWFzb2UGjNnVtFKnJYb6MmkkXR0VMyxdW8F3m1Vb0%2FnBsJPlYNjxkhS2NuETIageLp3HVFXEi26Dpq1rGMIez4MsGOqUBTSm4qFd9Ol07uhgn3L3KduTlYnuGi9WXKg5RXLAoTiakIk3Mdw3ri%2FOjdeH6WNNKZzydQ8u9NCaCyUK0r0CuS8MHkRbAjFQTqjZgfgB8EaSQQd1b8k0siYCjdWCk9Zkkec4RmB8ldh1A1KmUJjxhSybtgy7BVMiiz9n2EZawIo%2BVS2O9MiVYM%2FGQFzY8XaX0mvdl%2FkgebCmbdOZDiXSJAsv6j50n&X-Amz-Signature=28f113ad320125607d27d7dbb6c56ed295f1eac859bcb40545e2a82e0d453e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTEJKNS%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2gKVq%2B4WJYnrZx1P%2FDnl%2Bicy4TILzfmNyxUun6FeRpAIhALWFS3Csim%2BhlOaSiEdCVnKjvqVTVkZYEC5xBQHRZgi4Kv8DCEsQABoMNjM3NDIzMTgzODA1IgwuwmAKTNgLeVp1DFQq3AO5rQpBpPGGIE2hVeY3%2BQ4S9lmmcTIgymNorOlIEmNwVidsRODXjZnqHrAKv0zU4Nawh5l41F1Lrs%2FoZJEfmwRKQWw%2FQBriQIQXKSTQLOvZsBqTNTPFZcvAn%2BdbA4NG3H8IqkmnEB5xhKRqMdPQl0zdWzEQUXLvDh9pJ7hmEzcLtHNBGfWGZ15eIoDzESDDStkj8zv%2B8XsvhIYwlWmtSe5LrEZNvn8ItWaKA0HP5H%2F04%2BA6PIYXT9V7qN3Bkr1G7hSo4djQi%2BypFqTxo1JPL6YiCPp44g7ne0CDyvH8pF6hLqj%2FdMQmgws1upOWtWwEQkb5ucfrjN%2FWH%2Bm8d4mlFYr%2FVB8CKQLMkUAzQBYzO%2BmdtO19rxGGQcYfUkaLi%2FUjLt7qKynvzhVz9Nwpt3FfRo%2FhrGuntxUmVhO8tCrQzK1k5sc1RtI5K7qbcIiVj1mGpI2htbyJNS4qxpLSyf9hGXSEQSU3m6A8cg8y4g1Vw8drm51MuJZvsNbD2f8tkKkcDzkz7GOliXp3Pbz6grC3SzJsDeg7uWjEp5n8WArKvLoqaktH2IidbTBh3iIAmuCASS5gsyg1zCDvHUs3mxSuEeZb13TU1Ufpay6Wc7axzEBREuBJmcWKASZocfDVdTDKs%2BDLBjqkASfYNFNz3yyFA06wfRzTRQbXT%2FXE2BOce%2B1k5JEyGPX7a5szFZa6oaLaIrejD%2FBHft1YSLq2D1qR7bMA8aJch342CHsbhYAjsTtt8FFXEuY4qERntLOvZccEuFMJjB9Eov8PHrScKm00rcz3RIiN4EQcx9XWLurPMzhtsSEBLZaHGuIUC6lfAMU7BFlrtAs9GxEicg0BPaLV8ZUhf%2FL12%2FfrLnSO&X-Amz-Signature=32bc84ad505f7eedf28a37c6ac48bba7bb918e8950a5cca4c9039c68450d94fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=6f7eb214162ff042c2186bdbc1fb7a2e78648731d86dbc598dcaf715c3997c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTC4NHQK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJPu9wX8E0p1%2BoFTvFpDaSMpQV2ndW4ksi4gwWfrC%2BBQIgH3VC2yg9iZijmAC3fRDaFi2JdkszndqU0tYC9BRDox8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFC0EiMnyzvOH9wW8yrcAw5P%2BWf0C%2Bgb3blvkPDnTz6Yzs%2BVmfW%2BFOopluiySZpJSATS8UuQZJ1tFhdMkz%2BudHhrid71GQcjgNkRsAAKmwy%2FitZzmmP7RY4LXrnKjr1Pp%2F2IVcICDHeU5eFsyrev8s2Uwa6tAMR9xMFrcgKPWHVBpTvEZuJFdZKF1qF7GtrFIg125T%2BAFvGqXHrI1uVUHKVtOcxYirOkV10IcGg13lUO3VUDdtZxqxxijI9QSgklejYxU0bZaciGECgBV5Z4uY3D8Qob1JMQVfs7j%2FdZ6o2TVezIUEHGcriSo2L0lQ6FeWIaOe%2BIOBGqSoB8YXzD7kOYSXuzzHtAuCnzbX9h5MmozRSJ6%2BzL9ivcueqXaRo2Q4kH7DI9t5iQR3Hbt6Y3VIdePPd5OvuA%2BrIJgysqUjbDw%2BBbNqbHzDMg14ZrR%2FvFS01yKRZsnmqYhLQ7BAHU7w6IPIZEHG9Bog3nwLwMKtcqGC9BLuqrgCpOJwcRUSWCcPdKdkm%2ByhW%2FThhWsK92F9lVoeKQGMSr4oimRiD9qTJkPkdksuY0mGe1aBjMgrIQwyw1TDA8E8KPxYpxmAoM2PseY3k8R1%2FmwYI4JBRKJWQHs4D58QNhMRNnRLx7nDWDpMKiD1s%2FBrVmzGogMImw4MsGOqUBdOCubiL35B6KwoaOsS0Y%2BxK4d%2FOhIG6Xc5bXImHoKqKm%2FT5fpE8yNIEjCd%2BMTCabkGkfLvVb%2FhKdbtSr0FEPiPj9CebfYbRa4uQoyCEQDRqe0Lj5FAv%2BuEGQOkzxmvI3jTVHtzlUDdXh0ZN2v15k6HwXZ7Hbvqx%2BCXcFzSuVbmCQof5%2FrhkgBmHc3HWuDsbuH2fI3%2BaymUOw2F4gb2uHFnmvtcgw&X-Amz-Signature=41dc2f6f9c15ad713d744ff60216e7bc0d55497d95ba49a549daaf14a353e33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMCDPAKI%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV0nEv%2FxKJGMyL3RgoMmbGPDKxnM2fxKDZNONneuGSgQIhAPxFmpVEdg60l1UlAO%2BKhITCcUoKFPHibIZsz3CvFLX8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igzzzwuwg3B66W0SHQ4q3APhAXD0UmBzuFJNQrWuYuefYPAqVu9DrxjiM%2BkwsjKkJmUR2ln8QIBODKhvmNFJygDr6AjrupfuM9zyCGPBzKeAV3fxATC2Ghmh4ZBKzK6OOXhyVBySllcfwNUmrIMDWMZyQNejqIQNb%2B0Ma4iqWEYNbHbGMC%2FKItGjee31jvWzjdxZ7lAKGNpGScZNZWkOe7jDjlNdlZL%2Fd02q1Mtjp9z4zqSF03zA9IQVNNwMvzjR%2FMe1NtqT2YSDc1Q2wMVYy3Lyfe3rioQNjmzS%2FKd6AwcVDmF7KEis%2FyxGKu2Xxb3KCXiiVTv4c0G3QPIprjTpSPqLBCeXb9fl5mNbLHm3BjXxM17v6iYz0uG0P5%2B0AvqwrBjHk%2Fym7OFKiBgQW0PDJOGB81bXr76rpY1oDO5R%2B39yGnPIbVJ7pjiJsAcCXWWJeZJbGneP8r7zyILcteDFCM6ZNi%2FkiK59Z6xdTfcArA2jt1fHceNRU%2F%2BLEJisZMAU7yRbNl5%2BtYnkb0W1zaHLDDcvsv4B4RyfjFMHPGNw9Zn9zJIqPwDXOlWsG2KkBUjV7qdbeX4dLycvsvOW%2Fj3dqBa8st4WADEBheQEX%2FmDg1o6eSKSK0dyRXhZi6oo1bCSzHrYdRKVhpOTryyaeTD8suDLBjqkASGeRzEgLlzfqdVLf3%2B614IIGH0dmTYMYlfYDYUSzkHMFBi%2Ft5zRV6PMVlh7gONLlOqzFkD7w956UIMJEf7cMVXZdcdc9I1J%2FQlTvD0n6iIyVPG8O9VDwkLg%2FV1abMtYenLRV6yYR90J5NfmxVUWM7ww4LCkhbsBXVVXhDzBkDpOGSapWUliH86LN8euMzm8QrgtlwK5U6Zv%2FQSK2Ti8U5aLhRAm&X-Amz-Signature=bab96d089aae3d8e6d6e9b1e9f64b0e7710e0dea100d6c82514bf9b3efb4eb20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMCDPAKI%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV0nEv%2FxKJGMyL3RgoMmbGPDKxnM2fxKDZNONneuGSgQIhAPxFmpVEdg60l1UlAO%2BKhITCcUoKFPHibIZsz3CvFLX8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igzzzwuwg3B66W0SHQ4q3APhAXD0UmBzuFJNQrWuYuefYPAqVu9DrxjiM%2BkwsjKkJmUR2ln8QIBODKhvmNFJygDr6AjrupfuM9zyCGPBzKeAV3fxATC2Ghmh4ZBKzK6OOXhyVBySllcfwNUmrIMDWMZyQNejqIQNb%2B0Ma4iqWEYNbHbGMC%2FKItGjee31jvWzjdxZ7lAKGNpGScZNZWkOe7jDjlNdlZL%2Fd02q1Mtjp9z4zqSF03zA9IQVNNwMvzjR%2FMe1NtqT2YSDc1Q2wMVYy3Lyfe3rioQNjmzS%2FKd6AwcVDmF7KEis%2FyxGKu2Xxb3KCXiiVTv4c0G3QPIprjTpSPqLBCeXb9fl5mNbLHm3BjXxM17v6iYz0uG0P5%2B0AvqwrBjHk%2Fym7OFKiBgQW0PDJOGB81bXr76rpY1oDO5R%2B39yGnPIbVJ7pjiJsAcCXWWJeZJbGneP8r7zyILcteDFCM6ZNi%2FkiK59Z6xdTfcArA2jt1fHceNRU%2F%2BLEJisZMAU7yRbNl5%2BtYnkb0W1zaHLDDcvsv4B4RyfjFMHPGNw9Zn9zJIqPwDXOlWsG2KkBUjV7qdbeX4dLycvsvOW%2Fj3dqBa8st4WADEBheQEX%2FmDg1o6eSKSK0dyRXhZi6oo1bCSzHrYdRKVhpOTryyaeTD8suDLBjqkASGeRzEgLlzfqdVLf3%2B614IIGH0dmTYMYlfYDYUSzkHMFBi%2Ft5zRV6PMVlh7gONLlOqzFkD7w956UIMJEf7cMVXZdcdc9I1J%2FQlTvD0n6iIyVPG8O9VDwkLg%2FV1abMtYenLRV6yYR90J5NfmxVUWM7ww4LCkhbsBXVVXhDzBkDpOGSapWUliH86LN8euMzm8QrgtlwK5U6Zv%2FQSK2Ti8U5aLhRAm&X-Amz-Signature=6666e0cb3eecb5d04d71c7d8f7a12b54e69d8bdc812c6bf8f96aa3cdc65ed210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMCDPAKI%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV0nEv%2FxKJGMyL3RgoMmbGPDKxnM2fxKDZNONneuGSgQIhAPxFmpVEdg60l1UlAO%2BKhITCcUoKFPHibIZsz3CvFLX8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igzzzwuwg3B66W0SHQ4q3APhAXD0UmBzuFJNQrWuYuefYPAqVu9DrxjiM%2BkwsjKkJmUR2ln8QIBODKhvmNFJygDr6AjrupfuM9zyCGPBzKeAV3fxATC2Ghmh4ZBKzK6OOXhyVBySllcfwNUmrIMDWMZyQNejqIQNb%2B0Ma4iqWEYNbHbGMC%2FKItGjee31jvWzjdxZ7lAKGNpGScZNZWkOe7jDjlNdlZL%2Fd02q1Mtjp9z4zqSF03zA9IQVNNwMvzjR%2FMe1NtqT2YSDc1Q2wMVYy3Lyfe3rioQNjmzS%2FKd6AwcVDmF7KEis%2FyxGKu2Xxb3KCXiiVTv4c0G3QPIprjTpSPqLBCeXb9fl5mNbLHm3BjXxM17v6iYz0uG0P5%2B0AvqwrBjHk%2Fym7OFKiBgQW0PDJOGB81bXr76rpY1oDO5R%2B39yGnPIbVJ7pjiJsAcCXWWJeZJbGneP8r7zyILcteDFCM6ZNi%2FkiK59Z6xdTfcArA2jt1fHceNRU%2F%2BLEJisZMAU7yRbNl5%2BtYnkb0W1zaHLDDcvsv4B4RyfjFMHPGNw9Zn9zJIqPwDXOlWsG2KkBUjV7qdbeX4dLycvsvOW%2Fj3dqBa8st4WADEBheQEX%2FmDg1o6eSKSK0dyRXhZi6oo1bCSzHrYdRKVhpOTryyaeTD8suDLBjqkASGeRzEgLlzfqdVLf3%2B614IIGH0dmTYMYlfYDYUSzkHMFBi%2Ft5zRV6PMVlh7gONLlOqzFkD7w956UIMJEf7cMVXZdcdc9I1J%2FQlTvD0n6iIyVPG8O9VDwkLg%2FV1abMtYenLRV6yYR90J5NfmxVUWM7ww4LCkhbsBXVVXhDzBkDpOGSapWUliH86LN8euMzm8QrgtlwK5U6Zv%2FQSK2Ti8U5aLhRAm&X-Amz-Signature=f27f05c343f606a78372fd21dbe2d4d38255b9a664fb7a98ea48cdbc1f1eea18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMCDPAKI%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV0nEv%2FxKJGMyL3RgoMmbGPDKxnM2fxKDZNONneuGSgQIhAPxFmpVEdg60l1UlAO%2BKhITCcUoKFPHibIZsz3CvFLX8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igzzzwuwg3B66W0SHQ4q3APhAXD0UmBzuFJNQrWuYuefYPAqVu9DrxjiM%2BkwsjKkJmUR2ln8QIBODKhvmNFJygDr6AjrupfuM9zyCGPBzKeAV3fxATC2Ghmh4ZBKzK6OOXhyVBySllcfwNUmrIMDWMZyQNejqIQNb%2B0Ma4iqWEYNbHbGMC%2FKItGjee31jvWzjdxZ7lAKGNpGScZNZWkOe7jDjlNdlZL%2Fd02q1Mtjp9z4zqSF03zA9IQVNNwMvzjR%2FMe1NtqT2YSDc1Q2wMVYy3Lyfe3rioQNjmzS%2FKd6AwcVDmF7KEis%2FyxGKu2Xxb3KCXiiVTv4c0G3QPIprjTpSPqLBCeXb9fl5mNbLHm3BjXxM17v6iYz0uG0P5%2B0AvqwrBjHk%2Fym7OFKiBgQW0PDJOGB81bXr76rpY1oDO5R%2B39yGnPIbVJ7pjiJsAcCXWWJeZJbGneP8r7zyILcteDFCM6ZNi%2FkiK59Z6xdTfcArA2jt1fHceNRU%2F%2BLEJisZMAU7yRbNl5%2BtYnkb0W1zaHLDDcvsv4B4RyfjFMHPGNw9Zn9zJIqPwDXOlWsG2KkBUjV7qdbeX4dLycvsvOW%2Fj3dqBa8st4WADEBheQEX%2FmDg1o6eSKSK0dyRXhZi6oo1bCSzHrYdRKVhpOTryyaeTD8suDLBjqkASGeRzEgLlzfqdVLf3%2B614IIGH0dmTYMYlfYDYUSzkHMFBi%2Ft5zRV6PMVlh7gONLlOqzFkD7w956UIMJEf7cMVXZdcdc9I1J%2FQlTvD0n6iIyVPG8O9VDwkLg%2FV1abMtYenLRV6yYR90J5NfmxVUWM7ww4LCkhbsBXVVXhDzBkDpOGSapWUliH86LN8euMzm8QrgtlwK5U6Zv%2FQSK2Ti8U5aLhRAm&X-Amz-Signature=b0db0abb393ac532f710a4c35270ef8bc585cf5b1b80d66bdfa4ac95d92d82e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU343T4G%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB0p6Vb1gSmHXKSQ2%2Fcv%2FgBo1fVM9HO%2FaG2HdHvM3Q2gIhAL1gi2sMsEVWuJ%2BczWnbGkcQpXF2biL4TXGAs3uVCe%2FaKv8DCEsQABoMNjM3NDIzMTgzODA1IgwFy3i5j%2B1ZVd3YBnEq3APfdLecllnljSbeaIkts9vt6R%2FCrXUbbLbgo0QMzGHaxRJOC6VOew8a6NiyoAdz7406OfYoJoVWg0i3SfcHxnZziKpwtEU7IITCCGZgjsAP0IhRgo1cDNL2YEDNSHSWZTRs8OoIF2yxJCpB66dubZbeOZJomZ1M%2BuQxzimw83eyQbE21o1pcy48zI21uWvLOnMDycl2VTbbFeZ2pExYcoypj2NjtGvUP7%2FJVO0eSTlcYiFwcvZkyRWvr3tUg2O3P%2BhxEA7qaL5r4LwOAWgNCILu3PFO%2FIjccydJsQi44RHtIPWeAxHWcGxBI3%2Ff18ZZl51TziKXBIdTFzZN%2F1remMdq9enCZufyYeqiYMM4aKqxuIY1RkD%2FYU5n5ttbzDZnohvftObJ6ne6RJdtF3TuAQxdvbwJ8jo0%2BVQ%2F%2BbY%2Fu8eyIwH%2FoksrVBkePQJ5zZvCdcBzfDStIgpJt1ASrP3QWNTwv3yl67r%2FG%2FtM0Yd7KYlqhtQcVgJ8tAk%2Fr8HPghVAyPDH9fy9yPkp5lIJN4fjv0SA6sF5eeZQuGHVhZSHs%2BIn3iUqZQLzPLhrSyL42pv0mmiphBoD%2Bt1KbA2cNYCVDhT%2F%2BD07vJH9ez5e1AD4dUDrKaY7IuGqbNLukKHRyjDcsuDLBjqkAWddurCQgqmQ3UB1Wo6llhsfu%2FOwtmeUyNrPX5Rutfsitvfh4YEpMOg0fUPCfSNsXmUB2ginkKjIXr3IPVjpjLDVx7eyemyBOsrRhVX2tcjg3uOzZRcOZXBgnP%2FCTF4eRS75ygQfl6YoSsSuPX46AkPM%2FVK59tXyH1XY2PdjZoidyxEpHBoAQsm6GymvoRw1L6vTKrJdszOPvHr36FsWVVrNpPsy&X-Amz-Signature=e3f694d08f82df78c180d7a8f713b82f21c7f20719cf8c013f47d6f9234eca16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMCDPAKI%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV0nEv%2FxKJGMyL3RgoMmbGPDKxnM2fxKDZNONneuGSgQIhAPxFmpVEdg60l1UlAO%2BKhITCcUoKFPHibIZsz3CvFLX8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igzzzwuwg3B66W0SHQ4q3APhAXD0UmBzuFJNQrWuYuefYPAqVu9DrxjiM%2BkwsjKkJmUR2ln8QIBODKhvmNFJygDr6AjrupfuM9zyCGPBzKeAV3fxATC2Ghmh4ZBKzK6OOXhyVBySllcfwNUmrIMDWMZyQNejqIQNb%2B0Ma4iqWEYNbHbGMC%2FKItGjee31jvWzjdxZ7lAKGNpGScZNZWkOe7jDjlNdlZL%2Fd02q1Mtjp9z4zqSF03zA9IQVNNwMvzjR%2FMe1NtqT2YSDc1Q2wMVYy3Lyfe3rioQNjmzS%2FKd6AwcVDmF7KEis%2FyxGKu2Xxb3KCXiiVTv4c0G3QPIprjTpSPqLBCeXb9fl5mNbLHm3BjXxM17v6iYz0uG0P5%2B0AvqwrBjHk%2Fym7OFKiBgQW0PDJOGB81bXr76rpY1oDO5R%2B39yGnPIbVJ7pjiJsAcCXWWJeZJbGneP8r7zyILcteDFCM6ZNi%2FkiK59Z6xdTfcArA2jt1fHceNRU%2F%2BLEJisZMAU7yRbNl5%2BtYnkb0W1zaHLDDcvsv4B4RyfjFMHPGNw9Zn9zJIqPwDXOlWsG2KkBUjV7qdbeX4dLycvsvOW%2Fj3dqBa8st4WADEBheQEX%2FmDg1o6eSKSK0dyRXhZi6oo1bCSzHrYdRKVhpOTryyaeTD8suDLBjqkASGeRzEgLlzfqdVLf3%2B614IIGH0dmTYMYlfYDYUSzkHMFBi%2Ft5zRV6PMVlh7gONLlOqzFkD7w956UIMJEf7cMVXZdcdc9I1J%2FQlTvD0n6iIyVPG8O9VDwkLg%2FV1abMtYenLRV6yYR90J5NfmxVUWM7ww4LCkhbsBXVVXhDzBkDpOGSapWUliH86LN8euMzm8QrgtlwK5U6Zv%2FQSK2Ti8U5aLhRAm&X-Amz-Signature=eb1a79659ab2525e4b03ba5fccf1458ef8d784f88349696caf9c4c5c427e5798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMCDPAKI%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV0nEv%2FxKJGMyL3RgoMmbGPDKxnM2fxKDZNONneuGSgQIhAPxFmpVEdg60l1UlAO%2BKhITCcUoKFPHibIZsz3CvFLX8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igzzzwuwg3B66W0SHQ4q3APhAXD0UmBzuFJNQrWuYuefYPAqVu9DrxjiM%2BkwsjKkJmUR2ln8QIBODKhvmNFJygDr6AjrupfuM9zyCGPBzKeAV3fxATC2Ghmh4ZBKzK6OOXhyVBySllcfwNUmrIMDWMZyQNejqIQNb%2B0Ma4iqWEYNbHbGMC%2FKItGjee31jvWzjdxZ7lAKGNpGScZNZWkOe7jDjlNdlZL%2Fd02q1Mtjp9z4zqSF03zA9IQVNNwMvzjR%2FMe1NtqT2YSDc1Q2wMVYy3Lyfe3rioQNjmzS%2FKd6AwcVDmF7KEis%2FyxGKu2Xxb3KCXiiVTv4c0G3QPIprjTpSPqLBCeXb9fl5mNbLHm3BjXxM17v6iYz0uG0P5%2B0AvqwrBjHk%2Fym7OFKiBgQW0PDJOGB81bXr76rpY1oDO5R%2B39yGnPIbVJ7pjiJsAcCXWWJeZJbGneP8r7zyILcteDFCM6ZNi%2FkiK59Z6xdTfcArA2jt1fHceNRU%2F%2BLEJisZMAU7yRbNl5%2BtYnkb0W1zaHLDDcvsv4B4RyfjFMHPGNw9Zn9zJIqPwDXOlWsG2KkBUjV7qdbeX4dLycvsvOW%2Fj3dqBa8st4WADEBheQEX%2FmDg1o6eSKSK0dyRXhZi6oo1bCSzHrYdRKVhpOTryyaeTD8suDLBjqkASGeRzEgLlzfqdVLf3%2B614IIGH0dmTYMYlfYDYUSzkHMFBi%2Ft5zRV6PMVlh7gONLlOqzFkD7w956UIMJEf7cMVXZdcdc9I1J%2FQlTvD0n6iIyVPG8O9VDwkLg%2FV1abMtYenLRV6yYR90J5NfmxVUWM7ww4LCkhbsBXVVXhDzBkDpOGSapWUliH86LN8euMzm8QrgtlwK5U6Zv%2FQSK2Ti8U5aLhRAm&X-Amz-Signature=f927e930871cbb1585a5a8dfb95c1922698f38d8d76e3b91aa2aecb15d6d4af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMCDPAKI%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV0nEv%2FxKJGMyL3RgoMmbGPDKxnM2fxKDZNONneuGSgQIhAPxFmpVEdg60l1UlAO%2BKhITCcUoKFPHibIZsz3CvFLX8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igzzzwuwg3B66W0SHQ4q3APhAXD0UmBzuFJNQrWuYuefYPAqVu9DrxjiM%2BkwsjKkJmUR2ln8QIBODKhvmNFJygDr6AjrupfuM9zyCGPBzKeAV3fxATC2Ghmh4ZBKzK6OOXhyVBySllcfwNUmrIMDWMZyQNejqIQNb%2B0Ma4iqWEYNbHbGMC%2FKItGjee31jvWzjdxZ7lAKGNpGScZNZWkOe7jDjlNdlZL%2Fd02q1Mtjp9z4zqSF03zA9IQVNNwMvzjR%2FMe1NtqT2YSDc1Q2wMVYy3Lyfe3rioQNjmzS%2FKd6AwcVDmF7KEis%2FyxGKu2Xxb3KCXiiVTv4c0G3QPIprjTpSPqLBCeXb9fl5mNbLHm3BjXxM17v6iYz0uG0P5%2B0AvqwrBjHk%2Fym7OFKiBgQW0PDJOGB81bXr76rpY1oDO5R%2B39yGnPIbVJ7pjiJsAcCXWWJeZJbGneP8r7zyILcteDFCM6ZNi%2FkiK59Z6xdTfcArA2jt1fHceNRU%2F%2BLEJisZMAU7yRbNl5%2BtYnkb0W1zaHLDDcvsv4B4RyfjFMHPGNw9Zn9zJIqPwDXOlWsG2KkBUjV7qdbeX4dLycvsvOW%2Fj3dqBa8st4WADEBheQEX%2FmDg1o6eSKSK0dyRXhZi6oo1bCSzHrYdRKVhpOTryyaeTD8suDLBjqkASGeRzEgLlzfqdVLf3%2B614IIGH0dmTYMYlfYDYUSzkHMFBi%2Ft5zRV6PMVlh7gONLlOqzFkD7w956UIMJEf7cMVXZdcdc9I1J%2FQlTvD0n6iIyVPG8O9VDwkLg%2FV1abMtYenLRV6yYR90J5NfmxVUWM7ww4LCkhbsBXVVXhDzBkDpOGSapWUliH86LN8euMzm8QrgtlwK5U6Zv%2FQSK2Ti8U5aLhRAm&X-Amz-Signature=f27f05c343f606a78372fd21dbe2d4d38255b9a664fb7a98ea48cdbc1f1eea18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMCDPAKI%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV0nEv%2FxKJGMyL3RgoMmbGPDKxnM2fxKDZNONneuGSgQIhAPxFmpVEdg60l1UlAO%2BKhITCcUoKFPHibIZsz3CvFLX8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igzzzwuwg3B66W0SHQ4q3APhAXD0UmBzuFJNQrWuYuefYPAqVu9DrxjiM%2BkwsjKkJmUR2ln8QIBODKhvmNFJygDr6AjrupfuM9zyCGPBzKeAV3fxATC2Ghmh4ZBKzK6OOXhyVBySllcfwNUmrIMDWMZyQNejqIQNb%2B0Ma4iqWEYNbHbGMC%2FKItGjee31jvWzjdxZ7lAKGNpGScZNZWkOe7jDjlNdlZL%2Fd02q1Mtjp9z4zqSF03zA9IQVNNwMvzjR%2FMe1NtqT2YSDc1Q2wMVYy3Lyfe3rioQNjmzS%2FKd6AwcVDmF7KEis%2FyxGKu2Xxb3KCXiiVTv4c0G3QPIprjTpSPqLBCeXb9fl5mNbLHm3BjXxM17v6iYz0uG0P5%2B0AvqwrBjHk%2Fym7OFKiBgQW0PDJOGB81bXr76rpY1oDO5R%2B39yGnPIbVJ7pjiJsAcCXWWJeZJbGneP8r7zyILcteDFCM6ZNi%2FkiK59Z6xdTfcArA2jt1fHceNRU%2F%2BLEJisZMAU7yRbNl5%2BtYnkb0W1zaHLDDcvsv4B4RyfjFMHPGNw9Zn9zJIqPwDXOlWsG2KkBUjV7qdbeX4dLycvsvOW%2Fj3dqBa8st4WADEBheQEX%2FmDg1o6eSKSK0dyRXhZi6oo1bCSzHrYdRKVhpOTryyaeTD8suDLBjqkASGeRzEgLlzfqdVLf3%2B614IIGH0dmTYMYlfYDYUSzkHMFBi%2Ft5zRV6PMVlh7gONLlOqzFkD7w956UIMJEf7cMVXZdcdc9I1J%2FQlTvD0n6iIyVPG8O9VDwkLg%2FV1abMtYenLRV6yYR90J5NfmxVUWM7ww4LCkhbsBXVVXhDzBkDpOGSapWUliH86LN8euMzm8QrgtlwK5U6Zv%2FQSK2Ti8U5aLhRAm&X-Amz-Signature=2a9bdef81cdee5a5ba16d633c000df7a57f1333892b3419b21789954d9c8f686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMCDPAKI%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV0nEv%2FxKJGMyL3RgoMmbGPDKxnM2fxKDZNONneuGSgQIhAPxFmpVEdg60l1UlAO%2BKhITCcUoKFPHibIZsz3CvFLX8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igzzzwuwg3B66W0SHQ4q3APhAXD0UmBzuFJNQrWuYuefYPAqVu9DrxjiM%2BkwsjKkJmUR2ln8QIBODKhvmNFJygDr6AjrupfuM9zyCGPBzKeAV3fxATC2Ghmh4ZBKzK6OOXhyVBySllcfwNUmrIMDWMZyQNejqIQNb%2B0Ma4iqWEYNbHbGMC%2FKItGjee31jvWzjdxZ7lAKGNpGScZNZWkOe7jDjlNdlZL%2Fd02q1Mtjp9z4zqSF03zA9IQVNNwMvzjR%2FMe1NtqT2YSDc1Q2wMVYy3Lyfe3rioQNjmzS%2FKd6AwcVDmF7KEis%2FyxGKu2Xxb3KCXiiVTv4c0G3QPIprjTpSPqLBCeXb9fl5mNbLHm3BjXxM17v6iYz0uG0P5%2B0AvqwrBjHk%2Fym7OFKiBgQW0PDJOGB81bXr76rpY1oDO5R%2B39yGnPIbVJ7pjiJsAcCXWWJeZJbGneP8r7zyILcteDFCM6ZNi%2FkiK59Z6xdTfcArA2jt1fHceNRU%2F%2BLEJisZMAU7yRbNl5%2BtYnkb0W1zaHLDDcvsv4B4RyfjFMHPGNw9Zn9zJIqPwDXOlWsG2KkBUjV7qdbeX4dLycvsvOW%2Fj3dqBa8st4WADEBheQEX%2FmDg1o6eSKSK0dyRXhZi6oo1bCSzHrYdRKVhpOTryyaeTD8suDLBjqkASGeRzEgLlzfqdVLf3%2B614IIGH0dmTYMYlfYDYUSzkHMFBi%2Ft5zRV6PMVlh7gONLlOqzFkD7w956UIMJEf7cMVXZdcdc9I1J%2FQlTvD0n6iIyVPG8O9VDwkLg%2FV1abMtYenLRV6yYR90J5NfmxVUWM7ww4LCkhbsBXVVXhDzBkDpOGSapWUliH86LN8euMzm8QrgtlwK5U6Zv%2FQSK2Ti8U5aLhRAm&X-Amz-Signature=f6bf58cbe0815527a2bb97cf450258a396cd568c22ce59d764f57fdcf4f91f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMCDPAKI%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV0nEv%2FxKJGMyL3RgoMmbGPDKxnM2fxKDZNONneuGSgQIhAPxFmpVEdg60l1UlAO%2BKhITCcUoKFPHibIZsz3CvFLX8Kv8DCEsQABoMNjM3NDIzMTgzODA1Igzzzwuwg3B66W0SHQ4q3APhAXD0UmBzuFJNQrWuYuefYPAqVu9DrxjiM%2BkwsjKkJmUR2ln8QIBODKhvmNFJygDr6AjrupfuM9zyCGPBzKeAV3fxATC2Ghmh4ZBKzK6OOXhyVBySllcfwNUmrIMDWMZyQNejqIQNb%2B0Ma4iqWEYNbHbGMC%2FKItGjee31jvWzjdxZ7lAKGNpGScZNZWkOe7jDjlNdlZL%2Fd02q1Mtjp9z4zqSF03zA9IQVNNwMvzjR%2FMe1NtqT2YSDc1Q2wMVYy3Lyfe3rioQNjmzS%2FKd6AwcVDmF7KEis%2FyxGKu2Xxb3KCXiiVTv4c0G3QPIprjTpSPqLBCeXb9fl5mNbLHm3BjXxM17v6iYz0uG0P5%2B0AvqwrBjHk%2Fym7OFKiBgQW0PDJOGB81bXr76rpY1oDO5R%2B39yGnPIbVJ7pjiJsAcCXWWJeZJbGneP8r7zyILcteDFCM6ZNi%2FkiK59Z6xdTfcArA2jt1fHceNRU%2F%2BLEJisZMAU7yRbNl5%2BtYnkb0W1zaHLDDcvsv4B4RyfjFMHPGNw9Zn9zJIqPwDXOlWsG2KkBUjV7qdbeX4dLycvsvOW%2Fj3dqBa8st4WADEBheQEX%2FmDg1o6eSKSK0dyRXhZi6oo1bCSzHrYdRKVhpOTryyaeTD8suDLBjqkASGeRzEgLlzfqdVLf3%2B614IIGH0dmTYMYlfYDYUSzkHMFBi%2Ft5zRV6PMVlh7gONLlOqzFkD7w956UIMJEf7cMVXZdcdc9I1J%2FQlTvD0n6iIyVPG8O9VDwkLg%2FV1abMtYenLRV6yYR90J5NfmxVUWM7ww4LCkhbsBXVVXhDzBkDpOGSapWUliH86LN8euMzm8QrgtlwK5U6Zv%2FQSK2Ti8U5aLhRAm&X-Amz-Signature=acc1acc83405d983a8361a1c637faa03beb7cd14157761c8cf4027187b07242f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


