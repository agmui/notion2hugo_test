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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3I23SZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBfKzq8JZGgWgLezYmf0mzaX6jQ%2Fn%2BWjYPlBMdu3%2BrqAAiEAs6hUJopYv2kWSBhvhzFYVHJBQ%2FoI%2FCL62p5AdG1mEXMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK8VVNFUf9CQF6zrCrcA2RADEX%2FUXqw8aF7S2o8t5%2BuiEYIC5VAK1%2BAKhlSKlkhOXTU7CA56mNIqHIHQNypqz6aiuH4U6iA4goD%2B3u%2Bl8wOP%2BJpzdBDAyp24o7qleNe27V1crQyIbDtBfaF6S3PvGQKpi%2FsuLAWOxDXjF%2FeS1Ota0Y2%2BF1BqaXe51kPs9xxFrDBJBaRPYYHTaRmAB4nEE%2FB2vBcMMHEkNumadbUHDDZnDwkmCgTYuUG6NPe7Fp87BFdNeD8Dp%2BnTu7y5LdLG1FlfAO4AkEwHfQ%2BuYpEGLbCl1JaU5W74bkeNnOOxLpkKGGXZw2pOzUKUGPaKVzhC88vX5jC%2F7gzFSk6Hr03aaMrChSvVonM3Fe6BoGLKmLkaEHStrmAFVV%2Bte8xKOzZtW6Xjd6NnL8z5YkM0w0snsHonOCaQkExu0OhBCAoaBhkDIROKVWkgHkgh5mIOBhIr%2B2Tn%2BvIAdg2SH4iQCAB7K5VQ1n41wZIaIFghRd0T3mWJoUXwe60pesQJQDChN%2Fkg%2FDLvx%2BtHkmJ%2BHfz4R%2FV44Nedlh%2F9qpLwYcEE5EF%2FoPmVw33tstGg2PnAN3omi%2BRpXs0M%2F6nOOW1nVFuvEQtycIjUSqiz7yKE24cvoEei4Nb07H83J4KiFHZ2B0hMP2MjcEGOqUBl8QByfGPhl0h7Ic2ofhZ0S27iiqYqgmYQsWpDAPLaA0%2FDfQxq4CKCYgmprKQEdLDEZgsdIZWQzVyCwRFgtGmtvHB6O%2BQt4vjEkEg%2Fm%2BtlfBBWrtp1ut%2FBbdcZ4no1gMMoDH5ZDyl%2FhBsReMTqIeU3UMSzGu8alimMfx5fF8%2BDKrLjGl2qmX7NvX24RCQviFqO%2FA3wn%2BmBUxIAt%2FVCdMVyi15pu4S&X-Amz-Signature=d6d96f6ec7cdf8ca9763762873eef3c0254787cd531c6d6daaec6e06c866ad94&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3I23SZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBfKzq8JZGgWgLezYmf0mzaX6jQ%2Fn%2BWjYPlBMdu3%2BrqAAiEAs6hUJopYv2kWSBhvhzFYVHJBQ%2FoI%2FCL62p5AdG1mEXMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK8VVNFUf9CQF6zrCrcA2RADEX%2FUXqw8aF7S2o8t5%2BuiEYIC5VAK1%2BAKhlSKlkhOXTU7CA56mNIqHIHQNypqz6aiuH4U6iA4goD%2B3u%2Bl8wOP%2BJpzdBDAyp24o7qleNe27V1crQyIbDtBfaF6S3PvGQKpi%2FsuLAWOxDXjF%2FeS1Ota0Y2%2BF1BqaXe51kPs9xxFrDBJBaRPYYHTaRmAB4nEE%2FB2vBcMMHEkNumadbUHDDZnDwkmCgTYuUG6NPe7Fp87BFdNeD8Dp%2BnTu7y5LdLG1FlfAO4AkEwHfQ%2BuYpEGLbCl1JaU5W74bkeNnOOxLpkKGGXZw2pOzUKUGPaKVzhC88vX5jC%2F7gzFSk6Hr03aaMrChSvVonM3Fe6BoGLKmLkaEHStrmAFVV%2Bte8xKOzZtW6Xjd6NnL8z5YkM0w0snsHonOCaQkExu0OhBCAoaBhkDIROKVWkgHkgh5mIOBhIr%2B2Tn%2BvIAdg2SH4iQCAB7K5VQ1n41wZIaIFghRd0T3mWJoUXwe60pesQJQDChN%2Fkg%2FDLvx%2BtHkmJ%2BHfz4R%2FV44Nedlh%2F9qpLwYcEE5EF%2FoPmVw33tstGg2PnAN3omi%2BRpXs0M%2F6nOOW1nVFuvEQtycIjUSqiz7yKE24cvoEei4Nb07H83J4KiFHZ2B0hMP2MjcEGOqUBl8QByfGPhl0h7Ic2ofhZ0S27iiqYqgmYQsWpDAPLaA0%2FDfQxq4CKCYgmprKQEdLDEZgsdIZWQzVyCwRFgtGmtvHB6O%2BQt4vjEkEg%2Fm%2BtlfBBWrtp1ut%2FBbdcZ4no1gMMoDH5ZDyl%2FhBsReMTqIeU3UMSzGu8alimMfx5fF8%2BDKrLjGl2qmX7NvX24RCQviFqO%2FA3wn%2BmBUxIAt%2FVCdMVyi15pu4S&X-Amz-Signature=6ba943b0eb2a11852e1bc2bf9f3a85bd631546d049f0a6cfb25ac480bd44a164&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3I23SZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBfKzq8JZGgWgLezYmf0mzaX6jQ%2Fn%2BWjYPlBMdu3%2BrqAAiEAs6hUJopYv2kWSBhvhzFYVHJBQ%2FoI%2FCL62p5AdG1mEXMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK8VVNFUf9CQF6zrCrcA2RADEX%2FUXqw8aF7S2o8t5%2BuiEYIC5VAK1%2BAKhlSKlkhOXTU7CA56mNIqHIHQNypqz6aiuH4U6iA4goD%2B3u%2Bl8wOP%2BJpzdBDAyp24o7qleNe27V1crQyIbDtBfaF6S3PvGQKpi%2FsuLAWOxDXjF%2FeS1Ota0Y2%2BF1BqaXe51kPs9xxFrDBJBaRPYYHTaRmAB4nEE%2FB2vBcMMHEkNumadbUHDDZnDwkmCgTYuUG6NPe7Fp87BFdNeD8Dp%2BnTu7y5LdLG1FlfAO4AkEwHfQ%2BuYpEGLbCl1JaU5W74bkeNnOOxLpkKGGXZw2pOzUKUGPaKVzhC88vX5jC%2F7gzFSk6Hr03aaMrChSvVonM3Fe6BoGLKmLkaEHStrmAFVV%2Bte8xKOzZtW6Xjd6NnL8z5YkM0w0snsHonOCaQkExu0OhBCAoaBhkDIROKVWkgHkgh5mIOBhIr%2B2Tn%2BvIAdg2SH4iQCAB7K5VQ1n41wZIaIFghRd0T3mWJoUXwe60pesQJQDChN%2Fkg%2FDLvx%2BtHkmJ%2BHfz4R%2FV44Nedlh%2F9qpLwYcEE5EF%2FoPmVw33tstGg2PnAN3omi%2BRpXs0M%2F6nOOW1nVFuvEQtycIjUSqiz7yKE24cvoEei4Nb07H83J4KiFHZ2B0hMP2MjcEGOqUBl8QByfGPhl0h7Ic2ofhZ0S27iiqYqgmYQsWpDAPLaA0%2FDfQxq4CKCYgmprKQEdLDEZgsdIZWQzVyCwRFgtGmtvHB6O%2BQt4vjEkEg%2Fm%2BtlfBBWrtp1ut%2FBbdcZ4no1gMMoDH5ZDyl%2FhBsReMTqIeU3UMSzGu8alimMfx5fF8%2BDKrLjGl2qmX7NvX24RCQviFqO%2FA3wn%2BmBUxIAt%2FVCdMVyi15pu4S&X-Amz-Signature=98897698c69faa345df69fa76e74d00c74c802fadb31f66e31dc191ad3830bca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3I23SZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBfKzq8JZGgWgLezYmf0mzaX6jQ%2Fn%2BWjYPlBMdu3%2BrqAAiEAs6hUJopYv2kWSBhvhzFYVHJBQ%2FoI%2FCL62p5AdG1mEXMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK8VVNFUf9CQF6zrCrcA2RADEX%2FUXqw8aF7S2o8t5%2BuiEYIC5VAK1%2BAKhlSKlkhOXTU7CA56mNIqHIHQNypqz6aiuH4U6iA4goD%2B3u%2Bl8wOP%2BJpzdBDAyp24o7qleNe27V1crQyIbDtBfaF6S3PvGQKpi%2FsuLAWOxDXjF%2FeS1Ota0Y2%2BF1BqaXe51kPs9xxFrDBJBaRPYYHTaRmAB4nEE%2FB2vBcMMHEkNumadbUHDDZnDwkmCgTYuUG6NPe7Fp87BFdNeD8Dp%2BnTu7y5LdLG1FlfAO4AkEwHfQ%2BuYpEGLbCl1JaU5W74bkeNnOOxLpkKGGXZw2pOzUKUGPaKVzhC88vX5jC%2F7gzFSk6Hr03aaMrChSvVonM3Fe6BoGLKmLkaEHStrmAFVV%2Bte8xKOzZtW6Xjd6NnL8z5YkM0w0snsHonOCaQkExu0OhBCAoaBhkDIROKVWkgHkgh5mIOBhIr%2B2Tn%2BvIAdg2SH4iQCAB7K5VQ1n41wZIaIFghRd0T3mWJoUXwe60pesQJQDChN%2Fkg%2FDLvx%2BtHkmJ%2BHfz4R%2FV44Nedlh%2F9qpLwYcEE5EF%2FoPmVw33tstGg2PnAN3omi%2BRpXs0M%2F6nOOW1nVFuvEQtycIjUSqiz7yKE24cvoEei4Nb07H83J4KiFHZ2B0hMP2MjcEGOqUBl8QByfGPhl0h7Ic2ofhZ0S27iiqYqgmYQsWpDAPLaA0%2FDfQxq4CKCYgmprKQEdLDEZgsdIZWQzVyCwRFgtGmtvHB6O%2BQt4vjEkEg%2Fm%2BtlfBBWrtp1ut%2FBbdcZ4no1gMMoDH5ZDyl%2FhBsReMTqIeU3UMSzGu8alimMfx5fF8%2BDKrLjGl2qmX7NvX24RCQviFqO%2FA3wn%2BmBUxIAt%2FVCdMVyi15pu4S&X-Amz-Signature=896df328ace12ffab8ec866ec0d25e2cff87da5b26d81581744bbef029832f98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3I23SZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBfKzq8JZGgWgLezYmf0mzaX6jQ%2Fn%2BWjYPlBMdu3%2BrqAAiEAs6hUJopYv2kWSBhvhzFYVHJBQ%2FoI%2FCL62p5AdG1mEXMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK8VVNFUf9CQF6zrCrcA2RADEX%2FUXqw8aF7S2o8t5%2BuiEYIC5VAK1%2BAKhlSKlkhOXTU7CA56mNIqHIHQNypqz6aiuH4U6iA4goD%2B3u%2Bl8wOP%2BJpzdBDAyp24o7qleNe27V1crQyIbDtBfaF6S3PvGQKpi%2FsuLAWOxDXjF%2FeS1Ota0Y2%2BF1BqaXe51kPs9xxFrDBJBaRPYYHTaRmAB4nEE%2FB2vBcMMHEkNumadbUHDDZnDwkmCgTYuUG6NPe7Fp87BFdNeD8Dp%2BnTu7y5LdLG1FlfAO4AkEwHfQ%2BuYpEGLbCl1JaU5W74bkeNnOOxLpkKGGXZw2pOzUKUGPaKVzhC88vX5jC%2F7gzFSk6Hr03aaMrChSvVonM3Fe6BoGLKmLkaEHStrmAFVV%2Bte8xKOzZtW6Xjd6NnL8z5YkM0w0snsHonOCaQkExu0OhBCAoaBhkDIROKVWkgHkgh5mIOBhIr%2B2Tn%2BvIAdg2SH4iQCAB7K5VQ1n41wZIaIFghRd0T3mWJoUXwe60pesQJQDChN%2Fkg%2FDLvx%2BtHkmJ%2BHfz4R%2FV44Nedlh%2F9qpLwYcEE5EF%2FoPmVw33tstGg2PnAN3omi%2BRpXs0M%2F6nOOW1nVFuvEQtycIjUSqiz7yKE24cvoEei4Nb07H83J4KiFHZ2B0hMP2MjcEGOqUBl8QByfGPhl0h7Ic2ofhZ0S27iiqYqgmYQsWpDAPLaA0%2FDfQxq4CKCYgmprKQEdLDEZgsdIZWQzVyCwRFgtGmtvHB6O%2BQt4vjEkEg%2Fm%2BtlfBBWrtp1ut%2FBbdcZ4no1gMMoDH5ZDyl%2FhBsReMTqIeU3UMSzGu8alimMfx5fF8%2BDKrLjGl2qmX7NvX24RCQviFqO%2FA3wn%2BmBUxIAt%2FVCdMVyi15pu4S&X-Amz-Signature=0670cf9723ebd24d11d532cfcdcc8096c2e87aacdf23ebe1e07f5e9058d76db9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P3I23SZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBfKzq8JZGgWgLezYmf0mzaX6jQ%2Fn%2BWjYPlBMdu3%2BrqAAiEAs6hUJopYv2kWSBhvhzFYVHJBQ%2FoI%2FCL62p5AdG1mEXMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK8VVNFUf9CQF6zrCrcA2RADEX%2FUXqw8aF7S2o8t5%2BuiEYIC5VAK1%2BAKhlSKlkhOXTU7CA56mNIqHIHQNypqz6aiuH4U6iA4goD%2B3u%2Bl8wOP%2BJpzdBDAyp24o7qleNe27V1crQyIbDtBfaF6S3PvGQKpi%2FsuLAWOxDXjF%2FeS1Ota0Y2%2BF1BqaXe51kPs9xxFrDBJBaRPYYHTaRmAB4nEE%2FB2vBcMMHEkNumadbUHDDZnDwkmCgTYuUG6NPe7Fp87BFdNeD8Dp%2BnTu7y5LdLG1FlfAO4AkEwHfQ%2BuYpEGLbCl1JaU5W74bkeNnOOxLpkKGGXZw2pOzUKUGPaKVzhC88vX5jC%2F7gzFSk6Hr03aaMrChSvVonM3Fe6BoGLKmLkaEHStrmAFVV%2Bte8xKOzZtW6Xjd6NnL8z5YkM0w0snsHonOCaQkExu0OhBCAoaBhkDIROKVWkgHkgh5mIOBhIr%2B2Tn%2BvIAdg2SH4iQCAB7K5VQ1n41wZIaIFghRd0T3mWJoUXwe60pesQJQDChN%2Fkg%2FDLvx%2BtHkmJ%2BHfz4R%2FV44Nedlh%2F9qpLwYcEE5EF%2FoPmVw33tstGg2PnAN3omi%2BRpXs0M%2F6nOOW1nVFuvEQtycIjUSqiz7yKE24cvoEei4Nb07H83J4KiFHZ2B0hMP2MjcEGOqUBl8QByfGPhl0h7Ic2ofhZ0S27iiqYqgmYQsWpDAPLaA0%2FDfQxq4CKCYgmprKQEdLDEZgsdIZWQzVyCwRFgtGmtvHB6O%2BQt4vjEkEg%2Fm%2BtlfBBWrtp1ut%2FBbdcZ4no1gMMoDH5ZDyl%2FhBsReMTqIeU3UMSzGu8alimMfx5fF8%2BDKrLjGl2qmX7NvX24RCQviFqO%2FA3wn%2BmBUxIAt%2FVCdMVyi15pu4S&X-Amz-Signature=5d80ef7f2ff03b64840dbf29fc49648263c4a828a8a3feca8e1ffbde2267058c&X-Amz-SignedHeaders=host&x-id=GetObject)
