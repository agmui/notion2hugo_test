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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6SFZKUX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5tbPBO0LKrcBVnLwZkk5ViCqouie1BxRO6nfvf9WHjQIhALknyky63NHxHAkzEeubEwDTnO8pQRIwmynB6kAx5svUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2EA0opfQDwvnvFKQq3AO0%2FAdGDwkr3HsG7YStWW%2BlUDhqA47v3iY%2FXcjFt2jEZMaVgYRlYWbxN%2B5h%2Bo%2FDB4Cpb7OAI%2BB%2BCWIW6IQbLbtwAJeRZ2qanquHefVrUV7QQEnOz4tkUWVtOkHR%2FcK%2FSBEFvVlKoxzdQqlijoJ5NNniazX4hQjCI6PmLCypClnTiUN29xqODajQUbG%2FMSuc0wWHzbgzaWmYcf%2FxgOLql26rgIXzSqnM0jdyP8AT42JPG6i6mMK5R%2BJ1oxZVNNEEyhYMnLZLUwjlsN15yi7FGYCGk71BE4uoceGfd%2FpSQHPxis%2BSyERiqRP9YAS6EgRsyU5l0PL6fzhInhIEcMuD5H8hMmsP0lFPU4nBGWnC9pxoM30KrPts41LHaaTZDB5o4lV6kIhaoMUYd%2BMLLKxj%2Bzuo9ONOlw4IUzm0LeLFDFh%2FOb7fQa3xQkFC4hjptAgtVqcstuFMQrqso5y%2BeKCvVXhTIY%2F8HViGrwDufP8oQrF8Ycgxa9NUMZxe2PWAJ3ZGBR3EThZe%2Bn7HjceYgfYciAYkPUNYO5E3vrYE3PBD7UjcDNRBzAKaAfgJzztCc5v%2BkAQu%2FUaF0sOBN8CVeVC5jnbqBKUnOfJAPY3XrHQn5pRRffrC2NDlmIYUdfPRUjDHxr2%2FBjqkAfwYUSvbxeY0cO%2FUH5JAm9vcwf%2F0VYMAXMZkTkOpDuGEcR%2BnTM4lk08kCQjJCwl5dxXXG%2BpFdvg0wsIwBnXNnfYOvbwlBPbpxr9b27cntObIEibZqSooynPC6OBYyZdMgtCGUYP%2BTBdJgjFuI5L2gG7WLwUTv%2B5zJ5U8mMJTKJjYh6oFWsb954GUyGApa6T1x4RqEqeXKCAoWosaiLMNdNdq2DVP&X-Amz-Signature=134ac7d1f8558987356efb73f4b84b15ebc44b64e8af891955f9281553e91fef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6SFZKUX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5tbPBO0LKrcBVnLwZkk5ViCqouie1BxRO6nfvf9WHjQIhALknyky63NHxHAkzEeubEwDTnO8pQRIwmynB6kAx5svUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2EA0opfQDwvnvFKQq3AO0%2FAdGDwkr3HsG7YStWW%2BlUDhqA47v3iY%2FXcjFt2jEZMaVgYRlYWbxN%2B5h%2Bo%2FDB4Cpb7OAI%2BB%2BCWIW6IQbLbtwAJeRZ2qanquHefVrUV7QQEnOz4tkUWVtOkHR%2FcK%2FSBEFvVlKoxzdQqlijoJ5NNniazX4hQjCI6PmLCypClnTiUN29xqODajQUbG%2FMSuc0wWHzbgzaWmYcf%2FxgOLql26rgIXzSqnM0jdyP8AT42JPG6i6mMK5R%2BJ1oxZVNNEEyhYMnLZLUwjlsN15yi7FGYCGk71BE4uoceGfd%2FpSQHPxis%2BSyERiqRP9YAS6EgRsyU5l0PL6fzhInhIEcMuD5H8hMmsP0lFPU4nBGWnC9pxoM30KrPts41LHaaTZDB5o4lV6kIhaoMUYd%2BMLLKxj%2Bzuo9ONOlw4IUzm0LeLFDFh%2FOb7fQa3xQkFC4hjptAgtVqcstuFMQrqso5y%2BeKCvVXhTIY%2F8HViGrwDufP8oQrF8Ycgxa9NUMZxe2PWAJ3ZGBR3EThZe%2Bn7HjceYgfYciAYkPUNYO5E3vrYE3PBD7UjcDNRBzAKaAfgJzztCc5v%2BkAQu%2FUaF0sOBN8CVeVC5jnbqBKUnOfJAPY3XrHQn5pRRffrC2NDlmIYUdfPRUjDHxr2%2FBjqkAfwYUSvbxeY0cO%2FUH5JAm9vcwf%2F0VYMAXMZkTkOpDuGEcR%2BnTM4lk08kCQjJCwl5dxXXG%2BpFdvg0wsIwBnXNnfYOvbwlBPbpxr9b27cntObIEibZqSooynPC6OBYyZdMgtCGUYP%2BTBdJgjFuI5L2gG7WLwUTv%2B5zJ5U8mMJTKJjYh6oFWsb954GUyGApa6T1x4RqEqeXKCAoWosaiLMNdNdq2DVP&X-Amz-Signature=8b941344e75feb1bbdf5e1b139b5e9c6111008b215d4e889b872ca4d6e777e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6SFZKUX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5tbPBO0LKrcBVnLwZkk5ViCqouie1BxRO6nfvf9WHjQIhALknyky63NHxHAkzEeubEwDTnO8pQRIwmynB6kAx5svUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2EA0opfQDwvnvFKQq3AO0%2FAdGDwkr3HsG7YStWW%2BlUDhqA47v3iY%2FXcjFt2jEZMaVgYRlYWbxN%2B5h%2Bo%2FDB4Cpb7OAI%2BB%2BCWIW6IQbLbtwAJeRZ2qanquHefVrUV7QQEnOz4tkUWVtOkHR%2FcK%2FSBEFvVlKoxzdQqlijoJ5NNniazX4hQjCI6PmLCypClnTiUN29xqODajQUbG%2FMSuc0wWHzbgzaWmYcf%2FxgOLql26rgIXzSqnM0jdyP8AT42JPG6i6mMK5R%2BJ1oxZVNNEEyhYMnLZLUwjlsN15yi7FGYCGk71BE4uoceGfd%2FpSQHPxis%2BSyERiqRP9YAS6EgRsyU5l0PL6fzhInhIEcMuD5H8hMmsP0lFPU4nBGWnC9pxoM30KrPts41LHaaTZDB5o4lV6kIhaoMUYd%2BMLLKxj%2Bzuo9ONOlw4IUzm0LeLFDFh%2FOb7fQa3xQkFC4hjptAgtVqcstuFMQrqso5y%2BeKCvVXhTIY%2F8HViGrwDufP8oQrF8Ycgxa9NUMZxe2PWAJ3ZGBR3EThZe%2Bn7HjceYgfYciAYkPUNYO5E3vrYE3PBD7UjcDNRBzAKaAfgJzztCc5v%2BkAQu%2FUaF0sOBN8CVeVC5jnbqBKUnOfJAPY3XrHQn5pRRffrC2NDlmIYUdfPRUjDHxr2%2FBjqkAfwYUSvbxeY0cO%2FUH5JAm9vcwf%2F0VYMAXMZkTkOpDuGEcR%2BnTM4lk08kCQjJCwl5dxXXG%2BpFdvg0wsIwBnXNnfYOvbwlBPbpxr9b27cntObIEibZqSooynPC6OBYyZdMgtCGUYP%2BTBdJgjFuI5L2gG7WLwUTv%2B5zJ5U8mMJTKJjYh6oFWsb954GUyGApa6T1x4RqEqeXKCAoWosaiLMNdNdq2DVP&X-Amz-Signature=3fa3deeaeae2f35b53924a7dfb333383e1f1c1784e5e6e79eb1cc15642b5055f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6SFZKUX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5tbPBO0LKrcBVnLwZkk5ViCqouie1BxRO6nfvf9WHjQIhALknyky63NHxHAkzEeubEwDTnO8pQRIwmynB6kAx5svUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2EA0opfQDwvnvFKQq3AO0%2FAdGDwkr3HsG7YStWW%2BlUDhqA47v3iY%2FXcjFt2jEZMaVgYRlYWbxN%2B5h%2Bo%2FDB4Cpb7OAI%2BB%2BCWIW6IQbLbtwAJeRZ2qanquHefVrUV7QQEnOz4tkUWVtOkHR%2FcK%2FSBEFvVlKoxzdQqlijoJ5NNniazX4hQjCI6PmLCypClnTiUN29xqODajQUbG%2FMSuc0wWHzbgzaWmYcf%2FxgOLql26rgIXzSqnM0jdyP8AT42JPG6i6mMK5R%2BJ1oxZVNNEEyhYMnLZLUwjlsN15yi7FGYCGk71BE4uoceGfd%2FpSQHPxis%2BSyERiqRP9YAS6EgRsyU5l0PL6fzhInhIEcMuD5H8hMmsP0lFPU4nBGWnC9pxoM30KrPts41LHaaTZDB5o4lV6kIhaoMUYd%2BMLLKxj%2Bzuo9ONOlw4IUzm0LeLFDFh%2FOb7fQa3xQkFC4hjptAgtVqcstuFMQrqso5y%2BeKCvVXhTIY%2F8HViGrwDufP8oQrF8Ycgxa9NUMZxe2PWAJ3ZGBR3EThZe%2Bn7HjceYgfYciAYkPUNYO5E3vrYE3PBD7UjcDNRBzAKaAfgJzztCc5v%2BkAQu%2FUaF0sOBN8CVeVC5jnbqBKUnOfJAPY3XrHQn5pRRffrC2NDlmIYUdfPRUjDHxr2%2FBjqkAfwYUSvbxeY0cO%2FUH5JAm9vcwf%2F0VYMAXMZkTkOpDuGEcR%2BnTM4lk08kCQjJCwl5dxXXG%2BpFdvg0wsIwBnXNnfYOvbwlBPbpxr9b27cntObIEibZqSooynPC6OBYyZdMgtCGUYP%2BTBdJgjFuI5L2gG7WLwUTv%2B5zJ5U8mMJTKJjYh6oFWsb954GUyGApa6T1x4RqEqeXKCAoWosaiLMNdNdq2DVP&X-Amz-Signature=d914ebe08407a9838b2e4848632a3146c553d68f4bb1fca763342daf6944afb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6SFZKUX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5tbPBO0LKrcBVnLwZkk5ViCqouie1BxRO6nfvf9WHjQIhALknyky63NHxHAkzEeubEwDTnO8pQRIwmynB6kAx5svUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2EA0opfQDwvnvFKQq3AO0%2FAdGDwkr3HsG7YStWW%2BlUDhqA47v3iY%2FXcjFt2jEZMaVgYRlYWbxN%2B5h%2Bo%2FDB4Cpb7OAI%2BB%2BCWIW6IQbLbtwAJeRZ2qanquHefVrUV7QQEnOz4tkUWVtOkHR%2FcK%2FSBEFvVlKoxzdQqlijoJ5NNniazX4hQjCI6PmLCypClnTiUN29xqODajQUbG%2FMSuc0wWHzbgzaWmYcf%2FxgOLql26rgIXzSqnM0jdyP8AT42JPG6i6mMK5R%2BJ1oxZVNNEEyhYMnLZLUwjlsN15yi7FGYCGk71BE4uoceGfd%2FpSQHPxis%2BSyERiqRP9YAS6EgRsyU5l0PL6fzhInhIEcMuD5H8hMmsP0lFPU4nBGWnC9pxoM30KrPts41LHaaTZDB5o4lV6kIhaoMUYd%2BMLLKxj%2Bzuo9ONOlw4IUzm0LeLFDFh%2FOb7fQa3xQkFC4hjptAgtVqcstuFMQrqso5y%2BeKCvVXhTIY%2F8HViGrwDufP8oQrF8Ycgxa9NUMZxe2PWAJ3ZGBR3EThZe%2Bn7HjceYgfYciAYkPUNYO5E3vrYE3PBD7UjcDNRBzAKaAfgJzztCc5v%2BkAQu%2FUaF0sOBN8CVeVC5jnbqBKUnOfJAPY3XrHQn5pRRffrC2NDlmIYUdfPRUjDHxr2%2FBjqkAfwYUSvbxeY0cO%2FUH5JAm9vcwf%2F0VYMAXMZkTkOpDuGEcR%2BnTM4lk08kCQjJCwl5dxXXG%2BpFdvg0wsIwBnXNnfYOvbwlBPbpxr9b27cntObIEibZqSooynPC6OBYyZdMgtCGUYP%2BTBdJgjFuI5L2gG7WLwUTv%2B5zJ5U8mMJTKJjYh6oFWsb954GUyGApa6T1x4RqEqeXKCAoWosaiLMNdNdq2DVP&X-Amz-Signature=1be16200b81e0f9492e2b4f0186c6eab5827a31d545e54188c6be91618979ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6SFZKUX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5tbPBO0LKrcBVnLwZkk5ViCqouie1BxRO6nfvf9WHjQIhALknyky63NHxHAkzEeubEwDTnO8pQRIwmynB6kAx5svUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2EA0opfQDwvnvFKQq3AO0%2FAdGDwkr3HsG7YStWW%2BlUDhqA47v3iY%2FXcjFt2jEZMaVgYRlYWbxN%2B5h%2Bo%2FDB4Cpb7OAI%2BB%2BCWIW6IQbLbtwAJeRZ2qanquHefVrUV7QQEnOz4tkUWVtOkHR%2FcK%2FSBEFvVlKoxzdQqlijoJ5NNniazX4hQjCI6PmLCypClnTiUN29xqODajQUbG%2FMSuc0wWHzbgzaWmYcf%2FxgOLql26rgIXzSqnM0jdyP8AT42JPG6i6mMK5R%2BJ1oxZVNNEEyhYMnLZLUwjlsN15yi7FGYCGk71BE4uoceGfd%2FpSQHPxis%2BSyERiqRP9YAS6EgRsyU5l0PL6fzhInhIEcMuD5H8hMmsP0lFPU4nBGWnC9pxoM30KrPts41LHaaTZDB5o4lV6kIhaoMUYd%2BMLLKxj%2Bzuo9ONOlw4IUzm0LeLFDFh%2FOb7fQa3xQkFC4hjptAgtVqcstuFMQrqso5y%2BeKCvVXhTIY%2F8HViGrwDufP8oQrF8Ycgxa9NUMZxe2PWAJ3ZGBR3EThZe%2Bn7HjceYgfYciAYkPUNYO5E3vrYE3PBD7UjcDNRBzAKaAfgJzztCc5v%2BkAQu%2FUaF0sOBN8CVeVC5jnbqBKUnOfJAPY3XrHQn5pRRffrC2NDlmIYUdfPRUjDHxr2%2FBjqkAfwYUSvbxeY0cO%2FUH5JAm9vcwf%2F0VYMAXMZkTkOpDuGEcR%2BnTM4lk08kCQjJCwl5dxXXG%2BpFdvg0wsIwBnXNnfYOvbwlBPbpxr9b27cntObIEibZqSooynPC6OBYyZdMgtCGUYP%2BTBdJgjFuI5L2gG7WLwUTv%2B5zJ5U8mMJTKJjYh6oFWsb954GUyGApa6T1x4RqEqeXKCAoWosaiLMNdNdq2DVP&X-Amz-Signature=e9422c30e31676182b13f678317ca26f3626cd171337ca97c1677c8c5002916a&X-Amz-SignedHeaders=host&x-id=GetObject)
