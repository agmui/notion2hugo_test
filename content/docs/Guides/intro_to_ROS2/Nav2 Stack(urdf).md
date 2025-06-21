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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNN5CS5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCQ7avRN0769KKHUG40DckJgL4QcP2okqxPLNTCetFVAiAetQoAMqUmcHKmpQUu5phyMf0Eys7maXMsYPOwksdv1iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsyssmQziS%2BODbxoUKtwDWmFulveRXDYFmv%2FCW9MqaoeMLADHREMY3E8KpWJsUbmlnJRlQ6kBFzcXfpK7I4%2FrwtOEzKI8oTvR%2BxzQosB5xdqpCA%2Fj7t0yvCr%2BmmPzFVVjardJx%2FOHhbcWrtjo3uldd1o%2FoEOhlr2fXBV1DnDx8u0%2BVs89DbAh2LazFFbmX5Q8NnDa0BYOpXQwbg73McfgBjrNFZ8VHLlkZFOr%2FZ%2BqHsrAGOqIGxjDZy%2BIAzzoPFGH%2BmQ6hc7sd4GNIycNBPID%2FLt%2BwOIrkT77P5cyKzUgzkWHA%2FCZtr6wv9mg08NrJNovGdBcsJT7YIo5HWijDJUhcc6t01E3xWAeJLpEXpeeQXLd8AiQCgGiIWaN8BCgUxoUi4LD4Xxz77pPjlvRRG4Q5BKpy3b%2B8dXlrIRlMEm16mFgLOT9JGZOKrhAamrTrO4tiyHCG5wneL5c9woxnR9I1lHIVDf1aziGY2sd1fuyvBS0PAdfgy%2BJX%2FXG0Va4pa%2Fzj48pRd5SuHA5rNz3nufYZWTA14IRWKrhzZRq7A%2F6Chfz9wUF7bxo3j4BkDr8uc%2BPIV%2BWLLlNC%2F90PzrFBw0OjPYCL%2BtAnzIGeJXN1VLQHO%2FuW7wJCPy%2FgIuhGUOSxl8eFWO4Qq%2B5YOD6qcowl7DYwgY6pgGF9enwyIBUO3WpDpa61zbt%2FN7fVJU4%2BTExZ4UbpO2ixQZIi4tqAkG3svToo2oDcj9vg0YeMbxqmgP0ySfN9LQ1w5E%2BdBPf%2FcRxOEaqqAzglnSmrWbDVFiUjRC%2F4kE1ARf%2FU7w3CQ0jC9Ytgt3IvmJdQDYhfI4EikqqFXsTwfnOOeRd95IUSpEr1LYgAr2w87uKdGWNWHEWbxnlbuqb8AqcuSM7jDtO&X-Amz-Signature=24ca798268f00be6849f3a7a6a3ec6188d83dc8056e51cd639e93a35247b92f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNN5CS5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCQ7avRN0769KKHUG40DckJgL4QcP2okqxPLNTCetFVAiAetQoAMqUmcHKmpQUu5phyMf0Eys7maXMsYPOwksdv1iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsyssmQziS%2BODbxoUKtwDWmFulveRXDYFmv%2FCW9MqaoeMLADHREMY3E8KpWJsUbmlnJRlQ6kBFzcXfpK7I4%2FrwtOEzKI8oTvR%2BxzQosB5xdqpCA%2Fj7t0yvCr%2BmmPzFVVjardJx%2FOHhbcWrtjo3uldd1o%2FoEOhlr2fXBV1DnDx8u0%2BVs89DbAh2LazFFbmX5Q8NnDa0BYOpXQwbg73McfgBjrNFZ8VHLlkZFOr%2FZ%2BqHsrAGOqIGxjDZy%2BIAzzoPFGH%2BmQ6hc7sd4GNIycNBPID%2FLt%2BwOIrkT77P5cyKzUgzkWHA%2FCZtr6wv9mg08NrJNovGdBcsJT7YIo5HWijDJUhcc6t01E3xWAeJLpEXpeeQXLd8AiQCgGiIWaN8BCgUxoUi4LD4Xxz77pPjlvRRG4Q5BKpy3b%2B8dXlrIRlMEm16mFgLOT9JGZOKrhAamrTrO4tiyHCG5wneL5c9woxnR9I1lHIVDf1aziGY2sd1fuyvBS0PAdfgy%2BJX%2FXG0Va4pa%2Fzj48pRd5SuHA5rNz3nufYZWTA14IRWKrhzZRq7A%2F6Chfz9wUF7bxo3j4BkDr8uc%2BPIV%2BWLLlNC%2F90PzrFBw0OjPYCL%2BtAnzIGeJXN1VLQHO%2FuW7wJCPy%2FgIuhGUOSxl8eFWO4Qq%2B5YOD6qcowl7DYwgY6pgGF9enwyIBUO3WpDpa61zbt%2FN7fVJU4%2BTExZ4UbpO2ixQZIi4tqAkG3svToo2oDcj9vg0YeMbxqmgP0ySfN9LQ1w5E%2BdBPf%2FcRxOEaqqAzglnSmrWbDVFiUjRC%2F4kE1ARf%2FU7w3CQ0jC9Ytgt3IvmJdQDYhfI4EikqqFXsTwfnOOeRd95IUSpEr1LYgAr2w87uKdGWNWHEWbxnlbuqb8AqcuSM7jDtO&X-Amz-Signature=5057359224c4cbc51046e9eb3c10654deaa5a93711792fc76da2d4c5a9808f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNN5CS5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCQ7avRN0769KKHUG40DckJgL4QcP2okqxPLNTCetFVAiAetQoAMqUmcHKmpQUu5phyMf0Eys7maXMsYPOwksdv1iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsyssmQziS%2BODbxoUKtwDWmFulveRXDYFmv%2FCW9MqaoeMLADHREMY3E8KpWJsUbmlnJRlQ6kBFzcXfpK7I4%2FrwtOEzKI8oTvR%2BxzQosB5xdqpCA%2Fj7t0yvCr%2BmmPzFVVjardJx%2FOHhbcWrtjo3uldd1o%2FoEOhlr2fXBV1DnDx8u0%2BVs89DbAh2LazFFbmX5Q8NnDa0BYOpXQwbg73McfgBjrNFZ8VHLlkZFOr%2FZ%2BqHsrAGOqIGxjDZy%2BIAzzoPFGH%2BmQ6hc7sd4GNIycNBPID%2FLt%2BwOIrkT77P5cyKzUgzkWHA%2FCZtr6wv9mg08NrJNovGdBcsJT7YIo5HWijDJUhcc6t01E3xWAeJLpEXpeeQXLd8AiQCgGiIWaN8BCgUxoUi4LD4Xxz77pPjlvRRG4Q5BKpy3b%2B8dXlrIRlMEm16mFgLOT9JGZOKrhAamrTrO4tiyHCG5wneL5c9woxnR9I1lHIVDf1aziGY2sd1fuyvBS0PAdfgy%2BJX%2FXG0Va4pa%2Fzj48pRd5SuHA5rNz3nufYZWTA14IRWKrhzZRq7A%2F6Chfz9wUF7bxo3j4BkDr8uc%2BPIV%2BWLLlNC%2F90PzrFBw0OjPYCL%2BtAnzIGeJXN1VLQHO%2FuW7wJCPy%2FgIuhGUOSxl8eFWO4Qq%2B5YOD6qcowl7DYwgY6pgGF9enwyIBUO3WpDpa61zbt%2FN7fVJU4%2BTExZ4UbpO2ixQZIi4tqAkG3svToo2oDcj9vg0YeMbxqmgP0ySfN9LQ1w5E%2BdBPf%2FcRxOEaqqAzglnSmrWbDVFiUjRC%2F4kE1ARf%2FU7w3CQ0jC9Ytgt3IvmJdQDYhfI4EikqqFXsTwfnOOeRd95IUSpEr1LYgAr2w87uKdGWNWHEWbxnlbuqb8AqcuSM7jDtO&X-Amz-Signature=9e8966e75789df1601273c78c46a31b306cc60e07847587a7526c79b6739baf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNN5CS5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCQ7avRN0769KKHUG40DckJgL4QcP2okqxPLNTCetFVAiAetQoAMqUmcHKmpQUu5phyMf0Eys7maXMsYPOwksdv1iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsyssmQziS%2BODbxoUKtwDWmFulveRXDYFmv%2FCW9MqaoeMLADHREMY3E8KpWJsUbmlnJRlQ6kBFzcXfpK7I4%2FrwtOEzKI8oTvR%2BxzQosB5xdqpCA%2Fj7t0yvCr%2BmmPzFVVjardJx%2FOHhbcWrtjo3uldd1o%2FoEOhlr2fXBV1DnDx8u0%2BVs89DbAh2LazFFbmX5Q8NnDa0BYOpXQwbg73McfgBjrNFZ8VHLlkZFOr%2FZ%2BqHsrAGOqIGxjDZy%2BIAzzoPFGH%2BmQ6hc7sd4GNIycNBPID%2FLt%2BwOIrkT77P5cyKzUgzkWHA%2FCZtr6wv9mg08NrJNovGdBcsJT7YIo5HWijDJUhcc6t01E3xWAeJLpEXpeeQXLd8AiQCgGiIWaN8BCgUxoUi4LD4Xxz77pPjlvRRG4Q5BKpy3b%2B8dXlrIRlMEm16mFgLOT9JGZOKrhAamrTrO4tiyHCG5wneL5c9woxnR9I1lHIVDf1aziGY2sd1fuyvBS0PAdfgy%2BJX%2FXG0Va4pa%2Fzj48pRd5SuHA5rNz3nufYZWTA14IRWKrhzZRq7A%2F6Chfz9wUF7bxo3j4BkDr8uc%2BPIV%2BWLLlNC%2F90PzrFBw0OjPYCL%2BtAnzIGeJXN1VLQHO%2FuW7wJCPy%2FgIuhGUOSxl8eFWO4Qq%2B5YOD6qcowl7DYwgY6pgGF9enwyIBUO3WpDpa61zbt%2FN7fVJU4%2BTExZ4UbpO2ixQZIi4tqAkG3svToo2oDcj9vg0YeMbxqmgP0ySfN9LQ1w5E%2BdBPf%2FcRxOEaqqAzglnSmrWbDVFiUjRC%2F4kE1ARf%2FU7w3CQ0jC9Ytgt3IvmJdQDYhfI4EikqqFXsTwfnOOeRd95IUSpEr1LYgAr2w87uKdGWNWHEWbxnlbuqb8AqcuSM7jDtO&X-Amz-Signature=d89aeed7ca7eaca4b3c853d9e30fa20bb42c9b2b1197e499fceb620f9f4cae67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNN5CS5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCQ7avRN0769KKHUG40DckJgL4QcP2okqxPLNTCetFVAiAetQoAMqUmcHKmpQUu5phyMf0Eys7maXMsYPOwksdv1iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsyssmQziS%2BODbxoUKtwDWmFulveRXDYFmv%2FCW9MqaoeMLADHREMY3E8KpWJsUbmlnJRlQ6kBFzcXfpK7I4%2FrwtOEzKI8oTvR%2BxzQosB5xdqpCA%2Fj7t0yvCr%2BmmPzFVVjardJx%2FOHhbcWrtjo3uldd1o%2FoEOhlr2fXBV1DnDx8u0%2BVs89DbAh2LazFFbmX5Q8NnDa0BYOpXQwbg73McfgBjrNFZ8VHLlkZFOr%2FZ%2BqHsrAGOqIGxjDZy%2BIAzzoPFGH%2BmQ6hc7sd4GNIycNBPID%2FLt%2BwOIrkT77P5cyKzUgzkWHA%2FCZtr6wv9mg08NrJNovGdBcsJT7YIo5HWijDJUhcc6t01E3xWAeJLpEXpeeQXLd8AiQCgGiIWaN8BCgUxoUi4LD4Xxz77pPjlvRRG4Q5BKpy3b%2B8dXlrIRlMEm16mFgLOT9JGZOKrhAamrTrO4tiyHCG5wneL5c9woxnR9I1lHIVDf1aziGY2sd1fuyvBS0PAdfgy%2BJX%2FXG0Va4pa%2Fzj48pRd5SuHA5rNz3nufYZWTA14IRWKrhzZRq7A%2F6Chfz9wUF7bxo3j4BkDr8uc%2BPIV%2BWLLlNC%2F90PzrFBw0OjPYCL%2BtAnzIGeJXN1VLQHO%2FuW7wJCPy%2FgIuhGUOSxl8eFWO4Qq%2B5YOD6qcowl7DYwgY6pgGF9enwyIBUO3WpDpa61zbt%2FN7fVJU4%2BTExZ4UbpO2ixQZIi4tqAkG3svToo2oDcj9vg0YeMbxqmgP0ySfN9LQ1w5E%2BdBPf%2FcRxOEaqqAzglnSmrWbDVFiUjRC%2F4kE1ARf%2FU7w3CQ0jC9Ytgt3IvmJdQDYhfI4EikqqFXsTwfnOOeRd95IUSpEr1LYgAr2w87uKdGWNWHEWbxnlbuqb8AqcuSM7jDtO&X-Amz-Signature=a844f9ee4945537938f937ad0ab6b163142cb92410171b02c0892f46890cc362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNN5CS5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCQ7avRN0769KKHUG40DckJgL4QcP2okqxPLNTCetFVAiAetQoAMqUmcHKmpQUu5phyMf0Eys7maXMsYPOwksdv1iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsyssmQziS%2BODbxoUKtwDWmFulveRXDYFmv%2FCW9MqaoeMLADHREMY3E8KpWJsUbmlnJRlQ6kBFzcXfpK7I4%2FrwtOEzKI8oTvR%2BxzQosB5xdqpCA%2Fj7t0yvCr%2BmmPzFVVjardJx%2FOHhbcWrtjo3uldd1o%2FoEOhlr2fXBV1DnDx8u0%2BVs89DbAh2LazFFbmX5Q8NnDa0BYOpXQwbg73McfgBjrNFZ8VHLlkZFOr%2FZ%2BqHsrAGOqIGxjDZy%2BIAzzoPFGH%2BmQ6hc7sd4GNIycNBPID%2FLt%2BwOIrkT77P5cyKzUgzkWHA%2FCZtr6wv9mg08NrJNovGdBcsJT7YIo5HWijDJUhcc6t01E3xWAeJLpEXpeeQXLd8AiQCgGiIWaN8BCgUxoUi4LD4Xxz77pPjlvRRG4Q5BKpy3b%2B8dXlrIRlMEm16mFgLOT9JGZOKrhAamrTrO4tiyHCG5wneL5c9woxnR9I1lHIVDf1aziGY2sd1fuyvBS0PAdfgy%2BJX%2FXG0Va4pa%2Fzj48pRd5SuHA5rNz3nufYZWTA14IRWKrhzZRq7A%2F6Chfz9wUF7bxo3j4BkDr8uc%2BPIV%2BWLLlNC%2F90PzrFBw0OjPYCL%2BtAnzIGeJXN1VLQHO%2FuW7wJCPy%2FgIuhGUOSxl8eFWO4Qq%2B5YOD6qcowl7DYwgY6pgGF9enwyIBUO3WpDpa61zbt%2FN7fVJU4%2BTExZ4UbpO2ixQZIi4tqAkG3svToo2oDcj9vg0YeMbxqmgP0ySfN9LQ1w5E%2BdBPf%2FcRxOEaqqAzglnSmrWbDVFiUjRC%2F4kE1ARf%2FU7w3CQ0jC9Ytgt3IvmJdQDYhfI4EikqqFXsTwfnOOeRd95IUSpEr1LYgAr2w87uKdGWNWHEWbxnlbuqb8AqcuSM7jDtO&X-Amz-Signature=3b09f49d40638305c2dc61acdb9b5360d35e0fd479c2938c5ac56abcb95cb691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
