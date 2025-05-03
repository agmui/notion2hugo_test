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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDBUP2VM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCZDwpVsp48EqP4xcr%2FKdjjLZLg%2B%2BpJih3UPcYix8biBgIhALWUUx6ox553g8lZiiB0PMYpWbu6RcA80oU4DGnZWL8AKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Dd4ahe0ocpWN8DUq3AOxARg8adJUyqgna4FI%2FH4uWC3LWfMAjWV7pez2wbaI6I2uF9003ck%2Flpx3GP5wjqT5Td9kOQiMMF6Dm%2BbrRNmJo1gXFIG9asYda1AVhbbHAm0hjZIb5BaeZ259UPzKI2HRGut259I0s557O06Suy5uuGIFANeza6sqNu745QKEj7jPAXVpb3F%2F1svZC%2BQtq06WIWm1PXevwh2Ki3ck%2B5G9lMqup8uhQfPjMWyQjRp%2FmgKBWkETBfjQoK6gJ1kaSKvge5I3sjeiyYyBY8%2FNVpOjib%2B8yUN42gK4LwHvOQ6dalGI9Rqy2Xhyl5dbPntE9GOazkp6bLxNqEPkilcx2Me4bZOi4ZdvGHfgJK2PqdLTEHMLvV2%2BXHaNwlzRZYnAPjhKKXQO69WSGfsefoUDF5gaJSe6KXBoC%2BDh45LCR%2F9Mm86dw65%2BihdaGZ8R9YD6j%2FiPL01GV2C%2F0EIeGcHiB8TRFZSyhQMjwBf7Qb18xGqg3G3w1VAgQsfGwUlQGTPbtAaiNtQYrVGc7bLfAaobmjCW37PJ2A%2BzS5IUTX2JbgmKH9HBymEj6%2BFcarW2PlurQMoStjw5IKlbHAI5%2Bll8hNPuLFhHA0moQEAK4bTliqd5myiK5bUxbMj85%2Bc5WjCGh9bABjqkAaT6DBD1uqEV3ZBZWfzIKGjiGOLajMPqmuQJZ9YTB0%2BIaCwfDP%2FlXuufrVmdSvGe%2FT%2BUOuJKgBmn379NrGT2Aa9dK%2FbLZ8qFa84PPCtgO%2BPKLmMYAmUrveeMmSNgKD1I6EvFiFyOphmQ%2BuHGhSI7G3fzu1pvVNv%2BDEyZ3X9udTifQKMAbe%2FLTQbR4BW9IaIFA%2F2Ate%2FSCAKosSuGXsun%2FVWbQtB5&X-Amz-Signature=c2cc3a5c632ae9f4febd8e3a540036a8bdf322a27dfc53c05779343749cac2e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDBUP2VM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCZDwpVsp48EqP4xcr%2FKdjjLZLg%2B%2BpJih3UPcYix8biBgIhALWUUx6ox553g8lZiiB0PMYpWbu6RcA80oU4DGnZWL8AKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Dd4ahe0ocpWN8DUq3AOxARg8adJUyqgna4FI%2FH4uWC3LWfMAjWV7pez2wbaI6I2uF9003ck%2Flpx3GP5wjqT5Td9kOQiMMF6Dm%2BbrRNmJo1gXFIG9asYda1AVhbbHAm0hjZIb5BaeZ259UPzKI2HRGut259I0s557O06Suy5uuGIFANeza6sqNu745QKEj7jPAXVpb3F%2F1svZC%2BQtq06WIWm1PXevwh2Ki3ck%2B5G9lMqup8uhQfPjMWyQjRp%2FmgKBWkETBfjQoK6gJ1kaSKvge5I3sjeiyYyBY8%2FNVpOjib%2B8yUN42gK4LwHvOQ6dalGI9Rqy2Xhyl5dbPntE9GOazkp6bLxNqEPkilcx2Me4bZOi4ZdvGHfgJK2PqdLTEHMLvV2%2BXHaNwlzRZYnAPjhKKXQO69WSGfsefoUDF5gaJSe6KXBoC%2BDh45LCR%2F9Mm86dw65%2BihdaGZ8R9YD6j%2FiPL01GV2C%2F0EIeGcHiB8TRFZSyhQMjwBf7Qb18xGqg3G3w1VAgQsfGwUlQGTPbtAaiNtQYrVGc7bLfAaobmjCW37PJ2A%2BzS5IUTX2JbgmKH9HBymEj6%2BFcarW2PlurQMoStjw5IKlbHAI5%2Bll8hNPuLFhHA0moQEAK4bTliqd5myiK5bUxbMj85%2Bc5WjCGh9bABjqkAaT6DBD1uqEV3ZBZWfzIKGjiGOLajMPqmuQJZ9YTB0%2BIaCwfDP%2FlXuufrVmdSvGe%2FT%2BUOuJKgBmn379NrGT2Aa9dK%2FbLZ8qFa84PPCtgO%2BPKLmMYAmUrveeMmSNgKD1I6EvFiFyOphmQ%2BuHGhSI7G3fzu1pvVNv%2BDEyZ3X9udTifQKMAbe%2FLTQbR4BW9IaIFA%2F2Ate%2FSCAKosSuGXsun%2FVWbQtB5&X-Amz-Signature=5fc6036a7666d1fed6d56a166f984dce69d9ee8e54a7d072df17e3a8e3f1c088&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDBUP2VM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCZDwpVsp48EqP4xcr%2FKdjjLZLg%2B%2BpJih3UPcYix8biBgIhALWUUx6ox553g8lZiiB0PMYpWbu6RcA80oU4DGnZWL8AKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Dd4ahe0ocpWN8DUq3AOxARg8adJUyqgna4FI%2FH4uWC3LWfMAjWV7pez2wbaI6I2uF9003ck%2Flpx3GP5wjqT5Td9kOQiMMF6Dm%2BbrRNmJo1gXFIG9asYda1AVhbbHAm0hjZIb5BaeZ259UPzKI2HRGut259I0s557O06Suy5uuGIFANeza6sqNu745QKEj7jPAXVpb3F%2F1svZC%2BQtq06WIWm1PXevwh2Ki3ck%2B5G9lMqup8uhQfPjMWyQjRp%2FmgKBWkETBfjQoK6gJ1kaSKvge5I3sjeiyYyBY8%2FNVpOjib%2B8yUN42gK4LwHvOQ6dalGI9Rqy2Xhyl5dbPntE9GOazkp6bLxNqEPkilcx2Me4bZOi4ZdvGHfgJK2PqdLTEHMLvV2%2BXHaNwlzRZYnAPjhKKXQO69WSGfsefoUDF5gaJSe6KXBoC%2BDh45LCR%2F9Mm86dw65%2BihdaGZ8R9YD6j%2FiPL01GV2C%2F0EIeGcHiB8TRFZSyhQMjwBf7Qb18xGqg3G3w1VAgQsfGwUlQGTPbtAaiNtQYrVGc7bLfAaobmjCW37PJ2A%2BzS5IUTX2JbgmKH9HBymEj6%2BFcarW2PlurQMoStjw5IKlbHAI5%2Bll8hNPuLFhHA0moQEAK4bTliqd5myiK5bUxbMj85%2Bc5WjCGh9bABjqkAaT6DBD1uqEV3ZBZWfzIKGjiGOLajMPqmuQJZ9YTB0%2BIaCwfDP%2FlXuufrVmdSvGe%2FT%2BUOuJKgBmn379NrGT2Aa9dK%2FbLZ8qFa84PPCtgO%2BPKLmMYAmUrveeMmSNgKD1I6EvFiFyOphmQ%2BuHGhSI7G3fzu1pvVNv%2BDEyZ3X9udTifQKMAbe%2FLTQbR4BW9IaIFA%2F2Ate%2FSCAKosSuGXsun%2FVWbQtB5&X-Amz-Signature=720ff0684c044f150c1b9dae13450ff3049e0b40231faca5d02efd74445efafd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDBUP2VM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCZDwpVsp48EqP4xcr%2FKdjjLZLg%2B%2BpJih3UPcYix8biBgIhALWUUx6ox553g8lZiiB0PMYpWbu6RcA80oU4DGnZWL8AKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Dd4ahe0ocpWN8DUq3AOxARg8adJUyqgna4FI%2FH4uWC3LWfMAjWV7pez2wbaI6I2uF9003ck%2Flpx3GP5wjqT5Td9kOQiMMF6Dm%2BbrRNmJo1gXFIG9asYda1AVhbbHAm0hjZIb5BaeZ259UPzKI2HRGut259I0s557O06Suy5uuGIFANeza6sqNu745QKEj7jPAXVpb3F%2F1svZC%2BQtq06WIWm1PXevwh2Ki3ck%2B5G9lMqup8uhQfPjMWyQjRp%2FmgKBWkETBfjQoK6gJ1kaSKvge5I3sjeiyYyBY8%2FNVpOjib%2B8yUN42gK4LwHvOQ6dalGI9Rqy2Xhyl5dbPntE9GOazkp6bLxNqEPkilcx2Me4bZOi4ZdvGHfgJK2PqdLTEHMLvV2%2BXHaNwlzRZYnAPjhKKXQO69WSGfsefoUDF5gaJSe6KXBoC%2BDh45LCR%2F9Mm86dw65%2BihdaGZ8R9YD6j%2FiPL01GV2C%2F0EIeGcHiB8TRFZSyhQMjwBf7Qb18xGqg3G3w1VAgQsfGwUlQGTPbtAaiNtQYrVGc7bLfAaobmjCW37PJ2A%2BzS5IUTX2JbgmKH9HBymEj6%2BFcarW2PlurQMoStjw5IKlbHAI5%2Bll8hNPuLFhHA0moQEAK4bTliqd5myiK5bUxbMj85%2Bc5WjCGh9bABjqkAaT6DBD1uqEV3ZBZWfzIKGjiGOLajMPqmuQJZ9YTB0%2BIaCwfDP%2FlXuufrVmdSvGe%2FT%2BUOuJKgBmn379NrGT2Aa9dK%2FbLZ8qFa84PPCtgO%2BPKLmMYAmUrveeMmSNgKD1I6EvFiFyOphmQ%2BuHGhSI7G3fzu1pvVNv%2BDEyZ3X9udTifQKMAbe%2FLTQbR4BW9IaIFA%2F2Ate%2FSCAKosSuGXsun%2FVWbQtB5&X-Amz-Signature=a86ff953cb91636674f64467c3844140f2176dcf9f21e279743ac198683b336e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDBUP2VM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCZDwpVsp48EqP4xcr%2FKdjjLZLg%2B%2BpJih3UPcYix8biBgIhALWUUx6ox553g8lZiiB0PMYpWbu6RcA80oU4DGnZWL8AKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Dd4ahe0ocpWN8DUq3AOxARg8adJUyqgna4FI%2FH4uWC3LWfMAjWV7pez2wbaI6I2uF9003ck%2Flpx3GP5wjqT5Td9kOQiMMF6Dm%2BbrRNmJo1gXFIG9asYda1AVhbbHAm0hjZIb5BaeZ259UPzKI2HRGut259I0s557O06Suy5uuGIFANeza6sqNu745QKEj7jPAXVpb3F%2F1svZC%2BQtq06WIWm1PXevwh2Ki3ck%2B5G9lMqup8uhQfPjMWyQjRp%2FmgKBWkETBfjQoK6gJ1kaSKvge5I3sjeiyYyBY8%2FNVpOjib%2B8yUN42gK4LwHvOQ6dalGI9Rqy2Xhyl5dbPntE9GOazkp6bLxNqEPkilcx2Me4bZOi4ZdvGHfgJK2PqdLTEHMLvV2%2BXHaNwlzRZYnAPjhKKXQO69WSGfsefoUDF5gaJSe6KXBoC%2BDh45LCR%2F9Mm86dw65%2BihdaGZ8R9YD6j%2FiPL01GV2C%2F0EIeGcHiB8TRFZSyhQMjwBf7Qb18xGqg3G3w1VAgQsfGwUlQGTPbtAaiNtQYrVGc7bLfAaobmjCW37PJ2A%2BzS5IUTX2JbgmKH9HBymEj6%2BFcarW2PlurQMoStjw5IKlbHAI5%2Bll8hNPuLFhHA0moQEAK4bTliqd5myiK5bUxbMj85%2Bc5WjCGh9bABjqkAaT6DBD1uqEV3ZBZWfzIKGjiGOLajMPqmuQJZ9YTB0%2BIaCwfDP%2FlXuufrVmdSvGe%2FT%2BUOuJKgBmn379NrGT2Aa9dK%2FbLZ8qFa84PPCtgO%2BPKLmMYAmUrveeMmSNgKD1I6EvFiFyOphmQ%2BuHGhSI7G3fzu1pvVNv%2BDEyZ3X9udTifQKMAbe%2FLTQbR4BW9IaIFA%2F2Ate%2FSCAKosSuGXsun%2FVWbQtB5&X-Amz-Signature=dccf9d98120c01a866575fab7300958381d4de69dcb4ca95852a2c5bf1862cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDBUP2VM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCZDwpVsp48EqP4xcr%2FKdjjLZLg%2B%2BpJih3UPcYix8biBgIhALWUUx6ox553g8lZiiB0PMYpWbu6RcA80oU4DGnZWL8AKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Dd4ahe0ocpWN8DUq3AOxARg8adJUyqgna4FI%2FH4uWC3LWfMAjWV7pez2wbaI6I2uF9003ck%2Flpx3GP5wjqT5Td9kOQiMMF6Dm%2BbrRNmJo1gXFIG9asYda1AVhbbHAm0hjZIb5BaeZ259UPzKI2HRGut259I0s557O06Suy5uuGIFANeza6sqNu745QKEj7jPAXVpb3F%2F1svZC%2BQtq06WIWm1PXevwh2Ki3ck%2B5G9lMqup8uhQfPjMWyQjRp%2FmgKBWkETBfjQoK6gJ1kaSKvge5I3sjeiyYyBY8%2FNVpOjib%2B8yUN42gK4LwHvOQ6dalGI9Rqy2Xhyl5dbPntE9GOazkp6bLxNqEPkilcx2Me4bZOi4ZdvGHfgJK2PqdLTEHMLvV2%2BXHaNwlzRZYnAPjhKKXQO69WSGfsefoUDF5gaJSe6KXBoC%2BDh45LCR%2F9Mm86dw65%2BihdaGZ8R9YD6j%2FiPL01GV2C%2F0EIeGcHiB8TRFZSyhQMjwBf7Qb18xGqg3G3w1VAgQsfGwUlQGTPbtAaiNtQYrVGc7bLfAaobmjCW37PJ2A%2BzS5IUTX2JbgmKH9HBymEj6%2BFcarW2PlurQMoStjw5IKlbHAI5%2Bll8hNPuLFhHA0moQEAK4bTliqd5myiK5bUxbMj85%2Bc5WjCGh9bABjqkAaT6DBD1uqEV3ZBZWfzIKGjiGOLajMPqmuQJZ9YTB0%2BIaCwfDP%2FlXuufrVmdSvGe%2FT%2BUOuJKgBmn379NrGT2Aa9dK%2FbLZ8qFa84PPCtgO%2BPKLmMYAmUrveeMmSNgKD1I6EvFiFyOphmQ%2BuHGhSI7G3fzu1pvVNv%2BDEyZ3X9udTifQKMAbe%2FLTQbR4BW9IaIFA%2F2Ate%2FSCAKosSuGXsun%2FVWbQtB5&X-Amz-Signature=70fa2e1e1cf17876fa543a76c80a658a11823a16549d39bdc5480d7e5fbaaa06&X-Amz-SignedHeaders=host&x-id=GetObject)
