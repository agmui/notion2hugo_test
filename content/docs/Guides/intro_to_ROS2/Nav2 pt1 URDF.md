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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=390f4f2fa57177aceed8b1fb88e8f28f068a3e878d087c2923a3633daadd46d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=028f4e7af8641ab0054385540a2878d6d0de799c2bf7a501e330eb9815451880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=05e6bc4a4508b451dbeb7fc21476ca8df05b8ce0911000c15464b4b90541e232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=8ed06b60b619eca1a4b4ef68fbffb5318c216eaa0c3ba4c5737d85b4bcb99da1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=0ef80452104032bb064d126665a5c34b86c564c5e529e28ab1e4d0b5dbdebb73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=fd440e73edf80d69db6eb79adbf764158352cc6e4639f26c5871e0f41c8116fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=14b73245a441d5495c762a9b640f5685a3f3cad4c9a17592191e27ded0bcffec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=5c29ded83d89c89fdd031e764ae6dea6facf6ee17846598602a563e3f9636c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=d22945e8a76444d5e94549213432fed69b1052a4262b11b3f078188c52e5a0fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=00008a732c7b145f2e6ce7e04271e0481927e4e8c27b4bf085609b56844bdb3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E4MFT6O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFkmQHIYE77qgSNrAVl64Vywwu%2B295qSd3%2B9W8TSVd2uAiBM78KaN72iucnd9MuwERqbtwQgFFARDwbPx%2BQ0mJ1JVir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMoU3P7uyZa45F0s5zKtwDs6LA5q4m1ZjL7LBGuB7jrL91kIXmHVuoByNlBL87PJJE6wqomCfI%2B46H41qfJhQI0sQH4gmeyz9Xm8jgItxcIR25GKzVRzc1JwTRya%2F28FK0xcQLyFBkbTHksWvridOEZ5xDlfLAbCzSbTbetIA5OTNXay9A8%2FvINZ0hm0SXhvBlg%2BovwD26MTCf2H64e1QEF09YakXJBDFzAIPPeglsXOLBLDiiPXF%2BNFYecIYL3X1zluQeis27p26JdY%2B0iaV3MIha0hVXsP1RgCcUTqRo6zp4HI1kxxEG5omNsb6ErrUcEvzPh6r7g2jjBVXlHpCPkOzzm1K9JN%2FIHA6NjWkv1W6WMACjwUg6nXFxyolb1h%2FPRmV26rMOk8JnDp%2Ft4%2FCBlohouygQIK4%2BX9Pi01oFgvV7W8LggwGIVNX8WCERjfJPAPnSQzGZfAF%2FCwUfr5zcw1EIp3MRm%2Bo%2F4Kf7Dk6bqy9A12M2IJ4v2WK255AVOe1jlX7TlRmd60xCQJUwmJVIkbKVU2G8DlL9RUetZHmcAMTS%2FlkBIcvCYBNy2AexslTGd2RcoTxb4M%2FnI3ZANOCVgWxuuFrZrCMy1N4Y%2B2Hf0hcG04ulXpZz7LVbbrXQ95OZteg9x0bR0RSpU2MwkIXNxAY6pgFWRK55JY3fJ3bctcgnfzKPdyJQylL0qs6rCFuVQIVOYrkqy6ytJ2fKkbKTHlRqgOxdlWIJeF%2F%2F2KqbIhN7zI6sL9xiCT8wvBokLKR%2BUERXVi3Soj5pZ9ADH5C32qFxgz8q3mf1gpYOzNz%2FgtU4EOr58%2B8bP6MAWa%2Bl89TYF6Ko1Vp%2BsDH2RQjx37mwAyRaIoWz5zRFGOQq7njfQPzxNT1vLO%2BGKHbm&X-Amz-Signature=46bdc87f862cd0dd6413e16ac83d7621f531d8dbd0a8fe797a2eeda248589069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSJTS3D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGbQJBxCmYgp1LbK7eOrxcFF6QdXi5b1s%2FGpLp6KYdRXAiEA44DvJQLtJv9ENx%2BK5fRlqbNgnXcs8iqD5vvTL46VqfIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFTQzL1COrcdiNVbaircA06hfomyGn6UspYy7iQuYirWxr%2Bwx98Vq6klODgAd%2F%2BFavZTLH65xwcyKiNC9gBkArbb0dOAiqe99EtckxWbp40aZ%2Bz2kZKliV90QVKjSYUc8Wid7a7B6k1IZLGn1%2FaPluDtcQbouwgMIyEMMHj5ttdvRWqrl3mapcxUfXfnK88V3HGjBvZmVwapuHes4Kmq2tGk9Mi%2FqmdS%2BPlR1fsMJQVyNDYOvDKfB1Y00XRtZIP0kADQYNY9%2BfAMfR9AGXbFJ04Ugr30GYqFh7n3wnA89hBOU%2B6jU9VwnCPjlJPvvV7z5yGIzrFUImf%2F%2FPtug8S7wQQrlguzTOZUPdImgZWttoFDG62UWNNv8iaIyBSbJgis%2BvoB6OV9sWsb1HYV6eNpf3JuN5IxNXOrWGyulf397ELHj5Bu3S%2BM8od7AQx0dW5vFP6x6aJYB4bYDyy%2Bm769sLZGR0MyH8d9INDUUcIRYkeldQQg%2Fbio5O77cCvmWKhEjDxsVcreRk84jCqlHH4St%2F7vQ8%2BGYCFkNv%2B1nlOUr7ztkp%2B%2BVA85NFk4gQQ9YQciNXrsbNpqr7rqRcx2MaAJXXi9iujK2qLuahH09JXDyXmltC8Y%2BKv4PcUT1r%2FYrwhs4tjDHCaW5SRBcI6xMPCEzcQGOqUBYLC2AyjNYH2ED5s5kXM0aNOnukMoEI6WDVic3SJo8i9oxAAGAruieyvVc0%2FdteC0ZenjqcOHm1ajGw17vv39ActTxdoc4WXneyNG6%2BvPTxlaUnpqzTHRtX7gawTx14AID7y%2Fib%2BINyXH6yYsm0f2lRn4LiQ2%2B1zTrfhJ0h8ZKvgPJmBp1Win62%2Bw0qQYsB0F7YzTnj5%2F1XKEk68W3XQ3f0TaQ7CB&X-Amz-Signature=8c44692bc9ec735fc47d3067b9671e86e3bd93ef93a455766e6c631f3b3c3c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2GNNRJP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBJKkHp5svXb1D9rOmSEUybU20HUoD9cWkEfxzKhpH2TAiEA%2FpsaRHviEWdILiijRB%2F0fRWGp%2Fvmvpp9OwZGNcakAuwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDENTJbtCVF%2BXLdC58SrcAyJIsvE8uAeLjLzRoYpyFKJ42GeTIcjwtzT818GdHwk4%2BABWaytBLpgqmq%2BYpEvc2PC9llJSBQNMogbAc8fAkuoMOhJllj04jCJXoB06gQAnLYy%2F82ibZZY%2BSFnwfzmGXoNAE78Ez9IAAcMS9OLpYamDHVFMCxsibV%2BeuY2ItiR9fjA0e2bQ9hZC4pCFo13qdZvHDbyTR16NM59JmR33Fb2y3aJYOMlFYcPYaEzeT2uDShcFjLSK4LtkOOvk5bBLFbkEbQ%2B7jz7D4GFLo7r6btxlk2zSdGjseEKZKHEvuvv4UKXaHrtDy5wRiIZ0AWz0qg8olysTm03oJQBXX5l1%2Ff%2F2m9Vx%2BHRSTWM5osbhVkckGpVFShT1hYGFn78ZcrmpFjeorSzoNLPBaA2YcnAMT%2BuHFlS6lLeI%2BItRADt8xxpnaOWiN0oxpi%2Bhs9jwpP1g9u%2BEdxEL6ux%2FC9QTxF3BpYGhgJr%2BeLvBOPFdV3gtnpGDP8Ty%2FaSQLgZ8LAb%2B9BfFPbNjRAATEwSHciqajGZkfVSxzSCtJs%2FOoVy7mvatKuacSdEyIlb57ius4eTNEcjjwVtHrbPGIILy4dS2Tqf9RAdUjmNLx%2BqpNg%2FQNXFb%2BH9H%2FsGYEtW%2B6FfQJgbeMKyFzcQGOqUBl34Z4q77x9RgEtgv2DF2PEfcrmB2y39%2BgspulxXTmqzHEBF4MgtP4x439iOtOLo2ZKY%2BrA6A1fRuAfVJIfZldZUjm9s7Em4br6AeB6tKvT8fKLEr2sdiRUhIjgPz1uOJDwhdrV6zOu6vR%2FYUhyMJnuyfMgLqyhgJxLRGNcc7RIT6FHhpx4NamptfY9zqX5Asgd2vSzPryqGZ3KcLA7ujWX%2FZvZXv&X-Amz-Signature=337fe05772e0dc37b5c913b3de5eceb53358f48565f3a711b6c8e01d8fd2b9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=7baee8496068b343f19081643b71939580fe9cc2e5587bb3b74e2d9f78a5ac26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UX45TQ6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCLoxqF1zYFClV2cIqXRkjnVYeQm2%2F8hZ2j7dsyTJHkcwIgcMYml2qEvBG7%2FUpR%2BQkpjcYe%2BUYvzkD59h3u0eq5pbEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCXLhy7q%2BdRJuLNDYircAwTvnULSAi9%2FYMqJg%2BZzKRmSYeXgbIhJozWmtX%2FJF84L0xbZFP8JngvSAr00anOIUP1CplMv4ZZLnUbBDCPkZGB82j6sueKylAs0wjSik3Fgc%2FGalhYJGfGIUb82I6Wl57czJPTGy%2FDJmfDTZ8jV347eSAlE5sISy3ib4R3VPf9bm1l5Pu2d1K6x%2BG7sZ4Kz1f5x2e1FKc2zD3HU%2BM3n1b9VVIi4072pFu%2Brmh1ARKB%2FTMMTO6DEn3eTrJA%2BhkxMw9ca0WXn%2Fq28zFV%2BA0bJ5YZV1caP99v2UtXD5xCOwlCdAKDeKguWcfrPQh0GRDPQPV6GgEDPufJWPC52oEC2jOJdWcId4GR66q03WAnyL8l28Jzy1i%2F%2BK1Xt2wn3F3Xk02D1QVcMoeVClpKTI887ZR7m7TJj7JpErxFy9fHC8IEoytDCdZ9iHSPIiiX6htFOBgf04jp66rQJounEjeoxc4XCNg2wZzjmNkQqmWGaLUtQHIyNKYiG9iI32XF7Qc6CWi7Ib7KFIsgF%2FFYW435815OQPchklRGTUGZyXrJ4LiXbZCA80MPDYBGvF4G6HaO6LcR1X31Xv6S5HUA6NFDqRxT3fC8zPdwivA%2BFrcxITXtst6qKB8uPKmZkPxljMKOFzcQGOqUBKq3k9oCsEIcF0NEMjB2Ad6n%2Fwf8B%2F8XinHIPsdmZqM7lWjfMtvPry9lK8it9T0B5P7%2B2%2FYbMCq5MatHMxdKv22kIhOIsOzqgNGk5MCdBvGmeqVc%2F%2FMHgEWeX%2BvFOIEDclHTIbwLPb86lL0%2BEbdonJmaCzH0woVWNkwedlH1nwoHOLR9bZSmNazn8dt6bwE%2BkzKmrnJl2lANL2jY%2BeemOWtaey0yq&X-Amz-Signature=9c977017053be6e55e9e4a8378ddf83c7c8ab442e6732c89f0c46328793628b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=db036a8b4ea3573cf89424fe4f2c684d6b5836c32929bd397582d4c275971503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCM7SLQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD6q809mpbidHSWKnsTjy%2By7ypRz1tll5xZ8vJSW05pTQIhAOma%2BfxJK1Q%2BZfh09IhMwEnQM1kxsgVdxg5KTS%2F%2BLOFFKv8DCHUQABoMNjM3NDIzMTgzODA1IgwGjWKVF8e6H2ew%2FXgq3AMHDOktpDXpHsygeKmRsVG8%2F2Qh8I%2BLrsTFGY%2BhqcWJxOUo4Io5HYavaIg52GHoy7NC8xzIN5MQiMU9EKaoAsN0KQSODowAw9Cduzw136EqIp4wpUgGv5RdcX6XNkrcWR6KhpO25NjWBC8y6Av87sCvRP57dq1VmI5cKtR1XtBScC8vsdRzpgQ2ecsst3J2ZzxhnXjH5deYsRD1VeycxXDnZ%2FqxquWvf9D3ch8AQRa%2FAlLYFT1V2NiDKJnWF5N1me2F3T6goQtAc%2BcxujG39bYxQhHB5zjzdyQW5jh03SkvxP2G1pOQU8CxDGItwV5H40XEOm4I9l2b3iqD3dLFMX7AUvloEGxBQg5wc8hTTRJsxKgk5e4RnFq5teITJxeZrCGNi6XH%2FWgTTuaIi%2BeXIM%2FELKkMJNVa16lbWYAAF5KVZDT95koTn6eaFjstucCKfS3eYA4wFGjbLQNBYUQTdGNMlFoFagGU%2FprdjjKXcUxBr6INazp%2FLng0zgEt%2F1YZX1Zt7BPBYeL5CiR8KTg77sHJ%2BSRxVky72JF3y8cuHcyNRtsi6xad6SGlvLlKXAmsHE9hX%2BuCuSHhgMpt2x75IkKDObGVDPV3%2FE%2FbVinhLu1YFLjI7r8q8QOXkqBJkzC%2BhM3EBjqkAcSaVrd9jIve2GK0bKjylJFVaitPRcsCaS6Y7y39ksAtgb2H8IgXNKvhT7Lg0i%2FeRcBT%2B1jAb3vyeerN9jVEI9yVmzxqUYsEk8CJIUKIn1l83%2B7U0thcEH7LGNiLopg2puJlgQKHTHo9Ot7OtpSRYTxpT8QX2nRFE3VqgUXlsIo95S9RNyNV7lNTx51jPEwxbDON2fyvSv83j%2BD%2BUfnxVL4uduoH&X-Amz-Signature=0916aef1166ab6ee5697012091f3f6a60e3785577b4e6161d988ed44b12d5ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=9e5e371b9824a9abef9bd285a1e79aa5541ffa859e39e1bc61e406794f75e2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M4OYY3A%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDOCuWRb%2FH3POfLNCxyfTNPB%2BJSXwjkha4lhj5d07eGwwIhAJmLJf65w7vYXxeKgxDboipHyHKvNryVTkQ4L2a0AuirKv8DCHUQABoMNjM3NDIzMTgzODA1Igx%2BZgVctYTM1%2FIWPAUq3AN4%2Bj2N253hE7AMV%2BHlI9ivNBWgB16WQG3RxCjz0wpYqikavE16X4N6wlVc0OUvLI5YevyIMSWxWBydSyYl%2BydShLKkwlJhMxURYEVtfrziZyT%2BA6QxAGJM0WALNtxKbVk7ekXrPl2%2Fih%2BQhHBGbPvx4h%2BRUGWgNhWQgLZtpvD%2BxgZpqbZKCkzBsbi6eqitffnAHJYMQu43OMKMWp676l%2F%2BCwQOiFV3hlPaO0WQNDmKVaJv3MITcwNoLmf8ik0%2BceXdgjyKdhR6XF5jWnAxc%2BGJ2rzb0pzPtUIGkvKMui8NZgSMlW04LyQwOgwZUJYCiCeMlGrx1yyTiqT2Bxo6r4VEhbU1tWH1q8eZkJsPEkimIohFjuQBf62ZUOBg445DuC8mvDh%2FpMY5NPhypFl2o%2FPCmNCK5PVWhwXwrf38GQLrH91aJCP7BnoZWtrLa1Al6SeL3u1TCXC0jZX6PdQs16gV4%2F7fL2PFMGXnZnYmcmDZ7%2FtFB9hlisxmNmxuniBZQ3l5XiUGjzxKEwq5OV5Z4m6UBc5pFdc2oj%2Fb3%2FgH7s0E79t5PRC5iI8epWT7PmfhbLlrjejrKvv1hwJ3686XkDP6Cq63GqU%2FDpuMGq5tzuQZMgIC2e3Nw4wxfZINTjDShM3EBjqkASr%2FlvSdgwf5rbTx6ky4xXuh61q8FZjo2M22s6lsxow1%2BCZr4QxH03rgSbdZF%2F99s%2BauzA9Mmo5qXHe40jw2kMzxm%2FC8o%2BLL4oXRDZq0arwbkx76lScaByLPqhkNLan95piAXVmNBGbkL8J7H%2BqFqKNUo%2BZYW%2FpMgX5d00UDbF721VvpGL3KflZgK22adX%2FZbO1hI9VEvxQB7QvYoL72sthRjFZS&X-Amz-Signature=b7e39a1301ffbbf7d2e90e21176a1467b6c3d12c7f157f6eaa790d5971583d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=3fefd7db6a03ed84619e76814bfa7d13faeb6a8cb48ce0c701e209d585e27911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CIURVRI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAbu0rJEXe1pF2Mh%2FljHgQx5eAW1cB6lB8zac7GubzSaAiB9VHqVar9VPFue9x2%2F2Mk3qWaQ4jSOsAqEqjGkfv7tXir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM40mpWAVjD9b81lepKtwDjrPj0xfr4YD6fW3Pt%2Bzb9xxW55Y1uTVl9EPZ5z4zRW8y8ANvuPyr24KU3RM0BuA7T8Q95Vkbnc6NsLnRMAgkKPyhf95oadKAjH72cc%2BL52gygrLPFG0ptt1GPI%2BkE9O0zFZOad2ARVXqiyjUIcXk6dbL4Ki%2BW9AQD6UhhHFyGQrzRXAnSA9h423b0SPVJxXRS5VdnliuLTOztnIC1pD3hrQfjqpVscv1K8yiZGspWZqwKO3iO1MTy3ibv39O8BZ3SDCjYCNjH9wSMiSo0kq2idhwsLtKHTF12woJa6NpAgXTh5Qy9J8bgXqKQkDf10CAARoCiIKw9NjidgWikwLZz%2FklFx5Ug%2Fih9zBVWfqwzK0TjmBCEQv4pZb754znUO5kSM0mavCsJeZdar3SHbGPFlmg97s1xEVuZmaykdjP8d5ZxGo%2BMj2cwXcF1L%2F2JJa8ddz%2Fr98J4YT8CApQoV2ukkpQy3cZFP8hKXkt8khnM8x%2FyZeKLQSrq2kfzmv7Se1DGJAq2xkDBcUwKBWqnLqHzyAxFS00JoEL2uC9pv2B2LVF4A3FdV2i88BM7JC1dVxndICDPFkFyhEWulIlWwdABEB9r0Yacy9h5CrotaKZUnI0FvkrWE%2FrmFMORzMwkoXNxAY6pgFEKXTWFiVViDTU%2FLgi0pinWu80BNLnGXuVwel2lQDMlwh9P0G5BMTRpyRHblt1iQZo7JK%2BRILH5oCespSH655a3kQzlcRSY5OCLxNOQEp9phWET%2FLd1%2FP7RiRQMVSQLK4btzm1vdvwpnMoNo%2Fp524oDRHv7TblZtq3OXnIeafLK1sqtjPVIa7Y8HEisGsaXa%2BCpqzcnXob38E83N5pdxyhgDRy5zSQ&X-Amz-Signature=5098922596921d7116f53ba043a32bff960f2f0f0f7d6d733a7a9162b7c55b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DVZF6OV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T122000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCdH8sSxWKixu0xgFwxPIQo5TPy6HaaeRPO6xP3rXGIogIgTM3C%2Fwne2Y38NYEXukO8zge7C%2F%2BNN8xSobm9p2Q0mGoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDF5NMGDQulYtBMSjmircA5LChuHIx7fvJbmeivAh%2FlS7%2F2ypxlSD1v4Z1706YBCqbIyQNSRMBqvCW1Tj6LZYNiddpIglWWDq42XS10y6Bu%2FXqUyM64Ncm115eFdYzszlaDfdqogpUghCiPCgjB6JDvFV0a3KVnoeUXrjkxWnQElmSdV1D%2FRDeVtl9s9riB1SrIlXAXwzn13t0kj%2F3Ic6T87QUlSRmoQZWaE2LKsKTeE2gdMpci0Q7AC8oD1brRdUux41ykLD9GEZrs20kRHVWMqzAPoTbXCGV%2FeFHD%2BK9PQeIB1AqmO3ql4dwERErUlislNHC%2F3btErDd8vjWWIbC3xTm7BpV7AEvketVQ0GFpwabQUxPnu8EpD8Uz%2FDqHdfjlIWOpGLXLs%2FlBoLF6u9A3uyxKihSKOwidSSXbVwv99yo3QhqqHtBoE68iS7xemSNPvUf3NRVNDh9LuUYFC3NgN%2BtnyevGzl4wWNPb%2FG6uOHII8Gn19BJtvBXEPnHzqqzwhBF%2FmRr3HW%2BXSU9x%2BS5n3qBiHXRONbEl2G14JN2PPbePsNifBuCxRszeT%2B5LZyWEH%2FNlBxNUsX9AavXEIwGCbBUcllO2R1s%2BojjjxN3yvcRM4wAtt0E6PcNkGNhNV1G5Lc4lbjKzdHyC2mMJyFzcQGOqUBZ9H6OqT%2FTslefG7lt0bNAFPSyXoGqoiNo498mTSH7wVEmzQG1fcfK4ajbE0YkywkWXmqQZMZbQzM0hVfpBY5aeb5cl9%2BDT8PwhaKQEeRkp%2BPbQfGki3nIXHzYXc36iiFjDE9qiFI4XMFNGMX1EOk8GjdigE4BobO7M5K3Np4MGyLoOLkSAUxpvRy0QEWHsAXIHu5tt9hRro%2BZW%2F6VNKWy6SYhMu1&X-Amz-Signature=d1f6b6e8668603558c2f9f2c741c5cb75818b44c9b2a720b64553498015e60b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYVE4ATS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T122002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGKVoTB87R6qY%2Fwtyp26glEUHyPdioRc5TJe9ulzlQ6SAiEAkqej0iD4Q4rxiVyOAm4Kg3VyA8xv3LAWyR8pw18cFAsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDM9HgxL6TkVnCUt01CrcAzV2otxKy3aZJWrD0n6KRT1AE7u1XiW0Nf4wA4u%2BZ0rFijBxQ9NYnbtYe%2FqKRZxhPflETbj9HUyVctieIFf1VSGxdPKhq2IE1KH%2Bls15%2BZwVakZdIbBd8MAc2C7KTunvH3EIfq76fzgs9YO3Ie6UNgJhyjIfyNlfYiX%2FjxzSss9hRWc9HFVxww1WooYIEr7AfFIzMvPgcyqgKTxjzOp5Sn4t5m163PH5J%2F1MD3RPBMFQ1ZRtXq0GAYWNRR7cTKDZ4OGD19aHT1DUthRqSQp3j13pv8tWqWMVdsNurhZC42p5jsDIs17vpaSDh%2FhoYl8B447xtfjPhOTBB7sShfbnyYgCsNDHwS63HDzZsSkH6rO8v1MI2v%2FPQVkAIALjv5FQFtsGe4uEkWx1HQ8naXm5ywTXlgaRX90RzyuGvroPwAFpJZS%2BKp9a3XBM46PSHkBwEdhki0%2Bn5yj%2BG0Yq5QJ0J1mqvak1vBMku28BlHAFt27XIMoDphcxYC6jzgrKjGg8B%2Bt5Mz86FUF%2F60dSht5G4eJZbSO0GGPnpkOQUacG2Yf1RUV8mgtbRGZE5JLcMV2MWjIvonczT1zGzTfG95Clz0uhMoheIwNbyiFZs7Xkg%2BWp4nYMoNerTIwqYs04MK2GzcQGOqUBl%2BGtosve7Ths50nSNtC8uFKTF1K0SZ%2BKOpPaLwYJCMnK%2FJvH33%2Fyjr7gGjmNVIQROBfnhvrRyYGgnACLka%2BcFqL6Eu1SQXhPaU%2BExjWRnkqnUn1%2BtPKoj7ymrKtfIYpAdJbzbz2cI2nEOlD3SjAVz8doqNrHo%2F%2BIfaZg56nXWSXVRbXGIXSpU42Dc908rOGZpu73WHQkO8ZBfi3Qi9DeBuhCsLIK&X-Amz-Signature=55548e273b0c2437c6023d51755dbf3d12d6a0b22dd82baa3146623209b55eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILPY6J4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T122004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBmSdRF9CwYKjLvaENoW5hr1H3SqJK3vvmBscMGkCVw6AiEAjzmRs15sVwyJTYJOtwPw9qvT%2BV0dTK2tcagz1fIZfvgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJNUPfxbbkplqP0KbCrcA2yzSa4Je%2BPFBLrQeHmNI%2Fqa%2FuCtYSokfXmVhYJDAlpDEasJW3KGvdSMjWnXDLXooIIX0rcoqGcwfvG3CAzL%2BEvlfPMkKXPJzyKeW5PJZ1qsO91Mq9%2F0L%2BXLoIxZMqOkuI5LWMSUQ0css3Jr9exx03K0hTyBt8SreFwQajMGhM3NZxJwz7UasMQXDlZ9%2BDr0lA2sxe6e0QRwA7K3j90LTcYyw3QZFRbDIytfntsz8e9nlKCV5N2t3H6UnltEqUVQnADMRQ9s6fdD2nyj0Z322KuFLjnhVfHeQ0MOZ%2B%2Fm%2FpsmnLl08RaowJBbYhLnkM0O84hzJz7KDHhdfCJbgdxWl%2F5hUAXuOG58sWHw4BI1hQbFfPZ74a1UJXrAIt1Mu7HIbqvnDIeuVhejNQ4X1VT5zMaLxvMq%2FcRc8wJz2%2BeLiiNzBGgR6xK1wxEKLO9XIpuU7eKOD9m5Xs%2Bbdj0W%2Bp4vFgc4yUQwl5Bo33RnXYwPF799hx6806WACVzObsOieawiAHU5vZvRY1d3eXq7uALUaNatWagGma8Nf5qtmJtt0A%2FL%2FhpQmENv%2Bk4724cIXql7rXAXAtEjHuYv1k9kZbrld3Cc4W64Vjzm5DDQ0RENuNhDwbkcTeI6GiUzoOW8MOSEzcQGOqUBEe7FOh1vZvOmjIGIrit85g02GnVp245YCGUStuZcRyuQFKfN3f5pl1PKgZmmSN8W7zSsMjt5GVzpj5nZn95kZ91Vx%2Fln1kpH2kNM5GWa06n5ac8uUY%2Bh0ezJgskY%2B1lf4HCRiBahgGprso%2BbiIP5jCqxPUbxjlAHovvq8xC5YYwAfAYiOapXF5XkFfhmD1%2Fkt47Uk2UQRzuksVfiiJweNZDHTqzW&X-Amz-Signature=a0d20f8fa13525c9cf0f1f7a3f1a199fa93d7c58f712a34286dfcaf14cd089c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HXXKKZH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T122007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGqQE13S8XkFcS3tlxcJsxITQhbGy92sDYJOBvWfJJWbAiA9M%2BKdiycoAd7YhnJP4v2VVEeYJbDKkTJBu0vsFDevyCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYhK8PTnf9xClMYCVKtwDtkNJCBwk1m5Js2B37gBrvS1qFGWDqSLSVocqVKf60wlbaD%2FaE6JIkRxCMZxMg9jbaWzAyIUH%2BmDZgoG4NPeQHTtODy6qdrcJqsQLnKR4255SiBIiEbcPOWkeeR6JL%2B%2BgKG%2FSbMpewUEt4gkXQlv9jNy8%2BBUEouMAHYuxfe1SnUuP%2B4%2BKRRCGlkHM2a125eYZuRwnOO3QFeVPwHG4w7IiVwgIp1NnqHCpn71WE1pP6hOviXUZ2zzFtZIhSwGWR4JelCq6xzWvsXkQlNpsiKUmCz%2Bb52hM3GQV2RvxGCDkT7GWX0BwCh%2FaXzBHKFZwxS5NsyPW45LQM9z6LkDtNoyNbDsQUU7axPVjkEUHsFrn2DembPwk1t22ROa9Vkr5Q4ljXZHbkyYrScT5hbTE1fOkHb5OGyRd9MvG277o%2BMzRaSCOD6Apcprz2iAfV89l6wOe4ygCAmTiOxAXk6eRcJ3bW0ZA3PBj7beqCm%2FMO%2F1S8mp9eE2B0U5r1gdwh54f3wGTlr26utcfyo72hkc%2FbbwGwC35oRPmcJxrnRg7ql00kvU6p3BMcEZybiHrD%2BO7VaWD9ZVwYJkAL9ZxwpHYCmHMPVis9oSJ%2BjtSuClmdcDO6X6vlJGcqrM82gxtcuEw0ITNxAY6pgFW4Q%2BvctNdX%2Bekrz204rCGv638178lVYa4v28NHLO8FM7%2FTLXJX4aE6EslyNsIagvFArC%2BZ37hsKTpk3ZE6FTcTOUsCjqWiy4kOL8XQ9d1cDPuZLsWdYOzakJ56CcZDDEjv3SPI1%2BbCtL%2Fa%2BNDcp1P8V7CepHAgQCBnS47oMnv87%2BlH0%2FPkM%2BUJ0sPUv%2FSZlnR7W%2FO6XHc14Okb8NhHfVtaiBnHqM6&X-Amz-Signature=7ef6902efa4702ce77da18e319b99a438270d0e2b96c76bc7affc85eb25a0740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=8ab0c27cd6029b4b7725d875c24ea3222cf6b6298d3696381e66756bb1b0027b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAN55JI6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDhzE8TU3uTwByIjQP74T%2B2MobWwPGvWikqnmDIf7OZ6wIgHCDD5atnugQZet%2BpMd01HFuLo3xSQnu8nzZXWdeYhbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE%2FGYTGuZU%2FCEtHW%2ByrcA%2FBK662KcainGnVKoLB8mXrSNsHsbD8ERGtcU58bEucSPCXDgYIWJ4gr9RKkr5jK%2Fx3o5ckmaZIvw8n3zhZm8gCWxlKDyfZVI1GqYj5zVS9Kfy%2B0ERMOkO%2FfXFnaaN17EPMPab9%2BayHOd5ISuTwOrVoaQJRba85oN6%2BpajcHwnAikS86vWMu6Ia9s91jceDF6wTfn30h1H0sKJxaz8yGv896e%2Bs%2B%2Bzl2V%2FjSPHUHio28O612RLNWAJ6Agc2Oz9UftOkuTO50RxGk5eGciG%2BPL5boS4LGmfeSKGIPcZ4GZq5DIoZlQbtPGEra85pu1ZoI5gssDa%2BRajgBvASpN288rtKTnFTMAeQbO8b9MevN44EMyAoGSn5LnEFe97DSK5YYR98owmueZGThaWXK7qAqMXEmTUvT5nrpmKzWj%2BaAIVzQ8cMRzpjz%2FhHL%2B87UUSIDuHMvNpKwCsNWAzHIPIbG%2B14%2BzLcPygpzj7hePScsyDc2fc7HjF5HGFyeN%2BlkelgDBDERGwDo8cnAf9p4%2FYzhNmxkQZ1OjMKLAtCeBcHbVSOca5kDGQ4SDH%2BFZQ3qNyOZePldReO2YMMRZionTW2bcqGtrmIR53JOCrLVDVksXtDfKh%2BxRc0erLmXXxPuMMKFzcQGOqUBeKsupXjEjS%2FVC5bqc5OVbWTj%2BFbJN1pNpVxPSqbmSaFZ07kTc%2F1ulytdQvFT9r4U9I0QRRt2cmGDZNumXVJSregxCZ3dw72%2BxYhj8Q0i7NvHlaHl%2FshVvMs9H97ZCbnSlPdtU%2F6qqN8wf%2BsoUjiVfzcZDImBrY%2FUcvs9Ee0PJN8y1PNrx6snKOAacZ0iqPvK5%2F81DwHDpWU9K5ZpMVqInuYkQhla&X-Amz-Signature=ec15124172ae96a1bb96e88ad2d72724121d0332d5596ae15ce093c2baa6142f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBA7ZRP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC60p6zj7wchi10fGeC2HyDLPPJymhf3vDP3CxZ8blxuwIhAMYqucHqmdY6dp40hxcfcnkdbBFPDrGD3tUEqmqvRTimKv8DCHUQABoMNjM3NDIzMTgzODA1IgyWuT4Rb0M9i%2FCbQ84q3AMZiSHITwz5lnI4DaL0zmAAr3YF0mucLQtfeg3GU2uCeTe5udZyqRICoICgKHJJvN8AIhpTdwUzseaRAzP6NALfKuQ7co5qD4Y9WKljt5rQU4MhNn2RsT%2BKAxu0MICa%2FA1S%2FrsQj%2BgFm9z9IId0mhfO%2F9yORSCSNNZt67iu5WrHgAA7v7SzekofWB4%2FHc%2Ffft368uyuFEHDgydkpMvw5UU4tw2t2vyzz7CPfYmqykq2IpOuW%2Fi1%2BWa%2BK9skMoJ94%2BRFTEvpctw4rJ%2F1VBG7JHhYLZvbSC2C9QskJOmtSNO8yCBXMssm4GdkOxYwmrHIfylQ2FeK6qIix1XpcFBTALkjuV0Lvbz0lAMYN285X9uwZNU86x8xVyYTy9R25XSJ0oGqHlObj6p0IKxyvMEXEz5UCrDcI5vBBzdT6xHVrB25N1JDHBicqKRrwZz%2B28TghumynMjRfxUmFnnoVr76URdyvgDqmGYoKucZsCxfcjOi%2FwC1AGY4r9a0GiESbdCCsrHiNqvDNP0Td926SljW5nX%2BzQr7bNg9lALd%2Bkme4Bo3J15l1eAwaeNnI0UUnUurhF1FYb81%2FYWT1DyunocagV8zj1JRTlP8CjL7IKBQ0cPOsbb6SsPgL%2FvrRE3syDCAhc3EBjqkAYgCjyPrg7QQl0HkH4txCTRElBHx0mPPEk6DUWNEc2oa1y1%2FjGSyNmOD4dVF6FhCTcSb1Kg%2FQYX0e2n7gNIoTsczgvVKboxmDXoPMm2KSJGOPZ0LZTgxYNjgstHFXBN2TgSw8A0m%2FzrpDYz12IvvVnM0%2B4j%2BWmcmq9WYnudiVX5T50O6D87g7jtO7eJYTSect3HJUEASFOPeR93yq8EWo%2BMhGWPE&X-Amz-Signature=24764ce3d3b5531816cbd0535cbabef1535e03051af4633243e28107958638de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBA7ZRP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC60p6zj7wchi10fGeC2HyDLPPJymhf3vDP3CxZ8blxuwIhAMYqucHqmdY6dp40hxcfcnkdbBFPDrGD3tUEqmqvRTimKv8DCHUQABoMNjM3NDIzMTgzODA1IgyWuT4Rb0M9i%2FCbQ84q3AMZiSHITwz5lnI4DaL0zmAAr3YF0mucLQtfeg3GU2uCeTe5udZyqRICoICgKHJJvN8AIhpTdwUzseaRAzP6NALfKuQ7co5qD4Y9WKljt5rQU4MhNn2RsT%2BKAxu0MICa%2FA1S%2FrsQj%2BgFm9z9IId0mhfO%2F9yORSCSNNZt67iu5WrHgAA7v7SzekofWB4%2FHc%2Ffft368uyuFEHDgydkpMvw5UU4tw2t2vyzz7CPfYmqykq2IpOuW%2Fi1%2BWa%2BK9skMoJ94%2BRFTEvpctw4rJ%2F1VBG7JHhYLZvbSC2C9QskJOmtSNO8yCBXMssm4GdkOxYwmrHIfylQ2FeK6qIix1XpcFBTALkjuV0Lvbz0lAMYN285X9uwZNU86x8xVyYTy9R25XSJ0oGqHlObj6p0IKxyvMEXEz5UCrDcI5vBBzdT6xHVrB25N1JDHBicqKRrwZz%2B28TghumynMjRfxUmFnnoVr76URdyvgDqmGYoKucZsCxfcjOi%2FwC1AGY4r9a0GiESbdCCsrHiNqvDNP0Td926SljW5nX%2BzQr7bNg9lALd%2Bkme4Bo3J15l1eAwaeNnI0UUnUurhF1FYb81%2FYWT1DyunocagV8zj1JRTlP8CjL7IKBQ0cPOsbb6SsPgL%2FvrRE3syDCAhc3EBjqkAYgCjyPrg7QQl0HkH4txCTRElBHx0mPPEk6DUWNEc2oa1y1%2FjGSyNmOD4dVF6FhCTcSb1Kg%2FQYX0e2n7gNIoTsczgvVKboxmDXoPMm2KSJGOPZ0LZTgxYNjgstHFXBN2TgSw8A0m%2FzrpDYz12IvvVnM0%2B4j%2BWmcmq9WYnudiVX5T50O6D87g7jtO7eJYTSect3HJUEASFOPeR93yq8EWo%2BMhGWPE&X-Amz-Signature=7f02f623a56b1439627318b72429d4dbeceb72999cfa1a913c25383974138164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBA7ZRP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC60p6zj7wchi10fGeC2HyDLPPJymhf3vDP3CxZ8blxuwIhAMYqucHqmdY6dp40hxcfcnkdbBFPDrGD3tUEqmqvRTimKv8DCHUQABoMNjM3NDIzMTgzODA1IgyWuT4Rb0M9i%2FCbQ84q3AMZiSHITwz5lnI4DaL0zmAAr3YF0mucLQtfeg3GU2uCeTe5udZyqRICoICgKHJJvN8AIhpTdwUzseaRAzP6NALfKuQ7co5qD4Y9WKljt5rQU4MhNn2RsT%2BKAxu0MICa%2FA1S%2FrsQj%2BgFm9z9IId0mhfO%2F9yORSCSNNZt67iu5WrHgAA7v7SzekofWB4%2FHc%2Ffft368uyuFEHDgydkpMvw5UU4tw2t2vyzz7CPfYmqykq2IpOuW%2Fi1%2BWa%2BK9skMoJ94%2BRFTEvpctw4rJ%2F1VBG7JHhYLZvbSC2C9QskJOmtSNO8yCBXMssm4GdkOxYwmrHIfylQ2FeK6qIix1XpcFBTALkjuV0Lvbz0lAMYN285X9uwZNU86x8xVyYTy9R25XSJ0oGqHlObj6p0IKxyvMEXEz5UCrDcI5vBBzdT6xHVrB25N1JDHBicqKRrwZz%2B28TghumynMjRfxUmFnnoVr76URdyvgDqmGYoKucZsCxfcjOi%2FwC1AGY4r9a0GiESbdCCsrHiNqvDNP0Td926SljW5nX%2BzQr7bNg9lALd%2Bkme4Bo3J15l1eAwaeNnI0UUnUurhF1FYb81%2FYWT1DyunocagV8zj1JRTlP8CjL7IKBQ0cPOsbb6SsPgL%2FvrRE3syDCAhc3EBjqkAYgCjyPrg7QQl0HkH4txCTRElBHx0mPPEk6DUWNEc2oa1y1%2FjGSyNmOD4dVF6FhCTcSb1Kg%2FQYX0e2n7gNIoTsczgvVKboxmDXoPMm2KSJGOPZ0LZTgxYNjgstHFXBN2TgSw8A0m%2FzrpDYz12IvvVnM0%2B4j%2BWmcmq9WYnudiVX5T50O6D87g7jtO7eJYTSect3HJUEASFOPeR93yq8EWo%2BMhGWPE&X-Amz-Signature=6fcfe9e62889b639a70fee8118c894e92d5e08a4e239912dec0aaeef8f33fa48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBA7ZRP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC60p6zj7wchi10fGeC2HyDLPPJymhf3vDP3CxZ8blxuwIhAMYqucHqmdY6dp40hxcfcnkdbBFPDrGD3tUEqmqvRTimKv8DCHUQABoMNjM3NDIzMTgzODA1IgyWuT4Rb0M9i%2FCbQ84q3AMZiSHITwz5lnI4DaL0zmAAr3YF0mucLQtfeg3GU2uCeTe5udZyqRICoICgKHJJvN8AIhpTdwUzseaRAzP6NALfKuQ7co5qD4Y9WKljt5rQU4MhNn2RsT%2BKAxu0MICa%2FA1S%2FrsQj%2BgFm9z9IId0mhfO%2F9yORSCSNNZt67iu5WrHgAA7v7SzekofWB4%2FHc%2Ffft368uyuFEHDgydkpMvw5UU4tw2t2vyzz7CPfYmqykq2IpOuW%2Fi1%2BWa%2BK9skMoJ94%2BRFTEvpctw4rJ%2F1VBG7JHhYLZvbSC2C9QskJOmtSNO8yCBXMssm4GdkOxYwmrHIfylQ2FeK6qIix1XpcFBTALkjuV0Lvbz0lAMYN285X9uwZNU86x8xVyYTy9R25XSJ0oGqHlObj6p0IKxyvMEXEz5UCrDcI5vBBzdT6xHVrB25N1JDHBicqKRrwZz%2B28TghumynMjRfxUmFnnoVr76URdyvgDqmGYoKucZsCxfcjOi%2FwC1AGY4r9a0GiESbdCCsrHiNqvDNP0Td926SljW5nX%2BzQr7bNg9lALd%2Bkme4Bo3J15l1eAwaeNnI0UUnUurhF1FYb81%2FYWT1DyunocagV8zj1JRTlP8CjL7IKBQ0cPOsbb6SsPgL%2FvrRE3syDCAhc3EBjqkAYgCjyPrg7QQl0HkH4txCTRElBHx0mPPEk6DUWNEc2oa1y1%2FjGSyNmOD4dVF6FhCTcSb1Kg%2FQYX0e2n7gNIoTsczgvVKboxmDXoPMm2KSJGOPZ0LZTgxYNjgstHFXBN2TgSw8A0m%2FzrpDYz12IvvVnM0%2B4j%2BWmcmq9WYnudiVX5T50O6D87g7jtO7eJYTSect3HJUEASFOPeR93yq8EWo%2BMhGWPE&X-Amz-Signature=be2e96601a80edc32cd884892bcfb2b8b1f6157bc440616aa92954d2a245b93e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBA7ZRP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC60p6zj7wchi10fGeC2HyDLPPJymhf3vDP3CxZ8blxuwIhAMYqucHqmdY6dp40hxcfcnkdbBFPDrGD3tUEqmqvRTimKv8DCHUQABoMNjM3NDIzMTgzODA1IgyWuT4Rb0M9i%2FCbQ84q3AMZiSHITwz5lnI4DaL0zmAAr3YF0mucLQtfeg3GU2uCeTe5udZyqRICoICgKHJJvN8AIhpTdwUzseaRAzP6NALfKuQ7co5qD4Y9WKljt5rQU4MhNn2RsT%2BKAxu0MICa%2FA1S%2FrsQj%2BgFm9z9IId0mhfO%2F9yORSCSNNZt67iu5WrHgAA7v7SzekofWB4%2FHc%2Ffft368uyuFEHDgydkpMvw5UU4tw2t2vyzz7CPfYmqykq2IpOuW%2Fi1%2BWa%2BK9skMoJ94%2BRFTEvpctw4rJ%2F1VBG7JHhYLZvbSC2C9QskJOmtSNO8yCBXMssm4GdkOxYwmrHIfylQ2FeK6qIix1XpcFBTALkjuV0Lvbz0lAMYN285X9uwZNU86x8xVyYTy9R25XSJ0oGqHlObj6p0IKxyvMEXEz5UCrDcI5vBBzdT6xHVrB25N1JDHBicqKRrwZz%2B28TghumynMjRfxUmFnnoVr76URdyvgDqmGYoKucZsCxfcjOi%2FwC1AGY4r9a0GiESbdCCsrHiNqvDNP0Td926SljW5nX%2BzQr7bNg9lALd%2Bkme4Bo3J15l1eAwaeNnI0UUnUurhF1FYb81%2FYWT1DyunocagV8zj1JRTlP8CjL7IKBQ0cPOsbb6SsPgL%2FvrRE3syDCAhc3EBjqkAYgCjyPrg7QQl0HkH4txCTRElBHx0mPPEk6DUWNEc2oa1y1%2FjGSyNmOD4dVF6FhCTcSb1Kg%2FQYX0e2n7gNIoTsczgvVKboxmDXoPMm2KSJGOPZ0LZTgxYNjgstHFXBN2TgSw8A0m%2FzrpDYz12IvvVnM0%2B4j%2BWmcmq9WYnudiVX5T50O6D87g7jtO7eJYTSect3HJUEASFOPeR93yq8EWo%2BMhGWPE&X-Amz-Signature=0e66712568095ad8b3ccdd53f2ebe173423f453961b16e493b59b047d7a90080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBA7ZRP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC60p6zj7wchi10fGeC2HyDLPPJymhf3vDP3CxZ8blxuwIhAMYqucHqmdY6dp40hxcfcnkdbBFPDrGD3tUEqmqvRTimKv8DCHUQABoMNjM3NDIzMTgzODA1IgyWuT4Rb0M9i%2FCbQ84q3AMZiSHITwz5lnI4DaL0zmAAr3YF0mucLQtfeg3GU2uCeTe5udZyqRICoICgKHJJvN8AIhpTdwUzseaRAzP6NALfKuQ7co5qD4Y9WKljt5rQU4MhNn2RsT%2BKAxu0MICa%2FA1S%2FrsQj%2BgFm9z9IId0mhfO%2F9yORSCSNNZt67iu5WrHgAA7v7SzekofWB4%2FHc%2Ffft368uyuFEHDgydkpMvw5UU4tw2t2vyzz7CPfYmqykq2IpOuW%2Fi1%2BWa%2BK9skMoJ94%2BRFTEvpctw4rJ%2F1VBG7JHhYLZvbSC2C9QskJOmtSNO8yCBXMssm4GdkOxYwmrHIfylQ2FeK6qIix1XpcFBTALkjuV0Lvbz0lAMYN285X9uwZNU86x8xVyYTy9R25XSJ0oGqHlObj6p0IKxyvMEXEz5UCrDcI5vBBzdT6xHVrB25N1JDHBicqKRrwZz%2B28TghumynMjRfxUmFnnoVr76URdyvgDqmGYoKucZsCxfcjOi%2FwC1AGY4r9a0GiESbdCCsrHiNqvDNP0Td926SljW5nX%2BzQr7bNg9lALd%2Bkme4Bo3J15l1eAwaeNnI0UUnUurhF1FYb81%2FYWT1DyunocagV8zj1JRTlP8CjL7IKBQ0cPOsbb6SsPgL%2FvrRE3syDCAhc3EBjqkAYgCjyPrg7QQl0HkH4txCTRElBHx0mPPEk6DUWNEc2oa1y1%2FjGSyNmOD4dVF6FhCTcSb1Kg%2FQYX0e2n7gNIoTsczgvVKboxmDXoPMm2KSJGOPZ0LZTgxYNjgstHFXBN2TgSw8A0m%2FzrpDYz12IvvVnM0%2B4j%2BWmcmq9WYnudiVX5T50O6D87g7jtO7eJYTSect3HJUEASFOPeR93yq8EWo%2BMhGWPE&X-Amz-Signature=fb419389d8873b5b65cb847e403d0139e9c287bfd6d93d75b190fcc37408963c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBA7ZRP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC60p6zj7wchi10fGeC2HyDLPPJymhf3vDP3CxZ8blxuwIhAMYqucHqmdY6dp40hxcfcnkdbBFPDrGD3tUEqmqvRTimKv8DCHUQABoMNjM3NDIzMTgzODA1IgyWuT4Rb0M9i%2FCbQ84q3AMZiSHITwz5lnI4DaL0zmAAr3YF0mucLQtfeg3GU2uCeTe5udZyqRICoICgKHJJvN8AIhpTdwUzseaRAzP6NALfKuQ7co5qD4Y9WKljt5rQU4MhNn2RsT%2BKAxu0MICa%2FA1S%2FrsQj%2BgFm9z9IId0mhfO%2F9yORSCSNNZt67iu5WrHgAA7v7SzekofWB4%2FHc%2Ffft368uyuFEHDgydkpMvw5UU4tw2t2vyzz7CPfYmqykq2IpOuW%2Fi1%2BWa%2BK9skMoJ94%2BRFTEvpctw4rJ%2F1VBG7JHhYLZvbSC2C9QskJOmtSNO8yCBXMssm4GdkOxYwmrHIfylQ2FeK6qIix1XpcFBTALkjuV0Lvbz0lAMYN285X9uwZNU86x8xVyYTy9R25XSJ0oGqHlObj6p0IKxyvMEXEz5UCrDcI5vBBzdT6xHVrB25N1JDHBicqKRrwZz%2B28TghumynMjRfxUmFnnoVr76URdyvgDqmGYoKucZsCxfcjOi%2FwC1AGY4r9a0GiESbdCCsrHiNqvDNP0Td926SljW5nX%2BzQr7bNg9lALd%2Bkme4Bo3J15l1eAwaeNnI0UUnUurhF1FYb81%2FYWT1DyunocagV8zj1JRTlP8CjL7IKBQ0cPOsbb6SsPgL%2FvrRE3syDCAhc3EBjqkAYgCjyPrg7QQl0HkH4txCTRElBHx0mPPEk6DUWNEc2oa1y1%2FjGSyNmOD4dVF6FhCTcSb1Kg%2FQYX0e2n7gNIoTsczgvVKboxmDXoPMm2KSJGOPZ0LZTgxYNjgstHFXBN2TgSw8A0m%2FzrpDYz12IvvVnM0%2B4j%2BWmcmq9WYnudiVX5T50O6D87g7jtO7eJYTSect3HJUEASFOPeR93yq8EWo%2BMhGWPE&X-Amz-Signature=6fcfe9e62889b639a70fee8118c894e92d5e08a4e239912dec0aaeef8f33fa48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBA7ZRP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC60p6zj7wchi10fGeC2HyDLPPJymhf3vDP3CxZ8blxuwIhAMYqucHqmdY6dp40hxcfcnkdbBFPDrGD3tUEqmqvRTimKv8DCHUQABoMNjM3NDIzMTgzODA1IgyWuT4Rb0M9i%2FCbQ84q3AMZiSHITwz5lnI4DaL0zmAAr3YF0mucLQtfeg3GU2uCeTe5udZyqRICoICgKHJJvN8AIhpTdwUzseaRAzP6NALfKuQ7co5qD4Y9WKljt5rQU4MhNn2RsT%2BKAxu0MICa%2FA1S%2FrsQj%2BgFm9z9IId0mhfO%2F9yORSCSNNZt67iu5WrHgAA7v7SzekofWB4%2FHc%2Ffft368uyuFEHDgydkpMvw5UU4tw2t2vyzz7CPfYmqykq2IpOuW%2Fi1%2BWa%2BK9skMoJ94%2BRFTEvpctw4rJ%2F1VBG7JHhYLZvbSC2C9QskJOmtSNO8yCBXMssm4GdkOxYwmrHIfylQ2FeK6qIix1XpcFBTALkjuV0Lvbz0lAMYN285X9uwZNU86x8xVyYTy9R25XSJ0oGqHlObj6p0IKxyvMEXEz5UCrDcI5vBBzdT6xHVrB25N1JDHBicqKRrwZz%2B28TghumynMjRfxUmFnnoVr76URdyvgDqmGYoKucZsCxfcjOi%2FwC1AGY4r9a0GiESbdCCsrHiNqvDNP0Td926SljW5nX%2BzQr7bNg9lALd%2Bkme4Bo3J15l1eAwaeNnI0UUnUurhF1FYb81%2FYWT1DyunocagV8zj1JRTlP8CjL7IKBQ0cPOsbb6SsPgL%2FvrRE3syDCAhc3EBjqkAYgCjyPrg7QQl0HkH4txCTRElBHx0mPPEk6DUWNEc2oa1y1%2FjGSyNmOD4dVF6FhCTcSb1Kg%2FQYX0e2n7gNIoTsczgvVKboxmDXoPMm2KSJGOPZ0LZTgxYNjgstHFXBN2TgSw8A0m%2FzrpDYz12IvvVnM0%2B4j%2BWmcmq9WYnudiVX5T50O6D87g7jtO7eJYTSect3HJUEASFOPeR93yq8EWo%2BMhGWPE&X-Amz-Signature=3f21af0bc1770f9dd8b2aefcc94d15d2326e7e92cffdb49b4189e9859609632c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBA7ZRP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC60p6zj7wchi10fGeC2HyDLPPJymhf3vDP3CxZ8blxuwIhAMYqucHqmdY6dp40hxcfcnkdbBFPDrGD3tUEqmqvRTimKv8DCHUQABoMNjM3NDIzMTgzODA1IgyWuT4Rb0M9i%2FCbQ84q3AMZiSHITwz5lnI4DaL0zmAAr3YF0mucLQtfeg3GU2uCeTe5udZyqRICoICgKHJJvN8AIhpTdwUzseaRAzP6NALfKuQ7co5qD4Y9WKljt5rQU4MhNn2RsT%2BKAxu0MICa%2FA1S%2FrsQj%2BgFm9z9IId0mhfO%2F9yORSCSNNZt67iu5WrHgAA7v7SzekofWB4%2FHc%2Ffft368uyuFEHDgydkpMvw5UU4tw2t2vyzz7CPfYmqykq2IpOuW%2Fi1%2BWa%2BK9skMoJ94%2BRFTEvpctw4rJ%2F1VBG7JHhYLZvbSC2C9QskJOmtSNO8yCBXMssm4GdkOxYwmrHIfylQ2FeK6qIix1XpcFBTALkjuV0Lvbz0lAMYN285X9uwZNU86x8xVyYTy9R25XSJ0oGqHlObj6p0IKxyvMEXEz5UCrDcI5vBBzdT6xHVrB25N1JDHBicqKRrwZz%2B28TghumynMjRfxUmFnnoVr76URdyvgDqmGYoKucZsCxfcjOi%2FwC1AGY4r9a0GiESbdCCsrHiNqvDNP0Td926SljW5nX%2BzQr7bNg9lALd%2Bkme4Bo3J15l1eAwaeNnI0UUnUurhF1FYb81%2FYWT1DyunocagV8zj1JRTlP8CjL7IKBQ0cPOsbb6SsPgL%2FvrRE3syDCAhc3EBjqkAYgCjyPrg7QQl0HkH4txCTRElBHx0mPPEk6DUWNEc2oa1y1%2FjGSyNmOD4dVF6FhCTcSb1Kg%2FQYX0e2n7gNIoTsczgvVKboxmDXoPMm2KSJGOPZ0LZTgxYNjgstHFXBN2TgSw8A0m%2FzrpDYz12IvvVnM0%2B4j%2BWmcmq9WYnudiVX5T50O6D87g7jtO7eJYTSect3HJUEASFOPeR93yq8EWo%2BMhGWPE&X-Amz-Signature=8bbb1e98cbba19b746a835136d09bbf694fe61ece016385452270c88a14f4747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBA7ZRP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC60p6zj7wchi10fGeC2HyDLPPJymhf3vDP3CxZ8blxuwIhAMYqucHqmdY6dp40hxcfcnkdbBFPDrGD3tUEqmqvRTimKv8DCHUQABoMNjM3NDIzMTgzODA1IgyWuT4Rb0M9i%2FCbQ84q3AMZiSHITwz5lnI4DaL0zmAAr3YF0mucLQtfeg3GU2uCeTe5udZyqRICoICgKHJJvN8AIhpTdwUzseaRAzP6NALfKuQ7co5qD4Y9WKljt5rQU4MhNn2RsT%2BKAxu0MICa%2FA1S%2FrsQj%2BgFm9z9IId0mhfO%2F9yORSCSNNZt67iu5WrHgAA7v7SzekofWB4%2FHc%2Ffft368uyuFEHDgydkpMvw5UU4tw2t2vyzz7CPfYmqykq2IpOuW%2Fi1%2BWa%2BK9skMoJ94%2BRFTEvpctw4rJ%2F1VBG7JHhYLZvbSC2C9QskJOmtSNO8yCBXMssm4GdkOxYwmrHIfylQ2FeK6qIix1XpcFBTALkjuV0Lvbz0lAMYN285X9uwZNU86x8xVyYTy9R25XSJ0oGqHlObj6p0IKxyvMEXEz5UCrDcI5vBBzdT6xHVrB25N1JDHBicqKRrwZz%2B28TghumynMjRfxUmFnnoVr76URdyvgDqmGYoKucZsCxfcjOi%2FwC1AGY4r9a0GiESbdCCsrHiNqvDNP0Td926SljW5nX%2BzQr7bNg9lALd%2Bkme4Bo3J15l1eAwaeNnI0UUnUurhF1FYb81%2FYWT1DyunocagV8zj1JRTlP8CjL7IKBQ0cPOsbb6SsPgL%2FvrRE3syDCAhc3EBjqkAYgCjyPrg7QQl0HkH4txCTRElBHx0mPPEk6DUWNEc2oa1y1%2FjGSyNmOD4dVF6FhCTcSb1Kg%2FQYX0e2n7gNIoTsczgvVKboxmDXoPMm2KSJGOPZ0LZTgxYNjgstHFXBN2TgSw8A0m%2FzrpDYz12IvvVnM0%2B4j%2BWmcmq9WYnudiVX5T50O6D87g7jtO7eJYTSect3HJUEASFOPeR93yq8EWo%2BMhGWPE&X-Amz-Signature=053679d2da3fd976dc0e28e554ccf46e6e235c4df06f5abf41c40eed22e5a4ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
