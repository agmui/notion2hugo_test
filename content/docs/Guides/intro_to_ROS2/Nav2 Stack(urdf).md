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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYK4RWW%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAYgt51vZuMdDocYJSqwz7ROwptq8TcUq5K7Y4b%2F%2FKirAiBtGGM37sTj1DwBvQkUaIvPQ9HmhHPxWJJP4jnG2RkTNiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQKF4nkoeKBKKqk9KtwDNNF6v2chVxCHEFguX9IHEqmjeZdTiv%2FjKbm2CgbSTwySqW9nP6RN6NbCSvuOUrm2Uqlk3nhPjrp1t8h6pD0atgZX6%2BpB9z4QFyw3kfkfKiHTDlwPLIUnlQcEy15FQttMmKOAPtakqSk2ozgfXJH2gjUSjEH%2FAJzw6uRAX1xC65YkhpfWx%2FZE8yOGye%2BlCpAUill3i8vWXVcDDDDkxvSu8XLPCaX2HNXW2kceXcB0t1JpCKVFY1DNCHuU1EgkdHf0OISGhmdxS7MwYVzL9lbycsH9z7jQ5Ie0jdVj%2F9gA0JQJqlVAhZoe4gqPO4TYHqlqjHAovqdidQa5f038V6DlQhWt6h8%2FxvRsqxWSJZ3KzRaFs4b45uQxoImuI%2FVwKcibhtijaYcqQYb63Pr8jysuRw7i1KpeLoQBd%2FjOKQ42DkM8pLgFSlqs4FgFqHYmQpEcYK7NjQhX5oCNit0C%2F3BzdpeEMartz36LV3T0gozo7DKNa5XPfRAaSMeoF49tLk%2F5tUNY7TRfCBeEMfz1hmgKyw6inJQ2RF0h6V4eOfoRbQMRDRw154PE6es98QTvqREFNEvqk5Gv4BCwhqpKA%2FVYFBVvwjeFTKc0%2FZtuZ3ANUxxYGQO%2Fa5zyDwFAwt8w7PnzwQY6pgGAzflaSB%2FB18078rlaTT9cGEq5mrpgYf6fH1nHwDu9GF%2B9kKtgnVED%2BvrJr5LDZ83twxumxjnnQUeVQc2rGaE4ZjlZZSug6BuRaaxcDAMKjgAVBjKl3egqm13CNpeIcrIEJhubLasM7RIotM1Jc%2FZb9ASznVjkFnKcre3v96mLkPt6iNM0Yu4kY%2FR%2BXaLy9SG6M%2FEe7SFG05FzDJFLfky3eAcSlX06&X-Amz-Signature=5ea2458f8eb0d0ce2789d67ef427a13663997640610c2b6e03b9658d8fa6bccf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYK4RWW%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAYgt51vZuMdDocYJSqwz7ROwptq8TcUq5K7Y4b%2F%2FKirAiBtGGM37sTj1DwBvQkUaIvPQ9HmhHPxWJJP4jnG2RkTNiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQKF4nkoeKBKKqk9KtwDNNF6v2chVxCHEFguX9IHEqmjeZdTiv%2FjKbm2CgbSTwySqW9nP6RN6NbCSvuOUrm2Uqlk3nhPjrp1t8h6pD0atgZX6%2BpB9z4QFyw3kfkfKiHTDlwPLIUnlQcEy15FQttMmKOAPtakqSk2ozgfXJH2gjUSjEH%2FAJzw6uRAX1xC65YkhpfWx%2FZE8yOGye%2BlCpAUill3i8vWXVcDDDDkxvSu8XLPCaX2HNXW2kceXcB0t1JpCKVFY1DNCHuU1EgkdHf0OISGhmdxS7MwYVzL9lbycsH9z7jQ5Ie0jdVj%2F9gA0JQJqlVAhZoe4gqPO4TYHqlqjHAovqdidQa5f038V6DlQhWt6h8%2FxvRsqxWSJZ3KzRaFs4b45uQxoImuI%2FVwKcibhtijaYcqQYb63Pr8jysuRw7i1KpeLoQBd%2FjOKQ42DkM8pLgFSlqs4FgFqHYmQpEcYK7NjQhX5oCNit0C%2F3BzdpeEMartz36LV3T0gozo7DKNa5XPfRAaSMeoF49tLk%2F5tUNY7TRfCBeEMfz1hmgKyw6inJQ2RF0h6V4eOfoRbQMRDRw154PE6es98QTvqREFNEvqk5Gv4BCwhqpKA%2FVYFBVvwjeFTKc0%2FZtuZ3ANUxxYGQO%2Fa5zyDwFAwt8w7PnzwQY6pgGAzflaSB%2FB18078rlaTT9cGEq5mrpgYf6fH1nHwDu9GF%2B9kKtgnVED%2BvrJr5LDZ83twxumxjnnQUeVQc2rGaE4ZjlZZSug6BuRaaxcDAMKjgAVBjKl3egqm13CNpeIcrIEJhubLasM7RIotM1Jc%2FZb9ASznVjkFnKcre3v96mLkPt6iNM0Yu4kY%2FR%2BXaLy9SG6M%2FEe7SFG05FzDJFLfky3eAcSlX06&X-Amz-Signature=1f3e8ed3be332032263d9cef6442dded62a078be69e27316a4399cc17569a74d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYK4RWW%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAYgt51vZuMdDocYJSqwz7ROwptq8TcUq5K7Y4b%2F%2FKirAiBtGGM37sTj1DwBvQkUaIvPQ9HmhHPxWJJP4jnG2RkTNiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQKF4nkoeKBKKqk9KtwDNNF6v2chVxCHEFguX9IHEqmjeZdTiv%2FjKbm2CgbSTwySqW9nP6RN6NbCSvuOUrm2Uqlk3nhPjrp1t8h6pD0atgZX6%2BpB9z4QFyw3kfkfKiHTDlwPLIUnlQcEy15FQttMmKOAPtakqSk2ozgfXJH2gjUSjEH%2FAJzw6uRAX1xC65YkhpfWx%2FZE8yOGye%2BlCpAUill3i8vWXVcDDDDkxvSu8XLPCaX2HNXW2kceXcB0t1JpCKVFY1DNCHuU1EgkdHf0OISGhmdxS7MwYVzL9lbycsH9z7jQ5Ie0jdVj%2F9gA0JQJqlVAhZoe4gqPO4TYHqlqjHAovqdidQa5f038V6DlQhWt6h8%2FxvRsqxWSJZ3KzRaFs4b45uQxoImuI%2FVwKcibhtijaYcqQYb63Pr8jysuRw7i1KpeLoQBd%2FjOKQ42DkM8pLgFSlqs4FgFqHYmQpEcYK7NjQhX5oCNit0C%2F3BzdpeEMartz36LV3T0gozo7DKNa5XPfRAaSMeoF49tLk%2F5tUNY7TRfCBeEMfz1hmgKyw6inJQ2RF0h6V4eOfoRbQMRDRw154PE6es98QTvqREFNEvqk5Gv4BCwhqpKA%2FVYFBVvwjeFTKc0%2FZtuZ3ANUxxYGQO%2Fa5zyDwFAwt8w7PnzwQY6pgGAzflaSB%2FB18078rlaTT9cGEq5mrpgYf6fH1nHwDu9GF%2B9kKtgnVED%2BvrJr5LDZ83twxumxjnnQUeVQc2rGaE4ZjlZZSug6BuRaaxcDAMKjgAVBjKl3egqm13CNpeIcrIEJhubLasM7RIotM1Jc%2FZb9ASznVjkFnKcre3v96mLkPt6iNM0Yu4kY%2FR%2BXaLy9SG6M%2FEe7SFG05FzDJFLfky3eAcSlX06&X-Amz-Signature=2fa98513b6e921d7b89201469ebe52980d03c65b0091f73ebf2825abcdf5b372&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYK4RWW%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAYgt51vZuMdDocYJSqwz7ROwptq8TcUq5K7Y4b%2F%2FKirAiBtGGM37sTj1DwBvQkUaIvPQ9HmhHPxWJJP4jnG2RkTNiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQKF4nkoeKBKKqk9KtwDNNF6v2chVxCHEFguX9IHEqmjeZdTiv%2FjKbm2CgbSTwySqW9nP6RN6NbCSvuOUrm2Uqlk3nhPjrp1t8h6pD0atgZX6%2BpB9z4QFyw3kfkfKiHTDlwPLIUnlQcEy15FQttMmKOAPtakqSk2ozgfXJH2gjUSjEH%2FAJzw6uRAX1xC65YkhpfWx%2FZE8yOGye%2BlCpAUill3i8vWXVcDDDDkxvSu8XLPCaX2HNXW2kceXcB0t1JpCKVFY1DNCHuU1EgkdHf0OISGhmdxS7MwYVzL9lbycsH9z7jQ5Ie0jdVj%2F9gA0JQJqlVAhZoe4gqPO4TYHqlqjHAovqdidQa5f038V6DlQhWt6h8%2FxvRsqxWSJZ3KzRaFs4b45uQxoImuI%2FVwKcibhtijaYcqQYb63Pr8jysuRw7i1KpeLoQBd%2FjOKQ42DkM8pLgFSlqs4FgFqHYmQpEcYK7NjQhX5oCNit0C%2F3BzdpeEMartz36LV3T0gozo7DKNa5XPfRAaSMeoF49tLk%2F5tUNY7TRfCBeEMfz1hmgKyw6inJQ2RF0h6V4eOfoRbQMRDRw154PE6es98QTvqREFNEvqk5Gv4BCwhqpKA%2FVYFBVvwjeFTKc0%2FZtuZ3ANUxxYGQO%2Fa5zyDwFAwt8w7PnzwQY6pgGAzflaSB%2FB18078rlaTT9cGEq5mrpgYf6fH1nHwDu9GF%2B9kKtgnVED%2BvrJr5LDZ83twxumxjnnQUeVQc2rGaE4ZjlZZSug6BuRaaxcDAMKjgAVBjKl3egqm13CNpeIcrIEJhubLasM7RIotM1Jc%2FZb9ASznVjkFnKcre3v96mLkPt6iNM0Yu4kY%2FR%2BXaLy9SG6M%2FEe7SFG05FzDJFLfky3eAcSlX06&X-Amz-Signature=24d49b26957f8a7756c1e85f33a7ef1e077ddc700313f9348418394e026780c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYK4RWW%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAYgt51vZuMdDocYJSqwz7ROwptq8TcUq5K7Y4b%2F%2FKirAiBtGGM37sTj1DwBvQkUaIvPQ9HmhHPxWJJP4jnG2RkTNiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQKF4nkoeKBKKqk9KtwDNNF6v2chVxCHEFguX9IHEqmjeZdTiv%2FjKbm2CgbSTwySqW9nP6RN6NbCSvuOUrm2Uqlk3nhPjrp1t8h6pD0atgZX6%2BpB9z4QFyw3kfkfKiHTDlwPLIUnlQcEy15FQttMmKOAPtakqSk2ozgfXJH2gjUSjEH%2FAJzw6uRAX1xC65YkhpfWx%2FZE8yOGye%2BlCpAUill3i8vWXVcDDDDkxvSu8XLPCaX2HNXW2kceXcB0t1JpCKVFY1DNCHuU1EgkdHf0OISGhmdxS7MwYVzL9lbycsH9z7jQ5Ie0jdVj%2F9gA0JQJqlVAhZoe4gqPO4TYHqlqjHAovqdidQa5f038V6DlQhWt6h8%2FxvRsqxWSJZ3KzRaFs4b45uQxoImuI%2FVwKcibhtijaYcqQYb63Pr8jysuRw7i1KpeLoQBd%2FjOKQ42DkM8pLgFSlqs4FgFqHYmQpEcYK7NjQhX5oCNit0C%2F3BzdpeEMartz36LV3T0gozo7DKNa5XPfRAaSMeoF49tLk%2F5tUNY7TRfCBeEMfz1hmgKyw6inJQ2RF0h6V4eOfoRbQMRDRw154PE6es98QTvqREFNEvqk5Gv4BCwhqpKA%2FVYFBVvwjeFTKc0%2FZtuZ3ANUxxYGQO%2Fa5zyDwFAwt8w7PnzwQY6pgGAzflaSB%2FB18078rlaTT9cGEq5mrpgYf6fH1nHwDu9GF%2B9kKtgnVED%2BvrJr5LDZ83twxumxjnnQUeVQc2rGaE4ZjlZZSug6BuRaaxcDAMKjgAVBjKl3egqm13CNpeIcrIEJhubLasM7RIotM1Jc%2FZb9ASznVjkFnKcre3v96mLkPt6iNM0Yu4kY%2FR%2BXaLy9SG6M%2FEe7SFG05FzDJFLfky3eAcSlX06&X-Amz-Signature=5d51eee18b543f6d3fb6280c7115601c9fc0b9d3f807970b85ff789eb82b5942&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYK4RWW%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAYgt51vZuMdDocYJSqwz7ROwptq8TcUq5K7Y4b%2F%2FKirAiBtGGM37sTj1DwBvQkUaIvPQ9HmhHPxWJJP4jnG2RkTNiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQKF4nkoeKBKKqk9KtwDNNF6v2chVxCHEFguX9IHEqmjeZdTiv%2FjKbm2CgbSTwySqW9nP6RN6NbCSvuOUrm2Uqlk3nhPjrp1t8h6pD0atgZX6%2BpB9z4QFyw3kfkfKiHTDlwPLIUnlQcEy15FQttMmKOAPtakqSk2ozgfXJH2gjUSjEH%2FAJzw6uRAX1xC65YkhpfWx%2FZE8yOGye%2BlCpAUill3i8vWXVcDDDDkxvSu8XLPCaX2HNXW2kceXcB0t1JpCKVFY1DNCHuU1EgkdHf0OISGhmdxS7MwYVzL9lbycsH9z7jQ5Ie0jdVj%2F9gA0JQJqlVAhZoe4gqPO4TYHqlqjHAovqdidQa5f038V6DlQhWt6h8%2FxvRsqxWSJZ3KzRaFs4b45uQxoImuI%2FVwKcibhtijaYcqQYb63Pr8jysuRw7i1KpeLoQBd%2FjOKQ42DkM8pLgFSlqs4FgFqHYmQpEcYK7NjQhX5oCNit0C%2F3BzdpeEMartz36LV3T0gozo7DKNa5XPfRAaSMeoF49tLk%2F5tUNY7TRfCBeEMfz1hmgKyw6inJQ2RF0h6V4eOfoRbQMRDRw154PE6es98QTvqREFNEvqk5Gv4BCwhqpKA%2FVYFBVvwjeFTKc0%2FZtuZ3ANUxxYGQO%2Fa5zyDwFAwt8w7PnzwQY6pgGAzflaSB%2FB18078rlaTT9cGEq5mrpgYf6fH1nHwDu9GF%2B9kKtgnVED%2BvrJr5LDZ83twxumxjnnQUeVQc2rGaE4ZjlZZSug6BuRaaxcDAMKjgAVBjKl3egqm13CNpeIcrIEJhubLasM7RIotM1Jc%2FZb9ASznVjkFnKcre3v96mLkPt6iNM0Yu4kY%2FR%2BXaLy9SG6M%2FEe7SFG05FzDJFLfky3eAcSlX06&X-Amz-Signature=e36cfb901775427b29bca2da5d02d7cbbbf73f525d3313ab0e9d2225bc2464bc&X-Amz-SignedHeaders=host&x-id=GetObject)
