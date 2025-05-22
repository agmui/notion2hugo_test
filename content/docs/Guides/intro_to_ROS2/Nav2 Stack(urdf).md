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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBMF76R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCNfoYSDzAecF5gSoSkFK2qpqXLYB6c58gL6O%2BrEo%2FQXQIgSUJLZe0YX3xvFxTEqEMR32Zyw%2Fp%2BiWfvjtV5CtncfvYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyZJUUAhexykvpc0CrcA16hmscbyUMc0rvBC%2BT3OGlrDs0zu%2FK2HAVorH4BgHVpo9GwBf1h4NPxaKE0XCqdJMBJyYcBqbPHdNteqwnEQstoZa%2B6mHz9buyCyAY1xhaMdkY9fYvjXbHwB1XDLdTPrWsrBEHbFcZlbzkZ8%2FVCLXXsRP4Wehew7s0HwmlxJoVbLyIkhS6CMvvtzqcCmanWYmYCKLu02eFYY4qKApSKf4q2KtmYDu1TnMmVNYi1MGkg9CDx3h9AjFH8R3CCYSyPgTPM5rCynNi54FKIp0IPa2woSwSm8YULAzWbLVwkfnOrB%2BceUh2R6lk%2Fz7cS%2BZ%2FBvJYfxc7AaXGfK469Y4kcV4PV%2FTSKoI5he3mhjf11SSURBc7Vm4EO5%2FDaFE1Nv%2BI1ee8gl%2BgKvaOHsjgt0GOFqWzC%2F6f7RW%2FFjMlbUiSuUuSG2m9BJ8wceRrZnosaSmYb5QCVPUAtQym2bw36873p%2Fq2EQyFBU8tuDA9wQ0cWlM4TpN3Aq0XRcwTAx6ShhsHv4zjNdnYHHBc7NDTltGd%2FKQrW9b25xEgcAPq3T%2BAtapfnNhTYSB9Y7Mf0BPqHnOMNxr3OTtnk8NIOZQVJ1NWoAUDtz%2B2Kcow3j%2FbY3slv3OtLUX98Q6FKaiCn8YpsMI%2F%2BvcEGOqUBYcvYGdKfG1GLU8waONm1M2aIykrzPhZZhI8xeCttkWaOEpuVJygPK%2B7EjqyLXI6CK%2Fw9g9LVl21DLoaQQcNxLoXzvqxlHltZCKFQRN8DnDS6sxtuAsmwJzv%2F5acuAlnF8CvQA5mRfdKbdrh10034OjE13CGP0%2Ft5blmzX4W4hirYvEEVhhubM5qQZXUeoGSxL2MX4XiHzrHnf2LuxOqkvPi7ZpDg&X-Amz-Signature=e440a7dec94932157b20c00d9e8c6991f2ba75c96def1a74734aa3b6cab5fb98&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBMF76R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCNfoYSDzAecF5gSoSkFK2qpqXLYB6c58gL6O%2BrEo%2FQXQIgSUJLZe0YX3xvFxTEqEMR32Zyw%2Fp%2BiWfvjtV5CtncfvYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyZJUUAhexykvpc0CrcA16hmscbyUMc0rvBC%2BT3OGlrDs0zu%2FK2HAVorH4BgHVpo9GwBf1h4NPxaKE0XCqdJMBJyYcBqbPHdNteqwnEQstoZa%2B6mHz9buyCyAY1xhaMdkY9fYvjXbHwB1XDLdTPrWsrBEHbFcZlbzkZ8%2FVCLXXsRP4Wehew7s0HwmlxJoVbLyIkhS6CMvvtzqcCmanWYmYCKLu02eFYY4qKApSKf4q2KtmYDu1TnMmVNYi1MGkg9CDx3h9AjFH8R3CCYSyPgTPM5rCynNi54FKIp0IPa2woSwSm8YULAzWbLVwkfnOrB%2BceUh2R6lk%2Fz7cS%2BZ%2FBvJYfxc7AaXGfK469Y4kcV4PV%2FTSKoI5he3mhjf11SSURBc7Vm4EO5%2FDaFE1Nv%2BI1ee8gl%2BgKvaOHsjgt0GOFqWzC%2F6f7RW%2FFjMlbUiSuUuSG2m9BJ8wceRrZnosaSmYb5QCVPUAtQym2bw36873p%2Fq2EQyFBU8tuDA9wQ0cWlM4TpN3Aq0XRcwTAx6ShhsHv4zjNdnYHHBc7NDTltGd%2FKQrW9b25xEgcAPq3T%2BAtapfnNhTYSB9Y7Mf0BPqHnOMNxr3OTtnk8NIOZQVJ1NWoAUDtz%2B2Kcow3j%2FbY3slv3OtLUX98Q6FKaiCn8YpsMI%2F%2BvcEGOqUBYcvYGdKfG1GLU8waONm1M2aIykrzPhZZhI8xeCttkWaOEpuVJygPK%2B7EjqyLXI6CK%2Fw9g9LVl21DLoaQQcNxLoXzvqxlHltZCKFQRN8DnDS6sxtuAsmwJzv%2F5acuAlnF8CvQA5mRfdKbdrh10034OjE13CGP0%2Ft5blmzX4W4hirYvEEVhhubM5qQZXUeoGSxL2MX4XiHzrHnf2LuxOqkvPi7ZpDg&X-Amz-Signature=333f86de56466a0660b9060c60e5f712c7e8e3a6345483ffa797f2ff1551f838&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBMF76R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCNfoYSDzAecF5gSoSkFK2qpqXLYB6c58gL6O%2BrEo%2FQXQIgSUJLZe0YX3xvFxTEqEMR32Zyw%2Fp%2BiWfvjtV5CtncfvYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyZJUUAhexykvpc0CrcA16hmscbyUMc0rvBC%2BT3OGlrDs0zu%2FK2HAVorH4BgHVpo9GwBf1h4NPxaKE0XCqdJMBJyYcBqbPHdNteqwnEQstoZa%2B6mHz9buyCyAY1xhaMdkY9fYvjXbHwB1XDLdTPrWsrBEHbFcZlbzkZ8%2FVCLXXsRP4Wehew7s0HwmlxJoVbLyIkhS6CMvvtzqcCmanWYmYCKLu02eFYY4qKApSKf4q2KtmYDu1TnMmVNYi1MGkg9CDx3h9AjFH8R3CCYSyPgTPM5rCynNi54FKIp0IPa2woSwSm8YULAzWbLVwkfnOrB%2BceUh2R6lk%2Fz7cS%2BZ%2FBvJYfxc7AaXGfK469Y4kcV4PV%2FTSKoI5he3mhjf11SSURBc7Vm4EO5%2FDaFE1Nv%2BI1ee8gl%2BgKvaOHsjgt0GOFqWzC%2F6f7RW%2FFjMlbUiSuUuSG2m9BJ8wceRrZnosaSmYb5QCVPUAtQym2bw36873p%2Fq2EQyFBU8tuDA9wQ0cWlM4TpN3Aq0XRcwTAx6ShhsHv4zjNdnYHHBc7NDTltGd%2FKQrW9b25xEgcAPq3T%2BAtapfnNhTYSB9Y7Mf0BPqHnOMNxr3OTtnk8NIOZQVJ1NWoAUDtz%2B2Kcow3j%2FbY3slv3OtLUX98Q6FKaiCn8YpsMI%2F%2BvcEGOqUBYcvYGdKfG1GLU8waONm1M2aIykrzPhZZhI8xeCttkWaOEpuVJygPK%2B7EjqyLXI6CK%2Fw9g9LVl21DLoaQQcNxLoXzvqxlHltZCKFQRN8DnDS6sxtuAsmwJzv%2F5acuAlnF8CvQA5mRfdKbdrh10034OjE13CGP0%2Ft5blmzX4W4hirYvEEVhhubM5qQZXUeoGSxL2MX4XiHzrHnf2LuxOqkvPi7ZpDg&X-Amz-Signature=b6b8ec74a1d9d141cbff6e3d932d0fa51dfdec5ea257acde836ff4888cfa8077&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBMF76R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCNfoYSDzAecF5gSoSkFK2qpqXLYB6c58gL6O%2BrEo%2FQXQIgSUJLZe0YX3xvFxTEqEMR32Zyw%2Fp%2BiWfvjtV5CtncfvYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyZJUUAhexykvpc0CrcA16hmscbyUMc0rvBC%2BT3OGlrDs0zu%2FK2HAVorH4BgHVpo9GwBf1h4NPxaKE0XCqdJMBJyYcBqbPHdNteqwnEQstoZa%2B6mHz9buyCyAY1xhaMdkY9fYvjXbHwB1XDLdTPrWsrBEHbFcZlbzkZ8%2FVCLXXsRP4Wehew7s0HwmlxJoVbLyIkhS6CMvvtzqcCmanWYmYCKLu02eFYY4qKApSKf4q2KtmYDu1TnMmVNYi1MGkg9CDx3h9AjFH8R3CCYSyPgTPM5rCynNi54FKIp0IPa2woSwSm8YULAzWbLVwkfnOrB%2BceUh2R6lk%2Fz7cS%2BZ%2FBvJYfxc7AaXGfK469Y4kcV4PV%2FTSKoI5he3mhjf11SSURBc7Vm4EO5%2FDaFE1Nv%2BI1ee8gl%2BgKvaOHsjgt0GOFqWzC%2F6f7RW%2FFjMlbUiSuUuSG2m9BJ8wceRrZnosaSmYb5QCVPUAtQym2bw36873p%2Fq2EQyFBU8tuDA9wQ0cWlM4TpN3Aq0XRcwTAx6ShhsHv4zjNdnYHHBc7NDTltGd%2FKQrW9b25xEgcAPq3T%2BAtapfnNhTYSB9Y7Mf0BPqHnOMNxr3OTtnk8NIOZQVJ1NWoAUDtz%2B2Kcow3j%2FbY3slv3OtLUX98Q6FKaiCn8YpsMI%2F%2BvcEGOqUBYcvYGdKfG1GLU8waONm1M2aIykrzPhZZhI8xeCttkWaOEpuVJygPK%2B7EjqyLXI6CK%2Fw9g9LVl21DLoaQQcNxLoXzvqxlHltZCKFQRN8DnDS6sxtuAsmwJzv%2F5acuAlnF8CvQA5mRfdKbdrh10034OjE13CGP0%2Ft5blmzX4W4hirYvEEVhhubM5qQZXUeoGSxL2MX4XiHzrHnf2LuxOqkvPi7ZpDg&X-Amz-Signature=03c8791b71f0e863d31a0003a21194a510836b4e047a5b138891920004e8adcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBMF76R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCNfoYSDzAecF5gSoSkFK2qpqXLYB6c58gL6O%2BrEo%2FQXQIgSUJLZe0YX3xvFxTEqEMR32Zyw%2Fp%2BiWfvjtV5CtncfvYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyZJUUAhexykvpc0CrcA16hmscbyUMc0rvBC%2BT3OGlrDs0zu%2FK2HAVorH4BgHVpo9GwBf1h4NPxaKE0XCqdJMBJyYcBqbPHdNteqwnEQstoZa%2B6mHz9buyCyAY1xhaMdkY9fYvjXbHwB1XDLdTPrWsrBEHbFcZlbzkZ8%2FVCLXXsRP4Wehew7s0HwmlxJoVbLyIkhS6CMvvtzqcCmanWYmYCKLu02eFYY4qKApSKf4q2KtmYDu1TnMmVNYi1MGkg9CDx3h9AjFH8R3CCYSyPgTPM5rCynNi54FKIp0IPa2woSwSm8YULAzWbLVwkfnOrB%2BceUh2R6lk%2Fz7cS%2BZ%2FBvJYfxc7AaXGfK469Y4kcV4PV%2FTSKoI5he3mhjf11SSURBc7Vm4EO5%2FDaFE1Nv%2BI1ee8gl%2BgKvaOHsjgt0GOFqWzC%2F6f7RW%2FFjMlbUiSuUuSG2m9BJ8wceRrZnosaSmYb5QCVPUAtQym2bw36873p%2Fq2EQyFBU8tuDA9wQ0cWlM4TpN3Aq0XRcwTAx6ShhsHv4zjNdnYHHBc7NDTltGd%2FKQrW9b25xEgcAPq3T%2BAtapfnNhTYSB9Y7Mf0BPqHnOMNxr3OTtnk8NIOZQVJ1NWoAUDtz%2B2Kcow3j%2FbY3slv3OtLUX98Q6FKaiCn8YpsMI%2F%2BvcEGOqUBYcvYGdKfG1GLU8waONm1M2aIykrzPhZZhI8xeCttkWaOEpuVJygPK%2B7EjqyLXI6CK%2Fw9g9LVl21DLoaQQcNxLoXzvqxlHltZCKFQRN8DnDS6sxtuAsmwJzv%2F5acuAlnF8CvQA5mRfdKbdrh10034OjE13CGP0%2Ft5blmzX4W4hirYvEEVhhubM5qQZXUeoGSxL2MX4XiHzrHnf2LuxOqkvPi7ZpDg&X-Amz-Signature=40bfb349303b052a479190c6eefbfd1d35baeb9b0279e6a14ce5d14a8439fe81&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBMF76R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCNfoYSDzAecF5gSoSkFK2qpqXLYB6c58gL6O%2BrEo%2FQXQIgSUJLZe0YX3xvFxTEqEMR32Zyw%2Fp%2BiWfvjtV5CtncfvYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyZJUUAhexykvpc0CrcA16hmscbyUMc0rvBC%2BT3OGlrDs0zu%2FK2HAVorH4BgHVpo9GwBf1h4NPxaKE0XCqdJMBJyYcBqbPHdNteqwnEQstoZa%2B6mHz9buyCyAY1xhaMdkY9fYvjXbHwB1XDLdTPrWsrBEHbFcZlbzkZ8%2FVCLXXsRP4Wehew7s0HwmlxJoVbLyIkhS6CMvvtzqcCmanWYmYCKLu02eFYY4qKApSKf4q2KtmYDu1TnMmVNYi1MGkg9CDx3h9AjFH8R3CCYSyPgTPM5rCynNi54FKIp0IPa2woSwSm8YULAzWbLVwkfnOrB%2BceUh2R6lk%2Fz7cS%2BZ%2FBvJYfxc7AaXGfK469Y4kcV4PV%2FTSKoI5he3mhjf11SSURBc7Vm4EO5%2FDaFE1Nv%2BI1ee8gl%2BgKvaOHsjgt0GOFqWzC%2F6f7RW%2FFjMlbUiSuUuSG2m9BJ8wceRrZnosaSmYb5QCVPUAtQym2bw36873p%2Fq2EQyFBU8tuDA9wQ0cWlM4TpN3Aq0XRcwTAx6ShhsHv4zjNdnYHHBc7NDTltGd%2FKQrW9b25xEgcAPq3T%2BAtapfnNhTYSB9Y7Mf0BPqHnOMNxr3OTtnk8NIOZQVJ1NWoAUDtz%2B2Kcow3j%2FbY3slv3OtLUX98Q6FKaiCn8YpsMI%2F%2BvcEGOqUBYcvYGdKfG1GLU8waONm1M2aIykrzPhZZhI8xeCttkWaOEpuVJygPK%2B7EjqyLXI6CK%2Fw9g9LVl21DLoaQQcNxLoXzvqxlHltZCKFQRN8DnDS6sxtuAsmwJzv%2F5acuAlnF8CvQA5mRfdKbdrh10034OjE13CGP0%2Ft5blmzX4W4hirYvEEVhhubM5qQZXUeoGSxL2MX4XiHzrHnf2LuxOqkvPi7ZpDg&X-Amz-Signature=1c522142e03626247c47e153dfde4f2b61005c1e47eed81a3f07960f04576a09&X-Amz-SignedHeaders=host&x-id=GetObject)
