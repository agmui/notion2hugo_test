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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4GEKUW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICZE6AkRJnTsLWeVJYKoD%2FdzMoXH%2FaLIaDScItlfG1eVAiBPOLjGbCbAi02lO6%2BbTPDMtfK7tnDoeSPx%2BmstfEkuDCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMIt48NfvoFTMTtyUyKtwDAMnfYnMbVt32AwWebEvYNlP6K%2FZdXrvfufPNr%2BBsoLu6KPZY4BiSop7Lygb2JTSFypI5IvPF4C9i7lcb2VZ7iEdVOcHVDjbPgnWmuZ4JKgxwT%2Fiv9ltdpKbQkSXDucCLK8TpDkMlsqGJqo2LZ%2BqKQ%2FuvGcei5NZX9ygo%2BhO7zUNjM%2FEy%2Fci1RRFG6uXLPt9JNHT05UTrrAA8wn1kqqJQYw4w4CvsCCDDtmKuU9DQlC3qyp2FAJhvLuqVbAr%2F%2BUhI5JTaiLfJq3Gi9N5u8V6jBz3U5yTNVEjgR9ZbfFjYALWPXAz%2FBrT%2FETFQr4F%2B8lUH9ulVa3ZfOhbSeZAafoY0Le27WML3YbcttVA0hfw5eIwDjz7V9GVk6EZzOGaL0Ctj0QJkU3fVxOyRT9AkQYFlW0eCtRk%2FoWNjJwVwuxfA%2FdOwJqQoQaZb4DCz4Q6P%2BqoLk1qAv7rOQjydmH5BJPUfOc%2FX2xI21cYADq08TuqyyeIgdgyang5vO3%2BqNE4qZZTQGfMClffOEIrnRRw6QOiML3DLNz5G68quFytzBZzUkDh%2FY1nXuVYjNB5KdP6egHTlFWkV5ODej7Dui92CzYjo2mukCoouzzQJ7cO8jspWFyrs9TRkqKuGltxPhkkwscy3wgY6pgH8hRGgyDJOu9B6zo96aHXzLwJMbM8NHgqb2oz4DDDs0LaYlyR1Qb0YbJhc3JLlPA%2BVolf2fN7K73YjYnl%2BYzX4pIL8r%2F57dHJW9%2FjIbDO430SAfXiYnzi32Q0qpJ%2B38A%2FtFRS2HieCHmx0kRavxTuZejbHFtU9Nhr1FGz27g3RUS4hAYDmNpeCKYR4nq4FnLGFayNPGcmAnLdW0eNhUa9OtpY%2FUPS9&X-Amz-Signature=cf4030e53362332f1e4bb5ddd2d6a1c4734001635460e48c5efc778274ee729c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4GEKUW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICZE6AkRJnTsLWeVJYKoD%2FdzMoXH%2FaLIaDScItlfG1eVAiBPOLjGbCbAi02lO6%2BbTPDMtfK7tnDoeSPx%2BmstfEkuDCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMIt48NfvoFTMTtyUyKtwDAMnfYnMbVt32AwWebEvYNlP6K%2FZdXrvfufPNr%2BBsoLu6KPZY4BiSop7Lygb2JTSFypI5IvPF4C9i7lcb2VZ7iEdVOcHVDjbPgnWmuZ4JKgxwT%2Fiv9ltdpKbQkSXDucCLK8TpDkMlsqGJqo2LZ%2BqKQ%2FuvGcei5NZX9ygo%2BhO7zUNjM%2FEy%2Fci1RRFG6uXLPt9JNHT05UTrrAA8wn1kqqJQYw4w4CvsCCDDtmKuU9DQlC3qyp2FAJhvLuqVbAr%2F%2BUhI5JTaiLfJq3Gi9N5u8V6jBz3U5yTNVEjgR9ZbfFjYALWPXAz%2FBrT%2FETFQr4F%2B8lUH9ulVa3ZfOhbSeZAafoY0Le27WML3YbcttVA0hfw5eIwDjz7V9GVk6EZzOGaL0Ctj0QJkU3fVxOyRT9AkQYFlW0eCtRk%2FoWNjJwVwuxfA%2FdOwJqQoQaZb4DCz4Q6P%2BqoLk1qAv7rOQjydmH5BJPUfOc%2FX2xI21cYADq08TuqyyeIgdgyang5vO3%2BqNE4qZZTQGfMClffOEIrnRRw6QOiML3DLNz5G68quFytzBZzUkDh%2FY1nXuVYjNB5KdP6egHTlFWkV5ODej7Dui92CzYjo2mukCoouzzQJ7cO8jspWFyrs9TRkqKuGltxPhkkwscy3wgY6pgH8hRGgyDJOu9B6zo96aHXzLwJMbM8NHgqb2oz4DDDs0LaYlyR1Qb0YbJhc3JLlPA%2BVolf2fN7K73YjYnl%2BYzX4pIL8r%2F57dHJW9%2FjIbDO430SAfXiYnzi32Q0qpJ%2B38A%2FtFRS2HieCHmx0kRavxTuZejbHFtU9Nhr1FGz27g3RUS4hAYDmNpeCKYR4nq4FnLGFayNPGcmAnLdW0eNhUa9OtpY%2FUPS9&X-Amz-Signature=d5ab910c6ba70a4697afd5f879f33dc07eda24cf93f3a839c5e18a553001e1dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4GEKUW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICZE6AkRJnTsLWeVJYKoD%2FdzMoXH%2FaLIaDScItlfG1eVAiBPOLjGbCbAi02lO6%2BbTPDMtfK7tnDoeSPx%2BmstfEkuDCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMIt48NfvoFTMTtyUyKtwDAMnfYnMbVt32AwWebEvYNlP6K%2FZdXrvfufPNr%2BBsoLu6KPZY4BiSop7Lygb2JTSFypI5IvPF4C9i7lcb2VZ7iEdVOcHVDjbPgnWmuZ4JKgxwT%2Fiv9ltdpKbQkSXDucCLK8TpDkMlsqGJqo2LZ%2BqKQ%2FuvGcei5NZX9ygo%2BhO7zUNjM%2FEy%2Fci1RRFG6uXLPt9JNHT05UTrrAA8wn1kqqJQYw4w4CvsCCDDtmKuU9DQlC3qyp2FAJhvLuqVbAr%2F%2BUhI5JTaiLfJq3Gi9N5u8V6jBz3U5yTNVEjgR9ZbfFjYALWPXAz%2FBrT%2FETFQr4F%2B8lUH9ulVa3ZfOhbSeZAafoY0Le27WML3YbcttVA0hfw5eIwDjz7V9GVk6EZzOGaL0Ctj0QJkU3fVxOyRT9AkQYFlW0eCtRk%2FoWNjJwVwuxfA%2FdOwJqQoQaZb4DCz4Q6P%2BqoLk1qAv7rOQjydmH5BJPUfOc%2FX2xI21cYADq08TuqyyeIgdgyang5vO3%2BqNE4qZZTQGfMClffOEIrnRRw6QOiML3DLNz5G68quFytzBZzUkDh%2FY1nXuVYjNB5KdP6egHTlFWkV5ODej7Dui92CzYjo2mukCoouzzQJ7cO8jspWFyrs9TRkqKuGltxPhkkwscy3wgY6pgH8hRGgyDJOu9B6zo96aHXzLwJMbM8NHgqb2oz4DDDs0LaYlyR1Qb0YbJhc3JLlPA%2BVolf2fN7K73YjYnl%2BYzX4pIL8r%2F57dHJW9%2FjIbDO430SAfXiYnzi32Q0qpJ%2B38A%2FtFRS2HieCHmx0kRavxTuZejbHFtU9Nhr1FGz27g3RUS4hAYDmNpeCKYR4nq4FnLGFayNPGcmAnLdW0eNhUa9OtpY%2FUPS9&X-Amz-Signature=95e25c9e0145d12623126acb0c75242b14ef49960349743170c0a0b5455dc0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4GEKUW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICZE6AkRJnTsLWeVJYKoD%2FdzMoXH%2FaLIaDScItlfG1eVAiBPOLjGbCbAi02lO6%2BbTPDMtfK7tnDoeSPx%2BmstfEkuDCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMIt48NfvoFTMTtyUyKtwDAMnfYnMbVt32AwWebEvYNlP6K%2FZdXrvfufPNr%2BBsoLu6KPZY4BiSop7Lygb2JTSFypI5IvPF4C9i7lcb2VZ7iEdVOcHVDjbPgnWmuZ4JKgxwT%2Fiv9ltdpKbQkSXDucCLK8TpDkMlsqGJqo2LZ%2BqKQ%2FuvGcei5NZX9ygo%2BhO7zUNjM%2FEy%2Fci1RRFG6uXLPt9JNHT05UTrrAA8wn1kqqJQYw4w4CvsCCDDtmKuU9DQlC3qyp2FAJhvLuqVbAr%2F%2BUhI5JTaiLfJq3Gi9N5u8V6jBz3U5yTNVEjgR9ZbfFjYALWPXAz%2FBrT%2FETFQr4F%2B8lUH9ulVa3ZfOhbSeZAafoY0Le27WML3YbcttVA0hfw5eIwDjz7V9GVk6EZzOGaL0Ctj0QJkU3fVxOyRT9AkQYFlW0eCtRk%2FoWNjJwVwuxfA%2FdOwJqQoQaZb4DCz4Q6P%2BqoLk1qAv7rOQjydmH5BJPUfOc%2FX2xI21cYADq08TuqyyeIgdgyang5vO3%2BqNE4qZZTQGfMClffOEIrnRRw6QOiML3DLNz5G68quFytzBZzUkDh%2FY1nXuVYjNB5KdP6egHTlFWkV5ODej7Dui92CzYjo2mukCoouzzQJ7cO8jspWFyrs9TRkqKuGltxPhkkwscy3wgY6pgH8hRGgyDJOu9B6zo96aHXzLwJMbM8NHgqb2oz4DDDs0LaYlyR1Qb0YbJhc3JLlPA%2BVolf2fN7K73YjYnl%2BYzX4pIL8r%2F57dHJW9%2FjIbDO430SAfXiYnzi32Q0qpJ%2B38A%2FtFRS2HieCHmx0kRavxTuZejbHFtU9Nhr1FGz27g3RUS4hAYDmNpeCKYR4nq4FnLGFayNPGcmAnLdW0eNhUa9OtpY%2FUPS9&X-Amz-Signature=22a804b9359ce859bcfb21e2ac2e4b0f8028d83f3478d05a99778f9317b02158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4GEKUW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICZE6AkRJnTsLWeVJYKoD%2FdzMoXH%2FaLIaDScItlfG1eVAiBPOLjGbCbAi02lO6%2BbTPDMtfK7tnDoeSPx%2BmstfEkuDCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMIt48NfvoFTMTtyUyKtwDAMnfYnMbVt32AwWebEvYNlP6K%2FZdXrvfufPNr%2BBsoLu6KPZY4BiSop7Lygb2JTSFypI5IvPF4C9i7lcb2VZ7iEdVOcHVDjbPgnWmuZ4JKgxwT%2Fiv9ltdpKbQkSXDucCLK8TpDkMlsqGJqo2LZ%2BqKQ%2FuvGcei5NZX9ygo%2BhO7zUNjM%2FEy%2Fci1RRFG6uXLPt9JNHT05UTrrAA8wn1kqqJQYw4w4CvsCCDDtmKuU9DQlC3qyp2FAJhvLuqVbAr%2F%2BUhI5JTaiLfJq3Gi9N5u8V6jBz3U5yTNVEjgR9ZbfFjYALWPXAz%2FBrT%2FETFQr4F%2B8lUH9ulVa3ZfOhbSeZAafoY0Le27WML3YbcttVA0hfw5eIwDjz7V9GVk6EZzOGaL0Ctj0QJkU3fVxOyRT9AkQYFlW0eCtRk%2FoWNjJwVwuxfA%2FdOwJqQoQaZb4DCz4Q6P%2BqoLk1qAv7rOQjydmH5BJPUfOc%2FX2xI21cYADq08TuqyyeIgdgyang5vO3%2BqNE4qZZTQGfMClffOEIrnRRw6QOiML3DLNz5G68quFytzBZzUkDh%2FY1nXuVYjNB5KdP6egHTlFWkV5ODej7Dui92CzYjo2mukCoouzzQJ7cO8jspWFyrs9TRkqKuGltxPhkkwscy3wgY6pgH8hRGgyDJOu9B6zo96aHXzLwJMbM8NHgqb2oz4DDDs0LaYlyR1Qb0YbJhc3JLlPA%2BVolf2fN7K73YjYnl%2BYzX4pIL8r%2F57dHJW9%2FjIbDO430SAfXiYnzi32Q0qpJ%2B38A%2FtFRS2HieCHmx0kRavxTuZejbHFtU9Nhr1FGz27g3RUS4hAYDmNpeCKYR4nq4FnLGFayNPGcmAnLdW0eNhUa9OtpY%2FUPS9&X-Amz-Signature=c770976cf1c8129c701670ce2c5b6e583f6b10e93a4517c1b4cb091c3caedac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4GEKUW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICZE6AkRJnTsLWeVJYKoD%2FdzMoXH%2FaLIaDScItlfG1eVAiBPOLjGbCbAi02lO6%2BbTPDMtfK7tnDoeSPx%2BmstfEkuDCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMIt48NfvoFTMTtyUyKtwDAMnfYnMbVt32AwWebEvYNlP6K%2FZdXrvfufPNr%2BBsoLu6KPZY4BiSop7Lygb2JTSFypI5IvPF4C9i7lcb2VZ7iEdVOcHVDjbPgnWmuZ4JKgxwT%2Fiv9ltdpKbQkSXDucCLK8TpDkMlsqGJqo2LZ%2BqKQ%2FuvGcei5NZX9ygo%2BhO7zUNjM%2FEy%2Fci1RRFG6uXLPt9JNHT05UTrrAA8wn1kqqJQYw4w4CvsCCDDtmKuU9DQlC3qyp2FAJhvLuqVbAr%2F%2BUhI5JTaiLfJq3Gi9N5u8V6jBz3U5yTNVEjgR9ZbfFjYALWPXAz%2FBrT%2FETFQr4F%2B8lUH9ulVa3ZfOhbSeZAafoY0Le27WML3YbcttVA0hfw5eIwDjz7V9GVk6EZzOGaL0Ctj0QJkU3fVxOyRT9AkQYFlW0eCtRk%2FoWNjJwVwuxfA%2FdOwJqQoQaZb4DCz4Q6P%2BqoLk1qAv7rOQjydmH5BJPUfOc%2FX2xI21cYADq08TuqyyeIgdgyang5vO3%2BqNE4qZZTQGfMClffOEIrnRRw6QOiML3DLNz5G68quFytzBZzUkDh%2FY1nXuVYjNB5KdP6egHTlFWkV5ODej7Dui92CzYjo2mukCoouzzQJ7cO8jspWFyrs9TRkqKuGltxPhkkwscy3wgY6pgH8hRGgyDJOu9B6zo96aHXzLwJMbM8NHgqb2oz4DDDs0LaYlyR1Qb0YbJhc3JLlPA%2BVolf2fN7K73YjYnl%2BYzX4pIL8r%2F57dHJW9%2FjIbDO430SAfXiYnzi32Q0qpJ%2B38A%2FtFRS2HieCHmx0kRavxTuZejbHFtU9Nhr1FGz27g3RUS4hAYDmNpeCKYR4nq4FnLGFayNPGcmAnLdW0eNhUa9OtpY%2FUPS9&X-Amz-Signature=adc7c9891befe8f28d8449ade9b27fdcdfc5798e87a62cafe9167662dfd4815b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
