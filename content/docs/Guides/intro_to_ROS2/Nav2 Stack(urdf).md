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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRNT7WN%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC51zyGUHZKl%2BWuztsnqW7aRxVOn9iEIoKhxABBLQpSQgIgEmf1SmQmp5JK%2FZ0eS5PcFHXkC5j5rPWw707e9GPk4zEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFS8iZ49tcZLlPPtvCrcA%2BkHqQVK7WMDh9ycPUj0levGDqnDHEZBVkbawsJzbimxvyvhbdlc3vG50448egK24AiGHrbLakFKe4cyjHI%2BoJzFEJXPPse3WDUQ13jRv9JKd%2Bew76rCKnEX6YMWnx1B196Uzuk181uW7AlA9F7cqzIHrhwP%2Bd5V1vFqS0U8L6a4CIYf0VyC%2BzxmIGFpA%2FHUvQ1qWlzgZvFT%2FEVdx7ngvajru5B%2FEIL7m2mq%2Bzd%2FJwqf5kqE4YMEk7jTgNTXleLyabiT01h%2BvB9%2FRo8msIMvvD5qnIzU9B5ip7l6s01oFT63PgRbruUrfcTusdBsNwxqcXb4itH1ZEYloSgepDC8GJ9mYHQ1mYVBZg3jzV5I25PWh5ELET%2FRoX4pEwjkD%2BeOSOCSFj9CBeut4zrw1vVrgXxdtXbq1MDvQr8F0E4Yic390Q0%2FOgDgskvXlPoWRNKEDIBaLex2wThu4aCGlTYyAiyJJcEbrhxLQaDGXwusHX%2BrIVGNuN1grQmgRk29Z7F2BOZx3hUXQo83L%2FyC40rmdJuC%2F9qaF1tnxcs2qTIWwYEdOdhHIwrx7O5MINBqQgmVHQgKNduskOrYMclSzQpO1%2BDokrtLpOK%2Ba5ahYyZ5TLWRO2%2Fx2cTsNyLhatyxMPGP3b8GOqUBZ3Ab2B8dU1FKqnXdsXtge5R5aF84yjmphXfHzkI%2FI2UowTzS7%2BSjQIgykrjy4PoUjU9qMzkedf9fAnQHteJ5UfgnFqFAtfu0lIrm9DIi9zivHEfn6EgdY1nFGgDPvFhc%2BspLXgWxLPRHEjCEcCajgBVYCyvRTLe9pXmBpN4bW0nXuXcQksjuHE6aFh6RU8lkKONMXMkpt%2BlGJXoReht1%2BCCBLA%2BD&X-Amz-Signature=81280b484380a9431e0110d3678be24dc01eb71b291a0e3a573d4275501e4432&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRNT7WN%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC51zyGUHZKl%2BWuztsnqW7aRxVOn9iEIoKhxABBLQpSQgIgEmf1SmQmp5JK%2FZ0eS5PcFHXkC5j5rPWw707e9GPk4zEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFS8iZ49tcZLlPPtvCrcA%2BkHqQVK7WMDh9ycPUj0levGDqnDHEZBVkbawsJzbimxvyvhbdlc3vG50448egK24AiGHrbLakFKe4cyjHI%2BoJzFEJXPPse3WDUQ13jRv9JKd%2Bew76rCKnEX6YMWnx1B196Uzuk181uW7AlA9F7cqzIHrhwP%2Bd5V1vFqS0U8L6a4CIYf0VyC%2BzxmIGFpA%2FHUvQ1qWlzgZvFT%2FEVdx7ngvajru5B%2FEIL7m2mq%2Bzd%2FJwqf5kqE4YMEk7jTgNTXleLyabiT01h%2BvB9%2FRo8msIMvvD5qnIzU9B5ip7l6s01oFT63PgRbruUrfcTusdBsNwxqcXb4itH1ZEYloSgepDC8GJ9mYHQ1mYVBZg3jzV5I25PWh5ELET%2FRoX4pEwjkD%2BeOSOCSFj9CBeut4zrw1vVrgXxdtXbq1MDvQr8F0E4Yic390Q0%2FOgDgskvXlPoWRNKEDIBaLex2wThu4aCGlTYyAiyJJcEbrhxLQaDGXwusHX%2BrIVGNuN1grQmgRk29Z7F2BOZx3hUXQo83L%2FyC40rmdJuC%2F9qaF1tnxcs2qTIWwYEdOdhHIwrx7O5MINBqQgmVHQgKNduskOrYMclSzQpO1%2BDokrtLpOK%2Ba5ahYyZ5TLWRO2%2Fx2cTsNyLhatyxMPGP3b8GOqUBZ3Ab2B8dU1FKqnXdsXtge5R5aF84yjmphXfHzkI%2FI2UowTzS7%2BSjQIgykrjy4PoUjU9qMzkedf9fAnQHteJ5UfgnFqFAtfu0lIrm9DIi9zivHEfn6EgdY1nFGgDPvFhc%2BspLXgWxLPRHEjCEcCajgBVYCyvRTLe9pXmBpN4bW0nXuXcQksjuHE6aFh6RU8lkKONMXMkpt%2BlGJXoReht1%2BCCBLA%2BD&X-Amz-Signature=64c7f8a625aa784dd1d8b1645abe704bd040402c5dcf0fae379513f0019fb81a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRNT7WN%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC51zyGUHZKl%2BWuztsnqW7aRxVOn9iEIoKhxABBLQpSQgIgEmf1SmQmp5JK%2FZ0eS5PcFHXkC5j5rPWw707e9GPk4zEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFS8iZ49tcZLlPPtvCrcA%2BkHqQVK7WMDh9ycPUj0levGDqnDHEZBVkbawsJzbimxvyvhbdlc3vG50448egK24AiGHrbLakFKe4cyjHI%2BoJzFEJXPPse3WDUQ13jRv9JKd%2Bew76rCKnEX6YMWnx1B196Uzuk181uW7AlA9F7cqzIHrhwP%2Bd5V1vFqS0U8L6a4CIYf0VyC%2BzxmIGFpA%2FHUvQ1qWlzgZvFT%2FEVdx7ngvajru5B%2FEIL7m2mq%2Bzd%2FJwqf5kqE4YMEk7jTgNTXleLyabiT01h%2BvB9%2FRo8msIMvvD5qnIzU9B5ip7l6s01oFT63PgRbruUrfcTusdBsNwxqcXb4itH1ZEYloSgepDC8GJ9mYHQ1mYVBZg3jzV5I25PWh5ELET%2FRoX4pEwjkD%2BeOSOCSFj9CBeut4zrw1vVrgXxdtXbq1MDvQr8F0E4Yic390Q0%2FOgDgskvXlPoWRNKEDIBaLex2wThu4aCGlTYyAiyJJcEbrhxLQaDGXwusHX%2BrIVGNuN1grQmgRk29Z7F2BOZx3hUXQo83L%2FyC40rmdJuC%2F9qaF1tnxcs2qTIWwYEdOdhHIwrx7O5MINBqQgmVHQgKNduskOrYMclSzQpO1%2BDokrtLpOK%2Ba5ahYyZ5TLWRO2%2Fx2cTsNyLhatyxMPGP3b8GOqUBZ3Ab2B8dU1FKqnXdsXtge5R5aF84yjmphXfHzkI%2FI2UowTzS7%2BSjQIgykrjy4PoUjU9qMzkedf9fAnQHteJ5UfgnFqFAtfu0lIrm9DIi9zivHEfn6EgdY1nFGgDPvFhc%2BspLXgWxLPRHEjCEcCajgBVYCyvRTLe9pXmBpN4bW0nXuXcQksjuHE6aFh6RU8lkKONMXMkpt%2BlGJXoReht1%2BCCBLA%2BD&X-Amz-Signature=c75949574e9ed5bdcdb3505f24553ca3ea7504763a41b7254462de410eaf6d32&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRNT7WN%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC51zyGUHZKl%2BWuztsnqW7aRxVOn9iEIoKhxABBLQpSQgIgEmf1SmQmp5JK%2FZ0eS5PcFHXkC5j5rPWw707e9GPk4zEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFS8iZ49tcZLlPPtvCrcA%2BkHqQVK7WMDh9ycPUj0levGDqnDHEZBVkbawsJzbimxvyvhbdlc3vG50448egK24AiGHrbLakFKe4cyjHI%2BoJzFEJXPPse3WDUQ13jRv9JKd%2Bew76rCKnEX6YMWnx1B196Uzuk181uW7AlA9F7cqzIHrhwP%2Bd5V1vFqS0U8L6a4CIYf0VyC%2BzxmIGFpA%2FHUvQ1qWlzgZvFT%2FEVdx7ngvajru5B%2FEIL7m2mq%2Bzd%2FJwqf5kqE4YMEk7jTgNTXleLyabiT01h%2BvB9%2FRo8msIMvvD5qnIzU9B5ip7l6s01oFT63PgRbruUrfcTusdBsNwxqcXb4itH1ZEYloSgepDC8GJ9mYHQ1mYVBZg3jzV5I25PWh5ELET%2FRoX4pEwjkD%2BeOSOCSFj9CBeut4zrw1vVrgXxdtXbq1MDvQr8F0E4Yic390Q0%2FOgDgskvXlPoWRNKEDIBaLex2wThu4aCGlTYyAiyJJcEbrhxLQaDGXwusHX%2BrIVGNuN1grQmgRk29Z7F2BOZx3hUXQo83L%2FyC40rmdJuC%2F9qaF1tnxcs2qTIWwYEdOdhHIwrx7O5MINBqQgmVHQgKNduskOrYMclSzQpO1%2BDokrtLpOK%2Ba5ahYyZ5TLWRO2%2Fx2cTsNyLhatyxMPGP3b8GOqUBZ3Ab2B8dU1FKqnXdsXtge5R5aF84yjmphXfHzkI%2FI2UowTzS7%2BSjQIgykrjy4PoUjU9qMzkedf9fAnQHteJ5UfgnFqFAtfu0lIrm9DIi9zivHEfn6EgdY1nFGgDPvFhc%2BspLXgWxLPRHEjCEcCajgBVYCyvRTLe9pXmBpN4bW0nXuXcQksjuHE6aFh6RU8lkKONMXMkpt%2BlGJXoReht1%2BCCBLA%2BD&X-Amz-Signature=9f16081b8487700496a208652dc5691aa8bfd037ed5e50ae1dc97fe6b5388e38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRNT7WN%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC51zyGUHZKl%2BWuztsnqW7aRxVOn9iEIoKhxABBLQpSQgIgEmf1SmQmp5JK%2FZ0eS5PcFHXkC5j5rPWw707e9GPk4zEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFS8iZ49tcZLlPPtvCrcA%2BkHqQVK7WMDh9ycPUj0levGDqnDHEZBVkbawsJzbimxvyvhbdlc3vG50448egK24AiGHrbLakFKe4cyjHI%2BoJzFEJXPPse3WDUQ13jRv9JKd%2Bew76rCKnEX6YMWnx1B196Uzuk181uW7AlA9F7cqzIHrhwP%2Bd5V1vFqS0U8L6a4CIYf0VyC%2BzxmIGFpA%2FHUvQ1qWlzgZvFT%2FEVdx7ngvajru5B%2FEIL7m2mq%2Bzd%2FJwqf5kqE4YMEk7jTgNTXleLyabiT01h%2BvB9%2FRo8msIMvvD5qnIzU9B5ip7l6s01oFT63PgRbruUrfcTusdBsNwxqcXb4itH1ZEYloSgepDC8GJ9mYHQ1mYVBZg3jzV5I25PWh5ELET%2FRoX4pEwjkD%2BeOSOCSFj9CBeut4zrw1vVrgXxdtXbq1MDvQr8F0E4Yic390Q0%2FOgDgskvXlPoWRNKEDIBaLex2wThu4aCGlTYyAiyJJcEbrhxLQaDGXwusHX%2BrIVGNuN1grQmgRk29Z7F2BOZx3hUXQo83L%2FyC40rmdJuC%2F9qaF1tnxcs2qTIWwYEdOdhHIwrx7O5MINBqQgmVHQgKNduskOrYMclSzQpO1%2BDokrtLpOK%2Ba5ahYyZ5TLWRO2%2Fx2cTsNyLhatyxMPGP3b8GOqUBZ3Ab2B8dU1FKqnXdsXtge5R5aF84yjmphXfHzkI%2FI2UowTzS7%2BSjQIgykrjy4PoUjU9qMzkedf9fAnQHteJ5UfgnFqFAtfu0lIrm9DIi9zivHEfn6EgdY1nFGgDPvFhc%2BspLXgWxLPRHEjCEcCajgBVYCyvRTLe9pXmBpN4bW0nXuXcQksjuHE6aFh6RU8lkKONMXMkpt%2BlGJXoReht1%2BCCBLA%2BD&X-Amz-Signature=7a3314b7fa8c4c1d7ef6272be5f6c996592a6f4a34248d74381a4773dd6de068&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRNT7WN%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC51zyGUHZKl%2BWuztsnqW7aRxVOn9iEIoKhxABBLQpSQgIgEmf1SmQmp5JK%2FZ0eS5PcFHXkC5j5rPWw707e9GPk4zEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFS8iZ49tcZLlPPtvCrcA%2BkHqQVK7WMDh9ycPUj0levGDqnDHEZBVkbawsJzbimxvyvhbdlc3vG50448egK24AiGHrbLakFKe4cyjHI%2BoJzFEJXPPse3WDUQ13jRv9JKd%2Bew76rCKnEX6YMWnx1B196Uzuk181uW7AlA9F7cqzIHrhwP%2Bd5V1vFqS0U8L6a4CIYf0VyC%2BzxmIGFpA%2FHUvQ1qWlzgZvFT%2FEVdx7ngvajru5B%2FEIL7m2mq%2Bzd%2FJwqf5kqE4YMEk7jTgNTXleLyabiT01h%2BvB9%2FRo8msIMvvD5qnIzU9B5ip7l6s01oFT63PgRbruUrfcTusdBsNwxqcXb4itH1ZEYloSgepDC8GJ9mYHQ1mYVBZg3jzV5I25PWh5ELET%2FRoX4pEwjkD%2BeOSOCSFj9CBeut4zrw1vVrgXxdtXbq1MDvQr8F0E4Yic390Q0%2FOgDgskvXlPoWRNKEDIBaLex2wThu4aCGlTYyAiyJJcEbrhxLQaDGXwusHX%2BrIVGNuN1grQmgRk29Z7F2BOZx3hUXQo83L%2FyC40rmdJuC%2F9qaF1tnxcs2qTIWwYEdOdhHIwrx7O5MINBqQgmVHQgKNduskOrYMclSzQpO1%2BDokrtLpOK%2Ba5ahYyZ5TLWRO2%2Fx2cTsNyLhatyxMPGP3b8GOqUBZ3Ab2B8dU1FKqnXdsXtge5R5aF84yjmphXfHzkI%2FI2UowTzS7%2BSjQIgykrjy4PoUjU9qMzkedf9fAnQHteJ5UfgnFqFAtfu0lIrm9DIi9zivHEfn6EgdY1nFGgDPvFhc%2BspLXgWxLPRHEjCEcCajgBVYCyvRTLe9pXmBpN4bW0nXuXcQksjuHE6aFh6RU8lkKONMXMkpt%2BlGJXoReht1%2BCCBLA%2BD&X-Amz-Signature=d0065fce9d6e64004e69c5873af84397923e27bc94b30b71e8e4dafb91394208&X-Amz-SignedHeaders=host&x-id=GetObject)
