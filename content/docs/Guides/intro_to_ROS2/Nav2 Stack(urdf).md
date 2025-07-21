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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECRU7UY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTrUPzkGjXsRawNrWcRfcAcn77OubYkRwUqVeA5aI0oQIgYBp9QD42mVBGxMzhLPzzvCE9L4CYaxeT2Vxzs0yTyDgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCnX94o%2B%2BeAVF1ZWSrcAw%2BCRFnxQpslIcON2Lvg4uCmCRlsMmaWKWBtyMwG6w%2Fr6poime3MTa%2B%2Fvr4Z%2BT4P5A02ZgBBfSLLOjQNd6EHABS%2Bz9QA47FLskWAexW6AfYUjxwY896e1euk88G2m43ItYSFHGrmPcy%2FUC%2BOcSafXQE5FPOfQQP4BQXBcYEYlS5Oy7%2BYvxTOvxe%2BA0ZZFLopcBpBQS9B1SX5ruL1E3hZfQbPyQzIOLAQ6wgNga1gf%2BJdeNENHpwOJCvF13vagJFxAfoBztHc0UJo3%2BRSYd0On2MZo6XnOVvQDGSUNMwiKkwYJCYX2c4ZV4%2FWzEfxTTM9C%2Fj7Putd15XfP0cQ4A%2FbYa0bEPNKSDMZ5OGSmd1i2QsoQ%2FXkF2ToSWwL3SbyAAh2fxYuXiXYnUzD3HRtw69kWs%2Ba5TbdrwXeuCsgAh2WDoC9SPR8U%2BfWvOu5xepbKXIhkkShqFhvq7peWJJ4wclWwsjTNOMtqoHSo47LNVePRd0qi5KecKQmB84yDlUdyjEkZvNiVUSfVx3lDJGRsuwujAA%2FYakbJYqtV8kv7XpcmhzpBp45BjEdS8%2FY63LW8u1gtyl5DwTr0djggUTZn%2BcU2ivOotnD0fY0fF08UNs%2F2cF9%2Blu42QnsibTQh%2BiWMNON%2BMMGOqUBSmh%2Bh2ZWdP3SJv2NPPdBLHB4GSCdo33FqMceZWDcIlS0kR98zemP57kbc39tqjKRzUhy3JHf%2B28YU6ecQ3PMG6QhvCR6BaziRIQD3wQrfTgcxrp1LZc5BUsaLORUWqX4xAjH1jw%2FN2XKglR%2FuuIq1drTS8fjkolbnm8SGpSNDA2uN6%2FXgk5uawMUAaM%2BTC5CIuXBzGLn8gnHgsoqHxTfzUEWkYju&X-Amz-Signature=e6371606efe73b6054b7a6eea1ce03fd4a09904ed09a560817d3a1de115e5182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECRU7UY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTrUPzkGjXsRawNrWcRfcAcn77OubYkRwUqVeA5aI0oQIgYBp9QD42mVBGxMzhLPzzvCE9L4CYaxeT2Vxzs0yTyDgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCnX94o%2B%2BeAVF1ZWSrcAw%2BCRFnxQpslIcON2Lvg4uCmCRlsMmaWKWBtyMwG6w%2Fr6poime3MTa%2B%2Fvr4Z%2BT4P5A02ZgBBfSLLOjQNd6EHABS%2Bz9QA47FLskWAexW6AfYUjxwY896e1euk88G2m43ItYSFHGrmPcy%2FUC%2BOcSafXQE5FPOfQQP4BQXBcYEYlS5Oy7%2BYvxTOvxe%2BA0ZZFLopcBpBQS9B1SX5ruL1E3hZfQbPyQzIOLAQ6wgNga1gf%2BJdeNENHpwOJCvF13vagJFxAfoBztHc0UJo3%2BRSYd0On2MZo6XnOVvQDGSUNMwiKkwYJCYX2c4ZV4%2FWzEfxTTM9C%2Fj7Putd15XfP0cQ4A%2FbYa0bEPNKSDMZ5OGSmd1i2QsoQ%2FXkF2ToSWwL3SbyAAh2fxYuXiXYnUzD3HRtw69kWs%2Ba5TbdrwXeuCsgAh2WDoC9SPR8U%2BfWvOu5xepbKXIhkkShqFhvq7peWJJ4wclWwsjTNOMtqoHSo47LNVePRd0qi5KecKQmB84yDlUdyjEkZvNiVUSfVx3lDJGRsuwujAA%2FYakbJYqtV8kv7XpcmhzpBp45BjEdS8%2FY63LW8u1gtyl5DwTr0djggUTZn%2BcU2ivOotnD0fY0fF08UNs%2F2cF9%2Blu42QnsibTQh%2BiWMNON%2BMMGOqUBSmh%2Bh2ZWdP3SJv2NPPdBLHB4GSCdo33FqMceZWDcIlS0kR98zemP57kbc39tqjKRzUhy3JHf%2B28YU6ecQ3PMG6QhvCR6BaziRIQD3wQrfTgcxrp1LZc5BUsaLORUWqX4xAjH1jw%2FN2XKglR%2FuuIq1drTS8fjkolbnm8SGpSNDA2uN6%2FXgk5uawMUAaM%2BTC5CIuXBzGLn8gnHgsoqHxTfzUEWkYju&X-Amz-Signature=5763b88c7f10565157a56a3a78a6c665c9d12522bd4f375468d5669bbe216290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECRU7UY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTrUPzkGjXsRawNrWcRfcAcn77OubYkRwUqVeA5aI0oQIgYBp9QD42mVBGxMzhLPzzvCE9L4CYaxeT2Vxzs0yTyDgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCnX94o%2B%2BeAVF1ZWSrcAw%2BCRFnxQpslIcON2Lvg4uCmCRlsMmaWKWBtyMwG6w%2Fr6poime3MTa%2B%2Fvr4Z%2BT4P5A02ZgBBfSLLOjQNd6EHABS%2Bz9QA47FLskWAexW6AfYUjxwY896e1euk88G2m43ItYSFHGrmPcy%2FUC%2BOcSafXQE5FPOfQQP4BQXBcYEYlS5Oy7%2BYvxTOvxe%2BA0ZZFLopcBpBQS9B1SX5ruL1E3hZfQbPyQzIOLAQ6wgNga1gf%2BJdeNENHpwOJCvF13vagJFxAfoBztHc0UJo3%2BRSYd0On2MZo6XnOVvQDGSUNMwiKkwYJCYX2c4ZV4%2FWzEfxTTM9C%2Fj7Putd15XfP0cQ4A%2FbYa0bEPNKSDMZ5OGSmd1i2QsoQ%2FXkF2ToSWwL3SbyAAh2fxYuXiXYnUzD3HRtw69kWs%2Ba5TbdrwXeuCsgAh2WDoC9SPR8U%2BfWvOu5xepbKXIhkkShqFhvq7peWJJ4wclWwsjTNOMtqoHSo47LNVePRd0qi5KecKQmB84yDlUdyjEkZvNiVUSfVx3lDJGRsuwujAA%2FYakbJYqtV8kv7XpcmhzpBp45BjEdS8%2FY63LW8u1gtyl5DwTr0djggUTZn%2BcU2ivOotnD0fY0fF08UNs%2F2cF9%2Blu42QnsibTQh%2BiWMNON%2BMMGOqUBSmh%2Bh2ZWdP3SJv2NPPdBLHB4GSCdo33FqMceZWDcIlS0kR98zemP57kbc39tqjKRzUhy3JHf%2B28YU6ecQ3PMG6QhvCR6BaziRIQD3wQrfTgcxrp1LZc5BUsaLORUWqX4xAjH1jw%2FN2XKglR%2FuuIq1drTS8fjkolbnm8SGpSNDA2uN6%2FXgk5uawMUAaM%2BTC5CIuXBzGLn8gnHgsoqHxTfzUEWkYju&X-Amz-Signature=2b7ee18f5a5163d305d4bdc937fefd7f5e73939a2fe2c358224c22af95ec6cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECRU7UY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTrUPzkGjXsRawNrWcRfcAcn77OubYkRwUqVeA5aI0oQIgYBp9QD42mVBGxMzhLPzzvCE9L4CYaxeT2Vxzs0yTyDgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCnX94o%2B%2BeAVF1ZWSrcAw%2BCRFnxQpslIcON2Lvg4uCmCRlsMmaWKWBtyMwG6w%2Fr6poime3MTa%2B%2Fvr4Z%2BT4P5A02ZgBBfSLLOjQNd6EHABS%2Bz9QA47FLskWAexW6AfYUjxwY896e1euk88G2m43ItYSFHGrmPcy%2FUC%2BOcSafXQE5FPOfQQP4BQXBcYEYlS5Oy7%2BYvxTOvxe%2BA0ZZFLopcBpBQS9B1SX5ruL1E3hZfQbPyQzIOLAQ6wgNga1gf%2BJdeNENHpwOJCvF13vagJFxAfoBztHc0UJo3%2BRSYd0On2MZo6XnOVvQDGSUNMwiKkwYJCYX2c4ZV4%2FWzEfxTTM9C%2Fj7Putd15XfP0cQ4A%2FbYa0bEPNKSDMZ5OGSmd1i2QsoQ%2FXkF2ToSWwL3SbyAAh2fxYuXiXYnUzD3HRtw69kWs%2Ba5TbdrwXeuCsgAh2WDoC9SPR8U%2BfWvOu5xepbKXIhkkShqFhvq7peWJJ4wclWwsjTNOMtqoHSo47LNVePRd0qi5KecKQmB84yDlUdyjEkZvNiVUSfVx3lDJGRsuwujAA%2FYakbJYqtV8kv7XpcmhzpBp45BjEdS8%2FY63LW8u1gtyl5DwTr0djggUTZn%2BcU2ivOotnD0fY0fF08UNs%2F2cF9%2Blu42QnsibTQh%2BiWMNON%2BMMGOqUBSmh%2Bh2ZWdP3SJv2NPPdBLHB4GSCdo33FqMceZWDcIlS0kR98zemP57kbc39tqjKRzUhy3JHf%2B28YU6ecQ3PMG6QhvCR6BaziRIQD3wQrfTgcxrp1LZc5BUsaLORUWqX4xAjH1jw%2FN2XKglR%2FuuIq1drTS8fjkolbnm8SGpSNDA2uN6%2FXgk5uawMUAaM%2BTC5CIuXBzGLn8gnHgsoqHxTfzUEWkYju&X-Amz-Signature=05275088794b8848c7b8279c2d9ac5e2c991259eba0e3cc36221dea7ca4a4805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECRU7UY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTrUPzkGjXsRawNrWcRfcAcn77OubYkRwUqVeA5aI0oQIgYBp9QD42mVBGxMzhLPzzvCE9L4CYaxeT2Vxzs0yTyDgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCnX94o%2B%2BeAVF1ZWSrcAw%2BCRFnxQpslIcON2Lvg4uCmCRlsMmaWKWBtyMwG6w%2Fr6poime3MTa%2B%2Fvr4Z%2BT4P5A02ZgBBfSLLOjQNd6EHABS%2Bz9QA47FLskWAexW6AfYUjxwY896e1euk88G2m43ItYSFHGrmPcy%2FUC%2BOcSafXQE5FPOfQQP4BQXBcYEYlS5Oy7%2BYvxTOvxe%2BA0ZZFLopcBpBQS9B1SX5ruL1E3hZfQbPyQzIOLAQ6wgNga1gf%2BJdeNENHpwOJCvF13vagJFxAfoBztHc0UJo3%2BRSYd0On2MZo6XnOVvQDGSUNMwiKkwYJCYX2c4ZV4%2FWzEfxTTM9C%2Fj7Putd15XfP0cQ4A%2FbYa0bEPNKSDMZ5OGSmd1i2QsoQ%2FXkF2ToSWwL3SbyAAh2fxYuXiXYnUzD3HRtw69kWs%2Ba5TbdrwXeuCsgAh2WDoC9SPR8U%2BfWvOu5xepbKXIhkkShqFhvq7peWJJ4wclWwsjTNOMtqoHSo47LNVePRd0qi5KecKQmB84yDlUdyjEkZvNiVUSfVx3lDJGRsuwujAA%2FYakbJYqtV8kv7XpcmhzpBp45BjEdS8%2FY63LW8u1gtyl5DwTr0djggUTZn%2BcU2ivOotnD0fY0fF08UNs%2F2cF9%2Blu42QnsibTQh%2BiWMNON%2BMMGOqUBSmh%2Bh2ZWdP3SJv2NPPdBLHB4GSCdo33FqMceZWDcIlS0kR98zemP57kbc39tqjKRzUhy3JHf%2B28YU6ecQ3PMG6QhvCR6BaziRIQD3wQrfTgcxrp1LZc5BUsaLORUWqX4xAjH1jw%2FN2XKglR%2FuuIq1drTS8fjkolbnm8SGpSNDA2uN6%2FXgk5uawMUAaM%2BTC5CIuXBzGLn8gnHgsoqHxTfzUEWkYju&X-Amz-Signature=a8e78198b84842af0a47948c466c531470f39743aaf001425a3c7ecba6407fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECRU7UY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTrUPzkGjXsRawNrWcRfcAcn77OubYkRwUqVeA5aI0oQIgYBp9QD42mVBGxMzhLPzzvCE9L4CYaxeT2Vxzs0yTyDgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCnX94o%2B%2BeAVF1ZWSrcAw%2BCRFnxQpslIcON2Lvg4uCmCRlsMmaWKWBtyMwG6w%2Fr6poime3MTa%2B%2Fvr4Z%2BT4P5A02ZgBBfSLLOjQNd6EHABS%2Bz9QA47FLskWAexW6AfYUjxwY896e1euk88G2m43ItYSFHGrmPcy%2FUC%2BOcSafXQE5FPOfQQP4BQXBcYEYlS5Oy7%2BYvxTOvxe%2BA0ZZFLopcBpBQS9B1SX5ruL1E3hZfQbPyQzIOLAQ6wgNga1gf%2BJdeNENHpwOJCvF13vagJFxAfoBztHc0UJo3%2BRSYd0On2MZo6XnOVvQDGSUNMwiKkwYJCYX2c4ZV4%2FWzEfxTTM9C%2Fj7Putd15XfP0cQ4A%2FbYa0bEPNKSDMZ5OGSmd1i2QsoQ%2FXkF2ToSWwL3SbyAAh2fxYuXiXYnUzD3HRtw69kWs%2Ba5TbdrwXeuCsgAh2WDoC9SPR8U%2BfWvOu5xepbKXIhkkShqFhvq7peWJJ4wclWwsjTNOMtqoHSo47LNVePRd0qi5KecKQmB84yDlUdyjEkZvNiVUSfVx3lDJGRsuwujAA%2FYakbJYqtV8kv7XpcmhzpBp45BjEdS8%2FY63LW8u1gtyl5DwTr0djggUTZn%2BcU2ivOotnD0fY0fF08UNs%2F2cF9%2Blu42QnsibTQh%2BiWMNON%2BMMGOqUBSmh%2Bh2ZWdP3SJv2NPPdBLHB4GSCdo33FqMceZWDcIlS0kR98zemP57kbc39tqjKRzUhy3JHf%2B28YU6ecQ3PMG6QhvCR6BaziRIQD3wQrfTgcxrp1LZc5BUsaLORUWqX4xAjH1jw%2FN2XKglR%2FuuIq1drTS8fjkolbnm8SGpSNDA2uN6%2FXgk5uawMUAaM%2BTC5CIuXBzGLn8gnHgsoqHxTfzUEWkYju&X-Amz-Signature=81ad67934bec0ea7497951e064f194efdee911f60ab1543deb532728da44574e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
