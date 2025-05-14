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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ON76WDP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXLw0dfIposiS4k0Nu1PGYxEn%2FNxkLfFEfGbypLsjYDwIhAMMRTBdrVNKg9Wf6GSb69QH5vIjZYDQaQZhKyPbXmyKJKv8DCBkQABoMNjM3NDIzMTgzODA1IgwvlOzaH3v3IUmbNQEq3APSvkywyg7bexIqOmT5wKl8GsmnC2Z6zR5BYwYjVJJIRF814Rrks5GECoYzSWuOGzdmbx7qeFyPgddW5x5Es3wIKWSaELqmkBDUXnl%2Fv2mDr88f4HyS3M8J%2F8PIAeL376%2FZGm9f%2BAsf5MtPxAggpV3tdiampob%2FLEMhhKFuJV5xmVvNlnjSua%2Bjv5Zj6boTnJKa4XsEvzx%2Bw0Yn1OAtpKsjQoF6VUgFw83J%2BbdiifesUdtYki7bUTQVc%2BEt5y3bT0wmpRbIRWDC9H2Busb1mAmOBS8Jf5uE%2FXnCdbmonX%2FGE%2F8yfEpuBDTJIXlKA04Si6DoLuCQeFCp7HjAyEwr%2B6ph8SB6IcGcX9xMrV%2BGqtc6tFT7UxitgcNbgI%2BnnXDyDdvEIE%2F4JHroitRQtQu%2BKVgDaE%2Fhl%2F8C%2FADtXR2L3rGde7NwLPMWVWjsvDX6E9DEQf%2FO6rcmNhxAWPCWjZU0sTLZSEmkgnOBRu7b9ccIjkUJm1agKVLcr30LPFfL6OPPLw3lYRySnDgjQmyMfPvzCOeo733Y1ZScXkBpyT%2BMZolWnZ03hLSr00GAglpCibieTueqVoT78NkYYa5aAW3WB7ujXf9pQRjnapTo6OhMLYRbkS8o6zUoTY0OiQ2f9TDZ75LBBjqkAaBwwgq8H2nlQI7Si7cnaq8nmPmMUomN1umgaO5iNOuIX%2BB2MPWr4Fh2WjjJcTVdXLREs%2F93lB3FD6hhlDt2J0lcJpHit0av5Zg0u36RGYvEU4u81DOe5eYspBKy4Dlwpq8HnZh6kuVVC94H25zbxwkAH34AP1xt%2FZKzpZFIhoqoGuszW95yByK%2F0%2Fw5TxYyVzqKfP5v9T3hCmZu0O78GC0TRYew&X-Amz-Signature=4f0891327d93f2f078ef7ebf2d8d95aa59e202989d66ead08b40f4ed3cd0db63&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ON76WDP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXLw0dfIposiS4k0Nu1PGYxEn%2FNxkLfFEfGbypLsjYDwIhAMMRTBdrVNKg9Wf6GSb69QH5vIjZYDQaQZhKyPbXmyKJKv8DCBkQABoMNjM3NDIzMTgzODA1IgwvlOzaH3v3IUmbNQEq3APSvkywyg7bexIqOmT5wKl8GsmnC2Z6zR5BYwYjVJJIRF814Rrks5GECoYzSWuOGzdmbx7qeFyPgddW5x5Es3wIKWSaELqmkBDUXnl%2Fv2mDr88f4HyS3M8J%2F8PIAeL376%2FZGm9f%2BAsf5MtPxAggpV3tdiampob%2FLEMhhKFuJV5xmVvNlnjSua%2Bjv5Zj6boTnJKa4XsEvzx%2Bw0Yn1OAtpKsjQoF6VUgFw83J%2BbdiifesUdtYki7bUTQVc%2BEt5y3bT0wmpRbIRWDC9H2Busb1mAmOBS8Jf5uE%2FXnCdbmonX%2FGE%2F8yfEpuBDTJIXlKA04Si6DoLuCQeFCp7HjAyEwr%2B6ph8SB6IcGcX9xMrV%2BGqtc6tFT7UxitgcNbgI%2BnnXDyDdvEIE%2F4JHroitRQtQu%2BKVgDaE%2Fhl%2F8C%2FADtXR2L3rGde7NwLPMWVWjsvDX6E9DEQf%2FO6rcmNhxAWPCWjZU0sTLZSEmkgnOBRu7b9ccIjkUJm1agKVLcr30LPFfL6OPPLw3lYRySnDgjQmyMfPvzCOeo733Y1ZScXkBpyT%2BMZolWnZ03hLSr00GAglpCibieTueqVoT78NkYYa5aAW3WB7ujXf9pQRjnapTo6OhMLYRbkS8o6zUoTY0OiQ2f9TDZ75LBBjqkAaBwwgq8H2nlQI7Si7cnaq8nmPmMUomN1umgaO5iNOuIX%2BB2MPWr4Fh2WjjJcTVdXLREs%2F93lB3FD6hhlDt2J0lcJpHit0av5Zg0u36RGYvEU4u81DOe5eYspBKy4Dlwpq8HnZh6kuVVC94H25zbxwkAH34AP1xt%2FZKzpZFIhoqoGuszW95yByK%2F0%2Fw5TxYyVzqKfP5v9T3hCmZu0O78GC0TRYew&X-Amz-Signature=c8a8bf2539ac9cf4bd1166dcae3dfcebe1b0b44fc687219c5efc06161a2d9a02&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ON76WDP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXLw0dfIposiS4k0Nu1PGYxEn%2FNxkLfFEfGbypLsjYDwIhAMMRTBdrVNKg9Wf6GSb69QH5vIjZYDQaQZhKyPbXmyKJKv8DCBkQABoMNjM3NDIzMTgzODA1IgwvlOzaH3v3IUmbNQEq3APSvkywyg7bexIqOmT5wKl8GsmnC2Z6zR5BYwYjVJJIRF814Rrks5GECoYzSWuOGzdmbx7qeFyPgddW5x5Es3wIKWSaELqmkBDUXnl%2Fv2mDr88f4HyS3M8J%2F8PIAeL376%2FZGm9f%2BAsf5MtPxAggpV3tdiampob%2FLEMhhKFuJV5xmVvNlnjSua%2Bjv5Zj6boTnJKa4XsEvzx%2Bw0Yn1OAtpKsjQoF6VUgFw83J%2BbdiifesUdtYki7bUTQVc%2BEt5y3bT0wmpRbIRWDC9H2Busb1mAmOBS8Jf5uE%2FXnCdbmonX%2FGE%2F8yfEpuBDTJIXlKA04Si6DoLuCQeFCp7HjAyEwr%2B6ph8SB6IcGcX9xMrV%2BGqtc6tFT7UxitgcNbgI%2BnnXDyDdvEIE%2F4JHroitRQtQu%2BKVgDaE%2Fhl%2F8C%2FADtXR2L3rGde7NwLPMWVWjsvDX6E9DEQf%2FO6rcmNhxAWPCWjZU0sTLZSEmkgnOBRu7b9ccIjkUJm1agKVLcr30LPFfL6OPPLw3lYRySnDgjQmyMfPvzCOeo733Y1ZScXkBpyT%2BMZolWnZ03hLSr00GAglpCibieTueqVoT78NkYYa5aAW3WB7ujXf9pQRjnapTo6OhMLYRbkS8o6zUoTY0OiQ2f9TDZ75LBBjqkAaBwwgq8H2nlQI7Si7cnaq8nmPmMUomN1umgaO5iNOuIX%2BB2MPWr4Fh2WjjJcTVdXLREs%2F93lB3FD6hhlDt2J0lcJpHit0av5Zg0u36RGYvEU4u81DOe5eYspBKy4Dlwpq8HnZh6kuVVC94H25zbxwkAH34AP1xt%2FZKzpZFIhoqoGuszW95yByK%2F0%2Fw5TxYyVzqKfP5v9T3hCmZu0O78GC0TRYew&X-Amz-Signature=0cf560142f8aa9fdf3c7514715db1782701d9cb55cd320c577790f4906288952&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ON76WDP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXLw0dfIposiS4k0Nu1PGYxEn%2FNxkLfFEfGbypLsjYDwIhAMMRTBdrVNKg9Wf6GSb69QH5vIjZYDQaQZhKyPbXmyKJKv8DCBkQABoMNjM3NDIzMTgzODA1IgwvlOzaH3v3IUmbNQEq3APSvkywyg7bexIqOmT5wKl8GsmnC2Z6zR5BYwYjVJJIRF814Rrks5GECoYzSWuOGzdmbx7qeFyPgddW5x5Es3wIKWSaELqmkBDUXnl%2Fv2mDr88f4HyS3M8J%2F8PIAeL376%2FZGm9f%2BAsf5MtPxAggpV3tdiampob%2FLEMhhKFuJV5xmVvNlnjSua%2Bjv5Zj6boTnJKa4XsEvzx%2Bw0Yn1OAtpKsjQoF6VUgFw83J%2BbdiifesUdtYki7bUTQVc%2BEt5y3bT0wmpRbIRWDC9H2Busb1mAmOBS8Jf5uE%2FXnCdbmonX%2FGE%2F8yfEpuBDTJIXlKA04Si6DoLuCQeFCp7HjAyEwr%2B6ph8SB6IcGcX9xMrV%2BGqtc6tFT7UxitgcNbgI%2BnnXDyDdvEIE%2F4JHroitRQtQu%2BKVgDaE%2Fhl%2F8C%2FADtXR2L3rGde7NwLPMWVWjsvDX6E9DEQf%2FO6rcmNhxAWPCWjZU0sTLZSEmkgnOBRu7b9ccIjkUJm1agKVLcr30LPFfL6OPPLw3lYRySnDgjQmyMfPvzCOeo733Y1ZScXkBpyT%2BMZolWnZ03hLSr00GAglpCibieTueqVoT78NkYYa5aAW3WB7ujXf9pQRjnapTo6OhMLYRbkS8o6zUoTY0OiQ2f9TDZ75LBBjqkAaBwwgq8H2nlQI7Si7cnaq8nmPmMUomN1umgaO5iNOuIX%2BB2MPWr4Fh2WjjJcTVdXLREs%2F93lB3FD6hhlDt2J0lcJpHit0av5Zg0u36RGYvEU4u81DOe5eYspBKy4Dlwpq8HnZh6kuVVC94H25zbxwkAH34AP1xt%2FZKzpZFIhoqoGuszW95yByK%2F0%2Fw5TxYyVzqKfP5v9T3hCmZu0O78GC0TRYew&X-Amz-Signature=b95b9d4b7a5c6f88ef264010fa71be25af4e7a001bce5f90747574ef78e2e921&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ON76WDP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXLw0dfIposiS4k0Nu1PGYxEn%2FNxkLfFEfGbypLsjYDwIhAMMRTBdrVNKg9Wf6GSb69QH5vIjZYDQaQZhKyPbXmyKJKv8DCBkQABoMNjM3NDIzMTgzODA1IgwvlOzaH3v3IUmbNQEq3APSvkywyg7bexIqOmT5wKl8GsmnC2Z6zR5BYwYjVJJIRF814Rrks5GECoYzSWuOGzdmbx7qeFyPgddW5x5Es3wIKWSaELqmkBDUXnl%2Fv2mDr88f4HyS3M8J%2F8PIAeL376%2FZGm9f%2BAsf5MtPxAggpV3tdiampob%2FLEMhhKFuJV5xmVvNlnjSua%2Bjv5Zj6boTnJKa4XsEvzx%2Bw0Yn1OAtpKsjQoF6VUgFw83J%2BbdiifesUdtYki7bUTQVc%2BEt5y3bT0wmpRbIRWDC9H2Busb1mAmOBS8Jf5uE%2FXnCdbmonX%2FGE%2F8yfEpuBDTJIXlKA04Si6DoLuCQeFCp7HjAyEwr%2B6ph8SB6IcGcX9xMrV%2BGqtc6tFT7UxitgcNbgI%2BnnXDyDdvEIE%2F4JHroitRQtQu%2BKVgDaE%2Fhl%2F8C%2FADtXR2L3rGde7NwLPMWVWjsvDX6E9DEQf%2FO6rcmNhxAWPCWjZU0sTLZSEmkgnOBRu7b9ccIjkUJm1agKVLcr30LPFfL6OPPLw3lYRySnDgjQmyMfPvzCOeo733Y1ZScXkBpyT%2BMZolWnZ03hLSr00GAglpCibieTueqVoT78NkYYa5aAW3WB7ujXf9pQRjnapTo6OhMLYRbkS8o6zUoTY0OiQ2f9TDZ75LBBjqkAaBwwgq8H2nlQI7Si7cnaq8nmPmMUomN1umgaO5iNOuIX%2BB2MPWr4Fh2WjjJcTVdXLREs%2F93lB3FD6hhlDt2J0lcJpHit0av5Zg0u36RGYvEU4u81DOe5eYspBKy4Dlwpq8HnZh6kuVVC94H25zbxwkAH34AP1xt%2FZKzpZFIhoqoGuszW95yByK%2F0%2Fw5TxYyVzqKfP5v9T3hCmZu0O78GC0TRYew&X-Amz-Signature=89441e44f04bce9635942a5d9306ca9a131ae17eb264706b09ced6abdd9a3a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ON76WDP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCXLw0dfIposiS4k0Nu1PGYxEn%2FNxkLfFEfGbypLsjYDwIhAMMRTBdrVNKg9Wf6GSb69QH5vIjZYDQaQZhKyPbXmyKJKv8DCBkQABoMNjM3NDIzMTgzODA1IgwvlOzaH3v3IUmbNQEq3APSvkywyg7bexIqOmT5wKl8GsmnC2Z6zR5BYwYjVJJIRF814Rrks5GECoYzSWuOGzdmbx7qeFyPgddW5x5Es3wIKWSaELqmkBDUXnl%2Fv2mDr88f4HyS3M8J%2F8PIAeL376%2FZGm9f%2BAsf5MtPxAggpV3tdiampob%2FLEMhhKFuJV5xmVvNlnjSua%2Bjv5Zj6boTnJKa4XsEvzx%2Bw0Yn1OAtpKsjQoF6VUgFw83J%2BbdiifesUdtYki7bUTQVc%2BEt5y3bT0wmpRbIRWDC9H2Busb1mAmOBS8Jf5uE%2FXnCdbmonX%2FGE%2F8yfEpuBDTJIXlKA04Si6DoLuCQeFCp7HjAyEwr%2B6ph8SB6IcGcX9xMrV%2BGqtc6tFT7UxitgcNbgI%2BnnXDyDdvEIE%2F4JHroitRQtQu%2BKVgDaE%2Fhl%2F8C%2FADtXR2L3rGde7NwLPMWVWjsvDX6E9DEQf%2FO6rcmNhxAWPCWjZU0sTLZSEmkgnOBRu7b9ccIjkUJm1agKVLcr30LPFfL6OPPLw3lYRySnDgjQmyMfPvzCOeo733Y1ZScXkBpyT%2BMZolWnZ03hLSr00GAglpCibieTueqVoT78NkYYa5aAW3WB7ujXf9pQRjnapTo6OhMLYRbkS8o6zUoTY0OiQ2f9TDZ75LBBjqkAaBwwgq8H2nlQI7Si7cnaq8nmPmMUomN1umgaO5iNOuIX%2BB2MPWr4Fh2WjjJcTVdXLREs%2F93lB3FD6hhlDt2J0lcJpHit0av5Zg0u36RGYvEU4u81DOe5eYspBKy4Dlwpq8HnZh6kuVVC94H25zbxwkAH34AP1xt%2FZKzpZFIhoqoGuszW95yByK%2F0%2Fw5TxYyVzqKfP5v9T3hCmZu0O78GC0TRYew&X-Amz-Signature=942f29997e49a58e770b7cd20d19c3b20c1bba6df97000ef04ccffadf892cf6d&X-Amz-SignedHeaders=host&x-id=GetObject)
