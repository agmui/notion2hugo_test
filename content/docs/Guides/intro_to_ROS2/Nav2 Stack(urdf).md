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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDAQ2PR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF98n6ueo0hYP5waGbudxF3L3dvTfOGA7ly8ioQ%2B1jCAAiEA6FqlUF26YNHFC%2FpayaXaRiaIikCMa7kRqMW4g6fzzzgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCQsqRMY5o%2BqOXkDxCrcAyyQk%2FbcGS4L96M0X6gWNLxw2%2FMCT9%2F8iAKEcYW%2BFXZktoNfaDipBOe4rnDjSGWbCSVMBYqJqsFkmaRL7BDYEWF6A90UQt6HXyTujOBipfCZMViTmgptobsYQ5rjLNvbCekqKI24zjEXOJqxB3rynXf%2BcgdqqW7PB6LXVfqrjEzTPo6vV4plTOr9DRGlWOaS4F08BLKFpedak2XnRYIsoW5yU6t2VEpb5a6Q9uh4kAGlV%2FdbIXBjmwm5CWaWb%2FOy4QS4wa2JJn5ig7L9qlkqFtaLdZEynXpN8HFJdR6IgTpjV5Qoqr6UeMRnqhf9UJdTLwvd212C5m%2B%2Bx5oANfwp09EFQSAs0t7SsCl1g4Z9kPQEoY7tX8RrxciskyM31hgkYy5IKTiFPa65jF0Fz%2FjKlEUtwsRO15Hjkph702GA3iJRGMfYfB5pv9OrUfQOvwiFa93W0WLonfwO28aV3AXWLhnDDyVeZehXBrFomSqHwV9xLcPbU4cJS0N8TW5KUv8r9qG%2BxWNEDD7zmFYFalwaFPlO%2FdpqkbhrxgGraacsIJ8LTs5gMqYH3RxaVWBQj3Kd6XQ0BZv1T3v2vQUYIWdVWzjXo6mZpW6BPBRRTtomO1Kf3TJB7fSSTbjE4kWeMIqc7sAGOqUBI6pYwzhMvR8Ec698ObTdvGw1FTb4E1%2BKA0Txej7Uabp6o8cdDxoGj5DekKu2NunPYiqQvVwQY4sOflJ%2Fuv1B0cdoI%2FORtO4B9haSc9JnIkDmnbjCTSYY1puFDEo34W44RqR%2BBW%2FqeWqymfhAcOt37B9OzQk%2FGCiFuYz5kZWx0wDwf3mRgOniT75zJXMMMaFVXH9WMnvEkvFq3iI7i2l1RQYIgd7L&X-Amz-Signature=83c5303158dce12534610a91544c8bcebc9f74acc94a31fbece32724cbf53908&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDAQ2PR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF98n6ueo0hYP5waGbudxF3L3dvTfOGA7ly8ioQ%2B1jCAAiEA6FqlUF26YNHFC%2FpayaXaRiaIikCMa7kRqMW4g6fzzzgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCQsqRMY5o%2BqOXkDxCrcAyyQk%2FbcGS4L96M0X6gWNLxw2%2FMCT9%2F8iAKEcYW%2BFXZktoNfaDipBOe4rnDjSGWbCSVMBYqJqsFkmaRL7BDYEWF6A90UQt6HXyTujOBipfCZMViTmgptobsYQ5rjLNvbCekqKI24zjEXOJqxB3rynXf%2BcgdqqW7PB6LXVfqrjEzTPo6vV4plTOr9DRGlWOaS4F08BLKFpedak2XnRYIsoW5yU6t2VEpb5a6Q9uh4kAGlV%2FdbIXBjmwm5CWaWb%2FOy4QS4wa2JJn5ig7L9qlkqFtaLdZEynXpN8HFJdR6IgTpjV5Qoqr6UeMRnqhf9UJdTLwvd212C5m%2B%2Bx5oANfwp09EFQSAs0t7SsCl1g4Z9kPQEoY7tX8RrxciskyM31hgkYy5IKTiFPa65jF0Fz%2FjKlEUtwsRO15Hjkph702GA3iJRGMfYfB5pv9OrUfQOvwiFa93W0WLonfwO28aV3AXWLhnDDyVeZehXBrFomSqHwV9xLcPbU4cJS0N8TW5KUv8r9qG%2BxWNEDD7zmFYFalwaFPlO%2FdpqkbhrxgGraacsIJ8LTs5gMqYH3RxaVWBQj3Kd6XQ0BZv1T3v2vQUYIWdVWzjXo6mZpW6BPBRRTtomO1Kf3TJB7fSSTbjE4kWeMIqc7sAGOqUBI6pYwzhMvR8Ec698ObTdvGw1FTb4E1%2BKA0Txej7Uabp6o8cdDxoGj5DekKu2NunPYiqQvVwQY4sOflJ%2Fuv1B0cdoI%2FORtO4B9haSc9JnIkDmnbjCTSYY1puFDEo34W44RqR%2BBW%2FqeWqymfhAcOt37B9OzQk%2FGCiFuYz5kZWx0wDwf3mRgOniT75zJXMMMaFVXH9WMnvEkvFq3iI7i2l1RQYIgd7L&X-Amz-Signature=e24d764aef05c8a6248431537711528cdb0ef0810fa29ab43679f48005243d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDAQ2PR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF98n6ueo0hYP5waGbudxF3L3dvTfOGA7ly8ioQ%2B1jCAAiEA6FqlUF26YNHFC%2FpayaXaRiaIikCMa7kRqMW4g6fzzzgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCQsqRMY5o%2BqOXkDxCrcAyyQk%2FbcGS4L96M0X6gWNLxw2%2FMCT9%2F8iAKEcYW%2BFXZktoNfaDipBOe4rnDjSGWbCSVMBYqJqsFkmaRL7BDYEWF6A90UQt6HXyTujOBipfCZMViTmgptobsYQ5rjLNvbCekqKI24zjEXOJqxB3rynXf%2BcgdqqW7PB6LXVfqrjEzTPo6vV4plTOr9DRGlWOaS4F08BLKFpedak2XnRYIsoW5yU6t2VEpb5a6Q9uh4kAGlV%2FdbIXBjmwm5CWaWb%2FOy4QS4wa2JJn5ig7L9qlkqFtaLdZEynXpN8HFJdR6IgTpjV5Qoqr6UeMRnqhf9UJdTLwvd212C5m%2B%2Bx5oANfwp09EFQSAs0t7SsCl1g4Z9kPQEoY7tX8RrxciskyM31hgkYy5IKTiFPa65jF0Fz%2FjKlEUtwsRO15Hjkph702GA3iJRGMfYfB5pv9OrUfQOvwiFa93W0WLonfwO28aV3AXWLhnDDyVeZehXBrFomSqHwV9xLcPbU4cJS0N8TW5KUv8r9qG%2BxWNEDD7zmFYFalwaFPlO%2FdpqkbhrxgGraacsIJ8LTs5gMqYH3RxaVWBQj3Kd6XQ0BZv1T3v2vQUYIWdVWzjXo6mZpW6BPBRRTtomO1Kf3TJB7fSSTbjE4kWeMIqc7sAGOqUBI6pYwzhMvR8Ec698ObTdvGw1FTb4E1%2BKA0Txej7Uabp6o8cdDxoGj5DekKu2NunPYiqQvVwQY4sOflJ%2Fuv1B0cdoI%2FORtO4B9haSc9JnIkDmnbjCTSYY1puFDEo34W44RqR%2BBW%2FqeWqymfhAcOt37B9OzQk%2FGCiFuYz5kZWx0wDwf3mRgOniT75zJXMMMaFVXH9WMnvEkvFq3iI7i2l1RQYIgd7L&X-Amz-Signature=aaed476ea70e6d856ae21e6520fdf7bce59a8ef51bcb4b986841a0e6c823abc1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDAQ2PR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF98n6ueo0hYP5waGbudxF3L3dvTfOGA7ly8ioQ%2B1jCAAiEA6FqlUF26YNHFC%2FpayaXaRiaIikCMa7kRqMW4g6fzzzgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCQsqRMY5o%2BqOXkDxCrcAyyQk%2FbcGS4L96M0X6gWNLxw2%2FMCT9%2F8iAKEcYW%2BFXZktoNfaDipBOe4rnDjSGWbCSVMBYqJqsFkmaRL7BDYEWF6A90UQt6HXyTujOBipfCZMViTmgptobsYQ5rjLNvbCekqKI24zjEXOJqxB3rynXf%2BcgdqqW7PB6LXVfqrjEzTPo6vV4plTOr9DRGlWOaS4F08BLKFpedak2XnRYIsoW5yU6t2VEpb5a6Q9uh4kAGlV%2FdbIXBjmwm5CWaWb%2FOy4QS4wa2JJn5ig7L9qlkqFtaLdZEynXpN8HFJdR6IgTpjV5Qoqr6UeMRnqhf9UJdTLwvd212C5m%2B%2Bx5oANfwp09EFQSAs0t7SsCl1g4Z9kPQEoY7tX8RrxciskyM31hgkYy5IKTiFPa65jF0Fz%2FjKlEUtwsRO15Hjkph702GA3iJRGMfYfB5pv9OrUfQOvwiFa93W0WLonfwO28aV3AXWLhnDDyVeZehXBrFomSqHwV9xLcPbU4cJS0N8TW5KUv8r9qG%2BxWNEDD7zmFYFalwaFPlO%2FdpqkbhrxgGraacsIJ8LTs5gMqYH3RxaVWBQj3Kd6XQ0BZv1T3v2vQUYIWdVWzjXo6mZpW6BPBRRTtomO1Kf3TJB7fSSTbjE4kWeMIqc7sAGOqUBI6pYwzhMvR8Ec698ObTdvGw1FTb4E1%2BKA0Txej7Uabp6o8cdDxoGj5DekKu2NunPYiqQvVwQY4sOflJ%2Fuv1B0cdoI%2FORtO4B9haSc9JnIkDmnbjCTSYY1puFDEo34W44RqR%2BBW%2FqeWqymfhAcOt37B9OzQk%2FGCiFuYz5kZWx0wDwf3mRgOniT75zJXMMMaFVXH9WMnvEkvFq3iI7i2l1RQYIgd7L&X-Amz-Signature=5f5409fc94fa50132abcf5261a104b0000269330a6398f11c509b302e9f69941&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDAQ2PR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF98n6ueo0hYP5waGbudxF3L3dvTfOGA7ly8ioQ%2B1jCAAiEA6FqlUF26YNHFC%2FpayaXaRiaIikCMa7kRqMW4g6fzzzgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCQsqRMY5o%2BqOXkDxCrcAyyQk%2FbcGS4L96M0X6gWNLxw2%2FMCT9%2F8iAKEcYW%2BFXZktoNfaDipBOe4rnDjSGWbCSVMBYqJqsFkmaRL7BDYEWF6A90UQt6HXyTujOBipfCZMViTmgptobsYQ5rjLNvbCekqKI24zjEXOJqxB3rynXf%2BcgdqqW7PB6LXVfqrjEzTPo6vV4plTOr9DRGlWOaS4F08BLKFpedak2XnRYIsoW5yU6t2VEpb5a6Q9uh4kAGlV%2FdbIXBjmwm5CWaWb%2FOy4QS4wa2JJn5ig7L9qlkqFtaLdZEynXpN8HFJdR6IgTpjV5Qoqr6UeMRnqhf9UJdTLwvd212C5m%2B%2Bx5oANfwp09EFQSAs0t7SsCl1g4Z9kPQEoY7tX8RrxciskyM31hgkYy5IKTiFPa65jF0Fz%2FjKlEUtwsRO15Hjkph702GA3iJRGMfYfB5pv9OrUfQOvwiFa93W0WLonfwO28aV3AXWLhnDDyVeZehXBrFomSqHwV9xLcPbU4cJS0N8TW5KUv8r9qG%2BxWNEDD7zmFYFalwaFPlO%2FdpqkbhrxgGraacsIJ8LTs5gMqYH3RxaVWBQj3Kd6XQ0BZv1T3v2vQUYIWdVWzjXo6mZpW6BPBRRTtomO1Kf3TJB7fSSTbjE4kWeMIqc7sAGOqUBI6pYwzhMvR8Ec698ObTdvGw1FTb4E1%2BKA0Txej7Uabp6o8cdDxoGj5DekKu2NunPYiqQvVwQY4sOflJ%2Fuv1B0cdoI%2FORtO4B9haSc9JnIkDmnbjCTSYY1puFDEo34W44RqR%2BBW%2FqeWqymfhAcOt37B9OzQk%2FGCiFuYz5kZWx0wDwf3mRgOniT75zJXMMMaFVXH9WMnvEkvFq3iI7i2l1RQYIgd7L&X-Amz-Signature=f89c25a28879c9aceb27fa0505818bcbf3825223d96a8c67a8fcfc5f313a948a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDAQ2PR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF98n6ueo0hYP5waGbudxF3L3dvTfOGA7ly8ioQ%2B1jCAAiEA6FqlUF26YNHFC%2FpayaXaRiaIikCMa7kRqMW4g6fzzzgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCQsqRMY5o%2BqOXkDxCrcAyyQk%2FbcGS4L96M0X6gWNLxw2%2FMCT9%2F8iAKEcYW%2BFXZktoNfaDipBOe4rnDjSGWbCSVMBYqJqsFkmaRL7BDYEWF6A90UQt6HXyTujOBipfCZMViTmgptobsYQ5rjLNvbCekqKI24zjEXOJqxB3rynXf%2BcgdqqW7PB6LXVfqrjEzTPo6vV4plTOr9DRGlWOaS4F08BLKFpedak2XnRYIsoW5yU6t2VEpb5a6Q9uh4kAGlV%2FdbIXBjmwm5CWaWb%2FOy4QS4wa2JJn5ig7L9qlkqFtaLdZEynXpN8HFJdR6IgTpjV5Qoqr6UeMRnqhf9UJdTLwvd212C5m%2B%2Bx5oANfwp09EFQSAs0t7SsCl1g4Z9kPQEoY7tX8RrxciskyM31hgkYy5IKTiFPa65jF0Fz%2FjKlEUtwsRO15Hjkph702GA3iJRGMfYfB5pv9OrUfQOvwiFa93W0WLonfwO28aV3AXWLhnDDyVeZehXBrFomSqHwV9xLcPbU4cJS0N8TW5KUv8r9qG%2BxWNEDD7zmFYFalwaFPlO%2FdpqkbhrxgGraacsIJ8LTs5gMqYH3RxaVWBQj3Kd6XQ0BZv1T3v2vQUYIWdVWzjXo6mZpW6BPBRRTtomO1Kf3TJB7fSSTbjE4kWeMIqc7sAGOqUBI6pYwzhMvR8Ec698ObTdvGw1FTb4E1%2BKA0Txej7Uabp6o8cdDxoGj5DekKu2NunPYiqQvVwQY4sOflJ%2Fuv1B0cdoI%2FORtO4B9haSc9JnIkDmnbjCTSYY1puFDEo34W44RqR%2BBW%2FqeWqymfhAcOt37B9OzQk%2FGCiFuYz5kZWx0wDwf3mRgOniT75zJXMMMaFVXH9WMnvEkvFq3iI7i2l1RQYIgd7L&X-Amz-Signature=d5914229a16ccfe1e6d4e2944820cd0e1c075a3e26eb2089399ebed8b31af0c0&X-Amz-SignedHeaders=host&x-id=GetObject)
