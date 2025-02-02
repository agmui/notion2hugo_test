---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5I4P5OI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQ0bkHL0zAF3TCq0dg5nVxquOok3SbCP2QepeAmYDRgIgT0JNM4bRYe8oo29gYGheXi8FNt6EAqG6YdlCOVBZQiEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXj4c3LltRg4OZ%2BXSrcA5el2dydo9O2Xqm%2Fu1GtCdCxnzg06CT5IpBZIhnK1TZRx%2FSTwrZ%2BwDcopj%2FaNR6XlSBnxRyz3N6iiynAbPRYveY9OxjLnpk9MFKij%2BN6i6pX8%2BSFf1NjXPExgbXTJ5xs%2Ff4o6kOlXvO2EDvCqMNO%2BBOlotSVdGm2%2F3qySPWoZMRqyJOWpJg4h2%2BZDly5ecgzu8Y3SzuSacx6GoOeg3pB1DuUrCM1a9wHIyJS1AhXJ55fwvKXF8CHJoCo8U%2FVYGj8iJ76zhQRPZkSaAMLq7Q5FyNX9v6IG0iGuBRKVqOrlLSCCf3KzwjpklsSENKvUBBnt8BBfbNO4anOV0y%2FetuuJdls5SVSEEpxeFsvrb1hdvZea%2BdGygyaUkNk%2FTNFlWh67LfyLy3ED583aqXTX9eFj%2B6dHkFRTVLyMBGmi2zu%2BGqFYqFiq5fvaccYfr47XtPl4tLZOHpb8PPcHuWvsF2e32e8bOrW3AV8Owaoro%2FgR1bbaw7mU8BAOz%2FaIrsiv73hOO1qcJ5FJpnzuBd88mHSDLCL0EmWn4BdcQPZFPS1hf%2FvRPVvPKs9fO2AkHJJ6EejV80DGsoZ037LupKQjvjQmIJodYbnJu5St28Qv8bHVqQBOXuLAyUCVysY9OcCMKTj%2B7wGOqUBGoji4QawhF94wkwpaiEA7Un1k72qoj9f%2BXVL8Le1gZWIiIxp2B1T%2Fvrf2VREY5oIGdwRJ4X46fqGZUioPQkWya%2FVH%2Bb51zC1SuXFP9elxwwksRB4OMdZfMuWQgygKSERcDWGaf2wgX11CrE3ZQrWVx0PEvvkSAYHhrhddU5UVIUayp3uU3JzIZJZMJLgT%2FUwWR%2BHAWd1o8ap73wJzu%2F5Jo6HeNt2&X-Amz-Signature=b352c1c227d562b974b50bae286a0cf8fd1c7bdc4c345d86133225a044d2468c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5I4P5OI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQ0bkHL0zAF3TCq0dg5nVxquOok3SbCP2QepeAmYDRgIgT0JNM4bRYe8oo29gYGheXi8FNt6EAqG6YdlCOVBZQiEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXj4c3LltRg4OZ%2BXSrcA5el2dydo9O2Xqm%2Fu1GtCdCxnzg06CT5IpBZIhnK1TZRx%2FSTwrZ%2BwDcopj%2FaNR6XlSBnxRyz3N6iiynAbPRYveY9OxjLnpk9MFKij%2BN6i6pX8%2BSFf1NjXPExgbXTJ5xs%2Ff4o6kOlXvO2EDvCqMNO%2BBOlotSVdGm2%2F3qySPWoZMRqyJOWpJg4h2%2BZDly5ecgzu8Y3SzuSacx6GoOeg3pB1DuUrCM1a9wHIyJS1AhXJ55fwvKXF8CHJoCo8U%2FVYGj8iJ76zhQRPZkSaAMLq7Q5FyNX9v6IG0iGuBRKVqOrlLSCCf3KzwjpklsSENKvUBBnt8BBfbNO4anOV0y%2FetuuJdls5SVSEEpxeFsvrb1hdvZea%2BdGygyaUkNk%2FTNFlWh67LfyLy3ED583aqXTX9eFj%2B6dHkFRTVLyMBGmi2zu%2BGqFYqFiq5fvaccYfr47XtPl4tLZOHpb8PPcHuWvsF2e32e8bOrW3AV8Owaoro%2FgR1bbaw7mU8BAOz%2FaIrsiv73hOO1qcJ5FJpnzuBd88mHSDLCL0EmWn4BdcQPZFPS1hf%2FvRPVvPKs9fO2AkHJJ6EejV80DGsoZ037LupKQjvjQmIJodYbnJu5St28Qv8bHVqQBOXuLAyUCVysY9OcCMKTj%2B7wGOqUBGoji4QawhF94wkwpaiEA7Un1k72qoj9f%2BXVL8Le1gZWIiIxp2B1T%2Fvrf2VREY5oIGdwRJ4X46fqGZUioPQkWya%2FVH%2Bb51zC1SuXFP9elxwwksRB4OMdZfMuWQgygKSERcDWGaf2wgX11CrE3ZQrWVx0PEvvkSAYHhrhddU5UVIUayp3uU3JzIZJZMJLgT%2FUwWR%2BHAWd1o8ap73wJzu%2F5Jo6HeNt2&X-Amz-Signature=256c6efc844d2feaa9c901c7a7cb7e78cfb1832877d24383e85fe046e2902a51&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5I4P5OI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQ0bkHL0zAF3TCq0dg5nVxquOok3SbCP2QepeAmYDRgIgT0JNM4bRYe8oo29gYGheXi8FNt6EAqG6YdlCOVBZQiEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXj4c3LltRg4OZ%2BXSrcA5el2dydo9O2Xqm%2Fu1GtCdCxnzg06CT5IpBZIhnK1TZRx%2FSTwrZ%2BwDcopj%2FaNR6XlSBnxRyz3N6iiynAbPRYveY9OxjLnpk9MFKij%2BN6i6pX8%2BSFf1NjXPExgbXTJ5xs%2Ff4o6kOlXvO2EDvCqMNO%2BBOlotSVdGm2%2F3qySPWoZMRqyJOWpJg4h2%2BZDly5ecgzu8Y3SzuSacx6GoOeg3pB1DuUrCM1a9wHIyJS1AhXJ55fwvKXF8CHJoCo8U%2FVYGj8iJ76zhQRPZkSaAMLq7Q5FyNX9v6IG0iGuBRKVqOrlLSCCf3KzwjpklsSENKvUBBnt8BBfbNO4anOV0y%2FetuuJdls5SVSEEpxeFsvrb1hdvZea%2BdGygyaUkNk%2FTNFlWh67LfyLy3ED583aqXTX9eFj%2B6dHkFRTVLyMBGmi2zu%2BGqFYqFiq5fvaccYfr47XtPl4tLZOHpb8PPcHuWvsF2e32e8bOrW3AV8Owaoro%2FgR1bbaw7mU8BAOz%2FaIrsiv73hOO1qcJ5FJpnzuBd88mHSDLCL0EmWn4BdcQPZFPS1hf%2FvRPVvPKs9fO2AkHJJ6EejV80DGsoZ037LupKQjvjQmIJodYbnJu5St28Qv8bHVqQBOXuLAyUCVysY9OcCMKTj%2B7wGOqUBGoji4QawhF94wkwpaiEA7Un1k72qoj9f%2BXVL8Le1gZWIiIxp2B1T%2Fvrf2VREY5oIGdwRJ4X46fqGZUioPQkWya%2FVH%2Bb51zC1SuXFP9elxwwksRB4OMdZfMuWQgygKSERcDWGaf2wgX11CrE3ZQrWVx0PEvvkSAYHhrhddU5UVIUayp3uU3JzIZJZMJLgT%2FUwWR%2BHAWd1o8ap73wJzu%2F5Jo6HeNt2&X-Amz-Signature=a099543c9e30ce440b9d408f604a33dba8d8fcdaac91b7c1389335e82a235fda&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5I4P5OI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQ0bkHL0zAF3TCq0dg5nVxquOok3SbCP2QepeAmYDRgIgT0JNM4bRYe8oo29gYGheXi8FNt6EAqG6YdlCOVBZQiEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXj4c3LltRg4OZ%2BXSrcA5el2dydo9O2Xqm%2Fu1GtCdCxnzg06CT5IpBZIhnK1TZRx%2FSTwrZ%2BwDcopj%2FaNR6XlSBnxRyz3N6iiynAbPRYveY9OxjLnpk9MFKij%2BN6i6pX8%2BSFf1NjXPExgbXTJ5xs%2Ff4o6kOlXvO2EDvCqMNO%2BBOlotSVdGm2%2F3qySPWoZMRqyJOWpJg4h2%2BZDly5ecgzu8Y3SzuSacx6GoOeg3pB1DuUrCM1a9wHIyJS1AhXJ55fwvKXF8CHJoCo8U%2FVYGj8iJ76zhQRPZkSaAMLq7Q5FyNX9v6IG0iGuBRKVqOrlLSCCf3KzwjpklsSENKvUBBnt8BBfbNO4anOV0y%2FetuuJdls5SVSEEpxeFsvrb1hdvZea%2BdGygyaUkNk%2FTNFlWh67LfyLy3ED583aqXTX9eFj%2B6dHkFRTVLyMBGmi2zu%2BGqFYqFiq5fvaccYfr47XtPl4tLZOHpb8PPcHuWvsF2e32e8bOrW3AV8Owaoro%2FgR1bbaw7mU8BAOz%2FaIrsiv73hOO1qcJ5FJpnzuBd88mHSDLCL0EmWn4BdcQPZFPS1hf%2FvRPVvPKs9fO2AkHJJ6EejV80DGsoZ037LupKQjvjQmIJodYbnJu5St28Qv8bHVqQBOXuLAyUCVysY9OcCMKTj%2B7wGOqUBGoji4QawhF94wkwpaiEA7Un1k72qoj9f%2BXVL8Le1gZWIiIxp2B1T%2Fvrf2VREY5oIGdwRJ4X46fqGZUioPQkWya%2FVH%2Bb51zC1SuXFP9elxwwksRB4OMdZfMuWQgygKSERcDWGaf2wgX11CrE3ZQrWVx0PEvvkSAYHhrhddU5UVIUayp3uU3JzIZJZMJLgT%2FUwWR%2BHAWd1o8ap73wJzu%2F5Jo6HeNt2&X-Amz-Signature=9d117c75686f136d094a7b62a524f627a5fa5fc617ff47633ac29a3c1bb9e414&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5I4P5OI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQ0bkHL0zAF3TCq0dg5nVxquOok3SbCP2QepeAmYDRgIgT0JNM4bRYe8oo29gYGheXi8FNt6EAqG6YdlCOVBZQiEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXj4c3LltRg4OZ%2BXSrcA5el2dydo9O2Xqm%2Fu1GtCdCxnzg06CT5IpBZIhnK1TZRx%2FSTwrZ%2BwDcopj%2FaNR6XlSBnxRyz3N6iiynAbPRYveY9OxjLnpk9MFKij%2BN6i6pX8%2BSFf1NjXPExgbXTJ5xs%2Ff4o6kOlXvO2EDvCqMNO%2BBOlotSVdGm2%2F3qySPWoZMRqyJOWpJg4h2%2BZDly5ecgzu8Y3SzuSacx6GoOeg3pB1DuUrCM1a9wHIyJS1AhXJ55fwvKXF8CHJoCo8U%2FVYGj8iJ76zhQRPZkSaAMLq7Q5FyNX9v6IG0iGuBRKVqOrlLSCCf3KzwjpklsSENKvUBBnt8BBfbNO4anOV0y%2FetuuJdls5SVSEEpxeFsvrb1hdvZea%2BdGygyaUkNk%2FTNFlWh67LfyLy3ED583aqXTX9eFj%2B6dHkFRTVLyMBGmi2zu%2BGqFYqFiq5fvaccYfr47XtPl4tLZOHpb8PPcHuWvsF2e32e8bOrW3AV8Owaoro%2FgR1bbaw7mU8BAOz%2FaIrsiv73hOO1qcJ5FJpnzuBd88mHSDLCL0EmWn4BdcQPZFPS1hf%2FvRPVvPKs9fO2AkHJJ6EejV80DGsoZ037LupKQjvjQmIJodYbnJu5St28Qv8bHVqQBOXuLAyUCVysY9OcCMKTj%2B7wGOqUBGoji4QawhF94wkwpaiEA7Un1k72qoj9f%2BXVL8Le1gZWIiIxp2B1T%2Fvrf2VREY5oIGdwRJ4X46fqGZUioPQkWya%2FVH%2Bb51zC1SuXFP9elxwwksRB4OMdZfMuWQgygKSERcDWGaf2wgX11CrE3ZQrWVx0PEvvkSAYHhrhddU5UVIUayp3uU3JzIZJZMJLgT%2FUwWR%2BHAWd1o8ap73wJzu%2F5Jo6HeNt2&X-Amz-Signature=81b39e5d57fea00fc53adc32323c7575b1bd002a4658925e38f162d99c443272&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5I4P5OI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQ0bkHL0zAF3TCq0dg5nVxquOok3SbCP2QepeAmYDRgIgT0JNM4bRYe8oo29gYGheXi8FNt6EAqG6YdlCOVBZQiEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXj4c3LltRg4OZ%2BXSrcA5el2dydo9O2Xqm%2Fu1GtCdCxnzg06CT5IpBZIhnK1TZRx%2FSTwrZ%2BwDcopj%2FaNR6XlSBnxRyz3N6iiynAbPRYveY9OxjLnpk9MFKij%2BN6i6pX8%2BSFf1NjXPExgbXTJ5xs%2Ff4o6kOlXvO2EDvCqMNO%2BBOlotSVdGm2%2F3qySPWoZMRqyJOWpJg4h2%2BZDly5ecgzu8Y3SzuSacx6GoOeg3pB1DuUrCM1a9wHIyJS1AhXJ55fwvKXF8CHJoCo8U%2FVYGj8iJ76zhQRPZkSaAMLq7Q5FyNX9v6IG0iGuBRKVqOrlLSCCf3KzwjpklsSENKvUBBnt8BBfbNO4anOV0y%2FetuuJdls5SVSEEpxeFsvrb1hdvZea%2BdGygyaUkNk%2FTNFlWh67LfyLy3ED583aqXTX9eFj%2B6dHkFRTVLyMBGmi2zu%2BGqFYqFiq5fvaccYfr47XtPl4tLZOHpb8PPcHuWvsF2e32e8bOrW3AV8Owaoro%2FgR1bbaw7mU8BAOz%2FaIrsiv73hOO1qcJ5FJpnzuBd88mHSDLCL0EmWn4BdcQPZFPS1hf%2FvRPVvPKs9fO2AkHJJ6EejV80DGsoZ037LupKQjvjQmIJodYbnJu5St28Qv8bHVqQBOXuLAyUCVysY9OcCMKTj%2B7wGOqUBGoji4QawhF94wkwpaiEA7Un1k72qoj9f%2BXVL8Le1gZWIiIxp2B1T%2Fvrf2VREY5oIGdwRJ4X46fqGZUioPQkWya%2FVH%2Bb51zC1SuXFP9elxwwksRB4OMdZfMuWQgygKSERcDWGaf2wgX11CrE3ZQrWVx0PEvvkSAYHhrhddU5UVIUayp3uU3JzIZJZMJLgT%2FUwWR%2BHAWd1o8ap73wJzu%2F5Jo6HeNt2&X-Amz-Signature=52f751c53815476d8794fb097e6d04469285c10baefdc4119a9f8c23bf8e4cda&X-Amz-SignedHeaders=host&x-id=GetObject)
