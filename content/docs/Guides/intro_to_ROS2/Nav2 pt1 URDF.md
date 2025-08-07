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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=a09f436198113dc11c3d602d380e7d5d153336461f20fdc179d332ce5343066f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=6936c38d1d546a9a16389ae9efcb25ece2f771cc6646e3ddee3768b18ad2fbda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=03352ac16c06459c0d46c50dc2652dcc3a4400be0ff744e6a3fd6546cf78965f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=0546cef98cbde5aefb214ffcc1d411ff0d4f45e5056612d96dcfe10842d316e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=af7348026f31e38af3a0912a35489e0ea3fb1b35c22093a6604e2f03bd811f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=4e71d2f88c13f31a0b722443cd38b0c720abfaaa373cb039b493d629e160987e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=36f0be40d932a689ce4f8682597600dde9949cd4e199c30e168b00bdf36866c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=2a3a54f1f1c341aa6d48dba7208dbf3536f7ba2c2f5566fef94b0aa01c566ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=20589c23653f0768db5549dd6b38bfc85b676141c6e379ef1207c5753fb61997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=cf61610745d15ca4cfb55aef87d070c5ee7322536ba1a78d5642fc06e71fc86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=7aa1d59f5de0441c53fa935717dec3b5e668c82f0be276451cdbdee942fcbb4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVAJO2T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD7WPQe6v51RwE4f4JOha%2FH6sswUy5wr%2B7Dm0yQvkGi9gIhAMH2QKTdBzsSKGU%2FZcHQq%2FgqoiuFkHYPAnLXtQY2taikKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywuHZYnnX8auwgOP0q3AO3NJFm8ioUDzjCMc7S9Wg298QnSaOLi0RkDZK%2FThVot6QyDbcmo836iCN2COyOXe6K1onKsczHxDwSGf4%2B%2FNXP5Pninth6xiWWrywKKrxmtyFXffY17BSjGKB1w14w2UDKBwpB%2BRZ8Q63L%2FJi7bIl1aD8HEnDpZ%2BDKgEkj23Pa4W3KBEt7o5JRm9BltidYv6RoBOUieIDTGSczXGD90vNvP71zDFaPqeaMF3AB%2BoLyLHaA51u55cC5LN8rm8M6juvxmGb4ljeUDK6VHu4EePzp0EQD9jmFFAeXn9HMo5QGyiIOd7CyeDr94zILlYj9bVVztVSlI%2BQzSaNA0btcuMB%2Bq%2BeBQOcun0KMSCGmmoomCr5YYmPpQOGS1iwfeGRxEd6%2FkJ9Ux5izIkcCBXEJ%2Bi8Vebfg2ljFt%2Bylipt%2BD9VldIOESFmfuDVBHIYqahVf1f3Mps6ugfKm8VuVrQi17FNIm29Ekw8dP7mPxbv4smUSkVmncv4NVE63akcc4HzIw%2F%2FN686ti2qgvYhsRV0DHshXREKYs5VmI09ZOAZ7m1LEY8CVAr7Zq8iQeXIKKSf2xYrJ5cFEHaKIXblviyUBSITcPUGDTZETRVFVm49oPMqnbnxVMWT8Ot3q0HY28zD%2BkNHEBjqkAdz3ZiJDMK9WvBqR7B6BWyxdNiG33YtKkiWlX6JLgV2mNOT3%2FnFbWC0jo1alSc8F3dBM5%2F3V3dSwtUET0tnGED6x81ceJygpY4CwhEpluk1oitl7zI%2BfoIM1rMRBdx2Ywa12acg%2BkwHANK0%2F6W3mMijenXHk%2BmCvXfMMTWp8%2FYZAoJ3xiFzp02yzBXJY0qiW%2FetZCwuwrk7NzBQyKm7di5sIgMyJ&X-Amz-Signature=3f5bb8fa94f2cdb785c19dd718d7c07263f63cc85825ba0843d45afaa77c470a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3T5XGD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEqJjO0uuWHfkMhE1EfIqv4iWSNjAOZuWsI%2FnZnVpPPFAiEAsd5Oc1bEvUwgpigKw41VaG%2BfOtuOv2YPWnHcigtmjWQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMy3TW6SOp%2Bep4iU%2ByrcA0Xq1J34hwe36Cz1iGDeDCu9Ph9J2bd8NAlxVbDfB7KWf1Oi2av%2F5GgGtKlWSm8A%2FEkX%2BHxNY%2FxD8WYJSnePESMtcIsQXI22uAfAndACmCsjHEcuDKv3a1%2FnZVfVxKK1U4o7ieaC13v79GAnzWuPIiI0m39ViES80M5HmRupSApEBjd81Co187Dn3KJmXbJCn5wde4kLt4so2Mz3iPM2J72j51A%2BpOm8GgIVslsjtIY%2Byhd2m1nBKdNLnsx6iZwtTpnq9A%2BxJa5ROeSwRSAR6qNGekoipfMjGwWkqJHLLNFVVOn1PxNCAoB8ovClhK17mMUaI4Zv%2FeI5p3CBPlpRM9L8ASZUKhIwTy5w%2Fy6O80GcmdT1gTN1gVh5Q6bgnAVA%2BZZzSvRvaMzQ0EVIjKvKScqyoJKv9zGlxCKKk%2Bjtp0KhFJx5E7DSbyAvQFJOwkSWi%2FSD1T%2FYpq6Qx9poREirky5jFlNbmsSgS%2FhF0pfyL3dCR8ptOKRzZ5%2BrNlTgC8bC%2BLZNQJudm7uPgFc1p0TiVfbedXOSO1aRM6Iotk86NFnNe5yM96K0azpIXe9mh%2BkRIVcHNF8QB0u2%2F9cXMcutIBllKUXKHwtuKY8M7NzOAkiHEiGv7nxUL%2BU1COi3MMOR0cQGOqUBOUawJikpB2wNg%2FWm1V2nINVFdB8btie3O1IbRsDXzDgYnYrALKxtGDA0ZKwDAWt1Q%2BzMBhFbn6fkTWbbyB1GXzkgDLDLnh6qnG2zTygNDN4Otfboid2vHLYdMMyIoVXtHDVAZZvm%2FpsHd9ur0TlqmURAmg%2FqLiWju1WDnaQsB8WHZZkgc%2BPLzqO7YxchjMh7%2BFu8O2UOM0F%2F%2BnbidlRW5lQxCbAM&X-Amz-Signature=f40978b10f6df0a1051616952b0b5e50b992f805cf8de7d9c8377d45ae4307a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=6ec113dba1410f243eb1cae4c726102b7b483cf875cdb17972deccad3a2175a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCFZGEC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDW2sUH89PTLv9ncs8cRimYV2rTlQLIfczfFqLc8CnEogIhAKOBaiwdW61XLoUPzoSxYTu0t%2Bo56xisNDjb%2FLgBn6FbKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvRg0Xth%2F0f64rvE4q3ANVGLlwgAi7POP5zvPptqErVYvebXu77puPz55cQ39UNbXTXcxpvbA%2FLD0GLrXUPfmBZegxhcwgeewceiHIoSESYOeJynba0fvDrQhB4orzy0KNseLzSF2MLg113a84a7zmSapUgD4fqaT6VcnsWcEfs5uVHvqkYaFZMEBLh8hob%2BzuuFUW88U7uOeedykexvirkIfJ5M%2FHwmEzITnuARFxjEeOpApW2MiNwJ4Gp4l9rcKwkNpVpv59JGJxM89Ch2enkcXXzPnCV%2BDBV1hClK0KhFhmjdigBc1ak7JBalHliSdloWf38ritDW0DZ3MDmT%2BhdlVrBCPwglSz4YmuB49onbjmXQ0n54Hyaed%2Bskk%2FSl%2B%2BMJk6vkDao4AahOMHR2MRnhgBsAA0iglihyuYU1v3H%2FkKo8VtXNt4IRaSjg732R6P94HVb6LMhrkeNVeq8MgrEMjOBJmDSJdo%2B4xF7%2Bev8nPCPZEqcCjslT5C4%2B0diQo6xyx%2FO9EcisfVQ7hXatuW2x%2BxQBHvwW7AeVVNyZJKWlvJJ%2FhMOfFVuTi7l98ynV4J6wSEv%2FVEssqv1FGyGJbHlWgQSyZCHg%2BWEMmGuV%2BW45ecX3LIF1%2F1YFeWjHPCTyFEk06Fvomw5QpUezDakNHEBjqkAVSl1F3QbFv3z9UsLi9mRaElZuTQDpO%2BkvIG7MGX09v6fEXfBh2t%2FNEhEpUopLVJk1W30P6%2BTxYO8gR5ZX%2BxleibsGnxeqlAQbKRNhpnQI17JTK2lp1duHpqrCACq4fFazhqnOcPeD2PGUt4yo0JiTmV8qyahaIEzF3fypvJd7Cb5YqRM0gIB2B%2F87aek90qZiqFmSZWKZ%2FfxpXpMd16br1A1wTl&X-Amz-Signature=d27e01b61a0fc162f8b865971c48daa216cc0b0bc29af84db1f0f0db51915a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=1d1df2d6cc5257821c2962bf1dd371ecffaac1f878a80d550a1b56cce7af71be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQM4UJA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBhO%2B9gVSesZOC0FNiopIN%2FfOJ2OssKxF6%2FwGciEMyRzAiEA1fgvjT54KeVxQdLsOLhyhJQl12Vr2M%2FSbwD65Zv72fwqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODkhu6ngQUYe8cfKSrcAxKicx43MoyO20eo7G1CAapUDd8dy7HjZ6HORBsKAhmy9nqPrZUwt81XpZAEOKtGBWpJjNpk9EmkmVRlGx1MdKiR8CsiFuXgvJ16CxRQ6GVRzKuld%2BSzacV6YrCLiJNxzAMTridF8o9KnaIYnxG7%2FDhEZOAqRBpd%2F%2BVwtaPTSB7DojtRKErwCaXy1XNWhLcFuQEa0B36iSZdH7OGB8YG2KKS32KYQLxlQNKYCiviUCDuzXoSxs3PUup1LT%2Fqe4r9olGuZvHDgSLn9CV2X9BaFsfMvxw7nXv3bGH43BpwGmkGJe3ygcVRBCHxFvkQAAhrpyKOFxsvP3jRd9FWuVXokH6HyWX3Z47SNfM8%2FaliSyBF9umsnLT8bFOvE9OHq4FF%2BNnjbkJl6F8HLSzHAoeRPLs19E5SEJ57H4UZve0n%2BjwB6whRWUgbpdUknZ8VCNPrlx09YL1NDUyVM7MpsRgL3xzOlLAjD6RNePAja7px5Ut%2FYoStFcqoE9dBm64QIC0nhQi5%2FsQg5iWo81P0SDuBfkjHGv1YF6un3l7WrJZCVMBBH%2FeYpjvwyLqyKGFxAjersk10aPpN60yoFYv3yzcoXINs35QcZDQWVNIHeWGeUSyzHy02wMtNioMlTGKBMKCR0cQGOqUBsS6hYipW%2BcMhwHMyg%2Fg5kTROHEkf00kOyD6wbjN2zd4zP9FFVL9%2BxwkBVAqCCvb0fe4VR0Hq8v4OGRLmf4SPsNGAP%2Fx5ipERFyt2yEAZ63X0%2FwyyKnhvH37ZmqKGvFHwDhJ0e%2BAuhehk976JoGKIBcpfbV71irYBNRyRlGf565i0W4nYfLZIB7GZRc97hQe0mASc%2Fa4x6Vtv44Sa1%2B6KNTne4IR3&X-Amz-Signature=c1972d1e02c4e3eaca3d04b9b0dbfae16a950822b503668d99f0bb8042f78f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=101420d0126e68c59228a0bec6c0ecbf556e81135765b8133df0caec18789973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WCDFKFJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFy1cuyK%2ByN1XJAk%2FpuKqoRQNb9iDVK71vJ%2BJU%2FmgMHaAiAU7lc59Q9SsbyszN5Vr71Div5y%2BOMoOPdu1ORt63eXaSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2FWkzYTVRahJzg1FKtwD1EwOZ7RdS7ehxHB3OGC51KqSNqjOxkvizwETeTV4LwIjWZK2vBWH5QRmsF8WN4bNoxyrCoEvb9XJBC0vm6u%2FTafZsRrxrwZZRBILeeM4qZZp2e9Oz%2Bkerv6WIk4Rs17DH%2FNlABRkTY2GgBxhJAFQaZdHrUmIR6737Nz2OVObkxfoutyvkHEZbVvYE5JQWXWB5LEfMlhwerAvT9CXpu0sGlQIAmYu7sOGfc32WS3zoFyBbg4xE80Lk1XzwrZaM5iEpFe95YzoJSTUCswXZchGBTCNCtW1uXH%2FettrDPMoqLWYcmPi8G4dKgWMwmb2pQ790R6n8Mj%2FLgfXakj%2F8UcAuC8Unlu8cURWqCesGnPAXLUUeNUALYuce3UPnfKWfIub2%2FPszK1R1jBu4N05%2FCJjAHRUEWNdL8CeUx49w92yPBFBpNhasBq7Y696eCeVP9NKq631XEHvX7HnHVetKmWjFmWDwTVE69VuVmg5kEN%2BK%2Fvv4xJcaqvT0b1hVHf0SdJivxlD5B5CeZYnrXr901HKB0nxrgqh2IKjkndD2KL%2FJWymUKbn%2Fd%2BRgh5iIAqOzOP3gQ4ynZWtCtI72ZGvTgKQHYovRp0WYakp7fbZCIXKRRLRxuL%2Fquskh5%2FVh%2BQw2JDRxAY6pgG9DK2bEEO9e7mk%2FaNXJ1XbC0ej%2BO%2BYffmh2hRzqg9881lhj80%2Bja9mYRyVGeWR7HDKxxZMe9SHXYFUYwGDEXWqt4P0YvvPtVwQi%2Bd%2FXsrTKRtQCWJC8v37AhTCoPJ%2B5kBjrOAZ06NiuIpX5DLeZbo3SOY15yrpEV30kujselXoHsl8dQQC%2BdeCAet94icus4W7YkZmsfPd%2BfazlaCHXsQQQIDVP8xZ&X-Amz-Signature=af76f21c7b7be8767be05560fc08f03a65bd702ca9a930e4bc4d0a5fe14550e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=4f553e6c3310852ca0d90f60059c1197ea867d916c501365a9d9928e8795977b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CKNO2JR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCFRe03K7EFaTNBuXFBOGtZyYsnYNgSE%2B23fsL2cGJH5wIgZddE7dC%2FqxZyZWaSg0v4r3pLKXtYta1CJkFOPYu7DZYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaVVQocbeGVMTW8hircA%2F%2BwSwq5Bw4qYAUBQl4DukPNoubVW7ZKt9w8dtxik5znjT7E%2FGcNLxNTZHGDvtc%2FWYsMnUbGllwLmOLathpTKYnnG%2FhtO%2FiN%2F03dbRtPTjBlvECq%2BUc5xh8zWylyI9xwAhEIguOigexSLszKlgfKQEuJXFBoN%2Fv3ObF5OiUgt3hHwYcqxW70yph9FrBF8erjln3Hxbea5Y%2FB%2B%2BrIQuCaCgVS4S1PWqB6%2By%2FD94NybvVIud8KitZ%2BPuenv%2BMPu3GMz9s%2BVfU5SE6rGSe3eKxBKhBi4A2WFPA7uqwLnHPMTK1MFSc8n%2BTZuOOQFd%2B6RqdCoZ24f9jB6qWeVvIIpDtctwpwzDy9vBZtKLJ7p3X5zZVNWdPh0L2fKiN3%2FVTQenOW5MMYuONHh4fHXwMeD9knRNGOQE7xpHQAlR1k8%2B3iLgKdUNsZRTi33THAqFuzunZ%2FKdpDZ3ZusFPAuzKkla%2B57Gvrtn3oKDFVG83BbD3wzoGv45nmq1PZ0PZnxlYD%2B5eI%2BlC4hYSVEuLFX6jMR4FlY%2FH8Bf8mEI1YwpBJp357m3HRZt8WpzG%2BZfYEnkdt8VhY2uhGMMynn88lLYWlYkzsdkvEHdO%2FcCGZQQv%2BCUkkisaW0vRcBJCfSFQXG3%2FyMIaQ0cQGOqUBu58l95dboE6lhucfebkErNlThlwGvgZxCF3uPyULwfd0hbNDjM8qEZMwY8KKOYQvLEctjz0OAPxplkDQeFyibUjioLbqO01HW0isdPOry163oN6tonkWj7deeCcz1brET%2FZzRL%2B0eWKNzxjbHC5pCYKjVuXdiSRU62XsxkZqBBDmLzQnKiJAanJE2RWnb8inSoH1nu%2F8jtBn4%2BeC2gGiOFS64neX&X-Amz-Signature=2b682e7618fc286cb8052e646e8554eb979a9db50429b1c9bb3f0f27ff20c5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EY7TYJL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHMnRbEVI9TPAsCKaJg66P26ge3DUbN8e3c2YUYSkdDpAiEAopwTKSuJRe5t7cLGoOra8aXw6IKBkFbEoClS4SiUoZ0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiQbuwHGzJ6b9tOrSrcA8skWsiBtBhUA6xFYyOTKk2iFVfa6TI00R2Vu1VK5E5U2em9jcEZ4EV8d5Tl48TdhQG%2F3xdIvw6A%2FoBmPDxXsVxUN4knVRifIfKJPh07J9CTZ%2FrDQtnyOQ%2FvJCzeLCmkj0Nts3ZtEn33xPfMVkA3OY3akL%2FEbBPsF%2FOPA7a4FXbZUx8hDIzoMU%2F8Hu5LMqONTAEOWPBdnZuvLCV7iuFTExhMmN3KUgZOf%2FqkbH%2Fn7bwBdpO4aShjL2NCCIv49%2FOgf6Ht3518M%2FqyA2clbLxIbqjCJzsCOtwtB3t3ucO9tRzAn4N3jmVwzS4mWPbyBlso%2Fq3LXTlwP5PYqc7wguLs66Ew9nWVp51zbBVGyc4SeUw9UTQ5IT3XvrOSHeZW2Cu%2Bf0gftxQFU%2F3Kcl6juLX33RsXEi95a46fdRDzn1vn8ZmlHyohUmIQRhKqAijV%2FzJcn3ii70P0XJda2PuoaaVldUBnSBj51qU%2F%2FO1ZGKqPPfJD47JbL3M48pC6WYWB4jqi2%2F0GUjbbBWn8yc5zBLR4K8xC1pKCCejnhcQiIeugVrGdyn7Gr%2BAh%2B7dSc6D01uV%2Bvp4LTa%2F5UYa5lXtruddiZAEyzKF1NDnnFtO71Iu5hmTdnQBWqLrT5k23me7fMIOQ0cQGOqUBtRDTwub0zoZKQ6EKvKyBLagxwQOjLq0E6y4pVQAWHltWR4Koq6aKfqVWeR5pJ%2BK9V2EMbZT4Eu%2FmIC2jvwW19%2FnUH4hsx04QrjNC1x2ItrsleYsKTxP72QOkETmFrkfNHAX5LwCNRDHFmK%2B3B7RCDnIhinVzu3XDCeVQV%2BWIJnUyaiuqp8oxuevyrEz6%2BunLP5Vc0xXREZzunSGiqoAZpu9Fhtjk&X-Amz-Signature=5fef1f6eac204a18e5f646d27ac2d94cd861a12fd33c0503293ef7855b20e021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3T5XGD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEqJjO0uuWHfkMhE1EfIqv4iWSNjAOZuWsI%2FnZnVpPPFAiEAsd5Oc1bEvUwgpigKw41VaG%2BfOtuOv2YPWnHcigtmjWQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMy3TW6SOp%2Bep4iU%2ByrcA0Xq1J34hwe36Cz1iGDeDCu9Ph9J2bd8NAlxVbDfB7KWf1Oi2av%2F5GgGtKlWSm8A%2FEkX%2BHxNY%2FxD8WYJSnePESMtcIsQXI22uAfAndACmCsjHEcuDKv3a1%2FnZVfVxKK1U4o7ieaC13v79GAnzWuPIiI0m39ViES80M5HmRupSApEBjd81Co187Dn3KJmXbJCn5wde4kLt4so2Mz3iPM2J72j51A%2BpOm8GgIVslsjtIY%2Byhd2m1nBKdNLnsx6iZwtTpnq9A%2BxJa5ROeSwRSAR6qNGekoipfMjGwWkqJHLLNFVVOn1PxNCAoB8ovClhK17mMUaI4Zv%2FeI5p3CBPlpRM9L8ASZUKhIwTy5w%2Fy6O80GcmdT1gTN1gVh5Q6bgnAVA%2BZZzSvRvaMzQ0EVIjKvKScqyoJKv9zGlxCKKk%2Bjtp0KhFJx5E7DSbyAvQFJOwkSWi%2FSD1T%2FYpq6Qx9poREirky5jFlNbmsSgS%2FhF0pfyL3dCR8ptOKRzZ5%2BrNlTgC8bC%2BLZNQJudm7uPgFc1p0TiVfbedXOSO1aRM6Iotk86NFnNe5yM96K0azpIXe9mh%2BkRIVcHNF8QB0u2%2F9cXMcutIBllKUXKHwtuKY8M7NzOAkiHEiGv7nxUL%2BU1COi3MMOR0cQGOqUBOUawJikpB2wNg%2FWm1V2nINVFdB8btie3O1IbRsDXzDgYnYrALKxtGDA0ZKwDAWt1Q%2BzMBhFbn6fkTWbbyB1GXzkgDLDLnh6qnG2zTygNDN4Otfboid2vHLYdMMyIoVXtHDVAZZvm%2FpsHd9ur0TlqmURAmg%2FqLiWju1WDnaQsB8WHZZkgc%2BPLzqO7YxchjMh7%2BFu8O2UOM0F%2F%2BnbidlRW5lQxCbAM&X-Amz-Signature=a52b244dc881edcb3279c8d6a78eedbbf10c4f495347ad6de3a9cfe800371b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7Y2HJEF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD%2Fs2%2BZyXyhGNqDhHxfG5cbBh5W313fDMBLFw7SgkQ5fQIgD8z3zouRbvygTpW%2Fh3FI5HC3WEhnBkzLgagJ0Aey9e0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6uI424UJU4INhZByrcAyEsmKqTXP%2BCxU97P%2F3%2BtdXb11eg%2FQxOgsXZKrpur2Xv4h89JDu0ly2Y6QPDpHRZ7xvwUClpXCXc8oKZ48ucFUTIB3JNLADYVXsXWWRlOmHnkXSf%2F%2F7tCsl%2F72%2FHwM41EsomSiF0H70PFBxg5AsHV%2BZFp8HxNfHe0Rxg3qBX9EhweF3JNC5z3c7hTWthVdcZHR9cUsuw7qO9NyrftnEwn9L1W7vqxuTXbhAbB2DNWqr6lAaE31DnVRrG6UXR9TGcF2VQ%2BesyyO6nGzgQO2jK8Q8bInSK9EK0NpEmDmLxMN1ZafGzpdqVrsNQcpoM%2FXvp3xsiifY1FGdGMt5Cc13GWSl%2FcMsiIQZgphK9ubCJG0fPclCSTkB2bJLcfFjKiTv58mUJwm55WoWgAO4quLflrXTpnhskJxO1uQP0imCB5mEYrN10bHU8cibLi5TSPFNvhM06kMyGqD1iGQxcfja90aBvO2IIBOZnqwnoKFRYzlWotCpeOgAVlvaH01BWTeBZDrAnilQCVQhoZ2%2BgqJTg42NOMXoxtvb9QkV%2BgjyMyRFmNC8pFhSO7GVwg3YpgKmTfihQcvuUkHPdFfUwuTo3b3cQBOGx0hcU47J8S9ukbsgvuR3fNo%2BJ66YSmMyAMLKQ0cQGOqUBJnw3UiFwqJk%2FrBOuusoD4YL6NaFJrD1t1JGlWv0Jiadf06%2FnpILTN%2BSueU9Yb9M5NyO8hdW9b%2FR2PbYYf5px4ih97Qg4RCBB93rLAXZMSvSuZxUFjX9BQAl8%2B4cR3prc0eeZZvXuwLOcEpXw839OjaU1ePBg4OSV22OTGXU1nGmN998Ld1491MtqFQ%2Fj%2FZ%2BIkliemYj5nnfNu75LHOY5YjDduFgm&X-Amz-Signature=2eed3f65987e558f2b801548f92816f26edaaa3f2ee66816f261a321878c52b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPHGYA5N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBqTWzoJruorOs1Ll36vJpWWnVtn%2FnoLo5ykmkMPMF8CAiAUDWgCQcDi1Gj00NEF1OSk8SKQh%2FGBeoFBYqCg%2Fxci3SqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT1MhVytfoPwffHjUKtwDo6TtmZCKqQyOk2vQcnxEM4Fv35oTrIcUgz%2F8swFrgBQ1%2FNpEDufw%2FRZuS%2Fc4TzH0aQj8ttOuZb4tNe9NELjZiKWHjZshMg4%2FiVdVIw4nh6EnZOTcLDZMlVnfR9N3BXOo3UHgfzW%2BPDVPVHtxX71nYtJDdeN%2FBbWZhGYUwi0dP5yP5O0m4bNTJAQc3SmOg32nwTzxpcP%2F4najUqEn8pXjg9g6duHj3hLdEUEuG0wX%2BAzMoFwcztm6Eg0m%2FcF4bIVG8L4H5psKrqeprfL2RO1rfrWm3LMWuJaQvrOJHR0e4UfDeCEGxf38d3U05jwvzZF5n2rdGU5WxaftmaOydpOmGMRUJGXm1UqPfjmvzmjyG%2FMhhscigShP9Es2B8u6T8Ojivtxzf8RAGmW%2F5bcd4t1gr73nZ23yKsEvQayHahmZA4FuQK1znbOCvRBrtfFn1TJEpuKRi33uEhoo1X2Ydd8F%2Bgz3cJq7rPoqnRy9cukPmYHb3hSVbY6MEsH0urWrU9uoKPKzs18Wjm0OXBWLQaJH91%2FqKOzXpJTXHoDn0KHREUYGcOHgX%2FEFGp0ubE6jqudxkZCFB2D1hCEem5hiTXge%2FQ5dakvH8Y5sj4U%2F0U%2BayDz7SU7VLkZxRCbtF4w7pDRxAY6pgEzAoQasjj52zVUTJmEZ2ST%2B9yTbXWDxs1xJM7z5MC8BtvQlQ8i4OleJWvmMkXOu4ye%2BLfoJ8ZJHmqp7NzY7mP9CZt5yENg18RY79vvXc6lDypF5FEAoyhmAVJvbzoTbAhsAEx4%2FIJPL%2BWx78WkBv3581tc%2BWp6nRPw2rzwcStdzQy6goJZw0DaG%2FFvu2SFrCY%2Bbmzgb%2FFeuUDQOI2M84nKagnNscWX&X-Amz-Signature=1a1c614dbfd3a0e677e26f410c4d0f89e80117d9d2e58e0fefb10af2144e13a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=015cf93af470d6c5ca77e3c8f42774da77297a431551c4823a8a2f93709f5cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTCZDW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCaDfVMYX5ebF89YGt0p%2Bn33YjrPjmPFrtWNGGIZWZALQIhANS%2BQkxXUIk0eXJeB%2Fq1MHTQuYlzq0j%2FWyY2baaSZr5%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlGthjW5e3D1oLX88q3AP0LsljSraBm%2F9%2F7sdWEhY4glmmjFUXMJEvzMpXdK5lVI2FDWPEAL5QNJy37iSFK8ypm6h2%2F2wXS7lKmPMhFU7TJ9%2BD2pgWR5X6g41zlbtUr97qhHxp%2FHx9mKCFPTQzPs1sJ6Pk9lYSPf2aLKx7iyh0SRnZ%2FiP7WSrCePUB0fLHWA4NLStO6odhP2pdJOfJJr89tgvq5qVX8FXB6LLl0%2FLQ%2BKKoOav34k3x15Y9Fj%2Bs%2BJB%2FJJBVnZQWcfualkFCDKf9%2FH4yW0Q6V1fQ2UBPftU19%2BER5u57j%2FzPSWPzExfmcen55JZkpRrq0vJAMl%2BpaRr1gmgHseQuDFkm%2BTqaIkLTHmLTpBV0FgFTPPkG1QKpxA9KgMvM8v6fMLKKiwyMkfK9LkNLKmIOQC5qbTl2mNr619Z3wa64bHjyT3icDkEVr4%2B%2BzAgDbKmrL9hzxrYHGqACGUMtB2dnQudE%2FKORFctgeVTx%2B1AKDLk2RNn165AcO9hKP6jbCXLFVDmu4i0xwuhmvBOjGHVLC1oUEzbXaUJqxoBxKxUuzg7YtPJM%2Bj%2BT6oF%2BnhEMMyn%2Fsd332833Ykfl7%2FktgViuCwa1YUAbAl3YyNiw3jCUNA0AyjxbgObDQMId5wavzid%2BISvXoTDij9HEBjqkATxrZAAxPuOmQt3YqLx910rWQl4mJ%2BvKuCP7BtJA3N2Iq31BE34MVJ%2Fet2b%2BizdckJhD9dhi%2Fi7FdMLU%2FwPX6DQLxwzurjG8r%2BD7Z8jhXzYenNB66AujGYVicyuu8WjY2zxbyBpNt6qTfah0C4w1CXcMr5pUwvcD%2Bv7pxcc1k5wQT3csvFBPoMNqGptvuh0uw%2FUId5V4m77OZ%2FfE3cXDn%2BUBgskc&X-Amz-Signature=105f900bbcf7591c16de94ea916f48da2e41958934c392ffe6c8c95067f78dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5CPKI3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCI6tCas8bFKt3jt%2F%2FhJF08ILopTo1R6MmUxYLWSgCXHgIgVAY5hPzlPOFTC1lux1VN7go5B783KtUfy7DafgJXHMsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQfz00TKT6qrd74xCrcA%2BETpiXuCfRmhG7ommSqqSu1qgBUqxHUaKtYgUz6mSD3D7%2B3Yg2GNgMCsjpLg54oYMi2B%2BYZ04CKBQRn4MVrKzpvK9n%2BiNf4UlCTCS%2BeW4RulzRMpLwWDBO6mrrrD3uHnh8VigJSzuO8hdtzfX2hhpEocCuOfLXnd%2FXPKD%2FwV24OHKvtER00SJ6pQjaZ6len3ef%2BGKnWPqbsYho6Y6UDLHdgFZGodIljQOhSYqiXLHm7NFOgRj6ZjSVGyUEGh8HZ2fZA9ZkTL0c7WlARPdew200f1ZZyS9g0XF3FSYDN5JEawAOB7ONLlCWK97C91DV5fJ3ZUK%2BMszdLyKZKqgk8VEZiw7a9XJLhkt1y6tYu6l0bTpTySh1Ly%2BF0UD4f7FP9mAdbg2cDjJEFM4PrcwVGJv9%2FPtnasL8xumtkhxm0CBlZSIPMTO3R3X%2FpBfvqeHQJT8MBKzHbTFx9K74h4UgqAHdV0PBOmgzrErNO3e6GMm4M1P9YbtwuhgQ%2FEA8LBvhhW4O5oP%2BolSdH43LlTVMgDOlijo9AP0qrLHsvquA3nllhnk%2FGaiyDM3YyDLPnGHIanjDPihLx8%2BS9WHV0%2BpN03rw8Z8LjrQ91LksTL4csDNgMMI3xEyIDFUjl04Q1MMyQ0cQGOqUBASQNjPREJVChO%2BmvguK0Ngcq0R9Wk9dDrop606ryVjBjrNPfuphcruKKfH%2BeeyEtw2SrZea1pPqq29DGmBo8olP9Ob3E5zIua5UnBm%2F45HxoA228Ak3lZ8xIT2Qh2o1e3qnLN0%2BFahNo9yimhUK0veNu19nWV9N7GZ%2BU2SjwANg275XOavfcH4HkymYKJMC1IR%2FfE0cOSWWqQzu3Vf3xCsRhxvt7&X-Amz-Signature=f611066a4df97b188346356f0903e79d30fb812a63d42e124366a0fe0ae3bbe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5CPKI3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCI6tCas8bFKt3jt%2F%2FhJF08ILopTo1R6MmUxYLWSgCXHgIgVAY5hPzlPOFTC1lux1VN7go5B783KtUfy7DafgJXHMsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQfz00TKT6qrd74xCrcA%2BETpiXuCfRmhG7ommSqqSu1qgBUqxHUaKtYgUz6mSD3D7%2B3Yg2GNgMCsjpLg54oYMi2B%2BYZ04CKBQRn4MVrKzpvK9n%2BiNf4UlCTCS%2BeW4RulzRMpLwWDBO6mrrrD3uHnh8VigJSzuO8hdtzfX2hhpEocCuOfLXnd%2FXPKD%2FwV24OHKvtER00SJ6pQjaZ6len3ef%2BGKnWPqbsYho6Y6UDLHdgFZGodIljQOhSYqiXLHm7NFOgRj6ZjSVGyUEGh8HZ2fZA9ZkTL0c7WlARPdew200f1ZZyS9g0XF3FSYDN5JEawAOB7ONLlCWK97C91DV5fJ3ZUK%2BMszdLyKZKqgk8VEZiw7a9XJLhkt1y6tYu6l0bTpTySh1Ly%2BF0UD4f7FP9mAdbg2cDjJEFM4PrcwVGJv9%2FPtnasL8xumtkhxm0CBlZSIPMTO3R3X%2FpBfvqeHQJT8MBKzHbTFx9K74h4UgqAHdV0PBOmgzrErNO3e6GMm4M1P9YbtwuhgQ%2FEA8LBvhhW4O5oP%2BolSdH43LlTVMgDOlijo9AP0qrLHsvquA3nllhnk%2FGaiyDM3YyDLPnGHIanjDPihLx8%2BS9WHV0%2BpN03rw8Z8LjrQ91LksTL4csDNgMMI3xEyIDFUjl04Q1MMyQ0cQGOqUBASQNjPREJVChO%2BmvguK0Ngcq0R9Wk9dDrop606ryVjBjrNPfuphcruKKfH%2BeeyEtw2SrZea1pPqq29DGmBo8olP9Ob3E5zIua5UnBm%2F45HxoA228Ak3lZ8xIT2Qh2o1e3qnLN0%2BFahNo9yimhUK0veNu19nWV9N7GZ%2BU2SjwANg275XOavfcH4HkymYKJMC1IR%2FfE0cOSWWqQzu3Vf3xCsRhxvt7&X-Amz-Signature=ba8e964e5b384142fcfb5d4a8a8777b5b3f639980433d208c8b466cfe184251c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5CPKI3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCI6tCas8bFKt3jt%2F%2FhJF08ILopTo1R6MmUxYLWSgCXHgIgVAY5hPzlPOFTC1lux1VN7go5B783KtUfy7DafgJXHMsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQfz00TKT6qrd74xCrcA%2BETpiXuCfRmhG7ommSqqSu1qgBUqxHUaKtYgUz6mSD3D7%2B3Yg2GNgMCsjpLg54oYMi2B%2BYZ04CKBQRn4MVrKzpvK9n%2BiNf4UlCTCS%2BeW4RulzRMpLwWDBO6mrrrD3uHnh8VigJSzuO8hdtzfX2hhpEocCuOfLXnd%2FXPKD%2FwV24OHKvtER00SJ6pQjaZ6len3ef%2BGKnWPqbsYho6Y6UDLHdgFZGodIljQOhSYqiXLHm7NFOgRj6ZjSVGyUEGh8HZ2fZA9ZkTL0c7WlARPdew200f1ZZyS9g0XF3FSYDN5JEawAOB7ONLlCWK97C91DV5fJ3ZUK%2BMszdLyKZKqgk8VEZiw7a9XJLhkt1y6tYu6l0bTpTySh1Ly%2BF0UD4f7FP9mAdbg2cDjJEFM4PrcwVGJv9%2FPtnasL8xumtkhxm0CBlZSIPMTO3R3X%2FpBfvqeHQJT8MBKzHbTFx9K74h4UgqAHdV0PBOmgzrErNO3e6GMm4M1P9YbtwuhgQ%2FEA8LBvhhW4O5oP%2BolSdH43LlTVMgDOlijo9AP0qrLHsvquA3nllhnk%2FGaiyDM3YyDLPnGHIanjDPihLx8%2BS9WHV0%2BpN03rw8Z8LjrQ91LksTL4csDNgMMI3xEyIDFUjl04Q1MMyQ0cQGOqUBASQNjPREJVChO%2BmvguK0Ngcq0R9Wk9dDrop606ryVjBjrNPfuphcruKKfH%2BeeyEtw2SrZea1pPqq29DGmBo8olP9Ob3E5zIua5UnBm%2F45HxoA228Ak3lZ8xIT2Qh2o1e3qnLN0%2BFahNo9yimhUK0veNu19nWV9N7GZ%2BU2SjwANg275XOavfcH4HkymYKJMC1IR%2FfE0cOSWWqQzu3Vf3xCsRhxvt7&X-Amz-Signature=c1a11ece038f37cc551951da031db959230f99676794d6dc4eafc3c752bbd5c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5CPKI3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCI6tCas8bFKt3jt%2F%2FhJF08ILopTo1R6MmUxYLWSgCXHgIgVAY5hPzlPOFTC1lux1VN7go5B783KtUfy7DafgJXHMsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQfz00TKT6qrd74xCrcA%2BETpiXuCfRmhG7ommSqqSu1qgBUqxHUaKtYgUz6mSD3D7%2B3Yg2GNgMCsjpLg54oYMi2B%2BYZ04CKBQRn4MVrKzpvK9n%2BiNf4UlCTCS%2BeW4RulzRMpLwWDBO6mrrrD3uHnh8VigJSzuO8hdtzfX2hhpEocCuOfLXnd%2FXPKD%2FwV24OHKvtER00SJ6pQjaZ6len3ef%2BGKnWPqbsYho6Y6UDLHdgFZGodIljQOhSYqiXLHm7NFOgRj6ZjSVGyUEGh8HZ2fZA9ZkTL0c7WlARPdew200f1ZZyS9g0XF3FSYDN5JEawAOB7ONLlCWK97C91DV5fJ3ZUK%2BMszdLyKZKqgk8VEZiw7a9XJLhkt1y6tYu6l0bTpTySh1Ly%2BF0UD4f7FP9mAdbg2cDjJEFM4PrcwVGJv9%2FPtnasL8xumtkhxm0CBlZSIPMTO3R3X%2FpBfvqeHQJT8MBKzHbTFx9K74h4UgqAHdV0PBOmgzrErNO3e6GMm4M1P9YbtwuhgQ%2FEA8LBvhhW4O5oP%2BolSdH43LlTVMgDOlijo9AP0qrLHsvquA3nllhnk%2FGaiyDM3YyDLPnGHIanjDPihLx8%2BS9WHV0%2BpN03rw8Z8LjrQ91LksTL4csDNgMMI3xEyIDFUjl04Q1MMyQ0cQGOqUBASQNjPREJVChO%2BmvguK0Ngcq0R9Wk9dDrop606ryVjBjrNPfuphcruKKfH%2BeeyEtw2SrZea1pPqq29DGmBo8olP9Ob3E5zIua5UnBm%2F45HxoA228Ak3lZ8xIT2Qh2o1e3qnLN0%2BFahNo9yimhUK0veNu19nWV9N7GZ%2BU2SjwANg275XOavfcH4HkymYKJMC1IR%2FfE0cOSWWqQzu3Vf3xCsRhxvt7&X-Amz-Signature=28a87f72eaca0617b9f080e5d3b14f0dac19d2591ab765ce94cb8d21cd8e044c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5CPKI3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCI6tCas8bFKt3jt%2F%2FhJF08ILopTo1R6MmUxYLWSgCXHgIgVAY5hPzlPOFTC1lux1VN7go5B783KtUfy7DafgJXHMsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQfz00TKT6qrd74xCrcA%2BETpiXuCfRmhG7ommSqqSu1qgBUqxHUaKtYgUz6mSD3D7%2B3Yg2GNgMCsjpLg54oYMi2B%2BYZ04CKBQRn4MVrKzpvK9n%2BiNf4UlCTCS%2BeW4RulzRMpLwWDBO6mrrrD3uHnh8VigJSzuO8hdtzfX2hhpEocCuOfLXnd%2FXPKD%2FwV24OHKvtER00SJ6pQjaZ6len3ef%2BGKnWPqbsYho6Y6UDLHdgFZGodIljQOhSYqiXLHm7NFOgRj6ZjSVGyUEGh8HZ2fZA9ZkTL0c7WlARPdew200f1ZZyS9g0XF3FSYDN5JEawAOB7ONLlCWK97C91DV5fJ3ZUK%2BMszdLyKZKqgk8VEZiw7a9XJLhkt1y6tYu6l0bTpTySh1Ly%2BF0UD4f7FP9mAdbg2cDjJEFM4PrcwVGJv9%2FPtnasL8xumtkhxm0CBlZSIPMTO3R3X%2FpBfvqeHQJT8MBKzHbTFx9K74h4UgqAHdV0PBOmgzrErNO3e6GMm4M1P9YbtwuhgQ%2FEA8LBvhhW4O5oP%2BolSdH43LlTVMgDOlijo9AP0qrLHsvquA3nllhnk%2FGaiyDM3YyDLPnGHIanjDPihLx8%2BS9WHV0%2BpN03rw8Z8LjrQ91LksTL4csDNgMMI3xEyIDFUjl04Q1MMyQ0cQGOqUBASQNjPREJVChO%2BmvguK0Ngcq0R9Wk9dDrop606ryVjBjrNPfuphcruKKfH%2BeeyEtw2SrZea1pPqq29DGmBo8olP9Ob3E5zIua5UnBm%2F45HxoA228Ak3lZ8xIT2Qh2o1e3qnLN0%2BFahNo9yimhUK0veNu19nWV9N7GZ%2BU2SjwANg275XOavfcH4HkymYKJMC1IR%2FfE0cOSWWqQzu3Vf3xCsRhxvt7&X-Amz-Signature=a3f8bc0552ee64258928560842de519ff17c3c8b1229439e51d30b0ec1e41e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5CPKI3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCI6tCas8bFKt3jt%2F%2FhJF08ILopTo1R6MmUxYLWSgCXHgIgVAY5hPzlPOFTC1lux1VN7go5B783KtUfy7DafgJXHMsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQfz00TKT6qrd74xCrcA%2BETpiXuCfRmhG7ommSqqSu1qgBUqxHUaKtYgUz6mSD3D7%2B3Yg2GNgMCsjpLg54oYMi2B%2BYZ04CKBQRn4MVrKzpvK9n%2BiNf4UlCTCS%2BeW4RulzRMpLwWDBO6mrrrD3uHnh8VigJSzuO8hdtzfX2hhpEocCuOfLXnd%2FXPKD%2FwV24OHKvtER00SJ6pQjaZ6len3ef%2BGKnWPqbsYho6Y6UDLHdgFZGodIljQOhSYqiXLHm7NFOgRj6ZjSVGyUEGh8HZ2fZA9ZkTL0c7WlARPdew200f1ZZyS9g0XF3FSYDN5JEawAOB7ONLlCWK97C91DV5fJ3ZUK%2BMszdLyKZKqgk8VEZiw7a9XJLhkt1y6tYu6l0bTpTySh1Ly%2BF0UD4f7FP9mAdbg2cDjJEFM4PrcwVGJv9%2FPtnasL8xumtkhxm0CBlZSIPMTO3R3X%2FpBfvqeHQJT8MBKzHbTFx9K74h4UgqAHdV0PBOmgzrErNO3e6GMm4M1P9YbtwuhgQ%2FEA8LBvhhW4O5oP%2BolSdH43LlTVMgDOlijo9AP0qrLHsvquA3nllhnk%2FGaiyDM3YyDLPnGHIanjDPihLx8%2BS9WHV0%2BpN03rw8Z8LjrQ91LksTL4csDNgMMI3xEyIDFUjl04Q1MMyQ0cQGOqUBASQNjPREJVChO%2BmvguK0Ngcq0R9Wk9dDrop606ryVjBjrNPfuphcruKKfH%2BeeyEtw2SrZea1pPqq29DGmBo8olP9Ob3E5zIua5UnBm%2F45HxoA228Ak3lZ8xIT2Qh2o1e3qnLN0%2BFahNo9yimhUK0veNu19nWV9N7GZ%2BU2SjwANg275XOavfcH4HkymYKJMC1IR%2FfE0cOSWWqQzu3Vf3xCsRhxvt7&X-Amz-Signature=56a5b5642a4e89df6bce1a7efeb868e885b7b6c11b10762b636eec08a185e38e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5CPKI3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCI6tCas8bFKt3jt%2F%2FhJF08ILopTo1R6MmUxYLWSgCXHgIgVAY5hPzlPOFTC1lux1VN7go5B783KtUfy7DafgJXHMsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQfz00TKT6qrd74xCrcA%2BETpiXuCfRmhG7ommSqqSu1qgBUqxHUaKtYgUz6mSD3D7%2B3Yg2GNgMCsjpLg54oYMi2B%2BYZ04CKBQRn4MVrKzpvK9n%2BiNf4UlCTCS%2BeW4RulzRMpLwWDBO6mrrrD3uHnh8VigJSzuO8hdtzfX2hhpEocCuOfLXnd%2FXPKD%2FwV24OHKvtER00SJ6pQjaZ6len3ef%2BGKnWPqbsYho6Y6UDLHdgFZGodIljQOhSYqiXLHm7NFOgRj6ZjSVGyUEGh8HZ2fZA9ZkTL0c7WlARPdew200f1ZZyS9g0XF3FSYDN5JEawAOB7ONLlCWK97C91DV5fJ3ZUK%2BMszdLyKZKqgk8VEZiw7a9XJLhkt1y6tYu6l0bTpTySh1Ly%2BF0UD4f7FP9mAdbg2cDjJEFM4PrcwVGJv9%2FPtnasL8xumtkhxm0CBlZSIPMTO3R3X%2FpBfvqeHQJT8MBKzHbTFx9K74h4UgqAHdV0PBOmgzrErNO3e6GMm4M1P9YbtwuhgQ%2FEA8LBvhhW4O5oP%2BolSdH43LlTVMgDOlijo9AP0qrLHsvquA3nllhnk%2FGaiyDM3YyDLPnGHIanjDPihLx8%2BS9WHV0%2BpN03rw8Z8LjrQ91LksTL4csDNgMMI3xEyIDFUjl04Q1MMyQ0cQGOqUBASQNjPREJVChO%2BmvguK0Ngcq0R9Wk9dDrop606ryVjBjrNPfuphcruKKfH%2BeeyEtw2SrZea1pPqq29DGmBo8olP9Ob3E5zIua5UnBm%2F45HxoA228Ak3lZ8xIT2Qh2o1e3qnLN0%2BFahNo9yimhUK0veNu19nWV9N7GZ%2BU2SjwANg275XOavfcH4HkymYKJMC1IR%2FfE0cOSWWqQzu3Vf3xCsRhxvt7&X-Amz-Signature=c1a11ece038f37cc551951da031db959230f99676794d6dc4eafc3c752bbd5c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5CPKI3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCI6tCas8bFKt3jt%2F%2FhJF08ILopTo1R6MmUxYLWSgCXHgIgVAY5hPzlPOFTC1lux1VN7go5B783KtUfy7DafgJXHMsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQfz00TKT6qrd74xCrcA%2BETpiXuCfRmhG7ommSqqSu1qgBUqxHUaKtYgUz6mSD3D7%2B3Yg2GNgMCsjpLg54oYMi2B%2BYZ04CKBQRn4MVrKzpvK9n%2BiNf4UlCTCS%2BeW4RulzRMpLwWDBO6mrrrD3uHnh8VigJSzuO8hdtzfX2hhpEocCuOfLXnd%2FXPKD%2FwV24OHKvtER00SJ6pQjaZ6len3ef%2BGKnWPqbsYho6Y6UDLHdgFZGodIljQOhSYqiXLHm7NFOgRj6ZjSVGyUEGh8HZ2fZA9ZkTL0c7WlARPdew200f1ZZyS9g0XF3FSYDN5JEawAOB7ONLlCWK97C91DV5fJ3ZUK%2BMszdLyKZKqgk8VEZiw7a9XJLhkt1y6tYu6l0bTpTySh1Ly%2BF0UD4f7FP9mAdbg2cDjJEFM4PrcwVGJv9%2FPtnasL8xumtkhxm0CBlZSIPMTO3R3X%2FpBfvqeHQJT8MBKzHbTFx9K74h4UgqAHdV0PBOmgzrErNO3e6GMm4M1P9YbtwuhgQ%2FEA8LBvhhW4O5oP%2BolSdH43LlTVMgDOlijo9AP0qrLHsvquA3nllhnk%2FGaiyDM3YyDLPnGHIanjDPihLx8%2BS9WHV0%2BpN03rw8Z8LjrQ91LksTL4csDNgMMI3xEyIDFUjl04Q1MMyQ0cQGOqUBASQNjPREJVChO%2BmvguK0Ngcq0R9Wk9dDrop606ryVjBjrNPfuphcruKKfH%2BeeyEtw2SrZea1pPqq29DGmBo8olP9Ob3E5zIua5UnBm%2F45HxoA228Ak3lZ8xIT2Qh2o1e3qnLN0%2BFahNo9yimhUK0veNu19nWV9N7GZ%2BU2SjwANg275XOavfcH4HkymYKJMC1IR%2FfE0cOSWWqQzu3Vf3xCsRhxvt7&X-Amz-Signature=b252642aa791360dd4d8944777626cabb760181a4ebc0d336204fb4ddacfe695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5CPKI3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCI6tCas8bFKt3jt%2F%2FhJF08ILopTo1R6MmUxYLWSgCXHgIgVAY5hPzlPOFTC1lux1VN7go5B783KtUfy7DafgJXHMsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQfz00TKT6qrd74xCrcA%2BETpiXuCfRmhG7ommSqqSu1qgBUqxHUaKtYgUz6mSD3D7%2B3Yg2GNgMCsjpLg54oYMi2B%2BYZ04CKBQRn4MVrKzpvK9n%2BiNf4UlCTCS%2BeW4RulzRMpLwWDBO6mrrrD3uHnh8VigJSzuO8hdtzfX2hhpEocCuOfLXnd%2FXPKD%2FwV24OHKvtER00SJ6pQjaZ6len3ef%2BGKnWPqbsYho6Y6UDLHdgFZGodIljQOhSYqiXLHm7NFOgRj6ZjSVGyUEGh8HZ2fZA9ZkTL0c7WlARPdew200f1ZZyS9g0XF3FSYDN5JEawAOB7ONLlCWK97C91DV5fJ3ZUK%2BMszdLyKZKqgk8VEZiw7a9XJLhkt1y6tYu6l0bTpTySh1Ly%2BF0UD4f7FP9mAdbg2cDjJEFM4PrcwVGJv9%2FPtnasL8xumtkhxm0CBlZSIPMTO3R3X%2FpBfvqeHQJT8MBKzHbTFx9K74h4UgqAHdV0PBOmgzrErNO3e6GMm4M1P9YbtwuhgQ%2FEA8LBvhhW4O5oP%2BolSdH43LlTVMgDOlijo9AP0qrLHsvquA3nllhnk%2FGaiyDM3YyDLPnGHIanjDPihLx8%2BS9WHV0%2BpN03rw8Z8LjrQ91LksTL4csDNgMMI3xEyIDFUjl04Q1MMyQ0cQGOqUBASQNjPREJVChO%2BmvguK0Ngcq0R9Wk9dDrop606ryVjBjrNPfuphcruKKfH%2BeeyEtw2SrZea1pPqq29DGmBo8olP9Ob3E5zIua5UnBm%2F45HxoA228Ak3lZ8xIT2Qh2o1e3qnLN0%2BFahNo9yimhUK0veNu19nWV9N7GZ%2BU2SjwANg275XOavfcH4HkymYKJMC1IR%2FfE0cOSWWqQzu3Vf3xCsRhxvt7&X-Amz-Signature=2de8a885566bcc041529da2a6d08e5b7e6fbf2d535a59183ff8863c862465d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5CPKI3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCI6tCas8bFKt3jt%2F%2FhJF08ILopTo1R6MmUxYLWSgCXHgIgVAY5hPzlPOFTC1lux1VN7go5B783KtUfy7DafgJXHMsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQfz00TKT6qrd74xCrcA%2BETpiXuCfRmhG7ommSqqSu1qgBUqxHUaKtYgUz6mSD3D7%2B3Yg2GNgMCsjpLg54oYMi2B%2BYZ04CKBQRn4MVrKzpvK9n%2BiNf4UlCTCS%2BeW4RulzRMpLwWDBO6mrrrD3uHnh8VigJSzuO8hdtzfX2hhpEocCuOfLXnd%2FXPKD%2FwV24OHKvtER00SJ6pQjaZ6len3ef%2BGKnWPqbsYho6Y6UDLHdgFZGodIljQOhSYqiXLHm7NFOgRj6ZjSVGyUEGh8HZ2fZA9ZkTL0c7WlARPdew200f1ZZyS9g0XF3FSYDN5JEawAOB7ONLlCWK97C91DV5fJ3ZUK%2BMszdLyKZKqgk8VEZiw7a9XJLhkt1y6tYu6l0bTpTySh1Ly%2BF0UD4f7FP9mAdbg2cDjJEFM4PrcwVGJv9%2FPtnasL8xumtkhxm0CBlZSIPMTO3R3X%2FpBfvqeHQJT8MBKzHbTFx9K74h4UgqAHdV0PBOmgzrErNO3e6GMm4M1P9YbtwuhgQ%2FEA8LBvhhW4O5oP%2BolSdH43LlTVMgDOlijo9AP0qrLHsvquA3nllhnk%2FGaiyDM3YyDLPnGHIanjDPihLx8%2BS9WHV0%2BpN03rw8Z8LjrQ91LksTL4csDNgMMI3xEyIDFUjl04Q1MMyQ0cQGOqUBASQNjPREJVChO%2BmvguK0Ngcq0R9Wk9dDrop606ryVjBjrNPfuphcruKKfH%2BeeyEtw2SrZea1pPqq29DGmBo8olP9Ob3E5zIua5UnBm%2F45HxoA228Ak3lZ8xIT2Qh2o1e3qnLN0%2BFahNo9yimhUK0veNu19nWV9N7GZ%2BU2SjwANg275XOavfcH4HkymYKJMC1IR%2FfE0cOSWWqQzu3Vf3xCsRhxvt7&X-Amz-Signature=96809c241ea4bfc8b4cb91a46c7472b38fb6eb2911291f90971b69ad3f33d531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
