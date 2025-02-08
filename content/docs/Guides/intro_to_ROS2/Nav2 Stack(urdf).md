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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEOFCZD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDiOPVDt1RI0xgJ9OKu%2BjMdMFBi5eFv8hRfYtK7l7d8hAiBgV5K2ZdX6eXzyg7o%2BBaWY5uihWyQ7eOCOc5esn49LnSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCJl87oI%2FJIGvuVDWKtwDcsb6dM7iESY08owKWuLu7R%2BtDCKroMffRNCQAqsWdYBauAKhbDjXdrXEt7AA8Zh7j9k1sss%2FXFgwGNsiJVy7w5wndFFZmp2OHKKS9I%2Ba%2F659JUZgzjTQz1OY4rTy6csDYuN%2FueKOFxSgBcdbhfS7czhSV9rnk0BI4Vwk5LGdzY02FR2qlkPdP62p6vHp5I2YbQbInBzmWh3MGY9HoDsVRQBYa%2BANCzhYbcSJr2cwTPwtkBzewPvs86XvqtfGkuTvVWW2WxU4vzU2kQtBVYGohS8%2B6vQDcnwfJveFU8q5VH%2F88H8HStXee79cIaiB3m6mBg%2BpZde4EPd36XI4oNUe4O2XpyfpKJ62O%2BIqOmz1RJFeG8da1THUhjke5YiwANSX69wxx7mooJ%2B5HS8QmWwlN80h9DFMk6PqTPjgfJYz2gvaU47Ae7i30dg1R91EshcJs5aN1rEoz3HmBWZkJ9n6RKNNmJE9Nv3T5eVL7D7ciKd%2FCvTEZ%2B6Pvtnmno0fbPr%2BnbhaaRZsBsehVVt0LVOyoi2Ds6oVwhemsiMMOnQv%2F4h2xCaCeOSrQAaidw4I%2Fd%2B2q328tWPlsazJrJzRf0Atm532EtP8V19dejtLDBoKBWl%2FrRCJWu3L%2BmHn9xUwr8GevQY6pgEYNc92ZZvAEETZJCNGIV2Vwf2mZe4TtBWGvJm9vBcz%2BWl74CMFNforwhjBJxNEjYntZb2Y35R8nRAP5%2FgYHMSZdbCFVtB9nROKzuqhrAJGCQU%2Fg8RiIlK6G1HpG6a7ACvRZadrTv%2Fhf%2Btw31bwC1wFbC1S9Mr0%2BUc84K8nQr62S%2BQy8Q7T6doOHSRhA5mlhAI2t9RLjYu4UaCewHMDP%2BnSVm%2FmpX5Y&X-Amz-Signature=907d789e3f64f420968dd3259f9c4b32ff276779d88574a032bc440a3d9c213a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEOFCZD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDiOPVDt1RI0xgJ9OKu%2BjMdMFBi5eFv8hRfYtK7l7d8hAiBgV5K2ZdX6eXzyg7o%2BBaWY5uihWyQ7eOCOc5esn49LnSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCJl87oI%2FJIGvuVDWKtwDcsb6dM7iESY08owKWuLu7R%2BtDCKroMffRNCQAqsWdYBauAKhbDjXdrXEt7AA8Zh7j9k1sss%2FXFgwGNsiJVy7w5wndFFZmp2OHKKS9I%2Ba%2F659JUZgzjTQz1OY4rTy6csDYuN%2FueKOFxSgBcdbhfS7czhSV9rnk0BI4Vwk5LGdzY02FR2qlkPdP62p6vHp5I2YbQbInBzmWh3MGY9HoDsVRQBYa%2BANCzhYbcSJr2cwTPwtkBzewPvs86XvqtfGkuTvVWW2WxU4vzU2kQtBVYGohS8%2B6vQDcnwfJveFU8q5VH%2F88H8HStXee79cIaiB3m6mBg%2BpZde4EPd36XI4oNUe4O2XpyfpKJ62O%2BIqOmz1RJFeG8da1THUhjke5YiwANSX69wxx7mooJ%2B5HS8QmWwlN80h9DFMk6PqTPjgfJYz2gvaU47Ae7i30dg1R91EshcJs5aN1rEoz3HmBWZkJ9n6RKNNmJE9Nv3T5eVL7D7ciKd%2FCvTEZ%2B6Pvtnmno0fbPr%2BnbhaaRZsBsehVVt0LVOyoi2Ds6oVwhemsiMMOnQv%2F4h2xCaCeOSrQAaidw4I%2Fd%2B2q328tWPlsazJrJzRf0Atm532EtP8V19dejtLDBoKBWl%2FrRCJWu3L%2BmHn9xUwr8GevQY6pgEYNc92ZZvAEETZJCNGIV2Vwf2mZe4TtBWGvJm9vBcz%2BWl74CMFNforwhjBJxNEjYntZb2Y35R8nRAP5%2FgYHMSZdbCFVtB9nROKzuqhrAJGCQU%2Fg8RiIlK6G1HpG6a7ACvRZadrTv%2Fhf%2Btw31bwC1wFbC1S9Mr0%2BUc84K8nQr62S%2BQy8Q7T6doOHSRhA5mlhAI2t9RLjYu4UaCewHMDP%2BnSVm%2FmpX5Y&X-Amz-Signature=cdc4b05cd6101208d4c5ed886df5c58e3e29c9ec2c4d1c21596377085e6cdfa0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEOFCZD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDiOPVDt1RI0xgJ9OKu%2BjMdMFBi5eFv8hRfYtK7l7d8hAiBgV5K2ZdX6eXzyg7o%2BBaWY5uihWyQ7eOCOc5esn49LnSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCJl87oI%2FJIGvuVDWKtwDcsb6dM7iESY08owKWuLu7R%2BtDCKroMffRNCQAqsWdYBauAKhbDjXdrXEt7AA8Zh7j9k1sss%2FXFgwGNsiJVy7w5wndFFZmp2OHKKS9I%2Ba%2F659JUZgzjTQz1OY4rTy6csDYuN%2FueKOFxSgBcdbhfS7czhSV9rnk0BI4Vwk5LGdzY02FR2qlkPdP62p6vHp5I2YbQbInBzmWh3MGY9HoDsVRQBYa%2BANCzhYbcSJr2cwTPwtkBzewPvs86XvqtfGkuTvVWW2WxU4vzU2kQtBVYGohS8%2B6vQDcnwfJveFU8q5VH%2F88H8HStXee79cIaiB3m6mBg%2BpZde4EPd36XI4oNUe4O2XpyfpKJ62O%2BIqOmz1RJFeG8da1THUhjke5YiwANSX69wxx7mooJ%2B5HS8QmWwlN80h9DFMk6PqTPjgfJYz2gvaU47Ae7i30dg1R91EshcJs5aN1rEoz3HmBWZkJ9n6RKNNmJE9Nv3T5eVL7D7ciKd%2FCvTEZ%2B6Pvtnmno0fbPr%2BnbhaaRZsBsehVVt0LVOyoi2Ds6oVwhemsiMMOnQv%2F4h2xCaCeOSrQAaidw4I%2Fd%2B2q328tWPlsazJrJzRf0Atm532EtP8V19dejtLDBoKBWl%2FrRCJWu3L%2BmHn9xUwr8GevQY6pgEYNc92ZZvAEETZJCNGIV2Vwf2mZe4TtBWGvJm9vBcz%2BWl74CMFNforwhjBJxNEjYntZb2Y35R8nRAP5%2FgYHMSZdbCFVtB9nROKzuqhrAJGCQU%2Fg8RiIlK6G1HpG6a7ACvRZadrTv%2Fhf%2Btw31bwC1wFbC1S9Mr0%2BUc84K8nQr62S%2BQy8Q7T6doOHSRhA5mlhAI2t9RLjYu4UaCewHMDP%2BnSVm%2FmpX5Y&X-Amz-Signature=e6777700a9c5e05d9c28cf5c1a8cac91bf19c68f62720340c0afce550bfc5813&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEOFCZD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDiOPVDt1RI0xgJ9OKu%2BjMdMFBi5eFv8hRfYtK7l7d8hAiBgV5K2ZdX6eXzyg7o%2BBaWY5uihWyQ7eOCOc5esn49LnSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCJl87oI%2FJIGvuVDWKtwDcsb6dM7iESY08owKWuLu7R%2BtDCKroMffRNCQAqsWdYBauAKhbDjXdrXEt7AA8Zh7j9k1sss%2FXFgwGNsiJVy7w5wndFFZmp2OHKKS9I%2Ba%2F659JUZgzjTQz1OY4rTy6csDYuN%2FueKOFxSgBcdbhfS7czhSV9rnk0BI4Vwk5LGdzY02FR2qlkPdP62p6vHp5I2YbQbInBzmWh3MGY9HoDsVRQBYa%2BANCzhYbcSJr2cwTPwtkBzewPvs86XvqtfGkuTvVWW2WxU4vzU2kQtBVYGohS8%2B6vQDcnwfJveFU8q5VH%2F88H8HStXee79cIaiB3m6mBg%2BpZde4EPd36XI4oNUe4O2XpyfpKJ62O%2BIqOmz1RJFeG8da1THUhjke5YiwANSX69wxx7mooJ%2B5HS8QmWwlN80h9DFMk6PqTPjgfJYz2gvaU47Ae7i30dg1R91EshcJs5aN1rEoz3HmBWZkJ9n6RKNNmJE9Nv3T5eVL7D7ciKd%2FCvTEZ%2B6Pvtnmno0fbPr%2BnbhaaRZsBsehVVt0LVOyoi2Ds6oVwhemsiMMOnQv%2F4h2xCaCeOSrQAaidw4I%2Fd%2B2q328tWPlsazJrJzRf0Atm532EtP8V19dejtLDBoKBWl%2FrRCJWu3L%2BmHn9xUwr8GevQY6pgEYNc92ZZvAEETZJCNGIV2Vwf2mZe4TtBWGvJm9vBcz%2BWl74CMFNforwhjBJxNEjYntZb2Y35R8nRAP5%2FgYHMSZdbCFVtB9nROKzuqhrAJGCQU%2Fg8RiIlK6G1HpG6a7ACvRZadrTv%2Fhf%2Btw31bwC1wFbC1S9Mr0%2BUc84K8nQr62S%2BQy8Q7T6doOHSRhA5mlhAI2t9RLjYu4UaCewHMDP%2BnSVm%2FmpX5Y&X-Amz-Signature=d96ea70d3021c4d8211be46c8cfd78b21701c1fc399d02129b234d7f6c183939&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEOFCZD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDiOPVDt1RI0xgJ9OKu%2BjMdMFBi5eFv8hRfYtK7l7d8hAiBgV5K2ZdX6eXzyg7o%2BBaWY5uihWyQ7eOCOc5esn49LnSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCJl87oI%2FJIGvuVDWKtwDcsb6dM7iESY08owKWuLu7R%2BtDCKroMffRNCQAqsWdYBauAKhbDjXdrXEt7AA8Zh7j9k1sss%2FXFgwGNsiJVy7w5wndFFZmp2OHKKS9I%2Ba%2F659JUZgzjTQz1OY4rTy6csDYuN%2FueKOFxSgBcdbhfS7czhSV9rnk0BI4Vwk5LGdzY02FR2qlkPdP62p6vHp5I2YbQbInBzmWh3MGY9HoDsVRQBYa%2BANCzhYbcSJr2cwTPwtkBzewPvs86XvqtfGkuTvVWW2WxU4vzU2kQtBVYGohS8%2B6vQDcnwfJveFU8q5VH%2F88H8HStXee79cIaiB3m6mBg%2BpZde4EPd36XI4oNUe4O2XpyfpKJ62O%2BIqOmz1RJFeG8da1THUhjke5YiwANSX69wxx7mooJ%2B5HS8QmWwlN80h9DFMk6PqTPjgfJYz2gvaU47Ae7i30dg1R91EshcJs5aN1rEoz3HmBWZkJ9n6RKNNmJE9Nv3T5eVL7D7ciKd%2FCvTEZ%2B6Pvtnmno0fbPr%2BnbhaaRZsBsehVVt0LVOyoi2Ds6oVwhemsiMMOnQv%2F4h2xCaCeOSrQAaidw4I%2Fd%2B2q328tWPlsazJrJzRf0Atm532EtP8V19dejtLDBoKBWl%2FrRCJWu3L%2BmHn9xUwr8GevQY6pgEYNc92ZZvAEETZJCNGIV2Vwf2mZe4TtBWGvJm9vBcz%2BWl74CMFNforwhjBJxNEjYntZb2Y35R8nRAP5%2FgYHMSZdbCFVtB9nROKzuqhrAJGCQU%2Fg8RiIlK6G1HpG6a7ACvRZadrTv%2Fhf%2Btw31bwC1wFbC1S9Mr0%2BUc84K8nQr62S%2BQy8Q7T6doOHSRhA5mlhAI2t9RLjYu4UaCewHMDP%2BnSVm%2FmpX5Y&X-Amz-Signature=b069e866e0dd88f97f0ae00b18a508c5f59ba650e2ee166b1019d12c772883d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEOFCZD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDiOPVDt1RI0xgJ9OKu%2BjMdMFBi5eFv8hRfYtK7l7d8hAiBgV5K2ZdX6eXzyg7o%2BBaWY5uihWyQ7eOCOc5esn49LnSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCJl87oI%2FJIGvuVDWKtwDcsb6dM7iESY08owKWuLu7R%2BtDCKroMffRNCQAqsWdYBauAKhbDjXdrXEt7AA8Zh7j9k1sss%2FXFgwGNsiJVy7w5wndFFZmp2OHKKS9I%2Ba%2F659JUZgzjTQz1OY4rTy6csDYuN%2FueKOFxSgBcdbhfS7czhSV9rnk0BI4Vwk5LGdzY02FR2qlkPdP62p6vHp5I2YbQbInBzmWh3MGY9HoDsVRQBYa%2BANCzhYbcSJr2cwTPwtkBzewPvs86XvqtfGkuTvVWW2WxU4vzU2kQtBVYGohS8%2B6vQDcnwfJveFU8q5VH%2F88H8HStXee79cIaiB3m6mBg%2BpZde4EPd36XI4oNUe4O2XpyfpKJ62O%2BIqOmz1RJFeG8da1THUhjke5YiwANSX69wxx7mooJ%2B5HS8QmWwlN80h9DFMk6PqTPjgfJYz2gvaU47Ae7i30dg1R91EshcJs5aN1rEoz3HmBWZkJ9n6RKNNmJE9Nv3T5eVL7D7ciKd%2FCvTEZ%2B6Pvtnmno0fbPr%2BnbhaaRZsBsehVVt0LVOyoi2Ds6oVwhemsiMMOnQv%2F4h2xCaCeOSrQAaidw4I%2Fd%2B2q328tWPlsazJrJzRf0Atm532EtP8V19dejtLDBoKBWl%2FrRCJWu3L%2BmHn9xUwr8GevQY6pgEYNc92ZZvAEETZJCNGIV2Vwf2mZe4TtBWGvJm9vBcz%2BWl74CMFNforwhjBJxNEjYntZb2Y35R8nRAP5%2FgYHMSZdbCFVtB9nROKzuqhrAJGCQU%2Fg8RiIlK6G1HpG6a7ACvRZadrTv%2Fhf%2Btw31bwC1wFbC1S9Mr0%2BUc84K8nQr62S%2BQy8Q7T6doOHSRhA5mlhAI2t9RLjYu4UaCewHMDP%2BnSVm%2FmpX5Y&X-Amz-Signature=82b42bf55412ee482c0a73e406e4259938cc3aebea396ea0ac32709e0748fb44&X-Amz-SignedHeaders=host&x-id=GetObject)
