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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX4BL7XK%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIA2C%2Bf1mn3BR8hG7ZngAKKcR0EUJQa22wPhFB0pJ2OekAiEAlaTTCiMVHctPvbBanYrg%2Fkt1phMuGS8yJ9mKUTslOc8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIT4Hi0bXskO39N6tSrcAx8OhBwzvx0HgHACfuPfFp8PBlBJeC4nYj2nuepeyWdLvfIsMxmFcjxBWzSIs6PymI32XxEk5dvmCKQBaEjPHjMsKMKCdLLf4JYyEYAAi0qyykzgRVIwm2Jfwno8ErH0Lfn5FJ3%2BxCboIl8RWPxFIaa%2FFdnKTtWkx%2BHhrnj9xzKp349yb1ohgH4tpDs%2BHtImNUSEAzPxZk0OiYrgy5SKtnkrimUcvkmBO1xCsXa3AbZMo1aoiSGy9eecT9ZmXL1KdLi0XpsMm7m2kR4Qsh3Meyx2sBq8n4uQsWDdLQ%2FwJnu442HTCAjQ5XpNIinfpw9NBaBK8ex1uD64G92AAtzqRK0zLnB1TJ6IEsOPedwgvNQBNZ14BM%2BsuhxdIlgM7APOmUS5Y4%2BX4AhLhunfQJ24uU8eNlqQy7lv7XKTjkZsobVUHPL9gMvTcKCU5ya1dcf4bu3K3orVLxzXHuLle%2FVrrIVGZOqD0jUOXfZ1kV5Uoa%2B%2BDel4D0wn0kTUbRNwNNEjhWxnIcDUyZCVZ9WW8DoN5bGklBzIC0lo%2FPPw3%2BEVtSd1AWONVbUk%2F6U4LuOKp3wFVR3MimdCR7%2FnurTbIcw2qIXNUkgMiWU6fttUb2ePA7Ah6syvw%2B%2BWTWrm8ZNMMJberb4GOqUBTqowmIC%2BRnvfipz1qCoqhCgWUN6i7z112bAmilc8RT42e%2F7Kq3faDEicv23zv9o6oGPKaFDdsBaAgNdsblA5ghGimuW%2Fe87Kf85EFzoHYptDxmVyqwFWp88DUiHJzi9molbZfRP1XHNtgFK7nvPg2FrahXUwZkRik7RlB3gfi2EsjT5w4Oizz7MTaTGUgNR8tGcCPn%2FoMj%2F%2FLG%2FFITxpOeL8GgbY&X-Amz-Signature=1ed69be527f25b2df502930e55331b91cc40cc9ca794bde5c461fc2c04398fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX4BL7XK%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIA2C%2Bf1mn3BR8hG7ZngAKKcR0EUJQa22wPhFB0pJ2OekAiEAlaTTCiMVHctPvbBanYrg%2Fkt1phMuGS8yJ9mKUTslOc8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIT4Hi0bXskO39N6tSrcAx8OhBwzvx0HgHACfuPfFp8PBlBJeC4nYj2nuepeyWdLvfIsMxmFcjxBWzSIs6PymI32XxEk5dvmCKQBaEjPHjMsKMKCdLLf4JYyEYAAi0qyykzgRVIwm2Jfwno8ErH0Lfn5FJ3%2BxCboIl8RWPxFIaa%2FFdnKTtWkx%2BHhrnj9xzKp349yb1ohgH4tpDs%2BHtImNUSEAzPxZk0OiYrgy5SKtnkrimUcvkmBO1xCsXa3AbZMo1aoiSGy9eecT9ZmXL1KdLi0XpsMm7m2kR4Qsh3Meyx2sBq8n4uQsWDdLQ%2FwJnu442HTCAjQ5XpNIinfpw9NBaBK8ex1uD64G92AAtzqRK0zLnB1TJ6IEsOPedwgvNQBNZ14BM%2BsuhxdIlgM7APOmUS5Y4%2BX4AhLhunfQJ24uU8eNlqQy7lv7XKTjkZsobVUHPL9gMvTcKCU5ya1dcf4bu3K3orVLxzXHuLle%2FVrrIVGZOqD0jUOXfZ1kV5Uoa%2B%2BDel4D0wn0kTUbRNwNNEjhWxnIcDUyZCVZ9WW8DoN5bGklBzIC0lo%2FPPw3%2BEVtSd1AWONVbUk%2F6U4LuOKp3wFVR3MimdCR7%2FnurTbIcw2qIXNUkgMiWU6fttUb2ePA7Ah6syvw%2B%2BWTWrm8ZNMMJberb4GOqUBTqowmIC%2BRnvfipz1qCoqhCgWUN6i7z112bAmilc8RT42e%2F7Kq3faDEicv23zv9o6oGPKaFDdsBaAgNdsblA5ghGimuW%2Fe87Kf85EFzoHYptDxmVyqwFWp88DUiHJzi9molbZfRP1XHNtgFK7nvPg2FrahXUwZkRik7RlB3gfi2EsjT5w4Oizz7MTaTGUgNR8tGcCPn%2FoMj%2F%2FLG%2FFITxpOeL8GgbY&X-Amz-Signature=dc83c96c5367742c4c804e7eeb85c7ca58a3b8e8e4d2fb9239693f7e1827431c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX4BL7XK%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIA2C%2Bf1mn3BR8hG7ZngAKKcR0EUJQa22wPhFB0pJ2OekAiEAlaTTCiMVHctPvbBanYrg%2Fkt1phMuGS8yJ9mKUTslOc8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIT4Hi0bXskO39N6tSrcAx8OhBwzvx0HgHACfuPfFp8PBlBJeC4nYj2nuepeyWdLvfIsMxmFcjxBWzSIs6PymI32XxEk5dvmCKQBaEjPHjMsKMKCdLLf4JYyEYAAi0qyykzgRVIwm2Jfwno8ErH0Lfn5FJ3%2BxCboIl8RWPxFIaa%2FFdnKTtWkx%2BHhrnj9xzKp349yb1ohgH4tpDs%2BHtImNUSEAzPxZk0OiYrgy5SKtnkrimUcvkmBO1xCsXa3AbZMo1aoiSGy9eecT9ZmXL1KdLi0XpsMm7m2kR4Qsh3Meyx2sBq8n4uQsWDdLQ%2FwJnu442HTCAjQ5XpNIinfpw9NBaBK8ex1uD64G92AAtzqRK0zLnB1TJ6IEsOPedwgvNQBNZ14BM%2BsuhxdIlgM7APOmUS5Y4%2BX4AhLhunfQJ24uU8eNlqQy7lv7XKTjkZsobVUHPL9gMvTcKCU5ya1dcf4bu3K3orVLxzXHuLle%2FVrrIVGZOqD0jUOXfZ1kV5Uoa%2B%2BDel4D0wn0kTUbRNwNNEjhWxnIcDUyZCVZ9WW8DoN5bGklBzIC0lo%2FPPw3%2BEVtSd1AWONVbUk%2F6U4LuOKp3wFVR3MimdCR7%2FnurTbIcw2qIXNUkgMiWU6fttUb2ePA7Ah6syvw%2B%2BWTWrm8ZNMMJberb4GOqUBTqowmIC%2BRnvfipz1qCoqhCgWUN6i7z112bAmilc8RT42e%2F7Kq3faDEicv23zv9o6oGPKaFDdsBaAgNdsblA5ghGimuW%2Fe87Kf85EFzoHYptDxmVyqwFWp88DUiHJzi9molbZfRP1XHNtgFK7nvPg2FrahXUwZkRik7RlB3gfi2EsjT5w4Oizz7MTaTGUgNR8tGcCPn%2FoMj%2F%2FLG%2FFITxpOeL8GgbY&X-Amz-Signature=c31f7f8dfe0c0ca523a490299a0eee4a86d33a358836de770b27436bc435cc8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX4BL7XK%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIA2C%2Bf1mn3BR8hG7ZngAKKcR0EUJQa22wPhFB0pJ2OekAiEAlaTTCiMVHctPvbBanYrg%2Fkt1phMuGS8yJ9mKUTslOc8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIT4Hi0bXskO39N6tSrcAx8OhBwzvx0HgHACfuPfFp8PBlBJeC4nYj2nuepeyWdLvfIsMxmFcjxBWzSIs6PymI32XxEk5dvmCKQBaEjPHjMsKMKCdLLf4JYyEYAAi0qyykzgRVIwm2Jfwno8ErH0Lfn5FJ3%2BxCboIl8RWPxFIaa%2FFdnKTtWkx%2BHhrnj9xzKp349yb1ohgH4tpDs%2BHtImNUSEAzPxZk0OiYrgy5SKtnkrimUcvkmBO1xCsXa3AbZMo1aoiSGy9eecT9ZmXL1KdLi0XpsMm7m2kR4Qsh3Meyx2sBq8n4uQsWDdLQ%2FwJnu442HTCAjQ5XpNIinfpw9NBaBK8ex1uD64G92AAtzqRK0zLnB1TJ6IEsOPedwgvNQBNZ14BM%2BsuhxdIlgM7APOmUS5Y4%2BX4AhLhunfQJ24uU8eNlqQy7lv7XKTjkZsobVUHPL9gMvTcKCU5ya1dcf4bu3K3orVLxzXHuLle%2FVrrIVGZOqD0jUOXfZ1kV5Uoa%2B%2BDel4D0wn0kTUbRNwNNEjhWxnIcDUyZCVZ9WW8DoN5bGklBzIC0lo%2FPPw3%2BEVtSd1AWONVbUk%2F6U4LuOKp3wFVR3MimdCR7%2FnurTbIcw2qIXNUkgMiWU6fttUb2ePA7Ah6syvw%2B%2BWTWrm8ZNMMJberb4GOqUBTqowmIC%2BRnvfipz1qCoqhCgWUN6i7z112bAmilc8RT42e%2F7Kq3faDEicv23zv9o6oGPKaFDdsBaAgNdsblA5ghGimuW%2Fe87Kf85EFzoHYptDxmVyqwFWp88DUiHJzi9molbZfRP1XHNtgFK7nvPg2FrahXUwZkRik7RlB3gfi2EsjT5w4Oizz7MTaTGUgNR8tGcCPn%2FoMj%2F%2FLG%2FFITxpOeL8GgbY&X-Amz-Signature=1afd1a33b05707c9239a22e90c10816c461759b0302ed836af4bfd286fa60134&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX4BL7XK%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIA2C%2Bf1mn3BR8hG7ZngAKKcR0EUJQa22wPhFB0pJ2OekAiEAlaTTCiMVHctPvbBanYrg%2Fkt1phMuGS8yJ9mKUTslOc8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIT4Hi0bXskO39N6tSrcAx8OhBwzvx0HgHACfuPfFp8PBlBJeC4nYj2nuepeyWdLvfIsMxmFcjxBWzSIs6PymI32XxEk5dvmCKQBaEjPHjMsKMKCdLLf4JYyEYAAi0qyykzgRVIwm2Jfwno8ErH0Lfn5FJ3%2BxCboIl8RWPxFIaa%2FFdnKTtWkx%2BHhrnj9xzKp349yb1ohgH4tpDs%2BHtImNUSEAzPxZk0OiYrgy5SKtnkrimUcvkmBO1xCsXa3AbZMo1aoiSGy9eecT9ZmXL1KdLi0XpsMm7m2kR4Qsh3Meyx2sBq8n4uQsWDdLQ%2FwJnu442HTCAjQ5XpNIinfpw9NBaBK8ex1uD64G92AAtzqRK0zLnB1TJ6IEsOPedwgvNQBNZ14BM%2BsuhxdIlgM7APOmUS5Y4%2BX4AhLhunfQJ24uU8eNlqQy7lv7XKTjkZsobVUHPL9gMvTcKCU5ya1dcf4bu3K3orVLxzXHuLle%2FVrrIVGZOqD0jUOXfZ1kV5Uoa%2B%2BDel4D0wn0kTUbRNwNNEjhWxnIcDUyZCVZ9WW8DoN5bGklBzIC0lo%2FPPw3%2BEVtSd1AWONVbUk%2F6U4LuOKp3wFVR3MimdCR7%2FnurTbIcw2qIXNUkgMiWU6fttUb2ePA7Ah6syvw%2B%2BWTWrm8ZNMMJberb4GOqUBTqowmIC%2BRnvfipz1qCoqhCgWUN6i7z112bAmilc8RT42e%2F7Kq3faDEicv23zv9o6oGPKaFDdsBaAgNdsblA5ghGimuW%2Fe87Kf85EFzoHYptDxmVyqwFWp88DUiHJzi9molbZfRP1XHNtgFK7nvPg2FrahXUwZkRik7RlB3gfi2EsjT5w4Oizz7MTaTGUgNR8tGcCPn%2FoMj%2F%2FLG%2FFITxpOeL8GgbY&X-Amz-Signature=4171aef6c1bcb50201b8d8d84f09e655f1b9e5d538e05ab5106e96f0f9ebe28f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX4BL7XK%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIA2C%2Bf1mn3BR8hG7ZngAKKcR0EUJQa22wPhFB0pJ2OekAiEAlaTTCiMVHctPvbBanYrg%2Fkt1phMuGS8yJ9mKUTslOc8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIT4Hi0bXskO39N6tSrcAx8OhBwzvx0HgHACfuPfFp8PBlBJeC4nYj2nuepeyWdLvfIsMxmFcjxBWzSIs6PymI32XxEk5dvmCKQBaEjPHjMsKMKCdLLf4JYyEYAAi0qyykzgRVIwm2Jfwno8ErH0Lfn5FJ3%2BxCboIl8RWPxFIaa%2FFdnKTtWkx%2BHhrnj9xzKp349yb1ohgH4tpDs%2BHtImNUSEAzPxZk0OiYrgy5SKtnkrimUcvkmBO1xCsXa3AbZMo1aoiSGy9eecT9ZmXL1KdLi0XpsMm7m2kR4Qsh3Meyx2sBq8n4uQsWDdLQ%2FwJnu442HTCAjQ5XpNIinfpw9NBaBK8ex1uD64G92AAtzqRK0zLnB1TJ6IEsOPedwgvNQBNZ14BM%2BsuhxdIlgM7APOmUS5Y4%2BX4AhLhunfQJ24uU8eNlqQy7lv7XKTjkZsobVUHPL9gMvTcKCU5ya1dcf4bu3K3orVLxzXHuLle%2FVrrIVGZOqD0jUOXfZ1kV5Uoa%2B%2BDel4D0wn0kTUbRNwNNEjhWxnIcDUyZCVZ9WW8DoN5bGklBzIC0lo%2FPPw3%2BEVtSd1AWONVbUk%2F6U4LuOKp3wFVR3MimdCR7%2FnurTbIcw2qIXNUkgMiWU6fttUb2ePA7Ah6syvw%2B%2BWTWrm8ZNMMJberb4GOqUBTqowmIC%2BRnvfipz1qCoqhCgWUN6i7z112bAmilc8RT42e%2F7Kq3faDEicv23zv9o6oGPKaFDdsBaAgNdsblA5ghGimuW%2Fe87Kf85EFzoHYptDxmVyqwFWp88DUiHJzi9molbZfRP1XHNtgFK7nvPg2FrahXUwZkRik7RlB3gfi2EsjT5w4Oizz7MTaTGUgNR8tGcCPn%2FoMj%2F%2FLG%2FFITxpOeL8GgbY&X-Amz-Signature=09870253df9c876a35e50771d67fb5b750d5000ab525bb9cb728eb05c45fafa0&X-Amz-SignedHeaders=host&x-id=GetObject)
