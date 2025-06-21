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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4TZK62%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjU47VV9kH9IXsjVbBfJuQqaWGkPCLcBkQlaujCZ9YrAiEAsAJkX3w6WmDBq1cqzI7h5%2F2pQbGfX6Dq4tU48QT1aRwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGac44QyJqPQbWGm1yrcA0TJnfwjk84ggYz7QkxoBXENIbdhfDqNEg%2FxN5LnQaDVkBihwd0gX8jyOTkW9enj1BEqyRxGi6slUuIY56RQEYwlQd3y8tcOu6YZOZDfg7E6BZDt17Pmg%2FcVeQBvCcNWrnqlKBe9YMKOEFNaB42FGby7x7CcihYg9CFfqRm3fAiiIJ1C9ChoT3cj4uSdLSm08nRi1%2Fd1RA7pbJwz7pTj%2Bbxciblb7P7ypAAb07ax60R8%2Bl3u71VZZdfxfxKnWw%2BnRrRJrr%2F1SJ75Vq6jaxKnXSpXtQrtuRnEtWwPDAub74iOJyT8%2FTheeAwQYOA1591czFqDWUGZxwkLY%2FJ6S4AR4lBdJ07oJzLBAdEyXyh3F93WeHetMM0t5yCBd5FUxbRsvm%2FzG20vXd6TlkbtHBPLCy8%2F%2FUhNwzFR30pslEXcTOGb1tJP6AtAk9VMeHHZBeZJlZR7sm9NjDACJybpMQYmITaK50deqBhYjMv9ZD0q9SHbKgXowQas5Am16RKlhcdDaxuXLEGrgOl0UDg0QzC43F4iCT46S1AsdMxXLXMf5SNPXZSqpv4LywlkZfIe2j24jEaeKZBw40fyLdzRds0bkOCt0Npj5mADcS4OQDLVPPSIxhyTMndtD4G%2BxpbnMPCO28IGOqUBJSDeNSwtvBv4hfUF9yAJxn1ZEiFzC%2BZCTZKt8FpJrsxvK9skUsD3pQQR0i3K3e6gV0hXjkzHs9MbM2KdTuPuZy%2B306ZebI%2FJ8ryBSzdr1ZaozlQG4wg5c4tTYGcgktGxgNo1c%2FOGqdchwLF2jPHk%2BmBSNv79Cy0Ncmv82blTg3pNa30DCMCDwR8jpPjPX8EJKcIITa7Akk8ahlNOPTP9b5b3I4xS&X-Amz-Signature=a12fe4609a72d58ac1d5a7a2edb83f7cf7adfa2e2fc67ebf692e21394a086cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4TZK62%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjU47VV9kH9IXsjVbBfJuQqaWGkPCLcBkQlaujCZ9YrAiEAsAJkX3w6WmDBq1cqzI7h5%2F2pQbGfX6Dq4tU48QT1aRwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGac44QyJqPQbWGm1yrcA0TJnfwjk84ggYz7QkxoBXENIbdhfDqNEg%2FxN5LnQaDVkBihwd0gX8jyOTkW9enj1BEqyRxGi6slUuIY56RQEYwlQd3y8tcOu6YZOZDfg7E6BZDt17Pmg%2FcVeQBvCcNWrnqlKBe9YMKOEFNaB42FGby7x7CcihYg9CFfqRm3fAiiIJ1C9ChoT3cj4uSdLSm08nRi1%2Fd1RA7pbJwz7pTj%2Bbxciblb7P7ypAAb07ax60R8%2Bl3u71VZZdfxfxKnWw%2BnRrRJrr%2F1SJ75Vq6jaxKnXSpXtQrtuRnEtWwPDAub74iOJyT8%2FTheeAwQYOA1591czFqDWUGZxwkLY%2FJ6S4AR4lBdJ07oJzLBAdEyXyh3F93WeHetMM0t5yCBd5FUxbRsvm%2FzG20vXd6TlkbtHBPLCy8%2F%2FUhNwzFR30pslEXcTOGb1tJP6AtAk9VMeHHZBeZJlZR7sm9NjDACJybpMQYmITaK50deqBhYjMv9ZD0q9SHbKgXowQas5Am16RKlhcdDaxuXLEGrgOl0UDg0QzC43F4iCT46S1AsdMxXLXMf5SNPXZSqpv4LywlkZfIe2j24jEaeKZBw40fyLdzRds0bkOCt0Npj5mADcS4OQDLVPPSIxhyTMndtD4G%2BxpbnMPCO28IGOqUBJSDeNSwtvBv4hfUF9yAJxn1ZEiFzC%2BZCTZKt8FpJrsxvK9skUsD3pQQR0i3K3e6gV0hXjkzHs9MbM2KdTuPuZy%2B306ZebI%2FJ8ryBSzdr1ZaozlQG4wg5c4tTYGcgktGxgNo1c%2FOGqdchwLF2jPHk%2BmBSNv79Cy0Ncmv82blTg3pNa30DCMCDwR8jpPjPX8EJKcIITa7Akk8ahlNOPTP9b5b3I4xS&X-Amz-Signature=5ab6072d6a54de8b0c19d4633486bf70ee1838eddc59be101c1474278b7fe0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4TZK62%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjU47VV9kH9IXsjVbBfJuQqaWGkPCLcBkQlaujCZ9YrAiEAsAJkX3w6WmDBq1cqzI7h5%2F2pQbGfX6Dq4tU48QT1aRwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGac44QyJqPQbWGm1yrcA0TJnfwjk84ggYz7QkxoBXENIbdhfDqNEg%2FxN5LnQaDVkBihwd0gX8jyOTkW9enj1BEqyRxGi6slUuIY56RQEYwlQd3y8tcOu6YZOZDfg7E6BZDt17Pmg%2FcVeQBvCcNWrnqlKBe9YMKOEFNaB42FGby7x7CcihYg9CFfqRm3fAiiIJ1C9ChoT3cj4uSdLSm08nRi1%2Fd1RA7pbJwz7pTj%2Bbxciblb7P7ypAAb07ax60R8%2Bl3u71VZZdfxfxKnWw%2BnRrRJrr%2F1SJ75Vq6jaxKnXSpXtQrtuRnEtWwPDAub74iOJyT8%2FTheeAwQYOA1591czFqDWUGZxwkLY%2FJ6S4AR4lBdJ07oJzLBAdEyXyh3F93WeHetMM0t5yCBd5FUxbRsvm%2FzG20vXd6TlkbtHBPLCy8%2F%2FUhNwzFR30pslEXcTOGb1tJP6AtAk9VMeHHZBeZJlZR7sm9NjDACJybpMQYmITaK50deqBhYjMv9ZD0q9SHbKgXowQas5Am16RKlhcdDaxuXLEGrgOl0UDg0QzC43F4iCT46S1AsdMxXLXMf5SNPXZSqpv4LywlkZfIe2j24jEaeKZBw40fyLdzRds0bkOCt0Npj5mADcS4OQDLVPPSIxhyTMndtD4G%2BxpbnMPCO28IGOqUBJSDeNSwtvBv4hfUF9yAJxn1ZEiFzC%2BZCTZKt8FpJrsxvK9skUsD3pQQR0i3K3e6gV0hXjkzHs9MbM2KdTuPuZy%2B306ZebI%2FJ8ryBSzdr1ZaozlQG4wg5c4tTYGcgktGxgNo1c%2FOGqdchwLF2jPHk%2BmBSNv79Cy0Ncmv82blTg3pNa30DCMCDwR8jpPjPX8EJKcIITa7Akk8ahlNOPTP9b5b3I4xS&X-Amz-Signature=88985368e79a863ef0888a0019bfe6b3d5650837868a5cefa869b8984e6bf2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4TZK62%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjU47VV9kH9IXsjVbBfJuQqaWGkPCLcBkQlaujCZ9YrAiEAsAJkX3w6WmDBq1cqzI7h5%2F2pQbGfX6Dq4tU48QT1aRwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGac44QyJqPQbWGm1yrcA0TJnfwjk84ggYz7QkxoBXENIbdhfDqNEg%2FxN5LnQaDVkBihwd0gX8jyOTkW9enj1BEqyRxGi6slUuIY56RQEYwlQd3y8tcOu6YZOZDfg7E6BZDt17Pmg%2FcVeQBvCcNWrnqlKBe9YMKOEFNaB42FGby7x7CcihYg9CFfqRm3fAiiIJ1C9ChoT3cj4uSdLSm08nRi1%2Fd1RA7pbJwz7pTj%2Bbxciblb7P7ypAAb07ax60R8%2Bl3u71VZZdfxfxKnWw%2BnRrRJrr%2F1SJ75Vq6jaxKnXSpXtQrtuRnEtWwPDAub74iOJyT8%2FTheeAwQYOA1591czFqDWUGZxwkLY%2FJ6S4AR4lBdJ07oJzLBAdEyXyh3F93WeHetMM0t5yCBd5FUxbRsvm%2FzG20vXd6TlkbtHBPLCy8%2F%2FUhNwzFR30pslEXcTOGb1tJP6AtAk9VMeHHZBeZJlZR7sm9NjDACJybpMQYmITaK50deqBhYjMv9ZD0q9SHbKgXowQas5Am16RKlhcdDaxuXLEGrgOl0UDg0QzC43F4iCT46S1AsdMxXLXMf5SNPXZSqpv4LywlkZfIe2j24jEaeKZBw40fyLdzRds0bkOCt0Npj5mADcS4OQDLVPPSIxhyTMndtD4G%2BxpbnMPCO28IGOqUBJSDeNSwtvBv4hfUF9yAJxn1ZEiFzC%2BZCTZKt8FpJrsxvK9skUsD3pQQR0i3K3e6gV0hXjkzHs9MbM2KdTuPuZy%2B306ZebI%2FJ8ryBSzdr1ZaozlQG4wg5c4tTYGcgktGxgNo1c%2FOGqdchwLF2jPHk%2BmBSNv79Cy0Ncmv82blTg3pNa30DCMCDwR8jpPjPX8EJKcIITa7Akk8ahlNOPTP9b5b3I4xS&X-Amz-Signature=c1c7c1676e81cc62a5025811f13e4aab419737d9b1659232a1ada66b3c33d1d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4TZK62%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjU47VV9kH9IXsjVbBfJuQqaWGkPCLcBkQlaujCZ9YrAiEAsAJkX3w6WmDBq1cqzI7h5%2F2pQbGfX6Dq4tU48QT1aRwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGac44QyJqPQbWGm1yrcA0TJnfwjk84ggYz7QkxoBXENIbdhfDqNEg%2FxN5LnQaDVkBihwd0gX8jyOTkW9enj1BEqyRxGi6slUuIY56RQEYwlQd3y8tcOu6YZOZDfg7E6BZDt17Pmg%2FcVeQBvCcNWrnqlKBe9YMKOEFNaB42FGby7x7CcihYg9CFfqRm3fAiiIJ1C9ChoT3cj4uSdLSm08nRi1%2Fd1RA7pbJwz7pTj%2Bbxciblb7P7ypAAb07ax60R8%2Bl3u71VZZdfxfxKnWw%2BnRrRJrr%2F1SJ75Vq6jaxKnXSpXtQrtuRnEtWwPDAub74iOJyT8%2FTheeAwQYOA1591czFqDWUGZxwkLY%2FJ6S4AR4lBdJ07oJzLBAdEyXyh3F93WeHetMM0t5yCBd5FUxbRsvm%2FzG20vXd6TlkbtHBPLCy8%2F%2FUhNwzFR30pslEXcTOGb1tJP6AtAk9VMeHHZBeZJlZR7sm9NjDACJybpMQYmITaK50deqBhYjMv9ZD0q9SHbKgXowQas5Am16RKlhcdDaxuXLEGrgOl0UDg0QzC43F4iCT46S1AsdMxXLXMf5SNPXZSqpv4LywlkZfIe2j24jEaeKZBw40fyLdzRds0bkOCt0Npj5mADcS4OQDLVPPSIxhyTMndtD4G%2BxpbnMPCO28IGOqUBJSDeNSwtvBv4hfUF9yAJxn1ZEiFzC%2BZCTZKt8FpJrsxvK9skUsD3pQQR0i3K3e6gV0hXjkzHs9MbM2KdTuPuZy%2B306ZebI%2FJ8ryBSzdr1ZaozlQG4wg5c4tTYGcgktGxgNo1c%2FOGqdchwLF2jPHk%2BmBSNv79Cy0Ncmv82blTg3pNa30DCMCDwR8jpPjPX8EJKcIITa7Akk8ahlNOPTP9b5b3I4xS&X-Amz-Signature=92a279fe696ce369871d14dd98cd9829b1e4b6b2a479bef9757de6655214c26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4TZK62%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjU47VV9kH9IXsjVbBfJuQqaWGkPCLcBkQlaujCZ9YrAiEAsAJkX3w6WmDBq1cqzI7h5%2F2pQbGfX6Dq4tU48QT1aRwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGac44QyJqPQbWGm1yrcA0TJnfwjk84ggYz7QkxoBXENIbdhfDqNEg%2FxN5LnQaDVkBihwd0gX8jyOTkW9enj1BEqyRxGi6slUuIY56RQEYwlQd3y8tcOu6YZOZDfg7E6BZDt17Pmg%2FcVeQBvCcNWrnqlKBe9YMKOEFNaB42FGby7x7CcihYg9CFfqRm3fAiiIJ1C9ChoT3cj4uSdLSm08nRi1%2Fd1RA7pbJwz7pTj%2Bbxciblb7P7ypAAb07ax60R8%2Bl3u71VZZdfxfxKnWw%2BnRrRJrr%2F1SJ75Vq6jaxKnXSpXtQrtuRnEtWwPDAub74iOJyT8%2FTheeAwQYOA1591czFqDWUGZxwkLY%2FJ6S4AR4lBdJ07oJzLBAdEyXyh3F93WeHetMM0t5yCBd5FUxbRsvm%2FzG20vXd6TlkbtHBPLCy8%2F%2FUhNwzFR30pslEXcTOGb1tJP6AtAk9VMeHHZBeZJlZR7sm9NjDACJybpMQYmITaK50deqBhYjMv9ZD0q9SHbKgXowQas5Am16RKlhcdDaxuXLEGrgOl0UDg0QzC43F4iCT46S1AsdMxXLXMf5SNPXZSqpv4LywlkZfIe2j24jEaeKZBw40fyLdzRds0bkOCt0Npj5mADcS4OQDLVPPSIxhyTMndtD4G%2BxpbnMPCO28IGOqUBJSDeNSwtvBv4hfUF9yAJxn1ZEiFzC%2BZCTZKt8FpJrsxvK9skUsD3pQQR0i3K3e6gV0hXjkzHs9MbM2KdTuPuZy%2B306ZebI%2FJ8ryBSzdr1ZaozlQG4wg5c4tTYGcgktGxgNo1c%2FOGqdchwLF2jPHk%2BmBSNv79Cy0Ncmv82blTg3pNa30DCMCDwR8jpPjPX8EJKcIITa7Akk8ahlNOPTP9b5b3I4xS&X-Amz-Signature=468954f86a8b3334b361313599e07b1b72383b1287dffacd41399d5315aa4013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
