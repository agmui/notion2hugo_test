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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7R2PB4J%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBxF49dtercI%2F%2BID%2BW4DQ8EpY%2Fe8MqCnRjq%2B%2BoPYE8SbAiEAynxXyIEQ8ngSXMKZwaem7%2F1fUNttpAkgdJpGlbrnUw4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm9hvlLvVPFkOCDCSrcAzT%2BE%2F5veasJhbXfeOlUREFodN3wznA5bC0FQ%2ByKeK%2B%2BjnU9e%2BgexmpQx5zs28gdocvo3qW%2B0%2B9qsnWYxJ%2FR9YcomuyLIz4J9KIFIeZqoq2ZoP1fIcI5BT3J7qUwlkXgBzWlJZskH1mDkkSd7CnHMmXQbieIAr7DPAVRvm5fViAy%2FtgYGMAyYLd8sgUbK0jXN29Y%2FSvlP9%2FKHP6mFxO5GTcjbv1LwAFgIyGgXCCmEM7WDuId8QRzQd2tiykGDooBPdoROiUkD3%2BuVgqbQBHbm3fgM8JwK6xAcuRhmSVCn9HbCxzplj%2BLWD7Cq4nfsAU5jK%2BPuxIAGtE45EcZ22U60G2F%2BTigLF%2FCEDql6wqs9MT9zdOcfxDLrUYIMJF5%2BzXqKE5QtozzqobMScEuFgtJcoC5A7IkSBtIy6%2FAyDlWOres0oDzfgwumJ2TftmGrAY1L4BNkErwcJ4hw%2FTSAf8nuEShLMU9Kk1LV%2B%2BVQ9wDsnDfsxVJK%2BNdBn9r5MixcFLFZpo6NODe3F%2FFQe%2BMtj27Ac%2FXdYrQ8snswwxwyx0UzpxB0UUoloS0n3u9R0xQnJGBgicjLHx0wKEISVKII8qCR3rKKSiZnPFajYJ7gBMlopHaT24hVax0gJKbKCbNMMWF774GOqUBbaLvG1PfuB0sphIphGsCExMFEWvWKxA0yiWil9dv4oqhX7njQFc5njBjHzi4WuL7BOIzVTzU4bonF6wtCHTfItn0TOonVOHVcSGKb1fVtcwY3U9K8y%2F4X4mG0wC24u6PZst3I1WCK0EIYsiGhLi%2FXtFa%2FCoL4i1oTDtxesKSBQfunq6iGRgsNgH09kPMyV9rlHswFLBXzzOp90FQLSNEnbmFt7N6&X-Amz-Signature=e1111cc849355b68d70540b1fc0fbfa12906f847cdcafb54c647881bb113eacf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7R2PB4J%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBxF49dtercI%2F%2BID%2BW4DQ8EpY%2Fe8MqCnRjq%2B%2BoPYE8SbAiEAynxXyIEQ8ngSXMKZwaem7%2F1fUNttpAkgdJpGlbrnUw4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm9hvlLvVPFkOCDCSrcAzT%2BE%2F5veasJhbXfeOlUREFodN3wznA5bC0FQ%2ByKeK%2B%2BjnU9e%2BgexmpQx5zs28gdocvo3qW%2B0%2B9qsnWYxJ%2FR9YcomuyLIz4J9KIFIeZqoq2ZoP1fIcI5BT3J7qUwlkXgBzWlJZskH1mDkkSd7CnHMmXQbieIAr7DPAVRvm5fViAy%2FtgYGMAyYLd8sgUbK0jXN29Y%2FSvlP9%2FKHP6mFxO5GTcjbv1LwAFgIyGgXCCmEM7WDuId8QRzQd2tiykGDooBPdoROiUkD3%2BuVgqbQBHbm3fgM8JwK6xAcuRhmSVCn9HbCxzplj%2BLWD7Cq4nfsAU5jK%2BPuxIAGtE45EcZ22U60G2F%2BTigLF%2FCEDql6wqs9MT9zdOcfxDLrUYIMJF5%2BzXqKE5QtozzqobMScEuFgtJcoC5A7IkSBtIy6%2FAyDlWOres0oDzfgwumJ2TftmGrAY1L4BNkErwcJ4hw%2FTSAf8nuEShLMU9Kk1LV%2B%2BVQ9wDsnDfsxVJK%2BNdBn9r5MixcFLFZpo6NODe3F%2FFQe%2BMtj27Ac%2FXdYrQ8snswwxwyx0UzpxB0UUoloS0n3u9R0xQnJGBgicjLHx0wKEISVKII8qCR3rKKSiZnPFajYJ7gBMlopHaT24hVax0gJKbKCbNMMWF774GOqUBbaLvG1PfuB0sphIphGsCExMFEWvWKxA0yiWil9dv4oqhX7njQFc5njBjHzi4WuL7BOIzVTzU4bonF6wtCHTfItn0TOonVOHVcSGKb1fVtcwY3U9K8y%2F4X4mG0wC24u6PZst3I1WCK0EIYsiGhLi%2FXtFa%2FCoL4i1oTDtxesKSBQfunq6iGRgsNgH09kPMyV9rlHswFLBXzzOp90FQLSNEnbmFt7N6&X-Amz-Signature=3cac789bd7219fcfdcc928476feb1fdecbf08298456a3ba3c6ec42e700ee8b81&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7R2PB4J%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBxF49dtercI%2F%2BID%2BW4DQ8EpY%2Fe8MqCnRjq%2B%2BoPYE8SbAiEAynxXyIEQ8ngSXMKZwaem7%2F1fUNttpAkgdJpGlbrnUw4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm9hvlLvVPFkOCDCSrcAzT%2BE%2F5veasJhbXfeOlUREFodN3wznA5bC0FQ%2ByKeK%2B%2BjnU9e%2BgexmpQx5zs28gdocvo3qW%2B0%2B9qsnWYxJ%2FR9YcomuyLIz4J9KIFIeZqoq2ZoP1fIcI5BT3J7qUwlkXgBzWlJZskH1mDkkSd7CnHMmXQbieIAr7DPAVRvm5fViAy%2FtgYGMAyYLd8sgUbK0jXN29Y%2FSvlP9%2FKHP6mFxO5GTcjbv1LwAFgIyGgXCCmEM7WDuId8QRzQd2tiykGDooBPdoROiUkD3%2BuVgqbQBHbm3fgM8JwK6xAcuRhmSVCn9HbCxzplj%2BLWD7Cq4nfsAU5jK%2BPuxIAGtE45EcZ22U60G2F%2BTigLF%2FCEDql6wqs9MT9zdOcfxDLrUYIMJF5%2BzXqKE5QtozzqobMScEuFgtJcoC5A7IkSBtIy6%2FAyDlWOres0oDzfgwumJ2TftmGrAY1L4BNkErwcJ4hw%2FTSAf8nuEShLMU9Kk1LV%2B%2BVQ9wDsnDfsxVJK%2BNdBn9r5MixcFLFZpo6NODe3F%2FFQe%2BMtj27Ac%2FXdYrQ8snswwxwyx0UzpxB0UUoloS0n3u9R0xQnJGBgicjLHx0wKEISVKII8qCR3rKKSiZnPFajYJ7gBMlopHaT24hVax0gJKbKCbNMMWF774GOqUBbaLvG1PfuB0sphIphGsCExMFEWvWKxA0yiWil9dv4oqhX7njQFc5njBjHzi4WuL7BOIzVTzU4bonF6wtCHTfItn0TOonVOHVcSGKb1fVtcwY3U9K8y%2F4X4mG0wC24u6PZst3I1WCK0EIYsiGhLi%2FXtFa%2FCoL4i1oTDtxesKSBQfunq6iGRgsNgH09kPMyV9rlHswFLBXzzOp90FQLSNEnbmFt7N6&X-Amz-Signature=67695f338e4efafc2c027840240a960b58c305bc8ad8ef57796c008bf5c66390&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7R2PB4J%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBxF49dtercI%2F%2BID%2BW4DQ8EpY%2Fe8MqCnRjq%2B%2BoPYE8SbAiEAynxXyIEQ8ngSXMKZwaem7%2F1fUNttpAkgdJpGlbrnUw4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm9hvlLvVPFkOCDCSrcAzT%2BE%2F5veasJhbXfeOlUREFodN3wznA5bC0FQ%2ByKeK%2B%2BjnU9e%2BgexmpQx5zs28gdocvo3qW%2B0%2B9qsnWYxJ%2FR9YcomuyLIz4J9KIFIeZqoq2ZoP1fIcI5BT3J7qUwlkXgBzWlJZskH1mDkkSd7CnHMmXQbieIAr7DPAVRvm5fViAy%2FtgYGMAyYLd8sgUbK0jXN29Y%2FSvlP9%2FKHP6mFxO5GTcjbv1LwAFgIyGgXCCmEM7WDuId8QRzQd2tiykGDooBPdoROiUkD3%2BuVgqbQBHbm3fgM8JwK6xAcuRhmSVCn9HbCxzplj%2BLWD7Cq4nfsAU5jK%2BPuxIAGtE45EcZ22U60G2F%2BTigLF%2FCEDql6wqs9MT9zdOcfxDLrUYIMJF5%2BzXqKE5QtozzqobMScEuFgtJcoC5A7IkSBtIy6%2FAyDlWOres0oDzfgwumJ2TftmGrAY1L4BNkErwcJ4hw%2FTSAf8nuEShLMU9Kk1LV%2B%2BVQ9wDsnDfsxVJK%2BNdBn9r5MixcFLFZpo6NODe3F%2FFQe%2BMtj27Ac%2FXdYrQ8snswwxwyx0UzpxB0UUoloS0n3u9R0xQnJGBgicjLHx0wKEISVKII8qCR3rKKSiZnPFajYJ7gBMlopHaT24hVax0gJKbKCbNMMWF774GOqUBbaLvG1PfuB0sphIphGsCExMFEWvWKxA0yiWil9dv4oqhX7njQFc5njBjHzi4WuL7BOIzVTzU4bonF6wtCHTfItn0TOonVOHVcSGKb1fVtcwY3U9K8y%2F4X4mG0wC24u6PZst3I1WCK0EIYsiGhLi%2FXtFa%2FCoL4i1oTDtxesKSBQfunq6iGRgsNgH09kPMyV9rlHswFLBXzzOp90FQLSNEnbmFt7N6&X-Amz-Signature=00b020bd5dd2389131f36472cf3917392624773ce575ada9d5d1e4a6017ae007&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7R2PB4J%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBxF49dtercI%2F%2BID%2BW4DQ8EpY%2Fe8MqCnRjq%2B%2BoPYE8SbAiEAynxXyIEQ8ngSXMKZwaem7%2F1fUNttpAkgdJpGlbrnUw4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm9hvlLvVPFkOCDCSrcAzT%2BE%2F5veasJhbXfeOlUREFodN3wznA5bC0FQ%2ByKeK%2B%2BjnU9e%2BgexmpQx5zs28gdocvo3qW%2B0%2B9qsnWYxJ%2FR9YcomuyLIz4J9KIFIeZqoq2ZoP1fIcI5BT3J7qUwlkXgBzWlJZskH1mDkkSd7CnHMmXQbieIAr7DPAVRvm5fViAy%2FtgYGMAyYLd8sgUbK0jXN29Y%2FSvlP9%2FKHP6mFxO5GTcjbv1LwAFgIyGgXCCmEM7WDuId8QRzQd2tiykGDooBPdoROiUkD3%2BuVgqbQBHbm3fgM8JwK6xAcuRhmSVCn9HbCxzplj%2BLWD7Cq4nfsAU5jK%2BPuxIAGtE45EcZ22U60G2F%2BTigLF%2FCEDql6wqs9MT9zdOcfxDLrUYIMJF5%2BzXqKE5QtozzqobMScEuFgtJcoC5A7IkSBtIy6%2FAyDlWOres0oDzfgwumJ2TftmGrAY1L4BNkErwcJ4hw%2FTSAf8nuEShLMU9Kk1LV%2B%2BVQ9wDsnDfsxVJK%2BNdBn9r5MixcFLFZpo6NODe3F%2FFQe%2BMtj27Ac%2FXdYrQ8snswwxwyx0UzpxB0UUoloS0n3u9R0xQnJGBgicjLHx0wKEISVKII8qCR3rKKSiZnPFajYJ7gBMlopHaT24hVax0gJKbKCbNMMWF774GOqUBbaLvG1PfuB0sphIphGsCExMFEWvWKxA0yiWil9dv4oqhX7njQFc5njBjHzi4WuL7BOIzVTzU4bonF6wtCHTfItn0TOonVOHVcSGKb1fVtcwY3U9K8y%2F4X4mG0wC24u6PZst3I1WCK0EIYsiGhLi%2FXtFa%2FCoL4i1oTDtxesKSBQfunq6iGRgsNgH09kPMyV9rlHswFLBXzzOp90FQLSNEnbmFt7N6&X-Amz-Signature=10dd4022961a3bc05bbd1975639aad3d9b712042258b74c13df4819845b964d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7R2PB4J%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBxF49dtercI%2F%2BID%2BW4DQ8EpY%2Fe8MqCnRjq%2B%2BoPYE8SbAiEAynxXyIEQ8ngSXMKZwaem7%2F1fUNttpAkgdJpGlbrnUw4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm9hvlLvVPFkOCDCSrcAzT%2BE%2F5veasJhbXfeOlUREFodN3wznA5bC0FQ%2ByKeK%2B%2BjnU9e%2BgexmpQx5zs28gdocvo3qW%2B0%2B9qsnWYxJ%2FR9YcomuyLIz4J9KIFIeZqoq2ZoP1fIcI5BT3J7qUwlkXgBzWlJZskH1mDkkSd7CnHMmXQbieIAr7DPAVRvm5fViAy%2FtgYGMAyYLd8sgUbK0jXN29Y%2FSvlP9%2FKHP6mFxO5GTcjbv1LwAFgIyGgXCCmEM7WDuId8QRzQd2tiykGDooBPdoROiUkD3%2BuVgqbQBHbm3fgM8JwK6xAcuRhmSVCn9HbCxzplj%2BLWD7Cq4nfsAU5jK%2BPuxIAGtE45EcZ22U60G2F%2BTigLF%2FCEDql6wqs9MT9zdOcfxDLrUYIMJF5%2BzXqKE5QtozzqobMScEuFgtJcoC5A7IkSBtIy6%2FAyDlWOres0oDzfgwumJ2TftmGrAY1L4BNkErwcJ4hw%2FTSAf8nuEShLMU9Kk1LV%2B%2BVQ9wDsnDfsxVJK%2BNdBn9r5MixcFLFZpo6NODe3F%2FFQe%2BMtj27Ac%2FXdYrQ8snswwxwyx0UzpxB0UUoloS0n3u9R0xQnJGBgicjLHx0wKEISVKII8qCR3rKKSiZnPFajYJ7gBMlopHaT24hVax0gJKbKCbNMMWF774GOqUBbaLvG1PfuB0sphIphGsCExMFEWvWKxA0yiWil9dv4oqhX7njQFc5njBjHzi4WuL7BOIzVTzU4bonF6wtCHTfItn0TOonVOHVcSGKb1fVtcwY3U9K8y%2F4X4mG0wC24u6PZst3I1WCK0EIYsiGhLi%2FXtFa%2FCoL4i1oTDtxesKSBQfunq6iGRgsNgH09kPMyV9rlHswFLBXzzOp90FQLSNEnbmFt7N6&X-Amz-Signature=64a20900a7da66dc3844ad80b98b390d825df8ab1059a1851abcfde188b38b39&X-Amz-SignedHeaders=host&x-id=GetObject)
