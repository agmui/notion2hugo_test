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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKD3ITEK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRedwoRnTK6ZQlOHPQl%2FqabJDbJ6tjHi25zWplGz9CcAiA3G3Zq0WZP1OeI4MKY2prjOHBjuOqrjl2fHx8RKwVF1SqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVfkDLBrVoJ0X4vQKtwDdljYYLys%2FEkjRLdwm6liOz20rkCjnYQ5Vt803m2WElHih%2BJN3yG9AZYXQ0civzeWKKn3Nei4oHAW4JMkEVy4ms4Yfs0oeZ30IwipHcwRfZpeWmC%2FBGcuC6eybIqg8k3v%2BaHDpTaW9NMvqp74e7Bf%2FYpgIgn4yYzlbLls66q06jV%2FdZPTL%2B8Yj1gqKghpolrMDdaf54lra5%2BEKyk59pviWhyv7jNgku5Yj2LBJ1wiTckznWwNk%2BdOvZFaEdRNCRiAk1fOTeITh%2BPolWPCGHb5EFJk01QdR9JoR7OVCims8Vlvvfh2sMxJlyCw1qLGpiDUnpsLeLw3wkEoOUWNNWAC1FyLk5ZZWf0RiiHWa0q4gNWirZQe8OWzlyUSa3bln3T5%2FtT%2BBQ6KL%2Bia2qFwiq%2FsM%2BrlUhp6geCL2e7bvYqYAKVsXWttebCNt3G6kqGvlBPf6D8upPd77yF5%2FJPQhJVdhbAvUhn9GGSYbyRvP%2BxQW0jDrQsdWqI1jNWumSmc4oqUrkcTeW97H1tLSqoSJZHYhzOqsZTdLPtdAnHQzeRpjir8ZESsul8I0MvLAXmE51QynO6arZkahne7t4QJ88kz6Ri2HNBU0QHLcsglzZb%2FShz7MdJpqbWAg%2F1LvwUwkeGkvQY6pgESlVZ%2FSntIlVGwPQyap804rmurCy4en7R1HroQeHmNkLKw%2FHK9spSObx%2Fy6BqbuImuB9csgQw%2B3fo4boUqwwUYmWrSnM8umGtJOVxinlY1jzNwKsMlV4%2Bqq6YGnM47v02ahLEOQu7uwzL56vMD5RcmAFmniRnju0xsnEVjUqPJwaqwmnMeKugIlfb9fyQKUe60yRnnIV3X%2BeywM4EFw7v94OiReXiz&X-Amz-Signature=f7c4d714d0376bfe0ceb6b0adf767ee1b8cc38d203390d148384cc66c7452f31&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKD3ITEK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRedwoRnTK6ZQlOHPQl%2FqabJDbJ6tjHi25zWplGz9CcAiA3G3Zq0WZP1OeI4MKY2prjOHBjuOqrjl2fHx8RKwVF1SqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVfkDLBrVoJ0X4vQKtwDdljYYLys%2FEkjRLdwm6liOz20rkCjnYQ5Vt803m2WElHih%2BJN3yG9AZYXQ0civzeWKKn3Nei4oHAW4JMkEVy4ms4Yfs0oeZ30IwipHcwRfZpeWmC%2FBGcuC6eybIqg8k3v%2BaHDpTaW9NMvqp74e7Bf%2FYpgIgn4yYzlbLls66q06jV%2FdZPTL%2B8Yj1gqKghpolrMDdaf54lra5%2BEKyk59pviWhyv7jNgku5Yj2LBJ1wiTckznWwNk%2BdOvZFaEdRNCRiAk1fOTeITh%2BPolWPCGHb5EFJk01QdR9JoR7OVCims8Vlvvfh2sMxJlyCw1qLGpiDUnpsLeLw3wkEoOUWNNWAC1FyLk5ZZWf0RiiHWa0q4gNWirZQe8OWzlyUSa3bln3T5%2FtT%2BBQ6KL%2Bia2qFwiq%2FsM%2BrlUhp6geCL2e7bvYqYAKVsXWttebCNt3G6kqGvlBPf6D8upPd77yF5%2FJPQhJVdhbAvUhn9GGSYbyRvP%2BxQW0jDrQsdWqI1jNWumSmc4oqUrkcTeW97H1tLSqoSJZHYhzOqsZTdLPtdAnHQzeRpjir8ZESsul8I0MvLAXmE51QynO6arZkahne7t4QJ88kz6Ri2HNBU0QHLcsglzZb%2FShz7MdJpqbWAg%2F1LvwUwkeGkvQY6pgESlVZ%2FSntIlVGwPQyap804rmurCy4en7R1HroQeHmNkLKw%2FHK9spSObx%2Fy6BqbuImuB9csgQw%2B3fo4boUqwwUYmWrSnM8umGtJOVxinlY1jzNwKsMlV4%2Bqq6YGnM47v02ahLEOQu7uwzL56vMD5RcmAFmniRnju0xsnEVjUqPJwaqwmnMeKugIlfb9fyQKUe60yRnnIV3X%2BeywM4EFw7v94OiReXiz&X-Amz-Signature=8e3c1210f6fff347d695408c5d175c037d70b1f5447558d7ccf366aeaaa96b68&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKD3ITEK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRedwoRnTK6ZQlOHPQl%2FqabJDbJ6tjHi25zWplGz9CcAiA3G3Zq0WZP1OeI4MKY2prjOHBjuOqrjl2fHx8RKwVF1SqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVfkDLBrVoJ0X4vQKtwDdljYYLys%2FEkjRLdwm6liOz20rkCjnYQ5Vt803m2WElHih%2BJN3yG9AZYXQ0civzeWKKn3Nei4oHAW4JMkEVy4ms4Yfs0oeZ30IwipHcwRfZpeWmC%2FBGcuC6eybIqg8k3v%2BaHDpTaW9NMvqp74e7Bf%2FYpgIgn4yYzlbLls66q06jV%2FdZPTL%2B8Yj1gqKghpolrMDdaf54lra5%2BEKyk59pviWhyv7jNgku5Yj2LBJ1wiTckznWwNk%2BdOvZFaEdRNCRiAk1fOTeITh%2BPolWPCGHb5EFJk01QdR9JoR7OVCims8Vlvvfh2sMxJlyCw1qLGpiDUnpsLeLw3wkEoOUWNNWAC1FyLk5ZZWf0RiiHWa0q4gNWirZQe8OWzlyUSa3bln3T5%2FtT%2BBQ6KL%2Bia2qFwiq%2FsM%2BrlUhp6geCL2e7bvYqYAKVsXWttebCNt3G6kqGvlBPf6D8upPd77yF5%2FJPQhJVdhbAvUhn9GGSYbyRvP%2BxQW0jDrQsdWqI1jNWumSmc4oqUrkcTeW97H1tLSqoSJZHYhzOqsZTdLPtdAnHQzeRpjir8ZESsul8I0MvLAXmE51QynO6arZkahne7t4QJ88kz6Ri2HNBU0QHLcsglzZb%2FShz7MdJpqbWAg%2F1LvwUwkeGkvQY6pgESlVZ%2FSntIlVGwPQyap804rmurCy4en7R1HroQeHmNkLKw%2FHK9spSObx%2Fy6BqbuImuB9csgQw%2B3fo4boUqwwUYmWrSnM8umGtJOVxinlY1jzNwKsMlV4%2Bqq6YGnM47v02ahLEOQu7uwzL56vMD5RcmAFmniRnju0xsnEVjUqPJwaqwmnMeKugIlfb9fyQKUe60yRnnIV3X%2BeywM4EFw7v94OiReXiz&X-Amz-Signature=c798bb8d6022a25c816d6d4fbf1d7cad7daabbaab8c5c12084175028bcdb5c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKD3ITEK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRedwoRnTK6ZQlOHPQl%2FqabJDbJ6tjHi25zWplGz9CcAiA3G3Zq0WZP1OeI4MKY2prjOHBjuOqrjl2fHx8RKwVF1SqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVfkDLBrVoJ0X4vQKtwDdljYYLys%2FEkjRLdwm6liOz20rkCjnYQ5Vt803m2WElHih%2BJN3yG9AZYXQ0civzeWKKn3Nei4oHAW4JMkEVy4ms4Yfs0oeZ30IwipHcwRfZpeWmC%2FBGcuC6eybIqg8k3v%2BaHDpTaW9NMvqp74e7Bf%2FYpgIgn4yYzlbLls66q06jV%2FdZPTL%2B8Yj1gqKghpolrMDdaf54lra5%2BEKyk59pviWhyv7jNgku5Yj2LBJ1wiTckznWwNk%2BdOvZFaEdRNCRiAk1fOTeITh%2BPolWPCGHb5EFJk01QdR9JoR7OVCims8Vlvvfh2sMxJlyCw1qLGpiDUnpsLeLw3wkEoOUWNNWAC1FyLk5ZZWf0RiiHWa0q4gNWirZQe8OWzlyUSa3bln3T5%2FtT%2BBQ6KL%2Bia2qFwiq%2FsM%2BrlUhp6geCL2e7bvYqYAKVsXWttebCNt3G6kqGvlBPf6D8upPd77yF5%2FJPQhJVdhbAvUhn9GGSYbyRvP%2BxQW0jDrQsdWqI1jNWumSmc4oqUrkcTeW97H1tLSqoSJZHYhzOqsZTdLPtdAnHQzeRpjir8ZESsul8I0MvLAXmE51QynO6arZkahne7t4QJ88kz6Ri2HNBU0QHLcsglzZb%2FShz7MdJpqbWAg%2F1LvwUwkeGkvQY6pgESlVZ%2FSntIlVGwPQyap804rmurCy4en7R1HroQeHmNkLKw%2FHK9spSObx%2Fy6BqbuImuB9csgQw%2B3fo4boUqwwUYmWrSnM8umGtJOVxinlY1jzNwKsMlV4%2Bqq6YGnM47v02ahLEOQu7uwzL56vMD5RcmAFmniRnju0xsnEVjUqPJwaqwmnMeKugIlfb9fyQKUe60yRnnIV3X%2BeywM4EFw7v94OiReXiz&X-Amz-Signature=27e59d14643b9253e414b3118dc962d87f6669905a99f9b091df440084cb7a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKD3ITEK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRedwoRnTK6ZQlOHPQl%2FqabJDbJ6tjHi25zWplGz9CcAiA3G3Zq0WZP1OeI4MKY2prjOHBjuOqrjl2fHx8RKwVF1SqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVfkDLBrVoJ0X4vQKtwDdljYYLys%2FEkjRLdwm6liOz20rkCjnYQ5Vt803m2WElHih%2BJN3yG9AZYXQ0civzeWKKn3Nei4oHAW4JMkEVy4ms4Yfs0oeZ30IwipHcwRfZpeWmC%2FBGcuC6eybIqg8k3v%2BaHDpTaW9NMvqp74e7Bf%2FYpgIgn4yYzlbLls66q06jV%2FdZPTL%2B8Yj1gqKghpolrMDdaf54lra5%2BEKyk59pviWhyv7jNgku5Yj2LBJ1wiTckznWwNk%2BdOvZFaEdRNCRiAk1fOTeITh%2BPolWPCGHb5EFJk01QdR9JoR7OVCims8Vlvvfh2sMxJlyCw1qLGpiDUnpsLeLw3wkEoOUWNNWAC1FyLk5ZZWf0RiiHWa0q4gNWirZQe8OWzlyUSa3bln3T5%2FtT%2BBQ6KL%2Bia2qFwiq%2FsM%2BrlUhp6geCL2e7bvYqYAKVsXWttebCNt3G6kqGvlBPf6D8upPd77yF5%2FJPQhJVdhbAvUhn9GGSYbyRvP%2BxQW0jDrQsdWqI1jNWumSmc4oqUrkcTeW97H1tLSqoSJZHYhzOqsZTdLPtdAnHQzeRpjir8ZESsul8I0MvLAXmE51QynO6arZkahne7t4QJ88kz6Ri2HNBU0QHLcsglzZb%2FShz7MdJpqbWAg%2F1LvwUwkeGkvQY6pgESlVZ%2FSntIlVGwPQyap804rmurCy4en7R1HroQeHmNkLKw%2FHK9spSObx%2Fy6BqbuImuB9csgQw%2B3fo4boUqwwUYmWrSnM8umGtJOVxinlY1jzNwKsMlV4%2Bqq6YGnM47v02ahLEOQu7uwzL56vMD5RcmAFmniRnju0xsnEVjUqPJwaqwmnMeKugIlfb9fyQKUe60yRnnIV3X%2BeywM4EFw7v94OiReXiz&X-Amz-Signature=04db89a05438b1e24ebc9d8a19622a1e41de28c00bbcb1b4947030cbc19de88a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKD3ITEK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRedwoRnTK6ZQlOHPQl%2FqabJDbJ6tjHi25zWplGz9CcAiA3G3Zq0WZP1OeI4MKY2prjOHBjuOqrjl2fHx8RKwVF1SqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVfkDLBrVoJ0X4vQKtwDdljYYLys%2FEkjRLdwm6liOz20rkCjnYQ5Vt803m2WElHih%2BJN3yG9AZYXQ0civzeWKKn3Nei4oHAW4JMkEVy4ms4Yfs0oeZ30IwipHcwRfZpeWmC%2FBGcuC6eybIqg8k3v%2BaHDpTaW9NMvqp74e7Bf%2FYpgIgn4yYzlbLls66q06jV%2FdZPTL%2B8Yj1gqKghpolrMDdaf54lra5%2BEKyk59pviWhyv7jNgku5Yj2LBJ1wiTckznWwNk%2BdOvZFaEdRNCRiAk1fOTeITh%2BPolWPCGHb5EFJk01QdR9JoR7OVCims8Vlvvfh2sMxJlyCw1qLGpiDUnpsLeLw3wkEoOUWNNWAC1FyLk5ZZWf0RiiHWa0q4gNWirZQe8OWzlyUSa3bln3T5%2FtT%2BBQ6KL%2Bia2qFwiq%2FsM%2BrlUhp6geCL2e7bvYqYAKVsXWttebCNt3G6kqGvlBPf6D8upPd77yF5%2FJPQhJVdhbAvUhn9GGSYbyRvP%2BxQW0jDrQsdWqI1jNWumSmc4oqUrkcTeW97H1tLSqoSJZHYhzOqsZTdLPtdAnHQzeRpjir8ZESsul8I0MvLAXmE51QynO6arZkahne7t4QJ88kz6Ri2HNBU0QHLcsglzZb%2FShz7MdJpqbWAg%2F1LvwUwkeGkvQY6pgESlVZ%2FSntIlVGwPQyap804rmurCy4en7R1HroQeHmNkLKw%2FHK9spSObx%2Fy6BqbuImuB9csgQw%2B3fo4boUqwwUYmWrSnM8umGtJOVxinlY1jzNwKsMlV4%2Bqq6YGnM47v02ahLEOQu7uwzL56vMD5RcmAFmniRnju0xsnEVjUqPJwaqwmnMeKugIlfb9fyQKUe60yRnnIV3X%2BeywM4EFw7v94OiReXiz&X-Amz-Signature=bd7a2d8ec464a6ea7556c9a48ab5a7e5315f060dbe73c2965d598fc51bad9dbc&X-Amz-SignedHeaders=host&x-id=GetObject)
