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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOLAAY7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFLtF%2F%2B6a0ufyXedQI0nlic3ije6%2Bw5floECcuOdkVwIhAMrkjRcXbF5V61nv1Lb3N9nKfm7rXdT33Sqpbg%2BuXjalKv8DCDQQABoMNjM3NDIzMTgzODA1IgybqA%2B0YwdGTsT7TWMq3APs7RoLbnH8v6EpIyaX0ynHXH4I4v0z50lAs7bDeWpKdKycK%2FFYvyXkiLFcaacHza1EOlfIAGofCsPOXo2xqwgZa2d7uys3rzjkYhlHdoGfnewaJOuI5tNHwPiKNKkclDHXRHSZ0wovgdSv%2BjYcxgNAFlcWC6wKdIV9jaLtpO2fkQEIfBc4Bbc8v2AH%2FZ7SspH4xF9S%2FoaQyx5jCMJNGNwLGMqPyA%2Fas92s8wqIymi3n6QbeLpWUeFLrXZfHCnJRisIjHwkLj2W%2FPtDpAp2x0OEijTLkD4%2BdyGbu7ynZbvH1fWNdPkNaDCcWLgyqyx7u5XeT3wCn5j3T%2FtrGaNRS0Rz%2FHX%2Bx7UvmhpV5Q4CJSQcn3afTY0p%2BT4D%2BphstaNf9HiyyI%2BJmyz8CxTermTQ7GsWfC71Un1ePwyludc0aZCamgFweFzajW1BIMFR%2BemgGxIrQ54VsNZ85CYki1tTwG%2Fp5ID9LWFZcaValod9VwtBkbNg%2BUUzelLX%2BVv9%2FD%2BFle8KFv0f%2FMUlVMIf3ml80A3mI3YX2ZfVUSchUtSfSzmq7sZh7pQMpFxXX5FvsjqLWoiPTiIT0r5JliYA04OvfHToD3GmsSUmCL66ZLiVej3ksVTv%2F93GPuTYWaE%2BPjDy1fq%2FBjqkAVhpH%2BtAD0X5SUD3xUg%2FB3U2puFLbsLl9HPlQ57Oa%2BtlA2upsXMrKeoi5qRSCFIoDHnWJnKnb8Ri8YhqNjpUlreG2UbMWCp7hpUaMiHAxThJQdGBP02NX3TgM3MXsVN2O7tTIy46ZP5rZr%2Fwpe1x0DyBQDCe9BM6qbUFZa3beMr1%2BMKVcG63FlzTP27%2F2LQ%2B9vC1eLdagRL6%2BmFVNeBQjgZGgRN4&X-Amz-Signature=1a3b64b3da8f0948abfc92488ac208ebcb443621376f3822c39f8cbaf3428586&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOLAAY7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFLtF%2F%2B6a0ufyXedQI0nlic3ije6%2Bw5floECcuOdkVwIhAMrkjRcXbF5V61nv1Lb3N9nKfm7rXdT33Sqpbg%2BuXjalKv8DCDQQABoMNjM3NDIzMTgzODA1IgybqA%2B0YwdGTsT7TWMq3APs7RoLbnH8v6EpIyaX0ynHXH4I4v0z50lAs7bDeWpKdKycK%2FFYvyXkiLFcaacHza1EOlfIAGofCsPOXo2xqwgZa2d7uys3rzjkYhlHdoGfnewaJOuI5tNHwPiKNKkclDHXRHSZ0wovgdSv%2BjYcxgNAFlcWC6wKdIV9jaLtpO2fkQEIfBc4Bbc8v2AH%2FZ7SspH4xF9S%2FoaQyx5jCMJNGNwLGMqPyA%2Fas92s8wqIymi3n6QbeLpWUeFLrXZfHCnJRisIjHwkLj2W%2FPtDpAp2x0OEijTLkD4%2BdyGbu7ynZbvH1fWNdPkNaDCcWLgyqyx7u5XeT3wCn5j3T%2FtrGaNRS0Rz%2FHX%2Bx7UvmhpV5Q4CJSQcn3afTY0p%2BT4D%2BphstaNf9HiyyI%2BJmyz8CxTermTQ7GsWfC71Un1ePwyludc0aZCamgFweFzajW1BIMFR%2BemgGxIrQ54VsNZ85CYki1tTwG%2Fp5ID9LWFZcaValod9VwtBkbNg%2BUUzelLX%2BVv9%2FD%2BFle8KFv0f%2FMUlVMIf3ml80A3mI3YX2ZfVUSchUtSfSzmq7sZh7pQMpFxXX5FvsjqLWoiPTiIT0r5JliYA04OvfHToD3GmsSUmCL66ZLiVej3ksVTv%2F93GPuTYWaE%2BPjDy1fq%2FBjqkAVhpH%2BtAD0X5SUD3xUg%2FB3U2puFLbsLl9HPlQ57Oa%2BtlA2upsXMrKeoi5qRSCFIoDHnWJnKnb8Ri8YhqNjpUlreG2UbMWCp7hpUaMiHAxThJQdGBP02NX3TgM3MXsVN2O7tTIy46ZP5rZr%2Fwpe1x0DyBQDCe9BM6qbUFZa3beMr1%2BMKVcG63FlzTP27%2F2LQ%2B9vC1eLdagRL6%2BmFVNeBQjgZGgRN4&X-Amz-Signature=da27dff70a8a8faeb092bbf94200c97a0f50f49a07f8f14681380deb38876095&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOLAAY7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFLtF%2F%2B6a0ufyXedQI0nlic3ije6%2Bw5floECcuOdkVwIhAMrkjRcXbF5V61nv1Lb3N9nKfm7rXdT33Sqpbg%2BuXjalKv8DCDQQABoMNjM3NDIzMTgzODA1IgybqA%2B0YwdGTsT7TWMq3APs7RoLbnH8v6EpIyaX0ynHXH4I4v0z50lAs7bDeWpKdKycK%2FFYvyXkiLFcaacHza1EOlfIAGofCsPOXo2xqwgZa2d7uys3rzjkYhlHdoGfnewaJOuI5tNHwPiKNKkclDHXRHSZ0wovgdSv%2BjYcxgNAFlcWC6wKdIV9jaLtpO2fkQEIfBc4Bbc8v2AH%2FZ7SspH4xF9S%2FoaQyx5jCMJNGNwLGMqPyA%2Fas92s8wqIymi3n6QbeLpWUeFLrXZfHCnJRisIjHwkLj2W%2FPtDpAp2x0OEijTLkD4%2BdyGbu7ynZbvH1fWNdPkNaDCcWLgyqyx7u5XeT3wCn5j3T%2FtrGaNRS0Rz%2FHX%2Bx7UvmhpV5Q4CJSQcn3afTY0p%2BT4D%2BphstaNf9HiyyI%2BJmyz8CxTermTQ7GsWfC71Un1ePwyludc0aZCamgFweFzajW1BIMFR%2BemgGxIrQ54VsNZ85CYki1tTwG%2Fp5ID9LWFZcaValod9VwtBkbNg%2BUUzelLX%2BVv9%2FD%2BFle8KFv0f%2FMUlVMIf3ml80A3mI3YX2ZfVUSchUtSfSzmq7sZh7pQMpFxXX5FvsjqLWoiPTiIT0r5JliYA04OvfHToD3GmsSUmCL66ZLiVej3ksVTv%2F93GPuTYWaE%2BPjDy1fq%2FBjqkAVhpH%2BtAD0X5SUD3xUg%2FB3U2puFLbsLl9HPlQ57Oa%2BtlA2upsXMrKeoi5qRSCFIoDHnWJnKnb8Ri8YhqNjpUlreG2UbMWCp7hpUaMiHAxThJQdGBP02NX3TgM3MXsVN2O7tTIy46ZP5rZr%2Fwpe1x0DyBQDCe9BM6qbUFZa3beMr1%2BMKVcG63FlzTP27%2F2LQ%2B9vC1eLdagRL6%2BmFVNeBQjgZGgRN4&X-Amz-Signature=ca582f4d74795ea73a5b9be288926fe99020554c4c4298fd86b96b70305de1b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOLAAY7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFLtF%2F%2B6a0ufyXedQI0nlic3ije6%2Bw5floECcuOdkVwIhAMrkjRcXbF5V61nv1Lb3N9nKfm7rXdT33Sqpbg%2BuXjalKv8DCDQQABoMNjM3NDIzMTgzODA1IgybqA%2B0YwdGTsT7TWMq3APs7RoLbnH8v6EpIyaX0ynHXH4I4v0z50lAs7bDeWpKdKycK%2FFYvyXkiLFcaacHza1EOlfIAGofCsPOXo2xqwgZa2d7uys3rzjkYhlHdoGfnewaJOuI5tNHwPiKNKkclDHXRHSZ0wovgdSv%2BjYcxgNAFlcWC6wKdIV9jaLtpO2fkQEIfBc4Bbc8v2AH%2FZ7SspH4xF9S%2FoaQyx5jCMJNGNwLGMqPyA%2Fas92s8wqIymi3n6QbeLpWUeFLrXZfHCnJRisIjHwkLj2W%2FPtDpAp2x0OEijTLkD4%2BdyGbu7ynZbvH1fWNdPkNaDCcWLgyqyx7u5XeT3wCn5j3T%2FtrGaNRS0Rz%2FHX%2Bx7UvmhpV5Q4CJSQcn3afTY0p%2BT4D%2BphstaNf9HiyyI%2BJmyz8CxTermTQ7GsWfC71Un1ePwyludc0aZCamgFweFzajW1BIMFR%2BemgGxIrQ54VsNZ85CYki1tTwG%2Fp5ID9LWFZcaValod9VwtBkbNg%2BUUzelLX%2BVv9%2FD%2BFle8KFv0f%2FMUlVMIf3ml80A3mI3YX2ZfVUSchUtSfSzmq7sZh7pQMpFxXX5FvsjqLWoiPTiIT0r5JliYA04OvfHToD3GmsSUmCL66ZLiVej3ksVTv%2F93GPuTYWaE%2BPjDy1fq%2FBjqkAVhpH%2BtAD0X5SUD3xUg%2FB3U2puFLbsLl9HPlQ57Oa%2BtlA2upsXMrKeoi5qRSCFIoDHnWJnKnb8Ri8YhqNjpUlreG2UbMWCp7hpUaMiHAxThJQdGBP02NX3TgM3MXsVN2O7tTIy46ZP5rZr%2Fwpe1x0DyBQDCe9BM6qbUFZa3beMr1%2BMKVcG63FlzTP27%2F2LQ%2B9vC1eLdagRL6%2BmFVNeBQjgZGgRN4&X-Amz-Signature=89dbfdec90b04849186118491b7ff2c99d6529a19092f11595e6c8d095fc95cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOLAAY7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFLtF%2F%2B6a0ufyXedQI0nlic3ije6%2Bw5floECcuOdkVwIhAMrkjRcXbF5V61nv1Lb3N9nKfm7rXdT33Sqpbg%2BuXjalKv8DCDQQABoMNjM3NDIzMTgzODA1IgybqA%2B0YwdGTsT7TWMq3APs7RoLbnH8v6EpIyaX0ynHXH4I4v0z50lAs7bDeWpKdKycK%2FFYvyXkiLFcaacHza1EOlfIAGofCsPOXo2xqwgZa2d7uys3rzjkYhlHdoGfnewaJOuI5tNHwPiKNKkclDHXRHSZ0wovgdSv%2BjYcxgNAFlcWC6wKdIV9jaLtpO2fkQEIfBc4Bbc8v2AH%2FZ7SspH4xF9S%2FoaQyx5jCMJNGNwLGMqPyA%2Fas92s8wqIymi3n6QbeLpWUeFLrXZfHCnJRisIjHwkLj2W%2FPtDpAp2x0OEijTLkD4%2BdyGbu7ynZbvH1fWNdPkNaDCcWLgyqyx7u5XeT3wCn5j3T%2FtrGaNRS0Rz%2FHX%2Bx7UvmhpV5Q4CJSQcn3afTY0p%2BT4D%2BphstaNf9HiyyI%2BJmyz8CxTermTQ7GsWfC71Un1ePwyludc0aZCamgFweFzajW1BIMFR%2BemgGxIrQ54VsNZ85CYki1tTwG%2Fp5ID9LWFZcaValod9VwtBkbNg%2BUUzelLX%2BVv9%2FD%2BFle8KFv0f%2FMUlVMIf3ml80A3mI3YX2ZfVUSchUtSfSzmq7sZh7pQMpFxXX5FvsjqLWoiPTiIT0r5JliYA04OvfHToD3GmsSUmCL66ZLiVej3ksVTv%2F93GPuTYWaE%2BPjDy1fq%2FBjqkAVhpH%2BtAD0X5SUD3xUg%2FB3U2puFLbsLl9HPlQ57Oa%2BtlA2upsXMrKeoi5qRSCFIoDHnWJnKnb8Ri8YhqNjpUlreG2UbMWCp7hpUaMiHAxThJQdGBP02NX3TgM3MXsVN2O7tTIy46ZP5rZr%2Fwpe1x0DyBQDCe9BM6qbUFZa3beMr1%2BMKVcG63FlzTP27%2F2LQ%2B9vC1eLdagRL6%2BmFVNeBQjgZGgRN4&X-Amz-Signature=bfee47c2197329c8234014e4d8ada14f96f4a07891989f7833b975dfe9e950f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOLAAY7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFLtF%2F%2B6a0ufyXedQI0nlic3ije6%2Bw5floECcuOdkVwIhAMrkjRcXbF5V61nv1Lb3N9nKfm7rXdT33Sqpbg%2BuXjalKv8DCDQQABoMNjM3NDIzMTgzODA1IgybqA%2B0YwdGTsT7TWMq3APs7RoLbnH8v6EpIyaX0ynHXH4I4v0z50lAs7bDeWpKdKycK%2FFYvyXkiLFcaacHza1EOlfIAGofCsPOXo2xqwgZa2d7uys3rzjkYhlHdoGfnewaJOuI5tNHwPiKNKkclDHXRHSZ0wovgdSv%2BjYcxgNAFlcWC6wKdIV9jaLtpO2fkQEIfBc4Bbc8v2AH%2FZ7SspH4xF9S%2FoaQyx5jCMJNGNwLGMqPyA%2Fas92s8wqIymi3n6QbeLpWUeFLrXZfHCnJRisIjHwkLj2W%2FPtDpAp2x0OEijTLkD4%2BdyGbu7ynZbvH1fWNdPkNaDCcWLgyqyx7u5XeT3wCn5j3T%2FtrGaNRS0Rz%2FHX%2Bx7UvmhpV5Q4CJSQcn3afTY0p%2BT4D%2BphstaNf9HiyyI%2BJmyz8CxTermTQ7GsWfC71Un1ePwyludc0aZCamgFweFzajW1BIMFR%2BemgGxIrQ54VsNZ85CYki1tTwG%2Fp5ID9LWFZcaValod9VwtBkbNg%2BUUzelLX%2BVv9%2FD%2BFle8KFv0f%2FMUlVMIf3ml80A3mI3YX2ZfVUSchUtSfSzmq7sZh7pQMpFxXX5FvsjqLWoiPTiIT0r5JliYA04OvfHToD3GmsSUmCL66ZLiVej3ksVTv%2F93GPuTYWaE%2BPjDy1fq%2FBjqkAVhpH%2BtAD0X5SUD3xUg%2FB3U2puFLbsLl9HPlQ57Oa%2BtlA2upsXMrKeoi5qRSCFIoDHnWJnKnb8Ri8YhqNjpUlreG2UbMWCp7hpUaMiHAxThJQdGBP02NX3TgM3MXsVN2O7tTIy46ZP5rZr%2Fwpe1x0DyBQDCe9BM6qbUFZa3beMr1%2BMKVcG63FlzTP27%2F2LQ%2B9vC1eLdagRL6%2BmFVNeBQjgZGgRN4&X-Amz-Signature=f5a8b9898ba99847de8430390c335077259e31cf9bbdf1c851863de0ddefa473&X-Amz-SignedHeaders=host&x-id=GetObject)
