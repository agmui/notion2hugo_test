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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDYOYG4X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqfrlgs6uTmpAciMFSlCN%2FzCYY4Tv7wFYQBc5jvXsZ3AiBYjSMmFZpBWfM2toWhfFNkMf7EMBGPCwHT3j7t9%2FyS5yqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9cMZDgor61CbdizyKtwDLW7i5F0at1IBIMbQMh0KSwvviriODtXkzf8xO%2B1TWuQlScQcLdt6CleBIvkrNWwSgMe7tybgh1pjLNmPmH%2ByMKwYEaOETShRsGfpw4qigkXITpeXNSajWzKl%2FTBzNTpk9zh%2BOSoXFMXg8wYVulSl8hcGzb1aUvvfhQkD%2FYU8sR7%2Bi8%2FHuR8x8HatFfkPBDYv5bEx1Tf2JZsKU085PQn2o6AXj34RPZxYf1aL4JKh7slM6agw6czI0lISOT6GogWs%2BcfPH5p8vFO4J%2B9Q5in71wuKNCFjk7ZCoxnLf2qSjNssjDT8IwVmj8HcSs5ohH2Use1sc8%2BueZLp5yaoaV8%2BumFZegid9dpOJ73AlIsOp3k4Jsh2SXirxF6MK2c%2FyJ1F7jiqa7GxLmRO6SFoCSOQHUARzaVtR0NZ7qpPQAuHk6ZxXuR%2Bc%2B534FWlU%2BOOAMPuv5hJMkZwbhReMM0duZeSTKTqsXVhQhMNPstQTSEToFKbMtbqJf0EY552SD8SXd12KKvMLYALuBsFpQXcqY3oNNlYjybqOkXxuXpptZXxDyFW34UelyCUbe3m5dryx%2BdzLiZIBKGBl7qVhCY6tqJr2KNpuAmy2Xe9tZR8UeydyobzxGWwQxbVt4CYZ2Awppi6vwY6pgF5uAt0NrHj76GycWCFbKiNMR2yT6yL0QFQo4TyOEPfijgFevK5V55bBacEf6%2FzrlrIPH0oo0rIM9YXWKHjvbA3iMeEZH5SoDaa3H%2BqLOos48cXwjgHkKF2mviRBMms21wioy7O2Pfjaa9j4bY1ZmUdnH9GcRpNsdySreD85DnwQS5e9QQ2wkDfd1tOVeVpshhGcIv0K0shR7Mc532Q69Ld19MfYdLZ&X-Amz-Signature=c316b2af9a995a693051a5bdf553663b190ffc8c8c4438cca21b1e32978a68ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDYOYG4X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqfrlgs6uTmpAciMFSlCN%2FzCYY4Tv7wFYQBc5jvXsZ3AiBYjSMmFZpBWfM2toWhfFNkMf7EMBGPCwHT3j7t9%2FyS5yqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9cMZDgor61CbdizyKtwDLW7i5F0at1IBIMbQMh0KSwvviriODtXkzf8xO%2B1TWuQlScQcLdt6CleBIvkrNWwSgMe7tybgh1pjLNmPmH%2ByMKwYEaOETShRsGfpw4qigkXITpeXNSajWzKl%2FTBzNTpk9zh%2BOSoXFMXg8wYVulSl8hcGzb1aUvvfhQkD%2FYU8sR7%2Bi8%2FHuR8x8HatFfkPBDYv5bEx1Tf2JZsKU085PQn2o6AXj34RPZxYf1aL4JKh7slM6agw6czI0lISOT6GogWs%2BcfPH5p8vFO4J%2B9Q5in71wuKNCFjk7ZCoxnLf2qSjNssjDT8IwVmj8HcSs5ohH2Use1sc8%2BueZLp5yaoaV8%2BumFZegid9dpOJ73AlIsOp3k4Jsh2SXirxF6MK2c%2FyJ1F7jiqa7GxLmRO6SFoCSOQHUARzaVtR0NZ7qpPQAuHk6ZxXuR%2Bc%2B534FWlU%2BOOAMPuv5hJMkZwbhReMM0duZeSTKTqsXVhQhMNPstQTSEToFKbMtbqJf0EY552SD8SXd12KKvMLYALuBsFpQXcqY3oNNlYjybqOkXxuXpptZXxDyFW34UelyCUbe3m5dryx%2BdzLiZIBKGBl7qVhCY6tqJr2KNpuAmy2Xe9tZR8UeydyobzxGWwQxbVt4CYZ2Awppi6vwY6pgF5uAt0NrHj76GycWCFbKiNMR2yT6yL0QFQo4TyOEPfijgFevK5V55bBacEf6%2FzrlrIPH0oo0rIM9YXWKHjvbA3iMeEZH5SoDaa3H%2BqLOos48cXwjgHkKF2mviRBMms21wioy7O2Pfjaa9j4bY1ZmUdnH9GcRpNsdySreD85DnwQS5e9QQ2wkDfd1tOVeVpshhGcIv0K0shR7Mc532Q69Ld19MfYdLZ&X-Amz-Signature=201b657bad2fef31787c419383bab7bc9cf17b8c6aba284d133fd10077ae344f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDYOYG4X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqfrlgs6uTmpAciMFSlCN%2FzCYY4Tv7wFYQBc5jvXsZ3AiBYjSMmFZpBWfM2toWhfFNkMf7EMBGPCwHT3j7t9%2FyS5yqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9cMZDgor61CbdizyKtwDLW7i5F0at1IBIMbQMh0KSwvviriODtXkzf8xO%2B1TWuQlScQcLdt6CleBIvkrNWwSgMe7tybgh1pjLNmPmH%2ByMKwYEaOETShRsGfpw4qigkXITpeXNSajWzKl%2FTBzNTpk9zh%2BOSoXFMXg8wYVulSl8hcGzb1aUvvfhQkD%2FYU8sR7%2Bi8%2FHuR8x8HatFfkPBDYv5bEx1Tf2JZsKU085PQn2o6AXj34RPZxYf1aL4JKh7slM6agw6czI0lISOT6GogWs%2BcfPH5p8vFO4J%2B9Q5in71wuKNCFjk7ZCoxnLf2qSjNssjDT8IwVmj8HcSs5ohH2Use1sc8%2BueZLp5yaoaV8%2BumFZegid9dpOJ73AlIsOp3k4Jsh2SXirxF6MK2c%2FyJ1F7jiqa7GxLmRO6SFoCSOQHUARzaVtR0NZ7qpPQAuHk6ZxXuR%2Bc%2B534FWlU%2BOOAMPuv5hJMkZwbhReMM0duZeSTKTqsXVhQhMNPstQTSEToFKbMtbqJf0EY552SD8SXd12KKvMLYALuBsFpQXcqY3oNNlYjybqOkXxuXpptZXxDyFW34UelyCUbe3m5dryx%2BdzLiZIBKGBl7qVhCY6tqJr2KNpuAmy2Xe9tZR8UeydyobzxGWwQxbVt4CYZ2Awppi6vwY6pgF5uAt0NrHj76GycWCFbKiNMR2yT6yL0QFQo4TyOEPfijgFevK5V55bBacEf6%2FzrlrIPH0oo0rIM9YXWKHjvbA3iMeEZH5SoDaa3H%2BqLOos48cXwjgHkKF2mviRBMms21wioy7O2Pfjaa9j4bY1ZmUdnH9GcRpNsdySreD85DnwQS5e9QQ2wkDfd1tOVeVpshhGcIv0K0shR7Mc532Q69Ld19MfYdLZ&X-Amz-Signature=198a260c0421caa0b9427e98a82e29ee3801fa7566f4b431baca691f8165e3a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDYOYG4X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqfrlgs6uTmpAciMFSlCN%2FzCYY4Tv7wFYQBc5jvXsZ3AiBYjSMmFZpBWfM2toWhfFNkMf7EMBGPCwHT3j7t9%2FyS5yqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9cMZDgor61CbdizyKtwDLW7i5F0at1IBIMbQMh0KSwvviriODtXkzf8xO%2B1TWuQlScQcLdt6CleBIvkrNWwSgMe7tybgh1pjLNmPmH%2ByMKwYEaOETShRsGfpw4qigkXITpeXNSajWzKl%2FTBzNTpk9zh%2BOSoXFMXg8wYVulSl8hcGzb1aUvvfhQkD%2FYU8sR7%2Bi8%2FHuR8x8HatFfkPBDYv5bEx1Tf2JZsKU085PQn2o6AXj34RPZxYf1aL4JKh7slM6agw6czI0lISOT6GogWs%2BcfPH5p8vFO4J%2B9Q5in71wuKNCFjk7ZCoxnLf2qSjNssjDT8IwVmj8HcSs5ohH2Use1sc8%2BueZLp5yaoaV8%2BumFZegid9dpOJ73AlIsOp3k4Jsh2SXirxF6MK2c%2FyJ1F7jiqa7GxLmRO6SFoCSOQHUARzaVtR0NZ7qpPQAuHk6ZxXuR%2Bc%2B534FWlU%2BOOAMPuv5hJMkZwbhReMM0duZeSTKTqsXVhQhMNPstQTSEToFKbMtbqJf0EY552SD8SXd12KKvMLYALuBsFpQXcqY3oNNlYjybqOkXxuXpptZXxDyFW34UelyCUbe3m5dryx%2BdzLiZIBKGBl7qVhCY6tqJr2KNpuAmy2Xe9tZR8UeydyobzxGWwQxbVt4CYZ2Awppi6vwY6pgF5uAt0NrHj76GycWCFbKiNMR2yT6yL0QFQo4TyOEPfijgFevK5V55bBacEf6%2FzrlrIPH0oo0rIM9YXWKHjvbA3iMeEZH5SoDaa3H%2BqLOos48cXwjgHkKF2mviRBMms21wioy7O2Pfjaa9j4bY1ZmUdnH9GcRpNsdySreD85DnwQS5e9QQ2wkDfd1tOVeVpshhGcIv0K0shR7Mc532Q69Ld19MfYdLZ&X-Amz-Signature=2420d0218c233172e7978340039c0ce66048de76b4c9ad76218f81b42b83b39e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDYOYG4X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqfrlgs6uTmpAciMFSlCN%2FzCYY4Tv7wFYQBc5jvXsZ3AiBYjSMmFZpBWfM2toWhfFNkMf7EMBGPCwHT3j7t9%2FyS5yqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9cMZDgor61CbdizyKtwDLW7i5F0at1IBIMbQMh0KSwvviriODtXkzf8xO%2B1TWuQlScQcLdt6CleBIvkrNWwSgMe7tybgh1pjLNmPmH%2ByMKwYEaOETShRsGfpw4qigkXITpeXNSajWzKl%2FTBzNTpk9zh%2BOSoXFMXg8wYVulSl8hcGzb1aUvvfhQkD%2FYU8sR7%2Bi8%2FHuR8x8HatFfkPBDYv5bEx1Tf2JZsKU085PQn2o6AXj34RPZxYf1aL4JKh7slM6agw6czI0lISOT6GogWs%2BcfPH5p8vFO4J%2B9Q5in71wuKNCFjk7ZCoxnLf2qSjNssjDT8IwVmj8HcSs5ohH2Use1sc8%2BueZLp5yaoaV8%2BumFZegid9dpOJ73AlIsOp3k4Jsh2SXirxF6MK2c%2FyJ1F7jiqa7GxLmRO6SFoCSOQHUARzaVtR0NZ7qpPQAuHk6ZxXuR%2Bc%2B534FWlU%2BOOAMPuv5hJMkZwbhReMM0duZeSTKTqsXVhQhMNPstQTSEToFKbMtbqJf0EY552SD8SXd12KKvMLYALuBsFpQXcqY3oNNlYjybqOkXxuXpptZXxDyFW34UelyCUbe3m5dryx%2BdzLiZIBKGBl7qVhCY6tqJr2KNpuAmy2Xe9tZR8UeydyobzxGWwQxbVt4CYZ2Awppi6vwY6pgF5uAt0NrHj76GycWCFbKiNMR2yT6yL0QFQo4TyOEPfijgFevK5V55bBacEf6%2FzrlrIPH0oo0rIM9YXWKHjvbA3iMeEZH5SoDaa3H%2BqLOos48cXwjgHkKF2mviRBMms21wioy7O2Pfjaa9j4bY1ZmUdnH9GcRpNsdySreD85DnwQS5e9QQ2wkDfd1tOVeVpshhGcIv0K0shR7Mc532Q69Ld19MfYdLZ&X-Amz-Signature=069a4cba19467c6f9fad475393f1cbda80f047f51736b57e691ee20356bd55b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDYOYG4X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqfrlgs6uTmpAciMFSlCN%2FzCYY4Tv7wFYQBc5jvXsZ3AiBYjSMmFZpBWfM2toWhfFNkMf7EMBGPCwHT3j7t9%2FyS5yqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9cMZDgor61CbdizyKtwDLW7i5F0at1IBIMbQMh0KSwvviriODtXkzf8xO%2B1TWuQlScQcLdt6CleBIvkrNWwSgMe7tybgh1pjLNmPmH%2ByMKwYEaOETShRsGfpw4qigkXITpeXNSajWzKl%2FTBzNTpk9zh%2BOSoXFMXg8wYVulSl8hcGzb1aUvvfhQkD%2FYU8sR7%2Bi8%2FHuR8x8HatFfkPBDYv5bEx1Tf2JZsKU085PQn2o6AXj34RPZxYf1aL4JKh7slM6agw6czI0lISOT6GogWs%2BcfPH5p8vFO4J%2B9Q5in71wuKNCFjk7ZCoxnLf2qSjNssjDT8IwVmj8HcSs5ohH2Use1sc8%2BueZLp5yaoaV8%2BumFZegid9dpOJ73AlIsOp3k4Jsh2SXirxF6MK2c%2FyJ1F7jiqa7GxLmRO6SFoCSOQHUARzaVtR0NZ7qpPQAuHk6ZxXuR%2Bc%2B534FWlU%2BOOAMPuv5hJMkZwbhReMM0duZeSTKTqsXVhQhMNPstQTSEToFKbMtbqJf0EY552SD8SXd12KKvMLYALuBsFpQXcqY3oNNlYjybqOkXxuXpptZXxDyFW34UelyCUbe3m5dryx%2BdzLiZIBKGBl7qVhCY6tqJr2KNpuAmy2Xe9tZR8UeydyobzxGWwQxbVt4CYZ2Awppi6vwY6pgF5uAt0NrHj76GycWCFbKiNMR2yT6yL0QFQo4TyOEPfijgFevK5V55bBacEf6%2FzrlrIPH0oo0rIM9YXWKHjvbA3iMeEZH5SoDaa3H%2BqLOos48cXwjgHkKF2mviRBMms21wioy7O2Pfjaa9j4bY1ZmUdnH9GcRpNsdySreD85DnwQS5e9QQ2wkDfd1tOVeVpshhGcIv0K0shR7Mc532Q69Ld19MfYdLZ&X-Amz-Signature=bbcfb27bdd7b4cc70db0831dec6dadb05feb635c803c5ee254f707c335fef4c9&X-Amz-SignedHeaders=host&x-id=GetObject)
