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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7WRRALR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPMZ4h7FgVyL3oNmot2SL3SXLFX0xi9ML60aC0e3%2FFlAiEA10Jc0jt21GfiGbl%2BxQbCJnHUv41c0rLyjFA7yrQhWZMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI49StP9l%2B7zvocN5CrcA2twOUza5T7yW64SS6B52jQ2hziL0uUDsdpgoctcqWh0e6ZYmhDdwXgyeP%2BsAIhrNysXgmgwrVAkZDt5XN0Glh6ZxLEj9uxqEa69qA6H36WK%2BZ0YuntS9UAGf0H3ulFmt5%2BJ1%2F5ETR2IdluRxYaRFKYyCR%2BJDxF3btvq%2FUYTWEZrav1Q%2FxH3OvnCToLk7TaiSINxK5zZhW2E22niOQ0vv5ZnSUapV8sMO0x58KcG%2BW4okfEuTHXZp%2FwsMZN82P2%2B3b45rccK3S4ODKII46kP%2FFIzo9mRPhmuTSWDEdXng4y7iSmL1c%2BtYCM5QocaIixR7OM0Y1ytuhwSo5kWh7NNoVrNyW9U0gXqDJVdcUInPwnVU2Cd%2FPXUY2f0caBMVZHnRUBBumjm0%2BTJzaCzhpBvwV%2FlkMHeYBqyBUlyPHAfbpO9NzVg1MLlEG5uJKH4qaDIwl0SYf93sovtA5rgLwqNh6vGp2TxpP%2FQUoQyXa4qx%2BS1zD%2FSyplK%2Flgg00SieTFNFX%2BIx6%2F67GVUu5wEEl42YI61CJLK7NgJ3BUXymuJQnYR5qWUhIy57kiac%2B18sbt978OpVq8FaDxnNc6J%2FvxvHvBECzRKArYPPlNDx9KipASu8cg%2FKDlgSm8PzXTUMLut2b0GOqUB3gXXF0KWeQwh4lnjbvEKB8uwAQGhV0YkraCydTtwsaX3TR2ag7o%2FOIBstVGbHygSr6KGeLvTl9rqho6btsq0esjH4Ayu8NQasUz7L7CdLrbhViirIMggL2Cd5BzZ7KVUJWbXJI76rKz5CBmtdPUuUjZ%2FW5Cc%2B2ULSvwe1nKTxleC%2FVzBYclKgWMyQugyTk3wXQG08zY%2FbiYbBwNCDvQuqQcKn%2FSw&X-Amz-Signature=f0e6a2363cb8c977382a8243c57afc7c76569884eeb3e21ea40ca9075ae3946c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7WRRALR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPMZ4h7FgVyL3oNmot2SL3SXLFX0xi9ML60aC0e3%2FFlAiEA10Jc0jt21GfiGbl%2BxQbCJnHUv41c0rLyjFA7yrQhWZMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI49StP9l%2B7zvocN5CrcA2twOUza5T7yW64SS6B52jQ2hziL0uUDsdpgoctcqWh0e6ZYmhDdwXgyeP%2BsAIhrNysXgmgwrVAkZDt5XN0Glh6ZxLEj9uxqEa69qA6H36WK%2BZ0YuntS9UAGf0H3ulFmt5%2BJ1%2F5ETR2IdluRxYaRFKYyCR%2BJDxF3btvq%2FUYTWEZrav1Q%2FxH3OvnCToLk7TaiSINxK5zZhW2E22niOQ0vv5ZnSUapV8sMO0x58KcG%2BW4okfEuTHXZp%2FwsMZN82P2%2B3b45rccK3S4ODKII46kP%2FFIzo9mRPhmuTSWDEdXng4y7iSmL1c%2BtYCM5QocaIixR7OM0Y1ytuhwSo5kWh7NNoVrNyW9U0gXqDJVdcUInPwnVU2Cd%2FPXUY2f0caBMVZHnRUBBumjm0%2BTJzaCzhpBvwV%2FlkMHeYBqyBUlyPHAfbpO9NzVg1MLlEG5uJKH4qaDIwl0SYf93sovtA5rgLwqNh6vGp2TxpP%2FQUoQyXa4qx%2BS1zD%2FSyplK%2Flgg00SieTFNFX%2BIx6%2F67GVUu5wEEl42YI61CJLK7NgJ3BUXymuJQnYR5qWUhIy57kiac%2B18sbt978OpVq8FaDxnNc6J%2FvxvHvBECzRKArYPPlNDx9KipASu8cg%2FKDlgSm8PzXTUMLut2b0GOqUB3gXXF0KWeQwh4lnjbvEKB8uwAQGhV0YkraCydTtwsaX3TR2ag7o%2FOIBstVGbHygSr6KGeLvTl9rqho6btsq0esjH4Ayu8NQasUz7L7CdLrbhViirIMggL2Cd5BzZ7KVUJWbXJI76rKz5CBmtdPUuUjZ%2FW5Cc%2B2ULSvwe1nKTxleC%2FVzBYclKgWMyQugyTk3wXQG08zY%2FbiYbBwNCDvQuqQcKn%2FSw&X-Amz-Signature=a6784069e686d81fa32238b1c02eb9e490f57b28092838d54519007e609a252a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7WRRALR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPMZ4h7FgVyL3oNmot2SL3SXLFX0xi9ML60aC0e3%2FFlAiEA10Jc0jt21GfiGbl%2BxQbCJnHUv41c0rLyjFA7yrQhWZMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI49StP9l%2B7zvocN5CrcA2twOUza5T7yW64SS6B52jQ2hziL0uUDsdpgoctcqWh0e6ZYmhDdwXgyeP%2BsAIhrNysXgmgwrVAkZDt5XN0Glh6ZxLEj9uxqEa69qA6H36WK%2BZ0YuntS9UAGf0H3ulFmt5%2BJ1%2F5ETR2IdluRxYaRFKYyCR%2BJDxF3btvq%2FUYTWEZrav1Q%2FxH3OvnCToLk7TaiSINxK5zZhW2E22niOQ0vv5ZnSUapV8sMO0x58KcG%2BW4okfEuTHXZp%2FwsMZN82P2%2B3b45rccK3S4ODKII46kP%2FFIzo9mRPhmuTSWDEdXng4y7iSmL1c%2BtYCM5QocaIixR7OM0Y1ytuhwSo5kWh7NNoVrNyW9U0gXqDJVdcUInPwnVU2Cd%2FPXUY2f0caBMVZHnRUBBumjm0%2BTJzaCzhpBvwV%2FlkMHeYBqyBUlyPHAfbpO9NzVg1MLlEG5uJKH4qaDIwl0SYf93sovtA5rgLwqNh6vGp2TxpP%2FQUoQyXa4qx%2BS1zD%2FSyplK%2Flgg00SieTFNFX%2BIx6%2F67GVUu5wEEl42YI61CJLK7NgJ3BUXymuJQnYR5qWUhIy57kiac%2B18sbt978OpVq8FaDxnNc6J%2FvxvHvBECzRKArYPPlNDx9KipASu8cg%2FKDlgSm8PzXTUMLut2b0GOqUB3gXXF0KWeQwh4lnjbvEKB8uwAQGhV0YkraCydTtwsaX3TR2ag7o%2FOIBstVGbHygSr6KGeLvTl9rqho6btsq0esjH4Ayu8NQasUz7L7CdLrbhViirIMggL2Cd5BzZ7KVUJWbXJI76rKz5CBmtdPUuUjZ%2FW5Cc%2B2ULSvwe1nKTxleC%2FVzBYclKgWMyQugyTk3wXQG08zY%2FbiYbBwNCDvQuqQcKn%2FSw&X-Amz-Signature=5a3284f705a71a0374faf2740b28d4a45866511bc32f9083c8dfb2c614f3ab78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7WRRALR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPMZ4h7FgVyL3oNmot2SL3SXLFX0xi9ML60aC0e3%2FFlAiEA10Jc0jt21GfiGbl%2BxQbCJnHUv41c0rLyjFA7yrQhWZMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI49StP9l%2B7zvocN5CrcA2twOUza5T7yW64SS6B52jQ2hziL0uUDsdpgoctcqWh0e6ZYmhDdwXgyeP%2BsAIhrNysXgmgwrVAkZDt5XN0Glh6ZxLEj9uxqEa69qA6H36WK%2BZ0YuntS9UAGf0H3ulFmt5%2BJ1%2F5ETR2IdluRxYaRFKYyCR%2BJDxF3btvq%2FUYTWEZrav1Q%2FxH3OvnCToLk7TaiSINxK5zZhW2E22niOQ0vv5ZnSUapV8sMO0x58KcG%2BW4okfEuTHXZp%2FwsMZN82P2%2B3b45rccK3S4ODKII46kP%2FFIzo9mRPhmuTSWDEdXng4y7iSmL1c%2BtYCM5QocaIixR7OM0Y1ytuhwSo5kWh7NNoVrNyW9U0gXqDJVdcUInPwnVU2Cd%2FPXUY2f0caBMVZHnRUBBumjm0%2BTJzaCzhpBvwV%2FlkMHeYBqyBUlyPHAfbpO9NzVg1MLlEG5uJKH4qaDIwl0SYf93sovtA5rgLwqNh6vGp2TxpP%2FQUoQyXa4qx%2BS1zD%2FSyplK%2Flgg00SieTFNFX%2BIx6%2F67GVUu5wEEl42YI61CJLK7NgJ3BUXymuJQnYR5qWUhIy57kiac%2B18sbt978OpVq8FaDxnNc6J%2FvxvHvBECzRKArYPPlNDx9KipASu8cg%2FKDlgSm8PzXTUMLut2b0GOqUB3gXXF0KWeQwh4lnjbvEKB8uwAQGhV0YkraCydTtwsaX3TR2ag7o%2FOIBstVGbHygSr6KGeLvTl9rqho6btsq0esjH4Ayu8NQasUz7L7CdLrbhViirIMggL2Cd5BzZ7KVUJWbXJI76rKz5CBmtdPUuUjZ%2FW5Cc%2B2ULSvwe1nKTxleC%2FVzBYclKgWMyQugyTk3wXQG08zY%2FbiYbBwNCDvQuqQcKn%2FSw&X-Amz-Signature=f620b71dfac80530ca8d52f7c402f013c91c52d27411d5866bbbbbea312a8eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7WRRALR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPMZ4h7FgVyL3oNmot2SL3SXLFX0xi9ML60aC0e3%2FFlAiEA10Jc0jt21GfiGbl%2BxQbCJnHUv41c0rLyjFA7yrQhWZMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI49StP9l%2B7zvocN5CrcA2twOUza5T7yW64SS6B52jQ2hziL0uUDsdpgoctcqWh0e6ZYmhDdwXgyeP%2BsAIhrNysXgmgwrVAkZDt5XN0Glh6ZxLEj9uxqEa69qA6H36WK%2BZ0YuntS9UAGf0H3ulFmt5%2BJ1%2F5ETR2IdluRxYaRFKYyCR%2BJDxF3btvq%2FUYTWEZrav1Q%2FxH3OvnCToLk7TaiSINxK5zZhW2E22niOQ0vv5ZnSUapV8sMO0x58KcG%2BW4okfEuTHXZp%2FwsMZN82P2%2B3b45rccK3S4ODKII46kP%2FFIzo9mRPhmuTSWDEdXng4y7iSmL1c%2BtYCM5QocaIixR7OM0Y1ytuhwSo5kWh7NNoVrNyW9U0gXqDJVdcUInPwnVU2Cd%2FPXUY2f0caBMVZHnRUBBumjm0%2BTJzaCzhpBvwV%2FlkMHeYBqyBUlyPHAfbpO9NzVg1MLlEG5uJKH4qaDIwl0SYf93sovtA5rgLwqNh6vGp2TxpP%2FQUoQyXa4qx%2BS1zD%2FSyplK%2Flgg00SieTFNFX%2BIx6%2F67GVUu5wEEl42YI61CJLK7NgJ3BUXymuJQnYR5qWUhIy57kiac%2B18sbt978OpVq8FaDxnNc6J%2FvxvHvBECzRKArYPPlNDx9KipASu8cg%2FKDlgSm8PzXTUMLut2b0GOqUB3gXXF0KWeQwh4lnjbvEKB8uwAQGhV0YkraCydTtwsaX3TR2ag7o%2FOIBstVGbHygSr6KGeLvTl9rqho6btsq0esjH4Ayu8NQasUz7L7CdLrbhViirIMggL2Cd5BzZ7KVUJWbXJI76rKz5CBmtdPUuUjZ%2FW5Cc%2B2ULSvwe1nKTxleC%2FVzBYclKgWMyQugyTk3wXQG08zY%2FbiYbBwNCDvQuqQcKn%2FSw&X-Amz-Signature=9bc6f99ec0b5698ebf7ec156d08cb4d33d6de6873a6b8db97c2cf4cb3d15a0c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7WRRALR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPMZ4h7FgVyL3oNmot2SL3SXLFX0xi9ML60aC0e3%2FFlAiEA10Jc0jt21GfiGbl%2BxQbCJnHUv41c0rLyjFA7yrQhWZMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI49StP9l%2B7zvocN5CrcA2twOUza5T7yW64SS6B52jQ2hziL0uUDsdpgoctcqWh0e6ZYmhDdwXgyeP%2BsAIhrNysXgmgwrVAkZDt5XN0Glh6ZxLEj9uxqEa69qA6H36WK%2BZ0YuntS9UAGf0H3ulFmt5%2BJ1%2F5ETR2IdluRxYaRFKYyCR%2BJDxF3btvq%2FUYTWEZrav1Q%2FxH3OvnCToLk7TaiSINxK5zZhW2E22niOQ0vv5ZnSUapV8sMO0x58KcG%2BW4okfEuTHXZp%2FwsMZN82P2%2B3b45rccK3S4ODKII46kP%2FFIzo9mRPhmuTSWDEdXng4y7iSmL1c%2BtYCM5QocaIixR7OM0Y1ytuhwSo5kWh7NNoVrNyW9U0gXqDJVdcUInPwnVU2Cd%2FPXUY2f0caBMVZHnRUBBumjm0%2BTJzaCzhpBvwV%2FlkMHeYBqyBUlyPHAfbpO9NzVg1MLlEG5uJKH4qaDIwl0SYf93sovtA5rgLwqNh6vGp2TxpP%2FQUoQyXa4qx%2BS1zD%2FSyplK%2Flgg00SieTFNFX%2BIx6%2F67GVUu5wEEl42YI61CJLK7NgJ3BUXymuJQnYR5qWUhIy57kiac%2B18sbt978OpVq8FaDxnNc6J%2FvxvHvBECzRKArYPPlNDx9KipASu8cg%2FKDlgSm8PzXTUMLut2b0GOqUB3gXXF0KWeQwh4lnjbvEKB8uwAQGhV0YkraCydTtwsaX3TR2ag7o%2FOIBstVGbHygSr6KGeLvTl9rqho6btsq0esjH4Ayu8NQasUz7L7CdLrbhViirIMggL2Cd5BzZ7KVUJWbXJI76rKz5CBmtdPUuUjZ%2FW5Cc%2B2ULSvwe1nKTxleC%2FVzBYclKgWMyQugyTk3wXQG08zY%2FbiYbBwNCDvQuqQcKn%2FSw&X-Amz-Signature=4f0ef59160256b7a1b27067887ce7e5ea662fae70a9949f44da35cf0f958dcac&X-Amz-SignedHeaders=host&x-id=GetObject)
