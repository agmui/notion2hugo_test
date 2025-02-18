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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SS4LVN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHm2yflHiB1cL6wS6FALTxcsZESA18cqiClVphOMbLg8AiEAtfTvdfD6W0jYxgJQdVanUUN8EoLIyCU5Jr1DfbUstMgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4XzZyuPAX0wj3vqCrcAx%2B%2Ff0saSI7ZID2tR%2FYAJj1hCi3HJfHPmzQoNF%2FG64Qt7Zgkq49BMNcpTH4edLbdypkkAxSAvZIHOj7s8FCW%2B5AetQ%2FQfChiR2hSOnITOmTXb%2BnPlDgoE73e8t3BN0yNal8%2Fc4uGQkwawI6iK5X%2BsUfTqDwcMn9lKj3dyMuOBq2Don2nPAq5ERxof0aHHUbQAKsWZ9gnw0cQX6P13UbF%2FB8azFpswvD%2FVUNzHI43v2%2Flicd2tvVNdaHLaSWAZFPbaCwlrTS7B8vrN5iSQ%2BWNsXmnwq4fiFm75Duys2meX%2BvNCNLmxJYG5EfqSNajTuum2TVCExGg5%2BexqUXTkZgEuuwPUXefXfuQx0IGP10kIpfGQXD%2BtA91cSZabah7uxFk1uvSHWX74hAf0EENXauK2sx6vMEi3zgC5RmHUym2d2Qu6ijewAEK69kI%2FCaVHaub2L7Cf6OlnwL1xM0KRyQyZYtfDQ7j7mjqWqGuzegsuK%2BOHzEYBPQSVdyecR8ByfhPgE2ul91IKKGvY%2FKRlvD3ucEMop1F6pXOeqHk5itOY%2FNDCzC1mXuMBdHo%2BYgVPGrr7uIHgdQmL6BVlJLutYwagTtDxGDHZ%2BX90R%2FvAVxTg3%2B8W42taBUfBRgqTDVwMNaa070GOqUBuY1Pb01AWsWshmhX5khqJWpqn%2B0NotvpakyrrKR%2BMZZf5MCfDFDqf25x8teXxRPQH1kticF2d9qNT7af8JuJmdioTKV%2Bgwt5ks5kBuOhn0%2BmOUXX1s1Mdl7bj%2BEpwyC%2FD4ZRx5jq4bg3jPtiL8biLzIJvibD5tSOj7G9Us2jgBGBCyRZBPGp7lao5GQh6xfAKVllUCLY%2F6enVkPNe3IruGk0DD8D&X-Amz-Signature=94e6932e8581f4f912fdd8acdb78df3806cf5b869d3adcb93c4e017ea7b63199&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SS4LVN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHm2yflHiB1cL6wS6FALTxcsZESA18cqiClVphOMbLg8AiEAtfTvdfD6W0jYxgJQdVanUUN8EoLIyCU5Jr1DfbUstMgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4XzZyuPAX0wj3vqCrcAx%2B%2Ff0saSI7ZID2tR%2FYAJj1hCi3HJfHPmzQoNF%2FG64Qt7Zgkq49BMNcpTH4edLbdypkkAxSAvZIHOj7s8FCW%2B5AetQ%2FQfChiR2hSOnITOmTXb%2BnPlDgoE73e8t3BN0yNal8%2Fc4uGQkwawI6iK5X%2BsUfTqDwcMn9lKj3dyMuOBq2Don2nPAq5ERxof0aHHUbQAKsWZ9gnw0cQX6P13UbF%2FB8azFpswvD%2FVUNzHI43v2%2Flicd2tvVNdaHLaSWAZFPbaCwlrTS7B8vrN5iSQ%2BWNsXmnwq4fiFm75Duys2meX%2BvNCNLmxJYG5EfqSNajTuum2TVCExGg5%2BexqUXTkZgEuuwPUXefXfuQx0IGP10kIpfGQXD%2BtA91cSZabah7uxFk1uvSHWX74hAf0EENXauK2sx6vMEi3zgC5RmHUym2d2Qu6ijewAEK69kI%2FCaVHaub2L7Cf6OlnwL1xM0KRyQyZYtfDQ7j7mjqWqGuzegsuK%2BOHzEYBPQSVdyecR8ByfhPgE2ul91IKKGvY%2FKRlvD3ucEMop1F6pXOeqHk5itOY%2FNDCzC1mXuMBdHo%2BYgVPGrr7uIHgdQmL6BVlJLutYwagTtDxGDHZ%2BX90R%2FvAVxTg3%2B8W42taBUfBRgqTDVwMNaa070GOqUBuY1Pb01AWsWshmhX5khqJWpqn%2B0NotvpakyrrKR%2BMZZf5MCfDFDqf25x8teXxRPQH1kticF2d9qNT7af8JuJmdioTKV%2Bgwt5ks5kBuOhn0%2BmOUXX1s1Mdl7bj%2BEpwyC%2FD4ZRx5jq4bg3jPtiL8biLzIJvibD5tSOj7G9Us2jgBGBCyRZBPGp7lao5GQh6xfAKVllUCLY%2F6enVkPNe3IruGk0DD8D&X-Amz-Signature=8bf8fbbbc2329ad013cf5488d37553c79b1c129bfcd1622cc66a2130006b12c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SS4LVN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHm2yflHiB1cL6wS6FALTxcsZESA18cqiClVphOMbLg8AiEAtfTvdfD6W0jYxgJQdVanUUN8EoLIyCU5Jr1DfbUstMgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4XzZyuPAX0wj3vqCrcAx%2B%2Ff0saSI7ZID2tR%2FYAJj1hCi3HJfHPmzQoNF%2FG64Qt7Zgkq49BMNcpTH4edLbdypkkAxSAvZIHOj7s8FCW%2B5AetQ%2FQfChiR2hSOnITOmTXb%2BnPlDgoE73e8t3BN0yNal8%2Fc4uGQkwawI6iK5X%2BsUfTqDwcMn9lKj3dyMuOBq2Don2nPAq5ERxof0aHHUbQAKsWZ9gnw0cQX6P13UbF%2FB8azFpswvD%2FVUNzHI43v2%2Flicd2tvVNdaHLaSWAZFPbaCwlrTS7B8vrN5iSQ%2BWNsXmnwq4fiFm75Duys2meX%2BvNCNLmxJYG5EfqSNajTuum2TVCExGg5%2BexqUXTkZgEuuwPUXefXfuQx0IGP10kIpfGQXD%2BtA91cSZabah7uxFk1uvSHWX74hAf0EENXauK2sx6vMEi3zgC5RmHUym2d2Qu6ijewAEK69kI%2FCaVHaub2L7Cf6OlnwL1xM0KRyQyZYtfDQ7j7mjqWqGuzegsuK%2BOHzEYBPQSVdyecR8ByfhPgE2ul91IKKGvY%2FKRlvD3ucEMop1F6pXOeqHk5itOY%2FNDCzC1mXuMBdHo%2BYgVPGrr7uIHgdQmL6BVlJLutYwagTtDxGDHZ%2BX90R%2FvAVxTg3%2B8W42taBUfBRgqTDVwMNaa070GOqUBuY1Pb01AWsWshmhX5khqJWpqn%2B0NotvpakyrrKR%2BMZZf5MCfDFDqf25x8teXxRPQH1kticF2d9qNT7af8JuJmdioTKV%2Bgwt5ks5kBuOhn0%2BmOUXX1s1Mdl7bj%2BEpwyC%2FD4ZRx5jq4bg3jPtiL8biLzIJvibD5tSOj7G9Us2jgBGBCyRZBPGp7lao5GQh6xfAKVllUCLY%2F6enVkPNe3IruGk0DD8D&X-Amz-Signature=488fe6020ddc90f9bcb13c11a17cab3eec251ae3e61e20bd0d328c9cc959518d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SS4LVN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHm2yflHiB1cL6wS6FALTxcsZESA18cqiClVphOMbLg8AiEAtfTvdfD6W0jYxgJQdVanUUN8EoLIyCU5Jr1DfbUstMgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4XzZyuPAX0wj3vqCrcAx%2B%2Ff0saSI7ZID2tR%2FYAJj1hCi3HJfHPmzQoNF%2FG64Qt7Zgkq49BMNcpTH4edLbdypkkAxSAvZIHOj7s8FCW%2B5AetQ%2FQfChiR2hSOnITOmTXb%2BnPlDgoE73e8t3BN0yNal8%2Fc4uGQkwawI6iK5X%2BsUfTqDwcMn9lKj3dyMuOBq2Don2nPAq5ERxof0aHHUbQAKsWZ9gnw0cQX6P13UbF%2FB8azFpswvD%2FVUNzHI43v2%2Flicd2tvVNdaHLaSWAZFPbaCwlrTS7B8vrN5iSQ%2BWNsXmnwq4fiFm75Duys2meX%2BvNCNLmxJYG5EfqSNajTuum2TVCExGg5%2BexqUXTkZgEuuwPUXefXfuQx0IGP10kIpfGQXD%2BtA91cSZabah7uxFk1uvSHWX74hAf0EENXauK2sx6vMEi3zgC5RmHUym2d2Qu6ijewAEK69kI%2FCaVHaub2L7Cf6OlnwL1xM0KRyQyZYtfDQ7j7mjqWqGuzegsuK%2BOHzEYBPQSVdyecR8ByfhPgE2ul91IKKGvY%2FKRlvD3ucEMop1F6pXOeqHk5itOY%2FNDCzC1mXuMBdHo%2BYgVPGrr7uIHgdQmL6BVlJLutYwagTtDxGDHZ%2BX90R%2FvAVxTg3%2B8W42taBUfBRgqTDVwMNaa070GOqUBuY1Pb01AWsWshmhX5khqJWpqn%2B0NotvpakyrrKR%2BMZZf5MCfDFDqf25x8teXxRPQH1kticF2d9qNT7af8JuJmdioTKV%2Bgwt5ks5kBuOhn0%2BmOUXX1s1Mdl7bj%2BEpwyC%2FD4ZRx5jq4bg3jPtiL8biLzIJvibD5tSOj7G9Us2jgBGBCyRZBPGp7lao5GQh6xfAKVllUCLY%2F6enVkPNe3IruGk0DD8D&X-Amz-Signature=b8fdc0f262e519e9c94321852990e647b3a26328a62ffa93d0b331da8279499a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SS4LVN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHm2yflHiB1cL6wS6FALTxcsZESA18cqiClVphOMbLg8AiEAtfTvdfD6W0jYxgJQdVanUUN8EoLIyCU5Jr1DfbUstMgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4XzZyuPAX0wj3vqCrcAx%2B%2Ff0saSI7ZID2tR%2FYAJj1hCi3HJfHPmzQoNF%2FG64Qt7Zgkq49BMNcpTH4edLbdypkkAxSAvZIHOj7s8FCW%2B5AetQ%2FQfChiR2hSOnITOmTXb%2BnPlDgoE73e8t3BN0yNal8%2Fc4uGQkwawI6iK5X%2BsUfTqDwcMn9lKj3dyMuOBq2Don2nPAq5ERxof0aHHUbQAKsWZ9gnw0cQX6P13UbF%2FB8azFpswvD%2FVUNzHI43v2%2Flicd2tvVNdaHLaSWAZFPbaCwlrTS7B8vrN5iSQ%2BWNsXmnwq4fiFm75Duys2meX%2BvNCNLmxJYG5EfqSNajTuum2TVCExGg5%2BexqUXTkZgEuuwPUXefXfuQx0IGP10kIpfGQXD%2BtA91cSZabah7uxFk1uvSHWX74hAf0EENXauK2sx6vMEi3zgC5RmHUym2d2Qu6ijewAEK69kI%2FCaVHaub2L7Cf6OlnwL1xM0KRyQyZYtfDQ7j7mjqWqGuzegsuK%2BOHzEYBPQSVdyecR8ByfhPgE2ul91IKKGvY%2FKRlvD3ucEMop1F6pXOeqHk5itOY%2FNDCzC1mXuMBdHo%2BYgVPGrr7uIHgdQmL6BVlJLutYwagTtDxGDHZ%2BX90R%2FvAVxTg3%2B8W42taBUfBRgqTDVwMNaa070GOqUBuY1Pb01AWsWshmhX5khqJWpqn%2B0NotvpakyrrKR%2BMZZf5MCfDFDqf25x8teXxRPQH1kticF2d9qNT7af8JuJmdioTKV%2Bgwt5ks5kBuOhn0%2BmOUXX1s1Mdl7bj%2BEpwyC%2FD4ZRx5jq4bg3jPtiL8biLzIJvibD5tSOj7G9Us2jgBGBCyRZBPGp7lao5GQh6xfAKVllUCLY%2F6enVkPNe3IruGk0DD8D&X-Amz-Signature=a2228fddb65651e15cea6f6d14980897254c9c147ed1120399c8e03169b82334&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SS4LVN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHm2yflHiB1cL6wS6FALTxcsZESA18cqiClVphOMbLg8AiEAtfTvdfD6W0jYxgJQdVanUUN8EoLIyCU5Jr1DfbUstMgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4XzZyuPAX0wj3vqCrcAx%2B%2Ff0saSI7ZID2tR%2FYAJj1hCi3HJfHPmzQoNF%2FG64Qt7Zgkq49BMNcpTH4edLbdypkkAxSAvZIHOj7s8FCW%2B5AetQ%2FQfChiR2hSOnITOmTXb%2BnPlDgoE73e8t3BN0yNal8%2Fc4uGQkwawI6iK5X%2BsUfTqDwcMn9lKj3dyMuOBq2Don2nPAq5ERxof0aHHUbQAKsWZ9gnw0cQX6P13UbF%2FB8azFpswvD%2FVUNzHI43v2%2Flicd2tvVNdaHLaSWAZFPbaCwlrTS7B8vrN5iSQ%2BWNsXmnwq4fiFm75Duys2meX%2BvNCNLmxJYG5EfqSNajTuum2TVCExGg5%2BexqUXTkZgEuuwPUXefXfuQx0IGP10kIpfGQXD%2BtA91cSZabah7uxFk1uvSHWX74hAf0EENXauK2sx6vMEi3zgC5RmHUym2d2Qu6ijewAEK69kI%2FCaVHaub2L7Cf6OlnwL1xM0KRyQyZYtfDQ7j7mjqWqGuzegsuK%2BOHzEYBPQSVdyecR8ByfhPgE2ul91IKKGvY%2FKRlvD3ucEMop1F6pXOeqHk5itOY%2FNDCzC1mXuMBdHo%2BYgVPGrr7uIHgdQmL6BVlJLutYwagTtDxGDHZ%2BX90R%2FvAVxTg3%2B8W42taBUfBRgqTDVwMNaa070GOqUBuY1Pb01AWsWshmhX5khqJWpqn%2B0NotvpakyrrKR%2BMZZf5MCfDFDqf25x8teXxRPQH1kticF2d9qNT7af8JuJmdioTKV%2Bgwt5ks5kBuOhn0%2BmOUXX1s1Mdl7bj%2BEpwyC%2FD4ZRx5jq4bg3jPtiL8biLzIJvibD5tSOj7G9Us2jgBGBCyRZBPGp7lao5GQh6xfAKVllUCLY%2F6enVkPNe3IruGk0DD8D&X-Amz-Signature=da31ed9df06eb70d79920b27d77d466b8b2750e5407a017226e8be07459b5a21&X-Amz-SignedHeaders=host&x-id=GetObject)
