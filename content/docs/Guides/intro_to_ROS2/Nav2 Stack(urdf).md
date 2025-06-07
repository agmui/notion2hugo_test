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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCHSKW72%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI2jfgmbzb1%2F%2BSjKEDwnjox73ECD6N3hB%2BHD%2FRr6J0aQIgD0UKu1LfvmRMjPzL7A9JZEBneGenuOpX%2BUQgrkWHAGMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHkBzFVdhBSulUP2iSrcAy6YPH0VTcwpd05a1k6t3xwSOLGaFvQGA2iaQddYej7%2BoL68f2ui0qozorvKjXhjalsSVRSs83Xk6bdN6k1u7ykdGilIRCEToVsEjljDFTzWABlK0F%2FEstjEwMnpb9UNIlrJn9cVI1XVSpsXSJKGBldRrGDuxM12tDldScKvJNVJVh2bHeIodQt7SNcJzMsLN9L9jYNH1khpeAO0lRMvzJvZOGgTH3vdZpDjdjwmcx42r430V7mXA5XFqJvq3mFLgaMcIEYWfqZ517Fk%2BOizDM7ZPaXO1s1EZxeG1lj3eG04NDaGV%2FLb2obXorh3JWfMfHtkHbJnY%2BQe3mU7w5ldijySfo2p7pn%2F%2FXVBClnL9ARKKCUhzP096JMpjMA5KgCvrZdS%2FVbd9eswU%2FIfOOoA2PppbVvkcTCZF9VystiX7jxGKRPGqkDE1sTY66%2BooB4jJgWAy3sxbE68JQvQAkYTMkZ1wNqHoKvFcSk7OVm7%2FWWJz0WeJDalgCAiw90iqlIelQOzjMH8ofuXyaa3oVoPAiOwVi9aKjW2ad1NQh66Y1D59TOt%2FOPiCXOoKOPpYcbOFDw259gDsp21JccVoI%2BLt5Z8Pgq4pR6fCcxW8vEbqhgsiQy%2B462uyUuMcJVxMPeAkcIGOqUByJyZV1x6%2FWch%2Fv7upbSVnyXhEMrnAsLkckCrUX5O3xxrRRALNnlerprIKRXuLhJwJGuGLBZyO%2BkVe93uK5vSBX%2F7KwwOESTWulgKF0hInGdbSilBITTCs%2FlAKeEb2%2FSyR3NeB0MFXx7pxYg7grj50i5%2BnVpcYggZGzhdLxDKPOMmJfUtqbu3v1%2FF7I3eMxZswgcG%2FNHPUNdfue5MO04pGO3IN7Ol&X-Amz-Signature=83214aa289d1ad6fc07359fab4ea42ad8462b5f2c12728ba90b6547fb887bd48&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCHSKW72%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI2jfgmbzb1%2F%2BSjKEDwnjox73ECD6N3hB%2BHD%2FRr6J0aQIgD0UKu1LfvmRMjPzL7A9JZEBneGenuOpX%2BUQgrkWHAGMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHkBzFVdhBSulUP2iSrcAy6YPH0VTcwpd05a1k6t3xwSOLGaFvQGA2iaQddYej7%2BoL68f2ui0qozorvKjXhjalsSVRSs83Xk6bdN6k1u7ykdGilIRCEToVsEjljDFTzWABlK0F%2FEstjEwMnpb9UNIlrJn9cVI1XVSpsXSJKGBldRrGDuxM12tDldScKvJNVJVh2bHeIodQt7SNcJzMsLN9L9jYNH1khpeAO0lRMvzJvZOGgTH3vdZpDjdjwmcx42r430V7mXA5XFqJvq3mFLgaMcIEYWfqZ517Fk%2BOizDM7ZPaXO1s1EZxeG1lj3eG04NDaGV%2FLb2obXorh3JWfMfHtkHbJnY%2BQe3mU7w5ldijySfo2p7pn%2F%2FXVBClnL9ARKKCUhzP096JMpjMA5KgCvrZdS%2FVbd9eswU%2FIfOOoA2PppbVvkcTCZF9VystiX7jxGKRPGqkDE1sTY66%2BooB4jJgWAy3sxbE68JQvQAkYTMkZ1wNqHoKvFcSk7OVm7%2FWWJz0WeJDalgCAiw90iqlIelQOzjMH8ofuXyaa3oVoPAiOwVi9aKjW2ad1NQh66Y1D59TOt%2FOPiCXOoKOPpYcbOFDw259gDsp21JccVoI%2BLt5Z8Pgq4pR6fCcxW8vEbqhgsiQy%2B462uyUuMcJVxMPeAkcIGOqUByJyZV1x6%2FWch%2Fv7upbSVnyXhEMrnAsLkckCrUX5O3xxrRRALNnlerprIKRXuLhJwJGuGLBZyO%2BkVe93uK5vSBX%2F7KwwOESTWulgKF0hInGdbSilBITTCs%2FlAKeEb2%2FSyR3NeB0MFXx7pxYg7grj50i5%2BnVpcYggZGzhdLxDKPOMmJfUtqbu3v1%2FF7I3eMxZswgcG%2FNHPUNdfue5MO04pGO3IN7Ol&X-Amz-Signature=f7e9e549894f012d285eab82b910b7f7dbe20f8e356a9d9456cbf6e0b8c8d387&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCHSKW72%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI2jfgmbzb1%2F%2BSjKEDwnjox73ECD6N3hB%2BHD%2FRr6J0aQIgD0UKu1LfvmRMjPzL7A9JZEBneGenuOpX%2BUQgrkWHAGMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHkBzFVdhBSulUP2iSrcAy6YPH0VTcwpd05a1k6t3xwSOLGaFvQGA2iaQddYej7%2BoL68f2ui0qozorvKjXhjalsSVRSs83Xk6bdN6k1u7ykdGilIRCEToVsEjljDFTzWABlK0F%2FEstjEwMnpb9UNIlrJn9cVI1XVSpsXSJKGBldRrGDuxM12tDldScKvJNVJVh2bHeIodQt7SNcJzMsLN9L9jYNH1khpeAO0lRMvzJvZOGgTH3vdZpDjdjwmcx42r430V7mXA5XFqJvq3mFLgaMcIEYWfqZ517Fk%2BOizDM7ZPaXO1s1EZxeG1lj3eG04NDaGV%2FLb2obXorh3JWfMfHtkHbJnY%2BQe3mU7w5ldijySfo2p7pn%2F%2FXVBClnL9ARKKCUhzP096JMpjMA5KgCvrZdS%2FVbd9eswU%2FIfOOoA2PppbVvkcTCZF9VystiX7jxGKRPGqkDE1sTY66%2BooB4jJgWAy3sxbE68JQvQAkYTMkZ1wNqHoKvFcSk7OVm7%2FWWJz0WeJDalgCAiw90iqlIelQOzjMH8ofuXyaa3oVoPAiOwVi9aKjW2ad1NQh66Y1D59TOt%2FOPiCXOoKOPpYcbOFDw259gDsp21JccVoI%2BLt5Z8Pgq4pR6fCcxW8vEbqhgsiQy%2B462uyUuMcJVxMPeAkcIGOqUByJyZV1x6%2FWch%2Fv7upbSVnyXhEMrnAsLkckCrUX5O3xxrRRALNnlerprIKRXuLhJwJGuGLBZyO%2BkVe93uK5vSBX%2F7KwwOESTWulgKF0hInGdbSilBITTCs%2FlAKeEb2%2FSyR3NeB0MFXx7pxYg7grj50i5%2BnVpcYggZGzhdLxDKPOMmJfUtqbu3v1%2FF7I3eMxZswgcG%2FNHPUNdfue5MO04pGO3IN7Ol&X-Amz-Signature=01a05ab38dcae6a0b86759780bab8d45f6ad456f8a15ec60a02ba22b936976a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCHSKW72%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI2jfgmbzb1%2F%2BSjKEDwnjox73ECD6N3hB%2BHD%2FRr6J0aQIgD0UKu1LfvmRMjPzL7A9JZEBneGenuOpX%2BUQgrkWHAGMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHkBzFVdhBSulUP2iSrcAy6YPH0VTcwpd05a1k6t3xwSOLGaFvQGA2iaQddYej7%2BoL68f2ui0qozorvKjXhjalsSVRSs83Xk6bdN6k1u7ykdGilIRCEToVsEjljDFTzWABlK0F%2FEstjEwMnpb9UNIlrJn9cVI1XVSpsXSJKGBldRrGDuxM12tDldScKvJNVJVh2bHeIodQt7SNcJzMsLN9L9jYNH1khpeAO0lRMvzJvZOGgTH3vdZpDjdjwmcx42r430V7mXA5XFqJvq3mFLgaMcIEYWfqZ517Fk%2BOizDM7ZPaXO1s1EZxeG1lj3eG04NDaGV%2FLb2obXorh3JWfMfHtkHbJnY%2BQe3mU7w5ldijySfo2p7pn%2F%2FXVBClnL9ARKKCUhzP096JMpjMA5KgCvrZdS%2FVbd9eswU%2FIfOOoA2PppbVvkcTCZF9VystiX7jxGKRPGqkDE1sTY66%2BooB4jJgWAy3sxbE68JQvQAkYTMkZ1wNqHoKvFcSk7OVm7%2FWWJz0WeJDalgCAiw90iqlIelQOzjMH8ofuXyaa3oVoPAiOwVi9aKjW2ad1NQh66Y1D59TOt%2FOPiCXOoKOPpYcbOFDw259gDsp21JccVoI%2BLt5Z8Pgq4pR6fCcxW8vEbqhgsiQy%2B462uyUuMcJVxMPeAkcIGOqUByJyZV1x6%2FWch%2Fv7upbSVnyXhEMrnAsLkckCrUX5O3xxrRRALNnlerprIKRXuLhJwJGuGLBZyO%2BkVe93uK5vSBX%2F7KwwOESTWulgKF0hInGdbSilBITTCs%2FlAKeEb2%2FSyR3NeB0MFXx7pxYg7grj50i5%2BnVpcYggZGzhdLxDKPOMmJfUtqbu3v1%2FF7I3eMxZswgcG%2FNHPUNdfue5MO04pGO3IN7Ol&X-Amz-Signature=1a289587f68b2ae2a240b2a5df18be87bf799813a0d02a091cb1df87b1f77aab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCHSKW72%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI2jfgmbzb1%2F%2BSjKEDwnjox73ECD6N3hB%2BHD%2FRr6J0aQIgD0UKu1LfvmRMjPzL7A9JZEBneGenuOpX%2BUQgrkWHAGMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHkBzFVdhBSulUP2iSrcAy6YPH0VTcwpd05a1k6t3xwSOLGaFvQGA2iaQddYej7%2BoL68f2ui0qozorvKjXhjalsSVRSs83Xk6bdN6k1u7ykdGilIRCEToVsEjljDFTzWABlK0F%2FEstjEwMnpb9UNIlrJn9cVI1XVSpsXSJKGBldRrGDuxM12tDldScKvJNVJVh2bHeIodQt7SNcJzMsLN9L9jYNH1khpeAO0lRMvzJvZOGgTH3vdZpDjdjwmcx42r430V7mXA5XFqJvq3mFLgaMcIEYWfqZ517Fk%2BOizDM7ZPaXO1s1EZxeG1lj3eG04NDaGV%2FLb2obXorh3JWfMfHtkHbJnY%2BQe3mU7w5ldijySfo2p7pn%2F%2FXVBClnL9ARKKCUhzP096JMpjMA5KgCvrZdS%2FVbd9eswU%2FIfOOoA2PppbVvkcTCZF9VystiX7jxGKRPGqkDE1sTY66%2BooB4jJgWAy3sxbE68JQvQAkYTMkZ1wNqHoKvFcSk7OVm7%2FWWJz0WeJDalgCAiw90iqlIelQOzjMH8ofuXyaa3oVoPAiOwVi9aKjW2ad1NQh66Y1D59TOt%2FOPiCXOoKOPpYcbOFDw259gDsp21JccVoI%2BLt5Z8Pgq4pR6fCcxW8vEbqhgsiQy%2B462uyUuMcJVxMPeAkcIGOqUByJyZV1x6%2FWch%2Fv7upbSVnyXhEMrnAsLkckCrUX5O3xxrRRALNnlerprIKRXuLhJwJGuGLBZyO%2BkVe93uK5vSBX%2F7KwwOESTWulgKF0hInGdbSilBITTCs%2FlAKeEb2%2FSyR3NeB0MFXx7pxYg7grj50i5%2BnVpcYggZGzhdLxDKPOMmJfUtqbu3v1%2FF7I3eMxZswgcG%2FNHPUNdfue5MO04pGO3IN7Ol&X-Amz-Signature=de67b0ea953b4781704ad389b5d4e389769f8e784ae09d0e5f03611726a4a4cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCHSKW72%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI2jfgmbzb1%2F%2BSjKEDwnjox73ECD6N3hB%2BHD%2FRr6J0aQIgD0UKu1LfvmRMjPzL7A9JZEBneGenuOpX%2BUQgrkWHAGMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHkBzFVdhBSulUP2iSrcAy6YPH0VTcwpd05a1k6t3xwSOLGaFvQGA2iaQddYej7%2BoL68f2ui0qozorvKjXhjalsSVRSs83Xk6bdN6k1u7ykdGilIRCEToVsEjljDFTzWABlK0F%2FEstjEwMnpb9UNIlrJn9cVI1XVSpsXSJKGBldRrGDuxM12tDldScKvJNVJVh2bHeIodQt7SNcJzMsLN9L9jYNH1khpeAO0lRMvzJvZOGgTH3vdZpDjdjwmcx42r430V7mXA5XFqJvq3mFLgaMcIEYWfqZ517Fk%2BOizDM7ZPaXO1s1EZxeG1lj3eG04NDaGV%2FLb2obXorh3JWfMfHtkHbJnY%2BQe3mU7w5ldijySfo2p7pn%2F%2FXVBClnL9ARKKCUhzP096JMpjMA5KgCvrZdS%2FVbd9eswU%2FIfOOoA2PppbVvkcTCZF9VystiX7jxGKRPGqkDE1sTY66%2BooB4jJgWAy3sxbE68JQvQAkYTMkZ1wNqHoKvFcSk7OVm7%2FWWJz0WeJDalgCAiw90iqlIelQOzjMH8ofuXyaa3oVoPAiOwVi9aKjW2ad1NQh66Y1D59TOt%2FOPiCXOoKOPpYcbOFDw259gDsp21JccVoI%2BLt5Z8Pgq4pR6fCcxW8vEbqhgsiQy%2B462uyUuMcJVxMPeAkcIGOqUByJyZV1x6%2FWch%2Fv7upbSVnyXhEMrnAsLkckCrUX5O3xxrRRALNnlerprIKRXuLhJwJGuGLBZyO%2BkVe93uK5vSBX%2F7KwwOESTWulgKF0hInGdbSilBITTCs%2FlAKeEb2%2FSyR3NeB0MFXx7pxYg7grj50i5%2BnVpcYggZGzhdLxDKPOMmJfUtqbu3v1%2FF7I3eMxZswgcG%2FNHPUNdfue5MO04pGO3IN7Ol&X-Amz-Signature=b44a1f21cfcde01a0814c490ec5d39a384ae0d07a3e9399dd9d529f2942fa2f5&X-Amz-SignedHeaders=host&x-id=GetObject)
