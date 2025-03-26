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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKRZVE3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnAwyDJHwVQy1HMMS3gBNU15Awjf2JOJGKzr%2FyAsXYAIhALnMKUcbogLAAyMzh4p7OC0UwvvtM2eY4nakrFspes3zKv8DCDcQABoMNjM3NDIzMTgzODA1IgyU%2FrSmsZtMtZRn%2FOwq3AN9tGCx2aB%2BAbqgc%2Bcp7Jpo%2BjnNMvrDD4jwuuwvXOnzNJOAPJWk5aUMvVvCUceFbSuYem1MM8Ea%2FnQ501X6pdQhJWPKnfewEIsyq8x4KoRXWeAeZmD9v7z0eh9jR0DEesAAFe3ffzTl6iqqn%2FgC1AX1tlKFnTkCjI6YmZppaBaMNWcbZC9pa9mjwOoBCe1yAzkvDUJEClATw7RQ5wgIEKYYPWKtSHFEh5cnEvqBLiTEq3yXEamzX%2BtlTiMpxl7jJ8bk1c8nenlE2F0ZUQTCzyFVEzhI3K%2FxS7qVMOvlpg4wBjZSDKIV%2FEvKCPMuekJW%2B7VGOGSe0CmthkFm8HSMQa96gnDVS863OzXLQ1bMyDGrYWgdhnTdlJgyF%2BHBSlyfWw9etgH6f5Hgue%2F%2BcMaNSYxuGa%2FJnVs7QkUT8Eb%2FrU79aZMhsiacVP%2F9zF8EnMf9eXTua2iHxi4rWE15CUFetAI6d1TQHSYsgQH7HPPm9RtWEfbpaC7ZsRIxnoduoQEMfxmGZl6RwPxzaGOB9OT%2BvpAj9e1edxM47VUKDLaTnpcdCmfoZ12oAW7HB%2FlsIfnm3cPsgvTQjuEEyJ1y%2FxkDIWsZHtO57UAgolcKTMDHkYOV9YF2w0s30BcpX%2FPfvjDA8pG%2FBjqkAcHcndIYUAKxWgsGVErADpULy40%2FCj8Cclc9HvAFWzdod5EU5uQ2lfFVoT7gl%2FuLc0NetZDeQn3OAjzpKyUXxXiyVOCacYRSZgL1hRSpG0ZiYdKm3LH8Pak6I%2F4QkD9pGRwS6EXC5yWQ3gZov%2F16WmoQrOdGYYUaFyRjOiDcW%2BdBvMF3YJG2lbl3iIHG9PxRQCed7QKpQ0utUjLNzkazPgMsQCTd&X-Amz-Signature=da04256a5e4413b9e9b18937909d0fc6fb4eee57e0b3d60587166805fa9a9f55&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKRZVE3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnAwyDJHwVQy1HMMS3gBNU15Awjf2JOJGKzr%2FyAsXYAIhALnMKUcbogLAAyMzh4p7OC0UwvvtM2eY4nakrFspes3zKv8DCDcQABoMNjM3NDIzMTgzODA1IgyU%2FrSmsZtMtZRn%2FOwq3AN9tGCx2aB%2BAbqgc%2Bcp7Jpo%2BjnNMvrDD4jwuuwvXOnzNJOAPJWk5aUMvVvCUceFbSuYem1MM8Ea%2FnQ501X6pdQhJWPKnfewEIsyq8x4KoRXWeAeZmD9v7z0eh9jR0DEesAAFe3ffzTl6iqqn%2FgC1AX1tlKFnTkCjI6YmZppaBaMNWcbZC9pa9mjwOoBCe1yAzkvDUJEClATw7RQ5wgIEKYYPWKtSHFEh5cnEvqBLiTEq3yXEamzX%2BtlTiMpxl7jJ8bk1c8nenlE2F0ZUQTCzyFVEzhI3K%2FxS7qVMOvlpg4wBjZSDKIV%2FEvKCPMuekJW%2B7VGOGSe0CmthkFm8HSMQa96gnDVS863OzXLQ1bMyDGrYWgdhnTdlJgyF%2BHBSlyfWw9etgH6f5Hgue%2F%2BcMaNSYxuGa%2FJnVs7QkUT8Eb%2FrU79aZMhsiacVP%2F9zF8EnMf9eXTua2iHxi4rWE15CUFetAI6d1TQHSYsgQH7HPPm9RtWEfbpaC7ZsRIxnoduoQEMfxmGZl6RwPxzaGOB9OT%2BvpAj9e1edxM47VUKDLaTnpcdCmfoZ12oAW7HB%2FlsIfnm3cPsgvTQjuEEyJ1y%2FxkDIWsZHtO57UAgolcKTMDHkYOV9YF2w0s30BcpX%2FPfvjDA8pG%2FBjqkAcHcndIYUAKxWgsGVErADpULy40%2FCj8Cclc9HvAFWzdod5EU5uQ2lfFVoT7gl%2FuLc0NetZDeQn3OAjzpKyUXxXiyVOCacYRSZgL1hRSpG0ZiYdKm3LH8Pak6I%2F4QkD9pGRwS6EXC5yWQ3gZov%2F16WmoQrOdGYYUaFyRjOiDcW%2BdBvMF3YJG2lbl3iIHG9PxRQCed7QKpQ0utUjLNzkazPgMsQCTd&X-Amz-Signature=509500e8963e690d6f52d72d6aab7890a89089c2176bf990758fb8e3f60e440a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKRZVE3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnAwyDJHwVQy1HMMS3gBNU15Awjf2JOJGKzr%2FyAsXYAIhALnMKUcbogLAAyMzh4p7OC0UwvvtM2eY4nakrFspes3zKv8DCDcQABoMNjM3NDIzMTgzODA1IgyU%2FrSmsZtMtZRn%2FOwq3AN9tGCx2aB%2BAbqgc%2Bcp7Jpo%2BjnNMvrDD4jwuuwvXOnzNJOAPJWk5aUMvVvCUceFbSuYem1MM8Ea%2FnQ501X6pdQhJWPKnfewEIsyq8x4KoRXWeAeZmD9v7z0eh9jR0DEesAAFe3ffzTl6iqqn%2FgC1AX1tlKFnTkCjI6YmZppaBaMNWcbZC9pa9mjwOoBCe1yAzkvDUJEClATw7RQ5wgIEKYYPWKtSHFEh5cnEvqBLiTEq3yXEamzX%2BtlTiMpxl7jJ8bk1c8nenlE2F0ZUQTCzyFVEzhI3K%2FxS7qVMOvlpg4wBjZSDKIV%2FEvKCPMuekJW%2B7VGOGSe0CmthkFm8HSMQa96gnDVS863OzXLQ1bMyDGrYWgdhnTdlJgyF%2BHBSlyfWw9etgH6f5Hgue%2F%2BcMaNSYxuGa%2FJnVs7QkUT8Eb%2FrU79aZMhsiacVP%2F9zF8EnMf9eXTua2iHxi4rWE15CUFetAI6d1TQHSYsgQH7HPPm9RtWEfbpaC7ZsRIxnoduoQEMfxmGZl6RwPxzaGOB9OT%2BvpAj9e1edxM47VUKDLaTnpcdCmfoZ12oAW7HB%2FlsIfnm3cPsgvTQjuEEyJ1y%2FxkDIWsZHtO57UAgolcKTMDHkYOV9YF2w0s30BcpX%2FPfvjDA8pG%2FBjqkAcHcndIYUAKxWgsGVErADpULy40%2FCj8Cclc9HvAFWzdod5EU5uQ2lfFVoT7gl%2FuLc0NetZDeQn3OAjzpKyUXxXiyVOCacYRSZgL1hRSpG0ZiYdKm3LH8Pak6I%2F4QkD9pGRwS6EXC5yWQ3gZov%2F16WmoQrOdGYYUaFyRjOiDcW%2BdBvMF3YJG2lbl3iIHG9PxRQCed7QKpQ0utUjLNzkazPgMsQCTd&X-Amz-Signature=e5ee19ba8a7e9005a74a8d66a28cb818a1698cd4c1ee86ae5ef02cbf76625a29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKRZVE3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnAwyDJHwVQy1HMMS3gBNU15Awjf2JOJGKzr%2FyAsXYAIhALnMKUcbogLAAyMzh4p7OC0UwvvtM2eY4nakrFspes3zKv8DCDcQABoMNjM3NDIzMTgzODA1IgyU%2FrSmsZtMtZRn%2FOwq3AN9tGCx2aB%2BAbqgc%2Bcp7Jpo%2BjnNMvrDD4jwuuwvXOnzNJOAPJWk5aUMvVvCUceFbSuYem1MM8Ea%2FnQ501X6pdQhJWPKnfewEIsyq8x4KoRXWeAeZmD9v7z0eh9jR0DEesAAFe3ffzTl6iqqn%2FgC1AX1tlKFnTkCjI6YmZppaBaMNWcbZC9pa9mjwOoBCe1yAzkvDUJEClATw7RQ5wgIEKYYPWKtSHFEh5cnEvqBLiTEq3yXEamzX%2BtlTiMpxl7jJ8bk1c8nenlE2F0ZUQTCzyFVEzhI3K%2FxS7qVMOvlpg4wBjZSDKIV%2FEvKCPMuekJW%2B7VGOGSe0CmthkFm8HSMQa96gnDVS863OzXLQ1bMyDGrYWgdhnTdlJgyF%2BHBSlyfWw9etgH6f5Hgue%2F%2BcMaNSYxuGa%2FJnVs7QkUT8Eb%2FrU79aZMhsiacVP%2F9zF8EnMf9eXTua2iHxi4rWE15CUFetAI6d1TQHSYsgQH7HPPm9RtWEfbpaC7ZsRIxnoduoQEMfxmGZl6RwPxzaGOB9OT%2BvpAj9e1edxM47VUKDLaTnpcdCmfoZ12oAW7HB%2FlsIfnm3cPsgvTQjuEEyJ1y%2FxkDIWsZHtO57UAgolcKTMDHkYOV9YF2w0s30BcpX%2FPfvjDA8pG%2FBjqkAcHcndIYUAKxWgsGVErADpULy40%2FCj8Cclc9HvAFWzdod5EU5uQ2lfFVoT7gl%2FuLc0NetZDeQn3OAjzpKyUXxXiyVOCacYRSZgL1hRSpG0ZiYdKm3LH8Pak6I%2F4QkD9pGRwS6EXC5yWQ3gZov%2F16WmoQrOdGYYUaFyRjOiDcW%2BdBvMF3YJG2lbl3iIHG9PxRQCed7QKpQ0utUjLNzkazPgMsQCTd&X-Amz-Signature=debd6817574bd4a89adae6f6b3978ed9eb0e953369550095672c82f8846e4c72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKRZVE3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnAwyDJHwVQy1HMMS3gBNU15Awjf2JOJGKzr%2FyAsXYAIhALnMKUcbogLAAyMzh4p7OC0UwvvtM2eY4nakrFspes3zKv8DCDcQABoMNjM3NDIzMTgzODA1IgyU%2FrSmsZtMtZRn%2FOwq3AN9tGCx2aB%2BAbqgc%2Bcp7Jpo%2BjnNMvrDD4jwuuwvXOnzNJOAPJWk5aUMvVvCUceFbSuYem1MM8Ea%2FnQ501X6pdQhJWPKnfewEIsyq8x4KoRXWeAeZmD9v7z0eh9jR0DEesAAFe3ffzTl6iqqn%2FgC1AX1tlKFnTkCjI6YmZppaBaMNWcbZC9pa9mjwOoBCe1yAzkvDUJEClATw7RQ5wgIEKYYPWKtSHFEh5cnEvqBLiTEq3yXEamzX%2BtlTiMpxl7jJ8bk1c8nenlE2F0ZUQTCzyFVEzhI3K%2FxS7qVMOvlpg4wBjZSDKIV%2FEvKCPMuekJW%2B7VGOGSe0CmthkFm8HSMQa96gnDVS863OzXLQ1bMyDGrYWgdhnTdlJgyF%2BHBSlyfWw9etgH6f5Hgue%2F%2BcMaNSYxuGa%2FJnVs7QkUT8Eb%2FrU79aZMhsiacVP%2F9zF8EnMf9eXTua2iHxi4rWE15CUFetAI6d1TQHSYsgQH7HPPm9RtWEfbpaC7ZsRIxnoduoQEMfxmGZl6RwPxzaGOB9OT%2BvpAj9e1edxM47VUKDLaTnpcdCmfoZ12oAW7HB%2FlsIfnm3cPsgvTQjuEEyJ1y%2FxkDIWsZHtO57UAgolcKTMDHkYOV9YF2w0s30BcpX%2FPfvjDA8pG%2FBjqkAcHcndIYUAKxWgsGVErADpULy40%2FCj8Cclc9HvAFWzdod5EU5uQ2lfFVoT7gl%2FuLc0NetZDeQn3OAjzpKyUXxXiyVOCacYRSZgL1hRSpG0ZiYdKm3LH8Pak6I%2F4QkD9pGRwS6EXC5yWQ3gZov%2F16WmoQrOdGYYUaFyRjOiDcW%2BdBvMF3YJG2lbl3iIHG9PxRQCed7QKpQ0utUjLNzkazPgMsQCTd&X-Amz-Signature=c0dd82b2ac05dd6303838ba278dd2dd714b979f32f5a97b65131601854ac2d57&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKRZVE3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnAwyDJHwVQy1HMMS3gBNU15Awjf2JOJGKzr%2FyAsXYAIhALnMKUcbogLAAyMzh4p7OC0UwvvtM2eY4nakrFspes3zKv8DCDcQABoMNjM3NDIzMTgzODA1IgyU%2FrSmsZtMtZRn%2FOwq3AN9tGCx2aB%2BAbqgc%2Bcp7Jpo%2BjnNMvrDD4jwuuwvXOnzNJOAPJWk5aUMvVvCUceFbSuYem1MM8Ea%2FnQ501X6pdQhJWPKnfewEIsyq8x4KoRXWeAeZmD9v7z0eh9jR0DEesAAFe3ffzTl6iqqn%2FgC1AX1tlKFnTkCjI6YmZppaBaMNWcbZC9pa9mjwOoBCe1yAzkvDUJEClATw7RQ5wgIEKYYPWKtSHFEh5cnEvqBLiTEq3yXEamzX%2BtlTiMpxl7jJ8bk1c8nenlE2F0ZUQTCzyFVEzhI3K%2FxS7qVMOvlpg4wBjZSDKIV%2FEvKCPMuekJW%2B7VGOGSe0CmthkFm8HSMQa96gnDVS863OzXLQ1bMyDGrYWgdhnTdlJgyF%2BHBSlyfWw9etgH6f5Hgue%2F%2BcMaNSYxuGa%2FJnVs7QkUT8Eb%2FrU79aZMhsiacVP%2F9zF8EnMf9eXTua2iHxi4rWE15CUFetAI6d1TQHSYsgQH7HPPm9RtWEfbpaC7ZsRIxnoduoQEMfxmGZl6RwPxzaGOB9OT%2BvpAj9e1edxM47VUKDLaTnpcdCmfoZ12oAW7HB%2FlsIfnm3cPsgvTQjuEEyJ1y%2FxkDIWsZHtO57UAgolcKTMDHkYOV9YF2w0s30BcpX%2FPfvjDA8pG%2FBjqkAcHcndIYUAKxWgsGVErADpULy40%2FCj8Cclc9HvAFWzdod5EU5uQ2lfFVoT7gl%2FuLc0NetZDeQn3OAjzpKyUXxXiyVOCacYRSZgL1hRSpG0ZiYdKm3LH8Pak6I%2F4QkD9pGRwS6EXC5yWQ3gZov%2F16WmoQrOdGYYUaFyRjOiDcW%2BdBvMF3YJG2lbl3iIHG9PxRQCed7QKpQ0utUjLNzkazPgMsQCTd&X-Amz-Signature=c7ea546c2abaaf9a20eb268e72514d0f22f6d5823837c7335ac83da9ffd5da83&X-Amz-SignedHeaders=host&x-id=GetObject)
