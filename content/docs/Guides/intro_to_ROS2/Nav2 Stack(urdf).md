---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAJD7S3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCw8vbc%2B1t0dWAan38bsgARV1RU3DgkwkLjVqyvjl7nNQIhAILwAseXiiZvIaVFcxlxVK6%2F8HgliUr9clKczSGY9cYsKv8DCF8QABoMNjM3NDIzMTgzODA1Igzp67ywzIjp%2F%2FJkrokq3AOJ%2BixsVGj4Tk6FSpAecq2%2Bd%2Be2nHp1BjPiMj28dVcz%2FX359beKwHzoCksawlpc%2BLv1JEE7rDiHYq%2BnF58fZDtgxxSYi9IeduciTiaiDGW%2Fld9wtKqRvgkM6jZSIoknrSmkDE%2FhspE86w88kGwbXNyV7riUR%2F5NvIn5b7iyX%2BUOzSI5rXvr8ZwTV6qRYSDD30dtvPJ7yEvNWlS0eX9a1UeYmpAUhlfi5haxp9reoKm%2Fev74Vbgkyblfddl8Zr9c54pm0QAXqgTw57KI0qYSXqfMQDKoDBsWej6Vbz%2BEvYM%2BoFg1m2b0YDjy%2FG6vOBlfrKieePYneISfLURqTPXvvYcc7uieEXf1QuQneyTc03rt266z50wc9KwPP0XeNYHmuYMYe3Bdga%2FXFn53Fuo2E1JLz3d8VbCmN53A5HBrHXbr8LTEeWIkGgqz1eRdmwknQBOntfju6tfVxNtb12SLgSEqc2LmwZIbSljHT1Pk6vNIU395Po0UvB7fHasjwYhUfQ3fYDEBJaaLs4IOlMZhXGOZiXETOkPCL7b75ys40RjZBXDCbjS8U8TYKepb1W%2BDwChjaqB8pHvypmzvhKo5u50Pj%2BcpnYgz0JKvM7hHfeT8EbW2YIFh5xy6b5OP%2BjD4%2BpK9BjqkAUmRxtTOClinlUznRbPjK%2BmNnB51IGOTay9dpHdVqROw6WC0S1VtjpRvu9Rgut%2FVbxvtqPNzBn3n2UGa2jrgPE9sPnhs8ChfHf2qCKERPl5IpJB%2B%2BL06cpZA2WIoFV%2Bve0%2FUKgwKw9LDOimh8jVyC%2FPQYiWMykgLrnAVGLvHPYfUnhJpEh8AnNwsT6py85%2Fr3iTqyp2cGwOBxmQuWY4jOdRWkCdS&X-Amz-Signature=d38737f5394541fc97cb3b3f7126e8eb3f8c6816c560f6800f072d9f416cb38a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAJD7S3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCw8vbc%2B1t0dWAan38bsgARV1RU3DgkwkLjVqyvjl7nNQIhAILwAseXiiZvIaVFcxlxVK6%2F8HgliUr9clKczSGY9cYsKv8DCF8QABoMNjM3NDIzMTgzODA1Igzp67ywzIjp%2F%2FJkrokq3AOJ%2BixsVGj4Tk6FSpAecq2%2Bd%2Be2nHp1BjPiMj28dVcz%2FX359beKwHzoCksawlpc%2BLv1JEE7rDiHYq%2BnF58fZDtgxxSYi9IeduciTiaiDGW%2Fld9wtKqRvgkM6jZSIoknrSmkDE%2FhspE86w88kGwbXNyV7riUR%2F5NvIn5b7iyX%2BUOzSI5rXvr8ZwTV6qRYSDD30dtvPJ7yEvNWlS0eX9a1UeYmpAUhlfi5haxp9reoKm%2Fev74Vbgkyblfddl8Zr9c54pm0QAXqgTw57KI0qYSXqfMQDKoDBsWej6Vbz%2BEvYM%2BoFg1m2b0YDjy%2FG6vOBlfrKieePYneISfLURqTPXvvYcc7uieEXf1QuQneyTc03rt266z50wc9KwPP0XeNYHmuYMYe3Bdga%2FXFn53Fuo2E1JLz3d8VbCmN53A5HBrHXbr8LTEeWIkGgqz1eRdmwknQBOntfju6tfVxNtb12SLgSEqc2LmwZIbSljHT1Pk6vNIU395Po0UvB7fHasjwYhUfQ3fYDEBJaaLs4IOlMZhXGOZiXETOkPCL7b75ys40RjZBXDCbjS8U8TYKepb1W%2BDwChjaqB8pHvypmzvhKo5u50Pj%2BcpnYgz0JKvM7hHfeT8EbW2YIFh5xy6b5OP%2BjD4%2BpK9BjqkAUmRxtTOClinlUznRbPjK%2BmNnB51IGOTay9dpHdVqROw6WC0S1VtjpRvu9Rgut%2FVbxvtqPNzBn3n2UGa2jrgPE9sPnhs8ChfHf2qCKERPl5IpJB%2B%2BL06cpZA2WIoFV%2Bve0%2FUKgwKw9LDOimh8jVyC%2FPQYiWMykgLrnAVGLvHPYfUnhJpEh8AnNwsT6py85%2Fr3iTqyp2cGwOBxmQuWY4jOdRWkCdS&X-Amz-Signature=681a59640c83b5937c533b6f06091cb1b6de9c53ff76f6dcc0bf74b96f3643b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAJD7S3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCw8vbc%2B1t0dWAan38bsgARV1RU3DgkwkLjVqyvjl7nNQIhAILwAseXiiZvIaVFcxlxVK6%2F8HgliUr9clKczSGY9cYsKv8DCF8QABoMNjM3NDIzMTgzODA1Igzp67ywzIjp%2F%2FJkrokq3AOJ%2BixsVGj4Tk6FSpAecq2%2Bd%2Be2nHp1BjPiMj28dVcz%2FX359beKwHzoCksawlpc%2BLv1JEE7rDiHYq%2BnF58fZDtgxxSYi9IeduciTiaiDGW%2Fld9wtKqRvgkM6jZSIoknrSmkDE%2FhspE86w88kGwbXNyV7riUR%2F5NvIn5b7iyX%2BUOzSI5rXvr8ZwTV6qRYSDD30dtvPJ7yEvNWlS0eX9a1UeYmpAUhlfi5haxp9reoKm%2Fev74Vbgkyblfddl8Zr9c54pm0QAXqgTw57KI0qYSXqfMQDKoDBsWej6Vbz%2BEvYM%2BoFg1m2b0YDjy%2FG6vOBlfrKieePYneISfLURqTPXvvYcc7uieEXf1QuQneyTc03rt266z50wc9KwPP0XeNYHmuYMYe3Bdga%2FXFn53Fuo2E1JLz3d8VbCmN53A5HBrHXbr8LTEeWIkGgqz1eRdmwknQBOntfju6tfVxNtb12SLgSEqc2LmwZIbSljHT1Pk6vNIU395Po0UvB7fHasjwYhUfQ3fYDEBJaaLs4IOlMZhXGOZiXETOkPCL7b75ys40RjZBXDCbjS8U8TYKepb1W%2BDwChjaqB8pHvypmzvhKo5u50Pj%2BcpnYgz0JKvM7hHfeT8EbW2YIFh5xy6b5OP%2BjD4%2BpK9BjqkAUmRxtTOClinlUznRbPjK%2BmNnB51IGOTay9dpHdVqROw6WC0S1VtjpRvu9Rgut%2FVbxvtqPNzBn3n2UGa2jrgPE9sPnhs8ChfHf2qCKERPl5IpJB%2B%2BL06cpZA2WIoFV%2Bve0%2FUKgwKw9LDOimh8jVyC%2FPQYiWMykgLrnAVGLvHPYfUnhJpEh8AnNwsT6py85%2Fr3iTqyp2cGwOBxmQuWY4jOdRWkCdS&X-Amz-Signature=f348eb036541e0d457430d9ff7d24845909bffde7294ef4e0f370e777f1ef918&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAJD7S3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCw8vbc%2B1t0dWAan38bsgARV1RU3DgkwkLjVqyvjl7nNQIhAILwAseXiiZvIaVFcxlxVK6%2F8HgliUr9clKczSGY9cYsKv8DCF8QABoMNjM3NDIzMTgzODA1Igzp67ywzIjp%2F%2FJkrokq3AOJ%2BixsVGj4Tk6FSpAecq2%2Bd%2Be2nHp1BjPiMj28dVcz%2FX359beKwHzoCksawlpc%2BLv1JEE7rDiHYq%2BnF58fZDtgxxSYi9IeduciTiaiDGW%2Fld9wtKqRvgkM6jZSIoknrSmkDE%2FhspE86w88kGwbXNyV7riUR%2F5NvIn5b7iyX%2BUOzSI5rXvr8ZwTV6qRYSDD30dtvPJ7yEvNWlS0eX9a1UeYmpAUhlfi5haxp9reoKm%2Fev74Vbgkyblfddl8Zr9c54pm0QAXqgTw57KI0qYSXqfMQDKoDBsWej6Vbz%2BEvYM%2BoFg1m2b0YDjy%2FG6vOBlfrKieePYneISfLURqTPXvvYcc7uieEXf1QuQneyTc03rt266z50wc9KwPP0XeNYHmuYMYe3Bdga%2FXFn53Fuo2E1JLz3d8VbCmN53A5HBrHXbr8LTEeWIkGgqz1eRdmwknQBOntfju6tfVxNtb12SLgSEqc2LmwZIbSljHT1Pk6vNIU395Po0UvB7fHasjwYhUfQ3fYDEBJaaLs4IOlMZhXGOZiXETOkPCL7b75ys40RjZBXDCbjS8U8TYKepb1W%2BDwChjaqB8pHvypmzvhKo5u50Pj%2BcpnYgz0JKvM7hHfeT8EbW2YIFh5xy6b5OP%2BjD4%2BpK9BjqkAUmRxtTOClinlUznRbPjK%2BmNnB51IGOTay9dpHdVqROw6WC0S1VtjpRvu9Rgut%2FVbxvtqPNzBn3n2UGa2jrgPE9sPnhs8ChfHf2qCKERPl5IpJB%2B%2BL06cpZA2WIoFV%2Bve0%2FUKgwKw9LDOimh8jVyC%2FPQYiWMykgLrnAVGLvHPYfUnhJpEh8AnNwsT6py85%2Fr3iTqyp2cGwOBxmQuWY4jOdRWkCdS&X-Amz-Signature=ddeefb23b76fe2969a076a857ebd624226957c0586e2747c2dada5e6a20d42ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAJD7S3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCw8vbc%2B1t0dWAan38bsgARV1RU3DgkwkLjVqyvjl7nNQIhAILwAseXiiZvIaVFcxlxVK6%2F8HgliUr9clKczSGY9cYsKv8DCF8QABoMNjM3NDIzMTgzODA1Igzp67ywzIjp%2F%2FJkrokq3AOJ%2BixsVGj4Tk6FSpAecq2%2Bd%2Be2nHp1BjPiMj28dVcz%2FX359beKwHzoCksawlpc%2BLv1JEE7rDiHYq%2BnF58fZDtgxxSYi9IeduciTiaiDGW%2Fld9wtKqRvgkM6jZSIoknrSmkDE%2FhspE86w88kGwbXNyV7riUR%2F5NvIn5b7iyX%2BUOzSI5rXvr8ZwTV6qRYSDD30dtvPJ7yEvNWlS0eX9a1UeYmpAUhlfi5haxp9reoKm%2Fev74Vbgkyblfddl8Zr9c54pm0QAXqgTw57KI0qYSXqfMQDKoDBsWej6Vbz%2BEvYM%2BoFg1m2b0YDjy%2FG6vOBlfrKieePYneISfLURqTPXvvYcc7uieEXf1QuQneyTc03rt266z50wc9KwPP0XeNYHmuYMYe3Bdga%2FXFn53Fuo2E1JLz3d8VbCmN53A5HBrHXbr8LTEeWIkGgqz1eRdmwknQBOntfju6tfVxNtb12SLgSEqc2LmwZIbSljHT1Pk6vNIU395Po0UvB7fHasjwYhUfQ3fYDEBJaaLs4IOlMZhXGOZiXETOkPCL7b75ys40RjZBXDCbjS8U8TYKepb1W%2BDwChjaqB8pHvypmzvhKo5u50Pj%2BcpnYgz0JKvM7hHfeT8EbW2YIFh5xy6b5OP%2BjD4%2BpK9BjqkAUmRxtTOClinlUznRbPjK%2BmNnB51IGOTay9dpHdVqROw6WC0S1VtjpRvu9Rgut%2FVbxvtqPNzBn3n2UGa2jrgPE9sPnhs8ChfHf2qCKERPl5IpJB%2B%2BL06cpZA2WIoFV%2Bve0%2FUKgwKw9LDOimh8jVyC%2FPQYiWMykgLrnAVGLvHPYfUnhJpEh8AnNwsT6py85%2Fr3iTqyp2cGwOBxmQuWY4jOdRWkCdS&X-Amz-Signature=966d0a82735999be2b738eacd072e596d5864fe4b0dfc5b0acbdc0665e9f31a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWAJD7S3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCw8vbc%2B1t0dWAan38bsgARV1RU3DgkwkLjVqyvjl7nNQIhAILwAseXiiZvIaVFcxlxVK6%2F8HgliUr9clKczSGY9cYsKv8DCF8QABoMNjM3NDIzMTgzODA1Igzp67ywzIjp%2F%2FJkrokq3AOJ%2BixsVGj4Tk6FSpAecq2%2Bd%2Be2nHp1BjPiMj28dVcz%2FX359beKwHzoCksawlpc%2BLv1JEE7rDiHYq%2BnF58fZDtgxxSYi9IeduciTiaiDGW%2Fld9wtKqRvgkM6jZSIoknrSmkDE%2FhspE86w88kGwbXNyV7riUR%2F5NvIn5b7iyX%2BUOzSI5rXvr8ZwTV6qRYSDD30dtvPJ7yEvNWlS0eX9a1UeYmpAUhlfi5haxp9reoKm%2Fev74Vbgkyblfddl8Zr9c54pm0QAXqgTw57KI0qYSXqfMQDKoDBsWej6Vbz%2BEvYM%2BoFg1m2b0YDjy%2FG6vOBlfrKieePYneISfLURqTPXvvYcc7uieEXf1QuQneyTc03rt266z50wc9KwPP0XeNYHmuYMYe3Bdga%2FXFn53Fuo2E1JLz3d8VbCmN53A5HBrHXbr8LTEeWIkGgqz1eRdmwknQBOntfju6tfVxNtb12SLgSEqc2LmwZIbSljHT1Pk6vNIU395Po0UvB7fHasjwYhUfQ3fYDEBJaaLs4IOlMZhXGOZiXETOkPCL7b75ys40RjZBXDCbjS8U8TYKepb1W%2BDwChjaqB8pHvypmzvhKo5u50Pj%2BcpnYgz0JKvM7hHfeT8EbW2YIFh5xy6b5OP%2BjD4%2BpK9BjqkAUmRxtTOClinlUznRbPjK%2BmNnB51IGOTay9dpHdVqROw6WC0S1VtjpRvu9Rgut%2FVbxvtqPNzBn3n2UGa2jrgPE9sPnhs8ChfHf2qCKERPl5IpJB%2B%2BL06cpZA2WIoFV%2Bve0%2FUKgwKw9LDOimh8jVyC%2FPQYiWMykgLrnAVGLvHPYfUnhJpEh8AnNwsT6py85%2Fr3iTqyp2cGwOBxmQuWY4jOdRWkCdS&X-Amz-Signature=7ad73199eff02c617f134a9f860749532573ec0347a9a49c63df87498a1b56e8&X-Amz-SignedHeaders=host&x-id=GetObject)
