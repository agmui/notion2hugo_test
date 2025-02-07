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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TREBEP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGAfdysAcA126Hkij9Tu2H9gfX0bL9I8pAWhgNa6vwsNAiEA8xwOnV0NA6V5Vcw3bxrifUjAJsf5VlGueOHKCvvavAcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJqKN6AtEa1%2FuYWF1yrcA5oDhIJ7%2BwJSHBa6opIaIEH1kO%2FOQioLyV2e6lGHQEPn4je07Oke3%2B7o6%2BpQRC5ds1T5ERwmY8ZZVdOeQpwpQMZtYLIbTjthPfs1GyCmD2PM8dvDA0WFzPviJEavORLM7NOA0W9E0WmaTgFUt%2Bx1u8VHOR7mlnbZoovBHvpWxCmelQJCAJ3KWv1i6f1GY4IT%2Bk4i5%2BtuAxATTxCSn2lZDfl7IfHZIS6EAgYLMPbMZw6bgj5Q0JdzzUByOifnIbUYKf2uTC42QyLRUO1NQo75z%2BnzHHIVeElZLDnB6qxwmR3eX%2B%2Bgfy7pPCmyvxY1iEyYIBSg7PxsmIU69b9T7rzfVapX4ltjiysztY%2BsY2ZFQ%2B%2BztrHZOgZhb11phEIcRZdzKsJ%2BswetyJlixxF%2BDDoJELMfRm37sfMCbE7gaXXNwixDHKbXQhN%2FyCze35nwq5CIBsxAs4fir9dgECaZCHUDIjgJoNL7k3IVKgRQo2txWEl8e8sZ%2BQ%2BxI3lgLbAhQab9sXFmBohaKGF3a9Tf0vFrw3SMGh7moWF7yZSlconiAgW6rHW0HCNyQ2d95zxUDHcd0KL%2BcdEtk6dDagAQ9tdqmeufprJ%2BkOYbcrRXh8CNboWmUyhgf8oseHVJ4aAHMPiblb0GOqUB0E7whuoI8rzd8k5C1ML3sJFf2ty%2F58PReGfYRxzy1cMPfTRqvzFv9d4mM%2BIgpNAiCVuaUY06UQpMS8C7ZN0M0UFubccqgXd0M5ACZJWb7r4Qw5GNmXTZmwBts3RPgoStlZdAC1vuCtPMLfHeS9f42ERw8rmKZKR%2F6m7sAcZjUz7MBYpR7CbBRIe6WQ9jNIVMt4qIs9VFjvvhWqGyZ9879OBXxred&X-Amz-Signature=2a36a649623b994c93416ca7cc44a04d0d7abc1acc3e8e83322836e29c13fc29&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TREBEP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGAfdysAcA126Hkij9Tu2H9gfX0bL9I8pAWhgNa6vwsNAiEA8xwOnV0NA6V5Vcw3bxrifUjAJsf5VlGueOHKCvvavAcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJqKN6AtEa1%2FuYWF1yrcA5oDhIJ7%2BwJSHBa6opIaIEH1kO%2FOQioLyV2e6lGHQEPn4je07Oke3%2B7o6%2BpQRC5ds1T5ERwmY8ZZVdOeQpwpQMZtYLIbTjthPfs1GyCmD2PM8dvDA0WFzPviJEavORLM7NOA0W9E0WmaTgFUt%2Bx1u8VHOR7mlnbZoovBHvpWxCmelQJCAJ3KWv1i6f1GY4IT%2Bk4i5%2BtuAxATTxCSn2lZDfl7IfHZIS6EAgYLMPbMZw6bgj5Q0JdzzUByOifnIbUYKf2uTC42QyLRUO1NQo75z%2BnzHHIVeElZLDnB6qxwmR3eX%2B%2Bgfy7pPCmyvxY1iEyYIBSg7PxsmIU69b9T7rzfVapX4ltjiysztY%2BsY2ZFQ%2B%2BztrHZOgZhb11phEIcRZdzKsJ%2BswetyJlixxF%2BDDoJELMfRm37sfMCbE7gaXXNwixDHKbXQhN%2FyCze35nwq5CIBsxAs4fir9dgECaZCHUDIjgJoNL7k3IVKgRQo2txWEl8e8sZ%2BQ%2BxI3lgLbAhQab9sXFmBohaKGF3a9Tf0vFrw3SMGh7moWF7yZSlconiAgW6rHW0HCNyQ2d95zxUDHcd0KL%2BcdEtk6dDagAQ9tdqmeufprJ%2BkOYbcrRXh8CNboWmUyhgf8oseHVJ4aAHMPiblb0GOqUB0E7whuoI8rzd8k5C1ML3sJFf2ty%2F58PReGfYRxzy1cMPfTRqvzFv9d4mM%2BIgpNAiCVuaUY06UQpMS8C7ZN0M0UFubccqgXd0M5ACZJWb7r4Qw5GNmXTZmwBts3RPgoStlZdAC1vuCtPMLfHeS9f42ERw8rmKZKR%2F6m7sAcZjUz7MBYpR7CbBRIe6WQ9jNIVMt4qIs9VFjvvhWqGyZ9879OBXxred&X-Amz-Signature=f384840c47b1dbb5dc14402b631aaaa1f22ffa0c0f231c336c07b2565214f3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TREBEP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGAfdysAcA126Hkij9Tu2H9gfX0bL9I8pAWhgNa6vwsNAiEA8xwOnV0NA6V5Vcw3bxrifUjAJsf5VlGueOHKCvvavAcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJqKN6AtEa1%2FuYWF1yrcA5oDhIJ7%2BwJSHBa6opIaIEH1kO%2FOQioLyV2e6lGHQEPn4je07Oke3%2B7o6%2BpQRC5ds1T5ERwmY8ZZVdOeQpwpQMZtYLIbTjthPfs1GyCmD2PM8dvDA0WFzPviJEavORLM7NOA0W9E0WmaTgFUt%2Bx1u8VHOR7mlnbZoovBHvpWxCmelQJCAJ3KWv1i6f1GY4IT%2Bk4i5%2BtuAxATTxCSn2lZDfl7IfHZIS6EAgYLMPbMZw6bgj5Q0JdzzUByOifnIbUYKf2uTC42QyLRUO1NQo75z%2BnzHHIVeElZLDnB6qxwmR3eX%2B%2Bgfy7pPCmyvxY1iEyYIBSg7PxsmIU69b9T7rzfVapX4ltjiysztY%2BsY2ZFQ%2B%2BztrHZOgZhb11phEIcRZdzKsJ%2BswetyJlixxF%2BDDoJELMfRm37sfMCbE7gaXXNwixDHKbXQhN%2FyCze35nwq5CIBsxAs4fir9dgECaZCHUDIjgJoNL7k3IVKgRQo2txWEl8e8sZ%2BQ%2BxI3lgLbAhQab9sXFmBohaKGF3a9Tf0vFrw3SMGh7moWF7yZSlconiAgW6rHW0HCNyQ2d95zxUDHcd0KL%2BcdEtk6dDagAQ9tdqmeufprJ%2BkOYbcrRXh8CNboWmUyhgf8oseHVJ4aAHMPiblb0GOqUB0E7whuoI8rzd8k5C1ML3sJFf2ty%2F58PReGfYRxzy1cMPfTRqvzFv9d4mM%2BIgpNAiCVuaUY06UQpMS8C7ZN0M0UFubccqgXd0M5ACZJWb7r4Qw5GNmXTZmwBts3RPgoStlZdAC1vuCtPMLfHeS9f42ERw8rmKZKR%2F6m7sAcZjUz7MBYpR7CbBRIe6WQ9jNIVMt4qIs9VFjvvhWqGyZ9879OBXxred&X-Amz-Signature=c37e36db8ff9d89c926d401d43872331a432ba4f92db16d36e00af66c061fc9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TREBEP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGAfdysAcA126Hkij9Tu2H9gfX0bL9I8pAWhgNa6vwsNAiEA8xwOnV0NA6V5Vcw3bxrifUjAJsf5VlGueOHKCvvavAcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJqKN6AtEa1%2FuYWF1yrcA5oDhIJ7%2BwJSHBa6opIaIEH1kO%2FOQioLyV2e6lGHQEPn4je07Oke3%2B7o6%2BpQRC5ds1T5ERwmY8ZZVdOeQpwpQMZtYLIbTjthPfs1GyCmD2PM8dvDA0WFzPviJEavORLM7NOA0W9E0WmaTgFUt%2Bx1u8VHOR7mlnbZoovBHvpWxCmelQJCAJ3KWv1i6f1GY4IT%2Bk4i5%2BtuAxATTxCSn2lZDfl7IfHZIS6EAgYLMPbMZw6bgj5Q0JdzzUByOifnIbUYKf2uTC42QyLRUO1NQo75z%2BnzHHIVeElZLDnB6qxwmR3eX%2B%2Bgfy7pPCmyvxY1iEyYIBSg7PxsmIU69b9T7rzfVapX4ltjiysztY%2BsY2ZFQ%2B%2BztrHZOgZhb11phEIcRZdzKsJ%2BswetyJlixxF%2BDDoJELMfRm37sfMCbE7gaXXNwixDHKbXQhN%2FyCze35nwq5CIBsxAs4fir9dgECaZCHUDIjgJoNL7k3IVKgRQo2txWEl8e8sZ%2BQ%2BxI3lgLbAhQab9sXFmBohaKGF3a9Tf0vFrw3SMGh7moWF7yZSlconiAgW6rHW0HCNyQ2d95zxUDHcd0KL%2BcdEtk6dDagAQ9tdqmeufprJ%2BkOYbcrRXh8CNboWmUyhgf8oseHVJ4aAHMPiblb0GOqUB0E7whuoI8rzd8k5C1ML3sJFf2ty%2F58PReGfYRxzy1cMPfTRqvzFv9d4mM%2BIgpNAiCVuaUY06UQpMS8C7ZN0M0UFubccqgXd0M5ACZJWb7r4Qw5GNmXTZmwBts3RPgoStlZdAC1vuCtPMLfHeS9f42ERw8rmKZKR%2F6m7sAcZjUz7MBYpR7CbBRIe6WQ9jNIVMt4qIs9VFjvvhWqGyZ9879OBXxred&X-Amz-Signature=9cd9882a2f2966fb20e5e5fb0726102affeedd963eeaf96c54b7a75b543e73ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TREBEP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGAfdysAcA126Hkij9Tu2H9gfX0bL9I8pAWhgNa6vwsNAiEA8xwOnV0NA6V5Vcw3bxrifUjAJsf5VlGueOHKCvvavAcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJqKN6AtEa1%2FuYWF1yrcA5oDhIJ7%2BwJSHBa6opIaIEH1kO%2FOQioLyV2e6lGHQEPn4je07Oke3%2B7o6%2BpQRC5ds1T5ERwmY8ZZVdOeQpwpQMZtYLIbTjthPfs1GyCmD2PM8dvDA0WFzPviJEavORLM7NOA0W9E0WmaTgFUt%2Bx1u8VHOR7mlnbZoovBHvpWxCmelQJCAJ3KWv1i6f1GY4IT%2Bk4i5%2BtuAxATTxCSn2lZDfl7IfHZIS6EAgYLMPbMZw6bgj5Q0JdzzUByOifnIbUYKf2uTC42QyLRUO1NQo75z%2BnzHHIVeElZLDnB6qxwmR3eX%2B%2Bgfy7pPCmyvxY1iEyYIBSg7PxsmIU69b9T7rzfVapX4ltjiysztY%2BsY2ZFQ%2B%2BztrHZOgZhb11phEIcRZdzKsJ%2BswetyJlixxF%2BDDoJELMfRm37sfMCbE7gaXXNwixDHKbXQhN%2FyCze35nwq5CIBsxAs4fir9dgECaZCHUDIjgJoNL7k3IVKgRQo2txWEl8e8sZ%2BQ%2BxI3lgLbAhQab9sXFmBohaKGF3a9Tf0vFrw3SMGh7moWF7yZSlconiAgW6rHW0HCNyQ2d95zxUDHcd0KL%2BcdEtk6dDagAQ9tdqmeufprJ%2BkOYbcrRXh8CNboWmUyhgf8oseHVJ4aAHMPiblb0GOqUB0E7whuoI8rzd8k5C1ML3sJFf2ty%2F58PReGfYRxzy1cMPfTRqvzFv9d4mM%2BIgpNAiCVuaUY06UQpMS8C7ZN0M0UFubccqgXd0M5ACZJWb7r4Qw5GNmXTZmwBts3RPgoStlZdAC1vuCtPMLfHeS9f42ERw8rmKZKR%2F6m7sAcZjUz7MBYpR7CbBRIe6WQ9jNIVMt4qIs9VFjvvhWqGyZ9879OBXxred&X-Amz-Signature=e95a6bb56c74682dc6a1d0f7d0ac6cc08b6308ee26e17dc8d04cc98dbc05504f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TREBEP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGAfdysAcA126Hkij9Tu2H9gfX0bL9I8pAWhgNa6vwsNAiEA8xwOnV0NA6V5Vcw3bxrifUjAJsf5VlGueOHKCvvavAcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJqKN6AtEa1%2FuYWF1yrcA5oDhIJ7%2BwJSHBa6opIaIEH1kO%2FOQioLyV2e6lGHQEPn4je07Oke3%2B7o6%2BpQRC5ds1T5ERwmY8ZZVdOeQpwpQMZtYLIbTjthPfs1GyCmD2PM8dvDA0WFzPviJEavORLM7NOA0W9E0WmaTgFUt%2Bx1u8VHOR7mlnbZoovBHvpWxCmelQJCAJ3KWv1i6f1GY4IT%2Bk4i5%2BtuAxATTxCSn2lZDfl7IfHZIS6EAgYLMPbMZw6bgj5Q0JdzzUByOifnIbUYKf2uTC42QyLRUO1NQo75z%2BnzHHIVeElZLDnB6qxwmR3eX%2B%2Bgfy7pPCmyvxY1iEyYIBSg7PxsmIU69b9T7rzfVapX4ltjiysztY%2BsY2ZFQ%2B%2BztrHZOgZhb11phEIcRZdzKsJ%2BswetyJlixxF%2BDDoJELMfRm37sfMCbE7gaXXNwixDHKbXQhN%2FyCze35nwq5CIBsxAs4fir9dgECaZCHUDIjgJoNL7k3IVKgRQo2txWEl8e8sZ%2BQ%2BxI3lgLbAhQab9sXFmBohaKGF3a9Tf0vFrw3SMGh7moWF7yZSlconiAgW6rHW0HCNyQ2d95zxUDHcd0KL%2BcdEtk6dDagAQ9tdqmeufprJ%2BkOYbcrRXh8CNboWmUyhgf8oseHVJ4aAHMPiblb0GOqUB0E7whuoI8rzd8k5C1ML3sJFf2ty%2F58PReGfYRxzy1cMPfTRqvzFv9d4mM%2BIgpNAiCVuaUY06UQpMS8C7ZN0M0UFubccqgXd0M5ACZJWb7r4Qw5GNmXTZmwBts3RPgoStlZdAC1vuCtPMLfHeS9f42ERw8rmKZKR%2F6m7sAcZjUz7MBYpR7CbBRIe6WQ9jNIVMt4qIs9VFjvvhWqGyZ9879OBXxred&X-Amz-Signature=1ecf65369330577dff415f081600a47abb2e26f7fdd9888c5c3f88f4734280dd&X-Amz-SignedHeaders=host&x-id=GetObject)
