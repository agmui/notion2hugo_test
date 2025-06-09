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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5MTXBH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk8diJQ4gLXMJnrSLHqiDTNcBlgTpq9uZxR3K6338pyAiBIhawBBueSqtNmdDSjeA61%2FuOLz0XR85Dp5EHMcD54hyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlx8mhUuDVi3tXj5oKtwDe40OFXW52RiFhTGeNr8HCFA3TBLI4zV8oDP2mI3j4uwo5A5bM1Z%2FXLt3pAxTDL74Oz4ZznAfOAPomzEBAO4l9Q3vyhTBWu0PScYTsOQDR0tVFWv%2FvbpySxJtEqvbALL1rB05FRV%2FCd3jnnWkYx%2BLAREBLy828XDrHkYwbZgGGiz3XlAZsEl1BKNLu6MYOo%2FpuimwufAUWs6Z8QkTpOygH0RCV%2Boo5QrIaGbB4dZA7Oz9wpjNbvSY4HAwrTHMFKJqaHf%2FoSxya6BnCL2soY2m1zMBbE3LhyKKNdplgwuPQcZjEWb6LkeGm0IrpWSGq2N3JHO%2B0AU1DUQvKsflcOzxQL%2Fxnyxo1caBB5AFC%2Bel65veHK6vNcjafA0m1rd%2BULn5xZs3g29IvqemP0%2Fp0mFdsqKIbNIu6r1J5v9gLfOiwUMM7Qxq9QqFfSiSIw0CDxtcdJqhG%2FXj529gkRbECZZ9E073wYiV4JLmYmrocnNIUNzoULG20rcjhQ9Qf8dTgWiQ9hAwOkWu8qXCaLfrGfUOXMDcbtZn0ePsqDsAXJEPT8eV0gkpLGQKUJdfhTRtTyK%2F59WFCLf0%2F7kffMQo8JhcF4zqfEkBafT0vFWTUwwLiJEKSLHjQBmFQ8oEUqowmu6YwgY6pgEQkMolw1Qvdkk8xO1se3%2F2k5CJiAvXW%2BdFJon7J2VRj9tX4IaiZq3bHI6YpWsql8XdOijXPSUl7BkH09OIDze62nVoAmiGNkMVWoF745HamOALAt0ZB2hC7VaFUgOIeat5qJsGZ0VdV4QQ%2BxXm0UWzTCTGHzoerrq7lj4PyD3du75X8FA18a85KSdp3JkuFoGRXD39UszuojWjuSF%2B6zgV5cgCgr4G&X-Amz-Signature=4db0f3ea7df8593744d04c6da71e7963bd8f56981d6218328a984bb9892019ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5MTXBH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk8diJQ4gLXMJnrSLHqiDTNcBlgTpq9uZxR3K6338pyAiBIhawBBueSqtNmdDSjeA61%2FuOLz0XR85Dp5EHMcD54hyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlx8mhUuDVi3tXj5oKtwDe40OFXW52RiFhTGeNr8HCFA3TBLI4zV8oDP2mI3j4uwo5A5bM1Z%2FXLt3pAxTDL74Oz4ZznAfOAPomzEBAO4l9Q3vyhTBWu0PScYTsOQDR0tVFWv%2FvbpySxJtEqvbALL1rB05FRV%2FCd3jnnWkYx%2BLAREBLy828XDrHkYwbZgGGiz3XlAZsEl1BKNLu6MYOo%2FpuimwufAUWs6Z8QkTpOygH0RCV%2Boo5QrIaGbB4dZA7Oz9wpjNbvSY4HAwrTHMFKJqaHf%2FoSxya6BnCL2soY2m1zMBbE3LhyKKNdplgwuPQcZjEWb6LkeGm0IrpWSGq2N3JHO%2B0AU1DUQvKsflcOzxQL%2Fxnyxo1caBB5AFC%2Bel65veHK6vNcjafA0m1rd%2BULn5xZs3g29IvqemP0%2Fp0mFdsqKIbNIu6r1J5v9gLfOiwUMM7Qxq9QqFfSiSIw0CDxtcdJqhG%2FXj529gkRbECZZ9E073wYiV4JLmYmrocnNIUNzoULG20rcjhQ9Qf8dTgWiQ9hAwOkWu8qXCaLfrGfUOXMDcbtZn0ePsqDsAXJEPT8eV0gkpLGQKUJdfhTRtTyK%2F59WFCLf0%2F7kffMQo8JhcF4zqfEkBafT0vFWTUwwLiJEKSLHjQBmFQ8oEUqowmu6YwgY6pgEQkMolw1Qvdkk8xO1se3%2F2k5CJiAvXW%2BdFJon7J2VRj9tX4IaiZq3bHI6YpWsql8XdOijXPSUl7BkH09OIDze62nVoAmiGNkMVWoF745HamOALAt0ZB2hC7VaFUgOIeat5qJsGZ0VdV4QQ%2BxXm0UWzTCTGHzoerrq7lj4PyD3du75X8FA18a85KSdp3JkuFoGRXD39UszuojWjuSF%2B6zgV5cgCgr4G&X-Amz-Signature=f791edb4e7b8b64a7d0802c052888ffa3f396bf2f6eac427509cba2c8913a08a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5MTXBH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk8diJQ4gLXMJnrSLHqiDTNcBlgTpq9uZxR3K6338pyAiBIhawBBueSqtNmdDSjeA61%2FuOLz0XR85Dp5EHMcD54hyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlx8mhUuDVi3tXj5oKtwDe40OFXW52RiFhTGeNr8HCFA3TBLI4zV8oDP2mI3j4uwo5A5bM1Z%2FXLt3pAxTDL74Oz4ZznAfOAPomzEBAO4l9Q3vyhTBWu0PScYTsOQDR0tVFWv%2FvbpySxJtEqvbALL1rB05FRV%2FCd3jnnWkYx%2BLAREBLy828XDrHkYwbZgGGiz3XlAZsEl1BKNLu6MYOo%2FpuimwufAUWs6Z8QkTpOygH0RCV%2Boo5QrIaGbB4dZA7Oz9wpjNbvSY4HAwrTHMFKJqaHf%2FoSxya6BnCL2soY2m1zMBbE3LhyKKNdplgwuPQcZjEWb6LkeGm0IrpWSGq2N3JHO%2B0AU1DUQvKsflcOzxQL%2Fxnyxo1caBB5AFC%2Bel65veHK6vNcjafA0m1rd%2BULn5xZs3g29IvqemP0%2Fp0mFdsqKIbNIu6r1J5v9gLfOiwUMM7Qxq9QqFfSiSIw0CDxtcdJqhG%2FXj529gkRbECZZ9E073wYiV4JLmYmrocnNIUNzoULG20rcjhQ9Qf8dTgWiQ9hAwOkWu8qXCaLfrGfUOXMDcbtZn0ePsqDsAXJEPT8eV0gkpLGQKUJdfhTRtTyK%2F59WFCLf0%2F7kffMQo8JhcF4zqfEkBafT0vFWTUwwLiJEKSLHjQBmFQ8oEUqowmu6YwgY6pgEQkMolw1Qvdkk8xO1se3%2F2k5CJiAvXW%2BdFJon7J2VRj9tX4IaiZq3bHI6YpWsql8XdOijXPSUl7BkH09OIDze62nVoAmiGNkMVWoF745HamOALAt0ZB2hC7VaFUgOIeat5qJsGZ0VdV4QQ%2BxXm0UWzTCTGHzoerrq7lj4PyD3du75X8FA18a85KSdp3JkuFoGRXD39UszuojWjuSF%2B6zgV5cgCgr4G&X-Amz-Signature=c96101770b844e62824d583ebeb7ae6f0aed5726ce2119fd7019dbb4422c4b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5MTXBH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk8diJQ4gLXMJnrSLHqiDTNcBlgTpq9uZxR3K6338pyAiBIhawBBueSqtNmdDSjeA61%2FuOLz0XR85Dp5EHMcD54hyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlx8mhUuDVi3tXj5oKtwDe40OFXW52RiFhTGeNr8HCFA3TBLI4zV8oDP2mI3j4uwo5A5bM1Z%2FXLt3pAxTDL74Oz4ZznAfOAPomzEBAO4l9Q3vyhTBWu0PScYTsOQDR0tVFWv%2FvbpySxJtEqvbALL1rB05FRV%2FCd3jnnWkYx%2BLAREBLy828XDrHkYwbZgGGiz3XlAZsEl1BKNLu6MYOo%2FpuimwufAUWs6Z8QkTpOygH0RCV%2Boo5QrIaGbB4dZA7Oz9wpjNbvSY4HAwrTHMFKJqaHf%2FoSxya6BnCL2soY2m1zMBbE3LhyKKNdplgwuPQcZjEWb6LkeGm0IrpWSGq2N3JHO%2B0AU1DUQvKsflcOzxQL%2Fxnyxo1caBB5AFC%2Bel65veHK6vNcjafA0m1rd%2BULn5xZs3g29IvqemP0%2Fp0mFdsqKIbNIu6r1J5v9gLfOiwUMM7Qxq9QqFfSiSIw0CDxtcdJqhG%2FXj529gkRbECZZ9E073wYiV4JLmYmrocnNIUNzoULG20rcjhQ9Qf8dTgWiQ9hAwOkWu8qXCaLfrGfUOXMDcbtZn0ePsqDsAXJEPT8eV0gkpLGQKUJdfhTRtTyK%2F59WFCLf0%2F7kffMQo8JhcF4zqfEkBafT0vFWTUwwLiJEKSLHjQBmFQ8oEUqowmu6YwgY6pgEQkMolw1Qvdkk8xO1se3%2F2k5CJiAvXW%2BdFJon7J2VRj9tX4IaiZq3bHI6YpWsql8XdOijXPSUl7BkH09OIDze62nVoAmiGNkMVWoF745HamOALAt0ZB2hC7VaFUgOIeat5qJsGZ0VdV4QQ%2BxXm0UWzTCTGHzoerrq7lj4PyD3du75X8FA18a85KSdp3JkuFoGRXD39UszuojWjuSF%2B6zgV5cgCgr4G&X-Amz-Signature=b22fae218eb759b86577600bab329fb5fdeb07366ef89e5cea7b40637ab0c6e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5MTXBH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk8diJQ4gLXMJnrSLHqiDTNcBlgTpq9uZxR3K6338pyAiBIhawBBueSqtNmdDSjeA61%2FuOLz0XR85Dp5EHMcD54hyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlx8mhUuDVi3tXj5oKtwDe40OFXW52RiFhTGeNr8HCFA3TBLI4zV8oDP2mI3j4uwo5A5bM1Z%2FXLt3pAxTDL74Oz4ZznAfOAPomzEBAO4l9Q3vyhTBWu0PScYTsOQDR0tVFWv%2FvbpySxJtEqvbALL1rB05FRV%2FCd3jnnWkYx%2BLAREBLy828XDrHkYwbZgGGiz3XlAZsEl1BKNLu6MYOo%2FpuimwufAUWs6Z8QkTpOygH0RCV%2Boo5QrIaGbB4dZA7Oz9wpjNbvSY4HAwrTHMFKJqaHf%2FoSxya6BnCL2soY2m1zMBbE3LhyKKNdplgwuPQcZjEWb6LkeGm0IrpWSGq2N3JHO%2B0AU1DUQvKsflcOzxQL%2Fxnyxo1caBB5AFC%2Bel65veHK6vNcjafA0m1rd%2BULn5xZs3g29IvqemP0%2Fp0mFdsqKIbNIu6r1J5v9gLfOiwUMM7Qxq9QqFfSiSIw0CDxtcdJqhG%2FXj529gkRbECZZ9E073wYiV4JLmYmrocnNIUNzoULG20rcjhQ9Qf8dTgWiQ9hAwOkWu8qXCaLfrGfUOXMDcbtZn0ePsqDsAXJEPT8eV0gkpLGQKUJdfhTRtTyK%2F59WFCLf0%2F7kffMQo8JhcF4zqfEkBafT0vFWTUwwLiJEKSLHjQBmFQ8oEUqowmu6YwgY6pgEQkMolw1Qvdkk8xO1se3%2F2k5CJiAvXW%2BdFJon7J2VRj9tX4IaiZq3bHI6YpWsql8XdOijXPSUl7BkH09OIDze62nVoAmiGNkMVWoF745HamOALAt0ZB2hC7VaFUgOIeat5qJsGZ0VdV4QQ%2BxXm0UWzTCTGHzoerrq7lj4PyD3du75X8FA18a85KSdp3JkuFoGRXD39UszuojWjuSF%2B6zgV5cgCgr4G&X-Amz-Signature=86c363f3af1c129a6dce7afa859709cc993e1daaeaf5ac6e249d60660ee3e574&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5MTXBH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk8diJQ4gLXMJnrSLHqiDTNcBlgTpq9uZxR3K6338pyAiBIhawBBueSqtNmdDSjeA61%2FuOLz0XR85Dp5EHMcD54hyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlx8mhUuDVi3tXj5oKtwDe40OFXW52RiFhTGeNr8HCFA3TBLI4zV8oDP2mI3j4uwo5A5bM1Z%2FXLt3pAxTDL74Oz4ZznAfOAPomzEBAO4l9Q3vyhTBWu0PScYTsOQDR0tVFWv%2FvbpySxJtEqvbALL1rB05FRV%2FCd3jnnWkYx%2BLAREBLy828XDrHkYwbZgGGiz3XlAZsEl1BKNLu6MYOo%2FpuimwufAUWs6Z8QkTpOygH0RCV%2Boo5QrIaGbB4dZA7Oz9wpjNbvSY4HAwrTHMFKJqaHf%2FoSxya6BnCL2soY2m1zMBbE3LhyKKNdplgwuPQcZjEWb6LkeGm0IrpWSGq2N3JHO%2B0AU1DUQvKsflcOzxQL%2Fxnyxo1caBB5AFC%2Bel65veHK6vNcjafA0m1rd%2BULn5xZs3g29IvqemP0%2Fp0mFdsqKIbNIu6r1J5v9gLfOiwUMM7Qxq9QqFfSiSIw0CDxtcdJqhG%2FXj529gkRbECZZ9E073wYiV4JLmYmrocnNIUNzoULG20rcjhQ9Qf8dTgWiQ9hAwOkWu8qXCaLfrGfUOXMDcbtZn0ePsqDsAXJEPT8eV0gkpLGQKUJdfhTRtTyK%2F59WFCLf0%2F7kffMQo8JhcF4zqfEkBafT0vFWTUwwLiJEKSLHjQBmFQ8oEUqowmu6YwgY6pgEQkMolw1Qvdkk8xO1se3%2F2k5CJiAvXW%2BdFJon7J2VRj9tX4IaiZq3bHI6YpWsql8XdOijXPSUl7BkH09OIDze62nVoAmiGNkMVWoF745HamOALAt0ZB2hC7VaFUgOIeat5qJsGZ0VdV4QQ%2BxXm0UWzTCTGHzoerrq7lj4PyD3du75X8FA18a85KSdp3JkuFoGRXD39UszuojWjuSF%2B6zgV5cgCgr4G&X-Amz-Signature=06ed84c0a74cc8373da7ca148e4e09396b799fb51f234bae5982e40951761821&X-Amz-SignedHeaders=host&x-id=GetObject)
