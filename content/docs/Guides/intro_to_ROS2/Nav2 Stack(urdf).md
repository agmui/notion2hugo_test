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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLQSYID%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIADVRW6FSIATkn0bUQ979IE3rDwkq7kE6Qp7Rcwz2426AiBk%2FuANcZ95%2BsE0sngC%2B%2BbhIaZvI82xKBOSXDbbCRKEKSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMQ9XpBpqrvxEplRshKtwD%2BS%2F6HkBeylLY0SoAo5g%2FII7UjqH8uc0nlEEsFD6%2Bmt7j1j%2BdiaI8ylrEPIWXBQZ%2F%2FwMj26dA7M6gVMEM4A9Cx8MK7VrGI4NrUpJhFlkKTR9KUF8Du7kmh6BgnGhzN9496d%2FEI%2FQ9iQF6UMGjBB3XpB%2B50HbUgfmTWzyt5%2B1Iip76G9gAxMfSht8my3a6EJq0SYBAXnIJAjHL2Hd9NRIuggfOUJgfXIeSeeifQSJ5J6%2BYHLeSV15fiINd29h9NtPRZCqk%2BA5AEcGuKLJsfo7clLZq24ZcDTFo35Ehk3pm5SojxYsgFXmUEJOekg7Y63OGQXlVKf0SZaJ2Uxam66flouH4r7k076j3wE%2FNs6as7Qgtc7iXelyxr3Ssw6y3Nk85bCKKuG2WAVsh3fswrTv7V4%2Faq01gvNk1Tlh%2BZwv3T32YX6K7dAVOMMR%2FzRcfGK8nx74LHC0ihm1z%2Fh6ijkhZLgliC8BTXRrja7wXaH9qxpBeaceqh0mEpM3ecW4Q0pAcCrvk4%2BneSoo3N8E12De%2BQQeVaT1G9prZhn9fhXo7BMoaVEkKKuQyj%2FakAsFlTd0d1EP6vzswOONYrMViVDPTkrM6XQ5u%2F08iru%2FITWy12LAxbw6HNcbZ7DRWtiowhYj8vQY6pgH1Fmj3gtp5TOYfVF%2Fk84nwO7L9Iecb6IJ8APRCIeGSYc4s%2B5IacCQwblAemEbFcHIw30qHtkqzikWmWkte6P9S6vBu1nNmTCRemf8HoJxk0RHd%2B%2BZiqTVnmgWqNtsRgNa%2FnhtOPwc6kCqlcF2%2BEuUYwJPfsvojJ4VvkjWgJzNNX1LDir0eKbS2ClxydTjT0%2FOmn6FOTPkYCAEovHjZd1lX1GSzVOs4&X-Amz-Signature=f0a15659f31a1e4873db3868de409485476ecbc9f38c9df9238b2519d546b80e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLQSYID%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIADVRW6FSIATkn0bUQ979IE3rDwkq7kE6Qp7Rcwz2426AiBk%2FuANcZ95%2BsE0sngC%2B%2BbhIaZvI82xKBOSXDbbCRKEKSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMQ9XpBpqrvxEplRshKtwD%2BS%2F6HkBeylLY0SoAo5g%2FII7UjqH8uc0nlEEsFD6%2Bmt7j1j%2BdiaI8ylrEPIWXBQZ%2F%2FwMj26dA7M6gVMEM4A9Cx8MK7VrGI4NrUpJhFlkKTR9KUF8Du7kmh6BgnGhzN9496d%2FEI%2FQ9iQF6UMGjBB3XpB%2B50HbUgfmTWzyt5%2B1Iip76G9gAxMfSht8my3a6EJq0SYBAXnIJAjHL2Hd9NRIuggfOUJgfXIeSeeifQSJ5J6%2BYHLeSV15fiINd29h9NtPRZCqk%2BA5AEcGuKLJsfo7clLZq24ZcDTFo35Ehk3pm5SojxYsgFXmUEJOekg7Y63OGQXlVKf0SZaJ2Uxam66flouH4r7k076j3wE%2FNs6as7Qgtc7iXelyxr3Ssw6y3Nk85bCKKuG2WAVsh3fswrTv7V4%2Faq01gvNk1Tlh%2BZwv3T32YX6K7dAVOMMR%2FzRcfGK8nx74LHC0ihm1z%2Fh6ijkhZLgliC8BTXRrja7wXaH9qxpBeaceqh0mEpM3ecW4Q0pAcCrvk4%2BneSoo3N8E12De%2BQQeVaT1G9prZhn9fhXo7BMoaVEkKKuQyj%2FakAsFlTd0d1EP6vzswOONYrMViVDPTkrM6XQ5u%2F08iru%2FITWy12LAxbw6HNcbZ7DRWtiowhYj8vQY6pgH1Fmj3gtp5TOYfVF%2Fk84nwO7L9Iecb6IJ8APRCIeGSYc4s%2B5IacCQwblAemEbFcHIw30qHtkqzikWmWkte6P9S6vBu1nNmTCRemf8HoJxk0RHd%2B%2BZiqTVnmgWqNtsRgNa%2FnhtOPwc6kCqlcF2%2BEuUYwJPfsvojJ4VvkjWgJzNNX1LDir0eKbS2ClxydTjT0%2FOmn6FOTPkYCAEovHjZd1lX1GSzVOs4&X-Amz-Signature=b9846148e9e3eee7ea48e426e21e99d3f74b03dd6be4396a61d57f855c5495b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLQSYID%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIADVRW6FSIATkn0bUQ979IE3rDwkq7kE6Qp7Rcwz2426AiBk%2FuANcZ95%2BsE0sngC%2B%2BbhIaZvI82xKBOSXDbbCRKEKSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMQ9XpBpqrvxEplRshKtwD%2BS%2F6HkBeylLY0SoAo5g%2FII7UjqH8uc0nlEEsFD6%2Bmt7j1j%2BdiaI8ylrEPIWXBQZ%2F%2FwMj26dA7M6gVMEM4A9Cx8MK7VrGI4NrUpJhFlkKTR9KUF8Du7kmh6BgnGhzN9496d%2FEI%2FQ9iQF6UMGjBB3XpB%2B50HbUgfmTWzyt5%2B1Iip76G9gAxMfSht8my3a6EJq0SYBAXnIJAjHL2Hd9NRIuggfOUJgfXIeSeeifQSJ5J6%2BYHLeSV15fiINd29h9NtPRZCqk%2BA5AEcGuKLJsfo7clLZq24ZcDTFo35Ehk3pm5SojxYsgFXmUEJOekg7Y63OGQXlVKf0SZaJ2Uxam66flouH4r7k076j3wE%2FNs6as7Qgtc7iXelyxr3Ssw6y3Nk85bCKKuG2WAVsh3fswrTv7V4%2Faq01gvNk1Tlh%2BZwv3T32YX6K7dAVOMMR%2FzRcfGK8nx74LHC0ihm1z%2Fh6ijkhZLgliC8BTXRrja7wXaH9qxpBeaceqh0mEpM3ecW4Q0pAcCrvk4%2BneSoo3N8E12De%2BQQeVaT1G9prZhn9fhXo7BMoaVEkKKuQyj%2FakAsFlTd0d1EP6vzswOONYrMViVDPTkrM6XQ5u%2F08iru%2FITWy12LAxbw6HNcbZ7DRWtiowhYj8vQY6pgH1Fmj3gtp5TOYfVF%2Fk84nwO7L9Iecb6IJ8APRCIeGSYc4s%2B5IacCQwblAemEbFcHIw30qHtkqzikWmWkte6P9S6vBu1nNmTCRemf8HoJxk0RHd%2B%2BZiqTVnmgWqNtsRgNa%2FnhtOPwc6kCqlcF2%2BEuUYwJPfsvojJ4VvkjWgJzNNX1LDir0eKbS2ClxydTjT0%2FOmn6FOTPkYCAEovHjZd1lX1GSzVOs4&X-Amz-Signature=f24f9929f78754f900e9a158987a6179c2386c4b93ad85f3bf8f982c98e7a14c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLQSYID%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIADVRW6FSIATkn0bUQ979IE3rDwkq7kE6Qp7Rcwz2426AiBk%2FuANcZ95%2BsE0sngC%2B%2BbhIaZvI82xKBOSXDbbCRKEKSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMQ9XpBpqrvxEplRshKtwD%2BS%2F6HkBeylLY0SoAo5g%2FII7UjqH8uc0nlEEsFD6%2Bmt7j1j%2BdiaI8ylrEPIWXBQZ%2F%2FwMj26dA7M6gVMEM4A9Cx8MK7VrGI4NrUpJhFlkKTR9KUF8Du7kmh6BgnGhzN9496d%2FEI%2FQ9iQF6UMGjBB3XpB%2B50HbUgfmTWzyt5%2B1Iip76G9gAxMfSht8my3a6EJq0SYBAXnIJAjHL2Hd9NRIuggfOUJgfXIeSeeifQSJ5J6%2BYHLeSV15fiINd29h9NtPRZCqk%2BA5AEcGuKLJsfo7clLZq24ZcDTFo35Ehk3pm5SojxYsgFXmUEJOekg7Y63OGQXlVKf0SZaJ2Uxam66flouH4r7k076j3wE%2FNs6as7Qgtc7iXelyxr3Ssw6y3Nk85bCKKuG2WAVsh3fswrTv7V4%2Faq01gvNk1Tlh%2BZwv3T32YX6K7dAVOMMR%2FzRcfGK8nx74LHC0ihm1z%2Fh6ijkhZLgliC8BTXRrja7wXaH9qxpBeaceqh0mEpM3ecW4Q0pAcCrvk4%2BneSoo3N8E12De%2BQQeVaT1G9prZhn9fhXo7BMoaVEkKKuQyj%2FakAsFlTd0d1EP6vzswOONYrMViVDPTkrM6XQ5u%2F08iru%2FITWy12LAxbw6HNcbZ7DRWtiowhYj8vQY6pgH1Fmj3gtp5TOYfVF%2Fk84nwO7L9Iecb6IJ8APRCIeGSYc4s%2B5IacCQwblAemEbFcHIw30qHtkqzikWmWkte6P9S6vBu1nNmTCRemf8HoJxk0RHd%2B%2BZiqTVnmgWqNtsRgNa%2FnhtOPwc6kCqlcF2%2BEuUYwJPfsvojJ4VvkjWgJzNNX1LDir0eKbS2ClxydTjT0%2FOmn6FOTPkYCAEovHjZd1lX1GSzVOs4&X-Amz-Signature=7766c7fcfff6896b72861c8f8da4c1a2fc4d595f1ec8378a065663af908f58ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLQSYID%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIADVRW6FSIATkn0bUQ979IE3rDwkq7kE6Qp7Rcwz2426AiBk%2FuANcZ95%2BsE0sngC%2B%2BbhIaZvI82xKBOSXDbbCRKEKSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMQ9XpBpqrvxEplRshKtwD%2BS%2F6HkBeylLY0SoAo5g%2FII7UjqH8uc0nlEEsFD6%2Bmt7j1j%2BdiaI8ylrEPIWXBQZ%2F%2FwMj26dA7M6gVMEM4A9Cx8MK7VrGI4NrUpJhFlkKTR9KUF8Du7kmh6BgnGhzN9496d%2FEI%2FQ9iQF6UMGjBB3XpB%2B50HbUgfmTWzyt5%2B1Iip76G9gAxMfSht8my3a6EJq0SYBAXnIJAjHL2Hd9NRIuggfOUJgfXIeSeeifQSJ5J6%2BYHLeSV15fiINd29h9NtPRZCqk%2BA5AEcGuKLJsfo7clLZq24ZcDTFo35Ehk3pm5SojxYsgFXmUEJOekg7Y63OGQXlVKf0SZaJ2Uxam66flouH4r7k076j3wE%2FNs6as7Qgtc7iXelyxr3Ssw6y3Nk85bCKKuG2WAVsh3fswrTv7V4%2Faq01gvNk1Tlh%2BZwv3T32YX6K7dAVOMMR%2FzRcfGK8nx74LHC0ihm1z%2Fh6ijkhZLgliC8BTXRrja7wXaH9qxpBeaceqh0mEpM3ecW4Q0pAcCrvk4%2BneSoo3N8E12De%2BQQeVaT1G9prZhn9fhXo7BMoaVEkKKuQyj%2FakAsFlTd0d1EP6vzswOONYrMViVDPTkrM6XQ5u%2F08iru%2FITWy12LAxbw6HNcbZ7DRWtiowhYj8vQY6pgH1Fmj3gtp5TOYfVF%2Fk84nwO7L9Iecb6IJ8APRCIeGSYc4s%2B5IacCQwblAemEbFcHIw30qHtkqzikWmWkte6P9S6vBu1nNmTCRemf8HoJxk0RHd%2B%2BZiqTVnmgWqNtsRgNa%2FnhtOPwc6kCqlcF2%2BEuUYwJPfsvojJ4VvkjWgJzNNX1LDir0eKbS2ClxydTjT0%2FOmn6FOTPkYCAEovHjZd1lX1GSzVOs4&X-Amz-Signature=98f71b8ec6200586fdd8c0fcd07866f38a35e9474959b64b66a61ef33c08b9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLQSYID%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIADVRW6FSIATkn0bUQ979IE3rDwkq7kE6Qp7Rcwz2426AiBk%2FuANcZ95%2BsE0sngC%2B%2BbhIaZvI82xKBOSXDbbCRKEKSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMQ9XpBpqrvxEplRshKtwD%2BS%2F6HkBeylLY0SoAo5g%2FII7UjqH8uc0nlEEsFD6%2Bmt7j1j%2BdiaI8ylrEPIWXBQZ%2F%2FwMj26dA7M6gVMEM4A9Cx8MK7VrGI4NrUpJhFlkKTR9KUF8Du7kmh6BgnGhzN9496d%2FEI%2FQ9iQF6UMGjBB3XpB%2B50HbUgfmTWzyt5%2B1Iip76G9gAxMfSht8my3a6EJq0SYBAXnIJAjHL2Hd9NRIuggfOUJgfXIeSeeifQSJ5J6%2BYHLeSV15fiINd29h9NtPRZCqk%2BA5AEcGuKLJsfo7clLZq24ZcDTFo35Ehk3pm5SojxYsgFXmUEJOekg7Y63OGQXlVKf0SZaJ2Uxam66flouH4r7k076j3wE%2FNs6as7Qgtc7iXelyxr3Ssw6y3Nk85bCKKuG2WAVsh3fswrTv7V4%2Faq01gvNk1Tlh%2BZwv3T32YX6K7dAVOMMR%2FzRcfGK8nx74LHC0ihm1z%2Fh6ijkhZLgliC8BTXRrja7wXaH9qxpBeaceqh0mEpM3ecW4Q0pAcCrvk4%2BneSoo3N8E12De%2BQQeVaT1G9prZhn9fhXo7BMoaVEkKKuQyj%2FakAsFlTd0d1EP6vzswOONYrMViVDPTkrM6XQ5u%2F08iru%2FITWy12LAxbw6HNcbZ7DRWtiowhYj8vQY6pgH1Fmj3gtp5TOYfVF%2Fk84nwO7L9Iecb6IJ8APRCIeGSYc4s%2B5IacCQwblAemEbFcHIw30qHtkqzikWmWkte6P9S6vBu1nNmTCRemf8HoJxk0RHd%2B%2BZiqTVnmgWqNtsRgNa%2FnhtOPwc6kCqlcF2%2BEuUYwJPfsvojJ4VvkjWgJzNNX1LDir0eKbS2ClxydTjT0%2FOmn6FOTPkYCAEovHjZd1lX1GSzVOs4&X-Amz-Signature=cad19a4ef13536fe6a96002a0e5a4dc9b3972d9247c4ab120d73f178f20b2fd8&X-Amz-SignedHeaders=host&x-id=GetObject)
