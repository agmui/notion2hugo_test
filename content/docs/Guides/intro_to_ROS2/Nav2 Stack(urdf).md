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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QAWVGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCb60xnWxlGh2Tv910rCO0FohKcjice1DaB%2B4DZP1deAiBSKqQyZgQK4eKaivlL4uI92oi1tuyEukaIu8EDUtt94SqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFLe7Dn1ISw1zEFOGKtwDhRk%2F%2FGpoOP7h%2BZSmg93rFOj1NpQO0VIa88lCXV2aLFWguefmypHbjyH8XpVaE0%2B3eee9YvPczXi%2BEMj0L940c8jeC8CRPVqcYXHu4t%2BfMIqdH06L6GwTxnTPkHtnKyux4b5Qmj%2FTpgXL6Ax2sgMpyhEuCahIuUjF%2BnMZwn6h7%2B0NUV4w%2BpvrR8hyDsJoj3az3Y%2FqQ4Ve0%2FAgXy80OAu21AFaq6BF7MusDs3BIn5mxbaxOP%2FZhRwUtj%2BE3QEtMhIf3UprFnKv0zoKjUYE%2FDwCsLdCuVvmzDl1m89N5Z2qaM7b3xgD7%2BVlepWeJIWi2KzdV5avvwTN8T3nJJZeJNhp21xbjzrW0Sq5to7NYE0ChjFqsujAHkJYKluR5MY1S%2FOOPkDtUjG7vztwIaUXxSsMIrKtxpkFt1cXSGQ16Z0xI6PYNkE98I2HI5ife9q%2FQwZrq9EfOvxATmOOcHFXTkIYxjH%2FUNwHm8GzKFz3Ts3Ozxb2AmdwTzjnjaEdCR8ZjZYDIqKiwqZGchIyLpdrkcDPFDA6JnX7D%2FceZlI2%2BFYtSy9buqo35bKeYMGzqb6BJnaFc2WKJahmY8uzy28jgV9bszfbAtTIS%2BzfHFVRLZ8qhcip%2BEXEhDIuBvHB33kw7MiuvQY6pgG9IiYnmbJBIbGwAte1LtreReNPrPrMuqL3PYFoKzZ4t4bqQi7Jr%2FaMHoKzDnCTeZzdcAuH2FErKrm9gQCaLSIQUdU875Vla0hJYiO%2BsHCv3LHomJG9671Q0Qy%2BA2MBeXKd7Z1PCs1x%2BAnjv7hq7X9XsA9tUkI70POsMmKPeZFUEC7RDUptn33Je6%2F5dJgDnN5jyDvRKoUG89S%2FlfjSXzjrGQMMtnwL&X-Amz-Signature=722bc77f10328d71055ae9b9a2529f76949e4394d7051f27c294bd01b82bf7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QAWVGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCb60xnWxlGh2Tv910rCO0FohKcjice1DaB%2B4DZP1deAiBSKqQyZgQK4eKaivlL4uI92oi1tuyEukaIu8EDUtt94SqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFLe7Dn1ISw1zEFOGKtwDhRk%2F%2FGpoOP7h%2BZSmg93rFOj1NpQO0VIa88lCXV2aLFWguefmypHbjyH8XpVaE0%2B3eee9YvPczXi%2BEMj0L940c8jeC8CRPVqcYXHu4t%2BfMIqdH06L6GwTxnTPkHtnKyux4b5Qmj%2FTpgXL6Ax2sgMpyhEuCahIuUjF%2BnMZwn6h7%2B0NUV4w%2BpvrR8hyDsJoj3az3Y%2FqQ4Ve0%2FAgXy80OAu21AFaq6BF7MusDs3BIn5mxbaxOP%2FZhRwUtj%2BE3QEtMhIf3UprFnKv0zoKjUYE%2FDwCsLdCuVvmzDl1m89N5Z2qaM7b3xgD7%2BVlepWeJIWi2KzdV5avvwTN8T3nJJZeJNhp21xbjzrW0Sq5to7NYE0ChjFqsujAHkJYKluR5MY1S%2FOOPkDtUjG7vztwIaUXxSsMIrKtxpkFt1cXSGQ16Z0xI6PYNkE98I2HI5ife9q%2FQwZrq9EfOvxATmOOcHFXTkIYxjH%2FUNwHm8GzKFz3Ts3Ozxb2AmdwTzjnjaEdCR8ZjZYDIqKiwqZGchIyLpdrkcDPFDA6JnX7D%2FceZlI2%2BFYtSy9buqo35bKeYMGzqb6BJnaFc2WKJahmY8uzy28jgV9bszfbAtTIS%2BzfHFVRLZ8qhcip%2BEXEhDIuBvHB33kw7MiuvQY6pgG9IiYnmbJBIbGwAte1LtreReNPrPrMuqL3PYFoKzZ4t4bqQi7Jr%2FaMHoKzDnCTeZzdcAuH2FErKrm9gQCaLSIQUdU875Vla0hJYiO%2BsHCv3LHomJG9671Q0Qy%2BA2MBeXKd7Z1PCs1x%2BAnjv7hq7X9XsA9tUkI70POsMmKPeZFUEC7RDUptn33Je6%2F5dJgDnN5jyDvRKoUG89S%2FlfjSXzjrGQMMtnwL&X-Amz-Signature=7cdae06fbf959388628ba2dd14c5863e69ca1a83a9f7510395685ac9dd6ae4a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QAWVGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCb60xnWxlGh2Tv910rCO0FohKcjice1DaB%2B4DZP1deAiBSKqQyZgQK4eKaivlL4uI92oi1tuyEukaIu8EDUtt94SqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFLe7Dn1ISw1zEFOGKtwDhRk%2F%2FGpoOP7h%2BZSmg93rFOj1NpQO0VIa88lCXV2aLFWguefmypHbjyH8XpVaE0%2B3eee9YvPczXi%2BEMj0L940c8jeC8CRPVqcYXHu4t%2BfMIqdH06L6GwTxnTPkHtnKyux4b5Qmj%2FTpgXL6Ax2sgMpyhEuCahIuUjF%2BnMZwn6h7%2B0NUV4w%2BpvrR8hyDsJoj3az3Y%2FqQ4Ve0%2FAgXy80OAu21AFaq6BF7MusDs3BIn5mxbaxOP%2FZhRwUtj%2BE3QEtMhIf3UprFnKv0zoKjUYE%2FDwCsLdCuVvmzDl1m89N5Z2qaM7b3xgD7%2BVlepWeJIWi2KzdV5avvwTN8T3nJJZeJNhp21xbjzrW0Sq5to7NYE0ChjFqsujAHkJYKluR5MY1S%2FOOPkDtUjG7vztwIaUXxSsMIrKtxpkFt1cXSGQ16Z0xI6PYNkE98I2HI5ife9q%2FQwZrq9EfOvxATmOOcHFXTkIYxjH%2FUNwHm8GzKFz3Ts3Ozxb2AmdwTzjnjaEdCR8ZjZYDIqKiwqZGchIyLpdrkcDPFDA6JnX7D%2FceZlI2%2BFYtSy9buqo35bKeYMGzqb6BJnaFc2WKJahmY8uzy28jgV9bszfbAtTIS%2BzfHFVRLZ8qhcip%2BEXEhDIuBvHB33kw7MiuvQY6pgG9IiYnmbJBIbGwAte1LtreReNPrPrMuqL3PYFoKzZ4t4bqQi7Jr%2FaMHoKzDnCTeZzdcAuH2FErKrm9gQCaLSIQUdU875Vla0hJYiO%2BsHCv3LHomJG9671Q0Qy%2BA2MBeXKd7Z1PCs1x%2BAnjv7hq7X9XsA9tUkI70POsMmKPeZFUEC7RDUptn33Je6%2F5dJgDnN5jyDvRKoUG89S%2FlfjSXzjrGQMMtnwL&X-Amz-Signature=83fe7e00cc6854635a4101521aa67da71ae91e241caa4bd6a5027d106f10a1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QAWVGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCb60xnWxlGh2Tv910rCO0FohKcjice1DaB%2B4DZP1deAiBSKqQyZgQK4eKaivlL4uI92oi1tuyEukaIu8EDUtt94SqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFLe7Dn1ISw1zEFOGKtwDhRk%2F%2FGpoOP7h%2BZSmg93rFOj1NpQO0VIa88lCXV2aLFWguefmypHbjyH8XpVaE0%2B3eee9YvPczXi%2BEMj0L940c8jeC8CRPVqcYXHu4t%2BfMIqdH06L6GwTxnTPkHtnKyux4b5Qmj%2FTpgXL6Ax2sgMpyhEuCahIuUjF%2BnMZwn6h7%2B0NUV4w%2BpvrR8hyDsJoj3az3Y%2FqQ4Ve0%2FAgXy80OAu21AFaq6BF7MusDs3BIn5mxbaxOP%2FZhRwUtj%2BE3QEtMhIf3UprFnKv0zoKjUYE%2FDwCsLdCuVvmzDl1m89N5Z2qaM7b3xgD7%2BVlepWeJIWi2KzdV5avvwTN8T3nJJZeJNhp21xbjzrW0Sq5to7NYE0ChjFqsujAHkJYKluR5MY1S%2FOOPkDtUjG7vztwIaUXxSsMIrKtxpkFt1cXSGQ16Z0xI6PYNkE98I2HI5ife9q%2FQwZrq9EfOvxATmOOcHFXTkIYxjH%2FUNwHm8GzKFz3Ts3Ozxb2AmdwTzjnjaEdCR8ZjZYDIqKiwqZGchIyLpdrkcDPFDA6JnX7D%2FceZlI2%2BFYtSy9buqo35bKeYMGzqb6BJnaFc2WKJahmY8uzy28jgV9bszfbAtTIS%2BzfHFVRLZ8qhcip%2BEXEhDIuBvHB33kw7MiuvQY6pgG9IiYnmbJBIbGwAte1LtreReNPrPrMuqL3PYFoKzZ4t4bqQi7Jr%2FaMHoKzDnCTeZzdcAuH2FErKrm9gQCaLSIQUdU875Vla0hJYiO%2BsHCv3LHomJG9671Q0Qy%2BA2MBeXKd7Z1PCs1x%2BAnjv7hq7X9XsA9tUkI70POsMmKPeZFUEC7RDUptn33Je6%2F5dJgDnN5jyDvRKoUG89S%2FlfjSXzjrGQMMtnwL&X-Amz-Signature=1bc45b243813e5532475deead1ddcd451cca7ab60ea99aded5bc40ace471380f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QAWVGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCb60xnWxlGh2Tv910rCO0FohKcjice1DaB%2B4DZP1deAiBSKqQyZgQK4eKaivlL4uI92oi1tuyEukaIu8EDUtt94SqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFLe7Dn1ISw1zEFOGKtwDhRk%2F%2FGpoOP7h%2BZSmg93rFOj1NpQO0VIa88lCXV2aLFWguefmypHbjyH8XpVaE0%2B3eee9YvPczXi%2BEMj0L940c8jeC8CRPVqcYXHu4t%2BfMIqdH06L6GwTxnTPkHtnKyux4b5Qmj%2FTpgXL6Ax2sgMpyhEuCahIuUjF%2BnMZwn6h7%2B0NUV4w%2BpvrR8hyDsJoj3az3Y%2FqQ4Ve0%2FAgXy80OAu21AFaq6BF7MusDs3BIn5mxbaxOP%2FZhRwUtj%2BE3QEtMhIf3UprFnKv0zoKjUYE%2FDwCsLdCuVvmzDl1m89N5Z2qaM7b3xgD7%2BVlepWeJIWi2KzdV5avvwTN8T3nJJZeJNhp21xbjzrW0Sq5to7NYE0ChjFqsujAHkJYKluR5MY1S%2FOOPkDtUjG7vztwIaUXxSsMIrKtxpkFt1cXSGQ16Z0xI6PYNkE98I2HI5ife9q%2FQwZrq9EfOvxATmOOcHFXTkIYxjH%2FUNwHm8GzKFz3Ts3Ozxb2AmdwTzjnjaEdCR8ZjZYDIqKiwqZGchIyLpdrkcDPFDA6JnX7D%2FceZlI2%2BFYtSy9buqo35bKeYMGzqb6BJnaFc2WKJahmY8uzy28jgV9bszfbAtTIS%2BzfHFVRLZ8qhcip%2BEXEhDIuBvHB33kw7MiuvQY6pgG9IiYnmbJBIbGwAte1LtreReNPrPrMuqL3PYFoKzZ4t4bqQi7Jr%2FaMHoKzDnCTeZzdcAuH2FErKrm9gQCaLSIQUdU875Vla0hJYiO%2BsHCv3LHomJG9671Q0Qy%2BA2MBeXKd7Z1PCs1x%2BAnjv7hq7X9XsA9tUkI70POsMmKPeZFUEC7RDUptn33Je6%2F5dJgDnN5jyDvRKoUG89S%2FlfjSXzjrGQMMtnwL&X-Amz-Signature=0c8ba3f0dde183b008da5e908abf1bddcfe02615af8bc787d10757f8c0680ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QAWVGG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCb60xnWxlGh2Tv910rCO0FohKcjice1DaB%2B4DZP1deAiBSKqQyZgQK4eKaivlL4uI92oi1tuyEukaIu8EDUtt94SqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFLe7Dn1ISw1zEFOGKtwDhRk%2F%2FGpoOP7h%2BZSmg93rFOj1NpQO0VIa88lCXV2aLFWguefmypHbjyH8XpVaE0%2B3eee9YvPczXi%2BEMj0L940c8jeC8CRPVqcYXHu4t%2BfMIqdH06L6GwTxnTPkHtnKyux4b5Qmj%2FTpgXL6Ax2sgMpyhEuCahIuUjF%2BnMZwn6h7%2B0NUV4w%2BpvrR8hyDsJoj3az3Y%2FqQ4Ve0%2FAgXy80OAu21AFaq6BF7MusDs3BIn5mxbaxOP%2FZhRwUtj%2BE3QEtMhIf3UprFnKv0zoKjUYE%2FDwCsLdCuVvmzDl1m89N5Z2qaM7b3xgD7%2BVlepWeJIWi2KzdV5avvwTN8T3nJJZeJNhp21xbjzrW0Sq5to7NYE0ChjFqsujAHkJYKluR5MY1S%2FOOPkDtUjG7vztwIaUXxSsMIrKtxpkFt1cXSGQ16Z0xI6PYNkE98I2HI5ife9q%2FQwZrq9EfOvxATmOOcHFXTkIYxjH%2FUNwHm8GzKFz3Ts3Ozxb2AmdwTzjnjaEdCR8ZjZYDIqKiwqZGchIyLpdrkcDPFDA6JnX7D%2FceZlI2%2BFYtSy9buqo35bKeYMGzqb6BJnaFc2WKJahmY8uzy28jgV9bszfbAtTIS%2BzfHFVRLZ8qhcip%2BEXEhDIuBvHB33kw7MiuvQY6pgG9IiYnmbJBIbGwAte1LtreReNPrPrMuqL3PYFoKzZ4t4bqQi7Jr%2FaMHoKzDnCTeZzdcAuH2FErKrm9gQCaLSIQUdU875Vla0hJYiO%2BsHCv3LHomJG9671Q0Qy%2BA2MBeXKd7Z1PCs1x%2BAnjv7hq7X9XsA9tUkI70POsMmKPeZFUEC7RDUptn33Je6%2F5dJgDnN5jyDvRKoUG89S%2FlfjSXzjrGQMMtnwL&X-Amz-Signature=c7ada12438fd1285d60503139bba2d92b9dff2223d089926b1f2098544de24ec&X-Amz-SignedHeaders=host&x-id=GetObject)
