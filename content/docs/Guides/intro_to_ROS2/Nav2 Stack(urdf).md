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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HAUFHU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNVDF36m%2BqiddXU2csdBwAxqdCwDjRr0j46Yjmi2b8qAIhAI360xCyNs4O3MDMlX6vz8N9aLJj%2FEaUjQXmXOhjMSqGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7svgyQ%2FWhHJCNg9sq3APUw79Ae4LQUJbglRFdihiPZbQsRIpjKWh7CyO2uw%2BEYhIqUsiWp61qwaJy4L0LOFB8DYwyoC%2BphzCpeWpOEL5x4Gklv0QPGzBpuXEnDHEkjstw4lYgjfyBg0Fj0ruRzL2Of2vlCvqWnjdfKXLTrlRFcD50VnvYf9UcEdA2k4EiD3RDiIAZT7j0SWLM%2BVkONdKMuWeRyBMW0MSOE44mTdPHyZmR7COEXihRn2zpG3hSVpxeXoLOEcR2Br60S5EHvL7HhAlNYFNR2gYcCDGnSjVqpKCjDC71WXn5SAAtERq9rml40d9%2BejjJDrx27ZLpRjuMUwfmX1HWWIJE5u7ZqTjybZ%2FE8iuSmbp3BAz%2FtOomcsV%2Bm9P6go5jx0XNlLZezqdaSbg%2BadmjYqAktB4NxBlEbOaTNx3vffqw34MZMSGX8td6ktJvcyXGZB%2FJNy%2FOJtj9pzb0QO7jZwzWVNawkX66mFL%2F9qeAyamyTmmiAR1r%2FCxczbKCqs%2Fp9LmpU7jUcJ7NnHaWWDoep49PmA1bb9FR12n6UczQSqszc4Bb%2BF464n1e0KJJ3mXEd5nf7eKff5J1p6T9NVqTzBXw2jyitQoAL6Z2x%2FOn2L1JxJjgOfkmmh0uPJdfC8TdoyulBjCgoZ7CBjqkAZBCrRBaz6jvZWITERsOnGGrfZ8KT558od3WUIP7Hx6mfvgmibXrMEnO7YnyV0QISsOt%2FX2AJTs4tvk6dCwpgJDnrPdEljk5vuAxA3YaPbZb3CZJdDw1IgdByAQcjzgqLP1W%2B3Wjf6%2B2lqooS%2BRedAs9lm2Xejo9ZteuSWr69Ov9G0Eqp6hWBlBzhBKLSn5QcSErIxSZpNhiSWLxyyWpeh%2BHeEYZ&X-Amz-Signature=ee07ba8bccba8500b1bd7f003ab84b28c54c2e470ade6d54c0b30b5aeea2d3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HAUFHU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNVDF36m%2BqiddXU2csdBwAxqdCwDjRr0j46Yjmi2b8qAIhAI360xCyNs4O3MDMlX6vz8N9aLJj%2FEaUjQXmXOhjMSqGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7svgyQ%2FWhHJCNg9sq3APUw79Ae4LQUJbglRFdihiPZbQsRIpjKWh7CyO2uw%2BEYhIqUsiWp61qwaJy4L0LOFB8DYwyoC%2BphzCpeWpOEL5x4Gklv0QPGzBpuXEnDHEkjstw4lYgjfyBg0Fj0ruRzL2Of2vlCvqWnjdfKXLTrlRFcD50VnvYf9UcEdA2k4EiD3RDiIAZT7j0SWLM%2BVkONdKMuWeRyBMW0MSOE44mTdPHyZmR7COEXihRn2zpG3hSVpxeXoLOEcR2Br60S5EHvL7HhAlNYFNR2gYcCDGnSjVqpKCjDC71WXn5SAAtERq9rml40d9%2BejjJDrx27ZLpRjuMUwfmX1HWWIJE5u7ZqTjybZ%2FE8iuSmbp3BAz%2FtOomcsV%2Bm9P6go5jx0XNlLZezqdaSbg%2BadmjYqAktB4NxBlEbOaTNx3vffqw34MZMSGX8td6ktJvcyXGZB%2FJNy%2FOJtj9pzb0QO7jZwzWVNawkX66mFL%2F9qeAyamyTmmiAR1r%2FCxczbKCqs%2Fp9LmpU7jUcJ7NnHaWWDoep49PmA1bb9FR12n6UczQSqszc4Bb%2BF464n1e0KJJ3mXEd5nf7eKff5J1p6T9NVqTzBXw2jyitQoAL6Z2x%2FOn2L1JxJjgOfkmmh0uPJdfC8TdoyulBjCgoZ7CBjqkAZBCrRBaz6jvZWITERsOnGGrfZ8KT558od3WUIP7Hx6mfvgmibXrMEnO7YnyV0QISsOt%2FX2AJTs4tvk6dCwpgJDnrPdEljk5vuAxA3YaPbZb3CZJdDw1IgdByAQcjzgqLP1W%2B3Wjf6%2B2lqooS%2BRedAs9lm2Xejo9ZteuSWr69Ov9G0Eqp6hWBlBzhBKLSn5QcSErIxSZpNhiSWLxyyWpeh%2BHeEYZ&X-Amz-Signature=e2ec6b14b52cd5ca2946cf3b5b66a4ff82cbeb7ef72284cd3385cf153ff294ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HAUFHU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNVDF36m%2BqiddXU2csdBwAxqdCwDjRr0j46Yjmi2b8qAIhAI360xCyNs4O3MDMlX6vz8N9aLJj%2FEaUjQXmXOhjMSqGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7svgyQ%2FWhHJCNg9sq3APUw79Ae4LQUJbglRFdihiPZbQsRIpjKWh7CyO2uw%2BEYhIqUsiWp61qwaJy4L0LOFB8DYwyoC%2BphzCpeWpOEL5x4Gklv0QPGzBpuXEnDHEkjstw4lYgjfyBg0Fj0ruRzL2Of2vlCvqWnjdfKXLTrlRFcD50VnvYf9UcEdA2k4EiD3RDiIAZT7j0SWLM%2BVkONdKMuWeRyBMW0MSOE44mTdPHyZmR7COEXihRn2zpG3hSVpxeXoLOEcR2Br60S5EHvL7HhAlNYFNR2gYcCDGnSjVqpKCjDC71WXn5SAAtERq9rml40d9%2BejjJDrx27ZLpRjuMUwfmX1HWWIJE5u7ZqTjybZ%2FE8iuSmbp3BAz%2FtOomcsV%2Bm9P6go5jx0XNlLZezqdaSbg%2BadmjYqAktB4NxBlEbOaTNx3vffqw34MZMSGX8td6ktJvcyXGZB%2FJNy%2FOJtj9pzb0QO7jZwzWVNawkX66mFL%2F9qeAyamyTmmiAR1r%2FCxczbKCqs%2Fp9LmpU7jUcJ7NnHaWWDoep49PmA1bb9FR12n6UczQSqszc4Bb%2BF464n1e0KJJ3mXEd5nf7eKff5J1p6T9NVqTzBXw2jyitQoAL6Z2x%2FOn2L1JxJjgOfkmmh0uPJdfC8TdoyulBjCgoZ7CBjqkAZBCrRBaz6jvZWITERsOnGGrfZ8KT558od3WUIP7Hx6mfvgmibXrMEnO7YnyV0QISsOt%2FX2AJTs4tvk6dCwpgJDnrPdEljk5vuAxA3YaPbZb3CZJdDw1IgdByAQcjzgqLP1W%2B3Wjf6%2B2lqooS%2BRedAs9lm2Xejo9ZteuSWr69Ov9G0Eqp6hWBlBzhBKLSn5QcSErIxSZpNhiSWLxyyWpeh%2BHeEYZ&X-Amz-Signature=374e285a6ec793ffcb3562e5f34925838917016406e8f0a69103129fcc77bf94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HAUFHU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNVDF36m%2BqiddXU2csdBwAxqdCwDjRr0j46Yjmi2b8qAIhAI360xCyNs4O3MDMlX6vz8N9aLJj%2FEaUjQXmXOhjMSqGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7svgyQ%2FWhHJCNg9sq3APUw79Ae4LQUJbglRFdihiPZbQsRIpjKWh7CyO2uw%2BEYhIqUsiWp61qwaJy4L0LOFB8DYwyoC%2BphzCpeWpOEL5x4Gklv0QPGzBpuXEnDHEkjstw4lYgjfyBg0Fj0ruRzL2Of2vlCvqWnjdfKXLTrlRFcD50VnvYf9UcEdA2k4EiD3RDiIAZT7j0SWLM%2BVkONdKMuWeRyBMW0MSOE44mTdPHyZmR7COEXihRn2zpG3hSVpxeXoLOEcR2Br60S5EHvL7HhAlNYFNR2gYcCDGnSjVqpKCjDC71WXn5SAAtERq9rml40d9%2BejjJDrx27ZLpRjuMUwfmX1HWWIJE5u7ZqTjybZ%2FE8iuSmbp3BAz%2FtOomcsV%2Bm9P6go5jx0XNlLZezqdaSbg%2BadmjYqAktB4NxBlEbOaTNx3vffqw34MZMSGX8td6ktJvcyXGZB%2FJNy%2FOJtj9pzb0QO7jZwzWVNawkX66mFL%2F9qeAyamyTmmiAR1r%2FCxczbKCqs%2Fp9LmpU7jUcJ7NnHaWWDoep49PmA1bb9FR12n6UczQSqszc4Bb%2BF464n1e0KJJ3mXEd5nf7eKff5J1p6T9NVqTzBXw2jyitQoAL6Z2x%2FOn2L1JxJjgOfkmmh0uPJdfC8TdoyulBjCgoZ7CBjqkAZBCrRBaz6jvZWITERsOnGGrfZ8KT558od3WUIP7Hx6mfvgmibXrMEnO7YnyV0QISsOt%2FX2AJTs4tvk6dCwpgJDnrPdEljk5vuAxA3YaPbZb3CZJdDw1IgdByAQcjzgqLP1W%2B3Wjf6%2B2lqooS%2BRedAs9lm2Xejo9ZteuSWr69Ov9G0Eqp6hWBlBzhBKLSn5QcSErIxSZpNhiSWLxyyWpeh%2BHeEYZ&X-Amz-Signature=41d299b10c857ec94d96a813fbc60f7f7cd903bcef54af5e92327dd8493daf04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HAUFHU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNVDF36m%2BqiddXU2csdBwAxqdCwDjRr0j46Yjmi2b8qAIhAI360xCyNs4O3MDMlX6vz8N9aLJj%2FEaUjQXmXOhjMSqGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7svgyQ%2FWhHJCNg9sq3APUw79Ae4LQUJbglRFdihiPZbQsRIpjKWh7CyO2uw%2BEYhIqUsiWp61qwaJy4L0LOFB8DYwyoC%2BphzCpeWpOEL5x4Gklv0QPGzBpuXEnDHEkjstw4lYgjfyBg0Fj0ruRzL2Of2vlCvqWnjdfKXLTrlRFcD50VnvYf9UcEdA2k4EiD3RDiIAZT7j0SWLM%2BVkONdKMuWeRyBMW0MSOE44mTdPHyZmR7COEXihRn2zpG3hSVpxeXoLOEcR2Br60S5EHvL7HhAlNYFNR2gYcCDGnSjVqpKCjDC71WXn5SAAtERq9rml40d9%2BejjJDrx27ZLpRjuMUwfmX1HWWIJE5u7ZqTjybZ%2FE8iuSmbp3BAz%2FtOomcsV%2Bm9P6go5jx0XNlLZezqdaSbg%2BadmjYqAktB4NxBlEbOaTNx3vffqw34MZMSGX8td6ktJvcyXGZB%2FJNy%2FOJtj9pzb0QO7jZwzWVNawkX66mFL%2F9qeAyamyTmmiAR1r%2FCxczbKCqs%2Fp9LmpU7jUcJ7NnHaWWDoep49PmA1bb9FR12n6UczQSqszc4Bb%2BF464n1e0KJJ3mXEd5nf7eKff5J1p6T9NVqTzBXw2jyitQoAL6Z2x%2FOn2L1JxJjgOfkmmh0uPJdfC8TdoyulBjCgoZ7CBjqkAZBCrRBaz6jvZWITERsOnGGrfZ8KT558od3WUIP7Hx6mfvgmibXrMEnO7YnyV0QISsOt%2FX2AJTs4tvk6dCwpgJDnrPdEljk5vuAxA3YaPbZb3CZJdDw1IgdByAQcjzgqLP1W%2B3Wjf6%2B2lqooS%2BRedAs9lm2Xejo9ZteuSWr69Ov9G0Eqp6hWBlBzhBKLSn5QcSErIxSZpNhiSWLxyyWpeh%2BHeEYZ&X-Amz-Signature=5671883d5c16d492413ec29fe86f6881b633025029e42c9ca35ccd21087955fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HAUFHU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNVDF36m%2BqiddXU2csdBwAxqdCwDjRr0j46Yjmi2b8qAIhAI360xCyNs4O3MDMlX6vz8N9aLJj%2FEaUjQXmXOhjMSqGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7svgyQ%2FWhHJCNg9sq3APUw79Ae4LQUJbglRFdihiPZbQsRIpjKWh7CyO2uw%2BEYhIqUsiWp61qwaJy4L0LOFB8DYwyoC%2BphzCpeWpOEL5x4Gklv0QPGzBpuXEnDHEkjstw4lYgjfyBg0Fj0ruRzL2Of2vlCvqWnjdfKXLTrlRFcD50VnvYf9UcEdA2k4EiD3RDiIAZT7j0SWLM%2BVkONdKMuWeRyBMW0MSOE44mTdPHyZmR7COEXihRn2zpG3hSVpxeXoLOEcR2Br60S5EHvL7HhAlNYFNR2gYcCDGnSjVqpKCjDC71WXn5SAAtERq9rml40d9%2BejjJDrx27ZLpRjuMUwfmX1HWWIJE5u7ZqTjybZ%2FE8iuSmbp3BAz%2FtOomcsV%2Bm9P6go5jx0XNlLZezqdaSbg%2BadmjYqAktB4NxBlEbOaTNx3vffqw34MZMSGX8td6ktJvcyXGZB%2FJNy%2FOJtj9pzb0QO7jZwzWVNawkX66mFL%2F9qeAyamyTmmiAR1r%2FCxczbKCqs%2Fp9LmpU7jUcJ7NnHaWWDoep49PmA1bb9FR12n6UczQSqszc4Bb%2BF464n1e0KJJ3mXEd5nf7eKff5J1p6T9NVqTzBXw2jyitQoAL6Z2x%2FOn2L1JxJjgOfkmmh0uPJdfC8TdoyulBjCgoZ7CBjqkAZBCrRBaz6jvZWITERsOnGGrfZ8KT558od3WUIP7Hx6mfvgmibXrMEnO7YnyV0QISsOt%2FX2AJTs4tvk6dCwpgJDnrPdEljk5vuAxA3YaPbZb3CZJdDw1IgdByAQcjzgqLP1W%2B3Wjf6%2B2lqooS%2BRedAs9lm2Xejo9ZteuSWr69Ov9G0Eqp6hWBlBzhBKLSn5QcSErIxSZpNhiSWLxyyWpeh%2BHeEYZ&X-Amz-Signature=4da2cc354593b235e35c11bf2b2944e9b3e959de374ccc5ea5d59c2954dd4b5f&X-Amz-SignedHeaders=host&x-id=GetObject)
