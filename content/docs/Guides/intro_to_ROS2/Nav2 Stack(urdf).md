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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DFQ45K%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjYzoPvsrDN4ar2Kn4HqKnZYOI128HveoOkN35kjGPkAiA3H51Ad7r0Pa8%2Fmywl4QzQaYl1cmT0aiBED9fCKTq6%2FyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3iJU8Ty4zBmUrlcKtwDu5NUpvUQYz5vqSlj7NkaRvQOFhgNaN0nHqtZMhFA1XiN2RGKkkUNU2nizDePYixS8tWfK%2Bfkmmj8b%2BMFrvYsZf%2FXRoCqpDYX3fUexeYUG%2Be%2BFDfuLIpBdC61RvLmNXrn1KER3mIU5Odx6w25JnkH%2B84Ip6z%2BSvptSsQbSQRb5blHKTD2nnyKYYA5C3jf5wI%2FtTuo5h3zWYbjOtgm8LJscfM8bZ2FAE1eEGG2FtXUt6iqyGrz20uTN%2BLuZOeqYvFXM6c4LkeLO1ukkW4BhOmDugXyanpTNIh9Yma%2BkHO0v7F3nS2N2Oj0pS%2B8XaOLTD7n8JQz3AW%2F0LW3FzZGR22xd%2F7ZPqkPGzojLzmm5TXrbM1m5n9NMlPh24jfhaN7vNhl1hNFAHAP56A7XZB6RoVSIC4GKp7iz%2Fo9%2Bhp%2FqfpZLkGa%2FwSpAiEps%2FQc%2F7EozBT85Gpyn4qFxH%2BqHunsWeTS%2F0jzC1CGol5jjYPq34gJ6MEL%2F5D2odHcx91AM%2BRVqECVJ2SfhzDIQejli4UXoI3F5cOZ0zIRWsJSuRT7k9nMcm1s80Z8t9RoRX0ck7BwMiGgXMEpp5iQmJH4TMAlxm%2FDw4aZC7Ek5l6lmWGg1tkLidilzRyLL6y3LQfraBMw%2B8itwQY6pgH%2FU3zHirfQpVIuvpPi8QYWJUJEkTjkZMyDpK5VzwgAfI2fjtg7t77Y2VeGrfa9pVzTj0umD0GHhWP9TDD6xZMR0wgym1jwmAfbEazEJZDQ0DyEk6uBGGygmn%2FEvnG%2Bc2L8QCaRgEhiweKwkpxrEuXaI%2BdFOlbnc8PfnR1ci64qdrlAX49seO17Lcotz8zcnp6MSEFIId6sGv8Yy5i9CfNiZWu32RtJ&X-Amz-Signature=e6f3707fae685d2dd4de6404382a5220af2b2239910d87aea12477ca22cbe00f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DFQ45K%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjYzoPvsrDN4ar2Kn4HqKnZYOI128HveoOkN35kjGPkAiA3H51Ad7r0Pa8%2Fmywl4QzQaYl1cmT0aiBED9fCKTq6%2FyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3iJU8Ty4zBmUrlcKtwDu5NUpvUQYz5vqSlj7NkaRvQOFhgNaN0nHqtZMhFA1XiN2RGKkkUNU2nizDePYixS8tWfK%2Bfkmmj8b%2BMFrvYsZf%2FXRoCqpDYX3fUexeYUG%2Be%2BFDfuLIpBdC61RvLmNXrn1KER3mIU5Odx6w25JnkH%2B84Ip6z%2BSvptSsQbSQRb5blHKTD2nnyKYYA5C3jf5wI%2FtTuo5h3zWYbjOtgm8LJscfM8bZ2FAE1eEGG2FtXUt6iqyGrz20uTN%2BLuZOeqYvFXM6c4LkeLO1ukkW4BhOmDugXyanpTNIh9Yma%2BkHO0v7F3nS2N2Oj0pS%2B8XaOLTD7n8JQz3AW%2F0LW3FzZGR22xd%2F7ZPqkPGzojLzmm5TXrbM1m5n9NMlPh24jfhaN7vNhl1hNFAHAP56A7XZB6RoVSIC4GKp7iz%2Fo9%2Bhp%2FqfpZLkGa%2FwSpAiEps%2FQc%2F7EozBT85Gpyn4qFxH%2BqHunsWeTS%2F0jzC1CGol5jjYPq34gJ6MEL%2F5D2odHcx91AM%2BRVqECVJ2SfhzDIQejli4UXoI3F5cOZ0zIRWsJSuRT7k9nMcm1s80Z8t9RoRX0ck7BwMiGgXMEpp5iQmJH4TMAlxm%2FDw4aZC7Ek5l6lmWGg1tkLidilzRyLL6y3LQfraBMw%2B8itwQY6pgH%2FU3zHirfQpVIuvpPi8QYWJUJEkTjkZMyDpK5VzwgAfI2fjtg7t77Y2VeGrfa9pVzTj0umD0GHhWP9TDD6xZMR0wgym1jwmAfbEazEJZDQ0DyEk6uBGGygmn%2FEvnG%2Bc2L8QCaRgEhiweKwkpxrEuXaI%2BdFOlbnc8PfnR1ci64qdrlAX49seO17Lcotz8zcnp6MSEFIId6sGv8Yy5i9CfNiZWu32RtJ&X-Amz-Signature=0ff6bd120220af43046a0db181d8262c44adcdb7f0ba97491efd0a6e53bf13ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DFQ45K%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjYzoPvsrDN4ar2Kn4HqKnZYOI128HveoOkN35kjGPkAiA3H51Ad7r0Pa8%2Fmywl4QzQaYl1cmT0aiBED9fCKTq6%2FyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3iJU8Ty4zBmUrlcKtwDu5NUpvUQYz5vqSlj7NkaRvQOFhgNaN0nHqtZMhFA1XiN2RGKkkUNU2nizDePYixS8tWfK%2Bfkmmj8b%2BMFrvYsZf%2FXRoCqpDYX3fUexeYUG%2Be%2BFDfuLIpBdC61RvLmNXrn1KER3mIU5Odx6w25JnkH%2B84Ip6z%2BSvptSsQbSQRb5blHKTD2nnyKYYA5C3jf5wI%2FtTuo5h3zWYbjOtgm8LJscfM8bZ2FAE1eEGG2FtXUt6iqyGrz20uTN%2BLuZOeqYvFXM6c4LkeLO1ukkW4BhOmDugXyanpTNIh9Yma%2BkHO0v7F3nS2N2Oj0pS%2B8XaOLTD7n8JQz3AW%2F0LW3FzZGR22xd%2F7ZPqkPGzojLzmm5TXrbM1m5n9NMlPh24jfhaN7vNhl1hNFAHAP56A7XZB6RoVSIC4GKp7iz%2Fo9%2Bhp%2FqfpZLkGa%2FwSpAiEps%2FQc%2F7EozBT85Gpyn4qFxH%2BqHunsWeTS%2F0jzC1CGol5jjYPq34gJ6MEL%2F5D2odHcx91AM%2BRVqECVJ2SfhzDIQejli4UXoI3F5cOZ0zIRWsJSuRT7k9nMcm1s80Z8t9RoRX0ck7BwMiGgXMEpp5iQmJH4TMAlxm%2FDw4aZC7Ek5l6lmWGg1tkLidilzRyLL6y3LQfraBMw%2B8itwQY6pgH%2FU3zHirfQpVIuvpPi8QYWJUJEkTjkZMyDpK5VzwgAfI2fjtg7t77Y2VeGrfa9pVzTj0umD0GHhWP9TDD6xZMR0wgym1jwmAfbEazEJZDQ0DyEk6uBGGygmn%2FEvnG%2Bc2L8QCaRgEhiweKwkpxrEuXaI%2BdFOlbnc8PfnR1ci64qdrlAX49seO17Lcotz8zcnp6MSEFIId6sGv8Yy5i9CfNiZWu32RtJ&X-Amz-Signature=88a7f15fd5606c11303e200ab5662e3c33d818eaa4d9ed999b8a12053bb5d3e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DFQ45K%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjYzoPvsrDN4ar2Kn4HqKnZYOI128HveoOkN35kjGPkAiA3H51Ad7r0Pa8%2Fmywl4QzQaYl1cmT0aiBED9fCKTq6%2FyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3iJU8Ty4zBmUrlcKtwDu5NUpvUQYz5vqSlj7NkaRvQOFhgNaN0nHqtZMhFA1XiN2RGKkkUNU2nizDePYixS8tWfK%2Bfkmmj8b%2BMFrvYsZf%2FXRoCqpDYX3fUexeYUG%2Be%2BFDfuLIpBdC61RvLmNXrn1KER3mIU5Odx6w25JnkH%2B84Ip6z%2BSvptSsQbSQRb5blHKTD2nnyKYYA5C3jf5wI%2FtTuo5h3zWYbjOtgm8LJscfM8bZ2FAE1eEGG2FtXUt6iqyGrz20uTN%2BLuZOeqYvFXM6c4LkeLO1ukkW4BhOmDugXyanpTNIh9Yma%2BkHO0v7F3nS2N2Oj0pS%2B8XaOLTD7n8JQz3AW%2F0LW3FzZGR22xd%2F7ZPqkPGzojLzmm5TXrbM1m5n9NMlPh24jfhaN7vNhl1hNFAHAP56A7XZB6RoVSIC4GKp7iz%2Fo9%2Bhp%2FqfpZLkGa%2FwSpAiEps%2FQc%2F7EozBT85Gpyn4qFxH%2BqHunsWeTS%2F0jzC1CGol5jjYPq34gJ6MEL%2F5D2odHcx91AM%2BRVqECVJ2SfhzDIQejli4UXoI3F5cOZ0zIRWsJSuRT7k9nMcm1s80Z8t9RoRX0ck7BwMiGgXMEpp5iQmJH4TMAlxm%2FDw4aZC7Ek5l6lmWGg1tkLidilzRyLL6y3LQfraBMw%2B8itwQY6pgH%2FU3zHirfQpVIuvpPi8QYWJUJEkTjkZMyDpK5VzwgAfI2fjtg7t77Y2VeGrfa9pVzTj0umD0GHhWP9TDD6xZMR0wgym1jwmAfbEazEJZDQ0DyEk6uBGGygmn%2FEvnG%2Bc2L8QCaRgEhiweKwkpxrEuXaI%2BdFOlbnc8PfnR1ci64qdrlAX49seO17Lcotz8zcnp6MSEFIId6sGv8Yy5i9CfNiZWu32RtJ&X-Amz-Signature=26742596a08496dbe3887ccbe57a3b33da85a094007eedc65d46a6852efe7fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DFQ45K%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjYzoPvsrDN4ar2Kn4HqKnZYOI128HveoOkN35kjGPkAiA3H51Ad7r0Pa8%2Fmywl4QzQaYl1cmT0aiBED9fCKTq6%2FyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3iJU8Ty4zBmUrlcKtwDu5NUpvUQYz5vqSlj7NkaRvQOFhgNaN0nHqtZMhFA1XiN2RGKkkUNU2nizDePYixS8tWfK%2Bfkmmj8b%2BMFrvYsZf%2FXRoCqpDYX3fUexeYUG%2Be%2BFDfuLIpBdC61RvLmNXrn1KER3mIU5Odx6w25JnkH%2B84Ip6z%2BSvptSsQbSQRb5blHKTD2nnyKYYA5C3jf5wI%2FtTuo5h3zWYbjOtgm8LJscfM8bZ2FAE1eEGG2FtXUt6iqyGrz20uTN%2BLuZOeqYvFXM6c4LkeLO1ukkW4BhOmDugXyanpTNIh9Yma%2BkHO0v7F3nS2N2Oj0pS%2B8XaOLTD7n8JQz3AW%2F0LW3FzZGR22xd%2F7ZPqkPGzojLzmm5TXrbM1m5n9NMlPh24jfhaN7vNhl1hNFAHAP56A7XZB6RoVSIC4GKp7iz%2Fo9%2Bhp%2FqfpZLkGa%2FwSpAiEps%2FQc%2F7EozBT85Gpyn4qFxH%2BqHunsWeTS%2F0jzC1CGol5jjYPq34gJ6MEL%2F5D2odHcx91AM%2BRVqECVJ2SfhzDIQejli4UXoI3F5cOZ0zIRWsJSuRT7k9nMcm1s80Z8t9RoRX0ck7BwMiGgXMEpp5iQmJH4TMAlxm%2FDw4aZC7Ek5l6lmWGg1tkLidilzRyLL6y3LQfraBMw%2B8itwQY6pgH%2FU3zHirfQpVIuvpPi8QYWJUJEkTjkZMyDpK5VzwgAfI2fjtg7t77Y2VeGrfa9pVzTj0umD0GHhWP9TDD6xZMR0wgym1jwmAfbEazEJZDQ0DyEk6uBGGygmn%2FEvnG%2Bc2L8QCaRgEhiweKwkpxrEuXaI%2BdFOlbnc8PfnR1ci64qdrlAX49seO17Lcotz8zcnp6MSEFIId6sGv8Yy5i9CfNiZWu32RtJ&X-Amz-Signature=f405669c446709d80ccd46d67e826a887a5c48812dd30f0e79405e3168a7231f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DFQ45K%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjYzoPvsrDN4ar2Kn4HqKnZYOI128HveoOkN35kjGPkAiA3H51Ad7r0Pa8%2Fmywl4QzQaYl1cmT0aiBED9fCKTq6%2FyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3iJU8Ty4zBmUrlcKtwDu5NUpvUQYz5vqSlj7NkaRvQOFhgNaN0nHqtZMhFA1XiN2RGKkkUNU2nizDePYixS8tWfK%2Bfkmmj8b%2BMFrvYsZf%2FXRoCqpDYX3fUexeYUG%2Be%2BFDfuLIpBdC61RvLmNXrn1KER3mIU5Odx6w25JnkH%2B84Ip6z%2BSvptSsQbSQRb5blHKTD2nnyKYYA5C3jf5wI%2FtTuo5h3zWYbjOtgm8LJscfM8bZ2FAE1eEGG2FtXUt6iqyGrz20uTN%2BLuZOeqYvFXM6c4LkeLO1ukkW4BhOmDugXyanpTNIh9Yma%2BkHO0v7F3nS2N2Oj0pS%2B8XaOLTD7n8JQz3AW%2F0LW3FzZGR22xd%2F7ZPqkPGzojLzmm5TXrbM1m5n9NMlPh24jfhaN7vNhl1hNFAHAP56A7XZB6RoVSIC4GKp7iz%2Fo9%2Bhp%2FqfpZLkGa%2FwSpAiEps%2FQc%2F7EozBT85Gpyn4qFxH%2BqHunsWeTS%2F0jzC1CGol5jjYPq34gJ6MEL%2F5D2odHcx91AM%2BRVqECVJ2SfhzDIQejli4UXoI3F5cOZ0zIRWsJSuRT7k9nMcm1s80Z8t9RoRX0ck7BwMiGgXMEpp5iQmJH4TMAlxm%2FDw4aZC7Ek5l6lmWGg1tkLidilzRyLL6y3LQfraBMw%2B8itwQY6pgH%2FU3zHirfQpVIuvpPi8QYWJUJEkTjkZMyDpK5VzwgAfI2fjtg7t77Y2VeGrfa9pVzTj0umD0GHhWP9TDD6xZMR0wgym1jwmAfbEazEJZDQ0DyEk6uBGGygmn%2FEvnG%2Bc2L8QCaRgEhiweKwkpxrEuXaI%2BdFOlbnc8PfnR1ci64qdrlAX49seO17Lcotz8zcnp6MSEFIId6sGv8Yy5i9CfNiZWu32RtJ&X-Amz-Signature=0f3b8bda87967a879451206b982d42f7fc5805df5a5ce2379885316afee57b80&X-Amz-SignedHeaders=host&x-id=GetObject)
