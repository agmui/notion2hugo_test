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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466762TYHYH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIhDDsz4OhwbeRNsw7RZQmEyCkPK9wmcuxcrLedz7lpAiEApdIR9z%2BtE0CqQSJiO5jvu8jdnNVTaqlGDIrGMGyzcZsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy%2BxIGU75ayvNZM%2FircA7pKUJ5fdptu%2BxUtX%2BWIEvMTgaCr7K5nCZzcP029uij0Vh%2B7bg3PTKXYK9QYUtr46I5kRhSQEQSIHGkaLORm3w6TJI%2BZwWtj7ftCqSKEiNu5CGEO81T6oUik9VVQhZUGS2QhtDP9SBxAKUvYApFcDOfQJKHYZeaFsvYHcehEbdujaIE%2FjLpz03oVztBTXmDVlFVoCmk2emUi2RasUqWqPgX4fu%2B7koCyQE1nCxtmxskAwH44eIowB04RBm1fG7bXP9hj1JLKQtOdVUrIxvYpYvfUCcfSpLP%2F5BZQNlZOXLN%2FkaZuy2cS7yyZupIdhxIepfczb31cpp7xc%2FUh45AjI69XIxDuYnqTCZiIOGZsZQQPjJIDViK2Pn%2ByaSVLGGVHIFvkMO%2FOZpwntRASptntm6fwRPSKYgNKD62MvRomjjm89b6Vd3afdXwTubGNXXWszuI%2BZWBUY3NPXliHfEjBode%2B8s0sgX3%2BkDx5Q%2BzyVux%2Fr7IeBkgvGsLYpNiKzoCyD6zreS0j9X%2BUBn3ew%2Fz7xe5zAMs1WyY6MASLfK3UCAANqJMIBiyedlBrLb1sjVtlyutmS9mVwQrLc9OtOUVKQp7hOEO80nP9c%2FxCx7BvvuPxzB0rejKskzqmGihYMMqP28IGOqUByyovMEVruw5Kh012MRcpDn0cA3%2FxwFF0GtjYW5CJtKepUIqXhZjDi4qYsQLeYGnUyVVvkRZuF3R2MRUsYljrtxfWmPz5ZchYbjvw%2FbxJTWSGkCxDChx3%2Bhiqyg%2F8QYMdcrAtcETLmIq0GybNubUXVX3990d2y%2BJw1SE82KNzFwAGTF4Idnh%2FInGSBXpQ3GS%2BqUUvXKlU5GpX4W%2BifL%2BYmtPArWq%2F&X-Amz-Signature=b62560136c9913a43b107c167b95752a49dc80ed1599753a4b7da5b8c153508c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466762TYHYH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIhDDsz4OhwbeRNsw7RZQmEyCkPK9wmcuxcrLedz7lpAiEApdIR9z%2BtE0CqQSJiO5jvu8jdnNVTaqlGDIrGMGyzcZsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy%2BxIGU75ayvNZM%2FircA7pKUJ5fdptu%2BxUtX%2BWIEvMTgaCr7K5nCZzcP029uij0Vh%2B7bg3PTKXYK9QYUtr46I5kRhSQEQSIHGkaLORm3w6TJI%2BZwWtj7ftCqSKEiNu5CGEO81T6oUik9VVQhZUGS2QhtDP9SBxAKUvYApFcDOfQJKHYZeaFsvYHcehEbdujaIE%2FjLpz03oVztBTXmDVlFVoCmk2emUi2RasUqWqPgX4fu%2B7koCyQE1nCxtmxskAwH44eIowB04RBm1fG7bXP9hj1JLKQtOdVUrIxvYpYvfUCcfSpLP%2F5BZQNlZOXLN%2FkaZuy2cS7yyZupIdhxIepfczb31cpp7xc%2FUh45AjI69XIxDuYnqTCZiIOGZsZQQPjJIDViK2Pn%2ByaSVLGGVHIFvkMO%2FOZpwntRASptntm6fwRPSKYgNKD62MvRomjjm89b6Vd3afdXwTubGNXXWszuI%2BZWBUY3NPXliHfEjBode%2B8s0sgX3%2BkDx5Q%2BzyVux%2Fr7IeBkgvGsLYpNiKzoCyD6zreS0j9X%2BUBn3ew%2Fz7xe5zAMs1WyY6MASLfK3UCAANqJMIBiyedlBrLb1sjVtlyutmS9mVwQrLc9OtOUVKQp7hOEO80nP9c%2FxCx7BvvuPxzB0rejKskzqmGihYMMqP28IGOqUByyovMEVruw5Kh012MRcpDn0cA3%2FxwFF0GtjYW5CJtKepUIqXhZjDi4qYsQLeYGnUyVVvkRZuF3R2MRUsYljrtxfWmPz5ZchYbjvw%2FbxJTWSGkCxDChx3%2Bhiqyg%2F8QYMdcrAtcETLmIq0GybNubUXVX3990d2y%2BJw1SE82KNzFwAGTF4Idnh%2FInGSBXpQ3GS%2BqUUvXKlU5GpX4W%2BifL%2BYmtPArWq%2F&X-Amz-Signature=31fe0f195aafb9a1692a28a64b02538a3b221ff44254b8c860f4b6c0656a2c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466762TYHYH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIhDDsz4OhwbeRNsw7RZQmEyCkPK9wmcuxcrLedz7lpAiEApdIR9z%2BtE0CqQSJiO5jvu8jdnNVTaqlGDIrGMGyzcZsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy%2BxIGU75ayvNZM%2FircA7pKUJ5fdptu%2BxUtX%2BWIEvMTgaCr7K5nCZzcP029uij0Vh%2B7bg3PTKXYK9QYUtr46I5kRhSQEQSIHGkaLORm3w6TJI%2BZwWtj7ftCqSKEiNu5CGEO81T6oUik9VVQhZUGS2QhtDP9SBxAKUvYApFcDOfQJKHYZeaFsvYHcehEbdujaIE%2FjLpz03oVztBTXmDVlFVoCmk2emUi2RasUqWqPgX4fu%2B7koCyQE1nCxtmxskAwH44eIowB04RBm1fG7bXP9hj1JLKQtOdVUrIxvYpYvfUCcfSpLP%2F5BZQNlZOXLN%2FkaZuy2cS7yyZupIdhxIepfczb31cpp7xc%2FUh45AjI69XIxDuYnqTCZiIOGZsZQQPjJIDViK2Pn%2ByaSVLGGVHIFvkMO%2FOZpwntRASptntm6fwRPSKYgNKD62MvRomjjm89b6Vd3afdXwTubGNXXWszuI%2BZWBUY3NPXliHfEjBode%2B8s0sgX3%2BkDx5Q%2BzyVux%2Fr7IeBkgvGsLYpNiKzoCyD6zreS0j9X%2BUBn3ew%2Fz7xe5zAMs1WyY6MASLfK3UCAANqJMIBiyedlBrLb1sjVtlyutmS9mVwQrLc9OtOUVKQp7hOEO80nP9c%2FxCx7BvvuPxzB0rejKskzqmGihYMMqP28IGOqUByyovMEVruw5Kh012MRcpDn0cA3%2FxwFF0GtjYW5CJtKepUIqXhZjDi4qYsQLeYGnUyVVvkRZuF3R2MRUsYljrtxfWmPz5ZchYbjvw%2FbxJTWSGkCxDChx3%2Bhiqyg%2F8QYMdcrAtcETLmIq0GybNubUXVX3990d2y%2BJw1SE82KNzFwAGTF4Idnh%2FInGSBXpQ3GS%2BqUUvXKlU5GpX4W%2BifL%2BYmtPArWq%2F&X-Amz-Signature=d586799784d51ea4cc1410fce02782a93b9da3ca82e22cda5d59309e6b994109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466762TYHYH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIhDDsz4OhwbeRNsw7RZQmEyCkPK9wmcuxcrLedz7lpAiEApdIR9z%2BtE0CqQSJiO5jvu8jdnNVTaqlGDIrGMGyzcZsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy%2BxIGU75ayvNZM%2FircA7pKUJ5fdptu%2BxUtX%2BWIEvMTgaCr7K5nCZzcP029uij0Vh%2B7bg3PTKXYK9QYUtr46I5kRhSQEQSIHGkaLORm3w6TJI%2BZwWtj7ftCqSKEiNu5CGEO81T6oUik9VVQhZUGS2QhtDP9SBxAKUvYApFcDOfQJKHYZeaFsvYHcehEbdujaIE%2FjLpz03oVztBTXmDVlFVoCmk2emUi2RasUqWqPgX4fu%2B7koCyQE1nCxtmxskAwH44eIowB04RBm1fG7bXP9hj1JLKQtOdVUrIxvYpYvfUCcfSpLP%2F5BZQNlZOXLN%2FkaZuy2cS7yyZupIdhxIepfczb31cpp7xc%2FUh45AjI69XIxDuYnqTCZiIOGZsZQQPjJIDViK2Pn%2ByaSVLGGVHIFvkMO%2FOZpwntRASptntm6fwRPSKYgNKD62MvRomjjm89b6Vd3afdXwTubGNXXWszuI%2BZWBUY3NPXliHfEjBode%2B8s0sgX3%2BkDx5Q%2BzyVux%2Fr7IeBkgvGsLYpNiKzoCyD6zreS0j9X%2BUBn3ew%2Fz7xe5zAMs1WyY6MASLfK3UCAANqJMIBiyedlBrLb1sjVtlyutmS9mVwQrLc9OtOUVKQp7hOEO80nP9c%2FxCx7BvvuPxzB0rejKskzqmGihYMMqP28IGOqUByyovMEVruw5Kh012MRcpDn0cA3%2FxwFF0GtjYW5CJtKepUIqXhZjDi4qYsQLeYGnUyVVvkRZuF3R2MRUsYljrtxfWmPz5ZchYbjvw%2FbxJTWSGkCxDChx3%2Bhiqyg%2F8QYMdcrAtcETLmIq0GybNubUXVX3990d2y%2BJw1SE82KNzFwAGTF4Idnh%2FInGSBXpQ3GS%2BqUUvXKlU5GpX4W%2BifL%2BYmtPArWq%2F&X-Amz-Signature=ea840c164059ce4bdd2401d7a79dba00484a5b2034f310a8d48bb56d8488fc36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466762TYHYH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIhDDsz4OhwbeRNsw7RZQmEyCkPK9wmcuxcrLedz7lpAiEApdIR9z%2BtE0CqQSJiO5jvu8jdnNVTaqlGDIrGMGyzcZsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy%2BxIGU75ayvNZM%2FircA7pKUJ5fdptu%2BxUtX%2BWIEvMTgaCr7K5nCZzcP029uij0Vh%2B7bg3PTKXYK9QYUtr46I5kRhSQEQSIHGkaLORm3w6TJI%2BZwWtj7ftCqSKEiNu5CGEO81T6oUik9VVQhZUGS2QhtDP9SBxAKUvYApFcDOfQJKHYZeaFsvYHcehEbdujaIE%2FjLpz03oVztBTXmDVlFVoCmk2emUi2RasUqWqPgX4fu%2B7koCyQE1nCxtmxskAwH44eIowB04RBm1fG7bXP9hj1JLKQtOdVUrIxvYpYvfUCcfSpLP%2F5BZQNlZOXLN%2FkaZuy2cS7yyZupIdhxIepfczb31cpp7xc%2FUh45AjI69XIxDuYnqTCZiIOGZsZQQPjJIDViK2Pn%2ByaSVLGGVHIFvkMO%2FOZpwntRASptntm6fwRPSKYgNKD62MvRomjjm89b6Vd3afdXwTubGNXXWszuI%2BZWBUY3NPXliHfEjBode%2B8s0sgX3%2BkDx5Q%2BzyVux%2Fr7IeBkgvGsLYpNiKzoCyD6zreS0j9X%2BUBn3ew%2Fz7xe5zAMs1WyY6MASLfK3UCAANqJMIBiyedlBrLb1sjVtlyutmS9mVwQrLc9OtOUVKQp7hOEO80nP9c%2FxCx7BvvuPxzB0rejKskzqmGihYMMqP28IGOqUByyovMEVruw5Kh012MRcpDn0cA3%2FxwFF0GtjYW5CJtKepUIqXhZjDi4qYsQLeYGnUyVVvkRZuF3R2MRUsYljrtxfWmPz5ZchYbjvw%2FbxJTWSGkCxDChx3%2Bhiqyg%2F8QYMdcrAtcETLmIq0GybNubUXVX3990d2y%2BJw1SE82KNzFwAGTF4Idnh%2FInGSBXpQ3GS%2BqUUvXKlU5GpX4W%2BifL%2BYmtPArWq%2F&X-Amz-Signature=da57dc3a4db0fab5b5b28a5f3bd69a09715bd63e131f40859e86ff37e691fb16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466762TYHYH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIhDDsz4OhwbeRNsw7RZQmEyCkPK9wmcuxcrLedz7lpAiEApdIR9z%2BtE0CqQSJiO5jvu8jdnNVTaqlGDIrGMGyzcZsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy%2BxIGU75ayvNZM%2FircA7pKUJ5fdptu%2BxUtX%2BWIEvMTgaCr7K5nCZzcP029uij0Vh%2B7bg3PTKXYK9QYUtr46I5kRhSQEQSIHGkaLORm3w6TJI%2BZwWtj7ftCqSKEiNu5CGEO81T6oUik9VVQhZUGS2QhtDP9SBxAKUvYApFcDOfQJKHYZeaFsvYHcehEbdujaIE%2FjLpz03oVztBTXmDVlFVoCmk2emUi2RasUqWqPgX4fu%2B7koCyQE1nCxtmxskAwH44eIowB04RBm1fG7bXP9hj1JLKQtOdVUrIxvYpYvfUCcfSpLP%2F5BZQNlZOXLN%2FkaZuy2cS7yyZupIdhxIepfczb31cpp7xc%2FUh45AjI69XIxDuYnqTCZiIOGZsZQQPjJIDViK2Pn%2ByaSVLGGVHIFvkMO%2FOZpwntRASptntm6fwRPSKYgNKD62MvRomjjm89b6Vd3afdXwTubGNXXWszuI%2BZWBUY3NPXliHfEjBode%2B8s0sgX3%2BkDx5Q%2BzyVux%2Fr7IeBkgvGsLYpNiKzoCyD6zreS0j9X%2BUBn3ew%2Fz7xe5zAMs1WyY6MASLfK3UCAANqJMIBiyedlBrLb1sjVtlyutmS9mVwQrLc9OtOUVKQp7hOEO80nP9c%2FxCx7BvvuPxzB0rejKskzqmGihYMMqP28IGOqUByyovMEVruw5Kh012MRcpDn0cA3%2FxwFF0GtjYW5CJtKepUIqXhZjDi4qYsQLeYGnUyVVvkRZuF3R2MRUsYljrtxfWmPz5ZchYbjvw%2FbxJTWSGkCxDChx3%2Bhiqyg%2F8QYMdcrAtcETLmIq0GybNubUXVX3990d2y%2BJw1SE82KNzFwAGTF4Idnh%2FInGSBXpQ3GS%2BqUUvXKlU5GpX4W%2BifL%2BYmtPArWq%2F&X-Amz-Signature=e99e65434d3abef33f0d5e72d01c889faae15f0a2baf8b2594cca9f8572643df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
