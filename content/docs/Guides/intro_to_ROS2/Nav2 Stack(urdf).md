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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLBAB236%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICcGF1c5M2MDJuJ2J2N%2BTowCU%2ByeodMgVxAojKZqD80WAiAxCUYy5qW4hMJ5bDR53kO8BlgxndVsu01yfMedzwT29Cr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMmrJabBqTGpH1frKPKtwDInQiQ03ZgW7RQeX5lL1STkg7oxq2bBEFnBADancokv2o34AS7nfHcmhGFdTlc4eh83Q%2BzKZTntCdtSCFSZ9FrFVGLOlI52YMjo8MPLvSrXC8gGO1VxgvTOE8WuY5DRCF9zCZyRES%2FX9BONLhiIvBeCyIdIgVcPJcl%2F%2BiTTYNxoAbYP%2F%2BZFKuosuJ5yQKl%2B9kLEGJF2Qs8TeC8xQ1tg13MfxEjfHLtFVBsLvEkIBAAnLgUIKkgttBOUvivvJq4zWb8tSqX0JnLpp6KLbOfhbfEj1llCZyodTNDo4GGSjccoOv8IEWRsPnUiZy3LnheylpfActFm6ywF23PZu%2FQJ1z2zF8zmH9JBpO5QHO868z%2Fr8RZzfnmRF41rX0IdD7T80z80yEifjs6KbxohpdL8xVENU9KG2cNKG%2BdNLyuftz4eKdkNdFtCwXBO86HtEnEatJebC%2BG9h4AOICaTooUgVGWFREJt5xk3ESRwXTg9aSfVRQsVdm1KXXHr2Ur5Ym0kpjweHFVon%2FqPkwfyZAWxiUFKNYyF1JTpli3b8N%2FwZyqG9fC0iSO1b4%2FJMPuzWmCNNiYCm83gBklQWbNCrxsKYIqEBVT5FBRMquCvmIYTH7ppOqwAUMWXTzpinH7W4wweGZwwY6pgF5oaLYuM1MPxWnEryxIKHpHKb0tbY30p2u4AifqHiA%2FxlBtu%2F8vR3S7RDg4CiX5jtsKUdk3l4MZOy9tI%2FTqChLcebrdx98JXcPPE48XSDNGmZhoWPa8Xl8Lm0mkf4RWWuYdVHtWnPwR6yXEe2YO83uDy0TxKJwotkQOMY6z6hV0YdrUiWkWZ4T3HffHrZhZJWeFUPbJRzwY9f%2FC6IjhdIGgueunPyV&X-Amz-Signature=97dd01eeaebd8543e8652c336ba564c2d28cecbc4f590536fc7a4eadcfb684f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLBAB236%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICcGF1c5M2MDJuJ2J2N%2BTowCU%2ByeodMgVxAojKZqD80WAiAxCUYy5qW4hMJ5bDR53kO8BlgxndVsu01yfMedzwT29Cr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMmrJabBqTGpH1frKPKtwDInQiQ03ZgW7RQeX5lL1STkg7oxq2bBEFnBADancokv2o34AS7nfHcmhGFdTlc4eh83Q%2BzKZTntCdtSCFSZ9FrFVGLOlI52YMjo8MPLvSrXC8gGO1VxgvTOE8WuY5DRCF9zCZyRES%2FX9BONLhiIvBeCyIdIgVcPJcl%2F%2BiTTYNxoAbYP%2F%2BZFKuosuJ5yQKl%2B9kLEGJF2Qs8TeC8xQ1tg13MfxEjfHLtFVBsLvEkIBAAnLgUIKkgttBOUvivvJq4zWb8tSqX0JnLpp6KLbOfhbfEj1llCZyodTNDo4GGSjccoOv8IEWRsPnUiZy3LnheylpfActFm6ywF23PZu%2FQJ1z2zF8zmH9JBpO5QHO868z%2Fr8RZzfnmRF41rX0IdD7T80z80yEifjs6KbxohpdL8xVENU9KG2cNKG%2BdNLyuftz4eKdkNdFtCwXBO86HtEnEatJebC%2BG9h4AOICaTooUgVGWFREJt5xk3ESRwXTg9aSfVRQsVdm1KXXHr2Ur5Ym0kpjweHFVon%2FqPkwfyZAWxiUFKNYyF1JTpli3b8N%2FwZyqG9fC0iSO1b4%2FJMPuzWmCNNiYCm83gBklQWbNCrxsKYIqEBVT5FBRMquCvmIYTH7ppOqwAUMWXTzpinH7W4wweGZwwY6pgF5oaLYuM1MPxWnEryxIKHpHKb0tbY30p2u4AifqHiA%2FxlBtu%2F8vR3S7RDg4CiX5jtsKUdk3l4MZOy9tI%2FTqChLcebrdx98JXcPPE48XSDNGmZhoWPa8Xl8Lm0mkf4RWWuYdVHtWnPwR6yXEe2YO83uDy0TxKJwotkQOMY6z6hV0YdrUiWkWZ4T3HffHrZhZJWeFUPbJRzwY9f%2FC6IjhdIGgueunPyV&X-Amz-Signature=e2e6dab3371c9d27b262b57a99e4c5686b3097d4d59b8b0b8ae7db37f631eece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLBAB236%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICcGF1c5M2MDJuJ2J2N%2BTowCU%2ByeodMgVxAojKZqD80WAiAxCUYy5qW4hMJ5bDR53kO8BlgxndVsu01yfMedzwT29Cr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMmrJabBqTGpH1frKPKtwDInQiQ03ZgW7RQeX5lL1STkg7oxq2bBEFnBADancokv2o34AS7nfHcmhGFdTlc4eh83Q%2BzKZTntCdtSCFSZ9FrFVGLOlI52YMjo8MPLvSrXC8gGO1VxgvTOE8WuY5DRCF9zCZyRES%2FX9BONLhiIvBeCyIdIgVcPJcl%2F%2BiTTYNxoAbYP%2F%2BZFKuosuJ5yQKl%2B9kLEGJF2Qs8TeC8xQ1tg13MfxEjfHLtFVBsLvEkIBAAnLgUIKkgttBOUvivvJq4zWb8tSqX0JnLpp6KLbOfhbfEj1llCZyodTNDo4GGSjccoOv8IEWRsPnUiZy3LnheylpfActFm6ywF23PZu%2FQJ1z2zF8zmH9JBpO5QHO868z%2Fr8RZzfnmRF41rX0IdD7T80z80yEifjs6KbxohpdL8xVENU9KG2cNKG%2BdNLyuftz4eKdkNdFtCwXBO86HtEnEatJebC%2BG9h4AOICaTooUgVGWFREJt5xk3ESRwXTg9aSfVRQsVdm1KXXHr2Ur5Ym0kpjweHFVon%2FqPkwfyZAWxiUFKNYyF1JTpli3b8N%2FwZyqG9fC0iSO1b4%2FJMPuzWmCNNiYCm83gBklQWbNCrxsKYIqEBVT5FBRMquCvmIYTH7ppOqwAUMWXTzpinH7W4wweGZwwY6pgF5oaLYuM1MPxWnEryxIKHpHKb0tbY30p2u4AifqHiA%2FxlBtu%2F8vR3S7RDg4CiX5jtsKUdk3l4MZOy9tI%2FTqChLcebrdx98JXcPPE48XSDNGmZhoWPa8Xl8Lm0mkf4RWWuYdVHtWnPwR6yXEe2YO83uDy0TxKJwotkQOMY6z6hV0YdrUiWkWZ4T3HffHrZhZJWeFUPbJRzwY9f%2FC6IjhdIGgueunPyV&X-Amz-Signature=bda43dcef450866c78e0ccdf2c1a3506af9b0617d711adf98c9af1186b983e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLBAB236%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICcGF1c5M2MDJuJ2J2N%2BTowCU%2ByeodMgVxAojKZqD80WAiAxCUYy5qW4hMJ5bDR53kO8BlgxndVsu01yfMedzwT29Cr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMmrJabBqTGpH1frKPKtwDInQiQ03ZgW7RQeX5lL1STkg7oxq2bBEFnBADancokv2o34AS7nfHcmhGFdTlc4eh83Q%2BzKZTntCdtSCFSZ9FrFVGLOlI52YMjo8MPLvSrXC8gGO1VxgvTOE8WuY5DRCF9zCZyRES%2FX9BONLhiIvBeCyIdIgVcPJcl%2F%2BiTTYNxoAbYP%2F%2BZFKuosuJ5yQKl%2B9kLEGJF2Qs8TeC8xQ1tg13MfxEjfHLtFVBsLvEkIBAAnLgUIKkgttBOUvivvJq4zWb8tSqX0JnLpp6KLbOfhbfEj1llCZyodTNDo4GGSjccoOv8IEWRsPnUiZy3LnheylpfActFm6ywF23PZu%2FQJ1z2zF8zmH9JBpO5QHO868z%2Fr8RZzfnmRF41rX0IdD7T80z80yEifjs6KbxohpdL8xVENU9KG2cNKG%2BdNLyuftz4eKdkNdFtCwXBO86HtEnEatJebC%2BG9h4AOICaTooUgVGWFREJt5xk3ESRwXTg9aSfVRQsVdm1KXXHr2Ur5Ym0kpjweHFVon%2FqPkwfyZAWxiUFKNYyF1JTpli3b8N%2FwZyqG9fC0iSO1b4%2FJMPuzWmCNNiYCm83gBklQWbNCrxsKYIqEBVT5FBRMquCvmIYTH7ppOqwAUMWXTzpinH7W4wweGZwwY6pgF5oaLYuM1MPxWnEryxIKHpHKb0tbY30p2u4AifqHiA%2FxlBtu%2F8vR3S7RDg4CiX5jtsKUdk3l4MZOy9tI%2FTqChLcebrdx98JXcPPE48XSDNGmZhoWPa8Xl8Lm0mkf4RWWuYdVHtWnPwR6yXEe2YO83uDy0TxKJwotkQOMY6z6hV0YdrUiWkWZ4T3HffHrZhZJWeFUPbJRzwY9f%2FC6IjhdIGgueunPyV&X-Amz-Signature=f0bf0a166223aa0a7f4a47ae9961504e52e6dcd1053395ed5a477c7a7ed3d3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLBAB236%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICcGF1c5M2MDJuJ2J2N%2BTowCU%2ByeodMgVxAojKZqD80WAiAxCUYy5qW4hMJ5bDR53kO8BlgxndVsu01yfMedzwT29Cr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMmrJabBqTGpH1frKPKtwDInQiQ03ZgW7RQeX5lL1STkg7oxq2bBEFnBADancokv2o34AS7nfHcmhGFdTlc4eh83Q%2BzKZTntCdtSCFSZ9FrFVGLOlI52YMjo8MPLvSrXC8gGO1VxgvTOE8WuY5DRCF9zCZyRES%2FX9BONLhiIvBeCyIdIgVcPJcl%2F%2BiTTYNxoAbYP%2F%2BZFKuosuJ5yQKl%2B9kLEGJF2Qs8TeC8xQ1tg13MfxEjfHLtFVBsLvEkIBAAnLgUIKkgttBOUvivvJq4zWb8tSqX0JnLpp6KLbOfhbfEj1llCZyodTNDo4GGSjccoOv8IEWRsPnUiZy3LnheylpfActFm6ywF23PZu%2FQJ1z2zF8zmH9JBpO5QHO868z%2Fr8RZzfnmRF41rX0IdD7T80z80yEifjs6KbxohpdL8xVENU9KG2cNKG%2BdNLyuftz4eKdkNdFtCwXBO86HtEnEatJebC%2BG9h4AOICaTooUgVGWFREJt5xk3ESRwXTg9aSfVRQsVdm1KXXHr2Ur5Ym0kpjweHFVon%2FqPkwfyZAWxiUFKNYyF1JTpli3b8N%2FwZyqG9fC0iSO1b4%2FJMPuzWmCNNiYCm83gBklQWbNCrxsKYIqEBVT5FBRMquCvmIYTH7ppOqwAUMWXTzpinH7W4wweGZwwY6pgF5oaLYuM1MPxWnEryxIKHpHKb0tbY30p2u4AifqHiA%2FxlBtu%2F8vR3S7RDg4CiX5jtsKUdk3l4MZOy9tI%2FTqChLcebrdx98JXcPPE48XSDNGmZhoWPa8Xl8Lm0mkf4RWWuYdVHtWnPwR6yXEe2YO83uDy0TxKJwotkQOMY6z6hV0YdrUiWkWZ4T3HffHrZhZJWeFUPbJRzwY9f%2FC6IjhdIGgueunPyV&X-Amz-Signature=7532387d58d46e8c59c6f774a48128214d45a2924b5e4ef225a9c389d1e0710e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLBAB236%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICcGF1c5M2MDJuJ2J2N%2BTowCU%2ByeodMgVxAojKZqD80WAiAxCUYy5qW4hMJ5bDR53kO8BlgxndVsu01yfMedzwT29Cr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMmrJabBqTGpH1frKPKtwDInQiQ03ZgW7RQeX5lL1STkg7oxq2bBEFnBADancokv2o34AS7nfHcmhGFdTlc4eh83Q%2BzKZTntCdtSCFSZ9FrFVGLOlI52YMjo8MPLvSrXC8gGO1VxgvTOE8WuY5DRCF9zCZyRES%2FX9BONLhiIvBeCyIdIgVcPJcl%2F%2BiTTYNxoAbYP%2F%2BZFKuosuJ5yQKl%2B9kLEGJF2Qs8TeC8xQ1tg13MfxEjfHLtFVBsLvEkIBAAnLgUIKkgttBOUvivvJq4zWb8tSqX0JnLpp6KLbOfhbfEj1llCZyodTNDo4GGSjccoOv8IEWRsPnUiZy3LnheylpfActFm6ywF23PZu%2FQJ1z2zF8zmH9JBpO5QHO868z%2Fr8RZzfnmRF41rX0IdD7T80z80yEifjs6KbxohpdL8xVENU9KG2cNKG%2BdNLyuftz4eKdkNdFtCwXBO86HtEnEatJebC%2BG9h4AOICaTooUgVGWFREJt5xk3ESRwXTg9aSfVRQsVdm1KXXHr2Ur5Ym0kpjweHFVon%2FqPkwfyZAWxiUFKNYyF1JTpli3b8N%2FwZyqG9fC0iSO1b4%2FJMPuzWmCNNiYCm83gBklQWbNCrxsKYIqEBVT5FBRMquCvmIYTH7ppOqwAUMWXTzpinH7W4wweGZwwY6pgF5oaLYuM1MPxWnEryxIKHpHKb0tbY30p2u4AifqHiA%2FxlBtu%2F8vR3S7RDg4CiX5jtsKUdk3l4MZOy9tI%2FTqChLcebrdx98JXcPPE48XSDNGmZhoWPa8Xl8Lm0mkf4RWWuYdVHtWnPwR6yXEe2YO83uDy0TxKJwotkQOMY6z6hV0YdrUiWkWZ4T3HffHrZhZJWeFUPbJRzwY9f%2FC6IjhdIGgueunPyV&X-Amz-Signature=53c48b44ea9bb93432b29399620178bf8a8c044b1ef1f3d45caf6a8c057f56c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
