---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGQ4H33%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCtB%2BLtDS8kzHdYDUbUs3PcYUkjVvN7SpOor%2Bm%2BbBVLWwIgPbIsjNlzPHImNZPwtOglUVQDnMj41im1d2zxpAYiHQoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDMvbhxeBCryRKWX8SrcAw0EQ6zYzWJwbwIwLlmYjaRwHqFlxHCN01RW4YP%2BmZt615TPaTtTlN%2BdU12PA7kyueu1utMO%2BavCcEahf6mubX3PuxBgt72ipB1oebNviT3S7gkffm6yZtswsi8zzXggV96oOA4088FlqNZCWgdDTvMAumF2jdWa2TaNP7uz5fRfN%2FmDGJI6orqfNpBkq413XQ5ufX8D%2FRB4PmV0GO%2BsSWA6JH%2BUBjg%2B9rWYHY1vdIJd6hrRJQ0mTDWbkx9Qxmlb1NF5S6KoqARjvI4%2BSN4n8NdqN2GMgZdoHtYhaCCyY%2Fp6wMM0NQhq%2BMRavDkmmKA6RfgDFGHlqOis9Ck0H1lN6B0YYCSLkfdlrjeCAgkvU1sG0ba%2FEPiqsMtb5VS9%2B7%2BEvDV%2Br019CUeLlDOxWcP6WqMfUUe8NZJrmBQlORq%2BbhIHoyfoIQepZvYvbXy3eEHhOReEMHhIsITVM8IqLyuAgoDQnY2uO6nZBE9%2FgSo0ZrIGNb%2Fau0pEQjnmasnQL9mi7EBuEAsFF%2BQmPrPsGbKfqZkF8dwrWqUtfCv7FCEM8xYSOTFHMa14ZEsV%2BWy7yt8zBgK40lDdRJJb9Wvb6NIk1YDzFKs4yUugnNayqRzB6Mry80xtbQLPLn%2B38gZdMKXwl70GOqUBbO5yELH8YKoOMMhL5MzJE%2F0GQbpebtI14Ja6VgWGg8GrXaFYRjbBHgoe73gczLNWcdLNrhx%2FA8MNRR6Gn5ptNkNyycCqOxPWnL09xGKIgaiXfrVizApq%2B9GPAR39P0r3rOXgZb6q9xsjA%2BOO4zBRQPUBZ%2FCzJHOEOeMduc9a31E6lo%2Bqth8Vyh1Q7XBfWNyy%2FyVVrKEe59RLwgaZGAbfF6vAHzHt&X-Amz-Signature=3d8ee546e83cba9d94abc2dc9884a7e4493fb19d3d60cec3bab77f32c508f4e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGQ4H33%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCtB%2BLtDS8kzHdYDUbUs3PcYUkjVvN7SpOor%2Bm%2BbBVLWwIgPbIsjNlzPHImNZPwtOglUVQDnMj41im1d2zxpAYiHQoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDMvbhxeBCryRKWX8SrcAw0EQ6zYzWJwbwIwLlmYjaRwHqFlxHCN01RW4YP%2BmZt615TPaTtTlN%2BdU12PA7kyueu1utMO%2BavCcEahf6mubX3PuxBgt72ipB1oebNviT3S7gkffm6yZtswsi8zzXggV96oOA4088FlqNZCWgdDTvMAumF2jdWa2TaNP7uz5fRfN%2FmDGJI6orqfNpBkq413XQ5ufX8D%2FRB4PmV0GO%2BsSWA6JH%2BUBjg%2B9rWYHY1vdIJd6hrRJQ0mTDWbkx9Qxmlb1NF5S6KoqARjvI4%2BSN4n8NdqN2GMgZdoHtYhaCCyY%2Fp6wMM0NQhq%2BMRavDkmmKA6RfgDFGHlqOis9Ck0H1lN6B0YYCSLkfdlrjeCAgkvU1sG0ba%2FEPiqsMtb5VS9%2B7%2BEvDV%2Br019CUeLlDOxWcP6WqMfUUe8NZJrmBQlORq%2BbhIHoyfoIQepZvYvbXy3eEHhOReEMHhIsITVM8IqLyuAgoDQnY2uO6nZBE9%2FgSo0ZrIGNb%2Fau0pEQjnmasnQL9mi7EBuEAsFF%2BQmPrPsGbKfqZkF8dwrWqUtfCv7FCEM8xYSOTFHMa14ZEsV%2BWy7yt8zBgK40lDdRJJb9Wvb6NIk1YDzFKs4yUugnNayqRzB6Mry80xtbQLPLn%2B38gZdMKXwl70GOqUBbO5yELH8YKoOMMhL5MzJE%2F0GQbpebtI14Ja6VgWGg8GrXaFYRjbBHgoe73gczLNWcdLNrhx%2FA8MNRR6Gn5ptNkNyycCqOxPWnL09xGKIgaiXfrVizApq%2B9GPAR39P0r3rOXgZb6q9xsjA%2BOO4zBRQPUBZ%2FCzJHOEOeMduc9a31E6lo%2Bqth8Vyh1Q7XBfWNyy%2FyVVrKEe59RLwgaZGAbfF6vAHzHt&X-Amz-Signature=f21dca2319a0387962a3c25954926b2b4da0106f0236a3b09474bd4cf05d7b25&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGQ4H33%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCtB%2BLtDS8kzHdYDUbUs3PcYUkjVvN7SpOor%2Bm%2BbBVLWwIgPbIsjNlzPHImNZPwtOglUVQDnMj41im1d2zxpAYiHQoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDMvbhxeBCryRKWX8SrcAw0EQ6zYzWJwbwIwLlmYjaRwHqFlxHCN01RW4YP%2BmZt615TPaTtTlN%2BdU12PA7kyueu1utMO%2BavCcEahf6mubX3PuxBgt72ipB1oebNviT3S7gkffm6yZtswsi8zzXggV96oOA4088FlqNZCWgdDTvMAumF2jdWa2TaNP7uz5fRfN%2FmDGJI6orqfNpBkq413XQ5ufX8D%2FRB4PmV0GO%2BsSWA6JH%2BUBjg%2B9rWYHY1vdIJd6hrRJQ0mTDWbkx9Qxmlb1NF5S6KoqARjvI4%2BSN4n8NdqN2GMgZdoHtYhaCCyY%2Fp6wMM0NQhq%2BMRavDkmmKA6RfgDFGHlqOis9Ck0H1lN6B0YYCSLkfdlrjeCAgkvU1sG0ba%2FEPiqsMtb5VS9%2B7%2BEvDV%2Br019CUeLlDOxWcP6WqMfUUe8NZJrmBQlORq%2BbhIHoyfoIQepZvYvbXy3eEHhOReEMHhIsITVM8IqLyuAgoDQnY2uO6nZBE9%2FgSo0ZrIGNb%2Fau0pEQjnmasnQL9mi7EBuEAsFF%2BQmPrPsGbKfqZkF8dwrWqUtfCv7FCEM8xYSOTFHMa14ZEsV%2BWy7yt8zBgK40lDdRJJb9Wvb6NIk1YDzFKs4yUugnNayqRzB6Mry80xtbQLPLn%2B38gZdMKXwl70GOqUBbO5yELH8YKoOMMhL5MzJE%2F0GQbpebtI14Ja6VgWGg8GrXaFYRjbBHgoe73gczLNWcdLNrhx%2FA8MNRR6Gn5ptNkNyycCqOxPWnL09xGKIgaiXfrVizApq%2B9GPAR39P0r3rOXgZb6q9xsjA%2BOO4zBRQPUBZ%2FCzJHOEOeMduc9a31E6lo%2Bqth8Vyh1Q7XBfWNyy%2FyVVrKEe59RLwgaZGAbfF6vAHzHt&X-Amz-Signature=0b802db90af304c99634acf7e02e4f7e10f77c4c8f0f16a791bd2f45fdeb65ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGQ4H33%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCtB%2BLtDS8kzHdYDUbUs3PcYUkjVvN7SpOor%2Bm%2BbBVLWwIgPbIsjNlzPHImNZPwtOglUVQDnMj41im1d2zxpAYiHQoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDMvbhxeBCryRKWX8SrcAw0EQ6zYzWJwbwIwLlmYjaRwHqFlxHCN01RW4YP%2BmZt615TPaTtTlN%2BdU12PA7kyueu1utMO%2BavCcEahf6mubX3PuxBgt72ipB1oebNviT3S7gkffm6yZtswsi8zzXggV96oOA4088FlqNZCWgdDTvMAumF2jdWa2TaNP7uz5fRfN%2FmDGJI6orqfNpBkq413XQ5ufX8D%2FRB4PmV0GO%2BsSWA6JH%2BUBjg%2B9rWYHY1vdIJd6hrRJQ0mTDWbkx9Qxmlb1NF5S6KoqARjvI4%2BSN4n8NdqN2GMgZdoHtYhaCCyY%2Fp6wMM0NQhq%2BMRavDkmmKA6RfgDFGHlqOis9Ck0H1lN6B0YYCSLkfdlrjeCAgkvU1sG0ba%2FEPiqsMtb5VS9%2B7%2BEvDV%2Br019CUeLlDOxWcP6WqMfUUe8NZJrmBQlORq%2BbhIHoyfoIQepZvYvbXy3eEHhOReEMHhIsITVM8IqLyuAgoDQnY2uO6nZBE9%2FgSo0ZrIGNb%2Fau0pEQjnmasnQL9mi7EBuEAsFF%2BQmPrPsGbKfqZkF8dwrWqUtfCv7FCEM8xYSOTFHMa14ZEsV%2BWy7yt8zBgK40lDdRJJb9Wvb6NIk1YDzFKs4yUugnNayqRzB6Mry80xtbQLPLn%2B38gZdMKXwl70GOqUBbO5yELH8YKoOMMhL5MzJE%2F0GQbpebtI14Ja6VgWGg8GrXaFYRjbBHgoe73gczLNWcdLNrhx%2FA8MNRR6Gn5ptNkNyycCqOxPWnL09xGKIgaiXfrVizApq%2B9GPAR39P0r3rOXgZb6q9xsjA%2BOO4zBRQPUBZ%2FCzJHOEOeMduc9a31E6lo%2Bqth8Vyh1Q7XBfWNyy%2FyVVrKEe59RLwgaZGAbfF6vAHzHt&X-Amz-Signature=5cf02b64c48a5f2f9ad301322e16fa10193914c7cb667ed0133c5bf33cb7200c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGQ4H33%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCtB%2BLtDS8kzHdYDUbUs3PcYUkjVvN7SpOor%2Bm%2BbBVLWwIgPbIsjNlzPHImNZPwtOglUVQDnMj41im1d2zxpAYiHQoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDMvbhxeBCryRKWX8SrcAw0EQ6zYzWJwbwIwLlmYjaRwHqFlxHCN01RW4YP%2BmZt615TPaTtTlN%2BdU12PA7kyueu1utMO%2BavCcEahf6mubX3PuxBgt72ipB1oebNviT3S7gkffm6yZtswsi8zzXggV96oOA4088FlqNZCWgdDTvMAumF2jdWa2TaNP7uz5fRfN%2FmDGJI6orqfNpBkq413XQ5ufX8D%2FRB4PmV0GO%2BsSWA6JH%2BUBjg%2B9rWYHY1vdIJd6hrRJQ0mTDWbkx9Qxmlb1NF5S6KoqARjvI4%2BSN4n8NdqN2GMgZdoHtYhaCCyY%2Fp6wMM0NQhq%2BMRavDkmmKA6RfgDFGHlqOis9Ck0H1lN6B0YYCSLkfdlrjeCAgkvU1sG0ba%2FEPiqsMtb5VS9%2B7%2BEvDV%2Br019CUeLlDOxWcP6WqMfUUe8NZJrmBQlORq%2BbhIHoyfoIQepZvYvbXy3eEHhOReEMHhIsITVM8IqLyuAgoDQnY2uO6nZBE9%2FgSo0ZrIGNb%2Fau0pEQjnmasnQL9mi7EBuEAsFF%2BQmPrPsGbKfqZkF8dwrWqUtfCv7FCEM8xYSOTFHMa14ZEsV%2BWy7yt8zBgK40lDdRJJb9Wvb6NIk1YDzFKs4yUugnNayqRzB6Mry80xtbQLPLn%2B38gZdMKXwl70GOqUBbO5yELH8YKoOMMhL5MzJE%2F0GQbpebtI14Ja6VgWGg8GrXaFYRjbBHgoe73gczLNWcdLNrhx%2FA8MNRR6Gn5ptNkNyycCqOxPWnL09xGKIgaiXfrVizApq%2B9GPAR39P0r3rOXgZb6q9xsjA%2BOO4zBRQPUBZ%2FCzJHOEOeMduc9a31E6lo%2Bqth8Vyh1Q7XBfWNyy%2FyVVrKEe59RLwgaZGAbfF6vAHzHt&X-Amz-Signature=5c747a5004049f67034cc1883db5ea5911071fb10bfdce20ac22c178f36f23fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGQ4H33%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCtB%2BLtDS8kzHdYDUbUs3PcYUkjVvN7SpOor%2Bm%2BbBVLWwIgPbIsjNlzPHImNZPwtOglUVQDnMj41im1d2zxpAYiHQoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDMvbhxeBCryRKWX8SrcAw0EQ6zYzWJwbwIwLlmYjaRwHqFlxHCN01RW4YP%2BmZt615TPaTtTlN%2BdU12PA7kyueu1utMO%2BavCcEahf6mubX3PuxBgt72ipB1oebNviT3S7gkffm6yZtswsi8zzXggV96oOA4088FlqNZCWgdDTvMAumF2jdWa2TaNP7uz5fRfN%2FmDGJI6orqfNpBkq413XQ5ufX8D%2FRB4PmV0GO%2BsSWA6JH%2BUBjg%2B9rWYHY1vdIJd6hrRJQ0mTDWbkx9Qxmlb1NF5S6KoqARjvI4%2BSN4n8NdqN2GMgZdoHtYhaCCyY%2Fp6wMM0NQhq%2BMRavDkmmKA6RfgDFGHlqOis9Ck0H1lN6B0YYCSLkfdlrjeCAgkvU1sG0ba%2FEPiqsMtb5VS9%2B7%2BEvDV%2Br019CUeLlDOxWcP6WqMfUUe8NZJrmBQlORq%2BbhIHoyfoIQepZvYvbXy3eEHhOReEMHhIsITVM8IqLyuAgoDQnY2uO6nZBE9%2FgSo0ZrIGNb%2Fau0pEQjnmasnQL9mi7EBuEAsFF%2BQmPrPsGbKfqZkF8dwrWqUtfCv7FCEM8xYSOTFHMa14ZEsV%2BWy7yt8zBgK40lDdRJJb9Wvb6NIk1YDzFKs4yUugnNayqRzB6Mry80xtbQLPLn%2B38gZdMKXwl70GOqUBbO5yELH8YKoOMMhL5MzJE%2F0GQbpebtI14Ja6VgWGg8GrXaFYRjbBHgoe73gczLNWcdLNrhx%2FA8MNRR6Gn5ptNkNyycCqOxPWnL09xGKIgaiXfrVizApq%2B9GPAR39P0r3rOXgZb6q9xsjA%2BOO4zBRQPUBZ%2FCzJHOEOeMduc9a31E6lo%2Bqth8Vyh1Q7XBfWNyy%2FyVVrKEe59RLwgaZGAbfF6vAHzHt&X-Amz-Signature=bc851edd751e44f5ede3b6fdb4b121424bea58501581f9cd7f3b5503c3042b03&X-Amz-SignedHeaders=host&x-id=GetObject)
