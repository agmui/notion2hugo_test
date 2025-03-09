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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNPUE5O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDlS7zw6Bymz23bNqa3X362kU2%2FDNV5iaWE3hGU1pKHRgIgKOPRnu2LwG50hJBGSeOZWcYEqZ6xSH8HGYz7g3UR8NEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJwbSwRBOC53fxe22CrcA1TO%2FJ3isjgChJ8rtn4IdFqnn33%2FWW4%2BjdHwUH4owxpoqXGbjQnZ0EnZwgdhhH1YwDYA777Enwu8TnM3LyDLF0gvcF6zn9KWAfuqmOnKOrgmLX6AFbvcprm7BZ2P%2FdBQab1aWExXw9nopqf23BFo3LgLcA2pOD%2BYCQE53kq4OutFayZ5u4ySvCrUC1u2UUVQQpoICJ%2Ft%2FUSLq5RYkDyFirT%2B1jeRAM5lVTwjipJGXVSMuqGNte7KU10DF7v9gWhHygnfQlLQ62IDL4GnoefNfvdAYJM1s2nHtCWuT6Qw9vchLKMQs03pp3sfDIQPEc0Wd9Hgo9oAgjUgFHaXmMRSqiK1KDH1%2BJMht0PCSNBVj3mI0167Tw8zeAK%2BFYrNmUnUBIXZb6JzeN%2BU1fL3JC%2FfcAZoLMqWKotgnZPNtyUJpOUgxgGIcevd4st9ZVximHeamcnAYHYACCfSJsxXX9SIJAMYiW0RF%2BHthFpvb%2BOsrhY8bSoR9yaocmJYnBo0a%2FFCZwku1Cz2QSkNv8WySSju6ETNw0zMTWh7mNpEuchPnGF9OWj%2FI%2Fzc4cGCh1hmiPUqRIYWP3FJ4Jw%2F5a6%2FrEXbM26P%2BakIMzwnetGH1H%2Bq32no8tseyXRpuzlwbQhFMPCRtr4GOqUBlTYPKbNWbur7MMa7xcbfDk2wHo3B3cqrAysjwszp8Pq4XUPyXDbzqOcOJ%2FggSl0i%2BMg7FYQFnr0avnH11R3W9DY0mPlXlaYPW1U7l6Y3QUgS3i78RmNM3Rvvs3JY9R6f1%2FbrzjUHvHbALpPCKK7YepLmlj21kj0ZRamvxzFclBkPaMMWKsUg243jI3EV5RJTsyTiVdyIqgpZ5edz%2Bukz1pwhxxvz&X-Amz-Signature=b6121ec138545331aed5076786cdf14087bb0ae16e1583c6c6f4d6c71f82331a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNPUE5O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDlS7zw6Bymz23bNqa3X362kU2%2FDNV5iaWE3hGU1pKHRgIgKOPRnu2LwG50hJBGSeOZWcYEqZ6xSH8HGYz7g3UR8NEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJwbSwRBOC53fxe22CrcA1TO%2FJ3isjgChJ8rtn4IdFqnn33%2FWW4%2BjdHwUH4owxpoqXGbjQnZ0EnZwgdhhH1YwDYA777Enwu8TnM3LyDLF0gvcF6zn9KWAfuqmOnKOrgmLX6AFbvcprm7BZ2P%2FdBQab1aWExXw9nopqf23BFo3LgLcA2pOD%2BYCQE53kq4OutFayZ5u4ySvCrUC1u2UUVQQpoICJ%2Ft%2FUSLq5RYkDyFirT%2B1jeRAM5lVTwjipJGXVSMuqGNte7KU10DF7v9gWhHygnfQlLQ62IDL4GnoefNfvdAYJM1s2nHtCWuT6Qw9vchLKMQs03pp3sfDIQPEc0Wd9Hgo9oAgjUgFHaXmMRSqiK1KDH1%2BJMht0PCSNBVj3mI0167Tw8zeAK%2BFYrNmUnUBIXZb6JzeN%2BU1fL3JC%2FfcAZoLMqWKotgnZPNtyUJpOUgxgGIcevd4st9ZVximHeamcnAYHYACCfSJsxXX9SIJAMYiW0RF%2BHthFpvb%2BOsrhY8bSoR9yaocmJYnBo0a%2FFCZwku1Cz2QSkNv8WySSju6ETNw0zMTWh7mNpEuchPnGF9OWj%2FI%2Fzc4cGCh1hmiPUqRIYWP3FJ4Jw%2F5a6%2FrEXbM26P%2BakIMzwnetGH1H%2Bq32no8tseyXRpuzlwbQhFMPCRtr4GOqUBlTYPKbNWbur7MMa7xcbfDk2wHo3B3cqrAysjwszp8Pq4XUPyXDbzqOcOJ%2FggSl0i%2BMg7FYQFnr0avnH11R3W9DY0mPlXlaYPW1U7l6Y3QUgS3i78RmNM3Rvvs3JY9R6f1%2FbrzjUHvHbALpPCKK7YepLmlj21kj0ZRamvxzFclBkPaMMWKsUg243jI3EV5RJTsyTiVdyIqgpZ5edz%2Bukz1pwhxxvz&X-Amz-Signature=3980fb180a1e53cd998e8cc9cd00494e8a4fc40e42dadd02d18a3fb24409862e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNPUE5O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDlS7zw6Bymz23bNqa3X362kU2%2FDNV5iaWE3hGU1pKHRgIgKOPRnu2LwG50hJBGSeOZWcYEqZ6xSH8HGYz7g3UR8NEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJwbSwRBOC53fxe22CrcA1TO%2FJ3isjgChJ8rtn4IdFqnn33%2FWW4%2BjdHwUH4owxpoqXGbjQnZ0EnZwgdhhH1YwDYA777Enwu8TnM3LyDLF0gvcF6zn9KWAfuqmOnKOrgmLX6AFbvcprm7BZ2P%2FdBQab1aWExXw9nopqf23BFo3LgLcA2pOD%2BYCQE53kq4OutFayZ5u4ySvCrUC1u2UUVQQpoICJ%2Ft%2FUSLq5RYkDyFirT%2B1jeRAM5lVTwjipJGXVSMuqGNte7KU10DF7v9gWhHygnfQlLQ62IDL4GnoefNfvdAYJM1s2nHtCWuT6Qw9vchLKMQs03pp3sfDIQPEc0Wd9Hgo9oAgjUgFHaXmMRSqiK1KDH1%2BJMht0PCSNBVj3mI0167Tw8zeAK%2BFYrNmUnUBIXZb6JzeN%2BU1fL3JC%2FfcAZoLMqWKotgnZPNtyUJpOUgxgGIcevd4st9ZVximHeamcnAYHYACCfSJsxXX9SIJAMYiW0RF%2BHthFpvb%2BOsrhY8bSoR9yaocmJYnBo0a%2FFCZwku1Cz2QSkNv8WySSju6ETNw0zMTWh7mNpEuchPnGF9OWj%2FI%2Fzc4cGCh1hmiPUqRIYWP3FJ4Jw%2F5a6%2FrEXbM26P%2BakIMzwnetGH1H%2Bq32no8tseyXRpuzlwbQhFMPCRtr4GOqUBlTYPKbNWbur7MMa7xcbfDk2wHo3B3cqrAysjwszp8Pq4XUPyXDbzqOcOJ%2FggSl0i%2BMg7FYQFnr0avnH11R3W9DY0mPlXlaYPW1U7l6Y3QUgS3i78RmNM3Rvvs3JY9R6f1%2FbrzjUHvHbALpPCKK7YepLmlj21kj0ZRamvxzFclBkPaMMWKsUg243jI3EV5RJTsyTiVdyIqgpZ5edz%2Bukz1pwhxxvz&X-Amz-Signature=af4409b3be7b86eafa7de7b19b43b9b82ac60a57658196b31cf0f4ad323730d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNPUE5O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDlS7zw6Bymz23bNqa3X362kU2%2FDNV5iaWE3hGU1pKHRgIgKOPRnu2LwG50hJBGSeOZWcYEqZ6xSH8HGYz7g3UR8NEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJwbSwRBOC53fxe22CrcA1TO%2FJ3isjgChJ8rtn4IdFqnn33%2FWW4%2BjdHwUH4owxpoqXGbjQnZ0EnZwgdhhH1YwDYA777Enwu8TnM3LyDLF0gvcF6zn9KWAfuqmOnKOrgmLX6AFbvcprm7BZ2P%2FdBQab1aWExXw9nopqf23BFo3LgLcA2pOD%2BYCQE53kq4OutFayZ5u4ySvCrUC1u2UUVQQpoICJ%2Ft%2FUSLq5RYkDyFirT%2B1jeRAM5lVTwjipJGXVSMuqGNte7KU10DF7v9gWhHygnfQlLQ62IDL4GnoefNfvdAYJM1s2nHtCWuT6Qw9vchLKMQs03pp3sfDIQPEc0Wd9Hgo9oAgjUgFHaXmMRSqiK1KDH1%2BJMht0PCSNBVj3mI0167Tw8zeAK%2BFYrNmUnUBIXZb6JzeN%2BU1fL3JC%2FfcAZoLMqWKotgnZPNtyUJpOUgxgGIcevd4st9ZVximHeamcnAYHYACCfSJsxXX9SIJAMYiW0RF%2BHthFpvb%2BOsrhY8bSoR9yaocmJYnBo0a%2FFCZwku1Cz2QSkNv8WySSju6ETNw0zMTWh7mNpEuchPnGF9OWj%2FI%2Fzc4cGCh1hmiPUqRIYWP3FJ4Jw%2F5a6%2FrEXbM26P%2BakIMzwnetGH1H%2Bq32no8tseyXRpuzlwbQhFMPCRtr4GOqUBlTYPKbNWbur7MMa7xcbfDk2wHo3B3cqrAysjwszp8Pq4XUPyXDbzqOcOJ%2FggSl0i%2BMg7FYQFnr0avnH11R3W9DY0mPlXlaYPW1U7l6Y3QUgS3i78RmNM3Rvvs3JY9R6f1%2FbrzjUHvHbALpPCKK7YepLmlj21kj0ZRamvxzFclBkPaMMWKsUg243jI3EV5RJTsyTiVdyIqgpZ5edz%2Bukz1pwhxxvz&X-Amz-Signature=e098818e3a8b94eb57e428ced9ecaf1fe346f69f8cb071177deaf48dcb02e366&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNPUE5O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDlS7zw6Bymz23bNqa3X362kU2%2FDNV5iaWE3hGU1pKHRgIgKOPRnu2LwG50hJBGSeOZWcYEqZ6xSH8HGYz7g3UR8NEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJwbSwRBOC53fxe22CrcA1TO%2FJ3isjgChJ8rtn4IdFqnn33%2FWW4%2BjdHwUH4owxpoqXGbjQnZ0EnZwgdhhH1YwDYA777Enwu8TnM3LyDLF0gvcF6zn9KWAfuqmOnKOrgmLX6AFbvcprm7BZ2P%2FdBQab1aWExXw9nopqf23BFo3LgLcA2pOD%2BYCQE53kq4OutFayZ5u4ySvCrUC1u2UUVQQpoICJ%2Ft%2FUSLq5RYkDyFirT%2B1jeRAM5lVTwjipJGXVSMuqGNte7KU10DF7v9gWhHygnfQlLQ62IDL4GnoefNfvdAYJM1s2nHtCWuT6Qw9vchLKMQs03pp3sfDIQPEc0Wd9Hgo9oAgjUgFHaXmMRSqiK1KDH1%2BJMht0PCSNBVj3mI0167Tw8zeAK%2BFYrNmUnUBIXZb6JzeN%2BU1fL3JC%2FfcAZoLMqWKotgnZPNtyUJpOUgxgGIcevd4st9ZVximHeamcnAYHYACCfSJsxXX9SIJAMYiW0RF%2BHthFpvb%2BOsrhY8bSoR9yaocmJYnBo0a%2FFCZwku1Cz2QSkNv8WySSju6ETNw0zMTWh7mNpEuchPnGF9OWj%2FI%2Fzc4cGCh1hmiPUqRIYWP3FJ4Jw%2F5a6%2FrEXbM26P%2BakIMzwnetGH1H%2Bq32no8tseyXRpuzlwbQhFMPCRtr4GOqUBlTYPKbNWbur7MMa7xcbfDk2wHo3B3cqrAysjwszp8Pq4XUPyXDbzqOcOJ%2FggSl0i%2BMg7FYQFnr0avnH11R3W9DY0mPlXlaYPW1U7l6Y3QUgS3i78RmNM3Rvvs3JY9R6f1%2FbrzjUHvHbALpPCKK7YepLmlj21kj0ZRamvxzFclBkPaMMWKsUg243jI3EV5RJTsyTiVdyIqgpZ5edz%2Bukz1pwhxxvz&X-Amz-Signature=b59f95dc34293fa60f8ec8ce4a3d3c016229b2c02fee4d8add64956e0731bf47&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNPUE5O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDlS7zw6Bymz23bNqa3X362kU2%2FDNV5iaWE3hGU1pKHRgIgKOPRnu2LwG50hJBGSeOZWcYEqZ6xSH8HGYz7g3UR8NEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJwbSwRBOC53fxe22CrcA1TO%2FJ3isjgChJ8rtn4IdFqnn33%2FWW4%2BjdHwUH4owxpoqXGbjQnZ0EnZwgdhhH1YwDYA777Enwu8TnM3LyDLF0gvcF6zn9KWAfuqmOnKOrgmLX6AFbvcprm7BZ2P%2FdBQab1aWExXw9nopqf23BFo3LgLcA2pOD%2BYCQE53kq4OutFayZ5u4ySvCrUC1u2UUVQQpoICJ%2Ft%2FUSLq5RYkDyFirT%2B1jeRAM5lVTwjipJGXVSMuqGNte7KU10DF7v9gWhHygnfQlLQ62IDL4GnoefNfvdAYJM1s2nHtCWuT6Qw9vchLKMQs03pp3sfDIQPEc0Wd9Hgo9oAgjUgFHaXmMRSqiK1KDH1%2BJMht0PCSNBVj3mI0167Tw8zeAK%2BFYrNmUnUBIXZb6JzeN%2BU1fL3JC%2FfcAZoLMqWKotgnZPNtyUJpOUgxgGIcevd4st9ZVximHeamcnAYHYACCfSJsxXX9SIJAMYiW0RF%2BHthFpvb%2BOsrhY8bSoR9yaocmJYnBo0a%2FFCZwku1Cz2QSkNv8WySSju6ETNw0zMTWh7mNpEuchPnGF9OWj%2FI%2Fzc4cGCh1hmiPUqRIYWP3FJ4Jw%2F5a6%2FrEXbM26P%2BakIMzwnetGH1H%2Bq32no8tseyXRpuzlwbQhFMPCRtr4GOqUBlTYPKbNWbur7MMa7xcbfDk2wHo3B3cqrAysjwszp8Pq4XUPyXDbzqOcOJ%2FggSl0i%2BMg7FYQFnr0avnH11R3W9DY0mPlXlaYPW1U7l6Y3QUgS3i78RmNM3Rvvs3JY9R6f1%2FbrzjUHvHbALpPCKK7YepLmlj21kj0ZRamvxzFclBkPaMMWKsUg243jI3EV5RJTsyTiVdyIqgpZ5edz%2Bukz1pwhxxvz&X-Amz-Signature=01dee3c7458b74e7179e4417bbff7c5731274fc398706a4228685b4ef1ae67fa&X-Amz-SignedHeaders=host&x-id=GetObject)
