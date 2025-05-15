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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN7LPWB%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGyROy9Vhcc2jQm2nRmqgvCL7QWZ1ZywFJtBh5V8tcNJAiEA9aGjQyAEfqXbdSMtHq98DDHtlhJMvCESPBqbyiI4ZiQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIGUadg7KvDcJcpCgyrcA41ZJNac3J%2B9D5Z7%2BzRHYd421m95htdbRDfVJ%2F%2F3FIDYyRUtKbREy%2B6tX4olohSgGUdcLQoOvhI9IppALMHwE8E6y1qmZE5hC1SnpABIghrtQY7u%2FG%2Bs9yTSkqfAUBhKRWK5B0ei%2F26Ar20sijQgoXI17MPlYkBvyxu%2F0%2ByyBseycTFmJKkX1sUe0uhFSiDb2tFCuZsYzHO%2BWBhJJQltNPY%2BX%2F%2BPLTZUa3qa1gyfeOMh1rlbUFVJYpwKsGoMRShf9Mr5%2BZPh%2B%2FhAgMoM%2BfqOMXqlEcTvFc2tuV7JyXgAJK3p3d7A8C8sJyfRQ2R6qDUAzWafrtGOpCCbxaQ4BfzqNniBQmxs7arOJhCH2EwgcJNDBIPA3SCilwDv45VPwOuVccaBA2LbsqWF7oDSvSpPHIHipAMJZJb6c%2BBXrRSHR9nOmcE2Jfm3q06FD%2FX3fDUtRPt8fW%2BG9gy5kekWLtkMBoQZ0b9fyzqbhsowGvHBLkghqkxPa4we71WefF1oxwzxTpApjcKu4jXxKWWP8S7534QiYqUcy69FrbkaHBeGopJtEA%2BNMQ3kjoNnxSf17FntvWrZAMNN7RbAnmQhdE981S8e6MBmrXq4rCpYx5bSfkSLV2o4EXDB%2F97EpfnAMKj8mMEGOqUBuPj3HNWzfhTUbtFRuQUCBjRzQjdQmIJiItaeIycBxQO5Tm07ojM1o9yx842FTqMIOp3WdGtDEZTgjIcbZIel9%2FwwsyrpWCmo%2Fn9SZw6yNfyz0zqRWSkklIYWU6DW%2BAIvt0rdr%2BQxqyEFhNTsaifhAqwX4ZREI86eNbkg5aMWaUYh7VNrbrIyeMbFCxEF2kusjXSqSyg6INldeyAv%2BLXRvhLx%2Fmlf&X-Amz-Signature=e86d12cad378544ff08cd0f82fe6c6f2b915db3560cb2927af6f05d7d7c3f87e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN7LPWB%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGyROy9Vhcc2jQm2nRmqgvCL7QWZ1ZywFJtBh5V8tcNJAiEA9aGjQyAEfqXbdSMtHq98DDHtlhJMvCESPBqbyiI4ZiQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIGUadg7KvDcJcpCgyrcA41ZJNac3J%2B9D5Z7%2BzRHYd421m95htdbRDfVJ%2F%2F3FIDYyRUtKbREy%2B6tX4olohSgGUdcLQoOvhI9IppALMHwE8E6y1qmZE5hC1SnpABIghrtQY7u%2FG%2Bs9yTSkqfAUBhKRWK5B0ei%2F26Ar20sijQgoXI17MPlYkBvyxu%2F0%2ByyBseycTFmJKkX1sUe0uhFSiDb2tFCuZsYzHO%2BWBhJJQltNPY%2BX%2F%2BPLTZUa3qa1gyfeOMh1rlbUFVJYpwKsGoMRShf9Mr5%2BZPh%2B%2FhAgMoM%2BfqOMXqlEcTvFc2tuV7JyXgAJK3p3d7A8C8sJyfRQ2R6qDUAzWafrtGOpCCbxaQ4BfzqNniBQmxs7arOJhCH2EwgcJNDBIPA3SCilwDv45VPwOuVccaBA2LbsqWF7oDSvSpPHIHipAMJZJb6c%2BBXrRSHR9nOmcE2Jfm3q06FD%2FX3fDUtRPt8fW%2BG9gy5kekWLtkMBoQZ0b9fyzqbhsowGvHBLkghqkxPa4we71WefF1oxwzxTpApjcKu4jXxKWWP8S7534QiYqUcy69FrbkaHBeGopJtEA%2BNMQ3kjoNnxSf17FntvWrZAMNN7RbAnmQhdE981S8e6MBmrXq4rCpYx5bSfkSLV2o4EXDB%2F97EpfnAMKj8mMEGOqUBuPj3HNWzfhTUbtFRuQUCBjRzQjdQmIJiItaeIycBxQO5Tm07ojM1o9yx842FTqMIOp3WdGtDEZTgjIcbZIel9%2FwwsyrpWCmo%2Fn9SZw6yNfyz0zqRWSkklIYWU6DW%2BAIvt0rdr%2BQxqyEFhNTsaifhAqwX4ZREI86eNbkg5aMWaUYh7VNrbrIyeMbFCxEF2kusjXSqSyg6INldeyAv%2BLXRvhLx%2Fmlf&X-Amz-Signature=82107ec8d5095d64e6142df62966f3c207d0955f316856291b28165891fe00e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN7LPWB%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGyROy9Vhcc2jQm2nRmqgvCL7QWZ1ZywFJtBh5V8tcNJAiEA9aGjQyAEfqXbdSMtHq98DDHtlhJMvCESPBqbyiI4ZiQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIGUadg7KvDcJcpCgyrcA41ZJNac3J%2B9D5Z7%2BzRHYd421m95htdbRDfVJ%2F%2F3FIDYyRUtKbREy%2B6tX4olohSgGUdcLQoOvhI9IppALMHwE8E6y1qmZE5hC1SnpABIghrtQY7u%2FG%2Bs9yTSkqfAUBhKRWK5B0ei%2F26Ar20sijQgoXI17MPlYkBvyxu%2F0%2ByyBseycTFmJKkX1sUe0uhFSiDb2tFCuZsYzHO%2BWBhJJQltNPY%2BX%2F%2BPLTZUa3qa1gyfeOMh1rlbUFVJYpwKsGoMRShf9Mr5%2BZPh%2B%2FhAgMoM%2BfqOMXqlEcTvFc2tuV7JyXgAJK3p3d7A8C8sJyfRQ2R6qDUAzWafrtGOpCCbxaQ4BfzqNniBQmxs7arOJhCH2EwgcJNDBIPA3SCilwDv45VPwOuVccaBA2LbsqWF7oDSvSpPHIHipAMJZJb6c%2BBXrRSHR9nOmcE2Jfm3q06FD%2FX3fDUtRPt8fW%2BG9gy5kekWLtkMBoQZ0b9fyzqbhsowGvHBLkghqkxPa4we71WefF1oxwzxTpApjcKu4jXxKWWP8S7534QiYqUcy69FrbkaHBeGopJtEA%2BNMQ3kjoNnxSf17FntvWrZAMNN7RbAnmQhdE981S8e6MBmrXq4rCpYx5bSfkSLV2o4EXDB%2F97EpfnAMKj8mMEGOqUBuPj3HNWzfhTUbtFRuQUCBjRzQjdQmIJiItaeIycBxQO5Tm07ojM1o9yx842FTqMIOp3WdGtDEZTgjIcbZIel9%2FwwsyrpWCmo%2Fn9SZw6yNfyz0zqRWSkklIYWU6DW%2BAIvt0rdr%2BQxqyEFhNTsaifhAqwX4ZREI86eNbkg5aMWaUYh7VNrbrIyeMbFCxEF2kusjXSqSyg6INldeyAv%2BLXRvhLx%2Fmlf&X-Amz-Signature=f41e594659e79ca0de67ecf0edbd1b150c8ea0646353862c0df18bd4774fe5b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN7LPWB%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGyROy9Vhcc2jQm2nRmqgvCL7QWZ1ZywFJtBh5V8tcNJAiEA9aGjQyAEfqXbdSMtHq98DDHtlhJMvCESPBqbyiI4ZiQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIGUadg7KvDcJcpCgyrcA41ZJNac3J%2B9D5Z7%2BzRHYd421m95htdbRDfVJ%2F%2F3FIDYyRUtKbREy%2B6tX4olohSgGUdcLQoOvhI9IppALMHwE8E6y1qmZE5hC1SnpABIghrtQY7u%2FG%2Bs9yTSkqfAUBhKRWK5B0ei%2F26Ar20sijQgoXI17MPlYkBvyxu%2F0%2ByyBseycTFmJKkX1sUe0uhFSiDb2tFCuZsYzHO%2BWBhJJQltNPY%2BX%2F%2BPLTZUa3qa1gyfeOMh1rlbUFVJYpwKsGoMRShf9Mr5%2BZPh%2B%2FhAgMoM%2BfqOMXqlEcTvFc2tuV7JyXgAJK3p3d7A8C8sJyfRQ2R6qDUAzWafrtGOpCCbxaQ4BfzqNniBQmxs7arOJhCH2EwgcJNDBIPA3SCilwDv45VPwOuVccaBA2LbsqWF7oDSvSpPHIHipAMJZJb6c%2BBXrRSHR9nOmcE2Jfm3q06FD%2FX3fDUtRPt8fW%2BG9gy5kekWLtkMBoQZ0b9fyzqbhsowGvHBLkghqkxPa4we71WefF1oxwzxTpApjcKu4jXxKWWP8S7534QiYqUcy69FrbkaHBeGopJtEA%2BNMQ3kjoNnxSf17FntvWrZAMNN7RbAnmQhdE981S8e6MBmrXq4rCpYx5bSfkSLV2o4EXDB%2F97EpfnAMKj8mMEGOqUBuPj3HNWzfhTUbtFRuQUCBjRzQjdQmIJiItaeIycBxQO5Tm07ojM1o9yx842FTqMIOp3WdGtDEZTgjIcbZIel9%2FwwsyrpWCmo%2Fn9SZw6yNfyz0zqRWSkklIYWU6DW%2BAIvt0rdr%2BQxqyEFhNTsaifhAqwX4ZREI86eNbkg5aMWaUYh7VNrbrIyeMbFCxEF2kusjXSqSyg6INldeyAv%2BLXRvhLx%2Fmlf&X-Amz-Signature=05a467cf4fa9a7fb184b4b2b3ca616004894caef86a97b7db69a206783dc3270&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN7LPWB%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGyROy9Vhcc2jQm2nRmqgvCL7QWZ1ZywFJtBh5V8tcNJAiEA9aGjQyAEfqXbdSMtHq98DDHtlhJMvCESPBqbyiI4ZiQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIGUadg7KvDcJcpCgyrcA41ZJNac3J%2B9D5Z7%2BzRHYd421m95htdbRDfVJ%2F%2F3FIDYyRUtKbREy%2B6tX4olohSgGUdcLQoOvhI9IppALMHwE8E6y1qmZE5hC1SnpABIghrtQY7u%2FG%2Bs9yTSkqfAUBhKRWK5B0ei%2F26Ar20sijQgoXI17MPlYkBvyxu%2F0%2ByyBseycTFmJKkX1sUe0uhFSiDb2tFCuZsYzHO%2BWBhJJQltNPY%2BX%2F%2BPLTZUa3qa1gyfeOMh1rlbUFVJYpwKsGoMRShf9Mr5%2BZPh%2B%2FhAgMoM%2BfqOMXqlEcTvFc2tuV7JyXgAJK3p3d7A8C8sJyfRQ2R6qDUAzWafrtGOpCCbxaQ4BfzqNniBQmxs7arOJhCH2EwgcJNDBIPA3SCilwDv45VPwOuVccaBA2LbsqWF7oDSvSpPHIHipAMJZJb6c%2BBXrRSHR9nOmcE2Jfm3q06FD%2FX3fDUtRPt8fW%2BG9gy5kekWLtkMBoQZ0b9fyzqbhsowGvHBLkghqkxPa4we71WefF1oxwzxTpApjcKu4jXxKWWP8S7534QiYqUcy69FrbkaHBeGopJtEA%2BNMQ3kjoNnxSf17FntvWrZAMNN7RbAnmQhdE981S8e6MBmrXq4rCpYx5bSfkSLV2o4EXDB%2F97EpfnAMKj8mMEGOqUBuPj3HNWzfhTUbtFRuQUCBjRzQjdQmIJiItaeIycBxQO5Tm07ojM1o9yx842FTqMIOp3WdGtDEZTgjIcbZIel9%2FwwsyrpWCmo%2Fn9SZw6yNfyz0zqRWSkklIYWU6DW%2BAIvt0rdr%2BQxqyEFhNTsaifhAqwX4ZREI86eNbkg5aMWaUYh7VNrbrIyeMbFCxEF2kusjXSqSyg6INldeyAv%2BLXRvhLx%2Fmlf&X-Amz-Signature=7f2e36a4fde7a6cbdd67826952a39745977fadb3a7bbe811ca11ef115c928b46&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZN7LPWB%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGyROy9Vhcc2jQm2nRmqgvCL7QWZ1ZywFJtBh5V8tcNJAiEA9aGjQyAEfqXbdSMtHq98DDHtlhJMvCESPBqbyiI4ZiQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIGUadg7KvDcJcpCgyrcA41ZJNac3J%2B9D5Z7%2BzRHYd421m95htdbRDfVJ%2F%2F3FIDYyRUtKbREy%2B6tX4olohSgGUdcLQoOvhI9IppALMHwE8E6y1qmZE5hC1SnpABIghrtQY7u%2FG%2Bs9yTSkqfAUBhKRWK5B0ei%2F26Ar20sijQgoXI17MPlYkBvyxu%2F0%2ByyBseycTFmJKkX1sUe0uhFSiDb2tFCuZsYzHO%2BWBhJJQltNPY%2BX%2F%2BPLTZUa3qa1gyfeOMh1rlbUFVJYpwKsGoMRShf9Mr5%2BZPh%2B%2FhAgMoM%2BfqOMXqlEcTvFc2tuV7JyXgAJK3p3d7A8C8sJyfRQ2R6qDUAzWafrtGOpCCbxaQ4BfzqNniBQmxs7arOJhCH2EwgcJNDBIPA3SCilwDv45VPwOuVccaBA2LbsqWF7oDSvSpPHIHipAMJZJb6c%2BBXrRSHR9nOmcE2Jfm3q06FD%2FX3fDUtRPt8fW%2BG9gy5kekWLtkMBoQZ0b9fyzqbhsowGvHBLkghqkxPa4we71WefF1oxwzxTpApjcKu4jXxKWWP8S7534QiYqUcy69FrbkaHBeGopJtEA%2BNMQ3kjoNnxSf17FntvWrZAMNN7RbAnmQhdE981S8e6MBmrXq4rCpYx5bSfkSLV2o4EXDB%2F97EpfnAMKj8mMEGOqUBuPj3HNWzfhTUbtFRuQUCBjRzQjdQmIJiItaeIycBxQO5Tm07ojM1o9yx842FTqMIOp3WdGtDEZTgjIcbZIel9%2FwwsyrpWCmo%2Fn9SZw6yNfyz0zqRWSkklIYWU6DW%2BAIvt0rdr%2BQxqyEFhNTsaifhAqwX4ZREI86eNbkg5aMWaUYh7VNrbrIyeMbFCxEF2kusjXSqSyg6INldeyAv%2BLXRvhLx%2Fmlf&X-Amz-Signature=eb5651c7261827cf9cbef21e29e5f0c6310aa04267e9e5a7bd6808daa95e2ceb&X-Amz-SignedHeaders=host&x-id=GetObject)
