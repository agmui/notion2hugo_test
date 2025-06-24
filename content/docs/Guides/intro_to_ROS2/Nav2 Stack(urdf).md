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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHNEKHTK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDtJ%2BK88wPPnl0GY0vOE8JuLrynfenQM5rvakw7%2FtBCoAiEAslBRO0iLdaqKsjLpUG%2BNMoA7R%2FXfvXfaiqxNH%2FoKnFcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDkYpUYzabjztfrHPSrcAxyBXgDui3ffJUcu7RmL%2FW9cLbSgJzM%2F0Mj9K8GRT6N6ayt8YYjLb673H5CMWpNYeV8J6%2BLfLJZ2ByQ1Sn%2BNSexuiPKY9lCH31rk7qt5Ur96N4KXgHB7409FLTbV84WsHQDqr%2BwjODFMDLbFPaytktSLdSRbHDBhcVrEsA5gxq6zg9WmbyLvCe7%2Bt%2B05aktLg2GbeHQiSOKGEFkdTFy5%2FEkFcY3sP9uIPYGTLSYzPApql5E%2F661irNGcv1XpeGkZ48%2FT5GBb3EMFu3jScTmXaQvxYq4QAtmZd09ELe6RsyoAt8z0xcZwl9SJk4j7spBnO1tQjqjGX%2FiY%2Fgee%2FDOdt7HZRTXRimgXMpOeAvCI%2FXBqoYI76ldZuqwp%2BtZUbJtRYkDi7ucvr%2FyNtTZ0xkni6wcHdUGD6WtqKSFpid2PKdK9yhafgaiHwi82We0g4e19J8vpuYRX%2FjabfLDH%2FaL3gJ%2FueVvynhVTrmknQSizOZd8fjxMYH2aQV9X1RmWTZ17e3qutzP9aosnD4DAaUy33mnv8oZHDODTCBWOk5Z4uqBrBNHgPNVL25B%2FyRidYFyg0Y%2FZAIgeBiOLCklOOGEqu9gdIUga1aQorIiATq8jinFoP%2FcwXL2GmWwIEjM%2FMLyD6cIGOqUBaeOdPY%2BiMmYnef8K5iyj%2BDerRWkT372IGqU%2BW6MFQtFVBXakZEr2bBV7hxi7b2%2FiE%2F%2BBE0N03k6ccBod9G3zETBqJBZvT09KOZ6Z68y2psaVxY9BtSFB5GVLp%2BneHUliX5JQj4EIHDGZJnV9f5VsdCMJXtSpQ3TmzCK%2BdKM3baU4BbwileDvXbGvKC5En2hMAX%2B581LxELEsP2oLz1bkEd08%2Fi%2B3&X-Amz-Signature=d2f794c7caa4ea2dc719ab0c9be999a0c37af0e0a7186e8c2eb412aaee6e06ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHNEKHTK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDtJ%2BK88wPPnl0GY0vOE8JuLrynfenQM5rvakw7%2FtBCoAiEAslBRO0iLdaqKsjLpUG%2BNMoA7R%2FXfvXfaiqxNH%2FoKnFcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDkYpUYzabjztfrHPSrcAxyBXgDui3ffJUcu7RmL%2FW9cLbSgJzM%2F0Mj9K8GRT6N6ayt8YYjLb673H5CMWpNYeV8J6%2BLfLJZ2ByQ1Sn%2BNSexuiPKY9lCH31rk7qt5Ur96N4KXgHB7409FLTbV84WsHQDqr%2BwjODFMDLbFPaytktSLdSRbHDBhcVrEsA5gxq6zg9WmbyLvCe7%2Bt%2B05aktLg2GbeHQiSOKGEFkdTFy5%2FEkFcY3sP9uIPYGTLSYzPApql5E%2F661irNGcv1XpeGkZ48%2FT5GBb3EMFu3jScTmXaQvxYq4QAtmZd09ELe6RsyoAt8z0xcZwl9SJk4j7spBnO1tQjqjGX%2FiY%2Fgee%2FDOdt7HZRTXRimgXMpOeAvCI%2FXBqoYI76ldZuqwp%2BtZUbJtRYkDi7ucvr%2FyNtTZ0xkni6wcHdUGD6WtqKSFpid2PKdK9yhafgaiHwi82We0g4e19J8vpuYRX%2FjabfLDH%2FaL3gJ%2FueVvynhVTrmknQSizOZd8fjxMYH2aQV9X1RmWTZ17e3qutzP9aosnD4DAaUy33mnv8oZHDODTCBWOk5Z4uqBrBNHgPNVL25B%2FyRidYFyg0Y%2FZAIgeBiOLCklOOGEqu9gdIUga1aQorIiATq8jinFoP%2FcwXL2GmWwIEjM%2FMLyD6cIGOqUBaeOdPY%2BiMmYnef8K5iyj%2BDerRWkT372IGqU%2BW6MFQtFVBXakZEr2bBV7hxi7b2%2FiE%2F%2BBE0N03k6ccBod9G3zETBqJBZvT09KOZ6Z68y2psaVxY9BtSFB5GVLp%2BneHUliX5JQj4EIHDGZJnV9f5VsdCMJXtSpQ3TmzCK%2BdKM3baU4BbwileDvXbGvKC5En2hMAX%2B581LxELEsP2oLz1bkEd08%2Fi%2B3&X-Amz-Signature=4041c430d707d8a9585c4ada943e0fb2d27a59c166bf15b316220dff082680a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHNEKHTK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDtJ%2BK88wPPnl0GY0vOE8JuLrynfenQM5rvakw7%2FtBCoAiEAslBRO0iLdaqKsjLpUG%2BNMoA7R%2FXfvXfaiqxNH%2FoKnFcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDkYpUYzabjztfrHPSrcAxyBXgDui3ffJUcu7RmL%2FW9cLbSgJzM%2F0Mj9K8GRT6N6ayt8YYjLb673H5CMWpNYeV8J6%2BLfLJZ2ByQ1Sn%2BNSexuiPKY9lCH31rk7qt5Ur96N4KXgHB7409FLTbV84WsHQDqr%2BwjODFMDLbFPaytktSLdSRbHDBhcVrEsA5gxq6zg9WmbyLvCe7%2Bt%2B05aktLg2GbeHQiSOKGEFkdTFy5%2FEkFcY3sP9uIPYGTLSYzPApql5E%2F661irNGcv1XpeGkZ48%2FT5GBb3EMFu3jScTmXaQvxYq4QAtmZd09ELe6RsyoAt8z0xcZwl9SJk4j7spBnO1tQjqjGX%2FiY%2Fgee%2FDOdt7HZRTXRimgXMpOeAvCI%2FXBqoYI76ldZuqwp%2BtZUbJtRYkDi7ucvr%2FyNtTZ0xkni6wcHdUGD6WtqKSFpid2PKdK9yhafgaiHwi82We0g4e19J8vpuYRX%2FjabfLDH%2FaL3gJ%2FueVvynhVTrmknQSizOZd8fjxMYH2aQV9X1RmWTZ17e3qutzP9aosnD4DAaUy33mnv8oZHDODTCBWOk5Z4uqBrBNHgPNVL25B%2FyRidYFyg0Y%2FZAIgeBiOLCklOOGEqu9gdIUga1aQorIiATq8jinFoP%2FcwXL2GmWwIEjM%2FMLyD6cIGOqUBaeOdPY%2BiMmYnef8K5iyj%2BDerRWkT372IGqU%2BW6MFQtFVBXakZEr2bBV7hxi7b2%2FiE%2F%2BBE0N03k6ccBod9G3zETBqJBZvT09KOZ6Z68y2psaVxY9BtSFB5GVLp%2BneHUliX5JQj4EIHDGZJnV9f5VsdCMJXtSpQ3TmzCK%2BdKM3baU4BbwileDvXbGvKC5En2hMAX%2B581LxELEsP2oLz1bkEd08%2Fi%2B3&X-Amz-Signature=fe57098b1ce38415c1c6453eee7c375e845d346f3eab0ea356488e6b084ae366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHNEKHTK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDtJ%2BK88wPPnl0GY0vOE8JuLrynfenQM5rvakw7%2FtBCoAiEAslBRO0iLdaqKsjLpUG%2BNMoA7R%2FXfvXfaiqxNH%2FoKnFcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDkYpUYzabjztfrHPSrcAxyBXgDui3ffJUcu7RmL%2FW9cLbSgJzM%2F0Mj9K8GRT6N6ayt8YYjLb673H5CMWpNYeV8J6%2BLfLJZ2ByQ1Sn%2BNSexuiPKY9lCH31rk7qt5Ur96N4KXgHB7409FLTbV84WsHQDqr%2BwjODFMDLbFPaytktSLdSRbHDBhcVrEsA5gxq6zg9WmbyLvCe7%2Bt%2B05aktLg2GbeHQiSOKGEFkdTFy5%2FEkFcY3sP9uIPYGTLSYzPApql5E%2F661irNGcv1XpeGkZ48%2FT5GBb3EMFu3jScTmXaQvxYq4QAtmZd09ELe6RsyoAt8z0xcZwl9SJk4j7spBnO1tQjqjGX%2FiY%2Fgee%2FDOdt7HZRTXRimgXMpOeAvCI%2FXBqoYI76ldZuqwp%2BtZUbJtRYkDi7ucvr%2FyNtTZ0xkni6wcHdUGD6WtqKSFpid2PKdK9yhafgaiHwi82We0g4e19J8vpuYRX%2FjabfLDH%2FaL3gJ%2FueVvynhVTrmknQSizOZd8fjxMYH2aQV9X1RmWTZ17e3qutzP9aosnD4DAaUy33mnv8oZHDODTCBWOk5Z4uqBrBNHgPNVL25B%2FyRidYFyg0Y%2FZAIgeBiOLCklOOGEqu9gdIUga1aQorIiATq8jinFoP%2FcwXL2GmWwIEjM%2FMLyD6cIGOqUBaeOdPY%2BiMmYnef8K5iyj%2BDerRWkT372IGqU%2BW6MFQtFVBXakZEr2bBV7hxi7b2%2FiE%2F%2BBE0N03k6ccBod9G3zETBqJBZvT09KOZ6Z68y2psaVxY9BtSFB5GVLp%2BneHUliX5JQj4EIHDGZJnV9f5VsdCMJXtSpQ3TmzCK%2BdKM3baU4BbwileDvXbGvKC5En2hMAX%2B581LxELEsP2oLz1bkEd08%2Fi%2B3&X-Amz-Signature=50ea571b498736607acd9fed89fa497e407faee6be5564d05e1b9f3880a88958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHNEKHTK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDtJ%2BK88wPPnl0GY0vOE8JuLrynfenQM5rvakw7%2FtBCoAiEAslBRO0iLdaqKsjLpUG%2BNMoA7R%2FXfvXfaiqxNH%2FoKnFcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDkYpUYzabjztfrHPSrcAxyBXgDui3ffJUcu7RmL%2FW9cLbSgJzM%2F0Mj9K8GRT6N6ayt8YYjLb673H5CMWpNYeV8J6%2BLfLJZ2ByQ1Sn%2BNSexuiPKY9lCH31rk7qt5Ur96N4KXgHB7409FLTbV84WsHQDqr%2BwjODFMDLbFPaytktSLdSRbHDBhcVrEsA5gxq6zg9WmbyLvCe7%2Bt%2B05aktLg2GbeHQiSOKGEFkdTFy5%2FEkFcY3sP9uIPYGTLSYzPApql5E%2F661irNGcv1XpeGkZ48%2FT5GBb3EMFu3jScTmXaQvxYq4QAtmZd09ELe6RsyoAt8z0xcZwl9SJk4j7spBnO1tQjqjGX%2FiY%2Fgee%2FDOdt7HZRTXRimgXMpOeAvCI%2FXBqoYI76ldZuqwp%2BtZUbJtRYkDi7ucvr%2FyNtTZ0xkni6wcHdUGD6WtqKSFpid2PKdK9yhafgaiHwi82We0g4e19J8vpuYRX%2FjabfLDH%2FaL3gJ%2FueVvynhVTrmknQSizOZd8fjxMYH2aQV9X1RmWTZ17e3qutzP9aosnD4DAaUy33mnv8oZHDODTCBWOk5Z4uqBrBNHgPNVL25B%2FyRidYFyg0Y%2FZAIgeBiOLCklOOGEqu9gdIUga1aQorIiATq8jinFoP%2FcwXL2GmWwIEjM%2FMLyD6cIGOqUBaeOdPY%2BiMmYnef8K5iyj%2BDerRWkT372IGqU%2BW6MFQtFVBXakZEr2bBV7hxi7b2%2FiE%2F%2BBE0N03k6ccBod9G3zETBqJBZvT09KOZ6Z68y2psaVxY9BtSFB5GVLp%2BneHUliX5JQj4EIHDGZJnV9f5VsdCMJXtSpQ3TmzCK%2BdKM3baU4BbwileDvXbGvKC5En2hMAX%2B581LxELEsP2oLz1bkEd08%2Fi%2B3&X-Amz-Signature=ca9a3fc285f26f3d71388d9ab9033f1e5aee7891421e7902fc9c7abe8d1d95ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHNEKHTK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDtJ%2BK88wPPnl0GY0vOE8JuLrynfenQM5rvakw7%2FtBCoAiEAslBRO0iLdaqKsjLpUG%2BNMoA7R%2FXfvXfaiqxNH%2FoKnFcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDkYpUYzabjztfrHPSrcAxyBXgDui3ffJUcu7RmL%2FW9cLbSgJzM%2F0Mj9K8GRT6N6ayt8YYjLb673H5CMWpNYeV8J6%2BLfLJZ2ByQ1Sn%2BNSexuiPKY9lCH31rk7qt5Ur96N4KXgHB7409FLTbV84WsHQDqr%2BwjODFMDLbFPaytktSLdSRbHDBhcVrEsA5gxq6zg9WmbyLvCe7%2Bt%2B05aktLg2GbeHQiSOKGEFkdTFy5%2FEkFcY3sP9uIPYGTLSYzPApql5E%2F661irNGcv1XpeGkZ48%2FT5GBb3EMFu3jScTmXaQvxYq4QAtmZd09ELe6RsyoAt8z0xcZwl9SJk4j7spBnO1tQjqjGX%2FiY%2Fgee%2FDOdt7HZRTXRimgXMpOeAvCI%2FXBqoYI76ldZuqwp%2BtZUbJtRYkDi7ucvr%2FyNtTZ0xkni6wcHdUGD6WtqKSFpid2PKdK9yhafgaiHwi82We0g4e19J8vpuYRX%2FjabfLDH%2FaL3gJ%2FueVvynhVTrmknQSizOZd8fjxMYH2aQV9X1RmWTZ17e3qutzP9aosnD4DAaUy33mnv8oZHDODTCBWOk5Z4uqBrBNHgPNVL25B%2FyRidYFyg0Y%2FZAIgeBiOLCklOOGEqu9gdIUga1aQorIiATq8jinFoP%2FcwXL2GmWwIEjM%2FMLyD6cIGOqUBaeOdPY%2BiMmYnef8K5iyj%2BDerRWkT372IGqU%2BW6MFQtFVBXakZEr2bBV7hxi7b2%2FiE%2F%2BBE0N03k6ccBod9G3zETBqJBZvT09KOZ6Z68y2psaVxY9BtSFB5GVLp%2BneHUliX5JQj4EIHDGZJnV9f5VsdCMJXtSpQ3TmzCK%2BdKM3baU4BbwileDvXbGvKC5En2hMAX%2B581LxELEsP2oLz1bkEd08%2Fi%2B3&X-Amz-Signature=f4576b23b66e592aad333c14b44f4bfe43ea8e4d9a6c5bd28d98ef67b27434da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
