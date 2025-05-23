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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRXLHLB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIHD9612NqubJ%2FNlxCxbXXOl%2F0e4Tus%2FH5S%2FtSC4vpqE1AiEAxK4yjEMxUG96bmnkNm5EYGzsnFZcqDlY%2F98IV5K5CX0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjGJhUyVw9DLr6pfCrcA2yobHKY0u29UftCuGhOWV7p7VMxJogWMIM9jeKeBVj5ecb52L0meNLVSs426jKPiRUUJDMZM%2FLebBcQdTGjecJvqiAxfqm%2B0XvbpGQNoAsvWrLDouO9DrQ2SoipFh89MlJFC2uptGIe0AB7aHaZsUkKLTHQrTGHYjTZn0xUs406V4755Ym8sSeshijFowwFwih0AzhlmNVfjXKA15mBF8QFz%2B%2BVz0GuL5YDEBFQZxzjvQr9nHx9mDivTlNdCuze3stmxXcNKWYhpvBfOaKYr4SBNc7vQoSlfUYgKL%2Fx3tDCljsqMRscAbpJ0hjDcLF9rr0%2FvCkJ1X%2FGMNWj6WAtH%2F9q9aD1CKiu4ZabY4Ulh8aWk4hzzFZiSpUQmQzrP1hc0uZ2fH6WDsIpHrmRxdYEd7QuMezWOoB%2FBhkh4PY1hS5FI%2BiD5AAtuQuSn2dZRHMo%2B%2FzUCUl%2BMUQr6x0XxBmJOSZLmPV8sU3DjsorOuZyqV5NRKxsoDRNC0aD4aTCA88h9wUcpbUN1lM3XX%2BQoI%2Bsa%2BZONxCSJoQVgkeujQSArtkcmy0b3JVCUPxhZoDPez%2BKF8NKmMQnnsgd%2F%2B92gHGS%2FknApUoxfN3w6yDvcq9ifbdniyO%2B80qEP10B91U0MPvCv8EGOqUBGiTQPMTkkH1lfs2cSOFS4M7c%2Bw8qIrs9vI4wTpMxHYVDThORqJkLvRT65iXfPPotojvrVYQaqdD0BhLb3UjdBNgyy1o8Z%2B%2BWXBUUObtDgMzZ4qZfXB7FkceekyQU4R5CpHQGfbAY2kGJUXWUYljhUSuzkPN%2BuVUpdwzJK4RYrduzrKH9WFKqaW6WJTH6UQiZr%2B%2FZWOmPChhkpZ5rWHwjtsAPGUbx&X-Amz-Signature=5267748034b424ce406d49dc271ca1dd20ad39f58746ce3b1a981cd17595632a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRXLHLB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIHD9612NqubJ%2FNlxCxbXXOl%2F0e4Tus%2FH5S%2FtSC4vpqE1AiEAxK4yjEMxUG96bmnkNm5EYGzsnFZcqDlY%2F98IV5K5CX0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjGJhUyVw9DLr6pfCrcA2yobHKY0u29UftCuGhOWV7p7VMxJogWMIM9jeKeBVj5ecb52L0meNLVSs426jKPiRUUJDMZM%2FLebBcQdTGjecJvqiAxfqm%2B0XvbpGQNoAsvWrLDouO9DrQ2SoipFh89MlJFC2uptGIe0AB7aHaZsUkKLTHQrTGHYjTZn0xUs406V4755Ym8sSeshijFowwFwih0AzhlmNVfjXKA15mBF8QFz%2B%2BVz0GuL5YDEBFQZxzjvQr9nHx9mDivTlNdCuze3stmxXcNKWYhpvBfOaKYr4SBNc7vQoSlfUYgKL%2Fx3tDCljsqMRscAbpJ0hjDcLF9rr0%2FvCkJ1X%2FGMNWj6WAtH%2F9q9aD1CKiu4ZabY4Ulh8aWk4hzzFZiSpUQmQzrP1hc0uZ2fH6WDsIpHrmRxdYEd7QuMezWOoB%2FBhkh4PY1hS5FI%2BiD5AAtuQuSn2dZRHMo%2B%2FzUCUl%2BMUQr6x0XxBmJOSZLmPV8sU3DjsorOuZyqV5NRKxsoDRNC0aD4aTCA88h9wUcpbUN1lM3XX%2BQoI%2Bsa%2BZONxCSJoQVgkeujQSArtkcmy0b3JVCUPxhZoDPez%2BKF8NKmMQnnsgd%2F%2B92gHGS%2FknApUoxfN3w6yDvcq9ifbdniyO%2B80qEP10B91U0MPvCv8EGOqUBGiTQPMTkkH1lfs2cSOFS4M7c%2Bw8qIrs9vI4wTpMxHYVDThORqJkLvRT65iXfPPotojvrVYQaqdD0BhLb3UjdBNgyy1o8Z%2B%2BWXBUUObtDgMzZ4qZfXB7FkceekyQU4R5CpHQGfbAY2kGJUXWUYljhUSuzkPN%2BuVUpdwzJK4RYrduzrKH9WFKqaW6WJTH6UQiZr%2B%2FZWOmPChhkpZ5rWHwjtsAPGUbx&X-Amz-Signature=5de8390d2168460c31ecade4b30cedd775b195a1cc6bd9db5f99ad617aac6717&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRXLHLB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIHD9612NqubJ%2FNlxCxbXXOl%2F0e4Tus%2FH5S%2FtSC4vpqE1AiEAxK4yjEMxUG96bmnkNm5EYGzsnFZcqDlY%2F98IV5K5CX0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjGJhUyVw9DLr6pfCrcA2yobHKY0u29UftCuGhOWV7p7VMxJogWMIM9jeKeBVj5ecb52L0meNLVSs426jKPiRUUJDMZM%2FLebBcQdTGjecJvqiAxfqm%2B0XvbpGQNoAsvWrLDouO9DrQ2SoipFh89MlJFC2uptGIe0AB7aHaZsUkKLTHQrTGHYjTZn0xUs406V4755Ym8sSeshijFowwFwih0AzhlmNVfjXKA15mBF8QFz%2B%2BVz0GuL5YDEBFQZxzjvQr9nHx9mDivTlNdCuze3stmxXcNKWYhpvBfOaKYr4SBNc7vQoSlfUYgKL%2Fx3tDCljsqMRscAbpJ0hjDcLF9rr0%2FvCkJ1X%2FGMNWj6WAtH%2F9q9aD1CKiu4ZabY4Ulh8aWk4hzzFZiSpUQmQzrP1hc0uZ2fH6WDsIpHrmRxdYEd7QuMezWOoB%2FBhkh4PY1hS5FI%2BiD5AAtuQuSn2dZRHMo%2B%2FzUCUl%2BMUQr6x0XxBmJOSZLmPV8sU3DjsorOuZyqV5NRKxsoDRNC0aD4aTCA88h9wUcpbUN1lM3XX%2BQoI%2Bsa%2BZONxCSJoQVgkeujQSArtkcmy0b3JVCUPxhZoDPez%2BKF8NKmMQnnsgd%2F%2B92gHGS%2FknApUoxfN3w6yDvcq9ifbdniyO%2B80qEP10B91U0MPvCv8EGOqUBGiTQPMTkkH1lfs2cSOFS4M7c%2Bw8qIrs9vI4wTpMxHYVDThORqJkLvRT65iXfPPotojvrVYQaqdD0BhLb3UjdBNgyy1o8Z%2B%2BWXBUUObtDgMzZ4qZfXB7FkceekyQU4R5CpHQGfbAY2kGJUXWUYljhUSuzkPN%2BuVUpdwzJK4RYrduzrKH9WFKqaW6WJTH6UQiZr%2B%2FZWOmPChhkpZ5rWHwjtsAPGUbx&X-Amz-Signature=0cd6a1c0825df94ca698825cf5d7c97d3ce061f07a9fb9189bc3220694519442&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRXLHLB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIHD9612NqubJ%2FNlxCxbXXOl%2F0e4Tus%2FH5S%2FtSC4vpqE1AiEAxK4yjEMxUG96bmnkNm5EYGzsnFZcqDlY%2F98IV5K5CX0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjGJhUyVw9DLr6pfCrcA2yobHKY0u29UftCuGhOWV7p7VMxJogWMIM9jeKeBVj5ecb52L0meNLVSs426jKPiRUUJDMZM%2FLebBcQdTGjecJvqiAxfqm%2B0XvbpGQNoAsvWrLDouO9DrQ2SoipFh89MlJFC2uptGIe0AB7aHaZsUkKLTHQrTGHYjTZn0xUs406V4755Ym8sSeshijFowwFwih0AzhlmNVfjXKA15mBF8QFz%2B%2BVz0GuL5YDEBFQZxzjvQr9nHx9mDivTlNdCuze3stmxXcNKWYhpvBfOaKYr4SBNc7vQoSlfUYgKL%2Fx3tDCljsqMRscAbpJ0hjDcLF9rr0%2FvCkJ1X%2FGMNWj6WAtH%2F9q9aD1CKiu4ZabY4Ulh8aWk4hzzFZiSpUQmQzrP1hc0uZ2fH6WDsIpHrmRxdYEd7QuMezWOoB%2FBhkh4PY1hS5FI%2BiD5AAtuQuSn2dZRHMo%2B%2FzUCUl%2BMUQr6x0XxBmJOSZLmPV8sU3DjsorOuZyqV5NRKxsoDRNC0aD4aTCA88h9wUcpbUN1lM3XX%2BQoI%2Bsa%2BZONxCSJoQVgkeujQSArtkcmy0b3JVCUPxhZoDPez%2BKF8NKmMQnnsgd%2F%2B92gHGS%2FknApUoxfN3w6yDvcq9ifbdniyO%2B80qEP10B91U0MPvCv8EGOqUBGiTQPMTkkH1lfs2cSOFS4M7c%2Bw8qIrs9vI4wTpMxHYVDThORqJkLvRT65iXfPPotojvrVYQaqdD0BhLb3UjdBNgyy1o8Z%2B%2BWXBUUObtDgMzZ4qZfXB7FkceekyQU4R5CpHQGfbAY2kGJUXWUYljhUSuzkPN%2BuVUpdwzJK4RYrduzrKH9WFKqaW6WJTH6UQiZr%2B%2FZWOmPChhkpZ5rWHwjtsAPGUbx&X-Amz-Signature=ee70c63674e1266393a035d255d3d4b6e24c0d36cb517b84d48155e5ba342784&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRXLHLB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIHD9612NqubJ%2FNlxCxbXXOl%2F0e4Tus%2FH5S%2FtSC4vpqE1AiEAxK4yjEMxUG96bmnkNm5EYGzsnFZcqDlY%2F98IV5K5CX0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjGJhUyVw9DLr6pfCrcA2yobHKY0u29UftCuGhOWV7p7VMxJogWMIM9jeKeBVj5ecb52L0meNLVSs426jKPiRUUJDMZM%2FLebBcQdTGjecJvqiAxfqm%2B0XvbpGQNoAsvWrLDouO9DrQ2SoipFh89MlJFC2uptGIe0AB7aHaZsUkKLTHQrTGHYjTZn0xUs406V4755Ym8sSeshijFowwFwih0AzhlmNVfjXKA15mBF8QFz%2B%2BVz0GuL5YDEBFQZxzjvQr9nHx9mDivTlNdCuze3stmxXcNKWYhpvBfOaKYr4SBNc7vQoSlfUYgKL%2Fx3tDCljsqMRscAbpJ0hjDcLF9rr0%2FvCkJ1X%2FGMNWj6WAtH%2F9q9aD1CKiu4ZabY4Ulh8aWk4hzzFZiSpUQmQzrP1hc0uZ2fH6WDsIpHrmRxdYEd7QuMezWOoB%2FBhkh4PY1hS5FI%2BiD5AAtuQuSn2dZRHMo%2B%2FzUCUl%2BMUQr6x0XxBmJOSZLmPV8sU3DjsorOuZyqV5NRKxsoDRNC0aD4aTCA88h9wUcpbUN1lM3XX%2BQoI%2Bsa%2BZONxCSJoQVgkeujQSArtkcmy0b3JVCUPxhZoDPez%2BKF8NKmMQnnsgd%2F%2B92gHGS%2FknApUoxfN3w6yDvcq9ifbdniyO%2B80qEP10B91U0MPvCv8EGOqUBGiTQPMTkkH1lfs2cSOFS4M7c%2Bw8qIrs9vI4wTpMxHYVDThORqJkLvRT65iXfPPotojvrVYQaqdD0BhLb3UjdBNgyy1o8Z%2B%2BWXBUUObtDgMzZ4qZfXB7FkceekyQU4R5CpHQGfbAY2kGJUXWUYljhUSuzkPN%2BuVUpdwzJK4RYrduzrKH9WFKqaW6WJTH6UQiZr%2B%2FZWOmPChhkpZ5rWHwjtsAPGUbx&X-Amz-Signature=af1df39b5a529c48f9159f7a9352c778587822aaad542265d8339c9347e06d93&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRXLHLB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIHD9612NqubJ%2FNlxCxbXXOl%2F0e4Tus%2FH5S%2FtSC4vpqE1AiEAxK4yjEMxUG96bmnkNm5EYGzsnFZcqDlY%2F98IV5K5CX0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjGJhUyVw9DLr6pfCrcA2yobHKY0u29UftCuGhOWV7p7VMxJogWMIM9jeKeBVj5ecb52L0meNLVSs426jKPiRUUJDMZM%2FLebBcQdTGjecJvqiAxfqm%2B0XvbpGQNoAsvWrLDouO9DrQ2SoipFh89MlJFC2uptGIe0AB7aHaZsUkKLTHQrTGHYjTZn0xUs406V4755Ym8sSeshijFowwFwih0AzhlmNVfjXKA15mBF8QFz%2B%2BVz0GuL5YDEBFQZxzjvQr9nHx9mDivTlNdCuze3stmxXcNKWYhpvBfOaKYr4SBNc7vQoSlfUYgKL%2Fx3tDCljsqMRscAbpJ0hjDcLF9rr0%2FvCkJ1X%2FGMNWj6WAtH%2F9q9aD1CKiu4ZabY4Ulh8aWk4hzzFZiSpUQmQzrP1hc0uZ2fH6WDsIpHrmRxdYEd7QuMezWOoB%2FBhkh4PY1hS5FI%2BiD5AAtuQuSn2dZRHMo%2B%2FzUCUl%2BMUQr6x0XxBmJOSZLmPV8sU3DjsorOuZyqV5NRKxsoDRNC0aD4aTCA88h9wUcpbUN1lM3XX%2BQoI%2Bsa%2BZONxCSJoQVgkeujQSArtkcmy0b3JVCUPxhZoDPez%2BKF8NKmMQnnsgd%2F%2B92gHGS%2FknApUoxfN3w6yDvcq9ifbdniyO%2B80qEP10B91U0MPvCv8EGOqUBGiTQPMTkkH1lfs2cSOFS4M7c%2Bw8qIrs9vI4wTpMxHYVDThORqJkLvRT65iXfPPotojvrVYQaqdD0BhLb3UjdBNgyy1o8Z%2B%2BWXBUUObtDgMzZ4qZfXB7FkceekyQU4R5CpHQGfbAY2kGJUXWUYljhUSuzkPN%2BuVUpdwzJK4RYrduzrKH9WFKqaW6WJTH6UQiZr%2B%2FZWOmPChhkpZ5rWHwjtsAPGUbx&X-Amz-Signature=7a5c9ae7638383167bda074ceb64bc2b67bc16144996be85e7e4d41b1770ac26&X-Amz-SignedHeaders=host&x-id=GetObject)
