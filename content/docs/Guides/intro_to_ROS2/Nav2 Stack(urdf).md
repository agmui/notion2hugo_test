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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7BUXF5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIFEz5Neje4bgQ7vtHa72%2BLTGes1ACIWmBiQ37zKWrayMAiAI7yjhF3OgTOlJkgEymTWA%2BgQvwIAHrJYGG7E0QxMqbSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMhaOeY9jiv3foMhNKKtwDgW4DzPFc3DlrCw1X57UblKiLsbItx%2F6gF2HqGMTmmu3Q9BiJUPESUk1IzoOdpJGny6l%2B1kQ9pHm9fkhknu5Nq8SEtfFq38HZ0S8Tw7lJviGMh5zCNR8DWTtku2yPvJ%2B6l4m%2Bw7JHCqdWw6Rux0EXrKIROscR1%2B6vXNEYuZ3qH2mCYnJro2VM4cHtdA19IEBsZ2FKUmTCz%2FWelwdBojZS%2BKRUFAMzwhZohQXfZ7g8C2KqDuwpbKnoKIB117abeLQRBQLuYraQDlFr5RWqnD9iVSgkk0Q4n3LhbWd2SHISVaRYbB%2BoGePB0kEWXdeRTCm0LrC8sUfx4PohjdXUWJ3pJycc%2Fzn0EvJMq%2F65WcFF7NWiBiQYxG7RJU4y1CcvyP%2FeFScR6rk%2BumOGD5CiFi8sxERX1pFEFdE5Lp5oe1zKKhDnY1sFzdoLmWpsBHa0RM32WEZwY2Lb2D5kZgSi41xL5ak8e4RchqSgwYSxpUQsz3g5hBTYjUG9Dpg%2F6N65NO4GiAjglKByzIK%2FNanToqGwFO8OGNm5okGq4ZoofTAYVnE8LfXHOMWkfWZshL5FH%2BIu1lj3e8e0n%2BDck8HlFEExoZreSb3PEpp0%2B7yCGdwkjuHAwfCmlhk0v%2FL8PxMw9NzSwwY6pgFVU%2FXp7oQD%2BkhT4WkerOycaD1IsjgiuGd%2BKGGCbaD3F9qqQ97OBXbvJBimXJgoM2JAzwq7YYHo6Mpm1VixJFUv299oUTt6xbI80%2Fjd2APWBqm8zTwO%2BOolvDq2ytkW8umauo0ulHP9HPRTN7Mo3%2BXf8X93LGG2weKct6nwNoKthCQaDHa0KTWBvlNBm2TJYNVVXht8Ma8d4vTSJSMQ4mxCMAkNckE5&X-Amz-Signature=414ccfffcf55a4b89ec504be82980eb2dc837259866ec4e535860f5c163b1841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7BUXF5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIFEz5Neje4bgQ7vtHa72%2BLTGes1ACIWmBiQ37zKWrayMAiAI7yjhF3OgTOlJkgEymTWA%2BgQvwIAHrJYGG7E0QxMqbSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMhaOeY9jiv3foMhNKKtwDgW4DzPFc3DlrCw1X57UblKiLsbItx%2F6gF2HqGMTmmu3Q9BiJUPESUk1IzoOdpJGny6l%2B1kQ9pHm9fkhknu5Nq8SEtfFq38HZ0S8Tw7lJviGMh5zCNR8DWTtku2yPvJ%2B6l4m%2Bw7JHCqdWw6Rux0EXrKIROscR1%2B6vXNEYuZ3qH2mCYnJro2VM4cHtdA19IEBsZ2FKUmTCz%2FWelwdBojZS%2BKRUFAMzwhZohQXfZ7g8C2KqDuwpbKnoKIB117abeLQRBQLuYraQDlFr5RWqnD9iVSgkk0Q4n3LhbWd2SHISVaRYbB%2BoGePB0kEWXdeRTCm0LrC8sUfx4PohjdXUWJ3pJycc%2Fzn0EvJMq%2F65WcFF7NWiBiQYxG7RJU4y1CcvyP%2FeFScR6rk%2BumOGD5CiFi8sxERX1pFEFdE5Lp5oe1zKKhDnY1sFzdoLmWpsBHa0RM32WEZwY2Lb2D5kZgSi41xL5ak8e4RchqSgwYSxpUQsz3g5hBTYjUG9Dpg%2F6N65NO4GiAjglKByzIK%2FNanToqGwFO8OGNm5okGq4ZoofTAYVnE8LfXHOMWkfWZshL5FH%2BIu1lj3e8e0n%2BDck8HlFEExoZreSb3PEpp0%2B7yCGdwkjuHAwfCmlhk0v%2FL8PxMw9NzSwwY6pgFVU%2FXp7oQD%2BkhT4WkerOycaD1IsjgiuGd%2BKGGCbaD3F9qqQ97OBXbvJBimXJgoM2JAzwq7YYHo6Mpm1VixJFUv299oUTt6xbI80%2Fjd2APWBqm8zTwO%2BOolvDq2ytkW8umauo0ulHP9HPRTN7Mo3%2BXf8X93LGG2weKct6nwNoKthCQaDHa0KTWBvlNBm2TJYNVVXht8Ma8d4vTSJSMQ4mxCMAkNckE5&X-Amz-Signature=97bb802ce3b0678d7a43fa7e3c2736e988e01cfec3a0ce7310a5da90e6eb452e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7BUXF5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIFEz5Neje4bgQ7vtHa72%2BLTGes1ACIWmBiQ37zKWrayMAiAI7yjhF3OgTOlJkgEymTWA%2BgQvwIAHrJYGG7E0QxMqbSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMhaOeY9jiv3foMhNKKtwDgW4DzPFc3DlrCw1X57UblKiLsbItx%2F6gF2HqGMTmmu3Q9BiJUPESUk1IzoOdpJGny6l%2B1kQ9pHm9fkhknu5Nq8SEtfFq38HZ0S8Tw7lJviGMh5zCNR8DWTtku2yPvJ%2B6l4m%2Bw7JHCqdWw6Rux0EXrKIROscR1%2B6vXNEYuZ3qH2mCYnJro2VM4cHtdA19IEBsZ2FKUmTCz%2FWelwdBojZS%2BKRUFAMzwhZohQXfZ7g8C2KqDuwpbKnoKIB117abeLQRBQLuYraQDlFr5RWqnD9iVSgkk0Q4n3LhbWd2SHISVaRYbB%2BoGePB0kEWXdeRTCm0LrC8sUfx4PohjdXUWJ3pJycc%2Fzn0EvJMq%2F65WcFF7NWiBiQYxG7RJU4y1CcvyP%2FeFScR6rk%2BumOGD5CiFi8sxERX1pFEFdE5Lp5oe1zKKhDnY1sFzdoLmWpsBHa0RM32WEZwY2Lb2D5kZgSi41xL5ak8e4RchqSgwYSxpUQsz3g5hBTYjUG9Dpg%2F6N65NO4GiAjglKByzIK%2FNanToqGwFO8OGNm5okGq4ZoofTAYVnE8LfXHOMWkfWZshL5FH%2BIu1lj3e8e0n%2BDck8HlFEExoZreSb3PEpp0%2B7yCGdwkjuHAwfCmlhk0v%2FL8PxMw9NzSwwY6pgFVU%2FXp7oQD%2BkhT4WkerOycaD1IsjgiuGd%2BKGGCbaD3F9qqQ97OBXbvJBimXJgoM2JAzwq7YYHo6Mpm1VixJFUv299oUTt6xbI80%2Fjd2APWBqm8zTwO%2BOolvDq2ytkW8umauo0ulHP9HPRTN7Mo3%2BXf8X93LGG2weKct6nwNoKthCQaDHa0KTWBvlNBm2TJYNVVXht8Ma8d4vTSJSMQ4mxCMAkNckE5&X-Amz-Signature=f29fdfaf239c0b1a08587a14b8195fa5c893ae0558a3e61d4651cdfc894f764b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7BUXF5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIFEz5Neje4bgQ7vtHa72%2BLTGes1ACIWmBiQ37zKWrayMAiAI7yjhF3OgTOlJkgEymTWA%2BgQvwIAHrJYGG7E0QxMqbSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMhaOeY9jiv3foMhNKKtwDgW4DzPFc3DlrCw1X57UblKiLsbItx%2F6gF2HqGMTmmu3Q9BiJUPESUk1IzoOdpJGny6l%2B1kQ9pHm9fkhknu5Nq8SEtfFq38HZ0S8Tw7lJviGMh5zCNR8DWTtku2yPvJ%2B6l4m%2Bw7JHCqdWw6Rux0EXrKIROscR1%2B6vXNEYuZ3qH2mCYnJro2VM4cHtdA19IEBsZ2FKUmTCz%2FWelwdBojZS%2BKRUFAMzwhZohQXfZ7g8C2KqDuwpbKnoKIB117abeLQRBQLuYraQDlFr5RWqnD9iVSgkk0Q4n3LhbWd2SHISVaRYbB%2BoGePB0kEWXdeRTCm0LrC8sUfx4PohjdXUWJ3pJycc%2Fzn0EvJMq%2F65WcFF7NWiBiQYxG7RJU4y1CcvyP%2FeFScR6rk%2BumOGD5CiFi8sxERX1pFEFdE5Lp5oe1zKKhDnY1sFzdoLmWpsBHa0RM32WEZwY2Lb2D5kZgSi41xL5ak8e4RchqSgwYSxpUQsz3g5hBTYjUG9Dpg%2F6N65NO4GiAjglKByzIK%2FNanToqGwFO8OGNm5okGq4ZoofTAYVnE8LfXHOMWkfWZshL5FH%2BIu1lj3e8e0n%2BDck8HlFEExoZreSb3PEpp0%2B7yCGdwkjuHAwfCmlhk0v%2FL8PxMw9NzSwwY6pgFVU%2FXp7oQD%2BkhT4WkerOycaD1IsjgiuGd%2BKGGCbaD3F9qqQ97OBXbvJBimXJgoM2JAzwq7YYHo6Mpm1VixJFUv299oUTt6xbI80%2Fjd2APWBqm8zTwO%2BOolvDq2ytkW8umauo0ulHP9HPRTN7Mo3%2BXf8X93LGG2weKct6nwNoKthCQaDHa0KTWBvlNBm2TJYNVVXht8Ma8d4vTSJSMQ4mxCMAkNckE5&X-Amz-Signature=be5cd6494e4e293cd31756c89d43c2f0fa761782f14f071c65afcb8c26be8fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7BUXF5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIFEz5Neje4bgQ7vtHa72%2BLTGes1ACIWmBiQ37zKWrayMAiAI7yjhF3OgTOlJkgEymTWA%2BgQvwIAHrJYGG7E0QxMqbSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMhaOeY9jiv3foMhNKKtwDgW4DzPFc3DlrCw1X57UblKiLsbItx%2F6gF2HqGMTmmu3Q9BiJUPESUk1IzoOdpJGny6l%2B1kQ9pHm9fkhknu5Nq8SEtfFq38HZ0S8Tw7lJviGMh5zCNR8DWTtku2yPvJ%2B6l4m%2Bw7JHCqdWw6Rux0EXrKIROscR1%2B6vXNEYuZ3qH2mCYnJro2VM4cHtdA19IEBsZ2FKUmTCz%2FWelwdBojZS%2BKRUFAMzwhZohQXfZ7g8C2KqDuwpbKnoKIB117abeLQRBQLuYraQDlFr5RWqnD9iVSgkk0Q4n3LhbWd2SHISVaRYbB%2BoGePB0kEWXdeRTCm0LrC8sUfx4PohjdXUWJ3pJycc%2Fzn0EvJMq%2F65WcFF7NWiBiQYxG7RJU4y1CcvyP%2FeFScR6rk%2BumOGD5CiFi8sxERX1pFEFdE5Lp5oe1zKKhDnY1sFzdoLmWpsBHa0RM32WEZwY2Lb2D5kZgSi41xL5ak8e4RchqSgwYSxpUQsz3g5hBTYjUG9Dpg%2F6N65NO4GiAjglKByzIK%2FNanToqGwFO8OGNm5okGq4ZoofTAYVnE8LfXHOMWkfWZshL5FH%2BIu1lj3e8e0n%2BDck8HlFEExoZreSb3PEpp0%2B7yCGdwkjuHAwfCmlhk0v%2FL8PxMw9NzSwwY6pgFVU%2FXp7oQD%2BkhT4WkerOycaD1IsjgiuGd%2BKGGCbaD3F9qqQ97OBXbvJBimXJgoM2JAzwq7YYHo6Mpm1VixJFUv299oUTt6xbI80%2Fjd2APWBqm8zTwO%2BOolvDq2ytkW8umauo0ulHP9HPRTN7Mo3%2BXf8X93LGG2weKct6nwNoKthCQaDHa0KTWBvlNBm2TJYNVVXht8Ma8d4vTSJSMQ4mxCMAkNckE5&X-Amz-Signature=d0ab37b7c210e6da05620ce89540ad567bd22ee23ad4a0c110993ea1697c59c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7BUXF5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIFEz5Neje4bgQ7vtHa72%2BLTGes1ACIWmBiQ37zKWrayMAiAI7yjhF3OgTOlJkgEymTWA%2BgQvwIAHrJYGG7E0QxMqbSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMhaOeY9jiv3foMhNKKtwDgW4DzPFc3DlrCw1X57UblKiLsbItx%2F6gF2HqGMTmmu3Q9BiJUPESUk1IzoOdpJGny6l%2B1kQ9pHm9fkhknu5Nq8SEtfFq38HZ0S8Tw7lJviGMh5zCNR8DWTtku2yPvJ%2B6l4m%2Bw7JHCqdWw6Rux0EXrKIROscR1%2B6vXNEYuZ3qH2mCYnJro2VM4cHtdA19IEBsZ2FKUmTCz%2FWelwdBojZS%2BKRUFAMzwhZohQXfZ7g8C2KqDuwpbKnoKIB117abeLQRBQLuYraQDlFr5RWqnD9iVSgkk0Q4n3LhbWd2SHISVaRYbB%2BoGePB0kEWXdeRTCm0LrC8sUfx4PohjdXUWJ3pJycc%2Fzn0EvJMq%2F65WcFF7NWiBiQYxG7RJU4y1CcvyP%2FeFScR6rk%2BumOGD5CiFi8sxERX1pFEFdE5Lp5oe1zKKhDnY1sFzdoLmWpsBHa0RM32WEZwY2Lb2D5kZgSi41xL5ak8e4RchqSgwYSxpUQsz3g5hBTYjUG9Dpg%2F6N65NO4GiAjglKByzIK%2FNanToqGwFO8OGNm5okGq4ZoofTAYVnE8LfXHOMWkfWZshL5FH%2BIu1lj3e8e0n%2BDck8HlFEExoZreSb3PEpp0%2B7yCGdwkjuHAwfCmlhk0v%2FL8PxMw9NzSwwY6pgFVU%2FXp7oQD%2BkhT4WkerOycaD1IsjgiuGd%2BKGGCbaD3F9qqQ97OBXbvJBimXJgoM2JAzwq7YYHo6Mpm1VixJFUv299oUTt6xbI80%2Fjd2APWBqm8zTwO%2BOolvDq2ytkW8umauo0ulHP9HPRTN7Mo3%2BXf8X93LGG2weKct6nwNoKthCQaDHa0KTWBvlNBm2TJYNVVXht8Ma8d4vTSJSMQ4mxCMAkNckE5&X-Amz-Signature=22bb174247792a5fc6e39616768fa87ec09bd8a1773510bfa414812a41747654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
