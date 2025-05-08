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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOMEH63%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBEgm1AbjJLnjY5WOSfTGiiDZ1c1TQ4tw6BvVyh5u0MAiEA1juefF0emk574mUXalB3ONDsH3rGx0WfA05gLvxCgGEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJ8Gm9TT7I%2FlN%2BplWCrcA6DFn7qnKGtsxEtq5EkMdwPiEaSHWe4t2K3VCtvHfMfKnaNOioXlXIF1UZux0oJpn0h9TpymF8fA0x%2FLD8wmGbYaEWwS0NjXDbNklRoGU8y1POPYds9pVBBz1cZ%2BhsRh1i54C1X0xXCG6wRgd3ZNmn4QD2wz50e4rrRe4LQarvP9cdhCnSH3INYnTq9nlPug9RidqDLfr353gI%2Fnl3t5kYOEf3TRvsvLrjWZi7yPA5g9Lv6XThTnrxcmi69E6MBxNRlf%2FlZULCt1NiZJn8%2FdqrxvX0g3vdZKecRO9W4TS6hUzfqDa%2BwxPxzOGRh8L6EtVrznZEXHd8PoXV5hN6LZYLieawg%2Ff3wF4y6LXw9dPJE1To6zAqqBXIztXRYYJEgBMPn6x4mu9R%2BvGsK2%2BSOyXTkcx%2BtonexV44E9AN8OvpbhRYtgRwlZlYgeOdC4R5oQ4J2oCnTB9DXzMGM0uBGdIvOEN0htM1jhLn2EBadZ3AoJ1a47WZk0O%2FX1pTRjf4wRuDYCrBC1rB0uU4mNMAvi0pjuL33IG2JLZfCrlkJrwd3TPvmxRK5u%2B9fV2kOW4W0uttu5yaJGMgj2zrApRbZ%2Bza2RnmQJ17ehLMAesZEJvMJID9jkVISpAE0zWntAMPnk8sAGOqUBZ%2Blg8WBO16EyZ%2BhjL6sRSNkYoe0BK1%2BfSqN4tm3V5abUCd3k7WP9uSXJjlS%2FFbDHQ%2BSyumugTQywUQNBErEVVUt6s%2BsGlc5mFCDJhiwyLUkWCluRF%2F9f5yqt5Iei1RbeHidlNL8N6SFNmt7iYu84CkhIc4pjIwhDme1vxzb6onN9%2F3CbCWAXymBKOYMavRiCoS2SVjCXKfBvxvbj20I2Vv38%2FeMS&X-Amz-Signature=6cd0e04ad4d2ce0b7ca27dc609553c2a6aca1c84098546e8d13d852e172ce12f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOMEH63%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBEgm1AbjJLnjY5WOSfTGiiDZ1c1TQ4tw6BvVyh5u0MAiEA1juefF0emk574mUXalB3ONDsH3rGx0WfA05gLvxCgGEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJ8Gm9TT7I%2FlN%2BplWCrcA6DFn7qnKGtsxEtq5EkMdwPiEaSHWe4t2K3VCtvHfMfKnaNOioXlXIF1UZux0oJpn0h9TpymF8fA0x%2FLD8wmGbYaEWwS0NjXDbNklRoGU8y1POPYds9pVBBz1cZ%2BhsRh1i54C1X0xXCG6wRgd3ZNmn4QD2wz50e4rrRe4LQarvP9cdhCnSH3INYnTq9nlPug9RidqDLfr353gI%2Fnl3t5kYOEf3TRvsvLrjWZi7yPA5g9Lv6XThTnrxcmi69E6MBxNRlf%2FlZULCt1NiZJn8%2FdqrxvX0g3vdZKecRO9W4TS6hUzfqDa%2BwxPxzOGRh8L6EtVrznZEXHd8PoXV5hN6LZYLieawg%2Ff3wF4y6LXw9dPJE1To6zAqqBXIztXRYYJEgBMPn6x4mu9R%2BvGsK2%2BSOyXTkcx%2BtonexV44E9AN8OvpbhRYtgRwlZlYgeOdC4R5oQ4J2oCnTB9DXzMGM0uBGdIvOEN0htM1jhLn2EBadZ3AoJ1a47WZk0O%2FX1pTRjf4wRuDYCrBC1rB0uU4mNMAvi0pjuL33IG2JLZfCrlkJrwd3TPvmxRK5u%2B9fV2kOW4W0uttu5yaJGMgj2zrApRbZ%2Bza2RnmQJ17ehLMAesZEJvMJID9jkVISpAE0zWntAMPnk8sAGOqUBZ%2Blg8WBO16EyZ%2BhjL6sRSNkYoe0BK1%2BfSqN4tm3V5abUCd3k7WP9uSXJjlS%2FFbDHQ%2BSyumugTQywUQNBErEVVUt6s%2BsGlc5mFCDJhiwyLUkWCluRF%2F9f5yqt5Iei1RbeHidlNL8N6SFNmt7iYu84CkhIc4pjIwhDme1vxzb6onN9%2F3CbCWAXymBKOYMavRiCoS2SVjCXKfBvxvbj20I2Vv38%2FeMS&X-Amz-Signature=cd9664c485a2f497c60f85ee0db720329c29d28eebc5b461f785116757dff6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOMEH63%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBEgm1AbjJLnjY5WOSfTGiiDZ1c1TQ4tw6BvVyh5u0MAiEA1juefF0emk574mUXalB3ONDsH3rGx0WfA05gLvxCgGEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJ8Gm9TT7I%2FlN%2BplWCrcA6DFn7qnKGtsxEtq5EkMdwPiEaSHWe4t2K3VCtvHfMfKnaNOioXlXIF1UZux0oJpn0h9TpymF8fA0x%2FLD8wmGbYaEWwS0NjXDbNklRoGU8y1POPYds9pVBBz1cZ%2BhsRh1i54C1X0xXCG6wRgd3ZNmn4QD2wz50e4rrRe4LQarvP9cdhCnSH3INYnTq9nlPug9RidqDLfr353gI%2Fnl3t5kYOEf3TRvsvLrjWZi7yPA5g9Lv6XThTnrxcmi69E6MBxNRlf%2FlZULCt1NiZJn8%2FdqrxvX0g3vdZKecRO9W4TS6hUzfqDa%2BwxPxzOGRh8L6EtVrznZEXHd8PoXV5hN6LZYLieawg%2Ff3wF4y6LXw9dPJE1To6zAqqBXIztXRYYJEgBMPn6x4mu9R%2BvGsK2%2BSOyXTkcx%2BtonexV44E9AN8OvpbhRYtgRwlZlYgeOdC4R5oQ4J2oCnTB9DXzMGM0uBGdIvOEN0htM1jhLn2EBadZ3AoJ1a47WZk0O%2FX1pTRjf4wRuDYCrBC1rB0uU4mNMAvi0pjuL33IG2JLZfCrlkJrwd3TPvmxRK5u%2B9fV2kOW4W0uttu5yaJGMgj2zrApRbZ%2Bza2RnmQJ17ehLMAesZEJvMJID9jkVISpAE0zWntAMPnk8sAGOqUBZ%2Blg8WBO16EyZ%2BhjL6sRSNkYoe0BK1%2BfSqN4tm3V5abUCd3k7WP9uSXJjlS%2FFbDHQ%2BSyumugTQywUQNBErEVVUt6s%2BsGlc5mFCDJhiwyLUkWCluRF%2F9f5yqt5Iei1RbeHidlNL8N6SFNmt7iYu84CkhIc4pjIwhDme1vxzb6onN9%2F3CbCWAXymBKOYMavRiCoS2SVjCXKfBvxvbj20I2Vv38%2FeMS&X-Amz-Signature=724132eaf460d001574022b97507b9864a19a0cab3ded90918cc49c28b991a96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOMEH63%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBEgm1AbjJLnjY5WOSfTGiiDZ1c1TQ4tw6BvVyh5u0MAiEA1juefF0emk574mUXalB3ONDsH3rGx0WfA05gLvxCgGEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJ8Gm9TT7I%2FlN%2BplWCrcA6DFn7qnKGtsxEtq5EkMdwPiEaSHWe4t2K3VCtvHfMfKnaNOioXlXIF1UZux0oJpn0h9TpymF8fA0x%2FLD8wmGbYaEWwS0NjXDbNklRoGU8y1POPYds9pVBBz1cZ%2BhsRh1i54C1X0xXCG6wRgd3ZNmn4QD2wz50e4rrRe4LQarvP9cdhCnSH3INYnTq9nlPug9RidqDLfr353gI%2Fnl3t5kYOEf3TRvsvLrjWZi7yPA5g9Lv6XThTnrxcmi69E6MBxNRlf%2FlZULCt1NiZJn8%2FdqrxvX0g3vdZKecRO9W4TS6hUzfqDa%2BwxPxzOGRh8L6EtVrznZEXHd8PoXV5hN6LZYLieawg%2Ff3wF4y6LXw9dPJE1To6zAqqBXIztXRYYJEgBMPn6x4mu9R%2BvGsK2%2BSOyXTkcx%2BtonexV44E9AN8OvpbhRYtgRwlZlYgeOdC4R5oQ4J2oCnTB9DXzMGM0uBGdIvOEN0htM1jhLn2EBadZ3AoJ1a47WZk0O%2FX1pTRjf4wRuDYCrBC1rB0uU4mNMAvi0pjuL33IG2JLZfCrlkJrwd3TPvmxRK5u%2B9fV2kOW4W0uttu5yaJGMgj2zrApRbZ%2Bza2RnmQJ17ehLMAesZEJvMJID9jkVISpAE0zWntAMPnk8sAGOqUBZ%2Blg8WBO16EyZ%2BhjL6sRSNkYoe0BK1%2BfSqN4tm3V5abUCd3k7WP9uSXJjlS%2FFbDHQ%2BSyumugTQywUQNBErEVVUt6s%2BsGlc5mFCDJhiwyLUkWCluRF%2F9f5yqt5Iei1RbeHidlNL8N6SFNmt7iYu84CkhIc4pjIwhDme1vxzb6onN9%2F3CbCWAXymBKOYMavRiCoS2SVjCXKfBvxvbj20I2Vv38%2FeMS&X-Amz-Signature=fd47c7668b967cd7d4f6cdac0f7ca630385589b1abbf45b48751fd9462eb697e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOMEH63%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBEgm1AbjJLnjY5WOSfTGiiDZ1c1TQ4tw6BvVyh5u0MAiEA1juefF0emk574mUXalB3ONDsH3rGx0WfA05gLvxCgGEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJ8Gm9TT7I%2FlN%2BplWCrcA6DFn7qnKGtsxEtq5EkMdwPiEaSHWe4t2K3VCtvHfMfKnaNOioXlXIF1UZux0oJpn0h9TpymF8fA0x%2FLD8wmGbYaEWwS0NjXDbNklRoGU8y1POPYds9pVBBz1cZ%2BhsRh1i54C1X0xXCG6wRgd3ZNmn4QD2wz50e4rrRe4LQarvP9cdhCnSH3INYnTq9nlPug9RidqDLfr353gI%2Fnl3t5kYOEf3TRvsvLrjWZi7yPA5g9Lv6XThTnrxcmi69E6MBxNRlf%2FlZULCt1NiZJn8%2FdqrxvX0g3vdZKecRO9W4TS6hUzfqDa%2BwxPxzOGRh8L6EtVrznZEXHd8PoXV5hN6LZYLieawg%2Ff3wF4y6LXw9dPJE1To6zAqqBXIztXRYYJEgBMPn6x4mu9R%2BvGsK2%2BSOyXTkcx%2BtonexV44E9AN8OvpbhRYtgRwlZlYgeOdC4R5oQ4J2oCnTB9DXzMGM0uBGdIvOEN0htM1jhLn2EBadZ3AoJ1a47WZk0O%2FX1pTRjf4wRuDYCrBC1rB0uU4mNMAvi0pjuL33IG2JLZfCrlkJrwd3TPvmxRK5u%2B9fV2kOW4W0uttu5yaJGMgj2zrApRbZ%2Bza2RnmQJ17ehLMAesZEJvMJID9jkVISpAE0zWntAMPnk8sAGOqUBZ%2Blg8WBO16EyZ%2BhjL6sRSNkYoe0BK1%2BfSqN4tm3V5abUCd3k7WP9uSXJjlS%2FFbDHQ%2BSyumugTQywUQNBErEVVUt6s%2BsGlc5mFCDJhiwyLUkWCluRF%2F9f5yqt5Iei1RbeHidlNL8N6SFNmt7iYu84CkhIc4pjIwhDme1vxzb6onN9%2F3CbCWAXymBKOYMavRiCoS2SVjCXKfBvxvbj20I2Vv38%2FeMS&X-Amz-Signature=1c4ef684c897e2982da40e4235efda9ec935eb5518947c25d9d1e19e84a8763b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOMEH63%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBEgm1AbjJLnjY5WOSfTGiiDZ1c1TQ4tw6BvVyh5u0MAiEA1juefF0emk574mUXalB3ONDsH3rGx0WfA05gLvxCgGEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJ8Gm9TT7I%2FlN%2BplWCrcA6DFn7qnKGtsxEtq5EkMdwPiEaSHWe4t2K3VCtvHfMfKnaNOioXlXIF1UZux0oJpn0h9TpymF8fA0x%2FLD8wmGbYaEWwS0NjXDbNklRoGU8y1POPYds9pVBBz1cZ%2BhsRh1i54C1X0xXCG6wRgd3ZNmn4QD2wz50e4rrRe4LQarvP9cdhCnSH3INYnTq9nlPug9RidqDLfr353gI%2Fnl3t5kYOEf3TRvsvLrjWZi7yPA5g9Lv6XThTnrxcmi69E6MBxNRlf%2FlZULCt1NiZJn8%2FdqrxvX0g3vdZKecRO9W4TS6hUzfqDa%2BwxPxzOGRh8L6EtVrznZEXHd8PoXV5hN6LZYLieawg%2Ff3wF4y6LXw9dPJE1To6zAqqBXIztXRYYJEgBMPn6x4mu9R%2BvGsK2%2BSOyXTkcx%2BtonexV44E9AN8OvpbhRYtgRwlZlYgeOdC4R5oQ4J2oCnTB9DXzMGM0uBGdIvOEN0htM1jhLn2EBadZ3AoJ1a47WZk0O%2FX1pTRjf4wRuDYCrBC1rB0uU4mNMAvi0pjuL33IG2JLZfCrlkJrwd3TPvmxRK5u%2B9fV2kOW4W0uttu5yaJGMgj2zrApRbZ%2Bza2RnmQJ17ehLMAesZEJvMJID9jkVISpAE0zWntAMPnk8sAGOqUBZ%2Blg8WBO16EyZ%2BhjL6sRSNkYoe0BK1%2BfSqN4tm3V5abUCd3k7WP9uSXJjlS%2FFbDHQ%2BSyumugTQywUQNBErEVVUt6s%2BsGlc5mFCDJhiwyLUkWCluRF%2F9f5yqt5Iei1RbeHidlNL8N6SFNmt7iYu84CkhIc4pjIwhDme1vxzb6onN9%2F3CbCWAXymBKOYMavRiCoS2SVjCXKfBvxvbj20I2Vv38%2FeMS&X-Amz-Signature=a67276005525347d5090b5e57dcb067dc31f402cb456a6b1286fbff62a89c115&X-Amz-SignedHeaders=host&x-id=GetObject)
