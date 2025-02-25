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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73ILTZP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIEKMFBrvs5mDBrkGRnR%2Bp%2B%2B%2BoSjBkxnmg6zvlIU6q16tAiEAgc4Eovrxq%2By4ZMwTNc%2FzzSBvY52dHYeHXPhuueSMjlQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDItkPcvSiqPoHegTEircAzeBl8BIlmrhkrOUgRLLk1DRX56ntjPInQyNQicAteTnhIhMZcSRXYYjnQHraVh0gXIIP6tw7srDGtJ2kDLHy37n4YQh0zswFJfk2xn3UkrZJqvmfYrkA6%2F459l0LiCQenRoTiFjuafets4xOs%2BfUBFbBFQw7oamx1rkaZy0E9MBcVkyIipelSrnbMHwHGcrFY%2F82fg06J8gqcy84qdkvX9zsSWoOMLuFowb0SxKL%2B9vaw%2BfQRGG4w2FkpQXFFptK8g0kSdF5PaGhIJbV7ih6ADeoWtLHhv2hjN6C33dRBFI8Hk0Ugl%2Btz4caVxhMW5GLuTDUIyv5v9vmBjqa4MoU85OjenOwx6zex93RtgFr%2BrY2LLhqJBFUwHBRXSFL0HODCwqIUWVtDTowC8EuaFLkdvv5yqUPVIFW4xdiSAf0GmwZppJSVoVPxpACQ%2B94G4VCJZfdXENDyzuOJhMaXs2dL%2B6NTEBN9d0O7aZDww5VHJqVEYTWQrOxYmGHYOzGjx6MDvm7ZoVKwWI5WhlqEYM4MqKSdxCNK0IkuHlP%2B18y5B3%2Fdg5OBgU4i%2B%2Bnd%2B6Ys5g3UYprDzq7OUfwkKbuPDkkBRwdRh5QTWWpV%2BW51PETjNx28TgvSKGMlsxH60IMJCN%2BL0GOqUBzPzfwxvU%2Fx39iL%2FkHaeSWBKUfc3EMsKH7LH5jbB16clOATLOZlWlaR4kR%2B0Nq9h7hsd9PjiTaYoxvz7TOE08ZUti6PTJVbXn%2BSbV6wjsqTSTyNHM8UPS7GR6iIZf4bggd80pI%2Bq%2Bl8qTz%2BUrxcoN70YbVwCWci4nk%2B5OmiauOMqGAqIjG9qX%2BFGQH8ewtvFO2ZCz33BKsskmPOowqJXWwgcsgpNb&X-Amz-Signature=dec70f04a9007f7f85fe9203f6520b04f74a05cee708530223c7aa5cb6918fee&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73ILTZP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIEKMFBrvs5mDBrkGRnR%2Bp%2B%2B%2BoSjBkxnmg6zvlIU6q16tAiEAgc4Eovrxq%2By4ZMwTNc%2FzzSBvY52dHYeHXPhuueSMjlQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDItkPcvSiqPoHegTEircAzeBl8BIlmrhkrOUgRLLk1DRX56ntjPInQyNQicAteTnhIhMZcSRXYYjnQHraVh0gXIIP6tw7srDGtJ2kDLHy37n4YQh0zswFJfk2xn3UkrZJqvmfYrkA6%2F459l0LiCQenRoTiFjuafets4xOs%2BfUBFbBFQw7oamx1rkaZy0E9MBcVkyIipelSrnbMHwHGcrFY%2F82fg06J8gqcy84qdkvX9zsSWoOMLuFowb0SxKL%2B9vaw%2BfQRGG4w2FkpQXFFptK8g0kSdF5PaGhIJbV7ih6ADeoWtLHhv2hjN6C33dRBFI8Hk0Ugl%2Btz4caVxhMW5GLuTDUIyv5v9vmBjqa4MoU85OjenOwx6zex93RtgFr%2BrY2LLhqJBFUwHBRXSFL0HODCwqIUWVtDTowC8EuaFLkdvv5yqUPVIFW4xdiSAf0GmwZppJSVoVPxpACQ%2B94G4VCJZfdXENDyzuOJhMaXs2dL%2B6NTEBN9d0O7aZDww5VHJqVEYTWQrOxYmGHYOzGjx6MDvm7ZoVKwWI5WhlqEYM4MqKSdxCNK0IkuHlP%2B18y5B3%2Fdg5OBgU4i%2B%2Bnd%2B6Ys5g3UYprDzq7OUfwkKbuPDkkBRwdRh5QTWWpV%2BW51PETjNx28TgvSKGMlsxH60IMJCN%2BL0GOqUBzPzfwxvU%2Fx39iL%2FkHaeSWBKUfc3EMsKH7LH5jbB16clOATLOZlWlaR4kR%2B0Nq9h7hsd9PjiTaYoxvz7TOE08ZUti6PTJVbXn%2BSbV6wjsqTSTyNHM8UPS7GR6iIZf4bggd80pI%2Bq%2Bl8qTz%2BUrxcoN70YbVwCWci4nk%2B5OmiauOMqGAqIjG9qX%2BFGQH8ewtvFO2ZCz33BKsskmPOowqJXWwgcsgpNb&X-Amz-Signature=7574168a08888e0ca1dc2a0db75ab152ca9d99f2ea6178a6af66126bbaa5eb63&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73ILTZP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIEKMFBrvs5mDBrkGRnR%2Bp%2B%2B%2BoSjBkxnmg6zvlIU6q16tAiEAgc4Eovrxq%2By4ZMwTNc%2FzzSBvY52dHYeHXPhuueSMjlQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDItkPcvSiqPoHegTEircAzeBl8BIlmrhkrOUgRLLk1DRX56ntjPInQyNQicAteTnhIhMZcSRXYYjnQHraVh0gXIIP6tw7srDGtJ2kDLHy37n4YQh0zswFJfk2xn3UkrZJqvmfYrkA6%2F459l0LiCQenRoTiFjuafets4xOs%2BfUBFbBFQw7oamx1rkaZy0E9MBcVkyIipelSrnbMHwHGcrFY%2F82fg06J8gqcy84qdkvX9zsSWoOMLuFowb0SxKL%2B9vaw%2BfQRGG4w2FkpQXFFptK8g0kSdF5PaGhIJbV7ih6ADeoWtLHhv2hjN6C33dRBFI8Hk0Ugl%2Btz4caVxhMW5GLuTDUIyv5v9vmBjqa4MoU85OjenOwx6zex93RtgFr%2BrY2LLhqJBFUwHBRXSFL0HODCwqIUWVtDTowC8EuaFLkdvv5yqUPVIFW4xdiSAf0GmwZppJSVoVPxpACQ%2B94G4VCJZfdXENDyzuOJhMaXs2dL%2B6NTEBN9d0O7aZDww5VHJqVEYTWQrOxYmGHYOzGjx6MDvm7ZoVKwWI5WhlqEYM4MqKSdxCNK0IkuHlP%2B18y5B3%2Fdg5OBgU4i%2B%2Bnd%2B6Ys5g3UYprDzq7OUfwkKbuPDkkBRwdRh5QTWWpV%2BW51PETjNx28TgvSKGMlsxH60IMJCN%2BL0GOqUBzPzfwxvU%2Fx39iL%2FkHaeSWBKUfc3EMsKH7LH5jbB16clOATLOZlWlaR4kR%2B0Nq9h7hsd9PjiTaYoxvz7TOE08ZUti6PTJVbXn%2BSbV6wjsqTSTyNHM8UPS7GR6iIZf4bggd80pI%2Bq%2Bl8qTz%2BUrxcoN70YbVwCWci4nk%2B5OmiauOMqGAqIjG9qX%2BFGQH8ewtvFO2ZCz33BKsskmPOowqJXWwgcsgpNb&X-Amz-Signature=e4b50b9114c8ec31053d7b0bf03396e1431b3703b7a83ee82ae31c600830d56e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73ILTZP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIEKMFBrvs5mDBrkGRnR%2Bp%2B%2B%2BoSjBkxnmg6zvlIU6q16tAiEAgc4Eovrxq%2By4ZMwTNc%2FzzSBvY52dHYeHXPhuueSMjlQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDItkPcvSiqPoHegTEircAzeBl8BIlmrhkrOUgRLLk1DRX56ntjPInQyNQicAteTnhIhMZcSRXYYjnQHraVh0gXIIP6tw7srDGtJ2kDLHy37n4YQh0zswFJfk2xn3UkrZJqvmfYrkA6%2F459l0LiCQenRoTiFjuafets4xOs%2BfUBFbBFQw7oamx1rkaZy0E9MBcVkyIipelSrnbMHwHGcrFY%2F82fg06J8gqcy84qdkvX9zsSWoOMLuFowb0SxKL%2B9vaw%2BfQRGG4w2FkpQXFFptK8g0kSdF5PaGhIJbV7ih6ADeoWtLHhv2hjN6C33dRBFI8Hk0Ugl%2Btz4caVxhMW5GLuTDUIyv5v9vmBjqa4MoU85OjenOwx6zex93RtgFr%2BrY2LLhqJBFUwHBRXSFL0HODCwqIUWVtDTowC8EuaFLkdvv5yqUPVIFW4xdiSAf0GmwZppJSVoVPxpACQ%2B94G4VCJZfdXENDyzuOJhMaXs2dL%2B6NTEBN9d0O7aZDww5VHJqVEYTWQrOxYmGHYOzGjx6MDvm7ZoVKwWI5WhlqEYM4MqKSdxCNK0IkuHlP%2B18y5B3%2Fdg5OBgU4i%2B%2Bnd%2B6Ys5g3UYprDzq7OUfwkKbuPDkkBRwdRh5QTWWpV%2BW51PETjNx28TgvSKGMlsxH60IMJCN%2BL0GOqUBzPzfwxvU%2Fx39iL%2FkHaeSWBKUfc3EMsKH7LH5jbB16clOATLOZlWlaR4kR%2B0Nq9h7hsd9PjiTaYoxvz7TOE08ZUti6PTJVbXn%2BSbV6wjsqTSTyNHM8UPS7GR6iIZf4bggd80pI%2Bq%2Bl8qTz%2BUrxcoN70YbVwCWci4nk%2B5OmiauOMqGAqIjG9qX%2BFGQH8ewtvFO2ZCz33BKsskmPOowqJXWwgcsgpNb&X-Amz-Signature=4c3df5e72c0c16e7f7abc06ef02d2d14bce7331662ce1cbec6b3e1461c3675e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73ILTZP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIEKMFBrvs5mDBrkGRnR%2Bp%2B%2B%2BoSjBkxnmg6zvlIU6q16tAiEAgc4Eovrxq%2By4ZMwTNc%2FzzSBvY52dHYeHXPhuueSMjlQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDItkPcvSiqPoHegTEircAzeBl8BIlmrhkrOUgRLLk1DRX56ntjPInQyNQicAteTnhIhMZcSRXYYjnQHraVh0gXIIP6tw7srDGtJ2kDLHy37n4YQh0zswFJfk2xn3UkrZJqvmfYrkA6%2F459l0LiCQenRoTiFjuafets4xOs%2BfUBFbBFQw7oamx1rkaZy0E9MBcVkyIipelSrnbMHwHGcrFY%2F82fg06J8gqcy84qdkvX9zsSWoOMLuFowb0SxKL%2B9vaw%2BfQRGG4w2FkpQXFFptK8g0kSdF5PaGhIJbV7ih6ADeoWtLHhv2hjN6C33dRBFI8Hk0Ugl%2Btz4caVxhMW5GLuTDUIyv5v9vmBjqa4MoU85OjenOwx6zex93RtgFr%2BrY2LLhqJBFUwHBRXSFL0HODCwqIUWVtDTowC8EuaFLkdvv5yqUPVIFW4xdiSAf0GmwZppJSVoVPxpACQ%2B94G4VCJZfdXENDyzuOJhMaXs2dL%2B6NTEBN9d0O7aZDww5VHJqVEYTWQrOxYmGHYOzGjx6MDvm7ZoVKwWI5WhlqEYM4MqKSdxCNK0IkuHlP%2B18y5B3%2Fdg5OBgU4i%2B%2Bnd%2B6Ys5g3UYprDzq7OUfwkKbuPDkkBRwdRh5QTWWpV%2BW51PETjNx28TgvSKGMlsxH60IMJCN%2BL0GOqUBzPzfwxvU%2Fx39iL%2FkHaeSWBKUfc3EMsKH7LH5jbB16clOATLOZlWlaR4kR%2B0Nq9h7hsd9PjiTaYoxvz7TOE08ZUti6PTJVbXn%2BSbV6wjsqTSTyNHM8UPS7GR6iIZf4bggd80pI%2Bq%2Bl8qTz%2BUrxcoN70YbVwCWci4nk%2B5OmiauOMqGAqIjG9qX%2BFGQH8ewtvFO2ZCz33BKsskmPOowqJXWwgcsgpNb&X-Amz-Signature=83c5eac9cac93a6e636eaf1ca6edeb4a939d1e7b3161c4ed03c6b6c406fbd229&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73ILTZP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIEKMFBrvs5mDBrkGRnR%2Bp%2B%2B%2BoSjBkxnmg6zvlIU6q16tAiEAgc4Eovrxq%2By4ZMwTNc%2FzzSBvY52dHYeHXPhuueSMjlQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDItkPcvSiqPoHegTEircAzeBl8BIlmrhkrOUgRLLk1DRX56ntjPInQyNQicAteTnhIhMZcSRXYYjnQHraVh0gXIIP6tw7srDGtJ2kDLHy37n4YQh0zswFJfk2xn3UkrZJqvmfYrkA6%2F459l0LiCQenRoTiFjuafets4xOs%2BfUBFbBFQw7oamx1rkaZy0E9MBcVkyIipelSrnbMHwHGcrFY%2F82fg06J8gqcy84qdkvX9zsSWoOMLuFowb0SxKL%2B9vaw%2BfQRGG4w2FkpQXFFptK8g0kSdF5PaGhIJbV7ih6ADeoWtLHhv2hjN6C33dRBFI8Hk0Ugl%2Btz4caVxhMW5GLuTDUIyv5v9vmBjqa4MoU85OjenOwx6zex93RtgFr%2BrY2LLhqJBFUwHBRXSFL0HODCwqIUWVtDTowC8EuaFLkdvv5yqUPVIFW4xdiSAf0GmwZppJSVoVPxpACQ%2B94G4VCJZfdXENDyzuOJhMaXs2dL%2B6NTEBN9d0O7aZDww5VHJqVEYTWQrOxYmGHYOzGjx6MDvm7ZoVKwWI5WhlqEYM4MqKSdxCNK0IkuHlP%2B18y5B3%2Fdg5OBgU4i%2B%2Bnd%2B6Ys5g3UYprDzq7OUfwkKbuPDkkBRwdRh5QTWWpV%2BW51PETjNx28TgvSKGMlsxH60IMJCN%2BL0GOqUBzPzfwxvU%2Fx39iL%2FkHaeSWBKUfc3EMsKH7LH5jbB16clOATLOZlWlaR4kR%2B0Nq9h7hsd9PjiTaYoxvz7TOE08ZUti6PTJVbXn%2BSbV6wjsqTSTyNHM8UPS7GR6iIZf4bggd80pI%2Bq%2Bl8qTz%2BUrxcoN70YbVwCWci4nk%2B5OmiauOMqGAqIjG9qX%2BFGQH8ewtvFO2ZCz33BKsskmPOowqJXWwgcsgpNb&X-Amz-Signature=630506655a323e5ee5cd5a313c31fde3d8790652fd66ab4f2a909139121555af&X-Amz-SignedHeaders=host&x-id=GetObject)
