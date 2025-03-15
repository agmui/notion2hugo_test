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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2A6VFB5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATvPVR47%2Bl%2FbrwvnLbC%2FdZPY52XcXBhrrFxkwerShe7AiEA44f8VBxqWKLjdMTi4cet%2BIjjAQSIT3nANc5yYl3w3y0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwdl%2FVgtZ4MafUdDCrcA1CqjAAxYbCoIK%2BjUIwewEjPZKFY%2BRp6%2Fh%2F55T%2BcRBIPFmDcTEE2dc%2FviyH0ErAd%2FOQQ8izJ466ZabQsvgETgK6iaqFgcCXj0WJqBszZdcayPVYNvgcL9W%2B93SdGUBCw%2B7QQY9p%2FURKx1wRajlzx%2BhCJEb9tms4eirjzAN12lyJ%2Fw%2BQoRf%2FORC2KaUoesbBjBLqPBBiE0bBzmXwEAORFxPtHntWuW32HvYtFnjVm3RoIwIPPIKG6fTleN%2B6GT5BqsiayOQ%2BnZqKvH3M1Ad9Dor4ity4Dd20Kha7bxK4Umrmrc2K0j2lFvE0rWShWmSQ1HBe5lvX0V8eq0HxSB%2FHJpZpD2ijNw%2BkI3a3i4NUtp3BY9e6x1mfbwyquxC0NKTwnz%2FrSW6L%2FqD6oqmZHXSKIJCSJkDicEahfA6SeerD3%2By2a8s6L4P0HL74b4fKvXB8L%2BQbBl7CHHEIHd4Zhit8QrAvBq2hWmRvifFOQmCHxxHXbXWkFOZrVUVd1QMdvgjgCZYXQG%2BCUKxVjIZljkYzyruo6MDkxRhg7M8gz1yZZE6gdlOLvsMSl3RcdMDBUJoKogl6%2Fjw%2FD1x%2BFUEUDgqwzsnluMxEFa8RjVamR9SisHgLmLDi8fbcH5dxqLGlWMKml1L4GOqUB0Q5LIcp9zhHWRNpoPGNRMgrRZ1dENkALNLud8enYQ4pAMw5Y8vO2OK5N6LeY58OZ6lPNlXnWQYj5cifnrGVuk3LYteDon%2B5t4fd820xSWBsBhBupnWQ1gaC7kNbKmZH6xLKObFkowcNZF9Rk6dwAF2kiZs%2FTm4hM3DhdYr2VR4DHPHd%2B3jzvKAOYqnfcggeRExNzFb9et4nzi%2BJy2FDMGqRuW8qq&X-Amz-Signature=715ec5a23f68e6571f4115776322ed5c0632440d873b87d909a700cb8b91e38f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2A6VFB5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATvPVR47%2Bl%2FbrwvnLbC%2FdZPY52XcXBhrrFxkwerShe7AiEA44f8VBxqWKLjdMTi4cet%2BIjjAQSIT3nANc5yYl3w3y0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwdl%2FVgtZ4MafUdDCrcA1CqjAAxYbCoIK%2BjUIwewEjPZKFY%2BRp6%2Fh%2F55T%2BcRBIPFmDcTEE2dc%2FviyH0ErAd%2FOQQ8izJ466ZabQsvgETgK6iaqFgcCXj0WJqBszZdcayPVYNvgcL9W%2B93SdGUBCw%2B7QQY9p%2FURKx1wRajlzx%2BhCJEb9tms4eirjzAN12lyJ%2Fw%2BQoRf%2FORC2KaUoesbBjBLqPBBiE0bBzmXwEAORFxPtHntWuW32HvYtFnjVm3RoIwIPPIKG6fTleN%2B6GT5BqsiayOQ%2BnZqKvH3M1Ad9Dor4ity4Dd20Kha7bxK4Umrmrc2K0j2lFvE0rWShWmSQ1HBe5lvX0V8eq0HxSB%2FHJpZpD2ijNw%2BkI3a3i4NUtp3BY9e6x1mfbwyquxC0NKTwnz%2FrSW6L%2FqD6oqmZHXSKIJCSJkDicEahfA6SeerD3%2By2a8s6L4P0HL74b4fKvXB8L%2BQbBl7CHHEIHd4Zhit8QrAvBq2hWmRvifFOQmCHxxHXbXWkFOZrVUVd1QMdvgjgCZYXQG%2BCUKxVjIZljkYzyruo6MDkxRhg7M8gz1yZZE6gdlOLvsMSl3RcdMDBUJoKogl6%2Fjw%2FD1x%2BFUEUDgqwzsnluMxEFa8RjVamR9SisHgLmLDi8fbcH5dxqLGlWMKml1L4GOqUB0Q5LIcp9zhHWRNpoPGNRMgrRZ1dENkALNLud8enYQ4pAMw5Y8vO2OK5N6LeY58OZ6lPNlXnWQYj5cifnrGVuk3LYteDon%2B5t4fd820xSWBsBhBupnWQ1gaC7kNbKmZH6xLKObFkowcNZF9Rk6dwAF2kiZs%2FTm4hM3DhdYr2VR4DHPHd%2B3jzvKAOYqnfcggeRExNzFb9et4nzi%2BJy2FDMGqRuW8qq&X-Amz-Signature=0381c7fc017030be572adf5f478ebe5171a7b097d45d31aaae9c3cacec4f2d77&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2A6VFB5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATvPVR47%2Bl%2FbrwvnLbC%2FdZPY52XcXBhrrFxkwerShe7AiEA44f8VBxqWKLjdMTi4cet%2BIjjAQSIT3nANc5yYl3w3y0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwdl%2FVgtZ4MafUdDCrcA1CqjAAxYbCoIK%2BjUIwewEjPZKFY%2BRp6%2Fh%2F55T%2BcRBIPFmDcTEE2dc%2FviyH0ErAd%2FOQQ8izJ466ZabQsvgETgK6iaqFgcCXj0WJqBszZdcayPVYNvgcL9W%2B93SdGUBCw%2B7QQY9p%2FURKx1wRajlzx%2BhCJEb9tms4eirjzAN12lyJ%2Fw%2BQoRf%2FORC2KaUoesbBjBLqPBBiE0bBzmXwEAORFxPtHntWuW32HvYtFnjVm3RoIwIPPIKG6fTleN%2B6GT5BqsiayOQ%2BnZqKvH3M1Ad9Dor4ity4Dd20Kha7bxK4Umrmrc2K0j2lFvE0rWShWmSQ1HBe5lvX0V8eq0HxSB%2FHJpZpD2ijNw%2BkI3a3i4NUtp3BY9e6x1mfbwyquxC0NKTwnz%2FrSW6L%2FqD6oqmZHXSKIJCSJkDicEahfA6SeerD3%2By2a8s6L4P0HL74b4fKvXB8L%2BQbBl7CHHEIHd4Zhit8QrAvBq2hWmRvifFOQmCHxxHXbXWkFOZrVUVd1QMdvgjgCZYXQG%2BCUKxVjIZljkYzyruo6MDkxRhg7M8gz1yZZE6gdlOLvsMSl3RcdMDBUJoKogl6%2Fjw%2FD1x%2BFUEUDgqwzsnluMxEFa8RjVamR9SisHgLmLDi8fbcH5dxqLGlWMKml1L4GOqUB0Q5LIcp9zhHWRNpoPGNRMgrRZ1dENkALNLud8enYQ4pAMw5Y8vO2OK5N6LeY58OZ6lPNlXnWQYj5cifnrGVuk3LYteDon%2B5t4fd820xSWBsBhBupnWQ1gaC7kNbKmZH6xLKObFkowcNZF9Rk6dwAF2kiZs%2FTm4hM3DhdYr2VR4DHPHd%2B3jzvKAOYqnfcggeRExNzFb9et4nzi%2BJy2FDMGqRuW8qq&X-Amz-Signature=ab073c687eed68d0c6b6f7b8ea488732c0737134c7da9a0db88b69de5c9db7ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2A6VFB5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATvPVR47%2Bl%2FbrwvnLbC%2FdZPY52XcXBhrrFxkwerShe7AiEA44f8VBxqWKLjdMTi4cet%2BIjjAQSIT3nANc5yYl3w3y0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwdl%2FVgtZ4MafUdDCrcA1CqjAAxYbCoIK%2BjUIwewEjPZKFY%2BRp6%2Fh%2F55T%2BcRBIPFmDcTEE2dc%2FviyH0ErAd%2FOQQ8izJ466ZabQsvgETgK6iaqFgcCXj0WJqBszZdcayPVYNvgcL9W%2B93SdGUBCw%2B7QQY9p%2FURKx1wRajlzx%2BhCJEb9tms4eirjzAN12lyJ%2Fw%2BQoRf%2FORC2KaUoesbBjBLqPBBiE0bBzmXwEAORFxPtHntWuW32HvYtFnjVm3RoIwIPPIKG6fTleN%2B6GT5BqsiayOQ%2BnZqKvH3M1Ad9Dor4ity4Dd20Kha7bxK4Umrmrc2K0j2lFvE0rWShWmSQ1HBe5lvX0V8eq0HxSB%2FHJpZpD2ijNw%2BkI3a3i4NUtp3BY9e6x1mfbwyquxC0NKTwnz%2FrSW6L%2FqD6oqmZHXSKIJCSJkDicEahfA6SeerD3%2By2a8s6L4P0HL74b4fKvXB8L%2BQbBl7CHHEIHd4Zhit8QrAvBq2hWmRvifFOQmCHxxHXbXWkFOZrVUVd1QMdvgjgCZYXQG%2BCUKxVjIZljkYzyruo6MDkxRhg7M8gz1yZZE6gdlOLvsMSl3RcdMDBUJoKogl6%2Fjw%2FD1x%2BFUEUDgqwzsnluMxEFa8RjVamR9SisHgLmLDi8fbcH5dxqLGlWMKml1L4GOqUB0Q5LIcp9zhHWRNpoPGNRMgrRZ1dENkALNLud8enYQ4pAMw5Y8vO2OK5N6LeY58OZ6lPNlXnWQYj5cifnrGVuk3LYteDon%2B5t4fd820xSWBsBhBupnWQ1gaC7kNbKmZH6xLKObFkowcNZF9Rk6dwAF2kiZs%2FTm4hM3DhdYr2VR4DHPHd%2B3jzvKAOYqnfcggeRExNzFb9et4nzi%2BJy2FDMGqRuW8qq&X-Amz-Signature=457e423ed0894c0b52d4ddbc695ed7d80601b9a0b2b0f2542559aa565abbeb43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2A6VFB5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATvPVR47%2Bl%2FbrwvnLbC%2FdZPY52XcXBhrrFxkwerShe7AiEA44f8VBxqWKLjdMTi4cet%2BIjjAQSIT3nANc5yYl3w3y0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwdl%2FVgtZ4MafUdDCrcA1CqjAAxYbCoIK%2BjUIwewEjPZKFY%2BRp6%2Fh%2F55T%2BcRBIPFmDcTEE2dc%2FviyH0ErAd%2FOQQ8izJ466ZabQsvgETgK6iaqFgcCXj0WJqBszZdcayPVYNvgcL9W%2B93SdGUBCw%2B7QQY9p%2FURKx1wRajlzx%2BhCJEb9tms4eirjzAN12lyJ%2Fw%2BQoRf%2FORC2KaUoesbBjBLqPBBiE0bBzmXwEAORFxPtHntWuW32HvYtFnjVm3RoIwIPPIKG6fTleN%2B6GT5BqsiayOQ%2BnZqKvH3M1Ad9Dor4ity4Dd20Kha7bxK4Umrmrc2K0j2lFvE0rWShWmSQ1HBe5lvX0V8eq0HxSB%2FHJpZpD2ijNw%2BkI3a3i4NUtp3BY9e6x1mfbwyquxC0NKTwnz%2FrSW6L%2FqD6oqmZHXSKIJCSJkDicEahfA6SeerD3%2By2a8s6L4P0HL74b4fKvXB8L%2BQbBl7CHHEIHd4Zhit8QrAvBq2hWmRvifFOQmCHxxHXbXWkFOZrVUVd1QMdvgjgCZYXQG%2BCUKxVjIZljkYzyruo6MDkxRhg7M8gz1yZZE6gdlOLvsMSl3RcdMDBUJoKogl6%2Fjw%2FD1x%2BFUEUDgqwzsnluMxEFa8RjVamR9SisHgLmLDi8fbcH5dxqLGlWMKml1L4GOqUB0Q5LIcp9zhHWRNpoPGNRMgrRZ1dENkALNLud8enYQ4pAMw5Y8vO2OK5N6LeY58OZ6lPNlXnWQYj5cifnrGVuk3LYteDon%2B5t4fd820xSWBsBhBupnWQ1gaC7kNbKmZH6xLKObFkowcNZF9Rk6dwAF2kiZs%2FTm4hM3DhdYr2VR4DHPHd%2B3jzvKAOYqnfcggeRExNzFb9et4nzi%2BJy2FDMGqRuW8qq&X-Amz-Signature=0f4f2bff0adee3f2f58888a1544cdc79df03e558e1add7f8156d828829571cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2A6VFB5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATvPVR47%2Bl%2FbrwvnLbC%2FdZPY52XcXBhrrFxkwerShe7AiEA44f8VBxqWKLjdMTi4cet%2BIjjAQSIT3nANc5yYl3w3y0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwdl%2FVgtZ4MafUdDCrcA1CqjAAxYbCoIK%2BjUIwewEjPZKFY%2BRp6%2Fh%2F55T%2BcRBIPFmDcTEE2dc%2FviyH0ErAd%2FOQQ8izJ466ZabQsvgETgK6iaqFgcCXj0WJqBszZdcayPVYNvgcL9W%2B93SdGUBCw%2B7QQY9p%2FURKx1wRajlzx%2BhCJEb9tms4eirjzAN12lyJ%2Fw%2BQoRf%2FORC2KaUoesbBjBLqPBBiE0bBzmXwEAORFxPtHntWuW32HvYtFnjVm3RoIwIPPIKG6fTleN%2B6GT5BqsiayOQ%2BnZqKvH3M1Ad9Dor4ity4Dd20Kha7bxK4Umrmrc2K0j2lFvE0rWShWmSQ1HBe5lvX0V8eq0HxSB%2FHJpZpD2ijNw%2BkI3a3i4NUtp3BY9e6x1mfbwyquxC0NKTwnz%2FrSW6L%2FqD6oqmZHXSKIJCSJkDicEahfA6SeerD3%2By2a8s6L4P0HL74b4fKvXB8L%2BQbBl7CHHEIHd4Zhit8QrAvBq2hWmRvifFOQmCHxxHXbXWkFOZrVUVd1QMdvgjgCZYXQG%2BCUKxVjIZljkYzyruo6MDkxRhg7M8gz1yZZE6gdlOLvsMSl3RcdMDBUJoKogl6%2Fjw%2FD1x%2BFUEUDgqwzsnluMxEFa8RjVamR9SisHgLmLDi8fbcH5dxqLGlWMKml1L4GOqUB0Q5LIcp9zhHWRNpoPGNRMgrRZ1dENkALNLud8enYQ4pAMw5Y8vO2OK5N6LeY58OZ6lPNlXnWQYj5cifnrGVuk3LYteDon%2B5t4fd820xSWBsBhBupnWQ1gaC7kNbKmZH6xLKObFkowcNZF9Rk6dwAF2kiZs%2FTm4hM3DhdYr2VR4DHPHd%2B3jzvKAOYqnfcggeRExNzFb9et4nzi%2BJy2FDMGqRuW8qq&X-Amz-Signature=a81be64d6dba1193797087a7840b705ac69cb88fa831494736305360a5b14337&X-Amz-SignedHeaders=host&x-id=GetObject)
