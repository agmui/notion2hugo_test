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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUP33QSC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFK9lEID4p0HsqBTRiWU59Xnh%2FcY126WYaPCjU6dxYbCAiEA2KnAE%2F%2B31%2Bc%2FNLLp%2BYbRIppymDcV1v5Bz8lKsqfhNLkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK8Vi9jSWz4woyxgFCrcA%2FEluzXUVobZ12qSo6W62pEUnlYMCMMUiFX6FQnqJXNTiWs%2BviyQEm3vZs74YRWV%2BaA%2BPsK7fJ2ztyunKtOJL7gaxF6IouL9wKCFeTO6zum1l1pC%2Fx%2Fl7huyDElOrtGoVeWTAOtZri9VReodPgNIS3eL%2B7NAroDSxLoze2Qx%2BrncOt%2B0DDo2NuMfMPMMjCiedMis6SYzmZwSdt3HW%2F6He7jBC%2FaKTufSRz2YiRsB3RRlbBENzuWU9F3Skm0FsIPG1yT28%2Bx5flsaEfod8mLOpfzft67r8tq6o32GxyHFl7hCmjAlYQ12zl%2BRHrp6KreLhWybInFI616nbzhR09On%2BWs5Mdxt1Dm73UHiR%2B%2FNLfvNNNmOvPRcmP0%2Bo9EJIp64%2B1i%2FqlAElMftLA3W%2BVQsNifz3mzcXHSE3UcxQDTCpydQFZHU1TRl0v9nrM%2FyC7k60t2nBBt%2FucwmBKmEtDkm0DSF2bgonF3olfzg9CAzNwqxq7sUXr4rHb4wfTv2xRc0zAcxwZ%2BJlp8YNW4f12lYdMZEAP2MFaKe5sKVt63UvRP0WXEUmor00GGUmDV8ndtf68G0v8NyT5eQFPaXC768ndPH4yOnGxdayLmABXIGObAR9hJdi0M%2BI%2BOS8scjMITc08MGOqUBmPlYA8VLdO8lmLZgkDpow2hk1xyIsTN5KB1Pl0ok2zTJJEAqNdHooIqngIX0fCzR9Dbly9aiMnOURNUfVecHitQj8W3p2nx9bdBPAdJ6s6IzkDbnJ53R5JFIYJtfKXgds4LQ7Bu%2FJzPXohOWsvpMQcwDmX9Og8Cnj15f%2BrASkFmMmIZNHggt8fsa08hKj4%2BWYQLg3%2Be6G16wkG%2FVgstIGyy4R6vs&X-Amz-Signature=caea1a1cdcfa18d4c55067b968258058b748c248bd3231c177fbbbb6a2fe6481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUP33QSC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFK9lEID4p0HsqBTRiWU59Xnh%2FcY126WYaPCjU6dxYbCAiEA2KnAE%2F%2B31%2Bc%2FNLLp%2BYbRIppymDcV1v5Bz8lKsqfhNLkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK8Vi9jSWz4woyxgFCrcA%2FEluzXUVobZ12qSo6W62pEUnlYMCMMUiFX6FQnqJXNTiWs%2BviyQEm3vZs74YRWV%2BaA%2BPsK7fJ2ztyunKtOJL7gaxF6IouL9wKCFeTO6zum1l1pC%2Fx%2Fl7huyDElOrtGoVeWTAOtZri9VReodPgNIS3eL%2B7NAroDSxLoze2Qx%2BrncOt%2B0DDo2NuMfMPMMjCiedMis6SYzmZwSdt3HW%2F6He7jBC%2FaKTufSRz2YiRsB3RRlbBENzuWU9F3Skm0FsIPG1yT28%2Bx5flsaEfod8mLOpfzft67r8tq6o32GxyHFl7hCmjAlYQ12zl%2BRHrp6KreLhWybInFI616nbzhR09On%2BWs5Mdxt1Dm73UHiR%2B%2FNLfvNNNmOvPRcmP0%2Bo9EJIp64%2B1i%2FqlAElMftLA3W%2BVQsNifz3mzcXHSE3UcxQDTCpydQFZHU1TRl0v9nrM%2FyC7k60t2nBBt%2FucwmBKmEtDkm0DSF2bgonF3olfzg9CAzNwqxq7sUXr4rHb4wfTv2xRc0zAcxwZ%2BJlp8YNW4f12lYdMZEAP2MFaKe5sKVt63UvRP0WXEUmor00GGUmDV8ndtf68G0v8NyT5eQFPaXC768ndPH4yOnGxdayLmABXIGObAR9hJdi0M%2BI%2BOS8scjMITc08MGOqUBmPlYA8VLdO8lmLZgkDpow2hk1xyIsTN5KB1Pl0ok2zTJJEAqNdHooIqngIX0fCzR9Dbly9aiMnOURNUfVecHitQj8W3p2nx9bdBPAdJ6s6IzkDbnJ53R5JFIYJtfKXgds4LQ7Bu%2FJzPXohOWsvpMQcwDmX9Og8Cnj15f%2BrASkFmMmIZNHggt8fsa08hKj4%2BWYQLg3%2Be6G16wkG%2FVgstIGyy4R6vs&X-Amz-Signature=6f843c1556915c8c14b9223fa2253f3a90e8098ef680b7807aa937cdff125e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUP33QSC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFK9lEID4p0HsqBTRiWU59Xnh%2FcY126WYaPCjU6dxYbCAiEA2KnAE%2F%2B31%2Bc%2FNLLp%2BYbRIppymDcV1v5Bz8lKsqfhNLkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK8Vi9jSWz4woyxgFCrcA%2FEluzXUVobZ12qSo6W62pEUnlYMCMMUiFX6FQnqJXNTiWs%2BviyQEm3vZs74YRWV%2BaA%2BPsK7fJ2ztyunKtOJL7gaxF6IouL9wKCFeTO6zum1l1pC%2Fx%2Fl7huyDElOrtGoVeWTAOtZri9VReodPgNIS3eL%2B7NAroDSxLoze2Qx%2BrncOt%2B0DDo2NuMfMPMMjCiedMis6SYzmZwSdt3HW%2F6He7jBC%2FaKTufSRz2YiRsB3RRlbBENzuWU9F3Skm0FsIPG1yT28%2Bx5flsaEfod8mLOpfzft67r8tq6o32GxyHFl7hCmjAlYQ12zl%2BRHrp6KreLhWybInFI616nbzhR09On%2BWs5Mdxt1Dm73UHiR%2B%2FNLfvNNNmOvPRcmP0%2Bo9EJIp64%2B1i%2FqlAElMftLA3W%2BVQsNifz3mzcXHSE3UcxQDTCpydQFZHU1TRl0v9nrM%2FyC7k60t2nBBt%2FucwmBKmEtDkm0DSF2bgonF3olfzg9CAzNwqxq7sUXr4rHb4wfTv2xRc0zAcxwZ%2BJlp8YNW4f12lYdMZEAP2MFaKe5sKVt63UvRP0WXEUmor00GGUmDV8ndtf68G0v8NyT5eQFPaXC768ndPH4yOnGxdayLmABXIGObAR9hJdi0M%2BI%2BOS8scjMITc08MGOqUBmPlYA8VLdO8lmLZgkDpow2hk1xyIsTN5KB1Pl0ok2zTJJEAqNdHooIqngIX0fCzR9Dbly9aiMnOURNUfVecHitQj8W3p2nx9bdBPAdJ6s6IzkDbnJ53R5JFIYJtfKXgds4LQ7Bu%2FJzPXohOWsvpMQcwDmX9Og8Cnj15f%2BrASkFmMmIZNHggt8fsa08hKj4%2BWYQLg3%2Be6G16wkG%2FVgstIGyy4R6vs&X-Amz-Signature=e2af2ac9c5bd1136dd472bdc95e68e5ad546be06dd540592feac3b79dd440a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUP33QSC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFK9lEID4p0HsqBTRiWU59Xnh%2FcY126WYaPCjU6dxYbCAiEA2KnAE%2F%2B31%2Bc%2FNLLp%2BYbRIppymDcV1v5Bz8lKsqfhNLkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK8Vi9jSWz4woyxgFCrcA%2FEluzXUVobZ12qSo6W62pEUnlYMCMMUiFX6FQnqJXNTiWs%2BviyQEm3vZs74YRWV%2BaA%2BPsK7fJ2ztyunKtOJL7gaxF6IouL9wKCFeTO6zum1l1pC%2Fx%2Fl7huyDElOrtGoVeWTAOtZri9VReodPgNIS3eL%2B7NAroDSxLoze2Qx%2BrncOt%2B0DDo2NuMfMPMMjCiedMis6SYzmZwSdt3HW%2F6He7jBC%2FaKTufSRz2YiRsB3RRlbBENzuWU9F3Skm0FsIPG1yT28%2Bx5flsaEfod8mLOpfzft67r8tq6o32GxyHFl7hCmjAlYQ12zl%2BRHrp6KreLhWybInFI616nbzhR09On%2BWs5Mdxt1Dm73UHiR%2B%2FNLfvNNNmOvPRcmP0%2Bo9EJIp64%2B1i%2FqlAElMftLA3W%2BVQsNifz3mzcXHSE3UcxQDTCpydQFZHU1TRl0v9nrM%2FyC7k60t2nBBt%2FucwmBKmEtDkm0DSF2bgonF3olfzg9CAzNwqxq7sUXr4rHb4wfTv2xRc0zAcxwZ%2BJlp8YNW4f12lYdMZEAP2MFaKe5sKVt63UvRP0WXEUmor00GGUmDV8ndtf68G0v8NyT5eQFPaXC768ndPH4yOnGxdayLmABXIGObAR9hJdi0M%2BI%2BOS8scjMITc08MGOqUBmPlYA8VLdO8lmLZgkDpow2hk1xyIsTN5KB1Pl0ok2zTJJEAqNdHooIqngIX0fCzR9Dbly9aiMnOURNUfVecHitQj8W3p2nx9bdBPAdJ6s6IzkDbnJ53R5JFIYJtfKXgds4LQ7Bu%2FJzPXohOWsvpMQcwDmX9Og8Cnj15f%2BrASkFmMmIZNHggt8fsa08hKj4%2BWYQLg3%2Be6G16wkG%2FVgstIGyy4R6vs&X-Amz-Signature=34be3510af8597846715bb304411d260c4edd7b24f51a1ec5a9ba7b8abee8b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUP33QSC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFK9lEID4p0HsqBTRiWU59Xnh%2FcY126WYaPCjU6dxYbCAiEA2KnAE%2F%2B31%2Bc%2FNLLp%2BYbRIppymDcV1v5Bz8lKsqfhNLkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK8Vi9jSWz4woyxgFCrcA%2FEluzXUVobZ12qSo6W62pEUnlYMCMMUiFX6FQnqJXNTiWs%2BviyQEm3vZs74YRWV%2BaA%2BPsK7fJ2ztyunKtOJL7gaxF6IouL9wKCFeTO6zum1l1pC%2Fx%2Fl7huyDElOrtGoVeWTAOtZri9VReodPgNIS3eL%2B7NAroDSxLoze2Qx%2BrncOt%2B0DDo2NuMfMPMMjCiedMis6SYzmZwSdt3HW%2F6He7jBC%2FaKTufSRz2YiRsB3RRlbBENzuWU9F3Skm0FsIPG1yT28%2Bx5flsaEfod8mLOpfzft67r8tq6o32GxyHFl7hCmjAlYQ12zl%2BRHrp6KreLhWybInFI616nbzhR09On%2BWs5Mdxt1Dm73UHiR%2B%2FNLfvNNNmOvPRcmP0%2Bo9EJIp64%2B1i%2FqlAElMftLA3W%2BVQsNifz3mzcXHSE3UcxQDTCpydQFZHU1TRl0v9nrM%2FyC7k60t2nBBt%2FucwmBKmEtDkm0DSF2bgonF3olfzg9CAzNwqxq7sUXr4rHb4wfTv2xRc0zAcxwZ%2BJlp8YNW4f12lYdMZEAP2MFaKe5sKVt63UvRP0WXEUmor00GGUmDV8ndtf68G0v8NyT5eQFPaXC768ndPH4yOnGxdayLmABXIGObAR9hJdi0M%2BI%2BOS8scjMITc08MGOqUBmPlYA8VLdO8lmLZgkDpow2hk1xyIsTN5KB1Pl0ok2zTJJEAqNdHooIqngIX0fCzR9Dbly9aiMnOURNUfVecHitQj8W3p2nx9bdBPAdJ6s6IzkDbnJ53R5JFIYJtfKXgds4LQ7Bu%2FJzPXohOWsvpMQcwDmX9Og8Cnj15f%2BrASkFmMmIZNHggt8fsa08hKj4%2BWYQLg3%2Be6G16wkG%2FVgstIGyy4R6vs&X-Amz-Signature=99ae4030d1070a735a87de66b400543ad3609413c15c51f8c3621b41a1dacfb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUP33QSC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFK9lEID4p0HsqBTRiWU59Xnh%2FcY126WYaPCjU6dxYbCAiEA2KnAE%2F%2B31%2Bc%2FNLLp%2BYbRIppymDcV1v5Bz8lKsqfhNLkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK8Vi9jSWz4woyxgFCrcA%2FEluzXUVobZ12qSo6W62pEUnlYMCMMUiFX6FQnqJXNTiWs%2BviyQEm3vZs74YRWV%2BaA%2BPsK7fJ2ztyunKtOJL7gaxF6IouL9wKCFeTO6zum1l1pC%2Fx%2Fl7huyDElOrtGoVeWTAOtZri9VReodPgNIS3eL%2B7NAroDSxLoze2Qx%2BrncOt%2B0DDo2NuMfMPMMjCiedMis6SYzmZwSdt3HW%2F6He7jBC%2FaKTufSRz2YiRsB3RRlbBENzuWU9F3Skm0FsIPG1yT28%2Bx5flsaEfod8mLOpfzft67r8tq6o32GxyHFl7hCmjAlYQ12zl%2BRHrp6KreLhWybInFI616nbzhR09On%2BWs5Mdxt1Dm73UHiR%2B%2FNLfvNNNmOvPRcmP0%2Bo9EJIp64%2B1i%2FqlAElMftLA3W%2BVQsNifz3mzcXHSE3UcxQDTCpydQFZHU1TRl0v9nrM%2FyC7k60t2nBBt%2FucwmBKmEtDkm0DSF2bgonF3olfzg9CAzNwqxq7sUXr4rHb4wfTv2xRc0zAcxwZ%2BJlp8YNW4f12lYdMZEAP2MFaKe5sKVt63UvRP0WXEUmor00GGUmDV8ndtf68G0v8NyT5eQFPaXC768ndPH4yOnGxdayLmABXIGObAR9hJdi0M%2BI%2BOS8scjMITc08MGOqUBmPlYA8VLdO8lmLZgkDpow2hk1xyIsTN5KB1Pl0ok2zTJJEAqNdHooIqngIX0fCzR9Dbly9aiMnOURNUfVecHitQj8W3p2nx9bdBPAdJ6s6IzkDbnJ53R5JFIYJtfKXgds4LQ7Bu%2FJzPXohOWsvpMQcwDmX9Og8Cnj15f%2BrASkFmMmIZNHggt8fsa08hKj4%2BWYQLg3%2Be6G16wkG%2FVgstIGyy4R6vs&X-Amz-Signature=7b08f284720cb82ac7cb1cecd8428aa81f14f768def7ea8bf44361f64f2f46d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
