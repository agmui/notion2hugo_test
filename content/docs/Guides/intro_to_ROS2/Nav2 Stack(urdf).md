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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCSBVCLP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBn5sFgDWrZq4M3Iy8Z0infve6I7ar4zfqWLxEQIKE8AiEA0UY5eA4NYWAGKGE2J%2FhnTiOnJGaEEvw1nneDt3XI6CsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcBdpsKApAPYCe1GircA%2Bc2YE6d76UCdrPLlWcWaHkia1%2B0%2B9Pe%2BBOWW9QM1CwrGunNZ8Gmll6IR6aYl0fIzEuYVdruRuY3up49SuonW2%2F7cNx%2FpYYJoJDh3%2F6V9QG%2BB4KLkPhde%2Fu%2FTkVZe%2B2w62%2Fz2lJ4aWkaqD%2BuFyeWydNuB%2BAalIsVJVuAY7N9b2zMJZYvqDFSnQrWOmuB6AJh2ZZvFW6A7J3ud7xEQf28Q6Hdzw3WPD8VC1TN6p%2FuKmQgOVn1ydkQb%2BPHEUvjL%2F%2BszcaI4EaWWXNN7J64XOHFohq4OoQ%2BW8JeSKhKt0u3vnxIDLasffaP6UOjh%2Fweg%2BCNmi9rP80%2F08rPjTBx0bQCKeUmMbXL8dWxOBosf9Lj0P9BNIJvuBxaZSzOBWzBv0fP7HP0NdLc5%2FkBzkVtjIFD%2BLpA2QG1zmUWi8zz6z7fEe%2BIVCeFUaomKzDOu9%2Bb0WbTfTjoQBktJUuOfgluA9%2B9chXzkRY21DTaaRRxrztricgA6OzAr7vmGQjKCtf60XoexPpW%2BVS7zYvZWrYLXveF2IXkQ7vJVU8BV%2F7qYIdMCbSwEpFzvM4XxEkhvmXPYnyU1LKYUZP8GpqUIUQe4qShIdUWYhahbbL7mfN9KIYhtoZNvp%2BMLkhCnQkRJ1lpMIuT0r4GOqUBxwulf8GGAMkKMHu5BfsH33LPmvLfJEDryKcMSSf9QhDFreJOAbLOvYat6T4T9S8d1%2BYhGcB%2BL1Uk8a2NcZ72VNq8ZwAh32SzzUy9bYACvud%2FE5fW1dc%2FZtbNZnasbyrTUfdYiTig3kwebwJpLhYitumNWtdsX93u2Jo4QFQMYuX8TmAaRlvRu%2Fx2frh%2F5nM2Wm%2FyNCcuGvcYIcapEdCjeYip2DUO&X-Amz-Signature=b03243c3ee50f6453d4ad60b73f8591ab8c0a8f7e7824632ca6861fc2c465a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCSBVCLP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBn5sFgDWrZq4M3Iy8Z0infve6I7ar4zfqWLxEQIKE8AiEA0UY5eA4NYWAGKGE2J%2FhnTiOnJGaEEvw1nneDt3XI6CsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcBdpsKApAPYCe1GircA%2Bc2YE6d76UCdrPLlWcWaHkia1%2B0%2B9Pe%2BBOWW9QM1CwrGunNZ8Gmll6IR6aYl0fIzEuYVdruRuY3up49SuonW2%2F7cNx%2FpYYJoJDh3%2F6V9QG%2BB4KLkPhde%2Fu%2FTkVZe%2B2w62%2Fz2lJ4aWkaqD%2BuFyeWydNuB%2BAalIsVJVuAY7N9b2zMJZYvqDFSnQrWOmuB6AJh2ZZvFW6A7J3ud7xEQf28Q6Hdzw3WPD8VC1TN6p%2FuKmQgOVn1ydkQb%2BPHEUvjL%2F%2BszcaI4EaWWXNN7J64XOHFohq4OoQ%2BW8JeSKhKt0u3vnxIDLasffaP6UOjh%2Fweg%2BCNmi9rP80%2F08rPjTBx0bQCKeUmMbXL8dWxOBosf9Lj0P9BNIJvuBxaZSzOBWzBv0fP7HP0NdLc5%2FkBzkVtjIFD%2BLpA2QG1zmUWi8zz6z7fEe%2BIVCeFUaomKzDOu9%2Bb0WbTfTjoQBktJUuOfgluA9%2B9chXzkRY21DTaaRRxrztricgA6OzAr7vmGQjKCtf60XoexPpW%2BVS7zYvZWrYLXveF2IXkQ7vJVU8BV%2F7qYIdMCbSwEpFzvM4XxEkhvmXPYnyU1LKYUZP8GpqUIUQe4qShIdUWYhahbbL7mfN9KIYhtoZNvp%2BMLkhCnQkRJ1lpMIuT0r4GOqUBxwulf8GGAMkKMHu5BfsH33LPmvLfJEDryKcMSSf9QhDFreJOAbLOvYat6T4T9S8d1%2BYhGcB%2BL1Uk8a2NcZ72VNq8ZwAh32SzzUy9bYACvud%2FE5fW1dc%2FZtbNZnasbyrTUfdYiTig3kwebwJpLhYitumNWtdsX93u2Jo4QFQMYuX8TmAaRlvRu%2Fx2frh%2F5nM2Wm%2FyNCcuGvcYIcapEdCjeYip2DUO&X-Amz-Signature=33170782a292373d4bf8c006ca39b7f59c175e03c5a27bc58549c445d25c4801&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCSBVCLP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBn5sFgDWrZq4M3Iy8Z0infve6I7ar4zfqWLxEQIKE8AiEA0UY5eA4NYWAGKGE2J%2FhnTiOnJGaEEvw1nneDt3XI6CsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcBdpsKApAPYCe1GircA%2Bc2YE6d76UCdrPLlWcWaHkia1%2B0%2B9Pe%2BBOWW9QM1CwrGunNZ8Gmll6IR6aYl0fIzEuYVdruRuY3up49SuonW2%2F7cNx%2FpYYJoJDh3%2F6V9QG%2BB4KLkPhde%2Fu%2FTkVZe%2B2w62%2Fz2lJ4aWkaqD%2BuFyeWydNuB%2BAalIsVJVuAY7N9b2zMJZYvqDFSnQrWOmuB6AJh2ZZvFW6A7J3ud7xEQf28Q6Hdzw3WPD8VC1TN6p%2FuKmQgOVn1ydkQb%2BPHEUvjL%2F%2BszcaI4EaWWXNN7J64XOHFohq4OoQ%2BW8JeSKhKt0u3vnxIDLasffaP6UOjh%2Fweg%2BCNmi9rP80%2F08rPjTBx0bQCKeUmMbXL8dWxOBosf9Lj0P9BNIJvuBxaZSzOBWzBv0fP7HP0NdLc5%2FkBzkVtjIFD%2BLpA2QG1zmUWi8zz6z7fEe%2BIVCeFUaomKzDOu9%2Bb0WbTfTjoQBktJUuOfgluA9%2B9chXzkRY21DTaaRRxrztricgA6OzAr7vmGQjKCtf60XoexPpW%2BVS7zYvZWrYLXveF2IXkQ7vJVU8BV%2F7qYIdMCbSwEpFzvM4XxEkhvmXPYnyU1LKYUZP8GpqUIUQe4qShIdUWYhahbbL7mfN9KIYhtoZNvp%2BMLkhCnQkRJ1lpMIuT0r4GOqUBxwulf8GGAMkKMHu5BfsH33LPmvLfJEDryKcMSSf9QhDFreJOAbLOvYat6T4T9S8d1%2BYhGcB%2BL1Uk8a2NcZ72VNq8ZwAh32SzzUy9bYACvud%2FE5fW1dc%2FZtbNZnasbyrTUfdYiTig3kwebwJpLhYitumNWtdsX93u2Jo4QFQMYuX8TmAaRlvRu%2Fx2frh%2F5nM2Wm%2FyNCcuGvcYIcapEdCjeYip2DUO&X-Amz-Signature=5d928913e7a2b659b2014a29e682dc90bdeaea134e73faa771cecca5d48a93f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCSBVCLP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBn5sFgDWrZq4M3Iy8Z0infve6I7ar4zfqWLxEQIKE8AiEA0UY5eA4NYWAGKGE2J%2FhnTiOnJGaEEvw1nneDt3XI6CsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcBdpsKApAPYCe1GircA%2Bc2YE6d76UCdrPLlWcWaHkia1%2B0%2B9Pe%2BBOWW9QM1CwrGunNZ8Gmll6IR6aYl0fIzEuYVdruRuY3up49SuonW2%2F7cNx%2FpYYJoJDh3%2F6V9QG%2BB4KLkPhde%2Fu%2FTkVZe%2B2w62%2Fz2lJ4aWkaqD%2BuFyeWydNuB%2BAalIsVJVuAY7N9b2zMJZYvqDFSnQrWOmuB6AJh2ZZvFW6A7J3ud7xEQf28Q6Hdzw3WPD8VC1TN6p%2FuKmQgOVn1ydkQb%2BPHEUvjL%2F%2BszcaI4EaWWXNN7J64XOHFohq4OoQ%2BW8JeSKhKt0u3vnxIDLasffaP6UOjh%2Fweg%2BCNmi9rP80%2F08rPjTBx0bQCKeUmMbXL8dWxOBosf9Lj0P9BNIJvuBxaZSzOBWzBv0fP7HP0NdLc5%2FkBzkVtjIFD%2BLpA2QG1zmUWi8zz6z7fEe%2BIVCeFUaomKzDOu9%2Bb0WbTfTjoQBktJUuOfgluA9%2B9chXzkRY21DTaaRRxrztricgA6OzAr7vmGQjKCtf60XoexPpW%2BVS7zYvZWrYLXveF2IXkQ7vJVU8BV%2F7qYIdMCbSwEpFzvM4XxEkhvmXPYnyU1LKYUZP8GpqUIUQe4qShIdUWYhahbbL7mfN9KIYhtoZNvp%2BMLkhCnQkRJ1lpMIuT0r4GOqUBxwulf8GGAMkKMHu5BfsH33LPmvLfJEDryKcMSSf9QhDFreJOAbLOvYat6T4T9S8d1%2BYhGcB%2BL1Uk8a2NcZ72VNq8ZwAh32SzzUy9bYACvud%2FE5fW1dc%2FZtbNZnasbyrTUfdYiTig3kwebwJpLhYitumNWtdsX93u2Jo4QFQMYuX8TmAaRlvRu%2Fx2frh%2F5nM2Wm%2FyNCcuGvcYIcapEdCjeYip2DUO&X-Amz-Signature=fa54be0ae2423c9318a7ae0ba6b1526dcf918aaaf1ed780405a412a398f4ed23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCSBVCLP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBn5sFgDWrZq4M3Iy8Z0infve6I7ar4zfqWLxEQIKE8AiEA0UY5eA4NYWAGKGE2J%2FhnTiOnJGaEEvw1nneDt3XI6CsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcBdpsKApAPYCe1GircA%2Bc2YE6d76UCdrPLlWcWaHkia1%2B0%2B9Pe%2BBOWW9QM1CwrGunNZ8Gmll6IR6aYl0fIzEuYVdruRuY3up49SuonW2%2F7cNx%2FpYYJoJDh3%2F6V9QG%2BB4KLkPhde%2Fu%2FTkVZe%2B2w62%2Fz2lJ4aWkaqD%2BuFyeWydNuB%2BAalIsVJVuAY7N9b2zMJZYvqDFSnQrWOmuB6AJh2ZZvFW6A7J3ud7xEQf28Q6Hdzw3WPD8VC1TN6p%2FuKmQgOVn1ydkQb%2BPHEUvjL%2F%2BszcaI4EaWWXNN7J64XOHFohq4OoQ%2BW8JeSKhKt0u3vnxIDLasffaP6UOjh%2Fweg%2BCNmi9rP80%2F08rPjTBx0bQCKeUmMbXL8dWxOBosf9Lj0P9BNIJvuBxaZSzOBWzBv0fP7HP0NdLc5%2FkBzkVtjIFD%2BLpA2QG1zmUWi8zz6z7fEe%2BIVCeFUaomKzDOu9%2Bb0WbTfTjoQBktJUuOfgluA9%2B9chXzkRY21DTaaRRxrztricgA6OzAr7vmGQjKCtf60XoexPpW%2BVS7zYvZWrYLXveF2IXkQ7vJVU8BV%2F7qYIdMCbSwEpFzvM4XxEkhvmXPYnyU1LKYUZP8GpqUIUQe4qShIdUWYhahbbL7mfN9KIYhtoZNvp%2BMLkhCnQkRJ1lpMIuT0r4GOqUBxwulf8GGAMkKMHu5BfsH33LPmvLfJEDryKcMSSf9QhDFreJOAbLOvYat6T4T9S8d1%2BYhGcB%2BL1Uk8a2NcZ72VNq8ZwAh32SzzUy9bYACvud%2FE5fW1dc%2FZtbNZnasbyrTUfdYiTig3kwebwJpLhYitumNWtdsX93u2Jo4QFQMYuX8TmAaRlvRu%2Fx2frh%2F5nM2Wm%2FyNCcuGvcYIcapEdCjeYip2DUO&X-Amz-Signature=083e4124642ca044306b29a2dba3be34100072f0960d9381c5f0abfe37b87fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCSBVCLP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBn5sFgDWrZq4M3Iy8Z0infve6I7ar4zfqWLxEQIKE8AiEA0UY5eA4NYWAGKGE2J%2FhnTiOnJGaEEvw1nneDt3XI6CsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcBdpsKApAPYCe1GircA%2Bc2YE6d76UCdrPLlWcWaHkia1%2B0%2B9Pe%2BBOWW9QM1CwrGunNZ8Gmll6IR6aYl0fIzEuYVdruRuY3up49SuonW2%2F7cNx%2FpYYJoJDh3%2F6V9QG%2BB4KLkPhde%2Fu%2FTkVZe%2B2w62%2Fz2lJ4aWkaqD%2BuFyeWydNuB%2BAalIsVJVuAY7N9b2zMJZYvqDFSnQrWOmuB6AJh2ZZvFW6A7J3ud7xEQf28Q6Hdzw3WPD8VC1TN6p%2FuKmQgOVn1ydkQb%2BPHEUvjL%2F%2BszcaI4EaWWXNN7J64XOHFohq4OoQ%2BW8JeSKhKt0u3vnxIDLasffaP6UOjh%2Fweg%2BCNmi9rP80%2F08rPjTBx0bQCKeUmMbXL8dWxOBosf9Lj0P9BNIJvuBxaZSzOBWzBv0fP7HP0NdLc5%2FkBzkVtjIFD%2BLpA2QG1zmUWi8zz6z7fEe%2BIVCeFUaomKzDOu9%2Bb0WbTfTjoQBktJUuOfgluA9%2B9chXzkRY21DTaaRRxrztricgA6OzAr7vmGQjKCtf60XoexPpW%2BVS7zYvZWrYLXveF2IXkQ7vJVU8BV%2F7qYIdMCbSwEpFzvM4XxEkhvmXPYnyU1LKYUZP8GpqUIUQe4qShIdUWYhahbbL7mfN9KIYhtoZNvp%2BMLkhCnQkRJ1lpMIuT0r4GOqUBxwulf8GGAMkKMHu5BfsH33LPmvLfJEDryKcMSSf9QhDFreJOAbLOvYat6T4T9S8d1%2BYhGcB%2BL1Uk8a2NcZ72VNq8ZwAh32SzzUy9bYACvud%2FE5fW1dc%2FZtbNZnasbyrTUfdYiTig3kwebwJpLhYitumNWtdsX93u2Jo4QFQMYuX8TmAaRlvRu%2Fx2frh%2F5nM2Wm%2FyNCcuGvcYIcapEdCjeYip2DUO&X-Amz-Signature=bc2a100f73b18dd907685a9fe65522425ec1fd0b26015953403f8d3b6fad41a2&X-Amz-SignedHeaders=host&x-id=GetObject)
