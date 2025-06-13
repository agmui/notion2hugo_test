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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHIH5PF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGemyv4Lj4hPsQSgE%2Fvjf0DUPvlZ82jy4As378isl9PWAiATZXwkE%2FjtgNZ9g9BxFCo4nyVT1MU0o6RK4qCOOO1Qbir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMjdVwcMrPqCJfl9cEKtwD8XPyXbgMEHQGUvT93qL79hW6JZyEP7K%2FnbU%2BFv8V85gsszJUSdxtVh6t3ekC%2FN8%2FAnFKBce7RGvYZIVD1eOswdKB9LcA%2FAud14dJd4PMQ59bayk9xxXUM6jghwr%2BKqi%2BorvZ%2BUMJy%2FRcQB%2B9rjsu9vZsPz%2BsbJ2ts9Zrv8Y1EjEo4YKLftAF%2BJ3wewVXZtWTJrX6FgNLJT8a2ip7EQKEVCq5jaw8480Mev6pdyiJ4bAK8rDJKpw6DvzTrRT7xI0%2BeBWK0QVdGqu7xSlKspA4SKsAqA10OTQe4L5zSxkoD5Ap6VkGbtxMggML50DI8AEOlxlIkoQeHq7r%2BZSX%2F0ipZQ6RwGr%2FLL%2FzFh3xgl5OnA3ofsKxRqwu6kxYrfQ2bzEsBcgoU6cAUhMG6Bo%2FVhgFjYBNqxeTC%2Fy0VGzYPQccBP%2Bbhn2Al8WqTcTjIWa95oMFOfNZ%2FuMYWwlmUhSuiz5hw75M9N5zedPsRgDYBhXlKjTYUF7NjiR5A%2FD5KTar1H%2Bw4EQl1jWVsGKWpV5ZECrilZZ6jDr74FBn%2F4vZTNJ5sMNt5ZDijipiosvdZbkePt9dcnwd6wi%2Biy%2FzfPLTyMv%2FgpEDR9jgNaAmZiwG6M8n86tkvFdmn%2BitdVlHQ7kw59KxwgY6pgHUDNzCXSFXPbNyFB2eqYiMRm6xb6jwN94%2FRCzKI4zgQeYDs1su%2B4hSYXJxWWjgjSR56PA1uOlbw3CnaJfncdWicQF4gGYxKzgA2ZkpPeeorwfGLP4fKE%2F3nuDt5pxFxFHhYOpF%2FDgA6G0enW9iueQEykpt8nDhraFqMZkrvVmpfClFHx0Yu42hdVhTKe3FOprMb6M6MCDJOM0RpffCEWBbbOO4DqjC&X-Amz-Signature=b07e3c498d320578b814d36fb89a149554778464225e417c5202e1d6d961bf14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHIH5PF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGemyv4Lj4hPsQSgE%2Fvjf0DUPvlZ82jy4As378isl9PWAiATZXwkE%2FjtgNZ9g9BxFCo4nyVT1MU0o6RK4qCOOO1Qbir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMjdVwcMrPqCJfl9cEKtwD8XPyXbgMEHQGUvT93qL79hW6JZyEP7K%2FnbU%2BFv8V85gsszJUSdxtVh6t3ekC%2FN8%2FAnFKBce7RGvYZIVD1eOswdKB9LcA%2FAud14dJd4PMQ59bayk9xxXUM6jghwr%2BKqi%2BorvZ%2BUMJy%2FRcQB%2B9rjsu9vZsPz%2BsbJ2ts9Zrv8Y1EjEo4YKLftAF%2BJ3wewVXZtWTJrX6FgNLJT8a2ip7EQKEVCq5jaw8480Mev6pdyiJ4bAK8rDJKpw6DvzTrRT7xI0%2BeBWK0QVdGqu7xSlKspA4SKsAqA10OTQe4L5zSxkoD5Ap6VkGbtxMggML50DI8AEOlxlIkoQeHq7r%2BZSX%2F0ipZQ6RwGr%2FLL%2FzFh3xgl5OnA3ofsKxRqwu6kxYrfQ2bzEsBcgoU6cAUhMG6Bo%2FVhgFjYBNqxeTC%2Fy0VGzYPQccBP%2Bbhn2Al8WqTcTjIWa95oMFOfNZ%2FuMYWwlmUhSuiz5hw75M9N5zedPsRgDYBhXlKjTYUF7NjiR5A%2FD5KTar1H%2Bw4EQl1jWVsGKWpV5ZECrilZZ6jDr74FBn%2F4vZTNJ5sMNt5ZDijipiosvdZbkePt9dcnwd6wi%2Biy%2FzfPLTyMv%2FgpEDR9jgNaAmZiwG6M8n86tkvFdmn%2BitdVlHQ7kw59KxwgY6pgHUDNzCXSFXPbNyFB2eqYiMRm6xb6jwN94%2FRCzKI4zgQeYDs1su%2B4hSYXJxWWjgjSR56PA1uOlbw3CnaJfncdWicQF4gGYxKzgA2ZkpPeeorwfGLP4fKE%2F3nuDt5pxFxFHhYOpF%2FDgA6G0enW9iueQEykpt8nDhraFqMZkrvVmpfClFHx0Yu42hdVhTKe3FOprMb6M6MCDJOM0RpffCEWBbbOO4DqjC&X-Amz-Signature=7bbaba004140802d0d66bc9eba4a3ffc47f9db5450371596ae6fbd495fa130e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHIH5PF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGemyv4Lj4hPsQSgE%2Fvjf0DUPvlZ82jy4As378isl9PWAiATZXwkE%2FjtgNZ9g9BxFCo4nyVT1MU0o6RK4qCOOO1Qbir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMjdVwcMrPqCJfl9cEKtwD8XPyXbgMEHQGUvT93qL79hW6JZyEP7K%2FnbU%2BFv8V85gsszJUSdxtVh6t3ekC%2FN8%2FAnFKBce7RGvYZIVD1eOswdKB9LcA%2FAud14dJd4PMQ59bayk9xxXUM6jghwr%2BKqi%2BorvZ%2BUMJy%2FRcQB%2B9rjsu9vZsPz%2BsbJ2ts9Zrv8Y1EjEo4YKLftAF%2BJ3wewVXZtWTJrX6FgNLJT8a2ip7EQKEVCq5jaw8480Mev6pdyiJ4bAK8rDJKpw6DvzTrRT7xI0%2BeBWK0QVdGqu7xSlKspA4SKsAqA10OTQe4L5zSxkoD5Ap6VkGbtxMggML50DI8AEOlxlIkoQeHq7r%2BZSX%2F0ipZQ6RwGr%2FLL%2FzFh3xgl5OnA3ofsKxRqwu6kxYrfQ2bzEsBcgoU6cAUhMG6Bo%2FVhgFjYBNqxeTC%2Fy0VGzYPQccBP%2Bbhn2Al8WqTcTjIWa95oMFOfNZ%2FuMYWwlmUhSuiz5hw75M9N5zedPsRgDYBhXlKjTYUF7NjiR5A%2FD5KTar1H%2Bw4EQl1jWVsGKWpV5ZECrilZZ6jDr74FBn%2F4vZTNJ5sMNt5ZDijipiosvdZbkePt9dcnwd6wi%2Biy%2FzfPLTyMv%2FgpEDR9jgNaAmZiwG6M8n86tkvFdmn%2BitdVlHQ7kw59KxwgY6pgHUDNzCXSFXPbNyFB2eqYiMRm6xb6jwN94%2FRCzKI4zgQeYDs1su%2B4hSYXJxWWjgjSR56PA1uOlbw3CnaJfncdWicQF4gGYxKzgA2ZkpPeeorwfGLP4fKE%2F3nuDt5pxFxFHhYOpF%2FDgA6G0enW9iueQEykpt8nDhraFqMZkrvVmpfClFHx0Yu42hdVhTKe3FOprMb6M6MCDJOM0RpffCEWBbbOO4DqjC&X-Amz-Signature=834517c4c99f0c49c9f5e3d514547cb87630b5e4a5d9f7213c676fa0baa6d870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHIH5PF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGemyv4Lj4hPsQSgE%2Fvjf0DUPvlZ82jy4As378isl9PWAiATZXwkE%2FjtgNZ9g9BxFCo4nyVT1MU0o6RK4qCOOO1Qbir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMjdVwcMrPqCJfl9cEKtwD8XPyXbgMEHQGUvT93qL79hW6JZyEP7K%2FnbU%2BFv8V85gsszJUSdxtVh6t3ekC%2FN8%2FAnFKBce7RGvYZIVD1eOswdKB9LcA%2FAud14dJd4PMQ59bayk9xxXUM6jghwr%2BKqi%2BorvZ%2BUMJy%2FRcQB%2B9rjsu9vZsPz%2BsbJ2ts9Zrv8Y1EjEo4YKLftAF%2BJ3wewVXZtWTJrX6FgNLJT8a2ip7EQKEVCq5jaw8480Mev6pdyiJ4bAK8rDJKpw6DvzTrRT7xI0%2BeBWK0QVdGqu7xSlKspA4SKsAqA10OTQe4L5zSxkoD5Ap6VkGbtxMggML50DI8AEOlxlIkoQeHq7r%2BZSX%2F0ipZQ6RwGr%2FLL%2FzFh3xgl5OnA3ofsKxRqwu6kxYrfQ2bzEsBcgoU6cAUhMG6Bo%2FVhgFjYBNqxeTC%2Fy0VGzYPQccBP%2Bbhn2Al8WqTcTjIWa95oMFOfNZ%2FuMYWwlmUhSuiz5hw75M9N5zedPsRgDYBhXlKjTYUF7NjiR5A%2FD5KTar1H%2Bw4EQl1jWVsGKWpV5ZECrilZZ6jDr74FBn%2F4vZTNJ5sMNt5ZDijipiosvdZbkePt9dcnwd6wi%2Biy%2FzfPLTyMv%2FgpEDR9jgNaAmZiwG6M8n86tkvFdmn%2BitdVlHQ7kw59KxwgY6pgHUDNzCXSFXPbNyFB2eqYiMRm6xb6jwN94%2FRCzKI4zgQeYDs1su%2B4hSYXJxWWjgjSR56PA1uOlbw3CnaJfncdWicQF4gGYxKzgA2ZkpPeeorwfGLP4fKE%2F3nuDt5pxFxFHhYOpF%2FDgA6G0enW9iueQEykpt8nDhraFqMZkrvVmpfClFHx0Yu42hdVhTKe3FOprMb6M6MCDJOM0RpffCEWBbbOO4DqjC&X-Amz-Signature=9050623f7cbf2a8b70123ef8f345d08900e8cfa72ce27c2ecf485e534a22eda2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHIH5PF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGemyv4Lj4hPsQSgE%2Fvjf0DUPvlZ82jy4As378isl9PWAiATZXwkE%2FjtgNZ9g9BxFCo4nyVT1MU0o6RK4qCOOO1Qbir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMjdVwcMrPqCJfl9cEKtwD8XPyXbgMEHQGUvT93qL79hW6JZyEP7K%2FnbU%2BFv8V85gsszJUSdxtVh6t3ekC%2FN8%2FAnFKBce7RGvYZIVD1eOswdKB9LcA%2FAud14dJd4PMQ59bayk9xxXUM6jghwr%2BKqi%2BorvZ%2BUMJy%2FRcQB%2B9rjsu9vZsPz%2BsbJ2ts9Zrv8Y1EjEo4YKLftAF%2BJ3wewVXZtWTJrX6FgNLJT8a2ip7EQKEVCq5jaw8480Mev6pdyiJ4bAK8rDJKpw6DvzTrRT7xI0%2BeBWK0QVdGqu7xSlKspA4SKsAqA10OTQe4L5zSxkoD5Ap6VkGbtxMggML50DI8AEOlxlIkoQeHq7r%2BZSX%2F0ipZQ6RwGr%2FLL%2FzFh3xgl5OnA3ofsKxRqwu6kxYrfQ2bzEsBcgoU6cAUhMG6Bo%2FVhgFjYBNqxeTC%2Fy0VGzYPQccBP%2Bbhn2Al8WqTcTjIWa95oMFOfNZ%2FuMYWwlmUhSuiz5hw75M9N5zedPsRgDYBhXlKjTYUF7NjiR5A%2FD5KTar1H%2Bw4EQl1jWVsGKWpV5ZECrilZZ6jDr74FBn%2F4vZTNJ5sMNt5ZDijipiosvdZbkePt9dcnwd6wi%2Biy%2FzfPLTyMv%2FgpEDR9jgNaAmZiwG6M8n86tkvFdmn%2BitdVlHQ7kw59KxwgY6pgHUDNzCXSFXPbNyFB2eqYiMRm6xb6jwN94%2FRCzKI4zgQeYDs1su%2B4hSYXJxWWjgjSR56PA1uOlbw3CnaJfncdWicQF4gGYxKzgA2ZkpPeeorwfGLP4fKE%2F3nuDt5pxFxFHhYOpF%2FDgA6G0enW9iueQEykpt8nDhraFqMZkrvVmpfClFHx0Yu42hdVhTKe3FOprMb6M6MCDJOM0RpffCEWBbbOO4DqjC&X-Amz-Signature=e84ec86aaecb62e335e31a85a9cd4776347d6dee21cb35c2399194e5cb844b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZHIH5PF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGemyv4Lj4hPsQSgE%2Fvjf0DUPvlZ82jy4As378isl9PWAiATZXwkE%2FjtgNZ9g9BxFCo4nyVT1MU0o6RK4qCOOO1Qbir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMjdVwcMrPqCJfl9cEKtwD8XPyXbgMEHQGUvT93qL79hW6JZyEP7K%2FnbU%2BFv8V85gsszJUSdxtVh6t3ekC%2FN8%2FAnFKBce7RGvYZIVD1eOswdKB9LcA%2FAud14dJd4PMQ59bayk9xxXUM6jghwr%2BKqi%2BorvZ%2BUMJy%2FRcQB%2B9rjsu9vZsPz%2BsbJ2ts9Zrv8Y1EjEo4YKLftAF%2BJ3wewVXZtWTJrX6FgNLJT8a2ip7EQKEVCq5jaw8480Mev6pdyiJ4bAK8rDJKpw6DvzTrRT7xI0%2BeBWK0QVdGqu7xSlKspA4SKsAqA10OTQe4L5zSxkoD5Ap6VkGbtxMggML50DI8AEOlxlIkoQeHq7r%2BZSX%2F0ipZQ6RwGr%2FLL%2FzFh3xgl5OnA3ofsKxRqwu6kxYrfQ2bzEsBcgoU6cAUhMG6Bo%2FVhgFjYBNqxeTC%2Fy0VGzYPQccBP%2Bbhn2Al8WqTcTjIWa95oMFOfNZ%2FuMYWwlmUhSuiz5hw75M9N5zedPsRgDYBhXlKjTYUF7NjiR5A%2FD5KTar1H%2Bw4EQl1jWVsGKWpV5ZECrilZZ6jDr74FBn%2F4vZTNJ5sMNt5ZDijipiosvdZbkePt9dcnwd6wi%2Biy%2FzfPLTyMv%2FgpEDR9jgNaAmZiwG6M8n86tkvFdmn%2BitdVlHQ7kw59KxwgY6pgHUDNzCXSFXPbNyFB2eqYiMRm6xb6jwN94%2FRCzKI4zgQeYDs1su%2B4hSYXJxWWjgjSR56PA1uOlbw3CnaJfncdWicQF4gGYxKzgA2ZkpPeeorwfGLP4fKE%2F3nuDt5pxFxFHhYOpF%2FDgA6G0enW9iueQEykpt8nDhraFqMZkrvVmpfClFHx0Yu42hdVhTKe3FOprMb6M6MCDJOM0RpffCEWBbbOO4DqjC&X-Amz-Signature=046ee25069cdf07927c4c17a0a2a5deba23c719893c6aef1a70c3023885686ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
