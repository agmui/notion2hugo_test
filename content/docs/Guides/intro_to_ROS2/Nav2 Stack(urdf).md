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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYOZGWTZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCBSRMvhpkpDGhvw8PGl26UhQfBAF3eoR4Z0tV%2FUWgOzwIhAKAI5ciJKsh6roG72Sd6T7tgUZssNi50WHGWSf4Rn2%2B%2BKv8DCHwQABoMNjM3NDIzMTgzODA1IgxT6s65PHPdmGGfWvQq3AORaXflzWUn3L%2F5Vo7%2BySi3tAFRPS%2FT4BJxDYPtCXSnB%2Fbvlf8hpUveBYqNWfUZPWCrN94Spq9Pg6gKtt1XyM%2Fptmp0ls1DUl40tjLAf%2Bzgr5V3svgtqhLpxwc1l08wsrDZphw0wGxPSuOsVDgCy9vemA01S%2FmKAjfiUdGdi5Lngz0N1aJ9tAydEh1EPASQDmQeeB36c6jDa6IBYIDatKpIkCqcxDYXjwE7Z62%2Br8%2FcPB71vxCJ3bmRAcWL%2FYlFEk9ORkLF0H1f9FAILmetwcJCtgo7%2F5%2BsGs3thkoUDdojHjgAmdDnYdfhJIn6aoAy1D7Ler6jPV2YzEt1ccLMHoemAtEiXHR%2BWdx5VHk7jt88Dkcn7Ln9D%2FBoLK38tE6jSV%2FqxALYcgKcA5CTb4GtAVTwwnXF04xaUa2P38ZuaFhqRlbqy%2FlIkRwXIzdnEaekH6PJ3GA3hQ0lkvzxhIrlu0mSjHQpdgAoeMNORGzZR29EB2Eddz%2FZYRUhwOiO0Fc5gtyGQbZTIwAgDJf828%2F7Qcz3TPrgcfcOUmBChC8kwFaCHGfnzQN8ddHEewY9WNJkFg8H3yTk7%2BMIopooCrzYLR2enVuXIXG1U%2BLdCBzSvZhwP3PHWMo2DHTzB1qQ6zCO8YK%2BBjqkAb2%2B7XrD32RKYnkC9bj2ikXnhHcJ7IX1dp%2FiongiUZ02QAygnAtYJwoHmyaTzIQzMLCCHKZlEdYld2EKsTynwOz4ub14bDP8tnVw%2FG%2BUJo95lwaLcbHkPa5b0i6WKO%2BhxljTXJvFXim7Bdf3hDxLITnRmsDbSkVIXK3tl07n33lSBf9xJVRDfZXU%2F1RWEUsjB0BEo2e0nxpRSzCehISLTOZQstg9&X-Amz-Signature=3865d725b0791a69abf67321a9467cb06615e1660dfa62cde887e8ec45d242e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYOZGWTZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCBSRMvhpkpDGhvw8PGl26UhQfBAF3eoR4Z0tV%2FUWgOzwIhAKAI5ciJKsh6roG72Sd6T7tgUZssNi50WHGWSf4Rn2%2B%2BKv8DCHwQABoMNjM3NDIzMTgzODA1IgxT6s65PHPdmGGfWvQq3AORaXflzWUn3L%2F5Vo7%2BySi3tAFRPS%2FT4BJxDYPtCXSnB%2Fbvlf8hpUveBYqNWfUZPWCrN94Spq9Pg6gKtt1XyM%2Fptmp0ls1DUl40tjLAf%2Bzgr5V3svgtqhLpxwc1l08wsrDZphw0wGxPSuOsVDgCy9vemA01S%2FmKAjfiUdGdi5Lngz0N1aJ9tAydEh1EPASQDmQeeB36c6jDa6IBYIDatKpIkCqcxDYXjwE7Z62%2Br8%2FcPB71vxCJ3bmRAcWL%2FYlFEk9ORkLF0H1f9FAILmetwcJCtgo7%2F5%2BsGs3thkoUDdojHjgAmdDnYdfhJIn6aoAy1D7Ler6jPV2YzEt1ccLMHoemAtEiXHR%2BWdx5VHk7jt88Dkcn7Ln9D%2FBoLK38tE6jSV%2FqxALYcgKcA5CTb4GtAVTwwnXF04xaUa2P38ZuaFhqRlbqy%2FlIkRwXIzdnEaekH6PJ3GA3hQ0lkvzxhIrlu0mSjHQpdgAoeMNORGzZR29EB2Eddz%2FZYRUhwOiO0Fc5gtyGQbZTIwAgDJf828%2F7Qcz3TPrgcfcOUmBChC8kwFaCHGfnzQN8ddHEewY9WNJkFg8H3yTk7%2BMIopooCrzYLR2enVuXIXG1U%2BLdCBzSvZhwP3PHWMo2DHTzB1qQ6zCO8YK%2BBjqkAb2%2B7XrD32RKYnkC9bj2ikXnhHcJ7IX1dp%2FiongiUZ02QAygnAtYJwoHmyaTzIQzMLCCHKZlEdYld2EKsTynwOz4ub14bDP8tnVw%2FG%2BUJo95lwaLcbHkPa5b0i6WKO%2BhxljTXJvFXim7Bdf3hDxLITnRmsDbSkVIXK3tl07n33lSBf9xJVRDfZXU%2F1RWEUsjB0BEo2e0nxpRSzCehISLTOZQstg9&X-Amz-Signature=cb6d28f5e83fad8f08b49c91719447dc8b82a6d04efe46f8ac0f873a12016bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYOZGWTZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCBSRMvhpkpDGhvw8PGl26UhQfBAF3eoR4Z0tV%2FUWgOzwIhAKAI5ciJKsh6roG72Sd6T7tgUZssNi50WHGWSf4Rn2%2B%2BKv8DCHwQABoMNjM3NDIzMTgzODA1IgxT6s65PHPdmGGfWvQq3AORaXflzWUn3L%2F5Vo7%2BySi3tAFRPS%2FT4BJxDYPtCXSnB%2Fbvlf8hpUveBYqNWfUZPWCrN94Spq9Pg6gKtt1XyM%2Fptmp0ls1DUl40tjLAf%2Bzgr5V3svgtqhLpxwc1l08wsrDZphw0wGxPSuOsVDgCy9vemA01S%2FmKAjfiUdGdi5Lngz0N1aJ9tAydEh1EPASQDmQeeB36c6jDa6IBYIDatKpIkCqcxDYXjwE7Z62%2Br8%2FcPB71vxCJ3bmRAcWL%2FYlFEk9ORkLF0H1f9FAILmetwcJCtgo7%2F5%2BsGs3thkoUDdojHjgAmdDnYdfhJIn6aoAy1D7Ler6jPV2YzEt1ccLMHoemAtEiXHR%2BWdx5VHk7jt88Dkcn7Ln9D%2FBoLK38tE6jSV%2FqxALYcgKcA5CTb4GtAVTwwnXF04xaUa2P38ZuaFhqRlbqy%2FlIkRwXIzdnEaekH6PJ3GA3hQ0lkvzxhIrlu0mSjHQpdgAoeMNORGzZR29EB2Eddz%2FZYRUhwOiO0Fc5gtyGQbZTIwAgDJf828%2F7Qcz3TPrgcfcOUmBChC8kwFaCHGfnzQN8ddHEewY9WNJkFg8H3yTk7%2BMIopooCrzYLR2enVuXIXG1U%2BLdCBzSvZhwP3PHWMo2DHTzB1qQ6zCO8YK%2BBjqkAb2%2B7XrD32RKYnkC9bj2ikXnhHcJ7IX1dp%2FiongiUZ02QAygnAtYJwoHmyaTzIQzMLCCHKZlEdYld2EKsTynwOz4ub14bDP8tnVw%2FG%2BUJo95lwaLcbHkPa5b0i6WKO%2BhxljTXJvFXim7Bdf3hDxLITnRmsDbSkVIXK3tl07n33lSBf9xJVRDfZXU%2F1RWEUsjB0BEo2e0nxpRSzCehISLTOZQstg9&X-Amz-Signature=c2fede24c89d61804f65e4ca6c656ea19950b7b314b64853bc14be47eab3d88d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYOZGWTZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCBSRMvhpkpDGhvw8PGl26UhQfBAF3eoR4Z0tV%2FUWgOzwIhAKAI5ciJKsh6roG72Sd6T7tgUZssNi50WHGWSf4Rn2%2B%2BKv8DCHwQABoMNjM3NDIzMTgzODA1IgxT6s65PHPdmGGfWvQq3AORaXflzWUn3L%2F5Vo7%2BySi3tAFRPS%2FT4BJxDYPtCXSnB%2Fbvlf8hpUveBYqNWfUZPWCrN94Spq9Pg6gKtt1XyM%2Fptmp0ls1DUl40tjLAf%2Bzgr5V3svgtqhLpxwc1l08wsrDZphw0wGxPSuOsVDgCy9vemA01S%2FmKAjfiUdGdi5Lngz0N1aJ9tAydEh1EPASQDmQeeB36c6jDa6IBYIDatKpIkCqcxDYXjwE7Z62%2Br8%2FcPB71vxCJ3bmRAcWL%2FYlFEk9ORkLF0H1f9FAILmetwcJCtgo7%2F5%2BsGs3thkoUDdojHjgAmdDnYdfhJIn6aoAy1D7Ler6jPV2YzEt1ccLMHoemAtEiXHR%2BWdx5VHk7jt88Dkcn7Ln9D%2FBoLK38tE6jSV%2FqxALYcgKcA5CTb4GtAVTwwnXF04xaUa2P38ZuaFhqRlbqy%2FlIkRwXIzdnEaekH6PJ3GA3hQ0lkvzxhIrlu0mSjHQpdgAoeMNORGzZR29EB2Eddz%2FZYRUhwOiO0Fc5gtyGQbZTIwAgDJf828%2F7Qcz3TPrgcfcOUmBChC8kwFaCHGfnzQN8ddHEewY9WNJkFg8H3yTk7%2BMIopooCrzYLR2enVuXIXG1U%2BLdCBzSvZhwP3PHWMo2DHTzB1qQ6zCO8YK%2BBjqkAb2%2B7XrD32RKYnkC9bj2ikXnhHcJ7IX1dp%2FiongiUZ02QAygnAtYJwoHmyaTzIQzMLCCHKZlEdYld2EKsTynwOz4ub14bDP8tnVw%2FG%2BUJo95lwaLcbHkPa5b0i6WKO%2BhxljTXJvFXim7Bdf3hDxLITnRmsDbSkVIXK3tl07n33lSBf9xJVRDfZXU%2F1RWEUsjB0BEo2e0nxpRSzCehISLTOZQstg9&X-Amz-Signature=05e6968bf793cd223208303653e75dd7b597100d7329586d13578cb1f8ab844f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYOZGWTZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCBSRMvhpkpDGhvw8PGl26UhQfBAF3eoR4Z0tV%2FUWgOzwIhAKAI5ciJKsh6roG72Sd6T7tgUZssNi50WHGWSf4Rn2%2B%2BKv8DCHwQABoMNjM3NDIzMTgzODA1IgxT6s65PHPdmGGfWvQq3AORaXflzWUn3L%2F5Vo7%2BySi3tAFRPS%2FT4BJxDYPtCXSnB%2Fbvlf8hpUveBYqNWfUZPWCrN94Spq9Pg6gKtt1XyM%2Fptmp0ls1DUl40tjLAf%2Bzgr5V3svgtqhLpxwc1l08wsrDZphw0wGxPSuOsVDgCy9vemA01S%2FmKAjfiUdGdi5Lngz0N1aJ9tAydEh1EPASQDmQeeB36c6jDa6IBYIDatKpIkCqcxDYXjwE7Z62%2Br8%2FcPB71vxCJ3bmRAcWL%2FYlFEk9ORkLF0H1f9FAILmetwcJCtgo7%2F5%2BsGs3thkoUDdojHjgAmdDnYdfhJIn6aoAy1D7Ler6jPV2YzEt1ccLMHoemAtEiXHR%2BWdx5VHk7jt88Dkcn7Ln9D%2FBoLK38tE6jSV%2FqxALYcgKcA5CTb4GtAVTwwnXF04xaUa2P38ZuaFhqRlbqy%2FlIkRwXIzdnEaekH6PJ3GA3hQ0lkvzxhIrlu0mSjHQpdgAoeMNORGzZR29EB2Eddz%2FZYRUhwOiO0Fc5gtyGQbZTIwAgDJf828%2F7Qcz3TPrgcfcOUmBChC8kwFaCHGfnzQN8ddHEewY9WNJkFg8H3yTk7%2BMIopooCrzYLR2enVuXIXG1U%2BLdCBzSvZhwP3PHWMo2DHTzB1qQ6zCO8YK%2BBjqkAb2%2B7XrD32RKYnkC9bj2ikXnhHcJ7IX1dp%2FiongiUZ02QAygnAtYJwoHmyaTzIQzMLCCHKZlEdYld2EKsTynwOz4ub14bDP8tnVw%2FG%2BUJo95lwaLcbHkPa5b0i6WKO%2BhxljTXJvFXim7Bdf3hDxLITnRmsDbSkVIXK3tl07n33lSBf9xJVRDfZXU%2F1RWEUsjB0BEo2e0nxpRSzCehISLTOZQstg9&X-Amz-Signature=ba81d212c028f32504ce0a74fdb77d44d82833a3b2aca21d40aecdde449a8bab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYOZGWTZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCBSRMvhpkpDGhvw8PGl26UhQfBAF3eoR4Z0tV%2FUWgOzwIhAKAI5ciJKsh6roG72Sd6T7tgUZssNi50WHGWSf4Rn2%2B%2BKv8DCHwQABoMNjM3NDIzMTgzODA1IgxT6s65PHPdmGGfWvQq3AORaXflzWUn3L%2F5Vo7%2BySi3tAFRPS%2FT4BJxDYPtCXSnB%2Fbvlf8hpUveBYqNWfUZPWCrN94Spq9Pg6gKtt1XyM%2Fptmp0ls1DUl40tjLAf%2Bzgr5V3svgtqhLpxwc1l08wsrDZphw0wGxPSuOsVDgCy9vemA01S%2FmKAjfiUdGdi5Lngz0N1aJ9tAydEh1EPASQDmQeeB36c6jDa6IBYIDatKpIkCqcxDYXjwE7Z62%2Br8%2FcPB71vxCJ3bmRAcWL%2FYlFEk9ORkLF0H1f9FAILmetwcJCtgo7%2F5%2BsGs3thkoUDdojHjgAmdDnYdfhJIn6aoAy1D7Ler6jPV2YzEt1ccLMHoemAtEiXHR%2BWdx5VHk7jt88Dkcn7Ln9D%2FBoLK38tE6jSV%2FqxALYcgKcA5CTb4GtAVTwwnXF04xaUa2P38ZuaFhqRlbqy%2FlIkRwXIzdnEaekH6PJ3GA3hQ0lkvzxhIrlu0mSjHQpdgAoeMNORGzZR29EB2Eddz%2FZYRUhwOiO0Fc5gtyGQbZTIwAgDJf828%2F7Qcz3TPrgcfcOUmBChC8kwFaCHGfnzQN8ddHEewY9WNJkFg8H3yTk7%2BMIopooCrzYLR2enVuXIXG1U%2BLdCBzSvZhwP3PHWMo2DHTzB1qQ6zCO8YK%2BBjqkAb2%2B7XrD32RKYnkC9bj2ikXnhHcJ7IX1dp%2FiongiUZ02QAygnAtYJwoHmyaTzIQzMLCCHKZlEdYld2EKsTynwOz4ub14bDP8tnVw%2FG%2BUJo95lwaLcbHkPa5b0i6WKO%2BhxljTXJvFXim7Bdf3hDxLITnRmsDbSkVIXK3tl07n33lSBf9xJVRDfZXU%2F1RWEUsjB0BEo2e0nxpRSzCehISLTOZQstg9&X-Amz-Signature=3bbc54238b8af485838171b981980d38728bf9a9a3435da5a219fe588972a6cb&X-Amz-SignedHeaders=host&x-id=GetObject)
