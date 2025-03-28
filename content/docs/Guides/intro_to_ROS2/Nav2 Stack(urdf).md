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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KWL64J%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpzcbkxEkk2P1476qhMJg8cfZqcpIbuxFop6%2B3v7WcWwIgTGlYKFGN%2FyXEcy3EwB1aSDe%2F1NtFn%2B%2BhMpx%2FpaVYIAwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAdc6STbDCGJEvA4myrcA8A9rv%2FwdEHVyooDqOv%2BIUZjAk0uXpNzgp7b4sdQllM1CBfsWpyZxj9QSBxwe0Hv1CNv8ja6uh46ZW1h3G%2B8rAoPYND9Ko8ftxvsPaX5hf%2FuXLHag56q2DnMjp2ES7mUiWsQNMiqds3b%2BUDwuv7th3DHNmpqR%2BlfnJ0xmRCD3x3RLutciWbZFb%2BeDATX4gpCB7jZC%2Bz48dqxXlVdmZSf9zG7DuxqnxVbYsKsWhxbeWaaQ961LW8iX1%2BtepR3WC5e9qhbdFv8eNHUYzUWUo69EFQq6imtkOTu0qXscVrT7sJqNM01Io%2BTsSjyLXA3OmyUnF0GSXGxs0K%2FXizoxw1GZ1e2jMXjCiGcbZK6uAeUFI2Ozjb86YjR5J5Z9%2Ff9D0cqCxlkzaMbvl80m6nuYQRvTpPkX8Uo1NZQnTRX%2FglaGtpl9jzNqPUnQmrSWYL0%2BYmFrIV%2BQcC4cCPhBkxWoAcDaYMbaT%2BZervBncsLmhMqXOhoEqMQvoPu3gHIwH1%2BMjxpZJnUm3NCt09JVeuQpdx%2F45me6ZwqDRHsUosHob8DLbMZRYOoMEZ0RkkX6%2Bc5YqW5ESK0HydWDNxT65hJe3hgMWSovxOJCr2Xz1SVj4E8FY3r3WRJq2LD1Gp7oZnoMMeimb8GOqUBAtnntHe%2B%2Bq%2Fu059YDwtjr9hH6PTm5mR6hb088hUdRXbv1wA%2F28hCD3PpaVHCslvTgToBOpFuc6hFqTeCwOzirNclJe3%2BXzYHs39xHzi69amBNnYzsNnWEyA8L6BnyC8KElguwRM%2BVtdr%2B0FWe%2FqLb8Af2bu%2FgM9tkrxXAF%2F08KHf9AL43zLj2ltED1C1DiWi8FHCnP3xM9ephBc7SUON3kPUmvec&X-Amz-Signature=4a58c9a9d2cded7aa4553749ef66ad5cedffee162d2590e86d0dda53cb570942&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KWL64J%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpzcbkxEkk2P1476qhMJg8cfZqcpIbuxFop6%2B3v7WcWwIgTGlYKFGN%2FyXEcy3EwB1aSDe%2F1NtFn%2B%2BhMpx%2FpaVYIAwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAdc6STbDCGJEvA4myrcA8A9rv%2FwdEHVyooDqOv%2BIUZjAk0uXpNzgp7b4sdQllM1CBfsWpyZxj9QSBxwe0Hv1CNv8ja6uh46ZW1h3G%2B8rAoPYND9Ko8ftxvsPaX5hf%2FuXLHag56q2DnMjp2ES7mUiWsQNMiqds3b%2BUDwuv7th3DHNmpqR%2BlfnJ0xmRCD3x3RLutciWbZFb%2BeDATX4gpCB7jZC%2Bz48dqxXlVdmZSf9zG7DuxqnxVbYsKsWhxbeWaaQ961LW8iX1%2BtepR3WC5e9qhbdFv8eNHUYzUWUo69EFQq6imtkOTu0qXscVrT7sJqNM01Io%2BTsSjyLXA3OmyUnF0GSXGxs0K%2FXizoxw1GZ1e2jMXjCiGcbZK6uAeUFI2Ozjb86YjR5J5Z9%2Ff9D0cqCxlkzaMbvl80m6nuYQRvTpPkX8Uo1NZQnTRX%2FglaGtpl9jzNqPUnQmrSWYL0%2BYmFrIV%2BQcC4cCPhBkxWoAcDaYMbaT%2BZervBncsLmhMqXOhoEqMQvoPu3gHIwH1%2BMjxpZJnUm3NCt09JVeuQpdx%2F45me6ZwqDRHsUosHob8DLbMZRYOoMEZ0RkkX6%2Bc5YqW5ESK0HydWDNxT65hJe3hgMWSovxOJCr2Xz1SVj4E8FY3r3WRJq2LD1Gp7oZnoMMeimb8GOqUBAtnntHe%2B%2Bq%2Fu059YDwtjr9hH6PTm5mR6hb088hUdRXbv1wA%2F28hCD3PpaVHCslvTgToBOpFuc6hFqTeCwOzirNclJe3%2BXzYHs39xHzi69amBNnYzsNnWEyA8L6BnyC8KElguwRM%2BVtdr%2B0FWe%2FqLb8Af2bu%2FgM9tkrxXAF%2F08KHf9AL43zLj2ltED1C1DiWi8FHCnP3xM9ephBc7SUON3kPUmvec&X-Amz-Signature=d2260fd7a1dce22ad7001cf2a8f605582d9f3fc8b541b60e9aa7385597507611&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KWL64J%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpzcbkxEkk2P1476qhMJg8cfZqcpIbuxFop6%2B3v7WcWwIgTGlYKFGN%2FyXEcy3EwB1aSDe%2F1NtFn%2B%2BhMpx%2FpaVYIAwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAdc6STbDCGJEvA4myrcA8A9rv%2FwdEHVyooDqOv%2BIUZjAk0uXpNzgp7b4sdQllM1CBfsWpyZxj9QSBxwe0Hv1CNv8ja6uh46ZW1h3G%2B8rAoPYND9Ko8ftxvsPaX5hf%2FuXLHag56q2DnMjp2ES7mUiWsQNMiqds3b%2BUDwuv7th3DHNmpqR%2BlfnJ0xmRCD3x3RLutciWbZFb%2BeDATX4gpCB7jZC%2Bz48dqxXlVdmZSf9zG7DuxqnxVbYsKsWhxbeWaaQ961LW8iX1%2BtepR3WC5e9qhbdFv8eNHUYzUWUo69EFQq6imtkOTu0qXscVrT7sJqNM01Io%2BTsSjyLXA3OmyUnF0GSXGxs0K%2FXizoxw1GZ1e2jMXjCiGcbZK6uAeUFI2Ozjb86YjR5J5Z9%2Ff9D0cqCxlkzaMbvl80m6nuYQRvTpPkX8Uo1NZQnTRX%2FglaGtpl9jzNqPUnQmrSWYL0%2BYmFrIV%2BQcC4cCPhBkxWoAcDaYMbaT%2BZervBncsLmhMqXOhoEqMQvoPu3gHIwH1%2BMjxpZJnUm3NCt09JVeuQpdx%2F45me6ZwqDRHsUosHob8DLbMZRYOoMEZ0RkkX6%2Bc5YqW5ESK0HydWDNxT65hJe3hgMWSovxOJCr2Xz1SVj4E8FY3r3WRJq2LD1Gp7oZnoMMeimb8GOqUBAtnntHe%2B%2Bq%2Fu059YDwtjr9hH6PTm5mR6hb088hUdRXbv1wA%2F28hCD3PpaVHCslvTgToBOpFuc6hFqTeCwOzirNclJe3%2BXzYHs39xHzi69amBNnYzsNnWEyA8L6BnyC8KElguwRM%2BVtdr%2B0FWe%2FqLb8Af2bu%2FgM9tkrxXAF%2F08KHf9AL43zLj2ltED1C1DiWi8FHCnP3xM9ephBc7SUON3kPUmvec&X-Amz-Signature=66085667d7c57b21d43cec3f5050322b3332ab42d17c68ea493e6944defe9441&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KWL64J%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpzcbkxEkk2P1476qhMJg8cfZqcpIbuxFop6%2B3v7WcWwIgTGlYKFGN%2FyXEcy3EwB1aSDe%2F1NtFn%2B%2BhMpx%2FpaVYIAwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAdc6STbDCGJEvA4myrcA8A9rv%2FwdEHVyooDqOv%2BIUZjAk0uXpNzgp7b4sdQllM1CBfsWpyZxj9QSBxwe0Hv1CNv8ja6uh46ZW1h3G%2B8rAoPYND9Ko8ftxvsPaX5hf%2FuXLHag56q2DnMjp2ES7mUiWsQNMiqds3b%2BUDwuv7th3DHNmpqR%2BlfnJ0xmRCD3x3RLutciWbZFb%2BeDATX4gpCB7jZC%2Bz48dqxXlVdmZSf9zG7DuxqnxVbYsKsWhxbeWaaQ961LW8iX1%2BtepR3WC5e9qhbdFv8eNHUYzUWUo69EFQq6imtkOTu0qXscVrT7sJqNM01Io%2BTsSjyLXA3OmyUnF0GSXGxs0K%2FXizoxw1GZ1e2jMXjCiGcbZK6uAeUFI2Ozjb86YjR5J5Z9%2Ff9D0cqCxlkzaMbvl80m6nuYQRvTpPkX8Uo1NZQnTRX%2FglaGtpl9jzNqPUnQmrSWYL0%2BYmFrIV%2BQcC4cCPhBkxWoAcDaYMbaT%2BZervBncsLmhMqXOhoEqMQvoPu3gHIwH1%2BMjxpZJnUm3NCt09JVeuQpdx%2F45me6ZwqDRHsUosHob8DLbMZRYOoMEZ0RkkX6%2Bc5YqW5ESK0HydWDNxT65hJe3hgMWSovxOJCr2Xz1SVj4E8FY3r3WRJq2LD1Gp7oZnoMMeimb8GOqUBAtnntHe%2B%2Bq%2Fu059YDwtjr9hH6PTm5mR6hb088hUdRXbv1wA%2F28hCD3PpaVHCslvTgToBOpFuc6hFqTeCwOzirNclJe3%2BXzYHs39xHzi69amBNnYzsNnWEyA8L6BnyC8KElguwRM%2BVtdr%2B0FWe%2FqLb8Af2bu%2FgM9tkrxXAF%2F08KHf9AL43zLj2ltED1C1DiWi8FHCnP3xM9ephBc7SUON3kPUmvec&X-Amz-Signature=32ff02b27406fdce6d74f9576c3b3395e9d3f89f24efc4f41ebfde493310c648&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KWL64J%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpzcbkxEkk2P1476qhMJg8cfZqcpIbuxFop6%2B3v7WcWwIgTGlYKFGN%2FyXEcy3EwB1aSDe%2F1NtFn%2B%2BhMpx%2FpaVYIAwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAdc6STbDCGJEvA4myrcA8A9rv%2FwdEHVyooDqOv%2BIUZjAk0uXpNzgp7b4sdQllM1CBfsWpyZxj9QSBxwe0Hv1CNv8ja6uh46ZW1h3G%2B8rAoPYND9Ko8ftxvsPaX5hf%2FuXLHag56q2DnMjp2ES7mUiWsQNMiqds3b%2BUDwuv7th3DHNmpqR%2BlfnJ0xmRCD3x3RLutciWbZFb%2BeDATX4gpCB7jZC%2Bz48dqxXlVdmZSf9zG7DuxqnxVbYsKsWhxbeWaaQ961LW8iX1%2BtepR3WC5e9qhbdFv8eNHUYzUWUo69EFQq6imtkOTu0qXscVrT7sJqNM01Io%2BTsSjyLXA3OmyUnF0GSXGxs0K%2FXizoxw1GZ1e2jMXjCiGcbZK6uAeUFI2Ozjb86YjR5J5Z9%2Ff9D0cqCxlkzaMbvl80m6nuYQRvTpPkX8Uo1NZQnTRX%2FglaGtpl9jzNqPUnQmrSWYL0%2BYmFrIV%2BQcC4cCPhBkxWoAcDaYMbaT%2BZervBncsLmhMqXOhoEqMQvoPu3gHIwH1%2BMjxpZJnUm3NCt09JVeuQpdx%2F45me6ZwqDRHsUosHob8DLbMZRYOoMEZ0RkkX6%2Bc5YqW5ESK0HydWDNxT65hJe3hgMWSovxOJCr2Xz1SVj4E8FY3r3WRJq2LD1Gp7oZnoMMeimb8GOqUBAtnntHe%2B%2Bq%2Fu059YDwtjr9hH6PTm5mR6hb088hUdRXbv1wA%2F28hCD3PpaVHCslvTgToBOpFuc6hFqTeCwOzirNclJe3%2BXzYHs39xHzi69amBNnYzsNnWEyA8L6BnyC8KElguwRM%2BVtdr%2B0FWe%2FqLb8Af2bu%2FgM9tkrxXAF%2F08KHf9AL43zLj2ltED1C1DiWi8FHCnP3xM9ephBc7SUON3kPUmvec&X-Amz-Signature=55df4bb12dd9a13004a66eca831eef70a2fd8a5ddf515216c8651232f5f5818b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KWL64J%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpzcbkxEkk2P1476qhMJg8cfZqcpIbuxFop6%2B3v7WcWwIgTGlYKFGN%2FyXEcy3EwB1aSDe%2F1NtFn%2B%2BhMpx%2FpaVYIAwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAdc6STbDCGJEvA4myrcA8A9rv%2FwdEHVyooDqOv%2BIUZjAk0uXpNzgp7b4sdQllM1CBfsWpyZxj9QSBxwe0Hv1CNv8ja6uh46ZW1h3G%2B8rAoPYND9Ko8ftxvsPaX5hf%2FuXLHag56q2DnMjp2ES7mUiWsQNMiqds3b%2BUDwuv7th3DHNmpqR%2BlfnJ0xmRCD3x3RLutciWbZFb%2BeDATX4gpCB7jZC%2Bz48dqxXlVdmZSf9zG7DuxqnxVbYsKsWhxbeWaaQ961LW8iX1%2BtepR3WC5e9qhbdFv8eNHUYzUWUo69EFQq6imtkOTu0qXscVrT7sJqNM01Io%2BTsSjyLXA3OmyUnF0GSXGxs0K%2FXizoxw1GZ1e2jMXjCiGcbZK6uAeUFI2Ozjb86YjR5J5Z9%2Ff9D0cqCxlkzaMbvl80m6nuYQRvTpPkX8Uo1NZQnTRX%2FglaGtpl9jzNqPUnQmrSWYL0%2BYmFrIV%2BQcC4cCPhBkxWoAcDaYMbaT%2BZervBncsLmhMqXOhoEqMQvoPu3gHIwH1%2BMjxpZJnUm3NCt09JVeuQpdx%2F45me6ZwqDRHsUosHob8DLbMZRYOoMEZ0RkkX6%2Bc5YqW5ESK0HydWDNxT65hJe3hgMWSovxOJCr2Xz1SVj4E8FY3r3WRJq2LD1Gp7oZnoMMeimb8GOqUBAtnntHe%2B%2Bq%2Fu059YDwtjr9hH6PTm5mR6hb088hUdRXbv1wA%2F28hCD3PpaVHCslvTgToBOpFuc6hFqTeCwOzirNclJe3%2BXzYHs39xHzi69amBNnYzsNnWEyA8L6BnyC8KElguwRM%2BVtdr%2B0FWe%2FqLb8Af2bu%2FgM9tkrxXAF%2F08KHf9AL43zLj2ltED1C1DiWi8FHCnP3xM9ephBc7SUON3kPUmvec&X-Amz-Signature=6cd9e318cc41ad0e1f89e06b4e06d9555f6104e241b94cdad00f7d663e981171&X-Amz-SignedHeaders=host&x-id=GetObject)
