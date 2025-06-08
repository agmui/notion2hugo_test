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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU53Z4P6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWg%2BCvwHcgVrKq0CnhqIAlPdxTecw5CSa82BfePAWLLAiBm%2F0EB5xCWNmnNfLC0%2B%2FeLHzKVjHKlBXLBYsT1RDZz9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8rl9Sp7zpSlh8bRKtwDb5cPw0UdO8TMbxgM1nOiL2rZ5OhB7sgQywR0bBIOvUcRfuvHYpVnKckWJD8sHfXST53VE7ZoiKcY1xXkviFeREVlB2SBoUmouhVg7aBs7NDRxXV3KEoWfQDytiiCzk7Dy2OD4OFXxtCMzH3SAX%2BUSn1Wid8mAoL2forscVr7850s1PX6QQT9mmfYDA3IU0xITNrXlAJ0OBG%2FICOLk%2Bc0zqObyGAVfO6rZzpMTaTfmAshnvO%2F1YXeRekNCeg9jf%2BxCujeSEZUBp%2FcpOStF%2FHuhpIdn%2FiV1pYf3%2FwzG%2BEBrE6Th6HYxKZe9PebYDbfK1evzFFVZQkEuArkje3l0C8IdhHeReq41e3ORDtNrXpk7he040M4lFdvfNG8dJh7EbwtXtRaterZf9Ora%2BNCf1G1DXeOaqcER3VcBTQlrEB2h6CWnRxP%2F8CFjO5G5UShvjJKHGqzpsSSCGFyo6M9VtqmtJ0iCU%2FEK9v4Rdzx%2BZgCLiwptgbR489mcKiry0ywjIjrVkdop%2FGM7Fia7QmXJcF3rM4fAeFW%2FQKynbLUJCpaf8VVVVR8YVzbVfrgYZzd%2FnMyJramw4XMkUlKTnVuKpWYs%2FylIVdQgGZ%2BV31A11SUsVCTz1WUxHuepCYIYBEwiJ2TwgY6pgEx3S0mBfACFfb81A9c8nux4wvLMzkYvQiw8HxaqIvz6OUHZ7wGzlAowhwUlZhPIvvEkQfReoRULMQZm%2B9DraXnIGevgVJdfCSqzHVgVpYH7hNbOBEFK29xhJ9ubWz4TFVI43RvB91S0YvQOA4dPbWIB%2Bp1EbVE2csBGnt4nOG92L31RKrpeHfVyKOeMdGJoUtaL3SFzl%2BOjMVCnNPaxqZL5iaPs6vS&X-Amz-Signature=7ed6eb9fb3f3548c104e06998df89d8c7bd5e675637246c0846f4bbc6d9ab93b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU53Z4P6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWg%2BCvwHcgVrKq0CnhqIAlPdxTecw5CSa82BfePAWLLAiBm%2F0EB5xCWNmnNfLC0%2B%2FeLHzKVjHKlBXLBYsT1RDZz9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8rl9Sp7zpSlh8bRKtwDb5cPw0UdO8TMbxgM1nOiL2rZ5OhB7sgQywR0bBIOvUcRfuvHYpVnKckWJD8sHfXST53VE7ZoiKcY1xXkviFeREVlB2SBoUmouhVg7aBs7NDRxXV3KEoWfQDytiiCzk7Dy2OD4OFXxtCMzH3SAX%2BUSn1Wid8mAoL2forscVr7850s1PX6QQT9mmfYDA3IU0xITNrXlAJ0OBG%2FICOLk%2Bc0zqObyGAVfO6rZzpMTaTfmAshnvO%2F1YXeRekNCeg9jf%2BxCujeSEZUBp%2FcpOStF%2FHuhpIdn%2FiV1pYf3%2FwzG%2BEBrE6Th6HYxKZe9PebYDbfK1evzFFVZQkEuArkje3l0C8IdhHeReq41e3ORDtNrXpk7he040M4lFdvfNG8dJh7EbwtXtRaterZf9Ora%2BNCf1G1DXeOaqcER3VcBTQlrEB2h6CWnRxP%2F8CFjO5G5UShvjJKHGqzpsSSCGFyo6M9VtqmtJ0iCU%2FEK9v4Rdzx%2BZgCLiwptgbR489mcKiry0ywjIjrVkdop%2FGM7Fia7QmXJcF3rM4fAeFW%2FQKynbLUJCpaf8VVVVR8YVzbVfrgYZzd%2FnMyJramw4XMkUlKTnVuKpWYs%2FylIVdQgGZ%2BV31A11SUsVCTz1WUxHuepCYIYBEwiJ2TwgY6pgEx3S0mBfACFfb81A9c8nux4wvLMzkYvQiw8HxaqIvz6OUHZ7wGzlAowhwUlZhPIvvEkQfReoRULMQZm%2B9DraXnIGevgVJdfCSqzHVgVpYH7hNbOBEFK29xhJ9ubWz4TFVI43RvB91S0YvQOA4dPbWIB%2Bp1EbVE2csBGnt4nOG92L31RKrpeHfVyKOeMdGJoUtaL3SFzl%2BOjMVCnNPaxqZL5iaPs6vS&X-Amz-Signature=66fc6a79e338f3197cd0862756d414cb05e4bd45261de40c5b05a82721fe9452&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU53Z4P6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWg%2BCvwHcgVrKq0CnhqIAlPdxTecw5CSa82BfePAWLLAiBm%2F0EB5xCWNmnNfLC0%2B%2FeLHzKVjHKlBXLBYsT1RDZz9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8rl9Sp7zpSlh8bRKtwDb5cPw0UdO8TMbxgM1nOiL2rZ5OhB7sgQywR0bBIOvUcRfuvHYpVnKckWJD8sHfXST53VE7ZoiKcY1xXkviFeREVlB2SBoUmouhVg7aBs7NDRxXV3KEoWfQDytiiCzk7Dy2OD4OFXxtCMzH3SAX%2BUSn1Wid8mAoL2forscVr7850s1PX6QQT9mmfYDA3IU0xITNrXlAJ0OBG%2FICOLk%2Bc0zqObyGAVfO6rZzpMTaTfmAshnvO%2F1YXeRekNCeg9jf%2BxCujeSEZUBp%2FcpOStF%2FHuhpIdn%2FiV1pYf3%2FwzG%2BEBrE6Th6HYxKZe9PebYDbfK1evzFFVZQkEuArkje3l0C8IdhHeReq41e3ORDtNrXpk7he040M4lFdvfNG8dJh7EbwtXtRaterZf9Ora%2BNCf1G1DXeOaqcER3VcBTQlrEB2h6CWnRxP%2F8CFjO5G5UShvjJKHGqzpsSSCGFyo6M9VtqmtJ0iCU%2FEK9v4Rdzx%2BZgCLiwptgbR489mcKiry0ywjIjrVkdop%2FGM7Fia7QmXJcF3rM4fAeFW%2FQKynbLUJCpaf8VVVVR8YVzbVfrgYZzd%2FnMyJramw4XMkUlKTnVuKpWYs%2FylIVdQgGZ%2BV31A11SUsVCTz1WUxHuepCYIYBEwiJ2TwgY6pgEx3S0mBfACFfb81A9c8nux4wvLMzkYvQiw8HxaqIvz6OUHZ7wGzlAowhwUlZhPIvvEkQfReoRULMQZm%2B9DraXnIGevgVJdfCSqzHVgVpYH7hNbOBEFK29xhJ9ubWz4TFVI43RvB91S0YvQOA4dPbWIB%2Bp1EbVE2csBGnt4nOG92L31RKrpeHfVyKOeMdGJoUtaL3SFzl%2BOjMVCnNPaxqZL5iaPs6vS&X-Amz-Signature=a3faf348fb93a79ae0e6c47aee4ef3e328d010241746df9c4181d67928ffc114&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU53Z4P6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWg%2BCvwHcgVrKq0CnhqIAlPdxTecw5CSa82BfePAWLLAiBm%2F0EB5xCWNmnNfLC0%2B%2FeLHzKVjHKlBXLBYsT1RDZz9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8rl9Sp7zpSlh8bRKtwDb5cPw0UdO8TMbxgM1nOiL2rZ5OhB7sgQywR0bBIOvUcRfuvHYpVnKckWJD8sHfXST53VE7ZoiKcY1xXkviFeREVlB2SBoUmouhVg7aBs7NDRxXV3KEoWfQDytiiCzk7Dy2OD4OFXxtCMzH3SAX%2BUSn1Wid8mAoL2forscVr7850s1PX6QQT9mmfYDA3IU0xITNrXlAJ0OBG%2FICOLk%2Bc0zqObyGAVfO6rZzpMTaTfmAshnvO%2F1YXeRekNCeg9jf%2BxCujeSEZUBp%2FcpOStF%2FHuhpIdn%2FiV1pYf3%2FwzG%2BEBrE6Th6HYxKZe9PebYDbfK1evzFFVZQkEuArkje3l0C8IdhHeReq41e3ORDtNrXpk7he040M4lFdvfNG8dJh7EbwtXtRaterZf9Ora%2BNCf1G1DXeOaqcER3VcBTQlrEB2h6CWnRxP%2F8CFjO5G5UShvjJKHGqzpsSSCGFyo6M9VtqmtJ0iCU%2FEK9v4Rdzx%2BZgCLiwptgbR489mcKiry0ywjIjrVkdop%2FGM7Fia7QmXJcF3rM4fAeFW%2FQKynbLUJCpaf8VVVVR8YVzbVfrgYZzd%2FnMyJramw4XMkUlKTnVuKpWYs%2FylIVdQgGZ%2BV31A11SUsVCTz1WUxHuepCYIYBEwiJ2TwgY6pgEx3S0mBfACFfb81A9c8nux4wvLMzkYvQiw8HxaqIvz6OUHZ7wGzlAowhwUlZhPIvvEkQfReoRULMQZm%2B9DraXnIGevgVJdfCSqzHVgVpYH7hNbOBEFK29xhJ9ubWz4TFVI43RvB91S0YvQOA4dPbWIB%2Bp1EbVE2csBGnt4nOG92L31RKrpeHfVyKOeMdGJoUtaL3SFzl%2BOjMVCnNPaxqZL5iaPs6vS&X-Amz-Signature=3cbc41dc47757598f58bc6bfe98953d3313ad05849190467b2d7685663359952&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU53Z4P6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWg%2BCvwHcgVrKq0CnhqIAlPdxTecw5CSa82BfePAWLLAiBm%2F0EB5xCWNmnNfLC0%2B%2FeLHzKVjHKlBXLBYsT1RDZz9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8rl9Sp7zpSlh8bRKtwDb5cPw0UdO8TMbxgM1nOiL2rZ5OhB7sgQywR0bBIOvUcRfuvHYpVnKckWJD8sHfXST53VE7ZoiKcY1xXkviFeREVlB2SBoUmouhVg7aBs7NDRxXV3KEoWfQDytiiCzk7Dy2OD4OFXxtCMzH3SAX%2BUSn1Wid8mAoL2forscVr7850s1PX6QQT9mmfYDA3IU0xITNrXlAJ0OBG%2FICOLk%2Bc0zqObyGAVfO6rZzpMTaTfmAshnvO%2F1YXeRekNCeg9jf%2BxCujeSEZUBp%2FcpOStF%2FHuhpIdn%2FiV1pYf3%2FwzG%2BEBrE6Th6HYxKZe9PebYDbfK1evzFFVZQkEuArkje3l0C8IdhHeReq41e3ORDtNrXpk7he040M4lFdvfNG8dJh7EbwtXtRaterZf9Ora%2BNCf1G1DXeOaqcER3VcBTQlrEB2h6CWnRxP%2F8CFjO5G5UShvjJKHGqzpsSSCGFyo6M9VtqmtJ0iCU%2FEK9v4Rdzx%2BZgCLiwptgbR489mcKiry0ywjIjrVkdop%2FGM7Fia7QmXJcF3rM4fAeFW%2FQKynbLUJCpaf8VVVVR8YVzbVfrgYZzd%2FnMyJramw4XMkUlKTnVuKpWYs%2FylIVdQgGZ%2BV31A11SUsVCTz1WUxHuepCYIYBEwiJ2TwgY6pgEx3S0mBfACFfb81A9c8nux4wvLMzkYvQiw8HxaqIvz6OUHZ7wGzlAowhwUlZhPIvvEkQfReoRULMQZm%2B9DraXnIGevgVJdfCSqzHVgVpYH7hNbOBEFK29xhJ9ubWz4TFVI43RvB91S0YvQOA4dPbWIB%2Bp1EbVE2csBGnt4nOG92L31RKrpeHfVyKOeMdGJoUtaL3SFzl%2BOjMVCnNPaxqZL5iaPs6vS&X-Amz-Signature=90a6f96c496d4c655f725cd996b1ff2dcad2d1ca822f962c5a54491a0cf66a09&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU53Z4P6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWg%2BCvwHcgVrKq0CnhqIAlPdxTecw5CSa82BfePAWLLAiBm%2F0EB5xCWNmnNfLC0%2B%2FeLHzKVjHKlBXLBYsT1RDZz9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8rl9Sp7zpSlh8bRKtwDb5cPw0UdO8TMbxgM1nOiL2rZ5OhB7sgQywR0bBIOvUcRfuvHYpVnKckWJD8sHfXST53VE7ZoiKcY1xXkviFeREVlB2SBoUmouhVg7aBs7NDRxXV3KEoWfQDytiiCzk7Dy2OD4OFXxtCMzH3SAX%2BUSn1Wid8mAoL2forscVr7850s1PX6QQT9mmfYDA3IU0xITNrXlAJ0OBG%2FICOLk%2Bc0zqObyGAVfO6rZzpMTaTfmAshnvO%2F1YXeRekNCeg9jf%2BxCujeSEZUBp%2FcpOStF%2FHuhpIdn%2FiV1pYf3%2FwzG%2BEBrE6Th6HYxKZe9PebYDbfK1evzFFVZQkEuArkje3l0C8IdhHeReq41e3ORDtNrXpk7he040M4lFdvfNG8dJh7EbwtXtRaterZf9Ora%2BNCf1G1DXeOaqcER3VcBTQlrEB2h6CWnRxP%2F8CFjO5G5UShvjJKHGqzpsSSCGFyo6M9VtqmtJ0iCU%2FEK9v4Rdzx%2BZgCLiwptgbR489mcKiry0ywjIjrVkdop%2FGM7Fia7QmXJcF3rM4fAeFW%2FQKynbLUJCpaf8VVVVR8YVzbVfrgYZzd%2FnMyJramw4XMkUlKTnVuKpWYs%2FylIVdQgGZ%2BV31A11SUsVCTz1WUxHuepCYIYBEwiJ2TwgY6pgEx3S0mBfACFfb81A9c8nux4wvLMzkYvQiw8HxaqIvz6OUHZ7wGzlAowhwUlZhPIvvEkQfReoRULMQZm%2B9DraXnIGevgVJdfCSqzHVgVpYH7hNbOBEFK29xhJ9ubWz4TFVI43RvB91S0YvQOA4dPbWIB%2Bp1EbVE2csBGnt4nOG92L31RKrpeHfVyKOeMdGJoUtaL3SFzl%2BOjMVCnNPaxqZL5iaPs6vS&X-Amz-Signature=20385814fcaa19145c0d8c3519e792f519aec0ed57239842b0a3a24bf1462fb9&X-Amz-SignedHeaders=host&x-id=GetObject)
