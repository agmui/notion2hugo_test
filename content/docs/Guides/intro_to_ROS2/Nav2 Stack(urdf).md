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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64PL3CB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVTWRg65VHgzcbklnEgoAZO1Tts2wpa1QLd%2Bf%2BY52BbQIhAP31GtkuHU10pVSkA8FLppWCTYO2YYbW4B%2FvX4%2FAqaIfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrO5wnFrmWtVGLoJMq3AOQ6szYBQJeD1jcmGnVv2QOYMiBUxLMOkWtKAumwLiqXR4x4QXnGs8VSOw8l5eZ9UfAcynw44ofru3kPoYz6qAV7n1jlbmDMleBzvS8ufhFkCcj%2FsohFycMIMYcdaAhE7x%2FHexnO39LRwlms6XWFVE8GyLlu5Y1BtgHBVw6PAXDyX9b0t2N21doc2EgqlSSA9wiDaIfLeqVmSxhprJplxDDNb3sguDfgsjPILqTYxFUDT%2FJ%2F9GnJ%2FHCj1PLegIylWkz9CZaUMOrTX3ExuEsGSf4FWm7jk6v%2Bjq%2BrIlsL7sbeDito63ebLR6MKFVarzzP8SJaj2cquXdZWtPg1HQXtPNktB9LBhybQ4z5ri4v1inUrAUTKgO67cYR4%2BpXKlOoKAQsLJGrqAY%2B8rk1rvgJxF3my2zG7THBCcux9ZGIxsKoQT9vEGqnoOf3ddZj5%2FwGs%2FbvpqxyI1pCj%2Bzc6%2B%2FfTWKm2WWWQGAvyMAjUS6a1NwRoIjtkkvnAH7RrH1jQO5XZVYIClTTdr%2BlC5TrvJ%2F0KOJZdEV7w2C1patJFfBHwnLRcN2m4Su1Ql%2BRN1Na3mEDtbB6QLlq6dSJ2TdyvhdnyqFyiVvkNcQ%2B%2FR3gNAhCsx6JVVExrbfO071txUS7zDp%2FevBBjqkAd12K9X65C4AeBVsAD3ggOkBv7XlfZQUzOkGeHXsR41h8BOxhk5aQ8w581dVHDoTDx3530MM772KjEkLmB4FmNMbh2jmwnDh8VCYr%2F%2BcKsvUNWAudhSw%2Bs5gvyrwsJJwT4AUza1Vnz2TGSprTm6EW7JheAkLESO4PcE1wflXPINx4xf4iilaToGtAZ6dfzHTUp1NV%2F6sZliohICdpJxt8yqbqwpX&X-Amz-Signature=b829d1702acecc5fb3195db39fa9ccfab5d12f986d5f381119bf9bad64c1d6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64PL3CB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVTWRg65VHgzcbklnEgoAZO1Tts2wpa1QLd%2Bf%2BY52BbQIhAP31GtkuHU10pVSkA8FLppWCTYO2YYbW4B%2FvX4%2FAqaIfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrO5wnFrmWtVGLoJMq3AOQ6szYBQJeD1jcmGnVv2QOYMiBUxLMOkWtKAumwLiqXR4x4QXnGs8VSOw8l5eZ9UfAcynw44ofru3kPoYz6qAV7n1jlbmDMleBzvS8ufhFkCcj%2FsohFycMIMYcdaAhE7x%2FHexnO39LRwlms6XWFVE8GyLlu5Y1BtgHBVw6PAXDyX9b0t2N21doc2EgqlSSA9wiDaIfLeqVmSxhprJplxDDNb3sguDfgsjPILqTYxFUDT%2FJ%2F9GnJ%2FHCj1PLegIylWkz9CZaUMOrTX3ExuEsGSf4FWm7jk6v%2Bjq%2BrIlsL7sbeDito63ebLR6MKFVarzzP8SJaj2cquXdZWtPg1HQXtPNktB9LBhybQ4z5ri4v1inUrAUTKgO67cYR4%2BpXKlOoKAQsLJGrqAY%2B8rk1rvgJxF3my2zG7THBCcux9ZGIxsKoQT9vEGqnoOf3ddZj5%2FwGs%2FbvpqxyI1pCj%2Bzc6%2B%2FfTWKm2WWWQGAvyMAjUS6a1NwRoIjtkkvnAH7RrH1jQO5XZVYIClTTdr%2BlC5TrvJ%2F0KOJZdEV7w2C1patJFfBHwnLRcN2m4Su1Ql%2BRN1Na3mEDtbB6QLlq6dSJ2TdyvhdnyqFyiVvkNcQ%2B%2FR3gNAhCsx6JVVExrbfO071txUS7zDp%2FevBBjqkAd12K9X65C4AeBVsAD3ggOkBv7XlfZQUzOkGeHXsR41h8BOxhk5aQ8w581dVHDoTDx3530MM772KjEkLmB4FmNMbh2jmwnDh8VCYr%2F%2BcKsvUNWAudhSw%2Bs5gvyrwsJJwT4AUza1Vnz2TGSprTm6EW7JheAkLESO4PcE1wflXPINx4xf4iilaToGtAZ6dfzHTUp1NV%2F6sZliohICdpJxt8yqbqwpX&X-Amz-Signature=90490571a72825a424663a8d9388d65d1eff383dffc9067fbabe1f7086d90d76&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64PL3CB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVTWRg65VHgzcbklnEgoAZO1Tts2wpa1QLd%2Bf%2BY52BbQIhAP31GtkuHU10pVSkA8FLppWCTYO2YYbW4B%2FvX4%2FAqaIfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrO5wnFrmWtVGLoJMq3AOQ6szYBQJeD1jcmGnVv2QOYMiBUxLMOkWtKAumwLiqXR4x4QXnGs8VSOw8l5eZ9UfAcynw44ofru3kPoYz6qAV7n1jlbmDMleBzvS8ufhFkCcj%2FsohFycMIMYcdaAhE7x%2FHexnO39LRwlms6XWFVE8GyLlu5Y1BtgHBVw6PAXDyX9b0t2N21doc2EgqlSSA9wiDaIfLeqVmSxhprJplxDDNb3sguDfgsjPILqTYxFUDT%2FJ%2F9GnJ%2FHCj1PLegIylWkz9CZaUMOrTX3ExuEsGSf4FWm7jk6v%2Bjq%2BrIlsL7sbeDito63ebLR6MKFVarzzP8SJaj2cquXdZWtPg1HQXtPNktB9LBhybQ4z5ri4v1inUrAUTKgO67cYR4%2BpXKlOoKAQsLJGrqAY%2B8rk1rvgJxF3my2zG7THBCcux9ZGIxsKoQT9vEGqnoOf3ddZj5%2FwGs%2FbvpqxyI1pCj%2Bzc6%2B%2FfTWKm2WWWQGAvyMAjUS6a1NwRoIjtkkvnAH7RrH1jQO5XZVYIClTTdr%2BlC5TrvJ%2F0KOJZdEV7w2C1patJFfBHwnLRcN2m4Su1Ql%2BRN1Na3mEDtbB6QLlq6dSJ2TdyvhdnyqFyiVvkNcQ%2B%2FR3gNAhCsx6JVVExrbfO071txUS7zDp%2FevBBjqkAd12K9X65C4AeBVsAD3ggOkBv7XlfZQUzOkGeHXsR41h8BOxhk5aQ8w581dVHDoTDx3530MM772KjEkLmB4FmNMbh2jmwnDh8VCYr%2F%2BcKsvUNWAudhSw%2Bs5gvyrwsJJwT4AUza1Vnz2TGSprTm6EW7JheAkLESO4PcE1wflXPINx4xf4iilaToGtAZ6dfzHTUp1NV%2F6sZliohICdpJxt8yqbqwpX&X-Amz-Signature=34db73f8bc33cdbdc6f7570e49f30df817369005573f948c0f39c3018919b95b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64PL3CB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVTWRg65VHgzcbklnEgoAZO1Tts2wpa1QLd%2Bf%2BY52BbQIhAP31GtkuHU10pVSkA8FLppWCTYO2YYbW4B%2FvX4%2FAqaIfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrO5wnFrmWtVGLoJMq3AOQ6szYBQJeD1jcmGnVv2QOYMiBUxLMOkWtKAumwLiqXR4x4QXnGs8VSOw8l5eZ9UfAcynw44ofru3kPoYz6qAV7n1jlbmDMleBzvS8ufhFkCcj%2FsohFycMIMYcdaAhE7x%2FHexnO39LRwlms6XWFVE8GyLlu5Y1BtgHBVw6PAXDyX9b0t2N21doc2EgqlSSA9wiDaIfLeqVmSxhprJplxDDNb3sguDfgsjPILqTYxFUDT%2FJ%2F9GnJ%2FHCj1PLegIylWkz9CZaUMOrTX3ExuEsGSf4FWm7jk6v%2Bjq%2BrIlsL7sbeDito63ebLR6MKFVarzzP8SJaj2cquXdZWtPg1HQXtPNktB9LBhybQ4z5ri4v1inUrAUTKgO67cYR4%2BpXKlOoKAQsLJGrqAY%2B8rk1rvgJxF3my2zG7THBCcux9ZGIxsKoQT9vEGqnoOf3ddZj5%2FwGs%2FbvpqxyI1pCj%2Bzc6%2B%2FfTWKm2WWWQGAvyMAjUS6a1NwRoIjtkkvnAH7RrH1jQO5XZVYIClTTdr%2BlC5TrvJ%2F0KOJZdEV7w2C1patJFfBHwnLRcN2m4Su1Ql%2BRN1Na3mEDtbB6QLlq6dSJ2TdyvhdnyqFyiVvkNcQ%2B%2FR3gNAhCsx6JVVExrbfO071txUS7zDp%2FevBBjqkAd12K9X65C4AeBVsAD3ggOkBv7XlfZQUzOkGeHXsR41h8BOxhk5aQ8w581dVHDoTDx3530MM772KjEkLmB4FmNMbh2jmwnDh8VCYr%2F%2BcKsvUNWAudhSw%2Bs5gvyrwsJJwT4AUza1Vnz2TGSprTm6EW7JheAkLESO4PcE1wflXPINx4xf4iilaToGtAZ6dfzHTUp1NV%2F6sZliohICdpJxt8yqbqwpX&X-Amz-Signature=76026c0a9e820bc31bc8920ff762c9fd3991f7d493290945fede136d2da2e1a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64PL3CB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVTWRg65VHgzcbklnEgoAZO1Tts2wpa1QLd%2Bf%2BY52BbQIhAP31GtkuHU10pVSkA8FLppWCTYO2YYbW4B%2FvX4%2FAqaIfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrO5wnFrmWtVGLoJMq3AOQ6szYBQJeD1jcmGnVv2QOYMiBUxLMOkWtKAumwLiqXR4x4QXnGs8VSOw8l5eZ9UfAcynw44ofru3kPoYz6qAV7n1jlbmDMleBzvS8ufhFkCcj%2FsohFycMIMYcdaAhE7x%2FHexnO39LRwlms6XWFVE8GyLlu5Y1BtgHBVw6PAXDyX9b0t2N21doc2EgqlSSA9wiDaIfLeqVmSxhprJplxDDNb3sguDfgsjPILqTYxFUDT%2FJ%2F9GnJ%2FHCj1PLegIylWkz9CZaUMOrTX3ExuEsGSf4FWm7jk6v%2Bjq%2BrIlsL7sbeDito63ebLR6MKFVarzzP8SJaj2cquXdZWtPg1HQXtPNktB9LBhybQ4z5ri4v1inUrAUTKgO67cYR4%2BpXKlOoKAQsLJGrqAY%2B8rk1rvgJxF3my2zG7THBCcux9ZGIxsKoQT9vEGqnoOf3ddZj5%2FwGs%2FbvpqxyI1pCj%2Bzc6%2B%2FfTWKm2WWWQGAvyMAjUS6a1NwRoIjtkkvnAH7RrH1jQO5XZVYIClTTdr%2BlC5TrvJ%2F0KOJZdEV7w2C1patJFfBHwnLRcN2m4Su1Ql%2BRN1Na3mEDtbB6QLlq6dSJ2TdyvhdnyqFyiVvkNcQ%2B%2FR3gNAhCsx6JVVExrbfO071txUS7zDp%2FevBBjqkAd12K9X65C4AeBVsAD3ggOkBv7XlfZQUzOkGeHXsR41h8BOxhk5aQ8w581dVHDoTDx3530MM772KjEkLmB4FmNMbh2jmwnDh8VCYr%2F%2BcKsvUNWAudhSw%2Bs5gvyrwsJJwT4AUza1Vnz2TGSprTm6EW7JheAkLESO4PcE1wflXPINx4xf4iilaToGtAZ6dfzHTUp1NV%2F6sZliohICdpJxt8yqbqwpX&X-Amz-Signature=b3ba38b75eaa3466f9e9cdc7428ce1b9f1a6d4241e3e228f5afcc51f927c5a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64PL3CB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVTWRg65VHgzcbklnEgoAZO1Tts2wpa1QLd%2Bf%2BY52BbQIhAP31GtkuHU10pVSkA8FLppWCTYO2YYbW4B%2FvX4%2FAqaIfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrO5wnFrmWtVGLoJMq3AOQ6szYBQJeD1jcmGnVv2QOYMiBUxLMOkWtKAumwLiqXR4x4QXnGs8VSOw8l5eZ9UfAcynw44ofru3kPoYz6qAV7n1jlbmDMleBzvS8ufhFkCcj%2FsohFycMIMYcdaAhE7x%2FHexnO39LRwlms6XWFVE8GyLlu5Y1BtgHBVw6PAXDyX9b0t2N21doc2EgqlSSA9wiDaIfLeqVmSxhprJplxDDNb3sguDfgsjPILqTYxFUDT%2FJ%2F9GnJ%2FHCj1PLegIylWkz9CZaUMOrTX3ExuEsGSf4FWm7jk6v%2Bjq%2BrIlsL7sbeDito63ebLR6MKFVarzzP8SJaj2cquXdZWtPg1HQXtPNktB9LBhybQ4z5ri4v1inUrAUTKgO67cYR4%2BpXKlOoKAQsLJGrqAY%2B8rk1rvgJxF3my2zG7THBCcux9ZGIxsKoQT9vEGqnoOf3ddZj5%2FwGs%2FbvpqxyI1pCj%2Bzc6%2B%2FfTWKm2WWWQGAvyMAjUS6a1NwRoIjtkkvnAH7RrH1jQO5XZVYIClTTdr%2BlC5TrvJ%2F0KOJZdEV7w2C1patJFfBHwnLRcN2m4Su1Ql%2BRN1Na3mEDtbB6QLlq6dSJ2TdyvhdnyqFyiVvkNcQ%2B%2FR3gNAhCsx6JVVExrbfO071txUS7zDp%2FevBBjqkAd12K9X65C4AeBVsAD3ggOkBv7XlfZQUzOkGeHXsR41h8BOxhk5aQ8w581dVHDoTDx3530MM772KjEkLmB4FmNMbh2jmwnDh8VCYr%2F%2BcKsvUNWAudhSw%2Bs5gvyrwsJJwT4AUza1Vnz2TGSprTm6EW7JheAkLESO4PcE1wflXPINx4xf4iilaToGtAZ6dfzHTUp1NV%2F6sZliohICdpJxt8yqbqwpX&X-Amz-Signature=2e35f74ff3da1a387f5a1a748614510760d60b7aa00068334aa92f97ff4caa71&X-Amz-SignedHeaders=host&x-id=GetObject)
