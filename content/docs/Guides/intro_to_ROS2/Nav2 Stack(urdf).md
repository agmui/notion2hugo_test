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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLA735L%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHidi50zaO3fMZEivOcRVQlJBAAh%2F%2FNXP1MKHUcBLFD9AiBcuDET1UJzrRqF4Ca8z%2FwtuAOkEP7F6DenfVksAoyf5Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM4aH3dFrbz42ZFDzzKtwDBLU3DZqK7kkaSAIgt4vlH%2B5n2q7DokzhbI4JCYQfOZtKbJ1dfopYomWhnc3DhR8wz1ivruGnf1Wfx6Aja6R0LAS4RJfCcN3iZglNVa%2BNXO1cKSsBmcq9xABBZLcYnGTBRJuacoBAPHYRlsYMXs9HZuDHoA4aBxgoLrP0%2BBOWXPewL2Xy3DOMIPGBF16ftA4A3gdtTIwLhAVL496QxtW8AV2iSpw8ZkkonFaue9X65g2kDGh9trmrqtEBUrNrSzf4ihvn4j9ZKAKCJ4UvJbCrJ0FBbppsM8%2FeSdsqvDf2P72hGzjcAZqRLTHczNdO0pjTCpN1PO8CtqhnRWmVES2r4qMsGCxbt6ezYtB18kalYYdnCjKEkOO7ySS4AJET44C5z3C3XZOlZ%2BoZTXvVvMDigQ%2BJJQXvE3bMKE9hyfJlU14JacD0DCahw5R8Dws7fcwbl8KWabc3%2FQAQ5ZwCkfMJODMnOO0MD8WVJe1ylg0wvmv7O2dZA9lw17OwPwj2iMmAnQlhILeUx%2FsfpoqhwsB%2BOW0LY5JPfpzkuSNC2%2FRggGgTBM%2Fdenwqv7pnEoJkgTfTFCmQsWWF3F8d0GAfTJtFG8DFx4Y%2F7Z%2FszchKKZLZntOhKcpjmWCMsJ9ntg8wxKy5wgY6pgEU3%2FHoF7lABgmBswL1Gw8m50UN9AQ7xPzxzzWOS0YzV8GM9dBaeYb2W9uEpillWXtl%2B6J40hDxfePAtWcMhb71SHKgs7ngCscR7R6gJei0AgWByos7jhvgWg2Xu7pQQeLRLww0xgchmrWx5eEZUHQgQoqe%2BB5%2Bj%2FnARb2qChrkvoe20HpIOHFx7dDwW1DlnqMSeQYHhSQJq7OLaUxA6ZPrHvwF0z0L&X-Amz-Signature=10e405248e07c26239460e750cb9fe2aa15b944c0a88f99aac2b3822e3aab654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLA735L%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHidi50zaO3fMZEivOcRVQlJBAAh%2F%2FNXP1MKHUcBLFD9AiBcuDET1UJzrRqF4Ca8z%2FwtuAOkEP7F6DenfVksAoyf5Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM4aH3dFrbz42ZFDzzKtwDBLU3DZqK7kkaSAIgt4vlH%2B5n2q7DokzhbI4JCYQfOZtKbJ1dfopYomWhnc3DhR8wz1ivruGnf1Wfx6Aja6R0LAS4RJfCcN3iZglNVa%2BNXO1cKSsBmcq9xABBZLcYnGTBRJuacoBAPHYRlsYMXs9HZuDHoA4aBxgoLrP0%2BBOWXPewL2Xy3DOMIPGBF16ftA4A3gdtTIwLhAVL496QxtW8AV2iSpw8ZkkonFaue9X65g2kDGh9trmrqtEBUrNrSzf4ihvn4j9ZKAKCJ4UvJbCrJ0FBbppsM8%2FeSdsqvDf2P72hGzjcAZqRLTHczNdO0pjTCpN1PO8CtqhnRWmVES2r4qMsGCxbt6ezYtB18kalYYdnCjKEkOO7ySS4AJET44C5z3C3XZOlZ%2BoZTXvVvMDigQ%2BJJQXvE3bMKE9hyfJlU14JacD0DCahw5R8Dws7fcwbl8KWabc3%2FQAQ5ZwCkfMJODMnOO0MD8WVJe1ylg0wvmv7O2dZA9lw17OwPwj2iMmAnQlhILeUx%2FsfpoqhwsB%2BOW0LY5JPfpzkuSNC2%2FRggGgTBM%2Fdenwqv7pnEoJkgTfTFCmQsWWF3F8d0GAfTJtFG8DFx4Y%2F7Z%2FszchKKZLZntOhKcpjmWCMsJ9ntg8wxKy5wgY6pgEU3%2FHoF7lABgmBswL1Gw8m50UN9AQ7xPzxzzWOS0YzV8GM9dBaeYb2W9uEpillWXtl%2B6J40hDxfePAtWcMhb71SHKgs7ngCscR7R6gJei0AgWByos7jhvgWg2Xu7pQQeLRLww0xgchmrWx5eEZUHQgQoqe%2BB5%2Bj%2FnARb2qChrkvoe20HpIOHFx7dDwW1DlnqMSeQYHhSQJq7OLaUxA6ZPrHvwF0z0L&X-Amz-Signature=78e79f3a008c4a7c03beb26fa535f7bfb91baf1aa0a5a0971967c3e1732c58df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLA735L%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHidi50zaO3fMZEivOcRVQlJBAAh%2F%2FNXP1MKHUcBLFD9AiBcuDET1UJzrRqF4Ca8z%2FwtuAOkEP7F6DenfVksAoyf5Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM4aH3dFrbz42ZFDzzKtwDBLU3DZqK7kkaSAIgt4vlH%2B5n2q7DokzhbI4JCYQfOZtKbJ1dfopYomWhnc3DhR8wz1ivruGnf1Wfx6Aja6R0LAS4RJfCcN3iZglNVa%2BNXO1cKSsBmcq9xABBZLcYnGTBRJuacoBAPHYRlsYMXs9HZuDHoA4aBxgoLrP0%2BBOWXPewL2Xy3DOMIPGBF16ftA4A3gdtTIwLhAVL496QxtW8AV2iSpw8ZkkonFaue9X65g2kDGh9trmrqtEBUrNrSzf4ihvn4j9ZKAKCJ4UvJbCrJ0FBbppsM8%2FeSdsqvDf2P72hGzjcAZqRLTHczNdO0pjTCpN1PO8CtqhnRWmVES2r4qMsGCxbt6ezYtB18kalYYdnCjKEkOO7ySS4AJET44C5z3C3XZOlZ%2BoZTXvVvMDigQ%2BJJQXvE3bMKE9hyfJlU14JacD0DCahw5R8Dws7fcwbl8KWabc3%2FQAQ5ZwCkfMJODMnOO0MD8WVJe1ylg0wvmv7O2dZA9lw17OwPwj2iMmAnQlhILeUx%2FsfpoqhwsB%2BOW0LY5JPfpzkuSNC2%2FRggGgTBM%2Fdenwqv7pnEoJkgTfTFCmQsWWF3F8d0GAfTJtFG8DFx4Y%2F7Z%2FszchKKZLZntOhKcpjmWCMsJ9ntg8wxKy5wgY6pgEU3%2FHoF7lABgmBswL1Gw8m50UN9AQ7xPzxzzWOS0YzV8GM9dBaeYb2W9uEpillWXtl%2B6J40hDxfePAtWcMhb71SHKgs7ngCscR7R6gJei0AgWByos7jhvgWg2Xu7pQQeLRLww0xgchmrWx5eEZUHQgQoqe%2BB5%2Bj%2FnARb2qChrkvoe20HpIOHFx7dDwW1DlnqMSeQYHhSQJq7OLaUxA6ZPrHvwF0z0L&X-Amz-Signature=6c75e5504f230b1fde72a096f452fc1680361209b49e0373810fe6720cc6ffef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLA735L%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHidi50zaO3fMZEivOcRVQlJBAAh%2F%2FNXP1MKHUcBLFD9AiBcuDET1UJzrRqF4Ca8z%2FwtuAOkEP7F6DenfVksAoyf5Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM4aH3dFrbz42ZFDzzKtwDBLU3DZqK7kkaSAIgt4vlH%2B5n2q7DokzhbI4JCYQfOZtKbJ1dfopYomWhnc3DhR8wz1ivruGnf1Wfx6Aja6R0LAS4RJfCcN3iZglNVa%2BNXO1cKSsBmcq9xABBZLcYnGTBRJuacoBAPHYRlsYMXs9HZuDHoA4aBxgoLrP0%2BBOWXPewL2Xy3DOMIPGBF16ftA4A3gdtTIwLhAVL496QxtW8AV2iSpw8ZkkonFaue9X65g2kDGh9trmrqtEBUrNrSzf4ihvn4j9ZKAKCJ4UvJbCrJ0FBbppsM8%2FeSdsqvDf2P72hGzjcAZqRLTHczNdO0pjTCpN1PO8CtqhnRWmVES2r4qMsGCxbt6ezYtB18kalYYdnCjKEkOO7ySS4AJET44C5z3C3XZOlZ%2BoZTXvVvMDigQ%2BJJQXvE3bMKE9hyfJlU14JacD0DCahw5R8Dws7fcwbl8KWabc3%2FQAQ5ZwCkfMJODMnOO0MD8WVJe1ylg0wvmv7O2dZA9lw17OwPwj2iMmAnQlhILeUx%2FsfpoqhwsB%2BOW0LY5JPfpzkuSNC2%2FRggGgTBM%2Fdenwqv7pnEoJkgTfTFCmQsWWF3F8d0GAfTJtFG8DFx4Y%2F7Z%2FszchKKZLZntOhKcpjmWCMsJ9ntg8wxKy5wgY6pgEU3%2FHoF7lABgmBswL1Gw8m50UN9AQ7xPzxzzWOS0YzV8GM9dBaeYb2W9uEpillWXtl%2B6J40hDxfePAtWcMhb71SHKgs7ngCscR7R6gJei0AgWByos7jhvgWg2Xu7pQQeLRLww0xgchmrWx5eEZUHQgQoqe%2BB5%2Bj%2FnARb2qChrkvoe20HpIOHFx7dDwW1DlnqMSeQYHhSQJq7OLaUxA6ZPrHvwF0z0L&X-Amz-Signature=ea22e8428fb331a602bfdae10a9c37d212ad2606025d78ef76b7657f70042b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLA735L%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHidi50zaO3fMZEivOcRVQlJBAAh%2F%2FNXP1MKHUcBLFD9AiBcuDET1UJzrRqF4Ca8z%2FwtuAOkEP7F6DenfVksAoyf5Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM4aH3dFrbz42ZFDzzKtwDBLU3DZqK7kkaSAIgt4vlH%2B5n2q7DokzhbI4JCYQfOZtKbJ1dfopYomWhnc3DhR8wz1ivruGnf1Wfx6Aja6R0LAS4RJfCcN3iZglNVa%2BNXO1cKSsBmcq9xABBZLcYnGTBRJuacoBAPHYRlsYMXs9HZuDHoA4aBxgoLrP0%2BBOWXPewL2Xy3DOMIPGBF16ftA4A3gdtTIwLhAVL496QxtW8AV2iSpw8ZkkonFaue9X65g2kDGh9trmrqtEBUrNrSzf4ihvn4j9ZKAKCJ4UvJbCrJ0FBbppsM8%2FeSdsqvDf2P72hGzjcAZqRLTHczNdO0pjTCpN1PO8CtqhnRWmVES2r4qMsGCxbt6ezYtB18kalYYdnCjKEkOO7ySS4AJET44C5z3C3XZOlZ%2BoZTXvVvMDigQ%2BJJQXvE3bMKE9hyfJlU14JacD0DCahw5R8Dws7fcwbl8KWabc3%2FQAQ5ZwCkfMJODMnOO0MD8WVJe1ylg0wvmv7O2dZA9lw17OwPwj2iMmAnQlhILeUx%2FsfpoqhwsB%2BOW0LY5JPfpzkuSNC2%2FRggGgTBM%2Fdenwqv7pnEoJkgTfTFCmQsWWF3F8d0GAfTJtFG8DFx4Y%2F7Z%2FszchKKZLZntOhKcpjmWCMsJ9ntg8wxKy5wgY6pgEU3%2FHoF7lABgmBswL1Gw8m50UN9AQ7xPzxzzWOS0YzV8GM9dBaeYb2W9uEpillWXtl%2B6J40hDxfePAtWcMhb71SHKgs7ngCscR7R6gJei0AgWByos7jhvgWg2Xu7pQQeLRLww0xgchmrWx5eEZUHQgQoqe%2BB5%2Bj%2FnARb2qChrkvoe20HpIOHFx7dDwW1DlnqMSeQYHhSQJq7OLaUxA6ZPrHvwF0z0L&X-Amz-Signature=e469121a6284fe08c88da577b0ffd1baa146d87bffae5379971f36d75aee750b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLA735L%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHidi50zaO3fMZEivOcRVQlJBAAh%2F%2FNXP1MKHUcBLFD9AiBcuDET1UJzrRqF4Ca8z%2FwtuAOkEP7F6DenfVksAoyf5Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM4aH3dFrbz42ZFDzzKtwDBLU3DZqK7kkaSAIgt4vlH%2B5n2q7DokzhbI4JCYQfOZtKbJ1dfopYomWhnc3DhR8wz1ivruGnf1Wfx6Aja6R0LAS4RJfCcN3iZglNVa%2BNXO1cKSsBmcq9xABBZLcYnGTBRJuacoBAPHYRlsYMXs9HZuDHoA4aBxgoLrP0%2BBOWXPewL2Xy3DOMIPGBF16ftA4A3gdtTIwLhAVL496QxtW8AV2iSpw8ZkkonFaue9X65g2kDGh9trmrqtEBUrNrSzf4ihvn4j9ZKAKCJ4UvJbCrJ0FBbppsM8%2FeSdsqvDf2P72hGzjcAZqRLTHczNdO0pjTCpN1PO8CtqhnRWmVES2r4qMsGCxbt6ezYtB18kalYYdnCjKEkOO7ySS4AJET44C5z3C3XZOlZ%2BoZTXvVvMDigQ%2BJJQXvE3bMKE9hyfJlU14JacD0DCahw5R8Dws7fcwbl8KWabc3%2FQAQ5ZwCkfMJODMnOO0MD8WVJe1ylg0wvmv7O2dZA9lw17OwPwj2iMmAnQlhILeUx%2FsfpoqhwsB%2BOW0LY5JPfpzkuSNC2%2FRggGgTBM%2Fdenwqv7pnEoJkgTfTFCmQsWWF3F8d0GAfTJtFG8DFx4Y%2F7Z%2FszchKKZLZntOhKcpjmWCMsJ9ntg8wxKy5wgY6pgEU3%2FHoF7lABgmBswL1Gw8m50UN9AQ7xPzxzzWOS0YzV8GM9dBaeYb2W9uEpillWXtl%2B6J40hDxfePAtWcMhb71SHKgs7ngCscR7R6gJei0AgWByos7jhvgWg2Xu7pQQeLRLww0xgchmrWx5eEZUHQgQoqe%2BB5%2Bj%2FnARb2qChrkvoe20HpIOHFx7dDwW1DlnqMSeQYHhSQJq7OLaUxA6ZPrHvwF0z0L&X-Amz-Signature=7d3a56f1c86fdb0e62574cc76a44091a04716e474a84bc64b37bdb04599d54b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
