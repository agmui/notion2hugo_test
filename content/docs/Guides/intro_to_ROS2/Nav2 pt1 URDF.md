---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-30T10:15:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-30T10:15:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBZZSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVv%2BkdU5%2F54%2F4V23CMl3p8oWMv%2BxlW1gUPdtYyvItAIgeX9KHntoF7GK4rzrosO0mCM6KUJfzUywR2dcbykpzCkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNBv1RZ8bpSQ03WCrcAzvhoXoekytO9M5m0D9H12YuRBSlPclmpzsGq7XbWT5xt5x2QOPUZ3hZJeqIh36%2Bgkmu0OXtGDZP3Fhbvpkp7l3k3TBR93eHEp95cqfU%2BeI6BZ%2BbSbVIqNMLWQxDiR872Vv%2BBWkZUfOEmz2Ik8i3PoEqIrc1B2YeBxrTZLi7r97DryKoxBLroioFH3rmWOQssEngB%2B2xUPal0oXwBniCX5WSefYj5DkBmzBUAAaYRdGnQz7zzrDrqs41yaWHLgRaN7BLCh2hdBBpRtmiuQKT%2BMogECfWnmOc4flw1IuA2wGQhcdtoF9vHJ%2BC8PtFlAEkpdB%2BxhnBbUOrvV1loMOk38ozfawKGoJCSM%2F3eXUfkWo9I6B%2FTwnpZ2OqQSlgfFwo%2BuakmSvqMU3KizGqa%2Fxq3xj9byxUV02Mmmc2psaz0xHd5UHVwMPfC9jl7uBN%2Fu%2BX%2BKCNtEzIRBRf0OJu%2FiujJ6%2FMaD%2BmlY65MnL8LspBn%2FBhPFRP%2BvOu9Wu2iULTFYorG%2FFBl9H4hLHXsww%2FDmgqy71hJ6b5yJN8K34%2FfvHCRW8MzzAjlhOBQf%2F1minbvGpkPDu7tgEiDAhsIuodd00E4dL9pgQo4SOWQzqZ3bY8k50Y%2BxgllwNd3PVhiJgqMIeiqMQGOqUBXqF7megYTU2RHJDlYq3BCptgQsGO6g19Ihr7LPztiAV1MlNMNpZVqojGGE4dYyPe4IPVQkUccdXwVHDWSlF4rqDiy0H82xJheFi0A15dEZLuZZoHWy1ZCBDSoKAgDRbao3c5yCbuLoqhLc%2FpvqglyANcBlFxPLQeHk16bpAYIYdJ8Q0RVeM5ad0xb3NiQZdGL%2FLm96RA8mWNTl4ubMQZU4GUefuS&X-Amz-Signature=0cda5634fec3b5615a683c110cdce876ecaaab55e00b3727f950c4e7645692c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBZZSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVv%2BkdU5%2F54%2F4V23CMl3p8oWMv%2BxlW1gUPdtYyvItAIgeX9KHntoF7GK4rzrosO0mCM6KUJfzUywR2dcbykpzCkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNBv1RZ8bpSQ03WCrcAzvhoXoekytO9M5m0D9H12YuRBSlPclmpzsGq7XbWT5xt5x2QOPUZ3hZJeqIh36%2Bgkmu0OXtGDZP3Fhbvpkp7l3k3TBR93eHEp95cqfU%2BeI6BZ%2BbSbVIqNMLWQxDiR872Vv%2BBWkZUfOEmz2Ik8i3PoEqIrc1B2YeBxrTZLi7r97DryKoxBLroioFH3rmWOQssEngB%2B2xUPal0oXwBniCX5WSefYj5DkBmzBUAAaYRdGnQz7zzrDrqs41yaWHLgRaN7BLCh2hdBBpRtmiuQKT%2BMogECfWnmOc4flw1IuA2wGQhcdtoF9vHJ%2BC8PtFlAEkpdB%2BxhnBbUOrvV1loMOk38ozfawKGoJCSM%2F3eXUfkWo9I6B%2FTwnpZ2OqQSlgfFwo%2BuakmSvqMU3KizGqa%2Fxq3xj9byxUV02Mmmc2psaz0xHd5UHVwMPfC9jl7uBN%2Fu%2BX%2BKCNtEzIRBRf0OJu%2FiujJ6%2FMaD%2BmlY65MnL8LspBn%2FBhPFRP%2BvOu9Wu2iULTFYorG%2FFBl9H4hLHXsww%2FDmgqy71hJ6b5yJN8K34%2FfvHCRW8MzzAjlhOBQf%2F1minbvGpkPDu7tgEiDAhsIuodd00E4dL9pgQo4SOWQzqZ3bY8k50Y%2BxgllwNd3PVhiJgqMIeiqMQGOqUBXqF7megYTU2RHJDlYq3BCptgQsGO6g19Ihr7LPztiAV1MlNMNpZVqojGGE4dYyPe4IPVQkUccdXwVHDWSlF4rqDiy0H82xJheFi0A15dEZLuZZoHWy1ZCBDSoKAgDRbao3c5yCbuLoqhLc%2FpvqglyANcBlFxPLQeHk16bpAYIYdJ8Q0RVeM5ad0xb3NiQZdGL%2FLm96RA8mWNTl4ubMQZU4GUefuS&X-Amz-Signature=dd840862634a4f4d60ec519142ecee123705ccd085d46280109229195d6fe9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBZZSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVv%2BkdU5%2F54%2F4V23CMl3p8oWMv%2BxlW1gUPdtYyvItAIgeX9KHntoF7GK4rzrosO0mCM6KUJfzUywR2dcbykpzCkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNBv1RZ8bpSQ03WCrcAzvhoXoekytO9M5m0D9H12YuRBSlPclmpzsGq7XbWT5xt5x2QOPUZ3hZJeqIh36%2Bgkmu0OXtGDZP3Fhbvpkp7l3k3TBR93eHEp95cqfU%2BeI6BZ%2BbSbVIqNMLWQxDiR872Vv%2BBWkZUfOEmz2Ik8i3PoEqIrc1B2YeBxrTZLi7r97DryKoxBLroioFH3rmWOQssEngB%2B2xUPal0oXwBniCX5WSefYj5DkBmzBUAAaYRdGnQz7zzrDrqs41yaWHLgRaN7BLCh2hdBBpRtmiuQKT%2BMogECfWnmOc4flw1IuA2wGQhcdtoF9vHJ%2BC8PtFlAEkpdB%2BxhnBbUOrvV1loMOk38ozfawKGoJCSM%2F3eXUfkWo9I6B%2FTwnpZ2OqQSlgfFwo%2BuakmSvqMU3KizGqa%2Fxq3xj9byxUV02Mmmc2psaz0xHd5UHVwMPfC9jl7uBN%2Fu%2BX%2BKCNtEzIRBRf0OJu%2FiujJ6%2FMaD%2BmlY65MnL8LspBn%2FBhPFRP%2BvOu9Wu2iULTFYorG%2FFBl9H4hLHXsww%2FDmgqy71hJ6b5yJN8K34%2FfvHCRW8MzzAjlhOBQf%2F1minbvGpkPDu7tgEiDAhsIuodd00E4dL9pgQo4SOWQzqZ3bY8k50Y%2BxgllwNd3PVhiJgqMIeiqMQGOqUBXqF7megYTU2RHJDlYq3BCptgQsGO6g19Ihr7LPztiAV1MlNMNpZVqojGGE4dYyPe4IPVQkUccdXwVHDWSlF4rqDiy0H82xJheFi0A15dEZLuZZoHWy1ZCBDSoKAgDRbao3c5yCbuLoqhLc%2FpvqglyANcBlFxPLQeHk16bpAYIYdJ8Q0RVeM5ad0xb3NiQZdGL%2FLm96RA8mWNTl4ubMQZU4GUefuS&X-Amz-Signature=5aaed79e12b2e557d37abfac63e1206cf7e39f18099f905345ac12f6785231eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBZZSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVv%2BkdU5%2F54%2F4V23CMl3p8oWMv%2BxlW1gUPdtYyvItAIgeX9KHntoF7GK4rzrosO0mCM6KUJfzUywR2dcbykpzCkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNBv1RZ8bpSQ03WCrcAzvhoXoekytO9M5m0D9H12YuRBSlPclmpzsGq7XbWT5xt5x2QOPUZ3hZJeqIh36%2Bgkmu0OXtGDZP3Fhbvpkp7l3k3TBR93eHEp95cqfU%2BeI6BZ%2BbSbVIqNMLWQxDiR872Vv%2BBWkZUfOEmz2Ik8i3PoEqIrc1B2YeBxrTZLi7r97DryKoxBLroioFH3rmWOQssEngB%2B2xUPal0oXwBniCX5WSefYj5DkBmzBUAAaYRdGnQz7zzrDrqs41yaWHLgRaN7BLCh2hdBBpRtmiuQKT%2BMogECfWnmOc4flw1IuA2wGQhcdtoF9vHJ%2BC8PtFlAEkpdB%2BxhnBbUOrvV1loMOk38ozfawKGoJCSM%2F3eXUfkWo9I6B%2FTwnpZ2OqQSlgfFwo%2BuakmSvqMU3KizGqa%2Fxq3xj9byxUV02Mmmc2psaz0xHd5UHVwMPfC9jl7uBN%2Fu%2BX%2BKCNtEzIRBRf0OJu%2FiujJ6%2FMaD%2BmlY65MnL8LspBn%2FBhPFRP%2BvOu9Wu2iULTFYorG%2FFBl9H4hLHXsww%2FDmgqy71hJ6b5yJN8K34%2FfvHCRW8MzzAjlhOBQf%2F1minbvGpkPDu7tgEiDAhsIuodd00E4dL9pgQo4SOWQzqZ3bY8k50Y%2BxgllwNd3PVhiJgqMIeiqMQGOqUBXqF7megYTU2RHJDlYq3BCptgQsGO6g19Ihr7LPztiAV1MlNMNpZVqojGGE4dYyPe4IPVQkUccdXwVHDWSlF4rqDiy0H82xJheFi0A15dEZLuZZoHWy1ZCBDSoKAgDRbao3c5yCbuLoqhLc%2FpvqglyANcBlFxPLQeHk16bpAYIYdJ8Q0RVeM5ad0xb3NiQZdGL%2FLm96RA8mWNTl4ubMQZU4GUefuS&X-Amz-Signature=fcc29b0a9f6e8fc306976269e60911153c65d6bbec73891b1b33cede68176873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBZZSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVv%2BkdU5%2F54%2F4V23CMl3p8oWMv%2BxlW1gUPdtYyvItAIgeX9KHntoF7GK4rzrosO0mCM6KUJfzUywR2dcbykpzCkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNBv1RZ8bpSQ03WCrcAzvhoXoekytO9M5m0D9H12YuRBSlPclmpzsGq7XbWT5xt5x2QOPUZ3hZJeqIh36%2Bgkmu0OXtGDZP3Fhbvpkp7l3k3TBR93eHEp95cqfU%2BeI6BZ%2BbSbVIqNMLWQxDiR872Vv%2BBWkZUfOEmz2Ik8i3PoEqIrc1B2YeBxrTZLi7r97DryKoxBLroioFH3rmWOQssEngB%2B2xUPal0oXwBniCX5WSefYj5DkBmzBUAAaYRdGnQz7zzrDrqs41yaWHLgRaN7BLCh2hdBBpRtmiuQKT%2BMogECfWnmOc4flw1IuA2wGQhcdtoF9vHJ%2BC8PtFlAEkpdB%2BxhnBbUOrvV1loMOk38ozfawKGoJCSM%2F3eXUfkWo9I6B%2FTwnpZ2OqQSlgfFwo%2BuakmSvqMU3KizGqa%2Fxq3xj9byxUV02Mmmc2psaz0xHd5UHVwMPfC9jl7uBN%2Fu%2BX%2BKCNtEzIRBRf0OJu%2FiujJ6%2FMaD%2BmlY65MnL8LspBn%2FBhPFRP%2BvOu9Wu2iULTFYorG%2FFBl9H4hLHXsww%2FDmgqy71hJ6b5yJN8K34%2FfvHCRW8MzzAjlhOBQf%2F1minbvGpkPDu7tgEiDAhsIuodd00E4dL9pgQo4SOWQzqZ3bY8k50Y%2BxgllwNd3PVhiJgqMIeiqMQGOqUBXqF7megYTU2RHJDlYq3BCptgQsGO6g19Ihr7LPztiAV1MlNMNpZVqojGGE4dYyPe4IPVQkUccdXwVHDWSlF4rqDiy0H82xJheFi0A15dEZLuZZoHWy1ZCBDSoKAgDRbao3c5yCbuLoqhLc%2FpvqglyANcBlFxPLQeHk16bpAYIYdJ8Q0RVeM5ad0xb3NiQZdGL%2FLm96RA8mWNTl4ubMQZU4GUefuS&X-Amz-Signature=29ff5324f191700d611a1ee34af31d92f572ddb2e53510804470e3adc3cb293a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBZZSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVv%2BkdU5%2F54%2F4V23CMl3p8oWMv%2BxlW1gUPdtYyvItAIgeX9KHntoF7GK4rzrosO0mCM6KUJfzUywR2dcbykpzCkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNBv1RZ8bpSQ03WCrcAzvhoXoekytO9M5m0D9H12YuRBSlPclmpzsGq7XbWT5xt5x2QOPUZ3hZJeqIh36%2Bgkmu0OXtGDZP3Fhbvpkp7l3k3TBR93eHEp95cqfU%2BeI6BZ%2BbSbVIqNMLWQxDiR872Vv%2BBWkZUfOEmz2Ik8i3PoEqIrc1B2YeBxrTZLi7r97DryKoxBLroioFH3rmWOQssEngB%2B2xUPal0oXwBniCX5WSefYj5DkBmzBUAAaYRdGnQz7zzrDrqs41yaWHLgRaN7BLCh2hdBBpRtmiuQKT%2BMogECfWnmOc4flw1IuA2wGQhcdtoF9vHJ%2BC8PtFlAEkpdB%2BxhnBbUOrvV1loMOk38ozfawKGoJCSM%2F3eXUfkWo9I6B%2FTwnpZ2OqQSlgfFwo%2BuakmSvqMU3KizGqa%2Fxq3xj9byxUV02Mmmc2psaz0xHd5UHVwMPfC9jl7uBN%2Fu%2BX%2BKCNtEzIRBRf0OJu%2FiujJ6%2FMaD%2BmlY65MnL8LspBn%2FBhPFRP%2BvOu9Wu2iULTFYorG%2FFBl9H4hLHXsww%2FDmgqy71hJ6b5yJN8K34%2FfvHCRW8MzzAjlhOBQf%2F1minbvGpkPDu7tgEiDAhsIuodd00E4dL9pgQo4SOWQzqZ3bY8k50Y%2BxgllwNd3PVhiJgqMIeiqMQGOqUBXqF7megYTU2RHJDlYq3BCptgQsGO6g19Ihr7LPztiAV1MlNMNpZVqojGGE4dYyPe4IPVQkUccdXwVHDWSlF4rqDiy0H82xJheFi0A15dEZLuZZoHWy1ZCBDSoKAgDRbao3c5yCbuLoqhLc%2FpvqglyANcBlFxPLQeHk16bpAYIYdJ8Q0RVeM5ad0xb3NiQZdGL%2FLm96RA8mWNTl4ubMQZU4GUefuS&X-Amz-Signature=a5f18bc8b13426ae82c5782909babce10073c967b8663073b60e314d9f387c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBZZSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVv%2BkdU5%2F54%2F4V23CMl3p8oWMv%2BxlW1gUPdtYyvItAIgeX9KHntoF7GK4rzrosO0mCM6KUJfzUywR2dcbykpzCkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNBv1RZ8bpSQ03WCrcAzvhoXoekytO9M5m0D9H12YuRBSlPclmpzsGq7XbWT5xt5x2QOPUZ3hZJeqIh36%2Bgkmu0OXtGDZP3Fhbvpkp7l3k3TBR93eHEp95cqfU%2BeI6BZ%2BbSbVIqNMLWQxDiR872Vv%2BBWkZUfOEmz2Ik8i3PoEqIrc1B2YeBxrTZLi7r97DryKoxBLroioFH3rmWOQssEngB%2B2xUPal0oXwBniCX5WSefYj5DkBmzBUAAaYRdGnQz7zzrDrqs41yaWHLgRaN7BLCh2hdBBpRtmiuQKT%2BMogECfWnmOc4flw1IuA2wGQhcdtoF9vHJ%2BC8PtFlAEkpdB%2BxhnBbUOrvV1loMOk38ozfawKGoJCSM%2F3eXUfkWo9I6B%2FTwnpZ2OqQSlgfFwo%2BuakmSvqMU3KizGqa%2Fxq3xj9byxUV02Mmmc2psaz0xHd5UHVwMPfC9jl7uBN%2Fu%2BX%2BKCNtEzIRBRf0OJu%2FiujJ6%2FMaD%2BmlY65MnL8LspBn%2FBhPFRP%2BvOu9Wu2iULTFYorG%2FFBl9H4hLHXsww%2FDmgqy71hJ6b5yJN8K34%2FfvHCRW8MzzAjlhOBQf%2F1minbvGpkPDu7tgEiDAhsIuodd00E4dL9pgQo4SOWQzqZ3bY8k50Y%2BxgllwNd3PVhiJgqMIeiqMQGOqUBXqF7megYTU2RHJDlYq3BCptgQsGO6g19Ihr7LPztiAV1MlNMNpZVqojGGE4dYyPe4IPVQkUccdXwVHDWSlF4rqDiy0H82xJheFi0A15dEZLuZZoHWy1ZCBDSoKAgDRbao3c5yCbuLoqhLc%2FpvqglyANcBlFxPLQeHk16bpAYIYdJ8Q0RVeM5ad0xb3NiQZdGL%2FLm96RA8mWNTl4ubMQZU4GUefuS&X-Amz-Signature=e4fd693943e5d581e8990436403a9214b1e02615499110ad1a84ab866be56ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBZZSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVv%2BkdU5%2F54%2F4V23CMl3p8oWMv%2BxlW1gUPdtYyvItAIgeX9KHntoF7GK4rzrosO0mCM6KUJfzUywR2dcbykpzCkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNBv1RZ8bpSQ03WCrcAzvhoXoekytO9M5m0D9H12YuRBSlPclmpzsGq7XbWT5xt5x2QOPUZ3hZJeqIh36%2Bgkmu0OXtGDZP3Fhbvpkp7l3k3TBR93eHEp95cqfU%2BeI6BZ%2BbSbVIqNMLWQxDiR872Vv%2BBWkZUfOEmz2Ik8i3PoEqIrc1B2YeBxrTZLi7r97DryKoxBLroioFH3rmWOQssEngB%2B2xUPal0oXwBniCX5WSefYj5DkBmzBUAAaYRdGnQz7zzrDrqs41yaWHLgRaN7BLCh2hdBBpRtmiuQKT%2BMogECfWnmOc4flw1IuA2wGQhcdtoF9vHJ%2BC8PtFlAEkpdB%2BxhnBbUOrvV1loMOk38ozfawKGoJCSM%2F3eXUfkWo9I6B%2FTwnpZ2OqQSlgfFwo%2BuakmSvqMU3KizGqa%2Fxq3xj9byxUV02Mmmc2psaz0xHd5UHVwMPfC9jl7uBN%2Fu%2BX%2BKCNtEzIRBRf0OJu%2FiujJ6%2FMaD%2BmlY65MnL8LspBn%2FBhPFRP%2BvOu9Wu2iULTFYorG%2FFBl9H4hLHXsww%2FDmgqy71hJ6b5yJN8K34%2FfvHCRW8MzzAjlhOBQf%2F1minbvGpkPDu7tgEiDAhsIuodd00E4dL9pgQo4SOWQzqZ3bY8k50Y%2BxgllwNd3PVhiJgqMIeiqMQGOqUBXqF7megYTU2RHJDlYq3BCptgQsGO6g19Ihr7LPztiAV1MlNMNpZVqojGGE4dYyPe4IPVQkUccdXwVHDWSlF4rqDiy0H82xJheFi0A15dEZLuZZoHWy1ZCBDSoKAgDRbao3c5yCbuLoqhLc%2FpvqglyANcBlFxPLQeHk16bpAYIYdJ8Q0RVeM5ad0xb3NiQZdGL%2FLm96RA8mWNTl4ubMQZU4GUefuS&X-Amz-Signature=4e4f99f7754a3dddfd12fbfb7b8ea8037dc8dbefce662667e43d05de2c9bde7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBZZSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVv%2BkdU5%2F54%2F4V23CMl3p8oWMv%2BxlW1gUPdtYyvItAIgeX9KHntoF7GK4rzrosO0mCM6KUJfzUywR2dcbykpzCkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNBv1RZ8bpSQ03WCrcAzvhoXoekytO9M5m0D9H12YuRBSlPclmpzsGq7XbWT5xt5x2QOPUZ3hZJeqIh36%2Bgkmu0OXtGDZP3Fhbvpkp7l3k3TBR93eHEp95cqfU%2BeI6BZ%2BbSbVIqNMLWQxDiR872Vv%2BBWkZUfOEmz2Ik8i3PoEqIrc1B2YeBxrTZLi7r97DryKoxBLroioFH3rmWOQssEngB%2B2xUPal0oXwBniCX5WSefYj5DkBmzBUAAaYRdGnQz7zzrDrqs41yaWHLgRaN7BLCh2hdBBpRtmiuQKT%2BMogECfWnmOc4flw1IuA2wGQhcdtoF9vHJ%2BC8PtFlAEkpdB%2BxhnBbUOrvV1loMOk38ozfawKGoJCSM%2F3eXUfkWo9I6B%2FTwnpZ2OqQSlgfFwo%2BuakmSvqMU3KizGqa%2Fxq3xj9byxUV02Mmmc2psaz0xHd5UHVwMPfC9jl7uBN%2Fu%2BX%2BKCNtEzIRBRf0OJu%2FiujJ6%2FMaD%2BmlY65MnL8LspBn%2FBhPFRP%2BvOu9Wu2iULTFYorG%2FFBl9H4hLHXsww%2FDmgqy71hJ6b5yJN8K34%2FfvHCRW8MzzAjlhOBQf%2F1minbvGpkPDu7tgEiDAhsIuodd00E4dL9pgQo4SOWQzqZ3bY8k50Y%2BxgllwNd3PVhiJgqMIeiqMQGOqUBXqF7megYTU2RHJDlYq3BCptgQsGO6g19Ihr7LPztiAV1MlNMNpZVqojGGE4dYyPe4IPVQkUccdXwVHDWSlF4rqDiy0H82xJheFi0A15dEZLuZZoHWy1ZCBDSoKAgDRbao3c5yCbuLoqhLc%2FpvqglyANcBlFxPLQeHk16bpAYIYdJ8Q0RVeM5ad0xb3NiQZdGL%2FLm96RA8mWNTl4ubMQZU4GUefuS&X-Amz-Signature=a7d7b9e1f9dac7079febb1860f8312f8be9481bea0cdff1fec645849b37805a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBZZSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVv%2BkdU5%2F54%2F4V23CMl3p8oWMv%2BxlW1gUPdtYyvItAIgeX9KHntoF7GK4rzrosO0mCM6KUJfzUywR2dcbykpzCkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNBv1RZ8bpSQ03WCrcAzvhoXoekytO9M5m0D9H12YuRBSlPclmpzsGq7XbWT5xt5x2QOPUZ3hZJeqIh36%2Bgkmu0OXtGDZP3Fhbvpkp7l3k3TBR93eHEp95cqfU%2BeI6BZ%2BbSbVIqNMLWQxDiR872Vv%2BBWkZUfOEmz2Ik8i3PoEqIrc1B2YeBxrTZLi7r97DryKoxBLroioFH3rmWOQssEngB%2B2xUPal0oXwBniCX5WSefYj5DkBmzBUAAaYRdGnQz7zzrDrqs41yaWHLgRaN7BLCh2hdBBpRtmiuQKT%2BMogECfWnmOc4flw1IuA2wGQhcdtoF9vHJ%2BC8PtFlAEkpdB%2BxhnBbUOrvV1loMOk38ozfawKGoJCSM%2F3eXUfkWo9I6B%2FTwnpZ2OqQSlgfFwo%2BuakmSvqMU3KizGqa%2Fxq3xj9byxUV02Mmmc2psaz0xHd5UHVwMPfC9jl7uBN%2Fu%2BX%2BKCNtEzIRBRf0OJu%2FiujJ6%2FMaD%2BmlY65MnL8LspBn%2FBhPFRP%2BvOu9Wu2iULTFYorG%2FFBl9H4hLHXsww%2FDmgqy71hJ6b5yJN8K34%2FfvHCRW8MzzAjlhOBQf%2F1minbvGpkPDu7tgEiDAhsIuodd00E4dL9pgQo4SOWQzqZ3bY8k50Y%2BxgllwNd3PVhiJgqMIeiqMQGOqUBXqF7megYTU2RHJDlYq3BCptgQsGO6g19Ihr7LPztiAV1MlNMNpZVqojGGE4dYyPe4IPVQkUccdXwVHDWSlF4rqDiy0H82xJheFi0A15dEZLuZZoHWy1ZCBDSoKAgDRbao3c5yCbuLoqhLc%2FpvqglyANcBlFxPLQeHk16bpAYIYdJ8Q0RVeM5ad0xb3NiQZdGL%2FLm96RA8mWNTl4ubMQZU4GUefuS&X-Amz-Signature=b48f5336ef7a1821e1bc2a22b652ded725b8a5fc4fbb7e73cf5f9e26a5a6ccaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
- link:
	- visual
		- geometry
		- material
	- collision
		- origin
		- geometry
		- friction
	- inertial
- joint:
	- parent
	- child
	- origin

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBZZSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVv%2BkdU5%2F54%2F4V23CMl3p8oWMv%2BxlW1gUPdtYyvItAIgeX9KHntoF7GK4rzrosO0mCM6KUJfzUywR2dcbykpzCkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNBv1RZ8bpSQ03WCrcAzvhoXoekytO9M5m0D9H12YuRBSlPclmpzsGq7XbWT5xt5x2QOPUZ3hZJeqIh36%2Bgkmu0OXtGDZP3Fhbvpkp7l3k3TBR93eHEp95cqfU%2BeI6BZ%2BbSbVIqNMLWQxDiR872Vv%2BBWkZUfOEmz2Ik8i3PoEqIrc1B2YeBxrTZLi7r97DryKoxBLroioFH3rmWOQssEngB%2B2xUPal0oXwBniCX5WSefYj5DkBmzBUAAaYRdGnQz7zzrDrqs41yaWHLgRaN7BLCh2hdBBpRtmiuQKT%2BMogECfWnmOc4flw1IuA2wGQhcdtoF9vHJ%2BC8PtFlAEkpdB%2BxhnBbUOrvV1loMOk38ozfawKGoJCSM%2F3eXUfkWo9I6B%2FTwnpZ2OqQSlgfFwo%2BuakmSvqMU3KizGqa%2Fxq3xj9byxUV02Mmmc2psaz0xHd5UHVwMPfC9jl7uBN%2Fu%2BX%2BKCNtEzIRBRf0OJu%2FiujJ6%2FMaD%2BmlY65MnL8LspBn%2FBhPFRP%2BvOu9Wu2iULTFYorG%2FFBl9H4hLHXsww%2FDmgqy71hJ6b5yJN8K34%2FfvHCRW8MzzAjlhOBQf%2F1minbvGpkPDu7tgEiDAhsIuodd00E4dL9pgQo4SOWQzqZ3bY8k50Y%2BxgllwNd3PVhiJgqMIeiqMQGOqUBXqF7megYTU2RHJDlYq3BCptgQsGO6g19Ihr7LPztiAV1MlNMNpZVqojGGE4dYyPe4IPVQkUccdXwVHDWSlF4rqDiy0H82xJheFi0A15dEZLuZZoHWy1ZCBDSoKAgDRbao3c5yCbuLoqhLc%2FpvqglyANcBlFxPLQeHk16bpAYIYdJ8Q0RVeM5ad0xb3NiQZdGL%2FLm96RA8mWNTl4ubMQZU4GUefuS&X-Amz-Signature=3374c4274f34f35ede1e651f9857cc39723bc7b2b7b84140cdcf455d9c33a6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBZZSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVv%2BkdU5%2F54%2F4V23CMl3p8oWMv%2BxlW1gUPdtYyvItAIgeX9KHntoF7GK4rzrosO0mCM6KUJfzUywR2dcbykpzCkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNBv1RZ8bpSQ03WCrcAzvhoXoekytO9M5m0D9H12YuRBSlPclmpzsGq7XbWT5xt5x2QOPUZ3hZJeqIh36%2Bgkmu0OXtGDZP3Fhbvpkp7l3k3TBR93eHEp95cqfU%2BeI6BZ%2BbSbVIqNMLWQxDiR872Vv%2BBWkZUfOEmz2Ik8i3PoEqIrc1B2YeBxrTZLi7r97DryKoxBLroioFH3rmWOQssEngB%2B2xUPal0oXwBniCX5WSefYj5DkBmzBUAAaYRdGnQz7zzrDrqs41yaWHLgRaN7BLCh2hdBBpRtmiuQKT%2BMogECfWnmOc4flw1IuA2wGQhcdtoF9vHJ%2BC8PtFlAEkpdB%2BxhnBbUOrvV1loMOk38ozfawKGoJCSM%2F3eXUfkWo9I6B%2FTwnpZ2OqQSlgfFwo%2BuakmSvqMU3KizGqa%2Fxq3xj9byxUV02Mmmc2psaz0xHd5UHVwMPfC9jl7uBN%2Fu%2BX%2BKCNtEzIRBRf0OJu%2FiujJ6%2FMaD%2BmlY65MnL8LspBn%2FBhPFRP%2BvOu9Wu2iULTFYorG%2FFBl9H4hLHXsww%2FDmgqy71hJ6b5yJN8K34%2FfvHCRW8MzzAjlhOBQf%2F1minbvGpkPDu7tgEiDAhsIuodd00E4dL9pgQo4SOWQzqZ3bY8k50Y%2BxgllwNd3PVhiJgqMIeiqMQGOqUBXqF7megYTU2RHJDlYq3BCptgQsGO6g19Ihr7LPztiAV1MlNMNpZVqojGGE4dYyPe4IPVQkUccdXwVHDWSlF4rqDiy0H82xJheFi0A15dEZLuZZoHWy1ZCBDSoKAgDRbao3c5yCbuLoqhLc%2FpvqglyANcBlFxPLQeHk16bpAYIYdJ8Q0RVeM5ad0xb3NiQZdGL%2FLm96RA8mWNTl4ubMQZU4GUefuS&X-Amz-Signature=9c55aec7bb4e261029c53667b8df25bd4f4463edeb45dccb7ed326196ab519d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBZZSP2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPgVv%2BkdU5%2F54%2F4V23CMl3p8oWMv%2BxlW1gUPdtYyvItAIgeX9KHntoF7GK4rzrosO0mCM6KUJfzUywR2dcbykpzCkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKNBv1RZ8bpSQ03WCrcAzvhoXoekytO9M5m0D9H12YuRBSlPclmpzsGq7XbWT5xt5x2QOPUZ3hZJeqIh36%2Bgkmu0OXtGDZP3Fhbvpkp7l3k3TBR93eHEp95cqfU%2BeI6BZ%2BbSbVIqNMLWQxDiR872Vv%2BBWkZUfOEmz2Ik8i3PoEqIrc1B2YeBxrTZLi7r97DryKoxBLroioFH3rmWOQssEngB%2B2xUPal0oXwBniCX5WSefYj5DkBmzBUAAaYRdGnQz7zzrDrqs41yaWHLgRaN7BLCh2hdBBpRtmiuQKT%2BMogECfWnmOc4flw1IuA2wGQhcdtoF9vHJ%2BC8PtFlAEkpdB%2BxhnBbUOrvV1loMOk38ozfawKGoJCSM%2F3eXUfkWo9I6B%2FTwnpZ2OqQSlgfFwo%2BuakmSvqMU3KizGqa%2Fxq3xj9byxUV02Mmmc2psaz0xHd5UHVwMPfC9jl7uBN%2Fu%2BX%2BKCNtEzIRBRf0OJu%2FiujJ6%2FMaD%2BmlY65MnL8LspBn%2FBhPFRP%2BvOu9Wu2iULTFYorG%2FFBl9H4hLHXsww%2FDmgqy71hJ6b5yJN8K34%2FfvHCRW8MzzAjlhOBQf%2F1minbvGpkPDu7tgEiDAhsIuodd00E4dL9pgQo4SOWQzqZ3bY8k50Y%2BxgllwNd3PVhiJgqMIeiqMQGOqUBXqF7megYTU2RHJDlYq3BCptgQsGO6g19Ihr7LPztiAV1MlNMNpZVqojGGE4dYyPe4IPVQkUccdXwVHDWSlF4rqDiy0H82xJheFi0A15dEZLuZZoHWy1ZCBDSoKAgDRbao3c5yCbuLoqhLc%2FpvqglyANcBlFxPLQeHk16bpAYIYdJ8Q0RVeM5ad0xb3NiQZdGL%2FLm96RA8mWNTl4ubMQZU4GUefuS&X-Amz-Signature=f7edbede3a25a3a862e2ae045497999011b3f8d099e1063cbd7faf3f8f60af29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNLEPW7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfd2nss5PAQAERaVzXvExgBX4Qrq6vjeWMfw8sk7BYHAiEAm6qOTV24GTPh1%2B9tDxM1DCVHO5Uri8Fmykzb3sbC%2BwMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9Xwr3I90o0uh9HBircAykWtCDZah4wp%2FMXYuXoI5C5QL4D7QUQuXi%2BoF3OdoVcKDJ3xC0A7dBUXpmGylYihOs9q7WLCFJOLZhaeBC0hXpUX0XHJ221rK8AJolLqjbXDAyTJ1TiI55OQmjqnd%2Btvzu5J5MMu8X9wDa4upRbjgOXv98ogUHx69dtvigUmlJk2eCd0%2BtNVu94dj8MvuPnp0CuaxC67aFe5vQTrQ6HFcBIKsZTpUlfhtvOvEJPEAWbBR2hoBbbvA6L6IMGHGZA2dVTn7fbYjvehCtLdOfW4I320zXlcPQbSZRdv2ORxT%2FTTfkXdUny%2B3kwwBgatHClTTLJshT%2Bo1gN4l6ixS3%2B5jUZBA6Lp9H9fSzW2xez6T%2Fo%2BnqI3Fa1cisggZ0GqgE7UPtG1oYOgwCjN1G4FIlxLNQu0apwGcIfXiaMzvhm0mp%2FlSMPaZn3MuIN0za8sef18RgG4lAU48HAU8BKTBXh9I2B54C7gTLnzY%2F%2BUMvuezy3yMiU0I4dV558d9knUCL09WSfbFdLdWctdowuMeq%2BptCpch4kzXFPrXv2fXnWeNcWbNWoFusLOQ95IFNKmaVG5p16iPlPeOPDHkUTZN0aZdRak6%2BLfqERRMnNka6c1Gm%2FQj%2F1aKXKwtfXKg1gMLSjqMQGOqUBQQzKhYrjghqVNiADFd4Yfv4qvXrEqm8cssmuyX7LWb1eePVh7DKMgde5f3KqzGyrB8I%2BPwD8iOPzqgghPeiuFZLpuq%2BoZZl6apIk0QgXYEQL%2FGCYdeS7gD%2Fkakz0WWHOPcXWxh1vQejpwmonDRvKKZZpLd3%2BkhKVngYPeB0pvHMVo%2Bjs0UW7lLxp0oCnTbgJT4Up7IS6vKIsoBVKBf7YmXnDUiSc&X-Amz-Signature=b1e1c22d662b4f9ff783e54115f27ef407f841632b7085cb98682ea9e5f35f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNLEPW7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfd2nss5PAQAERaVzXvExgBX4Qrq6vjeWMfw8sk7BYHAiEAm6qOTV24GTPh1%2B9tDxM1DCVHO5Uri8Fmykzb3sbC%2BwMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9Xwr3I90o0uh9HBircAykWtCDZah4wp%2FMXYuXoI5C5QL4D7QUQuXi%2BoF3OdoVcKDJ3xC0A7dBUXpmGylYihOs9q7WLCFJOLZhaeBC0hXpUX0XHJ221rK8AJolLqjbXDAyTJ1TiI55OQmjqnd%2Btvzu5J5MMu8X9wDa4upRbjgOXv98ogUHx69dtvigUmlJk2eCd0%2BtNVu94dj8MvuPnp0CuaxC67aFe5vQTrQ6HFcBIKsZTpUlfhtvOvEJPEAWbBR2hoBbbvA6L6IMGHGZA2dVTn7fbYjvehCtLdOfW4I320zXlcPQbSZRdv2ORxT%2FTTfkXdUny%2B3kwwBgatHClTTLJshT%2Bo1gN4l6ixS3%2B5jUZBA6Lp9H9fSzW2xez6T%2Fo%2BnqI3Fa1cisggZ0GqgE7UPtG1oYOgwCjN1G4FIlxLNQu0apwGcIfXiaMzvhm0mp%2FlSMPaZn3MuIN0za8sef18RgG4lAU48HAU8BKTBXh9I2B54C7gTLnzY%2F%2BUMvuezy3yMiU0I4dV558d9knUCL09WSfbFdLdWctdowuMeq%2BptCpch4kzXFPrXv2fXnWeNcWbNWoFusLOQ95IFNKmaVG5p16iPlPeOPDHkUTZN0aZdRak6%2BLfqERRMnNka6c1Gm%2FQj%2F1aKXKwtfXKg1gMLSjqMQGOqUBQQzKhYrjghqVNiADFd4Yfv4qvXrEqm8cssmuyX7LWb1eePVh7DKMgde5f3KqzGyrB8I%2BPwD8iOPzqgghPeiuFZLpuq%2BoZZl6apIk0QgXYEQL%2FGCYdeS7gD%2Fkakz0WWHOPcXWxh1vQejpwmonDRvKKZZpLd3%2BkhKVngYPeB0pvHMVo%2Bjs0UW7lLxp0oCnTbgJT4Up7IS6vKIsoBVKBf7YmXnDUiSc&X-Amz-Signature=c34ece31c8f96049cd01590faff488c8f749049b8e861486e59138c29c17ba58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNLEPW7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfd2nss5PAQAERaVzXvExgBX4Qrq6vjeWMfw8sk7BYHAiEAm6qOTV24GTPh1%2B9tDxM1DCVHO5Uri8Fmykzb3sbC%2BwMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9Xwr3I90o0uh9HBircAykWtCDZah4wp%2FMXYuXoI5C5QL4D7QUQuXi%2BoF3OdoVcKDJ3xC0A7dBUXpmGylYihOs9q7WLCFJOLZhaeBC0hXpUX0XHJ221rK8AJolLqjbXDAyTJ1TiI55OQmjqnd%2Btvzu5J5MMu8X9wDa4upRbjgOXv98ogUHx69dtvigUmlJk2eCd0%2BtNVu94dj8MvuPnp0CuaxC67aFe5vQTrQ6HFcBIKsZTpUlfhtvOvEJPEAWbBR2hoBbbvA6L6IMGHGZA2dVTn7fbYjvehCtLdOfW4I320zXlcPQbSZRdv2ORxT%2FTTfkXdUny%2B3kwwBgatHClTTLJshT%2Bo1gN4l6ixS3%2B5jUZBA6Lp9H9fSzW2xez6T%2Fo%2BnqI3Fa1cisggZ0GqgE7UPtG1oYOgwCjN1G4FIlxLNQu0apwGcIfXiaMzvhm0mp%2FlSMPaZn3MuIN0za8sef18RgG4lAU48HAU8BKTBXh9I2B54C7gTLnzY%2F%2BUMvuezy3yMiU0I4dV558d9knUCL09WSfbFdLdWctdowuMeq%2BptCpch4kzXFPrXv2fXnWeNcWbNWoFusLOQ95IFNKmaVG5p16iPlPeOPDHkUTZN0aZdRak6%2BLfqERRMnNka6c1Gm%2FQj%2F1aKXKwtfXKg1gMLSjqMQGOqUBQQzKhYrjghqVNiADFd4Yfv4qvXrEqm8cssmuyX7LWb1eePVh7DKMgde5f3KqzGyrB8I%2BPwD8iOPzqgghPeiuFZLpuq%2BoZZl6apIk0QgXYEQL%2FGCYdeS7gD%2Fkakz0WWHOPcXWxh1vQejpwmonDRvKKZZpLd3%2BkhKVngYPeB0pvHMVo%2Bjs0UW7lLxp0oCnTbgJT4Up7IS6vKIsoBVKBf7YmXnDUiSc&X-Amz-Signature=0d0be112e059014de44beb68ad5c2416c777785962662e0463b24e1ed66371db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNLEPW7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfd2nss5PAQAERaVzXvExgBX4Qrq6vjeWMfw8sk7BYHAiEAm6qOTV24GTPh1%2B9tDxM1DCVHO5Uri8Fmykzb3sbC%2BwMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9Xwr3I90o0uh9HBircAykWtCDZah4wp%2FMXYuXoI5C5QL4D7QUQuXi%2BoF3OdoVcKDJ3xC0A7dBUXpmGylYihOs9q7WLCFJOLZhaeBC0hXpUX0XHJ221rK8AJolLqjbXDAyTJ1TiI55OQmjqnd%2Btvzu5J5MMu8X9wDa4upRbjgOXv98ogUHx69dtvigUmlJk2eCd0%2BtNVu94dj8MvuPnp0CuaxC67aFe5vQTrQ6HFcBIKsZTpUlfhtvOvEJPEAWbBR2hoBbbvA6L6IMGHGZA2dVTn7fbYjvehCtLdOfW4I320zXlcPQbSZRdv2ORxT%2FTTfkXdUny%2B3kwwBgatHClTTLJshT%2Bo1gN4l6ixS3%2B5jUZBA6Lp9H9fSzW2xez6T%2Fo%2BnqI3Fa1cisggZ0GqgE7UPtG1oYOgwCjN1G4FIlxLNQu0apwGcIfXiaMzvhm0mp%2FlSMPaZn3MuIN0za8sef18RgG4lAU48HAU8BKTBXh9I2B54C7gTLnzY%2F%2BUMvuezy3yMiU0I4dV558d9knUCL09WSfbFdLdWctdowuMeq%2BptCpch4kzXFPrXv2fXnWeNcWbNWoFusLOQ95IFNKmaVG5p16iPlPeOPDHkUTZN0aZdRak6%2BLfqERRMnNka6c1Gm%2FQj%2F1aKXKwtfXKg1gMLSjqMQGOqUBQQzKhYrjghqVNiADFd4Yfv4qvXrEqm8cssmuyX7LWb1eePVh7DKMgde5f3KqzGyrB8I%2BPwD8iOPzqgghPeiuFZLpuq%2BoZZl6apIk0QgXYEQL%2FGCYdeS7gD%2Fkakz0WWHOPcXWxh1vQejpwmonDRvKKZZpLd3%2BkhKVngYPeB0pvHMVo%2Bjs0UW7lLxp0oCnTbgJT4Up7IS6vKIsoBVKBf7YmXnDUiSc&X-Amz-Signature=e646753f1bf36032cfcdc2c75eda25102b01bbd92318536ebf944868eada2331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNLEPW7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfd2nss5PAQAERaVzXvExgBX4Qrq6vjeWMfw8sk7BYHAiEAm6qOTV24GTPh1%2B9tDxM1DCVHO5Uri8Fmykzb3sbC%2BwMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9Xwr3I90o0uh9HBircAykWtCDZah4wp%2FMXYuXoI5C5QL4D7QUQuXi%2BoF3OdoVcKDJ3xC0A7dBUXpmGylYihOs9q7WLCFJOLZhaeBC0hXpUX0XHJ221rK8AJolLqjbXDAyTJ1TiI55OQmjqnd%2Btvzu5J5MMu8X9wDa4upRbjgOXv98ogUHx69dtvigUmlJk2eCd0%2BtNVu94dj8MvuPnp0CuaxC67aFe5vQTrQ6HFcBIKsZTpUlfhtvOvEJPEAWbBR2hoBbbvA6L6IMGHGZA2dVTn7fbYjvehCtLdOfW4I320zXlcPQbSZRdv2ORxT%2FTTfkXdUny%2B3kwwBgatHClTTLJshT%2Bo1gN4l6ixS3%2B5jUZBA6Lp9H9fSzW2xez6T%2Fo%2BnqI3Fa1cisggZ0GqgE7UPtG1oYOgwCjN1G4FIlxLNQu0apwGcIfXiaMzvhm0mp%2FlSMPaZn3MuIN0za8sef18RgG4lAU48HAU8BKTBXh9I2B54C7gTLnzY%2F%2BUMvuezy3yMiU0I4dV558d9knUCL09WSfbFdLdWctdowuMeq%2BptCpch4kzXFPrXv2fXnWeNcWbNWoFusLOQ95IFNKmaVG5p16iPlPeOPDHkUTZN0aZdRak6%2BLfqERRMnNka6c1Gm%2FQj%2F1aKXKwtfXKg1gMLSjqMQGOqUBQQzKhYrjghqVNiADFd4Yfv4qvXrEqm8cssmuyX7LWb1eePVh7DKMgde5f3KqzGyrB8I%2BPwD8iOPzqgghPeiuFZLpuq%2BoZZl6apIk0QgXYEQL%2FGCYdeS7gD%2Fkakz0WWHOPcXWxh1vQejpwmonDRvKKZZpLd3%2BkhKVngYPeB0pvHMVo%2Bjs0UW7lLxp0oCnTbgJT4Up7IS6vKIsoBVKBf7YmXnDUiSc&X-Amz-Signature=c9a89ec14a06f25cc64c3999ddd234f2b1618b2db07b59929e311e1057c7d9f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNLEPW7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfd2nss5PAQAERaVzXvExgBX4Qrq6vjeWMfw8sk7BYHAiEAm6qOTV24GTPh1%2B9tDxM1DCVHO5Uri8Fmykzb3sbC%2BwMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9Xwr3I90o0uh9HBircAykWtCDZah4wp%2FMXYuXoI5C5QL4D7QUQuXi%2BoF3OdoVcKDJ3xC0A7dBUXpmGylYihOs9q7WLCFJOLZhaeBC0hXpUX0XHJ221rK8AJolLqjbXDAyTJ1TiI55OQmjqnd%2Btvzu5J5MMu8X9wDa4upRbjgOXv98ogUHx69dtvigUmlJk2eCd0%2BtNVu94dj8MvuPnp0CuaxC67aFe5vQTrQ6HFcBIKsZTpUlfhtvOvEJPEAWbBR2hoBbbvA6L6IMGHGZA2dVTn7fbYjvehCtLdOfW4I320zXlcPQbSZRdv2ORxT%2FTTfkXdUny%2B3kwwBgatHClTTLJshT%2Bo1gN4l6ixS3%2B5jUZBA6Lp9H9fSzW2xez6T%2Fo%2BnqI3Fa1cisggZ0GqgE7UPtG1oYOgwCjN1G4FIlxLNQu0apwGcIfXiaMzvhm0mp%2FlSMPaZn3MuIN0za8sef18RgG4lAU48HAU8BKTBXh9I2B54C7gTLnzY%2F%2BUMvuezy3yMiU0I4dV558d9knUCL09WSfbFdLdWctdowuMeq%2BptCpch4kzXFPrXv2fXnWeNcWbNWoFusLOQ95IFNKmaVG5p16iPlPeOPDHkUTZN0aZdRak6%2BLfqERRMnNka6c1Gm%2FQj%2F1aKXKwtfXKg1gMLSjqMQGOqUBQQzKhYrjghqVNiADFd4Yfv4qvXrEqm8cssmuyX7LWb1eePVh7DKMgde5f3KqzGyrB8I%2BPwD8iOPzqgghPeiuFZLpuq%2BoZZl6apIk0QgXYEQL%2FGCYdeS7gD%2Fkakz0WWHOPcXWxh1vQejpwmonDRvKKZZpLd3%2BkhKVngYPeB0pvHMVo%2Bjs0UW7lLxp0oCnTbgJT4Up7IS6vKIsoBVKBf7YmXnDUiSc&X-Amz-Signature=5bdc041fae1b49a4f21cc02f6a3a7924ec4e0b026baa869e7d2539d4e925e6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNLEPW7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfd2nss5PAQAERaVzXvExgBX4Qrq6vjeWMfw8sk7BYHAiEAm6qOTV24GTPh1%2B9tDxM1DCVHO5Uri8Fmykzb3sbC%2BwMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9Xwr3I90o0uh9HBircAykWtCDZah4wp%2FMXYuXoI5C5QL4D7QUQuXi%2BoF3OdoVcKDJ3xC0A7dBUXpmGylYihOs9q7WLCFJOLZhaeBC0hXpUX0XHJ221rK8AJolLqjbXDAyTJ1TiI55OQmjqnd%2Btvzu5J5MMu8X9wDa4upRbjgOXv98ogUHx69dtvigUmlJk2eCd0%2BtNVu94dj8MvuPnp0CuaxC67aFe5vQTrQ6HFcBIKsZTpUlfhtvOvEJPEAWbBR2hoBbbvA6L6IMGHGZA2dVTn7fbYjvehCtLdOfW4I320zXlcPQbSZRdv2ORxT%2FTTfkXdUny%2B3kwwBgatHClTTLJshT%2Bo1gN4l6ixS3%2B5jUZBA6Lp9H9fSzW2xez6T%2Fo%2BnqI3Fa1cisggZ0GqgE7UPtG1oYOgwCjN1G4FIlxLNQu0apwGcIfXiaMzvhm0mp%2FlSMPaZn3MuIN0za8sef18RgG4lAU48HAU8BKTBXh9I2B54C7gTLnzY%2F%2BUMvuezy3yMiU0I4dV558d9knUCL09WSfbFdLdWctdowuMeq%2BptCpch4kzXFPrXv2fXnWeNcWbNWoFusLOQ95IFNKmaVG5p16iPlPeOPDHkUTZN0aZdRak6%2BLfqERRMnNka6c1Gm%2FQj%2F1aKXKwtfXKg1gMLSjqMQGOqUBQQzKhYrjghqVNiADFd4Yfv4qvXrEqm8cssmuyX7LWb1eePVh7DKMgde5f3KqzGyrB8I%2BPwD8iOPzqgghPeiuFZLpuq%2BoZZl6apIk0QgXYEQL%2FGCYdeS7gD%2Fkakz0WWHOPcXWxh1vQejpwmonDRvKKZZpLd3%2BkhKVngYPeB0pvHMVo%2Bjs0UW7lLxp0oCnTbgJT4Up7IS6vKIsoBVKBf7YmXnDUiSc&X-Amz-Signature=1f38b5e24743107cf14e95051f1e9649319ee874015c42d056d0682199b70788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
