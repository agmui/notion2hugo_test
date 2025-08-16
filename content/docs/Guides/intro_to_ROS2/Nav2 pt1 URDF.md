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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=5928542e3363f40a66f8d4b5311d62d9ceb262534bf2dba1dc12b88e6ab5a989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=16b278fc30bb1a62c0c0c6a0915ebf6880be8ce3634922b274d7674a8ac962db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=3fc634609ebce43cb69fb03fc894aecbe9de239126a55f63d10b8af027b204f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=53f15e4de88328757c3417179ee19fb68797fb08a8078965808b24de6b8bb1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=62c05fda6acd03e1b297ca0ff2d0e2f0f022a9ce504239999d5a865beb5752b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=84633664c0d7a9bb86e10f25738c86ef2bdd23646c452318630b42c962021115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=474b2354b5c62791d313701e7219ea81e07cf14c14274907b357d0c4d4b4903c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=629df7b8a7a29b5cb791a8fdb9471613f48acda0b756e417f44ca2a4c2018f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=c8915b14c72c7e98ee802423536a9a7d06e2a3beeb417ad62e7d5052ca03fd66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=6ce892a9026546019f08060865e7697126713c876232069f4ffbf3b844c3490e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD5MFU7G%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDyWkvNEUIdvFKTOzCz9KO1WizcZGgtekodPlZnfGLFTgIgZ%2BJOEZSIAML5CakZDuyN00FC6yMBsF%2FSbe0IKFubvScq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCFh6mI2hjzwddR4vCrcA1MVk6CMOmsLkVxbwY5a064Dij7Iv%2F2BhvwzN01vLgqXGk5e3XFEj0FeOZ89BI%2BwLpR6dud%2B6c7Cr4qrVxioD%2BradPzn4q9Yg%2BQLycdWqdp%2F3yPjOQXqbjEwp3AMxXLHGyJ7%2FZRKyu0v2yb4G0zkhqVaSFX25tCxKb3%2F1TYrnTeqXCQbvHk7n4tUW5tRxzYtYsEXB0JtPgTembAk8ej2UZrVnl%2BOstqn2Z%2BMWmNTs2FhKTMsqd3aRR3KEFJIXRqClBdMsiEbQ1yycLYo5WFb232gSXImYzTjvFEu8zYcYMQDJWc1K5FEJrKoEnvBPJfcsQ33LzcMOtMk%2FIzwzgn%2FtEamLX1bJyV5fMmykxfiq2X0CeUr0e%2Bfct0UlDY1pnJ0ehbQoBYZ35Ew7aIUrAjajpKc%2FGItmvbhYllHTAj8VsQvnGYp9fz8tXD9kEUSiIwfRVTQp0uCAWVn9Z4DoKZJUl9GdYkmhZ%2B483Sv5%2BcO3MmEs3S4N%2F2JDGwuPLa27rdUYBEJnlBl4TZJ3ByEbd2EctSqCEDcAb9L8oC9i8cBu%2B%2BTZulm5LkLVXJizlIpNipS5O3lAiDIyX0BVnxGeq%2BxJzgPZttWYy%2Btoz7Dc9xToTPhTY6OstbIi%2FFJAFhfMIXk%2F8QGOqUBLh%2FN1l8Mnuj4q9%2BwXnMpwADugGG%2BWvlID4e30ZmSmUT81x3O6M3o02SkRRAQyhl%2BQBM07lu0jGzoAGnVXd8h0SMkXLli2N%2B9g%2FYQ4%2B8tj1jpimiTfTvAvTApY3kw0USSwphIntQqad15p4qMBNbKrIBRH59Mq01TfZPLu0ndrLEntLKBkMnGCTPolMPfIuMOqoNj%2F4zWnpEA2gXkH3LBXkA4Nq9C&X-Amz-Signature=668256054fa87209f036f029b584b5c7cbf2ce560a935738942db06e96c0a4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ5XCSFX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHnKoMmEnWONnI0maPJLc%2Bz5ph6lwVYATq1lXJ3RsoVQAiAQiESBQ6MFjddnQUQCtjO3xaowB7W7%2ByDJJzODMc2HXSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMFxg3YKMxK4nkWLVIKtwDlV%2BRmwbuQiHxZVE9LkiFW1LB%2FhTk8CyKj5cJ6lPLhBZo49KF3ux%2FCzL%2BYsOINNHnVC4QURPtTZ%2FHTxOyNvJzE59AgB0LyeYhTuS93kUyJOlDS4e%2B9%2BjjgrXy4TymUS5NG2rRj6ypQ0On32FCNQCsBuwWp5JDvbSTiXbJHslx6rDSs1ZsHa5uD6lN3e8C2r6AoFm3bQseS9s6LF54OY4Vi%2BweG7YL%2F6XUXqicNiR6o3sh84iXpxIY1T%2BWomAVSazKiwM30YbZhaKfJHv%2FV88qy%2Bezb2tHzFSzvNukTZ%2FOnxvR5u7BvUfgXlhwsyjr6%2B%2BbhjXCAyjWQyMAV7fTQyjN6jWpeA4qdrHfL5OoX1sOnXH4TL7RCAD%2BuGrN3rZxVVnWr%2BlabRxzOQwFSFodVWGDQ5r7OTM1PG43aNAIH3fWfpok76y8LmuuK1v6qod32OcnFWblCaefijckAiEUJOkbyE4%2BIqdllue29hCn3sii0gx2%2BmHwEmIu%2BGF1NonNVfV2swe0YDOvYL05ytAdNeJH50ivJI%2FEQ3jWAjJMqxcQfGL2KOfj8GmG7%2Bq5pEqMlmy%2FDpk%2FOEBqE8Cg8wX4oFWpzQz3WAGiUGq3B%2FzG1RBA%2FrofFcghX%2BQ4nT%2FXMuUwiuT%2FxAY6pgFu1Ab1DQYzL2ayVkLIbzm3memNe5bfoS2O21SJGbpiTUAeAfZkJezvqf6FVgBCQhxtPO1IvnNdd7TPVTIzpeaWkYcoxElRM%2BzYfWLk7j6VLIBnT%2BeS5apjmQ9vzNH6zyS%2FgxD%2FHCB%2F5WjbhfkxaNZymAs50wdtrxk81szSzNex68WbUoczNi8dxqkAiJ%2B2IneBgRSe6Z2ZjH2F4M0u4dCkztSt299M&X-Amz-Signature=b681a27181599907969be8ee347191f6f110dbe2051e000eee133bf0bf32be30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2WLTEY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDxtu%2Fn5Q3qsqsEj%2BR%2Bl8bK7m8niYGxtCs1ED6SDXaUnAiEA5%2Fg6HM1bfwtGQo%2Foegg0UWrsL8MmPI68o%2BQMrN5m53Uq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEdhMNxmHz4ELO4KiircA5GZfurZsrm99WnkWLqF%2BaeK3pf%2BKuyM5DPjq%2F4HUDf73dQkqB61EcIr%2FU8C9Aodwhu9Q2zVKBUlhVvRA07EBK5BpK3hg4TmhVp2zlzkC7wKLOfzSKSTYxYZ%2FX7vWzR0dljAjyPESnFIHNR2r%2FhqaZoXcp1h6iUpSAhM7uP9FPMZqjl54qxX8CXYTK%2FdUtjcGVDJD0ZKsYkv5SCPzWLrbQGzMhTb27iwHjVDZoPB9TMydHqrCvm3MfVT54R91%2BmLahnMQksUU3hFUjqvsgSrANdVQI6g7f0MWH1QbjOhnKdotwmhNvN8RmjwsjRZfC3r6jrXgicSMu3WU05gis016RrSygc%2F00KTnIokuFosjGFiTT4F6I8G9uDEdFXoIGqlc2w%2F00j%2B1Mn3yH9203GaFxMVnFE8ceAb6wtzvundD%2Bi7%2B5YhGPKvU9k79WNTrIHC0fK9XGVwf2d8xvA4wvGOlT%2FpHEOxjiA4azENY1pPpZpEXOvXVNJUVNuWYdrBwgO6tLdqrZwLV%2BVE%2B1cVqEImqTqNpXys6kVoQvhNcrx7x%2BKEDABwvevXHUIPbVmYBF9YVQ%2BHhH0R6rkIIsjAyhU6%2BnAbapOllLypGXW1cst%2BCxy5ukrk5q4NiyWdn5xBMNiKgMUGOqUB%2BW%2BZtnvgwlOnh%2FbKuqVSVBBjMzU3DNKxoi95fs4Yyqc7IBJNdZACqn1zzTQNVuX1f6SkblPyrspYdzgtI3gzKkA3S9Qgxy64YSCUkSNYkBnePy65fULdHjD5pyS4NLEe%2BmOmpVQsexJBRYwsHm8tAwE2QzX5iqu0HHBJP41pHQVWHj1krHESr5OzC93m7ChpJ1xFW7CaFNxZtY4t%2F1lzhqtadlj8&X-Amz-Signature=fb4ad02b5aeb34cfecdcfc59fa50a3f1d9ee7188cd72620a868003aca33a5664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=27c784942b24e375f6e24e4c8a734e7b82c0a3d8b25063d7d6d027fdeb64e978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YURA7NS4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDym9qvJclBEi5RIfXlncxUTbYJns3U1uLoD6UO2ovx7QIgMXDxDNxfGKogyhhk%2B1UtjTjGGuknc%2B65bydr9Fs0z8kq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJOb5ZW6yQOCBmY0TircA4Iw0%2FvInwJinJSBLoN%2FhdfAu0DqO7%2BRMTq00pDWPSpytE3sQXJrp30mrg35SP2fDSC4acR64LG%2BDtAZq6bhp6pR2y%2FJ%2B1tZoyhZmuQveMs3SnxXj5m%2FNJQku3icIoOnfTHty3m9FTwoCR%2B6DmAZYogqYEYf%2FNx%2FVhl6qfUk7HNuIxD3G%2FHCE1CnBDR36SoIS%2BqNAfbR%2BpyuoD0Y%2FWj9eQtk1tJAZO%2BbvUsjNn%2B6hj85KXMcLpgdZUW6MTICo7yrGpYMLVa7xBHGotd2PIUXFg%2FL5NP7wPn1iiG%2BvrsHcqtAhieebXbFevyFRMOWx2w5fHkEdgCFo65FE48uCdXYDryW9gXtYlXPrLsjkMgBgqZ4V42nhFeTM4bQFJQGtZZ8bXOjDFs%2BQMjGwHVW%2BbRA0A9lBy7tGqZnkfL1Z58DDQJRYXysdyva4x1QULtry4jfhMUunOw5lmP3bEDHOg2%2FHfRhrQ9ZxvaUYqcl20uUUfQ9603nshfoRUdRZt9vfCIcH68k9glEhSrzXFcnBgdMvMPoBJYX295QFiyAjljUoFNcPUg9gNEYMmKv8ISdyLuCtwzJkJNWQf%2F160IdLMTjm7C50mYMXxLfXp1kRYpZ7cc5kvbRKjIy2koAvIOlMP3j%2F8QGOqUBmQrAU1GW5gMFPlN%2B9Vo85J8y7lGT%2BBiN9wctM73jywD2Gg8J6tlgfbedR%2BXwa2AxWQU9obTWtSqCNFFAazaZwcj56UCJ7TAdz%2BtjrMMpwYhkjJfnWtX%2F5iywVWNxyumpA3vHUNymk7ATSJdcqEWrVGW9f5oKnqy9A3DrVoBTZ179NdV68gQqrN%2BiHk4lqhMNvUkxQKfqDmqDHlFI3Y5Du6YpC2a3&X-Amz-Signature=9a124d6e3690051536d63b22040670c3c806a7b079ae1ac682a036f2b65fd7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=a790f884c1df98851d8c80510c0c720f2a685738daece83c24412d1b0c9ffd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQ2G55X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICVRcmzHurXraLw%2B%2FXX88Qcu1SWNgPA0c7EGK%2BLEIs%2BAAiAjTtaqiuesQ7ZqPylixhIEf%2F8jhtEy9%2BPTbKvFfEvwXir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMvwes5CgA3GTNB0dgKtwDaKz5WfXv2ZNMZTQ7MwcRi4H8X861gJQAcZ0U8NBGu5afE8h58xoj0h3YC2Sb0Vj1Iz2k1fGO7%2BnC1R7KjsfTpDL7uPMiBuAlxrFZKRYIPcz2rZb5ZRifOIMGPQlmogK8CIfBERDQzEk3678iFOASIIXycL%2FLW3zOY%2FO7vrtjmhG1DKXafMTyCMsvUdfI%2B%2Br6aNsiH1x5SFyxPEwKP6RaCBvBg4fE83AT9hdc%2Ff%2B762nfTO44cHISvL0u2lHDEabkdNqV0i7ijYSBDpBhJHoBay8S2SvewrRAYeo4QJghZKWXVM%2Fdt7eZC%2BDnqSxA3YiIzEh%2BD2bCfNb6%2FoYLQqOOlvOQKsm8iMRCiVl83CwJpgwi8fRgHFEjpRD5ejSnCUEj2wdn9013QUnb%2F6XWtLXnebFK2bz9ygltuXFtnij7fS3QwZ2f5kCbxt%2BGRTh%2FwPk%2FGQ%2FhrXiAiuKnsiMwWkkvpeBwdWT0PutfyQzuM82N8G0P9atlmtVSOvqGrIAvhql4ceJmCJMjY150oUcVedD3XyV8vdgxmZ90zkmNVd6XTCSPJ8C4MIWkKVrvm%2FLmXW09HLW%2FwptU3HwdS2pX28LydU3WX7Xd68PLgC5G1GCvTAxhXTofquf%2B70lz2lIwuIqAxQY6pgEq80sPUjHKsPajBPd0%2BV7qT0Ww4hGKLCf74wFpOCyPVXvWxpevm4uYhfBm9%2FG2WIh1ZifI6ma%2FqU0zRqViQRVnNCBrDMBAHPNFfzk5bzHmO0d%2F29Z6NtABYZk%2BbqfD1Anqxpe0kcLHwaBTYxbHiP%2Bp99P2XbG3Tc%2BodIfJCeq%2F%2B6bk2EtiAVjXHXr0girWaXVp3skiqkzvIj830bBAoYkVy2XW3NKe&X-Amz-Signature=cc26b94daa1b3926cd1064f6fae3a4df1cbe1d70366d643a47924ff5ada6c8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=c903b2d7c730990282b69e01cde4c96924b51e0b2117572f5dfcbc6ce0031592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK5UQ2ME%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDkHH0PL3p9jSXJl8Jr4hhYwjTR8ZTs%2F%2FTe70Y9D5G0HAIhALZZScsimW1HyPxMdVZFoe0%2BIB3FwHWNzHFAv0%2FSqcqhKv8DCG0QABoMNjM3NDIzMTgzODA1IgwD9hBusEUUx6YGVbUq3ANfu1EBqv5OU9igA6ifv7H01nlR1qWV%2FzZsvKNVh2Z6SQbz2pkmC3i8kKfa4rSsYXvOWKI3I4UtJmicYQMBThPWpsC88F8MaqHF9NxclKprEOGYf%2BR804SzL%2BiY1mtldLTKuWhhjvauA5BXjDDTzsx%2Ff7q71lY925jT%2BvGPKAXoAinWQqDGBAgkMlKzk3K19nN5RoWpHK8P7sq81vI6BpTT2a7mHagnhg1PYuDkI5PVhwNGmQIJOprWwMT5MhMRcWjBuOeyPfG1u%2FFaZ67V5ODAiRBh3zPsnzrjkh11Cwg%2B1j2YeO66PG4KCLaMgXjVRqapIj18IKsmEexIegpDPt342JNNMDZDS9ePIuGEzHIePAfvUspYwBGAfVPa%2BO6e4R1fuxTZDF99OlnnoiPUJiEN1ulK8a7a9riI93iNEGgIo%2BIpu7I1vu5PJ5K6Z4QHqmon3LLqqmN3I976iXt%2B4QBmAktLt3KiDEo5XUd9a8OIpRTqoAR5U4t2NfwyOXN4yHewmnAC%2BaXR6Se06EBnzr3b8mboKe5is7f0iLde57D5jIuMhPpTMLwceRYrlwk%2BmYnSO5JhuGKW15t9gG%2F4cCF3uhXUAPfqpnbCwjBGmyWZ0i8ADgy5WFRLmieusDC0ioDFBjqkAWi76s9XeomorbP3ljxC1CBy6hRyhLkcYKiJ54pcB33TxTnQyAJhnanxBuoHiUix0YuzIdRc8nEJ%2B%2FGutZkajLy2i1uUApwmIqawPHuBBNyoG8F981CAojEaVrPhMz%2BKBTUvEEjgKHdx78KFTTfRIVD%2FWI95KLWhNlZrPuTwR9aosNojUyWdWHgNaCGR5KBEbRbXEPYbJeDHQyUQHZR6rE58Rhbv&X-Amz-Signature=2cfe3fc1bd6f4ff26518ca7a568cba305bbd3581adcd034800f38b142611deb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=cf5acc9d8b3c9ce7f51b5a2f2d0b3bd6aa1e9bb79f4332e250c5033cef180021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPS4WML%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDmO3LQN0V%2Fr8NnM7MaVNqpcf2wt6Ghr399an%2F0LCFIBQIhAKUBiOf8MrzD7Ve%2B4XfiMhTp0BEx3f1FaC%2BMPRsOXGsQKv8DCG0QABoMNjM3NDIzMTgzODA1IgyFr%2FhdU7H2GY3CEfoq3AMPKwZDKo7kcqECQ92Fbu39O7PiTtlNzH5N58kjt2sZv9nqvbHRlLm20VumOWOufaTzwVVxumVGYhDgsU3HcMVxzmg92UvzLfGVQCOjCwfe8X1JKTGmUeqSDBDEWjnUzzgKOSoKcBAF8mZa4PQ5TxWtIVN4HwtPvTdGM9MwQfEMzrd8dKD1kFvpNqWCx%2FoYJGg8dmTUkQ%2F9EdBNdRI74SFtEPMPgHA9wLGpioY5EHFXHLYz5jAoy2y8S%2F%2BG7cWfMzbxk95UV279umgvm9RbSCHfwhSPSjJdOfS1yfFQI1DX7RK185Joq2oqerhU4L22xiuXEuSTcQSisOl%2Fne7OdseI3tQFjsfhejUXSqt6F4k9QH5mgo5V8lGJbeOWXfVBZbdo9A1Me4HD7QVSqf1jxqAANMhZRqRSkRU4y4qcXNqzBMP3Gd76Srwt%2BKTftc5R2sZu7oJNN2l0VtXJeszXoTb439sbgM90h1HDxRIW0vijFi%2F5wJwOu%2FYo7DSa1Gk24AyxHPrsG4nleqxewD0ZAlElsGf6%2BRTL0O5nbahKAQhVGrtfdc%2BrdjlwxQ9weWpSyjYxt5hKgOTbE3z7OSNCHeGV73CQy58UHaGb0dXJB5%2BKFdNGxQNjIaNOMn0wnjCQi4DFBjqkAcTX1FZN1H%2FLyyEgPKODv3Hf7q6jb4mNvp09BksxMPiyE80fVcQP%2FC20NZAj2Pl2CPO%2FWGJ%2B2iNRpO5y04dFgVEyN7SZLsCQTi21Ihzxhj2D7SnkxyNfcXEk0XgY%2BtXDTs2hfEXlbGb2HGd4ZyIs%2BzXmOFVxKtyCH36bPF9HbtqoXsEuS8U9xc4tc7uMhFhVMX%2BCNRmjm9bxQbiJ3nWR%2Fgk0TBma&X-Amz-Signature=8c605f4a40e7524da6543b272f2d402c84f2758336f2d937640c4edf8c40f3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=1389db0d61bbfb7f71f463226ddfd10051de2b23b140993322dd35ec4009c68b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE7SXLA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCHC6bdlm08QJXK6%2BWk%2FgBhmq1zcDqmeNEPS4dlNSDzxgIgE7rKcSbsEpWVva%2B5UP9P2Qrrdr%2BtEOngR67h7vpneB4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJMEV8aoHkRF8v0heSrcAyS5Ef79bs6itK9A2K3cNBY3gaCW05H74eYuZVq5TQ9BNSMUxrpYj2So4q2MYs5cQ%2BSkXU7yLnGpHcrUnjl1YL9AxrQ5DSSy%2FyfiQPZmLcUJV2RroiY88rdnFNAT1yQRvL3%2FZGo1GT%2BV44siSWxO%2Bs0M5ED%2Fi1bBpmK7szUqB1c6YNqPA1zWOl4d6XGHlVO%2BeduNFIhIcu7tePxjNjwdRhp2YnY73L1jziIV7KloPlP9I1xzVrQaNv46rrgYKzYY61%2FGr5Ncp%2BvOLDizfmu%2BrbOgvafWq0nws4MioODb%2FMRIRxUbvjLQQr8Eyy6pn2LuOtamyqyd%2BhAKCQv1oRED7c8JPGdCuUFdNZ%2BXkXOw8Rl95CQyTYLxM1Re5nLr20fDZTfFH%2F7R8HaaRyaeS4U423EAvhzxZ5T9ebTfi8gXSMQceY3k5X0Dh0yF6CxpCIfhz3BTfHj5ffZbd4ZErVfADx%2FhZ3a0EIxI5Q5G4%2F9NqsaclBdoc9pM%2BCWpVj7XHoh9D3P6oVQnc%2B6oQDJsHJT3Pqkzg0nGmVxop0hk5f7b67%2BGswprp49FLxPPNIluip182hzKrEUvdVNxBIOTklVRTfOty5riHfW6AyEtFS0b3KreT27z99N9WRjP92E%2BMNqKgMUGOqUBGJXqiFvHiQgVoU34Fyck%2BAal42RYgMwKuFkGuw15SHtF5BHbsZuOqKltGdJ8WNPT3A8dIHxv%2BumvpgdekKo2obgN%2BH3huCuj2To98tCHtUiYbxV3bMaV5ff7RQHx5nC28agI2Fe0m5vRtl3ML2mZg4Y2z9kgKG%2Btuxl8vfKA%2Br06U%2BCLR8geyNNWZqy1ypZ2v9Aqwc6xlQSHBw7rAXf0RUmaZhb5&X-Amz-Signature=17e2baaafc72e9e690384713a0a70d81a0439a0c26851686ccd3404693e7bd72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WRYY57M%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIA7ZNNsLmcJPS5NhJb3v%2BhXfcwF5U70mTZ3juqe%2BpyqmAiB7%2FP%2FfNJkjW8I7NwXfwfwBm6%2FGD5UYGqXS5rLHAhpQrir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMy%2B1Neqnz1NjPdK24KtwDbM32jkOt%2BIlKajtAHK43EJptvOoVQRx33ok8BbexjQSssXqsnQoS4uwxnN1LpNnyOhlucspiv9JyHvu%2FgZr3CjtnBI6oinq3C1HVvQqHg%2F3NtFTY0lYeDX4%2B9Ih3Wa0Q8fhuIbbAIxjEiU%2BMGTAfvo%2B3NKHFr6UddrA8yOE7dXI0TlTlgqqBPFIc06MhQkYqN3p3DshmIcyDbrz9%2Fo%2BKjrRGoD9o4LRBXrQcr7oCxISpTL0VkP6X3o9fdyl18BrCDHkj5yUvGjaa8bK2ZINOsg3fCdFWVF0zoHF%2Bx%2FYbalzQIqyJQrFk0tJUYUrrsrT9r%2BOha6t4425%2Buv1BYVUtxfQNg8vq4wfC0N6rv4oMwPZOiSpSju3WLeIn95RFaocVdssVnVi2KgVCR54qfUtZYty3Tm0IwMh2mOSrKXnMXjYEIXgkZ%2BQoDJ%2F15Yyk9X5abAXDyOBJ1vdtE0DBfzJr8PVGjeMht0KiofjKBUhS4FgNgp1RAaqsbprwtciLhCp0TJGePzUJdT%2BCn5wEeqfOh3mzWCB4wSLeCfVvHCywNdBMyg%2Ff7jvJJMj1pBM90sNCd1f4SDOMoGesnBIB3zghuYl0XyU8pGt9PC47n0aWeQ2yqoN%2BTgt1LltguPMwxOT%2FxAY6pgEma3Z42rvV1QiRqGoDm3veLckWLBB0xeNHlH6r76WtJ14UCmXtT%2BAQUbApJBxMwSGaitJSF%2ByHbVfj%2BZUylosSvoB4Z8CKfBDdEuvi57XTtxQ5HD1QkG2oa3tALjbPdTjL2x7FgUt%2F0tNjyQpbmwCpbXysUh%2BwGgYuvXksb2Aa1WlSbjXYMRPsASX3TIaet6ZnMDxJXLazd8Xe8xW4PZoYQg18PRnt&X-Amz-Signature=952ea18ba66b4ce7abad3938c708902c22f942782f8a5c2448ad80672ae7d433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSYZS6C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICbLYHp%2BcqmRU%2FSineBLC1hKluz80x3g%2BIUBwUlhq8cVAiEAwlZBZHBp4PkPqeL6wFxY%2FF%2FeCSv8Y%2BgP%2FAeoyV%2BSqp8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI7NFYE6nEfs8ixKfyrcA%2BAp6roQOHqRdxOLX0D9kDaJjY0jX%2BWG%2F%2F0Eep%2FREXwBeAbt%2BnUe7kVxipjTPfTDbxJPa%2FkMYNE7aw%2F1wlUtfdAB6gNRIew%2FYsAIn1FkPlw4lqUya%2BWLNE5O2nOBVIAkNf6edeRNX33d0sBapkXar%2BUSFILE2YhOtDfL39l%2FvNlW1jqh9cYN6qSSEy3v1vLr53dXc%2BrCqQOe4yhMQdkviEt%2BnYltOgdhETZhPt%2FalH8%2F46kTyGkJULfCOMPGTTHSe6FrV%2BStc4UWIYCz76TM7RjclqA0GrNfzgb9NpkISuoK%2Fe%2Fcc%2Bzfnor3oQh5FzjCXYVfYLojOC8j0fX5Z0Yyv9dLZCzkTSq1g3wXjGqrmg3GrieoxKaqaMryroRNj6tEROjS%2F4RqHhdImTC0fPYZ0pFmRIb%2BjO05KGoZg3IfBskq4BRQ1pLIhcTiBf%2FuFxYiJcu2wMJv5tzHVmQDQbIqpgPwpaGoBsDTf%2ByDF%2FsyE6XdGVZe7EiFQ8UCS%2BnAhp58cJNJp7zW4qf1Y%2BJAac%2Fg%2BMlQ3QqgJgtWG6F32dt9VXAZpkqyAm92BPF9CXPo2tfZ4OPXkWkgjw%2FTafhWc2RMgA7BWntXoKpiW0emdbkDs4nDUM230%2FA4Cyocjn1WMO6KgMUGOqUBv7eM%2Btr2H26fHC%2B1R8FWBtM87Cu1ZEjdHoszJfnkYqcdRs60NgXX96ezK0OPYs7GXQEK6YuZgWmxxBoPUKwt7GSRotdZAFvJ0R2h93FpC5RNUdXDriMMx4M%2BxzfudwV%2BD4Zi%2BKUWg8wKkk6n2ihq9uKaf1Ag2WMbLAsfrPmZPNjBzarOguQDt4tkhd9267ZgAJE7%2B8cusPJkJMuHT0Zh%2BACRh%2Bkc&X-Amz-Signature=edf5d850fce39e1c59644789b777823896502a6aea4810eba8e4918e66a036a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=36aae72ef9129baf6a0a9c21c039d9a07d3b3b26612a3d31e5ffcde00f145b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPUFUUO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDJ66EbYlbk9%2FvNcdWMrERHOEnOYg%2BQ8xHTLvR13oPWNQIgPPO8yfMHJuGNvcVo5LL3GxjxcKlKWIbn3qb6gw4wC4Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA1pal7bO77MWn5n9SrcA7gAPhW3zyHMTSEIiMfYPmtI5oi1CpWHtTy5oCwD6qPJWyLP%2BQsdjNpZ%2FhQ5lJhRpz%2F3L8CmO836wvqs9XiFlSCovMHeoxq6yd%2F8DVqE0nsNSHfDPpUY1f08637psRlLKZr5i%2BBbznWaiAEWXngRdKiZCP6%2FIJNUwzXxFHI3r1KlJLfe7JC%2BFOH81mA28yJ4I%2FTjutua9EeTJnR3sPS8MDc%2FNpPa4DHiulVUhEZ%2FQOwQTV9zwOaXpV%2B2wTZhRGe8nnFHJ4q39mJLPgh%2B2y8K731QW%2F70xKFofR5irth0prO%2FTUSlZSf0PMeqL0NIu8WNHyIc1OaBMCxI0tD0MgDqoua5AhXlluuh9QguIq2gUpyzS8gfIVeDvAODzOdVVus%2FUPol02Sb%2FGnDHYBX%2BTM5IWDBbyqnByce660ARrjUQ0p6%2F5%2B5vLneEMFHQ92nmmokDbMOdRB3X9h4C002MYuz1MSGrvNDHvqMDw6jThYRC30M3ZqHljJW1JmC1s%2BDNERHcnFbUsGUKcmLzSMoY8Z3hXTj7Wa0zDsxcHX6SRGKVEcNtuezebWPrtdfpaPqgD1p8RKCyy1XOA%2FKZ6ir7VSbKPBmupA41g31cYjjKyycaC5Q5q6gaY293MrnGZ8BMMDk%2F8QGOqUB1FeWI%2FgEPPgtJpEKsiILbYn9YkiRyfLo%2B7pUAUPpOUMU7CJeT5J8gJKGTTld9Ca04hBRiok8i5Ucwg7JrXlFy2ZApUt%2Fkh09G7H%2BWGm%2FW7U5oWhiLc9zX4F9Af4dpoGnaylRBpdkxwS48cDPx4P1UFuWmS0ulfknRemhUc4KvNAEpPQj5fNmKYtRVuz%2FgcZmNpr%2Bk6BgYaAKvGWEqiIvgF8WgfWj&X-Amz-Signature=7088f8a0b0e2d252e95a040f98ce340f0a77f2b1007027df2bda473637c0951a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAFRQWS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHglmUA16kqEdys%2FCY1XJB7LaVMaPyI7Zyd9B10Y3%2F3%2FAiA6qCVpebmcrRTfRTKMCxqH%2FnnHJ%2FibmuhxJdPkRUJzkyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCYBFlBt88vSerllKKtwDAVoLwRPg509JZw5a0tZv72%2FK9SSZtZRHEb4L1SKSgALGRzy%2Fz%2FBsvWJmBZ6%2BociQwlhQVB382OKXYqUWzEQBrc10hNwX%2BlQ63K6Powf90mYl7rcQQOTCBsVbgray%2Bw230oFUXcBh6FakukQ%2BqD%2BOJeuNQ%2FMebcCzW2SWcu1bIVqN1KbkJt%2FUliZnB5QLTwbYqOp6FT3dU6QZ6N5YStFKlViC7HQEzAov6jukj0i65H%2Bpg8d5SrPIqrYuXn%2B9Q41brn8dOjt%2BmV9RsyDEHAXLsziAdjHCj8%2FoIPn22y3ifxyLy8AiCfFk%2BLiTa%2Fmsy6Y1OZ5q3O4%2BgScxXjziDGMGfAqnogdMg%2F1kFJUKVDjYFL1swWEwgrFHLPeyhwUjZlQNCsMcjrIWxun%2Brgkx7bepNSfytHwLeB%2Fmi%2B2IUHIVcm7sVogDj4k0hdhn%2BiVZWxMy2Ew2p1mRBb8ePuLZs5%2FJHp5CoRyCbMGVd4oYWIoKFvl4Y3fTpcjjNiqBlCYD1O4hSpD8mZMtz2269CES9hcfBa7ebvXHggKoORsz%2F0m3JYyQrrm8ul5LazuShS8a%2Brfheyw01ARJ2O3BA5h0YoyMxuF0xFygU1GVumDauNXYW7QM2ly9GTPCKBP6qxMw6IqAxQY6pgEUz2BF%2BMaD%2BQzb39%2BHw%2BksWjkNETVorkQTyGnDGE%2FFk1uNlJQzjZ8yonN1T83lHZyhi6%2BSl%2FLlMGpi3eSaLghneyiERYVKqeM6ZXP6gVynL2I2NG9%2BrevuXBBVqq4VvDzG85xfkr8fqRiLEaiqsLL9wN2WgVDUBfR%2BFRN7RXSL4QIozIi8CHy93R%2Fq57%2BhVRtejpLIB0coZ0KDmCqpEFe7WLfYvlqW&X-Amz-Signature=c39857505385ebf9033c6b663f7365c69c15f128c2cc73e0fe0b896f1b488049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAFRQWS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHglmUA16kqEdys%2FCY1XJB7LaVMaPyI7Zyd9B10Y3%2F3%2FAiA6qCVpebmcrRTfRTKMCxqH%2FnnHJ%2FibmuhxJdPkRUJzkyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCYBFlBt88vSerllKKtwDAVoLwRPg509JZw5a0tZv72%2FK9SSZtZRHEb4L1SKSgALGRzy%2Fz%2FBsvWJmBZ6%2BociQwlhQVB382OKXYqUWzEQBrc10hNwX%2BlQ63K6Powf90mYl7rcQQOTCBsVbgray%2Bw230oFUXcBh6FakukQ%2BqD%2BOJeuNQ%2FMebcCzW2SWcu1bIVqN1KbkJt%2FUliZnB5QLTwbYqOp6FT3dU6QZ6N5YStFKlViC7HQEzAov6jukj0i65H%2Bpg8d5SrPIqrYuXn%2B9Q41brn8dOjt%2BmV9RsyDEHAXLsziAdjHCj8%2FoIPn22y3ifxyLy8AiCfFk%2BLiTa%2Fmsy6Y1OZ5q3O4%2BgScxXjziDGMGfAqnogdMg%2F1kFJUKVDjYFL1swWEwgrFHLPeyhwUjZlQNCsMcjrIWxun%2Brgkx7bepNSfytHwLeB%2Fmi%2B2IUHIVcm7sVogDj4k0hdhn%2BiVZWxMy2Ew2p1mRBb8ePuLZs5%2FJHp5CoRyCbMGVd4oYWIoKFvl4Y3fTpcjjNiqBlCYD1O4hSpD8mZMtz2269CES9hcfBa7ebvXHggKoORsz%2F0m3JYyQrrm8ul5LazuShS8a%2Brfheyw01ARJ2O3BA5h0YoyMxuF0xFygU1GVumDauNXYW7QM2ly9GTPCKBP6qxMw6IqAxQY6pgEUz2BF%2BMaD%2BQzb39%2BHw%2BksWjkNETVorkQTyGnDGE%2FFk1uNlJQzjZ8yonN1T83lHZyhi6%2BSl%2FLlMGpi3eSaLghneyiERYVKqeM6ZXP6gVynL2I2NG9%2BrevuXBBVqq4VvDzG85xfkr8fqRiLEaiqsLL9wN2WgVDUBfR%2BFRN7RXSL4QIozIi8CHy93R%2Fq57%2BhVRtejpLIB0coZ0KDmCqpEFe7WLfYvlqW&X-Amz-Signature=4dda0e28017f105119caa4ede59862a059fbb4d24463d1bb4e7da5a316134a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAFRQWS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHglmUA16kqEdys%2FCY1XJB7LaVMaPyI7Zyd9B10Y3%2F3%2FAiA6qCVpebmcrRTfRTKMCxqH%2FnnHJ%2FibmuhxJdPkRUJzkyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCYBFlBt88vSerllKKtwDAVoLwRPg509JZw5a0tZv72%2FK9SSZtZRHEb4L1SKSgALGRzy%2Fz%2FBsvWJmBZ6%2BociQwlhQVB382OKXYqUWzEQBrc10hNwX%2BlQ63K6Powf90mYl7rcQQOTCBsVbgray%2Bw230oFUXcBh6FakukQ%2BqD%2BOJeuNQ%2FMebcCzW2SWcu1bIVqN1KbkJt%2FUliZnB5QLTwbYqOp6FT3dU6QZ6N5YStFKlViC7HQEzAov6jukj0i65H%2Bpg8d5SrPIqrYuXn%2B9Q41brn8dOjt%2BmV9RsyDEHAXLsziAdjHCj8%2FoIPn22y3ifxyLy8AiCfFk%2BLiTa%2Fmsy6Y1OZ5q3O4%2BgScxXjziDGMGfAqnogdMg%2F1kFJUKVDjYFL1swWEwgrFHLPeyhwUjZlQNCsMcjrIWxun%2Brgkx7bepNSfytHwLeB%2Fmi%2B2IUHIVcm7sVogDj4k0hdhn%2BiVZWxMy2Ew2p1mRBb8ePuLZs5%2FJHp5CoRyCbMGVd4oYWIoKFvl4Y3fTpcjjNiqBlCYD1O4hSpD8mZMtz2269CES9hcfBa7ebvXHggKoORsz%2F0m3JYyQrrm8ul5LazuShS8a%2Brfheyw01ARJ2O3BA5h0YoyMxuF0xFygU1GVumDauNXYW7QM2ly9GTPCKBP6qxMw6IqAxQY6pgEUz2BF%2BMaD%2BQzb39%2BHw%2BksWjkNETVorkQTyGnDGE%2FFk1uNlJQzjZ8yonN1T83lHZyhi6%2BSl%2FLlMGpi3eSaLghneyiERYVKqeM6ZXP6gVynL2I2NG9%2BrevuXBBVqq4VvDzG85xfkr8fqRiLEaiqsLL9wN2WgVDUBfR%2BFRN7RXSL4QIozIi8CHy93R%2Fq57%2BhVRtejpLIB0coZ0KDmCqpEFe7WLfYvlqW&X-Amz-Signature=32d76b861898277638a36ec3a7927a7033003fdc5330aab966ee25778cda2289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAFRQWS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHglmUA16kqEdys%2FCY1XJB7LaVMaPyI7Zyd9B10Y3%2F3%2FAiA6qCVpebmcrRTfRTKMCxqH%2FnnHJ%2FibmuhxJdPkRUJzkyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCYBFlBt88vSerllKKtwDAVoLwRPg509JZw5a0tZv72%2FK9SSZtZRHEb4L1SKSgALGRzy%2Fz%2FBsvWJmBZ6%2BociQwlhQVB382OKXYqUWzEQBrc10hNwX%2BlQ63K6Powf90mYl7rcQQOTCBsVbgray%2Bw230oFUXcBh6FakukQ%2BqD%2BOJeuNQ%2FMebcCzW2SWcu1bIVqN1KbkJt%2FUliZnB5QLTwbYqOp6FT3dU6QZ6N5YStFKlViC7HQEzAov6jukj0i65H%2Bpg8d5SrPIqrYuXn%2B9Q41brn8dOjt%2BmV9RsyDEHAXLsziAdjHCj8%2FoIPn22y3ifxyLy8AiCfFk%2BLiTa%2Fmsy6Y1OZ5q3O4%2BgScxXjziDGMGfAqnogdMg%2F1kFJUKVDjYFL1swWEwgrFHLPeyhwUjZlQNCsMcjrIWxun%2Brgkx7bepNSfytHwLeB%2Fmi%2B2IUHIVcm7sVogDj4k0hdhn%2BiVZWxMy2Ew2p1mRBb8ePuLZs5%2FJHp5CoRyCbMGVd4oYWIoKFvl4Y3fTpcjjNiqBlCYD1O4hSpD8mZMtz2269CES9hcfBa7ebvXHggKoORsz%2F0m3JYyQrrm8ul5LazuShS8a%2Brfheyw01ARJ2O3BA5h0YoyMxuF0xFygU1GVumDauNXYW7QM2ly9GTPCKBP6qxMw6IqAxQY6pgEUz2BF%2BMaD%2BQzb39%2BHw%2BksWjkNETVorkQTyGnDGE%2FFk1uNlJQzjZ8yonN1T83lHZyhi6%2BSl%2FLlMGpi3eSaLghneyiERYVKqeM6ZXP6gVynL2I2NG9%2BrevuXBBVqq4VvDzG85xfkr8fqRiLEaiqsLL9wN2WgVDUBfR%2BFRN7RXSL4QIozIi8CHy93R%2Fq57%2BhVRtejpLIB0coZ0KDmCqpEFe7WLfYvlqW&X-Amz-Signature=e9fde63359f3b1c5251f8f796846cb45cece169b924885b9d0b83e8a253f91e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAFRQWS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHglmUA16kqEdys%2FCY1XJB7LaVMaPyI7Zyd9B10Y3%2F3%2FAiA6qCVpebmcrRTfRTKMCxqH%2FnnHJ%2FibmuhxJdPkRUJzkyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCYBFlBt88vSerllKKtwDAVoLwRPg509JZw5a0tZv72%2FK9SSZtZRHEb4L1SKSgALGRzy%2Fz%2FBsvWJmBZ6%2BociQwlhQVB382OKXYqUWzEQBrc10hNwX%2BlQ63K6Powf90mYl7rcQQOTCBsVbgray%2Bw230oFUXcBh6FakukQ%2BqD%2BOJeuNQ%2FMebcCzW2SWcu1bIVqN1KbkJt%2FUliZnB5QLTwbYqOp6FT3dU6QZ6N5YStFKlViC7HQEzAov6jukj0i65H%2Bpg8d5SrPIqrYuXn%2B9Q41brn8dOjt%2BmV9RsyDEHAXLsziAdjHCj8%2FoIPn22y3ifxyLy8AiCfFk%2BLiTa%2Fmsy6Y1OZ5q3O4%2BgScxXjziDGMGfAqnogdMg%2F1kFJUKVDjYFL1swWEwgrFHLPeyhwUjZlQNCsMcjrIWxun%2Brgkx7bepNSfytHwLeB%2Fmi%2B2IUHIVcm7sVogDj4k0hdhn%2BiVZWxMy2Ew2p1mRBb8ePuLZs5%2FJHp5CoRyCbMGVd4oYWIoKFvl4Y3fTpcjjNiqBlCYD1O4hSpD8mZMtz2269CES9hcfBa7ebvXHggKoORsz%2F0m3JYyQrrm8ul5LazuShS8a%2Brfheyw01ARJ2O3BA5h0YoyMxuF0xFygU1GVumDauNXYW7QM2ly9GTPCKBP6qxMw6IqAxQY6pgEUz2BF%2BMaD%2BQzb39%2BHw%2BksWjkNETVorkQTyGnDGE%2FFk1uNlJQzjZ8yonN1T83lHZyhi6%2BSl%2FLlMGpi3eSaLghneyiERYVKqeM6ZXP6gVynL2I2NG9%2BrevuXBBVqq4VvDzG85xfkr8fqRiLEaiqsLL9wN2WgVDUBfR%2BFRN7RXSL4QIozIi8CHy93R%2Fq57%2BhVRtejpLIB0coZ0KDmCqpEFe7WLfYvlqW&X-Amz-Signature=6a481ab03ea4a8a1333bdea47df48ffc3799e051a5e75852d5f1a46d5e73d872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAFRQWS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHglmUA16kqEdys%2FCY1XJB7LaVMaPyI7Zyd9B10Y3%2F3%2FAiA6qCVpebmcrRTfRTKMCxqH%2FnnHJ%2FibmuhxJdPkRUJzkyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCYBFlBt88vSerllKKtwDAVoLwRPg509JZw5a0tZv72%2FK9SSZtZRHEb4L1SKSgALGRzy%2Fz%2FBsvWJmBZ6%2BociQwlhQVB382OKXYqUWzEQBrc10hNwX%2BlQ63K6Powf90mYl7rcQQOTCBsVbgray%2Bw230oFUXcBh6FakukQ%2BqD%2BOJeuNQ%2FMebcCzW2SWcu1bIVqN1KbkJt%2FUliZnB5QLTwbYqOp6FT3dU6QZ6N5YStFKlViC7HQEzAov6jukj0i65H%2Bpg8d5SrPIqrYuXn%2B9Q41brn8dOjt%2BmV9RsyDEHAXLsziAdjHCj8%2FoIPn22y3ifxyLy8AiCfFk%2BLiTa%2Fmsy6Y1OZ5q3O4%2BgScxXjziDGMGfAqnogdMg%2F1kFJUKVDjYFL1swWEwgrFHLPeyhwUjZlQNCsMcjrIWxun%2Brgkx7bepNSfytHwLeB%2Fmi%2B2IUHIVcm7sVogDj4k0hdhn%2BiVZWxMy2Ew2p1mRBb8ePuLZs5%2FJHp5CoRyCbMGVd4oYWIoKFvl4Y3fTpcjjNiqBlCYD1O4hSpD8mZMtz2269CES9hcfBa7ebvXHggKoORsz%2F0m3JYyQrrm8ul5LazuShS8a%2Brfheyw01ARJ2O3BA5h0YoyMxuF0xFygU1GVumDauNXYW7QM2ly9GTPCKBP6qxMw6IqAxQY6pgEUz2BF%2BMaD%2BQzb39%2BHw%2BksWjkNETVorkQTyGnDGE%2FFk1uNlJQzjZ8yonN1T83lHZyhi6%2BSl%2FLlMGpi3eSaLghneyiERYVKqeM6ZXP6gVynL2I2NG9%2BrevuXBBVqq4VvDzG85xfkr8fqRiLEaiqsLL9wN2WgVDUBfR%2BFRN7RXSL4QIozIi8CHy93R%2Fq57%2BhVRtejpLIB0coZ0KDmCqpEFe7WLfYvlqW&X-Amz-Signature=437c262f1d608f7020f88776a158504f151e8cef7a01f0db098419aa4a5883ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAFRQWS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHglmUA16kqEdys%2FCY1XJB7LaVMaPyI7Zyd9B10Y3%2F3%2FAiA6qCVpebmcrRTfRTKMCxqH%2FnnHJ%2FibmuhxJdPkRUJzkyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCYBFlBt88vSerllKKtwDAVoLwRPg509JZw5a0tZv72%2FK9SSZtZRHEb4L1SKSgALGRzy%2Fz%2FBsvWJmBZ6%2BociQwlhQVB382OKXYqUWzEQBrc10hNwX%2BlQ63K6Powf90mYl7rcQQOTCBsVbgray%2Bw230oFUXcBh6FakukQ%2BqD%2BOJeuNQ%2FMebcCzW2SWcu1bIVqN1KbkJt%2FUliZnB5QLTwbYqOp6FT3dU6QZ6N5YStFKlViC7HQEzAov6jukj0i65H%2Bpg8d5SrPIqrYuXn%2B9Q41brn8dOjt%2BmV9RsyDEHAXLsziAdjHCj8%2FoIPn22y3ifxyLy8AiCfFk%2BLiTa%2Fmsy6Y1OZ5q3O4%2BgScxXjziDGMGfAqnogdMg%2F1kFJUKVDjYFL1swWEwgrFHLPeyhwUjZlQNCsMcjrIWxun%2Brgkx7bepNSfytHwLeB%2Fmi%2B2IUHIVcm7sVogDj4k0hdhn%2BiVZWxMy2Ew2p1mRBb8ePuLZs5%2FJHp5CoRyCbMGVd4oYWIoKFvl4Y3fTpcjjNiqBlCYD1O4hSpD8mZMtz2269CES9hcfBa7ebvXHggKoORsz%2F0m3JYyQrrm8ul5LazuShS8a%2Brfheyw01ARJ2O3BA5h0YoyMxuF0xFygU1GVumDauNXYW7QM2ly9GTPCKBP6qxMw6IqAxQY6pgEUz2BF%2BMaD%2BQzb39%2BHw%2BksWjkNETVorkQTyGnDGE%2FFk1uNlJQzjZ8yonN1T83lHZyhi6%2BSl%2FLlMGpi3eSaLghneyiERYVKqeM6ZXP6gVynL2I2NG9%2BrevuXBBVqq4VvDzG85xfkr8fqRiLEaiqsLL9wN2WgVDUBfR%2BFRN7RXSL4QIozIi8CHy93R%2Fq57%2BhVRtejpLIB0coZ0KDmCqpEFe7WLfYvlqW&X-Amz-Signature=32d76b861898277638a36ec3a7927a7033003fdc5330aab966ee25778cda2289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAFRQWS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHglmUA16kqEdys%2FCY1XJB7LaVMaPyI7Zyd9B10Y3%2F3%2FAiA6qCVpebmcrRTfRTKMCxqH%2FnnHJ%2FibmuhxJdPkRUJzkyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCYBFlBt88vSerllKKtwDAVoLwRPg509JZw5a0tZv72%2FK9SSZtZRHEb4L1SKSgALGRzy%2Fz%2FBsvWJmBZ6%2BociQwlhQVB382OKXYqUWzEQBrc10hNwX%2BlQ63K6Powf90mYl7rcQQOTCBsVbgray%2Bw230oFUXcBh6FakukQ%2BqD%2BOJeuNQ%2FMebcCzW2SWcu1bIVqN1KbkJt%2FUliZnB5QLTwbYqOp6FT3dU6QZ6N5YStFKlViC7HQEzAov6jukj0i65H%2Bpg8d5SrPIqrYuXn%2B9Q41brn8dOjt%2BmV9RsyDEHAXLsziAdjHCj8%2FoIPn22y3ifxyLy8AiCfFk%2BLiTa%2Fmsy6Y1OZ5q3O4%2BgScxXjziDGMGfAqnogdMg%2F1kFJUKVDjYFL1swWEwgrFHLPeyhwUjZlQNCsMcjrIWxun%2Brgkx7bepNSfytHwLeB%2Fmi%2B2IUHIVcm7sVogDj4k0hdhn%2BiVZWxMy2Ew2p1mRBb8ePuLZs5%2FJHp5CoRyCbMGVd4oYWIoKFvl4Y3fTpcjjNiqBlCYD1O4hSpD8mZMtz2269CES9hcfBa7ebvXHggKoORsz%2F0m3JYyQrrm8ul5LazuShS8a%2Brfheyw01ARJ2O3BA5h0YoyMxuF0xFygU1GVumDauNXYW7QM2ly9GTPCKBP6qxMw6IqAxQY6pgEUz2BF%2BMaD%2BQzb39%2BHw%2BksWjkNETVorkQTyGnDGE%2FFk1uNlJQzjZ8yonN1T83lHZyhi6%2BSl%2FLlMGpi3eSaLghneyiERYVKqeM6ZXP6gVynL2I2NG9%2BrevuXBBVqq4VvDzG85xfkr8fqRiLEaiqsLL9wN2WgVDUBfR%2BFRN7RXSL4QIozIi8CHy93R%2Fq57%2BhVRtejpLIB0coZ0KDmCqpEFe7WLfYvlqW&X-Amz-Signature=ce46d943829d59fc660ed963269dbaa3b63f84301141ca71beec0f367765649e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAFRQWS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHglmUA16kqEdys%2FCY1XJB7LaVMaPyI7Zyd9B10Y3%2F3%2FAiA6qCVpebmcrRTfRTKMCxqH%2FnnHJ%2FibmuhxJdPkRUJzkyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCYBFlBt88vSerllKKtwDAVoLwRPg509JZw5a0tZv72%2FK9SSZtZRHEb4L1SKSgALGRzy%2Fz%2FBsvWJmBZ6%2BociQwlhQVB382OKXYqUWzEQBrc10hNwX%2BlQ63K6Powf90mYl7rcQQOTCBsVbgray%2Bw230oFUXcBh6FakukQ%2BqD%2BOJeuNQ%2FMebcCzW2SWcu1bIVqN1KbkJt%2FUliZnB5QLTwbYqOp6FT3dU6QZ6N5YStFKlViC7HQEzAov6jukj0i65H%2Bpg8d5SrPIqrYuXn%2B9Q41brn8dOjt%2BmV9RsyDEHAXLsziAdjHCj8%2FoIPn22y3ifxyLy8AiCfFk%2BLiTa%2Fmsy6Y1OZ5q3O4%2BgScxXjziDGMGfAqnogdMg%2F1kFJUKVDjYFL1swWEwgrFHLPeyhwUjZlQNCsMcjrIWxun%2Brgkx7bepNSfytHwLeB%2Fmi%2B2IUHIVcm7sVogDj4k0hdhn%2BiVZWxMy2Ew2p1mRBb8ePuLZs5%2FJHp5CoRyCbMGVd4oYWIoKFvl4Y3fTpcjjNiqBlCYD1O4hSpD8mZMtz2269CES9hcfBa7ebvXHggKoORsz%2F0m3JYyQrrm8ul5LazuShS8a%2Brfheyw01ARJ2O3BA5h0YoyMxuF0xFygU1GVumDauNXYW7QM2ly9GTPCKBP6qxMw6IqAxQY6pgEUz2BF%2BMaD%2BQzb39%2BHw%2BksWjkNETVorkQTyGnDGE%2FFk1uNlJQzjZ8yonN1T83lHZyhi6%2BSl%2FLlMGpi3eSaLghneyiERYVKqeM6ZXP6gVynL2I2NG9%2BrevuXBBVqq4VvDzG85xfkr8fqRiLEaiqsLL9wN2WgVDUBfR%2BFRN7RXSL4QIozIi8CHy93R%2Fq57%2BhVRtejpLIB0coZ0KDmCqpEFe7WLfYvlqW&X-Amz-Signature=3a8cddd28acc7d5f40aa041973f5c25a97f1cf50e2d2d772ffaa671900b9b8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAFRQWS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHglmUA16kqEdys%2FCY1XJB7LaVMaPyI7Zyd9B10Y3%2F3%2FAiA6qCVpebmcrRTfRTKMCxqH%2FnnHJ%2FibmuhxJdPkRUJzkyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCYBFlBt88vSerllKKtwDAVoLwRPg509JZw5a0tZv72%2FK9SSZtZRHEb4L1SKSgALGRzy%2Fz%2FBsvWJmBZ6%2BociQwlhQVB382OKXYqUWzEQBrc10hNwX%2BlQ63K6Powf90mYl7rcQQOTCBsVbgray%2Bw230oFUXcBh6FakukQ%2BqD%2BOJeuNQ%2FMebcCzW2SWcu1bIVqN1KbkJt%2FUliZnB5QLTwbYqOp6FT3dU6QZ6N5YStFKlViC7HQEzAov6jukj0i65H%2Bpg8d5SrPIqrYuXn%2B9Q41brn8dOjt%2BmV9RsyDEHAXLsziAdjHCj8%2FoIPn22y3ifxyLy8AiCfFk%2BLiTa%2Fmsy6Y1OZ5q3O4%2BgScxXjziDGMGfAqnogdMg%2F1kFJUKVDjYFL1swWEwgrFHLPeyhwUjZlQNCsMcjrIWxun%2Brgkx7bepNSfytHwLeB%2Fmi%2B2IUHIVcm7sVogDj4k0hdhn%2BiVZWxMy2Ew2p1mRBb8ePuLZs5%2FJHp5CoRyCbMGVd4oYWIoKFvl4Y3fTpcjjNiqBlCYD1O4hSpD8mZMtz2269CES9hcfBa7ebvXHggKoORsz%2F0m3JYyQrrm8ul5LazuShS8a%2Brfheyw01ARJ2O3BA5h0YoyMxuF0xFygU1GVumDauNXYW7QM2ly9GTPCKBP6qxMw6IqAxQY6pgEUz2BF%2BMaD%2BQzb39%2BHw%2BksWjkNETVorkQTyGnDGE%2FFk1uNlJQzjZ8yonN1T83lHZyhi6%2BSl%2FLlMGpi3eSaLghneyiERYVKqeM6ZXP6gVynL2I2NG9%2BrevuXBBVqq4VvDzG85xfkr8fqRiLEaiqsLL9wN2WgVDUBfR%2BFRN7RXSL4QIozIi8CHy93R%2Fq57%2BhVRtejpLIB0coZ0KDmCqpEFe7WLfYvlqW&X-Amz-Signature=6cb53b4ffd6b584ca7c03fea3ad90178f55279e22f2fdab2f699cbe04ed97120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
