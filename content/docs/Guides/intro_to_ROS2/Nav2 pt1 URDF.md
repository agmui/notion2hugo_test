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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=8d9e8250462095be502175af7d561fb0026692cdcd76405684bfe266d0aee640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=2e00cf086b9cd06b2ad9ff0a201d8e17085fd17f7c648f2f9ef650c5912c0435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=ab44543ee45ba3677c7e081fbffdcc43accc54010428b079838cbc54d5bd75c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=1913af4b9eefd6120a504c06a1290d5dd6f15517dbfc4e2b4946e2e80843d0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=885091bf0d38072e927c65ea7649623f3f93e70dc568dbd916a9a8ba11f16ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=bcf0d32f3c0ab6a9a9b8f68a5106679fe808e1f94e7ed64562d4c6bc99069a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=1b4bd0d12dcd4cff0af7af6d5d3b263a72b00c09b53dffb51019df93a2d90f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=7e02b2125edc22e8cb919512614c23589dd6ec4329ab3a2919b6b580272d5f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=04a1f05a7afa6f871228c17b55e0c753e27ed1ce9ed9e87c61b22818b80335e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=cb9b23191988b491342b9660fdbcf37f1076d7cccb34dc4b18f2eeae97213601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3ZMDP5A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLSx2vY0TuTDW4d22O4jpUtU%2FBrJiQ8hGbI0Rfz77fzwIhAPJ1ISXyOPq8GVQtDt5J0PmIvstPn4mJLHUQHqbUqVDXKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAuQQ37zoDoA6e2dEq3AMgb3PwSrw4FwBm3X08wjC6WtdWpdLUBCMrWEGfaQ5OqQxzq0zlaYzQB7bWBw9crnM6ql%2BH9Gvkv0%2B77t1G2Q1Kv6afYJ8%2BmWzr7yiyNo3ZceBatcrzM9hlLjUZ4qmCASuoq%2BYBBXPV1xtz%2BoaU4pXepHGZFCSRiQl29Oqn6uHpx71lZPyH2rFXEl5vkJUzVHGg6Q%2BcnMkKaTkFybZbqRoFm6MHQIE54aJZfFrlSDuyiUG0VI5n7tx5v%2FrtEwJUmW0B48IM1ZX348u%2BtPk2OzMsD4OR7JDPhFXlm4POacDqEl0QNbc2FVu0ok97uUQXVGJCRnCWwzFYna1vFgE0fErNcckuHowpaWz0O2i3TtV3qRUzrzdwQgjyEsqe77Tyw9HnKxNd%2B%2F6JeKslabb9gCkVINFbK2zNUdycRoUwiaBGRbleB%2F05xyb5huDAmy%2BuGahN4y2uANpoWSpoIcfOxkXRbEylWXXwdVv%2BPDhUsNsGBHccr%2BMuiYyMTgRoBhqvh4gidIzB1e3ziSHzYQvPhTCWwtRdBKH8WdeCF1QmoBJ1TtaIYQm7UMscpW16Cn6TyRzd0C5iLLNU6k1qyaTTSQprr0RoE0Gc75aQWBJ1kGANzQf9u6Glfdp0J2X8DzCTuuPEBjqkAXnXuHHtQ%2BVJVnRIi%2F9VmeCSRfbJv%2BJ2w24sDGLM5p0057%2FP75PfG1dKLiiTAShfodyZAV%2BywTYtSPUWXKZyXWxnocNDtfCD3ADwoa9u0NkAeu4Y8uoV%2BycAs0OhbGM1i6KJwDQfN95FeTgF%2FzluiUHNeVgh34Eea7AVYgNzHoS7shROyrp4nIEzzfom2HEcSyestE1PYkUskkI2awJJLb3AXNXO&X-Amz-Signature=9748239523ed031f178484bef8971528d9d1b62ca042345dde96da7aaaeed435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMH54YK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuZq0y%2BFlZRulzF586JuRq38Imb1tttODHbe5E7G5K%2BAIhAL%2BHePnATrhlqr57ApybMaUU8%2BXHMKOE9W4qidZCA9Q7KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2BUFEgRtYus5up3Qq3AOTahuB%2FRGAMikB3RdszjEnSPFCEeCMTDtxmRCTkwF4PsYIB3SnS4YMCzBPF9erYRxjXAEypk%2BhNvUyrFlqaGT5YKzxRFWgWnB3k4mQJfRdqtmquWQROINju%2FpqxozHtVEkGm2V8%2Fft4aGDMi4Vq4RRIsaSY9%2FQEk7%2BXCxbA6FEtAEDzBUwSgDVvqQltGP8qERPnayaTjhU2JknAVt%2Bt6yn7xvzxvGn9aSgd43x%2BuJB3yYxHME%2BwTeT6O64s3wsK2rCbrBBzwRH7bHmWCS3hTfzbrJ5ckd595odzuj4IYAlwmi%2BqsCb%2FUue8qsfNRysf26hEMdfUubHnz0L2nt9DnXZSjtJoKK1C9CSnrV7Ilugj2%2B%2BguzRXVI29xT0AxUPA0l0xJI1Lro04VyDtwWeLjIJOFh9trFTSq3UfM6aIgfhzO1Arh5EXXYpyFNeTzR2HYzK6jANp5YfdagkLNK0kEYDc2l%2BQXs1DJEPhJJ%2FgZ8DuH%2BcXc7x89sPKbUrEANyyjvCt3AKfzhTfzwB1I4Z409IK8jIHQS5z0O0gwzb4Sw2i%2B5VXsIXPYkjq3%2FxNHTyRO%2BwzJPI3yKxbPwBi5gVlnGpTy2eBMZ1xrdWuq%2FI98SEl0LL7%2BQ2olTPknwtqjCduuPEBjqkAfLJ4HU%2FD5mUcK%2FZhcJK%2BFG5ZQEI0Ue%2FYnMeE5nIAkboYY5d5vfN%2Bfpkcnk76CNKv1NLCZqZugxL3onecs2yTm5aLJpe3Q7cRwe%2BgAfnvpfvE2xHo5TUKVNPgkqqJX0cJ3Cng6Sry4p%2BXWzFtfMgW2%2FbFqsu4g%2FEjTT4f2OLFUpO%2FzPeylQw5LWOS5TEnQ0lwA6qKncToYVtTCW6DIzY5dcUKblx&X-Amz-Signature=6a7223751cbabba532c8e63386223e77f5841fbe27c245ee3e95bfc073d8cf83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCSEQNH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsA4JXzocTutHNE0Y1JynL1Fke3Qcy3XpOMylmI9ILlAiEArK2g2CKVPGElF9jD8MvrpSS6GndY1Ej4W4ESy5i%2FXGcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJa5altbwi%2BuleNeCrcA1ZNbD4WNIpAEkZ%2Fk23izRY0%2FTSxuNU7fMGcVfTcEdprFyqYfhZrBx3hb%2BmDW6bccgO4OAz7gnmKzbhe4vDf50BCGaYo0I8Od9sL6o3iZzQQat4Mq77Fo2IHbbkl2kwLYFyMmfD27Kozw37vIeTs7lrBRf4q%2Beyf7DOOueozotxkLR6wKFmzcPi8BDBRUVsm0BuVwLUjrVVSROeW%2BGwcptOxj%2F%2BAl1msonb0v1pSZZgC11wEfpydIoglPPfZXQqT%2FeY3BeYUByI9SFh4AON0Cz8IHZNgmDbFnLjwa2mPId8Fl35lHxMPOQVq5qhH%2BBPMB1No1XWbdIGG7jj9DOszZiBWeaAypOd46mVDeuU7WOE7B5KIhUMsJgGHaH8PPkIHIqnbPyyhhGqyUzq4DPEvsVEVtmXmFABd26A2Wk5lkp3vbYkYHF%2BXGWUaBr615OmATgdVjO7OBJRpE3zAxOcYNpxC6wH5kCEZ4Qht08o%2B1Irw9pM7%2BN3zMfZ%2F75c0fi6chuendwA%2BkVWHadtHfbccuncwiw7lsqcP0yLNYj7a5zBKkNOSlXA81%2FBv%2BK04TP3jbn%2BlqwrV3CtnPg%2BstUbdpYjeVQB1F2rUMRGiMS%2BE6qzTT3rwdMNIHYaTgYvCML2648QGOqUBlp2EqpphUVv0ABi%2F5O4zHXpNq40Up4OUxuQU8UFq8bihvnLKPZnFXrrRI%2FhgN2R52isw16xKH%2Bi6cmDxiY6QLeZEH2%2FUL%2BtNNaAOMJPKgDnvnsBFjILo2XUAeF3lEMtIRIjmXA6vWuuwUMF4Gmbu5hXdqEDT6Zh2XbFcTl%2BAz0QF91tUHMzAeqybPE%2BcPcWA6ehOkzsnmgakg7iGfV5CvmMvsNpu&X-Amz-Signature=fa1aab6149928f87abc57ff8a4f00d3dea650cb9dcedf9cfdd2bd567507b1e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=ddb97ad335d2a67a851e7b5bf4e05296014379afe06219ff21aa5acce59551df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KT7UXDA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1o8DaGIuDqJyv%2BoPo4EBr%2FnjzQc2z7sCGx5QwySVFBwIhALYbB6zkUVzYHDqHmSiP8j296JnoVEc52y%2F79YdOGRZ9KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzDo8ohd%2FMDypCnsoq3AN%2FdICcIapbGeUUh8dZNnuttGakAVF%2BNRhyYX2aGzfwGIQM4M%2B23BM3XBFFa%2FF7p0HtsZYHy%2Bbj%2BpP%2BZ0qAM4jdGpFSWXB6%2FdZY4Y6F8xCQKwj0W2t0NoX6iaRBBmH8EJbeyHskQHkZ4x9g7P2oyf%2BBFqkMxSKHmvP%2F97KPaHjlrr9rcbfONRDdDp4jQpVVndS4g6roKs3M4%2FoESSLPdVdKwM2PgW8YSwk%2BMsI%2FQI50pAjSoSeHu72C8pfiPuZn8O1aoW35SwSFe3FAOYKTU6AUn6eTkz5yGtaYMb3aN5ZYJSMBu38OeeDxwcfzFZX6A9v5VkywISi5nMcgCddg1oJnhibQvfk%2FL%2B9fFrluEsoulAxDz86m9UoCh%2FSZstHwhK0PxuxTq0gIRV4TpWcpEWO51m9fWb5hWtkTwtFbtkSfur2xGcSq4m%2Fn8CCcqUOcQeTSab%2FU0aqYC%2FiJKTbyKlAQhVI8Q5kVtsz%2BGvndM5UcdVZRegm2xeQknq3kdjI%2FCKn6kc29Hlsn782DoW09QVCyjeUJZE2rR9A34Th9pTjODnG%2FCUuSFITgMKNn1EXgd7VEdARAzmXji8TNlKBnKpItFQNSBSstj6gooJa7uYYKdQBmTUPGUx7kOSf4SDC8uuPEBjqkAbX0FRmOF4I7tNnoh7pXmdaUzAyWud8Xa28yzlnsPVuMqKMAh7PTM2onYhG%2B4Cembpaf9KZXP3yBix7e9yD8ULh3MDnqZZ7XRT33EFBUFh8bGysamTzVrBho23slSr%2BREB4WHns2hOhECOT4tCRUE%2FRD%2B7END%2FO0KNXXozW3ceSo%2Bj60Rf%2FplpVEG2dS4JfaRXxIoPUaZYIAJKzE26ZPnfv6q%2Bv%2B&X-Amz-Signature=c9fbb97446ea195bec82af6a7d17ebc9aa3ea016cbc73f03af7c5f2b5124a87c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=d39fd3a7bdd846f8b5ba5a6dcc4b519668f674cb46af570b13efdebfaed69283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOETRIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwdlg8RN%2F1l%2Bqz0Wz%2FH4VfyWxR9MvJ7K8j0BKWRHG8JAiAVL9574OsD8MIRV8IenvCHua5RWFpU8XM1h2QVPWhSsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2BNwOPelpFJfbZXEKtwDN0dfl77pGACwPWXn2Ug763haIP6WqShAQF5iRX6bVtBJ8G6JzY1dFH0Fa0hvQsYmUk31BtyccZnk2UkO3kRCAWooW8Mli%2BfajjptakzdOqEzQtcpJ0GV%2F7mPR1Sq05CGJ2IMwBGDQfyxY5okUHRf%2BFMpyBXAUxDfsuRU0hfxNKelKUq4pdra7NZP4%2F1qTNnT4AkQzUcwu7vkOMDjd1%2Bn7nVfBrJAEfCNmKwFSp8rWCACVML72uiz7K8fGWvrWdB1Oc%2B4wTZkTXzjtzmy4TuAoKjXoJORLQUqr9yPBrhfn6lHV1FKpIKNMPT6k8Zq1yN6yxslTc2bLuO%2BuoiOUKLG31Sggx1QxKloot%2BanNdfnMc%2BOY06mM0ekMyf9C%2FVRGIgwMn7hV0jQy34g029C5%2BJUwUNHsHte7rQpES0fWsT6%2Bd1x1h%2BzwEdfPnpTu9M4DYwAUjM5%2FCUPlEtM1ZdFXZi1wsb%2FlLTU5hmXT1K0QnFfjfMetrRk7sLR126XdTqf%2FMYDtAnnowmTNdqeDkZqkGfV804jrJ7xGKLiVGZrBkARIiT80gDg9pVMXnGThw%2B1nhrWG%2FO5y8TcRogworveaOMWLDgLzAqeNfxTTuBQVzcvCZMCvVcGkGIN81fVjww1LrjxAY6pgGhDsxpJu7TJHymMTskZLAg8wTBv%2F6Odao40TZhL5H%2BYDswwewwAVmdeNNmlLEHDEcZNAKQzjOGaNmiJPrR3gczxiTw0%2F8H303EPddrvKGbE0R06uvFPiHMawWc1WspZpshRSxTRNaxX76zt2FUeGUIhm2AkbcNN4nhF0Ci29alls%2B6%2BV%2B1HdL0N17y3l0mEtOw72xtxxQyiwORAuTd5iegMXfxbt8W&X-Amz-Signature=40aeca5b2eeed77320c1432e0e53694c2d957428d0b38c726e0acc4ee540330c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=3d2c01f46cad523007314441952dd2cc7434b319731db319d3d2ef2b3959c344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBKAVA7C%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpSkPkqdy%2BVcotL8bpJaga9NUAhXhJfhdhx8BfDrd6DwIhAL0DHpDhUP%2B4FTXi%2BQuvOa0lp%2BE4Q0koDEAHMQpGIjn6KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE2w56DlwPvl1L6n8q3APT0HX1B8cpw0RpaVWJvPciQpAToeKeVAXSFyws8fdaszv9j0Y0BlYXJg0OIif8BHkxtWJAGHBTUZ11wVb%2BHQbkusB9gcPABd2wOKM8AqHb9vejAKHTB1irPMtsEGg3yQgItGuFevps%2Bv2DPeHmVvjeJuMCSVskQCq1jmsg1oN1Ruvu7m96BY39hMr4e11F46V1WWyqIzTsxj6zGIl7xi7UEnQYgtMKEhjVzAfwLHTzp%2FtbtX6NnLbqVxrpyAkYsM5ZKoEziLX8S1qUW5VhvdijTz7UQkJu3PyexwfG0l2Fsi1iPf00as%2Fg%2B0KcZXc7xT4U060wOPipa%2BjJvcTEije%2FhGPEYcmm7j80xv01VdQI3hDXLqpbYb%2FszQtgOq5T6POVd2CSazcgcDToWtcJIntpbqPAav0b0XTotJnd%2F57VmjpvDXAEPnaiRpyCKqwWiKTuV8V24ljGmaWmj5HzbUxelYl9lPGndaOglgL7W3BBBF9XG6pMN%2FZik2GjynV13NpCek%2FHKAJ5wjS%2BH7tarvcaidhtv22ggHmy8W7UalHc8CSrd%2BZMG2kHM9RWKpT2XTXdXa4TvRjG9SajRzw3ZlmYbGvKcyNBoNV2yKKYOYycqvIyJT8djLYq2yE1GTCduuPEBjqkAToAUkEzG9u9vj%2B77a4jRU7loISlk9VyRpKbeKtJ%2BviWQluMEsZ2%2FW2O%2BHi9TOGH%2BQnnd%2F7FHVhnthkauEDnIPn6VOdx5hrfoW6K6F3mEqXzB2jEqj2lgMWpW0rK7GUaurkbDf9OQzsl01gRyGrAMph3q5OA4mrAQTOFKWKA%2BPWOOo5AB%2BKdwlNJ2ww1hgcXjGkecb9pR27XA7y7e41P8v%2BxaDdk&X-Amz-Signature=c94f0b5c718daa890c036949d1ab329f6502e77fdf5d0b8864a79bf150a1449d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=9b2cfc20538eca8367b2a5a982b8b30a9e8be8b14ed6a900986ba3039e43a450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7C3NJG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdnXydIMc569WRzzPpe8FwzPe0nIAnwnzB%2FdUSb4huTgIhAN7%2FvFelIGV2NpihWQUbDAZy0NES4biuHPCGECYRreHrKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4codWoRFXgx9tEQIq3AMVOf2u68T2FnLFXeo24IFPJ1QdYeRhDPrCuY0OY0tKpGAlk2aOvzFPAuXghMHei4Z9VqKV3ZL1xH8EPUCzxXeNypJsubdMn66eAjSAKcwvmx9RyqnBa69e25MEiG2ptYvl7nO%2BROyqnpj8kJtowr3PNCqW%2FQxfHdsyRJDLfHaAAFEhx%2FY4lKNS7QgjnDLiDitocXDEj%2BxrExgJK%2FsyYfZf68FX0N9RvZSRiGi%2B0ndoSd0QUWb9Xy1lFTPsdfbeWi36kYFowGIpDQz56YQsSgAohxGlTcamx8YtvaEgXlcqJFM3Qhc3W16%2BY0Gmp4lJRfdDIYHYBkGxARm9i0uHLhzLDfzCMwlrh5RAoojHBgPj4u17cYJBnr3EYcWVZUM%2F%2BdwF4KN7ZpL9MFCN5fFK5L38mDkCTLsmPtlBTb8wsQ2jjsaRAwyHlEOZiYQkOjY3WXdKemmUtYNpTAz%2Fm94CdtqpQWROmIngKVFor95Jj%2BUmCNlJ6mVKcQ74uFTPDWwX5qgtmZEf%2FSIB2Cz0xmNC4Iw7hrppMCEeugt%2BATqFyOp5sRkWQjo9ZXHxsDEYnIMBLrfCADwp1G%2FLhhyT3tf4EGYTwvWGsrSZE2RM3RDmxrsfvTtNf4AgseEwJ7IZ8jC7uuPEBjqkARIwu5O32StX3yPb6ev4k%2FxdCukMiyfzIuzz6CjADRjAQYRnlWnWr92gAwMx2xBJ314IH4Mqoc57r9NY%2FXxaeskMuIFrbO8q53LrMK9Q6jGBpc1s507jjG%2BOO%2BUpiXcrA69SX7BNbGPj5Ag4U42vheRbt%2BgDzAIhNDJX%2BJ41m54jNBPDNOGqfcXqem3xT%2FhWc5JakU5wc3PakAJw85oqA7XAD5Wi&X-Amz-Signature=726f9958ca6f67df07d4aabd4573dd89e9793dd65dac5249c1c64d850d972395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX45JC35%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Bnf03bUBwtd4VYFdR83l5%2FuMQH96BGr062sxWKKLh9AiEAr0zDd0paPxnUY4Zp9mP3TaGtGh3YxVBjRyaG0DBb6noqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdxoq%2BE2iaikZCcaircA%2Fpx9ZqRhL6F%2BIEwfgIlzNWMUJFTSBkfY4iBVhXEIBr%2F2RYZYOvHfP1CHYoSzWgXI1yefkQKvc0yDxbqHYMrJJ0w08qZH2aldCYLJwmT0AGF0Bh5E3PchqF1D1gbfKOpGYzh36P4cyY1WdTRTsUaOTutUxC0IiBcStzcbSKKzZAGyf596Wk%2B6z17K22AJfKjvN%2BbXKjNWQMEXSsUpOvIyaBt3RrFyhz462pG%2Bu1rUh7arCAfrn1B2JQo7VKdlIxiWfhWG9EhU5A1hSfJsuQk0nSIhh6Z8Y2WbsiZus0coXUiKcH7SEFPpGs5kqgfdLfELOYvEfv1oqfqGsD6np5mw0O54tCpLd%2F0axmEPG3zoSdxWpQSQ%2B41EFa1z4vrb7oE98GcJohTm6KAb2mOajwVtmoWmzhIKCR%2F6wgmimGzDIg07tkahXpCtCOBVVCNGe00BWrQJdQZfbq3Ji3Uu4PS9Bu2czEWRi5rZMpxFBwZW2o0YyolBSpCWQJLxzNRd9WDukkuv6DCMXXZnTLGr7B02g%2BnmYTKopGf3mHQ1pgR7X0xqd1dHAtgQegYzBF%2BnIUISyTSK9OVcpYnuHzb41QG1xz9P1nrXRbPQg%2Bszfhl2WBmkTXE2DabMOnbLZA3MOO648QGOqUBKyMPes7X4rGspPwdNFtMtIH6EHsgmN7E%2BvCLd35ojrxStrrGB6KSP6S9RTdpeEvMYgMpLHhEaHPtyhGsgB6rKwzgMZS2QRDBA25mlmimAKpw6KbWdHTZAiiG%2F6nWAfQ%2FxvwaMOXhT2Z6mHfXHSxY0bREuYgUuph1WUIou9kOM5IGb%2B1xXn6APinK8foqmtiO9Q%2FkEZ%2FUsMTlesDsHVULWL8IFb7M&X-Amz-Signature=0cb83127cb84410fbf6ccec59a52751436b196dedfea1d9b56238d4820ab38d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFTT2K5Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIMFXBtAg%2BtOq5ma4cKftXlA2N9MgYppnuCM%2FmkuwnoAiEAq%2FsgvnJHa8SUpRpyQ51xZNFKCHEXeCam%2BcMcMA01QJ4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPaRvBpxxuJNtWI%2FDyrcA%2FtVnZuXk5BVp3hEWKc8TNVjver1phUmlz0q7YzgbnaABNICbY0QOSudl6gAi2QQlQlP7MgrI6AQ2M0ksuUEpB05iWBjiYgYUeZIRc80oOnNx6Woim94aOD7Joadt%2BFr5HX1LhRJ48%2BUIwlnaEM2bqZOI1qW6r2O0bLvvV4GxVwk1AVCJaRYH0JB1CHwfqCj7qkagVkXhLfGaLN3NwCfoOOv8DPqMhk7knA4%2BM1niDC0Eep07Lurbvf3n%2BVcevSNP1mGyKF6OyHmhbRJ1I8aaXU3i8HCk0peVkSPSWm7an0wAs2LqxlOBnQtULjdNgk%2B2FjuG1CJ4i8aB7bIieg8ui3iZhDmUIi6s%2FXslkok3dpEDEtL2IGwLU8TAPX6Qt5XftsxEAnBzYVU69jILBFUKokf4uIy9a1rfE8INFi4BPEbIVIq6X3KibVpcjOVOfWUnAZPokdy8z97xNrZkSZeH70LyWwNKNUtEP4vUf9lsWkdqPwag0MZG89buXNZOcWOvI386H54t%2Bfhe9KJPpaXHocDDT6H5wNHF6dsq1hveltHAxAdlMQlvws4Jl5i83Qt6APfGUoHLrZEdS5R2%2FCPlJDiEGlEfMX%2F5lM%2BtOTOmQGPLUUhSJfXGMjKXjoBMJ6648QGOqUBll7ACBxzx8fRU2x%2FHElEbWF9vl8lRJ4MCCPQ%2FlosCPnh0RQLJQRIgxkg6CVLVGQNHRNWWQvvSK%2Fz5SycmntM4ZcfL%2FYZ3Y8Ho8UHIJeb1TsCnvVb4sEDj%2BVAgOFl3s2kuIrlAkPAkbtzePuYH1xlPVc3WY8z2odug4Otn87AeYE%2FVtC6RvwqpEYOg1hFgEJLNPc%2B2Yb8DcBLI0%2FiuSefOQQMrXK0&X-Amz-Signature=cd41564798215f7d5d08cf598e6ab0ca07e20b384f66758aebf220a2e7504013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHIQHTUF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYbQfqyfuoxDRTLkYLE46fteajVefyEOaXy4epGN4wcQIgKbSSqkRE4VJkQWy1hN2bPB%2BtYhH%2B9INI5WaEIKGC4rwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK11tLS5JIkTOx0i3ircA5MjpWzBHb95sMz4YPoAhs%2FYseWTVMkQaUe7OxCEe6kLCLmmJ1wt1LLh8kw8cqdxxLWPjiY5GkMe20NyXb0v0J88MA7uVhRUbH%2FWBOQHEF0Xx%2BXEypbsCIWOVL%2BwchDqqn4t%2BGaMIiJn16%2BLW%2BGVQ6GnNoKftXsWFE2nBEnpKthiC6%2FciAsf2vvbWhd4sCZzX4V7J%2BARwM0klRCCUR6T%2FI6PEPlW%2FHoGfQ032tVHx4qjMG2lswZKDYQYsA%2Fl5sJDrtN6Rxc3mYsouOuTLK9ktEg9Cj8wISh1fP7auh%2BHk6cukJrdf353U%2F50jOt1TaRlB%2BiSD6yfavE%2BczJTAemX75nJxBcHTQaUV1xtHAxfYbi70ctW3ZcG4FA2Moev98OmhtE8hnJlZma9I6Nj%2FQPxcusBZ2kWCi0XzisiFDBJek7cq6di8W1AL6ePS2XkJEJWKvruwJyUGpDRUZ1tKzfLa3vZiIR25BDMp8Bsg43Gq6xyt9Rsmty%2F%2Fo7Q2IUuIcFr%2BSW64WkbmSAXxCBnm9BkEdO%2FSa%2BdDXUilGnXJG%2BagXEVec%2FGsG4d8R0dz3MIDUeu2PM4VHPLawdH0Zo8u8zXG6HOfiY%2BWwern4Hv2suCHGkN%2FwSWSDRWnRPn2FepMMS648QGOqUBanooV2Lb6YcUtDLTrFFvU5M7f4lsIPUotdkKhoVK6SR5YwBF6iFLvXlWl0y%2FFZ5zeKyafgIDTGvpXAyDGMPlY8m3iYrgkZYRbLjwHlVHMFVw%2FiT9onskjEtaxmp8fpU%2FOdjt5xY1UXEa85s7zqcsslkcVdqZOxA9PYcGhWvU7rthZ9g1UVKy8DHwWuMafDGZ%2F2dsslsk1eUAtsMMtfDFaQoqpPyp&X-Amz-Signature=1b452cccb874edbb3a78f9d0de64a243fae8954f5ac130e43216af17b771a53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWZBYWT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdjENYilcCAdKHvt1rrQ5ccYB60Tb%2Ba0T7rPRbc18kbAiEAhaSdSzI%2Fx0PWScPgjCuUDUDK7BQDhQ0K4hUmMZSDXt0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjyvRKJNCH52oaQLircA6cX5%2F0N%2FAKG6uPiGhuG22OqvW6m4aHOHNRFVEqtyHX9x11Ks2zvIt23pE82tRvhEYO%2F%2F55K2uh7CWE8rg17gJk0OjiKMJY9p8RTa9yaADDBsrFK63B%2BYS9hAW37gPxHiu%2Fr%2BvO9dbIIK2c%2Fv2%2FfM%2FKhQeJt7a42Oj%2BV8zAY5DoXAjksazwV6w25a2RmPy3MuhGmYHa1hIlC9Z%2FIQyGP3xwqNBzNQjt3l40VgnS68IxsUYmhTb5x7ksU5LvRQpL0yR%2BXGqkDmuFeh8rhPiF1d4nXTtACt1h15LQN0TSzBDMiufvXIuhS9%2BjTm7l4itK1qwhQVGLj3ZcPxmhFVXdiU%2BWveMpPsMa%2FaXnT3%2FdeURdx8TG%2FkV3onyVniK6qqPdf%2FkFGBTH%2Fn3Dy3QKMshnGjeEE1qG8%2FHvZG2B08TzJpy3El3JuM4PE9DGc%2FZV5xvQmHjG6ceCrkDcLkreQWKEJLTVWQs3b17t1kvd1I9IMfZJGAkSJxmdBGGjy6tKnIL3atlLfv4i%2BG83TQjpM0WnGsNec%2FGjoQM0OpKQW%2BLmDqlUn59H%2BmWeD%2Fn4QJbOs766G78hpvkXUNmZuloDN8ZDWjqOpEbhyNQaY%2FgLilRTI8y7fn31qwldBJDUOheGFMJK648QGOqUBm5yqJ7%2Fkzv0R%2F0E8X%2FW%2Bz1arNuluSorTb0E5hJiAJX9nX5pHeCRN3S8onofTTHe6m6Frd15QJ4qwTs6A4hNkUIg9nzxgrGYy78uNH%2F%2FHPiwdvZzApwTxHgJJI98WZwbRS7JmncbRDwenmPBQFscbweWF1JQdGlrzAK7in0dZXfoAch8vq1lmzaHdmqeiwxyR16W9M2T687Cy75zQGuyszfkn6Fl0&X-Amz-Signature=e789961b4619cd3ac073a68d14efd6243bb90d5cd2d6d81818fa3b5da72c8f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=c1ff48dcbd3113d941e9d137ca739798cc96c118e23f79755dba22ec9ec576d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MALIIL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKa6Q91YgiQ8fbRdHmsp8ehNN07esqiOqxC2Fd1Q7D2AIhAKh5J%2FmlNvOe0cEA0YU5cwBmkv%2Bj4ktR8YFO4xOxDIohKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyItkB8N70%2BeKrPRtQq3AOZqi8tzyI6K%2BT5CwbsysQeYUCjiCjKlkdwlWJuQ4lbd9%2FSrK7xXB8E7xyq2DmuNJu%2F3D4upXKU2nHx8TOB8mJLgq1Rcn0C9gM1CJXrd2aIa3%2Fto4MY3dlO0Ox2e8WNuwb3rq3D%2F9NrNhT4fb3az2Aco8DgVFqqZXvz8fC7bPC0zQtptWvIwrAsyES%2FwsVSMOM0Z0MRwEEs6GtBVgKGk3FT%2BAmeh6sm0NMBDI7yTrQnVW9ckwQpU0fDh0X07guWTM3Q5nze4BW3tvHhfOVBfCHS%2Bqs%2FbDxXtCfdLbxGP73VoXMH2vdF5MLJlnghQoFi9q68G4abuErqwIIxUxmwubRNDdePxhh0RenEVtiRSOpz6DF95H6du4BUUTRsg5vLVCW49rxdoJmD%2F65jmr9QbeYhNFLuzzukB1BAVBP75FZNFrp%2Bp6JgAAA82rvdrnEipzEMTnA%2FuK72SM8YwmPR7Bdba37S9d%2Buoyc%2BASFluyWyv3JV%2Bsqttt%2FExKy2Jkq7dGv8XXeBD70NinWwQ7R4wEMmmzyUwB7PH%2BCZth3w%2Bdc8hfX3Ja%2FmuzAcbV2qxQbEzyk8XiE6kfeqwx4y7gvdjwNHik4efH32O7KK%2Bao1wro1P6QghX0wAgJz%2B0YKWzCzuuPEBjqkAQH%2BSrCO806PPPind%2BpPqtrHR7UKiJjzXc4e128WI8VWTdIAbXqNBuR%2BYI9fkG4WVjEymGYOVb5%2FWHDDp24QlNCmtCgHeH%2FpB%2BAH%2BGMW5XaNOasmieKzCGie9CuYfS80MUP3BuOfDcH0B%2Br2xGNifTlMqwKK8S4pNSI7R9wF0hl%2B9C0uDgaAm2778XZoUl2l7EaKlJ87LxB%2FisRq0C68bu4DSzCw&X-Amz-Signature=277d397f19be52464ff37deb433e08d8b1f37c3cffb40594baec357e0e0d33bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUECJMT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi2PTzfU7G8stf7%2FYH%2FSN3tGAdVqQwPgHE9KOUMMblyAiEAntIuHmTX1KRshl1nJ06%2FHU512ClT%2B87Wa0Nd%2FAkdcJcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv%2F36%2FNN4yUSLRpIyrcA4pMlnGA93nyW7Dh5k5MlFacZCoBOvt6X3fT3%2FnRrphKSA4NeHW4A8%2Fgkakku4QpMPpsxl%2FLlDocODF6jzoNIaieSf94Y9ZxSU3BrO8TN4ke0tsVLehSWfBb8S1NzhOlDLVqNvEO7A2dq0wwQ9rQ7hY%2F7AVIeMfBpNiAnN1gSnhkpoj30ECLs4%2F2pL%2BBt0sbUY8XwhpnEykPXw9BgUecVSplZr7xedKTDIDk4c%2F%2B6ezODf1WXisgFLKT4GybPNReAKfq5UeJKByqBpSpCGV1Y0fAskNJS1aVx15TZNjT3ZRmc5jHNkyPnVkZIzirMgLe%2Brq%2BE2TnkuljKc0%2B3S2mqUoRReYvyzfCwkR6Rd0%2BSfj9njGQRg73Kr%2BfBGdnX1Vl%2Fnq6O8N6K%2Bp6hi3Dg0IInC8YZszFtxEbPHjTpKKyQwReK6Ln1rT44wt%2FHxcG%2BDY8f1DNy9WuYfvJ%2FhKICkIcR30W1ku86G1%2F%2FVjXLo1mGf3%2FgJ2Ez60W2g6l4V9djHjl4F%2Fzpnk8tRP3daiDzRW0p4WPmZI2CI%2FYPhyl6Ak0xc7IpdBGZLb3Tk1Vjtf0BdxnDBX6Wg0dYj3o8lOx9gDn6zylYUCC3dT9APv5iLXE7xxylKtLiIxRbWgroAqAMKC648QGOqUBG39aKkNFSAKhWlv3jR9kqTNjuJy3X8WkksM7GlhaZB4BP9mZoBrT8Nom0BD7QKquUbL38v6sCLKf%2BeuhdP18QQn5k%2FRuCGwgamCbeJmMzeto9TVNH6DSvU4fSf7ZFK90HRl%2FuG%2BGixeBCb4HYhO9cvtwfiaBdhjhr0tM2ELyXswzWtgpo8GADZhi83Hs2ZmFkdoM7tSMNci5O%2FUJ5ioA87Z0N98p&X-Amz-Signature=d9adb2d3b4299ba05247694fb7d4318ca43d509c248fdfdad58d17b09b63d512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUECJMT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi2PTzfU7G8stf7%2FYH%2FSN3tGAdVqQwPgHE9KOUMMblyAiEAntIuHmTX1KRshl1nJ06%2FHU512ClT%2B87Wa0Nd%2FAkdcJcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv%2F36%2FNN4yUSLRpIyrcA4pMlnGA93nyW7Dh5k5MlFacZCoBOvt6X3fT3%2FnRrphKSA4NeHW4A8%2Fgkakku4QpMPpsxl%2FLlDocODF6jzoNIaieSf94Y9ZxSU3BrO8TN4ke0tsVLehSWfBb8S1NzhOlDLVqNvEO7A2dq0wwQ9rQ7hY%2F7AVIeMfBpNiAnN1gSnhkpoj30ECLs4%2F2pL%2BBt0sbUY8XwhpnEykPXw9BgUecVSplZr7xedKTDIDk4c%2F%2B6ezODf1WXisgFLKT4GybPNReAKfq5UeJKByqBpSpCGV1Y0fAskNJS1aVx15TZNjT3ZRmc5jHNkyPnVkZIzirMgLe%2Brq%2BE2TnkuljKc0%2B3S2mqUoRReYvyzfCwkR6Rd0%2BSfj9njGQRg73Kr%2BfBGdnX1Vl%2Fnq6O8N6K%2Bp6hi3Dg0IInC8YZszFtxEbPHjTpKKyQwReK6Ln1rT44wt%2FHxcG%2BDY8f1DNy9WuYfvJ%2FhKICkIcR30W1ku86G1%2F%2FVjXLo1mGf3%2FgJ2Ez60W2g6l4V9djHjl4F%2Fzpnk8tRP3daiDzRW0p4WPmZI2CI%2FYPhyl6Ak0xc7IpdBGZLb3Tk1Vjtf0BdxnDBX6Wg0dYj3o8lOx9gDn6zylYUCC3dT9APv5iLXE7xxylKtLiIxRbWgroAqAMKC648QGOqUBG39aKkNFSAKhWlv3jR9kqTNjuJy3X8WkksM7GlhaZB4BP9mZoBrT8Nom0BD7QKquUbL38v6sCLKf%2BeuhdP18QQn5k%2FRuCGwgamCbeJmMzeto9TVNH6DSvU4fSf7ZFK90HRl%2FuG%2BGixeBCb4HYhO9cvtwfiaBdhjhr0tM2ELyXswzWtgpo8GADZhi83Hs2ZmFkdoM7tSMNci5O%2FUJ5ioA87Z0N98p&X-Amz-Signature=596004968f79521c68ab00d5c790c59b7cca6236d7a940ddcfd3e59fd86ff266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUECJMT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi2PTzfU7G8stf7%2FYH%2FSN3tGAdVqQwPgHE9KOUMMblyAiEAntIuHmTX1KRshl1nJ06%2FHU512ClT%2B87Wa0Nd%2FAkdcJcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv%2F36%2FNN4yUSLRpIyrcA4pMlnGA93nyW7Dh5k5MlFacZCoBOvt6X3fT3%2FnRrphKSA4NeHW4A8%2Fgkakku4QpMPpsxl%2FLlDocODF6jzoNIaieSf94Y9ZxSU3BrO8TN4ke0tsVLehSWfBb8S1NzhOlDLVqNvEO7A2dq0wwQ9rQ7hY%2F7AVIeMfBpNiAnN1gSnhkpoj30ECLs4%2F2pL%2BBt0sbUY8XwhpnEykPXw9BgUecVSplZr7xedKTDIDk4c%2F%2B6ezODf1WXisgFLKT4GybPNReAKfq5UeJKByqBpSpCGV1Y0fAskNJS1aVx15TZNjT3ZRmc5jHNkyPnVkZIzirMgLe%2Brq%2BE2TnkuljKc0%2B3S2mqUoRReYvyzfCwkR6Rd0%2BSfj9njGQRg73Kr%2BfBGdnX1Vl%2Fnq6O8N6K%2Bp6hi3Dg0IInC8YZszFtxEbPHjTpKKyQwReK6Ln1rT44wt%2FHxcG%2BDY8f1DNy9WuYfvJ%2FhKICkIcR30W1ku86G1%2F%2FVjXLo1mGf3%2FgJ2Ez60W2g6l4V9djHjl4F%2Fzpnk8tRP3daiDzRW0p4WPmZI2CI%2FYPhyl6Ak0xc7IpdBGZLb3Tk1Vjtf0BdxnDBX6Wg0dYj3o8lOx9gDn6zylYUCC3dT9APv5iLXE7xxylKtLiIxRbWgroAqAMKC648QGOqUBG39aKkNFSAKhWlv3jR9kqTNjuJy3X8WkksM7GlhaZB4BP9mZoBrT8Nom0BD7QKquUbL38v6sCLKf%2BeuhdP18QQn5k%2FRuCGwgamCbeJmMzeto9TVNH6DSvU4fSf7ZFK90HRl%2FuG%2BGixeBCb4HYhO9cvtwfiaBdhjhr0tM2ELyXswzWtgpo8GADZhi83Hs2ZmFkdoM7tSMNci5O%2FUJ5ioA87Z0N98p&X-Amz-Signature=9e0d1dd938d322b701379d8b71933acba7c4c6da3153fc8ae6295849fd7816a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUECJMT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi2PTzfU7G8stf7%2FYH%2FSN3tGAdVqQwPgHE9KOUMMblyAiEAntIuHmTX1KRshl1nJ06%2FHU512ClT%2B87Wa0Nd%2FAkdcJcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv%2F36%2FNN4yUSLRpIyrcA4pMlnGA93nyW7Dh5k5MlFacZCoBOvt6X3fT3%2FnRrphKSA4NeHW4A8%2Fgkakku4QpMPpsxl%2FLlDocODF6jzoNIaieSf94Y9ZxSU3BrO8TN4ke0tsVLehSWfBb8S1NzhOlDLVqNvEO7A2dq0wwQ9rQ7hY%2F7AVIeMfBpNiAnN1gSnhkpoj30ECLs4%2F2pL%2BBt0sbUY8XwhpnEykPXw9BgUecVSplZr7xedKTDIDk4c%2F%2B6ezODf1WXisgFLKT4GybPNReAKfq5UeJKByqBpSpCGV1Y0fAskNJS1aVx15TZNjT3ZRmc5jHNkyPnVkZIzirMgLe%2Brq%2BE2TnkuljKc0%2B3S2mqUoRReYvyzfCwkR6Rd0%2BSfj9njGQRg73Kr%2BfBGdnX1Vl%2Fnq6O8N6K%2Bp6hi3Dg0IInC8YZszFtxEbPHjTpKKyQwReK6Ln1rT44wt%2FHxcG%2BDY8f1DNy9WuYfvJ%2FhKICkIcR30W1ku86G1%2F%2FVjXLo1mGf3%2FgJ2Ez60W2g6l4V9djHjl4F%2Fzpnk8tRP3daiDzRW0p4WPmZI2CI%2FYPhyl6Ak0xc7IpdBGZLb3Tk1Vjtf0BdxnDBX6Wg0dYj3o8lOx9gDn6zylYUCC3dT9APv5iLXE7xxylKtLiIxRbWgroAqAMKC648QGOqUBG39aKkNFSAKhWlv3jR9kqTNjuJy3X8WkksM7GlhaZB4BP9mZoBrT8Nom0BD7QKquUbL38v6sCLKf%2BeuhdP18QQn5k%2FRuCGwgamCbeJmMzeto9TVNH6DSvU4fSf7ZFK90HRl%2FuG%2BGixeBCb4HYhO9cvtwfiaBdhjhr0tM2ELyXswzWtgpo8GADZhi83Hs2ZmFkdoM7tSMNci5O%2FUJ5ioA87Z0N98p&X-Amz-Signature=270a1d9ebb4667277c5cff486e05864c8dd1551a82b7b1f82b04d8d92254a6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUECJMT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi2PTzfU7G8stf7%2FYH%2FSN3tGAdVqQwPgHE9KOUMMblyAiEAntIuHmTX1KRshl1nJ06%2FHU512ClT%2B87Wa0Nd%2FAkdcJcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv%2F36%2FNN4yUSLRpIyrcA4pMlnGA93nyW7Dh5k5MlFacZCoBOvt6X3fT3%2FnRrphKSA4NeHW4A8%2Fgkakku4QpMPpsxl%2FLlDocODF6jzoNIaieSf94Y9ZxSU3BrO8TN4ke0tsVLehSWfBb8S1NzhOlDLVqNvEO7A2dq0wwQ9rQ7hY%2F7AVIeMfBpNiAnN1gSnhkpoj30ECLs4%2F2pL%2BBt0sbUY8XwhpnEykPXw9BgUecVSplZr7xedKTDIDk4c%2F%2B6ezODf1WXisgFLKT4GybPNReAKfq5UeJKByqBpSpCGV1Y0fAskNJS1aVx15TZNjT3ZRmc5jHNkyPnVkZIzirMgLe%2Brq%2BE2TnkuljKc0%2B3S2mqUoRReYvyzfCwkR6Rd0%2BSfj9njGQRg73Kr%2BfBGdnX1Vl%2Fnq6O8N6K%2Bp6hi3Dg0IInC8YZszFtxEbPHjTpKKyQwReK6Ln1rT44wt%2FHxcG%2BDY8f1DNy9WuYfvJ%2FhKICkIcR30W1ku86G1%2F%2FVjXLo1mGf3%2FgJ2Ez60W2g6l4V9djHjl4F%2Fzpnk8tRP3daiDzRW0p4WPmZI2CI%2FYPhyl6Ak0xc7IpdBGZLb3Tk1Vjtf0BdxnDBX6Wg0dYj3o8lOx9gDn6zylYUCC3dT9APv5iLXE7xxylKtLiIxRbWgroAqAMKC648QGOqUBG39aKkNFSAKhWlv3jR9kqTNjuJy3X8WkksM7GlhaZB4BP9mZoBrT8Nom0BD7QKquUbL38v6sCLKf%2BeuhdP18QQn5k%2FRuCGwgamCbeJmMzeto9TVNH6DSvU4fSf7ZFK90HRl%2FuG%2BGixeBCb4HYhO9cvtwfiaBdhjhr0tM2ELyXswzWtgpo8GADZhi83Hs2ZmFkdoM7tSMNci5O%2FUJ5ioA87Z0N98p&X-Amz-Signature=fba5eb7c92b38559118af780e3bd74ef48c19124f02f54f305f87976127b28d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUECJMT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi2PTzfU7G8stf7%2FYH%2FSN3tGAdVqQwPgHE9KOUMMblyAiEAntIuHmTX1KRshl1nJ06%2FHU512ClT%2B87Wa0Nd%2FAkdcJcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv%2F36%2FNN4yUSLRpIyrcA4pMlnGA93nyW7Dh5k5MlFacZCoBOvt6X3fT3%2FnRrphKSA4NeHW4A8%2Fgkakku4QpMPpsxl%2FLlDocODF6jzoNIaieSf94Y9ZxSU3BrO8TN4ke0tsVLehSWfBb8S1NzhOlDLVqNvEO7A2dq0wwQ9rQ7hY%2F7AVIeMfBpNiAnN1gSnhkpoj30ECLs4%2F2pL%2BBt0sbUY8XwhpnEykPXw9BgUecVSplZr7xedKTDIDk4c%2F%2B6ezODf1WXisgFLKT4GybPNReAKfq5UeJKByqBpSpCGV1Y0fAskNJS1aVx15TZNjT3ZRmc5jHNkyPnVkZIzirMgLe%2Brq%2BE2TnkuljKc0%2B3S2mqUoRReYvyzfCwkR6Rd0%2BSfj9njGQRg73Kr%2BfBGdnX1Vl%2Fnq6O8N6K%2Bp6hi3Dg0IInC8YZszFtxEbPHjTpKKyQwReK6Ln1rT44wt%2FHxcG%2BDY8f1DNy9WuYfvJ%2FhKICkIcR30W1ku86G1%2F%2FVjXLo1mGf3%2FgJ2Ez60W2g6l4V9djHjl4F%2Fzpnk8tRP3daiDzRW0p4WPmZI2CI%2FYPhyl6Ak0xc7IpdBGZLb3Tk1Vjtf0BdxnDBX6Wg0dYj3o8lOx9gDn6zylYUCC3dT9APv5iLXE7xxylKtLiIxRbWgroAqAMKC648QGOqUBG39aKkNFSAKhWlv3jR9kqTNjuJy3X8WkksM7GlhaZB4BP9mZoBrT8Nom0BD7QKquUbL38v6sCLKf%2BeuhdP18QQn5k%2FRuCGwgamCbeJmMzeto9TVNH6DSvU4fSf7ZFK90HRl%2FuG%2BGixeBCb4HYhO9cvtwfiaBdhjhr0tM2ELyXswzWtgpo8GADZhi83Hs2ZmFkdoM7tSMNci5O%2FUJ5ioA87Z0N98p&X-Amz-Signature=41e029dc507ffc5204bbd688bb289f18b49de28b58d8a8fc8aaa173a105a7a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUECJMT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi2PTzfU7G8stf7%2FYH%2FSN3tGAdVqQwPgHE9KOUMMblyAiEAntIuHmTX1KRshl1nJ06%2FHU512ClT%2B87Wa0Nd%2FAkdcJcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv%2F36%2FNN4yUSLRpIyrcA4pMlnGA93nyW7Dh5k5MlFacZCoBOvt6X3fT3%2FnRrphKSA4NeHW4A8%2Fgkakku4QpMPpsxl%2FLlDocODF6jzoNIaieSf94Y9ZxSU3BrO8TN4ke0tsVLehSWfBb8S1NzhOlDLVqNvEO7A2dq0wwQ9rQ7hY%2F7AVIeMfBpNiAnN1gSnhkpoj30ECLs4%2F2pL%2BBt0sbUY8XwhpnEykPXw9BgUecVSplZr7xedKTDIDk4c%2F%2B6ezODf1WXisgFLKT4GybPNReAKfq5UeJKByqBpSpCGV1Y0fAskNJS1aVx15TZNjT3ZRmc5jHNkyPnVkZIzirMgLe%2Brq%2BE2TnkuljKc0%2B3S2mqUoRReYvyzfCwkR6Rd0%2BSfj9njGQRg73Kr%2BfBGdnX1Vl%2Fnq6O8N6K%2Bp6hi3Dg0IInC8YZszFtxEbPHjTpKKyQwReK6Ln1rT44wt%2FHxcG%2BDY8f1DNy9WuYfvJ%2FhKICkIcR30W1ku86G1%2F%2FVjXLo1mGf3%2FgJ2Ez60W2g6l4V9djHjl4F%2Fzpnk8tRP3daiDzRW0p4WPmZI2CI%2FYPhyl6Ak0xc7IpdBGZLb3Tk1Vjtf0BdxnDBX6Wg0dYj3o8lOx9gDn6zylYUCC3dT9APv5iLXE7xxylKtLiIxRbWgroAqAMKC648QGOqUBG39aKkNFSAKhWlv3jR9kqTNjuJy3X8WkksM7GlhaZB4BP9mZoBrT8Nom0BD7QKquUbL38v6sCLKf%2BeuhdP18QQn5k%2FRuCGwgamCbeJmMzeto9TVNH6DSvU4fSf7ZFK90HRl%2FuG%2BGixeBCb4HYhO9cvtwfiaBdhjhr0tM2ELyXswzWtgpo8GADZhi83Hs2ZmFkdoM7tSMNci5O%2FUJ5ioA87Z0N98p&X-Amz-Signature=9e0d1dd938d322b701379d8b71933acba7c4c6da3153fc8ae6295849fd7816a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUECJMT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi2PTzfU7G8stf7%2FYH%2FSN3tGAdVqQwPgHE9KOUMMblyAiEAntIuHmTX1KRshl1nJ06%2FHU512ClT%2B87Wa0Nd%2FAkdcJcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv%2F36%2FNN4yUSLRpIyrcA4pMlnGA93nyW7Dh5k5MlFacZCoBOvt6X3fT3%2FnRrphKSA4NeHW4A8%2Fgkakku4QpMPpsxl%2FLlDocODF6jzoNIaieSf94Y9ZxSU3BrO8TN4ke0tsVLehSWfBb8S1NzhOlDLVqNvEO7A2dq0wwQ9rQ7hY%2F7AVIeMfBpNiAnN1gSnhkpoj30ECLs4%2F2pL%2BBt0sbUY8XwhpnEykPXw9BgUecVSplZr7xedKTDIDk4c%2F%2B6ezODf1WXisgFLKT4GybPNReAKfq5UeJKByqBpSpCGV1Y0fAskNJS1aVx15TZNjT3ZRmc5jHNkyPnVkZIzirMgLe%2Brq%2BE2TnkuljKc0%2B3S2mqUoRReYvyzfCwkR6Rd0%2BSfj9njGQRg73Kr%2BfBGdnX1Vl%2Fnq6O8N6K%2Bp6hi3Dg0IInC8YZszFtxEbPHjTpKKyQwReK6Ln1rT44wt%2FHxcG%2BDY8f1DNy9WuYfvJ%2FhKICkIcR30W1ku86G1%2F%2FVjXLo1mGf3%2FgJ2Ez60W2g6l4V9djHjl4F%2Fzpnk8tRP3daiDzRW0p4WPmZI2CI%2FYPhyl6Ak0xc7IpdBGZLb3Tk1Vjtf0BdxnDBX6Wg0dYj3o8lOx9gDn6zylYUCC3dT9APv5iLXE7xxylKtLiIxRbWgroAqAMKC648QGOqUBG39aKkNFSAKhWlv3jR9kqTNjuJy3X8WkksM7GlhaZB4BP9mZoBrT8Nom0BD7QKquUbL38v6sCLKf%2BeuhdP18QQn5k%2FRuCGwgamCbeJmMzeto9TVNH6DSvU4fSf7ZFK90HRl%2FuG%2BGixeBCb4HYhO9cvtwfiaBdhjhr0tM2ELyXswzWtgpo8GADZhi83Hs2ZmFkdoM7tSMNci5O%2FUJ5ioA87Z0N98p&X-Amz-Signature=f1ab351bfe7b774e5c1d8241e9da6a5b8ebc58ea8984e880d9609fa409b774f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUECJMT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi2PTzfU7G8stf7%2FYH%2FSN3tGAdVqQwPgHE9KOUMMblyAiEAntIuHmTX1KRshl1nJ06%2FHU512ClT%2B87Wa0Nd%2FAkdcJcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv%2F36%2FNN4yUSLRpIyrcA4pMlnGA93nyW7Dh5k5MlFacZCoBOvt6X3fT3%2FnRrphKSA4NeHW4A8%2Fgkakku4QpMPpsxl%2FLlDocODF6jzoNIaieSf94Y9ZxSU3BrO8TN4ke0tsVLehSWfBb8S1NzhOlDLVqNvEO7A2dq0wwQ9rQ7hY%2F7AVIeMfBpNiAnN1gSnhkpoj30ECLs4%2F2pL%2BBt0sbUY8XwhpnEykPXw9BgUecVSplZr7xedKTDIDk4c%2F%2B6ezODf1WXisgFLKT4GybPNReAKfq5UeJKByqBpSpCGV1Y0fAskNJS1aVx15TZNjT3ZRmc5jHNkyPnVkZIzirMgLe%2Brq%2BE2TnkuljKc0%2B3S2mqUoRReYvyzfCwkR6Rd0%2BSfj9njGQRg73Kr%2BfBGdnX1Vl%2Fnq6O8N6K%2Bp6hi3Dg0IInC8YZszFtxEbPHjTpKKyQwReK6Ln1rT44wt%2FHxcG%2BDY8f1DNy9WuYfvJ%2FhKICkIcR30W1ku86G1%2F%2FVjXLo1mGf3%2FgJ2Ez60W2g6l4V9djHjl4F%2Fzpnk8tRP3daiDzRW0p4WPmZI2CI%2FYPhyl6Ak0xc7IpdBGZLb3Tk1Vjtf0BdxnDBX6Wg0dYj3o8lOx9gDn6zylYUCC3dT9APv5iLXE7xxylKtLiIxRbWgroAqAMKC648QGOqUBG39aKkNFSAKhWlv3jR9kqTNjuJy3X8WkksM7GlhaZB4BP9mZoBrT8Nom0BD7QKquUbL38v6sCLKf%2BeuhdP18QQn5k%2FRuCGwgamCbeJmMzeto9TVNH6DSvU4fSf7ZFK90HRl%2FuG%2BGixeBCb4HYhO9cvtwfiaBdhjhr0tM2ELyXswzWtgpo8GADZhi83Hs2ZmFkdoM7tSMNci5O%2FUJ5ioA87Z0N98p&X-Amz-Signature=1a9e3a2ff52c95d6af4246b91d95280d162106c16a2cd45ebc3737b8ef996ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUECJMT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi2PTzfU7G8stf7%2FYH%2FSN3tGAdVqQwPgHE9KOUMMblyAiEAntIuHmTX1KRshl1nJ06%2FHU512ClT%2B87Wa0Nd%2FAkdcJcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv%2F36%2FNN4yUSLRpIyrcA4pMlnGA93nyW7Dh5k5MlFacZCoBOvt6X3fT3%2FnRrphKSA4NeHW4A8%2Fgkakku4QpMPpsxl%2FLlDocODF6jzoNIaieSf94Y9ZxSU3BrO8TN4ke0tsVLehSWfBb8S1NzhOlDLVqNvEO7A2dq0wwQ9rQ7hY%2F7AVIeMfBpNiAnN1gSnhkpoj30ECLs4%2F2pL%2BBt0sbUY8XwhpnEykPXw9BgUecVSplZr7xedKTDIDk4c%2F%2B6ezODf1WXisgFLKT4GybPNReAKfq5UeJKByqBpSpCGV1Y0fAskNJS1aVx15TZNjT3ZRmc5jHNkyPnVkZIzirMgLe%2Brq%2BE2TnkuljKc0%2B3S2mqUoRReYvyzfCwkR6Rd0%2BSfj9njGQRg73Kr%2BfBGdnX1Vl%2Fnq6O8N6K%2Bp6hi3Dg0IInC8YZszFtxEbPHjTpKKyQwReK6Ln1rT44wt%2FHxcG%2BDY8f1DNy9WuYfvJ%2FhKICkIcR30W1ku86G1%2F%2FVjXLo1mGf3%2FgJ2Ez60W2g6l4V9djHjl4F%2Fzpnk8tRP3daiDzRW0p4WPmZI2CI%2FYPhyl6Ak0xc7IpdBGZLb3Tk1Vjtf0BdxnDBX6Wg0dYj3o8lOx9gDn6zylYUCC3dT9APv5iLXE7xxylKtLiIxRbWgroAqAMKC648QGOqUBG39aKkNFSAKhWlv3jR9kqTNjuJy3X8WkksM7GlhaZB4BP9mZoBrT8Nom0BD7QKquUbL38v6sCLKf%2BeuhdP18QQn5k%2FRuCGwgamCbeJmMzeto9TVNH6DSvU4fSf7ZFK90HRl%2FuG%2BGixeBCb4HYhO9cvtwfiaBdhjhr0tM2ELyXswzWtgpo8GADZhi83Hs2ZmFkdoM7tSMNci5O%2FUJ5ioA87Z0N98p&X-Amz-Signature=c3a1a77d2aa0a5202516c2f38e5f234d25a3a84ceb3a074d061ed4fafdf17943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
