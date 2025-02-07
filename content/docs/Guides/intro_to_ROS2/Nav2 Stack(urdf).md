---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJKQUNLR%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDbFbDg9R2%2FvtYHQYKlZjKhEqYhHevyPG7EkDyFuhfjxwIhAPhLBMKJ3IrHUFbnvnbpNqeNu%2BEHm4RCtlV2izbIerUtKv8DCHYQABoMNjM3NDIzMTgzODA1IgyYuKc73EBO%2FQMGFC8q3APhnAT5fc3FHA8TmOap2%2F2%2FZMabYK0BZmju%2FWvUGj7anI1Nsk8gav%2F3%2FXUIIdPTNnVbFvABVQcQ5Ek5OemNr699ncrYJHevTi2Ha6qaJuWAToDXCOgfwJ%2F3HI%2FtgyXwftd15XhS3F4z%2BMIAS0R2D3A93HZ3xQKt%2F5tQVav0Gv13J%2BRanMClUcFqydcbOU8QbLhavevknmpsnS4Olags4Fq5LcTPWPvN3JBRk3u%2BLmgqLC87Dk7VTuM5uDz2IykEmSoDyWm%2F908YDu4FSFfcnMKaRWyOXrEmJzKloPEfqGNlBf1Vio8X3RaKS%2BifGjKTFdr9WY46xkklVrf4fs4K9ZKDkNaenx6iCZUea0lnzZmZn6CNyuvRS2ymtoy8doaYWsyCLwN98KNelhxtapXZ8Mkb6sfk95OCB%2FB0eF960fb%2BXty%2B1HN9eiRGoxbaSdcgbpAeIxK3dClkSQyR8wy%2BZ1MNhfhJ1rHFuM9iOHjQfJGgMusBRt%2BpILphOHNIjxU5lrSJpHXqwyIg5sdV8Lx985z4TJ7ATYPiY3DpDfe7ZjXNpD5n6IBM7ODS%2F0gVe252E6iZK4vHpzkQVuIwGh%2BjrtMTINh%2FJFML80l1G%2F4ZNCgu4GGpiiV1LU1ILwwq5DC4jJi9BjqkAQkylGlnpitwVvmidbPLnqMv6sEd1A%2FjwTDsMkHBRS7hZ1umnZ6fYCcKaAohII6c58mXA64xMzpVFFpQMdl%2FJNwjlKnMm7KFFvA0SWf5ovxzR1kTGB1ZYgue2bwdyDfL0w1aOLt1yFjeGoGw5%2FgcWoMbkku6V7vk%2Bi4jfyMMdD19AKaCStxkZglo5nsQAlDWAsPDH9uTzakavr83hLQNR18Xh6wF&X-Amz-Signature=aaf15e34e12f041b4d37d3bcb49ae731b698b56e6a8ba4e62b0b9f5d5fdc9172&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJKQUNLR%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDbFbDg9R2%2FvtYHQYKlZjKhEqYhHevyPG7EkDyFuhfjxwIhAPhLBMKJ3IrHUFbnvnbpNqeNu%2BEHm4RCtlV2izbIerUtKv8DCHYQABoMNjM3NDIzMTgzODA1IgyYuKc73EBO%2FQMGFC8q3APhnAT5fc3FHA8TmOap2%2F2%2FZMabYK0BZmju%2FWvUGj7anI1Nsk8gav%2F3%2FXUIIdPTNnVbFvABVQcQ5Ek5OemNr699ncrYJHevTi2Ha6qaJuWAToDXCOgfwJ%2F3HI%2FtgyXwftd15XhS3F4z%2BMIAS0R2D3A93HZ3xQKt%2F5tQVav0Gv13J%2BRanMClUcFqydcbOU8QbLhavevknmpsnS4Olags4Fq5LcTPWPvN3JBRk3u%2BLmgqLC87Dk7VTuM5uDz2IykEmSoDyWm%2F908YDu4FSFfcnMKaRWyOXrEmJzKloPEfqGNlBf1Vio8X3RaKS%2BifGjKTFdr9WY46xkklVrf4fs4K9ZKDkNaenx6iCZUea0lnzZmZn6CNyuvRS2ymtoy8doaYWsyCLwN98KNelhxtapXZ8Mkb6sfk95OCB%2FB0eF960fb%2BXty%2B1HN9eiRGoxbaSdcgbpAeIxK3dClkSQyR8wy%2BZ1MNhfhJ1rHFuM9iOHjQfJGgMusBRt%2BpILphOHNIjxU5lrSJpHXqwyIg5sdV8Lx985z4TJ7ATYPiY3DpDfe7ZjXNpD5n6IBM7ODS%2F0gVe252E6iZK4vHpzkQVuIwGh%2BjrtMTINh%2FJFML80l1G%2F4ZNCgu4GGpiiV1LU1ILwwq5DC4jJi9BjqkAQkylGlnpitwVvmidbPLnqMv6sEd1A%2FjwTDsMkHBRS7hZ1umnZ6fYCcKaAohII6c58mXA64xMzpVFFpQMdl%2FJNwjlKnMm7KFFvA0SWf5ovxzR1kTGB1ZYgue2bwdyDfL0w1aOLt1yFjeGoGw5%2FgcWoMbkku6V7vk%2Bi4jfyMMdD19AKaCStxkZglo5nsQAlDWAsPDH9uTzakavr83hLQNR18Xh6wF&X-Amz-Signature=e8069a47888c2931aa4ae81fc3a00102ee7e14b2a5bf123f3d239acc06c341d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJKQUNLR%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDbFbDg9R2%2FvtYHQYKlZjKhEqYhHevyPG7EkDyFuhfjxwIhAPhLBMKJ3IrHUFbnvnbpNqeNu%2BEHm4RCtlV2izbIerUtKv8DCHYQABoMNjM3NDIzMTgzODA1IgyYuKc73EBO%2FQMGFC8q3APhnAT5fc3FHA8TmOap2%2F2%2FZMabYK0BZmju%2FWvUGj7anI1Nsk8gav%2F3%2FXUIIdPTNnVbFvABVQcQ5Ek5OemNr699ncrYJHevTi2Ha6qaJuWAToDXCOgfwJ%2F3HI%2FtgyXwftd15XhS3F4z%2BMIAS0R2D3A93HZ3xQKt%2F5tQVav0Gv13J%2BRanMClUcFqydcbOU8QbLhavevknmpsnS4Olags4Fq5LcTPWPvN3JBRk3u%2BLmgqLC87Dk7VTuM5uDz2IykEmSoDyWm%2F908YDu4FSFfcnMKaRWyOXrEmJzKloPEfqGNlBf1Vio8X3RaKS%2BifGjKTFdr9WY46xkklVrf4fs4K9ZKDkNaenx6iCZUea0lnzZmZn6CNyuvRS2ymtoy8doaYWsyCLwN98KNelhxtapXZ8Mkb6sfk95OCB%2FB0eF960fb%2BXty%2B1HN9eiRGoxbaSdcgbpAeIxK3dClkSQyR8wy%2BZ1MNhfhJ1rHFuM9iOHjQfJGgMusBRt%2BpILphOHNIjxU5lrSJpHXqwyIg5sdV8Lx985z4TJ7ATYPiY3DpDfe7ZjXNpD5n6IBM7ODS%2F0gVe252E6iZK4vHpzkQVuIwGh%2BjrtMTINh%2FJFML80l1G%2F4ZNCgu4GGpiiV1LU1ILwwq5DC4jJi9BjqkAQkylGlnpitwVvmidbPLnqMv6sEd1A%2FjwTDsMkHBRS7hZ1umnZ6fYCcKaAohII6c58mXA64xMzpVFFpQMdl%2FJNwjlKnMm7KFFvA0SWf5ovxzR1kTGB1ZYgue2bwdyDfL0w1aOLt1yFjeGoGw5%2FgcWoMbkku6V7vk%2Bi4jfyMMdD19AKaCStxkZglo5nsQAlDWAsPDH9uTzakavr83hLQNR18Xh6wF&X-Amz-Signature=e9729d1e496f0bd4345dd2098bc8007a81a44899f42d2b28ab4bbd6f27d9b539&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJKQUNLR%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDbFbDg9R2%2FvtYHQYKlZjKhEqYhHevyPG7EkDyFuhfjxwIhAPhLBMKJ3IrHUFbnvnbpNqeNu%2BEHm4RCtlV2izbIerUtKv8DCHYQABoMNjM3NDIzMTgzODA1IgyYuKc73EBO%2FQMGFC8q3APhnAT5fc3FHA8TmOap2%2F2%2FZMabYK0BZmju%2FWvUGj7anI1Nsk8gav%2F3%2FXUIIdPTNnVbFvABVQcQ5Ek5OemNr699ncrYJHevTi2Ha6qaJuWAToDXCOgfwJ%2F3HI%2FtgyXwftd15XhS3F4z%2BMIAS0R2D3A93HZ3xQKt%2F5tQVav0Gv13J%2BRanMClUcFqydcbOU8QbLhavevknmpsnS4Olags4Fq5LcTPWPvN3JBRk3u%2BLmgqLC87Dk7VTuM5uDz2IykEmSoDyWm%2F908YDu4FSFfcnMKaRWyOXrEmJzKloPEfqGNlBf1Vio8X3RaKS%2BifGjKTFdr9WY46xkklVrf4fs4K9ZKDkNaenx6iCZUea0lnzZmZn6CNyuvRS2ymtoy8doaYWsyCLwN98KNelhxtapXZ8Mkb6sfk95OCB%2FB0eF960fb%2BXty%2B1HN9eiRGoxbaSdcgbpAeIxK3dClkSQyR8wy%2BZ1MNhfhJ1rHFuM9iOHjQfJGgMusBRt%2BpILphOHNIjxU5lrSJpHXqwyIg5sdV8Lx985z4TJ7ATYPiY3DpDfe7ZjXNpD5n6IBM7ODS%2F0gVe252E6iZK4vHpzkQVuIwGh%2BjrtMTINh%2FJFML80l1G%2F4ZNCgu4GGpiiV1LU1ILwwq5DC4jJi9BjqkAQkylGlnpitwVvmidbPLnqMv6sEd1A%2FjwTDsMkHBRS7hZ1umnZ6fYCcKaAohII6c58mXA64xMzpVFFpQMdl%2FJNwjlKnMm7KFFvA0SWf5ovxzR1kTGB1ZYgue2bwdyDfL0w1aOLt1yFjeGoGw5%2FgcWoMbkku6V7vk%2Bi4jfyMMdD19AKaCStxkZglo5nsQAlDWAsPDH9uTzakavr83hLQNR18Xh6wF&X-Amz-Signature=4b372a14faeb24dbfd0a54f3abc86a8f822f99865d73e8e6374d21e516aed6a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJKQUNLR%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDbFbDg9R2%2FvtYHQYKlZjKhEqYhHevyPG7EkDyFuhfjxwIhAPhLBMKJ3IrHUFbnvnbpNqeNu%2BEHm4RCtlV2izbIerUtKv8DCHYQABoMNjM3NDIzMTgzODA1IgyYuKc73EBO%2FQMGFC8q3APhnAT5fc3FHA8TmOap2%2F2%2FZMabYK0BZmju%2FWvUGj7anI1Nsk8gav%2F3%2FXUIIdPTNnVbFvABVQcQ5Ek5OemNr699ncrYJHevTi2Ha6qaJuWAToDXCOgfwJ%2F3HI%2FtgyXwftd15XhS3F4z%2BMIAS0R2D3A93HZ3xQKt%2F5tQVav0Gv13J%2BRanMClUcFqydcbOU8QbLhavevknmpsnS4Olags4Fq5LcTPWPvN3JBRk3u%2BLmgqLC87Dk7VTuM5uDz2IykEmSoDyWm%2F908YDu4FSFfcnMKaRWyOXrEmJzKloPEfqGNlBf1Vio8X3RaKS%2BifGjKTFdr9WY46xkklVrf4fs4K9ZKDkNaenx6iCZUea0lnzZmZn6CNyuvRS2ymtoy8doaYWsyCLwN98KNelhxtapXZ8Mkb6sfk95OCB%2FB0eF960fb%2BXty%2B1HN9eiRGoxbaSdcgbpAeIxK3dClkSQyR8wy%2BZ1MNhfhJ1rHFuM9iOHjQfJGgMusBRt%2BpILphOHNIjxU5lrSJpHXqwyIg5sdV8Lx985z4TJ7ATYPiY3DpDfe7ZjXNpD5n6IBM7ODS%2F0gVe252E6iZK4vHpzkQVuIwGh%2BjrtMTINh%2FJFML80l1G%2F4ZNCgu4GGpiiV1LU1ILwwq5DC4jJi9BjqkAQkylGlnpitwVvmidbPLnqMv6sEd1A%2FjwTDsMkHBRS7hZ1umnZ6fYCcKaAohII6c58mXA64xMzpVFFpQMdl%2FJNwjlKnMm7KFFvA0SWf5ovxzR1kTGB1ZYgue2bwdyDfL0w1aOLt1yFjeGoGw5%2FgcWoMbkku6V7vk%2Bi4jfyMMdD19AKaCStxkZglo5nsQAlDWAsPDH9uTzakavr83hLQNR18Xh6wF&X-Amz-Signature=9fdf639274ee13004278117ad6d202fefcd6dbe1ec457769d564ac9231273e1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJKQUNLR%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDbFbDg9R2%2FvtYHQYKlZjKhEqYhHevyPG7EkDyFuhfjxwIhAPhLBMKJ3IrHUFbnvnbpNqeNu%2BEHm4RCtlV2izbIerUtKv8DCHYQABoMNjM3NDIzMTgzODA1IgyYuKc73EBO%2FQMGFC8q3APhnAT5fc3FHA8TmOap2%2F2%2FZMabYK0BZmju%2FWvUGj7anI1Nsk8gav%2F3%2FXUIIdPTNnVbFvABVQcQ5Ek5OemNr699ncrYJHevTi2Ha6qaJuWAToDXCOgfwJ%2F3HI%2FtgyXwftd15XhS3F4z%2BMIAS0R2D3A93HZ3xQKt%2F5tQVav0Gv13J%2BRanMClUcFqydcbOU8QbLhavevknmpsnS4Olags4Fq5LcTPWPvN3JBRk3u%2BLmgqLC87Dk7VTuM5uDz2IykEmSoDyWm%2F908YDu4FSFfcnMKaRWyOXrEmJzKloPEfqGNlBf1Vio8X3RaKS%2BifGjKTFdr9WY46xkklVrf4fs4K9ZKDkNaenx6iCZUea0lnzZmZn6CNyuvRS2ymtoy8doaYWsyCLwN98KNelhxtapXZ8Mkb6sfk95OCB%2FB0eF960fb%2BXty%2B1HN9eiRGoxbaSdcgbpAeIxK3dClkSQyR8wy%2BZ1MNhfhJ1rHFuM9iOHjQfJGgMusBRt%2BpILphOHNIjxU5lrSJpHXqwyIg5sdV8Lx985z4TJ7ATYPiY3DpDfe7ZjXNpD5n6IBM7ODS%2F0gVe252E6iZK4vHpzkQVuIwGh%2BjrtMTINh%2FJFML80l1G%2F4ZNCgu4GGpiiV1LU1ILwwq5DC4jJi9BjqkAQkylGlnpitwVvmidbPLnqMv6sEd1A%2FjwTDsMkHBRS7hZ1umnZ6fYCcKaAohII6c58mXA64xMzpVFFpQMdl%2FJNwjlKnMm7KFFvA0SWf5ovxzR1kTGB1ZYgue2bwdyDfL0w1aOLt1yFjeGoGw5%2FgcWoMbkku6V7vk%2Bi4jfyMMdD19AKaCStxkZglo5nsQAlDWAsPDH9uTzakavr83hLQNR18Xh6wF&X-Amz-Signature=a04b181f37bbea67b4ce45333388a47b88f29e9eff39e79f2c582c0afe3584c7&X-Amz-SignedHeaders=host&x-id=GetObject)
