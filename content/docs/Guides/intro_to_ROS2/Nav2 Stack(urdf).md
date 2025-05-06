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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6NEE4VH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5PAJrryuiCIIe%2F0LHd6gcLiEnpqbg9KLif7Id7h9lKgIgCaxSeRR6cqfpsD4mClR7%2B6UXMB%2FNmXgmH8hU51%2Fa0UQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAdjK%2BNon6MJRI4%2FRircA2s4Yy%2BMcsIbbFqCrIuvE56uG%2FmKBJ0wd8lO561YXSX5EbVEPd676U7DClmnTfDrNBtc%2BNKpVH4WWw0Kvuxkb1CZ2K0Tn5eJEL0HUb5ABFYPefxbFBsz%2FbKnv5j9ICVRt%2FvQ68oQPBmZpR6fjqmZRY69sfkSGk9fzIx8tQYTetJ8q70Y2IpvZAfnrfD%2FeYpiNAEL5glT2FJ5v0yPtDRBtTgxYzAoKR%2FaBZn4fZ9QVRcY9rl7uKhIItB7X%2F%2BjBfWFrd9wu1TOOWKJfyLsP38jfoQcpw4eLEcowNd46kRU7xaZNxCLjpjz5p3uV9hETV04AbLgTal0diSs7VaU75k6jXHcYZ4g4vbVjB%2BGU%2F7xoGCLAgHE7RelpsY68EdKzEC9supUZPIP5Gb5lylK%2F8IfeiDBSDJKjgxvfaPIg%2FvIFuBWECEMq%2BvH2BQUEpk5a5MY2SOKxzgIb9VTfEK8%2BZbaPakImiNaJ%2Fy%2FtKD3bRXeUJgbQk%2FnXXNUJ7DaQ9m8TwhvPxg3bAq5hgxP%2BEQV2TFw2Bl0n7ToNpP0c6oQXZGN44OaT326kI8XVEBcqS5RSV4A9XmNC1nX8GKlvcHnQ1nXa0sb0tBatVTjoqWLA9zZKMfrSO%2Frvf9EzlvDX8KgMKb%2B5cAGOqUBuOBery%2Fdaqh%2Fi121Orev0En9DrGjzUQ0oWBNvVa3l8pmWiLPCblph9LCqzweZsBcA5EXZQGjjiebp1JFoxq8jblnZxHq%2Fv7mZrW14C7IyYLx1yL7o71rjeEloQ1uV8Rr7wKU3sdAGkJ%2BQdvn54tyGyfk%2F01ss8%2FcYtBpm%2BXngOKiU6P4h5Sm%2BlA3ViLn%2F5ocLxzZgEF7p2AGznej%2BTLy8kaZaQZ5&X-Amz-Signature=0fb1a0636e5653f827cd6b69dbc0e84dabcffe244f3b629bb28d708e779be974&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6NEE4VH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5PAJrryuiCIIe%2F0LHd6gcLiEnpqbg9KLif7Id7h9lKgIgCaxSeRR6cqfpsD4mClR7%2B6UXMB%2FNmXgmH8hU51%2Fa0UQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAdjK%2BNon6MJRI4%2FRircA2s4Yy%2BMcsIbbFqCrIuvE56uG%2FmKBJ0wd8lO561YXSX5EbVEPd676U7DClmnTfDrNBtc%2BNKpVH4WWw0Kvuxkb1CZ2K0Tn5eJEL0HUb5ABFYPefxbFBsz%2FbKnv5j9ICVRt%2FvQ68oQPBmZpR6fjqmZRY69sfkSGk9fzIx8tQYTetJ8q70Y2IpvZAfnrfD%2FeYpiNAEL5glT2FJ5v0yPtDRBtTgxYzAoKR%2FaBZn4fZ9QVRcY9rl7uKhIItB7X%2F%2BjBfWFrd9wu1TOOWKJfyLsP38jfoQcpw4eLEcowNd46kRU7xaZNxCLjpjz5p3uV9hETV04AbLgTal0diSs7VaU75k6jXHcYZ4g4vbVjB%2BGU%2F7xoGCLAgHE7RelpsY68EdKzEC9supUZPIP5Gb5lylK%2F8IfeiDBSDJKjgxvfaPIg%2FvIFuBWECEMq%2BvH2BQUEpk5a5MY2SOKxzgIb9VTfEK8%2BZbaPakImiNaJ%2Fy%2FtKD3bRXeUJgbQk%2FnXXNUJ7DaQ9m8TwhvPxg3bAq5hgxP%2BEQV2TFw2Bl0n7ToNpP0c6oQXZGN44OaT326kI8XVEBcqS5RSV4A9XmNC1nX8GKlvcHnQ1nXa0sb0tBatVTjoqWLA9zZKMfrSO%2Frvf9EzlvDX8KgMKb%2B5cAGOqUBuOBery%2Fdaqh%2Fi121Orev0En9DrGjzUQ0oWBNvVa3l8pmWiLPCblph9LCqzweZsBcA5EXZQGjjiebp1JFoxq8jblnZxHq%2Fv7mZrW14C7IyYLx1yL7o71rjeEloQ1uV8Rr7wKU3sdAGkJ%2BQdvn54tyGyfk%2F01ss8%2FcYtBpm%2BXngOKiU6P4h5Sm%2BlA3ViLn%2F5ocLxzZgEF7p2AGznej%2BTLy8kaZaQZ5&X-Amz-Signature=bf9b117c317367870241fab07504608c27ae2585365ea1461ed5456983510715&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6NEE4VH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5PAJrryuiCIIe%2F0LHd6gcLiEnpqbg9KLif7Id7h9lKgIgCaxSeRR6cqfpsD4mClR7%2B6UXMB%2FNmXgmH8hU51%2Fa0UQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAdjK%2BNon6MJRI4%2FRircA2s4Yy%2BMcsIbbFqCrIuvE56uG%2FmKBJ0wd8lO561YXSX5EbVEPd676U7DClmnTfDrNBtc%2BNKpVH4WWw0Kvuxkb1CZ2K0Tn5eJEL0HUb5ABFYPefxbFBsz%2FbKnv5j9ICVRt%2FvQ68oQPBmZpR6fjqmZRY69sfkSGk9fzIx8tQYTetJ8q70Y2IpvZAfnrfD%2FeYpiNAEL5glT2FJ5v0yPtDRBtTgxYzAoKR%2FaBZn4fZ9QVRcY9rl7uKhIItB7X%2F%2BjBfWFrd9wu1TOOWKJfyLsP38jfoQcpw4eLEcowNd46kRU7xaZNxCLjpjz5p3uV9hETV04AbLgTal0diSs7VaU75k6jXHcYZ4g4vbVjB%2BGU%2F7xoGCLAgHE7RelpsY68EdKzEC9supUZPIP5Gb5lylK%2F8IfeiDBSDJKjgxvfaPIg%2FvIFuBWECEMq%2BvH2BQUEpk5a5MY2SOKxzgIb9VTfEK8%2BZbaPakImiNaJ%2Fy%2FtKD3bRXeUJgbQk%2FnXXNUJ7DaQ9m8TwhvPxg3bAq5hgxP%2BEQV2TFw2Bl0n7ToNpP0c6oQXZGN44OaT326kI8XVEBcqS5RSV4A9XmNC1nX8GKlvcHnQ1nXa0sb0tBatVTjoqWLA9zZKMfrSO%2Frvf9EzlvDX8KgMKb%2B5cAGOqUBuOBery%2Fdaqh%2Fi121Orev0En9DrGjzUQ0oWBNvVa3l8pmWiLPCblph9LCqzweZsBcA5EXZQGjjiebp1JFoxq8jblnZxHq%2Fv7mZrW14C7IyYLx1yL7o71rjeEloQ1uV8Rr7wKU3sdAGkJ%2BQdvn54tyGyfk%2F01ss8%2FcYtBpm%2BXngOKiU6P4h5Sm%2BlA3ViLn%2F5ocLxzZgEF7p2AGznej%2BTLy8kaZaQZ5&X-Amz-Signature=b91a3510912825045c4c8d763c0e0f5523e873c22d39669b59c9ebb7d495b2ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6NEE4VH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5PAJrryuiCIIe%2F0LHd6gcLiEnpqbg9KLif7Id7h9lKgIgCaxSeRR6cqfpsD4mClR7%2B6UXMB%2FNmXgmH8hU51%2Fa0UQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAdjK%2BNon6MJRI4%2FRircA2s4Yy%2BMcsIbbFqCrIuvE56uG%2FmKBJ0wd8lO561YXSX5EbVEPd676U7DClmnTfDrNBtc%2BNKpVH4WWw0Kvuxkb1CZ2K0Tn5eJEL0HUb5ABFYPefxbFBsz%2FbKnv5j9ICVRt%2FvQ68oQPBmZpR6fjqmZRY69sfkSGk9fzIx8tQYTetJ8q70Y2IpvZAfnrfD%2FeYpiNAEL5glT2FJ5v0yPtDRBtTgxYzAoKR%2FaBZn4fZ9QVRcY9rl7uKhIItB7X%2F%2BjBfWFrd9wu1TOOWKJfyLsP38jfoQcpw4eLEcowNd46kRU7xaZNxCLjpjz5p3uV9hETV04AbLgTal0diSs7VaU75k6jXHcYZ4g4vbVjB%2BGU%2F7xoGCLAgHE7RelpsY68EdKzEC9supUZPIP5Gb5lylK%2F8IfeiDBSDJKjgxvfaPIg%2FvIFuBWECEMq%2BvH2BQUEpk5a5MY2SOKxzgIb9VTfEK8%2BZbaPakImiNaJ%2Fy%2FtKD3bRXeUJgbQk%2FnXXNUJ7DaQ9m8TwhvPxg3bAq5hgxP%2BEQV2TFw2Bl0n7ToNpP0c6oQXZGN44OaT326kI8XVEBcqS5RSV4A9XmNC1nX8GKlvcHnQ1nXa0sb0tBatVTjoqWLA9zZKMfrSO%2Frvf9EzlvDX8KgMKb%2B5cAGOqUBuOBery%2Fdaqh%2Fi121Orev0En9DrGjzUQ0oWBNvVa3l8pmWiLPCblph9LCqzweZsBcA5EXZQGjjiebp1JFoxq8jblnZxHq%2Fv7mZrW14C7IyYLx1yL7o71rjeEloQ1uV8Rr7wKU3sdAGkJ%2BQdvn54tyGyfk%2F01ss8%2FcYtBpm%2BXngOKiU6P4h5Sm%2BlA3ViLn%2F5ocLxzZgEF7p2AGznej%2BTLy8kaZaQZ5&X-Amz-Signature=3048f87627855a3aab9d33ba009f62a7b934b983641d1721778d2ffa239776ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6NEE4VH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5PAJrryuiCIIe%2F0LHd6gcLiEnpqbg9KLif7Id7h9lKgIgCaxSeRR6cqfpsD4mClR7%2B6UXMB%2FNmXgmH8hU51%2Fa0UQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAdjK%2BNon6MJRI4%2FRircA2s4Yy%2BMcsIbbFqCrIuvE56uG%2FmKBJ0wd8lO561YXSX5EbVEPd676U7DClmnTfDrNBtc%2BNKpVH4WWw0Kvuxkb1CZ2K0Tn5eJEL0HUb5ABFYPefxbFBsz%2FbKnv5j9ICVRt%2FvQ68oQPBmZpR6fjqmZRY69sfkSGk9fzIx8tQYTetJ8q70Y2IpvZAfnrfD%2FeYpiNAEL5glT2FJ5v0yPtDRBtTgxYzAoKR%2FaBZn4fZ9QVRcY9rl7uKhIItB7X%2F%2BjBfWFrd9wu1TOOWKJfyLsP38jfoQcpw4eLEcowNd46kRU7xaZNxCLjpjz5p3uV9hETV04AbLgTal0diSs7VaU75k6jXHcYZ4g4vbVjB%2BGU%2F7xoGCLAgHE7RelpsY68EdKzEC9supUZPIP5Gb5lylK%2F8IfeiDBSDJKjgxvfaPIg%2FvIFuBWECEMq%2BvH2BQUEpk5a5MY2SOKxzgIb9VTfEK8%2BZbaPakImiNaJ%2Fy%2FtKD3bRXeUJgbQk%2FnXXNUJ7DaQ9m8TwhvPxg3bAq5hgxP%2BEQV2TFw2Bl0n7ToNpP0c6oQXZGN44OaT326kI8XVEBcqS5RSV4A9XmNC1nX8GKlvcHnQ1nXa0sb0tBatVTjoqWLA9zZKMfrSO%2Frvf9EzlvDX8KgMKb%2B5cAGOqUBuOBery%2Fdaqh%2Fi121Orev0En9DrGjzUQ0oWBNvVa3l8pmWiLPCblph9LCqzweZsBcA5EXZQGjjiebp1JFoxq8jblnZxHq%2Fv7mZrW14C7IyYLx1yL7o71rjeEloQ1uV8Rr7wKU3sdAGkJ%2BQdvn54tyGyfk%2F01ss8%2FcYtBpm%2BXngOKiU6P4h5Sm%2BlA3ViLn%2F5ocLxzZgEF7p2AGznej%2BTLy8kaZaQZ5&X-Amz-Signature=fe090e8e5c66f2fd90d3d9aa4d0b69cc0bbe99fad1f887ecda8b1ec2fe450662&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6NEE4VH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5PAJrryuiCIIe%2F0LHd6gcLiEnpqbg9KLif7Id7h9lKgIgCaxSeRR6cqfpsD4mClR7%2B6UXMB%2FNmXgmH8hU51%2Fa0UQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAdjK%2BNon6MJRI4%2FRircA2s4Yy%2BMcsIbbFqCrIuvE56uG%2FmKBJ0wd8lO561YXSX5EbVEPd676U7DClmnTfDrNBtc%2BNKpVH4WWw0Kvuxkb1CZ2K0Tn5eJEL0HUb5ABFYPefxbFBsz%2FbKnv5j9ICVRt%2FvQ68oQPBmZpR6fjqmZRY69sfkSGk9fzIx8tQYTetJ8q70Y2IpvZAfnrfD%2FeYpiNAEL5glT2FJ5v0yPtDRBtTgxYzAoKR%2FaBZn4fZ9QVRcY9rl7uKhIItB7X%2F%2BjBfWFrd9wu1TOOWKJfyLsP38jfoQcpw4eLEcowNd46kRU7xaZNxCLjpjz5p3uV9hETV04AbLgTal0diSs7VaU75k6jXHcYZ4g4vbVjB%2BGU%2F7xoGCLAgHE7RelpsY68EdKzEC9supUZPIP5Gb5lylK%2F8IfeiDBSDJKjgxvfaPIg%2FvIFuBWECEMq%2BvH2BQUEpk5a5MY2SOKxzgIb9VTfEK8%2BZbaPakImiNaJ%2Fy%2FtKD3bRXeUJgbQk%2FnXXNUJ7DaQ9m8TwhvPxg3bAq5hgxP%2BEQV2TFw2Bl0n7ToNpP0c6oQXZGN44OaT326kI8XVEBcqS5RSV4A9XmNC1nX8GKlvcHnQ1nXa0sb0tBatVTjoqWLA9zZKMfrSO%2Frvf9EzlvDX8KgMKb%2B5cAGOqUBuOBery%2Fdaqh%2Fi121Orev0En9DrGjzUQ0oWBNvVa3l8pmWiLPCblph9LCqzweZsBcA5EXZQGjjiebp1JFoxq8jblnZxHq%2Fv7mZrW14C7IyYLx1yL7o71rjeEloQ1uV8Rr7wKU3sdAGkJ%2BQdvn54tyGyfk%2F01ss8%2FcYtBpm%2BXngOKiU6P4h5Sm%2BlA3ViLn%2F5ocLxzZgEF7p2AGznej%2BTLy8kaZaQZ5&X-Amz-Signature=c65050cdfdb16cea02ba29be3b8c89a2b72d9921b034112fa3589fa5c8a54155&X-Amz-SignedHeaders=host&x-id=GetObject)
