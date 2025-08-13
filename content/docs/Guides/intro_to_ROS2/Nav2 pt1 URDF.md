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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=8b9514f0b9bef9d68d3f96fbdbfdb94955e538874271a21a8cc2fea16c6df849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=2b0dd1fac3aebce7a1de3cdc7cfa7f2a0720bd30bde5fd3fa24d632b03c8f49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=7618c348bc6a261fbb505ff68090fc96fb00683fe7b9c26439fce335ad914dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=9059794d38269d7316a514cf3c194f3f14fc93c2a10b62cb15aab28a049981c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=579c9e27e876d0149f758bfd55d0a7788ae7254d64a185f82bf1e9589305cd9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=2333ce6ab87618238bfa75d33fe871ae78eb8569ebaf65f8be40c770b0fe9d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=722b292b2d2a3d6896e756ece7e5dca8f1738b7d86ee695c897ac82e5751e849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=202e39ec870532713f6a8ca800b6bd6986d560ee0dce0e230868dd0530e4be9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=3657f488e207ef730276c7fca5b29ae783c47c5716ee3c51a010a12d966d3b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=7de63d373e08eea1653128ab539be6d0db59534ab84b00b8773d26cd003f5fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE4ZBZ7W%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFMAO19R4WD00XGx3y9dK9s0mhOPuO4%2BVIUBchK6YWkAIhAOjbIOi0%2FOAawXY0VJ5RioeTs9or4w3RpZkrdMaU5wIqKv8DCCMQABoMNjM3NDIzMTgzODA1IgzwXyH8B5UTQrOSDHAq3APA%2FZcUZeWh1d2eMrXL%2FWp%2BvLuNGm4O3VU%2FYLftF2ygo5BHVQSIcUgP38%2FJ7PO2e9hk4Z%2FcR%2Bgmup7xDmCtyKPsl0zEf5vK7mV8%2BcfPww6I0Dr3v%2BaK62%2FcKctoAmu17AFJIZbQpN%2FlHGzOeU7RRtvDfHkL33vqS6cV5u9Ii8p%2F1sfYNWViNGzf3hGy4MnmqY6iut9GD2JKp%2B4JU%2BLXL2JitQZOQvQKNJHa1mmzxesa97zZmCU79fSdQGZgnvLeTbz3udVWPwygZ02Tz%2BBCjMbx5V5qypcOUnCCpaTP%2BEdf742o0JaomAHl0vt6KD1bIavznyPLIgielsKjAhi5IIBXodNRKi09N41iADXKp74i21MreerKzoAT6An63juRwGhfmhsjHrbJGrevCy8hMn5wECHs79JLyCLgX%2Bs8b0xjSNtXWgP10iWfsKSdyK0hIJoiBBeXH2KtLecO9vOshgCzqkajRH48IixKr4h2gthNrOyPxfhgv%2BWm20oW4evibSMxtIr88rU2MbCKnZBNyMZipZbnWhJ8Cq0fnHA5cfaip6Mc5FtaToQ35aQNhjGtI1WZysap3Mqt9cJPFxdL1VvYJ%2BKUydd4clHMwsrDRWMWk6MLptMYKfB%2BjKYv0TDE2u%2FEBjqkAXdpptZpQmRYBS5SOOLWv%2FykxZWbFi0nPpbXjFvn3Ang4CBGQXoivI46GvaRwr5jlSh8BueYTjM9LWRit25x623c3D27QqW282fb%2BfD2p%2FaXf5fO%2FGapvwVRgDIsbkXkxxnKb7yyKKD9oY5er7qITuH15cXTP%2F2b6nelsztm7YDDsuvRTvWmtXCIBvRiU%2B%2FH9UlHbtfMc1Iy7aZvkF%2FW%2FCGQRe5y&X-Amz-Signature=5972a5f5ab15e5cde94a57231137f9eb665cc16ff14088dfc35f5ed62f18e1d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5VTKQ5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDoF9Xqz4CQqv3n5JVlwda1Re%2Bb2tHyg93I3bPdTIKRQIgLBUWGKmcwzclJygYlmubOwr5uB%2B6zTg8utk4X8Am1XUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK9HMUUP%2FP8I9JHLSCrcA92TN1HY9mm3bdXcAhp1GMZsgj%2BsEhofH6UXo3lbegR6oPG%2BiwPEJDLS8KJ%2BIdNzHY8%2BgaTiiGE5d2ipGGTJi8QUD8Yqqc2adQpcxNx2BtwIygPjJCavU%2FeND0IGyrJxe%2FdTV3kshX3vKoCCAIt5uBWFwPlODywk1DA7HBZb9PBGVGw%2BKChINAN66G7d6uGwLQAnKIpB3KRrL2ZxJYHgLT7j%2FJXsO2PeHlK8E5MYbDXlIlAF0sgCb9pzC2SAmTTzBZGx4fHJDFUCCkfiLprlEmLJ73sK%2BVpDuwyPnuVPCsIyUgYPSlJgw5GD4U4HaK3vd8q0FAjtVM05zMM5ISJF7aPGYGYnofLFdzM0xbFwwIOBGAgiY%2Bi6vp3eGK5PzsRwVikeEgr5ULvkp4rJVljutlltQlMKcTs8y2OOJcqt50FIZlTpYgxu6adJ4F83zozqSP2n07B5RxT%2BozPChL%2BZIjK6wrxUHAD3IgaDo%2BZTIbcURNRiEiaftDIujn2sHP2gdo3%2FiUyYehPqMTxG4lHhBbEYSdzm3Z97N%2FEFj8Op%2BLieG%2BPulwrlfEAb7fLQ5XLXbyo2XZ0PAVep3bkzW0DrmCWd3FafKv%2BMSuoW04oAN96IR%2FCgwHf8sXFmcw2sMJba78QGOqUBHIm%2BMFdOKTHPqGzd1ZjMiIUDcHtWLHxMh6g58JhHIr42Xk%2FQ%2FAdzZ03jptkpL0pU91E4ESjOb5hCFgTpz1tLF19jGSVHljB2REZCbtwJ5oGMe%2FMqgt%2FG95AypgCPS2tdwzEg3WazzqAoHNfda4HYC2suPqsBLzgzXns6laRTxmRDywZOnGPDfZ5uyhL0urWaTZBreusXeNqadZjn4LZyhRuncoT0&X-Amz-Signature=0ed5ab6fb324864f035feffa0f0ab3db4d3c55e35d57d2349c60074beecd5419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6YVO3F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaN9CpAjYmArZC3gs0HCNHQbCLeRQJ%2FPk%2Bvv9m61XxDQIhAMMoHlnWEiAzltRJT6HSWYlB7wPFs8cCaYrrbymDM2VAKv8DCCMQABoMNjM3NDIzMTgzODA1IgxkKZ%2FrgNQk042tBOYq3AOnZ%2BSfkbTzrtmfuIJ8LXmFkm54lI9RjxU28%2BpSONvnvvXqdLv0LS0A%2Fslh6ypvbA0u6e7L9khR0CkoFOhEoqJUKWRzO9vchgv7ChtOChHj9C%2BnCmXisz18%2F0P0nbGJjBJWwsfCnr4L1FczG7qFaD1zpT4e2xlsJerz7f2%2B0xR1KvNFf%2F%2Fcd1%2BB7cjAPIFJeu%2FMLPE2uBziW2PpmbuZsf4fAoYkr3XuMBosDYIoj1WyiIbR9LknUJSPVuFPMbI9zSbYKU2JmBKFsMo4tT8QHsVoCMIuEp%2F1RSNpuRcwOJ91qwdPvpArxBpr50ddI2kB%2FfL%2BzLSK7rX82HceqlTa%2FIqe5qmloP5Z8TmfPXFKOI1n6sjrWs3ruU8nCGdL2Y92OiF%2FuN4VC50MCOSxC%2Bu9CpuwGafuurXUI9I2sH4tbQJ4gQZIF%2F8nf4TtuXAiwf3wb1cds2gq12XIdWfsAvHQG5MAkd8RJvH2Po9PAkYQj%2BttGiHwWvYz%2BsYOBc1zHFs70E3EU%2BMWhqElD0sS58Vd%2BTkoD4DdBOBcdg0QO98WFIHGfdMxxAWIZzVYRlQFwLsQrPzOm2k1fEdndZTPBbJFIA7ZBHshRyN5tL4hDO2cwPkAkeTye05cPG8CeV8VADCh2u%2FEBjqkAQfnj2xASnaWDO4hrhhIMYROrw72B7QTK5LYl4XH0kGBZ8UNOaZsH9TQBbUF7AZNmEZsHkQ4FvncaS2g0910w1LEivuoggVrpNmtMvdaftXvSbjy8KBqLnBZTAoJBAtkBMuk81IivwPIb2uYl2S6OdHAs1AbEPjt3Ew%2B%2FzXb%2FYsfBCoMvx3nZ%2FpVN0mGTVIdbLyAPVKVF%2FB7tSKyBcxC9TQALMuS&X-Amz-Signature=eefaf81f7f090130259bc64b0a1165d091043a02444018615e4eddae07a5b83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=d590e1e9563e8102df8e7da9d8b4fcdb543242ec0d55117da3f49b2b87d7821e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPJYABD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F1M9wFSy3gNZ4bG43Y9J1RO8yxRvRWmKmf9fgLUPdsgIhAPch9coMTDQ2gMxRWhtdGdZCsJM8u%2FR9%2F%2FM1KZAvQM4RKv8DCCMQABoMNjM3NDIzMTgzODA1IgygJArxESL2LOWyoskq3ANrzGzu3LMH8YpHGTFFwOYjSEhKHIkkvZug5kBBCiNJuqQqfP9pYffwyz%2Fqq0%2F7YY1PvhYMYRQcEFHuJUtkrULvOjGLIORqEDU4zfDSV7YA74I7Hols1tQiLHEuzf07jUK0PxgS5VPb4vt7oruJhLcmHsTJaDSvlviKtOc6D%2B3PwJSzLAk0yDZk0dy9ga4C%2FDxyBtP889XQhheWwwKVdEPJ6B4IagfdiENP1fRG0VwFXXaOsM1YknjgFP2W4wOZ5vS6QL5UFzqlOZf%2FuiHYozCosiPh9Ne1A7Ie%2FPYyyGvz6k7TLfCfG8BJlHefXcGGaMuz1fS2KY3umi%2BScHMI%2BoBrjfSvTBtZ3MLyFCNVUD1tKfEGXQJGbG8FRwG8nNV2p3vSjx4V5AdJ%2BOEbW913YfxFUpc%2BaoM1vhWXrCIl53Cj98H%2FVsozqYCCHjRbz9LuX3fV3qfHFpHuFxFh7brbiOUu62Iimv%2BC7%2BEFDJnW3b062xeY2hucgeQZNPc43F8RwDwwPv9JvmKGCM9KUaUbmRJPaCe1iIbpRj%2Bq%2FuBUjKSJffXRyV%2F3kr3VwdoFYq2VBJF%2BjWNZ80OXD%2Bd%2FWG6A5bwF9zZisc5dF%2BRX0%2BRQrkizrq8temjgV3vMA4jHGDCq2u%2FEBjqkAUS7R7o44xrMIOxKFR6nTDIxX%2FaX9K6TxbEnbXigZzp9tfkFx6I6QmQOXgT7XwOO4K3UX6t5%2FJ0EPd0YS5y832rplbquHuV8TNcrFJE9F4GBALgoZHqx0yPGRHqOKvRoTaklEUuLv06FWPVQSmWzXPktjsNNQT%2F9EGbnrUk8TwSeUOSq6IxhyekbYeOKVt4x3pKH6RF6KLvjbUSqmFsBVX%2FQ0ITX&X-Amz-Signature=93afe9d14b1b79ef322702afbbfce436edea5649939130ad6f0c99cea63f306f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=0022f960f108eba7acaa1b9c5a703831efeae65255c6b4db66aff556605f5a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQW7DWT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzUGtLrQrhJeKrJBMGTh0NRWQzxyds0%2FZY4CnKbqsQoAiBtW3VRO6qBbDGgEdJANFd9WvEOy0Cqx50wFs6FkCNXOSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMZFJzs3%2BdtMjY9C1IKtwDW%2ByVXb5dKT1lpAqX6FqlcqxJ3opj0owROLyV5NcW2eV1IXRafZXnfvgM%2FIua6Ccd%2Bjd%2Fd%2BQiS5CwOThG92l5PxzJV9EGLV2%2BTAgIbvoL1TBpkhwjtypfCdEdyyc0Qq%2BTGpu6doD7oQbV%2F203U%2BYpRUh4%2FXAlGFQECCF2nsNYX0FxOl3kk65D0yM6P9Ti2vnaT8DX4S1M8wbCC43rLEEqP8nMkhRJmgFQxMoLgg1tV4Nh2l0WlGhgHa%2FvxMSmyfhL0Z5JKA1D9g6aOueUVteB2wGmDaujv5Q7KEHV8ZiGJ7mJ8weRkqYX3TcvmXJeAdWFqMBoh%2BpFZD0C%2FeCC8ZBfbFLg2e%2BRqkkTkqFGt4lgVPTmIDXBbIai93CkW1lNS5Ec0SlBQGVJtlqOSe8dVtGjUyP8lJ30SKaT%2BbMRnz%2FhBpuDuh9J4wlNeK7yxohqxXitTGF5Dpn5OFTUUv2jLaPaF%2BdZR40yZdagqE3yf1m01HEVFLeQHhlaWbnYNJZEIG7eq0%2BCslc9JsnQ%2FNr2lZjamvATIzBpMtuFJaI60iUkJEayRHFdObHywtgm8CRyM0XeEGixopZZSuHNAmQh3gFcq8V4KRANPsVac1NSwlivKnsbWns8f8Oaf8YtZPAw69rvxAY6pgEllgry9B38oW1mW8HGOfjVz0SufG6h7Qf50pkfDk3gq8N6XXEvpGZn0aYxrHwpGXk53qE44dMYfSVvqoz9fei9x3eZ94Rj9eVYdSzuUzyrPn6izJLHeKd%2FV0xk%2Fyrc06OnYYoRQPXqV35tWpJR7GvaORh8M6eeh9vKZQJYjno4rg04nlQdiiSvZ64T5sHI9V%2BHTq%2BWQ0M9L7VwSaZpGtb9WFJ5vS5y&X-Amz-Signature=e5c9213b7d5f2c1f1fa34f25699d9dcf43ab890297101d020de62f1424ad2569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=976406d18541f42e4ad56e127ff41b24d93b724ad2e428b99d510808976f82ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ML6XRXK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIE2ECp1NQzos%2BQfy7UVhdExcLCoWkg%2F4jNFtSzJjVRAIgb5JlF0%2BS%2FzG%2BvNT0haDSWIjNT5p6gzfCdnABvJGTi4wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGSzLYJKBcbBuMPgdircA5H%2FiUXte4SRwmjw65kNUAei6uJqRbmQ7msPNFlqkuqOWxUciQfVF8Jj5%2F9ozifP2JlJmDWlpLEz%2F8GINSiCtOJZtpa%2Fn7wVf%2Fk%2BwT5BWAETROQ0Y1n4YUNqHJiGN9GKUIdWr9l5z2nn4hiXMcrAmCNRP9aKqG2vkCnyn2yf5mea9VzQyUSccZpGqirz0uDb0ap0%2Fks%2FdkzG%2FcyTmBhfW%2BaK8JnC63qrBMnGUCi7kB%2BgfFwmH4boCdIAYseaZGffx%2Ft4zBlOKCiX6UIGEe%2B4FI%2BBf2Pd1OSXdg6gWUzRyMSxqdH%2BsYS1JW%2F276ghBAm1J94uk5Vg3TDnJYPhVdHHKxYQJXUDCfFt3iQTW%2BVS52tWMPnoKL%2BZt93gjSP8BrQZhsUzk3dVus75%2FkxeP4foVqc8DdBqjGkHxXof4C980cX%2BWUecS%2BZ5BwnuBZRpVbDuMd6AMEN8kkGUyHQGE7pRX1YR83HsZNSaYVolk3Mxb6p%2B9tV7I97%2BfetDZtBbfZvRM%2FV6ex%2FFeCU5aM8ibgsBi%2BSYodQ%2BCGzLXsIK8f8Asg%2BrLsRmNQANdpk24qWtp2OXKZsz5JkjaS97myXF9LkKvXKBE9rQXBj8h0FUAbQt42wh7K8afLiQqiXQNdAdMJLa78QGOqUBt3sUL3Q2d9IFnw0jG4CAR2a%2BQwPN2rnQ%2BfBHf9mcNYquHhPkQgEgAfLmI4DhrHgNwikxnxoVqyz4uJ1oDck%2BjKWkzbRcW%2B1Bk%2FKilvA32GJL7UbD3eX02aL4REOhTVVGGvp1KzaoyjNO7tTQVUxb9%2BwUvbf0blXKV04m6HNI7g7JS02zIy%2Br8wxGx5axL1L3ug9Caipi71mSknAvdMVRk4OkrKLE&X-Amz-Signature=d825faf1156422005291c86fb96449e0c112dee58a819ed87617e098d118e478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=6e205082db221049c186c411fb118921f7916b6e869ef04c884eed3d5d8cc70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GWS5OKT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPRGrMoZcfjrnO3FpuQl7jUW7CyRUFh4%2FxMw3Eu%2BAq5gIgC%2FFWWG4D5xgUQ5tslguPVFgM5%2FrWip8GuR%2FrVY%2FWfkgq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDB1eLhm7OvC9oQkG3CrcA%2FxyAPbO5He5MOqaFQud7zfUoj%2BLZiIBL6wa9P8wysAG0cAymjuo3pBTZ1VPWFGxCaYZqal6rNMWb6fHyFw3eUB1dqzBojdNVS6I7o%2Bsd1LxORreXwbfJvf89SavL4hkflkZbrmewuyx0QzBPBLP8bAgqUF%2FGYSBzUCwkk9jT4gv5h3CfUodEy2lMg7PWp8p%2BVpc%2B%2FH5%2Fn9yeK6bQiB9jS2AoBFuQVhgjCJ6OVXxiLvDJwCg8RteI0DlKXW%2BU4GLNcoRFjMVmC47Fwk9lgVadhMOAjmWG2xylWG6TnjGjOIr9Z8mCy8ksqOlxUxlivBOluzDEMRT9DGy323qNQHH0KKUpTVT4NcBmEkZSFTdNlD8JyORvsJTqutQUbBqaAomrHa%2BvTcIrp7FRa7tUm1jNZg9kZRP221R45p5N457AbjZsjEqkWq3BLsnmFDs3cWYorMLrFf5miCvqV%2BoARlXvB5jl4HkjAi6vU1a1Wob0Jvf9uLbvS2OnheCR0PXqcdbQ8lpkJSzcy7CKDumNlLaiEev3h35Zry2PWvLoBM8IeskNJRaXmEc7JteWnnTG0gVG2od1y6lVgp5LD15amyzsxdUCq6mK4LLKUgVINWQd5D2rNPOApRlz6eOPqltMJ%2Fa78QGOqUBRXbTw76uqJTfzOrnyMaNOg7te3tX5%2BF7AtFN6xoHNfFJAmqinPCcN1fojHTSr4TwrkcaY1KwT8c6BkMKyU1cSfPKl38TEbtPSrB1jswQwDno82kca9Xki%2Fxzywke8NufwN00qiy4jQKCuXwg%2FFgoZn%2BPGXs2ejN9xDOtEaJfVGKaT7NguKDWEayAWvwvh2dekuPhWMAH3ldjlOEHQlKuwqkWJ65A&X-Amz-Signature=da2095fa456610ceccb5be034b7c805a905b549e17fdc005c7363a485f9fda96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7EEREH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh80H8YmIC5Saig4V%2BKvWIxfqBstm%2BlTnK6mwbdM2j1AiEA89B5F8EeXL9aF4znKC%2FdHSA2uJ9%2FrhUTN0%2FTOtJLrgoq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDBEQrqFV4sOnJ8hCTyrcAxKNKtrLOkOES1pFbLP4z%2FfWr%2FOhqubN8oqjuOAtYo0%2FuXAF0CIUVfM1peyOsqI%2BKUw9NyM9aCHGQLCTzghaCId578MqnV%2Bqoz1KKhtBywemAaigdgGozPsZcCm8W02Vle1g91dLHS84129c1KzcKyB43Vj0o3Hd%2Brd5XbbwLUtoktu93LxXrHvL9XPdMmeE20otlfeIKRkXzvOYyJOgDnf0Jz22VeDzyf%2Btfi9Oc8iM37t%2FqmBk9JH%2FdIa%2F5WZYa6qUH3J3e%2FAFqKTdy%2FfHLJUy4%2FH5WOgyMl17DwyjE%2BxPPYqn03N4rByQ2C%2BW45J%2BUkqWSbb5Y4Autb38B0iX6JZ4XQ9l8HfLU4bZWlcdNSmSFHzLZZ5S5qaTkU900Zg%2BUJ68DQR71L0X3yenE3Hoj2lbyiFnmpIXRLy6iWuIyr8UnM0FiIwR1oWs6ro33TNSe9DluvX5krzUDIBK%2FYwo7t%2B4ibGgLjpkY0ju5%2BszOquqp%2BBO4DcvlJXbYqSl%2BeI68m%2Bekx2cA4BRKgGt%2BtB%2BErfJYQVQyC%2BG1SiKRBUkS%2FmX3c2kgMoXOc49os4hkxqyPskZvrsm%2BG%2FWgbaUZUnitRpo7TIxdF4O%2Bsycrh5agBuZWHYpymS0d5boWKVzMNzZ78QGOqUBV1bXF9khe55DonUX5O%2FokVYAFc4Srb3%2F%2FJEah0ps6%2FRxSrPo0ovnHBgXKXnMhKcJk24KZcnQ4%2FwMEmMLFuKge%2BrRq4qfm0Nn6Ea%2F9Ou36aU483fXsjz%2F6FhPnAq5oJnM1My2ZWYx0fG3tusGiiBVEuXbm1qz4IrxjKvyM%2FHJiFHIYAMK%2BmqsD4xzKdSLqY71ZX5YXwMyxbp4mrYN%2Bnn2KsuOhr2k&X-Amz-Signature=00ced01dfceed69c0c97d25611f16657d63cad55e34b34e826558388717a8366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW3P4KQX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHce90FWH8Z5mRZUfsEU1%2BUcLK%2FMd5Qqfd07GhQO3OzwIgW5Hfd0LXOOGHHp2YVTk6nWdJqlG1e8flo%2F%2FE94q7JQIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOoe%2BYoWMjV7Rd%2BWpyrcA4FeD6abGSXQT5OOO2jVDsCSQtuUdgu0PXAIHm7A36YwFZIVdf3dNqmHId36bJYkF8OqH1xhcAot%2FWQvFZqXuG1m%2FW01StfZ8Yg9YPjZ3epMteOgXYuIL%2BLHnBmFbsILJjPRvcY%2FV4DkY5CnpaEfRwQbSpn8g%2BtL978SwO8nwmCbBrkx5Diznuw3upyapv5TbcqqtPDcSAPC7BgvpeFo%2FjWGNNAvVxuxMi4SgEYTIoZO7j2aoAQAnSCzNpndKwRW7Toj%2F%2B7n2KJgrtDhMC%2FyQjlLZWOvQVjOSfO0bOf0vc9pfhOoLPYbc1PvfqmUcGSOXHzpM9gFnWXjCw1v%2FbaWceygnUsXpHMe7omOEVUPJ9Mz9xC5EOwSnHEWk1FNPYnNFPgmfmr62LVjZ6l2Iyi3bUK48k8lDduh60PrgYUaFln81slAJRiQmQ3%2B1r9hnoSooj1OfPMzZ6XXXDK4DWOltRibvZ82i%2BC%2F3bLH%2B1JsIhcZB7qnosF%2F47gQJ4ssNOkRmcqOokPo5%2BNF%2BCBq1HffIyXbUJp889KoDMStY1oy4lbbmcu%2FYrf6MZgvgPg2j89bb9a035R6Iq65PGKeeD66rZIASExjieFW%2FquK9slua2%2BGNKMrz7u7fZe6lmn%2FMODZ78QGOqUBC9%2FFcb6ibI5spxhCEeRtU6Aup7TV%2F8OWxmAxt0iaAlg1gflV1HxfRN2UakTgycf9NsKylT1Oq29phKrjFygb04OYkvDairW1zxlfbTUMX64aSnkqR%2BqvkxnhB1z1YeXPpqRbLeV5mTCeom%2FHmQ0hnEtJCOGQv0%2F9NIt1y2WQn0AuM8VtTY5zkknn%2BpcpD5YBo8ZyzNzxleJliM2v8rywdnge8tFJ&X-Amz-Signature=b61ba3c10605a051e82a9d345e51144fa1e0ec32bfbdab89242317ffcd2df8e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22AXCRM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1jDFWvKMrd0laGFmhoLYSNsVNnw8bcykg0FIRgA9xkAiBiNFQlclAMOjLhHU1CV%2B55iepYfBs6zuYoiIs%2BN7bKfir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMEZMXpmFWzpDmnTPMKtwDExa%2BhbFyQtRKTh1ifWmPaZfeU4%2Fid9PBcsBqF9SW0msqbzAgv3l7L309jqhszTDjJM5Os%2F6e1c16R9q%2BM1NghY3rMfMrqL3j58Us9O%2Fm%2Fnf319A0OELg3V0vKizpG9OPQe%2FhXCbhSENrJ6U42sPTOFpMHjLL1xn0rJlvPeXDY%2FL2E6%2FuLMrbvsFkB7QL3e0OGdwmwbRSC9MFYcmqJ1kUWDAWWbNba%2BMbjRmidJJVvzcoipp3sHyMbLUPm1izesHO5n3SjDannfhx4ygDi6VbpHOJc2J2ZfBsMA34e%2BhNWutVLbbIdusWpA8G6HLT4BbJBrREymaq6w1HrgS4gOxUAKavgsx%2B7UwTiuehwwLhZ%2B%2FhmU%2B%2FEKa2aX%2B2UjgiR2KKYz%2BE%2BkaAJH7ig1XHapPm%2F%2F1DQExcmGxdmZvyqPbw3VeSjrG%2FsOZ5BPCu7fY3BApyih7Ov6tGNWBwzeu%2Bp0VCT6TfuSnTpTI6MqkUB2F9Sins02dW5MhAaT5vfGd9YObq6wC%2F4ghikEozwMStQZeEQXMX%2FgvSQVuBzeQbZZsX6IkIE5UJbu8W4WrN1K44hYgh%2FNSCHpQqTsdV1RlImWh4KUJbp%2FVR5HuUwP38EikCjsK%2F%2FopOhDVCuCucpUwwltrvxAY6pgGpflRq83GHzqqq49peheQQE3IhULY5rCooCFRbb4EiWxHCxyBilABnSt462RTmJSTsfmdaPriW8KGchrfQPKQMhpgZiWo3lJwtUHajBU7slVOsZENqK4%2BpZy0SCpq9hPerLev5B6VEL3vLlM8otcYCIgU55bcz%2BSp6Enq6iYJvk0OPogSh2P7RAxA75keV0vUokWO91CF5SHxoyR1xPI1%2FkVvNxhqu&X-Amz-Signature=8701067cef98babe63e1d7cca24c095ae113f612ae4f9862bf1e88cbc1d81a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CGFXXP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD59XXgpEGLmFAF7gtDnYwX2K8vE06R6DZik2w1GPiHMwIgLWC7oIxEDPbyBOiB6qWSkU6KEkAMqXV6KxyHnS%2FgOakq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJNjPDeExv4uBbSmYCrcA1Kvs38D3CUbITUOenSzU4HnHBC8kyOGB8hhuuFEux3Z8KQBHUFceFNx%2B%2FPo1Z7If021whFcp0a7NPZRopUzIbmmYbV3b%2BjsDcYuk27FzUFH%2FHRZ2TqPkVCmmgYlxDdTQgehSwj%2Fwc4E9Z3EWc2%2F7VRAoiXxRLfKUjY7ErjQakIDoWWP8XvaKvgXia4BIW5j5oT3rAM1%2Br3atw2ZoNlx7D7%2FQRDeTPyErtjTC759InXwHtuHt1J%2FT3PCk%2BlBjN9gXs5LetNxCbF%2BhA2YHSP5wJrA7SJ8f9prKd6g%2F4iWgiCVS4CrIdncbR9T1x7bcdK6rxbarFGQ9Q%2BvQequhqnTTfRZNVyTnYpUNMr5gH0vIvyR1ESfIz%2FFEMLX%2FcZp9nzhKmOGgZOA79in6Nl8IAPaAPL%2FlYremUk3yqmwd36XqBW6noDEGyp%2BtTBi0Jm4j%2B5vfQOD3EAZJP6%2Fux7XbvJ99CIsFvTv3HYLcA7x%2FSRBY%2FCED9Tmx%2BdvAc1Xl7xvD9y4sR4%2F7vgtf%2Fc%2BJ5mMthCUNBNvDX4fs8CZ3JlgXl2vouNg6nAF8m%2Bm1hOV2r%2B2UCt1dtp1YxapPGL5V1bWE5p0Fi5VTYEkZM1YFiKkO%2ByYOPuLNNur6hzHgxxKxZZvMKra78QGOqUBBI6BcNpyFgGNJ5fc7EqDCknZVv%2Buw7rARIb3UmL33KXNO61Z9M9pNc1C5tZXFGdRqu8x3hGCfS0cI43LoALJ55zN4i0G6lyrU4zeoM5BvKGkzQbK1GDh9NJ3imVNz3g1zTa7t%2FcL2WydrNJwqE9e0ZNMP05iwG2oGRB0VSrktXsEeKSzgpNgLjHvaEAXn9wtXRIYgEVnceY9xXBuiuMwjaD%2BEODa&X-Amz-Signature=9b5466634d291b6f80783e6113481338beefc02c9ef1113599ed37c0503b9f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=6cbd69d6080567b4b1db1f48e82ea39c860e6036fc659abf74b5bcb6825c99f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2K6NBP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOql0YKWsOx0J1iBKtWya0VqdwrTmPl%2B2DbPD%2Bvx%2BwRgIhALCkCtHQNJq9KtzMHbRCj20j4CDLSn5Qtq6tevf4ZELGKv8DCCMQABoMNjM3NDIzMTgzODA1IgzbEYJertDUiziYso4q3AOnlTL3m4IJXIjyVQHmZHI0v3K1%2Fw7QTOChFpKS71zc7G3TcmjGz%2BgLseUXjUJn23rpeBnu%2BMCRNOmAOezg0nu7C6yve2TxUmYlpPASpNLX%2BiJRlOelBp3t51i88XmRowJra1sVD74XV%2FG7d8WqRP1237G6wolba4tsoYnTj0QwWbxhV6DfcBT%2FL0DjMOIR8lfmH3TYqInXMZnIwRtGnNU2OLJf9vRz7p7bGo%2BTv9AfpOHogU9F7NFep%2BMyStegHIj08G7QiN4LEXKa3pL1mrPenbe5qEYbpHMyNyobS%2Fw7yvabBm%2FljWJNhAF%2FLXvRwxmIZzoUSxxsurujhY5yMceXCRaexN9qRxcW9ec04eBpODVVfg3mT95mTkY3rlgTVhFueA3QmuDVOQPADRBRh92tFcrcq0rxRmQgoaCZIkuxcaBrXJbrYW2gbD6WZqFzDcBT1tjeSHw6sEhugrGFB9dMW2X%2Fidr4iZ7%2BlhDaEuhn9fC36iSd67GmNMLEg%2BeltMK64ST50ZF9v8qeoNa2LmCC4Tj8WrMT2ucOF523jHZGI66pn6jU0fZiAStm7kitPEpozCq6TkbgiD%2F0U33QTeKPOWXDAzJ8AOgP03QfC0%2BSDYsfAN%2BnhDotN%2B5Z3jDd2e%2FEBjqkAbRc1fM6HoaEMnYFboI%2BOcC7O%2FQ5khj84niFXa49YfUf9CZPL5YwQL%2Fd1dPNtXeucoJoKyJGpVNSdUvvbBnUyWj1hIWvFSdivVRCV%2FIIxLXgDYDMmU6t4gr35Qjwb0PW2G4PlYRk33UTUuZWrUztck%2FgLZ1AjKSo32cXCe4SmH9EAMU5FU3%2BnSw%2BwLNBzK1G3ktqZ6Videh9ZwlMikJZ9n0o7WOV&X-Amz-Signature=b826e7b885d832db6b4b125d614b1b33a8f8793f5a5cc81def0232bb97b9ba89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2JGRTA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfAlJFYFLIG%2FC8lg%2FmUwdYcPBpELU063gXCohoS1WIYAIhALU3SD3u0QPpXj4arHRtfQRwad78iOFfQpnaOQmej8syKv8DCCMQABoMNjM3NDIzMTgzODA1IgxGuHvpJigY5kU8%2BUIq3AMhKoao2CbzwmfmrfI8yr0dd2cmO7UKSumn%2FqwZU9gjQ5t7Mty3tgy2zi%2FDypTrfeYpil%2BrhjyxP0FuARnIqtvMRwanPoSXKEq0zZTIuQqdsK7%2FP2KnRLnoBgrrZErffwN3gl%2F4DbkOeh%2FWpdxXjGmuV2eBiY1gBf6SGahb7er%2Fn74QVDIUbJqpyz7dzApxFXRnuUwAmedPF8%2Fpzouaxhf7GMj8TaYFBpbYTpItM%2BySmdGXkbBzQQ6G1HrJvirC7St7E60DeYgSf1q3fKYwIgwOfwZ9y80jVNKwQ3eTA54xD%2BtqcFbwTng0taQa1itVRc4TvxrdP%2Byc3enJP6Y8psdynBxdGWTacQmkAqSDafuKDfPHMOhRVo9EaW0HlImAqOpQKuQBsleNoOVx1rZfCoiGQJSQnFIBq8bERfnS2AjhCHq7wS%2BOcKE3hiJNMdAqy%2BABf%2FaxZYsxdgAmLo3qnNF4WWM6FbOYxwOOV4IvMMV7dAta3eKhP1otvWnnOqR7fq1mWALGosliciyVnsP2X6br6YnBu%2FfEYLHL0Zs39cVBTS46xWqdqpPK3D%2BLkfsqtwj6RH6x0j0mksvzRTP3LxUwEZO8kaI3ypcWxlPOwVCzJNyFHlXGCrocOF1hDTDx2e%2FEBjqkAa0a2d9YrvtWalwlwp8j5JUpCVZu54NDzSZsGCW67dmozXSzrHHKx6N3T02PCDM6Xq4KiSgLB7rHmxaaOUiNeZr1zoOjhkxhVyqc7rTwMlGoOt1vpIAwBjofRYdDA9xUuyYuH98pYk0owqjUsH5K2V%2B5bnILoK%2FT9QMZB6NWLDWYxEv%2B485KYRnhZKbuUs9zZhKVaNfKcJpvEGJrPlButvmUFhbj&X-Amz-Signature=7857bd850f200cfe7952213598aa15b3eadc978f92b5b6fea6a251afaa482b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2JGRTA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfAlJFYFLIG%2FC8lg%2FmUwdYcPBpELU063gXCohoS1WIYAIhALU3SD3u0QPpXj4arHRtfQRwad78iOFfQpnaOQmej8syKv8DCCMQABoMNjM3NDIzMTgzODA1IgxGuHvpJigY5kU8%2BUIq3AMhKoao2CbzwmfmrfI8yr0dd2cmO7UKSumn%2FqwZU9gjQ5t7Mty3tgy2zi%2FDypTrfeYpil%2BrhjyxP0FuARnIqtvMRwanPoSXKEq0zZTIuQqdsK7%2FP2KnRLnoBgrrZErffwN3gl%2F4DbkOeh%2FWpdxXjGmuV2eBiY1gBf6SGahb7er%2Fn74QVDIUbJqpyz7dzApxFXRnuUwAmedPF8%2Fpzouaxhf7GMj8TaYFBpbYTpItM%2BySmdGXkbBzQQ6G1HrJvirC7St7E60DeYgSf1q3fKYwIgwOfwZ9y80jVNKwQ3eTA54xD%2BtqcFbwTng0taQa1itVRc4TvxrdP%2Byc3enJP6Y8psdynBxdGWTacQmkAqSDafuKDfPHMOhRVo9EaW0HlImAqOpQKuQBsleNoOVx1rZfCoiGQJSQnFIBq8bERfnS2AjhCHq7wS%2BOcKE3hiJNMdAqy%2BABf%2FaxZYsxdgAmLo3qnNF4WWM6FbOYxwOOV4IvMMV7dAta3eKhP1otvWnnOqR7fq1mWALGosliciyVnsP2X6br6YnBu%2FfEYLHL0Zs39cVBTS46xWqdqpPK3D%2BLkfsqtwj6RH6x0j0mksvzRTP3LxUwEZO8kaI3ypcWxlPOwVCzJNyFHlXGCrocOF1hDTDx2e%2FEBjqkAa0a2d9YrvtWalwlwp8j5JUpCVZu54NDzSZsGCW67dmozXSzrHHKx6N3T02PCDM6Xq4KiSgLB7rHmxaaOUiNeZr1zoOjhkxhVyqc7rTwMlGoOt1vpIAwBjofRYdDA9xUuyYuH98pYk0owqjUsH5K2V%2B5bnILoK%2FT9QMZB6NWLDWYxEv%2B485KYRnhZKbuUs9zZhKVaNfKcJpvEGJrPlButvmUFhbj&X-Amz-Signature=74a2095ca83134a227849dafee526a52e5f7f72a9b2e279df53f6d8bcb4451cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2JGRTA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfAlJFYFLIG%2FC8lg%2FmUwdYcPBpELU063gXCohoS1WIYAIhALU3SD3u0QPpXj4arHRtfQRwad78iOFfQpnaOQmej8syKv8DCCMQABoMNjM3NDIzMTgzODA1IgxGuHvpJigY5kU8%2BUIq3AMhKoao2CbzwmfmrfI8yr0dd2cmO7UKSumn%2FqwZU9gjQ5t7Mty3tgy2zi%2FDypTrfeYpil%2BrhjyxP0FuARnIqtvMRwanPoSXKEq0zZTIuQqdsK7%2FP2KnRLnoBgrrZErffwN3gl%2F4DbkOeh%2FWpdxXjGmuV2eBiY1gBf6SGahb7er%2Fn74QVDIUbJqpyz7dzApxFXRnuUwAmedPF8%2Fpzouaxhf7GMj8TaYFBpbYTpItM%2BySmdGXkbBzQQ6G1HrJvirC7St7E60DeYgSf1q3fKYwIgwOfwZ9y80jVNKwQ3eTA54xD%2BtqcFbwTng0taQa1itVRc4TvxrdP%2Byc3enJP6Y8psdynBxdGWTacQmkAqSDafuKDfPHMOhRVo9EaW0HlImAqOpQKuQBsleNoOVx1rZfCoiGQJSQnFIBq8bERfnS2AjhCHq7wS%2BOcKE3hiJNMdAqy%2BABf%2FaxZYsxdgAmLo3qnNF4WWM6FbOYxwOOV4IvMMV7dAta3eKhP1otvWnnOqR7fq1mWALGosliciyVnsP2X6br6YnBu%2FfEYLHL0Zs39cVBTS46xWqdqpPK3D%2BLkfsqtwj6RH6x0j0mksvzRTP3LxUwEZO8kaI3ypcWxlPOwVCzJNyFHlXGCrocOF1hDTDx2e%2FEBjqkAa0a2d9YrvtWalwlwp8j5JUpCVZu54NDzSZsGCW67dmozXSzrHHKx6N3T02PCDM6Xq4KiSgLB7rHmxaaOUiNeZr1zoOjhkxhVyqc7rTwMlGoOt1vpIAwBjofRYdDA9xUuyYuH98pYk0owqjUsH5K2V%2B5bnILoK%2FT9QMZB6NWLDWYxEv%2B485KYRnhZKbuUs9zZhKVaNfKcJpvEGJrPlButvmUFhbj&X-Amz-Signature=289bd728fff71a61a5c93eb5f1089eef1faf49daa8a5086df60db89841ca0eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2JGRTA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfAlJFYFLIG%2FC8lg%2FmUwdYcPBpELU063gXCohoS1WIYAIhALU3SD3u0QPpXj4arHRtfQRwad78iOFfQpnaOQmej8syKv8DCCMQABoMNjM3NDIzMTgzODA1IgxGuHvpJigY5kU8%2BUIq3AMhKoao2CbzwmfmrfI8yr0dd2cmO7UKSumn%2FqwZU9gjQ5t7Mty3tgy2zi%2FDypTrfeYpil%2BrhjyxP0FuARnIqtvMRwanPoSXKEq0zZTIuQqdsK7%2FP2KnRLnoBgrrZErffwN3gl%2F4DbkOeh%2FWpdxXjGmuV2eBiY1gBf6SGahb7er%2Fn74QVDIUbJqpyz7dzApxFXRnuUwAmedPF8%2Fpzouaxhf7GMj8TaYFBpbYTpItM%2BySmdGXkbBzQQ6G1HrJvirC7St7E60DeYgSf1q3fKYwIgwOfwZ9y80jVNKwQ3eTA54xD%2BtqcFbwTng0taQa1itVRc4TvxrdP%2Byc3enJP6Y8psdynBxdGWTacQmkAqSDafuKDfPHMOhRVo9EaW0HlImAqOpQKuQBsleNoOVx1rZfCoiGQJSQnFIBq8bERfnS2AjhCHq7wS%2BOcKE3hiJNMdAqy%2BABf%2FaxZYsxdgAmLo3qnNF4WWM6FbOYxwOOV4IvMMV7dAta3eKhP1otvWnnOqR7fq1mWALGosliciyVnsP2X6br6YnBu%2FfEYLHL0Zs39cVBTS46xWqdqpPK3D%2BLkfsqtwj6RH6x0j0mksvzRTP3LxUwEZO8kaI3ypcWxlPOwVCzJNyFHlXGCrocOF1hDTDx2e%2FEBjqkAa0a2d9YrvtWalwlwp8j5JUpCVZu54NDzSZsGCW67dmozXSzrHHKx6N3T02PCDM6Xq4KiSgLB7rHmxaaOUiNeZr1zoOjhkxhVyqc7rTwMlGoOt1vpIAwBjofRYdDA9xUuyYuH98pYk0owqjUsH5K2V%2B5bnILoK%2FT9QMZB6NWLDWYxEv%2B485KYRnhZKbuUs9zZhKVaNfKcJpvEGJrPlButvmUFhbj&X-Amz-Signature=0ec8af4b1e5bb57191f43a8801dd6e6d6dad21542b8798d3f86a53c67c51d908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2JGRTA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfAlJFYFLIG%2FC8lg%2FmUwdYcPBpELU063gXCohoS1WIYAIhALU3SD3u0QPpXj4arHRtfQRwad78iOFfQpnaOQmej8syKv8DCCMQABoMNjM3NDIzMTgzODA1IgxGuHvpJigY5kU8%2BUIq3AMhKoao2CbzwmfmrfI8yr0dd2cmO7UKSumn%2FqwZU9gjQ5t7Mty3tgy2zi%2FDypTrfeYpil%2BrhjyxP0FuARnIqtvMRwanPoSXKEq0zZTIuQqdsK7%2FP2KnRLnoBgrrZErffwN3gl%2F4DbkOeh%2FWpdxXjGmuV2eBiY1gBf6SGahb7er%2Fn74QVDIUbJqpyz7dzApxFXRnuUwAmedPF8%2Fpzouaxhf7GMj8TaYFBpbYTpItM%2BySmdGXkbBzQQ6G1HrJvirC7St7E60DeYgSf1q3fKYwIgwOfwZ9y80jVNKwQ3eTA54xD%2BtqcFbwTng0taQa1itVRc4TvxrdP%2Byc3enJP6Y8psdynBxdGWTacQmkAqSDafuKDfPHMOhRVo9EaW0HlImAqOpQKuQBsleNoOVx1rZfCoiGQJSQnFIBq8bERfnS2AjhCHq7wS%2BOcKE3hiJNMdAqy%2BABf%2FaxZYsxdgAmLo3qnNF4WWM6FbOYxwOOV4IvMMV7dAta3eKhP1otvWnnOqR7fq1mWALGosliciyVnsP2X6br6YnBu%2FfEYLHL0Zs39cVBTS46xWqdqpPK3D%2BLkfsqtwj6RH6x0j0mksvzRTP3LxUwEZO8kaI3ypcWxlPOwVCzJNyFHlXGCrocOF1hDTDx2e%2FEBjqkAa0a2d9YrvtWalwlwp8j5JUpCVZu54NDzSZsGCW67dmozXSzrHHKx6N3T02PCDM6Xq4KiSgLB7rHmxaaOUiNeZr1zoOjhkxhVyqc7rTwMlGoOt1vpIAwBjofRYdDA9xUuyYuH98pYk0owqjUsH5K2V%2B5bnILoK%2FT9QMZB6NWLDWYxEv%2B485KYRnhZKbuUs9zZhKVaNfKcJpvEGJrPlButvmUFhbj&X-Amz-Signature=63c7eee0b2e2e5e4a72c71f6ad10b0343a475e42433a875c3b5b3e943ef3b665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2JGRTA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfAlJFYFLIG%2FC8lg%2FmUwdYcPBpELU063gXCohoS1WIYAIhALU3SD3u0QPpXj4arHRtfQRwad78iOFfQpnaOQmej8syKv8DCCMQABoMNjM3NDIzMTgzODA1IgxGuHvpJigY5kU8%2BUIq3AMhKoao2CbzwmfmrfI8yr0dd2cmO7UKSumn%2FqwZU9gjQ5t7Mty3tgy2zi%2FDypTrfeYpil%2BrhjyxP0FuARnIqtvMRwanPoSXKEq0zZTIuQqdsK7%2FP2KnRLnoBgrrZErffwN3gl%2F4DbkOeh%2FWpdxXjGmuV2eBiY1gBf6SGahb7er%2Fn74QVDIUbJqpyz7dzApxFXRnuUwAmedPF8%2Fpzouaxhf7GMj8TaYFBpbYTpItM%2BySmdGXkbBzQQ6G1HrJvirC7St7E60DeYgSf1q3fKYwIgwOfwZ9y80jVNKwQ3eTA54xD%2BtqcFbwTng0taQa1itVRc4TvxrdP%2Byc3enJP6Y8psdynBxdGWTacQmkAqSDafuKDfPHMOhRVo9EaW0HlImAqOpQKuQBsleNoOVx1rZfCoiGQJSQnFIBq8bERfnS2AjhCHq7wS%2BOcKE3hiJNMdAqy%2BABf%2FaxZYsxdgAmLo3qnNF4WWM6FbOYxwOOV4IvMMV7dAta3eKhP1otvWnnOqR7fq1mWALGosliciyVnsP2X6br6YnBu%2FfEYLHL0Zs39cVBTS46xWqdqpPK3D%2BLkfsqtwj6RH6x0j0mksvzRTP3LxUwEZO8kaI3ypcWxlPOwVCzJNyFHlXGCrocOF1hDTDx2e%2FEBjqkAa0a2d9YrvtWalwlwp8j5JUpCVZu54NDzSZsGCW67dmozXSzrHHKx6N3T02PCDM6Xq4KiSgLB7rHmxaaOUiNeZr1zoOjhkxhVyqc7rTwMlGoOt1vpIAwBjofRYdDA9xUuyYuH98pYk0owqjUsH5K2V%2B5bnILoK%2FT9QMZB6NWLDWYxEv%2B485KYRnhZKbuUs9zZhKVaNfKcJpvEGJrPlButvmUFhbj&X-Amz-Signature=af8444fbded2134e75cdf61f92f6477faca808de2fcff8abddf3d9ffbe0269dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2JGRTA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfAlJFYFLIG%2FC8lg%2FmUwdYcPBpELU063gXCohoS1WIYAIhALU3SD3u0QPpXj4arHRtfQRwad78iOFfQpnaOQmej8syKv8DCCMQABoMNjM3NDIzMTgzODA1IgxGuHvpJigY5kU8%2BUIq3AMhKoao2CbzwmfmrfI8yr0dd2cmO7UKSumn%2FqwZU9gjQ5t7Mty3tgy2zi%2FDypTrfeYpil%2BrhjyxP0FuARnIqtvMRwanPoSXKEq0zZTIuQqdsK7%2FP2KnRLnoBgrrZErffwN3gl%2F4DbkOeh%2FWpdxXjGmuV2eBiY1gBf6SGahb7er%2Fn74QVDIUbJqpyz7dzApxFXRnuUwAmedPF8%2Fpzouaxhf7GMj8TaYFBpbYTpItM%2BySmdGXkbBzQQ6G1HrJvirC7St7E60DeYgSf1q3fKYwIgwOfwZ9y80jVNKwQ3eTA54xD%2BtqcFbwTng0taQa1itVRc4TvxrdP%2Byc3enJP6Y8psdynBxdGWTacQmkAqSDafuKDfPHMOhRVo9EaW0HlImAqOpQKuQBsleNoOVx1rZfCoiGQJSQnFIBq8bERfnS2AjhCHq7wS%2BOcKE3hiJNMdAqy%2BABf%2FaxZYsxdgAmLo3qnNF4WWM6FbOYxwOOV4IvMMV7dAta3eKhP1otvWnnOqR7fq1mWALGosliciyVnsP2X6br6YnBu%2FfEYLHL0Zs39cVBTS46xWqdqpPK3D%2BLkfsqtwj6RH6x0j0mksvzRTP3LxUwEZO8kaI3ypcWxlPOwVCzJNyFHlXGCrocOF1hDTDx2e%2FEBjqkAa0a2d9YrvtWalwlwp8j5JUpCVZu54NDzSZsGCW67dmozXSzrHHKx6N3T02PCDM6Xq4KiSgLB7rHmxaaOUiNeZr1zoOjhkxhVyqc7rTwMlGoOt1vpIAwBjofRYdDA9xUuyYuH98pYk0owqjUsH5K2V%2B5bnILoK%2FT9QMZB6NWLDWYxEv%2B485KYRnhZKbuUs9zZhKVaNfKcJpvEGJrPlButvmUFhbj&X-Amz-Signature=289bd728fff71a61a5c93eb5f1089eef1faf49daa8a5086df60db89841ca0eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2JGRTA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfAlJFYFLIG%2FC8lg%2FmUwdYcPBpELU063gXCohoS1WIYAIhALU3SD3u0QPpXj4arHRtfQRwad78iOFfQpnaOQmej8syKv8DCCMQABoMNjM3NDIzMTgzODA1IgxGuHvpJigY5kU8%2BUIq3AMhKoao2CbzwmfmrfI8yr0dd2cmO7UKSumn%2FqwZU9gjQ5t7Mty3tgy2zi%2FDypTrfeYpil%2BrhjyxP0FuARnIqtvMRwanPoSXKEq0zZTIuQqdsK7%2FP2KnRLnoBgrrZErffwN3gl%2F4DbkOeh%2FWpdxXjGmuV2eBiY1gBf6SGahb7er%2Fn74QVDIUbJqpyz7dzApxFXRnuUwAmedPF8%2Fpzouaxhf7GMj8TaYFBpbYTpItM%2BySmdGXkbBzQQ6G1HrJvirC7St7E60DeYgSf1q3fKYwIgwOfwZ9y80jVNKwQ3eTA54xD%2BtqcFbwTng0taQa1itVRc4TvxrdP%2Byc3enJP6Y8psdynBxdGWTacQmkAqSDafuKDfPHMOhRVo9EaW0HlImAqOpQKuQBsleNoOVx1rZfCoiGQJSQnFIBq8bERfnS2AjhCHq7wS%2BOcKE3hiJNMdAqy%2BABf%2FaxZYsxdgAmLo3qnNF4WWM6FbOYxwOOV4IvMMV7dAta3eKhP1otvWnnOqR7fq1mWALGosliciyVnsP2X6br6YnBu%2FfEYLHL0Zs39cVBTS46xWqdqpPK3D%2BLkfsqtwj6RH6x0j0mksvzRTP3LxUwEZO8kaI3ypcWxlPOwVCzJNyFHlXGCrocOF1hDTDx2e%2FEBjqkAa0a2d9YrvtWalwlwp8j5JUpCVZu54NDzSZsGCW67dmozXSzrHHKx6N3T02PCDM6Xq4KiSgLB7rHmxaaOUiNeZr1zoOjhkxhVyqc7rTwMlGoOt1vpIAwBjofRYdDA9xUuyYuH98pYk0owqjUsH5K2V%2B5bnILoK%2FT9QMZB6NWLDWYxEv%2B485KYRnhZKbuUs9zZhKVaNfKcJpvEGJrPlButvmUFhbj&X-Amz-Signature=5254006c2ff3eca2b95167618ede75822cb45f2ad3812a9922f056a0f7821b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2JGRTA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfAlJFYFLIG%2FC8lg%2FmUwdYcPBpELU063gXCohoS1WIYAIhALU3SD3u0QPpXj4arHRtfQRwad78iOFfQpnaOQmej8syKv8DCCMQABoMNjM3NDIzMTgzODA1IgxGuHvpJigY5kU8%2BUIq3AMhKoao2CbzwmfmrfI8yr0dd2cmO7UKSumn%2FqwZU9gjQ5t7Mty3tgy2zi%2FDypTrfeYpil%2BrhjyxP0FuARnIqtvMRwanPoSXKEq0zZTIuQqdsK7%2FP2KnRLnoBgrrZErffwN3gl%2F4DbkOeh%2FWpdxXjGmuV2eBiY1gBf6SGahb7er%2Fn74QVDIUbJqpyz7dzApxFXRnuUwAmedPF8%2Fpzouaxhf7GMj8TaYFBpbYTpItM%2BySmdGXkbBzQQ6G1HrJvirC7St7E60DeYgSf1q3fKYwIgwOfwZ9y80jVNKwQ3eTA54xD%2BtqcFbwTng0taQa1itVRc4TvxrdP%2Byc3enJP6Y8psdynBxdGWTacQmkAqSDafuKDfPHMOhRVo9EaW0HlImAqOpQKuQBsleNoOVx1rZfCoiGQJSQnFIBq8bERfnS2AjhCHq7wS%2BOcKE3hiJNMdAqy%2BABf%2FaxZYsxdgAmLo3qnNF4WWM6FbOYxwOOV4IvMMV7dAta3eKhP1otvWnnOqR7fq1mWALGosliciyVnsP2X6br6YnBu%2FfEYLHL0Zs39cVBTS46xWqdqpPK3D%2BLkfsqtwj6RH6x0j0mksvzRTP3LxUwEZO8kaI3ypcWxlPOwVCzJNyFHlXGCrocOF1hDTDx2e%2FEBjqkAa0a2d9YrvtWalwlwp8j5JUpCVZu54NDzSZsGCW67dmozXSzrHHKx6N3T02PCDM6Xq4KiSgLB7rHmxaaOUiNeZr1zoOjhkxhVyqc7rTwMlGoOt1vpIAwBjofRYdDA9xUuyYuH98pYk0owqjUsH5K2V%2B5bnILoK%2FT9QMZB6NWLDWYxEv%2B485KYRnhZKbuUs9zZhKVaNfKcJpvEGJrPlButvmUFhbj&X-Amz-Signature=2c71cbd177773399b079bbb55a04662174ca5ef064163ec7832f9a9856d57ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE2JGRTA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfAlJFYFLIG%2FC8lg%2FmUwdYcPBpELU063gXCohoS1WIYAIhALU3SD3u0QPpXj4arHRtfQRwad78iOFfQpnaOQmej8syKv8DCCMQABoMNjM3NDIzMTgzODA1IgxGuHvpJigY5kU8%2BUIq3AMhKoao2CbzwmfmrfI8yr0dd2cmO7UKSumn%2FqwZU9gjQ5t7Mty3tgy2zi%2FDypTrfeYpil%2BrhjyxP0FuARnIqtvMRwanPoSXKEq0zZTIuQqdsK7%2FP2KnRLnoBgrrZErffwN3gl%2F4DbkOeh%2FWpdxXjGmuV2eBiY1gBf6SGahb7er%2Fn74QVDIUbJqpyz7dzApxFXRnuUwAmedPF8%2Fpzouaxhf7GMj8TaYFBpbYTpItM%2BySmdGXkbBzQQ6G1HrJvirC7St7E60DeYgSf1q3fKYwIgwOfwZ9y80jVNKwQ3eTA54xD%2BtqcFbwTng0taQa1itVRc4TvxrdP%2Byc3enJP6Y8psdynBxdGWTacQmkAqSDafuKDfPHMOhRVo9EaW0HlImAqOpQKuQBsleNoOVx1rZfCoiGQJSQnFIBq8bERfnS2AjhCHq7wS%2BOcKE3hiJNMdAqy%2BABf%2FaxZYsxdgAmLo3qnNF4WWM6FbOYxwOOV4IvMMV7dAta3eKhP1otvWnnOqR7fq1mWALGosliciyVnsP2X6br6YnBu%2FfEYLHL0Zs39cVBTS46xWqdqpPK3D%2BLkfsqtwj6RH6x0j0mksvzRTP3LxUwEZO8kaI3ypcWxlPOwVCzJNyFHlXGCrocOF1hDTDx2e%2FEBjqkAa0a2d9YrvtWalwlwp8j5JUpCVZu54NDzSZsGCW67dmozXSzrHHKx6N3T02PCDM6Xq4KiSgLB7rHmxaaOUiNeZr1zoOjhkxhVyqc7rTwMlGoOt1vpIAwBjofRYdDA9xUuyYuH98pYk0owqjUsH5K2V%2B5bnILoK%2FT9QMZB6NWLDWYxEv%2B485KYRnhZKbuUs9zZhKVaNfKcJpvEGJrPlButvmUFhbj&X-Amz-Signature=0811da2559b81c041a8dbff20cddb6c560e793d9dbb1d4a936c0726e9600814e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
