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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWY6N4W%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEm7pj2YB9s2bcAD0dGWCwUy%2Bi23u6%2F2%2FpHfLfGdvySlAiBaY4T9uepDwujpoI9gA%2FY1srm1b4DJtU1n6XhqWqqvUyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMcQ6bV59S9NFllPJiKtwDWh3MylvlqUKoKnhzx4PVswcr2X5dASMtBXS26gs7f3U9eSRxQDS0qiY3CPHc7o1TMRemQJUQtGYgctnLIXKYKu1wmsrcGlnoNNa%2Fzf7QvtvaMCqXxLNAK7sKcMadd6E0CcE51bD2wvF32Uogt0%2FwVdRb9IE8Jl0Wlp%2FxfvKyXMkEXDsrBYwUu6VPR%2FryLY21Vf3DLQBMmsZyzIrquGRW7vnEyXCnKvbDpqYTAayIz9U9Wf07eVaxtynQgSZgx0eks67H7fNJNTu9ZKlSIbFbK2NfqkWDuZ20aYXO0QTfqJq5EWlEnWcqxfiQDs4%2FlYlfaXzjo7m38ZnOwZLvkc7xscPJvPoO2HQ2jm2gA1ef1qrPmCeEec1DQylo%2BVjNey46XOVG5tK%2BpzCTi0XzTUBf3GcZqFljQUES%2FjTkqEtT4xiFkY%2FF8vQEy5M9Pll4T66V54veyz12QMDnZqD2EgO6MXGkz3UREsj4TClUmy07rukaMf5VPuVTpkzISpTvX2PSMMdrvRNi1rlq9I%2F8w1ahFjM%2Fts3Sx1X0BXlVIqYJIyo3gmpH%2B7mA1gbFO1ylCh3hn3Z7j%2Fa%2B9G3ZT4RlR6ct%2BcSNeWR23bVLgO4%2Fp7lH1L2LqcJ2kDYDPbHdnnswirLkwAY6pgHGvxammXrhDk0zGZGibB4vGrOS5K90EIdSBg5h0kUcSM25j3BrqAINIpRGqmmRGZhF6l2o1U3bn%2B5MLTuNc4tuj86r%2Bx8r6DGNKRyhmp6sjwQspzBHg5ApS1lYUtHCI3xf2F7LH1uz6IiMoyocrFjVRQsWVrxpjq1bgQbn6emGESwQFbWHSy%2F6xg1P9jMI77%2FWTvzzACgP3EjYU5dFlCP250dZUxF8&X-Amz-Signature=b10128aa3732d9a3b75c083a837c63c67f9f1343ceab0ac2e325ddb11785c192&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWY6N4W%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEm7pj2YB9s2bcAD0dGWCwUy%2Bi23u6%2F2%2FpHfLfGdvySlAiBaY4T9uepDwujpoI9gA%2FY1srm1b4DJtU1n6XhqWqqvUyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMcQ6bV59S9NFllPJiKtwDWh3MylvlqUKoKnhzx4PVswcr2X5dASMtBXS26gs7f3U9eSRxQDS0qiY3CPHc7o1TMRemQJUQtGYgctnLIXKYKu1wmsrcGlnoNNa%2Fzf7QvtvaMCqXxLNAK7sKcMadd6E0CcE51bD2wvF32Uogt0%2FwVdRb9IE8Jl0Wlp%2FxfvKyXMkEXDsrBYwUu6VPR%2FryLY21Vf3DLQBMmsZyzIrquGRW7vnEyXCnKvbDpqYTAayIz9U9Wf07eVaxtynQgSZgx0eks67H7fNJNTu9ZKlSIbFbK2NfqkWDuZ20aYXO0QTfqJq5EWlEnWcqxfiQDs4%2FlYlfaXzjo7m38ZnOwZLvkc7xscPJvPoO2HQ2jm2gA1ef1qrPmCeEec1DQylo%2BVjNey46XOVG5tK%2BpzCTi0XzTUBf3GcZqFljQUES%2FjTkqEtT4xiFkY%2FF8vQEy5M9Pll4T66V54veyz12QMDnZqD2EgO6MXGkz3UREsj4TClUmy07rukaMf5VPuVTpkzISpTvX2PSMMdrvRNi1rlq9I%2F8w1ahFjM%2Fts3Sx1X0BXlVIqYJIyo3gmpH%2B7mA1gbFO1ylCh3hn3Z7j%2Fa%2B9G3ZT4RlR6ct%2BcSNeWR23bVLgO4%2Fp7lH1L2LqcJ2kDYDPbHdnnswirLkwAY6pgHGvxammXrhDk0zGZGibB4vGrOS5K90EIdSBg5h0kUcSM25j3BrqAINIpRGqmmRGZhF6l2o1U3bn%2B5MLTuNc4tuj86r%2Bx8r6DGNKRyhmp6sjwQspzBHg5ApS1lYUtHCI3xf2F7LH1uz6IiMoyocrFjVRQsWVrxpjq1bgQbn6emGESwQFbWHSy%2F6xg1P9jMI77%2FWTvzzACgP3EjYU5dFlCP250dZUxF8&X-Amz-Signature=9a1eb25a4f3b5654579fb3dd05b62f27af4023329137f64923ef3c0f0d7f8a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWY6N4W%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEm7pj2YB9s2bcAD0dGWCwUy%2Bi23u6%2F2%2FpHfLfGdvySlAiBaY4T9uepDwujpoI9gA%2FY1srm1b4DJtU1n6XhqWqqvUyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMcQ6bV59S9NFllPJiKtwDWh3MylvlqUKoKnhzx4PVswcr2X5dASMtBXS26gs7f3U9eSRxQDS0qiY3CPHc7o1TMRemQJUQtGYgctnLIXKYKu1wmsrcGlnoNNa%2Fzf7QvtvaMCqXxLNAK7sKcMadd6E0CcE51bD2wvF32Uogt0%2FwVdRb9IE8Jl0Wlp%2FxfvKyXMkEXDsrBYwUu6VPR%2FryLY21Vf3DLQBMmsZyzIrquGRW7vnEyXCnKvbDpqYTAayIz9U9Wf07eVaxtynQgSZgx0eks67H7fNJNTu9ZKlSIbFbK2NfqkWDuZ20aYXO0QTfqJq5EWlEnWcqxfiQDs4%2FlYlfaXzjo7m38ZnOwZLvkc7xscPJvPoO2HQ2jm2gA1ef1qrPmCeEec1DQylo%2BVjNey46XOVG5tK%2BpzCTi0XzTUBf3GcZqFljQUES%2FjTkqEtT4xiFkY%2FF8vQEy5M9Pll4T66V54veyz12QMDnZqD2EgO6MXGkz3UREsj4TClUmy07rukaMf5VPuVTpkzISpTvX2PSMMdrvRNi1rlq9I%2F8w1ahFjM%2Fts3Sx1X0BXlVIqYJIyo3gmpH%2B7mA1gbFO1ylCh3hn3Z7j%2Fa%2B9G3ZT4RlR6ct%2BcSNeWR23bVLgO4%2Fp7lH1L2LqcJ2kDYDPbHdnnswirLkwAY6pgHGvxammXrhDk0zGZGibB4vGrOS5K90EIdSBg5h0kUcSM25j3BrqAINIpRGqmmRGZhF6l2o1U3bn%2B5MLTuNc4tuj86r%2Bx8r6DGNKRyhmp6sjwQspzBHg5ApS1lYUtHCI3xf2F7LH1uz6IiMoyocrFjVRQsWVrxpjq1bgQbn6emGESwQFbWHSy%2F6xg1P9jMI77%2FWTvzzACgP3EjYU5dFlCP250dZUxF8&X-Amz-Signature=864daf0abb94d57715934862456c7fd027523b0fee7c8cde8df7c6c95df45593&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWY6N4W%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEm7pj2YB9s2bcAD0dGWCwUy%2Bi23u6%2F2%2FpHfLfGdvySlAiBaY4T9uepDwujpoI9gA%2FY1srm1b4DJtU1n6XhqWqqvUyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMcQ6bV59S9NFllPJiKtwDWh3MylvlqUKoKnhzx4PVswcr2X5dASMtBXS26gs7f3U9eSRxQDS0qiY3CPHc7o1TMRemQJUQtGYgctnLIXKYKu1wmsrcGlnoNNa%2Fzf7QvtvaMCqXxLNAK7sKcMadd6E0CcE51bD2wvF32Uogt0%2FwVdRb9IE8Jl0Wlp%2FxfvKyXMkEXDsrBYwUu6VPR%2FryLY21Vf3DLQBMmsZyzIrquGRW7vnEyXCnKvbDpqYTAayIz9U9Wf07eVaxtynQgSZgx0eks67H7fNJNTu9ZKlSIbFbK2NfqkWDuZ20aYXO0QTfqJq5EWlEnWcqxfiQDs4%2FlYlfaXzjo7m38ZnOwZLvkc7xscPJvPoO2HQ2jm2gA1ef1qrPmCeEec1DQylo%2BVjNey46XOVG5tK%2BpzCTi0XzTUBf3GcZqFljQUES%2FjTkqEtT4xiFkY%2FF8vQEy5M9Pll4T66V54veyz12QMDnZqD2EgO6MXGkz3UREsj4TClUmy07rukaMf5VPuVTpkzISpTvX2PSMMdrvRNi1rlq9I%2F8w1ahFjM%2Fts3Sx1X0BXlVIqYJIyo3gmpH%2B7mA1gbFO1ylCh3hn3Z7j%2Fa%2B9G3ZT4RlR6ct%2BcSNeWR23bVLgO4%2Fp7lH1L2LqcJ2kDYDPbHdnnswirLkwAY6pgHGvxammXrhDk0zGZGibB4vGrOS5K90EIdSBg5h0kUcSM25j3BrqAINIpRGqmmRGZhF6l2o1U3bn%2B5MLTuNc4tuj86r%2Bx8r6DGNKRyhmp6sjwQspzBHg5ApS1lYUtHCI3xf2F7LH1uz6IiMoyocrFjVRQsWVrxpjq1bgQbn6emGESwQFbWHSy%2F6xg1P9jMI77%2FWTvzzACgP3EjYU5dFlCP250dZUxF8&X-Amz-Signature=3a9ecec25f0bd95c3be88f797fe617703e62d366af862c72cf775044c3ff4471&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWY6N4W%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEm7pj2YB9s2bcAD0dGWCwUy%2Bi23u6%2F2%2FpHfLfGdvySlAiBaY4T9uepDwujpoI9gA%2FY1srm1b4DJtU1n6XhqWqqvUyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMcQ6bV59S9NFllPJiKtwDWh3MylvlqUKoKnhzx4PVswcr2X5dASMtBXS26gs7f3U9eSRxQDS0qiY3CPHc7o1TMRemQJUQtGYgctnLIXKYKu1wmsrcGlnoNNa%2Fzf7QvtvaMCqXxLNAK7sKcMadd6E0CcE51bD2wvF32Uogt0%2FwVdRb9IE8Jl0Wlp%2FxfvKyXMkEXDsrBYwUu6VPR%2FryLY21Vf3DLQBMmsZyzIrquGRW7vnEyXCnKvbDpqYTAayIz9U9Wf07eVaxtynQgSZgx0eks67H7fNJNTu9ZKlSIbFbK2NfqkWDuZ20aYXO0QTfqJq5EWlEnWcqxfiQDs4%2FlYlfaXzjo7m38ZnOwZLvkc7xscPJvPoO2HQ2jm2gA1ef1qrPmCeEec1DQylo%2BVjNey46XOVG5tK%2BpzCTi0XzTUBf3GcZqFljQUES%2FjTkqEtT4xiFkY%2FF8vQEy5M9Pll4T66V54veyz12QMDnZqD2EgO6MXGkz3UREsj4TClUmy07rukaMf5VPuVTpkzISpTvX2PSMMdrvRNi1rlq9I%2F8w1ahFjM%2Fts3Sx1X0BXlVIqYJIyo3gmpH%2B7mA1gbFO1ylCh3hn3Z7j%2Fa%2B9G3ZT4RlR6ct%2BcSNeWR23bVLgO4%2Fp7lH1L2LqcJ2kDYDPbHdnnswirLkwAY6pgHGvxammXrhDk0zGZGibB4vGrOS5K90EIdSBg5h0kUcSM25j3BrqAINIpRGqmmRGZhF6l2o1U3bn%2B5MLTuNc4tuj86r%2Bx8r6DGNKRyhmp6sjwQspzBHg5ApS1lYUtHCI3xf2F7LH1uz6IiMoyocrFjVRQsWVrxpjq1bgQbn6emGESwQFbWHSy%2F6xg1P9jMI77%2FWTvzzACgP3EjYU5dFlCP250dZUxF8&X-Amz-Signature=9e847bc62a9b589de911d6b9894adaecedc981ff689540f7cf8bd94399324636&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWY6N4W%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEm7pj2YB9s2bcAD0dGWCwUy%2Bi23u6%2F2%2FpHfLfGdvySlAiBaY4T9uepDwujpoI9gA%2FY1srm1b4DJtU1n6XhqWqqvUyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMcQ6bV59S9NFllPJiKtwDWh3MylvlqUKoKnhzx4PVswcr2X5dASMtBXS26gs7f3U9eSRxQDS0qiY3CPHc7o1TMRemQJUQtGYgctnLIXKYKu1wmsrcGlnoNNa%2Fzf7QvtvaMCqXxLNAK7sKcMadd6E0CcE51bD2wvF32Uogt0%2FwVdRb9IE8Jl0Wlp%2FxfvKyXMkEXDsrBYwUu6VPR%2FryLY21Vf3DLQBMmsZyzIrquGRW7vnEyXCnKvbDpqYTAayIz9U9Wf07eVaxtynQgSZgx0eks67H7fNJNTu9ZKlSIbFbK2NfqkWDuZ20aYXO0QTfqJq5EWlEnWcqxfiQDs4%2FlYlfaXzjo7m38ZnOwZLvkc7xscPJvPoO2HQ2jm2gA1ef1qrPmCeEec1DQylo%2BVjNey46XOVG5tK%2BpzCTi0XzTUBf3GcZqFljQUES%2FjTkqEtT4xiFkY%2FF8vQEy5M9Pll4T66V54veyz12QMDnZqD2EgO6MXGkz3UREsj4TClUmy07rukaMf5VPuVTpkzISpTvX2PSMMdrvRNi1rlq9I%2F8w1ahFjM%2Fts3Sx1X0BXlVIqYJIyo3gmpH%2B7mA1gbFO1ylCh3hn3Z7j%2Fa%2B9G3ZT4RlR6ct%2BcSNeWR23bVLgO4%2Fp7lH1L2LqcJ2kDYDPbHdnnswirLkwAY6pgHGvxammXrhDk0zGZGibB4vGrOS5K90EIdSBg5h0kUcSM25j3BrqAINIpRGqmmRGZhF6l2o1U3bn%2B5MLTuNc4tuj86r%2Bx8r6DGNKRyhmp6sjwQspzBHg5ApS1lYUtHCI3xf2F7LH1uz6IiMoyocrFjVRQsWVrxpjq1bgQbn6emGESwQFbWHSy%2F6xg1P9jMI77%2FWTvzzACgP3EjYU5dFlCP250dZUxF8&X-Amz-Signature=53a80910e5d56bf2acebca5d4df564193f1115408ca34c66b20993b7328891e1&X-Amz-SignedHeaders=host&x-id=GetObject)
