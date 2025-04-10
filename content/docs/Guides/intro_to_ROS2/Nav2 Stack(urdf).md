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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7PIG4Z%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDBFqCc0C9hyksRAncX8S2xe%2BUMQYvkRruvMNTXr3l1oQIgCgaiUDsU%2B2LOXiQqrAz3lbnDvJEbVq2FllsGXL9vr6sqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVEm0Wl5TGZXnXlOCrcA5pWd7Y5CRs%2FrAMrIT36mrr0A%2BS0mmuMTxLnIhSbBvG%2F2HPDY5qwZxJXHidEp8D34mcrZVL3EKoVwqqfQ18z2P3%2Fkm9HC%2F8C0SI7KOLBe4%2BjlGpsUIYJSI3Ys4HTyQJK26b9MAtDCPQ6lnmiVOip3HLA8BYk0z24Qlcr167lD7t53vs5WLusZqfYZINBpS1FrroIHd1Xi9%2FgCl2PcjOo8sYHox9NoW%2Bz3kLIG8VoRCdTegKhsP9gxSeyh7f8%2BtdRN8BmlLZzpvWbH3MspHi6dgBe4O0ruuT3gLDJCXTzybbW37Vet%2FTVFwki%2BgwBvC5ynu9%2F8u8%2FS3gNj%2B7JG9FgxQamoC9rbSF2xkh82ZxXa3%2BSIemCjfJoT3lIdsGiYXW1v4gDAP4scJTsPGDZ9LB2b%2FanAD1MlI6Fy3SLUXas4xPFvAmunwRXKGX1BopYKv9leS6tKDJ5zk2mmatlJ0O4Yuyhrez7UemOLve0DVuMSPvTDKViIxtsW4KFWB7cKpup5rtqLqpJQTXvxlJa1EGckjHEng24K%2BgHm2SBDx35j%2F4%2B4OGMnwBsGNufA9sq7MVnlCAWpbzT4UHQCID79T1NTEgAqCV5AbT13KiyD7C56M6g9VsPekDGR77Lk%2B7LMOyQ4b8GOqUBe71YIT6QLfkDGMwfLdrpucIkRnC0c9AxjqHCArFMk0N0clnNX2a2fUu0j7o5O8a9Jo9BikHOQi0Zk4vmZSJzvLjrKsy%2Bo2pTdeiJs1n5GKpAtTexxBFVASl9zsdDKudT%2F3tzESVgMA%2BTJc4t%2B7opu%2FzMbNNWDGFQ4%2Bvy1IH1VymOcZ%2BtbUp7TqfFv67RlzzPNZ69vr9gVbkxXN5XBA%2B4qUPOGeNY&X-Amz-Signature=25a0da456207f3cd28ab2f885a1b6cc6c541de539fcd97fc085fbdf32ce61107&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7PIG4Z%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDBFqCc0C9hyksRAncX8S2xe%2BUMQYvkRruvMNTXr3l1oQIgCgaiUDsU%2B2LOXiQqrAz3lbnDvJEbVq2FllsGXL9vr6sqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVEm0Wl5TGZXnXlOCrcA5pWd7Y5CRs%2FrAMrIT36mrr0A%2BS0mmuMTxLnIhSbBvG%2F2HPDY5qwZxJXHidEp8D34mcrZVL3EKoVwqqfQ18z2P3%2Fkm9HC%2F8C0SI7KOLBe4%2BjlGpsUIYJSI3Ys4HTyQJK26b9MAtDCPQ6lnmiVOip3HLA8BYk0z24Qlcr167lD7t53vs5WLusZqfYZINBpS1FrroIHd1Xi9%2FgCl2PcjOo8sYHox9NoW%2Bz3kLIG8VoRCdTegKhsP9gxSeyh7f8%2BtdRN8BmlLZzpvWbH3MspHi6dgBe4O0ruuT3gLDJCXTzybbW37Vet%2FTVFwki%2BgwBvC5ynu9%2F8u8%2FS3gNj%2B7JG9FgxQamoC9rbSF2xkh82ZxXa3%2BSIemCjfJoT3lIdsGiYXW1v4gDAP4scJTsPGDZ9LB2b%2FanAD1MlI6Fy3SLUXas4xPFvAmunwRXKGX1BopYKv9leS6tKDJ5zk2mmatlJ0O4Yuyhrez7UemOLve0DVuMSPvTDKViIxtsW4KFWB7cKpup5rtqLqpJQTXvxlJa1EGckjHEng24K%2BgHm2SBDx35j%2F4%2B4OGMnwBsGNufA9sq7MVnlCAWpbzT4UHQCID79T1NTEgAqCV5AbT13KiyD7C56M6g9VsPekDGR77Lk%2B7LMOyQ4b8GOqUBe71YIT6QLfkDGMwfLdrpucIkRnC0c9AxjqHCArFMk0N0clnNX2a2fUu0j7o5O8a9Jo9BikHOQi0Zk4vmZSJzvLjrKsy%2Bo2pTdeiJs1n5GKpAtTexxBFVASl9zsdDKudT%2F3tzESVgMA%2BTJc4t%2B7opu%2FzMbNNWDGFQ4%2Bvy1IH1VymOcZ%2BtbUp7TqfFv67RlzzPNZ69vr9gVbkxXN5XBA%2B4qUPOGeNY&X-Amz-Signature=02706ed1d43897e156e0be2a5325d521914e03c92244adec275f109c6bc56d69&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7PIG4Z%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDBFqCc0C9hyksRAncX8S2xe%2BUMQYvkRruvMNTXr3l1oQIgCgaiUDsU%2B2LOXiQqrAz3lbnDvJEbVq2FllsGXL9vr6sqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVEm0Wl5TGZXnXlOCrcA5pWd7Y5CRs%2FrAMrIT36mrr0A%2BS0mmuMTxLnIhSbBvG%2F2HPDY5qwZxJXHidEp8D34mcrZVL3EKoVwqqfQ18z2P3%2Fkm9HC%2F8C0SI7KOLBe4%2BjlGpsUIYJSI3Ys4HTyQJK26b9MAtDCPQ6lnmiVOip3HLA8BYk0z24Qlcr167lD7t53vs5WLusZqfYZINBpS1FrroIHd1Xi9%2FgCl2PcjOo8sYHox9NoW%2Bz3kLIG8VoRCdTegKhsP9gxSeyh7f8%2BtdRN8BmlLZzpvWbH3MspHi6dgBe4O0ruuT3gLDJCXTzybbW37Vet%2FTVFwki%2BgwBvC5ynu9%2F8u8%2FS3gNj%2B7JG9FgxQamoC9rbSF2xkh82ZxXa3%2BSIemCjfJoT3lIdsGiYXW1v4gDAP4scJTsPGDZ9LB2b%2FanAD1MlI6Fy3SLUXas4xPFvAmunwRXKGX1BopYKv9leS6tKDJ5zk2mmatlJ0O4Yuyhrez7UemOLve0DVuMSPvTDKViIxtsW4KFWB7cKpup5rtqLqpJQTXvxlJa1EGckjHEng24K%2BgHm2SBDx35j%2F4%2B4OGMnwBsGNufA9sq7MVnlCAWpbzT4UHQCID79T1NTEgAqCV5AbT13KiyD7C56M6g9VsPekDGR77Lk%2B7LMOyQ4b8GOqUBe71YIT6QLfkDGMwfLdrpucIkRnC0c9AxjqHCArFMk0N0clnNX2a2fUu0j7o5O8a9Jo9BikHOQi0Zk4vmZSJzvLjrKsy%2Bo2pTdeiJs1n5GKpAtTexxBFVASl9zsdDKudT%2F3tzESVgMA%2BTJc4t%2B7opu%2FzMbNNWDGFQ4%2Bvy1IH1VymOcZ%2BtbUp7TqfFv67RlzzPNZ69vr9gVbkxXN5XBA%2B4qUPOGeNY&X-Amz-Signature=e9cda3aa2d79149ae3e644e9cedcecb7f542a195af67e3eaddf92fdbc7362318&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7PIG4Z%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDBFqCc0C9hyksRAncX8S2xe%2BUMQYvkRruvMNTXr3l1oQIgCgaiUDsU%2B2LOXiQqrAz3lbnDvJEbVq2FllsGXL9vr6sqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVEm0Wl5TGZXnXlOCrcA5pWd7Y5CRs%2FrAMrIT36mrr0A%2BS0mmuMTxLnIhSbBvG%2F2HPDY5qwZxJXHidEp8D34mcrZVL3EKoVwqqfQ18z2P3%2Fkm9HC%2F8C0SI7KOLBe4%2BjlGpsUIYJSI3Ys4HTyQJK26b9MAtDCPQ6lnmiVOip3HLA8BYk0z24Qlcr167lD7t53vs5WLusZqfYZINBpS1FrroIHd1Xi9%2FgCl2PcjOo8sYHox9NoW%2Bz3kLIG8VoRCdTegKhsP9gxSeyh7f8%2BtdRN8BmlLZzpvWbH3MspHi6dgBe4O0ruuT3gLDJCXTzybbW37Vet%2FTVFwki%2BgwBvC5ynu9%2F8u8%2FS3gNj%2B7JG9FgxQamoC9rbSF2xkh82ZxXa3%2BSIemCjfJoT3lIdsGiYXW1v4gDAP4scJTsPGDZ9LB2b%2FanAD1MlI6Fy3SLUXas4xPFvAmunwRXKGX1BopYKv9leS6tKDJ5zk2mmatlJ0O4Yuyhrez7UemOLve0DVuMSPvTDKViIxtsW4KFWB7cKpup5rtqLqpJQTXvxlJa1EGckjHEng24K%2BgHm2SBDx35j%2F4%2B4OGMnwBsGNufA9sq7MVnlCAWpbzT4UHQCID79T1NTEgAqCV5AbT13KiyD7C56M6g9VsPekDGR77Lk%2B7LMOyQ4b8GOqUBe71YIT6QLfkDGMwfLdrpucIkRnC0c9AxjqHCArFMk0N0clnNX2a2fUu0j7o5O8a9Jo9BikHOQi0Zk4vmZSJzvLjrKsy%2Bo2pTdeiJs1n5GKpAtTexxBFVASl9zsdDKudT%2F3tzESVgMA%2BTJc4t%2B7opu%2FzMbNNWDGFQ4%2Bvy1IH1VymOcZ%2BtbUp7TqfFv67RlzzPNZ69vr9gVbkxXN5XBA%2B4qUPOGeNY&X-Amz-Signature=0bacebb90d78a756906f05bada6f349448aa3e46e28fccca4bd4938daaaf4982&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7PIG4Z%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDBFqCc0C9hyksRAncX8S2xe%2BUMQYvkRruvMNTXr3l1oQIgCgaiUDsU%2B2LOXiQqrAz3lbnDvJEbVq2FllsGXL9vr6sqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVEm0Wl5TGZXnXlOCrcA5pWd7Y5CRs%2FrAMrIT36mrr0A%2BS0mmuMTxLnIhSbBvG%2F2HPDY5qwZxJXHidEp8D34mcrZVL3EKoVwqqfQ18z2P3%2Fkm9HC%2F8C0SI7KOLBe4%2BjlGpsUIYJSI3Ys4HTyQJK26b9MAtDCPQ6lnmiVOip3HLA8BYk0z24Qlcr167lD7t53vs5WLusZqfYZINBpS1FrroIHd1Xi9%2FgCl2PcjOo8sYHox9NoW%2Bz3kLIG8VoRCdTegKhsP9gxSeyh7f8%2BtdRN8BmlLZzpvWbH3MspHi6dgBe4O0ruuT3gLDJCXTzybbW37Vet%2FTVFwki%2BgwBvC5ynu9%2F8u8%2FS3gNj%2B7JG9FgxQamoC9rbSF2xkh82ZxXa3%2BSIemCjfJoT3lIdsGiYXW1v4gDAP4scJTsPGDZ9LB2b%2FanAD1MlI6Fy3SLUXas4xPFvAmunwRXKGX1BopYKv9leS6tKDJ5zk2mmatlJ0O4Yuyhrez7UemOLve0DVuMSPvTDKViIxtsW4KFWB7cKpup5rtqLqpJQTXvxlJa1EGckjHEng24K%2BgHm2SBDx35j%2F4%2B4OGMnwBsGNufA9sq7MVnlCAWpbzT4UHQCID79T1NTEgAqCV5AbT13KiyD7C56M6g9VsPekDGR77Lk%2B7LMOyQ4b8GOqUBe71YIT6QLfkDGMwfLdrpucIkRnC0c9AxjqHCArFMk0N0clnNX2a2fUu0j7o5O8a9Jo9BikHOQi0Zk4vmZSJzvLjrKsy%2Bo2pTdeiJs1n5GKpAtTexxBFVASl9zsdDKudT%2F3tzESVgMA%2BTJc4t%2B7opu%2FzMbNNWDGFQ4%2Bvy1IH1VymOcZ%2BtbUp7TqfFv67RlzzPNZ69vr9gVbkxXN5XBA%2B4qUPOGeNY&X-Amz-Signature=628e71e150169c29a2cdd1da3969d49880ab97b00d327570e99813df17c69ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7PIG4Z%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDBFqCc0C9hyksRAncX8S2xe%2BUMQYvkRruvMNTXr3l1oQIgCgaiUDsU%2B2LOXiQqrAz3lbnDvJEbVq2FllsGXL9vr6sqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVEm0Wl5TGZXnXlOCrcA5pWd7Y5CRs%2FrAMrIT36mrr0A%2BS0mmuMTxLnIhSbBvG%2F2HPDY5qwZxJXHidEp8D34mcrZVL3EKoVwqqfQ18z2P3%2Fkm9HC%2F8C0SI7KOLBe4%2BjlGpsUIYJSI3Ys4HTyQJK26b9MAtDCPQ6lnmiVOip3HLA8BYk0z24Qlcr167lD7t53vs5WLusZqfYZINBpS1FrroIHd1Xi9%2FgCl2PcjOo8sYHox9NoW%2Bz3kLIG8VoRCdTegKhsP9gxSeyh7f8%2BtdRN8BmlLZzpvWbH3MspHi6dgBe4O0ruuT3gLDJCXTzybbW37Vet%2FTVFwki%2BgwBvC5ynu9%2F8u8%2FS3gNj%2B7JG9FgxQamoC9rbSF2xkh82ZxXa3%2BSIemCjfJoT3lIdsGiYXW1v4gDAP4scJTsPGDZ9LB2b%2FanAD1MlI6Fy3SLUXas4xPFvAmunwRXKGX1BopYKv9leS6tKDJ5zk2mmatlJ0O4Yuyhrez7UemOLve0DVuMSPvTDKViIxtsW4KFWB7cKpup5rtqLqpJQTXvxlJa1EGckjHEng24K%2BgHm2SBDx35j%2F4%2B4OGMnwBsGNufA9sq7MVnlCAWpbzT4UHQCID79T1NTEgAqCV5AbT13KiyD7C56M6g9VsPekDGR77Lk%2B7LMOyQ4b8GOqUBe71YIT6QLfkDGMwfLdrpucIkRnC0c9AxjqHCArFMk0N0clnNX2a2fUu0j7o5O8a9Jo9BikHOQi0Zk4vmZSJzvLjrKsy%2Bo2pTdeiJs1n5GKpAtTexxBFVASl9zsdDKudT%2F3tzESVgMA%2BTJc4t%2B7opu%2FzMbNNWDGFQ4%2Bvy1IH1VymOcZ%2BtbUp7TqfFv67RlzzPNZ69vr9gVbkxXN5XBA%2B4qUPOGeNY&X-Amz-Signature=a2b753fcce619fc6da8392b1f03088b21edef0af932c4059b247c05060e6ee82&X-Amz-SignedHeaders=host&x-id=GetObject)
