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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=cb699eea0dfe5dccb35c00ee0552fa12d03d8759d44fea396ba6e0e458d556af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=6cc4f0406153d497e138aa1455d33622e4b83b4395c3261de129c62bb8d0b1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=f2a701727c60d7207eda7ab1d94ce93dcc88d947bc1c7466da44f43a62021b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=8c2a72124399d1d2bfe02380605a5e082d71ceba0beb448e9009a7921bfb4a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=9ec8102b1f9fdd2b0bf6f42d399683a3273652fd9190151d0309da5150a6264a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=c39346e189b861966b51258b15d769c69a0d7e3cedf09a806f18d9fb3ebd2aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=6e557c30a2137fbb20919723d5a8aedd8adc2d1894d4222addc428244018b88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=e2bc339a8abc5a43e100c3dde5a1bfee7daf78af042840cd8340bb0d6b3ca046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=454e7dc042261108a8b772714a66daee8b14b1eb42d3075fd95ed3b24e561519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=1b6de78255c5aebcc2a03ca15227173d9b935b1c290efb9a2dff4f9a2c72fad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z7D63WI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGGMfq%2FvBfgDTAU38wVC%2BrvZ6h4ozL2lEnOG8rla3tAiEAtHapQoeUtLH7U9GUjvcy09r0zrOEo%2F0opR7iHXKZoPsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBpNTAL15lPB4uZaSrcAzGzg%2FqWblJ9XH3uc6Jlf3MqjlPn65cT2rTVw7JNAgNbIVD2QoRU4sG7CAFcUKhRsBXNSokYzueZXVTj7pHxaQ9S02SwhAa%2BuEnGoMe6B%2BOJavvblQ7OQG1YZ4LjLHcis7o25FcXARDtU8ceZEk5UkdN%2FJOdn6mhwQkWUPp6ULkfFTMr%2FvLU%2Fx3j%2Fz1u99463VH4LaX5vNBm%2BOD4rzSXmoEADLSCLAYZ7upwHliXNaC8MbD%2FK3k0%2B3rw4T7RUwm3%2BHj1%2BG72dTF74iAiYJ5KJ7BoF0n4zyoVmczyKjpY4zHS4%2BoNiPJ35dCf%2F0AeZ8DHXwze89rnrC8UCKAlk9Dirj2SCzXoMD6fyzRcSjCGd1ugD%2FonASo4qt6QeZP7f5M3msdhB0jFxcXk%2Fj3r1hg8oSKP%2Fu%2FmJQZ3VMwu0WEY%2FfomuSc%2FQG7FQV0kAUkYG3nLmIGvvE877MiCB2Yyv6hVGY9zpKMm5FB7CVI9C2G5G2VqamNCm4hG%2BgvusMpVhnkrbgyLSyIljd6K5HV8r%2Bl41aTPQUTealqcyZRBHcKed27ZyQdF43DH1Ik5szmEzK3nPaR5Zz8z6Y3m7U4rODeIrvsRa3yZkCsRUMOMDFF%2FsKvtQJFnhAAUC6cllwUkMPC648QGOqUBGpQXjPkrDQb3eQzaLVt3tG4oqf9uSP5S3ZbUJ15fwhuTS5wWixl4qMDciKcqmZDkRPoJ21kQvnwoDMDs%2BbFzgYPikihM%2BMYCcNs4Q9FzA9CWvBoG8%2Bs%2FzOLlA5jYTVc0GFy0%2FzCIZheYu0osfRmbGYR5hhAhBMpl7u7ERiUFIKLOBBwsKSune2%2BK8RKmyBztz6wwIJUYdLlYD0rsxUO6MErXzeNT&X-Amz-Signature=f06629bfc4d99f2829105a05df73e4c5720b58fa59edc5f24a779c9cdd0cf1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5UOBQK4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUfaZ3Kup8lS6UCSo34%2FKj%2FW%2FAimTWap%2BEru1sq96b7AiBhrTXI%2FHUUslrdNQ3XLM5D45CgYpvM7xRF%2FtmGoFBU2CqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMli51TS7zYDUjXvn0KtwDH%2FGsZNHrUQ5FbbWr%2BGn0dwWU%2F%2FBGr6bkYE%2FqYAdEQ73P9dA0QzOPVrqvUrTZ05ydYlu%2FfHhq%2BU223cSookV%2BqznZYsbH9HQyngHTzjsmw3eMxtLHZuN90DojV3OZXLEfN%2FLx0D5iZ%2BQAOqdcYuAnOednCif20x%2B0flWXaxPxFvjGu4ei0Y1%2BkyJFErSYAK6OwaPVGDXzga%2FKmlnyRP%2B7Wh4mLc3N2dxeS7Ut54V2BgpqAfLjNrPvVC1LoKT4jgBMxV2Io1HV%2BLlRtuj5IzSqp1SoW6eMvUUMmxNhKOON8vPC5IH5S0yCgKSXwHIJk%2BQ%2FHzQ8nTuKsB2J3HsINAn3f3F%2FrX3VdB0kSkIxgMqF2mtQF1kDsutGKCaAWm%2FLCo8qi4gN5656Pc%2FbYnjigxbVdKCfyzoU7zirCeubxT3fXC%2FGNKSJtZ63HuTgX0fSJUNy6WEj0G%2BADe8aaXEEYGZJg1%2BJKMXT6i7B5Ivuqry4WW8YM9X7hInLWmadAo6cgsDswhE9c4GpCgrFTyWK952%2F%2BR2npTqscXyfp8VQIMHfNNCog6xO5fISaIIwKWzbPPDf2nLymfAhF4OrnFtBXqe6iCnVFGHGDdyF3U%2Bo%2BIpQo3eUjORn4qBqQPk%2FTs4wqLrjxAY6pgEwyggXt4jb2MQJBzIsq0%2B5SOaQdHba0os%2FGs5oPRBZgMASqR5m8yxthYJMQrsqoXeHeLiedwzQMn%2BVzPbfIWMlaB3VS%2BcnOn6KkBrGX4%2B9gGyeSBJlf7i0HbiMyubwG2LQMFYvV1cZ4Vgq73HqwL7WwWBbDltVSdTvTMwu%2FWPZp4n55vgtuxaJRUKngYTCX93Q3TvZD66BUtMugwQZbxc23XdmndNU&X-Amz-Signature=4304f505cf226b97f3895ad3434c16b0cb01960f785abfd9615acd485882a6ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HOOU3E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpZah4atKF6BiZUgjHCeBNoDpYuZR1dhcZ3cMU55ZBjAiAf6LWuTURm0tEJa481uFodNpdfd0fhpGMQ1ccJSLl1UyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSlN2jTL2%2B1JmTmRBKtwDxHFrOS9mM%2FG9pNko188YtLojOTQ2wqbqsuimB6%2BNTWqq8FUZFDzSzoROt%2FUpDpiubCmSIdxWk9amgqzYnPZaDBLfxpAfmpIERdO3ahVpq9PVqiadCq%2B6dcBL89EdnhNpbJqsBqIewPaogUowC1%2BraQAAltCmZ%2FFe1GVgmNbkpwJelNOwrCzSxjnYL1PeP9B4erQRFjyj8sUIkeoT54sngoeVX8D%2FzWvkxdXTakivH%2Ba6BNpANkCaY72RIglH1Cjy%2F9uUbDyeuUGHRjQDkSkZUyMUl9%2Fv8sSg3xBfozujg9WH4qeAU%2BBIuP6zW4FkT5b19RsAjiqXOTSFgf3ZnBYwT0qcQNLFN0wZ9yoz0VBRYsAhV0pz8yjj5IcpqPRe5wmG%2B7MS1sJNa6btFKc0fio%2BeRSGzF0JVs21evYgIAfTSt%2BvWg5dJNOFQINhSIT50ShGcsWt1Pu0K2qUKQ4Mj%2BfnsdVRq%2BEu5trAlQCU4dqCHfyDzaDjvW1hW6dXPzbammxJoRZs11qIliaVvkc9B9LvHiIR61eVEp7shAePSw94VEE2TaqeQtjnvZj8Q6ZZVrpfbI0onUcr4AXCWRIxym0JTUs7VAD4eAvjiRDiz9YrZNoJ8KX%2Bwlnuz4RZNvMwvLrjxAY6pgE%2BuXnt7iH2rbkAME6dODH9DNbU9MtTiuJkkUWCv0YM%2FhcP%2FQ4bp1eXe4sKZ6BdoZkyajnToofwO94MJmJ%2Fd1%2FfCIiCGW%2BL4bTtdp%2FujyKkFer8wE4EII8E3FFsrCjbfJ8HOfR1XTO75yVPhQq3aiCIkOKFkmnXMOAK1gzkCo8s4bYIEquTJyOSA3adDXYUmtqVVO7KNxztnaHVjL9PeqKsd4tj58wT&X-Amz-Signature=69740f4462e7a6636dd5efa03e3f564ab6d5abf79098a79efec29ac998c82ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=4eba1b0d2306b24f67aed665f4971a1b907e9c54239a059cd71c0116200039c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ICBL7Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHz5wFTsW6TotsHeVVm7nhTzHgfYcm94YTIiCw8s9EGAIhAK03zQL6QoP4I%2Fv%2FoIImFrVwiP3vQKuQuFloQz4lXeGdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BaATu2RU6dfo0lE8q3AO2uLl9IfZDEty3jPug7wSFdYM6J4LnIexS%2F73ZpwMK%2BqAQtRcvCaFDH%2BCWawEhAt%2Fx%2BeZlo2QygLNNNCrP4OJPvkSs7l0f%2BdHa4MKw8bYuJVENx%2Fapt1Bpg%2BG%2FEYGK2WMhO5USKW3Vqbuxt%2FMZTcyBcfDGgRkombT04BDef3xG1QvRUQsW6MrjyIW7%2BBdXJsixFEbAGzST3JWlyioGi3tBnql0zpPgRy5XaXELYXVcTT6c6USQsGxR5SI5LG1eXTpKeLRHcf6BDeTsCd7nOGVXHlaG009KRxtUohH83fUt%2Bq4NkTmlih4JEwVCuxJJKBw5e6L3qdxhC3gLMGrDwbwtF0bdcr1wjFACtoNzxXxel068%2BzgfW6Ywtu2CezJYC%2BCIOwGvJAi5ppRC9zyOBsJKE2N3jPUoHdT%2BWM3dOPUo9iWug5lZfqrAXDMxjx908IB1vs64vn9WWRyHJuG81twcL7PZNhBk4oFVIOrYAC6AmB6hIEl1NCdjwPoZZRYK4FA%2BILE0LAhzkoc2rDf8BS96db%2BkAk5Udu0yvnNzDUGdytc7CyXV%2FTo1FogRzaSWvQ%2FH%2B9ts5Pb1z8EZh3Ot2cv5rJcKXo7FGkohoMpSy%2BXSL0SDAVEMquvx7QZN8jDjuuPEBjqkAaYfM%2BAm8fkBI5EFpFaSoGkHmJ%2BGgScYNrNJ2Ic1fCKEvoK8nUYPWK%2FaQdj3e5ons2tW0DafblaNUeTRIkzqkAOW2OYUO2OZkEKc7x2bzw8ODZYXLHty1Hp8Glo53MXXxrnsfrTOIJGw1wM%2BxHQt8Xd2leuvHWfJ57SxLvDea1gwry3w2gUpFPX%2F96utTtNIRaOOxD2nfXNPyuISjO%2FSyDWw6fN3&X-Amz-Signature=a8b0daf0026bc343574fde96066724012ad08dc2678a91a4f3ff389e14767c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=08122a1d2064e75c9b23a30adf05a24473856bff3d9698d20dcd45fd3c45b1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632655UFT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG62IDZUTOJyOde2lfwy88JB0KQeJ1fA5c%2FmlF0N6CLTAiBBzIzTYX564fZHApDiNUopqisxdeF7%2Fkjap3WEaicDxyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbUHGh88LHqQ2CwwbKtwDOEyKtZ1vaEkdfXs%2BOZZlfwe9bWSe6WsoVJN%2Fki6%2BdyMQIiFU5Qjd6mI2ExJU5t94pFrA2%2F7iV6PT9JVE7bR5GW9g924fumZidS3AuRgJLS6LDqEh1xCLSrtmy2wxHN%2BQ8ZMj18Qg%2F7wMi99xxeWWkMDy62QhSy9ST1pfB%2Bmh4FAByaw4a5k49dK8sxqtOPJqFNZmg1Xj%2Fnoz0F28RxD%2BStH88w7miPeS4edmki7mdg%2FuU0cnVme%2FO14aCDoY%2Bj%2BmzqLonpbcgpLRSIj5f1taDfYmB4NwJkJBczILa3FiQYDy0f8%2BUXsnzylC2JhPhD%2BtTkeRTDaGS2oBqbd43cr%2BoTausq4d%2B21bF0SueaJO%2FSbl8HNU%2Fj7G9KUvECJgBntC0SJ29MXullhg3xQDiUKZFgOO92DFT18uGmB1xtgKyIAVaAUqnV6O2VierJ6FU9QpF2hoVFC%2Bn8pN%2FPchHDP41afEQPVDhYvoVXipKypovOIZLYiicWL%2FvgrwqPd%2Fyzajds%2FDkqmqZJYbx9FjkQEEBSbVOSATboZM%2BSMv%2B1WGyLAgO1uyb2l34wENQ6Sdt4GIanppVAJmx%2Babh8n5v6c7J68N2AB2bq7fGSVTeTw2iKDD6RcFZ9R50nmV6ssw4rrjxAY6pgHPwBB5gaKDAxzrCQYz2EkFrVikVCOhvnpu1nrBR63W%2FMqK2i9hd80GlGj0tbmwVsHRpXyxAFaZgPrw3%2BaM84qXoAyjmO51mA4PZhrRG9zuRO3zHTvXg1p9b4FA1%2BRceOwVyBD8XvRUv%2FeT5ecVHfuZiRtiAszycp9tf3gZMfCWt30yiTcVZYgH9GDJTgXA9rg%2BLmL7tDOp8i0qkFvAiOeCqdJqYsra&X-Amz-Signature=c4a852debbaff0d716219f38d0343faed4c48c573e5c847e7cff1e2ced6c8b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=8ba647ef03a23b104c7122d709be32902d5cbb5e76e1840efce79764fc7038d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQQ27BB5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIf8cEPAxd1bVqBnV6gphWIUvdnHj%2Fpy11Fb0cW7%2FtiAiEAoWpSlrZmCz5cE4e3LFxf02evhW4N1Obgl9NmFHCGTMcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgPN0yOCpwyQ1kfbyrcA5k0XBJD1yobUomPVAWJOEOgu51MpgcojlyQqMEnCmMvndH1pF62Sd8GWvtCGry0aIG45RMKl%2Brqs0USv4zRUdipkgtxSJDowAQ6jrMHJQ2RSA5ibdZq1JTAuW4YldlVhLNOyfDTEy0P4U3emrU7hukAyZsO9ZaTo1acP8W5vL7RRnknmRwD0RUk6LEtA2R1EXdkMfCbxD7krF8z2ssAjeyJaskmhDjJhzl04gRKp0YnijXCKlcw%2B7XLCNUKHvkmGC78teWJvKEhEgXbFe%2F08SFySbpoPBrkfDxgoEy%2FLzUYN9jeI%2BmNyquLo72O8n8GBYUdPiAA6ot9c46HXXm6UQNnI4fqAXCPOCalq4PVgi1NQflnXhPryqL1uiWJWN8ychNC95TSABMEeWxrKiAVwy3j6EQVSbn7NcKAC96OGkTH%2FaDd%2FSt1L567SC3iSXs1KfT8wjLaK4ak7EWQLBT5IzHuf5kRczJsvkubQTQsQ67OQygoUXX0jBKfNmR%2Btz6fikSAxiTZe3qYyzS1pfARPD8Dmkm%2Bw49FTv%2F1GVEups4nsAHSXOEepcrIgXvJDf29yKAHNEUuVGoNy6kpwkcyODlYMr6sDtS932SzVAgRyedxCbpjRFh6eRw5lGIAMP%2B648QGOqUBpcErp4d%2FMTgHfWAkRKaAY%2BQCFw2BKWq9ycFvcAamttnRqti21yHtYJx8aOx1nCajAcYlAxqi8hYVL4jbdw%2BWe0EgejOSCy97HgWoJBaVb06YSVbTb6emmQQFQZNhODMZU7nX14w40%2B2So4xZScxRRBwhvVglEYugmu1ReUBBhsNOfvxX5QpT5ZzFneYPVOVANOFItixvZICXYtnO9XWw7%2By10jeC&X-Amz-Signature=d4e4d8269490f3714f0e14821e3a088b2dd8840c331c08fc4efa382efecb7d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=66d388805ca4ff719deceeac4358256005da7e4813a3e2deef28008aef0b853b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQFNXBY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr4o6suS0ZsvPDzzQgnf%2FZ4wmCDkf7BiYF5FRR6lZ4cwIhAKSH5VD8MU9oNZdvS0BOU3J1bfGD%2FesVwpuG7uoFPBHBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B8Ut7BAMHAFOW2nkq3AMCM0GVFPd5fTss7ClnKxwZVysGTXhCpWEuP6qoBOCzVQ4Lr3t4toIQSffu4dmoEtNoMGtqcOtCVIR9BMyfIoDtSW%2FSU2kn9C4ckce%2Byi7ZwbVgPkINkqIxNE905nL7AGcuw9WUqloT%2FTlvQSBoqHl5sx8RXFQ%2FD4IpB3snP6PjFksoNKx%2F4psCAjXljwIzVdNqcTHoDojRpBkCFhhZOuzHNrmjWlsTIZEe%2BepgaTWkXMVU4BNS%2FtCfY0XCdWN6nH7SKdj0ZjLNKFZ2Wtdp%2BVYCKDJrED%2F2pehOLjVwp2IpfGOKAfgmZ6C4gUsraAz6ErpN8w%2Ftvi6P80gGOjQgE2qAjAbC7c2o9dsCQ%2FuVvWb08PautXi4x37WE3ILvx6zjXJgoZ4aQeV7643CRV5F74eGyioEdPNRa%2BFkN%2BRXAQq%2BOq%2Fyo4FkeWtIsM0Cp5BZ42RKV5hGslXAR1DCi7%2BFHQ%2B1qoXeROk3r2RxNgBEmkHFgVv1vgAGtrW0AEYavIfLWIOqBJ%2FXBLwPPiISk%2FB09B6DtxJyzbvGq3z3ld3NE1CgLgZhX7TMHrJ3RE6EurFXRxvGIBtFgvVYVV9k5PDVh0e3MU8zpCyQAD9ey61JyBK7jFaH7oO0jCk3R3bf7zDzuuPEBjqkAa1Whr96tL3Mi1tUlLTEwKDDDy%2F3bFvd%2BYT6wjqp7Gjn%2FarJQ4usRGrxxK63qNh7cBV8c%2FnHLRXyzC3gNwVT%2Fl0Vmi6zIkPZkExbIiD%2FW52ErKHTcQrjw9f03Fg83GjXWa5YnDaUmMzKpMYlN4OeQPnsfB0sO74Dhpcx1P7Z3UjYz7gpz1QAdcx0TgS3KvUf9sqRURHuaBfEFkhS1NZdk8kTR%2BXO&X-Amz-Signature=3b1418191df256bcd6f56f002b5944121cc01ff06b638c133d9b34b1848d88c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U4V7LFZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQAvp%2BO8s1E%2BwNgsvag2etRcjcLwvB4Za4MVPwUvSjBwIgSvb%2BFYri8ibqjZdaKL6RlQQhrxPz9Oi673WhJuqjfNsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTPGiujRe%2BYSzjQhyrcA2bguv1kceLcZ2gK7xiRolBPEgeOeZS%2FdGvrbTZRkPxTvi6uj96isrjAATZBGBXccSy%2BzH%2BZQKZj1KoCN4JHSpRGr2TzRTDaca%2BGV8oXbDKfmQBGtB7dfGrSMK8n80eN90iWN9ZvxQO%2BhV9u0aus7vDYM2qoIDXbtwB29pnhNriIECbaeiS1SopdKj%2BMwVp1F%2B79T%2FBJp40KiB3YwO3b%2FIL6vE3Dhdb8ypgNB%2BNNJzsA5%2Bm8rpKOUSckxcXl5ZBKaOqN29hmm8otvieq4uKNJGOGHQXQB5koewL%2BrtX9YABA2y3jPU6Pz4zLmfLaHDmaadCpquUdqCl%2BIMRU652pfQiikA6y%2FvVn1PijqADazf%2BCO3PejjX3BKs2MEBO9zvdjzL1feFr6x0Py2cjW%2F8LRVn9t1P1XUqPLE945PPZuF2K9HA5SktMiAcCTS3lu1qto8zV7mYZAixGaey%2FyrU0B6DsOjUx9qeBkfsR1wh1CL0Xxe22cs5hJ910Vkvs%2FrNtdGOa%2F4eCCP2Fc0fI%2BdF1PTiXLhkc0A7sSDA192x4Si6vux55vQMeLycoFiplMV0vshDN8BVg9b4CWwY%2BxQi%2F%2BP4Am0XK7r%2BOZasZan1HMo39%2FVE7zSRv%2BL1YdT26MM6648QGOqUBteWFNTFccjW07NhqLtZkbTpJtooh7n0HmtSBG4wUvVFIAduD1BLONxXH%2FDfgioMLjVblKEXnDIKUalxNdhOCg%2BLmIu45SXlATT0HjwCkjG9kv5SRqpxzTLvxwwqh%2FBBfg62vran9BlcqDEeDoqHoKxykNHBg20WkObxS5OEmbSmta4PigPF4UDXN2fL9zsOhNenwHvNiZ2zFtYgVmOD%2B1pao2tSl&X-Amz-Signature=ab16840379b485cd84bdd3122ba1c372904d85283ccf10c6a7f8033e4b7658db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV5ULIVR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa0Yb%2B8d1WWjbFFbjTwve2FiEpRKIkG3IITUn3%2Bu0I7wIgGkYf5hs%2Ba1hvet9a7Io1pSoUjmdF451IVrvQQiq85lQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1%2BCHkcqvjD2h30TircA0qF86Fn49nddkNhEW5FRVpMMGrMIqwZEgH0Xo7gE%2FChyNCD7WBzkQFf8jT4Ypfq%2BI7SrVLYhRpV4k6VCaLDDhl5N%2B%2BFK%2BGQKk3r6NYUwqegVm4ayLji6dG7O4FiyU6%2B1dDg9FfjgwWSRYnKbX%2FygFEP3XfPVYaK6qUzMhgr9dC7Mn9Ww%2BFlIwm5DQcZnjdEIqKnDcAx%2BMOZcG9cmEs2Mm9VovpHPrXNBlfenq6jwDEBgjjHz1KoDteNed1EkGNgCahxiG5dP2PKEdtxYhzvP0w68zkX%2Fqs0F1GCVdIU6rFlGg53jnKxLZS3oQO8g43Kl%2Fs%2FB3NjMyEwkh%2B9pd%2FqDU0tnaQIASWTWXEyMYaWRtZvqL0%2BvNdFg%2BT7d1roWLR2aWYuwmdem4Cg%2FrGFfuZuuKG9fBzX1p5WCESG1aVl%2FvNMWATY%2BpIKpWbAT8FUEqZSmzb3er9zmeGilBgx9jon9NJWJgkjdxEc4MYofbX3TRqJwkWeNzjQaReOqFCgGtziNGayxxzpeUYkVjsQ6y%2BwyS9sQF8L2g1lI9a95uLRSU77sMEBAZ4nGpdETgDqfyu6dHBEU%2FKsMl4O1xhcY5SbdC%2BpFt%2FRsfHT6ZL28%2FVbYp9dmFOuZcHmwedYWFp9MKm648QGOqUB%2BlnH1NhozE6L8C51qQP5Tgh4q4bPOMWiOQBvac01urRpbfcgKZXQNWlxGUdYsBU5%2Bc6E6W3GkZuupkoLbvR7Ii7eyPjZmIEpLWQ%2FhETwshyVyKhVtsvI0P7hLhBeTRaep3vu18%2FB8Jxf2Qt7mSffjZQbXIqCh0W0Y5HbskMlwPcBF16%2FQU3bWDC4G8eNwzyGerXOilV6FeLfV%2BO91Qho2ekVbVd9&X-Amz-Signature=efe604e073cc3bf53dbf05644de69d5bcec7f250388674806bea1336dfdc95a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBGX72I%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICi5SDlt4CI8Ryjfe23XEYgdUhbUqq9G9LF2Q1BAbZAAAiEAyu%2FJ%2B3feA%2BfBbcUFyU84Ib04RnSfU9XjjL%2Bh0jePh0QqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFTnC3mH7haC5n0XCrcA%2FGz0HO18C6u30iP6d4a8ucgk%2F3k7EJT32cIO2PcsVeoneuxjjEjKEmjxNG3zEZUBcwOFGo8VPRVgKJsP7ZWd%2BIPYHu2b7vgYxxg5SQ%2FapiSZlJKM1dR3ylgHH%2FXXOCw%2BhFqAFfmWLFQ1RUFNcuX6Phq2dtblqJDtQr04txlxSh4FAZKVedPfKy7ivKc5W5aGKtp86OM93HPmgBLZZmYyHJ0qkGCyb2J7ajTZPjzv0PbZ2Z17BBcH6RpXbGGnNof3WZVkgEO4J7vieMAuYEcGPQlSz20ou1WBcZIWnKABi3%2BZMzgHVK%2BFvHoo0mEn3Cerm6LuzejR%2FugahrsfVWNx%2Fp0jb42GZOaERZmHM%2Fm13Bt62UvOpp%2FMEi%2BB1TCIUqiaOQm0LsyMlahajv22VI5v9wgWuZ4NeHH57UKGPsa74nxMmsBfNCLKsUgOVcfdbt32ocbPTMoX5SdPrFGM0jKVMhzfafqCao7hFWKHpKgASODIockLyKZLp57vO5Mx9DEflyPGFNSfucrS6Tr%2FFRK%2F1R7Y3BpKm%2BUAzdTjv0ENOW8wS3BHD1jClmB8Dt96D7wNbTk0EoJXSE%2BH%2BTHuoE%2BHi%2FiDU5qyIp%2BoYBRu%2BQBmOnXktt2MJLUVOibNLFyMLu648QGOqUB2L8iU4SEXb%2BZOpbo%2Bv6lGHflnFZylIUkOGOWkacLJm0kHzjzw%2F3%2B%2FvvgLzDWEylEGRt7OLRSwGbtx2oES%2FFsFz%2F3YZXuoBWdqEJRihxgF0n%2BEcEKQV5axnhT%2BX91FgZ%2BOdT1sg9MfS9svNvXugujmkiAcEOGHze1dF5wvYfDZJU68brrnZ9LcJd3PwV%2B6%2BSNF6jWBszIpdMkyHOO1QNjRfdl%2FlqX&X-Amz-Signature=34c237bf167f4d56098cff452af2edcf08e54daebaaf88e65ffa04884d167640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AB7F4X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FvSYs3qNVO9X66T%2FN6UFWyDK6JLK4hqGiSxR7RIiSsAiEAi%2Bon1WkswuQYvFb%2FnOwuywgST8%2FjN8dzuiWdHBvSFVYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ3DM09LP2Er4SIqyrcAwbWCegRWcWFsQYysFmi1p1EpxGbaVn8F3uKWQitG3lRoNMhycssYqQMxTYjyAx4PfaWStnYmi00OJJ6PxBjrn2C4ncnkO6SPfAYoJ%2FBqRu5LDBfSIPyF%2FRjvHAU4yYLtErkIaY%2FPK8hlwoAzDIiRNYlLffQX0AAUgHJleHBUHTh%2FA8%2BS4pGgFKjlRt4OL8Yjni66ecPuym0O7ZaBKYC%2Fnknnwo19ovT5AdY072QNax0rb2%2B0hIdK3O5yzP1PHmflNPQvPkWDmc%2FiIAqx7P306d82qPTbLkfZd9gExjIb1IZnnp06CZoLV5%2FFCYRp%2F9v0MG00zWmiXI4urJZKaOAWKHFbtbpNV93xiDRoUAx4RjLQP4l70ezU1ZtOE4dGpG8HDYu%2B8wlmvqygePSQowHVizZP57htZRrFIX77dFdIZ8y3WF2w90lF%2Bu5DY6Y%2F%2BOnmpV3eZNt7gLUHy2PtqKhNOWetxgeYS0VxupbXWe%2BfQk8zR7CpzuvF1bwWBqSArPsuFrnzUHVC9fO4DhVtrhyUsZIWgi4jM0dSPrDpFsp6VAovy%2B2ZK9yiobptSTm2SJM8o7Z%2BV936N9PFTLVsJDhu7O6xK9CPxbeJ7HNhMamInVhoBnWcUAjHnbpP%2F7OMNS648QGOqUBjP4be1p8VQ1jC8q8ehpY3FRhQZ1y%2FA54No7H%2BVr69W61X%2BOi6H6Wa4ql0xX9lxL1zeWwdKCy6O4MF021G%2BZ9iOASQADbuvK8CJg2bKSIWrMruUK37mhdeYXhA%2BvNuAtjV1r5kI5gd7Kh2fdN%2F3UcQVyGArzi3OkYbxeVZecNM3IWYGkJMbE20KYdOv%2FXSZoOrHGrPA7diesR5d%2B4ytIIVf4bVUai&X-Amz-Signature=51c5273ace8de55dbc9d12a37ddf9e5733f3b9c7c514072c15127ffcac917a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=d29a5a2de2738951f4c5ebcf4e1e6cee12d0ccd9dd4c112f00ce3f3c5d98f5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=bee387be5ea6785dae7b11304bdcda4f086d77c975bb5ba282bcf98e8bd13e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORDT2OF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHuvqJ6R830BEW86dw5jwCWi3L1rT4Gd04sQkKq0LT%2FAIgRfZ3uZD2LYgpYVG3M2fNbX1EH6WyBZImzYoe78TbA0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf5NvtVKL3JW01IHircAyxduFhTjOz2PJ6HPiF1HdB2E6nzOHxKx0dtUsz3cSAiyWWAKdQPkpR2XHk%2BdtoknKTjPhiCk8a%2BODRREazL9dTJZF%2B8ShHK%2Ff9RmQjFqFFs2N9zhTRukSpOvOTTj2D8DSovP0EksKOMPjUQH2lRGkYXfzfNH27sxkPfg9HHYx6g3mU%2B6YFsvV7vyQkYYcTkgpzNyVM%2BF01LiBFNi4OOlw3JUBgNPL7s5%2Bhcdix99oV3qeVoW%2BZm%2Fycd8xFtGwM9h4LToNqYchCIYjUoD89rgAecW4sXF8APFH7k%2BHWZEKaUMVxDfKwTzvCmlAZ1bTD%2BN%2F2US0d4mvLBo5JRLKujQC7MbA7FvrSEJSJuv5CfbilQqkCs9lcj%2BAQKska5VsRHWg52Zieewc46Lw3AD2biNA5R8oD9lwUeZ2R0NnuSDsZf%2FPYdMIUO5Wr9LlpHsqwjOuT4x%2BwPPfRvDbNBsuDvCfZeFeEVg6X7ABceKAt7IjEcEJ9bs4Bd16tmUeMws4MnfbbrfAgXYOaynHqFiM0Ps%2BhB5ZQY6fgV2%2BTj1zp2ahJVB7WY55kJK0F6i%2BR%2BzSw3qyYevHAHo7WfyMa2Y8jpcC4jpiKbnssUiudb2VbpdNjVFeO8JvrxZ1JfDltNMMe648QGOqUBP2SAa5SrndDVJPN59BotdXMk06Rs2%2BisFn%2FHiYWO0ZkOyaquWGweVW4%2Bv9zFirc3AmI53DyyYYT1xLipxxRV53eex4OVNi8OIHMsCszEO6IU5DPDs%2FiV3OgvWN3td4GpkoNB3iV15Gf1RxZQo0wdQzf4noKRi0jkhgZJV8kjlYqZctPwuuzK5pioT81%2Fkg119NURFFPdmSR2dhCx481MAVWJqnBx&X-Amz-Signature=9055626ca1f2e4ce25174abebd97ed00f653bfbc859c691be15d9fbbc0fa4375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORDT2OF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHuvqJ6R830BEW86dw5jwCWi3L1rT4Gd04sQkKq0LT%2FAIgRfZ3uZD2LYgpYVG3M2fNbX1EH6WyBZImzYoe78TbA0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf5NvtVKL3JW01IHircAyxduFhTjOz2PJ6HPiF1HdB2E6nzOHxKx0dtUsz3cSAiyWWAKdQPkpR2XHk%2BdtoknKTjPhiCk8a%2BODRREazL9dTJZF%2B8ShHK%2Ff9RmQjFqFFs2N9zhTRukSpOvOTTj2D8DSovP0EksKOMPjUQH2lRGkYXfzfNH27sxkPfg9HHYx6g3mU%2B6YFsvV7vyQkYYcTkgpzNyVM%2BF01LiBFNi4OOlw3JUBgNPL7s5%2Bhcdix99oV3qeVoW%2BZm%2Fycd8xFtGwM9h4LToNqYchCIYjUoD89rgAecW4sXF8APFH7k%2BHWZEKaUMVxDfKwTzvCmlAZ1bTD%2BN%2F2US0d4mvLBo5JRLKujQC7MbA7FvrSEJSJuv5CfbilQqkCs9lcj%2BAQKska5VsRHWg52Zieewc46Lw3AD2biNA5R8oD9lwUeZ2R0NnuSDsZf%2FPYdMIUO5Wr9LlpHsqwjOuT4x%2BwPPfRvDbNBsuDvCfZeFeEVg6X7ABceKAt7IjEcEJ9bs4Bd16tmUeMws4MnfbbrfAgXYOaynHqFiM0Ps%2BhB5ZQY6fgV2%2BTj1zp2ahJVB7WY55kJK0F6i%2BR%2BzSw3qyYevHAHo7WfyMa2Y8jpcC4jpiKbnssUiudb2VbpdNjVFeO8JvrxZ1JfDltNMMe648QGOqUBP2SAa5SrndDVJPN59BotdXMk06Rs2%2BisFn%2FHiYWO0ZkOyaquWGweVW4%2Bv9zFirc3AmI53DyyYYT1xLipxxRV53eex4OVNi8OIHMsCszEO6IU5DPDs%2FiV3OgvWN3td4GpkoNB3iV15Gf1RxZQo0wdQzf4noKRi0jkhgZJV8kjlYqZctPwuuzK5pioT81%2Fkg119NURFFPdmSR2dhCx481MAVWJqnBx&X-Amz-Signature=31cfe2b979d74f49544790752a4409bc817a5316b9ba0e7eab58e76e2bc6f9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORDT2OF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHuvqJ6R830BEW86dw5jwCWi3L1rT4Gd04sQkKq0LT%2FAIgRfZ3uZD2LYgpYVG3M2fNbX1EH6WyBZImzYoe78TbA0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf5NvtVKL3JW01IHircAyxduFhTjOz2PJ6HPiF1HdB2E6nzOHxKx0dtUsz3cSAiyWWAKdQPkpR2XHk%2BdtoknKTjPhiCk8a%2BODRREazL9dTJZF%2B8ShHK%2Ff9RmQjFqFFs2N9zhTRukSpOvOTTj2D8DSovP0EksKOMPjUQH2lRGkYXfzfNH27sxkPfg9HHYx6g3mU%2B6YFsvV7vyQkYYcTkgpzNyVM%2BF01LiBFNi4OOlw3JUBgNPL7s5%2Bhcdix99oV3qeVoW%2BZm%2Fycd8xFtGwM9h4LToNqYchCIYjUoD89rgAecW4sXF8APFH7k%2BHWZEKaUMVxDfKwTzvCmlAZ1bTD%2BN%2F2US0d4mvLBo5JRLKujQC7MbA7FvrSEJSJuv5CfbilQqkCs9lcj%2BAQKska5VsRHWg52Zieewc46Lw3AD2biNA5R8oD9lwUeZ2R0NnuSDsZf%2FPYdMIUO5Wr9LlpHsqwjOuT4x%2BwPPfRvDbNBsuDvCfZeFeEVg6X7ABceKAt7IjEcEJ9bs4Bd16tmUeMws4MnfbbrfAgXYOaynHqFiM0Ps%2BhB5ZQY6fgV2%2BTj1zp2ahJVB7WY55kJK0F6i%2BR%2BzSw3qyYevHAHo7WfyMa2Y8jpcC4jpiKbnssUiudb2VbpdNjVFeO8JvrxZ1JfDltNMMe648QGOqUBP2SAa5SrndDVJPN59BotdXMk06Rs2%2BisFn%2FHiYWO0ZkOyaquWGweVW4%2Bv9zFirc3AmI53DyyYYT1xLipxxRV53eex4OVNi8OIHMsCszEO6IU5DPDs%2FiV3OgvWN3td4GpkoNB3iV15Gf1RxZQo0wdQzf4noKRi0jkhgZJV8kjlYqZctPwuuzK5pioT81%2Fkg119NURFFPdmSR2dhCx481MAVWJqnBx&X-Amz-Signature=e12c3c87d09ddb374a11351670d3582aaf9175db304b73e0dba951ae661041e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORDT2OF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHuvqJ6R830BEW86dw5jwCWi3L1rT4Gd04sQkKq0LT%2FAIgRfZ3uZD2LYgpYVG3M2fNbX1EH6WyBZImzYoe78TbA0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf5NvtVKL3JW01IHircAyxduFhTjOz2PJ6HPiF1HdB2E6nzOHxKx0dtUsz3cSAiyWWAKdQPkpR2XHk%2BdtoknKTjPhiCk8a%2BODRREazL9dTJZF%2B8ShHK%2Ff9RmQjFqFFs2N9zhTRukSpOvOTTj2D8DSovP0EksKOMPjUQH2lRGkYXfzfNH27sxkPfg9HHYx6g3mU%2B6YFsvV7vyQkYYcTkgpzNyVM%2BF01LiBFNi4OOlw3JUBgNPL7s5%2Bhcdix99oV3qeVoW%2BZm%2Fycd8xFtGwM9h4LToNqYchCIYjUoD89rgAecW4sXF8APFH7k%2BHWZEKaUMVxDfKwTzvCmlAZ1bTD%2BN%2F2US0d4mvLBo5JRLKujQC7MbA7FvrSEJSJuv5CfbilQqkCs9lcj%2BAQKska5VsRHWg52Zieewc46Lw3AD2biNA5R8oD9lwUeZ2R0NnuSDsZf%2FPYdMIUO5Wr9LlpHsqwjOuT4x%2BwPPfRvDbNBsuDvCfZeFeEVg6X7ABceKAt7IjEcEJ9bs4Bd16tmUeMws4MnfbbrfAgXYOaynHqFiM0Ps%2BhB5ZQY6fgV2%2BTj1zp2ahJVB7WY55kJK0F6i%2BR%2BzSw3qyYevHAHo7WfyMa2Y8jpcC4jpiKbnssUiudb2VbpdNjVFeO8JvrxZ1JfDltNMMe648QGOqUBP2SAa5SrndDVJPN59BotdXMk06Rs2%2BisFn%2FHiYWO0ZkOyaquWGweVW4%2Bv9zFirc3AmI53DyyYYT1xLipxxRV53eex4OVNi8OIHMsCszEO6IU5DPDs%2FiV3OgvWN3td4GpkoNB3iV15Gf1RxZQo0wdQzf4noKRi0jkhgZJV8kjlYqZctPwuuzK5pioT81%2Fkg119NURFFPdmSR2dhCx481MAVWJqnBx&X-Amz-Signature=fec85b0cf89ddf7a0744f843f08e2504cb59b843c37c58136cf99f2559f9b024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORDT2OF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHuvqJ6R830BEW86dw5jwCWi3L1rT4Gd04sQkKq0LT%2FAIgRfZ3uZD2LYgpYVG3M2fNbX1EH6WyBZImzYoe78TbA0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf5NvtVKL3JW01IHircAyxduFhTjOz2PJ6HPiF1HdB2E6nzOHxKx0dtUsz3cSAiyWWAKdQPkpR2XHk%2BdtoknKTjPhiCk8a%2BODRREazL9dTJZF%2B8ShHK%2Ff9RmQjFqFFs2N9zhTRukSpOvOTTj2D8DSovP0EksKOMPjUQH2lRGkYXfzfNH27sxkPfg9HHYx6g3mU%2B6YFsvV7vyQkYYcTkgpzNyVM%2BF01LiBFNi4OOlw3JUBgNPL7s5%2Bhcdix99oV3qeVoW%2BZm%2Fycd8xFtGwM9h4LToNqYchCIYjUoD89rgAecW4sXF8APFH7k%2BHWZEKaUMVxDfKwTzvCmlAZ1bTD%2BN%2F2US0d4mvLBo5JRLKujQC7MbA7FvrSEJSJuv5CfbilQqkCs9lcj%2BAQKska5VsRHWg52Zieewc46Lw3AD2biNA5R8oD9lwUeZ2R0NnuSDsZf%2FPYdMIUO5Wr9LlpHsqwjOuT4x%2BwPPfRvDbNBsuDvCfZeFeEVg6X7ABceKAt7IjEcEJ9bs4Bd16tmUeMws4MnfbbrfAgXYOaynHqFiM0Ps%2BhB5ZQY6fgV2%2BTj1zp2ahJVB7WY55kJK0F6i%2BR%2BzSw3qyYevHAHo7WfyMa2Y8jpcC4jpiKbnssUiudb2VbpdNjVFeO8JvrxZ1JfDltNMMe648QGOqUBP2SAa5SrndDVJPN59BotdXMk06Rs2%2BisFn%2FHiYWO0ZkOyaquWGweVW4%2Bv9zFirc3AmI53DyyYYT1xLipxxRV53eex4OVNi8OIHMsCszEO6IU5DPDs%2FiV3OgvWN3td4GpkoNB3iV15Gf1RxZQo0wdQzf4noKRi0jkhgZJV8kjlYqZctPwuuzK5pioT81%2Fkg119NURFFPdmSR2dhCx481MAVWJqnBx&X-Amz-Signature=0a58a78b0d6fdb621cf977ffcdef41a25f183af7ef793fc99472c2f2962b018a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORDT2OF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHuvqJ6R830BEW86dw5jwCWi3L1rT4Gd04sQkKq0LT%2FAIgRfZ3uZD2LYgpYVG3M2fNbX1EH6WyBZImzYoe78TbA0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf5NvtVKL3JW01IHircAyxduFhTjOz2PJ6HPiF1HdB2E6nzOHxKx0dtUsz3cSAiyWWAKdQPkpR2XHk%2BdtoknKTjPhiCk8a%2BODRREazL9dTJZF%2B8ShHK%2Ff9RmQjFqFFs2N9zhTRukSpOvOTTj2D8DSovP0EksKOMPjUQH2lRGkYXfzfNH27sxkPfg9HHYx6g3mU%2B6YFsvV7vyQkYYcTkgpzNyVM%2BF01LiBFNi4OOlw3JUBgNPL7s5%2Bhcdix99oV3qeVoW%2BZm%2Fycd8xFtGwM9h4LToNqYchCIYjUoD89rgAecW4sXF8APFH7k%2BHWZEKaUMVxDfKwTzvCmlAZ1bTD%2BN%2F2US0d4mvLBo5JRLKujQC7MbA7FvrSEJSJuv5CfbilQqkCs9lcj%2BAQKska5VsRHWg52Zieewc46Lw3AD2biNA5R8oD9lwUeZ2R0NnuSDsZf%2FPYdMIUO5Wr9LlpHsqwjOuT4x%2BwPPfRvDbNBsuDvCfZeFeEVg6X7ABceKAt7IjEcEJ9bs4Bd16tmUeMws4MnfbbrfAgXYOaynHqFiM0Ps%2BhB5ZQY6fgV2%2BTj1zp2ahJVB7WY55kJK0F6i%2BR%2BzSw3qyYevHAHo7WfyMa2Y8jpcC4jpiKbnssUiudb2VbpdNjVFeO8JvrxZ1JfDltNMMe648QGOqUBP2SAa5SrndDVJPN59BotdXMk06Rs2%2BisFn%2FHiYWO0ZkOyaquWGweVW4%2Bv9zFirc3AmI53DyyYYT1xLipxxRV53eex4OVNi8OIHMsCszEO6IU5DPDs%2FiV3OgvWN3td4GpkoNB3iV15Gf1RxZQo0wdQzf4noKRi0jkhgZJV8kjlYqZctPwuuzK5pioT81%2Fkg119NURFFPdmSR2dhCx481MAVWJqnBx&X-Amz-Signature=d79c99b69e5eb1d9e68f26b7c5c6b71c917909b4f22b6ff793e6c3657600399b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORDT2OF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHuvqJ6R830BEW86dw5jwCWi3L1rT4Gd04sQkKq0LT%2FAIgRfZ3uZD2LYgpYVG3M2fNbX1EH6WyBZImzYoe78TbA0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf5NvtVKL3JW01IHircAyxduFhTjOz2PJ6HPiF1HdB2E6nzOHxKx0dtUsz3cSAiyWWAKdQPkpR2XHk%2BdtoknKTjPhiCk8a%2BODRREazL9dTJZF%2B8ShHK%2Ff9RmQjFqFFs2N9zhTRukSpOvOTTj2D8DSovP0EksKOMPjUQH2lRGkYXfzfNH27sxkPfg9HHYx6g3mU%2B6YFsvV7vyQkYYcTkgpzNyVM%2BF01LiBFNi4OOlw3JUBgNPL7s5%2Bhcdix99oV3qeVoW%2BZm%2Fycd8xFtGwM9h4LToNqYchCIYjUoD89rgAecW4sXF8APFH7k%2BHWZEKaUMVxDfKwTzvCmlAZ1bTD%2BN%2F2US0d4mvLBo5JRLKujQC7MbA7FvrSEJSJuv5CfbilQqkCs9lcj%2BAQKska5VsRHWg52Zieewc46Lw3AD2biNA5R8oD9lwUeZ2R0NnuSDsZf%2FPYdMIUO5Wr9LlpHsqwjOuT4x%2BwPPfRvDbNBsuDvCfZeFeEVg6X7ABceKAt7IjEcEJ9bs4Bd16tmUeMws4MnfbbrfAgXYOaynHqFiM0Ps%2BhB5ZQY6fgV2%2BTj1zp2ahJVB7WY55kJK0F6i%2BR%2BzSw3qyYevHAHo7WfyMa2Y8jpcC4jpiKbnssUiudb2VbpdNjVFeO8JvrxZ1JfDltNMMe648QGOqUBP2SAa5SrndDVJPN59BotdXMk06Rs2%2BisFn%2FHiYWO0ZkOyaquWGweVW4%2Bv9zFirc3AmI53DyyYYT1xLipxxRV53eex4OVNi8OIHMsCszEO6IU5DPDs%2FiV3OgvWN3td4GpkoNB3iV15Gf1RxZQo0wdQzf4noKRi0jkhgZJV8kjlYqZctPwuuzK5pioT81%2Fkg119NURFFPdmSR2dhCx481MAVWJqnBx&X-Amz-Signature=e12c3c87d09ddb374a11351670d3582aaf9175db304b73e0dba951ae661041e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORDT2OF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHuvqJ6R830BEW86dw5jwCWi3L1rT4Gd04sQkKq0LT%2FAIgRfZ3uZD2LYgpYVG3M2fNbX1EH6WyBZImzYoe78TbA0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf5NvtVKL3JW01IHircAyxduFhTjOz2PJ6HPiF1HdB2E6nzOHxKx0dtUsz3cSAiyWWAKdQPkpR2XHk%2BdtoknKTjPhiCk8a%2BODRREazL9dTJZF%2B8ShHK%2Ff9RmQjFqFFs2N9zhTRukSpOvOTTj2D8DSovP0EksKOMPjUQH2lRGkYXfzfNH27sxkPfg9HHYx6g3mU%2B6YFsvV7vyQkYYcTkgpzNyVM%2BF01LiBFNi4OOlw3JUBgNPL7s5%2Bhcdix99oV3qeVoW%2BZm%2Fycd8xFtGwM9h4LToNqYchCIYjUoD89rgAecW4sXF8APFH7k%2BHWZEKaUMVxDfKwTzvCmlAZ1bTD%2BN%2F2US0d4mvLBo5JRLKujQC7MbA7FvrSEJSJuv5CfbilQqkCs9lcj%2BAQKska5VsRHWg52Zieewc46Lw3AD2biNA5R8oD9lwUeZ2R0NnuSDsZf%2FPYdMIUO5Wr9LlpHsqwjOuT4x%2BwPPfRvDbNBsuDvCfZeFeEVg6X7ABceKAt7IjEcEJ9bs4Bd16tmUeMws4MnfbbrfAgXYOaynHqFiM0Ps%2BhB5ZQY6fgV2%2BTj1zp2ahJVB7WY55kJK0F6i%2BR%2BzSw3qyYevHAHo7WfyMa2Y8jpcC4jpiKbnssUiudb2VbpdNjVFeO8JvrxZ1JfDltNMMe648QGOqUBP2SAa5SrndDVJPN59BotdXMk06Rs2%2BisFn%2FHiYWO0ZkOyaquWGweVW4%2Bv9zFirc3AmI53DyyYYT1xLipxxRV53eex4OVNi8OIHMsCszEO6IU5DPDs%2FiV3OgvWN3td4GpkoNB3iV15Gf1RxZQo0wdQzf4noKRi0jkhgZJV8kjlYqZctPwuuzK5pioT81%2Fkg119NURFFPdmSR2dhCx481MAVWJqnBx&X-Amz-Signature=0150284a53f6151f4b8ce142b4bc20034b76767fb775648d2184eb49ccc3b1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORDT2OF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHuvqJ6R830BEW86dw5jwCWi3L1rT4Gd04sQkKq0LT%2FAIgRfZ3uZD2LYgpYVG3M2fNbX1EH6WyBZImzYoe78TbA0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf5NvtVKL3JW01IHircAyxduFhTjOz2PJ6HPiF1HdB2E6nzOHxKx0dtUsz3cSAiyWWAKdQPkpR2XHk%2BdtoknKTjPhiCk8a%2BODRREazL9dTJZF%2B8ShHK%2Ff9RmQjFqFFs2N9zhTRukSpOvOTTj2D8DSovP0EksKOMPjUQH2lRGkYXfzfNH27sxkPfg9HHYx6g3mU%2B6YFsvV7vyQkYYcTkgpzNyVM%2BF01LiBFNi4OOlw3JUBgNPL7s5%2Bhcdix99oV3qeVoW%2BZm%2Fycd8xFtGwM9h4LToNqYchCIYjUoD89rgAecW4sXF8APFH7k%2BHWZEKaUMVxDfKwTzvCmlAZ1bTD%2BN%2F2US0d4mvLBo5JRLKujQC7MbA7FvrSEJSJuv5CfbilQqkCs9lcj%2BAQKska5VsRHWg52Zieewc46Lw3AD2biNA5R8oD9lwUeZ2R0NnuSDsZf%2FPYdMIUO5Wr9LlpHsqwjOuT4x%2BwPPfRvDbNBsuDvCfZeFeEVg6X7ABceKAt7IjEcEJ9bs4Bd16tmUeMws4MnfbbrfAgXYOaynHqFiM0Ps%2BhB5ZQY6fgV2%2BTj1zp2ahJVB7WY55kJK0F6i%2BR%2BzSw3qyYevHAHo7WfyMa2Y8jpcC4jpiKbnssUiudb2VbpdNjVFeO8JvrxZ1JfDltNMMe648QGOqUBP2SAa5SrndDVJPN59BotdXMk06Rs2%2BisFn%2FHiYWO0ZkOyaquWGweVW4%2Bv9zFirc3AmI53DyyYYT1xLipxxRV53eex4OVNi8OIHMsCszEO6IU5DPDs%2FiV3OgvWN3td4GpkoNB3iV15Gf1RxZQo0wdQzf4noKRi0jkhgZJV8kjlYqZctPwuuzK5pioT81%2Fkg119NURFFPdmSR2dhCx481MAVWJqnBx&X-Amz-Signature=5d90766bf3d35303a0835f7de87cf7893d5d166bb1c955f0ad8ff6fd45625de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORDT2OF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHuvqJ6R830BEW86dw5jwCWi3L1rT4Gd04sQkKq0LT%2FAIgRfZ3uZD2LYgpYVG3M2fNbX1EH6WyBZImzYoe78TbA0IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf5NvtVKL3JW01IHircAyxduFhTjOz2PJ6HPiF1HdB2E6nzOHxKx0dtUsz3cSAiyWWAKdQPkpR2XHk%2BdtoknKTjPhiCk8a%2BODRREazL9dTJZF%2B8ShHK%2Ff9RmQjFqFFs2N9zhTRukSpOvOTTj2D8DSovP0EksKOMPjUQH2lRGkYXfzfNH27sxkPfg9HHYx6g3mU%2B6YFsvV7vyQkYYcTkgpzNyVM%2BF01LiBFNi4OOlw3JUBgNPL7s5%2Bhcdix99oV3qeVoW%2BZm%2Fycd8xFtGwM9h4LToNqYchCIYjUoD89rgAecW4sXF8APFH7k%2BHWZEKaUMVxDfKwTzvCmlAZ1bTD%2BN%2F2US0d4mvLBo5JRLKujQC7MbA7FvrSEJSJuv5CfbilQqkCs9lcj%2BAQKska5VsRHWg52Zieewc46Lw3AD2biNA5R8oD9lwUeZ2R0NnuSDsZf%2FPYdMIUO5Wr9LlpHsqwjOuT4x%2BwPPfRvDbNBsuDvCfZeFeEVg6X7ABceKAt7IjEcEJ9bs4Bd16tmUeMws4MnfbbrfAgXYOaynHqFiM0Ps%2BhB5ZQY6fgV2%2BTj1zp2ahJVB7WY55kJK0F6i%2BR%2BzSw3qyYevHAHo7WfyMa2Y8jpcC4jpiKbnssUiudb2VbpdNjVFeO8JvrxZ1JfDltNMMe648QGOqUBP2SAa5SrndDVJPN59BotdXMk06Rs2%2BisFn%2FHiYWO0ZkOyaquWGweVW4%2Bv9zFirc3AmI53DyyYYT1xLipxxRV53eex4OVNi8OIHMsCszEO6IU5DPDs%2FiV3OgvWN3td4GpkoNB3iV15Gf1RxZQo0wdQzf4noKRi0jkhgZJV8kjlYqZctPwuuzK5pioT81%2Fkg119NURFFPdmSR2dhCx481MAVWJqnBx&X-Amz-Signature=bb185c2f952554536cc655d18e89425a6ba0e5bc835f746f4d9c8261296afde2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
