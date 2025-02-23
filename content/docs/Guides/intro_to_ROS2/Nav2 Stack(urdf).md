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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUUVD4W%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr1z7bg1bFAvrb%2Fu%2BZgE5my%2FE7rzt76glCm%2BAXmEBymAiB3xYZGMkQK1sySUtlnGXBQjxh3ttetTidKTt9jOStONSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMir%2FmvMLDuyZPzOtmKtwDRCg6gqrG474P7oDeBFXVR2g0bPrfjIhQ6UkKsWoXnC979xYnREC1fxhvLr1k9n%2BKOi%2Bw7vLoYFF38N6wxSNvvFeFw0M9Vna6YCV9amzdXYH0bpKmpY%2B74j4sIiDlgsJSnQmb0c1wuf82fCdzNsSDNj4EfUbRnP%2Bj7jdajhAn7FU%2BJcHY%2Bfb256KAcOQgOvgDroE%2FtHSv4LKTIyGaFKlowPtBXZDtslL2OaPy6w8HuE1wwh0AkhOFVooFRcWWEcu%2FSDMlyzibAQzks4ZD5h0Le3D8Ks2v5zzaEjUMkeIXY3R%2BAtps08BxgIViEwqLVtUm3SorW%2FtCFTNj7bugIa1QFzFzw1kDqexEEh%2BDo3%2FZq6Uve7TZ7tQbA%2BVM%2F2HgL1V8yxlvTnlxUJSsYpe7YxdLQQOMKMrILn3%2FO0nXVe%2BR9brMKwy7NdTZHpK%2BQZFgTUbrJ4%2FJkWP5QO3B%2FxV46FZX6WEO9uUjkKBtSlOG4WctFio4rO%2BZE4M44Yma84%2BxZllUxNSnJjcJ%2BeNKfBFgvImpzVPd4pEqPrqT%2FeOV%2F7D0tpFhGKg%2BH%2Fj6rupsxpt3QE9JsU4B1kKuegCzISYefX5Cwyd%2Fdcse7qaSIq3pdgSNlbhueloZ2IEk5aRKDK4wuMXqvQY6pgHAp%2Bei213g1k2J4Xf%2FkvDAW4Y8sdkXUoytlqPKDdbo0pQBMNhj37Mr57k8cCs7SCJWAGe%2FqRt0nu75uIMBIMuiwUFzTZ%2BiBUkjX9zlZ6EqmAZsGSI5Ibd8ieis9tyaAbFL8UFZJZg8GUtH6BawX%2Fvv2b6AloC8MukhNAxOI1zqLBzhqKMUW5BXk7V5aWqHcWGJEEZtGjmkE9vjYjZ8RFm%2FJc05v7MQ&X-Amz-Signature=996bde76272bda342575983937c5288534040709d7476c21bc613bc1af7bd7fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUUVD4W%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr1z7bg1bFAvrb%2Fu%2BZgE5my%2FE7rzt76glCm%2BAXmEBymAiB3xYZGMkQK1sySUtlnGXBQjxh3ttetTidKTt9jOStONSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMir%2FmvMLDuyZPzOtmKtwDRCg6gqrG474P7oDeBFXVR2g0bPrfjIhQ6UkKsWoXnC979xYnREC1fxhvLr1k9n%2BKOi%2Bw7vLoYFF38N6wxSNvvFeFw0M9Vna6YCV9amzdXYH0bpKmpY%2B74j4sIiDlgsJSnQmb0c1wuf82fCdzNsSDNj4EfUbRnP%2Bj7jdajhAn7FU%2BJcHY%2Bfb256KAcOQgOvgDroE%2FtHSv4LKTIyGaFKlowPtBXZDtslL2OaPy6w8HuE1wwh0AkhOFVooFRcWWEcu%2FSDMlyzibAQzks4ZD5h0Le3D8Ks2v5zzaEjUMkeIXY3R%2BAtps08BxgIViEwqLVtUm3SorW%2FtCFTNj7bugIa1QFzFzw1kDqexEEh%2BDo3%2FZq6Uve7TZ7tQbA%2BVM%2F2HgL1V8yxlvTnlxUJSsYpe7YxdLQQOMKMrILn3%2FO0nXVe%2BR9brMKwy7NdTZHpK%2BQZFgTUbrJ4%2FJkWP5QO3B%2FxV46FZX6WEO9uUjkKBtSlOG4WctFio4rO%2BZE4M44Yma84%2BxZllUxNSnJjcJ%2BeNKfBFgvImpzVPd4pEqPrqT%2FeOV%2F7D0tpFhGKg%2BH%2Fj6rupsxpt3QE9JsU4B1kKuegCzISYefX5Cwyd%2Fdcse7qaSIq3pdgSNlbhueloZ2IEk5aRKDK4wuMXqvQY6pgHAp%2Bei213g1k2J4Xf%2FkvDAW4Y8sdkXUoytlqPKDdbo0pQBMNhj37Mr57k8cCs7SCJWAGe%2FqRt0nu75uIMBIMuiwUFzTZ%2BiBUkjX9zlZ6EqmAZsGSI5Ibd8ieis9tyaAbFL8UFZJZg8GUtH6BawX%2Fvv2b6AloC8MukhNAxOI1zqLBzhqKMUW5BXk7V5aWqHcWGJEEZtGjmkE9vjYjZ8RFm%2FJc05v7MQ&X-Amz-Signature=64b78dace19172f98f146a7c3ee3dc7009db9f7473687fc32aa59e84eedadc73&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUUVD4W%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr1z7bg1bFAvrb%2Fu%2BZgE5my%2FE7rzt76glCm%2BAXmEBymAiB3xYZGMkQK1sySUtlnGXBQjxh3ttetTidKTt9jOStONSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMir%2FmvMLDuyZPzOtmKtwDRCg6gqrG474P7oDeBFXVR2g0bPrfjIhQ6UkKsWoXnC979xYnREC1fxhvLr1k9n%2BKOi%2Bw7vLoYFF38N6wxSNvvFeFw0M9Vna6YCV9amzdXYH0bpKmpY%2B74j4sIiDlgsJSnQmb0c1wuf82fCdzNsSDNj4EfUbRnP%2Bj7jdajhAn7FU%2BJcHY%2Bfb256KAcOQgOvgDroE%2FtHSv4LKTIyGaFKlowPtBXZDtslL2OaPy6w8HuE1wwh0AkhOFVooFRcWWEcu%2FSDMlyzibAQzks4ZD5h0Le3D8Ks2v5zzaEjUMkeIXY3R%2BAtps08BxgIViEwqLVtUm3SorW%2FtCFTNj7bugIa1QFzFzw1kDqexEEh%2BDo3%2FZq6Uve7TZ7tQbA%2BVM%2F2HgL1V8yxlvTnlxUJSsYpe7YxdLQQOMKMrILn3%2FO0nXVe%2BR9brMKwy7NdTZHpK%2BQZFgTUbrJ4%2FJkWP5QO3B%2FxV46FZX6WEO9uUjkKBtSlOG4WctFio4rO%2BZE4M44Yma84%2BxZllUxNSnJjcJ%2BeNKfBFgvImpzVPd4pEqPrqT%2FeOV%2F7D0tpFhGKg%2BH%2Fj6rupsxpt3QE9JsU4B1kKuegCzISYefX5Cwyd%2Fdcse7qaSIq3pdgSNlbhueloZ2IEk5aRKDK4wuMXqvQY6pgHAp%2Bei213g1k2J4Xf%2FkvDAW4Y8sdkXUoytlqPKDdbo0pQBMNhj37Mr57k8cCs7SCJWAGe%2FqRt0nu75uIMBIMuiwUFzTZ%2BiBUkjX9zlZ6EqmAZsGSI5Ibd8ieis9tyaAbFL8UFZJZg8GUtH6BawX%2Fvv2b6AloC8MukhNAxOI1zqLBzhqKMUW5BXk7V5aWqHcWGJEEZtGjmkE9vjYjZ8RFm%2FJc05v7MQ&X-Amz-Signature=8d0477123279fd758c9785672c9835a1fab1a10ff9ea27872c0e86842e4c1cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUUVD4W%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr1z7bg1bFAvrb%2Fu%2BZgE5my%2FE7rzt76glCm%2BAXmEBymAiB3xYZGMkQK1sySUtlnGXBQjxh3ttetTidKTt9jOStONSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMir%2FmvMLDuyZPzOtmKtwDRCg6gqrG474P7oDeBFXVR2g0bPrfjIhQ6UkKsWoXnC979xYnREC1fxhvLr1k9n%2BKOi%2Bw7vLoYFF38N6wxSNvvFeFw0M9Vna6YCV9amzdXYH0bpKmpY%2B74j4sIiDlgsJSnQmb0c1wuf82fCdzNsSDNj4EfUbRnP%2Bj7jdajhAn7FU%2BJcHY%2Bfb256KAcOQgOvgDroE%2FtHSv4LKTIyGaFKlowPtBXZDtslL2OaPy6w8HuE1wwh0AkhOFVooFRcWWEcu%2FSDMlyzibAQzks4ZD5h0Le3D8Ks2v5zzaEjUMkeIXY3R%2BAtps08BxgIViEwqLVtUm3SorW%2FtCFTNj7bugIa1QFzFzw1kDqexEEh%2BDo3%2FZq6Uve7TZ7tQbA%2BVM%2F2HgL1V8yxlvTnlxUJSsYpe7YxdLQQOMKMrILn3%2FO0nXVe%2BR9brMKwy7NdTZHpK%2BQZFgTUbrJ4%2FJkWP5QO3B%2FxV46FZX6WEO9uUjkKBtSlOG4WctFio4rO%2BZE4M44Yma84%2BxZllUxNSnJjcJ%2BeNKfBFgvImpzVPd4pEqPrqT%2FeOV%2F7D0tpFhGKg%2BH%2Fj6rupsxpt3QE9JsU4B1kKuegCzISYefX5Cwyd%2Fdcse7qaSIq3pdgSNlbhueloZ2IEk5aRKDK4wuMXqvQY6pgHAp%2Bei213g1k2J4Xf%2FkvDAW4Y8sdkXUoytlqPKDdbo0pQBMNhj37Mr57k8cCs7SCJWAGe%2FqRt0nu75uIMBIMuiwUFzTZ%2BiBUkjX9zlZ6EqmAZsGSI5Ibd8ieis9tyaAbFL8UFZJZg8GUtH6BawX%2Fvv2b6AloC8MukhNAxOI1zqLBzhqKMUW5BXk7V5aWqHcWGJEEZtGjmkE9vjYjZ8RFm%2FJc05v7MQ&X-Amz-Signature=8090c8edf8783342eb18db1e227f8e111c49c6e753e79610861c2c2ef3a24a50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUUVD4W%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr1z7bg1bFAvrb%2Fu%2BZgE5my%2FE7rzt76glCm%2BAXmEBymAiB3xYZGMkQK1sySUtlnGXBQjxh3ttetTidKTt9jOStONSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMir%2FmvMLDuyZPzOtmKtwDRCg6gqrG474P7oDeBFXVR2g0bPrfjIhQ6UkKsWoXnC979xYnREC1fxhvLr1k9n%2BKOi%2Bw7vLoYFF38N6wxSNvvFeFw0M9Vna6YCV9amzdXYH0bpKmpY%2B74j4sIiDlgsJSnQmb0c1wuf82fCdzNsSDNj4EfUbRnP%2Bj7jdajhAn7FU%2BJcHY%2Bfb256KAcOQgOvgDroE%2FtHSv4LKTIyGaFKlowPtBXZDtslL2OaPy6w8HuE1wwh0AkhOFVooFRcWWEcu%2FSDMlyzibAQzks4ZD5h0Le3D8Ks2v5zzaEjUMkeIXY3R%2BAtps08BxgIViEwqLVtUm3SorW%2FtCFTNj7bugIa1QFzFzw1kDqexEEh%2BDo3%2FZq6Uve7TZ7tQbA%2BVM%2F2HgL1V8yxlvTnlxUJSsYpe7YxdLQQOMKMrILn3%2FO0nXVe%2BR9brMKwy7NdTZHpK%2BQZFgTUbrJ4%2FJkWP5QO3B%2FxV46FZX6WEO9uUjkKBtSlOG4WctFio4rO%2BZE4M44Yma84%2BxZllUxNSnJjcJ%2BeNKfBFgvImpzVPd4pEqPrqT%2FeOV%2F7D0tpFhGKg%2BH%2Fj6rupsxpt3QE9JsU4B1kKuegCzISYefX5Cwyd%2Fdcse7qaSIq3pdgSNlbhueloZ2IEk5aRKDK4wuMXqvQY6pgHAp%2Bei213g1k2J4Xf%2FkvDAW4Y8sdkXUoytlqPKDdbo0pQBMNhj37Mr57k8cCs7SCJWAGe%2FqRt0nu75uIMBIMuiwUFzTZ%2BiBUkjX9zlZ6EqmAZsGSI5Ibd8ieis9tyaAbFL8UFZJZg8GUtH6BawX%2Fvv2b6AloC8MukhNAxOI1zqLBzhqKMUW5BXk7V5aWqHcWGJEEZtGjmkE9vjYjZ8RFm%2FJc05v7MQ&X-Amz-Signature=2fb58aaf8b679edac00d364290ecac536d180242065d59adc999733a65fa388d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUUVD4W%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr1z7bg1bFAvrb%2Fu%2BZgE5my%2FE7rzt76glCm%2BAXmEBymAiB3xYZGMkQK1sySUtlnGXBQjxh3ttetTidKTt9jOStONSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMir%2FmvMLDuyZPzOtmKtwDRCg6gqrG474P7oDeBFXVR2g0bPrfjIhQ6UkKsWoXnC979xYnREC1fxhvLr1k9n%2BKOi%2Bw7vLoYFF38N6wxSNvvFeFw0M9Vna6YCV9amzdXYH0bpKmpY%2B74j4sIiDlgsJSnQmb0c1wuf82fCdzNsSDNj4EfUbRnP%2Bj7jdajhAn7FU%2BJcHY%2Bfb256KAcOQgOvgDroE%2FtHSv4LKTIyGaFKlowPtBXZDtslL2OaPy6w8HuE1wwh0AkhOFVooFRcWWEcu%2FSDMlyzibAQzks4ZD5h0Le3D8Ks2v5zzaEjUMkeIXY3R%2BAtps08BxgIViEwqLVtUm3SorW%2FtCFTNj7bugIa1QFzFzw1kDqexEEh%2BDo3%2FZq6Uve7TZ7tQbA%2BVM%2F2HgL1V8yxlvTnlxUJSsYpe7YxdLQQOMKMrILn3%2FO0nXVe%2BR9brMKwy7NdTZHpK%2BQZFgTUbrJ4%2FJkWP5QO3B%2FxV46FZX6WEO9uUjkKBtSlOG4WctFio4rO%2BZE4M44Yma84%2BxZllUxNSnJjcJ%2BeNKfBFgvImpzVPd4pEqPrqT%2FeOV%2F7D0tpFhGKg%2BH%2Fj6rupsxpt3QE9JsU4B1kKuegCzISYefX5Cwyd%2Fdcse7qaSIq3pdgSNlbhueloZ2IEk5aRKDK4wuMXqvQY6pgHAp%2Bei213g1k2J4Xf%2FkvDAW4Y8sdkXUoytlqPKDdbo0pQBMNhj37Mr57k8cCs7SCJWAGe%2FqRt0nu75uIMBIMuiwUFzTZ%2BiBUkjX9zlZ6EqmAZsGSI5Ibd8ieis9tyaAbFL8UFZJZg8GUtH6BawX%2Fvv2b6AloC8MukhNAxOI1zqLBzhqKMUW5BXk7V5aWqHcWGJEEZtGjmkE9vjYjZ8RFm%2FJc05v7MQ&X-Amz-Signature=1c65fdc41db9ed9c892d137d2292a4bc0496b58d8fe9859e404a605a497fda88&X-Amz-SignedHeaders=host&x-id=GetObject)
