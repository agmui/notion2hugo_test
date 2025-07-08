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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7OQPVI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4BkrQqCGQXtY7i8I3uO0gd8hbFXTIee%2Fkcj7BDTCdQAiEAj10VfDRhtzKwfw2m6SX68ipRejmyWbqI9htkVzAf0ukqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLWQAYlbQdSw2ESgCrcAxgDl6eb1EIoOxXkKdJukWr5uCr6Y6%2BNNxQvLOQeME7TN2zUZGRFj40uHNZx51AtIN9fRbt%2B8H3UppoaQZIj64nIgFBgW%2BvYhSkoUhCIlzvF3LXzdOEmqqjIOq8mquubp59rSPBY5rOfHuzPALYZJPNncQft9vUON1zX7s4ZKUEkhbNWBgf1lkh10SAJuUbKMrgqM%2BprcKwdkfmGbMuJxpbsN6sSYOY1hsyoCntAf9IR%2FVEkOLszdilw1ySR8Uo5Smd5D8JGpR3MKqHgXg4xk2zgW%2FotgHjHP4T%2FStjxxR3YCMPBiwfRwXAgsL7gvyLrETC0urY3I4lipqEA47eGrvxXoEIIlv12KA00Waxl5RZCztneFdYI6Wu4gbiDdem7XdmV7FefFNO007NSsWF4V7OYmYheX7rDlaZtdmjbapKs%2FoMt5Yxrlg387pm4wFNX6YQdWp8%2Br8EaKlwPHhBc7Qrn0sD4zxmFHAKZqcqtLu9y6aJ6pR421aNDVlxocv8ze7FU%2FIYU5bi6mTG65uJHwKlrS%2FNcHNCbutSfTXQhMp1yEPg1GAL3VDXpUHOdjbsLpGRhrkhB3HFtPAtsXU4DBpEhpoWpZbwkO0HyX5vFnAHSXdsm%2BDREi1EjwOYzMImutcMGOqUBYVt6141%2FJzlQ%2BbZ3ozO8nxNawGPemweY85z%2BV8ZCls0f1JAx4H0ZfKWO3u%2BTnEvfZzGu1M6JAv9KAjj9MiftRjEvIfixM312qi2vXY1mFCe2WMxdJHz%2FMaTS79MO7YfkaDDe1t87CCm8F82QjADpcwFx3nSmNANVz%2FNM1JJvoCkroKQcude18BiGML4fHTktASIcaN5FOlGvZfXrS%2Fi%2BPz2I3mIX&X-Amz-Signature=4da544f5b48e3f934a5b917b3cd6d9c6415ad03bdf51d4ea13ba685afad40c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7OQPVI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4BkrQqCGQXtY7i8I3uO0gd8hbFXTIee%2Fkcj7BDTCdQAiEAj10VfDRhtzKwfw2m6SX68ipRejmyWbqI9htkVzAf0ukqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLWQAYlbQdSw2ESgCrcAxgDl6eb1EIoOxXkKdJukWr5uCr6Y6%2BNNxQvLOQeME7TN2zUZGRFj40uHNZx51AtIN9fRbt%2B8H3UppoaQZIj64nIgFBgW%2BvYhSkoUhCIlzvF3LXzdOEmqqjIOq8mquubp59rSPBY5rOfHuzPALYZJPNncQft9vUON1zX7s4ZKUEkhbNWBgf1lkh10SAJuUbKMrgqM%2BprcKwdkfmGbMuJxpbsN6sSYOY1hsyoCntAf9IR%2FVEkOLszdilw1ySR8Uo5Smd5D8JGpR3MKqHgXg4xk2zgW%2FotgHjHP4T%2FStjxxR3YCMPBiwfRwXAgsL7gvyLrETC0urY3I4lipqEA47eGrvxXoEIIlv12KA00Waxl5RZCztneFdYI6Wu4gbiDdem7XdmV7FefFNO007NSsWF4V7OYmYheX7rDlaZtdmjbapKs%2FoMt5Yxrlg387pm4wFNX6YQdWp8%2Br8EaKlwPHhBc7Qrn0sD4zxmFHAKZqcqtLu9y6aJ6pR421aNDVlxocv8ze7FU%2FIYU5bi6mTG65uJHwKlrS%2FNcHNCbutSfTXQhMp1yEPg1GAL3VDXpUHOdjbsLpGRhrkhB3HFtPAtsXU4DBpEhpoWpZbwkO0HyX5vFnAHSXdsm%2BDREi1EjwOYzMImutcMGOqUBYVt6141%2FJzlQ%2BbZ3ozO8nxNawGPemweY85z%2BV8ZCls0f1JAx4H0ZfKWO3u%2BTnEvfZzGu1M6JAv9KAjj9MiftRjEvIfixM312qi2vXY1mFCe2WMxdJHz%2FMaTS79MO7YfkaDDe1t87CCm8F82QjADpcwFx3nSmNANVz%2FNM1JJvoCkroKQcude18BiGML4fHTktASIcaN5FOlGvZfXrS%2Fi%2BPz2I3mIX&X-Amz-Signature=339dd3570c836f97304fa6db0da1591d9920028ab43b45e1d6a3bfaeabd9afc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7OQPVI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4BkrQqCGQXtY7i8I3uO0gd8hbFXTIee%2Fkcj7BDTCdQAiEAj10VfDRhtzKwfw2m6SX68ipRejmyWbqI9htkVzAf0ukqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLWQAYlbQdSw2ESgCrcAxgDl6eb1EIoOxXkKdJukWr5uCr6Y6%2BNNxQvLOQeME7TN2zUZGRFj40uHNZx51AtIN9fRbt%2B8H3UppoaQZIj64nIgFBgW%2BvYhSkoUhCIlzvF3LXzdOEmqqjIOq8mquubp59rSPBY5rOfHuzPALYZJPNncQft9vUON1zX7s4ZKUEkhbNWBgf1lkh10SAJuUbKMrgqM%2BprcKwdkfmGbMuJxpbsN6sSYOY1hsyoCntAf9IR%2FVEkOLszdilw1ySR8Uo5Smd5D8JGpR3MKqHgXg4xk2zgW%2FotgHjHP4T%2FStjxxR3YCMPBiwfRwXAgsL7gvyLrETC0urY3I4lipqEA47eGrvxXoEIIlv12KA00Waxl5RZCztneFdYI6Wu4gbiDdem7XdmV7FefFNO007NSsWF4V7OYmYheX7rDlaZtdmjbapKs%2FoMt5Yxrlg387pm4wFNX6YQdWp8%2Br8EaKlwPHhBc7Qrn0sD4zxmFHAKZqcqtLu9y6aJ6pR421aNDVlxocv8ze7FU%2FIYU5bi6mTG65uJHwKlrS%2FNcHNCbutSfTXQhMp1yEPg1GAL3VDXpUHOdjbsLpGRhrkhB3HFtPAtsXU4DBpEhpoWpZbwkO0HyX5vFnAHSXdsm%2BDREi1EjwOYzMImutcMGOqUBYVt6141%2FJzlQ%2BbZ3ozO8nxNawGPemweY85z%2BV8ZCls0f1JAx4H0ZfKWO3u%2BTnEvfZzGu1M6JAv9KAjj9MiftRjEvIfixM312qi2vXY1mFCe2WMxdJHz%2FMaTS79MO7YfkaDDe1t87CCm8F82QjADpcwFx3nSmNANVz%2FNM1JJvoCkroKQcude18BiGML4fHTktASIcaN5FOlGvZfXrS%2Fi%2BPz2I3mIX&X-Amz-Signature=968b9ec75a2cc864e755c267ad22801a3c6e951783014814a4af2b9ad34eb770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7OQPVI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4BkrQqCGQXtY7i8I3uO0gd8hbFXTIee%2Fkcj7BDTCdQAiEAj10VfDRhtzKwfw2m6SX68ipRejmyWbqI9htkVzAf0ukqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLWQAYlbQdSw2ESgCrcAxgDl6eb1EIoOxXkKdJukWr5uCr6Y6%2BNNxQvLOQeME7TN2zUZGRFj40uHNZx51AtIN9fRbt%2B8H3UppoaQZIj64nIgFBgW%2BvYhSkoUhCIlzvF3LXzdOEmqqjIOq8mquubp59rSPBY5rOfHuzPALYZJPNncQft9vUON1zX7s4ZKUEkhbNWBgf1lkh10SAJuUbKMrgqM%2BprcKwdkfmGbMuJxpbsN6sSYOY1hsyoCntAf9IR%2FVEkOLszdilw1ySR8Uo5Smd5D8JGpR3MKqHgXg4xk2zgW%2FotgHjHP4T%2FStjxxR3YCMPBiwfRwXAgsL7gvyLrETC0urY3I4lipqEA47eGrvxXoEIIlv12KA00Waxl5RZCztneFdYI6Wu4gbiDdem7XdmV7FefFNO007NSsWF4V7OYmYheX7rDlaZtdmjbapKs%2FoMt5Yxrlg387pm4wFNX6YQdWp8%2Br8EaKlwPHhBc7Qrn0sD4zxmFHAKZqcqtLu9y6aJ6pR421aNDVlxocv8ze7FU%2FIYU5bi6mTG65uJHwKlrS%2FNcHNCbutSfTXQhMp1yEPg1GAL3VDXpUHOdjbsLpGRhrkhB3HFtPAtsXU4DBpEhpoWpZbwkO0HyX5vFnAHSXdsm%2BDREi1EjwOYzMImutcMGOqUBYVt6141%2FJzlQ%2BbZ3ozO8nxNawGPemweY85z%2BV8ZCls0f1JAx4H0ZfKWO3u%2BTnEvfZzGu1M6JAv9KAjj9MiftRjEvIfixM312qi2vXY1mFCe2WMxdJHz%2FMaTS79MO7YfkaDDe1t87CCm8F82QjADpcwFx3nSmNANVz%2FNM1JJvoCkroKQcude18BiGML4fHTktASIcaN5FOlGvZfXrS%2Fi%2BPz2I3mIX&X-Amz-Signature=5b102a33f29b7891016893dd42687f7b4d54a69f49ccaa32b88b31158734794d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7OQPVI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4BkrQqCGQXtY7i8I3uO0gd8hbFXTIee%2Fkcj7BDTCdQAiEAj10VfDRhtzKwfw2m6SX68ipRejmyWbqI9htkVzAf0ukqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLWQAYlbQdSw2ESgCrcAxgDl6eb1EIoOxXkKdJukWr5uCr6Y6%2BNNxQvLOQeME7TN2zUZGRFj40uHNZx51AtIN9fRbt%2B8H3UppoaQZIj64nIgFBgW%2BvYhSkoUhCIlzvF3LXzdOEmqqjIOq8mquubp59rSPBY5rOfHuzPALYZJPNncQft9vUON1zX7s4ZKUEkhbNWBgf1lkh10SAJuUbKMrgqM%2BprcKwdkfmGbMuJxpbsN6sSYOY1hsyoCntAf9IR%2FVEkOLszdilw1ySR8Uo5Smd5D8JGpR3MKqHgXg4xk2zgW%2FotgHjHP4T%2FStjxxR3YCMPBiwfRwXAgsL7gvyLrETC0urY3I4lipqEA47eGrvxXoEIIlv12KA00Waxl5RZCztneFdYI6Wu4gbiDdem7XdmV7FefFNO007NSsWF4V7OYmYheX7rDlaZtdmjbapKs%2FoMt5Yxrlg387pm4wFNX6YQdWp8%2Br8EaKlwPHhBc7Qrn0sD4zxmFHAKZqcqtLu9y6aJ6pR421aNDVlxocv8ze7FU%2FIYU5bi6mTG65uJHwKlrS%2FNcHNCbutSfTXQhMp1yEPg1GAL3VDXpUHOdjbsLpGRhrkhB3HFtPAtsXU4DBpEhpoWpZbwkO0HyX5vFnAHSXdsm%2BDREi1EjwOYzMImutcMGOqUBYVt6141%2FJzlQ%2BbZ3ozO8nxNawGPemweY85z%2BV8ZCls0f1JAx4H0ZfKWO3u%2BTnEvfZzGu1M6JAv9KAjj9MiftRjEvIfixM312qi2vXY1mFCe2WMxdJHz%2FMaTS79MO7YfkaDDe1t87CCm8F82QjADpcwFx3nSmNANVz%2FNM1JJvoCkroKQcude18BiGML4fHTktASIcaN5FOlGvZfXrS%2Fi%2BPz2I3mIX&X-Amz-Signature=72ddea140130408d27d114abe839246160aeacf51560af5f3ec512ff0e4b8dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7OQPVI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4BkrQqCGQXtY7i8I3uO0gd8hbFXTIee%2Fkcj7BDTCdQAiEAj10VfDRhtzKwfw2m6SX68ipRejmyWbqI9htkVzAf0ukqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLWQAYlbQdSw2ESgCrcAxgDl6eb1EIoOxXkKdJukWr5uCr6Y6%2BNNxQvLOQeME7TN2zUZGRFj40uHNZx51AtIN9fRbt%2B8H3UppoaQZIj64nIgFBgW%2BvYhSkoUhCIlzvF3LXzdOEmqqjIOq8mquubp59rSPBY5rOfHuzPALYZJPNncQft9vUON1zX7s4ZKUEkhbNWBgf1lkh10SAJuUbKMrgqM%2BprcKwdkfmGbMuJxpbsN6sSYOY1hsyoCntAf9IR%2FVEkOLszdilw1ySR8Uo5Smd5D8JGpR3MKqHgXg4xk2zgW%2FotgHjHP4T%2FStjxxR3YCMPBiwfRwXAgsL7gvyLrETC0urY3I4lipqEA47eGrvxXoEIIlv12KA00Waxl5RZCztneFdYI6Wu4gbiDdem7XdmV7FefFNO007NSsWF4V7OYmYheX7rDlaZtdmjbapKs%2FoMt5Yxrlg387pm4wFNX6YQdWp8%2Br8EaKlwPHhBc7Qrn0sD4zxmFHAKZqcqtLu9y6aJ6pR421aNDVlxocv8ze7FU%2FIYU5bi6mTG65uJHwKlrS%2FNcHNCbutSfTXQhMp1yEPg1GAL3VDXpUHOdjbsLpGRhrkhB3HFtPAtsXU4DBpEhpoWpZbwkO0HyX5vFnAHSXdsm%2BDREi1EjwOYzMImutcMGOqUBYVt6141%2FJzlQ%2BbZ3ozO8nxNawGPemweY85z%2BV8ZCls0f1JAx4H0ZfKWO3u%2BTnEvfZzGu1M6JAv9KAjj9MiftRjEvIfixM312qi2vXY1mFCe2WMxdJHz%2FMaTS79MO7YfkaDDe1t87CCm8F82QjADpcwFx3nSmNANVz%2FNM1JJvoCkroKQcude18BiGML4fHTktASIcaN5FOlGvZfXrS%2Fi%2BPz2I3mIX&X-Amz-Signature=de53c8b795728b7554cf0e1494032919729a714c7b8f31d5e9a046c79f91e55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
