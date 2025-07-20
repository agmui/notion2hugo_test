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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE7XOE6F%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbqAb%2BBAQnG41Uq%2FwzG3ZO%2Bxp7%2BBp2dxFBzmD0gKDRjAiBDID91WClWBaibP2iPuGTAZpJY0XiWdYwWIP3fXg39aCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpDqir4aFXJN4sZS3KtwDZd1D97qhGdGdSTs2GO9TtZ8UnDmzkvRN9W1Xl%2FUbx6e3bItavWry7OblUV6HLhNoZnRovesc8Z0mWOV6%2BSh4kGBJuCSciArfymJZ92gSrIkfgrqwWNY7e37WtSMPAO9Qw3cArgQl0XMe00R6n2FvP41RhEcCHZbMInNJR4GFM7HWj5yzkNAwNvguQy2ClejCsL99gdflSfXeiwz8OrNXnAyAmusJ30Hdt2UF1ZzwH6aklsvaxHL5cenYVOWwMBJ2qsIIyQhIXh0yoN1hbGF8dMjMRRhu1Mi2ZhZ6my8NN3Td02g7d7ZWIhEFVbW9H%2FccG%2FTZHPo2hW9xG3x3E8KXhT8JwLc7H3rStsSShhGB%2F2MLbFYc7KdxpR2EGejk%2BrjNsPwtoUvvI%2BxR0K7jXA3P5iOZ0dq%2BtU2XS8Ddf36Sv6swG5CxmRMpK4Ub1k9v%2Fi%2BhZIupNWMsUL4Z2PgchVH8CDofkjidrVkT4wNLKm7tHlpEdO6QeG9E6NqSYo3GMMKtUz%2FsEF07SHzolrilw6t7hI2nOHzWxSP8MgKfGk1%2BHdR26gN6%2BnKdqW%2By9f9Vss6gCVYCgN5AM29zZBb9WKOH%2Ba%2FqqzAgIZ4KRM3rTr3eXKBvo2r2dupyjCuf%2F3Yw3pTxwwY6pgEIwYppBdk%2BhujJ3KXvzBGc9SRbUM5kT49xdQUQ%2BSkcWJ9RHaUPZGUPZ1EbNrPBYoZRaD8%2BeeyMyGfMq663JJn3ZnKssffLxHkhTPxzjhuC3ZN0abf1WWOTgc%2F%2BFlvT2FEeIQcIdy5XQArDk0XVaVyyhwqo0MhCz3p7LgQX%2BTZKIbtP8dfotY3tKOUmt%2FaL3lS%2Bqbej8rNwX8ty%2B9ETFD4IF27pT46%2B&X-Amz-Signature=50ff65db5c0c520b870ae7d6c302918783347b70b8c68e7b05cc6630ea653e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE7XOE6F%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbqAb%2BBAQnG41Uq%2FwzG3ZO%2Bxp7%2BBp2dxFBzmD0gKDRjAiBDID91WClWBaibP2iPuGTAZpJY0XiWdYwWIP3fXg39aCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpDqir4aFXJN4sZS3KtwDZd1D97qhGdGdSTs2GO9TtZ8UnDmzkvRN9W1Xl%2FUbx6e3bItavWry7OblUV6HLhNoZnRovesc8Z0mWOV6%2BSh4kGBJuCSciArfymJZ92gSrIkfgrqwWNY7e37WtSMPAO9Qw3cArgQl0XMe00R6n2FvP41RhEcCHZbMInNJR4GFM7HWj5yzkNAwNvguQy2ClejCsL99gdflSfXeiwz8OrNXnAyAmusJ30Hdt2UF1ZzwH6aklsvaxHL5cenYVOWwMBJ2qsIIyQhIXh0yoN1hbGF8dMjMRRhu1Mi2ZhZ6my8NN3Td02g7d7ZWIhEFVbW9H%2FccG%2FTZHPo2hW9xG3x3E8KXhT8JwLc7H3rStsSShhGB%2F2MLbFYc7KdxpR2EGejk%2BrjNsPwtoUvvI%2BxR0K7jXA3P5iOZ0dq%2BtU2XS8Ddf36Sv6swG5CxmRMpK4Ub1k9v%2Fi%2BhZIupNWMsUL4Z2PgchVH8CDofkjidrVkT4wNLKm7tHlpEdO6QeG9E6NqSYo3GMMKtUz%2FsEF07SHzolrilw6t7hI2nOHzWxSP8MgKfGk1%2BHdR26gN6%2BnKdqW%2By9f9Vss6gCVYCgN5AM29zZBb9WKOH%2Ba%2FqqzAgIZ4KRM3rTr3eXKBvo2r2dupyjCuf%2F3Yw3pTxwwY6pgEIwYppBdk%2BhujJ3KXvzBGc9SRbUM5kT49xdQUQ%2BSkcWJ9RHaUPZGUPZ1EbNrPBYoZRaD8%2BeeyMyGfMq663JJn3ZnKssffLxHkhTPxzjhuC3ZN0abf1WWOTgc%2F%2BFlvT2FEeIQcIdy5XQArDk0XVaVyyhwqo0MhCz3p7LgQX%2BTZKIbtP8dfotY3tKOUmt%2FaL3lS%2Bqbej8rNwX8ty%2B9ETFD4IF27pT46%2B&X-Amz-Signature=0fd159495bfd2814b6b7b8371c2a51262fa680792324486e7797425ff92830ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE7XOE6F%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbqAb%2BBAQnG41Uq%2FwzG3ZO%2Bxp7%2BBp2dxFBzmD0gKDRjAiBDID91WClWBaibP2iPuGTAZpJY0XiWdYwWIP3fXg39aCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpDqir4aFXJN4sZS3KtwDZd1D97qhGdGdSTs2GO9TtZ8UnDmzkvRN9W1Xl%2FUbx6e3bItavWry7OblUV6HLhNoZnRovesc8Z0mWOV6%2BSh4kGBJuCSciArfymJZ92gSrIkfgrqwWNY7e37WtSMPAO9Qw3cArgQl0XMe00R6n2FvP41RhEcCHZbMInNJR4GFM7HWj5yzkNAwNvguQy2ClejCsL99gdflSfXeiwz8OrNXnAyAmusJ30Hdt2UF1ZzwH6aklsvaxHL5cenYVOWwMBJ2qsIIyQhIXh0yoN1hbGF8dMjMRRhu1Mi2ZhZ6my8NN3Td02g7d7ZWIhEFVbW9H%2FccG%2FTZHPo2hW9xG3x3E8KXhT8JwLc7H3rStsSShhGB%2F2MLbFYc7KdxpR2EGejk%2BrjNsPwtoUvvI%2BxR0K7jXA3P5iOZ0dq%2BtU2XS8Ddf36Sv6swG5CxmRMpK4Ub1k9v%2Fi%2BhZIupNWMsUL4Z2PgchVH8CDofkjidrVkT4wNLKm7tHlpEdO6QeG9E6NqSYo3GMMKtUz%2FsEF07SHzolrilw6t7hI2nOHzWxSP8MgKfGk1%2BHdR26gN6%2BnKdqW%2By9f9Vss6gCVYCgN5AM29zZBb9WKOH%2Ba%2FqqzAgIZ4KRM3rTr3eXKBvo2r2dupyjCuf%2F3Yw3pTxwwY6pgEIwYppBdk%2BhujJ3KXvzBGc9SRbUM5kT49xdQUQ%2BSkcWJ9RHaUPZGUPZ1EbNrPBYoZRaD8%2BeeyMyGfMq663JJn3ZnKssffLxHkhTPxzjhuC3ZN0abf1WWOTgc%2F%2BFlvT2FEeIQcIdy5XQArDk0XVaVyyhwqo0MhCz3p7LgQX%2BTZKIbtP8dfotY3tKOUmt%2FaL3lS%2Bqbej8rNwX8ty%2B9ETFD4IF27pT46%2B&X-Amz-Signature=d9cfec4e5fcdee31ea133e5a1b11baef282bfab76d7dd5fecd623382e5b29079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE7XOE6F%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbqAb%2BBAQnG41Uq%2FwzG3ZO%2Bxp7%2BBp2dxFBzmD0gKDRjAiBDID91WClWBaibP2iPuGTAZpJY0XiWdYwWIP3fXg39aCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpDqir4aFXJN4sZS3KtwDZd1D97qhGdGdSTs2GO9TtZ8UnDmzkvRN9W1Xl%2FUbx6e3bItavWry7OblUV6HLhNoZnRovesc8Z0mWOV6%2BSh4kGBJuCSciArfymJZ92gSrIkfgrqwWNY7e37WtSMPAO9Qw3cArgQl0XMe00R6n2FvP41RhEcCHZbMInNJR4GFM7HWj5yzkNAwNvguQy2ClejCsL99gdflSfXeiwz8OrNXnAyAmusJ30Hdt2UF1ZzwH6aklsvaxHL5cenYVOWwMBJ2qsIIyQhIXh0yoN1hbGF8dMjMRRhu1Mi2ZhZ6my8NN3Td02g7d7ZWIhEFVbW9H%2FccG%2FTZHPo2hW9xG3x3E8KXhT8JwLc7H3rStsSShhGB%2F2MLbFYc7KdxpR2EGejk%2BrjNsPwtoUvvI%2BxR0K7jXA3P5iOZ0dq%2BtU2XS8Ddf36Sv6swG5CxmRMpK4Ub1k9v%2Fi%2BhZIupNWMsUL4Z2PgchVH8CDofkjidrVkT4wNLKm7tHlpEdO6QeG9E6NqSYo3GMMKtUz%2FsEF07SHzolrilw6t7hI2nOHzWxSP8MgKfGk1%2BHdR26gN6%2BnKdqW%2By9f9Vss6gCVYCgN5AM29zZBb9WKOH%2Ba%2FqqzAgIZ4KRM3rTr3eXKBvo2r2dupyjCuf%2F3Yw3pTxwwY6pgEIwYppBdk%2BhujJ3KXvzBGc9SRbUM5kT49xdQUQ%2BSkcWJ9RHaUPZGUPZ1EbNrPBYoZRaD8%2BeeyMyGfMq663JJn3ZnKssffLxHkhTPxzjhuC3ZN0abf1WWOTgc%2F%2BFlvT2FEeIQcIdy5XQArDk0XVaVyyhwqo0MhCz3p7LgQX%2BTZKIbtP8dfotY3tKOUmt%2FaL3lS%2Bqbej8rNwX8ty%2B9ETFD4IF27pT46%2B&X-Amz-Signature=97d6cc07fe663eda4d8871c027f6de7d7f2955bc1ee448b5a59d70fd25554954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE7XOE6F%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbqAb%2BBAQnG41Uq%2FwzG3ZO%2Bxp7%2BBp2dxFBzmD0gKDRjAiBDID91WClWBaibP2iPuGTAZpJY0XiWdYwWIP3fXg39aCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpDqir4aFXJN4sZS3KtwDZd1D97qhGdGdSTs2GO9TtZ8UnDmzkvRN9W1Xl%2FUbx6e3bItavWry7OblUV6HLhNoZnRovesc8Z0mWOV6%2BSh4kGBJuCSciArfymJZ92gSrIkfgrqwWNY7e37WtSMPAO9Qw3cArgQl0XMe00R6n2FvP41RhEcCHZbMInNJR4GFM7HWj5yzkNAwNvguQy2ClejCsL99gdflSfXeiwz8OrNXnAyAmusJ30Hdt2UF1ZzwH6aklsvaxHL5cenYVOWwMBJ2qsIIyQhIXh0yoN1hbGF8dMjMRRhu1Mi2ZhZ6my8NN3Td02g7d7ZWIhEFVbW9H%2FccG%2FTZHPo2hW9xG3x3E8KXhT8JwLc7H3rStsSShhGB%2F2MLbFYc7KdxpR2EGejk%2BrjNsPwtoUvvI%2BxR0K7jXA3P5iOZ0dq%2BtU2XS8Ddf36Sv6swG5CxmRMpK4Ub1k9v%2Fi%2BhZIupNWMsUL4Z2PgchVH8CDofkjidrVkT4wNLKm7tHlpEdO6QeG9E6NqSYo3GMMKtUz%2FsEF07SHzolrilw6t7hI2nOHzWxSP8MgKfGk1%2BHdR26gN6%2BnKdqW%2By9f9Vss6gCVYCgN5AM29zZBb9WKOH%2Ba%2FqqzAgIZ4KRM3rTr3eXKBvo2r2dupyjCuf%2F3Yw3pTxwwY6pgEIwYppBdk%2BhujJ3KXvzBGc9SRbUM5kT49xdQUQ%2BSkcWJ9RHaUPZGUPZ1EbNrPBYoZRaD8%2BeeyMyGfMq663JJn3ZnKssffLxHkhTPxzjhuC3ZN0abf1WWOTgc%2F%2BFlvT2FEeIQcIdy5XQArDk0XVaVyyhwqo0MhCz3p7LgQX%2BTZKIbtP8dfotY3tKOUmt%2FaL3lS%2Bqbej8rNwX8ty%2B9ETFD4IF27pT46%2B&X-Amz-Signature=260d3af3c620c887603313439b7612c4cdbbe4eafd357ed262abdbcdaffe2c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE7XOE6F%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbqAb%2BBAQnG41Uq%2FwzG3ZO%2Bxp7%2BBp2dxFBzmD0gKDRjAiBDID91WClWBaibP2iPuGTAZpJY0XiWdYwWIP3fXg39aCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpDqir4aFXJN4sZS3KtwDZd1D97qhGdGdSTs2GO9TtZ8UnDmzkvRN9W1Xl%2FUbx6e3bItavWry7OblUV6HLhNoZnRovesc8Z0mWOV6%2BSh4kGBJuCSciArfymJZ92gSrIkfgrqwWNY7e37WtSMPAO9Qw3cArgQl0XMe00R6n2FvP41RhEcCHZbMInNJR4GFM7HWj5yzkNAwNvguQy2ClejCsL99gdflSfXeiwz8OrNXnAyAmusJ30Hdt2UF1ZzwH6aklsvaxHL5cenYVOWwMBJ2qsIIyQhIXh0yoN1hbGF8dMjMRRhu1Mi2ZhZ6my8NN3Td02g7d7ZWIhEFVbW9H%2FccG%2FTZHPo2hW9xG3x3E8KXhT8JwLc7H3rStsSShhGB%2F2MLbFYc7KdxpR2EGejk%2BrjNsPwtoUvvI%2BxR0K7jXA3P5iOZ0dq%2BtU2XS8Ddf36Sv6swG5CxmRMpK4Ub1k9v%2Fi%2BhZIupNWMsUL4Z2PgchVH8CDofkjidrVkT4wNLKm7tHlpEdO6QeG9E6NqSYo3GMMKtUz%2FsEF07SHzolrilw6t7hI2nOHzWxSP8MgKfGk1%2BHdR26gN6%2BnKdqW%2By9f9Vss6gCVYCgN5AM29zZBb9WKOH%2Ba%2FqqzAgIZ4KRM3rTr3eXKBvo2r2dupyjCuf%2F3Yw3pTxwwY6pgEIwYppBdk%2BhujJ3KXvzBGc9SRbUM5kT49xdQUQ%2BSkcWJ9RHaUPZGUPZ1EbNrPBYoZRaD8%2BeeyMyGfMq663JJn3ZnKssffLxHkhTPxzjhuC3ZN0abf1WWOTgc%2F%2BFlvT2FEeIQcIdy5XQArDk0XVaVyyhwqo0MhCz3p7LgQX%2BTZKIbtP8dfotY3tKOUmt%2FaL3lS%2Bqbej8rNwX8ty%2B9ETFD4IF27pT46%2B&X-Amz-Signature=49a757a566749e117c729182d026a897f79ee5f07d38754f6468c010f0ca91f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
