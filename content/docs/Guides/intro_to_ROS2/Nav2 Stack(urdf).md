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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVMXJSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF4sIi6XdmXm7%2F3%2FExvYaTkrbeSxIZLQx7flToKFYNNiAiA0c9oB%2BcT0yuOVvo0GP6FlHbgGdz%2B3DKW7n%2FGLTjciRyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMRnmhMsQKR0oHec09KtwDy0Aw99xxTdXAuUEZKEi4%2FbrWRck4hMmfY5q%2Bk0KVSKVASdKmhVzGp7QF5Z2KPiWg3cz551k1ZI8ivBLLOm7bRN2WU0asSyf0xEtNPVaP%2BLQNXyGVZjm1hJw9AfxroVDxSdPV%2BRvnMKy4GthVtlku3Mzd79z0yZ%2FK5CazHKRvV2o5qKgpuIQAnHY9rMrKy1aAQGimq%2FrtroQoWkESFRthlG%2BVr3uvXQz50%2Bz9roZCGEn8SnZVWnVRWjVGuCY9ZPLy5E%2BAuE6m2EVPjSvaUsYNmJvvwWx39JKYnKRiGIZ09dwFwmvQzbY1LfvebC5JvB8lmGritU3tFfRtTl8LyJ79jibZT3rHqu6zEU07WQpQge5q%2B9hR1%2FISvrrBmFUdOO7j2UV15Gr8%2BEVUx%2FRU6JHfBAxTlxQpcBnH6lgelVW1dpold1xx6%2BSgZicp61nE5B4BVofNrUuR4fufVIZa9DtqgQVTFWodl%2Bel1ngGW%2FknzumueLFKrzSyugcsZFC5GsLIaMrd1IwnoHDscQyLBY6qKWI%2FMMEYdcSVQNr%2Bov%2B5YVONv%2FkrtabmpIiW0GlPFLP1awiGdehQJlnsse%2Fte%2FDApQtn%2F7HX4up2%2BUlqhxAcwTDRBVrviWvfKvX8gqwwhM6kwwY6pgF%2F7RPunia%2FBTnE9ktHCr7lvF3ykeRvEhp4TXnLeq%2FgcEYAYiX9zhTshTdOB%2BRyjj65PYZ%2FqkKcuKM%2B2WcYkFf4F8jmkEG6ELaOJeQFqxkCutpTYkmdKaogK6oo1Dj15d2wmqvmetfcDG3y0snRGgz9f62YBdii34YnJUn%2BcyRL0xtjQntMaQnO6VN5hs4OjamKbWGzypCVBVUzpTqRv4ceCY7hQc1m&X-Amz-Signature=d66f534ba2da0ec685cefb3f3d6cbe8aa74c00b1c91cd6c33cab1326bc80b45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVMXJSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF4sIi6XdmXm7%2F3%2FExvYaTkrbeSxIZLQx7flToKFYNNiAiA0c9oB%2BcT0yuOVvo0GP6FlHbgGdz%2B3DKW7n%2FGLTjciRyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMRnmhMsQKR0oHec09KtwDy0Aw99xxTdXAuUEZKEi4%2FbrWRck4hMmfY5q%2Bk0KVSKVASdKmhVzGp7QF5Z2KPiWg3cz551k1ZI8ivBLLOm7bRN2WU0asSyf0xEtNPVaP%2BLQNXyGVZjm1hJw9AfxroVDxSdPV%2BRvnMKy4GthVtlku3Mzd79z0yZ%2FK5CazHKRvV2o5qKgpuIQAnHY9rMrKy1aAQGimq%2FrtroQoWkESFRthlG%2BVr3uvXQz50%2Bz9roZCGEn8SnZVWnVRWjVGuCY9ZPLy5E%2BAuE6m2EVPjSvaUsYNmJvvwWx39JKYnKRiGIZ09dwFwmvQzbY1LfvebC5JvB8lmGritU3tFfRtTl8LyJ79jibZT3rHqu6zEU07WQpQge5q%2B9hR1%2FISvrrBmFUdOO7j2UV15Gr8%2BEVUx%2FRU6JHfBAxTlxQpcBnH6lgelVW1dpold1xx6%2BSgZicp61nE5B4BVofNrUuR4fufVIZa9DtqgQVTFWodl%2Bel1ngGW%2FknzumueLFKrzSyugcsZFC5GsLIaMrd1IwnoHDscQyLBY6qKWI%2FMMEYdcSVQNr%2Bov%2B5YVONv%2FkrtabmpIiW0GlPFLP1awiGdehQJlnsse%2Fte%2FDApQtn%2F7HX4up2%2BUlqhxAcwTDRBVrviWvfKvX8gqwwhM6kwwY6pgF%2F7RPunia%2FBTnE9ktHCr7lvF3ykeRvEhp4TXnLeq%2FgcEYAYiX9zhTshTdOB%2BRyjj65PYZ%2FqkKcuKM%2B2WcYkFf4F8jmkEG6ELaOJeQFqxkCutpTYkmdKaogK6oo1Dj15d2wmqvmetfcDG3y0snRGgz9f62YBdii34YnJUn%2BcyRL0xtjQntMaQnO6VN5hs4OjamKbWGzypCVBVUzpTqRv4ceCY7hQc1m&X-Amz-Signature=139f520fd4527aaccde6057147ca1a2e5f500555d0f433a7a56749c75c138aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVMXJSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF4sIi6XdmXm7%2F3%2FExvYaTkrbeSxIZLQx7flToKFYNNiAiA0c9oB%2BcT0yuOVvo0GP6FlHbgGdz%2B3DKW7n%2FGLTjciRyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMRnmhMsQKR0oHec09KtwDy0Aw99xxTdXAuUEZKEi4%2FbrWRck4hMmfY5q%2Bk0KVSKVASdKmhVzGp7QF5Z2KPiWg3cz551k1ZI8ivBLLOm7bRN2WU0asSyf0xEtNPVaP%2BLQNXyGVZjm1hJw9AfxroVDxSdPV%2BRvnMKy4GthVtlku3Mzd79z0yZ%2FK5CazHKRvV2o5qKgpuIQAnHY9rMrKy1aAQGimq%2FrtroQoWkESFRthlG%2BVr3uvXQz50%2Bz9roZCGEn8SnZVWnVRWjVGuCY9ZPLy5E%2BAuE6m2EVPjSvaUsYNmJvvwWx39JKYnKRiGIZ09dwFwmvQzbY1LfvebC5JvB8lmGritU3tFfRtTl8LyJ79jibZT3rHqu6zEU07WQpQge5q%2B9hR1%2FISvrrBmFUdOO7j2UV15Gr8%2BEVUx%2FRU6JHfBAxTlxQpcBnH6lgelVW1dpold1xx6%2BSgZicp61nE5B4BVofNrUuR4fufVIZa9DtqgQVTFWodl%2Bel1ngGW%2FknzumueLFKrzSyugcsZFC5GsLIaMrd1IwnoHDscQyLBY6qKWI%2FMMEYdcSVQNr%2Bov%2B5YVONv%2FkrtabmpIiW0GlPFLP1awiGdehQJlnsse%2Fte%2FDApQtn%2F7HX4up2%2BUlqhxAcwTDRBVrviWvfKvX8gqwwhM6kwwY6pgF%2F7RPunia%2FBTnE9ktHCr7lvF3ykeRvEhp4TXnLeq%2FgcEYAYiX9zhTshTdOB%2BRyjj65PYZ%2FqkKcuKM%2B2WcYkFf4F8jmkEG6ELaOJeQFqxkCutpTYkmdKaogK6oo1Dj15d2wmqvmetfcDG3y0snRGgz9f62YBdii34YnJUn%2BcyRL0xtjQntMaQnO6VN5hs4OjamKbWGzypCVBVUzpTqRv4ceCY7hQc1m&X-Amz-Signature=2df826cc3988fe84f8378db5cca438eb0c0f907527a1880aacc2ba286c7e2957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVMXJSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF4sIi6XdmXm7%2F3%2FExvYaTkrbeSxIZLQx7flToKFYNNiAiA0c9oB%2BcT0yuOVvo0GP6FlHbgGdz%2B3DKW7n%2FGLTjciRyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMRnmhMsQKR0oHec09KtwDy0Aw99xxTdXAuUEZKEi4%2FbrWRck4hMmfY5q%2Bk0KVSKVASdKmhVzGp7QF5Z2KPiWg3cz551k1ZI8ivBLLOm7bRN2WU0asSyf0xEtNPVaP%2BLQNXyGVZjm1hJw9AfxroVDxSdPV%2BRvnMKy4GthVtlku3Mzd79z0yZ%2FK5CazHKRvV2o5qKgpuIQAnHY9rMrKy1aAQGimq%2FrtroQoWkESFRthlG%2BVr3uvXQz50%2Bz9roZCGEn8SnZVWnVRWjVGuCY9ZPLy5E%2BAuE6m2EVPjSvaUsYNmJvvwWx39JKYnKRiGIZ09dwFwmvQzbY1LfvebC5JvB8lmGritU3tFfRtTl8LyJ79jibZT3rHqu6zEU07WQpQge5q%2B9hR1%2FISvrrBmFUdOO7j2UV15Gr8%2BEVUx%2FRU6JHfBAxTlxQpcBnH6lgelVW1dpold1xx6%2BSgZicp61nE5B4BVofNrUuR4fufVIZa9DtqgQVTFWodl%2Bel1ngGW%2FknzumueLFKrzSyugcsZFC5GsLIaMrd1IwnoHDscQyLBY6qKWI%2FMMEYdcSVQNr%2Bov%2B5YVONv%2FkrtabmpIiW0GlPFLP1awiGdehQJlnsse%2Fte%2FDApQtn%2F7HX4up2%2BUlqhxAcwTDRBVrviWvfKvX8gqwwhM6kwwY6pgF%2F7RPunia%2FBTnE9ktHCr7lvF3ykeRvEhp4TXnLeq%2FgcEYAYiX9zhTshTdOB%2BRyjj65PYZ%2FqkKcuKM%2B2WcYkFf4F8jmkEG6ELaOJeQFqxkCutpTYkmdKaogK6oo1Dj15d2wmqvmetfcDG3y0snRGgz9f62YBdii34YnJUn%2BcyRL0xtjQntMaQnO6VN5hs4OjamKbWGzypCVBVUzpTqRv4ceCY7hQc1m&X-Amz-Signature=1f9f03cb0bfb0fee19db7ca9ef824ac91d3cb2818450d92fc3d276320aabf0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVMXJSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF4sIi6XdmXm7%2F3%2FExvYaTkrbeSxIZLQx7flToKFYNNiAiA0c9oB%2BcT0yuOVvo0GP6FlHbgGdz%2B3DKW7n%2FGLTjciRyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMRnmhMsQKR0oHec09KtwDy0Aw99xxTdXAuUEZKEi4%2FbrWRck4hMmfY5q%2Bk0KVSKVASdKmhVzGp7QF5Z2KPiWg3cz551k1ZI8ivBLLOm7bRN2WU0asSyf0xEtNPVaP%2BLQNXyGVZjm1hJw9AfxroVDxSdPV%2BRvnMKy4GthVtlku3Mzd79z0yZ%2FK5CazHKRvV2o5qKgpuIQAnHY9rMrKy1aAQGimq%2FrtroQoWkESFRthlG%2BVr3uvXQz50%2Bz9roZCGEn8SnZVWnVRWjVGuCY9ZPLy5E%2BAuE6m2EVPjSvaUsYNmJvvwWx39JKYnKRiGIZ09dwFwmvQzbY1LfvebC5JvB8lmGritU3tFfRtTl8LyJ79jibZT3rHqu6zEU07WQpQge5q%2B9hR1%2FISvrrBmFUdOO7j2UV15Gr8%2BEVUx%2FRU6JHfBAxTlxQpcBnH6lgelVW1dpold1xx6%2BSgZicp61nE5B4BVofNrUuR4fufVIZa9DtqgQVTFWodl%2Bel1ngGW%2FknzumueLFKrzSyugcsZFC5GsLIaMrd1IwnoHDscQyLBY6qKWI%2FMMEYdcSVQNr%2Bov%2B5YVONv%2FkrtabmpIiW0GlPFLP1awiGdehQJlnsse%2Fte%2FDApQtn%2F7HX4up2%2BUlqhxAcwTDRBVrviWvfKvX8gqwwhM6kwwY6pgF%2F7RPunia%2FBTnE9ktHCr7lvF3ykeRvEhp4TXnLeq%2FgcEYAYiX9zhTshTdOB%2BRyjj65PYZ%2FqkKcuKM%2B2WcYkFf4F8jmkEG6ELaOJeQFqxkCutpTYkmdKaogK6oo1Dj15d2wmqvmetfcDG3y0snRGgz9f62YBdii34YnJUn%2BcyRL0xtjQntMaQnO6VN5hs4OjamKbWGzypCVBVUzpTqRv4ceCY7hQc1m&X-Amz-Signature=396b71d2aac3cf6867eb1563834186688c139dcccf7540274b2a4fa4e3d38560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVMXJSD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIF4sIi6XdmXm7%2F3%2FExvYaTkrbeSxIZLQx7flToKFYNNiAiA0c9oB%2BcT0yuOVvo0GP6FlHbgGdz%2B3DKW7n%2FGLTjciRyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMRnmhMsQKR0oHec09KtwDy0Aw99xxTdXAuUEZKEi4%2FbrWRck4hMmfY5q%2Bk0KVSKVASdKmhVzGp7QF5Z2KPiWg3cz551k1ZI8ivBLLOm7bRN2WU0asSyf0xEtNPVaP%2BLQNXyGVZjm1hJw9AfxroVDxSdPV%2BRvnMKy4GthVtlku3Mzd79z0yZ%2FK5CazHKRvV2o5qKgpuIQAnHY9rMrKy1aAQGimq%2FrtroQoWkESFRthlG%2BVr3uvXQz50%2Bz9roZCGEn8SnZVWnVRWjVGuCY9ZPLy5E%2BAuE6m2EVPjSvaUsYNmJvvwWx39JKYnKRiGIZ09dwFwmvQzbY1LfvebC5JvB8lmGritU3tFfRtTl8LyJ79jibZT3rHqu6zEU07WQpQge5q%2B9hR1%2FISvrrBmFUdOO7j2UV15Gr8%2BEVUx%2FRU6JHfBAxTlxQpcBnH6lgelVW1dpold1xx6%2BSgZicp61nE5B4BVofNrUuR4fufVIZa9DtqgQVTFWodl%2Bel1ngGW%2FknzumueLFKrzSyugcsZFC5GsLIaMrd1IwnoHDscQyLBY6qKWI%2FMMEYdcSVQNr%2Bov%2B5YVONv%2FkrtabmpIiW0GlPFLP1awiGdehQJlnsse%2Fte%2FDApQtn%2F7HX4up2%2BUlqhxAcwTDRBVrviWvfKvX8gqwwhM6kwwY6pgF%2F7RPunia%2FBTnE9ktHCr7lvF3ykeRvEhp4TXnLeq%2FgcEYAYiX9zhTshTdOB%2BRyjj65PYZ%2FqkKcuKM%2B2WcYkFf4F8jmkEG6ELaOJeQFqxkCutpTYkmdKaogK6oo1Dj15d2wmqvmetfcDG3y0snRGgz9f62YBdii34YnJUn%2BcyRL0xtjQntMaQnO6VN5hs4OjamKbWGzypCVBVUzpTqRv4ceCY7hQc1m&X-Amz-Signature=d2d1c9ced11924861904c52330612b390640929cfb5f2fbee406baaae7890d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
