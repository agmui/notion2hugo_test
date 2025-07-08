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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2HVMET%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGByvkan0R1hq1RYR15LyZDQiTA003Ij%2BeIDIoFJaHBxAiEA6tsl6l7d%2FZrnSENgBCFQCC6jxkxgVKyhKWxu0Zp8ko8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzCVTbdeNfCyJ8akyrcAxPd%2FbUxSirbTAuSYb2nw6tClU%2BLLLknGKmrPxv3ABPFak%2Bkcmb%2FPV0GBAtHEjDJwTA%2F0SNpNC5WIhH6rsbiYJ87aSHYXUf55Bbrq3iMStJgeP%2Bq3ZOZ2bLW5DWFo8rWyh6uFYy2u4OSqlGuNFxAdu88%2F6sSkjIDLfVthKIu3gByZhxhesooLKGY6XzjGFQKf9B8hjl19kPOxYxbuo93qPkqbhB0dSq8WzK8TlH%2BWDt27Tl502i5bkoj8VABHu3YwUENKQY0xjRtFf8CmiJGuL6KBfTfP7rPQv%2BP1hW0Vqwn7T4RTTO%2FQIFx8MAtMFDtJY044yN5CxCthXWH3GuHgKwlrp253FP%2Fq%2FHmYXytZcqrCD9D10jbF99PZ6%2Bj1HGY1ESYGvBlxY2GSZwhp9Hd%2BMmMhntgciK8%2F5%2Bphkh8a2hWDazPM2xudTXdp9Xyo6dnr%2B5xQ1G%2BK1oIYEDFEnCu1F13J1mUf%2BMX8gxIwpQzqY6fFK6XUMKwW%2FMHnSDFax51J6BKNLJq1UR%2FOEhMbXe%2FvdB%2FdtbWI0dXlDjwUqjzvmaF4Y2v1OG%2BTj82jkJrbKQSPdAc1yjFUGcMMRGf5RH%2BRW%2BIRc4uzrg7qozETDLOwo9RvXIHdObHBLHMfutcMP3Hs8MGOqUBFXazUuC4byrIamsx9yK6P%2BZdvJLGJH8DvqW6uNJM7jDyh0n8MM1DzVl74dARTItGT38JIs2EK9tPI7RJ%2FO7aJFkgvy2fXmfdErrVil6aaq7RfNXueAzNggdzta4HTvBkCNbfwCWVnVpht6%2BoguyE261lwSxXYck62pQFugNTkTQKjxpKzm2MydNE3CkAIB137OcX5kd7sEk60utif8ZoKrg9xHS0&X-Amz-Signature=ebb8988b0d631a580530da1bc53bbc36f54e0fae0da811defe605c31e6c369c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2HVMET%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGByvkan0R1hq1RYR15LyZDQiTA003Ij%2BeIDIoFJaHBxAiEA6tsl6l7d%2FZrnSENgBCFQCC6jxkxgVKyhKWxu0Zp8ko8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzCVTbdeNfCyJ8akyrcAxPd%2FbUxSirbTAuSYb2nw6tClU%2BLLLknGKmrPxv3ABPFak%2Bkcmb%2FPV0GBAtHEjDJwTA%2F0SNpNC5WIhH6rsbiYJ87aSHYXUf55Bbrq3iMStJgeP%2Bq3ZOZ2bLW5DWFo8rWyh6uFYy2u4OSqlGuNFxAdu88%2F6sSkjIDLfVthKIu3gByZhxhesooLKGY6XzjGFQKf9B8hjl19kPOxYxbuo93qPkqbhB0dSq8WzK8TlH%2BWDt27Tl502i5bkoj8VABHu3YwUENKQY0xjRtFf8CmiJGuL6KBfTfP7rPQv%2BP1hW0Vqwn7T4RTTO%2FQIFx8MAtMFDtJY044yN5CxCthXWH3GuHgKwlrp253FP%2Fq%2FHmYXytZcqrCD9D10jbF99PZ6%2Bj1HGY1ESYGvBlxY2GSZwhp9Hd%2BMmMhntgciK8%2F5%2Bphkh8a2hWDazPM2xudTXdp9Xyo6dnr%2B5xQ1G%2BK1oIYEDFEnCu1F13J1mUf%2BMX8gxIwpQzqY6fFK6XUMKwW%2FMHnSDFax51J6BKNLJq1UR%2FOEhMbXe%2FvdB%2FdtbWI0dXlDjwUqjzvmaF4Y2v1OG%2BTj82jkJrbKQSPdAc1yjFUGcMMRGf5RH%2BRW%2BIRc4uzrg7qozETDLOwo9RvXIHdObHBLHMfutcMP3Hs8MGOqUBFXazUuC4byrIamsx9yK6P%2BZdvJLGJH8DvqW6uNJM7jDyh0n8MM1DzVl74dARTItGT38JIs2EK9tPI7RJ%2FO7aJFkgvy2fXmfdErrVil6aaq7RfNXueAzNggdzta4HTvBkCNbfwCWVnVpht6%2BoguyE261lwSxXYck62pQFugNTkTQKjxpKzm2MydNE3CkAIB137OcX5kd7sEk60utif8ZoKrg9xHS0&X-Amz-Signature=2d614e204c73f421fa4fb5f594a9a03be7678d74674dfccb945281b953f08ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2HVMET%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGByvkan0R1hq1RYR15LyZDQiTA003Ij%2BeIDIoFJaHBxAiEA6tsl6l7d%2FZrnSENgBCFQCC6jxkxgVKyhKWxu0Zp8ko8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzCVTbdeNfCyJ8akyrcAxPd%2FbUxSirbTAuSYb2nw6tClU%2BLLLknGKmrPxv3ABPFak%2Bkcmb%2FPV0GBAtHEjDJwTA%2F0SNpNC5WIhH6rsbiYJ87aSHYXUf55Bbrq3iMStJgeP%2Bq3ZOZ2bLW5DWFo8rWyh6uFYy2u4OSqlGuNFxAdu88%2F6sSkjIDLfVthKIu3gByZhxhesooLKGY6XzjGFQKf9B8hjl19kPOxYxbuo93qPkqbhB0dSq8WzK8TlH%2BWDt27Tl502i5bkoj8VABHu3YwUENKQY0xjRtFf8CmiJGuL6KBfTfP7rPQv%2BP1hW0Vqwn7T4RTTO%2FQIFx8MAtMFDtJY044yN5CxCthXWH3GuHgKwlrp253FP%2Fq%2FHmYXytZcqrCD9D10jbF99PZ6%2Bj1HGY1ESYGvBlxY2GSZwhp9Hd%2BMmMhntgciK8%2F5%2Bphkh8a2hWDazPM2xudTXdp9Xyo6dnr%2B5xQ1G%2BK1oIYEDFEnCu1F13J1mUf%2BMX8gxIwpQzqY6fFK6XUMKwW%2FMHnSDFax51J6BKNLJq1UR%2FOEhMbXe%2FvdB%2FdtbWI0dXlDjwUqjzvmaF4Y2v1OG%2BTj82jkJrbKQSPdAc1yjFUGcMMRGf5RH%2BRW%2BIRc4uzrg7qozETDLOwo9RvXIHdObHBLHMfutcMP3Hs8MGOqUBFXazUuC4byrIamsx9yK6P%2BZdvJLGJH8DvqW6uNJM7jDyh0n8MM1DzVl74dARTItGT38JIs2EK9tPI7RJ%2FO7aJFkgvy2fXmfdErrVil6aaq7RfNXueAzNggdzta4HTvBkCNbfwCWVnVpht6%2BoguyE261lwSxXYck62pQFugNTkTQKjxpKzm2MydNE3CkAIB137OcX5kd7sEk60utif8ZoKrg9xHS0&X-Amz-Signature=c20010eb0e9963712f8c5bcca170aa2d0977f719c542c5de9e34f3b60ae46e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2HVMET%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGByvkan0R1hq1RYR15LyZDQiTA003Ij%2BeIDIoFJaHBxAiEA6tsl6l7d%2FZrnSENgBCFQCC6jxkxgVKyhKWxu0Zp8ko8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzCVTbdeNfCyJ8akyrcAxPd%2FbUxSirbTAuSYb2nw6tClU%2BLLLknGKmrPxv3ABPFak%2Bkcmb%2FPV0GBAtHEjDJwTA%2F0SNpNC5WIhH6rsbiYJ87aSHYXUf55Bbrq3iMStJgeP%2Bq3ZOZ2bLW5DWFo8rWyh6uFYy2u4OSqlGuNFxAdu88%2F6sSkjIDLfVthKIu3gByZhxhesooLKGY6XzjGFQKf9B8hjl19kPOxYxbuo93qPkqbhB0dSq8WzK8TlH%2BWDt27Tl502i5bkoj8VABHu3YwUENKQY0xjRtFf8CmiJGuL6KBfTfP7rPQv%2BP1hW0Vqwn7T4RTTO%2FQIFx8MAtMFDtJY044yN5CxCthXWH3GuHgKwlrp253FP%2Fq%2FHmYXytZcqrCD9D10jbF99PZ6%2Bj1HGY1ESYGvBlxY2GSZwhp9Hd%2BMmMhntgciK8%2F5%2Bphkh8a2hWDazPM2xudTXdp9Xyo6dnr%2B5xQ1G%2BK1oIYEDFEnCu1F13J1mUf%2BMX8gxIwpQzqY6fFK6XUMKwW%2FMHnSDFax51J6BKNLJq1UR%2FOEhMbXe%2FvdB%2FdtbWI0dXlDjwUqjzvmaF4Y2v1OG%2BTj82jkJrbKQSPdAc1yjFUGcMMRGf5RH%2BRW%2BIRc4uzrg7qozETDLOwo9RvXIHdObHBLHMfutcMP3Hs8MGOqUBFXazUuC4byrIamsx9yK6P%2BZdvJLGJH8DvqW6uNJM7jDyh0n8MM1DzVl74dARTItGT38JIs2EK9tPI7RJ%2FO7aJFkgvy2fXmfdErrVil6aaq7RfNXueAzNggdzta4HTvBkCNbfwCWVnVpht6%2BoguyE261lwSxXYck62pQFugNTkTQKjxpKzm2MydNE3CkAIB137OcX5kd7sEk60utif8ZoKrg9xHS0&X-Amz-Signature=52c38c4d76f4954082c2e8891c76733b5d7256dd4799c2d2a38dd627077e1488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2HVMET%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGByvkan0R1hq1RYR15LyZDQiTA003Ij%2BeIDIoFJaHBxAiEA6tsl6l7d%2FZrnSENgBCFQCC6jxkxgVKyhKWxu0Zp8ko8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzCVTbdeNfCyJ8akyrcAxPd%2FbUxSirbTAuSYb2nw6tClU%2BLLLknGKmrPxv3ABPFak%2Bkcmb%2FPV0GBAtHEjDJwTA%2F0SNpNC5WIhH6rsbiYJ87aSHYXUf55Bbrq3iMStJgeP%2Bq3ZOZ2bLW5DWFo8rWyh6uFYy2u4OSqlGuNFxAdu88%2F6sSkjIDLfVthKIu3gByZhxhesooLKGY6XzjGFQKf9B8hjl19kPOxYxbuo93qPkqbhB0dSq8WzK8TlH%2BWDt27Tl502i5bkoj8VABHu3YwUENKQY0xjRtFf8CmiJGuL6KBfTfP7rPQv%2BP1hW0Vqwn7T4RTTO%2FQIFx8MAtMFDtJY044yN5CxCthXWH3GuHgKwlrp253FP%2Fq%2FHmYXytZcqrCD9D10jbF99PZ6%2Bj1HGY1ESYGvBlxY2GSZwhp9Hd%2BMmMhntgciK8%2F5%2Bphkh8a2hWDazPM2xudTXdp9Xyo6dnr%2B5xQ1G%2BK1oIYEDFEnCu1F13J1mUf%2BMX8gxIwpQzqY6fFK6XUMKwW%2FMHnSDFax51J6BKNLJq1UR%2FOEhMbXe%2FvdB%2FdtbWI0dXlDjwUqjzvmaF4Y2v1OG%2BTj82jkJrbKQSPdAc1yjFUGcMMRGf5RH%2BRW%2BIRc4uzrg7qozETDLOwo9RvXIHdObHBLHMfutcMP3Hs8MGOqUBFXazUuC4byrIamsx9yK6P%2BZdvJLGJH8DvqW6uNJM7jDyh0n8MM1DzVl74dARTItGT38JIs2EK9tPI7RJ%2FO7aJFkgvy2fXmfdErrVil6aaq7RfNXueAzNggdzta4HTvBkCNbfwCWVnVpht6%2BoguyE261lwSxXYck62pQFugNTkTQKjxpKzm2MydNE3CkAIB137OcX5kd7sEk60utif8ZoKrg9xHS0&X-Amz-Signature=fb439ef1b7b905da5f3e5e1597420386ded679f0f2c825853ffdc42cff987f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2HVMET%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGByvkan0R1hq1RYR15LyZDQiTA003Ij%2BeIDIoFJaHBxAiEA6tsl6l7d%2FZrnSENgBCFQCC6jxkxgVKyhKWxu0Zp8ko8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzCVTbdeNfCyJ8akyrcAxPd%2FbUxSirbTAuSYb2nw6tClU%2BLLLknGKmrPxv3ABPFak%2Bkcmb%2FPV0GBAtHEjDJwTA%2F0SNpNC5WIhH6rsbiYJ87aSHYXUf55Bbrq3iMStJgeP%2Bq3ZOZ2bLW5DWFo8rWyh6uFYy2u4OSqlGuNFxAdu88%2F6sSkjIDLfVthKIu3gByZhxhesooLKGY6XzjGFQKf9B8hjl19kPOxYxbuo93qPkqbhB0dSq8WzK8TlH%2BWDt27Tl502i5bkoj8VABHu3YwUENKQY0xjRtFf8CmiJGuL6KBfTfP7rPQv%2BP1hW0Vqwn7T4RTTO%2FQIFx8MAtMFDtJY044yN5CxCthXWH3GuHgKwlrp253FP%2Fq%2FHmYXytZcqrCD9D10jbF99PZ6%2Bj1HGY1ESYGvBlxY2GSZwhp9Hd%2BMmMhntgciK8%2F5%2Bphkh8a2hWDazPM2xudTXdp9Xyo6dnr%2B5xQ1G%2BK1oIYEDFEnCu1F13J1mUf%2BMX8gxIwpQzqY6fFK6XUMKwW%2FMHnSDFax51J6BKNLJq1UR%2FOEhMbXe%2FvdB%2FdtbWI0dXlDjwUqjzvmaF4Y2v1OG%2BTj82jkJrbKQSPdAc1yjFUGcMMRGf5RH%2BRW%2BIRc4uzrg7qozETDLOwo9RvXIHdObHBLHMfutcMP3Hs8MGOqUBFXazUuC4byrIamsx9yK6P%2BZdvJLGJH8DvqW6uNJM7jDyh0n8MM1DzVl74dARTItGT38JIs2EK9tPI7RJ%2FO7aJFkgvy2fXmfdErrVil6aaq7RfNXueAzNggdzta4HTvBkCNbfwCWVnVpht6%2BoguyE261lwSxXYck62pQFugNTkTQKjxpKzm2MydNE3CkAIB137OcX5kd7sEk60utif8ZoKrg9xHS0&X-Amz-Signature=e7c20cd67cfad395620732343a07977c6b036c5ab53a7da10dad429315730b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
