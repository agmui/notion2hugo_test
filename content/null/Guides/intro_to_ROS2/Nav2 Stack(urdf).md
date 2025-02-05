---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBZSXB2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCgvpVz7cXsBf5fXbYLheMSf%2BtPK9Ttip5BolKZu0Xr8wIhAMDjEm2Vq5cmz%2FUgypAEyTFSjSCVGC19TYkmGzJq3tgNKv8DCDkQABoMNjM3NDIzMTgzODA1IgwFn4OgHb8ulAmcxYUq3AML%2FynLAb%2F5ZazfnFxCf1LeAdD6RxvzIakIW6wZYyjyYk%2FxlqOfehK3WMZAMAkPMy%2BJ8Z6Rakd9axKZM%2FfwdvNxtbZIaLexLHp9POhjtCGTH0EtTVZ%2F1YgYjWJkCcZrv%2FD4dat7GhiwMspqTbjtAygOQpnsceUeW9EP6Gx62WjBfOfc1G%2BIKDBKfU0b0e%2FqYMXujNOYQ3Ww6sgfyUG9ZJglmCqDmMguMzTnabFZTLhwOX5gvRYE7myz0G%2B068WwR8WeF9HXpXqGD2n3NSqmdrONRNHsu6nIAvkPsx7j%2BqLTk7TTrNQ8VOYlGssWqkeO7UggQ%2BDoGgKZIznjS0dVa%2BXbZDkZHPslWui2tXVOeRROoMmaKMo1CV8xnCkFnyTV1irSYhjQBKJKUUl%2BAGQ3l3IyO4cAuhhE2pmdjWwQ4LFs%2Fb10q3Dr70M1RbOwdgAkxuuB32ugCaf%2FH2WxSPf5oLQBfzx9Bk%2BZnUUTXrClJgD0a2G7LS%2FtP%2BW%2B%2FJi1xFad41s3ezqKFU0hBXI9N2wA5dFCe8CWReh5vri1qMFoI9mco%2BJRzqrZX7FSQb6sVJa8IoqOSpmjAwLwIjFVq8VTv%2BIBflIn4D4BKp3IJnZR4c3unypMKHpDSWA1RIk1ODC0z4q9BjqkATe1MFmpB8uzf4eJ3Px42jLQ%2FaTOf%2FfXSqaSpkG6LZWFSah%2BEp0wgBkYZHzAA3R5C10fsZmG7MvIpYMTnpsJLzbWtZhiNDzF8ysyZwWYrJV2iVAbvL3m6RTSY8FBJzhh5kNoZ19O4hBn73bMu4nLno%2BJo2TRW5R1zvCyNxV88UacAIjgpeMWel%2B4rYk3tGt4XpVgvC9dcC558VkmexXDWUrbsANE&X-Amz-Signature=4205d551ab24e68fbcf2186dfb09c60ad7bd6f073fbe85c7a16fb9c3e4c313a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBZSXB2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCgvpVz7cXsBf5fXbYLheMSf%2BtPK9Ttip5BolKZu0Xr8wIhAMDjEm2Vq5cmz%2FUgypAEyTFSjSCVGC19TYkmGzJq3tgNKv8DCDkQABoMNjM3NDIzMTgzODA1IgwFn4OgHb8ulAmcxYUq3AML%2FynLAb%2F5ZazfnFxCf1LeAdD6RxvzIakIW6wZYyjyYk%2FxlqOfehK3WMZAMAkPMy%2BJ8Z6Rakd9axKZM%2FfwdvNxtbZIaLexLHp9POhjtCGTH0EtTVZ%2F1YgYjWJkCcZrv%2FD4dat7GhiwMspqTbjtAygOQpnsceUeW9EP6Gx62WjBfOfc1G%2BIKDBKfU0b0e%2FqYMXujNOYQ3Ww6sgfyUG9ZJglmCqDmMguMzTnabFZTLhwOX5gvRYE7myz0G%2B068WwR8WeF9HXpXqGD2n3NSqmdrONRNHsu6nIAvkPsx7j%2BqLTk7TTrNQ8VOYlGssWqkeO7UggQ%2BDoGgKZIznjS0dVa%2BXbZDkZHPslWui2tXVOeRROoMmaKMo1CV8xnCkFnyTV1irSYhjQBKJKUUl%2BAGQ3l3IyO4cAuhhE2pmdjWwQ4LFs%2Fb10q3Dr70M1RbOwdgAkxuuB32ugCaf%2FH2WxSPf5oLQBfzx9Bk%2BZnUUTXrClJgD0a2G7LS%2FtP%2BW%2B%2FJi1xFad41s3ezqKFU0hBXI9N2wA5dFCe8CWReh5vri1qMFoI9mco%2BJRzqrZX7FSQb6sVJa8IoqOSpmjAwLwIjFVq8VTv%2BIBflIn4D4BKp3IJnZR4c3unypMKHpDSWA1RIk1ODC0z4q9BjqkATe1MFmpB8uzf4eJ3Px42jLQ%2FaTOf%2FfXSqaSpkG6LZWFSah%2BEp0wgBkYZHzAA3R5C10fsZmG7MvIpYMTnpsJLzbWtZhiNDzF8ysyZwWYrJV2iVAbvL3m6RTSY8FBJzhh5kNoZ19O4hBn73bMu4nLno%2BJo2TRW5R1zvCyNxV88UacAIjgpeMWel%2B4rYk3tGt4XpVgvC9dcC558VkmexXDWUrbsANE&X-Amz-Signature=5214d3367313f66830a46dc6f4432a7af39e55b6e9f8dc86fa92d1f40b45a334&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBZSXB2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCgvpVz7cXsBf5fXbYLheMSf%2BtPK9Ttip5BolKZu0Xr8wIhAMDjEm2Vq5cmz%2FUgypAEyTFSjSCVGC19TYkmGzJq3tgNKv8DCDkQABoMNjM3NDIzMTgzODA1IgwFn4OgHb8ulAmcxYUq3AML%2FynLAb%2F5ZazfnFxCf1LeAdD6RxvzIakIW6wZYyjyYk%2FxlqOfehK3WMZAMAkPMy%2BJ8Z6Rakd9axKZM%2FfwdvNxtbZIaLexLHp9POhjtCGTH0EtTVZ%2F1YgYjWJkCcZrv%2FD4dat7GhiwMspqTbjtAygOQpnsceUeW9EP6Gx62WjBfOfc1G%2BIKDBKfU0b0e%2FqYMXujNOYQ3Ww6sgfyUG9ZJglmCqDmMguMzTnabFZTLhwOX5gvRYE7myz0G%2B068WwR8WeF9HXpXqGD2n3NSqmdrONRNHsu6nIAvkPsx7j%2BqLTk7TTrNQ8VOYlGssWqkeO7UggQ%2BDoGgKZIznjS0dVa%2BXbZDkZHPslWui2tXVOeRROoMmaKMo1CV8xnCkFnyTV1irSYhjQBKJKUUl%2BAGQ3l3IyO4cAuhhE2pmdjWwQ4LFs%2Fb10q3Dr70M1RbOwdgAkxuuB32ugCaf%2FH2WxSPf5oLQBfzx9Bk%2BZnUUTXrClJgD0a2G7LS%2FtP%2BW%2B%2FJi1xFad41s3ezqKFU0hBXI9N2wA5dFCe8CWReh5vri1qMFoI9mco%2BJRzqrZX7FSQb6sVJa8IoqOSpmjAwLwIjFVq8VTv%2BIBflIn4D4BKp3IJnZR4c3unypMKHpDSWA1RIk1ODC0z4q9BjqkATe1MFmpB8uzf4eJ3Px42jLQ%2FaTOf%2FfXSqaSpkG6LZWFSah%2BEp0wgBkYZHzAA3R5C10fsZmG7MvIpYMTnpsJLzbWtZhiNDzF8ysyZwWYrJV2iVAbvL3m6RTSY8FBJzhh5kNoZ19O4hBn73bMu4nLno%2BJo2TRW5R1zvCyNxV88UacAIjgpeMWel%2B4rYk3tGt4XpVgvC9dcC558VkmexXDWUrbsANE&X-Amz-Signature=fa856332539a668cb9b8d8f6f83d15670e8e66704c816565e68edf7d42d19d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBZSXB2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCgvpVz7cXsBf5fXbYLheMSf%2BtPK9Ttip5BolKZu0Xr8wIhAMDjEm2Vq5cmz%2FUgypAEyTFSjSCVGC19TYkmGzJq3tgNKv8DCDkQABoMNjM3NDIzMTgzODA1IgwFn4OgHb8ulAmcxYUq3AML%2FynLAb%2F5ZazfnFxCf1LeAdD6RxvzIakIW6wZYyjyYk%2FxlqOfehK3WMZAMAkPMy%2BJ8Z6Rakd9axKZM%2FfwdvNxtbZIaLexLHp9POhjtCGTH0EtTVZ%2F1YgYjWJkCcZrv%2FD4dat7GhiwMspqTbjtAygOQpnsceUeW9EP6Gx62WjBfOfc1G%2BIKDBKfU0b0e%2FqYMXujNOYQ3Ww6sgfyUG9ZJglmCqDmMguMzTnabFZTLhwOX5gvRYE7myz0G%2B068WwR8WeF9HXpXqGD2n3NSqmdrONRNHsu6nIAvkPsx7j%2BqLTk7TTrNQ8VOYlGssWqkeO7UggQ%2BDoGgKZIznjS0dVa%2BXbZDkZHPslWui2tXVOeRROoMmaKMo1CV8xnCkFnyTV1irSYhjQBKJKUUl%2BAGQ3l3IyO4cAuhhE2pmdjWwQ4LFs%2Fb10q3Dr70M1RbOwdgAkxuuB32ugCaf%2FH2WxSPf5oLQBfzx9Bk%2BZnUUTXrClJgD0a2G7LS%2FtP%2BW%2B%2FJi1xFad41s3ezqKFU0hBXI9N2wA5dFCe8CWReh5vri1qMFoI9mco%2BJRzqrZX7FSQb6sVJa8IoqOSpmjAwLwIjFVq8VTv%2BIBflIn4D4BKp3IJnZR4c3unypMKHpDSWA1RIk1ODC0z4q9BjqkATe1MFmpB8uzf4eJ3Px42jLQ%2FaTOf%2FfXSqaSpkG6LZWFSah%2BEp0wgBkYZHzAA3R5C10fsZmG7MvIpYMTnpsJLzbWtZhiNDzF8ysyZwWYrJV2iVAbvL3m6RTSY8FBJzhh5kNoZ19O4hBn73bMu4nLno%2BJo2TRW5R1zvCyNxV88UacAIjgpeMWel%2B4rYk3tGt4XpVgvC9dcC558VkmexXDWUrbsANE&X-Amz-Signature=aa49e0aca7907b42d892adbecdcf637dd2d7def723e4dfeb2781511bce1a2215&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBZSXB2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCgvpVz7cXsBf5fXbYLheMSf%2BtPK9Ttip5BolKZu0Xr8wIhAMDjEm2Vq5cmz%2FUgypAEyTFSjSCVGC19TYkmGzJq3tgNKv8DCDkQABoMNjM3NDIzMTgzODA1IgwFn4OgHb8ulAmcxYUq3AML%2FynLAb%2F5ZazfnFxCf1LeAdD6RxvzIakIW6wZYyjyYk%2FxlqOfehK3WMZAMAkPMy%2BJ8Z6Rakd9axKZM%2FfwdvNxtbZIaLexLHp9POhjtCGTH0EtTVZ%2F1YgYjWJkCcZrv%2FD4dat7GhiwMspqTbjtAygOQpnsceUeW9EP6Gx62WjBfOfc1G%2BIKDBKfU0b0e%2FqYMXujNOYQ3Ww6sgfyUG9ZJglmCqDmMguMzTnabFZTLhwOX5gvRYE7myz0G%2B068WwR8WeF9HXpXqGD2n3NSqmdrONRNHsu6nIAvkPsx7j%2BqLTk7TTrNQ8VOYlGssWqkeO7UggQ%2BDoGgKZIznjS0dVa%2BXbZDkZHPslWui2tXVOeRROoMmaKMo1CV8xnCkFnyTV1irSYhjQBKJKUUl%2BAGQ3l3IyO4cAuhhE2pmdjWwQ4LFs%2Fb10q3Dr70M1RbOwdgAkxuuB32ugCaf%2FH2WxSPf5oLQBfzx9Bk%2BZnUUTXrClJgD0a2G7LS%2FtP%2BW%2B%2FJi1xFad41s3ezqKFU0hBXI9N2wA5dFCe8CWReh5vri1qMFoI9mco%2BJRzqrZX7FSQb6sVJa8IoqOSpmjAwLwIjFVq8VTv%2BIBflIn4D4BKp3IJnZR4c3unypMKHpDSWA1RIk1ODC0z4q9BjqkATe1MFmpB8uzf4eJ3Px42jLQ%2FaTOf%2FfXSqaSpkG6LZWFSah%2BEp0wgBkYZHzAA3R5C10fsZmG7MvIpYMTnpsJLzbWtZhiNDzF8ysyZwWYrJV2iVAbvL3m6RTSY8FBJzhh5kNoZ19O4hBn73bMu4nLno%2BJo2TRW5R1zvCyNxV88UacAIjgpeMWel%2B4rYk3tGt4XpVgvC9dcC558VkmexXDWUrbsANE&X-Amz-Signature=874bc0c9d98d863a075378a3bf69f82a48b07d13e88e5b6004d07adf962acb39&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBZSXB2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCgvpVz7cXsBf5fXbYLheMSf%2BtPK9Ttip5BolKZu0Xr8wIhAMDjEm2Vq5cmz%2FUgypAEyTFSjSCVGC19TYkmGzJq3tgNKv8DCDkQABoMNjM3NDIzMTgzODA1IgwFn4OgHb8ulAmcxYUq3AML%2FynLAb%2F5ZazfnFxCf1LeAdD6RxvzIakIW6wZYyjyYk%2FxlqOfehK3WMZAMAkPMy%2BJ8Z6Rakd9axKZM%2FfwdvNxtbZIaLexLHp9POhjtCGTH0EtTVZ%2F1YgYjWJkCcZrv%2FD4dat7GhiwMspqTbjtAygOQpnsceUeW9EP6Gx62WjBfOfc1G%2BIKDBKfU0b0e%2FqYMXujNOYQ3Ww6sgfyUG9ZJglmCqDmMguMzTnabFZTLhwOX5gvRYE7myz0G%2B068WwR8WeF9HXpXqGD2n3NSqmdrONRNHsu6nIAvkPsx7j%2BqLTk7TTrNQ8VOYlGssWqkeO7UggQ%2BDoGgKZIznjS0dVa%2BXbZDkZHPslWui2tXVOeRROoMmaKMo1CV8xnCkFnyTV1irSYhjQBKJKUUl%2BAGQ3l3IyO4cAuhhE2pmdjWwQ4LFs%2Fb10q3Dr70M1RbOwdgAkxuuB32ugCaf%2FH2WxSPf5oLQBfzx9Bk%2BZnUUTXrClJgD0a2G7LS%2FtP%2BW%2B%2FJi1xFad41s3ezqKFU0hBXI9N2wA5dFCe8CWReh5vri1qMFoI9mco%2BJRzqrZX7FSQb6sVJa8IoqOSpmjAwLwIjFVq8VTv%2BIBflIn4D4BKp3IJnZR4c3unypMKHpDSWA1RIk1ODC0z4q9BjqkATe1MFmpB8uzf4eJ3Px42jLQ%2FaTOf%2FfXSqaSpkG6LZWFSah%2BEp0wgBkYZHzAA3R5C10fsZmG7MvIpYMTnpsJLzbWtZhiNDzF8ysyZwWYrJV2iVAbvL3m6RTSY8FBJzhh5kNoZ19O4hBn73bMu4nLno%2BJo2TRW5R1zvCyNxV88UacAIjgpeMWel%2B4rYk3tGt4XpVgvC9dcC558VkmexXDWUrbsANE&X-Amz-Signature=eadc2579a8c3475cfb80e74481a82bb5a05563159fddcba6d649d96e519462ce&X-Amz-SignedHeaders=host&x-id=GetObject)
