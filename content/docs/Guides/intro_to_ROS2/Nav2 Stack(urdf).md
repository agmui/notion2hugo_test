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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIMT3SS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCD5RU4J%2FAgVmqsIpJu%2FoNpt73cWPT78Df9NmVbzN%2BdLgIhAKSkeE6vYBCq2ZRhaTZ3Vaah2TTk3Dp4IE2QOBx2Sem7Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyF7E7KiC%2BDC3FDA0Yq3AOpT14vedLoApQBLlxjdQD4BB27w4m8pDZzFp%2FRlALPAPieD8Q%2BaWayRdP1a5svLnxQYwgyLBRB3iZ%2BLHVDNe8gknrJ0CPqvJS65dTH6Umnl7SOJHzeCDF5QtqeR0bPvNKyO9WagWWP9LLMSK4OE7O4x7aALBaI1LP9bt3%2BulkTyleAM9ls4%2FmlRKo9Lrncpf5BMRrCeje7ysd99donKp1gFGo4jTmWoML1FSsbUiGnMpXOvAEsv8jIOEKNXqk7fw%2BnUG8y1y7at%2FLKX6CIPtPvRTss8kOE0Br1VGg%2FoeXyg6dTezJk93tb9XnMjQdb%2BCiKDaHQ7gSqyvcufuMEGgaA6E7ogLVIWufaRDrS66jjxSwXgo%2BOsNlrdxiqyFWTurrjNooH4r3xCGcWe9OhJyLfkhvT97rmZo5rqnfngbio5%2FnG%2FFtJSGhoVIV2NkWUYXrHBsTvXRyzRFZHJtwWC%2BHE0G4%2FeyPl5s263CJE5zZ2%2Fj8iOKUuMyDIjdqmn8PWrPQL7DJqCz3x0qP9%2FrwXyOlXcLFboA7Obn4WxdKhQueo1uHv22x4ZtCI7V%2FvBjV3OfeCV9CxY76FREeZcpZ0ZPaUUsPmFJcs1HBf%2FeQZJo8kCBcArdVFa2bo0m5lQDCL1PnCBjqkAYthKBtWsOcHM5xFL4VsaeFOGPJftKWIqOgZoCMMFYthCv8vdzsotVAMm3Te3FJfXvstrYtFzBOGRYKwzFqgl%2Fp71FmvP3XXLENBIaU2jPAg4yRMwN3rR7kTlVa9KMiVALNYLGv%2F4FLAaddJuYBHHa2A6FSAka2%2Bh%2FSZD07EF%2F2smXDFXRT2Y53ZlJMqv6t10Q9pfDzDnofB8hDYIEEMRX03bJWv&X-Amz-Signature=d826bdbda9f2312369c68627f607d8c354da5eb574d8ee75dc4d10f2a9f746cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIMT3SS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCD5RU4J%2FAgVmqsIpJu%2FoNpt73cWPT78Df9NmVbzN%2BdLgIhAKSkeE6vYBCq2ZRhaTZ3Vaah2TTk3Dp4IE2QOBx2Sem7Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyF7E7KiC%2BDC3FDA0Yq3AOpT14vedLoApQBLlxjdQD4BB27w4m8pDZzFp%2FRlALPAPieD8Q%2BaWayRdP1a5svLnxQYwgyLBRB3iZ%2BLHVDNe8gknrJ0CPqvJS65dTH6Umnl7SOJHzeCDF5QtqeR0bPvNKyO9WagWWP9LLMSK4OE7O4x7aALBaI1LP9bt3%2BulkTyleAM9ls4%2FmlRKo9Lrncpf5BMRrCeje7ysd99donKp1gFGo4jTmWoML1FSsbUiGnMpXOvAEsv8jIOEKNXqk7fw%2BnUG8y1y7at%2FLKX6CIPtPvRTss8kOE0Br1VGg%2FoeXyg6dTezJk93tb9XnMjQdb%2BCiKDaHQ7gSqyvcufuMEGgaA6E7ogLVIWufaRDrS66jjxSwXgo%2BOsNlrdxiqyFWTurrjNooH4r3xCGcWe9OhJyLfkhvT97rmZo5rqnfngbio5%2FnG%2FFtJSGhoVIV2NkWUYXrHBsTvXRyzRFZHJtwWC%2BHE0G4%2FeyPl5s263CJE5zZ2%2Fj8iOKUuMyDIjdqmn8PWrPQL7DJqCz3x0qP9%2FrwXyOlXcLFboA7Obn4WxdKhQueo1uHv22x4ZtCI7V%2FvBjV3OfeCV9CxY76FREeZcpZ0ZPaUUsPmFJcs1HBf%2FeQZJo8kCBcArdVFa2bo0m5lQDCL1PnCBjqkAYthKBtWsOcHM5xFL4VsaeFOGPJftKWIqOgZoCMMFYthCv8vdzsotVAMm3Te3FJfXvstrYtFzBOGRYKwzFqgl%2Fp71FmvP3XXLENBIaU2jPAg4yRMwN3rR7kTlVa9KMiVALNYLGv%2F4FLAaddJuYBHHa2A6FSAka2%2Bh%2FSZD07EF%2F2smXDFXRT2Y53ZlJMqv6t10Q9pfDzDnofB8hDYIEEMRX03bJWv&X-Amz-Signature=2a0a4594232325b6b2dba0fc70ee16b15dd6ecf6b9f0aaa5f4f84f0034a30909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIMT3SS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCD5RU4J%2FAgVmqsIpJu%2FoNpt73cWPT78Df9NmVbzN%2BdLgIhAKSkeE6vYBCq2ZRhaTZ3Vaah2TTk3Dp4IE2QOBx2Sem7Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyF7E7KiC%2BDC3FDA0Yq3AOpT14vedLoApQBLlxjdQD4BB27w4m8pDZzFp%2FRlALPAPieD8Q%2BaWayRdP1a5svLnxQYwgyLBRB3iZ%2BLHVDNe8gknrJ0CPqvJS65dTH6Umnl7SOJHzeCDF5QtqeR0bPvNKyO9WagWWP9LLMSK4OE7O4x7aALBaI1LP9bt3%2BulkTyleAM9ls4%2FmlRKo9Lrncpf5BMRrCeje7ysd99donKp1gFGo4jTmWoML1FSsbUiGnMpXOvAEsv8jIOEKNXqk7fw%2BnUG8y1y7at%2FLKX6CIPtPvRTss8kOE0Br1VGg%2FoeXyg6dTezJk93tb9XnMjQdb%2BCiKDaHQ7gSqyvcufuMEGgaA6E7ogLVIWufaRDrS66jjxSwXgo%2BOsNlrdxiqyFWTurrjNooH4r3xCGcWe9OhJyLfkhvT97rmZo5rqnfngbio5%2FnG%2FFtJSGhoVIV2NkWUYXrHBsTvXRyzRFZHJtwWC%2BHE0G4%2FeyPl5s263CJE5zZ2%2Fj8iOKUuMyDIjdqmn8PWrPQL7DJqCz3x0qP9%2FrwXyOlXcLFboA7Obn4WxdKhQueo1uHv22x4ZtCI7V%2FvBjV3OfeCV9CxY76FREeZcpZ0ZPaUUsPmFJcs1HBf%2FeQZJo8kCBcArdVFa2bo0m5lQDCL1PnCBjqkAYthKBtWsOcHM5xFL4VsaeFOGPJftKWIqOgZoCMMFYthCv8vdzsotVAMm3Te3FJfXvstrYtFzBOGRYKwzFqgl%2Fp71FmvP3XXLENBIaU2jPAg4yRMwN3rR7kTlVa9KMiVALNYLGv%2F4FLAaddJuYBHHa2A6FSAka2%2Bh%2FSZD07EF%2F2smXDFXRT2Y53ZlJMqv6t10Q9pfDzDnofB8hDYIEEMRX03bJWv&X-Amz-Signature=458fa622b8f757d07c3da7ba02df04b44aeb16dcc1b34bad2d4ac00073df664d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIMT3SS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCD5RU4J%2FAgVmqsIpJu%2FoNpt73cWPT78Df9NmVbzN%2BdLgIhAKSkeE6vYBCq2ZRhaTZ3Vaah2TTk3Dp4IE2QOBx2Sem7Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyF7E7KiC%2BDC3FDA0Yq3AOpT14vedLoApQBLlxjdQD4BB27w4m8pDZzFp%2FRlALPAPieD8Q%2BaWayRdP1a5svLnxQYwgyLBRB3iZ%2BLHVDNe8gknrJ0CPqvJS65dTH6Umnl7SOJHzeCDF5QtqeR0bPvNKyO9WagWWP9LLMSK4OE7O4x7aALBaI1LP9bt3%2BulkTyleAM9ls4%2FmlRKo9Lrncpf5BMRrCeje7ysd99donKp1gFGo4jTmWoML1FSsbUiGnMpXOvAEsv8jIOEKNXqk7fw%2BnUG8y1y7at%2FLKX6CIPtPvRTss8kOE0Br1VGg%2FoeXyg6dTezJk93tb9XnMjQdb%2BCiKDaHQ7gSqyvcufuMEGgaA6E7ogLVIWufaRDrS66jjxSwXgo%2BOsNlrdxiqyFWTurrjNooH4r3xCGcWe9OhJyLfkhvT97rmZo5rqnfngbio5%2FnG%2FFtJSGhoVIV2NkWUYXrHBsTvXRyzRFZHJtwWC%2BHE0G4%2FeyPl5s263CJE5zZ2%2Fj8iOKUuMyDIjdqmn8PWrPQL7DJqCz3x0qP9%2FrwXyOlXcLFboA7Obn4WxdKhQueo1uHv22x4ZtCI7V%2FvBjV3OfeCV9CxY76FREeZcpZ0ZPaUUsPmFJcs1HBf%2FeQZJo8kCBcArdVFa2bo0m5lQDCL1PnCBjqkAYthKBtWsOcHM5xFL4VsaeFOGPJftKWIqOgZoCMMFYthCv8vdzsotVAMm3Te3FJfXvstrYtFzBOGRYKwzFqgl%2Fp71FmvP3XXLENBIaU2jPAg4yRMwN3rR7kTlVa9KMiVALNYLGv%2F4FLAaddJuYBHHa2A6FSAka2%2Bh%2FSZD07EF%2F2smXDFXRT2Y53ZlJMqv6t10Q9pfDzDnofB8hDYIEEMRX03bJWv&X-Amz-Signature=351bb2fe47a48acf042cb2021e072d9dd3e1d9732b0c4e1c9a896a6bf66f9bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIMT3SS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCD5RU4J%2FAgVmqsIpJu%2FoNpt73cWPT78Df9NmVbzN%2BdLgIhAKSkeE6vYBCq2ZRhaTZ3Vaah2TTk3Dp4IE2QOBx2Sem7Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyF7E7KiC%2BDC3FDA0Yq3AOpT14vedLoApQBLlxjdQD4BB27w4m8pDZzFp%2FRlALPAPieD8Q%2BaWayRdP1a5svLnxQYwgyLBRB3iZ%2BLHVDNe8gknrJ0CPqvJS65dTH6Umnl7SOJHzeCDF5QtqeR0bPvNKyO9WagWWP9LLMSK4OE7O4x7aALBaI1LP9bt3%2BulkTyleAM9ls4%2FmlRKo9Lrncpf5BMRrCeje7ysd99donKp1gFGo4jTmWoML1FSsbUiGnMpXOvAEsv8jIOEKNXqk7fw%2BnUG8y1y7at%2FLKX6CIPtPvRTss8kOE0Br1VGg%2FoeXyg6dTezJk93tb9XnMjQdb%2BCiKDaHQ7gSqyvcufuMEGgaA6E7ogLVIWufaRDrS66jjxSwXgo%2BOsNlrdxiqyFWTurrjNooH4r3xCGcWe9OhJyLfkhvT97rmZo5rqnfngbio5%2FnG%2FFtJSGhoVIV2NkWUYXrHBsTvXRyzRFZHJtwWC%2BHE0G4%2FeyPl5s263CJE5zZ2%2Fj8iOKUuMyDIjdqmn8PWrPQL7DJqCz3x0qP9%2FrwXyOlXcLFboA7Obn4WxdKhQueo1uHv22x4ZtCI7V%2FvBjV3OfeCV9CxY76FREeZcpZ0ZPaUUsPmFJcs1HBf%2FeQZJo8kCBcArdVFa2bo0m5lQDCL1PnCBjqkAYthKBtWsOcHM5xFL4VsaeFOGPJftKWIqOgZoCMMFYthCv8vdzsotVAMm3Te3FJfXvstrYtFzBOGRYKwzFqgl%2Fp71FmvP3XXLENBIaU2jPAg4yRMwN3rR7kTlVa9KMiVALNYLGv%2F4FLAaddJuYBHHa2A6FSAka2%2Bh%2FSZD07EF%2F2smXDFXRT2Y53ZlJMqv6t10Q9pfDzDnofB8hDYIEEMRX03bJWv&X-Amz-Signature=961c21f1f5593abf5846311965d5cf9e0c250c66e9e34afa77787ba5205423f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGIMT3SS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCD5RU4J%2FAgVmqsIpJu%2FoNpt73cWPT78Df9NmVbzN%2BdLgIhAKSkeE6vYBCq2ZRhaTZ3Vaah2TTk3Dp4IE2QOBx2Sem7Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyF7E7KiC%2BDC3FDA0Yq3AOpT14vedLoApQBLlxjdQD4BB27w4m8pDZzFp%2FRlALPAPieD8Q%2BaWayRdP1a5svLnxQYwgyLBRB3iZ%2BLHVDNe8gknrJ0CPqvJS65dTH6Umnl7SOJHzeCDF5QtqeR0bPvNKyO9WagWWP9LLMSK4OE7O4x7aALBaI1LP9bt3%2BulkTyleAM9ls4%2FmlRKo9Lrncpf5BMRrCeje7ysd99donKp1gFGo4jTmWoML1FSsbUiGnMpXOvAEsv8jIOEKNXqk7fw%2BnUG8y1y7at%2FLKX6CIPtPvRTss8kOE0Br1VGg%2FoeXyg6dTezJk93tb9XnMjQdb%2BCiKDaHQ7gSqyvcufuMEGgaA6E7ogLVIWufaRDrS66jjxSwXgo%2BOsNlrdxiqyFWTurrjNooH4r3xCGcWe9OhJyLfkhvT97rmZo5rqnfngbio5%2FnG%2FFtJSGhoVIV2NkWUYXrHBsTvXRyzRFZHJtwWC%2BHE0G4%2FeyPl5s263CJE5zZ2%2Fj8iOKUuMyDIjdqmn8PWrPQL7DJqCz3x0qP9%2FrwXyOlXcLFboA7Obn4WxdKhQueo1uHv22x4ZtCI7V%2FvBjV3OfeCV9CxY76FREeZcpZ0ZPaUUsPmFJcs1HBf%2FeQZJo8kCBcArdVFa2bo0m5lQDCL1PnCBjqkAYthKBtWsOcHM5xFL4VsaeFOGPJftKWIqOgZoCMMFYthCv8vdzsotVAMm3Te3FJfXvstrYtFzBOGRYKwzFqgl%2Fp71FmvP3XXLENBIaU2jPAg4yRMwN3rR7kTlVa9KMiVALNYLGv%2F4FLAaddJuYBHHa2A6FSAka2%2Bh%2FSZD07EF%2F2smXDFXRT2Y53ZlJMqv6t10Q9pfDzDnofB8hDYIEEMRX03bJWv&X-Amz-Signature=b684596038797a46b4dfe965e20a57506ced4b274c8bd04c276a69b9c11626b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
