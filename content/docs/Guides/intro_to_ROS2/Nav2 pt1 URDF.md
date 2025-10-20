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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=a8b96bc1fe132d903782da9cf5d30a1413ed60ead18132130340ba1681e9d88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=c8d88c8a6bd67454df13a62cec63805dd2ca3c8ddbc54e7bf4aa98bc01dcae92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=3dab24a5c465957f4d20f71a26eb9269edc02975532080db72e05e3343332e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=b534404dca5f2bb24c949252ce02011f723c99556b95a9fb828a9925e0d89800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=1de8bf4b3b9afce905da7457599431ff0bac26421328797f01f59b205a501be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=4531206642a3315065f155628612a65d04efdeb4aec9ffaa03f65a3d55d8f3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=a871830aed5fac35cde3ade6cfff3bf31e197dd7be585c86ba2d2908f86ede40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=84a0894beea6f28b9f4ecddfa8858c506406f01b3f3cd86a68f1e0bde845b9aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=feddc5b62ef0fbd9fff3754becf038d47d37030638a0246cc422cb1c6c19f4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=b7a78d8cbb96837be913ae25d82bef515baf909ac1c9ae7ae3321ac3d37140c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMLMAOGY%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDz7pKGhnnYp55wUNKlQholOj8UaRUF6TCEbcdlgXLW3wIhAM7C3Jyp9Itn21d5HkqEyUhDn5L9lZ8fZfbaAHjSgHWNKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVRXvU%2FFVHB53Cu3cq3AOh5Pt9vRH4%2F37Ef5CNrbua%2FhOVDfyV6J%2BH1lxpftHnMlkQRyqEvEd0dSiwALS3lKc32IGuHnhHj%2FabpzZCmjnNPNHKjMXHIh1s7YAlkOYXX%2BtbmZgcVsjuo1H1%2F54fNzJUoSNEPfWSJELCd7r38reYoyJ0Zm5vpRrxAAE6vjgGO845wXwH9DDovrKeDgXulMsDplEpbEQYaaWLknA23EMBEOJjuryn0q2tx1zRJfiFHAK9ACDXTzNfFQur3f84B%2F8594UjjD%2BqA%2B9IV0ER0%2FvZKfHx2tUoJk3JjuryHbMn7YVZrCKs729aP2RC4Z%2Fjh8jOwDKJS%2BPlfisoRSdKsuFykC%2B2zVtTTSChw48EBP8rqsLMTMOoDO42cQytjdXTyeO6IR5qOoKqI6W2ldbQ7LZpvtDWkdYfTW4%2BcpIQh%2BCuKEnWc8AE0vjpw8kuUuGAze91hSRYwbzsBEf%2FmBeUEWMLi1NvyBEepzOy%2Fnq9PajrlFrTYZGDYLKkTHb8ncRXxVkgPCQ64brOuaH%2FuAOID12gKwxzzoXUQB2gbluUYLAJp09OWjAKbn641mqgqLPExeluoEcMLWB%2B2%2FH7bnWTJTG8REN4ZMrP0WphjFN6qvqve7N30UdicPAMyvGejjDrjtbHBjqkAc%2Ba8NbB0PuRR%2F69wu3vpXKZBic1iaZJS8FSRRsxOcVCczGtVI7EC9zTv3sKZhUX7juJGbO2qtkZhmqg%2BqQSzpgYlki5t0sK6zd1svLWisfWWC9qxy6uz55znL95zsobjnpmSYMP3bI%2FogNzYD9F9yXepcUAeI9x7qqZaci68gT6lqfBu3bRjvhS88qrURPfEJ125nolig%2F6%2BSE1AUMxw3128qyB&X-Amz-Signature=40bd047e788ff7aa1519fc9cea1ef0b4c333d597b82de4d7c88b8d19523d07bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFROMR6%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD2MRYEth9d3zexKUyFt8Ety42Ks4iuEN2Qkf7Di2Hd1AIgNH5iOADXvoz5vL1L7GpjD4N%2FBaiDa6jxntyUIz%2BufMEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7UkH7C%2BB0YNXzrayrcA6oHoy6fYkxn1F3VjRNXa8BXmEdADPTwLGRaucLmONz5WCZMiCdyBFfNK%2BTzOk9ESSD1KY1yEzSoSlBdAvnrYw1ea7QqCJ%2BNp0Jw7IAzS%2Bw6f%2BGLiY%2B6wBNBy70vZKJAQn63xj2IcicgtzbN1RFTmfRzyx%2BKTN6qAlSApz%2BJDIqxtlPwRoI74fmt7gvs5C1AWCsnOCgZ1s5hbRJ%2F1HZRO3jfSePtybrNPyWJVYMJQSGQij3BQvbcDXEbCzPWci9lSwmg9O%2B%2BYSUPN9o9ZQsABmCGaouEkJoR8zAhHl%2FCsVbT0KBNCl6thonOfViTk10Y%2FkWjDWqMs86YfQJdFJAubpMzHUyJYa56yQBB70%2F5QB0CbrbF2BtM4Bn8%2FiArCiHiYpVYhSrpMX81cLRCaWujYo8gKVlqUAErUp1kqur3QkFjRFtw1%2FedHXwjT0JPmVgWzrrFTul2mIKGnVUC%2FcxYZQwKrHGPn%2FsK0AXEMw7jduedujSS7vyFVGj8Dk4Zz8K9q%2FQVM86usKF0w%2BupcbGQAei0gKHWuR9OagWDSAV%2BhCrFZQXL1aQEiKSNoxDycOeY%2BikUQyUWZ40HfHvgOWlqCOZKtFMMDmYc5k%2FCBk2r1JZh3jKHCT3LoySXyV8BMIuP1scGOqUBFvCcRgUFPKiscdBXsdVy0y6NrN%2BcXPd2DZ%2BPoADmnvIEpeqN0YxL6KQqCKebYjDkNboD%2BMclK8gA%2FMwNFu6%2FsdBH8HwEMBeKxGgnuoUYjBNkoQCWiz9L%2Bn3czb8HzTTljchxkQuqN5hVUzC2PuuRHVE7C8EN6D26yFgbep8tSriBO5Lfonz1dTEWx%2BLMjay8ngEYdnBw2vReWp%2BZTtsPrR%2Fo5ES6&X-Amz-Signature=80fdb13a5521dace30b70d58aceaa9328423e407b25ea09e70c84d785f0a03bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQMK57BB%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGDB%2Bjd4fYffEy3q4eD9u2UYUvVo8%2B%2FpMIdwWBxjXrzdAiBK%2BAVYuCzSancGpMVwKC0j%2Bh48yeb3SroUcpKlbw3qkSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzezAfbxuzSkRpxfaKtwDkbSOp1oelErBHAO7HvQqvV%2FMYW5vCw90NAycOQfCHbEQJcw4SulRtT%2FFuHWs4iENABIg47fYp84rhaklOZ%2FrNocOJIVEl3LFIIiVI0MrJLCOXttnYnp3NEVCMybaIokCQfyYjoTdRDawleSN2IsmOpp0gHjo04rVs1E6R2bWdriThKcdAWEzUQZjvr1x7TOA6wb5jPRBg%2BjmVox9omd0aWhZ8VUEVrk56s1e6882bYR6t6wnX9R4c4n6I0sSQBNdhJB9y82FYldcAaeOO9CffEtNYIUuOJj0%2BWOLSmAOf%2BKnBUYWJZWI34CaBJlgA6Wb0DEWjt%2FrzdxgVq37uR4gudRD4y0pVcbrExkh9ZtjE646IfpjAXciQvLxogXVHRFAkLYQS28PqXAzzMjG%2F9CFk%2B%2B2qk8eVgdgSjkAhkuPiYwTWXIjYkL1WApNEz7SVtRKdkjUsTp%2BW5KQUPFxvaEov3WT8s5dTBrgQCwxPbjT8tt8tdSFvaZhm1Gv7zMnMKsqyhGGoC8fqcF1eykJ%2BXMq8aPLPVRyrHeCT6yJ6YfiLwXUtz3IDtlJTEa3a78Pdub20Ii56oY7ryrjxBO9PObhADSxsEvS7bE8zrHOzK6yL%2Bi035sJYS%2FzRlnEXAEw3fnVxwY6pgH94lvdRTshuEl9ybBjP0%2BrzK8tMb9%2FRJE5B7NntlZjZxhzOXW1hjd5Uqcg62oFusMt6pQ%2BbP%2BqneR0mZacPu7QXu7SrvxsDXLQaqwzWpehVPi8cEL3H6ILcbelyp08%2BUqpKIEWkeYqW6%2FjzWfISRux%2FVt3wjzDs%2FdeR4b8h3dMXN7LBlYidAwEQu0iHVLtSMMtNv6ChY6pbFJfbYNvTr5C5p%2B8OWqx&X-Amz-Signature=d75ccb143aaf99e8d0cc7292677e0ed6f4aca53b9cf11bf97ed1b5667bcfa679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=fcddd838b35417912c64e0a58443651f25205e08b28533a0da159cea566460e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFSNFDQ%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDlhOAsHjpRq7pBMjsf7SofWZoHc2PO9U3STrdL8o2GSQIhAI%2FxNOBIQzmFoiId4BVeYTskKHcdePJX%2BbHLAxu0lq%2BiKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQleACSFt9agHJB%2BMq3AMBNJL8S6Z4qVm7rYvNrCdDMyJsfVpKSDIGL3Rjth3dIVWLBmNK1Uq4rl3j%2BshJxEWjwZGRgBfOp7F4CyDAmofnX%2FT0DVcKrcmJIf0QToGmnJEc6IxwJSNdM0FiEs947rGNRYgxB9J6oD8pcoyq11G0o30aSkUcYWeRMgMbaHmKBg%2FixJr2f%2BG2bdXPx5OuOwl7qljBldgRqNg4fJjCy1%2BAoJJ%2FQNZikxaUKzu3sN1kgRBpOT7qN7%2BDpdpIF02z1FXhY3TwDWyHc62IlnPbdqUjD%2FM3fOmPb0CRTGKQYSa4TwB7Ipx%2FzW5ScTcCVU2taZIWieHd62aAheZ7nVDgNi00msuzZhHFydLbDxnJ9cB8sjiw4uJp%2BVKKMb7%2FUUFejf%2BuqGtUc%2BkQlHIGvGxo8bdh%2Br5XqcNqdElDKbAkts2dh0shvm%2BdJnAwat7wVcacKLw16AtOuF1Fnsd8Q6IRyIWoM29oPa73xKcgui%2BFUhG4Y7hssxNgW%2BmtllUp9wsIfPQidiFu1s1E8p9N6V0XPhbYUFgSwfYMFlg1OCBGtx549KWOlQL20sWNn%2B%2FP1HFu2OsMtTkrczgKW9LNTUDOWRvzvLGb6IOgKd2KooU8xdOPwTFWT9IsbnPE8bvpDTCrjtbHBjqkAaU4%2BaXVPclLSoaOH%2B8ivUskwmQ9kCShh%2BMUkzWV55VzV214tObs89w9JnyXTEBHzQutrrb2OTNhh0SVvpIiy%2Fpoj7U0BqnEgQO97MHaDBcwiv1m7Fs3LV19jiFpsxPZl2mDQrK8UMqftRlYXa9M08PjhKHc2cOs5W0YlWPfQDOmUAF5PWMkG%2FUK0YLundkDUPJ8NLpN0wy1L9sbHtbRqAQ%2FAycJ&X-Amz-Signature=d7cb85b6d413e3fdf6182ef1ec2da7b0fe398f59ee1c3e79269bca54822a5d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=a10c9327e94984ac0308ade85fcc87a9dc964445f12224050dc8c6643efc9259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566U7ZJB%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD2JaQmd46FoYqUX4ckiBk6mn5B%2Bd6YgW2y0lCpAFeqngIgEjrvTSVTmvzafi5LJ2qlczyzPEXWuuqzKVlIvkjlpXMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhdxIolwpydSlq%2F0CrcA4rwchTtD85UyGJ%2FTAIc41Lg3XqaijUx7dEcuO6eFPkMRt2TRoJzBkpjfXrvfv0HwFA89FBosQclsvvQSG%2FacVVIuuTxYrPZDq6tGJSrvQwlnDhRjEJL7%2BziE9vDGHDggTTk9jgvvCPslMqiaYisar4kcWZrAN3NgQPpqWuTJw36yzRffno84s5Pt2TS7OTR3VOWCYa0MM9TwlA%2Fv0Dk2y3Eah7gTGI7c9Hn6MF7%2FS72I9xaSV7Ez6luYfEftkdavjshE%2Bc8hkveSngBKURA%2BhzPPAsYqMl7YQmsondFkSh9Kg7CE5c6g556kfn2hV%2B%2FwixJz9gjA%2FGh%2B8UsNNCIoEH%2B%2BLwdvv%2BA26K7sDla%2B1lgEEwWTaDbhB3gp6wNBLHMAF%2BW1Jpw8pPaiB%2FbKFK8Tb1zxiqL9ooi0ieVefo%2Bam4QcYVub0rnjFyLbNY8LB6Wd8OC4EMCKGSjvgUbYVSF9Tm9iQn9Hk9883KlL2ftr6wqFaC5mQ%2BdAoT2Exod2zgg02q49ZXTRvgADsyRnIL4mMql70il3xPUOHTva8JpT29DSxAIHDXEmiTXfX%2Bnn9NRhu%2BmKyCatDd0faWJ9enNYnwHJI%2Fn9FU%2Fp4YNhkXVZF%2F6T4S0N4C2XElZFsXnMLyJ1scGOqUBshTfyRtOlqoaDSONSuzYBbYWY0UKsKFLk9%2FrwU47o160fnI6N27uMz12CgeYQONyGRA5e6CcK7EHRM1vx9yhJP%2BMWB3K02s8Zn3ePSY%2BR5NrV%2BpqECpVGWz%2Bp%2B6qKhFd4b8%2BilKKtKbHpcfIpYq8t046PQvFBY%2BXAmSmdh45G5hpdsPpxSPZnZD99NMjN8QSkm6FCbzX784sOF%2FtQEwLXLepH0AG&X-Amz-Signature=bf56e5bd07761673898445b69ca8dd0bbc7dac6fb4351f154d293c4880adf978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=1bfd3465f7fb9baecacb0bf59b6c111e732efc0ac12a8c493ad62526047a13d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2FL7AJX%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDObW46z6wDsyXTUHZ%2FTw8FUeUBM7krvtQz7pNb27JS%2BAiBb7rgTO9eg%2F4Z6OPKim%2F%2B4FkVFdSY%2FOugIVmY%2BJF3YhCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkT1%2BAfr9lnq2deYOKtwDbkk3QstqWMWB4M8r265yfGXgwkuTU2xygdx%2BnFu5BvrMTBc1rzjiqp%2BcGuIwEMnDOETL%2B0K6%2FZ49QBeyLqQ%2B9YaYRTcju5Csbk1t6K5TYmZtpv1rifNHId8yvVXhxm3H7mFZvP8%2B%2FYluKYvBg5UebzTRypZx0X0LIpnKX6%2FMDFifovImUlUkcjrj4TDnFmlRQ%2B9%2BYLjj4dDIaUI49Nk5GFyJH%2Fe2dFvncjkQn85nKOKTcOXg7j54l5xiMcyh1QlyqVd7e%2BAo%2BLqU04z8SreQl2%2Fq6AmUYrRrSg79mzwqwaJoZcJGVMGxLeQ4JPO8xBj8insQv%2FTmXxoLiBvHLUDmFgol40ydGuHbstEmkWgpo0%2Bif7rxxI05tePqCJbE%2FyhRCm%2Foc%2FNI7xWaRjks4jVcrdy%2FbZYOiHAZEunhpmHYUxXYPfe0K1Pj%2FdrV%2FqXSZbjgsTyQepGZly5Nt24jsAfXqrdMa7EzvTOzniwYp3xTfBjNDrmiu%2BmWLnicZ8CWPe59%2F565%2F0WeEHM6kaG54cpAB5Iy%2FDKqrbXj%2BCy0EZvy1c1107Pn7pR6Kr8k5BvIjiY4SYHImfC8%2FNOh2%2BAp8Wwii0aSIJyGJQ%2BDO7i3gIyTZSQGScXjFHVS2UsWZjIw%2BY%2FWxwY6pgEx%2FO5zIb1%2F3o2BzS4seEMrrINh%2Flwv3zD49167WOS%2F%2FzV0snXzGWebr0ujYnYHrvn%2Blx0LaKw4iLKPKEbnF%2BpsKhfISjHv7ndoZFTJvwl89qu5q3%2B6KHc82pxfjH0PrZjWOFKUu4TVtSTpZ%2FsDdEo1cnBLvZHUunsyoN5iDrYHk6cyq4RDOXm6U1Iiz4kMna2Q7CJvxGuJVNqnD36NnMACrt4fNqdV&X-Amz-Signature=aa7f36b5eeb063a70be141b59c3565dce2306f8bdbff7de411577afc592f7296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=e9cb4fa9e31e94aa8edc63ff6a304f20a0368939b1debf755f7cc399446f0ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N7GZZ52%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBSLS%2B2%2FJFvkmpIZQtKBowS1BTpgdyy6nWkTKIjfiwjKAiEAwb%2FUGLNf01f%2FIRnxIF0icBbYj3rdbmOJ5FC7AKGW5FYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxpnl%2BfE8uSgJk%2FfCrcA7%2Bpk6oD%2BorWxE71Xi2%2FcIQfTPaEfMzO8Zglxm5ZH2%2FR6yzNBi2%2Bfg3KP6g6Ke742JLuEabEeIj%2BEX7yVQ5EZFOowOKKmOilzScjwj4S3tr2x3LTRu1R23DB%2BM1wfNmznfy03qGQt10QG7fO7IpuaDszWjepMSSM0WTgyufyGIDRFWmQtA0B5ccGJrmVch9uw8AXLmkgVV8WjijpyPYnCBzf0RGbO9CSH6deW8sAkq79lDtlHoTjvB7D6YwZvL%2BbskpZDrU7yFiheVyJc2mnNQxjGk1n9pXePFF0Rtr4p%2FRXPFgA0HHrT646JkVkGdxIK67ScaVavqioHdu4LkMSkCBmnRSbsSD1Ha%2Bt9mmKxdjNLSM3FufcErqFdJzEvnbhr8nALRrJ%2FO6e6krIzz9zO3G14%2FpJzhcCGo40Ch32MWM8uMoW%2FcXapt8bVSGnZ7coX1wagUQSV%2BoQBzrXvy0fkerMZZ5rXCF4kitIvvd0DWm6Izp%2BID4SkWvasN%2FOEAEy8YfoRP1tS0KytDvWal8p2tqTqwFDgx55QsFENnpgS88sLX43vDMarY7NJRp%2Ba6Ucgp1ge5DeYGaIfPFlmPHEO0ZMrtduECFPB96%2BpHqpVQWOEz4HEG%2BghgebFhomMNWI1scGOqUBj7szaHYQIkHfYcNEN8pjcRpTSMX5j%2BL%2FRFo4KMWOmRplfIQrm%2Bg5BTvM%2F4%2Brr0AHg3EpAZMPeafcDPMnlfGicr6WuwF9VSnHKjOduCLhyKw9sAoSOVXHDA9RuXhVnKjdXsNgT44CETo%2BqngQUfTws8YtSKZW%2FmakyKg%2B7lfH1X9WourCCzGaJ29%2Bq2%2FqWgIFwTcZEj6Zx%2B%2Bl%2FlR%2BgRXAudwTrH6Y&X-Amz-Signature=754f2c429ab22f70db98c81ab650d2b53bc7c9097ad5ed968714a9034e076c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=b42d8697d1bc0c71b54616e6a94e590053a4ca39b7adba8b8bb2659064d06d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMIB632E%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQChrXcSOl0uIOBnrDhJD8yIe97sef46pFuJsntKmpgBmwIhAIHLQLzYoyaeY%2B6fpcc9UTO%2B7xsWNT3PscqDZOKCN%2FUZKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNeLkBSBEdHW%2FkIZsq3AP9dCzyVxb6o47v0DF0nMNdgLaY0v6IEwpCKs7ZZ%2FRyrlEF239cfA47EDBwcE5faKKR1e1FxOyzhDyTSXxDcZfEevQyyWXdkxwVp7eP%2BYDXOG1RqAnbGrunt59FX0QJOsRzdTHMK3tyAgoYIzpHJO15b97TySg1ze4zriqkDc1eFXOzNnCUZyaASLQlXUjlToaOZzKvLIiw6I8F0qYHWhduvtTe14PAXAp99%2BFyqeL8ympPpx1LdqBLjJwQ%2Fsk6DWRXcEbI7QJNbjkzSbL9lRzRSkeWQulGZnT02MqmI18dFrNM%2BlSgYdHqRFJXD17A7%2BBvnO1JhD8yABVDnVwcOMGa3C%2BCZ7CrsvqAkWUAQPlvJE%2FGO%2BOjCLI39cjfFlZya9fDWrXap6hfJi%2BBhmfKe6hz1FvCjVJLC4r18%2FB7Qx%2FMl0RnTRQpigGMdUtDkcMrC5v3TvOfWu6wTAgnxGVxiofgekLkWJi9WfhrL8H%2BCUfp6PXhweM1VjwzPavNiqGAqpcFL0G4cIs9OBb58N%2FlISnSHSd4XicOmQKAzOcT%2BQ1zoKc2mcxB8Ji2qwpu307jjukcecS0rEL8Y7F7r5bjs9BDiAa7tBiGPqVhIQJWVwe5MgGdFmUlvZcOAF9W5TD5jdbHBjqkAQ5At94Q%2BxDzUElJT%2B5CgQUwT9G6w%2FG1TrXAyfcVNjS81ZQGAVHxRVWVShIXHHr2rZ4jhNZjhJa39t6lMN1%2BrWSOb1vqz%2FRIw%2BNk7mTeta8XqBcywgpvcGQYuIuQ6WeWsJwLHeUiLJbkx3ExR3%2B9WhmhJy2UkGXrxoGQ1DbiiB%2BrC17UnMz3TzWYtXpjGbHa2lVL%2BHh61qXaxxneX9loE67%2Bt%2FWL&X-Amz-Signature=554d4521f9b7d78d76bdbe22700ccc47968a3f1f658c0c86d1115942fb24a972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXJBTZWD%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDIQRe4Luu2R3aSYXPBkJYiMpV3k8DTSugzEqYeLVUK%2BwIhAKWxEGnycUowO7PWEregzT1Mfa%2Brn7MMvWuNo2jQ63MBKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVgcry2yEgEGep5Ucq3AOAfj7OmoEDQkd90I0Eg3BFuYuEAl%2BRzgMN1Mjft1of88INJfrsHVPOv5oa6mw6R6LFFcxlWzBnhxIov3tOv7g2oKuqzdULY%2B%2FAeBTyopqaHOP%2FalKE10UfSanxt%2FAyONNWJvhJWxujAZoU3c2WEgm4PuAGNBKcPC3OOv5975liflp4Wqv1zHCkBeOik8n0Bwh%2BI9OvtfnZmDmxgrqya3BTKvw0iS7oiU2YYK%2BEoX7t6vpu2MnqqvenKXsSv7OhjQ1oH8Tj0He64rcU5gcvMMzuhEmlEhnvnea5VtBz55Bg3yp1B5vZTDujR3h3Mfde6uzq9EyDbaVSaePHjjpAVZr2cMUZnsf%2FyVJpgDV43Zy7GlxVJD2JvjOIxIlfLrp5QXprucIvTaPyUQ0FAzDztdx6zbJ%2FbKsA6Bhiv31uhVHGGZ97reUvFLg1J0bQHpPBA3EsorKYSCMrO8wBuwvdrzZQbPPnqsLPYdCKyLNV7eYNAg4QeWG8lmp6H7VAXVvXtCE%2BDiyNuYW5qWlfVvB3O481zGrA218hatHXVUVbh8ehioUFwE8C82x3VgHsge6EvvE8k9OUbv1aHznmQcHIfBbjEWBdfdlsrNdaBOwmwzjhc%2BMrFgn4Xbw%2FsC%2FBTzDYi9bHBjqkAeohA2x8Vi2TW8i%2B9m796NwzG8ghPmEsgb2rDitAJesmPSMymylHIGgHsQ9UFZPbr56otshCQP74X3rJWK5ukTNj2%2FSIDurxuVBVT6bPNhfY4rX%2FlIrx%2BSkYnqofhEOsdFjsVV%2Fy7bHu3SZtMIqYj%2BcT6e9BPlmRLqQ3DrVIjbEjbGLBUXWrzbZsVezJl5rJKHL1ooaeJnUKIpzWx4hxkYg%2F9Npo&X-Amz-Signature=119197e1df260715292dfe0834165c680c574d2c8a786216db4397ebc502ef68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7VBYSWS%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICwVblvdr2T7I6dY2zg6jQwdYZJvZYu8BKE6qn%2FYM71OAiEA69XL2L4kjMWXiyVmHuDGmRvvQEfeBxEprS6g0FMeuyUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJkCbr%2BL5Sy7mQ%2BjircAyvBgO8MulABtRCLZ6%2Bs7aFQd8SYc5Cfq4Qto1PFB%2B3d17uHcdNsjBEl%2Fq136d5RKxUYnr7qkSD6%2FL5LLjdGQoO0eOnvaeLUjP66UavviczVHQWdKIvP6eCEVQsmfiFzIwYmKVcZ0nVyP10Cz2mTds3zZJRDYGcliHizZ%2BV2DFdYXbfriISSCguwI4HmdYYqjrLNwXfSvyTb5Upi9o4x%2FJ2RFQkpilpbviq9GtWHV7veTfUyAeKFhcCtNccrG1rbJQN6stgdbJa6Ak%2Fq6U7H5Sg%2FWfzaG1FJhFfeqNKdD7VveaSXlzbTLz6RK8yCSqyCK%2BX1DHbGGUP9JicwzCWFuo6MkLHYaEzRat1TreTgU41%2BYyJfWupbzcR7swGKlxtsCqnmEuNTWnivd6cUK80A2h5EkGaO2%2F2UjfW3SqDWs7hoEHMmSFx7VGYeO31gfyBi92HrbJ%2BqWZPGYN2Fo%2FrvD3rR9EsTvg9hzkzfmQlwN2FTfHZYruqMY8h1vN5v9U8BYTngDns1Ig97BJoCxpfoR%2BWgXTEZPjrgzDV3lXZvgNIFzb6BjHUxIA87PUQyAZSzAdFvf%2BEkyc0Lvn8LKln%2BwXDVqvPV1vsrihdH%2BojHuIxR0jL5NxvvAlfjrflLMNyO1scGOqUB%2F0gKstF043VCsA13x3WwoHRFwc1LtqhqDRBkGBlOKoD8k7nlGLuVsLEePamgaPGYZnfD0fXUB5WtVRLqxXmmGcrIkwy0ZlwaKvHCOGpxwL0I4dcsDHhG6rysP5z3AJJkIzTWhXKhEBCUNM7UW2Yzew3l5T%2BMfXwWez2ZtSARqQ0%2FyZGfjH4nWVpn8SJtN8jCRQrJgFgfENdfnD%2FbVm2TAdiZtENE&X-Amz-Signature=03048863baefc0a8926379d7445732639f9ec4fc22b894b25391f1a9205c65ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=1139c47da65c4f22060fddf724c8dde169d9a4f4c183dbccfe0245047e3049f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675S5AJ4%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDlPzxa%2FOQ8fR%2BfNeS51a525OCKfaKu3RxGH4FA4dAXywIgIEvV%2FoHT02ceB5sVtfWDxktzbGvgS7pwor040A6LtNAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0sCJVPSovIpLM7ZyrcA0YF3YH3dRYTgV42YGS0l94EiyLFgz1VpKahlPsSJP62640uvyE4bCL1naVCDfVmlSvUUX1pvZoYwze4JnGt5lxTSgCp5j5pdkXvpJCXO5oD7vfvL4d11ijRNDIceO5lBHBQNrP7jzjtLJyo0ZA47Krev43n88OBARNSkB1otkSakw0maEorUXukJ4XlqrM1Egp53%2BB7zHSc6s6HRQ3QDa7GdGqh9ryMeZaZIO3GFRpbh61g97hK1ymf9MEfL0tiT1I9a8CyON7SoEPT8sgi0DjEKon0vaRNNOpyV9NfqQvuKg0XiJm7MAgIg9xKXBH1VjXegujVkBULNyZ6ZEWHTGMfBBEhXfM0VQqpYx2ntaFtOU5jWo%2B8WLFO5JPiJwtouIj7fGJaf%2BirgtXj8BFFewxMA10EfsrX9Ch6KsYwT7r%2FWEEOSmsobuGt6umROni%2Bcvoo0wcWI8YKOSqECK%2FGVmcglVcy2zoCDHPAul7i35AiPxaCcNNPNMgXOtI7txCiZGM1j4s8yLVecwmtZkBJbaq2F8lioar4m4EdQelVw3z0DBAuPTDARGNqpVyiohDzuMyKx82OapML66QtuUoGs%2F8Q2uShQm4GMk%2BRdLjCRyAy9r%2BFx9Lgvmmikl3dMNqN1scGOqUBiIIeXEsbYkDCxlQhrJmLNhlOirBAG218LkNEeY%2FrKl%2FZGv7sHmWhwKusvKwB5oVNYucI30xLtQBs5NNfaiYjQEtLs%2BI6E5qibCn99whvr%2FJ%2BdP45zLvVZo54REDzG5KkdCcPRgvV1C1JE32RxwWsEE%2F57u%2F8E%2F8zHLFKXwpUYcXwMvh4i5P5hGOcZq0B%2FwHoVPozhUOwdZCYy8EedtAWtFfn0zhn&X-Amz-Signature=d45d5d176c3213aa5dd4841e1af746fb2fc0a40b21049481d1ef335fae8341a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WC2SDDK%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCofVAHR12GDU711vHtr8mQaaBK9jH4IwsfaRagzmy5yAIgNngATm52Et8keyfmmzNgUqjQJu1yNPp8gGFCIJTJ1BUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUFNz2%2FqJPzSMMi4ircAxwC0qJLyxli1W%2F48vlWJnjbzfDWAFg1A%2FXijy1xOxyqppB3a9rW0K0d1iIKmbu4eMAgb%2B0OielU77witdDAADdSAmOkaeDWjauOPSqLAMfrNrYnsYWO%2B413qRILgnguBiW9%2BOssxIQPFA0Oil%2Bx996w1sfydQftZOxsueykt5AYdMW8x1kGh7mAvDQ6xV85WuVYF%2BI%2FQRAOyngBga78CBJHCl%2F%2BJPlhPXnNBmM7UKAn9%2BnwCtTs0Hc5jKw65igNLqPA8yautbxN%2Bu85%2Btq9Yf193LmR92wRyQz%2FusZsGxKF9syZOMW9uVG1lL%2FUVABU7%2BV6sZ%2Ba5XzPbTCqQZZhJ1UnTVuB3KILruEwImE7ud4IYTqUbFpw47WkVRIGmKnRRoU5SYGg4is6YZswArmPXVxzGzP%2B1xIkQyMFxJWqzO01ichV0Q0%2FzmAtT9jf9nlF1ba0EQi1EhPitlo2A6xw5UQWWXwtWqHCOjGUZx6Y81sQb7hL4oaBnqd3iqfhGcrfU%2FHyBsO32PsiIPwCuRgtmFxEO%2FqkQkLopZPikQUPn3q8btVsCWCSTW2nkLh66xW0hBzfWLj5OMOdd1g5ykUy3AcWgCFOvjh3Jh%2BmwXFZX0FcQ6npF6%2FYZNBnIecoMMWQ1scGOqUBXyrftGwUv19qGiIrahA9RQZkHfRkOoM1yBbp4bf%2FucSrbHLvwPVOR3q5rJYROV1oAyzif8ZfXeMrnnZFHHiFOJCRxU1t0XHAXiLMc%2BJbmctF9ytv%2Bhta21NfSQV7Hl0jroHlweJpqsy2AY1n1flv1Rar4GXiDEg6zrtgGaQulJusgi3U8L8GlwKGZKaH7RVBNUfA7LrrK%2FKGbG1xS8daDIX4Cb1F&X-Amz-Signature=97f1d48b867ef7dba406026a54985ea126fbd5abb695580aa85d3a5b3f121491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WC2SDDK%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCofVAHR12GDU711vHtr8mQaaBK9jH4IwsfaRagzmy5yAIgNngATm52Et8keyfmmzNgUqjQJu1yNPp8gGFCIJTJ1BUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUFNz2%2FqJPzSMMi4ircAxwC0qJLyxli1W%2F48vlWJnjbzfDWAFg1A%2FXijy1xOxyqppB3a9rW0K0d1iIKmbu4eMAgb%2B0OielU77witdDAADdSAmOkaeDWjauOPSqLAMfrNrYnsYWO%2B413qRILgnguBiW9%2BOssxIQPFA0Oil%2Bx996w1sfydQftZOxsueykt5AYdMW8x1kGh7mAvDQ6xV85WuVYF%2BI%2FQRAOyngBga78CBJHCl%2F%2BJPlhPXnNBmM7UKAn9%2BnwCtTs0Hc5jKw65igNLqPA8yautbxN%2Bu85%2Btq9Yf193LmR92wRyQz%2FusZsGxKF9syZOMW9uVG1lL%2FUVABU7%2BV6sZ%2Ba5XzPbTCqQZZhJ1UnTVuB3KILruEwImE7ud4IYTqUbFpw47WkVRIGmKnRRoU5SYGg4is6YZswArmPXVxzGzP%2B1xIkQyMFxJWqzO01ichV0Q0%2FzmAtT9jf9nlF1ba0EQi1EhPitlo2A6xw5UQWWXwtWqHCOjGUZx6Y81sQb7hL4oaBnqd3iqfhGcrfU%2FHyBsO32PsiIPwCuRgtmFxEO%2FqkQkLopZPikQUPn3q8btVsCWCSTW2nkLh66xW0hBzfWLj5OMOdd1g5ykUy3AcWgCFOvjh3Jh%2BmwXFZX0FcQ6npF6%2FYZNBnIecoMMWQ1scGOqUBXyrftGwUv19qGiIrahA9RQZkHfRkOoM1yBbp4bf%2FucSrbHLvwPVOR3q5rJYROV1oAyzif8ZfXeMrnnZFHHiFOJCRxU1t0XHAXiLMc%2BJbmctF9ytv%2Bhta21NfSQV7Hl0jroHlweJpqsy2AY1n1flv1Rar4GXiDEg6zrtgGaQulJusgi3U8L8GlwKGZKaH7RVBNUfA7LrrK%2FKGbG1xS8daDIX4Cb1F&X-Amz-Signature=5733d289d1dd39026902bc829c6e46dd82ee6755cbd90fa87b91fdac5a73226b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WC2SDDK%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCofVAHR12GDU711vHtr8mQaaBK9jH4IwsfaRagzmy5yAIgNngATm52Et8keyfmmzNgUqjQJu1yNPp8gGFCIJTJ1BUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUFNz2%2FqJPzSMMi4ircAxwC0qJLyxli1W%2F48vlWJnjbzfDWAFg1A%2FXijy1xOxyqppB3a9rW0K0d1iIKmbu4eMAgb%2B0OielU77witdDAADdSAmOkaeDWjauOPSqLAMfrNrYnsYWO%2B413qRILgnguBiW9%2BOssxIQPFA0Oil%2Bx996w1sfydQftZOxsueykt5AYdMW8x1kGh7mAvDQ6xV85WuVYF%2BI%2FQRAOyngBga78CBJHCl%2F%2BJPlhPXnNBmM7UKAn9%2BnwCtTs0Hc5jKw65igNLqPA8yautbxN%2Bu85%2Btq9Yf193LmR92wRyQz%2FusZsGxKF9syZOMW9uVG1lL%2FUVABU7%2BV6sZ%2Ba5XzPbTCqQZZhJ1UnTVuB3KILruEwImE7ud4IYTqUbFpw47WkVRIGmKnRRoU5SYGg4is6YZswArmPXVxzGzP%2B1xIkQyMFxJWqzO01ichV0Q0%2FzmAtT9jf9nlF1ba0EQi1EhPitlo2A6xw5UQWWXwtWqHCOjGUZx6Y81sQb7hL4oaBnqd3iqfhGcrfU%2FHyBsO32PsiIPwCuRgtmFxEO%2FqkQkLopZPikQUPn3q8btVsCWCSTW2nkLh66xW0hBzfWLj5OMOdd1g5ykUy3AcWgCFOvjh3Jh%2BmwXFZX0FcQ6npF6%2FYZNBnIecoMMWQ1scGOqUBXyrftGwUv19qGiIrahA9RQZkHfRkOoM1yBbp4bf%2FucSrbHLvwPVOR3q5rJYROV1oAyzif8ZfXeMrnnZFHHiFOJCRxU1t0XHAXiLMc%2BJbmctF9ytv%2Bhta21NfSQV7Hl0jroHlweJpqsy2AY1n1flv1Rar4GXiDEg6zrtgGaQulJusgi3U8L8GlwKGZKaH7RVBNUfA7LrrK%2FKGbG1xS8daDIX4Cb1F&X-Amz-Signature=2bf8ae9c457e60fec9a1aa8ba85985c89b50b3be846bbbbc965b16275cac31ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WC2SDDK%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCofVAHR12GDU711vHtr8mQaaBK9jH4IwsfaRagzmy5yAIgNngATm52Et8keyfmmzNgUqjQJu1yNPp8gGFCIJTJ1BUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUFNz2%2FqJPzSMMi4ircAxwC0qJLyxli1W%2F48vlWJnjbzfDWAFg1A%2FXijy1xOxyqppB3a9rW0K0d1iIKmbu4eMAgb%2B0OielU77witdDAADdSAmOkaeDWjauOPSqLAMfrNrYnsYWO%2B413qRILgnguBiW9%2BOssxIQPFA0Oil%2Bx996w1sfydQftZOxsueykt5AYdMW8x1kGh7mAvDQ6xV85WuVYF%2BI%2FQRAOyngBga78CBJHCl%2F%2BJPlhPXnNBmM7UKAn9%2BnwCtTs0Hc5jKw65igNLqPA8yautbxN%2Bu85%2Btq9Yf193LmR92wRyQz%2FusZsGxKF9syZOMW9uVG1lL%2FUVABU7%2BV6sZ%2Ba5XzPbTCqQZZhJ1UnTVuB3KILruEwImE7ud4IYTqUbFpw47WkVRIGmKnRRoU5SYGg4is6YZswArmPXVxzGzP%2B1xIkQyMFxJWqzO01ichV0Q0%2FzmAtT9jf9nlF1ba0EQi1EhPitlo2A6xw5UQWWXwtWqHCOjGUZx6Y81sQb7hL4oaBnqd3iqfhGcrfU%2FHyBsO32PsiIPwCuRgtmFxEO%2FqkQkLopZPikQUPn3q8btVsCWCSTW2nkLh66xW0hBzfWLj5OMOdd1g5ykUy3AcWgCFOvjh3Jh%2BmwXFZX0FcQ6npF6%2FYZNBnIecoMMWQ1scGOqUBXyrftGwUv19qGiIrahA9RQZkHfRkOoM1yBbp4bf%2FucSrbHLvwPVOR3q5rJYROV1oAyzif8ZfXeMrnnZFHHiFOJCRxU1t0XHAXiLMc%2BJbmctF9ytv%2Bhta21NfSQV7Hl0jroHlweJpqsy2AY1n1flv1Rar4GXiDEg6zrtgGaQulJusgi3U8L8GlwKGZKaH7RVBNUfA7LrrK%2FKGbG1xS8daDIX4Cb1F&X-Amz-Signature=8d678c92a1bfe89da87c59c3b0a1def24e2b7147df45fdb069a9e2d31611c498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGV4C3Y5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIF%2F1OWmODzSd22MFiTSvBwXewg3YArpkzvgaDwa52l23AiEAjPJucyuN6%2FwoBHIkOwP5D865DcbiIWbDACKE7kd13yMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiAZ9R%2B%2FFYGgP1nnCrcAwE2oyB4KpsWcWwfMNd1GrbewmETqh%2Ftb%2Fg6BdyFHHUPBm3L%2Fh%2BCEPcRdVCxf3W%2BFQRKYLeCg5cuH2mxKRAhticYNMwWweDwkYakQ4SNVtioSEHcyIhLCypa%2FTw%2BTEMl7zH0T75kcLlov8%2Bp7UI8v94bf4SIhXyA4y0OBvrTQqUTj%2F3h6U3YYXeo3Mlt2E0ZSr0yWK84n2pTotoU3Oq5YDuY3m%2F1a2YOZAkwV%2BYeMLk6qSybj2R3v9sxdSAR6opbFTbaGh9PS9eDheBKEj2Whg99Mepj911phoYZ0uSWA1H1Yc6l8RB6u2tYVEVPaxyrVEg%2BVX9cIroX52Fj0ComdE71ZBwgbJ2nr%2BQN8NIaOpXRCo31J2zitifpN2X8WEJSlhXx%2BXgTPm2w5y6Km1WkzB0453CGBjS6qJB9jLss22U%2Fiap3QXQIRdXppLd2gof8oEZrGA5dpJrigjjJzRjmR%2FPWItsGe%2Fn8Sk90GVW%2FUUnRSjVYidNDngSjjyWQ2f8aiOzlPNf33BYHquPy5UysyO%2F013lp7VA8tGoHthHm9skD9mVsjTuO35r5FopjBJQxWKBCoMFjToU40O015HcymWpI6fBXcWDojGdPpeBH%2FdWg1XhRndmxHW1zxvTCMIGQ1scGOqUBrjbK98CmiGGwbaU4Qs91iKWdebUA57GjHdP%2BPstPH1W8CLqD%2B73fE4IH9QzgMIfHmWXZquEOhjToV0GnMjVE%2BY5D05N3q8%2FFZRrpqNH%2BdH56xFVUml9sX33ReaJUOl%2FD%2FzuF3KPPJfn0CRYigdJ7nri%2B2xe30YmwprUkQ67AdAv9nbz0oocBOAimMnIPogklWoW3cY4iwOSTeYNN8bd%2FIIvgcC%2FS&X-Amz-Signature=7f6868da7f178063e60dbc66c058ecd218c4d29a341205e6b262d04cd617e113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WC2SDDK%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCofVAHR12GDU711vHtr8mQaaBK9jH4IwsfaRagzmy5yAIgNngATm52Et8keyfmmzNgUqjQJu1yNPp8gGFCIJTJ1BUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUFNz2%2FqJPzSMMi4ircAxwC0qJLyxli1W%2F48vlWJnjbzfDWAFg1A%2FXijy1xOxyqppB3a9rW0K0d1iIKmbu4eMAgb%2B0OielU77witdDAADdSAmOkaeDWjauOPSqLAMfrNrYnsYWO%2B413qRILgnguBiW9%2BOssxIQPFA0Oil%2Bx996w1sfydQftZOxsueykt5AYdMW8x1kGh7mAvDQ6xV85WuVYF%2BI%2FQRAOyngBga78CBJHCl%2F%2BJPlhPXnNBmM7UKAn9%2BnwCtTs0Hc5jKw65igNLqPA8yautbxN%2Bu85%2Btq9Yf193LmR92wRyQz%2FusZsGxKF9syZOMW9uVG1lL%2FUVABU7%2BV6sZ%2Ba5XzPbTCqQZZhJ1UnTVuB3KILruEwImE7ud4IYTqUbFpw47WkVRIGmKnRRoU5SYGg4is6YZswArmPXVxzGzP%2B1xIkQyMFxJWqzO01ichV0Q0%2FzmAtT9jf9nlF1ba0EQi1EhPitlo2A6xw5UQWWXwtWqHCOjGUZx6Y81sQb7hL4oaBnqd3iqfhGcrfU%2FHyBsO32PsiIPwCuRgtmFxEO%2FqkQkLopZPikQUPn3q8btVsCWCSTW2nkLh66xW0hBzfWLj5OMOdd1g5ykUy3AcWgCFOvjh3Jh%2BmwXFZX0FcQ6npF6%2FYZNBnIecoMMWQ1scGOqUBXyrftGwUv19qGiIrahA9RQZkHfRkOoM1yBbp4bf%2FucSrbHLvwPVOR3q5rJYROV1oAyzif8ZfXeMrnnZFHHiFOJCRxU1t0XHAXiLMc%2BJbmctF9ytv%2Bhta21NfSQV7Hl0jroHlweJpqsy2AY1n1flv1Rar4GXiDEg6zrtgGaQulJusgi3U8L8GlwKGZKaH7RVBNUfA7LrrK%2FKGbG1xS8daDIX4Cb1F&X-Amz-Signature=9a57df380bbebdc4cf891c46857d89c9b096429e9690b7e1f307f328fe199d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WC2SDDK%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCofVAHR12GDU711vHtr8mQaaBK9jH4IwsfaRagzmy5yAIgNngATm52Et8keyfmmzNgUqjQJu1yNPp8gGFCIJTJ1BUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUFNz2%2FqJPzSMMi4ircAxwC0qJLyxli1W%2F48vlWJnjbzfDWAFg1A%2FXijy1xOxyqppB3a9rW0K0d1iIKmbu4eMAgb%2B0OielU77witdDAADdSAmOkaeDWjauOPSqLAMfrNrYnsYWO%2B413qRILgnguBiW9%2BOssxIQPFA0Oil%2Bx996w1sfydQftZOxsueykt5AYdMW8x1kGh7mAvDQ6xV85WuVYF%2BI%2FQRAOyngBga78CBJHCl%2F%2BJPlhPXnNBmM7UKAn9%2BnwCtTs0Hc5jKw65igNLqPA8yautbxN%2Bu85%2Btq9Yf193LmR92wRyQz%2FusZsGxKF9syZOMW9uVG1lL%2FUVABU7%2BV6sZ%2Ba5XzPbTCqQZZhJ1UnTVuB3KILruEwImE7ud4IYTqUbFpw47WkVRIGmKnRRoU5SYGg4is6YZswArmPXVxzGzP%2B1xIkQyMFxJWqzO01ichV0Q0%2FzmAtT9jf9nlF1ba0EQi1EhPitlo2A6xw5UQWWXwtWqHCOjGUZx6Y81sQb7hL4oaBnqd3iqfhGcrfU%2FHyBsO32PsiIPwCuRgtmFxEO%2FqkQkLopZPikQUPn3q8btVsCWCSTW2nkLh66xW0hBzfWLj5OMOdd1g5ykUy3AcWgCFOvjh3Jh%2BmwXFZX0FcQ6npF6%2FYZNBnIecoMMWQ1scGOqUBXyrftGwUv19qGiIrahA9RQZkHfRkOoM1yBbp4bf%2FucSrbHLvwPVOR3q5rJYROV1oAyzif8ZfXeMrnnZFHHiFOJCRxU1t0XHAXiLMc%2BJbmctF9ytv%2Bhta21NfSQV7Hl0jroHlweJpqsy2AY1n1flv1Rar4GXiDEg6zrtgGaQulJusgi3U8L8GlwKGZKaH7RVBNUfA7LrrK%2FKGbG1xS8daDIX4Cb1F&X-Amz-Signature=622cca9e1fdc2ea843f0a5a5e610f9b404f7d8de789b14b4efa1144be68834df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WC2SDDK%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCofVAHR12GDU711vHtr8mQaaBK9jH4IwsfaRagzmy5yAIgNngATm52Et8keyfmmzNgUqjQJu1yNPp8gGFCIJTJ1BUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUFNz2%2FqJPzSMMi4ircAxwC0qJLyxli1W%2F48vlWJnjbzfDWAFg1A%2FXijy1xOxyqppB3a9rW0K0d1iIKmbu4eMAgb%2B0OielU77witdDAADdSAmOkaeDWjauOPSqLAMfrNrYnsYWO%2B413qRILgnguBiW9%2BOssxIQPFA0Oil%2Bx996w1sfydQftZOxsueykt5AYdMW8x1kGh7mAvDQ6xV85WuVYF%2BI%2FQRAOyngBga78CBJHCl%2F%2BJPlhPXnNBmM7UKAn9%2BnwCtTs0Hc5jKw65igNLqPA8yautbxN%2Bu85%2Btq9Yf193LmR92wRyQz%2FusZsGxKF9syZOMW9uVG1lL%2FUVABU7%2BV6sZ%2Ba5XzPbTCqQZZhJ1UnTVuB3KILruEwImE7ud4IYTqUbFpw47WkVRIGmKnRRoU5SYGg4is6YZswArmPXVxzGzP%2B1xIkQyMFxJWqzO01ichV0Q0%2FzmAtT9jf9nlF1ba0EQi1EhPitlo2A6xw5UQWWXwtWqHCOjGUZx6Y81sQb7hL4oaBnqd3iqfhGcrfU%2FHyBsO32PsiIPwCuRgtmFxEO%2FqkQkLopZPikQUPn3q8btVsCWCSTW2nkLh66xW0hBzfWLj5OMOdd1g5ykUy3AcWgCFOvjh3Jh%2BmwXFZX0FcQ6npF6%2FYZNBnIecoMMWQ1scGOqUBXyrftGwUv19qGiIrahA9RQZkHfRkOoM1yBbp4bf%2FucSrbHLvwPVOR3q5rJYROV1oAyzif8ZfXeMrnnZFHHiFOJCRxU1t0XHAXiLMc%2BJbmctF9ytv%2Bhta21NfSQV7Hl0jroHlweJpqsy2AY1n1flv1Rar4GXiDEg6zrtgGaQulJusgi3U8L8GlwKGZKaH7RVBNUfA7LrrK%2FKGbG1xS8daDIX4Cb1F&X-Amz-Signature=2bf8ae9c457e60fec9a1aa8ba85985c89b50b3be846bbbbc965b16275cac31ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WC2SDDK%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCofVAHR12GDU711vHtr8mQaaBK9jH4IwsfaRagzmy5yAIgNngATm52Et8keyfmmzNgUqjQJu1yNPp8gGFCIJTJ1BUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUFNz2%2FqJPzSMMi4ircAxwC0qJLyxli1W%2F48vlWJnjbzfDWAFg1A%2FXijy1xOxyqppB3a9rW0K0d1iIKmbu4eMAgb%2B0OielU77witdDAADdSAmOkaeDWjauOPSqLAMfrNrYnsYWO%2B413qRILgnguBiW9%2BOssxIQPFA0Oil%2Bx996w1sfydQftZOxsueykt5AYdMW8x1kGh7mAvDQ6xV85WuVYF%2BI%2FQRAOyngBga78CBJHCl%2F%2BJPlhPXnNBmM7UKAn9%2BnwCtTs0Hc5jKw65igNLqPA8yautbxN%2Bu85%2Btq9Yf193LmR92wRyQz%2FusZsGxKF9syZOMW9uVG1lL%2FUVABU7%2BV6sZ%2Ba5XzPbTCqQZZhJ1UnTVuB3KILruEwImE7ud4IYTqUbFpw47WkVRIGmKnRRoU5SYGg4is6YZswArmPXVxzGzP%2B1xIkQyMFxJWqzO01ichV0Q0%2FzmAtT9jf9nlF1ba0EQi1EhPitlo2A6xw5UQWWXwtWqHCOjGUZx6Y81sQb7hL4oaBnqd3iqfhGcrfU%2FHyBsO32PsiIPwCuRgtmFxEO%2FqkQkLopZPikQUPn3q8btVsCWCSTW2nkLh66xW0hBzfWLj5OMOdd1g5ykUy3AcWgCFOvjh3Jh%2BmwXFZX0FcQ6npF6%2FYZNBnIecoMMWQ1scGOqUBXyrftGwUv19qGiIrahA9RQZkHfRkOoM1yBbp4bf%2FucSrbHLvwPVOR3q5rJYROV1oAyzif8ZfXeMrnnZFHHiFOJCRxU1t0XHAXiLMc%2BJbmctF9ytv%2Bhta21NfSQV7Hl0jroHlweJpqsy2AY1n1flv1Rar4GXiDEg6zrtgGaQulJusgi3U8L8GlwKGZKaH7RVBNUfA7LrrK%2FKGbG1xS8daDIX4Cb1F&X-Amz-Signature=78a80788068f9ef7078d4efcbab6e4a8876a21b93f2aee7af752ba72f9d1661a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WC2SDDK%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCofVAHR12GDU711vHtr8mQaaBK9jH4IwsfaRagzmy5yAIgNngATm52Et8keyfmmzNgUqjQJu1yNPp8gGFCIJTJ1BUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUFNz2%2FqJPzSMMi4ircAxwC0qJLyxli1W%2F48vlWJnjbzfDWAFg1A%2FXijy1xOxyqppB3a9rW0K0d1iIKmbu4eMAgb%2B0OielU77witdDAADdSAmOkaeDWjauOPSqLAMfrNrYnsYWO%2B413qRILgnguBiW9%2BOssxIQPFA0Oil%2Bx996w1sfydQftZOxsueykt5AYdMW8x1kGh7mAvDQ6xV85WuVYF%2BI%2FQRAOyngBga78CBJHCl%2F%2BJPlhPXnNBmM7UKAn9%2BnwCtTs0Hc5jKw65igNLqPA8yautbxN%2Bu85%2Btq9Yf193LmR92wRyQz%2FusZsGxKF9syZOMW9uVG1lL%2FUVABU7%2BV6sZ%2Ba5XzPbTCqQZZhJ1UnTVuB3KILruEwImE7ud4IYTqUbFpw47WkVRIGmKnRRoU5SYGg4is6YZswArmPXVxzGzP%2B1xIkQyMFxJWqzO01ichV0Q0%2FzmAtT9jf9nlF1ba0EQi1EhPitlo2A6xw5UQWWXwtWqHCOjGUZx6Y81sQb7hL4oaBnqd3iqfhGcrfU%2FHyBsO32PsiIPwCuRgtmFxEO%2FqkQkLopZPikQUPn3q8btVsCWCSTW2nkLh66xW0hBzfWLj5OMOdd1g5ykUy3AcWgCFOvjh3Jh%2BmwXFZX0FcQ6npF6%2FYZNBnIecoMMWQ1scGOqUBXyrftGwUv19qGiIrahA9RQZkHfRkOoM1yBbp4bf%2FucSrbHLvwPVOR3q5rJYROV1oAyzif8ZfXeMrnnZFHHiFOJCRxU1t0XHAXiLMc%2BJbmctF9ytv%2Bhta21NfSQV7Hl0jroHlweJpqsy2AY1n1flv1Rar4GXiDEg6zrtgGaQulJusgi3U8L8GlwKGZKaH7RVBNUfA7LrrK%2FKGbG1xS8daDIX4Cb1F&X-Amz-Signature=0ed5a27655f3e7acfc4a828a032a573bce07a57b646be7ce26b1362c28dafa69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WC2SDDK%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCofVAHR12GDU711vHtr8mQaaBK9jH4IwsfaRagzmy5yAIgNngATm52Et8keyfmmzNgUqjQJu1yNPp8gGFCIJTJ1BUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUFNz2%2FqJPzSMMi4ircAxwC0qJLyxli1W%2F48vlWJnjbzfDWAFg1A%2FXijy1xOxyqppB3a9rW0K0d1iIKmbu4eMAgb%2B0OielU77witdDAADdSAmOkaeDWjauOPSqLAMfrNrYnsYWO%2B413qRILgnguBiW9%2BOssxIQPFA0Oil%2Bx996w1sfydQftZOxsueykt5AYdMW8x1kGh7mAvDQ6xV85WuVYF%2BI%2FQRAOyngBga78CBJHCl%2F%2BJPlhPXnNBmM7UKAn9%2BnwCtTs0Hc5jKw65igNLqPA8yautbxN%2Bu85%2Btq9Yf193LmR92wRyQz%2FusZsGxKF9syZOMW9uVG1lL%2FUVABU7%2BV6sZ%2Ba5XzPbTCqQZZhJ1UnTVuB3KILruEwImE7ud4IYTqUbFpw47WkVRIGmKnRRoU5SYGg4is6YZswArmPXVxzGzP%2B1xIkQyMFxJWqzO01ichV0Q0%2FzmAtT9jf9nlF1ba0EQi1EhPitlo2A6xw5UQWWXwtWqHCOjGUZx6Y81sQb7hL4oaBnqd3iqfhGcrfU%2FHyBsO32PsiIPwCuRgtmFxEO%2FqkQkLopZPikQUPn3q8btVsCWCSTW2nkLh66xW0hBzfWLj5OMOdd1g5ykUy3AcWgCFOvjh3Jh%2BmwXFZX0FcQ6npF6%2FYZNBnIecoMMWQ1scGOqUBXyrftGwUv19qGiIrahA9RQZkHfRkOoM1yBbp4bf%2FucSrbHLvwPVOR3q5rJYROV1oAyzif8ZfXeMrnnZFHHiFOJCRxU1t0XHAXiLMc%2BJbmctF9ytv%2Bhta21NfSQV7Hl0jroHlweJpqsy2AY1n1flv1Rar4GXiDEg6zrtgGaQulJusgi3U8L8GlwKGZKaH7RVBNUfA7LrrK%2FKGbG1xS8daDIX4Cb1F&X-Amz-Signature=1f6ccb5e6c44d0a0f424defda4dabcdf16eac857fbec6411adf3821eb073c949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


