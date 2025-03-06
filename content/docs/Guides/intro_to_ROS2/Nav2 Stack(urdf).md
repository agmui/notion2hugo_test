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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CAHOTU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID78HFYgHTbERoB4WrHBeVzUaeuDMM23uFjnYUGUWi9NAiEA2hW64UvnnwnGWdDJzzmYe7s%2BAS3J929LhwmHSzltmScq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMa5WBY9nmb5Vct1cyrcAw020wSHymz%2Bqou1QcaywOMb5PuuO9D6r9tHEaTj5Nb7QjKTU%2BbjMmJiQUaf3ZpVvUL3Edwz5dQQTf4fyC%2FSwjg%2FQqeL8OW0KlJoUtov%2BvwrXpYoxJlvMmSfXPEEaIr7WQhU8R%2B9MbCQ3ncz10Ok1htoj7ltDjaKCq5UrDJJ0VFr%2BPX39cnfwKqH0C3JBxf0X0CD1DzqLgNNcL%2B9thUClIq6WLEc4e5pTAu8137uYqX3%2FiEQmwG7TRXr4iLeTJBtAHI%2BhBecogW3w8ycMPubcqT0sVbhIzf1VhvYe1hajh0ZPMLXVTgXx7zfzcpVDV8Jen1uodNiXLQkKd9srrzUoLeq2EkMAk3C8YzY%2FbXUk70CIOhis6d%2BjX0n3%2BLOaf%2Bng%2Fdwo6v5QJyBrBkS6ZbDbkso1zjlyXKeTDqRyB1nmbS5HVde0w1uqgGvrFuUHThHjEj8nXciBQZQLoe7ICq8ZWngxQONiO1IwojHjye0VPb4F1c%2Bnai4SB3AiosoQwrNSNrAlnoOhpqe9NAJC04jl6a1yq49fTdAMM27U9%2BXxqxxzEZihtOYeCaAd%2FDqLRw32e4JND5gdqhAzzg8WHBJO7eSKjJv9yVjYFdBh1FVGw5WVzxaVZxhwzGpbE50ML3Op74GOqUBBrM6WLtE2faZEhIUThSgtFsb0VOsbRcMyUpVTTKX15nYoaRjskK%2Fhm5tjFiqAd1eiWI%2Bz3O3d9WIHybo8%2BhQXH1xDok8UEtNXXfjKC7Oi67c230GTD0gfWUmOtbNYjMDKGNbb6xE69RhpULK8zrBIAmH%2FYrIyYCP0f1v6i8Y5j%2FM6ZMJZwkwNt8QlJJQ86SUzTUqrFmxq%2BApmVMPca%2BOnQpyk5uG&X-Amz-Signature=d2cdd2d501ae1fc92d9b1663da92def08c67d1013b4b753751f1447ab90f3b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CAHOTU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID78HFYgHTbERoB4WrHBeVzUaeuDMM23uFjnYUGUWi9NAiEA2hW64UvnnwnGWdDJzzmYe7s%2BAS3J929LhwmHSzltmScq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMa5WBY9nmb5Vct1cyrcAw020wSHymz%2Bqou1QcaywOMb5PuuO9D6r9tHEaTj5Nb7QjKTU%2BbjMmJiQUaf3ZpVvUL3Edwz5dQQTf4fyC%2FSwjg%2FQqeL8OW0KlJoUtov%2BvwrXpYoxJlvMmSfXPEEaIr7WQhU8R%2B9MbCQ3ncz10Ok1htoj7ltDjaKCq5UrDJJ0VFr%2BPX39cnfwKqH0C3JBxf0X0CD1DzqLgNNcL%2B9thUClIq6WLEc4e5pTAu8137uYqX3%2FiEQmwG7TRXr4iLeTJBtAHI%2BhBecogW3w8ycMPubcqT0sVbhIzf1VhvYe1hajh0ZPMLXVTgXx7zfzcpVDV8Jen1uodNiXLQkKd9srrzUoLeq2EkMAk3C8YzY%2FbXUk70CIOhis6d%2BjX0n3%2BLOaf%2Bng%2Fdwo6v5QJyBrBkS6ZbDbkso1zjlyXKeTDqRyB1nmbS5HVde0w1uqgGvrFuUHThHjEj8nXciBQZQLoe7ICq8ZWngxQONiO1IwojHjye0VPb4F1c%2Bnai4SB3AiosoQwrNSNrAlnoOhpqe9NAJC04jl6a1yq49fTdAMM27U9%2BXxqxxzEZihtOYeCaAd%2FDqLRw32e4JND5gdqhAzzg8WHBJO7eSKjJv9yVjYFdBh1FVGw5WVzxaVZxhwzGpbE50ML3Op74GOqUBBrM6WLtE2faZEhIUThSgtFsb0VOsbRcMyUpVTTKX15nYoaRjskK%2Fhm5tjFiqAd1eiWI%2Bz3O3d9WIHybo8%2BhQXH1xDok8UEtNXXfjKC7Oi67c230GTD0gfWUmOtbNYjMDKGNbb6xE69RhpULK8zrBIAmH%2FYrIyYCP0f1v6i8Y5j%2FM6ZMJZwkwNt8QlJJQ86SUzTUqrFmxq%2BApmVMPca%2BOnQpyk5uG&X-Amz-Signature=ad4326ca6eeb0d9814832685a432dc2ec89d623ac2ea55ddbf481ae5c4bec237&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CAHOTU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID78HFYgHTbERoB4WrHBeVzUaeuDMM23uFjnYUGUWi9NAiEA2hW64UvnnwnGWdDJzzmYe7s%2BAS3J929LhwmHSzltmScq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMa5WBY9nmb5Vct1cyrcAw020wSHymz%2Bqou1QcaywOMb5PuuO9D6r9tHEaTj5Nb7QjKTU%2BbjMmJiQUaf3ZpVvUL3Edwz5dQQTf4fyC%2FSwjg%2FQqeL8OW0KlJoUtov%2BvwrXpYoxJlvMmSfXPEEaIr7WQhU8R%2B9MbCQ3ncz10Ok1htoj7ltDjaKCq5UrDJJ0VFr%2BPX39cnfwKqH0C3JBxf0X0CD1DzqLgNNcL%2B9thUClIq6WLEc4e5pTAu8137uYqX3%2FiEQmwG7TRXr4iLeTJBtAHI%2BhBecogW3w8ycMPubcqT0sVbhIzf1VhvYe1hajh0ZPMLXVTgXx7zfzcpVDV8Jen1uodNiXLQkKd9srrzUoLeq2EkMAk3C8YzY%2FbXUk70CIOhis6d%2BjX0n3%2BLOaf%2Bng%2Fdwo6v5QJyBrBkS6ZbDbkso1zjlyXKeTDqRyB1nmbS5HVde0w1uqgGvrFuUHThHjEj8nXciBQZQLoe7ICq8ZWngxQONiO1IwojHjye0VPb4F1c%2Bnai4SB3AiosoQwrNSNrAlnoOhpqe9NAJC04jl6a1yq49fTdAMM27U9%2BXxqxxzEZihtOYeCaAd%2FDqLRw32e4JND5gdqhAzzg8WHBJO7eSKjJv9yVjYFdBh1FVGw5WVzxaVZxhwzGpbE50ML3Op74GOqUBBrM6WLtE2faZEhIUThSgtFsb0VOsbRcMyUpVTTKX15nYoaRjskK%2Fhm5tjFiqAd1eiWI%2Bz3O3d9WIHybo8%2BhQXH1xDok8UEtNXXfjKC7Oi67c230GTD0gfWUmOtbNYjMDKGNbb6xE69RhpULK8zrBIAmH%2FYrIyYCP0f1v6i8Y5j%2FM6ZMJZwkwNt8QlJJQ86SUzTUqrFmxq%2BApmVMPca%2BOnQpyk5uG&X-Amz-Signature=6c8ae67316dd0b045ae7a28a8dcacdc344a7d7ca4ab84bd895a685924666ded4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CAHOTU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID78HFYgHTbERoB4WrHBeVzUaeuDMM23uFjnYUGUWi9NAiEA2hW64UvnnwnGWdDJzzmYe7s%2BAS3J929LhwmHSzltmScq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMa5WBY9nmb5Vct1cyrcAw020wSHymz%2Bqou1QcaywOMb5PuuO9D6r9tHEaTj5Nb7QjKTU%2BbjMmJiQUaf3ZpVvUL3Edwz5dQQTf4fyC%2FSwjg%2FQqeL8OW0KlJoUtov%2BvwrXpYoxJlvMmSfXPEEaIr7WQhU8R%2B9MbCQ3ncz10Ok1htoj7ltDjaKCq5UrDJJ0VFr%2BPX39cnfwKqH0C3JBxf0X0CD1DzqLgNNcL%2B9thUClIq6WLEc4e5pTAu8137uYqX3%2FiEQmwG7TRXr4iLeTJBtAHI%2BhBecogW3w8ycMPubcqT0sVbhIzf1VhvYe1hajh0ZPMLXVTgXx7zfzcpVDV8Jen1uodNiXLQkKd9srrzUoLeq2EkMAk3C8YzY%2FbXUk70CIOhis6d%2BjX0n3%2BLOaf%2Bng%2Fdwo6v5QJyBrBkS6ZbDbkso1zjlyXKeTDqRyB1nmbS5HVde0w1uqgGvrFuUHThHjEj8nXciBQZQLoe7ICq8ZWngxQONiO1IwojHjye0VPb4F1c%2Bnai4SB3AiosoQwrNSNrAlnoOhpqe9NAJC04jl6a1yq49fTdAMM27U9%2BXxqxxzEZihtOYeCaAd%2FDqLRw32e4JND5gdqhAzzg8WHBJO7eSKjJv9yVjYFdBh1FVGw5WVzxaVZxhwzGpbE50ML3Op74GOqUBBrM6WLtE2faZEhIUThSgtFsb0VOsbRcMyUpVTTKX15nYoaRjskK%2Fhm5tjFiqAd1eiWI%2Bz3O3d9WIHybo8%2BhQXH1xDok8UEtNXXfjKC7Oi67c230GTD0gfWUmOtbNYjMDKGNbb6xE69RhpULK8zrBIAmH%2FYrIyYCP0f1v6i8Y5j%2FM6ZMJZwkwNt8QlJJQ86SUzTUqrFmxq%2BApmVMPca%2BOnQpyk5uG&X-Amz-Signature=518ca1e813b28566b36be5bc2f4313c3bc4f013e869023566bf36eae3440f599&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CAHOTU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID78HFYgHTbERoB4WrHBeVzUaeuDMM23uFjnYUGUWi9NAiEA2hW64UvnnwnGWdDJzzmYe7s%2BAS3J929LhwmHSzltmScq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMa5WBY9nmb5Vct1cyrcAw020wSHymz%2Bqou1QcaywOMb5PuuO9D6r9tHEaTj5Nb7QjKTU%2BbjMmJiQUaf3ZpVvUL3Edwz5dQQTf4fyC%2FSwjg%2FQqeL8OW0KlJoUtov%2BvwrXpYoxJlvMmSfXPEEaIr7WQhU8R%2B9MbCQ3ncz10Ok1htoj7ltDjaKCq5UrDJJ0VFr%2BPX39cnfwKqH0C3JBxf0X0CD1DzqLgNNcL%2B9thUClIq6WLEc4e5pTAu8137uYqX3%2FiEQmwG7TRXr4iLeTJBtAHI%2BhBecogW3w8ycMPubcqT0sVbhIzf1VhvYe1hajh0ZPMLXVTgXx7zfzcpVDV8Jen1uodNiXLQkKd9srrzUoLeq2EkMAk3C8YzY%2FbXUk70CIOhis6d%2BjX0n3%2BLOaf%2Bng%2Fdwo6v5QJyBrBkS6ZbDbkso1zjlyXKeTDqRyB1nmbS5HVde0w1uqgGvrFuUHThHjEj8nXciBQZQLoe7ICq8ZWngxQONiO1IwojHjye0VPb4F1c%2Bnai4SB3AiosoQwrNSNrAlnoOhpqe9NAJC04jl6a1yq49fTdAMM27U9%2BXxqxxzEZihtOYeCaAd%2FDqLRw32e4JND5gdqhAzzg8WHBJO7eSKjJv9yVjYFdBh1FVGw5WVzxaVZxhwzGpbE50ML3Op74GOqUBBrM6WLtE2faZEhIUThSgtFsb0VOsbRcMyUpVTTKX15nYoaRjskK%2Fhm5tjFiqAd1eiWI%2Bz3O3d9WIHybo8%2BhQXH1xDok8UEtNXXfjKC7Oi67c230GTD0gfWUmOtbNYjMDKGNbb6xE69RhpULK8zrBIAmH%2FYrIyYCP0f1v6i8Y5j%2FM6ZMJZwkwNt8QlJJQ86SUzTUqrFmxq%2BApmVMPca%2BOnQpyk5uG&X-Amz-Signature=846efe6ab88ea386b91b85635c826620333f84d577ec62cfcd22614fb90960bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CAHOTU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID78HFYgHTbERoB4WrHBeVzUaeuDMM23uFjnYUGUWi9NAiEA2hW64UvnnwnGWdDJzzmYe7s%2BAS3J929LhwmHSzltmScq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMa5WBY9nmb5Vct1cyrcAw020wSHymz%2Bqou1QcaywOMb5PuuO9D6r9tHEaTj5Nb7QjKTU%2BbjMmJiQUaf3ZpVvUL3Edwz5dQQTf4fyC%2FSwjg%2FQqeL8OW0KlJoUtov%2BvwrXpYoxJlvMmSfXPEEaIr7WQhU8R%2B9MbCQ3ncz10Ok1htoj7ltDjaKCq5UrDJJ0VFr%2BPX39cnfwKqH0C3JBxf0X0CD1DzqLgNNcL%2B9thUClIq6WLEc4e5pTAu8137uYqX3%2FiEQmwG7TRXr4iLeTJBtAHI%2BhBecogW3w8ycMPubcqT0sVbhIzf1VhvYe1hajh0ZPMLXVTgXx7zfzcpVDV8Jen1uodNiXLQkKd9srrzUoLeq2EkMAk3C8YzY%2FbXUk70CIOhis6d%2BjX0n3%2BLOaf%2Bng%2Fdwo6v5QJyBrBkS6ZbDbkso1zjlyXKeTDqRyB1nmbS5HVde0w1uqgGvrFuUHThHjEj8nXciBQZQLoe7ICq8ZWngxQONiO1IwojHjye0VPb4F1c%2Bnai4SB3AiosoQwrNSNrAlnoOhpqe9NAJC04jl6a1yq49fTdAMM27U9%2BXxqxxzEZihtOYeCaAd%2FDqLRw32e4JND5gdqhAzzg8WHBJO7eSKjJv9yVjYFdBh1FVGw5WVzxaVZxhwzGpbE50ML3Op74GOqUBBrM6WLtE2faZEhIUThSgtFsb0VOsbRcMyUpVTTKX15nYoaRjskK%2Fhm5tjFiqAd1eiWI%2Bz3O3d9WIHybo8%2BhQXH1xDok8UEtNXXfjKC7Oi67c230GTD0gfWUmOtbNYjMDKGNbb6xE69RhpULK8zrBIAmH%2FYrIyYCP0f1v6i8Y5j%2FM6ZMJZwkwNt8QlJJQ86SUzTUqrFmxq%2BApmVMPca%2BOnQpyk5uG&X-Amz-Signature=d32ecfd9db68ed35c7068de99dcd8942da326681bdcb3fe0f31536c10f95f7fb&X-Amz-SignedHeaders=host&x-id=GetObject)
