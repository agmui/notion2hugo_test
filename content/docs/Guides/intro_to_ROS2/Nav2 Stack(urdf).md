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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCOV6XD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGdlFYQrOqpa01D2xdmpsBTksVLnmNPieMibes5j0kxsAiEAn69gpZCOu3RjQ1xOHXHJRKAMfzetyPayBA7blXC6r%2Foq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDWJwAgLy1najuS2tSrcA%2B3esRKLymBHSvFG3wVsZMxFkBBZUj%2BTL33xH%2FD6fbcfq%2BzTDpe1sxQ9Zo2axJsKbSTrnWoKSKwzTFL1OM9F3jMMpDCy7x2Bq85GHmGbHjTEx67s5WMZKEaKIkCBLAYyhvw%2Fhx9rPuHrjpFzTfQtUw3ygd8ArAg%2Fh9uUuoNC0DsHNzS9YeTloWlqtnLjkmHERtbsf5a0wCmRAnV6a7JrbOpmN8kk0WIy1UgWaxqDJ27d9HqXu419VVgzpreEkpnng2iTedurxALToakw7wnEwQ0CATyQMNcUOOBIJfIgdGi8R9XKcT366dWI1L8ozv90YxopO0cEXHaSPjgSoBSFAcj%2F%2BMHjWUPsLvRau09DimbY8i0yrJY082woINrXSb0HX8oIeUzZ3IQsRxWqSulXHPf%2FNUicDAY79oXOJ%2F21%2F5je7TA45jvvq9aNw8fxw4weGOXceUFyGljYO7rTgP5DSB68EdPRAzeXHwBRTdyZzVhIR3RSFJau8M8FVuAUv%2BWMCSzmm0%2FrkwcxkrE3WgBcYg%2ByI7tUwbplEX01hYGttgsSnsetrcUytJc6d9Y%2Fq%2F86cE7TJo%2BHma9R%2By2HfrZ9pSfgXhV9ZlD0iWMVsRAfu9zTdjGcLZKDlmDviCQbMITmxL0GOqUBgTLpWT2y97wZAElVlJQCFU4FpehwoAZBjMy%2B7Z8GyFmsyoTGQEMwq84%2B%2BSXlnADck%2B5S3gFL4geNxcgtAFnIy%2Bpt2gQn8%2FZTRlsxIOD6LSOK%2FcFuml5%2FFCJNCO%2F%2FOWyMidP82RNwGsJfVdURiCB5et4qVh53mgXmbyjrcJ8%2FBuwiWrQWqynIMMNMSe7kav2%2F5%2BHdfDpy%2BDZp4zSoDFN38DzYO%2Bvt&X-Amz-Signature=ff5b507c83cc8e4354ef707b0d01e7e84f8971433279b61c7f6cc971d8dc6ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCOV6XD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGdlFYQrOqpa01D2xdmpsBTksVLnmNPieMibes5j0kxsAiEAn69gpZCOu3RjQ1xOHXHJRKAMfzetyPayBA7blXC6r%2Foq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDWJwAgLy1najuS2tSrcA%2B3esRKLymBHSvFG3wVsZMxFkBBZUj%2BTL33xH%2FD6fbcfq%2BzTDpe1sxQ9Zo2axJsKbSTrnWoKSKwzTFL1OM9F3jMMpDCy7x2Bq85GHmGbHjTEx67s5WMZKEaKIkCBLAYyhvw%2Fhx9rPuHrjpFzTfQtUw3ygd8ArAg%2Fh9uUuoNC0DsHNzS9YeTloWlqtnLjkmHERtbsf5a0wCmRAnV6a7JrbOpmN8kk0WIy1UgWaxqDJ27d9HqXu419VVgzpreEkpnng2iTedurxALToakw7wnEwQ0CATyQMNcUOOBIJfIgdGi8R9XKcT366dWI1L8ozv90YxopO0cEXHaSPjgSoBSFAcj%2F%2BMHjWUPsLvRau09DimbY8i0yrJY082woINrXSb0HX8oIeUzZ3IQsRxWqSulXHPf%2FNUicDAY79oXOJ%2F21%2F5je7TA45jvvq9aNw8fxw4weGOXceUFyGljYO7rTgP5DSB68EdPRAzeXHwBRTdyZzVhIR3RSFJau8M8FVuAUv%2BWMCSzmm0%2FrkwcxkrE3WgBcYg%2ByI7tUwbplEX01hYGttgsSnsetrcUytJc6d9Y%2Fq%2F86cE7TJo%2BHma9R%2By2HfrZ9pSfgXhV9ZlD0iWMVsRAfu9zTdjGcLZKDlmDviCQbMITmxL0GOqUBgTLpWT2y97wZAElVlJQCFU4FpehwoAZBjMy%2B7Z8GyFmsyoTGQEMwq84%2B%2BSXlnADck%2B5S3gFL4geNxcgtAFnIy%2Bpt2gQn8%2FZTRlsxIOD6LSOK%2FcFuml5%2FFCJNCO%2F%2FOWyMidP82RNwGsJfVdURiCB5et4qVh53mgXmbyjrcJ8%2FBuwiWrQWqynIMMNMSe7kav2%2F5%2BHdfDpy%2BDZp4zSoDFN38DzYO%2Bvt&X-Amz-Signature=c5f0e309a3aea544589fe8c6dec2d7e811729c480486257be964a67d8c00c3b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCOV6XD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGdlFYQrOqpa01D2xdmpsBTksVLnmNPieMibes5j0kxsAiEAn69gpZCOu3RjQ1xOHXHJRKAMfzetyPayBA7blXC6r%2Foq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDWJwAgLy1najuS2tSrcA%2B3esRKLymBHSvFG3wVsZMxFkBBZUj%2BTL33xH%2FD6fbcfq%2BzTDpe1sxQ9Zo2axJsKbSTrnWoKSKwzTFL1OM9F3jMMpDCy7x2Bq85GHmGbHjTEx67s5WMZKEaKIkCBLAYyhvw%2Fhx9rPuHrjpFzTfQtUw3ygd8ArAg%2Fh9uUuoNC0DsHNzS9YeTloWlqtnLjkmHERtbsf5a0wCmRAnV6a7JrbOpmN8kk0WIy1UgWaxqDJ27d9HqXu419VVgzpreEkpnng2iTedurxALToakw7wnEwQ0CATyQMNcUOOBIJfIgdGi8R9XKcT366dWI1L8ozv90YxopO0cEXHaSPjgSoBSFAcj%2F%2BMHjWUPsLvRau09DimbY8i0yrJY082woINrXSb0HX8oIeUzZ3IQsRxWqSulXHPf%2FNUicDAY79oXOJ%2F21%2F5je7TA45jvvq9aNw8fxw4weGOXceUFyGljYO7rTgP5DSB68EdPRAzeXHwBRTdyZzVhIR3RSFJau8M8FVuAUv%2BWMCSzmm0%2FrkwcxkrE3WgBcYg%2ByI7tUwbplEX01hYGttgsSnsetrcUytJc6d9Y%2Fq%2F86cE7TJo%2BHma9R%2By2HfrZ9pSfgXhV9ZlD0iWMVsRAfu9zTdjGcLZKDlmDviCQbMITmxL0GOqUBgTLpWT2y97wZAElVlJQCFU4FpehwoAZBjMy%2B7Z8GyFmsyoTGQEMwq84%2B%2BSXlnADck%2B5S3gFL4geNxcgtAFnIy%2Bpt2gQn8%2FZTRlsxIOD6LSOK%2FcFuml5%2FFCJNCO%2F%2FOWyMidP82RNwGsJfVdURiCB5et4qVh53mgXmbyjrcJ8%2FBuwiWrQWqynIMMNMSe7kav2%2F5%2BHdfDpy%2BDZp4zSoDFN38DzYO%2Bvt&X-Amz-Signature=580bd35fc16b5bc42bfcb3ffef494faef74573e7479b0ccd21d41f9ae0288082&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCOV6XD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGdlFYQrOqpa01D2xdmpsBTksVLnmNPieMibes5j0kxsAiEAn69gpZCOu3RjQ1xOHXHJRKAMfzetyPayBA7blXC6r%2Foq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDWJwAgLy1najuS2tSrcA%2B3esRKLymBHSvFG3wVsZMxFkBBZUj%2BTL33xH%2FD6fbcfq%2BzTDpe1sxQ9Zo2axJsKbSTrnWoKSKwzTFL1OM9F3jMMpDCy7x2Bq85GHmGbHjTEx67s5WMZKEaKIkCBLAYyhvw%2Fhx9rPuHrjpFzTfQtUw3ygd8ArAg%2Fh9uUuoNC0DsHNzS9YeTloWlqtnLjkmHERtbsf5a0wCmRAnV6a7JrbOpmN8kk0WIy1UgWaxqDJ27d9HqXu419VVgzpreEkpnng2iTedurxALToakw7wnEwQ0CATyQMNcUOOBIJfIgdGi8R9XKcT366dWI1L8ozv90YxopO0cEXHaSPjgSoBSFAcj%2F%2BMHjWUPsLvRau09DimbY8i0yrJY082woINrXSb0HX8oIeUzZ3IQsRxWqSulXHPf%2FNUicDAY79oXOJ%2F21%2F5je7TA45jvvq9aNw8fxw4weGOXceUFyGljYO7rTgP5DSB68EdPRAzeXHwBRTdyZzVhIR3RSFJau8M8FVuAUv%2BWMCSzmm0%2FrkwcxkrE3WgBcYg%2ByI7tUwbplEX01hYGttgsSnsetrcUytJc6d9Y%2Fq%2F86cE7TJo%2BHma9R%2By2HfrZ9pSfgXhV9ZlD0iWMVsRAfu9zTdjGcLZKDlmDviCQbMITmxL0GOqUBgTLpWT2y97wZAElVlJQCFU4FpehwoAZBjMy%2B7Z8GyFmsyoTGQEMwq84%2B%2BSXlnADck%2B5S3gFL4geNxcgtAFnIy%2Bpt2gQn8%2FZTRlsxIOD6LSOK%2FcFuml5%2FFCJNCO%2F%2FOWyMidP82RNwGsJfVdURiCB5et4qVh53mgXmbyjrcJ8%2FBuwiWrQWqynIMMNMSe7kav2%2F5%2BHdfDpy%2BDZp4zSoDFN38DzYO%2Bvt&X-Amz-Signature=7183162476e650a731739e625e202fbd7f5ce46ceb9f11a8f23f7cb2c2fda2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCOV6XD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGdlFYQrOqpa01D2xdmpsBTksVLnmNPieMibes5j0kxsAiEAn69gpZCOu3RjQ1xOHXHJRKAMfzetyPayBA7blXC6r%2Foq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDWJwAgLy1najuS2tSrcA%2B3esRKLymBHSvFG3wVsZMxFkBBZUj%2BTL33xH%2FD6fbcfq%2BzTDpe1sxQ9Zo2axJsKbSTrnWoKSKwzTFL1OM9F3jMMpDCy7x2Bq85GHmGbHjTEx67s5WMZKEaKIkCBLAYyhvw%2Fhx9rPuHrjpFzTfQtUw3ygd8ArAg%2Fh9uUuoNC0DsHNzS9YeTloWlqtnLjkmHERtbsf5a0wCmRAnV6a7JrbOpmN8kk0WIy1UgWaxqDJ27d9HqXu419VVgzpreEkpnng2iTedurxALToakw7wnEwQ0CATyQMNcUOOBIJfIgdGi8R9XKcT366dWI1L8ozv90YxopO0cEXHaSPjgSoBSFAcj%2F%2BMHjWUPsLvRau09DimbY8i0yrJY082woINrXSb0HX8oIeUzZ3IQsRxWqSulXHPf%2FNUicDAY79oXOJ%2F21%2F5je7TA45jvvq9aNw8fxw4weGOXceUFyGljYO7rTgP5DSB68EdPRAzeXHwBRTdyZzVhIR3RSFJau8M8FVuAUv%2BWMCSzmm0%2FrkwcxkrE3WgBcYg%2ByI7tUwbplEX01hYGttgsSnsetrcUytJc6d9Y%2Fq%2F86cE7TJo%2BHma9R%2By2HfrZ9pSfgXhV9ZlD0iWMVsRAfu9zTdjGcLZKDlmDviCQbMITmxL0GOqUBgTLpWT2y97wZAElVlJQCFU4FpehwoAZBjMy%2B7Z8GyFmsyoTGQEMwq84%2B%2BSXlnADck%2B5S3gFL4geNxcgtAFnIy%2Bpt2gQn8%2FZTRlsxIOD6LSOK%2FcFuml5%2FFCJNCO%2F%2FOWyMidP82RNwGsJfVdURiCB5et4qVh53mgXmbyjrcJ8%2FBuwiWrQWqynIMMNMSe7kav2%2F5%2BHdfDpy%2BDZp4zSoDFN38DzYO%2Bvt&X-Amz-Signature=7bd23aae0fae1877763e6802d790feed0bf53f37b1ec7cf20700158aed3bfcaf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCOV6XD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGdlFYQrOqpa01D2xdmpsBTksVLnmNPieMibes5j0kxsAiEAn69gpZCOu3RjQ1xOHXHJRKAMfzetyPayBA7blXC6r%2Foq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDWJwAgLy1najuS2tSrcA%2B3esRKLymBHSvFG3wVsZMxFkBBZUj%2BTL33xH%2FD6fbcfq%2BzTDpe1sxQ9Zo2axJsKbSTrnWoKSKwzTFL1OM9F3jMMpDCy7x2Bq85GHmGbHjTEx67s5WMZKEaKIkCBLAYyhvw%2Fhx9rPuHrjpFzTfQtUw3ygd8ArAg%2Fh9uUuoNC0DsHNzS9YeTloWlqtnLjkmHERtbsf5a0wCmRAnV6a7JrbOpmN8kk0WIy1UgWaxqDJ27d9HqXu419VVgzpreEkpnng2iTedurxALToakw7wnEwQ0CATyQMNcUOOBIJfIgdGi8R9XKcT366dWI1L8ozv90YxopO0cEXHaSPjgSoBSFAcj%2F%2BMHjWUPsLvRau09DimbY8i0yrJY082woINrXSb0HX8oIeUzZ3IQsRxWqSulXHPf%2FNUicDAY79oXOJ%2F21%2F5je7TA45jvvq9aNw8fxw4weGOXceUFyGljYO7rTgP5DSB68EdPRAzeXHwBRTdyZzVhIR3RSFJau8M8FVuAUv%2BWMCSzmm0%2FrkwcxkrE3WgBcYg%2ByI7tUwbplEX01hYGttgsSnsetrcUytJc6d9Y%2Fq%2F86cE7TJo%2BHma9R%2By2HfrZ9pSfgXhV9ZlD0iWMVsRAfu9zTdjGcLZKDlmDviCQbMITmxL0GOqUBgTLpWT2y97wZAElVlJQCFU4FpehwoAZBjMy%2B7Z8GyFmsyoTGQEMwq84%2B%2BSXlnADck%2B5S3gFL4geNxcgtAFnIy%2Bpt2gQn8%2FZTRlsxIOD6LSOK%2FcFuml5%2FFCJNCO%2F%2FOWyMidP82RNwGsJfVdURiCB5et4qVh53mgXmbyjrcJ8%2FBuwiWrQWqynIMMNMSe7kav2%2F5%2BHdfDpy%2BDZp4zSoDFN38DzYO%2Bvt&X-Amz-Signature=0760ff621640459964d4d16c9cb1028ae5c8ddbe2c21dd268745572275ae2818&X-Amz-SignedHeaders=host&x-id=GetObject)
