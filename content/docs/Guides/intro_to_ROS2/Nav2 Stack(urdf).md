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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IT4C67Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCajUFn2gR0ktTDqf0fII2MKZUEcsmFdGJi0lNiRit3kgIgC3PL0%2FiuYvQdmv2JIHk5gNg9vE11t%2Fgte4F09Ut%2FqUgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg0sbrOTih%2F0I5eHCrcAylKCDrZAVYuPwwXSYr1jD%2FHDvKTLsya8TLljbdHwSI9MfiyTgxDw0mu9AKcRGuNmg7mipFV8hXg8mtz0bI7gAPQFWbB6yPRFIubSkASKQi%2B2qQv%2FxTH8BqCeHU8tky9OHRcqVPSNwLD7t5kcrdFkc3JgrKkShTp%2F%2FbfkhiBzVI10dsl9%2FG33gOsbo2Bdo7GT5p3D0fRmdQTIMF2cPXRnX%2FpXQUc9ZLolzIG5hK2QkJkGk%2FOYAVLnMsbaAAaH07uWegTWDdNC85yxKnGHOAFAJZcg9B5wMGfG4g%2FxJwzrObJgCJrrT0%2BiH69ymZHCD05pcJjQcKVoDxFyd%2FE%2B7g1Zfle0K3O5bk868aBVw8c0s7Le7VdjKfHE4UQW5LkJol4wCikGLV9ocYxGYhVd55GKWg5CYN0n3iol%2Ba4p%2BzR1iCK4kdY6cOFni4u18DUrJQu84kwbet9uOobulvOXBx9%2BpBYftDf6PtjBfX5FLlWiGVfwdZbUXdGADbsn%2FxWE%2BIQiB4pl1YfCz%2BCmU6PO46BpRv481KdTcrmfVoMgmEaqGkNUOcNj%2Fvxj%2FphU9Ab0wrUe8%2F1t2qeWWWFUjR02si4YZK9kk707ORBYC%2FY6w027IX4M6ejArnRWV16EtWCMP738r4GOqUBWbR52jJKYFKxGp6G%2FrIyoaZwiWHBPHDi1fbaFZOMT%2FDtddirZG0sdQEe5uzqAmKT0wKPIcySketZdZQEK0Ljy3XXLfiOXsyrLvw8PV2tLWm49qMFNS4uRVzozqMSujsOp35legAdUq0UBxFt6jVM%2BhbJ2MMumSP315dBPQ5LffQ0KSqhC%2BAGGz0B3GA%2FBjWdMCa9hFTICm%2FpRmk4vINJHV68ooNm&X-Amz-Signature=4236e9b7e645741fb121cb77c9d6a51c87671129a6b93eef1833cd88b1ae349c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IT4C67Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCajUFn2gR0ktTDqf0fII2MKZUEcsmFdGJi0lNiRit3kgIgC3PL0%2FiuYvQdmv2JIHk5gNg9vE11t%2Fgte4F09Ut%2FqUgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg0sbrOTih%2F0I5eHCrcAylKCDrZAVYuPwwXSYr1jD%2FHDvKTLsya8TLljbdHwSI9MfiyTgxDw0mu9AKcRGuNmg7mipFV8hXg8mtz0bI7gAPQFWbB6yPRFIubSkASKQi%2B2qQv%2FxTH8BqCeHU8tky9OHRcqVPSNwLD7t5kcrdFkc3JgrKkShTp%2F%2FbfkhiBzVI10dsl9%2FG33gOsbo2Bdo7GT5p3D0fRmdQTIMF2cPXRnX%2FpXQUc9ZLolzIG5hK2QkJkGk%2FOYAVLnMsbaAAaH07uWegTWDdNC85yxKnGHOAFAJZcg9B5wMGfG4g%2FxJwzrObJgCJrrT0%2BiH69ymZHCD05pcJjQcKVoDxFyd%2FE%2B7g1Zfle0K3O5bk868aBVw8c0s7Le7VdjKfHE4UQW5LkJol4wCikGLV9ocYxGYhVd55GKWg5CYN0n3iol%2Ba4p%2BzR1iCK4kdY6cOFni4u18DUrJQu84kwbet9uOobulvOXBx9%2BpBYftDf6PtjBfX5FLlWiGVfwdZbUXdGADbsn%2FxWE%2BIQiB4pl1YfCz%2BCmU6PO46BpRv481KdTcrmfVoMgmEaqGkNUOcNj%2Fvxj%2FphU9Ab0wrUe8%2F1t2qeWWWFUjR02si4YZK9kk707ORBYC%2FY6w027IX4M6ejArnRWV16EtWCMP738r4GOqUBWbR52jJKYFKxGp6G%2FrIyoaZwiWHBPHDi1fbaFZOMT%2FDtddirZG0sdQEe5uzqAmKT0wKPIcySketZdZQEK0Ljy3XXLfiOXsyrLvw8PV2tLWm49qMFNS4uRVzozqMSujsOp35legAdUq0UBxFt6jVM%2BhbJ2MMumSP315dBPQ5LffQ0KSqhC%2BAGGz0B3GA%2FBjWdMCa9hFTICm%2FpRmk4vINJHV68ooNm&X-Amz-Signature=05f48c35bbefc41857ef89f1114456f3170b812b1dd28f1afa572c83dd206187&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IT4C67Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCajUFn2gR0ktTDqf0fII2MKZUEcsmFdGJi0lNiRit3kgIgC3PL0%2FiuYvQdmv2JIHk5gNg9vE11t%2Fgte4F09Ut%2FqUgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg0sbrOTih%2F0I5eHCrcAylKCDrZAVYuPwwXSYr1jD%2FHDvKTLsya8TLljbdHwSI9MfiyTgxDw0mu9AKcRGuNmg7mipFV8hXg8mtz0bI7gAPQFWbB6yPRFIubSkASKQi%2B2qQv%2FxTH8BqCeHU8tky9OHRcqVPSNwLD7t5kcrdFkc3JgrKkShTp%2F%2FbfkhiBzVI10dsl9%2FG33gOsbo2Bdo7GT5p3D0fRmdQTIMF2cPXRnX%2FpXQUc9ZLolzIG5hK2QkJkGk%2FOYAVLnMsbaAAaH07uWegTWDdNC85yxKnGHOAFAJZcg9B5wMGfG4g%2FxJwzrObJgCJrrT0%2BiH69ymZHCD05pcJjQcKVoDxFyd%2FE%2B7g1Zfle0K3O5bk868aBVw8c0s7Le7VdjKfHE4UQW5LkJol4wCikGLV9ocYxGYhVd55GKWg5CYN0n3iol%2Ba4p%2BzR1iCK4kdY6cOFni4u18DUrJQu84kwbet9uOobulvOXBx9%2BpBYftDf6PtjBfX5FLlWiGVfwdZbUXdGADbsn%2FxWE%2BIQiB4pl1YfCz%2BCmU6PO46BpRv481KdTcrmfVoMgmEaqGkNUOcNj%2Fvxj%2FphU9Ab0wrUe8%2F1t2qeWWWFUjR02si4YZK9kk707ORBYC%2FY6w027IX4M6ejArnRWV16EtWCMP738r4GOqUBWbR52jJKYFKxGp6G%2FrIyoaZwiWHBPHDi1fbaFZOMT%2FDtddirZG0sdQEe5uzqAmKT0wKPIcySketZdZQEK0Ljy3XXLfiOXsyrLvw8PV2tLWm49qMFNS4uRVzozqMSujsOp35legAdUq0UBxFt6jVM%2BhbJ2MMumSP315dBPQ5LffQ0KSqhC%2BAGGz0B3GA%2FBjWdMCa9hFTICm%2FpRmk4vINJHV68ooNm&X-Amz-Signature=f3518e67ec7c496f959ff1004840b092de099a07cd9bc0ec3eda09c1a3154069&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IT4C67Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCajUFn2gR0ktTDqf0fII2MKZUEcsmFdGJi0lNiRit3kgIgC3PL0%2FiuYvQdmv2JIHk5gNg9vE11t%2Fgte4F09Ut%2FqUgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg0sbrOTih%2F0I5eHCrcAylKCDrZAVYuPwwXSYr1jD%2FHDvKTLsya8TLljbdHwSI9MfiyTgxDw0mu9AKcRGuNmg7mipFV8hXg8mtz0bI7gAPQFWbB6yPRFIubSkASKQi%2B2qQv%2FxTH8BqCeHU8tky9OHRcqVPSNwLD7t5kcrdFkc3JgrKkShTp%2F%2FbfkhiBzVI10dsl9%2FG33gOsbo2Bdo7GT5p3D0fRmdQTIMF2cPXRnX%2FpXQUc9ZLolzIG5hK2QkJkGk%2FOYAVLnMsbaAAaH07uWegTWDdNC85yxKnGHOAFAJZcg9B5wMGfG4g%2FxJwzrObJgCJrrT0%2BiH69ymZHCD05pcJjQcKVoDxFyd%2FE%2B7g1Zfle0K3O5bk868aBVw8c0s7Le7VdjKfHE4UQW5LkJol4wCikGLV9ocYxGYhVd55GKWg5CYN0n3iol%2Ba4p%2BzR1iCK4kdY6cOFni4u18DUrJQu84kwbet9uOobulvOXBx9%2BpBYftDf6PtjBfX5FLlWiGVfwdZbUXdGADbsn%2FxWE%2BIQiB4pl1YfCz%2BCmU6PO46BpRv481KdTcrmfVoMgmEaqGkNUOcNj%2Fvxj%2FphU9Ab0wrUe8%2F1t2qeWWWFUjR02si4YZK9kk707ORBYC%2FY6w027IX4M6ejArnRWV16EtWCMP738r4GOqUBWbR52jJKYFKxGp6G%2FrIyoaZwiWHBPHDi1fbaFZOMT%2FDtddirZG0sdQEe5uzqAmKT0wKPIcySketZdZQEK0Ljy3XXLfiOXsyrLvw8PV2tLWm49qMFNS4uRVzozqMSujsOp35legAdUq0UBxFt6jVM%2BhbJ2MMumSP315dBPQ5LffQ0KSqhC%2BAGGz0B3GA%2FBjWdMCa9hFTICm%2FpRmk4vINJHV68ooNm&X-Amz-Signature=8c465b9c2e1d21b5ec90587d791794e6e3e24fdd291b983d4ca2eb42b65407e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IT4C67Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCajUFn2gR0ktTDqf0fII2MKZUEcsmFdGJi0lNiRit3kgIgC3PL0%2FiuYvQdmv2JIHk5gNg9vE11t%2Fgte4F09Ut%2FqUgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg0sbrOTih%2F0I5eHCrcAylKCDrZAVYuPwwXSYr1jD%2FHDvKTLsya8TLljbdHwSI9MfiyTgxDw0mu9AKcRGuNmg7mipFV8hXg8mtz0bI7gAPQFWbB6yPRFIubSkASKQi%2B2qQv%2FxTH8BqCeHU8tky9OHRcqVPSNwLD7t5kcrdFkc3JgrKkShTp%2F%2FbfkhiBzVI10dsl9%2FG33gOsbo2Bdo7GT5p3D0fRmdQTIMF2cPXRnX%2FpXQUc9ZLolzIG5hK2QkJkGk%2FOYAVLnMsbaAAaH07uWegTWDdNC85yxKnGHOAFAJZcg9B5wMGfG4g%2FxJwzrObJgCJrrT0%2BiH69ymZHCD05pcJjQcKVoDxFyd%2FE%2B7g1Zfle0K3O5bk868aBVw8c0s7Le7VdjKfHE4UQW5LkJol4wCikGLV9ocYxGYhVd55GKWg5CYN0n3iol%2Ba4p%2BzR1iCK4kdY6cOFni4u18DUrJQu84kwbet9uOobulvOXBx9%2BpBYftDf6PtjBfX5FLlWiGVfwdZbUXdGADbsn%2FxWE%2BIQiB4pl1YfCz%2BCmU6PO46BpRv481KdTcrmfVoMgmEaqGkNUOcNj%2Fvxj%2FphU9Ab0wrUe8%2F1t2qeWWWFUjR02si4YZK9kk707ORBYC%2FY6w027IX4M6ejArnRWV16EtWCMP738r4GOqUBWbR52jJKYFKxGp6G%2FrIyoaZwiWHBPHDi1fbaFZOMT%2FDtddirZG0sdQEe5uzqAmKT0wKPIcySketZdZQEK0Ljy3XXLfiOXsyrLvw8PV2tLWm49qMFNS4uRVzozqMSujsOp35legAdUq0UBxFt6jVM%2BhbJ2MMumSP315dBPQ5LffQ0KSqhC%2BAGGz0B3GA%2FBjWdMCa9hFTICm%2FpRmk4vINJHV68ooNm&X-Amz-Signature=93ec5638e93451eadb0c7bae30b6e9bcba9651afca763f31da2012e10aabccb5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IT4C67Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCajUFn2gR0ktTDqf0fII2MKZUEcsmFdGJi0lNiRit3kgIgC3PL0%2FiuYvQdmv2JIHk5gNg9vE11t%2Fgte4F09Ut%2FqUgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg0sbrOTih%2F0I5eHCrcAylKCDrZAVYuPwwXSYr1jD%2FHDvKTLsya8TLljbdHwSI9MfiyTgxDw0mu9AKcRGuNmg7mipFV8hXg8mtz0bI7gAPQFWbB6yPRFIubSkASKQi%2B2qQv%2FxTH8BqCeHU8tky9OHRcqVPSNwLD7t5kcrdFkc3JgrKkShTp%2F%2FbfkhiBzVI10dsl9%2FG33gOsbo2Bdo7GT5p3D0fRmdQTIMF2cPXRnX%2FpXQUc9ZLolzIG5hK2QkJkGk%2FOYAVLnMsbaAAaH07uWegTWDdNC85yxKnGHOAFAJZcg9B5wMGfG4g%2FxJwzrObJgCJrrT0%2BiH69ymZHCD05pcJjQcKVoDxFyd%2FE%2B7g1Zfle0K3O5bk868aBVw8c0s7Le7VdjKfHE4UQW5LkJol4wCikGLV9ocYxGYhVd55GKWg5CYN0n3iol%2Ba4p%2BzR1iCK4kdY6cOFni4u18DUrJQu84kwbet9uOobulvOXBx9%2BpBYftDf6PtjBfX5FLlWiGVfwdZbUXdGADbsn%2FxWE%2BIQiB4pl1YfCz%2BCmU6PO46BpRv481KdTcrmfVoMgmEaqGkNUOcNj%2Fvxj%2FphU9Ab0wrUe8%2F1t2qeWWWFUjR02si4YZK9kk707ORBYC%2FY6w027IX4M6ejArnRWV16EtWCMP738r4GOqUBWbR52jJKYFKxGp6G%2FrIyoaZwiWHBPHDi1fbaFZOMT%2FDtddirZG0sdQEe5uzqAmKT0wKPIcySketZdZQEK0Ljy3XXLfiOXsyrLvw8PV2tLWm49qMFNS4uRVzozqMSujsOp35legAdUq0UBxFt6jVM%2BhbJ2MMumSP315dBPQ5LffQ0KSqhC%2BAGGz0B3GA%2FBjWdMCa9hFTICm%2FpRmk4vINJHV68ooNm&X-Amz-Signature=f7c5f77024678e72c8c747c632fd7c1fedbae5dc027fa075fbd23e2bba5e9b1a&X-Amz-SignedHeaders=host&x-id=GetObject)
