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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYX3QRSP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZYfh4ZsSo41RXu7DmgpfCAM%2FcJ7e%2FwX9U7%2FAKtGyWfAiEAh7lEl8zk9uelX6KT%2B%2B9BRFMjxjaVu4kTAUHtwMYJXe4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV6bNG%2FRU1TlTZAiSrcA7QyRryHJRnz8DO9pwXEebx%2B9JJNZWRaHpdvAmUSMRp9GjWZmx4qSSHyc%2FMZ%2B7OljKt5BqRDMYMz49stgVQ%2FxjGwi4iEHL%2FTXIlbfbzqgtUbs8BcYxuBEIfBcpiRYqMCfIXY87BsiAUjzo9hSZ7%2BpUT%2BvO%2BYx4v3JPwrHdAlusfbFtJSsSZjjlEDyWS64xh1cuBGIvtCmKqOxmkm1Q0xlN9zUKhlDfGI66i3pzYLv1xGK7FTqm1nYjWYw50dhqKGgjen2Bi5FwIF4wYBKKAFQpug53vpRVT5AStffThKTW%2BFCDcAICqLDoryGEcgaes6WGoJnjyLz2%2F0XI54xe3uykm%2B9l7P2GvdHK0BLx44dFd7biD0mzY4rOR%2BIgDDJ6ckJN9hsXE%2FumCKjunuAHmRZmm5X41xR199dV8cpO3CyWzyvMkED4oCgQq7UQ%2FseA4nbWosJwAXyPx1Z7%2FPcNoWzM67hNl1MIrckhDwdznEfBz8awet%2B1XmPFS9TjlVW0xa%2FdlyXW%2B6C1tY9oCHXg%2FD6UskXYd8Dk5e6J6ADKl5g9ssWzrSGwpuHAmvC6do%2FeRunomA2ZqllxpU9HBwljkJc%2BAGfOOGXly%2FqX6PQYGcv5h%2FCevyqJD6Th81f7pXMLH6r8EGOqUBy1ONzp12ZY6n5WPx92HEw4bu8Y%2FqT1IaIGbI6PbOjjwp9w9Cz3p2oQIVM%2B3j%2FxNiEQ8cUgYyd9dzOMugHlyCoIV38jwC%2Bw%2Fml0h%2FDyxU4KJ99iW0s8eL403EtvG0jxfkOARKVGTFUTiWHmMerSysyp8MOeO0c6KHen5nRh4FS0E1y3NIDn1gpI16ooPMAdONzPilg9A%2BSlKbiHyVrA3ydiQPKMEi&X-Amz-Signature=73fe37a4215d0b8c684e1d9bf0054f3a0cb947a0011914446d65142a6a48b22a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYX3QRSP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZYfh4ZsSo41RXu7DmgpfCAM%2FcJ7e%2FwX9U7%2FAKtGyWfAiEAh7lEl8zk9uelX6KT%2B%2B9BRFMjxjaVu4kTAUHtwMYJXe4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV6bNG%2FRU1TlTZAiSrcA7QyRryHJRnz8DO9pwXEebx%2B9JJNZWRaHpdvAmUSMRp9GjWZmx4qSSHyc%2FMZ%2B7OljKt5BqRDMYMz49stgVQ%2FxjGwi4iEHL%2FTXIlbfbzqgtUbs8BcYxuBEIfBcpiRYqMCfIXY87BsiAUjzo9hSZ7%2BpUT%2BvO%2BYx4v3JPwrHdAlusfbFtJSsSZjjlEDyWS64xh1cuBGIvtCmKqOxmkm1Q0xlN9zUKhlDfGI66i3pzYLv1xGK7FTqm1nYjWYw50dhqKGgjen2Bi5FwIF4wYBKKAFQpug53vpRVT5AStffThKTW%2BFCDcAICqLDoryGEcgaes6WGoJnjyLz2%2F0XI54xe3uykm%2B9l7P2GvdHK0BLx44dFd7biD0mzY4rOR%2BIgDDJ6ckJN9hsXE%2FumCKjunuAHmRZmm5X41xR199dV8cpO3CyWzyvMkED4oCgQq7UQ%2FseA4nbWosJwAXyPx1Z7%2FPcNoWzM67hNl1MIrckhDwdznEfBz8awet%2B1XmPFS9TjlVW0xa%2FdlyXW%2B6C1tY9oCHXg%2FD6UskXYd8Dk5e6J6ADKl5g9ssWzrSGwpuHAmvC6do%2FeRunomA2ZqllxpU9HBwljkJc%2BAGfOOGXly%2FqX6PQYGcv5h%2FCevyqJD6Th81f7pXMLH6r8EGOqUBy1ONzp12ZY6n5WPx92HEw4bu8Y%2FqT1IaIGbI6PbOjjwp9w9Cz3p2oQIVM%2B3j%2FxNiEQ8cUgYyd9dzOMugHlyCoIV38jwC%2Bw%2Fml0h%2FDyxU4KJ99iW0s8eL403EtvG0jxfkOARKVGTFUTiWHmMerSysyp8MOeO0c6KHen5nRh4FS0E1y3NIDn1gpI16ooPMAdONzPilg9A%2BSlKbiHyVrA3ydiQPKMEi&X-Amz-Signature=efe0b5451c1f528dc129204b975e1d3740e6ad38c787059218b60ee19d3ca13e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYX3QRSP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZYfh4ZsSo41RXu7DmgpfCAM%2FcJ7e%2FwX9U7%2FAKtGyWfAiEAh7lEl8zk9uelX6KT%2B%2B9BRFMjxjaVu4kTAUHtwMYJXe4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV6bNG%2FRU1TlTZAiSrcA7QyRryHJRnz8DO9pwXEebx%2B9JJNZWRaHpdvAmUSMRp9GjWZmx4qSSHyc%2FMZ%2B7OljKt5BqRDMYMz49stgVQ%2FxjGwi4iEHL%2FTXIlbfbzqgtUbs8BcYxuBEIfBcpiRYqMCfIXY87BsiAUjzo9hSZ7%2BpUT%2BvO%2BYx4v3JPwrHdAlusfbFtJSsSZjjlEDyWS64xh1cuBGIvtCmKqOxmkm1Q0xlN9zUKhlDfGI66i3pzYLv1xGK7FTqm1nYjWYw50dhqKGgjen2Bi5FwIF4wYBKKAFQpug53vpRVT5AStffThKTW%2BFCDcAICqLDoryGEcgaes6WGoJnjyLz2%2F0XI54xe3uykm%2B9l7P2GvdHK0BLx44dFd7biD0mzY4rOR%2BIgDDJ6ckJN9hsXE%2FumCKjunuAHmRZmm5X41xR199dV8cpO3CyWzyvMkED4oCgQq7UQ%2FseA4nbWosJwAXyPx1Z7%2FPcNoWzM67hNl1MIrckhDwdznEfBz8awet%2B1XmPFS9TjlVW0xa%2FdlyXW%2B6C1tY9oCHXg%2FD6UskXYd8Dk5e6J6ADKl5g9ssWzrSGwpuHAmvC6do%2FeRunomA2ZqllxpU9HBwljkJc%2BAGfOOGXly%2FqX6PQYGcv5h%2FCevyqJD6Th81f7pXMLH6r8EGOqUBy1ONzp12ZY6n5WPx92HEw4bu8Y%2FqT1IaIGbI6PbOjjwp9w9Cz3p2oQIVM%2B3j%2FxNiEQ8cUgYyd9dzOMugHlyCoIV38jwC%2Bw%2Fml0h%2FDyxU4KJ99iW0s8eL403EtvG0jxfkOARKVGTFUTiWHmMerSysyp8MOeO0c6KHen5nRh4FS0E1y3NIDn1gpI16ooPMAdONzPilg9A%2BSlKbiHyVrA3ydiQPKMEi&X-Amz-Signature=134152fc88b7a960e892a6c441f82c0d1b328ab308a3c9f28d51ee6f68725a83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYX3QRSP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZYfh4ZsSo41RXu7DmgpfCAM%2FcJ7e%2FwX9U7%2FAKtGyWfAiEAh7lEl8zk9uelX6KT%2B%2B9BRFMjxjaVu4kTAUHtwMYJXe4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV6bNG%2FRU1TlTZAiSrcA7QyRryHJRnz8DO9pwXEebx%2B9JJNZWRaHpdvAmUSMRp9GjWZmx4qSSHyc%2FMZ%2B7OljKt5BqRDMYMz49stgVQ%2FxjGwi4iEHL%2FTXIlbfbzqgtUbs8BcYxuBEIfBcpiRYqMCfIXY87BsiAUjzo9hSZ7%2BpUT%2BvO%2BYx4v3JPwrHdAlusfbFtJSsSZjjlEDyWS64xh1cuBGIvtCmKqOxmkm1Q0xlN9zUKhlDfGI66i3pzYLv1xGK7FTqm1nYjWYw50dhqKGgjen2Bi5FwIF4wYBKKAFQpug53vpRVT5AStffThKTW%2BFCDcAICqLDoryGEcgaes6WGoJnjyLz2%2F0XI54xe3uykm%2B9l7P2GvdHK0BLx44dFd7biD0mzY4rOR%2BIgDDJ6ckJN9hsXE%2FumCKjunuAHmRZmm5X41xR199dV8cpO3CyWzyvMkED4oCgQq7UQ%2FseA4nbWosJwAXyPx1Z7%2FPcNoWzM67hNl1MIrckhDwdznEfBz8awet%2B1XmPFS9TjlVW0xa%2FdlyXW%2B6C1tY9oCHXg%2FD6UskXYd8Dk5e6J6ADKl5g9ssWzrSGwpuHAmvC6do%2FeRunomA2ZqllxpU9HBwljkJc%2BAGfOOGXly%2FqX6PQYGcv5h%2FCevyqJD6Th81f7pXMLH6r8EGOqUBy1ONzp12ZY6n5WPx92HEw4bu8Y%2FqT1IaIGbI6PbOjjwp9w9Cz3p2oQIVM%2B3j%2FxNiEQ8cUgYyd9dzOMugHlyCoIV38jwC%2Bw%2Fml0h%2FDyxU4KJ99iW0s8eL403EtvG0jxfkOARKVGTFUTiWHmMerSysyp8MOeO0c6KHen5nRh4FS0E1y3NIDn1gpI16ooPMAdONzPilg9A%2BSlKbiHyVrA3ydiQPKMEi&X-Amz-Signature=3f7cfbcb97c103be1347f3025bd4d3bb2db5db99175c2e651abaf5d8769cf98a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYX3QRSP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZYfh4ZsSo41RXu7DmgpfCAM%2FcJ7e%2FwX9U7%2FAKtGyWfAiEAh7lEl8zk9uelX6KT%2B%2B9BRFMjxjaVu4kTAUHtwMYJXe4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV6bNG%2FRU1TlTZAiSrcA7QyRryHJRnz8DO9pwXEebx%2B9JJNZWRaHpdvAmUSMRp9GjWZmx4qSSHyc%2FMZ%2B7OljKt5BqRDMYMz49stgVQ%2FxjGwi4iEHL%2FTXIlbfbzqgtUbs8BcYxuBEIfBcpiRYqMCfIXY87BsiAUjzo9hSZ7%2BpUT%2BvO%2BYx4v3JPwrHdAlusfbFtJSsSZjjlEDyWS64xh1cuBGIvtCmKqOxmkm1Q0xlN9zUKhlDfGI66i3pzYLv1xGK7FTqm1nYjWYw50dhqKGgjen2Bi5FwIF4wYBKKAFQpug53vpRVT5AStffThKTW%2BFCDcAICqLDoryGEcgaes6WGoJnjyLz2%2F0XI54xe3uykm%2B9l7P2GvdHK0BLx44dFd7biD0mzY4rOR%2BIgDDJ6ckJN9hsXE%2FumCKjunuAHmRZmm5X41xR199dV8cpO3CyWzyvMkED4oCgQq7UQ%2FseA4nbWosJwAXyPx1Z7%2FPcNoWzM67hNl1MIrckhDwdznEfBz8awet%2B1XmPFS9TjlVW0xa%2FdlyXW%2B6C1tY9oCHXg%2FD6UskXYd8Dk5e6J6ADKl5g9ssWzrSGwpuHAmvC6do%2FeRunomA2ZqllxpU9HBwljkJc%2BAGfOOGXly%2FqX6PQYGcv5h%2FCevyqJD6Th81f7pXMLH6r8EGOqUBy1ONzp12ZY6n5WPx92HEw4bu8Y%2FqT1IaIGbI6PbOjjwp9w9Cz3p2oQIVM%2B3j%2FxNiEQ8cUgYyd9dzOMugHlyCoIV38jwC%2Bw%2Fml0h%2FDyxU4KJ99iW0s8eL403EtvG0jxfkOARKVGTFUTiWHmMerSysyp8MOeO0c6KHen5nRh4FS0E1y3NIDn1gpI16ooPMAdONzPilg9A%2BSlKbiHyVrA3ydiQPKMEi&X-Amz-Signature=2441e253c9d9e79a8f250246e73163fbf47b294ae94bf9d3f87c22371d74fc2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYX3QRSP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZYfh4ZsSo41RXu7DmgpfCAM%2FcJ7e%2FwX9U7%2FAKtGyWfAiEAh7lEl8zk9uelX6KT%2B%2B9BRFMjxjaVu4kTAUHtwMYJXe4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV6bNG%2FRU1TlTZAiSrcA7QyRryHJRnz8DO9pwXEebx%2B9JJNZWRaHpdvAmUSMRp9GjWZmx4qSSHyc%2FMZ%2B7OljKt5BqRDMYMz49stgVQ%2FxjGwi4iEHL%2FTXIlbfbzqgtUbs8BcYxuBEIfBcpiRYqMCfIXY87BsiAUjzo9hSZ7%2BpUT%2BvO%2BYx4v3JPwrHdAlusfbFtJSsSZjjlEDyWS64xh1cuBGIvtCmKqOxmkm1Q0xlN9zUKhlDfGI66i3pzYLv1xGK7FTqm1nYjWYw50dhqKGgjen2Bi5FwIF4wYBKKAFQpug53vpRVT5AStffThKTW%2BFCDcAICqLDoryGEcgaes6WGoJnjyLz2%2F0XI54xe3uykm%2B9l7P2GvdHK0BLx44dFd7biD0mzY4rOR%2BIgDDJ6ckJN9hsXE%2FumCKjunuAHmRZmm5X41xR199dV8cpO3CyWzyvMkED4oCgQq7UQ%2FseA4nbWosJwAXyPx1Z7%2FPcNoWzM67hNl1MIrckhDwdznEfBz8awet%2B1XmPFS9TjlVW0xa%2FdlyXW%2B6C1tY9oCHXg%2FD6UskXYd8Dk5e6J6ADKl5g9ssWzrSGwpuHAmvC6do%2FeRunomA2ZqllxpU9HBwljkJc%2BAGfOOGXly%2FqX6PQYGcv5h%2FCevyqJD6Th81f7pXMLH6r8EGOqUBy1ONzp12ZY6n5WPx92HEw4bu8Y%2FqT1IaIGbI6PbOjjwp9w9Cz3p2oQIVM%2B3j%2FxNiEQ8cUgYyd9dzOMugHlyCoIV38jwC%2Bw%2Fml0h%2FDyxU4KJ99iW0s8eL403EtvG0jxfkOARKVGTFUTiWHmMerSysyp8MOeO0c6KHen5nRh4FS0E1y3NIDn1gpI16ooPMAdONzPilg9A%2BSlKbiHyVrA3ydiQPKMEi&X-Amz-Signature=aeb19189d9d5ca22995047a2952fc1dbfe58145bf997bace960b2fed8c2ae3e1&X-Amz-SignedHeaders=host&x-id=GetObject)
