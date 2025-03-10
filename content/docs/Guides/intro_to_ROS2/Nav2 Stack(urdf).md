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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DG24VU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDwfCAtItgSOxvLGg5OZmQ7zqbDvlz9Yqcy%2FT7wSYn8ZQIhAKz6qOUJ99QnncB44Y0G%2BRJc4TSkj3Ev%2Bu9ZHoX3%2FGbnKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzI7imfyfZhu1oc40q3ANqXnxb1%2F4fFHi%2BqYgIEaE4XWkSb9%2F5Y8D2sApIqt8%2FUgkWvhkLhFuYmwbSjsvQi%2BSFUbuwcZhrsXGM3atcrPWATNshQqDJUjA0PU%2BG0guquV8mTARFnGmDle4R2mEor4ns2N5V8ojF9JEmZN0WRKw4q7bhyAKhTdm1Z8HvWnL4%2BXbz8t3%2FoOclMWtXohyex1fVuyo4vHT4vzwrSFp1leOTbxFfE8FKIyNkkVOH1WI9nEmcQcJuRgeGgMrsmHBz1LLOAZ9k%2F26pBiJGTkXN%2FK6JkWHThZ9lfGrS1Mi%2FwOfwT70A9akct%2FLj2gl9yYc0ogI69N1tWzjEynnOPZh5UiqBP4HxEhr%2FV9%2FP7HecFhdzUBojgS0nH889SLhsnjr2dpea0gVbVTtdNrR7Fu7qajnjAWzeJa17aKmKHFjdxaJHhImyX5lFeARtDP00YtwnmfOCw17i0xgcNgqrjvBVUzU9YptL%2BH%2BBOlH3MgWfy1IDtkk4DVfGqbWmtkKaA5TjLsBDK01hrUvlFvKc5OkEHUR%2BXFfyZAoEs9XFBR%2FNWBvi91yH%2BT%2BCAX7Nubw3Q%2BiSNUsKvyfQWoMoabN69kB2gnMGUfHnRpmPkZ9wUsFMQR4ZvI9aSUfuVlKV1QkI3DDci7y%2BBjqkAXSVzqZ2VK9EG9bg11YylFMUVaaqa2Pep%2B6w7dQJRdJSN%2FekciCnzziZWnAKx3U6kiKeud3qOzl0VcsP0do87RbGTR3lhPuAXGQGIeaQ2biWjKQ6%2FuKq9ciLXx6JzNGMA4N5DSM8%2Fk98oGM88RJFoRXD0ObJ27IYdB3EKLCKHQhBvKx81PTY2WZwz2rEGF8DwZPzBtIpoqpSeCTs2Z7PCsCICFAH&X-Amz-Signature=0e8836d5c6be3bf0ff1b7d8a6c4d3e715ff76c16ee9bc3fbb6025271de268e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DG24VU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDwfCAtItgSOxvLGg5OZmQ7zqbDvlz9Yqcy%2FT7wSYn8ZQIhAKz6qOUJ99QnncB44Y0G%2BRJc4TSkj3Ev%2Bu9ZHoX3%2FGbnKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzI7imfyfZhu1oc40q3ANqXnxb1%2F4fFHi%2BqYgIEaE4XWkSb9%2F5Y8D2sApIqt8%2FUgkWvhkLhFuYmwbSjsvQi%2BSFUbuwcZhrsXGM3atcrPWATNshQqDJUjA0PU%2BG0guquV8mTARFnGmDle4R2mEor4ns2N5V8ojF9JEmZN0WRKw4q7bhyAKhTdm1Z8HvWnL4%2BXbz8t3%2FoOclMWtXohyex1fVuyo4vHT4vzwrSFp1leOTbxFfE8FKIyNkkVOH1WI9nEmcQcJuRgeGgMrsmHBz1LLOAZ9k%2F26pBiJGTkXN%2FK6JkWHThZ9lfGrS1Mi%2FwOfwT70A9akct%2FLj2gl9yYc0ogI69N1tWzjEynnOPZh5UiqBP4HxEhr%2FV9%2FP7HecFhdzUBojgS0nH889SLhsnjr2dpea0gVbVTtdNrR7Fu7qajnjAWzeJa17aKmKHFjdxaJHhImyX5lFeARtDP00YtwnmfOCw17i0xgcNgqrjvBVUzU9YptL%2BH%2BBOlH3MgWfy1IDtkk4DVfGqbWmtkKaA5TjLsBDK01hrUvlFvKc5OkEHUR%2BXFfyZAoEs9XFBR%2FNWBvi91yH%2BT%2BCAX7Nubw3Q%2BiSNUsKvyfQWoMoabN69kB2gnMGUfHnRpmPkZ9wUsFMQR4ZvI9aSUfuVlKV1QkI3DDci7y%2BBjqkAXSVzqZ2VK9EG9bg11YylFMUVaaqa2Pep%2B6w7dQJRdJSN%2FekciCnzziZWnAKx3U6kiKeud3qOzl0VcsP0do87RbGTR3lhPuAXGQGIeaQ2biWjKQ6%2FuKq9ciLXx6JzNGMA4N5DSM8%2Fk98oGM88RJFoRXD0ObJ27IYdB3EKLCKHQhBvKx81PTY2WZwz2rEGF8DwZPzBtIpoqpSeCTs2Z7PCsCICFAH&X-Amz-Signature=2b8d73de644ee1614c9aa7853d7d9ba3a5b5f5dc2a55189fa62820c2af51cdb2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DG24VU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDwfCAtItgSOxvLGg5OZmQ7zqbDvlz9Yqcy%2FT7wSYn8ZQIhAKz6qOUJ99QnncB44Y0G%2BRJc4TSkj3Ev%2Bu9ZHoX3%2FGbnKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzI7imfyfZhu1oc40q3ANqXnxb1%2F4fFHi%2BqYgIEaE4XWkSb9%2F5Y8D2sApIqt8%2FUgkWvhkLhFuYmwbSjsvQi%2BSFUbuwcZhrsXGM3atcrPWATNshQqDJUjA0PU%2BG0guquV8mTARFnGmDle4R2mEor4ns2N5V8ojF9JEmZN0WRKw4q7bhyAKhTdm1Z8HvWnL4%2BXbz8t3%2FoOclMWtXohyex1fVuyo4vHT4vzwrSFp1leOTbxFfE8FKIyNkkVOH1WI9nEmcQcJuRgeGgMrsmHBz1LLOAZ9k%2F26pBiJGTkXN%2FK6JkWHThZ9lfGrS1Mi%2FwOfwT70A9akct%2FLj2gl9yYc0ogI69N1tWzjEynnOPZh5UiqBP4HxEhr%2FV9%2FP7HecFhdzUBojgS0nH889SLhsnjr2dpea0gVbVTtdNrR7Fu7qajnjAWzeJa17aKmKHFjdxaJHhImyX5lFeARtDP00YtwnmfOCw17i0xgcNgqrjvBVUzU9YptL%2BH%2BBOlH3MgWfy1IDtkk4DVfGqbWmtkKaA5TjLsBDK01hrUvlFvKc5OkEHUR%2BXFfyZAoEs9XFBR%2FNWBvi91yH%2BT%2BCAX7Nubw3Q%2BiSNUsKvyfQWoMoabN69kB2gnMGUfHnRpmPkZ9wUsFMQR4ZvI9aSUfuVlKV1QkI3DDci7y%2BBjqkAXSVzqZ2VK9EG9bg11YylFMUVaaqa2Pep%2B6w7dQJRdJSN%2FekciCnzziZWnAKx3U6kiKeud3qOzl0VcsP0do87RbGTR3lhPuAXGQGIeaQ2biWjKQ6%2FuKq9ciLXx6JzNGMA4N5DSM8%2Fk98oGM88RJFoRXD0ObJ27IYdB3EKLCKHQhBvKx81PTY2WZwz2rEGF8DwZPzBtIpoqpSeCTs2Z7PCsCICFAH&X-Amz-Signature=6e8cf4687d725e9a709c267ee1dad9a9d869346706c3fe3310c8af574eb826b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DG24VU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDwfCAtItgSOxvLGg5OZmQ7zqbDvlz9Yqcy%2FT7wSYn8ZQIhAKz6qOUJ99QnncB44Y0G%2BRJc4TSkj3Ev%2Bu9ZHoX3%2FGbnKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzI7imfyfZhu1oc40q3ANqXnxb1%2F4fFHi%2BqYgIEaE4XWkSb9%2F5Y8D2sApIqt8%2FUgkWvhkLhFuYmwbSjsvQi%2BSFUbuwcZhrsXGM3atcrPWATNshQqDJUjA0PU%2BG0guquV8mTARFnGmDle4R2mEor4ns2N5V8ojF9JEmZN0WRKw4q7bhyAKhTdm1Z8HvWnL4%2BXbz8t3%2FoOclMWtXohyex1fVuyo4vHT4vzwrSFp1leOTbxFfE8FKIyNkkVOH1WI9nEmcQcJuRgeGgMrsmHBz1LLOAZ9k%2F26pBiJGTkXN%2FK6JkWHThZ9lfGrS1Mi%2FwOfwT70A9akct%2FLj2gl9yYc0ogI69N1tWzjEynnOPZh5UiqBP4HxEhr%2FV9%2FP7HecFhdzUBojgS0nH889SLhsnjr2dpea0gVbVTtdNrR7Fu7qajnjAWzeJa17aKmKHFjdxaJHhImyX5lFeARtDP00YtwnmfOCw17i0xgcNgqrjvBVUzU9YptL%2BH%2BBOlH3MgWfy1IDtkk4DVfGqbWmtkKaA5TjLsBDK01hrUvlFvKc5OkEHUR%2BXFfyZAoEs9XFBR%2FNWBvi91yH%2BT%2BCAX7Nubw3Q%2BiSNUsKvyfQWoMoabN69kB2gnMGUfHnRpmPkZ9wUsFMQR4ZvI9aSUfuVlKV1QkI3DDci7y%2BBjqkAXSVzqZ2VK9EG9bg11YylFMUVaaqa2Pep%2B6w7dQJRdJSN%2FekciCnzziZWnAKx3U6kiKeud3qOzl0VcsP0do87RbGTR3lhPuAXGQGIeaQ2biWjKQ6%2FuKq9ciLXx6JzNGMA4N5DSM8%2Fk98oGM88RJFoRXD0ObJ27IYdB3EKLCKHQhBvKx81PTY2WZwz2rEGF8DwZPzBtIpoqpSeCTs2Z7PCsCICFAH&X-Amz-Signature=7ca3edec3500f7c5ce1b12b777d6ad4c879fb1cede5ed1dbcd58c7154867ce9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DG24VU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDwfCAtItgSOxvLGg5OZmQ7zqbDvlz9Yqcy%2FT7wSYn8ZQIhAKz6qOUJ99QnncB44Y0G%2BRJc4TSkj3Ev%2Bu9ZHoX3%2FGbnKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzI7imfyfZhu1oc40q3ANqXnxb1%2F4fFHi%2BqYgIEaE4XWkSb9%2F5Y8D2sApIqt8%2FUgkWvhkLhFuYmwbSjsvQi%2BSFUbuwcZhrsXGM3atcrPWATNshQqDJUjA0PU%2BG0guquV8mTARFnGmDle4R2mEor4ns2N5V8ojF9JEmZN0WRKw4q7bhyAKhTdm1Z8HvWnL4%2BXbz8t3%2FoOclMWtXohyex1fVuyo4vHT4vzwrSFp1leOTbxFfE8FKIyNkkVOH1WI9nEmcQcJuRgeGgMrsmHBz1LLOAZ9k%2F26pBiJGTkXN%2FK6JkWHThZ9lfGrS1Mi%2FwOfwT70A9akct%2FLj2gl9yYc0ogI69N1tWzjEynnOPZh5UiqBP4HxEhr%2FV9%2FP7HecFhdzUBojgS0nH889SLhsnjr2dpea0gVbVTtdNrR7Fu7qajnjAWzeJa17aKmKHFjdxaJHhImyX5lFeARtDP00YtwnmfOCw17i0xgcNgqrjvBVUzU9YptL%2BH%2BBOlH3MgWfy1IDtkk4DVfGqbWmtkKaA5TjLsBDK01hrUvlFvKc5OkEHUR%2BXFfyZAoEs9XFBR%2FNWBvi91yH%2BT%2BCAX7Nubw3Q%2BiSNUsKvyfQWoMoabN69kB2gnMGUfHnRpmPkZ9wUsFMQR4ZvI9aSUfuVlKV1QkI3DDci7y%2BBjqkAXSVzqZ2VK9EG9bg11YylFMUVaaqa2Pep%2B6w7dQJRdJSN%2FekciCnzziZWnAKx3U6kiKeud3qOzl0VcsP0do87RbGTR3lhPuAXGQGIeaQ2biWjKQ6%2FuKq9ciLXx6JzNGMA4N5DSM8%2Fk98oGM88RJFoRXD0ObJ27IYdB3EKLCKHQhBvKx81PTY2WZwz2rEGF8DwZPzBtIpoqpSeCTs2Z7PCsCICFAH&X-Amz-Signature=2c5a45f3c3b699fe9df8e137ae0c2fde33e1a435e722796df1961e5121bf5b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DG24VU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDwfCAtItgSOxvLGg5OZmQ7zqbDvlz9Yqcy%2FT7wSYn8ZQIhAKz6qOUJ99QnncB44Y0G%2BRJc4TSkj3Ev%2Bu9ZHoX3%2FGbnKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzI7imfyfZhu1oc40q3ANqXnxb1%2F4fFHi%2BqYgIEaE4XWkSb9%2F5Y8D2sApIqt8%2FUgkWvhkLhFuYmwbSjsvQi%2BSFUbuwcZhrsXGM3atcrPWATNshQqDJUjA0PU%2BG0guquV8mTARFnGmDle4R2mEor4ns2N5V8ojF9JEmZN0WRKw4q7bhyAKhTdm1Z8HvWnL4%2BXbz8t3%2FoOclMWtXohyex1fVuyo4vHT4vzwrSFp1leOTbxFfE8FKIyNkkVOH1WI9nEmcQcJuRgeGgMrsmHBz1LLOAZ9k%2F26pBiJGTkXN%2FK6JkWHThZ9lfGrS1Mi%2FwOfwT70A9akct%2FLj2gl9yYc0ogI69N1tWzjEynnOPZh5UiqBP4HxEhr%2FV9%2FP7HecFhdzUBojgS0nH889SLhsnjr2dpea0gVbVTtdNrR7Fu7qajnjAWzeJa17aKmKHFjdxaJHhImyX5lFeARtDP00YtwnmfOCw17i0xgcNgqrjvBVUzU9YptL%2BH%2BBOlH3MgWfy1IDtkk4DVfGqbWmtkKaA5TjLsBDK01hrUvlFvKc5OkEHUR%2BXFfyZAoEs9XFBR%2FNWBvi91yH%2BT%2BCAX7Nubw3Q%2BiSNUsKvyfQWoMoabN69kB2gnMGUfHnRpmPkZ9wUsFMQR4ZvI9aSUfuVlKV1QkI3DDci7y%2BBjqkAXSVzqZ2VK9EG9bg11YylFMUVaaqa2Pep%2B6w7dQJRdJSN%2FekciCnzziZWnAKx3U6kiKeud3qOzl0VcsP0do87RbGTR3lhPuAXGQGIeaQ2biWjKQ6%2FuKq9ciLXx6JzNGMA4N5DSM8%2Fk98oGM88RJFoRXD0ObJ27IYdB3EKLCKHQhBvKx81PTY2WZwz2rEGF8DwZPzBtIpoqpSeCTs2Z7PCsCICFAH&X-Amz-Signature=d9796b40a5fa68607d6d878199832ed9de9b25537115367ebe040476458b0c0a&X-Amz-SignedHeaders=host&x-id=GetObject)
