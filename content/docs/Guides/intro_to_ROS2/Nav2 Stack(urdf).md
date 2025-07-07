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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6PBLYZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICYkdw9HDlfBDaZc%2BN%2BOYsLDudHaAilkJIpfwVQkp1qaAiA%2BG0ZWY06xOXa2IxrULtsKAzoMGCV31ie7v56AXhPnWSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM6bEva%2FOp6aMCnVrsKtwDYBdwgnrtV4Ojcg9YIqWIF217CHQK2avlnFb7v3qFqpE2ey4rkycl8JYlmlaBOZygOwEIjUreBXfDzFpYpjp5zYaGq2fASQiWAVmx%2F38d7DaL0B7HhHALew653Ou4jxlGWDN10%2FvkPZEktAuxt%2FMISeYe%2F9Qe%2BL0xyU5DH5zWtkoZGnLEHQwWoZ1snyNu7hGJIRBCvSHpb2O%2BSfXOKN%2FnAlVATBQQUD5O499AF8S6%2FTyu1jWCPQraGoMeI3vxNRD7HAoFQ8Ro4%2BCsvRo1eAZIa1oGh%2Br0DTxbgR7qshjRztZdqZlp7JKBieAu4I90g2duEDmfvao0jRr%2FOnOWNqmyA56HzYxzO2HgLTZcnW%2BU%2FpZnAMb%2BOAonYSYpY%2F1BErf6ad157QVYwpCIazQgzNXoIPQsbbV99O0jbQjPDE716KT5TOfgWvsoKtDTYiNMzdGMan6xbCWVFhF4ODq94MPS4vh7K6osp3%2BCQrabYWx4XiehX5qWK2gT%2FyzHm342GDM%2F7%2Fs%2FW5r4Lpn7oZ4jJlMhxM6Vh0cyTJbKmguWB1naIdbyQn0R5vzLkS%2BJPe9KlEW6Du%2FvAoLsoVQouSVU7U8sRQOSjRTpAVg2JPmaqTXLwbqXwOtump9frbnh8yswt5awwwY6pgF%2BgMwGShhJPnBlRb7wBAFm5m%2BdHazyX52MXS8GCR4tUawzy%2Fj%2BrlaXKTIWnm9HFFwxSP0p93Z5btAtsXJAFZCyAbpIMLHdx9vwVtSbEQ6SVEGeN3hfOD2Sdsn%2Bzt3cdv5%2FnC9dJCB7n%2BsA8Gap6N8tYwUwB3HQ4gtrGND0jL5H1MvFjtJnVujuH9EK8Z88Ih8CtfsfE4JtXgeq5Mej3bG7epDups%2BF&X-Amz-Signature=253a9b6b9df09ab65d0c9735ae364d6c94131d2fd7619eab2abc4031382a0e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6PBLYZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICYkdw9HDlfBDaZc%2BN%2BOYsLDudHaAilkJIpfwVQkp1qaAiA%2BG0ZWY06xOXa2IxrULtsKAzoMGCV31ie7v56AXhPnWSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM6bEva%2FOp6aMCnVrsKtwDYBdwgnrtV4Ojcg9YIqWIF217CHQK2avlnFb7v3qFqpE2ey4rkycl8JYlmlaBOZygOwEIjUreBXfDzFpYpjp5zYaGq2fASQiWAVmx%2F38d7DaL0B7HhHALew653Ou4jxlGWDN10%2FvkPZEktAuxt%2FMISeYe%2F9Qe%2BL0xyU5DH5zWtkoZGnLEHQwWoZ1snyNu7hGJIRBCvSHpb2O%2BSfXOKN%2FnAlVATBQQUD5O499AF8S6%2FTyu1jWCPQraGoMeI3vxNRD7HAoFQ8Ro4%2BCsvRo1eAZIa1oGh%2Br0DTxbgR7qshjRztZdqZlp7JKBieAu4I90g2duEDmfvao0jRr%2FOnOWNqmyA56HzYxzO2HgLTZcnW%2BU%2FpZnAMb%2BOAonYSYpY%2F1BErf6ad157QVYwpCIazQgzNXoIPQsbbV99O0jbQjPDE716KT5TOfgWvsoKtDTYiNMzdGMan6xbCWVFhF4ODq94MPS4vh7K6osp3%2BCQrabYWx4XiehX5qWK2gT%2FyzHm342GDM%2F7%2Fs%2FW5r4Lpn7oZ4jJlMhxM6Vh0cyTJbKmguWB1naIdbyQn0R5vzLkS%2BJPe9KlEW6Du%2FvAoLsoVQouSVU7U8sRQOSjRTpAVg2JPmaqTXLwbqXwOtump9frbnh8yswt5awwwY6pgF%2BgMwGShhJPnBlRb7wBAFm5m%2BdHazyX52MXS8GCR4tUawzy%2Fj%2BrlaXKTIWnm9HFFwxSP0p93Z5btAtsXJAFZCyAbpIMLHdx9vwVtSbEQ6SVEGeN3hfOD2Sdsn%2Bzt3cdv5%2FnC9dJCB7n%2BsA8Gap6N8tYwUwB3HQ4gtrGND0jL5H1MvFjtJnVujuH9EK8Z88Ih8CtfsfE4JtXgeq5Mej3bG7epDups%2BF&X-Amz-Signature=a7f9efba45a3e0a1e7d0d3b62740bf927fff80a51523eb785c8ec2c0d55e2c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6PBLYZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICYkdw9HDlfBDaZc%2BN%2BOYsLDudHaAilkJIpfwVQkp1qaAiA%2BG0ZWY06xOXa2IxrULtsKAzoMGCV31ie7v56AXhPnWSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM6bEva%2FOp6aMCnVrsKtwDYBdwgnrtV4Ojcg9YIqWIF217CHQK2avlnFb7v3qFqpE2ey4rkycl8JYlmlaBOZygOwEIjUreBXfDzFpYpjp5zYaGq2fASQiWAVmx%2F38d7DaL0B7HhHALew653Ou4jxlGWDN10%2FvkPZEktAuxt%2FMISeYe%2F9Qe%2BL0xyU5DH5zWtkoZGnLEHQwWoZ1snyNu7hGJIRBCvSHpb2O%2BSfXOKN%2FnAlVATBQQUD5O499AF8S6%2FTyu1jWCPQraGoMeI3vxNRD7HAoFQ8Ro4%2BCsvRo1eAZIa1oGh%2Br0DTxbgR7qshjRztZdqZlp7JKBieAu4I90g2duEDmfvao0jRr%2FOnOWNqmyA56HzYxzO2HgLTZcnW%2BU%2FpZnAMb%2BOAonYSYpY%2F1BErf6ad157QVYwpCIazQgzNXoIPQsbbV99O0jbQjPDE716KT5TOfgWvsoKtDTYiNMzdGMan6xbCWVFhF4ODq94MPS4vh7K6osp3%2BCQrabYWx4XiehX5qWK2gT%2FyzHm342GDM%2F7%2Fs%2FW5r4Lpn7oZ4jJlMhxM6Vh0cyTJbKmguWB1naIdbyQn0R5vzLkS%2BJPe9KlEW6Du%2FvAoLsoVQouSVU7U8sRQOSjRTpAVg2JPmaqTXLwbqXwOtump9frbnh8yswt5awwwY6pgF%2BgMwGShhJPnBlRb7wBAFm5m%2BdHazyX52MXS8GCR4tUawzy%2Fj%2BrlaXKTIWnm9HFFwxSP0p93Z5btAtsXJAFZCyAbpIMLHdx9vwVtSbEQ6SVEGeN3hfOD2Sdsn%2Bzt3cdv5%2FnC9dJCB7n%2BsA8Gap6N8tYwUwB3HQ4gtrGND0jL5H1MvFjtJnVujuH9EK8Z88Ih8CtfsfE4JtXgeq5Mej3bG7epDups%2BF&X-Amz-Signature=f0dfcabb1bd532efdbd9d2eec6623a20f34ab4e23b7be8e5aeb54504f66c4fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6PBLYZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICYkdw9HDlfBDaZc%2BN%2BOYsLDudHaAilkJIpfwVQkp1qaAiA%2BG0ZWY06xOXa2IxrULtsKAzoMGCV31ie7v56AXhPnWSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM6bEva%2FOp6aMCnVrsKtwDYBdwgnrtV4Ojcg9YIqWIF217CHQK2avlnFb7v3qFqpE2ey4rkycl8JYlmlaBOZygOwEIjUreBXfDzFpYpjp5zYaGq2fASQiWAVmx%2F38d7DaL0B7HhHALew653Ou4jxlGWDN10%2FvkPZEktAuxt%2FMISeYe%2F9Qe%2BL0xyU5DH5zWtkoZGnLEHQwWoZ1snyNu7hGJIRBCvSHpb2O%2BSfXOKN%2FnAlVATBQQUD5O499AF8S6%2FTyu1jWCPQraGoMeI3vxNRD7HAoFQ8Ro4%2BCsvRo1eAZIa1oGh%2Br0DTxbgR7qshjRztZdqZlp7JKBieAu4I90g2duEDmfvao0jRr%2FOnOWNqmyA56HzYxzO2HgLTZcnW%2BU%2FpZnAMb%2BOAonYSYpY%2F1BErf6ad157QVYwpCIazQgzNXoIPQsbbV99O0jbQjPDE716KT5TOfgWvsoKtDTYiNMzdGMan6xbCWVFhF4ODq94MPS4vh7K6osp3%2BCQrabYWx4XiehX5qWK2gT%2FyzHm342GDM%2F7%2Fs%2FW5r4Lpn7oZ4jJlMhxM6Vh0cyTJbKmguWB1naIdbyQn0R5vzLkS%2BJPe9KlEW6Du%2FvAoLsoVQouSVU7U8sRQOSjRTpAVg2JPmaqTXLwbqXwOtump9frbnh8yswt5awwwY6pgF%2BgMwGShhJPnBlRb7wBAFm5m%2BdHazyX52MXS8GCR4tUawzy%2Fj%2BrlaXKTIWnm9HFFwxSP0p93Z5btAtsXJAFZCyAbpIMLHdx9vwVtSbEQ6SVEGeN3hfOD2Sdsn%2Bzt3cdv5%2FnC9dJCB7n%2BsA8Gap6N8tYwUwB3HQ4gtrGND0jL5H1MvFjtJnVujuH9EK8Z88Ih8CtfsfE4JtXgeq5Mej3bG7epDups%2BF&X-Amz-Signature=1eda11b34c08534b55a2fdf200340abb6a29a511c19564d19150e085d3fb90fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6PBLYZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICYkdw9HDlfBDaZc%2BN%2BOYsLDudHaAilkJIpfwVQkp1qaAiA%2BG0ZWY06xOXa2IxrULtsKAzoMGCV31ie7v56AXhPnWSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM6bEva%2FOp6aMCnVrsKtwDYBdwgnrtV4Ojcg9YIqWIF217CHQK2avlnFb7v3qFqpE2ey4rkycl8JYlmlaBOZygOwEIjUreBXfDzFpYpjp5zYaGq2fASQiWAVmx%2F38d7DaL0B7HhHALew653Ou4jxlGWDN10%2FvkPZEktAuxt%2FMISeYe%2F9Qe%2BL0xyU5DH5zWtkoZGnLEHQwWoZ1snyNu7hGJIRBCvSHpb2O%2BSfXOKN%2FnAlVATBQQUD5O499AF8S6%2FTyu1jWCPQraGoMeI3vxNRD7HAoFQ8Ro4%2BCsvRo1eAZIa1oGh%2Br0DTxbgR7qshjRztZdqZlp7JKBieAu4I90g2duEDmfvao0jRr%2FOnOWNqmyA56HzYxzO2HgLTZcnW%2BU%2FpZnAMb%2BOAonYSYpY%2F1BErf6ad157QVYwpCIazQgzNXoIPQsbbV99O0jbQjPDE716KT5TOfgWvsoKtDTYiNMzdGMan6xbCWVFhF4ODq94MPS4vh7K6osp3%2BCQrabYWx4XiehX5qWK2gT%2FyzHm342GDM%2F7%2Fs%2FW5r4Lpn7oZ4jJlMhxM6Vh0cyTJbKmguWB1naIdbyQn0R5vzLkS%2BJPe9KlEW6Du%2FvAoLsoVQouSVU7U8sRQOSjRTpAVg2JPmaqTXLwbqXwOtump9frbnh8yswt5awwwY6pgF%2BgMwGShhJPnBlRb7wBAFm5m%2BdHazyX52MXS8GCR4tUawzy%2Fj%2BrlaXKTIWnm9HFFwxSP0p93Z5btAtsXJAFZCyAbpIMLHdx9vwVtSbEQ6SVEGeN3hfOD2Sdsn%2Bzt3cdv5%2FnC9dJCB7n%2BsA8Gap6N8tYwUwB3HQ4gtrGND0jL5H1MvFjtJnVujuH9EK8Z88Ih8CtfsfE4JtXgeq5Mej3bG7epDups%2BF&X-Amz-Signature=69e50ec8b80e9e093038de6442ac8b7c72a63aef5e56c23ad37bf455a3368ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6PBLYZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICYkdw9HDlfBDaZc%2BN%2BOYsLDudHaAilkJIpfwVQkp1qaAiA%2BG0ZWY06xOXa2IxrULtsKAzoMGCV31ie7v56AXhPnWSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM6bEva%2FOp6aMCnVrsKtwDYBdwgnrtV4Ojcg9YIqWIF217CHQK2avlnFb7v3qFqpE2ey4rkycl8JYlmlaBOZygOwEIjUreBXfDzFpYpjp5zYaGq2fASQiWAVmx%2F38d7DaL0B7HhHALew653Ou4jxlGWDN10%2FvkPZEktAuxt%2FMISeYe%2F9Qe%2BL0xyU5DH5zWtkoZGnLEHQwWoZ1snyNu7hGJIRBCvSHpb2O%2BSfXOKN%2FnAlVATBQQUD5O499AF8S6%2FTyu1jWCPQraGoMeI3vxNRD7HAoFQ8Ro4%2BCsvRo1eAZIa1oGh%2Br0DTxbgR7qshjRztZdqZlp7JKBieAu4I90g2duEDmfvao0jRr%2FOnOWNqmyA56HzYxzO2HgLTZcnW%2BU%2FpZnAMb%2BOAonYSYpY%2F1BErf6ad157QVYwpCIazQgzNXoIPQsbbV99O0jbQjPDE716KT5TOfgWvsoKtDTYiNMzdGMan6xbCWVFhF4ODq94MPS4vh7K6osp3%2BCQrabYWx4XiehX5qWK2gT%2FyzHm342GDM%2F7%2Fs%2FW5r4Lpn7oZ4jJlMhxM6Vh0cyTJbKmguWB1naIdbyQn0R5vzLkS%2BJPe9KlEW6Du%2FvAoLsoVQouSVU7U8sRQOSjRTpAVg2JPmaqTXLwbqXwOtump9frbnh8yswt5awwwY6pgF%2BgMwGShhJPnBlRb7wBAFm5m%2BdHazyX52MXS8GCR4tUawzy%2Fj%2BrlaXKTIWnm9HFFwxSP0p93Z5btAtsXJAFZCyAbpIMLHdx9vwVtSbEQ6SVEGeN3hfOD2Sdsn%2Bzt3cdv5%2FnC9dJCB7n%2BsA8Gap6N8tYwUwB3HQ4gtrGND0jL5H1MvFjtJnVujuH9EK8Z88Ih8CtfsfE4JtXgeq5Mej3bG7epDups%2BF&X-Amz-Signature=5a975d92109c71e86834a677e879dcdfa4b43c702fb7bd15d1c2cf8521c7ecd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
