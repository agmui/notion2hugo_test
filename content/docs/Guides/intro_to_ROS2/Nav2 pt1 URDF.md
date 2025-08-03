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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=90028daa36deeac2938674573f68c45477b5d32e676563d062bbdef9c73ce07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=8e2ca82914f1c97317f42d78f212aef2f9c3ce6155196c34b71ebdbeea5ac307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=8fa8ff10725f5f517fba4b756a76b6d8844ff34d0c5a7cd8c14603ed39c2e753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=6f06b2f5ec7d10de63ff1184f201ebe2cb1d3a1cea182d708021611e85f58b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=1fc91a4d5dfe958ff8dd14b13cb30f549f72b579629ea317c8a09d2ec5c14124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=711a464bc4322f871c31506fe908c11ca8d215aa0a188841de9b970a2f2cbda1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=d5ad0ab81857cb7b1332a1bdae5a76eb68619d178c93a5c4c7c6aa377e7749d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=5d653cc3436cea714ba17c203e975bde0cb3a91f081bcf6fe619074d9ad53b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=71549ea2f1df72b90c75453442fc73bbf1b3fcdd0fcb15cd59f0527fc3ee9bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=a8b8b924adef732bc79ec41ef6b557c27440ee632f958a86e51ae84894828bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6D5WWE4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQdIJ499Z5o7wByOEqOt3URG7pXsNQDb%2BIR2VKDhAg%2BQIhAJsux9APCM11HwTm%2F5PoLV42dIKzg%2Fy3FmwcQ%2Bea3GbtKv8DCDIQABoMNjM3NDIzMTgzODA1IgxNJkfZHZqVPXgSn5wq3AMjCHb%2FgcFrjOb8218yLrwJQmHNz38GmwJbSN2ElOMeCC1ltlAtm4mFHVCBWJCDn9L45TcXjX%2F4nI5EWhBWSqVCHvtjlWjVfRLpaGkz%2FkgmNvMq%2FAp5WpaRuLc%2BRVh7vhMC0D%2FdrHH2Yu%2BNB94Rvlh9cSGzm6n0m%2BCfa%2Ba79a%2FUNgZLTznwUMxpIC1YoFpOEj1A0uv3buPW8BZpqHbV9ORXHoQn3yYa3ruusGzTnTnXffJagW7%2B0vE6s9i%2FdUYYXD1BWIG1Ur8V5IZ%2FxQVz4G%2FFfgVVqPYRX75Qfgsf9Q2Oyr3xF4uncbuU4ARvYa9vFBFYgzEDnwTUNWGpW3c0KfjTjefnXiGKXExqMu6axSiAdZG8w%2FM0%2B64KrAl8IHwUdV68WKBi3RXNH6v99nEUx6naH4csgzXwkovPoF77dwr7h8QlpjYEb96ntnjhivFpy%2BNzveMtIn%2FmVb1fGRoi7d6y3b4TupfufDu3NhOBbwLdL4AwTha%2BR8Xu1tdcDwNpe%2BwEBb8hW%2BJkg%2BRuQnI1ORRhv9X3%2FBc3Gm3x1wkFj8jBdHCZmpNhxTlkx1PWb3VswFaGlKz1c0FLsaxEiMivupMdgV%2FjH19IErUtjR2%2BPjRa%2FJ7E3ZenaLh%2BGgzu%2FTChq77EBjqkAe1lVqBJsxf8JoJSSGlDE8%2FjPZdoyn4yzHaTMkHxaMtlYcRmSDQBEQGuZDC1E1z5Ibwo2pHiOUQrjXjmMJ3uWyP0m3EYeZze7sjoCfRAPa5qwvzwFTJJNzW7%2FsjvxycFx3%2Bal2a%2BsC7CcI7LPEc5jsI0Bx%2BkSb8gkynF%2FfunyMnqz%2FShz5goOBeCljSYPVFuoTM68vmvwbNMjClZeYNOzRE0nvZg&X-Amz-Signature=cb2bd244fcb7258f05db6a7daa4d4290799778045cc2358edfd3e64619e2d60f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW2UG64%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmXGKFqM3yyOvVLZqNy8S%2Bx5M88DxD%2B67PZfOV3RZaMAiEAkVo6yvGFO3yYEbP%2FbglnbbkdaLxLU%2FZdWaOCIObHyiEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKXuK6h2nBrnFR9CcyrcAzQN5g533sES262K1JM%2FHi%2Fj0G7E%2FgyxY2O6ZDAn%2BSzaQDZCGsapo1EDWd2oQFWKMBYQvwOQ3GM69WFG76u75WO9EbNIu%2Fb3CoPrpu581Ec6B8bI4O5%2F%2BVdsWSD2VD%2BzdxUmyyi5xoLo85%2FhmkjXs2W351knS8LMfDn8oaMYrZdBK%2FBb9TsL1Y1vtIcCbyr11xdI1pIoJ6SpZaiOiKnlwc7NXWBLcH4vLrSozDCscF7TPqDkTASm0W1v8yQIDLfKlrPkrxdxHAwPzXp2vdrEkBMvkHXMJ3QmL0UUrJ5DAK0xu34O1j7RfhC8w0GiF7Dwnh8gDxR9RCJ1CryqsuSdFKbPSW1w5%2Fw8ByxCRUrmPmeq0uRXb8zoZpMA4lDOM%2Bbib31JuiAGcJs%2FA8OCekSHFCld2Hg7BhGUrk4EtGr0CAHfZ2sHtNOklZESlGvcRA3s5o4rx7BD5cgsIKwVt4yP6vJmJHRqKk3Xc4KSP1HQ%2Fhk43I6fV9VQ3wGot9YbaDOuQcnX9bhe7n%2B%2B9Lw0w2k5JG5qghp5q7Rr4%2F8r%2FQnERt5TBAgU2TFC70KOA3Fookg6NWWf0UUmGOvvPWaBl1yhTApHEgT3CoahMAicgH7ZKk%2BlZ447FxKFY1Ity2HeMMirvsQGOqUBVUC%2FfaoTmeHaEyl01D07y3gYc4myJz5VlWSVpUrzf6MHD09%2BiBx6qepvSjpQutAfW2ODPY6PFPgG30Fdy4y6QKalzfFHeDx4RRxc%2BJpMUVFz49h%2FrrAxax9ktO0JA1jt7pH%2F2bQyVi7uMHBKUcoFwtnmCdXkdP8B1PiawLDoXrwSRGInNtmt4KTLwd9ySAS4X4S1nisNIeLZehxTcmxMeKgsckGe&X-Amz-Signature=c9e7563e34fb27e3e7209465ce3402f3d009cbacab1e7e957897ac598aa36fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43LCKMR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfBAFqoiMSN4I26alYcK0lp5%2FpPoA808X33Ka8uQNZQAiEA1V8JZuf6UknjUTqJzODuo7vc7muFDRq02ep9q139F60q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDG%2BCZvvwZtj3bBgmwircA5hqejxblQyNSljnCy2p5as8MmbN0nmUvIsG1N2EkzxPI30DI6Pe4eqncf5kZhYZzZYVbCUxHteh3DJP%2F42EBDFT15Cg4jGHE8J1WnhorgfK%2FR4q7nzIvo5u0M9RgSmHbSpjNtXgUutYoFsQAMH10botzO7DHWKNSo4i4AWsDDDOl9715JDORzXWQ%2F5HDXpJzim7MANlsf3VifxMMi7wHk3DGYVlf1P7a6nEQweymRi4oLWlHScV5YEdJqhZMs1z3SLJMlT7fJDD%2FSHoY%2F8xlXR%2FKvjF38nF6xv9sZgFfqoF5F5HWSQVZhv3IajIN9BrKoCcIHQRTjaqYf4wX1FSrNJ%2FEjF45cuF%2FPTPEXmgWyabjQKZnqRlbXQCsqZDiX4MKoFPzOcSLoSTV8y%2BWEPiG1FLmzBdc914d7yNDZZ9Kd8vCvqSVPYAE26gm3orK6n3USniBxHVda6fFk%2FrGpsTfpBKoGHJbZgwcbU1U2qfDTkCoargHDp%2B8JoU8CJcb8nDtpZYMkgzRnVSJwryAKATLHn7o30B0qibYX4T8C74lSrvy3YMseAi2jk%2B7%2F1yISmYrCPdbZ7OsvZ3dAqa9GVjGpezlQxMBGyFTna1psI2%2FA6I7hNWiqu7MTAZtYbLMPaqvsQGOqUB%2FWkRvZlTaXpuNvStE5IzDMYmxAg8BYZk%2FpDtaDFkuWa1LbSQw9cjJJXJU4%2BFvAtlRjx1wPvfWihCpDiZqwyuvAKr2Ir7%2Fs6lt%2BxxXQppmC9lvlkYu4E7ZngFCoLe%2BZGzZkjHKCWXgGNrpN1K1AuKg98d6uMIgeRueAWRMLmZhaK5VVlYHoBmN%2FGK888N9hgs%2FGtTzj0F0evSVVArJyoWZlm6J6pH&X-Amz-Signature=9082c3bac817e2967e0ae8e273ba7537baaef559b7e78eb5dc78dfcc626cca85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=5566e416c9fb2f3f664600e068d70eb8ca2155f1d2e6c708b7f89e801e9c64f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNITK3MX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCemt8qLrEzb0QUI8%2BuIqfPESETpCdM%2FB0kDmkgKMCJCwIge0rwREYm0ojmRdzPLPQCElhL%2BV2P32kQv%2F6W7%2B3Bq78q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDE%2BCiLy6ck9dSpEZDyrcAzKR9oehf4YhJtwqPtG0oSOxux3%2BmWvySpHliE85TZyoyVUlmPubumL5Aab%2FKj9x2f6fZO1NZbb5noTTIzd4VfKx2Ge3s%2BI6hZrjfup6NhycUFwiCtvAHFEEV2aOliGhHIekFTeS%2F9cKpinaReYmoRQfC%2FJE7mobOdRhy%2BJm4A83OeMwkE0UY6YeHZ%2BysF8UrdtV2s3aehkvY%2BDugSHedtTkA1JNSjV%2BzQb%2FdzjBsVdW15VAou2r4E7rd68zDLkTXPzg289NskXwio2lWL9JvXDdNMjvVmCd9csKJW8q0YLbFxfBbQKwjjr2%2Fr%2B9CQfJrIBO9KwUJEZjndwh7aQ9%2FSJ5rReR6AOg%2Fj4BBKghbCAj72dY5zzdLviNI5eG9p412WvJDEZwcwTk%2BguQFz2QdlLN5D1q3bj2oabrALQpdx83QbW2sPJhURy2aJ0qozJlGYPEpPzNtSsVUAul7gb9cyAparqxmBx8hHEOTL%2BEpFZgdFLk%2B0qhdmjp2hJl%2FFJ7oucHT%2BEt7QEOeaLSFUa06RU3OTGqVsz9XALPSswgZMoJfeZY6gUd20Lr4hvRBMfgOvwe3IM5Jy0zw9VMDh94xE5U5wPC%2BGNVUGz5yZtjkIDpVh9QNBwrG7lTWs6QMPOqvsQGOqUBAXusPINcA2r%2FhSB40AdmQ60gS6%2FWxOWqSMK7RAAlXK83cOZFSiI4O9GRYx0KEPvlqZANvVOvVE4VOcm0%2FfqWJJViZYLLzErBm29fTpLIBRbcfO4uTa2PRianG7A4gJjjkqf9Z57sA6r3hGHqvpxXxrrm3XoBh1I0uxSNQNyNUjpZJG8LhcDsmL%2B%2FrXw1ybsE31T0wqByGlmkAoZlyokfrGm9AMto&X-Amz-Signature=5c6a6ee05506e5be4d31cd776c0abb7ee1092205db0d271494150f0e394ed5b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=1a8f9c0592df7090fd43809a46ea14b5e12d355be34a14f352993866acb02699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMRLNCOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4ohxMWPEzaOB27C6CT077h3h7ihfA2I4ESV5%2FUJmAPAiEAsBSCsYAc2Md7Rjz3ed8P1pXx6Gvs%2B1RBn0HGLUaNnGoq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJJdoAgPvMMtT26cyyrcA7on8VdhDgiXtP%2BxbvLqyRpJ5RK4PLPnjFgTt3ZK9HVJVx8SCHkxeNOxFK%2FZ9AqHib%2B3EC%2FHTBQhRCQxfUjW6fhNRHk%2BKx8RLnnNdR%2F3JhqLEoKtf%2BaowegkMeaoxJT5l4sksMsEfqk0ZXPeIPKpYDVEfMneimk5%2FasKugrjtRXm2Ya%2FA2uZ2jQa%2FrFNyp7lMClg571OBcA%2F4JpJhePz2pv9R5R6WpEp1Mytypqfxj33VEOdSQ7vSz0E1EQcx%2Bu%2FUAdW1Wp9L%2FyCvkEA71i3uyOf1998rkVsAUdrcdZRcPFz8LX2kQuafwYVyWHcyw0NQoQ3Ueik2LqqzgqA%2Fi9O8HoF3lFjGCvzdoRYzMXIgtuDFAeYJkMsb%2Bd2WjrLWr2EgWg7gWr41JWeZZHJOsIhK6JKRM3colQwmjYDjemkrw0nShvJ38ckjFuuTsDtAL%2BQaCSWN6%2Bu99VfvMtrFcFV6PBzfYkfWLjLpUq0L7WWB6uHNq05O%2BAXg7yrX%2F9d91P2QOo6LjvrfSCz6AGyIHv9IFJ5qClutjuADCw48A%2FKSNmByJzbOsmvGzb3WmywfLnpub83CvwWJE7jMwlZMkklEEzXXxeyoJ7io%2FQPR3BkoZgoJF2NnZP9B7skIVB0MLGrvsQGOqUBY6vMaJQjuQQGjuOi5RI1qOfkgW95AXCjGDVG6dwM3hhuXi1Fa%2Be9CkCM6EbSlXsiMG1eFy1xTFxE0CC%2F%2BvH2S7Fy1E4QIChvZRML9tOT8NihKA38%2FOX%2FK6tB4Kbc0FUSGt826Yep3YV%2FxrL7tyho6GUB3593NJVHstJeKwwZIor%2FSl3QkS5TjiY52dobFUGDcso5DTSa%2BfyL1F%2Bj5%2Bm5k2Y8p165&X-Amz-Signature=2d608471a5beb8aa79db77b4123779dc16e4ade5ac4e9750fe453d2e9660f4e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=2ffde237a103e11b32e404eaf6db7cf9a0d43be4f03e3d7341c073bff77284b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTUGW7OW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRNqlYGSOXNF8gYwJkDGU74gKcxEQaUySnQo68DhSvGAiEA%2F9I%2FAHqZSCNSkZw6vMOREX%2BR99g%2F06h4kKH%2BQPJBKVEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDE5P1jE6uMhA%2FOV1nCrcAzlajJvFukNmJrmVyEMHWWe089OB6Xj7wfo23IymxUWhLW%2F4bJC576TDVYF7qP6b6ToFFNII%2B9GHLyknXH1kxEhZAArtX3B0x8s2B8X1dAkYWWzlyPx3C71TMQ2wz5PSLXMUMLAVnsRaiIhF1fyweJvX8cQu0ows7g9OM3irAaOhWIs%2B8%2FztxsGfNh%2FBGcyVSalsdKI22T4ikuY8aVuYPLR2HSkIPv%2F%2B5NiuIFs3keFnLUU8jy0C24lZXFP0a9GnG1ULQV94Fo1QK2li7HggalVP9HYsUvtfT3912j9fUZg5nYtMC%2B0Thpk3w8AB%2FLL24FVUkb8Ck8CXdCRqOjTJw2ILarZm8h%2BWxZXaqlFBUOAajizTBJx1K0gEYvzZ6bNqZp0kKC8r7IYNYJK6IbF0KFzGctSHiU%2FZS0blhOwyv6%2FBrUldSB7ULjqmgsknQZN33Vb50MTrhr7wXvMM5U%2Bn4QamSBn2c5fnpPS5H3eFMPouVD0F8H3Gzzja3bEHJXxunOsh5DAv%2F83OzwEbwu%2FgYuCTIcyNapWmXPQ0IwCtGCbjylQXnEU1%2BGGuxXDjwNX%2Br970J9zQVttJCsrr6jLK9tTb4HaoY9OsHBBoQJlUQnOlkHdKr0nQG5%2BoiMBhMLKrvsQGOqUB%2BCZyNtC%2BUAygMppqhDf0eicCrQKi81q5m0v4XnzwLEemUedGlLPBh513bT9qifcsLQufOKeU%2B0MqbetuTq1kqdPRdIck5JWPi3uOHOXYh%2FbYmeDsHDYeXtd0NA5s32F5S34Or7rnh%2BCOotDTa3w%2B4CYB5Do1XBnVNZWRSN0xV910%2B8RYfsdtWGeORWARZDJjqTia5VnzdM2J4NuwsBEq7o1eO77%2F&X-Amz-Signature=d34eefb9f04e8830ee3fba2e5c741b799280c933b7a048773dfdb79056f57dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=2f857bdc846884ec0fb0677a7b35a6f7bb7bf56777852a439d385898335a4b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUN34OAL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtLZQZ0leLWyZ49kgec2xazKjeZaCXjUvfMqj%2BZb0KvAiEAgVZHvoCw3nYUc0jk9ZtmFgpBJV7CzSzZfDGsFRFarogq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMMIM7JrLEF7iAsz4yrcA%2FprF%2F94dVY3yovoQsxG5Y9kBtWo2RzkFdNenjwOijIH86JHzmPl5DHRQ93JiWOUde4PNW4TDuCcUKz3HOaqIat36ZSA7de7NbljNChlHRZBq9VXyWwXeDgdYoO%2BXtWzQTun9P7qfC%2FUc0BygkJqRWp9lE9YO65cbVkK6NrM0KQ99hmngQ%2FVUKd6uRP8fnOt6z7e8zMyyLNk%2Bv3doreoRK0QSSBrQ4AFU1oNML04%2BGZGJWw3LETRfEZkNrftuLxGVuCoMSGvuuglR4jBX0DlCKj%2BRayTgjLJsHj5t4lr5T57sjdNlLpYbUsZD%2FnszFwHc%2Br7MmdFUfTZSxjKoUiMTY4pwwGjdhHJ%2BX%2Fmj5jKE7OxdhM0H8BMRSt5HN3TqwIKQ1zjonuBmDdClCNe9FVvG3LJbtl1hyCRW3xQvYQNBSYmqy1jeGqoNn8Pydso%2B5%2Fa8rSkuZraaUFFjNnkeFMe9ANMgKt89fkAbPjIvmRZdQTC7KPhht%2FEU5v5kEeaBbxQHmLXvkxvuICOdm5B2ynf6cbQXzxVPor9ZecfCA%2Bt0ts2DahmcpsX03ChtGHSAcfRQ4C%2FO2kXEK6yjUO2fmgGIesrOZdYSSjsYdFMVGS03JFIEx2kQoN6JXtdRGmNMP6qvsQGOqUB7pxMPfjM%2Far3nYQTyKpjcLSnqV4BEYhksNEgmvTeAWeHs4G1%2Be%2BprZ1CmhG3xWj2ubuXFhPGy2yhbQEcGVcEsEtYSXy%2Buw3GBubLPVTAPg5YYJcm0WWSmP9D4M8GxgY3R8tAIEQOyociCmq1heNWTVOnGvtZNn1dD1YSY2iQimX6E74ZF6oOsyLOixsr8vvIED6KeuXBOqtvAba5IMt0YZatocSk&X-Amz-Signature=fb640d33d24880f273bb05f15b9b14baa9c065d8d0459b5778d3c3f5ec1ff63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAQ4SZQF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFFDL0Ff8jTeaKZJ7XnxuFV3obEwl5S7c0udz%2Fy9lmeAiEAj8eRlCYQJIK04tBE4ImZIX3O%2F%2FF%2FaUvbpMkZ%2Fm%2FhBjcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIDMbwD%2BnzP25cpsnCrcA3rRPnPU0Zh608hlzh3tNiT9FHlZjl%2FXQV7zCxBAkd5bJRm6pM34VsKje9oyBkCz72UD4UVj4npt%2BByRaCoOm1QcpfucH9DVBxJI4rZyXwI6nzFZ6A7xCA6RdZ07JOpR%2B%2Ff39XPkbcgircRzcpeTbb3VB6j1lxZ%2FhEroWDa2jf8625iE5hB8Lm%2BJXov1sIJFmU5EjK725MD8BmHz8fYcacMQEN0MqBETK608W6NqMaeaiUx6kNCR2MnC3yRwfIdjE4JWPW64yo6DouFQ%2FnFU7ndK4Aqtee%2BjLIcqW0JpxS%2FmT0Er%2Fjw17PxX9DsyHJ%2BItjN3UcmDsxNq1HgOVNc5BlMeVH3C2jqaImu44lQowAQqwWEV0u04eiQNSK3RykRdXzYTaK250e2L1uqTvSIcob2gCgzazri9u%2BWaT%2BM6e6%2BrMKSJikc8asT9wN8XOhssApMXfIG4Cr740AntZbDJPW4ZZ2IYiuE5vP7%2FXRMV4MwzROu%2BbjDdZToPlxIqVFBRyXnWdP9xBuafD4ERMyjyrp7h76CNyrds44kx6KKod9l3vjfSynb90NuBcxd9fsBdSQ5%2FDb1fGErk898dNH83JU5ejuXh9x9ivbYQptsEwd7g9vO9rzLtRrzNvOBuMNaqvsQGOqUB1z3tkV2%2BmW7LNJ8bWXd8O1dyLmZBmDpSijp7Q8nG5lzvIPFzzI1ifq%2FOGZ8ut2su4A14VDIOayqP6mLMDGyGch7mcjUVVuZkL1Vf%2BSD%2BojozdEe0E%2F81Duk9cC0FcJOw8Eh4nuFR2udYzxLT0Nxsh5s0xQZAhf5Fj%2F8dcc5NWspGZZvBP6f%2FwfBsDMxn84HdCTFxa4cgbTh793CIRDY8fQFrHvbE&X-Amz-Signature=54962d02a38f30cf1101d006b59f683f7c15ea3fa10378facc5d9003451f6bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVACBLPL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2EU6gNYRwWkG8vZG%2BX2GKXTFSfTOjXQ2BHUqqto29%2BAiEAgBn1nwxAnTlMhFGMl8LnqMWE3qghAaUiKdBLZBprpngq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIKqNlQzeic0Z8a4TyrcA80BkxWxViVELHzECW6uAUnUOF3HKdLImeXVQpwrarYa3qZNDLeOscJEdLtColL%2FJSPsLgNyYazKn3k%2Fxalw%2FYyv8JHjHXE2WQitHEr1No1rZOVQwJzWnFI1MFHMuKpX1MGGz%2FRQhWRKcgSHuuoDGUqe%2BKykSDt2vc54BHrOxKLs0zO7fOe69n6av8zCvHk0SWEzc%2BFn7otjNfrbPWG5tWLX6TqBOllkQLL04ZwC0SdSmVE8agLwY5LTi3tNF9my0nAiJ9YzsjQ4fSmOpjPcvaeLE%2FdFqG4T263NNOz4OhPIKMk2CvDNf1kPKM7Te1Xj5maBMbL68ZLosAwl8Zz4iaTj8ncXt%2Bl02SD567%2BeqY08c8bUbrRzgxu9YX%2F7jaFbiqsXaMs6E1Jx8spFz61cyprnIZbzYbGnvMvOe7DjQ2h8hVD9eDfrEmfwlB94x7SJcd0BzuVF4zM9kmkd7XIYIu%2FyN55bMlbhjBT7ZyD3Q09m6mWLlY3OGG4NUhlJHGzV4H0aY6llDD6Kl%2F%2F%2FV9WI0p5j0%2BqE3QvqfH2pfvWaq4jFhSsWZnx7GhaITFHCIHVjo74FyvVwSILnaPHlSYcQSKAf04KUzLGdcT2uWGFDak3rXK4YyrfywHcoRKwHMM%2BqvsQGOqUBf1blvxk2bUgaVI1UTCmC15X%2F0vM2Vh0E7iUJV3%2BXhKw5lt9UZykGTKy7DMa5AQwHwQf9Eo04jFpFp0Tozt7rLVCUruNzDiT5DyxuyxarsE19HC4%2BGg%2BqCxDc8MzUkfTAaApPqLokehcx4aad7jV70rSP1lxk1kc7tO5TgY143Yl8h9oR70BK%2Bd3M7hbQzmHyWB5hyaCqpaQ%2Fba7%2BLlniI3Ci36Yh&X-Amz-Signature=b73ac9fbf15843fbcac8bec67145cd13d81d2b8945dfb64d76e9ebf8cca00072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y6GF345%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7tU0AptY5NJmStaVAY0htVmbtQykHzS3U4PrQ4OftAAIhAKDFFFVinwDq%2Bm53nlz2iatUOiNsGOLgqKaS4aYQcS2pKv8DCDIQABoMNjM3NDIzMTgzODA1IgynS5y%2BHJP0R4dxt3oq3ANjC8FTxJr7gRu2gYuC000qTkFPAuvf7dPzdtGlyVD%2FJd%2BbO7cZSjVr9ECWk3N3o6xQYFbIqt6FblLehc6lcKALM7YbMpTXTY8udIq1Z9kTE9hSLBO3aMvUPuBQ5XsQpQ5goqQxzUTKY4zO1%2BTYSsEgwXPCws6bpPoFgTCPMKSgRnZli8sXPRRYyUfY%2BuLm%2Bsrp%2BlY3e9LEANbDQu7VUD3UKhKvad%2B3iqIR1eJ3Y8IKsMNt5vcxXrYuaHsUy4d%2B3fx0qJHiGlhnGSZ4bKnRL%2FpmNZUm6RdLtgfHFGkizJXlOqb4YSF2B1Gf6zC99wtS31xp4ZW%2FVdtAlIwvLR%2BEv0Hfch4bb74h9PxufTUIRwV5cSry7zqmos%2B1nO7yvqRQhzCNQBeUg5P31MSn%2BC9Uog7drhtatQXsEu%2Bz50Px9rZ3UI%2FSp2VXfOweW1PurXiyCDwV49BtCLoJmLVEHZdLGo00c7sU8%2BaU%2BtyhwzIcnwSJibg4RrcBtRkGOiXSW9%2B7hY0cJgYe4SrbdJSf%2Fw9sgha2SeX%2F7TNvCp8LCMBfqx%2BXBZNkENRYWJwZOGtQPHoq5VDE2jCcizRDZjBSMoki2J90VJYcRDmLxRv2jnw%2F1vu%2BeRMSVjEoGe0cTfmg6DCHq77EBjqkARLJVxzBm99%2B%2BEgaexd2YYQS%2BmSrwSE7lC6tLzIk17CsyOoiq86%2Fi%2B7PcIH774%2FlOyQiVDOeZ9dvZ%2BQDkrtSJPAHKG%2BFCD4dEPk5a11%2Fa5jhDuvedlC%2FhRbsrMG45VdVExtaAboUxUySBp2tdhQo2D6FPrV8OmIsI6627MmIKuLhtiRuwYhgJ%2Bvk5XlKTVx69Tiyzhh4jTPRQJBQI8G%2BQowU%2F%2FSH&X-Amz-Signature=3e24540538fa524115345f87832c29804e7c4ce23d97e972fd2896a3ebb90acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAET7CJ4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoBZOCgrpY5f90kTXD8JNuvy%2Fd6YTVBO02KhzGrJZp5wIhAOX2EC8Lct%2FWXKrLPfs%2FIHpx%2BFrBVBPVOXZJ7dHPcvONKv8DCDIQABoMNjM3NDIzMTgzODA1IgxJh%2BMaWycAB5u0DKYq3APL%2BSZh6YoUFQfYJuwgIL22C8oa%2B42S6mZEPsWXrB66nl2o2v2qWksDTTpnnZvLnD8Qenny%2B1Ap3zUlwhm0tAHi7b5Yzmk4%2Fw4cZ%2F8OAKZqQUbn5Qt3hIEqcoofYjvU5%2FK2G2Dv%2BAACek47fF8Ok7NUO5nht%2F7pcGToqicD1M78GWYnVQEmsP%2Fwm3%2BSeYJxhBWIG5TLkLmXZimWi3BwqilJysYQ9v0bCblaFjRyE1uZ1WyVvoIzQPpwm19VqPRFaIntojEXA76hVDIiJO3khFXWpnR9mATg4U8iDBsd4FlPEy6srOHPuT3t77idJLRqq%2FckF%2Bo8jeCPvPEAcX498%2BsOWDDbueLyV2OIlKfUbD6UfHhVwDLYZTBOA6%2BXEEBsgaRqJLesBNpDDJPllBkjLbxqB15M8MJQNSIMqkz1iTS9ayi2QRsQHb%2FY6vbTWoU%2B4KE%2BoKoZbX3MobiDPqNGf6XZBwJTte7bq4M0m4YOwvGWBZ7AmEmNYzgS9xJIiZChpeW1ORphqA3tuQf6lxq0knG44mN2kw0apU27DLoRTvL38PnCcsy1HziGU1S1BJiMe5p78aBetsNv7zeVuCg%2FhdbY9kKHgqJDRpEVVKJU7KNv4E6i8my7qWct7%2FIVwzCxq77EBjqkASX9cz%2F1gHj%2BwMe9aj8a5ePN5ArulKwlLJJr1NXVJz0gZIvvFSm3IsosHTYXnj72UPR3HTd9v7BF6eo6ltQkA3LOsr1RID2WpqrhTJS4P2UTzfFT74zA2%2BG1awmaekEkS9nrRTk4YXHpa3GcGIoQSetfkPcuSyPECIwMNnQYaVuz0n%2Fsrrb2xbtaHW8yigBZaqXYIb2LEDawR4nwE2q1xleB2oN%2F&X-Amz-Signature=d11739e0e289bc3d492b72a9d1668450eb815a0458a7778740665a15b1b7750f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=4a9899b189df00af391b63039367422590bef3ae7bc95c243f75d87fddb88bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUD7LYOF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDTZe9clkLVaTf4ZhVUAys3tIULjUW4V1v5FB0M74uDAiEAsSgmYSkjmKNCnX8lyRg6Bvo5GN01KUCs4vJGP7Q4jOQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH0J2Q6xZVwR83TI1CrcA3hEpmZ38ic14VhbIpd5b9dwU0gY3XuWPrZfuqzzXuzRIZFUFEf4Jf2csaAG7JcpWVG5ZsYE6Bjpb%2FkVEb8XFVxmZBzzooeyIUUXl4%2BT5eFad8pHO1SzXLE%2FYhicifkGI0wN7KeWNjh0lUCl0TfSmKAv3%2BdraBrR%2BWYSH3E5J2GXqZIPFh9Y5IWZqc6ELPIU%2F1%2FIsFKDkPqkcwcLYT%2BhJ5oq3XxlCy2j60VAIO%2FSB7QszV6iD%2F20eQftdT2E9d7AhHDLxXnDvnBlP8i14GRb6LfooPje23399cDwlwmfKBHUCeYH36GFHpnkUyIgMde5odc7L%2BtfcUouCZowy8lr8j8yhX8P3HR%2F9KljFVDGLQb2hfEFLqi8sjFplSrLTWI6oSoIn5raI3s73IL%2B3Uh4D8oMw0WggsQKBaKNOdFrL30M1sLBv1TXVL6wF%2FtIJEs%2FGMamLwuIaoSCM%2FJ5MRdUIqBwCMlX6ELlHtydt7X0A8glom6%2BI%2FPfC4fN7f3BNDo%2B7WJmwvWFNDKlnQkQ8gzDEbcEKWcAu2sVtMuQ33znRvcFWOe%2FVAQS2HCsimmJuw0YkrMkYYhIUiz3D41CED3Mqw6T%2BkvM8oILCspaNzwmLicwWnFhlSep8H8FSkBtMO6qvsQGOqUBYrY5NG6kFvSSrFRyznuPIL%2F%2FQti99vFkj2fBgOrAhFQsENTBfZHztbmXv3Mu082EXSI80aKSVCIVZsr741mJ3dlqKPAZKYn%2F1lRRabIJMBnpGG98wf1JcXmyhj%2BqlamY2cgFB33D2UdVOnl1edQ63CqclzkDFsO9CVPqvEkV7j3kBl%2BSVN3Nfn140VGj2y%2B6VhuQqfDx2YdXGva8cpIqWtrDd5bJ&X-Amz-Signature=d055ef3a2ba3d3522b60a18f24b79d081b4a9a4234aad39b25ebf22c56c11279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YFIV2N3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjB7%2Ba3CfXK8l1sLNZrkkeQ9VEEv80kxS8Gl39Oicq2QIhAMxgIDdiyhFrEbOznmzp1uxekNY9%2FXt4vM0X1ihk9DPyKv8DCDIQABoMNjM3NDIzMTgzODA1IgxKP4Ks8M1Asp6LWFYq3AOxPnBkN3fFa6znu5tE%2BWQ0bxVVpFl8OVNGu%2BdeBN%2BG5Mulb95n25FS9KjRz5%2F9VP85iBA%2Frnr2E%2F5zgwMiWB2PNprkXaBohB2qnvvIrWWZTAukbthm3u2Z2zm9ZgDs5%2B2Q29AdFj7Oc64nsAg7T%2BFNF1kg1JG1IUH%2Bk77Q8TWSIwP9hAtM4m%2BAVsc5le4JFfpYlVu8q3%2FK48wUzsKoe83o9ho4tLEhjnStZo1RZFAdnUcL4KQXl0LfckqVGV17MR4Onym0Jact9gtmYBckBii62DWifaZwzY1Zak4hME528%2FjMPk0vQY5YnmQdeqgiXBooSuv%2BiMdwfPrxWdkGDCmt0vB3cmtsxtSSOGTCr2hN3iys0VcXqfcb8ZL3odAkJ03pRtX4HWC6n32v9NrsNiqVTPBpoWYX%2BnFm2xpYsdtVJh3gM3%2FLSinbmDOsvz8EGy8dj5k6iBoh5IcYt1rlXtKpgp4qLtKxkTbDYWi%2BxgOFTCj78bjad01eIWZspou3JR3%2FG8%2Bsxyp7GolabDnfIt1FgrIiQH4n%2B76ZWcPctG7VdS1l%2FAuBHFBe%2BV9ROlsu925tVnqfU5JOrmFRuAHI54ZgASphDR230fBPJfFzxz061LkXIgbGCe4SDQnl8jCkq77EBjqkASBRa4VxqdbpS%2B1Ib6m3IjrRCLMm8UzHkitFzdgm%2FXIbDqIhSAqVEq%2FcDoU4R3kTXWc%2Bhi%2FpoNy39AoaGJNGFUCCeyFzLFnh01C%2Bnw0V%2FwLrUT7DLuadcGqysOY6KLLOyGooMTfni31HCQ%2F5SGum7k0hEVXWnv2w1zE%2FPc8X2uLbZVZDtXbew8yIc1q4XX7y9mSgvylgjS%2FxLJ4AEBSQ7oYS%2Fh9r&X-Amz-Signature=376bbf0b70ef5c557a33ecc6069df76f7b9e69a1310011c3b73185b55d20e143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YFIV2N3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjB7%2Ba3CfXK8l1sLNZrkkeQ9VEEv80kxS8Gl39Oicq2QIhAMxgIDdiyhFrEbOznmzp1uxekNY9%2FXt4vM0X1ihk9DPyKv8DCDIQABoMNjM3NDIzMTgzODA1IgxKP4Ks8M1Asp6LWFYq3AOxPnBkN3fFa6znu5tE%2BWQ0bxVVpFl8OVNGu%2BdeBN%2BG5Mulb95n25FS9KjRz5%2F9VP85iBA%2Frnr2E%2F5zgwMiWB2PNprkXaBohB2qnvvIrWWZTAukbthm3u2Z2zm9ZgDs5%2B2Q29AdFj7Oc64nsAg7T%2BFNF1kg1JG1IUH%2Bk77Q8TWSIwP9hAtM4m%2BAVsc5le4JFfpYlVu8q3%2FK48wUzsKoe83o9ho4tLEhjnStZo1RZFAdnUcL4KQXl0LfckqVGV17MR4Onym0Jact9gtmYBckBii62DWifaZwzY1Zak4hME528%2FjMPk0vQY5YnmQdeqgiXBooSuv%2BiMdwfPrxWdkGDCmt0vB3cmtsxtSSOGTCr2hN3iys0VcXqfcb8ZL3odAkJ03pRtX4HWC6n32v9NrsNiqVTPBpoWYX%2BnFm2xpYsdtVJh3gM3%2FLSinbmDOsvz8EGy8dj5k6iBoh5IcYt1rlXtKpgp4qLtKxkTbDYWi%2BxgOFTCj78bjad01eIWZspou3JR3%2FG8%2Bsxyp7GolabDnfIt1FgrIiQH4n%2B76ZWcPctG7VdS1l%2FAuBHFBe%2BV9ROlsu925tVnqfU5JOrmFRuAHI54ZgASphDR230fBPJfFzxz061LkXIgbGCe4SDQnl8jCkq77EBjqkASBRa4VxqdbpS%2B1Ib6m3IjrRCLMm8UzHkitFzdgm%2FXIbDqIhSAqVEq%2FcDoU4R3kTXWc%2Bhi%2FpoNy39AoaGJNGFUCCeyFzLFnh01C%2Bnw0V%2FwLrUT7DLuadcGqysOY6KLLOyGooMTfni31HCQ%2F5SGum7k0hEVXWnv2w1zE%2FPc8X2uLbZVZDtXbew8yIc1q4XX7y9mSgvylgjS%2FxLJ4AEBSQ7oYS%2Fh9r&X-Amz-Signature=e1ae8e49493bcd97e8deb2f5b03f027df5f85e8c236f56b7601442fe2a1544b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YFIV2N3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjB7%2Ba3CfXK8l1sLNZrkkeQ9VEEv80kxS8Gl39Oicq2QIhAMxgIDdiyhFrEbOznmzp1uxekNY9%2FXt4vM0X1ihk9DPyKv8DCDIQABoMNjM3NDIzMTgzODA1IgxKP4Ks8M1Asp6LWFYq3AOxPnBkN3fFa6znu5tE%2BWQ0bxVVpFl8OVNGu%2BdeBN%2BG5Mulb95n25FS9KjRz5%2F9VP85iBA%2Frnr2E%2F5zgwMiWB2PNprkXaBohB2qnvvIrWWZTAukbthm3u2Z2zm9ZgDs5%2B2Q29AdFj7Oc64nsAg7T%2BFNF1kg1JG1IUH%2Bk77Q8TWSIwP9hAtM4m%2BAVsc5le4JFfpYlVu8q3%2FK48wUzsKoe83o9ho4tLEhjnStZo1RZFAdnUcL4KQXl0LfckqVGV17MR4Onym0Jact9gtmYBckBii62DWifaZwzY1Zak4hME528%2FjMPk0vQY5YnmQdeqgiXBooSuv%2BiMdwfPrxWdkGDCmt0vB3cmtsxtSSOGTCr2hN3iys0VcXqfcb8ZL3odAkJ03pRtX4HWC6n32v9NrsNiqVTPBpoWYX%2BnFm2xpYsdtVJh3gM3%2FLSinbmDOsvz8EGy8dj5k6iBoh5IcYt1rlXtKpgp4qLtKxkTbDYWi%2BxgOFTCj78bjad01eIWZspou3JR3%2FG8%2Bsxyp7GolabDnfIt1FgrIiQH4n%2B76ZWcPctG7VdS1l%2FAuBHFBe%2BV9ROlsu925tVnqfU5JOrmFRuAHI54ZgASphDR230fBPJfFzxz061LkXIgbGCe4SDQnl8jCkq77EBjqkASBRa4VxqdbpS%2B1Ib6m3IjrRCLMm8UzHkitFzdgm%2FXIbDqIhSAqVEq%2FcDoU4R3kTXWc%2Bhi%2FpoNy39AoaGJNGFUCCeyFzLFnh01C%2Bnw0V%2FwLrUT7DLuadcGqysOY6KLLOyGooMTfni31HCQ%2F5SGum7k0hEVXWnv2w1zE%2FPc8X2uLbZVZDtXbew8yIc1q4XX7y9mSgvylgjS%2FxLJ4AEBSQ7oYS%2Fh9r&X-Amz-Signature=afd91cd32c53c9e6aa38b383bed8d20bb25dc90d72f68fd6a31925273f47aaa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YFIV2N3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjB7%2Ba3CfXK8l1sLNZrkkeQ9VEEv80kxS8Gl39Oicq2QIhAMxgIDdiyhFrEbOznmzp1uxekNY9%2FXt4vM0X1ihk9DPyKv8DCDIQABoMNjM3NDIzMTgzODA1IgxKP4Ks8M1Asp6LWFYq3AOxPnBkN3fFa6znu5tE%2BWQ0bxVVpFl8OVNGu%2BdeBN%2BG5Mulb95n25FS9KjRz5%2F9VP85iBA%2Frnr2E%2F5zgwMiWB2PNprkXaBohB2qnvvIrWWZTAukbthm3u2Z2zm9ZgDs5%2B2Q29AdFj7Oc64nsAg7T%2BFNF1kg1JG1IUH%2Bk77Q8TWSIwP9hAtM4m%2BAVsc5le4JFfpYlVu8q3%2FK48wUzsKoe83o9ho4tLEhjnStZo1RZFAdnUcL4KQXl0LfckqVGV17MR4Onym0Jact9gtmYBckBii62DWifaZwzY1Zak4hME528%2FjMPk0vQY5YnmQdeqgiXBooSuv%2BiMdwfPrxWdkGDCmt0vB3cmtsxtSSOGTCr2hN3iys0VcXqfcb8ZL3odAkJ03pRtX4HWC6n32v9NrsNiqVTPBpoWYX%2BnFm2xpYsdtVJh3gM3%2FLSinbmDOsvz8EGy8dj5k6iBoh5IcYt1rlXtKpgp4qLtKxkTbDYWi%2BxgOFTCj78bjad01eIWZspou3JR3%2FG8%2Bsxyp7GolabDnfIt1FgrIiQH4n%2B76ZWcPctG7VdS1l%2FAuBHFBe%2BV9ROlsu925tVnqfU5JOrmFRuAHI54ZgASphDR230fBPJfFzxz061LkXIgbGCe4SDQnl8jCkq77EBjqkASBRa4VxqdbpS%2B1Ib6m3IjrRCLMm8UzHkitFzdgm%2FXIbDqIhSAqVEq%2FcDoU4R3kTXWc%2Bhi%2FpoNy39AoaGJNGFUCCeyFzLFnh01C%2Bnw0V%2FwLrUT7DLuadcGqysOY6KLLOyGooMTfni31HCQ%2F5SGum7k0hEVXWnv2w1zE%2FPc8X2uLbZVZDtXbew8yIc1q4XX7y9mSgvylgjS%2FxLJ4AEBSQ7oYS%2Fh9r&X-Amz-Signature=080cc13befec634b1c9b6a14bcf44ac59ef13b99c4ca6b8af22ff845728f3596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YFIV2N3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjB7%2Ba3CfXK8l1sLNZrkkeQ9VEEv80kxS8Gl39Oicq2QIhAMxgIDdiyhFrEbOznmzp1uxekNY9%2FXt4vM0X1ihk9DPyKv8DCDIQABoMNjM3NDIzMTgzODA1IgxKP4Ks8M1Asp6LWFYq3AOxPnBkN3fFa6znu5tE%2BWQ0bxVVpFl8OVNGu%2BdeBN%2BG5Mulb95n25FS9KjRz5%2F9VP85iBA%2Frnr2E%2F5zgwMiWB2PNprkXaBohB2qnvvIrWWZTAukbthm3u2Z2zm9ZgDs5%2B2Q29AdFj7Oc64nsAg7T%2BFNF1kg1JG1IUH%2Bk77Q8TWSIwP9hAtM4m%2BAVsc5le4JFfpYlVu8q3%2FK48wUzsKoe83o9ho4tLEhjnStZo1RZFAdnUcL4KQXl0LfckqVGV17MR4Onym0Jact9gtmYBckBii62DWifaZwzY1Zak4hME528%2FjMPk0vQY5YnmQdeqgiXBooSuv%2BiMdwfPrxWdkGDCmt0vB3cmtsxtSSOGTCr2hN3iys0VcXqfcb8ZL3odAkJ03pRtX4HWC6n32v9NrsNiqVTPBpoWYX%2BnFm2xpYsdtVJh3gM3%2FLSinbmDOsvz8EGy8dj5k6iBoh5IcYt1rlXtKpgp4qLtKxkTbDYWi%2BxgOFTCj78bjad01eIWZspou3JR3%2FG8%2Bsxyp7GolabDnfIt1FgrIiQH4n%2B76ZWcPctG7VdS1l%2FAuBHFBe%2BV9ROlsu925tVnqfU5JOrmFRuAHI54ZgASphDR230fBPJfFzxz061LkXIgbGCe4SDQnl8jCkq77EBjqkASBRa4VxqdbpS%2B1Ib6m3IjrRCLMm8UzHkitFzdgm%2FXIbDqIhSAqVEq%2FcDoU4R3kTXWc%2Bhi%2FpoNy39AoaGJNGFUCCeyFzLFnh01C%2Bnw0V%2FwLrUT7DLuadcGqysOY6KLLOyGooMTfni31HCQ%2F5SGum7k0hEVXWnv2w1zE%2FPc8X2uLbZVZDtXbew8yIc1q4XX7y9mSgvylgjS%2FxLJ4AEBSQ7oYS%2Fh9r&X-Amz-Signature=9298459f109cf74ae5dd4f4bc562bc37b64552e4cfb8a0fce22ca795e9d53efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YFIV2N3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjB7%2Ba3CfXK8l1sLNZrkkeQ9VEEv80kxS8Gl39Oicq2QIhAMxgIDdiyhFrEbOznmzp1uxekNY9%2FXt4vM0X1ihk9DPyKv8DCDIQABoMNjM3NDIzMTgzODA1IgxKP4Ks8M1Asp6LWFYq3AOxPnBkN3fFa6znu5tE%2BWQ0bxVVpFl8OVNGu%2BdeBN%2BG5Mulb95n25FS9KjRz5%2F9VP85iBA%2Frnr2E%2F5zgwMiWB2PNprkXaBohB2qnvvIrWWZTAukbthm3u2Z2zm9ZgDs5%2B2Q29AdFj7Oc64nsAg7T%2BFNF1kg1JG1IUH%2Bk77Q8TWSIwP9hAtM4m%2BAVsc5le4JFfpYlVu8q3%2FK48wUzsKoe83o9ho4tLEhjnStZo1RZFAdnUcL4KQXl0LfckqVGV17MR4Onym0Jact9gtmYBckBii62DWifaZwzY1Zak4hME528%2FjMPk0vQY5YnmQdeqgiXBooSuv%2BiMdwfPrxWdkGDCmt0vB3cmtsxtSSOGTCr2hN3iys0VcXqfcb8ZL3odAkJ03pRtX4HWC6n32v9NrsNiqVTPBpoWYX%2BnFm2xpYsdtVJh3gM3%2FLSinbmDOsvz8EGy8dj5k6iBoh5IcYt1rlXtKpgp4qLtKxkTbDYWi%2BxgOFTCj78bjad01eIWZspou3JR3%2FG8%2Bsxyp7GolabDnfIt1FgrIiQH4n%2B76ZWcPctG7VdS1l%2FAuBHFBe%2BV9ROlsu925tVnqfU5JOrmFRuAHI54ZgASphDR230fBPJfFzxz061LkXIgbGCe4SDQnl8jCkq77EBjqkASBRa4VxqdbpS%2B1Ib6m3IjrRCLMm8UzHkitFzdgm%2FXIbDqIhSAqVEq%2FcDoU4R3kTXWc%2Bhi%2FpoNy39AoaGJNGFUCCeyFzLFnh01C%2Bnw0V%2FwLrUT7DLuadcGqysOY6KLLOyGooMTfni31HCQ%2F5SGum7k0hEVXWnv2w1zE%2FPc8X2uLbZVZDtXbew8yIc1q4XX7y9mSgvylgjS%2FxLJ4AEBSQ7oYS%2Fh9r&X-Amz-Signature=ee8124375d72b3a51c6cf2f7b2baf9f4e2851bf4c03cc2179a3cccd651db3e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YFIV2N3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjB7%2Ba3CfXK8l1sLNZrkkeQ9VEEv80kxS8Gl39Oicq2QIhAMxgIDdiyhFrEbOznmzp1uxekNY9%2FXt4vM0X1ihk9DPyKv8DCDIQABoMNjM3NDIzMTgzODA1IgxKP4Ks8M1Asp6LWFYq3AOxPnBkN3fFa6znu5tE%2BWQ0bxVVpFl8OVNGu%2BdeBN%2BG5Mulb95n25FS9KjRz5%2F9VP85iBA%2Frnr2E%2F5zgwMiWB2PNprkXaBohB2qnvvIrWWZTAukbthm3u2Z2zm9ZgDs5%2B2Q29AdFj7Oc64nsAg7T%2BFNF1kg1JG1IUH%2Bk77Q8TWSIwP9hAtM4m%2BAVsc5le4JFfpYlVu8q3%2FK48wUzsKoe83o9ho4tLEhjnStZo1RZFAdnUcL4KQXl0LfckqVGV17MR4Onym0Jact9gtmYBckBii62DWifaZwzY1Zak4hME528%2FjMPk0vQY5YnmQdeqgiXBooSuv%2BiMdwfPrxWdkGDCmt0vB3cmtsxtSSOGTCr2hN3iys0VcXqfcb8ZL3odAkJ03pRtX4HWC6n32v9NrsNiqVTPBpoWYX%2BnFm2xpYsdtVJh3gM3%2FLSinbmDOsvz8EGy8dj5k6iBoh5IcYt1rlXtKpgp4qLtKxkTbDYWi%2BxgOFTCj78bjad01eIWZspou3JR3%2FG8%2Bsxyp7GolabDnfIt1FgrIiQH4n%2B76ZWcPctG7VdS1l%2FAuBHFBe%2BV9ROlsu925tVnqfU5JOrmFRuAHI54ZgASphDR230fBPJfFzxz061LkXIgbGCe4SDQnl8jCkq77EBjqkASBRa4VxqdbpS%2B1Ib6m3IjrRCLMm8UzHkitFzdgm%2FXIbDqIhSAqVEq%2FcDoU4R3kTXWc%2Bhi%2FpoNy39AoaGJNGFUCCeyFzLFnh01C%2Bnw0V%2FwLrUT7DLuadcGqysOY6KLLOyGooMTfni31HCQ%2F5SGum7k0hEVXWnv2w1zE%2FPc8X2uLbZVZDtXbew8yIc1q4XX7y9mSgvylgjS%2FxLJ4AEBSQ7oYS%2Fh9r&X-Amz-Signature=afd91cd32c53c9e6aa38b383bed8d20bb25dc90d72f68fd6a31925273f47aaa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YFIV2N3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjB7%2Ba3CfXK8l1sLNZrkkeQ9VEEv80kxS8Gl39Oicq2QIhAMxgIDdiyhFrEbOznmzp1uxekNY9%2FXt4vM0X1ihk9DPyKv8DCDIQABoMNjM3NDIzMTgzODA1IgxKP4Ks8M1Asp6LWFYq3AOxPnBkN3fFa6znu5tE%2BWQ0bxVVpFl8OVNGu%2BdeBN%2BG5Mulb95n25FS9KjRz5%2F9VP85iBA%2Frnr2E%2F5zgwMiWB2PNprkXaBohB2qnvvIrWWZTAukbthm3u2Z2zm9ZgDs5%2B2Q29AdFj7Oc64nsAg7T%2BFNF1kg1JG1IUH%2Bk77Q8TWSIwP9hAtM4m%2BAVsc5le4JFfpYlVu8q3%2FK48wUzsKoe83o9ho4tLEhjnStZo1RZFAdnUcL4KQXl0LfckqVGV17MR4Onym0Jact9gtmYBckBii62DWifaZwzY1Zak4hME528%2FjMPk0vQY5YnmQdeqgiXBooSuv%2BiMdwfPrxWdkGDCmt0vB3cmtsxtSSOGTCr2hN3iys0VcXqfcb8ZL3odAkJ03pRtX4HWC6n32v9NrsNiqVTPBpoWYX%2BnFm2xpYsdtVJh3gM3%2FLSinbmDOsvz8EGy8dj5k6iBoh5IcYt1rlXtKpgp4qLtKxkTbDYWi%2BxgOFTCj78bjad01eIWZspou3JR3%2FG8%2Bsxyp7GolabDnfIt1FgrIiQH4n%2B76ZWcPctG7VdS1l%2FAuBHFBe%2BV9ROlsu925tVnqfU5JOrmFRuAHI54ZgASphDR230fBPJfFzxz061LkXIgbGCe4SDQnl8jCkq77EBjqkASBRa4VxqdbpS%2B1Ib6m3IjrRCLMm8UzHkitFzdgm%2FXIbDqIhSAqVEq%2FcDoU4R3kTXWc%2Bhi%2FpoNy39AoaGJNGFUCCeyFzLFnh01C%2Bnw0V%2FwLrUT7DLuadcGqysOY6KLLOyGooMTfni31HCQ%2F5SGum7k0hEVXWnv2w1zE%2FPc8X2uLbZVZDtXbew8yIc1q4XX7y9mSgvylgjS%2FxLJ4AEBSQ7oYS%2Fh9r&X-Amz-Signature=1a2f2724481000fb4b62309445616858350c310a536ecaf969d0ec1a7dfcc3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YFIV2N3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjB7%2Ba3CfXK8l1sLNZrkkeQ9VEEv80kxS8Gl39Oicq2QIhAMxgIDdiyhFrEbOznmzp1uxekNY9%2FXt4vM0X1ihk9DPyKv8DCDIQABoMNjM3NDIzMTgzODA1IgxKP4Ks8M1Asp6LWFYq3AOxPnBkN3fFa6znu5tE%2BWQ0bxVVpFl8OVNGu%2BdeBN%2BG5Mulb95n25FS9KjRz5%2F9VP85iBA%2Frnr2E%2F5zgwMiWB2PNprkXaBohB2qnvvIrWWZTAukbthm3u2Z2zm9ZgDs5%2B2Q29AdFj7Oc64nsAg7T%2BFNF1kg1JG1IUH%2Bk77Q8TWSIwP9hAtM4m%2BAVsc5le4JFfpYlVu8q3%2FK48wUzsKoe83o9ho4tLEhjnStZo1RZFAdnUcL4KQXl0LfckqVGV17MR4Onym0Jact9gtmYBckBii62DWifaZwzY1Zak4hME528%2FjMPk0vQY5YnmQdeqgiXBooSuv%2BiMdwfPrxWdkGDCmt0vB3cmtsxtSSOGTCr2hN3iys0VcXqfcb8ZL3odAkJ03pRtX4HWC6n32v9NrsNiqVTPBpoWYX%2BnFm2xpYsdtVJh3gM3%2FLSinbmDOsvz8EGy8dj5k6iBoh5IcYt1rlXtKpgp4qLtKxkTbDYWi%2BxgOFTCj78bjad01eIWZspou3JR3%2FG8%2Bsxyp7GolabDnfIt1FgrIiQH4n%2B76ZWcPctG7VdS1l%2FAuBHFBe%2BV9ROlsu925tVnqfU5JOrmFRuAHI54ZgASphDR230fBPJfFzxz061LkXIgbGCe4SDQnl8jCkq77EBjqkASBRa4VxqdbpS%2B1Ib6m3IjrRCLMm8UzHkitFzdgm%2FXIbDqIhSAqVEq%2FcDoU4R3kTXWc%2Bhi%2FpoNy39AoaGJNGFUCCeyFzLFnh01C%2Bnw0V%2FwLrUT7DLuadcGqysOY6KLLOyGooMTfni31HCQ%2F5SGum7k0hEVXWnv2w1zE%2FPc8X2uLbZVZDtXbew8yIc1q4XX7y9mSgvylgjS%2FxLJ4AEBSQ7oYS%2Fh9r&X-Amz-Signature=dbf27bcd9af7428b5afa2844ee139f434bce94b7d97d558f6939f871ff027895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YFIV2N3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjB7%2Ba3CfXK8l1sLNZrkkeQ9VEEv80kxS8Gl39Oicq2QIhAMxgIDdiyhFrEbOznmzp1uxekNY9%2FXt4vM0X1ihk9DPyKv8DCDIQABoMNjM3NDIzMTgzODA1IgxKP4Ks8M1Asp6LWFYq3AOxPnBkN3fFa6znu5tE%2BWQ0bxVVpFl8OVNGu%2BdeBN%2BG5Mulb95n25FS9KjRz5%2F9VP85iBA%2Frnr2E%2F5zgwMiWB2PNprkXaBohB2qnvvIrWWZTAukbthm3u2Z2zm9ZgDs5%2B2Q29AdFj7Oc64nsAg7T%2BFNF1kg1JG1IUH%2Bk77Q8TWSIwP9hAtM4m%2BAVsc5le4JFfpYlVu8q3%2FK48wUzsKoe83o9ho4tLEhjnStZo1RZFAdnUcL4KQXl0LfckqVGV17MR4Onym0Jact9gtmYBckBii62DWifaZwzY1Zak4hME528%2FjMPk0vQY5YnmQdeqgiXBooSuv%2BiMdwfPrxWdkGDCmt0vB3cmtsxtSSOGTCr2hN3iys0VcXqfcb8ZL3odAkJ03pRtX4HWC6n32v9NrsNiqVTPBpoWYX%2BnFm2xpYsdtVJh3gM3%2FLSinbmDOsvz8EGy8dj5k6iBoh5IcYt1rlXtKpgp4qLtKxkTbDYWi%2BxgOFTCj78bjad01eIWZspou3JR3%2FG8%2Bsxyp7GolabDnfIt1FgrIiQH4n%2B76ZWcPctG7VdS1l%2FAuBHFBe%2BV9ROlsu925tVnqfU5JOrmFRuAHI54ZgASphDR230fBPJfFzxz061LkXIgbGCe4SDQnl8jCkq77EBjqkASBRa4VxqdbpS%2B1Ib6m3IjrRCLMm8UzHkitFzdgm%2FXIbDqIhSAqVEq%2FcDoU4R3kTXWc%2Bhi%2FpoNy39AoaGJNGFUCCeyFzLFnh01C%2Bnw0V%2FwLrUT7DLuadcGqysOY6KLLOyGooMTfni31HCQ%2F5SGum7k0hEVXWnv2w1zE%2FPc8X2uLbZVZDtXbew8yIc1q4XX7y9mSgvylgjS%2FxLJ4AEBSQ7oYS%2Fh9r&X-Amz-Signature=071a6f9a4065adc5612d3156bdef57b77f59d268d573d71e5fb0f0b387913167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
