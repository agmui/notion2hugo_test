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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUGMMSH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmpCbQFPqS4lWF4vg9ibk5sV3NsA7PLqzLJj1HYqbQkwIhAJD6rJaM5tSd21e9w73B2%2F4O5j4%2BvRKWogLra7hCL%2BCtKv8DCBsQABoMNjM3NDIzMTgzODA1Igx0Eo%2BrhZ%2Buj3O5m7sq3ANVmuxCzt%2Fsznes9htHTDDpjRXJSexm2MYEIw57%2BsB53cUrBIPA01MrGA3sNG%2FioE%2BClnj8eJl4UbLfuAcAUAYo%2FTYIE7DPR2yhC%2F3ULwFitiJvp7qCXIDnBDE5BdsBmFZIbgdyYs5UcyTNDqFHnDZ6oJXxUwX%2BY1TH5ZyrtGCGZcXC2n3F7905p4PiSODCQNZYHjWkqfMco04N%2Br7AO9PixF1Uf2s61NCkAn9WbPoiDKpoyc0pkIRsHru%2BP45ujK56HIVmWW1c6RQ0iHLB7UjXzHXNPPoDChVSDyjzGapUtXNlrm1UobvSEgY2YkJAtGAYiIaqj2%2Fi6H%2FH49CRGR4%2FLuolIqXNw9K6L1JjVThtH5IFacida7acbQiHVUnoR7%2FONoKjURRCv6L%2FndqT39LkrS6Hl80i2y9VQ9VBXZdEUCyU6Go9%2BynZeNQuYsUH1sfGLB9f7Ww5f%2Fr%2FZf4GL3rTzzFgZcaZLw2j5qwzGHN1r3L%2B1EAfrDRg4%2BzhmLQwY8ovsJYXX%2FvjjVyy9JyZaRCat1RQLvmxAUd4ec6WCkJhZM5rATz8KYv9lc2EcJsjgY2bsx5Hn24wc8tBE77aU1%2BP5INIPgHNPv3FGXi7tY1fBENc3uQC6iEctWaJezCV5Iu%2FBjqkAUBiTU0IDprteFPmkTGOJamXljRRXdTgd2KQQsXzHEP%2BSNHXOoPHy31G%2FdEii5Zn0udTHwQRv1r3au1ImSOlxoezSJSAjVOYSeyDHyfUUjOgKmXF280AlXNHhDyy6%2Fk8sHRDC6Shd7j4AmxEb3CP8TnIAtCl%2BmYAopnyWpxTIV0FEMYIXjPoczTR6qcc61ovCuUMe2LtP5xKEozY9TntrtCbEphi&X-Amz-Signature=bcdf08b8112d1a31fe895b714df802738b33ed407ef984bc601e7298daa9af6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUGMMSH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmpCbQFPqS4lWF4vg9ibk5sV3NsA7PLqzLJj1HYqbQkwIhAJD6rJaM5tSd21e9w73B2%2F4O5j4%2BvRKWogLra7hCL%2BCtKv8DCBsQABoMNjM3NDIzMTgzODA1Igx0Eo%2BrhZ%2Buj3O5m7sq3ANVmuxCzt%2Fsznes9htHTDDpjRXJSexm2MYEIw57%2BsB53cUrBIPA01MrGA3sNG%2FioE%2BClnj8eJl4UbLfuAcAUAYo%2FTYIE7DPR2yhC%2F3ULwFitiJvp7qCXIDnBDE5BdsBmFZIbgdyYs5UcyTNDqFHnDZ6oJXxUwX%2BY1TH5ZyrtGCGZcXC2n3F7905p4PiSODCQNZYHjWkqfMco04N%2Br7AO9PixF1Uf2s61NCkAn9WbPoiDKpoyc0pkIRsHru%2BP45ujK56HIVmWW1c6RQ0iHLB7UjXzHXNPPoDChVSDyjzGapUtXNlrm1UobvSEgY2YkJAtGAYiIaqj2%2Fi6H%2FH49CRGR4%2FLuolIqXNw9K6L1JjVThtH5IFacida7acbQiHVUnoR7%2FONoKjURRCv6L%2FndqT39LkrS6Hl80i2y9VQ9VBXZdEUCyU6Go9%2BynZeNQuYsUH1sfGLB9f7Ww5f%2Fr%2FZf4GL3rTzzFgZcaZLw2j5qwzGHN1r3L%2B1EAfrDRg4%2BzhmLQwY8ovsJYXX%2FvjjVyy9JyZaRCat1RQLvmxAUd4ec6WCkJhZM5rATz8KYv9lc2EcJsjgY2bsx5Hn24wc8tBE77aU1%2BP5INIPgHNPv3FGXi7tY1fBENc3uQC6iEctWaJezCV5Iu%2FBjqkAUBiTU0IDprteFPmkTGOJamXljRRXdTgd2KQQsXzHEP%2BSNHXOoPHy31G%2FdEii5Zn0udTHwQRv1r3au1ImSOlxoezSJSAjVOYSeyDHyfUUjOgKmXF280AlXNHhDyy6%2Fk8sHRDC6Shd7j4AmxEb3CP8TnIAtCl%2BmYAopnyWpxTIV0FEMYIXjPoczTR6qcc61ovCuUMe2LtP5xKEozY9TntrtCbEphi&X-Amz-Signature=2b4a4cb3370cb2ae0a27d8dcd322477b2c633319a3b2343b22d0c5f2701bf542&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUGMMSH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmpCbQFPqS4lWF4vg9ibk5sV3NsA7PLqzLJj1HYqbQkwIhAJD6rJaM5tSd21e9w73B2%2F4O5j4%2BvRKWogLra7hCL%2BCtKv8DCBsQABoMNjM3NDIzMTgzODA1Igx0Eo%2BrhZ%2Buj3O5m7sq3ANVmuxCzt%2Fsznes9htHTDDpjRXJSexm2MYEIw57%2BsB53cUrBIPA01MrGA3sNG%2FioE%2BClnj8eJl4UbLfuAcAUAYo%2FTYIE7DPR2yhC%2F3ULwFitiJvp7qCXIDnBDE5BdsBmFZIbgdyYs5UcyTNDqFHnDZ6oJXxUwX%2BY1TH5ZyrtGCGZcXC2n3F7905p4PiSODCQNZYHjWkqfMco04N%2Br7AO9PixF1Uf2s61NCkAn9WbPoiDKpoyc0pkIRsHru%2BP45ujK56HIVmWW1c6RQ0iHLB7UjXzHXNPPoDChVSDyjzGapUtXNlrm1UobvSEgY2YkJAtGAYiIaqj2%2Fi6H%2FH49CRGR4%2FLuolIqXNw9K6L1JjVThtH5IFacida7acbQiHVUnoR7%2FONoKjURRCv6L%2FndqT39LkrS6Hl80i2y9VQ9VBXZdEUCyU6Go9%2BynZeNQuYsUH1sfGLB9f7Ww5f%2Fr%2FZf4GL3rTzzFgZcaZLw2j5qwzGHN1r3L%2B1EAfrDRg4%2BzhmLQwY8ovsJYXX%2FvjjVyy9JyZaRCat1RQLvmxAUd4ec6WCkJhZM5rATz8KYv9lc2EcJsjgY2bsx5Hn24wc8tBE77aU1%2BP5INIPgHNPv3FGXi7tY1fBENc3uQC6iEctWaJezCV5Iu%2FBjqkAUBiTU0IDprteFPmkTGOJamXljRRXdTgd2KQQsXzHEP%2BSNHXOoPHy31G%2FdEii5Zn0udTHwQRv1r3au1ImSOlxoezSJSAjVOYSeyDHyfUUjOgKmXF280AlXNHhDyy6%2Fk8sHRDC6Shd7j4AmxEb3CP8TnIAtCl%2BmYAopnyWpxTIV0FEMYIXjPoczTR6qcc61ovCuUMe2LtP5xKEozY9TntrtCbEphi&X-Amz-Signature=e232c7160c10cc3526bffb2d39db663cc92141c9acdc02ffb158ace6f6c0629e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUGMMSH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmpCbQFPqS4lWF4vg9ibk5sV3NsA7PLqzLJj1HYqbQkwIhAJD6rJaM5tSd21e9w73B2%2F4O5j4%2BvRKWogLra7hCL%2BCtKv8DCBsQABoMNjM3NDIzMTgzODA1Igx0Eo%2BrhZ%2Buj3O5m7sq3ANVmuxCzt%2Fsznes9htHTDDpjRXJSexm2MYEIw57%2BsB53cUrBIPA01MrGA3sNG%2FioE%2BClnj8eJl4UbLfuAcAUAYo%2FTYIE7DPR2yhC%2F3ULwFitiJvp7qCXIDnBDE5BdsBmFZIbgdyYs5UcyTNDqFHnDZ6oJXxUwX%2BY1TH5ZyrtGCGZcXC2n3F7905p4PiSODCQNZYHjWkqfMco04N%2Br7AO9PixF1Uf2s61NCkAn9WbPoiDKpoyc0pkIRsHru%2BP45ujK56HIVmWW1c6RQ0iHLB7UjXzHXNPPoDChVSDyjzGapUtXNlrm1UobvSEgY2YkJAtGAYiIaqj2%2Fi6H%2FH49CRGR4%2FLuolIqXNw9K6L1JjVThtH5IFacida7acbQiHVUnoR7%2FONoKjURRCv6L%2FndqT39LkrS6Hl80i2y9VQ9VBXZdEUCyU6Go9%2BynZeNQuYsUH1sfGLB9f7Ww5f%2Fr%2FZf4GL3rTzzFgZcaZLw2j5qwzGHN1r3L%2B1EAfrDRg4%2BzhmLQwY8ovsJYXX%2FvjjVyy9JyZaRCat1RQLvmxAUd4ec6WCkJhZM5rATz8KYv9lc2EcJsjgY2bsx5Hn24wc8tBE77aU1%2BP5INIPgHNPv3FGXi7tY1fBENc3uQC6iEctWaJezCV5Iu%2FBjqkAUBiTU0IDprteFPmkTGOJamXljRRXdTgd2KQQsXzHEP%2BSNHXOoPHy31G%2FdEii5Zn0udTHwQRv1r3au1ImSOlxoezSJSAjVOYSeyDHyfUUjOgKmXF280AlXNHhDyy6%2Fk8sHRDC6Shd7j4AmxEb3CP8TnIAtCl%2BmYAopnyWpxTIV0FEMYIXjPoczTR6qcc61ovCuUMe2LtP5xKEozY9TntrtCbEphi&X-Amz-Signature=1261b60a754e17efeeafa1b2f85a5ac6f0fe993c14d85509f715c8fe21ab0030&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUGMMSH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmpCbQFPqS4lWF4vg9ibk5sV3NsA7PLqzLJj1HYqbQkwIhAJD6rJaM5tSd21e9w73B2%2F4O5j4%2BvRKWogLra7hCL%2BCtKv8DCBsQABoMNjM3NDIzMTgzODA1Igx0Eo%2BrhZ%2Buj3O5m7sq3ANVmuxCzt%2Fsznes9htHTDDpjRXJSexm2MYEIw57%2BsB53cUrBIPA01MrGA3sNG%2FioE%2BClnj8eJl4UbLfuAcAUAYo%2FTYIE7DPR2yhC%2F3ULwFitiJvp7qCXIDnBDE5BdsBmFZIbgdyYs5UcyTNDqFHnDZ6oJXxUwX%2BY1TH5ZyrtGCGZcXC2n3F7905p4PiSODCQNZYHjWkqfMco04N%2Br7AO9PixF1Uf2s61NCkAn9WbPoiDKpoyc0pkIRsHru%2BP45ujK56HIVmWW1c6RQ0iHLB7UjXzHXNPPoDChVSDyjzGapUtXNlrm1UobvSEgY2YkJAtGAYiIaqj2%2Fi6H%2FH49CRGR4%2FLuolIqXNw9K6L1JjVThtH5IFacida7acbQiHVUnoR7%2FONoKjURRCv6L%2FndqT39LkrS6Hl80i2y9VQ9VBXZdEUCyU6Go9%2BynZeNQuYsUH1sfGLB9f7Ww5f%2Fr%2FZf4GL3rTzzFgZcaZLw2j5qwzGHN1r3L%2B1EAfrDRg4%2BzhmLQwY8ovsJYXX%2FvjjVyy9JyZaRCat1RQLvmxAUd4ec6WCkJhZM5rATz8KYv9lc2EcJsjgY2bsx5Hn24wc8tBE77aU1%2BP5INIPgHNPv3FGXi7tY1fBENc3uQC6iEctWaJezCV5Iu%2FBjqkAUBiTU0IDprteFPmkTGOJamXljRRXdTgd2KQQsXzHEP%2BSNHXOoPHy31G%2FdEii5Zn0udTHwQRv1r3au1ImSOlxoezSJSAjVOYSeyDHyfUUjOgKmXF280AlXNHhDyy6%2Fk8sHRDC6Shd7j4AmxEb3CP8TnIAtCl%2BmYAopnyWpxTIV0FEMYIXjPoczTR6qcc61ovCuUMe2LtP5xKEozY9TntrtCbEphi&X-Amz-Signature=c607489b4cce98b8856c0d233fd2f10aeb607414f1c39a08e0083c293e7c08ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUGMMSH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmpCbQFPqS4lWF4vg9ibk5sV3NsA7PLqzLJj1HYqbQkwIhAJD6rJaM5tSd21e9w73B2%2F4O5j4%2BvRKWogLra7hCL%2BCtKv8DCBsQABoMNjM3NDIzMTgzODA1Igx0Eo%2BrhZ%2Buj3O5m7sq3ANVmuxCzt%2Fsznes9htHTDDpjRXJSexm2MYEIw57%2BsB53cUrBIPA01MrGA3sNG%2FioE%2BClnj8eJl4UbLfuAcAUAYo%2FTYIE7DPR2yhC%2F3ULwFitiJvp7qCXIDnBDE5BdsBmFZIbgdyYs5UcyTNDqFHnDZ6oJXxUwX%2BY1TH5ZyrtGCGZcXC2n3F7905p4PiSODCQNZYHjWkqfMco04N%2Br7AO9PixF1Uf2s61NCkAn9WbPoiDKpoyc0pkIRsHru%2BP45ujK56HIVmWW1c6RQ0iHLB7UjXzHXNPPoDChVSDyjzGapUtXNlrm1UobvSEgY2YkJAtGAYiIaqj2%2Fi6H%2FH49CRGR4%2FLuolIqXNw9K6L1JjVThtH5IFacida7acbQiHVUnoR7%2FONoKjURRCv6L%2FndqT39LkrS6Hl80i2y9VQ9VBXZdEUCyU6Go9%2BynZeNQuYsUH1sfGLB9f7Ww5f%2Fr%2FZf4GL3rTzzFgZcaZLw2j5qwzGHN1r3L%2B1EAfrDRg4%2BzhmLQwY8ovsJYXX%2FvjjVyy9JyZaRCat1RQLvmxAUd4ec6WCkJhZM5rATz8KYv9lc2EcJsjgY2bsx5Hn24wc8tBE77aU1%2BP5INIPgHNPv3FGXi7tY1fBENc3uQC6iEctWaJezCV5Iu%2FBjqkAUBiTU0IDprteFPmkTGOJamXljRRXdTgd2KQQsXzHEP%2BSNHXOoPHy31G%2FdEii5Zn0udTHwQRv1r3au1ImSOlxoezSJSAjVOYSeyDHyfUUjOgKmXF280AlXNHhDyy6%2Fk8sHRDC6Shd7j4AmxEb3CP8TnIAtCl%2BmYAopnyWpxTIV0FEMYIXjPoczTR6qcc61ovCuUMe2LtP5xKEozY9TntrtCbEphi&X-Amz-Signature=fb63b30d7f8d95180ce60921abb44f1548768c6c211d03010d559f3ed48d28df&X-Amz-SignedHeaders=host&x-id=GetObject)
