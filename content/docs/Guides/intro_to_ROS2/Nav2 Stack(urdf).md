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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4JB5I7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDhMuK1ZRFsv6y52nc5giTfKRbtNrEGcAN56kpMoQPqYgIhAJAXbRga%2BYf1KI8W%2BdOW5hFeRiW5PZDJAEFId%2BDOoANFKv8DCFwQABoMNjM3NDIzMTgzODA1Igx3X%2FPpgWQ1IP98y9kq3APd9fwHYY2HLUA0gEtvTpVP4sjAEFFyTHCO5V2ARJXSh%2BzvG7BCcQ%2B7BkbsxwmW%2FmzV0nHyxEjO3BSKD9PVbx5ao%2BhSbcVbEEUY9ddDvIpYMs5dLtNDW8YLhlZ16DAl42e8h5can8qDjJyRf6whafA%2F%2FzUkiwjL9Tff6RLhkyMvhCiLu5CidZBfc1hf1DZ0N775tN4jNVhWwE0uFGiWIXU2xUyvamklYpW0xi7WvLrbSytC1aS%2FytuF812WktOX%2FPs2KJbKH5Ro1pABOyHahQv2x5ppQxo%2FIkUm26%2BXCsxB9dPpjikTMMR%2B%2Bs6abJos1zxU2S7MdEy04XzKf3Ck92NOxPlj0QtQTpL52jncDWU0D10T2CWTZCVFCDmFtCg4%2BppSIaeoo5O457jDBRzbHkysJdUK6TrVviuyqy0PHZpNnzQILzpikUQ9L0ATw1%2BRwZom5sLRmNiu900ZapT6YjQgtp%2BpIPKxqFeIJyOfwuL9MTxs5cA%2FG3T3a%2FBaNOkFtJVvFrKNyglqAB3P%2Bu6cYZrYIa%2Fc%2FeplkZjgFSfyDtD1KUQfYdPoZePrMuh5HAyyYvHvLyBrK0T52BuQ3g%2BLOW8dHlrVCndzMNqZrdLUtgLDOOF5yEfO8k9hmyI1hjDqx7C%2BBjqkAbqkwJX7PPt1eatlE3z4tdNLcYM4lPD0zyDxHHjGHjy9l3pGp5ozHlojTI%2F1MgCp3WXdzMMZaaqU%2Binrq6RnChaipPaePdR94%2Fnz1WG9fcModW2THzBUNaaZjy7lZqwZnDCm9h%2BDYF1cAHj1XF%2BN06BNT9oFdvRqOpbjtaGyKQKJAQCQehAKFzhNXgfu1GhZ4r5kJG7MjJAKep6NNiJldzwIGNbU&X-Amz-Signature=f90c9e3dd8fbafd96d07d035cafbac2896e9a211efd16fed232ec948d9deb2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4JB5I7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDhMuK1ZRFsv6y52nc5giTfKRbtNrEGcAN56kpMoQPqYgIhAJAXbRga%2BYf1KI8W%2BdOW5hFeRiW5PZDJAEFId%2BDOoANFKv8DCFwQABoMNjM3NDIzMTgzODA1Igx3X%2FPpgWQ1IP98y9kq3APd9fwHYY2HLUA0gEtvTpVP4sjAEFFyTHCO5V2ARJXSh%2BzvG7BCcQ%2B7BkbsxwmW%2FmzV0nHyxEjO3BSKD9PVbx5ao%2BhSbcVbEEUY9ddDvIpYMs5dLtNDW8YLhlZ16DAl42e8h5can8qDjJyRf6whafA%2F%2FzUkiwjL9Tff6RLhkyMvhCiLu5CidZBfc1hf1DZ0N775tN4jNVhWwE0uFGiWIXU2xUyvamklYpW0xi7WvLrbSytC1aS%2FytuF812WktOX%2FPs2KJbKH5Ro1pABOyHahQv2x5ppQxo%2FIkUm26%2BXCsxB9dPpjikTMMR%2B%2Bs6abJos1zxU2S7MdEy04XzKf3Ck92NOxPlj0QtQTpL52jncDWU0D10T2CWTZCVFCDmFtCg4%2BppSIaeoo5O457jDBRzbHkysJdUK6TrVviuyqy0PHZpNnzQILzpikUQ9L0ATw1%2BRwZom5sLRmNiu900ZapT6YjQgtp%2BpIPKxqFeIJyOfwuL9MTxs5cA%2FG3T3a%2FBaNOkFtJVvFrKNyglqAB3P%2Bu6cYZrYIa%2Fc%2FeplkZjgFSfyDtD1KUQfYdPoZePrMuh5HAyyYvHvLyBrK0T52BuQ3g%2BLOW8dHlrVCndzMNqZrdLUtgLDOOF5yEfO8k9hmyI1hjDqx7C%2BBjqkAbqkwJX7PPt1eatlE3z4tdNLcYM4lPD0zyDxHHjGHjy9l3pGp5ozHlojTI%2F1MgCp3WXdzMMZaaqU%2Binrq6RnChaipPaePdR94%2Fnz1WG9fcModW2THzBUNaaZjy7lZqwZnDCm9h%2BDYF1cAHj1XF%2BN06BNT9oFdvRqOpbjtaGyKQKJAQCQehAKFzhNXgfu1GhZ4r5kJG7MjJAKep6NNiJldzwIGNbU&X-Amz-Signature=c5178df550707c043c81b35da15fb74a65e4d7239463f2d51495194e2bc5ca84&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4JB5I7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDhMuK1ZRFsv6y52nc5giTfKRbtNrEGcAN56kpMoQPqYgIhAJAXbRga%2BYf1KI8W%2BdOW5hFeRiW5PZDJAEFId%2BDOoANFKv8DCFwQABoMNjM3NDIzMTgzODA1Igx3X%2FPpgWQ1IP98y9kq3APd9fwHYY2HLUA0gEtvTpVP4sjAEFFyTHCO5V2ARJXSh%2BzvG7BCcQ%2B7BkbsxwmW%2FmzV0nHyxEjO3BSKD9PVbx5ao%2BhSbcVbEEUY9ddDvIpYMs5dLtNDW8YLhlZ16DAl42e8h5can8qDjJyRf6whafA%2F%2FzUkiwjL9Tff6RLhkyMvhCiLu5CidZBfc1hf1DZ0N775tN4jNVhWwE0uFGiWIXU2xUyvamklYpW0xi7WvLrbSytC1aS%2FytuF812WktOX%2FPs2KJbKH5Ro1pABOyHahQv2x5ppQxo%2FIkUm26%2BXCsxB9dPpjikTMMR%2B%2Bs6abJos1zxU2S7MdEy04XzKf3Ck92NOxPlj0QtQTpL52jncDWU0D10T2CWTZCVFCDmFtCg4%2BppSIaeoo5O457jDBRzbHkysJdUK6TrVviuyqy0PHZpNnzQILzpikUQ9L0ATw1%2BRwZom5sLRmNiu900ZapT6YjQgtp%2BpIPKxqFeIJyOfwuL9MTxs5cA%2FG3T3a%2FBaNOkFtJVvFrKNyglqAB3P%2Bu6cYZrYIa%2Fc%2FeplkZjgFSfyDtD1KUQfYdPoZePrMuh5HAyyYvHvLyBrK0T52BuQ3g%2BLOW8dHlrVCndzMNqZrdLUtgLDOOF5yEfO8k9hmyI1hjDqx7C%2BBjqkAbqkwJX7PPt1eatlE3z4tdNLcYM4lPD0zyDxHHjGHjy9l3pGp5ozHlojTI%2F1MgCp3WXdzMMZaaqU%2Binrq6RnChaipPaePdR94%2Fnz1WG9fcModW2THzBUNaaZjy7lZqwZnDCm9h%2BDYF1cAHj1XF%2BN06BNT9oFdvRqOpbjtaGyKQKJAQCQehAKFzhNXgfu1GhZ4r5kJG7MjJAKep6NNiJldzwIGNbU&X-Amz-Signature=6aa55e87f97ead2c880cb83810c54108c5a6b16d98cc5ce143ce66d30306c0bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4JB5I7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDhMuK1ZRFsv6y52nc5giTfKRbtNrEGcAN56kpMoQPqYgIhAJAXbRga%2BYf1KI8W%2BdOW5hFeRiW5PZDJAEFId%2BDOoANFKv8DCFwQABoMNjM3NDIzMTgzODA1Igx3X%2FPpgWQ1IP98y9kq3APd9fwHYY2HLUA0gEtvTpVP4sjAEFFyTHCO5V2ARJXSh%2BzvG7BCcQ%2B7BkbsxwmW%2FmzV0nHyxEjO3BSKD9PVbx5ao%2BhSbcVbEEUY9ddDvIpYMs5dLtNDW8YLhlZ16DAl42e8h5can8qDjJyRf6whafA%2F%2FzUkiwjL9Tff6RLhkyMvhCiLu5CidZBfc1hf1DZ0N775tN4jNVhWwE0uFGiWIXU2xUyvamklYpW0xi7WvLrbSytC1aS%2FytuF812WktOX%2FPs2KJbKH5Ro1pABOyHahQv2x5ppQxo%2FIkUm26%2BXCsxB9dPpjikTMMR%2B%2Bs6abJos1zxU2S7MdEy04XzKf3Ck92NOxPlj0QtQTpL52jncDWU0D10T2CWTZCVFCDmFtCg4%2BppSIaeoo5O457jDBRzbHkysJdUK6TrVviuyqy0PHZpNnzQILzpikUQ9L0ATw1%2BRwZom5sLRmNiu900ZapT6YjQgtp%2BpIPKxqFeIJyOfwuL9MTxs5cA%2FG3T3a%2FBaNOkFtJVvFrKNyglqAB3P%2Bu6cYZrYIa%2Fc%2FeplkZjgFSfyDtD1KUQfYdPoZePrMuh5HAyyYvHvLyBrK0T52BuQ3g%2BLOW8dHlrVCndzMNqZrdLUtgLDOOF5yEfO8k9hmyI1hjDqx7C%2BBjqkAbqkwJX7PPt1eatlE3z4tdNLcYM4lPD0zyDxHHjGHjy9l3pGp5ozHlojTI%2F1MgCp3WXdzMMZaaqU%2Binrq6RnChaipPaePdR94%2Fnz1WG9fcModW2THzBUNaaZjy7lZqwZnDCm9h%2BDYF1cAHj1XF%2BN06BNT9oFdvRqOpbjtaGyKQKJAQCQehAKFzhNXgfu1GhZ4r5kJG7MjJAKep6NNiJldzwIGNbU&X-Amz-Signature=61b87d939674ef633947dbd69705a5093370cdb9172646fbeef544b76b1c2bd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4JB5I7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDhMuK1ZRFsv6y52nc5giTfKRbtNrEGcAN56kpMoQPqYgIhAJAXbRga%2BYf1KI8W%2BdOW5hFeRiW5PZDJAEFId%2BDOoANFKv8DCFwQABoMNjM3NDIzMTgzODA1Igx3X%2FPpgWQ1IP98y9kq3APd9fwHYY2HLUA0gEtvTpVP4sjAEFFyTHCO5V2ARJXSh%2BzvG7BCcQ%2B7BkbsxwmW%2FmzV0nHyxEjO3BSKD9PVbx5ao%2BhSbcVbEEUY9ddDvIpYMs5dLtNDW8YLhlZ16DAl42e8h5can8qDjJyRf6whafA%2F%2FzUkiwjL9Tff6RLhkyMvhCiLu5CidZBfc1hf1DZ0N775tN4jNVhWwE0uFGiWIXU2xUyvamklYpW0xi7WvLrbSytC1aS%2FytuF812WktOX%2FPs2KJbKH5Ro1pABOyHahQv2x5ppQxo%2FIkUm26%2BXCsxB9dPpjikTMMR%2B%2Bs6abJos1zxU2S7MdEy04XzKf3Ck92NOxPlj0QtQTpL52jncDWU0D10T2CWTZCVFCDmFtCg4%2BppSIaeoo5O457jDBRzbHkysJdUK6TrVviuyqy0PHZpNnzQILzpikUQ9L0ATw1%2BRwZom5sLRmNiu900ZapT6YjQgtp%2BpIPKxqFeIJyOfwuL9MTxs5cA%2FG3T3a%2FBaNOkFtJVvFrKNyglqAB3P%2Bu6cYZrYIa%2Fc%2FeplkZjgFSfyDtD1KUQfYdPoZePrMuh5HAyyYvHvLyBrK0T52BuQ3g%2BLOW8dHlrVCndzMNqZrdLUtgLDOOF5yEfO8k9hmyI1hjDqx7C%2BBjqkAbqkwJX7PPt1eatlE3z4tdNLcYM4lPD0zyDxHHjGHjy9l3pGp5ozHlojTI%2F1MgCp3WXdzMMZaaqU%2Binrq6RnChaipPaePdR94%2Fnz1WG9fcModW2THzBUNaaZjy7lZqwZnDCm9h%2BDYF1cAHj1XF%2BN06BNT9oFdvRqOpbjtaGyKQKJAQCQehAKFzhNXgfu1GhZ4r5kJG7MjJAKep6NNiJldzwIGNbU&X-Amz-Signature=40d9752102172336120cf517aa7a51dd3d33fdf2eeefb83eb287b87e724641db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4JB5I7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDhMuK1ZRFsv6y52nc5giTfKRbtNrEGcAN56kpMoQPqYgIhAJAXbRga%2BYf1KI8W%2BdOW5hFeRiW5PZDJAEFId%2BDOoANFKv8DCFwQABoMNjM3NDIzMTgzODA1Igx3X%2FPpgWQ1IP98y9kq3APd9fwHYY2HLUA0gEtvTpVP4sjAEFFyTHCO5V2ARJXSh%2BzvG7BCcQ%2B7BkbsxwmW%2FmzV0nHyxEjO3BSKD9PVbx5ao%2BhSbcVbEEUY9ddDvIpYMs5dLtNDW8YLhlZ16DAl42e8h5can8qDjJyRf6whafA%2F%2FzUkiwjL9Tff6RLhkyMvhCiLu5CidZBfc1hf1DZ0N775tN4jNVhWwE0uFGiWIXU2xUyvamklYpW0xi7WvLrbSytC1aS%2FytuF812WktOX%2FPs2KJbKH5Ro1pABOyHahQv2x5ppQxo%2FIkUm26%2BXCsxB9dPpjikTMMR%2B%2Bs6abJos1zxU2S7MdEy04XzKf3Ck92NOxPlj0QtQTpL52jncDWU0D10T2CWTZCVFCDmFtCg4%2BppSIaeoo5O457jDBRzbHkysJdUK6TrVviuyqy0PHZpNnzQILzpikUQ9L0ATw1%2BRwZom5sLRmNiu900ZapT6YjQgtp%2BpIPKxqFeIJyOfwuL9MTxs5cA%2FG3T3a%2FBaNOkFtJVvFrKNyglqAB3P%2Bu6cYZrYIa%2Fc%2FeplkZjgFSfyDtD1KUQfYdPoZePrMuh5HAyyYvHvLyBrK0T52BuQ3g%2BLOW8dHlrVCndzMNqZrdLUtgLDOOF5yEfO8k9hmyI1hjDqx7C%2BBjqkAbqkwJX7PPt1eatlE3z4tdNLcYM4lPD0zyDxHHjGHjy9l3pGp5ozHlojTI%2F1MgCp3WXdzMMZaaqU%2Binrq6RnChaipPaePdR94%2Fnz1WG9fcModW2THzBUNaaZjy7lZqwZnDCm9h%2BDYF1cAHj1XF%2BN06BNT9oFdvRqOpbjtaGyKQKJAQCQehAKFzhNXgfu1GhZ4r5kJG7MjJAKep6NNiJldzwIGNbU&X-Amz-Signature=b4a592c0a1a68a11ce0e9098d37149d949d0c1811895e855b951e3091a483ac8&X-Amz-SignedHeaders=host&x-id=GetObject)
