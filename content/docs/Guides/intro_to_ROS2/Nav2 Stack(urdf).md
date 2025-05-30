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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TASPE5ZH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZxw9By6ZysoZZCXPlSH9XeHb8jlHnpySgM8guEtIr3AiBjhmFM1chTuVKRXtWX3LmvbxBcaPXwdGkydtYV%2FftQFCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtDjOrlwcrbo%2BH8IcKtwDjAi4JMUc6XVVLzN0EpdDfXgmkDZJsOz0coWmY2EsVoVKuqCn3scFMeADvPJCZGfHdgcRqevcSBdP55qly0LbOwd2HTNAgrM%2F7qbjlMC09XWF6D0TvBL10gqruG5b4LsHSaHIBrRIQeX7NKmSqtlxqiYADX%2FnxrglXwIPZiyaJuPOqzZvVEIWITIlpMehUGNIBCtiOPsCP8HDMApRn3WaRA%2FAnB68rTW9d%2Fc1nupYjVcTxBEB18GIDDQ%2FUYeGAfQ21FxY6iWNcCli1NFYJyrAslgSHYTRnK%2FB4sYbE1cd2bx9VGzr0A2HeNTEfiXio8L74nVGb%2BWYg3uneOo0lBePxshu%2FmO6mJlSPB%2BbzNRi9DlTfcFZZdlAKsydILh49vPqZB43RdN46GInEckGZHDTw2vBuYkMRNbFJqjkmiS4cTk3yxpgFD0zt3T4F68kGjO7godjUF%2F0cQTi2sWKFiNH%2FPO%2BWDp8AouULXGvNqTiuwDep37QMG2OQQhotxNrfdqPiP1Hhy3EVT2x4Fcnvzlxels21sVCzclrOY%2B04vqwWDXEPKOaaibixP%2BfEn4DepSipppCs1hgWmIDgtmgflG%2Fokf7b2GlL1chSPGDIUsJSDPzYhWnK9KYRjkG1UMw5NXnwQY6pgEPxNngsN7PA%2Fi3TfUrB4B2zWkbuLCXKJeeiq63mGy5YiT%2F7xkcd93YccHtUiu0SJoo1x%2FaN%2FWZSMWb6jymeqi%2BmEXSqoIpcPxSS%2FrIK583SP8z%2F0uuc2n1OJV7bxHjZKQOWa%2Bt6xiOk8aZ5gkOHAZ7tmsWXAKOJErGMaQCoepKorsgx16dhK53YqtDuD%2F6R%2BXYgUhi%2FaFfRA4%2BrQDqRPgYGuNCIZqo&X-Amz-Signature=b0acd006cbf3a2e007afd6b3407afc8a845602b80fd9e02efe5bbb12489c1b78&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TASPE5ZH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZxw9By6ZysoZZCXPlSH9XeHb8jlHnpySgM8guEtIr3AiBjhmFM1chTuVKRXtWX3LmvbxBcaPXwdGkydtYV%2FftQFCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtDjOrlwcrbo%2BH8IcKtwDjAi4JMUc6XVVLzN0EpdDfXgmkDZJsOz0coWmY2EsVoVKuqCn3scFMeADvPJCZGfHdgcRqevcSBdP55qly0LbOwd2HTNAgrM%2F7qbjlMC09XWF6D0TvBL10gqruG5b4LsHSaHIBrRIQeX7NKmSqtlxqiYADX%2FnxrglXwIPZiyaJuPOqzZvVEIWITIlpMehUGNIBCtiOPsCP8HDMApRn3WaRA%2FAnB68rTW9d%2Fc1nupYjVcTxBEB18GIDDQ%2FUYeGAfQ21FxY6iWNcCli1NFYJyrAslgSHYTRnK%2FB4sYbE1cd2bx9VGzr0A2HeNTEfiXio8L74nVGb%2BWYg3uneOo0lBePxshu%2FmO6mJlSPB%2BbzNRi9DlTfcFZZdlAKsydILh49vPqZB43RdN46GInEckGZHDTw2vBuYkMRNbFJqjkmiS4cTk3yxpgFD0zt3T4F68kGjO7godjUF%2F0cQTi2sWKFiNH%2FPO%2BWDp8AouULXGvNqTiuwDep37QMG2OQQhotxNrfdqPiP1Hhy3EVT2x4Fcnvzlxels21sVCzclrOY%2B04vqwWDXEPKOaaibixP%2BfEn4DepSipppCs1hgWmIDgtmgflG%2Fokf7b2GlL1chSPGDIUsJSDPzYhWnK9KYRjkG1UMw5NXnwQY6pgEPxNngsN7PA%2Fi3TfUrB4B2zWkbuLCXKJeeiq63mGy5YiT%2F7xkcd93YccHtUiu0SJoo1x%2FaN%2FWZSMWb6jymeqi%2BmEXSqoIpcPxSS%2FrIK583SP8z%2F0uuc2n1OJV7bxHjZKQOWa%2Bt6xiOk8aZ5gkOHAZ7tmsWXAKOJErGMaQCoepKorsgx16dhK53YqtDuD%2F6R%2BXYgUhi%2FaFfRA4%2BrQDqRPgYGuNCIZqo&X-Amz-Signature=7959324c9d6baac3569594800d562496abea0845554a44fe947c0330b861b881&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TASPE5ZH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZxw9By6ZysoZZCXPlSH9XeHb8jlHnpySgM8guEtIr3AiBjhmFM1chTuVKRXtWX3LmvbxBcaPXwdGkydtYV%2FftQFCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtDjOrlwcrbo%2BH8IcKtwDjAi4JMUc6XVVLzN0EpdDfXgmkDZJsOz0coWmY2EsVoVKuqCn3scFMeADvPJCZGfHdgcRqevcSBdP55qly0LbOwd2HTNAgrM%2F7qbjlMC09XWF6D0TvBL10gqruG5b4LsHSaHIBrRIQeX7NKmSqtlxqiYADX%2FnxrglXwIPZiyaJuPOqzZvVEIWITIlpMehUGNIBCtiOPsCP8HDMApRn3WaRA%2FAnB68rTW9d%2Fc1nupYjVcTxBEB18GIDDQ%2FUYeGAfQ21FxY6iWNcCli1NFYJyrAslgSHYTRnK%2FB4sYbE1cd2bx9VGzr0A2HeNTEfiXio8L74nVGb%2BWYg3uneOo0lBePxshu%2FmO6mJlSPB%2BbzNRi9DlTfcFZZdlAKsydILh49vPqZB43RdN46GInEckGZHDTw2vBuYkMRNbFJqjkmiS4cTk3yxpgFD0zt3T4F68kGjO7godjUF%2F0cQTi2sWKFiNH%2FPO%2BWDp8AouULXGvNqTiuwDep37QMG2OQQhotxNrfdqPiP1Hhy3EVT2x4Fcnvzlxels21sVCzclrOY%2B04vqwWDXEPKOaaibixP%2BfEn4DepSipppCs1hgWmIDgtmgflG%2Fokf7b2GlL1chSPGDIUsJSDPzYhWnK9KYRjkG1UMw5NXnwQY6pgEPxNngsN7PA%2Fi3TfUrB4B2zWkbuLCXKJeeiq63mGy5YiT%2F7xkcd93YccHtUiu0SJoo1x%2FaN%2FWZSMWb6jymeqi%2BmEXSqoIpcPxSS%2FrIK583SP8z%2F0uuc2n1OJV7bxHjZKQOWa%2Bt6xiOk8aZ5gkOHAZ7tmsWXAKOJErGMaQCoepKorsgx16dhK53YqtDuD%2F6R%2BXYgUhi%2FaFfRA4%2BrQDqRPgYGuNCIZqo&X-Amz-Signature=885864f4af7bb83cf2be71cace6655360749e47cf95177590444cfa8cf4785ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TASPE5ZH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZxw9By6ZysoZZCXPlSH9XeHb8jlHnpySgM8guEtIr3AiBjhmFM1chTuVKRXtWX3LmvbxBcaPXwdGkydtYV%2FftQFCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtDjOrlwcrbo%2BH8IcKtwDjAi4JMUc6XVVLzN0EpdDfXgmkDZJsOz0coWmY2EsVoVKuqCn3scFMeADvPJCZGfHdgcRqevcSBdP55qly0LbOwd2HTNAgrM%2F7qbjlMC09XWF6D0TvBL10gqruG5b4LsHSaHIBrRIQeX7NKmSqtlxqiYADX%2FnxrglXwIPZiyaJuPOqzZvVEIWITIlpMehUGNIBCtiOPsCP8HDMApRn3WaRA%2FAnB68rTW9d%2Fc1nupYjVcTxBEB18GIDDQ%2FUYeGAfQ21FxY6iWNcCli1NFYJyrAslgSHYTRnK%2FB4sYbE1cd2bx9VGzr0A2HeNTEfiXio8L74nVGb%2BWYg3uneOo0lBePxshu%2FmO6mJlSPB%2BbzNRi9DlTfcFZZdlAKsydILh49vPqZB43RdN46GInEckGZHDTw2vBuYkMRNbFJqjkmiS4cTk3yxpgFD0zt3T4F68kGjO7godjUF%2F0cQTi2sWKFiNH%2FPO%2BWDp8AouULXGvNqTiuwDep37QMG2OQQhotxNrfdqPiP1Hhy3EVT2x4Fcnvzlxels21sVCzclrOY%2B04vqwWDXEPKOaaibixP%2BfEn4DepSipppCs1hgWmIDgtmgflG%2Fokf7b2GlL1chSPGDIUsJSDPzYhWnK9KYRjkG1UMw5NXnwQY6pgEPxNngsN7PA%2Fi3TfUrB4B2zWkbuLCXKJeeiq63mGy5YiT%2F7xkcd93YccHtUiu0SJoo1x%2FaN%2FWZSMWb6jymeqi%2BmEXSqoIpcPxSS%2FrIK583SP8z%2F0uuc2n1OJV7bxHjZKQOWa%2Bt6xiOk8aZ5gkOHAZ7tmsWXAKOJErGMaQCoepKorsgx16dhK53YqtDuD%2F6R%2BXYgUhi%2FaFfRA4%2BrQDqRPgYGuNCIZqo&X-Amz-Signature=38e1fdef6592e046580d593c5c80c703a9f924fa1ff149c9e3f154f1b4ca3666&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TASPE5ZH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZxw9By6ZysoZZCXPlSH9XeHb8jlHnpySgM8guEtIr3AiBjhmFM1chTuVKRXtWX3LmvbxBcaPXwdGkydtYV%2FftQFCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtDjOrlwcrbo%2BH8IcKtwDjAi4JMUc6XVVLzN0EpdDfXgmkDZJsOz0coWmY2EsVoVKuqCn3scFMeADvPJCZGfHdgcRqevcSBdP55qly0LbOwd2HTNAgrM%2F7qbjlMC09XWF6D0TvBL10gqruG5b4LsHSaHIBrRIQeX7NKmSqtlxqiYADX%2FnxrglXwIPZiyaJuPOqzZvVEIWITIlpMehUGNIBCtiOPsCP8HDMApRn3WaRA%2FAnB68rTW9d%2Fc1nupYjVcTxBEB18GIDDQ%2FUYeGAfQ21FxY6iWNcCli1NFYJyrAslgSHYTRnK%2FB4sYbE1cd2bx9VGzr0A2HeNTEfiXio8L74nVGb%2BWYg3uneOo0lBePxshu%2FmO6mJlSPB%2BbzNRi9DlTfcFZZdlAKsydILh49vPqZB43RdN46GInEckGZHDTw2vBuYkMRNbFJqjkmiS4cTk3yxpgFD0zt3T4F68kGjO7godjUF%2F0cQTi2sWKFiNH%2FPO%2BWDp8AouULXGvNqTiuwDep37QMG2OQQhotxNrfdqPiP1Hhy3EVT2x4Fcnvzlxels21sVCzclrOY%2B04vqwWDXEPKOaaibixP%2BfEn4DepSipppCs1hgWmIDgtmgflG%2Fokf7b2GlL1chSPGDIUsJSDPzYhWnK9KYRjkG1UMw5NXnwQY6pgEPxNngsN7PA%2Fi3TfUrB4B2zWkbuLCXKJeeiq63mGy5YiT%2F7xkcd93YccHtUiu0SJoo1x%2FaN%2FWZSMWb6jymeqi%2BmEXSqoIpcPxSS%2FrIK583SP8z%2F0uuc2n1OJV7bxHjZKQOWa%2Bt6xiOk8aZ5gkOHAZ7tmsWXAKOJErGMaQCoepKorsgx16dhK53YqtDuD%2F6R%2BXYgUhi%2FaFfRA4%2BrQDqRPgYGuNCIZqo&X-Amz-Signature=811f0e4835a386d3f0f87198da0b80b94b8f3d08af3efc29b8443876b1c64181&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TASPE5ZH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZxw9By6ZysoZZCXPlSH9XeHb8jlHnpySgM8guEtIr3AiBjhmFM1chTuVKRXtWX3LmvbxBcaPXwdGkydtYV%2FftQFCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtDjOrlwcrbo%2BH8IcKtwDjAi4JMUc6XVVLzN0EpdDfXgmkDZJsOz0coWmY2EsVoVKuqCn3scFMeADvPJCZGfHdgcRqevcSBdP55qly0LbOwd2HTNAgrM%2F7qbjlMC09XWF6D0TvBL10gqruG5b4LsHSaHIBrRIQeX7NKmSqtlxqiYADX%2FnxrglXwIPZiyaJuPOqzZvVEIWITIlpMehUGNIBCtiOPsCP8HDMApRn3WaRA%2FAnB68rTW9d%2Fc1nupYjVcTxBEB18GIDDQ%2FUYeGAfQ21FxY6iWNcCli1NFYJyrAslgSHYTRnK%2FB4sYbE1cd2bx9VGzr0A2HeNTEfiXio8L74nVGb%2BWYg3uneOo0lBePxshu%2FmO6mJlSPB%2BbzNRi9DlTfcFZZdlAKsydILh49vPqZB43RdN46GInEckGZHDTw2vBuYkMRNbFJqjkmiS4cTk3yxpgFD0zt3T4F68kGjO7godjUF%2F0cQTi2sWKFiNH%2FPO%2BWDp8AouULXGvNqTiuwDep37QMG2OQQhotxNrfdqPiP1Hhy3EVT2x4Fcnvzlxels21sVCzclrOY%2B04vqwWDXEPKOaaibixP%2BfEn4DepSipppCs1hgWmIDgtmgflG%2Fokf7b2GlL1chSPGDIUsJSDPzYhWnK9KYRjkG1UMw5NXnwQY6pgEPxNngsN7PA%2Fi3TfUrB4B2zWkbuLCXKJeeiq63mGy5YiT%2F7xkcd93YccHtUiu0SJoo1x%2FaN%2FWZSMWb6jymeqi%2BmEXSqoIpcPxSS%2FrIK583SP8z%2F0uuc2n1OJV7bxHjZKQOWa%2Bt6xiOk8aZ5gkOHAZ7tmsWXAKOJErGMaQCoepKorsgx16dhK53YqtDuD%2F6R%2BXYgUhi%2FaFfRA4%2BrQDqRPgYGuNCIZqo&X-Amz-Signature=8017a2ffc0c020a3ff085b97df4dc054ed28014b41b5c7a569748e6597c2e68f&X-Amz-SignedHeaders=host&x-id=GetObject)
