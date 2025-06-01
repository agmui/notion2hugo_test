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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHKDSVUT%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBdKMV8zL30jbMtNU7jpimKy4PngvUTnbWjPTAT4UFGUAiAYL392n%2BMGL46YH1KjP6W51Jt9dEro%2FqS6QCn8dmRYbiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9EqUuCNNmBQoKJ5nKtwDQC7baMfRhOS%2FkXAeTbw1dHzv65n2kC%2Fpmsx6X3mP0vFqBuinmdkSIIIvbaH6E0HGNzC4LhfDvQS2JirS6yYbuWNbe0iUSZuECKJPozjvT1E5czPuxiFcKgEThwSb0wyVXqng%2BoFi2AfD61%2BmBI855aGP6hMm%2FkRrr%2BDRe7C5FJmK3MNymdDFu1twbbnAJCY0qCz0QjKDED4HSfVLwjyIWmbx%2FTQHG66SPTvroR40aubC%2FHTm1z3PeKOUmCLrqlBoTxknXx3iRPTgl65s7JUomtMlG03oG0Es%2FLHsHtT%2BXy0ord3m%2B3EHCLYfTc32cAoMTYP9QdJLCCaWsv3K5tH2oM%2Fpsn5M66wG9HDQdtsCtbaMfBpAuXHWMZhWibyRGBLwmHjj7hO64TEzkr3pA7TIyZsk%2BTbKGUOJEXKqvknzNlvdYfoGXFFSmVHTyRPW%2BtdauyoJ9pkTDJYfZMNuuttNIcivvx28fVW8EMB6PH0bqHhAxowJDHY8j%2F93MwhRO8yZVjcXc%2FYuVahxzTfKtra%2F%2BOY7iAaHAqQAIk0t34xEpjkYvNuYhuF5gMzwEr3SBs63seBw9efmVOPnHsAGIoqpVmVWjPuoTUo2WadGr%2FNOfXO%2Fo3D2Js202UuBtYkwuvvvwQY6pgEt2%2BbQ9%2BW7vgnkZerV4HiBPMxXCXdckQhesAjJQIBCJkhvb6LmMu7LSsyZYy8OyTvHhyNuT4jRRCjoPa4URY0gW651DtRg62jcmxXIxCRrB%2Bd8e%2FElnm1W28tuf0AUDqT94bFOJfSfGjQ16fOdFnfYLjiFNsJEXTqMu1wr%2BQfXTbNrggK3kFdOdjTEyDNbU7o5Hj5NarzMLKzxAIYXV4obp8KlFkYi&X-Amz-Signature=2e53fe08fc1162ff08c53ffc4744c47a42d323ea7c00b854615f86be0a2398d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHKDSVUT%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBdKMV8zL30jbMtNU7jpimKy4PngvUTnbWjPTAT4UFGUAiAYL392n%2BMGL46YH1KjP6W51Jt9dEro%2FqS6QCn8dmRYbiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9EqUuCNNmBQoKJ5nKtwDQC7baMfRhOS%2FkXAeTbw1dHzv65n2kC%2Fpmsx6X3mP0vFqBuinmdkSIIIvbaH6E0HGNzC4LhfDvQS2JirS6yYbuWNbe0iUSZuECKJPozjvT1E5czPuxiFcKgEThwSb0wyVXqng%2BoFi2AfD61%2BmBI855aGP6hMm%2FkRrr%2BDRe7C5FJmK3MNymdDFu1twbbnAJCY0qCz0QjKDED4HSfVLwjyIWmbx%2FTQHG66SPTvroR40aubC%2FHTm1z3PeKOUmCLrqlBoTxknXx3iRPTgl65s7JUomtMlG03oG0Es%2FLHsHtT%2BXy0ord3m%2B3EHCLYfTc32cAoMTYP9QdJLCCaWsv3K5tH2oM%2Fpsn5M66wG9HDQdtsCtbaMfBpAuXHWMZhWibyRGBLwmHjj7hO64TEzkr3pA7TIyZsk%2BTbKGUOJEXKqvknzNlvdYfoGXFFSmVHTyRPW%2BtdauyoJ9pkTDJYfZMNuuttNIcivvx28fVW8EMB6PH0bqHhAxowJDHY8j%2F93MwhRO8yZVjcXc%2FYuVahxzTfKtra%2F%2BOY7iAaHAqQAIk0t34xEpjkYvNuYhuF5gMzwEr3SBs63seBw9efmVOPnHsAGIoqpVmVWjPuoTUo2WadGr%2FNOfXO%2Fo3D2Js202UuBtYkwuvvvwQY6pgEt2%2BbQ9%2BW7vgnkZerV4HiBPMxXCXdckQhesAjJQIBCJkhvb6LmMu7LSsyZYy8OyTvHhyNuT4jRRCjoPa4URY0gW651DtRg62jcmxXIxCRrB%2Bd8e%2FElnm1W28tuf0AUDqT94bFOJfSfGjQ16fOdFnfYLjiFNsJEXTqMu1wr%2BQfXTbNrggK3kFdOdjTEyDNbU7o5Hj5NarzMLKzxAIYXV4obp8KlFkYi&X-Amz-Signature=6d206fc3cc2620cbdfb7a1465339f829150f809f9450165fc099552d60606a26&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHKDSVUT%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBdKMV8zL30jbMtNU7jpimKy4PngvUTnbWjPTAT4UFGUAiAYL392n%2BMGL46YH1KjP6W51Jt9dEro%2FqS6QCn8dmRYbiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9EqUuCNNmBQoKJ5nKtwDQC7baMfRhOS%2FkXAeTbw1dHzv65n2kC%2Fpmsx6X3mP0vFqBuinmdkSIIIvbaH6E0HGNzC4LhfDvQS2JirS6yYbuWNbe0iUSZuECKJPozjvT1E5czPuxiFcKgEThwSb0wyVXqng%2BoFi2AfD61%2BmBI855aGP6hMm%2FkRrr%2BDRe7C5FJmK3MNymdDFu1twbbnAJCY0qCz0QjKDED4HSfVLwjyIWmbx%2FTQHG66SPTvroR40aubC%2FHTm1z3PeKOUmCLrqlBoTxknXx3iRPTgl65s7JUomtMlG03oG0Es%2FLHsHtT%2BXy0ord3m%2B3EHCLYfTc32cAoMTYP9QdJLCCaWsv3K5tH2oM%2Fpsn5M66wG9HDQdtsCtbaMfBpAuXHWMZhWibyRGBLwmHjj7hO64TEzkr3pA7TIyZsk%2BTbKGUOJEXKqvknzNlvdYfoGXFFSmVHTyRPW%2BtdauyoJ9pkTDJYfZMNuuttNIcivvx28fVW8EMB6PH0bqHhAxowJDHY8j%2F93MwhRO8yZVjcXc%2FYuVahxzTfKtra%2F%2BOY7iAaHAqQAIk0t34xEpjkYvNuYhuF5gMzwEr3SBs63seBw9efmVOPnHsAGIoqpVmVWjPuoTUo2WadGr%2FNOfXO%2Fo3D2Js202UuBtYkwuvvvwQY6pgEt2%2BbQ9%2BW7vgnkZerV4HiBPMxXCXdckQhesAjJQIBCJkhvb6LmMu7LSsyZYy8OyTvHhyNuT4jRRCjoPa4URY0gW651DtRg62jcmxXIxCRrB%2Bd8e%2FElnm1W28tuf0AUDqT94bFOJfSfGjQ16fOdFnfYLjiFNsJEXTqMu1wr%2BQfXTbNrggK3kFdOdjTEyDNbU7o5Hj5NarzMLKzxAIYXV4obp8KlFkYi&X-Amz-Signature=204e41a3028743d6a171c0ea4c3d4b1c66bea7d941302a090d709cd4aaa945a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHKDSVUT%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBdKMV8zL30jbMtNU7jpimKy4PngvUTnbWjPTAT4UFGUAiAYL392n%2BMGL46YH1KjP6W51Jt9dEro%2FqS6QCn8dmRYbiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9EqUuCNNmBQoKJ5nKtwDQC7baMfRhOS%2FkXAeTbw1dHzv65n2kC%2Fpmsx6X3mP0vFqBuinmdkSIIIvbaH6E0HGNzC4LhfDvQS2JirS6yYbuWNbe0iUSZuECKJPozjvT1E5czPuxiFcKgEThwSb0wyVXqng%2BoFi2AfD61%2BmBI855aGP6hMm%2FkRrr%2BDRe7C5FJmK3MNymdDFu1twbbnAJCY0qCz0QjKDED4HSfVLwjyIWmbx%2FTQHG66SPTvroR40aubC%2FHTm1z3PeKOUmCLrqlBoTxknXx3iRPTgl65s7JUomtMlG03oG0Es%2FLHsHtT%2BXy0ord3m%2B3EHCLYfTc32cAoMTYP9QdJLCCaWsv3K5tH2oM%2Fpsn5M66wG9HDQdtsCtbaMfBpAuXHWMZhWibyRGBLwmHjj7hO64TEzkr3pA7TIyZsk%2BTbKGUOJEXKqvknzNlvdYfoGXFFSmVHTyRPW%2BtdauyoJ9pkTDJYfZMNuuttNIcivvx28fVW8EMB6PH0bqHhAxowJDHY8j%2F93MwhRO8yZVjcXc%2FYuVahxzTfKtra%2F%2BOY7iAaHAqQAIk0t34xEpjkYvNuYhuF5gMzwEr3SBs63seBw9efmVOPnHsAGIoqpVmVWjPuoTUo2WadGr%2FNOfXO%2Fo3D2Js202UuBtYkwuvvvwQY6pgEt2%2BbQ9%2BW7vgnkZerV4HiBPMxXCXdckQhesAjJQIBCJkhvb6LmMu7LSsyZYy8OyTvHhyNuT4jRRCjoPa4URY0gW651DtRg62jcmxXIxCRrB%2Bd8e%2FElnm1W28tuf0AUDqT94bFOJfSfGjQ16fOdFnfYLjiFNsJEXTqMu1wr%2BQfXTbNrggK3kFdOdjTEyDNbU7o5Hj5NarzMLKzxAIYXV4obp8KlFkYi&X-Amz-Signature=257bd8728e7576b4b2e3abf263fc3d4428d8e2f1c5d2e81de9146d951ee71e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHKDSVUT%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBdKMV8zL30jbMtNU7jpimKy4PngvUTnbWjPTAT4UFGUAiAYL392n%2BMGL46YH1KjP6W51Jt9dEro%2FqS6QCn8dmRYbiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9EqUuCNNmBQoKJ5nKtwDQC7baMfRhOS%2FkXAeTbw1dHzv65n2kC%2Fpmsx6X3mP0vFqBuinmdkSIIIvbaH6E0HGNzC4LhfDvQS2JirS6yYbuWNbe0iUSZuECKJPozjvT1E5czPuxiFcKgEThwSb0wyVXqng%2BoFi2AfD61%2BmBI855aGP6hMm%2FkRrr%2BDRe7C5FJmK3MNymdDFu1twbbnAJCY0qCz0QjKDED4HSfVLwjyIWmbx%2FTQHG66SPTvroR40aubC%2FHTm1z3PeKOUmCLrqlBoTxknXx3iRPTgl65s7JUomtMlG03oG0Es%2FLHsHtT%2BXy0ord3m%2B3EHCLYfTc32cAoMTYP9QdJLCCaWsv3K5tH2oM%2Fpsn5M66wG9HDQdtsCtbaMfBpAuXHWMZhWibyRGBLwmHjj7hO64TEzkr3pA7TIyZsk%2BTbKGUOJEXKqvknzNlvdYfoGXFFSmVHTyRPW%2BtdauyoJ9pkTDJYfZMNuuttNIcivvx28fVW8EMB6PH0bqHhAxowJDHY8j%2F93MwhRO8yZVjcXc%2FYuVahxzTfKtra%2F%2BOY7iAaHAqQAIk0t34xEpjkYvNuYhuF5gMzwEr3SBs63seBw9efmVOPnHsAGIoqpVmVWjPuoTUo2WadGr%2FNOfXO%2Fo3D2Js202UuBtYkwuvvvwQY6pgEt2%2BbQ9%2BW7vgnkZerV4HiBPMxXCXdckQhesAjJQIBCJkhvb6LmMu7LSsyZYy8OyTvHhyNuT4jRRCjoPa4URY0gW651DtRg62jcmxXIxCRrB%2Bd8e%2FElnm1W28tuf0AUDqT94bFOJfSfGjQ16fOdFnfYLjiFNsJEXTqMu1wr%2BQfXTbNrggK3kFdOdjTEyDNbU7o5Hj5NarzMLKzxAIYXV4obp8KlFkYi&X-Amz-Signature=0270a0f2fe9acfaebcc1c91c7b34446c3c1564cc6b02540573ebc72fb8c26ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHKDSVUT%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBdKMV8zL30jbMtNU7jpimKy4PngvUTnbWjPTAT4UFGUAiAYL392n%2BMGL46YH1KjP6W51Jt9dEro%2FqS6QCn8dmRYbiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9EqUuCNNmBQoKJ5nKtwDQC7baMfRhOS%2FkXAeTbw1dHzv65n2kC%2Fpmsx6X3mP0vFqBuinmdkSIIIvbaH6E0HGNzC4LhfDvQS2JirS6yYbuWNbe0iUSZuECKJPozjvT1E5czPuxiFcKgEThwSb0wyVXqng%2BoFi2AfD61%2BmBI855aGP6hMm%2FkRrr%2BDRe7C5FJmK3MNymdDFu1twbbnAJCY0qCz0QjKDED4HSfVLwjyIWmbx%2FTQHG66SPTvroR40aubC%2FHTm1z3PeKOUmCLrqlBoTxknXx3iRPTgl65s7JUomtMlG03oG0Es%2FLHsHtT%2BXy0ord3m%2B3EHCLYfTc32cAoMTYP9QdJLCCaWsv3K5tH2oM%2Fpsn5M66wG9HDQdtsCtbaMfBpAuXHWMZhWibyRGBLwmHjj7hO64TEzkr3pA7TIyZsk%2BTbKGUOJEXKqvknzNlvdYfoGXFFSmVHTyRPW%2BtdauyoJ9pkTDJYfZMNuuttNIcivvx28fVW8EMB6PH0bqHhAxowJDHY8j%2F93MwhRO8yZVjcXc%2FYuVahxzTfKtra%2F%2BOY7iAaHAqQAIk0t34xEpjkYvNuYhuF5gMzwEr3SBs63seBw9efmVOPnHsAGIoqpVmVWjPuoTUo2WadGr%2FNOfXO%2Fo3D2Js202UuBtYkwuvvvwQY6pgEt2%2BbQ9%2BW7vgnkZerV4HiBPMxXCXdckQhesAjJQIBCJkhvb6LmMu7LSsyZYy8OyTvHhyNuT4jRRCjoPa4URY0gW651DtRg62jcmxXIxCRrB%2Bd8e%2FElnm1W28tuf0AUDqT94bFOJfSfGjQ16fOdFnfYLjiFNsJEXTqMu1wr%2BQfXTbNrggK3kFdOdjTEyDNbU7o5Hj5NarzMLKzxAIYXV4obp8KlFkYi&X-Amz-Signature=db3f1559d1e376d7b1398f46c48a83d1bfb65144f05a30cb7c8822f8e3ce1c69&X-Amz-SignedHeaders=host&x-id=GetObject)
