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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WD2NXM6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWONyjItHy16yuIzi6X7AWL1hYOYMJT7VHybgvshgEGgIgZdt70LfqoJvZy5ClSAf6zuwz7n94nAJgDtJ3eTXXUn8q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDNuOeXuDNux5eqFlzircAzaNdGkchvsAf2raIgf6LIMj9FBz6MAzXOoBDNsntbesONkvMXfxZRNPGKdgoGiWutGJhPVogZQkAtU1%2FH6rih3%2FG2BCD%2Fn6L0TGSca49vBJ1GzjUCLzh5cBuN%2Ft9gjSxs3xKEkP6xeKSxRGPuVPv%2F5gKs9O49sP7uTfFhpNWpXtGIRh7vgTfJy%2FE91mditXGiT87bBBgcoEtQ9hREslMfX9fYOGHHwoHlH5pAUpes8sRfXHOh0f9UC%2Fj%2FREEryHVqKl22OMBrmMu%2FbCn2REFeE7YnJ0c3ytZW3QAmBTq4MJwM7UOBV0nPwhGZI6ubat7OkwGfE4CJuWCkSbM5%2BjggbD2OfS6PEsXNyBX7CTbFBXRlQWhcAMNq2Mx3AGMVZKBPIL4NChjKOQLaxmufh1IfaAg0EJGYlKhH1E0rqT30Spvvd0YkN5j8zUUZnUlDIWcgseySPcgLNDDJ%2BneaIbFFSNH8c0XCFM7nkFvlV0FQuUwVRXeP9n2WWQdh%2FwQmftmw64QaswWT2huEZscs%2FSesMgv9t6z5jO9CpwDzGTKv5Fq0Tpkm30ynhpePiKkxjjOyUk7H2dr9jTcavRXypRGRjUfpO7ysQud1e1mi1rQaA5nOG5Lx5XXVRznSpxMM3m7L0GOqUB7bnr3L6LGURyO8P%2Bf33Drb5Mo9eKwoVZAAbY47IafSKSV2wKyNpdm9rTcFUYK0Qp5f1OyKcTZnYK4TsksXOCZgjfIKY6z0fs%2Fd%2BU2HcItNAssFpAqNWFZSZnlmxV%2BxF0HFoz25WRPYisopuaitfWy5md3CwWa9xz%2F5TtaFVm898Hkkyou%2BdANcyQcwsO1%2FMgdK9ZZj6qY2555ZtnlyslW2sUeTKN&X-Amz-Signature=50951b2c64077face9f497d7cacb2c816937bc49683e26b7cfbc45bf12d5a4a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WD2NXM6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWONyjItHy16yuIzi6X7AWL1hYOYMJT7VHybgvshgEGgIgZdt70LfqoJvZy5ClSAf6zuwz7n94nAJgDtJ3eTXXUn8q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDNuOeXuDNux5eqFlzircAzaNdGkchvsAf2raIgf6LIMj9FBz6MAzXOoBDNsntbesONkvMXfxZRNPGKdgoGiWutGJhPVogZQkAtU1%2FH6rih3%2FG2BCD%2Fn6L0TGSca49vBJ1GzjUCLzh5cBuN%2Ft9gjSxs3xKEkP6xeKSxRGPuVPv%2F5gKs9O49sP7uTfFhpNWpXtGIRh7vgTfJy%2FE91mditXGiT87bBBgcoEtQ9hREslMfX9fYOGHHwoHlH5pAUpes8sRfXHOh0f9UC%2Fj%2FREEryHVqKl22OMBrmMu%2FbCn2REFeE7YnJ0c3ytZW3QAmBTq4MJwM7UOBV0nPwhGZI6ubat7OkwGfE4CJuWCkSbM5%2BjggbD2OfS6PEsXNyBX7CTbFBXRlQWhcAMNq2Mx3AGMVZKBPIL4NChjKOQLaxmufh1IfaAg0EJGYlKhH1E0rqT30Spvvd0YkN5j8zUUZnUlDIWcgseySPcgLNDDJ%2BneaIbFFSNH8c0XCFM7nkFvlV0FQuUwVRXeP9n2WWQdh%2FwQmftmw64QaswWT2huEZscs%2FSesMgv9t6z5jO9CpwDzGTKv5Fq0Tpkm30ynhpePiKkxjjOyUk7H2dr9jTcavRXypRGRjUfpO7ysQud1e1mi1rQaA5nOG5Lx5XXVRznSpxMM3m7L0GOqUB7bnr3L6LGURyO8P%2Bf33Drb5Mo9eKwoVZAAbY47IafSKSV2wKyNpdm9rTcFUYK0Qp5f1OyKcTZnYK4TsksXOCZgjfIKY6z0fs%2Fd%2BU2HcItNAssFpAqNWFZSZnlmxV%2BxF0HFoz25WRPYisopuaitfWy5md3CwWa9xz%2F5TtaFVm898Hkkyou%2BdANcyQcwsO1%2FMgdK9ZZj6qY2555ZtnlyslW2sUeTKN&X-Amz-Signature=b4855d1f6cafa296377fb3e3ff852c3c0429d6dc94b39c06fd2857302131f719&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WD2NXM6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWONyjItHy16yuIzi6X7AWL1hYOYMJT7VHybgvshgEGgIgZdt70LfqoJvZy5ClSAf6zuwz7n94nAJgDtJ3eTXXUn8q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDNuOeXuDNux5eqFlzircAzaNdGkchvsAf2raIgf6LIMj9FBz6MAzXOoBDNsntbesONkvMXfxZRNPGKdgoGiWutGJhPVogZQkAtU1%2FH6rih3%2FG2BCD%2Fn6L0TGSca49vBJ1GzjUCLzh5cBuN%2Ft9gjSxs3xKEkP6xeKSxRGPuVPv%2F5gKs9O49sP7uTfFhpNWpXtGIRh7vgTfJy%2FE91mditXGiT87bBBgcoEtQ9hREslMfX9fYOGHHwoHlH5pAUpes8sRfXHOh0f9UC%2Fj%2FREEryHVqKl22OMBrmMu%2FbCn2REFeE7YnJ0c3ytZW3QAmBTq4MJwM7UOBV0nPwhGZI6ubat7OkwGfE4CJuWCkSbM5%2BjggbD2OfS6PEsXNyBX7CTbFBXRlQWhcAMNq2Mx3AGMVZKBPIL4NChjKOQLaxmufh1IfaAg0EJGYlKhH1E0rqT30Spvvd0YkN5j8zUUZnUlDIWcgseySPcgLNDDJ%2BneaIbFFSNH8c0XCFM7nkFvlV0FQuUwVRXeP9n2WWQdh%2FwQmftmw64QaswWT2huEZscs%2FSesMgv9t6z5jO9CpwDzGTKv5Fq0Tpkm30ynhpePiKkxjjOyUk7H2dr9jTcavRXypRGRjUfpO7ysQud1e1mi1rQaA5nOG5Lx5XXVRznSpxMM3m7L0GOqUB7bnr3L6LGURyO8P%2Bf33Drb5Mo9eKwoVZAAbY47IafSKSV2wKyNpdm9rTcFUYK0Qp5f1OyKcTZnYK4TsksXOCZgjfIKY6z0fs%2Fd%2BU2HcItNAssFpAqNWFZSZnlmxV%2BxF0HFoz25WRPYisopuaitfWy5md3CwWa9xz%2F5TtaFVm898Hkkyou%2BdANcyQcwsO1%2FMgdK9ZZj6qY2555ZtnlyslW2sUeTKN&X-Amz-Signature=78f056b7290e614fc7cb63b5d974ba2bf765a16e171ad216b12191d8ebe28031&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WD2NXM6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWONyjItHy16yuIzi6X7AWL1hYOYMJT7VHybgvshgEGgIgZdt70LfqoJvZy5ClSAf6zuwz7n94nAJgDtJ3eTXXUn8q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDNuOeXuDNux5eqFlzircAzaNdGkchvsAf2raIgf6LIMj9FBz6MAzXOoBDNsntbesONkvMXfxZRNPGKdgoGiWutGJhPVogZQkAtU1%2FH6rih3%2FG2BCD%2Fn6L0TGSca49vBJ1GzjUCLzh5cBuN%2Ft9gjSxs3xKEkP6xeKSxRGPuVPv%2F5gKs9O49sP7uTfFhpNWpXtGIRh7vgTfJy%2FE91mditXGiT87bBBgcoEtQ9hREslMfX9fYOGHHwoHlH5pAUpes8sRfXHOh0f9UC%2Fj%2FREEryHVqKl22OMBrmMu%2FbCn2REFeE7YnJ0c3ytZW3QAmBTq4MJwM7UOBV0nPwhGZI6ubat7OkwGfE4CJuWCkSbM5%2BjggbD2OfS6PEsXNyBX7CTbFBXRlQWhcAMNq2Mx3AGMVZKBPIL4NChjKOQLaxmufh1IfaAg0EJGYlKhH1E0rqT30Spvvd0YkN5j8zUUZnUlDIWcgseySPcgLNDDJ%2BneaIbFFSNH8c0XCFM7nkFvlV0FQuUwVRXeP9n2WWQdh%2FwQmftmw64QaswWT2huEZscs%2FSesMgv9t6z5jO9CpwDzGTKv5Fq0Tpkm30ynhpePiKkxjjOyUk7H2dr9jTcavRXypRGRjUfpO7ysQud1e1mi1rQaA5nOG5Lx5XXVRznSpxMM3m7L0GOqUB7bnr3L6LGURyO8P%2Bf33Drb5Mo9eKwoVZAAbY47IafSKSV2wKyNpdm9rTcFUYK0Qp5f1OyKcTZnYK4TsksXOCZgjfIKY6z0fs%2Fd%2BU2HcItNAssFpAqNWFZSZnlmxV%2BxF0HFoz25WRPYisopuaitfWy5md3CwWa9xz%2F5TtaFVm898Hkkyou%2BdANcyQcwsO1%2FMgdK9ZZj6qY2555ZtnlyslW2sUeTKN&X-Amz-Signature=b96a14c16ab32400082ca91085d9baddbef37d5c8aa8e2f7091ed8186d4dddef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WD2NXM6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWONyjItHy16yuIzi6X7AWL1hYOYMJT7VHybgvshgEGgIgZdt70LfqoJvZy5ClSAf6zuwz7n94nAJgDtJ3eTXXUn8q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDNuOeXuDNux5eqFlzircAzaNdGkchvsAf2raIgf6LIMj9FBz6MAzXOoBDNsntbesONkvMXfxZRNPGKdgoGiWutGJhPVogZQkAtU1%2FH6rih3%2FG2BCD%2Fn6L0TGSca49vBJ1GzjUCLzh5cBuN%2Ft9gjSxs3xKEkP6xeKSxRGPuVPv%2F5gKs9O49sP7uTfFhpNWpXtGIRh7vgTfJy%2FE91mditXGiT87bBBgcoEtQ9hREslMfX9fYOGHHwoHlH5pAUpes8sRfXHOh0f9UC%2Fj%2FREEryHVqKl22OMBrmMu%2FbCn2REFeE7YnJ0c3ytZW3QAmBTq4MJwM7UOBV0nPwhGZI6ubat7OkwGfE4CJuWCkSbM5%2BjggbD2OfS6PEsXNyBX7CTbFBXRlQWhcAMNq2Mx3AGMVZKBPIL4NChjKOQLaxmufh1IfaAg0EJGYlKhH1E0rqT30Spvvd0YkN5j8zUUZnUlDIWcgseySPcgLNDDJ%2BneaIbFFSNH8c0XCFM7nkFvlV0FQuUwVRXeP9n2WWQdh%2FwQmftmw64QaswWT2huEZscs%2FSesMgv9t6z5jO9CpwDzGTKv5Fq0Tpkm30ynhpePiKkxjjOyUk7H2dr9jTcavRXypRGRjUfpO7ysQud1e1mi1rQaA5nOG5Lx5XXVRznSpxMM3m7L0GOqUB7bnr3L6LGURyO8P%2Bf33Drb5Mo9eKwoVZAAbY47IafSKSV2wKyNpdm9rTcFUYK0Qp5f1OyKcTZnYK4TsksXOCZgjfIKY6z0fs%2Fd%2BU2HcItNAssFpAqNWFZSZnlmxV%2BxF0HFoz25WRPYisopuaitfWy5md3CwWa9xz%2F5TtaFVm898Hkkyou%2BdANcyQcwsO1%2FMgdK9ZZj6qY2555ZtnlyslW2sUeTKN&X-Amz-Signature=e726d3670441e863efbd56b8c0d5f14c9c7096b2aa218c49ba91afee2f6e967b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WD2NXM6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWONyjItHy16yuIzi6X7AWL1hYOYMJT7VHybgvshgEGgIgZdt70LfqoJvZy5ClSAf6zuwz7n94nAJgDtJ3eTXXUn8q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDNuOeXuDNux5eqFlzircAzaNdGkchvsAf2raIgf6LIMj9FBz6MAzXOoBDNsntbesONkvMXfxZRNPGKdgoGiWutGJhPVogZQkAtU1%2FH6rih3%2FG2BCD%2Fn6L0TGSca49vBJ1GzjUCLzh5cBuN%2Ft9gjSxs3xKEkP6xeKSxRGPuVPv%2F5gKs9O49sP7uTfFhpNWpXtGIRh7vgTfJy%2FE91mditXGiT87bBBgcoEtQ9hREslMfX9fYOGHHwoHlH5pAUpes8sRfXHOh0f9UC%2Fj%2FREEryHVqKl22OMBrmMu%2FbCn2REFeE7YnJ0c3ytZW3QAmBTq4MJwM7UOBV0nPwhGZI6ubat7OkwGfE4CJuWCkSbM5%2BjggbD2OfS6PEsXNyBX7CTbFBXRlQWhcAMNq2Mx3AGMVZKBPIL4NChjKOQLaxmufh1IfaAg0EJGYlKhH1E0rqT30Spvvd0YkN5j8zUUZnUlDIWcgseySPcgLNDDJ%2BneaIbFFSNH8c0XCFM7nkFvlV0FQuUwVRXeP9n2WWQdh%2FwQmftmw64QaswWT2huEZscs%2FSesMgv9t6z5jO9CpwDzGTKv5Fq0Tpkm30ynhpePiKkxjjOyUk7H2dr9jTcavRXypRGRjUfpO7ysQud1e1mi1rQaA5nOG5Lx5XXVRznSpxMM3m7L0GOqUB7bnr3L6LGURyO8P%2Bf33Drb5Mo9eKwoVZAAbY47IafSKSV2wKyNpdm9rTcFUYK0Qp5f1OyKcTZnYK4TsksXOCZgjfIKY6z0fs%2Fd%2BU2HcItNAssFpAqNWFZSZnlmxV%2BxF0HFoz25WRPYisopuaitfWy5md3CwWa9xz%2F5TtaFVm898Hkkyou%2BdANcyQcwsO1%2FMgdK9ZZj6qY2555ZtnlyslW2sUeTKN&X-Amz-Signature=313c0907583905bc115dc4138101176583c8a1eb24deee2d8cdeb998642dfb3b&X-Amz-SignedHeaders=host&x-id=GetObject)
