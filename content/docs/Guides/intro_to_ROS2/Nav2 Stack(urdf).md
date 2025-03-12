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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQPRIVF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHL48jrWLIiXBg1GMN%2F42czMW%2BpCtwHHYhxSGyet1pnqAiBFIYhd79zg9JF6HNEHAvVfODr%2Fko7GLOeTsIcLRynNfSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdoBajJdJ6r0ddkOGKtwDHOVbtoBjl3ORyBbr97%2B6FdVeR5cK4Sj8eGH9jX5kV6MFmSmtvr%2BmeIJ7BenqoJydACMI8%2FfAfN5H21GNQrfK1QkD2yMXk1f%2BucNhZMMPHarastjGxwRkygBqIV6m6YCsU8zgAZ9C%2FaBSPtOBsw0JVnat9Yv%2Fd3fnLwfKws%2BxN9UXYh46UcNv4w8ylWmOGqFKmSacrR0jFOjbp6vqxGaRNZ5bbLLdfkR0oJ%2Fb4VmPA6ALdqSb9Dut67TDGGjbA%2BeGl7PjoUPKSriDn6wUUOgyvreelrb2%2BOFxtgWNjXS3YCbHcfwVuJwoG9YJtqw5r4XoRTCgqfw5W5WYsd0qKiQr%2FNNE3jnMY9TWPODOEdw%2B1%2FXotb4o3%2B8IFX4I7BzhmUq2ME%2FkKRaRd%2FrVWHhgIcseJmTe34gOhhlWN6P6djzedw2FsWEKH%2Ftk5JTOto8vChOdL2ARMrelgXVz5y%2FV%2FjfUNBNLmryJgujIcxJVQndjPJujTfuD6Dc%2BsXIL%2FagZboOIzz7hQYxIiD88HXO2zJSh21tseGtV0Hr0oSL6zHtwTNAeSohsvzVJaJ4IKru%2BZtNeAabP%2BEn5U3%2BA2emul4FLpN4EZPlGt9%2B6wJxiUysuut687Kd3OR%2FXbddIdCswjPvDvgY6pgFGWAYxaDiHlVHHeI%2FguhogYa0a7L6KkQVeCnL4uyw3iEJlqPLptRvbo8RCGFTGAmCrsvyKrbeLWK4PT2qe4uU3ns2%2F%2BxydupeiNISX7yjXQKJpshBSJta%2Fk1Z3gat5FkX4nQ3I5NwfNhQB2OdmbVoowOPfkG%2FeNvspDE93yftNdjG9XNIAw4s8T3oSC6zVZ%2Blevmm9ETuYJi61O82TYMmx9gSqTLQb&X-Amz-Signature=7fba5edc5c6e7e0884a968f870e632dcb0ccd090a42160dec3ecd0a57aa708f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQPRIVF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHL48jrWLIiXBg1GMN%2F42czMW%2BpCtwHHYhxSGyet1pnqAiBFIYhd79zg9JF6HNEHAvVfODr%2Fko7GLOeTsIcLRynNfSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdoBajJdJ6r0ddkOGKtwDHOVbtoBjl3ORyBbr97%2B6FdVeR5cK4Sj8eGH9jX5kV6MFmSmtvr%2BmeIJ7BenqoJydACMI8%2FfAfN5H21GNQrfK1QkD2yMXk1f%2BucNhZMMPHarastjGxwRkygBqIV6m6YCsU8zgAZ9C%2FaBSPtOBsw0JVnat9Yv%2Fd3fnLwfKws%2BxN9UXYh46UcNv4w8ylWmOGqFKmSacrR0jFOjbp6vqxGaRNZ5bbLLdfkR0oJ%2Fb4VmPA6ALdqSb9Dut67TDGGjbA%2BeGl7PjoUPKSriDn6wUUOgyvreelrb2%2BOFxtgWNjXS3YCbHcfwVuJwoG9YJtqw5r4XoRTCgqfw5W5WYsd0qKiQr%2FNNE3jnMY9TWPODOEdw%2B1%2FXotb4o3%2B8IFX4I7BzhmUq2ME%2FkKRaRd%2FrVWHhgIcseJmTe34gOhhlWN6P6djzedw2FsWEKH%2Ftk5JTOto8vChOdL2ARMrelgXVz5y%2FV%2FjfUNBNLmryJgujIcxJVQndjPJujTfuD6Dc%2BsXIL%2FagZboOIzz7hQYxIiD88HXO2zJSh21tseGtV0Hr0oSL6zHtwTNAeSohsvzVJaJ4IKru%2BZtNeAabP%2BEn5U3%2BA2emul4FLpN4EZPlGt9%2B6wJxiUysuut687Kd3OR%2FXbddIdCswjPvDvgY6pgFGWAYxaDiHlVHHeI%2FguhogYa0a7L6KkQVeCnL4uyw3iEJlqPLptRvbo8RCGFTGAmCrsvyKrbeLWK4PT2qe4uU3ns2%2F%2BxydupeiNISX7yjXQKJpshBSJta%2Fk1Z3gat5FkX4nQ3I5NwfNhQB2OdmbVoowOPfkG%2FeNvspDE93yftNdjG9XNIAw4s8T3oSC6zVZ%2Blevmm9ETuYJi61O82TYMmx9gSqTLQb&X-Amz-Signature=f5368fedbe5571ce06e1ed6a5d9df5a10a8ad8fc0226077911056f801c1a9b15&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQPRIVF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHL48jrWLIiXBg1GMN%2F42czMW%2BpCtwHHYhxSGyet1pnqAiBFIYhd79zg9JF6HNEHAvVfODr%2Fko7GLOeTsIcLRynNfSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdoBajJdJ6r0ddkOGKtwDHOVbtoBjl3ORyBbr97%2B6FdVeR5cK4Sj8eGH9jX5kV6MFmSmtvr%2BmeIJ7BenqoJydACMI8%2FfAfN5H21GNQrfK1QkD2yMXk1f%2BucNhZMMPHarastjGxwRkygBqIV6m6YCsU8zgAZ9C%2FaBSPtOBsw0JVnat9Yv%2Fd3fnLwfKws%2BxN9UXYh46UcNv4w8ylWmOGqFKmSacrR0jFOjbp6vqxGaRNZ5bbLLdfkR0oJ%2Fb4VmPA6ALdqSb9Dut67TDGGjbA%2BeGl7PjoUPKSriDn6wUUOgyvreelrb2%2BOFxtgWNjXS3YCbHcfwVuJwoG9YJtqw5r4XoRTCgqfw5W5WYsd0qKiQr%2FNNE3jnMY9TWPODOEdw%2B1%2FXotb4o3%2B8IFX4I7BzhmUq2ME%2FkKRaRd%2FrVWHhgIcseJmTe34gOhhlWN6P6djzedw2FsWEKH%2Ftk5JTOto8vChOdL2ARMrelgXVz5y%2FV%2FjfUNBNLmryJgujIcxJVQndjPJujTfuD6Dc%2BsXIL%2FagZboOIzz7hQYxIiD88HXO2zJSh21tseGtV0Hr0oSL6zHtwTNAeSohsvzVJaJ4IKru%2BZtNeAabP%2BEn5U3%2BA2emul4FLpN4EZPlGt9%2B6wJxiUysuut687Kd3OR%2FXbddIdCswjPvDvgY6pgFGWAYxaDiHlVHHeI%2FguhogYa0a7L6KkQVeCnL4uyw3iEJlqPLptRvbo8RCGFTGAmCrsvyKrbeLWK4PT2qe4uU3ns2%2F%2BxydupeiNISX7yjXQKJpshBSJta%2Fk1Z3gat5FkX4nQ3I5NwfNhQB2OdmbVoowOPfkG%2FeNvspDE93yftNdjG9XNIAw4s8T3oSC6zVZ%2Blevmm9ETuYJi61O82TYMmx9gSqTLQb&X-Amz-Signature=1d607768f3ed6c82d72725900caf3071364b89db4fe33bfe7533bb0c545ac32d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQPRIVF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHL48jrWLIiXBg1GMN%2F42czMW%2BpCtwHHYhxSGyet1pnqAiBFIYhd79zg9JF6HNEHAvVfODr%2Fko7GLOeTsIcLRynNfSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdoBajJdJ6r0ddkOGKtwDHOVbtoBjl3ORyBbr97%2B6FdVeR5cK4Sj8eGH9jX5kV6MFmSmtvr%2BmeIJ7BenqoJydACMI8%2FfAfN5H21GNQrfK1QkD2yMXk1f%2BucNhZMMPHarastjGxwRkygBqIV6m6YCsU8zgAZ9C%2FaBSPtOBsw0JVnat9Yv%2Fd3fnLwfKws%2BxN9UXYh46UcNv4w8ylWmOGqFKmSacrR0jFOjbp6vqxGaRNZ5bbLLdfkR0oJ%2Fb4VmPA6ALdqSb9Dut67TDGGjbA%2BeGl7PjoUPKSriDn6wUUOgyvreelrb2%2BOFxtgWNjXS3YCbHcfwVuJwoG9YJtqw5r4XoRTCgqfw5W5WYsd0qKiQr%2FNNE3jnMY9TWPODOEdw%2B1%2FXotb4o3%2B8IFX4I7BzhmUq2ME%2FkKRaRd%2FrVWHhgIcseJmTe34gOhhlWN6P6djzedw2FsWEKH%2Ftk5JTOto8vChOdL2ARMrelgXVz5y%2FV%2FjfUNBNLmryJgujIcxJVQndjPJujTfuD6Dc%2BsXIL%2FagZboOIzz7hQYxIiD88HXO2zJSh21tseGtV0Hr0oSL6zHtwTNAeSohsvzVJaJ4IKru%2BZtNeAabP%2BEn5U3%2BA2emul4FLpN4EZPlGt9%2B6wJxiUysuut687Kd3OR%2FXbddIdCswjPvDvgY6pgFGWAYxaDiHlVHHeI%2FguhogYa0a7L6KkQVeCnL4uyw3iEJlqPLptRvbo8RCGFTGAmCrsvyKrbeLWK4PT2qe4uU3ns2%2F%2BxydupeiNISX7yjXQKJpshBSJta%2Fk1Z3gat5FkX4nQ3I5NwfNhQB2OdmbVoowOPfkG%2FeNvspDE93yftNdjG9XNIAw4s8T3oSC6zVZ%2Blevmm9ETuYJi61O82TYMmx9gSqTLQb&X-Amz-Signature=4224de95523784a7556c5ed315c8b7a2179bd9bbe62cfeb68a35f5e9f907169a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQPRIVF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHL48jrWLIiXBg1GMN%2F42czMW%2BpCtwHHYhxSGyet1pnqAiBFIYhd79zg9JF6HNEHAvVfODr%2Fko7GLOeTsIcLRynNfSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdoBajJdJ6r0ddkOGKtwDHOVbtoBjl3ORyBbr97%2B6FdVeR5cK4Sj8eGH9jX5kV6MFmSmtvr%2BmeIJ7BenqoJydACMI8%2FfAfN5H21GNQrfK1QkD2yMXk1f%2BucNhZMMPHarastjGxwRkygBqIV6m6YCsU8zgAZ9C%2FaBSPtOBsw0JVnat9Yv%2Fd3fnLwfKws%2BxN9UXYh46UcNv4w8ylWmOGqFKmSacrR0jFOjbp6vqxGaRNZ5bbLLdfkR0oJ%2Fb4VmPA6ALdqSb9Dut67TDGGjbA%2BeGl7PjoUPKSriDn6wUUOgyvreelrb2%2BOFxtgWNjXS3YCbHcfwVuJwoG9YJtqw5r4XoRTCgqfw5W5WYsd0qKiQr%2FNNE3jnMY9TWPODOEdw%2B1%2FXotb4o3%2B8IFX4I7BzhmUq2ME%2FkKRaRd%2FrVWHhgIcseJmTe34gOhhlWN6P6djzedw2FsWEKH%2Ftk5JTOto8vChOdL2ARMrelgXVz5y%2FV%2FjfUNBNLmryJgujIcxJVQndjPJujTfuD6Dc%2BsXIL%2FagZboOIzz7hQYxIiD88HXO2zJSh21tseGtV0Hr0oSL6zHtwTNAeSohsvzVJaJ4IKru%2BZtNeAabP%2BEn5U3%2BA2emul4FLpN4EZPlGt9%2B6wJxiUysuut687Kd3OR%2FXbddIdCswjPvDvgY6pgFGWAYxaDiHlVHHeI%2FguhogYa0a7L6KkQVeCnL4uyw3iEJlqPLptRvbo8RCGFTGAmCrsvyKrbeLWK4PT2qe4uU3ns2%2F%2BxydupeiNISX7yjXQKJpshBSJta%2Fk1Z3gat5FkX4nQ3I5NwfNhQB2OdmbVoowOPfkG%2FeNvspDE93yftNdjG9XNIAw4s8T3oSC6zVZ%2Blevmm9ETuYJi61O82TYMmx9gSqTLQb&X-Amz-Signature=83c31a6c01bcec3a255c49dfcc8ab82757514f80d4f8d6ab852c1b6f9ef36f0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQPRIVF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHL48jrWLIiXBg1GMN%2F42czMW%2BpCtwHHYhxSGyet1pnqAiBFIYhd79zg9JF6HNEHAvVfODr%2Fko7GLOeTsIcLRynNfSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdoBajJdJ6r0ddkOGKtwDHOVbtoBjl3ORyBbr97%2B6FdVeR5cK4Sj8eGH9jX5kV6MFmSmtvr%2BmeIJ7BenqoJydACMI8%2FfAfN5H21GNQrfK1QkD2yMXk1f%2BucNhZMMPHarastjGxwRkygBqIV6m6YCsU8zgAZ9C%2FaBSPtOBsw0JVnat9Yv%2Fd3fnLwfKws%2BxN9UXYh46UcNv4w8ylWmOGqFKmSacrR0jFOjbp6vqxGaRNZ5bbLLdfkR0oJ%2Fb4VmPA6ALdqSb9Dut67TDGGjbA%2BeGl7PjoUPKSriDn6wUUOgyvreelrb2%2BOFxtgWNjXS3YCbHcfwVuJwoG9YJtqw5r4XoRTCgqfw5W5WYsd0qKiQr%2FNNE3jnMY9TWPODOEdw%2B1%2FXotb4o3%2B8IFX4I7BzhmUq2ME%2FkKRaRd%2FrVWHhgIcseJmTe34gOhhlWN6P6djzedw2FsWEKH%2Ftk5JTOto8vChOdL2ARMrelgXVz5y%2FV%2FjfUNBNLmryJgujIcxJVQndjPJujTfuD6Dc%2BsXIL%2FagZboOIzz7hQYxIiD88HXO2zJSh21tseGtV0Hr0oSL6zHtwTNAeSohsvzVJaJ4IKru%2BZtNeAabP%2BEn5U3%2BA2emul4FLpN4EZPlGt9%2B6wJxiUysuut687Kd3OR%2FXbddIdCswjPvDvgY6pgFGWAYxaDiHlVHHeI%2FguhogYa0a7L6KkQVeCnL4uyw3iEJlqPLptRvbo8RCGFTGAmCrsvyKrbeLWK4PT2qe4uU3ns2%2F%2BxydupeiNISX7yjXQKJpshBSJta%2Fk1Z3gat5FkX4nQ3I5NwfNhQB2OdmbVoowOPfkG%2FeNvspDE93yftNdjG9XNIAw4s8T3oSC6zVZ%2Blevmm9ETuYJi61O82TYMmx9gSqTLQb&X-Amz-Signature=e43a5d98b9fec71265336433c57d04b7cab99eb77dd499fc295efb94efd99920&X-Amz-SignedHeaders=host&x-id=GetObject)
