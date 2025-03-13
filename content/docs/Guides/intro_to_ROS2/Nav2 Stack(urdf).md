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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRZACTIL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxm8mw8Gc9mqQ05dU1fiHf2NnR%2BDS0Yw%2Br0esFdiObcQIgCjJP4WCz0KTrne4ObDi2A8Ryoc21Wzvf5lpvExJvvSIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFO5YRRgb3ja1LtPSrcA7DALfCCvqMyYFXBcyneeFq9OI4kEkQj6q3qDJGEItBvUI2Hm32rHxMTIfxoDNmp6%2Bk0d8H%2B2S05fLPf64Y6EeBtPkvgNBdQRaEYT26%2B2Crqs2zbgI8fm%2By2d0iLd4VLouzqDQP8ZXMNkutIUgkRxG0KTRQ7NNfRfF%2BP%2Fa6CXXfmwSJl1FuhWvawDiR62XL7jgVeHb7Kix3QE8FKII53j6LXvoav6tIUd7%2F89Ay9chNQH9b9OTWVHYe%2BfxHJeM3MVhguQWp4w9UlnNRQ8F%2FZd6U9TLPJRKbUbzdQnhGVmIpuQTVZZYoeNmv5%2F4aXybFkWTzREGDorFsjs0iSN2CLD8DBfqjuJ9yThkWSzLKJww3UfQMsfMaYiYisc1if9OkqJGteaT1E8DLVDgFpR8eWOQCg%2FfK8GpUwrramAe6tB0iMjKQIdt7jwHSiNqyRX6btWRxCYZgGf2eAhR1nJtjijSMOafLIz06%2Bi6q9%2Bumy%2Fxy8WFjAcoJPxiblw9Uq35RByr0LaKVS%2FDNmCcVe54V%2FfwATI%2BdpACO5WUXiJAc8P6BaTdIthWTFmjQxq0EzaXXRqDDAzuSzP2rRMsWo7%2Fy3cuB1Ve%2BsYQ%2FAE4UeBxY8RxG0okBP%2Fllt4aKXBaHrMNDAyL4GOqUB%2FqJhga6ChQmjY5oP5HDlbMHK7Kg0nklTWkVHaNhD27Wt9kQmcvh32EXZAB1jGJGYFLvD8c8IL4cd7LfS1Ljv0CrSPEBUz%2FlPpBQeygwwupk09UiXr9vlFL98CwGeRdcHOYIq3%2BEAkLg5UDyuTzw02H4EP52HiriHBatMVPji%2FVWq5Qj0OxSJ2mv%2BawFEPLlpNz3Ue2NqwyVELYH2dGHW9wV6Jf5V&X-Amz-Signature=c17d982f2b8caf177caba14ce4284febb24716573039eedaaebc3f31f441e7d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRZACTIL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxm8mw8Gc9mqQ05dU1fiHf2NnR%2BDS0Yw%2Br0esFdiObcQIgCjJP4WCz0KTrne4ObDi2A8Ryoc21Wzvf5lpvExJvvSIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFO5YRRgb3ja1LtPSrcA7DALfCCvqMyYFXBcyneeFq9OI4kEkQj6q3qDJGEItBvUI2Hm32rHxMTIfxoDNmp6%2Bk0d8H%2B2S05fLPf64Y6EeBtPkvgNBdQRaEYT26%2B2Crqs2zbgI8fm%2By2d0iLd4VLouzqDQP8ZXMNkutIUgkRxG0KTRQ7NNfRfF%2BP%2Fa6CXXfmwSJl1FuhWvawDiR62XL7jgVeHb7Kix3QE8FKII53j6LXvoav6tIUd7%2F89Ay9chNQH9b9OTWVHYe%2BfxHJeM3MVhguQWp4w9UlnNRQ8F%2FZd6U9TLPJRKbUbzdQnhGVmIpuQTVZZYoeNmv5%2F4aXybFkWTzREGDorFsjs0iSN2CLD8DBfqjuJ9yThkWSzLKJww3UfQMsfMaYiYisc1if9OkqJGteaT1E8DLVDgFpR8eWOQCg%2FfK8GpUwrramAe6tB0iMjKQIdt7jwHSiNqyRX6btWRxCYZgGf2eAhR1nJtjijSMOafLIz06%2Bi6q9%2Bumy%2Fxy8WFjAcoJPxiblw9Uq35RByr0LaKVS%2FDNmCcVe54V%2FfwATI%2BdpACO5WUXiJAc8P6BaTdIthWTFmjQxq0EzaXXRqDDAzuSzP2rRMsWo7%2Fy3cuB1Ve%2BsYQ%2FAE4UeBxY8RxG0okBP%2Fllt4aKXBaHrMNDAyL4GOqUB%2FqJhga6ChQmjY5oP5HDlbMHK7Kg0nklTWkVHaNhD27Wt9kQmcvh32EXZAB1jGJGYFLvD8c8IL4cd7LfS1Ljv0CrSPEBUz%2FlPpBQeygwwupk09UiXr9vlFL98CwGeRdcHOYIq3%2BEAkLg5UDyuTzw02H4EP52HiriHBatMVPji%2FVWq5Qj0OxSJ2mv%2BawFEPLlpNz3Ue2NqwyVELYH2dGHW9wV6Jf5V&X-Amz-Signature=4195c713d33923488ffd6eaf5ee167826ac7763ce31f4f1d02f47a1fc183cbe6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRZACTIL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxm8mw8Gc9mqQ05dU1fiHf2NnR%2BDS0Yw%2Br0esFdiObcQIgCjJP4WCz0KTrne4ObDi2A8Ryoc21Wzvf5lpvExJvvSIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFO5YRRgb3ja1LtPSrcA7DALfCCvqMyYFXBcyneeFq9OI4kEkQj6q3qDJGEItBvUI2Hm32rHxMTIfxoDNmp6%2Bk0d8H%2B2S05fLPf64Y6EeBtPkvgNBdQRaEYT26%2B2Crqs2zbgI8fm%2By2d0iLd4VLouzqDQP8ZXMNkutIUgkRxG0KTRQ7NNfRfF%2BP%2Fa6CXXfmwSJl1FuhWvawDiR62XL7jgVeHb7Kix3QE8FKII53j6LXvoav6tIUd7%2F89Ay9chNQH9b9OTWVHYe%2BfxHJeM3MVhguQWp4w9UlnNRQ8F%2FZd6U9TLPJRKbUbzdQnhGVmIpuQTVZZYoeNmv5%2F4aXybFkWTzREGDorFsjs0iSN2CLD8DBfqjuJ9yThkWSzLKJww3UfQMsfMaYiYisc1if9OkqJGteaT1E8DLVDgFpR8eWOQCg%2FfK8GpUwrramAe6tB0iMjKQIdt7jwHSiNqyRX6btWRxCYZgGf2eAhR1nJtjijSMOafLIz06%2Bi6q9%2Bumy%2Fxy8WFjAcoJPxiblw9Uq35RByr0LaKVS%2FDNmCcVe54V%2FfwATI%2BdpACO5WUXiJAc8P6BaTdIthWTFmjQxq0EzaXXRqDDAzuSzP2rRMsWo7%2Fy3cuB1Ve%2BsYQ%2FAE4UeBxY8RxG0okBP%2Fllt4aKXBaHrMNDAyL4GOqUB%2FqJhga6ChQmjY5oP5HDlbMHK7Kg0nklTWkVHaNhD27Wt9kQmcvh32EXZAB1jGJGYFLvD8c8IL4cd7LfS1Ljv0CrSPEBUz%2FlPpBQeygwwupk09UiXr9vlFL98CwGeRdcHOYIq3%2BEAkLg5UDyuTzw02H4EP52HiriHBatMVPji%2FVWq5Qj0OxSJ2mv%2BawFEPLlpNz3Ue2NqwyVELYH2dGHW9wV6Jf5V&X-Amz-Signature=5cb267a0753a2e80ec0b7054984613fea6688e2d8a4e98cc048213aed9ac65fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRZACTIL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxm8mw8Gc9mqQ05dU1fiHf2NnR%2BDS0Yw%2Br0esFdiObcQIgCjJP4WCz0KTrne4ObDi2A8Ryoc21Wzvf5lpvExJvvSIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFO5YRRgb3ja1LtPSrcA7DALfCCvqMyYFXBcyneeFq9OI4kEkQj6q3qDJGEItBvUI2Hm32rHxMTIfxoDNmp6%2Bk0d8H%2B2S05fLPf64Y6EeBtPkvgNBdQRaEYT26%2B2Crqs2zbgI8fm%2By2d0iLd4VLouzqDQP8ZXMNkutIUgkRxG0KTRQ7NNfRfF%2BP%2Fa6CXXfmwSJl1FuhWvawDiR62XL7jgVeHb7Kix3QE8FKII53j6LXvoav6tIUd7%2F89Ay9chNQH9b9OTWVHYe%2BfxHJeM3MVhguQWp4w9UlnNRQ8F%2FZd6U9TLPJRKbUbzdQnhGVmIpuQTVZZYoeNmv5%2F4aXybFkWTzREGDorFsjs0iSN2CLD8DBfqjuJ9yThkWSzLKJww3UfQMsfMaYiYisc1if9OkqJGteaT1E8DLVDgFpR8eWOQCg%2FfK8GpUwrramAe6tB0iMjKQIdt7jwHSiNqyRX6btWRxCYZgGf2eAhR1nJtjijSMOafLIz06%2Bi6q9%2Bumy%2Fxy8WFjAcoJPxiblw9Uq35RByr0LaKVS%2FDNmCcVe54V%2FfwATI%2BdpACO5WUXiJAc8P6BaTdIthWTFmjQxq0EzaXXRqDDAzuSzP2rRMsWo7%2Fy3cuB1Ve%2BsYQ%2FAE4UeBxY8RxG0okBP%2Fllt4aKXBaHrMNDAyL4GOqUB%2FqJhga6ChQmjY5oP5HDlbMHK7Kg0nklTWkVHaNhD27Wt9kQmcvh32EXZAB1jGJGYFLvD8c8IL4cd7LfS1Ljv0CrSPEBUz%2FlPpBQeygwwupk09UiXr9vlFL98CwGeRdcHOYIq3%2BEAkLg5UDyuTzw02H4EP52HiriHBatMVPji%2FVWq5Qj0OxSJ2mv%2BawFEPLlpNz3Ue2NqwyVELYH2dGHW9wV6Jf5V&X-Amz-Signature=16f243694670cdf02eefed419a771415efde352420326de1e5a128d8a7cf1eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRZACTIL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxm8mw8Gc9mqQ05dU1fiHf2NnR%2BDS0Yw%2Br0esFdiObcQIgCjJP4WCz0KTrne4ObDi2A8Ryoc21Wzvf5lpvExJvvSIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFO5YRRgb3ja1LtPSrcA7DALfCCvqMyYFXBcyneeFq9OI4kEkQj6q3qDJGEItBvUI2Hm32rHxMTIfxoDNmp6%2Bk0d8H%2B2S05fLPf64Y6EeBtPkvgNBdQRaEYT26%2B2Crqs2zbgI8fm%2By2d0iLd4VLouzqDQP8ZXMNkutIUgkRxG0KTRQ7NNfRfF%2BP%2Fa6CXXfmwSJl1FuhWvawDiR62XL7jgVeHb7Kix3QE8FKII53j6LXvoav6tIUd7%2F89Ay9chNQH9b9OTWVHYe%2BfxHJeM3MVhguQWp4w9UlnNRQ8F%2FZd6U9TLPJRKbUbzdQnhGVmIpuQTVZZYoeNmv5%2F4aXybFkWTzREGDorFsjs0iSN2CLD8DBfqjuJ9yThkWSzLKJww3UfQMsfMaYiYisc1if9OkqJGteaT1E8DLVDgFpR8eWOQCg%2FfK8GpUwrramAe6tB0iMjKQIdt7jwHSiNqyRX6btWRxCYZgGf2eAhR1nJtjijSMOafLIz06%2Bi6q9%2Bumy%2Fxy8WFjAcoJPxiblw9Uq35RByr0LaKVS%2FDNmCcVe54V%2FfwATI%2BdpACO5WUXiJAc8P6BaTdIthWTFmjQxq0EzaXXRqDDAzuSzP2rRMsWo7%2Fy3cuB1Ve%2BsYQ%2FAE4UeBxY8RxG0okBP%2Fllt4aKXBaHrMNDAyL4GOqUB%2FqJhga6ChQmjY5oP5HDlbMHK7Kg0nklTWkVHaNhD27Wt9kQmcvh32EXZAB1jGJGYFLvD8c8IL4cd7LfS1Ljv0CrSPEBUz%2FlPpBQeygwwupk09UiXr9vlFL98CwGeRdcHOYIq3%2BEAkLg5UDyuTzw02H4EP52HiriHBatMVPji%2FVWq5Qj0OxSJ2mv%2BawFEPLlpNz3Ue2NqwyVELYH2dGHW9wV6Jf5V&X-Amz-Signature=84204da103377e2e187c69dc6308fcd8a72d34f6dc86547236d6c0bd6087a566&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRZACTIL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxm8mw8Gc9mqQ05dU1fiHf2NnR%2BDS0Yw%2Br0esFdiObcQIgCjJP4WCz0KTrne4ObDi2A8Ryoc21Wzvf5lpvExJvvSIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFO5YRRgb3ja1LtPSrcA7DALfCCvqMyYFXBcyneeFq9OI4kEkQj6q3qDJGEItBvUI2Hm32rHxMTIfxoDNmp6%2Bk0d8H%2B2S05fLPf64Y6EeBtPkvgNBdQRaEYT26%2B2Crqs2zbgI8fm%2By2d0iLd4VLouzqDQP8ZXMNkutIUgkRxG0KTRQ7NNfRfF%2BP%2Fa6CXXfmwSJl1FuhWvawDiR62XL7jgVeHb7Kix3QE8FKII53j6LXvoav6tIUd7%2F89Ay9chNQH9b9OTWVHYe%2BfxHJeM3MVhguQWp4w9UlnNRQ8F%2FZd6U9TLPJRKbUbzdQnhGVmIpuQTVZZYoeNmv5%2F4aXybFkWTzREGDorFsjs0iSN2CLD8DBfqjuJ9yThkWSzLKJww3UfQMsfMaYiYisc1if9OkqJGteaT1E8DLVDgFpR8eWOQCg%2FfK8GpUwrramAe6tB0iMjKQIdt7jwHSiNqyRX6btWRxCYZgGf2eAhR1nJtjijSMOafLIz06%2Bi6q9%2Bumy%2Fxy8WFjAcoJPxiblw9Uq35RByr0LaKVS%2FDNmCcVe54V%2FfwATI%2BdpACO5WUXiJAc8P6BaTdIthWTFmjQxq0EzaXXRqDDAzuSzP2rRMsWo7%2Fy3cuB1Ve%2BsYQ%2FAE4UeBxY8RxG0okBP%2Fllt4aKXBaHrMNDAyL4GOqUB%2FqJhga6ChQmjY5oP5HDlbMHK7Kg0nklTWkVHaNhD27Wt9kQmcvh32EXZAB1jGJGYFLvD8c8IL4cd7LfS1Ljv0CrSPEBUz%2FlPpBQeygwwupk09UiXr9vlFL98CwGeRdcHOYIq3%2BEAkLg5UDyuTzw02H4EP52HiriHBatMVPji%2FVWq5Qj0OxSJ2mv%2BawFEPLlpNz3Ue2NqwyVELYH2dGHW9wV6Jf5V&X-Amz-Signature=715ad89f383dee50486a1db6921463450fef904f29c8332be65831181bb88e7d&X-Amz-SignedHeaders=host&x-id=GetObject)
