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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCB2U3X%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCmG47mfczPo6uNsLE3zSEfDNuqBGx%2FY4WE1XgRx8lD5gIgEvRz3wR2pgbQYvXoHR5KE1nagxgFHsbuynZYSalzhiwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHEOlWXdoYMhs11LvSrcA3xZjGYospSzTpdncK5I1MWh5jqW0mJKoDgKcNz1NCt4KcfqoTqGITOcI4d5ik7s1WnGUIlsyCiZLinVSqB64rvmqemIoIQ6%2Ff3HbIc9PEvUSG1rJk9Nc6mIClUS5TeBtR2B8iFLtwuQyVSJup74Z5tac3s4Jiu%2B%2B4f%2Fx7eTaXdDNEvealezqhv7mv37TAaofpQwZHqoj8D19Ef2mJ6NjWaz4Bw%2FKI8Cs8cZz6d%2FH9QpAXOLUnIQFpECpYe3iscJOXpXqlyG1D2oA7R%2FR3nToYgw%2BLCp7eWR1cOSsWBBbu44LS8fSIq2F0PL0BNXyyIO50%2FWvWuCxlGpU1jjrcD4N%2Be6SB0j6zn9OfF%2FgqbzmZx%2B5ixCcgu74Fbke%2BjTa27iyPA64M%2BbYw1j%2BZVQSr%2FLi1uHj3cZT9mZ5lAqVzIQ6YzvbtYf%2FSwNlTPeD1e6sAdRsskztLCv%2FEDqK9Wk4t8Wk%2F4JKpQJ%2BZ2tFIYpZEVaPsdh8XbxVYdTyrKOTUadfmO%2FQtGXENgUyUXDP01jjlCmRWZJ%2BnkWbi%2F296C0jzzEqTuEGVDacnFcJDNPoZUQPTsXNYb%2BJESOeCa1SrW4jx1RR7dgXp3HZXNVh2lnO8rFzUrMGAdouCP65Xq7s2SFMJiix70GOqUBXUUejRtBcK7qXplsw1BYRWDF0AKUr9NAdpbbihoX9qP8u2loneEf2Ufc2pwJJqNt4bwvB%2FD0kugo6vjSqNR%2F%2BYzPko6bTIFlyypdkeE65GiUvBB%2FpWUVsagfu2MLuZ9gOT%2FQnG9XTjB9inTOzVRg1V3TJoXk%2F1FnmxBJvCATJSzT9L6oKY06YGATWcjnNSnjuJECb3SMd2a20lZfgtzYR83s9s%2BH&X-Amz-Signature=4c5172e667140eb032074d2e1f8eb9f49e9de5397b45e89e836608a9ada7c32f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCB2U3X%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCmG47mfczPo6uNsLE3zSEfDNuqBGx%2FY4WE1XgRx8lD5gIgEvRz3wR2pgbQYvXoHR5KE1nagxgFHsbuynZYSalzhiwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHEOlWXdoYMhs11LvSrcA3xZjGYospSzTpdncK5I1MWh5jqW0mJKoDgKcNz1NCt4KcfqoTqGITOcI4d5ik7s1WnGUIlsyCiZLinVSqB64rvmqemIoIQ6%2Ff3HbIc9PEvUSG1rJk9Nc6mIClUS5TeBtR2B8iFLtwuQyVSJup74Z5tac3s4Jiu%2B%2B4f%2Fx7eTaXdDNEvealezqhv7mv37TAaofpQwZHqoj8D19Ef2mJ6NjWaz4Bw%2FKI8Cs8cZz6d%2FH9QpAXOLUnIQFpECpYe3iscJOXpXqlyG1D2oA7R%2FR3nToYgw%2BLCp7eWR1cOSsWBBbu44LS8fSIq2F0PL0BNXyyIO50%2FWvWuCxlGpU1jjrcD4N%2Be6SB0j6zn9OfF%2FgqbzmZx%2B5ixCcgu74Fbke%2BjTa27iyPA64M%2BbYw1j%2BZVQSr%2FLi1uHj3cZT9mZ5lAqVzIQ6YzvbtYf%2FSwNlTPeD1e6sAdRsskztLCv%2FEDqK9Wk4t8Wk%2F4JKpQJ%2BZ2tFIYpZEVaPsdh8XbxVYdTyrKOTUadfmO%2FQtGXENgUyUXDP01jjlCmRWZJ%2BnkWbi%2F296C0jzzEqTuEGVDacnFcJDNPoZUQPTsXNYb%2BJESOeCa1SrW4jx1RR7dgXp3HZXNVh2lnO8rFzUrMGAdouCP65Xq7s2SFMJiix70GOqUBXUUejRtBcK7qXplsw1BYRWDF0AKUr9NAdpbbihoX9qP8u2loneEf2Ufc2pwJJqNt4bwvB%2FD0kugo6vjSqNR%2F%2BYzPko6bTIFlyypdkeE65GiUvBB%2FpWUVsagfu2MLuZ9gOT%2FQnG9XTjB9inTOzVRg1V3TJoXk%2F1FnmxBJvCATJSzT9L6oKY06YGATWcjnNSnjuJECb3SMd2a20lZfgtzYR83s9s%2BH&X-Amz-Signature=95dfb3d1c53fe3a153adcae1f7508a5b6d708d7b1b9cef8386d0fd31328d9048&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCB2U3X%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCmG47mfczPo6uNsLE3zSEfDNuqBGx%2FY4WE1XgRx8lD5gIgEvRz3wR2pgbQYvXoHR5KE1nagxgFHsbuynZYSalzhiwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHEOlWXdoYMhs11LvSrcA3xZjGYospSzTpdncK5I1MWh5jqW0mJKoDgKcNz1NCt4KcfqoTqGITOcI4d5ik7s1WnGUIlsyCiZLinVSqB64rvmqemIoIQ6%2Ff3HbIc9PEvUSG1rJk9Nc6mIClUS5TeBtR2B8iFLtwuQyVSJup74Z5tac3s4Jiu%2B%2B4f%2Fx7eTaXdDNEvealezqhv7mv37TAaofpQwZHqoj8D19Ef2mJ6NjWaz4Bw%2FKI8Cs8cZz6d%2FH9QpAXOLUnIQFpECpYe3iscJOXpXqlyG1D2oA7R%2FR3nToYgw%2BLCp7eWR1cOSsWBBbu44LS8fSIq2F0PL0BNXyyIO50%2FWvWuCxlGpU1jjrcD4N%2Be6SB0j6zn9OfF%2FgqbzmZx%2B5ixCcgu74Fbke%2BjTa27iyPA64M%2BbYw1j%2BZVQSr%2FLi1uHj3cZT9mZ5lAqVzIQ6YzvbtYf%2FSwNlTPeD1e6sAdRsskztLCv%2FEDqK9Wk4t8Wk%2F4JKpQJ%2BZ2tFIYpZEVaPsdh8XbxVYdTyrKOTUadfmO%2FQtGXENgUyUXDP01jjlCmRWZJ%2BnkWbi%2F296C0jzzEqTuEGVDacnFcJDNPoZUQPTsXNYb%2BJESOeCa1SrW4jx1RR7dgXp3HZXNVh2lnO8rFzUrMGAdouCP65Xq7s2SFMJiix70GOqUBXUUejRtBcK7qXplsw1BYRWDF0AKUr9NAdpbbihoX9qP8u2loneEf2Ufc2pwJJqNt4bwvB%2FD0kugo6vjSqNR%2F%2BYzPko6bTIFlyypdkeE65GiUvBB%2FpWUVsagfu2MLuZ9gOT%2FQnG9XTjB9inTOzVRg1V3TJoXk%2F1FnmxBJvCATJSzT9L6oKY06YGATWcjnNSnjuJECb3SMd2a20lZfgtzYR83s9s%2BH&X-Amz-Signature=a58593f4ffc76d6e9f945ba282cdc5154bef3bed9fd9570d6eec69f938b19518&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCB2U3X%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCmG47mfczPo6uNsLE3zSEfDNuqBGx%2FY4WE1XgRx8lD5gIgEvRz3wR2pgbQYvXoHR5KE1nagxgFHsbuynZYSalzhiwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHEOlWXdoYMhs11LvSrcA3xZjGYospSzTpdncK5I1MWh5jqW0mJKoDgKcNz1NCt4KcfqoTqGITOcI4d5ik7s1WnGUIlsyCiZLinVSqB64rvmqemIoIQ6%2Ff3HbIc9PEvUSG1rJk9Nc6mIClUS5TeBtR2B8iFLtwuQyVSJup74Z5tac3s4Jiu%2B%2B4f%2Fx7eTaXdDNEvealezqhv7mv37TAaofpQwZHqoj8D19Ef2mJ6NjWaz4Bw%2FKI8Cs8cZz6d%2FH9QpAXOLUnIQFpECpYe3iscJOXpXqlyG1D2oA7R%2FR3nToYgw%2BLCp7eWR1cOSsWBBbu44LS8fSIq2F0PL0BNXyyIO50%2FWvWuCxlGpU1jjrcD4N%2Be6SB0j6zn9OfF%2FgqbzmZx%2B5ixCcgu74Fbke%2BjTa27iyPA64M%2BbYw1j%2BZVQSr%2FLi1uHj3cZT9mZ5lAqVzIQ6YzvbtYf%2FSwNlTPeD1e6sAdRsskztLCv%2FEDqK9Wk4t8Wk%2F4JKpQJ%2BZ2tFIYpZEVaPsdh8XbxVYdTyrKOTUadfmO%2FQtGXENgUyUXDP01jjlCmRWZJ%2BnkWbi%2F296C0jzzEqTuEGVDacnFcJDNPoZUQPTsXNYb%2BJESOeCa1SrW4jx1RR7dgXp3HZXNVh2lnO8rFzUrMGAdouCP65Xq7s2SFMJiix70GOqUBXUUejRtBcK7qXplsw1BYRWDF0AKUr9NAdpbbihoX9qP8u2loneEf2Ufc2pwJJqNt4bwvB%2FD0kugo6vjSqNR%2F%2BYzPko6bTIFlyypdkeE65GiUvBB%2FpWUVsagfu2MLuZ9gOT%2FQnG9XTjB9inTOzVRg1V3TJoXk%2F1FnmxBJvCATJSzT9L6oKY06YGATWcjnNSnjuJECb3SMd2a20lZfgtzYR83s9s%2BH&X-Amz-Signature=46a00d0191062c4fe2fac925c15dfa157b073e19280bba46aef480112304ed66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCB2U3X%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCmG47mfczPo6uNsLE3zSEfDNuqBGx%2FY4WE1XgRx8lD5gIgEvRz3wR2pgbQYvXoHR5KE1nagxgFHsbuynZYSalzhiwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHEOlWXdoYMhs11LvSrcA3xZjGYospSzTpdncK5I1MWh5jqW0mJKoDgKcNz1NCt4KcfqoTqGITOcI4d5ik7s1WnGUIlsyCiZLinVSqB64rvmqemIoIQ6%2Ff3HbIc9PEvUSG1rJk9Nc6mIClUS5TeBtR2B8iFLtwuQyVSJup74Z5tac3s4Jiu%2B%2B4f%2Fx7eTaXdDNEvealezqhv7mv37TAaofpQwZHqoj8D19Ef2mJ6NjWaz4Bw%2FKI8Cs8cZz6d%2FH9QpAXOLUnIQFpECpYe3iscJOXpXqlyG1D2oA7R%2FR3nToYgw%2BLCp7eWR1cOSsWBBbu44LS8fSIq2F0PL0BNXyyIO50%2FWvWuCxlGpU1jjrcD4N%2Be6SB0j6zn9OfF%2FgqbzmZx%2B5ixCcgu74Fbke%2BjTa27iyPA64M%2BbYw1j%2BZVQSr%2FLi1uHj3cZT9mZ5lAqVzIQ6YzvbtYf%2FSwNlTPeD1e6sAdRsskztLCv%2FEDqK9Wk4t8Wk%2F4JKpQJ%2BZ2tFIYpZEVaPsdh8XbxVYdTyrKOTUadfmO%2FQtGXENgUyUXDP01jjlCmRWZJ%2BnkWbi%2F296C0jzzEqTuEGVDacnFcJDNPoZUQPTsXNYb%2BJESOeCa1SrW4jx1RR7dgXp3HZXNVh2lnO8rFzUrMGAdouCP65Xq7s2SFMJiix70GOqUBXUUejRtBcK7qXplsw1BYRWDF0AKUr9NAdpbbihoX9qP8u2loneEf2Ufc2pwJJqNt4bwvB%2FD0kugo6vjSqNR%2F%2BYzPko6bTIFlyypdkeE65GiUvBB%2FpWUVsagfu2MLuZ9gOT%2FQnG9XTjB9inTOzVRg1V3TJoXk%2F1FnmxBJvCATJSzT9L6oKY06YGATWcjnNSnjuJECb3SMd2a20lZfgtzYR83s9s%2BH&X-Amz-Signature=fa2a98a8d7789b57a590a2906753c5fecd8c20961f2b559d2ba01ec3b0dd959e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCB2U3X%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCmG47mfczPo6uNsLE3zSEfDNuqBGx%2FY4WE1XgRx8lD5gIgEvRz3wR2pgbQYvXoHR5KE1nagxgFHsbuynZYSalzhiwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHEOlWXdoYMhs11LvSrcA3xZjGYospSzTpdncK5I1MWh5jqW0mJKoDgKcNz1NCt4KcfqoTqGITOcI4d5ik7s1WnGUIlsyCiZLinVSqB64rvmqemIoIQ6%2Ff3HbIc9PEvUSG1rJk9Nc6mIClUS5TeBtR2B8iFLtwuQyVSJup74Z5tac3s4Jiu%2B%2B4f%2Fx7eTaXdDNEvealezqhv7mv37TAaofpQwZHqoj8D19Ef2mJ6NjWaz4Bw%2FKI8Cs8cZz6d%2FH9QpAXOLUnIQFpECpYe3iscJOXpXqlyG1D2oA7R%2FR3nToYgw%2BLCp7eWR1cOSsWBBbu44LS8fSIq2F0PL0BNXyyIO50%2FWvWuCxlGpU1jjrcD4N%2Be6SB0j6zn9OfF%2FgqbzmZx%2B5ixCcgu74Fbke%2BjTa27iyPA64M%2BbYw1j%2BZVQSr%2FLi1uHj3cZT9mZ5lAqVzIQ6YzvbtYf%2FSwNlTPeD1e6sAdRsskztLCv%2FEDqK9Wk4t8Wk%2F4JKpQJ%2BZ2tFIYpZEVaPsdh8XbxVYdTyrKOTUadfmO%2FQtGXENgUyUXDP01jjlCmRWZJ%2BnkWbi%2F296C0jzzEqTuEGVDacnFcJDNPoZUQPTsXNYb%2BJESOeCa1SrW4jx1RR7dgXp3HZXNVh2lnO8rFzUrMGAdouCP65Xq7s2SFMJiix70GOqUBXUUejRtBcK7qXplsw1BYRWDF0AKUr9NAdpbbihoX9qP8u2loneEf2Ufc2pwJJqNt4bwvB%2FD0kugo6vjSqNR%2F%2BYzPko6bTIFlyypdkeE65GiUvBB%2FpWUVsagfu2MLuZ9gOT%2FQnG9XTjB9inTOzVRg1V3TJoXk%2F1FnmxBJvCATJSzT9L6oKY06YGATWcjnNSnjuJECb3SMd2a20lZfgtzYR83s9s%2BH&X-Amz-Signature=fa388ad46ed60cbcb04fef92decd08adb82821bb1ba6f7097b57fba17ccace31&X-Amz-SignedHeaders=host&x-id=GetObject)
