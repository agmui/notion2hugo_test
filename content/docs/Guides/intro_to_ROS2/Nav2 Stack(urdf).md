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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IL6B3E%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCmtOTEYQNCvZ1oa%2FAkydoMyzbrcdmcNGTW93Pe17VbuwIhAJyLmCi2AXxcBe%2BaEcjSfdYO0z5Tt0ipspYTx%2FDdhlE0Kv8DCCMQABoMNjM3NDIzMTgzODA1IgzbbprS6GyZkYEGtRUq3AMNuba8JNebAeHgPyfQk3WTC4LeZfFHASlb%2Bi%2FAecjTeh2MRUMQ1WeOxqjB7BRMkE%2BM6t3onlFYnJN%2FwForcdg9D7eOwcyuV2OCtMTU7ccaictfJ8Jl3%2FnwOk3WwSDKhdgvNFjyXqvAq6KcsNGcjAbxmjTyG0WXmAETnsVbQvT21IqdDOs4oOuM7juHSErGE3FvZYl5WGrZy6WIrNerruk6UwQI2lVezweouAwsZhX9JS3PXMELZxc%2BWTCCgkxqrt64WeyyxEAJNRja%2F6S1YlYG0BN3m0QhPmNuqiq8yiR4OsoQ4Qnq3qWCtMny9815lDLPuvpumO7sJjmiL2gVTvCNqgFjQj6doM%2FNCPAPZSzW6qstv%2FTO5F6G7m1e5RLGZiXjxtof%2Fpu7TyOfafeDvQ556mPEDeLlXvXto5YKe%2BCfx%2Foi9k2B9mye26ExApINK4r4zTb7uvROLwljTfF8NETBwo6GP3RV1fO9qBd%2BHZNNig%2BVCWhvNJ3kxwU5qcZuttctzRgjZFM69cyMJqLqzXZI1q2kf1EO1LwGSW0NF1Lj6sncTljYJ1cJexuq32gYuc1uQ7SglEzAHn3TOfXPaJ5fmb5Yc3vLIEXa47MZ2%2BQa%2Bz6%2F3cn6talE69U6ijDdlOjCBjqkAbdSV32jTBaLH8B8E7CrErFZHsU%2BgICZyqxl%2FuOE0l4n0Kzf1twRDGfJ7TN0ILjSLxcFtWjI6752QPOeUGDCc6p8IV%2BRA6pU8Ccx7NKhfePi5x4PthYihtNaoDcRKa0Eo1ygynetdZOMlj9r9hNrAv0fUSSTLI8N3UOxxIrn1pYJ5YHweVrJn1si7Hblm4ulsvRQNegCEnFVNSyzVd%2BDLl4BA8DG&X-Amz-Signature=1177d3b16588de2392e12dcbbc6e3bd4d433514b6e6e059c22c5a5ba956fe6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IL6B3E%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCmtOTEYQNCvZ1oa%2FAkydoMyzbrcdmcNGTW93Pe17VbuwIhAJyLmCi2AXxcBe%2BaEcjSfdYO0z5Tt0ipspYTx%2FDdhlE0Kv8DCCMQABoMNjM3NDIzMTgzODA1IgzbbprS6GyZkYEGtRUq3AMNuba8JNebAeHgPyfQk3WTC4LeZfFHASlb%2Bi%2FAecjTeh2MRUMQ1WeOxqjB7BRMkE%2BM6t3onlFYnJN%2FwForcdg9D7eOwcyuV2OCtMTU7ccaictfJ8Jl3%2FnwOk3WwSDKhdgvNFjyXqvAq6KcsNGcjAbxmjTyG0WXmAETnsVbQvT21IqdDOs4oOuM7juHSErGE3FvZYl5WGrZy6WIrNerruk6UwQI2lVezweouAwsZhX9JS3PXMELZxc%2BWTCCgkxqrt64WeyyxEAJNRja%2F6S1YlYG0BN3m0QhPmNuqiq8yiR4OsoQ4Qnq3qWCtMny9815lDLPuvpumO7sJjmiL2gVTvCNqgFjQj6doM%2FNCPAPZSzW6qstv%2FTO5F6G7m1e5RLGZiXjxtof%2Fpu7TyOfafeDvQ556mPEDeLlXvXto5YKe%2BCfx%2Foi9k2B9mye26ExApINK4r4zTb7uvROLwljTfF8NETBwo6GP3RV1fO9qBd%2BHZNNig%2BVCWhvNJ3kxwU5qcZuttctzRgjZFM69cyMJqLqzXZI1q2kf1EO1LwGSW0NF1Lj6sncTljYJ1cJexuq32gYuc1uQ7SglEzAHn3TOfXPaJ5fmb5Yc3vLIEXa47MZ2%2BQa%2Bz6%2F3cn6talE69U6ijDdlOjCBjqkAbdSV32jTBaLH8B8E7CrErFZHsU%2BgICZyqxl%2FuOE0l4n0Kzf1twRDGfJ7TN0ILjSLxcFtWjI6752QPOeUGDCc6p8IV%2BRA6pU8Ccx7NKhfePi5x4PthYihtNaoDcRKa0Eo1ygynetdZOMlj9r9hNrAv0fUSSTLI8N3UOxxIrn1pYJ5YHweVrJn1si7Hblm4ulsvRQNegCEnFVNSyzVd%2BDLl4BA8DG&X-Amz-Signature=150a91068df464a0e8a6732675c03114c5d8aed4f6160b2c3779866b1da78d78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IL6B3E%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCmtOTEYQNCvZ1oa%2FAkydoMyzbrcdmcNGTW93Pe17VbuwIhAJyLmCi2AXxcBe%2BaEcjSfdYO0z5Tt0ipspYTx%2FDdhlE0Kv8DCCMQABoMNjM3NDIzMTgzODA1IgzbbprS6GyZkYEGtRUq3AMNuba8JNebAeHgPyfQk3WTC4LeZfFHASlb%2Bi%2FAecjTeh2MRUMQ1WeOxqjB7BRMkE%2BM6t3onlFYnJN%2FwForcdg9D7eOwcyuV2OCtMTU7ccaictfJ8Jl3%2FnwOk3WwSDKhdgvNFjyXqvAq6KcsNGcjAbxmjTyG0WXmAETnsVbQvT21IqdDOs4oOuM7juHSErGE3FvZYl5WGrZy6WIrNerruk6UwQI2lVezweouAwsZhX9JS3PXMELZxc%2BWTCCgkxqrt64WeyyxEAJNRja%2F6S1YlYG0BN3m0QhPmNuqiq8yiR4OsoQ4Qnq3qWCtMny9815lDLPuvpumO7sJjmiL2gVTvCNqgFjQj6doM%2FNCPAPZSzW6qstv%2FTO5F6G7m1e5RLGZiXjxtof%2Fpu7TyOfafeDvQ556mPEDeLlXvXto5YKe%2BCfx%2Foi9k2B9mye26ExApINK4r4zTb7uvROLwljTfF8NETBwo6GP3RV1fO9qBd%2BHZNNig%2BVCWhvNJ3kxwU5qcZuttctzRgjZFM69cyMJqLqzXZI1q2kf1EO1LwGSW0NF1Lj6sncTljYJ1cJexuq32gYuc1uQ7SglEzAHn3TOfXPaJ5fmb5Yc3vLIEXa47MZ2%2BQa%2Bz6%2F3cn6talE69U6ijDdlOjCBjqkAbdSV32jTBaLH8B8E7CrErFZHsU%2BgICZyqxl%2FuOE0l4n0Kzf1twRDGfJ7TN0ILjSLxcFtWjI6752QPOeUGDCc6p8IV%2BRA6pU8Ccx7NKhfePi5x4PthYihtNaoDcRKa0Eo1ygynetdZOMlj9r9hNrAv0fUSSTLI8N3UOxxIrn1pYJ5YHweVrJn1si7Hblm4ulsvRQNegCEnFVNSyzVd%2BDLl4BA8DG&X-Amz-Signature=69693b77e21296734adee1a5be15089badfaa6c80a76f02fdc9f215cb6de660d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IL6B3E%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCmtOTEYQNCvZ1oa%2FAkydoMyzbrcdmcNGTW93Pe17VbuwIhAJyLmCi2AXxcBe%2BaEcjSfdYO0z5Tt0ipspYTx%2FDdhlE0Kv8DCCMQABoMNjM3NDIzMTgzODA1IgzbbprS6GyZkYEGtRUq3AMNuba8JNebAeHgPyfQk3WTC4LeZfFHASlb%2Bi%2FAecjTeh2MRUMQ1WeOxqjB7BRMkE%2BM6t3onlFYnJN%2FwForcdg9D7eOwcyuV2OCtMTU7ccaictfJ8Jl3%2FnwOk3WwSDKhdgvNFjyXqvAq6KcsNGcjAbxmjTyG0WXmAETnsVbQvT21IqdDOs4oOuM7juHSErGE3FvZYl5WGrZy6WIrNerruk6UwQI2lVezweouAwsZhX9JS3PXMELZxc%2BWTCCgkxqrt64WeyyxEAJNRja%2F6S1YlYG0BN3m0QhPmNuqiq8yiR4OsoQ4Qnq3qWCtMny9815lDLPuvpumO7sJjmiL2gVTvCNqgFjQj6doM%2FNCPAPZSzW6qstv%2FTO5F6G7m1e5RLGZiXjxtof%2Fpu7TyOfafeDvQ556mPEDeLlXvXto5YKe%2BCfx%2Foi9k2B9mye26ExApINK4r4zTb7uvROLwljTfF8NETBwo6GP3RV1fO9qBd%2BHZNNig%2BVCWhvNJ3kxwU5qcZuttctzRgjZFM69cyMJqLqzXZI1q2kf1EO1LwGSW0NF1Lj6sncTljYJ1cJexuq32gYuc1uQ7SglEzAHn3TOfXPaJ5fmb5Yc3vLIEXa47MZ2%2BQa%2Bz6%2F3cn6talE69U6ijDdlOjCBjqkAbdSV32jTBaLH8B8E7CrErFZHsU%2BgICZyqxl%2FuOE0l4n0Kzf1twRDGfJ7TN0ILjSLxcFtWjI6752QPOeUGDCc6p8IV%2BRA6pU8Ccx7NKhfePi5x4PthYihtNaoDcRKa0Eo1ygynetdZOMlj9r9hNrAv0fUSSTLI8N3UOxxIrn1pYJ5YHweVrJn1si7Hblm4ulsvRQNegCEnFVNSyzVd%2BDLl4BA8DG&X-Amz-Signature=c9583667f58ea8e61668f86fbdc73f3e4607b73c679a11d9758b262ea2062d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IL6B3E%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCmtOTEYQNCvZ1oa%2FAkydoMyzbrcdmcNGTW93Pe17VbuwIhAJyLmCi2AXxcBe%2BaEcjSfdYO0z5Tt0ipspYTx%2FDdhlE0Kv8DCCMQABoMNjM3NDIzMTgzODA1IgzbbprS6GyZkYEGtRUq3AMNuba8JNebAeHgPyfQk3WTC4LeZfFHASlb%2Bi%2FAecjTeh2MRUMQ1WeOxqjB7BRMkE%2BM6t3onlFYnJN%2FwForcdg9D7eOwcyuV2OCtMTU7ccaictfJ8Jl3%2FnwOk3WwSDKhdgvNFjyXqvAq6KcsNGcjAbxmjTyG0WXmAETnsVbQvT21IqdDOs4oOuM7juHSErGE3FvZYl5WGrZy6WIrNerruk6UwQI2lVezweouAwsZhX9JS3PXMELZxc%2BWTCCgkxqrt64WeyyxEAJNRja%2F6S1YlYG0BN3m0QhPmNuqiq8yiR4OsoQ4Qnq3qWCtMny9815lDLPuvpumO7sJjmiL2gVTvCNqgFjQj6doM%2FNCPAPZSzW6qstv%2FTO5F6G7m1e5RLGZiXjxtof%2Fpu7TyOfafeDvQ556mPEDeLlXvXto5YKe%2BCfx%2Foi9k2B9mye26ExApINK4r4zTb7uvROLwljTfF8NETBwo6GP3RV1fO9qBd%2BHZNNig%2BVCWhvNJ3kxwU5qcZuttctzRgjZFM69cyMJqLqzXZI1q2kf1EO1LwGSW0NF1Lj6sncTljYJ1cJexuq32gYuc1uQ7SglEzAHn3TOfXPaJ5fmb5Yc3vLIEXa47MZ2%2BQa%2Bz6%2F3cn6talE69U6ijDdlOjCBjqkAbdSV32jTBaLH8B8E7CrErFZHsU%2BgICZyqxl%2FuOE0l4n0Kzf1twRDGfJ7TN0ILjSLxcFtWjI6752QPOeUGDCc6p8IV%2BRA6pU8Ccx7NKhfePi5x4PthYihtNaoDcRKa0Eo1ygynetdZOMlj9r9hNrAv0fUSSTLI8N3UOxxIrn1pYJ5YHweVrJn1si7Hblm4ulsvRQNegCEnFVNSyzVd%2BDLl4BA8DG&X-Amz-Signature=967ecee665e8a7bb2c7546bbdfd733ced54ab343ac610165164002564e5d501b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IL6B3E%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCmtOTEYQNCvZ1oa%2FAkydoMyzbrcdmcNGTW93Pe17VbuwIhAJyLmCi2AXxcBe%2BaEcjSfdYO0z5Tt0ipspYTx%2FDdhlE0Kv8DCCMQABoMNjM3NDIzMTgzODA1IgzbbprS6GyZkYEGtRUq3AMNuba8JNebAeHgPyfQk3WTC4LeZfFHASlb%2Bi%2FAecjTeh2MRUMQ1WeOxqjB7BRMkE%2BM6t3onlFYnJN%2FwForcdg9D7eOwcyuV2OCtMTU7ccaictfJ8Jl3%2FnwOk3WwSDKhdgvNFjyXqvAq6KcsNGcjAbxmjTyG0WXmAETnsVbQvT21IqdDOs4oOuM7juHSErGE3FvZYl5WGrZy6WIrNerruk6UwQI2lVezweouAwsZhX9JS3PXMELZxc%2BWTCCgkxqrt64WeyyxEAJNRja%2F6S1YlYG0BN3m0QhPmNuqiq8yiR4OsoQ4Qnq3qWCtMny9815lDLPuvpumO7sJjmiL2gVTvCNqgFjQj6doM%2FNCPAPZSzW6qstv%2FTO5F6G7m1e5RLGZiXjxtof%2Fpu7TyOfafeDvQ556mPEDeLlXvXto5YKe%2BCfx%2Foi9k2B9mye26ExApINK4r4zTb7uvROLwljTfF8NETBwo6GP3RV1fO9qBd%2BHZNNig%2BVCWhvNJ3kxwU5qcZuttctzRgjZFM69cyMJqLqzXZI1q2kf1EO1LwGSW0NF1Lj6sncTljYJ1cJexuq32gYuc1uQ7SglEzAHn3TOfXPaJ5fmb5Yc3vLIEXa47MZ2%2BQa%2Bz6%2F3cn6talE69U6ijDdlOjCBjqkAbdSV32jTBaLH8B8E7CrErFZHsU%2BgICZyqxl%2FuOE0l4n0Kzf1twRDGfJ7TN0ILjSLxcFtWjI6752QPOeUGDCc6p8IV%2BRA6pU8Ccx7NKhfePi5x4PthYihtNaoDcRKa0Eo1ygynetdZOMlj9r9hNrAv0fUSSTLI8N3UOxxIrn1pYJ5YHweVrJn1si7Hblm4ulsvRQNegCEnFVNSyzVd%2BDLl4BA8DG&X-Amz-Signature=7d834d7d0f99a306e745562fb9075de8cdb1f8fbdf70c729b9df7cf38354eac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
