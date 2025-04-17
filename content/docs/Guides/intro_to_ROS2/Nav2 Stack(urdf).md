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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYCJBCI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIGLZkWQ5%2BMk8gVCFgnvOep5F%2B5ylG1%2BhcPfwJilyXLAiEAt%2BdoBQCf9cBt3T%2Bp2eGucYCH1vR2nWUa0EUYXvWk1%2FUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDD1OiR40mjJUb%2Ft%2FzircAxtWZuoe%2FcB91gef6f0lzvc5%2FtJKJwBmLDz2pD%2BhjT1%2BwkvYfrbj%2BuCLwgm2vTqdp%2FwIll3nNCvFooWfww9UQIUokunikHI7wa4uqSFuaZzOJniSSS%2FPyu75EPXH8c2eo8Ni1BtOYq%2FZHom19o1cGcSUMKlYocWdlikT8YBWZHxb7zg1OYyDwebD4J8%2BiV8MNwR%2BQoUr7y%2FUbsBSBEAt7Scrhf87%2F5YfFQq4YewQIoH7h020oDaCttiGsqkpJo3KLWPja3eHHmoTKQMRvNnrSnb1VdcHjCMtpRUF3Hmh0dRkylmzfrJZP8dtPKGqVWxbt5aXRBaoP3rvoCvhN0Ippu0Cz%2B5rMuMsvqHAyWplo%2BW5Q2bILnu7Q9SjIEhGt5kK30%2Bg8VRt8Urlj5XD9yvxYEUyER57ofuz2f%2FvG5Ziop1Dq4KhWfdPyeyZqkOD%2FmtyPqNXKEgiCfWE7Ge1A7ylJQGFiLw8sZ5%2FAolpgxC1BuIuc5GdB8nXxLxzBqY5TcvEIHxuIoSqt%2FSpZpN3IPQwKAzRAvI2LQVzkCRC3WBrLI4XwUJvesK1ZWoFtApLjf2LiW77m99EtRhvreYYY2F%2By1tqYLCUNTj1yQ9DdNRmBiqOzN0ixEupOy0fLTLRMNCbhcAGOqUB5%2FPuRDMHiks3ycjk%2Bfm3If70VSstrxYS5P2UU44gSMaE1%2FnU7yanPHOU1goF%2FyFn41oixijmGmAvymNnYGkJnkJ32k87GbrDDRBf1YtSgkIqI3gHBm8haEbWtlSNJa%2FkvRwIfuD2sjOmhPFd6JXNBMZ%2FOteJ1fd%2BtYRogJ4c3rsdeisvoo1lYWhh6GEvQ%2BI%2F20rvhqRtPc89PoqMSRpj42OC6iLW&X-Amz-Signature=ca1cb97a03eb04e508955bc98a6f17f094b0cad0c252e1a768f93ac965458f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYCJBCI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIGLZkWQ5%2BMk8gVCFgnvOep5F%2B5ylG1%2BhcPfwJilyXLAiEAt%2BdoBQCf9cBt3T%2Bp2eGucYCH1vR2nWUa0EUYXvWk1%2FUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDD1OiR40mjJUb%2Ft%2FzircAxtWZuoe%2FcB91gef6f0lzvc5%2FtJKJwBmLDz2pD%2BhjT1%2BwkvYfrbj%2BuCLwgm2vTqdp%2FwIll3nNCvFooWfww9UQIUokunikHI7wa4uqSFuaZzOJniSSS%2FPyu75EPXH8c2eo8Ni1BtOYq%2FZHom19o1cGcSUMKlYocWdlikT8YBWZHxb7zg1OYyDwebD4J8%2BiV8MNwR%2BQoUr7y%2FUbsBSBEAt7Scrhf87%2F5YfFQq4YewQIoH7h020oDaCttiGsqkpJo3KLWPja3eHHmoTKQMRvNnrSnb1VdcHjCMtpRUF3Hmh0dRkylmzfrJZP8dtPKGqVWxbt5aXRBaoP3rvoCvhN0Ippu0Cz%2B5rMuMsvqHAyWplo%2BW5Q2bILnu7Q9SjIEhGt5kK30%2Bg8VRt8Urlj5XD9yvxYEUyER57ofuz2f%2FvG5Ziop1Dq4KhWfdPyeyZqkOD%2FmtyPqNXKEgiCfWE7Ge1A7ylJQGFiLw8sZ5%2FAolpgxC1BuIuc5GdB8nXxLxzBqY5TcvEIHxuIoSqt%2FSpZpN3IPQwKAzRAvI2LQVzkCRC3WBrLI4XwUJvesK1ZWoFtApLjf2LiW77m99EtRhvreYYY2F%2By1tqYLCUNTj1yQ9DdNRmBiqOzN0ixEupOy0fLTLRMNCbhcAGOqUB5%2FPuRDMHiks3ycjk%2Bfm3If70VSstrxYS5P2UU44gSMaE1%2FnU7yanPHOU1goF%2FyFn41oixijmGmAvymNnYGkJnkJ32k87GbrDDRBf1YtSgkIqI3gHBm8haEbWtlSNJa%2FkvRwIfuD2sjOmhPFd6JXNBMZ%2FOteJ1fd%2BtYRogJ4c3rsdeisvoo1lYWhh6GEvQ%2BI%2F20rvhqRtPc89PoqMSRpj42OC6iLW&X-Amz-Signature=2a8707472becb23cbd680a45b15ed46b6e8de655fe19e307dadaf0dc45dd3a45&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYCJBCI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIGLZkWQ5%2BMk8gVCFgnvOep5F%2B5ylG1%2BhcPfwJilyXLAiEAt%2BdoBQCf9cBt3T%2Bp2eGucYCH1vR2nWUa0EUYXvWk1%2FUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDD1OiR40mjJUb%2Ft%2FzircAxtWZuoe%2FcB91gef6f0lzvc5%2FtJKJwBmLDz2pD%2BhjT1%2BwkvYfrbj%2BuCLwgm2vTqdp%2FwIll3nNCvFooWfww9UQIUokunikHI7wa4uqSFuaZzOJniSSS%2FPyu75EPXH8c2eo8Ni1BtOYq%2FZHom19o1cGcSUMKlYocWdlikT8YBWZHxb7zg1OYyDwebD4J8%2BiV8MNwR%2BQoUr7y%2FUbsBSBEAt7Scrhf87%2F5YfFQq4YewQIoH7h020oDaCttiGsqkpJo3KLWPja3eHHmoTKQMRvNnrSnb1VdcHjCMtpRUF3Hmh0dRkylmzfrJZP8dtPKGqVWxbt5aXRBaoP3rvoCvhN0Ippu0Cz%2B5rMuMsvqHAyWplo%2BW5Q2bILnu7Q9SjIEhGt5kK30%2Bg8VRt8Urlj5XD9yvxYEUyER57ofuz2f%2FvG5Ziop1Dq4KhWfdPyeyZqkOD%2FmtyPqNXKEgiCfWE7Ge1A7ylJQGFiLw8sZ5%2FAolpgxC1BuIuc5GdB8nXxLxzBqY5TcvEIHxuIoSqt%2FSpZpN3IPQwKAzRAvI2LQVzkCRC3WBrLI4XwUJvesK1ZWoFtApLjf2LiW77m99EtRhvreYYY2F%2By1tqYLCUNTj1yQ9DdNRmBiqOzN0ixEupOy0fLTLRMNCbhcAGOqUB5%2FPuRDMHiks3ycjk%2Bfm3If70VSstrxYS5P2UU44gSMaE1%2FnU7yanPHOU1goF%2FyFn41oixijmGmAvymNnYGkJnkJ32k87GbrDDRBf1YtSgkIqI3gHBm8haEbWtlSNJa%2FkvRwIfuD2sjOmhPFd6JXNBMZ%2FOteJ1fd%2BtYRogJ4c3rsdeisvoo1lYWhh6GEvQ%2BI%2F20rvhqRtPc89PoqMSRpj42OC6iLW&X-Amz-Signature=2fb9df686b7b08355c3003236cbf166f9ca88d5fa7a82dca60dae4ad7f9d4423&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYCJBCI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIGLZkWQ5%2BMk8gVCFgnvOep5F%2B5ylG1%2BhcPfwJilyXLAiEAt%2BdoBQCf9cBt3T%2Bp2eGucYCH1vR2nWUa0EUYXvWk1%2FUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDD1OiR40mjJUb%2Ft%2FzircAxtWZuoe%2FcB91gef6f0lzvc5%2FtJKJwBmLDz2pD%2BhjT1%2BwkvYfrbj%2BuCLwgm2vTqdp%2FwIll3nNCvFooWfww9UQIUokunikHI7wa4uqSFuaZzOJniSSS%2FPyu75EPXH8c2eo8Ni1BtOYq%2FZHom19o1cGcSUMKlYocWdlikT8YBWZHxb7zg1OYyDwebD4J8%2BiV8MNwR%2BQoUr7y%2FUbsBSBEAt7Scrhf87%2F5YfFQq4YewQIoH7h020oDaCttiGsqkpJo3KLWPja3eHHmoTKQMRvNnrSnb1VdcHjCMtpRUF3Hmh0dRkylmzfrJZP8dtPKGqVWxbt5aXRBaoP3rvoCvhN0Ippu0Cz%2B5rMuMsvqHAyWplo%2BW5Q2bILnu7Q9SjIEhGt5kK30%2Bg8VRt8Urlj5XD9yvxYEUyER57ofuz2f%2FvG5Ziop1Dq4KhWfdPyeyZqkOD%2FmtyPqNXKEgiCfWE7Ge1A7ylJQGFiLw8sZ5%2FAolpgxC1BuIuc5GdB8nXxLxzBqY5TcvEIHxuIoSqt%2FSpZpN3IPQwKAzRAvI2LQVzkCRC3WBrLI4XwUJvesK1ZWoFtApLjf2LiW77m99EtRhvreYYY2F%2By1tqYLCUNTj1yQ9DdNRmBiqOzN0ixEupOy0fLTLRMNCbhcAGOqUB5%2FPuRDMHiks3ycjk%2Bfm3If70VSstrxYS5P2UU44gSMaE1%2FnU7yanPHOU1goF%2FyFn41oixijmGmAvymNnYGkJnkJ32k87GbrDDRBf1YtSgkIqI3gHBm8haEbWtlSNJa%2FkvRwIfuD2sjOmhPFd6JXNBMZ%2FOteJ1fd%2BtYRogJ4c3rsdeisvoo1lYWhh6GEvQ%2BI%2F20rvhqRtPc89PoqMSRpj42OC6iLW&X-Amz-Signature=cd5c19c9c70a166544d557d6ebfa4b2563ba5f6427cb06e261ba7220dbab02e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYCJBCI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIGLZkWQ5%2BMk8gVCFgnvOep5F%2B5ylG1%2BhcPfwJilyXLAiEAt%2BdoBQCf9cBt3T%2Bp2eGucYCH1vR2nWUa0EUYXvWk1%2FUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDD1OiR40mjJUb%2Ft%2FzircAxtWZuoe%2FcB91gef6f0lzvc5%2FtJKJwBmLDz2pD%2BhjT1%2BwkvYfrbj%2BuCLwgm2vTqdp%2FwIll3nNCvFooWfww9UQIUokunikHI7wa4uqSFuaZzOJniSSS%2FPyu75EPXH8c2eo8Ni1BtOYq%2FZHom19o1cGcSUMKlYocWdlikT8YBWZHxb7zg1OYyDwebD4J8%2BiV8MNwR%2BQoUr7y%2FUbsBSBEAt7Scrhf87%2F5YfFQq4YewQIoH7h020oDaCttiGsqkpJo3KLWPja3eHHmoTKQMRvNnrSnb1VdcHjCMtpRUF3Hmh0dRkylmzfrJZP8dtPKGqVWxbt5aXRBaoP3rvoCvhN0Ippu0Cz%2B5rMuMsvqHAyWplo%2BW5Q2bILnu7Q9SjIEhGt5kK30%2Bg8VRt8Urlj5XD9yvxYEUyER57ofuz2f%2FvG5Ziop1Dq4KhWfdPyeyZqkOD%2FmtyPqNXKEgiCfWE7Ge1A7ylJQGFiLw8sZ5%2FAolpgxC1BuIuc5GdB8nXxLxzBqY5TcvEIHxuIoSqt%2FSpZpN3IPQwKAzRAvI2LQVzkCRC3WBrLI4XwUJvesK1ZWoFtApLjf2LiW77m99EtRhvreYYY2F%2By1tqYLCUNTj1yQ9DdNRmBiqOzN0ixEupOy0fLTLRMNCbhcAGOqUB5%2FPuRDMHiks3ycjk%2Bfm3If70VSstrxYS5P2UU44gSMaE1%2FnU7yanPHOU1goF%2FyFn41oixijmGmAvymNnYGkJnkJ32k87GbrDDRBf1YtSgkIqI3gHBm8haEbWtlSNJa%2FkvRwIfuD2sjOmhPFd6JXNBMZ%2FOteJ1fd%2BtYRogJ4c3rsdeisvoo1lYWhh6GEvQ%2BI%2F20rvhqRtPc89PoqMSRpj42OC6iLW&X-Amz-Signature=84343b7da7a48c5c1ac0361c8f849cc974a36334dc570ac36a5261a04fc006ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYCJBCI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIGLZkWQ5%2BMk8gVCFgnvOep5F%2B5ylG1%2BhcPfwJilyXLAiEAt%2BdoBQCf9cBt3T%2Bp2eGucYCH1vR2nWUa0EUYXvWk1%2FUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDD1OiR40mjJUb%2Ft%2FzircAxtWZuoe%2FcB91gef6f0lzvc5%2FtJKJwBmLDz2pD%2BhjT1%2BwkvYfrbj%2BuCLwgm2vTqdp%2FwIll3nNCvFooWfww9UQIUokunikHI7wa4uqSFuaZzOJniSSS%2FPyu75EPXH8c2eo8Ni1BtOYq%2FZHom19o1cGcSUMKlYocWdlikT8YBWZHxb7zg1OYyDwebD4J8%2BiV8MNwR%2BQoUr7y%2FUbsBSBEAt7Scrhf87%2F5YfFQq4YewQIoH7h020oDaCttiGsqkpJo3KLWPja3eHHmoTKQMRvNnrSnb1VdcHjCMtpRUF3Hmh0dRkylmzfrJZP8dtPKGqVWxbt5aXRBaoP3rvoCvhN0Ippu0Cz%2B5rMuMsvqHAyWplo%2BW5Q2bILnu7Q9SjIEhGt5kK30%2Bg8VRt8Urlj5XD9yvxYEUyER57ofuz2f%2FvG5Ziop1Dq4KhWfdPyeyZqkOD%2FmtyPqNXKEgiCfWE7Ge1A7ylJQGFiLw8sZ5%2FAolpgxC1BuIuc5GdB8nXxLxzBqY5TcvEIHxuIoSqt%2FSpZpN3IPQwKAzRAvI2LQVzkCRC3WBrLI4XwUJvesK1ZWoFtApLjf2LiW77m99EtRhvreYYY2F%2By1tqYLCUNTj1yQ9DdNRmBiqOzN0ixEupOy0fLTLRMNCbhcAGOqUB5%2FPuRDMHiks3ycjk%2Bfm3If70VSstrxYS5P2UU44gSMaE1%2FnU7yanPHOU1goF%2FyFn41oixijmGmAvymNnYGkJnkJ32k87GbrDDRBf1YtSgkIqI3gHBm8haEbWtlSNJa%2FkvRwIfuD2sjOmhPFd6JXNBMZ%2FOteJ1fd%2BtYRogJ4c3rsdeisvoo1lYWhh6GEvQ%2BI%2F20rvhqRtPc89PoqMSRpj42OC6iLW&X-Amz-Signature=f3ddea089c30b0cd6c07acc2efd7498d0193be4c2b8bc0f749a9745bf8f80e8c&X-Amz-SignedHeaders=host&x-id=GetObject)
