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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=eb2b770e5204fbaf8baf617ff69d7924b2ce3fe7eaa46f26f00f1f819691f13a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=cede6888e00722a686b78b167983d760208e9ddbf2338091b07320dc6ab0285e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=46f4c2550e62881369b07e8b4e29ab4b4a3e2b81f8b9a19dc23b2c90625c7957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=c90202eb0c6691c9bfd75e38d37a45e4344d81b34e716c63ee1b45b07a2de95f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=78be477c8ee025c91a16bc4889516f4a1e4a2eb9f94363e877db3c2680836b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=2a7650dad509edc73a7aae2723bd092ce7d2df796cebba3c4d6cbd340706d959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=1473cdbb6f49983fcc522f7269b7f2157fcbd434b832cb209646d07a43be8947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=2a4a6b4a7225483ca03e90ea25cfdf7daf1b6f641a9a9f873d94f793fd8913e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=b585d6d32c9434a9447e239d3fb0078b96d7becf438fef3a65903f3dae751d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=9015faaa1a16400098569e114c76592a1998d1c128ec938556736066f18cafc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HXRHFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDv677pCGVnJp8VhD%2FWSu2%2BjSgSrhx%2FlJrlpqTOxWhYVwIgIxBAep0Ypdun2rGBZqRa3pQ7b2Yalj0ae1q7lumYf3AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgXEKI4kIVI7E%2FnxyrcA9DUcORcSchaXbkNWGrbBylqwQv%2BD7y5kCEcacT69CQtQcTd9I3ZGBKRTwXiuLSAB9MwoVANzcoaS%2FQfYVemLO9zOaTa%2BNWc%2BH37SnoZgiL%2BCxumZ4k6r%2BPnOU9bM7EDwxkSfZpLesQdXPNQUquzuOApyAauFr9Anp%2BH5Y3k7cd%2FSNh5x4REIMRnKQVkApuIddmsXNv5blBsYjYJ459d%2BMsix%2FPYvWtdRKf%2BPr2RQVAD%2F8biMrQnYO23hhJSf6CiHUBnW%2Bi4qr54RQfmjcjmiCudsMy16GHi8BhGvjBAwVfm%2FTPlRr2U6gT8x%2FqK7tv6MYGKpc%2Fn2zteorCRfzme32JPM%2BOzGrPT9yq8ZORAu3uHkomNpMaw4qmFB8RzNCw6ZdamBzJqH3fwD%2FO8EoLidCMZobBd3Ib0YQUCWaXxcJQSUZPV%2BbRQlibChyhDB2GOulRwCI5Ew8o1Cnc3XLTwi4C6bVAz3W6Ckz9fhgBY6IJ3bNRJksvNmivSvM%2Bzx6e2hBoG%2F73%2F%2FdSLVH%2BUcMeqJLLAEIk0BokKm8DfDY%2FoqlIhsuRM0tIrC1Asm1D1yRYZxxakG%2FqgBW7R8VyOx5NpVRT%2FftaKyCkfop7z%2BepwVA54sbutPKiFDBI9kNmhMPWS2cQGOqUB8rN%2FM5RP%2BLFN0W6QJ8G3YILGtGEu%2F0VyrAFeZB7C9mOusf0Sib88EV0jQ58p5JttDU4Q6TUrA3iSj6UG92xMZB7JD%2FKLVZius77ZdNxZBYtxzYMDfHAJ4CY5eWrfpZqmzxpyuTjRd3jNwSTzZs1pCJdMrJQ51LGUJAbesWw8Kdbw6pF8%2BfovSbtKMfkb4S%2FXjUKgntbgZ5x9%2BX%2F2uaLhpbxAq5rp&X-Amz-Signature=bc295daa0679d791cdf0d3f6d72ab8a3832ea2dcf8aaaeb891a991c0a8a56303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFZ6FQZB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCpZDQEGC8KnZWEFMo1MFOXI4fGNzeEOEhi2CrphHZ5RAIgIT8Cz0hjQnBiJKpYvV36IsQ4iyqQqjcLtH97KELeO0kqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6MH0F4u8EUkrNrnircAyGVMA7lBUv2e4QcDL5ozbP%2F2LscPLGhR1j7W2Hq4OVxWONQeUOz%2BgTt9DzQm2cwov4a630RKH3ZB7yTvy%2FUKDsFfQWLIC1bb208zXE%2FRqNI8txkieQnnPYTHTmyPcM%2F7OjYNF%2B7bs%2BtS2duuaAvcdLjKEfQORYQtgipIYDoEgJ5c2OFThHKQ%2FYih8VamS1JJ%2FJD8Vv0Py%2FvOucxn9%2B1OOIxCHrZes1jIVvhGcY2DKpBsQY%2Fztd1aoJW%2BmuDJFNKaq3KpxHDyNna%2BDWJyYfVLhwTS5yt%2Ftg%2FSzu5GDqiuW3yRUlylC0fTmZs4Yk08tLxmd2CRdcBBZobBGKwJOhD6mSXihqVmD8QhaIlI9H0spQzywj6y7BpEX9DCNR28S8cye2IqiDO6EoITFVbrfqc6%2BZmflyYKcsXpwk2Nwbwl3Dj9ikkInwBCNTp7LQ3nAN08E7N4YDMGjS%2B5xf4aAZh9hdGrbBdENZ3XYFN2YrqRqRqBrZQAgG6siCUAv1EMnTwN71vi8xQZAc6cBXu5dEYT9Mu4S9vTxlMkKJ0FHECbjh861Y1xoXXm7SiK%2Fxb%2BEN0FYS0LzLoSbRL7ZIEYlPZulh%2FVvXKKMB1cvtfGxj19h86FQDbfWG5DEAkoFkbMMmS2cQGOqUB916lprXDJj4C%2FsHkhSiYqcZMVdXlyTrMnBmkN2NOhre%2BaDxw3I7l2sSKxAr6hIltq6IdnyEps2QWLukjiwWef%2Bh7zdtzY6A9JjpHc4QzCfxbdx7RAiZVOxAovly%2FTkE%2FRsLhpBbU9u%2Fnnv%2FjgI%2BR8fBkNOgKh9mzxTMBuOKzhQpxUSuinSzZwk7qnir2lYknm1RoyATAH8jewhGVb%2FUSPQu5wfgJ&X-Amz-Signature=3dd111a2fb4b3eff4d5fd77fac6db6efba751f7f30cb2c8ca16980e5a5d5da58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QENKG3CW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH9nUqtOvUK3H8lPw4zldsTXZJad1Z1UZFymWNJxKbjvAiEAwbXLen8X5TdWsX%2FkPvSdkosSIzvYEUNx%2Bte3d3QUkTgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyFnpiShzadifhLzircA6zt1WecfAdekLs6My1EfL%2FmcJ1yPRhbgY0olWvwTaWth%2FlW9axpuGcJT3hS9F%2BL7Ncq9BN%2BJcfjbMcFOcsA6WqAMi%2BsxJnpmtfE6Iqqh9tw9mm%2F8k8kaxIjOHnLYJmmO6riYRyyOYR7nCm0rURwl8UM95OYp9MmEkTKSr%2FYbnUJOB6RSHnVP4HkcrmllI3I%2Bn5vm6QF88d79ZVXD5E86A7qOU6xwwt5gEAE612hmEy5yKJ9ndXIIaWe73fhtOr0cEzCIMoNR%2FfAvDDqmPTIhk0zU3oEqwCHMhOcaJ7i188v%2FnUrZBOpLDTlLIFwRkG%2BgXV2WNglBVBvJ0GgA40%2BxsBgQAlWC2H0qq%2FxMXOwzgdFvEJcG2J%2FWjo1DQszA5hVvF1BnBrQvhvXB0UBO8NlvGb3pU91O3AGcTNuYDV4%2B3XzAtjMVf3yw8fDA2zZQQZHmugVhlFGWDg1bBAWB2OjQvhFCASfvpCXSyX9v6pjqJLOyf7iCqpk9HaPe17YFeZEIF4javkASzTwZFOCH7c1loy7PTRgL3croCm%2FQtpJb5WhIrVPYR5b5cTZwpCkD0mC3GBaMCAiqvOD7FVnB9R9vIiwXXHCSRFWpQPem8a17UE5WcwuFkouLnKF2Bh9MPOS2cQGOqUBwhnWwvwuOd0Duy7Mj0gTQayMqeS0uOiE%2BcwsG2SyiQbHG72tz5UvbHkcr8hOZ9cdBxFiMdasngDoMowmKrVM6UFZrghjz4KS1GGlK0j7XPN5DiRaofTGRv75nUVumxV6btZkTefVcsCO1jPo8NPZEiImYbjxZDcqd4IER4%2FpDknuwAa2zSqN53i6Bwns518xk%2Fd4zM%2FBTOh39jPfLHBgdHQbSmUM&X-Amz-Signature=05c42efaecd6442b20e68b5566910f724768c14d1496f87233ee9e5686545b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=bfb72fc88ae488ff143f4a398184efcc0d262a78605cc5174ea3e0353e99bee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BX6FH33%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGiYFAbP5TYNx39x0tfRkAsI%2BjFozHMiL95GsQTBCcMFAiEAnSZBO3AmZzFrp0uBWgjJ1TL18aqPJ3OJRD7mCmWkSQ0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLicRPdicmhzU52PSrcA0nRdzIHtQ%2BHjZMADybojqWB5usTXQ%2BXQqJr85CknuKvvl48Zxr22y1F8DUAO7WH0vzlsiLerAE%2FdUSk3J%2BGdotMq0u6uMUtvVmRmNjheswAOHRCQCC1WVWvVW8ZxIGlrXxd1PkDwU%2FJ47e7q2FXxUsXVFFP42ecQPdAx0XlxfhIDk%2Fb%2FcJ3dc%2Fd%2FZcjBPBsFupC4G9S6jWMGpXkMhClIieLxn4ZeAjNbM%2BrY8pRv%2F64pvw2WYuAq84YHwLfEQicgHHQ1yFOmAhY6drv13sTrFXRvqb7WZnW98%2FSmqMH7sYrzpkHgUh9gw17Mo7pQV4ywBG7Ki6IwoJi1OeVU2hb0XdoD07GXp%2BDXLQ9HzzxCoUwts%2F7d883kLv0NdOHMPCJ%2B8YVBADJiXo3UrijBL5gifBVnJ8NpUf1wwDDHG%2FEo%2F8v9Sk98%2FCOTWKzHwMnFWI1FLiRROGDhd7ZFR9HLcbZ6OHj8eNs1qFKXXaoEWTqhI%2BjcwijugeV5TAZXw2%2Fa5Yz2q6kx5gf3SOE8gT%2BsX1QVA17UdpNVbDDz7ep1vv0EfK2z9vynHSf85Jfl6LmirhRYIjNJBC37nyouykYyCG8KEx1IntoYEdLwnFBGXSCrrCXFSvPmGnnxg%2FTKjmyMJ6S2cQGOqUBLC4WYwH0%2FVic%2BMo0mHDNHQi5azkmZwzE%2B9Zh0%2BBAYz9iCW1nzurzCCHJziPOohyCtiiT9BQnnqIc9d%2F2d1gvU%2FFxyVJ8ta9yO9EE55vtZ9zEPKdXxU%2B7%2BwsHLzlBzgS8pSkqZAryfSebC9gq0KZywNFMcRQMJkQWP4k1NZF3qMO5SxHbvPfwoxKKrr7bett%2FlJi9DsdyXFW4twdzEhPmRlY1dmYx&X-Amz-Signature=8cc117094573a0a539ded06391d69f90aa718a8549efddb7e1e2c2aad5f25990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=b4cca3bdc4e625886fdb0cb03cb67e43938a4123a93bd50d7f3ecc963719cef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MXVAXH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDdOvlq4BLegOhN%2FN73Uq%2B7s1ilzv0rrEMEPT2dlpedwwIhANqqAZrnydJ%2FDH2lwjJN%2BW8jwd1AHybBEv24LmcmZcY9KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXoaMC0ye2fsjs23cq3APuRQ6FU5pboalffVbH5TDSuTNE2ZxmCXDk4pIDx94cPClUOXj71im%2FN4pvnVY%2FMRaTK53g0QDLrKnyZ4wVlrRbsXM3DhSaV9k5dMRi6J6eqshGXdYT%2BVKT%2BtZxt3Ylsiyb7DZSSNrEtyM%2BOJNVnfy1to2FPG5A1Q5eRzDExg%2BjIqCEZF6AJFhabAv16GFkhF2jVdPXlj5Bm9cK%2FOyKNcu2E%2BrzXuDySwH%2BE2ySatpn4P94JKF0SUSFvBeROfu9zR0iOLZe6FYKMYYIKkZoz%2FL6wOD94I1bPqSrv%2BuuazrhusHYFszl6Ss3sxVIrKIIsRq%2F19Lw1umRYAYAIgY2oSg%2Fgu31lxbjk%2Fs9iji7livNbBVWhoFmOmdN91dLCjybt0krQS%2BLU27YaNPY7lIrvPzrwynuZPyjj7xSZK%2FUhGJ3yq5E0l0WKTjG4UqcHyX0KX%2Fe7ZULl0bqJA8L52OAKSmowKF1s%2B%2B7XFHPTdwSRWRIqk4clJ8tF6tO50DvTUzyZfZeYLAnC10yVphzIsfApeBjQvbFaNPuJ6V%2FOTjGJYfxDXNZq2liQ0i2xMs40FcnUI7xg2ekdS5Q5CRifzVH%2F%2FU0scqsHzWOMp3pfnbySLV95bv19egF7PDKW17oYDDzktnEBjqkAdw7QUdDFfG7m4youeD%2FcLqxQFKgm6BpgQZDERPPoZGz1hj5xWvbYMT%2FD3oOMYzk8B1H5iqp9B8dWvnB77GFylDzujPTGCr0nX3qSuBqIMhhzJBE9%2FgOAhflcY28NAGYF2ItnxqKcTSKx6vZd9bvMVToasBc2hCdgySvB9TGPa7%2BryAeoJNEgeGwsWOBQV%2B5UMpT0h0ygERnhMxHi1hKtzXIo4x1&X-Amz-Signature=4821305837ba54893e70ea3c947feca399806c5cd9fc8a5ec501e0f23898663e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=b73857e69172c6fa744f90b5578bf3e755eb95d8c059ec578d7660468fe3c1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHN3ECIX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDE85YWCLq1wexP6NDFRXH6BRbc%2Bt%2FJjyA0Cc6o2jk6GQIgNAjdD7453kWnDF37xTm2voPaD2b7hNGzeFwhxv5FNR8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBysNZ8Aatwq1iRIRSrcA%2BCt%2BCUezolUAlIRqYvoprNyF%2F1j%2FxkulCwsBpPpVYGt9qWsjNZiCQ%2BD2rr24W8Rg0Fkf8XapKvU9ZHl988BzIDPuX5eIqM6PvT1DH3tBKTMTiajdXj7zup59bZt1fGUxEm00fiB%2BM0DNlRfoijy4ymtVntc6hAlU0enopILkuCFTn0ylt8jO0NKshc9VO69VWJhgdHJuDD4c8jYTPubuljeRbLhfHIzRvjSpceXgEHPMJdgqvweHtZXYAq1MEZuLReqXCt90zuOVUPEkgSCix4AxSOF5W3gOsAHV6A%2BbnSB9qO2vaPL4vcNS4CDXynAHm%2FQqp05ZZB1oYZZ3dh5AMMXwHXDR95baByZTULgqpXFhY4cYlijpEv3HWQVu0nrJxlryjwithkLYKq6jl89RV7zlv9dBIXBhErGtqAoRThoad5NkTVyfyXYF8Zh3%2FTk8hqlmCNyac1G3QmL4MfFIUqvKeROD7rYJEFd5ejl5l1zGBUn4kLZL3TPrCJztNBNVtyyoII9dO62qgPRCD6PG9OTxJjg67FU3qvZf108XvI9S6yoxYe5mS2AJ9FMBiVNcTZcYI6I4Xg%2BPuEk1sCPWwYPaOo0MHYysH3rJoMO1XKSWtQUUB1woelNcQ3ZMNyS2cQGOqUBBqSjm3LHQlnFq20LEfBBqcjzjuM9nDsKdEivLZ1pOQdwTvbt9wVD%2FsgmPgvuHz69QcO3AGUcnkEGWh88SG8iduqPqs13OgJEjyEWhavDSUn9jQ%2Btjlu9tk14BBb2wyTkWEuwkgPF7iVWpJ5cw2TwjtQgLUJQbxUfEdJf9vFE9JImTpkYyEGigHgZcqI7AqB3tVq8rMNFI4ibTrCSL67nZgQ%2B3%2FSm&X-Amz-Signature=ce79bcc0e8752c642f369b33893e76fccfdd481dac453f47d95ef4e7b6c66286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=434ab4dc127f8d294207878854a2266065e7d3fcb9245c9a5647a53a02fa56ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDWZYWSV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCpCcPDeoEOGj1yjtFlYbit1MxwgcxUo7qT3GdFdUTBPQIhAI36UiO7ppuVh8qnLRrgytdr9c9Xg0YGYt1QmHPtuaNSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjsevA0LOZBv5cELIq3AMAYSF8rOJ9KCXYYdkXaHHrsf2bbj3sXZC4XniEaIPKM0zG%2BzjbcQ4W10Dn8Ald6aR1nDFkNwpLjP2JIeaB3%2FmD6tXz8TNMe2oEjzx6FXjB5HnLRlE%2BL6mYI8hryntzK8zff1YaFok2vuu3L40McdY8L9Hz1EEp3aDpzz1iq0dPBk1dmsH%2F97qMn7vzFohHyNhJAEIV0k5WcI%2Bjp7bj%2BNeTdjAuwpVOd2L6tEUdFqOKvmWATgx4SX3Ja6mtFKkI3R8C4Ha9xCLPwTEcXiQnmFSPGUwMeqcs6MiK%2BG8Jkxj872Ffn5CLFDe%2FP%2FWbLPhVHUZ5jgFFrNzzj5oHNseftpQ3ZtUZvUx%2Bb7gSm4X%2BV2K0xo6Z4NwfzPCI7%2FewhmZc571KeWeP9FYAn%2BbGJypT6mEhZ3wBj%2Bl4AXyjLRY4N6dmbQ6qEniRes%2B3QmtM32v5ugpPT0QtwnLesTwYTUWhbGXAQ0e4UpzrnAHPWng8Ccg42PMR2yZfYZG0MzXNf2VDn61Ja5zjZNOIMOYgWwuHjYSNpbJdPH33F6xZEQtVRbPprRWGkstQcv5LYBupZasWbgNNIHE0cY0gREi14Bjc2Wa8ldZQzcXd7IZasFWhETQe59aq7FYjwRWWnGhusjDzktnEBjqkAbu99052tCQAACL%2BoAyIglf1as1jxHsooOJRPdnkwLFtlFofLtVtFXphJYoyA2v4McxxHhP%2B7w1IlPJgctK%2B4a01cxk02rD6%2BaND%2Fbbd4AX%2BTbXy59f0%2FKtZQP286Bc9583ue4RtfwZxTfkBdp2ANz%2BsUO9j5td8%2BrYoIdtqExKSIQ2cz98Dbf%2BgS2dvL6GN7Gqf%2Bo13UBT82gus4cBrYWTn09Ky&X-Amz-Signature=773d6d6595fb14ebf1ec05bc8fedf7cfad911f469799946d40c362076cf487b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JAYXYA5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDj2ja0qcLunTxjL%2FOfu7PkZx243IWkS6HNxL7QLzA1MgIhAOTU3BEJL4aydt98IKmesmu0aOFwU2nd0ihTmepbqcYEKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpVrofrPNo1qqtkKsq3AMx53PIAcZEnAKzioWfDwf1yP55J%2BQYY4V3hDI7FTmUc3wLBPgSEJ%2BTtLhpIasLemUwz21vOA0dD4DFbP4mKFdLMts5seBF0GxHMWf2mQrcmfLrlTemA6dnzS8Alq7vdZ9oMjjXWKUQqr61AK91PC2U6rHUTrBJwUJ5sckGe7e6T72xxC2m8l83wDEQjJu3tDd%2Bb4L1XoPNYjT237tA0F9pHkHrZdSqFZa51RSdj%2FT4NXGc90YbK8juxTgF4LA9tpe%2B6EmxIGcAUn4Z9GUp%2B7o9qU9WcR5oSJjzAwESmcBi9sYOf8FF2uU1m0BPeN0tvFliZcMA%2FcROilMdThe2pN062lyNm7hZuOYjzrfFHOXZD4Af4TUDN2%2BkkjUdZowdOaI4Bfp7h4hI9Bi1USDZhfDMhQhizgQkYDp5ZrjF88E3lYzGdWYQAXEBX34GvoRZr3R%2BeGkPneUb9isOSj05gEEMPqe3goIPtmheZ7fyaX4Qzbqwt2o1KrhgLuuezhSuRJokv28jtNVapaxbp5u3snylUJ1kLAr52%2B6YTQPWv65IK%2B4tcXTcR7xWT1%2BL%2BJbSxQZhHO3dTEdahJyrgcmGunuE5WnoYNLynu9UVHUj%2BnUA7TLRAbguIpZqywAdMjDzktnEBjqkAShgzUkdKStZxYadGr3X%2FvnqgsUCpB46VZyDxEWPWo2LjkdDvxgPCaPj6XY8Kj%2FiNnhnkAq1XBfljY0cHuVyshTosV7fcSDnMY%2BKZBfJZrVs3J8M1LYXSYwp0PTh2LtXcRMxejQi4Dg8lqh4UFSSeVzEtLcK1OKusXv72JYHa7j94oogn6VQM%2FgxuNWZvmCdoyEmZmQAzPFrAmg4apjUdJL34SXV&X-Amz-Signature=179a5e99f012be992abfd3e9f847b82f5c06bbe1214c484057da1e5a793b72ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFZT6PI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCnDz6etE7wvcPOKnGHBGIbAEougjIkidF8bvaJ75GaIgIgN3RGkkPOkuPYRTZZ8GEWc9Vk8ocKKRNpbp3zIh8L7PAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNi5rpAKdV6jWvU9CrcA2iUlvQ7eYhSeXhWckh65vT7bab9KAvOBbeARnHLz%2BCa%2FPhAYFbe7hfQZH6NljmX1wyMEvsuwFJmXD3d5gjn1zWr%2FVdtXbYFHCmRiqKA%2BuphtCRkFi%2F8bTF7G1THc%2BsQSX8%2Fq558n42F3NtLoPetHAblX%2BVzbTxdXvCbha3JWPSs73L7WmgTtDG6kb2zsvTDdhAFMSiOtWXckAlcTRaVo1r%2BQxNlGAWIxMcEJCcmXEHPuz%2BWUr2SiJdWY95gbcJWG9wEXxREW8%2Ft4TWIJ8zQl4Aib8T0MGX3Rlog5FG7UL%2BKoLj40qvrT8kUHGPqwzpqVprnIgrLQdOJW8c0hRpmKxkYCB5GFtQgUtJU%2BFeNVhnho4XS369XfrmCIbRdCJNQUQvgkA1ielqBJa1kWp%2F9J6r%2FKj55HS8rwXTGXmvoIzWltIM0JsIQ4nITPTQ23Ft8o9aScsn1nG4P%2B%2Fp3HjiUEvccFduAsxK%2FBNgHU8dHfym3sHwecMbh20FkM1vZKrUxwNABiaODhaLl2PE1kJXrtnwKePdrkNQTPs0h1RVvP0StgXJJXiNm0KE%2FpYqEfDaqt7PLE4xzS7ncQxPeg40ESWfZ2DeJ52WOg4x59tDm13WLmHzbXyzo1hvgCmnBMKaT2cQGOqUBpU63IAhkqzKEe4eV7UEGK9vbg7obpw38R9ZszyONZNEEDs5iA%2BXIeB4Ea80L%2FXRkz74eKI1w%2FAxlw0MpijpK5r82Nt6AjoFPvCInWWCrMrfGt%2BwH%2FkS%2FAoN83OkKLHSvXacaYN9nnZJ5iOe4S4kZr2P3oRKC1kYXa%2BmbjJSEm55vhpos40G4R4R6roZtk837hwMNgupWZSldt50YbAkeHixS9WTp&X-Amz-Signature=40833313ccc305228d309fcf3db7c3901a6e71f218e2b43d665c24445c5b5d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Q4D6HK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDtp3Plv3LEwrevayNvTc8nOCwSnNYhXdMUQn9juCkKNwIgLBUOk5gfeDuaxRblgEy91YYb81n6PtCYn%2BznMnGWaQ4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITjXyv7swBY6WcD2ircA6Kiqp3PfmySAUM%2FRGEi1QQkK40ebKqW1UjyzA%2Ft5awOYWvBNqnx6nUV45Mjo6KOYiYUDm0h%2BPKTH%2BndTE6obD1qCpyD34mpSkTXrEeXXTa6WdLy6Epz5RCp50%2FHC3IdajlJBYmDoFY63SMMbLQVEi70PdULRJYIbHTXpGMnmKl4CHuEtCFiI0prV9hNIrbdZOug0KTRCjrXhe4EpTY2NqKO9KvLvUKo4CHezsRnt%2Fz2s1rnfFoSkyUpqEkJgXDKqUYWebxz5CKKl3oVXVllcDOJ4Ri7tq7MaEeWV85PMLcjp4SdWD%2BRml99lbjk0J0vpMJ5pUuJLM%2FrkmYwkUbx8XK366SXO%2FOOe0jxZFVxPpMoVLg%2F3HzdMMUi9GuBhvtSvdbcawExFRYokCFnfpN2%2Bd5FZvf%2BdIh4r%2FylrgqJz92xtJo8bqSbEgPuMqqslVbtGdZ7KrVyKsxgwfa%2FmK8Ah9k%2BXqmtwE2Rj05yqwnkyWrdE1By7AWhxsNd9UO7g0Nsnr5WAiEb%2B87vVDF1mgaTQJoPnRcD8tZpJXmawVLVNx7lQr%2F1WsJXe9IIIaIJyOOddrYY1%2BD1%2FoiAlXXusDvWjuCdToBjgM2KNiLTIcrmuss60vy6T2Lbm0MTP23VMMWS2cQGOqUBiFvICQqWAHqDXj9K4JQc2m8yOnm%2Bx0pR60ZftB7oauwkzw5t2aMDJm%2Fp4tnqj8vqLuK0L1Uma%2FIbVganpS17o2ct7TaxWmWJrmXKAyorAFe5y4Ve6hWTp7LaHdRZJKKsH7Fc%2BfEUh1VjLm%2BwOCDd3msPootMkkVoguFIjPCdisXMmdrYePCg%2BQZAWOqYnPfwwb3w97stXWD7cHFZr%2Fyy2CaSKtTH&X-Amz-Signature=c8c70744811c5dfb1a75fbd64102d469e7879f42a1d8a16d6b25cd670592b2d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUESZHK7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFkXlkyi1bvpqO%2FRpEERENxcdrnbTuPYpDD5FbaSy0sFAiEA4p8%2BJvkaxpM8AhXNeYyybZsy3xInTlFYQI9thbuoFNwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQoO76fl8ssgF9ldSrcAw%2BKHgkhEhXDucp4SbgbqGZRDqhjNgOn3Vg3YaI2sqp2CwUcuroQNPzITYtmf%2FxsfUvG0XzdMWlxCCkhExqYHJvwIav4TD%2FoS%2BYuZTAYy%2BvT0P%2FFHD%2B%2FPhotq1OwPksxmct1%2Bmh3X%2FnSdeA12y8pChl%2FkgtKGfrW%2F1GZ5PQog%2BCDRHlFtu2gLLqQaUjuMDHmfr9afqPg0sBkDv4sEYnVyNtZkfJ%2FWfcDE%2FykhpbZTJggiVSdsG7MhCInf03x7A5VdJdOWIpZrRXoY7DpGtJ9XlHvqqXMm9cFsawtYE6Ixg%2BpAlFtKXMx%2ByM27xhrax%2Fz1RdypEZQC8Rko%2BpWupZoDZgwYm%2BasDuQhMxRy66Obaa0On3RYbMyXbrGr7UNDnu1zwGgdZImEFzf7BeNxSvPskxXO0nAkc7%2B1VUeGBHZ6mMU9F3N10sKtT3aNas4z3BN8RfXHzNBK2O8uaWTC2eFxFNX4zDYMxiHivd%2B5o9LNTkdC7%2FSq6NaSAMc3AqWyQZ7Kfx%2F1tVchVBjLYjdH8o1OcytMrhgFx6NaO4z7%2FuG38qv2SFUFJe5L2c8R2X67EOx6PFD0h%2FWIuq%2FnAaRm5zgAzJlRbgsr2YQVxMGDV7ZRN1EvY%2BLvY1R0F5UsaBjMMeS2cQGOqUB7L3mzvHDiy5YhUkRZwOgKQDxscd7%2BxCTLnXYM0x3NKNBDLahnruOWsKbkw6uL2VkxfisH6aJxq9Wl%2FdbAvD9uNkm6ZrfnA6H6ppNi2UprfLrj1h0j64OepK390NeXvB7wX8BynyBrydTb5dXGisD4NI1nS3rRrt0kAvsas5o42MBSe99Ynu%2FQAPIP%2FJ52pb3FTDwV6h6oRLehMKMIoW1Z%2BU24Xue&X-Amz-Signature=fb38891fd4aa248a968bcbc1cb1c7965023e33eb028affa2ba3412119123d7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=445cd58c81ba87168b4dabe9efb7203f410924bc2d56fbf5300885aa59868a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TPQUXR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC3zbRpcyvA2VHA%2B%2F9fJTB0hhx9QHEZP%2Bt5%2FCyG4DfNfgIhANvh0u0keGc%2F06%2B5u8e3979nvsiJ%2B82YKnQ7z1dYpo1cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwfJkTChB2K9hFeioq3ANR0m8UMwqtClXuekNmFcEngDHOGN69i6M9drREPU%2FHLpR94xKtsjQB5RNUP%2BHSxXWlA1qC%2FFGMl9FM67qc%2F5FPodDT4I9Ab%2FhUM3SOciam4tiOiaH1%2FN7G9%2BU%2FuMGXfnkM45YgoxC4V2uUlqpWl1M8pcPoC%2Bb6txEJYMd5FoFxETc12Ma3BLpXOj47mDQthQ3ZzaVbp5B6PqiwGAkqLDeO1Z451v2k35TlIGhgBygjLz2BakhqRq1ZprHatBnmX%2B%2Fhbj7FN8VZB0G4Vfuq7pAiI6Z5X5iYjMBrr%2B%2F%2FeYgaCMVnSNsXCYwuw5igzG5nDa8YzYHZWtF9l2KSMneqflRKHcl754xrUG%2FQA%2BC3aFkSJuc1ok%2FBfhWbaSJSsd4o0oIYf9DmhDPJWNpL118rBJo6kcK3d1iSRZkSVnQ2JVDi0mjMEHZdKuxZPS5zEmU5KVwsrRle%2Fke17J0k3XmhioWpIP9Ziqx0rxzjQPWIaPumo%2FH3IxDnOCKbpNqisU31d6ynbCTLOkt1k8KwWpS3aLL%2FQfkypvbct%2BigEza3qH3cZtH2YRUc1q5i%2FN2j2EKudEXJe5hGlyj99qavCZ3wWmUNUmwScC8rPgttM9cu02cTG2CDcSEGt9zANb8rfTDaktnEBjqkAdCcJq6ETX316olU%2FVCh7MxV72w1VvAaZocEVnScpL%2BDVrqoWs79zA87GHnYHPir7DwOi6UwOL2z5sd8tb9pV9JKiVVfrR8%2B1Sr9AwZPMn3DhRhUFiVLmaVnOzdnJJqz7H9yFOSllqOP6Qusdxxe3qhTxXJG3R7ZFR0o%2FilPBD%2F9wpMDtEmnTXn7Yzs%2Fv5hWfB13HKCdWKVaCCpy86OfqTaghDAj&X-Amz-Signature=912dd0b106a1c8637726677924c4a0e85cfdb39848668e29a6999d0d42880fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXQQBYF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDzVh1Xn2VEl8U4sNhda%2B6FMUm51OsveA37BwavENiX7AiEA7dbg77T4fvpWB4XnEs6ovCwXofarXS8cYZelb7y7x%2FkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhAsbyv9viZCUvjVSrcAxISfY1BzlNWr0CaKzX6hIaR3qYHKCxWq4FN1TCcUfo9F17LXXZaH5bKIxduFKspijYuzwi%2FCOEW6BIGj7XtBhlORpSssX2Ad7XEqpYmzfctfw50oaqbUCD5Yzf%2B8%2F5wfp%2FOcfanzgIzO3H53pQDHjK5qOOrNETcMuGZ0%2BbdmVSgjyE%2FnGdepoLlSiRPR8QNYZ8B%2BkHm93Ary%2BwRSFOVsH6jWnYcpsE5tLQAc340UR7hDyeWZDwNESnFtLaFfb0XHl%2B7Y%2FgjeE7MrW9ivSpxF9sJmUr9Y%2B3%2FLDLU8TskoDH2wVFeCrUTcM8tRZIks75zHb2czn1bMccutUp4QWVu1Ht8AiUK%2BN37c9RtzjrE8jP2pFNrCk1v60q1VmrxJjdsuKTnERrN8COVynhq8pADXf6l4PKuklbU%2BKjHVrgV949iGQEKPAjIOrnn2UC1%2FwfPBfGXBFlkuYorhHkKZjZIvlo94ImTvBzoNzW6epyzil9l2MFJmN4y%2B%2BAFUWFLqjbL3fcsxGKP2QQeGvyFbzH9kTBgoRv%2FfwWl4ZQ%2F9ti0ogaPX3jayPjun%2ByekjSkbxsbbqRNr4o0T5VR1XDRIluTMfLRNe9iAdVHiER%2BFcwgwtEK2ztp8vgIOWEzpPvQMPyS2cQGOqUBa1BX57gp75mB8OAPcJ7MLDgLibuS8M5yI2RXV3tt%2FMpydlEftVVujrVtbLprX5XkhguN6v8Jz%2BWNC1oVBENGGBDfZzRLQArbT4dXM765PmfNfxAqGEfVASZ3DVxAE0CR1oTZ99Zg5gcOWPEVfJGjobM%2FT63bWmM07vxI8DvA0pXXel3ZYuTpBZI1RERb9J%2B9MCGTycY3a0uAm5dSTNEh%2BtgJFPYo&X-Amz-Signature=62d52952bd18694e8c62c25f0a8bc9e3fe4b916d6b731613c948fc9c8671a848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXQQBYF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDzVh1Xn2VEl8U4sNhda%2B6FMUm51OsveA37BwavENiX7AiEA7dbg77T4fvpWB4XnEs6ovCwXofarXS8cYZelb7y7x%2FkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhAsbyv9viZCUvjVSrcAxISfY1BzlNWr0CaKzX6hIaR3qYHKCxWq4FN1TCcUfo9F17LXXZaH5bKIxduFKspijYuzwi%2FCOEW6BIGj7XtBhlORpSssX2Ad7XEqpYmzfctfw50oaqbUCD5Yzf%2B8%2F5wfp%2FOcfanzgIzO3H53pQDHjK5qOOrNETcMuGZ0%2BbdmVSgjyE%2FnGdepoLlSiRPR8QNYZ8B%2BkHm93Ary%2BwRSFOVsH6jWnYcpsE5tLQAc340UR7hDyeWZDwNESnFtLaFfb0XHl%2B7Y%2FgjeE7MrW9ivSpxF9sJmUr9Y%2B3%2FLDLU8TskoDH2wVFeCrUTcM8tRZIks75zHb2czn1bMccutUp4QWVu1Ht8AiUK%2BN37c9RtzjrE8jP2pFNrCk1v60q1VmrxJjdsuKTnERrN8COVynhq8pADXf6l4PKuklbU%2BKjHVrgV949iGQEKPAjIOrnn2UC1%2FwfPBfGXBFlkuYorhHkKZjZIvlo94ImTvBzoNzW6epyzil9l2MFJmN4y%2B%2BAFUWFLqjbL3fcsxGKP2QQeGvyFbzH9kTBgoRv%2FfwWl4ZQ%2F9ti0ogaPX3jayPjun%2ByekjSkbxsbbqRNr4o0T5VR1XDRIluTMfLRNe9iAdVHiER%2BFcwgwtEK2ztp8vgIOWEzpPvQMPyS2cQGOqUBa1BX57gp75mB8OAPcJ7MLDgLibuS8M5yI2RXV3tt%2FMpydlEftVVujrVtbLprX5XkhguN6v8Jz%2BWNC1oVBENGGBDfZzRLQArbT4dXM765PmfNfxAqGEfVASZ3DVxAE0CR1oTZ99Zg5gcOWPEVfJGjobM%2FT63bWmM07vxI8DvA0pXXel3ZYuTpBZI1RERb9J%2B9MCGTycY3a0uAm5dSTNEh%2BtgJFPYo&X-Amz-Signature=e9ce33e6452d09a34b7ce741a7052225816816fcf2799c64ef786121662237c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXQQBYF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDzVh1Xn2VEl8U4sNhda%2B6FMUm51OsveA37BwavENiX7AiEA7dbg77T4fvpWB4XnEs6ovCwXofarXS8cYZelb7y7x%2FkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhAsbyv9viZCUvjVSrcAxISfY1BzlNWr0CaKzX6hIaR3qYHKCxWq4FN1TCcUfo9F17LXXZaH5bKIxduFKspijYuzwi%2FCOEW6BIGj7XtBhlORpSssX2Ad7XEqpYmzfctfw50oaqbUCD5Yzf%2B8%2F5wfp%2FOcfanzgIzO3H53pQDHjK5qOOrNETcMuGZ0%2BbdmVSgjyE%2FnGdepoLlSiRPR8QNYZ8B%2BkHm93Ary%2BwRSFOVsH6jWnYcpsE5tLQAc340UR7hDyeWZDwNESnFtLaFfb0XHl%2B7Y%2FgjeE7MrW9ivSpxF9sJmUr9Y%2B3%2FLDLU8TskoDH2wVFeCrUTcM8tRZIks75zHb2czn1bMccutUp4QWVu1Ht8AiUK%2BN37c9RtzjrE8jP2pFNrCk1v60q1VmrxJjdsuKTnERrN8COVynhq8pADXf6l4PKuklbU%2BKjHVrgV949iGQEKPAjIOrnn2UC1%2FwfPBfGXBFlkuYorhHkKZjZIvlo94ImTvBzoNzW6epyzil9l2MFJmN4y%2B%2BAFUWFLqjbL3fcsxGKP2QQeGvyFbzH9kTBgoRv%2FfwWl4ZQ%2F9ti0ogaPX3jayPjun%2ByekjSkbxsbbqRNr4o0T5VR1XDRIluTMfLRNe9iAdVHiER%2BFcwgwtEK2ztp8vgIOWEzpPvQMPyS2cQGOqUBa1BX57gp75mB8OAPcJ7MLDgLibuS8M5yI2RXV3tt%2FMpydlEftVVujrVtbLprX5XkhguN6v8Jz%2BWNC1oVBENGGBDfZzRLQArbT4dXM765PmfNfxAqGEfVASZ3DVxAE0CR1oTZ99Zg5gcOWPEVfJGjobM%2FT63bWmM07vxI8DvA0pXXel3ZYuTpBZI1RERb9J%2B9MCGTycY3a0uAm5dSTNEh%2BtgJFPYo&X-Amz-Signature=6bcea9c5a23ee2404723920002adcf60d29a966efabf6b542f5812965830f0d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXQQBYF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDzVh1Xn2VEl8U4sNhda%2B6FMUm51OsveA37BwavENiX7AiEA7dbg77T4fvpWB4XnEs6ovCwXofarXS8cYZelb7y7x%2FkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhAsbyv9viZCUvjVSrcAxISfY1BzlNWr0CaKzX6hIaR3qYHKCxWq4FN1TCcUfo9F17LXXZaH5bKIxduFKspijYuzwi%2FCOEW6BIGj7XtBhlORpSssX2Ad7XEqpYmzfctfw50oaqbUCD5Yzf%2B8%2F5wfp%2FOcfanzgIzO3H53pQDHjK5qOOrNETcMuGZ0%2BbdmVSgjyE%2FnGdepoLlSiRPR8QNYZ8B%2BkHm93Ary%2BwRSFOVsH6jWnYcpsE5tLQAc340UR7hDyeWZDwNESnFtLaFfb0XHl%2B7Y%2FgjeE7MrW9ivSpxF9sJmUr9Y%2B3%2FLDLU8TskoDH2wVFeCrUTcM8tRZIks75zHb2czn1bMccutUp4QWVu1Ht8AiUK%2BN37c9RtzjrE8jP2pFNrCk1v60q1VmrxJjdsuKTnERrN8COVynhq8pADXf6l4PKuklbU%2BKjHVrgV949iGQEKPAjIOrnn2UC1%2FwfPBfGXBFlkuYorhHkKZjZIvlo94ImTvBzoNzW6epyzil9l2MFJmN4y%2B%2BAFUWFLqjbL3fcsxGKP2QQeGvyFbzH9kTBgoRv%2FfwWl4ZQ%2F9ti0ogaPX3jayPjun%2ByekjSkbxsbbqRNr4o0T5VR1XDRIluTMfLRNe9iAdVHiER%2BFcwgwtEK2ztp8vgIOWEzpPvQMPyS2cQGOqUBa1BX57gp75mB8OAPcJ7MLDgLibuS8M5yI2RXV3tt%2FMpydlEftVVujrVtbLprX5XkhguN6v8Jz%2BWNC1oVBENGGBDfZzRLQArbT4dXM765PmfNfxAqGEfVASZ3DVxAE0CR1oTZ99Zg5gcOWPEVfJGjobM%2FT63bWmM07vxI8DvA0pXXel3ZYuTpBZI1RERb9J%2B9MCGTycY3a0uAm5dSTNEh%2BtgJFPYo&X-Amz-Signature=34e6a0e8f7f447c5d6f1f7aa75287a0a0d63a2b11960ee7000c6dbc78d7b14bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXQQBYF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDzVh1Xn2VEl8U4sNhda%2B6FMUm51OsveA37BwavENiX7AiEA7dbg77T4fvpWB4XnEs6ovCwXofarXS8cYZelb7y7x%2FkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhAsbyv9viZCUvjVSrcAxISfY1BzlNWr0CaKzX6hIaR3qYHKCxWq4FN1TCcUfo9F17LXXZaH5bKIxduFKspijYuzwi%2FCOEW6BIGj7XtBhlORpSssX2Ad7XEqpYmzfctfw50oaqbUCD5Yzf%2B8%2F5wfp%2FOcfanzgIzO3H53pQDHjK5qOOrNETcMuGZ0%2BbdmVSgjyE%2FnGdepoLlSiRPR8QNYZ8B%2BkHm93Ary%2BwRSFOVsH6jWnYcpsE5tLQAc340UR7hDyeWZDwNESnFtLaFfb0XHl%2B7Y%2FgjeE7MrW9ivSpxF9sJmUr9Y%2B3%2FLDLU8TskoDH2wVFeCrUTcM8tRZIks75zHb2czn1bMccutUp4QWVu1Ht8AiUK%2BN37c9RtzjrE8jP2pFNrCk1v60q1VmrxJjdsuKTnERrN8COVynhq8pADXf6l4PKuklbU%2BKjHVrgV949iGQEKPAjIOrnn2UC1%2FwfPBfGXBFlkuYorhHkKZjZIvlo94ImTvBzoNzW6epyzil9l2MFJmN4y%2B%2BAFUWFLqjbL3fcsxGKP2QQeGvyFbzH9kTBgoRv%2FfwWl4ZQ%2F9ti0ogaPX3jayPjun%2ByekjSkbxsbbqRNr4o0T5VR1XDRIluTMfLRNe9iAdVHiER%2BFcwgwtEK2ztp8vgIOWEzpPvQMPyS2cQGOqUBa1BX57gp75mB8OAPcJ7MLDgLibuS8M5yI2RXV3tt%2FMpydlEftVVujrVtbLprX5XkhguN6v8Jz%2BWNC1oVBENGGBDfZzRLQArbT4dXM765PmfNfxAqGEfVASZ3DVxAE0CR1oTZ99Zg5gcOWPEVfJGjobM%2FT63bWmM07vxI8DvA0pXXel3ZYuTpBZI1RERb9J%2B9MCGTycY3a0uAm5dSTNEh%2BtgJFPYo&X-Amz-Signature=b61698738eaed116ea323faf7731910d12f25809f98321df4a4523c3e0a0df62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXQQBYF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDzVh1Xn2VEl8U4sNhda%2B6FMUm51OsveA37BwavENiX7AiEA7dbg77T4fvpWB4XnEs6ovCwXofarXS8cYZelb7y7x%2FkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhAsbyv9viZCUvjVSrcAxISfY1BzlNWr0CaKzX6hIaR3qYHKCxWq4FN1TCcUfo9F17LXXZaH5bKIxduFKspijYuzwi%2FCOEW6BIGj7XtBhlORpSssX2Ad7XEqpYmzfctfw50oaqbUCD5Yzf%2B8%2F5wfp%2FOcfanzgIzO3H53pQDHjK5qOOrNETcMuGZ0%2BbdmVSgjyE%2FnGdepoLlSiRPR8QNYZ8B%2BkHm93Ary%2BwRSFOVsH6jWnYcpsE5tLQAc340UR7hDyeWZDwNESnFtLaFfb0XHl%2B7Y%2FgjeE7MrW9ivSpxF9sJmUr9Y%2B3%2FLDLU8TskoDH2wVFeCrUTcM8tRZIks75zHb2czn1bMccutUp4QWVu1Ht8AiUK%2BN37c9RtzjrE8jP2pFNrCk1v60q1VmrxJjdsuKTnERrN8COVynhq8pADXf6l4PKuklbU%2BKjHVrgV949iGQEKPAjIOrnn2UC1%2FwfPBfGXBFlkuYorhHkKZjZIvlo94ImTvBzoNzW6epyzil9l2MFJmN4y%2B%2BAFUWFLqjbL3fcsxGKP2QQeGvyFbzH9kTBgoRv%2FfwWl4ZQ%2F9ti0ogaPX3jayPjun%2ByekjSkbxsbbqRNr4o0T5VR1XDRIluTMfLRNe9iAdVHiER%2BFcwgwtEK2ztp8vgIOWEzpPvQMPyS2cQGOqUBa1BX57gp75mB8OAPcJ7MLDgLibuS8M5yI2RXV3tt%2FMpydlEftVVujrVtbLprX5XkhguN6v8Jz%2BWNC1oVBENGGBDfZzRLQArbT4dXM765PmfNfxAqGEfVASZ3DVxAE0CR1oTZ99Zg5gcOWPEVfJGjobM%2FT63bWmM07vxI8DvA0pXXel3ZYuTpBZI1RERb9J%2B9MCGTycY3a0uAm5dSTNEh%2BtgJFPYo&X-Amz-Signature=1df953510880ff91ff3dc1d269794c89d1c89b0ed9ba9f77e1d0c288a49ad92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXQQBYF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDzVh1Xn2VEl8U4sNhda%2B6FMUm51OsveA37BwavENiX7AiEA7dbg77T4fvpWB4XnEs6ovCwXofarXS8cYZelb7y7x%2FkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhAsbyv9viZCUvjVSrcAxISfY1BzlNWr0CaKzX6hIaR3qYHKCxWq4FN1TCcUfo9F17LXXZaH5bKIxduFKspijYuzwi%2FCOEW6BIGj7XtBhlORpSssX2Ad7XEqpYmzfctfw50oaqbUCD5Yzf%2B8%2F5wfp%2FOcfanzgIzO3H53pQDHjK5qOOrNETcMuGZ0%2BbdmVSgjyE%2FnGdepoLlSiRPR8QNYZ8B%2BkHm93Ary%2BwRSFOVsH6jWnYcpsE5tLQAc340UR7hDyeWZDwNESnFtLaFfb0XHl%2B7Y%2FgjeE7MrW9ivSpxF9sJmUr9Y%2B3%2FLDLU8TskoDH2wVFeCrUTcM8tRZIks75zHb2czn1bMccutUp4QWVu1Ht8AiUK%2BN37c9RtzjrE8jP2pFNrCk1v60q1VmrxJjdsuKTnERrN8COVynhq8pADXf6l4PKuklbU%2BKjHVrgV949iGQEKPAjIOrnn2UC1%2FwfPBfGXBFlkuYorhHkKZjZIvlo94ImTvBzoNzW6epyzil9l2MFJmN4y%2B%2BAFUWFLqjbL3fcsxGKP2QQeGvyFbzH9kTBgoRv%2FfwWl4ZQ%2F9ti0ogaPX3jayPjun%2ByekjSkbxsbbqRNr4o0T5VR1XDRIluTMfLRNe9iAdVHiER%2BFcwgwtEK2ztp8vgIOWEzpPvQMPyS2cQGOqUBa1BX57gp75mB8OAPcJ7MLDgLibuS8M5yI2RXV3tt%2FMpydlEftVVujrVtbLprX5XkhguN6v8Jz%2BWNC1oVBENGGBDfZzRLQArbT4dXM765PmfNfxAqGEfVASZ3DVxAE0CR1oTZ99Zg5gcOWPEVfJGjobM%2FT63bWmM07vxI8DvA0pXXel3ZYuTpBZI1RERb9J%2B9MCGTycY3a0uAm5dSTNEh%2BtgJFPYo&X-Amz-Signature=6bcea9c5a23ee2404723920002adcf60d29a966efabf6b542f5812965830f0d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXQQBYF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDzVh1Xn2VEl8U4sNhda%2B6FMUm51OsveA37BwavENiX7AiEA7dbg77T4fvpWB4XnEs6ovCwXofarXS8cYZelb7y7x%2FkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhAsbyv9viZCUvjVSrcAxISfY1BzlNWr0CaKzX6hIaR3qYHKCxWq4FN1TCcUfo9F17LXXZaH5bKIxduFKspijYuzwi%2FCOEW6BIGj7XtBhlORpSssX2Ad7XEqpYmzfctfw50oaqbUCD5Yzf%2B8%2F5wfp%2FOcfanzgIzO3H53pQDHjK5qOOrNETcMuGZ0%2BbdmVSgjyE%2FnGdepoLlSiRPR8QNYZ8B%2BkHm93Ary%2BwRSFOVsH6jWnYcpsE5tLQAc340UR7hDyeWZDwNESnFtLaFfb0XHl%2B7Y%2FgjeE7MrW9ivSpxF9sJmUr9Y%2B3%2FLDLU8TskoDH2wVFeCrUTcM8tRZIks75zHb2czn1bMccutUp4QWVu1Ht8AiUK%2BN37c9RtzjrE8jP2pFNrCk1v60q1VmrxJjdsuKTnERrN8COVynhq8pADXf6l4PKuklbU%2BKjHVrgV949iGQEKPAjIOrnn2UC1%2FwfPBfGXBFlkuYorhHkKZjZIvlo94ImTvBzoNzW6epyzil9l2MFJmN4y%2B%2BAFUWFLqjbL3fcsxGKP2QQeGvyFbzH9kTBgoRv%2FfwWl4ZQ%2F9ti0ogaPX3jayPjun%2ByekjSkbxsbbqRNr4o0T5VR1XDRIluTMfLRNe9iAdVHiER%2BFcwgwtEK2ztp8vgIOWEzpPvQMPyS2cQGOqUBa1BX57gp75mB8OAPcJ7MLDgLibuS8M5yI2RXV3tt%2FMpydlEftVVujrVtbLprX5XkhguN6v8Jz%2BWNC1oVBENGGBDfZzRLQArbT4dXM765PmfNfxAqGEfVASZ3DVxAE0CR1oTZ99Zg5gcOWPEVfJGjobM%2FT63bWmM07vxI8DvA0pXXel3ZYuTpBZI1RERb9J%2B9MCGTycY3a0uAm5dSTNEh%2BtgJFPYo&X-Amz-Signature=33b87d5d857d6cd6c0d8ed7cf92850afe53eabe1addaa02cccffc458c3502e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXQQBYF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDzVh1Xn2VEl8U4sNhda%2B6FMUm51OsveA37BwavENiX7AiEA7dbg77T4fvpWB4XnEs6ovCwXofarXS8cYZelb7y7x%2FkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhAsbyv9viZCUvjVSrcAxISfY1BzlNWr0CaKzX6hIaR3qYHKCxWq4FN1TCcUfo9F17LXXZaH5bKIxduFKspijYuzwi%2FCOEW6BIGj7XtBhlORpSssX2Ad7XEqpYmzfctfw50oaqbUCD5Yzf%2B8%2F5wfp%2FOcfanzgIzO3H53pQDHjK5qOOrNETcMuGZ0%2BbdmVSgjyE%2FnGdepoLlSiRPR8QNYZ8B%2BkHm93Ary%2BwRSFOVsH6jWnYcpsE5tLQAc340UR7hDyeWZDwNESnFtLaFfb0XHl%2B7Y%2FgjeE7MrW9ivSpxF9sJmUr9Y%2B3%2FLDLU8TskoDH2wVFeCrUTcM8tRZIks75zHb2czn1bMccutUp4QWVu1Ht8AiUK%2BN37c9RtzjrE8jP2pFNrCk1v60q1VmrxJjdsuKTnERrN8COVynhq8pADXf6l4PKuklbU%2BKjHVrgV949iGQEKPAjIOrnn2UC1%2FwfPBfGXBFlkuYorhHkKZjZIvlo94ImTvBzoNzW6epyzil9l2MFJmN4y%2B%2BAFUWFLqjbL3fcsxGKP2QQeGvyFbzH9kTBgoRv%2FfwWl4ZQ%2F9ti0ogaPX3jayPjun%2ByekjSkbxsbbqRNr4o0T5VR1XDRIluTMfLRNe9iAdVHiER%2BFcwgwtEK2ztp8vgIOWEzpPvQMPyS2cQGOqUBa1BX57gp75mB8OAPcJ7MLDgLibuS8M5yI2RXV3tt%2FMpydlEftVVujrVtbLprX5XkhguN6v8Jz%2BWNC1oVBENGGBDfZzRLQArbT4dXM765PmfNfxAqGEfVASZ3DVxAE0CR1oTZ99Zg5gcOWPEVfJGjobM%2FT63bWmM07vxI8DvA0pXXel3ZYuTpBZI1RERb9J%2B9MCGTycY3a0uAm5dSTNEh%2BtgJFPYo&X-Amz-Signature=1619337327505594ca4ed57e7ac8292de2d68fe98a6ecfad6e290188dfdaad26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXQQBYF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDzVh1Xn2VEl8U4sNhda%2B6FMUm51OsveA37BwavENiX7AiEA7dbg77T4fvpWB4XnEs6ovCwXofarXS8cYZelb7y7x%2FkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhAsbyv9viZCUvjVSrcAxISfY1BzlNWr0CaKzX6hIaR3qYHKCxWq4FN1TCcUfo9F17LXXZaH5bKIxduFKspijYuzwi%2FCOEW6BIGj7XtBhlORpSssX2Ad7XEqpYmzfctfw50oaqbUCD5Yzf%2B8%2F5wfp%2FOcfanzgIzO3H53pQDHjK5qOOrNETcMuGZ0%2BbdmVSgjyE%2FnGdepoLlSiRPR8QNYZ8B%2BkHm93Ary%2BwRSFOVsH6jWnYcpsE5tLQAc340UR7hDyeWZDwNESnFtLaFfb0XHl%2B7Y%2FgjeE7MrW9ivSpxF9sJmUr9Y%2B3%2FLDLU8TskoDH2wVFeCrUTcM8tRZIks75zHb2czn1bMccutUp4QWVu1Ht8AiUK%2BN37c9RtzjrE8jP2pFNrCk1v60q1VmrxJjdsuKTnERrN8COVynhq8pADXf6l4PKuklbU%2BKjHVrgV949iGQEKPAjIOrnn2UC1%2FwfPBfGXBFlkuYorhHkKZjZIvlo94ImTvBzoNzW6epyzil9l2MFJmN4y%2B%2BAFUWFLqjbL3fcsxGKP2QQeGvyFbzH9kTBgoRv%2FfwWl4ZQ%2F9ti0ogaPX3jayPjun%2ByekjSkbxsbbqRNr4o0T5VR1XDRIluTMfLRNe9iAdVHiER%2BFcwgwtEK2ztp8vgIOWEzpPvQMPyS2cQGOqUBa1BX57gp75mB8OAPcJ7MLDgLibuS8M5yI2RXV3tt%2FMpydlEftVVujrVtbLprX5XkhguN6v8Jz%2BWNC1oVBENGGBDfZzRLQArbT4dXM765PmfNfxAqGEfVASZ3DVxAE0CR1oTZ99Zg5gcOWPEVfJGjobM%2FT63bWmM07vxI8DvA0pXXel3ZYuTpBZI1RERb9J%2B9MCGTycY3a0uAm5dSTNEh%2BtgJFPYo&X-Amz-Signature=adbab8428226f9cffcbc2630e9ac45f9190e0fb82e6425fa8cf8624a5209c128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
