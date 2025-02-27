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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULZAME7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCsjz%2BKZMEuflBNuw0VYErGRMjXwDGym417sieWtiuCLgIhAJC4zXIrjQ5oNsW9Yb%2BP%2FwOVbjN7y3nBWN2ZBT%2BTnk8CKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4bCCe9mswP26Lozgq3AOjvL0FzaFy%2BRF%2BcEp%2BDc5jDmzl%2B%2FIJvivOxvUZAq%2FfxoEHhl1JRuLu17Jsg5g%2BbRBmQIt235SfzK6Ispt%2FMD9xwrcPgsUCuUAED1YIb2HexsG2yjMvzaxwRmLPkOO9%2FuOS0Megw7UaSF0vzCYRUSpiLeIlmSg0Rrsq4H4ag%2F440fQibMeyVPnlzOPhLomdS8Vj6UAg2ONxyMWGJdYENf6J71pUy5Y59Uap4t5Bec7RrNd1wAFkZ7q98VBgQvJIXjF%2BRIMkb5wLYs3sXowWUyhT7%2FKCa4Db0loqNu6SNpA8LpqVa1GoO3wlsrwk7fhleY7n048%2BrzDvFGWvfm5voXBYnVfGOV5%2F3mvNa8%2FZ5MCwP4vbm6JB9SO8pDofIvRauUofoFmjm5B1UoID5pQ%2BStoECiF2pfUCGWbSu8NFeR0NyzB19Hn%2F73eW39f3ib8lrXjiAauhHeLe1cmkdQoJUgQbhKhG1Ej4dsSjz%2BBgU%2BHxDJ35c634jnqWJk2qDV%2B6CHAhqMBxUUETCxm9DBuZ6Di9Ygn4mruhyQH6F%2BdUu34A39%2B3M6aU4BLQdZd2uMJCJluJ6cxajvZHcIOIJTjcI%2BWnt%2FhIdvUcNGsTsVVBW%2BvTCZXaZ%2F5h3ELwM7V1NDDl0YC%2BBjqkAWdPDIiNAMUftsBGu4dZWWyA4tMvp0QB2iwZjmeEnPHHx11WttIAxb3p1aFbN%2FnyWkMA7OqbOwdkZI5uooNwpzZzy5wE6id7z%2Fu2C41yOi4HKsjoTmLik9Zp0mX0qwoeaoslWZPbYWi8vqUBNWszZJ89Zfo98%2BuDFpLNvS2SHM175G94RCxT87UreJ5k6dSZ%2FYj%2FC4uxQH4id8nzRMt%2BzcgYHaW%2B&X-Amz-Signature=511b98a6743c0a39a3121a67e474f86080e8b93b4c89168334e33eaf0fa8fb76&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULZAME7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCsjz%2BKZMEuflBNuw0VYErGRMjXwDGym417sieWtiuCLgIhAJC4zXIrjQ5oNsW9Yb%2BP%2FwOVbjN7y3nBWN2ZBT%2BTnk8CKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4bCCe9mswP26Lozgq3AOjvL0FzaFy%2BRF%2BcEp%2BDc5jDmzl%2B%2FIJvivOxvUZAq%2FfxoEHhl1JRuLu17Jsg5g%2BbRBmQIt235SfzK6Ispt%2FMD9xwrcPgsUCuUAED1YIb2HexsG2yjMvzaxwRmLPkOO9%2FuOS0Megw7UaSF0vzCYRUSpiLeIlmSg0Rrsq4H4ag%2F440fQibMeyVPnlzOPhLomdS8Vj6UAg2ONxyMWGJdYENf6J71pUy5Y59Uap4t5Bec7RrNd1wAFkZ7q98VBgQvJIXjF%2BRIMkb5wLYs3sXowWUyhT7%2FKCa4Db0loqNu6SNpA8LpqVa1GoO3wlsrwk7fhleY7n048%2BrzDvFGWvfm5voXBYnVfGOV5%2F3mvNa8%2FZ5MCwP4vbm6JB9SO8pDofIvRauUofoFmjm5B1UoID5pQ%2BStoECiF2pfUCGWbSu8NFeR0NyzB19Hn%2F73eW39f3ib8lrXjiAauhHeLe1cmkdQoJUgQbhKhG1Ej4dsSjz%2BBgU%2BHxDJ35c634jnqWJk2qDV%2B6CHAhqMBxUUETCxm9DBuZ6Di9Ygn4mruhyQH6F%2BdUu34A39%2B3M6aU4BLQdZd2uMJCJluJ6cxajvZHcIOIJTjcI%2BWnt%2FhIdvUcNGsTsVVBW%2BvTCZXaZ%2F5h3ELwM7V1NDDl0YC%2BBjqkAWdPDIiNAMUftsBGu4dZWWyA4tMvp0QB2iwZjmeEnPHHx11WttIAxb3p1aFbN%2FnyWkMA7OqbOwdkZI5uooNwpzZzy5wE6id7z%2Fu2C41yOi4HKsjoTmLik9Zp0mX0qwoeaoslWZPbYWi8vqUBNWszZJ89Zfo98%2BuDFpLNvS2SHM175G94RCxT87UreJ5k6dSZ%2FYj%2FC4uxQH4id8nzRMt%2BzcgYHaW%2B&X-Amz-Signature=ca9216b8b8961b71de67add2128a0726b3a3ed5c64a20cefa1a3b2ffb6bca01c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULZAME7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCsjz%2BKZMEuflBNuw0VYErGRMjXwDGym417sieWtiuCLgIhAJC4zXIrjQ5oNsW9Yb%2BP%2FwOVbjN7y3nBWN2ZBT%2BTnk8CKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4bCCe9mswP26Lozgq3AOjvL0FzaFy%2BRF%2BcEp%2BDc5jDmzl%2B%2FIJvivOxvUZAq%2FfxoEHhl1JRuLu17Jsg5g%2BbRBmQIt235SfzK6Ispt%2FMD9xwrcPgsUCuUAED1YIb2HexsG2yjMvzaxwRmLPkOO9%2FuOS0Megw7UaSF0vzCYRUSpiLeIlmSg0Rrsq4H4ag%2F440fQibMeyVPnlzOPhLomdS8Vj6UAg2ONxyMWGJdYENf6J71pUy5Y59Uap4t5Bec7RrNd1wAFkZ7q98VBgQvJIXjF%2BRIMkb5wLYs3sXowWUyhT7%2FKCa4Db0loqNu6SNpA8LpqVa1GoO3wlsrwk7fhleY7n048%2BrzDvFGWvfm5voXBYnVfGOV5%2F3mvNa8%2FZ5MCwP4vbm6JB9SO8pDofIvRauUofoFmjm5B1UoID5pQ%2BStoECiF2pfUCGWbSu8NFeR0NyzB19Hn%2F73eW39f3ib8lrXjiAauhHeLe1cmkdQoJUgQbhKhG1Ej4dsSjz%2BBgU%2BHxDJ35c634jnqWJk2qDV%2B6CHAhqMBxUUETCxm9DBuZ6Di9Ygn4mruhyQH6F%2BdUu34A39%2B3M6aU4BLQdZd2uMJCJluJ6cxajvZHcIOIJTjcI%2BWnt%2FhIdvUcNGsTsVVBW%2BvTCZXaZ%2F5h3ELwM7V1NDDl0YC%2BBjqkAWdPDIiNAMUftsBGu4dZWWyA4tMvp0QB2iwZjmeEnPHHx11WttIAxb3p1aFbN%2FnyWkMA7OqbOwdkZI5uooNwpzZzy5wE6id7z%2Fu2C41yOi4HKsjoTmLik9Zp0mX0qwoeaoslWZPbYWi8vqUBNWszZJ89Zfo98%2BuDFpLNvS2SHM175G94RCxT87UreJ5k6dSZ%2FYj%2FC4uxQH4id8nzRMt%2BzcgYHaW%2B&X-Amz-Signature=47a80b4596c7c0c6ebb55f3b47e642dead0377767597a6fa60f1fcc6ddd177aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULZAME7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCsjz%2BKZMEuflBNuw0VYErGRMjXwDGym417sieWtiuCLgIhAJC4zXIrjQ5oNsW9Yb%2BP%2FwOVbjN7y3nBWN2ZBT%2BTnk8CKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4bCCe9mswP26Lozgq3AOjvL0FzaFy%2BRF%2BcEp%2BDc5jDmzl%2B%2FIJvivOxvUZAq%2FfxoEHhl1JRuLu17Jsg5g%2BbRBmQIt235SfzK6Ispt%2FMD9xwrcPgsUCuUAED1YIb2HexsG2yjMvzaxwRmLPkOO9%2FuOS0Megw7UaSF0vzCYRUSpiLeIlmSg0Rrsq4H4ag%2F440fQibMeyVPnlzOPhLomdS8Vj6UAg2ONxyMWGJdYENf6J71pUy5Y59Uap4t5Bec7RrNd1wAFkZ7q98VBgQvJIXjF%2BRIMkb5wLYs3sXowWUyhT7%2FKCa4Db0loqNu6SNpA8LpqVa1GoO3wlsrwk7fhleY7n048%2BrzDvFGWvfm5voXBYnVfGOV5%2F3mvNa8%2FZ5MCwP4vbm6JB9SO8pDofIvRauUofoFmjm5B1UoID5pQ%2BStoECiF2pfUCGWbSu8NFeR0NyzB19Hn%2F73eW39f3ib8lrXjiAauhHeLe1cmkdQoJUgQbhKhG1Ej4dsSjz%2BBgU%2BHxDJ35c634jnqWJk2qDV%2B6CHAhqMBxUUETCxm9DBuZ6Di9Ygn4mruhyQH6F%2BdUu34A39%2B3M6aU4BLQdZd2uMJCJluJ6cxajvZHcIOIJTjcI%2BWnt%2FhIdvUcNGsTsVVBW%2BvTCZXaZ%2F5h3ELwM7V1NDDl0YC%2BBjqkAWdPDIiNAMUftsBGu4dZWWyA4tMvp0QB2iwZjmeEnPHHx11WttIAxb3p1aFbN%2FnyWkMA7OqbOwdkZI5uooNwpzZzy5wE6id7z%2Fu2C41yOi4HKsjoTmLik9Zp0mX0qwoeaoslWZPbYWi8vqUBNWszZJ89Zfo98%2BuDFpLNvS2SHM175G94RCxT87UreJ5k6dSZ%2FYj%2FC4uxQH4id8nzRMt%2BzcgYHaW%2B&X-Amz-Signature=162af747b8b8630dac24b26e679c5f754e03e339343d5c0f69cc64ef2547bb9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULZAME7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCsjz%2BKZMEuflBNuw0VYErGRMjXwDGym417sieWtiuCLgIhAJC4zXIrjQ5oNsW9Yb%2BP%2FwOVbjN7y3nBWN2ZBT%2BTnk8CKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4bCCe9mswP26Lozgq3AOjvL0FzaFy%2BRF%2BcEp%2BDc5jDmzl%2B%2FIJvivOxvUZAq%2FfxoEHhl1JRuLu17Jsg5g%2BbRBmQIt235SfzK6Ispt%2FMD9xwrcPgsUCuUAED1YIb2HexsG2yjMvzaxwRmLPkOO9%2FuOS0Megw7UaSF0vzCYRUSpiLeIlmSg0Rrsq4H4ag%2F440fQibMeyVPnlzOPhLomdS8Vj6UAg2ONxyMWGJdYENf6J71pUy5Y59Uap4t5Bec7RrNd1wAFkZ7q98VBgQvJIXjF%2BRIMkb5wLYs3sXowWUyhT7%2FKCa4Db0loqNu6SNpA8LpqVa1GoO3wlsrwk7fhleY7n048%2BrzDvFGWvfm5voXBYnVfGOV5%2F3mvNa8%2FZ5MCwP4vbm6JB9SO8pDofIvRauUofoFmjm5B1UoID5pQ%2BStoECiF2pfUCGWbSu8NFeR0NyzB19Hn%2F73eW39f3ib8lrXjiAauhHeLe1cmkdQoJUgQbhKhG1Ej4dsSjz%2BBgU%2BHxDJ35c634jnqWJk2qDV%2B6CHAhqMBxUUETCxm9DBuZ6Di9Ygn4mruhyQH6F%2BdUu34A39%2B3M6aU4BLQdZd2uMJCJluJ6cxajvZHcIOIJTjcI%2BWnt%2FhIdvUcNGsTsVVBW%2BvTCZXaZ%2F5h3ELwM7V1NDDl0YC%2BBjqkAWdPDIiNAMUftsBGu4dZWWyA4tMvp0QB2iwZjmeEnPHHx11WttIAxb3p1aFbN%2FnyWkMA7OqbOwdkZI5uooNwpzZzy5wE6id7z%2Fu2C41yOi4HKsjoTmLik9Zp0mX0qwoeaoslWZPbYWi8vqUBNWszZJ89Zfo98%2BuDFpLNvS2SHM175G94RCxT87UreJ5k6dSZ%2FYj%2FC4uxQH4id8nzRMt%2BzcgYHaW%2B&X-Amz-Signature=dd20b234579c29bab4c546bd5fa83a56bb71c940cc63098c01cadb5a06d65a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULZAME7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCsjz%2BKZMEuflBNuw0VYErGRMjXwDGym417sieWtiuCLgIhAJC4zXIrjQ5oNsW9Yb%2BP%2FwOVbjN7y3nBWN2ZBT%2BTnk8CKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4bCCe9mswP26Lozgq3AOjvL0FzaFy%2BRF%2BcEp%2BDc5jDmzl%2B%2FIJvivOxvUZAq%2FfxoEHhl1JRuLu17Jsg5g%2BbRBmQIt235SfzK6Ispt%2FMD9xwrcPgsUCuUAED1YIb2HexsG2yjMvzaxwRmLPkOO9%2FuOS0Megw7UaSF0vzCYRUSpiLeIlmSg0Rrsq4H4ag%2F440fQibMeyVPnlzOPhLomdS8Vj6UAg2ONxyMWGJdYENf6J71pUy5Y59Uap4t5Bec7RrNd1wAFkZ7q98VBgQvJIXjF%2BRIMkb5wLYs3sXowWUyhT7%2FKCa4Db0loqNu6SNpA8LpqVa1GoO3wlsrwk7fhleY7n048%2BrzDvFGWvfm5voXBYnVfGOV5%2F3mvNa8%2FZ5MCwP4vbm6JB9SO8pDofIvRauUofoFmjm5B1UoID5pQ%2BStoECiF2pfUCGWbSu8NFeR0NyzB19Hn%2F73eW39f3ib8lrXjiAauhHeLe1cmkdQoJUgQbhKhG1Ej4dsSjz%2BBgU%2BHxDJ35c634jnqWJk2qDV%2B6CHAhqMBxUUETCxm9DBuZ6Di9Ygn4mruhyQH6F%2BdUu34A39%2B3M6aU4BLQdZd2uMJCJluJ6cxajvZHcIOIJTjcI%2BWnt%2FhIdvUcNGsTsVVBW%2BvTCZXaZ%2F5h3ELwM7V1NDDl0YC%2BBjqkAWdPDIiNAMUftsBGu4dZWWyA4tMvp0QB2iwZjmeEnPHHx11WttIAxb3p1aFbN%2FnyWkMA7OqbOwdkZI5uooNwpzZzy5wE6id7z%2Fu2C41yOi4HKsjoTmLik9Zp0mX0qwoeaoslWZPbYWi8vqUBNWszZJ89Zfo98%2BuDFpLNvS2SHM175G94RCxT87UreJ5k6dSZ%2FYj%2FC4uxQH4id8nzRMt%2BzcgYHaW%2B&X-Amz-Signature=02cb418f5f0bc7dae1b9c7a72bfb70ab8dd1acb74ec22e573d6792cb09f31122&X-Amz-SignedHeaders=host&x-id=GetObject)
