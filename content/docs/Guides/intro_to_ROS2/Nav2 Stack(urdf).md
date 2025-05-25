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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCTNNC6G%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD7oVGyVWG4G6nxgEPsHsLvCMGdK4On06%2BCEGgtlw8UigIhAPXEVooDX7nXxXVzCszmV9xTXamFJdYzTw9gmy%2B3E04TKv8DCCYQABoMNjM3NDIzMTgzODA1IgxZa7MmZ6aoiKMpNXwq3ANQXS%2BFnQntaYKlGqE7Vy8PVIFze3eSiX9%2FE%2BZrUosLjuaVSSG2%2FquJFSHpvT3nwtJQfqp1HrwKBDAsWWDEfeCxEkI%2BZuEW7wmi4k7Ogx3Wld%2B1%2BF9uCExp4Hwi9ZAOa5Yf5Ar3rmiLSUA1w4miq2xHu6wDZJZFqbbT31Ecd0RgvCgng5sGB87hr05mE7B1vUhoYKq1qM1669bXf6Rtxsd%2FbR%2FsINEA%2Bsa1MFULNFW6b%2FLKN9t1YGlefRV31kAL696GeXr4j5%2FPvq2SK5KF4cSFZ1QS0nWsU2SYflj1ik%2F7xEsaf8kvFljHBx9S03gySVL%2F8HO%2B3ukHfoSqY2jenbZ4Zp0uyts9PeshJHgQg2sDBWLQF2i5hUtEF4Ugk3xf2ugkRAiHw%2BogFkwcEtlLhx5risgAimlrW7innKPQ1feXFKnkXbuFvbhOoeekanxfnu0BLBEsEfFe3e4VJPVzgXI9hnL08yR9s4M9rM0FuDkteD9mw4GFiASX%2FOHA5Rx8L%2F92Pdw5PRFXAL7uQvdN9uQVxjFCeKwcHssDLQ%2FzBNjF31Z5L%2F9c8BdP3R6DBnBu6%2FJGJA73iaGZQb7suEGcGPiVh7nBcu3pLmNDOpLh5Q3AkIJRviNnfDmEdnKAUzDHucrBBjqkAed199VdEPfgpKFEa6G8pMSJYtnjhovFqj1qGIYwOKypkxpfB%2FHon%2BmMUtfhOgdSUkZznvBAWDNRsYSAB8KQDgQJ8y3jT8EBMXyFkw6Y4hiPYAUGQmwtm%2BG8Uwm1oViRS67YXZ9SPyNBIB5%2FnzmzS3igBlezzf9%2F10rH53l1DyA8r%2F3jxerYdM4x018MMg4DIAcmKdb8f1q%2BwgdXx1aIOgVoTYz2&X-Amz-Signature=6bfab233b28417c8cd3c1d816cbd3a7cded14a2be81ee92cf0786c35aaf2492b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCTNNC6G%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD7oVGyVWG4G6nxgEPsHsLvCMGdK4On06%2BCEGgtlw8UigIhAPXEVooDX7nXxXVzCszmV9xTXamFJdYzTw9gmy%2B3E04TKv8DCCYQABoMNjM3NDIzMTgzODA1IgxZa7MmZ6aoiKMpNXwq3ANQXS%2BFnQntaYKlGqE7Vy8PVIFze3eSiX9%2FE%2BZrUosLjuaVSSG2%2FquJFSHpvT3nwtJQfqp1HrwKBDAsWWDEfeCxEkI%2BZuEW7wmi4k7Ogx3Wld%2B1%2BF9uCExp4Hwi9ZAOa5Yf5Ar3rmiLSUA1w4miq2xHu6wDZJZFqbbT31Ecd0RgvCgng5sGB87hr05mE7B1vUhoYKq1qM1669bXf6Rtxsd%2FbR%2FsINEA%2Bsa1MFULNFW6b%2FLKN9t1YGlefRV31kAL696GeXr4j5%2FPvq2SK5KF4cSFZ1QS0nWsU2SYflj1ik%2F7xEsaf8kvFljHBx9S03gySVL%2F8HO%2B3ukHfoSqY2jenbZ4Zp0uyts9PeshJHgQg2sDBWLQF2i5hUtEF4Ugk3xf2ugkRAiHw%2BogFkwcEtlLhx5risgAimlrW7innKPQ1feXFKnkXbuFvbhOoeekanxfnu0BLBEsEfFe3e4VJPVzgXI9hnL08yR9s4M9rM0FuDkteD9mw4GFiASX%2FOHA5Rx8L%2F92Pdw5PRFXAL7uQvdN9uQVxjFCeKwcHssDLQ%2FzBNjF31Z5L%2F9c8BdP3R6DBnBu6%2FJGJA73iaGZQb7suEGcGPiVh7nBcu3pLmNDOpLh5Q3AkIJRviNnfDmEdnKAUzDHucrBBjqkAed199VdEPfgpKFEa6G8pMSJYtnjhovFqj1qGIYwOKypkxpfB%2FHon%2BmMUtfhOgdSUkZznvBAWDNRsYSAB8KQDgQJ8y3jT8EBMXyFkw6Y4hiPYAUGQmwtm%2BG8Uwm1oViRS67YXZ9SPyNBIB5%2FnzmzS3igBlezzf9%2F10rH53l1DyA8r%2F3jxerYdM4x018MMg4DIAcmKdb8f1q%2BwgdXx1aIOgVoTYz2&X-Amz-Signature=367bf0532c1fa36f78e5994de14b6d6131da481d0ee7ed9943bb542b415c028b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCTNNC6G%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD7oVGyVWG4G6nxgEPsHsLvCMGdK4On06%2BCEGgtlw8UigIhAPXEVooDX7nXxXVzCszmV9xTXamFJdYzTw9gmy%2B3E04TKv8DCCYQABoMNjM3NDIzMTgzODA1IgxZa7MmZ6aoiKMpNXwq3ANQXS%2BFnQntaYKlGqE7Vy8PVIFze3eSiX9%2FE%2BZrUosLjuaVSSG2%2FquJFSHpvT3nwtJQfqp1HrwKBDAsWWDEfeCxEkI%2BZuEW7wmi4k7Ogx3Wld%2B1%2BF9uCExp4Hwi9ZAOa5Yf5Ar3rmiLSUA1w4miq2xHu6wDZJZFqbbT31Ecd0RgvCgng5sGB87hr05mE7B1vUhoYKq1qM1669bXf6Rtxsd%2FbR%2FsINEA%2Bsa1MFULNFW6b%2FLKN9t1YGlefRV31kAL696GeXr4j5%2FPvq2SK5KF4cSFZ1QS0nWsU2SYflj1ik%2F7xEsaf8kvFljHBx9S03gySVL%2F8HO%2B3ukHfoSqY2jenbZ4Zp0uyts9PeshJHgQg2sDBWLQF2i5hUtEF4Ugk3xf2ugkRAiHw%2BogFkwcEtlLhx5risgAimlrW7innKPQ1feXFKnkXbuFvbhOoeekanxfnu0BLBEsEfFe3e4VJPVzgXI9hnL08yR9s4M9rM0FuDkteD9mw4GFiASX%2FOHA5Rx8L%2F92Pdw5PRFXAL7uQvdN9uQVxjFCeKwcHssDLQ%2FzBNjF31Z5L%2F9c8BdP3R6DBnBu6%2FJGJA73iaGZQb7suEGcGPiVh7nBcu3pLmNDOpLh5Q3AkIJRviNnfDmEdnKAUzDHucrBBjqkAed199VdEPfgpKFEa6G8pMSJYtnjhovFqj1qGIYwOKypkxpfB%2FHon%2BmMUtfhOgdSUkZznvBAWDNRsYSAB8KQDgQJ8y3jT8EBMXyFkw6Y4hiPYAUGQmwtm%2BG8Uwm1oViRS67YXZ9SPyNBIB5%2FnzmzS3igBlezzf9%2F10rH53l1DyA8r%2F3jxerYdM4x018MMg4DIAcmKdb8f1q%2BwgdXx1aIOgVoTYz2&X-Amz-Signature=58fa1796ea0bcf3b95b7188a01ecb2d9183446ba1d2ff2d4f5c7151e385c82d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCTNNC6G%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD7oVGyVWG4G6nxgEPsHsLvCMGdK4On06%2BCEGgtlw8UigIhAPXEVooDX7nXxXVzCszmV9xTXamFJdYzTw9gmy%2B3E04TKv8DCCYQABoMNjM3NDIzMTgzODA1IgxZa7MmZ6aoiKMpNXwq3ANQXS%2BFnQntaYKlGqE7Vy8PVIFze3eSiX9%2FE%2BZrUosLjuaVSSG2%2FquJFSHpvT3nwtJQfqp1HrwKBDAsWWDEfeCxEkI%2BZuEW7wmi4k7Ogx3Wld%2B1%2BF9uCExp4Hwi9ZAOa5Yf5Ar3rmiLSUA1w4miq2xHu6wDZJZFqbbT31Ecd0RgvCgng5sGB87hr05mE7B1vUhoYKq1qM1669bXf6Rtxsd%2FbR%2FsINEA%2Bsa1MFULNFW6b%2FLKN9t1YGlefRV31kAL696GeXr4j5%2FPvq2SK5KF4cSFZ1QS0nWsU2SYflj1ik%2F7xEsaf8kvFljHBx9S03gySVL%2F8HO%2B3ukHfoSqY2jenbZ4Zp0uyts9PeshJHgQg2sDBWLQF2i5hUtEF4Ugk3xf2ugkRAiHw%2BogFkwcEtlLhx5risgAimlrW7innKPQ1feXFKnkXbuFvbhOoeekanxfnu0BLBEsEfFe3e4VJPVzgXI9hnL08yR9s4M9rM0FuDkteD9mw4GFiASX%2FOHA5Rx8L%2F92Pdw5PRFXAL7uQvdN9uQVxjFCeKwcHssDLQ%2FzBNjF31Z5L%2F9c8BdP3R6DBnBu6%2FJGJA73iaGZQb7suEGcGPiVh7nBcu3pLmNDOpLh5Q3AkIJRviNnfDmEdnKAUzDHucrBBjqkAed199VdEPfgpKFEa6G8pMSJYtnjhovFqj1qGIYwOKypkxpfB%2FHon%2BmMUtfhOgdSUkZznvBAWDNRsYSAB8KQDgQJ8y3jT8EBMXyFkw6Y4hiPYAUGQmwtm%2BG8Uwm1oViRS67YXZ9SPyNBIB5%2FnzmzS3igBlezzf9%2F10rH53l1DyA8r%2F3jxerYdM4x018MMg4DIAcmKdb8f1q%2BwgdXx1aIOgVoTYz2&X-Amz-Signature=a70edb05863fcf13a978f677d9f18ccfe8f4d9b29491837c34b9314da83ed53c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCTNNC6G%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD7oVGyVWG4G6nxgEPsHsLvCMGdK4On06%2BCEGgtlw8UigIhAPXEVooDX7nXxXVzCszmV9xTXamFJdYzTw9gmy%2B3E04TKv8DCCYQABoMNjM3NDIzMTgzODA1IgxZa7MmZ6aoiKMpNXwq3ANQXS%2BFnQntaYKlGqE7Vy8PVIFze3eSiX9%2FE%2BZrUosLjuaVSSG2%2FquJFSHpvT3nwtJQfqp1HrwKBDAsWWDEfeCxEkI%2BZuEW7wmi4k7Ogx3Wld%2B1%2BF9uCExp4Hwi9ZAOa5Yf5Ar3rmiLSUA1w4miq2xHu6wDZJZFqbbT31Ecd0RgvCgng5sGB87hr05mE7B1vUhoYKq1qM1669bXf6Rtxsd%2FbR%2FsINEA%2Bsa1MFULNFW6b%2FLKN9t1YGlefRV31kAL696GeXr4j5%2FPvq2SK5KF4cSFZ1QS0nWsU2SYflj1ik%2F7xEsaf8kvFljHBx9S03gySVL%2F8HO%2B3ukHfoSqY2jenbZ4Zp0uyts9PeshJHgQg2sDBWLQF2i5hUtEF4Ugk3xf2ugkRAiHw%2BogFkwcEtlLhx5risgAimlrW7innKPQ1feXFKnkXbuFvbhOoeekanxfnu0BLBEsEfFe3e4VJPVzgXI9hnL08yR9s4M9rM0FuDkteD9mw4GFiASX%2FOHA5Rx8L%2F92Pdw5PRFXAL7uQvdN9uQVxjFCeKwcHssDLQ%2FzBNjF31Z5L%2F9c8BdP3R6DBnBu6%2FJGJA73iaGZQb7suEGcGPiVh7nBcu3pLmNDOpLh5Q3AkIJRviNnfDmEdnKAUzDHucrBBjqkAed199VdEPfgpKFEa6G8pMSJYtnjhovFqj1qGIYwOKypkxpfB%2FHon%2BmMUtfhOgdSUkZznvBAWDNRsYSAB8KQDgQJ8y3jT8EBMXyFkw6Y4hiPYAUGQmwtm%2BG8Uwm1oViRS67YXZ9SPyNBIB5%2FnzmzS3igBlezzf9%2F10rH53l1DyA8r%2F3jxerYdM4x018MMg4DIAcmKdb8f1q%2BwgdXx1aIOgVoTYz2&X-Amz-Signature=b5bf2bbf298cd2c8f28e7833001cc1965f6fffb3fbf7d11b9abf8fa8fe467fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCTNNC6G%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD7oVGyVWG4G6nxgEPsHsLvCMGdK4On06%2BCEGgtlw8UigIhAPXEVooDX7nXxXVzCszmV9xTXamFJdYzTw9gmy%2B3E04TKv8DCCYQABoMNjM3NDIzMTgzODA1IgxZa7MmZ6aoiKMpNXwq3ANQXS%2BFnQntaYKlGqE7Vy8PVIFze3eSiX9%2FE%2BZrUosLjuaVSSG2%2FquJFSHpvT3nwtJQfqp1HrwKBDAsWWDEfeCxEkI%2BZuEW7wmi4k7Ogx3Wld%2B1%2BF9uCExp4Hwi9ZAOa5Yf5Ar3rmiLSUA1w4miq2xHu6wDZJZFqbbT31Ecd0RgvCgng5sGB87hr05mE7B1vUhoYKq1qM1669bXf6Rtxsd%2FbR%2FsINEA%2Bsa1MFULNFW6b%2FLKN9t1YGlefRV31kAL696GeXr4j5%2FPvq2SK5KF4cSFZ1QS0nWsU2SYflj1ik%2F7xEsaf8kvFljHBx9S03gySVL%2F8HO%2B3ukHfoSqY2jenbZ4Zp0uyts9PeshJHgQg2sDBWLQF2i5hUtEF4Ugk3xf2ugkRAiHw%2BogFkwcEtlLhx5risgAimlrW7innKPQ1feXFKnkXbuFvbhOoeekanxfnu0BLBEsEfFe3e4VJPVzgXI9hnL08yR9s4M9rM0FuDkteD9mw4GFiASX%2FOHA5Rx8L%2F92Pdw5PRFXAL7uQvdN9uQVxjFCeKwcHssDLQ%2FzBNjF31Z5L%2F9c8BdP3R6DBnBu6%2FJGJA73iaGZQb7suEGcGPiVh7nBcu3pLmNDOpLh5Q3AkIJRviNnfDmEdnKAUzDHucrBBjqkAed199VdEPfgpKFEa6G8pMSJYtnjhovFqj1qGIYwOKypkxpfB%2FHon%2BmMUtfhOgdSUkZznvBAWDNRsYSAB8KQDgQJ8y3jT8EBMXyFkw6Y4hiPYAUGQmwtm%2BG8Uwm1oViRS67YXZ9SPyNBIB5%2FnzmzS3igBlezzf9%2F10rH53l1DyA8r%2F3jxerYdM4x018MMg4DIAcmKdb8f1q%2BwgdXx1aIOgVoTYz2&X-Amz-Signature=a8220f190fd9a63b2a75cf89af0eff65f027681e1b330b17b60dbc47233a672f&X-Amz-SignedHeaders=host&x-id=GetObject)
