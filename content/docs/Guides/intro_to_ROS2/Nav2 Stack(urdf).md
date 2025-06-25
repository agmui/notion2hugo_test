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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRO3IVJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCtLoRTdN4lFEkUea5A%2Bl8jzMPRpbAKZwgl11bWJG%2BisAIgXrvo39IqcMO3Oq6SGjydXMdXWs4k1T06YLObMN%2BNrecq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL%2FPs0595adNzdG%2BoyrcA64KVl4zmtcmFPBO6A13LB0WQzHIT7G7%2FWrg3pT9cizpA3fTLcow4XO4kmsLeQLyDH26WUGwHZpklQ%2BRJ7KDH%2BdXVu1ay1VtHY6Qwm0tP4l0mDWsdqllFefe73V9FnHrue%2B0YQysOg2Fxa47jZmR%2BpIEc%2FZ300dNChsDy2oRjXZICFIoZcvzWjfHuYxOkeAFy9PNGFUwYMNsDECr2Jil%2FOih5%2BMyryGXXxiFu63AGiIZP3OusXR6uQISojI6H4NVRIu8E0E9FzZVIY5T5AEloJdxM2Vpqk6R7qd0wNMcOvd9sxIRcKohM%2FO0jbDztKufYVGSfUvRQJFKnlfbXyFhqFXWKtQcsm38NE%2Bxh4Jnvap7GoBNFa1Rfj9L17O5yOU2LaGKC%2B8YQHIbx01ugX3qYwxP1trccbDH8ZppDJA6nXiQwfUejRQzf7i28xIQrubmA%2Fm5KW3YLKIKm33Kk90fPHjI%2BMJ8N3hEQYGPqUoj3RnVZq%2BJnXSRncEfbKwAzxUKItnsr9%2BlYr2IlAQtb0hCQPmzgPZlqgMhPklUD0UskPp32F7sktrZLR7XAYOB8AsGbb%2F9I3R0toxCtIrKXiyb6LSoqllwoWCWwd%2FswZv%2Fo5B4TBRvgXISHiVk0eYDMNTg8MIGOqUB%2FniLCL8pa3wflKOnQzIEaP2aWYvYVu7jobQNmzFhvtVzwE%2FJP0KNhwv19ZKT%2FUqj4jLrxA8Sey7T2nKQZBUaBahYTnpqA%2BLuWpXAB0LVUfDVxHsiMGNo%2BVd9O6OHidc87rZjfn1jLP01xNhH2kvVkQWp%2FQWsZAEzqG90soLV474vGFqOxpD6OiNhCuVglLXc5AhYmd3tXRIfHt7RIvNNUdJPeJRH&X-Amz-Signature=dd89ea1b6becab1f32356a5006386b7bd5cac91f2b4747475fc026ce60b7d7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRO3IVJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCtLoRTdN4lFEkUea5A%2Bl8jzMPRpbAKZwgl11bWJG%2BisAIgXrvo39IqcMO3Oq6SGjydXMdXWs4k1T06YLObMN%2BNrecq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL%2FPs0595adNzdG%2BoyrcA64KVl4zmtcmFPBO6A13LB0WQzHIT7G7%2FWrg3pT9cizpA3fTLcow4XO4kmsLeQLyDH26WUGwHZpklQ%2BRJ7KDH%2BdXVu1ay1VtHY6Qwm0tP4l0mDWsdqllFefe73V9FnHrue%2B0YQysOg2Fxa47jZmR%2BpIEc%2FZ300dNChsDy2oRjXZICFIoZcvzWjfHuYxOkeAFy9PNGFUwYMNsDECr2Jil%2FOih5%2BMyryGXXxiFu63AGiIZP3OusXR6uQISojI6H4NVRIu8E0E9FzZVIY5T5AEloJdxM2Vpqk6R7qd0wNMcOvd9sxIRcKohM%2FO0jbDztKufYVGSfUvRQJFKnlfbXyFhqFXWKtQcsm38NE%2Bxh4Jnvap7GoBNFa1Rfj9L17O5yOU2LaGKC%2B8YQHIbx01ugX3qYwxP1trccbDH8ZppDJA6nXiQwfUejRQzf7i28xIQrubmA%2Fm5KW3YLKIKm33Kk90fPHjI%2BMJ8N3hEQYGPqUoj3RnVZq%2BJnXSRncEfbKwAzxUKItnsr9%2BlYr2IlAQtb0hCQPmzgPZlqgMhPklUD0UskPp32F7sktrZLR7XAYOB8AsGbb%2F9I3R0toxCtIrKXiyb6LSoqllwoWCWwd%2FswZv%2Fo5B4TBRvgXISHiVk0eYDMNTg8MIGOqUB%2FniLCL8pa3wflKOnQzIEaP2aWYvYVu7jobQNmzFhvtVzwE%2FJP0KNhwv19ZKT%2FUqj4jLrxA8Sey7T2nKQZBUaBahYTnpqA%2BLuWpXAB0LVUfDVxHsiMGNo%2BVd9O6OHidc87rZjfn1jLP01xNhH2kvVkQWp%2FQWsZAEzqG90soLV474vGFqOxpD6OiNhCuVglLXc5AhYmd3tXRIfHt7RIvNNUdJPeJRH&X-Amz-Signature=7236fce886e230f3f4a0635c8d2df27ee7f2c8b5d2b90a71bef643d5a879f4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRO3IVJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCtLoRTdN4lFEkUea5A%2Bl8jzMPRpbAKZwgl11bWJG%2BisAIgXrvo39IqcMO3Oq6SGjydXMdXWs4k1T06YLObMN%2BNrecq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL%2FPs0595adNzdG%2BoyrcA64KVl4zmtcmFPBO6A13LB0WQzHIT7G7%2FWrg3pT9cizpA3fTLcow4XO4kmsLeQLyDH26WUGwHZpklQ%2BRJ7KDH%2BdXVu1ay1VtHY6Qwm0tP4l0mDWsdqllFefe73V9FnHrue%2B0YQysOg2Fxa47jZmR%2BpIEc%2FZ300dNChsDy2oRjXZICFIoZcvzWjfHuYxOkeAFy9PNGFUwYMNsDECr2Jil%2FOih5%2BMyryGXXxiFu63AGiIZP3OusXR6uQISojI6H4NVRIu8E0E9FzZVIY5T5AEloJdxM2Vpqk6R7qd0wNMcOvd9sxIRcKohM%2FO0jbDztKufYVGSfUvRQJFKnlfbXyFhqFXWKtQcsm38NE%2Bxh4Jnvap7GoBNFa1Rfj9L17O5yOU2LaGKC%2B8YQHIbx01ugX3qYwxP1trccbDH8ZppDJA6nXiQwfUejRQzf7i28xIQrubmA%2Fm5KW3YLKIKm33Kk90fPHjI%2BMJ8N3hEQYGPqUoj3RnVZq%2BJnXSRncEfbKwAzxUKItnsr9%2BlYr2IlAQtb0hCQPmzgPZlqgMhPklUD0UskPp32F7sktrZLR7XAYOB8AsGbb%2F9I3R0toxCtIrKXiyb6LSoqllwoWCWwd%2FswZv%2Fo5B4TBRvgXISHiVk0eYDMNTg8MIGOqUB%2FniLCL8pa3wflKOnQzIEaP2aWYvYVu7jobQNmzFhvtVzwE%2FJP0KNhwv19ZKT%2FUqj4jLrxA8Sey7T2nKQZBUaBahYTnpqA%2BLuWpXAB0LVUfDVxHsiMGNo%2BVd9O6OHidc87rZjfn1jLP01xNhH2kvVkQWp%2FQWsZAEzqG90soLV474vGFqOxpD6OiNhCuVglLXc5AhYmd3tXRIfHt7RIvNNUdJPeJRH&X-Amz-Signature=23842bb14f24ef0aef900fc6c75c7fccb09a0391c19267f7930e88bad5d88fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRO3IVJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCtLoRTdN4lFEkUea5A%2Bl8jzMPRpbAKZwgl11bWJG%2BisAIgXrvo39IqcMO3Oq6SGjydXMdXWs4k1T06YLObMN%2BNrecq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL%2FPs0595adNzdG%2BoyrcA64KVl4zmtcmFPBO6A13LB0WQzHIT7G7%2FWrg3pT9cizpA3fTLcow4XO4kmsLeQLyDH26WUGwHZpklQ%2BRJ7KDH%2BdXVu1ay1VtHY6Qwm0tP4l0mDWsdqllFefe73V9FnHrue%2B0YQysOg2Fxa47jZmR%2BpIEc%2FZ300dNChsDy2oRjXZICFIoZcvzWjfHuYxOkeAFy9PNGFUwYMNsDECr2Jil%2FOih5%2BMyryGXXxiFu63AGiIZP3OusXR6uQISojI6H4NVRIu8E0E9FzZVIY5T5AEloJdxM2Vpqk6R7qd0wNMcOvd9sxIRcKohM%2FO0jbDztKufYVGSfUvRQJFKnlfbXyFhqFXWKtQcsm38NE%2Bxh4Jnvap7GoBNFa1Rfj9L17O5yOU2LaGKC%2B8YQHIbx01ugX3qYwxP1trccbDH8ZppDJA6nXiQwfUejRQzf7i28xIQrubmA%2Fm5KW3YLKIKm33Kk90fPHjI%2BMJ8N3hEQYGPqUoj3RnVZq%2BJnXSRncEfbKwAzxUKItnsr9%2BlYr2IlAQtb0hCQPmzgPZlqgMhPklUD0UskPp32F7sktrZLR7XAYOB8AsGbb%2F9I3R0toxCtIrKXiyb6LSoqllwoWCWwd%2FswZv%2Fo5B4TBRvgXISHiVk0eYDMNTg8MIGOqUB%2FniLCL8pa3wflKOnQzIEaP2aWYvYVu7jobQNmzFhvtVzwE%2FJP0KNhwv19ZKT%2FUqj4jLrxA8Sey7T2nKQZBUaBahYTnpqA%2BLuWpXAB0LVUfDVxHsiMGNo%2BVd9O6OHidc87rZjfn1jLP01xNhH2kvVkQWp%2FQWsZAEzqG90soLV474vGFqOxpD6OiNhCuVglLXc5AhYmd3tXRIfHt7RIvNNUdJPeJRH&X-Amz-Signature=bac7b4fe69c6622f8fa558cc69f68da5054ede57e61872f97890f0c1f24832ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRO3IVJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCtLoRTdN4lFEkUea5A%2Bl8jzMPRpbAKZwgl11bWJG%2BisAIgXrvo39IqcMO3Oq6SGjydXMdXWs4k1T06YLObMN%2BNrecq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL%2FPs0595adNzdG%2BoyrcA64KVl4zmtcmFPBO6A13LB0WQzHIT7G7%2FWrg3pT9cizpA3fTLcow4XO4kmsLeQLyDH26WUGwHZpklQ%2BRJ7KDH%2BdXVu1ay1VtHY6Qwm0tP4l0mDWsdqllFefe73V9FnHrue%2B0YQysOg2Fxa47jZmR%2BpIEc%2FZ300dNChsDy2oRjXZICFIoZcvzWjfHuYxOkeAFy9PNGFUwYMNsDECr2Jil%2FOih5%2BMyryGXXxiFu63AGiIZP3OusXR6uQISojI6H4NVRIu8E0E9FzZVIY5T5AEloJdxM2Vpqk6R7qd0wNMcOvd9sxIRcKohM%2FO0jbDztKufYVGSfUvRQJFKnlfbXyFhqFXWKtQcsm38NE%2Bxh4Jnvap7GoBNFa1Rfj9L17O5yOU2LaGKC%2B8YQHIbx01ugX3qYwxP1trccbDH8ZppDJA6nXiQwfUejRQzf7i28xIQrubmA%2Fm5KW3YLKIKm33Kk90fPHjI%2BMJ8N3hEQYGPqUoj3RnVZq%2BJnXSRncEfbKwAzxUKItnsr9%2BlYr2IlAQtb0hCQPmzgPZlqgMhPklUD0UskPp32F7sktrZLR7XAYOB8AsGbb%2F9I3R0toxCtIrKXiyb6LSoqllwoWCWwd%2FswZv%2Fo5B4TBRvgXISHiVk0eYDMNTg8MIGOqUB%2FniLCL8pa3wflKOnQzIEaP2aWYvYVu7jobQNmzFhvtVzwE%2FJP0KNhwv19ZKT%2FUqj4jLrxA8Sey7T2nKQZBUaBahYTnpqA%2BLuWpXAB0LVUfDVxHsiMGNo%2BVd9O6OHidc87rZjfn1jLP01xNhH2kvVkQWp%2FQWsZAEzqG90soLV474vGFqOxpD6OiNhCuVglLXc5AhYmd3tXRIfHt7RIvNNUdJPeJRH&X-Amz-Signature=d8bfade42c27173b68bfe90ee00f2e8ecb04122f16896f2efbb2169b396017fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRO3IVJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCtLoRTdN4lFEkUea5A%2Bl8jzMPRpbAKZwgl11bWJG%2BisAIgXrvo39IqcMO3Oq6SGjydXMdXWs4k1T06YLObMN%2BNrecq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL%2FPs0595adNzdG%2BoyrcA64KVl4zmtcmFPBO6A13LB0WQzHIT7G7%2FWrg3pT9cizpA3fTLcow4XO4kmsLeQLyDH26WUGwHZpklQ%2BRJ7KDH%2BdXVu1ay1VtHY6Qwm0tP4l0mDWsdqllFefe73V9FnHrue%2B0YQysOg2Fxa47jZmR%2BpIEc%2FZ300dNChsDy2oRjXZICFIoZcvzWjfHuYxOkeAFy9PNGFUwYMNsDECr2Jil%2FOih5%2BMyryGXXxiFu63AGiIZP3OusXR6uQISojI6H4NVRIu8E0E9FzZVIY5T5AEloJdxM2Vpqk6R7qd0wNMcOvd9sxIRcKohM%2FO0jbDztKufYVGSfUvRQJFKnlfbXyFhqFXWKtQcsm38NE%2Bxh4Jnvap7GoBNFa1Rfj9L17O5yOU2LaGKC%2B8YQHIbx01ugX3qYwxP1trccbDH8ZppDJA6nXiQwfUejRQzf7i28xIQrubmA%2Fm5KW3YLKIKm33Kk90fPHjI%2BMJ8N3hEQYGPqUoj3RnVZq%2BJnXSRncEfbKwAzxUKItnsr9%2BlYr2IlAQtb0hCQPmzgPZlqgMhPklUD0UskPp32F7sktrZLR7XAYOB8AsGbb%2F9I3R0toxCtIrKXiyb6LSoqllwoWCWwd%2FswZv%2Fo5B4TBRvgXISHiVk0eYDMNTg8MIGOqUB%2FniLCL8pa3wflKOnQzIEaP2aWYvYVu7jobQNmzFhvtVzwE%2FJP0KNhwv19ZKT%2FUqj4jLrxA8Sey7T2nKQZBUaBahYTnpqA%2BLuWpXAB0LVUfDVxHsiMGNo%2BVd9O6OHidc87rZjfn1jLP01xNhH2kvVkQWp%2FQWsZAEzqG90soLV474vGFqOxpD6OiNhCuVglLXc5AhYmd3tXRIfHt7RIvNNUdJPeJRH&X-Amz-Signature=cfc0735607b38af0c6d70d3eb2630c33b150cef1efee8d142a28c067b49915b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
