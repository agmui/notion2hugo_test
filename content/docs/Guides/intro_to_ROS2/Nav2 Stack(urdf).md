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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NED76WV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCICgUheFNUVG3vph5JWpTZqRcJhARPijPnoWQCUUute%2FmAiEAstrwGEHleFAsMIMgY2IbqiSCClvLqhTTzdV3QZr6W6AqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmgqQJvwf7pPhvxzCrcA38wGfK0Td5F%2FVJ4bdLzv7iy4ysRTTsvtimxCXqSDMnoi1M5nprIzkwRDjB7ZvD7Ut4miNZfm23kowIG9glq6IXxdzqSH9BHKuZVDPGjL%2FLVGBusTmB1Ps324O4u0qT2xQaGpOh2wNb6wpZGiwuFDAhWvfxuc4%2B4vF3HojUxuQl2bNdx10Kh2Ab%2Fw8%2Flro8hOzz%2F9NIVkqBXxaiiOFgI2yTJBJn06TYUbzig9CZivexpRnvCgWJChAuLuYF58LBz1LmpHhF5Ox88tZu9sB69z%2FIfWRWV22MtaA6tZ8IrjMrj0XB4VcYKg2zPQHi6hXAOXEbF%2BzVvXHEIZB2bqZAhBUf9bDwNMx93MkIgcKdc1Jsd31EWKmrtrgx4vqdVf071gQq01Rx7UBoPLTQlZQvXyA1z%2BIa83tW7%2Brj7GUWFkj51Yfzr7lx5dHtBh97lriKzRnpK40Tq1%2BDXYj2%2FSM%2FsV7KP%2BHELjU47Q8pPmq9iXPPzUxF9r7LI6sDFmh8RTWHkqaPhnjNVkao8tRrqI%2BlD%2F1i5RxY%2F9wB9qIsHwglnbGj%2BFMejFG5rNntvzj8f22M850T5EXdrFOkkHhDX1WaQd%2BIyftUDDXu92bJES0038rZ%2FsbXQZCSaV7%2FoRIUJMP%2Fu%2B74GOqUBoZpsxyiZdg7dkejJTUnzoucISNIej2ZwZJwx%2Fjr7vtpShnufxy25p%2FqqecG7PWMXLdyGN5%2B3L1iCKDUDSkZM0uGT5NTIAz26m%2BmpUMqRaLBMQNgIDAIhUkarxBM8SaMPxA6si1%2FAsAI8%2FupdXb9JbOpsw8hXfKRRV2tS6JJJ%2Bgh8j9y7QSxFx5xZrKydHyarQVgYuvbgTN2Eas75VjXccAFeE4Q5&X-Amz-Signature=32865c7efabc78854bf5c7047f3e59ae0e01f444fffe37b2dbfbf7aa2acfe973&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NED76WV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCICgUheFNUVG3vph5JWpTZqRcJhARPijPnoWQCUUute%2FmAiEAstrwGEHleFAsMIMgY2IbqiSCClvLqhTTzdV3QZr6W6AqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmgqQJvwf7pPhvxzCrcA38wGfK0Td5F%2FVJ4bdLzv7iy4ysRTTsvtimxCXqSDMnoi1M5nprIzkwRDjB7ZvD7Ut4miNZfm23kowIG9glq6IXxdzqSH9BHKuZVDPGjL%2FLVGBusTmB1Ps324O4u0qT2xQaGpOh2wNb6wpZGiwuFDAhWvfxuc4%2B4vF3HojUxuQl2bNdx10Kh2Ab%2Fw8%2Flro8hOzz%2F9NIVkqBXxaiiOFgI2yTJBJn06TYUbzig9CZivexpRnvCgWJChAuLuYF58LBz1LmpHhF5Ox88tZu9sB69z%2FIfWRWV22MtaA6tZ8IrjMrj0XB4VcYKg2zPQHi6hXAOXEbF%2BzVvXHEIZB2bqZAhBUf9bDwNMx93MkIgcKdc1Jsd31EWKmrtrgx4vqdVf071gQq01Rx7UBoPLTQlZQvXyA1z%2BIa83tW7%2Brj7GUWFkj51Yfzr7lx5dHtBh97lriKzRnpK40Tq1%2BDXYj2%2FSM%2FsV7KP%2BHELjU47Q8pPmq9iXPPzUxF9r7LI6sDFmh8RTWHkqaPhnjNVkao8tRrqI%2BlD%2F1i5RxY%2F9wB9qIsHwglnbGj%2BFMejFG5rNntvzj8f22M850T5EXdrFOkkHhDX1WaQd%2BIyftUDDXu92bJES0038rZ%2FsbXQZCSaV7%2FoRIUJMP%2Fu%2B74GOqUBoZpsxyiZdg7dkejJTUnzoucISNIej2ZwZJwx%2Fjr7vtpShnufxy25p%2FqqecG7PWMXLdyGN5%2B3L1iCKDUDSkZM0uGT5NTIAz26m%2BmpUMqRaLBMQNgIDAIhUkarxBM8SaMPxA6si1%2FAsAI8%2FupdXb9JbOpsw8hXfKRRV2tS6JJJ%2Bgh8j9y7QSxFx5xZrKydHyarQVgYuvbgTN2Eas75VjXccAFeE4Q5&X-Amz-Signature=77b48ebbe3933c9af4f033cf7946e6898a4f2c86e4e1bf61569ecc58998359ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NED76WV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCICgUheFNUVG3vph5JWpTZqRcJhARPijPnoWQCUUute%2FmAiEAstrwGEHleFAsMIMgY2IbqiSCClvLqhTTzdV3QZr6W6AqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmgqQJvwf7pPhvxzCrcA38wGfK0Td5F%2FVJ4bdLzv7iy4ysRTTsvtimxCXqSDMnoi1M5nprIzkwRDjB7ZvD7Ut4miNZfm23kowIG9glq6IXxdzqSH9BHKuZVDPGjL%2FLVGBusTmB1Ps324O4u0qT2xQaGpOh2wNb6wpZGiwuFDAhWvfxuc4%2B4vF3HojUxuQl2bNdx10Kh2Ab%2Fw8%2Flro8hOzz%2F9NIVkqBXxaiiOFgI2yTJBJn06TYUbzig9CZivexpRnvCgWJChAuLuYF58LBz1LmpHhF5Ox88tZu9sB69z%2FIfWRWV22MtaA6tZ8IrjMrj0XB4VcYKg2zPQHi6hXAOXEbF%2BzVvXHEIZB2bqZAhBUf9bDwNMx93MkIgcKdc1Jsd31EWKmrtrgx4vqdVf071gQq01Rx7UBoPLTQlZQvXyA1z%2BIa83tW7%2Brj7GUWFkj51Yfzr7lx5dHtBh97lriKzRnpK40Tq1%2BDXYj2%2FSM%2FsV7KP%2BHELjU47Q8pPmq9iXPPzUxF9r7LI6sDFmh8RTWHkqaPhnjNVkao8tRrqI%2BlD%2F1i5RxY%2F9wB9qIsHwglnbGj%2BFMejFG5rNntvzj8f22M850T5EXdrFOkkHhDX1WaQd%2BIyftUDDXu92bJES0038rZ%2FsbXQZCSaV7%2FoRIUJMP%2Fu%2B74GOqUBoZpsxyiZdg7dkejJTUnzoucISNIej2ZwZJwx%2Fjr7vtpShnufxy25p%2FqqecG7PWMXLdyGN5%2B3L1iCKDUDSkZM0uGT5NTIAz26m%2BmpUMqRaLBMQNgIDAIhUkarxBM8SaMPxA6si1%2FAsAI8%2FupdXb9JbOpsw8hXfKRRV2tS6JJJ%2Bgh8j9y7QSxFx5xZrKydHyarQVgYuvbgTN2Eas75VjXccAFeE4Q5&X-Amz-Signature=98c3bad2d671a9ffc89052c482c35f4c345ae46e5b09313f968bd4e52c4dc313&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NED76WV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCICgUheFNUVG3vph5JWpTZqRcJhARPijPnoWQCUUute%2FmAiEAstrwGEHleFAsMIMgY2IbqiSCClvLqhTTzdV3QZr6W6AqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmgqQJvwf7pPhvxzCrcA38wGfK0Td5F%2FVJ4bdLzv7iy4ysRTTsvtimxCXqSDMnoi1M5nprIzkwRDjB7ZvD7Ut4miNZfm23kowIG9glq6IXxdzqSH9BHKuZVDPGjL%2FLVGBusTmB1Ps324O4u0qT2xQaGpOh2wNb6wpZGiwuFDAhWvfxuc4%2B4vF3HojUxuQl2bNdx10Kh2Ab%2Fw8%2Flro8hOzz%2F9NIVkqBXxaiiOFgI2yTJBJn06TYUbzig9CZivexpRnvCgWJChAuLuYF58LBz1LmpHhF5Ox88tZu9sB69z%2FIfWRWV22MtaA6tZ8IrjMrj0XB4VcYKg2zPQHi6hXAOXEbF%2BzVvXHEIZB2bqZAhBUf9bDwNMx93MkIgcKdc1Jsd31EWKmrtrgx4vqdVf071gQq01Rx7UBoPLTQlZQvXyA1z%2BIa83tW7%2Brj7GUWFkj51Yfzr7lx5dHtBh97lriKzRnpK40Tq1%2BDXYj2%2FSM%2FsV7KP%2BHELjU47Q8pPmq9iXPPzUxF9r7LI6sDFmh8RTWHkqaPhnjNVkao8tRrqI%2BlD%2F1i5RxY%2F9wB9qIsHwglnbGj%2BFMejFG5rNntvzj8f22M850T5EXdrFOkkHhDX1WaQd%2BIyftUDDXu92bJES0038rZ%2FsbXQZCSaV7%2FoRIUJMP%2Fu%2B74GOqUBoZpsxyiZdg7dkejJTUnzoucISNIej2ZwZJwx%2Fjr7vtpShnufxy25p%2FqqecG7PWMXLdyGN5%2B3L1iCKDUDSkZM0uGT5NTIAz26m%2BmpUMqRaLBMQNgIDAIhUkarxBM8SaMPxA6si1%2FAsAI8%2FupdXb9JbOpsw8hXfKRRV2tS6JJJ%2Bgh8j9y7QSxFx5xZrKydHyarQVgYuvbgTN2Eas75VjXccAFeE4Q5&X-Amz-Signature=d063667c6419686b403cdc78f0bb939ee99a67aadf87d2c78703f5f5b9853224&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NED76WV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCICgUheFNUVG3vph5JWpTZqRcJhARPijPnoWQCUUute%2FmAiEAstrwGEHleFAsMIMgY2IbqiSCClvLqhTTzdV3QZr6W6AqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmgqQJvwf7pPhvxzCrcA38wGfK0Td5F%2FVJ4bdLzv7iy4ysRTTsvtimxCXqSDMnoi1M5nprIzkwRDjB7ZvD7Ut4miNZfm23kowIG9glq6IXxdzqSH9BHKuZVDPGjL%2FLVGBusTmB1Ps324O4u0qT2xQaGpOh2wNb6wpZGiwuFDAhWvfxuc4%2B4vF3HojUxuQl2bNdx10Kh2Ab%2Fw8%2Flro8hOzz%2F9NIVkqBXxaiiOFgI2yTJBJn06TYUbzig9CZivexpRnvCgWJChAuLuYF58LBz1LmpHhF5Ox88tZu9sB69z%2FIfWRWV22MtaA6tZ8IrjMrj0XB4VcYKg2zPQHi6hXAOXEbF%2BzVvXHEIZB2bqZAhBUf9bDwNMx93MkIgcKdc1Jsd31EWKmrtrgx4vqdVf071gQq01Rx7UBoPLTQlZQvXyA1z%2BIa83tW7%2Brj7GUWFkj51Yfzr7lx5dHtBh97lriKzRnpK40Tq1%2BDXYj2%2FSM%2FsV7KP%2BHELjU47Q8pPmq9iXPPzUxF9r7LI6sDFmh8RTWHkqaPhnjNVkao8tRrqI%2BlD%2F1i5RxY%2F9wB9qIsHwglnbGj%2BFMejFG5rNntvzj8f22M850T5EXdrFOkkHhDX1WaQd%2BIyftUDDXu92bJES0038rZ%2FsbXQZCSaV7%2FoRIUJMP%2Fu%2B74GOqUBoZpsxyiZdg7dkejJTUnzoucISNIej2ZwZJwx%2Fjr7vtpShnufxy25p%2FqqecG7PWMXLdyGN5%2B3L1iCKDUDSkZM0uGT5NTIAz26m%2BmpUMqRaLBMQNgIDAIhUkarxBM8SaMPxA6si1%2FAsAI8%2FupdXb9JbOpsw8hXfKRRV2tS6JJJ%2Bgh8j9y7QSxFx5xZrKydHyarQVgYuvbgTN2Eas75VjXccAFeE4Q5&X-Amz-Signature=7fa3157a987a383f858a2e2fdc09abf259b42f472dde67b2a9472a1ea59e676f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NED76WV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCICgUheFNUVG3vph5JWpTZqRcJhARPijPnoWQCUUute%2FmAiEAstrwGEHleFAsMIMgY2IbqiSCClvLqhTTzdV3QZr6W6AqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmgqQJvwf7pPhvxzCrcA38wGfK0Td5F%2FVJ4bdLzv7iy4ysRTTsvtimxCXqSDMnoi1M5nprIzkwRDjB7ZvD7Ut4miNZfm23kowIG9glq6IXxdzqSH9BHKuZVDPGjL%2FLVGBusTmB1Ps324O4u0qT2xQaGpOh2wNb6wpZGiwuFDAhWvfxuc4%2B4vF3HojUxuQl2bNdx10Kh2Ab%2Fw8%2Flro8hOzz%2F9NIVkqBXxaiiOFgI2yTJBJn06TYUbzig9CZivexpRnvCgWJChAuLuYF58LBz1LmpHhF5Ox88tZu9sB69z%2FIfWRWV22MtaA6tZ8IrjMrj0XB4VcYKg2zPQHi6hXAOXEbF%2BzVvXHEIZB2bqZAhBUf9bDwNMx93MkIgcKdc1Jsd31EWKmrtrgx4vqdVf071gQq01Rx7UBoPLTQlZQvXyA1z%2BIa83tW7%2Brj7GUWFkj51Yfzr7lx5dHtBh97lriKzRnpK40Tq1%2BDXYj2%2FSM%2FsV7KP%2BHELjU47Q8pPmq9iXPPzUxF9r7LI6sDFmh8RTWHkqaPhnjNVkao8tRrqI%2BlD%2F1i5RxY%2F9wB9qIsHwglnbGj%2BFMejFG5rNntvzj8f22M850T5EXdrFOkkHhDX1WaQd%2BIyftUDDXu92bJES0038rZ%2FsbXQZCSaV7%2FoRIUJMP%2Fu%2B74GOqUBoZpsxyiZdg7dkejJTUnzoucISNIej2ZwZJwx%2Fjr7vtpShnufxy25p%2FqqecG7PWMXLdyGN5%2B3L1iCKDUDSkZM0uGT5NTIAz26m%2BmpUMqRaLBMQNgIDAIhUkarxBM8SaMPxA6si1%2FAsAI8%2FupdXb9JbOpsw8hXfKRRV2tS6JJJ%2Bgh8j9y7QSxFx5xZrKydHyarQVgYuvbgTN2Eas75VjXccAFeE4Q5&X-Amz-Signature=1990bc9d8281d66e8b1383e1dc5f706361b1fd25e70c43c7eaaf9c871a987b37&X-Amz-SignedHeaders=host&x-id=GetObject)
