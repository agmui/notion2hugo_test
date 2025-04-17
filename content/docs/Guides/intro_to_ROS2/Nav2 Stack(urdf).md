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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJZFRUJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJRYGHnsvF%2FEOpxg8koXIH1j%2Frx77%2FrrVR4ss4LA0dGQIgBcbiUeX0HNBmRarxiDasXl365NIZhBibRqH2ys6Ho%2FUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGxntPHtxDf3kB7IlCrcA56jx2%2BBjJbZUoDJqmEMHqnK0f3RK%2BuM01Fe8GxfjEvrXETNzohNFoUUoUYD0DFzF3WQ2tLJxwywYwVt%2Fios7Lv0KOGnPZN3SvZPKNIB5a%2FUjF38%2FTtz6OcP5EjG88ii9nOOQeIrRDd3TL2%2BC81%2B9F3RuS9IKkMgDqS3WX7zpgZd0wAisPrODnAuZdXxJ8OguW9KQ4H2RTyBNSET%2B1hIx%2FBrtoAOVt%2FZHhBjAtHmV3SXX8sZz5R6vGiuy9JEjNalMriNmi2ENwE7FDoxdMifT4WZVomxLAhCPZUbHnh%2FFm0%2FRyf8gCf2Xl5M%2FxkGTSgvy8JwIoW%2FE7m4zqZ3lyA0p9n%2FVrggN96pVId3kpfMfWrmr6u%2Bh1bqY%2FosJTG9gS%2FBoiwua1lqquI9xo6dzppNM8c9q7QlLlQDL3dZ3trmB4iZ0sAkePvu2l1ahqMQQRWF23fD0DEdhJcviI4gBGjwGHLJj3QzMWDRQVl1JrIG83SKDqI070sCOkifOWMevDtZwUsZbneED8qrkkiUSU5KGq44yGZlOoAgOMEoQY9SEDQdjNYfCdlDR5ZacKCQq3aIf3LupEKVE96NSrCwlPQBsSPa3I3dOUymU525efcTNSzRXnev3UepvWexnB4lMLi3hcAGOqUB%2BMXuqvtQ%2FBfyEQRQH%2F84VPr8JcNQ9CrPkAL7uBE78cDyN95x0LEuQuKlczLM2iTVrhgZDuIVDa5ehFstmgOftcpEdjsmanVgSF58pjsppEXgyZSpnFrlwi0qw90%2B89ead3YIsFoWrXt%2Biff1icKyBgv11J0DTJDqcCejEYistXTqp7NEDVAHNU6sLvAzvAN5cAMNCsJuTeQYOzglkHzStf4B5jZ1&X-Amz-Signature=58ec912221b3aac8acc87d7183ebb572e0b0884ce46db1c88f2209e21680eeda&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJZFRUJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJRYGHnsvF%2FEOpxg8koXIH1j%2Frx77%2FrrVR4ss4LA0dGQIgBcbiUeX0HNBmRarxiDasXl365NIZhBibRqH2ys6Ho%2FUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGxntPHtxDf3kB7IlCrcA56jx2%2BBjJbZUoDJqmEMHqnK0f3RK%2BuM01Fe8GxfjEvrXETNzohNFoUUoUYD0DFzF3WQ2tLJxwywYwVt%2Fios7Lv0KOGnPZN3SvZPKNIB5a%2FUjF38%2FTtz6OcP5EjG88ii9nOOQeIrRDd3TL2%2BC81%2B9F3RuS9IKkMgDqS3WX7zpgZd0wAisPrODnAuZdXxJ8OguW9KQ4H2RTyBNSET%2B1hIx%2FBrtoAOVt%2FZHhBjAtHmV3SXX8sZz5R6vGiuy9JEjNalMriNmi2ENwE7FDoxdMifT4WZVomxLAhCPZUbHnh%2FFm0%2FRyf8gCf2Xl5M%2FxkGTSgvy8JwIoW%2FE7m4zqZ3lyA0p9n%2FVrggN96pVId3kpfMfWrmr6u%2Bh1bqY%2FosJTG9gS%2FBoiwua1lqquI9xo6dzppNM8c9q7QlLlQDL3dZ3trmB4iZ0sAkePvu2l1ahqMQQRWF23fD0DEdhJcviI4gBGjwGHLJj3QzMWDRQVl1JrIG83SKDqI070sCOkifOWMevDtZwUsZbneED8qrkkiUSU5KGq44yGZlOoAgOMEoQY9SEDQdjNYfCdlDR5ZacKCQq3aIf3LupEKVE96NSrCwlPQBsSPa3I3dOUymU525efcTNSzRXnev3UepvWexnB4lMLi3hcAGOqUB%2BMXuqvtQ%2FBfyEQRQH%2F84VPr8JcNQ9CrPkAL7uBE78cDyN95x0LEuQuKlczLM2iTVrhgZDuIVDa5ehFstmgOftcpEdjsmanVgSF58pjsppEXgyZSpnFrlwi0qw90%2B89ead3YIsFoWrXt%2Biff1icKyBgv11J0DTJDqcCejEYistXTqp7NEDVAHNU6sLvAzvAN5cAMNCsJuTeQYOzglkHzStf4B5jZ1&X-Amz-Signature=1596bbc9fb1cb33b0149772a8bdfe86c3bb1f6867d23d3181e735e25c66a0f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJZFRUJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJRYGHnsvF%2FEOpxg8koXIH1j%2Frx77%2FrrVR4ss4LA0dGQIgBcbiUeX0HNBmRarxiDasXl365NIZhBibRqH2ys6Ho%2FUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGxntPHtxDf3kB7IlCrcA56jx2%2BBjJbZUoDJqmEMHqnK0f3RK%2BuM01Fe8GxfjEvrXETNzohNFoUUoUYD0DFzF3WQ2tLJxwywYwVt%2Fios7Lv0KOGnPZN3SvZPKNIB5a%2FUjF38%2FTtz6OcP5EjG88ii9nOOQeIrRDd3TL2%2BC81%2B9F3RuS9IKkMgDqS3WX7zpgZd0wAisPrODnAuZdXxJ8OguW9KQ4H2RTyBNSET%2B1hIx%2FBrtoAOVt%2FZHhBjAtHmV3SXX8sZz5R6vGiuy9JEjNalMriNmi2ENwE7FDoxdMifT4WZVomxLAhCPZUbHnh%2FFm0%2FRyf8gCf2Xl5M%2FxkGTSgvy8JwIoW%2FE7m4zqZ3lyA0p9n%2FVrggN96pVId3kpfMfWrmr6u%2Bh1bqY%2FosJTG9gS%2FBoiwua1lqquI9xo6dzppNM8c9q7QlLlQDL3dZ3trmB4iZ0sAkePvu2l1ahqMQQRWF23fD0DEdhJcviI4gBGjwGHLJj3QzMWDRQVl1JrIG83SKDqI070sCOkifOWMevDtZwUsZbneED8qrkkiUSU5KGq44yGZlOoAgOMEoQY9SEDQdjNYfCdlDR5ZacKCQq3aIf3LupEKVE96NSrCwlPQBsSPa3I3dOUymU525efcTNSzRXnev3UepvWexnB4lMLi3hcAGOqUB%2BMXuqvtQ%2FBfyEQRQH%2F84VPr8JcNQ9CrPkAL7uBE78cDyN95x0LEuQuKlczLM2iTVrhgZDuIVDa5ehFstmgOftcpEdjsmanVgSF58pjsppEXgyZSpnFrlwi0qw90%2B89ead3YIsFoWrXt%2Biff1icKyBgv11J0DTJDqcCejEYistXTqp7NEDVAHNU6sLvAzvAN5cAMNCsJuTeQYOzglkHzStf4B5jZ1&X-Amz-Signature=f36fb87dce16fb33628d05f4d1f2f8f6d234211a20822aeb6bed490004b0babf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJZFRUJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJRYGHnsvF%2FEOpxg8koXIH1j%2Frx77%2FrrVR4ss4LA0dGQIgBcbiUeX0HNBmRarxiDasXl365NIZhBibRqH2ys6Ho%2FUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGxntPHtxDf3kB7IlCrcA56jx2%2BBjJbZUoDJqmEMHqnK0f3RK%2BuM01Fe8GxfjEvrXETNzohNFoUUoUYD0DFzF3WQ2tLJxwywYwVt%2Fios7Lv0KOGnPZN3SvZPKNIB5a%2FUjF38%2FTtz6OcP5EjG88ii9nOOQeIrRDd3TL2%2BC81%2B9F3RuS9IKkMgDqS3WX7zpgZd0wAisPrODnAuZdXxJ8OguW9KQ4H2RTyBNSET%2B1hIx%2FBrtoAOVt%2FZHhBjAtHmV3SXX8sZz5R6vGiuy9JEjNalMriNmi2ENwE7FDoxdMifT4WZVomxLAhCPZUbHnh%2FFm0%2FRyf8gCf2Xl5M%2FxkGTSgvy8JwIoW%2FE7m4zqZ3lyA0p9n%2FVrggN96pVId3kpfMfWrmr6u%2Bh1bqY%2FosJTG9gS%2FBoiwua1lqquI9xo6dzppNM8c9q7QlLlQDL3dZ3trmB4iZ0sAkePvu2l1ahqMQQRWF23fD0DEdhJcviI4gBGjwGHLJj3QzMWDRQVl1JrIG83SKDqI070sCOkifOWMevDtZwUsZbneED8qrkkiUSU5KGq44yGZlOoAgOMEoQY9SEDQdjNYfCdlDR5ZacKCQq3aIf3LupEKVE96NSrCwlPQBsSPa3I3dOUymU525efcTNSzRXnev3UepvWexnB4lMLi3hcAGOqUB%2BMXuqvtQ%2FBfyEQRQH%2F84VPr8JcNQ9CrPkAL7uBE78cDyN95x0LEuQuKlczLM2iTVrhgZDuIVDa5ehFstmgOftcpEdjsmanVgSF58pjsppEXgyZSpnFrlwi0qw90%2B89ead3YIsFoWrXt%2Biff1icKyBgv11J0DTJDqcCejEYistXTqp7NEDVAHNU6sLvAzvAN5cAMNCsJuTeQYOzglkHzStf4B5jZ1&X-Amz-Signature=0e93c3afa26bcc0405ef44909c22838b356688bad553ab1fabee463bf936722b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJZFRUJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJRYGHnsvF%2FEOpxg8koXIH1j%2Frx77%2FrrVR4ss4LA0dGQIgBcbiUeX0HNBmRarxiDasXl365NIZhBibRqH2ys6Ho%2FUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGxntPHtxDf3kB7IlCrcA56jx2%2BBjJbZUoDJqmEMHqnK0f3RK%2BuM01Fe8GxfjEvrXETNzohNFoUUoUYD0DFzF3WQ2tLJxwywYwVt%2Fios7Lv0KOGnPZN3SvZPKNIB5a%2FUjF38%2FTtz6OcP5EjG88ii9nOOQeIrRDd3TL2%2BC81%2B9F3RuS9IKkMgDqS3WX7zpgZd0wAisPrODnAuZdXxJ8OguW9KQ4H2RTyBNSET%2B1hIx%2FBrtoAOVt%2FZHhBjAtHmV3SXX8sZz5R6vGiuy9JEjNalMriNmi2ENwE7FDoxdMifT4WZVomxLAhCPZUbHnh%2FFm0%2FRyf8gCf2Xl5M%2FxkGTSgvy8JwIoW%2FE7m4zqZ3lyA0p9n%2FVrggN96pVId3kpfMfWrmr6u%2Bh1bqY%2FosJTG9gS%2FBoiwua1lqquI9xo6dzppNM8c9q7QlLlQDL3dZ3trmB4iZ0sAkePvu2l1ahqMQQRWF23fD0DEdhJcviI4gBGjwGHLJj3QzMWDRQVl1JrIG83SKDqI070sCOkifOWMevDtZwUsZbneED8qrkkiUSU5KGq44yGZlOoAgOMEoQY9SEDQdjNYfCdlDR5ZacKCQq3aIf3LupEKVE96NSrCwlPQBsSPa3I3dOUymU525efcTNSzRXnev3UepvWexnB4lMLi3hcAGOqUB%2BMXuqvtQ%2FBfyEQRQH%2F84VPr8JcNQ9CrPkAL7uBE78cDyN95x0LEuQuKlczLM2iTVrhgZDuIVDa5ehFstmgOftcpEdjsmanVgSF58pjsppEXgyZSpnFrlwi0qw90%2B89ead3YIsFoWrXt%2Biff1icKyBgv11J0DTJDqcCejEYistXTqp7NEDVAHNU6sLvAzvAN5cAMNCsJuTeQYOzglkHzStf4B5jZ1&X-Amz-Signature=fa7c11a20ff0ad911e7fd564e85b2b65038d5ab19ae347062b06600fc483310a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJZFRUJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJRYGHnsvF%2FEOpxg8koXIH1j%2Frx77%2FrrVR4ss4LA0dGQIgBcbiUeX0HNBmRarxiDasXl365NIZhBibRqH2ys6Ho%2FUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGxntPHtxDf3kB7IlCrcA56jx2%2BBjJbZUoDJqmEMHqnK0f3RK%2BuM01Fe8GxfjEvrXETNzohNFoUUoUYD0DFzF3WQ2tLJxwywYwVt%2Fios7Lv0KOGnPZN3SvZPKNIB5a%2FUjF38%2FTtz6OcP5EjG88ii9nOOQeIrRDd3TL2%2BC81%2B9F3RuS9IKkMgDqS3WX7zpgZd0wAisPrODnAuZdXxJ8OguW9KQ4H2RTyBNSET%2B1hIx%2FBrtoAOVt%2FZHhBjAtHmV3SXX8sZz5R6vGiuy9JEjNalMriNmi2ENwE7FDoxdMifT4WZVomxLAhCPZUbHnh%2FFm0%2FRyf8gCf2Xl5M%2FxkGTSgvy8JwIoW%2FE7m4zqZ3lyA0p9n%2FVrggN96pVId3kpfMfWrmr6u%2Bh1bqY%2FosJTG9gS%2FBoiwua1lqquI9xo6dzppNM8c9q7QlLlQDL3dZ3trmB4iZ0sAkePvu2l1ahqMQQRWF23fD0DEdhJcviI4gBGjwGHLJj3QzMWDRQVl1JrIG83SKDqI070sCOkifOWMevDtZwUsZbneED8qrkkiUSU5KGq44yGZlOoAgOMEoQY9SEDQdjNYfCdlDR5ZacKCQq3aIf3LupEKVE96NSrCwlPQBsSPa3I3dOUymU525efcTNSzRXnev3UepvWexnB4lMLi3hcAGOqUB%2BMXuqvtQ%2FBfyEQRQH%2F84VPr8JcNQ9CrPkAL7uBE78cDyN95x0LEuQuKlczLM2iTVrhgZDuIVDa5ehFstmgOftcpEdjsmanVgSF58pjsppEXgyZSpnFrlwi0qw90%2B89ead3YIsFoWrXt%2Biff1icKyBgv11J0DTJDqcCejEYistXTqp7NEDVAHNU6sLvAzvAN5cAMNCsJuTeQYOzglkHzStf4B5jZ1&X-Amz-Signature=6e58e9ad2e0aa89ab274ca098908912301fefee3314d63f67c2e7ed59fca45a3&X-Amz-SignedHeaders=host&x-id=GetObject)
