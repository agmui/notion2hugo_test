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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVV7QGE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO7evfO4KBoqwepNRLeC%2FuGTzjzaaBO77NWGl3PcD4LwIgdKLQ%2Bc3S4n%2FYP621GeW8hOw4YxFlRjeXLjUxWr3g%2BYwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAVw2eghhDp4Dup%2BgSrcAxcmRo8cTFSk3gAuOUIHj9VnVJY3GLVW0uKFtp%2F6pBMs3HQdRQpYZxSPnjhd%2FNpeMCRiHUielNo80UWNt9%2BI7hmfxtAHFw7ZWWtuo4oxdbIygtm7wEHuxRDmMDvqWAajFlO6To2gD9oB%2FWK7NrSwHv88EuHzIX9FCbeEKtk6aaTuk%2FuYDNKeYATonKi%2BQrEy49r5m3cadEHZGHWUaMP27li8ZyLwJydpVFisabSkrD5v14154aivIFEGqmcbqY1JRu2Iu%2F5lb6GQGmk40iVYTpDsEt7AmFIqZDD90dAPtPc8vBRMMF6AwlRO5eRcGBLCSXdrgKDEaxx2dMmWljeQSbPk10X%2FpdzL3SquBo372vXXgzJULmKEmKkHVrjB5z%2FmL2yCb1%2BJapuVLzA516FNggiSe8j68ursgE5APeSwzQFYg1l7kp9U5h2VnyhtaABGOGKSric4wD%2B5BIIOeVnIz0orCOZibAAhNx%2FM%2FLB4mYzf033K3cau01c8m6qLj9XRJb%2Bi%2B4jZUAIB5FQXPJPfukl16XTH2xODz4SUf8z%2FfSX3vEP595gu34nGlUFgxG0e0LjTR5gEccyRWF6tdR%2F0anFwSf%2FQMZ8aER3IUYF%2BU2UA2Jyb8PBE07EJBBmPMPKVsMMGOqUB6nkXQwroQtJTEAvPsap18tE9SMfjXY0qXzUzEJKdfpma%2FXnx%2Fz%2F5vM9rdqCy7mmI8WZBqtnoAkY79AKLDwlS1UuqNbiiUWHsErxW1mAdmYqskkLwG5G%2B8izO%2FjG7wPcEHk4XFGJzehFm897smOIiGM3jqYET%2BEKLNKPPkQLnpw3uW%2FWmUXjSDHw9PvCn97pwCIOk%2FnEHylZEnMn%2FIynAFBh287oa&X-Amz-Signature=e428968d35d548e8b4df06e24e9cab778fed80f1d73335181c7fba6fc72477e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVV7QGE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO7evfO4KBoqwepNRLeC%2FuGTzjzaaBO77NWGl3PcD4LwIgdKLQ%2Bc3S4n%2FYP621GeW8hOw4YxFlRjeXLjUxWr3g%2BYwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAVw2eghhDp4Dup%2BgSrcAxcmRo8cTFSk3gAuOUIHj9VnVJY3GLVW0uKFtp%2F6pBMs3HQdRQpYZxSPnjhd%2FNpeMCRiHUielNo80UWNt9%2BI7hmfxtAHFw7ZWWtuo4oxdbIygtm7wEHuxRDmMDvqWAajFlO6To2gD9oB%2FWK7NrSwHv88EuHzIX9FCbeEKtk6aaTuk%2FuYDNKeYATonKi%2BQrEy49r5m3cadEHZGHWUaMP27li8ZyLwJydpVFisabSkrD5v14154aivIFEGqmcbqY1JRu2Iu%2F5lb6GQGmk40iVYTpDsEt7AmFIqZDD90dAPtPc8vBRMMF6AwlRO5eRcGBLCSXdrgKDEaxx2dMmWljeQSbPk10X%2FpdzL3SquBo372vXXgzJULmKEmKkHVrjB5z%2FmL2yCb1%2BJapuVLzA516FNggiSe8j68ursgE5APeSwzQFYg1l7kp9U5h2VnyhtaABGOGKSric4wD%2B5BIIOeVnIz0orCOZibAAhNx%2FM%2FLB4mYzf033K3cau01c8m6qLj9XRJb%2Bi%2B4jZUAIB5FQXPJPfukl16XTH2xODz4SUf8z%2FfSX3vEP595gu34nGlUFgxG0e0LjTR5gEccyRWF6tdR%2F0anFwSf%2FQMZ8aER3IUYF%2BU2UA2Jyb8PBE07EJBBmPMPKVsMMGOqUB6nkXQwroQtJTEAvPsap18tE9SMfjXY0qXzUzEJKdfpma%2FXnx%2Fz%2F5vM9rdqCy7mmI8WZBqtnoAkY79AKLDwlS1UuqNbiiUWHsErxW1mAdmYqskkLwG5G%2B8izO%2FjG7wPcEHk4XFGJzehFm897smOIiGM3jqYET%2BEKLNKPPkQLnpw3uW%2FWmUXjSDHw9PvCn97pwCIOk%2FnEHylZEnMn%2FIynAFBh287oa&X-Amz-Signature=bfba6d633f1684696933a93df36515f4edfc0def37f9ae3fc783d1dbf00dc0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVV7QGE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO7evfO4KBoqwepNRLeC%2FuGTzjzaaBO77NWGl3PcD4LwIgdKLQ%2Bc3S4n%2FYP621GeW8hOw4YxFlRjeXLjUxWr3g%2BYwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAVw2eghhDp4Dup%2BgSrcAxcmRo8cTFSk3gAuOUIHj9VnVJY3GLVW0uKFtp%2F6pBMs3HQdRQpYZxSPnjhd%2FNpeMCRiHUielNo80UWNt9%2BI7hmfxtAHFw7ZWWtuo4oxdbIygtm7wEHuxRDmMDvqWAajFlO6To2gD9oB%2FWK7NrSwHv88EuHzIX9FCbeEKtk6aaTuk%2FuYDNKeYATonKi%2BQrEy49r5m3cadEHZGHWUaMP27li8ZyLwJydpVFisabSkrD5v14154aivIFEGqmcbqY1JRu2Iu%2F5lb6GQGmk40iVYTpDsEt7AmFIqZDD90dAPtPc8vBRMMF6AwlRO5eRcGBLCSXdrgKDEaxx2dMmWljeQSbPk10X%2FpdzL3SquBo372vXXgzJULmKEmKkHVrjB5z%2FmL2yCb1%2BJapuVLzA516FNggiSe8j68ursgE5APeSwzQFYg1l7kp9U5h2VnyhtaABGOGKSric4wD%2B5BIIOeVnIz0orCOZibAAhNx%2FM%2FLB4mYzf033K3cau01c8m6qLj9XRJb%2Bi%2B4jZUAIB5FQXPJPfukl16XTH2xODz4SUf8z%2FfSX3vEP595gu34nGlUFgxG0e0LjTR5gEccyRWF6tdR%2F0anFwSf%2FQMZ8aER3IUYF%2BU2UA2Jyb8PBE07EJBBmPMPKVsMMGOqUB6nkXQwroQtJTEAvPsap18tE9SMfjXY0qXzUzEJKdfpma%2FXnx%2Fz%2F5vM9rdqCy7mmI8WZBqtnoAkY79AKLDwlS1UuqNbiiUWHsErxW1mAdmYqskkLwG5G%2B8izO%2FjG7wPcEHk4XFGJzehFm897smOIiGM3jqYET%2BEKLNKPPkQLnpw3uW%2FWmUXjSDHw9PvCn97pwCIOk%2FnEHylZEnMn%2FIynAFBh287oa&X-Amz-Signature=8ac160ecb849e58914cc79cfe234f3319cb3d4e282d4675267bc3c096b4c0114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVV7QGE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO7evfO4KBoqwepNRLeC%2FuGTzjzaaBO77NWGl3PcD4LwIgdKLQ%2Bc3S4n%2FYP621GeW8hOw4YxFlRjeXLjUxWr3g%2BYwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAVw2eghhDp4Dup%2BgSrcAxcmRo8cTFSk3gAuOUIHj9VnVJY3GLVW0uKFtp%2F6pBMs3HQdRQpYZxSPnjhd%2FNpeMCRiHUielNo80UWNt9%2BI7hmfxtAHFw7ZWWtuo4oxdbIygtm7wEHuxRDmMDvqWAajFlO6To2gD9oB%2FWK7NrSwHv88EuHzIX9FCbeEKtk6aaTuk%2FuYDNKeYATonKi%2BQrEy49r5m3cadEHZGHWUaMP27li8ZyLwJydpVFisabSkrD5v14154aivIFEGqmcbqY1JRu2Iu%2F5lb6GQGmk40iVYTpDsEt7AmFIqZDD90dAPtPc8vBRMMF6AwlRO5eRcGBLCSXdrgKDEaxx2dMmWljeQSbPk10X%2FpdzL3SquBo372vXXgzJULmKEmKkHVrjB5z%2FmL2yCb1%2BJapuVLzA516FNggiSe8j68ursgE5APeSwzQFYg1l7kp9U5h2VnyhtaABGOGKSric4wD%2B5BIIOeVnIz0orCOZibAAhNx%2FM%2FLB4mYzf033K3cau01c8m6qLj9XRJb%2Bi%2B4jZUAIB5FQXPJPfukl16XTH2xODz4SUf8z%2FfSX3vEP595gu34nGlUFgxG0e0LjTR5gEccyRWF6tdR%2F0anFwSf%2FQMZ8aER3IUYF%2BU2UA2Jyb8PBE07EJBBmPMPKVsMMGOqUB6nkXQwroQtJTEAvPsap18tE9SMfjXY0qXzUzEJKdfpma%2FXnx%2Fz%2F5vM9rdqCy7mmI8WZBqtnoAkY79AKLDwlS1UuqNbiiUWHsErxW1mAdmYqskkLwG5G%2B8izO%2FjG7wPcEHk4XFGJzehFm897smOIiGM3jqYET%2BEKLNKPPkQLnpw3uW%2FWmUXjSDHw9PvCn97pwCIOk%2FnEHylZEnMn%2FIynAFBh287oa&X-Amz-Signature=6256ec5a783a3c8b3ac8f650d73deb107fb9174b2ea6452422a80e08f6955d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVV7QGE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO7evfO4KBoqwepNRLeC%2FuGTzjzaaBO77NWGl3PcD4LwIgdKLQ%2Bc3S4n%2FYP621GeW8hOw4YxFlRjeXLjUxWr3g%2BYwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAVw2eghhDp4Dup%2BgSrcAxcmRo8cTFSk3gAuOUIHj9VnVJY3GLVW0uKFtp%2F6pBMs3HQdRQpYZxSPnjhd%2FNpeMCRiHUielNo80UWNt9%2BI7hmfxtAHFw7ZWWtuo4oxdbIygtm7wEHuxRDmMDvqWAajFlO6To2gD9oB%2FWK7NrSwHv88EuHzIX9FCbeEKtk6aaTuk%2FuYDNKeYATonKi%2BQrEy49r5m3cadEHZGHWUaMP27li8ZyLwJydpVFisabSkrD5v14154aivIFEGqmcbqY1JRu2Iu%2F5lb6GQGmk40iVYTpDsEt7AmFIqZDD90dAPtPc8vBRMMF6AwlRO5eRcGBLCSXdrgKDEaxx2dMmWljeQSbPk10X%2FpdzL3SquBo372vXXgzJULmKEmKkHVrjB5z%2FmL2yCb1%2BJapuVLzA516FNggiSe8j68ursgE5APeSwzQFYg1l7kp9U5h2VnyhtaABGOGKSric4wD%2B5BIIOeVnIz0orCOZibAAhNx%2FM%2FLB4mYzf033K3cau01c8m6qLj9XRJb%2Bi%2B4jZUAIB5FQXPJPfukl16XTH2xODz4SUf8z%2FfSX3vEP595gu34nGlUFgxG0e0LjTR5gEccyRWF6tdR%2F0anFwSf%2FQMZ8aER3IUYF%2BU2UA2Jyb8PBE07EJBBmPMPKVsMMGOqUB6nkXQwroQtJTEAvPsap18tE9SMfjXY0qXzUzEJKdfpma%2FXnx%2Fz%2F5vM9rdqCy7mmI8WZBqtnoAkY79AKLDwlS1UuqNbiiUWHsErxW1mAdmYqskkLwG5G%2B8izO%2FjG7wPcEHk4XFGJzehFm897smOIiGM3jqYET%2BEKLNKPPkQLnpw3uW%2FWmUXjSDHw9PvCn97pwCIOk%2FnEHylZEnMn%2FIynAFBh287oa&X-Amz-Signature=c9bf7b8eb535f5670179613bb9d6edd8898e3389c9900eb9858d8a95cc67d20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVV7QGE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDO7evfO4KBoqwepNRLeC%2FuGTzjzaaBO77NWGl3PcD4LwIgdKLQ%2Bc3S4n%2FYP621GeW8hOw4YxFlRjeXLjUxWr3g%2BYwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAVw2eghhDp4Dup%2BgSrcAxcmRo8cTFSk3gAuOUIHj9VnVJY3GLVW0uKFtp%2F6pBMs3HQdRQpYZxSPnjhd%2FNpeMCRiHUielNo80UWNt9%2BI7hmfxtAHFw7ZWWtuo4oxdbIygtm7wEHuxRDmMDvqWAajFlO6To2gD9oB%2FWK7NrSwHv88EuHzIX9FCbeEKtk6aaTuk%2FuYDNKeYATonKi%2BQrEy49r5m3cadEHZGHWUaMP27li8ZyLwJydpVFisabSkrD5v14154aivIFEGqmcbqY1JRu2Iu%2F5lb6GQGmk40iVYTpDsEt7AmFIqZDD90dAPtPc8vBRMMF6AwlRO5eRcGBLCSXdrgKDEaxx2dMmWljeQSbPk10X%2FpdzL3SquBo372vXXgzJULmKEmKkHVrjB5z%2FmL2yCb1%2BJapuVLzA516FNggiSe8j68ursgE5APeSwzQFYg1l7kp9U5h2VnyhtaABGOGKSric4wD%2B5BIIOeVnIz0orCOZibAAhNx%2FM%2FLB4mYzf033K3cau01c8m6qLj9XRJb%2Bi%2B4jZUAIB5FQXPJPfukl16XTH2xODz4SUf8z%2FfSX3vEP595gu34nGlUFgxG0e0LjTR5gEccyRWF6tdR%2F0anFwSf%2FQMZ8aER3IUYF%2BU2UA2Jyb8PBE07EJBBmPMPKVsMMGOqUB6nkXQwroQtJTEAvPsap18tE9SMfjXY0qXzUzEJKdfpma%2FXnx%2Fz%2F5vM9rdqCy7mmI8WZBqtnoAkY79AKLDwlS1UuqNbiiUWHsErxW1mAdmYqskkLwG5G%2B8izO%2FjG7wPcEHk4XFGJzehFm897smOIiGM3jqYET%2BEKLNKPPkQLnpw3uW%2FWmUXjSDHw9PvCn97pwCIOk%2FnEHylZEnMn%2FIynAFBh287oa&X-Amz-Signature=5869e2e5129168f3b371fdd1deb76136ab563fa40cc2efa6e26e678460bfbd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
