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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDJPBNX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDpE2h5r6bBaHF4HGzNuFdUJKDpXOZOfuSEjfK915t4uwIgL3v90%2BEeK4llmP9L7dBIDujnkL8N1qqPfH%2F2TK1fLbkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFogKAYwYvVH0kCJ6yrcA%2Frcpufx3oTEFDFlEgHxTmZtF%2BRHdVZ7BJEhIS7p%2BhqwGuIu3DiEzo1lcVBXiPMHqcM8pvOw3zv834kAq%2FmMqeAqmK%2B5QCQEoF6L52sQux3eQvTqRzS8lF4rkTR%2Bypc4%2FF%2BB%2FeqE26LQNhaPMectXt7C2nfrV9ffslhAodfLke%2BifClWJVLl30tGONjKbO%2FNXDbD2%2B10974q4pVrMa7iQCKOV%2ByuC6DsiYDpfneodijoZSBmhlgLZN0HhXto3YWZhvmo%2Fku78q9o2farlvzzReevTMHEITxZKYq83hOLHlDqwbnYyeIPDxFOFnh6bHGvZ3MBhNwLNKAvFYAQ7%2FYhZTpFmEraRfnrYDh%2F4HQC%2Bj1pOv3E1T2K3E44HIxzwKYI9mBhPV1DAPFs1zku0%2B549MEbBEmA5C%2Fo0O6ZGRCK%2FpSQua8%2Bn8TrCd1tq%2Fm1l5EO2bHcGzdnqTuCHSKYxdwjeopMWSiGaXRRJICchTYsRjJtzTGMcjdJBUBTj1J1PlUP6ENCKFWJTvq8DmKHOqH23VmrnycWsPM1E4vsBBSNqrCRc4eP0ajV9tfPBCJEHZgCelKmJnLMmb%2BXxLv7%2FA5Oi1y%2FP0ec3wcuUTXDA2iQIPhwCCZubIi9QhHqL0YCMKugj8AGOqUBvuPkcS0ArVG7j4T74hpAvvHf%2BiCH3atTvZP9I73CLFiyNKUAUA%2FDwDUak0KyOk6b8gf4nPaE1wBrkNbOSuyxPAM3jd15gDN6lC4HkUrbp%2F%2BOpki1yiR3dW%2FEM9ZetlnzxkeLUq2%2BSjs3GSgMFCrsaZimAN9LR4LPyJaZEc7Qjfp76aP4yII6p2DPLKDyeWGhGRtmiSbk0Ysk%2FlKTXSpg3Th4gNW1&X-Amz-Signature=28d9cbd40e4757d5c15f8660f9f2a597f534629c84fd45a200237da8c3891e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDJPBNX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDpE2h5r6bBaHF4HGzNuFdUJKDpXOZOfuSEjfK915t4uwIgL3v90%2BEeK4llmP9L7dBIDujnkL8N1qqPfH%2F2TK1fLbkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFogKAYwYvVH0kCJ6yrcA%2Frcpufx3oTEFDFlEgHxTmZtF%2BRHdVZ7BJEhIS7p%2BhqwGuIu3DiEzo1lcVBXiPMHqcM8pvOw3zv834kAq%2FmMqeAqmK%2B5QCQEoF6L52sQux3eQvTqRzS8lF4rkTR%2Bypc4%2FF%2BB%2FeqE26LQNhaPMectXt7C2nfrV9ffslhAodfLke%2BifClWJVLl30tGONjKbO%2FNXDbD2%2B10974q4pVrMa7iQCKOV%2ByuC6DsiYDpfneodijoZSBmhlgLZN0HhXto3YWZhvmo%2Fku78q9o2farlvzzReevTMHEITxZKYq83hOLHlDqwbnYyeIPDxFOFnh6bHGvZ3MBhNwLNKAvFYAQ7%2FYhZTpFmEraRfnrYDh%2F4HQC%2Bj1pOv3E1T2K3E44HIxzwKYI9mBhPV1DAPFs1zku0%2B549MEbBEmA5C%2Fo0O6ZGRCK%2FpSQua8%2Bn8TrCd1tq%2Fm1l5EO2bHcGzdnqTuCHSKYxdwjeopMWSiGaXRRJICchTYsRjJtzTGMcjdJBUBTj1J1PlUP6ENCKFWJTvq8DmKHOqH23VmrnycWsPM1E4vsBBSNqrCRc4eP0ajV9tfPBCJEHZgCelKmJnLMmb%2BXxLv7%2FA5Oi1y%2FP0ec3wcuUTXDA2iQIPhwCCZubIi9QhHqL0YCMKugj8AGOqUBvuPkcS0ArVG7j4T74hpAvvHf%2BiCH3atTvZP9I73CLFiyNKUAUA%2FDwDUak0KyOk6b8gf4nPaE1wBrkNbOSuyxPAM3jd15gDN6lC4HkUrbp%2F%2BOpki1yiR3dW%2FEM9ZetlnzxkeLUq2%2BSjs3GSgMFCrsaZimAN9LR4LPyJaZEc7Qjfp76aP4yII6p2DPLKDyeWGhGRtmiSbk0Ysk%2FlKTXSpg3Th4gNW1&X-Amz-Signature=e772e6cb088ee4007148f96c1b4c808f39b59bdbb78126b3c56b2995bd4bc637&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDJPBNX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDpE2h5r6bBaHF4HGzNuFdUJKDpXOZOfuSEjfK915t4uwIgL3v90%2BEeK4llmP9L7dBIDujnkL8N1qqPfH%2F2TK1fLbkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFogKAYwYvVH0kCJ6yrcA%2Frcpufx3oTEFDFlEgHxTmZtF%2BRHdVZ7BJEhIS7p%2BhqwGuIu3DiEzo1lcVBXiPMHqcM8pvOw3zv834kAq%2FmMqeAqmK%2B5QCQEoF6L52sQux3eQvTqRzS8lF4rkTR%2Bypc4%2FF%2BB%2FeqE26LQNhaPMectXt7C2nfrV9ffslhAodfLke%2BifClWJVLl30tGONjKbO%2FNXDbD2%2B10974q4pVrMa7iQCKOV%2ByuC6DsiYDpfneodijoZSBmhlgLZN0HhXto3YWZhvmo%2Fku78q9o2farlvzzReevTMHEITxZKYq83hOLHlDqwbnYyeIPDxFOFnh6bHGvZ3MBhNwLNKAvFYAQ7%2FYhZTpFmEraRfnrYDh%2F4HQC%2Bj1pOv3E1T2K3E44HIxzwKYI9mBhPV1DAPFs1zku0%2B549MEbBEmA5C%2Fo0O6ZGRCK%2FpSQua8%2Bn8TrCd1tq%2Fm1l5EO2bHcGzdnqTuCHSKYxdwjeopMWSiGaXRRJICchTYsRjJtzTGMcjdJBUBTj1J1PlUP6ENCKFWJTvq8DmKHOqH23VmrnycWsPM1E4vsBBSNqrCRc4eP0ajV9tfPBCJEHZgCelKmJnLMmb%2BXxLv7%2FA5Oi1y%2FP0ec3wcuUTXDA2iQIPhwCCZubIi9QhHqL0YCMKugj8AGOqUBvuPkcS0ArVG7j4T74hpAvvHf%2BiCH3atTvZP9I73CLFiyNKUAUA%2FDwDUak0KyOk6b8gf4nPaE1wBrkNbOSuyxPAM3jd15gDN6lC4HkUrbp%2F%2BOpki1yiR3dW%2FEM9ZetlnzxkeLUq2%2BSjs3GSgMFCrsaZimAN9LR4LPyJaZEc7Qjfp76aP4yII6p2DPLKDyeWGhGRtmiSbk0Ysk%2FlKTXSpg3Th4gNW1&X-Amz-Signature=c98b7cb0e1d5704423ebd0787b1ce58b307816c65896b53e6323712c59bb77e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDJPBNX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDpE2h5r6bBaHF4HGzNuFdUJKDpXOZOfuSEjfK915t4uwIgL3v90%2BEeK4llmP9L7dBIDujnkL8N1qqPfH%2F2TK1fLbkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFogKAYwYvVH0kCJ6yrcA%2Frcpufx3oTEFDFlEgHxTmZtF%2BRHdVZ7BJEhIS7p%2BhqwGuIu3DiEzo1lcVBXiPMHqcM8pvOw3zv834kAq%2FmMqeAqmK%2B5QCQEoF6L52sQux3eQvTqRzS8lF4rkTR%2Bypc4%2FF%2BB%2FeqE26LQNhaPMectXt7C2nfrV9ffslhAodfLke%2BifClWJVLl30tGONjKbO%2FNXDbD2%2B10974q4pVrMa7iQCKOV%2ByuC6DsiYDpfneodijoZSBmhlgLZN0HhXto3YWZhvmo%2Fku78q9o2farlvzzReevTMHEITxZKYq83hOLHlDqwbnYyeIPDxFOFnh6bHGvZ3MBhNwLNKAvFYAQ7%2FYhZTpFmEraRfnrYDh%2F4HQC%2Bj1pOv3E1T2K3E44HIxzwKYI9mBhPV1DAPFs1zku0%2B549MEbBEmA5C%2Fo0O6ZGRCK%2FpSQua8%2Bn8TrCd1tq%2Fm1l5EO2bHcGzdnqTuCHSKYxdwjeopMWSiGaXRRJICchTYsRjJtzTGMcjdJBUBTj1J1PlUP6ENCKFWJTvq8DmKHOqH23VmrnycWsPM1E4vsBBSNqrCRc4eP0ajV9tfPBCJEHZgCelKmJnLMmb%2BXxLv7%2FA5Oi1y%2FP0ec3wcuUTXDA2iQIPhwCCZubIi9QhHqL0YCMKugj8AGOqUBvuPkcS0ArVG7j4T74hpAvvHf%2BiCH3atTvZP9I73CLFiyNKUAUA%2FDwDUak0KyOk6b8gf4nPaE1wBrkNbOSuyxPAM3jd15gDN6lC4HkUrbp%2F%2BOpki1yiR3dW%2FEM9ZetlnzxkeLUq2%2BSjs3GSgMFCrsaZimAN9LR4LPyJaZEc7Qjfp76aP4yII6p2DPLKDyeWGhGRtmiSbk0Ysk%2FlKTXSpg3Th4gNW1&X-Amz-Signature=5ec45a035d1a0d7b2afcfa3cde44bb4e5e3c15b1ecfd3cd88a1a79ae27008f59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDJPBNX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDpE2h5r6bBaHF4HGzNuFdUJKDpXOZOfuSEjfK915t4uwIgL3v90%2BEeK4llmP9L7dBIDujnkL8N1qqPfH%2F2TK1fLbkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFogKAYwYvVH0kCJ6yrcA%2Frcpufx3oTEFDFlEgHxTmZtF%2BRHdVZ7BJEhIS7p%2BhqwGuIu3DiEzo1lcVBXiPMHqcM8pvOw3zv834kAq%2FmMqeAqmK%2B5QCQEoF6L52sQux3eQvTqRzS8lF4rkTR%2Bypc4%2FF%2BB%2FeqE26LQNhaPMectXt7C2nfrV9ffslhAodfLke%2BifClWJVLl30tGONjKbO%2FNXDbD2%2B10974q4pVrMa7iQCKOV%2ByuC6DsiYDpfneodijoZSBmhlgLZN0HhXto3YWZhvmo%2Fku78q9o2farlvzzReevTMHEITxZKYq83hOLHlDqwbnYyeIPDxFOFnh6bHGvZ3MBhNwLNKAvFYAQ7%2FYhZTpFmEraRfnrYDh%2F4HQC%2Bj1pOv3E1T2K3E44HIxzwKYI9mBhPV1DAPFs1zku0%2B549MEbBEmA5C%2Fo0O6ZGRCK%2FpSQua8%2Bn8TrCd1tq%2Fm1l5EO2bHcGzdnqTuCHSKYxdwjeopMWSiGaXRRJICchTYsRjJtzTGMcjdJBUBTj1J1PlUP6ENCKFWJTvq8DmKHOqH23VmrnycWsPM1E4vsBBSNqrCRc4eP0ajV9tfPBCJEHZgCelKmJnLMmb%2BXxLv7%2FA5Oi1y%2FP0ec3wcuUTXDA2iQIPhwCCZubIi9QhHqL0YCMKugj8AGOqUBvuPkcS0ArVG7j4T74hpAvvHf%2BiCH3atTvZP9I73CLFiyNKUAUA%2FDwDUak0KyOk6b8gf4nPaE1wBrkNbOSuyxPAM3jd15gDN6lC4HkUrbp%2F%2BOpki1yiR3dW%2FEM9ZetlnzxkeLUq2%2BSjs3GSgMFCrsaZimAN9LR4LPyJaZEc7Qjfp76aP4yII6p2DPLKDyeWGhGRtmiSbk0Ysk%2FlKTXSpg3Th4gNW1&X-Amz-Signature=c1f4303b0e282f5d30bab938c5302772fb9c6b6bde4f8ee6c808e8026f234b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWDJPBNX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDpE2h5r6bBaHF4HGzNuFdUJKDpXOZOfuSEjfK915t4uwIgL3v90%2BEeK4llmP9L7dBIDujnkL8N1qqPfH%2F2TK1fLbkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFogKAYwYvVH0kCJ6yrcA%2Frcpufx3oTEFDFlEgHxTmZtF%2BRHdVZ7BJEhIS7p%2BhqwGuIu3DiEzo1lcVBXiPMHqcM8pvOw3zv834kAq%2FmMqeAqmK%2B5QCQEoF6L52sQux3eQvTqRzS8lF4rkTR%2Bypc4%2FF%2BB%2FeqE26LQNhaPMectXt7C2nfrV9ffslhAodfLke%2BifClWJVLl30tGONjKbO%2FNXDbD2%2B10974q4pVrMa7iQCKOV%2ByuC6DsiYDpfneodijoZSBmhlgLZN0HhXto3YWZhvmo%2Fku78q9o2farlvzzReevTMHEITxZKYq83hOLHlDqwbnYyeIPDxFOFnh6bHGvZ3MBhNwLNKAvFYAQ7%2FYhZTpFmEraRfnrYDh%2F4HQC%2Bj1pOv3E1T2K3E44HIxzwKYI9mBhPV1DAPFs1zku0%2B549MEbBEmA5C%2Fo0O6ZGRCK%2FpSQua8%2Bn8TrCd1tq%2Fm1l5EO2bHcGzdnqTuCHSKYxdwjeopMWSiGaXRRJICchTYsRjJtzTGMcjdJBUBTj1J1PlUP6ENCKFWJTvq8DmKHOqH23VmrnycWsPM1E4vsBBSNqrCRc4eP0ajV9tfPBCJEHZgCelKmJnLMmb%2BXxLv7%2FA5Oi1y%2FP0ec3wcuUTXDA2iQIPhwCCZubIi9QhHqL0YCMKugj8AGOqUBvuPkcS0ArVG7j4T74hpAvvHf%2BiCH3atTvZP9I73CLFiyNKUAUA%2FDwDUak0KyOk6b8gf4nPaE1wBrkNbOSuyxPAM3jd15gDN6lC4HkUrbp%2F%2BOpki1yiR3dW%2FEM9ZetlnzxkeLUq2%2BSjs3GSgMFCrsaZimAN9LR4LPyJaZEc7Qjfp76aP4yII6p2DPLKDyeWGhGRtmiSbk0Ysk%2FlKTXSpg3Th4gNW1&X-Amz-Signature=a76148ae1262d016c3870ae67fbfab4c00a7e9b4f09f6ec77311a6e7e8b1b8e2&X-Amz-SignedHeaders=host&x-id=GetObject)
