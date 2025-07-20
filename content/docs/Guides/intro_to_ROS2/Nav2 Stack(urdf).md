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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRV62QJ4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTXI%2BmxnIN4hyp9%2FLkKPVdkvExuv23Aa7qUOPgm3lZnwIgDSe28c%2BSl9HePcSzuZ8el3r%2FBYvIBObGySueSU1%2FYIsqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvmproYkHbWwOAOUSrcA75LcVWsfWVcScjZKCjCk0juqV2L%2BJ4DutMtNATFzjJfRN9G2B2ATd96k9TWBqrmtlG8PtDtB10M1JSzdtkwrHNZtjMb7MfpJvJwwp2q%2Bf8tzJWJrgczZ%2FBsv%2FsEXnCcPnseHRh2Ik5%2Bbn7hkP3pS2j5JNCSqeJ1B0Si6fc64KTR0nTL02blQGV3YoLgUDCu2%2FpA8E6HjAQO%2B8k3ihueONSwjdo9Zw6TYjj8uykUeIQtrqJ1ohQ%2FpSjU7BczeUR272fs7jOHPYmiIsOjAbasD85uRAD1TqDyNNQjdvwpf66ag%2FBM7w78xTtfbTVuoxBrstQAt83UfEFxmFo319sTBddxyR%2FMOf9%2FcJlG6eqvjT7DAMXCsVzSIqbOeEN57CniMbpa113Qe44Ai15gxtQDGmPBUHeDeJxuNan4eNMKHH%2FOFinAxrk%2FItnJ1WlEEzE9RfpR%2FY5fHygwk6J14heZq%2FQp7RSuy9qBLpeYyTYl4rgSeOmAvcZj8qfMv75nz9uXnY2xJ6amDem93vQPVsG1KgU2TH1%2Fyb5ZytdbMn7WBdv4bWDDISqX8A7ZDHkW3SRkzoGeaTTaaX1X5YiNNW0Un7F9dJhSWSa22cmcGthBSmfvinlly%2BBcZxSCgDJ1MKH19MMGOqUB4%2Bx27uqDF5zHRfPMNr2SIKShfo1e%2BlRvpoW642vO%2FKYXr9TtJteUg5fib0Mi5igy1JAdMBA3bmIs%2BM%2BOUb%2F6Ah59jy%2FZzwEavLWIgggM%2FLhA8Z677u5FyZUuPQsjPKjfRR6Te9G%2FaK5wVIGHsJ7LpR5iFVobaiHCHJYaqikZEAUlVPeWlvPpKclXvDYpU3AwxLoJrMCYs32n7efFxfDlKTXADBrJ&X-Amz-Signature=f43348ab745f69c3cbf4420af3211f6d703b20f50076d99caac25a84f69733a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRV62QJ4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTXI%2BmxnIN4hyp9%2FLkKPVdkvExuv23Aa7qUOPgm3lZnwIgDSe28c%2BSl9HePcSzuZ8el3r%2FBYvIBObGySueSU1%2FYIsqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvmproYkHbWwOAOUSrcA75LcVWsfWVcScjZKCjCk0juqV2L%2BJ4DutMtNATFzjJfRN9G2B2ATd96k9TWBqrmtlG8PtDtB10M1JSzdtkwrHNZtjMb7MfpJvJwwp2q%2Bf8tzJWJrgczZ%2FBsv%2FsEXnCcPnseHRh2Ik5%2Bbn7hkP3pS2j5JNCSqeJ1B0Si6fc64KTR0nTL02blQGV3YoLgUDCu2%2FpA8E6HjAQO%2B8k3ihueONSwjdo9Zw6TYjj8uykUeIQtrqJ1ohQ%2FpSjU7BczeUR272fs7jOHPYmiIsOjAbasD85uRAD1TqDyNNQjdvwpf66ag%2FBM7w78xTtfbTVuoxBrstQAt83UfEFxmFo319sTBddxyR%2FMOf9%2FcJlG6eqvjT7DAMXCsVzSIqbOeEN57CniMbpa113Qe44Ai15gxtQDGmPBUHeDeJxuNan4eNMKHH%2FOFinAxrk%2FItnJ1WlEEzE9RfpR%2FY5fHygwk6J14heZq%2FQp7RSuy9qBLpeYyTYl4rgSeOmAvcZj8qfMv75nz9uXnY2xJ6amDem93vQPVsG1KgU2TH1%2Fyb5ZytdbMn7WBdv4bWDDISqX8A7ZDHkW3SRkzoGeaTTaaX1X5YiNNW0Un7F9dJhSWSa22cmcGthBSmfvinlly%2BBcZxSCgDJ1MKH19MMGOqUB4%2Bx27uqDF5zHRfPMNr2SIKShfo1e%2BlRvpoW642vO%2FKYXr9TtJteUg5fib0Mi5igy1JAdMBA3bmIs%2BM%2BOUb%2F6Ah59jy%2FZzwEavLWIgggM%2FLhA8Z677u5FyZUuPQsjPKjfRR6Te9G%2FaK5wVIGHsJ7LpR5iFVobaiHCHJYaqikZEAUlVPeWlvPpKclXvDYpU3AwxLoJrMCYs32n7efFxfDlKTXADBrJ&X-Amz-Signature=fb771bf021626b9148d581f3e31499c43210a26688bfca2eff851f6edc5471b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRV62QJ4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTXI%2BmxnIN4hyp9%2FLkKPVdkvExuv23Aa7qUOPgm3lZnwIgDSe28c%2BSl9HePcSzuZ8el3r%2FBYvIBObGySueSU1%2FYIsqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvmproYkHbWwOAOUSrcA75LcVWsfWVcScjZKCjCk0juqV2L%2BJ4DutMtNATFzjJfRN9G2B2ATd96k9TWBqrmtlG8PtDtB10M1JSzdtkwrHNZtjMb7MfpJvJwwp2q%2Bf8tzJWJrgczZ%2FBsv%2FsEXnCcPnseHRh2Ik5%2Bbn7hkP3pS2j5JNCSqeJ1B0Si6fc64KTR0nTL02blQGV3YoLgUDCu2%2FpA8E6HjAQO%2B8k3ihueONSwjdo9Zw6TYjj8uykUeIQtrqJ1ohQ%2FpSjU7BczeUR272fs7jOHPYmiIsOjAbasD85uRAD1TqDyNNQjdvwpf66ag%2FBM7w78xTtfbTVuoxBrstQAt83UfEFxmFo319sTBddxyR%2FMOf9%2FcJlG6eqvjT7DAMXCsVzSIqbOeEN57CniMbpa113Qe44Ai15gxtQDGmPBUHeDeJxuNan4eNMKHH%2FOFinAxrk%2FItnJ1WlEEzE9RfpR%2FY5fHygwk6J14heZq%2FQp7RSuy9qBLpeYyTYl4rgSeOmAvcZj8qfMv75nz9uXnY2xJ6amDem93vQPVsG1KgU2TH1%2Fyb5ZytdbMn7WBdv4bWDDISqX8A7ZDHkW3SRkzoGeaTTaaX1X5YiNNW0Un7F9dJhSWSa22cmcGthBSmfvinlly%2BBcZxSCgDJ1MKH19MMGOqUB4%2Bx27uqDF5zHRfPMNr2SIKShfo1e%2BlRvpoW642vO%2FKYXr9TtJteUg5fib0Mi5igy1JAdMBA3bmIs%2BM%2BOUb%2F6Ah59jy%2FZzwEavLWIgggM%2FLhA8Z677u5FyZUuPQsjPKjfRR6Te9G%2FaK5wVIGHsJ7LpR5iFVobaiHCHJYaqikZEAUlVPeWlvPpKclXvDYpU3AwxLoJrMCYs32n7efFxfDlKTXADBrJ&X-Amz-Signature=44b66f69ebfbe4ebcec23d9b5e99737db5f6cef4b229f8bcd0feb21ceca1c7e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRV62QJ4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTXI%2BmxnIN4hyp9%2FLkKPVdkvExuv23Aa7qUOPgm3lZnwIgDSe28c%2BSl9HePcSzuZ8el3r%2FBYvIBObGySueSU1%2FYIsqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvmproYkHbWwOAOUSrcA75LcVWsfWVcScjZKCjCk0juqV2L%2BJ4DutMtNATFzjJfRN9G2B2ATd96k9TWBqrmtlG8PtDtB10M1JSzdtkwrHNZtjMb7MfpJvJwwp2q%2Bf8tzJWJrgczZ%2FBsv%2FsEXnCcPnseHRh2Ik5%2Bbn7hkP3pS2j5JNCSqeJ1B0Si6fc64KTR0nTL02blQGV3YoLgUDCu2%2FpA8E6HjAQO%2B8k3ihueONSwjdo9Zw6TYjj8uykUeIQtrqJ1ohQ%2FpSjU7BczeUR272fs7jOHPYmiIsOjAbasD85uRAD1TqDyNNQjdvwpf66ag%2FBM7w78xTtfbTVuoxBrstQAt83UfEFxmFo319sTBddxyR%2FMOf9%2FcJlG6eqvjT7DAMXCsVzSIqbOeEN57CniMbpa113Qe44Ai15gxtQDGmPBUHeDeJxuNan4eNMKHH%2FOFinAxrk%2FItnJ1WlEEzE9RfpR%2FY5fHygwk6J14heZq%2FQp7RSuy9qBLpeYyTYl4rgSeOmAvcZj8qfMv75nz9uXnY2xJ6amDem93vQPVsG1KgU2TH1%2Fyb5ZytdbMn7WBdv4bWDDISqX8A7ZDHkW3SRkzoGeaTTaaX1X5YiNNW0Un7F9dJhSWSa22cmcGthBSmfvinlly%2BBcZxSCgDJ1MKH19MMGOqUB4%2Bx27uqDF5zHRfPMNr2SIKShfo1e%2BlRvpoW642vO%2FKYXr9TtJteUg5fib0Mi5igy1JAdMBA3bmIs%2BM%2BOUb%2F6Ah59jy%2FZzwEavLWIgggM%2FLhA8Z677u5FyZUuPQsjPKjfRR6Te9G%2FaK5wVIGHsJ7LpR5iFVobaiHCHJYaqikZEAUlVPeWlvPpKclXvDYpU3AwxLoJrMCYs32n7efFxfDlKTXADBrJ&X-Amz-Signature=b53b52e1c119348c2a15d91c424be9862584ee5d5c87b2aaa5e05ac3a684af9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRV62QJ4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTXI%2BmxnIN4hyp9%2FLkKPVdkvExuv23Aa7qUOPgm3lZnwIgDSe28c%2BSl9HePcSzuZ8el3r%2FBYvIBObGySueSU1%2FYIsqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvmproYkHbWwOAOUSrcA75LcVWsfWVcScjZKCjCk0juqV2L%2BJ4DutMtNATFzjJfRN9G2B2ATd96k9TWBqrmtlG8PtDtB10M1JSzdtkwrHNZtjMb7MfpJvJwwp2q%2Bf8tzJWJrgczZ%2FBsv%2FsEXnCcPnseHRh2Ik5%2Bbn7hkP3pS2j5JNCSqeJ1B0Si6fc64KTR0nTL02blQGV3YoLgUDCu2%2FpA8E6HjAQO%2B8k3ihueONSwjdo9Zw6TYjj8uykUeIQtrqJ1ohQ%2FpSjU7BczeUR272fs7jOHPYmiIsOjAbasD85uRAD1TqDyNNQjdvwpf66ag%2FBM7w78xTtfbTVuoxBrstQAt83UfEFxmFo319sTBddxyR%2FMOf9%2FcJlG6eqvjT7DAMXCsVzSIqbOeEN57CniMbpa113Qe44Ai15gxtQDGmPBUHeDeJxuNan4eNMKHH%2FOFinAxrk%2FItnJ1WlEEzE9RfpR%2FY5fHygwk6J14heZq%2FQp7RSuy9qBLpeYyTYl4rgSeOmAvcZj8qfMv75nz9uXnY2xJ6amDem93vQPVsG1KgU2TH1%2Fyb5ZytdbMn7WBdv4bWDDISqX8A7ZDHkW3SRkzoGeaTTaaX1X5YiNNW0Un7F9dJhSWSa22cmcGthBSmfvinlly%2BBcZxSCgDJ1MKH19MMGOqUB4%2Bx27uqDF5zHRfPMNr2SIKShfo1e%2BlRvpoW642vO%2FKYXr9TtJteUg5fib0Mi5igy1JAdMBA3bmIs%2BM%2BOUb%2F6Ah59jy%2FZzwEavLWIgggM%2FLhA8Z677u5FyZUuPQsjPKjfRR6Te9G%2FaK5wVIGHsJ7LpR5iFVobaiHCHJYaqikZEAUlVPeWlvPpKclXvDYpU3AwxLoJrMCYs32n7efFxfDlKTXADBrJ&X-Amz-Signature=d74514cde4f0bd8653a92bc4f67cb581e0dc4a3455499078f827ceed62132574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRV62QJ4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTXI%2BmxnIN4hyp9%2FLkKPVdkvExuv23Aa7qUOPgm3lZnwIgDSe28c%2BSl9HePcSzuZ8el3r%2FBYvIBObGySueSU1%2FYIsqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvmproYkHbWwOAOUSrcA75LcVWsfWVcScjZKCjCk0juqV2L%2BJ4DutMtNATFzjJfRN9G2B2ATd96k9TWBqrmtlG8PtDtB10M1JSzdtkwrHNZtjMb7MfpJvJwwp2q%2Bf8tzJWJrgczZ%2FBsv%2FsEXnCcPnseHRh2Ik5%2Bbn7hkP3pS2j5JNCSqeJ1B0Si6fc64KTR0nTL02blQGV3YoLgUDCu2%2FpA8E6HjAQO%2B8k3ihueONSwjdo9Zw6TYjj8uykUeIQtrqJ1ohQ%2FpSjU7BczeUR272fs7jOHPYmiIsOjAbasD85uRAD1TqDyNNQjdvwpf66ag%2FBM7w78xTtfbTVuoxBrstQAt83UfEFxmFo319sTBddxyR%2FMOf9%2FcJlG6eqvjT7DAMXCsVzSIqbOeEN57CniMbpa113Qe44Ai15gxtQDGmPBUHeDeJxuNan4eNMKHH%2FOFinAxrk%2FItnJ1WlEEzE9RfpR%2FY5fHygwk6J14heZq%2FQp7RSuy9qBLpeYyTYl4rgSeOmAvcZj8qfMv75nz9uXnY2xJ6amDem93vQPVsG1KgU2TH1%2Fyb5ZytdbMn7WBdv4bWDDISqX8A7ZDHkW3SRkzoGeaTTaaX1X5YiNNW0Un7F9dJhSWSa22cmcGthBSmfvinlly%2BBcZxSCgDJ1MKH19MMGOqUB4%2Bx27uqDF5zHRfPMNr2SIKShfo1e%2BlRvpoW642vO%2FKYXr9TtJteUg5fib0Mi5igy1JAdMBA3bmIs%2BM%2BOUb%2F6Ah59jy%2FZzwEavLWIgggM%2FLhA8Z677u5FyZUuPQsjPKjfRR6Te9G%2FaK5wVIGHsJ7LpR5iFVobaiHCHJYaqikZEAUlVPeWlvPpKclXvDYpU3AwxLoJrMCYs32n7efFxfDlKTXADBrJ&X-Amz-Signature=6de7a9800f2975383bd1cd6140d79bf7e10659c6593f860c17e4dc8d9ba34656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
