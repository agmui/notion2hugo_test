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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMR7XST%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDGk2PvJidOE%2FbJB0Bm0yRbYFcpHAWoXAVgwTYInzcFSAIgZd5LDcknZ1NYUmqe0FqI12Yr002L5qaQ0p05HlBWxT0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMXaFDoE4GCW3NmDJyrcAzvrYBKgprbFAky55VjGr7xq8b7aHBnLUU3BUiaO%2Fo0U%2BikFTNvY3Q0yZbgB739A%2BzWeNiKU5%2BgL7ry%2FGD74xVOKdd8T7vkyTiVU%2BpUsuGPjzvOBaN9eR%2B3N%2B1q16Q0Dfi%2BGnKd%2BnzUqfXzIkelYVjmu72JWKFlcVbyzoXvmFFuQe19qiD%2B4MKniLNBqWPYSKBaoLZMSfUPjbETySTmZf1LeAi%2FVmYWXOufR8bJ2yOJy%2BfdR4RvGeYMy9xrJPO0sX0EuMJXCaT0Kn3JrdD3ejBaoZaXeACODVQYD7VGrLsZBbkE4ctIZd5B5PF8j9GqWsiL4zOAypGDm8%2BhqwnHo1FTcON1fQ5kA8KrYWyUwaH4KsknoJJZJez2c0OtMB7HcdArk0KPZJAeXK5TzxLQbbx2C1CgpwJv0OJCT5tSbozNqpM9Pni3H%2B5QlRBAZxCTTHGXeIJPzRbG0f6GeLgrCyYxr7dmytcNozOddYNyBT1WhPqsRwKO7k6BAKVwBcfHhNjmb3Xkk1w02SN3tZWQSe8CQEZXjcdRanNph9KAtgGfLTguo%2BgBtn29KG2YCyj%2FM4yuIeigL6qZhyNWwa4f9IHxl9620tUZvxwtbtSD3QfG9l%2F23mcNj93%2FUbKFaMPXxpcMGOqUBmNNVh0tMAkMK%2BMB7grUutQdwKGDFioFx5C9qNmcS%2B%2FoSUdi%2BxVmfOiSoB5E9r6q6ONZH%2FbrDBzxbmOqoNeN87XOOFKOt4iVhLtF6uHXZsi%2FzfEDW5dG3A6jKbMxq2W3I8CflyiT4b4E49o6vBUHEWqoKxdvAL5QcN%2B%2FrLUU3Q3TORze05TEGKJR11GneYYFSpFLMagbaIMEU0sSfOshQ39FHJrjT&X-Amz-Signature=2a05f7e6b26001e739a37eedc4c705dc113ce20ce0de13e4162b39e31b8c6370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMR7XST%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDGk2PvJidOE%2FbJB0Bm0yRbYFcpHAWoXAVgwTYInzcFSAIgZd5LDcknZ1NYUmqe0FqI12Yr002L5qaQ0p05HlBWxT0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMXaFDoE4GCW3NmDJyrcAzvrYBKgprbFAky55VjGr7xq8b7aHBnLUU3BUiaO%2Fo0U%2BikFTNvY3Q0yZbgB739A%2BzWeNiKU5%2BgL7ry%2FGD74xVOKdd8T7vkyTiVU%2BpUsuGPjzvOBaN9eR%2B3N%2B1q16Q0Dfi%2BGnKd%2BnzUqfXzIkelYVjmu72JWKFlcVbyzoXvmFFuQe19qiD%2B4MKniLNBqWPYSKBaoLZMSfUPjbETySTmZf1LeAi%2FVmYWXOufR8bJ2yOJy%2BfdR4RvGeYMy9xrJPO0sX0EuMJXCaT0Kn3JrdD3ejBaoZaXeACODVQYD7VGrLsZBbkE4ctIZd5B5PF8j9GqWsiL4zOAypGDm8%2BhqwnHo1FTcON1fQ5kA8KrYWyUwaH4KsknoJJZJez2c0OtMB7HcdArk0KPZJAeXK5TzxLQbbx2C1CgpwJv0OJCT5tSbozNqpM9Pni3H%2B5QlRBAZxCTTHGXeIJPzRbG0f6GeLgrCyYxr7dmytcNozOddYNyBT1WhPqsRwKO7k6BAKVwBcfHhNjmb3Xkk1w02SN3tZWQSe8CQEZXjcdRanNph9KAtgGfLTguo%2BgBtn29KG2YCyj%2FM4yuIeigL6qZhyNWwa4f9IHxl9620tUZvxwtbtSD3QfG9l%2F23mcNj93%2FUbKFaMPXxpcMGOqUBmNNVh0tMAkMK%2BMB7grUutQdwKGDFioFx5C9qNmcS%2B%2FoSUdi%2BxVmfOiSoB5E9r6q6ONZH%2FbrDBzxbmOqoNeN87XOOFKOt4iVhLtF6uHXZsi%2FzfEDW5dG3A6jKbMxq2W3I8CflyiT4b4E49o6vBUHEWqoKxdvAL5QcN%2B%2FrLUU3Q3TORze05TEGKJR11GneYYFSpFLMagbaIMEU0sSfOshQ39FHJrjT&X-Amz-Signature=26ac429eaffc990d395bac144fc19638704d082393070a21b7f7f348a350bde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMR7XST%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDGk2PvJidOE%2FbJB0Bm0yRbYFcpHAWoXAVgwTYInzcFSAIgZd5LDcknZ1NYUmqe0FqI12Yr002L5qaQ0p05HlBWxT0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMXaFDoE4GCW3NmDJyrcAzvrYBKgprbFAky55VjGr7xq8b7aHBnLUU3BUiaO%2Fo0U%2BikFTNvY3Q0yZbgB739A%2BzWeNiKU5%2BgL7ry%2FGD74xVOKdd8T7vkyTiVU%2BpUsuGPjzvOBaN9eR%2B3N%2B1q16Q0Dfi%2BGnKd%2BnzUqfXzIkelYVjmu72JWKFlcVbyzoXvmFFuQe19qiD%2B4MKniLNBqWPYSKBaoLZMSfUPjbETySTmZf1LeAi%2FVmYWXOufR8bJ2yOJy%2BfdR4RvGeYMy9xrJPO0sX0EuMJXCaT0Kn3JrdD3ejBaoZaXeACODVQYD7VGrLsZBbkE4ctIZd5B5PF8j9GqWsiL4zOAypGDm8%2BhqwnHo1FTcON1fQ5kA8KrYWyUwaH4KsknoJJZJez2c0OtMB7HcdArk0KPZJAeXK5TzxLQbbx2C1CgpwJv0OJCT5tSbozNqpM9Pni3H%2B5QlRBAZxCTTHGXeIJPzRbG0f6GeLgrCyYxr7dmytcNozOddYNyBT1WhPqsRwKO7k6BAKVwBcfHhNjmb3Xkk1w02SN3tZWQSe8CQEZXjcdRanNph9KAtgGfLTguo%2BgBtn29KG2YCyj%2FM4yuIeigL6qZhyNWwa4f9IHxl9620tUZvxwtbtSD3QfG9l%2F23mcNj93%2FUbKFaMPXxpcMGOqUBmNNVh0tMAkMK%2BMB7grUutQdwKGDFioFx5C9qNmcS%2B%2FoSUdi%2BxVmfOiSoB5E9r6q6ONZH%2FbrDBzxbmOqoNeN87XOOFKOt4iVhLtF6uHXZsi%2FzfEDW5dG3A6jKbMxq2W3I8CflyiT4b4E49o6vBUHEWqoKxdvAL5QcN%2B%2FrLUU3Q3TORze05TEGKJR11GneYYFSpFLMagbaIMEU0sSfOshQ39FHJrjT&X-Amz-Signature=4529b7409a3a8648c0f9f1178af30bba4c593090f58acdc71c6f9bf435f8780f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMR7XST%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDGk2PvJidOE%2FbJB0Bm0yRbYFcpHAWoXAVgwTYInzcFSAIgZd5LDcknZ1NYUmqe0FqI12Yr002L5qaQ0p05HlBWxT0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMXaFDoE4GCW3NmDJyrcAzvrYBKgprbFAky55VjGr7xq8b7aHBnLUU3BUiaO%2Fo0U%2BikFTNvY3Q0yZbgB739A%2BzWeNiKU5%2BgL7ry%2FGD74xVOKdd8T7vkyTiVU%2BpUsuGPjzvOBaN9eR%2B3N%2B1q16Q0Dfi%2BGnKd%2BnzUqfXzIkelYVjmu72JWKFlcVbyzoXvmFFuQe19qiD%2B4MKniLNBqWPYSKBaoLZMSfUPjbETySTmZf1LeAi%2FVmYWXOufR8bJ2yOJy%2BfdR4RvGeYMy9xrJPO0sX0EuMJXCaT0Kn3JrdD3ejBaoZaXeACODVQYD7VGrLsZBbkE4ctIZd5B5PF8j9GqWsiL4zOAypGDm8%2BhqwnHo1FTcON1fQ5kA8KrYWyUwaH4KsknoJJZJez2c0OtMB7HcdArk0KPZJAeXK5TzxLQbbx2C1CgpwJv0OJCT5tSbozNqpM9Pni3H%2B5QlRBAZxCTTHGXeIJPzRbG0f6GeLgrCyYxr7dmytcNozOddYNyBT1WhPqsRwKO7k6BAKVwBcfHhNjmb3Xkk1w02SN3tZWQSe8CQEZXjcdRanNph9KAtgGfLTguo%2BgBtn29KG2YCyj%2FM4yuIeigL6qZhyNWwa4f9IHxl9620tUZvxwtbtSD3QfG9l%2F23mcNj93%2FUbKFaMPXxpcMGOqUBmNNVh0tMAkMK%2BMB7grUutQdwKGDFioFx5C9qNmcS%2B%2FoSUdi%2BxVmfOiSoB5E9r6q6ONZH%2FbrDBzxbmOqoNeN87XOOFKOt4iVhLtF6uHXZsi%2FzfEDW5dG3A6jKbMxq2W3I8CflyiT4b4E49o6vBUHEWqoKxdvAL5QcN%2B%2FrLUU3Q3TORze05TEGKJR11GneYYFSpFLMagbaIMEU0sSfOshQ39FHJrjT&X-Amz-Signature=cc080ee9ad470c00ac9ff16124078b09ffaef776576512371ec5b06fda29fde5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMR7XST%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDGk2PvJidOE%2FbJB0Bm0yRbYFcpHAWoXAVgwTYInzcFSAIgZd5LDcknZ1NYUmqe0FqI12Yr002L5qaQ0p05HlBWxT0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMXaFDoE4GCW3NmDJyrcAzvrYBKgprbFAky55VjGr7xq8b7aHBnLUU3BUiaO%2Fo0U%2BikFTNvY3Q0yZbgB739A%2BzWeNiKU5%2BgL7ry%2FGD74xVOKdd8T7vkyTiVU%2BpUsuGPjzvOBaN9eR%2B3N%2B1q16Q0Dfi%2BGnKd%2BnzUqfXzIkelYVjmu72JWKFlcVbyzoXvmFFuQe19qiD%2B4MKniLNBqWPYSKBaoLZMSfUPjbETySTmZf1LeAi%2FVmYWXOufR8bJ2yOJy%2BfdR4RvGeYMy9xrJPO0sX0EuMJXCaT0Kn3JrdD3ejBaoZaXeACODVQYD7VGrLsZBbkE4ctIZd5B5PF8j9GqWsiL4zOAypGDm8%2BhqwnHo1FTcON1fQ5kA8KrYWyUwaH4KsknoJJZJez2c0OtMB7HcdArk0KPZJAeXK5TzxLQbbx2C1CgpwJv0OJCT5tSbozNqpM9Pni3H%2B5QlRBAZxCTTHGXeIJPzRbG0f6GeLgrCyYxr7dmytcNozOddYNyBT1WhPqsRwKO7k6BAKVwBcfHhNjmb3Xkk1w02SN3tZWQSe8CQEZXjcdRanNph9KAtgGfLTguo%2BgBtn29KG2YCyj%2FM4yuIeigL6qZhyNWwa4f9IHxl9620tUZvxwtbtSD3QfG9l%2F23mcNj93%2FUbKFaMPXxpcMGOqUBmNNVh0tMAkMK%2BMB7grUutQdwKGDFioFx5C9qNmcS%2B%2FoSUdi%2BxVmfOiSoB5E9r6q6ONZH%2FbrDBzxbmOqoNeN87XOOFKOt4iVhLtF6uHXZsi%2FzfEDW5dG3A6jKbMxq2W3I8CflyiT4b4E49o6vBUHEWqoKxdvAL5QcN%2B%2FrLUU3Q3TORze05TEGKJR11GneYYFSpFLMagbaIMEU0sSfOshQ39FHJrjT&X-Amz-Signature=e0541b5d7b07815ce5da9d7e6cf50259dde63611e2ce85a16644cf37d13af8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMR7XST%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDGk2PvJidOE%2FbJB0Bm0yRbYFcpHAWoXAVgwTYInzcFSAIgZd5LDcknZ1NYUmqe0FqI12Yr002L5qaQ0p05HlBWxT0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMXaFDoE4GCW3NmDJyrcAzvrYBKgprbFAky55VjGr7xq8b7aHBnLUU3BUiaO%2Fo0U%2BikFTNvY3Q0yZbgB739A%2BzWeNiKU5%2BgL7ry%2FGD74xVOKdd8T7vkyTiVU%2BpUsuGPjzvOBaN9eR%2B3N%2B1q16Q0Dfi%2BGnKd%2BnzUqfXzIkelYVjmu72JWKFlcVbyzoXvmFFuQe19qiD%2B4MKniLNBqWPYSKBaoLZMSfUPjbETySTmZf1LeAi%2FVmYWXOufR8bJ2yOJy%2BfdR4RvGeYMy9xrJPO0sX0EuMJXCaT0Kn3JrdD3ejBaoZaXeACODVQYD7VGrLsZBbkE4ctIZd5B5PF8j9GqWsiL4zOAypGDm8%2BhqwnHo1FTcON1fQ5kA8KrYWyUwaH4KsknoJJZJez2c0OtMB7HcdArk0KPZJAeXK5TzxLQbbx2C1CgpwJv0OJCT5tSbozNqpM9Pni3H%2B5QlRBAZxCTTHGXeIJPzRbG0f6GeLgrCyYxr7dmytcNozOddYNyBT1WhPqsRwKO7k6BAKVwBcfHhNjmb3Xkk1w02SN3tZWQSe8CQEZXjcdRanNph9KAtgGfLTguo%2BgBtn29KG2YCyj%2FM4yuIeigL6qZhyNWwa4f9IHxl9620tUZvxwtbtSD3QfG9l%2F23mcNj93%2FUbKFaMPXxpcMGOqUBmNNVh0tMAkMK%2BMB7grUutQdwKGDFioFx5C9qNmcS%2B%2FoSUdi%2BxVmfOiSoB5E9r6q6ONZH%2FbrDBzxbmOqoNeN87XOOFKOt4iVhLtF6uHXZsi%2FzfEDW5dG3A6jKbMxq2W3I8CflyiT4b4E49o6vBUHEWqoKxdvAL5QcN%2B%2FrLUU3Q3TORze05TEGKJR11GneYYFSpFLMagbaIMEU0sSfOshQ39FHJrjT&X-Amz-Signature=0b58047b49cc9ff840d490ef6dccd6a14ac6b83f5bd69a98e36a9c3bf04a266e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
