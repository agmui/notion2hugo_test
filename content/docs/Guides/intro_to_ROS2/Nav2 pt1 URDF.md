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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=4aa13243764fed2c30a5e7b6ffbe3b199bed2276dc358fe23573b5bef27db785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=8254f2dd509de71b4427f97c8197937175887d1ad7313515e570510201cf56e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=2b25a45d8ec74003f520d20ee3aa391dca4b3003a15bc7d980097cfa4004fa5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=f8ca3ff45d6b88b081ef38017ac32432f9e371927c4704884408468f536d6dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=81f0e25e9b30eadba4efc0e225f82c38005a8d2ea507487ff310cb8aef629558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=93a54c7549bb890a0474f2efaf57077845259d179960901a0ce8ab2c663613bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=61e444aed1ada01e139dae5ce696d14a6f0a1fbafd9cb31b427e93083aef122c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=a66d991afd7392e0d04c852568b95ff0096373f74f83ffe9ccfd041698164da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=19597aac9862024e20293ed2196b403a4ad7ed2d4f317c6228375c82b00ebb16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=1c6c07b99cbd3b05b963ed10d96268f1c96f53132a104f1d50bb318c50e3051d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=520f6f7d27946648ac101895d613e1e1de1d2be45393597a2feb9c5ea0ccee37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=0ff0faa81caf703e5c28763400c091d4aa20c30651de0559c1f549dc277579bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=96d558906965333f64838204cf6ecf84a78ed104106d042914f6ac91da05feef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STERUJ5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIDAD2sS%2B6LuMTAcjhN2DcV4e%2B%2BlI9SMjdykG8zn3jb6tAiEAp3W0RGEWfrTLHWDfowZtOAmIDbNNxh6i%2FT6IVcr4fbQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAXQoTnFTpHgQdmUNSrcA1mE5mHShKw631FGZmLugfIxLi85v8yeqmOb4Q3zGwFB835t%2BNV5jynp%2BcmcxgFRAWwfO2od2WUalVA1m3FGQ7KBFU3V0roy0JLAjNVZhgjpx03ZLRY%2BMbSwfxGeHPpBkUum7DLkZGEHu1M5tPrOR%2BBs1Qo7so8llHGooBMrH%2BeWzur88GnGj%2Bwbj5wNqoHaoPHlxIjDmPaPwedm1A5LmCt2Od0tlTVKjW8HFJw%2BEQiRUIaxu3q7R8UvV5cYkHDVbQz9HPrB2VIjsW979REYNnqEFl05aL7RQeRa04XwB2A3wZmViSWHypqrndlQPlssDbCbkWxAL9%2FdzDB9OOnN6rdaCR2d6jUL%2BLZBsFNvLLv6Ho259F4MNQ8Eot2nllsHfaggzRWtxX3QeVK6dfWJSssiYUNW1%2F8RKXmN6Iagp9eOEWoYcPtZf%2BvU%2FwQiUA4iWAXQ2d8VaXy7zR%2BXpVAI%2BmFxOfmzItKVSx%2Fp8R110jrwgEXjPzy67O8cC6RTOtdrTbOnJes8pebYwwB4s5OYlQ9NmiVQdWxBRt0Vv%2B7Ad%2B2R%2FFdo44KpPkZL4ZsLqOyGEkhZlaWlLtKmjZejJnSPDjM0z79K641H5sbNAnMgHH89aDIBCkGfiXemSsScMOG6lsQGOqUBUVeSznQuGkpF7MHPYgJU0%2Bv9ESdp6wWzTuq8rcRgL83vcJNB040v5%2B2kuQXSYDqcQkEzdMCbt4GKAzboA9vWYoF3ShHWWWEZCs6OXUe0QtKgVfbQZuMZ3gaVEdSiE1cKUVPTnh2MTfeKeRYYN7Nzd0Vn1X1%2Bwd%2BU8it2mR48fKJHg0MmkC%2B46lUwpLN8HSL2SbFq8RPTkLQQoDm7m3iIy%2B2xde5J&X-Amz-Signature=a422590f490b7a75f2d6250fecfaf726106ebd17441e54687f3c43fbdcf5d2ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVIMPNE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHtAr6zOVr8wqfJR34SUNZnFyyCSx70n8BebLwmZwOK%2BAiAvoGVafqWS7qEHcSQ0aWnK7gen1QdINrQRF2f%2FZqVXoSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0cwwcO6Q39%2BWWZB%2BKtwDxA6EP9uSXRXng4uaXCpfW94z%2FubAESJChOVBnU3pp4YSPbaOW9aYUBlHKBy%2FZS4aY6hM7D4%2FNpjML9aTMNGGPtr4Zni0Qd3F3koXf%2Bq9jySO1Sm%2Bysqc9JJewCigblcbISxPEzqq0KBF2Gtgw27WYZtKZZsnqmo6z760K1%2FYXpaQ%2BVGEnB523uPPxf5vfp9nJfDW%2BY17YojVN9YwoXZehImaC18WUM8RR2dvi7hoZzxpGbSUuc4abY2P51vcvjDjKfjJ4OjtL75hsABsNhu4js2LxVZIkn7S5aW0QljoayHxQpB2WTsEzGFAysgQjoHLMSFnuX7c742Q3XH6WekReIztiElJNVJTWPVrg1NXBcOD4TDwr96PWC7w6fwzqo3%2Fmol6dUesdy6tIv3%2FPvqODJJ8%2FRRhUnhg54XfwmCgPirT7zbDKtgCvUncxMEc%2FCnLzxhiWQAx%2F17UL%2Fq4VpSl4bEYacYO3CiiRQyPxTuNtdqO4w6i2yRzofKsb7WVmAfKHxF7NnDXNOSJ7U3KrVT9EtG%2BBzwxH5TepjnBBTKYTHfPVzrSkx6liSsyfd4AuBpoXgUFlmVmEpbK0j7eaLtLNFCH7BYOSQb8feaftl7YWFFu%2FDCKcSdnvCy48l4w1LuWxAY6pgFEmHVDO2uyEXzfjj2%2BfSqlS0Llx%2Bu%2F%2BaJYGsLLFR4DoN4MKNk565%2BxK%2BQnNV8nyFNdDX3rHeIYP2Tj0lKI9TM04dQrSBNxyxd48Uraaex4AUDZQ0V5zg3qL6fmsy1n3tuFAcEhZ1zOk9sni2S5YBiucSG4TH5C%2Fw9eGKyTSwKmgdkRkIcr%2B9Fxes1ExjrwcCrzRgdBXyOek3%2B9s%2FJlsDoj2amugrCB&X-Amz-Signature=3ab6db8924a060f6ab5aea9a27a5181fc78b232b9d2bed2b61fbbbf882690903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVIMPNE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHtAr6zOVr8wqfJR34SUNZnFyyCSx70n8BebLwmZwOK%2BAiAvoGVafqWS7qEHcSQ0aWnK7gen1QdINrQRF2f%2FZqVXoSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0cwwcO6Q39%2BWWZB%2BKtwDxA6EP9uSXRXng4uaXCpfW94z%2FubAESJChOVBnU3pp4YSPbaOW9aYUBlHKBy%2FZS4aY6hM7D4%2FNpjML9aTMNGGPtr4Zni0Qd3F3koXf%2Bq9jySO1Sm%2Bysqc9JJewCigblcbISxPEzqq0KBF2Gtgw27WYZtKZZsnqmo6z760K1%2FYXpaQ%2BVGEnB523uPPxf5vfp9nJfDW%2BY17YojVN9YwoXZehImaC18WUM8RR2dvi7hoZzxpGbSUuc4abY2P51vcvjDjKfjJ4OjtL75hsABsNhu4js2LxVZIkn7S5aW0QljoayHxQpB2WTsEzGFAysgQjoHLMSFnuX7c742Q3XH6WekReIztiElJNVJTWPVrg1NXBcOD4TDwr96PWC7w6fwzqo3%2Fmol6dUesdy6tIv3%2FPvqODJJ8%2FRRhUnhg54XfwmCgPirT7zbDKtgCvUncxMEc%2FCnLzxhiWQAx%2F17UL%2Fq4VpSl4bEYacYO3CiiRQyPxTuNtdqO4w6i2yRzofKsb7WVmAfKHxF7NnDXNOSJ7U3KrVT9EtG%2BBzwxH5TepjnBBTKYTHfPVzrSkx6liSsyfd4AuBpoXgUFlmVmEpbK0j7eaLtLNFCH7BYOSQb8feaftl7YWFFu%2FDCKcSdnvCy48l4w1LuWxAY6pgFEmHVDO2uyEXzfjj2%2BfSqlS0Llx%2Bu%2F%2BaJYGsLLFR4DoN4MKNk565%2BxK%2BQnNV8nyFNdDX3rHeIYP2Tj0lKI9TM04dQrSBNxyxd48Uraaex4AUDZQ0V5zg3qL6fmsy1n3tuFAcEhZ1zOk9sni2S5YBiucSG4TH5C%2Fw9eGKyTSwKmgdkRkIcr%2B9Fxes1ExjrwcCrzRgdBXyOek3%2B9s%2FJlsDoj2amugrCB&X-Amz-Signature=e80bd7d98901379c2440b8c1e0cfb5dd747b100ec358a28ae18cb69459c08641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVIMPNE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHtAr6zOVr8wqfJR34SUNZnFyyCSx70n8BebLwmZwOK%2BAiAvoGVafqWS7qEHcSQ0aWnK7gen1QdINrQRF2f%2FZqVXoSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0cwwcO6Q39%2BWWZB%2BKtwDxA6EP9uSXRXng4uaXCpfW94z%2FubAESJChOVBnU3pp4YSPbaOW9aYUBlHKBy%2FZS4aY6hM7D4%2FNpjML9aTMNGGPtr4Zni0Qd3F3koXf%2Bq9jySO1Sm%2Bysqc9JJewCigblcbISxPEzqq0KBF2Gtgw27WYZtKZZsnqmo6z760K1%2FYXpaQ%2BVGEnB523uPPxf5vfp9nJfDW%2BY17YojVN9YwoXZehImaC18WUM8RR2dvi7hoZzxpGbSUuc4abY2P51vcvjDjKfjJ4OjtL75hsABsNhu4js2LxVZIkn7S5aW0QljoayHxQpB2WTsEzGFAysgQjoHLMSFnuX7c742Q3XH6WekReIztiElJNVJTWPVrg1NXBcOD4TDwr96PWC7w6fwzqo3%2Fmol6dUesdy6tIv3%2FPvqODJJ8%2FRRhUnhg54XfwmCgPirT7zbDKtgCvUncxMEc%2FCnLzxhiWQAx%2F17UL%2Fq4VpSl4bEYacYO3CiiRQyPxTuNtdqO4w6i2yRzofKsb7WVmAfKHxF7NnDXNOSJ7U3KrVT9EtG%2BBzwxH5TepjnBBTKYTHfPVzrSkx6liSsyfd4AuBpoXgUFlmVmEpbK0j7eaLtLNFCH7BYOSQb8feaftl7YWFFu%2FDCKcSdnvCy48l4w1LuWxAY6pgFEmHVDO2uyEXzfjj2%2BfSqlS0Llx%2Bu%2F%2BaJYGsLLFR4DoN4MKNk565%2BxK%2BQnNV8nyFNdDX3rHeIYP2Tj0lKI9TM04dQrSBNxyxd48Uraaex4AUDZQ0V5zg3qL6fmsy1n3tuFAcEhZ1zOk9sni2S5YBiucSG4TH5C%2Fw9eGKyTSwKmgdkRkIcr%2B9Fxes1ExjrwcCrzRgdBXyOek3%2B9s%2FJlsDoj2amugrCB&X-Amz-Signature=be3a768b6acf7bc6d8df246f0550898d719fbda2338752d5c6f7418d3f0df650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVIMPNE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHtAr6zOVr8wqfJR34SUNZnFyyCSx70n8BebLwmZwOK%2BAiAvoGVafqWS7qEHcSQ0aWnK7gen1QdINrQRF2f%2FZqVXoSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0cwwcO6Q39%2BWWZB%2BKtwDxA6EP9uSXRXng4uaXCpfW94z%2FubAESJChOVBnU3pp4YSPbaOW9aYUBlHKBy%2FZS4aY6hM7D4%2FNpjML9aTMNGGPtr4Zni0Qd3F3koXf%2Bq9jySO1Sm%2Bysqc9JJewCigblcbISxPEzqq0KBF2Gtgw27WYZtKZZsnqmo6z760K1%2FYXpaQ%2BVGEnB523uPPxf5vfp9nJfDW%2BY17YojVN9YwoXZehImaC18WUM8RR2dvi7hoZzxpGbSUuc4abY2P51vcvjDjKfjJ4OjtL75hsABsNhu4js2LxVZIkn7S5aW0QljoayHxQpB2WTsEzGFAysgQjoHLMSFnuX7c742Q3XH6WekReIztiElJNVJTWPVrg1NXBcOD4TDwr96PWC7w6fwzqo3%2Fmol6dUesdy6tIv3%2FPvqODJJ8%2FRRhUnhg54XfwmCgPirT7zbDKtgCvUncxMEc%2FCnLzxhiWQAx%2F17UL%2Fq4VpSl4bEYacYO3CiiRQyPxTuNtdqO4w6i2yRzofKsb7WVmAfKHxF7NnDXNOSJ7U3KrVT9EtG%2BBzwxH5TepjnBBTKYTHfPVzrSkx6liSsyfd4AuBpoXgUFlmVmEpbK0j7eaLtLNFCH7BYOSQb8feaftl7YWFFu%2FDCKcSdnvCy48l4w1LuWxAY6pgFEmHVDO2uyEXzfjj2%2BfSqlS0Llx%2Bu%2F%2BaJYGsLLFR4DoN4MKNk565%2BxK%2BQnNV8nyFNdDX3rHeIYP2Tj0lKI9TM04dQrSBNxyxd48Uraaex4AUDZQ0V5zg3qL6fmsy1n3tuFAcEhZ1zOk9sni2S5YBiucSG4TH5C%2Fw9eGKyTSwKmgdkRkIcr%2B9Fxes1ExjrwcCrzRgdBXyOek3%2B9s%2FJlsDoj2amugrCB&X-Amz-Signature=44c0a358588bf4469d0201091b547c7ef9539995fccdbdf78dd10a55b9e0c190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVIMPNE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHtAr6zOVr8wqfJR34SUNZnFyyCSx70n8BebLwmZwOK%2BAiAvoGVafqWS7qEHcSQ0aWnK7gen1QdINrQRF2f%2FZqVXoSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0cwwcO6Q39%2BWWZB%2BKtwDxA6EP9uSXRXng4uaXCpfW94z%2FubAESJChOVBnU3pp4YSPbaOW9aYUBlHKBy%2FZS4aY6hM7D4%2FNpjML9aTMNGGPtr4Zni0Qd3F3koXf%2Bq9jySO1Sm%2Bysqc9JJewCigblcbISxPEzqq0KBF2Gtgw27WYZtKZZsnqmo6z760K1%2FYXpaQ%2BVGEnB523uPPxf5vfp9nJfDW%2BY17YojVN9YwoXZehImaC18WUM8RR2dvi7hoZzxpGbSUuc4abY2P51vcvjDjKfjJ4OjtL75hsABsNhu4js2LxVZIkn7S5aW0QljoayHxQpB2WTsEzGFAysgQjoHLMSFnuX7c742Q3XH6WekReIztiElJNVJTWPVrg1NXBcOD4TDwr96PWC7w6fwzqo3%2Fmol6dUesdy6tIv3%2FPvqODJJ8%2FRRhUnhg54XfwmCgPirT7zbDKtgCvUncxMEc%2FCnLzxhiWQAx%2F17UL%2Fq4VpSl4bEYacYO3CiiRQyPxTuNtdqO4w6i2yRzofKsb7WVmAfKHxF7NnDXNOSJ7U3KrVT9EtG%2BBzwxH5TepjnBBTKYTHfPVzrSkx6liSsyfd4AuBpoXgUFlmVmEpbK0j7eaLtLNFCH7BYOSQb8feaftl7YWFFu%2FDCKcSdnvCy48l4w1LuWxAY6pgFEmHVDO2uyEXzfjj2%2BfSqlS0Llx%2Bu%2F%2BaJYGsLLFR4DoN4MKNk565%2BxK%2BQnNV8nyFNdDX3rHeIYP2Tj0lKI9TM04dQrSBNxyxd48Uraaex4AUDZQ0V5zg3qL6fmsy1n3tuFAcEhZ1zOk9sni2S5YBiucSG4TH5C%2Fw9eGKyTSwKmgdkRkIcr%2B9Fxes1ExjrwcCrzRgdBXyOek3%2B9s%2FJlsDoj2amugrCB&X-Amz-Signature=533c277d79b850fe1a81bd22f35fa8b8ee22dc45959a7a4b72ab357ed3b22beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVIMPNE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHtAr6zOVr8wqfJR34SUNZnFyyCSx70n8BebLwmZwOK%2BAiAvoGVafqWS7qEHcSQ0aWnK7gen1QdINrQRF2f%2FZqVXoSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0cwwcO6Q39%2BWWZB%2BKtwDxA6EP9uSXRXng4uaXCpfW94z%2FubAESJChOVBnU3pp4YSPbaOW9aYUBlHKBy%2FZS4aY6hM7D4%2FNpjML9aTMNGGPtr4Zni0Qd3F3koXf%2Bq9jySO1Sm%2Bysqc9JJewCigblcbISxPEzqq0KBF2Gtgw27WYZtKZZsnqmo6z760K1%2FYXpaQ%2BVGEnB523uPPxf5vfp9nJfDW%2BY17YojVN9YwoXZehImaC18WUM8RR2dvi7hoZzxpGbSUuc4abY2P51vcvjDjKfjJ4OjtL75hsABsNhu4js2LxVZIkn7S5aW0QljoayHxQpB2WTsEzGFAysgQjoHLMSFnuX7c742Q3XH6WekReIztiElJNVJTWPVrg1NXBcOD4TDwr96PWC7w6fwzqo3%2Fmol6dUesdy6tIv3%2FPvqODJJ8%2FRRhUnhg54XfwmCgPirT7zbDKtgCvUncxMEc%2FCnLzxhiWQAx%2F17UL%2Fq4VpSl4bEYacYO3CiiRQyPxTuNtdqO4w6i2yRzofKsb7WVmAfKHxF7NnDXNOSJ7U3KrVT9EtG%2BBzwxH5TepjnBBTKYTHfPVzrSkx6liSsyfd4AuBpoXgUFlmVmEpbK0j7eaLtLNFCH7BYOSQb8feaftl7YWFFu%2FDCKcSdnvCy48l4w1LuWxAY6pgFEmHVDO2uyEXzfjj2%2BfSqlS0Llx%2Bu%2F%2BaJYGsLLFR4DoN4MKNk565%2BxK%2BQnNV8nyFNdDX3rHeIYP2Tj0lKI9TM04dQrSBNxyxd48Uraaex4AUDZQ0V5zg3qL6fmsy1n3tuFAcEhZ1zOk9sni2S5YBiucSG4TH5C%2Fw9eGKyTSwKmgdkRkIcr%2B9Fxes1ExjrwcCrzRgdBXyOek3%2B9s%2FJlsDoj2amugrCB&X-Amz-Signature=8db589e0429b6e9236ac2e4d5e09b10da3b2f7f112d21d5319cda22e9db3efaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
