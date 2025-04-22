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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OX77E33%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAKPTfEuClnoBiNi4OEwBycLF4%2F66nu4up1IjrWiQsQtAiEA6VLalW3l4DvaEW5ab3dPNCUCK5vT5oIh8RoKEk2WqsIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjBuK77vNHu8QJkbircAyAS%2F1wVtTfk%2BRbZUmV4FjzNXCYTOfUjEM0ncVmNmRYYELFceV5mreGqee3qZ8KtLJae0lWHCKpcGGplJ7Fs7h1ieLZeJfrIYTAea0kNBZSrtU8lbXPHPoan1yRAZwhkDnmVEyPB0TfjujuU6ma5n7Dwhv1Ru5cLlFhFR45apvf1yfPRFKKUc2flHMfNKkiM8mWzNQXwB%2FjTBJeCWlvFfZG7wnLjjO3FBLeKkO6fHj5sqV7W8G28Igi3gNaKk2eJKykQZtgjV%2BYqInYzIIy6z%2F96VCZm2MNqioGYzQaD2wxg9L2AGTM3FLR%2BKcPwjFGotHw17kxknVlK5WiwUl8DJ%2F%2BZtEuiJFfJyvzCpgz%2BVuAIuPXkruggNMdhxXG4yxR5hWSyH8a5OCyj13zRz54JIpfyRcegRTiMxksWcdwb4I0M%2B8c8%2BgSzPbcrrAE0Gy1Wv3jl54v9qYrlm4wyoGw3vW6W8OmT4W5El4oMC7NyZ7fPnFvAilEyZ974oCL5OUujQ7KNBn31rv7rCXCO5sf9CODYFGoz61xDq1jJH95V%2FGxZPIBigS3jAMdQOBMJ6Yd55ZCXh6DeW7gpUvFLdmjATyOmLYcGEYf39wEJFhG1NW3%2B2HXmzPRJkpo2C%2Bo5MLWqnsAGOqUB2pdTJ8ncHSwsqte5uhMfowjhie%2F3x9CVCv%2FYRfaXViLTXnMFmE1YPrsw2MLCmW18XBtsMVHBiD%2FFGwh2ndKVbapvUNQHZZq8FufayajoVCjdmgrMcxv1om%2Fhm2d%2FkEyZzgBADjxKEr8HhNXUCGFC0iYt4oau%2BgTn%2F6QhIzx%2Bq8q2MafFe4J3iACbvPPmDYVZwRP9TistcvTRuY2zqvKkYbrntG%2BM&X-Amz-Signature=ced377228cc5095957d07b33bd87b8242f3c5e79cb3ae62672562436eee1bd42&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OX77E33%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAKPTfEuClnoBiNi4OEwBycLF4%2F66nu4up1IjrWiQsQtAiEA6VLalW3l4DvaEW5ab3dPNCUCK5vT5oIh8RoKEk2WqsIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjBuK77vNHu8QJkbircAyAS%2F1wVtTfk%2BRbZUmV4FjzNXCYTOfUjEM0ncVmNmRYYELFceV5mreGqee3qZ8KtLJae0lWHCKpcGGplJ7Fs7h1ieLZeJfrIYTAea0kNBZSrtU8lbXPHPoan1yRAZwhkDnmVEyPB0TfjujuU6ma5n7Dwhv1Ru5cLlFhFR45apvf1yfPRFKKUc2flHMfNKkiM8mWzNQXwB%2FjTBJeCWlvFfZG7wnLjjO3FBLeKkO6fHj5sqV7W8G28Igi3gNaKk2eJKykQZtgjV%2BYqInYzIIy6z%2F96VCZm2MNqioGYzQaD2wxg9L2AGTM3FLR%2BKcPwjFGotHw17kxknVlK5WiwUl8DJ%2F%2BZtEuiJFfJyvzCpgz%2BVuAIuPXkruggNMdhxXG4yxR5hWSyH8a5OCyj13zRz54JIpfyRcegRTiMxksWcdwb4I0M%2B8c8%2BgSzPbcrrAE0Gy1Wv3jl54v9qYrlm4wyoGw3vW6W8OmT4W5El4oMC7NyZ7fPnFvAilEyZ974oCL5OUujQ7KNBn31rv7rCXCO5sf9CODYFGoz61xDq1jJH95V%2FGxZPIBigS3jAMdQOBMJ6Yd55ZCXh6DeW7gpUvFLdmjATyOmLYcGEYf39wEJFhG1NW3%2B2HXmzPRJkpo2C%2Bo5MLWqnsAGOqUB2pdTJ8ncHSwsqte5uhMfowjhie%2F3x9CVCv%2FYRfaXViLTXnMFmE1YPrsw2MLCmW18XBtsMVHBiD%2FFGwh2ndKVbapvUNQHZZq8FufayajoVCjdmgrMcxv1om%2Fhm2d%2FkEyZzgBADjxKEr8HhNXUCGFC0iYt4oau%2BgTn%2F6QhIzx%2Bq8q2MafFe4J3iACbvPPmDYVZwRP9TistcvTRuY2zqvKkYbrntG%2BM&X-Amz-Signature=fc1b98995f74a809b56b9d8f51218761117437aa63ceafe24941d282e4363120&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OX77E33%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAKPTfEuClnoBiNi4OEwBycLF4%2F66nu4up1IjrWiQsQtAiEA6VLalW3l4DvaEW5ab3dPNCUCK5vT5oIh8RoKEk2WqsIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjBuK77vNHu8QJkbircAyAS%2F1wVtTfk%2BRbZUmV4FjzNXCYTOfUjEM0ncVmNmRYYELFceV5mreGqee3qZ8KtLJae0lWHCKpcGGplJ7Fs7h1ieLZeJfrIYTAea0kNBZSrtU8lbXPHPoan1yRAZwhkDnmVEyPB0TfjujuU6ma5n7Dwhv1Ru5cLlFhFR45apvf1yfPRFKKUc2flHMfNKkiM8mWzNQXwB%2FjTBJeCWlvFfZG7wnLjjO3FBLeKkO6fHj5sqV7W8G28Igi3gNaKk2eJKykQZtgjV%2BYqInYzIIy6z%2F96VCZm2MNqioGYzQaD2wxg9L2AGTM3FLR%2BKcPwjFGotHw17kxknVlK5WiwUl8DJ%2F%2BZtEuiJFfJyvzCpgz%2BVuAIuPXkruggNMdhxXG4yxR5hWSyH8a5OCyj13zRz54JIpfyRcegRTiMxksWcdwb4I0M%2B8c8%2BgSzPbcrrAE0Gy1Wv3jl54v9qYrlm4wyoGw3vW6W8OmT4W5El4oMC7NyZ7fPnFvAilEyZ974oCL5OUujQ7KNBn31rv7rCXCO5sf9CODYFGoz61xDq1jJH95V%2FGxZPIBigS3jAMdQOBMJ6Yd55ZCXh6DeW7gpUvFLdmjATyOmLYcGEYf39wEJFhG1NW3%2B2HXmzPRJkpo2C%2Bo5MLWqnsAGOqUB2pdTJ8ncHSwsqte5uhMfowjhie%2F3x9CVCv%2FYRfaXViLTXnMFmE1YPrsw2MLCmW18XBtsMVHBiD%2FFGwh2ndKVbapvUNQHZZq8FufayajoVCjdmgrMcxv1om%2Fhm2d%2FkEyZzgBADjxKEr8HhNXUCGFC0iYt4oau%2BgTn%2F6QhIzx%2Bq8q2MafFe4J3iACbvPPmDYVZwRP9TistcvTRuY2zqvKkYbrntG%2BM&X-Amz-Signature=386928567b3fffbfcd48d7972f330435b44c3534104f291026cf2d209a8e1302&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OX77E33%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAKPTfEuClnoBiNi4OEwBycLF4%2F66nu4up1IjrWiQsQtAiEA6VLalW3l4DvaEW5ab3dPNCUCK5vT5oIh8RoKEk2WqsIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjBuK77vNHu8QJkbircAyAS%2F1wVtTfk%2BRbZUmV4FjzNXCYTOfUjEM0ncVmNmRYYELFceV5mreGqee3qZ8KtLJae0lWHCKpcGGplJ7Fs7h1ieLZeJfrIYTAea0kNBZSrtU8lbXPHPoan1yRAZwhkDnmVEyPB0TfjujuU6ma5n7Dwhv1Ru5cLlFhFR45apvf1yfPRFKKUc2flHMfNKkiM8mWzNQXwB%2FjTBJeCWlvFfZG7wnLjjO3FBLeKkO6fHj5sqV7W8G28Igi3gNaKk2eJKykQZtgjV%2BYqInYzIIy6z%2F96VCZm2MNqioGYzQaD2wxg9L2AGTM3FLR%2BKcPwjFGotHw17kxknVlK5WiwUl8DJ%2F%2BZtEuiJFfJyvzCpgz%2BVuAIuPXkruggNMdhxXG4yxR5hWSyH8a5OCyj13zRz54JIpfyRcegRTiMxksWcdwb4I0M%2B8c8%2BgSzPbcrrAE0Gy1Wv3jl54v9qYrlm4wyoGw3vW6W8OmT4W5El4oMC7NyZ7fPnFvAilEyZ974oCL5OUujQ7KNBn31rv7rCXCO5sf9CODYFGoz61xDq1jJH95V%2FGxZPIBigS3jAMdQOBMJ6Yd55ZCXh6DeW7gpUvFLdmjATyOmLYcGEYf39wEJFhG1NW3%2B2HXmzPRJkpo2C%2Bo5MLWqnsAGOqUB2pdTJ8ncHSwsqte5uhMfowjhie%2F3x9CVCv%2FYRfaXViLTXnMFmE1YPrsw2MLCmW18XBtsMVHBiD%2FFGwh2ndKVbapvUNQHZZq8FufayajoVCjdmgrMcxv1om%2Fhm2d%2FkEyZzgBADjxKEr8HhNXUCGFC0iYt4oau%2BgTn%2F6QhIzx%2Bq8q2MafFe4J3iACbvPPmDYVZwRP9TistcvTRuY2zqvKkYbrntG%2BM&X-Amz-Signature=f8a87e4392f80c4ec635569ab30e32e4d5282be45663653f02c341678f6ab3a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OX77E33%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAKPTfEuClnoBiNi4OEwBycLF4%2F66nu4up1IjrWiQsQtAiEA6VLalW3l4DvaEW5ab3dPNCUCK5vT5oIh8RoKEk2WqsIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjBuK77vNHu8QJkbircAyAS%2F1wVtTfk%2BRbZUmV4FjzNXCYTOfUjEM0ncVmNmRYYELFceV5mreGqee3qZ8KtLJae0lWHCKpcGGplJ7Fs7h1ieLZeJfrIYTAea0kNBZSrtU8lbXPHPoan1yRAZwhkDnmVEyPB0TfjujuU6ma5n7Dwhv1Ru5cLlFhFR45apvf1yfPRFKKUc2flHMfNKkiM8mWzNQXwB%2FjTBJeCWlvFfZG7wnLjjO3FBLeKkO6fHj5sqV7W8G28Igi3gNaKk2eJKykQZtgjV%2BYqInYzIIy6z%2F96VCZm2MNqioGYzQaD2wxg9L2AGTM3FLR%2BKcPwjFGotHw17kxknVlK5WiwUl8DJ%2F%2BZtEuiJFfJyvzCpgz%2BVuAIuPXkruggNMdhxXG4yxR5hWSyH8a5OCyj13zRz54JIpfyRcegRTiMxksWcdwb4I0M%2B8c8%2BgSzPbcrrAE0Gy1Wv3jl54v9qYrlm4wyoGw3vW6W8OmT4W5El4oMC7NyZ7fPnFvAilEyZ974oCL5OUujQ7KNBn31rv7rCXCO5sf9CODYFGoz61xDq1jJH95V%2FGxZPIBigS3jAMdQOBMJ6Yd55ZCXh6DeW7gpUvFLdmjATyOmLYcGEYf39wEJFhG1NW3%2B2HXmzPRJkpo2C%2Bo5MLWqnsAGOqUB2pdTJ8ncHSwsqte5uhMfowjhie%2F3x9CVCv%2FYRfaXViLTXnMFmE1YPrsw2MLCmW18XBtsMVHBiD%2FFGwh2ndKVbapvUNQHZZq8FufayajoVCjdmgrMcxv1om%2Fhm2d%2FkEyZzgBADjxKEr8HhNXUCGFC0iYt4oau%2BgTn%2F6QhIzx%2Bq8q2MafFe4J3iACbvPPmDYVZwRP9TistcvTRuY2zqvKkYbrntG%2BM&X-Amz-Signature=8d01e8ef387910e2973475a83e582e8bb8f384d581071e26298b65218b54ed91&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OX77E33%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAKPTfEuClnoBiNi4OEwBycLF4%2F66nu4up1IjrWiQsQtAiEA6VLalW3l4DvaEW5ab3dPNCUCK5vT5oIh8RoKEk2WqsIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjBuK77vNHu8QJkbircAyAS%2F1wVtTfk%2BRbZUmV4FjzNXCYTOfUjEM0ncVmNmRYYELFceV5mreGqee3qZ8KtLJae0lWHCKpcGGplJ7Fs7h1ieLZeJfrIYTAea0kNBZSrtU8lbXPHPoan1yRAZwhkDnmVEyPB0TfjujuU6ma5n7Dwhv1Ru5cLlFhFR45apvf1yfPRFKKUc2flHMfNKkiM8mWzNQXwB%2FjTBJeCWlvFfZG7wnLjjO3FBLeKkO6fHj5sqV7W8G28Igi3gNaKk2eJKykQZtgjV%2BYqInYzIIy6z%2F96VCZm2MNqioGYzQaD2wxg9L2AGTM3FLR%2BKcPwjFGotHw17kxknVlK5WiwUl8DJ%2F%2BZtEuiJFfJyvzCpgz%2BVuAIuPXkruggNMdhxXG4yxR5hWSyH8a5OCyj13zRz54JIpfyRcegRTiMxksWcdwb4I0M%2B8c8%2BgSzPbcrrAE0Gy1Wv3jl54v9qYrlm4wyoGw3vW6W8OmT4W5El4oMC7NyZ7fPnFvAilEyZ974oCL5OUujQ7KNBn31rv7rCXCO5sf9CODYFGoz61xDq1jJH95V%2FGxZPIBigS3jAMdQOBMJ6Yd55ZCXh6DeW7gpUvFLdmjATyOmLYcGEYf39wEJFhG1NW3%2B2HXmzPRJkpo2C%2Bo5MLWqnsAGOqUB2pdTJ8ncHSwsqte5uhMfowjhie%2F3x9CVCv%2FYRfaXViLTXnMFmE1YPrsw2MLCmW18XBtsMVHBiD%2FFGwh2ndKVbapvUNQHZZq8FufayajoVCjdmgrMcxv1om%2Fhm2d%2FkEyZzgBADjxKEr8HhNXUCGFC0iYt4oau%2BgTn%2F6QhIzx%2Bq8q2MafFe4J3iACbvPPmDYVZwRP9TistcvTRuY2zqvKkYbrntG%2BM&X-Amz-Signature=51a6c8248792bc7de5c18e3d1e396613197df535ac92387b43b9c08849e13db4&X-Amz-SignedHeaders=host&x-id=GetObject)
