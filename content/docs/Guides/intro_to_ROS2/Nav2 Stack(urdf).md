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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWANFUZ3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUlbDFd9i0yD7gB09NFqGe9Fd9ujlda4S6XjH3jQPsVwIhAJoWxqPXvIE%2FO9KEakT%2FIwec7CPVxSW%2BAZFbNqlkkRpOKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZd6v%2BAApiDpxTta0q3AO7iRR%2BhPjL0eLOo5JtO3FJxWiwaaNGXq%2BzlYnWCTYG5PgY7DHN1FJtClEiO0srSQ2ST3ZrSJaRBg%2Fcyb8lMEAaWkHrEoYcnBiCf7JbU3%2Bj1I2EeZ%2FkN3ESB63aNUJlKFO3frK1yov7VVyFHmI6yBYoB5xlcT9IZf0g0nbt535%2FqJxnz6%2FMJsC1oTnI9HbvwcmbwzCgKfFAdjSwAY3yjTvGlbpRVLWP1K6A1mtwbOZNpkmLu%2Fxjkg5YWiqVqKKmpJVW6XPnOhR8YYDUqanT9GUSis1zBawWq%2F5zzYGtbaK%2BJGgeo5yJyp5RMSTljkRK6HMAd1re2LJoEyWrFu90bomrUAvMekTBkA9IdOpXY8nfa4%2B6fXSrl22fnTpe%2BsRMxK43e3aZdLQcyDgcSaJ%2BkVjsbkaAFg4FqoMHHjRvaHDA7ARhg0MIT9s%2BZUBvTG2TzGc%2FA0LrHEB73ZaQPPS1ueTLzIa56S8JXKGMAxu8oFvrBbjtVuOeF4K6PY5RmCx%2F7wfy8ErwHQmIj4UZWcASB%2Fy1bcz%2FyfLh7XlneA8%2BA7jxwbby2134%2FwAM4%2FKlAd9y4yiKyWHA0%2FBqfBdexFXwQfXqIm4turYGlQV9UL8Hm4AuvKZB1AM9wr3phik0mjD6%2BY7CBjqkAVk5J%2BjUfc%2FKU4DYpoQL%2F%2FVNHsHMOnSPpOIUDHYAbC7gCueLJjMW3ObYUyhLh27bGCEcVLCb%2Bsaqwa6vwkI9OQ3JeuxZXrhyOztRO1%2Fa16Wgc%2FvEwYegd%2FpUpnn2ybKD79j6D28Pxa6pRq212EMmvyjWZKlLfQ8NX48QlazbWCpdxkCTyQ3tOUJUhUtqiBn4npqDTvqncNT%2F1G3VxSsayk9j9vg2&X-Amz-Signature=f9b10e94c87c03677b2eb6af6c97d7dfdd31ba6ad564ce2cee87656953d17033&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWANFUZ3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUlbDFd9i0yD7gB09NFqGe9Fd9ujlda4S6XjH3jQPsVwIhAJoWxqPXvIE%2FO9KEakT%2FIwec7CPVxSW%2BAZFbNqlkkRpOKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZd6v%2BAApiDpxTta0q3AO7iRR%2BhPjL0eLOo5JtO3FJxWiwaaNGXq%2BzlYnWCTYG5PgY7DHN1FJtClEiO0srSQ2ST3ZrSJaRBg%2Fcyb8lMEAaWkHrEoYcnBiCf7JbU3%2Bj1I2EeZ%2FkN3ESB63aNUJlKFO3frK1yov7VVyFHmI6yBYoB5xlcT9IZf0g0nbt535%2FqJxnz6%2FMJsC1oTnI9HbvwcmbwzCgKfFAdjSwAY3yjTvGlbpRVLWP1K6A1mtwbOZNpkmLu%2Fxjkg5YWiqVqKKmpJVW6XPnOhR8YYDUqanT9GUSis1zBawWq%2F5zzYGtbaK%2BJGgeo5yJyp5RMSTljkRK6HMAd1re2LJoEyWrFu90bomrUAvMekTBkA9IdOpXY8nfa4%2B6fXSrl22fnTpe%2BsRMxK43e3aZdLQcyDgcSaJ%2BkVjsbkaAFg4FqoMHHjRvaHDA7ARhg0MIT9s%2BZUBvTG2TzGc%2FA0LrHEB73ZaQPPS1ueTLzIa56S8JXKGMAxu8oFvrBbjtVuOeF4K6PY5RmCx%2F7wfy8ErwHQmIj4UZWcASB%2Fy1bcz%2FyfLh7XlneA8%2BA7jxwbby2134%2FwAM4%2FKlAd9y4yiKyWHA0%2FBqfBdexFXwQfXqIm4turYGlQV9UL8Hm4AuvKZB1AM9wr3phik0mjD6%2BY7CBjqkAVk5J%2BjUfc%2FKU4DYpoQL%2F%2FVNHsHMOnSPpOIUDHYAbC7gCueLJjMW3ObYUyhLh27bGCEcVLCb%2Bsaqwa6vwkI9OQ3JeuxZXrhyOztRO1%2Fa16Wgc%2FvEwYegd%2FpUpnn2ybKD79j6D28Pxa6pRq212EMmvyjWZKlLfQ8NX48QlazbWCpdxkCTyQ3tOUJUhUtqiBn4npqDTvqncNT%2F1G3VxSsayk9j9vg2&X-Amz-Signature=12560ff091e752ede20d756876c6d1f0df6fc2afd736c0f6242b602aa0977dad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWANFUZ3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUlbDFd9i0yD7gB09NFqGe9Fd9ujlda4S6XjH3jQPsVwIhAJoWxqPXvIE%2FO9KEakT%2FIwec7CPVxSW%2BAZFbNqlkkRpOKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZd6v%2BAApiDpxTta0q3AO7iRR%2BhPjL0eLOo5JtO3FJxWiwaaNGXq%2BzlYnWCTYG5PgY7DHN1FJtClEiO0srSQ2ST3ZrSJaRBg%2Fcyb8lMEAaWkHrEoYcnBiCf7JbU3%2Bj1I2EeZ%2FkN3ESB63aNUJlKFO3frK1yov7VVyFHmI6yBYoB5xlcT9IZf0g0nbt535%2FqJxnz6%2FMJsC1oTnI9HbvwcmbwzCgKfFAdjSwAY3yjTvGlbpRVLWP1K6A1mtwbOZNpkmLu%2Fxjkg5YWiqVqKKmpJVW6XPnOhR8YYDUqanT9GUSis1zBawWq%2F5zzYGtbaK%2BJGgeo5yJyp5RMSTljkRK6HMAd1re2LJoEyWrFu90bomrUAvMekTBkA9IdOpXY8nfa4%2B6fXSrl22fnTpe%2BsRMxK43e3aZdLQcyDgcSaJ%2BkVjsbkaAFg4FqoMHHjRvaHDA7ARhg0MIT9s%2BZUBvTG2TzGc%2FA0LrHEB73ZaQPPS1ueTLzIa56S8JXKGMAxu8oFvrBbjtVuOeF4K6PY5RmCx%2F7wfy8ErwHQmIj4UZWcASB%2Fy1bcz%2FyfLh7XlneA8%2BA7jxwbby2134%2FwAM4%2FKlAd9y4yiKyWHA0%2FBqfBdexFXwQfXqIm4turYGlQV9UL8Hm4AuvKZB1AM9wr3phik0mjD6%2BY7CBjqkAVk5J%2BjUfc%2FKU4DYpoQL%2F%2FVNHsHMOnSPpOIUDHYAbC7gCueLJjMW3ObYUyhLh27bGCEcVLCb%2Bsaqwa6vwkI9OQ3JeuxZXrhyOztRO1%2Fa16Wgc%2FvEwYegd%2FpUpnn2ybKD79j6D28Pxa6pRq212EMmvyjWZKlLfQ8NX48QlazbWCpdxkCTyQ3tOUJUhUtqiBn4npqDTvqncNT%2F1G3VxSsayk9j9vg2&X-Amz-Signature=df977785253991b4bd3649cbe2da89e5bea9d4023af5774e5d6aaf94bee2578d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWANFUZ3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUlbDFd9i0yD7gB09NFqGe9Fd9ujlda4S6XjH3jQPsVwIhAJoWxqPXvIE%2FO9KEakT%2FIwec7CPVxSW%2BAZFbNqlkkRpOKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZd6v%2BAApiDpxTta0q3AO7iRR%2BhPjL0eLOo5JtO3FJxWiwaaNGXq%2BzlYnWCTYG5PgY7DHN1FJtClEiO0srSQ2ST3ZrSJaRBg%2Fcyb8lMEAaWkHrEoYcnBiCf7JbU3%2Bj1I2EeZ%2FkN3ESB63aNUJlKFO3frK1yov7VVyFHmI6yBYoB5xlcT9IZf0g0nbt535%2FqJxnz6%2FMJsC1oTnI9HbvwcmbwzCgKfFAdjSwAY3yjTvGlbpRVLWP1K6A1mtwbOZNpkmLu%2Fxjkg5YWiqVqKKmpJVW6XPnOhR8YYDUqanT9GUSis1zBawWq%2F5zzYGtbaK%2BJGgeo5yJyp5RMSTljkRK6HMAd1re2LJoEyWrFu90bomrUAvMekTBkA9IdOpXY8nfa4%2B6fXSrl22fnTpe%2BsRMxK43e3aZdLQcyDgcSaJ%2BkVjsbkaAFg4FqoMHHjRvaHDA7ARhg0MIT9s%2BZUBvTG2TzGc%2FA0LrHEB73ZaQPPS1ueTLzIa56S8JXKGMAxu8oFvrBbjtVuOeF4K6PY5RmCx%2F7wfy8ErwHQmIj4UZWcASB%2Fy1bcz%2FyfLh7XlneA8%2BA7jxwbby2134%2FwAM4%2FKlAd9y4yiKyWHA0%2FBqfBdexFXwQfXqIm4turYGlQV9UL8Hm4AuvKZB1AM9wr3phik0mjD6%2BY7CBjqkAVk5J%2BjUfc%2FKU4DYpoQL%2F%2FVNHsHMOnSPpOIUDHYAbC7gCueLJjMW3ObYUyhLh27bGCEcVLCb%2Bsaqwa6vwkI9OQ3JeuxZXrhyOztRO1%2Fa16Wgc%2FvEwYegd%2FpUpnn2ybKD79j6D28Pxa6pRq212EMmvyjWZKlLfQ8NX48QlazbWCpdxkCTyQ3tOUJUhUtqiBn4npqDTvqncNT%2F1G3VxSsayk9j9vg2&X-Amz-Signature=3b433d2c4469688a80e93d54a300fd5703ec948559283cda284ea39a58c03af6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWANFUZ3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUlbDFd9i0yD7gB09NFqGe9Fd9ujlda4S6XjH3jQPsVwIhAJoWxqPXvIE%2FO9KEakT%2FIwec7CPVxSW%2BAZFbNqlkkRpOKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZd6v%2BAApiDpxTta0q3AO7iRR%2BhPjL0eLOo5JtO3FJxWiwaaNGXq%2BzlYnWCTYG5PgY7DHN1FJtClEiO0srSQ2ST3ZrSJaRBg%2Fcyb8lMEAaWkHrEoYcnBiCf7JbU3%2Bj1I2EeZ%2FkN3ESB63aNUJlKFO3frK1yov7VVyFHmI6yBYoB5xlcT9IZf0g0nbt535%2FqJxnz6%2FMJsC1oTnI9HbvwcmbwzCgKfFAdjSwAY3yjTvGlbpRVLWP1K6A1mtwbOZNpkmLu%2Fxjkg5YWiqVqKKmpJVW6XPnOhR8YYDUqanT9GUSis1zBawWq%2F5zzYGtbaK%2BJGgeo5yJyp5RMSTljkRK6HMAd1re2LJoEyWrFu90bomrUAvMekTBkA9IdOpXY8nfa4%2B6fXSrl22fnTpe%2BsRMxK43e3aZdLQcyDgcSaJ%2BkVjsbkaAFg4FqoMHHjRvaHDA7ARhg0MIT9s%2BZUBvTG2TzGc%2FA0LrHEB73ZaQPPS1ueTLzIa56S8JXKGMAxu8oFvrBbjtVuOeF4K6PY5RmCx%2F7wfy8ErwHQmIj4UZWcASB%2Fy1bcz%2FyfLh7XlneA8%2BA7jxwbby2134%2FwAM4%2FKlAd9y4yiKyWHA0%2FBqfBdexFXwQfXqIm4turYGlQV9UL8Hm4AuvKZB1AM9wr3phik0mjD6%2BY7CBjqkAVk5J%2BjUfc%2FKU4DYpoQL%2F%2FVNHsHMOnSPpOIUDHYAbC7gCueLJjMW3ObYUyhLh27bGCEcVLCb%2Bsaqwa6vwkI9OQ3JeuxZXrhyOztRO1%2Fa16Wgc%2FvEwYegd%2FpUpnn2ybKD79j6D28Pxa6pRq212EMmvyjWZKlLfQ8NX48QlazbWCpdxkCTyQ3tOUJUhUtqiBn4npqDTvqncNT%2F1G3VxSsayk9j9vg2&X-Amz-Signature=b0d07220c95b9c4c327e45afa5248cf8f15d51207089aa3168f75264a07dcba1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWANFUZ3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUlbDFd9i0yD7gB09NFqGe9Fd9ujlda4S6XjH3jQPsVwIhAJoWxqPXvIE%2FO9KEakT%2FIwec7CPVxSW%2BAZFbNqlkkRpOKv8DCG0QABoMNjM3NDIzMTgzODA1IgzZd6v%2BAApiDpxTta0q3AO7iRR%2BhPjL0eLOo5JtO3FJxWiwaaNGXq%2BzlYnWCTYG5PgY7DHN1FJtClEiO0srSQ2ST3ZrSJaRBg%2Fcyb8lMEAaWkHrEoYcnBiCf7JbU3%2Bj1I2EeZ%2FkN3ESB63aNUJlKFO3frK1yov7VVyFHmI6yBYoB5xlcT9IZf0g0nbt535%2FqJxnz6%2FMJsC1oTnI9HbvwcmbwzCgKfFAdjSwAY3yjTvGlbpRVLWP1K6A1mtwbOZNpkmLu%2Fxjkg5YWiqVqKKmpJVW6XPnOhR8YYDUqanT9GUSis1zBawWq%2F5zzYGtbaK%2BJGgeo5yJyp5RMSTljkRK6HMAd1re2LJoEyWrFu90bomrUAvMekTBkA9IdOpXY8nfa4%2B6fXSrl22fnTpe%2BsRMxK43e3aZdLQcyDgcSaJ%2BkVjsbkaAFg4FqoMHHjRvaHDA7ARhg0MIT9s%2BZUBvTG2TzGc%2FA0LrHEB73ZaQPPS1ueTLzIa56S8JXKGMAxu8oFvrBbjtVuOeF4K6PY5RmCx%2F7wfy8ErwHQmIj4UZWcASB%2Fy1bcz%2FyfLh7XlneA8%2BA7jxwbby2134%2FwAM4%2FKlAd9y4yiKyWHA0%2FBqfBdexFXwQfXqIm4turYGlQV9UL8Hm4AuvKZB1AM9wr3phik0mjD6%2BY7CBjqkAVk5J%2BjUfc%2FKU4DYpoQL%2F%2FVNHsHMOnSPpOIUDHYAbC7gCueLJjMW3ObYUyhLh27bGCEcVLCb%2Bsaqwa6vwkI9OQ3JeuxZXrhyOztRO1%2Fa16Wgc%2FvEwYegd%2FpUpnn2ybKD79j6D28Pxa6pRq212EMmvyjWZKlLfQ8NX48QlazbWCpdxkCTyQ3tOUJUhUtqiBn4npqDTvqncNT%2F1G3VxSsayk9j9vg2&X-Amz-Signature=1513bae31cd057e0898f5ed91027767e80c7839218ebc9d15bb5045c50a7d830&X-Amz-SignedHeaders=host&x-id=GetObject)
