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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBNXQNZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLUXt9WOc8xwbfOL7Z3hSLpzzp8pGVn1gE643zGNaWCAiAt5kF%2BiSEMOzzn9ginfEgnlSHoUP%2F2%2B4BlGJca%2BkIOvCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMQMx5mk5kNJedAqkuKtwDBYtvKQI9zCObKynNFY1JOHCkJx6GoqviKZBg9t5dqBj8CFSi6nzQCBve%2FC6dZFO4SEPxmFgdcgxxgvWefQM%2BjQwvD0wHkYPXAowl%2F3nijdp2WVLWajH%2Fc2DGnx4ydnsP3PkmIP7Cx92wAhQnv3uQcFInYws%2Fm%2Fac6PHJiOL85LizecmiYVLsSzEg7DilEMtVlNgT1ZTsvQR3wMJWdSvmFxFNL5s7Bjp1IC%2Bp07%2B0vxZRnD1uiQeRYxQ4NN4aLuqgzwBo2NgXtVFF63WxyOPIRILEM8bJxpDem0Dnw5yNa7duq1%2B%2BQzZ0jJ1EecqipdpqvRDWWK1Y16zVx1C4Q1qupfAe4yUhVhP8iExrcxJFdkaT1vHx5uotaojP9FapGX%2BhIufTKuduVv%2FExGtsJlHWMo04f4rFoTraN4a6IqR7BOtZmS7omkZOvsKFN0QK0uJ8mrxykUZpuu4NdeYSTwaDEsc%2BLbw56n2QMlmVCSxaucFNWjZFV8rpfnnlPYagJtCpW4H37SncwgoTsZ5oekHE9mU8WPyI99DLzEZsu27c0OAcyHKfh4V0T2soNMowibuL5vJe%2BbK5MOVWaZDtDO4gR%2B9vXOaT2IFq6XpoOFe12bDrC0J%2FzRmutK%2Fn2XEw9ICRwgY6pgFu%2F0D8%2FM%2BHKb9NX0g5tgbjgigxaipTykKqVmMHl%2Fdcp%2Fset5GvzfCPAwv1lAcxTXit3h8eGjoGZx4%2BpnIYIc4Kk66kkOlhjYoorKRJMdtGtuIcKUMu7UmpmmcDlIcDFqsWs68jZy9wBmM4NETlmwhv2c4BMjFcvajsNP67vuDxo8YpdpLGI6plI9Cx%2BPvqvSzko%2BtmkPFycWK9QZZBQD6AHpoTR08l&X-Amz-Signature=52804c77e700591f8c99738b25a3dd9c6c1f857d1a629aa59f934f09e9e03ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBNXQNZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLUXt9WOc8xwbfOL7Z3hSLpzzp8pGVn1gE643zGNaWCAiAt5kF%2BiSEMOzzn9ginfEgnlSHoUP%2F2%2B4BlGJca%2BkIOvCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMQMx5mk5kNJedAqkuKtwDBYtvKQI9zCObKynNFY1JOHCkJx6GoqviKZBg9t5dqBj8CFSi6nzQCBve%2FC6dZFO4SEPxmFgdcgxxgvWefQM%2BjQwvD0wHkYPXAowl%2F3nijdp2WVLWajH%2Fc2DGnx4ydnsP3PkmIP7Cx92wAhQnv3uQcFInYws%2Fm%2Fac6PHJiOL85LizecmiYVLsSzEg7DilEMtVlNgT1ZTsvQR3wMJWdSvmFxFNL5s7Bjp1IC%2Bp07%2B0vxZRnD1uiQeRYxQ4NN4aLuqgzwBo2NgXtVFF63WxyOPIRILEM8bJxpDem0Dnw5yNa7duq1%2B%2BQzZ0jJ1EecqipdpqvRDWWK1Y16zVx1C4Q1qupfAe4yUhVhP8iExrcxJFdkaT1vHx5uotaojP9FapGX%2BhIufTKuduVv%2FExGtsJlHWMo04f4rFoTraN4a6IqR7BOtZmS7omkZOvsKFN0QK0uJ8mrxykUZpuu4NdeYSTwaDEsc%2BLbw56n2QMlmVCSxaucFNWjZFV8rpfnnlPYagJtCpW4H37SncwgoTsZ5oekHE9mU8WPyI99DLzEZsu27c0OAcyHKfh4V0T2soNMowibuL5vJe%2BbK5MOVWaZDtDO4gR%2B9vXOaT2IFq6XpoOFe12bDrC0J%2FzRmutK%2Fn2XEw9ICRwgY6pgFu%2F0D8%2FM%2BHKb9NX0g5tgbjgigxaipTykKqVmMHl%2Fdcp%2Fset5GvzfCPAwv1lAcxTXit3h8eGjoGZx4%2BpnIYIc4Kk66kkOlhjYoorKRJMdtGtuIcKUMu7UmpmmcDlIcDFqsWs68jZy9wBmM4NETlmwhv2c4BMjFcvajsNP67vuDxo8YpdpLGI6plI9Cx%2BPvqvSzko%2BtmkPFycWK9QZZBQD6AHpoTR08l&X-Amz-Signature=2c5533b034b76a36dc20884248cfc1c7f1a50b8d5b6448372d65ec306636c3f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBNXQNZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLUXt9WOc8xwbfOL7Z3hSLpzzp8pGVn1gE643zGNaWCAiAt5kF%2BiSEMOzzn9ginfEgnlSHoUP%2F2%2B4BlGJca%2BkIOvCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMQMx5mk5kNJedAqkuKtwDBYtvKQI9zCObKynNFY1JOHCkJx6GoqviKZBg9t5dqBj8CFSi6nzQCBve%2FC6dZFO4SEPxmFgdcgxxgvWefQM%2BjQwvD0wHkYPXAowl%2F3nijdp2WVLWajH%2Fc2DGnx4ydnsP3PkmIP7Cx92wAhQnv3uQcFInYws%2Fm%2Fac6PHJiOL85LizecmiYVLsSzEg7DilEMtVlNgT1ZTsvQR3wMJWdSvmFxFNL5s7Bjp1IC%2Bp07%2B0vxZRnD1uiQeRYxQ4NN4aLuqgzwBo2NgXtVFF63WxyOPIRILEM8bJxpDem0Dnw5yNa7duq1%2B%2BQzZ0jJ1EecqipdpqvRDWWK1Y16zVx1C4Q1qupfAe4yUhVhP8iExrcxJFdkaT1vHx5uotaojP9FapGX%2BhIufTKuduVv%2FExGtsJlHWMo04f4rFoTraN4a6IqR7BOtZmS7omkZOvsKFN0QK0uJ8mrxykUZpuu4NdeYSTwaDEsc%2BLbw56n2QMlmVCSxaucFNWjZFV8rpfnnlPYagJtCpW4H37SncwgoTsZ5oekHE9mU8WPyI99DLzEZsu27c0OAcyHKfh4V0T2soNMowibuL5vJe%2BbK5MOVWaZDtDO4gR%2B9vXOaT2IFq6XpoOFe12bDrC0J%2FzRmutK%2Fn2XEw9ICRwgY6pgFu%2F0D8%2FM%2BHKb9NX0g5tgbjgigxaipTykKqVmMHl%2Fdcp%2Fset5GvzfCPAwv1lAcxTXit3h8eGjoGZx4%2BpnIYIc4Kk66kkOlhjYoorKRJMdtGtuIcKUMu7UmpmmcDlIcDFqsWs68jZy9wBmM4NETlmwhv2c4BMjFcvajsNP67vuDxo8YpdpLGI6plI9Cx%2BPvqvSzko%2BtmkPFycWK9QZZBQD6AHpoTR08l&X-Amz-Signature=4e1a336cdc005674515009b5243295f2b9c7d316b7383463d86a99a589e8b4fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBNXQNZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLUXt9WOc8xwbfOL7Z3hSLpzzp8pGVn1gE643zGNaWCAiAt5kF%2BiSEMOzzn9ginfEgnlSHoUP%2F2%2B4BlGJca%2BkIOvCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMQMx5mk5kNJedAqkuKtwDBYtvKQI9zCObKynNFY1JOHCkJx6GoqviKZBg9t5dqBj8CFSi6nzQCBve%2FC6dZFO4SEPxmFgdcgxxgvWefQM%2BjQwvD0wHkYPXAowl%2F3nijdp2WVLWajH%2Fc2DGnx4ydnsP3PkmIP7Cx92wAhQnv3uQcFInYws%2Fm%2Fac6PHJiOL85LizecmiYVLsSzEg7DilEMtVlNgT1ZTsvQR3wMJWdSvmFxFNL5s7Bjp1IC%2Bp07%2B0vxZRnD1uiQeRYxQ4NN4aLuqgzwBo2NgXtVFF63WxyOPIRILEM8bJxpDem0Dnw5yNa7duq1%2B%2BQzZ0jJ1EecqipdpqvRDWWK1Y16zVx1C4Q1qupfAe4yUhVhP8iExrcxJFdkaT1vHx5uotaojP9FapGX%2BhIufTKuduVv%2FExGtsJlHWMo04f4rFoTraN4a6IqR7BOtZmS7omkZOvsKFN0QK0uJ8mrxykUZpuu4NdeYSTwaDEsc%2BLbw56n2QMlmVCSxaucFNWjZFV8rpfnnlPYagJtCpW4H37SncwgoTsZ5oekHE9mU8WPyI99DLzEZsu27c0OAcyHKfh4V0T2soNMowibuL5vJe%2BbK5MOVWaZDtDO4gR%2B9vXOaT2IFq6XpoOFe12bDrC0J%2FzRmutK%2Fn2XEw9ICRwgY6pgFu%2F0D8%2FM%2BHKb9NX0g5tgbjgigxaipTykKqVmMHl%2Fdcp%2Fset5GvzfCPAwv1lAcxTXit3h8eGjoGZx4%2BpnIYIc4Kk66kkOlhjYoorKRJMdtGtuIcKUMu7UmpmmcDlIcDFqsWs68jZy9wBmM4NETlmwhv2c4BMjFcvajsNP67vuDxo8YpdpLGI6plI9Cx%2BPvqvSzko%2BtmkPFycWK9QZZBQD6AHpoTR08l&X-Amz-Signature=c553a2bac671f225b8dcd7ed8146f5221a0cc15784c48734ebae65c4738ddacc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBNXQNZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLUXt9WOc8xwbfOL7Z3hSLpzzp8pGVn1gE643zGNaWCAiAt5kF%2BiSEMOzzn9ginfEgnlSHoUP%2F2%2B4BlGJca%2BkIOvCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMQMx5mk5kNJedAqkuKtwDBYtvKQI9zCObKynNFY1JOHCkJx6GoqviKZBg9t5dqBj8CFSi6nzQCBve%2FC6dZFO4SEPxmFgdcgxxgvWefQM%2BjQwvD0wHkYPXAowl%2F3nijdp2WVLWajH%2Fc2DGnx4ydnsP3PkmIP7Cx92wAhQnv3uQcFInYws%2Fm%2Fac6PHJiOL85LizecmiYVLsSzEg7DilEMtVlNgT1ZTsvQR3wMJWdSvmFxFNL5s7Bjp1IC%2Bp07%2B0vxZRnD1uiQeRYxQ4NN4aLuqgzwBo2NgXtVFF63WxyOPIRILEM8bJxpDem0Dnw5yNa7duq1%2B%2BQzZ0jJ1EecqipdpqvRDWWK1Y16zVx1C4Q1qupfAe4yUhVhP8iExrcxJFdkaT1vHx5uotaojP9FapGX%2BhIufTKuduVv%2FExGtsJlHWMo04f4rFoTraN4a6IqR7BOtZmS7omkZOvsKFN0QK0uJ8mrxykUZpuu4NdeYSTwaDEsc%2BLbw56n2QMlmVCSxaucFNWjZFV8rpfnnlPYagJtCpW4H37SncwgoTsZ5oekHE9mU8WPyI99DLzEZsu27c0OAcyHKfh4V0T2soNMowibuL5vJe%2BbK5MOVWaZDtDO4gR%2B9vXOaT2IFq6XpoOFe12bDrC0J%2FzRmutK%2Fn2XEw9ICRwgY6pgFu%2F0D8%2FM%2BHKb9NX0g5tgbjgigxaipTykKqVmMHl%2Fdcp%2Fset5GvzfCPAwv1lAcxTXit3h8eGjoGZx4%2BpnIYIc4Kk66kkOlhjYoorKRJMdtGtuIcKUMu7UmpmmcDlIcDFqsWs68jZy9wBmM4NETlmwhv2c4BMjFcvajsNP67vuDxo8YpdpLGI6plI9Cx%2BPvqvSzko%2BtmkPFycWK9QZZBQD6AHpoTR08l&X-Amz-Signature=10a3f880d3e738a5c772c409004bc0a53c84b5e10e7837ca52e75371bfd1a56e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBNXQNZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLUXt9WOc8xwbfOL7Z3hSLpzzp8pGVn1gE643zGNaWCAiAt5kF%2BiSEMOzzn9ginfEgnlSHoUP%2F2%2B4BlGJca%2BkIOvCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMQMx5mk5kNJedAqkuKtwDBYtvKQI9zCObKynNFY1JOHCkJx6GoqviKZBg9t5dqBj8CFSi6nzQCBve%2FC6dZFO4SEPxmFgdcgxxgvWefQM%2BjQwvD0wHkYPXAowl%2F3nijdp2WVLWajH%2Fc2DGnx4ydnsP3PkmIP7Cx92wAhQnv3uQcFInYws%2Fm%2Fac6PHJiOL85LizecmiYVLsSzEg7DilEMtVlNgT1ZTsvQR3wMJWdSvmFxFNL5s7Bjp1IC%2Bp07%2B0vxZRnD1uiQeRYxQ4NN4aLuqgzwBo2NgXtVFF63WxyOPIRILEM8bJxpDem0Dnw5yNa7duq1%2B%2BQzZ0jJ1EecqipdpqvRDWWK1Y16zVx1C4Q1qupfAe4yUhVhP8iExrcxJFdkaT1vHx5uotaojP9FapGX%2BhIufTKuduVv%2FExGtsJlHWMo04f4rFoTraN4a6IqR7BOtZmS7omkZOvsKFN0QK0uJ8mrxykUZpuu4NdeYSTwaDEsc%2BLbw56n2QMlmVCSxaucFNWjZFV8rpfnnlPYagJtCpW4H37SncwgoTsZ5oekHE9mU8WPyI99DLzEZsu27c0OAcyHKfh4V0T2soNMowibuL5vJe%2BbK5MOVWaZDtDO4gR%2B9vXOaT2IFq6XpoOFe12bDrC0J%2FzRmutK%2Fn2XEw9ICRwgY6pgFu%2F0D8%2FM%2BHKb9NX0g5tgbjgigxaipTykKqVmMHl%2Fdcp%2Fset5GvzfCPAwv1lAcxTXit3h8eGjoGZx4%2BpnIYIc4Kk66kkOlhjYoorKRJMdtGtuIcKUMu7UmpmmcDlIcDFqsWs68jZy9wBmM4NETlmwhv2c4BMjFcvajsNP67vuDxo8YpdpLGI6plI9Cx%2BPvqvSzko%2BtmkPFycWK9QZZBQD6AHpoTR08l&X-Amz-Signature=79dcd4561fc7b7869efd1217145c81bc0498b2c57f830047663d6d273456f65e&X-Amz-SignedHeaders=host&x-id=GetObject)
