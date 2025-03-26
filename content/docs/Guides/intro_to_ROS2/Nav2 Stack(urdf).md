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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GKI2DY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZG1J1nJkS7rfbMAzlxFgGBJqR4%2F6OZaai6Dlw7kr%2B8AiEAnoQoT2cFz4nsyhTspVZrdRRiIuhkOLg10Z7uIOcy%2F24q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCGhRNu%2BELNZKWp6wSrcA7VizyY7qSm8HzMZ9k5Pg0FQxSCIvhntA%2Fg2BmRuFT7KDEn2467Wf5DHqeWrk4VTP2CRFvsnthm%2BS94uxhFEYCinrWndVgvaoW21f9KQKqI%2FNcy5DaMaRzY7VFZuW5u%2BBxCAEXF9ejwzUjT1id2fQkIRFF2m1SjVxnH3ikvt3afRPu9GY1k7GiM1yitLodgwaGbrhJNF9bS0ngCB6toohbdmqGB99xhts9yqp3y8E6jKbpgtE%2FsoG3%2Br4aJEmb1gzfVLdtJxZUureC%2BcLcqNgxYlh5fzduabTP5zd%2FnyjE%2FJ5lZnrskWHiQu7sJxrGskKwejeDxNMsVdBUC94V8KWI%2BiOfRAAX6F5U53ExQDFkP56Ojktc37i7YuPfGWZLVi5Dmch8oOnZiy5NE8wW%2BekRL8j7fzvor6O6rbiXfbsyf2VAsYQ2CxftPmAvHI%2FD7I92pxVu9BzcM%2F2%2BpDWyM6D5gzbcCuXy0AtoHQ%2BfkmIwKPrXd29PJXl84sEHZGH4E220Vuc24YhItBPGQtz1QllwvigTTb6oLubvEA7vuI34naIvIos2nu%2BhoMsVSnIFs01zGqAFsHdBg1%2BLo9Aagqy2NaS3kLGn%2FC7xepVewkEmUbmoVO5PQDruztKPu5MNj2kL8GOqUB9fwm3vT88MwFJTx%2Fr7q6rxHiAB0TqcXgiOEO%2BRsqBGHO%2B%2BYtS2NG3MDB8%2FSe0tWi6w5QPZmXi89A3IpuKAd2sIaLwnT3c%2FPU%2BbIWVcYYEXmeVOS1MuT%2F2ZBLijSe5a5JJqOpmbuBbD4M1N4WORdyM88uST67RtPr4msAhZlJA4otUzunnMDyTkz2tVSnXYl2xz5KjGoPNrOWi9UgkDNZ1jHy7pgC&X-Amz-Signature=757e4ae012f8cb4285d690239f846aefbc352ecd38b3c2398b5249450fead28e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GKI2DY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZG1J1nJkS7rfbMAzlxFgGBJqR4%2F6OZaai6Dlw7kr%2B8AiEAnoQoT2cFz4nsyhTspVZrdRRiIuhkOLg10Z7uIOcy%2F24q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCGhRNu%2BELNZKWp6wSrcA7VizyY7qSm8HzMZ9k5Pg0FQxSCIvhntA%2Fg2BmRuFT7KDEn2467Wf5DHqeWrk4VTP2CRFvsnthm%2BS94uxhFEYCinrWndVgvaoW21f9KQKqI%2FNcy5DaMaRzY7VFZuW5u%2BBxCAEXF9ejwzUjT1id2fQkIRFF2m1SjVxnH3ikvt3afRPu9GY1k7GiM1yitLodgwaGbrhJNF9bS0ngCB6toohbdmqGB99xhts9yqp3y8E6jKbpgtE%2FsoG3%2Br4aJEmb1gzfVLdtJxZUureC%2BcLcqNgxYlh5fzduabTP5zd%2FnyjE%2FJ5lZnrskWHiQu7sJxrGskKwejeDxNMsVdBUC94V8KWI%2BiOfRAAX6F5U53ExQDFkP56Ojktc37i7YuPfGWZLVi5Dmch8oOnZiy5NE8wW%2BekRL8j7fzvor6O6rbiXfbsyf2VAsYQ2CxftPmAvHI%2FD7I92pxVu9BzcM%2F2%2BpDWyM6D5gzbcCuXy0AtoHQ%2BfkmIwKPrXd29PJXl84sEHZGH4E220Vuc24YhItBPGQtz1QllwvigTTb6oLubvEA7vuI34naIvIos2nu%2BhoMsVSnIFs01zGqAFsHdBg1%2BLo9Aagqy2NaS3kLGn%2FC7xepVewkEmUbmoVO5PQDruztKPu5MNj2kL8GOqUB9fwm3vT88MwFJTx%2Fr7q6rxHiAB0TqcXgiOEO%2BRsqBGHO%2B%2BYtS2NG3MDB8%2FSe0tWi6w5QPZmXi89A3IpuKAd2sIaLwnT3c%2FPU%2BbIWVcYYEXmeVOS1MuT%2F2ZBLijSe5a5JJqOpmbuBbD4M1N4WORdyM88uST67RtPr4msAhZlJA4otUzunnMDyTkz2tVSnXYl2xz5KjGoPNrOWi9UgkDNZ1jHy7pgC&X-Amz-Signature=c4928e1fe35054affd47eaaf937bad54a0c1363d09e2aee78382a8059664058d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GKI2DY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZG1J1nJkS7rfbMAzlxFgGBJqR4%2F6OZaai6Dlw7kr%2B8AiEAnoQoT2cFz4nsyhTspVZrdRRiIuhkOLg10Z7uIOcy%2F24q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCGhRNu%2BELNZKWp6wSrcA7VizyY7qSm8HzMZ9k5Pg0FQxSCIvhntA%2Fg2BmRuFT7KDEn2467Wf5DHqeWrk4VTP2CRFvsnthm%2BS94uxhFEYCinrWndVgvaoW21f9KQKqI%2FNcy5DaMaRzY7VFZuW5u%2BBxCAEXF9ejwzUjT1id2fQkIRFF2m1SjVxnH3ikvt3afRPu9GY1k7GiM1yitLodgwaGbrhJNF9bS0ngCB6toohbdmqGB99xhts9yqp3y8E6jKbpgtE%2FsoG3%2Br4aJEmb1gzfVLdtJxZUureC%2BcLcqNgxYlh5fzduabTP5zd%2FnyjE%2FJ5lZnrskWHiQu7sJxrGskKwejeDxNMsVdBUC94V8KWI%2BiOfRAAX6F5U53ExQDFkP56Ojktc37i7YuPfGWZLVi5Dmch8oOnZiy5NE8wW%2BekRL8j7fzvor6O6rbiXfbsyf2VAsYQ2CxftPmAvHI%2FD7I92pxVu9BzcM%2F2%2BpDWyM6D5gzbcCuXy0AtoHQ%2BfkmIwKPrXd29PJXl84sEHZGH4E220Vuc24YhItBPGQtz1QllwvigTTb6oLubvEA7vuI34naIvIos2nu%2BhoMsVSnIFs01zGqAFsHdBg1%2BLo9Aagqy2NaS3kLGn%2FC7xepVewkEmUbmoVO5PQDruztKPu5MNj2kL8GOqUB9fwm3vT88MwFJTx%2Fr7q6rxHiAB0TqcXgiOEO%2BRsqBGHO%2B%2BYtS2NG3MDB8%2FSe0tWi6w5QPZmXi89A3IpuKAd2sIaLwnT3c%2FPU%2BbIWVcYYEXmeVOS1MuT%2F2ZBLijSe5a5JJqOpmbuBbD4M1N4WORdyM88uST67RtPr4msAhZlJA4otUzunnMDyTkz2tVSnXYl2xz5KjGoPNrOWi9UgkDNZ1jHy7pgC&X-Amz-Signature=5bf9fde7cda6604a428c7c13b946128b30b256046a7237e3547ceb779ab41b82&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GKI2DY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZG1J1nJkS7rfbMAzlxFgGBJqR4%2F6OZaai6Dlw7kr%2B8AiEAnoQoT2cFz4nsyhTspVZrdRRiIuhkOLg10Z7uIOcy%2F24q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCGhRNu%2BELNZKWp6wSrcA7VizyY7qSm8HzMZ9k5Pg0FQxSCIvhntA%2Fg2BmRuFT7KDEn2467Wf5DHqeWrk4VTP2CRFvsnthm%2BS94uxhFEYCinrWndVgvaoW21f9KQKqI%2FNcy5DaMaRzY7VFZuW5u%2BBxCAEXF9ejwzUjT1id2fQkIRFF2m1SjVxnH3ikvt3afRPu9GY1k7GiM1yitLodgwaGbrhJNF9bS0ngCB6toohbdmqGB99xhts9yqp3y8E6jKbpgtE%2FsoG3%2Br4aJEmb1gzfVLdtJxZUureC%2BcLcqNgxYlh5fzduabTP5zd%2FnyjE%2FJ5lZnrskWHiQu7sJxrGskKwejeDxNMsVdBUC94V8KWI%2BiOfRAAX6F5U53ExQDFkP56Ojktc37i7YuPfGWZLVi5Dmch8oOnZiy5NE8wW%2BekRL8j7fzvor6O6rbiXfbsyf2VAsYQ2CxftPmAvHI%2FD7I92pxVu9BzcM%2F2%2BpDWyM6D5gzbcCuXy0AtoHQ%2BfkmIwKPrXd29PJXl84sEHZGH4E220Vuc24YhItBPGQtz1QllwvigTTb6oLubvEA7vuI34naIvIos2nu%2BhoMsVSnIFs01zGqAFsHdBg1%2BLo9Aagqy2NaS3kLGn%2FC7xepVewkEmUbmoVO5PQDruztKPu5MNj2kL8GOqUB9fwm3vT88MwFJTx%2Fr7q6rxHiAB0TqcXgiOEO%2BRsqBGHO%2B%2BYtS2NG3MDB8%2FSe0tWi6w5QPZmXi89A3IpuKAd2sIaLwnT3c%2FPU%2BbIWVcYYEXmeVOS1MuT%2F2ZBLijSe5a5JJqOpmbuBbD4M1N4WORdyM88uST67RtPr4msAhZlJA4otUzunnMDyTkz2tVSnXYl2xz5KjGoPNrOWi9UgkDNZ1jHy7pgC&X-Amz-Signature=15fc0b61b61ce50996a2d7627fb24682607ee4e6525034aa092d21f308b9130e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GKI2DY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZG1J1nJkS7rfbMAzlxFgGBJqR4%2F6OZaai6Dlw7kr%2B8AiEAnoQoT2cFz4nsyhTspVZrdRRiIuhkOLg10Z7uIOcy%2F24q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCGhRNu%2BELNZKWp6wSrcA7VizyY7qSm8HzMZ9k5Pg0FQxSCIvhntA%2Fg2BmRuFT7KDEn2467Wf5DHqeWrk4VTP2CRFvsnthm%2BS94uxhFEYCinrWndVgvaoW21f9KQKqI%2FNcy5DaMaRzY7VFZuW5u%2BBxCAEXF9ejwzUjT1id2fQkIRFF2m1SjVxnH3ikvt3afRPu9GY1k7GiM1yitLodgwaGbrhJNF9bS0ngCB6toohbdmqGB99xhts9yqp3y8E6jKbpgtE%2FsoG3%2Br4aJEmb1gzfVLdtJxZUureC%2BcLcqNgxYlh5fzduabTP5zd%2FnyjE%2FJ5lZnrskWHiQu7sJxrGskKwejeDxNMsVdBUC94V8KWI%2BiOfRAAX6F5U53ExQDFkP56Ojktc37i7YuPfGWZLVi5Dmch8oOnZiy5NE8wW%2BekRL8j7fzvor6O6rbiXfbsyf2VAsYQ2CxftPmAvHI%2FD7I92pxVu9BzcM%2F2%2BpDWyM6D5gzbcCuXy0AtoHQ%2BfkmIwKPrXd29PJXl84sEHZGH4E220Vuc24YhItBPGQtz1QllwvigTTb6oLubvEA7vuI34naIvIos2nu%2BhoMsVSnIFs01zGqAFsHdBg1%2BLo9Aagqy2NaS3kLGn%2FC7xepVewkEmUbmoVO5PQDruztKPu5MNj2kL8GOqUB9fwm3vT88MwFJTx%2Fr7q6rxHiAB0TqcXgiOEO%2BRsqBGHO%2B%2BYtS2NG3MDB8%2FSe0tWi6w5QPZmXi89A3IpuKAd2sIaLwnT3c%2FPU%2BbIWVcYYEXmeVOS1MuT%2F2ZBLijSe5a5JJqOpmbuBbD4M1N4WORdyM88uST67RtPr4msAhZlJA4otUzunnMDyTkz2tVSnXYl2xz5KjGoPNrOWi9UgkDNZ1jHy7pgC&X-Amz-Signature=572fa8fa4a11f28e4f4d34b3b89c64d21039a11e42d197d2ccf8f570e4b17bef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GKI2DY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZG1J1nJkS7rfbMAzlxFgGBJqR4%2F6OZaai6Dlw7kr%2B8AiEAnoQoT2cFz4nsyhTspVZrdRRiIuhkOLg10Z7uIOcy%2F24q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCGhRNu%2BELNZKWp6wSrcA7VizyY7qSm8HzMZ9k5Pg0FQxSCIvhntA%2Fg2BmRuFT7KDEn2467Wf5DHqeWrk4VTP2CRFvsnthm%2BS94uxhFEYCinrWndVgvaoW21f9KQKqI%2FNcy5DaMaRzY7VFZuW5u%2BBxCAEXF9ejwzUjT1id2fQkIRFF2m1SjVxnH3ikvt3afRPu9GY1k7GiM1yitLodgwaGbrhJNF9bS0ngCB6toohbdmqGB99xhts9yqp3y8E6jKbpgtE%2FsoG3%2Br4aJEmb1gzfVLdtJxZUureC%2BcLcqNgxYlh5fzduabTP5zd%2FnyjE%2FJ5lZnrskWHiQu7sJxrGskKwejeDxNMsVdBUC94V8KWI%2BiOfRAAX6F5U53ExQDFkP56Ojktc37i7YuPfGWZLVi5Dmch8oOnZiy5NE8wW%2BekRL8j7fzvor6O6rbiXfbsyf2VAsYQ2CxftPmAvHI%2FD7I92pxVu9BzcM%2F2%2BpDWyM6D5gzbcCuXy0AtoHQ%2BfkmIwKPrXd29PJXl84sEHZGH4E220Vuc24YhItBPGQtz1QllwvigTTb6oLubvEA7vuI34naIvIos2nu%2BhoMsVSnIFs01zGqAFsHdBg1%2BLo9Aagqy2NaS3kLGn%2FC7xepVewkEmUbmoVO5PQDruztKPu5MNj2kL8GOqUB9fwm3vT88MwFJTx%2Fr7q6rxHiAB0TqcXgiOEO%2BRsqBGHO%2B%2BYtS2NG3MDB8%2FSe0tWi6w5QPZmXi89A3IpuKAd2sIaLwnT3c%2FPU%2BbIWVcYYEXmeVOS1MuT%2F2ZBLijSe5a5JJqOpmbuBbD4M1N4WORdyM88uST67RtPr4msAhZlJA4otUzunnMDyTkz2tVSnXYl2xz5KjGoPNrOWi9UgkDNZ1jHy7pgC&X-Amz-Signature=38a060ae594a60bfea6ea5e791b98fe802c072a5e576c54e6b0317fe9ddf72fa&X-Amz-SignedHeaders=host&x-id=GetObject)
