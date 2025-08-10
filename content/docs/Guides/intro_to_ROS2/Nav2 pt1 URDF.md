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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=69e9b9d94d24d5f4007f13d0be6e7bbeed2b435f10cbd7e5ada066eb5b3f7e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=dec88b159d87871e71cd9fe704e46efadcd2803717e28117b7731bb814dc27bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=0e9604ac133c1c713465cea8a0a9f34f8fc04895c2caaacf2061a3b1a3a2e37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=75a0bd22736568ebdcea6608b488facc1d6f74661dc6d86243cefa691189b92d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=ec3cf3e19a234c6615203f4620177752525abed4ff2db8bae6f7bc8e90ca2828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=4cd264796a13cb2f4798fe4b2099c9bb1818fc948e0eeb434d7385d402edf4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=1c276613509aba69fa25a7ba34e1823d4951bc49848afe4211293e3e23df98a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=99c353cc147ec4cc22ca873cfdb4c5d017ffedc15bbb476cf3c15b31a54acd07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=4d15b0916a5ce3ce55ff3fa0239359cab9a47c5ea463216c3e09a15fa2a2250c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=30e77da6f1c1bfa3cc38bbb0009bceb639d2e30f02d33495880c13c6c1d444de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JIJQCID%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGjFShnQsqcQxGkNc2FL57aNqK2WktesA5adUm0HO99QIhAKmyKNdt5ZXr7SigVIVWJRRoS3xt1DVWFdkzhanQ13BCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf7MlQBKSkJXZVPlQq3APPOnTVmmdNSIchh66tfseKfznCDAuP1RLOx98qLQqt6aw92KFeici0Q78IjDmvcWFhVbq%2BS0LTTmX0hqMap5xm3Z%2FR2IsRLMTEXWVdwm7FL%2BbRdB5TmdvFI7tKklqaOi%2Bu30BuY3MzptgEjChSoeOdYAVbIqEoamE43UpXk0JRH9cjxx6QEgrvUf7Tq3LMAR%2FVp3Bo05kR7cvyQQa5NXxFlKUxRze6cpoBQZ0TYMvuIHl%2FPUiLi85BkmGkBsrxXnFYnB5zVFCnQczwD170idqBgQgN3WEK1%2Bx7cwuKyIME5X3ZptD4F03avKZ8sTX42o1qvlt3fhJmSfP5t0qN3YzrHc71y%2BbgMA%2BOxnEfe9%2BL8ImPbLA0MI8mQP9PMQB9A3VOf7hCoUGdN0K4yqkRJUwshCZSac3JQ5nCmAA4X2HMgcSqStzMBvtsmP9eVb%2B4hZLXJ%2Bp1sYiCX9xgZkdI%2Ft7Oe7%2FmsNg8WsqWT51v1j8i8LOBNubCQG%2Boyakm9eypm7Mn%2B3V9cTqng0sSGW%2BdUAE5zvIYMIt0MoetMSMZ0UcsCMMX1X7LfdT9vt3GisclvSKGOPTaTlZZbsPzle2PWv1GVtiNabDehFfiL3u6bFejoX%2BnkCVzdyYR9CymYTC0uuPEBjqkAR%2Ff0lAmgEHpBh9Qn85CuqdRe570ep1x%2F58kt8YFpanYC0rqSO1XBatpAEdglRkB7QFctPO5sN01s5AH3nAjVDSDo82Hp4BzUrnWK9K5gQOQoyoFiFAGMRB7ogFPziWxzTGkDmCb0POEbKHZBdgwffXbVYcbRY5tpc6%2FAQljbB7I84iwdRJnHIWkGIuFzxaTwRGGvWIPArynDn3iVtJGirPnHQw9&X-Amz-Signature=49a85343f96ee84bf5919b66a2b8ff147d99380bbcfe083717be7a789614da7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPJ2GRJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzzk6aY0HPZ%2Bn8rGs7Wcq7JW4XU8dvcwFE3e776ttK8wIgGuXz8fCvK1sRb10a8ODzK6TUWooNgheBwAyZEW%2BDgg4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvYTj3LJsbpvKVuoCrcA%2BjJSvE2tQcX9llmhpbRLSmHUbGkBj9e1%2FHu9VMwQZvdvzpyzsj3QNQWdV8%2FKci3RGRV%2BphecwgO3qjgRRCcnGBpJNJvniVbzEyNNjrn8BecQFsYG2s%2Bgzdzgp7zshYlNcPMvco4XF0eowXFeHLTN4gvItEJXq75XTOGm83ZUhaQ5nHInaFWfeBvIwDBBzPzmiCOapm5UBETZ81pzvJwzaJrDPQDnKd8%2BHpM4kT2D85rdebKdD7FvLriH6xMa0HH7UGTwWsHbF3WrishaNVaBYAGMJJJIEInh1VA4hq3JWzbxzoHgVSCR9T60q40N5T1VhLKoGVYS1OqVrrFYIo8Q7j4L4n9Zcuh8aG1ZWGAiO7Hx4Q0WSiJ5J5mWxm1Y1vezsKRJtsHRc2i5y5p8wMm1ZtAQGYJEw45EfNwTfjlJIJlJV2w5Mo%2Fjj7RpnCE%2BVangzuTNEYmhB6ixQcjbsdMQvYOeFRKgP3yQay8Mn%2FzO3twAxG1iVb1LvB8B0tKMUPZG71mWeyyYGDD%2BYipqH0ETsnncPOY2u4EdxwF4%2FR2NY%2B%2FNScU3aymWMu7y4UBxWWoQRJOheCsJg4n%2B2Mq5adTpM87jbTUZ9qypjg6x5xPcBwKfxIBTKU%2BY%2Fc2UIJ5MN2648QGOqUBl3fu0JlacEZ%2FVsNCgzbCTLK5Ry%2FnAO84X6f4dGeCfmDVJJOwSmohDA58EYNiS7d4DNJgD3b2ggTSWJ7NrBXZPvhXNijZGhMfBC%2FfIfyAQPtAfRr%2BYNGaOZDhqhytTkyEZDKaNHQCZayz%2Beod4YCBtu82mSIiDdicpq5exqG5fXJgxm4OMblZgt5FmhmVa6477jFLDAB%2FEKx4Jn5GRLZJfdHI4mkv&X-Amz-Signature=01fe14453c2e0ac9e3158a4146f58c05294e61d35e2237ddd5bf7e0b576e45d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3HMKSFK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVwuIEkrarC3giabXHZMkI7o2eMf5OZrjFBGF8gtqBCwIgF0EfPIWpFZy1kOtGlU01Dk56%2Bn8VukyzGp0fGXJhYfcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPblnEgExoR3%2BpzqEircA9k6ZQvV2OQplu0YiPuXjzagULMkYjlUo%2FVqvf5Lcv%2Fqaq0%2FTE3b5AL7dQlwnueMx8KGcNOauJEmp%2BBxIhoGKwD7GuZtz%2FJ7kiTNPeKqk7k5NM9TEwBA0Yw%2B89vt1MfS5CUqegoqFcm1VzA%2BqKYVlfVsSJuGxcTVm0WQZEDJ4GyuGZ%2BzJU6PqEiVpdwq1Vuz9MWrTrbhEnNHjaZ5s4fAh2fHbeOHRLnYf%2FPyePa7N96oo0wHVm37%2BqId5gDRLctnMPSyxuLkGZwPhIakmjQalHaP1fRsYtLJ9gBwQBBEeGUEtdvCziNwX65m%2FDbFNDriGbG1oDkrj6BURUJvryyNcqXvRg2gIhW5ZY1PxE0boNhwcbXQQJQThtF6shxhPvUtzzKWP9cNtl7JeJlJG9urcb0lYu44liuGLxm4fBgHZHZrdvcK%2BJEsW00ROhNjCRLu5SQPV2hHgKbo3bHKNWTShDmc4B0B5ev3VB3dTJPpdQ37NKoIKmKOENdAjBqmHeOQxZsVsshMps7Cwul2%2BUQaxfnFaTtiUkgC0RKq8Ibl6MjQiQ8vNcT0OwkSA3fcqDAzf9soR7ZNXQxpeaRuXtlogv%2Fbzf7Eg6SvuluC8gheCUm6OCoiIIPRTaqjkj1EMIy748QGOqUBsqHM6%2BxkjA6E%2BD8QIWSesXsEoTkn2wsG3UHaej4tuuBB5Ejyb5VpkhdheMgerh9JtquusCsuZl6yy6p33PiuG0mOpjw5tHxf6lqPWrRUhvWIY%2FQZymxUiegBVfgWGZvemLM53LpKAZzcYQTC6Y5JmFmg0j%2FfvRB4g7iu2kUwa3WgHPblQ1ZACGFHJudv%2Fw5icJlMGM9ry1ilgLxz22BNw2n8QMWg&X-Amz-Signature=031a9a537b3a57fd2c9ac5a64084d3228f4877ede8b41161f2805c42ccebfd3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=c8f4a14b6a99b3b1da29d2dca6988cc6d8e7be58779ada0a831cb804a40a7287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AB7F4X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FvSYs3qNVO9X66T%2FN6UFWyDK6JLK4hqGiSxR7RIiSsAiEAi%2Bon1WkswuQYvFb%2FnOwuywgST8%2FjN8dzuiWdHBvSFVYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ3DM09LP2Er4SIqyrcAwbWCegRWcWFsQYysFmi1p1EpxGbaVn8F3uKWQitG3lRoNMhycssYqQMxTYjyAx4PfaWStnYmi00OJJ6PxBjrn2C4ncnkO6SPfAYoJ%2FBqRu5LDBfSIPyF%2FRjvHAU4yYLtErkIaY%2FPK8hlwoAzDIiRNYlLffQX0AAUgHJleHBUHTh%2FA8%2BS4pGgFKjlRt4OL8Yjni66ecPuym0O7ZaBKYC%2Fnknnwo19ovT5AdY072QNax0rb2%2B0hIdK3O5yzP1PHmflNPQvPkWDmc%2FiIAqx7P306d82qPTbLkfZd9gExjIb1IZnnp06CZoLV5%2FFCYRp%2F9v0MG00zWmiXI4urJZKaOAWKHFbtbpNV93xiDRoUAx4RjLQP4l70ezU1ZtOE4dGpG8HDYu%2B8wlmvqygePSQowHVizZP57htZRrFIX77dFdIZ8y3WF2w90lF%2Bu5DY6Y%2F%2BOnmpV3eZNt7gLUHy2PtqKhNOWetxgeYS0VxupbXWe%2BfQk8zR7CpzuvF1bwWBqSArPsuFrnzUHVC9fO4DhVtrhyUsZIWgi4jM0dSPrDpFsp6VAovy%2B2ZK9yiobptSTm2SJM8o7Z%2BV936N9PFTLVsJDhu7O6xK9CPxbeJ7HNhMamInVhoBnWcUAjHnbpP%2F7OMNS648QGOqUBjP4be1p8VQ1jC8q8ehpY3FRhQZ1y%2FA54No7H%2BVr69W61X%2BOi6H6Wa4ql0xX9lxL1zeWwdKCy6O4MF021G%2BZ9iOASQADbuvK8CJg2bKSIWrMruUK37mhdeYXhA%2BvNuAtjV1r5kI5gd7Kh2fdN%2F3UcQVyGArzi3OkYbxeVZecNM3IWYGkJMbE20KYdOv%2FXSZoOrHGrPA7diesR5d%2B4ytIIVf4bVUai&X-Amz-Signature=f8cffcec5c5c48c584b407760071723213bc5e5f1c09d8b0124bb2558b8bccef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=d4e73a6c46620a3cd18b65215b259cd209c4a594996833203770c7b7817d83d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6DGYPP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0%2BIDFRr85RcJh4cuLLUhSwkx7pwFgBiFlKQIfJOCOsAiBHIEADVnEZxoZ%2Bs8gL4CWpJugAESuRRDX4kTo7csHFgyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEEPFfwHYdu%2BFVxWFKtwDB2N93tZPWGnLljUoeC%2BoJSEi8ttFORC4xLgtcbFTnicfpb12r8CkXe6z55DNK5HO4mO1bPzNkR1kou61taFKjSb5NwnZVik%2F1ZG0Fn3pw02HjoVf7mPTV5h3ir4MLgNpX6vp7ZURWcbRnF3t%2Fl9Proya9g%2BP4XkeWjvQlwZtLzvGWUFEEHQmrz4O5NmFFDvTVpI0N4zcoPjbTbumdTszagvZveKMf%2BABlIPdGslwFNhA8cQnEAMqEuyuJK7TE8d6qUZ2vK4x0VCnLQG%2Fbfo9JOlQpGn%2Fw%2FWvxLFbQqGtc3cKDTuyBCHaZa1sVTc0BLlEt6%2BCcApaaz8q7n%2F2YkWEQOVMMPgUtNVOzg7t5eJLBa2SYyR8OveJ24f%2BKvgLbst985UBCt8GqDGcRKIlWSeBeFanjgeahNH24HdN%2BWpNaWjIrZ%2BJcciYl8dcNAK9Q5hZRlxHvESzp5tumP0WwUHCkTE2egJunc5lrhbKK%2FvflJcr0XLnc8yaLseubk8igFNGwkE3RfT9g%2FmxG7HixFhT11GIc35z2pLj9r7vDOZEoBAIBmimfqrS%2FafNUuZ48sW2XUWFlfDdfBV%2FhMlqpHeEQQPyUYR97IoGb0T780Dy1g58xxoR4%2BNfyjkifIowz7rjxAY6pgFkyOjtDQH%2BtVS%2F6DOLQ17zLDMy%2BhsPEIS%2FUR4ESVq%2BmqVZZa7sw4vnnWW2NyKtH7Jb3XmFXKDPxACDdTfi4iYUlyKRUdUAVsz5ZGlaJs0X1QEfOBUpVepzalG%2Bf0DEZO%2FW3shwp4iLDCGF2LTEWUYjmCJJM9EEBpWT4OiK8LNGNYVha79n81dhWX8h%2BWDrmQ6140%2F92orbp%2FcmaBQCuxAEcUV1ukub&X-Amz-Signature=66a224f28f115777e513bc7fbd43f901e95b85348bab66bea79db3cad1758bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=d9da3c180e227bcd87e173eb956feb4d8196f9bc5aeba2c26d87caaeb8cca185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77CLULF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiWJUpYav%2BaLRcyI87%2F%2BVqsnFmgRxA4zlSP97iTF1C7wIhAJmjKGSw3YwxfieWoFAQ04r0cZiaDEr1yjP3pv6EzR1tKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK9yo776eM%2B0umZvEq3ANLL6%2FEhR85DgiJkYUu8f%2BkaBk%2BGs6ErHzNAnr4H2Z3oGPjdF33zxjovVJMNds2Sj7D2DKIye80Je1e7%2Ftl2ZZOHWl7HlpXC%2BS1nlzh%2FLpx2yUn5HR4ZOeIssPora0TN4cKxBndChIFjvoE1tQq2EofVJuXWs4w2p75XpyflltnFxwUYSpjubUnqdeJvC85zlGIFKRYi%2F800cCKgmnlmbe8SB%2FPZXnS%2BSQfD30JjdtQmqVk6BrLpxcidSsG0wPpm%2F%2BmmP9XORsTuxhHr5KQxmUDHoCAv2CblGYcG7DDpujtpJiQC4w%2FPJDBEkemjzRRfY3qkn1NhA8xpGi5rthVRmcmagO1J%2FNl3tjeBpKuPeqvOBmrYEj6OaKbQvj8DGDSPwgTu4fN1RSZmJH1aGix2Rn%2BiUl13HldkE6jbKxCSetufZOcohQ465Vr9OibuOPbsUJSIX962OVOQfm6VZZonS2BvhJzYfrL0ZaS4qA%2BZ%2FO8Bh%2B43SWZKOdmOm9PvgMCRZI8HKbPP9%2FhGrbrkEGj4lu8A5w2jm8FiU9nhsNOJvomVVTAd8Zfr55tOAxe1Hv4goaKzy41mJ7AUGLSWdagxa8NN3%2FS3%2B3e2fGdpUsH%2BgbFO%2FoRF2Fsh%2BMWW3NxZzDOuuPEBjqkAdLgCjGqYz6TENw%2BYeAYv%2Bnh1E5ZFMTW8sDQ%2BUP%2FDsC5aAwds6Ng%2BKdNKmJMorYML3sk2DULqgX9utoHH%2BfgRJGbCA4WVw6grTbrkA65BRtSQhAQMhtuURsZjp66SX6trPXsJ5Yl5CPZK5COLvTaKx%2F4vEuZeOv0pCisJj5T7pToq%2FsY4yl%2Fain%2BTQQ1C3n%2FpurUYX7kTvAHgILKm0lDkslDtclg&X-Amz-Signature=5774212bf020fb416e05c090f473a591eea61106ba83d85ec16a031f1356096a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=14c830a539b9eed9e029b9f31c6d66722aa09d95b0d18b391a551ae80294b3c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCOB6N6G%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb824hHvNwXjkDIAiqCjCgKQVKpznZp1Ray907vDkUlQIgSXi9aWc1MPjbOoruKUKZ4luX3lerWSPz8jw%2FgjXULX4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKA1q9nJRpuVXRnBircA5F6Ul2%2BJ2sVFlxQqtCsqDaenNlrCYsX0aVreD7ZgH0omruet3ZO8rby%2FHs6cvZHSHmZKKknoB%2FMCbTrH8PCl20%2FWhJpJHkkE9huY5F3tsqc4Hzag9CTaR3Gjdv5fs5RqR7q63oD77IMJfPbZOx1hn54BTQPhd5st4%2BVau%2BkKSF1HPznL4gArG7oXptBZk%2BO74G%2BKlPOb8ySocGispUaFQVSu6fVQcR25Z%2FygQXrsdO2HeT%2Fjmi2Wy15Bggh5u3iHmPq%2FZ8VW%2BzLwzyNg4mLGsmWdJDFOQfp2PN5w%2BfjY%2F6QxGihCyy4QzvhcQ0Kda1hwZN1Z1GDb3%2FBi3pd47ydcwYkM%2B0k1mYGGM3W59%2B1UNDrdgLlPhijg4vNJiUQx8ovhd%2FaYShi%2FfVeZ0iBDSbR4UgZ%2Fr2Sue9lQa5lCEB%2FrWGqmahvxhDVwrUUg%2FKTgPPv7tjDK9Xa8UlnXaGGSVWR%2F3rCYgZ7PpoG%2BJfQphWsPaEvwZQ27vF3re90apFzbz6bgZYoU%2FfGEtOW0GijBqKEle14C3Y6KEoPqYNzTHVQGhCE2QzMWkf9DjMWXZlTyzwebsWeVQd79HTz2bgbzard4LQEX%2FZv6zppLt69DhL9evmdOHtXqi09KxNQhr0qMOW648QGOqUBNG2Hu%2BtytL8%2FemFJUnKNQ7O7df8cI4KY6z8BnWQzFelfLzCgA6LwuTUUyZHQh0CxQ9ZSRB%2BLUQGBJEam5%2FcstFFxBIupeWaQxDvcimO4%2BfiD7lwWIBq1zlJ0GRws1Z%2B4RqxvKYDyWnv3SoYLynVon3xfbUQWqZJpaKnZaUwCu1BLS%2BakWD0TUnTCN8blxYZ%2FBw%2BgnRgGVwTemhc46nFDCMVzmMSg&X-Amz-Signature=1704302ee2183866687942a7a022119a8ea570304cf3d8a45eed2d8d6a01be58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=06fe89202d7940e8e7c057191dd1f564f81f2183ec260e29c13359192d656397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQKRSG4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDoWCerui2iFw8D9uySPgo6mvDTiyA7Sx4kHQzif6F6BAiArCuTDyEJp%2FcCx1KEyJa97994cLnHy53qWiV49vT2FtSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKsXgWPZO0yoUOjF0KtwDMJ164Ym%2B76%2F5jnwoMLnAfWY7%2F%2F5f9TWjIV1IoH2DccagSd3EjAEWUvcAR75%2F%2FgUjQfhuxqyUpjpMHJZCbl600N%2FB35lbUarwI%2BhzA3HipBfh3Fwghd0LsQj9bZnynFAfYAkDpgkCrFpO%2BDTN4c4fpKDYo%2FSVIVBYXca11A0KSIJBGJJH0Po%2FgNOvPXpRmTpok1vkLbTqboQiPvrpv4WVTyozsmpIqwSc%2FgT7%2FAHNfGc4OQ82NjnKL41RcheU6uKCSYjgbXpqX7h3tQu3IiOfLVK%2ByswzmUT7FfJck5g%2FJDLw2vfbWLFmB1ELtKrS6MF%2FKHDYeRF2ETzqR172yA%2FiKdd3uJYDfSlQ11u4LQDTsCeDuSwvvZTlnPJUfRkGOY2ju8VsA3Ikvo8JzZx%2FMYsk2ZPPztk3thBmQgNqfq0qNkLXDUA%2F4wRY4kqRIrtKo5dyrBc0gaFu9MgfHSA7i3sRmatFY6UMTUUFfD3w0g9j3Iiaa4NebXNTL4%2Bn3lO5uxv9jCURE4aknRntsWbpfdabqRavAgBM8UqS1IiJbXFDm7ygTyW2jZ0pAbASL96UOxAidnRph8Pfw2r7TCye6X%2BeEFxeoE%2FFiAkIMpkonzvKMMODcN1LcwImDMwViZwwvLrjxAY6pgFPQWjB7wTvMWeRsghQqhAtEHUBbCk44ydKOzSbb%2BW8Kl%2Bi6do7Fge7Ry50qd%2FwLoQgc4AHZIdM0F%2F5zDCuerLnbMo1PXSCoF7PL5vOkMIzA1bYAQoOpqqjmSAkZcSgTRd%2FBVAx6ZqKTZuC2Q1eVDONHOpQMI40CwLT9mtvZHLKATLeMc1I8qda5nFW97fVHGs%2FUE%2FWrVFXJO5ZkUTTjegkIxnBjz1V&X-Amz-Signature=742d862376d7b3310a16e7dcfe70d67cb87ed1c4c3ea3436bf844227210e7498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAUQFDY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6%2F6VpWnWJOLc3JuHOa%2F4hbfb749ocLyjH8I%2FIDcGOBAiBGjev2YLsSgxinXpjMczh4u9b0rsGi3ei8diBtRjZ6mCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjWmWZYrvIvDj5MgkKtwDwb%2F3Dpr1qfG%2Bo9%2BPk2C6vO9z7UBT1rJdqCjlFrnl%2BWi7hvZlcNnX1oCqElsWU7lT2VuqjdiM1c%2FHvD1Svcm91c9G0I%2B0ZqQ8HsAM3ygPvo7tjPlclW8JN2enPJY11XJ%2Fpn5CSF8MwrQFzh9xfWdwChVAu6mlRTJbmeMMAaoOm9cW6eXyhdDMlENzyBS7lOTqvSHjKjmbN8kGYaQQrZmce6vQg%2Fh9t%2FOLjFs6eJB0U6opa5ZrMgR2oqdJGBGAHaCVli3hvI3COC230WKXb5xnte4wcJjUUjmessviAR4eEEmF16M1eJ1FbXdMjXmhrCSgwpAE6iERYiZL7lhFFAqvfzRn%2FweCCiKbyS91d30yCFCz8akKtOVHu8nGFpw0XtZtupjbDktrJD4xsfvae60LU6eNMOTGMFzAC7Wue7xqw87ScfypMi1R4zA3Cch8FcjzsW6D92oIdS7e8S%2BLnCmfggM61neLgCZWYkoNs61fi7IsokwOJKH7AFr7BXh9uRFnhTa4xninN%2BQ32hf6vx3%2FZ7AM8RYBcfa3v4MtVPWOMb6QLSQf4EWzwOPD0%2F2RHXXNGWEgOs3lAwGRB7J21mE4SVxMgL%2B4KjR76uypadEBaj08mR%2BrqmlEyN0664Qwn7rjxAY6pgHjPQ0coC1KIH%2FhUgm721L7WbYRV85oJI7P8yp9IoHe3OTieV%2BiG0BRfw%2BWdyal9BGgTX%2BQuMcZX%2BKhhRPo9%2BUY%2BSGL3gqjHe0Z42OZ%2B5CzGKtrqTuA4dpAohyZ%2Bn%2B69t4qrLhsa1EKfTn0mu6r8tSWQEBm46WbNIqHsV8vgTxD2OpyqrHroRXNB8Lgvb2%2BRYsHrnKH7wZISNqBrVWJgA6lQNCdwCv3&X-Amz-Signature=d7df0682b173c14a5f74ae0013ab8d6b0a0eb403243a7e59a366d1461565a226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPJ2GRJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzzk6aY0HPZ%2Bn8rGs7Wcq7JW4XU8dvcwFE3e776ttK8wIgGuXz8fCvK1sRb10a8ODzK6TUWooNgheBwAyZEW%2BDgg4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvYTj3LJsbpvKVuoCrcA%2BjJSvE2tQcX9llmhpbRLSmHUbGkBj9e1%2FHu9VMwQZvdvzpyzsj3QNQWdV8%2FKci3RGRV%2BphecwgO3qjgRRCcnGBpJNJvniVbzEyNNjrn8BecQFsYG2s%2Bgzdzgp7zshYlNcPMvco4XF0eowXFeHLTN4gvItEJXq75XTOGm83ZUhaQ5nHInaFWfeBvIwDBBzPzmiCOapm5UBETZ81pzvJwzaJrDPQDnKd8%2BHpM4kT2D85rdebKdD7FvLriH6xMa0HH7UGTwWsHbF3WrishaNVaBYAGMJJJIEInh1VA4hq3JWzbxzoHgVSCR9T60q40N5T1VhLKoGVYS1OqVrrFYIo8Q7j4L4n9Zcuh8aG1ZWGAiO7Hx4Q0WSiJ5J5mWxm1Y1vezsKRJtsHRc2i5y5p8wMm1ZtAQGYJEw45EfNwTfjlJIJlJV2w5Mo%2Fjj7RpnCE%2BVangzuTNEYmhB6ixQcjbsdMQvYOeFRKgP3yQay8Mn%2FzO3twAxG1iVb1LvB8B0tKMUPZG71mWeyyYGDD%2BYipqH0ETsnncPOY2u4EdxwF4%2FR2NY%2B%2FNScU3aymWMu7y4UBxWWoQRJOheCsJg4n%2B2Mq5adTpM87jbTUZ9qypjg6x5xPcBwKfxIBTKU%2BY%2Fc2UIJ5MN2648QGOqUBl3fu0JlacEZ%2FVsNCgzbCTLK5Ry%2FnAO84X6f4dGeCfmDVJJOwSmohDA58EYNiS7d4DNJgD3b2ggTSWJ7NrBXZPvhXNijZGhMfBC%2FfIfyAQPtAfRr%2BYNGaOZDhqhytTkyEZDKaNHQCZayz%2Beod4YCBtu82mSIiDdicpq5exqG5fXJgxm4OMblZgt5FmhmVa6477jFLDAB%2FEKx4Jn5GRLZJfdHI4mkv&X-Amz-Signature=004b74eac41696a06adab74a82a16fb0cd67418c4afdf3517682f52a0fb111e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=4a4adcd63b8353a33ac2867fff0f57a63ef442d9f2a96a7cc2752e0309c33e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV626M3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzrgEjJqzF%2FanPsgvQPhxJh9RYK9OdJzUj1vPI4RkhGAiEA%2BOe2SlK1DctAqYkBnt20pKtovCx31S9iHeXbVzmnTAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk1EyvFWjlwHeXygyrcAzHy4qNo911UP13aeslhnWLCoy%2FJVHcsQn27ifSWwPuNrUTUNytw%2BtMoqWqJTZ6QRyXGTGKQ1PIADqkxV6JJ5wXH%2BDLkF0pwzEr9s2rW0phLhST9%2FDVBDPI6vswstKqGDxfnq%2FpJKQPxHRxeHW7bstF5gN6FScEQ9wL8a%2BP7B4WA9llN%2B9UWUXlPRUYwJceQYedRSL26go7NMt%2B%2Bm82QWjAsX4Q3TPEwIXSlusxhxe7jMPypeOzOFCs8gYiXmuabSyJ0LaYSzDAZ%2FzIiKlZaKWPXtp7PEmoQYwUYlG9kdIeMsqaQOQQgBRVRthiuO0PJy5KKiq%2FzlmvjKKe43mWUk7FmDuNlNQGaH5e40GK9FLPF9dNzQJ02R3%2Bakk1cnm9KGdiwFLUTuHnTU069eSPuMGLD8SiVH085m6fueyyYt3fYMmYRW%2FJParGH0uIvw8IQ7kqCf%2BBHZ9SlE3%2FO0iJjOSvfzMCmRSjAu4%2BNNxAz0a6emJUc1BUyRpYh%2BTTaO2m4o3WDWg2KTncGl%2BaapZXITpd60BPqSEXO3JiWFALJVhjzjQifW561IneKA1tvhCDTCalBGycPddkf1uLh14aGS65xDOP3LEolIzEW%2BhoJrc6W2X8W5kGbL%2F1J7gGEMOO648QGOqUBlYQ%2FWPammOAp6TpxLwnSBp8ps5NizhyjCRi5SSS3d6px9pfdHTAsKIWZBb7c3zP7FN9n2Fi2Mg0Nk0WXMvwgOG2pPNEThFX7Go9BUZdeBQv%2B4YsvFRznSZ%2BBlf059ZMwRTfRD8DP1E1JXzuzAFwjUAT%2BpsNGfidANfdZe620rBN%2BnIH6CKljICA6MIxpHcyTIJpW2kAsv6sJ3r7bvF9oIewHde2S&X-Amz-Signature=fe43134de5c2bce09ee362671da8d65b7715c6c7343a543664e3c6f89f088cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTGG3AJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLc7Yqs3l%2Ft4HaKZDVvNTfwPVRenuMTL3A1M%2Bvn9P0%2FQIhAJEXTc4aZuynYvQZPkiPl8HhY55VZe7Rm6kB4fKPCDweKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt6GFq%2FgRWE%2BN8p%2Fsq3ANfOF%2FJluhjqgYdccWMOwMrnyxjmabD8uwyRKJvUl93I3Talr6xnpu3%2Bp91JTuVGxxmKb%2Bk88qjki3hI9cvG0Gcj6EyfMddJdYkulR5tZB8CSC6EctHE3qybdUjE%2BdSRTUXkloI1dQxESDa4vj6HJ1HAauHFIv4MN3nUQjNP9STQoWd1jC7e%2B5ojPPcGCrAmO8Ep76tULRoLeP2y5iiL4KY6o8VHOuqZOZxTnHKQR6SZ6apE3v8WbYvmS10W%2B9wB3mcYk8VClHgkGmlxX3nLL9v9q%2BUdaWn4I0QdZ4qZcXWN2Xf3cwAodgCYXLJVaX1Q5hWc9KACEiugVpyyqsokD5EKQuJBxOpwJbagBsoW63U6pR3V2gRgv8GUfEPIpcyRORTwPC9AXaf4MqUb4cww1btKcGkMBuOXKm3GwrMczETv1aZOOAEb4uYew3RNW62tyQ%2Fgpqzrx9cJmC9GfGK22LmDT35EnspUXfnbZulaSj0OrNCV85Fj%2B9hluRhxVP3fuJwEuiuAV0QbDZgt5j4LSp2vyfUpRkx8ykHPld0YorxDcfrsLRE%2F7eqwH3t6bE%2BgGEjeL5yU1%2BS1gLWpHA6nmuq0pLwTUWuA8eOUnrvcz5B5cV3Bk17xu8Cl1jEuDDZuuPEBjqkAVBjz4UC6X3rEP0Eu5hU4ORkigS5wC%2BlNMjKLmIdIsha4cy6dJ0%2BbBYPy7BsfQ50K9y2M7whcyuHflOr9MwMOee%2FHft4QwYPcNYBVoNL3hWvUlY71Mw4g922z7psIJoQg5t9TALLD%2FTdSt3ZJldTFvhPQzyy%2BdPt%2FPoXb23v0Vsq7v%2FxvWPWDHWxn75lGWrFQvqOKnVOjeawLRNlFqdEAfFJyVed&X-Amz-Signature=42c4aec1fec0a0f8ea7ce6bee3deb106198bc40bbb03f6b93bd71e45cf23bb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTGG3AJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLc7Yqs3l%2Ft4HaKZDVvNTfwPVRenuMTL3A1M%2Bvn9P0%2FQIhAJEXTc4aZuynYvQZPkiPl8HhY55VZe7Rm6kB4fKPCDweKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt6GFq%2FgRWE%2BN8p%2Fsq3ANfOF%2FJluhjqgYdccWMOwMrnyxjmabD8uwyRKJvUl93I3Talr6xnpu3%2Bp91JTuVGxxmKb%2Bk88qjki3hI9cvG0Gcj6EyfMddJdYkulR5tZB8CSC6EctHE3qybdUjE%2BdSRTUXkloI1dQxESDa4vj6HJ1HAauHFIv4MN3nUQjNP9STQoWd1jC7e%2B5ojPPcGCrAmO8Ep76tULRoLeP2y5iiL4KY6o8VHOuqZOZxTnHKQR6SZ6apE3v8WbYvmS10W%2B9wB3mcYk8VClHgkGmlxX3nLL9v9q%2BUdaWn4I0QdZ4qZcXWN2Xf3cwAodgCYXLJVaX1Q5hWc9KACEiugVpyyqsokD5EKQuJBxOpwJbagBsoW63U6pR3V2gRgv8GUfEPIpcyRORTwPC9AXaf4MqUb4cww1btKcGkMBuOXKm3GwrMczETv1aZOOAEb4uYew3RNW62tyQ%2Fgpqzrx9cJmC9GfGK22LmDT35EnspUXfnbZulaSj0OrNCV85Fj%2B9hluRhxVP3fuJwEuiuAV0QbDZgt5j4LSp2vyfUpRkx8ykHPld0YorxDcfrsLRE%2F7eqwH3t6bE%2BgGEjeL5yU1%2BS1gLWpHA6nmuq0pLwTUWuA8eOUnrvcz5B5cV3Bk17xu8Cl1jEuDDZuuPEBjqkAVBjz4UC6X3rEP0Eu5hU4ORkigS5wC%2BlNMjKLmIdIsha4cy6dJ0%2BbBYPy7BsfQ50K9y2M7whcyuHflOr9MwMOee%2FHft4QwYPcNYBVoNL3hWvUlY71Mw4g922z7psIJoQg5t9TALLD%2FTdSt3ZJldTFvhPQzyy%2BdPt%2FPoXb23v0Vsq7v%2FxvWPWDHWxn75lGWrFQvqOKnVOjeawLRNlFqdEAfFJyVed&X-Amz-Signature=36db2cd4865123e666f9f020eab9e34bbdf99459c9a01e4815cbbb1207598769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTGG3AJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLc7Yqs3l%2Ft4HaKZDVvNTfwPVRenuMTL3A1M%2Bvn9P0%2FQIhAJEXTc4aZuynYvQZPkiPl8HhY55VZe7Rm6kB4fKPCDweKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt6GFq%2FgRWE%2BN8p%2Fsq3ANfOF%2FJluhjqgYdccWMOwMrnyxjmabD8uwyRKJvUl93I3Talr6xnpu3%2Bp91JTuVGxxmKb%2Bk88qjki3hI9cvG0Gcj6EyfMddJdYkulR5tZB8CSC6EctHE3qybdUjE%2BdSRTUXkloI1dQxESDa4vj6HJ1HAauHFIv4MN3nUQjNP9STQoWd1jC7e%2B5ojPPcGCrAmO8Ep76tULRoLeP2y5iiL4KY6o8VHOuqZOZxTnHKQR6SZ6apE3v8WbYvmS10W%2B9wB3mcYk8VClHgkGmlxX3nLL9v9q%2BUdaWn4I0QdZ4qZcXWN2Xf3cwAodgCYXLJVaX1Q5hWc9KACEiugVpyyqsokD5EKQuJBxOpwJbagBsoW63U6pR3V2gRgv8GUfEPIpcyRORTwPC9AXaf4MqUb4cww1btKcGkMBuOXKm3GwrMczETv1aZOOAEb4uYew3RNW62tyQ%2Fgpqzrx9cJmC9GfGK22LmDT35EnspUXfnbZulaSj0OrNCV85Fj%2B9hluRhxVP3fuJwEuiuAV0QbDZgt5j4LSp2vyfUpRkx8ykHPld0YorxDcfrsLRE%2F7eqwH3t6bE%2BgGEjeL5yU1%2BS1gLWpHA6nmuq0pLwTUWuA8eOUnrvcz5B5cV3Bk17xu8Cl1jEuDDZuuPEBjqkAVBjz4UC6X3rEP0Eu5hU4ORkigS5wC%2BlNMjKLmIdIsha4cy6dJ0%2BbBYPy7BsfQ50K9y2M7whcyuHflOr9MwMOee%2FHft4QwYPcNYBVoNL3hWvUlY71Mw4g922z7psIJoQg5t9TALLD%2FTdSt3ZJldTFvhPQzyy%2BdPt%2FPoXb23v0Vsq7v%2FxvWPWDHWxn75lGWrFQvqOKnVOjeawLRNlFqdEAfFJyVed&X-Amz-Signature=33bde92c391cc47e066b60f5920796524520ad576ab3aec37d1ae0a0f9266c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTGG3AJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLc7Yqs3l%2Ft4HaKZDVvNTfwPVRenuMTL3A1M%2Bvn9P0%2FQIhAJEXTc4aZuynYvQZPkiPl8HhY55VZe7Rm6kB4fKPCDweKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt6GFq%2FgRWE%2BN8p%2Fsq3ANfOF%2FJluhjqgYdccWMOwMrnyxjmabD8uwyRKJvUl93I3Talr6xnpu3%2Bp91JTuVGxxmKb%2Bk88qjki3hI9cvG0Gcj6EyfMddJdYkulR5tZB8CSC6EctHE3qybdUjE%2BdSRTUXkloI1dQxESDa4vj6HJ1HAauHFIv4MN3nUQjNP9STQoWd1jC7e%2B5ojPPcGCrAmO8Ep76tULRoLeP2y5iiL4KY6o8VHOuqZOZxTnHKQR6SZ6apE3v8WbYvmS10W%2B9wB3mcYk8VClHgkGmlxX3nLL9v9q%2BUdaWn4I0QdZ4qZcXWN2Xf3cwAodgCYXLJVaX1Q5hWc9KACEiugVpyyqsokD5EKQuJBxOpwJbagBsoW63U6pR3V2gRgv8GUfEPIpcyRORTwPC9AXaf4MqUb4cww1btKcGkMBuOXKm3GwrMczETv1aZOOAEb4uYew3RNW62tyQ%2Fgpqzrx9cJmC9GfGK22LmDT35EnspUXfnbZulaSj0OrNCV85Fj%2B9hluRhxVP3fuJwEuiuAV0QbDZgt5j4LSp2vyfUpRkx8ykHPld0YorxDcfrsLRE%2F7eqwH3t6bE%2BgGEjeL5yU1%2BS1gLWpHA6nmuq0pLwTUWuA8eOUnrvcz5B5cV3Bk17xu8Cl1jEuDDZuuPEBjqkAVBjz4UC6X3rEP0Eu5hU4ORkigS5wC%2BlNMjKLmIdIsha4cy6dJ0%2BbBYPy7BsfQ50K9y2M7whcyuHflOr9MwMOee%2FHft4QwYPcNYBVoNL3hWvUlY71Mw4g922z7psIJoQg5t9TALLD%2FTdSt3ZJldTFvhPQzyy%2BdPt%2FPoXb23v0Vsq7v%2FxvWPWDHWxn75lGWrFQvqOKnVOjeawLRNlFqdEAfFJyVed&X-Amz-Signature=4c4c307fc0edcdfb75574ce7d9808b67d1e97f924d3adcd8520426c502824308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTGG3AJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLc7Yqs3l%2Ft4HaKZDVvNTfwPVRenuMTL3A1M%2Bvn9P0%2FQIhAJEXTc4aZuynYvQZPkiPl8HhY55VZe7Rm6kB4fKPCDweKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt6GFq%2FgRWE%2BN8p%2Fsq3ANfOF%2FJluhjqgYdccWMOwMrnyxjmabD8uwyRKJvUl93I3Talr6xnpu3%2Bp91JTuVGxxmKb%2Bk88qjki3hI9cvG0Gcj6EyfMddJdYkulR5tZB8CSC6EctHE3qybdUjE%2BdSRTUXkloI1dQxESDa4vj6HJ1HAauHFIv4MN3nUQjNP9STQoWd1jC7e%2B5ojPPcGCrAmO8Ep76tULRoLeP2y5iiL4KY6o8VHOuqZOZxTnHKQR6SZ6apE3v8WbYvmS10W%2B9wB3mcYk8VClHgkGmlxX3nLL9v9q%2BUdaWn4I0QdZ4qZcXWN2Xf3cwAodgCYXLJVaX1Q5hWc9KACEiugVpyyqsokD5EKQuJBxOpwJbagBsoW63U6pR3V2gRgv8GUfEPIpcyRORTwPC9AXaf4MqUb4cww1btKcGkMBuOXKm3GwrMczETv1aZOOAEb4uYew3RNW62tyQ%2Fgpqzrx9cJmC9GfGK22LmDT35EnspUXfnbZulaSj0OrNCV85Fj%2B9hluRhxVP3fuJwEuiuAV0QbDZgt5j4LSp2vyfUpRkx8ykHPld0YorxDcfrsLRE%2F7eqwH3t6bE%2BgGEjeL5yU1%2BS1gLWpHA6nmuq0pLwTUWuA8eOUnrvcz5B5cV3Bk17xu8Cl1jEuDDZuuPEBjqkAVBjz4UC6X3rEP0Eu5hU4ORkigS5wC%2BlNMjKLmIdIsha4cy6dJ0%2BbBYPy7BsfQ50K9y2M7whcyuHflOr9MwMOee%2FHft4QwYPcNYBVoNL3hWvUlY71Mw4g922z7psIJoQg5t9TALLD%2FTdSt3ZJldTFvhPQzyy%2BdPt%2FPoXb23v0Vsq7v%2FxvWPWDHWxn75lGWrFQvqOKnVOjeawLRNlFqdEAfFJyVed&X-Amz-Signature=4675ccfdc2b3a4ffd5b06fa80d90a355bbb3def90fd32dc9b1287fb0862300a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTGG3AJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLc7Yqs3l%2Ft4HaKZDVvNTfwPVRenuMTL3A1M%2Bvn9P0%2FQIhAJEXTc4aZuynYvQZPkiPl8HhY55VZe7Rm6kB4fKPCDweKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt6GFq%2FgRWE%2BN8p%2Fsq3ANfOF%2FJluhjqgYdccWMOwMrnyxjmabD8uwyRKJvUl93I3Talr6xnpu3%2Bp91JTuVGxxmKb%2Bk88qjki3hI9cvG0Gcj6EyfMddJdYkulR5tZB8CSC6EctHE3qybdUjE%2BdSRTUXkloI1dQxESDa4vj6HJ1HAauHFIv4MN3nUQjNP9STQoWd1jC7e%2B5ojPPcGCrAmO8Ep76tULRoLeP2y5iiL4KY6o8VHOuqZOZxTnHKQR6SZ6apE3v8WbYvmS10W%2B9wB3mcYk8VClHgkGmlxX3nLL9v9q%2BUdaWn4I0QdZ4qZcXWN2Xf3cwAodgCYXLJVaX1Q5hWc9KACEiugVpyyqsokD5EKQuJBxOpwJbagBsoW63U6pR3V2gRgv8GUfEPIpcyRORTwPC9AXaf4MqUb4cww1btKcGkMBuOXKm3GwrMczETv1aZOOAEb4uYew3RNW62tyQ%2Fgpqzrx9cJmC9GfGK22LmDT35EnspUXfnbZulaSj0OrNCV85Fj%2B9hluRhxVP3fuJwEuiuAV0QbDZgt5j4LSp2vyfUpRkx8ykHPld0YorxDcfrsLRE%2F7eqwH3t6bE%2BgGEjeL5yU1%2BS1gLWpHA6nmuq0pLwTUWuA8eOUnrvcz5B5cV3Bk17xu8Cl1jEuDDZuuPEBjqkAVBjz4UC6X3rEP0Eu5hU4ORkigS5wC%2BlNMjKLmIdIsha4cy6dJ0%2BbBYPy7BsfQ50K9y2M7whcyuHflOr9MwMOee%2FHft4QwYPcNYBVoNL3hWvUlY71Mw4g922z7psIJoQg5t9TALLD%2FTdSt3ZJldTFvhPQzyy%2BdPt%2FPoXb23v0Vsq7v%2FxvWPWDHWxn75lGWrFQvqOKnVOjeawLRNlFqdEAfFJyVed&X-Amz-Signature=b1056778885ed8d0f5d2d477dde29331176c0e2b22b3e9efdc3b608e3d891b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTGG3AJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLc7Yqs3l%2Ft4HaKZDVvNTfwPVRenuMTL3A1M%2Bvn9P0%2FQIhAJEXTc4aZuynYvQZPkiPl8HhY55VZe7Rm6kB4fKPCDweKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt6GFq%2FgRWE%2BN8p%2Fsq3ANfOF%2FJluhjqgYdccWMOwMrnyxjmabD8uwyRKJvUl93I3Talr6xnpu3%2Bp91JTuVGxxmKb%2Bk88qjki3hI9cvG0Gcj6EyfMddJdYkulR5tZB8CSC6EctHE3qybdUjE%2BdSRTUXkloI1dQxESDa4vj6HJ1HAauHFIv4MN3nUQjNP9STQoWd1jC7e%2B5ojPPcGCrAmO8Ep76tULRoLeP2y5iiL4KY6o8VHOuqZOZxTnHKQR6SZ6apE3v8WbYvmS10W%2B9wB3mcYk8VClHgkGmlxX3nLL9v9q%2BUdaWn4I0QdZ4qZcXWN2Xf3cwAodgCYXLJVaX1Q5hWc9KACEiugVpyyqsokD5EKQuJBxOpwJbagBsoW63U6pR3V2gRgv8GUfEPIpcyRORTwPC9AXaf4MqUb4cww1btKcGkMBuOXKm3GwrMczETv1aZOOAEb4uYew3RNW62tyQ%2Fgpqzrx9cJmC9GfGK22LmDT35EnspUXfnbZulaSj0OrNCV85Fj%2B9hluRhxVP3fuJwEuiuAV0QbDZgt5j4LSp2vyfUpRkx8ykHPld0YorxDcfrsLRE%2F7eqwH3t6bE%2BgGEjeL5yU1%2BS1gLWpHA6nmuq0pLwTUWuA8eOUnrvcz5B5cV3Bk17xu8Cl1jEuDDZuuPEBjqkAVBjz4UC6X3rEP0Eu5hU4ORkigS5wC%2BlNMjKLmIdIsha4cy6dJ0%2BbBYPy7BsfQ50K9y2M7whcyuHflOr9MwMOee%2FHft4QwYPcNYBVoNL3hWvUlY71Mw4g922z7psIJoQg5t9TALLD%2FTdSt3ZJldTFvhPQzyy%2BdPt%2FPoXb23v0Vsq7v%2FxvWPWDHWxn75lGWrFQvqOKnVOjeawLRNlFqdEAfFJyVed&X-Amz-Signature=33bde92c391cc47e066b60f5920796524520ad576ab3aec37d1ae0a0f9266c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTGG3AJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLc7Yqs3l%2Ft4HaKZDVvNTfwPVRenuMTL3A1M%2Bvn9P0%2FQIhAJEXTc4aZuynYvQZPkiPl8HhY55VZe7Rm6kB4fKPCDweKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt6GFq%2FgRWE%2BN8p%2Fsq3ANfOF%2FJluhjqgYdccWMOwMrnyxjmabD8uwyRKJvUl93I3Talr6xnpu3%2Bp91JTuVGxxmKb%2Bk88qjki3hI9cvG0Gcj6EyfMddJdYkulR5tZB8CSC6EctHE3qybdUjE%2BdSRTUXkloI1dQxESDa4vj6HJ1HAauHFIv4MN3nUQjNP9STQoWd1jC7e%2B5ojPPcGCrAmO8Ep76tULRoLeP2y5iiL4KY6o8VHOuqZOZxTnHKQR6SZ6apE3v8WbYvmS10W%2B9wB3mcYk8VClHgkGmlxX3nLL9v9q%2BUdaWn4I0QdZ4qZcXWN2Xf3cwAodgCYXLJVaX1Q5hWc9KACEiugVpyyqsokD5EKQuJBxOpwJbagBsoW63U6pR3V2gRgv8GUfEPIpcyRORTwPC9AXaf4MqUb4cww1btKcGkMBuOXKm3GwrMczETv1aZOOAEb4uYew3RNW62tyQ%2Fgpqzrx9cJmC9GfGK22LmDT35EnspUXfnbZulaSj0OrNCV85Fj%2B9hluRhxVP3fuJwEuiuAV0QbDZgt5j4LSp2vyfUpRkx8ykHPld0YorxDcfrsLRE%2F7eqwH3t6bE%2BgGEjeL5yU1%2BS1gLWpHA6nmuq0pLwTUWuA8eOUnrvcz5B5cV3Bk17xu8Cl1jEuDDZuuPEBjqkAVBjz4UC6X3rEP0Eu5hU4ORkigS5wC%2BlNMjKLmIdIsha4cy6dJ0%2BbBYPy7BsfQ50K9y2M7whcyuHflOr9MwMOee%2FHft4QwYPcNYBVoNL3hWvUlY71Mw4g922z7psIJoQg5t9TALLD%2FTdSt3ZJldTFvhPQzyy%2BdPt%2FPoXb23v0Vsq7v%2FxvWPWDHWxn75lGWrFQvqOKnVOjeawLRNlFqdEAfFJyVed&X-Amz-Signature=fe4371276da23edaca6ed7f3872205fe433a7e4d18e63af6c0786fac8f445948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTGG3AJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLc7Yqs3l%2Ft4HaKZDVvNTfwPVRenuMTL3A1M%2Bvn9P0%2FQIhAJEXTc4aZuynYvQZPkiPl8HhY55VZe7Rm6kB4fKPCDweKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt6GFq%2FgRWE%2BN8p%2Fsq3ANfOF%2FJluhjqgYdccWMOwMrnyxjmabD8uwyRKJvUl93I3Talr6xnpu3%2Bp91JTuVGxxmKb%2Bk88qjki3hI9cvG0Gcj6EyfMddJdYkulR5tZB8CSC6EctHE3qybdUjE%2BdSRTUXkloI1dQxESDa4vj6HJ1HAauHFIv4MN3nUQjNP9STQoWd1jC7e%2B5ojPPcGCrAmO8Ep76tULRoLeP2y5iiL4KY6o8VHOuqZOZxTnHKQR6SZ6apE3v8WbYvmS10W%2B9wB3mcYk8VClHgkGmlxX3nLL9v9q%2BUdaWn4I0QdZ4qZcXWN2Xf3cwAodgCYXLJVaX1Q5hWc9KACEiugVpyyqsokD5EKQuJBxOpwJbagBsoW63U6pR3V2gRgv8GUfEPIpcyRORTwPC9AXaf4MqUb4cww1btKcGkMBuOXKm3GwrMczETv1aZOOAEb4uYew3RNW62tyQ%2Fgpqzrx9cJmC9GfGK22LmDT35EnspUXfnbZulaSj0OrNCV85Fj%2B9hluRhxVP3fuJwEuiuAV0QbDZgt5j4LSp2vyfUpRkx8ykHPld0YorxDcfrsLRE%2F7eqwH3t6bE%2BgGEjeL5yU1%2BS1gLWpHA6nmuq0pLwTUWuA8eOUnrvcz5B5cV3Bk17xu8Cl1jEuDDZuuPEBjqkAVBjz4UC6X3rEP0Eu5hU4ORkigS5wC%2BlNMjKLmIdIsha4cy6dJ0%2BbBYPy7BsfQ50K9y2M7whcyuHflOr9MwMOee%2FHft4QwYPcNYBVoNL3hWvUlY71Mw4g922z7psIJoQg5t9TALLD%2FTdSt3ZJldTFvhPQzyy%2BdPt%2FPoXb23v0Vsq7v%2FxvWPWDHWxn75lGWrFQvqOKnVOjeawLRNlFqdEAfFJyVed&X-Amz-Signature=b0abb2267f7163fc73a236d33e7d0bbe43a67e9eea6a82ee620939375759a073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTGG3AJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLc7Yqs3l%2Ft4HaKZDVvNTfwPVRenuMTL3A1M%2Bvn9P0%2FQIhAJEXTc4aZuynYvQZPkiPl8HhY55VZe7Rm6kB4fKPCDweKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt6GFq%2FgRWE%2BN8p%2Fsq3ANfOF%2FJluhjqgYdccWMOwMrnyxjmabD8uwyRKJvUl93I3Talr6xnpu3%2Bp91JTuVGxxmKb%2Bk88qjki3hI9cvG0Gcj6EyfMddJdYkulR5tZB8CSC6EctHE3qybdUjE%2BdSRTUXkloI1dQxESDa4vj6HJ1HAauHFIv4MN3nUQjNP9STQoWd1jC7e%2B5ojPPcGCrAmO8Ep76tULRoLeP2y5iiL4KY6o8VHOuqZOZxTnHKQR6SZ6apE3v8WbYvmS10W%2B9wB3mcYk8VClHgkGmlxX3nLL9v9q%2BUdaWn4I0QdZ4qZcXWN2Xf3cwAodgCYXLJVaX1Q5hWc9KACEiugVpyyqsokD5EKQuJBxOpwJbagBsoW63U6pR3V2gRgv8GUfEPIpcyRORTwPC9AXaf4MqUb4cww1btKcGkMBuOXKm3GwrMczETv1aZOOAEb4uYew3RNW62tyQ%2Fgpqzrx9cJmC9GfGK22LmDT35EnspUXfnbZulaSj0OrNCV85Fj%2B9hluRhxVP3fuJwEuiuAV0QbDZgt5j4LSp2vyfUpRkx8ykHPld0YorxDcfrsLRE%2F7eqwH3t6bE%2BgGEjeL5yU1%2BS1gLWpHA6nmuq0pLwTUWuA8eOUnrvcz5B5cV3Bk17xu8Cl1jEuDDZuuPEBjqkAVBjz4UC6X3rEP0Eu5hU4ORkigS5wC%2BlNMjKLmIdIsha4cy6dJ0%2BbBYPy7BsfQ50K9y2M7whcyuHflOr9MwMOee%2FHft4QwYPcNYBVoNL3hWvUlY71Mw4g922z7psIJoQg5t9TALLD%2FTdSt3ZJldTFvhPQzyy%2BdPt%2FPoXb23v0Vsq7v%2FxvWPWDHWxn75lGWrFQvqOKnVOjeawLRNlFqdEAfFJyVed&X-Amz-Signature=c57996e09b0dd78222245020d2e598f0b4df16e5cea857722dc0b3066fca03d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
