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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLMKJC5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIHX43f6XKCsGzYH%2BLkg7MRBcw15eSghkoa1uEnJoZN29AiAE8FLvVwD5mrTalXDJoev%2BT2s2GbtWf11tRDQ%2FijJC%2FCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM0FPKBAPnMFlo9bPaKtwDAj6tXWcM2frJ6m4XiFaQDFL1OhacbECvRvfyrtHwa7XuzbbMtotaqgBH8f0a3H00biFZMSmRvIsaryhPoPuVRuAySwuOJwnMR7Yc8X84huQfQptkAlkt86Y%2BErl9rd588arULVK%2F029V1eg3AmLuDyNH7ASJgX2RYAuBtsODnUwABqpqgNOrWYWK8S9PZTalCkyu3UPMiuxbSsg0VGjNwsRQy%2Fubx8wn9Dm%2FnGgdCUWsS3yFayzKMazPZ%2B9SPHe3pn9UsvJuKeXStgMPfBZ6o7Nhe27t0MwU6FpK39q%2B3Ds5V0ncktLN2gQ5hx3CevgAfHpTmxb347bvsFA8exlscilXXuCpwlldkaVJmCCr0zI4N1rJKJv0vPSaILOuXUU4jK3EW6GSx5TS0sPLSv1%2FO2vOZqbAfN9eTfAInOyIRnJ%2Bv5U4Fht%2B5Ui1pYDucxKvxjIulwyswZXODGn8%2FGRl0H2u201%2FamjmHQnjXFcVDOQRQ%2FM5rtXJk6HVxgO2%2FnxUg%2FiPap1kr4GWLepLwi41jcVJA0oOFOTl2orR1jvg8ck6l6vsmc9kuFcq%2Bw3rOjE%2FEhsOpG8rKE5Fu6ZkiKzkbgfLPQ7xYTPKTSlVYYTNx0HqOnO%2B5hFuDH0uX5YwyuyzwgY6pgE%2BHeICGkjs81HyWOuE5n7n%2BSlZ%2FQLCRltXIQkjpp9mLfMXGSqv0aoMz%2F%2BlqD%2FGWGZqeYna6ecM8CjOJF2orSiOfGyJIEKk1aMf33TQbpHdIGaORUtkeqx4xPYbRmjDFgXXlcEAtRw1u8hIWvVxTNGPuF9ti4iltzUE9Suuz8EsxxKEh4UZFM1OoPexVnPkHNnUFZy3PQqv8%2BKb7z%2FLcFneyPjttrO1&X-Amz-Signature=407e4b3e2778384f91688b84bc0cf01b41b984e87cd44493484027a7e9b7b289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLMKJC5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIHX43f6XKCsGzYH%2BLkg7MRBcw15eSghkoa1uEnJoZN29AiAE8FLvVwD5mrTalXDJoev%2BT2s2GbtWf11tRDQ%2FijJC%2FCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM0FPKBAPnMFlo9bPaKtwDAj6tXWcM2frJ6m4XiFaQDFL1OhacbECvRvfyrtHwa7XuzbbMtotaqgBH8f0a3H00biFZMSmRvIsaryhPoPuVRuAySwuOJwnMR7Yc8X84huQfQptkAlkt86Y%2BErl9rd588arULVK%2F029V1eg3AmLuDyNH7ASJgX2RYAuBtsODnUwABqpqgNOrWYWK8S9PZTalCkyu3UPMiuxbSsg0VGjNwsRQy%2Fubx8wn9Dm%2FnGgdCUWsS3yFayzKMazPZ%2B9SPHe3pn9UsvJuKeXStgMPfBZ6o7Nhe27t0MwU6FpK39q%2B3Ds5V0ncktLN2gQ5hx3CevgAfHpTmxb347bvsFA8exlscilXXuCpwlldkaVJmCCr0zI4N1rJKJv0vPSaILOuXUU4jK3EW6GSx5TS0sPLSv1%2FO2vOZqbAfN9eTfAInOyIRnJ%2Bv5U4Fht%2B5Ui1pYDucxKvxjIulwyswZXODGn8%2FGRl0H2u201%2FamjmHQnjXFcVDOQRQ%2FM5rtXJk6HVxgO2%2FnxUg%2FiPap1kr4GWLepLwi41jcVJA0oOFOTl2orR1jvg8ck6l6vsmc9kuFcq%2Bw3rOjE%2FEhsOpG8rKE5Fu6ZkiKzkbgfLPQ7xYTPKTSlVYYTNx0HqOnO%2B5hFuDH0uX5YwyuyzwgY6pgE%2BHeICGkjs81HyWOuE5n7n%2BSlZ%2FQLCRltXIQkjpp9mLfMXGSqv0aoMz%2F%2BlqD%2FGWGZqeYna6ecM8CjOJF2orSiOfGyJIEKk1aMf33TQbpHdIGaORUtkeqx4xPYbRmjDFgXXlcEAtRw1u8hIWvVxTNGPuF9ti4iltzUE9Suuz8EsxxKEh4UZFM1OoPexVnPkHNnUFZy3PQqv8%2BKb7z%2FLcFneyPjttrO1&X-Amz-Signature=5b1184b3e6057e9feb4e7a349df87af4f8203c2358b46c5b31c2dc4dc57af1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLMKJC5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIHX43f6XKCsGzYH%2BLkg7MRBcw15eSghkoa1uEnJoZN29AiAE8FLvVwD5mrTalXDJoev%2BT2s2GbtWf11tRDQ%2FijJC%2FCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM0FPKBAPnMFlo9bPaKtwDAj6tXWcM2frJ6m4XiFaQDFL1OhacbECvRvfyrtHwa7XuzbbMtotaqgBH8f0a3H00biFZMSmRvIsaryhPoPuVRuAySwuOJwnMR7Yc8X84huQfQptkAlkt86Y%2BErl9rd588arULVK%2F029V1eg3AmLuDyNH7ASJgX2RYAuBtsODnUwABqpqgNOrWYWK8S9PZTalCkyu3UPMiuxbSsg0VGjNwsRQy%2Fubx8wn9Dm%2FnGgdCUWsS3yFayzKMazPZ%2B9SPHe3pn9UsvJuKeXStgMPfBZ6o7Nhe27t0MwU6FpK39q%2B3Ds5V0ncktLN2gQ5hx3CevgAfHpTmxb347bvsFA8exlscilXXuCpwlldkaVJmCCr0zI4N1rJKJv0vPSaILOuXUU4jK3EW6GSx5TS0sPLSv1%2FO2vOZqbAfN9eTfAInOyIRnJ%2Bv5U4Fht%2B5Ui1pYDucxKvxjIulwyswZXODGn8%2FGRl0H2u201%2FamjmHQnjXFcVDOQRQ%2FM5rtXJk6HVxgO2%2FnxUg%2FiPap1kr4GWLepLwi41jcVJA0oOFOTl2orR1jvg8ck6l6vsmc9kuFcq%2Bw3rOjE%2FEhsOpG8rKE5Fu6ZkiKzkbgfLPQ7xYTPKTSlVYYTNx0HqOnO%2B5hFuDH0uX5YwyuyzwgY6pgE%2BHeICGkjs81HyWOuE5n7n%2BSlZ%2FQLCRltXIQkjpp9mLfMXGSqv0aoMz%2F%2BlqD%2FGWGZqeYna6ecM8CjOJF2orSiOfGyJIEKk1aMf33TQbpHdIGaORUtkeqx4xPYbRmjDFgXXlcEAtRw1u8hIWvVxTNGPuF9ti4iltzUE9Suuz8EsxxKEh4UZFM1OoPexVnPkHNnUFZy3PQqv8%2BKb7z%2FLcFneyPjttrO1&X-Amz-Signature=76fe4fe50235dddf5767360147d575176ed3c41840175c9cefa744ac735c2158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLMKJC5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIHX43f6XKCsGzYH%2BLkg7MRBcw15eSghkoa1uEnJoZN29AiAE8FLvVwD5mrTalXDJoev%2BT2s2GbtWf11tRDQ%2FijJC%2FCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM0FPKBAPnMFlo9bPaKtwDAj6tXWcM2frJ6m4XiFaQDFL1OhacbECvRvfyrtHwa7XuzbbMtotaqgBH8f0a3H00biFZMSmRvIsaryhPoPuVRuAySwuOJwnMR7Yc8X84huQfQptkAlkt86Y%2BErl9rd588arULVK%2F029V1eg3AmLuDyNH7ASJgX2RYAuBtsODnUwABqpqgNOrWYWK8S9PZTalCkyu3UPMiuxbSsg0VGjNwsRQy%2Fubx8wn9Dm%2FnGgdCUWsS3yFayzKMazPZ%2B9SPHe3pn9UsvJuKeXStgMPfBZ6o7Nhe27t0MwU6FpK39q%2B3Ds5V0ncktLN2gQ5hx3CevgAfHpTmxb347bvsFA8exlscilXXuCpwlldkaVJmCCr0zI4N1rJKJv0vPSaILOuXUU4jK3EW6GSx5TS0sPLSv1%2FO2vOZqbAfN9eTfAInOyIRnJ%2Bv5U4Fht%2B5Ui1pYDucxKvxjIulwyswZXODGn8%2FGRl0H2u201%2FamjmHQnjXFcVDOQRQ%2FM5rtXJk6HVxgO2%2FnxUg%2FiPap1kr4GWLepLwi41jcVJA0oOFOTl2orR1jvg8ck6l6vsmc9kuFcq%2Bw3rOjE%2FEhsOpG8rKE5Fu6ZkiKzkbgfLPQ7xYTPKTSlVYYTNx0HqOnO%2B5hFuDH0uX5YwyuyzwgY6pgE%2BHeICGkjs81HyWOuE5n7n%2BSlZ%2FQLCRltXIQkjpp9mLfMXGSqv0aoMz%2F%2BlqD%2FGWGZqeYna6ecM8CjOJF2orSiOfGyJIEKk1aMf33TQbpHdIGaORUtkeqx4xPYbRmjDFgXXlcEAtRw1u8hIWvVxTNGPuF9ti4iltzUE9Suuz8EsxxKEh4UZFM1OoPexVnPkHNnUFZy3PQqv8%2BKb7z%2FLcFneyPjttrO1&X-Amz-Signature=c12d8956785dc75db98cd35dba3662763f340eba6cf457ac04d357c8b9bf08dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLMKJC5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIHX43f6XKCsGzYH%2BLkg7MRBcw15eSghkoa1uEnJoZN29AiAE8FLvVwD5mrTalXDJoev%2BT2s2GbtWf11tRDQ%2FijJC%2FCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM0FPKBAPnMFlo9bPaKtwDAj6tXWcM2frJ6m4XiFaQDFL1OhacbECvRvfyrtHwa7XuzbbMtotaqgBH8f0a3H00biFZMSmRvIsaryhPoPuVRuAySwuOJwnMR7Yc8X84huQfQptkAlkt86Y%2BErl9rd588arULVK%2F029V1eg3AmLuDyNH7ASJgX2RYAuBtsODnUwABqpqgNOrWYWK8S9PZTalCkyu3UPMiuxbSsg0VGjNwsRQy%2Fubx8wn9Dm%2FnGgdCUWsS3yFayzKMazPZ%2B9SPHe3pn9UsvJuKeXStgMPfBZ6o7Nhe27t0MwU6FpK39q%2B3Ds5V0ncktLN2gQ5hx3CevgAfHpTmxb347bvsFA8exlscilXXuCpwlldkaVJmCCr0zI4N1rJKJv0vPSaILOuXUU4jK3EW6GSx5TS0sPLSv1%2FO2vOZqbAfN9eTfAInOyIRnJ%2Bv5U4Fht%2B5Ui1pYDucxKvxjIulwyswZXODGn8%2FGRl0H2u201%2FamjmHQnjXFcVDOQRQ%2FM5rtXJk6HVxgO2%2FnxUg%2FiPap1kr4GWLepLwi41jcVJA0oOFOTl2orR1jvg8ck6l6vsmc9kuFcq%2Bw3rOjE%2FEhsOpG8rKE5Fu6ZkiKzkbgfLPQ7xYTPKTSlVYYTNx0HqOnO%2B5hFuDH0uX5YwyuyzwgY6pgE%2BHeICGkjs81HyWOuE5n7n%2BSlZ%2FQLCRltXIQkjpp9mLfMXGSqv0aoMz%2F%2BlqD%2FGWGZqeYna6ecM8CjOJF2orSiOfGyJIEKk1aMf33TQbpHdIGaORUtkeqx4xPYbRmjDFgXXlcEAtRw1u8hIWvVxTNGPuF9ti4iltzUE9Suuz8EsxxKEh4UZFM1OoPexVnPkHNnUFZy3PQqv8%2BKb7z%2FLcFneyPjttrO1&X-Amz-Signature=af3e656debe576ff7fb33816e456cab7f243c774f673e461a53e5a4af488d5ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLMKJC5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIHX43f6XKCsGzYH%2BLkg7MRBcw15eSghkoa1uEnJoZN29AiAE8FLvVwD5mrTalXDJoev%2BT2s2GbtWf11tRDQ%2FijJC%2FCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM0FPKBAPnMFlo9bPaKtwDAj6tXWcM2frJ6m4XiFaQDFL1OhacbECvRvfyrtHwa7XuzbbMtotaqgBH8f0a3H00biFZMSmRvIsaryhPoPuVRuAySwuOJwnMR7Yc8X84huQfQptkAlkt86Y%2BErl9rd588arULVK%2F029V1eg3AmLuDyNH7ASJgX2RYAuBtsODnUwABqpqgNOrWYWK8S9PZTalCkyu3UPMiuxbSsg0VGjNwsRQy%2Fubx8wn9Dm%2FnGgdCUWsS3yFayzKMazPZ%2B9SPHe3pn9UsvJuKeXStgMPfBZ6o7Nhe27t0MwU6FpK39q%2B3Ds5V0ncktLN2gQ5hx3CevgAfHpTmxb347bvsFA8exlscilXXuCpwlldkaVJmCCr0zI4N1rJKJv0vPSaILOuXUU4jK3EW6GSx5TS0sPLSv1%2FO2vOZqbAfN9eTfAInOyIRnJ%2Bv5U4Fht%2B5Ui1pYDucxKvxjIulwyswZXODGn8%2FGRl0H2u201%2FamjmHQnjXFcVDOQRQ%2FM5rtXJk6HVxgO2%2FnxUg%2FiPap1kr4GWLepLwi41jcVJA0oOFOTl2orR1jvg8ck6l6vsmc9kuFcq%2Bw3rOjE%2FEhsOpG8rKE5Fu6ZkiKzkbgfLPQ7xYTPKTSlVYYTNx0HqOnO%2B5hFuDH0uX5YwyuyzwgY6pgE%2BHeICGkjs81HyWOuE5n7n%2BSlZ%2FQLCRltXIQkjpp9mLfMXGSqv0aoMz%2F%2BlqD%2FGWGZqeYna6ecM8CjOJF2orSiOfGyJIEKk1aMf33TQbpHdIGaORUtkeqx4xPYbRmjDFgXXlcEAtRw1u8hIWvVxTNGPuF9ti4iltzUE9Suuz8EsxxKEh4UZFM1OoPexVnPkHNnUFZy3PQqv8%2BKb7z%2FLcFneyPjttrO1&X-Amz-Signature=0e816704eb41c6101a20bed773e29e182860b1dd92c8ff8efae8ef79f39532c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
