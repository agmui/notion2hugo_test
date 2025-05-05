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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQ3SM4R%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUcvtbiRKaL7BdS0auns3fcseysW%2B06CvfAqyXv%2FOUxwIhAJeW2OYBYrB2lrDST3IWnWTM4WI0LJSBP3jNgsPlHXahKv8DCCsQABoMNjM3NDIzMTgzODA1Igyfk%2BgYeIjMWIryG78q3APbplQCPrFVflMFHsu8uWqreTn8UxZkEyWzFAcTrhnSHaqzJDJtqkhCh0JUAZlrbD%2BvSUhlyFi9ENZ46wGcGNMREy5BwYvF4DemQSRufHiIa%2BbYGmg%2BwUDQthR4mpn4UMpcEekdL0AyeKngcUESoWV45ugP7MHgEifXJ%2F8zaVKSPO1hRhZFbY6A%2FjDceQ4c5wvMv4j1SkNEvrA%2Fo2p6%2FvTQbGEL30%2F1byKSJLWWPEcZbXYuDK1MZBQ3dGWDWyWv2Zrczp4c%2FUpdoK6XdVZRT4rUkq3EELB614W2M2%2BKr%2BZ%2B7sMPFmaY3tF1jIcntFLAu4Sb%2Fh%2F4na6OO63ceQ9YDAJwxdnYu6Mn4YLn3HoRRvMLuZemLaDB5q8WmZf0h0kf3fnBULEtgl0L1KPTMExaF6N%2FVNs6azXyt3N5wKpkT7cm%2B564s1oidTH0xTR358w%2FBLpsoV23p1peCk%2BtC8Wtv2vuQrupoXBKGR0rUo5GAoyaSCY9jYc9rvHzyz4MVpAQ3Ns3FabA6vyyEroFNQmdQR%2FdWjHzOHntj5ey0uhzmLwjFIagRjfWjQzRfvafN5OIADugJp8ZweCGICo6%2Fwk7l6T2gNxjeEHXgkHyIBwn6704nLQVatlibZKGdGc6BDCxluLABjqkAapVg2h0uF1s6vbt69zwsV0OtAvowJYPG62HZOZzDp65kCE%2BMsfc1KlN8nlcTM%2BBu%2BkisKh%2BUufyHn9v7AAi6TsPbQaUgmd1YT9c4cpLXFPFcmPzsn5Vq09TA%2BZPpM%2FE4M5RbKyCRplQEF1bzFDnw6noAtRtWq08yMb%2FWP68JWK%2BqVaCzGN2cesWeiHUHgFjEtHHJ3jpyMtxjCvBfE5WJcT28N4t&X-Amz-Signature=cda4dedc3422c52d2dd70c38e6927df900f8a71cbc7ccb4a01ac6e84a5e09e60&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQ3SM4R%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUcvtbiRKaL7BdS0auns3fcseysW%2B06CvfAqyXv%2FOUxwIhAJeW2OYBYrB2lrDST3IWnWTM4WI0LJSBP3jNgsPlHXahKv8DCCsQABoMNjM3NDIzMTgzODA1Igyfk%2BgYeIjMWIryG78q3APbplQCPrFVflMFHsu8uWqreTn8UxZkEyWzFAcTrhnSHaqzJDJtqkhCh0JUAZlrbD%2BvSUhlyFi9ENZ46wGcGNMREy5BwYvF4DemQSRufHiIa%2BbYGmg%2BwUDQthR4mpn4UMpcEekdL0AyeKngcUESoWV45ugP7MHgEifXJ%2F8zaVKSPO1hRhZFbY6A%2FjDceQ4c5wvMv4j1SkNEvrA%2Fo2p6%2FvTQbGEL30%2F1byKSJLWWPEcZbXYuDK1MZBQ3dGWDWyWv2Zrczp4c%2FUpdoK6XdVZRT4rUkq3EELB614W2M2%2BKr%2BZ%2B7sMPFmaY3tF1jIcntFLAu4Sb%2Fh%2F4na6OO63ceQ9YDAJwxdnYu6Mn4YLn3HoRRvMLuZemLaDB5q8WmZf0h0kf3fnBULEtgl0L1KPTMExaF6N%2FVNs6azXyt3N5wKpkT7cm%2B564s1oidTH0xTR358w%2FBLpsoV23p1peCk%2BtC8Wtv2vuQrupoXBKGR0rUo5GAoyaSCY9jYc9rvHzyz4MVpAQ3Ns3FabA6vyyEroFNQmdQR%2FdWjHzOHntj5ey0uhzmLwjFIagRjfWjQzRfvafN5OIADugJp8ZweCGICo6%2Fwk7l6T2gNxjeEHXgkHyIBwn6704nLQVatlibZKGdGc6BDCxluLABjqkAapVg2h0uF1s6vbt69zwsV0OtAvowJYPG62HZOZzDp65kCE%2BMsfc1KlN8nlcTM%2BBu%2BkisKh%2BUufyHn9v7AAi6TsPbQaUgmd1YT9c4cpLXFPFcmPzsn5Vq09TA%2BZPpM%2FE4M5RbKyCRplQEF1bzFDnw6noAtRtWq08yMb%2FWP68JWK%2BqVaCzGN2cesWeiHUHgFjEtHHJ3jpyMtxjCvBfE5WJcT28N4t&X-Amz-Signature=b6eaf3a324bd124e975aa2f228845b4e34c946edf97a79ae61776b1e683460ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQ3SM4R%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUcvtbiRKaL7BdS0auns3fcseysW%2B06CvfAqyXv%2FOUxwIhAJeW2OYBYrB2lrDST3IWnWTM4WI0LJSBP3jNgsPlHXahKv8DCCsQABoMNjM3NDIzMTgzODA1Igyfk%2BgYeIjMWIryG78q3APbplQCPrFVflMFHsu8uWqreTn8UxZkEyWzFAcTrhnSHaqzJDJtqkhCh0JUAZlrbD%2BvSUhlyFi9ENZ46wGcGNMREy5BwYvF4DemQSRufHiIa%2BbYGmg%2BwUDQthR4mpn4UMpcEekdL0AyeKngcUESoWV45ugP7MHgEifXJ%2F8zaVKSPO1hRhZFbY6A%2FjDceQ4c5wvMv4j1SkNEvrA%2Fo2p6%2FvTQbGEL30%2F1byKSJLWWPEcZbXYuDK1MZBQ3dGWDWyWv2Zrczp4c%2FUpdoK6XdVZRT4rUkq3EELB614W2M2%2BKr%2BZ%2B7sMPFmaY3tF1jIcntFLAu4Sb%2Fh%2F4na6OO63ceQ9YDAJwxdnYu6Mn4YLn3HoRRvMLuZemLaDB5q8WmZf0h0kf3fnBULEtgl0L1KPTMExaF6N%2FVNs6azXyt3N5wKpkT7cm%2B564s1oidTH0xTR358w%2FBLpsoV23p1peCk%2BtC8Wtv2vuQrupoXBKGR0rUo5GAoyaSCY9jYc9rvHzyz4MVpAQ3Ns3FabA6vyyEroFNQmdQR%2FdWjHzOHntj5ey0uhzmLwjFIagRjfWjQzRfvafN5OIADugJp8ZweCGICo6%2Fwk7l6T2gNxjeEHXgkHyIBwn6704nLQVatlibZKGdGc6BDCxluLABjqkAapVg2h0uF1s6vbt69zwsV0OtAvowJYPG62HZOZzDp65kCE%2BMsfc1KlN8nlcTM%2BBu%2BkisKh%2BUufyHn9v7AAi6TsPbQaUgmd1YT9c4cpLXFPFcmPzsn5Vq09TA%2BZPpM%2FE4M5RbKyCRplQEF1bzFDnw6noAtRtWq08yMb%2FWP68JWK%2BqVaCzGN2cesWeiHUHgFjEtHHJ3jpyMtxjCvBfE5WJcT28N4t&X-Amz-Signature=6f170167b9e9c9efb728af41ece0d684314e50ae790748902f549bcd56683819&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQ3SM4R%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUcvtbiRKaL7BdS0auns3fcseysW%2B06CvfAqyXv%2FOUxwIhAJeW2OYBYrB2lrDST3IWnWTM4WI0LJSBP3jNgsPlHXahKv8DCCsQABoMNjM3NDIzMTgzODA1Igyfk%2BgYeIjMWIryG78q3APbplQCPrFVflMFHsu8uWqreTn8UxZkEyWzFAcTrhnSHaqzJDJtqkhCh0JUAZlrbD%2BvSUhlyFi9ENZ46wGcGNMREy5BwYvF4DemQSRufHiIa%2BbYGmg%2BwUDQthR4mpn4UMpcEekdL0AyeKngcUESoWV45ugP7MHgEifXJ%2F8zaVKSPO1hRhZFbY6A%2FjDceQ4c5wvMv4j1SkNEvrA%2Fo2p6%2FvTQbGEL30%2F1byKSJLWWPEcZbXYuDK1MZBQ3dGWDWyWv2Zrczp4c%2FUpdoK6XdVZRT4rUkq3EELB614W2M2%2BKr%2BZ%2B7sMPFmaY3tF1jIcntFLAu4Sb%2Fh%2F4na6OO63ceQ9YDAJwxdnYu6Mn4YLn3HoRRvMLuZemLaDB5q8WmZf0h0kf3fnBULEtgl0L1KPTMExaF6N%2FVNs6azXyt3N5wKpkT7cm%2B564s1oidTH0xTR358w%2FBLpsoV23p1peCk%2BtC8Wtv2vuQrupoXBKGR0rUo5GAoyaSCY9jYc9rvHzyz4MVpAQ3Ns3FabA6vyyEroFNQmdQR%2FdWjHzOHntj5ey0uhzmLwjFIagRjfWjQzRfvafN5OIADugJp8ZweCGICo6%2Fwk7l6T2gNxjeEHXgkHyIBwn6704nLQVatlibZKGdGc6BDCxluLABjqkAapVg2h0uF1s6vbt69zwsV0OtAvowJYPG62HZOZzDp65kCE%2BMsfc1KlN8nlcTM%2BBu%2BkisKh%2BUufyHn9v7AAi6TsPbQaUgmd1YT9c4cpLXFPFcmPzsn5Vq09TA%2BZPpM%2FE4M5RbKyCRplQEF1bzFDnw6noAtRtWq08yMb%2FWP68JWK%2BqVaCzGN2cesWeiHUHgFjEtHHJ3jpyMtxjCvBfE5WJcT28N4t&X-Amz-Signature=8a5ccabf24002a6fe6455c0c5fdba25b2ef11fc15fada0ad4789cd4bbf2c6a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQ3SM4R%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUcvtbiRKaL7BdS0auns3fcseysW%2B06CvfAqyXv%2FOUxwIhAJeW2OYBYrB2lrDST3IWnWTM4WI0LJSBP3jNgsPlHXahKv8DCCsQABoMNjM3NDIzMTgzODA1Igyfk%2BgYeIjMWIryG78q3APbplQCPrFVflMFHsu8uWqreTn8UxZkEyWzFAcTrhnSHaqzJDJtqkhCh0JUAZlrbD%2BvSUhlyFi9ENZ46wGcGNMREy5BwYvF4DemQSRufHiIa%2BbYGmg%2BwUDQthR4mpn4UMpcEekdL0AyeKngcUESoWV45ugP7MHgEifXJ%2F8zaVKSPO1hRhZFbY6A%2FjDceQ4c5wvMv4j1SkNEvrA%2Fo2p6%2FvTQbGEL30%2F1byKSJLWWPEcZbXYuDK1MZBQ3dGWDWyWv2Zrczp4c%2FUpdoK6XdVZRT4rUkq3EELB614W2M2%2BKr%2BZ%2B7sMPFmaY3tF1jIcntFLAu4Sb%2Fh%2F4na6OO63ceQ9YDAJwxdnYu6Mn4YLn3HoRRvMLuZemLaDB5q8WmZf0h0kf3fnBULEtgl0L1KPTMExaF6N%2FVNs6azXyt3N5wKpkT7cm%2B564s1oidTH0xTR358w%2FBLpsoV23p1peCk%2BtC8Wtv2vuQrupoXBKGR0rUo5GAoyaSCY9jYc9rvHzyz4MVpAQ3Ns3FabA6vyyEroFNQmdQR%2FdWjHzOHntj5ey0uhzmLwjFIagRjfWjQzRfvafN5OIADugJp8ZweCGICo6%2Fwk7l6T2gNxjeEHXgkHyIBwn6704nLQVatlibZKGdGc6BDCxluLABjqkAapVg2h0uF1s6vbt69zwsV0OtAvowJYPG62HZOZzDp65kCE%2BMsfc1KlN8nlcTM%2BBu%2BkisKh%2BUufyHn9v7AAi6TsPbQaUgmd1YT9c4cpLXFPFcmPzsn5Vq09TA%2BZPpM%2FE4M5RbKyCRplQEF1bzFDnw6noAtRtWq08yMb%2FWP68JWK%2BqVaCzGN2cesWeiHUHgFjEtHHJ3jpyMtxjCvBfE5WJcT28N4t&X-Amz-Signature=61913324c6cf8d7d65095093d0925920993d0945ff6cbd730ae66e8d71c4afc0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQ3SM4R%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUcvtbiRKaL7BdS0auns3fcseysW%2B06CvfAqyXv%2FOUxwIhAJeW2OYBYrB2lrDST3IWnWTM4WI0LJSBP3jNgsPlHXahKv8DCCsQABoMNjM3NDIzMTgzODA1Igyfk%2BgYeIjMWIryG78q3APbplQCPrFVflMFHsu8uWqreTn8UxZkEyWzFAcTrhnSHaqzJDJtqkhCh0JUAZlrbD%2BvSUhlyFi9ENZ46wGcGNMREy5BwYvF4DemQSRufHiIa%2BbYGmg%2BwUDQthR4mpn4UMpcEekdL0AyeKngcUESoWV45ugP7MHgEifXJ%2F8zaVKSPO1hRhZFbY6A%2FjDceQ4c5wvMv4j1SkNEvrA%2Fo2p6%2FvTQbGEL30%2F1byKSJLWWPEcZbXYuDK1MZBQ3dGWDWyWv2Zrczp4c%2FUpdoK6XdVZRT4rUkq3EELB614W2M2%2BKr%2BZ%2B7sMPFmaY3tF1jIcntFLAu4Sb%2Fh%2F4na6OO63ceQ9YDAJwxdnYu6Mn4YLn3HoRRvMLuZemLaDB5q8WmZf0h0kf3fnBULEtgl0L1KPTMExaF6N%2FVNs6azXyt3N5wKpkT7cm%2B564s1oidTH0xTR358w%2FBLpsoV23p1peCk%2BtC8Wtv2vuQrupoXBKGR0rUo5GAoyaSCY9jYc9rvHzyz4MVpAQ3Ns3FabA6vyyEroFNQmdQR%2FdWjHzOHntj5ey0uhzmLwjFIagRjfWjQzRfvafN5OIADugJp8ZweCGICo6%2Fwk7l6T2gNxjeEHXgkHyIBwn6704nLQVatlibZKGdGc6BDCxluLABjqkAapVg2h0uF1s6vbt69zwsV0OtAvowJYPG62HZOZzDp65kCE%2BMsfc1KlN8nlcTM%2BBu%2BkisKh%2BUufyHn9v7AAi6TsPbQaUgmd1YT9c4cpLXFPFcmPzsn5Vq09TA%2BZPpM%2FE4M5RbKyCRplQEF1bzFDnw6noAtRtWq08yMb%2FWP68JWK%2BqVaCzGN2cesWeiHUHgFjEtHHJ3jpyMtxjCvBfE5WJcT28N4t&X-Amz-Signature=32198cd94a598b65d33f2b67af1081ca7cdf574a23196daac10ebec2e40e1688&X-Amz-SignedHeaders=host&x-id=GetObject)
