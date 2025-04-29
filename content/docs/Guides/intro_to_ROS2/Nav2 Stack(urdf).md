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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN772C5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJqKpEZhLM2igShOLEWMGAIf2QwjIeFKUQ5bnV%2FjTwVAiEAvailO%2BjotMytU7SJwrJUWpeLBaqzbCob0d%2BwWh%2FoqlQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMChIIiWafOa3lPK7yrcA7xw2f3wIRt3SQVWe46CRuDINR096uEHYiNjYQW7lgQtGb1AtxHgmKXGM%2FB0xxxY4UxbNDjeqixDRxb7W5nVtKtyjH%2FCkZWrAWAHDCC7yWf0qQM93kw0JVSIbIpeYhz%2FGSU45WGAqUzgLAmtlbo9rCrzqdOyjKuN5jOXc%2FDi6QWfMOi8yAT7%2FrZUuXh2hum3tBDt8GFq64K%2FGjl%2BqHFUu7xO9zcrk7SRt90vaqt6jE8KQtTLKocV4DHCNC5iycCsyxlLUeOTBjgv5p7QGCBPYs8agSIf41lGR9%2BcKDZuS1Mj2t1meKM62ER718So9wih24TNc7Yyns6sVTh7Onx82QXDt2sPcfliQVTqP4kPp9wYc4YbkbH0ECKjG6CU8pwG5YjkA77VYCkZOa4Y6wdyP4LAaYFgap6ecDCjhgGZVTmRI%2BSPFimY5OTY31UJ4wdkwbq7z2OxofvQ3b3Wq9%2BulLcTJwHDiiMixyAmp%2BHHY7koGMGe0a0Jv2MDDRC3244HlXcJWOuqJW8664cvqj0cwrGTh%2BhWmlC9I%2FAMuN0DM7P%2BvV4oT%2FtpmcQAmbVUAZHrAHWNRq9Nr8TLJLbe7kKIsDO0ruhM9fKBjdb8dRJGAoGi1kF5A1Sd1RSp0XW8MNTuwcAGOqUBBiUUMn1mW8evwc3I%2FptLt4pnVFRMa5rdkB343kVL3JtVJhZsg9q8jiom6mJaU7oi3PcqjDAai3DLlZLgn6vyApF%2FUlxqP2R6qXBhjl64kGU94NjBCwFz1D4fta2d5TFsXhgn3V3qYVgPNkgUG4zJZ6vbI2G5H5xx9bhvs6OGfPN8ZMGTc1B3F9FWFuFyDpmxM0gTpoZuab%2ByimJ08GwwW95mhKJL&X-Amz-Signature=1113aa7982b54abdda9efebab0ff0843a114c96a4c3dff34eb7f95038a5314c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN772C5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJqKpEZhLM2igShOLEWMGAIf2QwjIeFKUQ5bnV%2FjTwVAiEAvailO%2BjotMytU7SJwrJUWpeLBaqzbCob0d%2BwWh%2FoqlQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMChIIiWafOa3lPK7yrcA7xw2f3wIRt3SQVWe46CRuDINR096uEHYiNjYQW7lgQtGb1AtxHgmKXGM%2FB0xxxY4UxbNDjeqixDRxb7W5nVtKtyjH%2FCkZWrAWAHDCC7yWf0qQM93kw0JVSIbIpeYhz%2FGSU45WGAqUzgLAmtlbo9rCrzqdOyjKuN5jOXc%2FDi6QWfMOi8yAT7%2FrZUuXh2hum3tBDt8GFq64K%2FGjl%2BqHFUu7xO9zcrk7SRt90vaqt6jE8KQtTLKocV4DHCNC5iycCsyxlLUeOTBjgv5p7QGCBPYs8agSIf41lGR9%2BcKDZuS1Mj2t1meKM62ER718So9wih24TNc7Yyns6sVTh7Onx82QXDt2sPcfliQVTqP4kPp9wYc4YbkbH0ECKjG6CU8pwG5YjkA77VYCkZOa4Y6wdyP4LAaYFgap6ecDCjhgGZVTmRI%2BSPFimY5OTY31UJ4wdkwbq7z2OxofvQ3b3Wq9%2BulLcTJwHDiiMixyAmp%2BHHY7koGMGe0a0Jv2MDDRC3244HlXcJWOuqJW8664cvqj0cwrGTh%2BhWmlC9I%2FAMuN0DM7P%2BvV4oT%2FtpmcQAmbVUAZHrAHWNRq9Nr8TLJLbe7kKIsDO0ruhM9fKBjdb8dRJGAoGi1kF5A1Sd1RSp0XW8MNTuwcAGOqUBBiUUMn1mW8evwc3I%2FptLt4pnVFRMa5rdkB343kVL3JtVJhZsg9q8jiom6mJaU7oi3PcqjDAai3DLlZLgn6vyApF%2FUlxqP2R6qXBhjl64kGU94NjBCwFz1D4fta2d5TFsXhgn3V3qYVgPNkgUG4zJZ6vbI2G5H5xx9bhvs6OGfPN8ZMGTc1B3F9FWFuFyDpmxM0gTpoZuab%2ByimJ08GwwW95mhKJL&X-Amz-Signature=a2a067f9ad0278cdcc30160c8569e71d07231f1603187a92622865655bd454a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN772C5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJqKpEZhLM2igShOLEWMGAIf2QwjIeFKUQ5bnV%2FjTwVAiEAvailO%2BjotMytU7SJwrJUWpeLBaqzbCob0d%2BwWh%2FoqlQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMChIIiWafOa3lPK7yrcA7xw2f3wIRt3SQVWe46CRuDINR096uEHYiNjYQW7lgQtGb1AtxHgmKXGM%2FB0xxxY4UxbNDjeqixDRxb7W5nVtKtyjH%2FCkZWrAWAHDCC7yWf0qQM93kw0JVSIbIpeYhz%2FGSU45WGAqUzgLAmtlbo9rCrzqdOyjKuN5jOXc%2FDi6QWfMOi8yAT7%2FrZUuXh2hum3tBDt8GFq64K%2FGjl%2BqHFUu7xO9zcrk7SRt90vaqt6jE8KQtTLKocV4DHCNC5iycCsyxlLUeOTBjgv5p7QGCBPYs8agSIf41lGR9%2BcKDZuS1Mj2t1meKM62ER718So9wih24TNc7Yyns6sVTh7Onx82QXDt2sPcfliQVTqP4kPp9wYc4YbkbH0ECKjG6CU8pwG5YjkA77VYCkZOa4Y6wdyP4LAaYFgap6ecDCjhgGZVTmRI%2BSPFimY5OTY31UJ4wdkwbq7z2OxofvQ3b3Wq9%2BulLcTJwHDiiMixyAmp%2BHHY7koGMGe0a0Jv2MDDRC3244HlXcJWOuqJW8664cvqj0cwrGTh%2BhWmlC9I%2FAMuN0DM7P%2BvV4oT%2FtpmcQAmbVUAZHrAHWNRq9Nr8TLJLbe7kKIsDO0ruhM9fKBjdb8dRJGAoGi1kF5A1Sd1RSp0XW8MNTuwcAGOqUBBiUUMn1mW8evwc3I%2FptLt4pnVFRMa5rdkB343kVL3JtVJhZsg9q8jiom6mJaU7oi3PcqjDAai3DLlZLgn6vyApF%2FUlxqP2R6qXBhjl64kGU94NjBCwFz1D4fta2d5TFsXhgn3V3qYVgPNkgUG4zJZ6vbI2G5H5xx9bhvs6OGfPN8ZMGTc1B3F9FWFuFyDpmxM0gTpoZuab%2ByimJ08GwwW95mhKJL&X-Amz-Signature=3915e00b686f6b78dafcf3f3e5d891fdaff6c05c1a4f64d61a588df25a6993b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN772C5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJqKpEZhLM2igShOLEWMGAIf2QwjIeFKUQ5bnV%2FjTwVAiEAvailO%2BjotMytU7SJwrJUWpeLBaqzbCob0d%2BwWh%2FoqlQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMChIIiWafOa3lPK7yrcA7xw2f3wIRt3SQVWe46CRuDINR096uEHYiNjYQW7lgQtGb1AtxHgmKXGM%2FB0xxxY4UxbNDjeqixDRxb7W5nVtKtyjH%2FCkZWrAWAHDCC7yWf0qQM93kw0JVSIbIpeYhz%2FGSU45WGAqUzgLAmtlbo9rCrzqdOyjKuN5jOXc%2FDi6QWfMOi8yAT7%2FrZUuXh2hum3tBDt8GFq64K%2FGjl%2BqHFUu7xO9zcrk7SRt90vaqt6jE8KQtTLKocV4DHCNC5iycCsyxlLUeOTBjgv5p7QGCBPYs8agSIf41lGR9%2BcKDZuS1Mj2t1meKM62ER718So9wih24TNc7Yyns6sVTh7Onx82QXDt2sPcfliQVTqP4kPp9wYc4YbkbH0ECKjG6CU8pwG5YjkA77VYCkZOa4Y6wdyP4LAaYFgap6ecDCjhgGZVTmRI%2BSPFimY5OTY31UJ4wdkwbq7z2OxofvQ3b3Wq9%2BulLcTJwHDiiMixyAmp%2BHHY7koGMGe0a0Jv2MDDRC3244HlXcJWOuqJW8664cvqj0cwrGTh%2BhWmlC9I%2FAMuN0DM7P%2BvV4oT%2FtpmcQAmbVUAZHrAHWNRq9Nr8TLJLbe7kKIsDO0ruhM9fKBjdb8dRJGAoGi1kF5A1Sd1RSp0XW8MNTuwcAGOqUBBiUUMn1mW8evwc3I%2FptLt4pnVFRMa5rdkB343kVL3JtVJhZsg9q8jiom6mJaU7oi3PcqjDAai3DLlZLgn6vyApF%2FUlxqP2R6qXBhjl64kGU94NjBCwFz1D4fta2d5TFsXhgn3V3qYVgPNkgUG4zJZ6vbI2G5H5xx9bhvs6OGfPN8ZMGTc1B3F9FWFuFyDpmxM0gTpoZuab%2ByimJ08GwwW95mhKJL&X-Amz-Signature=1b19e5a4e8cde5a952c382058029c67101c877ba3f3262416fa93c1088db3516&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN772C5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJqKpEZhLM2igShOLEWMGAIf2QwjIeFKUQ5bnV%2FjTwVAiEAvailO%2BjotMytU7SJwrJUWpeLBaqzbCob0d%2BwWh%2FoqlQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMChIIiWafOa3lPK7yrcA7xw2f3wIRt3SQVWe46CRuDINR096uEHYiNjYQW7lgQtGb1AtxHgmKXGM%2FB0xxxY4UxbNDjeqixDRxb7W5nVtKtyjH%2FCkZWrAWAHDCC7yWf0qQM93kw0JVSIbIpeYhz%2FGSU45WGAqUzgLAmtlbo9rCrzqdOyjKuN5jOXc%2FDi6QWfMOi8yAT7%2FrZUuXh2hum3tBDt8GFq64K%2FGjl%2BqHFUu7xO9zcrk7SRt90vaqt6jE8KQtTLKocV4DHCNC5iycCsyxlLUeOTBjgv5p7QGCBPYs8agSIf41lGR9%2BcKDZuS1Mj2t1meKM62ER718So9wih24TNc7Yyns6sVTh7Onx82QXDt2sPcfliQVTqP4kPp9wYc4YbkbH0ECKjG6CU8pwG5YjkA77VYCkZOa4Y6wdyP4LAaYFgap6ecDCjhgGZVTmRI%2BSPFimY5OTY31UJ4wdkwbq7z2OxofvQ3b3Wq9%2BulLcTJwHDiiMixyAmp%2BHHY7koGMGe0a0Jv2MDDRC3244HlXcJWOuqJW8664cvqj0cwrGTh%2BhWmlC9I%2FAMuN0DM7P%2BvV4oT%2FtpmcQAmbVUAZHrAHWNRq9Nr8TLJLbe7kKIsDO0ruhM9fKBjdb8dRJGAoGi1kF5A1Sd1RSp0XW8MNTuwcAGOqUBBiUUMn1mW8evwc3I%2FptLt4pnVFRMa5rdkB343kVL3JtVJhZsg9q8jiom6mJaU7oi3PcqjDAai3DLlZLgn6vyApF%2FUlxqP2R6qXBhjl64kGU94NjBCwFz1D4fta2d5TFsXhgn3V3qYVgPNkgUG4zJZ6vbI2G5H5xx9bhvs6OGfPN8ZMGTc1B3F9FWFuFyDpmxM0gTpoZuab%2ByimJ08GwwW95mhKJL&X-Amz-Signature=71ad9ad6513ebac09d0d2a638d597ee8014a0641953998260a6c9232bedff7bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYN772C5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJqKpEZhLM2igShOLEWMGAIf2QwjIeFKUQ5bnV%2FjTwVAiEAvailO%2BjotMytU7SJwrJUWpeLBaqzbCob0d%2BwWh%2FoqlQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMChIIiWafOa3lPK7yrcA7xw2f3wIRt3SQVWe46CRuDINR096uEHYiNjYQW7lgQtGb1AtxHgmKXGM%2FB0xxxY4UxbNDjeqixDRxb7W5nVtKtyjH%2FCkZWrAWAHDCC7yWf0qQM93kw0JVSIbIpeYhz%2FGSU45WGAqUzgLAmtlbo9rCrzqdOyjKuN5jOXc%2FDi6QWfMOi8yAT7%2FrZUuXh2hum3tBDt8GFq64K%2FGjl%2BqHFUu7xO9zcrk7SRt90vaqt6jE8KQtTLKocV4DHCNC5iycCsyxlLUeOTBjgv5p7QGCBPYs8agSIf41lGR9%2BcKDZuS1Mj2t1meKM62ER718So9wih24TNc7Yyns6sVTh7Onx82QXDt2sPcfliQVTqP4kPp9wYc4YbkbH0ECKjG6CU8pwG5YjkA77VYCkZOa4Y6wdyP4LAaYFgap6ecDCjhgGZVTmRI%2BSPFimY5OTY31UJ4wdkwbq7z2OxofvQ3b3Wq9%2BulLcTJwHDiiMixyAmp%2BHHY7koGMGe0a0Jv2MDDRC3244HlXcJWOuqJW8664cvqj0cwrGTh%2BhWmlC9I%2FAMuN0DM7P%2BvV4oT%2FtpmcQAmbVUAZHrAHWNRq9Nr8TLJLbe7kKIsDO0ruhM9fKBjdb8dRJGAoGi1kF5A1Sd1RSp0XW8MNTuwcAGOqUBBiUUMn1mW8evwc3I%2FptLt4pnVFRMa5rdkB343kVL3JtVJhZsg9q8jiom6mJaU7oi3PcqjDAai3DLlZLgn6vyApF%2FUlxqP2R6qXBhjl64kGU94NjBCwFz1D4fta2d5TFsXhgn3V3qYVgPNkgUG4zJZ6vbI2G5H5xx9bhvs6OGfPN8ZMGTc1B3F9FWFuFyDpmxM0gTpoZuab%2ByimJ08GwwW95mhKJL&X-Amz-Signature=2c7e28bc17b5e25b65c175baa69a2a1833e09b7bb30474a555b11e04d6273fea&X-Amz-SignedHeaders=host&x-id=GetObject)
