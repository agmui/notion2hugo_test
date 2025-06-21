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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSRYT2MB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXhqX1ercacXZyPttrEXMqnZFQi4slltkWDkokkwndnwIgQXKUCDzsqlW7b5loz%2BqXArjNGbuIg4qiUMMwtQb%2F%2BdEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4kswdub6rq%2FUKKsircA7%2BInoD68vouy%2B2okuOodwMfS6b9mruytq7hwY4mwvYla7UwfUnFNaDW0UGjt%2FmxuS%2Fq5xUShT1wjgQvm%2B6PkvlYgI6TQVx8EWhu4PvZ2ozGC83JgFLN3U0ZKcnER5WQ7zxp20tnvYZcSU8fo%2BP79sLzI5KlfxLw4whKdkb236xfbZEyG0mKATFwlnPRsIwY7R4Rzc47Yd4xw9YOytRtOfgGlZMI3z5f3R7cpkvI3%2BbyFZ%2FeencdZUDrOW3WA0wj6jVVWAdOG%2BXam%2BmU2fQSegTa585TJL3YbYv%2F7BqEBF29sGpw7OqtSo5h4th4x3sWzuVIcT2BxLmJFXyYJLjFSRYLadHSPjkVMAd9jLg63BTZJjnKA%2Bc38bLkaoMnfyOe%2F159EfNsWSxZiO8Kt99T4vbb7IFdIefswuUJg4Da5nrmaU5uu7vSZCEuAd5UpMn%2BrArAXbdK3EbRi7ychtAyzJcTyyrFlO5M%2BGJjih0TxuEt%2Bvk%2FXAmr4qIr4C4%2BwJOrSs3YPzGR9sfHgXb8X%2FyH70BRXZg5Vj%2BZBIGU26VwHrajH0Qlze2%2BVHgb0HnIUiLpbSHfcZ19JekXgmsTyqJ29pYkWEmmfxV7E7brv1hKmFzWVMNrQa9nvVXm%2FgLQMOLm2MIGOqUBT1a6tzQoaUirW4TFiyoNSc6ROSsOsl1Qs%2FHf3qSEEU984Q8jWWwSMGTuwQ2mbw8dLYwSvcUz%2BlxwKxYtMneURF0jHuaBSuK6gFuEnnx0rsIlh%2FjmwwRsgdVfKJI12rlywTqUEuxxUg2pBItCEnQhJCcFbPKCLYPX9acM%2BPc6jMPlZ5gQgO2w%2Bw26UZ5o6V%2B39a8%2Fa6KwAAKlWQgbFpW0EHLSgkgx&X-Amz-Signature=4feb6e6d572840e7f6ab2b5e48e6574c18968d362a949e5e57bb090bed26faca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSRYT2MB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXhqX1ercacXZyPttrEXMqnZFQi4slltkWDkokkwndnwIgQXKUCDzsqlW7b5loz%2BqXArjNGbuIg4qiUMMwtQb%2F%2BdEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4kswdub6rq%2FUKKsircA7%2BInoD68vouy%2B2okuOodwMfS6b9mruytq7hwY4mwvYla7UwfUnFNaDW0UGjt%2FmxuS%2Fq5xUShT1wjgQvm%2B6PkvlYgI6TQVx8EWhu4PvZ2ozGC83JgFLN3U0ZKcnER5WQ7zxp20tnvYZcSU8fo%2BP79sLzI5KlfxLw4whKdkb236xfbZEyG0mKATFwlnPRsIwY7R4Rzc47Yd4xw9YOytRtOfgGlZMI3z5f3R7cpkvI3%2BbyFZ%2FeencdZUDrOW3WA0wj6jVVWAdOG%2BXam%2BmU2fQSegTa585TJL3YbYv%2F7BqEBF29sGpw7OqtSo5h4th4x3sWzuVIcT2BxLmJFXyYJLjFSRYLadHSPjkVMAd9jLg63BTZJjnKA%2Bc38bLkaoMnfyOe%2F159EfNsWSxZiO8Kt99T4vbb7IFdIefswuUJg4Da5nrmaU5uu7vSZCEuAd5UpMn%2BrArAXbdK3EbRi7ychtAyzJcTyyrFlO5M%2BGJjih0TxuEt%2Bvk%2FXAmr4qIr4C4%2BwJOrSs3YPzGR9sfHgXb8X%2FyH70BRXZg5Vj%2BZBIGU26VwHrajH0Qlze2%2BVHgb0HnIUiLpbSHfcZ19JekXgmsTyqJ29pYkWEmmfxV7E7brv1hKmFzWVMNrQa9nvVXm%2FgLQMOLm2MIGOqUBT1a6tzQoaUirW4TFiyoNSc6ROSsOsl1Qs%2FHf3qSEEU984Q8jWWwSMGTuwQ2mbw8dLYwSvcUz%2BlxwKxYtMneURF0jHuaBSuK6gFuEnnx0rsIlh%2FjmwwRsgdVfKJI12rlywTqUEuxxUg2pBItCEnQhJCcFbPKCLYPX9acM%2BPc6jMPlZ5gQgO2w%2Bw26UZ5o6V%2B39a8%2Fa6KwAAKlWQgbFpW0EHLSgkgx&X-Amz-Signature=1691aad28ac30c26df1b186bcfaa105929c1fe21016ff21f34c74b00588d0855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSRYT2MB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXhqX1ercacXZyPttrEXMqnZFQi4slltkWDkokkwndnwIgQXKUCDzsqlW7b5loz%2BqXArjNGbuIg4qiUMMwtQb%2F%2BdEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4kswdub6rq%2FUKKsircA7%2BInoD68vouy%2B2okuOodwMfS6b9mruytq7hwY4mwvYla7UwfUnFNaDW0UGjt%2FmxuS%2Fq5xUShT1wjgQvm%2B6PkvlYgI6TQVx8EWhu4PvZ2ozGC83JgFLN3U0ZKcnER5WQ7zxp20tnvYZcSU8fo%2BP79sLzI5KlfxLw4whKdkb236xfbZEyG0mKATFwlnPRsIwY7R4Rzc47Yd4xw9YOytRtOfgGlZMI3z5f3R7cpkvI3%2BbyFZ%2FeencdZUDrOW3WA0wj6jVVWAdOG%2BXam%2BmU2fQSegTa585TJL3YbYv%2F7BqEBF29sGpw7OqtSo5h4th4x3sWzuVIcT2BxLmJFXyYJLjFSRYLadHSPjkVMAd9jLg63BTZJjnKA%2Bc38bLkaoMnfyOe%2F159EfNsWSxZiO8Kt99T4vbb7IFdIefswuUJg4Da5nrmaU5uu7vSZCEuAd5UpMn%2BrArAXbdK3EbRi7ychtAyzJcTyyrFlO5M%2BGJjih0TxuEt%2Bvk%2FXAmr4qIr4C4%2BwJOrSs3YPzGR9sfHgXb8X%2FyH70BRXZg5Vj%2BZBIGU26VwHrajH0Qlze2%2BVHgb0HnIUiLpbSHfcZ19JekXgmsTyqJ29pYkWEmmfxV7E7brv1hKmFzWVMNrQa9nvVXm%2FgLQMOLm2MIGOqUBT1a6tzQoaUirW4TFiyoNSc6ROSsOsl1Qs%2FHf3qSEEU984Q8jWWwSMGTuwQ2mbw8dLYwSvcUz%2BlxwKxYtMneURF0jHuaBSuK6gFuEnnx0rsIlh%2FjmwwRsgdVfKJI12rlywTqUEuxxUg2pBItCEnQhJCcFbPKCLYPX9acM%2BPc6jMPlZ5gQgO2w%2Bw26UZ5o6V%2B39a8%2Fa6KwAAKlWQgbFpW0EHLSgkgx&X-Amz-Signature=87fd191548807c94378f0fa1ce3b32ed6ebc623f2478d9412b68065330f0a240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSRYT2MB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXhqX1ercacXZyPttrEXMqnZFQi4slltkWDkokkwndnwIgQXKUCDzsqlW7b5loz%2BqXArjNGbuIg4qiUMMwtQb%2F%2BdEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4kswdub6rq%2FUKKsircA7%2BInoD68vouy%2B2okuOodwMfS6b9mruytq7hwY4mwvYla7UwfUnFNaDW0UGjt%2FmxuS%2Fq5xUShT1wjgQvm%2B6PkvlYgI6TQVx8EWhu4PvZ2ozGC83JgFLN3U0ZKcnER5WQ7zxp20tnvYZcSU8fo%2BP79sLzI5KlfxLw4whKdkb236xfbZEyG0mKATFwlnPRsIwY7R4Rzc47Yd4xw9YOytRtOfgGlZMI3z5f3R7cpkvI3%2BbyFZ%2FeencdZUDrOW3WA0wj6jVVWAdOG%2BXam%2BmU2fQSegTa585TJL3YbYv%2F7BqEBF29sGpw7OqtSo5h4th4x3sWzuVIcT2BxLmJFXyYJLjFSRYLadHSPjkVMAd9jLg63BTZJjnKA%2Bc38bLkaoMnfyOe%2F159EfNsWSxZiO8Kt99T4vbb7IFdIefswuUJg4Da5nrmaU5uu7vSZCEuAd5UpMn%2BrArAXbdK3EbRi7ychtAyzJcTyyrFlO5M%2BGJjih0TxuEt%2Bvk%2FXAmr4qIr4C4%2BwJOrSs3YPzGR9sfHgXb8X%2FyH70BRXZg5Vj%2BZBIGU26VwHrajH0Qlze2%2BVHgb0HnIUiLpbSHfcZ19JekXgmsTyqJ29pYkWEmmfxV7E7brv1hKmFzWVMNrQa9nvVXm%2FgLQMOLm2MIGOqUBT1a6tzQoaUirW4TFiyoNSc6ROSsOsl1Qs%2FHf3qSEEU984Q8jWWwSMGTuwQ2mbw8dLYwSvcUz%2BlxwKxYtMneURF0jHuaBSuK6gFuEnnx0rsIlh%2FjmwwRsgdVfKJI12rlywTqUEuxxUg2pBItCEnQhJCcFbPKCLYPX9acM%2BPc6jMPlZ5gQgO2w%2Bw26UZ5o6V%2B39a8%2Fa6KwAAKlWQgbFpW0EHLSgkgx&X-Amz-Signature=fd0c2f87ca21a74f8db84b6e3fb0b759a5b589c7e3c6ed93da77d991cd65f6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSRYT2MB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXhqX1ercacXZyPttrEXMqnZFQi4slltkWDkokkwndnwIgQXKUCDzsqlW7b5loz%2BqXArjNGbuIg4qiUMMwtQb%2F%2BdEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4kswdub6rq%2FUKKsircA7%2BInoD68vouy%2B2okuOodwMfS6b9mruytq7hwY4mwvYla7UwfUnFNaDW0UGjt%2FmxuS%2Fq5xUShT1wjgQvm%2B6PkvlYgI6TQVx8EWhu4PvZ2ozGC83JgFLN3U0ZKcnER5WQ7zxp20tnvYZcSU8fo%2BP79sLzI5KlfxLw4whKdkb236xfbZEyG0mKATFwlnPRsIwY7R4Rzc47Yd4xw9YOytRtOfgGlZMI3z5f3R7cpkvI3%2BbyFZ%2FeencdZUDrOW3WA0wj6jVVWAdOG%2BXam%2BmU2fQSegTa585TJL3YbYv%2F7BqEBF29sGpw7OqtSo5h4th4x3sWzuVIcT2BxLmJFXyYJLjFSRYLadHSPjkVMAd9jLg63BTZJjnKA%2Bc38bLkaoMnfyOe%2F159EfNsWSxZiO8Kt99T4vbb7IFdIefswuUJg4Da5nrmaU5uu7vSZCEuAd5UpMn%2BrArAXbdK3EbRi7ychtAyzJcTyyrFlO5M%2BGJjih0TxuEt%2Bvk%2FXAmr4qIr4C4%2BwJOrSs3YPzGR9sfHgXb8X%2FyH70BRXZg5Vj%2BZBIGU26VwHrajH0Qlze2%2BVHgb0HnIUiLpbSHfcZ19JekXgmsTyqJ29pYkWEmmfxV7E7brv1hKmFzWVMNrQa9nvVXm%2FgLQMOLm2MIGOqUBT1a6tzQoaUirW4TFiyoNSc6ROSsOsl1Qs%2FHf3qSEEU984Q8jWWwSMGTuwQ2mbw8dLYwSvcUz%2BlxwKxYtMneURF0jHuaBSuK6gFuEnnx0rsIlh%2FjmwwRsgdVfKJI12rlywTqUEuxxUg2pBItCEnQhJCcFbPKCLYPX9acM%2BPc6jMPlZ5gQgO2w%2Bw26UZ5o6V%2B39a8%2Fa6KwAAKlWQgbFpW0EHLSgkgx&X-Amz-Signature=ee4b16cce6575af2954d6a143993567869b7aecec7e7ad85d0bdeb3e0c6585ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSRYT2MB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXhqX1ercacXZyPttrEXMqnZFQi4slltkWDkokkwndnwIgQXKUCDzsqlW7b5loz%2BqXArjNGbuIg4qiUMMwtQb%2F%2BdEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4kswdub6rq%2FUKKsircA7%2BInoD68vouy%2B2okuOodwMfS6b9mruytq7hwY4mwvYla7UwfUnFNaDW0UGjt%2FmxuS%2Fq5xUShT1wjgQvm%2B6PkvlYgI6TQVx8EWhu4PvZ2ozGC83JgFLN3U0ZKcnER5WQ7zxp20tnvYZcSU8fo%2BP79sLzI5KlfxLw4whKdkb236xfbZEyG0mKATFwlnPRsIwY7R4Rzc47Yd4xw9YOytRtOfgGlZMI3z5f3R7cpkvI3%2BbyFZ%2FeencdZUDrOW3WA0wj6jVVWAdOG%2BXam%2BmU2fQSegTa585TJL3YbYv%2F7BqEBF29sGpw7OqtSo5h4th4x3sWzuVIcT2BxLmJFXyYJLjFSRYLadHSPjkVMAd9jLg63BTZJjnKA%2Bc38bLkaoMnfyOe%2F159EfNsWSxZiO8Kt99T4vbb7IFdIefswuUJg4Da5nrmaU5uu7vSZCEuAd5UpMn%2BrArAXbdK3EbRi7ychtAyzJcTyyrFlO5M%2BGJjih0TxuEt%2Bvk%2FXAmr4qIr4C4%2BwJOrSs3YPzGR9sfHgXb8X%2FyH70BRXZg5Vj%2BZBIGU26VwHrajH0Qlze2%2BVHgb0HnIUiLpbSHfcZ19JekXgmsTyqJ29pYkWEmmfxV7E7brv1hKmFzWVMNrQa9nvVXm%2FgLQMOLm2MIGOqUBT1a6tzQoaUirW4TFiyoNSc6ROSsOsl1Qs%2FHf3qSEEU984Q8jWWwSMGTuwQ2mbw8dLYwSvcUz%2BlxwKxYtMneURF0jHuaBSuK6gFuEnnx0rsIlh%2FjmwwRsgdVfKJI12rlywTqUEuxxUg2pBItCEnQhJCcFbPKCLYPX9acM%2BPc6jMPlZ5gQgO2w%2Bw26UZ5o6V%2B39a8%2Fa6KwAAKlWQgbFpW0EHLSgkgx&X-Amz-Signature=2645eab187ab6a64d19161e897e249cac76a8d76d97949e6b89b2d4a6faf47de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
