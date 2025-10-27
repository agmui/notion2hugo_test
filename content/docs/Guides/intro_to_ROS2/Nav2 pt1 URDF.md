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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=11d414f161942c3b3bf6b19a9ed2ca98dea986c66003f953ef85871bfb2046de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=aaff346df87b4fdb21d95973fb37012280b57a0a55b9b6b8d8b58989f67b3fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=f8a26052498a644a5c9798000265be18f9ef2df36cf9da7f566d54377519f95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=c92fe6cd64f1ce76eaf8c702deec968c780ebfc272932083c616ad5005976236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=8f4a7133d352bc554b9fd225d44454dcea8d65bd7d4daeca2d001216e8c69965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=dd8c34af7c612a0dd1f240f14f88c92c44e846d52c0de210e0c725fa0ead3db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=6e78889f824de293af24854554a2dd3231c0772311246301d4bfa44a23833cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=0d6321e5b376779d718a8445f7cd74f2ec1b5df699bc9c86a465528965e4dad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=82936d983dcf361bd6712858f16310edcad955f431f58daa559f3087d4746218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=0df060fd1c4ea9a3efdf882a30561171d30674e3b283389379a079d65975b28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ46H4ER%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR22ptDJjxBiQfW2PecsSZdo%2Bu1iIGpA08yt4r26ATEwIgCqEE%2Fe232YDZ1W3B7EEZ%2Fg9PtNTMAqHhHFC0hKo2ARsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAmyaOLeTuGexu47SrcA3aBeOGvuQazIjTmYQLLTt%2B8X3mO8XfWF0YWf5ZZxLvBZkhChoWapgAoFlxywwMe1xAorgEXLCoSjhxX3euUbWgRldvIL%2Bj96IKYDVkghs1%2BRrUZQrWWEahmyrCjI%2FGnXSIw36mjuv5SNLafQx2Mdm3GOKWKn0bP0684GnL2xTL9GLIbGsLc4CmnAFcCQCSfvZ%2BeqeUT1ZqelKYqjdC%2FiCz5O7baQIA4f40Te4giTgVjWlf1Oj3p0o8Cm%2FwHtIICsJjn2YTxh3Cc2Omb5WAZMoXSKkIIyw3gDQkKYsBQoU3j6Y%2BWikDTzn628ZbVT5UN6%2Bh5boimmbmzk14Ue26GrosNLmiE%2F%2FB3YBlnvo8w7joC6na50vlGj4oCmwcRdvGQSb1Ql2%2B44WoaFOMlxmFyY7caQvpK4ll780xFEp1QADya%2FYj0abUYzJQR6kiLxjYjz2yrgDMsPAJHykQ3tasg7K4aiACP0M4QgHH7HLV1pxGbiIyRIZUFFErt03HrGsvyqABYw9ofkAmYiEk5mT%2BYoD94NZUG2Q35txcD8IbRh4%2Bxhrq4fRKM2p%2BygPBCm47yuuaAu43l4GmMu8mVeTNopQhpBtXEFqK4odBeF9ruDeXc3Cg7Ogbjp%2FFuTIXXMISN%2B8cGOqUBXj0EVjdEA%2Bqvorz8D8WYNITw%2F2Uwnvf0xCCaj7G6p4TTwLKlIkFy2yroSF1QUrZUjPz76jMMdW3ectbR%2F8c7bABp6uTFJA%2BgYkGBglDRC7rAqIF%2Bz3heqT%2ByDmuwAuNa89ShspZUgoRjfXcQHi955klddA9USpYnQBwfye6f5xiPRZ6DzVzTCyOysiPb%2F4nleHmGO%2BU3t86PVFyovG21%2FW0LK7Ob&X-Amz-Signature=69e081b6b82e46e57b14b831615ef90b138833c34aa19ed301f1379168b1a505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLLZAJGT%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsRyFNxZBHVaR%2B%2FL48GWqqojncxL2WMepKJh8hvVFaBgIgJHgteB2bsyBLAEY5ywor%2FCbA3FiefNz1QGKnxB6ayKoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA3J5nwqWVWu2cY%2FyrcA7RZbGvxZ%2F0E8kNKDpl5aoSo1XSTltNRvSrBTNDeO5zo1u4VkmhO8htFzOBENyWeGXENAKW3mk4Fhz5rrgmvHR9wxmseiZ59vWJc79iUigLhxDk87LJn1X%2Fme8SujoCcPfSUZjuKZ48ao1284YI73%2BWhbYw%2FrsUseZTAotz9UGtdYEwQ7cW9HaOItUrHEdxk3fGQ5BJSNwa4h%2FiPE8q7QovgjA85Ne7odbPlRqSCs7tCu%2B%2BjVxYwLunM8tw%2Brc%2BxTC6Uh8fe3wjoSLzxSL5SU979nq6n%2Bph4I2ZBSpzt9F4UY464ecXWzbRdOANY4x8RnyjKmO8hNVuKp0zIYsZKb4XxpWkxnTapzKRvA2EgoE9p0b%2FO0PJIPLTeMbQTh%2FEyvhwGynRD95OcJdfrY6gF%2Bo9t%2BCXxJZPh6UqgRe%2BRSIVFJIKaipFG6uxvg4AZqOlTmDw3v9IVF8ROZCwiPnaXHm91BI74%2FM7AmHw8uFGp4vKkt5ZOwSdGWeZcD1Sxyx8pjVl2AMUXNuo5w8bZUGIxUck4fCJSdw1qc%2Fqb2BR7ioAVRCaTT0CxBdMEG961C7VWNyv8IDhRpgnrFF0YlJP%2Bc8xlwZirrnP4VUbvelZGEqMzfl4bJFNcCaN%2F7ilTMIiP%2B8cGOqUB0C9g98OB3yhsNy0xR7KLRlJibbUY4zXYQNkzRnM%2Fw2sXtwpgaj9fSgMffwsLm4rJKzHi7lPuBC%2BXDXcgkrAZZtQ1T5EYgr9Mn1cAP0Xyq0IXO6sk6ib9vMAvhLVpnx%2Fe%2BKHHrz5%2BCDB78htj4L%2BRbLRanhqvjc0NKTddseUsL8%2Bc6nHZGTVyB1aCNQ9tPNPw%2BmCeGAGFbNymt3X1VAu9Kn4FcBIy&X-Amz-Signature=7e8ea91a08a1cfbe26e62fe027afe0d17813aab54ed609d3fb95fb5069db6ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UZIMLSM%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzsafiAk9ILX5WvYea42jROjJjohS0c8WBeHQowh4G0wIgVmmwCBJNfQZUE5diT2PH2GGs3WCDyMxdf7U0nXx0HdsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdWgU4htYq7GpJlHyrcAz43GHJJsjqaYTm9KXdf3X3W1g%2BvFJdETkhfq4DetuWgTMCHZ2Nv2v%2F7O6GARGG7fJion%2Bnrz9CVuHiKRNdHwBroa8BpIPMPhONFNpwzk4wxpd91fFsDBTl8hOlS0LcghC7p3vYW23INPq4MBVHuUl7WsortOjg%2BoCdUlbSHJZruxdhaNCTM3t9cRW9pFD6PtyRIra%2B10o7aRBq11inIqamyXdG6oSB5m%2FgF0ULC3cALjdyj7phXAG1j8MVvqMLG%2BIPreFmga5Ht6o4ud%2Fy2WmhKze9RMRsWwd6Tr4RzD75r6qBrUc%2FAhDCM5ui0G1oN0lfQi5s%2BwPzizPb0hVPjuhY6TcgT9QluwxIpFD9vtvkEkGaQoaEAtflIxgiRliCPuVrRLrK%2F0hbPSLExjQGxcB%2FNv6g72emwqCgdFSWlI33iGOt%2BsypgjqVa73wGMikhIsfu6dsTPM3sT83yammhd%2FdpuX17AUvj35Ksl98q%2FhpGcjM8Lmx5wfKb8pD6JvpsC95Qf81OLy433QCh1Yiq3XRyNbVW0wKj76%2BOycbYB1e0XD%2FgTEThHLFIdmdQulO0f2nqgy7LMydlP0kHJX8S9Vp0%2FQeyI3czDlU9fjegHiymrx5S8QKxcyIUn%2BpGMMyO%2B8cGOqUBqulNdm1cz3TK%2FVS8zq8o1mbYp6L%2FM3%2BbOL4aRs1YqOc55cqVE%2BT9IuQdvouyKmbnF%2FX5qXaMdzEbhla4oHD2Pk0jZTNXcNx9r2DGguU8v%2B%2F2eZoRq3nD0Tq4vqnnldT2xr40dWfmC%2B3wn202hwrv54OUuvLTo3NDmF4bZ%2F4R1u15CKij02mYSuVFx1EJXw7oVnIVHSzsIOkZIDsy%2FT9ZekpR%2FscN&X-Amz-Signature=97f29d994b783824fae14498023426f1737565d216c556449bc13949e10bd1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=41569da150751c07154a309c6ed04b5806efe66bb1f02dc83c11b8a482ea37a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ55O5L3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ8BKgHSreAj4sToEq9JFUkGuq%2BcCoucGyBlSjj6tnVQIgOn6RQOmex5HYfb6GTck%2Ff9I4krcCdYuIFRkwMa%2BDFFkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbmy3tmyTZKdGrzWCrcA%2FyJVsH3qZ8xpxxQOsGgWzYwQjlDN6VsFFwoty1Jro2Lz2pYIHQQ%2F5ApwpdLmVwEn29uJSScewLc1hUeBvyOsaNFE1kvl8DFScJK5P4xftN0F67mH%2FA0Oe1lt2CDW7N5%2FVDgFyz6yys4BPgyr1wJ0wh0FQDgmPvQRXYvqbvE9pCnsMUvy6jtiLpslGYc5ZGymTeCteoKZym9EgZpnVjJikT%2B5VM23Hoj8yI7d1uDXAe8%2BPC2%2FGnUrn4hgn%2B%2BslkBj8ubmWzO06Tq8QF%2FppTlF3zZ70c65Zp%2B0LoqkiIM7%2BHOY6Nojp2Z6nFqSypoX%2F%2Bj4am4I9Qja%2F6NALFaJjh0gy6ZtaZe%2F7axU6CimK58fFj6%2B3JxWpu4GoXj36XPkiBWWCFYrs8Uq74VtFNoG%2BXqRJluiUa4IyO1LrHfI00ojnQ2X%2FWv%2Fn%2F541y23E66WtnFHR6LApF6Au377N1Sq6F8PONnTcUSqUCl9YRyUgQ3D7o%2BCuh5xSJLlRoE0wplvUeTTFL1DzginafJMopkp9OAr27pgqKSJioeIcX7raP097o8i3qCeh0gQ62e8FYXVD5aQSt%2FpPTuBeX0iuN7iTPe%2B%2FiPMOLT3riqnyQpROn7ydqK45wZTTjb53WN8hguMN2O%2B8cGOqUBcMdSoRWSv2L0GZfN68yFcHzIK2gVX7pB8YXk7CLJl50NlC%2BD0u1VXpOg0ZpXk1ODGQHl4No20Rb752Lo6FD8XU%2FqJGI55DsrL0By2AQiHNBN6StfKthXV%2FK6CHrL6cbJv5O2yT7ZlcZGpeOMPhI8gnnNYWWipOkLa546EizsX6rLjDUN02sjFIyw3GU%2F0iNZ4bqJcfB6djW9cL76BHX0iiKTB4nm&X-Amz-Signature=83c58130db0669c4560484b38590c1b69a95ebc7908e1167f0fda7aa75761d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=6c96a94a7fa4b4485af3a5a2a494d980212f337300c4e13edde6b4e80da9d1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHQUGVQ%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC463CgIr7u7ev7b4j6otlywLdTSokabjjs1rhV1N%2FSswIgadjgPT5SJMzO6UbBzBGQb%2BH55TBVc8OutZnNjnBvQ6oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyrdwIRd4UBogsL6ircAzNbvB1pD%2F%2FCk2yqHBr5nmdKqGean1g2Q72Pt2zUlboNspTqF6up3oD4sJVtDxPoWqadNH%2FemDHy3RYrLD7PrvSPvsRdO%2F5MQrgMgc2%2Bib0Bx8js9fMcsLMFTglc%2BJqVLAZyEAjoP1L8aDSmcyd3XG%2BJdEKxdV6FsY3tzXkOD2WyAGDshcHws2Ha9xAppW%2BNmk2bjQuL9drYoyn27A8MZpkAiv39p1bARW9xUfPMU4Q9pMjBMI7nfEVebJqnNYf14JSIDIwhKhx3PCEHeuT707O7q5P9N4D0NfxfqLVJTbTmCwHOhKzyr2PyYdhqWxS%2BpGANLCgHE9O2NCYpzaI%2BrFxMH93ka8g0qVaJ6OTMhLozfK4Id%2ByL0aEQAaaXSVzl4NsaC2u8uGl7cuePdadM6NIRC9zu7jMzF9BJ%2FW1X7H0gTpI07qObSmZMBevXnpfc6zXPsMcCZzAjp52djyB%2BEEV7wWT3oE8OUXgIF8dOV12QwAxTAfAO6KnwwNTDgOUXA5FYZy8l3QNvH5mXT%2Fd9B21nKuQnrPTOt3ht%2BmTC4BnTlRw6HMc5PPPadn2%2FGEFrIvPh6mi4UzU9Rwm3uJLvbxmmcLG%2Ba%2FynBLzfgKF0vGi2WBpqQms4H0UbnHBPMKuP%2B8cGOqUB0UW5dB5rlAaoH6YhpWKo2atYix6usKlm2kQKruc%2FJHR%2FuPKi%2Bc6Qzfzwh0GtnpmmYVWsA8mmM6dKwi4BlDsyCuu0suI6Y3u4VR04C7vRLskam5QDX%2B43YHIgdRtZkoez8wipsunDMmYDX8OC2RXMuiZSf5RQOyk2I9sJDigDyS2T1kMgqGuqIF%2B0sxvMpabHUoGXGmHjbPqHAWBzVG5p5FDIsWKK&X-Amz-Signature=d8031c7e8ad1524d09bb5b210908c7e753a969a946199c0afd8ce324ac03e745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=48ae97bb7cd58aab906dd78a1042c05b91e0d4bc2936e268f5c5fd6afd6386d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526TMLFE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwJa%2BiouneYXM7bGeCeJK%2F6rhJykNR9hwnPl1xV%2FrndQIhAPEKNYnIftOE16xI9AW1gnmcli0bM81YT7uNg%2BX%2BvUgzKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuZaBC5AB%2BDQlzlXAq3ANS5X0mTH7j5k%2BIi0o1jIkylE81Js83O1Tjt0VHQ6RUM7yjCC9oDUFk4pQ6d2Hk2kkJdSjVHmv1XlrsHZ03B4Ci5OTL4vt11kG1XyFXodDAEaNwFL%2BA9aQreA48ZcMo8G3w9LtUpiDWr5RbTDGAETAq%2BKgPSeKg%2B%2B%2BgTkiHWVeQR2s2pBKpc6tmJcxwM04oYZ8VyfnKufU9DWbTXU3uEgAp8TwjfmZlAGT1ddAi6MQbAZZK0a5KBc724qEIX6gGa%2B%2FKidwzcL1k9HlBAUPqt2Qnlmx2xIVDYc9uLdxYTZe0v4GIr4Ply6w5C0NHK8kXvdnOxrRIjtgsqpkMGAy7%2FS4wusluZidodiPjX5%2BSrNjzEpkG7Oi5jVtFHOYhpZzukHehWyjBFmPwXs1xIGcEi03ixqinHIMwXUy6f7%2BwomLbn4FTfiI4A4X3CBDkBQxXRIMYUcz6s8zNsl8ntgAxaOHwpFQUnB80NJWPqsAYZ2%2F1PZSpQWS5FaU7GxDgfMfTidnQL6OTpw6%2Fxnhc4MnE22b1eiXE3J8fR%2Fd%2BIlAcFN3q2IyWA4n30T4ZKKb3blaD0w96dG2UFCgN5PaAigD%2FE80Va6F34EYRrRsYzwjnSZIP5bklZBL7tsRrlTJVojCrj%2FvHBjqkAeHKDOLBsFkOkJ%2B2ICl6brqThUXnu9JJg1qsC0ULnBKaBRqO1nTbT0YLWFgqn%2By3xnZHo91LvDkQ%2BcBe8Cng0lbyOWSO8sYYfyvrS9WI4lK%2Fo%2F7E4pzqeeqXmgGQreEXAe95x38zkfie9ntaULudSucddpbYwTwd7gKvQoD3YY4BoGoAyNNExe8KEaY0qKv%2FejuUCxFq6BN%2B%2BlZuMkBOiT8bZq%2B6&X-Amz-Signature=c01736ed0607b6453a6795c4e99cb5c592f26317509d6da003bc24ea656d2575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=3855e34b521e70869eb2e94a32cb7c43d9ad289ae44018a6c20a2bbf3c57ca0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ3DC2D%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8%2BlcWbKvJtLVaQQhX%2FB5lYEPbiszCOax8twMFo%2BLrWAiBmYHb%2BwzX%2BQbbvw5PjXlq5n2eoQT%2BH3ZeMuNY5kGMwvSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMee7eV%2BlA97Ssv5bgKtwDnWWbUJNK4NDRtOQpYeGTr69PHIqvIRXgKC1GuCGi9gXmB6guoCaqp%2FBxOgI%2B18ccZALKUO4CRedhhMephP1VM9qVwQLdTw%2Fkeia%2F72JXnV8jwyozfLQmEHNy%2BhcEuUgRcVZNkBnr2WS%2F5UIsEGWjXAKCYshxRkbFza3enRS6m9FeIf%2BI3%2Bg%2F3HVh%2BbjUEhKYwS6S0aDJS%2F1NMyoVElOnTek2lFaiTe0dRpkhhA58XfN7yCDpnVekVHjcz7%2BkAoeuyvLWImPKxx%2F8mVWQpkG7zsDdR46HuLdfjwx32vgvSZcKZH7nBQjFTusHfOLCWcIxEZl53jwJ09ZZ3vk9RjCYdtydlxcKFn4tZYz5Q84c%2BAXOvuvsoYnuFrs5S1fr5ZYntfmv1zQQBDrLRVwChV31ep5Xky9X01DC9yg4JCwgcf0tiTUu0Qr%2F%2FASzLrulClJtm19vrP%2BLhQhoGhLCebdAmzN%2BHWMLULROKJ95Oq01i6qk0WGKeAx%2BIwOZJCot6jtmveqQhRWTI%2BK9%2FYZl6i8yrsVweWnwagHZV5QGGBt9qihS03U7TkIpF7Hb9pSwa5LI62t9vOf7%2BrdQ7GtFU2uIF6Gt50JuAvxAwvSAIkVdsEv8cANaz0VN8BwRSsIwsI%2F7xwY6pgG1141EYI30R%2BsQpNXFaJ5CegNDSI6xq2aL6yCC6WWyeV90BWAo%2FFnJM0z18zLuh%2BthPt187DnocKosRdsLSG%2BT2p14kN0rTPovt7gVZsm5XcnmvIP8W2Y03WBt2vR0m9wNQaLu24DB8Q9kyE0OV3GJ40G8yl8zPRD9DQjTPPn4PqD8mkRKtXuRi%2FwV6XyC9VdQnXK%2B%2BCI11wvwnXDvUFg7qyUuuF5r&X-Amz-Signature=18ed5845f1203f879ce1cedad86fbca62a9b0d2f38f0d656173adc51293983de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=d9f4a854d52cfb86d404c7461ab29fd1071d0af1d24c5506b65d6e7e6dff1de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNUX433%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbHGZ6%2BAMqm6lXFv54JUd8xy3K79mCZRJmpeUWgOlIDAIgUSm6MSPuBeh9fooDn%2FNetkjKocnczYs9A9q028S5SVsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwSU35eXQOop8uxrircA5%2B5xO8UJEKYiH4yO2Nzic5K8dpYLJ%2BLE0QjIJEOgTESlUk6slvPlcX0xIMtTAnfA0KJVhuxFeiUCNvE7t15JjYGa5s8yH83YvqQoNuOa5ig1G%2BHsImQDfoN%2B0j%2BRvlO3H00%2BSwClcDpPK0jcnrPhr34VmX1Iq%2B3g2JX4SWc3qTYf%2FCpix9uWLKtgWuumL8xjYfInFE6KQJeHW3n29FdEI8gT4PqMUrxvvRLp1Hng4FDsjVtTE8fa3F1EXfvwPTEPIO6K7s0uSC1DsmOWgW2Gv4kOUqGIg3WVntVttYsB2l9K98%2FBPfy1YQXC3X91457aCEeY7yFLuEJoeuGnUM7BP9Yb1nYou7fh9OXcfDx1QlujJ%2F0C7k6OmGQjj8YDzIGjaQJ0drkxwVXrlRlwCTp6AzNOVDL%2B4gudx7pBCHhf6DN%2BPgwTtJSPxkPV0Oo2%2FLhejQ%2BJp5EINd587kjtcW22mY8Zo%2B4qfhEdv2hYXSQ8bSF4NqAimYUbNAr4WTvwuGuXcYqahe30zKGNAMaQCo99qC3%2FD%2FfUFJvcHN195XIRhJ0ZE3Ty5nRmsI%2BUWbgLtqHCDE%2FwJhKoqwwBJ5sz2zFWu0OZD7Sti76fV24TPDJema4Xs1pcJCwNhgera5yMJeO%2B8cGOqUBnUtnPIaR8AuQ6vCCRG3QJp2Bp5TEJqCOSSK3QXdhaOakcl5js9u4udn4UrocYOM7JMda6aAY%2BpCUATfG93hB5tqwGJ%2FfDmSmUGPMPvMld%2BvHYJ%2FBuJ8u%2BXCDLb3sNcw0%2FsnClJyeMSK68i1dfbZqU7PprM3qmYLf1642cKiKR1grHc0aEn8Xu0c%2Bta2pnmpN4XjM5TXb3ZjF06O8PpnHGwfsnO6L&X-Amz-Signature=573b8bad1bf217af70185740a026cf732df53ad2667bed74f579d3016f9054c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUZWC4Q7%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2wiphiZKXMWg%2Fq7ITvf56Q%2Fbz9%2BEVvB8lhNnNScMHYAiATu%2Fx5zZWLPFACD3VuMNHJaF%2Bdfo3IxE2CJB0UOdgdZCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxUQTvjPlSot64oPoKtwDDjkJJ%2FN44DThvyvmwJTBjb2bbEVav2xtJKvmxAtZfvDbomI3rCTM3clU8BeHbqpvSCFvIPq0qoWwnVkQrve29i0U%2BbmlJNn%2FIiOaCh7vf0ItQ1qdQ2MsGAIQwmBh2zv%2Bs8AYgYPwuSsAFCsFg1gfqAF1g0MjVQLmphnc%2BAQX4MXLiKXZDNFDQhnlpT5ssqUjne5VQBI3TelINB4b2d9FfZ%2FRlNwdgJ7rtKgxpwLHkhSGE2jK7IpihG0T53OZshBxjNWnYL5uuvjNVQPIqxFH9BuS6KIQ42Hf1UkXkbenvRhDuPewiShgrEpkqG3%2FrIoTXueXZqjz3tMSBV%2BiZCJuBm8GlSI8%2Ff2S3lKtYp7JVCCAjhMVHYWni%2BeVJgLpImc4gLZt9aPvlfn0qr9RO09ln%2FE3iN7zHH2SmQ%2FR5%2F3tebi2NxK3L0xPp5lzJ4EIZFJaVzaliCVqIxdjhx0GhaTjQLLMADxJe5XOilPH2mTwQkdgMuJnUqAE0ze%2BB7G0a%2Bnh1ettVSW2OOlXvVfx346b%2B8%2BKMwaSMwRZpfkw62C4J2pdlVIJpwz3cxV99eWkQg%2BlSIzNes2Sx2yrGsallnLz9UpgGt7La4mGIKABx3qEVz50aR8opNYF9CkFsQswk477xwY6pgHbx3OIcC2zfnoaIKFlz9fOoFShg4FEofVX2FdnHOLFrwpueD8oxfmFg52zDzsmtElhIoi0gT93wxK9X1nbe4hMcQDa8J%2BPIymMwhXbb55qt0rBOLvQudC95%2FusCp4PIFDZbzbTvWOMaRxxCEb2FbHEO7WwXniZA1l3177JZ2ucMToyoGFhqkzuavEVEz2jbL%2FO%2FhBysbmve%2FIp0tSi3Y4mQ9WWQZAJ&X-Amz-Signature=88c316fd7cf7b9956c96cef7c88bf7c0dc33c7f770b8ba9c77aab33b5222c157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5LFFXL%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FK5ma39duyBAIfLEcDGAcnxRFus4uE8XMzX5XeOI9lAiEAs5%2BA9jmJRBdcgSowr3I5t46PKMEJ9j0tYnQ8EBrOrY8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFu4SDcrKnp7%2BEN5PircA6RnI6aLveCbUH7JkIPpoLMBYU08hE13L75wkjEt8cnHxl%2BjytLlSZhet9dDcJbT8%2Fylva2Q7VIInduMHQhIlMrKOTDIfbPLSMAF6ZKdMlR1OoiQ9uJSsM7lm4iX3lf3wG3mpAhj7Vq%2B7kYZAJbQd0DG3nrTr8JPDbxZhCD9SVI0ViJhfcYTJ9zhawrJal4jmOVMjWudUFm55EOsrXArWCk7bGD3tVzStVh58nXofHrMsMjFmwrEpyJAhe1GuQgxhkFMt3G%2BHwmeOGmdyem6USBci7xK7oJMkbGyHZvUjI3i%2BuYq2b8nBNKKAmS8qNTWFewIRLHRfRVu8pnWL%2FpM2HNY9Icv%2BYMJeLM9IdUorM9COuup5pi%2BQq9UnbIwTuN3sEY8SNg5LAZgB0rDA%2F3E2amV3SDw4xV5bgfP3VSRM7h9PZYzBmCYW%2Bf%2FKmO%2BVWI3KgR4WLqiRcP3H%2FhsLKD1PYr4xxk7IFFtdI7k%2FAgzaW%2FbMBh%2BCioRyfoQbIQTGm5joEopDrM08RLsIUt6qLCPcwaugflp15nrRkfwLuNiZbo6CjvhK3pJkALnRTcH2OEkuambYL74oTfojadww9mHtiZI7u0l6e7U8sCF7NONpIY14AWjdoYrRNxkYGWVMMGO%2B8cGOqUBG0vTRK7f8G50ZUr3kjjDeL83OmwAj%2FZjpMEymB8zmqdV%2FgGaaWPc6t2gwGpNyo%2B6TiWV4XzzbIUdEHuTeTmYdgqcwriiJ0J03ImpRJ%2BEpKDjqcspMZnsRa5d370Zj8llImKUb7O%2FEsGhAvJTcKy0%2F%2Bc354cBhYjdzCi8NoKSV3V8ZNgZ4%2FjDicAWMW5BYWVPkOYC6GXowCDM%2Br05qZYOT1KBj%2BXG&X-Amz-Signature=e92e19545428d44a8644dff6de243521768d2d6e9ad1a93fc04f79a947d1ec3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=f445ad17ea11a6f5828b8930ae894e57f5115774c8a45a76d35945af9864d54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4JHQEE%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHy1BHv8zKDSzpajSpEMQE1d8OLnEGm02pc91Ev3j9gIhAI6eJKB5kczjFhQ8OA%2BPincaRILALhmHmgaDPhSPSJ9qKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHM%2FXY1i5pNwvHuAoq3APT4vRX7h29FzmhJNMQY6H7dHu%2FbkKeqOkM2hFGGogTHbL9Oh8erXwuqfCnFU3i47CQuLbn8tSB%2F1LGRpdVjl62r%2BLO6ZZ8%2Fkt%2FBVZMDiY5A0a5pFhUDj0hSdRZtWU5qsJjAXghbRWdrpHgkexh01l1oJ2%2FYPTjS1z7Q%2BqolZ8374WQ1uJ9gP2Pj8dmXlP4SkOioV68G03m7UNdmiHaQD89qxiwMIjx%2FQebFEXohnYLsoyHaqhBtPyKO1PHSw%2BjDGCvewXOucCD7940L9LnSDZn9HEDThsZGkBAQYhxI%2BGBm4waY9LV1IWq2ClDK%2BUH6GbktCohmWfrn2H9TUFhjKcnQt0m3Ay5BvBDL4P1tZr8V6o1kjQ5SNh8NcwZsAgwWolwhpjbcUQPtPSqZH7iaw2DtqoP4RkqXb4QmJFvbsTlm1bnGibLyGPcLkUiTq3M4JytOEI4cByVHXMJPp6pqEs7V5saS9u10NdFNu4qV0H25i77mJCX4l54B0kIbk1k1anfQ5TTp8vDOFWCU9M%2BV5r5E5yDJezxjAtBhmkQvI6FddMtpEuIFy3p8cu3sPC%2B32hbSZTZoeYwAMl4FEtJf5y9rOgEBrhKTFCRi2INfKunN%2F4QaHIKaR0fWDFfyjCsj%2FvHBjqkAXr0tjc9YiypUaRJ%2Bqr7%2B2y52PofZ6tgIvJSgoHlVbTTuhRk4FaaZU9i%2BnO5S2xmQ2vIzWukMjvenaeqird%2BiaY8wikEOOhwJelWryEWooGpfHqlwumNs3mNAO2OELc7%2FG5NNX%2BbuF%2FwLwN3yRywNjHmboxDVAcbMxPV4QFCK8LlOrDO%2FLSzyGPT5vxMTZPYfwXeTDt0iVCOG72EegB7qRj9Mf0B&X-Amz-Signature=cf87456f63ee5e3cf9dc05de95b7d943021f5afd2c0d2009e31bc1e189d97e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3IYJVAI%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXRAmC%2FjTiNAjL4UAmo6W4W0ZFIA3JLY%2Bptof5kn0ooAiEAw8OoSzXfJ4oSIOdeXXitvQWqF27z9DNuItwc6YF6h5oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7cHJvcWsoqU3Zl4yrcAxDq3CttVrvhfo7RxpK36Ut%2BN1%2FPRA6jW8XreD0eOWnNZPE3iPG%2BtHQczH2hhxyPthfd5a03i%2BrQCPMNwTu4Z6dvl2s2aZu4C4Rl9ubA6621US%2B08izRYg0ZdSdjYVYSmS1vjVAzilxa6eN8%2FgmXhKbPPXocq3v%2BUinUWgJU8pzD2Ht7c3zIePurcL%2B7MMQ5w1Uk6DfJ7yYeyq8skt%2Fx8oqWnHi%2BSsQIpJlGReBF0LcKlalvVHlcRti4vDAZLEHRoTv9IJXbckDmZjluHEBAj67z8BSYnmhvEE2AxpooRTa%2Fs0oZiQ1w5ZdhAdEgssu4V7Tgk3QI4BGHmqNG8K7vC31u5UeOiSno9%2BZ8QReyFR1zjkJssJg5kZTGYdV3WTJAdQoht2Pp0aHJS8recYTDAPF%2FTK0q7txLmRumgZEZpJGqemu%2FJcUavioWwrxlZ2oS3v8CZswgJcaUXSYlt8FcmH8azMi5C0Y8AqbxfotKHTLyByc8QvkZ3RR92Gs7NZpqAe5Cxyq24Q%2FcOy8PrmgTmpzGNLfGp09kk4%2Bx2ZfNzvAOOpqIfd%2FwD1Kdglr9DevP1xaAuZVgbYzhOQkf3OiYMrWeD9AXzS4Nl87e0vICDV4dMrV0Rkfh1PXGGcLRMIiQ%2B8cGOqUB2MuCEtkvYqbLLyiV%2B0T0xWVGBKwQzYIkPdA8eirDSfpnGhW%2BFEE8pYYZ6yyfZkzBrU538a5UjioZZbtAc%2Bwks6R%2BXPF5sowNjJz3SrFusu74x0yUzP2mukWCfgTwnIoIakao3tFbnofaTSTfO9VNgFQmDPLNPRO0By2w7dX006VQkHrRjiljsJTMsEEnZpxftNhjoCwCpVC2puyMFGMjrfHUrtu0&X-Amz-Signature=7b2e73d21ba647585e333e6af3930b0775d4b1f6dfb42df1000a75e527f1926d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3IYJVAI%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXRAmC%2FjTiNAjL4UAmo6W4W0ZFIA3JLY%2Bptof5kn0ooAiEAw8OoSzXfJ4oSIOdeXXitvQWqF27z9DNuItwc6YF6h5oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7cHJvcWsoqU3Zl4yrcAxDq3CttVrvhfo7RxpK36Ut%2BN1%2FPRA6jW8XreD0eOWnNZPE3iPG%2BtHQczH2hhxyPthfd5a03i%2BrQCPMNwTu4Z6dvl2s2aZu4C4Rl9ubA6621US%2B08izRYg0ZdSdjYVYSmS1vjVAzilxa6eN8%2FgmXhKbPPXocq3v%2BUinUWgJU8pzD2Ht7c3zIePurcL%2B7MMQ5w1Uk6DfJ7yYeyq8skt%2Fx8oqWnHi%2BSsQIpJlGReBF0LcKlalvVHlcRti4vDAZLEHRoTv9IJXbckDmZjluHEBAj67z8BSYnmhvEE2AxpooRTa%2Fs0oZiQ1w5ZdhAdEgssu4V7Tgk3QI4BGHmqNG8K7vC31u5UeOiSno9%2BZ8QReyFR1zjkJssJg5kZTGYdV3WTJAdQoht2Pp0aHJS8recYTDAPF%2FTK0q7txLmRumgZEZpJGqemu%2FJcUavioWwrxlZ2oS3v8CZswgJcaUXSYlt8FcmH8azMi5C0Y8AqbxfotKHTLyByc8QvkZ3RR92Gs7NZpqAe5Cxyq24Q%2FcOy8PrmgTmpzGNLfGp09kk4%2Bx2ZfNzvAOOpqIfd%2FwD1Kdglr9DevP1xaAuZVgbYzhOQkf3OiYMrWeD9AXzS4Nl87e0vICDV4dMrV0Rkfh1PXGGcLRMIiQ%2B8cGOqUB2MuCEtkvYqbLLyiV%2B0T0xWVGBKwQzYIkPdA8eirDSfpnGhW%2BFEE8pYYZ6yyfZkzBrU538a5UjioZZbtAc%2Bwks6R%2BXPF5sowNjJz3SrFusu74x0yUzP2mukWCfgTwnIoIakao3tFbnofaTSTfO9VNgFQmDPLNPRO0By2w7dX006VQkHrRjiljsJTMsEEnZpxftNhjoCwCpVC2puyMFGMjrfHUrtu0&X-Amz-Signature=7fa0d1b1dc3ea955a323699234e4f832fffecfe0bb4022abe883a00b5dd871d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3IYJVAI%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXRAmC%2FjTiNAjL4UAmo6W4W0ZFIA3JLY%2Bptof5kn0ooAiEAw8OoSzXfJ4oSIOdeXXitvQWqF27z9DNuItwc6YF6h5oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7cHJvcWsoqU3Zl4yrcAxDq3CttVrvhfo7RxpK36Ut%2BN1%2FPRA6jW8XreD0eOWnNZPE3iPG%2BtHQczH2hhxyPthfd5a03i%2BrQCPMNwTu4Z6dvl2s2aZu4C4Rl9ubA6621US%2B08izRYg0ZdSdjYVYSmS1vjVAzilxa6eN8%2FgmXhKbPPXocq3v%2BUinUWgJU8pzD2Ht7c3zIePurcL%2B7MMQ5w1Uk6DfJ7yYeyq8skt%2Fx8oqWnHi%2BSsQIpJlGReBF0LcKlalvVHlcRti4vDAZLEHRoTv9IJXbckDmZjluHEBAj67z8BSYnmhvEE2AxpooRTa%2Fs0oZiQ1w5ZdhAdEgssu4V7Tgk3QI4BGHmqNG8K7vC31u5UeOiSno9%2BZ8QReyFR1zjkJssJg5kZTGYdV3WTJAdQoht2Pp0aHJS8recYTDAPF%2FTK0q7txLmRumgZEZpJGqemu%2FJcUavioWwrxlZ2oS3v8CZswgJcaUXSYlt8FcmH8azMi5C0Y8AqbxfotKHTLyByc8QvkZ3RR92Gs7NZpqAe5Cxyq24Q%2FcOy8PrmgTmpzGNLfGp09kk4%2Bx2ZfNzvAOOpqIfd%2FwD1Kdglr9DevP1xaAuZVgbYzhOQkf3OiYMrWeD9AXzS4Nl87e0vICDV4dMrV0Rkfh1PXGGcLRMIiQ%2B8cGOqUB2MuCEtkvYqbLLyiV%2B0T0xWVGBKwQzYIkPdA8eirDSfpnGhW%2BFEE8pYYZ6yyfZkzBrU538a5UjioZZbtAc%2Bwks6R%2BXPF5sowNjJz3SrFusu74x0yUzP2mukWCfgTwnIoIakao3tFbnofaTSTfO9VNgFQmDPLNPRO0By2w7dX006VQkHrRjiljsJTMsEEnZpxftNhjoCwCpVC2puyMFGMjrfHUrtu0&X-Amz-Signature=ab93f7fac2e765b7c606ce2b0963b8b1cfe55a5f4c205995f17c20d80e182d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3IYJVAI%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXRAmC%2FjTiNAjL4UAmo6W4W0ZFIA3JLY%2Bptof5kn0ooAiEAw8OoSzXfJ4oSIOdeXXitvQWqF27z9DNuItwc6YF6h5oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7cHJvcWsoqU3Zl4yrcAxDq3CttVrvhfo7RxpK36Ut%2BN1%2FPRA6jW8XreD0eOWnNZPE3iPG%2BtHQczH2hhxyPthfd5a03i%2BrQCPMNwTu4Z6dvl2s2aZu4C4Rl9ubA6621US%2B08izRYg0ZdSdjYVYSmS1vjVAzilxa6eN8%2FgmXhKbPPXocq3v%2BUinUWgJU8pzD2Ht7c3zIePurcL%2B7MMQ5w1Uk6DfJ7yYeyq8skt%2Fx8oqWnHi%2BSsQIpJlGReBF0LcKlalvVHlcRti4vDAZLEHRoTv9IJXbckDmZjluHEBAj67z8BSYnmhvEE2AxpooRTa%2Fs0oZiQ1w5ZdhAdEgssu4V7Tgk3QI4BGHmqNG8K7vC31u5UeOiSno9%2BZ8QReyFR1zjkJssJg5kZTGYdV3WTJAdQoht2Pp0aHJS8recYTDAPF%2FTK0q7txLmRumgZEZpJGqemu%2FJcUavioWwrxlZ2oS3v8CZswgJcaUXSYlt8FcmH8azMi5C0Y8AqbxfotKHTLyByc8QvkZ3RR92Gs7NZpqAe5Cxyq24Q%2FcOy8PrmgTmpzGNLfGp09kk4%2Bx2ZfNzvAOOpqIfd%2FwD1Kdglr9DevP1xaAuZVgbYzhOQkf3OiYMrWeD9AXzS4Nl87e0vICDV4dMrV0Rkfh1PXGGcLRMIiQ%2B8cGOqUB2MuCEtkvYqbLLyiV%2B0T0xWVGBKwQzYIkPdA8eirDSfpnGhW%2BFEE8pYYZ6yyfZkzBrU538a5UjioZZbtAc%2Bwks6R%2BXPF5sowNjJz3SrFusu74x0yUzP2mukWCfgTwnIoIakao3tFbnofaTSTfO9VNgFQmDPLNPRO0By2w7dX006VQkHrRjiljsJTMsEEnZpxftNhjoCwCpVC2puyMFGMjrfHUrtu0&X-Amz-Signature=959d90aaefb282245a178eb9c44f9c796ebb405ad8f2ac88b2570bbfb257f801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC3KRR7B%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6bs1oVDbSLlgraWRtCw5mpB%2BFt1h4MR28LAmLPRY6kQIhANm2FkCPHg%2FJ8rroetd%2B7uPIGJuJPu4YaqFVRXXWw3TzKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8sUCoSb1M95AmYt8q3APAlZrKrp0AtTfZ52gv377q%2BF0p08ubFMrn51ErvSFvJ%2FHOLFI1%2FGq4IxBFKNsv%2BXhIpzFBTQOCAGhldADNt%2FwV9W111HovT%2B6%2Fc975HNq7nFdXnPehYGHAXEHQbUb%2BQvWQoc1ZC6hkpCfT93Nzjj7l1uAALkwQaQ9%2Fl9RKkOXJiyMZnpbMti5dhmBK2slFDsTq9bfWGnLCGHkJ9CVaUkY9iheIhHlYEBH9RlOxIbf7Okv1ZXABF0%2F3%2BDcnOTzLoI6%2B6%2FJS4A%2FPcUQ5Mqwr2AzhzYi%2BiOAfNwkJUU5SvDncxeTZtDGmfRog5UHrkIPows9tjasnO7RyMEL%2BHf4xc5pZ77DQhcBAdVPC%2BwLnYBTj1Mqc%2B9s6cbsP8Ya8rT%2BnGBEC05kxKMVWkTyE8CZCfFCmompWlDuRUR5EyqwgLOrDmcTF04GZBOwrAoiDNMeQMJh0wwmx7s97R7qe6Vf1Hj%2BeJVBddrj7Za9qUvAVfUoK6bRfbOJsUxvMDI%2BKDHCirTUCONp68TlOPXPpbj0PA8A71U1IpZDrEuFPFmnygZfnFbSuvo3M9IXPqOTQuTWf981bDTYYi2VBmIZaZvdYGGAZX2Vvc3orFUTKfid7QNjoqQaucZUdhEZjsKRINTCIj%2FvHBjqkAUTKyfpp09zpVd98f6ukLQkvg1cMJqDW014c636NQZkYJ2GeunEorZkSU8OBQJ%2BSjkjtVKL%2F6xJNt9xC1xOYYJD43XYEf79QlqyHpiOisjCAuVIp2Lm1z%2FqZP0U6SB%2F2053hmvuOQrCmtL4C8i7p4OwXwvEglfnkT1pC3ZCk4zkQETNIPmtmOkuc2qBwTtHtP%2BaVQhdN5bZYmNlHRVBZTW2HCeJL&X-Amz-Signature=7f343747d597a99f06da92ebdc963234f7004e0f229831e648f60b41e4cd10da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3IYJVAI%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXRAmC%2FjTiNAjL4UAmo6W4W0ZFIA3JLY%2Bptof5kn0ooAiEAw8OoSzXfJ4oSIOdeXXitvQWqF27z9DNuItwc6YF6h5oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7cHJvcWsoqU3Zl4yrcAxDq3CttVrvhfo7RxpK36Ut%2BN1%2FPRA6jW8XreD0eOWnNZPE3iPG%2BtHQczH2hhxyPthfd5a03i%2BrQCPMNwTu4Z6dvl2s2aZu4C4Rl9ubA6621US%2B08izRYg0ZdSdjYVYSmS1vjVAzilxa6eN8%2FgmXhKbPPXocq3v%2BUinUWgJU8pzD2Ht7c3zIePurcL%2B7MMQ5w1Uk6DfJ7yYeyq8skt%2Fx8oqWnHi%2BSsQIpJlGReBF0LcKlalvVHlcRti4vDAZLEHRoTv9IJXbckDmZjluHEBAj67z8BSYnmhvEE2AxpooRTa%2Fs0oZiQ1w5ZdhAdEgssu4V7Tgk3QI4BGHmqNG8K7vC31u5UeOiSno9%2BZ8QReyFR1zjkJssJg5kZTGYdV3WTJAdQoht2Pp0aHJS8recYTDAPF%2FTK0q7txLmRumgZEZpJGqemu%2FJcUavioWwrxlZ2oS3v8CZswgJcaUXSYlt8FcmH8azMi5C0Y8AqbxfotKHTLyByc8QvkZ3RR92Gs7NZpqAe5Cxyq24Q%2FcOy8PrmgTmpzGNLfGp09kk4%2Bx2ZfNzvAOOpqIfd%2FwD1Kdglr9DevP1xaAuZVgbYzhOQkf3OiYMrWeD9AXzS4Nl87e0vICDV4dMrV0Rkfh1PXGGcLRMIiQ%2B8cGOqUB2MuCEtkvYqbLLyiV%2B0T0xWVGBKwQzYIkPdA8eirDSfpnGhW%2BFEE8pYYZ6yyfZkzBrU538a5UjioZZbtAc%2Bwks6R%2BXPF5sowNjJz3SrFusu74x0yUzP2mukWCfgTwnIoIakao3tFbnofaTSTfO9VNgFQmDPLNPRO0By2w7dX006VQkHrRjiljsJTMsEEnZpxftNhjoCwCpVC2puyMFGMjrfHUrtu0&X-Amz-Signature=ac8a4adc37c1465f57015ee38f2aa1f3e75e9dc964a404d359c9b34983d77923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3IYJVAI%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXRAmC%2FjTiNAjL4UAmo6W4W0ZFIA3JLY%2Bptof5kn0ooAiEAw8OoSzXfJ4oSIOdeXXitvQWqF27z9DNuItwc6YF6h5oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7cHJvcWsoqU3Zl4yrcAxDq3CttVrvhfo7RxpK36Ut%2BN1%2FPRA6jW8XreD0eOWnNZPE3iPG%2BtHQczH2hhxyPthfd5a03i%2BrQCPMNwTu4Z6dvl2s2aZu4C4Rl9ubA6621US%2B08izRYg0ZdSdjYVYSmS1vjVAzilxa6eN8%2FgmXhKbPPXocq3v%2BUinUWgJU8pzD2Ht7c3zIePurcL%2B7MMQ5w1Uk6DfJ7yYeyq8skt%2Fx8oqWnHi%2BSsQIpJlGReBF0LcKlalvVHlcRti4vDAZLEHRoTv9IJXbckDmZjluHEBAj67z8BSYnmhvEE2AxpooRTa%2Fs0oZiQ1w5ZdhAdEgssu4V7Tgk3QI4BGHmqNG8K7vC31u5UeOiSno9%2BZ8QReyFR1zjkJssJg5kZTGYdV3WTJAdQoht2Pp0aHJS8recYTDAPF%2FTK0q7txLmRumgZEZpJGqemu%2FJcUavioWwrxlZ2oS3v8CZswgJcaUXSYlt8FcmH8azMi5C0Y8AqbxfotKHTLyByc8QvkZ3RR92Gs7NZpqAe5Cxyq24Q%2FcOy8PrmgTmpzGNLfGp09kk4%2Bx2ZfNzvAOOpqIfd%2FwD1Kdglr9DevP1xaAuZVgbYzhOQkf3OiYMrWeD9AXzS4Nl87e0vICDV4dMrV0Rkfh1PXGGcLRMIiQ%2B8cGOqUB2MuCEtkvYqbLLyiV%2B0T0xWVGBKwQzYIkPdA8eirDSfpnGhW%2BFEE8pYYZ6yyfZkzBrU538a5UjioZZbtAc%2Bwks6R%2BXPF5sowNjJz3SrFusu74x0yUzP2mukWCfgTwnIoIakao3tFbnofaTSTfO9VNgFQmDPLNPRO0By2w7dX006VQkHrRjiljsJTMsEEnZpxftNhjoCwCpVC2puyMFGMjrfHUrtu0&X-Amz-Signature=e2995227c71cc0af0d66c1a797a2aa4622673c949228707dce5e4edf1fc8fadf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3IYJVAI%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXRAmC%2FjTiNAjL4UAmo6W4W0ZFIA3JLY%2Bptof5kn0ooAiEAw8OoSzXfJ4oSIOdeXXitvQWqF27z9DNuItwc6YF6h5oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7cHJvcWsoqU3Zl4yrcAxDq3CttVrvhfo7RxpK36Ut%2BN1%2FPRA6jW8XreD0eOWnNZPE3iPG%2BtHQczH2hhxyPthfd5a03i%2BrQCPMNwTu4Z6dvl2s2aZu4C4Rl9ubA6621US%2B08izRYg0ZdSdjYVYSmS1vjVAzilxa6eN8%2FgmXhKbPPXocq3v%2BUinUWgJU8pzD2Ht7c3zIePurcL%2B7MMQ5w1Uk6DfJ7yYeyq8skt%2Fx8oqWnHi%2BSsQIpJlGReBF0LcKlalvVHlcRti4vDAZLEHRoTv9IJXbckDmZjluHEBAj67z8BSYnmhvEE2AxpooRTa%2Fs0oZiQ1w5ZdhAdEgssu4V7Tgk3QI4BGHmqNG8K7vC31u5UeOiSno9%2BZ8QReyFR1zjkJssJg5kZTGYdV3WTJAdQoht2Pp0aHJS8recYTDAPF%2FTK0q7txLmRumgZEZpJGqemu%2FJcUavioWwrxlZ2oS3v8CZswgJcaUXSYlt8FcmH8azMi5C0Y8AqbxfotKHTLyByc8QvkZ3RR92Gs7NZpqAe5Cxyq24Q%2FcOy8PrmgTmpzGNLfGp09kk4%2Bx2ZfNzvAOOpqIfd%2FwD1Kdglr9DevP1xaAuZVgbYzhOQkf3OiYMrWeD9AXzS4Nl87e0vICDV4dMrV0Rkfh1PXGGcLRMIiQ%2B8cGOqUB2MuCEtkvYqbLLyiV%2B0T0xWVGBKwQzYIkPdA8eirDSfpnGhW%2BFEE8pYYZ6yyfZkzBrU538a5UjioZZbtAc%2Bwks6R%2BXPF5sowNjJz3SrFusu74x0yUzP2mukWCfgTwnIoIakao3tFbnofaTSTfO9VNgFQmDPLNPRO0By2w7dX006VQkHrRjiljsJTMsEEnZpxftNhjoCwCpVC2puyMFGMjrfHUrtu0&X-Amz-Signature=ab93f7fac2e765b7c606ce2b0963b8b1cfe55a5f4c205995f17c20d80e182d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3IYJVAI%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXRAmC%2FjTiNAjL4UAmo6W4W0ZFIA3JLY%2Bptof5kn0ooAiEAw8OoSzXfJ4oSIOdeXXitvQWqF27z9DNuItwc6YF6h5oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7cHJvcWsoqU3Zl4yrcAxDq3CttVrvhfo7RxpK36Ut%2BN1%2FPRA6jW8XreD0eOWnNZPE3iPG%2BtHQczH2hhxyPthfd5a03i%2BrQCPMNwTu4Z6dvl2s2aZu4C4Rl9ubA6621US%2B08izRYg0ZdSdjYVYSmS1vjVAzilxa6eN8%2FgmXhKbPPXocq3v%2BUinUWgJU8pzD2Ht7c3zIePurcL%2B7MMQ5w1Uk6DfJ7yYeyq8skt%2Fx8oqWnHi%2BSsQIpJlGReBF0LcKlalvVHlcRti4vDAZLEHRoTv9IJXbckDmZjluHEBAj67z8BSYnmhvEE2AxpooRTa%2Fs0oZiQ1w5ZdhAdEgssu4V7Tgk3QI4BGHmqNG8K7vC31u5UeOiSno9%2BZ8QReyFR1zjkJssJg5kZTGYdV3WTJAdQoht2Pp0aHJS8recYTDAPF%2FTK0q7txLmRumgZEZpJGqemu%2FJcUavioWwrxlZ2oS3v8CZswgJcaUXSYlt8FcmH8azMi5C0Y8AqbxfotKHTLyByc8QvkZ3RR92Gs7NZpqAe5Cxyq24Q%2FcOy8PrmgTmpzGNLfGp09kk4%2Bx2ZfNzvAOOpqIfd%2FwD1Kdglr9DevP1xaAuZVgbYzhOQkf3OiYMrWeD9AXzS4Nl87e0vICDV4dMrV0Rkfh1PXGGcLRMIiQ%2B8cGOqUB2MuCEtkvYqbLLyiV%2B0T0xWVGBKwQzYIkPdA8eirDSfpnGhW%2BFEE8pYYZ6yyfZkzBrU538a5UjioZZbtAc%2Bwks6R%2BXPF5sowNjJz3SrFusu74x0yUzP2mukWCfgTwnIoIakao3tFbnofaTSTfO9VNgFQmDPLNPRO0By2w7dX006VQkHrRjiljsJTMsEEnZpxftNhjoCwCpVC2puyMFGMjrfHUrtu0&X-Amz-Signature=d3cc14bd915eed141bdc0ae3a95e6e7f552bbf21b867c951ca7184b2e0042ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3IYJVAI%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXRAmC%2FjTiNAjL4UAmo6W4W0ZFIA3JLY%2Bptof5kn0ooAiEAw8OoSzXfJ4oSIOdeXXitvQWqF27z9DNuItwc6YF6h5oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7cHJvcWsoqU3Zl4yrcAxDq3CttVrvhfo7RxpK36Ut%2BN1%2FPRA6jW8XreD0eOWnNZPE3iPG%2BtHQczH2hhxyPthfd5a03i%2BrQCPMNwTu4Z6dvl2s2aZu4C4Rl9ubA6621US%2B08izRYg0ZdSdjYVYSmS1vjVAzilxa6eN8%2FgmXhKbPPXocq3v%2BUinUWgJU8pzD2Ht7c3zIePurcL%2B7MMQ5w1Uk6DfJ7yYeyq8skt%2Fx8oqWnHi%2BSsQIpJlGReBF0LcKlalvVHlcRti4vDAZLEHRoTv9IJXbckDmZjluHEBAj67z8BSYnmhvEE2AxpooRTa%2Fs0oZiQ1w5ZdhAdEgssu4V7Tgk3QI4BGHmqNG8K7vC31u5UeOiSno9%2BZ8QReyFR1zjkJssJg5kZTGYdV3WTJAdQoht2Pp0aHJS8recYTDAPF%2FTK0q7txLmRumgZEZpJGqemu%2FJcUavioWwrxlZ2oS3v8CZswgJcaUXSYlt8FcmH8azMi5C0Y8AqbxfotKHTLyByc8QvkZ3RR92Gs7NZpqAe5Cxyq24Q%2FcOy8PrmgTmpzGNLfGp09kk4%2Bx2ZfNzvAOOpqIfd%2FwD1Kdglr9DevP1xaAuZVgbYzhOQkf3OiYMrWeD9AXzS4Nl87e0vICDV4dMrV0Rkfh1PXGGcLRMIiQ%2B8cGOqUB2MuCEtkvYqbLLyiV%2B0T0xWVGBKwQzYIkPdA8eirDSfpnGhW%2BFEE8pYYZ6yyfZkzBrU538a5UjioZZbtAc%2Bwks6R%2BXPF5sowNjJz3SrFusu74x0yUzP2mukWCfgTwnIoIakao3tFbnofaTSTfO9VNgFQmDPLNPRO0By2w7dX006VQkHrRjiljsJTMsEEnZpxftNhjoCwCpVC2puyMFGMjrfHUrtu0&X-Amz-Signature=77c16e3e1cc9518bfe905f000aa48809d43dcda7f91bc5da4965d69f42985c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3IYJVAI%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXRAmC%2FjTiNAjL4UAmo6W4W0ZFIA3JLY%2Bptof5kn0ooAiEAw8OoSzXfJ4oSIOdeXXitvQWqF27z9DNuItwc6YF6h5oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7cHJvcWsoqU3Zl4yrcAxDq3CttVrvhfo7RxpK36Ut%2BN1%2FPRA6jW8XreD0eOWnNZPE3iPG%2BtHQczH2hhxyPthfd5a03i%2BrQCPMNwTu4Z6dvl2s2aZu4C4Rl9ubA6621US%2B08izRYg0ZdSdjYVYSmS1vjVAzilxa6eN8%2FgmXhKbPPXocq3v%2BUinUWgJU8pzD2Ht7c3zIePurcL%2B7MMQ5w1Uk6DfJ7yYeyq8skt%2Fx8oqWnHi%2BSsQIpJlGReBF0LcKlalvVHlcRti4vDAZLEHRoTv9IJXbckDmZjluHEBAj67z8BSYnmhvEE2AxpooRTa%2Fs0oZiQ1w5ZdhAdEgssu4V7Tgk3QI4BGHmqNG8K7vC31u5UeOiSno9%2BZ8QReyFR1zjkJssJg5kZTGYdV3WTJAdQoht2Pp0aHJS8recYTDAPF%2FTK0q7txLmRumgZEZpJGqemu%2FJcUavioWwrxlZ2oS3v8CZswgJcaUXSYlt8FcmH8azMi5C0Y8AqbxfotKHTLyByc8QvkZ3RR92Gs7NZpqAe5Cxyq24Q%2FcOy8PrmgTmpzGNLfGp09kk4%2Bx2ZfNzvAOOpqIfd%2FwD1Kdglr9DevP1xaAuZVgbYzhOQkf3OiYMrWeD9AXzS4Nl87e0vICDV4dMrV0Rkfh1PXGGcLRMIiQ%2B8cGOqUB2MuCEtkvYqbLLyiV%2B0T0xWVGBKwQzYIkPdA8eirDSfpnGhW%2BFEE8pYYZ6yyfZkzBrU538a5UjioZZbtAc%2Bwks6R%2BXPF5sowNjJz3SrFusu74x0yUzP2mukWCfgTwnIoIakao3tFbnofaTSTfO9VNgFQmDPLNPRO0By2w7dX006VQkHrRjiljsJTMsEEnZpxftNhjoCwCpVC2puyMFGMjrfHUrtu0&X-Amz-Signature=bb90266f4be0b57aae58e7d4bf3098845183a9e122929d180cae556fe64c7b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


