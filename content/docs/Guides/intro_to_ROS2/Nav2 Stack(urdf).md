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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JOQCEX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDVPDb7v8s4QHPZMlr%2F9Ghobl1vBThUPnEoE0sUg90yHwIgNIT0%2B%2BU3c8A0uIlNhJyh7m6p3bHGOggmsAI8TK6eFwsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHziCvU2jcWR4jU9IircAy7IKxsMYdAcAUWqOZ4v%2BHgi0uHq5Ap34wIpG3WaJG9Dq5aEYsxq59dNx576HPtHzOR2lz0VcNmsakIPnlPbS4dh9FCCrTBRDnojw5sEsF3rXPVSpDToAweq9en9rfXKl8goguoNAjhVVbcx1UEbULaVql7ybhAX5uQI9DDPHTiLmS%2FbkzTtGWYfjk4XLcUAx3O8qvfzcaQA1Si2UCoX5LcW0qh%2BYjkINZhJtNIpH7494a4IdNkj2CJgq%2FK50guPfN35afiO3TASJYK8pFBHprcSaKIW0YSMzUhVY2UggbkVZHq%2Be3Cdvkq0EcWa26OeYDd%2F%2BHqG4De0R7bd9sXdaQya2VwcVC%2FV6s1un%2BWMwaodI1688hw7sGvfzgno%2F7Az4uoB3EZuCIl7qIeitV8h8EG1zdS1wbgQ%2BIFcD3g3p%2BdQhVJdylRbiPyV%2BFf5n1nAlh2cJ9IlDvpMS23UPdLD69OOvWEF1Sl8AgkrIzVkE8o%2Ff01Lf9uEughjf8GFZWGSNbwTKs5wFdRkh2jiz3Zm11xx4ZsSnMbYlHfd9XPukQy0MlTO4XtEp1kYcqAbrhTV4kqH0WzyCz1z217zSWGCa6UBMW7JNZeMNXEknkls7lI9ik36g9QiJCGozNyKMPfZy8AGOqUB7FGHdmPwRj32Q2JjbHHBq8mOtSwjCI1LA8s9T9fVVp8K%2BvJidLD4%2BKj2G2g78viwAobs4sZWd%2BPrS2eBHdbDV7SrZIoHgNyeJEA5TtkZq49RRJ8YS4Fnq24QPJJ6UUXaTqHOMeXPyuqhdhi6oElZpocKW7tYy4MqFi5WlzzQdejU9quzAq1pa6fZOvVklOuN7jPzey%2BgzTM4Wi6WwDs26p2XQWAc&X-Amz-Signature=4e9f787fa73981883b602b9f9a872285f6dec5ca1688332ab7f1095b9cae15ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JOQCEX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDVPDb7v8s4QHPZMlr%2F9Ghobl1vBThUPnEoE0sUg90yHwIgNIT0%2B%2BU3c8A0uIlNhJyh7m6p3bHGOggmsAI8TK6eFwsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHziCvU2jcWR4jU9IircAy7IKxsMYdAcAUWqOZ4v%2BHgi0uHq5Ap34wIpG3WaJG9Dq5aEYsxq59dNx576HPtHzOR2lz0VcNmsakIPnlPbS4dh9FCCrTBRDnojw5sEsF3rXPVSpDToAweq9en9rfXKl8goguoNAjhVVbcx1UEbULaVql7ybhAX5uQI9DDPHTiLmS%2FbkzTtGWYfjk4XLcUAx3O8qvfzcaQA1Si2UCoX5LcW0qh%2BYjkINZhJtNIpH7494a4IdNkj2CJgq%2FK50guPfN35afiO3TASJYK8pFBHprcSaKIW0YSMzUhVY2UggbkVZHq%2Be3Cdvkq0EcWa26OeYDd%2F%2BHqG4De0R7bd9sXdaQya2VwcVC%2FV6s1un%2BWMwaodI1688hw7sGvfzgno%2F7Az4uoB3EZuCIl7qIeitV8h8EG1zdS1wbgQ%2BIFcD3g3p%2BdQhVJdylRbiPyV%2BFf5n1nAlh2cJ9IlDvpMS23UPdLD69OOvWEF1Sl8AgkrIzVkE8o%2Ff01Lf9uEughjf8GFZWGSNbwTKs5wFdRkh2jiz3Zm11xx4ZsSnMbYlHfd9XPukQy0MlTO4XtEp1kYcqAbrhTV4kqH0WzyCz1z217zSWGCa6UBMW7JNZeMNXEknkls7lI9ik36g9QiJCGozNyKMPfZy8AGOqUB7FGHdmPwRj32Q2JjbHHBq8mOtSwjCI1LA8s9T9fVVp8K%2BvJidLD4%2BKj2G2g78viwAobs4sZWd%2BPrS2eBHdbDV7SrZIoHgNyeJEA5TtkZq49RRJ8YS4Fnq24QPJJ6UUXaTqHOMeXPyuqhdhi6oElZpocKW7tYy4MqFi5WlzzQdejU9quzAq1pa6fZOvVklOuN7jPzey%2BgzTM4Wi6WwDs26p2XQWAc&X-Amz-Signature=58eb8d47cffa1026c957e42384720b9e5e58684f1f2280ce792cda2f0e512d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JOQCEX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDVPDb7v8s4QHPZMlr%2F9Ghobl1vBThUPnEoE0sUg90yHwIgNIT0%2B%2BU3c8A0uIlNhJyh7m6p3bHGOggmsAI8TK6eFwsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHziCvU2jcWR4jU9IircAy7IKxsMYdAcAUWqOZ4v%2BHgi0uHq5Ap34wIpG3WaJG9Dq5aEYsxq59dNx576HPtHzOR2lz0VcNmsakIPnlPbS4dh9FCCrTBRDnojw5sEsF3rXPVSpDToAweq9en9rfXKl8goguoNAjhVVbcx1UEbULaVql7ybhAX5uQI9DDPHTiLmS%2FbkzTtGWYfjk4XLcUAx3O8qvfzcaQA1Si2UCoX5LcW0qh%2BYjkINZhJtNIpH7494a4IdNkj2CJgq%2FK50guPfN35afiO3TASJYK8pFBHprcSaKIW0YSMzUhVY2UggbkVZHq%2Be3Cdvkq0EcWa26OeYDd%2F%2BHqG4De0R7bd9sXdaQya2VwcVC%2FV6s1un%2BWMwaodI1688hw7sGvfzgno%2F7Az4uoB3EZuCIl7qIeitV8h8EG1zdS1wbgQ%2BIFcD3g3p%2BdQhVJdylRbiPyV%2BFf5n1nAlh2cJ9IlDvpMS23UPdLD69OOvWEF1Sl8AgkrIzVkE8o%2Ff01Lf9uEughjf8GFZWGSNbwTKs5wFdRkh2jiz3Zm11xx4ZsSnMbYlHfd9XPukQy0MlTO4XtEp1kYcqAbrhTV4kqH0WzyCz1z217zSWGCa6UBMW7JNZeMNXEknkls7lI9ik36g9QiJCGozNyKMPfZy8AGOqUB7FGHdmPwRj32Q2JjbHHBq8mOtSwjCI1LA8s9T9fVVp8K%2BvJidLD4%2BKj2G2g78viwAobs4sZWd%2BPrS2eBHdbDV7SrZIoHgNyeJEA5TtkZq49RRJ8YS4Fnq24QPJJ6UUXaTqHOMeXPyuqhdhi6oElZpocKW7tYy4MqFi5WlzzQdejU9quzAq1pa6fZOvVklOuN7jPzey%2BgzTM4Wi6WwDs26p2XQWAc&X-Amz-Signature=7f4471d9f9f7c89c6e66dadb252b5c9f54524a759e5df76c45d323fb3cd7b15d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JOQCEX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDVPDb7v8s4QHPZMlr%2F9Ghobl1vBThUPnEoE0sUg90yHwIgNIT0%2B%2BU3c8A0uIlNhJyh7m6p3bHGOggmsAI8TK6eFwsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHziCvU2jcWR4jU9IircAy7IKxsMYdAcAUWqOZ4v%2BHgi0uHq5Ap34wIpG3WaJG9Dq5aEYsxq59dNx576HPtHzOR2lz0VcNmsakIPnlPbS4dh9FCCrTBRDnojw5sEsF3rXPVSpDToAweq9en9rfXKl8goguoNAjhVVbcx1UEbULaVql7ybhAX5uQI9DDPHTiLmS%2FbkzTtGWYfjk4XLcUAx3O8qvfzcaQA1Si2UCoX5LcW0qh%2BYjkINZhJtNIpH7494a4IdNkj2CJgq%2FK50guPfN35afiO3TASJYK8pFBHprcSaKIW0YSMzUhVY2UggbkVZHq%2Be3Cdvkq0EcWa26OeYDd%2F%2BHqG4De0R7bd9sXdaQya2VwcVC%2FV6s1un%2BWMwaodI1688hw7sGvfzgno%2F7Az4uoB3EZuCIl7qIeitV8h8EG1zdS1wbgQ%2BIFcD3g3p%2BdQhVJdylRbiPyV%2BFf5n1nAlh2cJ9IlDvpMS23UPdLD69OOvWEF1Sl8AgkrIzVkE8o%2Ff01Lf9uEughjf8GFZWGSNbwTKs5wFdRkh2jiz3Zm11xx4ZsSnMbYlHfd9XPukQy0MlTO4XtEp1kYcqAbrhTV4kqH0WzyCz1z217zSWGCa6UBMW7JNZeMNXEknkls7lI9ik36g9QiJCGozNyKMPfZy8AGOqUB7FGHdmPwRj32Q2JjbHHBq8mOtSwjCI1LA8s9T9fVVp8K%2BvJidLD4%2BKj2G2g78viwAobs4sZWd%2BPrS2eBHdbDV7SrZIoHgNyeJEA5TtkZq49RRJ8YS4Fnq24QPJJ6UUXaTqHOMeXPyuqhdhi6oElZpocKW7tYy4MqFi5WlzzQdejU9quzAq1pa6fZOvVklOuN7jPzey%2BgzTM4Wi6WwDs26p2XQWAc&X-Amz-Signature=93c6d297726fb3e368026e588753387a71b58cd899646723164ead9aa434ed59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JOQCEX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDVPDb7v8s4QHPZMlr%2F9Ghobl1vBThUPnEoE0sUg90yHwIgNIT0%2B%2BU3c8A0uIlNhJyh7m6p3bHGOggmsAI8TK6eFwsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHziCvU2jcWR4jU9IircAy7IKxsMYdAcAUWqOZ4v%2BHgi0uHq5Ap34wIpG3WaJG9Dq5aEYsxq59dNx576HPtHzOR2lz0VcNmsakIPnlPbS4dh9FCCrTBRDnojw5sEsF3rXPVSpDToAweq9en9rfXKl8goguoNAjhVVbcx1UEbULaVql7ybhAX5uQI9DDPHTiLmS%2FbkzTtGWYfjk4XLcUAx3O8qvfzcaQA1Si2UCoX5LcW0qh%2BYjkINZhJtNIpH7494a4IdNkj2CJgq%2FK50guPfN35afiO3TASJYK8pFBHprcSaKIW0YSMzUhVY2UggbkVZHq%2Be3Cdvkq0EcWa26OeYDd%2F%2BHqG4De0R7bd9sXdaQya2VwcVC%2FV6s1un%2BWMwaodI1688hw7sGvfzgno%2F7Az4uoB3EZuCIl7qIeitV8h8EG1zdS1wbgQ%2BIFcD3g3p%2BdQhVJdylRbiPyV%2BFf5n1nAlh2cJ9IlDvpMS23UPdLD69OOvWEF1Sl8AgkrIzVkE8o%2Ff01Lf9uEughjf8GFZWGSNbwTKs5wFdRkh2jiz3Zm11xx4ZsSnMbYlHfd9XPukQy0MlTO4XtEp1kYcqAbrhTV4kqH0WzyCz1z217zSWGCa6UBMW7JNZeMNXEknkls7lI9ik36g9QiJCGozNyKMPfZy8AGOqUB7FGHdmPwRj32Q2JjbHHBq8mOtSwjCI1LA8s9T9fVVp8K%2BvJidLD4%2BKj2G2g78viwAobs4sZWd%2BPrS2eBHdbDV7SrZIoHgNyeJEA5TtkZq49RRJ8YS4Fnq24QPJJ6UUXaTqHOMeXPyuqhdhi6oElZpocKW7tYy4MqFi5WlzzQdejU9quzAq1pa6fZOvVklOuN7jPzey%2BgzTM4Wi6WwDs26p2XQWAc&X-Amz-Signature=72d13bd7fb7ec7ebc373f8c4a7cba933ec0d919cd60d484b02db9d5c90147632&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JOQCEX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDVPDb7v8s4QHPZMlr%2F9Ghobl1vBThUPnEoE0sUg90yHwIgNIT0%2B%2BU3c8A0uIlNhJyh7m6p3bHGOggmsAI8TK6eFwsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHziCvU2jcWR4jU9IircAy7IKxsMYdAcAUWqOZ4v%2BHgi0uHq5Ap34wIpG3WaJG9Dq5aEYsxq59dNx576HPtHzOR2lz0VcNmsakIPnlPbS4dh9FCCrTBRDnojw5sEsF3rXPVSpDToAweq9en9rfXKl8goguoNAjhVVbcx1UEbULaVql7ybhAX5uQI9DDPHTiLmS%2FbkzTtGWYfjk4XLcUAx3O8qvfzcaQA1Si2UCoX5LcW0qh%2BYjkINZhJtNIpH7494a4IdNkj2CJgq%2FK50guPfN35afiO3TASJYK8pFBHprcSaKIW0YSMzUhVY2UggbkVZHq%2Be3Cdvkq0EcWa26OeYDd%2F%2BHqG4De0R7bd9sXdaQya2VwcVC%2FV6s1un%2BWMwaodI1688hw7sGvfzgno%2F7Az4uoB3EZuCIl7qIeitV8h8EG1zdS1wbgQ%2BIFcD3g3p%2BdQhVJdylRbiPyV%2BFf5n1nAlh2cJ9IlDvpMS23UPdLD69OOvWEF1Sl8AgkrIzVkE8o%2Ff01Lf9uEughjf8GFZWGSNbwTKs5wFdRkh2jiz3Zm11xx4ZsSnMbYlHfd9XPukQy0MlTO4XtEp1kYcqAbrhTV4kqH0WzyCz1z217zSWGCa6UBMW7JNZeMNXEknkls7lI9ik36g9QiJCGozNyKMPfZy8AGOqUB7FGHdmPwRj32Q2JjbHHBq8mOtSwjCI1LA8s9T9fVVp8K%2BvJidLD4%2BKj2G2g78viwAobs4sZWd%2BPrS2eBHdbDV7SrZIoHgNyeJEA5TtkZq49RRJ8YS4Fnq24QPJJ6UUXaTqHOMeXPyuqhdhi6oElZpocKW7tYy4MqFi5WlzzQdejU9quzAq1pa6fZOvVklOuN7jPzey%2BgzTM4Wi6WwDs26p2XQWAc&X-Amz-Signature=cc297c1fbb298b2a7444ea428d48557fa77542352b7af9d307be14101d0de82e&X-Amz-SignedHeaders=host&x-id=GetObject)
