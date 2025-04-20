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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFDRINK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEsfR91%2Br9IJVvko9UqKEG2ktxzAQhvvhMZ7Bxtz8nd2AiEA19CpLRZ3oqbziACrXSU26l4D0xa5PRnwtIcNSJp6bosqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG81NkJQSfIznkai4SrcA5%2BOtZVVBy2ipj84CyuLIRPCg4RXRgF4R95IE27X4eMmX6FHbIhiZTeayqtM0VUK8seXYr028yEFo0Lgsfg7NrxTilxdGRtb1x6yeG3dnd6DjGRlnDcTUMefyZWVctuCRO3fC97uWH1xN4yjjApK2YBklF6HJpJWMjOiyqCjgz0ajpddFd9MDEzbXCIvqMScQ6a1d2APDBf7KnOJL%2BgiGAjOZCE0KkXQMWjzNxWtpdepQA%2F7M%2FIcZ6GNZ6IhnAGyoIRXRZhDDNvJBo%2F1n5XLwXiFViHFq%2FHQO6KJuzDnBs5E1sd6uIV3KFIiuUlX6qr%2Fzmznslh5o%2Fzo09yOBTEaQp2%2FO%2FQqlV1VWZKfrpg0C7Sa25IIQ9nPj0n4s0Ex7%2FF5FXYI6Lu%2BptMNHS8apfnZKwcnyqNlawRUb5PFjhlAZfh0rbI632Z6FpslbqM%2FBHJ8rzsJ6minDa3%2F9zZ%2FOITDq%2F66uHl4V4Yndvy5EFrrXGICNKk7rs7m%2F3%2FL97f4VT47iE4jeMqLdKxt2TSxpwe398SodP82XIqSvdMkkucY2q%2B4y3oIdHIi%2BiD9HyAYANj3VensEAPbN2Ni1y%2BlyBZRTHrA%2Fg36eaNVSXDT7brh48M94EEoQQPwSS86kACsMPGkksAGOqUBOWZw1gEjHU86Cw%2FPM5BlEpm0KF36F%2F7ezamCsoj6zj006mMZ6kTwrDjpuwTaDXfiVt6nAEi9qdnVkrIbDm3GcLvHvW7TLU6LKmYJ7fWBBGsMAd29gBc06efizxst1GoHGIJ8wTBCEZCehzzW0iar50PeZDh2i2XW3TfrHXXWNJd8Fw7wp%2FgMP0D4wXqr5CVDkttaNrxIRNoNwVU7mVzza%2BIDvLkc&X-Amz-Signature=a199a9e15990bcdcb88f6b3be8633d5c23937658b8d95344b92b352591a2e55c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFDRINK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEsfR91%2Br9IJVvko9UqKEG2ktxzAQhvvhMZ7Bxtz8nd2AiEA19CpLRZ3oqbziACrXSU26l4D0xa5PRnwtIcNSJp6bosqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG81NkJQSfIznkai4SrcA5%2BOtZVVBy2ipj84CyuLIRPCg4RXRgF4R95IE27X4eMmX6FHbIhiZTeayqtM0VUK8seXYr028yEFo0Lgsfg7NrxTilxdGRtb1x6yeG3dnd6DjGRlnDcTUMefyZWVctuCRO3fC97uWH1xN4yjjApK2YBklF6HJpJWMjOiyqCjgz0ajpddFd9MDEzbXCIvqMScQ6a1d2APDBf7KnOJL%2BgiGAjOZCE0KkXQMWjzNxWtpdepQA%2F7M%2FIcZ6GNZ6IhnAGyoIRXRZhDDNvJBo%2F1n5XLwXiFViHFq%2FHQO6KJuzDnBs5E1sd6uIV3KFIiuUlX6qr%2Fzmznslh5o%2Fzo09yOBTEaQp2%2FO%2FQqlV1VWZKfrpg0C7Sa25IIQ9nPj0n4s0Ex7%2FF5FXYI6Lu%2BptMNHS8apfnZKwcnyqNlawRUb5PFjhlAZfh0rbI632Z6FpslbqM%2FBHJ8rzsJ6minDa3%2F9zZ%2FOITDq%2F66uHl4V4Yndvy5EFrrXGICNKk7rs7m%2F3%2FL97f4VT47iE4jeMqLdKxt2TSxpwe398SodP82XIqSvdMkkucY2q%2B4y3oIdHIi%2BiD9HyAYANj3VensEAPbN2Ni1y%2BlyBZRTHrA%2Fg36eaNVSXDT7brh48M94EEoQQPwSS86kACsMPGkksAGOqUBOWZw1gEjHU86Cw%2FPM5BlEpm0KF36F%2F7ezamCsoj6zj006mMZ6kTwrDjpuwTaDXfiVt6nAEi9qdnVkrIbDm3GcLvHvW7TLU6LKmYJ7fWBBGsMAd29gBc06efizxst1GoHGIJ8wTBCEZCehzzW0iar50PeZDh2i2XW3TfrHXXWNJd8Fw7wp%2FgMP0D4wXqr5CVDkttaNrxIRNoNwVU7mVzza%2BIDvLkc&X-Amz-Signature=fb39cd4109224814ad8c288a908906476d39080d0cb9dff70c47ca0afb5e9dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFDRINK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEsfR91%2Br9IJVvko9UqKEG2ktxzAQhvvhMZ7Bxtz8nd2AiEA19CpLRZ3oqbziACrXSU26l4D0xa5PRnwtIcNSJp6bosqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG81NkJQSfIznkai4SrcA5%2BOtZVVBy2ipj84CyuLIRPCg4RXRgF4R95IE27X4eMmX6FHbIhiZTeayqtM0VUK8seXYr028yEFo0Lgsfg7NrxTilxdGRtb1x6yeG3dnd6DjGRlnDcTUMefyZWVctuCRO3fC97uWH1xN4yjjApK2YBklF6HJpJWMjOiyqCjgz0ajpddFd9MDEzbXCIvqMScQ6a1d2APDBf7KnOJL%2BgiGAjOZCE0KkXQMWjzNxWtpdepQA%2F7M%2FIcZ6GNZ6IhnAGyoIRXRZhDDNvJBo%2F1n5XLwXiFViHFq%2FHQO6KJuzDnBs5E1sd6uIV3KFIiuUlX6qr%2Fzmznslh5o%2Fzo09yOBTEaQp2%2FO%2FQqlV1VWZKfrpg0C7Sa25IIQ9nPj0n4s0Ex7%2FF5FXYI6Lu%2BptMNHS8apfnZKwcnyqNlawRUb5PFjhlAZfh0rbI632Z6FpslbqM%2FBHJ8rzsJ6minDa3%2F9zZ%2FOITDq%2F66uHl4V4Yndvy5EFrrXGICNKk7rs7m%2F3%2FL97f4VT47iE4jeMqLdKxt2TSxpwe398SodP82XIqSvdMkkucY2q%2B4y3oIdHIi%2BiD9HyAYANj3VensEAPbN2Ni1y%2BlyBZRTHrA%2Fg36eaNVSXDT7brh48M94EEoQQPwSS86kACsMPGkksAGOqUBOWZw1gEjHU86Cw%2FPM5BlEpm0KF36F%2F7ezamCsoj6zj006mMZ6kTwrDjpuwTaDXfiVt6nAEi9qdnVkrIbDm3GcLvHvW7TLU6LKmYJ7fWBBGsMAd29gBc06efizxst1GoHGIJ8wTBCEZCehzzW0iar50PeZDh2i2XW3TfrHXXWNJd8Fw7wp%2FgMP0D4wXqr5CVDkttaNrxIRNoNwVU7mVzza%2BIDvLkc&X-Amz-Signature=ff314def7c49a17ee95ef0b0f05a63c6aa46d90713382e9f959bcb4501a29e8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFDRINK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEsfR91%2Br9IJVvko9UqKEG2ktxzAQhvvhMZ7Bxtz8nd2AiEA19CpLRZ3oqbziACrXSU26l4D0xa5PRnwtIcNSJp6bosqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG81NkJQSfIznkai4SrcA5%2BOtZVVBy2ipj84CyuLIRPCg4RXRgF4R95IE27X4eMmX6FHbIhiZTeayqtM0VUK8seXYr028yEFo0Lgsfg7NrxTilxdGRtb1x6yeG3dnd6DjGRlnDcTUMefyZWVctuCRO3fC97uWH1xN4yjjApK2YBklF6HJpJWMjOiyqCjgz0ajpddFd9MDEzbXCIvqMScQ6a1d2APDBf7KnOJL%2BgiGAjOZCE0KkXQMWjzNxWtpdepQA%2F7M%2FIcZ6GNZ6IhnAGyoIRXRZhDDNvJBo%2F1n5XLwXiFViHFq%2FHQO6KJuzDnBs5E1sd6uIV3KFIiuUlX6qr%2Fzmznslh5o%2Fzo09yOBTEaQp2%2FO%2FQqlV1VWZKfrpg0C7Sa25IIQ9nPj0n4s0Ex7%2FF5FXYI6Lu%2BptMNHS8apfnZKwcnyqNlawRUb5PFjhlAZfh0rbI632Z6FpslbqM%2FBHJ8rzsJ6minDa3%2F9zZ%2FOITDq%2F66uHl4V4Yndvy5EFrrXGICNKk7rs7m%2F3%2FL97f4VT47iE4jeMqLdKxt2TSxpwe398SodP82XIqSvdMkkucY2q%2B4y3oIdHIi%2BiD9HyAYANj3VensEAPbN2Ni1y%2BlyBZRTHrA%2Fg36eaNVSXDT7brh48M94EEoQQPwSS86kACsMPGkksAGOqUBOWZw1gEjHU86Cw%2FPM5BlEpm0KF36F%2F7ezamCsoj6zj006mMZ6kTwrDjpuwTaDXfiVt6nAEi9qdnVkrIbDm3GcLvHvW7TLU6LKmYJ7fWBBGsMAd29gBc06efizxst1GoHGIJ8wTBCEZCehzzW0iar50PeZDh2i2XW3TfrHXXWNJd8Fw7wp%2FgMP0D4wXqr5CVDkttaNrxIRNoNwVU7mVzza%2BIDvLkc&X-Amz-Signature=4054e8321bd8b68f6799cafe3c6cc4c4b35a8ab497a1ed49bb0c3d18feaa298d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFDRINK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEsfR91%2Br9IJVvko9UqKEG2ktxzAQhvvhMZ7Bxtz8nd2AiEA19CpLRZ3oqbziACrXSU26l4D0xa5PRnwtIcNSJp6bosqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG81NkJQSfIznkai4SrcA5%2BOtZVVBy2ipj84CyuLIRPCg4RXRgF4R95IE27X4eMmX6FHbIhiZTeayqtM0VUK8seXYr028yEFo0Lgsfg7NrxTilxdGRtb1x6yeG3dnd6DjGRlnDcTUMefyZWVctuCRO3fC97uWH1xN4yjjApK2YBklF6HJpJWMjOiyqCjgz0ajpddFd9MDEzbXCIvqMScQ6a1d2APDBf7KnOJL%2BgiGAjOZCE0KkXQMWjzNxWtpdepQA%2F7M%2FIcZ6GNZ6IhnAGyoIRXRZhDDNvJBo%2F1n5XLwXiFViHFq%2FHQO6KJuzDnBs5E1sd6uIV3KFIiuUlX6qr%2Fzmznslh5o%2Fzo09yOBTEaQp2%2FO%2FQqlV1VWZKfrpg0C7Sa25IIQ9nPj0n4s0Ex7%2FF5FXYI6Lu%2BptMNHS8apfnZKwcnyqNlawRUb5PFjhlAZfh0rbI632Z6FpslbqM%2FBHJ8rzsJ6minDa3%2F9zZ%2FOITDq%2F66uHl4V4Yndvy5EFrrXGICNKk7rs7m%2F3%2FL97f4VT47iE4jeMqLdKxt2TSxpwe398SodP82XIqSvdMkkucY2q%2B4y3oIdHIi%2BiD9HyAYANj3VensEAPbN2Ni1y%2BlyBZRTHrA%2Fg36eaNVSXDT7brh48M94EEoQQPwSS86kACsMPGkksAGOqUBOWZw1gEjHU86Cw%2FPM5BlEpm0KF36F%2F7ezamCsoj6zj006mMZ6kTwrDjpuwTaDXfiVt6nAEi9qdnVkrIbDm3GcLvHvW7TLU6LKmYJ7fWBBGsMAd29gBc06efizxst1GoHGIJ8wTBCEZCehzzW0iar50PeZDh2i2XW3TfrHXXWNJd8Fw7wp%2FgMP0D4wXqr5CVDkttaNrxIRNoNwVU7mVzza%2BIDvLkc&X-Amz-Signature=62800b17da595a3e487b9d4aa07ad80c48c15af33f5b7493dd1fc72568c37c80&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFDRINK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEsfR91%2Br9IJVvko9UqKEG2ktxzAQhvvhMZ7Bxtz8nd2AiEA19CpLRZ3oqbziACrXSU26l4D0xa5PRnwtIcNSJp6bosqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG81NkJQSfIznkai4SrcA5%2BOtZVVBy2ipj84CyuLIRPCg4RXRgF4R95IE27X4eMmX6FHbIhiZTeayqtM0VUK8seXYr028yEFo0Lgsfg7NrxTilxdGRtb1x6yeG3dnd6DjGRlnDcTUMefyZWVctuCRO3fC97uWH1xN4yjjApK2YBklF6HJpJWMjOiyqCjgz0ajpddFd9MDEzbXCIvqMScQ6a1d2APDBf7KnOJL%2BgiGAjOZCE0KkXQMWjzNxWtpdepQA%2F7M%2FIcZ6GNZ6IhnAGyoIRXRZhDDNvJBo%2F1n5XLwXiFViHFq%2FHQO6KJuzDnBs5E1sd6uIV3KFIiuUlX6qr%2Fzmznslh5o%2Fzo09yOBTEaQp2%2FO%2FQqlV1VWZKfrpg0C7Sa25IIQ9nPj0n4s0Ex7%2FF5FXYI6Lu%2BptMNHS8apfnZKwcnyqNlawRUb5PFjhlAZfh0rbI632Z6FpslbqM%2FBHJ8rzsJ6minDa3%2F9zZ%2FOITDq%2F66uHl4V4Yndvy5EFrrXGICNKk7rs7m%2F3%2FL97f4VT47iE4jeMqLdKxt2TSxpwe398SodP82XIqSvdMkkucY2q%2B4y3oIdHIi%2BiD9HyAYANj3VensEAPbN2Ni1y%2BlyBZRTHrA%2Fg36eaNVSXDT7brh48M94EEoQQPwSS86kACsMPGkksAGOqUBOWZw1gEjHU86Cw%2FPM5BlEpm0KF36F%2F7ezamCsoj6zj006mMZ6kTwrDjpuwTaDXfiVt6nAEi9qdnVkrIbDm3GcLvHvW7TLU6LKmYJ7fWBBGsMAd29gBc06efizxst1GoHGIJ8wTBCEZCehzzW0iar50PeZDh2i2XW3TfrHXXWNJd8Fw7wp%2FgMP0D4wXqr5CVDkttaNrxIRNoNwVU7mVzza%2BIDvLkc&X-Amz-Signature=8b0dbdcb1f138ae067a3f60a04fefda51c0e4fe39b615dd131cbc4eb2ed4730e&X-Amz-SignedHeaders=host&x-id=GetObject)
