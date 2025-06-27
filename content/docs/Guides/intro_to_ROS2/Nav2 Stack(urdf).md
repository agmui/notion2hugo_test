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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHAGCQQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDWcbR5nij2ZZtB7J9VN8GlUT22f4SmCZKPkupq4jQ0igIhAMqa9P0usPOJktA6C0apVEDRySkQHqDJ%2F7vhKnH11%2FOQKv8DCHYQABoMNjM3NDIzMTgzODA1IgzBt%2BHqmbhyVI4uXx0q3ANXSuWw%2B8XDq7doI4Q3bJ%2BhwRsA2Yck%2FOAm5Sw7wi7vO7VQbVESk6TlGNo0Mq4cuI94Gk0QuqjAS8baFaR1yrQCFdp1mGHYxfAbDP71n1c4QVm1myqmwU7Ldnfj9iUmswnGynMion%2FX%2B%2Famacz1wJh8V2ThnDKMQBc3DM%2ByHONm4PKt1GMhqTie0cTDKspdVOvrPrVCmPddScRC4FBuiZVEEkR7iCzfp1XV%2B2ZPYqMEwWLhlhQfJRtihy7DZ9pyOqZpCBlYXAUkD5BEXv%2F2Y9a61cJKo0sTVeTI7BZs00zTPBlrFWfvZmLLoPENinYCWmBXp4zVjcINo8MFr%2BYUg83ALRn7wC0Oxh%2FeXNdPe2n22RpoJQhelyyxXxSbnfrx%2BbDUNecbOlpKeEFVDeVurbL%2B0zJwRour0Rn4FG8athu4t9VwwQUMFKydYydSagwa45djj%2BW7a0FoMkZP0h6qr8XgjEYoSPZ3%2FufggX5y8MlHb4xVt18tHaLJCESSMG8TQowe9kxlb0SzqSLY8i%2BQ0XnCOPky%2FZ8iLeAhnfItUaOMg7ErEtkf0wLrGI9xwjhbOW%2B6C0xYYdbov4dFg1qA5Nj0VxSwpq1Ng1wXXI63jygtrYPiJNStINVvDsvtVTDXpvrCBjqkAQQoENoy10HOfwclvF5oV5cGo9epuSmR6vQo5Z8iguqgHs407QEGe76ge%2FDVT0nbI5XwJLgoxkcicLD%2F6JOYOg8FG0%2BQNP2Yno1MSmD4RBrUE6fWCIfFud0O4gsmcC2FGCneFnrNm48V4Qa3TOB1oq18LUTfXAqd7XiRNpqOd%2BYGEZrxQljgaYg23RgVo43ry8zdH%2BCROtg0riQl5jebUbwMwngW&X-Amz-Signature=8350727abf17e9066e70c709bb8d8484a49e0e554291dbf8ca7b356f12212f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHAGCQQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDWcbR5nij2ZZtB7J9VN8GlUT22f4SmCZKPkupq4jQ0igIhAMqa9P0usPOJktA6C0apVEDRySkQHqDJ%2F7vhKnH11%2FOQKv8DCHYQABoMNjM3NDIzMTgzODA1IgzBt%2BHqmbhyVI4uXx0q3ANXSuWw%2B8XDq7doI4Q3bJ%2BhwRsA2Yck%2FOAm5Sw7wi7vO7VQbVESk6TlGNo0Mq4cuI94Gk0QuqjAS8baFaR1yrQCFdp1mGHYxfAbDP71n1c4QVm1myqmwU7Ldnfj9iUmswnGynMion%2FX%2B%2Famacz1wJh8V2ThnDKMQBc3DM%2ByHONm4PKt1GMhqTie0cTDKspdVOvrPrVCmPddScRC4FBuiZVEEkR7iCzfp1XV%2B2ZPYqMEwWLhlhQfJRtihy7DZ9pyOqZpCBlYXAUkD5BEXv%2F2Y9a61cJKo0sTVeTI7BZs00zTPBlrFWfvZmLLoPENinYCWmBXp4zVjcINo8MFr%2BYUg83ALRn7wC0Oxh%2FeXNdPe2n22RpoJQhelyyxXxSbnfrx%2BbDUNecbOlpKeEFVDeVurbL%2B0zJwRour0Rn4FG8athu4t9VwwQUMFKydYydSagwa45djj%2BW7a0FoMkZP0h6qr8XgjEYoSPZ3%2FufggX5y8MlHb4xVt18tHaLJCESSMG8TQowe9kxlb0SzqSLY8i%2BQ0XnCOPky%2FZ8iLeAhnfItUaOMg7ErEtkf0wLrGI9xwjhbOW%2B6C0xYYdbov4dFg1qA5Nj0VxSwpq1Ng1wXXI63jygtrYPiJNStINVvDsvtVTDXpvrCBjqkAQQoENoy10HOfwclvF5oV5cGo9epuSmR6vQo5Z8iguqgHs407QEGe76ge%2FDVT0nbI5XwJLgoxkcicLD%2F6JOYOg8FG0%2BQNP2Yno1MSmD4RBrUE6fWCIfFud0O4gsmcC2FGCneFnrNm48V4Qa3TOB1oq18LUTfXAqd7XiRNpqOd%2BYGEZrxQljgaYg23RgVo43ry8zdH%2BCROtg0riQl5jebUbwMwngW&X-Amz-Signature=e69bf55ea0db614f03fb3c351e38e8de1f81fa10231fc646b69ca2c0c63be36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHAGCQQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDWcbR5nij2ZZtB7J9VN8GlUT22f4SmCZKPkupq4jQ0igIhAMqa9P0usPOJktA6C0apVEDRySkQHqDJ%2F7vhKnH11%2FOQKv8DCHYQABoMNjM3NDIzMTgzODA1IgzBt%2BHqmbhyVI4uXx0q3ANXSuWw%2B8XDq7doI4Q3bJ%2BhwRsA2Yck%2FOAm5Sw7wi7vO7VQbVESk6TlGNo0Mq4cuI94Gk0QuqjAS8baFaR1yrQCFdp1mGHYxfAbDP71n1c4QVm1myqmwU7Ldnfj9iUmswnGynMion%2FX%2B%2Famacz1wJh8V2ThnDKMQBc3DM%2ByHONm4PKt1GMhqTie0cTDKspdVOvrPrVCmPddScRC4FBuiZVEEkR7iCzfp1XV%2B2ZPYqMEwWLhlhQfJRtihy7DZ9pyOqZpCBlYXAUkD5BEXv%2F2Y9a61cJKo0sTVeTI7BZs00zTPBlrFWfvZmLLoPENinYCWmBXp4zVjcINo8MFr%2BYUg83ALRn7wC0Oxh%2FeXNdPe2n22RpoJQhelyyxXxSbnfrx%2BbDUNecbOlpKeEFVDeVurbL%2B0zJwRour0Rn4FG8athu4t9VwwQUMFKydYydSagwa45djj%2BW7a0FoMkZP0h6qr8XgjEYoSPZ3%2FufggX5y8MlHb4xVt18tHaLJCESSMG8TQowe9kxlb0SzqSLY8i%2BQ0XnCOPky%2FZ8iLeAhnfItUaOMg7ErEtkf0wLrGI9xwjhbOW%2B6C0xYYdbov4dFg1qA5Nj0VxSwpq1Ng1wXXI63jygtrYPiJNStINVvDsvtVTDXpvrCBjqkAQQoENoy10HOfwclvF5oV5cGo9epuSmR6vQo5Z8iguqgHs407QEGe76ge%2FDVT0nbI5XwJLgoxkcicLD%2F6JOYOg8FG0%2BQNP2Yno1MSmD4RBrUE6fWCIfFud0O4gsmcC2FGCneFnrNm48V4Qa3TOB1oq18LUTfXAqd7XiRNpqOd%2BYGEZrxQljgaYg23RgVo43ry8zdH%2BCROtg0riQl5jebUbwMwngW&X-Amz-Signature=903244b2cd08afff22968ea093393446bdfd24e3a6654e47490c237c4f4eebf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHAGCQQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDWcbR5nij2ZZtB7J9VN8GlUT22f4SmCZKPkupq4jQ0igIhAMqa9P0usPOJktA6C0apVEDRySkQHqDJ%2F7vhKnH11%2FOQKv8DCHYQABoMNjM3NDIzMTgzODA1IgzBt%2BHqmbhyVI4uXx0q3ANXSuWw%2B8XDq7doI4Q3bJ%2BhwRsA2Yck%2FOAm5Sw7wi7vO7VQbVESk6TlGNo0Mq4cuI94Gk0QuqjAS8baFaR1yrQCFdp1mGHYxfAbDP71n1c4QVm1myqmwU7Ldnfj9iUmswnGynMion%2FX%2B%2Famacz1wJh8V2ThnDKMQBc3DM%2ByHONm4PKt1GMhqTie0cTDKspdVOvrPrVCmPddScRC4FBuiZVEEkR7iCzfp1XV%2B2ZPYqMEwWLhlhQfJRtihy7DZ9pyOqZpCBlYXAUkD5BEXv%2F2Y9a61cJKo0sTVeTI7BZs00zTPBlrFWfvZmLLoPENinYCWmBXp4zVjcINo8MFr%2BYUg83ALRn7wC0Oxh%2FeXNdPe2n22RpoJQhelyyxXxSbnfrx%2BbDUNecbOlpKeEFVDeVurbL%2B0zJwRour0Rn4FG8athu4t9VwwQUMFKydYydSagwa45djj%2BW7a0FoMkZP0h6qr8XgjEYoSPZ3%2FufggX5y8MlHb4xVt18tHaLJCESSMG8TQowe9kxlb0SzqSLY8i%2BQ0XnCOPky%2FZ8iLeAhnfItUaOMg7ErEtkf0wLrGI9xwjhbOW%2B6C0xYYdbov4dFg1qA5Nj0VxSwpq1Ng1wXXI63jygtrYPiJNStINVvDsvtVTDXpvrCBjqkAQQoENoy10HOfwclvF5oV5cGo9epuSmR6vQo5Z8iguqgHs407QEGe76ge%2FDVT0nbI5XwJLgoxkcicLD%2F6JOYOg8FG0%2BQNP2Yno1MSmD4RBrUE6fWCIfFud0O4gsmcC2FGCneFnrNm48V4Qa3TOB1oq18LUTfXAqd7XiRNpqOd%2BYGEZrxQljgaYg23RgVo43ry8zdH%2BCROtg0riQl5jebUbwMwngW&X-Amz-Signature=a2537a5bd6dc80c9dd0acdcd7b9e566ce5fdd661383ae66c1ef88e7f57b2c394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHAGCQQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDWcbR5nij2ZZtB7J9VN8GlUT22f4SmCZKPkupq4jQ0igIhAMqa9P0usPOJktA6C0apVEDRySkQHqDJ%2F7vhKnH11%2FOQKv8DCHYQABoMNjM3NDIzMTgzODA1IgzBt%2BHqmbhyVI4uXx0q3ANXSuWw%2B8XDq7doI4Q3bJ%2BhwRsA2Yck%2FOAm5Sw7wi7vO7VQbVESk6TlGNo0Mq4cuI94Gk0QuqjAS8baFaR1yrQCFdp1mGHYxfAbDP71n1c4QVm1myqmwU7Ldnfj9iUmswnGynMion%2FX%2B%2Famacz1wJh8V2ThnDKMQBc3DM%2ByHONm4PKt1GMhqTie0cTDKspdVOvrPrVCmPddScRC4FBuiZVEEkR7iCzfp1XV%2B2ZPYqMEwWLhlhQfJRtihy7DZ9pyOqZpCBlYXAUkD5BEXv%2F2Y9a61cJKo0sTVeTI7BZs00zTPBlrFWfvZmLLoPENinYCWmBXp4zVjcINo8MFr%2BYUg83ALRn7wC0Oxh%2FeXNdPe2n22RpoJQhelyyxXxSbnfrx%2BbDUNecbOlpKeEFVDeVurbL%2B0zJwRour0Rn4FG8athu4t9VwwQUMFKydYydSagwa45djj%2BW7a0FoMkZP0h6qr8XgjEYoSPZ3%2FufggX5y8MlHb4xVt18tHaLJCESSMG8TQowe9kxlb0SzqSLY8i%2BQ0XnCOPky%2FZ8iLeAhnfItUaOMg7ErEtkf0wLrGI9xwjhbOW%2B6C0xYYdbov4dFg1qA5Nj0VxSwpq1Ng1wXXI63jygtrYPiJNStINVvDsvtVTDXpvrCBjqkAQQoENoy10HOfwclvF5oV5cGo9epuSmR6vQo5Z8iguqgHs407QEGe76ge%2FDVT0nbI5XwJLgoxkcicLD%2F6JOYOg8FG0%2BQNP2Yno1MSmD4RBrUE6fWCIfFud0O4gsmcC2FGCneFnrNm48V4Qa3TOB1oq18LUTfXAqd7XiRNpqOd%2BYGEZrxQljgaYg23RgVo43ry8zdH%2BCROtg0riQl5jebUbwMwngW&X-Amz-Signature=abf9f4676b0192f142545b2ebe11a8e9277428d58b3670b694937aff3344e4bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHAGCQQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDWcbR5nij2ZZtB7J9VN8GlUT22f4SmCZKPkupq4jQ0igIhAMqa9P0usPOJktA6C0apVEDRySkQHqDJ%2F7vhKnH11%2FOQKv8DCHYQABoMNjM3NDIzMTgzODA1IgzBt%2BHqmbhyVI4uXx0q3ANXSuWw%2B8XDq7doI4Q3bJ%2BhwRsA2Yck%2FOAm5Sw7wi7vO7VQbVESk6TlGNo0Mq4cuI94Gk0QuqjAS8baFaR1yrQCFdp1mGHYxfAbDP71n1c4QVm1myqmwU7Ldnfj9iUmswnGynMion%2FX%2B%2Famacz1wJh8V2ThnDKMQBc3DM%2ByHONm4PKt1GMhqTie0cTDKspdVOvrPrVCmPddScRC4FBuiZVEEkR7iCzfp1XV%2B2ZPYqMEwWLhlhQfJRtihy7DZ9pyOqZpCBlYXAUkD5BEXv%2F2Y9a61cJKo0sTVeTI7BZs00zTPBlrFWfvZmLLoPENinYCWmBXp4zVjcINo8MFr%2BYUg83ALRn7wC0Oxh%2FeXNdPe2n22RpoJQhelyyxXxSbnfrx%2BbDUNecbOlpKeEFVDeVurbL%2B0zJwRour0Rn4FG8athu4t9VwwQUMFKydYydSagwa45djj%2BW7a0FoMkZP0h6qr8XgjEYoSPZ3%2FufggX5y8MlHb4xVt18tHaLJCESSMG8TQowe9kxlb0SzqSLY8i%2BQ0XnCOPky%2FZ8iLeAhnfItUaOMg7ErEtkf0wLrGI9xwjhbOW%2B6C0xYYdbov4dFg1qA5Nj0VxSwpq1Ng1wXXI63jygtrYPiJNStINVvDsvtVTDXpvrCBjqkAQQoENoy10HOfwclvF5oV5cGo9epuSmR6vQo5Z8iguqgHs407QEGe76ge%2FDVT0nbI5XwJLgoxkcicLD%2F6JOYOg8FG0%2BQNP2Yno1MSmD4RBrUE6fWCIfFud0O4gsmcC2FGCneFnrNm48V4Qa3TOB1oq18LUTfXAqd7XiRNpqOd%2BYGEZrxQljgaYg23RgVo43ry8zdH%2BCROtg0riQl5jebUbwMwngW&X-Amz-Signature=ac18b35b2bfa46a064a0f19df94ebb22a339c2bfef3190fdd602e7dd4b26a0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
