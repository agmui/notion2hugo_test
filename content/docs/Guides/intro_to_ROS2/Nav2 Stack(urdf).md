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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4L2DMFS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkg94n82Pdoan711%2F6TcGuEeA5CsA2OvGEvqyXWJCCHAIgMSdvk2BkElm4rhtsQgjtJxtlhk9PgMRiF6e8RjJm3kAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL55cEOQH11XE1tQYyrcA92SVQOcIxXlvPhPauwcX5iyAasFwILWBfWARjQpy9v5BlCGxwv2NcF8I1k5UwFQhXNdOG4my0vq7va9mK8doIXZoWfEdiWY%2BisHllWi2ECOfU%2BkjUWK%2FtudKaQvzoOwRaKDERli3if2YzJRNcToRuu1Oog5F45mYGKXV0V2VtWOLTpdS0NrYcSUTGOIVDsMrsI%2FQ5PwxJtGFCUUQ0wQq6KHfC41jqU3AHRTewcF%2FylQCORlPWxNNFgMj9nam%2BmbRY3fhEb15F8pbppWZQ3OUZL6%2BzhW2qNdf9Gr8ryQZ%2BXlHpnVFWlSOkjMcdVZvdF4dygIKIoMJWzICXlMIOrb0SmOIDaWladzp1OKd7QxSh%2FIBosME2Ag%2BsRREaJ05cEyEzzenxhxump%2FJ8e7OzaORak%2BA5VaCVOai5Hqu2lC01Vg77eIiBL3WiXJbrKlARifRcand0icXv2YbZ3xReu8uBejhlXFwdvIUA7QfFL8GBPUXV%2B2a6sUu0Uo1znAhahWAw0sjlnMRpn8zlmBUS8IUQfOWY13COiNlbM2grf7lFvsYC9mB3tUtBCEFnZXfQYGLKAqN2oIg%2FyXXuJzR31Hc9Ut9akFBLRF2PNycXOt1rL78fdPh3AfPkUTVasJMLintMMGOqUBEIT9f%2BDIEuscgEPr66mBDVs8fxp3sh3zoZ52ZVAJs79MPgoCbSgz3QzBxZRaLesQrRvfG7va9bRqwxEywKf0YgEqz6wxqR40FqdJY9wpZbDERbjbkNMo2IO%2Fzhr80myeRwLkxFwvv79ngjAz1jaxd28fQsaInmgziRRuD1Sc2P5%2FBiatis%2BUJJ9GEz2ZUvSa6hqEsIlUp3syqOGkXLMaFnFcDWTq&X-Amz-Signature=66ec3c797d5653e3cd410577c50830f0ed3d68669b3df74abe01768374a8cfe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4L2DMFS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkg94n82Pdoan711%2F6TcGuEeA5CsA2OvGEvqyXWJCCHAIgMSdvk2BkElm4rhtsQgjtJxtlhk9PgMRiF6e8RjJm3kAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL55cEOQH11XE1tQYyrcA92SVQOcIxXlvPhPauwcX5iyAasFwILWBfWARjQpy9v5BlCGxwv2NcF8I1k5UwFQhXNdOG4my0vq7va9mK8doIXZoWfEdiWY%2BisHllWi2ECOfU%2BkjUWK%2FtudKaQvzoOwRaKDERli3if2YzJRNcToRuu1Oog5F45mYGKXV0V2VtWOLTpdS0NrYcSUTGOIVDsMrsI%2FQ5PwxJtGFCUUQ0wQq6KHfC41jqU3AHRTewcF%2FylQCORlPWxNNFgMj9nam%2BmbRY3fhEb15F8pbppWZQ3OUZL6%2BzhW2qNdf9Gr8ryQZ%2BXlHpnVFWlSOkjMcdVZvdF4dygIKIoMJWzICXlMIOrb0SmOIDaWladzp1OKd7QxSh%2FIBosME2Ag%2BsRREaJ05cEyEzzenxhxump%2FJ8e7OzaORak%2BA5VaCVOai5Hqu2lC01Vg77eIiBL3WiXJbrKlARifRcand0icXv2YbZ3xReu8uBejhlXFwdvIUA7QfFL8GBPUXV%2B2a6sUu0Uo1znAhahWAw0sjlnMRpn8zlmBUS8IUQfOWY13COiNlbM2grf7lFvsYC9mB3tUtBCEFnZXfQYGLKAqN2oIg%2FyXXuJzR31Hc9Ut9akFBLRF2PNycXOt1rL78fdPh3AfPkUTVasJMLintMMGOqUBEIT9f%2BDIEuscgEPr66mBDVs8fxp3sh3zoZ52ZVAJs79MPgoCbSgz3QzBxZRaLesQrRvfG7va9bRqwxEywKf0YgEqz6wxqR40FqdJY9wpZbDERbjbkNMo2IO%2Fzhr80myeRwLkxFwvv79ngjAz1jaxd28fQsaInmgziRRuD1Sc2P5%2FBiatis%2BUJJ9GEz2ZUvSa6hqEsIlUp3syqOGkXLMaFnFcDWTq&X-Amz-Signature=7bd174df67ee17083713fcb323bdc979637ac7cc433c21e92a6821bd9b155bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4L2DMFS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkg94n82Pdoan711%2F6TcGuEeA5CsA2OvGEvqyXWJCCHAIgMSdvk2BkElm4rhtsQgjtJxtlhk9PgMRiF6e8RjJm3kAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL55cEOQH11XE1tQYyrcA92SVQOcIxXlvPhPauwcX5iyAasFwILWBfWARjQpy9v5BlCGxwv2NcF8I1k5UwFQhXNdOG4my0vq7va9mK8doIXZoWfEdiWY%2BisHllWi2ECOfU%2BkjUWK%2FtudKaQvzoOwRaKDERli3if2YzJRNcToRuu1Oog5F45mYGKXV0V2VtWOLTpdS0NrYcSUTGOIVDsMrsI%2FQ5PwxJtGFCUUQ0wQq6KHfC41jqU3AHRTewcF%2FylQCORlPWxNNFgMj9nam%2BmbRY3fhEb15F8pbppWZQ3OUZL6%2BzhW2qNdf9Gr8ryQZ%2BXlHpnVFWlSOkjMcdVZvdF4dygIKIoMJWzICXlMIOrb0SmOIDaWladzp1OKd7QxSh%2FIBosME2Ag%2BsRREaJ05cEyEzzenxhxump%2FJ8e7OzaORak%2BA5VaCVOai5Hqu2lC01Vg77eIiBL3WiXJbrKlARifRcand0icXv2YbZ3xReu8uBejhlXFwdvIUA7QfFL8GBPUXV%2B2a6sUu0Uo1znAhahWAw0sjlnMRpn8zlmBUS8IUQfOWY13COiNlbM2grf7lFvsYC9mB3tUtBCEFnZXfQYGLKAqN2oIg%2FyXXuJzR31Hc9Ut9akFBLRF2PNycXOt1rL78fdPh3AfPkUTVasJMLintMMGOqUBEIT9f%2BDIEuscgEPr66mBDVs8fxp3sh3zoZ52ZVAJs79MPgoCbSgz3QzBxZRaLesQrRvfG7va9bRqwxEywKf0YgEqz6wxqR40FqdJY9wpZbDERbjbkNMo2IO%2Fzhr80myeRwLkxFwvv79ngjAz1jaxd28fQsaInmgziRRuD1Sc2P5%2FBiatis%2BUJJ9GEz2ZUvSa6hqEsIlUp3syqOGkXLMaFnFcDWTq&X-Amz-Signature=e23f900ed11521fda49621dbff3327d23b62d7aa39d9cf501ac97152361d6b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4L2DMFS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkg94n82Pdoan711%2F6TcGuEeA5CsA2OvGEvqyXWJCCHAIgMSdvk2BkElm4rhtsQgjtJxtlhk9PgMRiF6e8RjJm3kAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL55cEOQH11XE1tQYyrcA92SVQOcIxXlvPhPauwcX5iyAasFwILWBfWARjQpy9v5BlCGxwv2NcF8I1k5UwFQhXNdOG4my0vq7va9mK8doIXZoWfEdiWY%2BisHllWi2ECOfU%2BkjUWK%2FtudKaQvzoOwRaKDERli3if2YzJRNcToRuu1Oog5F45mYGKXV0V2VtWOLTpdS0NrYcSUTGOIVDsMrsI%2FQ5PwxJtGFCUUQ0wQq6KHfC41jqU3AHRTewcF%2FylQCORlPWxNNFgMj9nam%2BmbRY3fhEb15F8pbppWZQ3OUZL6%2BzhW2qNdf9Gr8ryQZ%2BXlHpnVFWlSOkjMcdVZvdF4dygIKIoMJWzICXlMIOrb0SmOIDaWladzp1OKd7QxSh%2FIBosME2Ag%2BsRREaJ05cEyEzzenxhxump%2FJ8e7OzaORak%2BA5VaCVOai5Hqu2lC01Vg77eIiBL3WiXJbrKlARifRcand0icXv2YbZ3xReu8uBejhlXFwdvIUA7QfFL8GBPUXV%2B2a6sUu0Uo1znAhahWAw0sjlnMRpn8zlmBUS8IUQfOWY13COiNlbM2grf7lFvsYC9mB3tUtBCEFnZXfQYGLKAqN2oIg%2FyXXuJzR31Hc9Ut9akFBLRF2PNycXOt1rL78fdPh3AfPkUTVasJMLintMMGOqUBEIT9f%2BDIEuscgEPr66mBDVs8fxp3sh3zoZ52ZVAJs79MPgoCbSgz3QzBxZRaLesQrRvfG7va9bRqwxEywKf0YgEqz6wxqR40FqdJY9wpZbDERbjbkNMo2IO%2Fzhr80myeRwLkxFwvv79ngjAz1jaxd28fQsaInmgziRRuD1Sc2P5%2FBiatis%2BUJJ9GEz2ZUvSa6hqEsIlUp3syqOGkXLMaFnFcDWTq&X-Amz-Signature=ef374026d99dd64f420f716a18bd6487656da669425a439c3bee4410e27c6d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4L2DMFS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkg94n82Pdoan711%2F6TcGuEeA5CsA2OvGEvqyXWJCCHAIgMSdvk2BkElm4rhtsQgjtJxtlhk9PgMRiF6e8RjJm3kAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL55cEOQH11XE1tQYyrcA92SVQOcIxXlvPhPauwcX5iyAasFwILWBfWARjQpy9v5BlCGxwv2NcF8I1k5UwFQhXNdOG4my0vq7va9mK8doIXZoWfEdiWY%2BisHllWi2ECOfU%2BkjUWK%2FtudKaQvzoOwRaKDERli3if2YzJRNcToRuu1Oog5F45mYGKXV0V2VtWOLTpdS0NrYcSUTGOIVDsMrsI%2FQ5PwxJtGFCUUQ0wQq6KHfC41jqU3AHRTewcF%2FylQCORlPWxNNFgMj9nam%2BmbRY3fhEb15F8pbppWZQ3OUZL6%2BzhW2qNdf9Gr8ryQZ%2BXlHpnVFWlSOkjMcdVZvdF4dygIKIoMJWzICXlMIOrb0SmOIDaWladzp1OKd7QxSh%2FIBosME2Ag%2BsRREaJ05cEyEzzenxhxump%2FJ8e7OzaORak%2BA5VaCVOai5Hqu2lC01Vg77eIiBL3WiXJbrKlARifRcand0icXv2YbZ3xReu8uBejhlXFwdvIUA7QfFL8GBPUXV%2B2a6sUu0Uo1znAhahWAw0sjlnMRpn8zlmBUS8IUQfOWY13COiNlbM2grf7lFvsYC9mB3tUtBCEFnZXfQYGLKAqN2oIg%2FyXXuJzR31Hc9Ut9akFBLRF2PNycXOt1rL78fdPh3AfPkUTVasJMLintMMGOqUBEIT9f%2BDIEuscgEPr66mBDVs8fxp3sh3zoZ52ZVAJs79MPgoCbSgz3QzBxZRaLesQrRvfG7va9bRqwxEywKf0YgEqz6wxqR40FqdJY9wpZbDERbjbkNMo2IO%2Fzhr80myeRwLkxFwvv79ngjAz1jaxd28fQsaInmgziRRuD1Sc2P5%2FBiatis%2BUJJ9GEz2ZUvSa6hqEsIlUp3syqOGkXLMaFnFcDWTq&X-Amz-Signature=2661a955f85c837a781b744d2779b695db9d951be33516dc1ef26aa45815a8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4L2DMFS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkg94n82Pdoan711%2F6TcGuEeA5CsA2OvGEvqyXWJCCHAIgMSdvk2BkElm4rhtsQgjtJxtlhk9PgMRiF6e8RjJm3kAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL55cEOQH11XE1tQYyrcA92SVQOcIxXlvPhPauwcX5iyAasFwILWBfWARjQpy9v5BlCGxwv2NcF8I1k5UwFQhXNdOG4my0vq7va9mK8doIXZoWfEdiWY%2BisHllWi2ECOfU%2BkjUWK%2FtudKaQvzoOwRaKDERli3if2YzJRNcToRuu1Oog5F45mYGKXV0V2VtWOLTpdS0NrYcSUTGOIVDsMrsI%2FQ5PwxJtGFCUUQ0wQq6KHfC41jqU3AHRTewcF%2FylQCORlPWxNNFgMj9nam%2BmbRY3fhEb15F8pbppWZQ3OUZL6%2BzhW2qNdf9Gr8ryQZ%2BXlHpnVFWlSOkjMcdVZvdF4dygIKIoMJWzICXlMIOrb0SmOIDaWladzp1OKd7QxSh%2FIBosME2Ag%2BsRREaJ05cEyEzzenxhxump%2FJ8e7OzaORak%2BA5VaCVOai5Hqu2lC01Vg77eIiBL3WiXJbrKlARifRcand0icXv2YbZ3xReu8uBejhlXFwdvIUA7QfFL8GBPUXV%2B2a6sUu0Uo1znAhahWAw0sjlnMRpn8zlmBUS8IUQfOWY13COiNlbM2grf7lFvsYC9mB3tUtBCEFnZXfQYGLKAqN2oIg%2FyXXuJzR31Hc9Ut9akFBLRF2PNycXOt1rL78fdPh3AfPkUTVasJMLintMMGOqUBEIT9f%2BDIEuscgEPr66mBDVs8fxp3sh3zoZ52ZVAJs79MPgoCbSgz3QzBxZRaLesQrRvfG7va9bRqwxEywKf0YgEqz6wxqR40FqdJY9wpZbDERbjbkNMo2IO%2Fzhr80myeRwLkxFwvv79ngjAz1jaxd28fQsaInmgziRRuD1Sc2P5%2FBiatis%2BUJJ9GEz2ZUvSa6hqEsIlUp3syqOGkXLMaFnFcDWTq&X-Amz-Signature=c6adc8d45d9cca5434fe7a4c367816a02fcf1ab55dfef203881c35c138f6be3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
