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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=7be7c0b3e6696e6688e860e3dcbf74bfc25076173140ffda2a9d047ade378ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=4e03fdd64b23bf36cd991c09bde41b34ac70b2df5cedfbcbe479170c5e58c85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=f4cb9e4946b08d1f8c3d2103b342dcd729b594ca098300e45d8ef1477a30a355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=3d3b5a0c69ff112f49459f126910861b0edce1be0d0000b487fac2665770b8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=a13dac1002b599b2e6c0abd448e858e787872a30b5c011d976f9efa011000ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=5c0b70ee46e4afe85c262f05ecbd6175ff8e1b97bbad3998c1f33d2113c56c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=2a02e5af698822b463ae19611c71cdf7795103a69a8e01cb169fc66ee50b1e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=586325abe21d558f724d5f98d25b8e782dab114c86b88ee5f625f7c7d76041fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=e9b4925ef33557872f35dcc1ecb49cb1781141261d0743cbf1280060a88da404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=bd788837cb9fd98f60daef9c18827b697c004061542ff3ff9f0174aac852e327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374DE3ZW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICwZojiw%2B7sR%2Fk962IoJaQxCgp24MTTILQTW80TLhWXZAiAt20K12imnEmVZXXA6wjGjdmBENfZmRTXoGsGeu7nMzCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMOUZcVsaVxKeFZ3XIKtwDEiM95dtMWFKMcvsETaewKAOvv59U48YpDsj7eRHlMiXfZzvv5Ss8dVBaUhwzFUS928C7cJrfEa55TY2FssKE4nSKWIKHJE3d9eNRMTDoitRuhSkqaDEjxiguSxrG80vI3x86kjKXBR9SB6ouj32KRvsIvGV82bjktXdHYzLDcTku2KSTPtHpcNbKFCCKjqiMxuBaqdK9E%2BXg4b0NlqKjndTC2KkIqr84b20wXo9WX0Ba8wLG31d3%2Fj20gio5qfqMH%2F79MwG2r71pnw%2Fp0fMzRqQrBWVRlNjGUWy8ZmsCVQygitCzUrNG4I6DkMXwHlpjgjhj51Qg1wm5B1UVbyFZFItPlBLeEsOGtQqO%2FcpqO7uE9SLQlgfqDqa%2BsQZLc1m5Qqr7wIX7NQkohFpKR2MawBSQecNWEG1futyG0o5SxU3u1gbb6GC3iqSvUnAAH%2Fj0f98J0RLlGa%2BbYt9zMAJfFADB7UGFR%2BcTdjAn42RFymDM2NlvKufMkGMfbUbaXwqnhlPLicFUkMHv9eq8bFCwLR2smdttak3bFn2Md7RL67sxugkOZscgg7Loxka814ASr8bmdgWtTlSOWL6ijJg6c17X7ch8ykgioRohSf3EwAaIpnArGH3ODUffMI0woNrGxAY6pgFgxINHlXAhuQeHJpHWH5EBrjqeZQ6Bqk4G3W8kfIy8AvEZc48izqi31WjP%2Bi2mP6NoL%2Bqo6V1xBUS8EZw8FFcfBXtqPp1Djvhd%2FFg6KV4kLlXpAeYUdNVcHXF2uziiG0fObdjmZDUWDe1A5Riizig0qNEl0kZ8mkL%2BDYYksNGmQBZT0ArrkohnWzI5uY39z2eL%2BgWBymNPtzYTwdGdnC9BMS%2B4zzvQ&X-Amz-Signature=962931c618517a2758fa4e862eba3aba4f374c4080c23e373641ebf8febdac92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVQJWMF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHgEYRLjkrdDbgQUzmXZMVg13xl%2FeHiGMlp30B%2FRoPyqAiAp3tE4VdhR5QyozftzY5BsRcd1uSU5f0Xn2wpLpep6Oir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM7myj5bprDPEB%2FZ59KtwDPmx%2BZd2plq9UU8rGfPNf5c%2FiS0RylDHLY5ANq4XABQtOo7VPFFrWVSq7DCxnTsxldBDGXtl8LjG1uFWl%2BQKaH0GT%2Bk7CO8T5%2BSMhLDFrDid0GLhPShk8YTZOCu3mbS6gaiEHDBQETETDlJOuMfDs311kXzj9GD%2FXdWnMc2DN3MW721fPgsSaixoEDvbjbr0cRbx5TpD56a%2BkYHquIVG39TOt2JBv2EfuTFy1ivev3ciEyrUn4XykNHH8%2FxTreOfTnsm18joOwbputfzqj2tphvPjFjMM9x2B4W60q1VzJuT%2Bakq%2BJMQPEJbdYQOGLO1G57cvknzrTp7yArpfw9t2ujgwrryFp24yYJrX8rPODyqONKJ5VPC%2BfMNdrEyZWKr%2FmudQpBDsST%2BrshHI7N4atdX2gyCzX7Sr0cLhQ2hbDao79bpJn6zfoAohu94x5EAPvCt%2B82pQ8ce1O4bQSfpWxGMD4ygWZPDni8gA3Ud8kCbKDoC735xutiPD9vnmTQd5RKbEM0xIsSYBrrpNrvWDUKvej0C6hJnJfhQKg1Y%2FjbGNNxiOeIF68w%2FPNCspc6Daq9H9ABoi8qxQug2dhjS3VLsbFD0LaBHrUviEdSu90PR8xCFFobU3aiBQCpcw9NrGxAY6pgFAevbkmylJFW8M%2F%2BTTF1uIM10jcP2C1WVcfwQ1dJ2d3%2Bp6O5uyoEPdqgYXzwobch1FNSKKR8FF%2FZ2lPJAhiadBoRj5aJ2KGe2CYq1sWhH%2F0vnftKH88rQVX0UsVCGFjm1xkgBauAMT3M13w7fxOvNlIVB6fcZ%2BYddCIrLyvLF7nOkMeNw07TrNOy4zjByBxmfDZwlghDtf3HbL1W3Na19%2BiUviD3Gc&X-Amz-Signature=da7ffb605a27d4a9c871d3f4cd3616a5f552442109ff47020b4497dd19c7ee1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H4AKU6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBS86%2FVOnZHMn6hEaNlHDovHY6dfOIgSlkPoxheToW1wAiBBb6NCOGW7kF%2BEuQIB592fogs1dHyfNRyJ5uBXUG1XOCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMiSbexcTUMvZ16K5iKtwDNnQe0yBz3oyU0cvfEc5ICEL7z6RAP7O2nURWQ3R%2Feuczx%2Bl0wnhWuATQaJ2sIcBIsuNta7DilUPGWNVUVk5uNhvYE1wRzKwEeHTTqhetB0k1uHHrlKizYIFxTjsqjtyDgwEYYkY7kOk6qqMvNLrDznUPN9ji%2FQdoWhY1V1zDjgrfI6njEi5PmqbQndhNibFU1X6QyeVTcI9gNZUMlKJeAJqwWXwi9rkeKDUfUuh%2Fb01AFeMTzVu2WNM92QbR1%2F%2BzCv7tY1ofmMU%2FM1%2BmtmdO1w7pBMN46YgdFxDGEZ3HHVSMXOLdKWxDzAKV1igZUniHKf4R%2Bf1z9hPp2GDrdmTnB75Z9yFYSSQghJpEJwFxw4%2FNzvXVxGN2f9ygwUiVqPEbSe9LwMJf7UHAMAXv0y2oPa9lR27nZriDRRcsTNhA0nSN30uSNV57xd9aVFgwlp0HJVioHFM%2Fdca7ZpEt7ahJtivHG%2Ft65gBWgkw7ntiQn3hwt0KLA5ukCkFfveFfOB%2BDJSz6Vh3Bj994QRQfvHoJXu%2BIXdhM1rfaxKqXzZq0YjKEvPVEAhkl3l5ZYoAAYtaJMbQ489HcmIM1hE0Lt0%2BEjUux1b6pXS1sRiaecqayKECE2FfUY4DqCM6tWh8wqNrGxAY6pgHoRrPYkNI5azhh6UH%2BJRpBpZQwFLYLnOta0CntE6SRxent4dowiFu44eOO6V0fK5YU1PpYP0tRsOWWDIigQw7hkEna2si3WvtUulkO0UuLR4do2qK2NPtBDfDzNv6CpCUbA9hajRf9Ok5q3liVWSxmxR%2F9w2wIp7Wh6nCweRGypEWGXm1JmtLBcYU3viEW%2FajhG6Kc3AIqiqj%2FiPQuA6XQ4Eaj7h0a&X-Amz-Signature=5813476195a6eb1f8f9d8b2cf8d9af6814c0f14fcfb0e23ca2542488ee34558c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=c37db601dbc21b36dfd989c43e629cc87bc2f189a0edacef68a2971bdcac6bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IXSDSHC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHyj0dZTPBM8UYlckyPEev2vs9ZyHB%2F5sS2LT%2B%2BUIbaGAiAmVXSaLfHxzQNEgUuJ%2BKmWcVnUgmcTyNufjCeX5Ihj%2BSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMQDAN5WrLic9CDpspKtwDoutPt8UTYBzrcpSRX0tQwmITcZrk7g%2BpdgI0d0mgIMu3GqIxM3Bdp3UmpE1DG8YYU55s0wQGJcx%2F0N0uQ7pAXOxECQcXhfZ6%2B2lfo0GEvWf2TqIBAJKlRIaXB5Nb0H7Lyw4c%2FHSLUJZGZn%2FULZ5W%2Fq6naWfp8KgA7rLCxBSYHtcGYtBNb6xv4fqV1EcTThUr%2FcDDtASrL3D7Q%2FXTyWa%2BuNFJ04KYowNY%2F1mhy7FTEHk4DZT17rhuRXsouWdKX%2Fgk5hOYhSYH8Yvz%2Fs6oAtNPT69P7qtfvojjRmbONwhnz5OVDZ0Am9%2Fn3nxzGPaRanPCxSVn0uiEa1rJjsT%2Bmj5tqPq3JaGGJj6dR6%2FgPUrtMyU277i7YYMVIOyIgf16liFKVYyJ1znE7f52I5G9awxyo4R8ynXlvlgZLtn9i3kC1FOx6B%2B9zJmGAu3X1WSYqVBIgtb4lCfH6EeAxJnVvVxQxS3bYQdby%2B5RYqDa70d2Ys4xLrm%2BOO2BjUgW3p%2BbgezmeWE4lW3BkS1wRp1ZOOx8vJVGdMO9dmeaRpQnyl4IEhFgWWQjBGDs4ZIg6dLZeKF2eyH6lr%2Bt0PUCXsKq7Cgk%2F6%2BnF8egFXq5Xna7sjFcdrIk8wwdSXmzmVokhBowodrGxAY6pgFVQA8irjysNL834g0%2FPtB5c6UyTMdTV6NXRz3aRt95yw4VHjNEWsx6r2cKwGBwZG2Lso7p1HXEtIzzkvH7XH2oQwO0n4rgmkKmDt1LIWczBlxvwLnywOS1F5YjjFqcOPtn%2BZZ60BquQ7gSYpLBLKZCAkTSyk5rZ41rhmI0zj9b4EzqVBfOds5Av%2BSWEsMafc2f7jxbrmO5uQ852MERbRUotYrE2lVr&X-Amz-Signature=ddea634f9a12bdd7d9322282a53796eb13ee2ffeae74959aac541408a595eded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=d2d5e0ad449cb607ba1570f3ea7b8693b5455e0736840a1e5b02f70de1384f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPHHGARE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHPtQyfH6H11ayWPYnrs1M%2BpKwIXWGJANuC8KrqNcZFZAiBjYjwA6rR0k5Px%2FE%2F8vN14LlO9xkZpf0EYMNzSGCSw0ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMLMg8dkIuLG0fcEpdKtwDeVj8Ef856Ms3QpfByuEybQbzwgCj50rTMRLS5uJmrClUHCDYyXThrt11nW4z%2BpExaip3q5r3h5fXaVscjqBx8Txsh22yXog%2Bu7UXUKa0%2BCMPAryE7wZyH3w%2BF62aqOo6%2Beq%2BCklJ7bkqVytUYULUTK7TRK9U64lxnNfGine%2BsSsSpZuPlW9BjWi0WxybsqXFz5D%2Fx%2Fr4UQKLgt2TqJH76pcj5V307WQH4Ff6WP3Nr%2F3a2ywKg7H8Hgf7rc00FhbCZtzg8IgXBZNW4SDcE66iSiCiNHZB3mXSePPFvle%2B%2BxKRwgPZ1%2FdFIJVJAs6uMs2WEjtPsX4oQmuWVWIM6fcnEtMPL3fHB9eUoe%2BR2UlmfUeMLA1ij%2B8C3xozFpLKh9YDPdVt1bZ1%2BvUh7fq6zwexZBZL2yaznBq9sFMquqT88n4M5xv1vbX2hbfANsqcGZDEcL8bQWfrQNGYDE7lxcLRSMlLBg0V2QcJGJqSYNz5fdf4AcGeR%2Fyw7iapaWKfrLKROm%2Fpg016HA8%2BucZD4q7kTWmELCxttWrNnu7vXkx4v9Zfhq7Kq79Dnnk5tYPNsdfAVObTUPrpxisvh2F%2Bm0YIPOG%2BwGwNRnPJaj9cG%2BkEw1khWC8FJxPdno7Au9Awi9vGxAY6pgGJYVea%2BLgKT0iau%2B%2FeZH9ECdfHcdwUdtFtRxCDm1%2Bn5X95wVi%2FBZPL4Onz7%2F1uF%2BOwXNLP6CVXr2p3zk5g4IlqKApoIFeRRzlMA8cqD3tXFtbLw3ZJ5Bf%2BAJ9wVcGbPFcAqjDEUQ4ADfCuyNu%2FEV%2Bco7XBdRaGzvIIcwaahw8sWjo5%2BN9mKbE5oiCrytgzU1v%2F3W%2Bhu1b0AOmlMdIdTIOLjT5%2BfcOO&X-Amz-Signature=98bf81bc370d7faed002487ee8ac54420f052d6568c5b3a1f8b85fad18b387dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=3136cc3b073f814d46e95c0cf359942bd018cc04b86647706658d778a716ebf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45NE2AO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDV73pwfxNoA7HfIfsnjbzAzIxDqALe60FMgcmi1%2FYUfQIgFzWuqjOIc4eI3L9J7tECHv%2F5IAEmMb2ZHhmzc7J6%2B7oq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDD%2FCnMrqTNCunB2TFSrcAzXgFgvkSh5i3tUtx2dWwQ3xzqFZd8qkG4QexImV6OF3AZqa9pAWraM75YVHOJHYRLT5bg%2BMXTyWJDMWKsv3yrIe4m6y3oleWb0dT%2BDD7EMys0B8Eo5A1vxqg2U3PEzY6%2BBJWxC58snyumQOcpmlv8bzPfjIjwRsV4TU%2FDj1otxmP39bedCSMfXhivrhd8vhsb4fh6t82BYoyis89W9TIBuWZpWhpePW9thkuexJ7dGt1d6iR9l62Py1c%2BMU%2Fkr3YbFvKeeemR5FF5KtftRESL5Tfw7M0nUVQEO%2FEyWTd64yhKTiHLyM36PJlKmxOLTj9%2Fk7q5mue%2FteiN3WwnB0pMHMWxyrs%2BnpOZjL3a2%2FdOYKJl76NtZHBXq8SDpWE7MSPcR9UyWjPtMEywRtgY1vISN9sSUQNjewf74Nd%2Bxu9PP%2Bvpdc77OdV%2FxG2AxOiTXPjIrQyadOsOKO6sa%2FZPGEhZLsAwhBwxe3ci%2FhwTaSgHqjXfIQtkzMRvKdPymMxyt78mNwBe%2BNx1VuP1lNmBmERG4%2FjSdWtpgSTfipgsNpkWt5XhMpLoUfYjXi8KbgjEJT%2FYMLiV%2Fjau%2BQSdwi%2FbxGZykRbLod8QGCRaRKtKjlIjrR0mgXDvOO%2Bgguc8JsMNrZxsQGOqUBzc2wV2BLzo7odDNsMJnVjSeB2pPUJA9ZS0Z6zmmCuZwohEWlnBafF1GLjk9TMV8TP9ocAQFn5gBN3mrs8xcoAfgjVeCxFaxcvyehIRMNQTyuRtsmzzgrDysgjv5VXGFZ%2FNhVH09pTM9SHKzuEwVx5rRoHpZpbboVtfZXXHdOjrR%2Fa2f0gtMev6pTY%2BrfiWDG0ZYb1F6a2dqaJbu7346ZUX%2FMmZiu&X-Amz-Signature=d95d140db5679e13e9d1bace2f061d9c547116ab3a12251e06be80934f6c5263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=f471ddca5c4e8095839e64580e2b79da0cb39063a694be348fb98efec2ff2042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7NWHFP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDRi5GK0Lp6Zh1mWppgwO4hoY7aOkIfYy8NCy6ikVwoIwIgNqAfA3HwJOB%2BRdgk9I3PF9eZOKvPh3dqqqtaYJlbKwMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP7tvCCGPxo6QPCL%2FircAzD9AXHIz%2FpOCdv2TF8GzLbiF5RhfYgqAFXSkHt11j%2FdHVtrU5aQ7AYlSWsI9GGEG8eMm62V00UG7zlAzq%2FulQbI6B4HiYLBxIYiRaeYLSPjQVoU9jZC8NAwv9bVhKxxM1Fg9oaNs%2F6me8dHUZKlYBDWKYe9oi7WXKRL%2FQ6lkfB5DiSfI69VgzQqBk%2FYi52SbXQj%2FSIVkEAYQOEezKqmh0gOhO0VpEhpCX2Q8ir30fhNkEsWo3b%2BgkYEnnNNVtbZyJIvQ8qc9kxOyJelGVu1NKdPNgoSgRtKGJYz09R26jhheGCr%2BR4YdO%2F1lWZtDESVUqgGml3%2BsF4pindVCS%2FEUjgB2QKkNMvjZWBarRl2GV8qCP76Qb2Ze2x5khLqJd%2Ff5nVDUyTGNUdRos6pj8PAaMc77Trsny4w9LtMdDN8yoEq0fRt7Ngv6XCGVA2w8yXqtfsFhWNiv3%2BnuzURDeegcuqyglj3k%2BdKQuzcTmoZe9lWhpKKedcUzlpDZmlI%2BurRdPj78bmJL2X04L5DHzE96ZU44c7HKOiz3HKPx1wNIL0iDhPBTiWbLkZc79gYyLE6kp2OncDO333YJBDnhVcYT5qgEM0E6mxFkShr%2BYAG9QPdYIIpljSSesI2VDkiMOzZxsQGOqUBlLZMV6yJzCV61ekxkmpTh8ztoSjAY%2BeJVFBl%2Bf%2B%2BwcJXHrCMSKikR2JsL%2BAmBFlzUi2tf8xihb5Pfw2peSh18B80QS8KKiaiZFEIR8etRg8VhCwNXrtkjGqKBqo6aY%2BvX9S6ZAiTJqhw7%2BseK6bQgh0udfBqiUszCQoyAs96SpEfJfKlwKAtZf4BSNHQ%2BOoImL5oAKJp82kqJPFYhKlLBE3K6Rxd&X-Amz-Signature=751bc680640a194210360248953ad683b8e79975858805b8419961305b1c93eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFKCUH6V%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCID8Cc%2FlQuENo6nMIGLyFDT3knS%2BB8G88AkB0Et6SHdeFAiBwi%2Fc5Cvgpf8ii8dA0F1aSYyymzTYtAGfOUZRxtlngZCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM%2Fet6n6rZIe4QBTmXKtwDD1E08UKtrNvB0Q2rutLxE%2FELLI0SOTnAQU3XOkRVHIAh9B4b%2BEoa9aHyCIQlobVYotuJagZqgk9MaEmdx2zWS7IlJiF5Fdc8UvsbIXg%2FqZU3qFjNpPGT0ydI5YEnqRkSmPMeEjZgA9HqXzJq%2B2Z3KsDp8l8CHJP%2FMGa8G973r2UuoQhsWCPeO7I4TlglFygsvg4R0bOt5UxUJ32p2DD6VBCKK%2BpietQCGydXjEv%2F4rOo8kHsr6GABuSdETz9yZPtdIxadAhS1BWapedtJ54NXmWOJD4k5%2BqN9y72rvi1dBvFqR3DDppgh%2F27E9Oto%2BQgjkJMbkw%2F8LTJCcUSGEPTiG%2Ftylsi9Un2jKp2tZIpM8%2F14Xl1tb88Qu6kxqBDPtCKy8Bfa2maU%2FPAPeqv5iSnn6rozVVcLDBK0ls%2BRrn1CHPgZiUt8WfL%2FzXyUT4hg7Na%2FbovzwlIsgb%2F%2BUv3I8ng0I7XRmMSOt9%2FUtV9HzJHYd%2FvVdqiYZh0K3Klq5ajef1PfUG%2FLLjAq029zEKNnwU%2BICGnhUSbm5bThsDgGFOmMSI9pWeb9ljBBuWPPaM1%2FCmsTl96jd9%2BrTiRlt3mpDvMZgfl%2FYogmW5%2B6iPLnzLGYpF2t35W3%2BGnpThwftgw%2B9rGxAY6pgEJ7jr%2Ff7H%2FD0ngpFPnUnLKivEVeX%2FciCaGc%2Bwd5ZxTwvgAuFEUfpLkHOgTDy9Cd%2B7mLCqnEddvWHqaKiy9%2BsPb9SJzU1wuG%2BgACNYvSz7YZmi%2B2%2BGe63ZcPLLC3d%2Bzs1so%2F4EnYA8gvmZ%2BsUB6jHHosAk4HHMm6038RU096yGSLgqdUqZ%2BfW%2BMteoIvzsRwsO4GtSXE6NdUzYmL5A2KlaCk56QzZ6D&X-Amz-Signature=6ab5eb1967a3c55512e4cc387ec2872990867d949cff3d78fbabd0e305cb6954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQURYR3V%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIHLeC5NxgXac7vZ9CAUvGi13TpRpF4giqLtVpaSTGPnVAiEAkNYhV4JPxbhVHsVSofgcJd0KV3t1Rs0pqFssnKs%2Bgxsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOI54zBEfryb%2FjJWJSrcAzRDGXf1agqyvTlUKMna8hJaBZQDxvgJDEO0opmArPhF%2BPm4uiUx7ubaC9g7fdwSMwPfzPQpT5zZ839B9UUgGJN5g8qh7QtpVK328J18bBRBh2DrdQ%2BaDKfy2zFutF%2F8NZ12CAhaTXDHGQb5OhX2D2wBVw6B%2BCj5HfcSoyO1GfE%2BFEs%2BSL4u9rt0dQ%2B9qBouOl4gPgJxC%2FNZ8t2l0KquIMQ8fcC82sERgC7vHtAqwQubGcmkJXGAMQ4GFDtKL9HH4%2BAubyQjnACMiISxRZSdgm3KwPwzpk1VffRezwyCDgQ5mmIdNULDBQ1DZQelQ0Tf9i%2BjouR3BrGj5qEkN2Acubswt6YNP29M2Q6HaQK%2ByqlpW5RjPiN8%2Bc5R3eVrpC5UgvIybtAGuHoehYN0VICpRwRr8rMuJf4jX0FbIC3jy1QJM77IwEUBRV2zakvrnuc2t1Rc5DHIjxGAROO8A6C3rT29dyaycG%2FW7kXX9RoeBy2w4EcPzd%2B7RIGPulCa6o3o7d639rXAjYVSy0XwNRElOjQ5QlY5LhA007qSrh5%2FbJmhY0WJ2LbtmYPX7CtsjeGSzpKaaUJGdYnz%2FbkFscY0ciPXHUxUOnB30xO8uBjFzBhFMoumK%2BNRrXrE8GzLMP%2FZxsQGOqUBuHtT%2BQW5UFOs%2BpK6gOhr6C0%2BtGpod4KznJj4Tl0MmLC%2BZJLILP5CSy9WPkss9TKTtca7wfHXCwnUoQhx8u0Pc6219Blx84yW7nKCUfTyjHERSqn4DbpXImTinOTu%2F26yaEc7NY5RfkkydRWvJx5Td%2FR%2BXZT9%2BrsiVwSvGuIi1%2FPjO3W%2B2qo7evhEOWQe3SOmn0GRMhmmdpfFrcHVZt6u2ZE3DrVO&X-Amz-Signature=939fe84d2c8a068b64b60fe71f7a2f8ef444ab11aff31b0347ea9ac1b7da4714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AH6DUZN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDRxYzUHMSLoxj8ZfBAaB3NDUsRg0FDTt0DdFNL5OnM9gIgSSMCBdHuarHQPX5Enq9KsIbtyrnfQlofEARq50cv7A0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFVdx6%2Fqkz%2Bs9hgZKyrcAyI4shXyacW7Tou3cfNxZw3cDjU8jlkTSl7WtrxBQhwz6%2FkkvTPX92LTq1jtt2VnmodIlAkIBjcQzq5sX0FwfXVzrpLTKsjjGj2ls2a60BvRUg9Dra1729ZYSom3blQUU7ZVp14hjO6WBNsO8jBv0oVCgMySII5JnVrg3VBADAUseckRxZ6tTizGNGMuN2bECwMwF%2F0dZeFIK%2FFzAhuDSAKXuV3Mbmn7KYVCMbVdgungsYoepbH0j4qpzFx2HtoQ6a9gH135pZv8Ih%2FlceOMQwVS38MUUeDDJoIB8IRzC%2BC%2BAcXanDbQ1dOvCJYKHpi8sFGI%2B4K0DhoO3TJsjVQmFyJaxdFFosIVvyCF%2BaWmZZU8sd5aLjFmXu%2FvFUZ6kSVu4JIAM3vK%2BqxP2MfosF5Vf4WXYh50DKqhkcJNH5quA85DPqkOgmwCRiYYFXYcS4%2FahxGJF%2BJ2ufAaqeGELiVWhvEqxMupRWqQ6lC5lxwCLQXhPV3FiDoECCOGuGtl1l%2BnVfvyP%2FPHkAMqM%2B4pJrs5B97hPUtW8Zh6%2BWzcngIRyJbMHIAH8QaEkix0WdBcg8TBRmb4nrqai1E%2BQwYBByhzd8ZMje5YYNvxusbmsitivynLKTwVQ0rBbSJ4gRCSMJjaxsQGOqUBcyPViKKnsYEitmFp1%2FDGKb8TY9uTKOImTR%2F4GOcfawdzM0sCQ64v2rsfg3cIABbsGuFMpaJO5JbBAxu%2Bksy79rfER5FpjGOiWacfr3CQ4SS3zNsqikRaLzP2296OlJkzLSE7xAmAI%2BtSA7Zko5MCNQmks5kbouG7hKpw%2FeC9O50yyZ9ChY8TfoS5m6Pm9ue7PXvbChGrlZaviWb%2BtSjEbkjZ9q5e&X-Amz-Signature=1a82561386ae40582296ab6e6dde218e26805f7de5d3056c2b3df647cdd08183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKF5K5PB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBzOd4pLb6xkGLaCLH%2FLLoLxet7rRGa%2BE0oW4mkMYcgXAiEA%2BjhdoSEFf%2FUHzrzt1vnhdKmds50Vc7Fsz48eikiYCeYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEv4s1HJhtoETLV%2B5yrcA7ZD%2FFq4%2BF5OTQYhujmScOm1w0VaYqL%2F8RHfmJNJoDt0qcWcOfVIMzvDsi9DmWpkH9qOpSf3IUZ%2BlblnT00P6WboYaB1fJWDmhEBCqUPBJGL2X6Cl1MwqGHgci8%2BVaAV8hN5YhL1afJrGwFnmA3MK5y8vZ8D6DfhctOCrR%2Fp0I4w2bVLXUJw4q0R%2BVFG7ZLYLPZHDhU2R5DFWXuXRsXW4p6WWbTI2xD03BDth%2B4epP2muK%2FtrKsyjI0Mimrao6C7ymzt6KSegKPGqbHrQqlZdfoz2RX2%2Fm2eaUWGyRvreC8iMAXyR5rzDfbCPGl%2BHlDoj6qtMQYs4X80FHP%2FZndcrES0AGS3Y7YJXgChZYfEJEATB%2Bm5RY%2BGKZF9hZ%2F4cG5s43Bif8D8oEHThx6oFTgEcXNOmxy9KSmS9pXiRde3MUWTtg4ojR0goCKJnx6f9XLGsB52TtDwAVp8ZFxyMYbn2TlDgRAVPl%2B0zNJPu10Oi7YBeric55ndBV9bs%2FIizhNlIJGVhG%2BxPLgjIXr3f%2BYHdkLHzTQmIUBamv%2BjkVSNOGPwnufVNmZ5K0qgmhwZrLSVcKqeNwo%2Bi7cwdV9E%2FfaPxf44yYYr80GNGlQse9EPmUv2AdAlfjkkW4U5%2FIapMNLbxsQGOqUBITYXcp3gUJV%2F%2FFSmFV8yucwchB2Ol5kOH%2Balgj4%2FoUKWzASS0bWnE%2FNDkoCZJq2EyNI0457N376kqZIJHi585hgBzvmUULrN0%2FNS6CA2Y%2B4tDWhXVTD6GATaomO48eVXeNQWuc2SL7dKoQgOFHhHn01iMIi3%2FR369788u9FtCEH%2BnV7SLvaD8QTpVfnCGh8QB6cBr8gIk9KwoyZZpxbjIqvT7Oyv&X-Amz-Signature=8d0ab77af3a1f5407accfd7bc7d42243cb0ce75281a53b4926bd14ad142c1add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=46987e10408053143ca6f886072860a8bfe1b984aa4113e2ad987a433f4bc96b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD45UGMM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCuiMC2UBc5WXqawrNByizo2mdh1DOQ7z8qNAbJO3BOLgIgKZQ5OZc5h7%2B%2BxrVbFL2jefDck48A7wvjstD1ZzsMRH4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMEISkwbbhWCx71fkircA969YwuQFptil3Ko2w1OfhbsIXPF9Xl%2B%2BARzEXh%2BF%2B8QQGnAEevvL62b83GcL8MLzzUuxY0G8c6oMa876pNc959dGvpMnjPPBUfdThCAg4sXtAwIgh9CkrXaZfjvuSBnAcRPMrKWXDvLDUFJ%2B9JeRErMPm%2FSt9ls0NdKu8ER9SiijbTih%2F2cxxSyY5D2YtIEKB%2FobgPW917dF%2B%2FHJFXOocWWuF%2BwObfTPyGTjLH%2Bu5w811L%2BvAaWZF4qfi8SQgHDqGGh8InqkhIqD9VKozXz9pVY1YADnreP0IeW8671KK%2FBxmOWLe451ys9CtdCIy30i%2FVu%2Bw3z%2FM9tXskkc%2B5g%2FznfMa0RxBeYUCA4ImBSQ1YKtk%2Bubgm%2BY6G8WO%2FvD4vlUOKTyT2kssuaU8TmVCoqrK2ipeQF7iBKE3%2FSQljRHBXuUJnPy14YBwFU%2FiHIKm5OZ50kyWeRabeA85nzoWn4a76C7eXEXNNky%2Bh46WHC2dKZHl0wsHDajIQmyg3TWpwQu3uxRyzXHz%2B5%2FRU%2BFlFI2oWJQyxLtUmu3QjtEa%2Fa7i9Id823oMQWrEsnVwl7vLy8pxBoB%2FlaYfs1ZUG7ze3pA8%2FikQCtkao5lnFZzBCD4kXN590NljNvnyxlzff%2BMNLaxsQGOqUB3pKNA0f7Hruy8W4eD2dzCEXV1s00DzhAI9EverPa05dFwVLsp9Uzylo4rbigG49S4AAyBDzzP72duHV0AmeGbPkzs8kuMPBAX%2FPwklF%2FiTjuzcVDW%2FOt9K5pWpvZA%2BoEx4TYy5yJHhql1HMIz5Ar4mooefqHUp%2Fg5QBnLHGTbk3N2w65jI0aovlAiHCrWLWdlGewzuPQLfWOQTYBUbWj46OmtVMp&X-Amz-Signature=ce5a88b05cfe65b6005ed7506dca2613db1c506614e42911d4011223641ab966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SSGSLZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCkJJzjMEbB0AvzdHXw0nZ%2BnmTbsmQbpqdCKAHhmhoLxwIhAKNLXSSZ6SBUoyXw3%2Fr8EswBt0mS67tmxZUWuRF7wGLWKv8DCFgQABoMNjM3NDIzMTgzODA1IgxjsPMIZp4z7tkzdxsq3AMo4ALu4KmBPIsH3wfoC%2FbS6AcxO8HH5SXKLHQ31H71k8W9RLkPlJzgLtUz8faR5xa2Tk%2B4xa4AI7Qpcwf5P1686dpSr2AZYTs721AoRUri5zXj%2BHo4iGZLRBd1suSkQrTIcFbgUqucoHTsPtsLhW1qdcS4zihuIFVUy%2BiJ6t86udizz9m8d0Gy4yBD4QCN5fcRlQgEgAsxTwYng1byxzV8MXLu%2Bgg%2BUt1DENgzXSX3%2FUYF12JdqwiplnSLTY3%2Fp6fgR1pDcNeOHli5GP6UM9jlwPkSCQjpyz0B7DICqYx%2BVmRZZ7Nkr5zmyoRnGmtCvohFWjaXdWLWpSMyMfEnlmBiq57LnNjKzZJPwgWuIrrkcpc17smSf3nwvS2AMUvsxZkoBcrB7UHzTRRt69hnI6vd%2BZzwhkndc5%2FYwFcgBXJ9Wu3WlYbanNzYteQGi4sX15H2yGIVA9MB64MEF8aLkPGBkzHh3obE8Rq1nN42HA2IGer3RpegphlZW%2F4jZWkBPUk85P8W0Q4h95uw91aXHZdCA%2FuYBhxN9mkaMP3BdIEqOjCwbXVss3MTjGY308myE5XolLYkMM8BTHpC5FG%2F%2BVXxnMaHZ94Ea1j7G0WgD8iTPrwggH81gBmiflqftzDz2sbEBjqkAX3HUeu0sbZn%2B8w4janD%2FGNjMovCfMcyNr%2BXDnvJLczPy2BTmswUT91ACfTzNFyW9TtJ%2FjJDJy%2BWiqBOxw6V%2Fml84O8cxsnM1%2BKUcqOBlDzdw%2BuS%2BxaW3mOZUGFL%2F9Xz4oBBptpxsumiHiWlANno7%2B0ICY4H0ZCvVFDF7XHkLwWb%2FLd0vq%2FWc51moXgYsRkwqsG5KPO4zrlUBRXvwSjE4DCb6ykJ&X-Amz-Signature=cb5762973765597113e39c710fc5c4392274271879a1aec72ecab8fe24beb6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SSGSLZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCkJJzjMEbB0AvzdHXw0nZ%2BnmTbsmQbpqdCKAHhmhoLxwIhAKNLXSSZ6SBUoyXw3%2Fr8EswBt0mS67tmxZUWuRF7wGLWKv8DCFgQABoMNjM3NDIzMTgzODA1IgxjsPMIZp4z7tkzdxsq3AMo4ALu4KmBPIsH3wfoC%2FbS6AcxO8HH5SXKLHQ31H71k8W9RLkPlJzgLtUz8faR5xa2Tk%2B4xa4AI7Qpcwf5P1686dpSr2AZYTs721AoRUri5zXj%2BHo4iGZLRBd1suSkQrTIcFbgUqucoHTsPtsLhW1qdcS4zihuIFVUy%2BiJ6t86udizz9m8d0Gy4yBD4QCN5fcRlQgEgAsxTwYng1byxzV8MXLu%2Bgg%2BUt1DENgzXSX3%2FUYF12JdqwiplnSLTY3%2Fp6fgR1pDcNeOHli5GP6UM9jlwPkSCQjpyz0B7DICqYx%2BVmRZZ7Nkr5zmyoRnGmtCvohFWjaXdWLWpSMyMfEnlmBiq57LnNjKzZJPwgWuIrrkcpc17smSf3nwvS2AMUvsxZkoBcrB7UHzTRRt69hnI6vd%2BZzwhkndc5%2FYwFcgBXJ9Wu3WlYbanNzYteQGi4sX15H2yGIVA9MB64MEF8aLkPGBkzHh3obE8Rq1nN42HA2IGer3RpegphlZW%2F4jZWkBPUk85P8W0Q4h95uw91aXHZdCA%2FuYBhxN9mkaMP3BdIEqOjCwbXVss3MTjGY308myE5XolLYkMM8BTHpC5FG%2F%2BVXxnMaHZ94Ea1j7G0WgD8iTPrwggH81gBmiflqftzDz2sbEBjqkAX3HUeu0sbZn%2B8w4janD%2FGNjMovCfMcyNr%2BXDnvJLczPy2BTmswUT91ACfTzNFyW9TtJ%2FjJDJy%2BWiqBOxw6V%2Fml84O8cxsnM1%2BKUcqOBlDzdw%2BuS%2BxaW3mOZUGFL%2F9Xz4oBBptpxsumiHiWlANno7%2B0ICY4H0ZCvVFDF7XHkLwWb%2FLd0vq%2FWc51moXgYsRkwqsG5KPO4zrlUBRXvwSjE4DCb6ykJ&X-Amz-Signature=14b6be4fae76fd4b271492bfa15f4c54c9c0283d5c254c54a1260fb2b152e891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SSGSLZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCkJJzjMEbB0AvzdHXw0nZ%2BnmTbsmQbpqdCKAHhmhoLxwIhAKNLXSSZ6SBUoyXw3%2Fr8EswBt0mS67tmxZUWuRF7wGLWKv8DCFgQABoMNjM3NDIzMTgzODA1IgxjsPMIZp4z7tkzdxsq3AMo4ALu4KmBPIsH3wfoC%2FbS6AcxO8HH5SXKLHQ31H71k8W9RLkPlJzgLtUz8faR5xa2Tk%2B4xa4AI7Qpcwf5P1686dpSr2AZYTs721AoRUri5zXj%2BHo4iGZLRBd1suSkQrTIcFbgUqucoHTsPtsLhW1qdcS4zihuIFVUy%2BiJ6t86udizz9m8d0Gy4yBD4QCN5fcRlQgEgAsxTwYng1byxzV8MXLu%2Bgg%2BUt1DENgzXSX3%2FUYF12JdqwiplnSLTY3%2Fp6fgR1pDcNeOHli5GP6UM9jlwPkSCQjpyz0B7DICqYx%2BVmRZZ7Nkr5zmyoRnGmtCvohFWjaXdWLWpSMyMfEnlmBiq57LnNjKzZJPwgWuIrrkcpc17smSf3nwvS2AMUvsxZkoBcrB7UHzTRRt69hnI6vd%2BZzwhkndc5%2FYwFcgBXJ9Wu3WlYbanNzYteQGi4sX15H2yGIVA9MB64MEF8aLkPGBkzHh3obE8Rq1nN42HA2IGer3RpegphlZW%2F4jZWkBPUk85P8W0Q4h95uw91aXHZdCA%2FuYBhxN9mkaMP3BdIEqOjCwbXVss3MTjGY308myE5XolLYkMM8BTHpC5FG%2F%2BVXxnMaHZ94Ea1j7G0WgD8iTPrwggH81gBmiflqftzDz2sbEBjqkAX3HUeu0sbZn%2B8w4janD%2FGNjMovCfMcyNr%2BXDnvJLczPy2BTmswUT91ACfTzNFyW9TtJ%2FjJDJy%2BWiqBOxw6V%2Fml84O8cxsnM1%2BKUcqOBlDzdw%2BuS%2BxaW3mOZUGFL%2F9Xz4oBBptpxsumiHiWlANno7%2B0ICY4H0ZCvVFDF7XHkLwWb%2FLd0vq%2FWc51moXgYsRkwqsG5KPO4zrlUBRXvwSjE4DCb6ykJ&X-Amz-Signature=df07e7df96628d044557cd5c43adbcf23fea443e89042ac57661cc6795524204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SSGSLZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCkJJzjMEbB0AvzdHXw0nZ%2BnmTbsmQbpqdCKAHhmhoLxwIhAKNLXSSZ6SBUoyXw3%2Fr8EswBt0mS67tmxZUWuRF7wGLWKv8DCFgQABoMNjM3NDIzMTgzODA1IgxjsPMIZp4z7tkzdxsq3AMo4ALu4KmBPIsH3wfoC%2FbS6AcxO8HH5SXKLHQ31H71k8W9RLkPlJzgLtUz8faR5xa2Tk%2B4xa4AI7Qpcwf5P1686dpSr2AZYTs721AoRUri5zXj%2BHo4iGZLRBd1suSkQrTIcFbgUqucoHTsPtsLhW1qdcS4zihuIFVUy%2BiJ6t86udizz9m8d0Gy4yBD4QCN5fcRlQgEgAsxTwYng1byxzV8MXLu%2Bgg%2BUt1DENgzXSX3%2FUYF12JdqwiplnSLTY3%2Fp6fgR1pDcNeOHli5GP6UM9jlwPkSCQjpyz0B7DICqYx%2BVmRZZ7Nkr5zmyoRnGmtCvohFWjaXdWLWpSMyMfEnlmBiq57LnNjKzZJPwgWuIrrkcpc17smSf3nwvS2AMUvsxZkoBcrB7UHzTRRt69hnI6vd%2BZzwhkndc5%2FYwFcgBXJ9Wu3WlYbanNzYteQGi4sX15H2yGIVA9MB64MEF8aLkPGBkzHh3obE8Rq1nN42HA2IGer3RpegphlZW%2F4jZWkBPUk85P8W0Q4h95uw91aXHZdCA%2FuYBhxN9mkaMP3BdIEqOjCwbXVss3MTjGY308myE5XolLYkMM8BTHpC5FG%2F%2BVXxnMaHZ94Ea1j7G0WgD8iTPrwggH81gBmiflqftzDz2sbEBjqkAX3HUeu0sbZn%2B8w4janD%2FGNjMovCfMcyNr%2BXDnvJLczPy2BTmswUT91ACfTzNFyW9TtJ%2FjJDJy%2BWiqBOxw6V%2Fml84O8cxsnM1%2BKUcqOBlDzdw%2BuS%2BxaW3mOZUGFL%2F9Xz4oBBptpxsumiHiWlANno7%2B0ICY4H0ZCvVFDF7XHkLwWb%2FLd0vq%2FWc51moXgYsRkwqsG5KPO4zrlUBRXvwSjE4DCb6ykJ&X-Amz-Signature=78180a2454ca86861a9d70e0aa4b5f2faca448fc628a223afc2b0da23787bc56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SSGSLZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCkJJzjMEbB0AvzdHXw0nZ%2BnmTbsmQbpqdCKAHhmhoLxwIhAKNLXSSZ6SBUoyXw3%2Fr8EswBt0mS67tmxZUWuRF7wGLWKv8DCFgQABoMNjM3NDIzMTgzODA1IgxjsPMIZp4z7tkzdxsq3AMo4ALu4KmBPIsH3wfoC%2FbS6AcxO8HH5SXKLHQ31H71k8W9RLkPlJzgLtUz8faR5xa2Tk%2B4xa4AI7Qpcwf5P1686dpSr2AZYTs721AoRUri5zXj%2BHo4iGZLRBd1suSkQrTIcFbgUqucoHTsPtsLhW1qdcS4zihuIFVUy%2BiJ6t86udizz9m8d0Gy4yBD4QCN5fcRlQgEgAsxTwYng1byxzV8MXLu%2Bgg%2BUt1DENgzXSX3%2FUYF12JdqwiplnSLTY3%2Fp6fgR1pDcNeOHli5GP6UM9jlwPkSCQjpyz0B7DICqYx%2BVmRZZ7Nkr5zmyoRnGmtCvohFWjaXdWLWpSMyMfEnlmBiq57LnNjKzZJPwgWuIrrkcpc17smSf3nwvS2AMUvsxZkoBcrB7UHzTRRt69hnI6vd%2BZzwhkndc5%2FYwFcgBXJ9Wu3WlYbanNzYteQGi4sX15H2yGIVA9MB64MEF8aLkPGBkzHh3obE8Rq1nN42HA2IGer3RpegphlZW%2F4jZWkBPUk85P8W0Q4h95uw91aXHZdCA%2FuYBhxN9mkaMP3BdIEqOjCwbXVss3MTjGY308myE5XolLYkMM8BTHpC5FG%2F%2BVXxnMaHZ94Ea1j7G0WgD8iTPrwggH81gBmiflqftzDz2sbEBjqkAX3HUeu0sbZn%2B8w4janD%2FGNjMovCfMcyNr%2BXDnvJLczPy2BTmswUT91ACfTzNFyW9TtJ%2FjJDJy%2BWiqBOxw6V%2Fml84O8cxsnM1%2BKUcqOBlDzdw%2BuS%2BxaW3mOZUGFL%2F9Xz4oBBptpxsumiHiWlANno7%2B0ICY4H0ZCvVFDF7XHkLwWb%2FLd0vq%2FWc51moXgYsRkwqsG5KPO4zrlUBRXvwSjE4DCb6ykJ&X-Amz-Signature=07fb7fe6e00f1d35f126486352e53a936a22ca6bfd5c4d570a87d1da28e5ee87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SSGSLZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCkJJzjMEbB0AvzdHXw0nZ%2BnmTbsmQbpqdCKAHhmhoLxwIhAKNLXSSZ6SBUoyXw3%2Fr8EswBt0mS67tmxZUWuRF7wGLWKv8DCFgQABoMNjM3NDIzMTgzODA1IgxjsPMIZp4z7tkzdxsq3AMo4ALu4KmBPIsH3wfoC%2FbS6AcxO8HH5SXKLHQ31H71k8W9RLkPlJzgLtUz8faR5xa2Tk%2B4xa4AI7Qpcwf5P1686dpSr2AZYTs721AoRUri5zXj%2BHo4iGZLRBd1suSkQrTIcFbgUqucoHTsPtsLhW1qdcS4zihuIFVUy%2BiJ6t86udizz9m8d0Gy4yBD4QCN5fcRlQgEgAsxTwYng1byxzV8MXLu%2Bgg%2BUt1DENgzXSX3%2FUYF12JdqwiplnSLTY3%2Fp6fgR1pDcNeOHli5GP6UM9jlwPkSCQjpyz0B7DICqYx%2BVmRZZ7Nkr5zmyoRnGmtCvohFWjaXdWLWpSMyMfEnlmBiq57LnNjKzZJPwgWuIrrkcpc17smSf3nwvS2AMUvsxZkoBcrB7UHzTRRt69hnI6vd%2BZzwhkndc5%2FYwFcgBXJ9Wu3WlYbanNzYteQGi4sX15H2yGIVA9MB64MEF8aLkPGBkzHh3obE8Rq1nN42HA2IGer3RpegphlZW%2F4jZWkBPUk85P8W0Q4h95uw91aXHZdCA%2FuYBhxN9mkaMP3BdIEqOjCwbXVss3MTjGY308myE5XolLYkMM8BTHpC5FG%2F%2BVXxnMaHZ94Ea1j7G0WgD8iTPrwggH81gBmiflqftzDz2sbEBjqkAX3HUeu0sbZn%2B8w4janD%2FGNjMovCfMcyNr%2BXDnvJLczPy2BTmswUT91ACfTzNFyW9TtJ%2FjJDJy%2BWiqBOxw6V%2Fml84O8cxsnM1%2BKUcqOBlDzdw%2BuS%2BxaW3mOZUGFL%2F9Xz4oBBptpxsumiHiWlANno7%2B0ICY4H0ZCvVFDF7XHkLwWb%2FLd0vq%2FWc51moXgYsRkwqsG5KPO4zrlUBRXvwSjE4DCb6ykJ&X-Amz-Signature=5496fce7fb324966719e51caceb1ff7cc49ab0ed5b41e5bf3dc20eebdc0d856a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SSGSLZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCkJJzjMEbB0AvzdHXw0nZ%2BnmTbsmQbpqdCKAHhmhoLxwIhAKNLXSSZ6SBUoyXw3%2Fr8EswBt0mS67tmxZUWuRF7wGLWKv8DCFgQABoMNjM3NDIzMTgzODA1IgxjsPMIZp4z7tkzdxsq3AMo4ALu4KmBPIsH3wfoC%2FbS6AcxO8HH5SXKLHQ31H71k8W9RLkPlJzgLtUz8faR5xa2Tk%2B4xa4AI7Qpcwf5P1686dpSr2AZYTs721AoRUri5zXj%2BHo4iGZLRBd1suSkQrTIcFbgUqucoHTsPtsLhW1qdcS4zihuIFVUy%2BiJ6t86udizz9m8d0Gy4yBD4QCN5fcRlQgEgAsxTwYng1byxzV8MXLu%2Bgg%2BUt1DENgzXSX3%2FUYF12JdqwiplnSLTY3%2Fp6fgR1pDcNeOHli5GP6UM9jlwPkSCQjpyz0B7DICqYx%2BVmRZZ7Nkr5zmyoRnGmtCvohFWjaXdWLWpSMyMfEnlmBiq57LnNjKzZJPwgWuIrrkcpc17smSf3nwvS2AMUvsxZkoBcrB7UHzTRRt69hnI6vd%2BZzwhkndc5%2FYwFcgBXJ9Wu3WlYbanNzYteQGi4sX15H2yGIVA9MB64MEF8aLkPGBkzHh3obE8Rq1nN42HA2IGer3RpegphlZW%2F4jZWkBPUk85P8W0Q4h95uw91aXHZdCA%2FuYBhxN9mkaMP3BdIEqOjCwbXVss3MTjGY308myE5XolLYkMM8BTHpC5FG%2F%2BVXxnMaHZ94Ea1j7G0WgD8iTPrwggH81gBmiflqftzDz2sbEBjqkAX3HUeu0sbZn%2B8w4janD%2FGNjMovCfMcyNr%2BXDnvJLczPy2BTmswUT91ACfTzNFyW9TtJ%2FjJDJy%2BWiqBOxw6V%2Fml84O8cxsnM1%2BKUcqOBlDzdw%2BuS%2BxaW3mOZUGFL%2F9Xz4oBBptpxsumiHiWlANno7%2B0ICY4H0ZCvVFDF7XHkLwWb%2FLd0vq%2FWc51moXgYsRkwqsG5KPO4zrlUBRXvwSjE4DCb6ykJ&X-Amz-Signature=9127bea24e24decbeaa9ab4be98065f7fa92e126c59ee64f5f4097321f907dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SSGSLZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCkJJzjMEbB0AvzdHXw0nZ%2BnmTbsmQbpqdCKAHhmhoLxwIhAKNLXSSZ6SBUoyXw3%2Fr8EswBt0mS67tmxZUWuRF7wGLWKv8DCFgQABoMNjM3NDIzMTgzODA1IgxjsPMIZp4z7tkzdxsq3AMo4ALu4KmBPIsH3wfoC%2FbS6AcxO8HH5SXKLHQ31H71k8W9RLkPlJzgLtUz8faR5xa2Tk%2B4xa4AI7Qpcwf5P1686dpSr2AZYTs721AoRUri5zXj%2BHo4iGZLRBd1suSkQrTIcFbgUqucoHTsPtsLhW1qdcS4zihuIFVUy%2BiJ6t86udizz9m8d0Gy4yBD4QCN5fcRlQgEgAsxTwYng1byxzV8MXLu%2Bgg%2BUt1DENgzXSX3%2FUYF12JdqwiplnSLTY3%2Fp6fgR1pDcNeOHli5GP6UM9jlwPkSCQjpyz0B7DICqYx%2BVmRZZ7Nkr5zmyoRnGmtCvohFWjaXdWLWpSMyMfEnlmBiq57LnNjKzZJPwgWuIrrkcpc17smSf3nwvS2AMUvsxZkoBcrB7UHzTRRt69hnI6vd%2BZzwhkndc5%2FYwFcgBXJ9Wu3WlYbanNzYteQGi4sX15H2yGIVA9MB64MEF8aLkPGBkzHh3obE8Rq1nN42HA2IGer3RpegphlZW%2F4jZWkBPUk85P8W0Q4h95uw91aXHZdCA%2FuYBhxN9mkaMP3BdIEqOjCwbXVss3MTjGY308myE5XolLYkMM8BTHpC5FG%2F%2BVXxnMaHZ94Ea1j7G0WgD8iTPrwggH81gBmiflqftzDz2sbEBjqkAX3HUeu0sbZn%2B8w4janD%2FGNjMovCfMcyNr%2BXDnvJLczPy2BTmswUT91ACfTzNFyW9TtJ%2FjJDJy%2BWiqBOxw6V%2Fml84O8cxsnM1%2BKUcqOBlDzdw%2BuS%2BxaW3mOZUGFL%2F9Xz4oBBptpxsumiHiWlANno7%2B0ICY4H0ZCvVFDF7XHkLwWb%2FLd0vq%2FWc51moXgYsRkwqsG5KPO4zrlUBRXvwSjE4DCb6ykJ&X-Amz-Signature=cf50be6b63f8821662b85e01b841dfdefc951a92878921d560f803bfca6d1e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SSGSLZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCkJJzjMEbB0AvzdHXw0nZ%2BnmTbsmQbpqdCKAHhmhoLxwIhAKNLXSSZ6SBUoyXw3%2Fr8EswBt0mS67tmxZUWuRF7wGLWKv8DCFgQABoMNjM3NDIzMTgzODA1IgxjsPMIZp4z7tkzdxsq3AMo4ALu4KmBPIsH3wfoC%2FbS6AcxO8HH5SXKLHQ31H71k8W9RLkPlJzgLtUz8faR5xa2Tk%2B4xa4AI7Qpcwf5P1686dpSr2AZYTs721AoRUri5zXj%2BHo4iGZLRBd1suSkQrTIcFbgUqucoHTsPtsLhW1qdcS4zihuIFVUy%2BiJ6t86udizz9m8d0Gy4yBD4QCN5fcRlQgEgAsxTwYng1byxzV8MXLu%2Bgg%2BUt1DENgzXSX3%2FUYF12JdqwiplnSLTY3%2Fp6fgR1pDcNeOHli5GP6UM9jlwPkSCQjpyz0B7DICqYx%2BVmRZZ7Nkr5zmyoRnGmtCvohFWjaXdWLWpSMyMfEnlmBiq57LnNjKzZJPwgWuIrrkcpc17smSf3nwvS2AMUvsxZkoBcrB7UHzTRRt69hnI6vd%2BZzwhkndc5%2FYwFcgBXJ9Wu3WlYbanNzYteQGi4sX15H2yGIVA9MB64MEF8aLkPGBkzHh3obE8Rq1nN42HA2IGer3RpegphlZW%2F4jZWkBPUk85P8W0Q4h95uw91aXHZdCA%2FuYBhxN9mkaMP3BdIEqOjCwbXVss3MTjGY308myE5XolLYkMM8BTHpC5FG%2F%2BVXxnMaHZ94Ea1j7G0WgD8iTPrwggH81gBmiflqftzDz2sbEBjqkAX3HUeu0sbZn%2B8w4janD%2FGNjMovCfMcyNr%2BXDnvJLczPy2BTmswUT91ACfTzNFyW9TtJ%2FjJDJy%2BWiqBOxw6V%2Fml84O8cxsnM1%2BKUcqOBlDzdw%2BuS%2BxaW3mOZUGFL%2F9Xz4oBBptpxsumiHiWlANno7%2B0ICY4H0ZCvVFDF7XHkLwWb%2FLd0vq%2FWc51moXgYsRkwqsG5KPO4zrlUBRXvwSjE4DCb6ykJ&X-Amz-Signature=d45a26ebcf343b865ea8d516504952b5bbfde66f89570bf8be3ec8a9fc455647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SSGSLZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCkJJzjMEbB0AvzdHXw0nZ%2BnmTbsmQbpqdCKAHhmhoLxwIhAKNLXSSZ6SBUoyXw3%2Fr8EswBt0mS67tmxZUWuRF7wGLWKv8DCFgQABoMNjM3NDIzMTgzODA1IgxjsPMIZp4z7tkzdxsq3AMo4ALu4KmBPIsH3wfoC%2FbS6AcxO8HH5SXKLHQ31H71k8W9RLkPlJzgLtUz8faR5xa2Tk%2B4xa4AI7Qpcwf5P1686dpSr2AZYTs721AoRUri5zXj%2BHo4iGZLRBd1suSkQrTIcFbgUqucoHTsPtsLhW1qdcS4zihuIFVUy%2BiJ6t86udizz9m8d0Gy4yBD4QCN5fcRlQgEgAsxTwYng1byxzV8MXLu%2Bgg%2BUt1DENgzXSX3%2FUYF12JdqwiplnSLTY3%2Fp6fgR1pDcNeOHli5GP6UM9jlwPkSCQjpyz0B7DICqYx%2BVmRZZ7Nkr5zmyoRnGmtCvohFWjaXdWLWpSMyMfEnlmBiq57LnNjKzZJPwgWuIrrkcpc17smSf3nwvS2AMUvsxZkoBcrB7UHzTRRt69hnI6vd%2BZzwhkndc5%2FYwFcgBXJ9Wu3WlYbanNzYteQGi4sX15H2yGIVA9MB64MEF8aLkPGBkzHh3obE8Rq1nN42HA2IGer3RpegphlZW%2F4jZWkBPUk85P8W0Q4h95uw91aXHZdCA%2FuYBhxN9mkaMP3BdIEqOjCwbXVss3MTjGY308myE5XolLYkMM8BTHpC5FG%2F%2BVXxnMaHZ94Ea1j7G0WgD8iTPrwggH81gBmiflqftzDz2sbEBjqkAX3HUeu0sbZn%2B8w4janD%2FGNjMovCfMcyNr%2BXDnvJLczPy2BTmswUT91ACfTzNFyW9TtJ%2FjJDJy%2BWiqBOxw6V%2Fml84O8cxsnM1%2BKUcqOBlDzdw%2BuS%2BxaW3mOZUGFL%2F9Xz4oBBptpxsumiHiWlANno7%2B0ICY4H0ZCvVFDF7XHkLwWb%2FLd0vq%2FWc51moXgYsRkwqsG5KPO4zrlUBRXvwSjE4DCb6ykJ&X-Amz-Signature=9d44a6a005ad22777100d8b4da4310aae49bef412ee5729fe190d4a7ebacb9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
