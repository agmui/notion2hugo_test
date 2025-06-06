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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWLGFOQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD3TE%2FiHatp46xcWktJtspagog%2FgZwu95QbDJ8mX0Oq8wIgJPIhSgHKr2LSip64wNtyIVDM%2FSkNLcgtd2e2r3i1LUYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDF5gRdxnktG4dm6OLCrcA0tlEwl4xyUJVO%2B3LGjjJNnWXujWOLi6J%2BlOuIBwJH6DKvvmVrdQyxFJIUJsnRieC45%2FTY3gaaVU5JepDNdxOGmGyxLAptn7z6nHM5JTAhyH%2B3U%2Bien6VpDWokeWkCnUwDw3RIyBI%2BfLutbqXT9FR2TXqTV24QsW4c8VdD5VS6F9BXlgYeBT%2BTBC21E%2FDZpFbO6Uzj9nCqVjQE2zglnnPM0lOp0Mx40t7AKt6QFB0hxmF022UOVOcsLEsl%2B1G95cl6HRNOjSxZLcC4nE%2B2%2FTiAOFDR0xMG48ahiFavoyDA2MBQoi6FwdXDE5kSgVP92iFmCvVzOzX%2BybGcyets9bGeGMnxowboHVxsXnpiZB5d%2BED9NjUh0ZN9WH4UlTC2u2WAJRd6UWttRslUxWRuYSWkof3QeLLUIM2aGPNbPiMRg5TCpI38iKQecxKGAMWWbl91Yuk3wGhk%2BBOcKr9lbSlAcb4c9mi4YbTQh5u%2FaXfN3E%2BdOWi0WuajFZW2ZWFpo%2FjhLT%2BeGBoaCa6Xwr0g3pFLEZbiSD3EshSw4lIf3ABq2tuBuZYDt7%2FJ5yHC8qnyFPawAfYs%2B805zswmoWhl6BMICk0tafaDlGLMJH%2FAB%2FjC6PV8Lb1Eog2wF%2FSFLRMJOdisIGOqUBBMVDSe%2FeLWx5TQJ%2F2maWT5uacQe9j2OeD6GEYJFd2Rzr5bQiys9d6TATO9G%2ByD0CeZgNcsd%2FauE6a3%2B0%2BaJ%2B4oFyNWPeUs%2Bcc8kBUIACFfMwtYnAJgOd362JgjphlKhLZZMVWCCaq65V%2BPw2JB%2FYGQuBPzHJZJSOPzf9k3I7axuLK3pxLtjWuzTUzsLOqZKSX1uutBfB2BrKTjWKVk9omaGkCuuR&X-Amz-Signature=c28725a7c384052c89477f709c74f12631a2180a8d1afd30b20351ad9ab89bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWLGFOQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD3TE%2FiHatp46xcWktJtspagog%2FgZwu95QbDJ8mX0Oq8wIgJPIhSgHKr2LSip64wNtyIVDM%2FSkNLcgtd2e2r3i1LUYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDF5gRdxnktG4dm6OLCrcA0tlEwl4xyUJVO%2B3LGjjJNnWXujWOLi6J%2BlOuIBwJH6DKvvmVrdQyxFJIUJsnRieC45%2FTY3gaaVU5JepDNdxOGmGyxLAptn7z6nHM5JTAhyH%2B3U%2Bien6VpDWokeWkCnUwDw3RIyBI%2BfLutbqXT9FR2TXqTV24QsW4c8VdD5VS6F9BXlgYeBT%2BTBC21E%2FDZpFbO6Uzj9nCqVjQE2zglnnPM0lOp0Mx40t7AKt6QFB0hxmF022UOVOcsLEsl%2B1G95cl6HRNOjSxZLcC4nE%2B2%2FTiAOFDR0xMG48ahiFavoyDA2MBQoi6FwdXDE5kSgVP92iFmCvVzOzX%2BybGcyets9bGeGMnxowboHVxsXnpiZB5d%2BED9NjUh0ZN9WH4UlTC2u2WAJRd6UWttRslUxWRuYSWkof3QeLLUIM2aGPNbPiMRg5TCpI38iKQecxKGAMWWbl91Yuk3wGhk%2BBOcKr9lbSlAcb4c9mi4YbTQh5u%2FaXfN3E%2BdOWi0WuajFZW2ZWFpo%2FjhLT%2BeGBoaCa6Xwr0g3pFLEZbiSD3EshSw4lIf3ABq2tuBuZYDt7%2FJ5yHC8qnyFPawAfYs%2B805zswmoWhl6BMICk0tafaDlGLMJH%2FAB%2FjC6PV8Lb1Eog2wF%2FSFLRMJOdisIGOqUBBMVDSe%2FeLWx5TQJ%2F2maWT5uacQe9j2OeD6GEYJFd2Rzr5bQiys9d6TATO9G%2ByD0CeZgNcsd%2FauE6a3%2B0%2BaJ%2B4oFyNWPeUs%2Bcc8kBUIACFfMwtYnAJgOd362JgjphlKhLZZMVWCCaq65V%2BPw2JB%2FYGQuBPzHJZJSOPzf9k3I7axuLK3pxLtjWuzTUzsLOqZKSX1uutBfB2BrKTjWKVk9omaGkCuuR&X-Amz-Signature=e18bcb966ff238ba5127e547c880dbdd8c87366131295ccd69154b6bca0d9331&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWLGFOQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD3TE%2FiHatp46xcWktJtspagog%2FgZwu95QbDJ8mX0Oq8wIgJPIhSgHKr2LSip64wNtyIVDM%2FSkNLcgtd2e2r3i1LUYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDF5gRdxnktG4dm6OLCrcA0tlEwl4xyUJVO%2B3LGjjJNnWXujWOLi6J%2BlOuIBwJH6DKvvmVrdQyxFJIUJsnRieC45%2FTY3gaaVU5JepDNdxOGmGyxLAptn7z6nHM5JTAhyH%2B3U%2Bien6VpDWokeWkCnUwDw3RIyBI%2BfLutbqXT9FR2TXqTV24QsW4c8VdD5VS6F9BXlgYeBT%2BTBC21E%2FDZpFbO6Uzj9nCqVjQE2zglnnPM0lOp0Mx40t7AKt6QFB0hxmF022UOVOcsLEsl%2B1G95cl6HRNOjSxZLcC4nE%2B2%2FTiAOFDR0xMG48ahiFavoyDA2MBQoi6FwdXDE5kSgVP92iFmCvVzOzX%2BybGcyets9bGeGMnxowboHVxsXnpiZB5d%2BED9NjUh0ZN9WH4UlTC2u2WAJRd6UWttRslUxWRuYSWkof3QeLLUIM2aGPNbPiMRg5TCpI38iKQecxKGAMWWbl91Yuk3wGhk%2BBOcKr9lbSlAcb4c9mi4YbTQh5u%2FaXfN3E%2BdOWi0WuajFZW2ZWFpo%2FjhLT%2BeGBoaCa6Xwr0g3pFLEZbiSD3EshSw4lIf3ABq2tuBuZYDt7%2FJ5yHC8qnyFPawAfYs%2B805zswmoWhl6BMICk0tafaDlGLMJH%2FAB%2FjC6PV8Lb1Eog2wF%2FSFLRMJOdisIGOqUBBMVDSe%2FeLWx5TQJ%2F2maWT5uacQe9j2OeD6GEYJFd2Rzr5bQiys9d6TATO9G%2ByD0CeZgNcsd%2FauE6a3%2B0%2BaJ%2B4oFyNWPeUs%2Bcc8kBUIACFfMwtYnAJgOd362JgjphlKhLZZMVWCCaq65V%2BPw2JB%2FYGQuBPzHJZJSOPzf9k3I7axuLK3pxLtjWuzTUzsLOqZKSX1uutBfB2BrKTjWKVk9omaGkCuuR&X-Amz-Signature=8cb155bb2a242e0b02bec94b6c9deebc5bec1f2e5f35ba1f51747911b347ce9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWLGFOQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD3TE%2FiHatp46xcWktJtspagog%2FgZwu95QbDJ8mX0Oq8wIgJPIhSgHKr2LSip64wNtyIVDM%2FSkNLcgtd2e2r3i1LUYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDF5gRdxnktG4dm6OLCrcA0tlEwl4xyUJVO%2B3LGjjJNnWXujWOLi6J%2BlOuIBwJH6DKvvmVrdQyxFJIUJsnRieC45%2FTY3gaaVU5JepDNdxOGmGyxLAptn7z6nHM5JTAhyH%2B3U%2Bien6VpDWokeWkCnUwDw3RIyBI%2BfLutbqXT9FR2TXqTV24QsW4c8VdD5VS6F9BXlgYeBT%2BTBC21E%2FDZpFbO6Uzj9nCqVjQE2zglnnPM0lOp0Mx40t7AKt6QFB0hxmF022UOVOcsLEsl%2B1G95cl6HRNOjSxZLcC4nE%2B2%2FTiAOFDR0xMG48ahiFavoyDA2MBQoi6FwdXDE5kSgVP92iFmCvVzOzX%2BybGcyets9bGeGMnxowboHVxsXnpiZB5d%2BED9NjUh0ZN9WH4UlTC2u2WAJRd6UWttRslUxWRuYSWkof3QeLLUIM2aGPNbPiMRg5TCpI38iKQecxKGAMWWbl91Yuk3wGhk%2BBOcKr9lbSlAcb4c9mi4YbTQh5u%2FaXfN3E%2BdOWi0WuajFZW2ZWFpo%2FjhLT%2BeGBoaCa6Xwr0g3pFLEZbiSD3EshSw4lIf3ABq2tuBuZYDt7%2FJ5yHC8qnyFPawAfYs%2B805zswmoWhl6BMICk0tafaDlGLMJH%2FAB%2FjC6PV8Lb1Eog2wF%2FSFLRMJOdisIGOqUBBMVDSe%2FeLWx5TQJ%2F2maWT5uacQe9j2OeD6GEYJFd2Rzr5bQiys9d6TATO9G%2ByD0CeZgNcsd%2FauE6a3%2B0%2BaJ%2B4oFyNWPeUs%2Bcc8kBUIACFfMwtYnAJgOd362JgjphlKhLZZMVWCCaq65V%2BPw2JB%2FYGQuBPzHJZJSOPzf9k3I7axuLK3pxLtjWuzTUzsLOqZKSX1uutBfB2BrKTjWKVk9omaGkCuuR&X-Amz-Signature=3d67dc0ef9eb449e0aa5c2d89f9cb3cb547c3ece2f29755993ddd206be77d42e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWLGFOQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD3TE%2FiHatp46xcWktJtspagog%2FgZwu95QbDJ8mX0Oq8wIgJPIhSgHKr2LSip64wNtyIVDM%2FSkNLcgtd2e2r3i1LUYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDF5gRdxnktG4dm6OLCrcA0tlEwl4xyUJVO%2B3LGjjJNnWXujWOLi6J%2BlOuIBwJH6DKvvmVrdQyxFJIUJsnRieC45%2FTY3gaaVU5JepDNdxOGmGyxLAptn7z6nHM5JTAhyH%2B3U%2Bien6VpDWokeWkCnUwDw3RIyBI%2BfLutbqXT9FR2TXqTV24QsW4c8VdD5VS6F9BXlgYeBT%2BTBC21E%2FDZpFbO6Uzj9nCqVjQE2zglnnPM0lOp0Mx40t7AKt6QFB0hxmF022UOVOcsLEsl%2B1G95cl6HRNOjSxZLcC4nE%2B2%2FTiAOFDR0xMG48ahiFavoyDA2MBQoi6FwdXDE5kSgVP92iFmCvVzOzX%2BybGcyets9bGeGMnxowboHVxsXnpiZB5d%2BED9NjUh0ZN9WH4UlTC2u2WAJRd6UWttRslUxWRuYSWkof3QeLLUIM2aGPNbPiMRg5TCpI38iKQecxKGAMWWbl91Yuk3wGhk%2BBOcKr9lbSlAcb4c9mi4YbTQh5u%2FaXfN3E%2BdOWi0WuajFZW2ZWFpo%2FjhLT%2BeGBoaCa6Xwr0g3pFLEZbiSD3EshSw4lIf3ABq2tuBuZYDt7%2FJ5yHC8qnyFPawAfYs%2B805zswmoWhl6BMICk0tafaDlGLMJH%2FAB%2FjC6PV8Lb1Eog2wF%2FSFLRMJOdisIGOqUBBMVDSe%2FeLWx5TQJ%2F2maWT5uacQe9j2OeD6GEYJFd2Rzr5bQiys9d6TATO9G%2ByD0CeZgNcsd%2FauE6a3%2B0%2BaJ%2B4oFyNWPeUs%2Bcc8kBUIACFfMwtYnAJgOd362JgjphlKhLZZMVWCCaq65V%2BPw2JB%2FYGQuBPzHJZJSOPzf9k3I7axuLK3pxLtjWuzTUzsLOqZKSX1uutBfB2BrKTjWKVk9omaGkCuuR&X-Amz-Signature=c483e2e7acf8c9292e4a07031e517944127e0f70b2ec009e7cdf8eb61ba2ceb3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOWLGFOQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD3TE%2FiHatp46xcWktJtspagog%2FgZwu95QbDJ8mX0Oq8wIgJPIhSgHKr2LSip64wNtyIVDM%2FSkNLcgtd2e2r3i1LUYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDF5gRdxnktG4dm6OLCrcA0tlEwl4xyUJVO%2B3LGjjJNnWXujWOLi6J%2BlOuIBwJH6DKvvmVrdQyxFJIUJsnRieC45%2FTY3gaaVU5JepDNdxOGmGyxLAptn7z6nHM5JTAhyH%2B3U%2Bien6VpDWokeWkCnUwDw3RIyBI%2BfLutbqXT9FR2TXqTV24QsW4c8VdD5VS6F9BXlgYeBT%2BTBC21E%2FDZpFbO6Uzj9nCqVjQE2zglnnPM0lOp0Mx40t7AKt6QFB0hxmF022UOVOcsLEsl%2B1G95cl6HRNOjSxZLcC4nE%2B2%2FTiAOFDR0xMG48ahiFavoyDA2MBQoi6FwdXDE5kSgVP92iFmCvVzOzX%2BybGcyets9bGeGMnxowboHVxsXnpiZB5d%2BED9NjUh0ZN9WH4UlTC2u2WAJRd6UWttRslUxWRuYSWkof3QeLLUIM2aGPNbPiMRg5TCpI38iKQecxKGAMWWbl91Yuk3wGhk%2BBOcKr9lbSlAcb4c9mi4YbTQh5u%2FaXfN3E%2BdOWi0WuajFZW2ZWFpo%2FjhLT%2BeGBoaCa6Xwr0g3pFLEZbiSD3EshSw4lIf3ABq2tuBuZYDt7%2FJ5yHC8qnyFPawAfYs%2B805zswmoWhl6BMICk0tafaDlGLMJH%2FAB%2FjC6PV8Lb1Eog2wF%2FSFLRMJOdisIGOqUBBMVDSe%2FeLWx5TQJ%2F2maWT5uacQe9j2OeD6GEYJFd2Rzr5bQiys9d6TATO9G%2ByD0CeZgNcsd%2FauE6a3%2B0%2BaJ%2B4oFyNWPeUs%2Bcc8kBUIACFfMwtYnAJgOd362JgjphlKhLZZMVWCCaq65V%2BPw2JB%2FYGQuBPzHJZJSOPzf9k3I7axuLK3pxLtjWuzTUzsLOqZKSX1uutBfB2BrKTjWKVk9omaGkCuuR&X-Amz-Signature=46156e7e5515d56fb68d38abc8ca6f9b2a8ee633c7617697c9351a6ee04b9062&X-Amz-SignedHeaders=host&x-id=GetObject)
