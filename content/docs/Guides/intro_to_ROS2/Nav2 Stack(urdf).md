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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS56KOSP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEJtV7t3EDp%2FBB2wEpJksGJBFeL095keK5xW2tmwTQH4AiEAhU1zlHdWVF5AonMOGZFrszU7GmZ4jV0v%2Fvb35XpCNGkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAg4wZWAx5PQqqi9bircAxJ2HOkiwR1kIKypo7Muuy7lgffcL49PmyhdHkR1y4q9CqDcRgbt8mMa0JFpjNQqqqcNlo6y7drXMuZLj%2FG%2Fz%2BZnMbQjb9LVME0EWHmUl7S0ToFiHbrOWpGaR1eR1ZUpsukHYeLi9%2BaDLzos5QEqQ0lvR5fe5LPlwrzBTSxUCj7wfQKmyV514jYfr%2BdE2coQwmBXGUDQuDAfQUHUJaSCesOwCDQjmRuoxHYDwK9h6aw%2F4YaydKFXjAY7shhYplihnhZlrX%2B7jn5%2B6ABB5TQd0BlZWlDPlcv3M%2Faxpk%2FlKCcvNdmKEEBX9c83CqhxjP75vDucYwXNSScKgTXC26CsDK%2BJOTkb2oQ5IxA1b2a8OZlvH8nDLlDt5OXLXkeckyBK5wrDkY120zfc%2BMM8yKmLGjhdb%2Bf8IdJIUho%2B7ejbXXg%2FdNkp4bKdkSKmFydJI1SBH5xj%2BWllwNwWvl5WGeXjjXgDp7tjOb91WY%2FJ9fs7P1OaYILleO3lWdY5eF3CR4dU08eMtLfO246k7CiVYS2Fban058VbN%2BVI%2BpZN3XgIUER%2FOr0nL1NYZDNxBzwnqyzUvDNuiQmEGSNO1CmXAmdBoiHpHHqoxvrMy5UVld%2BOddj%2BpIKOzRM%2B8UnJILzDMKeuqMMGOqUBhIJ0qGfHwq1kq9MArTwivNM5YRkTAy%2FzNMqYUVkXoPAf747LXp2vSiBMAF4BjPdI6HIdCLD%2FNjdd0D0BhHtLIsQ2%2F0mJ1QRgm1bYunK93d4kpoT1XKFt93AOzmwyqOVFtZPe68%2FqO%2F5eLOgwJYgNErDCcDEmaY4tMOKMt7iTJMyPgAeHo9vtWTg%2B6EaNWJGJLhbloU2%2FeyAAzLyogAWVR9DBsdMA&X-Amz-Signature=0c06d41ff1a19f976cf15f1c8509ac3674ad9c61529ee1f7aaae6c95bcd74dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS56KOSP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEJtV7t3EDp%2FBB2wEpJksGJBFeL095keK5xW2tmwTQH4AiEAhU1zlHdWVF5AonMOGZFrszU7GmZ4jV0v%2Fvb35XpCNGkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAg4wZWAx5PQqqi9bircAxJ2HOkiwR1kIKypo7Muuy7lgffcL49PmyhdHkR1y4q9CqDcRgbt8mMa0JFpjNQqqqcNlo6y7drXMuZLj%2FG%2Fz%2BZnMbQjb9LVME0EWHmUl7S0ToFiHbrOWpGaR1eR1ZUpsukHYeLi9%2BaDLzos5QEqQ0lvR5fe5LPlwrzBTSxUCj7wfQKmyV514jYfr%2BdE2coQwmBXGUDQuDAfQUHUJaSCesOwCDQjmRuoxHYDwK9h6aw%2F4YaydKFXjAY7shhYplihnhZlrX%2B7jn5%2B6ABB5TQd0BlZWlDPlcv3M%2Faxpk%2FlKCcvNdmKEEBX9c83CqhxjP75vDucYwXNSScKgTXC26CsDK%2BJOTkb2oQ5IxA1b2a8OZlvH8nDLlDt5OXLXkeckyBK5wrDkY120zfc%2BMM8yKmLGjhdb%2Bf8IdJIUho%2B7ejbXXg%2FdNkp4bKdkSKmFydJI1SBH5xj%2BWllwNwWvl5WGeXjjXgDp7tjOb91WY%2FJ9fs7P1OaYILleO3lWdY5eF3CR4dU08eMtLfO246k7CiVYS2Fban058VbN%2BVI%2BpZN3XgIUER%2FOr0nL1NYZDNxBzwnqyzUvDNuiQmEGSNO1CmXAmdBoiHpHHqoxvrMy5UVld%2BOddj%2BpIKOzRM%2B8UnJILzDMKeuqMMGOqUBhIJ0qGfHwq1kq9MArTwivNM5YRkTAy%2FzNMqYUVkXoPAf747LXp2vSiBMAF4BjPdI6HIdCLD%2FNjdd0D0BhHtLIsQ2%2F0mJ1QRgm1bYunK93d4kpoT1XKFt93AOzmwyqOVFtZPe68%2FqO%2F5eLOgwJYgNErDCcDEmaY4tMOKMt7iTJMyPgAeHo9vtWTg%2B6EaNWJGJLhbloU2%2FeyAAzLyogAWVR9DBsdMA&X-Amz-Signature=5fa12c433e2818ea05062c529ee0e9d3ff5065ef8fc1f5685fdf9291da3d781b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS56KOSP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEJtV7t3EDp%2FBB2wEpJksGJBFeL095keK5xW2tmwTQH4AiEAhU1zlHdWVF5AonMOGZFrszU7GmZ4jV0v%2Fvb35XpCNGkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAg4wZWAx5PQqqi9bircAxJ2HOkiwR1kIKypo7Muuy7lgffcL49PmyhdHkR1y4q9CqDcRgbt8mMa0JFpjNQqqqcNlo6y7drXMuZLj%2FG%2Fz%2BZnMbQjb9LVME0EWHmUl7S0ToFiHbrOWpGaR1eR1ZUpsukHYeLi9%2BaDLzos5QEqQ0lvR5fe5LPlwrzBTSxUCj7wfQKmyV514jYfr%2BdE2coQwmBXGUDQuDAfQUHUJaSCesOwCDQjmRuoxHYDwK9h6aw%2F4YaydKFXjAY7shhYplihnhZlrX%2B7jn5%2B6ABB5TQd0BlZWlDPlcv3M%2Faxpk%2FlKCcvNdmKEEBX9c83CqhxjP75vDucYwXNSScKgTXC26CsDK%2BJOTkb2oQ5IxA1b2a8OZlvH8nDLlDt5OXLXkeckyBK5wrDkY120zfc%2BMM8yKmLGjhdb%2Bf8IdJIUho%2B7ejbXXg%2FdNkp4bKdkSKmFydJI1SBH5xj%2BWllwNwWvl5WGeXjjXgDp7tjOb91WY%2FJ9fs7P1OaYILleO3lWdY5eF3CR4dU08eMtLfO246k7CiVYS2Fban058VbN%2BVI%2BpZN3XgIUER%2FOr0nL1NYZDNxBzwnqyzUvDNuiQmEGSNO1CmXAmdBoiHpHHqoxvrMy5UVld%2BOddj%2BpIKOzRM%2B8UnJILzDMKeuqMMGOqUBhIJ0qGfHwq1kq9MArTwivNM5YRkTAy%2FzNMqYUVkXoPAf747LXp2vSiBMAF4BjPdI6HIdCLD%2FNjdd0D0BhHtLIsQ2%2F0mJ1QRgm1bYunK93d4kpoT1XKFt93AOzmwyqOVFtZPe68%2FqO%2F5eLOgwJYgNErDCcDEmaY4tMOKMt7iTJMyPgAeHo9vtWTg%2B6EaNWJGJLhbloU2%2FeyAAzLyogAWVR9DBsdMA&X-Amz-Signature=ff07abc791c9412464f384d26c9d57951a09ece4fa841baefaa616205e02c9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS56KOSP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEJtV7t3EDp%2FBB2wEpJksGJBFeL095keK5xW2tmwTQH4AiEAhU1zlHdWVF5AonMOGZFrszU7GmZ4jV0v%2Fvb35XpCNGkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAg4wZWAx5PQqqi9bircAxJ2HOkiwR1kIKypo7Muuy7lgffcL49PmyhdHkR1y4q9CqDcRgbt8mMa0JFpjNQqqqcNlo6y7drXMuZLj%2FG%2Fz%2BZnMbQjb9LVME0EWHmUl7S0ToFiHbrOWpGaR1eR1ZUpsukHYeLi9%2BaDLzos5QEqQ0lvR5fe5LPlwrzBTSxUCj7wfQKmyV514jYfr%2BdE2coQwmBXGUDQuDAfQUHUJaSCesOwCDQjmRuoxHYDwK9h6aw%2F4YaydKFXjAY7shhYplihnhZlrX%2B7jn5%2B6ABB5TQd0BlZWlDPlcv3M%2Faxpk%2FlKCcvNdmKEEBX9c83CqhxjP75vDucYwXNSScKgTXC26CsDK%2BJOTkb2oQ5IxA1b2a8OZlvH8nDLlDt5OXLXkeckyBK5wrDkY120zfc%2BMM8yKmLGjhdb%2Bf8IdJIUho%2B7ejbXXg%2FdNkp4bKdkSKmFydJI1SBH5xj%2BWllwNwWvl5WGeXjjXgDp7tjOb91WY%2FJ9fs7P1OaYILleO3lWdY5eF3CR4dU08eMtLfO246k7CiVYS2Fban058VbN%2BVI%2BpZN3XgIUER%2FOr0nL1NYZDNxBzwnqyzUvDNuiQmEGSNO1CmXAmdBoiHpHHqoxvrMy5UVld%2BOddj%2BpIKOzRM%2B8UnJILzDMKeuqMMGOqUBhIJ0qGfHwq1kq9MArTwivNM5YRkTAy%2FzNMqYUVkXoPAf747LXp2vSiBMAF4BjPdI6HIdCLD%2FNjdd0D0BhHtLIsQ2%2F0mJ1QRgm1bYunK93d4kpoT1XKFt93AOzmwyqOVFtZPe68%2FqO%2F5eLOgwJYgNErDCcDEmaY4tMOKMt7iTJMyPgAeHo9vtWTg%2B6EaNWJGJLhbloU2%2FeyAAzLyogAWVR9DBsdMA&X-Amz-Signature=2117e9d367212c9d3eda8f2723d01539afbee180fdae91c6aedaf857230e3403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS56KOSP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEJtV7t3EDp%2FBB2wEpJksGJBFeL095keK5xW2tmwTQH4AiEAhU1zlHdWVF5AonMOGZFrszU7GmZ4jV0v%2Fvb35XpCNGkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAg4wZWAx5PQqqi9bircAxJ2HOkiwR1kIKypo7Muuy7lgffcL49PmyhdHkR1y4q9CqDcRgbt8mMa0JFpjNQqqqcNlo6y7drXMuZLj%2FG%2Fz%2BZnMbQjb9LVME0EWHmUl7S0ToFiHbrOWpGaR1eR1ZUpsukHYeLi9%2BaDLzos5QEqQ0lvR5fe5LPlwrzBTSxUCj7wfQKmyV514jYfr%2BdE2coQwmBXGUDQuDAfQUHUJaSCesOwCDQjmRuoxHYDwK9h6aw%2F4YaydKFXjAY7shhYplihnhZlrX%2B7jn5%2B6ABB5TQd0BlZWlDPlcv3M%2Faxpk%2FlKCcvNdmKEEBX9c83CqhxjP75vDucYwXNSScKgTXC26CsDK%2BJOTkb2oQ5IxA1b2a8OZlvH8nDLlDt5OXLXkeckyBK5wrDkY120zfc%2BMM8yKmLGjhdb%2Bf8IdJIUho%2B7ejbXXg%2FdNkp4bKdkSKmFydJI1SBH5xj%2BWllwNwWvl5WGeXjjXgDp7tjOb91WY%2FJ9fs7P1OaYILleO3lWdY5eF3CR4dU08eMtLfO246k7CiVYS2Fban058VbN%2BVI%2BpZN3XgIUER%2FOr0nL1NYZDNxBzwnqyzUvDNuiQmEGSNO1CmXAmdBoiHpHHqoxvrMy5UVld%2BOddj%2BpIKOzRM%2B8UnJILzDMKeuqMMGOqUBhIJ0qGfHwq1kq9MArTwivNM5YRkTAy%2FzNMqYUVkXoPAf747LXp2vSiBMAF4BjPdI6HIdCLD%2FNjdd0D0BhHtLIsQ2%2F0mJ1QRgm1bYunK93d4kpoT1XKFt93AOzmwyqOVFtZPe68%2FqO%2F5eLOgwJYgNErDCcDEmaY4tMOKMt7iTJMyPgAeHo9vtWTg%2B6EaNWJGJLhbloU2%2FeyAAzLyogAWVR9DBsdMA&X-Amz-Signature=aeea309fbb72e1865397cb386c4e96d58fbcc7ac31e40f5568b5af3c4ad343ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS56KOSP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEJtV7t3EDp%2FBB2wEpJksGJBFeL095keK5xW2tmwTQH4AiEAhU1zlHdWVF5AonMOGZFrszU7GmZ4jV0v%2Fvb35XpCNGkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAg4wZWAx5PQqqi9bircAxJ2HOkiwR1kIKypo7Muuy7lgffcL49PmyhdHkR1y4q9CqDcRgbt8mMa0JFpjNQqqqcNlo6y7drXMuZLj%2FG%2Fz%2BZnMbQjb9LVME0EWHmUl7S0ToFiHbrOWpGaR1eR1ZUpsukHYeLi9%2BaDLzos5QEqQ0lvR5fe5LPlwrzBTSxUCj7wfQKmyV514jYfr%2BdE2coQwmBXGUDQuDAfQUHUJaSCesOwCDQjmRuoxHYDwK9h6aw%2F4YaydKFXjAY7shhYplihnhZlrX%2B7jn5%2B6ABB5TQd0BlZWlDPlcv3M%2Faxpk%2FlKCcvNdmKEEBX9c83CqhxjP75vDucYwXNSScKgTXC26CsDK%2BJOTkb2oQ5IxA1b2a8OZlvH8nDLlDt5OXLXkeckyBK5wrDkY120zfc%2BMM8yKmLGjhdb%2Bf8IdJIUho%2B7ejbXXg%2FdNkp4bKdkSKmFydJI1SBH5xj%2BWllwNwWvl5WGeXjjXgDp7tjOb91WY%2FJ9fs7P1OaYILleO3lWdY5eF3CR4dU08eMtLfO246k7CiVYS2Fban058VbN%2BVI%2BpZN3XgIUER%2FOr0nL1NYZDNxBzwnqyzUvDNuiQmEGSNO1CmXAmdBoiHpHHqoxvrMy5UVld%2BOddj%2BpIKOzRM%2B8UnJILzDMKeuqMMGOqUBhIJ0qGfHwq1kq9MArTwivNM5YRkTAy%2FzNMqYUVkXoPAf747LXp2vSiBMAF4BjPdI6HIdCLD%2FNjdd0D0BhHtLIsQ2%2F0mJ1QRgm1bYunK93d4kpoT1XKFt93AOzmwyqOVFtZPe68%2FqO%2F5eLOgwJYgNErDCcDEmaY4tMOKMt7iTJMyPgAeHo9vtWTg%2B6EaNWJGJLhbloU2%2FeyAAzLyogAWVR9DBsdMA&X-Amz-Signature=6cb3fff636e3870de95248528e91b55488e8c4185ed8f6f98be3864fa3a0b2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
