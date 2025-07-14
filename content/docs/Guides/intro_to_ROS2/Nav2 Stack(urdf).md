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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUOA7FX2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC0slDujC9WdrBl3V6kzO0HLTSvAvXireGucMXNynO60AIgPRrWarmNei5MoI89n5Uklv4c1X1B3UsCjeR5iQB76KYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLpu%2FfkF%2Bboz2ybDYircA7mC39YmNVYcBuFKwfMgy39wBl%2BttyhH3hbRQZOmUQ4ei48Bb8XNlXbuv11wgOraXiSeWINT4mWw1lPPA02Z5vK9VtG1yu8zPanfPTj%2Frod8Ke7CT4pKHM8QEh4K4auUJkr2fWXylfQmVMQgVZbz6fimMABtPy%2FvQ1nWl7MnC8KnsoFoUE3lkMO3FSfwN%2Fim1Bin%2BDflJj1d23hVUB0x8BWSqlEZVwTYMTmDV%2F0cg92e3e3gXHPSVo%2FRQpK8lB1OXqSQBQBwoGvus9TyAgdsEGpMEmaJ6J23t%2F7uPmhwHR4kMcH55TyLLu4qhIng1g5GjDEW6Vio%2BX8bgV9g0%2BUKp0tk1pRDNPE3DvL5gC0yOUoOms%2FaSpgCAGS0ci6GPl8mvbnsM1KQJaEpYEGNeJowcHpEpgbTGtkQNOaw0suRrF8ic7gVF%2BlvPXGDY0PsC%2FDuV3dibrgGbN9o2xOrAtPbQj6CdTz8H9Ff7fTu9usZ%2Bc27y74PH%2BDjB69oIPVPVp5k1WRfZ%2F15qUxn3I2rlJQaIoFoSZ87jSah38A0KOiBsRvbNwwAObqHoVCG1QaGmhaCzhYLSGL%2FKD2jjq3zPLZr1dyvznfMV4bg7mR9muMcj1DDuxxeswmbl7bXh7I%2BMMyF1MMGOqUBX%2FEvciyDtLDworwE9Fo88SYe2pRygoXrnqb7P%2FVjN75zUpC8LhGuSVohmdx2dUYvExAX%2Byz9485vB7PpIO7dZSVamh32pYZZNt6VWmC7zFgzNdq5XshmSVcb2MVOvgeY2ChOWm5nFIfOuOf1DHosFmF3nqx9o0LLSjrfkbEapYvTR3slPY2PLteUW%2Fa1vx9m7s%2BDFqvbU7AaJtafEsyHqMRujXcD&X-Amz-Signature=288e2e88d1c235596d66809b4c86f5aba5d1966e7f9a89631cd08379b5830110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUOA7FX2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC0slDujC9WdrBl3V6kzO0HLTSvAvXireGucMXNynO60AIgPRrWarmNei5MoI89n5Uklv4c1X1B3UsCjeR5iQB76KYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLpu%2FfkF%2Bboz2ybDYircA7mC39YmNVYcBuFKwfMgy39wBl%2BttyhH3hbRQZOmUQ4ei48Bb8XNlXbuv11wgOraXiSeWINT4mWw1lPPA02Z5vK9VtG1yu8zPanfPTj%2Frod8Ke7CT4pKHM8QEh4K4auUJkr2fWXylfQmVMQgVZbz6fimMABtPy%2FvQ1nWl7MnC8KnsoFoUE3lkMO3FSfwN%2Fim1Bin%2BDflJj1d23hVUB0x8BWSqlEZVwTYMTmDV%2F0cg92e3e3gXHPSVo%2FRQpK8lB1OXqSQBQBwoGvus9TyAgdsEGpMEmaJ6J23t%2F7uPmhwHR4kMcH55TyLLu4qhIng1g5GjDEW6Vio%2BX8bgV9g0%2BUKp0tk1pRDNPE3DvL5gC0yOUoOms%2FaSpgCAGS0ci6GPl8mvbnsM1KQJaEpYEGNeJowcHpEpgbTGtkQNOaw0suRrF8ic7gVF%2BlvPXGDY0PsC%2FDuV3dibrgGbN9o2xOrAtPbQj6CdTz8H9Ff7fTu9usZ%2Bc27y74PH%2BDjB69oIPVPVp5k1WRfZ%2F15qUxn3I2rlJQaIoFoSZ87jSah38A0KOiBsRvbNwwAObqHoVCG1QaGmhaCzhYLSGL%2FKD2jjq3zPLZr1dyvznfMV4bg7mR9muMcj1DDuxxeswmbl7bXh7I%2BMMyF1MMGOqUBX%2FEvciyDtLDworwE9Fo88SYe2pRygoXrnqb7P%2FVjN75zUpC8LhGuSVohmdx2dUYvExAX%2Byz9485vB7PpIO7dZSVamh32pYZZNt6VWmC7zFgzNdq5XshmSVcb2MVOvgeY2ChOWm5nFIfOuOf1DHosFmF3nqx9o0LLSjrfkbEapYvTR3slPY2PLteUW%2Fa1vx9m7s%2BDFqvbU7AaJtafEsyHqMRujXcD&X-Amz-Signature=f01d230c2f1b9b30cf56fc086a04644391e80ed6c4942d4c85c27229260d8895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUOA7FX2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC0slDujC9WdrBl3V6kzO0HLTSvAvXireGucMXNynO60AIgPRrWarmNei5MoI89n5Uklv4c1X1B3UsCjeR5iQB76KYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLpu%2FfkF%2Bboz2ybDYircA7mC39YmNVYcBuFKwfMgy39wBl%2BttyhH3hbRQZOmUQ4ei48Bb8XNlXbuv11wgOraXiSeWINT4mWw1lPPA02Z5vK9VtG1yu8zPanfPTj%2Frod8Ke7CT4pKHM8QEh4K4auUJkr2fWXylfQmVMQgVZbz6fimMABtPy%2FvQ1nWl7MnC8KnsoFoUE3lkMO3FSfwN%2Fim1Bin%2BDflJj1d23hVUB0x8BWSqlEZVwTYMTmDV%2F0cg92e3e3gXHPSVo%2FRQpK8lB1OXqSQBQBwoGvus9TyAgdsEGpMEmaJ6J23t%2F7uPmhwHR4kMcH55TyLLu4qhIng1g5GjDEW6Vio%2BX8bgV9g0%2BUKp0tk1pRDNPE3DvL5gC0yOUoOms%2FaSpgCAGS0ci6GPl8mvbnsM1KQJaEpYEGNeJowcHpEpgbTGtkQNOaw0suRrF8ic7gVF%2BlvPXGDY0PsC%2FDuV3dibrgGbN9o2xOrAtPbQj6CdTz8H9Ff7fTu9usZ%2Bc27y74PH%2BDjB69oIPVPVp5k1WRfZ%2F15qUxn3I2rlJQaIoFoSZ87jSah38A0KOiBsRvbNwwAObqHoVCG1QaGmhaCzhYLSGL%2FKD2jjq3zPLZr1dyvznfMV4bg7mR9muMcj1DDuxxeswmbl7bXh7I%2BMMyF1MMGOqUBX%2FEvciyDtLDworwE9Fo88SYe2pRygoXrnqb7P%2FVjN75zUpC8LhGuSVohmdx2dUYvExAX%2Byz9485vB7PpIO7dZSVamh32pYZZNt6VWmC7zFgzNdq5XshmSVcb2MVOvgeY2ChOWm5nFIfOuOf1DHosFmF3nqx9o0LLSjrfkbEapYvTR3slPY2PLteUW%2Fa1vx9m7s%2BDFqvbU7AaJtafEsyHqMRujXcD&X-Amz-Signature=74d52b96988a4d8097ae89cdf0ff1617790b22c10639d2238838982c5db2561a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUOA7FX2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC0slDujC9WdrBl3V6kzO0HLTSvAvXireGucMXNynO60AIgPRrWarmNei5MoI89n5Uklv4c1X1B3UsCjeR5iQB76KYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLpu%2FfkF%2Bboz2ybDYircA7mC39YmNVYcBuFKwfMgy39wBl%2BttyhH3hbRQZOmUQ4ei48Bb8XNlXbuv11wgOraXiSeWINT4mWw1lPPA02Z5vK9VtG1yu8zPanfPTj%2Frod8Ke7CT4pKHM8QEh4K4auUJkr2fWXylfQmVMQgVZbz6fimMABtPy%2FvQ1nWl7MnC8KnsoFoUE3lkMO3FSfwN%2Fim1Bin%2BDflJj1d23hVUB0x8BWSqlEZVwTYMTmDV%2F0cg92e3e3gXHPSVo%2FRQpK8lB1OXqSQBQBwoGvus9TyAgdsEGpMEmaJ6J23t%2F7uPmhwHR4kMcH55TyLLu4qhIng1g5GjDEW6Vio%2BX8bgV9g0%2BUKp0tk1pRDNPE3DvL5gC0yOUoOms%2FaSpgCAGS0ci6GPl8mvbnsM1KQJaEpYEGNeJowcHpEpgbTGtkQNOaw0suRrF8ic7gVF%2BlvPXGDY0PsC%2FDuV3dibrgGbN9o2xOrAtPbQj6CdTz8H9Ff7fTu9usZ%2Bc27y74PH%2BDjB69oIPVPVp5k1WRfZ%2F15qUxn3I2rlJQaIoFoSZ87jSah38A0KOiBsRvbNwwAObqHoVCG1QaGmhaCzhYLSGL%2FKD2jjq3zPLZr1dyvznfMV4bg7mR9muMcj1DDuxxeswmbl7bXh7I%2BMMyF1MMGOqUBX%2FEvciyDtLDworwE9Fo88SYe2pRygoXrnqb7P%2FVjN75zUpC8LhGuSVohmdx2dUYvExAX%2Byz9485vB7PpIO7dZSVamh32pYZZNt6VWmC7zFgzNdq5XshmSVcb2MVOvgeY2ChOWm5nFIfOuOf1DHosFmF3nqx9o0LLSjrfkbEapYvTR3slPY2PLteUW%2Fa1vx9m7s%2BDFqvbU7AaJtafEsyHqMRujXcD&X-Amz-Signature=e98fbb0ad0c001ce270846707a38f884989910798abdad8872bd9b7fd430c3f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUOA7FX2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC0slDujC9WdrBl3V6kzO0HLTSvAvXireGucMXNynO60AIgPRrWarmNei5MoI89n5Uklv4c1X1B3UsCjeR5iQB76KYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLpu%2FfkF%2Bboz2ybDYircA7mC39YmNVYcBuFKwfMgy39wBl%2BttyhH3hbRQZOmUQ4ei48Bb8XNlXbuv11wgOraXiSeWINT4mWw1lPPA02Z5vK9VtG1yu8zPanfPTj%2Frod8Ke7CT4pKHM8QEh4K4auUJkr2fWXylfQmVMQgVZbz6fimMABtPy%2FvQ1nWl7MnC8KnsoFoUE3lkMO3FSfwN%2Fim1Bin%2BDflJj1d23hVUB0x8BWSqlEZVwTYMTmDV%2F0cg92e3e3gXHPSVo%2FRQpK8lB1OXqSQBQBwoGvus9TyAgdsEGpMEmaJ6J23t%2F7uPmhwHR4kMcH55TyLLu4qhIng1g5GjDEW6Vio%2BX8bgV9g0%2BUKp0tk1pRDNPE3DvL5gC0yOUoOms%2FaSpgCAGS0ci6GPl8mvbnsM1KQJaEpYEGNeJowcHpEpgbTGtkQNOaw0suRrF8ic7gVF%2BlvPXGDY0PsC%2FDuV3dibrgGbN9o2xOrAtPbQj6CdTz8H9Ff7fTu9usZ%2Bc27y74PH%2BDjB69oIPVPVp5k1WRfZ%2F15qUxn3I2rlJQaIoFoSZ87jSah38A0KOiBsRvbNwwAObqHoVCG1QaGmhaCzhYLSGL%2FKD2jjq3zPLZr1dyvznfMV4bg7mR9muMcj1DDuxxeswmbl7bXh7I%2BMMyF1MMGOqUBX%2FEvciyDtLDworwE9Fo88SYe2pRygoXrnqb7P%2FVjN75zUpC8LhGuSVohmdx2dUYvExAX%2Byz9485vB7PpIO7dZSVamh32pYZZNt6VWmC7zFgzNdq5XshmSVcb2MVOvgeY2ChOWm5nFIfOuOf1DHosFmF3nqx9o0LLSjrfkbEapYvTR3slPY2PLteUW%2Fa1vx9m7s%2BDFqvbU7AaJtafEsyHqMRujXcD&X-Amz-Signature=1c86005bb94b046345c72460c9339b3ea4ea4cae17c243fa3f69c61945a36622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUOA7FX2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC0slDujC9WdrBl3V6kzO0HLTSvAvXireGucMXNynO60AIgPRrWarmNei5MoI89n5Uklv4c1X1B3UsCjeR5iQB76KYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLpu%2FfkF%2Bboz2ybDYircA7mC39YmNVYcBuFKwfMgy39wBl%2BttyhH3hbRQZOmUQ4ei48Bb8XNlXbuv11wgOraXiSeWINT4mWw1lPPA02Z5vK9VtG1yu8zPanfPTj%2Frod8Ke7CT4pKHM8QEh4K4auUJkr2fWXylfQmVMQgVZbz6fimMABtPy%2FvQ1nWl7MnC8KnsoFoUE3lkMO3FSfwN%2Fim1Bin%2BDflJj1d23hVUB0x8BWSqlEZVwTYMTmDV%2F0cg92e3e3gXHPSVo%2FRQpK8lB1OXqSQBQBwoGvus9TyAgdsEGpMEmaJ6J23t%2F7uPmhwHR4kMcH55TyLLu4qhIng1g5GjDEW6Vio%2BX8bgV9g0%2BUKp0tk1pRDNPE3DvL5gC0yOUoOms%2FaSpgCAGS0ci6GPl8mvbnsM1KQJaEpYEGNeJowcHpEpgbTGtkQNOaw0suRrF8ic7gVF%2BlvPXGDY0PsC%2FDuV3dibrgGbN9o2xOrAtPbQj6CdTz8H9Ff7fTu9usZ%2Bc27y74PH%2BDjB69oIPVPVp5k1WRfZ%2F15qUxn3I2rlJQaIoFoSZ87jSah38A0KOiBsRvbNwwAObqHoVCG1QaGmhaCzhYLSGL%2FKD2jjq3zPLZr1dyvznfMV4bg7mR9muMcj1DDuxxeswmbl7bXh7I%2BMMyF1MMGOqUBX%2FEvciyDtLDworwE9Fo88SYe2pRygoXrnqb7P%2FVjN75zUpC8LhGuSVohmdx2dUYvExAX%2Byz9485vB7PpIO7dZSVamh32pYZZNt6VWmC7zFgzNdq5XshmSVcb2MVOvgeY2ChOWm5nFIfOuOf1DHosFmF3nqx9o0LLSjrfkbEapYvTR3slPY2PLteUW%2Fa1vx9m7s%2BDFqvbU7AaJtafEsyHqMRujXcD&X-Amz-Signature=291db466fbb73658931f143555c51466e420078c815ab7121fa2e621062c3edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
