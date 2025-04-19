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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAWGVCQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDhFanwx0pNzKkfybhU%2BO6oVP5ZWjEzfhzK0U6NVIjPYgIgIaNqPZXMd73EBDp%2FAcApFbyYZdIOZJh%2BwX2Cg%2FSsygEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVukprfFednFFvfmCrcA9pa9bLxncUB2z5vTxT6cGyQFfP5HJ%2Bv2lTK8E23HObtUKxR4TcKS4%2Fl%2FsGgwGS4kqR5oaCpmoyz4scfX7SmQM%2F68vWTu2Ga9BIb7L0Kx6TYgSu4pPZXqGmwysMHjHQ6Vjf2GOl96ZjWwzYs4OfrLXEkeL4eEs37SjyP6Aa3sNJrS2B44FvawIVNLSx%2FfHgR2IQXx9tYTz8FWRBLywSoMOcvnN0CqJdAefouy0u3jNrGxlJ45Bk7nVjnLXC%2FoyeFI7azbPsCAhZ06Q6%2BpEpl6XFK%2BTXF2bUGGn%2BWxkV3YFL91p0vwfWN1pa8YiDyi04azERnov6TF0L3DQmge7Y0%2BhNMA40HmQDQzgAyQQEQI1qVobpM4zph%2FdLaEJlw2BttRxdvnwbz4B4agn%2FDJ7ZiNHK33Ggzsdi7tWsiLlf3auHrNSCn1f4RoRarAssougwoC58ulYbTJgoR0VXzA1wKH3m1oZBFvbG2p2pNyJIa68Tgi22tAdVbPYuUDB5yqb6n6Ai8mUh4cC7CihDefkIV6nA1HrDSXNkEIj8PCR1BAqKL1JwysZ72l8%2BVxUyFxdJ55a8wr%2FK80eXm9txCztIOfrBhu%2BU7OKvCB7KqaNwbU%2FscRDv0wubQZeELHFEtMLSjjsAGOqUBC1QPO2FOO4vPQWZa8Li2NxpALTompX2cGbs5tvwcRC0SZinjgpLL9L%2Bli9v1b9lPHbPZhM6HBpAqsd8%2BPuJVwqM2yDNhqD9OsBw7Bjq6pfwnxNbcxcsQMWzZ%2BKg3HPH1nUa5Y7wI3H0lKO9mXbNwkXNhitn7vjXLln%2FVUd%2BX89yBjMKBO3TTS34hnReZJeIUYrBCQ9BvtKDtl8vu2eROHCJy4UFV&X-Amz-Signature=04ec0663f8925101b44ec3875577e875affe867bf661e2938d1d9d146d0476bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAWGVCQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDhFanwx0pNzKkfybhU%2BO6oVP5ZWjEzfhzK0U6NVIjPYgIgIaNqPZXMd73EBDp%2FAcApFbyYZdIOZJh%2BwX2Cg%2FSsygEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVukprfFednFFvfmCrcA9pa9bLxncUB2z5vTxT6cGyQFfP5HJ%2Bv2lTK8E23HObtUKxR4TcKS4%2Fl%2FsGgwGS4kqR5oaCpmoyz4scfX7SmQM%2F68vWTu2Ga9BIb7L0Kx6TYgSu4pPZXqGmwysMHjHQ6Vjf2GOl96ZjWwzYs4OfrLXEkeL4eEs37SjyP6Aa3sNJrS2B44FvawIVNLSx%2FfHgR2IQXx9tYTz8FWRBLywSoMOcvnN0CqJdAefouy0u3jNrGxlJ45Bk7nVjnLXC%2FoyeFI7azbPsCAhZ06Q6%2BpEpl6XFK%2BTXF2bUGGn%2BWxkV3YFL91p0vwfWN1pa8YiDyi04azERnov6TF0L3DQmge7Y0%2BhNMA40HmQDQzgAyQQEQI1qVobpM4zph%2FdLaEJlw2BttRxdvnwbz4B4agn%2FDJ7ZiNHK33Ggzsdi7tWsiLlf3auHrNSCn1f4RoRarAssougwoC58ulYbTJgoR0VXzA1wKH3m1oZBFvbG2p2pNyJIa68Tgi22tAdVbPYuUDB5yqb6n6Ai8mUh4cC7CihDefkIV6nA1HrDSXNkEIj8PCR1BAqKL1JwysZ72l8%2BVxUyFxdJ55a8wr%2FK80eXm9txCztIOfrBhu%2BU7OKvCB7KqaNwbU%2FscRDv0wubQZeELHFEtMLSjjsAGOqUBC1QPO2FOO4vPQWZa8Li2NxpALTompX2cGbs5tvwcRC0SZinjgpLL9L%2Bli9v1b9lPHbPZhM6HBpAqsd8%2BPuJVwqM2yDNhqD9OsBw7Bjq6pfwnxNbcxcsQMWzZ%2BKg3HPH1nUa5Y7wI3H0lKO9mXbNwkXNhitn7vjXLln%2FVUd%2BX89yBjMKBO3TTS34hnReZJeIUYrBCQ9BvtKDtl8vu2eROHCJy4UFV&X-Amz-Signature=0f0024a0a7c4ed1c1cce78e42d00e1692abb19a09a34330cd73f6b196a510eca&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAWGVCQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDhFanwx0pNzKkfybhU%2BO6oVP5ZWjEzfhzK0U6NVIjPYgIgIaNqPZXMd73EBDp%2FAcApFbyYZdIOZJh%2BwX2Cg%2FSsygEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVukprfFednFFvfmCrcA9pa9bLxncUB2z5vTxT6cGyQFfP5HJ%2Bv2lTK8E23HObtUKxR4TcKS4%2Fl%2FsGgwGS4kqR5oaCpmoyz4scfX7SmQM%2F68vWTu2Ga9BIb7L0Kx6TYgSu4pPZXqGmwysMHjHQ6Vjf2GOl96ZjWwzYs4OfrLXEkeL4eEs37SjyP6Aa3sNJrS2B44FvawIVNLSx%2FfHgR2IQXx9tYTz8FWRBLywSoMOcvnN0CqJdAefouy0u3jNrGxlJ45Bk7nVjnLXC%2FoyeFI7azbPsCAhZ06Q6%2BpEpl6XFK%2BTXF2bUGGn%2BWxkV3YFL91p0vwfWN1pa8YiDyi04azERnov6TF0L3DQmge7Y0%2BhNMA40HmQDQzgAyQQEQI1qVobpM4zph%2FdLaEJlw2BttRxdvnwbz4B4agn%2FDJ7ZiNHK33Ggzsdi7tWsiLlf3auHrNSCn1f4RoRarAssougwoC58ulYbTJgoR0VXzA1wKH3m1oZBFvbG2p2pNyJIa68Tgi22tAdVbPYuUDB5yqb6n6Ai8mUh4cC7CihDefkIV6nA1HrDSXNkEIj8PCR1BAqKL1JwysZ72l8%2BVxUyFxdJ55a8wr%2FK80eXm9txCztIOfrBhu%2BU7OKvCB7KqaNwbU%2FscRDv0wubQZeELHFEtMLSjjsAGOqUBC1QPO2FOO4vPQWZa8Li2NxpALTompX2cGbs5tvwcRC0SZinjgpLL9L%2Bli9v1b9lPHbPZhM6HBpAqsd8%2BPuJVwqM2yDNhqD9OsBw7Bjq6pfwnxNbcxcsQMWzZ%2BKg3HPH1nUa5Y7wI3H0lKO9mXbNwkXNhitn7vjXLln%2FVUd%2BX89yBjMKBO3TTS34hnReZJeIUYrBCQ9BvtKDtl8vu2eROHCJy4UFV&X-Amz-Signature=d49834a6d37435e0304177085bb75d59cb8ff69dbdda1be90330efde6a63cf29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAWGVCQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDhFanwx0pNzKkfybhU%2BO6oVP5ZWjEzfhzK0U6NVIjPYgIgIaNqPZXMd73EBDp%2FAcApFbyYZdIOZJh%2BwX2Cg%2FSsygEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVukprfFednFFvfmCrcA9pa9bLxncUB2z5vTxT6cGyQFfP5HJ%2Bv2lTK8E23HObtUKxR4TcKS4%2Fl%2FsGgwGS4kqR5oaCpmoyz4scfX7SmQM%2F68vWTu2Ga9BIb7L0Kx6TYgSu4pPZXqGmwysMHjHQ6Vjf2GOl96ZjWwzYs4OfrLXEkeL4eEs37SjyP6Aa3sNJrS2B44FvawIVNLSx%2FfHgR2IQXx9tYTz8FWRBLywSoMOcvnN0CqJdAefouy0u3jNrGxlJ45Bk7nVjnLXC%2FoyeFI7azbPsCAhZ06Q6%2BpEpl6XFK%2BTXF2bUGGn%2BWxkV3YFL91p0vwfWN1pa8YiDyi04azERnov6TF0L3DQmge7Y0%2BhNMA40HmQDQzgAyQQEQI1qVobpM4zph%2FdLaEJlw2BttRxdvnwbz4B4agn%2FDJ7ZiNHK33Ggzsdi7tWsiLlf3auHrNSCn1f4RoRarAssougwoC58ulYbTJgoR0VXzA1wKH3m1oZBFvbG2p2pNyJIa68Tgi22tAdVbPYuUDB5yqb6n6Ai8mUh4cC7CihDefkIV6nA1HrDSXNkEIj8PCR1BAqKL1JwysZ72l8%2BVxUyFxdJ55a8wr%2FK80eXm9txCztIOfrBhu%2BU7OKvCB7KqaNwbU%2FscRDv0wubQZeELHFEtMLSjjsAGOqUBC1QPO2FOO4vPQWZa8Li2NxpALTompX2cGbs5tvwcRC0SZinjgpLL9L%2Bli9v1b9lPHbPZhM6HBpAqsd8%2BPuJVwqM2yDNhqD9OsBw7Bjq6pfwnxNbcxcsQMWzZ%2BKg3HPH1nUa5Y7wI3H0lKO9mXbNwkXNhitn7vjXLln%2FVUd%2BX89yBjMKBO3TTS34hnReZJeIUYrBCQ9BvtKDtl8vu2eROHCJy4UFV&X-Amz-Signature=a3a5b8b53a68a2a384866c1e36c696598b02342d728cae25f34042764b428d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAWGVCQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDhFanwx0pNzKkfybhU%2BO6oVP5ZWjEzfhzK0U6NVIjPYgIgIaNqPZXMd73EBDp%2FAcApFbyYZdIOZJh%2BwX2Cg%2FSsygEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVukprfFednFFvfmCrcA9pa9bLxncUB2z5vTxT6cGyQFfP5HJ%2Bv2lTK8E23HObtUKxR4TcKS4%2Fl%2FsGgwGS4kqR5oaCpmoyz4scfX7SmQM%2F68vWTu2Ga9BIb7L0Kx6TYgSu4pPZXqGmwysMHjHQ6Vjf2GOl96ZjWwzYs4OfrLXEkeL4eEs37SjyP6Aa3sNJrS2B44FvawIVNLSx%2FfHgR2IQXx9tYTz8FWRBLywSoMOcvnN0CqJdAefouy0u3jNrGxlJ45Bk7nVjnLXC%2FoyeFI7azbPsCAhZ06Q6%2BpEpl6XFK%2BTXF2bUGGn%2BWxkV3YFL91p0vwfWN1pa8YiDyi04azERnov6TF0L3DQmge7Y0%2BhNMA40HmQDQzgAyQQEQI1qVobpM4zph%2FdLaEJlw2BttRxdvnwbz4B4agn%2FDJ7ZiNHK33Ggzsdi7tWsiLlf3auHrNSCn1f4RoRarAssougwoC58ulYbTJgoR0VXzA1wKH3m1oZBFvbG2p2pNyJIa68Tgi22tAdVbPYuUDB5yqb6n6Ai8mUh4cC7CihDefkIV6nA1HrDSXNkEIj8PCR1BAqKL1JwysZ72l8%2BVxUyFxdJ55a8wr%2FK80eXm9txCztIOfrBhu%2BU7OKvCB7KqaNwbU%2FscRDv0wubQZeELHFEtMLSjjsAGOqUBC1QPO2FOO4vPQWZa8Li2NxpALTompX2cGbs5tvwcRC0SZinjgpLL9L%2Bli9v1b9lPHbPZhM6HBpAqsd8%2BPuJVwqM2yDNhqD9OsBw7Bjq6pfwnxNbcxcsQMWzZ%2BKg3HPH1nUa5Y7wI3H0lKO9mXbNwkXNhitn7vjXLln%2FVUd%2BX89yBjMKBO3TTS34hnReZJeIUYrBCQ9BvtKDtl8vu2eROHCJy4UFV&X-Amz-Signature=5b5b23f7a99a385a13cb5e6ad483260799fae2d890d390dfc4d20e1d18f9696c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAWGVCQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDhFanwx0pNzKkfybhU%2BO6oVP5ZWjEzfhzK0U6NVIjPYgIgIaNqPZXMd73EBDp%2FAcApFbyYZdIOZJh%2BwX2Cg%2FSsygEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVukprfFednFFvfmCrcA9pa9bLxncUB2z5vTxT6cGyQFfP5HJ%2Bv2lTK8E23HObtUKxR4TcKS4%2Fl%2FsGgwGS4kqR5oaCpmoyz4scfX7SmQM%2F68vWTu2Ga9BIb7L0Kx6TYgSu4pPZXqGmwysMHjHQ6Vjf2GOl96ZjWwzYs4OfrLXEkeL4eEs37SjyP6Aa3sNJrS2B44FvawIVNLSx%2FfHgR2IQXx9tYTz8FWRBLywSoMOcvnN0CqJdAefouy0u3jNrGxlJ45Bk7nVjnLXC%2FoyeFI7azbPsCAhZ06Q6%2BpEpl6XFK%2BTXF2bUGGn%2BWxkV3YFL91p0vwfWN1pa8YiDyi04azERnov6TF0L3DQmge7Y0%2BhNMA40HmQDQzgAyQQEQI1qVobpM4zph%2FdLaEJlw2BttRxdvnwbz4B4agn%2FDJ7ZiNHK33Ggzsdi7tWsiLlf3auHrNSCn1f4RoRarAssougwoC58ulYbTJgoR0VXzA1wKH3m1oZBFvbG2p2pNyJIa68Tgi22tAdVbPYuUDB5yqb6n6Ai8mUh4cC7CihDefkIV6nA1HrDSXNkEIj8PCR1BAqKL1JwysZ72l8%2BVxUyFxdJ55a8wr%2FK80eXm9txCztIOfrBhu%2BU7OKvCB7KqaNwbU%2FscRDv0wubQZeELHFEtMLSjjsAGOqUBC1QPO2FOO4vPQWZa8Li2NxpALTompX2cGbs5tvwcRC0SZinjgpLL9L%2Bli9v1b9lPHbPZhM6HBpAqsd8%2BPuJVwqM2yDNhqD9OsBw7Bjq6pfwnxNbcxcsQMWzZ%2BKg3HPH1nUa5Y7wI3H0lKO9mXbNwkXNhitn7vjXLln%2FVUd%2BX89yBjMKBO3TTS34hnReZJeIUYrBCQ9BvtKDtl8vu2eROHCJy4UFV&X-Amz-Signature=626c2842f027576f572f9270e885011e81eabbe0ee71f862441bdfc2dad09afa&X-Amz-SignedHeaders=host&x-id=GetObject)
