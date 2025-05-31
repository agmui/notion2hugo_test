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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=5f199f4ed7d1586eee52a392e5af8f7bd5013d2415dadb7fab29bc2f3800b99c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=a0df1852490eb25ef446976f5b4eaeb8d725218d1d8fa8f16c387d72c7146ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=2e92218ccbaee9e02ffb53914a38fde0dbbe1a62a198e1a1a6d576535f6908f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=830ebc1324f77eae95a7b4017bdf4bba0f7a997446ff1954b6833d855f709002&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=c6f15d843c83f45609dcf8c5b5996b075ebbaf46beeea3d85b847951a3fbbb73&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQTJPX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9A9AijE7WnO3I9Kkx9A9%2BZtZITqJlfWp6OjS5PZGLUAiEAxlFUUdh4Q3aq%2F6Bp8QyFtcgk6Qn9fhfp2lHjqObjvFsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhjJ7HpNz9wMUJPRSrcA3Fue9EC8nUbUfOEGoprTpL2wCoQRoYPBfyAkZbK1hp9JlK3GdRoa0Xi0drqJK2rLbpycE4vrvZ1U4F6z2yclRlL%2BweLvL%2FLTGKnOixqIqGPpoX1bquDX8CqaoUMwojr8X76pDdrwwlC%2FH2PQWOZStUaYgDQohKmioA8uWUIr7igi%2FhNtrLCWq4lAM6sY0vha8kVB4zgznVelH%2BLvN02KtNgYL9IJ1Tuayzm2Rcw9IB72vxyVJ1Yl81e%2FPXOg65TcR4Oi%2FJY%2Fs8lfc4%2BuBDq3f3TOSpE%2F1wWpeNSEYsRJ3xGQpBATFDL3GKSzzU%2BinD1gMpJ28%2Fl6ofkK%2F15pNuKBmc3sWoLYar5I2oacLwKzdH7ROMU1HqaxMevcmD09Sv70ocRWCiMAclNSbHa%2B8dL7OYamHMLTQ81mdvYM5d5rnTV8NrdBUSKlc%2F740C6%2FITiOUKbVMY1%2FEGMkRlz4GLr7FP6KB0oPjoNvFTN4TXlxlPRucjI0f%2FQnUApyl%2FkmJ%2BxEy0XWnMqAWxLr8CYIfkJzLtCPQQYgk3EkKfnXkE5FUg3wrIMdouT4NgDBSQyCmCgkJq7FvXfCtS791fVkS5YijaVpf3vFpAuMy7KubCjLSaGyJ7n1lr2w3Gr0hHZMICE68EGOqUBKKvZzUQPPXbnCP8UZVunkPNEeF%2FlikC6Pu6LBWWN7pJx2xb%2F8YSxUbgXbWDgeQzerWqducawOcIUc7LEfX3VFAeFYidKv6cvuM%2BXHuWAJKRYGKAoLbqk0clb6SkvWcNw5HHeSyKJiLgHTk2sTuXa3vrNemmDUDzpXlXwKtJGRQ%2BAoKcu8wJwbG1A3reFuJAM4n579eIoa9jlgvAoe3HSiK%2Fevx07&X-Amz-Signature=558460891313707fc789929d9ceaea9b63c365533cb9038aa744c4e4e5782059&X-Amz-SignedHeaders=host&x-id=GetObject)
