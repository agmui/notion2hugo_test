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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYEIEDD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUvjAwgLm%2BlYASkNDgluBP%2Bs0pJ2lNK2gYryv6CJmoDAIgNuyzftw72q0w4QB3rn7dmj8TEjukUTahfu0BsRzww%2F0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSX2t5KShCeEIyQsircA0ap1XCPb92QqqbwSiAPsEnssb%2B2RUITfOxfYfA5IExKocwTnXGrik7oeJU9a9XmGDaUN0vl5Tnxfu7Ti9CwjqgAcHDnKMrDP2J1bZjCqoAdSoMhVq0GJ1mMQ6KQu9ZbhBM2LqvBIE17FugaxZcOG2YPJ7j0oKGO%2BMYO%2FS8RJC7JYcO%2FRNXjgTkcHeujLHu6xRxPEEd487bYDRPXYVOKBVM%2BHU%2BI9BymLSJ0sn5sn6VDulXyzFTVZBkkOWH%2Fb%2BFO5V1b1uiG9ZDk%2FtKb%2BnlmO6pFFp5cSy5P7UxpB7rslt6oLSU4rItTmrWFdKpb76IgR7C0nc1SrEUZJh9IskWw5l%2FdM6kegyORxkDPkFfrDFVOTaWIN40wwXFGmTVwXbCJFr52G8JIBnnOKaFSnu3NZvfCVaQfIVUy35Wz0v1JsL5AXucSZ8oJBLpLx3NnlFqsfX8dhMuVngvqLeEwkFMTsBhYWgS%2BFnWgizoc%2Bhkx06v4gzlX2MQ78EPQb65hdzyO1t%2B8U8Fgfzku3xYWgU3LNx90qZGI1KZaWmtVBJdLS4oXMbpyAaLC%2BKAxf1pOT%2F%2Bsyz7CpqBvVyExwAs0IGBx0xpgLAEV3T7reaGvbsUZ9PFiv%2FZ5Xp090vFQiTYuMO7%2BvMMGOqUBwWhe6vbB6n%2FxFMMq5O1qztnGIs0d%2BJHMXAIhMaZ%2BZEcoxRhzm0b43zmq4f7QXKtqFHwcgYPgb1TxHqTpINFB9GBKtG5gHLzHg4v10NcGHdhPbKKfptTYFZUthqFy5xdMyno%2BhcRn%2BWZvAhu5CnGfOmzHwybyhbNCRnX%2B4wcjAZbXb8tyycXB2RbxSrNaxY3qVGBpjlXj4NO8QkGoZKp9I3rwnMCj&X-Amz-Signature=db967a1cbbceb8aa434560bd07ede0baa28f4a74293a4b0af0510e9c2409a0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYEIEDD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUvjAwgLm%2BlYASkNDgluBP%2Bs0pJ2lNK2gYryv6CJmoDAIgNuyzftw72q0w4QB3rn7dmj8TEjukUTahfu0BsRzww%2F0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSX2t5KShCeEIyQsircA0ap1XCPb92QqqbwSiAPsEnssb%2B2RUITfOxfYfA5IExKocwTnXGrik7oeJU9a9XmGDaUN0vl5Tnxfu7Ti9CwjqgAcHDnKMrDP2J1bZjCqoAdSoMhVq0GJ1mMQ6KQu9ZbhBM2LqvBIE17FugaxZcOG2YPJ7j0oKGO%2BMYO%2FS8RJC7JYcO%2FRNXjgTkcHeujLHu6xRxPEEd487bYDRPXYVOKBVM%2BHU%2BI9BymLSJ0sn5sn6VDulXyzFTVZBkkOWH%2Fb%2BFO5V1b1uiG9ZDk%2FtKb%2BnlmO6pFFp5cSy5P7UxpB7rslt6oLSU4rItTmrWFdKpb76IgR7C0nc1SrEUZJh9IskWw5l%2FdM6kegyORxkDPkFfrDFVOTaWIN40wwXFGmTVwXbCJFr52G8JIBnnOKaFSnu3NZvfCVaQfIVUy35Wz0v1JsL5AXucSZ8oJBLpLx3NnlFqsfX8dhMuVngvqLeEwkFMTsBhYWgS%2BFnWgizoc%2Bhkx06v4gzlX2MQ78EPQb65hdzyO1t%2B8U8Fgfzku3xYWgU3LNx90qZGI1KZaWmtVBJdLS4oXMbpyAaLC%2BKAxf1pOT%2F%2Bsyz7CpqBvVyExwAs0IGBx0xpgLAEV3T7reaGvbsUZ9PFiv%2FZ5Xp090vFQiTYuMO7%2BvMMGOqUBwWhe6vbB6n%2FxFMMq5O1qztnGIs0d%2BJHMXAIhMaZ%2BZEcoxRhzm0b43zmq4f7QXKtqFHwcgYPgb1TxHqTpINFB9GBKtG5gHLzHg4v10NcGHdhPbKKfptTYFZUthqFy5xdMyno%2BhcRn%2BWZvAhu5CnGfOmzHwybyhbNCRnX%2B4wcjAZbXb8tyycXB2RbxSrNaxY3qVGBpjlXj4NO8QkGoZKp9I3rwnMCj&X-Amz-Signature=104837eaa7013b7ba900b608f81be36e9f3c1d3149a37795e47f75ae6384fcb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYEIEDD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUvjAwgLm%2BlYASkNDgluBP%2Bs0pJ2lNK2gYryv6CJmoDAIgNuyzftw72q0w4QB3rn7dmj8TEjukUTahfu0BsRzww%2F0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSX2t5KShCeEIyQsircA0ap1XCPb92QqqbwSiAPsEnssb%2B2RUITfOxfYfA5IExKocwTnXGrik7oeJU9a9XmGDaUN0vl5Tnxfu7Ti9CwjqgAcHDnKMrDP2J1bZjCqoAdSoMhVq0GJ1mMQ6KQu9ZbhBM2LqvBIE17FugaxZcOG2YPJ7j0oKGO%2BMYO%2FS8RJC7JYcO%2FRNXjgTkcHeujLHu6xRxPEEd487bYDRPXYVOKBVM%2BHU%2BI9BymLSJ0sn5sn6VDulXyzFTVZBkkOWH%2Fb%2BFO5V1b1uiG9ZDk%2FtKb%2BnlmO6pFFp5cSy5P7UxpB7rslt6oLSU4rItTmrWFdKpb76IgR7C0nc1SrEUZJh9IskWw5l%2FdM6kegyORxkDPkFfrDFVOTaWIN40wwXFGmTVwXbCJFr52G8JIBnnOKaFSnu3NZvfCVaQfIVUy35Wz0v1JsL5AXucSZ8oJBLpLx3NnlFqsfX8dhMuVngvqLeEwkFMTsBhYWgS%2BFnWgizoc%2Bhkx06v4gzlX2MQ78EPQb65hdzyO1t%2B8U8Fgfzku3xYWgU3LNx90qZGI1KZaWmtVBJdLS4oXMbpyAaLC%2BKAxf1pOT%2F%2Bsyz7CpqBvVyExwAs0IGBx0xpgLAEV3T7reaGvbsUZ9PFiv%2FZ5Xp090vFQiTYuMO7%2BvMMGOqUBwWhe6vbB6n%2FxFMMq5O1qztnGIs0d%2BJHMXAIhMaZ%2BZEcoxRhzm0b43zmq4f7QXKtqFHwcgYPgb1TxHqTpINFB9GBKtG5gHLzHg4v10NcGHdhPbKKfptTYFZUthqFy5xdMyno%2BhcRn%2BWZvAhu5CnGfOmzHwybyhbNCRnX%2B4wcjAZbXb8tyycXB2RbxSrNaxY3qVGBpjlXj4NO8QkGoZKp9I3rwnMCj&X-Amz-Signature=a592b94c8bf4faddf58dc944eed261bdd0f5ecc7f902cd1d268556fb1a42baa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYEIEDD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUvjAwgLm%2BlYASkNDgluBP%2Bs0pJ2lNK2gYryv6CJmoDAIgNuyzftw72q0w4QB3rn7dmj8TEjukUTahfu0BsRzww%2F0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSX2t5KShCeEIyQsircA0ap1XCPb92QqqbwSiAPsEnssb%2B2RUITfOxfYfA5IExKocwTnXGrik7oeJU9a9XmGDaUN0vl5Tnxfu7Ti9CwjqgAcHDnKMrDP2J1bZjCqoAdSoMhVq0GJ1mMQ6KQu9ZbhBM2LqvBIE17FugaxZcOG2YPJ7j0oKGO%2BMYO%2FS8RJC7JYcO%2FRNXjgTkcHeujLHu6xRxPEEd487bYDRPXYVOKBVM%2BHU%2BI9BymLSJ0sn5sn6VDulXyzFTVZBkkOWH%2Fb%2BFO5V1b1uiG9ZDk%2FtKb%2BnlmO6pFFp5cSy5P7UxpB7rslt6oLSU4rItTmrWFdKpb76IgR7C0nc1SrEUZJh9IskWw5l%2FdM6kegyORxkDPkFfrDFVOTaWIN40wwXFGmTVwXbCJFr52G8JIBnnOKaFSnu3NZvfCVaQfIVUy35Wz0v1JsL5AXucSZ8oJBLpLx3NnlFqsfX8dhMuVngvqLeEwkFMTsBhYWgS%2BFnWgizoc%2Bhkx06v4gzlX2MQ78EPQb65hdzyO1t%2B8U8Fgfzku3xYWgU3LNx90qZGI1KZaWmtVBJdLS4oXMbpyAaLC%2BKAxf1pOT%2F%2Bsyz7CpqBvVyExwAs0IGBx0xpgLAEV3T7reaGvbsUZ9PFiv%2FZ5Xp090vFQiTYuMO7%2BvMMGOqUBwWhe6vbB6n%2FxFMMq5O1qztnGIs0d%2BJHMXAIhMaZ%2BZEcoxRhzm0b43zmq4f7QXKtqFHwcgYPgb1TxHqTpINFB9GBKtG5gHLzHg4v10NcGHdhPbKKfptTYFZUthqFy5xdMyno%2BhcRn%2BWZvAhu5CnGfOmzHwybyhbNCRnX%2B4wcjAZbXb8tyycXB2RbxSrNaxY3qVGBpjlXj4NO8QkGoZKp9I3rwnMCj&X-Amz-Signature=9462b7bed7f20e52149061cf379efff60b60e3b6fd154ca79e4cfd6c4d8e4f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYEIEDD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUvjAwgLm%2BlYASkNDgluBP%2Bs0pJ2lNK2gYryv6CJmoDAIgNuyzftw72q0w4QB3rn7dmj8TEjukUTahfu0BsRzww%2F0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSX2t5KShCeEIyQsircA0ap1XCPb92QqqbwSiAPsEnssb%2B2RUITfOxfYfA5IExKocwTnXGrik7oeJU9a9XmGDaUN0vl5Tnxfu7Ti9CwjqgAcHDnKMrDP2J1bZjCqoAdSoMhVq0GJ1mMQ6KQu9ZbhBM2LqvBIE17FugaxZcOG2YPJ7j0oKGO%2BMYO%2FS8RJC7JYcO%2FRNXjgTkcHeujLHu6xRxPEEd487bYDRPXYVOKBVM%2BHU%2BI9BymLSJ0sn5sn6VDulXyzFTVZBkkOWH%2Fb%2BFO5V1b1uiG9ZDk%2FtKb%2BnlmO6pFFp5cSy5P7UxpB7rslt6oLSU4rItTmrWFdKpb76IgR7C0nc1SrEUZJh9IskWw5l%2FdM6kegyORxkDPkFfrDFVOTaWIN40wwXFGmTVwXbCJFr52G8JIBnnOKaFSnu3NZvfCVaQfIVUy35Wz0v1JsL5AXucSZ8oJBLpLx3NnlFqsfX8dhMuVngvqLeEwkFMTsBhYWgS%2BFnWgizoc%2Bhkx06v4gzlX2MQ78EPQb65hdzyO1t%2B8U8Fgfzku3xYWgU3LNx90qZGI1KZaWmtVBJdLS4oXMbpyAaLC%2BKAxf1pOT%2F%2Bsyz7CpqBvVyExwAs0IGBx0xpgLAEV3T7reaGvbsUZ9PFiv%2FZ5Xp090vFQiTYuMO7%2BvMMGOqUBwWhe6vbB6n%2FxFMMq5O1qztnGIs0d%2BJHMXAIhMaZ%2BZEcoxRhzm0b43zmq4f7QXKtqFHwcgYPgb1TxHqTpINFB9GBKtG5gHLzHg4v10NcGHdhPbKKfptTYFZUthqFy5xdMyno%2BhcRn%2BWZvAhu5CnGfOmzHwybyhbNCRnX%2B4wcjAZbXb8tyycXB2RbxSrNaxY3qVGBpjlXj4NO8QkGoZKp9I3rwnMCj&X-Amz-Signature=bf6049366f48db61500b3ddd040f607e26958ea8502754bdca329519b0c28d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYEIEDD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUvjAwgLm%2BlYASkNDgluBP%2Bs0pJ2lNK2gYryv6CJmoDAIgNuyzftw72q0w4QB3rn7dmj8TEjukUTahfu0BsRzww%2F0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSX2t5KShCeEIyQsircA0ap1XCPb92QqqbwSiAPsEnssb%2B2RUITfOxfYfA5IExKocwTnXGrik7oeJU9a9XmGDaUN0vl5Tnxfu7Ti9CwjqgAcHDnKMrDP2J1bZjCqoAdSoMhVq0GJ1mMQ6KQu9ZbhBM2LqvBIE17FugaxZcOG2YPJ7j0oKGO%2BMYO%2FS8RJC7JYcO%2FRNXjgTkcHeujLHu6xRxPEEd487bYDRPXYVOKBVM%2BHU%2BI9BymLSJ0sn5sn6VDulXyzFTVZBkkOWH%2Fb%2BFO5V1b1uiG9ZDk%2FtKb%2BnlmO6pFFp5cSy5P7UxpB7rslt6oLSU4rItTmrWFdKpb76IgR7C0nc1SrEUZJh9IskWw5l%2FdM6kegyORxkDPkFfrDFVOTaWIN40wwXFGmTVwXbCJFr52G8JIBnnOKaFSnu3NZvfCVaQfIVUy35Wz0v1JsL5AXucSZ8oJBLpLx3NnlFqsfX8dhMuVngvqLeEwkFMTsBhYWgS%2BFnWgizoc%2Bhkx06v4gzlX2MQ78EPQb65hdzyO1t%2B8U8Fgfzku3xYWgU3LNx90qZGI1KZaWmtVBJdLS4oXMbpyAaLC%2BKAxf1pOT%2F%2Bsyz7CpqBvVyExwAs0IGBx0xpgLAEV3T7reaGvbsUZ9PFiv%2FZ5Xp090vFQiTYuMO7%2BvMMGOqUBwWhe6vbB6n%2FxFMMq5O1qztnGIs0d%2BJHMXAIhMaZ%2BZEcoxRhzm0b43zmq4f7QXKtqFHwcgYPgb1TxHqTpINFB9GBKtG5gHLzHg4v10NcGHdhPbKKfptTYFZUthqFy5xdMyno%2BhcRn%2BWZvAhu5CnGfOmzHwybyhbNCRnX%2B4wcjAZbXb8tyycXB2RbxSrNaxY3qVGBpjlXj4NO8QkGoZKp9I3rwnMCj&X-Amz-Signature=4b858f83ff0fdc43ce30e80b94ad9db1b558fffab68c1e1f47db38e5f32dfb6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
