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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGD2JAT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFuaXoH4e9TYL%2FstaBbbTLVPqC%2BZewvFAAHXugPJo3LXAiBbyQdoq0cZgC47WgeWEyWHiUQB3YOhQoT%2BeH3cGbE5qir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMiouuGFMF%2BdUUuZV6KtwDgtm8Es6pogamgxA%2BquJGnxqQcadZsk6i6Ap2GUExedMra%2B0Txt%2FEcnT2pzCUqDrqBzhcjT7n56zcVJuwjKJlNaEg%2B9n9Vb76ajjCtpO5vA2s3PGXLnszWLB2O3X3IcVL1YQhN8I3aPgmFthzyf7mGsecmoDrc1eSFx0y9mv1JCMCrulX20vImxBzFAbhWi12T%2Buv2mPrBDqpXN%2FsMieK79J9o7BcyhKbt3xV259futtZ1fWO3%2FCExsU2XjlhB7YPjpZhPOIIjG1dYU%2B7q66VmnOabVzzF9SiI%2Fs2Ka78d0BLU6qCw%2FCCpOHM4gNokrasGWKQwVQt%2B2mv%2F1j2IJUbx0R0gF%2B6tmciCpQK1sfgg5rgkqRBU6xm%2FFSqm4Vv0bVU7ksa9CfCqQ6BNWoz9hd7yLSaygelb0abWLaepMHf%2B3U7D%2BOcB%2B8qH1ka9JjB%2B2M9yHOu2GZthSKcVqktJYXWCioKzaUH0Kre1Q43rd9K%2FvS6Hz3TXM5qDmkZp6xFZCt9n11qzB5w%2Fo8v1sRE9PK4Zp1sAF1g%2F%2Fl7vW%2BSRgwe99zu91wUZcIhtio%2FaE6TT7fX3w%2BzRXTdvwASs4Pv5xJoyfFNNzWNu7%2FN3xQCdudQONYQN%2BvoJ26CfPCxK90wvuu0vgY6pgH%2FvWceISeyP8q4J5Z8a7bUSwq90sd4NLUN%2BCBsujP4SXAVI7tA%2FlfsCzmMVz4YHS4wu%2FWjZWGugzatA0mxzLmyXv8nnuWKnEyVZ2xC4kwzlWDko%2F5KXABjDnQQyrFt79dORFv67YHLgiKA7zVdbUAx1eKIkTSg7E0LL53IcYt%2BN6n1ZL8B9sa9CIDl3zU%2BJ0vbjwYXsJSYrSN1AOjo278uROp8cp02&X-Amz-Signature=c85a1082d1eb045ac790c2babd27d59fa8ca39e3a829eec89853d562adc16651&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGD2JAT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFuaXoH4e9TYL%2FstaBbbTLVPqC%2BZewvFAAHXugPJo3LXAiBbyQdoq0cZgC47WgeWEyWHiUQB3YOhQoT%2BeH3cGbE5qir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMiouuGFMF%2BdUUuZV6KtwDgtm8Es6pogamgxA%2BquJGnxqQcadZsk6i6Ap2GUExedMra%2B0Txt%2FEcnT2pzCUqDrqBzhcjT7n56zcVJuwjKJlNaEg%2B9n9Vb76ajjCtpO5vA2s3PGXLnszWLB2O3X3IcVL1YQhN8I3aPgmFthzyf7mGsecmoDrc1eSFx0y9mv1JCMCrulX20vImxBzFAbhWi12T%2Buv2mPrBDqpXN%2FsMieK79J9o7BcyhKbt3xV259futtZ1fWO3%2FCExsU2XjlhB7YPjpZhPOIIjG1dYU%2B7q66VmnOabVzzF9SiI%2Fs2Ka78d0BLU6qCw%2FCCpOHM4gNokrasGWKQwVQt%2B2mv%2F1j2IJUbx0R0gF%2B6tmciCpQK1sfgg5rgkqRBU6xm%2FFSqm4Vv0bVU7ksa9CfCqQ6BNWoz9hd7yLSaygelb0abWLaepMHf%2B3U7D%2BOcB%2B8qH1ka9JjB%2B2M9yHOu2GZthSKcVqktJYXWCioKzaUH0Kre1Q43rd9K%2FvS6Hz3TXM5qDmkZp6xFZCt9n11qzB5w%2Fo8v1sRE9PK4Zp1sAF1g%2F%2Fl7vW%2BSRgwe99zu91wUZcIhtio%2FaE6TT7fX3w%2BzRXTdvwASs4Pv5xJoyfFNNzWNu7%2FN3xQCdudQONYQN%2BvoJ26CfPCxK90wvuu0vgY6pgH%2FvWceISeyP8q4J5Z8a7bUSwq90sd4NLUN%2BCBsujP4SXAVI7tA%2FlfsCzmMVz4YHS4wu%2FWjZWGugzatA0mxzLmyXv8nnuWKnEyVZ2xC4kwzlWDko%2F5KXABjDnQQyrFt79dORFv67YHLgiKA7zVdbUAx1eKIkTSg7E0LL53IcYt%2BN6n1ZL8B9sa9CIDl3zU%2BJ0vbjwYXsJSYrSN1AOjo278uROp8cp02&X-Amz-Signature=a5f0e8ff2b63944137af6dee42b5bfef83b6b907e4b92e834077194f86e65990&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGD2JAT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFuaXoH4e9TYL%2FstaBbbTLVPqC%2BZewvFAAHXugPJo3LXAiBbyQdoq0cZgC47WgeWEyWHiUQB3YOhQoT%2BeH3cGbE5qir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMiouuGFMF%2BdUUuZV6KtwDgtm8Es6pogamgxA%2BquJGnxqQcadZsk6i6Ap2GUExedMra%2B0Txt%2FEcnT2pzCUqDrqBzhcjT7n56zcVJuwjKJlNaEg%2B9n9Vb76ajjCtpO5vA2s3PGXLnszWLB2O3X3IcVL1YQhN8I3aPgmFthzyf7mGsecmoDrc1eSFx0y9mv1JCMCrulX20vImxBzFAbhWi12T%2Buv2mPrBDqpXN%2FsMieK79J9o7BcyhKbt3xV259futtZ1fWO3%2FCExsU2XjlhB7YPjpZhPOIIjG1dYU%2B7q66VmnOabVzzF9SiI%2Fs2Ka78d0BLU6qCw%2FCCpOHM4gNokrasGWKQwVQt%2B2mv%2F1j2IJUbx0R0gF%2B6tmciCpQK1sfgg5rgkqRBU6xm%2FFSqm4Vv0bVU7ksa9CfCqQ6BNWoz9hd7yLSaygelb0abWLaepMHf%2B3U7D%2BOcB%2B8qH1ka9JjB%2B2M9yHOu2GZthSKcVqktJYXWCioKzaUH0Kre1Q43rd9K%2FvS6Hz3TXM5qDmkZp6xFZCt9n11qzB5w%2Fo8v1sRE9PK4Zp1sAF1g%2F%2Fl7vW%2BSRgwe99zu91wUZcIhtio%2FaE6TT7fX3w%2BzRXTdvwASs4Pv5xJoyfFNNzWNu7%2FN3xQCdudQONYQN%2BvoJ26CfPCxK90wvuu0vgY6pgH%2FvWceISeyP8q4J5Z8a7bUSwq90sd4NLUN%2BCBsujP4SXAVI7tA%2FlfsCzmMVz4YHS4wu%2FWjZWGugzatA0mxzLmyXv8nnuWKnEyVZ2xC4kwzlWDko%2F5KXABjDnQQyrFt79dORFv67YHLgiKA7zVdbUAx1eKIkTSg7E0LL53IcYt%2BN6n1ZL8B9sa9CIDl3zU%2BJ0vbjwYXsJSYrSN1AOjo278uROp8cp02&X-Amz-Signature=fdd4993ace93bfe3062a9408a0ac689ed62fb84ba5bc53b582bc1b26bb3d00f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGD2JAT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFuaXoH4e9TYL%2FstaBbbTLVPqC%2BZewvFAAHXugPJo3LXAiBbyQdoq0cZgC47WgeWEyWHiUQB3YOhQoT%2BeH3cGbE5qir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMiouuGFMF%2BdUUuZV6KtwDgtm8Es6pogamgxA%2BquJGnxqQcadZsk6i6Ap2GUExedMra%2B0Txt%2FEcnT2pzCUqDrqBzhcjT7n56zcVJuwjKJlNaEg%2B9n9Vb76ajjCtpO5vA2s3PGXLnszWLB2O3X3IcVL1YQhN8I3aPgmFthzyf7mGsecmoDrc1eSFx0y9mv1JCMCrulX20vImxBzFAbhWi12T%2Buv2mPrBDqpXN%2FsMieK79J9o7BcyhKbt3xV259futtZ1fWO3%2FCExsU2XjlhB7YPjpZhPOIIjG1dYU%2B7q66VmnOabVzzF9SiI%2Fs2Ka78d0BLU6qCw%2FCCpOHM4gNokrasGWKQwVQt%2B2mv%2F1j2IJUbx0R0gF%2B6tmciCpQK1sfgg5rgkqRBU6xm%2FFSqm4Vv0bVU7ksa9CfCqQ6BNWoz9hd7yLSaygelb0abWLaepMHf%2B3U7D%2BOcB%2B8qH1ka9JjB%2B2M9yHOu2GZthSKcVqktJYXWCioKzaUH0Kre1Q43rd9K%2FvS6Hz3TXM5qDmkZp6xFZCt9n11qzB5w%2Fo8v1sRE9PK4Zp1sAF1g%2F%2Fl7vW%2BSRgwe99zu91wUZcIhtio%2FaE6TT7fX3w%2BzRXTdvwASs4Pv5xJoyfFNNzWNu7%2FN3xQCdudQONYQN%2BvoJ26CfPCxK90wvuu0vgY6pgH%2FvWceISeyP8q4J5Z8a7bUSwq90sd4NLUN%2BCBsujP4SXAVI7tA%2FlfsCzmMVz4YHS4wu%2FWjZWGugzatA0mxzLmyXv8nnuWKnEyVZ2xC4kwzlWDko%2F5KXABjDnQQyrFt79dORFv67YHLgiKA7zVdbUAx1eKIkTSg7E0LL53IcYt%2BN6n1ZL8B9sa9CIDl3zU%2BJ0vbjwYXsJSYrSN1AOjo278uROp8cp02&X-Amz-Signature=b05a54fb1d94b95630612241c59f5bdc8870537f51d1a3d1c141ead8e2413f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGD2JAT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFuaXoH4e9TYL%2FstaBbbTLVPqC%2BZewvFAAHXugPJo3LXAiBbyQdoq0cZgC47WgeWEyWHiUQB3YOhQoT%2BeH3cGbE5qir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMiouuGFMF%2BdUUuZV6KtwDgtm8Es6pogamgxA%2BquJGnxqQcadZsk6i6Ap2GUExedMra%2B0Txt%2FEcnT2pzCUqDrqBzhcjT7n56zcVJuwjKJlNaEg%2B9n9Vb76ajjCtpO5vA2s3PGXLnszWLB2O3X3IcVL1YQhN8I3aPgmFthzyf7mGsecmoDrc1eSFx0y9mv1JCMCrulX20vImxBzFAbhWi12T%2Buv2mPrBDqpXN%2FsMieK79J9o7BcyhKbt3xV259futtZ1fWO3%2FCExsU2XjlhB7YPjpZhPOIIjG1dYU%2B7q66VmnOabVzzF9SiI%2Fs2Ka78d0BLU6qCw%2FCCpOHM4gNokrasGWKQwVQt%2B2mv%2F1j2IJUbx0R0gF%2B6tmciCpQK1sfgg5rgkqRBU6xm%2FFSqm4Vv0bVU7ksa9CfCqQ6BNWoz9hd7yLSaygelb0abWLaepMHf%2B3U7D%2BOcB%2B8qH1ka9JjB%2B2M9yHOu2GZthSKcVqktJYXWCioKzaUH0Kre1Q43rd9K%2FvS6Hz3TXM5qDmkZp6xFZCt9n11qzB5w%2Fo8v1sRE9PK4Zp1sAF1g%2F%2Fl7vW%2BSRgwe99zu91wUZcIhtio%2FaE6TT7fX3w%2BzRXTdvwASs4Pv5xJoyfFNNzWNu7%2FN3xQCdudQONYQN%2BvoJ26CfPCxK90wvuu0vgY6pgH%2FvWceISeyP8q4J5Z8a7bUSwq90sd4NLUN%2BCBsujP4SXAVI7tA%2FlfsCzmMVz4YHS4wu%2FWjZWGugzatA0mxzLmyXv8nnuWKnEyVZ2xC4kwzlWDko%2F5KXABjDnQQyrFt79dORFv67YHLgiKA7zVdbUAx1eKIkTSg7E0LL53IcYt%2BN6n1ZL8B9sa9CIDl3zU%2BJ0vbjwYXsJSYrSN1AOjo278uROp8cp02&X-Amz-Signature=c672f3be1d681c33671b35520e5f11e747f7781aa18a20e4378e975bf05ea288&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGD2JAT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFuaXoH4e9TYL%2FstaBbbTLVPqC%2BZewvFAAHXugPJo3LXAiBbyQdoq0cZgC47WgeWEyWHiUQB3YOhQoT%2BeH3cGbE5qir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMiouuGFMF%2BdUUuZV6KtwDgtm8Es6pogamgxA%2BquJGnxqQcadZsk6i6Ap2GUExedMra%2B0Txt%2FEcnT2pzCUqDrqBzhcjT7n56zcVJuwjKJlNaEg%2B9n9Vb76ajjCtpO5vA2s3PGXLnszWLB2O3X3IcVL1YQhN8I3aPgmFthzyf7mGsecmoDrc1eSFx0y9mv1JCMCrulX20vImxBzFAbhWi12T%2Buv2mPrBDqpXN%2FsMieK79J9o7BcyhKbt3xV259futtZ1fWO3%2FCExsU2XjlhB7YPjpZhPOIIjG1dYU%2B7q66VmnOabVzzF9SiI%2Fs2Ka78d0BLU6qCw%2FCCpOHM4gNokrasGWKQwVQt%2B2mv%2F1j2IJUbx0R0gF%2B6tmciCpQK1sfgg5rgkqRBU6xm%2FFSqm4Vv0bVU7ksa9CfCqQ6BNWoz9hd7yLSaygelb0abWLaepMHf%2B3U7D%2BOcB%2B8qH1ka9JjB%2B2M9yHOu2GZthSKcVqktJYXWCioKzaUH0Kre1Q43rd9K%2FvS6Hz3TXM5qDmkZp6xFZCt9n11qzB5w%2Fo8v1sRE9PK4Zp1sAF1g%2F%2Fl7vW%2BSRgwe99zu91wUZcIhtio%2FaE6TT7fX3w%2BzRXTdvwASs4Pv5xJoyfFNNzWNu7%2FN3xQCdudQONYQN%2BvoJ26CfPCxK90wvuu0vgY6pgH%2FvWceISeyP8q4J5Z8a7bUSwq90sd4NLUN%2BCBsujP4SXAVI7tA%2FlfsCzmMVz4YHS4wu%2FWjZWGugzatA0mxzLmyXv8nnuWKnEyVZ2xC4kwzlWDko%2F5KXABjDnQQyrFt79dORFv67YHLgiKA7zVdbUAx1eKIkTSg7E0LL53IcYt%2BN6n1ZL8B9sa9CIDl3zU%2BJ0vbjwYXsJSYrSN1AOjo278uROp8cp02&X-Amz-Signature=8e0a24886aa2f7a6aa5935d256c383b5fafacc9981d8844b99652bb24862fe10&X-Amz-SignedHeaders=host&x-id=GetObject)
