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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NVVRTL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3TcLNzMr1Yj%2BLtj%2F0cdNODMnw4HnkbLN%2FHT%2BM60puWwIgJmHNvwvwyGNV8ZK950UfbPcjyX5UdhX3Sb9YRcAPOxEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDD4yF8n0YmdtDUMfmircA8UFPvNwCzIZ%2Flqfw%2F5mxq7I54jRSBWvywDlzdv%2BR8GmoCH7%2B%2F2ItADBpzFjtEZK3bX1jSaZN1GgAjShxGERUj%2BzsqHYA7UG7GA0sq%2FIsh%2BwHIDzSPbx%2FOGagVATQPRC0yHA94PCKY6kUjqjS%2B9J8OhQ003jZ5uemrs2ovcmBsiNB2KD7ojGoE6pssDWE2YoV2%2FJu4mP6dBYS%2BnNpHtKYPN7oUA6sam9HOUVay8DrVo8KKxwXp73LjFEF%2F45%2BpsE1%2BWoRB5LHZOYjFxExs8l%2BBUh6S%2BCRPSbQiaixEdPA2qKePWe20Xs%2B9KcBcRtekfM7Xv3gYPK0XZkgoBmsqsTlmYgdam6MEx%2FRqae1rPVje%2F8%2BISuiC%2BIpGRsObtYbo209spTt25SVTeTH47UTsTaOoM2Hg1S3tLt%2BwydTjRkpzg93%2FJZha6kGTAk4kexKzx5Xo1LPxlaRRt8ICAfHXErjM76i36T64vN%2BmSDJOTcuG9QoUlqwSqJOiFzlROhvYOpJK9aaGP72w%2BYSQBlUnVSmK5AH%2FUee0GgvvC89jZb67u680iy0bSMK0G%2BtDldCcCpJ7u7pMubshm1JB2TfnMXsu%2BdECo4%2BLBAAJn4DNsYIxcreY3PJtvGaFab%2BGoSML3q2b4GOqUBjHHEb5OIyUGJZG9P51avDDZFnxMQNIpBsvZEzfSjTELp2xQtUv1qC3cmbTpQTB%2Bk81Tb1oWUWzUL59%2BaxUiKxiIGYvqeFFC0e7Fso5NXQ9z3263K1scwl4MKV4Xki6rfp3OBCe4nzC3JNDUn8AYdR1EbNn7XGDwCnzju7UjpwVcImp29t%2F4NOLqNEh%2Fb4MuVWxdKmWd4S%2BXZpLBq3M4B2hC33RZJ&X-Amz-Signature=ab4725d4d34e2a76c7834ccc2fdd1fab95606a1b2d39599f9c03951f9a7fa3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NVVRTL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3TcLNzMr1Yj%2BLtj%2F0cdNODMnw4HnkbLN%2FHT%2BM60puWwIgJmHNvwvwyGNV8ZK950UfbPcjyX5UdhX3Sb9YRcAPOxEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDD4yF8n0YmdtDUMfmircA8UFPvNwCzIZ%2Flqfw%2F5mxq7I54jRSBWvywDlzdv%2BR8GmoCH7%2B%2F2ItADBpzFjtEZK3bX1jSaZN1GgAjShxGERUj%2BzsqHYA7UG7GA0sq%2FIsh%2BwHIDzSPbx%2FOGagVATQPRC0yHA94PCKY6kUjqjS%2B9J8OhQ003jZ5uemrs2ovcmBsiNB2KD7ojGoE6pssDWE2YoV2%2FJu4mP6dBYS%2BnNpHtKYPN7oUA6sam9HOUVay8DrVo8KKxwXp73LjFEF%2F45%2BpsE1%2BWoRB5LHZOYjFxExs8l%2BBUh6S%2BCRPSbQiaixEdPA2qKePWe20Xs%2B9KcBcRtekfM7Xv3gYPK0XZkgoBmsqsTlmYgdam6MEx%2FRqae1rPVje%2F8%2BISuiC%2BIpGRsObtYbo209spTt25SVTeTH47UTsTaOoM2Hg1S3tLt%2BwydTjRkpzg93%2FJZha6kGTAk4kexKzx5Xo1LPxlaRRt8ICAfHXErjM76i36T64vN%2BmSDJOTcuG9QoUlqwSqJOiFzlROhvYOpJK9aaGP72w%2BYSQBlUnVSmK5AH%2FUee0GgvvC89jZb67u680iy0bSMK0G%2BtDldCcCpJ7u7pMubshm1JB2TfnMXsu%2BdECo4%2BLBAAJn4DNsYIxcreY3PJtvGaFab%2BGoSML3q2b4GOqUBjHHEb5OIyUGJZG9P51avDDZFnxMQNIpBsvZEzfSjTELp2xQtUv1qC3cmbTpQTB%2Bk81Tb1oWUWzUL59%2BaxUiKxiIGYvqeFFC0e7Fso5NXQ9z3263K1scwl4MKV4Xki6rfp3OBCe4nzC3JNDUn8AYdR1EbNn7XGDwCnzju7UjpwVcImp29t%2F4NOLqNEh%2Fb4MuVWxdKmWd4S%2BXZpLBq3M4B2hC33RZJ&X-Amz-Signature=8ff5169b5b578613d0c726c787772693c481c349ef463f37e0a00072c93e1606&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NVVRTL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3TcLNzMr1Yj%2BLtj%2F0cdNODMnw4HnkbLN%2FHT%2BM60puWwIgJmHNvwvwyGNV8ZK950UfbPcjyX5UdhX3Sb9YRcAPOxEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDD4yF8n0YmdtDUMfmircA8UFPvNwCzIZ%2Flqfw%2F5mxq7I54jRSBWvywDlzdv%2BR8GmoCH7%2B%2F2ItADBpzFjtEZK3bX1jSaZN1GgAjShxGERUj%2BzsqHYA7UG7GA0sq%2FIsh%2BwHIDzSPbx%2FOGagVATQPRC0yHA94PCKY6kUjqjS%2B9J8OhQ003jZ5uemrs2ovcmBsiNB2KD7ojGoE6pssDWE2YoV2%2FJu4mP6dBYS%2BnNpHtKYPN7oUA6sam9HOUVay8DrVo8KKxwXp73LjFEF%2F45%2BpsE1%2BWoRB5LHZOYjFxExs8l%2BBUh6S%2BCRPSbQiaixEdPA2qKePWe20Xs%2B9KcBcRtekfM7Xv3gYPK0XZkgoBmsqsTlmYgdam6MEx%2FRqae1rPVje%2F8%2BISuiC%2BIpGRsObtYbo209spTt25SVTeTH47UTsTaOoM2Hg1S3tLt%2BwydTjRkpzg93%2FJZha6kGTAk4kexKzx5Xo1LPxlaRRt8ICAfHXErjM76i36T64vN%2BmSDJOTcuG9QoUlqwSqJOiFzlROhvYOpJK9aaGP72w%2BYSQBlUnVSmK5AH%2FUee0GgvvC89jZb67u680iy0bSMK0G%2BtDldCcCpJ7u7pMubshm1JB2TfnMXsu%2BdECo4%2BLBAAJn4DNsYIxcreY3PJtvGaFab%2BGoSML3q2b4GOqUBjHHEb5OIyUGJZG9P51avDDZFnxMQNIpBsvZEzfSjTELp2xQtUv1qC3cmbTpQTB%2Bk81Tb1oWUWzUL59%2BaxUiKxiIGYvqeFFC0e7Fso5NXQ9z3263K1scwl4MKV4Xki6rfp3OBCe4nzC3JNDUn8AYdR1EbNn7XGDwCnzju7UjpwVcImp29t%2F4NOLqNEh%2Fb4MuVWxdKmWd4S%2BXZpLBq3M4B2hC33RZJ&X-Amz-Signature=27c6a14c510ee384d8cd25fc17f6da7997829d55e4b727fabae6a58e6a4783ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NVVRTL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3TcLNzMr1Yj%2BLtj%2F0cdNODMnw4HnkbLN%2FHT%2BM60puWwIgJmHNvwvwyGNV8ZK950UfbPcjyX5UdhX3Sb9YRcAPOxEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDD4yF8n0YmdtDUMfmircA8UFPvNwCzIZ%2Flqfw%2F5mxq7I54jRSBWvywDlzdv%2BR8GmoCH7%2B%2F2ItADBpzFjtEZK3bX1jSaZN1GgAjShxGERUj%2BzsqHYA7UG7GA0sq%2FIsh%2BwHIDzSPbx%2FOGagVATQPRC0yHA94PCKY6kUjqjS%2B9J8OhQ003jZ5uemrs2ovcmBsiNB2KD7ojGoE6pssDWE2YoV2%2FJu4mP6dBYS%2BnNpHtKYPN7oUA6sam9HOUVay8DrVo8KKxwXp73LjFEF%2F45%2BpsE1%2BWoRB5LHZOYjFxExs8l%2BBUh6S%2BCRPSbQiaixEdPA2qKePWe20Xs%2B9KcBcRtekfM7Xv3gYPK0XZkgoBmsqsTlmYgdam6MEx%2FRqae1rPVje%2F8%2BISuiC%2BIpGRsObtYbo209spTt25SVTeTH47UTsTaOoM2Hg1S3tLt%2BwydTjRkpzg93%2FJZha6kGTAk4kexKzx5Xo1LPxlaRRt8ICAfHXErjM76i36T64vN%2BmSDJOTcuG9QoUlqwSqJOiFzlROhvYOpJK9aaGP72w%2BYSQBlUnVSmK5AH%2FUee0GgvvC89jZb67u680iy0bSMK0G%2BtDldCcCpJ7u7pMubshm1JB2TfnMXsu%2BdECo4%2BLBAAJn4DNsYIxcreY3PJtvGaFab%2BGoSML3q2b4GOqUBjHHEb5OIyUGJZG9P51avDDZFnxMQNIpBsvZEzfSjTELp2xQtUv1qC3cmbTpQTB%2Bk81Tb1oWUWzUL59%2BaxUiKxiIGYvqeFFC0e7Fso5NXQ9z3263K1scwl4MKV4Xki6rfp3OBCe4nzC3JNDUn8AYdR1EbNn7XGDwCnzju7UjpwVcImp29t%2F4NOLqNEh%2Fb4MuVWxdKmWd4S%2BXZpLBq3M4B2hC33RZJ&X-Amz-Signature=6eb6cbe01f09406f0d6546b9e66c117a7ef96cb4a86bb1f705201e11bc16a838&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NVVRTL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3TcLNzMr1Yj%2BLtj%2F0cdNODMnw4HnkbLN%2FHT%2BM60puWwIgJmHNvwvwyGNV8ZK950UfbPcjyX5UdhX3Sb9YRcAPOxEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDD4yF8n0YmdtDUMfmircA8UFPvNwCzIZ%2Flqfw%2F5mxq7I54jRSBWvywDlzdv%2BR8GmoCH7%2B%2F2ItADBpzFjtEZK3bX1jSaZN1GgAjShxGERUj%2BzsqHYA7UG7GA0sq%2FIsh%2BwHIDzSPbx%2FOGagVATQPRC0yHA94PCKY6kUjqjS%2B9J8OhQ003jZ5uemrs2ovcmBsiNB2KD7ojGoE6pssDWE2YoV2%2FJu4mP6dBYS%2BnNpHtKYPN7oUA6sam9HOUVay8DrVo8KKxwXp73LjFEF%2F45%2BpsE1%2BWoRB5LHZOYjFxExs8l%2BBUh6S%2BCRPSbQiaixEdPA2qKePWe20Xs%2B9KcBcRtekfM7Xv3gYPK0XZkgoBmsqsTlmYgdam6MEx%2FRqae1rPVje%2F8%2BISuiC%2BIpGRsObtYbo209spTt25SVTeTH47UTsTaOoM2Hg1S3tLt%2BwydTjRkpzg93%2FJZha6kGTAk4kexKzx5Xo1LPxlaRRt8ICAfHXErjM76i36T64vN%2BmSDJOTcuG9QoUlqwSqJOiFzlROhvYOpJK9aaGP72w%2BYSQBlUnVSmK5AH%2FUee0GgvvC89jZb67u680iy0bSMK0G%2BtDldCcCpJ7u7pMubshm1JB2TfnMXsu%2BdECo4%2BLBAAJn4DNsYIxcreY3PJtvGaFab%2BGoSML3q2b4GOqUBjHHEb5OIyUGJZG9P51avDDZFnxMQNIpBsvZEzfSjTELp2xQtUv1qC3cmbTpQTB%2Bk81Tb1oWUWzUL59%2BaxUiKxiIGYvqeFFC0e7Fso5NXQ9z3263K1scwl4MKV4Xki6rfp3OBCe4nzC3JNDUn8AYdR1EbNn7XGDwCnzju7UjpwVcImp29t%2F4NOLqNEh%2Fb4MuVWxdKmWd4S%2BXZpLBq3M4B2hC33RZJ&X-Amz-Signature=66e8845964c95974bd740ad3ad0b5091f253419a2d256b6a69643ab235c38ace&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NVVRTL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3TcLNzMr1Yj%2BLtj%2F0cdNODMnw4HnkbLN%2FHT%2BM60puWwIgJmHNvwvwyGNV8ZK950UfbPcjyX5UdhX3Sb9YRcAPOxEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDD4yF8n0YmdtDUMfmircA8UFPvNwCzIZ%2Flqfw%2F5mxq7I54jRSBWvywDlzdv%2BR8GmoCH7%2B%2F2ItADBpzFjtEZK3bX1jSaZN1GgAjShxGERUj%2BzsqHYA7UG7GA0sq%2FIsh%2BwHIDzSPbx%2FOGagVATQPRC0yHA94PCKY6kUjqjS%2B9J8OhQ003jZ5uemrs2ovcmBsiNB2KD7ojGoE6pssDWE2YoV2%2FJu4mP6dBYS%2BnNpHtKYPN7oUA6sam9HOUVay8DrVo8KKxwXp73LjFEF%2F45%2BpsE1%2BWoRB5LHZOYjFxExs8l%2BBUh6S%2BCRPSbQiaixEdPA2qKePWe20Xs%2B9KcBcRtekfM7Xv3gYPK0XZkgoBmsqsTlmYgdam6MEx%2FRqae1rPVje%2F8%2BISuiC%2BIpGRsObtYbo209spTt25SVTeTH47UTsTaOoM2Hg1S3tLt%2BwydTjRkpzg93%2FJZha6kGTAk4kexKzx5Xo1LPxlaRRt8ICAfHXErjM76i36T64vN%2BmSDJOTcuG9QoUlqwSqJOiFzlROhvYOpJK9aaGP72w%2BYSQBlUnVSmK5AH%2FUee0GgvvC89jZb67u680iy0bSMK0G%2BtDldCcCpJ7u7pMubshm1JB2TfnMXsu%2BdECo4%2BLBAAJn4DNsYIxcreY3PJtvGaFab%2BGoSML3q2b4GOqUBjHHEb5OIyUGJZG9P51avDDZFnxMQNIpBsvZEzfSjTELp2xQtUv1qC3cmbTpQTB%2Bk81Tb1oWUWzUL59%2BaxUiKxiIGYvqeFFC0e7Fso5NXQ9z3263K1scwl4MKV4Xki6rfp3OBCe4nzC3JNDUn8AYdR1EbNn7XGDwCnzju7UjpwVcImp29t%2F4NOLqNEh%2Fb4MuVWxdKmWd4S%2BXZpLBq3M4B2hC33RZJ&X-Amz-Signature=106f2c14c2266b721046e5790490563dc9edcaec4013164932b9ea6a7e3306b4&X-Amz-SignedHeaders=host&x-id=GetObject)
