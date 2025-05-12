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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUMASXOK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDqHF0yHG%2BjUl1Ro7oy8Hq4ABH0xeNsgS%2B%2FQ5%2FrsSSZKgIhAJBHW7BkwdqFDC0ya%2Bwi6WlzkuddRNtJvdT6Ns9L5tSpKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8pc8rvvlHFa03jmAq3APNRfGcLhKJ3fbt%2BFYIGszb09IV0%2BwZgV97NPvsfr8f90H0EtwfEHUSpro34k6MPBje27td1E2mvhNErKZV%2FGx7IXYTprLzDSNc9hY4EXmirLpDZxPhb79f0GikN7DV6g0nQ9WQT82FiQLiXN7BJGG5yOlvveH1aQKnSur3d3eIO7Qy9zVEZlGMiU26%2BHzwQsYdkiUAlu%2FW2klCJlZCYANj44qwrZqA0hBMV98tVauaVdmVRjrJ1MSFBX%2BqVf294gSVOt002OdyBU9uzyKWbf2LbBBxj84K5CXoCwSEYQxoceLp6S3%2FA8LKld0CHQJscLJWw36cjmLC0t293OiQVuxDlPRpQqI0H7fxNt5kfm7aoSpc9gXZucZsWplzD0kNB%2FveaN4Q0C26Sbr6mpD8ZEAFwPtmvPd0aKRoaDI8u7Wm5IhiDkq90XrvWOXAHk1wZNNamp0KpCkllBFQZN%2FLqxo%2FSu%2BAh8z2wvcDtzigfBpWwuBFGdGw79PaZWX0Et1BaYLjcgsVlIZ9NNYHWr6zcTFTCzaogpu%2B2uSYIgPHFTXrMHg5gGY4dLhft5sE6fpkdHBKAOLIcmwUS%2F41IsIDsr2CNp9nGFA49986%2BXzOAXn%2BJUZ2wihExt6WBJfnZTDohYXBBjqkAf08C%2BFpP9ZyStruurrNHkyEH8fwU2sw8%2FmV%2BiPa%2BGMQHj%2FG0FpHGo3rOVL0p3tRjvtgVY5vPUQgIO4zrSfRWb8f%2BaJtXHHBkLuihqYZrDsEooIuh1XHZDvukF%2FPvhz5EG8ZXPIze8%2BIbIwcNE9yI3Nthqvq5AdxBIENcvJHtKmbbcU7P8p17EHEwGEAg5HB13Xijr8M6vtlEsoKYNpqLhc5afPr&X-Amz-Signature=32614add275a9472dae10bce1698fe96a75493eb677423afdd68fb16593f59ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUMASXOK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDqHF0yHG%2BjUl1Ro7oy8Hq4ABH0xeNsgS%2B%2FQ5%2FrsSSZKgIhAJBHW7BkwdqFDC0ya%2Bwi6WlzkuddRNtJvdT6Ns9L5tSpKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8pc8rvvlHFa03jmAq3APNRfGcLhKJ3fbt%2BFYIGszb09IV0%2BwZgV97NPvsfr8f90H0EtwfEHUSpro34k6MPBje27td1E2mvhNErKZV%2FGx7IXYTprLzDSNc9hY4EXmirLpDZxPhb79f0GikN7DV6g0nQ9WQT82FiQLiXN7BJGG5yOlvveH1aQKnSur3d3eIO7Qy9zVEZlGMiU26%2BHzwQsYdkiUAlu%2FW2klCJlZCYANj44qwrZqA0hBMV98tVauaVdmVRjrJ1MSFBX%2BqVf294gSVOt002OdyBU9uzyKWbf2LbBBxj84K5CXoCwSEYQxoceLp6S3%2FA8LKld0CHQJscLJWw36cjmLC0t293OiQVuxDlPRpQqI0H7fxNt5kfm7aoSpc9gXZucZsWplzD0kNB%2FveaN4Q0C26Sbr6mpD8ZEAFwPtmvPd0aKRoaDI8u7Wm5IhiDkq90XrvWOXAHk1wZNNamp0KpCkllBFQZN%2FLqxo%2FSu%2BAh8z2wvcDtzigfBpWwuBFGdGw79PaZWX0Et1BaYLjcgsVlIZ9NNYHWr6zcTFTCzaogpu%2B2uSYIgPHFTXrMHg5gGY4dLhft5sE6fpkdHBKAOLIcmwUS%2F41IsIDsr2CNp9nGFA49986%2BXzOAXn%2BJUZ2wihExt6WBJfnZTDohYXBBjqkAf08C%2BFpP9ZyStruurrNHkyEH8fwU2sw8%2FmV%2BiPa%2BGMQHj%2FG0FpHGo3rOVL0p3tRjvtgVY5vPUQgIO4zrSfRWb8f%2BaJtXHHBkLuihqYZrDsEooIuh1XHZDvukF%2FPvhz5EG8ZXPIze8%2BIbIwcNE9yI3Nthqvq5AdxBIENcvJHtKmbbcU7P8p17EHEwGEAg5HB13Xijr8M6vtlEsoKYNpqLhc5afPr&X-Amz-Signature=3c4c4ce4314a574f27ae89de514f5d3fa48ecf0971510132c9eee3929d9f62c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUMASXOK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDqHF0yHG%2BjUl1Ro7oy8Hq4ABH0xeNsgS%2B%2FQ5%2FrsSSZKgIhAJBHW7BkwdqFDC0ya%2Bwi6WlzkuddRNtJvdT6Ns9L5tSpKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8pc8rvvlHFa03jmAq3APNRfGcLhKJ3fbt%2BFYIGszb09IV0%2BwZgV97NPvsfr8f90H0EtwfEHUSpro34k6MPBje27td1E2mvhNErKZV%2FGx7IXYTprLzDSNc9hY4EXmirLpDZxPhb79f0GikN7DV6g0nQ9WQT82FiQLiXN7BJGG5yOlvveH1aQKnSur3d3eIO7Qy9zVEZlGMiU26%2BHzwQsYdkiUAlu%2FW2klCJlZCYANj44qwrZqA0hBMV98tVauaVdmVRjrJ1MSFBX%2BqVf294gSVOt002OdyBU9uzyKWbf2LbBBxj84K5CXoCwSEYQxoceLp6S3%2FA8LKld0CHQJscLJWw36cjmLC0t293OiQVuxDlPRpQqI0H7fxNt5kfm7aoSpc9gXZucZsWplzD0kNB%2FveaN4Q0C26Sbr6mpD8ZEAFwPtmvPd0aKRoaDI8u7Wm5IhiDkq90XrvWOXAHk1wZNNamp0KpCkllBFQZN%2FLqxo%2FSu%2BAh8z2wvcDtzigfBpWwuBFGdGw79PaZWX0Et1BaYLjcgsVlIZ9NNYHWr6zcTFTCzaogpu%2B2uSYIgPHFTXrMHg5gGY4dLhft5sE6fpkdHBKAOLIcmwUS%2F41IsIDsr2CNp9nGFA49986%2BXzOAXn%2BJUZ2wihExt6WBJfnZTDohYXBBjqkAf08C%2BFpP9ZyStruurrNHkyEH8fwU2sw8%2FmV%2BiPa%2BGMQHj%2FG0FpHGo3rOVL0p3tRjvtgVY5vPUQgIO4zrSfRWb8f%2BaJtXHHBkLuihqYZrDsEooIuh1XHZDvukF%2FPvhz5EG8ZXPIze8%2BIbIwcNE9yI3Nthqvq5AdxBIENcvJHtKmbbcU7P8p17EHEwGEAg5HB13Xijr8M6vtlEsoKYNpqLhc5afPr&X-Amz-Signature=b1e4be0b3f877c929d20c3ff4fbf030460f58acab864ebd44128b3a63863e173&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUMASXOK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDqHF0yHG%2BjUl1Ro7oy8Hq4ABH0xeNsgS%2B%2FQ5%2FrsSSZKgIhAJBHW7BkwdqFDC0ya%2Bwi6WlzkuddRNtJvdT6Ns9L5tSpKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8pc8rvvlHFa03jmAq3APNRfGcLhKJ3fbt%2BFYIGszb09IV0%2BwZgV97NPvsfr8f90H0EtwfEHUSpro34k6MPBje27td1E2mvhNErKZV%2FGx7IXYTprLzDSNc9hY4EXmirLpDZxPhb79f0GikN7DV6g0nQ9WQT82FiQLiXN7BJGG5yOlvveH1aQKnSur3d3eIO7Qy9zVEZlGMiU26%2BHzwQsYdkiUAlu%2FW2klCJlZCYANj44qwrZqA0hBMV98tVauaVdmVRjrJ1MSFBX%2BqVf294gSVOt002OdyBU9uzyKWbf2LbBBxj84K5CXoCwSEYQxoceLp6S3%2FA8LKld0CHQJscLJWw36cjmLC0t293OiQVuxDlPRpQqI0H7fxNt5kfm7aoSpc9gXZucZsWplzD0kNB%2FveaN4Q0C26Sbr6mpD8ZEAFwPtmvPd0aKRoaDI8u7Wm5IhiDkq90XrvWOXAHk1wZNNamp0KpCkllBFQZN%2FLqxo%2FSu%2BAh8z2wvcDtzigfBpWwuBFGdGw79PaZWX0Et1BaYLjcgsVlIZ9NNYHWr6zcTFTCzaogpu%2B2uSYIgPHFTXrMHg5gGY4dLhft5sE6fpkdHBKAOLIcmwUS%2F41IsIDsr2CNp9nGFA49986%2BXzOAXn%2BJUZ2wihExt6WBJfnZTDohYXBBjqkAf08C%2BFpP9ZyStruurrNHkyEH8fwU2sw8%2FmV%2BiPa%2BGMQHj%2FG0FpHGo3rOVL0p3tRjvtgVY5vPUQgIO4zrSfRWb8f%2BaJtXHHBkLuihqYZrDsEooIuh1XHZDvukF%2FPvhz5EG8ZXPIze8%2BIbIwcNE9yI3Nthqvq5AdxBIENcvJHtKmbbcU7P8p17EHEwGEAg5HB13Xijr8M6vtlEsoKYNpqLhc5afPr&X-Amz-Signature=1226c20fdb057c71fe4fb1525aa07bf382e9520e2562ae3292267454da3a7e88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUMASXOK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDqHF0yHG%2BjUl1Ro7oy8Hq4ABH0xeNsgS%2B%2FQ5%2FrsSSZKgIhAJBHW7BkwdqFDC0ya%2Bwi6WlzkuddRNtJvdT6Ns9L5tSpKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8pc8rvvlHFa03jmAq3APNRfGcLhKJ3fbt%2BFYIGszb09IV0%2BwZgV97NPvsfr8f90H0EtwfEHUSpro34k6MPBje27td1E2mvhNErKZV%2FGx7IXYTprLzDSNc9hY4EXmirLpDZxPhb79f0GikN7DV6g0nQ9WQT82FiQLiXN7BJGG5yOlvveH1aQKnSur3d3eIO7Qy9zVEZlGMiU26%2BHzwQsYdkiUAlu%2FW2klCJlZCYANj44qwrZqA0hBMV98tVauaVdmVRjrJ1MSFBX%2BqVf294gSVOt002OdyBU9uzyKWbf2LbBBxj84K5CXoCwSEYQxoceLp6S3%2FA8LKld0CHQJscLJWw36cjmLC0t293OiQVuxDlPRpQqI0H7fxNt5kfm7aoSpc9gXZucZsWplzD0kNB%2FveaN4Q0C26Sbr6mpD8ZEAFwPtmvPd0aKRoaDI8u7Wm5IhiDkq90XrvWOXAHk1wZNNamp0KpCkllBFQZN%2FLqxo%2FSu%2BAh8z2wvcDtzigfBpWwuBFGdGw79PaZWX0Et1BaYLjcgsVlIZ9NNYHWr6zcTFTCzaogpu%2B2uSYIgPHFTXrMHg5gGY4dLhft5sE6fpkdHBKAOLIcmwUS%2F41IsIDsr2CNp9nGFA49986%2BXzOAXn%2BJUZ2wihExt6WBJfnZTDohYXBBjqkAf08C%2BFpP9ZyStruurrNHkyEH8fwU2sw8%2FmV%2BiPa%2BGMQHj%2FG0FpHGo3rOVL0p3tRjvtgVY5vPUQgIO4zrSfRWb8f%2BaJtXHHBkLuihqYZrDsEooIuh1XHZDvukF%2FPvhz5EG8ZXPIze8%2BIbIwcNE9yI3Nthqvq5AdxBIENcvJHtKmbbcU7P8p17EHEwGEAg5HB13Xijr8M6vtlEsoKYNpqLhc5afPr&X-Amz-Signature=a0d1830a604ca8c34dc6dfd332d5f624841073c3176003cddc7f82c72190a310&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUMASXOK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDqHF0yHG%2BjUl1Ro7oy8Hq4ABH0xeNsgS%2B%2FQ5%2FrsSSZKgIhAJBHW7BkwdqFDC0ya%2Bwi6WlzkuddRNtJvdT6Ns9L5tSpKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8pc8rvvlHFa03jmAq3APNRfGcLhKJ3fbt%2BFYIGszb09IV0%2BwZgV97NPvsfr8f90H0EtwfEHUSpro34k6MPBje27td1E2mvhNErKZV%2FGx7IXYTprLzDSNc9hY4EXmirLpDZxPhb79f0GikN7DV6g0nQ9WQT82FiQLiXN7BJGG5yOlvveH1aQKnSur3d3eIO7Qy9zVEZlGMiU26%2BHzwQsYdkiUAlu%2FW2klCJlZCYANj44qwrZqA0hBMV98tVauaVdmVRjrJ1MSFBX%2BqVf294gSVOt002OdyBU9uzyKWbf2LbBBxj84K5CXoCwSEYQxoceLp6S3%2FA8LKld0CHQJscLJWw36cjmLC0t293OiQVuxDlPRpQqI0H7fxNt5kfm7aoSpc9gXZucZsWplzD0kNB%2FveaN4Q0C26Sbr6mpD8ZEAFwPtmvPd0aKRoaDI8u7Wm5IhiDkq90XrvWOXAHk1wZNNamp0KpCkllBFQZN%2FLqxo%2FSu%2BAh8z2wvcDtzigfBpWwuBFGdGw79PaZWX0Et1BaYLjcgsVlIZ9NNYHWr6zcTFTCzaogpu%2B2uSYIgPHFTXrMHg5gGY4dLhft5sE6fpkdHBKAOLIcmwUS%2F41IsIDsr2CNp9nGFA49986%2BXzOAXn%2BJUZ2wihExt6WBJfnZTDohYXBBjqkAf08C%2BFpP9ZyStruurrNHkyEH8fwU2sw8%2FmV%2BiPa%2BGMQHj%2FG0FpHGo3rOVL0p3tRjvtgVY5vPUQgIO4zrSfRWb8f%2BaJtXHHBkLuihqYZrDsEooIuh1XHZDvukF%2FPvhz5EG8ZXPIze8%2BIbIwcNE9yI3Nthqvq5AdxBIENcvJHtKmbbcU7P8p17EHEwGEAg5HB13Xijr8M6vtlEsoKYNpqLhc5afPr&X-Amz-Signature=1fbf2c8eeebf53d40083ed31225b44e28ecb6a8e887275b3a3155fdf0559c5aa&X-Amz-SignedHeaders=host&x-id=GetObject)
