---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=a9a1343a3645689f1084828f85616840c748fef6811dd5c5828469d8c1fc3856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=3de0c6e26a3a550aabd19e60f7264d4212176053520acc55e681384224acfd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=2b04cea803cc25b40aabb20774a3065d5e4d555aee2ac041a90b89d281804386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=599f759b655759dabd5beab21ed1797b8e3232bcb74b5f9170e499b80948d2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=6154fff94be38db2ecbe72093310b7b203574862889518c648288142b80cbd93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=50e7cbcb96f8680fa0b4945cbb0823106e899054b8b8792315abab7812ce2060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=f3d45afb9a505f210848d1ed7a4768936053083a36b7681fe1a76143ff231c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=a6dbc92aed88a2e408e42a7e648358982d51842230273737fad99e5d2addaf82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=a40c5cbf60306f3ad9e9013c6102cf7fcacf7ea57445840ea2195185ad96b1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=a6e347c9095bd8293edf9b20db6e339f96759d27a2379fe8ecd4e405137fc37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=0acd85b90b039123e95e8a0139e321a4b3b85069f549b3d6511ff6c55653d690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=ac8e9033617ecf9db14db270ea7c765904c5c70fad4f250704131006515e76e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=df7d5d3c923dfeafe404d45fae93bcc76889a82053e8b08e5fa71987c8e7383a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73YRV52%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHOlgzttujNkN8xvpUnLtFcATNMQzKaXlFBphB6xdHljAiEAtCpywdVSrYOkhOKgggYloVNQtdZtR9dDsUllbBdlwXAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1GkRuin2zUqJUxLircA9Lg2GW4i9wtdorzb8l6lcUrSMiyWDa0SBMBi2h1sJ6sdmCelZgEdKhKZ7uEjZqWkg7ijTbMPqQQo%2Bs3a3CX9ijRLqWDcbjbURZlXzuuT13a%2BQzw8jyhByjjRKzsCOTPVucf7qTE9hMLH9PJbIQtoW%2BW1MeX5KBaI9DJHwp0G6l30bg6gBJtnAN%2BF5PMxcwPeAWj6eNWH6HRcgVIwfDBJlyINmgowNr4DycZ5eUdGAMZaaC5l9AhtQxCBDFKM42W%2FIkXN9dPdyl1f8RD71hLlVuwkOpT8o3L8RPkNUi%2FPRvchNQWH2WMJWfbkTyA53RGAKEPHpr%2FZhnywnlVVsRekiesBA4aPyVSwrvRJAq4T6rFup64jFS4ktSRTMIwnWdpflaQ%2FUpO6tJ9C4Q3lIxRLMnhxVuenc3eRUV8rHYUT6cgfOU11nogQuQG15jI%2BChAbXk6nAsgsUKrTPzDE9NGdudiBQBmqQaxewzaqoxnhvbr9IP%2FJENFHUnzeTKvKYJdnziQwLJKK5%2Bjv4GmrcIvTI224tvRVz9K0dOGSzPijVEYVQ3XDtQumkSw4eZ5de5hkCBAroU1h56EhYDIfaSOQ2u3o7uTAVQKkvMLPTFL%2BB9ZtJac0jXYVO4AmvoEMKq7lsQGOqUBiQo7Bgzv5U55g4oC262c%2BNxVDPV2biSwbjv1CfDRVA%2BG9yP%2FRh1BhabkjXiH7WNbkzg6x3WykpYC0dPVKHWiI7Lzv107N22tgKb6CPNgRTWnfKbs8e9FbOwBPqesh6Cq%2FbenS9wNK70uJrhTz255Dtu7FqWh9i5FwSXUDcBFqDjySq6CniHhC%2FEv0sSUNQf7p6EfWnGrQ0qqOr7z2orw6tbs4rhd&X-Amz-Signature=9350b40a7df7a659c1c4e5e4a2c08ec3c6aa1aab28c2df48f48b488643f59eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=682c7964767659649ab9ea8414c5b7cf51a4e5cc097113585987d9d97c5c056f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=d1cde59465c0eca4ba1a4b29ec663b5dcb4fc36296f31e963fa2b2beb4bf60b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=915a9222d6f131989cb718d23b3c84b119c437d68e8caba92f1fd435ffe36ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=f3b4f45f027c8d6cfd793a3d33f51bb8246a38d4cfd0c663b250d76d13f013e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=175b4a99ba04f8a2942b0097376e7f0f0d7e1bceeb7f2eb86ec18887f6faca94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=55b7ed61d40c6c5f85a076aa5a145f0d3aa1ca40912b2ca0a3c46443b4aa28aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
