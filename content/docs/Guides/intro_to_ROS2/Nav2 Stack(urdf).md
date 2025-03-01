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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYTRBI6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG9bNye24Ek%2FIcbfWV%2FL%2F2hBHkKllIvpz0Q%2FG3b%2B088CAiAF6HhRVUeJkQDRv3YXZE9Rlm9mXnFQ0k5Z7RfsygSnAyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNDbpWWzI9uTNVEuuKtwDguOnI5uxBGxOQ4YKRCxVRpUHwYzTSqj%2BxDlmaO5N1wKRyx8YxdicrEDCXpNDfkgy2q%2FwMZ5LZqp3BOyFs%2BhqHLBs0r3dpOAYev6ljoULvyR%2Bt6DyMSF%2B3YSDxWhBqKmuuTBQdaTN%2F6RzjGydlpJy7k0Eqpfi6PkDJaXlk4MTa9%2F6tGUSuNeAr1NoQjmJhroL7PwrkktHQPmt%2FoamQutiBsi%2BJf%2Bf37dA96VKa1MygcVF7grbZNJAnqSteoMC767C%2B4%2FVs%2Fz%2FtiscwzvVkOwyufoYMa3IGnYQgvDBgWfPEeZjSeJnW5jmGWBnJHip%2BBpoFikUYr%2FEhTMf6kel6oC9BEdL6j2YBWZgeip5h2hLJJRQztJxGkuGDi6gEU0TbupyyUlBft8aUlMbFTa9HQJ3HZnG6iiH2UOYFryzvXN7v9GKGam%2FUVd1cpfkSjJEYpGEBdcsRQXzR7ogiOjJhU70rDDLhms3rLfNR3l0CWQdRQj2zRvsnNYIAL5%2BID56GCvb5X5X9ckFeX5cXE5W42Gpu%2Bv%2BvsQ4LjObcXM8cWWe8ZUBKdi0ded%2F%2FugE31k84LlYhnIpFXD0M8tUYwNPnz0iu69ROsfwL5UUIK5%2BKzd60SSPgS8r9poGZ1WECpUwk5WMvgY6pgE%2BOX6wlaTSRLxzgr%2BlV4IHNmgGvyyvnLtsxC3BbDuWb%2FWgkvWl4451x7G6AcEFwWqquQGQCORlNHG13pp9g3o1HfKi5GnlO07SQDCq9BphFLdW%2FitsdIerLXYF4D%2BOhmlOWrRoZmZGtKVEBa9iX5xYNI5J%2Fs9dViF5j8V7UEqy2WvmCFjDeo4t0JKsEHtFppSBVuresfGmgkx2i%2BS%2BZFLSv0W4BFEy&X-Amz-Signature=4f686c75eb1c8febc69f7ec49f4cf282a822eb79afb0c9c8080d545bf13e6eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYTRBI6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG9bNye24Ek%2FIcbfWV%2FL%2F2hBHkKllIvpz0Q%2FG3b%2B088CAiAF6HhRVUeJkQDRv3YXZE9Rlm9mXnFQ0k5Z7RfsygSnAyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNDbpWWzI9uTNVEuuKtwDguOnI5uxBGxOQ4YKRCxVRpUHwYzTSqj%2BxDlmaO5N1wKRyx8YxdicrEDCXpNDfkgy2q%2FwMZ5LZqp3BOyFs%2BhqHLBs0r3dpOAYev6ljoULvyR%2Bt6DyMSF%2B3YSDxWhBqKmuuTBQdaTN%2F6RzjGydlpJy7k0Eqpfi6PkDJaXlk4MTa9%2F6tGUSuNeAr1NoQjmJhroL7PwrkktHQPmt%2FoamQutiBsi%2BJf%2Bf37dA96VKa1MygcVF7grbZNJAnqSteoMC767C%2B4%2FVs%2Fz%2FtiscwzvVkOwyufoYMa3IGnYQgvDBgWfPEeZjSeJnW5jmGWBnJHip%2BBpoFikUYr%2FEhTMf6kel6oC9BEdL6j2YBWZgeip5h2hLJJRQztJxGkuGDi6gEU0TbupyyUlBft8aUlMbFTa9HQJ3HZnG6iiH2UOYFryzvXN7v9GKGam%2FUVd1cpfkSjJEYpGEBdcsRQXzR7ogiOjJhU70rDDLhms3rLfNR3l0CWQdRQj2zRvsnNYIAL5%2BID56GCvb5X5X9ckFeX5cXE5W42Gpu%2Bv%2BvsQ4LjObcXM8cWWe8ZUBKdi0ded%2F%2FugE31k84LlYhnIpFXD0M8tUYwNPnz0iu69ROsfwL5UUIK5%2BKzd60SSPgS8r9poGZ1WECpUwk5WMvgY6pgE%2BOX6wlaTSRLxzgr%2BlV4IHNmgGvyyvnLtsxC3BbDuWb%2FWgkvWl4451x7G6AcEFwWqquQGQCORlNHG13pp9g3o1HfKi5GnlO07SQDCq9BphFLdW%2FitsdIerLXYF4D%2BOhmlOWrRoZmZGtKVEBa9iX5xYNI5J%2Fs9dViF5j8V7UEqy2WvmCFjDeo4t0JKsEHtFppSBVuresfGmgkx2i%2BS%2BZFLSv0W4BFEy&X-Amz-Signature=01ca3aeb517b637491db708e13867349438a487f5c7be965904f10af67cdce70&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYTRBI6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG9bNye24Ek%2FIcbfWV%2FL%2F2hBHkKllIvpz0Q%2FG3b%2B088CAiAF6HhRVUeJkQDRv3YXZE9Rlm9mXnFQ0k5Z7RfsygSnAyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNDbpWWzI9uTNVEuuKtwDguOnI5uxBGxOQ4YKRCxVRpUHwYzTSqj%2BxDlmaO5N1wKRyx8YxdicrEDCXpNDfkgy2q%2FwMZ5LZqp3BOyFs%2BhqHLBs0r3dpOAYev6ljoULvyR%2Bt6DyMSF%2B3YSDxWhBqKmuuTBQdaTN%2F6RzjGydlpJy7k0Eqpfi6PkDJaXlk4MTa9%2F6tGUSuNeAr1NoQjmJhroL7PwrkktHQPmt%2FoamQutiBsi%2BJf%2Bf37dA96VKa1MygcVF7grbZNJAnqSteoMC767C%2B4%2FVs%2Fz%2FtiscwzvVkOwyufoYMa3IGnYQgvDBgWfPEeZjSeJnW5jmGWBnJHip%2BBpoFikUYr%2FEhTMf6kel6oC9BEdL6j2YBWZgeip5h2hLJJRQztJxGkuGDi6gEU0TbupyyUlBft8aUlMbFTa9HQJ3HZnG6iiH2UOYFryzvXN7v9GKGam%2FUVd1cpfkSjJEYpGEBdcsRQXzR7ogiOjJhU70rDDLhms3rLfNR3l0CWQdRQj2zRvsnNYIAL5%2BID56GCvb5X5X9ckFeX5cXE5W42Gpu%2Bv%2BvsQ4LjObcXM8cWWe8ZUBKdi0ded%2F%2FugE31k84LlYhnIpFXD0M8tUYwNPnz0iu69ROsfwL5UUIK5%2BKzd60SSPgS8r9poGZ1WECpUwk5WMvgY6pgE%2BOX6wlaTSRLxzgr%2BlV4IHNmgGvyyvnLtsxC3BbDuWb%2FWgkvWl4451x7G6AcEFwWqquQGQCORlNHG13pp9g3o1HfKi5GnlO07SQDCq9BphFLdW%2FitsdIerLXYF4D%2BOhmlOWrRoZmZGtKVEBa9iX5xYNI5J%2Fs9dViF5j8V7UEqy2WvmCFjDeo4t0JKsEHtFppSBVuresfGmgkx2i%2BS%2BZFLSv0W4BFEy&X-Amz-Signature=61161cf8d1b533a2e229f1ab86142c44942a5d5194fe6c6a1202c84295dce369&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYTRBI6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG9bNye24Ek%2FIcbfWV%2FL%2F2hBHkKllIvpz0Q%2FG3b%2B088CAiAF6HhRVUeJkQDRv3YXZE9Rlm9mXnFQ0k5Z7RfsygSnAyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNDbpWWzI9uTNVEuuKtwDguOnI5uxBGxOQ4YKRCxVRpUHwYzTSqj%2BxDlmaO5N1wKRyx8YxdicrEDCXpNDfkgy2q%2FwMZ5LZqp3BOyFs%2BhqHLBs0r3dpOAYev6ljoULvyR%2Bt6DyMSF%2B3YSDxWhBqKmuuTBQdaTN%2F6RzjGydlpJy7k0Eqpfi6PkDJaXlk4MTa9%2F6tGUSuNeAr1NoQjmJhroL7PwrkktHQPmt%2FoamQutiBsi%2BJf%2Bf37dA96VKa1MygcVF7grbZNJAnqSteoMC767C%2B4%2FVs%2Fz%2FtiscwzvVkOwyufoYMa3IGnYQgvDBgWfPEeZjSeJnW5jmGWBnJHip%2BBpoFikUYr%2FEhTMf6kel6oC9BEdL6j2YBWZgeip5h2hLJJRQztJxGkuGDi6gEU0TbupyyUlBft8aUlMbFTa9HQJ3HZnG6iiH2UOYFryzvXN7v9GKGam%2FUVd1cpfkSjJEYpGEBdcsRQXzR7ogiOjJhU70rDDLhms3rLfNR3l0CWQdRQj2zRvsnNYIAL5%2BID56GCvb5X5X9ckFeX5cXE5W42Gpu%2Bv%2BvsQ4LjObcXM8cWWe8ZUBKdi0ded%2F%2FugE31k84LlYhnIpFXD0M8tUYwNPnz0iu69ROsfwL5UUIK5%2BKzd60SSPgS8r9poGZ1WECpUwk5WMvgY6pgE%2BOX6wlaTSRLxzgr%2BlV4IHNmgGvyyvnLtsxC3BbDuWb%2FWgkvWl4451x7G6AcEFwWqquQGQCORlNHG13pp9g3o1HfKi5GnlO07SQDCq9BphFLdW%2FitsdIerLXYF4D%2BOhmlOWrRoZmZGtKVEBa9iX5xYNI5J%2Fs9dViF5j8V7UEqy2WvmCFjDeo4t0JKsEHtFppSBVuresfGmgkx2i%2BS%2BZFLSv0W4BFEy&X-Amz-Signature=d07506c019136e8b1b885c22eed4c81d201d6902a11e71fdd45a3e38f89bc3fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYTRBI6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG9bNye24Ek%2FIcbfWV%2FL%2F2hBHkKllIvpz0Q%2FG3b%2B088CAiAF6HhRVUeJkQDRv3YXZE9Rlm9mXnFQ0k5Z7RfsygSnAyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNDbpWWzI9uTNVEuuKtwDguOnI5uxBGxOQ4YKRCxVRpUHwYzTSqj%2BxDlmaO5N1wKRyx8YxdicrEDCXpNDfkgy2q%2FwMZ5LZqp3BOyFs%2BhqHLBs0r3dpOAYev6ljoULvyR%2Bt6DyMSF%2B3YSDxWhBqKmuuTBQdaTN%2F6RzjGydlpJy7k0Eqpfi6PkDJaXlk4MTa9%2F6tGUSuNeAr1NoQjmJhroL7PwrkktHQPmt%2FoamQutiBsi%2BJf%2Bf37dA96VKa1MygcVF7grbZNJAnqSteoMC767C%2B4%2FVs%2Fz%2FtiscwzvVkOwyufoYMa3IGnYQgvDBgWfPEeZjSeJnW5jmGWBnJHip%2BBpoFikUYr%2FEhTMf6kel6oC9BEdL6j2YBWZgeip5h2hLJJRQztJxGkuGDi6gEU0TbupyyUlBft8aUlMbFTa9HQJ3HZnG6iiH2UOYFryzvXN7v9GKGam%2FUVd1cpfkSjJEYpGEBdcsRQXzR7ogiOjJhU70rDDLhms3rLfNR3l0CWQdRQj2zRvsnNYIAL5%2BID56GCvb5X5X9ckFeX5cXE5W42Gpu%2Bv%2BvsQ4LjObcXM8cWWe8ZUBKdi0ded%2F%2FugE31k84LlYhnIpFXD0M8tUYwNPnz0iu69ROsfwL5UUIK5%2BKzd60SSPgS8r9poGZ1WECpUwk5WMvgY6pgE%2BOX6wlaTSRLxzgr%2BlV4IHNmgGvyyvnLtsxC3BbDuWb%2FWgkvWl4451x7G6AcEFwWqquQGQCORlNHG13pp9g3o1HfKi5GnlO07SQDCq9BphFLdW%2FitsdIerLXYF4D%2BOhmlOWrRoZmZGtKVEBa9iX5xYNI5J%2Fs9dViF5j8V7UEqy2WvmCFjDeo4t0JKsEHtFppSBVuresfGmgkx2i%2BS%2BZFLSv0W4BFEy&X-Amz-Signature=13016fe7611cf90c9a2503abc3e1b5b0d616569dd33ace649e630c8ed756a65c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYTRBI6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIG9bNye24Ek%2FIcbfWV%2FL%2F2hBHkKllIvpz0Q%2FG3b%2B088CAiAF6HhRVUeJkQDRv3YXZE9Rlm9mXnFQ0k5Z7RfsygSnAyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNDbpWWzI9uTNVEuuKtwDguOnI5uxBGxOQ4YKRCxVRpUHwYzTSqj%2BxDlmaO5N1wKRyx8YxdicrEDCXpNDfkgy2q%2FwMZ5LZqp3BOyFs%2BhqHLBs0r3dpOAYev6ljoULvyR%2Bt6DyMSF%2B3YSDxWhBqKmuuTBQdaTN%2F6RzjGydlpJy7k0Eqpfi6PkDJaXlk4MTa9%2F6tGUSuNeAr1NoQjmJhroL7PwrkktHQPmt%2FoamQutiBsi%2BJf%2Bf37dA96VKa1MygcVF7grbZNJAnqSteoMC767C%2B4%2FVs%2Fz%2FtiscwzvVkOwyufoYMa3IGnYQgvDBgWfPEeZjSeJnW5jmGWBnJHip%2BBpoFikUYr%2FEhTMf6kel6oC9BEdL6j2YBWZgeip5h2hLJJRQztJxGkuGDi6gEU0TbupyyUlBft8aUlMbFTa9HQJ3HZnG6iiH2UOYFryzvXN7v9GKGam%2FUVd1cpfkSjJEYpGEBdcsRQXzR7ogiOjJhU70rDDLhms3rLfNR3l0CWQdRQj2zRvsnNYIAL5%2BID56GCvb5X5X9ckFeX5cXE5W42Gpu%2Bv%2BvsQ4LjObcXM8cWWe8ZUBKdi0ded%2F%2FugE31k84LlYhnIpFXD0M8tUYwNPnz0iu69ROsfwL5UUIK5%2BKzd60SSPgS8r9poGZ1WECpUwk5WMvgY6pgE%2BOX6wlaTSRLxzgr%2BlV4IHNmgGvyyvnLtsxC3BbDuWb%2FWgkvWl4451x7G6AcEFwWqquQGQCORlNHG13pp9g3o1HfKi5GnlO07SQDCq9BphFLdW%2FitsdIerLXYF4D%2BOhmlOWrRoZmZGtKVEBa9iX5xYNI5J%2Fs9dViF5j8V7UEqy2WvmCFjDeo4t0JKsEHtFppSBVuresfGmgkx2i%2BS%2BZFLSv0W4BFEy&X-Amz-Signature=3470bb48eb382dea00a7c2525ffcfc4c6d4cd8659c9d53720c6ce50e595bf9b6&X-Amz-SignedHeaders=host&x-id=GetObject)
