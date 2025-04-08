---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757RPTYF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvkcO7ZnLdkGYT7yKgo1Eci6%2BcQqsNkHf8YypnSpJx4AiEA8nLzY1X9AwxAteDUoHWgR9gUP%2BbV7%2F4jidPNu2v3UM4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMAx5ck6929jNFNf5ircA0RJxvvM4%2BuCScHaFUoMFO%2FyMoq%2Fj8NE%2FcD7TsLnl3d%2F7xTYjSxCnlGUJ%2BZZTOjb263Qrb%2F45cKSya5%2FbO37Y10h9dzrBFtj1yofAVwJsZb%2FRK1C2OcnOhGgeoxgNAUOT8rWTKHYyI%2BQXhamZNQqXRWSTwFxwge31Hqw1Uil1NX9y%2BkPrgY11cd4A3nEEKlHM%2BWumXGCkdEpVz8xLvYR9ZzWc0yGcGjdMYe8%2FfDWPVEgPhcMT4q9V1e68Zi31%2FmFzzvcrdvZ5FLm815%2BFFGqyn0t6Oh4zArZq3p%2Bfg5DdxMoKdZnUsM%2BA15DLGV2EWxy3ufYLKFTqSyoKYGEXRw8WaCzNs4Z8xCQyVYluwQYKgBMSm1UXVXjA79axbe5%2BqDyVMLWEht2fqTQitobaSDThnnyq4FcvPWRipvsK50Nj4A%2F%2Bd5XuRHxfXmwmQWs7wI%2BYXL%2BgRUk%2FX1OkAJBDQsuiu7tJ4ht5TWNQQp%2BTjK82k927LjG7R9RB9ocn9xmtn%2FvV%2FqcLrRMv3lIepb6ENRTY8PjPV2fLVMu0UJM%2BlNpLndTVG9AFiCkkFiR2nLiRDEWrfCY4iOhNnBBsjV6Q%2FbO%2Bwj3uTWUdLjrREpGDi8eIyEK2Ejn65FaUPAFw61zMLPt0r8GOqUBYgQ3tHATXnwUWCz6FPUxioBDjiI%2FiXhNVSWjSe4JzRbJgJAOBqb0AMHAPgtMz6wpr9bTPIHUIUohSkXianhNttZ2oCIV2FTqlKH74EmAOb1cqKRFHbP9afN3LBx7unbuX6ffbrl%2FSamfYYJ7V4fW%2BGo86Ma0DBHPbto253yW6TXVxl6ToOXSBcPO5wpECE8iBaFWg%2Bz148nfTyy2xqNezFX6WiEp&X-Amz-Signature=432255ec6f4bc564dc3db289b5e3fb6e0079d60d43543557ee8baeb0c7105b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757RPTYF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvkcO7ZnLdkGYT7yKgo1Eci6%2BcQqsNkHf8YypnSpJx4AiEA8nLzY1X9AwxAteDUoHWgR9gUP%2BbV7%2F4jidPNu2v3UM4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMAx5ck6929jNFNf5ircA0RJxvvM4%2BuCScHaFUoMFO%2FyMoq%2Fj8NE%2FcD7TsLnl3d%2F7xTYjSxCnlGUJ%2BZZTOjb263Qrb%2F45cKSya5%2FbO37Y10h9dzrBFtj1yofAVwJsZb%2FRK1C2OcnOhGgeoxgNAUOT8rWTKHYyI%2BQXhamZNQqXRWSTwFxwge31Hqw1Uil1NX9y%2BkPrgY11cd4A3nEEKlHM%2BWumXGCkdEpVz8xLvYR9ZzWc0yGcGjdMYe8%2FfDWPVEgPhcMT4q9V1e68Zi31%2FmFzzvcrdvZ5FLm815%2BFFGqyn0t6Oh4zArZq3p%2Bfg5DdxMoKdZnUsM%2BA15DLGV2EWxy3ufYLKFTqSyoKYGEXRw8WaCzNs4Z8xCQyVYluwQYKgBMSm1UXVXjA79axbe5%2BqDyVMLWEht2fqTQitobaSDThnnyq4FcvPWRipvsK50Nj4A%2F%2Bd5XuRHxfXmwmQWs7wI%2BYXL%2BgRUk%2FX1OkAJBDQsuiu7tJ4ht5TWNQQp%2BTjK82k927LjG7R9RB9ocn9xmtn%2FvV%2FqcLrRMv3lIepb6ENRTY8PjPV2fLVMu0UJM%2BlNpLndTVG9AFiCkkFiR2nLiRDEWrfCY4iOhNnBBsjV6Q%2FbO%2Bwj3uTWUdLjrREpGDi8eIyEK2Ejn65FaUPAFw61zMLPt0r8GOqUBYgQ3tHATXnwUWCz6FPUxioBDjiI%2FiXhNVSWjSe4JzRbJgJAOBqb0AMHAPgtMz6wpr9bTPIHUIUohSkXianhNttZ2oCIV2FTqlKH74EmAOb1cqKRFHbP9afN3LBx7unbuX6ffbrl%2FSamfYYJ7V4fW%2BGo86Ma0DBHPbto253yW6TXVxl6ToOXSBcPO5wpECE8iBaFWg%2Bz148nfTyy2xqNezFX6WiEp&X-Amz-Signature=c1bec2a4c11cb0d5e331fbc5885d967353925799ad3f5ee73c21b59584ebd5ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757RPTYF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvkcO7ZnLdkGYT7yKgo1Eci6%2BcQqsNkHf8YypnSpJx4AiEA8nLzY1X9AwxAteDUoHWgR9gUP%2BbV7%2F4jidPNu2v3UM4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMAx5ck6929jNFNf5ircA0RJxvvM4%2BuCScHaFUoMFO%2FyMoq%2Fj8NE%2FcD7TsLnl3d%2F7xTYjSxCnlGUJ%2BZZTOjb263Qrb%2F45cKSya5%2FbO37Y10h9dzrBFtj1yofAVwJsZb%2FRK1C2OcnOhGgeoxgNAUOT8rWTKHYyI%2BQXhamZNQqXRWSTwFxwge31Hqw1Uil1NX9y%2BkPrgY11cd4A3nEEKlHM%2BWumXGCkdEpVz8xLvYR9ZzWc0yGcGjdMYe8%2FfDWPVEgPhcMT4q9V1e68Zi31%2FmFzzvcrdvZ5FLm815%2BFFGqyn0t6Oh4zArZq3p%2Bfg5DdxMoKdZnUsM%2BA15DLGV2EWxy3ufYLKFTqSyoKYGEXRw8WaCzNs4Z8xCQyVYluwQYKgBMSm1UXVXjA79axbe5%2BqDyVMLWEht2fqTQitobaSDThnnyq4FcvPWRipvsK50Nj4A%2F%2Bd5XuRHxfXmwmQWs7wI%2BYXL%2BgRUk%2FX1OkAJBDQsuiu7tJ4ht5TWNQQp%2BTjK82k927LjG7R9RB9ocn9xmtn%2FvV%2FqcLrRMv3lIepb6ENRTY8PjPV2fLVMu0UJM%2BlNpLndTVG9AFiCkkFiR2nLiRDEWrfCY4iOhNnBBsjV6Q%2FbO%2Bwj3uTWUdLjrREpGDi8eIyEK2Ejn65FaUPAFw61zMLPt0r8GOqUBYgQ3tHATXnwUWCz6FPUxioBDjiI%2FiXhNVSWjSe4JzRbJgJAOBqb0AMHAPgtMz6wpr9bTPIHUIUohSkXianhNttZ2oCIV2FTqlKH74EmAOb1cqKRFHbP9afN3LBx7unbuX6ffbrl%2FSamfYYJ7V4fW%2BGo86Ma0DBHPbto253yW6TXVxl6ToOXSBcPO5wpECE8iBaFWg%2Bz148nfTyy2xqNezFX6WiEp&X-Amz-Signature=19f87a41e939c4e33054fd8e37db1db5c0b63486ce2f38e184350fe5b24163fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757RPTYF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvkcO7ZnLdkGYT7yKgo1Eci6%2BcQqsNkHf8YypnSpJx4AiEA8nLzY1X9AwxAteDUoHWgR9gUP%2BbV7%2F4jidPNu2v3UM4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMAx5ck6929jNFNf5ircA0RJxvvM4%2BuCScHaFUoMFO%2FyMoq%2Fj8NE%2FcD7TsLnl3d%2F7xTYjSxCnlGUJ%2BZZTOjb263Qrb%2F45cKSya5%2FbO37Y10h9dzrBFtj1yofAVwJsZb%2FRK1C2OcnOhGgeoxgNAUOT8rWTKHYyI%2BQXhamZNQqXRWSTwFxwge31Hqw1Uil1NX9y%2BkPrgY11cd4A3nEEKlHM%2BWumXGCkdEpVz8xLvYR9ZzWc0yGcGjdMYe8%2FfDWPVEgPhcMT4q9V1e68Zi31%2FmFzzvcrdvZ5FLm815%2BFFGqyn0t6Oh4zArZq3p%2Bfg5DdxMoKdZnUsM%2BA15DLGV2EWxy3ufYLKFTqSyoKYGEXRw8WaCzNs4Z8xCQyVYluwQYKgBMSm1UXVXjA79axbe5%2BqDyVMLWEht2fqTQitobaSDThnnyq4FcvPWRipvsK50Nj4A%2F%2Bd5XuRHxfXmwmQWs7wI%2BYXL%2BgRUk%2FX1OkAJBDQsuiu7tJ4ht5TWNQQp%2BTjK82k927LjG7R9RB9ocn9xmtn%2FvV%2FqcLrRMv3lIepb6ENRTY8PjPV2fLVMu0UJM%2BlNpLndTVG9AFiCkkFiR2nLiRDEWrfCY4iOhNnBBsjV6Q%2FbO%2Bwj3uTWUdLjrREpGDi8eIyEK2Ejn65FaUPAFw61zMLPt0r8GOqUBYgQ3tHATXnwUWCz6FPUxioBDjiI%2FiXhNVSWjSe4JzRbJgJAOBqb0AMHAPgtMz6wpr9bTPIHUIUohSkXianhNttZ2oCIV2FTqlKH74EmAOb1cqKRFHbP9afN3LBx7unbuX6ffbrl%2FSamfYYJ7V4fW%2BGo86Ma0DBHPbto253yW6TXVxl6ToOXSBcPO5wpECE8iBaFWg%2Bz148nfTyy2xqNezFX6WiEp&X-Amz-Signature=4ca6d45c634e61e8655a70e90884010e40912e58ac2de8ebabca18d84df43b57&X-Amz-SignedHeaders=host&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757RPTYF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvkcO7ZnLdkGYT7yKgo1Eci6%2BcQqsNkHf8YypnSpJx4AiEA8nLzY1X9AwxAteDUoHWgR9gUP%2BbV7%2F4jidPNu2v3UM4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMAx5ck6929jNFNf5ircA0RJxvvM4%2BuCScHaFUoMFO%2FyMoq%2Fj8NE%2FcD7TsLnl3d%2F7xTYjSxCnlGUJ%2BZZTOjb263Qrb%2F45cKSya5%2FbO37Y10h9dzrBFtj1yofAVwJsZb%2FRK1C2OcnOhGgeoxgNAUOT8rWTKHYyI%2BQXhamZNQqXRWSTwFxwge31Hqw1Uil1NX9y%2BkPrgY11cd4A3nEEKlHM%2BWumXGCkdEpVz8xLvYR9ZzWc0yGcGjdMYe8%2FfDWPVEgPhcMT4q9V1e68Zi31%2FmFzzvcrdvZ5FLm815%2BFFGqyn0t6Oh4zArZq3p%2Bfg5DdxMoKdZnUsM%2BA15DLGV2EWxy3ufYLKFTqSyoKYGEXRw8WaCzNs4Z8xCQyVYluwQYKgBMSm1UXVXjA79axbe5%2BqDyVMLWEht2fqTQitobaSDThnnyq4FcvPWRipvsK50Nj4A%2F%2Bd5XuRHxfXmwmQWs7wI%2BYXL%2BgRUk%2FX1OkAJBDQsuiu7tJ4ht5TWNQQp%2BTjK82k927LjG7R9RB9ocn9xmtn%2FvV%2FqcLrRMv3lIepb6ENRTY8PjPV2fLVMu0UJM%2BlNpLndTVG9AFiCkkFiR2nLiRDEWrfCY4iOhNnBBsjV6Q%2FbO%2Bwj3uTWUdLjrREpGDi8eIyEK2Ejn65FaUPAFw61zMLPt0r8GOqUBYgQ3tHATXnwUWCz6FPUxioBDjiI%2FiXhNVSWjSe4JzRbJgJAOBqb0AMHAPgtMz6wpr9bTPIHUIUohSkXianhNttZ2oCIV2FTqlKH74EmAOb1cqKRFHbP9afN3LBx7unbuX6ffbrl%2FSamfYYJ7V4fW%2BGo86Ma0DBHPbto253yW6TXVxl6ToOXSBcPO5wpECE8iBaFWg%2Bz148nfTyy2xqNezFX6WiEp&X-Amz-Signature=4db75385fc0575d23bf0d02a3792d3601cbf9762966ba2a3570fdaa009539c90&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757RPTYF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvkcO7ZnLdkGYT7yKgo1Eci6%2BcQqsNkHf8YypnSpJx4AiEA8nLzY1X9AwxAteDUoHWgR9gUP%2BbV7%2F4jidPNu2v3UM4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMAx5ck6929jNFNf5ircA0RJxvvM4%2BuCScHaFUoMFO%2FyMoq%2Fj8NE%2FcD7TsLnl3d%2F7xTYjSxCnlGUJ%2BZZTOjb263Qrb%2F45cKSya5%2FbO37Y10h9dzrBFtj1yofAVwJsZb%2FRK1C2OcnOhGgeoxgNAUOT8rWTKHYyI%2BQXhamZNQqXRWSTwFxwge31Hqw1Uil1NX9y%2BkPrgY11cd4A3nEEKlHM%2BWumXGCkdEpVz8xLvYR9ZzWc0yGcGjdMYe8%2FfDWPVEgPhcMT4q9V1e68Zi31%2FmFzzvcrdvZ5FLm815%2BFFGqyn0t6Oh4zArZq3p%2Bfg5DdxMoKdZnUsM%2BA15DLGV2EWxy3ufYLKFTqSyoKYGEXRw8WaCzNs4Z8xCQyVYluwQYKgBMSm1UXVXjA79axbe5%2BqDyVMLWEht2fqTQitobaSDThnnyq4FcvPWRipvsK50Nj4A%2F%2Bd5XuRHxfXmwmQWs7wI%2BYXL%2BgRUk%2FX1OkAJBDQsuiu7tJ4ht5TWNQQp%2BTjK82k927LjG7R9RB9ocn9xmtn%2FvV%2FqcLrRMv3lIepb6ENRTY8PjPV2fLVMu0UJM%2BlNpLndTVG9AFiCkkFiR2nLiRDEWrfCY4iOhNnBBsjV6Q%2FbO%2Bwj3uTWUdLjrREpGDi8eIyEK2Ejn65FaUPAFw61zMLPt0r8GOqUBYgQ3tHATXnwUWCz6FPUxioBDjiI%2FiXhNVSWjSe4JzRbJgJAOBqb0AMHAPgtMz6wpr9bTPIHUIUohSkXianhNttZ2oCIV2FTqlKH74EmAOb1cqKRFHbP9afN3LBx7unbuX6ffbrl%2FSamfYYJ7V4fW%2BGo86Ma0DBHPbto253yW6TXVxl6ToOXSBcPO5wpECE8iBaFWg%2Bz148nfTyy2xqNezFX6WiEp&X-Amz-Signature=3f3f0ed3cc16b575dc94f63f8355a4311512d1f902cd5b97224d410750df877c&X-Amz-SignedHeaders=host&x-id=GetObject)
