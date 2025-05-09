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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IDXQP5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeOhy0FlIF4IIKcPdW5E3%2F%2F8wxjWQerBmuj0rLbYwV4AiAYr82G4zXsjReeiUoWbA%2BrdZYv4ZPexcFHcTKFuEaNLyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BAIJAsiBdi58VTpwKtwDx5T8TdOJCgMOGOJ3UbPfsbmi%2FW9s%2FjQ%2FpXf89WpVnmDVo9joV4bBMoBJ8jdbQ7A2QgUuovvVRl%2BD4qDpZb%2FHI7Fx%2Bpox6ZW3KbWuspVUepqk%2F8T%2BO%2FKB5gbPLnLUzdNiXmDc9n9yHhfoBcNK0HC88AmQu%2FctPuo2uiXJhpykA6YgxskJmvGdytlQJHqtAwoW4Ni3ABrBm6yOh%2BYiCOHWihasMzoe7mlpMnwnMZ2q1l%2BBvQur2ED5oKL0VKm51fcAFQnAAshPfKCNhx%2B%2BUX%2F9Yz2JODFnVBQoTw2aIiddUW%2BBL22W0SWpxEj8ehFh1JLDy3GO0UFPbN45Ru0qfqSAjVGlftB6v8ceb5hDO6uJJd4luCeCBjesaT0gHTxwk4q5kogVah9RU2ZlG1DbDyhh4DZH10XWpmMEnb5gg%2FP%2FMb7D%2FP6%2FPbL%2B%2FcrdFOA2bZok9sK53NHp8TFJWUF60YTg47hGng91avG%2FBItlVh%2BdYirX4LvOTxji4v7Geu0vUlZ3bwJlEAxiLsn3yjqV3nEVYKM3X4L4ooKnqAToLCg%2FwV7bEc%2B4Taf9vquMIPwMi%2B57lka5plj6wkUyTrMuqK%2BMPip6vCKnUA%2BrUcqVqEPzzSZ48TJhbf3N%2B4hmle4w7cf2wAY6pgFSuLpUH0pe1X2YdUZb4KWmTgmH8whcsTq2i3gHeYu%2F72Nv5vzaDwwPmtnmJw6mCii3sakj9SnSZ0ak6FKSQqgfov9kcedP3JZhX4yJu1wS6KyiumewEMn87fEfdZgC1y7a0GHZNlr6Zv7k9NaM4MDL8%2BOLpscwpYxbpf7QIPEkD%2B57ul1Ir0CCwhyQM%2FOMt1w%2Bz%2BMVtMo6jf21kpUhZNcjj%2BOSjTpa&X-Amz-Signature=abf01e664277e41a8cb1d44f572a2efed875921b5a64925b29c61146eba445c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IDXQP5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeOhy0FlIF4IIKcPdW5E3%2F%2F8wxjWQerBmuj0rLbYwV4AiAYr82G4zXsjReeiUoWbA%2BrdZYv4ZPexcFHcTKFuEaNLyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BAIJAsiBdi58VTpwKtwDx5T8TdOJCgMOGOJ3UbPfsbmi%2FW9s%2FjQ%2FpXf89WpVnmDVo9joV4bBMoBJ8jdbQ7A2QgUuovvVRl%2BD4qDpZb%2FHI7Fx%2Bpox6ZW3KbWuspVUepqk%2F8T%2BO%2FKB5gbPLnLUzdNiXmDc9n9yHhfoBcNK0HC88AmQu%2FctPuo2uiXJhpykA6YgxskJmvGdytlQJHqtAwoW4Ni3ABrBm6yOh%2BYiCOHWihasMzoe7mlpMnwnMZ2q1l%2BBvQur2ED5oKL0VKm51fcAFQnAAshPfKCNhx%2B%2BUX%2F9Yz2JODFnVBQoTw2aIiddUW%2BBL22W0SWpxEj8ehFh1JLDy3GO0UFPbN45Ru0qfqSAjVGlftB6v8ceb5hDO6uJJd4luCeCBjesaT0gHTxwk4q5kogVah9RU2ZlG1DbDyhh4DZH10XWpmMEnb5gg%2FP%2FMb7D%2FP6%2FPbL%2B%2FcrdFOA2bZok9sK53NHp8TFJWUF60YTg47hGng91avG%2FBItlVh%2BdYirX4LvOTxji4v7Geu0vUlZ3bwJlEAxiLsn3yjqV3nEVYKM3X4L4ooKnqAToLCg%2FwV7bEc%2B4Taf9vquMIPwMi%2B57lka5plj6wkUyTrMuqK%2BMPip6vCKnUA%2BrUcqVqEPzzSZ48TJhbf3N%2B4hmle4w7cf2wAY6pgFSuLpUH0pe1X2YdUZb4KWmTgmH8whcsTq2i3gHeYu%2F72Nv5vzaDwwPmtnmJw6mCii3sakj9SnSZ0ak6FKSQqgfov9kcedP3JZhX4yJu1wS6KyiumewEMn87fEfdZgC1y7a0GHZNlr6Zv7k9NaM4MDL8%2BOLpscwpYxbpf7QIPEkD%2B57ul1Ir0CCwhyQM%2FOMt1w%2Bz%2BMVtMo6jf21kpUhZNcjj%2BOSjTpa&X-Amz-Signature=4e3b665375b4e7819767c7ceecc25152639c3fdc2ead850eb788dbd8aab25b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IDXQP5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeOhy0FlIF4IIKcPdW5E3%2F%2F8wxjWQerBmuj0rLbYwV4AiAYr82G4zXsjReeiUoWbA%2BrdZYv4ZPexcFHcTKFuEaNLyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BAIJAsiBdi58VTpwKtwDx5T8TdOJCgMOGOJ3UbPfsbmi%2FW9s%2FjQ%2FpXf89WpVnmDVo9joV4bBMoBJ8jdbQ7A2QgUuovvVRl%2BD4qDpZb%2FHI7Fx%2Bpox6ZW3KbWuspVUepqk%2F8T%2BO%2FKB5gbPLnLUzdNiXmDc9n9yHhfoBcNK0HC88AmQu%2FctPuo2uiXJhpykA6YgxskJmvGdytlQJHqtAwoW4Ni3ABrBm6yOh%2BYiCOHWihasMzoe7mlpMnwnMZ2q1l%2BBvQur2ED5oKL0VKm51fcAFQnAAshPfKCNhx%2B%2BUX%2F9Yz2JODFnVBQoTw2aIiddUW%2BBL22W0SWpxEj8ehFh1JLDy3GO0UFPbN45Ru0qfqSAjVGlftB6v8ceb5hDO6uJJd4luCeCBjesaT0gHTxwk4q5kogVah9RU2ZlG1DbDyhh4DZH10XWpmMEnb5gg%2FP%2FMb7D%2FP6%2FPbL%2B%2FcrdFOA2bZok9sK53NHp8TFJWUF60YTg47hGng91avG%2FBItlVh%2BdYirX4LvOTxji4v7Geu0vUlZ3bwJlEAxiLsn3yjqV3nEVYKM3X4L4ooKnqAToLCg%2FwV7bEc%2B4Taf9vquMIPwMi%2B57lka5plj6wkUyTrMuqK%2BMPip6vCKnUA%2BrUcqVqEPzzSZ48TJhbf3N%2B4hmle4w7cf2wAY6pgFSuLpUH0pe1X2YdUZb4KWmTgmH8whcsTq2i3gHeYu%2F72Nv5vzaDwwPmtnmJw6mCii3sakj9SnSZ0ak6FKSQqgfov9kcedP3JZhX4yJu1wS6KyiumewEMn87fEfdZgC1y7a0GHZNlr6Zv7k9NaM4MDL8%2BOLpscwpYxbpf7QIPEkD%2B57ul1Ir0CCwhyQM%2FOMt1w%2Bz%2BMVtMo6jf21kpUhZNcjj%2BOSjTpa&X-Amz-Signature=d29adb0fa4d2f10dc25ac8f178aba8429d4d7db58c81bcb91fb8b161bb9c3b25&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IDXQP5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeOhy0FlIF4IIKcPdW5E3%2F%2F8wxjWQerBmuj0rLbYwV4AiAYr82G4zXsjReeiUoWbA%2BrdZYv4ZPexcFHcTKFuEaNLyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BAIJAsiBdi58VTpwKtwDx5T8TdOJCgMOGOJ3UbPfsbmi%2FW9s%2FjQ%2FpXf89WpVnmDVo9joV4bBMoBJ8jdbQ7A2QgUuovvVRl%2BD4qDpZb%2FHI7Fx%2Bpox6ZW3KbWuspVUepqk%2F8T%2BO%2FKB5gbPLnLUzdNiXmDc9n9yHhfoBcNK0HC88AmQu%2FctPuo2uiXJhpykA6YgxskJmvGdytlQJHqtAwoW4Ni3ABrBm6yOh%2BYiCOHWihasMzoe7mlpMnwnMZ2q1l%2BBvQur2ED5oKL0VKm51fcAFQnAAshPfKCNhx%2B%2BUX%2F9Yz2JODFnVBQoTw2aIiddUW%2BBL22W0SWpxEj8ehFh1JLDy3GO0UFPbN45Ru0qfqSAjVGlftB6v8ceb5hDO6uJJd4luCeCBjesaT0gHTxwk4q5kogVah9RU2ZlG1DbDyhh4DZH10XWpmMEnb5gg%2FP%2FMb7D%2FP6%2FPbL%2B%2FcrdFOA2bZok9sK53NHp8TFJWUF60YTg47hGng91avG%2FBItlVh%2BdYirX4LvOTxji4v7Geu0vUlZ3bwJlEAxiLsn3yjqV3nEVYKM3X4L4ooKnqAToLCg%2FwV7bEc%2B4Taf9vquMIPwMi%2B57lka5plj6wkUyTrMuqK%2BMPip6vCKnUA%2BrUcqVqEPzzSZ48TJhbf3N%2B4hmle4w7cf2wAY6pgFSuLpUH0pe1X2YdUZb4KWmTgmH8whcsTq2i3gHeYu%2F72Nv5vzaDwwPmtnmJw6mCii3sakj9SnSZ0ak6FKSQqgfov9kcedP3JZhX4yJu1wS6KyiumewEMn87fEfdZgC1y7a0GHZNlr6Zv7k9NaM4MDL8%2BOLpscwpYxbpf7QIPEkD%2B57ul1Ir0CCwhyQM%2FOMt1w%2Bz%2BMVtMo6jf21kpUhZNcjj%2BOSjTpa&X-Amz-Signature=3389560c9c54e100dae587e3dec02f3e87d630a4cd0a96108efea0dd6e8df60f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IDXQP5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeOhy0FlIF4IIKcPdW5E3%2F%2F8wxjWQerBmuj0rLbYwV4AiAYr82G4zXsjReeiUoWbA%2BrdZYv4ZPexcFHcTKFuEaNLyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BAIJAsiBdi58VTpwKtwDx5T8TdOJCgMOGOJ3UbPfsbmi%2FW9s%2FjQ%2FpXf89WpVnmDVo9joV4bBMoBJ8jdbQ7A2QgUuovvVRl%2BD4qDpZb%2FHI7Fx%2Bpox6ZW3KbWuspVUepqk%2F8T%2BO%2FKB5gbPLnLUzdNiXmDc9n9yHhfoBcNK0HC88AmQu%2FctPuo2uiXJhpykA6YgxskJmvGdytlQJHqtAwoW4Ni3ABrBm6yOh%2BYiCOHWihasMzoe7mlpMnwnMZ2q1l%2BBvQur2ED5oKL0VKm51fcAFQnAAshPfKCNhx%2B%2BUX%2F9Yz2JODFnVBQoTw2aIiddUW%2BBL22W0SWpxEj8ehFh1JLDy3GO0UFPbN45Ru0qfqSAjVGlftB6v8ceb5hDO6uJJd4luCeCBjesaT0gHTxwk4q5kogVah9RU2ZlG1DbDyhh4DZH10XWpmMEnb5gg%2FP%2FMb7D%2FP6%2FPbL%2B%2FcrdFOA2bZok9sK53NHp8TFJWUF60YTg47hGng91avG%2FBItlVh%2BdYirX4LvOTxji4v7Geu0vUlZ3bwJlEAxiLsn3yjqV3nEVYKM3X4L4ooKnqAToLCg%2FwV7bEc%2B4Taf9vquMIPwMi%2B57lka5plj6wkUyTrMuqK%2BMPip6vCKnUA%2BrUcqVqEPzzSZ48TJhbf3N%2B4hmle4w7cf2wAY6pgFSuLpUH0pe1X2YdUZb4KWmTgmH8whcsTq2i3gHeYu%2F72Nv5vzaDwwPmtnmJw6mCii3sakj9SnSZ0ak6FKSQqgfov9kcedP3JZhX4yJu1wS6KyiumewEMn87fEfdZgC1y7a0GHZNlr6Zv7k9NaM4MDL8%2BOLpscwpYxbpf7QIPEkD%2B57ul1Ir0CCwhyQM%2FOMt1w%2Bz%2BMVtMo6jf21kpUhZNcjj%2BOSjTpa&X-Amz-Signature=5a13bd2b47d7b334fd6e2f98de03ebd73d837da9eb3450fc788617e7e70f2072&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IDXQP5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeOhy0FlIF4IIKcPdW5E3%2F%2F8wxjWQerBmuj0rLbYwV4AiAYr82G4zXsjReeiUoWbA%2BrdZYv4ZPexcFHcTKFuEaNLyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BAIJAsiBdi58VTpwKtwDx5T8TdOJCgMOGOJ3UbPfsbmi%2FW9s%2FjQ%2FpXf89WpVnmDVo9joV4bBMoBJ8jdbQ7A2QgUuovvVRl%2BD4qDpZb%2FHI7Fx%2Bpox6ZW3KbWuspVUepqk%2F8T%2BO%2FKB5gbPLnLUzdNiXmDc9n9yHhfoBcNK0HC88AmQu%2FctPuo2uiXJhpykA6YgxskJmvGdytlQJHqtAwoW4Ni3ABrBm6yOh%2BYiCOHWihasMzoe7mlpMnwnMZ2q1l%2BBvQur2ED5oKL0VKm51fcAFQnAAshPfKCNhx%2B%2BUX%2F9Yz2JODFnVBQoTw2aIiddUW%2BBL22W0SWpxEj8ehFh1JLDy3GO0UFPbN45Ru0qfqSAjVGlftB6v8ceb5hDO6uJJd4luCeCBjesaT0gHTxwk4q5kogVah9RU2ZlG1DbDyhh4DZH10XWpmMEnb5gg%2FP%2FMb7D%2FP6%2FPbL%2B%2FcrdFOA2bZok9sK53NHp8TFJWUF60YTg47hGng91avG%2FBItlVh%2BdYirX4LvOTxji4v7Geu0vUlZ3bwJlEAxiLsn3yjqV3nEVYKM3X4L4ooKnqAToLCg%2FwV7bEc%2B4Taf9vquMIPwMi%2B57lka5plj6wkUyTrMuqK%2BMPip6vCKnUA%2BrUcqVqEPzzSZ48TJhbf3N%2B4hmle4w7cf2wAY6pgFSuLpUH0pe1X2YdUZb4KWmTgmH8whcsTq2i3gHeYu%2F72Nv5vzaDwwPmtnmJw6mCii3sakj9SnSZ0ak6FKSQqgfov9kcedP3JZhX4yJu1wS6KyiumewEMn87fEfdZgC1y7a0GHZNlr6Zv7k9NaM4MDL8%2BOLpscwpYxbpf7QIPEkD%2B57ul1Ir0CCwhyQM%2FOMt1w%2Bz%2BMVtMo6jf21kpUhZNcjj%2BOSjTpa&X-Amz-Signature=7cb76f2fb7b866921dc23f9536cb9a3a8d2119f925d63db74e4c8159763121a5&X-Amz-SignedHeaders=host&x-id=GetObject)
