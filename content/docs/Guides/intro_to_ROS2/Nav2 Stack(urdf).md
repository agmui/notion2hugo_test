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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LU3XZUR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwEaKDb4Ja3eb3JWQ5XJ6OZx4fjKoEt%2FlTmatKhGl4OwIgLFotkYy7nUBTKv%2FaBj2RUMr%2Fo59kFTK%2BxaxlrH1P0Mgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLpiFFy2WPC35TaXNCrcAyAaprDwstNswWgWGTRntikP1gtbfK7aYfl%2FEqP4%2F7ZL%2FAe43bav%2FqluWUbBBKcguLwIfvu7DCD%2BOC2Y3Ym5TXXKwcCZWsfe21OqgfUBwyr3Ph7FoJDbj3gK1P9bClOy%2BiLK8WUieCgtzRmDPXqhtgn2FjcXl%2FSSljD87yBdCU5benTr7WvucnjbSNUCXCnGKCpwv2qiESgzd0Na67E0Vb7OF8UdMK2xWLqJuciLHPW%2BrJw21g99ksl50IPGYHkRBRG6HDn9DNo7YUVS73nsHAEH6vLiSXJU7fuQHzxWbKbXcQDikFcWQkoHoVpQYNaFARsazKNxL1oJzA9mcxMtt5NURMC7JT8lVpnDnOmW%2FFi%2Fp8whPwcQGObPNE8LL1yVvRnZF8LN%2BKJrYe9bZMu5okcxsZ5Vo9elAKBpX6EJoL1VP5bG5JLRPiAoKEUuX4cJY%2BdOXDIYfxlP6clJUZvD%2F42OJAm9jyod9li0jFoWSOhdSesD5Kv9BTNGVKFmy29NE65X1pXREwVJSwBhPkyv3ToNeSmnH0LrTC2ejqPn9fGQZwdsfYjbDNXhimix0qTaI3CaWDyCg1QwGCnnsPBPciiqrai8P0d4GnAOeh5wzMjpjgG9bD261WPPfHlFMIPfuL0GOqUBrj9dnoQTQ2%2FpgEHgs3829usWkvYjlwpm31OeMka3%2BFvYaoDGPaGsUdF4NJKz22lGKGx8NJb3aeuoDpy8OT8%2FJpcgZyQa%2FLnxFmM1AcngkQKq7tM8jBm5vSCDyEVsrLFTqd%2FPoR0rHBbuLSdQxfcHE9hVay94PwGV%2BhCcGeaPKRz%2BAqo8KVgL8fqT%2BQbftgSpjEm36yNWNAoBIVWv%2FUxLZ87791i4&X-Amz-Signature=0e38bc6320b4280870ce896d77ecf049a0fd198c32c9cda80680bf86c40403bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LU3XZUR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwEaKDb4Ja3eb3JWQ5XJ6OZx4fjKoEt%2FlTmatKhGl4OwIgLFotkYy7nUBTKv%2FaBj2RUMr%2Fo59kFTK%2BxaxlrH1P0Mgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLpiFFy2WPC35TaXNCrcAyAaprDwstNswWgWGTRntikP1gtbfK7aYfl%2FEqP4%2F7ZL%2FAe43bav%2FqluWUbBBKcguLwIfvu7DCD%2BOC2Y3Ym5TXXKwcCZWsfe21OqgfUBwyr3Ph7FoJDbj3gK1P9bClOy%2BiLK8WUieCgtzRmDPXqhtgn2FjcXl%2FSSljD87yBdCU5benTr7WvucnjbSNUCXCnGKCpwv2qiESgzd0Na67E0Vb7OF8UdMK2xWLqJuciLHPW%2BrJw21g99ksl50IPGYHkRBRG6HDn9DNo7YUVS73nsHAEH6vLiSXJU7fuQHzxWbKbXcQDikFcWQkoHoVpQYNaFARsazKNxL1oJzA9mcxMtt5NURMC7JT8lVpnDnOmW%2FFi%2Fp8whPwcQGObPNE8LL1yVvRnZF8LN%2BKJrYe9bZMu5okcxsZ5Vo9elAKBpX6EJoL1VP5bG5JLRPiAoKEUuX4cJY%2BdOXDIYfxlP6clJUZvD%2F42OJAm9jyod9li0jFoWSOhdSesD5Kv9BTNGVKFmy29NE65X1pXREwVJSwBhPkyv3ToNeSmnH0LrTC2ejqPn9fGQZwdsfYjbDNXhimix0qTaI3CaWDyCg1QwGCnnsPBPciiqrai8P0d4GnAOeh5wzMjpjgG9bD261WPPfHlFMIPfuL0GOqUBrj9dnoQTQ2%2FpgEHgs3829usWkvYjlwpm31OeMka3%2BFvYaoDGPaGsUdF4NJKz22lGKGx8NJb3aeuoDpy8OT8%2FJpcgZyQa%2FLnxFmM1AcngkQKq7tM8jBm5vSCDyEVsrLFTqd%2FPoR0rHBbuLSdQxfcHE9hVay94PwGV%2BhCcGeaPKRz%2BAqo8KVgL8fqT%2BQbftgSpjEm36yNWNAoBIVWv%2FUxLZ87791i4&X-Amz-Signature=843f156afdea8c80c910978e4b33ce6b832150c551e3527880dfb5c002a283fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LU3XZUR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwEaKDb4Ja3eb3JWQ5XJ6OZx4fjKoEt%2FlTmatKhGl4OwIgLFotkYy7nUBTKv%2FaBj2RUMr%2Fo59kFTK%2BxaxlrH1P0Mgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLpiFFy2WPC35TaXNCrcAyAaprDwstNswWgWGTRntikP1gtbfK7aYfl%2FEqP4%2F7ZL%2FAe43bav%2FqluWUbBBKcguLwIfvu7DCD%2BOC2Y3Ym5TXXKwcCZWsfe21OqgfUBwyr3Ph7FoJDbj3gK1P9bClOy%2BiLK8WUieCgtzRmDPXqhtgn2FjcXl%2FSSljD87yBdCU5benTr7WvucnjbSNUCXCnGKCpwv2qiESgzd0Na67E0Vb7OF8UdMK2xWLqJuciLHPW%2BrJw21g99ksl50IPGYHkRBRG6HDn9DNo7YUVS73nsHAEH6vLiSXJU7fuQHzxWbKbXcQDikFcWQkoHoVpQYNaFARsazKNxL1oJzA9mcxMtt5NURMC7JT8lVpnDnOmW%2FFi%2Fp8whPwcQGObPNE8LL1yVvRnZF8LN%2BKJrYe9bZMu5okcxsZ5Vo9elAKBpX6EJoL1VP5bG5JLRPiAoKEUuX4cJY%2BdOXDIYfxlP6clJUZvD%2F42OJAm9jyod9li0jFoWSOhdSesD5Kv9BTNGVKFmy29NE65X1pXREwVJSwBhPkyv3ToNeSmnH0LrTC2ejqPn9fGQZwdsfYjbDNXhimix0qTaI3CaWDyCg1QwGCnnsPBPciiqrai8P0d4GnAOeh5wzMjpjgG9bD261WPPfHlFMIPfuL0GOqUBrj9dnoQTQ2%2FpgEHgs3829usWkvYjlwpm31OeMka3%2BFvYaoDGPaGsUdF4NJKz22lGKGx8NJb3aeuoDpy8OT8%2FJpcgZyQa%2FLnxFmM1AcngkQKq7tM8jBm5vSCDyEVsrLFTqd%2FPoR0rHBbuLSdQxfcHE9hVay94PwGV%2BhCcGeaPKRz%2BAqo8KVgL8fqT%2BQbftgSpjEm36yNWNAoBIVWv%2FUxLZ87791i4&X-Amz-Signature=d10e21de3162380be4377f7ad0b2a6400e81e25195d951c78492c322ab70fb95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LU3XZUR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwEaKDb4Ja3eb3JWQ5XJ6OZx4fjKoEt%2FlTmatKhGl4OwIgLFotkYy7nUBTKv%2FaBj2RUMr%2Fo59kFTK%2BxaxlrH1P0Mgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLpiFFy2WPC35TaXNCrcAyAaprDwstNswWgWGTRntikP1gtbfK7aYfl%2FEqP4%2F7ZL%2FAe43bav%2FqluWUbBBKcguLwIfvu7DCD%2BOC2Y3Ym5TXXKwcCZWsfe21OqgfUBwyr3Ph7FoJDbj3gK1P9bClOy%2BiLK8WUieCgtzRmDPXqhtgn2FjcXl%2FSSljD87yBdCU5benTr7WvucnjbSNUCXCnGKCpwv2qiESgzd0Na67E0Vb7OF8UdMK2xWLqJuciLHPW%2BrJw21g99ksl50IPGYHkRBRG6HDn9DNo7YUVS73nsHAEH6vLiSXJU7fuQHzxWbKbXcQDikFcWQkoHoVpQYNaFARsazKNxL1oJzA9mcxMtt5NURMC7JT8lVpnDnOmW%2FFi%2Fp8whPwcQGObPNE8LL1yVvRnZF8LN%2BKJrYe9bZMu5okcxsZ5Vo9elAKBpX6EJoL1VP5bG5JLRPiAoKEUuX4cJY%2BdOXDIYfxlP6clJUZvD%2F42OJAm9jyod9li0jFoWSOhdSesD5Kv9BTNGVKFmy29NE65X1pXREwVJSwBhPkyv3ToNeSmnH0LrTC2ejqPn9fGQZwdsfYjbDNXhimix0qTaI3CaWDyCg1QwGCnnsPBPciiqrai8P0d4GnAOeh5wzMjpjgG9bD261WPPfHlFMIPfuL0GOqUBrj9dnoQTQ2%2FpgEHgs3829usWkvYjlwpm31OeMka3%2BFvYaoDGPaGsUdF4NJKz22lGKGx8NJb3aeuoDpy8OT8%2FJpcgZyQa%2FLnxFmM1AcngkQKq7tM8jBm5vSCDyEVsrLFTqd%2FPoR0rHBbuLSdQxfcHE9hVay94PwGV%2BhCcGeaPKRz%2BAqo8KVgL8fqT%2BQbftgSpjEm36yNWNAoBIVWv%2FUxLZ87791i4&X-Amz-Signature=ed470cb4ec03cc59c9078ffdb984be21a30a45e8fb9268f43412c83f464b757e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LU3XZUR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwEaKDb4Ja3eb3JWQ5XJ6OZx4fjKoEt%2FlTmatKhGl4OwIgLFotkYy7nUBTKv%2FaBj2RUMr%2Fo59kFTK%2BxaxlrH1P0Mgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLpiFFy2WPC35TaXNCrcAyAaprDwstNswWgWGTRntikP1gtbfK7aYfl%2FEqP4%2F7ZL%2FAe43bav%2FqluWUbBBKcguLwIfvu7DCD%2BOC2Y3Ym5TXXKwcCZWsfe21OqgfUBwyr3Ph7FoJDbj3gK1P9bClOy%2BiLK8WUieCgtzRmDPXqhtgn2FjcXl%2FSSljD87yBdCU5benTr7WvucnjbSNUCXCnGKCpwv2qiESgzd0Na67E0Vb7OF8UdMK2xWLqJuciLHPW%2BrJw21g99ksl50IPGYHkRBRG6HDn9DNo7YUVS73nsHAEH6vLiSXJU7fuQHzxWbKbXcQDikFcWQkoHoVpQYNaFARsazKNxL1oJzA9mcxMtt5NURMC7JT8lVpnDnOmW%2FFi%2Fp8whPwcQGObPNE8LL1yVvRnZF8LN%2BKJrYe9bZMu5okcxsZ5Vo9elAKBpX6EJoL1VP5bG5JLRPiAoKEUuX4cJY%2BdOXDIYfxlP6clJUZvD%2F42OJAm9jyod9li0jFoWSOhdSesD5Kv9BTNGVKFmy29NE65X1pXREwVJSwBhPkyv3ToNeSmnH0LrTC2ejqPn9fGQZwdsfYjbDNXhimix0qTaI3CaWDyCg1QwGCnnsPBPciiqrai8P0d4GnAOeh5wzMjpjgG9bD261WPPfHlFMIPfuL0GOqUBrj9dnoQTQ2%2FpgEHgs3829usWkvYjlwpm31OeMka3%2BFvYaoDGPaGsUdF4NJKz22lGKGx8NJb3aeuoDpy8OT8%2FJpcgZyQa%2FLnxFmM1AcngkQKq7tM8jBm5vSCDyEVsrLFTqd%2FPoR0rHBbuLSdQxfcHE9hVay94PwGV%2BhCcGeaPKRz%2BAqo8KVgL8fqT%2BQbftgSpjEm36yNWNAoBIVWv%2FUxLZ87791i4&X-Amz-Signature=985d3b91e2d88a5bc78ed734b60c6b0e2e76ce4238ee69809ef1941a9cd2d26b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LU3XZUR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwEaKDb4Ja3eb3JWQ5XJ6OZx4fjKoEt%2FlTmatKhGl4OwIgLFotkYy7nUBTKv%2FaBj2RUMr%2Fo59kFTK%2BxaxlrH1P0Mgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLpiFFy2WPC35TaXNCrcAyAaprDwstNswWgWGTRntikP1gtbfK7aYfl%2FEqP4%2F7ZL%2FAe43bav%2FqluWUbBBKcguLwIfvu7DCD%2BOC2Y3Ym5TXXKwcCZWsfe21OqgfUBwyr3Ph7FoJDbj3gK1P9bClOy%2BiLK8WUieCgtzRmDPXqhtgn2FjcXl%2FSSljD87yBdCU5benTr7WvucnjbSNUCXCnGKCpwv2qiESgzd0Na67E0Vb7OF8UdMK2xWLqJuciLHPW%2BrJw21g99ksl50IPGYHkRBRG6HDn9DNo7YUVS73nsHAEH6vLiSXJU7fuQHzxWbKbXcQDikFcWQkoHoVpQYNaFARsazKNxL1oJzA9mcxMtt5NURMC7JT8lVpnDnOmW%2FFi%2Fp8whPwcQGObPNE8LL1yVvRnZF8LN%2BKJrYe9bZMu5okcxsZ5Vo9elAKBpX6EJoL1VP5bG5JLRPiAoKEUuX4cJY%2BdOXDIYfxlP6clJUZvD%2F42OJAm9jyod9li0jFoWSOhdSesD5Kv9BTNGVKFmy29NE65X1pXREwVJSwBhPkyv3ToNeSmnH0LrTC2ejqPn9fGQZwdsfYjbDNXhimix0qTaI3CaWDyCg1QwGCnnsPBPciiqrai8P0d4GnAOeh5wzMjpjgG9bD261WPPfHlFMIPfuL0GOqUBrj9dnoQTQ2%2FpgEHgs3829usWkvYjlwpm31OeMka3%2BFvYaoDGPaGsUdF4NJKz22lGKGx8NJb3aeuoDpy8OT8%2FJpcgZyQa%2FLnxFmM1AcngkQKq7tM8jBm5vSCDyEVsrLFTqd%2FPoR0rHBbuLSdQxfcHE9hVay94PwGV%2BhCcGeaPKRz%2BAqo8KVgL8fqT%2BQbftgSpjEm36yNWNAoBIVWv%2FUxLZ87791i4&X-Amz-Signature=3df00b71f20f97ded3cbd6dd8de13316699708d1f8e147c5b6de5ebb7988e787&X-Amz-SignedHeaders=host&x-id=GetObject)
