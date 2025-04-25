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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z36XLN5S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsyyzTUWHXjVweFjlyxyWEBefvp6U6nIEIiSeXQKjQHwIhAIUWy6gXN6voWIIrpugbpdgQX5DVUrcUyOlhqjM%2Bd5gWKv8DCC4QABoMNjM3NDIzMTgzODA1IgwbbZU%2FU0LfZwRgUdYq3AP8o6XmmRiZyVSnnfvgnzCXwEwM9mvoLQAWZkmxr%2FmGqtUnvqAC2lFzwXJ42lJQh1ZcFQ95c6tvThDyreS4UAWABhycQCeQy9oLp8XmulO0ZROzVR3u0YMDDqbaz2ck7ElIQp%2B6sKYzl2er3Z7WDvoX6spmyoYFLv7mR149FSJTVe1uqet8TNNbkEFIlY%2FKrS6yPMXDbeh%2FFZdKZH7dwsGDI8Np2T8YyRHQMQQbt5cDS%2Fq9cYSW3DX6PlGEpS2%2FDMKHfDNyw4YLE1Ca%2B%2BWPnPa3V4tDubMqve6x3e%2BpdnFvrhV8BNOBWJcvEBP34tkJsQP6zI3zJct%2FowmZYkm5%2FmE63XqRSjjhgN9f3ltyDQSrRH3LCtQR13HfSgiVtMNeB5ViHF6jMlmyeBEEYiZNmPUN4rjURP6PC%2BE8O%2Bm919RehU5Nfj5JAjDu3acSgbDKMGNS6QZ8dizvtzOMaq0e%2FA8fyYGDzlwFGgtCka6tLi%2FQEIyfkMq2dwi2LViThtQGPzLnmDpQAzSsmYPTL3Zqj%2FJ9Y6R0lSxT0%2F2HhfWprztXjl7x7Olj2B4bS5g0h47o9S8NhGhwn7aHwLfafpAh21043WOywxeZsWgrmKEBcbXrO0bEfST1HsKjF%2B3GgjCAma7ABjqkAQJ259AIdJGGNdhZMs3MUGYa%2BPRdbYgptxV5NDSg%2BAWyqKGM16yubr%2FB3QJoh%2BP4L72v0dHElco5TSYE4P33QoCRszYu25XrPPZE%2BA8%2BjerMVCrZZSJZF3elBP2y6VPbJ%2BlD4%2BxvUkH4D%2Fgi%2FVtivBmp9xeiDtqq5cpVYB3IjelU5OtJnAXrucD%2B7JavdK937f4tbkx7MO8s27rHuGylZZb%2FhHDz&X-Amz-Signature=1eed9f4e08d0f7bb7dbbc62eaf124148b783337b213ea583eda46cbd4fe1f1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z36XLN5S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsyyzTUWHXjVweFjlyxyWEBefvp6U6nIEIiSeXQKjQHwIhAIUWy6gXN6voWIIrpugbpdgQX5DVUrcUyOlhqjM%2Bd5gWKv8DCC4QABoMNjM3NDIzMTgzODA1IgwbbZU%2FU0LfZwRgUdYq3AP8o6XmmRiZyVSnnfvgnzCXwEwM9mvoLQAWZkmxr%2FmGqtUnvqAC2lFzwXJ42lJQh1ZcFQ95c6tvThDyreS4UAWABhycQCeQy9oLp8XmulO0ZROzVR3u0YMDDqbaz2ck7ElIQp%2B6sKYzl2er3Z7WDvoX6spmyoYFLv7mR149FSJTVe1uqet8TNNbkEFIlY%2FKrS6yPMXDbeh%2FFZdKZH7dwsGDI8Np2T8YyRHQMQQbt5cDS%2Fq9cYSW3DX6PlGEpS2%2FDMKHfDNyw4YLE1Ca%2B%2BWPnPa3V4tDubMqve6x3e%2BpdnFvrhV8BNOBWJcvEBP34tkJsQP6zI3zJct%2FowmZYkm5%2FmE63XqRSjjhgN9f3ltyDQSrRH3LCtQR13HfSgiVtMNeB5ViHF6jMlmyeBEEYiZNmPUN4rjURP6PC%2BE8O%2Bm919RehU5Nfj5JAjDu3acSgbDKMGNS6QZ8dizvtzOMaq0e%2FA8fyYGDzlwFGgtCka6tLi%2FQEIyfkMq2dwi2LViThtQGPzLnmDpQAzSsmYPTL3Zqj%2FJ9Y6R0lSxT0%2F2HhfWprztXjl7x7Olj2B4bS5g0h47o9S8NhGhwn7aHwLfafpAh21043WOywxeZsWgrmKEBcbXrO0bEfST1HsKjF%2B3GgjCAma7ABjqkAQJ259AIdJGGNdhZMs3MUGYa%2BPRdbYgptxV5NDSg%2BAWyqKGM16yubr%2FB3QJoh%2BP4L72v0dHElco5TSYE4P33QoCRszYu25XrPPZE%2BA8%2BjerMVCrZZSJZF3elBP2y6VPbJ%2BlD4%2BxvUkH4D%2Fgi%2FVtivBmp9xeiDtqq5cpVYB3IjelU5OtJnAXrucD%2B7JavdK937f4tbkx7MO8s27rHuGylZZb%2FhHDz&X-Amz-Signature=39222c6ae7cdd9029f82049a354859a4ff5ac9876ae592cef03af52acc982997&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z36XLN5S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsyyzTUWHXjVweFjlyxyWEBefvp6U6nIEIiSeXQKjQHwIhAIUWy6gXN6voWIIrpugbpdgQX5DVUrcUyOlhqjM%2Bd5gWKv8DCC4QABoMNjM3NDIzMTgzODA1IgwbbZU%2FU0LfZwRgUdYq3AP8o6XmmRiZyVSnnfvgnzCXwEwM9mvoLQAWZkmxr%2FmGqtUnvqAC2lFzwXJ42lJQh1ZcFQ95c6tvThDyreS4UAWABhycQCeQy9oLp8XmulO0ZROzVR3u0YMDDqbaz2ck7ElIQp%2B6sKYzl2er3Z7WDvoX6spmyoYFLv7mR149FSJTVe1uqet8TNNbkEFIlY%2FKrS6yPMXDbeh%2FFZdKZH7dwsGDI8Np2T8YyRHQMQQbt5cDS%2Fq9cYSW3DX6PlGEpS2%2FDMKHfDNyw4YLE1Ca%2B%2BWPnPa3V4tDubMqve6x3e%2BpdnFvrhV8BNOBWJcvEBP34tkJsQP6zI3zJct%2FowmZYkm5%2FmE63XqRSjjhgN9f3ltyDQSrRH3LCtQR13HfSgiVtMNeB5ViHF6jMlmyeBEEYiZNmPUN4rjURP6PC%2BE8O%2Bm919RehU5Nfj5JAjDu3acSgbDKMGNS6QZ8dizvtzOMaq0e%2FA8fyYGDzlwFGgtCka6tLi%2FQEIyfkMq2dwi2LViThtQGPzLnmDpQAzSsmYPTL3Zqj%2FJ9Y6R0lSxT0%2F2HhfWprztXjl7x7Olj2B4bS5g0h47o9S8NhGhwn7aHwLfafpAh21043WOywxeZsWgrmKEBcbXrO0bEfST1HsKjF%2B3GgjCAma7ABjqkAQJ259AIdJGGNdhZMs3MUGYa%2BPRdbYgptxV5NDSg%2BAWyqKGM16yubr%2FB3QJoh%2BP4L72v0dHElco5TSYE4P33QoCRszYu25XrPPZE%2BA8%2BjerMVCrZZSJZF3elBP2y6VPbJ%2BlD4%2BxvUkH4D%2Fgi%2FVtivBmp9xeiDtqq5cpVYB3IjelU5OtJnAXrucD%2B7JavdK937f4tbkx7MO8s27rHuGylZZb%2FhHDz&X-Amz-Signature=09a26a7399630800261d200c1f5ee4cf575ebd01e149227fd00b3eefa54d3d86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z36XLN5S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsyyzTUWHXjVweFjlyxyWEBefvp6U6nIEIiSeXQKjQHwIhAIUWy6gXN6voWIIrpugbpdgQX5DVUrcUyOlhqjM%2Bd5gWKv8DCC4QABoMNjM3NDIzMTgzODA1IgwbbZU%2FU0LfZwRgUdYq3AP8o6XmmRiZyVSnnfvgnzCXwEwM9mvoLQAWZkmxr%2FmGqtUnvqAC2lFzwXJ42lJQh1ZcFQ95c6tvThDyreS4UAWABhycQCeQy9oLp8XmulO0ZROzVR3u0YMDDqbaz2ck7ElIQp%2B6sKYzl2er3Z7WDvoX6spmyoYFLv7mR149FSJTVe1uqet8TNNbkEFIlY%2FKrS6yPMXDbeh%2FFZdKZH7dwsGDI8Np2T8YyRHQMQQbt5cDS%2Fq9cYSW3DX6PlGEpS2%2FDMKHfDNyw4YLE1Ca%2B%2BWPnPa3V4tDubMqve6x3e%2BpdnFvrhV8BNOBWJcvEBP34tkJsQP6zI3zJct%2FowmZYkm5%2FmE63XqRSjjhgN9f3ltyDQSrRH3LCtQR13HfSgiVtMNeB5ViHF6jMlmyeBEEYiZNmPUN4rjURP6PC%2BE8O%2Bm919RehU5Nfj5JAjDu3acSgbDKMGNS6QZ8dizvtzOMaq0e%2FA8fyYGDzlwFGgtCka6tLi%2FQEIyfkMq2dwi2LViThtQGPzLnmDpQAzSsmYPTL3Zqj%2FJ9Y6R0lSxT0%2F2HhfWprztXjl7x7Olj2B4bS5g0h47o9S8NhGhwn7aHwLfafpAh21043WOywxeZsWgrmKEBcbXrO0bEfST1HsKjF%2B3GgjCAma7ABjqkAQJ259AIdJGGNdhZMs3MUGYa%2BPRdbYgptxV5NDSg%2BAWyqKGM16yubr%2FB3QJoh%2BP4L72v0dHElco5TSYE4P33QoCRszYu25XrPPZE%2BA8%2BjerMVCrZZSJZF3elBP2y6VPbJ%2BlD4%2BxvUkH4D%2Fgi%2FVtivBmp9xeiDtqq5cpVYB3IjelU5OtJnAXrucD%2B7JavdK937f4tbkx7MO8s27rHuGylZZb%2FhHDz&X-Amz-Signature=51eedde36719723c455f1428b8023394bbea441674ed253c5f363b52b0953719&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z36XLN5S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsyyzTUWHXjVweFjlyxyWEBefvp6U6nIEIiSeXQKjQHwIhAIUWy6gXN6voWIIrpugbpdgQX5DVUrcUyOlhqjM%2Bd5gWKv8DCC4QABoMNjM3NDIzMTgzODA1IgwbbZU%2FU0LfZwRgUdYq3AP8o6XmmRiZyVSnnfvgnzCXwEwM9mvoLQAWZkmxr%2FmGqtUnvqAC2lFzwXJ42lJQh1ZcFQ95c6tvThDyreS4UAWABhycQCeQy9oLp8XmulO0ZROzVR3u0YMDDqbaz2ck7ElIQp%2B6sKYzl2er3Z7WDvoX6spmyoYFLv7mR149FSJTVe1uqet8TNNbkEFIlY%2FKrS6yPMXDbeh%2FFZdKZH7dwsGDI8Np2T8YyRHQMQQbt5cDS%2Fq9cYSW3DX6PlGEpS2%2FDMKHfDNyw4YLE1Ca%2B%2BWPnPa3V4tDubMqve6x3e%2BpdnFvrhV8BNOBWJcvEBP34tkJsQP6zI3zJct%2FowmZYkm5%2FmE63XqRSjjhgN9f3ltyDQSrRH3LCtQR13HfSgiVtMNeB5ViHF6jMlmyeBEEYiZNmPUN4rjURP6PC%2BE8O%2Bm919RehU5Nfj5JAjDu3acSgbDKMGNS6QZ8dizvtzOMaq0e%2FA8fyYGDzlwFGgtCka6tLi%2FQEIyfkMq2dwi2LViThtQGPzLnmDpQAzSsmYPTL3Zqj%2FJ9Y6R0lSxT0%2F2HhfWprztXjl7x7Olj2B4bS5g0h47o9S8NhGhwn7aHwLfafpAh21043WOywxeZsWgrmKEBcbXrO0bEfST1HsKjF%2B3GgjCAma7ABjqkAQJ259AIdJGGNdhZMs3MUGYa%2BPRdbYgptxV5NDSg%2BAWyqKGM16yubr%2FB3QJoh%2BP4L72v0dHElco5TSYE4P33QoCRszYu25XrPPZE%2BA8%2BjerMVCrZZSJZF3elBP2y6VPbJ%2BlD4%2BxvUkH4D%2Fgi%2FVtivBmp9xeiDtqq5cpVYB3IjelU5OtJnAXrucD%2B7JavdK937f4tbkx7MO8s27rHuGylZZb%2FhHDz&X-Amz-Signature=7234f2e01f169962faed8c593815d4a69a0cfc0b2fd81958e11c65fdc1a2c0d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z36XLN5S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsyyzTUWHXjVweFjlyxyWEBefvp6U6nIEIiSeXQKjQHwIhAIUWy6gXN6voWIIrpugbpdgQX5DVUrcUyOlhqjM%2Bd5gWKv8DCC4QABoMNjM3NDIzMTgzODA1IgwbbZU%2FU0LfZwRgUdYq3AP8o6XmmRiZyVSnnfvgnzCXwEwM9mvoLQAWZkmxr%2FmGqtUnvqAC2lFzwXJ42lJQh1ZcFQ95c6tvThDyreS4UAWABhycQCeQy9oLp8XmulO0ZROzVR3u0YMDDqbaz2ck7ElIQp%2B6sKYzl2er3Z7WDvoX6spmyoYFLv7mR149FSJTVe1uqet8TNNbkEFIlY%2FKrS6yPMXDbeh%2FFZdKZH7dwsGDI8Np2T8YyRHQMQQbt5cDS%2Fq9cYSW3DX6PlGEpS2%2FDMKHfDNyw4YLE1Ca%2B%2BWPnPa3V4tDubMqve6x3e%2BpdnFvrhV8BNOBWJcvEBP34tkJsQP6zI3zJct%2FowmZYkm5%2FmE63XqRSjjhgN9f3ltyDQSrRH3LCtQR13HfSgiVtMNeB5ViHF6jMlmyeBEEYiZNmPUN4rjURP6PC%2BE8O%2Bm919RehU5Nfj5JAjDu3acSgbDKMGNS6QZ8dizvtzOMaq0e%2FA8fyYGDzlwFGgtCka6tLi%2FQEIyfkMq2dwi2LViThtQGPzLnmDpQAzSsmYPTL3Zqj%2FJ9Y6R0lSxT0%2F2HhfWprztXjl7x7Olj2B4bS5g0h47o9S8NhGhwn7aHwLfafpAh21043WOywxeZsWgrmKEBcbXrO0bEfST1HsKjF%2B3GgjCAma7ABjqkAQJ259AIdJGGNdhZMs3MUGYa%2BPRdbYgptxV5NDSg%2BAWyqKGM16yubr%2FB3QJoh%2BP4L72v0dHElco5TSYE4P33QoCRszYu25XrPPZE%2BA8%2BjerMVCrZZSJZF3elBP2y6VPbJ%2BlD4%2BxvUkH4D%2Fgi%2FVtivBmp9xeiDtqq5cpVYB3IjelU5OtJnAXrucD%2B7JavdK937f4tbkx7MO8s27rHuGylZZb%2FhHDz&X-Amz-Signature=e23a7f8bf65cd2e9e0987d489b90e212c9284679e61a7ca31ef2aff2840ece62&X-Amz-SignedHeaders=host&x-id=GetObject)
