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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL7AE2RG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC8TFAfvJ9juA1XhFSPUYC%2BhiSLW7JYCg0XmOh9OwAnwwIgFYbxUuIyBhb5z%2FckF3o5qaDq856NBCOnPmweIp7qQcEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMgF9cp7G8Y%2F1fBmESrcA0gLRfzRMnS9UVUKSJbODg1zufSr9n2wI64ypU7oMc2vdjHiE6RB1sdxlVKFs%2Fz1tYIKnrkILNht7OKvk9dNdpVdMpMB8esSp3nYJHEIN6bHKhYV3yyf79X2skpdpYynLwMPVvP7eFJ1iZlD76Q5zNH6KMYYFXA5S5zBsThv%2BFWMGz2YTM48pErh%2F1pUpjWCvO1ybRXacd8pJmFGMUkdxxWLz%2BuGNTnf9rLC8RAAaYuSROLbcfjPZR845re9mhTpcFsdGWCleWGk3RckVazMQqLL36%2FPlrSl8LbE3Su49GKx6z0CXpDmDhABWq9HxCu07c3%2FsjskY2%2BZuwD%2F4lRyVbB%2F6%2BrOtZILTW%2FtOIie5Wy4WhxdFR%2FLweBFYydlg2Salovv3%2BfX4NwLA3HmLiNonJztmSv2KibiLDrr81tbFMO%2BwRTDnUlu8Ck%2FL%2F7cJnc8qTvJfR9CZb0Wm7O9eIKQeIptXMpVAR7cRhoMAFlJU9xGhhUxuqPWts4YN%2FKI6hhURh1ZNFLQB0v9wB8C46081EqBcZ%2FrOkQ1XymoV6gHF5p17t2xIQMmZyRI90coz3LMJR%2Bi8f7JiX7Q0g1HOLILC08OqIppxIyzqPlRvW1tqUoDFUfVi5WNCslVksNOMOTvy8EGOqUB4uWQuRiau%2FHLMi0yJei2un5FPKLsgEergDT8YRPmMaEsiZEiz%2F4WQ%2Fj5h7YUKs7l6Od7rmd850H%2BwilIoNzaan%2BLAaeM7uBSlN%2FSg%2BxBDeIzciosGjRVB4eb6Kb0lLFMegAmrL4f%2FM2bBnmnRfPwX2ZOu1A%2BVj3ufYfzIpY67asxqGcx7zxjCaCPVN7zIdzGHysGjk8Fkdl9LIK8aJEGxgMKgoDK&X-Amz-Signature=370900016018bc4de666ad60cfd03215b58658d735440f7d0b15dcfac7dadd0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL7AE2RG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC8TFAfvJ9juA1XhFSPUYC%2BhiSLW7JYCg0XmOh9OwAnwwIgFYbxUuIyBhb5z%2FckF3o5qaDq856NBCOnPmweIp7qQcEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMgF9cp7G8Y%2F1fBmESrcA0gLRfzRMnS9UVUKSJbODg1zufSr9n2wI64ypU7oMc2vdjHiE6RB1sdxlVKFs%2Fz1tYIKnrkILNht7OKvk9dNdpVdMpMB8esSp3nYJHEIN6bHKhYV3yyf79X2skpdpYynLwMPVvP7eFJ1iZlD76Q5zNH6KMYYFXA5S5zBsThv%2BFWMGz2YTM48pErh%2F1pUpjWCvO1ybRXacd8pJmFGMUkdxxWLz%2BuGNTnf9rLC8RAAaYuSROLbcfjPZR845re9mhTpcFsdGWCleWGk3RckVazMQqLL36%2FPlrSl8LbE3Su49GKx6z0CXpDmDhABWq9HxCu07c3%2FsjskY2%2BZuwD%2F4lRyVbB%2F6%2BrOtZILTW%2FtOIie5Wy4WhxdFR%2FLweBFYydlg2Salovv3%2BfX4NwLA3HmLiNonJztmSv2KibiLDrr81tbFMO%2BwRTDnUlu8Ck%2FL%2F7cJnc8qTvJfR9CZb0Wm7O9eIKQeIptXMpVAR7cRhoMAFlJU9xGhhUxuqPWts4YN%2FKI6hhURh1ZNFLQB0v9wB8C46081EqBcZ%2FrOkQ1XymoV6gHF5p17t2xIQMmZyRI90coz3LMJR%2Bi8f7JiX7Q0g1HOLILC08OqIppxIyzqPlRvW1tqUoDFUfVi5WNCslVksNOMOTvy8EGOqUB4uWQuRiau%2FHLMi0yJei2un5FPKLsgEergDT8YRPmMaEsiZEiz%2F4WQ%2Fj5h7YUKs7l6Od7rmd850H%2BwilIoNzaan%2BLAaeM7uBSlN%2FSg%2BxBDeIzciosGjRVB4eb6Kb0lLFMegAmrL4f%2FM2bBnmnRfPwX2ZOu1A%2BVj3ufYfzIpY67asxqGcx7zxjCaCPVN7zIdzGHysGjk8Fkdl9LIK8aJEGxgMKgoDK&X-Amz-Signature=1f9366357d79ade125562790f074b814cb98fab140d6448d8be07fddc3ce43f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL7AE2RG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC8TFAfvJ9juA1XhFSPUYC%2BhiSLW7JYCg0XmOh9OwAnwwIgFYbxUuIyBhb5z%2FckF3o5qaDq856NBCOnPmweIp7qQcEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMgF9cp7G8Y%2F1fBmESrcA0gLRfzRMnS9UVUKSJbODg1zufSr9n2wI64ypU7oMc2vdjHiE6RB1sdxlVKFs%2Fz1tYIKnrkILNht7OKvk9dNdpVdMpMB8esSp3nYJHEIN6bHKhYV3yyf79X2skpdpYynLwMPVvP7eFJ1iZlD76Q5zNH6KMYYFXA5S5zBsThv%2BFWMGz2YTM48pErh%2F1pUpjWCvO1ybRXacd8pJmFGMUkdxxWLz%2BuGNTnf9rLC8RAAaYuSROLbcfjPZR845re9mhTpcFsdGWCleWGk3RckVazMQqLL36%2FPlrSl8LbE3Su49GKx6z0CXpDmDhABWq9HxCu07c3%2FsjskY2%2BZuwD%2F4lRyVbB%2F6%2BrOtZILTW%2FtOIie5Wy4WhxdFR%2FLweBFYydlg2Salovv3%2BfX4NwLA3HmLiNonJztmSv2KibiLDrr81tbFMO%2BwRTDnUlu8Ck%2FL%2F7cJnc8qTvJfR9CZb0Wm7O9eIKQeIptXMpVAR7cRhoMAFlJU9xGhhUxuqPWts4YN%2FKI6hhURh1ZNFLQB0v9wB8C46081EqBcZ%2FrOkQ1XymoV6gHF5p17t2xIQMmZyRI90coz3LMJR%2Bi8f7JiX7Q0g1HOLILC08OqIppxIyzqPlRvW1tqUoDFUfVi5WNCslVksNOMOTvy8EGOqUB4uWQuRiau%2FHLMi0yJei2un5FPKLsgEergDT8YRPmMaEsiZEiz%2F4WQ%2Fj5h7YUKs7l6Od7rmd850H%2BwilIoNzaan%2BLAaeM7uBSlN%2FSg%2BxBDeIzciosGjRVB4eb6Kb0lLFMegAmrL4f%2FM2bBnmnRfPwX2ZOu1A%2BVj3ufYfzIpY67asxqGcx7zxjCaCPVN7zIdzGHysGjk8Fkdl9LIK8aJEGxgMKgoDK&X-Amz-Signature=26d4e7d4c4366e4129a468dcd36a4287a185775f3cd1c4a72f72568b6f0766fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL7AE2RG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC8TFAfvJ9juA1XhFSPUYC%2BhiSLW7JYCg0XmOh9OwAnwwIgFYbxUuIyBhb5z%2FckF3o5qaDq856NBCOnPmweIp7qQcEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMgF9cp7G8Y%2F1fBmESrcA0gLRfzRMnS9UVUKSJbODg1zufSr9n2wI64ypU7oMc2vdjHiE6RB1sdxlVKFs%2Fz1tYIKnrkILNht7OKvk9dNdpVdMpMB8esSp3nYJHEIN6bHKhYV3yyf79X2skpdpYynLwMPVvP7eFJ1iZlD76Q5zNH6KMYYFXA5S5zBsThv%2BFWMGz2YTM48pErh%2F1pUpjWCvO1ybRXacd8pJmFGMUkdxxWLz%2BuGNTnf9rLC8RAAaYuSROLbcfjPZR845re9mhTpcFsdGWCleWGk3RckVazMQqLL36%2FPlrSl8LbE3Su49GKx6z0CXpDmDhABWq9HxCu07c3%2FsjskY2%2BZuwD%2F4lRyVbB%2F6%2BrOtZILTW%2FtOIie5Wy4WhxdFR%2FLweBFYydlg2Salovv3%2BfX4NwLA3HmLiNonJztmSv2KibiLDrr81tbFMO%2BwRTDnUlu8Ck%2FL%2F7cJnc8qTvJfR9CZb0Wm7O9eIKQeIptXMpVAR7cRhoMAFlJU9xGhhUxuqPWts4YN%2FKI6hhURh1ZNFLQB0v9wB8C46081EqBcZ%2FrOkQ1XymoV6gHF5p17t2xIQMmZyRI90coz3LMJR%2Bi8f7JiX7Q0g1HOLILC08OqIppxIyzqPlRvW1tqUoDFUfVi5WNCslVksNOMOTvy8EGOqUB4uWQuRiau%2FHLMi0yJei2un5FPKLsgEergDT8YRPmMaEsiZEiz%2F4WQ%2Fj5h7YUKs7l6Od7rmd850H%2BwilIoNzaan%2BLAaeM7uBSlN%2FSg%2BxBDeIzciosGjRVB4eb6Kb0lLFMegAmrL4f%2FM2bBnmnRfPwX2ZOu1A%2BVj3ufYfzIpY67asxqGcx7zxjCaCPVN7zIdzGHysGjk8Fkdl9LIK8aJEGxgMKgoDK&X-Amz-Signature=3de7f6f8dfefe5ecc49cd1097bd99597f3280fefea8297930ddec34c809c56aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL7AE2RG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC8TFAfvJ9juA1XhFSPUYC%2BhiSLW7JYCg0XmOh9OwAnwwIgFYbxUuIyBhb5z%2FckF3o5qaDq856NBCOnPmweIp7qQcEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMgF9cp7G8Y%2F1fBmESrcA0gLRfzRMnS9UVUKSJbODg1zufSr9n2wI64ypU7oMc2vdjHiE6RB1sdxlVKFs%2Fz1tYIKnrkILNht7OKvk9dNdpVdMpMB8esSp3nYJHEIN6bHKhYV3yyf79X2skpdpYynLwMPVvP7eFJ1iZlD76Q5zNH6KMYYFXA5S5zBsThv%2BFWMGz2YTM48pErh%2F1pUpjWCvO1ybRXacd8pJmFGMUkdxxWLz%2BuGNTnf9rLC8RAAaYuSROLbcfjPZR845re9mhTpcFsdGWCleWGk3RckVazMQqLL36%2FPlrSl8LbE3Su49GKx6z0CXpDmDhABWq9HxCu07c3%2FsjskY2%2BZuwD%2F4lRyVbB%2F6%2BrOtZILTW%2FtOIie5Wy4WhxdFR%2FLweBFYydlg2Salovv3%2BfX4NwLA3HmLiNonJztmSv2KibiLDrr81tbFMO%2BwRTDnUlu8Ck%2FL%2F7cJnc8qTvJfR9CZb0Wm7O9eIKQeIptXMpVAR7cRhoMAFlJU9xGhhUxuqPWts4YN%2FKI6hhURh1ZNFLQB0v9wB8C46081EqBcZ%2FrOkQ1XymoV6gHF5p17t2xIQMmZyRI90coz3LMJR%2Bi8f7JiX7Q0g1HOLILC08OqIppxIyzqPlRvW1tqUoDFUfVi5WNCslVksNOMOTvy8EGOqUB4uWQuRiau%2FHLMi0yJei2un5FPKLsgEergDT8YRPmMaEsiZEiz%2F4WQ%2Fj5h7YUKs7l6Od7rmd850H%2BwilIoNzaan%2BLAaeM7uBSlN%2FSg%2BxBDeIzciosGjRVB4eb6Kb0lLFMegAmrL4f%2FM2bBnmnRfPwX2ZOu1A%2BVj3ufYfzIpY67asxqGcx7zxjCaCPVN7zIdzGHysGjk8Fkdl9LIK8aJEGxgMKgoDK&X-Amz-Signature=2609ea7cf1c6a9480e3a4717badefab3112884c79160762a3888e6a864c535ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL7AE2RG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC8TFAfvJ9juA1XhFSPUYC%2BhiSLW7JYCg0XmOh9OwAnwwIgFYbxUuIyBhb5z%2FckF3o5qaDq856NBCOnPmweIp7qQcEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMgF9cp7G8Y%2F1fBmESrcA0gLRfzRMnS9UVUKSJbODg1zufSr9n2wI64ypU7oMc2vdjHiE6RB1sdxlVKFs%2Fz1tYIKnrkILNht7OKvk9dNdpVdMpMB8esSp3nYJHEIN6bHKhYV3yyf79X2skpdpYynLwMPVvP7eFJ1iZlD76Q5zNH6KMYYFXA5S5zBsThv%2BFWMGz2YTM48pErh%2F1pUpjWCvO1ybRXacd8pJmFGMUkdxxWLz%2BuGNTnf9rLC8RAAaYuSROLbcfjPZR845re9mhTpcFsdGWCleWGk3RckVazMQqLL36%2FPlrSl8LbE3Su49GKx6z0CXpDmDhABWq9HxCu07c3%2FsjskY2%2BZuwD%2F4lRyVbB%2F6%2BrOtZILTW%2FtOIie5Wy4WhxdFR%2FLweBFYydlg2Salovv3%2BfX4NwLA3HmLiNonJztmSv2KibiLDrr81tbFMO%2BwRTDnUlu8Ck%2FL%2F7cJnc8qTvJfR9CZb0Wm7O9eIKQeIptXMpVAR7cRhoMAFlJU9xGhhUxuqPWts4YN%2FKI6hhURh1ZNFLQB0v9wB8C46081EqBcZ%2FrOkQ1XymoV6gHF5p17t2xIQMmZyRI90coz3LMJR%2Bi8f7JiX7Q0g1HOLILC08OqIppxIyzqPlRvW1tqUoDFUfVi5WNCslVksNOMOTvy8EGOqUB4uWQuRiau%2FHLMi0yJei2un5FPKLsgEergDT8YRPmMaEsiZEiz%2F4WQ%2Fj5h7YUKs7l6Od7rmd850H%2BwilIoNzaan%2BLAaeM7uBSlN%2FSg%2BxBDeIzciosGjRVB4eb6Kb0lLFMegAmrL4f%2FM2bBnmnRfPwX2ZOu1A%2BVj3ufYfzIpY67asxqGcx7zxjCaCPVN7zIdzGHysGjk8Fkdl9LIK8aJEGxgMKgoDK&X-Amz-Signature=c3b6ca98546b43bb2834203e1ba4fc0f789d539f9e49539a8481e60f2b643f80&X-Amz-SignedHeaders=host&x-id=GetObject)
