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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KQ2MSS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD4WO2JRfXIJLS%2BzSEIG7OsEmaT4AJZn%2FTp7XitSr%2F9xgIgZErYGqEe4Xozr4zFSXTjnBmn%2BvYN4peTjJeFDngoDB4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSs7WCtFJ7uLR0s5SrcA0VNCOSB5Jyv4ADPh34QChuLmng9qf8rw9gYcmYxrh9KejIihxaIxm37PjQhIBdMSaxs2hvQ%2BbUJ%2FWluZ0EQDotzLs3VMrWr1ZNN%2FhMmvgbZeEe6kdXhPZFbmRRqRk9RC%2BfQFQ003QsK51knutAS%2F%2FvS%2FpLt2xsvbc0LxKPVwPQ8Hwxy3DZ2%2FBJ6G6RkC4R3WjHcIJVncWAdVynWRrqy4hJ%2BO9l4is04Flxz36wGijx6SFW9aXvP53Jq4iCJlvx8l4C6Tzmucu2vaXLxTiKr%2F0ueMw9IDll7RAKsc7gTEaOgaS5oWuS1dhUeZYRJjlRA3Kvy2U4kjuy5EhjBsiK96gxOwnOfCM8Z5wnWMjPQb%2FFo4re3OpmV709fMYjysyAXp2xQkN4imgkJh4Gj3Uoud%2B0%2BhB6gmHFlnxJcUPMEIZAsu%2FBHuaSWjo%2Bm1qe1vD%2B0Tny6PzP8LMMhkRqbmLHgf33kj6Hzt8dj7JAxmlS4TSP1Cpe8jx1%2FbvYBKPQHjP%2FyeACo6A65Q%2Fl1aghoc76XR36uvFMrHrAsOVGajrNjk3TnRcVn1ErG9bOW9U0W31N6Jhkt9fPMmMJDJViGWC2FGMF4YhsMYtJ60CZgqmcaDtTVw1yQiX%2BdO4FVZiU7MMuNpcAGOqUBCY3gY%2FUMm4%2BJAfk9C3tbxCFZuRPjadll4bNPXueaoOQIVdZPlFGerNhYSykr2ZmgC%2FILOQYFfztEZX1%2BB8VC0M%2FQZFJke2H37nFOnUWKXuYUcm2SyPjIJ62HYfg4kfsYTiL8T0FSmGbPpiuMmJjuZ%2BMWbuixSduzqXSRZOWtrx9o8RuuE84EOeQD%2F%2BURaRZkHm5GqRh0MkpZaEpPgzkxG70vC%2Bn8&X-Amz-Signature=6765431738a4a75f92e21f0aa200a213d29acda912a548487ef88466d63e802d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KQ2MSS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD4WO2JRfXIJLS%2BzSEIG7OsEmaT4AJZn%2FTp7XitSr%2F9xgIgZErYGqEe4Xozr4zFSXTjnBmn%2BvYN4peTjJeFDngoDB4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSs7WCtFJ7uLR0s5SrcA0VNCOSB5Jyv4ADPh34QChuLmng9qf8rw9gYcmYxrh9KejIihxaIxm37PjQhIBdMSaxs2hvQ%2BbUJ%2FWluZ0EQDotzLs3VMrWr1ZNN%2FhMmvgbZeEe6kdXhPZFbmRRqRk9RC%2BfQFQ003QsK51knutAS%2F%2FvS%2FpLt2xsvbc0LxKPVwPQ8Hwxy3DZ2%2FBJ6G6RkC4R3WjHcIJVncWAdVynWRrqy4hJ%2BO9l4is04Flxz36wGijx6SFW9aXvP53Jq4iCJlvx8l4C6Tzmucu2vaXLxTiKr%2F0ueMw9IDll7RAKsc7gTEaOgaS5oWuS1dhUeZYRJjlRA3Kvy2U4kjuy5EhjBsiK96gxOwnOfCM8Z5wnWMjPQb%2FFo4re3OpmV709fMYjysyAXp2xQkN4imgkJh4Gj3Uoud%2B0%2BhB6gmHFlnxJcUPMEIZAsu%2FBHuaSWjo%2Bm1qe1vD%2B0Tny6PzP8LMMhkRqbmLHgf33kj6Hzt8dj7JAxmlS4TSP1Cpe8jx1%2FbvYBKPQHjP%2FyeACo6A65Q%2Fl1aghoc76XR36uvFMrHrAsOVGajrNjk3TnRcVn1ErG9bOW9U0W31N6Jhkt9fPMmMJDJViGWC2FGMF4YhsMYtJ60CZgqmcaDtTVw1yQiX%2BdO4FVZiU7MMuNpcAGOqUBCY3gY%2FUMm4%2BJAfk9C3tbxCFZuRPjadll4bNPXueaoOQIVdZPlFGerNhYSykr2ZmgC%2FILOQYFfztEZX1%2BB8VC0M%2FQZFJke2H37nFOnUWKXuYUcm2SyPjIJ62HYfg4kfsYTiL8T0FSmGbPpiuMmJjuZ%2BMWbuixSduzqXSRZOWtrx9o8RuuE84EOeQD%2F%2BURaRZkHm5GqRh0MkpZaEpPgzkxG70vC%2Bn8&X-Amz-Signature=cb2a8e24db4150c2054c1c99baabbf275b69f1034d7f900a3ca65484a829ff19&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KQ2MSS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD4WO2JRfXIJLS%2BzSEIG7OsEmaT4AJZn%2FTp7XitSr%2F9xgIgZErYGqEe4Xozr4zFSXTjnBmn%2BvYN4peTjJeFDngoDB4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSs7WCtFJ7uLR0s5SrcA0VNCOSB5Jyv4ADPh34QChuLmng9qf8rw9gYcmYxrh9KejIihxaIxm37PjQhIBdMSaxs2hvQ%2BbUJ%2FWluZ0EQDotzLs3VMrWr1ZNN%2FhMmvgbZeEe6kdXhPZFbmRRqRk9RC%2BfQFQ003QsK51knutAS%2F%2FvS%2FpLt2xsvbc0LxKPVwPQ8Hwxy3DZ2%2FBJ6G6RkC4R3WjHcIJVncWAdVynWRrqy4hJ%2BO9l4is04Flxz36wGijx6SFW9aXvP53Jq4iCJlvx8l4C6Tzmucu2vaXLxTiKr%2F0ueMw9IDll7RAKsc7gTEaOgaS5oWuS1dhUeZYRJjlRA3Kvy2U4kjuy5EhjBsiK96gxOwnOfCM8Z5wnWMjPQb%2FFo4re3OpmV709fMYjysyAXp2xQkN4imgkJh4Gj3Uoud%2B0%2BhB6gmHFlnxJcUPMEIZAsu%2FBHuaSWjo%2Bm1qe1vD%2B0Tny6PzP8LMMhkRqbmLHgf33kj6Hzt8dj7JAxmlS4TSP1Cpe8jx1%2FbvYBKPQHjP%2FyeACo6A65Q%2Fl1aghoc76XR36uvFMrHrAsOVGajrNjk3TnRcVn1ErG9bOW9U0W31N6Jhkt9fPMmMJDJViGWC2FGMF4YhsMYtJ60CZgqmcaDtTVw1yQiX%2BdO4FVZiU7MMuNpcAGOqUBCY3gY%2FUMm4%2BJAfk9C3tbxCFZuRPjadll4bNPXueaoOQIVdZPlFGerNhYSykr2ZmgC%2FILOQYFfztEZX1%2BB8VC0M%2FQZFJke2H37nFOnUWKXuYUcm2SyPjIJ62HYfg4kfsYTiL8T0FSmGbPpiuMmJjuZ%2BMWbuixSduzqXSRZOWtrx9o8RuuE84EOeQD%2F%2BURaRZkHm5GqRh0MkpZaEpPgzkxG70vC%2Bn8&X-Amz-Signature=beee493ad2e2185cbf93480af2110b32439881c19d3d47789ca2974c1ad3a616&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KQ2MSS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD4WO2JRfXIJLS%2BzSEIG7OsEmaT4AJZn%2FTp7XitSr%2F9xgIgZErYGqEe4Xozr4zFSXTjnBmn%2BvYN4peTjJeFDngoDB4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSs7WCtFJ7uLR0s5SrcA0VNCOSB5Jyv4ADPh34QChuLmng9qf8rw9gYcmYxrh9KejIihxaIxm37PjQhIBdMSaxs2hvQ%2BbUJ%2FWluZ0EQDotzLs3VMrWr1ZNN%2FhMmvgbZeEe6kdXhPZFbmRRqRk9RC%2BfQFQ003QsK51knutAS%2F%2FvS%2FpLt2xsvbc0LxKPVwPQ8Hwxy3DZ2%2FBJ6G6RkC4R3WjHcIJVncWAdVynWRrqy4hJ%2BO9l4is04Flxz36wGijx6SFW9aXvP53Jq4iCJlvx8l4C6Tzmucu2vaXLxTiKr%2F0ueMw9IDll7RAKsc7gTEaOgaS5oWuS1dhUeZYRJjlRA3Kvy2U4kjuy5EhjBsiK96gxOwnOfCM8Z5wnWMjPQb%2FFo4re3OpmV709fMYjysyAXp2xQkN4imgkJh4Gj3Uoud%2B0%2BhB6gmHFlnxJcUPMEIZAsu%2FBHuaSWjo%2Bm1qe1vD%2B0Tny6PzP8LMMhkRqbmLHgf33kj6Hzt8dj7JAxmlS4TSP1Cpe8jx1%2FbvYBKPQHjP%2FyeACo6A65Q%2Fl1aghoc76XR36uvFMrHrAsOVGajrNjk3TnRcVn1ErG9bOW9U0W31N6Jhkt9fPMmMJDJViGWC2FGMF4YhsMYtJ60CZgqmcaDtTVw1yQiX%2BdO4FVZiU7MMuNpcAGOqUBCY3gY%2FUMm4%2BJAfk9C3tbxCFZuRPjadll4bNPXueaoOQIVdZPlFGerNhYSykr2ZmgC%2FILOQYFfztEZX1%2BB8VC0M%2FQZFJke2H37nFOnUWKXuYUcm2SyPjIJ62HYfg4kfsYTiL8T0FSmGbPpiuMmJjuZ%2BMWbuixSduzqXSRZOWtrx9o8RuuE84EOeQD%2F%2BURaRZkHm5GqRh0MkpZaEpPgzkxG70vC%2Bn8&X-Amz-Signature=bf930ce2ff1ef89070e90cf52d91f026b00690649964e3af0759c8594bedc6c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KQ2MSS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD4WO2JRfXIJLS%2BzSEIG7OsEmaT4AJZn%2FTp7XitSr%2F9xgIgZErYGqEe4Xozr4zFSXTjnBmn%2BvYN4peTjJeFDngoDB4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSs7WCtFJ7uLR0s5SrcA0VNCOSB5Jyv4ADPh34QChuLmng9qf8rw9gYcmYxrh9KejIihxaIxm37PjQhIBdMSaxs2hvQ%2BbUJ%2FWluZ0EQDotzLs3VMrWr1ZNN%2FhMmvgbZeEe6kdXhPZFbmRRqRk9RC%2BfQFQ003QsK51knutAS%2F%2FvS%2FpLt2xsvbc0LxKPVwPQ8Hwxy3DZ2%2FBJ6G6RkC4R3WjHcIJVncWAdVynWRrqy4hJ%2BO9l4is04Flxz36wGijx6SFW9aXvP53Jq4iCJlvx8l4C6Tzmucu2vaXLxTiKr%2F0ueMw9IDll7RAKsc7gTEaOgaS5oWuS1dhUeZYRJjlRA3Kvy2U4kjuy5EhjBsiK96gxOwnOfCM8Z5wnWMjPQb%2FFo4re3OpmV709fMYjysyAXp2xQkN4imgkJh4Gj3Uoud%2B0%2BhB6gmHFlnxJcUPMEIZAsu%2FBHuaSWjo%2Bm1qe1vD%2B0Tny6PzP8LMMhkRqbmLHgf33kj6Hzt8dj7JAxmlS4TSP1Cpe8jx1%2FbvYBKPQHjP%2FyeACo6A65Q%2Fl1aghoc76XR36uvFMrHrAsOVGajrNjk3TnRcVn1ErG9bOW9U0W31N6Jhkt9fPMmMJDJViGWC2FGMF4YhsMYtJ60CZgqmcaDtTVw1yQiX%2BdO4FVZiU7MMuNpcAGOqUBCY3gY%2FUMm4%2BJAfk9C3tbxCFZuRPjadll4bNPXueaoOQIVdZPlFGerNhYSykr2ZmgC%2FILOQYFfztEZX1%2BB8VC0M%2FQZFJke2H37nFOnUWKXuYUcm2SyPjIJ62HYfg4kfsYTiL8T0FSmGbPpiuMmJjuZ%2BMWbuixSduzqXSRZOWtrx9o8RuuE84EOeQD%2F%2BURaRZkHm5GqRh0MkpZaEpPgzkxG70vC%2Bn8&X-Amz-Signature=24df8ec1fa82a45b0ad482aa54fad6848041c9f60227fc2d3e65cc4e90c9528f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KQ2MSS%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD4WO2JRfXIJLS%2BzSEIG7OsEmaT4AJZn%2FTp7XitSr%2F9xgIgZErYGqEe4Xozr4zFSXTjnBmn%2BvYN4peTjJeFDngoDB4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSs7WCtFJ7uLR0s5SrcA0VNCOSB5Jyv4ADPh34QChuLmng9qf8rw9gYcmYxrh9KejIihxaIxm37PjQhIBdMSaxs2hvQ%2BbUJ%2FWluZ0EQDotzLs3VMrWr1ZNN%2FhMmvgbZeEe6kdXhPZFbmRRqRk9RC%2BfQFQ003QsK51knutAS%2F%2FvS%2FpLt2xsvbc0LxKPVwPQ8Hwxy3DZ2%2FBJ6G6RkC4R3WjHcIJVncWAdVynWRrqy4hJ%2BO9l4is04Flxz36wGijx6SFW9aXvP53Jq4iCJlvx8l4C6Tzmucu2vaXLxTiKr%2F0ueMw9IDll7RAKsc7gTEaOgaS5oWuS1dhUeZYRJjlRA3Kvy2U4kjuy5EhjBsiK96gxOwnOfCM8Z5wnWMjPQb%2FFo4re3OpmV709fMYjysyAXp2xQkN4imgkJh4Gj3Uoud%2B0%2BhB6gmHFlnxJcUPMEIZAsu%2FBHuaSWjo%2Bm1qe1vD%2B0Tny6PzP8LMMhkRqbmLHgf33kj6Hzt8dj7JAxmlS4TSP1Cpe8jx1%2FbvYBKPQHjP%2FyeACo6A65Q%2Fl1aghoc76XR36uvFMrHrAsOVGajrNjk3TnRcVn1ErG9bOW9U0W31N6Jhkt9fPMmMJDJViGWC2FGMF4YhsMYtJ60CZgqmcaDtTVw1yQiX%2BdO4FVZiU7MMuNpcAGOqUBCY3gY%2FUMm4%2BJAfk9C3tbxCFZuRPjadll4bNPXueaoOQIVdZPlFGerNhYSykr2ZmgC%2FILOQYFfztEZX1%2BB8VC0M%2FQZFJke2H37nFOnUWKXuYUcm2SyPjIJ62HYfg4kfsYTiL8T0FSmGbPpiuMmJjuZ%2BMWbuixSduzqXSRZOWtrx9o8RuuE84EOeQD%2F%2BURaRZkHm5GqRh0MkpZaEpPgzkxG70vC%2Bn8&X-Amz-Signature=9832088e8816c20a1c38c6533c8f65df54265aad660f79e1eeb533687f8e6b0e&X-Amz-SignedHeaders=host&x-id=GetObject)
