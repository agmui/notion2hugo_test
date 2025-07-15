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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q23J37LF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCrceR792ShGfDn4Zo%2BRsJ4L%2BFXEn0U86cb7obS85csNwIhAO6AgupZgOkiOqyrTu1LmvaJ168UtE74R6bYSsp5MqoBKv8DCD8QABoMNjM3NDIzMTgzODA1IgzDMa9pyo4En4cDfQMq3AMEAMZ4spok1MvjTpn8WjrgMneZ0JIt%2BYOXEJStGANm4EIKuY7VbslFKRVuJApCFtm%2BVQEwpmi%2FI1nbzDeSsKt6vOoYwYFTsE%2ByXVpMV49hZzojNx4NOhqudaPR%2FOb7s%2FEuzXXMVtdx7DR1gsN4fe5Clvufa4We%2F%2FFWDa%2BZWIb8CxtOSMzLE8FlQgaGX9RRNbHDMfPCn9ODETpjk4cz4o6oYJl2yzH4t5uVcivOU2yzpTy08OoIfIjP854AB8YuFFq26TM3go1S4BaFSs9CRoFBy%2FF12%2BqDU7oWew44KbnITE2UP%2FwsFwQK4KKvW9byBlAXd7EzXSf4%2BC9nfSIGWOpO1tx31S19ZYLU8LmDfXozeGQnr0du0C5uS%2BC5Pk0UdZdcUHJLqwpTCe25oLWEoWCyfuHXohkjkh3pFzVBXSkyEJxLT2QsIEEDf0B%2B0ZGc8H7ntxHO9tozrcq05bLawL6llivn2XO8E1lvMqlyIzawBMIa2uLzcfovyKiY0FuHr1650lj23ITpeQku8yZsTjtxQRrmhm%2FKf3cr0mYfZYv8%2FfySpFNbCz5seug60mf%2BZvHAKPHFi068I679nAJAW6w97ioCZMqKp2xhHXJIjd1J3c2tz6vtof5PJjEo%2BDDY1NfDBjqkAXcVEIjhP893jOB6tPgv6HTybwejpxD6oPefAYZfo3ldwpySF%2BbAw1%2BwIHyULGMMbh59cT7eMOdX9YA8kuN7c68IVi432HH1MD9hwLNaxJUzehlJBF8bZScuhrVY4nmfUziyKhAzlVdS9Q4h%2FRAUfIaSkcas%2FDyhRdD3kQA0pbYWreqXv5v829xabfT5sKk6iDLO4q5NU%2FP55Kv1lgA1kNS1pw%2Bo&X-Amz-Signature=41f915a3074ecbad933dbe505198fc472ec4c80f02321aa0a29fe5aa0a27d1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q23J37LF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCrceR792ShGfDn4Zo%2BRsJ4L%2BFXEn0U86cb7obS85csNwIhAO6AgupZgOkiOqyrTu1LmvaJ168UtE74R6bYSsp5MqoBKv8DCD8QABoMNjM3NDIzMTgzODA1IgzDMa9pyo4En4cDfQMq3AMEAMZ4spok1MvjTpn8WjrgMneZ0JIt%2BYOXEJStGANm4EIKuY7VbslFKRVuJApCFtm%2BVQEwpmi%2FI1nbzDeSsKt6vOoYwYFTsE%2ByXVpMV49hZzojNx4NOhqudaPR%2FOb7s%2FEuzXXMVtdx7DR1gsN4fe5Clvufa4We%2F%2FFWDa%2BZWIb8CxtOSMzLE8FlQgaGX9RRNbHDMfPCn9ODETpjk4cz4o6oYJl2yzH4t5uVcivOU2yzpTy08OoIfIjP854AB8YuFFq26TM3go1S4BaFSs9CRoFBy%2FF12%2BqDU7oWew44KbnITE2UP%2FwsFwQK4KKvW9byBlAXd7EzXSf4%2BC9nfSIGWOpO1tx31S19ZYLU8LmDfXozeGQnr0du0C5uS%2BC5Pk0UdZdcUHJLqwpTCe25oLWEoWCyfuHXohkjkh3pFzVBXSkyEJxLT2QsIEEDf0B%2B0ZGc8H7ntxHO9tozrcq05bLawL6llivn2XO8E1lvMqlyIzawBMIa2uLzcfovyKiY0FuHr1650lj23ITpeQku8yZsTjtxQRrmhm%2FKf3cr0mYfZYv8%2FfySpFNbCz5seug60mf%2BZvHAKPHFi068I679nAJAW6w97ioCZMqKp2xhHXJIjd1J3c2tz6vtof5PJjEo%2BDDY1NfDBjqkAXcVEIjhP893jOB6tPgv6HTybwejpxD6oPefAYZfo3ldwpySF%2BbAw1%2BwIHyULGMMbh59cT7eMOdX9YA8kuN7c68IVi432HH1MD9hwLNaxJUzehlJBF8bZScuhrVY4nmfUziyKhAzlVdS9Q4h%2FRAUfIaSkcas%2FDyhRdD3kQA0pbYWreqXv5v829xabfT5sKk6iDLO4q5NU%2FP55Kv1lgA1kNS1pw%2Bo&X-Amz-Signature=a4c27c19d59758c75dd24f4c88cc595161c76f93b3a3cdcdb1ab1506645804a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q23J37LF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCrceR792ShGfDn4Zo%2BRsJ4L%2BFXEn0U86cb7obS85csNwIhAO6AgupZgOkiOqyrTu1LmvaJ168UtE74R6bYSsp5MqoBKv8DCD8QABoMNjM3NDIzMTgzODA1IgzDMa9pyo4En4cDfQMq3AMEAMZ4spok1MvjTpn8WjrgMneZ0JIt%2BYOXEJStGANm4EIKuY7VbslFKRVuJApCFtm%2BVQEwpmi%2FI1nbzDeSsKt6vOoYwYFTsE%2ByXVpMV49hZzojNx4NOhqudaPR%2FOb7s%2FEuzXXMVtdx7DR1gsN4fe5Clvufa4We%2F%2FFWDa%2BZWIb8CxtOSMzLE8FlQgaGX9RRNbHDMfPCn9ODETpjk4cz4o6oYJl2yzH4t5uVcivOU2yzpTy08OoIfIjP854AB8YuFFq26TM3go1S4BaFSs9CRoFBy%2FF12%2BqDU7oWew44KbnITE2UP%2FwsFwQK4KKvW9byBlAXd7EzXSf4%2BC9nfSIGWOpO1tx31S19ZYLU8LmDfXozeGQnr0du0C5uS%2BC5Pk0UdZdcUHJLqwpTCe25oLWEoWCyfuHXohkjkh3pFzVBXSkyEJxLT2QsIEEDf0B%2B0ZGc8H7ntxHO9tozrcq05bLawL6llivn2XO8E1lvMqlyIzawBMIa2uLzcfovyKiY0FuHr1650lj23ITpeQku8yZsTjtxQRrmhm%2FKf3cr0mYfZYv8%2FfySpFNbCz5seug60mf%2BZvHAKPHFi068I679nAJAW6w97ioCZMqKp2xhHXJIjd1J3c2tz6vtof5PJjEo%2BDDY1NfDBjqkAXcVEIjhP893jOB6tPgv6HTybwejpxD6oPefAYZfo3ldwpySF%2BbAw1%2BwIHyULGMMbh59cT7eMOdX9YA8kuN7c68IVi432HH1MD9hwLNaxJUzehlJBF8bZScuhrVY4nmfUziyKhAzlVdS9Q4h%2FRAUfIaSkcas%2FDyhRdD3kQA0pbYWreqXv5v829xabfT5sKk6iDLO4q5NU%2FP55Kv1lgA1kNS1pw%2Bo&X-Amz-Signature=7ae619e7f25b33b7ca3c3332bdeb4b4d21cbd62228cf9e7eb1085444607e697c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q23J37LF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCrceR792ShGfDn4Zo%2BRsJ4L%2BFXEn0U86cb7obS85csNwIhAO6AgupZgOkiOqyrTu1LmvaJ168UtE74R6bYSsp5MqoBKv8DCD8QABoMNjM3NDIzMTgzODA1IgzDMa9pyo4En4cDfQMq3AMEAMZ4spok1MvjTpn8WjrgMneZ0JIt%2BYOXEJStGANm4EIKuY7VbslFKRVuJApCFtm%2BVQEwpmi%2FI1nbzDeSsKt6vOoYwYFTsE%2ByXVpMV49hZzojNx4NOhqudaPR%2FOb7s%2FEuzXXMVtdx7DR1gsN4fe5Clvufa4We%2F%2FFWDa%2BZWIb8CxtOSMzLE8FlQgaGX9RRNbHDMfPCn9ODETpjk4cz4o6oYJl2yzH4t5uVcivOU2yzpTy08OoIfIjP854AB8YuFFq26TM3go1S4BaFSs9CRoFBy%2FF12%2BqDU7oWew44KbnITE2UP%2FwsFwQK4KKvW9byBlAXd7EzXSf4%2BC9nfSIGWOpO1tx31S19ZYLU8LmDfXozeGQnr0du0C5uS%2BC5Pk0UdZdcUHJLqwpTCe25oLWEoWCyfuHXohkjkh3pFzVBXSkyEJxLT2QsIEEDf0B%2B0ZGc8H7ntxHO9tozrcq05bLawL6llivn2XO8E1lvMqlyIzawBMIa2uLzcfovyKiY0FuHr1650lj23ITpeQku8yZsTjtxQRrmhm%2FKf3cr0mYfZYv8%2FfySpFNbCz5seug60mf%2BZvHAKPHFi068I679nAJAW6w97ioCZMqKp2xhHXJIjd1J3c2tz6vtof5PJjEo%2BDDY1NfDBjqkAXcVEIjhP893jOB6tPgv6HTybwejpxD6oPefAYZfo3ldwpySF%2BbAw1%2BwIHyULGMMbh59cT7eMOdX9YA8kuN7c68IVi432HH1MD9hwLNaxJUzehlJBF8bZScuhrVY4nmfUziyKhAzlVdS9Q4h%2FRAUfIaSkcas%2FDyhRdD3kQA0pbYWreqXv5v829xabfT5sKk6iDLO4q5NU%2FP55Kv1lgA1kNS1pw%2Bo&X-Amz-Signature=24cb9c9231ec80a8145714bb08e0f6d1a6ae6e0bbf5b2c81baa5422c28346c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q23J37LF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCrceR792ShGfDn4Zo%2BRsJ4L%2BFXEn0U86cb7obS85csNwIhAO6AgupZgOkiOqyrTu1LmvaJ168UtE74R6bYSsp5MqoBKv8DCD8QABoMNjM3NDIzMTgzODA1IgzDMa9pyo4En4cDfQMq3AMEAMZ4spok1MvjTpn8WjrgMneZ0JIt%2BYOXEJStGANm4EIKuY7VbslFKRVuJApCFtm%2BVQEwpmi%2FI1nbzDeSsKt6vOoYwYFTsE%2ByXVpMV49hZzojNx4NOhqudaPR%2FOb7s%2FEuzXXMVtdx7DR1gsN4fe5Clvufa4We%2F%2FFWDa%2BZWIb8CxtOSMzLE8FlQgaGX9RRNbHDMfPCn9ODETpjk4cz4o6oYJl2yzH4t5uVcivOU2yzpTy08OoIfIjP854AB8YuFFq26TM3go1S4BaFSs9CRoFBy%2FF12%2BqDU7oWew44KbnITE2UP%2FwsFwQK4KKvW9byBlAXd7EzXSf4%2BC9nfSIGWOpO1tx31S19ZYLU8LmDfXozeGQnr0du0C5uS%2BC5Pk0UdZdcUHJLqwpTCe25oLWEoWCyfuHXohkjkh3pFzVBXSkyEJxLT2QsIEEDf0B%2B0ZGc8H7ntxHO9tozrcq05bLawL6llivn2XO8E1lvMqlyIzawBMIa2uLzcfovyKiY0FuHr1650lj23ITpeQku8yZsTjtxQRrmhm%2FKf3cr0mYfZYv8%2FfySpFNbCz5seug60mf%2BZvHAKPHFi068I679nAJAW6w97ioCZMqKp2xhHXJIjd1J3c2tz6vtof5PJjEo%2BDDY1NfDBjqkAXcVEIjhP893jOB6tPgv6HTybwejpxD6oPefAYZfo3ldwpySF%2BbAw1%2BwIHyULGMMbh59cT7eMOdX9YA8kuN7c68IVi432HH1MD9hwLNaxJUzehlJBF8bZScuhrVY4nmfUziyKhAzlVdS9Q4h%2FRAUfIaSkcas%2FDyhRdD3kQA0pbYWreqXv5v829xabfT5sKk6iDLO4q5NU%2FP55Kv1lgA1kNS1pw%2Bo&X-Amz-Signature=da482c1d11e979c20006eb071716f828d532764aa256a6bda3a1fcf6d2d3123a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q23J37LF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCrceR792ShGfDn4Zo%2BRsJ4L%2BFXEn0U86cb7obS85csNwIhAO6AgupZgOkiOqyrTu1LmvaJ168UtE74R6bYSsp5MqoBKv8DCD8QABoMNjM3NDIzMTgzODA1IgzDMa9pyo4En4cDfQMq3AMEAMZ4spok1MvjTpn8WjrgMneZ0JIt%2BYOXEJStGANm4EIKuY7VbslFKRVuJApCFtm%2BVQEwpmi%2FI1nbzDeSsKt6vOoYwYFTsE%2ByXVpMV49hZzojNx4NOhqudaPR%2FOb7s%2FEuzXXMVtdx7DR1gsN4fe5Clvufa4We%2F%2FFWDa%2BZWIb8CxtOSMzLE8FlQgaGX9RRNbHDMfPCn9ODETpjk4cz4o6oYJl2yzH4t5uVcivOU2yzpTy08OoIfIjP854AB8YuFFq26TM3go1S4BaFSs9CRoFBy%2FF12%2BqDU7oWew44KbnITE2UP%2FwsFwQK4KKvW9byBlAXd7EzXSf4%2BC9nfSIGWOpO1tx31S19ZYLU8LmDfXozeGQnr0du0C5uS%2BC5Pk0UdZdcUHJLqwpTCe25oLWEoWCyfuHXohkjkh3pFzVBXSkyEJxLT2QsIEEDf0B%2B0ZGc8H7ntxHO9tozrcq05bLawL6llivn2XO8E1lvMqlyIzawBMIa2uLzcfovyKiY0FuHr1650lj23ITpeQku8yZsTjtxQRrmhm%2FKf3cr0mYfZYv8%2FfySpFNbCz5seug60mf%2BZvHAKPHFi068I679nAJAW6w97ioCZMqKp2xhHXJIjd1J3c2tz6vtof5PJjEo%2BDDY1NfDBjqkAXcVEIjhP893jOB6tPgv6HTybwejpxD6oPefAYZfo3ldwpySF%2BbAw1%2BwIHyULGMMbh59cT7eMOdX9YA8kuN7c68IVi432HH1MD9hwLNaxJUzehlJBF8bZScuhrVY4nmfUziyKhAzlVdS9Q4h%2FRAUfIaSkcas%2FDyhRdD3kQA0pbYWreqXv5v829xabfT5sKk6iDLO4q5NU%2FP55Kv1lgA1kNS1pw%2Bo&X-Amz-Signature=b2e89c309eae64d562d968f771c04f27ec003976bfd3fbed00c1837ed4ec6a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
