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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIS4FZN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuWnLCB22U5oEB6eqWZB%2BI6C28tVb5FfWep68vJRTTCwIgSSch4y88XIq35wDNfbPl90vMl1ICx011DCzq%2BxT6f4oq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFSUMh%2B79INwBYH8MircA166yjOuaaLfsukRnulykrsYZRGFoKavubzN8I89kD5lM%2B01PIlcJUg%2BlX6R38EJLheA0oUrHY2Ww8bDe4PuWF8tp1lmWqQjJCC%2Bm74D8Z9f3BstLu6c1w5gbKnjle274S3x5m32Rgbri3jwA2S6JOWbxmC20H6olEJrE0vCyhROO5BPlRwc02N8apKlj9%2FOREqYP7OiW%2FGeGkWZZ5MUFFp6xhRFfdfNcFikSHMdiuTrAus4VPa1PFEp2zPt1F0XvWCwj44GFYIIAAuZPZvZpRQZ4zkAjWzv%2BHaShUgJfejuXMBDIKZOc%2FWa5LNqKaX9cKEnuOqQCMiQNKWvs3aNhEkyPCOB2wmD%2F7BwZCvcLRlHQxdDeyjKWXg2ed%2FsH9AsAdFca0cI5CAmzugNgNqL81UYbOqO2HlUvR%2B3YFEpwsoIX0%2BjrnhfmpXLrOcPQckIMTFqRtyfO0OCFU3MQwuByMt72bobhec8en3SLlShRGxMkd8SxdJdGPU9hyCb%2F1NPc54sfUtsXsLnmUM2TrimaihFcd7AUPYl0JRgxFvbCO8DpL4BEmY4Hra0tSjg2CFC1Zox2YeqKIecW5cZE9QtachmhgSMLK0qZ6CM5ypN4bWLM%2FJl%2BX5R1f%2F%2FgVnxMLKWpb4GOqUBhBWBrFkL%2FjCF9IFM6WVBzHyHUtWcfJ5s6Zdk3kxm5ZCjjM3Bo7rUpC6tkcnAo8zQH7aqipTqtuTeNo7iXEoXffYMaR7963xcpJN3K9YSXH4DVBAtVycXxcrocXZrIHH9ciSvO9253g3twxPwV5OWm2jLFS0ql8XuxXWQpHqQMXPkIUih%2FMECMw6GFKDk2ParEyh1AjBio6G%2FA%2B9ruW1eTlzoykO7&X-Amz-Signature=9d31cbb5903ec8bc69cde16e0afd6e44d59d090e28c4b54cc99dc48c57903554&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIS4FZN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuWnLCB22U5oEB6eqWZB%2BI6C28tVb5FfWep68vJRTTCwIgSSch4y88XIq35wDNfbPl90vMl1ICx011DCzq%2BxT6f4oq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFSUMh%2B79INwBYH8MircA166yjOuaaLfsukRnulykrsYZRGFoKavubzN8I89kD5lM%2B01PIlcJUg%2BlX6R38EJLheA0oUrHY2Ww8bDe4PuWF8tp1lmWqQjJCC%2Bm74D8Z9f3BstLu6c1w5gbKnjle274S3x5m32Rgbri3jwA2S6JOWbxmC20H6olEJrE0vCyhROO5BPlRwc02N8apKlj9%2FOREqYP7OiW%2FGeGkWZZ5MUFFp6xhRFfdfNcFikSHMdiuTrAus4VPa1PFEp2zPt1F0XvWCwj44GFYIIAAuZPZvZpRQZ4zkAjWzv%2BHaShUgJfejuXMBDIKZOc%2FWa5LNqKaX9cKEnuOqQCMiQNKWvs3aNhEkyPCOB2wmD%2F7BwZCvcLRlHQxdDeyjKWXg2ed%2FsH9AsAdFca0cI5CAmzugNgNqL81UYbOqO2HlUvR%2B3YFEpwsoIX0%2BjrnhfmpXLrOcPQckIMTFqRtyfO0OCFU3MQwuByMt72bobhec8en3SLlShRGxMkd8SxdJdGPU9hyCb%2F1NPc54sfUtsXsLnmUM2TrimaihFcd7AUPYl0JRgxFvbCO8DpL4BEmY4Hra0tSjg2CFC1Zox2YeqKIecW5cZE9QtachmhgSMLK0qZ6CM5ypN4bWLM%2FJl%2BX5R1f%2F%2FgVnxMLKWpb4GOqUBhBWBrFkL%2FjCF9IFM6WVBzHyHUtWcfJ5s6Zdk3kxm5ZCjjM3Bo7rUpC6tkcnAo8zQH7aqipTqtuTeNo7iXEoXffYMaR7963xcpJN3K9YSXH4DVBAtVycXxcrocXZrIHH9ciSvO9253g3twxPwV5OWm2jLFS0ql8XuxXWQpHqQMXPkIUih%2FMECMw6GFKDk2ParEyh1AjBio6G%2FA%2B9ruW1eTlzoykO7&X-Amz-Signature=a6e46fe1bae75a41f18a42f9025ed62f7438c8ebeb2f37e1620d3580f5a0a7e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIS4FZN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuWnLCB22U5oEB6eqWZB%2BI6C28tVb5FfWep68vJRTTCwIgSSch4y88XIq35wDNfbPl90vMl1ICx011DCzq%2BxT6f4oq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFSUMh%2B79INwBYH8MircA166yjOuaaLfsukRnulykrsYZRGFoKavubzN8I89kD5lM%2B01PIlcJUg%2BlX6R38EJLheA0oUrHY2Ww8bDe4PuWF8tp1lmWqQjJCC%2Bm74D8Z9f3BstLu6c1w5gbKnjle274S3x5m32Rgbri3jwA2S6JOWbxmC20H6olEJrE0vCyhROO5BPlRwc02N8apKlj9%2FOREqYP7OiW%2FGeGkWZZ5MUFFp6xhRFfdfNcFikSHMdiuTrAus4VPa1PFEp2zPt1F0XvWCwj44GFYIIAAuZPZvZpRQZ4zkAjWzv%2BHaShUgJfejuXMBDIKZOc%2FWa5LNqKaX9cKEnuOqQCMiQNKWvs3aNhEkyPCOB2wmD%2F7BwZCvcLRlHQxdDeyjKWXg2ed%2FsH9AsAdFca0cI5CAmzugNgNqL81UYbOqO2HlUvR%2B3YFEpwsoIX0%2BjrnhfmpXLrOcPQckIMTFqRtyfO0OCFU3MQwuByMt72bobhec8en3SLlShRGxMkd8SxdJdGPU9hyCb%2F1NPc54sfUtsXsLnmUM2TrimaihFcd7AUPYl0JRgxFvbCO8DpL4BEmY4Hra0tSjg2CFC1Zox2YeqKIecW5cZE9QtachmhgSMLK0qZ6CM5ypN4bWLM%2FJl%2BX5R1f%2F%2FgVnxMLKWpb4GOqUBhBWBrFkL%2FjCF9IFM6WVBzHyHUtWcfJ5s6Zdk3kxm5ZCjjM3Bo7rUpC6tkcnAo8zQH7aqipTqtuTeNo7iXEoXffYMaR7963xcpJN3K9YSXH4DVBAtVycXxcrocXZrIHH9ciSvO9253g3twxPwV5OWm2jLFS0ql8XuxXWQpHqQMXPkIUih%2FMECMw6GFKDk2ParEyh1AjBio6G%2FA%2B9ruW1eTlzoykO7&X-Amz-Signature=578bd914f07a464c0de9d99ad9de747e024eb084350349ab1c696e9946cc8a25&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIS4FZN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuWnLCB22U5oEB6eqWZB%2BI6C28tVb5FfWep68vJRTTCwIgSSch4y88XIq35wDNfbPl90vMl1ICx011DCzq%2BxT6f4oq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFSUMh%2B79INwBYH8MircA166yjOuaaLfsukRnulykrsYZRGFoKavubzN8I89kD5lM%2B01PIlcJUg%2BlX6R38EJLheA0oUrHY2Ww8bDe4PuWF8tp1lmWqQjJCC%2Bm74D8Z9f3BstLu6c1w5gbKnjle274S3x5m32Rgbri3jwA2S6JOWbxmC20H6olEJrE0vCyhROO5BPlRwc02N8apKlj9%2FOREqYP7OiW%2FGeGkWZZ5MUFFp6xhRFfdfNcFikSHMdiuTrAus4VPa1PFEp2zPt1F0XvWCwj44GFYIIAAuZPZvZpRQZ4zkAjWzv%2BHaShUgJfejuXMBDIKZOc%2FWa5LNqKaX9cKEnuOqQCMiQNKWvs3aNhEkyPCOB2wmD%2F7BwZCvcLRlHQxdDeyjKWXg2ed%2FsH9AsAdFca0cI5CAmzugNgNqL81UYbOqO2HlUvR%2B3YFEpwsoIX0%2BjrnhfmpXLrOcPQckIMTFqRtyfO0OCFU3MQwuByMt72bobhec8en3SLlShRGxMkd8SxdJdGPU9hyCb%2F1NPc54sfUtsXsLnmUM2TrimaihFcd7AUPYl0JRgxFvbCO8DpL4BEmY4Hra0tSjg2CFC1Zox2YeqKIecW5cZE9QtachmhgSMLK0qZ6CM5ypN4bWLM%2FJl%2BX5R1f%2F%2FgVnxMLKWpb4GOqUBhBWBrFkL%2FjCF9IFM6WVBzHyHUtWcfJ5s6Zdk3kxm5ZCjjM3Bo7rUpC6tkcnAo8zQH7aqipTqtuTeNo7iXEoXffYMaR7963xcpJN3K9YSXH4DVBAtVycXxcrocXZrIHH9ciSvO9253g3twxPwV5OWm2jLFS0ql8XuxXWQpHqQMXPkIUih%2FMECMw6GFKDk2ParEyh1AjBio6G%2FA%2B9ruW1eTlzoykO7&X-Amz-Signature=db1179de5d8ebf83ea1ff490cb5fdf7651883e9b76053bd92b047ec8bdd2c924&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIS4FZN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuWnLCB22U5oEB6eqWZB%2BI6C28tVb5FfWep68vJRTTCwIgSSch4y88XIq35wDNfbPl90vMl1ICx011DCzq%2BxT6f4oq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFSUMh%2B79INwBYH8MircA166yjOuaaLfsukRnulykrsYZRGFoKavubzN8I89kD5lM%2B01PIlcJUg%2BlX6R38EJLheA0oUrHY2Ww8bDe4PuWF8tp1lmWqQjJCC%2Bm74D8Z9f3BstLu6c1w5gbKnjle274S3x5m32Rgbri3jwA2S6JOWbxmC20H6olEJrE0vCyhROO5BPlRwc02N8apKlj9%2FOREqYP7OiW%2FGeGkWZZ5MUFFp6xhRFfdfNcFikSHMdiuTrAus4VPa1PFEp2zPt1F0XvWCwj44GFYIIAAuZPZvZpRQZ4zkAjWzv%2BHaShUgJfejuXMBDIKZOc%2FWa5LNqKaX9cKEnuOqQCMiQNKWvs3aNhEkyPCOB2wmD%2F7BwZCvcLRlHQxdDeyjKWXg2ed%2FsH9AsAdFca0cI5CAmzugNgNqL81UYbOqO2HlUvR%2B3YFEpwsoIX0%2BjrnhfmpXLrOcPQckIMTFqRtyfO0OCFU3MQwuByMt72bobhec8en3SLlShRGxMkd8SxdJdGPU9hyCb%2F1NPc54sfUtsXsLnmUM2TrimaihFcd7AUPYl0JRgxFvbCO8DpL4BEmY4Hra0tSjg2CFC1Zox2YeqKIecW5cZE9QtachmhgSMLK0qZ6CM5ypN4bWLM%2FJl%2BX5R1f%2F%2FgVnxMLKWpb4GOqUBhBWBrFkL%2FjCF9IFM6WVBzHyHUtWcfJ5s6Zdk3kxm5ZCjjM3Bo7rUpC6tkcnAo8zQH7aqipTqtuTeNo7iXEoXffYMaR7963xcpJN3K9YSXH4DVBAtVycXxcrocXZrIHH9ciSvO9253g3twxPwV5OWm2jLFS0ql8XuxXWQpHqQMXPkIUih%2FMECMw6GFKDk2ParEyh1AjBio6G%2FA%2B9ruW1eTlzoykO7&X-Amz-Signature=34ef183d13cab263150879c6ccf35c2aee77328cfd434ab2202005646a002dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIS4FZN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuWnLCB22U5oEB6eqWZB%2BI6C28tVb5FfWep68vJRTTCwIgSSch4y88XIq35wDNfbPl90vMl1ICx011DCzq%2BxT6f4oq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFSUMh%2B79INwBYH8MircA166yjOuaaLfsukRnulykrsYZRGFoKavubzN8I89kD5lM%2B01PIlcJUg%2BlX6R38EJLheA0oUrHY2Ww8bDe4PuWF8tp1lmWqQjJCC%2Bm74D8Z9f3BstLu6c1w5gbKnjle274S3x5m32Rgbri3jwA2S6JOWbxmC20H6olEJrE0vCyhROO5BPlRwc02N8apKlj9%2FOREqYP7OiW%2FGeGkWZZ5MUFFp6xhRFfdfNcFikSHMdiuTrAus4VPa1PFEp2zPt1F0XvWCwj44GFYIIAAuZPZvZpRQZ4zkAjWzv%2BHaShUgJfejuXMBDIKZOc%2FWa5LNqKaX9cKEnuOqQCMiQNKWvs3aNhEkyPCOB2wmD%2F7BwZCvcLRlHQxdDeyjKWXg2ed%2FsH9AsAdFca0cI5CAmzugNgNqL81UYbOqO2HlUvR%2B3YFEpwsoIX0%2BjrnhfmpXLrOcPQckIMTFqRtyfO0OCFU3MQwuByMt72bobhec8en3SLlShRGxMkd8SxdJdGPU9hyCb%2F1NPc54sfUtsXsLnmUM2TrimaihFcd7AUPYl0JRgxFvbCO8DpL4BEmY4Hra0tSjg2CFC1Zox2YeqKIecW5cZE9QtachmhgSMLK0qZ6CM5ypN4bWLM%2FJl%2BX5R1f%2F%2FgVnxMLKWpb4GOqUBhBWBrFkL%2FjCF9IFM6WVBzHyHUtWcfJ5s6Zdk3kxm5ZCjjM3Bo7rUpC6tkcnAo8zQH7aqipTqtuTeNo7iXEoXffYMaR7963xcpJN3K9YSXH4DVBAtVycXxcrocXZrIHH9ciSvO9253g3twxPwV5OWm2jLFS0ql8XuxXWQpHqQMXPkIUih%2FMECMw6GFKDk2ParEyh1AjBio6G%2FA%2B9ruW1eTlzoykO7&X-Amz-Signature=84c2bef155e0721cdc0c0cbc90679eb63c94c24c729ab62a60b03dc19fbcbca2&X-Amz-SignedHeaders=host&x-id=GetObject)
