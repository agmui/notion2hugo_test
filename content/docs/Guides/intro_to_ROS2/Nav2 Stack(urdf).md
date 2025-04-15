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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RJ3COZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDftW9si3ei%2B2fpP28TCLFNExg8wHkAEwbsTHEPelq8QwIgCCZvl36ZxcoNvlPqLTlnxnoEcG8pgJMJhKBmjS19wtEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBDpSVwPk9Db2cnCxyrcA9ex%2F7TbpkEEbtFKATDk8F43BBxqA9KCqVZWI%2F6GkmUTHWqwR3thWReyqo%2BW8zqBLyTgqxC49%2FqhqoU2C067%2BdzM7wvvGh%2FazXi0nKLwtFz3pMFY7qPieA7Px1luVBiC%2BoUDKQG81ScAJVJhYt2OcKY5u8TmUHCBWPrM7rzT8hH7RydSQ5t7%2FwueCl7hqcfCBoKIfvnf8sP0d1hKKjmXbeENFra2Zhh3TmDSE76XtFWWTFJvisplhuco9sehmdxSh52Binak%2FxXawKExS%2B3lNJaArrGYsvt09c6dOauvBveMgxCV9rqjnta9GwsG8BKn4FJkEhDLdo4I0gA4J72B771yG46rH8Pdd49jsk9%2FK3%2F3kmLr9wvI%2Frdflh5xhBGrrsP%2BVWU9SGZVUyKeAnIz4t3CZlIPH7K81eqTs2qwKBz%2F110AXlpTekOJofpN6kgPDweBuki9ibeQTQvfFCJDYekUaMEJmyJs8buu2jiaypomTQnIvDVD036JGmzJ4ZWMkVL7eGFF%2BGdPOe9cziLOLJnlFMD01pGY%2By61Wt0v9vK6ySsB2zmrtOhLZ6vZ%2BLmBBPQ%2FzJt%2Fl4dZnC5CN5G3itb00NoQJHkTpSJBIWpbz4qymO%2F%2FAlzeVBt7aLwCMJrQ978GOqUBiCfnktLpzIPk92A%2FqlXyNsEaXTkZ2aZWb1UNYSZnG%2BEQ6VxBKqX%2BVgUI8sazxQHIAddAthLDvTgZsMRN7fopRfR%2B9fMQZrn7ohYqbCbGNSltK3tjf94Qz9hpFIhEjtbdK1JHw7ZGieCqGHDB7QR9jELSEyCWCtu1seclR6P8qK%2FFaE2qHpCa8WGve7376YJvKqOiawXikghdxBTyW5OCT7kifeQ7&X-Amz-Signature=b6c0b7fb9545c586f264158f523544d538db30eeee5b5d091eeb0e322c01b84e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RJ3COZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDftW9si3ei%2B2fpP28TCLFNExg8wHkAEwbsTHEPelq8QwIgCCZvl36ZxcoNvlPqLTlnxnoEcG8pgJMJhKBmjS19wtEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBDpSVwPk9Db2cnCxyrcA9ex%2F7TbpkEEbtFKATDk8F43BBxqA9KCqVZWI%2F6GkmUTHWqwR3thWReyqo%2BW8zqBLyTgqxC49%2FqhqoU2C067%2BdzM7wvvGh%2FazXi0nKLwtFz3pMFY7qPieA7Px1luVBiC%2BoUDKQG81ScAJVJhYt2OcKY5u8TmUHCBWPrM7rzT8hH7RydSQ5t7%2FwueCl7hqcfCBoKIfvnf8sP0d1hKKjmXbeENFra2Zhh3TmDSE76XtFWWTFJvisplhuco9sehmdxSh52Binak%2FxXawKExS%2B3lNJaArrGYsvt09c6dOauvBveMgxCV9rqjnta9GwsG8BKn4FJkEhDLdo4I0gA4J72B771yG46rH8Pdd49jsk9%2FK3%2F3kmLr9wvI%2Frdflh5xhBGrrsP%2BVWU9SGZVUyKeAnIz4t3CZlIPH7K81eqTs2qwKBz%2F110AXlpTekOJofpN6kgPDweBuki9ibeQTQvfFCJDYekUaMEJmyJs8buu2jiaypomTQnIvDVD036JGmzJ4ZWMkVL7eGFF%2BGdPOe9cziLOLJnlFMD01pGY%2By61Wt0v9vK6ySsB2zmrtOhLZ6vZ%2BLmBBPQ%2FzJt%2Fl4dZnC5CN5G3itb00NoQJHkTpSJBIWpbz4qymO%2F%2FAlzeVBt7aLwCMJrQ978GOqUBiCfnktLpzIPk92A%2FqlXyNsEaXTkZ2aZWb1UNYSZnG%2BEQ6VxBKqX%2BVgUI8sazxQHIAddAthLDvTgZsMRN7fopRfR%2B9fMQZrn7ohYqbCbGNSltK3tjf94Qz9hpFIhEjtbdK1JHw7ZGieCqGHDB7QR9jELSEyCWCtu1seclR6P8qK%2FFaE2qHpCa8WGve7376YJvKqOiawXikghdxBTyW5OCT7kifeQ7&X-Amz-Signature=ba3dc360295a7737d2499a536ea0fe0566236265c87b03a85b8dfa173e3d28c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RJ3COZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDftW9si3ei%2B2fpP28TCLFNExg8wHkAEwbsTHEPelq8QwIgCCZvl36ZxcoNvlPqLTlnxnoEcG8pgJMJhKBmjS19wtEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBDpSVwPk9Db2cnCxyrcA9ex%2F7TbpkEEbtFKATDk8F43BBxqA9KCqVZWI%2F6GkmUTHWqwR3thWReyqo%2BW8zqBLyTgqxC49%2FqhqoU2C067%2BdzM7wvvGh%2FazXi0nKLwtFz3pMFY7qPieA7Px1luVBiC%2BoUDKQG81ScAJVJhYt2OcKY5u8TmUHCBWPrM7rzT8hH7RydSQ5t7%2FwueCl7hqcfCBoKIfvnf8sP0d1hKKjmXbeENFra2Zhh3TmDSE76XtFWWTFJvisplhuco9sehmdxSh52Binak%2FxXawKExS%2B3lNJaArrGYsvt09c6dOauvBveMgxCV9rqjnta9GwsG8BKn4FJkEhDLdo4I0gA4J72B771yG46rH8Pdd49jsk9%2FK3%2F3kmLr9wvI%2Frdflh5xhBGrrsP%2BVWU9SGZVUyKeAnIz4t3CZlIPH7K81eqTs2qwKBz%2F110AXlpTekOJofpN6kgPDweBuki9ibeQTQvfFCJDYekUaMEJmyJs8buu2jiaypomTQnIvDVD036JGmzJ4ZWMkVL7eGFF%2BGdPOe9cziLOLJnlFMD01pGY%2By61Wt0v9vK6ySsB2zmrtOhLZ6vZ%2BLmBBPQ%2FzJt%2Fl4dZnC5CN5G3itb00NoQJHkTpSJBIWpbz4qymO%2F%2FAlzeVBt7aLwCMJrQ978GOqUBiCfnktLpzIPk92A%2FqlXyNsEaXTkZ2aZWb1UNYSZnG%2BEQ6VxBKqX%2BVgUI8sazxQHIAddAthLDvTgZsMRN7fopRfR%2B9fMQZrn7ohYqbCbGNSltK3tjf94Qz9hpFIhEjtbdK1JHw7ZGieCqGHDB7QR9jELSEyCWCtu1seclR6P8qK%2FFaE2qHpCa8WGve7376YJvKqOiawXikghdxBTyW5OCT7kifeQ7&X-Amz-Signature=6e20d48e14efdf81de9c1eaadc3e3eb7f5757fd510b6c3c87353516ee7f53e37&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RJ3COZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDftW9si3ei%2B2fpP28TCLFNExg8wHkAEwbsTHEPelq8QwIgCCZvl36ZxcoNvlPqLTlnxnoEcG8pgJMJhKBmjS19wtEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBDpSVwPk9Db2cnCxyrcA9ex%2F7TbpkEEbtFKATDk8F43BBxqA9KCqVZWI%2F6GkmUTHWqwR3thWReyqo%2BW8zqBLyTgqxC49%2FqhqoU2C067%2BdzM7wvvGh%2FazXi0nKLwtFz3pMFY7qPieA7Px1luVBiC%2BoUDKQG81ScAJVJhYt2OcKY5u8TmUHCBWPrM7rzT8hH7RydSQ5t7%2FwueCl7hqcfCBoKIfvnf8sP0d1hKKjmXbeENFra2Zhh3TmDSE76XtFWWTFJvisplhuco9sehmdxSh52Binak%2FxXawKExS%2B3lNJaArrGYsvt09c6dOauvBveMgxCV9rqjnta9GwsG8BKn4FJkEhDLdo4I0gA4J72B771yG46rH8Pdd49jsk9%2FK3%2F3kmLr9wvI%2Frdflh5xhBGrrsP%2BVWU9SGZVUyKeAnIz4t3CZlIPH7K81eqTs2qwKBz%2F110AXlpTekOJofpN6kgPDweBuki9ibeQTQvfFCJDYekUaMEJmyJs8buu2jiaypomTQnIvDVD036JGmzJ4ZWMkVL7eGFF%2BGdPOe9cziLOLJnlFMD01pGY%2By61Wt0v9vK6ySsB2zmrtOhLZ6vZ%2BLmBBPQ%2FzJt%2Fl4dZnC5CN5G3itb00NoQJHkTpSJBIWpbz4qymO%2F%2FAlzeVBt7aLwCMJrQ978GOqUBiCfnktLpzIPk92A%2FqlXyNsEaXTkZ2aZWb1UNYSZnG%2BEQ6VxBKqX%2BVgUI8sazxQHIAddAthLDvTgZsMRN7fopRfR%2B9fMQZrn7ohYqbCbGNSltK3tjf94Qz9hpFIhEjtbdK1JHw7ZGieCqGHDB7QR9jELSEyCWCtu1seclR6P8qK%2FFaE2qHpCa8WGve7376YJvKqOiawXikghdxBTyW5OCT7kifeQ7&X-Amz-Signature=ac9be5ebee64751da7ce557e10ef03f655b2afca8655ae096c4dcabf68235580&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RJ3COZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDftW9si3ei%2B2fpP28TCLFNExg8wHkAEwbsTHEPelq8QwIgCCZvl36ZxcoNvlPqLTlnxnoEcG8pgJMJhKBmjS19wtEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBDpSVwPk9Db2cnCxyrcA9ex%2F7TbpkEEbtFKATDk8F43BBxqA9KCqVZWI%2F6GkmUTHWqwR3thWReyqo%2BW8zqBLyTgqxC49%2FqhqoU2C067%2BdzM7wvvGh%2FazXi0nKLwtFz3pMFY7qPieA7Px1luVBiC%2BoUDKQG81ScAJVJhYt2OcKY5u8TmUHCBWPrM7rzT8hH7RydSQ5t7%2FwueCl7hqcfCBoKIfvnf8sP0d1hKKjmXbeENFra2Zhh3TmDSE76XtFWWTFJvisplhuco9sehmdxSh52Binak%2FxXawKExS%2B3lNJaArrGYsvt09c6dOauvBveMgxCV9rqjnta9GwsG8BKn4FJkEhDLdo4I0gA4J72B771yG46rH8Pdd49jsk9%2FK3%2F3kmLr9wvI%2Frdflh5xhBGrrsP%2BVWU9SGZVUyKeAnIz4t3CZlIPH7K81eqTs2qwKBz%2F110AXlpTekOJofpN6kgPDweBuki9ibeQTQvfFCJDYekUaMEJmyJs8buu2jiaypomTQnIvDVD036JGmzJ4ZWMkVL7eGFF%2BGdPOe9cziLOLJnlFMD01pGY%2By61Wt0v9vK6ySsB2zmrtOhLZ6vZ%2BLmBBPQ%2FzJt%2Fl4dZnC5CN5G3itb00NoQJHkTpSJBIWpbz4qymO%2F%2FAlzeVBt7aLwCMJrQ978GOqUBiCfnktLpzIPk92A%2FqlXyNsEaXTkZ2aZWb1UNYSZnG%2BEQ6VxBKqX%2BVgUI8sazxQHIAddAthLDvTgZsMRN7fopRfR%2B9fMQZrn7ohYqbCbGNSltK3tjf94Qz9hpFIhEjtbdK1JHw7ZGieCqGHDB7QR9jELSEyCWCtu1seclR6P8qK%2FFaE2qHpCa8WGve7376YJvKqOiawXikghdxBTyW5OCT7kifeQ7&X-Amz-Signature=f62568a3ffde2eb9ce8d7678c68245b2a117388d315cf7f523d20d9c465d7be6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RJ3COZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDftW9si3ei%2B2fpP28TCLFNExg8wHkAEwbsTHEPelq8QwIgCCZvl36ZxcoNvlPqLTlnxnoEcG8pgJMJhKBmjS19wtEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBDpSVwPk9Db2cnCxyrcA9ex%2F7TbpkEEbtFKATDk8F43BBxqA9KCqVZWI%2F6GkmUTHWqwR3thWReyqo%2BW8zqBLyTgqxC49%2FqhqoU2C067%2BdzM7wvvGh%2FazXi0nKLwtFz3pMFY7qPieA7Px1luVBiC%2BoUDKQG81ScAJVJhYt2OcKY5u8TmUHCBWPrM7rzT8hH7RydSQ5t7%2FwueCl7hqcfCBoKIfvnf8sP0d1hKKjmXbeENFra2Zhh3TmDSE76XtFWWTFJvisplhuco9sehmdxSh52Binak%2FxXawKExS%2B3lNJaArrGYsvt09c6dOauvBveMgxCV9rqjnta9GwsG8BKn4FJkEhDLdo4I0gA4J72B771yG46rH8Pdd49jsk9%2FK3%2F3kmLr9wvI%2Frdflh5xhBGrrsP%2BVWU9SGZVUyKeAnIz4t3CZlIPH7K81eqTs2qwKBz%2F110AXlpTekOJofpN6kgPDweBuki9ibeQTQvfFCJDYekUaMEJmyJs8buu2jiaypomTQnIvDVD036JGmzJ4ZWMkVL7eGFF%2BGdPOe9cziLOLJnlFMD01pGY%2By61Wt0v9vK6ySsB2zmrtOhLZ6vZ%2BLmBBPQ%2FzJt%2Fl4dZnC5CN5G3itb00NoQJHkTpSJBIWpbz4qymO%2F%2FAlzeVBt7aLwCMJrQ978GOqUBiCfnktLpzIPk92A%2FqlXyNsEaXTkZ2aZWb1UNYSZnG%2BEQ6VxBKqX%2BVgUI8sazxQHIAddAthLDvTgZsMRN7fopRfR%2B9fMQZrn7ohYqbCbGNSltK3tjf94Qz9hpFIhEjtbdK1JHw7ZGieCqGHDB7QR9jELSEyCWCtu1seclR6P8qK%2FFaE2qHpCa8WGve7376YJvKqOiawXikghdxBTyW5OCT7kifeQ7&X-Amz-Signature=dffc62aaa2f347f62e93c3fbc28965ac96c85e788f36d2d636d80077fafdbe34&X-Amz-SignedHeaders=host&x-id=GetObject)
