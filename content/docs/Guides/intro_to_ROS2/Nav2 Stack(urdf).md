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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3HTTA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUu1o2q3aBv%2Fe4o6SxZ5wYaFejT%2BnrauvCN8XLewia%2BwIgFWbPJ6V6stBjDJRNzBzhTycZnb5Y1JOAt%2FYgg93m9W4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOzyKFiL81JXlcT8GyrcAzWvMD9QqeWJoT4%2BMXJrPatvwuyBqEAYXXXBeGQG2HwESPGwQv0nSVOwYZ%2Bwq4zkVqOM6bkJJmut804DevGYGgl1OzC9L5B%2Fsr4ZJxpILhxvxojxht1aIkeCr%2FsKj9dqoiERNge%2Fa05X11TMyUZEh9bOm1snK7Zuwp7H7wsQqS2BwlZ4zT3DdDyANKznhio7vHi%2F9V982gppOBjQJEPQrTkUXVtJED9goRz7stwAOdGaoH286GQK2m8sRc5gAMVcgIclikxTtAF6Zkl7gVLZqtN%2B72LUmVvlhdvZpYmF8apbjmEdhaxGZ1kCVTZ2fj%2B5%2B9Kk293rq0s3GN7onFtzG%2BUaBX6vn%2Bc1F1ILmHrl8BIZyxNNLMdwpU5cWdx3WkR90FVqZn4mNxc9gh32vWW%2B%2FwaR2vjo5tN5WNOnS9s7o7V2fqHxMrNIjtHLk9jSD4wss4ITlyOxZ6j2Ad0QQW2oV6BTA7EALi3hiJ51DtTrijEahTKe3KT6iSBwpIYqnPjydcUuD5jZsnGaGgybB638vNnieDrCBeFlguzvO6HxKJHBJGeIuXQZTw62RBPgS9P7eTZlYz5A9ScAGLaSEpEw%2BjfU7Cu%2BNB7JNYsZzGww6IH2SkW1B3is5bOi398hMKGh9r0GOqUB530cL4%2Ff%2FSrojIw73j4l9%2BtRNP4lhzfJPgwy%2FZXs%2F9%2BOb%2B%2FbazGtQhzNYjkdZ12Y9oZ2SyQg9i8C%2B9MVuYd4r8q3qGeispGTL5cXHUn1YcI0PdnJvbIQpEnnXuvuH7Dj7S8kCCG6%2B3FKPDb7HLOsf%2BjCXO57je74BmWTqzckQ%2FhFE3Ho%2F2zDYcRSI%2BhA%2BxPtEpgWFZb6GoF02gmrmmlz1GRJD%2BKX&X-Amz-Signature=f7bbe026019f45adc5019cf6254cdf32cd52a5370aeb009278f4226e24c1a92e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3HTTA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUu1o2q3aBv%2Fe4o6SxZ5wYaFejT%2BnrauvCN8XLewia%2BwIgFWbPJ6V6stBjDJRNzBzhTycZnb5Y1JOAt%2FYgg93m9W4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOzyKFiL81JXlcT8GyrcAzWvMD9QqeWJoT4%2BMXJrPatvwuyBqEAYXXXBeGQG2HwESPGwQv0nSVOwYZ%2Bwq4zkVqOM6bkJJmut804DevGYGgl1OzC9L5B%2Fsr4ZJxpILhxvxojxht1aIkeCr%2FsKj9dqoiERNge%2Fa05X11TMyUZEh9bOm1snK7Zuwp7H7wsQqS2BwlZ4zT3DdDyANKznhio7vHi%2F9V982gppOBjQJEPQrTkUXVtJED9goRz7stwAOdGaoH286GQK2m8sRc5gAMVcgIclikxTtAF6Zkl7gVLZqtN%2B72LUmVvlhdvZpYmF8apbjmEdhaxGZ1kCVTZ2fj%2B5%2B9Kk293rq0s3GN7onFtzG%2BUaBX6vn%2Bc1F1ILmHrl8BIZyxNNLMdwpU5cWdx3WkR90FVqZn4mNxc9gh32vWW%2B%2FwaR2vjo5tN5WNOnS9s7o7V2fqHxMrNIjtHLk9jSD4wss4ITlyOxZ6j2Ad0QQW2oV6BTA7EALi3hiJ51DtTrijEahTKe3KT6iSBwpIYqnPjydcUuD5jZsnGaGgybB638vNnieDrCBeFlguzvO6HxKJHBJGeIuXQZTw62RBPgS9P7eTZlYz5A9ScAGLaSEpEw%2BjfU7Cu%2BNB7JNYsZzGww6IH2SkW1B3is5bOi398hMKGh9r0GOqUB530cL4%2Ff%2FSrojIw73j4l9%2BtRNP4lhzfJPgwy%2FZXs%2F9%2BOb%2B%2FbazGtQhzNYjkdZ12Y9oZ2SyQg9i8C%2B9MVuYd4r8q3qGeispGTL5cXHUn1YcI0PdnJvbIQpEnnXuvuH7Dj7S8kCCG6%2B3FKPDb7HLOsf%2BjCXO57je74BmWTqzckQ%2FhFE3Ho%2F2zDYcRSI%2BhA%2BxPtEpgWFZb6GoF02gmrmmlz1GRJD%2BKX&X-Amz-Signature=e3e8c7fdb47256aeb5468812bf4679ca27d242a76229feb45bc647c42182c812&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3HTTA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUu1o2q3aBv%2Fe4o6SxZ5wYaFejT%2BnrauvCN8XLewia%2BwIgFWbPJ6V6stBjDJRNzBzhTycZnb5Y1JOAt%2FYgg93m9W4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOzyKFiL81JXlcT8GyrcAzWvMD9QqeWJoT4%2BMXJrPatvwuyBqEAYXXXBeGQG2HwESPGwQv0nSVOwYZ%2Bwq4zkVqOM6bkJJmut804DevGYGgl1OzC9L5B%2Fsr4ZJxpILhxvxojxht1aIkeCr%2FsKj9dqoiERNge%2Fa05X11TMyUZEh9bOm1snK7Zuwp7H7wsQqS2BwlZ4zT3DdDyANKznhio7vHi%2F9V982gppOBjQJEPQrTkUXVtJED9goRz7stwAOdGaoH286GQK2m8sRc5gAMVcgIclikxTtAF6Zkl7gVLZqtN%2B72LUmVvlhdvZpYmF8apbjmEdhaxGZ1kCVTZ2fj%2B5%2B9Kk293rq0s3GN7onFtzG%2BUaBX6vn%2Bc1F1ILmHrl8BIZyxNNLMdwpU5cWdx3WkR90FVqZn4mNxc9gh32vWW%2B%2FwaR2vjo5tN5WNOnS9s7o7V2fqHxMrNIjtHLk9jSD4wss4ITlyOxZ6j2Ad0QQW2oV6BTA7EALi3hiJ51DtTrijEahTKe3KT6iSBwpIYqnPjydcUuD5jZsnGaGgybB638vNnieDrCBeFlguzvO6HxKJHBJGeIuXQZTw62RBPgS9P7eTZlYz5A9ScAGLaSEpEw%2BjfU7Cu%2BNB7JNYsZzGww6IH2SkW1B3is5bOi398hMKGh9r0GOqUB530cL4%2Ff%2FSrojIw73j4l9%2BtRNP4lhzfJPgwy%2FZXs%2F9%2BOb%2B%2FbazGtQhzNYjkdZ12Y9oZ2SyQg9i8C%2B9MVuYd4r8q3qGeispGTL5cXHUn1YcI0PdnJvbIQpEnnXuvuH7Dj7S8kCCG6%2B3FKPDb7HLOsf%2BjCXO57je74BmWTqzckQ%2FhFE3Ho%2F2zDYcRSI%2BhA%2BxPtEpgWFZb6GoF02gmrmmlz1GRJD%2BKX&X-Amz-Signature=cf8991fc628d3533088532b01c2a49454a4a42150791f0029a2c0d85888137fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3HTTA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUu1o2q3aBv%2Fe4o6SxZ5wYaFejT%2BnrauvCN8XLewia%2BwIgFWbPJ6V6stBjDJRNzBzhTycZnb5Y1JOAt%2FYgg93m9W4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOzyKFiL81JXlcT8GyrcAzWvMD9QqeWJoT4%2BMXJrPatvwuyBqEAYXXXBeGQG2HwESPGwQv0nSVOwYZ%2Bwq4zkVqOM6bkJJmut804DevGYGgl1OzC9L5B%2Fsr4ZJxpILhxvxojxht1aIkeCr%2FsKj9dqoiERNge%2Fa05X11TMyUZEh9bOm1snK7Zuwp7H7wsQqS2BwlZ4zT3DdDyANKznhio7vHi%2F9V982gppOBjQJEPQrTkUXVtJED9goRz7stwAOdGaoH286GQK2m8sRc5gAMVcgIclikxTtAF6Zkl7gVLZqtN%2B72LUmVvlhdvZpYmF8apbjmEdhaxGZ1kCVTZ2fj%2B5%2B9Kk293rq0s3GN7onFtzG%2BUaBX6vn%2Bc1F1ILmHrl8BIZyxNNLMdwpU5cWdx3WkR90FVqZn4mNxc9gh32vWW%2B%2FwaR2vjo5tN5WNOnS9s7o7V2fqHxMrNIjtHLk9jSD4wss4ITlyOxZ6j2Ad0QQW2oV6BTA7EALi3hiJ51DtTrijEahTKe3KT6iSBwpIYqnPjydcUuD5jZsnGaGgybB638vNnieDrCBeFlguzvO6HxKJHBJGeIuXQZTw62RBPgS9P7eTZlYz5A9ScAGLaSEpEw%2BjfU7Cu%2BNB7JNYsZzGww6IH2SkW1B3is5bOi398hMKGh9r0GOqUB530cL4%2Ff%2FSrojIw73j4l9%2BtRNP4lhzfJPgwy%2FZXs%2F9%2BOb%2B%2FbazGtQhzNYjkdZ12Y9oZ2SyQg9i8C%2B9MVuYd4r8q3qGeispGTL5cXHUn1YcI0PdnJvbIQpEnnXuvuH7Dj7S8kCCG6%2B3FKPDb7HLOsf%2BjCXO57je74BmWTqzckQ%2FhFE3Ho%2F2zDYcRSI%2BhA%2BxPtEpgWFZb6GoF02gmrmmlz1GRJD%2BKX&X-Amz-Signature=44b9f9e45378d2ed97e0c299b0c546b821e2a0a97923ee7e9392a288298c4fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3HTTA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUu1o2q3aBv%2Fe4o6SxZ5wYaFejT%2BnrauvCN8XLewia%2BwIgFWbPJ6V6stBjDJRNzBzhTycZnb5Y1JOAt%2FYgg93m9W4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOzyKFiL81JXlcT8GyrcAzWvMD9QqeWJoT4%2BMXJrPatvwuyBqEAYXXXBeGQG2HwESPGwQv0nSVOwYZ%2Bwq4zkVqOM6bkJJmut804DevGYGgl1OzC9L5B%2Fsr4ZJxpILhxvxojxht1aIkeCr%2FsKj9dqoiERNge%2Fa05X11TMyUZEh9bOm1snK7Zuwp7H7wsQqS2BwlZ4zT3DdDyANKznhio7vHi%2F9V982gppOBjQJEPQrTkUXVtJED9goRz7stwAOdGaoH286GQK2m8sRc5gAMVcgIclikxTtAF6Zkl7gVLZqtN%2B72LUmVvlhdvZpYmF8apbjmEdhaxGZ1kCVTZ2fj%2B5%2B9Kk293rq0s3GN7onFtzG%2BUaBX6vn%2Bc1F1ILmHrl8BIZyxNNLMdwpU5cWdx3WkR90FVqZn4mNxc9gh32vWW%2B%2FwaR2vjo5tN5WNOnS9s7o7V2fqHxMrNIjtHLk9jSD4wss4ITlyOxZ6j2Ad0QQW2oV6BTA7EALi3hiJ51DtTrijEahTKe3KT6iSBwpIYqnPjydcUuD5jZsnGaGgybB638vNnieDrCBeFlguzvO6HxKJHBJGeIuXQZTw62RBPgS9P7eTZlYz5A9ScAGLaSEpEw%2BjfU7Cu%2BNB7JNYsZzGww6IH2SkW1B3is5bOi398hMKGh9r0GOqUB530cL4%2Ff%2FSrojIw73j4l9%2BtRNP4lhzfJPgwy%2FZXs%2F9%2BOb%2B%2FbazGtQhzNYjkdZ12Y9oZ2SyQg9i8C%2B9MVuYd4r8q3qGeispGTL5cXHUn1YcI0PdnJvbIQpEnnXuvuH7Dj7S8kCCG6%2B3FKPDb7HLOsf%2BjCXO57je74BmWTqzckQ%2FhFE3Ho%2F2zDYcRSI%2BhA%2BxPtEpgWFZb6GoF02gmrmmlz1GRJD%2BKX&X-Amz-Signature=6c8c6afd018e5e888152836d13d935f7f7ee4ab2280cc926f7e4f091da3649db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJU3HTTA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUu1o2q3aBv%2Fe4o6SxZ5wYaFejT%2BnrauvCN8XLewia%2BwIgFWbPJ6V6stBjDJRNzBzhTycZnb5Y1JOAt%2FYgg93m9W4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOzyKFiL81JXlcT8GyrcAzWvMD9QqeWJoT4%2BMXJrPatvwuyBqEAYXXXBeGQG2HwESPGwQv0nSVOwYZ%2Bwq4zkVqOM6bkJJmut804DevGYGgl1OzC9L5B%2Fsr4ZJxpILhxvxojxht1aIkeCr%2FsKj9dqoiERNge%2Fa05X11TMyUZEh9bOm1snK7Zuwp7H7wsQqS2BwlZ4zT3DdDyANKznhio7vHi%2F9V982gppOBjQJEPQrTkUXVtJED9goRz7stwAOdGaoH286GQK2m8sRc5gAMVcgIclikxTtAF6Zkl7gVLZqtN%2B72LUmVvlhdvZpYmF8apbjmEdhaxGZ1kCVTZ2fj%2B5%2B9Kk293rq0s3GN7onFtzG%2BUaBX6vn%2Bc1F1ILmHrl8BIZyxNNLMdwpU5cWdx3WkR90FVqZn4mNxc9gh32vWW%2B%2FwaR2vjo5tN5WNOnS9s7o7V2fqHxMrNIjtHLk9jSD4wss4ITlyOxZ6j2Ad0QQW2oV6BTA7EALi3hiJ51DtTrijEahTKe3KT6iSBwpIYqnPjydcUuD5jZsnGaGgybB638vNnieDrCBeFlguzvO6HxKJHBJGeIuXQZTw62RBPgS9P7eTZlYz5A9ScAGLaSEpEw%2BjfU7Cu%2BNB7JNYsZzGww6IH2SkW1B3is5bOi398hMKGh9r0GOqUB530cL4%2Ff%2FSrojIw73j4l9%2BtRNP4lhzfJPgwy%2FZXs%2F9%2BOb%2B%2FbazGtQhzNYjkdZ12Y9oZ2SyQg9i8C%2B9MVuYd4r8q3qGeispGTL5cXHUn1YcI0PdnJvbIQpEnnXuvuH7Dj7S8kCCG6%2B3FKPDb7HLOsf%2BjCXO57je74BmWTqzckQ%2FhFE3Ho%2F2zDYcRSI%2BhA%2BxPtEpgWFZb6GoF02gmrmmlz1GRJD%2BKX&X-Amz-Signature=cda7c2f5172b56c95c7f2c92b9af43c4cdaa6596b4d4d9e1665a8473e3c33bc3&X-Amz-SignedHeaders=host&x-id=GetObject)
