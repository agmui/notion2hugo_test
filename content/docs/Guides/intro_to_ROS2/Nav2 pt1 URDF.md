---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-31T22:57:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-31T22:57:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG3MZRT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1DXYLjstQ72K9rlORnDc4Cr28kl0y0AwykMrTmvyiAiAbViNSV9CWmFSVmyc4ZWAUgrmul4qngSU5QHmKi2adbSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliilxNvKth8T1kueKtwDkTGlbavGyV1WxqPPyH%2BSBTi4N%2BQD%2BlBhtZd6vBKMsYKLk59HSC%2BI4yLpU9f0WyPARf9JhmE%2F5d17ZhiuHr%2BmseYZGsz%2F%2B7W%2Bmus8UTZdep%2B3hGdMENTZn6j7j8kYSss3lUGUNF0RJt9X%2Fp1Qcf8wJN0C95F9DEiNzql1jPjf1aYQ0skwuAPcrKvM6n11bfG7sDQ4Knh3Y8cu0EdIwt3q3lqHGv9OVRCnGL2cOH7RFf7SUuISO4YriPH7sCGErhE7Aw%2BWPDUDtjKW7L2dilI24Aka%2FLN7WK10m96hJ2smYFTI2COQS82x%2FbLbDqltXSa69N%2FptOuGMblfI%2B%2F1XcynUg3p7HbOXx8hHYzGFRrPe%2BOjmnRklKwl%2B8Mecj2aVgPimghyyvSrTKrcgG6Z5NH0OXyOjfFq2cWs0Epp%2BHm1DWQScRSWUsOTwJZ5IcNBtjGUC4eT4%2BBDVNH7HuxPCz%2F6UWo2YiaVLVmSfzngk8%2FuC513%2BBrrqIZXvJoNPFVElG1XSIaZ8RiKSdmWQpj1cLf%2Fh0lmmJQoEStqTsnkPSk4mckqh15BLnpH1fdBsVfy%2BUyh%2FOFzxoTUAPeN%2BWeyDKFo77L5ZjSCkuIY90C4aGKMJ3Sut7oHXW9S0Oauyxswqe6vxAY6pgGOzJaLxhoU7LoRc18h0aWuGvsKI6bZIkDiXA8VE3%2B4s58r9v4rT%2BkCyAaAlUaW54s5c32BfJUzxKJJ96bKIGEg%2FP6FwKq%2BAmxKGJktgW9PqfK0srtLSI69OEINirqlVXYpjCkMG3aIBgiUOkmP4k5WUgSQT5TQ9aHA%2FZHPg76bAVp4Cjccedt3kBfxs3W2H%2Flqvd8xapDRLHOUsshr5H5Ju2ggf%2FiO&X-Amz-Signature=f157a1efecfdcbe4d30e1df196fa02d87b752f23a64d598ec4f9147a509ef713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG3MZRT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1DXYLjstQ72K9rlORnDc4Cr28kl0y0AwykMrTmvyiAiAbViNSV9CWmFSVmyc4ZWAUgrmul4qngSU5QHmKi2adbSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliilxNvKth8T1kueKtwDkTGlbavGyV1WxqPPyH%2BSBTi4N%2BQD%2BlBhtZd6vBKMsYKLk59HSC%2BI4yLpU9f0WyPARf9JhmE%2F5d17ZhiuHr%2BmseYZGsz%2F%2B7W%2Bmus8UTZdep%2B3hGdMENTZn6j7j8kYSss3lUGUNF0RJt9X%2Fp1Qcf8wJN0C95F9DEiNzql1jPjf1aYQ0skwuAPcrKvM6n11bfG7sDQ4Knh3Y8cu0EdIwt3q3lqHGv9OVRCnGL2cOH7RFf7SUuISO4YriPH7sCGErhE7Aw%2BWPDUDtjKW7L2dilI24Aka%2FLN7WK10m96hJ2smYFTI2COQS82x%2FbLbDqltXSa69N%2FptOuGMblfI%2B%2F1XcynUg3p7HbOXx8hHYzGFRrPe%2BOjmnRklKwl%2B8Mecj2aVgPimghyyvSrTKrcgG6Z5NH0OXyOjfFq2cWs0Epp%2BHm1DWQScRSWUsOTwJZ5IcNBtjGUC4eT4%2BBDVNH7HuxPCz%2F6UWo2YiaVLVmSfzngk8%2FuC513%2BBrrqIZXvJoNPFVElG1XSIaZ8RiKSdmWQpj1cLf%2Fh0lmmJQoEStqTsnkPSk4mckqh15BLnpH1fdBsVfy%2BUyh%2FOFzxoTUAPeN%2BWeyDKFo77L5ZjSCkuIY90C4aGKMJ3Sut7oHXW9S0Oauyxswqe6vxAY6pgGOzJaLxhoU7LoRc18h0aWuGvsKI6bZIkDiXA8VE3%2B4s58r9v4rT%2BkCyAaAlUaW54s5c32BfJUzxKJJ96bKIGEg%2FP6FwKq%2BAmxKGJktgW9PqfK0srtLSI69OEINirqlVXYpjCkMG3aIBgiUOkmP4k5WUgSQT5TQ9aHA%2FZHPg76bAVp4Cjccedt3kBfxs3W2H%2Flqvd8xapDRLHOUsshr5H5Ju2ggf%2FiO&X-Amz-Signature=96e2355f000324cf1cfb634c4e2837789d63129fedc99191e8ba22577400887b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG3MZRT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1DXYLjstQ72K9rlORnDc4Cr28kl0y0AwykMrTmvyiAiAbViNSV9CWmFSVmyc4ZWAUgrmul4qngSU5QHmKi2adbSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliilxNvKth8T1kueKtwDkTGlbavGyV1WxqPPyH%2BSBTi4N%2BQD%2BlBhtZd6vBKMsYKLk59HSC%2BI4yLpU9f0WyPARf9JhmE%2F5d17ZhiuHr%2BmseYZGsz%2F%2B7W%2Bmus8UTZdep%2B3hGdMENTZn6j7j8kYSss3lUGUNF0RJt9X%2Fp1Qcf8wJN0C95F9DEiNzql1jPjf1aYQ0skwuAPcrKvM6n11bfG7sDQ4Knh3Y8cu0EdIwt3q3lqHGv9OVRCnGL2cOH7RFf7SUuISO4YriPH7sCGErhE7Aw%2BWPDUDtjKW7L2dilI24Aka%2FLN7WK10m96hJ2smYFTI2COQS82x%2FbLbDqltXSa69N%2FptOuGMblfI%2B%2F1XcynUg3p7HbOXx8hHYzGFRrPe%2BOjmnRklKwl%2B8Mecj2aVgPimghyyvSrTKrcgG6Z5NH0OXyOjfFq2cWs0Epp%2BHm1DWQScRSWUsOTwJZ5IcNBtjGUC4eT4%2BBDVNH7HuxPCz%2F6UWo2YiaVLVmSfzngk8%2FuC513%2BBrrqIZXvJoNPFVElG1XSIaZ8RiKSdmWQpj1cLf%2Fh0lmmJQoEStqTsnkPSk4mckqh15BLnpH1fdBsVfy%2BUyh%2FOFzxoTUAPeN%2BWeyDKFo77L5ZjSCkuIY90C4aGKMJ3Sut7oHXW9S0Oauyxswqe6vxAY6pgGOzJaLxhoU7LoRc18h0aWuGvsKI6bZIkDiXA8VE3%2B4s58r9v4rT%2BkCyAaAlUaW54s5c32BfJUzxKJJ96bKIGEg%2FP6FwKq%2BAmxKGJktgW9PqfK0srtLSI69OEINirqlVXYpjCkMG3aIBgiUOkmP4k5WUgSQT5TQ9aHA%2FZHPg76bAVp4Cjccedt3kBfxs3W2H%2Flqvd8xapDRLHOUsshr5H5Ju2ggf%2FiO&X-Amz-Signature=65b8dc12968db98e68ba1e10751848a7dd4d3f9d68acc00d96d50701161b040f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG3MZRT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1DXYLjstQ72K9rlORnDc4Cr28kl0y0AwykMrTmvyiAiAbViNSV9CWmFSVmyc4ZWAUgrmul4qngSU5QHmKi2adbSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliilxNvKth8T1kueKtwDkTGlbavGyV1WxqPPyH%2BSBTi4N%2BQD%2BlBhtZd6vBKMsYKLk59HSC%2BI4yLpU9f0WyPARf9JhmE%2F5d17ZhiuHr%2BmseYZGsz%2F%2B7W%2Bmus8UTZdep%2B3hGdMENTZn6j7j8kYSss3lUGUNF0RJt9X%2Fp1Qcf8wJN0C95F9DEiNzql1jPjf1aYQ0skwuAPcrKvM6n11bfG7sDQ4Knh3Y8cu0EdIwt3q3lqHGv9OVRCnGL2cOH7RFf7SUuISO4YriPH7sCGErhE7Aw%2BWPDUDtjKW7L2dilI24Aka%2FLN7WK10m96hJ2smYFTI2COQS82x%2FbLbDqltXSa69N%2FptOuGMblfI%2B%2F1XcynUg3p7HbOXx8hHYzGFRrPe%2BOjmnRklKwl%2B8Mecj2aVgPimghyyvSrTKrcgG6Z5NH0OXyOjfFq2cWs0Epp%2BHm1DWQScRSWUsOTwJZ5IcNBtjGUC4eT4%2BBDVNH7HuxPCz%2F6UWo2YiaVLVmSfzngk8%2FuC513%2BBrrqIZXvJoNPFVElG1XSIaZ8RiKSdmWQpj1cLf%2Fh0lmmJQoEStqTsnkPSk4mckqh15BLnpH1fdBsVfy%2BUyh%2FOFzxoTUAPeN%2BWeyDKFo77L5ZjSCkuIY90C4aGKMJ3Sut7oHXW9S0Oauyxswqe6vxAY6pgGOzJaLxhoU7LoRc18h0aWuGvsKI6bZIkDiXA8VE3%2B4s58r9v4rT%2BkCyAaAlUaW54s5c32BfJUzxKJJ96bKIGEg%2FP6FwKq%2BAmxKGJktgW9PqfK0srtLSI69OEINirqlVXYpjCkMG3aIBgiUOkmP4k5WUgSQT5TQ9aHA%2FZHPg76bAVp4Cjccedt3kBfxs3W2H%2Flqvd8xapDRLHOUsshr5H5Ju2ggf%2FiO&X-Amz-Signature=77d88004b9b2d61d2ef7b9b28e2e8cb7adc9c0d94b2e62e8bd6e210e5f60a073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG3MZRT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1DXYLjstQ72K9rlORnDc4Cr28kl0y0AwykMrTmvyiAiAbViNSV9CWmFSVmyc4ZWAUgrmul4qngSU5QHmKi2adbSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliilxNvKth8T1kueKtwDkTGlbavGyV1WxqPPyH%2BSBTi4N%2BQD%2BlBhtZd6vBKMsYKLk59HSC%2BI4yLpU9f0WyPARf9JhmE%2F5d17ZhiuHr%2BmseYZGsz%2F%2B7W%2Bmus8UTZdep%2B3hGdMENTZn6j7j8kYSss3lUGUNF0RJt9X%2Fp1Qcf8wJN0C95F9DEiNzql1jPjf1aYQ0skwuAPcrKvM6n11bfG7sDQ4Knh3Y8cu0EdIwt3q3lqHGv9OVRCnGL2cOH7RFf7SUuISO4YriPH7sCGErhE7Aw%2BWPDUDtjKW7L2dilI24Aka%2FLN7WK10m96hJ2smYFTI2COQS82x%2FbLbDqltXSa69N%2FptOuGMblfI%2B%2F1XcynUg3p7HbOXx8hHYzGFRrPe%2BOjmnRklKwl%2B8Mecj2aVgPimghyyvSrTKrcgG6Z5NH0OXyOjfFq2cWs0Epp%2BHm1DWQScRSWUsOTwJZ5IcNBtjGUC4eT4%2BBDVNH7HuxPCz%2F6UWo2YiaVLVmSfzngk8%2FuC513%2BBrrqIZXvJoNPFVElG1XSIaZ8RiKSdmWQpj1cLf%2Fh0lmmJQoEStqTsnkPSk4mckqh15BLnpH1fdBsVfy%2BUyh%2FOFzxoTUAPeN%2BWeyDKFo77L5ZjSCkuIY90C4aGKMJ3Sut7oHXW9S0Oauyxswqe6vxAY6pgGOzJaLxhoU7LoRc18h0aWuGvsKI6bZIkDiXA8VE3%2B4s58r9v4rT%2BkCyAaAlUaW54s5c32BfJUzxKJJ96bKIGEg%2FP6FwKq%2BAmxKGJktgW9PqfK0srtLSI69OEINirqlVXYpjCkMG3aIBgiUOkmP4k5WUgSQT5TQ9aHA%2FZHPg76bAVp4Cjccedt3kBfxs3W2H%2Flqvd8xapDRLHOUsshr5H5Ju2ggf%2FiO&X-Amz-Signature=8296c0529774b422c6e627e5838461bdce1a1acbbdfa76d0ec469ea296afc1f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG3MZRT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1DXYLjstQ72K9rlORnDc4Cr28kl0y0AwykMrTmvyiAiAbViNSV9CWmFSVmyc4ZWAUgrmul4qngSU5QHmKi2adbSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliilxNvKth8T1kueKtwDkTGlbavGyV1WxqPPyH%2BSBTi4N%2BQD%2BlBhtZd6vBKMsYKLk59HSC%2BI4yLpU9f0WyPARf9JhmE%2F5d17ZhiuHr%2BmseYZGsz%2F%2B7W%2Bmus8UTZdep%2B3hGdMENTZn6j7j8kYSss3lUGUNF0RJt9X%2Fp1Qcf8wJN0C95F9DEiNzql1jPjf1aYQ0skwuAPcrKvM6n11bfG7sDQ4Knh3Y8cu0EdIwt3q3lqHGv9OVRCnGL2cOH7RFf7SUuISO4YriPH7sCGErhE7Aw%2BWPDUDtjKW7L2dilI24Aka%2FLN7WK10m96hJ2smYFTI2COQS82x%2FbLbDqltXSa69N%2FptOuGMblfI%2B%2F1XcynUg3p7HbOXx8hHYzGFRrPe%2BOjmnRklKwl%2B8Mecj2aVgPimghyyvSrTKrcgG6Z5NH0OXyOjfFq2cWs0Epp%2BHm1DWQScRSWUsOTwJZ5IcNBtjGUC4eT4%2BBDVNH7HuxPCz%2F6UWo2YiaVLVmSfzngk8%2FuC513%2BBrrqIZXvJoNPFVElG1XSIaZ8RiKSdmWQpj1cLf%2Fh0lmmJQoEStqTsnkPSk4mckqh15BLnpH1fdBsVfy%2BUyh%2FOFzxoTUAPeN%2BWeyDKFo77L5ZjSCkuIY90C4aGKMJ3Sut7oHXW9S0Oauyxswqe6vxAY6pgGOzJaLxhoU7LoRc18h0aWuGvsKI6bZIkDiXA8VE3%2B4s58r9v4rT%2BkCyAaAlUaW54s5c32BfJUzxKJJ96bKIGEg%2FP6FwKq%2BAmxKGJktgW9PqfK0srtLSI69OEINirqlVXYpjCkMG3aIBgiUOkmP4k5WUgSQT5TQ9aHA%2FZHPg76bAVp4Cjccedt3kBfxs3W2H%2Flqvd8xapDRLHOUsshr5H5Ju2ggf%2FiO&X-Amz-Signature=6b9228b249618cf84abe04c452f40d671686d81a3900e10500471ffe4d050ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG3MZRT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1DXYLjstQ72K9rlORnDc4Cr28kl0y0AwykMrTmvyiAiAbViNSV9CWmFSVmyc4ZWAUgrmul4qngSU5QHmKi2adbSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliilxNvKth8T1kueKtwDkTGlbavGyV1WxqPPyH%2BSBTi4N%2BQD%2BlBhtZd6vBKMsYKLk59HSC%2BI4yLpU9f0WyPARf9JhmE%2F5d17ZhiuHr%2BmseYZGsz%2F%2B7W%2Bmus8UTZdep%2B3hGdMENTZn6j7j8kYSss3lUGUNF0RJt9X%2Fp1Qcf8wJN0C95F9DEiNzql1jPjf1aYQ0skwuAPcrKvM6n11bfG7sDQ4Knh3Y8cu0EdIwt3q3lqHGv9OVRCnGL2cOH7RFf7SUuISO4YriPH7sCGErhE7Aw%2BWPDUDtjKW7L2dilI24Aka%2FLN7WK10m96hJ2smYFTI2COQS82x%2FbLbDqltXSa69N%2FptOuGMblfI%2B%2F1XcynUg3p7HbOXx8hHYzGFRrPe%2BOjmnRklKwl%2B8Mecj2aVgPimghyyvSrTKrcgG6Z5NH0OXyOjfFq2cWs0Epp%2BHm1DWQScRSWUsOTwJZ5IcNBtjGUC4eT4%2BBDVNH7HuxPCz%2F6UWo2YiaVLVmSfzngk8%2FuC513%2BBrrqIZXvJoNPFVElG1XSIaZ8RiKSdmWQpj1cLf%2Fh0lmmJQoEStqTsnkPSk4mckqh15BLnpH1fdBsVfy%2BUyh%2FOFzxoTUAPeN%2BWeyDKFo77L5ZjSCkuIY90C4aGKMJ3Sut7oHXW9S0Oauyxswqe6vxAY6pgGOzJaLxhoU7LoRc18h0aWuGvsKI6bZIkDiXA8VE3%2B4s58r9v4rT%2BkCyAaAlUaW54s5c32BfJUzxKJJ96bKIGEg%2FP6FwKq%2BAmxKGJktgW9PqfK0srtLSI69OEINirqlVXYpjCkMG3aIBgiUOkmP4k5WUgSQT5TQ9aHA%2FZHPg76bAVp4Cjccedt3kBfxs3W2H%2Flqvd8xapDRLHOUsshr5H5Ju2ggf%2FiO&X-Amz-Signature=d0ccea5f1bed6aea7d3d6e115f6ad614c7230dd90f1b46fc06e80f74ce109b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG3MZRT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1DXYLjstQ72K9rlORnDc4Cr28kl0y0AwykMrTmvyiAiAbViNSV9CWmFSVmyc4ZWAUgrmul4qngSU5QHmKi2adbSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliilxNvKth8T1kueKtwDkTGlbavGyV1WxqPPyH%2BSBTi4N%2BQD%2BlBhtZd6vBKMsYKLk59HSC%2BI4yLpU9f0WyPARf9JhmE%2F5d17ZhiuHr%2BmseYZGsz%2F%2B7W%2Bmus8UTZdep%2B3hGdMENTZn6j7j8kYSss3lUGUNF0RJt9X%2Fp1Qcf8wJN0C95F9DEiNzql1jPjf1aYQ0skwuAPcrKvM6n11bfG7sDQ4Knh3Y8cu0EdIwt3q3lqHGv9OVRCnGL2cOH7RFf7SUuISO4YriPH7sCGErhE7Aw%2BWPDUDtjKW7L2dilI24Aka%2FLN7WK10m96hJ2smYFTI2COQS82x%2FbLbDqltXSa69N%2FptOuGMblfI%2B%2F1XcynUg3p7HbOXx8hHYzGFRrPe%2BOjmnRklKwl%2B8Mecj2aVgPimghyyvSrTKrcgG6Z5NH0OXyOjfFq2cWs0Epp%2BHm1DWQScRSWUsOTwJZ5IcNBtjGUC4eT4%2BBDVNH7HuxPCz%2F6UWo2YiaVLVmSfzngk8%2FuC513%2BBrrqIZXvJoNPFVElG1XSIaZ8RiKSdmWQpj1cLf%2Fh0lmmJQoEStqTsnkPSk4mckqh15BLnpH1fdBsVfy%2BUyh%2FOFzxoTUAPeN%2BWeyDKFo77L5ZjSCkuIY90C4aGKMJ3Sut7oHXW9S0Oauyxswqe6vxAY6pgGOzJaLxhoU7LoRc18h0aWuGvsKI6bZIkDiXA8VE3%2B4s58r9v4rT%2BkCyAaAlUaW54s5c32BfJUzxKJJ96bKIGEg%2FP6FwKq%2BAmxKGJktgW9PqfK0srtLSI69OEINirqlVXYpjCkMG3aIBgiUOkmP4k5WUgSQT5TQ9aHA%2FZHPg76bAVp4Cjccedt3kBfxs3W2H%2Flqvd8xapDRLHOUsshr5H5Ju2ggf%2FiO&X-Amz-Signature=add03370a67ae189fc21fdb8a9cb98cf284a41c71cfeded7280f2e328332a1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG3MZRT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1DXYLjstQ72K9rlORnDc4Cr28kl0y0AwykMrTmvyiAiAbViNSV9CWmFSVmyc4ZWAUgrmul4qngSU5QHmKi2adbSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliilxNvKth8T1kueKtwDkTGlbavGyV1WxqPPyH%2BSBTi4N%2BQD%2BlBhtZd6vBKMsYKLk59HSC%2BI4yLpU9f0WyPARf9JhmE%2F5d17ZhiuHr%2BmseYZGsz%2F%2B7W%2Bmus8UTZdep%2B3hGdMENTZn6j7j8kYSss3lUGUNF0RJt9X%2Fp1Qcf8wJN0C95F9DEiNzql1jPjf1aYQ0skwuAPcrKvM6n11bfG7sDQ4Knh3Y8cu0EdIwt3q3lqHGv9OVRCnGL2cOH7RFf7SUuISO4YriPH7sCGErhE7Aw%2BWPDUDtjKW7L2dilI24Aka%2FLN7WK10m96hJ2smYFTI2COQS82x%2FbLbDqltXSa69N%2FptOuGMblfI%2B%2F1XcynUg3p7HbOXx8hHYzGFRrPe%2BOjmnRklKwl%2B8Mecj2aVgPimghyyvSrTKrcgG6Z5NH0OXyOjfFq2cWs0Epp%2BHm1DWQScRSWUsOTwJZ5IcNBtjGUC4eT4%2BBDVNH7HuxPCz%2F6UWo2YiaVLVmSfzngk8%2FuC513%2BBrrqIZXvJoNPFVElG1XSIaZ8RiKSdmWQpj1cLf%2Fh0lmmJQoEStqTsnkPSk4mckqh15BLnpH1fdBsVfy%2BUyh%2FOFzxoTUAPeN%2BWeyDKFo77L5ZjSCkuIY90C4aGKMJ3Sut7oHXW9S0Oauyxswqe6vxAY6pgGOzJaLxhoU7LoRc18h0aWuGvsKI6bZIkDiXA8VE3%2B4s58r9v4rT%2BkCyAaAlUaW54s5c32BfJUzxKJJ96bKIGEg%2FP6FwKq%2BAmxKGJktgW9PqfK0srtLSI69OEINirqlVXYpjCkMG3aIBgiUOkmP4k5WUgSQT5TQ9aHA%2FZHPg76bAVp4Cjccedt3kBfxs3W2H%2Flqvd8xapDRLHOUsshr5H5Ju2ggf%2FiO&X-Amz-Signature=9119ac90292282e2ca306ce67806a2799a86f9371d08440de0470f1f6c829b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG3MZRT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1DXYLjstQ72K9rlORnDc4Cr28kl0y0AwykMrTmvyiAiAbViNSV9CWmFSVmyc4ZWAUgrmul4qngSU5QHmKi2adbSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliilxNvKth8T1kueKtwDkTGlbavGyV1WxqPPyH%2BSBTi4N%2BQD%2BlBhtZd6vBKMsYKLk59HSC%2BI4yLpU9f0WyPARf9JhmE%2F5d17ZhiuHr%2BmseYZGsz%2F%2B7W%2Bmus8UTZdep%2B3hGdMENTZn6j7j8kYSss3lUGUNF0RJt9X%2Fp1Qcf8wJN0C95F9DEiNzql1jPjf1aYQ0skwuAPcrKvM6n11bfG7sDQ4Knh3Y8cu0EdIwt3q3lqHGv9OVRCnGL2cOH7RFf7SUuISO4YriPH7sCGErhE7Aw%2BWPDUDtjKW7L2dilI24Aka%2FLN7WK10m96hJ2smYFTI2COQS82x%2FbLbDqltXSa69N%2FptOuGMblfI%2B%2F1XcynUg3p7HbOXx8hHYzGFRrPe%2BOjmnRklKwl%2B8Mecj2aVgPimghyyvSrTKrcgG6Z5NH0OXyOjfFq2cWs0Epp%2BHm1DWQScRSWUsOTwJZ5IcNBtjGUC4eT4%2BBDVNH7HuxPCz%2F6UWo2YiaVLVmSfzngk8%2FuC513%2BBrrqIZXvJoNPFVElG1XSIaZ8RiKSdmWQpj1cLf%2Fh0lmmJQoEStqTsnkPSk4mckqh15BLnpH1fdBsVfy%2BUyh%2FOFzxoTUAPeN%2BWeyDKFo77L5ZjSCkuIY90C4aGKMJ3Sut7oHXW9S0Oauyxswqe6vxAY6pgGOzJaLxhoU7LoRc18h0aWuGvsKI6bZIkDiXA8VE3%2B4s58r9v4rT%2BkCyAaAlUaW54s5c32BfJUzxKJJ96bKIGEg%2FP6FwKq%2BAmxKGJktgW9PqfK0srtLSI69OEINirqlVXYpjCkMG3aIBgiUOkmP4k5WUgSQT5TQ9aHA%2FZHPg76bAVp4Cjccedt3kBfxs3W2H%2Flqvd8xapDRLHOUsshr5H5Ju2ggf%2FiO&X-Amz-Signature=e27a49be65567c2a84530d7615456f941e2d37d0d9d16e570849462fe79d7d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- origin
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- origin
- xacro:wheel

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG3MZRT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1DXYLjstQ72K9rlORnDc4Cr28kl0y0AwykMrTmvyiAiAbViNSV9CWmFSVmyc4ZWAUgrmul4qngSU5QHmKi2adbSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliilxNvKth8T1kueKtwDkTGlbavGyV1WxqPPyH%2BSBTi4N%2BQD%2BlBhtZd6vBKMsYKLk59HSC%2BI4yLpU9f0WyPARf9JhmE%2F5d17ZhiuHr%2BmseYZGsz%2F%2B7W%2Bmus8UTZdep%2B3hGdMENTZn6j7j8kYSss3lUGUNF0RJt9X%2Fp1Qcf8wJN0C95F9DEiNzql1jPjf1aYQ0skwuAPcrKvM6n11bfG7sDQ4Knh3Y8cu0EdIwt3q3lqHGv9OVRCnGL2cOH7RFf7SUuISO4YriPH7sCGErhE7Aw%2BWPDUDtjKW7L2dilI24Aka%2FLN7WK10m96hJ2smYFTI2COQS82x%2FbLbDqltXSa69N%2FptOuGMblfI%2B%2F1XcynUg3p7HbOXx8hHYzGFRrPe%2BOjmnRklKwl%2B8Mecj2aVgPimghyyvSrTKrcgG6Z5NH0OXyOjfFq2cWs0Epp%2BHm1DWQScRSWUsOTwJZ5IcNBtjGUC4eT4%2BBDVNH7HuxPCz%2F6UWo2YiaVLVmSfzngk8%2FuC513%2BBrrqIZXvJoNPFVElG1XSIaZ8RiKSdmWQpj1cLf%2Fh0lmmJQoEStqTsnkPSk4mckqh15BLnpH1fdBsVfy%2BUyh%2FOFzxoTUAPeN%2BWeyDKFo77L5ZjSCkuIY90C4aGKMJ3Sut7oHXW9S0Oauyxswqe6vxAY6pgGOzJaLxhoU7LoRc18h0aWuGvsKI6bZIkDiXA8VE3%2B4s58r9v4rT%2BkCyAaAlUaW54s5c32BfJUzxKJJ96bKIGEg%2FP6FwKq%2BAmxKGJktgW9PqfK0srtLSI69OEINirqlVXYpjCkMG3aIBgiUOkmP4k5WUgSQT5TQ9aHA%2FZHPg76bAVp4Cjccedt3kBfxs3W2H%2Flqvd8xapDRLHOUsshr5H5Ju2ggf%2FiO&X-Amz-Signature=929eac5382f10cc2e6f1510920d23a74c39967c94c6ee369e4a39b480ac257d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG3MZRT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1DXYLjstQ72K9rlORnDc4Cr28kl0y0AwykMrTmvyiAiAbViNSV9CWmFSVmyc4ZWAUgrmul4qngSU5QHmKi2adbSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliilxNvKth8T1kueKtwDkTGlbavGyV1WxqPPyH%2BSBTi4N%2BQD%2BlBhtZd6vBKMsYKLk59HSC%2BI4yLpU9f0WyPARf9JhmE%2F5d17ZhiuHr%2BmseYZGsz%2F%2B7W%2Bmus8UTZdep%2B3hGdMENTZn6j7j8kYSss3lUGUNF0RJt9X%2Fp1Qcf8wJN0C95F9DEiNzql1jPjf1aYQ0skwuAPcrKvM6n11bfG7sDQ4Knh3Y8cu0EdIwt3q3lqHGv9OVRCnGL2cOH7RFf7SUuISO4YriPH7sCGErhE7Aw%2BWPDUDtjKW7L2dilI24Aka%2FLN7WK10m96hJ2smYFTI2COQS82x%2FbLbDqltXSa69N%2FptOuGMblfI%2B%2F1XcynUg3p7HbOXx8hHYzGFRrPe%2BOjmnRklKwl%2B8Mecj2aVgPimghyyvSrTKrcgG6Z5NH0OXyOjfFq2cWs0Epp%2BHm1DWQScRSWUsOTwJZ5IcNBtjGUC4eT4%2BBDVNH7HuxPCz%2F6UWo2YiaVLVmSfzngk8%2FuC513%2BBrrqIZXvJoNPFVElG1XSIaZ8RiKSdmWQpj1cLf%2Fh0lmmJQoEStqTsnkPSk4mckqh15BLnpH1fdBsVfy%2BUyh%2FOFzxoTUAPeN%2BWeyDKFo77L5ZjSCkuIY90C4aGKMJ3Sut7oHXW9S0Oauyxswqe6vxAY6pgGOzJaLxhoU7LoRc18h0aWuGvsKI6bZIkDiXA8VE3%2B4s58r9v4rT%2BkCyAaAlUaW54s5c32BfJUzxKJJ96bKIGEg%2FP6FwKq%2BAmxKGJktgW9PqfK0srtLSI69OEINirqlVXYpjCkMG3aIBgiUOkmP4k5WUgSQT5TQ9aHA%2FZHPg76bAVp4Cjccedt3kBfxs3W2H%2Flqvd8xapDRLHOUsshr5H5Ju2ggf%2FiO&X-Amz-Signature=9eb1baa5d1a10a97213192f357d09ec8c7177563bcca57bea6a6330daf699e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRG3MZRT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL1DXYLjstQ72K9rlORnDc4Cr28kl0y0AwykMrTmvyiAiAbViNSV9CWmFSVmyc4ZWAUgrmul4qngSU5QHmKi2adbSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliilxNvKth8T1kueKtwDkTGlbavGyV1WxqPPyH%2BSBTi4N%2BQD%2BlBhtZd6vBKMsYKLk59HSC%2BI4yLpU9f0WyPARf9JhmE%2F5d17ZhiuHr%2BmseYZGsz%2F%2B7W%2Bmus8UTZdep%2B3hGdMENTZn6j7j8kYSss3lUGUNF0RJt9X%2Fp1Qcf8wJN0C95F9DEiNzql1jPjf1aYQ0skwuAPcrKvM6n11bfG7sDQ4Knh3Y8cu0EdIwt3q3lqHGv9OVRCnGL2cOH7RFf7SUuISO4YriPH7sCGErhE7Aw%2BWPDUDtjKW7L2dilI24Aka%2FLN7WK10m96hJ2smYFTI2COQS82x%2FbLbDqltXSa69N%2FptOuGMblfI%2B%2F1XcynUg3p7HbOXx8hHYzGFRrPe%2BOjmnRklKwl%2B8Mecj2aVgPimghyyvSrTKrcgG6Z5NH0OXyOjfFq2cWs0Epp%2BHm1DWQScRSWUsOTwJZ5IcNBtjGUC4eT4%2BBDVNH7HuxPCz%2F6UWo2YiaVLVmSfzngk8%2FuC513%2BBrrqIZXvJoNPFVElG1XSIaZ8RiKSdmWQpj1cLf%2Fh0lmmJQoEStqTsnkPSk4mckqh15BLnpH1fdBsVfy%2BUyh%2FOFzxoTUAPeN%2BWeyDKFo77L5ZjSCkuIY90C4aGKMJ3Sut7oHXW9S0Oauyxswqe6vxAY6pgGOzJaLxhoU7LoRc18h0aWuGvsKI6bZIkDiXA8VE3%2B4s58r9v4rT%2BkCyAaAlUaW54s5c32BfJUzxKJJ96bKIGEg%2FP6FwKq%2BAmxKGJktgW9PqfK0srtLSI69OEINirqlVXYpjCkMG3aIBgiUOkmP4k5WUgSQT5TQ9aHA%2FZHPg76bAVp4Cjccedt3kBfxs3W2H%2Flqvd8xapDRLHOUsshr5H5Ju2ggf%2FiO&X-Amz-Signature=0d6e17a8f670433e29c51f0add9a53e2e78b8ee977bcfbcd288d8b9c7215afad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OZTUW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzh4AY2wiKMqI4APYb8FejKKtbjrYbX%2BGs8tMvI2Nu4wIhANUZxJl4N9RtsLrJvlemFH0NW2p6tqP29Q1kQTUmVqtxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW%2BOko009iOr7aTmAq3ANBcGKspMo2KwT1hxYi2t1OaCw5v4tWDRBqmllrI9PieKDSnmdNbjJH4fM5R15tMW%2BcvU6M%2FnNht2Whh4SMIoQWzPJjWC%2FdbBtd72ECiPcutXN7%2FZaMpEp%2BE2KEutpqIY22Xa8U45Q1mxiov1NzNGAuGWTIWFT2By8yKXdnp6xBp2%2BW0%2Fl3uqvhxvM6Mlcqu6YXj6MGpgtevBNyrO%2B%2BeuFNoRaB%2Bya1l6TfefvOwJisWaioyC3iSmpj4hLJjYK2e%2FIZa%2F6CrasgEricV3MyUTDL1LHQ8Tej1PuOosHRR7MiHvSc5uRWNUqMkEtfqAdOKDDSpuNUBKVr45VQyLhIVyAd9OV5dP9oiU3SI%2BVCR0IQxMl9rSKMf84ZKunLe3EzhcrrBeenl7RoKCs%2F9NVS8RULGDMjprbaSrPhtr7kXl601KCTuI9HSsSOKCjvK1dDyl5r97dxnJR2yktW%2B6I9roKRFLVBiNxvIuGyDFDReM%2FbtLlPIHcEwxuoQ0hEVZsTFoRsNLGsjG%2FsaGt2Mxg%2B1Z3PihfwGIzAga%2Fcs4Qr3KKmpa6HItH%2F60%2Fqy3wDwVZWvtfgIheAjdcJcFKBpGM9sJahbMs5B7uM9kmdFcyyqrv2PSma1vnl%2FItArcCppjCV76%2FEBjqkAX5k%2BzyG1TWQDnG6o7FrsqjDmpOlwjihvxTekKdfVqv2xlPR6YxC2z1iM4ide6s2Rp2rrJzLI54nQHDuBQBCnhl5EzvrsHSSbOyLm1Dn1kbpyy%2Fw8UAoaNliq1m%2BblIab%2FvGdcXdIVZZ1EM0t6pehXdrODaAdqxHofoKN6WaViraFy%2F6HoW7EihXBxkowVvr4ltf5ar4Wv6bApRhuPsZq1HHjAUj&X-Amz-Signature=b42e8b9f31b039241b54938679cd27a3c8f952fd278f531da1edc3c4fb52e11d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OZTUW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzh4AY2wiKMqI4APYb8FejKKtbjrYbX%2BGs8tMvI2Nu4wIhANUZxJl4N9RtsLrJvlemFH0NW2p6tqP29Q1kQTUmVqtxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW%2BOko009iOr7aTmAq3ANBcGKspMo2KwT1hxYi2t1OaCw5v4tWDRBqmllrI9PieKDSnmdNbjJH4fM5R15tMW%2BcvU6M%2FnNht2Whh4SMIoQWzPJjWC%2FdbBtd72ECiPcutXN7%2FZaMpEp%2BE2KEutpqIY22Xa8U45Q1mxiov1NzNGAuGWTIWFT2By8yKXdnp6xBp2%2BW0%2Fl3uqvhxvM6Mlcqu6YXj6MGpgtevBNyrO%2B%2BeuFNoRaB%2Bya1l6TfefvOwJisWaioyC3iSmpj4hLJjYK2e%2FIZa%2F6CrasgEricV3MyUTDL1LHQ8Tej1PuOosHRR7MiHvSc5uRWNUqMkEtfqAdOKDDSpuNUBKVr45VQyLhIVyAd9OV5dP9oiU3SI%2BVCR0IQxMl9rSKMf84ZKunLe3EzhcrrBeenl7RoKCs%2F9NVS8RULGDMjprbaSrPhtr7kXl601KCTuI9HSsSOKCjvK1dDyl5r97dxnJR2yktW%2B6I9roKRFLVBiNxvIuGyDFDReM%2FbtLlPIHcEwxuoQ0hEVZsTFoRsNLGsjG%2FsaGt2Mxg%2B1Z3PihfwGIzAga%2Fcs4Qr3KKmpa6HItH%2F60%2Fqy3wDwVZWvtfgIheAjdcJcFKBpGM9sJahbMs5B7uM9kmdFcyyqrv2PSma1vnl%2FItArcCppjCV76%2FEBjqkAX5k%2BzyG1TWQDnG6o7FrsqjDmpOlwjihvxTekKdfVqv2xlPR6YxC2z1iM4ide6s2Rp2rrJzLI54nQHDuBQBCnhl5EzvrsHSSbOyLm1Dn1kbpyy%2Fw8UAoaNliq1m%2BblIab%2FvGdcXdIVZZ1EM0t6pehXdrODaAdqxHofoKN6WaViraFy%2F6HoW7EihXBxkowVvr4ltf5ar4Wv6bApRhuPsZq1HHjAUj&X-Amz-Signature=03c2504f0befbd64a54c6e8b22b57e1c87ed185fbf036d7f8498fbeb6ef0aa1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OZTUW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzh4AY2wiKMqI4APYb8FejKKtbjrYbX%2BGs8tMvI2Nu4wIhANUZxJl4N9RtsLrJvlemFH0NW2p6tqP29Q1kQTUmVqtxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW%2BOko009iOr7aTmAq3ANBcGKspMo2KwT1hxYi2t1OaCw5v4tWDRBqmllrI9PieKDSnmdNbjJH4fM5R15tMW%2BcvU6M%2FnNht2Whh4SMIoQWzPJjWC%2FdbBtd72ECiPcutXN7%2FZaMpEp%2BE2KEutpqIY22Xa8U45Q1mxiov1NzNGAuGWTIWFT2By8yKXdnp6xBp2%2BW0%2Fl3uqvhxvM6Mlcqu6YXj6MGpgtevBNyrO%2B%2BeuFNoRaB%2Bya1l6TfefvOwJisWaioyC3iSmpj4hLJjYK2e%2FIZa%2F6CrasgEricV3MyUTDL1LHQ8Tej1PuOosHRR7MiHvSc5uRWNUqMkEtfqAdOKDDSpuNUBKVr45VQyLhIVyAd9OV5dP9oiU3SI%2BVCR0IQxMl9rSKMf84ZKunLe3EzhcrrBeenl7RoKCs%2F9NVS8RULGDMjprbaSrPhtr7kXl601KCTuI9HSsSOKCjvK1dDyl5r97dxnJR2yktW%2B6I9roKRFLVBiNxvIuGyDFDReM%2FbtLlPIHcEwxuoQ0hEVZsTFoRsNLGsjG%2FsaGt2Mxg%2B1Z3PihfwGIzAga%2Fcs4Qr3KKmpa6HItH%2F60%2Fqy3wDwVZWvtfgIheAjdcJcFKBpGM9sJahbMs5B7uM9kmdFcyyqrv2PSma1vnl%2FItArcCppjCV76%2FEBjqkAX5k%2BzyG1TWQDnG6o7FrsqjDmpOlwjihvxTekKdfVqv2xlPR6YxC2z1iM4ide6s2Rp2rrJzLI54nQHDuBQBCnhl5EzvrsHSSbOyLm1Dn1kbpyy%2Fw8UAoaNliq1m%2BblIab%2FvGdcXdIVZZ1EM0t6pehXdrODaAdqxHofoKN6WaViraFy%2F6HoW7EihXBxkowVvr4ltf5ar4Wv6bApRhuPsZq1HHjAUj&X-Amz-Signature=2257aca420a2edd975e0b4209af0e872a75a418194839badd427d96e3566b34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OZTUW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzh4AY2wiKMqI4APYb8FejKKtbjrYbX%2BGs8tMvI2Nu4wIhANUZxJl4N9RtsLrJvlemFH0NW2p6tqP29Q1kQTUmVqtxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW%2BOko009iOr7aTmAq3ANBcGKspMo2KwT1hxYi2t1OaCw5v4tWDRBqmllrI9PieKDSnmdNbjJH4fM5R15tMW%2BcvU6M%2FnNht2Whh4SMIoQWzPJjWC%2FdbBtd72ECiPcutXN7%2FZaMpEp%2BE2KEutpqIY22Xa8U45Q1mxiov1NzNGAuGWTIWFT2By8yKXdnp6xBp2%2BW0%2Fl3uqvhxvM6Mlcqu6YXj6MGpgtevBNyrO%2B%2BeuFNoRaB%2Bya1l6TfefvOwJisWaioyC3iSmpj4hLJjYK2e%2FIZa%2F6CrasgEricV3MyUTDL1LHQ8Tej1PuOosHRR7MiHvSc5uRWNUqMkEtfqAdOKDDSpuNUBKVr45VQyLhIVyAd9OV5dP9oiU3SI%2BVCR0IQxMl9rSKMf84ZKunLe3EzhcrrBeenl7RoKCs%2F9NVS8RULGDMjprbaSrPhtr7kXl601KCTuI9HSsSOKCjvK1dDyl5r97dxnJR2yktW%2B6I9roKRFLVBiNxvIuGyDFDReM%2FbtLlPIHcEwxuoQ0hEVZsTFoRsNLGsjG%2FsaGt2Mxg%2B1Z3PihfwGIzAga%2Fcs4Qr3KKmpa6HItH%2F60%2Fqy3wDwVZWvtfgIheAjdcJcFKBpGM9sJahbMs5B7uM9kmdFcyyqrv2PSma1vnl%2FItArcCppjCV76%2FEBjqkAX5k%2BzyG1TWQDnG6o7FrsqjDmpOlwjihvxTekKdfVqv2xlPR6YxC2z1iM4ide6s2Rp2rrJzLI54nQHDuBQBCnhl5EzvrsHSSbOyLm1Dn1kbpyy%2Fw8UAoaNliq1m%2BblIab%2FvGdcXdIVZZ1EM0t6pehXdrODaAdqxHofoKN6WaViraFy%2F6HoW7EihXBxkowVvr4ltf5ar4Wv6bApRhuPsZq1HHjAUj&X-Amz-Signature=6ecd7b8e95819a0d9dc9dbab85824845663c2f1361e11fae38bec58cc233157b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OZTUW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzh4AY2wiKMqI4APYb8FejKKtbjrYbX%2BGs8tMvI2Nu4wIhANUZxJl4N9RtsLrJvlemFH0NW2p6tqP29Q1kQTUmVqtxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW%2BOko009iOr7aTmAq3ANBcGKspMo2KwT1hxYi2t1OaCw5v4tWDRBqmllrI9PieKDSnmdNbjJH4fM5R15tMW%2BcvU6M%2FnNht2Whh4SMIoQWzPJjWC%2FdbBtd72ECiPcutXN7%2FZaMpEp%2BE2KEutpqIY22Xa8U45Q1mxiov1NzNGAuGWTIWFT2By8yKXdnp6xBp2%2BW0%2Fl3uqvhxvM6Mlcqu6YXj6MGpgtevBNyrO%2B%2BeuFNoRaB%2Bya1l6TfefvOwJisWaioyC3iSmpj4hLJjYK2e%2FIZa%2F6CrasgEricV3MyUTDL1LHQ8Tej1PuOosHRR7MiHvSc5uRWNUqMkEtfqAdOKDDSpuNUBKVr45VQyLhIVyAd9OV5dP9oiU3SI%2BVCR0IQxMl9rSKMf84ZKunLe3EzhcrrBeenl7RoKCs%2F9NVS8RULGDMjprbaSrPhtr7kXl601KCTuI9HSsSOKCjvK1dDyl5r97dxnJR2yktW%2B6I9roKRFLVBiNxvIuGyDFDReM%2FbtLlPIHcEwxuoQ0hEVZsTFoRsNLGsjG%2FsaGt2Mxg%2B1Z3PihfwGIzAga%2Fcs4Qr3KKmpa6HItH%2F60%2Fqy3wDwVZWvtfgIheAjdcJcFKBpGM9sJahbMs5B7uM9kmdFcyyqrv2PSma1vnl%2FItArcCppjCV76%2FEBjqkAX5k%2BzyG1TWQDnG6o7FrsqjDmpOlwjihvxTekKdfVqv2xlPR6YxC2z1iM4ide6s2Rp2rrJzLI54nQHDuBQBCnhl5EzvrsHSSbOyLm1Dn1kbpyy%2Fw8UAoaNliq1m%2BblIab%2FvGdcXdIVZZ1EM0t6pehXdrODaAdqxHofoKN6WaViraFy%2F6HoW7EihXBxkowVvr4ltf5ar4Wv6bApRhuPsZq1HHjAUj&X-Amz-Signature=aabafa360389e57f154e013ba56144b351f61070f9656f3d2b267e8a6411a37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OZTUW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzh4AY2wiKMqI4APYb8FejKKtbjrYbX%2BGs8tMvI2Nu4wIhANUZxJl4N9RtsLrJvlemFH0NW2p6tqP29Q1kQTUmVqtxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW%2BOko009iOr7aTmAq3ANBcGKspMo2KwT1hxYi2t1OaCw5v4tWDRBqmllrI9PieKDSnmdNbjJH4fM5R15tMW%2BcvU6M%2FnNht2Whh4SMIoQWzPJjWC%2FdbBtd72ECiPcutXN7%2FZaMpEp%2BE2KEutpqIY22Xa8U45Q1mxiov1NzNGAuGWTIWFT2By8yKXdnp6xBp2%2BW0%2Fl3uqvhxvM6Mlcqu6YXj6MGpgtevBNyrO%2B%2BeuFNoRaB%2Bya1l6TfefvOwJisWaioyC3iSmpj4hLJjYK2e%2FIZa%2F6CrasgEricV3MyUTDL1LHQ8Tej1PuOosHRR7MiHvSc5uRWNUqMkEtfqAdOKDDSpuNUBKVr45VQyLhIVyAd9OV5dP9oiU3SI%2BVCR0IQxMl9rSKMf84ZKunLe3EzhcrrBeenl7RoKCs%2F9NVS8RULGDMjprbaSrPhtr7kXl601KCTuI9HSsSOKCjvK1dDyl5r97dxnJR2yktW%2B6I9roKRFLVBiNxvIuGyDFDReM%2FbtLlPIHcEwxuoQ0hEVZsTFoRsNLGsjG%2FsaGt2Mxg%2B1Z3PihfwGIzAga%2Fcs4Qr3KKmpa6HItH%2F60%2Fqy3wDwVZWvtfgIheAjdcJcFKBpGM9sJahbMs5B7uM9kmdFcyyqrv2PSma1vnl%2FItArcCppjCV76%2FEBjqkAX5k%2BzyG1TWQDnG6o7FrsqjDmpOlwjihvxTekKdfVqv2xlPR6YxC2z1iM4ide6s2Rp2rrJzLI54nQHDuBQBCnhl5EzvrsHSSbOyLm1Dn1kbpyy%2Fw8UAoaNliq1m%2BblIab%2FvGdcXdIVZZ1EM0t6pehXdrODaAdqxHofoKN6WaViraFy%2F6HoW7EihXBxkowVvr4ltf5ar4Wv6bApRhuPsZq1HHjAUj&X-Amz-Signature=1330353f4baf9c2c6dd3e0f3ccf96d89824a8ea23f33120c1b73f70375787b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OZTUW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzh4AY2wiKMqI4APYb8FejKKtbjrYbX%2BGs8tMvI2Nu4wIhANUZxJl4N9RtsLrJvlemFH0NW2p6tqP29Q1kQTUmVqtxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW%2BOko009iOr7aTmAq3ANBcGKspMo2KwT1hxYi2t1OaCw5v4tWDRBqmllrI9PieKDSnmdNbjJH4fM5R15tMW%2BcvU6M%2FnNht2Whh4SMIoQWzPJjWC%2FdbBtd72ECiPcutXN7%2FZaMpEp%2BE2KEutpqIY22Xa8U45Q1mxiov1NzNGAuGWTIWFT2By8yKXdnp6xBp2%2BW0%2Fl3uqvhxvM6Mlcqu6YXj6MGpgtevBNyrO%2B%2BeuFNoRaB%2Bya1l6TfefvOwJisWaioyC3iSmpj4hLJjYK2e%2FIZa%2F6CrasgEricV3MyUTDL1LHQ8Tej1PuOosHRR7MiHvSc5uRWNUqMkEtfqAdOKDDSpuNUBKVr45VQyLhIVyAd9OV5dP9oiU3SI%2BVCR0IQxMl9rSKMf84ZKunLe3EzhcrrBeenl7RoKCs%2F9NVS8RULGDMjprbaSrPhtr7kXl601KCTuI9HSsSOKCjvK1dDyl5r97dxnJR2yktW%2B6I9roKRFLVBiNxvIuGyDFDReM%2FbtLlPIHcEwxuoQ0hEVZsTFoRsNLGsjG%2FsaGt2Mxg%2B1Z3PihfwGIzAga%2Fcs4Qr3KKmpa6HItH%2F60%2Fqy3wDwVZWvtfgIheAjdcJcFKBpGM9sJahbMs5B7uM9kmdFcyyqrv2PSma1vnl%2FItArcCppjCV76%2FEBjqkAX5k%2BzyG1TWQDnG6o7FrsqjDmpOlwjihvxTekKdfVqv2xlPR6YxC2z1iM4ide6s2Rp2rrJzLI54nQHDuBQBCnhl5EzvrsHSSbOyLm1Dn1kbpyy%2Fw8UAoaNliq1m%2BblIab%2FvGdcXdIVZZ1EM0t6pehXdrODaAdqxHofoKN6WaViraFy%2F6HoW7EihXBxkowVvr4ltf5ar4Wv6bApRhuPsZq1HHjAUj&X-Amz-Signature=90d0d756582b1b7cf619a450077bacf3a1f0d0118ab8772a686732a9072aeb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
