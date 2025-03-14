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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6S735AD%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaasDrFemllqgXl2JWexAw80QXLf%2B%2Bx7fdq8XYtYS5DAiAlmcTZRXAsNSHuON5kfsbABiAH622EP8evAP2ncYQXviqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQPT0aF5%2FkP%2FwWn8KKtwDeN8IkJcq5CdhNkYvB2uAsP2KBlPELVDaiR%2Ffl3r73egMzfan5dSnKoc6ipJ6AGjLXt8ykHTgRTlW8U5BzNOXPObnxd4sGvdl%2BCV33E2zhq4hu1Zdgg6Jnveq0Qt%2FeIgVUKqv0rPzcXlegF6z5aKVLTXIUjO5lV2Zb8SanCuLLlJ3XjzoNEKKOfECtSFKCS5XLFICzLcWyZRyvGOSgVxtrU%2FBqhbY8DI63o980U821Q6N%2BVWnUF0UkRKlCiYB26Toiz3Pun2NuhzR%2FMBB89VtadT8C4BUF2RK8cq92D5OR%2Fz8XVeGA6QsWTv%2FnO81MiuJ4LeSrik8mxqz2oB8lbW1llJgVCxoVRgO%2BoTkI7nDWK9Ih43semxKEOppPAr0fyOz%2BUwP0%2F3%2F2Nf9mLaTZWsAeZlIrvCVUY9M19VS6gaTqCSjJzjCtx1hAVc%2FW7OzprL0xncaX8%2Bo1WTYZ%2FyoEfdn%2B65hIPnKDtSnRBNOgbOZTahgl8XkZdu679%2BtC%2BW%2FSMCYPNZ7FisEpNMGxAfrBN542ljdLgC3gj5AYXf9NkW33ahvQ%2FWjV1uylepMkJNmKm2rHcDD5YvW%2F9B49XNBRQZoo5aLkERPxIX%2FMd94jQH6pPLqqH4Jy%2FehvM7f6Q0w1szOvgY6pgHxF9S2RUZn5CFBUGs83vqkDego%2BpVY%2BKTaRJzj5uua3CoH%2BLNofOsNPZKhLhM1y6y3Dg3D77oGvbvAvE6g7ph%2FapgvJF45TE4oFXdYOX0d6PuqQCqLrtNkpeVI%2F7rpxJYbL2WRkwEwYDcs%2FnhJavfieGx38%2B10W0w0kfP%2BW3eLM5K8mjNpL55Y3SNlKLptWjxO%2BHIpvJrM11ibJ6MYzSv1yeTA0Hag&X-Amz-Signature=b3b0b91b4fc08f041d9ba6ec49bd45874c59f8775aab8ee3ab1ce18ecefcd37b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6S735AD%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaasDrFemllqgXl2JWexAw80QXLf%2B%2Bx7fdq8XYtYS5DAiAlmcTZRXAsNSHuON5kfsbABiAH622EP8evAP2ncYQXviqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQPT0aF5%2FkP%2FwWn8KKtwDeN8IkJcq5CdhNkYvB2uAsP2KBlPELVDaiR%2Ffl3r73egMzfan5dSnKoc6ipJ6AGjLXt8ykHTgRTlW8U5BzNOXPObnxd4sGvdl%2BCV33E2zhq4hu1Zdgg6Jnveq0Qt%2FeIgVUKqv0rPzcXlegF6z5aKVLTXIUjO5lV2Zb8SanCuLLlJ3XjzoNEKKOfECtSFKCS5XLFICzLcWyZRyvGOSgVxtrU%2FBqhbY8DI63o980U821Q6N%2BVWnUF0UkRKlCiYB26Toiz3Pun2NuhzR%2FMBB89VtadT8C4BUF2RK8cq92D5OR%2Fz8XVeGA6QsWTv%2FnO81MiuJ4LeSrik8mxqz2oB8lbW1llJgVCxoVRgO%2BoTkI7nDWK9Ih43semxKEOppPAr0fyOz%2BUwP0%2F3%2F2Nf9mLaTZWsAeZlIrvCVUY9M19VS6gaTqCSjJzjCtx1hAVc%2FW7OzprL0xncaX8%2Bo1WTYZ%2FyoEfdn%2B65hIPnKDtSnRBNOgbOZTahgl8XkZdu679%2BtC%2BW%2FSMCYPNZ7FisEpNMGxAfrBN542ljdLgC3gj5AYXf9NkW33ahvQ%2FWjV1uylepMkJNmKm2rHcDD5YvW%2F9B49XNBRQZoo5aLkERPxIX%2FMd94jQH6pPLqqH4Jy%2FehvM7f6Q0w1szOvgY6pgHxF9S2RUZn5CFBUGs83vqkDego%2BpVY%2BKTaRJzj5uua3CoH%2BLNofOsNPZKhLhM1y6y3Dg3D77oGvbvAvE6g7ph%2FapgvJF45TE4oFXdYOX0d6PuqQCqLrtNkpeVI%2F7rpxJYbL2WRkwEwYDcs%2FnhJavfieGx38%2B10W0w0kfP%2BW3eLM5K8mjNpL55Y3SNlKLptWjxO%2BHIpvJrM11ibJ6MYzSv1yeTA0Hag&X-Amz-Signature=44770128ab32ca7ff1326357c9c5dabaa2dccd1cef3a1bc89baeff47b6d32144&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6S735AD%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaasDrFemllqgXl2JWexAw80QXLf%2B%2Bx7fdq8XYtYS5DAiAlmcTZRXAsNSHuON5kfsbABiAH622EP8evAP2ncYQXviqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQPT0aF5%2FkP%2FwWn8KKtwDeN8IkJcq5CdhNkYvB2uAsP2KBlPELVDaiR%2Ffl3r73egMzfan5dSnKoc6ipJ6AGjLXt8ykHTgRTlW8U5BzNOXPObnxd4sGvdl%2BCV33E2zhq4hu1Zdgg6Jnveq0Qt%2FeIgVUKqv0rPzcXlegF6z5aKVLTXIUjO5lV2Zb8SanCuLLlJ3XjzoNEKKOfECtSFKCS5XLFICzLcWyZRyvGOSgVxtrU%2FBqhbY8DI63o980U821Q6N%2BVWnUF0UkRKlCiYB26Toiz3Pun2NuhzR%2FMBB89VtadT8C4BUF2RK8cq92D5OR%2Fz8XVeGA6QsWTv%2FnO81MiuJ4LeSrik8mxqz2oB8lbW1llJgVCxoVRgO%2BoTkI7nDWK9Ih43semxKEOppPAr0fyOz%2BUwP0%2F3%2F2Nf9mLaTZWsAeZlIrvCVUY9M19VS6gaTqCSjJzjCtx1hAVc%2FW7OzprL0xncaX8%2Bo1WTYZ%2FyoEfdn%2B65hIPnKDtSnRBNOgbOZTahgl8XkZdu679%2BtC%2BW%2FSMCYPNZ7FisEpNMGxAfrBN542ljdLgC3gj5AYXf9NkW33ahvQ%2FWjV1uylepMkJNmKm2rHcDD5YvW%2F9B49XNBRQZoo5aLkERPxIX%2FMd94jQH6pPLqqH4Jy%2FehvM7f6Q0w1szOvgY6pgHxF9S2RUZn5CFBUGs83vqkDego%2BpVY%2BKTaRJzj5uua3CoH%2BLNofOsNPZKhLhM1y6y3Dg3D77oGvbvAvE6g7ph%2FapgvJF45TE4oFXdYOX0d6PuqQCqLrtNkpeVI%2F7rpxJYbL2WRkwEwYDcs%2FnhJavfieGx38%2B10W0w0kfP%2BW3eLM5K8mjNpL55Y3SNlKLptWjxO%2BHIpvJrM11ibJ6MYzSv1yeTA0Hag&X-Amz-Signature=ab2d489fe8f4eff06fbe3d1f2181cb1c20fcf330b25f4a4ab3fb5b0ae62e7bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6S735AD%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaasDrFemllqgXl2JWexAw80QXLf%2B%2Bx7fdq8XYtYS5DAiAlmcTZRXAsNSHuON5kfsbABiAH622EP8evAP2ncYQXviqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQPT0aF5%2FkP%2FwWn8KKtwDeN8IkJcq5CdhNkYvB2uAsP2KBlPELVDaiR%2Ffl3r73egMzfan5dSnKoc6ipJ6AGjLXt8ykHTgRTlW8U5BzNOXPObnxd4sGvdl%2BCV33E2zhq4hu1Zdgg6Jnveq0Qt%2FeIgVUKqv0rPzcXlegF6z5aKVLTXIUjO5lV2Zb8SanCuLLlJ3XjzoNEKKOfECtSFKCS5XLFICzLcWyZRyvGOSgVxtrU%2FBqhbY8DI63o980U821Q6N%2BVWnUF0UkRKlCiYB26Toiz3Pun2NuhzR%2FMBB89VtadT8C4BUF2RK8cq92D5OR%2Fz8XVeGA6QsWTv%2FnO81MiuJ4LeSrik8mxqz2oB8lbW1llJgVCxoVRgO%2BoTkI7nDWK9Ih43semxKEOppPAr0fyOz%2BUwP0%2F3%2F2Nf9mLaTZWsAeZlIrvCVUY9M19VS6gaTqCSjJzjCtx1hAVc%2FW7OzprL0xncaX8%2Bo1WTYZ%2FyoEfdn%2B65hIPnKDtSnRBNOgbOZTahgl8XkZdu679%2BtC%2BW%2FSMCYPNZ7FisEpNMGxAfrBN542ljdLgC3gj5AYXf9NkW33ahvQ%2FWjV1uylepMkJNmKm2rHcDD5YvW%2F9B49XNBRQZoo5aLkERPxIX%2FMd94jQH6pPLqqH4Jy%2FehvM7f6Q0w1szOvgY6pgHxF9S2RUZn5CFBUGs83vqkDego%2BpVY%2BKTaRJzj5uua3CoH%2BLNofOsNPZKhLhM1y6y3Dg3D77oGvbvAvE6g7ph%2FapgvJF45TE4oFXdYOX0d6PuqQCqLrtNkpeVI%2F7rpxJYbL2WRkwEwYDcs%2FnhJavfieGx38%2B10W0w0kfP%2BW3eLM5K8mjNpL55Y3SNlKLptWjxO%2BHIpvJrM11ibJ6MYzSv1yeTA0Hag&X-Amz-Signature=22aa2d63548186b0b5b22c18d2bc1e8d1e3ab659e4040ae0ce3d165ee462c709&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6S735AD%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaasDrFemllqgXl2JWexAw80QXLf%2B%2Bx7fdq8XYtYS5DAiAlmcTZRXAsNSHuON5kfsbABiAH622EP8evAP2ncYQXviqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQPT0aF5%2FkP%2FwWn8KKtwDeN8IkJcq5CdhNkYvB2uAsP2KBlPELVDaiR%2Ffl3r73egMzfan5dSnKoc6ipJ6AGjLXt8ykHTgRTlW8U5BzNOXPObnxd4sGvdl%2BCV33E2zhq4hu1Zdgg6Jnveq0Qt%2FeIgVUKqv0rPzcXlegF6z5aKVLTXIUjO5lV2Zb8SanCuLLlJ3XjzoNEKKOfECtSFKCS5XLFICzLcWyZRyvGOSgVxtrU%2FBqhbY8DI63o980U821Q6N%2BVWnUF0UkRKlCiYB26Toiz3Pun2NuhzR%2FMBB89VtadT8C4BUF2RK8cq92D5OR%2Fz8XVeGA6QsWTv%2FnO81MiuJ4LeSrik8mxqz2oB8lbW1llJgVCxoVRgO%2BoTkI7nDWK9Ih43semxKEOppPAr0fyOz%2BUwP0%2F3%2F2Nf9mLaTZWsAeZlIrvCVUY9M19VS6gaTqCSjJzjCtx1hAVc%2FW7OzprL0xncaX8%2Bo1WTYZ%2FyoEfdn%2B65hIPnKDtSnRBNOgbOZTahgl8XkZdu679%2BtC%2BW%2FSMCYPNZ7FisEpNMGxAfrBN542ljdLgC3gj5AYXf9NkW33ahvQ%2FWjV1uylepMkJNmKm2rHcDD5YvW%2F9B49XNBRQZoo5aLkERPxIX%2FMd94jQH6pPLqqH4Jy%2FehvM7f6Q0w1szOvgY6pgHxF9S2RUZn5CFBUGs83vqkDego%2BpVY%2BKTaRJzj5uua3CoH%2BLNofOsNPZKhLhM1y6y3Dg3D77oGvbvAvE6g7ph%2FapgvJF45TE4oFXdYOX0d6PuqQCqLrtNkpeVI%2F7rpxJYbL2WRkwEwYDcs%2FnhJavfieGx38%2B10W0w0kfP%2BW3eLM5K8mjNpL55Y3SNlKLptWjxO%2BHIpvJrM11ibJ6MYzSv1yeTA0Hag&X-Amz-Signature=2178faa4b891b2c21341b4d96f34cf32ccfc0c677e836253755fb29053cd4579&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6S735AD%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaasDrFemllqgXl2JWexAw80QXLf%2B%2Bx7fdq8XYtYS5DAiAlmcTZRXAsNSHuON5kfsbABiAH622EP8evAP2ncYQXviqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQPT0aF5%2FkP%2FwWn8KKtwDeN8IkJcq5CdhNkYvB2uAsP2KBlPELVDaiR%2Ffl3r73egMzfan5dSnKoc6ipJ6AGjLXt8ykHTgRTlW8U5BzNOXPObnxd4sGvdl%2BCV33E2zhq4hu1Zdgg6Jnveq0Qt%2FeIgVUKqv0rPzcXlegF6z5aKVLTXIUjO5lV2Zb8SanCuLLlJ3XjzoNEKKOfECtSFKCS5XLFICzLcWyZRyvGOSgVxtrU%2FBqhbY8DI63o980U821Q6N%2BVWnUF0UkRKlCiYB26Toiz3Pun2NuhzR%2FMBB89VtadT8C4BUF2RK8cq92D5OR%2Fz8XVeGA6QsWTv%2FnO81MiuJ4LeSrik8mxqz2oB8lbW1llJgVCxoVRgO%2BoTkI7nDWK9Ih43semxKEOppPAr0fyOz%2BUwP0%2F3%2F2Nf9mLaTZWsAeZlIrvCVUY9M19VS6gaTqCSjJzjCtx1hAVc%2FW7OzprL0xncaX8%2Bo1WTYZ%2FyoEfdn%2B65hIPnKDtSnRBNOgbOZTahgl8XkZdu679%2BtC%2BW%2FSMCYPNZ7FisEpNMGxAfrBN542ljdLgC3gj5AYXf9NkW33ahvQ%2FWjV1uylepMkJNmKm2rHcDD5YvW%2F9B49XNBRQZoo5aLkERPxIX%2FMd94jQH6pPLqqH4Jy%2FehvM7f6Q0w1szOvgY6pgHxF9S2RUZn5CFBUGs83vqkDego%2BpVY%2BKTaRJzj5uua3CoH%2BLNofOsNPZKhLhM1y6y3Dg3D77oGvbvAvE6g7ph%2FapgvJF45TE4oFXdYOX0d6PuqQCqLrtNkpeVI%2F7rpxJYbL2WRkwEwYDcs%2FnhJavfieGx38%2B10W0w0kfP%2BW3eLM5K8mjNpL55Y3SNlKLptWjxO%2BHIpvJrM11ibJ6MYzSv1yeTA0Hag&X-Amz-Signature=922534b101328b2edade4a59c0f38fa4472236cf1e2dcf9a5ed9db15e4b2616b&X-Amz-SignedHeaders=host&x-id=GetObject)
