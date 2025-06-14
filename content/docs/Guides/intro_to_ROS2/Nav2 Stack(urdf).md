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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOU4LUQX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC1rD93ZtwbFNT4Sx20XfEgeAFNR9ggOyvoWfnkDOyxKgIhALMx6ZqkVaEQ3wx7VEY%2FfPacuwYInXi%2BCOxccQK9wULHKv8DCCsQABoMNjM3NDIzMTgzODA1IgyHr8D5xOb0wE454gAq3ANoPo9JlscvYHNDRpqgtM2N0LcXeg71FjwVRm8WomxPoMxiQv0ZLgxVbUcM%2BJYAJ4ls13U%2B7NJgRZ%2BeK2040MnioNYwupWWr6vdpHUj1o55TJ%2BwHEzZCgrl7mp0T8Ry7BdnWjBfewL42jdJcexeTiFHNRw4ZYG6MsxKNVIzu1D7VbFtKEDiBlbZ8czW7xHGL4wWjW%2BJ39Y9v6EmxJQDWHqUkFRUMFPail8SdUn8sF87U404MyoVW8eMp%2FvKJjyb3EV8MVt2dDLJbYIecN%2Ff%2BPdeq9izFlsiJkNa1mAsWharXQvhFVyEV5C1QPxlDUky77lFsZGz3O3TxoH5akdxpMFkpn9eliDcOgYvHB9AuKPb2c8jjQ%2BvNFz1gzeQC6xN2V0%2BhcGkJ4arX9U%2Fcoi1PLgu8YK7VOlb3HYLJCvmuF%2BRo05J0JUIVkD%2BqA70IKnFhQi%2FFXA6O2HP7dbw%2BP%2Fm52LsZOTbomSeNkdThvrFc7ltTrOMrDsVkSfZyuLqeeZdZvIekoH4RRg%2BROv1KBpnGsyOTzMhpmGEVDySEq9KL5cMoGAdnkS4MV5O7tluHSvzbrdXK4XfXnwfNmIMbz5GimJozAB4syYGh1dylDc6DOSUrqbJNDdTg6REBZal7jDEk7XCBjqkAeSzn73qrBNxEqfdTx30KP0RO%2BC4e2wwpMWTy2KczNEGZeCPWcT8CnKEl49dp5lETCQcXpzjZJy4IWoEQVSYOKlurrQe5zb8ADi3yHGE7YFYeNArybHNx%2F5Tl9NhL%2B6GtmceJLa3fLSUz6zfUwZzWrTUg07fEuOwzRR60AssyAeZO9s7odFVAvxdsE1bIwfrymGrwd25zUO6OuUPE%2FrHTf6tyOK1&X-Amz-Signature=f6344f86c38e4522afd2f094b084de8083abf3a0bb61ca7d75a0870ca3cbe22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOU4LUQX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC1rD93ZtwbFNT4Sx20XfEgeAFNR9ggOyvoWfnkDOyxKgIhALMx6ZqkVaEQ3wx7VEY%2FfPacuwYInXi%2BCOxccQK9wULHKv8DCCsQABoMNjM3NDIzMTgzODA1IgyHr8D5xOb0wE454gAq3ANoPo9JlscvYHNDRpqgtM2N0LcXeg71FjwVRm8WomxPoMxiQv0ZLgxVbUcM%2BJYAJ4ls13U%2B7NJgRZ%2BeK2040MnioNYwupWWr6vdpHUj1o55TJ%2BwHEzZCgrl7mp0T8Ry7BdnWjBfewL42jdJcexeTiFHNRw4ZYG6MsxKNVIzu1D7VbFtKEDiBlbZ8czW7xHGL4wWjW%2BJ39Y9v6EmxJQDWHqUkFRUMFPail8SdUn8sF87U404MyoVW8eMp%2FvKJjyb3EV8MVt2dDLJbYIecN%2Ff%2BPdeq9izFlsiJkNa1mAsWharXQvhFVyEV5C1QPxlDUky77lFsZGz3O3TxoH5akdxpMFkpn9eliDcOgYvHB9AuKPb2c8jjQ%2BvNFz1gzeQC6xN2V0%2BhcGkJ4arX9U%2Fcoi1PLgu8YK7VOlb3HYLJCvmuF%2BRo05J0JUIVkD%2BqA70IKnFhQi%2FFXA6O2HP7dbw%2BP%2Fm52LsZOTbomSeNkdThvrFc7ltTrOMrDsVkSfZyuLqeeZdZvIekoH4RRg%2BROv1KBpnGsyOTzMhpmGEVDySEq9KL5cMoGAdnkS4MV5O7tluHSvzbrdXK4XfXnwfNmIMbz5GimJozAB4syYGh1dylDc6DOSUrqbJNDdTg6REBZal7jDEk7XCBjqkAeSzn73qrBNxEqfdTx30KP0RO%2BC4e2wwpMWTy2KczNEGZeCPWcT8CnKEl49dp5lETCQcXpzjZJy4IWoEQVSYOKlurrQe5zb8ADi3yHGE7YFYeNArybHNx%2F5Tl9NhL%2B6GtmceJLa3fLSUz6zfUwZzWrTUg07fEuOwzRR60AssyAeZO9s7odFVAvxdsE1bIwfrymGrwd25zUO6OuUPE%2FrHTf6tyOK1&X-Amz-Signature=be2a297922f33929a921edad38a55fe0c8057d210b2eb76707d26561718d8052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOU4LUQX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC1rD93ZtwbFNT4Sx20XfEgeAFNR9ggOyvoWfnkDOyxKgIhALMx6ZqkVaEQ3wx7VEY%2FfPacuwYInXi%2BCOxccQK9wULHKv8DCCsQABoMNjM3NDIzMTgzODA1IgyHr8D5xOb0wE454gAq3ANoPo9JlscvYHNDRpqgtM2N0LcXeg71FjwVRm8WomxPoMxiQv0ZLgxVbUcM%2BJYAJ4ls13U%2B7NJgRZ%2BeK2040MnioNYwupWWr6vdpHUj1o55TJ%2BwHEzZCgrl7mp0T8Ry7BdnWjBfewL42jdJcexeTiFHNRw4ZYG6MsxKNVIzu1D7VbFtKEDiBlbZ8czW7xHGL4wWjW%2BJ39Y9v6EmxJQDWHqUkFRUMFPail8SdUn8sF87U404MyoVW8eMp%2FvKJjyb3EV8MVt2dDLJbYIecN%2Ff%2BPdeq9izFlsiJkNa1mAsWharXQvhFVyEV5C1QPxlDUky77lFsZGz3O3TxoH5akdxpMFkpn9eliDcOgYvHB9AuKPb2c8jjQ%2BvNFz1gzeQC6xN2V0%2BhcGkJ4arX9U%2Fcoi1PLgu8YK7VOlb3HYLJCvmuF%2BRo05J0JUIVkD%2BqA70IKnFhQi%2FFXA6O2HP7dbw%2BP%2Fm52LsZOTbomSeNkdThvrFc7ltTrOMrDsVkSfZyuLqeeZdZvIekoH4RRg%2BROv1KBpnGsyOTzMhpmGEVDySEq9KL5cMoGAdnkS4MV5O7tluHSvzbrdXK4XfXnwfNmIMbz5GimJozAB4syYGh1dylDc6DOSUrqbJNDdTg6REBZal7jDEk7XCBjqkAeSzn73qrBNxEqfdTx30KP0RO%2BC4e2wwpMWTy2KczNEGZeCPWcT8CnKEl49dp5lETCQcXpzjZJy4IWoEQVSYOKlurrQe5zb8ADi3yHGE7YFYeNArybHNx%2F5Tl9NhL%2B6GtmceJLa3fLSUz6zfUwZzWrTUg07fEuOwzRR60AssyAeZO9s7odFVAvxdsE1bIwfrymGrwd25zUO6OuUPE%2FrHTf6tyOK1&X-Amz-Signature=4e3b196d2f2d5b4c2f83855e60ae7e45075a23a163c8824a574d3f3bb3dc9fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOU4LUQX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC1rD93ZtwbFNT4Sx20XfEgeAFNR9ggOyvoWfnkDOyxKgIhALMx6ZqkVaEQ3wx7VEY%2FfPacuwYInXi%2BCOxccQK9wULHKv8DCCsQABoMNjM3NDIzMTgzODA1IgyHr8D5xOb0wE454gAq3ANoPo9JlscvYHNDRpqgtM2N0LcXeg71FjwVRm8WomxPoMxiQv0ZLgxVbUcM%2BJYAJ4ls13U%2B7NJgRZ%2BeK2040MnioNYwupWWr6vdpHUj1o55TJ%2BwHEzZCgrl7mp0T8Ry7BdnWjBfewL42jdJcexeTiFHNRw4ZYG6MsxKNVIzu1D7VbFtKEDiBlbZ8czW7xHGL4wWjW%2BJ39Y9v6EmxJQDWHqUkFRUMFPail8SdUn8sF87U404MyoVW8eMp%2FvKJjyb3EV8MVt2dDLJbYIecN%2Ff%2BPdeq9izFlsiJkNa1mAsWharXQvhFVyEV5C1QPxlDUky77lFsZGz3O3TxoH5akdxpMFkpn9eliDcOgYvHB9AuKPb2c8jjQ%2BvNFz1gzeQC6xN2V0%2BhcGkJ4arX9U%2Fcoi1PLgu8YK7VOlb3HYLJCvmuF%2BRo05J0JUIVkD%2BqA70IKnFhQi%2FFXA6O2HP7dbw%2BP%2Fm52LsZOTbomSeNkdThvrFc7ltTrOMrDsVkSfZyuLqeeZdZvIekoH4RRg%2BROv1KBpnGsyOTzMhpmGEVDySEq9KL5cMoGAdnkS4MV5O7tluHSvzbrdXK4XfXnwfNmIMbz5GimJozAB4syYGh1dylDc6DOSUrqbJNDdTg6REBZal7jDEk7XCBjqkAeSzn73qrBNxEqfdTx30KP0RO%2BC4e2wwpMWTy2KczNEGZeCPWcT8CnKEl49dp5lETCQcXpzjZJy4IWoEQVSYOKlurrQe5zb8ADi3yHGE7YFYeNArybHNx%2F5Tl9NhL%2B6GtmceJLa3fLSUz6zfUwZzWrTUg07fEuOwzRR60AssyAeZO9s7odFVAvxdsE1bIwfrymGrwd25zUO6OuUPE%2FrHTf6tyOK1&X-Amz-Signature=7b1d4838314dd495f4f874b7ab04d0fad8a71f46b78ddeebef7d2cc4bef815d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOU4LUQX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC1rD93ZtwbFNT4Sx20XfEgeAFNR9ggOyvoWfnkDOyxKgIhALMx6ZqkVaEQ3wx7VEY%2FfPacuwYInXi%2BCOxccQK9wULHKv8DCCsQABoMNjM3NDIzMTgzODA1IgyHr8D5xOb0wE454gAq3ANoPo9JlscvYHNDRpqgtM2N0LcXeg71FjwVRm8WomxPoMxiQv0ZLgxVbUcM%2BJYAJ4ls13U%2B7NJgRZ%2BeK2040MnioNYwupWWr6vdpHUj1o55TJ%2BwHEzZCgrl7mp0T8Ry7BdnWjBfewL42jdJcexeTiFHNRw4ZYG6MsxKNVIzu1D7VbFtKEDiBlbZ8czW7xHGL4wWjW%2BJ39Y9v6EmxJQDWHqUkFRUMFPail8SdUn8sF87U404MyoVW8eMp%2FvKJjyb3EV8MVt2dDLJbYIecN%2Ff%2BPdeq9izFlsiJkNa1mAsWharXQvhFVyEV5C1QPxlDUky77lFsZGz3O3TxoH5akdxpMFkpn9eliDcOgYvHB9AuKPb2c8jjQ%2BvNFz1gzeQC6xN2V0%2BhcGkJ4arX9U%2Fcoi1PLgu8YK7VOlb3HYLJCvmuF%2BRo05J0JUIVkD%2BqA70IKnFhQi%2FFXA6O2HP7dbw%2BP%2Fm52LsZOTbomSeNkdThvrFc7ltTrOMrDsVkSfZyuLqeeZdZvIekoH4RRg%2BROv1KBpnGsyOTzMhpmGEVDySEq9KL5cMoGAdnkS4MV5O7tluHSvzbrdXK4XfXnwfNmIMbz5GimJozAB4syYGh1dylDc6DOSUrqbJNDdTg6REBZal7jDEk7XCBjqkAeSzn73qrBNxEqfdTx30KP0RO%2BC4e2wwpMWTy2KczNEGZeCPWcT8CnKEl49dp5lETCQcXpzjZJy4IWoEQVSYOKlurrQe5zb8ADi3yHGE7YFYeNArybHNx%2F5Tl9NhL%2B6GtmceJLa3fLSUz6zfUwZzWrTUg07fEuOwzRR60AssyAeZO9s7odFVAvxdsE1bIwfrymGrwd25zUO6OuUPE%2FrHTf6tyOK1&X-Amz-Signature=9234ad638e04972494bcf50891174d88d89f478d5362a06ed3b992fa0870c621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOU4LUQX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC1rD93ZtwbFNT4Sx20XfEgeAFNR9ggOyvoWfnkDOyxKgIhALMx6ZqkVaEQ3wx7VEY%2FfPacuwYInXi%2BCOxccQK9wULHKv8DCCsQABoMNjM3NDIzMTgzODA1IgyHr8D5xOb0wE454gAq3ANoPo9JlscvYHNDRpqgtM2N0LcXeg71FjwVRm8WomxPoMxiQv0ZLgxVbUcM%2BJYAJ4ls13U%2B7NJgRZ%2BeK2040MnioNYwupWWr6vdpHUj1o55TJ%2BwHEzZCgrl7mp0T8Ry7BdnWjBfewL42jdJcexeTiFHNRw4ZYG6MsxKNVIzu1D7VbFtKEDiBlbZ8czW7xHGL4wWjW%2BJ39Y9v6EmxJQDWHqUkFRUMFPail8SdUn8sF87U404MyoVW8eMp%2FvKJjyb3EV8MVt2dDLJbYIecN%2Ff%2BPdeq9izFlsiJkNa1mAsWharXQvhFVyEV5C1QPxlDUky77lFsZGz3O3TxoH5akdxpMFkpn9eliDcOgYvHB9AuKPb2c8jjQ%2BvNFz1gzeQC6xN2V0%2BhcGkJ4arX9U%2Fcoi1PLgu8YK7VOlb3HYLJCvmuF%2BRo05J0JUIVkD%2BqA70IKnFhQi%2FFXA6O2HP7dbw%2BP%2Fm52LsZOTbomSeNkdThvrFc7ltTrOMrDsVkSfZyuLqeeZdZvIekoH4RRg%2BROv1KBpnGsyOTzMhpmGEVDySEq9KL5cMoGAdnkS4MV5O7tluHSvzbrdXK4XfXnwfNmIMbz5GimJozAB4syYGh1dylDc6DOSUrqbJNDdTg6REBZal7jDEk7XCBjqkAeSzn73qrBNxEqfdTx30KP0RO%2BC4e2wwpMWTy2KczNEGZeCPWcT8CnKEl49dp5lETCQcXpzjZJy4IWoEQVSYOKlurrQe5zb8ADi3yHGE7YFYeNArybHNx%2F5Tl9NhL%2B6GtmceJLa3fLSUz6zfUwZzWrTUg07fEuOwzRR60AssyAeZO9s7odFVAvxdsE1bIwfrymGrwd25zUO6OuUPE%2FrHTf6tyOK1&X-Amz-Signature=7c12e3ea547bc074064e607c4c768109163cf24f1f9680a38dca9cde46f9bce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
