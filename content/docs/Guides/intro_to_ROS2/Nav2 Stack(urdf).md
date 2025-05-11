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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZYVZZL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCIbKkLdBpbb8Xdbg21KFEMAV9FIsZZ6Q7naalihE%2Bv4AIhAPPOlnYXD1lK2oja84b8tF5FrZKvgU3wH71OAotgOBUGKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT70YwDbSNebUkaTMq3AMPHI0elU%2Fukzu8CZyT9CGeVaPpfhXcqQn6NrhbwTXDX1NuEcKgDNthn7WEkZjh5ffG9ovb%2FVwq3wYBBRdEEwa2%2FbyvYtesivhO2rOgAPs15JXg4C9c8X78x89G%2BQYARbLV6Hh10WOcbQvy17Jcbt%2FvMmKRVQGNeh98wtrYNUc0VZRM5UrvDoRkGszt6I6%2Fp2jdUlbp4iCRM8T2kRaYZFn7VqaXeQMEucrCtt2xmENMZDrDam5wCAjocIN2VrIhwHDYrwoL%2B%2FDFp638eE6u2ZFBFqNM69YA%2FehXGAon1VQI5gWW%2FRU9HoonvcZ6j6Ar2gbbU6CSsqvxFETCPdLu7BNDvgbEuBE4PNQbKZZMcAJTGKBxd0fAj5PQ6Yc0jkPbLrTu3y4Jo4a7L0qB3R9rjHxhqNYluiUEkFTOQ5dtdo5gNkXNghLxNUrim9M0CA3AiWx8HLcIZ70%2BX1WFrgsyIm5ZJSj71xZTxrvwD%2Fbu%2BN3EJinEukJ0lsUYm%2Be8bnKDs2jB7NJ5UwXh8Yv9ZiQz5BbizOjQCwrizuQf8fuRuPAeDEptyvNerJSCP2BaHZLv1cFW%2BetWbPhE%2F%2Fog%2Bgi4fKdklCPpJzd7dWZVZI9odfffstmvGXFPvBA6h94QEzDVo4HBBjqkAe3EEhBScOIHGCuzAXEbQLUx7rNysYx8BPOJqoMq44B2kzUISDPYga7kn43nII%2FKYv%2Bw0ND2hRKelxfV5cjNMIgCsxRPf1eIELBoKgroqT%2BFyq0daKJ4W8gCYq6dcQQrbGIDoxmQHX2vQ4ebrgxrVXvzFZ3hNQlMax6wVbwslAJEbMnapJgtZRPomRUld8a6Cofp8l%2FjbmYoMq4vm%2F1D3qNCz9wv&X-Amz-Signature=480634550e29f038a6e42c53a9ea329c1e81c83217f885672e8fb2e74e0f1346&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZYVZZL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCIbKkLdBpbb8Xdbg21KFEMAV9FIsZZ6Q7naalihE%2Bv4AIhAPPOlnYXD1lK2oja84b8tF5FrZKvgU3wH71OAotgOBUGKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT70YwDbSNebUkaTMq3AMPHI0elU%2Fukzu8CZyT9CGeVaPpfhXcqQn6NrhbwTXDX1NuEcKgDNthn7WEkZjh5ffG9ovb%2FVwq3wYBBRdEEwa2%2FbyvYtesivhO2rOgAPs15JXg4C9c8X78x89G%2BQYARbLV6Hh10WOcbQvy17Jcbt%2FvMmKRVQGNeh98wtrYNUc0VZRM5UrvDoRkGszt6I6%2Fp2jdUlbp4iCRM8T2kRaYZFn7VqaXeQMEucrCtt2xmENMZDrDam5wCAjocIN2VrIhwHDYrwoL%2B%2FDFp638eE6u2ZFBFqNM69YA%2FehXGAon1VQI5gWW%2FRU9HoonvcZ6j6Ar2gbbU6CSsqvxFETCPdLu7BNDvgbEuBE4PNQbKZZMcAJTGKBxd0fAj5PQ6Yc0jkPbLrTu3y4Jo4a7L0qB3R9rjHxhqNYluiUEkFTOQ5dtdo5gNkXNghLxNUrim9M0CA3AiWx8HLcIZ70%2BX1WFrgsyIm5ZJSj71xZTxrvwD%2Fbu%2BN3EJinEukJ0lsUYm%2Be8bnKDs2jB7NJ5UwXh8Yv9ZiQz5BbizOjQCwrizuQf8fuRuPAeDEptyvNerJSCP2BaHZLv1cFW%2BetWbPhE%2F%2Fog%2Bgi4fKdklCPpJzd7dWZVZI9odfffstmvGXFPvBA6h94QEzDVo4HBBjqkAe3EEhBScOIHGCuzAXEbQLUx7rNysYx8BPOJqoMq44B2kzUISDPYga7kn43nII%2FKYv%2Bw0ND2hRKelxfV5cjNMIgCsxRPf1eIELBoKgroqT%2BFyq0daKJ4W8gCYq6dcQQrbGIDoxmQHX2vQ4ebrgxrVXvzFZ3hNQlMax6wVbwslAJEbMnapJgtZRPomRUld8a6Cofp8l%2FjbmYoMq4vm%2F1D3qNCz9wv&X-Amz-Signature=ec593d57f8b590b819f3c731d6a395decb75c5c4e5693272daa88fa72dee779f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZYVZZL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCIbKkLdBpbb8Xdbg21KFEMAV9FIsZZ6Q7naalihE%2Bv4AIhAPPOlnYXD1lK2oja84b8tF5FrZKvgU3wH71OAotgOBUGKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT70YwDbSNebUkaTMq3AMPHI0elU%2Fukzu8CZyT9CGeVaPpfhXcqQn6NrhbwTXDX1NuEcKgDNthn7WEkZjh5ffG9ovb%2FVwq3wYBBRdEEwa2%2FbyvYtesivhO2rOgAPs15JXg4C9c8X78x89G%2BQYARbLV6Hh10WOcbQvy17Jcbt%2FvMmKRVQGNeh98wtrYNUc0VZRM5UrvDoRkGszt6I6%2Fp2jdUlbp4iCRM8T2kRaYZFn7VqaXeQMEucrCtt2xmENMZDrDam5wCAjocIN2VrIhwHDYrwoL%2B%2FDFp638eE6u2ZFBFqNM69YA%2FehXGAon1VQI5gWW%2FRU9HoonvcZ6j6Ar2gbbU6CSsqvxFETCPdLu7BNDvgbEuBE4PNQbKZZMcAJTGKBxd0fAj5PQ6Yc0jkPbLrTu3y4Jo4a7L0qB3R9rjHxhqNYluiUEkFTOQ5dtdo5gNkXNghLxNUrim9M0CA3AiWx8HLcIZ70%2BX1WFrgsyIm5ZJSj71xZTxrvwD%2Fbu%2BN3EJinEukJ0lsUYm%2Be8bnKDs2jB7NJ5UwXh8Yv9ZiQz5BbizOjQCwrizuQf8fuRuPAeDEptyvNerJSCP2BaHZLv1cFW%2BetWbPhE%2F%2Fog%2Bgi4fKdklCPpJzd7dWZVZI9odfffstmvGXFPvBA6h94QEzDVo4HBBjqkAe3EEhBScOIHGCuzAXEbQLUx7rNysYx8BPOJqoMq44B2kzUISDPYga7kn43nII%2FKYv%2Bw0ND2hRKelxfV5cjNMIgCsxRPf1eIELBoKgroqT%2BFyq0daKJ4W8gCYq6dcQQrbGIDoxmQHX2vQ4ebrgxrVXvzFZ3hNQlMax6wVbwslAJEbMnapJgtZRPomRUld8a6Cofp8l%2FjbmYoMq4vm%2F1D3qNCz9wv&X-Amz-Signature=711e9c0cc94ff0c21d62d57af2ae6933c8ac8f7dce68d12c91c82099609a3e62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZYVZZL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCIbKkLdBpbb8Xdbg21KFEMAV9FIsZZ6Q7naalihE%2Bv4AIhAPPOlnYXD1lK2oja84b8tF5FrZKvgU3wH71OAotgOBUGKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT70YwDbSNebUkaTMq3AMPHI0elU%2Fukzu8CZyT9CGeVaPpfhXcqQn6NrhbwTXDX1NuEcKgDNthn7WEkZjh5ffG9ovb%2FVwq3wYBBRdEEwa2%2FbyvYtesivhO2rOgAPs15JXg4C9c8X78x89G%2BQYARbLV6Hh10WOcbQvy17Jcbt%2FvMmKRVQGNeh98wtrYNUc0VZRM5UrvDoRkGszt6I6%2Fp2jdUlbp4iCRM8T2kRaYZFn7VqaXeQMEucrCtt2xmENMZDrDam5wCAjocIN2VrIhwHDYrwoL%2B%2FDFp638eE6u2ZFBFqNM69YA%2FehXGAon1VQI5gWW%2FRU9HoonvcZ6j6Ar2gbbU6CSsqvxFETCPdLu7BNDvgbEuBE4PNQbKZZMcAJTGKBxd0fAj5PQ6Yc0jkPbLrTu3y4Jo4a7L0qB3R9rjHxhqNYluiUEkFTOQ5dtdo5gNkXNghLxNUrim9M0CA3AiWx8HLcIZ70%2BX1WFrgsyIm5ZJSj71xZTxrvwD%2Fbu%2BN3EJinEukJ0lsUYm%2Be8bnKDs2jB7NJ5UwXh8Yv9ZiQz5BbizOjQCwrizuQf8fuRuPAeDEptyvNerJSCP2BaHZLv1cFW%2BetWbPhE%2F%2Fog%2Bgi4fKdklCPpJzd7dWZVZI9odfffstmvGXFPvBA6h94QEzDVo4HBBjqkAe3EEhBScOIHGCuzAXEbQLUx7rNysYx8BPOJqoMq44B2kzUISDPYga7kn43nII%2FKYv%2Bw0ND2hRKelxfV5cjNMIgCsxRPf1eIELBoKgroqT%2BFyq0daKJ4W8gCYq6dcQQrbGIDoxmQHX2vQ4ebrgxrVXvzFZ3hNQlMax6wVbwslAJEbMnapJgtZRPomRUld8a6Cofp8l%2FjbmYoMq4vm%2F1D3qNCz9wv&X-Amz-Signature=209ce213da90cfc37f6ce4b49da8e563065e63cab0e85b5e8dc903d50e15cc48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZYVZZL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCIbKkLdBpbb8Xdbg21KFEMAV9FIsZZ6Q7naalihE%2Bv4AIhAPPOlnYXD1lK2oja84b8tF5FrZKvgU3wH71OAotgOBUGKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT70YwDbSNebUkaTMq3AMPHI0elU%2Fukzu8CZyT9CGeVaPpfhXcqQn6NrhbwTXDX1NuEcKgDNthn7WEkZjh5ffG9ovb%2FVwq3wYBBRdEEwa2%2FbyvYtesivhO2rOgAPs15JXg4C9c8X78x89G%2BQYARbLV6Hh10WOcbQvy17Jcbt%2FvMmKRVQGNeh98wtrYNUc0VZRM5UrvDoRkGszt6I6%2Fp2jdUlbp4iCRM8T2kRaYZFn7VqaXeQMEucrCtt2xmENMZDrDam5wCAjocIN2VrIhwHDYrwoL%2B%2FDFp638eE6u2ZFBFqNM69YA%2FehXGAon1VQI5gWW%2FRU9HoonvcZ6j6Ar2gbbU6CSsqvxFETCPdLu7BNDvgbEuBE4PNQbKZZMcAJTGKBxd0fAj5PQ6Yc0jkPbLrTu3y4Jo4a7L0qB3R9rjHxhqNYluiUEkFTOQ5dtdo5gNkXNghLxNUrim9M0CA3AiWx8HLcIZ70%2BX1WFrgsyIm5ZJSj71xZTxrvwD%2Fbu%2BN3EJinEukJ0lsUYm%2Be8bnKDs2jB7NJ5UwXh8Yv9ZiQz5BbizOjQCwrizuQf8fuRuPAeDEptyvNerJSCP2BaHZLv1cFW%2BetWbPhE%2F%2Fog%2Bgi4fKdklCPpJzd7dWZVZI9odfffstmvGXFPvBA6h94QEzDVo4HBBjqkAe3EEhBScOIHGCuzAXEbQLUx7rNysYx8BPOJqoMq44B2kzUISDPYga7kn43nII%2FKYv%2Bw0ND2hRKelxfV5cjNMIgCsxRPf1eIELBoKgroqT%2BFyq0daKJ4W8gCYq6dcQQrbGIDoxmQHX2vQ4ebrgxrVXvzFZ3hNQlMax6wVbwslAJEbMnapJgtZRPomRUld8a6Cofp8l%2FjbmYoMq4vm%2F1D3qNCz9wv&X-Amz-Signature=4cfa6aef1a0b543b33efc547a81d2d1d98a89e4997896889c8c3fd5df8397bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZYVZZL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCIbKkLdBpbb8Xdbg21KFEMAV9FIsZZ6Q7naalihE%2Bv4AIhAPPOlnYXD1lK2oja84b8tF5FrZKvgU3wH71OAotgOBUGKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT70YwDbSNebUkaTMq3AMPHI0elU%2Fukzu8CZyT9CGeVaPpfhXcqQn6NrhbwTXDX1NuEcKgDNthn7WEkZjh5ffG9ovb%2FVwq3wYBBRdEEwa2%2FbyvYtesivhO2rOgAPs15JXg4C9c8X78x89G%2BQYARbLV6Hh10WOcbQvy17Jcbt%2FvMmKRVQGNeh98wtrYNUc0VZRM5UrvDoRkGszt6I6%2Fp2jdUlbp4iCRM8T2kRaYZFn7VqaXeQMEucrCtt2xmENMZDrDam5wCAjocIN2VrIhwHDYrwoL%2B%2FDFp638eE6u2ZFBFqNM69YA%2FehXGAon1VQI5gWW%2FRU9HoonvcZ6j6Ar2gbbU6CSsqvxFETCPdLu7BNDvgbEuBE4PNQbKZZMcAJTGKBxd0fAj5PQ6Yc0jkPbLrTu3y4Jo4a7L0qB3R9rjHxhqNYluiUEkFTOQ5dtdo5gNkXNghLxNUrim9M0CA3AiWx8HLcIZ70%2BX1WFrgsyIm5ZJSj71xZTxrvwD%2Fbu%2BN3EJinEukJ0lsUYm%2Be8bnKDs2jB7NJ5UwXh8Yv9ZiQz5BbizOjQCwrizuQf8fuRuPAeDEptyvNerJSCP2BaHZLv1cFW%2BetWbPhE%2F%2Fog%2Bgi4fKdklCPpJzd7dWZVZI9odfffstmvGXFPvBA6h94QEzDVo4HBBjqkAe3EEhBScOIHGCuzAXEbQLUx7rNysYx8BPOJqoMq44B2kzUISDPYga7kn43nII%2FKYv%2Bw0ND2hRKelxfV5cjNMIgCsxRPf1eIELBoKgroqT%2BFyq0daKJ4W8gCYq6dcQQrbGIDoxmQHX2vQ4ebrgxrVXvzFZ3hNQlMax6wVbwslAJEbMnapJgtZRPomRUld8a6Cofp8l%2FjbmYoMq4vm%2F1D3qNCz9wv&X-Amz-Signature=fd888576605bc461f7f461ba1343dcc20710d3c771ffdb128f46542e9c9c246e&X-Amz-SignedHeaders=host&x-id=GetObject)
