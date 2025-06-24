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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3B35GM6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGou0g4k6LDkBwZNwW9%2Ba6k22l%2BSBqu3rl0%2BtmPP39HfAiAz8RuTPnZnSoY88hJyPY044gPDmVMkWL8997dhCZdgdyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMizixERYLHLWa8NSZKtwDSq%2FElcC4bc%2BagYausXXNFvqvCSYC5EirAgE5QnHSnUlFeR3VlYSg253BSlHguizRXqUy9so%2F1P77rjQfjjKebzE0EDz1iOyl5x6k6677sitcy%2Fqp1uBWN7gw79sPcd2u2rxmg0A6NJgGJsJIKX3hcGGk4kgDn1EhGKGe7kghBaujj4XKcNEwduws%2FTsbmCJdHaub3iyu7j21nllMizI%2FxwjUGYnE0FqtbI%2FyQwUKPyx3F3XXsdiNAO06IhOIjLQlX1YlVjrQAt3W6xnulfzYiojYu7A4gk0MaiALm%2BQcQ9jqkqZSsbTi5Q87%2FXsdGGPzl7xKaA6IZLG00wg9vVL2y8EhPNg%2FM01BCEZ2CIi2JuQSu6S8VcAQWww0XweDeSeT0xEHRNNjPbVV0xgLfprrD%2FCkvDP8XaPiygKZCcrevvg3af4SjW1z2H2t4aM0wUjsUIFYL%2Fl1uQrg%2FlGd1nJNCfYQQTjxxPF3IIzu6h3J2NQHbPOLeoyZNCsi1Tg3SeIHJf6s6kFeSuQkTJK47VG28cWVbmaQC86lT3cEY8mEqVPaGyrBQA8AfIe0IDWME66I2ABFlzS7jZr1cIAi4uJ7GkyRGby%2BprKxT43f%2BLPrS0ioiHzh28V7GOKzrbwwsbjswgY6pgHCZMy1pF0VMKza8xTXRguUR1rcE%2BYKDieKxTrpSQCk4YW9g2pAXi2qSe849YErPkeENXVEbCGxMn%2B3zzzmtlQs%2B3kL9Db4LkUY7hFS8JNtYE%2BrPVgTPwxScX7Czb08eAo9GVGdjI7Z3vKorejqQDw3NAKd1IV5imAet19EtvYizWXqhVBAMJ8uXFWZJtVa1PNhOsWtdP7vJ%2Bm9YxK%2FxD0wS%2BTj2Izy&X-Amz-Signature=8142bf8c5cc52241c10606fcf95d4a8e513d2e7a011f4f8b654ea9606735941e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3B35GM6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGou0g4k6LDkBwZNwW9%2Ba6k22l%2BSBqu3rl0%2BtmPP39HfAiAz8RuTPnZnSoY88hJyPY044gPDmVMkWL8997dhCZdgdyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMizixERYLHLWa8NSZKtwDSq%2FElcC4bc%2BagYausXXNFvqvCSYC5EirAgE5QnHSnUlFeR3VlYSg253BSlHguizRXqUy9so%2F1P77rjQfjjKebzE0EDz1iOyl5x6k6677sitcy%2Fqp1uBWN7gw79sPcd2u2rxmg0A6NJgGJsJIKX3hcGGk4kgDn1EhGKGe7kghBaujj4XKcNEwduws%2FTsbmCJdHaub3iyu7j21nllMizI%2FxwjUGYnE0FqtbI%2FyQwUKPyx3F3XXsdiNAO06IhOIjLQlX1YlVjrQAt3W6xnulfzYiojYu7A4gk0MaiALm%2BQcQ9jqkqZSsbTi5Q87%2FXsdGGPzl7xKaA6IZLG00wg9vVL2y8EhPNg%2FM01BCEZ2CIi2JuQSu6S8VcAQWww0XweDeSeT0xEHRNNjPbVV0xgLfprrD%2FCkvDP8XaPiygKZCcrevvg3af4SjW1z2H2t4aM0wUjsUIFYL%2Fl1uQrg%2FlGd1nJNCfYQQTjxxPF3IIzu6h3J2NQHbPOLeoyZNCsi1Tg3SeIHJf6s6kFeSuQkTJK47VG28cWVbmaQC86lT3cEY8mEqVPaGyrBQA8AfIe0IDWME66I2ABFlzS7jZr1cIAi4uJ7GkyRGby%2BprKxT43f%2BLPrS0ioiHzh28V7GOKzrbwwsbjswgY6pgHCZMy1pF0VMKza8xTXRguUR1rcE%2BYKDieKxTrpSQCk4YW9g2pAXi2qSe849YErPkeENXVEbCGxMn%2B3zzzmtlQs%2B3kL9Db4LkUY7hFS8JNtYE%2BrPVgTPwxScX7Czb08eAo9GVGdjI7Z3vKorejqQDw3NAKd1IV5imAet19EtvYizWXqhVBAMJ8uXFWZJtVa1PNhOsWtdP7vJ%2Bm9YxK%2FxD0wS%2BTj2Izy&X-Amz-Signature=8452349ace0cd7173c0e3dc42150e6a4e73f0f4acbac17c951c532ef52d0e72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3B35GM6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGou0g4k6LDkBwZNwW9%2Ba6k22l%2BSBqu3rl0%2BtmPP39HfAiAz8RuTPnZnSoY88hJyPY044gPDmVMkWL8997dhCZdgdyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMizixERYLHLWa8NSZKtwDSq%2FElcC4bc%2BagYausXXNFvqvCSYC5EirAgE5QnHSnUlFeR3VlYSg253BSlHguizRXqUy9so%2F1P77rjQfjjKebzE0EDz1iOyl5x6k6677sitcy%2Fqp1uBWN7gw79sPcd2u2rxmg0A6NJgGJsJIKX3hcGGk4kgDn1EhGKGe7kghBaujj4XKcNEwduws%2FTsbmCJdHaub3iyu7j21nllMizI%2FxwjUGYnE0FqtbI%2FyQwUKPyx3F3XXsdiNAO06IhOIjLQlX1YlVjrQAt3W6xnulfzYiojYu7A4gk0MaiALm%2BQcQ9jqkqZSsbTi5Q87%2FXsdGGPzl7xKaA6IZLG00wg9vVL2y8EhPNg%2FM01BCEZ2CIi2JuQSu6S8VcAQWww0XweDeSeT0xEHRNNjPbVV0xgLfprrD%2FCkvDP8XaPiygKZCcrevvg3af4SjW1z2H2t4aM0wUjsUIFYL%2Fl1uQrg%2FlGd1nJNCfYQQTjxxPF3IIzu6h3J2NQHbPOLeoyZNCsi1Tg3SeIHJf6s6kFeSuQkTJK47VG28cWVbmaQC86lT3cEY8mEqVPaGyrBQA8AfIe0IDWME66I2ABFlzS7jZr1cIAi4uJ7GkyRGby%2BprKxT43f%2BLPrS0ioiHzh28V7GOKzrbwwsbjswgY6pgHCZMy1pF0VMKza8xTXRguUR1rcE%2BYKDieKxTrpSQCk4YW9g2pAXi2qSe849YErPkeENXVEbCGxMn%2B3zzzmtlQs%2B3kL9Db4LkUY7hFS8JNtYE%2BrPVgTPwxScX7Czb08eAo9GVGdjI7Z3vKorejqQDw3NAKd1IV5imAet19EtvYizWXqhVBAMJ8uXFWZJtVa1PNhOsWtdP7vJ%2Bm9YxK%2FxD0wS%2BTj2Izy&X-Amz-Signature=cff0a2f653c0eeb9250f45636a01bff0d94dfbe2416f0d0258403c2f6976be9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3B35GM6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGou0g4k6LDkBwZNwW9%2Ba6k22l%2BSBqu3rl0%2BtmPP39HfAiAz8RuTPnZnSoY88hJyPY044gPDmVMkWL8997dhCZdgdyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMizixERYLHLWa8NSZKtwDSq%2FElcC4bc%2BagYausXXNFvqvCSYC5EirAgE5QnHSnUlFeR3VlYSg253BSlHguizRXqUy9so%2F1P77rjQfjjKebzE0EDz1iOyl5x6k6677sitcy%2Fqp1uBWN7gw79sPcd2u2rxmg0A6NJgGJsJIKX3hcGGk4kgDn1EhGKGe7kghBaujj4XKcNEwduws%2FTsbmCJdHaub3iyu7j21nllMizI%2FxwjUGYnE0FqtbI%2FyQwUKPyx3F3XXsdiNAO06IhOIjLQlX1YlVjrQAt3W6xnulfzYiojYu7A4gk0MaiALm%2BQcQ9jqkqZSsbTi5Q87%2FXsdGGPzl7xKaA6IZLG00wg9vVL2y8EhPNg%2FM01BCEZ2CIi2JuQSu6S8VcAQWww0XweDeSeT0xEHRNNjPbVV0xgLfprrD%2FCkvDP8XaPiygKZCcrevvg3af4SjW1z2H2t4aM0wUjsUIFYL%2Fl1uQrg%2FlGd1nJNCfYQQTjxxPF3IIzu6h3J2NQHbPOLeoyZNCsi1Tg3SeIHJf6s6kFeSuQkTJK47VG28cWVbmaQC86lT3cEY8mEqVPaGyrBQA8AfIe0IDWME66I2ABFlzS7jZr1cIAi4uJ7GkyRGby%2BprKxT43f%2BLPrS0ioiHzh28V7GOKzrbwwsbjswgY6pgHCZMy1pF0VMKza8xTXRguUR1rcE%2BYKDieKxTrpSQCk4YW9g2pAXi2qSe849YErPkeENXVEbCGxMn%2B3zzzmtlQs%2B3kL9Db4LkUY7hFS8JNtYE%2BrPVgTPwxScX7Czb08eAo9GVGdjI7Z3vKorejqQDw3NAKd1IV5imAet19EtvYizWXqhVBAMJ8uXFWZJtVa1PNhOsWtdP7vJ%2Bm9YxK%2FxD0wS%2BTj2Izy&X-Amz-Signature=3222eb989e7c9dadd306cbe3950a022621666e7975fa761c3fc0fda4f04b3a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3B35GM6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGou0g4k6LDkBwZNwW9%2Ba6k22l%2BSBqu3rl0%2BtmPP39HfAiAz8RuTPnZnSoY88hJyPY044gPDmVMkWL8997dhCZdgdyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMizixERYLHLWa8NSZKtwDSq%2FElcC4bc%2BagYausXXNFvqvCSYC5EirAgE5QnHSnUlFeR3VlYSg253BSlHguizRXqUy9so%2F1P77rjQfjjKebzE0EDz1iOyl5x6k6677sitcy%2Fqp1uBWN7gw79sPcd2u2rxmg0A6NJgGJsJIKX3hcGGk4kgDn1EhGKGe7kghBaujj4XKcNEwduws%2FTsbmCJdHaub3iyu7j21nllMizI%2FxwjUGYnE0FqtbI%2FyQwUKPyx3F3XXsdiNAO06IhOIjLQlX1YlVjrQAt3W6xnulfzYiojYu7A4gk0MaiALm%2BQcQ9jqkqZSsbTi5Q87%2FXsdGGPzl7xKaA6IZLG00wg9vVL2y8EhPNg%2FM01BCEZ2CIi2JuQSu6S8VcAQWww0XweDeSeT0xEHRNNjPbVV0xgLfprrD%2FCkvDP8XaPiygKZCcrevvg3af4SjW1z2H2t4aM0wUjsUIFYL%2Fl1uQrg%2FlGd1nJNCfYQQTjxxPF3IIzu6h3J2NQHbPOLeoyZNCsi1Tg3SeIHJf6s6kFeSuQkTJK47VG28cWVbmaQC86lT3cEY8mEqVPaGyrBQA8AfIe0IDWME66I2ABFlzS7jZr1cIAi4uJ7GkyRGby%2BprKxT43f%2BLPrS0ioiHzh28V7GOKzrbwwsbjswgY6pgHCZMy1pF0VMKza8xTXRguUR1rcE%2BYKDieKxTrpSQCk4YW9g2pAXi2qSe849YErPkeENXVEbCGxMn%2B3zzzmtlQs%2B3kL9Db4LkUY7hFS8JNtYE%2BrPVgTPwxScX7Czb08eAo9GVGdjI7Z3vKorejqQDw3NAKd1IV5imAet19EtvYizWXqhVBAMJ8uXFWZJtVa1PNhOsWtdP7vJ%2Bm9YxK%2FxD0wS%2BTj2Izy&X-Amz-Signature=6517d236968b10d29614abadd5c47da22ea2e1794b19080b96e3e3b6f427058c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3B35GM6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGou0g4k6LDkBwZNwW9%2Ba6k22l%2BSBqu3rl0%2BtmPP39HfAiAz8RuTPnZnSoY88hJyPY044gPDmVMkWL8997dhCZdgdyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMizixERYLHLWa8NSZKtwDSq%2FElcC4bc%2BagYausXXNFvqvCSYC5EirAgE5QnHSnUlFeR3VlYSg253BSlHguizRXqUy9so%2F1P77rjQfjjKebzE0EDz1iOyl5x6k6677sitcy%2Fqp1uBWN7gw79sPcd2u2rxmg0A6NJgGJsJIKX3hcGGk4kgDn1EhGKGe7kghBaujj4XKcNEwduws%2FTsbmCJdHaub3iyu7j21nllMizI%2FxwjUGYnE0FqtbI%2FyQwUKPyx3F3XXsdiNAO06IhOIjLQlX1YlVjrQAt3W6xnulfzYiojYu7A4gk0MaiALm%2BQcQ9jqkqZSsbTi5Q87%2FXsdGGPzl7xKaA6IZLG00wg9vVL2y8EhPNg%2FM01BCEZ2CIi2JuQSu6S8VcAQWww0XweDeSeT0xEHRNNjPbVV0xgLfprrD%2FCkvDP8XaPiygKZCcrevvg3af4SjW1z2H2t4aM0wUjsUIFYL%2Fl1uQrg%2FlGd1nJNCfYQQTjxxPF3IIzu6h3J2NQHbPOLeoyZNCsi1Tg3SeIHJf6s6kFeSuQkTJK47VG28cWVbmaQC86lT3cEY8mEqVPaGyrBQA8AfIe0IDWME66I2ABFlzS7jZr1cIAi4uJ7GkyRGby%2BprKxT43f%2BLPrS0ioiHzh28V7GOKzrbwwsbjswgY6pgHCZMy1pF0VMKza8xTXRguUR1rcE%2BYKDieKxTrpSQCk4YW9g2pAXi2qSe849YErPkeENXVEbCGxMn%2B3zzzmtlQs%2B3kL9Db4LkUY7hFS8JNtYE%2BrPVgTPwxScX7Czb08eAo9GVGdjI7Z3vKorejqQDw3NAKd1IV5imAet19EtvYizWXqhVBAMJ8uXFWZJtVa1PNhOsWtdP7vJ%2Bm9YxK%2FxD0wS%2BTj2Izy&X-Amz-Signature=d86fa33201e484e9ca4e3dc8118ba1edce31d670c117cc6d076910a0c84042c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
