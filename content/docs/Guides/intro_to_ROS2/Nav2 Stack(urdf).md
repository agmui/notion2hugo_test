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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56ZNCUQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIER657cTFMWrax51otFgsyX%2FOgTO9mSr%2Bnm3cDJVWjrBAiB0C8xico60IcetJarXVbKsmKMn4%2FIDacad9vXUzRBEKyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMhpWGG%2F0q6gJJ5HzSKtwDRK95UpsusnTxPkmNe4jeUxvixiE6diFKd69i0dIXSxOaWL2w%2FwrC9YZq%2B4r7%2FhUQcJax49noq2I4omSYV9kyHXl5Yr0CGp3bw5W3pcDl85AE4WrQHLs8%2BfwolCYf%2BwDba%2FiB4tISmt9r3Z9%2FycinAiwF77cIMQp9EbOH6cx%2Be071fe6P%2Fif0uQ3dYhQaBVyCOutwbzmXM790flmWVzYOBR6ZfEILDk6YpEawUO%2FqcTGzFF8wDNCVOwOaFuJlQE8ZjaTaDU2jxIGQWI6PyH0hcumD5dKK%2BJ5AvbQp4tOtrz1TgibBpW%2BQJncvzVn0SoDZfwFXl6533pc8PYNI3OIQVg0beEAwaF1n22Y9xyKVoET%2F%2BGSqekqpTDE2UDFSJNqjYqqedTinpVDTGzSZl7Rs%2FAKbwWU%2FINxkDyiMZTiW%2BEy0Z3dMPS7Jg5CpnQ9gkC0OHeC8XND24y3nZacGVW%2BjQM5UJ3A6m2BUZCgPx8fKctFfSAo5uuZ1Jpc%2FN0GVcFoUcEtjs14EWtqyZFJXsIcNq31oEWYtNOrMeluZsaLHZThlBemwq9ZVyrgu4%2B1aOl%2FuoCZmLjbfDTm84vykxp8%2Fur6%2FFgTtoq9MO6qTm728kTZ3wUMY8u2tbtevtfwwjOT4vQY6pgFXuPJKv4y0wB2PO1wwDqm70quKBVEjaNViAe28YrNiE%2BYc%2BrtLmcOVLsvYrFXpMrsi6q6Ys5W4ICJbbfedb2C%2F7eX%2FWaIsdcwURusCotqnorXYGU%2FtcWUesEOEO4Z%2FmtP%2FvTlx2onOLTgkxvpqNri9LMubXFifwcYbGUcelo8WnAP9FRKHRTwN93RdBwVZoHpQ85rRspIOluh%2F3dvKefoVqZgEDc11&X-Amz-Signature=01fbd4bd45b2c29a31d4018a7f2037d62d9f9ebde840d2b4a87d052b5eb5e137&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56ZNCUQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIER657cTFMWrax51otFgsyX%2FOgTO9mSr%2Bnm3cDJVWjrBAiB0C8xico60IcetJarXVbKsmKMn4%2FIDacad9vXUzRBEKyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMhpWGG%2F0q6gJJ5HzSKtwDRK95UpsusnTxPkmNe4jeUxvixiE6diFKd69i0dIXSxOaWL2w%2FwrC9YZq%2B4r7%2FhUQcJax49noq2I4omSYV9kyHXl5Yr0CGp3bw5W3pcDl85AE4WrQHLs8%2BfwolCYf%2BwDba%2FiB4tISmt9r3Z9%2FycinAiwF77cIMQp9EbOH6cx%2Be071fe6P%2Fif0uQ3dYhQaBVyCOutwbzmXM790flmWVzYOBR6ZfEILDk6YpEawUO%2FqcTGzFF8wDNCVOwOaFuJlQE8ZjaTaDU2jxIGQWI6PyH0hcumD5dKK%2BJ5AvbQp4tOtrz1TgibBpW%2BQJncvzVn0SoDZfwFXl6533pc8PYNI3OIQVg0beEAwaF1n22Y9xyKVoET%2F%2BGSqekqpTDE2UDFSJNqjYqqedTinpVDTGzSZl7Rs%2FAKbwWU%2FINxkDyiMZTiW%2BEy0Z3dMPS7Jg5CpnQ9gkC0OHeC8XND24y3nZacGVW%2BjQM5UJ3A6m2BUZCgPx8fKctFfSAo5uuZ1Jpc%2FN0GVcFoUcEtjs14EWtqyZFJXsIcNq31oEWYtNOrMeluZsaLHZThlBemwq9ZVyrgu4%2B1aOl%2FuoCZmLjbfDTm84vykxp8%2Fur6%2FFgTtoq9MO6qTm728kTZ3wUMY8u2tbtevtfwwjOT4vQY6pgFXuPJKv4y0wB2PO1wwDqm70quKBVEjaNViAe28YrNiE%2BYc%2BrtLmcOVLsvYrFXpMrsi6q6Ys5W4ICJbbfedb2C%2F7eX%2FWaIsdcwURusCotqnorXYGU%2FtcWUesEOEO4Z%2FmtP%2FvTlx2onOLTgkxvpqNri9LMubXFifwcYbGUcelo8WnAP9FRKHRTwN93RdBwVZoHpQ85rRspIOluh%2F3dvKefoVqZgEDc11&X-Amz-Signature=ea4eb044718cf751d3b6ea31dfa7b9aa8f955a7ce94a2737741e39030f169f63&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56ZNCUQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIER657cTFMWrax51otFgsyX%2FOgTO9mSr%2Bnm3cDJVWjrBAiB0C8xico60IcetJarXVbKsmKMn4%2FIDacad9vXUzRBEKyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMhpWGG%2F0q6gJJ5HzSKtwDRK95UpsusnTxPkmNe4jeUxvixiE6diFKd69i0dIXSxOaWL2w%2FwrC9YZq%2B4r7%2FhUQcJax49noq2I4omSYV9kyHXl5Yr0CGp3bw5W3pcDl85AE4WrQHLs8%2BfwolCYf%2BwDba%2FiB4tISmt9r3Z9%2FycinAiwF77cIMQp9EbOH6cx%2Be071fe6P%2Fif0uQ3dYhQaBVyCOutwbzmXM790flmWVzYOBR6ZfEILDk6YpEawUO%2FqcTGzFF8wDNCVOwOaFuJlQE8ZjaTaDU2jxIGQWI6PyH0hcumD5dKK%2BJ5AvbQp4tOtrz1TgibBpW%2BQJncvzVn0SoDZfwFXl6533pc8PYNI3OIQVg0beEAwaF1n22Y9xyKVoET%2F%2BGSqekqpTDE2UDFSJNqjYqqedTinpVDTGzSZl7Rs%2FAKbwWU%2FINxkDyiMZTiW%2BEy0Z3dMPS7Jg5CpnQ9gkC0OHeC8XND24y3nZacGVW%2BjQM5UJ3A6m2BUZCgPx8fKctFfSAo5uuZ1Jpc%2FN0GVcFoUcEtjs14EWtqyZFJXsIcNq31oEWYtNOrMeluZsaLHZThlBemwq9ZVyrgu4%2B1aOl%2FuoCZmLjbfDTm84vykxp8%2Fur6%2FFgTtoq9MO6qTm728kTZ3wUMY8u2tbtevtfwwjOT4vQY6pgFXuPJKv4y0wB2PO1wwDqm70quKBVEjaNViAe28YrNiE%2BYc%2BrtLmcOVLsvYrFXpMrsi6q6Ys5W4ICJbbfedb2C%2F7eX%2FWaIsdcwURusCotqnorXYGU%2FtcWUesEOEO4Z%2FmtP%2FvTlx2onOLTgkxvpqNri9LMubXFifwcYbGUcelo8WnAP9FRKHRTwN93RdBwVZoHpQ85rRspIOluh%2F3dvKefoVqZgEDc11&X-Amz-Signature=ee2f2470ed4dae9b08bf7e266ff4a25582a650e38ba4a7a43dfbb1f0c9716b72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56ZNCUQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIER657cTFMWrax51otFgsyX%2FOgTO9mSr%2Bnm3cDJVWjrBAiB0C8xico60IcetJarXVbKsmKMn4%2FIDacad9vXUzRBEKyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMhpWGG%2F0q6gJJ5HzSKtwDRK95UpsusnTxPkmNe4jeUxvixiE6diFKd69i0dIXSxOaWL2w%2FwrC9YZq%2B4r7%2FhUQcJax49noq2I4omSYV9kyHXl5Yr0CGp3bw5W3pcDl85AE4WrQHLs8%2BfwolCYf%2BwDba%2FiB4tISmt9r3Z9%2FycinAiwF77cIMQp9EbOH6cx%2Be071fe6P%2Fif0uQ3dYhQaBVyCOutwbzmXM790flmWVzYOBR6ZfEILDk6YpEawUO%2FqcTGzFF8wDNCVOwOaFuJlQE8ZjaTaDU2jxIGQWI6PyH0hcumD5dKK%2BJ5AvbQp4tOtrz1TgibBpW%2BQJncvzVn0SoDZfwFXl6533pc8PYNI3OIQVg0beEAwaF1n22Y9xyKVoET%2F%2BGSqekqpTDE2UDFSJNqjYqqedTinpVDTGzSZl7Rs%2FAKbwWU%2FINxkDyiMZTiW%2BEy0Z3dMPS7Jg5CpnQ9gkC0OHeC8XND24y3nZacGVW%2BjQM5UJ3A6m2BUZCgPx8fKctFfSAo5uuZ1Jpc%2FN0GVcFoUcEtjs14EWtqyZFJXsIcNq31oEWYtNOrMeluZsaLHZThlBemwq9ZVyrgu4%2B1aOl%2FuoCZmLjbfDTm84vykxp8%2Fur6%2FFgTtoq9MO6qTm728kTZ3wUMY8u2tbtevtfwwjOT4vQY6pgFXuPJKv4y0wB2PO1wwDqm70quKBVEjaNViAe28YrNiE%2BYc%2BrtLmcOVLsvYrFXpMrsi6q6Ys5W4ICJbbfedb2C%2F7eX%2FWaIsdcwURusCotqnorXYGU%2FtcWUesEOEO4Z%2FmtP%2FvTlx2onOLTgkxvpqNri9LMubXFifwcYbGUcelo8WnAP9FRKHRTwN93RdBwVZoHpQ85rRspIOluh%2F3dvKefoVqZgEDc11&X-Amz-Signature=46ba9417afddf35a839bece74ac941378209d7d299866366a4e0718c0d5ebfd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56ZNCUQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIER657cTFMWrax51otFgsyX%2FOgTO9mSr%2Bnm3cDJVWjrBAiB0C8xico60IcetJarXVbKsmKMn4%2FIDacad9vXUzRBEKyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMhpWGG%2F0q6gJJ5HzSKtwDRK95UpsusnTxPkmNe4jeUxvixiE6diFKd69i0dIXSxOaWL2w%2FwrC9YZq%2B4r7%2FhUQcJax49noq2I4omSYV9kyHXl5Yr0CGp3bw5W3pcDl85AE4WrQHLs8%2BfwolCYf%2BwDba%2FiB4tISmt9r3Z9%2FycinAiwF77cIMQp9EbOH6cx%2Be071fe6P%2Fif0uQ3dYhQaBVyCOutwbzmXM790flmWVzYOBR6ZfEILDk6YpEawUO%2FqcTGzFF8wDNCVOwOaFuJlQE8ZjaTaDU2jxIGQWI6PyH0hcumD5dKK%2BJ5AvbQp4tOtrz1TgibBpW%2BQJncvzVn0SoDZfwFXl6533pc8PYNI3OIQVg0beEAwaF1n22Y9xyKVoET%2F%2BGSqekqpTDE2UDFSJNqjYqqedTinpVDTGzSZl7Rs%2FAKbwWU%2FINxkDyiMZTiW%2BEy0Z3dMPS7Jg5CpnQ9gkC0OHeC8XND24y3nZacGVW%2BjQM5UJ3A6m2BUZCgPx8fKctFfSAo5uuZ1Jpc%2FN0GVcFoUcEtjs14EWtqyZFJXsIcNq31oEWYtNOrMeluZsaLHZThlBemwq9ZVyrgu4%2B1aOl%2FuoCZmLjbfDTm84vykxp8%2Fur6%2FFgTtoq9MO6qTm728kTZ3wUMY8u2tbtevtfwwjOT4vQY6pgFXuPJKv4y0wB2PO1wwDqm70quKBVEjaNViAe28YrNiE%2BYc%2BrtLmcOVLsvYrFXpMrsi6q6Ys5W4ICJbbfedb2C%2F7eX%2FWaIsdcwURusCotqnorXYGU%2FtcWUesEOEO4Z%2FmtP%2FvTlx2onOLTgkxvpqNri9LMubXFifwcYbGUcelo8WnAP9FRKHRTwN93RdBwVZoHpQ85rRspIOluh%2F3dvKefoVqZgEDc11&X-Amz-Signature=b1d8713b139ed5f10bd7bf6100b9962fcffd2619ed1fce893fdfa5598de81c3e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56ZNCUQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIER657cTFMWrax51otFgsyX%2FOgTO9mSr%2Bnm3cDJVWjrBAiB0C8xico60IcetJarXVbKsmKMn4%2FIDacad9vXUzRBEKyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMhpWGG%2F0q6gJJ5HzSKtwDRK95UpsusnTxPkmNe4jeUxvixiE6diFKd69i0dIXSxOaWL2w%2FwrC9YZq%2B4r7%2FhUQcJax49noq2I4omSYV9kyHXl5Yr0CGp3bw5W3pcDl85AE4WrQHLs8%2BfwolCYf%2BwDba%2FiB4tISmt9r3Z9%2FycinAiwF77cIMQp9EbOH6cx%2Be071fe6P%2Fif0uQ3dYhQaBVyCOutwbzmXM790flmWVzYOBR6ZfEILDk6YpEawUO%2FqcTGzFF8wDNCVOwOaFuJlQE8ZjaTaDU2jxIGQWI6PyH0hcumD5dKK%2BJ5AvbQp4tOtrz1TgibBpW%2BQJncvzVn0SoDZfwFXl6533pc8PYNI3OIQVg0beEAwaF1n22Y9xyKVoET%2F%2BGSqekqpTDE2UDFSJNqjYqqedTinpVDTGzSZl7Rs%2FAKbwWU%2FINxkDyiMZTiW%2BEy0Z3dMPS7Jg5CpnQ9gkC0OHeC8XND24y3nZacGVW%2BjQM5UJ3A6m2BUZCgPx8fKctFfSAo5uuZ1Jpc%2FN0GVcFoUcEtjs14EWtqyZFJXsIcNq31oEWYtNOrMeluZsaLHZThlBemwq9ZVyrgu4%2B1aOl%2FuoCZmLjbfDTm84vykxp8%2Fur6%2FFgTtoq9MO6qTm728kTZ3wUMY8u2tbtevtfwwjOT4vQY6pgFXuPJKv4y0wB2PO1wwDqm70quKBVEjaNViAe28YrNiE%2BYc%2BrtLmcOVLsvYrFXpMrsi6q6Ys5W4ICJbbfedb2C%2F7eX%2FWaIsdcwURusCotqnorXYGU%2FtcWUesEOEO4Z%2FmtP%2FvTlx2onOLTgkxvpqNri9LMubXFifwcYbGUcelo8WnAP9FRKHRTwN93RdBwVZoHpQ85rRspIOluh%2F3dvKefoVqZgEDc11&X-Amz-Signature=d947795c24848560531f4754ecb81409b0668d88ff8edde3ffbf9d281e85b58c&X-Amz-SignedHeaders=host&x-id=GetObject)
