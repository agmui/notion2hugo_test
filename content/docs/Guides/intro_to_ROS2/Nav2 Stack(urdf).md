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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BTRDHS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCjwrjdGjxBmyI8c6qSjxzef8XrYtkmcJid1nIVSgSEIQIgJSC1Ll4sGGq7xTKd7N9%2Fus6ggLAvOlEPsxaXH7wGHS4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWb6NatQq%2BasN4UMircAymMfaMPbFhfCaV551IVpCYTsKhuocpeWXe4pWMFPDIzy9YPfCciWiR3R7LavHEmIoGkSh0NeH302IwYgqelwW5v2fDYxptwi4FMz7%2B10YpSvJrb5L5hxDWX1gzBYL8CVnGBv8awbiITa9bNPAS%2FPsQmkduCgMHoxlqHUdnZH1mhAUjBzHQ4QR7Hb9%2FirBLj2zDhPNjRge%2FzYJYgMzHdhGMS9pDvNX%2BR6ERRtBC7UBT72GDILeRC7%2FMFAQLHGI%2BpoNcH%2F6nlxlIgJecT%2FfJZQZ%2BDSHdBxpgcPyJ6G95Qs2fzDZumIAjUZh4g6V6%2Bv1ivK3UT8HkLho6Ir5WxK%2BhczHCxKAEjDQVTw9WTcoKVemuXFNunvaByhKYgFZLf60vHVnxoIin8q5vX5x%2FdC4vrHfITv6t9erunvtrVT3fibZAWWbjWapQ%2BIgAxWUHwjgJ%2BQLZaIvxmPzXWCt%2F%2Bz35BsBSmc7%2Bymy4wN9TvjAZgExqxkrVTCVMkntLAo7Ey71Kl8XiUu8HVqOzl1UWxnw5vrTZyJP348EWW7tt%2FGpep2OsPZ3eifcl8aP1yUSz%2FrJoSeWnbVFZH6IWgxxon89fO5FlIev0Is6ou1iqPzzZ%2B9ez%2BwIOYrl%2FuI%2FxMNxkDMLeEssMGOqUB9KKBFz%2BOL725t6rdkp0RXlBpldKbJSE9a5z8u58i8mWoSubzWASdBBVhBMQS24PmDTnBVuVzQsA0s9RIVT3jsavHe0VEGrG1%2FwaClDAaMIS7jummKl99lVLxMW1Zf2AeSoDKKpmlwlML7KW3dCUEV%2BpvYd1cazuIMReO8rQnRDA9lTng2u50rDMtA9zyQ2C%2BEqTcZMDlYPvuR4Y6mKiYKeV5RdbY&X-Amz-Signature=221e05aa44a0e3b5d346310c42a9be26d81a1ac5e058f2e53a533627e99bac06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BTRDHS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCjwrjdGjxBmyI8c6qSjxzef8XrYtkmcJid1nIVSgSEIQIgJSC1Ll4sGGq7xTKd7N9%2Fus6ggLAvOlEPsxaXH7wGHS4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWb6NatQq%2BasN4UMircAymMfaMPbFhfCaV551IVpCYTsKhuocpeWXe4pWMFPDIzy9YPfCciWiR3R7LavHEmIoGkSh0NeH302IwYgqelwW5v2fDYxptwi4FMz7%2B10YpSvJrb5L5hxDWX1gzBYL8CVnGBv8awbiITa9bNPAS%2FPsQmkduCgMHoxlqHUdnZH1mhAUjBzHQ4QR7Hb9%2FirBLj2zDhPNjRge%2FzYJYgMzHdhGMS9pDvNX%2BR6ERRtBC7UBT72GDILeRC7%2FMFAQLHGI%2BpoNcH%2F6nlxlIgJecT%2FfJZQZ%2BDSHdBxpgcPyJ6G95Qs2fzDZumIAjUZh4g6V6%2Bv1ivK3UT8HkLho6Ir5WxK%2BhczHCxKAEjDQVTw9WTcoKVemuXFNunvaByhKYgFZLf60vHVnxoIin8q5vX5x%2FdC4vrHfITv6t9erunvtrVT3fibZAWWbjWapQ%2BIgAxWUHwjgJ%2BQLZaIvxmPzXWCt%2F%2Bz35BsBSmc7%2Bymy4wN9TvjAZgExqxkrVTCVMkntLAo7Ey71Kl8XiUu8HVqOzl1UWxnw5vrTZyJP348EWW7tt%2FGpep2OsPZ3eifcl8aP1yUSz%2FrJoSeWnbVFZH6IWgxxon89fO5FlIev0Is6ou1iqPzzZ%2B9ez%2BwIOYrl%2FuI%2FxMNxkDMLeEssMGOqUB9KKBFz%2BOL725t6rdkp0RXlBpldKbJSE9a5z8u58i8mWoSubzWASdBBVhBMQS24PmDTnBVuVzQsA0s9RIVT3jsavHe0VEGrG1%2FwaClDAaMIS7jummKl99lVLxMW1Zf2AeSoDKKpmlwlML7KW3dCUEV%2BpvYd1cazuIMReO8rQnRDA9lTng2u50rDMtA9zyQ2C%2BEqTcZMDlYPvuR4Y6mKiYKeV5RdbY&X-Amz-Signature=7bc99d2cc0be026001dd2ac4659d5882d9fbdbc700d23098d742887ce959ce42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BTRDHS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCjwrjdGjxBmyI8c6qSjxzef8XrYtkmcJid1nIVSgSEIQIgJSC1Ll4sGGq7xTKd7N9%2Fus6ggLAvOlEPsxaXH7wGHS4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWb6NatQq%2BasN4UMircAymMfaMPbFhfCaV551IVpCYTsKhuocpeWXe4pWMFPDIzy9YPfCciWiR3R7LavHEmIoGkSh0NeH302IwYgqelwW5v2fDYxptwi4FMz7%2B10YpSvJrb5L5hxDWX1gzBYL8CVnGBv8awbiITa9bNPAS%2FPsQmkduCgMHoxlqHUdnZH1mhAUjBzHQ4QR7Hb9%2FirBLj2zDhPNjRge%2FzYJYgMzHdhGMS9pDvNX%2BR6ERRtBC7UBT72GDILeRC7%2FMFAQLHGI%2BpoNcH%2F6nlxlIgJecT%2FfJZQZ%2BDSHdBxpgcPyJ6G95Qs2fzDZumIAjUZh4g6V6%2Bv1ivK3UT8HkLho6Ir5WxK%2BhczHCxKAEjDQVTw9WTcoKVemuXFNunvaByhKYgFZLf60vHVnxoIin8q5vX5x%2FdC4vrHfITv6t9erunvtrVT3fibZAWWbjWapQ%2BIgAxWUHwjgJ%2BQLZaIvxmPzXWCt%2F%2Bz35BsBSmc7%2Bymy4wN9TvjAZgExqxkrVTCVMkntLAo7Ey71Kl8XiUu8HVqOzl1UWxnw5vrTZyJP348EWW7tt%2FGpep2OsPZ3eifcl8aP1yUSz%2FrJoSeWnbVFZH6IWgxxon89fO5FlIev0Is6ou1iqPzzZ%2B9ez%2BwIOYrl%2FuI%2FxMNxkDMLeEssMGOqUB9KKBFz%2BOL725t6rdkp0RXlBpldKbJSE9a5z8u58i8mWoSubzWASdBBVhBMQS24PmDTnBVuVzQsA0s9RIVT3jsavHe0VEGrG1%2FwaClDAaMIS7jummKl99lVLxMW1Zf2AeSoDKKpmlwlML7KW3dCUEV%2BpvYd1cazuIMReO8rQnRDA9lTng2u50rDMtA9zyQ2C%2BEqTcZMDlYPvuR4Y6mKiYKeV5RdbY&X-Amz-Signature=53ca3f5e396656b9593783a3b40ac17cf10a5d7e5df9e688bad5fa81d9906978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BTRDHS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCjwrjdGjxBmyI8c6qSjxzef8XrYtkmcJid1nIVSgSEIQIgJSC1Ll4sGGq7xTKd7N9%2Fus6ggLAvOlEPsxaXH7wGHS4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWb6NatQq%2BasN4UMircAymMfaMPbFhfCaV551IVpCYTsKhuocpeWXe4pWMFPDIzy9YPfCciWiR3R7LavHEmIoGkSh0NeH302IwYgqelwW5v2fDYxptwi4FMz7%2B10YpSvJrb5L5hxDWX1gzBYL8CVnGBv8awbiITa9bNPAS%2FPsQmkduCgMHoxlqHUdnZH1mhAUjBzHQ4QR7Hb9%2FirBLj2zDhPNjRge%2FzYJYgMzHdhGMS9pDvNX%2BR6ERRtBC7UBT72GDILeRC7%2FMFAQLHGI%2BpoNcH%2F6nlxlIgJecT%2FfJZQZ%2BDSHdBxpgcPyJ6G95Qs2fzDZumIAjUZh4g6V6%2Bv1ivK3UT8HkLho6Ir5WxK%2BhczHCxKAEjDQVTw9WTcoKVemuXFNunvaByhKYgFZLf60vHVnxoIin8q5vX5x%2FdC4vrHfITv6t9erunvtrVT3fibZAWWbjWapQ%2BIgAxWUHwjgJ%2BQLZaIvxmPzXWCt%2F%2Bz35BsBSmc7%2Bymy4wN9TvjAZgExqxkrVTCVMkntLAo7Ey71Kl8XiUu8HVqOzl1UWxnw5vrTZyJP348EWW7tt%2FGpep2OsPZ3eifcl8aP1yUSz%2FrJoSeWnbVFZH6IWgxxon89fO5FlIev0Is6ou1iqPzzZ%2B9ez%2BwIOYrl%2FuI%2FxMNxkDMLeEssMGOqUB9KKBFz%2BOL725t6rdkp0RXlBpldKbJSE9a5z8u58i8mWoSubzWASdBBVhBMQS24PmDTnBVuVzQsA0s9RIVT3jsavHe0VEGrG1%2FwaClDAaMIS7jummKl99lVLxMW1Zf2AeSoDKKpmlwlML7KW3dCUEV%2BpvYd1cazuIMReO8rQnRDA9lTng2u50rDMtA9zyQ2C%2BEqTcZMDlYPvuR4Y6mKiYKeV5RdbY&X-Amz-Signature=31815ea2b5592283f24e3c6625362e9cf2d9683e829b574dc0bfd17823d0d567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BTRDHS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCjwrjdGjxBmyI8c6qSjxzef8XrYtkmcJid1nIVSgSEIQIgJSC1Ll4sGGq7xTKd7N9%2Fus6ggLAvOlEPsxaXH7wGHS4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWb6NatQq%2BasN4UMircAymMfaMPbFhfCaV551IVpCYTsKhuocpeWXe4pWMFPDIzy9YPfCciWiR3R7LavHEmIoGkSh0NeH302IwYgqelwW5v2fDYxptwi4FMz7%2B10YpSvJrb5L5hxDWX1gzBYL8CVnGBv8awbiITa9bNPAS%2FPsQmkduCgMHoxlqHUdnZH1mhAUjBzHQ4QR7Hb9%2FirBLj2zDhPNjRge%2FzYJYgMzHdhGMS9pDvNX%2BR6ERRtBC7UBT72GDILeRC7%2FMFAQLHGI%2BpoNcH%2F6nlxlIgJecT%2FfJZQZ%2BDSHdBxpgcPyJ6G95Qs2fzDZumIAjUZh4g6V6%2Bv1ivK3UT8HkLho6Ir5WxK%2BhczHCxKAEjDQVTw9WTcoKVemuXFNunvaByhKYgFZLf60vHVnxoIin8q5vX5x%2FdC4vrHfITv6t9erunvtrVT3fibZAWWbjWapQ%2BIgAxWUHwjgJ%2BQLZaIvxmPzXWCt%2F%2Bz35BsBSmc7%2Bymy4wN9TvjAZgExqxkrVTCVMkntLAo7Ey71Kl8XiUu8HVqOzl1UWxnw5vrTZyJP348EWW7tt%2FGpep2OsPZ3eifcl8aP1yUSz%2FrJoSeWnbVFZH6IWgxxon89fO5FlIev0Is6ou1iqPzzZ%2B9ez%2BwIOYrl%2FuI%2FxMNxkDMLeEssMGOqUB9KKBFz%2BOL725t6rdkp0RXlBpldKbJSE9a5z8u58i8mWoSubzWASdBBVhBMQS24PmDTnBVuVzQsA0s9RIVT3jsavHe0VEGrG1%2FwaClDAaMIS7jummKl99lVLxMW1Zf2AeSoDKKpmlwlML7KW3dCUEV%2BpvYd1cazuIMReO8rQnRDA9lTng2u50rDMtA9zyQ2C%2BEqTcZMDlYPvuR4Y6mKiYKeV5RdbY&X-Amz-Signature=e7400fefd3e0973a7ba9eadf3c0f337641b3f7709fa87be5965750211ab07004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BTRDHS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCjwrjdGjxBmyI8c6qSjxzef8XrYtkmcJid1nIVSgSEIQIgJSC1Ll4sGGq7xTKd7N9%2Fus6ggLAvOlEPsxaXH7wGHS4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWb6NatQq%2BasN4UMircAymMfaMPbFhfCaV551IVpCYTsKhuocpeWXe4pWMFPDIzy9YPfCciWiR3R7LavHEmIoGkSh0NeH302IwYgqelwW5v2fDYxptwi4FMz7%2B10YpSvJrb5L5hxDWX1gzBYL8CVnGBv8awbiITa9bNPAS%2FPsQmkduCgMHoxlqHUdnZH1mhAUjBzHQ4QR7Hb9%2FirBLj2zDhPNjRge%2FzYJYgMzHdhGMS9pDvNX%2BR6ERRtBC7UBT72GDILeRC7%2FMFAQLHGI%2BpoNcH%2F6nlxlIgJecT%2FfJZQZ%2BDSHdBxpgcPyJ6G95Qs2fzDZumIAjUZh4g6V6%2Bv1ivK3UT8HkLho6Ir5WxK%2BhczHCxKAEjDQVTw9WTcoKVemuXFNunvaByhKYgFZLf60vHVnxoIin8q5vX5x%2FdC4vrHfITv6t9erunvtrVT3fibZAWWbjWapQ%2BIgAxWUHwjgJ%2BQLZaIvxmPzXWCt%2F%2Bz35BsBSmc7%2Bymy4wN9TvjAZgExqxkrVTCVMkntLAo7Ey71Kl8XiUu8HVqOzl1UWxnw5vrTZyJP348EWW7tt%2FGpep2OsPZ3eifcl8aP1yUSz%2FrJoSeWnbVFZH6IWgxxon89fO5FlIev0Is6ou1iqPzzZ%2B9ez%2BwIOYrl%2FuI%2FxMNxkDMLeEssMGOqUB9KKBFz%2BOL725t6rdkp0RXlBpldKbJSE9a5z8u58i8mWoSubzWASdBBVhBMQS24PmDTnBVuVzQsA0s9RIVT3jsavHe0VEGrG1%2FwaClDAaMIS7jummKl99lVLxMW1Zf2AeSoDKKpmlwlML7KW3dCUEV%2BpvYd1cazuIMReO8rQnRDA9lTng2u50rDMtA9zyQ2C%2BEqTcZMDlYPvuR4Y6mKiYKeV5RdbY&X-Amz-Signature=584d1d0e12f4aa48b49dd82159ff4af564c04def2078da4b88b11bfa85577f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
