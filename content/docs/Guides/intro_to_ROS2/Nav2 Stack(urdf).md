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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626KRGJPE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBjCxK0ntHqfWcZy%2FvOk3iqYkIxdfPhEFPL267Auj5bcAiAdX6AJxe7Mx1f0nM7BYEIz2sEwZBBzDpIWes7R4utlSir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMQxodaDHkjwx%2BMplSKtwDCcRQJ6z5yPl9AEnAxdXoWFh3VPm3BhTjUbsjufiJoWWMd4qS5hq9QvtcV3c0gikDQkU6sCmi8cHdtTZcSiJWUgchit95K7I8sLsLyg9Sj2%2BZ6H1R3a83mSI3Cd6Caku3WX3ChfN2mh2eCiOg5pVui3Y649KBCUydKtdw5D5tDJNdyFvX7wwBz5k%2F7fZTlrkhfaML718kq%2FozvkeQ01w%2BGfakD3WQp7pKmfY6NMFDJJ3UcjdzmMxyyXmR7liKLgARoAPRRzktjVa17q7G4kwxaKrg7g0I1ItzixesJx4uu2Rts%2FAkM1e90QPVapoD3A9BjW1TeQMVoyGmWZo%2B5wENN7F2h7UukN6E7ah6EoyTJJYPd5RXMYPo2S4kowu4NLM2s1t%2Fa8YL%2F0rnJVtrEkRh975kXPKNwtt6TtFle0tsK%2Bk1sgRCIE2zGQuoWkkHGcpaqzbm7hhDLKljgqd3GL38lxCAZ7jHjMyaRJ%2BfT1Ql7g0m4j8fS5WIHogBoNdFmlVlYH11WgnpoWpraQvSP3UD2FzHhvoNzPEruIB6OMj%2FpaMCyfj4wU%2Bho1zkffmunFJ%2FH30HzpGRDYGf1NbvpHFpOKBiVRYQBd9wwjRLqlF3mmn%2FxVf%2F0Af3xNXUvDww5%2BiowAY6pgEiyOC7Oq0kOw0YhDKHWJX2flyQNlp5Iqg8FsAJRa%2Fch5ZSYFj2XTqV%2BK3DHu9PQa8WuUuiQmtllaLCr%2FW6XNhLPlyM%2FXQsMoDPg5fF6G2OvaxltZXlv%2FU5mqyzIzJj%2FYmleIceyHB9gM15YTjR01EPfcZRHAFMkNBePj4h6PLYFwA2%2BAo4C0MKNSQodzLj6g46Ngp5eeTfxUjil1dyI2rkFDyKLsU3&X-Amz-Signature=129dd4768f322d54d4d1a0fd183335e344e03851039c78e950050daddb239ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626KRGJPE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBjCxK0ntHqfWcZy%2FvOk3iqYkIxdfPhEFPL267Auj5bcAiAdX6AJxe7Mx1f0nM7BYEIz2sEwZBBzDpIWes7R4utlSir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMQxodaDHkjwx%2BMplSKtwDCcRQJ6z5yPl9AEnAxdXoWFh3VPm3BhTjUbsjufiJoWWMd4qS5hq9QvtcV3c0gikDQkU6sCmi8cHdtTZcSiJWUgchit95K7I8sLsLyg9Sj2%2BZ6H1R3a83mSI3Cd6Caku3WX3ChfN2mh2eCiOg5pVui3Y649KBCUydKtdw5D5tDJNdyFvX7wwBz5k%2F7fZTlrkhfaML718kq%2FozvkeQ01w%2BGfakD3WQp7pKmfY6NMFDJJ3UcjdzmMxyyXmR7liKLgARoAPRRzktjVa17q7G4kwxaKrg7g0I1ItzixesJx4uu2Rts%2FAkM1e90QPVapoD3A9BjW1TeQMVoyGmWZo%2B5wENN7F2h7UukN6E7ah6EoyTJJYPd5RXMYPo2S4kowu4NLM2s1t%2Fa8YL%2F0rnJVtrEkRh975kXPKNwtt6TtFle0tsK%2Bk1sgRCIE2zGQuoWkkHGcpaqzbm7hhDLKljgqd3GL38lxCAZ7jHjMyaRJ%2BfT1Ql7g0m4j8fS5WIHogBoNdFmlVlYH11WgnpoWpraQvSP3UD2FzHhvoNzPEruIB6OMj%2FpaMCyfj4wU%2Bho1zkffmunFJ%2FH30HzpGRDYGf1NbvpHFpOKBiVRYQBd9wwjRLqlF3mmn%2FxVf%2F0Af3xNXUvDww5%2BiowAY6pgEiyOC7Oq0kOw0YhDKHWJX2flyQNlp5Iqg8FsAJRa%2Fch5ZSYFj2XTqV%2BK3DHu9PQa8WuUuiQmtllaLCr%2FW6XNhLPlyM%2FXQsMoDPg5fF6G2OvaxltZXlv%2FU5mqyzIzJj%2FYmleIceyHB9gM15YTjR01EPfcZRHAFMkNBePj4h6PLYFwA2%2BAo4C0MKNSQodzLj6g46Ngp5eeTfxUjil1dyI2rkFDyKLsU3&X-Amz-Signature=ec4418817c7d0d522cebd36751e3a4ecf5b82186f905c8d98cad010d93779738&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626KRGJPE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBjCxK0ntHqfWcZy%2FvOk3iqYkIxdfPhEFPL267Auj5bcAiAdX6AJxe7Mx1f0nM7BYEIz2sEwZBBzDpIWes7R4utlSir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMQxodaDHkjwx%2BMplSKtwDCcRQJ6z5yPl9AEnAxdXoWFh3VPm3BhTjUbsjufiJoWWMd4qS5hq9QvtcV3c0gikDQkU6sCmi8cHdtTZcSiJWUgchit95K7I8sLsLyg9Sj2%2BZ6H1R3a83mSI3Cd6Caku3WX3ChfN2mh2eCiOg5pVui3Y649KBCUydKtdw5D5tDJNdyFvX7wwBz5k%2F7fZTlrkhfaML718kq%2FozvkeQ01w%2BGfakD3WQp7pKmfY6NMFDJJ3UcjdzmMxyyXmR7liKLgARoAPRRzktjVa17q7G4kwxaKrg7g0I1ItzixesJx4uu2Rts%2FAkM1e90QPVapoD3A9BjW1TeQMVoyGmWZo%2B5wENN7F2h7UukN6E7ah6EoyTJJYPd5RXMYPo2S4kowu4NLM2s1t%2Fa8YL%2F0rnJVtrEkRh975kXPKNwtt6TtFle0tsK%2Bk1sgRCIE2zGQuoWkkHGcpaqzbm7hhDLKljgqd3GL38lxCAZ7jHjMyaRJ%2BfT1Ql7g0m4j8fS5WIHogBoNdFmlVlYH11WgnpoWpraQvSP3UD2FzHhvoNzPEruIB6OMj%2FpaMCyfj4wU%2Bho1zkffmunFJ%2FH30HzpGRDYGf1NbvpHFpOKBiVRYQBd9wwjRLqlF3mmn%2FxVf%2F0Af3xNXUvDww5%2BiowAY6pgEiyOC7Oq0kOw0YhDKHWJX2flyQNlp5Iqg8FsAJRa%2Fch5ZSYFj2XTqV%2BK3DHu9PQa8WuUuiQmtllaLCr%2FW6XNhLPlyM%2FXQsMoDPg5fF6G2OvaxltZXlv%2FU5mqyzIzJj%2FYmleIceyHB9gM15YTjR01EPfcZRHAFMkNBePj4h6PLYFwA2%2BAo4C0MKNSQodzLj6g46Ngp5eeTfxUjil1dyI2rkFDyKLsU3&X-Amz-Signature=414f78fddb6cab104d9c606e711031e7dd9d6f204a6ad40a87197f8b711c24ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626KRGJPE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBjCxK0ntHqfWcZy%2FvOk3iqYkIxdfPhEFPL267Auj5bcAiAdX6AJxe7Mx1f0nM7BYEIz2sEwZBBzDpIWes7R4utlSir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMQxodaDHkjwx%2BMplSKtwDCcRQJ6z5yPl9AEnAxdXoWFh3VPm3BhTjUbsjufiJoWWMd4qS5hq9QvtcV3c0gikDQkU6sCmi8cHdtTZcSiJWUgchit95K7I8sLsLyg9Sj2%2BZ6H1R3a83mSI3Cd6Caku3WX3ChfN2mh2eCiOg5pVui3Y649KBCUydKtdw5D5tDJNdyFvX7wwBz5k%2F7fZTlrkhfaML718kq%2FozvkeQ01w%2BGfakD3WQp7pKmfY6NMFDJJ3UcjdzmMxyyXmR7liKLgARoAPRRzktjVa17q7G4kwxaKrg7g0I1ItzixesJx4uu2Rts%2FAkM1e90QPVapoD3A9BjW1TeQMVoyGmWZo%2B5wENN7F2h7UukN6E7ah6EoyTJJYPd5RXMYPo2S4kowu4NLM2s1t%2Fa8YL%2F0rnJVtrEkRh975kXPKNwtt6TtFle0tsK%2Bk1sgRCIE2zGQuoWkkHGcpaqzbm7hhDLKljgqd3GL38lxCAZ7jHjMyaRJ%2BfT1Ql7g0m4j8fS5WIHogBoNdFmlVlYH11WgnpoWpraQvSP3UD2FzHhvoNzPEruIB6OMj%2FpaMCyfj4wU%2Bho1zkffmunFJ%2FH30HzpGRDYGf1NbvpHFpOKBiVRYQBd9wwjRLqlF3mmn%2FxVf%2F0Af3xNXUvDww5%2BiowAY6pgEiyOC7Oq0kOw0YhDKHWJX2flyQNlp5Iqg8FsAJRa%2Fch5ZSYFj2XTqV%2BK3DHu9PQa8WuUuiQmtllaLCr%2FW6XNhLPlyM%2FXQsMoDPg5fF6G2OvaxltZXlv%2FU5mqyzIzJj%2FYmleIceyHB9gM15YTjR01EPfcZRHAFMkNBePj4h6PLYFwA2%2BAo4C0MKNSQodzLj6g46Ngp5eeTfxUjil1dyI2rkFDyKLsU3&X-Amz-Signature=a6a17c2970da1f216df57e9cf5357fd1b3999264aecb0f87c815110ad765dc9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626KRGJPE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBjCxK0ntHqfWcZy%2FvOk3iqYkIxdfPhEFPL267Auj5bcAiAdX6AJxe7Mx1f0nM7BYEIz2sEwZBBzDpIWes7R4utlSir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMQxodaDHkjwx%2BMplSKtwDCcRQJ6z5yPl9AEnAxdXoWFh3VPm3BhTjUbsjufiJoWWMd4qS5hq9QvtcV3c0gikDQkU6sCmi8cHdtTZcSiJWUgchit95K7I8sLsLyg9Sj2%2BZ6H1R3a83mSI3Cd6Caku3WX3ChfN2mh2eCiOg5pVui3Y649KBCUydKtdw5D5tDJNdyFvX7wwBz5k%2F7fZTlrkhfaML718kq%2FozvkeQ01w%2BGfakD3WQp7pKmfY6NMFDJJ3UcjdzmMxyyXmR7liKLgARoAPRRzktjVa17q7G4kwxaKrg7g0I1ItzixesJx4uu2Rts%2FAkM1e90QPVapoD3A9BjW1TeQMVoyGmWZo%2B5wENN7F2h7UukN6E7ah6EoyTJJYPd5RXMYPo2S4kowu4NLM2s1t%2Fa8YL%2F0rnJVtrEkRh975kXPKNwtt6TtFle0tsK%2Bk1sgRCIE2zGQuoWkkHGcpaqzbm7hhDLKljgqd3GL38lxCAZ7jHjMyaRJ%2BfT1Ql7g0m4j8fS5WIHogBoNdFmlVlYH11WgnpoWpraQvSP3UD2FzHhvoNzPEruIB6OMj%2FpaMCyfj4wU%2Bho1zkffmunFJ%2FH30HzpGRDYGf1NbvpHFpOKBiVRYQBd9wwjRLqlF3mmn%2FxVf%2F0Af3xNXUvDww5%2BiowAY6pgEiyOC7Oq0kOw0YhDKHWJX2flyQNlp5Iqg8FsAJRa%2Fch5ZSYFj2XTqV%2BK3DHu9PQa8WuUuiQmtllaLCr%2FW6XNhLPlyM%2FXQsMoDPg5fF6G2OvaxltZXlv%2FU5mqyzIzJj%2FYmleIceyHB9gM15YTjR01EPfcZRHAFMkNBePj4h6PLYFwA2%2BAo4C0MKNSQodzLj6g46Ngp5eeTfxUjil1dyI2rkFDyKLsU3&X-Amz-Signature=2795d5391b6667756aefc4931bb490e14aefe512dc5a686ca1fc07e0bd899595&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626KRGJPE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBjCxK0ntHqfWcZy%2FvOk3iqYkIxdfPhEFPL267Auj5bcAiAdX6AJxe7Mx1f0nM7BYEIz2sEwZBBzDpIWes7R4utlSir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMQxodaDHkjwx%2BMplSKtwDCcRQJ6z5yPl9AEnAxdXoWFh3VPm3BhTjUbsjufiJoWWMd4qS5hq9QvtcV3c0gikDQkU6sCmi8cHdtTZcSiJWUgchit95K7I8sLsLyg9Sj2%2BZ6H1R3a83mSI3Cd6Caku3WX3ChfN2mh2eCiOg5pVui3Y649KBCUydKtdw5D5tDJNdyFvX7wwBz5k%2F7fZTlrkhfaML718kq%2FozvkeQ01w%2BGfakD3WQp7pKmfY6NMFDJJ3UcjdzmMxyyXmR7liKLgARoAPRRzktjVa17q7G4kwxaKrg7g0I1ItzixesJx4uu2Rts%2FAkM1e90QPVapoD3A9BjW1TeQMVoyGmWZo%2B5wENN7F2h7UukN6E7ah6EoyTJJYPd5RXMYPo2S4kowu4NLM2s1t%2Fa8YL%2F0rnJVtrEkRh975kXPKNwtt6TtFle0tsK%2Bk1sgRCIE2zGQuoWkkHGcpaqzbm7hhDLKljgqd3GL38lxCAZ7jHjMyaRJ%2BfT1Ql7g0m4j8fS5WIHogBoNdFmlVlYH11WgnpoWpraQvSP3UD2FzHhvoNzPEruIB6OMj%2FpaMCyfj4wU%2Bho1zkffmunFJ%2FH30HzpGRDYGf1NbvpHFpOKBiVRYQBd9wwjRLqlF3mmn%2FxVf%2F0Af3xNXUvDww5%2BiowAY6pgEiyOC7Oq0kOw0YhDKHWJX2flyQNlp5Iqg8FsAJRa%2Fch5ZSYFj2XTqV%2BK3DHu9PQa8WuUuiQmtllaLCr%2FW6XNhLPlyM%2FXQsMoDPg5fF6G2OvaxltZXlv%2FU5mqyzIzJj%2FYmleIceyHB9gM15YTjR01EPfcZRHAFMkNBePj4h6PLYFwA2%2BAo4C0MKNSQodzLj6g46Ngp5eeTfxUjil1dyI2rkFDyKLsU3&X-Amz-Signature=b5f20aff2fc5aa6e5b4d5e60303b0a03bcffce27951bb20fdf83b29b7adce53b&X-Amz-SignedHeaders=host&x-id=GetObject)
