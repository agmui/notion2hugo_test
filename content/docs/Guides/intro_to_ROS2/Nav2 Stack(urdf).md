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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJJ5KWV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCH2j8MNvJ7UKc2g47Yzv4ukp8HdTR%2BoImsneyn3tJgwYCIQCNGn7rfhhejVCg9%2BT5SMmd%2BKI4jKEUrYf4D%2FowIQ1O%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HGVaSzADYA8Kl9OKtwDnv0%2Bx1dHyE3ZYOn0ycfd2d79iK0jAKgp7KnngdwLJEhTJvCVa20d8kooopcwMxLpWcs5RTbEj8a%2BhL5IdOqpG3%2FMgKolGxw1Z9F7O%2F9b5yKecTX2lMeuhcMWGBx%2FKyqEucnizNeIAK%2FK%2FCdVyEa2U6K66UFHzeuhBJuuHfimqRFXw4gIABsDBhpEa1nzTrKXfYKzHY8sBXDKf6X1C0DoZWJLyQpJoTma5phjjyw9e%2FMJAsD%2FuNBYDUF0mcQFq4p2BBGhexfv4MNOKgz0HoCOVNsp28WHNACrBsFhXlWTcjWIMqZ68Wg2R%2FhxGncaw2wl2UwV0kTgK06WSEg20qEAAfTNJs9ZHu%2BSNvVVFsR838qmf2bPiCcAkteyRAxPGspu3Qre7%2BXWVYcfRnb%2BAHcYC4zh0Rue1tOAqz%2F1qg1a%2FWGuQijaGakWQ2L8GL56sXgGiYAPGQazn3ES4NZBnLubFkLFzvG9spVF7EEHsWBnsVRZ4C4jw6Qb2eGaGu139evaIdvGMOpCssZnU%2Fhxoo%2Fs4a7yiQ9QfUAhCHWcLZYiaKMhn2RwvKR%2BoazwVt0ZigjhUYe%2BGiMRPWKhShVr0YbOweQZ4u8lpafS3nKT20ig23%2BPMPec7uUt4cI8yxYwibf8vgY6pgG2RrTFN%2Fknz0hYPOMVRo2T5cMds4s%2Fz8kqLNC7RZ%2FMhRZkTvlfQWbVlNVfTSuQEgbTY2pmS4kD4LALOwk9Yht20hXOFZZ3zb%2FP8xjvzHQQc1WASUMpkkLfckjxpcpwWDiSXJ3kxmb4CsgER3RgkweS5vfkRGCEQjru8IFS72Y8lwTBJVhRzRigL%2F%2FlOzTx2lvi4478%2BWKo9xbRqhlEfyUnYdr7rOIL&X-Amz-Signature=64bfecdcd0a8a41cba94e06a1a3d76541e4fefee3ee84e1c24ddd599bef9dd2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJJ5KWV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCH2j8MNvJ7UKc2g47Yzv4ukp8HdTR%2BoImsneyn3tJgwYCIQCNGn7rfhhejVCg9%2BT5SMmd%2BKI4jKEUrYf4D%2FowIQ1O%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HGVaSzADYA8Kl9OKtwDnv0%2Bx1dHyE3ZYOn0ycfd2d79iK0jAKgp7KnngdwLJEhTJvCVa20d8kooopcwMxLpWcs5RTbEj8a%2BhL5IdOqpG3%2FMgKolGxw1Z9F7O%2F9b5yKecTX2lMeuhcMWGBx%2FKyqEucnizNeIAK%2FK%2FCdVyEa2U6K66UFHzeuhBJuuHfimqRFXw4gIABsDBhpEa1nzTrKXfYKzHY8sBXDKf6X1C0DoZWJLyQpJoTma5phjjyw9e%2FMJAsD%2FuNBYDUF0mcQFq4p2BBGhexfv4MNOKgz0HoCOVNsp28WHNACrBsFhXlWTcjWIMqZ68Wg2R%2FhxGncaw2wl2UwV0kTgK06WSEg20qEAAfTNJs9ZHu%2BSNvVVFsR838qmf2bPiCcAkteyRAxPGspu3Qre7%2BXWVYcfRnb%2BAHcYC4zh0Rue1tOAqz%2F1qg1a%2FWGuQijaGakWQ2L8GL56sXgGiYAPGQazn3ES4NZBnLubFkLFzvG9spVF7EEHsWBnsVRZ4C4jw6Qb2eGaGu139evaIdvGMOpCssZnU%2Fhxoo%2Fs4a7yiQ9QfUAhCHWcLZYiaKMhn2RwvKR%2BoazwVt0ZigjhUYe%2BGiMRPWKhShVr0YbOweQZ4u8lpafS3nKT20ig23%2BPMPec7uUt4cI8yxYwibf8vgY6pgG2RrTFN%2Fknz0hYPOMVRo2T5cMds4s%2Fz8kqLNC7RZ%2FMhRZkTvlfQWbVlNVfTSuQEgbTY2pmS4kD4LALOwk9Yht20hXOFZZ3zb%2FP8xjvzHQQc1WASUMpkkLfckjxpcpwWDiSXJ3kxmb4CsgER3RgkweS5vfkRGCEQjru8IFS72Y8lwTBJVhRzRigL%2F%2FlOzTx2lvi4478%2BWKo9xbRqhlEfyUnYdr7rOIL&X-Amz-Signature=bae306ed665f92e9900562e9b5e48a18795ac6977c651c278bc5c37768ed1423&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJJ5KWV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCH2j8MNvJ7UKc2g47Yzv4ukp8HdTR%2BoImsneyn3tJgwYCIQCNGn7rfhhejVCg9%2BT5SMmd%2BKI4jKEUrYf4D%2FowIQ1O%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HGVaSzADYA8Kl9OKtwDnv0%2Bx1dHyE3ZYOn0ycfd2d79iK0jAKgp7KnngdwLJEhTJvCVa20d8kooopcwMxLpWcs5RTbEj8a%2BhL5IdOqpG3%2FMgKolGxw1Z9F7O%2F9b5yKecTX2lMeuhcMWGBx%2FKyqEucnizNeIAK%2FK%2FCdVyEa2U6K66UFHzeuhBJuuHfimqRFXw4gIABsDBhpEa1nzTrKXfYKzHY8sBXDKf6X1C0DoZWJLyQpJoTma5phjjyw9e%2FMJAsD%2FuNBYDUF0mcQFq4p2BBGhexfv4MNOKgz0HoCOVNsp28WHNACrBsFhXlWTcjWIMqZ68Wg2R%2FhxGncaw2wl2UwV0kTgK06WSEg20qEAAfTNJs9ZHu%2BSNvVVFsR838qmf2bPiCcAkteyRAxPGspu3Qre7%2BXWVYcfRnb%2BAHcYC4zh0Rue1tOAqz%2F1qg1a%2FWGuQijaGakWQ2L8GL56sXgGiYAPGQazn3ES4NZBnLubFkLFzvG9spVF7EEHsWBnsVRZ4C4jw6Qb2eGaGu139evaIdvGMOpCssZnU%2Fhxoo%2Fs4a7yiQ9QfUAhCHWcLZYiaKMhn2RwvKR%2BoazwVt0ZigjhUYe%2BGiMRPWKhShVr0YbOweQZ4u8lpafS3nKT20ig23%2BPMPec7uUt4cI8yxYwibf8vgY6pgG2RrTFN%2Fknz0hYPOMVRo2T5cMds4s%2Fz8kqLNC7RZ%2FMhRZkTvlfQWbVlNVfTSuQEgbTY2pmS4kD4LALOwk9Yht20hXOFZZ3zb%2FP8xjvzHQQc1WASUMpkkLfckjxpcpwWDiSXJ3kxmb4CsgER3RgkweS5vfkRGCEQjru8IFS72Y8lwTBJVhRzRigL%2F%2FlOzTx2lvi4478%2BWKo9xbRqhlEfyUnYdr7rOIL&X-Amz-Signature=f05cadf9982985de13a2d87d7469117c32538b37ca942e3d2c9d190774d65fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJJ5KWV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCH2j8MNvJ7UKc2g47Yzv4ukp8HdTR%2BoImsneyn3tJgwYCIQCNGn7rfhhejVCg9%2BT5SMmd%2BKI4jKEUrYf4D%2FowIQ1O%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HGVaSzADYA8Kl9OKtwDnv0%2Bx1dHyE3ZYOn0ycfd2d79iK0jAKgp7KnngdwLJEhTJvCVa20d8kooopcwMxLpWcs5RTbEj8a%2BhL5IdOqpG3%2FMgKolGxw1Z9F7O%2F9b5yKecTX2lMeuhcMWGBx%2FKyqEucnizNeIAK%2FK%2FCdVyEa2U6K66UFHzeuhBJuuHfimqRFXw4gIABsDBhpEa1nzTrKXfYKzHY8sBXDKf6X1C0DoZWJLyQpJoTma5phjjyw9e%2FMJAsD%2FuNBYDUF0mcQFq4p2BBGhexfv4MNOKgz0HoCOVNsp28WHNACrBsFhXlWTcjWIMqZ68Wg2R%2FhxGncaw2wl2UwV0kTgK06WSEg20qEAAfTNJs9ZHu%2BSNvVVFsR838qmf2bPiCcAkteyRAxPGspu3Qre7%2BXWVYcfRnb%2BAHcYC4zh0Rue1tOAqz%2F1qg1a%2FWGuQijaGakWQ2L8GL56sXgGiYAPGQazn3ES4NZBnLubFkLFzvG9spVF7EEHsWBnsVRZ4C4jw6Qb2eGaGu139evaIdvGMOpCssZnU%2Fhxoo%2Fs4a7yiQ9QfUAhCHWcLZYiaKMhn2RwvKR%2BoazwVt0ZigjhUYe%2BGiMRPWKhShVr0YbOweQZ4u8lpafS3nKT20ig23%2BPMPec7uUt4cI8yxYwibf8vgY6pgG2RrTFN%2Fknz0hYPOMVRo2T5cMds4s%2Fz8kqLNC7RZ%2FMhRZkTvlfQWbVlNVfTSuQEgbTY2pmS4kD4LALOwk9Yht20hXOFZZ3zb%2FP8xjvzHQQc1WASUMpkkLfckjxpcpwWDiSXJ3kxmb4CsgER3RgkweS5vfkRGCEQjru8IFS72Y8lwTBJVhRzRigL%2F%2FlOzTx2lvi4478%2BWKo9xbRqhlEfyUnYdr7rOIL&X-Amz-Signature=f0f06d4ed102152958f916c9f918c82da31a90a8548feec74329effb8d701aee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJJ5KWV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCH2j8MNvJ7UKc2g47Yzv4ukp8HdTR%2BoImsneyn3tJgwYCIQCNGn7rfhhejVCg9%2BT5SMmd%2BKI4jKEUrYf4D%2FowIQ1O%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HGVaSzADYA8Kl9OKtwDnv0%2Bx1dHyE3ZYOn0ycfd2d79iK0jAKgp7KnngdwLJEhTJvCVa20d8kooopcwMxLpWcs5RTbEj8a%2BhL5IdOqpG3%2FMgKolGxw1Z9F7O%2F9b5yKecTX2lMeuhcMWGBx%2FKyqEucnizNeIAK%2FK%2FCdVyEa2U6K66UFHzeuhBJuuHfimqRFXw4gIABsDBhpEa1nzTrKXfYKzHY8sBXDKf6X1C0DoZWJLyQpJoTma5phjjyw9e%2FMJAsD%2FuNBYDUF0mcQFq4p2BBGhexfv4MNOKgz0HoCOVNsp28WHNACrBsFhXlWTcjWIMqZ68Wg2R%2FhxGncaw2wl2UwV0kTgK06WSEg20qEAAfTNJs9ZHu%2BSNvVVFsR838qmf2bPiCcAkteyRAxPGspu3Qre7%2BXWVYcfRnb%2BAHcYC4zh0Rue1tOAqz%2F1qg1a%2FWGuQijaGakWQ2L8GL56sXgGiYAPGQazn3ES4NZBnLubFkLFzvG9spVF7EEHsWBnsVRZ4C4jw6Qb2eGaGu139evaIdvGMOpCssZnU%2Fhxoo%2Fs4a7yiQ9QfUAhCHWcLZYiaKMhn2RwvKR%2BoazwVt0ZigjhUYe%2BGiMRPWKhShVr0YbOweQZ4u8lpafS3nKT20ig23%2BPMPec7uUt4cI8yxYwibf8vgY6pgG2RrTFN%2Fknz0hYPOMVRo2T5cMds4s%2Fz8kqLNC7RZ%2FMhRZkTvlfQWbVlNVfTSuQEgbTY2pmS4kD4LALOwk9Yht20hXOFZZ3zb%2FP8xjvzHQQc1WASUMpkkLfckjxpcpwWDiSXJ3kxmb4CsgER3RgkweS5vfkRGCEQjru8IFS72Y8lwTBJVhRzRigL%2F%2FlOzTx2lvi4478%2BWKo9xbRqhlEfyUnYdr7rOIL&X-Amz-Signature=12abb0bc01112db5c9b8ae280a040a460d326d76b4a03661e8102010b7e5d356&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJJ5KWV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCH2j8MNvJ7UKc2g47Yzv4ukp8HdTR%2BoImsneyn3tJgwYCIQCNGn7rfhhejVCg9%2BT5SMmd%2BKI4jKEUrYf4D%2FowIQ1O%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HGVaSzADYA8Kl9OKtwDnv0%2Bx1dHyE3ZYOn0ycfd2d79iK0jAKgp7KnngdwLJEhTJvCVa20d8kooopcwMxLpWcs5RTbEj8a%2BhL5IdOqpG3%2FMgKolGxw1Z9F7O%2F9b5yKecTX2lMeuhcMWGBx%2FKyqEucnizNeIAK%2FK%2FCdVyEa2U6K66UFHzeuhBJuuHfimqRFXw4gIABsDBhpEa1nzTrKXfYKzHY8sBXDKf6X1C0DoZWJLyQpJoTma5phjjyw9e%2FMJAsD%2FuNBYDUF0mcQFq4p2BBGhexfv4MNOKgz0HoCOVNsp28WHNACrBsFhXlWTcjWIMqZ68Wg2R%2FhxGncaw2wl2UwV0kTgK06WSEg20qEAAfTNJs9ZHu%2BSNvVVFsR838qmf2bPiCcAkteyRAxPGspu3Qre7%2BXWVYcfRnb%2BAHcYC4zh0Rue1tOAqz%2F1qg1a%2FWGuQijaGakWQ2L8GL56sXgGiYAPGQazn3ES4NZBnLubFkLFzvG9spVF7EEHsWBnsVRZ4C4jw6Qb2eGaGu139evaIdvGMOpCssZnU%2Fhxoo%2Fs4a7yiQ9QfUAhCHWcLZYiaKMhn2RwvKR%2BoazwVt0ZigjhUYe%2BGiMRPWKhShVr0YbOweQZ4u8lpafS3nKT20ig23%2BPMPec7uUt4cI8yxYwibf8vgY6pgG2RrTFN%2Fknz0hYPOMVRo2T5cMds4s%2Fz8kqLNC7RZ%2FMhRZkTvlfQWbVlNVfTSuQEgbTY2pmS4kD4LALOwk9Yht20hXOFZZ3zb%2FP8xjvzHQQc1WASUMpkkLfckjxpcpwWDiSXJ3kxmb4CsgER3RgkweS5vfkRGCEQjru8IFS72Y8lwTBJVhRzRigL%2F%2FlOzTx2lvi4478%2BWKo9xbRqhlEfyUnYdr7rOIL&X-Amz-Signature=9d75071015ba9bfd94fe095552b08091c5732d0dae7ac6fc21727df25297755a&X-Amz-SignedHeaders=host&x-id=GetObject)
