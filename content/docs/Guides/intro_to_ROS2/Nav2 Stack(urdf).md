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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTNPHEW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGe59eLGhkKyb4Ek0oKeIiV9uiNYmHY1QxnmZcD%2BYQvlAiB22Cw2r3u9CejcKjQK22CD7QCqwrOVW1CyAh%2FqKEVX1CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMysbpVUHgn0t5UuyyKtwDS%2FBs2g4Y248EE%2FgVD8MOddYhnKut%2FoIOOPmHgxYBsd7LvAN9zDZpoWF1jzV6augbiq3i64RzFLlfNO2Y%2Bttr6mADYChv7TJ0DnmkbDae2U%2Bcrdx5pKHPTiiLSWM%2Bhyd2wFxMo7r%2B3IZ2vRnHhmbapfBrWCk1UnL78tQMVyhhA0Cv0EDInV96R3e3HuPDLsV1ofAa4KCQBmIduKnPpPhJMmC%2FIPFZmRii%2B%2FARnguAe8OpsFF8Tdsvxggwn5TCgBjHwIHTOaa1E56F1Le0X6A7wCAQLMAa2e%2BbfL6GPJAmQayoy1ALbN%2B%2BGtzHTK%2BJWqXDcUK%2BRXKehBJy76mIdjawV464KMGC%2FaFicyk%2BYbqwL1UiEA4x9kaBcH%2BOZhtsFYINiPt7AIUn8lKNe1BzBwtovljlKYVxlWd2poOpO4L6RSkbCfvh0FsDZEPsXzGm%2ByFHNV%2B8YN%2F6n9Ny3jRmUeXkinjbTbZlsFCFgMrLJc7io6EhxI0n39SSR8e%2FLme2DeaZU0h5ANPdqILWFLeLi%2BYdJhdobGKu2krFEYjGzvKkWnQtRrhSPCC0TdOZwEnsplD%2Frk%2Fd69sDbVEaoS%2F6yzhqaS%2BY0p%2FLtdhzIs2iJ8FuolGp0QTg2JuuLKKnoeQw%2FL%2FXvwY6pgEraEB4uUUQZ4zWIIcs9ZOiWne3A8K6IyE10TJWXws5FR%2B8nxqw2VSGcmg%2B7FeKMiI4EfJxNcDghmQqNSYPa8RbdQ0%2BU6q4Vfaqw%2BmVmeYD78QEY%2BZjLHBMU%2FZVGKvuCabaI9iO3mEyhO3ARqFcTRdYSBr%2BNJy%2Bjy81nauTbeyseNnuF3k859gFGri4aOD8elwJbS68uBAHim%2FHZLaZqTJ5lSNql0li&X-Amz-Signature=6ec80c390a8dcf03b26928097311fa728cc8ff5deab1b6d93b24e2bc0f1eafd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTNPHEW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGe59eLGhkKyb4Ek0oKeIiV9uiNYmHY1QxnmZcD%2BYQvlAiB22Cw2r3u9CejcKjQK22CD7QCqwrOVW1CyAh%2FqKEVX1CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMysbpVUHgn0t5UuyyKtwDS%2FBs2g4Y248EE%2FgVD8MOddYhnKut%2FoIOOPmHgxYBsd7LvAN9zDZpoWF1jzV6augbiq3i64RzFLlfNO2Y%2Bttr6mADYChv7TJ0DnmkbDae2U%2Bcrdx5pKHPTiiLSWM%2Bhyd2wFxMo7r%2B3IZ2vRnHhmbapfBrWCk1UnL78tQMVyhhA0Cv0EDInV96R3e3HuPDLsV1ofAa4KCQBmIduKnPpPhJMmC%2FIPFZmRii%2B%2FARnguAe8OpsFF8Tdsvxggwn5TCgBjHwIHTOaa1E56F1Le0X6A7wCAQLMAa2e%2BbfL6GPJAmQayoy1ALbN%2B%2BGtzHTK%2BJWqXDcUK%2BRXKehBJy76mIdjawV464KMGC%2FaFicyk%2BYbqwL1UiEA4x9kaBcH%2BOZhtsFYINiPt7AIUn8lKNe1BzBwtovljlKYVxlWd2poOpO4L6RSkbCfvh0FsDZEPsXzGm%2ByFHNV%2B8YN%2F6n9Ny3jRmUeXkinjbTbZlsFCFgMrLJc7io6EhxI0n39SSR8e%2FLme2DeaZU0h5ANPdqILWFLeLi%2BYdJhdobGKu2krFEYjGzvKkWnQtRrhSPCC0TdOZwEnsplD%2Frk%2Fd69sDbVEaoS%2F6yzhqaS%2BY0p%2FLtdhzIs2iJ8FuolGp0QTg2JuuLKKnoeQw%2FL%2FXvwY6pgEraEB4uUUQZ4zWIIcs9ZOiWne3A8K6IyE10TJWXws5FR%2B8nxqw2VSGcmg%2B7FeKMiI4EfJxNcDghmQqNSYPa8RbdQ0%2BU6q4Vfaqw%2BmVmeYD78QEY%2BZjLHBMU%2FZVGKvuCabaI9iO3mEyhO3ARqFcTRdYSBr%2BNJy%2Bjy81nauTbeyseNnuF3k859gFGri4aOD8elwJbS68uBAHim%2FHZLaZqTJ5lSNql0li&X-Amz-Signature=4b064e63f6f74be69248eaf31ce4c758456e17e548e707389d121179e14acf6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTNPHEW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGe59eLGhkKyb4Ek0oKeIiV9uiNYmHY1QxnmZcD%2BYQvlAiB22Cw2r3u9CejcKjQK22CD7QCqwrOVW1CyAh%2FqKEVX1CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMysbpVUHgn0t5UuyyKtwDS%2FBs2g4Y248EE%2FgVD8MOddYhnKut%2FoIOOPmHgxYBsd7LvAN9zDZpoWF1jzV6augbiq3i64RzFLlfNO2Y%2Bttr6mADYChv7TJ0DnmkbDae2U%2Bcrdx5pKHPTiiLSWM%2Bhyd2wFxMo7r%2B3IZ2vRnHhmbapfBrWCk1UnL78tQMVyhhA0Cv0EDInV96R3e3HuPDLsV1ofAa4KCQBmIduKnPpPhJMmC%2FIPFZmRii%2B%2FARnguAe8OpsFF8Tdsvxggwn5TCgBjHwIHTOaa1E56F1Le0X6A7wCAQLMAa2e%2BbfL6GPJAmQayoy1ALbN%2B%2BGtzHTK%2BJWqXDcUK%2BRXKehBJy76mIdjawV464KMGC%2FaFicyk%2BYbqwL1UiEA4x9kaBcH%2BOZhtsFYINiPt7AIUn8lKNe1BzBwtovljlKYVxlWd2poOpO4L6RSkbCfvh0FsDZEPsXzGm%2ByFHNV%2B8YN%2F6n9Ny3jRmUeXkinjbTbZlsFCFgMrLJc7io6EhxI0n39SSR8e%2FLme2DeaZU0h5ANPdqILWFLeLi%2BYdJhdobGKu2krFEYjGzvKkWnQtRrhSPCC0TdOZwEnsplD%2Frk%2Fd69sDbVEaoS%2F6yzhqaS%2BY0p%2FLtdhzIs2iJ8FuolGp0QTg2JuuLKKnoeQw%2FL%2FXvwY6pgEraEB4uUUQZ4zWIIcs9ZOiWne3A8K6IyE10TJWXws5FR%2B8nxqw2VSGcmg%2B7FeKMiI4EfJxNcDghmQqNSYPa8RbdQ0%2BU6q4Vfaqw%2BmVmeYD78QEY%2BZjLHBMU%2FZVGKvuCabaI9iO3mEyhO3ARqFcTRdYSBr%2BNJy%2Bjy81nauTbeyseNnuF3k859gFGri4aOD8elwJbS68uBAHim%2FHZLaZqTJ5lSNql0li&X-Amz-Signature=38f6b657794a335cbaa32209cbbe33766fe16a07fd95e19dd8bd5e9ec9ba1f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTNPHEW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGe59eLGhkKyb4Ek0oKeIiV9uiNYmHY1QxnmZcD%2BYQvlAiB22Cw2r3u9CejcKjQK22CD7QCqwrOVW1CyAh%2FqKEVX1CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMysbpVUHgn0t5UuyyKtwDS%2FBs2g4Y248EE%2FgVD8MOddYhnKut%2FoIOOPmHgxYBsd7LvAN9zDZpoWF1jzV6augbiq3i64RzFLlfNO2Y%2Bttr6mADYChv7TJ0DnmkbDae2U%2Bcrdx5pKHPTiiLSWM%2Bhyd2wFxMo7r%2B3IZ2vRnHhmbapfBrWCk1UnL78tQMVyhhA0Cv0EDInV96R3e3HuPDLsV1ofAa4KCQBmIduKnPpPhJMmC%2FIPFZmRii%2B%2FARnguAe8OpsFF8Tdsvxggwn5TCgBjHwIHTOaa1E56F1Le0X6A7wCAQLMAa2e%2BbfL6GPJAmQayoy1ALbN%2B%2BGtzHTK%2BJWqXDcUK%2BRXKehBJy76mIdjawV464KMGC%2FaFicyk%2BYbqwL1UiEA4x9kaBcH%2BOZhtsFYINiPt7AIUn8lKNe1BzBwtovljlKYVxlWd2poOpO4L6RSkbCfvh0FsDZEPsXzGm%2ByFHNV%2B8YN%2F6n9Ny3jRmUeXkinjbTbZlsFCFgMrLJc7io6EhxI0n39SSR8e%2FLme2DeaZU0h5ANPdqILWFLeLi%2BYdJhdobGKu2krFEYjGzvKkWnQtRrhSPCC0TdOZwEnsplD%2Frk%2Fd69sDbVEaoS%2F6yzhqaS%2BY0p%2FLtdhzIs2iJ8FuolGp0QTg2JuuLKKnoeQw%2FL%2FXvwY6pgEraEB4uUUQZ4zWIIcs9ZOiWne3A8K6IyE10TJWXws5FR%2B8nxqw2VSGcmg%2B7FeKMiI4EfJxNcDghmQqNSYPa8RbdQ0%2BU6q4Vfaqw%2BmVmeYD78QEY%2BZjLHBMU%2FZVGKvuCabaI9iO3mEyhO3ARqFcTRdYSBr%2BNJy%2Bjy81nauTbeyseNnuF3k859gFGri4aOD8elwJbS68uBAHim%2FHZLaZqTJ5lSNql0li&X-Amz-Signature=7512c39554100c512fb6001f831b57d12d5d4dfc1807462683da831e3a994dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTNPHEW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGe59eLGhkKyb4Ek0oKeIiV9uiNYmHY1QxnmZcD%2BYQvlAiB22Cw2r3u9CejcKjQK22CD7QCqwrOVW1CyAh%2FqKEVX1CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMysbpVUHgn0t5UuyyKtwDS%2FBs2g4Y248EE%2FgVD8MOddYhnKut%2FoIOOPmHgxYBsd7LvAN9zDZpoWF1jzV6augbiq3i64RzFLlfNO2Y%2Bttr6mADYChv7TJ0DnmkbDae2U%2Bcrdx5pKHPTiiLSWM%2Bhyd2wFxMo7r%2B3IZ2vRnHhmbapfBrWCk1UnL78tQMVyhhA0Cv0EDInV96R3e3HuPDLsV1ofAa4KCQBmIduKnPpPhJMmC%2FIPFZmRii%2B%2FARnguAe8OpsFF8Tdsvxggwn5TCgBjHwIHTOaa1E56F1Le0X6A7wCAQLMAa2e%2BbfL6GPJAmQayoy1ALbN%2B%2BGtzHTK%2BJWqXDcUK%2BRXKehBJy76mIdjawV464KMGC%2FaFicyk%2BYbqwL1UiEA4x9kaBcH%2BOZhtsFYINiPt7AIUn8lKNe1BzBwtovljlKYVxlWd2poOpO4L6RSkbCfvh0FsDZEPsXzGm%2ByFHNV%2B8YN%2F6n9Ny3jRmUeXkinjbTbZlsFCFgMrLJc7io6EhxI0n39SSR8e%2FLme2DeaZU0h5ANPdqILWFLeLi%2BYdJhdobGKu2krFEYjGzvKkWnQtRrhSPCC0TdOZwEnsplD%2Frk%2Fd69sDbVEaoS%2F6yzhqaS%2BY0p%2FLtdhzIs2iJ8FuolGp0QTg2JuuLKKnoeQw%2FL%2FXvwY6pgEraEB4uUUQZ4zWIIcs9ZOiWne3A8K6IyE10TJWXws5FR%2B8nxqw2VSGcmg%2B7FeKMiI4EfJxNcDghmQqNSYPa8RbdQ0%2BU6q4Vfaqw%2BmVmeYD78QEY%2BZjLHBMU%2FZVGKvuCabaI9iO3mEyhO3ARqFcTRdYSBr%2BNJy%2Bjy81nauTbeyseNnuF3k859gFGri4aOD8elwJbS68uBAHim%2FHZLaZqTJ5lSNql0li&X-Amz-Signature=1e45b31ab2e690b7a3b7ae0bf933640c74de6128cef9cefdd21b193dac9b67d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTNPHEW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGe59eLGhkKyb4Ek0oKeIiV9uiNYmHY1QxnmZcD%2BYQvlAiB22Cw2r3u9CejcKjQK22CD7QCqwrOVW1CyAh%2FqKEVX1CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMysbpVUHgn0t5UuyyKtwDS%2FBs2g4Y248EE%2FgVD8MOddYhnKut%2FoIOOPmHgxYBsd7LvAN9zDZpoWF1jzV6augbiq3i64RzFLlfNO2Y%2Bttr6mADYChv7TJ0DnmkbDae2U%2Bcrdx5pKHPTiiLSWM%2Bhyd2wFxMo7r%2B3IZ2vRnHhmbapfBrWCk1UnL78tQMVyhhA0Cv0EDInV96R3e3HuPDLsV1ofAa4KCQBmIduKnPpPhJMmC%2FIPFZmRii%2B%2FARnguAe8OpsFF8Tdsvxggwn5TCgBjHwIHTOaa1E56F1Le0X6A7wCAQLMAa2e%2BbfL6GPJAmQayoy1ALbN%2B%2BGtzHTK%2BJWqXDcUK%2BRXKehBJy76mIdjawV464KMGC%2FaFicyk%2BYbqwL1UiEA4x9kaBcH%2BOZhtsFYINiPt7AIUn8lKNe1BzBwtovljlKYVxlWd2poOpO4L6RSkbCfvh0FsDZEPsXzGm%2ByFHNV%2B8YN%2F6n9Ny3jRmUeXkinjbTbZlsFCFgMrLJc7io6EhxI0n39SSR8e%2FLme2DeaZU0h5ANPdqILWFLeLi%2BYdJhdobGKu2krFEYjGzvKkWnQtRrhSPCC0TdOZwEnsplD%2Frk%2Fd69sDbVEaoS%2F6yzhqaS%2BY0p%2FLtdhzIs2iJ8FuolGp0QTg2JuuLKKnoeQw%2FL%2FXvwY6pgEraEB4uUUQZ4zWIIcs9ZOiWne3A8K6IyE10TJWXws5FR%2B8nxqw2VSGcmg%2B7FeKMiI4EfJxNcDghmQqNSYPa8RbdQ0%2BU6q4Vfaqw%2BmVmeYD78QEY%2BZjLHBMU%2FZVGKvuCabaI9iO3mEyhO3ARqFcTRdYSBr%2BNJy%2Bjy81nauTbeyseNnuF3k859gFGri4aOD8elwJbS68uBAHim%2FHZLaZqTJ5lSNql0li&X-Amz-Signature=b473df2bae01ce261d92d4105ab3c80645fee33fde293bf02bf51f0a2c749a54&X-Amz-SignedHeaders=host&x-id=GetObject)
