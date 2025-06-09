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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3XPJWY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkhdgnxKs12D46B6DZMOubkMdvkG6L5OgxNYr22CCUJAIgEH8Yqt9PBzEPXNAzZHebnJh8zQgQG1ucutRzdNM7DmwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjiezM3InPgtsmmHircA1klmI1ooG6yX3DebaRBcwzpcHnACIFlIJEEfx8GZIaUVOTInR8G%2B1wgu2hTNLcy5uIiLd2qpsBxTOIxcE%2F1YoLG6rx2NxA5GppnJGC6yM2X1I%2BvN%2FT2oN3CxXSX2pwcmEp6QVcQ4DtgVdgu0CSHqpH91nj95KxY261fpO2DUVKOflryxx%2FtZ%2F0gf1PwcqBXqsnf1mdRYotscef8sOh0DbU2uqGKeuhCkeoEndloNbKcBH1RTv9544PsmjogrIsfQ8cVnouAmHRDbZAEQ32A3k0lnXD1R6Li8dgWx12chZcMBLJcfIF274zlCFjF4eZ%2BenFX%2FBuzjhSQLA1UzlvBVnFAfv%2Fkkyq5nPsEhfVNPD8Qt7KtdzjWY4oqWsR8aUUpcmx3bbHpPqJYSa0dC85evPxzz%2BYWntvB8u8F5vrJkKkXVvJYYeak7V%2BuoJdiHJ92B%2FSnsP91zlALkRD1s8gX1h0%2BR4jy79ePHeLYCJB%2F6fN7fAArbLNgPAZ6uye%2FIaYznPbGG2KwzXu2le%2FUHKSvCht38c5XmsAFQfQF%2Fj2aBOwG%2Bc0fxaQxiBJuA6Hki%2BynqzSQ%2Bkg8OkpgURDKRD6pq5NYkJXTccRNAhV1KJoN9F7cArkYkUR2x6VMAMeEMIXemsIGOqUB7SuC5AxFSTD5%2FVcOfc%2BkYg8oWR%2BSCqB9W%2FkvN1kQN5xWcnfGdONNUSyAnq0cxzCQpA%2F8FFHMuRsHOSVwUO1OE7R9AC2iOTS%2BwjPl6ns4p9%2BLwI3%2Fi1wNYxFtxgnzCYbYsPIZSvxsQG6nRroY0VlpxtJ0qmqk7%2BTuTNmRVffQZtPzglI4p88ylgiAniEMGzquDmJaEOb%2F8WAowR9lZ6Y93zL1IMPH&X-Amz-Signature=74d9976c9507d5196df74d01a6be7df66b6e96857ab6ade7a544406ea39d317f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3XPJWY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkhdgnxKs12D46B6DZMOubkMdvkG6L5OgxNYr22CCUJAIgEH8Yqt9PBzEPXNAzZHebnJh8zQgQG1ucutRzdNM7DmwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjiezM3InPgtsmmHircA1klmI1ooG6yX3DebaRBcwzpcHnACIFlIJEEfx8GZIaUVOTInR8G%2B1wgu2hTNLcy5uIiLd2qpsBxTOIxcE%2F1YoLG6rx2NxA5GppnJGC6yM2X1I%2BvN%2FT2oN3CxXSX2pwcmEp6QVcQ4DtgVdgu0CSHqpH91nj95KxY261fpO2DUVKOflryxx%2FtZ%2F0gf1PwcqBXqsnf1mdRYotscef8sOh0DbU2uqGKeuhCkeoEndloNbKcBH1RTv9544PsmjogrIsfQ8cVnouAmHRDbZAEQ32A3k0lnXD1R6Li8dgWx12chZcMBLJcfIF274zlCFjF4eZ%2BenFX%2FBuzjhSQLA1UzlvBVnFAfv%2Fkkyq5nPsEhfVNPD8Qt7KtdzjWY4oqWsR8aUUpcmx3bbHpPqJYSa0dC85evPxzz%2BYWntvB8u8F5vrJkKkXVvJYYeak7V%2BuoJdiHJ92B%2FSnsP91zlALkRD1s8gX1h0%2BR4jy79ePHeLYCJB%2F6fN7fAArbLNgPAZ6uye%2FIaYznPbGG2KwzXu2le%2FUHKSvCht38c5XmsAFQfQF%2Fj2aBOwG%2Bc0fxaQxiBJuA6Hki%2BynqzSQ%2Bkg8OkpgURDKRD6pq5NYkJXTccRNAhV1KJoN9F7cArkYkUR2x6VMAMeEMIXemsIGOqUB7SuC5AxFSTD5%2FVcOfc%2BkYg8oWR%2BSCqB9W%2FkvN1kQN5xWcnfGdONNUSyAnq0cxzCQpA%2F8FFHMuRsHOSVwUO1OE7R9AC2iOTS%2BwjPl6ns4p9%2BLwI3%2Fi1wNYxFtxgnzCYbYsPIZSvxsQG6nRroY0VlpxtJ0qmqk7%2BTuTNmRVffQZtPzglI4p88ylgiAniEMGzquDmJaEOb%2F8WAowR9lZ6Y93zL1IMPH&X-Amz-Signature=eb06480a9c4ac343624abe210f0a246165d654611c5d9b0ff318768d34e5a529&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3XPJWY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkhdgnxKs12D46B6DZMOubkMdvkG6L5OgxNYr22CCUJAIgEH8Yqt9PBzEPXNAzZHebnJh8zQgQG1ucutRzdNM7DmwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjiezM3InPgtsmmHircA1klmI1ooG6yX3DebaRBcwzpcHnACIFlIJEEfx8GZIaUVOTInR8G%2B1wgu2hTNLcy5uIiLd2qpsBxTOIxcE%2F1YoLG6rx2NxA5GppnJGC6yM2X1I%2BvN%2FT2oN3CxXSX2pwcmEp6QVcQ4DtgVdgu0CSHqpH91nj95KxY261fpO2DUVKOflryxx%2FtZ%2F0gf1PwcqBXqsnf1mdRYotscef8sOh0DbU2uqGKeuhCkeoEndloNbKcBH1RTv9544PsmjogrIsfQ8cVnouAmHRDbZAEQ32A3k0lnXD1R6Li8dgWx12chZcMBLJcfIF274zlCFjF4eZ%2BenFX%2FBuzjhSQLA1UzlvBVnFAfv%2Fkkyq5nPsEhfVNPD8Qt7KtdzjWY4oqWsR8aUUpcmx3bbHpPqJYSa0dC85evPxzz%2BYWntvB8u8F5vrJkKkXVvJYYeak7V%2BuoJdiHJ92B%2FSnsP91zlALkRD1s8gX1h0%2BR4jy79ePHeLYCJB%2F6fN7fAArbLNgPAZ6uye%2FIaYznPbGG2KwzXu2le%2FUHKSvCht38c5XmsAFQfQF%2Fj2aBOwG%2Bc0fxaQxiBJuA6Hki%2BynqzSQ%2Bkg8OkpgURDKRD6pq5NYkJXTccRNAhV1KJoN9F7cArkYkUR2x6VMAMeEMIXemsIGOqUB7SuC5AxFSTD5%2FVcOfc%2BkYg8oWR%2BSCqB9W%2FkvN1kQN5xWcnfGdONNUSyAnq0cxzCQpA%2F8FFHMuRsHOSVwUO1OE7R9AC2iOTS%2BwjPl6ns4p9%2BLwI3%2Fi1wNYxFtxgnzCYbYsPIZSvxsQG6nRroY0VlpxtJ0qmqk7%2BTuTNmRVffQZtPzglI4p88ylgiAniEMGzquDmJaEOb%2F8WAowR9lZ6Y93zL1IMPH&X-Amz-Signature=8a0faca579899ff2276a50ab1a34fe0e0be05547a8b936532d7ad3c56c5e884f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3XPJWY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkhdgnxKs12D46B6DZMOubkMdvkG6L5OgxNYr22CCUJAIgEH8Yqt9PBzEPXNAzZHebnJh8zQgQG1ucutRzdNM7DmwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjiezM3InPgtsmmHircA1klmI1ooG6yX3DebaRBcwzpcHnACIFlIJEEfx8GZIaUVOTInR8G%2B1wgu2hTNLcy5uIiLd2qpsBxTOIxcE%2F1YoLG6rx2NxA5GppnJGC6yM2X1I%2BvN%2FT2oN3CxXSX2pwcmEp6QVcQ4DtgVdgu0CSHqpH91nj95KxY261fpO2DUVKOflryxx%2FtZ%2F0gf1PwcqBXqsnf1mdRYotscef8sOh0DbU2uqGKeuhCkeoEndloNbKcBH1RTv9544PsmjogrIsfQ8cVnouAmHRDbZAEQ32A3k0lnXD1R6Li8dgWx12chZcMBLJcfIF274zlCFjF4eZ%2BenFX%2FBuzjhSQLA1UzlvBVnFAfv%2Fkkyq5nPsEhfVNPD8Qt7KtdzjWY4oqWsR8aUUpcmx3bbHpPqJYSa0dC85evPxzz%2BYWntvB8u8F5vrJkKkXVvJYYeak7V%2BuoJdiHJ92B%2FSnsP91zlALkRD1s8gX1h0%2BR4jy79ePHeLYCJB%2F6fN7fAArbLNgPAZ6uye%2FIaYznPbGG2KwzXu2le%2FUHKSvCht38c5XmsAFQfQF%2Fj2aBOwG%2Bc0fxaQxiBJuA6Hki%2BynqzSQ%2Bkg8OkpgURDKRD6pq5NYkJXTccRNAhV1KJoN9F7cArkYkUR2x6VMAMeEMIXemsIGOqUB7SuC5AxFSTD5%2FVcOfc%2BkYg8oWR%2BSCqB9W%2FkvN1kQN5xWcnfGdONNUSyAnq0cxzCQpA%2F8FFHMuRsHOSVwUO1OE7R9AC2iOTS%2BwjPl6ns4p9%2BLwI3%2Fi1wNYxFtxgnzCYbYsPIZSvxsQG6nRroY0VlpxtJ0qmqk7%2BTuTNmRVffQZtPzglI4p88ylgiAniEMGzquDmJaEOb%2F8WAowR9lZ6Y93zL1IMPH&X-Amz-Signature=68b3283e8228605761d5066984a78cd9d68964fff40ea1435c932bf847bccd2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3XPJWY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkhdgnxKs12D46B6DZMOubkMdvkG6L5OgxNYr22CCUJAIgEH8Yqt9PBzEPXNAzZHebnJh8zQgQG1ucutRzdNM7DmwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjiezM3InPgtsmmHircA1klmI1ooG6yX3DebaRBcwzpcHnACIFlIJEEfx8GZIaUVOTInR8G%2B1wgu2hTNLcy5uIiLd2qpsBxTOIxcE%2F1YoLG6rx2NxA5GppnJGC6yM2X1I%2BvN%2FT2oN3CxXSX2pwcmEp6QVcQ4DtgVdgu0CSHqpH91nj95KxY261fpO2DUVKOflryxx%2FtZ%2F0gf1PwcqBXqsnf1mdRYotscef8sOh0DbU2uqGKeuhCkeoEndloNbKcBH1RTv9544PsmjogrIsfQ8cVnouAmHRDbZAEQ32A3k0lnXD1R6Li8dgWx12chZcMBLJcfIF274zlCFjF4eZ%2BenFX%2FBuzjhSQLA1UzlvBVnFAfv%2Fkkyq5nPsEhfVNPD8Qt7KtdzjWY4oqWsR8aUUpcmx3bbHpPqJYSa0dC85evPxzz%2BYWntvB8u8F5vrJkKkXVvJYYeak7V%2BuoJdiHJ92B%2FSnsP91zlALkRD1s8gX1h0%2BR4jy79ePHeLYCJB%2F6fN7fAArbLNgPAZ6uye%2FIaYznPbGG2KwzXu2le%2FUHKSvCht38c5XmsAFQfQF%2Fj2aBOwG%2Bc0fxaQxiBJuA6Hki%2BynqzSQ%2Bkg8OkpgURDKRD6pq5NYkJXTccRNAhV1KJoN9F7cArkYkUR2x6VMAMeEMIXemsIGOqUB7SuC5AxFSTD5%2FVcOfc%2BkYg8oWR%2BSCqB9W%2FkvN1kQN5xWcnfGdONNUSyAnq0cxzCQpA%2F8FFHMuRsHOSVwUO1OE7R9AC2iOTS%2BwjPl6ns4p9%2BLwI3%2Fi1wNYxFtxgnzCYbYsPIZSvxsQG6nRroY0VlpxtJ0qmqk7%2BTuTNmRVffQZtPzglI4p88ylgiAniEMGzquDmJaEOb%2F8WAowR9lZ6Y93zL1IMPH&X-Amz-Signature=bc3f5124bdc02bf7bfa47511b0dd107dc03fc8fd3a0e4184b877f1ad38e4b2d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3XPJWY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkhdgnxKs12D46B6DZMOubkMdvkG6L5OgxNYr22CCUJAIgEH8Yqt9PBzEPXNAzZHebnJh8zQgQG1ucutRzdNM7DmwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjiezM3InPgtsmmHircA1klmI1ooG6yX3DebaRBcwzpcHnACIFlIJEEfx8GZIaUVOTInR8G%2B1wgu2hTNLcy5uIiLd2qpsBxTOIxcE%2F1YoLG6rx2NxA5GppnJGC6yM2X1I%2BvN%2FT2oN3CxXSX2pwcmEp6QVcQ4DtgVdgu0CSHqpH91nj95KxY261fpO2DUVKOflryxx%2FtZ%2F0gf1PwcqBXqsnf1mdRYotscef8sOh0DbU2uqGKeuhCkeoEndloNbKcBH1RTv9544PsmjogrIsfQ8cVnouAmHRDbZAEQ32A3k0lnXD1R6Li8dgWx12chZcMBLJcfIF274zlCFjF4eZ%2BenFX%2FBuzjhSQLA1UzlvBVnFAfv%2Fkkyq5nPsEhfVNPD8Qt7KtdzjWY4oqWsR8aUUpcmx3bbHpPqJYSa0dC85evPxzz%2BYWntvB8u8F5vrJkKkXVvJYYeak7V%2BuoJdiHJ92B%2FSnsP91zlALkRD1s8gX1h0%2BR4jy79ePHeLYCJB%2F6fN7fAArbLNgPAZ6uye%2FIaYznPbGG2KwzXu2le%2FUHKSvCht38c5XmsAFQfQF%2Fj2aBOwG%2Bc0fxaQxiBJuA6Hki%2BynqzSQ%2Bkg8OkpgURDKRD6pq5NYkJXTccRNAhV1KJoN9F7cArkYkUR2x6VMAMeEMIXemsIGOqUB7SuC5AxFSTD5%2FVcOfc%2BkYg8oWR%2BSCqB9W%2FkvN1kQN5xWcnfGdONNUSyAnq0cxzCQpA%2F8FFHMuRsHOSVwUO1OE7R9AC2iOTS%2BwjPl6ns4p9%2BLwI3%2Fi1wNYxFtxgnzCYbYsPIZSvxsQG6nRroY0VlpxtJ0qmqk7%2BTuTNmRVffQZtPzglI4p88ylgiAniEMGzquDmJaEOb%2F8WAowR9lZ6Y93zL1IMPH&X-Amz-Signature=3db0f9c042288d28d1a22f3e86228c0df9dec312f37f2510b5b3f40abc88585c&X-Amz-SignedHeaders=host&x-id=GetObject)
