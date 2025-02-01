---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OXLH4G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOYg2tol3%2B1Lhh%2BDU4cLEkVnIs6ox7kO7FoP46%2BDth3AiAzkQFg94Sv9ZfAGp271DBj3nNkhdwMiYR18IBPIRhpGyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6zO0u3DD2dVJ7Z7EKtwDVTrG9b%2FifZuLcVHDQjvgHNtxen%2BW0fA2qi1zuZjVu9%2BS48Wq6Bwryzh%2BNzaoVsBORLU9jSWnx4Ng%2BcvrOhP8n1EHMe6DAVffUnfTt5gnip98z7HE7wHMq91vwGgnacAuw%2Fz8AKJh%2FOPGEclZ9QqL2KYqu2DLfpXdWfMBWRBSs9JxzHiGFjxk3R2ZP55Iblyvx246wfPMUQtl4VH63%2FbuXLL4ig3mwUGwp1Jxc6Dg%2FotU7d3pSG2gKBY0gODS1eUXdQ1BAPwTYKyIK2dVaDQXVrPNUScJV3vUrLoqfHnmEOMEt1VsVT8iJEuG%2F%2BTLk%2BSRewubPnmm6S5xdhwgSVNlMUj4UOElpy7abWLLd9rY8emwrFVz58798t%2FTcFzc655ionxGDfuqgWE6pXcWkrU7%2FLyfEB6RuTYjLa%2BXwOuwW9Up%2FfrKik0ubtFM9F2H7%2BPhvgqNLg5B9fAsz%2FD8dfMiz1vWEQDJbkn0RONZvTZ6dKm%2FQrg5dDHVeUe5urEtAuqQ%2BM4ZSLcXk6q%2F83NvCHe19evs5wEHHnFfsGNdGflK7eiNNKW61TufPJI6I%2B2WFP%2FUPNCrLPa%2Fs2aS5yC3QHxSwrSIjkYnSAL1xfX4FqXvmfmp62XJoxwdFqrfD5Ywg8b4vAY6pgFjhgWsFfKeKZGYlXlvbrETaMPtDlH7q7qQtUwrEZfEn%2FQJ2lnE3hlWRIau1nub%2B4gtjkPK%2FfjTkcTSiPvU%2BJrV7yCEpYsC870LdyLveogk%2F3jGyiEe29zyXovBWe5Am3sX92WaQLAOjFg5v9pFJGjJ3%2FSxSZ%2FKblT06Zh6mwk%2FlKXGFGWiQMRQ%2FPe%2F4y2cOUzF3N8j3CyjXGfMKKNR1O76UB72pRGx&X-Amz-Signature=2eaf7f08b4694e1fbde4f176c3702a430d9327c94ca8b254d65db51e9676ea4e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OXLH4G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOYg2tol3%2B1Lhh%2BDU4cLEkVnIs6ox7kO7FoP46%2BDth3AiAzkQFg94Sv9ZfAGp271DBj3nNkhdwMiYR18IBPIRhpGyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6zO0u3DD2dVJ7Z7EKtwDVTrG9b%2FifZuLcVHDQjvgHNtxen%2BW0fA2qi1zuZjVu9%2BS48Wq6Bwryzh%2BNzaoVsBORLU9jSWnx4Ng%2BcvrOhP8n1EHMe6DAVffUnfTt5gnip98z7HE7wHMq91vwGgnacAuw%2Fz8AKJh%2FOPGEclZ9QqL2KYqu2DLfpXdWfMBWRBSs9JxzHiGFjxk3R2ZP55Iblyvx246wfPMUQtl4VH63%2FbuXLL4ig3mwUGwp1Jxc6Dg%2FotU7d3pSG2gKBY0gODS1eUXdQ1BAPwTYKyIK2dVaDQXVrPNUScJV3vUrLoqfHnmEOMEt1VsVT8iJEuG%2F%2BTLk%2BSRewubPnmm6S5xdhwgSVNlMUj4UOElpy7abWLLd9rY8emwrFVz58798t%2FTcFzc655ionxGDfuqgWE6pXcWkrU7%2FLyfEB6RuTYjLa%2BXwOuwW9Up%2FfrKik0ubtFM9F2H7%2BPhvgqNLg5B9fAsz%2FD8dfMiz1vWEQDJbkn0RONZvTZ6dKm%2FQrg5dDHVeUe5urEtAuqQ%2BM4ZSLcXk6q%2F83NvCHe19evs5wEHHnFfsGNdGflK7eiNNKW61TufPJI6I%2B2WFP%2FUPNCrLPa%2Fs2aS5yC3QHxSwrSIjkYnSAL1xfX4FqXvmfmp62XJoxwdFqrfD5Ywg8b4vAY6pgFjhgWsFfKeKZGYlXlvbrETaMPtDlH7q7qQtUwrEZfEn%2FQJ2lnE3hlWRIau1nub%2B4gtjkPK%2FfjTkcTSiPvU%2BJrV7yCEpYsC870LdyLveogk%2F3jGyiEe29zyXovBWe5Am3sX92WaQLAOjFg5v9pFJGjJ3%2FSxSZ%2FKblT06Zh6mwk%2FlKXGFGWiQMRQ%2FPe%2F4y2cOUzF3N8j3CyjXGfMKKNR1O76UB72pRGx&X-Amz-Signature=36478c2d1fc0ae7e6be6bbecdea48298d48bbc01b6612716670f6b23ae6f1896&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OXLH4G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOYg2tol3%2B1Lhh%2BDU4cLEkVnIs6ox7kO7FoP46%2BDth3AiAzkQFg94Sv9ZfAGp271DBj3nNkhdwMiYR18IBPIRhpGyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6zO0u3DD2dVJ7Z7EKtwDVTrG9b%2FifZuLcVHDQjvgHNtxen%2BW0fA2qi1zuZjVu9%2BS48Wq6Bwryzh%2BNzaoVsBORLU9jSWnx4Ng%2BcvrOhP8n1EHMe6DAVffUnfTt5gnip98z7HE7wHMq91vwGgnacAuw%2Fz8AKJh%2FOPGEclZ9QqL2KYqu2DLfpXdWfMBWRBSs9JxzHiGFjxk3R2ZP55Iblyvx246wfPMUQtl4VH63%2FbuXLL4ig3mwUGwp1Jxc6Dg%2FotU7d3pSG2gKBY0gODS1eUXdQ1BAPwTYKyIK2dVaDQXVrPNUScJV3vUrLoqfHnmEOMEt1VsVT8iJEuG%2F%2BTLk%2BSRewubPnmm6S5xdhwgSVNlMUj4UOElpy7abWLLd9rY8emwrFVz58798t%2FTcFzc655ionxGDfuqgWE6pXcWkrU7%2FLyfEB6RuTYjLa%2BXwOuwW9Up%2FfrKik0ubtFM9F2H7%2BPhvgqNLg5B9fAsz%2FD8dfMiz1vWEQDJbkn0RONZvTZ6dKm%2FQrg5dDHVeUe5urEtAuqQ%2BM4ZSLcXk6q%2F83NvCHe19evs5wEHHnFfsGNdGflK7eiNNKW61TufPJI6I%2B2WFP%2FUPNCrLPa%2Fs2aS5yC3QHxSwrSIjkYnSAL1xfX4FqXvmfmp62XJoxwdFqrfD5Ywg8b4vAY6pgFjhgWsFfKeKZGYlXlvbrETaMPtDlH7q7qQtUwrEZfEn%2FQJ2lnE3hlWRIau1nub%2B4gtjkPK%2FfjTkcTSiPvU%2BJrV7yCEpYsC870LdyLveogk%2F3jGyiEe29zyXovBWe5Am3sX92WaQLAOjFg5v9pFJGjJ3%2FSxSZ%2FKblT06Zh6mwk%2FlKXGFGWiQMRQ%2FPe%2F4y2cOUzF3N8j3CyjXGfMKKNR1O76UB72pRGx&X-Amz-Signature=c77ce1343a6e494be3acd657c2e475395c8b3f1bb0190a5c1cc094b1b3ddb2ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OXLH4G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOYg2tol3%2B1Lhh%2BDU4cLEkVnIs6ox7kO7FoP46%2BDth3AiAzkQFg94Sv9ZfAGp271DBj3nNkhdwMiYR18IBPIRhpGyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6zO0u3DD2dVJ7Z7EKtwDVTrG9b%2FifZuLcVHDQjvgHNtxen%2BW0fA2qi1zuZjVu9%2BS48Wq6Bwryzh%2BNzaoVsBORLU9jSWnx4Ng%2BcvrOhP8n1EHMe6DAVffUnfTt5gnip98z7HE7wHMq91vwGgnacAuw%2Fz8AKJh%2FOPGEclZ9QqL2KYqu2DLfpXdWfMBWRBSs9JxzHiGFjxk3R2ZP55Iblyvx246wfPMUQtl4VH63%2FbuXLL4ig3mwUGwp1Jxc6Dg%2FotU7d3pSG2gKBY0gODS1eUXdQ1BAPwTYKyIK2dVaDQXVrPNUScJV3vUrLoqfHnmEOMEt1VsVT8iJEuG%2F%2BTLk%2BSRewubPnmm6S5xdhwgSVNlMUj4UOElpy7abWLLd9rY8emwrFVz58798t%2FTcFzc655ionxGDfuqgWE6pXcWkrU7%2FLyfEB6RuTYjLa%2BXwOuwW9Up%2FfrKik0ubtFM9F2H7%2BPhvgqNLg5B9fAsz%2FD8dfMiz1vWEQDJbkn0RONZvTZ6dKm%2FQrg5dDHVeUe5urEtAuqQ%2BM4ZSLcXk6q%2F83NvCHe19evs5wEHHnFfsGNdGflK7eiNNKW61TufPJI6I%2B2WFP%2FUPNCrLPa%2Fs2aS5yC3QHxSwrSIjkYnSAL1xfX4FqXvmfmp62XJoxwdFqrfD5Ywg8b4vAY6pgFjhgWsFfKeKZGYlXlvbrETaMPtDlH7q7qQtUwrEZfEn%2FQJ2lnE3hlWRIau1nub%2B4gtjkPK%2FfjTkcTSiPvU%2BJrV7yCEpYsC870LdyLveogk%2F3jGyiEe29zyXovBWe5Am3sX92WaQLAOjFg5v9pFJGjJ3%2FSxSZ%2FKblT06Zh6mwk%2FlKXGFGWiQMRQ%2FPe%2F4y2cOUzF3N8j3CyjXGfMKKNR1O76UB72pRGx&X-Amz-Signature=fc887b27ac84ab827a8cea1c2129e4be7dcd5fce340783edb98a58730d3f8734&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OXLH4G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOYg2tol3%2B1Lhh%2BDU4cLEkVnIs6ox7kO7FoP46%2BDth3AiAzkQFg94Sv9ZfAGp271DBj3nNkhdwMiYR18IBPIRhpGyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6zO0u3DD2dVJ7Z7EKtwDVTrG9b%2FifZuLcVHDQjvgHNtxen%2BW0fA2qi1zuZjVu9%2BS48Wq6Bwryzh%2BNzaoVsBORLU9jSWnx4Ng%2BcvrOhP8n1EHMe6DAVffUnfTt5gnip98z7HE7wHMq91vwGgnacAuw%2Fz8AKJh%2FOPGEclZ9QqL2KYqu2DLfpXdWfMBWRBSs9JxzHiGFjxk3R2ZP55Iblyvx246wfPMUQtl4VH63%2FbuXLL4ig3mwUGwp1Jxc6Dg%2FotU7d3pSG2gKBY0gODS1eUXdQ1BAPwTYKyIK2dVaDQXVrPNUScJV3vUrLoqfHnmEOMEt1VsVT8iJEuG%2F%2BTLk%2BSRewubPnmm6S5xdhwgSVNlMUj4UOElpy7abWLLd9rY8emwrFVz58798t%2FTcFzc655ionxGDfuqgWE6pXcWkrU7%2FLyfEB6RuTYjLa%2BXwOuwW9Up%2FfrKik0ubtFM9F2H7%2BPhvgqNLg5B9fAsz%2FD8dfMiz1vWEQDJbkn0RONZvTZ6dKm%2FQrg5dDHVeUe5urEtAuqQ%2BM4ZSLcXk6q%2F83NvCHe19evs5wEHHnFfsGNdGflK7eiNNKW61TufPJI6I%2B2WFP%2FUPNCrLPa%2Fs2aS5yC3QHxSwrSIjkYnSAL1xfX4FqXvmfmp62XJoxwdFqrfD5Ywg8b4vAY6pgFjhgWsFfKeKZGYlXlvbrETaMPtDlH7q7qQtUwrEZfEn%2FQJ2lnE3hlWRIau1nub%2B4gtjkPK%2FfjTkcTSiPvU%2BJrV7yCEpYsC870LdyLveogk%2F3jGyiEe29zyXovBWe5Am3sX92WaQLAOjFg5v9pFJGjJ3%2FSxSZ%2FKblT06Zh6mwk%2FlKXGFGWiQMRQ%2FPe%2F4y2cOUzF3N8j3CyjXGfMKKNR1O76UB72pRGx&X-Amz-Signature=d6bac5d0d45bdc862fefe6199f75f0e1a1616147a67e192652d49e2894e59447&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OXLH4G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOYg2tol3%2B1Lhh%2BDU4cLEkVnIs6ox7kO7FoP46%2BDth3AiAzkQFg94Sv9ZfAGp271DBj3nNkhdwMiYR18IBPIRhpGyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6zO0u3DD2dVJ7Z7EKtwDVTrG9b%2FifZuLcVHDQjvgHNtxen%2BW0fA2qi1zuZjVu9%2BS48Wq6Bwryzh%2BNzaoVsBORLU9jSWnx4Ng%2BcvrOhP8n1EHMe6DAVffUnfTt5gnip98z7HE7wHMq91vwGgnacAuw%2Fz8AKJh%2FOPGEclZ9QqL2KYqu2DLfpXdWfMBWRBSs9JxzHiGFjxk3R2ZP55Iblyvx246wfPMUQtl4VH63%2FbuXLL4ig3mwUGwp1Jxc6Dg%2FotU7d3pSG2gKBY0gODS1eUXdQ1BAPwTYKyIK2dVaDQXVrPNUScJV3vUrLoqfHnmEOMEt1VsVT8iJEuG%2F%2BTLk%2BSRewubPnmm6S5xdhwgSVNlMUj4UOElpy7abWLLd9rY8emwrFVz58798t%2FTcFzc655ionxGDfuqgWE6pXcWkrU7%2FLyfEB6RuTYjLa%2BXwOuwW9Up%2FfrKik0ubtFM9F2H7%2BPhvgqNLg5B9fAsz%2FD8dfMiz1vWEQDJbkn0RONZvTZ6dKm%2FQrg5dDHVeUe5urEtAuqQ%2BM4ZSLcXk6q%2F83NvCHe19evs5wEHHnFfsGNdGflK7eiNNKW61TufPJI6I%2B2WFP%2FUPNCrLPa%2Fs2aS5yC3QHxSwrSIjkYnSAL1xfX4FqXvmfmp62XJoxwdFqrfD5Ywg8b4vAY6pgFjhgWsFfKeKZGYlXlvbrETaMPtDlH7q7qQtUwrEZfEn%2FQJ2lnE3hlWRIau1nub%2B4gtjkPK%2FfjTkcTSiPvU%2BJrV7yCEpYsC870LdyLveogk%2F3jGyiEe29zyXovBWe5Am3sX92WaQLAOjFg5v9pFJGjJ3%2FSxSZ%2FKblT06Zh6mwk%2FlKXGFGWiQMRQ%2FPe%2F4y2cOUzF3N8j3CyjXGfMKKNR1O76UB72pRGx&X-Amz-Signature=20e0d1ec944bb0c0c8afacc9ed2c1ef116166b56862e431edb9ea8beca208fe2&X-Amz-SignedHeaders=host&x-id=GetObject)
