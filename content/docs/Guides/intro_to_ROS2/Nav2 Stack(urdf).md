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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2QL2R5I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBom4KMXm1oUVuZD4KbdfzYerhGleXwRqFcXZpLm%2BfGBAiBHgmRTlq726G7r6CC5xoDkppzDqH5yxCKM6geYLsZB9ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMLoZmEgLr1ivNIznXKtwDTZpO1bysVpaPhz7jWQe2U5pjJnXhrfsaEQ89HlUmDtYDLTfg9PLVraUkjuvDgWWKl6sxgNrsccLCjwDN0TYSThBaG7bUmeP20EQ5T4UBM9njcSWW3fR3vTnX4X6ERYKlMgq7ltRilz5P%2FlZfatD%2FUIUk35L4sxyYht7z78%2BlkRPIHf5ZpuLfiU7vjbUGKJQhOKB1Klo%2FluOW6qswnDUK1ApxeaAgcUhzxJav9PD%2FZ7v9NMI6XDewhGnq%2F4Ftcs9SoMR4jS5Y4WOCCzFoI4xSys9BcodmqJPOawN4msjIcIZPQ7xa7IGDb7o%2BasY6uU8LhL3Dune%2FFv%2FgCy5pXLYZoSrcq6XuMmMSWZ6neYEIXG5kVI06VLV0Oy%2BRJI6mYy%2FSaRzMBGC2D%2FBaTIAyIq0ndujJYM6%2B9S5nIiI3hFjQL9Xd7JeoeoH0A0Y6iebRxyQxJyEDWYyRkcel2MsXV9S0RG0LHYdIulYGIxnWQ3IedtkOwNt9MG%2Bt9frEUYujRjOyvfcBdU9X7eabWShypxuBMWtkqtupTrWbi6g3TYuO89Ise2Lzqx5qIjQXXYdDJjKaIkB9pS98B4lEFbZAiayKquMGLQH9wjgFFKFwnoQC9wrdRbitzfNPyB4TVqMw5rO%2FvQY6pgHU1s310Lv0Dc2xZK8Sfut8iXywADXWhKFLOwTo5FzW0zMtXuJkX0FbVO8IcSegdv%2Bjk%2BTg55rb0Ln6zdLAGTZn3lB6hWCdVx01gIvn95MYpCsCjaXeE7%2F7cdDm6SprYy6vT8Xs8d1aNvyiMK5TbFBkKSZF3zNwVKWTpwdnchj5hrX4%2FIKd%2BAnmjsL2SS%2FIa8EK%2BAFuzLz3mBwr4yEKTxqph2cAwPvb&X-Amz-Signature=e527a1ae8643222dad1a42d110b4dc6c0887533e7b303d6bbd48419056d8b633&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2QL2R5I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBom4KMXm1oUVuZD4KbdfzYerhGleXwRqFcXZpLm%2BfGBAiBHgmRTlq726G7r6CC5xoDkppzDqH5yxCKM6geYLsZB9ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMLoZmEgLr1ivNIznXKtwDTZpO1bysVpaPhz7jWQe2U5pjJnXhrfsaEQ89HlUmDtYDLTfg9PLVraUkjuvDgWWKl6sxgNrsccLCjwDN0TYSThBaG7bUmeP20EQ5T4UBM9njcSWW3fR3vTnX4X6ERYKlMgq7ltRilz5P%2FlZfatD%2FUIUk35L4sxyYht7z78%2BlkRPIHf5ZpuLfiU7vjbUGKJQhOKB1Klo%2FluOW6qswnDUK1ApxeaAgcUhzxJav9PD%2FZ7v9NMI6XDewhGnq%2F4Ftcs9SoMR4jS5Y4WOCCzFoI4xSys9BcodmqJPOawN4msjIcIZPQ7xa7IGDb7o%2BasY6uU8LhL3Dune%2FFv%2FgCy5pXLYZoSrcq6XuMmMSWZ6neYEIXG5kVI06VLV0Oy%2BRJI6mYy%2FSaRzMBGC2D%2FBaTIAyIq0ndujJYM6%2B9S5nIiI3hFjQL9Xd7JeoeoH0A0Y6iebRxyQxJyEDWYyRkcel2MsXV9S0RG0LHYdIulYGIxnWQ3IedtkOwNt9MG%2Bt9frEUYujRjOyvfcBdU9X7eabWShypxuBMWtkqtupTrWbi6g3TYuO89Ise2Lzqx5qIjQXXYdDJjKaIkB9pS98B4lEFbZAiayKquMGLQH9wjgFFKFwnoQC9wrdRbitzfNPyB4TVqMw5rO%2FvQY6pgHU1s310Lv0Dc2xZK8Sfut8iXywADXWhKFLOwTo5FzW0zMtXuJkX0FbVO8IcSegdv%2Bjk%2BTg55rb0Ln6zdLAGTZn3lB6hWCdVx01gIvn95MYpCsCjaXeE7%2F7cdDm6SprYy6vT8Xs8d1aNvyiMK5TbFBkKSZF3zNwVKWTpwdnchj5hrX4%2FIKd%2BAnmjsL2SS%2FIa8EK%2BAFuzLz3mBwr4yEKTxqph2cAwPvb&X-Amz-Signature=277c56efefcefa8c6ebbed3e6990b9ba985a8aa289621f69da3b7769eba24725&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2QL2R5I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBom4KMXm1oUVuZD4KbdfzYerhGleXwRqFcXZpLm%2BfGBAiBHgmRTlq726G7r6CC5xoDkppzDqH5yxCKM6geYLsZB9ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMLoZmEgLr1ivNIznXKtwDTZpO1bysVpaPhz7jWQe2U5pjJnXhrfsaEQ89HlUmDtYDLTfg9PLVraUkjuvDgWWKl6sxgNrsccLCjwDN0TYSThBaG7bUmeP20EQ5T4UBM9njcSWW3fR3vTnX4X6ERYKlMgq7ltRilz5P%2FlZfatD%2FUIUk35L4sxyYht7z78%2BlkRPIHf5ZpuLfiU7vjbUGKJQhOKB1Klo%2FluOW6qswnDUK1ApxeaAgcUhzxJav9PD%2FZ7v9NMI6XDewhGnq%2F4Ftcs9SoMR4jS5Y4WOCCzFoI4xSys9BcodmqJPOawN4msjIcIZPQ7xa7IGDb7o%2BasY6uU8LhL3Dune%2FFv%2FgCy5pXLYZoSrcq6XuMmMSWZ6neYEIXG5kVI06VLV0Oy%2BRJI6mYy%2FSaRzMBGC2D%2FBaTIAyIq0ndujJYM6%2B9S5nIiI3hFjQL9Xd7JeoeoH0A0Y6iebRxyQxJyEDWYyRkcel2MsXV9S0RG0LHYdIulYGIxnWQ3IedtkOwNt9MG%2Bt9frEUYujRjOyvfcBdU9X7eabWShypxuBMWtkqtupTrWbi6g3TYuO89Ise2Lzqx5qIjQXXYdDJjKaIkB9pS98B4lEFbZAiayKquMGLQH9wjgFFKFwnoQC9wrdRbitzfNPyB4TVqMw5rO%2FvQY6pgHU1s310Lv0Dc2xZK8Sfut8iXywADXWhKFLOwTo5FzW0zMtXuJkX0FbVO8IcSegdv%2Bjk%2BTg55rb0Ln6zdLAGTZn3lB6hWCdVx01gIvn95MYpCsCjaXeE7%2F7cdDm6SprYy6vT8Xs8d1aNvyiMK5TbFBkKSZF3zNwVKWTpwdnchj5hrX4%2FIKd%2BAnmjsL2SS%2FIa8EK%2BAFuzLz3mBwr4yEKTxqph2cAwPvb&X-Amz-Signature=ad4f0c77429b465c5e4fadbf9f658dfa7855faf22538d9ec2a379a5ed59ccbeb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2QL2R5I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBom4KMXm1oUVuZD4KbdfzYerhGleXwRqFcXZpLm%2BfGBAiBHgmRTlq726G7r6CC5xoDkppzDqH5yxCKM6geYLsZB9ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMLoZmEgLr1ivNIznXKtwDTZpO1bysVpaPhz7jWQe2U5pjJnXhrfsaEQ89HlUmDtYDLTfg9PLVraUkjuvDgWWKl6sxgNrsccLCjwDN0TYSThBaG7bUmeP20EQ5T4UBM9njcSWW3fR3vTnX4X6ERYKlMgq7ltRilz5P%2FlZfatD%2FUIUk35L4sxyYht7z78%2BlkRPIHf5ZpuLfiU7vjbUGKJQhOKB1Klo%2FluOW6qswnDUK1ApxeaAgcUhzxJav9PD%2FZ7v9NMI6XDewhGnq%2F4Ftcs9SoMR4jS5Y4WOCCzFoI4xSys9BcodmqJPOawN4msjIcIZPQ7xa7IGDb7o%2BasY6uU8LhL3Dune%2FFv%2FgCy5pXLYZoSrcq6XuMmMSWZ6neYEIXG5kVI06VLV0Oy%2BRJI6mYy%2FSaRzMBGC2D%2FBaTIAyIq0ndujJYM6%2B9S5nIiI3hFjQL9Xd7JeoeoH0A0Y6iebRxyQxJyEDWYyRkcel2MsXV9S0RG0LHYdIulYGIxnWQ3IedtkOwNt9MG%2Bt9frEUYujRjOyvfcBdU9X7eabWShypxuBMWtkqtupTrWbi6g3TYuO89Ise2Lzqx5qIjQXXYdDJjKaIkB9pS98B4lEFbZAiayKquMGLQH9wjgFFKFwnoQC9wrdRbitzfNPyB4TVqMw5rO%2FvQY6pgHU1s310Lv0Dc2xZK8Sfut8iXywADXWhKFLOwTo5FzW0zMtXuJkX0FbVO8IcSegdv%2Bjk%2BTg55rb0Ln6zdLAGTZn3lB6hWCdVx01gIvn95MYpCsCjaXeE7%2F7cdDm6SprYy6vT8Xs8d1aNvyiMK5TbFBkKSZF3zNwVKWTpwdnchj5hrX4%2FIKd%2BAnmjsL2SS%2FIa8EK%2BAFuzLz3mBwr4yEKTxqph2cAwPvb&X-Amz-Signature=f4cab65f5dfb46c7f4f801b7a331e775b1a246ca263802a7e586cd922b6742df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2QL2R5I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBom4KMXm1oUVuZD4KbdfzYerhGleXwRqFcXZpLm%2BfGBAiBHgmRTlq726G7r6CC5xoDkppzDqH5yxCKM6geYLsZB9ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMLoZmEgLr1ivNIznXKtwDTZpO1bysVpaPhz7jWQe2U5pjJnXhrfsaEQ89HlUmDtYDLTfg9PLVraUkjuvDgWWKl6sxgNrsccLCjwDN0TYSThBaG7bUmeP20EQ5T4UBM9njcSWW3fR3vTnX4X6ERYKlMgq7ltRilz5P%2FlZfatD%2FUIUk35L4sxyYht7z78%2BlkRPIHf5ZpuLfiU7vjbUGKJQhOKB1Klo%2FluOW6qswnDUK1ApxeaAgcUhzxJav9PD%2FZ7v9NMI6XDewhGnq%2F4Ftcs9SoMR4jS5Y4WOCCzFoI4xSys9BcodmqJPOawN4msjIcIZPQ7xa7IGDb7o%2BasY6uU8LhL3Dune%2FFv%2FgCy5pXLYZoSrcq6XuMmMSWZ6neYEIXG5kVI06VLV0Oy%2BRJI6mYy%2FSaRzMBGC2D%2FBaTIAyIq0ndujJYM6%2B9S5nIiI3hFjQL9Xd7JeoeoH0A0Y6iebRxyQxJyEDWYyRkcel2MsXV9S0RG0LHYdIulYGIxnWQ3IedtkOwNt9MG%2Bt9frEUYujRjOyvfcBdU9X7eabWShypxuBMWtkqtupTrWbi6g3TYuO89Ise2Lzqx5qIjQXXYdDJjKaIkB9pS98B4lEFbZAiayKquMGLQH9wjgFFKFwnoQC9wrdRbitzfNPyB4TVqMw5rO%2FvQY6pgHU1s310Lv0Dc2xZK8Sfut8iXywADXWhKFLOwTo5FzW0zMtXuJkX0FbVO8IcSegdv%2Bjk%2BTg55rb0Ln6zdLAGTZn3lB6hWCdVx01gIvn95MYpCsCjaXeE7%2F7cdDm6SprYy6vT8Xs8d1aNvyiMK5TbFBkKSZF3zNwVKWTpwdnchj5hrX4%2FIKd%2BAnmjsL2SS%2FIa8EK%2BAFuzLz3mBwr4yEKTxqph2cAwPvb&X-Amz-Signature=457170ec26a3b84764d3578973b515175eed5b9fdbb4d0bcdc186db1f1c5d81c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2QL2R5I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBom4KMXm1oUVuZD4KbdfzYerhGleXwRqFcXZpLm%2BfGBAiBHgmRTlq726G7r6CC5xoDkppzDqH5yxCKM6geYLsZB9ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMLoZmEgLr1ivNIznXKtwDTZpO1bysVpaPhz7jWQe2U5pjJnXhrfsaEQ89HlUmDtYDLTfg9PLVraUkjuvDgWWKl6sxgNrsccLCjwDN0TYSThBaG7bUmeP20EQ5T4UBM9njcSWW3fR3vTnX4X6ERYKlMgq7ltRilz5P%2FlZfatD%2FUIUk35L4sxyYht7z78%2BlkRPIHf5ZpuLfiU7vjbUGKJQhOKB1Klo%2FluOW6qswnDUK1ApxeaAgcUhzxJav9PD%2FZ7v9NMI6XDewhGnq%2F4Ftcs9SoMR4jS5Y4WOCCzFoI4xSys9BcodmqJPOawN4msjIcIZPQ7xa7IGDb7o%2BasY6uU8LhL3Dune%2FFv%2FgCy5pXLYZoSrcq6XuMmMSWZ6neYEIXG5kVI06VLV0Oy%2BRJI6mYy%2FSaRzMBGC2D%2FBaTIAyIq0ndujJYM6%2B9S5nIiI3hFjQL9Xd7JeoeoH0A0Y6iebRxyQxJyEDWYyRkcel2MsXV9S0RG0LHYdIulYGIxnWQ3IedtkOwNt9MG%2Bt9frEUYujRjOyvfcBdU9X7eabWShypxuBMWtkqtupTrWbi6g3TYuO89Ise2Lzqx5qIjQXXYdDJjKaIkB9pS98B4lEFbZAiayKquMGLQH9wjgFFKFwnoQC9wrdRbitzfNPyB4TVqMw5rO%2FvQY6pgHU1s310Lv0Dc2xZK8Sfut8iXywADXWhKFLOwTo5FzW0zMtXuJkX0FbVO8IcSegdv%2Bjk%2BTg55rb0Ln6zdLAGTZn3lB6hWCdVx01gIvn95MYpCsCjaXeE7%2F7cdDm6SprYy6vT8Xs8d1aNvyiMK5TbFBkKSZF3zNwVKWTpwdnchj5hrX4%2FIKd%2BAnmjsL2SS%2FIa8EK%2BAFuzLz3mBwr4yEKTxqph2cAwPvb&X-Amz-Signature=c98e497f3dea30de0cdaa2ae9cf07281e97d33f8584a7b81873789eaae8feb10&X-Amz-SignedHeaders=host&x-id=GetObject)
