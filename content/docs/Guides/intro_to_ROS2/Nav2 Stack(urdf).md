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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSNP555%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCThCmPYaKSVP9gpXqpUbwl6deRbWfzSEnou%2BxXU0K3zwIhAPROW11CPydb69HmRzUoeFHIwR9%2BcfUQTL3JfNpXNq8rKv8DCCcQABoMNjM3NDIzMTgzODA1Igy4n0Gjnjfx5MdMaRcq3ANbqRLP9qWT5TQKBJwNLbCN6KYIKydCTFy1vOew3YGBy3%2BVJ9TGgJBAvd7pL3g84jn3v29AAvRoW4MrJYnTi2%2Fm6hd%2F2qAuEHrYHRGsvRV7uzHgZIlJwKZA4M1mYM%2B7cQ7yZYL%2B4iDcf9ZLPxYNVyWX2V4%2F92HQk8EsOhHIFYn67%2BXBu%2F%2FHC1zLnU0M7Xcovmh1OmL8AHj3WH5aO1T0u1F5GC8G0oC%2BXLVmGy%2B7vfqvNxo4UYsn5zZ0NVZOvRlmEtd1ZeTCVBnGhhK3OjlLFvIWO3Brtu6zJkpeCpazAGjNuS6lTzE1Ewzp78GXnzwrrAEWucpiQiALV2bxPGmntCSaKkQngOeOIMF4nRBRowJqOa%2FvXekrBgTxbKHZlm3BI%2FuvYHCmbuQHjUbYickLRixaBvWq2AmcneVEd8C66dMgNtMV1HapcLSXFA0q2h2NiZrdtX6HUpOLUMk0QiRyznOk5TDz80mhz3nhVBTZYh896cW4om8NI8Bm%2FsAoVv8UcascDV5mXPFBVZ152TdCCwwHUXkCMh7IPSOtdY8nHzVURFGS7v2zq7iYMbM961KfC4vmxlgzI2EiQs%2FTnHK1FX1MVyJWgaQfk94H8Z6Q6XQ3ixrskcCUrE7mdGy5kTD6k%2FC9BjqkAR5iro8Cf8%2FD2uwvEF2ebXiL49bAFLbY4%2Fr930A0Map83p0Y%2BBfbZx4WmSkaD7CyMTyIOwPlLB3DzFfO29VP4bIxWQtRhKELx8K%2F2F1ot3jMu8U4thFZj3sz%2BaPj8AHF%2FC6jdDVZdYLrZrd%2FFrr5x8sPvgyQhWwYRfbDOAkL35UGiLym%2B6kLAapDb0D25qu3HMkSOR8c0FUkDIo%2Bclkz2UEy%2BowU&X-Amz-Signature=31c94d92d4d59de016cd0e7be9c13e57d6d3e43932d699f2532a9515a502689d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSNP555%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCThCmPYaKSVP9gpXqpUbwl6deRbWfzSEnou%2BxXU0K3zwIhAPROW11CPydb69HmRzUoeFHIwR9%2BcfUQTL3JfNpXNq8rKv8DCCcQABoMNjM3NDIzMTgzODA1Igy4n0Gjnjfx5MdMaRcq3ANbqRLP9qWT5TQKBJwNLbCN6KYIKydCTFy1vOew3YGBy3%2BVJ9TGgJBAvd7pL3g84jn3v29AAvRoW4MrJYnTi2%2Fm6hd%2F2qAuEHrYHRGsvRV7uzHgZIlJwKZA4M1mYM%2B7cQ7yZYL%2B4iDcf9ZLPxYNVyWX2V4%2F92HQk8EsOhHIFYn67%2BXBu%2F%2FHC1zLnU0M7Xcovmh1OmL8AHj3WH5aO1T0u1F5GC8G0oC%2BXLVmGy%2B7vfqvNxo4UYsn5zZ0NVZOvRlmEtd1ZeTCVBnGhhK3OjlLFvIWO3Brtu6zJkpeCpazAGjNuS6lTzE1Ewzp78GXnzwrrAEWucpiQiALV2bxPGmntCSaKkQngOeOIMF4nRBRowJqOa%2FvXekrBgTxbKHZlm3BI%2FuvYHCmbuQHjUbYickLRixaBvWq2AmcneVEd8C66dMgNtMV1HapcLSXFA0q2h2NiZrdtX6HUpOLUMk0QiRyznOk5TDz80mhz3nhVBTZYh896cW4om8NI8Bm%2FsAoVv8UcascDV5mXPFBVZ152TdCCwwHUXkCMh7IPSOtdY8nHzVURFGS7v2zq7iYMbM961KfC4vmxlgzI2EiQs%2FTnHK1FX1MVyJWgaQfk94H8Z6Q6XQ3ixrskcCUrE7mdGy5kTD6k%2FC9BjqkAR5iro8Cf8%2FD2uwvEF2ebXiL49bAFLbY4%2Fr930A0Map83p0Y%2BBfbZx4WmSkaD7CyMTyIOwPlLB3DzFfO29VP4bIxWQtRhKELx8K%2F2F1ot3jMu8U4thFZj3sz%2BaPj8AHF%2FC6jdDVZdYLrZrd%2FFrr5x8sPvgyQhWwYRfbDOAkL35UGiLym%2B6kLAapDb0D25qu3HMkSOR8c0FUkDIo%2Bclkz2UEy%2BowU&X-Amz-Signature=951765e0db6cd540664eea2584ac60e688794ac985baab1b2af4c5746fb1e387&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSNP555%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCThCmPYaKSVP9gpXqpUbwl6deRbWfzSEnou%2BxXU0K3zwIhAPROW11CPydb69HmRzUoeFHIwR9%2BcfUQTL3JfNpXNq8rKv8DCCcQABoMNjM3NDIzMTgzODA1Igy4n0Gjnjfx5MdMaRcq3ANbqRLP9qWT5TQKBJwNLbCN6KYIKydCTFy1vOew3YGBy3%2BVJ9TGgJBAvd7pL3g84jn3v29AAvRoW4MrJYnTi2%2Fm6hd%2F2qAuEHrYHRGsvRV7uzHgZIlJwKZA4M1mYM%2B7cQ7yZYL%2B4iDcf9ZLPxYNVyWX2V4%2F92HQk8EsOhHIFYn67%2BXBu%2F%2FHC1zLnU0M7Xcovmh1OmL8AHj3WH5aO1T0u1F5GC8G0oC%2BXLVmGy%2B7vfqvNxo4UYsn5zZ0NVZOvRlmEtd1ZeTCVBnGhhK3OjlLFvIWO3Brtu6zJkpeCpazAGjNuS6lTzE1Ewzp78GXnzwrrAEWucpiQiALV2bxPGmntCSaKkQngOeOIMF4nRBRowJqOa%2FvXekrBgTxbKHZlm3BI%2FuvYHCmbuQHjUbYickLRixaBvWq2AmcneVEd8C66dMgNtMV1HapcLSXFA0q2h2NiZrdtX6HUpOLUMk0QiRyznOk5TDz80mhz3nhVBTZYh896cW4om8NI8Bm%2FsAoVv8UcascDV5mXPFBVZ152TdCCwwHUXkCMh7IPSOtdY8nHzVURFGS7v2zq7iYMbM961KfC4vmxlgzI2EiQs%2FTnHK1FX1MVyJWgaQfk94H8Z6Q6XQ3ixrskcCUrE7mdGy5kTD6k%2FC9BjqkAR5iro8Cf8%2FD2uwvEF2ebXiL49bAFLbY4%2Fr930A0Map83p0Y%2BBfbZx4WmSkaD7CyMTyIOwPlLB3DzFfO29VP4bIxWQtRhKELx8K%2F2F1ot3jMu8U4thFZj3sz%2BaPj8AHF%2FC6jdDVZdYLrZrd%2FFrr5x8sPvgyQhWwYRfbDOAkL35UGiLym%2B6kLAapDb0D25qu3HMkSOR8c0FUkDIo%2Bclkz2UEy%2BowU&X-Amz-Signature=3580cdfef420406d6da0fecbcdc411addcda924e929511f737f2ce2f6bd3d8f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSNP555%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCThCmPYaKSVP9gpXqpUbwl6deRbWfzSEnou%2BxXU0K3zwIhAPROW11CPydb69HmRzUoeFHIwR9%2BcfUQTL3JfNpXNq8rKv8DCCcQABoMNjM3NDIzMTgzODA1Igy4n0Gjnjfx5MdMaRcq3ANbqRLP9qWT5TQKBJwNLbCN6KYIKydCTFy1vOew3YGBy3%2BVJ9TGgJBAvd7pL3g84jn3v29AAvRoW4MrJYnTi2%2Fm6hd%2F2qAuEHrYHRGsvRV7uzHgZIlJwKZA4M1mYM%2B7cQ7yZYL%2B4iDcf9ZLPxYNVyWX2V4%2F92HQk8EsOhHIFYn67%2BXBu%2F%2FHC1zLnU0M7Xcovmh1OmL8AHj3WH5aO1T0u1F5GC8G0oC%2BXLVmGy%2B7vfqvNxo4UYsn5zZ0NVZOvRlmEtd1ZeTCVBnGhhK3OjlLFvIWO3Brtu6zJkpeCpazAGjNuS6lTzE1Ewzp78GXnzwrrAEWucpiQiALV2bxPGmntCSaKkQngOeOIMF4nRBRowJqOa%2FvXekrBgTxbKHZlm3BI%2FuvYHCmbuQHjUbYickLRixaBvWq2AmcneVEd8C66dMgNtMV1HapcLSXFA0q2h2NiZrdtX6HUpOLUMk0QiRyznOk5TDz80mhz3nhVBTZYh896cW4om8NI8Bm%2FsAoVv8UcascDV5mXPFBVZ152TdCCwwHUXkCMh7IPSOtdY8nHzVURFGS7v2zq7iYMbM961KfC4vmxlgzI2EiQs%2FTnHK1FX1MVyJWgaQfk94H8Z6Q6XQ3ixrskcCUrE7mdGy5kTD6k%2FC9BjqkAR5iro8Cf8%2FD2uwvEF2ebXiL49bAFLbY4%2Fr930A0Map83p0Y%2BBfbZx4WmSkaD7CyMTyIOwPlLB3DzFfO29VP4bIxWQtRhKELx8K%2F2F1ot3jMu8U4thFZj3sz%2BaPj8AHF%2FC6jdDVZdYLrZrd%2FFrr5x8sPvgyQhWwYRfbDOAkL35UGiLym%2B6kLAapDb0D25qu3HMkSOR8c0FUkDIo%2Bclkz2UEy%2BowU&X-Amz-Signature=79ba083c50503e39ae1616669d7ba090e73ed960290f88c27ba795cdd42a4e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSNP555%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCThCmPYaKSVP9gpXqpUbwl6deRbWfzSEnou%2BxXU0K3zwIhAPROW11CPydb69HmRzUoeFHIwR9%2BcfUQTL3JfNpXNq8rKv8DCCcQABoMNjM3NDIzMTgzODA1Igy4n0Gjnjfx5MdMaRcq3ANbqRLP9qWT5TQKBJwNLbCN6KYIKydCTFy1vOew3YGBy3%2BVJ9TGgJBAvd7pL3g84jn3v29AAvRoW4MrJYnTi2%2Fm6hd%2F2qAuEHrYHRGsvRV7uzHgZIlJwKZA4M1mYM%2B7cQ7yZYL%2B4iDcf9ZLPxYNVyWX2V4%2F92HQk8EsOhHIFYn67%2BXBu%2F%2FHC1zLnU0M7Xcovmh1OmL8AHj3WH5aO1T0u1F5GC8G0oC%2BXLVmGy%2B7vfqvNxo4UYsn5zZ0NVZOvRlmEtd1ZeTCVBnGhhK3OjlLFvIWO3Brtu6zJkpeCpazAGjNuS6lTzE1Ewzp78GXnzwrrAEWucpiQiALV2bxPGmntCSaKkQngOeOIMF4nRBRowJqOa%2FvXekrBgTxbKHZlm3BI%2FuvYHCmbuQHjUbYickLRixaBvWq2AmcneVEd8C66dMgNtMV1HapcLSXFA0q2h2NiZrdtX6HUpOLUMk0QiRyznOk5TDz80mhz3nhVBTZYh896cW4om8NI8Bm%2FsAoVv8UcascDV5mXPFBVZ152TdCCwwHUXkCMh7IPSOtdY8nHzVURFGS7v2zq7iYMbM961KfC4vmxlgzI2EiQs%2FTnHK1FX1MVyJWgaQfk94H8Z6Q6XQ3ixrskcCUrE7mdGy5kTD6k%2FC9BjqkAR5iro8Cf8%2FD2uwvEF2ebXiL49bAFLbY4%2Fr930A0Map83p0Y%2BBfbZx4WmSkaD7CyMTyIOwPlLB3DzFfO29VP4bIxWQtRhKELx8K%2F2F1ot3jMu8U4thFZj3sz%2BaPj8AHF%2FC6jdDVZdYLrZrd%2FFrr5x8sPvgyQhWwYRfbDOAkL35UGiLym%2B6kLAapDb0D25qu3HMkSOR8c0FUkDIo%2Bclkz2UEy%2BowU&X-Amz-Signature=529899e6865d7939f889c3b85d9f0b21c48aeabe3793dc23dcec451ebf679e93&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSNP555%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCThCmPYaKSVP9gpXqpUbwl6deRbWfzSEnou%2BxXU0K3zwIhAPROW11CPydb69HmRzUoeFHIwR9%2BcfUQTL3JfNpXNq8rKv8DCCcQABoMNjM3NDIzMTgzODA1Igy4n0Gjnjfx5MdMaRcq3ANbqRLP9qWT5TQKBJwNLbCN6KYIKydCTFy1vOew3YGBy3%2BVJ9TGgJBAvd7pL3g84jn3v29AAvRoW4MrJYnTi2%2Fm6hd%2F2qAuEHrYHRGsvRV7uzHgZIlJwKZA4M1mYM%2B7cQ7yZYL%2B4iDcf9ZLPxYNVyWX2V4%2F92HQk8EsOhHIFYn67%2BXBu%2F%2FHC1zLnU0M7Xcovmh1OmL8AHj3WH5aO1T0u1F5GC8G0oC%2BXLVmGy%2B7vfqvNxo4UYsn5zZ0NVZOvRlmEtd1ZeTCVBnGhhK3OjlLFvIWO3Brtu6zJkpeCpazAGjNuS6lTzE1Ewzp78GXnzwrrAEWucpiQiALV2bxPGmntCSaKkQngOeOIMF4nRBRowJqOa%2FvXekrBgTxbKHZlm3BI%2FuvYHCmbuQHjUbYickLRixaBvWq2AmcneVEd8C66dMgNtMV1HapcLSXFA0q2h2NiZrdtX6HUpOLUMk0QiRyznOk5TDz80mhz3nhVBTZYh896cW4om8NI8Bm%2FsAoVv8UcascDV5mXPFBVZ152TdCCwwHUXkCMh7IPSOtdY8nHzVURFGS7v2zq7iYMbM961KfC4vmxlgzI2EiQs%2FTnHK1FX1MVyJWgaQfk94H8Z6Q6XQ3ixrskcCUrE7mdGy5kTD6k%2FC9BjqkAR5iro8Cf8%2FD2uwvEF2ebXiL49bAFLbY4%2Fr930A0Map83p0Y%2BBfbZx4WmSkaD7CyMTyIOwPlLB3DzFfO29VP4bIxWQtRhKELx8K%2F2F1ot3jMu8U4thFZj3sz%2BaPj8AHF%2FC6jdDVZdYLrZrd%2FFrr5x8sPvgyQhWwYRfbDOAkL35UGiLym%2B6kLAapDb0D25qu3HMkSOR8c0FUkDIo%2Bclkz2UEy%2BowU&X-Amz-Signature=9db8e3b6474c6728ed509d69e43c3b059608908804698b4b7347f2f1b20264f6&X-Amz-SignedHeaders=host&x-id=GetObject)
