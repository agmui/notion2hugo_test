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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP74PYUR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBz%2By0p0VWhzCScct%2FJoboc0G5eQBUckI6nTwrEA7vwAIgJSoOR7NmQ1Ec0Pa03YsXi3H4bcy2dXTCERR3c6mF46gqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIizXlYH2suBfAN5HCrcA5smV2%2F2Sqdqt3C2loifyk%2BNoaxbMONnLnv0K8TzyX5Z%2B7sT2J42IoG9fZ8glCSo6f00i7Tko7M0PwfTKkJFvulFs4JK2mIPqqrmhBNl56fk%2FCY2N1pzoxFmXri9HFhaVgjvRmxohk1IWq45BJcv9KMvfDfsQkTqCo%2Fc0scGuAd12EjnZkpWGz9mtMPyfuWXgtOi6%2FuHO5lKBQFEk%2BUNEte7M%2FksNMr57smubekExsIKskQUy2vONSHOLjTWutT9%2FH3rW3du2MfuXJvwhjIc3wh85YWySVPlT3FyXDc5oe3lWXdgRoGJpu8zwseb%2FLZ4JskjjJAYY9MkUcQCWPSq8rpPpFgo8THLjnYaKqgPG0liCWwiNAOT1csnKRajnpA1hIhsp9srkFyLxPxfJYTAaR9olUT96DaeLDstlDWZggcWneJ58Tu8TNDzv6BBoheQce2Gvs3BCypmlWWsNivfOSjeJQ402lkUHtjkiMRpiLe72Z44wMM%2FuJsirebp%2FxQdm6mmCAkS6AbGvdP4zmRRPjoQfqmcvSUvPTv1DGt9caP0MGErEF5OKDKXWr8G94%2FBnSyYJ7UJ0BvrsOI5y%2BAi%2FYjZ0i47veFut6hQ2zGeGj5Fni08797zjpTwYhGyMPCDzsIGOqUB869d3uHyXZaQEv2OmxJ5uCOceoBub0ZMVwcjUJqHp2zZSKBoJvHrEHIp2F0wGpFks4DSyMfrxYSMpADVjZQojpJv8aUId22HqhstNBea3d5mcVHWEVmll%2F%2Bhs%2B4QSxfltzk%2BliQsuY8sBLaeavthrSpn8uphUSX8vOg3xFAGfArTk8lAilk%2B9xBF13aVzvSAQJhTy12X%2BlPw5k%2BZj01%2Bg7N4Huwh&X-Amz-Signature=9595cc64b27ce412949491c75fede0c303c6e933ba7e71565a6ae891546de608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP74PYUR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBz%2By0p0VWhzCScct%2FJoboc0G5eQBUckI6nTwrEA7vwAIgJSoOR7NmQ1Ec0Pa03YsXi3H4bcy2dXTCERR3c6mF46gqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIizXlYH2suBfAN5HCrcA5smV2%2F2Sqdqt3C2loifyk%2BNoaxbMONnLnv0K8TzyX5Z%2B7sT2J42IoG9fZ8glCSo6f00i7Tko7M0PwfTKkJFvulFs4JK2mIPqqrmhBNl56fk%2FCY2N1pzoxFmXri9HFhaVgjvRmxohk1IWq45BJcv9KMvfDfsQkTqCo%2Fc0scGuAd12EjnZkpWGz9mtMPyfuWXgtOi6%2FuHO5lKBQFEk%2BUNEte7M%2FksNMr57smubekExsIKskQUy2vONSHOLjTWutT9%2FH3rW3du2MfuXJvwhjIc3wh85YWySVPlT3FyXDc5oe3lWXdgRoGJpu8zwseb%2FLZ4JskjjJAYY9MkUcQCWPSq8rpPpFgo8THLjnYaKqgPG0liCWwiNAOT1csnKRajnpA1hIhsp9srkFyLxPxfJYTAaR9olUT96DaeLDstlDWZggcWneJ58Tu8TNDzv6BBoheQce2Gvs3BCypmlWWsNivfOSjeJQ402lkUHtjkiMRpiLe72Z44wMM%2FuJsirebp%2FxQdm6mmCAkS6AbGvdP4zmRRPjoQfqmcvSUvPTv1DGt9caP0MGErEF5OKDKXWr8G94%2FBnSyYJ7UJ0BvrsOI5y%2BAi%2FYjZ0i47veFut6hQ2zGeGj5Fni08797zjpTwYhGyMPCDzsIGOqUB869d3uHyXZaQEv2OmxJ5uCOceoBub0ZMVwcjUJqHp2zZSKBoJvHrEHIp2F0wGpFks4DSyMfrxYSMpADVjZQojpJv8aUId22HqhstNBea3d5mcVHWEVmll%2F%2Bhs%2B4QSxfltzk%2BliQsuY8sBLaeavthrSpn8uphUSX8vOg3xFAGfArTk8lAilk%2B9xBF13aVzvSAQJhTy12X%2BlPw5k%2BZj01%2Bg7N4Huwh&X-Amz-Signature=13111c97b638dba6e9356efe7bbf404ced8a4505cfabe8743eba727089196c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP74PYUR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBz%2By0p0VWhzCScct%2FJoboc0G5eQBUckI6nTwrEA7vwAIgJSoOR7NmQ1Ec0Pa03YsXi3H4bcy2dXTCERR3c6mF46gqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIizXlYH2suBfAN5HCrcA5smV2%2F2Sqdqt3C2loifyk%2BNoaxbMONnLnv0K8TzyX5Z%2B7sT2J42IoG9fZ8glCSo6f00i7Tko7M0PwfTKkJFvulFs4JK2mIPqqrmhBNl56fk%2FCY2N1pzoxFmXri9HFhaVgjvRmxohk1IWq45BJcv9KMvfDfsQkTqCo%2Fc0scGuAd12EjnZkpWGz9mtMPyfuWXgtOi6%2FuHO5lKBQFEk%2BUNEte7M%2FksNMr57smubekExsIKskQUy2vONSHOLjTWutT9%2FH3rW3du2MfuXJvwhjIc3wh85YWySVPlT3FyXDc5oe3lWXdgRoGJpu8zwseb%2FLZ4JskjjJAYY9MkUcQCWPSq8rpPpFgo8THLjnYaKqgPG0liCWwiNAOT1csnKRajnpA1hIhsp9srkFyLxPxfJYTAaR9olUT96DaeLDstlDWZggcWneJ58Tu8TNDzv6BBoheQce2Gvs3BCypmlWWsNivfOSjeJQ402lkUHtjkiMRpiLe72Z44wMM%2FuJsirebp%2FxQdm6mmCAkS6AbGvdP4zmRRPjoQfqmcvSUvPTv1DGt9caP0MGErEF5OKDKXWr8G94%2FBnSyYJ7UJ0BvrsOI5y%2BAi%2FYjZ0i47veFut6hQ2zGeGj5Fni08797zjpTwYhGyMPCDzsIGOqUB869d3uHyXZaQEv2OmxJ5uCOceoBub0ZMVwcjUJqHp2zZSKBoJvHrEHIp2F0wGpFks4DSyMfrxYSMpADVjZQojpJv8aUId22HqhstNBea3d5mcVHWEVmll%2F%2Bhs%2B4QSxfltzk%2BliQsuY8sBLaeavthrSpn8uphUSX8vOg3xFAGfArTk8lAilk%2B9xBF13aVzvSAQJhTy12X%2BlPw5k%2BZj01%2Bg7N4Huwh&X-Amz-Signature=7390c30ca584911043a851572ebbaee9ad4b69bf880f875ba16dae05c25adea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP74PYUR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBz%2By0p0VWhzCScct%2FJoboc0G5eQBUckI6nTwrEA7vwAIgJSoOR7NmQ1Ec0Pa03YsXi3H4bcy2dXTCERR3c6mF46gqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIizXlYH2suBfAN5HCrcA5smV2%2F2Sqdqt3C2loifyk%2BNoaxbMONnLnv0K8TzyX5Z%2B7sT2J42IoG9fZ8glCSo6f00i7Tko7M0PwfTKkJFvulFs4JK2mIPqqrmhBNl56fk%2FCY2N1pzoxFmXri9HFhaVgjvRmxohk1IWq45BJcv9KMvfDfsQkTqCo%2Fc0scGuAd12EjnZkpWGz9mtMPyfuWXgtOi6%2FuHO5lKBQFEk%2BUNEte7M%2FksNMr57smubekExsIKskQUy2vONSHOLjTWutT9%2FH3rW3du2MfuXJvwhjIc3wh85YWySVPlT3FyXDc5oe3lWXdgRoGJpu8zwseb%2FLZ4JskjjJAYY9MkUcQCWPSq8rpPpFgo8THLjnYaKqgPG0liCWwiNAOT1csnKRajnpA1hIhsp9srkFyLxPxfJYTAaR9olUT96DaeLDstlDWZggcWneJ58Tu8TNDzv6BBoheQce2Gvs3BCypmlWWsNivfOSjeJQ402lkUHtjkiMRpiLe72Z44wMM%2FuJsirebp%2FxQdm6mmCAkS6AbGvdP4zmRRPjoQfqmcvSUvPTv1DGt9caP0MGErEF5OKDKXWr8G94%2FBnSyYJ7UJ0BvrsOI5y%2BAi%2FYjZ0i47veFut6hQ2zGeGj5Fni08797zjpTwYhGyMPCDzsIGOqUB869d3uHyXZaQEv2OmxJ5uCOceoBub0ZMVwcjUJqHp2zZSKBoJvHrEHIp2F0wGpFks4DSyMfrxYSMpADVjZQojpJv8aUId22HqhstNBea3d5mcVHWEVmll%2F%2Bhs%2B4QSxfltzk%2BliQsuY8sBLaeavthrSpn8uphUSX8vOg3xFAGfArTk8lAilk%2B9xBF13aVzvSAQJhTy12X%2BlPw5k%2BZj01%2Bg7N4Huwh&X-Amz-Signature=9ad252a5178578e9a041c8881ed06e4a283f9f6fd8449e8527b0f6b6f0b37a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP74PYUR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBz%2By0p0VWhzCScct%2FJoboc0G5eQBUckI6nTwrEA7vwAIgJSoOR7NmQ1Ec0Pa03YsXi3H4bcy2dXTCERR3c6mF46gqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIizXlYH2suBfAN5HCrcA5smV2%2F2Sqdqt3C2loifyk%2BNoaxbMONnLnv0K8TzyX5Z%2B7sT2J42IoG9fZ8glCSo6f00i7Tko7M0PwfTKkJFvulFs4JK2mIPqqrmhBNl56fk%2FCY2N1pzoxFmXri9HFhaVgjvRmxohk1IWq45BJcv9KMvfDfsQkTqCo%2Fc0scGuAd12EjnZkpWGz9mtMPyfuWXgtOi6%2FuHO5lKBQFEk%2BUNEte7M%2FksNMr57smubekExsIKskQUy2vONSHOLjTWutT9%2FH3rW3du2MfuXJvwhjIc3wh85YWySVPlT3FyXDc5oe3lWXdgRoGJpu8zwseb%2FLZ4JskjjJAYY9MkUcQCWPSq8rpPpFgo8THLjnYaKqgPG0liCWwiNAOT1csnKRajnpA1hIhsp9srkFyLxPxfJYTAaR9olUT96DaeLDstlDWZggcWneJ58Tu8TNDzv6BBoheQce2Gvs3BCypmlWWsNivfOSjeJQ402lkUHtjkiMRpiLe72Z44wMM%2FuJsirebp%2FxQdm6mmCAkS6AbGvdP4zmRRPjoQfqmcvSUvPTv1DGt9caP0MGErEF5OKDKXWr8G94%2FBnSyYJ7UJ0BvrsOI5y%2BAi%2FYjZ0i47veFut6hQ2zGeGj5Fni08797zjpTwYhGyMPCDzsIGOqUB869d3uHyXZaQEv2OmxJ5uCOceoBub0ZMVwcjUJqHp2zZSKBoJvHrEHIp2F0wGpFks4DSyMfrxYSMpADVjZQojpJv8aUId22HqhstNBea3d5mcVHWEVmll%2F%2Bhs%2B4QSxfltzk%2BliQsuY8sBLaeavthrSpn8uphUSX8vOg3xFAGfArTk8lAilk%2B9xBF13aVzvSAQJhTy12X%2BlPw5k%2BZj01%2Bg7N4Huwh&X-Amz-Signature=8860732f36508341f34c212f939b1ef0a4c54bab08220bfa54aa8a9520cdc8fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP74PYUR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBz%2By0p0VWhzCScct%2FJoboc0G5eQBUckI6nTwrEA7vwAIgJSoOR7NmQ1Ec0Pa03YsXi3H4bcy2dXTCERR3c6mF46gqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIizXlYH2suBfAN5HCrcA5smV2%2F2Sqdqt3C2loifyk%2BNoaxbMONnLnv0K8TzyX5Z%2B7sT2J42IoG9fZ8glCSo6f00i7Tko7M0PwfTKkJFvulFs4JK2mIPqqrmhBNl56fk%2FCY2N1pzoxFmXri9HFhaVgjvRmxohk1IWq45BJcv9KMvfDfsQkTqCo%2Fc0scGuAd12EjnZkpWGz9mtMPyfuWXgtOi6%2FuHO5lKBQFEk%2BUNEte7M%2FksNMr57smubekExsIKskQUy2vONSHOLjTWutT9%2FH3rW3du2MfuXJvwhjIc3wh85YWySVPlT3FyXDc5oe3lWXdgRoGJpu8zwseb%2FLZ4JskjjJAYY9MkUcQCWPSq8rpPpFgo8THLjnYaKqgPG0liCWwiNAOT1csnKRajnpA1hIhsp9srkFyLxPxfJYTAaR9olUT96DaeLDstlDWZggcWneJ58Tu8TNDzv6BBoheQce2Gvs3BCypmlWWsNivfOSjeJQ402lkUHtjkiMRpiLe72Z44wMM%2FuJsirebp%2FxQdm6mmCAkS6AbGvdP4zmRRPjoQfqmcvSUvPTv1DGt9caP0MGErEF5OKDKXWr8G94%2FBnSyYJ7UJ0BvrsOI5y%2BAi%2FYjZ0i47veFut6hQ2zGeGj5Fni08797zjpTwYhGyMPCDzsIGOqUB869d3uHyXZaQEv2OmxJ5uCOceoBub0ZMVwcjUJqHp2zZSKBoJvHrEHIp2F0wGpFks4DSyMfrxYSMpADVjZQojpJv8aUId22HqhstNBea3d5mcVHWEVmll%2F%2Bhs%2B4QSxfltzk%2BliQsuY8sBLaeavthrSpn8uphUSX8vOg3xFAGfArTk8lAilk%2B9xBF13aVzvSAQJhTy12X%2BlPw5k%2BZj01%2Bg7N4Huwh&X-Amz-Signature=87686f6b1d2c89aafd61ffbf6a517a54abdcf912672e8cac253bbeb52d586532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
