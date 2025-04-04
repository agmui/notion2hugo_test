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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZTM7QWV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2u%2BOKhU%2BtanqULD7nHpWsMYOHnNCFeoloAis3NwznsgIhAPhmcFs73zrIuxV11H4q05iXDFCo3M%2B%2F687rkdj8nuOpKv8DCBcQABoMNjM3NDIzMTgzODA1IgzutowVd65sn6zT4sIq3ANbCZhBrQrBnjPVx0ZAThYOwN8EavWuXgD%2BKJHQbz8tLMY%2BQvvkM7KJaGZQdvkteb3FMmwVJ70lsG%2BaKlT9LrzKrVZK5Cs2D%2BMbMv1akKnbElv6G5TNWTsvTFVBmgfKC3NKuaZkJ4DXXLGCDiJ6cWpP%2Bo7ScKWVrrG3xe4t2iw5jObxcfAp76na5rIh4%2Fiqj%2Bgve376%2BjN36DIBVPOkhphxaiTtbYlTILz7%2BlJy4lBlxQ5Rs7eewnfZy1qmdT%2BMxv46lJ%2BV9GcOnpdn6zWDP5RtIyq4auNNuuhceRJoR%2FZ0gPyRKWWoGiiGjl4tcETx0Qfu4nfh5LPaMbCyfdbpfOHuX37VsDIKMzAejVUHcM4QVvvd9C5XxgH7lc%2BIrM5o9OzNbT%2F%2F5dfquHR3fmF8gZQsfXATi0HJVFRqavwRDcwyV6mgD5qHCmeQvd9hnf5FITBdoBJm9dMfYQOrIQW3s3mEBvYiSQCo2NWctKvAnU9S%2Bye2pGJhZmBObHkaJc2Tofj17lMM8qQWJwpwLWCyNjbIMAzhHNaUSApIMiTUqmF3G9YkAyB517wW1HDL5IDfw1ODDTf4MnzL6iXTbvHncpHiaVx7h5xrnRA6cIUgIzgJPhRZ%2FyFl5N6jre9OPTCszb%2B%2FBjqkAYhCC9bdf%2F5V%2B%2B1uOm%2BgOUiIxz2Lo4YsSva1GC6%2FAp3ckT4tsodjFI4B9hKUBJARLpYEgbH%2F2LbcodhBWKfYz8aGiL2cQKygJMcqkD0rkJYx4nDK48Spto%2FqKTpPwRLGjODoVzn8tI%2FjaN77zmbR%2BVoOMuaFHMbGjmPY7FNJO0M4FVBfIy0F9062%2BpocYpL3BdOXH1cxRzjgmVV083ms9BG0lTpr&X-Amz-Signature=8cbb6ef895dd7631d387c692c721264bb983c6328c8ac7e298ec08e5203ef7b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZTM7QWV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2u%2BOKhU%2BtanqULD7nHpWsMYOHnNCFeoloAis3NwznsgIhAPhmcFs73zrIuxV11H4q05iXDFCo3M%2B%2F687rkdj8nuOpKv8DCBcQABoMNjM3NDIzMTgzODA1IgzutowVd65sn6zT4sIq3ANbCZhBrQrBnjPVx0ZAThYOwN8EavWuXgD%2BKJHQbz8tLMY%2BQvvkM7KJaGZQdvkteb3FMmwVJ70lsG%2BaKlT9LrzKrVZK5Cs2D%2BMbMv1akKnbElv6G5TNWTsvTFVBmgfKC3NKuaZkJ4DXXLGCDiJ6cWpP%2Bo7ScKWVrrG3xe4t2iw5jObxcfAp76na5rIh4%2Fiqj%2Bgve376%2BjN36DIBVPOkhphxaiTtbYlTILz7%2BlJy4lBlxQ5Rs7eewnfZy1qmdT%2BMxv46lJ%2BV9GcOnpdn6zWDP5RtIyq4auNNuuhceRJoR%2FZ0gPyRKWWoGiiGjl4tcETx0Qfu4nfh5LPaMbCyfdbpfOHuX37VsDIKMzAejVUHcM4QVvvd9C5XxgH7lc%2BIrM5o9OzNbT%2F%2F5dfquHR3fmF8gZQsfXATi0HJVFRqavwRDcwyV6mgD5qHCmeQvd9hnf5FITBdoBJm9dMfYQOrIQW3s3mEBvYiSQCo2NWctKvAnU9S%2Bye2pGJhZmBObHkaJc2Tofj17lMM8qQWJwpwLWCyNjbIMAzhHNaUSApIMiTUqmF3G9YkAyB517wW1HDL5IDfw1ODDTf4MnzL6iXTbvHncpHiaVx7h5xrnRA6cIUgIzgJPhRZ%2FyFl5N6jre9OPTCszb%2B%2FBjqkAYhCC9bdf%2F5V%2B%2B1uOm%2BgOUiIxz2Lo4YsSva1GC6%2FAp3ckT4tsodjFI4B9hKUBJARLpYEgbH%2F2LbcodhBWKfYz8aGiL2cQKygJMcqkD0rkJYx4nDK48Spto%2FqKTpPwRLGjODoVzn8tI%2FjaN77zmbR%2BVoOMuaFHMbGjmPY7FNJO0M4FVBfIy0F9062%2BpocYpL3BdOXH1cxRzjgmVV083ms9BG0lTpr&X-Amz-Signature=12163b4c0afc5fd457785ea40dbc2a1436a8d8950a2d1469bb821a373948f4a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZTM7QWV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2u%2BOKhU%2BtanqULD7nHpWsMYOHnNCFeoloAis3NwznsgIhAPhmcFs73zrIuxV11H4q05iXDFCo3M%2B%2F687rkdj8nuOpKv8DCBcQABoMNjM3NDIzMTgzODA1IgzutowVd65sn6zT4sIq3ANbCZhBrQrBnjPVx0ZAThYOwN8EavWuXgD%2BKJHQbz8tLMY%2BQvvkM7KJaGZQdvkteb3FMmwVJ70lsG%2BaKlT9LrzKrVZK5Cs2D%2BMbMv1akKnbElv6G5TNWTsvTFVBmgfKC3NKuaZkJ4DXXLGCDiJ6cWpP%2Bo7ScKWVrrG3xe4t2iw5jObxcfAp76na5rIh4%2Fiqj%2Bgve376%2BjN36DIBVPOkhphxaiTtbYlTILz7%2BlJy4lBlxQ5Rs7eewnfZy1qmdT%2BMxv46lJ%2BV9GcOnpdn6zWDP5RtIyq4auNNuuhceRJoR%2FZ0gPyRKWWoGiiGjl4tcETx0Qfu4nfh5LPaMbCyfdbpfOHuX37VsDIKMzAejVUHcM4QVvvd9C5XxgH7lc%2BIrM5o9OzNbT%2F%2F5dfquHR3fmF8gZQsfXATi0HJVFRqavwRDcwyV6mgD5qHCmeQvd9hnf5FITBdoBJm9dMfYQOrIQW3s3mEBvYiSQCo2NWctKvAnU9S%2Bye2pGJhZmBObHkaJc2Tofj17lMM8qQWJwpwLWCyNjbIMAzhHNaUSApIMiTUqmF3G9YkAyB517wW1HDL5IDfw1ODDTf4MnzL6iXTbvHncpHiaVx7h5xrnRA6cIUgIzgJPhRZ%2FyFl5N6jre9OPTCszb%2B%2FBjqkAYhCC9bdf%2F5V%2B%2B1uOm%2BgOUiIxz2Lo4YsSva1GC6%2FAp3ckT4tsodjFI4B9hKUBJARLpYEgbH%2F2LbcodhBWKfYz8aGiL2cQKygJMcqkD0rkJYx4nDK48Spto%2FqKTpPwRLGjODoVzn8tI%2FjaN77zmbR%2BVoOMuaFHMbGjmPY7FNJO0M4FVBfIy0F9062%2BpocYpL3BdOXH1cxRzjgmVV083ms9BG0lTpr&X-Amz-Signature=9e246901a09edd9ad8f0fecb9318258f7fa57d6db870dbb8321aac8b9a0e5f56&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZTM7QWV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2u%2BOKhU%2BtanqULD7nHpWsMYOHnNCFeoloAis3NwznsgIhAPhmcFs73zrIuxV11H4q05iXDFCo3M%2B%2F687rkdj8nuOpKv8DCBcQABoMNjM3NDIzMTgzODA1IgzutowVd65sn6zT4sIq3ANbCZhBrQrBnjPVx0ZAThYOwN8EavWuXgD%2BKJHQbz8tLMY%2BQvvkM7KJaGZQdvkteb3FMmwVJ70lsG%2BaKlT9LrzKrVZK5Cs2D%2BMbMv1akKnbElv6G5TNWTsvTFVBmgfKC3NKuaZkJ4DXXLGCDiJ6cWpP%2Bo7ScKWVrrG3xe4t2iw5jObxcfAp76na5rIh4%2Fiqj%2Bgve376%2BjN36DIBVPOkhphxaiTtbYlTILz7%2BlJy4lBlxQ5Rs7eewnfZy1qmdT%2BMxv46lJ%2BV9GcOnpdn6zWDP5RtIyq4auNNuuhceRJoR%2FZ0gPyRKWWoGiiGjl4tcETx0Qfu4nfh5LPaMbCyfdbpfOHuX37VsDIKMzAejVUHcM4QVvvd9C5XxgH7lc%2BIrM5o9OzNbT%2F%2F5dfquHR3fmF8gZQsfXATi0HJVFRqavwRDcwyV6mgD5qHCmeQvd9hnf5FITBdoBJm9dMfYQOrIQW3s3mEBvYiSQCo2NWctKvAnU9S%2Bye2pGJhZmBObHkaJc2Tofj17lMM8qQWJwpwLWCyNjbIMAzhHNaUSApIMiTUqmF3G9YkAyB517wW1HDL5IDfw1ODDTf4MnzL6iXTbvHncpHiaVx7h5xrnRA6cIUgIzgJPhRZ%2FyFl5N6jre9OPTCszb%2B%2FBjqkAYhCC9bdf%2F5V%2B%2B1uOm%2BgOUiIxz2Lo4YsSva1GC6%2FAp3ckT4tsodjFI4B9hKUBJARLpYEgbH%2F2LbcodhBWKfYz8aGiL2cQKygJMcqkD0rkJYx4nDK48Spto%2FqKTpPwRLGjODoVzn8tI%2FjaN77zmbR%2BVoOMuaFHMbGjmPY7FNJO0M4FVBfIy0F9062%2BpocYpL3BdOXH1cxRzjgmVV083ms9BG0lTpr&X-Amz-Signature=cba919b55435b917d75f4b4d6a6117b54d4f51d1e1180da2528b02f336ca71ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZTM7QWV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2u%2BOKhU%2BtanqULD7nHpWsMYOHnNCFeoloAis3NwznsgIhAPhmcFs73zrIuxV11H4q05iXDFCo3M%2B%2F687rkdj8nuOpKv8DCBcQABoMNjM3NDIzMTgzODA1IgzutowVd65sn6zT4sIq3ANbCZhBrQrBnjPVx0ZAThYOwN8EavWuXgD%2BKJHQbz8tLMY%2BQvvkM7KJaGZQdvkteb3FMmwVJ70lsG%2BaKlT9LrzKrVZK5Cs2D%2BMbMv1akKnbElv6G5TNWTsvTFVBmgfKC3NKuaZkJ4DXXLGCDiJ6cWpP%2Bo7ScKWVrrG3xe4t2iw5jObxcfAp76na5rIh4%2Fiqj%2Bgve376%2BjN36DIBVPOkhphxaiTtbYlTILz7%2BlJy4lBlxQ5Rs7eewnfZy1qmdT%2BMxv46lJ%2BV9GcOnpdn6zWDP5RtIyq4auNNuuhceRJoR%2FZ0gPyRKWWoGiiGjl4tcETx0Qfu4nfh5LPaMbCyfdbpfOHuX37VsDIKMzAejVUHcM4QVvvd9C5XxgH7lc%2BIrM5o9OzNbT%2F%2F5dfquHR3fmF8gZQsfXATi0HJVFRqavwRDcwyV6mgD5qHCmeQvd9hnf5FITBdoBJm9dMfYQOrIQW3s3mEBvYiSQCo2NWctKvAnU9S%2Bye2pGJhZmBObHkaJc2Tofj17lMM8qQWJwpwLWCyNjbIMAzhHNaUSApIMiTUqmF3G9YkAyB517wW1HDL5IDfw1ODDTf4MnzL6iXTbvHncpHiaVx7h5xrnRA6cIUgIzgJPhRZ%2FyFl5N6jre9OPTCszb%2B%2FBjqkAYhCC9bdf%2F5V%2B%2B1uOm%2BgOUiIxz2Lo4YsSva1GC6%2FAp3ckT4tsodjFI4B9hKUBJARLpYEgbH%2F2LbcodhBWKfYz8aGiL2cQKygJMcqkD0rkJYx4nDK48Spto%2FqKTpPwRLGjODoVzn8tI%2FjaN77zmbR%2BVoOMuaFHMbGjmPY7FNJO0M4FVBfIy0F9062%2BpocYpL3BdOXH1cxRzjgmVV083ms9BG0lTpr&X-Amz-Signature=619c99a4136e15112bc0471a0cdb449c579ae7f792526f7187f1fda3566f0c2a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZTM7QWV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2u%2BOKhU%2BtanqULD7nHpWsMYOHnNCFeoloAis3NwznsgIhAPhmcFs73zrIuxV11H4q05iXDFCo3M%2B%2F687rkdj8nuOpKv8DCBcQABoMNjM3NDIzMTgzODA1IgzutowVd65sn6zT4sIq3ANbCZhBrQrBnjPVx0ZAThYOwN8EavWuXgD%2BKJHQbz8tLMY%2BQvvkM7KJaGZQdvkteb3FMmwVJ70lsG%2BaKlT9LrzKrVZK5Cs2D%2BMbMv1akKnbElv6G5TNWTsvTFVBmgfKC3NKuaZkJ4DXXLGCDiJ6cWpP%2Bo7ScKWVrrG3xe4t2iw5jObxcfAp76na5rIh4%2Fiqj%2Bgve376%2BjN36DIBVPOkhphxaiTtbYlTILz7%2BlJy4lBlxQ5Rs7eewnfZy1qmdT%2BMxv46lJ%2BV9GcOnpdn6zWDP5RtIyq4auNNuuhceRJoR%2FZ0gPyRKWWoGiiGjl4tcETx0Qfu4nfh5LPaMbCyfdbpfOHuX37VsDIKMzAejVUHcM4QVvvd9C5XxgH7lc%2BIrM5o9OzNbT%2F%2F5dfquHR3fmF8gZQsfXATi0HJVFRqavwRDcwyV6mgD5qHCmeQvd9hnf5FITBdoBJm9dMfYQOrIQW3s3mEBvYiSQCo2NWctKvAnU9S%2Bye2pGJhZmBObHkaJc2Tofj17lMM8qQWJwpwLWCyNjbIMAzhHNaUSApIMiTUqmF3G9YkAyB517wW1HDL5IDfw1ODDTf4MnzL6iXTbvHncpHiaVx7h5xrnRA6cIUgIzgJPhRZ%2FyFl5N6jre9OPTCszb%2B%2FBjqkAYhCC9bdf%2F5V%2B%2B1uOm%2BgOUiIxz2Lo4YsSva1GC6%2FAp3ckT4tsodjFI4B9hKUBJARLpYEgbH%2F2LbcodhBWKfYz8aGiL2cQKygJMcqkD0rkJYx4nDK48Spto%2FqKTpPwRLGjODoVzn8tI%2FjaN77zmbR%2BVoOMuaFHMbGjmPY7FNJO0M4FVBfIy0F9062%2BpocYpL3BdOXH1cxRzjgmVV083ms9BG0lTpr&X-Amz-Signature=81d645169f0adf2002bc3b7809adede79b55b23f97c23e2466b95b862efe5b32&X-Amz-SignedHeaders=host&x-id=GetObject)
