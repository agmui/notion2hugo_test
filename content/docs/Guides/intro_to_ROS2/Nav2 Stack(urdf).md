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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZGU7AG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGq5e5iqiwsj0r62okm7cxMEYy4iTAe3dAR1BbxHmzCWAiASi5LnbFgLVfeCD%2Bbyi7H0F2CSx8bjW0kE5u9YKd8MnSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqZqYg28wwz3RkkwrKtwDJrNlWlyYQikuU1OGss%2BbOvKh4gz0dfSLG96rsGYTYe5f6dz94q1JQQHa9R9ZkTELKqYqiXVSujzEgopGxwiLWnKtiEH4%2FrslHEgCt64aRJSPG62cp8MvQsLZfEgYdIFzLOEb%2BGXJPpC6ElRRJUwyhXB1BaI6tzscJOi15fpIKhrrpWkckgLniY3aKofW1G3y9Fjs%2FrfQB8s4MkSsJCgIywW0qwfG8nLUfO9EWqupLRtxhiFJxeROSmCKDa7vuD4AP0KfoHrX3D9QDP3khQAK0o7%2Bi2IosIqn7iAqR9VoUXKq4kOWRwTuhyX%2ByWw9c6ufwPu6%2FpfJiR75Ij32JRJ0taRlIkDKdN%2B6Iz4bRi3IGQDurm7Y76%2BOYjnGzC2rxC1PKfDUbZnJbawefFrEsT4ivJAyJgANzsckt4MFTdd3yFvdpyu%2FSH9p2yllOVSchmj%2Fng4g5dOZh9XlcFU7MR%2F3yL6eVAauIGEzu1qo8YY4KpKc2X7z1E4Di1G4i24MkLHyUCZ3qvhPjUVJvyYBubnysvnvBsJjqqhZVuls1BJipTtxS1RwRzEiDdt%2B7U%2BWYKdt4xZIWpw3y69dFj70BvPJlOWo2wOB6bbDnrHWus%2FUEFWOsuAe%2F9gDjE6hCKcwi5bNvQY6pgFXFflj8fXY%2FxP6HLly7%2BUuu8NU7XKqFB1Ee5Qy3axYzwSGW7Epnitilv%2FCnbpPMqnB%2BU2fQdceo%2FukoMCpXcWbeDcgI6Y4aX4p3bvsiStHLnKbn7QMNnR1p3zS0W7iFax2%2F9UiPbzbn%2BYVPSQmSg6JqZPUyh3yUN4d4Qu5dDcF%2FpBBx4vjLGhBFt35Wa1LCtxJ6Gk6ttguUJAJYP6egWytieX3Jk6J&X-Amz-Signature=1ceccc4ce3ccda021c273abaae0633b677ade45e9d001c48fd115e41762e0911&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZGU7AG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGq5e5iqiwsj0r62okm7cxMEYy4iTAe3dAR1BbxHmzCWAiASi5LnbFgLVfeCD%2Bbyi7H0F2CSx8bjW0kE5u9YKd8MnSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqZqYg28wwz3RkkwrKtwDJrNlWlyYQikuU1OGss%2BbOvKh4gz0dfSLG96rsGYTYe5f6dz94q1JQQHa9R9ZkTELKqYqiXVSujzEgopGxwiLWnKtiEH4%2FrslHEgCt64aRJSPG62cp8MvQsLZfEgYdIFzLOEb%2BGXJPpC6ElRRJUwyhXB1BaI6tzscJOi15fpIKhrrpWkckgLniY3aKofW1G3y9Fjs%2FrfQB8s4MkSsJCgIywW0qwfG8nLUfO9EWqupLRtxhiFJxeROSmCKDa7vuD4AP0KfoHrX3D9QDP3khQAK0o7%2Bi2IosIqn7iAqR9VoUXKq4kOWRwTuhyX%2ByWw9c6ufwPu6%2FpfJiR75Ij32JRJ0taRlIkDKdN%2B6Iz4bRi3IGQDurm7Y76%2BOYjnGzC2rxC1PKfDUbZnJbawefFrEsT4ivJAyJgANzsckt4MFTdd3yFvdpyu%2FSH9p2yllOVSchmj%2Fng4g5dOZh9XlcFU7MR%2F3yL6eVAauIGEzu1qo8YY4KpKc2X7z1E4Di1G4i24MkLHyUCZ3qvhPjUVJvyYBubnysvnvBsJjqqhZVuls1BJipTtxS1RwRzEiDdt%2B7U%2BWYKdt4xZIWpw3y69dFj70BvPJlOWo2wOB6bbDnrHWus%2FUEFWOsuAe%2F9gDjE6hCKcwi5bNvQY6pgFXFflj8fXY%2FxP6HLly7%2BUuu8NU7XKqFB1Ee5Qy3axYzwSGW7Epnitilv%2FCnbpPMqnB%2BU2fQdceo%2FukoMCpXcWbeDcgI6Y4aX4p3bvsiStHLnKbn7QMNnR1p3zS0W7iFax2%2F9UiPbzbn%2BYVPSQmSg6JqZPUyh3yUN4d4Qu5dDcF%2FpBBx4vjLGhBFt35Wa1LCtxJ6Gk6ttguUJAJYP6egWytieX3Jk6J&X-Amz-Signature=3e632116cc8a85d95ca311c2ad5e435e0bbaf9c9a4b19e5e83615f6a3785ff43&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZGU7AG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGq5e5iqiwsj0r62okm7cxMEYy4iTAe3dAR1BbxHmzCWAiASi5LnbFgLVfeCD%2Bbyi7H0F2CSx8bjW0kE5u9YKd8MnSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqZqYg28wwz3RkkwrKtwDJrNlWlyYQikuU1OGss%2BbOvKh4gz0dfSLG96rsGYTYe5f6dz94q1JQQHa9R9ZkTELKqYqiXVSujzEgopGxwiLWnKtiEH4%2FrslHEgCt64aRJSPG62cp8MvQsLZfEgYdIFzLOEb%2BGXJPpC6ElRRJUwyhXB1BaI6tzscJOi15fpIKhrrpWkckgLniY3aKofW1G3y9Fjs%2FrfQB8s4MkSsJCgIywW0qwfG8nLUfO9EWqupLRtxhiFJxeROSmCKDa7vuD4AP0KfoHrX3D9QDP3khQAK0o7%2Bi2IosIqn7iAqR9VoUXKq4kOWRwTuhyX%2ByWw9c6ufwPu6%2FpfJiR75Ij32JRJ0taRlIkDKdN%2B6Iz4bRi3IGQDurm7Y76%2BOYjnGzC2rxC1PKfDUbZnJbawefFrEsT4ivJAyJgANzsckt4MFTdd3yFvdpyu%2FSH9p2yllOVSchmj%2Fng4g5dOZh9XlcFU7MR%2F3yL6eVAauIGEzu1qo8YY4KpKc2X7z1E4Di1G4i24MkLHyUCZ3qvhPjUVJvyYBubnysvnvBsJjqqhZVuls1BJipTtxS1RwRzEiDdt%2B7U%2BWYKdt4xZIWpw3y69dFj70BvPJlOWo2wOB6bbDnrHWus%2FUEFWOsuAe%2F9gDjE6hCKcwi5bNvQY6pgFXFflj8fXY%2FxP6HLly7%2BUuu8NU7XKqFB1Ee5Qy3axYzwSGW7Epnitilv%2FCnbpPMqnB%2BU2fQdceo%2FukoMCpXcWbeDcgI6Y4aX4p3bvsiStHLnKbn7QMNnR1p3zS0W7iFax2%2F9UiPbzbn%2BYVPSQmSg6JqZPUyh3yUN4d4Qu5dDcF%2FpBBx4vjLGhBFt35Wa1LCtxJ6Gk6ttguUJAJYP6egWytieX3Jk6J&X-Amz-Signature=064531f9b4313de3661aa5f4e2ee07ffd811b69abe571aedc827eaad3f94f7f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZGU7AG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGq5e5iqiwsj0r62okm7cxMEYy4iTAe3dAR1BbxHmzCWAiASi5LnbFgLVfeCD%2Bbyi7H0F2CSx8bjW0kE5u9YKd8MnSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqZqYg28wwz3RkkwrKtwDJrNlWlyYQikuU1OGss%2BbOvKh4gz0dfSLG96rsGYTYe5f6dz94q1JQQHa9R9ZkTELKqYqiXVSujzEgopGxwiLWnKtiEH4%2FrslHEgCt64aRJSPG62cp8MvQsLZfEgYdIFzLOEb%2BGXJPpC6ElRRJUwyhXB1BaI6tzscJOi15fpIKhrrpWkckgLniY3aKofW1G3y9Fjs%2FrfQB8s4MkSsJCgIywW0qwfG8nLUfO9EWqupLRtxhiFJxeROSmCKDa7vuD4AP0KfoHrX3D9QDP3khQAK0o7%2Bi2IosIqn7iAqR9VoUXKq4kOWRwTuhyX%2ByWw9c6ufwPu6%2FpfJiR75Ij32JRJ0taRlIkDKdN%2B6Iz4bRi3IGQDurm7Y76%2BOYjnGzC2rxC1PKfDUbZnJbawefFrEsT4ivJAyJgANzsckt4MFTdd3yFvdpyu%2FSH9p2yllOVSchmj%2Fng4g5dOZh9XlcFU7MR%2F3yL6eVAauIGEzu1qo8YY4KpKc2X7z1E4Di1G4i24MkLHyUCZ3qvhPjUVJvyYBubnysvnvBsJjqqhZVuls1BJipTtxS1RwRzEiDdt%2B7U%2BWYKdt4xZIWpw3y69dFj70BvPJlOWo2wOB6bbDnrHWus%2FUEFWOsuAe%2F9gDjE6hCKcwi5bNvQY6pgFXFflj8fXY%2FxP6HLly7%2BUuu8NU7XKqFB1Ee5Qy3axYzwSGW7Epnitilv%2FCnbpPMqnB%2BU2fQdceo%2FukoMCpXcWbeDcgI6Y4aX4p3bvsiStHLnKbn7QMNnR1p3zS0W7iFax2%2F9UiPbzbn%2BYVPSQmSg6JqZPUyh3yUN4d4Qu5dDcF%2FpBBx4vjLGhBFt35Wa1LCtxJ6Gk6ttguUJAJYP6egWytieX3Jk6J&X-Amz-Signature=8f0c6d752c2a0b111feff81eb80a2ed1e1a44f7d86417a659829ff4454fe5523&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZGU7AG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGq5e5iqiwsj0r62okm7cxMEYy4iTAe3dAR1BbxHmzCWAiASi5LnbFgLVfeCD%2Bbyi7H0F2CSx8bjW0kE5u9YKd8MnSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqZqYg28wwz3RkkwrKtwDJrNlWlyYQikuU1OGss%2BbOvKh4gz0dfSLG96rsGYTYe5f6dz94q1JQQHa9R9ZkTELKqYqiXVSujzEgopGxwiLWnKtiEH4%2FrslHEgCt64aRJSPG62cp8MvQsLZfEgYdIFzLOEb%2BGXJPpC6ElRRJUwyhXB1BaI6tzscJOi15fpIKhrrpWkckgLniY3aKofW1G3y9Fjs%2FrfQB8s4MkSsJCgIywW0qwfG8nLUfO9EWqupLRtxhiFJxeROSmCKDa7vuD4AP0KfoHrX3D9QDP3khQAK0o7%2Bi2IosIqn7iAqR9VoUXKq4kOWRwTuhyX%2ByWw9c6ufwPu6%2FpfJiR75Ij32JRJ0taRlIkDKdN%2B6Iz4bRi3IGQDurm7Y76%2BOYjnGzC2rxC1PKfDUbZnJbawefFrEsT4ivJAyJgANzsckt4MFTdd3yFvdpyu%2FSH9p2yllOVSchmj%2Fng4g5dOZh9XlcFU7MR%2F3yL6eVAauIGEzu1qo8YY4KpKc2X7z1E4Di1G4i24MkLHyUCZ3qvhPjUVJvyYBubnysvnvBsJjqqhZVuls1BJipTtxS1RwRzEiDdt%2B7U%2BWYKdt4xZIWpw3y69dFj70BvPJlOWo2wOB6bbDnrHWus%2FUEFWOsuAe%2F9gDjE6hCKcwi5bNvQY6pgFXFflj8fXY%2FxP6HLly7%2BUuu8NU7XKqFB1Ee5Qy3axYzwSGW7Epnitilv%2FCnbpPMqnB%2BU2fQdceo%2FukoMCpXcWbeDcgI6Y4aX4p3bvsiStHLnKbn7QMNnR1p3zS0W7iFax2%2F9UiPbzbn%2BYVPSQmSg6JqZPUyh3yUN4d4Qu5dDcF%2FpBBx4vjLGhBFt35Wa1LCtxJ6Gk6ttguUJAJYP6egWytieX3Jk6J&X-Amz-Signature=bdbf3812dc7271d6093a866e6369c1bfac10b005c99369dcf27f25e7d04bb254&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZGU7AG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGq5e5iqiwsj0r62okm7cxMEYy4iTAe3dAR1BbxHmzCWAiASi5LnbFgLVfeCD%2Bbyi7H0F2CSx8bjW0kE5u9YKd8MnSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqZqYg28wwz3RkkwrKtwDJrNlWlyYQikuU1OGss%2BbOvKh4gz0dfSLG96rsGYTYe5f6dz94q1JQQHa9R9ZkTELKqYqiXVSujzEgopGxwiLWnKtiEH4%2FrslHEgCt64aRJSPG62cp8MvQsLZfEgYdIFzLOEb%2BGXJPpC6ElRRJUwyhXB1BaI6tzscJOi15fpIKhrrpWkckgLniY3aKofW1G3y9Fjs%2FrfQB8s4MkSsJCgIywW0qwfG8nLUfO9EWqupLRtxhiFJxeROSmCKDa7vuD4AP0KfoHrX3D9QDP3khQAK0o7%2Bi2IosIqn7iAqR9VoUXKq4kOWRwTuhyX%2ByWw9c6ufwPu6%2FpfJiR75Ij32JRJ0taRlIkDKdN%2B6Iz4bRi3IGQDurm7Y76%2BOYjnGzC2rxC1PKfDUbZnJbawefFrEsT4ivJAyJgANzsckt4MFTdd3yFvdpyu%2FSH9p2yllOVSchmj%2Fng4g5dOZh9XlcFU7MR%2F3yL6eVAauIGEzu1qo8YY4KpKc2X7z1E4Di1G4i24MkLHyUCZ3qvhPjUVJvyYBubnysvnvBsJjqqhZVuls1BJipTtxS1RwRzEiDdt%2B7U%2BWYKdt4xZIWpw3y69dFj70BvPJlOWo2wOB6bbDnrHWus%2FUEFWOsuAe%2F9gDjE6hCKcwi5bNvQY6pgFXFflj8fXY%2FxP6HLly7%2BUuu8NU7XKqFB1Ee5Qy3axYzwSGW7Epnitilv%2FCnbpPMqnB%2BU2fQdceo%2FukoMCpXcWbeDcgI6Y4aX4p3bvsiStHLnKbn7QMNnR1p3zS0W7iFax2%2F9UiPbzbn%2BYVPSQmSg6JqZPUyh3yUN4d4Qu5dDcF%2FpBBx4vjLGhBFt35Wa1LCtxJ6Gk6ttguUJAJYP6egWytieX3Jk6J&X-Amz-Signature=cc50bc22e366b64800be9154211d6cb0bc9d9a37ae7ae6ee1c6ef87868119888&X-Amz-SignedHeaders=host&x-id=GetObject)
