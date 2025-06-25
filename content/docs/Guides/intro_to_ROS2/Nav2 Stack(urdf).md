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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSPNCOW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBGMQGKhtBkRsI7c5yWhvdudFkaJiJo2Pn0wQFzy9vJyAiEAy7e4SH7G93sEzfr6R%2Bn60jPMmEHIvF7DWVrhI11nx1gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMakA2riYmJZ5b0XiyrcAzvBFJYZngjXfgPPU4tORelSbi2PjHF9UX03MJ03LJFe6EF%2BeRbpnMmw4aex3K66k5uukyxXis%2B7%2B%2BUKWdnd0kfzWN3f1x0rGDvrtVY%2B74nnTTu39NNAnyBGV2GET9uOecjjklU2mI7CiL8CL6muLcYccJXa0LitVwEIFjgQQ4AWZCz%2BqaV%2FbTz4VWZXpRDvX3WMqXpY0bsO7ZLQXx7BV2uTD1jsy3i8W5fvVAnrv5ptMv2Lnw9jM9Ihy%2FHP%2Fo8aGiq31BvkKZxc00lCMhM%2Fh%2Bf3TgaUJQe2KnqHqf1gS%2BMJ%2FIBHh%2BZtYReE4zJQQz%2FC7CBeLxlHH6RiUCrh2v528JiPKDTsndMfl0T3LKpMaUoCcCbp8QC3N5JZlmPOZ5lKXR8l%2FPtBapqnrPCn7Hrb%2FrNKYci7rsvyF%2FAHZAn2r7jgH3%2B2%2BpdiU%2B36suYwuNK%2FKXVGeGg87M16LM7x3sYOzzZ47b8xSL48dflo9RqqCQxpZmABkCeU5vXFKjZdwuzpzvl2RbEbhjFMVG1GLILRi%2FOy1i6kKQPIHwkhdgi16R3FpclJYbvA7QOl2D8waAY8UQeTUD3MrKoCYp3sOWaoMd%2B%2Fu7ADA%2B83c6zB0Sw4Qsrt8Lc6SCY028yVjfOSMKSl7sIGOqUBWisEFtR3UJQy4JkDqpr24%2FlDZJ5OoEs5AKidsIin3PPjBw1LEbDdqAQehhhsK7UDJXyidXxF6h9s%2FFNjJVBrOJIruNq5Q0ldB49P4syO61BeOw9jAcvTpjUFzUokrG8MTqEhNvSGNuLLh81KyPQXPntdXE1H1GRObaOMp96O1qwWiwsnt9XU%2Bn8ElFy2pGi%2Bfwaz666E1Ip%2BoMoACJ%2FFqjmt%2Frv5&X-Amz-Signature=a2ddb6e5616fe9f01f112b277a9791ff0182aed60681388958420b28cffe4c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSPNCOW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBGMQGKhtBkRsI7c5yWhvdudFkaJiJo2Pn0wQFzy9vJyAiEAy7e4SH7G93sEzfr6R%2Bn60jPMmEHIvF7DWVrhI11nx1gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMakA2riYmJZ5b0XiyrcAzvBFJYZngjXfgPPU4tORelSbi2PjHF9UX03MJ03LJFe6EF%2BeRbpnMmw4aex3K66k5uukyxXis%2B7%2B%2BUKWdnd0kfzWN3f1x0rGDvrtVY%2B74nnTTu39NNAnyBGV2GET9uOecjjklU2mI7CiL8CL6muLcYccJXa0LitVwEIFjgQQ4AWZCz%2BqaV%2FbTz4VWZXpRDvX3WMqXpY0bsO7ZLQXx7BV2uTD1jsy3i8W5fvVAnrv5ptMv2Lnw9jM9Ihy%2FHP%2Fo8aGiq31BvkKZxc00lCMhM%2Fh%2Bf3TgaUJQe2KnqHqf1gS%2BMJ%2FIBHh%2BZtYReE4zJQQz%2FC7CBeLxlHH6RiUCrh2v528JiPKDTsndMfl0T3LKpMaUoCcCbp8QC3N5JZlmPOZ5lKXR8l%2FPtBapqnrPCn7Hrb%2FrNKYci7rsvyF%2FAHZAn2r7jgH3%2B2%2BpdiU%2B36suYwuNK%2FKXVGeGg87M16LM7x3sYOzzZ47b8xSL48dflo9RqqCQxpZmABkCeU5vXFKjZdwuzpzvl2RbEbhjFMVG1GLILRi%2FOy1i6kKQPIHwkhdgi16R3FpclJYbvA7QOl2D8waAY8UQeTUD3MrKoCYp3sOWaoMd%2B%2Fu7ADA%2B83c6zB0Sw4Qsrt8Lc6SCY028yVjfOSMKSl7sIGOqUBWisEFtR3UJQy4JkDqpr24%2FlDZJ5OoEs5AKidsIin3PPjBw1LEbDdqAQehhhsK7UDJXyidXxF6h9s%2FFNjJVBrOJIruNq5Q0ldB49P4syO61BeOw9jAcvTpjUFzUokrG8MTqEhNvSGNuLLh81KyPQXPntdXE1H1GRObaOMp96O1qwWiwsnt9XU%2Bn8ElFy2pGi%2Bfwaz666E1Ip%2BoMoACJ%2FFqjmt%2Frv5&X-Amz-Signature=6f8018c21d3d1ed3ea00a7fabae271a57fd628acb05ee2265ae76cb2aa7ae3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSPNCOW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBGMQGKhtBkRsI7c5yWhvdudFkaJiJo2Pn0wQFzy9vJyAiEAy7e4SH7G93sEzfr6R%2Bn60jPMmEHIvF7DWVrhI11nx1gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMakA2riYmJZ5b0XiyrcAzvBFJYZngjXfgPPU4tORelSbi2PjHF9UX03MJ03LJFe6EF%2BeRbpnMmw4aex3K66k5uukyxXis%2B7%2B%2BUKWdnd0kfzWN3f1x0rGDvrtVY%2B74nnTTu39NNAnyBGV2GET9uOecjjklU2mI7CiL8CL6muLcYccJXa0LitVwEIFjgQQ4AWZCz%2BqaV%2FbTz4VWZXpRDvX3WMqXpY0bsO7ZLQXx7BV2uTD1jsy3i8W5fvVAnrv5ptMv2Lnw9jM9Ihy%2FHP%2Fo8aGiq31BvkKZxc00lCMhM%2Fh%2Bf3TgaUJQe2KnqHqf1gS%2BMJ%2FIBHh%2BZtYReE4zJQQz%2FC7CBeLxlHH6RiUCrh2v528JiPKDTsndMfl0T3LKpMaUoCcCbp8QC3N5JZlmPOZ5lKXR8l%2FPtBapqnrPCn7Hrb%2FrNKYci7rsvyF%2FAHZAn2r7jgH3%2B2%2BpdiU%2B36suYwuNK%2FKXVGeGg87M16LM7x3sYOzzZ47b8xSL48dflo9RqqCQxpZmABkCeU5vXFKjZdwuzpzvl2RbEbhjFMVG1GLILRi%2FOy1i6kKQPIHwkhdgi16R3FpclJYbvA7QOl2D8waAY8UQeTUD3MrKoCYp3sOWaoMd%2B%2Fu7ADA%2B83c6zB0Sw4Qsrt8Lc6SCY028yVjfOSMKSl7sIGOqUBWisEFtR3UJQy4JkDqpr24%2FlDZJ5OoEs5AKidsIin3PPjBw1LEbDdqAQehhhsK7UDJXyidXxF6h9s%2FFNjJVBrOJIruNq5Q0ldB49P4syO61BeOw9jAcvTpjUFzUokrG8MTqEhNvSGNuLLh81KyPQXPntdXE1H1GRObaOMp96O1qwWiwsnt9XU%2Bn8ElFy2pGi%2Bfwaz666E1Ip%2BoMoACJ%2FFqjmt%2Frv5&X-Amz-Signature=13d3c2558bcd9b4e0070b639ed5424a105d52178bed30a9c207ac815930b2313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSPNCOW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBGMQGKhtBkRsI7c5yWhvdudFkaJiJo2Pn0wQFzy9vJyAiEAy7e4SH7G93sEzfr6R%2Bn60jPMmEHIvF7DWVrhI11nx1gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMakA2riYmJZ5b0XiyrcAzvBFJYZngjXfgPPU4tORelSbi2PjHF9UX03MJ03LJFe6EF%2BeRbpnMmw4aex3K66k5uukyxXis%2B7%2B%2BUKWdnd0kfzWN3f1x0rGDvrtVY%2B74nnTTu39NNAnyBGV2GET9uOecjjklU2mI7CiL8CL6muLcYccJXa0LitVwEIFjgQQ4AWZCz%2BqaV%2FbTz4VWZXpRDvX3WMqXpY0bsO7ZLQXx7BV2uTD1jsy3i8W5fvVAnrv5ptMv2Lnw9jM9Ihy%2FHP%2Fo8aGiq31BvkKZxc00lCMhM%2Fh%2Bf3TgaUJQe2KnqHqf1gS%2BMJ%2FIBHh%2BZtYReE4zJQQz%2FC7CBeLxlHH6RiUCrh2v528JiPKDTsndMfl0T3LKpMaUoCcCbp8QC3N5JZlmPOZ5lKXR8l%2FPtBapqnrPCn7Hrb%2FrNKYci7rsvyF%2FAHZAn2r7jgH3%2B2%2BpdiU%2B36suYwuNK%2FKXVGeGg87M16LM7x3sYOzzZ47b8xSL48dflo9RqqCQxpZmABkCeU5vXFKjZdwuzpzvl2RbEbhjFMVG1GLILRi%2FOy1i6kKQPIHwkhdgi16R3FpclJYbvA7QOl2D8waAY8UQeTUD3MrKoCYp3sOWaoMd%2B%2Fu7ADA%2B83c6zB0Sw4Qsrt8Lc6SCY028yVjfOSMKSl7sIGOqUBWisEFtR3UJQy4JkDqpr24%2FlDZJ5OoEs5AKidsIin3PPjBw1LEbDdqAQehhhsK7UDJXyidXxF6h9s%2FFNjJVBrOJIruNq5Q0ldB49P4syO61BeOw9jAcvTpjUFzUokrG8MTqEhNvSGNuLLh81KyPQXPntdXE1H1GRObaOMp96O1qwWiwsnt9XU%2Bn8ElFy2pGi%2Bfwaz666E1Ip%2BoMoACJ%2FFqjmt%2Frv5&X-Amz-Signature=25bd4996803b44e1ebfda3aa8104d5122e494214cd1fb1930171319292d7b7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSPNCOW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBGMQGKhtBkRsI7c5yWhvdudFkaJiJo2Pn0wQFzy9vJyAiEAy7e4SH7G93sEzfr6R%2Bn60jPMmEHIvF7DWVrhI11nx1gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMakA2riYmJZ5b0XiyrcAzvBFJYZngjXfgPPU4tORelSbi2PjHF9UX03MJ03LJFe6EF%2BeRbpnMmw4aex3K66k5uukyxXis%2B7%2B%2BUKWdnd0kfzWN3f1x0rGDvrtVY%2B74nnTTu39NNAnyBGV2GET9uOecjjklU2mI7CiL8CL6muLcYccJXa0LitVwEIFjgQQ4AWZCz%2BqaV%2FbTz4VWZXpRDvX3WMqXpY0bsO7ZLQXx7BV2uTD1jsy3i8W5fvVAnrv5ptMv2Lnw9jM9Ihy%2FHP%2Fo8aGiq31BvkKZxc00lCMhM%2Fh%2Bf3TgaUJQe2KnqHqf1gS%2BMJ%2FIBHh%2BZtYReE4zJQQz%2FC7CBeLxlHH6RiUCrh2v528JiPKDTsndMfl0T3LKpMaUoCcCbp8QC3N5JZlmPOZ5lKXR8l%2FPtBapqnrPCn7Hrb%2FrNKYci7rsvyF%2FAHZAn2r7jgH3%2B2%2BpdiU%2B36suYwuNK%2FKXVGeGg87M16LM7x3sYOzzZ47b8xSL48dflo9RqqCQxpZmABkCeU5vXFKjZdwuzpzvl2RbEbhjFMVG1GLILRi%2FOy1i6kKQPIHwkhdgi16R3FpclJYbvA7QOl2D8waAY8UQeTUD3MrKoCYp3sOWaoMd%2B%2Fu7ADA%2B83c6zB0Sw4Qsrt8Lc6SCY028yVjfOSMKSl7sIGOqUBWisEFtR3UJQy4JkDqpr24%2FlDZJ5OoEs5AKidsIin3PPjBw1LEbDdqAQehhhsK7UDJXyidXxF6h9s%2FFNjJVBrOJIruNq5Q0ldB49P4syO61BeOw9jAcvTpjUFzUokrG8MTqEhNvSGNuLLh81KyPQXPntdXE1H1GRObaOMp96O1qwWiwsnt9XU%2Bn8ElFy2pGi%2Bfwaz666E1Ip%2BoMoACJ%2FFqjmt%2Frv5&X-Amz-Signature=91c8bcc0df0f58817ea88d45be276c625876ae3ae805b3156899069987aa5a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSPNCOW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBGMQGKhtBkRsI7c5yWhvdudFkaJiJo2Pn0wQFzy9vJyAiEAy7e4SH7G93sEzfr6R%2Bn60jPMmEHIvF7DWVrhI11nx1gq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMakA2riYmJZ5b0XiyrcAzvBFJYZngjXfgPPU4tORelSbi2PjHF9UX03MJ03LJFe6EF%2BeRbpnMmw4aex3K66k5uukyxXis%2B7%2B%2BUKWdnd0kfzWN3f1x0rGDvrtVY%2B74nnTTu39NNAnyBGV2GET9uOecjjklU2mI7CiL8CL6muLcYccJXa0LitVwEIFjgQQ4AWZCz%2BqaV%2FbTz4VWZXpRDvX3WMqXpY0bsO7ZLQXx7BV2uTD1jsy3i8W5fvVAnrv5ptMv2Lnw9jM9Ihy%2FHP%2Fo8aGiq31BvkKZxc00lCMhM%2Fh%2Bf3TgaUJQe2KnqHqf1gS%2BMJ%2FIBHh%2BZtYReE4zJQQz%2FC7CBeLxlHH6RiUCrh2v528JiPKDTsndMfl0T3LKpMaUoCcCbp8QC3N5JZlmPOZ5lKXR8l%2FPtBapqnrPCn7Hrb%2FrNKYci7rsvyF%2FAHZAn2r7jgH3%2B2%2BpdiU%2B36suYwuNK%2FKXVGeGg87M16LM7x3sYOzzZ47b8xSL48dflo9RqqCQxpZmABkCeU5vXFKjZdwuzpzvl2RbEbhjFMVG1GLILRi%2FOy1i6kKQPIHwkhdgi16R3FpclJYbvA7QOl2D8waAY8UQeTUD3MrKoCYp3sOWaoMd%2B%2Fu7ADA%2B83c6zB0Sw4Qsrt8Lc6SCY028yVjfOSMKSl7sIGOqUBWisEFtR3UJQy4JkDqpr24%2FlDZJ5OoEs5AKidsIin3PPjBw1LEbDdqAQehhhsK7UDJXyidXxF6h9s%2FFNjJVBrOJIruNq5Q0ldB49P4syO61BeOw9jAcvTpjUFzUokrG8MTqEhNvSGNuLLh81KyPQXPntdXE1H1GRObaOMp96O1qwWiwsnt9XU%2Bn8ElFy2pGi%2Bfwaz666E1Ip%2BoMoACJ%2FFqjmt%2Frv5&X-Amz-Signature=0f5b7c4bb71394003bd024e13c974b60ecaf17c8d78e8cd285703eb1e677a572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
