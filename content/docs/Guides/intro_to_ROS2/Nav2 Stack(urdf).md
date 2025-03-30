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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5IDZ4Q%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDxMZBI65ZaMxoszZfwEZXKD2Un6CoQACULiEJ6VV8fYAIhALKz7uNXgkxhO1D8%2FXPexira0K4ADJnS%2FH2JbF3sMTD6KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLBby%2BGPbei35ipk8q3APRcCRk9EnDUc1oFrTrfloEe%2Bqdcg9YwRT7046VYWSaXy8YDDRJq3My0xoIhC%2BmYXUeX591f%2Bi5k6jDu5Mt6BHi4MIJR8hDwaB9oKD8%2BzfZpAI%2BtLqMQ6IPFetP7RQaRPu%2FyjV%2BmfxTVhPjGTyNHY5m0Psq293BfMeOvCTPo4bUBIFJkitwjCGnt%2FaY%2F9dry10dAtQQdXUjp7yjA0g3SEReyFUogS6gsgmaqqSFZgmdg6R4ED1y0t6Tg6iZC%2F77pCDtG2zcucLOhYU%2BhlYK0SoP9tMtARKGc05oO9f1XzFtg1VMj1tKx135oadLgN%2BKJyNCkROrBpH9Rxr5DnkLTIW2XCTdiDuTSfKRMkTG7tiLSd6GA%2BKL8nFjM0GsbCyDnrshd5UpmAqvttTpT64sxLHkbPGgjBeIvwP20R7shRyzTiwcSWth4v7k8xxZX95HmPiESiDJqqx3jQnGJncSWGI0Q1M8yQKtySc878Xe5%2FBXYKkI%2Bp0lqXwNIH7oMDlmv8TOHJYy963jrgY7NWaGww0GNSw3Ijp5R9txXziiRj8wF6A56ljxKPWRxA1dqc6Bf43tm6Md%2Fc8xlhgxi80Ad3X3jNbnjhdne%2Fcbdv5QUYBxH6eDy%2FLgIMmBB6Ws5TCk06W%2FBjqkAackoHmRQSga6WpxIX2KOoSGA0R%2ByoDUv7hr837HMCA8IMXmhmsg1VHF375jOL4o1dSEqS6Z3TdOhJwx049%2BZtk%2FOtY6CGNSIrjRaoCOHT90phvdzmikxDlZkwDAXRNB8JS1uJn4uw3p6S2ZZZZz75ov4PsJ1GOtVQ0t0%2FtZYB8ttAspgl8cbcUiUp6oZDG6Ned%2BTIv%2B1Ql9%2Fyl1oEcsv%2F9PSzXU&X-Amz-Signature=fce3c4720f8c5a183801983380b8cf3922672b1e2e0641f091862cdf660122a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5IDZ4Q%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDxMZBI65ZaMxoszZfwEZXKD2Un6CoQACULiEJ6VV8fYAIhALKz7uNXgkxhO1D8%2FXPexira0K4ADJnS%2FH2JbF3sMTD6KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLBby%2BGPbei35ipk8q3APRcCRk9EnDUc1oFrTrfloEe%2Bqdcg9YwRT7046VYWSaXy8YDDRJq3My0xoIhC%2BmYXUeX591f%2Bi5k6jDu5Mt6BHi4MIJR8hDwaB9oKD8%2BzfZpAI%2BtLqMQ6IPFetP7RQaRPu%2FyjV%2BmfxTVhPjGTyNHY5m0Psq293BfMeOvCTPo4bUBIFJkitwjCGnt%2FaY%2F9dry10dAtQQdXUjp7yjA0g3SEReyFUogS6gsgmaqqSFZgmdg6R4ED1y0t6Tg6iZC%2F77pCDtG2zcucLOhYU%2BhlYK0SoP9tMtARKGc05oO9f1XzFtg1VMj1tKx135oadLgN%2BKJyNCkROrBpH9Rxr5DnkLTIW2XCTdiDuTSfKRMkTG7tiLSd6GA%2BKL8nFjM0GsbCyDnrshd5UpmAqvttTpT64sxLHkbPGgjBeIvwP20R7shRyzTiwcSWth4v7k8xxZX95HmPiESiDJqqx3jQnGJncSWGI0Q1M8yQKtySc878Xe5%2FBXYKkI%2Bp0lqXwNIH7oMDlmv8TOHJYy963jrgY7NWaGww0GNSw3Ijp5R9txXziiRj8wF6A56ljxKPWRxA1dqc6Bf43tm6Md%2Fc8xlhgxi80Ad3X3jNbnjhdne%2Fcbdv5QUYBxH6eDy%2FLgIMmBB6Ws5TCk06W%2FBjqkAackoHmRQSga6WpxIX2KOoSGA0R%2ByoDUv7hr837HMCA8IMXmhmsg1VHF375jOL4o1dSEqS6Z3TdOhJwx049%2BZtk%2FOtY6CGNSIrjRaoCOHT90phvdzmikxDlZkwDAXRNB8JS1uJn4uw3p6S2ZZZZz75ov4PsJ1GOtVQ0t0%2FtZYB8ttAspgl8cbcUiUp6oZDG6Ned%2BTIv%2B1Ql9%2Fyl1oEcsv%2F9PSzXU&X-Amz-Signature=c229abe567c0b31f0eaa1ec32db08016bc7caa9e5a100384b64b7c0061bd2fb1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5IDZ4Q%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDxMZBI65ZaMxoszZfwEZXKD2Un6CoQACULiEJ6VV8fYAIhALKz7uNXgkxhO1D8%2FXPexira0K4ADJnS%2FH2JbF3sMTD6KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLBby%2BGPbei35ipk8q3APRcCRk9EnDUc1oFrTrfloEe%2Bqdcg9YwRT7046VYWSaXy8YDDRJq3My0xoIhC%2BmYXUeX591f%2Bi5k6jDu5Mt6BHi4MIJR8hDwaB9oKD8%2BzfZpAI%2BtLqMQ6IPFetP7RQaRPu%2FyjV%2BmfxTVhPjGTyNHY5m0Psq293BfMeOvCTPo4bUBIFJkitwjCGnt%2FaY%2F9dry10dAtQQdXUjp7yjA0g3SEReyFUogS6gsgmaqqSFZgmdg6R4ED1y0t6Tg6iZC%2F77pCDtG2zcucLOhYU%2BhlYK0SoP9tMtARKGc05oO9f1XzFtg1VMj1tKx135oadLgN%2BKJyNCkROrBpH9Rxr5DnkLTIW2XCTdiDuTSfKRMkTG7tiLSd6GA%2BKL8nFjM0GsbCyDnrshd5UpmAqvttTpT64sxLHkbPGgjBeIvwP20R7shRyzTiwcSWth4v7k8xxZX95HmPiESiDJqqx3jQnGJncSWGI0Q1M8yQKtySc878Xe5%2FBXYKkI%2Bp0lqXwNIH7oMDlmv8TOHJYy963jrgY7NWaGww0GNSw3Ijp5R9txXziiRj8wF6A56ljxKPWRxA1dqc6Bf43tm6Md%2Fc8xlhgxi80Ad3X3jNbnjhdne%2Fcbdv5QUYBxH6eDy%2FLgIMmBB6Ws5TCk06W%2FBjqkAackoHmRQSga6WpxIX2KOoSGA0R%2ByoDUv7hr837HMCA8IMXmhmsg1VHF375jOL4o1dSEqS6Z3TdOhJwx049%2BZtk%2FOtY6CGNSIrjRaoCOHT90phvdzmikxDlZkwDAXRNB8JS1uJn4uw3p6S2ZZZZz75ov4PsJ1GOtVQ0t0%2FtZYB8ttAspgl8cbcUiUp6oZDG6Ned%2BTIv%2B1Ql9%2Fyl1oEcsv%2F9PSzXU&X-Amz-Signature=aba26de9042fad4bef500aca94285ccaf863400955743c6dcef8ea31f43ebf2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5IDZ4Q%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDxMZBI65ZaMxoszZfwEZXKD2Un6CoQACULiEJ6VV8fYAIhALKz7uNXgkxhO1D8%2FXPexira0K4ADJnS%2FH2JbF3sMTD6KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLBby%2BGPbei35ipk8q3APRcCRk9EnDUc1oFrTrfloEe%2Bqdcg9YwRT7046VYWSaXy8YDDRJq3My0xoIhC%2BmYXUeX591f%2Bi5k6jDu5Mt6BHi4MIJR8hDwaB9oKD8%2BzfZpAI%2BtLqMQ6IPFetP7RQaRPu%2FyjV%2BmfxTVhPjGTyNHY5m0Psq293BfMeOvCTPo4bUBIFJkitwjCGnt%2FaY%2F9dry10dAtQQdXUjp7yjA0g3SEReyFUogS6gsgmaqqSFZgmdg6R4ED1y0t6Tg6iZC%2F77pCDtG2zcucLOhYU%2BhlYK0SoP9tMtARKGc05oO9f1XzFtg1VMj1tKx135oadLgN%2BKJyNCkROrBpH9Rxr5DnkLTIW2XCTdiDuTSfKRMkTG7tiLSd6GA%2BKL8nFjM0GsbCyDnrshd5UpmAqvttTpT64sxLHkbPGgjBeIvwP20R7shRyzTiwcSWth4v7k8xxZX95HmPiESiDJqqx3jQnGJncSWGI0Q1M8yQKtySc878Xe5%2FBXYKkI%2Bp0lqXwNIH7oMDlmv8TOHJYy963jrgY7NWaGww0GNSw3Ijp5R9txXziiRj8wF6A56ljxKPWRxA1dqc6Bf43tm6Md%2Fc8xlhgxi80Ad3X3jNbnjhdne%2Fcbdv5QUYBxH6eDy%2FLgIMmBB6Ws5TCk06W%2FBjqkAackoHmRQSga6WpxIX2KOoSGA0R%2ByoDUv7hr837HMCA8IMXmhmsg1VHF375jOL4o1dSEqS6Z3TdOhJwx049%2BZtk%2FOtY6CGNSIrjRaoCOHT90phvdzmikxDlZkwDAXRNB8JS1uJn4uw3p6S2ZZZZz75ov4PsJ1GOtVQ0t0%2FtZYB8ttAspgl8cbcUiUp6oZDG6Ned%2BTIv%2B1Ql9%2Fyl1oEcsv%2F9PSzXU&X-Amz-Signature=4971461943b1b23a7963886e6420c78366fd7517495826ccddfd01e0de971df6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5IDZ4Q%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDxMZBI65ZaMxoszZfwEZXKD2Un6CoQACULiEJ6VV8fYAIhALKz7uNXgkxhO1D8%2FXPexira0K4ADJnS%2FH2JbF3sMTD6KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLBby%2BGPbei35ipk8q3APRcCRk9EnDUc1oFrTrfloEe%2Bqdcg9YwRT7046VYWSaXy8YDDRJq3My0xoIhC%2BmYXUeX591f%2Bi5k6jDu5Mt6BHi4MIJR8hDwaB9oKD8%2BzfZpAI%2BtLqMQ6IPFetP7RQaRPu%2FyjV%2BmfxTVhPjGTyNHY5m0Psq293BfMeOvCTPo4bUBIFJkitwjCGnt%2FaY%2F9dry10dAtQQdXUjp7yjA0g3SEReyFUogS6gsgmaqqSFZgmdg6R4ED1y0t6Tg6iZC%2F77pCDtG2zcucLOhYU%2BhlYK0SoP9tMtARKGc05oO9f1XzFtg1VMj1tKx135oadLgN%2BKJyNCkROrBpH9Rxr5DnkLTIW2XCTdiDuTSfKRMkTG7tiLSd6GA%2BKL8nFjM0GsbCyDnrshd5UpmAqvttTpT64sxLHkbPGgjBeIvwP20R7shRyzTiwcSWth4v7k8xxZX95HmPiESiDJqqx3jQnGJncSWGI0Q1M8yQKtySc878Xe5%2FBXYKkI%2Bp0lqXwNIH7oMDlmv8TOHJYy963jrgY7NWaGww0GNSw3Ijp5R9txXziiRj8wF6A56ljxKPWRxA1dqc6Bf43tm6Md%2Fc8xlhgxi80Ad3X3jNbnjhdne%2Fcbdv5QUYBxH6eDy%2FLgIMmBB6Ws5TCk06W%2FBjqkAackoHmRQSga6WpxIX2KOoSGA0R%2ByoDUv7hr837HMCA8IMXmhmsg1VHF375jOL4o1dSEqS6Z3TdOhJwx049%2BZtk%2FOtY6CGNSIrjRaoCOHT90phvdzmikxDlZkwDAXRNB8JS1uJn4uw3p6S2ZZZZz75ov4PsJ1GOtVQ0t0%2FtZYB8ttAspgl8cbcUiUp6oZDG6Ned%2BTIv%2B1Ql9%2Fyl1oEcsv%2F9PSzXU&X-Amz-Signature=6dbfb9d14fe54371bfaadeb5cb05199c08d2de80bad0a6f173457e8e9a742bac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5IDZ4Q%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDxMZBI65ZaMxoszZfwEZXKD2Un6CoQACULiEJ6VV8fYAIhALKz7uNXgkxhO1D8%2FXPexira0K4ADJnS%2FH2JbF3sMTD6KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLBby%2BGPbei35ipk8q3APRcCRk9EnDUc1oFrTrfloEe%2Bqdcg9YwRT7046VYWSaXy8YDDRJq3My0xoIhC%2BmYXUeX591f%2Bi5k6jDu5Mt6BHi4MIJR8hDwaB9oKD8%2BzfZpAI%2BtLqMQ6IPFetP7RQaRPu%2FyjV%2BmfxTVhPjGTyNHY5m0Psq293BfMeOvCTPo4bUBIFJkitwjCGnt%2FaY%2F9dry10dAtQQdXUjp7yjA0g3SEReyFUogS6gsgmaqqSFZgmdg6R4ED1y0t6Tg6iZC%2F77pCDtG2zcucLOhYU%2BhlYK0SoP9tMtARKGc05oO9f1XzFtg1VMj1tKx135oadLgN%2BKJyNCkROrBpH9Rxr5DnkLTIW2XCTdiDuTSfKRMkTG7tiLSd6GA%2BKL8nFjM0GsbCyDnrshd5UpmAqvttTpT64sxLHkbPGgjBeIvwP20R7shRyzTiwcSWth4v7k8xxZX95HmPiESiDJqqx3jQnGJncSWGI0Q1M8yQKtySc878Xe5%2FBXYKkI%2Bp0lqXwNIH7oMDlmv8TOHJYy963jrgY7NWaGww0GNSw3Ijp5R9txXziiRj8wF6A56ljxKPWRxA1dqc6Bf43tm6Md%2Fc8xlhgxi80Ad3X3jNbnjhdne%2Fcbdv5QUYBxH6eDy%2FLgIMmBB6Ws5TCk06W%2FBjqkAackoHmRQSga6WpxIX2KOoSGA0R%2ByoDUv7hr837HMCA8IMXmhmsg1VHF375jOL4o1dSEqS6Z3TdOhJwx049%2BZtk%2FOtY6CGNSIrjRaoCOHT90phvdzmikxDlZkwDAXRNB8JS1uJn4uw3p6S2ZZZZz75ov4PsJ1GOtVQ0t0%2FtZYB8ttAspgl8cbcUiUp6oZDG6Ned%2BTIv%2B1Ql9%2Fyl1oEcsv%2F9PSzXU&X-Amz-Signature=0fd92aec3a339c5e10abef89615df0eb0f6f45bc4e4a84eb84626b4f9317d240&X-Amz-SignedHeaders=host&x-id=GetObject)
