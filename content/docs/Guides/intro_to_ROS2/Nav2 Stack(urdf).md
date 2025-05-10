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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI6SRICX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDpjrLSelG0%2FrSL5gXp5S6Ei95y%2FiFmuaWDgVvKEISOVgIgHed%2BhsT1bAnGiTRPN%2BNeCVjPkavxm3c5cQgahmIHm%2FUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoU1pzcU9meB%2FwgNCrcA02kt6WQ1QADShr%2F6vkQe4IFJ6TzU8T2hgkntZ33Y%2FhUrCCwk8%2BK2XjRR8F1pBIpKXip%2BMHIBPj1i7Fg67jKcHMmtGbCX7hhEunixk%2ByT7z489GtuDfh9OAUDDDn2f%2B1KyxcRFMFK28u4LQJFDK2UFpPSuUJZlmObcubxl6CR55Qr7ZB8yZ5BtMGR%2B%2FBCTON2vBKowDrpKSfB0bc%2BTxU1I3ZMmBnRjsa%2FpTS811XnxVZ5GZdUCCanFwBeE9vhzRqlfvosZvYe98OYxWPSJ4TPSK6kD5Yg8RIxZh5sGGX4JRErvfzOB0vaeIsfS93JXY8tsfmh5EpctSZXuNCvu2piBQGmxo1soMTs%2F%2FRJdWghfd88CurKJEV8R3vypHjkTfn3eSbovg9QJCMimRstoUH4S%2FzzvwehS%2BTF8ozy4AeHkV1ljWLs%2BEclTTwkPgU7qlSBdsfcv9rBPX%2FbKJIQCLIGHFlOl%2BfzH8UXn2CSv4bJ5UDeCSDmSWWfSs7ZsyGwX4JrH1pvCxwPSbkNZwRa9Kpwe73%2BVz7ITdDLCF5zbTvpZB%2F0WPHmXVysfeDqqsscUF6v%2FkVELQUPruuBj8mqIq%2Fv0pPok5csdpP5xj7MhCa4iqvodywkvwYzEBhKsQUMMCg%2FsAGOqUBKUXzKvbMT8uQT2BYPgouyeEKRwwlxHRif1H21R46qwgzOpL4sWLDzHIOBUcAPKDVSvZpg9UbA6u5tYeNvGT4g1qLyLjbbbWmzgifCpibpLSzbk5LtYFKzRRtZu8TxRB1LDs2ZQuulsxcq%2FzuQWBFz4MQdlsu0kfgCOaqsPpB%2B%2BP4mHkBnvm2V0mMNqacR9TRtUwEx%2F8O9V2WCd%2Fmvt%2BH0Og5k9sv&X-Amz-Signature=f8d5c280fdfe74e76d720f66674dff4a9eef2b4228d3489d0e9e785f9a109013&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI6SRICX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDpjrLSelG0%2FrSL5gXp5S6Ei95y%2FiFmuaWDgVvKEISOVgIgHed%2BhsT1bAnGiTRPN%2BNeCVjPkavxm3c5cQgahmIHm%2FUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoU1pzcU9meB%2FwgNCrcA02kt6WQ1QADShr%2F6vkQe4IFJ6TzU8T2hgkntZ33Y%2FhUrCCwk8%2BK2XjRR8F1pBIpKXip%2BMHIBPj1i7Fg67jKcHMmtGbCX7hhEunixk%2ByT7z489GtuDfh9OAUDDDn2f%2B1KyxcRFMFK28u4LQJFDK2UFpPSuUJZlmObcubxl6CR55Qr7ZB8yZ5BtMGR%2B%2FBCTON2vBKowDrpKSfB0bc%2BTxU1I3ZMmBnRjsa%2FpTS811XnxVZ5GZdUCCanFwBeE9vhzRqlfvosZvYe98OYxWPSJ4TPSK6kD5Yg8RIxZh5sGGX4JRErvfzOB0vaeIsfS93JXY8tsfmh5EpctSZXuNCvu2piBQGmxo1soMTs%2F%2FRJdWghfd88CurKJEV8R3vypHjkTfn3eSbovg9QJCMimRstoUH4S%2FzzvwehS%2BTF8ozy4AeHkV1ljWLs%2BEclTTwkPgU7qlSBdsfcv9rBPX%2FbKJIQCLIGHFlOl%2BfzH8UXn2CSv4bJ5UDeCSDmSWWfSs7ZsyGwX4JrH1pvCxwPSbkNZwRa9Kpwe73%2BVz7ITdDLCF5zbTvpZB%2F0WPHmXVysfeDqqsscUF6v%2FkVELQUPruuBj8mqIq%2Fv0pPok5csdpP5xj7MhCa4iqvodywkvwYzEBhKsQUMMCg%2FsAGOqUBKUXzKvbMT8uQT2BYPgouyeEKRwwlxHRif1H21R46qwgzOpL4sWLDzHIOBUcAPKDVSvZpg9UbA6u5tYeNvGT4g1qLyLjbbbWmzgifCpibpLSzbk5LtYFKzRRtZu8TxRB1LDs2ZQuulsxcq%2FzuQWBFz4MQdlsu0kfgCOaqsPpB%2B%2BP4mHkBnvm2V0mMNqacR9TRtUwEx%2F8O9V2WCd%2Fmvt%2BH0Og5k9sv&X-Amz-Signature=7dd12584307894dbd545e9750dbe1e50bc5ca8e89c36df90df84343089c2b64b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI6SRICX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDpjrLSelG0%2FrSL5gXp5S6Ei95y%2FiFmuaWDgVvKEISOVgIgHed%2BhsT1bAnGiTRPN%2BNeCVjPkavxm3c5cQgahmIHm%2FUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoU1pzcU9meB%2FwgNCrcA02kt6WQ1QADShr%2F6vkQe4IFJ6TzU8T2hgkntZ33Y%2FhUrCCwk8%2BK2XjRR8F1pBIpKXip%2BMHIBPj1i7Fg67jKcHMmtGbCX7hhEunixk%2ByT7z489GtuDfh9OAUDDDn2f%2B1KyxcRFMFK28u4LQJFDK2UFpPSuUJZlmObcubxl6CR55Qr7ZB8yZ5BtMGR%2B%2FBCTON2vBKowDrpKSfB0bc%2BTxU1I3ZMmBnRjsa%2FpTS811XnxVZ5GZdUCCanFwBeE9vhzRqlfvosZvYe98OYxWPSJ4TPSK6kD5Yg8RIxZh5sGGX4JRErvfzOB0vaeIsfS93JXY8tsfmh5EpctSZXuNCvu2piBQGmxo1soMTs%2F%2FRJdWghfd88CurKJEV8R3vypHjkTfn3eSbovg9QJCMimRstoUH4S%2FzzvwehS%2BTF8ozy4AeHkV1ljWLs%2BEclTTwkPgU7qlSBdsfcv9rBPX%2FbKJIQCLIGHFlOl%2BfzH8UXn2CSv4bJ5UDeCSDmSWWfSs7ZsyGwX4JrH1pvCxwPSbkNZwRa9Kpwe73%2BVz7ITdDLCF5zbTvpZB%2F0WPHmXVysfeDqqsscUF6v%2FkVELQUPruuBj8mqIq%2Fv0pPok5csdpP5xj7MhCa4iqvodywkvwYzEBhKsQUMMCg%2FsAGOqUBKUXzKvbMT8uQT2BYPgouyeEKRwwlxHRif1H21R46qwgzOpL4sWLDzHIOBUcAPKDVSvZpg9UbA6u5tYeNvGT4g1qLyLjbbbWmzgifCpibpLSzbk5LtYFKzRRtZu8TxRB1LDs2ZQuulsxcq%2FzuQWBFz4MQdlsu0kfgCOaqsPpB%2B%2BP4mHkBnvm2V0mMNqacR9TRtUwEx%2F8O9V2WCd%2Fmvt%2BH0Og5k9sv&X-Amz-Signature=eff6700a2f7efccbc1245b6dc4325fe5074fae632b265ecb17bdd7393b9cec17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI6SRICX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDpjrLSelG0%2FrSL5gXp5S6Ei95y%2FiFmuaWDgVvKEISOVgIgHed%2BhsT1bAnGiTRPN%2BNeCVjPkavxm3c5cQgahmIHm%2FUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoU1pzcU9meB%2FwgNCrcA02kt6WQ1QADShr%2F6vkQe4IFJ6TzU8T2hgkntZ33Y%2FhUrCCwk8%2BK2XjRR8F1pBIpKXip%2BMHIBPj1i7Fg67jKcHMmtGbCX7hhEunixk%2ByT7z489GtuDfh9OAUDDDn2f%2B1KyxcRFMFK28u4LQJFDK2UFpPSuUJZlmObcubxl6CR55Qr7ZB8yZ5BtMGR%2B%2FBCTON2vBKowDrpKSfB0bc%2BTxU1I3ZMmBnRjsa%2FpTS811XnxVZ5GZdUCCanFwBeE9vhzRqlfvosZvYe98OYxWPSJ4TPSK6kD5Yg8RIxZh5sGGX4JRErvfzOB0vaeIsfS93JXY8tsfmh5EpctSZXuNCvu2piBQGmxo1soMTs%2F%2FRJdWghfd88CurKJEV8R3vypHjkTfn3eSbovg9QJCMimRstoUH4S%2FzzvwehS%2BTF8ozy4AeHkV1ljWLs%2BEclTTwkPgU7qlSBdsfcv9rBPX%2FbKJIQCLIGHFlOl%2BfzH8UXn2CSv4bJ5UDeCSDmSWWfSs7ZsyGwX4JrH1pvCxwPSbkNZwRa9Kpwe73%2BVz7ITdDLCF5zbTvpZB%2F0WPHmXVysfeDqqsscUF6v%2FkVELQUPruuBj8mqIq%2Fv0pPok5csdpP5xj7MhCa4iqvodywkvwYzEBhKsQUMMCg%2FsAGOqUBKUXzKvbMT8uQT2BYPgouyeEKRwwlxHRif1H21R46qwgzOpL4sWLDzHIOBUcAPKDVSvZpg9UbA6u5tYeNvGT4g1qLyLjbbbWmzgifCpibpLSzbk5LtYFKzRRtZu8TxRB1LDs2ZQuulsxcq%2FzuQWBFz4MQdlsu0kfgCOaqsPpB%2B%2BP4mHkBnvm2V0mMNqacR9TRtUwEx%2F8O9V2WCd%2Fmvt%2BH0Og5k9sv&X-Amz-Signature=c42916b4b73d3fcec47135bb4e5bdb298bb5fedbcfeff535be559d23eafcc105&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI6SRICX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDpjrLSelG0%2FrSL5gXp5S6Ei95y%2FiFmuaWDgVvKEISOVgIgHed%2BhsT1bAnGiTRPN%2BNeCVjPkavxm3c5cQgahmIHm%2FUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoU1pzcU9meB%2FwgNCrcA02kt6WQ1QADShr%2F6vkQe4IFJ6TzU8T2hgkntZ33Y%2FhUrCCwk8%2BK2XjRR8F1pBIpKXip%2BMHIBPj1i7Fg67jKcHMmtGbCX7hhEunixk%2ByT7z489GtuDfh9OAUDDDn2f%2B1KyxcRFMFK28u4LQJFDK2UFpPSuUJZlmObcubxl6CR55Qr7ZB8yZ5BtMGR%2B%2FBCTON2vBKowDrpKSfB0bc%2BTxU1I3ZMmBnRjsa%2FpTS811XnxVZ5GZdUCCanFwBeE9vhzRqlfvosZvYe98OYxWPSJ4TPSK6kD5Yg8RIxZh5sGGX4JRErvfzOB0vaeIsfS93JXY8tsfmh5EpctSZXuNCvu2piBQGmxo1soMTs%2F%2FRJdWghfd88CurKJEV8R3vypHjkTfn3eSbovg9QJCMimRstoUH4S%2FzzvwehS%2BTF8ozy4AeHkV1ljWLs%2BEclTTwkPgU7qlSBdsfcv9rBPX%2FbKJIQCLIGHFlOl%2BfzH8UXn2CSv4bJ5UDeCSDmSWWfSs7ZsyGwX4JrH1pvCxwPSbkNZwRa9Kpwe73%2BVz7ITdDLCF5zbTvpZB%2F0WPHmXVysfeDqqsscUF6v%2FkVELQUPruuBj8mqIq%2Fv0pPok5csdpP5xj7MhCa4iqvodywkvwYzEBhKsQUMMCg%2FsAGOqUBKUXzKvbMT8uQT2BYPgouyeEKRwwlxHRif1H21R46qwgzOpL4sWLDzHIOBUcAPKDVSvZpg9UbA6u5tYeNvGT4g1qLyLjbbbWmzgifCpibpLSzbk5LtYFKzRRtZu8TxRB1LDs2ZQuulsxcq%2FzuQWBFz4MQdlsu0kfgCOaqsPpB%2B%2BP4mHkBnvm2V0mMNqacR9TRtUwEx%2F8O9V2WCd%2Fmvt%2BH0Og5k9sv&X-Amz-Signature=594541ee24b8b2e58449db233b0cc520c2991d3811fb600b501863f3f9cf1f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI6SRICX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDpjrLSelG0%2FrSL5gXp5S6Ei95y%2FiFmuaWDgVvKEISOVgIgHed%2BhsT1bAnGiTRPN%2BNeCVjPkavxm3c5cQgahmIHm%2FUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoU1pzcU9meB%2FwgNCrcA02kt6WQ1QADShr%2F6vkQe4IFJ6TzU8T2hgkntZ33Y%2FhUrCCwk8%2BK2XjRR8F1pBIpKXip%2BMHIBPj1i7Fg67jKcHMmtGbCX7hhEunixk%2ByT7z489GtuDfh9OAUDDDn2f%2B1KyxcRFMFK28u4LQJFDK2UFpPSuUJZlmObcubxl6CR55Qr7ZB8yZ5BtMGR%2B%2FBCTON2vBKowDrpKSfB0bc%2BTxU1I3ZMmBnRjsa%2FpTS811XnxVZ5GZdUCCanFwBeE9vhzRqlfvosZvYe98OYxWPSJ4TPSK6kD5Yg8RIxZh5sGGX4JRErvfzOB0vaeIsfS93JXY8tsfmh5EpctSZXuNCvu2piBQGmxo1soMTs%2F%2FRJdWghfd88CurKJEV8R3vypHjkTfn3eSbovg9QJCMimRstoUH4S%2FzzvwehS%2BTF8ozy4AeHkV1ljWLs%2BEclTTwkPgU7qlSBdsfcv9rBPX%2FbKJIQCLIGHFlOl%2BfzH8UXn2CSv4bJ5UDeCSDmSWWfSs7ZsyGwX4JrH1pvCxwPSbkNZwRa9Kpwe73%2BVz7ITdDLCF5zbTvpZB%2F0WPHmXVysfeDqqsscUF6v%2FkVELQUPruuBj8mqIq%2Fv0pPok5csdpP5xj7MhCa4iqvodywkvwYzEBhKsQUMMCg%2FsAGOqUBKUXzKvbMT8uQT2BYPgouyeEKRwwlxHRif1H21R46qwgzOpL4sWLDzHIOBUcAPKDVSvZpg9UbA6u5tYeNvGT4g1qLyLjbbbWmzgifCpibpLSzbk5LtYFKzRRtZu8TxRB1LDs2ZQuulsxcq%2FzuQWBFz4MQdlsu0kfgCOaqsPpB%2B%2BP4mHkBnvm2V0mMNqacR9TRtUwEx%2F8O9V2WCd%2Fmvt%2BH0Og5k9sv&X-Amz-Signature=5e4d7122c59139237088a63f7fe21d99beaf825a5d486bf5873c3304aaa3a4ca&X-Amz-SignedHeaders=host&x-id=GetObject)
