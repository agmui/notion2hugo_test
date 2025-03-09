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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXFAMAV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDTBjT4zkBuBvac0QITJGF8wNFFZ38h%2B7GAg0DCB3WLFwIhALGdnU2lmbd2TByoM5nbYk7ppqsHVGVZbltYzTQC%2BNjRKv8DCH0QABoMNjM3NDIzMTgzODA1Igz9I3S4KWeCtJ%2Bf8I8q3APfuuMDjZiY%2F6%2FQN7XfIl9BOMYgfDk1M74Bq4JHd1ZGaBEIiq3bV16FkQV1jDX%2Bx3QqPAHBSGPR46FWSw6UncNjJGN2OLRq7ONK4sCBdhfy2w3qFjlC2%2FqiFLgPYVDSYUuB1F%2FH1jlkqKp2NTCvbNzUZJ39rbrbHDiXGaZBi6EVO0rZDhvZzperK6CDx2i2KGpaIrYfO%2Be9wHKlzrlJdv%2FHjY9WpzNSHZGiHh%2BrZzuKA4xhOUgdAx2CfUEc%2FfXBwIQMt7ozGiUSOPXAEhYowgaiqMUIuzvR3uHrV%2BGotNcoa44qhJ%2FZMTO1Hab%2FYpnwBLMxtlYivaBBx8Ut9DynqxiLhd1mXsGSXU6a7ylZnoSkhdQDZVUNy92af54K0n4uzDwS%2FQdiormenrcnj6%2B033z64sFO5GT3MBQAUXb7rAS9LMFxbg4Cs7d28sRscdpmKL5Uem19cZLZ48K1qLE2xl3nZ%2FSKx3sqX8eiPRyyQC9xY77hTpvL3W5%2BekgXqZVMeH%2FJtkSC2PT%2BAFcgWLV3ZvnlBqwA4nuaa%2BnnmoZVz3oC4WPnBnMpSp6lRAJvPht%2Fhi7GmVVJzBw3bbucUolMlXvF7t7POw1K00mlHh9iqy6Ql%2Bf6yvytTWNqLbd7pTDv4Le%2BBjqkAULtB36iky3Tj%2FRPZ7uC16UB06xHSRwQYh7Mn94JoFUxxLnvJZMH5IPM3%2BOvNwcIAv1B83qQPpNxT03kMKY2eLe7kF83t8c9z2CT624e7k08u%2FYjgwLKH1164Us8bYt44xTn4V0ukm7lOYjcQTPfKHl2nJKJCE29g%2FyKKRR9cB8Sih5vHuChCH4kyMTfvaD4etl8vO5SZ1V5ulBrdaynujSJ5Rej&X-Amz-Signature=2d783a2157b1392570298cb3182321e943b0bd5648c17af7ceebec3752afdd69&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXFAMAV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDTBjT4zkBuBvac0QITJGF8wNFFZ38h%2B7GAg0DCB3WLFwIhALGdnU2lmbd2TByoM5nbYk7ppqsHVGVZbltYzTQC%2BNjRKv8DCH0QABoMNjM3NDIzMTgzODA1Igz9I3S4KWeCtJ%2Bf8I8q3APfuuMDjZiY%2F6%2FQN7XfIl9BOMYgfDk1M74Bq4JHd1ZGaBEIiq3bV16FkQV1jDX%2Bx3QqPAHBSGPR46FWSw6UncNjJGN2OLRq7ONK4sCBdhfy2w3qFjlC2%2FqiFLgPYVDSYUuB1F%2FH1jlkqKp2NTCvbNzUZJ39rbrbHDiXGaZBi6EVO0rZDhvZzperK6CDx2i2KGpaIrYfO%2Be9wHKlzrlJdv%2FHjY9WpzNSHZGiHh%2BrZzuKA4xhOUgdAx2CfUEc%2FfXBwIQMt7ozGiUSOPXAEhYowgaiqMUIuzvR3uHrV%2BGotNcoa44qhJ%2FZMTO1Hab%2FYpnwBLMxtlYivaBBx8Ut9DynqxiLhd1mXsGSXU6a7ylZnoSkhdQDZVUNy92af54K0n4uzDwS%2FQdiormenrcnj6%2B033z64sFO5GT3MBQAUXb7rAS9LMFxbg4Cs7d28sRscdpmKL5Uem19cZLZ48K1qLE2xl3nZ%2FSKx3sqX8eiPRyyQC9xY77hTpvL3W5%2BekgXqZVMeH%2FJtkSC2PT%2BAFcgWLV3ZvnlBqwA4nuaa%2BnnmoZVz3oC4WPnBnMpSp6lRAJvPht%2Fhi7GmVVJzBw3bbucUolMlXvF7t7POw1K00mlHh9iqy6Ql%2Bf6yvytTWNqLbd7pTDv4Le%2BBjqkAULtB36iky3Tj%2FRPZ7uC16UB06xHSRwQYh7Mn94JoFUxxLnvJZMH5IPM3%2BOvNwcIAv1B83qQPpNxT03kMKY2eLe7kF83t8c9z2CT624e7k08u%2FYjgwLKH1164Us8bYt44xTn4V0ukm7lOYjcQTPfKHl2nJKJCE29g%2FyKKRR9cB8Sih5vHuChCH4kyMTfvaD4etl8vO5SZ1V5ulBrdaynujSJ5Rej&X-Amz-Signature=265f8eb6bc6586435488624603280e2f5657daa64f7df4cdb8c0daeb23c3288a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXFAMAV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDTBjT4zkBuBvac0QITJGF8wNFFZ38h%2B7GAg0DCB3WLFwIhALGdnU2lmbd2TByoM5nbYk7ppqsHVGVZbltYzTQC%2BNjRKv8DCH0QABoMNjM3NDIzMTgzODA1Igz9I3S4KWeCtJ%2Bf8I8q3APfuuMDjZiY%2F6%2FQN7XfIl9BOMYgfDk1M74Bq4JHd1ZGaBEIiq3bV16FkQV1jDX%2Bx3QqPAHBSGPR46FWSw6UncNjJGN2OLRq7ONK4sCBdhfy2w3qFjlC2%2FqiFLgPYVDSYUuB1F%2FH1jlkqKp2NTCvbNzUZJ39rbrbHDiXGaZBi6EVO0rZDhvZzperK6CDx2i2KGpaIrYfO%2Be9wHKlzrlJdv%2FHjY9WpzNSHZGiHh%2BrZzuKA4xhOUgdAx2CfUEc%2FfXBwIQMt7ozGiUSOPXAEhYowgaiqMUIuzvR3uHrV%2BGotNcoa44qhJ%2FZMTO1Hab%2FYpnwBLMxtlYivaBBx8Ut9DynqxiLhd1mXsGSXU6a7ylZnoSkhdQDZVUNy92af54K0n4uzDwS%2FQdiormenrcnj6%2B033z64sFO5GT3MBQAUXb7rAS9LMFxbg4Cs7d28sRscdpmKL5Uem19cZLZ48K1qLE2xl3nZ%2FSKx3sqX8eiPRyyQC9xY77hTpvL3W5%2BekgXqZVMeH%2FJtkSC2PT%2BAFcgWLV3ZvnlBqwA4nuaa%2BnnmoZVz3oC4WPnBnMpSp6lRAJvPht%2Fhi7GmVVJzBw3bbucUolMlXvF7t7POw1K00mlHh9iqy6Ql%2Bf6yvytTWNqLbd7pTDv4Le%2BBjqkAULtB36iky3Tj%2FRPZ7uC16UB06xHSRwQYh7Mn94JoFUxxLnvJZMH5IPM3%2BOvNwcIAv1B83qQPpNxT03kMKY2eLe7kF83t8c9z2CT624e7k08u%2FYjgwLKH1164Us8bYt44xTn4V0ukm7lOYjcQTPfKHl2nJKJCE29g%2FyKKRR9cB8Sih5vHuChCH4kyMTfvaD4etl8vO5SZ1V5ulBrdaynujSJ5Rej&X-Amz-Signature=71aac3d2558e8d52c78394dae7e6dcfcd8a103c2a56778fa50c58ccee3e8c9ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXFAMAV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDTBjT4zkBuBvac0QITJGF8wNFFZ38h%2B7GAg0DCB3WLFwIhALGdnU2lmbd2TByoM5nbYk7ppqsHVGVZbltYzTQC%2BNjRKv8DCH0QABoMNjM3NDIzMTgzODA1Igz9I3S4KWeCtJ%2Bf8I8q3APfuuMDjZiY%2F6%2FQN7XfIl9BOMYgfDk1M74Bq4JHd1ZGaBEIiq3bV16FkQV1jDX%2Bx3QqPAHBSGPR46FWSw6UncNjJGN2OLRq7ONK4sCBdhfy2w3qFjlC2%2FqiFLgPYVDSYUuB1F%2FH1jlkqKp2NTCvbNzUZJ39rbrbHDiXGaZBi6EVO0rZDhvZzperK6CDx2i2KGpaIrYfO%2Be9wHKlzrlJdv%2FHjY9WpzNSHZGiHh%2BrZzuKA4xhOUgdAx2CfUEc%2FfXBwIQMt7ozGiUSOPXAEhYowgaiqMUIuzvR3uHrV%2BGotNcoa44qhJ%2FZMTO1Hab%2FYpnwBLMxtlYivaBBx8Ut9DynqxiLhd1mXsGSXU6a7ylZnoSkhdQDZVUNy92af54K0n4uzDwS%2FQdiormenrcnj6%2B033z64sFO5GT3MBQAUXb7rAS9LMFxbg4Cs7d28sRscdpmKL5Uem19cZLZ48K1qLE2xl3nZ%2FSKx3sqX8eiPRyyQC9xY77hTpvL3W5%2BekgXqZVMeH%2FJtkSC2PT%2BAFcgWLV3ZvnlBqwA4nuaa%2BnnmoZVz3oC4WPnBnMpSp6lRAJvPht%2Fhi7GmVVJzBw3bbucUolMlXvF7t7POw1K00mlHh9iqy6Ql%2Bf6yvytTWNqLbd7pTDv4Le%2BBjqkAULtB36iky3Tj%2FRPZ7uC16UB06xHSRwQYh7Mn94JoFUxxLnvJZMH5IPM3%2BOvNwcIAv1B83qQPpNxT03kMKY2eLe7kF83t8c9z2CT624e7k08u%2FYjgwLKH1164Us8bYt44xTn4V0ukm7lOYjcQTPfKHl2nJKJCE29g%2FyKKRR9cB8Sih5vHuChCH4kyMTfvaD4etl8vO5SZ1V5ulBrdaynujSJ5Rej&X-Amz-Signature=12c4e8726d0085cb470eebcc8e5a9d324e4a7a8a1f6bdbe0a0f4cc98a08ff8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXFAMAV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDTBjT4zkBuBvac0QITJGF8wNFFZ38h%2B7GAg0DCB3WLFwIhALGdnU2lmbd2TByoM5nbYk7ppqsHVGVZbltYzTQC%2BNjRKv8DCH0QABoMNjM3NDIzMTgzODA1Igz9I3S4KWeCtJ%2Bf8I8q3APfuuMDjZiY%2F6%2FQN7XfIl9BOMYgfDk1M74Bq4JHd1ZGaBEIiq3bV16FkQV1jDX%2Bx3QqPAHBSGPR46FWSw6UncNjJGN2OLRq7ONK4sCBdhfy2w3qFjlC2%2FqiFLgPYVDSYUuB1F%2FH1jlkqKp2NTCvbNzUZJ39rbrbHDiXGaZBi6EVO0rZDhvZzperK6CDx2i2KGpaIrYfO%2Be9wHKlzrlJdv%2FHjY9WpzNSHZGiHh%2BrZzuKA4xhOUgdAx2CfUEc%2FfXBwIQMt7ozGiUSOPXAEhYowgaiqMUIuzvR3uHrV%2BGotNcoa44qhJ%2FZMTO1Hab%2FYpnwBLMxtlYivaBBx8Ut9DynqxiLhd1mXsGSXU6a7ylZnoSkhdQDZVUNy92af54K0n4uzDwS%2FQdiormenrcnj6%2B033z64sFO5GT3MBQAUXb7rAS9LMFxbg4Cs7d28sRscdpmKL5Uem19cZLZ48K1qLE2xl3nZ%2FSKx3sqX8eiPRyyQC9xY77hTpvL3W5%2BekgXqZVMeH%2FJtkSC2PT%2BAFcgWLV3ZvnlBqwA4nuaa%2BnnmoZVz3oC4WPnBnMpSp6lRAJvPht%2Fhi7GmVVJzBw3bbucUolMlXvF7t7POw1K00mlHh9iqy6Ql%2Bf6yvytTWNqLbd7pTDv4Le%2BBjqkAULtB36iky3Tj%2FRPZ7uC16UB06xHSRwQYh7Mn94JoFUxxLnvJZMH5IPM3%2BOvNwcIAv1B83qQPpNxT03kMKY2eLe7kF83t8c9z2CT624e7k08u%2FYjgwLKH1164Us8bYt44xTn4V0ukm7lOYjcQTPfKHl2nJKJCE29g%2FyKKRR9cB8Sih5vHuChCH4kyMTfvaD4etl8vO5SZ1V5ulBrdaynujSJ5Rej&X-Amz-Signature=307720426d95485dc6d3ba50d4f5c503f86e690b0a4fa81dd9597c343d466d07&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXFAMAV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDTBjT4zkBuBvac0QITJGF8wNFFZ38h%2B7GAg0DCB3WLFwIhALGdnU2lmbd2TByoM5nbYk7ppqsHVGVZbltYzTQC%2BNjRKv8DCH0QABoMNjM3NDIzMTgzODA1Igz9I3S4KWeCtJ%2Bf8I8q3APfuuMDjZiY%2F6%2FQN7XfIl9BOMYgfDk1M74Bq4JHd1ZGaBEIiq3bV16FkQV1jDX%2Bx3QqPAHBSGPR46FWSw6UncNjJGN2OLRq7ONK4sCBdhfy2w3qFjlC2%2FqiFLgPYVDSYUuB1F%2FH1jlkqKp2NTCvbNzUZJ39rbrbHDiXGaZBi6EVO0rZDhvZzperK6CDx2i2KGpaIrYfO%2Be9wHKlzrlJdv%2FHjY9WpzNSHZGiHh%2BrZzuKA4xhOUgdAx2CfUEc%2FfXBwIQMt7ozGiUSOPXAEhYowgaiqMUIuzvR3uHrV%2BGotNcoa44qhJ%2FZMTO1Hab%2FYpnwBLMxtlYivaBBx8Ut9DynqxiLhd1mXsGSXU6a7ylZnoSkhdQDZVUNy92af54K0n4uzDwS%2FQdiormenrcnj6%2B033z64sFO5GT3MBQAUXb7rAS9LMFxbg4Cs7d28sRscdpmKL5Uem19cZLZ48K1qLE2xl3nZ%2FSKx3sqX8eiPRyyQC9xY77hTpvL3W5%2BekgXqZVMeH%2FJtkSC2PT%2BAFcgWLV3ZvnlBqwA4nuaa%2BnnmoZVz3oC4WPnBnMpSp6lRAJvPht%2Fhi7GmVVJzBw3bbucUolMlXvF7t7POw1K00mlHh9iqy6Ql%2Bf6yvytTWNqLbd7pTDv4Le%2BBjqkAULtB36iky3Tj%2FRPZ7uC16UB06xHSRwQYh7Mn94JoFUxxLnvJZMH5IPM3%2BOvNwcIAv1B83qQPpNxT03kMKY2eLe7kF83t8c9z2CT624e7k08u%2FYjgwLKH1164Us8bYt44xTn4V0ukm7lOYjcQTPfKHl2nJKJCE29g%2FyKKRR9cB8Sih5vHuChCH4kyMTfvaD4etl8vO5SZ1V5ulBrdaynujSJ5Rej&X-Amz-Signature=1a306d7a2784a1f3d3a67419b7fba6aa63e2d228c9fef7507a998275351d0254&X-Amz-SignedHeaders=host&x-id=GetObject)
