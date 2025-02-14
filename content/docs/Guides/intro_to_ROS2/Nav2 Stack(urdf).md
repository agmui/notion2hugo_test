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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAQFBVX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFXxBRB6LZzdJgWllv25DgrFsa3XnmRrtmg8AH56I7%2FjAiEA3sZuCCaQ3esjnsV%2B2HTxuOSNOjlf8ageJhSTqoSKWfMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEaZDXeb%2F6yWF16UHCrcA1Hg5LyXTq2PcuX2ok%2Fvj6X%2B9P%2B6kD8uD3uz4ZTESj9uk5XqbMv1MYCpekvNujVTEj1O5EJk0O9ccAdKUVLuJOcPBiNMfGV%2BXcxuwMAZapKXb3xtgH2RYhw%2BcFFL7yT5OqNHImw24K0STVMltkmkXbCG%2FJoz09uf7Vr4r0unIV3Mm5xr16bXXWUbJzk3kXYkROlRvhiEQke47jRDXL%2BqFuHaC9n00DsPwgnTDAqcgbH8zkDb9LyMz1eerYGFAEy95NLqHk5cxpNhnx%2FJBpm%2FgyYFfpAPmPLlwSAKAvGjzUfkrBGQVy10DrfTjG1MLzgolZY9khw18QxYFdicEYZ9Y2DLC9YmAzUHVS72ngDCl2xmXVsZ26HsGKmravdBFfh4HB5T934KGFPItMpnlR%2BcIRw6Ld%2BGNHkIauFozue14IFEP2BoxHAJXMcrGW7Mi1GEfktO5R9xeNg6aCA%2FyP%2BmnxQeUkGabkiU1D8kSndEciFjVLDnLoGKoGYGOvyztRRiOdnVlugRuA0wjutVNzWb9WnduDh7lFcaMwTXXziHWIRBy1u9DfPczHFoCGL1MlwtpCqPRDvdIAYrDJ7R8dtlgQj5mIchCwVtbdTQewfo9cWsKgXWDl%2FLb1ndk2RRMNfqvL0GOqUBOwTgRY16rzkqEFPqovuKETbBfSOrQekw1kRI%2FVj%2FQkTPHUf%2Fa2yhmc%2F6gLGHAFzFYiY4gHuiYwKAKYQxFhJjxveD4%2FwU1BL70h30Vz4ln0kEPJOJm8qNSLDSfF15Dy%2FJyGBcSqGW6Xa12goqVIHlgyHh6JNv1xO3QXl7H8xeeZhkOLRG50I%2FKVeeci3vAv5rNxkXqXwjAW5qZ5DJs7kHdzeqBiDz&X-Amz-Signature=800fe43e1eae2f66a5cbbf66944e5fd5d55e5e9ce59fcbc7ba4fa2de3f8dfd64&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAQFBVX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFXxBRB6LZzdJgWllv25DgrFsa3XnmRrtmg8AH56I7%2FjAiEA3sZuCCaQ3esjnsV%2B2HTxuOSNOjlf8ageJhSTqoSKWfMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEaZDXeb%2F6yWF16UHCrcA1Hg5LyXTq2PcuX2ok%2Fvj6X%2B9P%2B6kD8uD3uz4ZTESj9uk5XqbMv1MYCpekvNujVTEj1O5EJk0O9ccAdKUVLuJOcPBiNMfGV%2BXcxuwMAZapKXb3xtgH2RYhw%2BcFFL7yT5OqNHImw24K0STVMltkmkXbCG%2FJoz09uf7Vr4r0unIV3Mm5xr16bXXWUbJzk3kXYkROlRvhiEQke47jRDXL%2BqFuHaC9n00DsPwgnTDAqcgbH8zkDb9LyMz1eerYGFAEy95NLqHk5cxpNhnx%2FJBpm%2FgyYFfpAPmPLlwSAKAvGjzUfkrBGQVy10DrfTjG1MLzgolZY9khw18QxYFdicEYZ9Y2DLC9YmAzUHVS72ngDCl2xmXVsZ26HsGKmravdBFfh4HB5T934KGFPItMpnlR%2BcIRw6Ld%2BGNHkIauFozue14IFEP2BoxHAJXMcrGW7Mi1GEfktO5R9xeNg6aCA%2FyP%2BmnxQeUkGabkiU1D8kSndEciFjVLDnLoGKoGYGOvyztRRiOdnVlugRuA0wjutVNzWb9WnduDh7lFcaMwTXXziHWIRBy1u9DfPczHFoCGL1MlwtpCqPRDvdIAYrDJ7R8dtlgQj5mIchCwVtbdTQewfo9cWsKgXWDl%2FLb1ndk2RRMNfqvL0GOqUBOwTgRY16rzkqEFPqovuKETbBfSOrQekw1kRI%2FVj%2FQkTPHUf%2Fa2yhmc%2F6gLGHAFzFYiY4gHuiYwKAKYQxFhJjxveD4%2FwU1BL70h30Vz4ln0kEPJOJm8qNSLDSfF15Dy%2FJyGBcSqGW6Xa12goqVIHlgyHh6JNv1xO3QXl7H8xeeZhkOLRG50I%2FKVeeci3vAv5rNxkXqXwjAW5qZ5DJs7kHdzeqBiDz&X-Amz-Signature=07cd2e6699c4a63438a085de438c7cbc9ea66a5e84f1e89a033b8544b6e81062&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAQFBVX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFXxBRB6LZzdJgWllv25DgrFsa3XnmRrtmg8AH56I7%2FjAiEA3sZuCCaQ3esjnsV%2B2HTxuOSNOjlf8ageJhSTqoSKWfMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEaZDXeb%2F6yWF16UHCrcA1Hg5LyXTq2PcuX2ok%2Fvj6X%2B9P%2B6kD8uD3uz4ZTESj9uk5XqbMv1MYCpekvNujVTEj1O5EJk0O9ccAdKUVLuJOcPBiNMfGV%2BXcxuwMAZapKXb3xtgH2RYhw%2BcFFL7yT5OqNHImw24K0STVMltkmkXbCG%2FJoz09uf7Vr4r0unIV3Mm5xr16bXXWUbJzk3kXYkROlRvhiEQke47jRDXL%2BqFuHaC9n00DsPwgnTDAqcgbH8zkDb9LyMz1eerYGFAEy95NLqHk5cxpNhnx%2FJBpm%2FgyYFfpAPmPLlwSAKAvGjzUfkrBGQVy10DrfTjG1MLzgolZY9khw18QxYFdicEYZ9Y2DLC9YmAzUHVS72ngDCl2xmXVsZ26HsGKmravdBFfh4HB5T934KGFPItMpnlR%2BcIRw6Ld%2BGNHkIauFozue14IFEP2BoxHAJXMcrGW7Mi1GEfktO5R9xeNg6aCA%2FyP%2BmnxQeUkGabkiU1D8kSndEciFjVLDnLoGKoGYGOvyztRRiOdnVlugRuA0wjutVNzWb9WnduDh7lFcaMwTXXziHWIRBy1u9DfPczHFoCGL1MlwtpCqPRDvdIAYrDJ7R8dtlgQj5mIchCwVtbdTQewfo9cWsKgXWDl%2FLb1ndk2RRMNfqvL0GOqUBOwTgRY16rzkqEFPqovuKETbBfSOrQekw1kRI%2FVj%2FQkTPHUf%2Fa2yhmc%2F6gLGHAFzFYiY4gHuiYwKAKYQxFhJjxveD4%2FwU1BL70h30Vz4ln0kEPJOJm8qNSLDSfF15Dy%2FJyGBcSqGW6Xa12goqVIHlgyHh6JNv1xO3QXl7H8xeeZhkOLRG50I%2FKVeeci3vAv5rNxkXqXwjAW5qZ5DJs7kHdzeqBiDz&X-Amz-Signature=842335bf664f0b7375a08056daadee100634bd60f6f750fc5276df0bd46cd15b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAQFBVX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFXxBRB6LZzdJgWllv25DgrFsa3XnmRrtmg8AH56I7%2FjAiEA3sZuCCaQ3esjnsV%2B2HTxuOSNOjlf8ageJhSTqoSKWfMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEaZDXeb%2F6yWF16UHCrcA1Hg5LyXTq2PcuX2ok%2Fvj6X%2B9P%2B6kD8uD3uz4ZTESj9uk5XqbMv1MYCpekvNujVTEj1O5EJk0O9ccAdKUVLuJOcPBiNMfGV%2BXcxuwMAZapKXb3xtgH2RYhw%2BcFFL7yT5OqNHImw24K0STVMltkmkXbCG%2FJoz09uf7Vr4r0unIV3Mm5xr16bXXWUbJzk3kXYkROlRvhiEQke47jRDXL%2BqFuHaC9n00DsPwgnTDAqcgbH8zkDb9LyMz1eerYGFAEy95NLqHk5cxpNhnx%2FJBpm%2FgyYFfpAPmPLlwSAKAvGjzUfkrBGQVy10DrfTjG1MLzgolZY9khw18QxYFdicEYZ9Y2DLC9YmAzUHVS72ngDCl2xmXVsZ26HsGKmravdBFfh4HB5T934KGFPItMpnlR%2BcIRw6Ld%2BGNHkIauFozue14IFEP2BoxHAJXMcrGW7Mi1GEfktO5R9xeNg6aCA%2FyP%2BmnxQeUkGabkiU1D8kSndEciFjVLDnLoGKoGYGOvyztRRiOdnVlugRuA0wjutVNzWb9WnduDh7lFcaMwTXXziHWIRBy1u9DfPczHFoCGL1MlwtpCqPRDvdIAYrDJ7R8dtlgQj5mIchCwVtbdTQewfo9cWsKgXWDl%2FLb1ndk2RRMNfqvL0GOqUBOwTgRY16rzkqEFPqovuKETbBfSOrQekw1kRI%2FVj%2FQkTPHUf%2Fa2yhmc%2F6gLGHAFzFYiY4gHuiYwKAKYQxFhJjxveD4%2FwU1BL70h30Vz4ln0kEPJOJm8qNSLDSfF15Dy%2FJyGBcSqGW6Xa12goqVIHlgyHh6JNv1xO3QXl7H8xeeZhkOLRG50I%2FKVeeci3vAv5rNxkXqXwjAW5qZ5DJs7kHdzeqBiDz&X-Amz-Signature=a2c68890bf87f18f7aed0156b7d06f96015538a25ab6d22a11e98e2257799e8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAQFBVX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFXxBRB6LZzdJgWllv25DgrFsa3XnmRrtmg8AH56I7%2FjAiEA3sZuCCaQ3esjnsV%2B2HTxuOSNOjlf8ageJhSTqoSKWfMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEaZDXeb%2F6yWF16UHCrcA1Hg5LyXTq2PcuX2ok%2Fvj6X%2B9P%2B6kD8uD3uz4ZTESj9uk5XqbMv1MYCpekvNujVTEj1O5EJk0O9ccAdKUVLuJOcPBiNMfGV%2BXcxuwMAZapKXb3xtgH2RYhw%2BcFFL7yT5OqNHImw24K0STVMltkmkXbCG%2FJoz09uf7Vr4r0unIV3Mm5xr16bXXWUbJzk3kXYkROlRvhiEQke47jRDXL%2BqFuHaC9n00DsPwgnTDAqcgbH8zkDb9LyMz1eerYGFAEy95NLqHk5cxpNhnx%2FJBpm%2FgyYFfpAPmPLlwSAKAvGjzUfkrBGQVy10DrfTjG1MLzgolZY9khw18QxYFdicEYZ9Y2DLC9YmAzUHVS72ngDCl2xmXVsZ26HsGKmravdBFfh4HB5T934KGFPItMpnlR%2BcIRw6Ld%2BGNHkIauFozue14IFEP2BoxHAJXMcrGW7Mi1GEfktO5R9xeNg6aCA%2FyP%2BmnxQeUkGabkiU1D8kSndEciFjVLDnLoGKoGYGOvyztRRiOdnVlugRuA0wjutVNzWb9WnduDh7lFcaMwTXXziHWIRBy1u9DfPczHFoCGL1MlwtpCqPRDvdIAYrDJ7R8dtlgQj5mIchCwVtbdTQewfo9cWsKgXWDl%2FLb1ndk2RRMNfqvL0GOqUBOwTgRY16rzkqEFPqovuKETbBfSOrQekw1kRI%2FVj%2FQkTPHUf%2Fa2yhmc%2F6gLGHAFzFYiY4gHuiYwKAKYQxFhJjxveD4%2FwU1BL70h30Vz4ln0kEPJOJm8qNSLDSfF15Dy%2FJyGBcSqGW6Xa12goqVIHlgyHh6JNv1xO3QXl7H8xeeZhkOLRG50I%2FKVeeci3vAv5rNxkXqXwjAW5qZ5DJs7kHdzeqBiDz&X-Amz-Signature=c3c3a2f8c8ee9877475b621bfb8a9402a263c96af1d4258d5b646da3609650ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAQFBVX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFXxBRB6LZzdJgWllv25DgrFsa3XnmRrtmg8AH56I7%2FjAiEA3sZuCCaQ3esjnsV%2B2HTxuOSNOjlf8ageJhSTqoSKWfMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEaZDXeb%2F6yWF16UHCrcA1Hg5LyXTq2PcuX2ok%2Fvj6X%2B9P%2B6kD8uD3uz4ZTESj9uk5XqbMv1MYCpekvNujVTEj1O5EJk0O9ccAdKUVLuJOcPBiNMfGV%2BXcxuwMAZapKXb3xtgH2RYhw%2BcFFL7yT5OqNHImw24K0STVMltkmkXbCG%2FJoz09uf7Vr4r0unIV3Mm5xr16bXXWUbJzk3kXYkROlRvhiEQke47jRDXL%2BqFuHaC9n00DsPwgnTDAqcgbH8zkDb9LyMz1eerYGFAEy95NLqHk5cxpNhnx%2FJBpm%2FgyYFfpAPmPLlwSAKAvGjzUfkrBGQVy10DrfTjG1MLzgolZY9khw18QxYFdicEYZ9Y2DLC9YmAzUHVS72ngDCl2xmXVsZ26HsGKmravdBFfh4HB5T934KGFPItMpnlR%2BcIRw6Ld%2BGNHkIauFozue14IFEP2BoxHAJXMcrGW7Mi1GEfktO5R9xeNg6aCA%2FyP%2BmnxQeUkGabkiU1D8kSndEciFjVLDnLoGKoGYGOvyztRRiOdnVlugRuA0wjutVNzWb9WnduDh7lFcaMwTXXziHWIRBy1u9DfPczHFoCGL1MlwtpCqPRDvdIAYrDJ7R8dtlgQj5mIchCwVtbdTQewfo9cWsKgXWDl%2FLb1ndk2RRMNfqvL0GOqUBOwTgRY16rzkqEFPqovuKETbBfSOrQekw1kRI%2FVj%2FQkTPHUf%2Fa2yhmc%2F6gLGHAFzFYiY4gHuiYwKAKYQxFhJjxveD4%2FwU1BL70h30Vz4ln0kEPJOJm8qNSLDSfF15Dy%2FJyGBcSqGW6Xa12goqVIHlgyHh6JNv1xO3QXl7H8xeeZhkOLRG50I%2FKVeeci3vAv5rNxkXqXwjAW5qZ5DJs7kHdzeqBiDz&X-Amz-Signature=243b9d21db197d9a15b8b8c58a762acba9c010cb01ba6ded7096afb258e3086e&X-Amz-SignedHeaders=host&x-id=GetObject)
