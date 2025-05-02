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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLUAKUQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIG%2BUn1zsmn90HPCWhCV7rrzF%2B5Dtl5%2BiWxQTOoRdF1n6AiAqekSp818kumKYDJ1ygzfCaVit%2Fv7H4faTrUFRdURFTiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BDtUKUHDrzQtFcILKtwDmDL1Cmm78K5gGvvMWJ%2FBjcmTTLvvHtPSKuHuCu%2Bgd33sUuLML%2FIMuwqPhoYzfXgHEZsS1lVqLKE2tS43pcFJrF0ym9B5cZwfLlnUgBl3f3di2HzeVYKAoMk61gj%2B3bdhJJZFqxIvyn%2BE4I%2FV8MBsENNFx%2FSHf2PlPvMXALfPvdsLiGoDHdVq7pHsLbrvEYMenv3hNd32qKxFlNmkoLDl%2Fz4VLMuvBvKmJ0YucgmtMZOPQuWb8n3dWec6JSFgf%2FWoleSnwXC8LRYTWzM0L3HanHjoSlPSzgQ7ouen7JcCma3Xi2gd3mm1LG1K07vaQbc8oqyLljPPSmE56LypnDPycUw0D5w%2FbrHyMxLkrM2TyEKXSMxZM6n%2F6Yip49R90cYQQBiDYRVKEy1VqhUZ4UQLkqUGbqarZIUqWPaQ5PDCuKtJ74XIleEJuHx7pGrjpdIvOh0SVaxa1RfqJ2r7aj%2FMAEp5FJXtI%2FqLPT%2FnxeqibofK7TH741uuifB6ZRoYAEDIY2WCtzVjsJQFxzWnqfGUM8NCR9toBeQTBX%2BoSPp%2FkjQnArXTs%2FVhHFpYwpszH9rXuidonJXQdoCS8GE%2BBuJxjMDlx%2FoahkbhXEnX%2FTsUIlwxekr2U%2F%2FI6qJ8ALowjb3RwAY6pgGKyxLAJNNxdfxF%2BIkxPmCST6VprZo3ayBprYhOkFPshkNRJbYTb9CBSsmVIGYE4He1cYtSVSeiXZirOMaegREk4CiPLlmalVyChiWM1RtNtKyDDs14N9rojreLGFUQAbL3sFOk%2FivjMRNOWoUojY%2BcakNzLZzmqD0StZjP0pmdlL3iJ8Q0utqeMQpdbK4EwhBHpX5duI3DcnRoEMpMAvdBAFV2HkD6&X-Amz-Signature=76ebe878dee33aa575c8853d19287cbc75c1d6660236e6d434067c766289b5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLUAKUQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIG%2BUn1zsmn90HPCWhCV7rrzF%2B5Dtl5%2BiWxQTOoRdF1n6AiAqekSp818kumKYDJ1ygzfCaVit%2Fv7H4faTrUFRdURFTiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BDtUKUHDrzQtFcILKtwDmDL1Cmm78K5gGvvMWJ%2FBjcmTTLvvHtPSKuHuCu%2Bgd33sUuLML%2FIMuwqPhoYzfXgHEZsS1lVqLKE2tS43pcFJrF0ym9B5cZwfLlnUgBl3f3di2HzeVYKAoMk61gj%2B3bdhJJZFqxIvyn%2BE4I%2FV8MBsENNFx%2FSHf2PlPvMXALfPvdsLiGoDHdVq7pHsLbrvEYMenv3hNd32qKxFlNmkoLDl%2Fz4VLMuvBvKmJ0YucgmtMZOPQuWb8n3dWec6JSFgf%2FWoleSnwXC8LRYTWzM0L3HanHjoSlPSzgQ7ouen7JcCma3Xi2gd3mm1LG1K07vaQbc8oqyLljPPSmE56LypnDPycUw0D5w%2FbrHyMxLkrM2TyEKXSMxZM6n%2F6Yip49R90cYQQBiDYRVKEy1VqhUZ4UQLkqUGbqarZIUqWPaQ5PDCuKtJ74XIleEJuHx7pGrjpdIvOh0SVaxa1RfqJ2r7aj%2FMAEp5FJXtI%2FqLPT%2FnxeqibofK7TH741uuifB6ZRoYAEDIY2WCtzVjsJQFxzWnqfGUM8NCR9toBeQTBX%2BoSPp%2FkjQnArXTs%2FVhHFpYwpszH9rXuidonJXQdoCS8GE%2BBuJxjMDlx%2FoahkbhXEnX%2FTsUIlwxekr2U%2F%2FI6qJ8ALowjb3RwAY6pgGKyxLAJNNxdfxF%2BIkxPmCST6VprZo3ayBprYhOkFPshkNRJbYTb9CBSsmVIGYE4He1cYtSVSeiXZirOMaegREk4CiPLlmalVyChiWM1RtNtKyDDs14N9rojreLGFUQAbL3sFOk%2FivjMRNOWoUojY%2BcakNzLZzmqD0StZjP0pmdlL3iJ8Q0utqeMQpdbK4EwhBHpX5duI3DcnRoEMpMAvdBAFV2HkD6&X-Amz-Signature=c7d6a433d1bc5a8d6a5c1b111ffc58a935a77619e0f6a336c12dc283ba1e877d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLUAKUQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIG%2BUn1zsmn90HPCWhCV7rrzF%2B5Dtl5%2BiWxQTOoRdF1n6AiAqekSp818kumKYDJ1ygzfCaVit%2Fv7H4faTrUFRdURFTiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BDtUKUHDrzQtFcILKtwDmDL1Cmm78K5gGvvMWJ%2FBjcmTTLvvHtPSKuHuCu%2Bgd33sUuLML%2FIMuwqPhoYzfXgHEZsS1lVqLKE2tS43pcFJrF0ym9B5cZwfLlnUgBl3f3di2HzeVYKAoMk61gj%2B3bdhJJZFqxIvyn%2BE4I%2FV8MBsENNFx%2FSHf2PlPvMXALfPvdsLiGoDHdVq7pHsLbrvEYMenv3hNd32qKxFlNmkoLDl%2Fz4VLMuvBvKmJ0YucgmtMZOPQuWb8n3dWec6JSFgf%2FWoleSnwXC8LRYTWzM0L3HanHjoSlPSzgQ7ouen7JcCma3Xi2gd3mm1LG1K07vaQbc8oqyLljPPSmE56LypnDPycUw0D5w%2FbrHyMxLkrM2TyEKXSMxZM6n%2F6Yip49R90cYQQBiDYRVKEy1VqhUZ4UQLkqUGbqarZIUqWPaQ5PDCuKtJ74XIleEJuHx7pGrjpdIvOh0SVaxa1RfqJ2r7aj%2FMAEp5FJXtI%2FqLPT%2FnxeqibofK7TH741uuifB6ZRoYAEDIY2WCtzVjsJQFxzWnqfGUM8NCR9toBeQTBX%2BoSPp%2FkjQnArXTs%2FVhHFpYwpszH9rXuidonJXQdoCS8GE%2BBuJxjMDlx%2FoahkbhXEnX%2FTsUIlwxekr2U%2F%2FI6qJ8ALowjb3RwAY6pgGKyxLAJNNxdfxF%2BIkxPmCST6VprZo3ayBprYhOkFPshkNRJbYTb9CBSsmVIGYE4He1cYtSVSeiXZirOMaegREk4CiPLlmalVyChiWM1RtNtKyDDs14N9rojreLGFUQAbL3sFOk%2FivjMRNOWoUojY%2BcakNzLZzmqD0StZjP0pmdlL3iJ8Q0utqeMQpdbK4EwhBHpX5duI3DcnRoEMpMAvdBAFV2HkD6&X-Amz-Signature=640ea0dceda6e25542d3dcf5f2591d60d9c73b8e495c30d57394d79fd5c7eb05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLUAKUQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIG%2BUn1zsmn90HPCWhCV7rrzF%2B5Dtl5%2BiWxQTOoRdF1n6AiAqekSp818kumKYDJ1ygzfCaVit%2Fv7H4faTrUFRdURFTiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BDtUKUHDrzQtFcILKtwDmDL1Cmm78K5gGvvMWJ%2FBjcmTTLvvHtPSKuHuCu%2Bgd33sUuLML%2FIMuwqPhoYzfXgHEZsS1lVqLKE2tS43pcFJrF0ym9B5cZwfLlnUgBl3f3di2HzeVYKAoMk61gj%2B3bdhJJZFqxIvyn%2BE4I%2FV8MBsENNFx%2FSHf2PlPvMXALfPvdsLiGoDHdVq7pHsLbrvEYMenv3hNd32qKxFlNmkoLDl%2Fz4VLMuvBvKmJ0YucgmtMZOPQuWb8n3dWec6JSFgf%2FWoleSnwXC8LRYTWzM0L3HanHjoSlPSzgQ7ouen7JcCma3Xi2gd3mm1LG1K07vaQbc8oqyLljPPSmE56LypnDPycUw0D5w%2FbrHyMxLkrM2TyEKXSMxZM6n%2F6Yip49R90cYQQBiDYRVKEy1VqhUZ4UQLkqUGbqarZIUqWPaQ5PDCuKtJ74XIleEJuHx7pGrjpdIvOh0SVaxa1RfqJ2r7aj%2FMAEp5FJXtI%2FqLPT%2FnxeqibofK7TH741uuifB6ZRoYAEDIY2WCtzVjsJQFxzWnqfGUM8NCR9toBeQTBX%2BoSPp%2FkjQnArXTs%2FVhHFpYwpszH9rXuidonJXQdoCS8GE%2BBuJxjMDlx%2FoahkbhXEnX%2FTsUIlwxekr2U%2F%2FI6qJ8ALowjb3RwAY6pgGKyxLAJNNxdfxF%2BIkxPmCST6VprZo3ayBprYhOkFPshkNRJbYTb9CBSsmVIGYE4He1cYtSVSeiXZirOMaegREk4CiPLlmalVyChiWM1RtNtKyDDs14N9rojreLGFUQAbL3sFOk%2FivjMRNOWoUojY%2BcakNzLZzmqD0StZjP0pmdlL3iJ8Q0utqeMQpdbK4EwhBHpX5duI3DcnRoEMpMAvdBAFV2HkD6&X-Amz-Signature=b42ae123d31189293bb2e3e54917b276fc38ec7fff6299fe7c773118740122fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLUAKUQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIG%2BUn1zsmn90HPCWhCV7rrzF%2B5Dtl5%2BiWxQTOoRdF1n6AiAqekSp818kumKYDJ1ygzfCaVit%2Fv7H4faTrUFRdURFTiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BDtUKUHDrzQtFcILKtwDmDL1Cmm78K5gGvvMWJ%2FBjcmTTLvvHtPSKuHuCu%2Bgd33sUuLML%2FIMuwqPhoYzfXgHEZsS1lVqLKE2tS43pcFJrF0ym9B5cZwfLlnUgBl3f3di2HzeVYKAoMk61gj%2B3bdhJJZFqxIvyn%2BE4I%2FV8MBsENNFx%2FSHf2PlPvMXALfPvdsLiGoDHdVq7pHsLbrvEYMenv3hNd32qKxFlNmkoLDl%2Fz4VLMuvBvKmJ0YucgmtMZOPQuWb8n3dWec6JSFgf%2FWoleSnwXC8LRYTWzM0L3HanHjoSlPSzgQ7ouen7JcCma3Xi2gd3mm1LG1K07vaQbc8oqyLljPPSmE56LypnDPycUw0D5w%2FbrHyMxLkrM2TyEKXSMxZM6n%2F6Yip49R90cYQQBiDYRVKEy1VqhUZ4UQLkqUGbqarZIUqWPaQ5PDCuKtJ74XIleEJuHx7pGrjpdIvOh0SVaxa1RfqJ2r7aj%2FMAEp5FJXtI%2FqLPT%2FnxeqibofK7TH741uuifB6ZRoYAEDIY2WCtzVjsJQFxzWnqfGUM8NCR9toBeQTBX%2BoSPp%2FkjQnArXTs%2FVhHFpYwpszH9rXuidonJXQdoCS8GE%2BBuJxjMDlx%2FoahkbhXEnX%2FTsUIlwxekr2U%2F%2FI6qJ8ALowjb3RwAY6pgGKyxLAJNNxdfxF%2BIkxPmCST6VprZo3ayBprYhOkFPshkNRJbYTb9CBSsmVIGYE4He1cYtSVSeiXZirOMaegREk4CiPLlmalVyChiWM1RtNtKyDDs14N9rojreLGFUQAbL3sFOk%2FivjMRNOWoUojY%2BcakNzLZzmqD0StZjP0pmdlL3iJ8Q0utqeMQpdbK4EwhBHpX5duI3DcnRoEMpMAvdBAFV2HkD6&X-Amz-Signature=c5ad7ccf40fc674f0cf43dc3c81fc7ae3932ee9520092fce93fae03be3c0fe51&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLUAKUQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIG%2BUn1zsmn90HPCWhCV7rrzF%2B5Dtl5%2BiWxQTOoRdF1n6AiAqekSp818kumKYDJ1ygzfCaVit%2Fv7H4faTrUFRdURFTiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BDtUKUHDrzQtFcILKtwDmDL1Cmm78K5gGvvMWJ%2FBjcmTTLvvHtPSKuHuCu%2Bgd33sUuLML%2FIMuwqPhoYzfXgHEZsS1lVqLKE2tS43pcFJrF0ym9B5cZwfLlnUgBl3f3di2HzeVYKAoMk61gj%2B3bdhJJZFqxIvyn%2BE4I%2FV8MBsENNFx%2FSHf2PlPvMXALfPvdsLiGoDHdVq7pHsLbrvEYMenv3hNd32qKxFlNmkoLDl%2Fz4VLMuvBvKmJ0YucgmtMZOPQuWb8n3dWec6JSFgf%2FWoleSnwXC8LRYTWzM0L3HanHjoSlPSzgQ7ouen7JcCma3Xi2gd3mm1LG1K07vaQbc8oqyLljPPSmE56LypnDPycUw0D5w%2FbrHyMxLkrM2TyEKXSMxZM6n%2F6Yip49R90cYQQBiDYRVKEy1VqhUZ4UQLkqUGbqarZIUqWPaQ5PDCuKtJ74XIleEJuHx7pGrjpdIvOh0SVaxa1RfqJ2r7aj%2FMAEp5FJXtI%2FqLPT%2FnxeqibofK7TH741uuifB6ZRoYAEDIY2WCtzVjsJQFxzWnqfGUM8NCR9toBeQTBX%2BoSPp%2FkjQnArXTs%2FVhHFpYwpszH9rXuidonJXQdoCS8GE%2BBuJxjMDlx%2FoahkbhXEnX%2FTsUIlwxekr2U%2F%2FI6qJ8ALowjb3RwAY6pgGKyxLAJNNxdfxF%2BIkxPmCST6VprZo3ayBprYhOkFPshkNRJbYTb9CBSsmVIGYE4He1cYtSVSeiXZirOMaegREk4CiPLlmalVyChiWM1RtNtKyDDs14N9rojreLGFUQAbL3sFOk%2FivjMRNOWoUojY%2BcakNzLZzmqD0StZjP0pmdlL3iJ8Q0utqeMQpdbK4EwhBHpX5duI3DcnRoEMpMAvdBAFV2HkD6&X-Amz-Signature=32e1185819b6daad1003cac0038cc5cfc04619ff388b54efe66c3db2ba12ccd8&X-Amz-SignedHeaders=host&x-id=GetObject)
