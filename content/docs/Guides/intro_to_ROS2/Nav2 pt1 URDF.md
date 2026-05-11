---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-19T09:18:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-19T09:18:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=0810dfbbbbad40a57dfd068765056e3b2626cc933b50c442929e9313cbf904dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=3218077b66453a92d7acf13ce2b4eb248de40952aac6b5190f3d38515ae19534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=a30147f0e54cc2b002895352ca8a1a54c3082ce4ddebe210f2c9bc817971e8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=7929af355953ea54e53cd4daedc189c2222a1a8e8eae9cc786543a772ab00867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=2ce4780cbeb4cc96af636b4ec2bf2dc3fbed63f9982e7943fadb0ab1372b8c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=beb4a3064597a9fc99f8ee1802f0138b1430c1c80374ef2945eb5afbda70b38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=57bcf3f34022366c83596eb0aa5163429dbb251c0550c4583e91d2190f01ed7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=faa13bc20835e9271bf05036a25148dd3d65db1e7de03908b8e57b36b66d556f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=4b1fdad068c7afbbd8921931ec0032c7c104843725cbc83dfb25b34293673865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=7429d5de0682495264943028f310796740fd2c06f231f2c3007ab858346b3cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZOXOEGT%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIG1nBMcuo4VjflcLbFWbHJTJYPxqNDwoCho03a2%2FknZiAiEA1t92uNulAi3fzhtL3bgPE9EXK0bT%2Fgf4V7T%2Bbb4bVCAq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDDhmPljAkyY38uvSpCrcA6Rnyn0M0Mzip0JAAqD7OIgXB47r4YbcGOPWVYgWn4YzlYHLHtVIhTHAQc6xnWFBQaxTjZ6D56oGANEdeShLpHJSn83tnsQ92eN7WTET%2Fg8wPMYRzCVc5d9q%2BgVCK1Z5QEBoYum7xriUAFnUk%2Bg4%2FZmSx876fACocz7XsCaGFcJmhfIWW%2Fw0oXBXFkS%2FyVt5EtXeS6FRqjD6DFfnIBI1tyJR%2ByJqisbBQvz4%2FY32gMs%2BaMxYbjpnvqj1hdmInNhW3mpiADi9DXr1G15nfKudPX7tJQUnvR4ZIhJrOT5iIfXi7v1qu%2BW8j4K%2FajuNP84o0V0yeAga8if%2BRlT%2FYvw6hhX9UBt5KBCQ%2FhJ129LxSGDyIQHlxUtTWmo3%2BY4SDRrLkRYdM4wSd6DFgMN3U64%2BJLE25dIgqmB0gsbqo0LnkeQNXDsVTlP%2BZHlvpQv5qu6i9qMZ7pUE%2FxRcKnxgqz79oDCej%2FUrjI6XAzjEP6RohyjJ9Lu9kTxE%2B%2FXqWm8hNLisot1%2BwyovXmufjdviG%2BHcp9%2B4DvGTI%2FtNDlaqFiQc2RCUp0py0Fe4ZINbuS%2BqKuFycRueHR%2Bl05BMnA0hcy7vUD6KGCWmV%2F5%2BdWceuMJRyucxQiQGVsRHg2U%2BNZmMMLGDhdAGOqUB7CdsmtL4CE7%2FC%2Fvv0r2YBNCy9CK2RTcOD5i9PRFls4lV1ereQoOzNuirtGko6C%2FJIpCH%2BoqL34qU5N0AEPnmnA67mWauwu3ELCKwKzrHmoopYcLN52R8shc9q02eJnAdYLS1o2aPlLzj8SUzM3Zpm45is9zVecD3Z6OdjPI%2BhiCJ20UmlbzTjlTb0RGmuiLKnaI9taGFIaTXOe4E3Bk644Pf2q2D&X-Amz-Signature=4af350dc805f4248f4e08b6e52db3d0e99cf15acb27f337d2c42e65d1d0b3fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGN2P5MB%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC%2FX7cQUSdAqZDr3A5ylctcakjY90XbJ05NrjoE1CduVgIhAJkDVKQ7o343quF8Y2K1CRApBMsXG2H9JSIBsGuDmFtYKv8DCAwQABoMNjM3NDIzMTgzODA1IgyRNfFDc70gv0c13hIq3ANyGaL3jdpZ2rnJMDOcPjSxBogOxR0c%2BnueLaCQ9flW1nv6XBbXS0sIAaLB2FPcHq65p5eg5I0Erk7%2FMYQHmG4qesh4PIKk5QsFNUcCNK8f76uatYAps%2BMKgWtET4dT3HlBrS3Ze1Gu4NzvRl9W2HHKqlHG5Tp4yv0O089tSiw8KCctaIQCgH4zRWUC7%2B77OuXWQlUtlRMf5GOeDQYyrFHhIobjq3OKSMZYS3lIb45La8agrBMzVuUP2xSEE%2BB03mn6K5RyIOgqxX%2BtBrpT3vHF231mouDTNcXHnie0yOsgcHMBn%2FRNt10tfSvfWpOYk6wM4uRWqIufnJ21u6XSlZmQJwWKBVu%2FbQkqTS5lQRYaXD4F4NkqhR6wOmy80M2GJxfhISu5Kbeauu7QzaMYOA4oZIYZGUyawnVEVMr6Rgw5yAivZzjfS1OGo3JtoRq1rrfc28hNk8p0zV2k9%2BGoFNU4ux7rhvnnuVOEvq5Bn0BIsoVZ8qE54fRc5mjZgaQIYOvT%2BecJUJ5AB2nSPfXsh4maAP1BTJeift39FuzIWFAMF1VWVTOdNHzmGYjK0OFjl4EsnhmY64dPv0EoOQZWRi1jW8RD00w4vWkD%2B7SnYv%2FdoFdVcnP1YYDNCnjt3zDFhYXQBjqkAWQU1eBXWJTtJ3fgLDJQAGRcpMLx3EJuV55zaCX%2BuWU%2BOLQfbcokqBmrFVuHv8Skw8S3KCgSaAXDxnDy6LgKPxWatpHfTb%2FYNHHsP6zD4%2BXxJ39%2FwKmi6PvtVZUrGvTcHAb36Z2%2FLOhvqJmsSCE1z5xVQvk5sQVZousyNSh1A2YkNwfT0pwFo82n63avoxvdkQl6TMTsw%2B%2B%2Fhem0PhilXzwVx6fh&X-Amz-Signature=b0dd9b0cc35a9dc3dec39ae667deab3cc1d2691ac580d970a05c6a71042d58a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
  <summary>{{< markdownify >}}What do the variables represent?{{< /markdownify >}}</summary>
  
`base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.

`wheel_radius` and `wheel_width` are the dimensions of the 2 back wheels.

`wheel_ygap` is the gap between the chassis and wheel.

`wheel_zoff` and `wheel_xoff` is the offset between the z-axis and x-axis.

`caster_xoff` is the offset of the caster wheel (the little ball) along the x-axis.

</details>



Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYUWLNVD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIFH%2FhWF7rTDekXjMztJvHeOF8QOPH9N2pDZgTVoOgB9bAiEAuGftIK6h9xOzR%2BUDGdtSb0gGxBambiB3qS76Ia%2FyK4Mq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDH%2FtYm7b0mHSI7caYyrcAyJGn88UzKT3Cuo7zp8BeJixkHvs%2FFU8L75G8xcN4goV8OHAZ%2Fq7YO%2BwA6yaadc%2BZMGTUUXNQU5L5wxzD14jRxtvPjRC5i9gVy%2FXqmBcTIJTQtpSpuDrP4GzsunL0b9TRnbC9W5ytdDUcKqf86sUl3txxzTAFPo4QZ4tQIpQviAozNhTPId0ulYC5X4ru2tCbcdiVcFXpbpM%2BhEN%2BEXZTUz5XV4z8DWodCsWB%2F3Wn1pXkCLGbnzTJZLlrapeb4mnaCET%2BpfHyG4L7CWj6BVDZfI%2BfjgQpVOfv5dJRJho5LZMr0u4QgSXTrtlnIW0vOc0SWKa0n6reQq23MTgSwMznZBIkOaV8Y8KLB2pdq1eGa9dQ1vAEo77%2F%2B8QcYSU3V5HtksXYJ3tNf72pg2vWAQO6vDyHJ4%2BOlei0qPAGFAw9RNlIjhNXXNTlPIRcd%2B4AcQA52SeDtAAO0SprQrn6Qtyqm6%2BW%2FGHqfzZKbJ8UpneLXvpGqGDusGUk%2FHN0FxND4BGKp%2F55awZAdFr6HtV2au1HlleyeGT9QbH17HEQRWR2XsI0Y9C3IIaP%2BNCY7DTMbM64qfTEB2XYnFq6ryiAqlCGNaKzf6ADU5fPl2T%2Fd9iFEQLw4k0nyvd5BsxXwW%2BMO2EhdAGOqUBwNMuG3peVW61bCEhI3%2BN4Z2YfuFbtI%2By3H093KboYPZXM4Ucxnzyy9yPFs2MhtzYT7KGHWXfPTDY4u1qPLij37%2FSo66zotw0C7nq3Ngf4%2FMHJ5js96kFHPW6XP56k2dI9g5I2B1UcwYOuru5SWK9jTbbbw7AFvtURSJlUSyuUfX1mb0gA%2BGq%2BmbXgAgJzlGGsxPWJKMD96Dbaw6b1oU8Qf%2FMBhA9&X-Amz-Signature=cb4eb60da8ed575fddf6e223f83def599a1dc2409b77e8a84d87401ae1bae418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=62b8be52317f7ec39dbac04c14b8f95f82bfff4c4939af540430b2b4ffd672a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK62GLGK%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHLd%2BF35kbFgMVXRhlGzwgJKlsV1Nocg0h8Pe852M%2FnAAiAPeorQBJN4tDzlTWGw32c%2FZhVR6Pr5qemV05E2TF5sbCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMt7ttiKZh0NtSsTOEKtwDnRrVnVTjy1LvLtTYMEDd7qA1S5LRhDY6%2BFK7G0ri89JmtOts%2BFCY6uQrVtXZYt%2B37ZsS4p3yYvH98ATj6ImM9uEb2GT0SOi6gGzRgelFknOpvyyEOPeANwX%2Bs0pWxkfB8%2FZnmk%2F2txergM8WTa2ZpR%2FPp2YHmjjSQ1gGgznXhQ5mwTytBNQj4L%2BU%2FPhBQ8W96NhiDumf9QYj1pYNQJ3IP02J6RfMO1ymCHYZaaQ4sasUmX7u%2FPNygH49ng744NOFQ7qOEP8%2BVKSX%2BkK43zXxv2c%2BPm%2FG4F5CHOk83XUnT2CYpagKy3cEl4noTsvV%2FSp%2Fld2CtzLiEzewt%2FaPMZtKaGbdG3WOAH7eyOZ6LIf%2BqJyafrXzSMNNN2RGx80AScz7n21raSXxuJjoM%2F%2BVfNaEEPx%2B%2FAPnmt83sYIkbn8QD8x2XJ9rTEM1qReDg7oB6KK8nDok%2B94Mt5jd%2B7gLm3aU9RCzac6engZyBq5dvdeaB7dgQyJNu6G15zPBdL%2BTA1LwEOrFcc%2FW0gVE6UpobyD%2Bsr00CfESLw%2FnDu5Q4P0QTH%2FM2dklr%2BVngELTKdtY%2B7O5fG1lYIjzCktAgb7N9F5UHNKbD1eQqeDvvHXy6lL7FS4hMxyzrWgmt5%2BpyVQwmIOF0AY6pgEKogBHfBPcBbjX878xZOFEA3AKmJUQMnNwvy%2BZ9Uft7Sz5tvk6OF1PtrP23hIxhAysbpeVlIKo7yGbRw%2Fh4lYUQcdbF60iUlxSmSjq7XeAp11YC8qkJtFk5CYfdBI8W8nJz%2FJve4W8bZI7Ji%2BON4Q0wqgPaRGR%2Fs%2FFMPh26VA1OX6vRVFI1HWqjumb3IJWV7jTvJs1RdXBrS84W%2B4uRFxFdkxCyiu6&X-Amz-Signature=ae23af63f04b147e688117eee80c01c3a663ee6e9d7d5447a840563d6e732a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=c2f86a3ce4db8ae698be7c023af0d578d25fb4310ce1a17be6959d7b5dddf44d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ5EBZCA%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCWEivLinkUXWJ4MTl6nD3uiBSEhcejMoFwMurbAs5smAIgVuxo7BkBuzvGBGu7nvl%2FEgUVMhcBumJc7XF0nYB%2Bq0cq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDDbRMCjPdaAkz9ZTqSrcA2qAA43y6by60%2FO46sKolY%2B%2BXSMw2veydMKJ4Q5zz4lgIBf9wF%2BzrJWAuRAfuxr1kvrFEm3J0VqhYqxMVOkIZoeKslAmeKqRWQMs3IwrypGvXnvCXIMQuanssVBUFNaV6f9NwdUVsBcRqGWrJQl1HmqXM%2BkN1IDLtPiNatrcG7KhPfH3A0Vq6QPdBVm6ePYUu99f46%2BujjFKYboMfWJ971DvdlvUB3a8mxUqdR%2BvwbGYaz%2BKewXeA61ktgJ1heXtBVUtlFOUVMEOa7NZrdkj7hUyFf%2BBeiVqlh2NMJtm%2FrzArojFvFvbLRtBasmNb2puQkDc%2FEHap4thwPu%2FK%2F7EBQtY09QByVSqxXukUeonvoanHYZJ8fNg4%2FGwfdo%2Fk2dALFrxBJcUIk%2BAIRysnCuo3DV2lRJ5bewVjsWixuGX8QA%2BBzjx0k18alXiUQwd86qEI%2Frtw5FdWh7NFZbz7zR8RLsevVSZgoAYJkndi0CPj8WzicwQ5zbkYIV22XRKjFHORjkCFzv%2FlUV0gzjEvhpLzdvham4L4aOgbu7JkEdLooYchqqkRzDdz04Jug3ZFgoDbv%2FDHMiU2nM1WHI%2FOmT8lN7Oqd09bvziTcnJpTSAhLKvYceM2woM1ewACskiMKKEhdAGOqUB145m5SVYUa%2F6kHZFqtETnjCBKmUjO%2BYYm0urvImWO0HCMHPcXJJGJPQkE8do2FOXMrIABokS%2FLQZtEU7Kl2u%2BYlL3kyeFkB8fzejTr8%2FsxfLaxVXUigQ52Z9q2deD2fVwhJimc0C6JyeqAUZVNfwBXpqyu2nRj0GqifY2%2FSpO5iW%2FcKzQ7x32gfjfP0DxNh7mO6qS2IzGZ%2FNwdgk9AVY%2BgaLaAIy&X-Amz-Signature=395f327cf3607dcf0bf448721e1242b7ab18cf045d55f53cb04dc5ce7c3791c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=b689d2bd55b631e2bf3b0be52492f38d5b6b5c1b329af46768d20975ba10774a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V344SJDQ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCLFXMUqsyV0Tzu%2B%2BXioeIYm2%2BFc8E9qvh6j5UEPfkzvgIgE25UKH749AAseX3AL3gQwTuYp%2BVhUx5s890TZLj8E1sq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDEad8v28%2FIMpPTSDRircAzYoE1VVzCIs1QvJ5X%2Bg3nUZ55g814zwuOFN1i8wwNizodg3sBqi%2BNn1IVP%2BnmsymLs76d45fp3nK21BQJfZoa%2Fra4qIsuqNljXmb20sQTSO2eSqzT81LHIAblQHIAyzbLwO7NPPmYS9UK6TEsHa5FeG5rJKOR1slDvmgJL6aaf7y4grcKlse63BJvKT8Gqz7LReJXJCaiS%2BC8d4JXOSyU2ZZOdpZMtYQqGdeOvXeIHmvDJXiPzMjCpfEz3%2BqynsJ2RfUxdRjpM4XYSMvIBPpo4VGMj%2BJ%2Bpx2yVY4DwZ4ofK07pg4Dn1NfgKwb%2Bisu2oXDGiJqi9ZO%2FhUCYyR8Bz0in3cPSI%2B%2FIhNECFg5sCxgMlRVPm7NOsl%2BrDrm%2BN6wKincouyNN4L7yvkHOp84HQTV7IKi5g7uweBL1mKt2Drce0jXEHRpu8Hz0r3P0iSoxgzYyjgCFOQXDsJbBrEy%2B26MVlI7gZ5XB654jVZqq58bbB212sxsqZ87QpT1BvaZz%2FCjS90nCDDYsj8W6IzA8EpLLrUhkVNrE%2BpR5u0LmYFovk6oBGDwbWGtnMtynUkM8MJjQ8LypuJEk249hyBzSJVDzpNjCzmO9W%2FcV%2FZ9SY0pUWIanoadpXgsH6iSNXMMKDhdAGOqUBpyzuOhfWZvb4vtheg9M4HYZ5bFzYhbHbWLi%2FFL35h5QAimQv6ubsIT0%2B%2BxGVBNaL2%2BTWKCjxWUqWp%2Fpa9VYtAmh9IT5QodetDsF9%2BCkOLgf1DnCW7j18k5WBwYumYmgLwirQF0z%2BeUxKNb%2BSrFJ%2FxXKuFHgjYCH6VG%2BPp0vjkWB9G4E7odACoV3%2BzuSRe71spucXTuMJUu3LEq0wt3BmAbTLWPpk&X-Amz-Signature=a194e4f8df27f8d2731f41a4722ec571bc00e49dcef809af6a380d913c44eea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=52c3906623e82ffacd0a04ad666e0ef1eecce18a687766b7e59b10d17f3f9159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}code up until this point{{< /markdownify >}}</summary>
  
<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7K62N3F%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDjy4HVbT69U1CWXTwfE4sHhDYxtucaR76RsGZ3zi29nAIgR41Kus4NzIAl4ai7JURUwV%2B9LSbLZGMTvCjMyPe%2B%2Busq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDBgQN5y04lJocm4GgSrcAxKYnBQJS%2Bc09xCE5s1qJ0Nu45cruA3D0BXdCeeZZy1w8umJMHmEjxDVy0X2bcC%2BmWXvBwsnSC8jJLP%2BoSa%2FdjEFBPmu5hdL5B5JdgjV4Kgp%2B%2BKpjjMUdzQgzDHkGr9Uyufv5s%2Bq8iUyIL8OB93ZeJaPpCPQZ6k%2B9ZRuAyUkMMcYKMauUIN5X0SIAaSgPWcZdRR01TsUtP9N1zYs%2F%2FTKLpbcqygrepgWdnOa0lqpT%2BrPwJJuq4Spfqgn%2BxoDUAPfOWoGsrIrT791ozWTCKIy%2FJZmg%2B2GlJxRbqUM6GQB96fNi5Qzr1J7I4dwA4fACX5EeVrib5vk2bN9drrMMMkzNupKGDSE5PEvFgWbRahVgyooSRkWiWaDhPajOSLPEKfdL3xApZr9KM9%2FV7FzaB%2BFT%2FMhap4deNL1zkhEI7LytDAiB8G5g9l3j3%2F%2BxfSgEpmUXg7xNFuu77H6Wu97%2FDeG8IffpKYiagftdNTeajhOgxAHrxasYU3NjCj0F2RcJS1u2yyue7%2F3xhHLf7WLqgO4XCehiU050vKqG%2FRDpjosXULWoEOx2cIzllNLippmv%2B63tYN72xgB5jJJ4Ej40qlKVSxFi%2BaHw%2FAjoXrxmCZP6Eo7CX9AcLZd8SegDIBDMJ6EhdAGOqUBLQ1IwAP20s7OfrmAtAVRqwyDfi3N%2FisyMnqTMGAhZ8ZJ5R3lJxG9vBagg7ws7odHCAWetij0McaH%2BTQfl8DGkaV0vkzSIyjBELYBKWnlmJUpZXouV9fNAOqAMRZ4mnL%2FsDh4hVs5KSxLPqCgOO5DBdOOhM5s0ff2JGB6C77G6IhpMKvOEpygz%2B5LmIBdJj%2BOpukrNjRNc%2BYobVHU%2FEq6kbt8rE4V&X-Amz-Signature=7ac25a3bfced4f36b907407d7bc8b74b598f0dbdbd630e74d309e47866ef6be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

</details>



### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=a4e3720583a5c81573cbdd75e5fd0ccd2858932fb197eeb977d3a8b22c9c558b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Next go into our `base_link` and add the collision and inertia tags.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-16","18-18"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SYL77U%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD0HczXQgYdWDMiBJQRTg5bPvCVmtcJOMhZnuOHjs3uuwIgLMkpX73K%2B%2FHq7L70MxABKW8buFxqL1TtKVH%2FObNX44Qq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDIjbqDaTvLYiHSQfXSrcA5RUfE85sGpyTiEaFD7P3%2FrTpLVRjIfkYS3U5IWDc%2F0dtRoF%2F%2FxxG9joCn0k6EY7B65BeL2BZx40PGjxrHmYgW5RF2H4SlvoFhUXUti9WIZy08dueMAdw%2FTSuzPoUdocgq0f4TYmKjbnvGeqwKV7%2BJJkauqf3JLhnw0KvcPGQxUsFRfDMEqgHhLFLfgAP2hEG6z9tns1jlK39BvWRrQxmw5b6CmF52sWjhiBjrVte5PYcoMvEbGmzbedyZNfY5MpHv3vIwMSyKR8ktQyGDgqcNYDxhHkgVPvHBGKC7yfq54Vmmp3QpnVRqeKjaCuTFq%2FYSnOMmPwCzJQS1tJzEG3pPl0AH8vu%2FgtNlGgfEafqvxJKr%2FPuA50O3M2xcOQbVadAMqoqPXQn10q8Hsk4pOJ1kathmBVWUeLu05pSLl3HemwaJMPHMF%2BZiPbzb%2BYzDwo%2FK4t2K%2FqawvgCE4b02A5DaVYApc%2FUsdDJG0kfocaub%2BINg89kU0ji3nFRo27mNlBkeni1jbjnbKxO6geWAg171Yaa7%2FuPWUwerU3%2FhlIh9ucPhlQg0PKfzi%2FdMjgOOskl9b4oIVD0NOHx9Hb0xzxm%2FAldQ2lfj0YtX%2BXiQCwyQ3A4KauzmDTwOPeEIByMNuFhdAGOqUBAlxezssm6r6oe%2BwiFsBe1Qp53ZOyZv0qtfzctzFI3PWMRDblW2g9%2BZgcmpA6HSXBIu4UcK2oGl%2FKVvb07MTnXin5Uzw0qfufCcg1ekphcGue2LeWLUkaLtFzzgbahNF6wAhfVEysUiT2VZbhYJ6gHeLwOV6%2BOgj9FHD8tFMHnJaFbaXbcMr4ipEUFJZfQFTVdM9t2vo8nSzO%2FNzIpbQY7tK%2F%2Bvqz&X-Amz-Signature=72bb71de8b853670fb7cc4591159b66a4a7ec03f62abed950984cdf22d65c0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4ABWFEJ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD%2FbLYRGxAkftbZDAiHPclxaX0ieOzrNglGZQ0YfAlbMAIgBz%2BYzAQdBQ%2BxRNETjXm%2F4oh7FQ10F8X5eSMhYzan8TMq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDGIPVgUihsQ8y%2FzqCyrcA47JjcUCFPf0XVXEhbG0Et9Z0tvXgflxzz9tQMeK95FlPcSVRJ2mh232k4%2BkL7tG6hbP3Vs7ZzDbd60b8EL7qgYXBdWiB0lu%2BLsLnLO63INp6pwPssNSj9aRDenlEjCULQLhtFFl5tWtDoWF6bfpRNqFajlY9f70xf1B2lDy6Aj1%2Fd0kUZqIsdvA9B56iVZS8iIcrFtBWm12GrqEmC15hwfyo6gQ7Ddnau3sGfr9LLPWFWANkPxgm0OLkHoe1KzoIUzCZ1HCpW%2BQ12JPl5OKb7O%2FyK69SZmV6WntZ25w96LWHyW63yFdMe58XzRoDou6A0bMv57wIboFBEvwq1JsBk3yV5AdMH1LWhVXez5t16nt0alR%2FYHEdzze7VK%2BZjw2K0vWSeYvZy16kabxJerckj29L3dnZbLRKmUv6WzrPyZ%2FVAGdItYFxTORL8CdLmbMKJQrQzGa67UgwgVLk5%2FUcB08hx1qWu7vEjADTt1WIjQJbe9P6K%2BKveSyFhFWxW20mQXiy0vDTXsOAwl0MJvBkmfO%2FxHS%2BrcnGyNz2mh2M7LPgbcE9wEx57Y8ERaejaGuh8A8U5PHyEv3pVga5XgXgLFW3AANaRIC7xdaGtMTnRWtuLikTAaYFuwMhzZPMJ%2BThdAGOqUBmd%2BzIU6%2BjK48RKkvQ9Vj6HFhi73%2B2MNZeO2kmyYMq7m8Ox2rLsET5GvkVEKN5KENG7xSyswYeCBmHo6mgsdIdgVSVzjaxPQcJOAqyazHz01H7i4E4Yzfspq%2BHuEw8cjmBTgJBgotTgUzevjOmhbw9X%2F9nE%2FYIoizcY2lkBf2V%2BBIj1zmYFz64KxDBB%2FkDgVR14r6ypt1j3hu0AS0k0OMpDoIbcof&X-Amz-Signature=b4d1d48a3ef0fe5e6131e8ef0dc1869c29e60a57b570a79476e333729d3ad270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BYVZF52%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIA30s97RQ0ipwduc2bS%2FedLu%2F5gAHHoIM3Yw8UxKPjCeAiAILvWCkvXC9KNUeMLoIlN2weq6mwqHx6Aqdqiy801eqir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIM5wjOhBbLAIZos9SXKtwDBeJUvMjF4XSR2O7L0M9ECyhSqlrXwUiSrE9i9Anv5OjB36ygi8YkCAkq4Z84k0jEq6yozPZBYdeWozmAUfGqcPuHNySgjLnCsxqNVdgIYz711Jv69%2Fj28l795vXMuMX8Z2KWBUJXjPjGzOO9GvZdqCyWigGaaYnY7Ny7R9T1BPPz9GgFnTPNjBcnCs4Sn%2B4FrfwltCGQdznSgEb5c0x%2FV1wvFnjCWHWBQqDsAcp9tzyS9NVR8m6YHI1gjrFPP1JdIGWa1Ac1rYkpH2M2Xrl2MRElnZOTRbolnX6qQA0KJRNV5Xa7wNTIO06Y5lAC479Go3URNwX7MBQ5qAKt3uFMxiAHxnmwJV5ROgpVvS5ZmNhysz4Mq73tlaTlnZw0pJOGiu08rtOavRF9hZAobc9P%2F1SKt3JKGl%2BzwhizPisl1GgDSsMMZp%2FTVvBuh1rCRhLuE%2FewYtBSmyZ%2BdWMd4JoobgzdLiqmSHVVH2AQnl2r3unNXfXN4ruzrhEXmXBooWz1gQjDmVpOCLEXsdFQI5R1fle1SX9dDUrYndrAbN385uTqj%2FouAT1L00N5O3dQ2eV%2BcplTd3Ys3NN2XiotWLheE9M5tQmOzzA1h64RApWw3q3Unw0HXFC2G522BpUwnoSF0AY6pgEDmiZl8DxIFpccltLlbJ3td6HuDnYoSojc7B7IrdHDSf%2Fw9377XO1ui%2BH4GkwJx9m%2BHXI8sHTW7%2FrOXnLmgxrIoicb5rAUJFHuarZfgBnp38WZNYEtgPtM%2B2kCiuBoNEnYFniBs8PvFI%2FL5tD7wRSjQlTU4g5DUX%2BOxKhFpgkL40OM4taqyQtRXszsTd3StmDPJUXrCFuK0jzSWUJSkhW6zxmwJnfN&X-Amz-Signature=8723b05495c45efd87d9ec2317509d97fb58b98c79b3b9374928be2aa8e8f536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=56fd5827fd49d7d2df065e133ee1ae05cab947786843774b9b817cede49815aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**final code:**{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNT6VR4Y%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE%2BaAoT1GOd%2BhWyjHM00cbVTKYGvCRy84%2FrfJ9mvJR5CAiAY19nfWGshBOAmWkd6zjVlJ7KNg7bSPt4hmvYjfXSoOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvKLY5pF8tSGliWXoKtwDZsjUWC7u8nv4ugXoKr7r%2BPhKKwaOgPSSrWhVxNjym%2F5y2CA063xQR1v08I437zpH4AfiBwkqeANobYqVCbz6hoZb2SGR6jXOq%2BsHe9SzM0DEk0hDoNZp%2BH4lEzDv8YpLSrwV%2FBW12Ay1MQ3ItE%2FFlTzKMhEI89HcgzDzZqYbBSdzr6LzgBGWnf%2FJv%2Bgv08Vv42b0p9%2BfLMFKxvTiGm2Jaqsj0ZbouiCWw2%2FcyrIf7dZWmZFcAK%2BRLnMcX8eMOHglLNOBhZnfPAsWXYUVdhd3vT2iyQ5BW39QxFPBqzVtsC19Q2T06h%2BvXoaTrShG%2Fa4CCR5pMJ%2Ffnh%2BxoN6oV%2FKluz4c%2FzRvQwu8twKyHUHf5hDtkJ%2FGUfekfxN6Auvr4ymSg6vzUXq8pryuUIXEEGhueJTgL3mcvPdMw48VT7oWpmf2pFcW2Ac7KoPFL%2BqIkicD4eyDOMfDSB2g3rhBwis9USorJ%2BAY42dR%2FbMf6ANnrFcPCuN6IhcUeV8SGp1IfeaawB24a4xtkqwtEOSwJl7q%2BKHg6CtuafOdfc%2B6buT26CYObSrSFgmuFOpqJ3gheaOjHIkSAm7ogiRhNJtG9PzQ23zpoERwR0XIBXB7amt9elOvllUqFmXw%2FFkuZB8wl4OF0AY6pgGovxa2d7zTo4pkII8sf0ZaCQJwHE6KsruIFv56KKflfHFbrQh%2BR2UamyIpjCtlysVCQUrhWRCfH5hT9inKAFsLIdOwO3ztcfwqnZAgKUgjyW5Og71lYD50y%2F%2B%2FzpqSPId%2BWTQ2dNztwykglUv2J1V5QKpjSQQGBagcQhswgQnW1WP1D8hgKnfWbp%2F1RiefRpCi6CZrk9m%2F1AiKFrdA1yRkOu9ftPPx&X-Amz-Signature=7e6372896174522a6f1b50153d1a0c00ec6c05adc0ec8052a39ab5e6c7a90c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}


#### Outputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/tf`                |          |
| `/robot_description` |          |

#### Params:

| **Name**            | **Type** |
| ------------------- | -------- |
| `robot_description` | file     |
| `use_sim_time`      | bool     |

#### description:

Node that takes in the `urdf` and puts it into ROS

Takes 2 major inputs:

- `urdf` file and publishes all transforms in the `/tf` topic
- `/joint_states` topic that takes in all the states of joints in the `urdf`

{{% /alert %}}

{{% alert icon=”👾” context="success" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXVYVIHN%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDzuTp76uc4xI2hjtMdbS34ukteE%2BohKZkebqVTdwZF%2FwIgAXJoMr2x6Vc3UGxjy8GPv3h1J6rKHiSUB9VhjZIe25oq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDHGeeEcICGdF1L1enSrcA2MusyQkD3U0oFGNn9K%2FtTCWl6AsdCPms00sYhc54tY%2BxwmeA8oPF60cEvBDHmwVNHVBi%2FBojDALU0qQjue3WUAs70kZIGzwq1cxPfaLSaDmGKV%2BCjidO1nVmJNFlpm1uCrLJsYJwRTtxeYXD7OTFihqy7bwLtnqZX6bbyUxUTPsUlXOB%2FOBEjj2qT5dXU3lPyn0NPS5FG%2BG8D%2FVucr6i0JIbwXK5XSUCbWhUnACfkEgr8KwmierrsBhkenEo5yQQcJ3%2BmEbEv%2BD2f%2FiQyno2GqJqYk3sG%2FpP2FqCAkwAIzOYu6o8w1GRIHzaea4XBy0LDJ7fTCx3tfRVfKhtTX453my4FXcJVdxcYslTigwA9MmJO8Zpv3JeQjye%2FxmUqqK2FQfRqKRk4MTWMd5EnF%2BwxztSfzBB%2BRfjFXidIRxupgCpJmAwHg4ElEDNtgjAE%2FTbNIKmY81IQUo1tmGoe%2FM7VJ2jjNF9qFf5F%2BF1XNG2rWBaQrILNIvzFGq4MaCq9c79BXw7uUY4Fk5mrgS6Jx%2BJoYE4DM264kivvJPqJ%2FmpuNtB9J19Q4oZyARmKS2mmoGYiC4V1sOwW%2BC%2FulZDMsPWWxZ95cDT9YdCtg9EGou5Cym9XL6G61WP0sQ8TseMLCEhdAGOqUBlODHFbFN1ZCX7t5a%2F%2BG%2FuXqjfQnDL9csHMi20n3fxXa2NpNfPBGh6sg031d2ymG9nI%2BNu26uHGmsnj5wqkaK89CeouyOQpCve5T5AG06C2hnmLYdspe1rpRb3xxzCkGTQKpwPXC%2FW8WjtbRw3hFoUlJtTW%2BWm0J5a%2FMQQCtIVZc%2BnlTfSioFrFBsLn1MkLY2qJl%2BbzJ909eAKr7ePhTu6kYI0vBA&X-Amz-Signature=782eb281d8f784ff1a576fbe3882561c5311e9ebda409e904b0266860e3a5d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/robot_description` |          |

#### Outputs:

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

#### description:

lets you debug your `urdf` to see if all your joints work correctly.

Takes `/robot_description` from `robot_state_publisher` and outputs `/joint_states` with adjustable sliders

designed to be replaced by a physical robot or a simulated robot node

{{% /alert %}}

## Current Node diagram

With the two nodes we are going to make this diagram:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXVYVIHN%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDzuTp76uc4xI2hjtMdbS34ukteE%2BohKZkebqVTdwZF%2FwIgAXJoMr2x6Vc3UGxjy8GPv3h1J6rKHiSUB9VhjZIe25oq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDHGeeEcICGdF1L1enSrcA2MusyQkD3U0oFGNn9K%2FtTCWl6AsdCPms00sYhc54tY%2BxwmeA8oPF60cEvBDHmwVNHVBi%2FBojDALU0qQjue3WUAs70kZIGzwq1cxPfaLSaDmGKV%2BCjidO1nVmJNFlpm1uCrLJsYJwRTtxeYXD7OTFihqy7bwLtnqZX6bbyUxUTPsUlXOB%2FOBEjj2qT5dXU3lPyn0NPS5FG%2BG8D%2FVucr6i0JIbwXK5XSUCbWhUnACfkEgr8KwmierrsBhkenEo5yQQcJ3%2BmEbEv%2BD2f%2FiQyno2GqJqYk3sG%2FpP2FqCAkwAIzOYu6o8w1GRIHzaea4XBy0LDJ7fTCx3tfRVfKhtTX453my4FXcJVdxcYslTigwA9MmJO8Zpv3JeQjye%2FxmUqqK2FQfRqKRk4MTWMd5EnF%2BwxztSfzBB%2BRfjFXidIRxupgCpJmAwHg4ElEDNtgjAE%2FTbNIKmY81IQUo1tmGoe%2FM7VJ2jjNF9qFf5F%2BF1XNG2rWBaQrILNIvzFGq4MaCq9c79BXw7uUY4Fk5mrgS6Jx%2BJoYE4DM264kivvJPqJ%2FmpuNtB9J19Q4oZyARmKS2mmoGYiC4V1sOwW%2BC%2FulZDMsPWWxZ95cDT9YdCtg9EGou5Cym9XL6G61WP0sQ8TseMLCEhdAGOqUBlODHFbFN1ZCX7t5a%2F%2BG%2FuXqjfQnDL9csHMi20n3fxXa2NpNfPBGh6sg031d2ymG9nI%2BNu26uHGmsnj5wqkaK89CeouyOQpCve5T5AG06C2hnmLYdspe1rpRb3xxzCkGTQKpwPXC%2FW8WjtbRw3hFoUlJtTW%2BWm0J5a%2FMQQCtIVZc%2BnlTfSioFrFBsLn1MkLY2qJl%2BbzJ909eAKr7ePhTu6kYI0vBA&X-Amz-Signature=d52548b4ae0b392921e21c6f918f70ae34194b54b80f470de3def53ccc8d85f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXVYVIHN%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDzuTp76uc4xI2hjtMdbS34ukteE%2BohKZkebqVTdwZF%2FwIgAXJoMr2x6Vc3UGxjy8GPv3h1J6rKHiSUB9VhjZIe25oq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDHGeeEcICGdF1L1enSrcA2MusyQkD3U0oFGNn9K%2FtTCWl6AsdCPms00sYhc54tY%2BxwmeA8oPF60cEvBDHmwVNHVBi%2FBojDALU0qQjue3WUAs70kZIGzwq1cxPfaLSaDmGKV%2BCjidO1nVmJNFlpm1uCrLJsYJwRTtxeYXD7OTFihqy7bwLtnqZX6bbyUxUTPsUlXOB%2FOBEjj2qT5dXU3lPyn0NPS5FG%2BG8D%2FVucr6i0JIbwXK5XSUCbWhUnACfkEgr8KwmierrsBhkenEo5yQQcJ3%2BmEbEv%2BD2f%2FiQyno2GqJqYk3sG%2FpP2FqCAkwAIzOYu6o8w1GRIHzaea4XBy0LDJ7fTCx3tfRVfKhtTX453my4FXcJVdxcYslTigwA9MmJO8Zpv3JeQjye%2FxmUqqK2FQfRqKRk4MTWMd5EnF%2BwxztSfzBB%2BRfjFXidIRxupgCpJmAwHg4ElEDNtgjAE%2FTbNIKmY81IQUo1tmGoe%2FM7VJ2jjNF9qFf5F%2BF1XNG2rWBaQrILNIvzFGq4MaCq9c79BXw7uUY4Fk5mrgS6Jx%2BJoYE4DM264kivvJPqJ%2FmpuNtB9J19Q4oZyARmKS2mmoGYiC4V1sOwW%2BC%2FulZDMsPWWxZ95cDT9YdCtg9EGou5Cym9XL6G61WP0sQ8TseMLCEhdAGOqUBlODHFbFN1ZCX7t5a%2F%2BG%2FuXqjfQnDL9csHMi20n3fxXa2NpNfPBGh6sg031d2ymG9nI%2BNu26uHGmsnj5wqkaK89CeouyOQpCve5T5AG06C2hnmLYdspe1rpRb3xxzCkGTQKpwPXC%2FW8WjtbRw3hFoUlJtTW%2BWm0J5a%2FMQQCtIVZc%2BnlTfSioFrFBsLn1MkLY2qJl%2BbzJ909eAKr7ePhTu6kYI0vBA&X-Amz-Signature=2cfa2065861694974eabe724a5a8641a588a31c3cc54d4ef7712c89eca4d434e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXVYVIHN%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDzuTp76uc4xI2hjtMdbS34ukteE%2BohKZkebqVTdwZF%2FwIgAXJoMr2x6Vc3UGxjy8GPv3h1J6rKHiSUB9VhjZIe25oq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDHGeeEcICGdF1L1enSrcA2MusyQkD3U0oFGNn9K%2FtTCWl6AsdCPms00sYhc54tY%2BxwmeA8oPF60cEvBDHmwVNHVBi%2FBojDALU0qQjue3WUAs70kZIGzwq1cxPfaLSaDmGKV%2BCjidO1nVmJNFlpm1uCrLJsYJwRTtxeYXD7OTFihqy7bwLtnqZX6bbyUxUTPsUlXOB%2FOBEjj2qT5dXU3lPyn0NPS5FG%2BG8D%2FVucr6i0JIbwXK5XSUCbWhUnACfkEgr8KwmierrsBhkenEo5yQQcJ3%2BmEbEv%2BD2f%2FiQyno2GqJqYk3sG%2FpP2FqCAkwAIzOYu6o8w1GRIHzaea4XBy0LDJ7fTCx3tfRVfKhtTX453my4FXcJVdxcYslTigwA9MmJO8Zpv3JeQjye%2FxmUqqK2FQfRqKRk4MTWMd5EnF%2BwxztSfzBB%2BRfjFXidIRxupgCpJmAwHg4ElEDNtgjAE%2FTbNIKmY81IQUo1tmGoe%2FM7VJ2jjNF9qFf5F%2BF1XNG2rWBaQrILNIvzFGq4MaCq9c79BXw7uUY4Fk5mrgS6Jx%2BJoYE4DM264kivvJPqJ%2FmpuNtB9J19Q4oZyARmKS2mmoGYiC4V1sOwW%2BC%2FulZDMsPWWxZ95cDT9YdCtg9EGou5Cym9XL6G61WP0sQ8TseMLCEhdAGOqUBlODHFbFN1ZCX7t5a%2F%2BG%2FuXqjfQnDL9csHMi20n3fxXa2NpNfPBGh6sg031d2ymG9nI%2BNu26uHGmsnj5wqkaK89CeouyOQpCve5T5AG06C2hnmLYdspe1rpRb3xxzCkGTQKpwPXC%2FW8WjtbRw3hFoUlJtTW%2BWm0J5a%2FMQQCtIVZc%2BnlTfSioFrFBsLn1MkLY2qJl%2BbzJ909eAKr7ePhTu6kYI0vBA&X-Amz-Signature=6e29e1ddacf9d3461de975c318509dd4734cd1e269ab405793a03c7304c68b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GPOVSIW%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE7rGA6CMSu5kSpXJSBreTRTMTB5QadROyRyhp9bXIMPAiACD3Lnn9VryOLAQZ1RgK7a%2BTN1OyG%2FX%2F1r5jo2Ed9yTir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMNBbe7Jrfhx8bQqQbKtwD5gcggzXrnv7hvB%2BUiUeR5DCAiy3KhRuM1zs%2BiwAabYrsT%2FDe9sp%2FqQawRadHGvxcSeyT4DT3bULEKeimQ5Vg5mrmDY39KCDZquwIkQy5492bJkx1LtOacEoj1iCiGyFfu7%2FNDgMeI9UJZieYieTLKzkBmYEc9FtV6lmcYYI0tk1ne6NzRgtTgndVt8141Fx8AqETkviL3Xe9zstdAi1sw8H2Ok29lzu%2BjeK2Z63kd%2B%2BTQLjzqsOONdtYYPAZgh2M%2BRdhVB%2Fie%2FrOpCx7RJ2rPJ7u%2Flez23x%2B3IEAzy2NZog9fCtxiajHAti%2F9WHoE2Xe5qLOjYnvUO3S5CP380IyE3jNz26%2BARxpk35nknslEoVKIvdRgSN4gLPX7kGXSIRRXjxDq7Ou%2BLdFJUIK0rTFsd6dzGQTlodvNocx9HTPCZKQgZTWDNUH492XHshHu2QVryLyy1IlOMUD231IRVMZKdULoAiW2QbRt1Z9Hc30BdPVoBwAlXyucGqVQORT68yzLyyeS6yqC3MC39InithUYe5csLytLFr5%2BbptZu0bL6i1gbtDRSOTY4Ay4QsnpmmBIBLNRirwk8j5%2BLRfYgMspTeSnv30SSzfTcEy7heVjXWLxGf8zlwtpNUyCEMw8YKF0AY6pgGb1mq2aK3eqBp0hwQC4aqhzYT8UUm7vKWhK%2Begid0jngngG3%2BXHwV5NjA%2FwJFOnWP0fDUMnkZ1%2FHP5AfUR68SsQkqRSlb4JUZYbvGPzQZKAtxdkidhqX7TiHDaJXSmAjf7t3ZUmXIp%2FWvExa2ffV1ZqDaA%2BIhaMk62cTVVIpP7DchZ5oxHdcjfS8DESyWuDjkGn5TufqI1YSLgejatKtUigh4ZZXul&X-Amz-Signature=de141b9dec25e903d5ec24c4fb3b1533075c2311b91e0750ab3e9ef8976e10ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXVYVIHN%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDzuTp76uc4xI2hjtMdbS34ukteE%2BohKZkebqVTdwZF%2FwIgAXJoMr2x6Vc3UGxjy8GPv3h1J6rKHiSUB9VhjZIe25oq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDHGeeEcICGdF1L1enSrcA2MusyQkD3U0oFGNn9K%2FtTCWl6AsdCPms00sYhc54tY%2BxwmeA8oPF60cEvBDHmwVNHVBi%2FBojDALU0qQjue3WUAs70kZIGzwq1cxPfaLSaDmGKV%2BCjidO1nVmJNFlpm1uCrLJsYJwRTtxeYXD7OTFihqy7bwLtnqZX6bbyUxUTPsUlXOB%2FOBEjj2qT5dXU3lPyn0NPS5FG%2BG8D%2FVucr6i0JIbwXK5XSUCbWhUnACfkEgr8KwmierrsBhkenEo5yQQcJ3%2BmEbEv%2BD2f%2FiQyno2GqJqYk3sG%2FpP2FqCAkwAIzOYu6o8w1GRIHzaea4XBy0LDJ7fTCx3tfRVfKhtTX453my4FXcJVdxcYslTigwA9MmJO8Zpv3JeQjye%2FxmUqqK2FQfRqKRk4MTWMd5EnF%2BwxztSfzBB%2BRfjFXidIRxupgCpJmAwHg4ElEDNtgjAE%2FTbNIKmY81IQUo1tmGoe%2FM7VJ2jjNF9qFf5F%2BF1XNG2rWBaQrILNIvzFGq4MaCq9c79BXw7uUY4Fk5mrgS6Jx%2BJoYE4DM264kivvJPqJ%2FmpuNtB9J19Q4oZyARmKS2mmoGYiC4V1sOwW%2BC%2FulZDMsPWWxZ95cDT9YdCtg9EGou5Cym9XL6G61WP0sQ8TseMLCEhdAGOqUBlODHFbFN1ZCX7t5a%2F%2BG%2FuXqjfQnDL9csHMi20n3fxXa2NpNfPBGh6sg031d2ymG9nI%2BNu26uHGmsnj5wqkaK89CeouyOQpCve5T5AG06C2hnmLYdspe1rpRb3xxzCkGTQKpwPXC%2FW8WjtbRw3hFoUlJtTW%2BWm0J5a%2FMQQCtIVZc%2BnlTfSioFrFBsLn1MkLY2qJl%2BbzJ909eAKr7ePhTu6kYI0vBA&X-Amz-Signature=865869516cc33bb0bbd693cc108b132c3c119365ce835adbf9be8486e4506180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
  <summary>{{< markdownify >}}What is rviz?{{< /markdownify >}}</summary>
  
TODO: explain rviz better (say how it is like ros2 echo but visual)

</details>



create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXVYVIHN%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDzuTp76uc4xI2hjtMdbS34ukteE%2BohKZkebqVTdwZF%2FwIgAXJoMr2x6Vc3UGxjy8GPv3h1J6rKHiSUB9VhjZIe25oq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDHGeeEcICGdF1L1enSrcA2MusyQkD3U0oFGNn9K%2FtTCWl6AsdCPms00sYhc54tY%2BxwmeA8oPF60cEvBDHmwVNHVBi%2FBojDALU0qQjue3WUAs70kZIGzwq1cxPfaLSaDmGKV%2BCjidO1nVmJNFlpm1uCrLJsYJwRTtxeYXD7OTFihqy7bwLtnqZX6bbyUxUTPsUlXOB%2FOBEjj2qT5dXU3lPyn0NPS5FG%2BG8D%2FVucr6i0JIbwXK5XSUCbWhUnACfkEgr8KwmierrsBhkenEo5yQQcJ3%2BmEbEv%2BD2f%2FiQyno2GqJqYk3sG%2FpP2FqCAkwAIzOYu6o8w1GRIHzaea4XBy0LDJ7fTCx3tfRVfKhtTX453my4FXcJVdxcYslTigwA9MmJO8Zpv3JeQjye%2FxmUqqK2FQfRqKRk4MTWMd5EnF%2BwxztSfzBB%2BRfjFXidIRxupgCpJmAwHg4ElEDNtgjAE%2FTbNIKmY81IQUo1tmGoe%2FM7VJ2jjNF9qFf5F%2BF1XNG2rWBaQrILNIvzFGq4MaCq9c79BXw7uUY4Fk5mrgS6Jx%2BJoYE4DM264kivvJPqJ%2FmpuNtB9J19Q4oZyARmKS2mmoGYiC4V1sOwW%2BC%2FulZDMsPWWxZ95cDT9YdCtg9EGou5Cym9XL6G61WP0sQ8TseMLCEhdAGOqUBlODHFbFN1ZCX7t5a%2F%2BG%2FuXqjfQnDL9csHMi20n3fxXa2NpNfPBGh6sg031d2ymG9nI%2BNu26uHGmsnj5wqkaK89CeouyOQpCve5T5AG06C2hnmLYdspe1rpRb3xxzCkGTQKpwPXC%2FW8WjtbRw3hFoUlJtTW%2BWm0J5a%2FMQQCtIVZc%2BnlTfSioFrFBsLn1MkLY2qJl%2BbzJ909eAKr7ePhTu6kYI0vBA&X-Amz-Signature=d3a0479daec29a7dadcbc65e20e8b8f839a8afc6895a68766f38bfd6e68264d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXVYVIHN%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDzuTp76uc4xI2hjtMdbS34ukteE%2BohKZkebqVTdwZF%2FwIgAXJoMr2x6Vc3UGxjy8GPv3h1J6rKHiSUB9VhjZIe25oq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDHGeeEcICGdF1L1enSrcA2MusyQkD3U0oFGNn9K%2FtTCWl6AsdCPms00sYhc54tY%2BxwmeA8oPF60cEvBDHmwVNHVBi%2FBojDALU0qQjue3WUAs70kZIGzwq1cxPfaLSaDmGKV%2BCjidO1nVmJNFlpm1uCrLJsYJwRTtxeYXD7OTFihqy7bwLtnqZX6bbyUxUTPsUlXOB%2FOBEjj2qT5dXU3lPyn0NPS5FG%2BG8D%2FVucr6i0JIbwXK5XSUCbWhUnACfkEgr8KwmierrsBhkenEo5yQQcJ3%2BmEbEv%2BD2f%2FiQyno2GqJqYk3sG%2FpP2FqCAkwAIzOYu6o8w1GRIHzaea4XBy0LDJ7fTCx3tfRVfKhtTX453my4FXcJVdxcYslTigwA9MmJO8Zpv3JeQjye%2FxmUqqK2FQfRqKRk4MTWMd5EnF%2BwxztSfzBB%2BRfjFXidIRxupgCpJmAwHg4ElEDNtgjAE%2FTbNIKmY81IQUo1tmGoe%2FM7VJ2jjNF9qFf5F%2BF1XNG2rWBaQrILNIvzFGq4MaCq9c79BXw7uUY4Fk5mrgS6Jx%2BJoYE4DM264kivvJPqJ%2FmpuNtB9J19Q4oZyARmKS2mmoGYiC4V1sOwW%2BC%2FulZDMsPWWxZ95cDT9YdCtg9EGou5Cym9XL6G61WP0sQ8TseMLCEhdAGOqUBlODHFbFN1ZCX7t5a%2F%2BG%2FuXqjfQnDL9csHMi20n3fxXa2NpNfPBGh6sg031d2ymG9nI%2BNu26uHGmsnj5wqkaK89CeouyOQpCve5T5AG06C2hnmLYdspe1rpRb3xxzCkGTQKpwPXC%2FW8WjtbRw3hFoUlJtTW%2BWm0J5a%2FMQQCtIVZc%2BnlTfSioFrFBsLn1MkLY2qJl%2BbzJ909eAKr7ePhTu6kYI0vBA&X-Amz-Signature=2cfa2065861694974eabe724a5a8641a588a31c3cc54d4ef7712c89eca4d434e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
  <summary>{{< markdownify >}}What is in this launch file?{{< /markdownify >}}</summary>
  
[launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)

Launch files are just a scripted way of running multiple ROS nodes at the same time instead of opining multiple terminals.

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

```python "3-6","6-6","6-13","24-24"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXVYVIHN%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDzuTp76uc4xI2hjtMdbS34ukteE%2BohKZkebqVTdwZF%2FwIgAXJoMr2x6Vc3UGxjy8GPv3h1J6rKHiSUB9VhjZIe25oq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDHGeeEcICGdF1L1enSrcA2MusyQkD3U0oFGNn9K%2FtTCWl6AsdCPms00sYhc54tY%2BxwmeA8oPF60cEvBDHmwVNHVBi%2FBojDALU0qQjue3WUAs70kZIGzwq1cxPfaLSaDmGKV%2BCjidO1nVmJNFlpm1uCrLJsYJwRTtxeYXD7OTFihqy7bwLtnqZX6bbyUxUTPsUlXOB%2FOBEjj2qT5dXU3lPyn0NPS5FG%2BG8D%2FVucr6i0JIbwXK5XSUCbWhUnACfkEgr8KwmierrsBhkenEo5yQQcJ3%2BmEbEv%2BD2f%2FiQyno2GqJqYk3sG%2FpP2FqCAkwAIzOYu6o8w1GRIHzaea4XBy0LDJ7fTCx3tfRVfKhtTX453my4FXcJVdxcYslTigwA9MmJO8Zpv3JeQjye%2FxmUqqK2FQfRqKRk4MTWMd5EnF%2BwxztSfzBB%2BRfjFXidIRxupgCpJmAwHg4ElEDNtgjAE%2FTbNIKmY81IQUo1tmGoe%2FM7VJ2jjNF9qFf5F%2BF1XNG2rWBaQrILNIvzFGq4MaCq9c79BXw7uUY4Fk5mrgS6Jx%2BJoYE4DM264kivvJPqJ%2FmpuNtB9J19Q4oZyARmKS2mmoGYiC4V1sOwW%2BC%2FulZDMsPWWxZ95cDT9YdCtg9EGou5Cym9XL6G61WP0sQ8TseMLCEhdAGOqUBlODHFbFN1ZCX7t5a%2F%2BG%2FuXqjfQnDL9csHMi20n3fxXa2NpNfPBGh6sg031d2ymG9nI%2BNu26uHGmsnj5wqkaK89CeouyOQpCve5T5AG06C2hnmLYdspe1rpRb3xxzCkGTQKpwPXC%2FW8WjtbRw3hFoUlJtTW%2BWm0J5a%2FMQQCtIVZc%2BnlTfSioFrFBsLn1MkLY2qJl%2BbzJ909eAKr7ePhTu6kYI0vBA&X-Amz-Signature=873e7601847c7c8f05987425842c9eb44fa8bc13631bc393254cfb715b45eb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXVYVIHN%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDzuTp76uc4xI2hjtMdbS34ukteE%2BohKZkebqVTdwZF%2FwIgAXJoMr2x6Vc3UGxjy8GPv3h1J6rKHiSUB9VhjZIe25oq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDHGeeEcICGdF1L1enSrcA2MusyQkD3U0oFGNn9K%2FtTCWl6AsdCPms00sYhc54tY%2BxwmeA8oPF60cEvBDHmwVNHVBi%2FBojDALU0qQjue3WUAs70kZIGzwq1cxPfaLSaDmGKV%2BCjidO1nVmJNFlpm1uCrLJsYJwRTtxeYXD7OTFihqy7bwLtnqZX6bbyUxUTPsUlXOB%2FOBEjj2qT5dXU3lPyn0NPS5FG%2BG8D%2FVucr6i0JIbwXK5XSUCbWhUnACfkEgr8KwmierrsBhkenEo5yQQcJ3%2BmEbEv%2BD2f%2FiQyno2GqJqYk3sG%2FpP2FqCAkwAIzOYu6o8w1GRIHzaea4XBy0LDJ7fTCx3tfRVfKhtTX453my4FXcJVdxcYslTigwA9MmJO8Zpv3JeQjye%2FxmUqqK2FQfRqKRk4MTWMd5EnF%2BwxztSfzBB%2BRfjFXidIRxupgCpJmAwHg4ElEDNtgjAE%2FTbNIKmY81IQUo1tmGoe%2FM7VJ2jjNF9qFf5F%2BF1XNG2rWBaQrILNIvzFGq4MaCq9c79BXw7uUY4Fk5mrgS6Jx%2BJoYE4DM264kivvJPqJ%2FmpuNtB9J19Q4oZyARmKS2mmoGYiC4V1sOwW%2BC%2FulZDMsPWWxZ95cDT9YdCtg9EGou5Cym9XL6G61WP0sQ8TseMLCEhdAGOqUBlODHFbFN1ZCX7t5a%2F%2BG%2FuXqjfQnDL9csHMi20n3fxXa2NpNfPBGh6sg031d2ymG9nI%2BNu26uHGmsnj5wqkaK89CeouyOQpCve5T5AG06C2hnmLYdspe1rpRb3xxzCkGTQKpwPXC%2FW8WjtbRw3hFoUlJtTW%2BWm0J5a%2FMQQCtIVZc%2BnlTfSioFrFBsLn1MkLY2qJl%2BbzJ909eAKr7ePhTu6kYI0vBA&X-Amz-Signature=eaaf30b9f857990d4adfd7130afa929d1026c13dace1b1c4f7006a086c7676b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXVYVIHN%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDzuTp76uc4xI2hjtMdbS34ukteE%2BohKZkebqVTdwZF%2FwIgAXJoMr2x6Vc3UGxjy8GPv3h1J6rKHiSUB9VhjZIe25oq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDHGeeEcICGdF1L1enSrcA2MusyQkD3U0oFGNn9K%2FtTCWl6AsdCPms00sYhc54tY%2BxwmeA8oPF60cEvBDHmwVNHVBi%2FBojDALU0qQjue3WUAs70kZIGzwq1cxPfaLSaDmGKV%2BCjidO1nVmJNFlpm1uCrLJsYJwRTtxeYXD7OTFihqy7bwLtnqZX6bbyUxUTPsUlXOB%2FOBEjj2qT5dXU3lPyn0NPS5FG%2BG8D%2FVucr6i0JIbwXK5XSUCbWhUnACfkEgr8KwmierrsBhkenEo5yQQcJ3%2BmEbEv%2BD2f%2FiQyno2GqJqYk3sG%2FpP2FqCAkwAIzOYu6o8w1GRIHzaea4XBy0LDJ7fTCx3tfRVfKhtTX453my4FXcJVdxcYslTigwA9MmJO8Zpv3JeQjye%2FxmUqqK2FQfRqKRk4MTWMd5EnF%2BwxztSfzBB%2BRfjFXidIRxupgCpJmAwHg4ElEDNtgjAE%2FTbNIKmY81IQUo1tmGoe%2FM7VJ2jjNF9qFf5F%2BF1XNG2rWBaQrILNIvzFGq4MaCq9c79BXw7uUY4Fk5mrgS6Jx%2BJoYE4DM264kivvJPqJ%2FmpuNtB9J19Q4oZyARmKS2mmoGYiC4V1sOwW%2BC%2FulZDMsPWWxZ95cDT9YdCtg9EGou5Cym9XL6G61WP0sQ8TseMLCEhdAGOqUBlODHFbFN1ZCX7t5a%2F%2BG%2FuXqjfQnDL9csHMi20n3fxXa2NpNfPBGh6sg031d2ymG9nI%2BNu26uHGmsnj5wqkaK89CeouyOQpCve5T5AG06C2hnmLYdspe1rpRb3xxzCkGTQKpwPXC%2FW8WjtbRw3hFoUlJtTW%2BWm0J5a%2FMQQCtIVZc%2BnlTfSioFrFBsLn1MkLY2qJl%2BbzJ909eAKr7ePhTu6kYI0vBA&X-Amz-Signature=f8ae3cdb5aa58644a440a2ddabc9e8c073d18dccc4719f0d1cbf0cb0878ab3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


