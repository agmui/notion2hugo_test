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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNUCZX5M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1fGA32VeYfPq7tqCdQKgo0jBgHhiWiYCKcYJxACegAgIhANajRrKXX8WvnM5L2Ffxv1lHS%2BWtnFUiF7IYhiP%2BynKgKv8DCEIQABoMNjM3NDIzMTgzODA1IgywLFCeKX%2BFynlMt%2Fwq3AMiWFa4UzMvp4b2bON52liE4aY3sY0eoqV9OKDsr2I%2F%2F7i2zkQRQHLbOXWS%2FYuOu9TJdDwmhqELa4MQnGaAe1mYmuEtiUS9DSovrb74QBtmzVoOtIptfLfHrxNzaPFfi8h1PtIN211WdjTPSTeEweAD4au7vWIeh%2BJQaVvOBz6jje3V1rrgvFU9ZHu2dl2Ry05Snq8ezDCi%2B1Rdi%2FiulSdtKGS0Xg4EJeS%2FUZBO7%2BSCSFQ5DoJwLyei6cv%2BQKLRx0c45HeCUCFtxxOlJ2gRE5LN2A9fVBw2InrrJRu288mNdOc6VXoPHGVVEQZ5d0dLm%2BUOV%2BRuPdZzButU5Mw%2BLssCwwKIY%2BJWzvfJZE5sQQHxD9Cs3YYJ1nx%2BPeU9o57vpRZ8d1yIQk2gEIBj5ScZtqRIldSgWgarg40fM71qEHJargpv5BhidLWU8mBTqJGkZah4%2BITEOHnbersMffAaRoHVYgT82k5aqmspb199V1RvpZ5BUiiQcAgf3glc%2FO9gVGGzif%2FPr5sVsuGglkL90EFP%2BUYb%2BqrnxT4vdGIDqaL%2F1Bq%2FySJQtH7x3ufQNGspMqLyLSgHQoXTzf30jbJZ6MIgq5pgVdkYIngwMe8YK%2Ffem14tB0ufqQXmHY%2FTzTDPzt%2B%2BBjqkAYS2YeusGR%2Fe8V5bmlw5L1dGDumt3cigXLQq1bCotl5ni5G8b5mUUnrdDsUclsQKzhkHdZsngToz2wlJQJqw5fmTNiS3XEuFqiufq7M4zGez5ZjjCahyZ47e%2BAFZChp24ohtXrIBFQbHbW5B5v4DOxaY5Pfna7p%2FDdpo0X4NxhbA3kRhrW5oX3oAhm9C9lRJsY5fPnU1qd%2BG5eAPH%2FMrAJuHuLVr&X-Amz-Signature=925d3c695dac8b15ec568ac89bd32119c31fc795cb4225bfea8b4284c34bd237&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNUCZX5M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1fGA32VeYfPq7tqCdQKgo0jBgHhiWiYCKcYJxACegAgIhANajRrKXX8WvnM5L2Ffxv1lHS%2BWtnFUiF7IYhiP%2BynKgKv8DCEIQABoMNjM3NDIzMTgzODA1IgywLFCeKX%2BFynlMt%2Fwq3AMiWFa4UzMvp4b2bON52liE4aY3sY0eoqV9OKDsr2I%2F%2F7i2zkQRQHLbOXWS%2FYuOu9TJdDwmhqELa4MQnGaAe1mYmuEtiUS9DSovrb74QBtmzVoOtIptfLfHrxNzaPFfi8h1PtIN211WdjTPSTeEweAD4au7vWIeh%2BJQaVvOBz6jje3V1rrgvFU9ZHu2dl2Ry05Snq8ezDCi%2B1Rdi%2FiulSdtKGS0Xg4EJeS%2FUZBO7%2BSCSFQ5DoJwLyei6cv%2BQKLRx0c45HeCUCFtxxOlJ2gRE5LN2A9fVBw2InrrJRu288mNdOc6VXoPHGVVEQZ5d0dLm%2BUOV%2BRuPdZzButU5Mw%2BLssCwwKIY%2BJWzvfJZE5sQQHxD9Cs3YYJ1nx%2BPeU9o57vpRZ8d1yIQk2gEIBj5ScZtqRIldSgWgarg40fM71qEHJargpv5BhidLWU8mBTqJGkZah4%2BITEOHnbersMffAaRoHVYgT82k5aqmspb199V1RvpZ5BUiiQcAgf3glc%2FO9gVGGzif%2FPr5sVsuGglkL90EFP%2BUYb%2BqrnxT4vdGIDqaL%2F1Bq%2FySJQtH7x3ufQNGspMqLyLSgHQoXTzf30jbJZ6MIgq5pgVdkYIngwMe8YK%2Ffem14tB0ufqQXmHY%2FTzTDPzt%2B%2BBjqkAYS2YeusGR%2Fe8V5bmlw5L1dGDumt3cigXLQq1bCotl5ni5G8b5mUUnrdDsUclsQKzhkHdZsngToz2wlJQJqw5fmTNiS3XEuFqiufq7M4zGez5ZjjCahyZ47e%2BAFZChp24ohtXrIBFQbHbW5B5v4DOxaY5Pfna7p%2FDdpo0X4NxhbA3kRhrW5oX3oAhm9C9lRJsY5fPnU1qd%2BG5eAPH%2FMrAJuHuLVr&X-Amz-Signature=14f9dba82f3d684bb51d62317faa83d9488e6db084c47394093dc2e2312c2f27&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNUCZX5M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1fGA32VeYfPq7tqCdQKgo0jBgHhiWiYCKcYJxACegAgIhANajRrKXX8WvnM5L2Ffxv1lHS%2BWtnFUiF7IYhiP%2BynKgKv8DCEIQABoMNjM3NDIzMTgzODA1IgywLFCeKX%2BFynlMt%2Fwq3AMiWFa4UzMvp4b2bON52liE4aY3sY0eoqV9OKDsr2I%2F%2F7i2zkQRQHLbOXWS%2FYuOu9TJdDwmhqELa4MQnGaAe1mYmuEtiUS9DSovrb74QBtmzVoOtIptfLfHrxNzaPFfi8h1PtIN211WdjTPSTeEweAD4au7vWIeh%2BJQaVvOBz6jje3V1rrgvFU9ZHu2dl2Ry05Snq8ezDCi%2B1Rdi%2FiulSdtKGS0Xg4EJeS%2FUZBO7%2BSCSFQ5DoJwLyei6cv%2BQKLRx0c45HeCUCFtxxOlJ2gRE5LN2A9fVBw2InrrJRu288mNdOc6VXoPHGVVEQZ5d0dLm%2BUOV%2BRuPdZzButU5Mw%2BLssCwwKIY%2BJWzvfJZE5sQQHxD9Cs3YYJ1nx%2BPeU9o57vpRZ8d1yIQk2gEIBj5ScZtqRIldSgWgarg40fM71qEHJargpv5BhidLWU8mBTqJGkZah4%2BITEOHnbersMffAaRoHVYgT82k5aqmspb199V1RvpZ5BUiiQcAgf3glc%2FO9gVGGzif%2FPr5sVsuGglkL90EFP%2BUYb%2BqrnxT4vdGIDqaL%2F1Bq%2FySJQtH7x3ufQNGspMqLyLSgHQoXTzf30jbJZ6MIgq5pgVdkYIngwMe8YK%2Ffem14tB0ufqQXmHY%2FTzTDPzt%2B%2BBjqkAYS2YeusGR%2Fe8V5bmlw5L1dGDumt3cigXLQq1bCotl5ni5G8b5mUUnrdDsUclsQKzhkHdZsngToz2wlJQJqw5fmTNiS3XEuFqiufq7M4zGez5ZjjCahyZ47e%2BAFZChp24ohtXrIBFQbHbW5B5v4DOxaY5Pfna7p%2FDdpo0X4NxhbA3kRhrW5oX3oAhm9C9lRJsY5fPnU1qd%2BG5eAPH%2FMrAJuHuLVr&X-Amz-Signature=7d3042352e81a341cc21119daa7149f39d88339f521723e7f154554226d5ce36&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNUCZX5M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1fGA32VeYfPq7tqCdQKgo0jBgHhiWiYCKcYJxACegAgIhANajRrKXX8WvnM5L2Ffxv1lHS%2BWtnFUiF7IYhiP%2BynKgKv8DCEIQABoMNjM3NDIzMTgzODA1IgywLFCeKX%2BFynlMt%2Fwq3AMiWFa4UzMvp4b2bON52liE4aY3sY0eoqV9OKDsr2I%2F%2F7i2zkQRQHLbOXWS%2FYuOu9TJdDwmhqELa4MQnGaAe1mYmuEtiUS9DSovrb74QBtmzVoOtIptfLfHrxNzaPFfi8h1PtIN211WdjTPSTeEweAD4au7vWIeh%2BJQaVvOBz6jje3V1rrgvFU9ZHu2dl2Ry05Snq8ezDCi%2B1Rdi%2FiulSdtKGS0Xg4EJeS%2FUZBO7%2BSCSFQ5DoJwLyei6cv%2BQKLRx0c45HeCUCFtxxOlJ2gRE5LN2A9fVBw2InrrJRu288mNdOc6VXoPHGVVEQZ5d0dLm%2BUOV%2BRuPdZzButU5Mw%2BLssCwwKIY%2BJWzvfJZE5sQQHxD9Cs3YYJ1nx%2BPeU9o57vpRZ8d1yIQk2gEIBj5ScZtqRIldSgWgarg40fM71qEHJargpv5BhidLWU8mBTqJGkZah4%2BITEOHnbersMffAaRoHVYgT82k5aqmspb199V1RvpZ5BUiiQcAgf3glc%2FO9gVGGzif%2FPr5sVsuGglkL90EFP%2BUYb%2BqrnxT4vdGIDqaL%2F1Bq%2FySJQtH7x3ufQNGspMqLyLSgHQoXTzf30jbJZ6MIgq5pgVdkYIngwMe8YK%2Ffem14tB0ufqQXmHY%2FTzTDPzt%2B%2BBjqkAYS2YeusGR%2Fe8V5bmlw5L1dGDumt3cigXLQq1bCotl5ni5G8b5mUUnrdDsUclsQKzhkHdZsngToz2wlJQJqw5fmTNiS3XEuFqiufq7M4zGez5ZjjCahyZ47e%2BAFZChp24ohtXrIBFQbHbW5B5v4DOxaY5Pfna7p%2FDdpo0X4NxhbA3kRhrW5oX3oAhm9C9lRJsY5fPnU1qd%2BG5eAPH%2FMrAJuHuLVr&X-Amz-Signature=e2c6b4149a5062bc926a009c8f0db59a3af4c8dbc05806ed035f989678ac46a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNUCZX5M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1fGA32VeYfPq7tqCdQKgo0jBgHhiWiYCKcYJxACegAgIhANajRrKXX8WvnM5L2Ffxv1lHS%2BWtnFUiF7IYhiP%2BynKgKv8DCEIQABoMNjM3NDIzMTgzODA1IgywLFCeKX%2BFynlMt%2Fwq3AMiWFa4UzMvp4b2bON52liE4aY3sY0eoqV9OKDsr2I%2F%2F7i2zkQRQHLbOXWS%2FYuOu9TJdDwmhqELa4MQnGaAe1mYmuEtiUS9DSovrb74QBtmzVoOtIptfLfHrxNzaPFfi8h1PtIN211WdjTPSTeEweAD4au7vWIeh%2BJQaVvOBz6jje3V1rrgvFU9ZHu2dl2Ry05Snq8ezDCi%2B1Rdi%2FiulSdtKGS0Xg4EJeS%2FUZBO7%2BSCSFQ5DoJwLyei6cv%2BQKLRx0c45HeCUCFtxxOlJ2gRE5LN2A9fVBw2InrrJRu288mNdOc6VXoPHGVVEQZ5d0dLm%2BUOV%2BRuPdZzButU5Mw%2BLssCwwKIY%2BJWzvfJZE5sQQHxD9Cs3YYJ1nx%2BPeU9o57vpRZ8d1yIQk2gEIBj5ScZtqRIldSgWgarg40fM71qEHJargpv5BhidLWU8mBTqJGkZah4%2BITEOHnbersMffAaRoHVYgT82k5aqmspb199V1RvpZ5BUiiQcAgf3glc%2FO9gVGGzif%2FPr5sVsuGglkL90EFP%2BUYb%2BqrnxT4vdGIDqaL%2F1Bq%2FySJQtH7x3ufQNGspMqLyLSgHQoXTzf30jbJZ6MIgq5pgVdkYIngwMe8YK%2Ffem14tB0ufqQXmHY%2FTzTDPzt%2B%2BBjqkAYS2YeusGR%2Fe8V5bmlw5L1dGDumt3cigXLQq1bCotl5ni5G8b5mUUnrdDsUclsQKzhkHdZsngToz2wlJQJqw5fmTNiS3XEuFqiufq7M4zGez5ZjjCahyZ47e%2BAFZChp24ohtXrIBFQbHbW5B5v4DOxaY5Pfna7p%2FDdpo0X4NxhbA3kRhrW5oX3oAhm9C9lRJsY5fPnU1qd%2BG5eAPH%2FMrAJuHuLVr&X-Amz-Signature=b805b8060dca222b3c07e341a546775787ef39cdfe0aa63d65083da17e24d0ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNUCZX5M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1fGA32VeYfPq7tqCdQKgo0jBgHhiWiYCKcYJxACegAgIhANajRrKXX8WvnM5L2Ffxv1lHS%2BWtnFUiF7IYhiP%2BynKgKv8DCEIQABoMNjM3NDIzMTgzODA1IgywLFCeKX%2BFynlMt%2Fwq3AMiWFa4UzMvp4b2bON52liE4aY3sY0eoqV9OKDsr2I%2F%2F7i2zkQRQHLbOXWS%2FYuOu9TJdDwmhqELa4MQnGaAe1mYmuEtiUS9DSovrb74QBtmzVoOtIptfLfHrxNzaPFfi8h1PtIN211WdjTPSTeEweAD4au7vWIeh%2BJQaVvOBz6jje3V1rrgvFU9ZHu2dl2Ry05Snq8ezDCi%2B1Rdi%2FiulSdtKGS0Xg4EJeS%2FUZBO7%2BSCSFQ5DoJwLyei6cv%2BQKLRx0c45HeCUCFtxxOlJ2gRE5LN2A9fVBw2InrrJRu288mNdOc6VXoPHGVVEQZ5d0dLm%2BUOV%2BRuPdZzButU5Mw%2BLssCwwKIY%2BJWzvfJZE5sQQHxD9Cs3YYJ1nx%2BPeU9o57vpRZ8d1yIQk2gEIBj5ScZtqRIldSgWgarg40fM71qEHJargpv5BhidLWU8mBTqJGkZah4%2BITEOHnbersMffAaRoHVYgT82k5aqmspb199V1RvpZ5BUiiQcAgf3glc%2FO9gVGGzif%2FPr5sVsuGglkL90EFP%2BUYb%2BqrnxT4vdGIDqaL%2F1Bq%2FySJQtH7x3ufQNGspMqLyLSgHQoXTzf30jbJZ6MIgq5pgVdkYIngwMe8YK%2Ffem14tB0ufqQXmHY%2FTzTDPzt%2B%2BBjqkAYS2YeusGR%2Fe8V5bmlw5L1dGDumt3cigXLQq1bCotl5ni5G8b5mUUnrdDsUclsQKzhkHdZsngToz2wlJQJqw5fmTNiS3XEuFqiufq7M4zGez5ZjjCahyZ47e%2BAFZChp24ohtXrIBFQbHbW5B5v4DOxaY5Pfna7p%2FDdpo0X4NxhbA3kRhrW5oX3oAhm9C9lRJsY5fPnU1qd%2BG5eAPH%2FMrAJuHuLVr&X-Amz-Signature=c1ce0bdbcf6c49c271248e9dcb63bea1284de5418ae73e9eda2a3e52beb2f784&X-Amz-SignedHeaders=host&x-id=GetObject)
