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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSZC7RC%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDGYGSguUC2OWPu4YL8%2FpDFnndSChsdXPqDbLqUOLBywAiBUt248OZgUlcuDuMTLzaK%2Bkwsvca7QOT1HH6DwScHwaSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzJbpgWY0VkrmsnjoKtwDRWixcdAPGYrEEPYgyltZka4lEaTFd4%2BLJiUxTRaJQXjwy9raVAHJKDJFp73QeY%2FXa8gD2VqMI462%2FGfl98HoUMzoNpBevbrUTY4mOUdKK2Yx5R7HMoUBpaz3FF1YsdhbvRRqP6BB5kFbEqdxv83Co7UL9ljo4UpCjRF5uPdzFF2hktEr3cRXTEKzB1pPc9tG6NsLndGT0ClKifbWfcCgDmwGvuL6b9JtsDjkArdeSagPRemoUzJYQvCEjM7kUEdQFBxlZlt0tj%2FJ31Er3wVXqMhZ2jhoY3ONOMaT8PZS0Sfl2AqgNuqsL2%2BUBuM%2Ffqb5g31TiVfrCDTcw92nvr2V%2FpaIYcgUTx%2BFMlwG5uaG1nL77M1gbb8RaBHF9d%2B%2B0Fv%2FzEJM%2FK3Cw%2BTFBvstB6%2BSdqTivSX3%2FYM7dPOPSUwWwxB%2BokQ8dGKlN3ymBEmfP73V4a5pckIVp7Zc3fuBOcQxuL30YplXOOqVnmYXXGBqSvF5yAbOFTH9l3N9HuByqeer6Fz3IIY01e8P8hNvKgmx1zJ3UFFzoDGSkbZKgl%2F4XL5qlYFgCwvRDu8JQmIdhJeq8Fy7K4Mn9WPUaLK%2BuVGRsT0vjiPbvVlXwOxXWFiRkoN8OCgM8kMysy%2BGQwEwkb7uvwY6pgH0SCJMTMSWzSjt74wAY3cReoLItX2yExR4u6R15sEO0KToItPnbZAiQ%2FUgvu24kwKDHleqfBcGDidlBIo8u%2BdpsLV3w7U3kFeAU%2F5oJ1m0wvKm3DEybP3lMU2SXklH%2FHO%2FqtM9w4HI85JIMhW3gIPz6UtUcMEXVKHDF5Ah78CJZeERcB54%2BoVgQxTqBCuG8G8f0VJbrjhBwqzycO2T%2BlCnKxS96eMU&X-Amz-Signature=309c016da87411ec674f11676c85e424e48e8a137dc0ef1407e4c9dba62ca7b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSZC7RC%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDGYGSguUC2OWPu4YL8%2FpDFnndSChsdXPqDbLqUOLBywAiBUt248OZgUlcuDuMTLzaK%2Bkwsvca7QOT1HH6DwScHwaSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzJbpgWY0VkrmsnjoKtwDRWixcdAPGYrEEPYgyltZka4lEaTFd4%2BLJiUxTRaJQXjwy9raVAHJKDJFp73QeY%2FXa8gD2VqMI462%2FGfl98HoUMzoNpBevbrUTY4mOUdKK2Yx5R7HMoUBpaz3FF1YsdhbvRRqP6BB5kFbEqdxv83Co7UL9ljo4UpCjRF5uPdzFF2hktEr3cRXTEKzB1pPc9tG6NsLndGT0ClKifbWfcCgDmwGvuL6b9JtsDjkArdeSagPRemoUzJYQvCEjM7kUEdQFBxlZlt0tj%2FJ31Er3wVXqMhZ2jhoY3ONOMaT8PZS0Sfl2AqgNuqsL2%2BUBuM%2Ffqb5g31TiVfrCDTcw92nvr2V%2FpaIYcgUTx%2BFMlwG5uaG1nL77M1gbb8RaBHF9d%2B%2B0Fv%2FzEJM%2FK3Cw%2BTFBvstB6%2BSdqTivSX3%2FYM7dPOPSUwWwxB%2BokQ8dGKlN3ymBEmfP73V4a5pckIVp7Zc3fuBOcQxuL30YplXOOqVnmYXXGBqSvF5yAbOFTH9l3N9HuByqeer6Fz3IIY01e8P8hNvKgmx1zJ3UFFzoDGSkbZKgl%2F4XL5qlYFgCwvRDu8JQmIdhJeq8Fy7K4Mn9WPUaLK%2BuVGRsT0vjiPbvVlXwOxXWFiRkoN8OCgM8kMysy%2BGQwEwkb7uvwY6pgH0SCJMTMSWzSjt74wAY3cReoLItX2yExR4u6R15sEO0KToItPnbZAiQ%2FUgvu24kwKDHleqfBcGDidlBIo8u%2BdpsLV3w7U3kFeAU%2F5oJ1m0wvKm3DEybP3lMU2SXklH%2FHO%2FqtM9w4HI85JIMhW3gIPz6UtUcMEXVKHDF5Ah78CJZeERcB54%2BoVgQxTqBCuG8G8f0VJbrjhBwqzycO2T%2BlCnKxS96eMU&X-Amz-Signature=b0c11e5b509648a3176a62bb09eb614586585d1bd872869df299265153c4c6b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSZC7RC%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDGYGSguUC2OWPu4YL8%2FpDFnndSChsdXPqDbLqUOLBywAiBUt248OZgUlcuDuMTLzaK%2Bkwsvca7QOT1HH6DwScHwaSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzJbpgWY0VkrmsnjoKtwDRWixcdAPGYrEEPYgyltZka4lEaTFd4%2BLJiUxTRaJQXjwy9raVAHJKDJFp73QeY%2FXa8gD2VqMI462%2FGfl98HoUMzoNpBevbrUTY4mOUdKK2Yx5R7HMoUBpaz3FF1YsdhbvRRqP6BB5kFbEqdxv83Co7UL9ljo4UpCjRF5uPdzFF2hktEr3cRXTEKzB1pPc9tG6NsLndGT0ClKifbWfcCgDmwGvuL6b9JtsDjkArdeSagPRemoUzJYQvCEjM7kUEdQFBxlZlt0tj%2FJ31Er3wVXqMhZ2jhoY3ONOMaT8PZS0Sfl2AqgNuqsL2%2BUBuM%2Ffqb5g31TiVfrCDTcw92nvr2V%2FpaIYcgUTx%2BFMlwG5uaG1nL77M1gbb8RaBHF9d%2B%2B0Fv%2FzEJM%2FK3Cw%2BTFBvstB6%2BSdqTivSX3%2FYM7dPOPSUwWwxB%2BokQ8dGKlN3ymBEmfP73V4a5pckIVp7Zc3fuBOcQxuL30YplXOOqVnmYXXGBqSvF5yAbOFTH9l3N9HuByqeer6Fz3IIY01e8P8hNvKgmx1zJ3UFFzoDGSkbZKgl%2F4XL5qlYFgCwvRDu8JQmIdhJeq8Fy7K4Mn9WPUaLK%2BuVGRsT0vjiPbvVlXwOxXWFiRkoN8OCgM8kMysy%2BGQwEwkb7uvwY6pgH0SCJMTMSWzSjt74wAY3cReoLItX2yExR4u6R15sEO0KToItPnbZAiQ%2FUgvu24kwKDHleqfBcGDidlBIo8u%2BdpsLV3w7U3kFeAU%2F5oJ1m0wvKm3DEybP3lMU2SXklH%2FHO%2FqtM9w4HI85JIMhW3gIPz6UtUcMEXVKHDF5Ah78CJZeERcB54%2BoVgQxTqBCuG8G8f0VJbrjhBwqzycO2T%2BlCnKxS96eMU&X-Amz-Signature=9c849e0e78ef1bdd4d42b0fee24871ed16de2cddbb529e546732feffc8a35c17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSZC7RC%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDGYGSguUC2OWPu4YL8%2FpDFnndSChsdXPqDbLqUOLBywAiBUt248OZgUlcuDuMTLzaK%2Bkwsvca7QOT1HH6DwScHwaSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzJbpgWY0VkrmsnjoKtwDRWixcdAPGYrEEPYgyltZka4lEaTFd4%2BLJiUxTRaJQXjwy9raVAHJKDJFp73QeY%2FXa8gD2VqMI462%2FGfl98HoUMzoNpBevbrUTY4mOUdKK2Yx5R7HMoUBpaz3FF1YsdhbvRRqP6BB5kFbEqdxv83Co7UL9ljo4UpCjRF5uPdzFF2hktEr3cRXTEKzB1pPc9tG6NsLndGT0ClKifbWfcCgDmwGvuL6b9JtsDjkArdeSagPRemoUzJYQvCEjM7kUEdQFBxlZlt0tj%2FJ31Er3wVXqMhZ2jhoY3ONOMaT8PZS0Sfl2AqgNuqsL2%2BUBuM%2Ffqb5g31TiVfrCDTcw92nvr2V%2FpaIYcgUTx%2BFMlwG5uaG1nL77M1gbb8RaBHF9d%2B%2B0Fv%2FzEJM%2FK3Cw%2BTFBvstB6%2BSdqTivSX3%2FYM7dPOPSUwWwxB%2BokQ8dGKlN3ymBEmfP73V4a5pckIVp7Zc3fuBOcQxuL30YplXOOqVnmYXXGBqSvF5yAbOFTH9l3N9HuByqeer6Fz3IIY01e8P8hNvKgmx1zJ3UFFzoDGSkbZKgl%2F4XL5qlYFgCwvRDu8JQmIdhJeq8Fy7K4Mn9WPUaLK%2BuVGRsT0vjiPbvVlXwOxXWFiRkoN8OCgM8kMysy%2BGQwEwkb7uvwY6pgH0SCJMTMSWzSjt74wAY3cReoLItX2yExR4u6R15sEO0KToItPnbZAiQ%2FUgvu24kwKDHleqfBcGDidlBIo8u%2BdpsLV3w7U3kFeAU%2F5oJ1m0wvKm3DEybP3lMU2SXklH%2FHO%2FqtM9w4HI85JIMhW3gIPz6UtUcMEXVKHDF5Ah78CJZeERcB54%2BoVgQxTqBCuG8G8f0VJbrjhBwqzycO2T%2BlCnKxS96eMU&X-Amz-Signature=3afe19f7ddb797c23d3bf3648ead876aaa2e32087b017f90f78f5c5c6ea60fab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSZC7RC%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDGYGSguUC2OWPu4YL8%2FpDFnndSChsdXPqDbLqUOLBywAiBUt248OZgUlcuDuMTLzaK%2Bkwsvca7QOT1HH6DwScHwaSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzJbpgWY0VkrmsnjoKtwDRWixcdAPGYrEEPYgyltZka4lEaTFd4%2BLJiUxTRaJQXjwy9raVAHJKDJFp73QeY%2FXa8gD2VqMI462%2FGfl98HoUMzoNpBevbrUTY4mOUdKK2Yx5R7HMoUBpaz3FF1YsdhbvRRqP6BB5kFbEqdxv83Co7UL9ljo4UpCjRF5uPdzFF2hktEr3cRXTEKzB1pPc9tG6NsLndGT0ClKifbWfcCgDmwGvuL6b9JtsDjkArdeSagPRemoUzJYQvCEjM7kUEdQFBxlZlt0tj%2FJ31Er3wVXqMhZ2jhoY3ONOMaT8PZS0Sfl2AqgNuqsL2%2BUBuM%2Ffqb5g31TiVfrCDTcw92nvr2V%2FpaIYcgUTx%2BFMlwG5uaG1nL77M1gbb8RaBHF9d%2B%2B0Fv%2FzEJM%2FK3Cw%2BTFBvstB6%2BSdqTivSX3%2FYM7dPOPSUwWwxB%2BokQ8dGKlN3ymBEmfP73V4a5pckIVp7Zc3fuBOcQxuL30YplXOOqVnmYXXGBqSvF5yAbOFTH9l3N9HuByqeer6Fz3IIY01e8P8hNvKgmx1zJ3UFFzoDGSkbZKgl%2F4XL5qlYFgCwvRDu8JQmIdhJeq8Fy7K4Mn9WPUaLK%2BuVGRsT0vjiPbvVlXwOxXWFiRkoN8OCgM8kMysy%2BGQwEwkb7uvwY6pgH0SCJMTMSWzSjt74wAY3cReoLItX2yExR4u6R15sEO0KToItPnbZAiQ%2FUgvu24kwKDHleqfBcGDidlBIo8u%2BdpsLV3w7U3kFeAU%2F5oJ1m0wvKm3DEybP3lMU2SXklH%2FHO%2FqtM9w4HI85JIMhW3gIPz6UtUcMEXVKHDF5Ah78CJZeERcB54%2BoVgQxTqBCuG8G8f0VJbrjhBwqzycO2T%2BlCnKxS96eMU&X-Amz-Signature=77fa35c43b15f46e8a6f9729068a0ad43e211ac40217231efaedb56bb753ac4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSZC7RC%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDGYGSguUC2OWPu4YL8%2FpDFnndSChsdXPqDbLqUOLBywAiBUt248OZgUlcuDuMTLzaK%2Bkwsvca7QOT1HH6DwScHwaSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzJbpgWY0VkrmsnjoKtwDRWixcdAPGYrEEPYgyltZka4lEaTFd4%2BLJiUxTRaJQXjwy9raVAHJKDJFp73QeY%2FXa8gD2VqMI462%2FGfl98HoUMzoNpBevbrUTY4mOUdKK2Yx5R7HMoUBpaz3FF1YsdhbvRRqP6BB5kFbEqdxv83Co7UL9ljo4UpCjRF5uPdzFF2hktEr3cRXTEKzB1pPc9tG6NsLndGT0ClKifbWfcCgDmwGvuL6b9JtsDjkArdeSagPRemoUzJYQvCEjM7kUEdQFBxlZlt0tj%2FJ31Er3wVXqMhZ2jhoY3ONOMaT8PZS0Sfl2AqgNuqsL2%2BUBuM%2Ffqb5g31TiVfrCDTcw92nvr2V%2FpaIYcgUTx%2BFMlwG5uaG1nL77M1gbb8RaBHF9d%2B%2B0Fv%2FzEJM%2FK3Cw%2BTFBvstB6%2BSdqTivSX3%2FYM7dPOPSUwWwxB%2BokQ8dGKlN3ymBEmfP73V4a5pckIVp7Zc3fuBOcQxuL30YplXOOqVnmYXXGBqSvF5yAbOFTH9l3N9HuByqeer6Fz3IIY01e8P8hNvKgmx1zJ3UFFzoDGSkbZKgl%2F4XL5qlYFgCwvRDu8JQmIdhJeq8Fy7K4Mn9WPUaLK%2BuVGRsT0vjiPbvVlXwOxXWFiRkoN8OCgM8kMysy%2BGQwEwkb7uvwY6pgH0SCJMTMSWzSjt74wAY3cReoLItX2yExR4u6R15sEO0KToItPnbZAiQ%2FUgvu24kwKDHleqfBcGDidlBIo8u%2BdpsLV3w7U3kFeAU%2F5oJ1m0wvKm3DEybP3lMU2SXklH%2FHO%2FqtM9w4HI85JIMhW3gIPz6UtUcMEXVKHDF5Ah78CJZeERcB54%2BoVgQxTqBCuG8G8f0VJbrjhBwqzycO2T%2BlCnKxS96eMU&X-Amz-Signature=21169036e9f9df9f76231cab314a46c12cfac62fc535061cb88162aa64740477&X-Amz-SignedHeaders=host&x-id=GetObject)
