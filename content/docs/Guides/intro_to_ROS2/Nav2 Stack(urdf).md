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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMGES6SN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESM8kUu%2F4z%2F3PAknZKfkPRqLzY%2F4qJZnf7BzIi%2FUIStAiEA0b4gsRFVCuhHMLVZWgTAhIRT2GAM1zEMNSX7e06XWecqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxKW6cEK%2F5gPS71%2ByrcA2DSBgda7A1XIrqNmTzQLItbYxPKDf%2BeZxIv3QOkAVK%2FVjJqLPRHVZmFweZC7iFNQ7Qw9Da2oWC57XEJeR2wcEwUwG6BMsrSdIeoxRu7tLZDEZX%2BDTe5Zdh3AlZNPc8fteiL0mWTy6XzdhP5D8kPa73BqwmCrhmKVCIESk%2FAJLM6BUNvk31nfAn4nSvaShWzVXNCsoY%2BELYGt%2BxWfQQ2g00NX919zJPIxj%2By2KD9vDc0Ybj4sdfh99Q1eoeI2rmx0%2FsoUc%2Ffbf3zN%2BQw9NmLxD8vAHEpa%2BZsA3GcardRdRjaBabUen6zU69h2oRtQhMAU7b4ilFk3yoofnXRo8OjgGVVwOPUW%2FetcSvvCxM4oEe7WdKUaVGsXG1%2BxA9jm4iaWYUMsyWrRLLZRER2T8ZxOPBiICgi2NFDDXBQv15Be3cmAgHy53FfLIbday8bJIVfUnK1kzFIkmJfyxue4zYoAl1OFoMWRzngbC5jXWQYQaP2n4qunPtvNtnwON0Zwuk2fkX3Qo1o3%2FQS5wyr1XyeeC%2BtL4WVTs9kxc5t7HXOSPxKD%2Bm3kV83RMxU5WRm%2BJZwQqSDr5VSsMg9oYOC%2FD68rO8eyEyroCTmzYmpuwA2BjLpfVS9wnDOqOuB6nx0MI3Ls8EGOqUByYg0kdZBpjwyeNj3DdU8W3AEICcgUIafycukNNHAbHlEWMF2g%2FSOgF%2B17nPzj44Gt9M5DkGwS5LS%2FGx6Oo5UPCVQr%2FMZhMFsEnjI8CiRMcDqKsDNUGrZU0U01LFwD7Yl936BBEGFdzFvD3bnqbugolAo6YjHRmG7VmboOjYZojzr0kZ7QpzdKhZOIAASeVJ1pXVHMj77aRa0RT0l%2FEygfSVto7tN&X-Amz-Signature=e20003bc85aac308a6da2aa6417e7b98474d525477fa3c875b025ed8e37c6874&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMGES6SN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESM8kUu%2F4z%2F3PAknZKfkPRqLzY%2F4qJZnf7BzIi%2FUIStAiEA0b4gsRFVCuhHMLVZWgTAhIRT2GAM1zEMNSX7e06XWecqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxKW6cEK%2F5gPS71%2ByrcA2DSBgda7A1XIrqNmTzQLItbYxPKDf%2BeZxIv3QOkAVK%2FVjJqLPRHVZmFweZC7iFNQ7Qw9Da2oWC57XEJeR2wcEwUwG6BMsrSdIeoxRu7tLZDEZX%2BDTe5Zdh3AlZNPc8fteiL0mWTy6XzdhP5D8kPa73BqwmCrhmKVCIESk%2FAJLM6BUNvk31nfAn4nSvaShWzVXNCsoY%2BELYGt%2BxWfQQ2g00NX919zJPIxj%2By2KD9vDc0Ybj4sdfh99Q1eoeI2rmx0%2FsoUc%2Ffbf3zN%2BQw9NmLxD8vAHEpa%2BZsA3GcardRdRjaBabUen6zU69h2oRtQhMAU7b4ilFk3yoofnXRo8OjgGVVwOPUW%2FetcSvvCxM4oEe7WdKUaVGsXG1%2BxA9jm4iaWYUMsyWrRLLZRER2T8ZxOPBiICgi2NFDDXBQv15Be3cmAgHy53FfLIbday8bJIVfUnK1kzFIkmJfyxue4zYoAl1OFoMWRzngbC5jXWQYQaP2n4qunPtvNtnwON0Zwuk2fkX3Qo1o3%2FQS5wyr1XyeeC%2BtL4WVTs9kxc5t7HXOSPxKD%2Bm3kV83RMxU5WRm%2BJZwQqSDr5VSsMg9oYOC%2FD68rO8eyEyroCTmzYmpuwA2BjLpfVS9wnDOqOuB6nx0MI3Ls8EGOqUByYg0kdZBpjwyeNj3DdU8W3AEICcgUIafycukNNHAbHlEWMF2g%2FSOgF%2B17nPzj44Gt9M5DkGwS5LS%2FGx6Oo5UPCVQr%2FMZhMFsEnjI8CiRMcDqKsDNUGrZU0U01LFwD7Yl936BBEGFdzFvD3bnqbugolAo6YjHRmG7VmboOjYZojzr0kZ7QpzdKhZOIAASeVJ1pXVHMj77aRa0RT0l%2FEygfSVto7tN&X-Amz-Signature=dc4608b3e72d2234f7d22f404f06098430c3f4ebaf22d34126df6ed84d648593&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMGES6SN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESM8kUu%2F4z%2F3PAknZKfkPRqLzY%2F4qJZnf7BzIi%2FUIStAiEA0b4gsRFVCuhHMLVZWgTAhIRT2GAM1zEMNSX7e06XWecqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxKW6cEK%2F5gPS71%2ByrcA2DSBgda7A1XIrqNmTzQLItbYxPKDf%2BeZxIv3QOkAVK%2FVjJqLPRHVZmFweZC7iFNQ7Qw9Da2oWC57XEJeR2wcEwUwG6BMsrSdIeoxRu7tLZDEZX%2BDTe5Zdh3AlZNPc8fteiL0mWTy6XzdhP5D8kPa73BqwmCrhmKVCIESk%2FAJLM6BUNvk31nfAn4nSvaShWzVXNCsoY%2BELYGt%2BxWfQQ2g00NX919zJPIxj%2By2KD9vDc0Ybj4sdfh99Q1eoeI2rmx0%2FsoUc%2Ffbf3zN%2BQw9NmLxD8vAHEpa%2BZsA3GcardRdRjaBabUen6zU69h2oRtQhMAU7b4ilFk3yoofnXRo8OjgGVVwOPUW%2FetcSvvCxM4oEe7WdKUaVGsXG1%2BxA9jm4iaWYUMsyWrRLLZRER2T8ZxOPBiICgi2NFDDXBQv15Be3cmAgHy53FfLIbday8bJIVfUnK1kzFIkmJfyxue4zYoAl1OFoMWRzngbC5jXWQYQaP2n4qunPtvNtnwON0Zwuk2fkX3Qo1o3%2FQS5wyr1XyeeC%2BtL4WVTs9kxc5t7HXOSPxKD%2Bm3kV83RMxU5WRm%2BJZwQqSDr5VSsMg9oYOC%2FD68rO8eyEyroCTmzYmpuwA2BjLpfVS9wnDOqOuB6nx0MI3Ls8EGOqUByYg0kdZBpjwyeNj3DdU8W3AEICcgUIafycukNNHAbHlEWMF2g%2FSOgF%2B17nPzj44Gt9M5DkGwS5LS%2FGx6Oo5UPCVQr%2FMZhMFsEnjI8CiRMcDqKsDNUGrZU0U01LFwD7Yl936BBEGFdzFvD3bnqbugolAo6YjHRmG7VmboOjYZojzr0kZ7QpzdKhZOIAASeVJ1pXVHMj77aRa0RT0l%2FEygfSVto7tN&X-Amz-Signature=0dedb0c15081e31584e4528e565085baca1a02ffafd12bb8837f6e4d65313222&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMGES6SN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESM8kUu%2F4z%2F3PAknZKfkPRqLzY%2F4qJZnf7BzIi%2FUIStAiEA0b4gsRFVCuhHMLVZWgTAhIRT2GAM1zEMNSX7e06XWecqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxKW6cEK%2F5gPS71%2ByrcA2DSBgda7A1XIrqNmTzQLItbYxPKDf%2BeZxIv3QOkAVK%2FVjJqLPRHVZmFweZC7iFNQ7Qw9Da2oWC57XEJeR2wcEwUwG6BMsrSdIeoxRu7tLZDEZX%2BDTe5Zdh3AlZNPc8fteiL0mWTy6XzdhP5D8kPa73BqwmCrhmKVCIESk%2FAJLM6BUNvk31nfAn4nSvaShWzVXNCsoY%2BELYGt%2BxWfQQ2g00NX919zJPIxj%2By2KD9vDc0Ybj4sdfh99Q1eoeI2rmx0%2FsoUc%2Ffbf3zN%2BQw9NmLxD8vAHEpa%2BZsA3GcardRdRjaBabUen6zU69h2oRtQhMAU7b4ilFk3yoofnXRo8OjgGVVwOPUW%2FetcSvvCxM4oEe7WdKUaVGsXG1%2BxA9jm4iaWYUMsyWrRLLZRER2T8ZxOPBiICgi2NFDDXBQv15Be3cmAgHy53FfLIbday8bJIVfUnK1kzFIkmJfyxue4zYoAl1OFoMWRzngbC5jXWQYQaP2n4qunPtvNtnwON0Zwuk2fkX3Qo1o3%2FQS5wyr1XyeeC%2BtL4WVTs9kxc5t7HXOSPxKD%2Bm3kV83RMxU5WRm%2BJZwQqSDr5VSsMg9oYOC%2FD68rO8eyEyroCTmzYmpuwA2BjLpfVS9wnDOqOuB6nx0MI3Ls8EGOqUByYg0kdZBpjwyeNj3DdU8W3AEICcgUIafycukNNHAbHlEWMF2g%2FSOgF%2B17nPzj44Gt9M5DkGwS5LS%2FGx6Oo5UPCVQr%2FMZhMFsEnjI8CiRMcDqKsDNUGrZU0U01LFwD7Yl936BBEGFdzFvD3bnqbugolAo6YjHRmG7VmboOjYZojzr0kZ7QpzdKhZOIAASeVJ1pXVHMj77aRa0RT0l%2FEygfSVto7tN&X-Amz-Signature=68630220b70b8e3b9a3528842a457a53efeb537ed65f423c50983fde1becc628&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMGES6SN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESM8kUu%2F4z%2F3PAknZKfkPRqLzY%2F4qJZnf7BzIi%2FUIStAiEA0b4gsRFVCuhHMLVZWgTAhIRT2GAM1zEMNSX7e06XWecqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxKW6cEK%2F5gPS71%2ByrcA2DSBgda7A1XIrqNmTzQLItbYxPKDf%2BeZxIv3QOkAVK%2FVjJqLPRHVZmFweZC7iFNQ7Qw9Da2oWC57XEJeR2wcEwUwG6BMsrSdIeoxRu7tLZDEZX%2BDTe5Zdh3AlZNPc8fteiL0mWTy6XzdhP5D8kPa73BqwmCrhmKVCIESk%2FAJLM6BUNvk31nfAn4nSvaShWzVXNCsoY%2BELYGt%2BxWfQQ2g00NX919zJPIxj%2By2KD9vDc0Ybj4sdfh99Q1eoeI2rmx0%2FsoUc%2Ffbf3zN%2BQw9NmLxD8vAHEpa%2BZsA3GcardRdRjaBabUen6zU69h2oRtQhMAU7b4ilFk3yoofnXRo8OjgGVVwOPUW%2FetcSvvCxM4oEe7WdKUaVGsXG1%2BxA9jm4iaWYUMsyWrRLLZRER2T8ZxOPBiICgi2NFDDXBQv15Be3cmAgHy53FfLIbday8bJIVfUnK1kzFIkmJfyxue4zYoAl1OFoMWRzngbC5jXWQYQaP2n4qunPtvNtnwON0Zwuk2fkX3Qo1o3%2FQS5wyr1XyeeC%2BtL4WVTs9kxc5t7HXOSPxKD%2Bm3kV83RMxU5WRm%2BJZwQqSDr5VSsMg9oYOC%2FD68rO8eyEyroCTmzYmpuwA2BjLpfVS9wnDOqOuB6nx0MI3Ls8EGOqUByYg0kdZBpjwyeNj3DdU8W3AEICcgUIafycukNNHAbHlEWMF2g%2FSOgF%2B17nPzj44Gt9M5DkGwS5LS%2FGx6Oo5UPCVQr%2FMZhMFsEnjI8CiRMcDqKsDNUGrZU0U01LFwD7Yl936BBEGFdzFvD3bnqbugolAo6YjHRmG7VmboOjYZojzr0kZ7QpzdKhZOIAASeVJ1pXVHMj77aRa0RT0l%2FEygfSVto7tN&X-Amz-Signature=fe9d4d08c736524e2737b972e96005f56e1d60679c91dc77c9bd735148f9c7aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMGES6SN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESM8kUu%2F4z%2F3PAknZKfkPRqLzY%2F4qJZnf7BzIi%2FUIStAiEA0b4gsRFVCuhHMLVZWgTAhIRT2GAM1zEMNSX7e06XWecqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxKW6cEK%2F5gPS71%2ByrcA2DSBgda7A1XIrqNmTzQLItbYxPKDf%2BeZxIv3QOkAVK%2FVjJqLPRHVZmFweZC7iFNQ7Qw9Da2oWC57XEJeR2wcEwUwG6BMsrSdIeoxRu7tLZDEZX%2BDTe5Zdh3AlZNPc8fteiL0mWTy6XzdhP5D8kPa73BqwmCrhmKVCIESk%2FAJLM6BUNvk31nfAn4nSvaShWzVXNCsoY%2BELYGt%2BxWfQQ2g00NX919zJPIxj%2By2KD9vDc0Ybj4sdfh99Q1eoeI2rmx0%2FsoUc%2Ffbf3zN%2BQw9NmLxD8vAHEpa%2BZsA3GcardRdRjaBabUen6zU69h2oRtQhMAU7b4ilFk3yoofnXRo8OjgGVVwOPUW%2FetcSvvCxM4oEe7WdKUaVGsXG1%2BxA9jm4iaWYUMsyWrRLLZRER2T8ZxOPBiICgi2NFDDXBQv15Be3cmAgHy53FfLIbday8bJIVfUnK1kzFIkmJfyxue4zYoAl1OFoMWRzngbC5jXWQYQaP2n4qunPtvNtnwON0Zwuk2fkX3Qo1o3%2FQS5wyr1XyeeC%2BtL4WVTs9kxc5t7HXOSPxKD%2Bm3kV83RMxU5WRm%2BJZwQqSDr5VSsMg9oYOC%2FD68rO8eyEyroCTmzYmpuwA2BjLpfVS9wnDOqOuB6nx0MI3Ls8EGOqUByYg0kdZBpjwyeNj3DdU8W3AEICcgUIafycukNNHAbHlEWMF2g%2FSOgF%2B17nPzj44Gt9M5DkGwS5LS%2FGx6Oo5UPCVQr%2FMZhMFsEnjI8CiRMcDqKsDNUGrZU0U01LFwD7Yl936BBEGFdzFvD3bnqbugolAo6YjHRmG7VmboOjYZojzr0kZ7QpzdKhZOIAASeVJ1pXVHMj77aRa0RT0l%2FEygfSVto7tN&X-Amz-Signature=d5e99dbc03e16087ef9459054a7993fcacf0146585478b6844b12858040e35c3&X-Amz-SignedHeaders=host&x-id=GetObject)
