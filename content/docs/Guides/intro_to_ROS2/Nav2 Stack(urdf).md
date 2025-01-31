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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QTGWLNI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyyXb19WR9aR2iYHzCJM4ncGgJFJjL4uLuIOT3bvXCDAIgPpelT8lQUAewyW%2FD4ZV98zrS87t2Ea0cDymVWgMeOPMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI94dxUqLbGYxNeVPircA6gy7h1f2D9Klj9dArixnGGdZran2BN4PnWOs7Pva3nFx2eYtvT7aXBJ0jef%2FvL0ilPjDMuoVaDAGe9mDdyIqQKoR7RsdMDxOdT9hXGPIU5uisDyVGsTUEq7ZhGMgAi06MtMwwHgcEBTp46TWh8QKsw0bDvi8Zy1SvnfVMjK5YMp8xHO%2BPPltTMJgsrhklSNuc1aQgpmDYx8MKKMv%2F37IAHxOFEEU3IcK6ipWIPWzbhU7WpdAV%2BDjRUugA%2FZdBO7ksI%2BmXjwbZCiQuFTrgHXAmv1x6AYK3vQFigh%2BFLwGTFCm2jLO1%2BNsOEdQ6%2BA%2FS80iYzxye33KUkrIbgOsSwV8vNCO1V%2Fvu3cTMWalixZWBnpNQvplof09sR2KEJK1jYaG1OmuNLR7QduQLc6o6%2F6ubbXODX66tAPh%2BkcsiW145obUcwMppw0e9HU8h6lWGXzNY1jzPub5Gh1Id5FPLtecoh6BQ0eMJwHqWwTAJm8JVVGRL4fAoRoxwME0k0Plzgay9Fwtr2cga%2FtCfxYwxa82QhGEf676KuCG30gCKeP7XqKOmTFNWUY5DfOoEyByeIuPHnQXbzKTncMrJTR4R%2FWtfqQfYkvGo4eipfjJ6z%2BQvkBTBakyW2QZaeos8%2FqMIOR87wGOqUBxklR0qgUsgoUcEOk9usJNigOsNkfasc5SalAC8RdvicAxtKmG%2B3kdW1hngL2Nif6SByXmaAzgZ%2BQfRlPqMj34DK7wWjhsxmeq1hJhfJfId08MyYkWmx7lcY2B5Iw0JTfVExQ2VXGzFKE0PmDJuewTU%2BcRqs53QZDfHVbcsv%2F1qqdBgP6pap5FfGwlNcGLx5pAIjS2082uDCy3yxRA7JKgzZsSTfo&X-Amz-Signature=4c504ff0c4af40934f8b3aab6ae266e09f4620dd750d0a1295efcbcec30faf91&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QTGWLNI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyyXb19WR9aR2iYHzCJM4ncGgJFJjL4uLuIOT3bvXCDAIgPpelT8lQUAewyW%2FD4ZV98zrS87t2Ea0cDymVWgMeOPMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI94dxUqLbGYxNeVPircA6gy7h1f2D9Klj9dArixnGGdZran2BN4PnWOs7Pva3nFx2eYtvT7aXBJ0jef%2FvL0ilPjDMuoVaDAGe9mDdyIqQKoR7RsdMDxOdT9hXGPIU5uisDyVGsTUEq7ZhGMgAi06MtMwwHgcEBTp46TWh8QKsw0bDvi8Zy1SvnfVMjK5YMp8xHO%2BPPltTMJgsrhklSNuc1aQgpmDYx8MKKMv%2F37IAHxOFEEU3IcK6ipWIPWzbhU7WpdAV%2BDjRUugA%2FZdBO7ksI%2BmXjwbZCiQuFTrgHXAmv1x6AYK3vQFigh%2BFLwGTFCm2jLO1%2BNsOEdQ6%2BA%2FS80iYzxye33KUkrIbgOsSwV8vNCO1V%2Fvu3cTMWalixZWBnpNQvplof09sR2KEJK1jYaG1OmuNLR7QduQLc6o6%2F6ubbXODX66tAPh%2BkcsiW145obUcwMppw0e9HU8h6lWGXzNY1jzPub5Gh1Id5FPLtecoh6BQ0eMJwHqWwTAJm8JVVGRL4fAoRoxwME0k0Plzgay9Fwtr2cga%2FtCfxYwxa82QhGEf676KuCG30gCKeP7XqKOmTFNWUY5DfOoEyByeIuPHnQXbzKTncMrJTR4R%2FWtfqQfYkvGo4eipfjJ6z%2BQvkBTBakyW2QZaeos8%2FqMIOR87wGOqUBxklR0qgUsgoUcEOk9usJNigOsNkfasc5SalAC8RdvicAxtKmG%2B3kdW1hngL2Nif6SByXmaAzgZ%2BQfRlPqMj34DK7wWjhsxmeq1hJhfJfId08MyYkWmx7lcY2B5Iw0JTfVExQ2VXGzFKE0PmDJuewTU%2BcRqs53QZDfHVbcsv%2F1qqdBgP6pap5FfGwlNcGLx5pAIjS2082uDCy3yxRA7JKgzZsSTfo&X-Amz-Signature=2fd5404a32f5cf4b2d8a834feb59eefbc5f307423329531c6acc92c59c3ec0ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QTGWLNI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyyXb19WR9aR2iYHzCJM4ncGgJFJjL4uLuIOT3bvXCDAIgPpelT8lQUAewyW%2FD4ZV98zrS87t2Ea0cDymVWgMeOPMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI94dxUqLbGYxNeVPircA6gy7h1f2D9Klj9dArixnGGdZran2BN4PnWOs7Pva3nFx2eYtvT7aXBJ0jef%2FvL0ilPjDMuoVaDAGe9mDdyIqQKoR7RsdMDxOdT9hXGPIU5uisDyVGsTUEq7ZhGMgAi06MtMwwHgcEBTp46TWh8QKsw0bDvi8Zy1SvnfVMjK5YMp8xHO%2BPPltTMJgsrhklSNuc1aQgpmDYx8MKKMv%2F37IAHxOFEEU3IcK6ipWIPWzbhU7WpdAV%2BDjRUugA%2FZdBO7ksI%2BmXjwbZCiQuFTrgHXAmv1x6AYK3vQFigh%2BFLwGTFCm2jLO1%2BNsOEdQ6%2BA%2FS80iYzxye33KUkrIbgOsSwV8vNCO1V%2Fvu3cTMWalixZWBnpNQvplof09sR2KEJK1jYaG1OmuNLR7QduQLc6o6%2F6ubbXODX66tAPh%2BkcsiW145obUcwMppw0e9HU8h6lWGXzNY1jzPub5Gh1Id5FPLtecoh6BQ0eMJwHqWwTAJm8JVVGRL4fAoRoxwME0k0Plzgay9Fwtr2cga%2FtCfxYwxa82QhGEf676KuCG30gCKeP7XqKOmTFNWUY5DfOoEyByeIuPHnQXbzKTncMrJTR4R%2FWtfqQfYkvGo4eipfjJ6z%2BQvkBTBakyW2QZaeos8%2FqMIOR87wGOqUBxklR0qgUsgoUcEOk9usJNigOsNkfasc5SalAC8RdvicAxtKmG%2B3kdW1hngL2Nif6SByXmaAzgZ%2BQfRlPqMj34DK7wWjhsxmeq1hJhfJfId08MyYkWmx7lcY2B5Iw0JTfVExQ2VXGzFKE0PmDJuewTU%2BcRqs53QZDfHVbcsv%2F1qqdBgP6pap5FfGwlNcGLx5pAIjS2082uDCy3yxRA7JKgzZsSTfo&X-Amz-Signature=6d398cabacf145f07f507255c0de0e8e6d50d13f7c8aead0776ba78411a0470b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QTGWLNI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyyXb19WR9aR2iYHzCJM4ncGgJFJjL4uLuIOT3bvXCDAIgPpelT8lQUAewyW%2FD4ZV98zrS87t2Ea0cDymVWgMeOPMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI94dxUqLbGYxNeVPircA6gy7h1f2D9Klj9dArixnGGdZran2BN4PnWOs7Pva3nFx2eYtvT7aXBJ0jef%2FvL0ilPjDMuoVaDAGe9mDdyIqQKoR7RsdMDxOdT9hXGPIU5uisDyVGsTUEq7ZhGMgAi06MtMwwHgcEBTp46TWh8QKsw0bDvi8Zy1SvnfVMjK5YMp8xHO%2BPPltTMJgsrhklSNuc1aQgpmDYx8MKKMv%2F37IAHxOFEEU3IcK6ipWIPWzbhU7WpdAV%2BDjRUugA%2FZdBO7ksI%2BmXjwbZCiQuFTrgHXAmv1x6AYK3vQFigh%2BFLwGTFCm2jLO1%2BNsOEdQ6%2BA%2FS80iYzxye33KUkrIbgOsSwV8vNCO1V%2Fvu3cTMWalixZWBnpNQvplof09sR2KEJK1jYaG1OmuNLR7QduQLc6o6%2F6ubbXODX66tAPh%2BkcsiW145obUcwMppw0e9HU8h6lWGXzNY1jzPub5Gh1Id5FPLtecoh6BQ0eMJwHqWwTAJm8JVVGRL4fAoRoxwME0k0Plzgay9Fwtr2cga%2FtCfxYwxa82QhGEf676KuCG30gCKeP7XqKOmTFNWUY5DfOoEyByeIuPHnQXbzKTncMrJTR4R%2FWtfqQfYkvGo4eipfjJ6z%2BQvkBTBakyW2QZaeos8%2FqMIOR87wGOqUBxklR0qgUsgoUcEOk9usJNigOsNkfasc5SalAC8RdvicAxtKmG%2B3kdW1hngL2Nif6SByXmaAzgZ%2BQfRlPqMj34DK7wWjhsxmeq1hJhfJfId08MyYkWmx7lcY2B5Iw0JTfVExQ2VXGzFKE0PmDJuewTU%2BcRqs53QZDfHVbcsv%2F1qqdBgP6pap5FfGwlNcGLx5pAIjS2082uDCy3yxRA7JKgzZsSTfo&X-Amz-Signature=4a6f5333e8c7b9edd246107b81e293223e42648e6d255181305e12593bc0f485&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QTGWLNI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyyXb19WR9aR2iYHzCJM4ncGgJFJjL4uLuIOT3bvXCDAIgPpelT8lQUAewyW%2FD4ZV98zrS87t2Ea0cDymVWgMeOPMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI94dxUqLbGYxNeVPircA6gy7h1f2D9Klj9dArixnGGdZran2BN4PnWOs7Pva3nFx2eYtvT7aXBJ0jef%2FvL0ilPjDMuoVaDAGe9mDdyIqQKoR7RsdMDxOdT9hXGPIU5uisDyVGsTUEq7ZhGMgAi06MtMwwHgcEBTp46TWh8QKsw0bDvi8Zy1SvnfVMjK5YMp8xHO%2BPPltTMJgsrhklSNuc1aQgpmDYx8MKKMv%2F37IAHxOFEEU3IcK6ipWIPWzbhU7WpdAV%2BDjRUugA%2FZdBO7ksI%2BmXjwbZCiQuFTrgHXAmv1x6AYK3vQFigh%2BFLwGTFCm2jLO1%2BNsOEdQ6%2BA%2FS80iYzxye33KUkrIbgOsSwV8vNCO1V%2Fvu3cTMWalixZWBnpNQvplof09sR2KEJK1jYaG1OmuNLR7QduQLc6o6%2F6ubbXODX66tAPh%2BkcsiW145obUcwMppw0e9HU8h6lWGXzNY1jzPub5Gh1Id5FPLtecoh6BQ0eMJwHqWwTAJm8JVVGRL4fAoRoxwME0k0Plzgay9Fwtr2cga%2FtCfxYwxa82QhGEf676KuCG30gCKeP7XqKOmTFNWUY5DfOoEyByeIuPHnQXbzKTncMrJTR4R%2FWtfqQfYkvGo4eipfjJ6z%2BQvkBTBakyW2QZaeos8%2FqMIOR87wGOqUBxklR0qgUsgoUcEOk9usJNigOsNkfasc5SalAC8RdvicAxtKmG%2B3kdW1hngL2Nif6SByXmaAzgZ%2BQfRlPqMj34DK7wWjhsxmeq1hJhfJfId08MyYkWmx7lcY2B5Iw0JTfVExQ2VXGzFKE0PmDJuewTU%2BcRqs53QZDfHVbcsv%2F1qqdBgP6pap5FfGwlNcGLx5pAIjS2082uDCy3yxRA7JKgzZsSTfo&X-Amz-Signature=ec33f77bf28a4e3fc748353ee5658de55529ff3eca35a86d84a718995ed4aae4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QTGWLNI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyyXb19WR9aR2iYHzCJM4ncGgJFJjL4uLuIOT3bvXCDAIgPpelT8lQUAewyW%2FD4ZV98zrS87t2Ea0cDymVWgMeOPMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI94dxUqLbGYxNeVPircA6gy7h1f2D9Klj9dArixnGGdZran2BN4PnWOs7Pva3nFx2eYtvT7aXBJ0jef%2FvL0ilPjDMuoVaDAGe9mDdyIqQKoR7RsdMDxOdT9hXGPIU5uisDyVGsTUEq7ZhGMgAi06MtMwwHgcEBTp46TWh8QKsw0bDvi8Zy1SvnfVMjK5YMp8xHO%2BPPltTMJgsrhklSNuc1aQgpmDYx8MKKMv%2F37IAHxOFEEU3IcK6ipWIPWzbhU7WpdAV%2BDjRUugA%2FZdBO7ksI%2BmXjwbZCiQuFTrgHXAmv1x6AYK3vQFigh%2BFLwGTFCm2jLO1%2BNsOEdQ6%2BA%2FS80iYzxye33KUkrIbgOsSwV8vNCO1V%2Fvu3cTMWalixZWBnpNQvplof09sR2KEJK1jYaG1OmuNLR7QduQLc6o6%2F6ubbXODX66tAPh%2BkcsiW145obUcwMppw0e9HU8h6lWGXzNY1jzPub5Gh1Id5FPLtecoh6BQ0eMJwHqWwTAJm8JVVGRL4fAoRoxwME0k0Plzgay9Fwtr2cga%2FtCfxYwxa82QhGEf676KuCG30gCKeP7XqKOmTFNWUY5DfOoEyByeIuPHnQXbzKTncMrJTR4R%2FWtfqQfYkvGo4eipfjJ6z%2BQvkBTBakyW2QZaeos8%2FqMIOR87wGOqUBxklR0qgUsgoUcEOk9usJNigOsNkfasc5SalAC8RdvicAxtKmG%2B3kdW1hngL2Nif6SByXmaAzgZ%2BQfRlPqMj34DK7wWjhsxmeq1hJhfJfId08MyYkWmx7lcY2B5Iw0JTfVExQ2VXGzFKE0PmDJuewTU%2BcRqs53QZDfHVbcsv%2F1qqdBgP6pap5FfGwlNcGLx5pAIjS2082uDCy3yxRA7JKgzZsSTfo&X-Amz-Signature=c3dda53553f15ded002cddeb64481935c7abb1e1ede2398381898cc39e2ca083&X-Amz-SignedHeaders=host&x-id=GetObject)
