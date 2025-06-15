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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YKVI2O7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDaiOwS5qAEUmPiy8Cw56h%2Bi6QcQP3sygFeOpi%2Fv%2BG5YgIgNAqG5y3XcEcSx%2BiKu8i1Y7hpi4nwfR6YPEHiELJhu68q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGwaDbeB2UyVT1qMFircA%2BQpUvlImBaiUvV8%2F6mai9%2BZhgvXNBsza5kOnGMPlzQ09wwPDexqwAhe%2BGbI5na7AgT5%2BRZgDYUZi49yJN3pfN5nIQfhyJMH6rwBCMViWq%2BjaomACVbt%2FeN2KaTdfkbUzzvK7g49prn8lRCTfidaZ0Ctv98zkwfnB2qT0UCFr9pOJP3mrU3mtqa3wHI1szfWAyetMsvHxTber%2BwdN4udD7y6KGrtI1WTc6zJVYfzqMWhSWaYsMqzXpZxBKfaGPYnQ1qvjR2yiQ0onAfFQmx4%2BdlCw5PiQE%2FyRyJjcgP1OIOmxjH256I%2FboQdcQu3zolRLgMB4d6DdCKsygi8HBFfTxDxFW%2FStuxhc%2BkQQKf58FBTgFmEx8nGyrP7xUpLZkfw17qVSXVNuXyGuIOwoQcrlc0BCk2diiJ64cehr16ROyTN8qRflMBr8mfWWSwu%2FyMX4a6muXF8Wh8d%2B3f3zn1kKRb1qfAnMah34uWkJVtHMu4mvIPlTbsTK7dNOGVqQtnCuYOCZuQreC2xsUmsBAQ8FrNd4NsQzElwYqN8Dzm4uzWPEqYcukVw1bGIi1VhLnS7%2BtokHoBki%2F2wZst0bjVUAF4GfHaBFAQTpQWBTfwjNJCDmBqf8VCNDJqx%2BPL5MMzOvMIGOqUBjVCgchgqlnUkPXVfo4uOV3S2wWuhBCWSWN12G6FSlQJ%2BAyVT46bqSLHzQuXJQD7N5FzIJYVrX4VuBOCJBHBeqUcxFP2q5KxG2Z7zB5rVF%2B82x43bpmttSZjI9eUrcEJ7L2JGWAcACbZFHBCI2LfjH0YfBtld3zVvAX7B%2F2dRWRlLirWeiF1kmAux4FdfzzmqJsxE4uPPa%2B44doIMQtKbZbMlJmka&X-Amz-Signature=194cf2986cd3bdf7c595cbeafb43d56db9c5611bc90f4987f79fb466ff970365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YKVI2O7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDaiOwS5qAEUmPiy8Cw56h%2Bi6QcQP3sygFeOpi%2Fv%2BG5YgIgNAqG5y3XcEcSx%2BiKu8i1Y7hpi4nwfR6YPEHiELJhu68q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGwaDbeB2UyVT1qMFircA%2BQpUvlImBaiUvV8%2F6mai9%2BZhgvXNBsza5kOnGMPlzQ09wwPDexqwAhe%2BGbI5na7AgT5%2BRZgDYUZi49yJN3pfN5nIQfhyJMH6rwBCMViWq%2BjaomACVbt%2FeN2KaTdfkbUzzvK7g49prn8lRCTfidaZ0Ctv98zkwfnB2qT0UCFr9pOJP3mrU3mtqa3wHI1szfWAyetMsvHxTber%2BwdN4udD7y6KGrtI1WTc6zJVYfzqMWhSWaYsMqzXpZxBKfaGPYnQ1qvjR2yiQ0onAfFQmx4%2BdlCw5PiQE%2FyRyJjcgP1OIOmxjH256I%2FboQdcQu3zolRLgMB4d6DdCKsygi8HBFfTxDxFW%2FStuxhc%2BkQQKf58FBTgFmEx8nGyrP7xUpLZkfw17qVSXVNuXyGuIOwoQcrlc0BCk2diiJ64cehr16ROyTN8qRflMBr8mfWWSwu%2FyMX4a6muXF8Wh8d%2B3f3zn1kKRb1qfAnMah34uWkJVtHMu4mvIPlTbsTK7dNOGVqQtnCuYOCZuQreC2xsUmsBAQ8FrNd4NsQzElwYqN8Dzm4uzWPEqYcukVw1bGIi1VhLnS7%2BtokHoBki%2F2wZst0bjVUAF4GfHaBFAQTpQWBTfwjNJCDmBqf8VCNDJqx%2BPL5MMzOvMIGOqUBjVCgchgqlnUkPXVfo4uOV3S2wWuhBCWSWN12G6FSlQJ%2BAyVT46bqSLHzQuXJQD7N5FzIJYVrX4VuBOCJBHBeqUcxFP2q5KxG2Z7zB5rVF%2B82x43bpmttSZjI9eUrcEJ7L2JGWAcACbZFHBCI2LfjH0YfBtld3zVvAX7B%2F2dRWRlLirWeiF1kmAux4FdfzzmqJsxE4uPPa%2B44doIMQtKbZbMlJmka&X-Amz-Signature=18a6031955654048056b1c5d845f307f4e8615cc23f54ef669861ddfd540374e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YKVI2O7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDaiOwS5qAEUmPiy8Cw56h%2Bi6QcQP3sygFeOpi%2Fv%2BG5YgIgNAqG5y3XcEcSx%2BiKu8i1Y7hpi4nwfR6YPEHiELJhu68q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGwaDbeB2UyVT1qMFircA%2BQpUvlImBaiUvV8%2F6mai9%2BZhgvXNBsza5kOnGMPlzQ09wwPDexqwAhe%2BGbI5na7AgT5%2BRZgDYUZi49yJN3pfN5nIQfhyJMH6rwBCMViWq%2BjaomACVbt%2FeN2KaTdfkbUzzvK7g49prn8lRCTfidaZ0Ctv98zkwfnB2qT0UCFr9pOJP3mrU3mtqa3wHI1szfWAyetMsvHxTber%2BwdN4udD7y6KGrtI1WTc6zJVYfzqMWhSWaYsMqzXpZxBKfaGPYnQ1qvjR2yiQ0onAfFQmx4%2BdlCw5PiQE%2FyRyJjcgP1OIOmxjH256I%2FboQdcQu3zolRLgMB4d6DdCKsygi8HBFfTxDxFW%2FStuxhc%2BkQQKf58FBTgFmEx8nGyrP7xUpLZkfw17qVSXVNuXyGuIOwoQcrlc0BCk2diiJ64cehr16ROyTN8qRflMBr8mfWWSwu%2FyMX4a6muXF8Wh8d%2B3f3zn1kKRb1qfAnMah34uWkJVtHMu4mvIPlTbsTK7dNOGVqQtnCuYOCZuQreC2xsUmsBAQ8FrNd4NsQzElwYqN8Dzm4uzWPEqYcukVw1bGIi1VhLnS7%2BtokHoBki%2F2wZst0bjVUAF4GfHaBFAQTpQWBTfwjNJCDmBqf8VCNDJqx%2BPL5MMzOvMIGOqUBjVCgchgqlnUkPXVfo4uOV3S2wWuhBCWSWN12G6FSlQJ%2BAyVT46bqSLHzQuXJQD7N5FzIJYVrX4VuBOCJBHBeqUcxFP2q5KxG2Z7zB5rVF%2B82x43bpmttSZjI9eUrcEJ7L2JGWAcACbZFHBCI2LfjH0YfBtld3zVvAX7B%2F2dRWRlLirWeiF1kmAux4FdfzzmqJsxE4uPPa%2B44doIMQtKbZbMlJmka&X-Amz-Signature=06b899cbc13b0ccfaa75891a8ed8b12aea84d91f0dbd6a80cc2d784e124ac8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YKVI2O7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDaiOwS5qAEUmPiy8Cw56h%2Bi6QcQP3sygFeOpi%2Fv%2BG5YgIgNAqG5y3XcEcSx%2BiKu8i1Y7hpi4nwfR6YPEHiELJhu68q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGwaDbeB2UyVT1qMFircA%2BQpUvlImBaiUvV8%2F6mai9%2BZhgvXNBsza5kOnGMPlzQ09wwPDexqwAhe%2BGbI5na7AgT5%2BRZgDYUZi49yJN3pfN5nIQfhyJMH6rwBCMViWq%2BjaomACVbt%2FeN2KaTdfkbUzzvK7g49prn8lRCTfidaZ0Ctv98zkwfnB2qT0UCFr9pOJP3mrU3mtqa3wHI1szfWAyetMsvHxTber%2BwdN4udD7y6KGrtI1WTc6zJVYfzqMWhSWaYsMqzXpZxBKfaGPYnQ1qvjR2yiQ0onAfFQmx4%2BdlCw5PiQE%2FyRyJjcgP1OIOmxjH256I%2FboQdcQu3zolRLgMB4d6DdCKsygi8HBFfTxDxFW%2FStuxhc%2BkQQKf58FBTgFmEx8nGyrP7xUpLZkfw17qVSXVNuXyGuIOwoQcrlc0BCk2diiJ64cehr16ROyTN8qRflMBr8mfWWSwu%2FyMX4a6muXF8Wh8d%2B3f3zn1kKRb1qfAnMah34uWkJVtHMu4mvIPlTbsTK7dNOGVqQtnCuYOCZuQreC2xsUmsBAQ8FrNd4NsQzElwYqN8Dzm4uzWPEqYcukVw1bGIi1VhLnS7%2BtokHoBki%2F2wZst0bjVUAF4GfHaBFAQTpQWBTfwjNJCDmBqf8VCNDJqx%2BPL5MMzOvMIGOqUBjVCgchgqlnUkPXVfo4uOV3S2wWuhBCWSWN12G6FSlQJ%2BAyVT46bqSLHzQuXJQD7N5FzIJYVrX4VuBOCJBHBeqUcxFP2q5KxG2Z7zB5rVF%2B82x43bpmttSZjI9eUrcEJ7L2JGWAcACbZFHBCI2LfjH0YfBtld3zVvAX7B%2F2dRWRlLirWeiF1kmAux4FdfzzmqJsxE4uPPa%2B44doIMQtKbZbMlJmka&X-Amz-Signature=1a54855ce18c0908e6c53c08d3429a7e63bc8ad2169e074e244aa2ae5af527a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YKVI2O7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDaiOwS5qAEUmPiy8Cw56h%2Bi6QcQP3sygFeOpi%2Fv%2BG5YgIgNAqG5y3XcEcSx%2BiKu8i1Y7hpi4nwfR6YPEHiELJhu68q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGwaDbeB2UyVT1qMFircA%2BQpUvlImBaiUvV8%2F6mai9%2BZhgvXNBsza5kOnGMPlzQ09wwPDexqwAhe%2BGbI5na7AgT5%2BRZgDYUZi49yJN3pfN5nIQfhyJMH6rwBCMViWq%2BjaomACVbt%2FeN2KaTdfkbUzzvK7g49prn8lRCTfidaZ0Ctv98zkwfnB2qT0UCFr9pOJP3mrU3mtqa3wHI1szfWAyetMsvHxTber%2BwdN4udD7y6KGrtI1WTc6zJVYfzqMWhSWaYsMqzXpZxBKfaGPYnQ1qvjR2yiQ0onAfFQmx4%2BdlCw5PiQE%2FyRyJjcgP1OIOmxjH256I%2FboQdcQu3zolRLgMB4d6DdCKsygi8HBFfTxDxFW%2FStuxhc%2BkQQKf58FBTgFmEx8nGyrP7xUpLZkfw17qVSXVNuXyGuIOwoQcrlc0BCk2diiJ64cehr16ROyTN8qRflMBr8mfWWSwu%2FyMX4a6muXF8Wh8d%2B3f3zn1kKRb1qfAnMah34uWkJVtHMu4mvIPlTbsTK7dNOGVqQtnCuYOCZuQreC2xsUmsBAQ8FrNd4NsQzElwYqN8Dzm4uzWPEqYcukVw1bGIi1VhLnS7%2BtokHoBki%2F2wZst0bjVUAF4GfHaBFAQTpQWBTfwjNJCDmBqf8VCNDJqx%2BPL5MMzOvMIGOqUBjVCgchgqlnUkPXVfo4uOV3S2wWuhBCWSWN12G6FSlQJ%2BAyVT46bqSLHzQuXJQD7N5FzIJYVrX4VuBOCJBHBeqUcxFP2q5KxG2Z7zB5rVF%2B82x43bpmttSZjI9eUrcEJ7L2JGWAcACbZFHBCI2LfjH0YfBtld3zVvAX7B%2F2dRWRlLirWeiF1kmAux4FdfzzmqJsxE4uPPa%2B44doIMQtKbZbMlJmka&X-Amz-Signature=85cb95ecf09963c502d59535f5b08c563804f492934488fee339c29bbf65dcca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YKVI2O7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDaiOwS5qAEUmPiy8Cw56h%2Bi6QcQP3sygFeOpi%2Fv%2BG5YgIgNAqG5y3XcEcSx%2BiKu8i1Y7hpi4nwfR6YPEHiELJhu68q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGwaDbeB2UyVT1qMFircA%2BQpUvlImBaiUvV8%2F6mai9%2BZhgvXNBsza5kOnGMPlzQ09wwPDexqwAhe%2BGbI5na7AgT5%2BRZgDYUZi49yJN3pfN5nIQfhyJMH6rwBCMViWq%2BjaomACVbt%2FeN2KaTdfkbUzzvK7g49prn8lRCTfidaZ0Ctv98zkwfnB2qT0UCFr9pOJP3mrU3mtqa3wHI1szfWAyetMsvHxTber%2BwdN4udD7y6KGrtI1WTc6zJVYfzqMWhSWaYsMqzXpZxBKfaGPYnQ1qvjR2yiQ0onAfFQmx4%2BdlCw5PiQE%2FyRyJjcgP1OIOmxjH256I%2FboQdcQu3zolRLgMB4d6DdCKsygi8HBFfTxDxFW%2FStuxhc%2BkQQKf58FBTgFmEx8nGyrP7xUpLZkfw17qVSXVNuXyGuIOwoQcrlc0BCk2diiJ64cehr16ROyTN8qRflMBr8mfWWSwu%2FyMX4a6muXF8Wh8d%2B3f3zn1kKRb1qfAnMah34uWkJVtHMu4mvIPlTbsTK7dNOGVqQtnCuYOCZuQreC2xsUmsBAQ8FrNd4NsQzElwYqN8Dzm4uzWPEqYcukVw1bGIi1VhLnS7%2BtokHoBki%2F2wZst0bjVUAF4GfHaBFAQTpQWBTfwjNJCDmBqf8VCNDJqx%2BPL5MMzOvMIGOqUBjVCgchgqlnUkPXVfo4uOV3S2wWuhBCWSWN12G6FSlQJ%2BAyVT46bqSLHzQuXJQD7N5FzIJYVrX4VuBOCJBHBeqUcxFP2q5KxG2Z7zB5rVF%2B82x43bpmttSZjI9eUrcEJ7L2JGWAcACbZFHBCI2LfjH0YfBtld3zVvAX7B%2F2dRWRlLirWeiF1kmAux4FdfzzmqJsxE4uPPa%2B44doIMQtKbZbMlJmka&X-Amz-Signature=bd99d5d0252ad29f91f01bf603a2b9f499c4c996f6547a87cc26de266f5420b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
