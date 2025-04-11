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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3E7QI5X%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICwOhh69zxm%2BSjcMz2MRW9XtFhyNxb4lerKyezqtSbxdAiEAvjaUDHh9a%2B2%2BBjTo1mLx5nTvUbNQUYfS2%2BziCcvApjIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw052g%2B0LYCkKB3cSrcA%2FVVA8bBa75i%2BnhtdXLbZAJakDEzEmZqSeq8TZrhdlTn%2BbmPyomkoJ7njC0Y6mtObvk%2FV8sKHxMWrt4TS9bgfogyl5tX27bug54LYLe3dsV9Z1Rs4YZWCHa%2B0G18%2BNBr%2Bmw4UQvXHGl3ZoNDOeQfNj9TFj4NoO2Uap375THWAS4pmdOaD8l7WVQsFwZnlElObw2YD1qpgIMGH%2FtiyWStvObNzhVmY4YthyK7Fim0F2pGq7uhJEMxDX22S78mJBakgRj3X1ZZKhDBm7aB7vBZ04b%2F7bmde3UZ2ub3sqJE4YiAaIykLq76skeAjvPJsbmfWOfTqWP7Pwa8kTo%2BJpGavPlr5%2F3d7C7j%2FgTbhbbRyV2GHEcrNVhkBXnG1U2br11SGNaa77SLuB449wGXXSBhE6RT94AgHkxUR8lP%2FIkIetWT69k%2Fpjx4oTrPyNRr9qHBPmTANAahnmF5zJZ2IOEdEAF%2Bt%2Bkv%2F8yFRiaa4SsOfg7XvVafxEakN%2BXWLrd7K6C5TMCENiBezWw%2FYD%2BywoM4PyNXAoOWUYNpCYi3kraFehY%2Fpkp4s%2BZwDn23LWDvk3%2F4UzUf54kXDg8xy%2B%2F%2BHmkmBKg8fAn2PKuNEwQN%2BfgyNc8nRRnf6O0haNPpvRXUMI2M5b8GOqUBnSxWVhEKxM%2FFmJ%2Fh56GnU6dpQXHvKKaUnuT9zEyvL7rMA5hosG%2F0Yhb3d%2BN0Uv0x7x8oULug%2FAOKIAjTCTb3N4icZiTZntNeDL5C5qfi8yqFxhahJssxwfCstGftxcMQfW8DE4MC2zCMOnvELEPLjTnx9IrUDh5jHeztQYOF4cAA7OfRxBrxJfkrBVLPkxb9VkxrRNJYSAwPOdKSEj8kXciG1Ymh&X-Amz-Signature=859b736ae27673dcdd45cf2acc53c571918e6e87158a50277f6848c0edc600cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3E7QI5X%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICwOhh69zxm%2BSjcMz2MRW9XtFhyNxb4lerKyezqtSbxdAiEAvjaUDHh9a%2B2%2BBjTo1mLx5nTvUbNQUYfS2%2BziCcvApjIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw052g%2B0LYCkKB3cSrcA%2FVVA8bBa75i%2BnhtdXLbZAJakDEzEmZqSeq8TZrhdlTn%2BbmPyomkoJ7njC0Y6mtObvk%2FV8sKHxMWrt4TS9bgfogyl5tX27bug54LYLe3dsV9Z1Rs4YZWCHa%2B0G18%2BNBr%2Bmw4UQvXHGl3ZoNDOeQfNj9TFj4NoO2Uap375THWAS4pmdOaD8l7WVQsFwZnlElObw2YD1qpgIMGH%2FtiyWStvObNzhVmY4YthyK7Fim0F2pGq7uhJEMxDX22S78mJBakgRj3X1ZZKhDBm7aB7vBZ04b%2F7bmde3UZ2ub3sqJE4YiAaIykLq76skeAjvPJsbmfWOfTqWP7Pwa8kTo%2BJpGavPlr5%2F3d7C7j%2FgTbhbbRyV2GHEcrNVhkBXnG1U2br11SGNaa77SLuB449wGXXSBhE6RT94AgHkxUR8lP%2FIkIetWT69k%2Fpjx4oTrPyNRr9qHBPmTANAahnmF5zJZ2IOEdEAF%2Bt%2Bkv%2F8yFRiaa4SsOfg7XvVafxEakN%2BXWLrd7K6C5TMCENiBezWw%2FYD%2BywoM4PyNXAoOWUYNpCYi3kraFehY%2Fpkp4s%2BZwDn23LWDvk3%2F4UzUf54kXDg8xy%2B%2F%2BHmkmBKg8fAn2PKuNEwQN%2BfgyNc8nRRnf6O0haNPpvRXUMI2M5b8GOqUBnSxWVhEKxM%2FFmJ%2Fh56GnU6dpQXHvKKaUnuT9zEyvL7rMA5hosG%2F0Yhb3d%2BN0Uv0x7x8oULug%2FAOKIAjTCTb3N4icZiTZntNeDL5C5qfi8yqFxhahJssxwfCstGftxcMQfW8DE4MC2zCMOnvELEPLjTnx9IrUDh5jHeztQYOF4cAA7OfRxBrxJfkrBVLPkxb9VkxrRNJYSAwPOdKSEj8kXciG1Ymh&X-Amz-Signature=7a3c9e523087ce2b1fd77b15feb2c17f6049cf06c2fb5316d618a102e01511d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3E7QI5X%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICwOhh69zxm%2BSjcMz2MRW9XtFhyNxb4lerKyezqtSbxdAiEAvjaUDHh9a%2B2%2BBjTo1mLx5nTvUbNQUYfS2%2BziCcvApjIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw052g%2B0LYCkKB3cSrcA%2FVVA8bBa75i%2BnhtdXLbZAJakDEzEmZqSeq8TZrhdlTn%2BbmPyomkoJ7njC0Y6mtObvk%2FV8sKHxMWrt4TS9bgfogyl5tX27bug54LYLe3dsV9Z1Rs4YZWCHa%2B0G18%2BNBr%2Bmw4UQvXHGl3ZoNDOeQfNj9TFj4NoO2Uap375THWAS4pmdOaD8l7WVQsFwZnlElObw2YD1qpgIMGH%2FtiyWStvObNzhVmY4YthyK7Fim0F2pGq7uhJEMxDX22S78mJBakgRj3X1ZZKhDBm7aB7vBZ04b%2F7bmde3UZ2ub3sqJE4YiAaIykLq76skeAjvPJsbmfWOfTqWP7Pwa8kTo%2BJpGavPlr5%2F3d7C7j%2FgTbhbbRyV2GHEcrNVhkBXnG1U2br11SGNaa77SLuB449wGXXSBhE6RT94AgHkxUR8lP%2FIkIetWT69k%2Fpjx4oTrPyNRr9qHBPmTANAahnmF5zJZ2IOEdEAF%2Bt%2Bkv%2F8yFRiaa4SsOfg7XvVafxEakN%2BXWLrd7K6C5TMCENiBezWw%2FYD%2BywoM4PyNXAoOWUYNpCYi3kraFehY%2Fpkp4s%2BZwDn23LWDvk3%2F4UzUf54kXDg8xy%2B%2F%2BHmkmBKg8fAn2PKuNEwQN%2BfgyNc8nRRnf6O0haNPpvRXUMI2M5b8GOqUBnSxWVhEKxM%2FFmJ%2Fh56GnU6dpQXHvKKaUnuT9zEyvL7rMA5hosG%2F0Yhb3d%2BN0Uv0x7x8oULug%2FAOKIAjTCTb3N4icZiTZntNeDL5C5qfi8yqFxhahJssxwfCstGftxcMQfW8DE4MC2zCMOnvELEPLjTnx9IrUDh5jHeztQYOF4cAA7OfRxBrxJfkrBVLPkxb9VkxrRNJYSAwPOdKSEj8kXciG1Ymh&X-Amz-Signature=b1b1619581174d5604d55601508ed0f883c84493e34505c566e8d8475624915c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3E7QI5X%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICwOhh69zxm%2BSjcMz2MRW9XtFhyNxb4lerKyezqtSbxdAiEAvjaUDHh9a%2B2%2BBjTo1mLx5nTvUbNQUYfS2%2BziCcvApjIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw052g%2B0LYCkKB3cSrcA%2FVVA8bBa75i%2BnhtdXLbZAJakDEzEmZqSeq8TZrhdlTn%2BbmPyomkoJ7njC0Y6mtObvk%2FV8sKHxMWrt4TS9bgfogyl5tX27bug54LYLe3dsV9Z1Rs4YZWCHa%2B0G18%2BNBr%2Bmw4UQvXHGl3ZoNDOeQfNj9TFj4NoO2Uap375THWAS4pmdOaD8l7WVQsFwZnlElObw2YD1qpgIMGH%2FtiyWStvObNzhVmY4YthyK7Fim0F2pGq7uhJEMxDX22S78mJBakgRj3X1ZZKhDBm7aB7vBZ04b%2F7bmde3UZ2ub3sqJE4YiAaIykLq76skeAjvPJsbmfWOfTqWP7Pwa8kTo%2BJpGavPlr5%2F3d7C7j%2FgTbhbbRyV2GHEcrNVhkBXnG1U2br11SGNaa77SLuB449wGXXSBhE6RT94AgHkxUR8lP%2FIkIetWT69k%2Fpjx4oTrPyNRr9qHBPmTANAahnmF5zJZ2IOEdEAF%2Bt%2Bkv%2F8yFRiaa4SsOfg7XvVafxEakN%2BXWLrd7K6C5TMCENiBezWw%2FYD%2BywoM4PyNXAoOWUYNpCYi3kraFehY%2Fpkp4s%2BZwDn23LWDvk3%2F4UzUf54kXDg8xy%2B%2F%2BHmkmBKg8fAn2PKuNEwQN%2BfgyNc8nRRnf6O0haNPpvRXUMI2M5b8GOqUBnSxWVhEKxM%2FFmJ%2Fh56GnU6dpQXHvKKaUnuT9zEyvL7rMA5hosG%2F0Yhb3d%2BN0Uv0x7x8oULug%2FAOKIAjTCTb3N4icZiTZntNeDL5C5qfi8yqFxhahJssxwfCstGftxcMQfW8DE4MC2zCMOnvELEPLjTnx9IrUDh5jHeztQYOF4cAA7OfRxBrxJfkrBVLPkxb9VkxrRNJYSAwPOdKSEj8kXciG1Ymh&X-Amz-Signature=ba8c60ac0e637e921db1e144da0b661cf6e38acaff451025eef9f8d78689604c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3E7QI5X%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICwOhh69zxm%2BSjcMz2MRW9XtFhyNxb4lerKyezqtSbxdAiEAvjaUDHh9a%2B2%2BBjTo1mLx5nTvUbNQUYfS2%2BziCcvApjIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw052g%2B0LYCkKB3cSrcA%2FVVA8bBa75i%2BnhtdXLbZAJakDEzEmZqSeq8TZrhdlTn%2BbmPyomkoJ7njC0Y6mtObvk%2FV8sKHxMWrt4TS9bgfogyl5tX27bug54LYLe3dsV9Z1Rs4YZWCHa%2B0G18%2BNBr%2Bmw4UQvXHGl3ZoNDOeQfNj9TFj4NoO2Uap375THWAS4pmdOaD8l7WVQsFwZnlElObw2YD1qpgIMGH%2FtiyWStvObNzhVmY4YthyK7Fim0F2pGq7uhJEMxDX22S78mJBakgRj3X1ZZKhDBm7aB7vBZ04b%2F7bmde3UZ2ub3sqJE4YiAaIykLq76skeAjvPJsbmfWOfTqWP7Pwa8kTo%2BJpGavPlr5%2F3d7C7j%2FgTbhbbRyV2GHEcrNVhkBXnG1U2br11SGNaa77SLuB449wGXXSBhE6RT94AgHkxUR8lP%2FIkIetWT69k%2Fpjx4oTrPyNRr9qHBPmTANAahnmF5zJZ2IOEdEAF%2Bt%2Bkv%2F8yFRiaa4SsOfg7XvVafxEakN%2BXWLrd7K6C5TMCENiBezWw%2FYD%2BywoM4PyNXAoOWUYNpCYi3kraFehY%2Fpkp4s%2BZwDn23LWDvk3%2F4UzUf54kXDg8xy%2B%2F%2BHmkmBKg8fAn2PKuNEwQN%2BfgyNc8nRRnf6O0haNPpvRXUMI2M5b8GOqUBnSxWVhEKxM%2FFmJ%2Fh56GnU6dpQXHvKKaUnuT9zEyvL7rMA5hosG%2F0Yhb3d%2BN0Uv0x7x8oULug%2FAOKIAjTCTb3N4icZiTZntNeDL5C5qfi8yqFxhahJssxwfCstGftxcMQfW8DE4MC2zCMOnvELEPLjTnx9IrUDh5jHeztQYOF4cAA7OfRxBrxJfkrBVLPkxb9VkxrRNJYSAwPOdKSEj8kXciG1Ymh&X-Amz-Signature=09422ac25e5ee44b34f84aeb2a141beb123c4e6a8671d3ec19d234ba55914dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3E7QI5X%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICwOhh69zxm%2BSjcMz2MRW9XtFhyNxb4lerKyezqtSbxdAiEAvjaUDHh9a%2B2%2BBjTo1mLx5nTvUbNQUYfS2%2BziCcvApjIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw052g%2B0LYCkKB3cSrcA%2FVVA8bBa75i%2BnhtdXLbZAJakDEzEmZqSeq8TZrhdlTn%2BbmPyomkoJ7njC0Y6mtObvk%2FV8sKHxMWrt4TS9bgfogyl5tX27bug54LYLe3dsV9Z1Rs4YZWCHa%2B0G18%2BNBr%2Bmw4UQvXHGl3ZoNDOeQfNj9TFj4NoO2Uap375THWAS4pmdOaD8l7WVQsFwZnlElObw2YD1qpgIMGH%2FtiyWStvObNzhVmY4YthyK7Fim0F2pGq7uhJEMxDX22S78mJBakgRj3X1ZZKhDBm7aB7vBZ04b%2F7bmde3UZ2ub3sqJE4YiAaIykLq76skeAjvPJsbmfWOfTqWP7Pwa8kTo%2BJpGavPlr5%2F3d7C7j%2FgTbhbbRyV2GHEcrNVhkBXnG1U2br11SGNaa77SLuB449wGXXSBhE6RT94AgHkxUR8lP%2FIkIetWT69k%2Fpjx4oTrPyNRr9qHBPmTANAahnmF5zJZ2IOEdEAF%2Bt%2Bkv%2F8yFRiaa4SsOfg7XvVafxEakN%2BXWLrd7K6C5TMCENiBezWw%2FYD%2BywoM4PyNXAoOWUYNpCYi3kraFehY%2Fpkp4s%2BZwDn23LWDvk3%2F4UzUf54kXDg8xy%2B%2F%2BHmkmBKg8fAn2PKuNEwQN%2BfgyNc8nRRnf6O0haNPpvRXUMI2M5b8GOqUBnSxWVhEKxM%2FFmJ%2Fh56GnU6dpQXHvKKaUnuT9zEyvL7rMA5hosG%2F0Yhb3d%2BN0Uv0x7x8oULug%2FAOKIAjTCTb3N4icZiTZntNeDL5C5qfi8yqFxhahJssxwfCstGftxcMQfW8DE4MC2zCMOnvELEPLjTnx9IrUDh5jHeztQYOF4cAA7OfRxBrxJfkrBVLPkxb9VkxrRNJYSAwPOdKSEj8kXciG1Ymh&X-Amz-Signature=6b1a8f328bae15d9604b5836f678584b42fc2ff5380571b248bb3a5e06b70319&X-Amz-SignedHeaders=host&x-id=GetObject)
