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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPY5DBY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg%2BmsFkYLLu57QUFV%2BLL6bUdATRJ2QEgk0TVi6zcA1tAiEAtvFN9hYkAJpwC%2FJorbO%2FQLLrnOK7EdSKqRZJAUaMYrsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC7pewAEkoxbGtdv2yrcA2E5XD8IMjQZNQ9lRSLchhNeRI0SAWABMGFx5SO2LGYODqi31uKTt3naQHmmaExqEAaJKZ6RdrHS3P14%2Fj09BaZn2wj2CAF7R5CIGGb5tuB81lHkLHRLyQ7iSdSNXnXADztExTdFjbG2SOnyKDee0Bm0w0pp0mL1EnI6ltCZPbfIOI7JIyFnKz1sVQkq0ciQspcL9RRYW5pH%2BfQ6UkkBTbNNncw1N%2F6yLXF%2F6ihvExEYEtyYCKonxYER9dXX4bmnxB9xqjjr%2FgU0WLmblR8mrsGSUNgl1%2Fm0LOtTNtWIOyoQsk2YxLrPNI4Yy72hGEoAemv%2BFE%2F71ONDmiQPoSGlLhXjI8bUVEij%2FskwRryoXi6pHnCbhdor%2FO6vo4t8BlLXRiiogNHvwxqnBQuzpNvhotanKS4zJMV18xg71Mjqey5p7QOQv5YYSmY%2FxCV3EtLnE4UF%2FXQk28zH5HFXG9QCCHuGk%2BGo1HTuV0wCLtL%2FaZTN7fmHit4B%2FaKUy3ar9uHd9%2Bx1bUVZSqwCuCeroXFRKSM%2BoMa2LLT4pNc6PiWsHLmCcqqgQVkNFGeCpL3ZbMqcKaO4YMCrWkEgaIhBw2L9S%2B15%2Bdt1CMV%2B8SKuK9saCkXsmHnTywfXW4Z9P6A8MKihlL8GOqUBUYSQ%2Brlk%2ByrGoDKUpbJczKFgDpSIsazfxKh9YBSik5O%2Fopn2vPvN6v7FqoNVzbwlPH2P6thHOMth80ZNbsLeqN607gC5bHM0xct0nMnHsaLTTuG7uhAMS8jcoKFVdOuz8xbdo79SjcCGYelHWsHB2y%2FXd7Zv2ZBCQPkqN%2FE5a0Q%2BpZ1HodR8YKGEVXNKRhRaQevDtlXC%2FH5XM%2BHtJEm9xpQRMVRU&X-Amz-Signature=3f5b330b4252302989931dac78356ac44235052faaa0bfe15463645d0cc874a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPY5DBY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg%2BmsFkYLLu57QUFV%2BLL6bUdATRJ2QEgk0TVi6zcA1tAiEAtvFN9hYkAJpwC%2FJorbO%2FQLLrnOK7EdSKqRZJAUaMYrsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC7pewAEkoxbGtdv2yrcA2E5XD8IMjQZNQ9lRSLchhNeRI0SAWABMGFx5SO2LGYODqi31uKTt3naQHmmaExqEAaJKZ6RdrHS3P14%2Fj09BaZn2wj2CAF7R5CIGGb5tuB81lHkLHRLyQ7iSdSNXnXADztExTdFjbG2SOnyKDee0Bm0w0pp0mL1EnI6ltCZPbfIOI7JIyFnKz1sVQkq0ciQspcL9RRYW5pH%2BfQ6UkkBTbNNncw1N%2F6yLXF%2F6ihvExEYEtyYCKonxYER9dXX4bmnxB9xqjjr%2FgU0WLmblR8mrsGSUNgl1%2Fm0LOtTNtWIOyoQsk2YxLrPNI4Yy72hGEoAemv%2BFE%2F71ONDmiQPoSGlLhXjI8bUVEij%2FskwRryoXi6pHnCbhdor%2FO6vo4t8BlLXRiiogNHvwxqnBQuzpNvhotanKS4zJMV18xg71Mjqey5p7QOQv5YYSmY%2FxCV3EtLnE4UF%2FXQk28zH5HFXG9QCCHuGk%2BGo1HTuV0wCLtL%2FaZTN7fmHit4B%2FaKUy3ar9uHd9%2Bx1bUVZSqwCuCeroXFRKSM%2BoMa2LLT4pNc6PiWsHLmCcqqgQVkNFGeCpL3ZbMqcKaO4YMCrWkEgaIhBw2L9S%2B15%2Bdt1CMV%2B8SKuK9saCkXsmHnTywfXW4Z9P6A8MKihlL8GOqUBUYSQ%2Brlk%2ByrGoDKUpbJczKFgDpSIsazfxKh9YBSik5O%2Fopn2vPvN6v7FqoNVzbwlPH2P6thHOMth80ZNbsLeqN607gC5bHM0xct0nMnHsaLTTuG7uhAMS8jcoKFVdOuz8xbdo79SjcCGYelHWsHB2y%2FXd7Zv2ZBCQPkqN%2FE5a0Q%2BpZ1HodR8YKGEVXNKRhRaQevDtlXC%2FH5XM%2BHtJEm9xpQRMVRU&X-Amz-Signature=96c38f4a59b1445668f0056bf6c93e02fa89ea248e9aeafcc48efd6b541f6a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPY5DBY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg%2BmsFkYLLu57QUFV%2BLL6bUdATRJ2QEgk0TVi6zcA1tAiEAtvFN9hYkAJpwC%2FJorbO%2FQLLrnOK7EdSKqRZJAUaMYrsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC7pewAEkoxbGtdv2yrcA2E5XD8IMjQZNQ9lRSLchhNeRI0SAWABMGFx5SO2LGYODqi31uKTt3naQHmmaExqEAaJKZ6RdrHS3P14%2Fj09BaZn2wj2CAF7R5CIGGb5tuB81lHkLHRLyQ7iSdSNXnXADztExTdFjbG2SOnyKDee0Bm0w0pp0mL1EnI6ltCZPbfIOI7JIyFnKz1sVQkq0ciQspcL9RRYW5pH%2BfQ6UkkBTbNNncw1N%2F6yLXF%2F6ihvExEYEtyYCKonxYER9dXX4bmnxB9xqjjr%2FgU0WLmblR8mrsGSUNgl1%2Fm0LOtTNtWIOyoQsk2YxLrPNI4Yy72hGEoAemv%2BFE%2F71ONDmiQPoSGlLhXjI8bUVEij%2FskwRryoXi6pHnCbhdor%2FO6vo4t8BlLXRiiogNHvwxqnBQuzpNvhotanKS4zJMV18xg71Mjqey5p7QOQv5YYSmY%2FxCV3EtLnE4UF%2FXQk28zH5HFXG9QCCHuGk%2BGo1HTuV0wCLtL%2FaZTN7fmHit4B%2FaKUy3ar9uHd9%2Bx1bUVZSqwCuCeroXFRKSM%2BoMa2LLT4pNc6PiWsHLmCcqqgQVkNFGeCpL3ZbMqcKaO4YMCrWkEgaIhBw2L9S%2B15%2Bdt1CMV%2B8SKuK9saCkXsmHnTywfXW4Z9P6A8MKihlL8GOqUBUYSQ%2Brlk%2ByrGoDKUpbJczKFgDpSIsazfxKh9YBSik5O%2Fopn2vPvN6v7FqoNVzbwlPH2P6thHOMth80ZNbsLeqN607gC5bHM0xct0nMnHsaLTTuG7uhAMS8jcoKFVdOuz8xbdo79SjcCGYelHWsHB2y%2FXd7Zv2ZBCQPkqN%2FE5a0Q%2BpZ1HodR8YKGEVXNKRhRaQevDtlXC%2FH5XM%2BHtJEm9xpQRMVRU&X-Amz-Signature=ab3f488de335ccbef7bdbb103966a97d3d0aedb10f9bf348eab11e0f0e2afcf4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPY5DBY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg%2BmsFkYLLu57QUFV%2BLL6bUdATRJ2QEgk0TVi6zcA1tAiEAtvFN9hYkAJpwC%2FJorbO%2FQLLrnOK7EdSKqRZJAUaMYrsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC7pewAEkoxbGtdv2yrcA2E5XD8IMjQZNQ9lRSLchhNeRI0SAWABMGFx5SO2LGYODqi31uKTt3naQHmmaExqEAaJKZ6RdrHS3P14%2Fj09BaZn2wj2CAF7R5CIGGb5tuB81lHkLHRLyQ7iSdSNXnXADztExTdFjbG2SOnyKDee0Bm0w0pp0mL1EnI6ltCZPbfIOI7JIyFnKz1sVQkq0ciQspcL9RRYW5pH%2BfQ6UkkBTbNNncw1N%2F6yLXF%2F6ihvExEYEtyYCKonxYER9dXX4bmnxB9xqjjr%2FgU0WLmblR8mrsGSUNgl1%2Fm0LOtTNtWIOyoQsk2YxLrPNI4Yy72hGEoAemv%2BFE%2F71ONDmiQPoSGlLhXjI8bUVEij%2FskwRryoXi6pHnCbhdor%2FO6vo4t8BlLXRiiogNHvwxqnBQuzpNvhotanKS4zJMV18xg71Mjqey5p7QOQv5YYSmY%2FxCV3EtLnE4UF%2FXQk28zH5HFXG9QCCHuGk%2BGo1HTuV0wCLtL%2FaZTN7fmHit4B%2FaKUy3ar9uHd9%2Bx1bUVZSqwCuCeroXFRKSM%2BoMa2LLT4pNc6PiWsHLmCcqqgQVkNFGeCpL3ZbMqcKaO4YMCrWkEgaIhBw2L9S%2B15%2Bdt1CMV%2B8SKuK9saCkXsmHnTywfXW4Z9P6A8MKihlL8GOqUBUYSQ%2Brlk%2ByrGoDKUpbJczKFgDpSIsazfxKh9YBSik5O%2Fopn2vPvN6v7FqoNVzbwlPH2P6thHOMth80ZNbsLeqN607gC5bHM0xct0nMnHsaLTTuG7uhAMS8jcoKFVdOuz8xbdo79SjcCGYelHWsHB2y%2FXd7Zv2ZBCQPkqN%2FE5a0Q%2BpZ1HodR8YKGEVXNKRhRaQevDtlXC%2FH5XM%2BHtJEm9xpQRMVRU&X-Amz-Signature=2d5601d59e3f017b34ac1cc4e872306648c570b6ad2438c41d6c15b5c835ac90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPY5DBY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg%2BmsFkYLLu57QUFV%2BLL6bUdATRJ2QEgk0TVi6zcA1tAiEAtvFN9hYkAJpwC%2FJorbO%2FQLLrnOK7EdSKqRZJAUaMYrsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC7pewAEkoxbGtdv2yrcA2E5XD8IMjQZNQ9lRSLchhNeRI0SAWABMGFx5SO2LGYODqi31uKTt3naQHmmaExqEAaJKZ6RdrHS3P14%2Fj09BaZn2wj2CAF7R5CIGGb5tuB81lHkLHRLyQ7iSdSNXnXADztExTdFjbG2SOnyKDee0Bm0w0pp0mL1EnI6ltCZPbfIOI7JIyFnKz1sVQkq0ciQspcL9RRYW5pH%2BfQ6UkkBTbNNncw1N%2F6yLXF%2F6ihvExEYEtyYCKonxYER9dXX4bmnxB9xqjjr%2FgU0WLmblR8mrsGSUNgl1%2Fm0LOtTNtWIOyoQsk2YxLrPNI4Yy72hGEoAemv%2BFE%2F71ONDmiQPoSGlLhXjI8bUVEij%2FskwRryoXi6pHnCbhdor%2FO6vo4t8BlLXRiiogNHvwxqnBQuzpNvhotanKS4zJMV18xg71Mjqey5p7QOQv5YYSmY%2FxCV3EtLnE4UF%2FXQk28zH5HFXG9QCCHuGk%2BGo1HTuV0wCLtL%2FaZTN7fmHit4B%2FaKUy3ar9uHd9%2Bx1bUVZSqwCuCeroXFRKSM%2BoMa2LLT4pNc6PiWsHLmCcqqgQVkNFGeCpL3ZbMqcKaO4YMCrWkEgaIhBw2L9S%2B15%2Bdt1CMV%2B8SKuK9saCkXsmHnTywfXW4Z9P6A8MKihlL8GOqUBUYSQ%2Brlk%2ByrGoDKUpbJczKFgDpSIsazfxKh9YBSik5O%2Fopn2vPvN6v7FqoNVzbwlPH2P6thHOMth80ZNbsLeqN607gC5bHM0xct0nMnHsaLTTuG7uhAMS8jcoKFVdOuz8xbdo79SjcCGYelHWsHB2y%2FXd7Zv2ZBCQPkqN%2FE5a0Q%2BpZ1HodR8YKGEVXNKRhRaQevDtlXC%2FH5XM%2BHtJEm9xpQRMVRU&X-Amz-Signature=a0a9f3c1f8f799b82afa778eecb780f6917c9d029529e1beac5e2aa90a000fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPY5DBY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAg%2BmsFkYLLu57QUFV%2BLL6bUdATRJ2QEgk0TVi6zcA1tAiEAtvFN9hYkAJpwC%2FJorbO%2FQLLrnOK7EdSKqRZJAUaMYrsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDC7pewAEkoxbGtdv2yrcA2E5XD8IMjQZNQ9lRSLchhNeRI0SAWABMGFx5SO2LGYODqi31uKTt3naQHmmaExqEAaJKZ6RdrHS3P14%2Fj09BaZn2wj2CAF7R5CIGGb5tuB81lHkLHRLyQ7iSdSNXnXADztExTdFjbG2SOnyKDee0Bm0w0pp0mL1EnI6ltCZPbfIOI7JIyFnKz1sVQkq0ciQspcL9RRYW5pH%2BfQ6UkkBTbNNncw1N%2F6yLXF%2F6ihvExEYEtyYCKonxYER9dXX4bmnxB9xqjjr%2FgU0WLmblR8mrsGSUNgl1%2Fm0LOtTNtWIOyoQsk2YxLrPNI4Yy72hGEoAemv%2BFE%2F71ONDmiQPoSGlLhXjI8bUVEij%2FskwRryoXi6pHnCbhdor%2FO6vo4t8BlLXRiiogNHvwxqnBQuzpNvhotanKS4zJMV18xg71Mjqey5p7QOQv5YYSmY%2FxCV3EtLnE4UF%2FXQk28zH5HFXG9QCCHuGk%2BGo1HTuV0wCLtL%2FaZTN7fmHit4B%2FaKUy3ar9uHd9%2Bx1bUVZSqwCuCeroXFRKSM%2BoMa2LLT4pNc6PiWsHLmCcqqgQVkNFGeCpL3ZbMqcKaO4YMCrWkEgaIhBw2L9S%2B15%2Bdt1CMV%2B8SKuK9saCkXsmHnTywfXW4Z9P6A8MKihlL8GOqUBUYSQ%2Brlk%2ByrGoDKUpbJczKFgDpSIsazfxKh9YBSik5O%2Fopn2vPvN6v7FqoNVzbwlPH2P6thHOMth80ZNbsLeqN607gC5bHM0xct0nMnHsaLTTuG7uhAMS8jcoKFVdOuz8xbdo79SjcCGYelHWsHB2y%2FXd7Zv2ZBCQPkqN%2FE5a0Q%2BpZ1HodR8YKGEVXNKRhRaQevDtlXC%2FH5XM%2BHtJEm9xpQRMVRU&X-Amz-Signature=14d7515c8c24d331978312155d3d89a2b8e87362431737bfce6df0d06441f55b&X-Amz-SignedHeaders=host&x-id=GetObject)
