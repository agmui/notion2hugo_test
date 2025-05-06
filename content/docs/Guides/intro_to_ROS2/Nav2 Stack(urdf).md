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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHOXA57%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhmB9yXv8OJuCjUAYCZiKd9pekUeLK5tSBNcB%2FiS2rgQIgESVFg7OUkebcvrsOXQyZX1EXmma4AheGa9PpJYukxcgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDONM54h2p%2Fs3tdcJhyrcA6CTxnAbImS%2F7eDqDhFQISGKuuhpUssgWinaTSXP%2Bkrirll5NWHYbhDY5p93SC5CYvdrowPEd1Gxfrn2rywULOR7qBBqkaoTCDioMhP5DPPyMTFVthnia8vZu2kqTYO5KxHA%2Fqeia9cRTZJQUN2S4X7S%2FZAoYv16%2FUbP6jRStEWCRcanJ%2FBreAkkm3lI4CF2TyLW2bGJqxfEbOHwCp%2Fmcl2A9o0pzsd4uqdGHYXEHDNOqMgLl6uJTcj0tTM3V0109iEpaPUX6%2B9sjKeSnOtSWZqMqTR%2F2b5HbHP3BNor1sqYl0Lr%2BZEx9iFd1ervi1XZwIjm7TwrvERymoTDJfdj0l4o6WH%2BWyOHr1mstz8XwxMbi84RG6%2BazjYS3zCJCcQ75MMo8u2nYuW58VwSEo8HoplVL0r8w%2BjicCdD%2F5%2FiWNaNmZblQahhj%2BWY5egwWEAaRpywgH6gK0kIWE446CnmNb%2B%2BdToiQePBxTpfegyaYF8x0BscFqATMACDWLdmc6k78Fi3v654lWfZB5sL77G%2FThWpGdFTr23JGs8k%2FRa9%2Fa%2FLifjKiPKAtB27AOBkF6iJKilT70AM6PrxAR7SYQ2mTJQNYbcL7s4tdG4lqUHEJtNZZ4vLE59%2BlDoK%2FTUaMJ%2B06cAGOqUB2eKUBlFUXCTJ%2BU0j2nS3cJIJdnWSiTil9xVvX41YyUpCin3xIP5KSA4aRHxwS7XQL9WvTbkI4fQZREJMGdkLOTM7wuYWN2ifl%2F0Yde0fbheYJJ2eaLulTjMbSsDEoQQiqXu41Yf%2BpHHi3nxf068a1BetzGVLjoHP19yRAC2LIdO0Rnckz2ClMKC2P3K0dcO1bB8Gvj3IyXmcflpxfzPuI9r7kDjW&X-Amz-Signature=851a6405d3f4d0e934eb6fd7eb8a41f13419b5c158ee4a84aef56f5da541eb08&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHOXA57%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhmB9yXv8OJuCjUAYCZiKd9pekUeLK5tSBNcB%2FiS2rgQIgESVFg7OUkebcvrsOXQyZX1EXmma4AheGa9PpJYukxcgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDONM54h2p%2Fs3tdcJhyrcA6CTxnAbImS%2F7eDqDhFQISGKuuhpUssgWinaTSXP%2Bkrirll5NWHYbhDY5p93SC5CYvdrowPEd1Gxfrn2rywULOR7qBBqkaoTCDioMhP5DPPyMTFVthnia8vZu2kqTYO5KxHA%2Fqeia9cRTZJQUN2S4X7S%2FZAoYv16%2FUbP6jRStEWCRcanJ%2FBreAkkm3lI4CF2TyLW2bGJqxfEbOHwCp%2Fmcl2A9o0pzsd4uqdGHYXEHDNOqMgLl6uJTcj0tTM3V0109iEpaPUX6%2B9sjKeSnOtSWZqMqTR%2F2b5HbHP3BNor1sqYl0Lr%2BZEx9iFd1ervi1XZwIjm7TwrvERymoTDJfdj0l4o6WH%2BWyOHr1mstz8XwxMbi84RG6%2BazjYS3zCJCcQ75MMo8u2nYuW58VwSEo8HoplVL0r8w%2BjicCdD%2F5%2FiWNaNmZblQahhj%2BWY5egwWEAaRpywgH6gK0kIWE446CnmNb%2B%2BdToiQePBxTpfegyaYF8x0BscFqATMACDWLdmc6k78Fi3v654lWfZB5sL77G%2FThWpGdFTr23JGs8k%2FRa9%2Fa%2FLifjKiPKAtB27AOBkF6iJKilT70AM6PrxAR7SYQ2mTJQNYbcL7s4tdG4lqUHEJtNZZ4vLE59%2BlDoK%2FTUaMJ%2B06cAGOqUB2eKUBlFUXCTJ%2BU0j2nS3cJIJdnWSiTil9xVvX41YyUpCin3xIP5KSA4aRHxwS7XQL9WvTbkI4fQZREJMGdkLOTM7wuYWN2ifl%2F0Yde0fbheYJJ2eaLulTjMbSsDEoQQiqXu41Yf%2BpHHi3nxf068a1BetzGVLjoHP19yRAC2LIdO0Rnckz2ClMKC2P3K0dcO1bB8Gvj3IyXmcflpxfzPuI9r7kDjW&X-Amz-Signature=9b73b2fc5ae6a4f4292c1c7d02b803a2f36daade514874b64c2df4bb3c668c11&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHOXA57%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhmB9yXv8OJuCjUAYCZiKd9pekUeLK5tSBNcB%2FiS2rgQIgESVFg7OUkebcvrsOXQyZX1EXmma4AheGa9PpJYukxcgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDONM54h2p%2Fs3tdcJhyrcA6CTxnAbImS%2F7eDqDhFQISGKuuhpUssgWinaTSXP%2Bkrirll5NWHYbhDY5p93SC5CYvdrowPEd1Gxfrn2rywULOR7qBBqkaoTCDioMhP5DPPyMTFVthnia8vZu2kqTYO5KxHA%2Fqeia9cRTZJQUN2S4X7S%2FZAoYv16%2FUbP6jRStEWCRcanJ%2FBreAkkm3lI4CF2TyLW2bGJqxfEbOHwCp%2Fmcl2A9o0pzsd4uqdGHYXEHDNOqMgLl6uJTcj0tTM3V0109iEpaPUX6%2B9sjKeSnOtSWZqMqTR%2F2b5HbHP3BNor1sqYl0Lr%2BZEx9iFd1ervi1XZwIjm7TwrvERymoTDJfdj0l4o6WH%2BWyOHr1mstz8XwxMbi84RG6%2BazjYS3zCJCcQ75MMo8u2nYuW58VwSEo8HoplVL0r8w%2BjicCdD%2F5%2FiWNaNmZblQahhj%2BWY5egwWEAaRpywgH6gK0kIWE446CnmNb%2B%2BdToiQePBxTpfegyaYF8x0BscFqATMACDWLdmc6k78Fi3v654lWfZB5sL77G%2FThWpGdFTr23JGs8k%2FRa9%2Fa%2FLifjKiPKAtB27AOBkF6iJKilT70AM6PrxAR7SYQ2mTJQNYbcL7s4tdG4lqUHEJtNZZ4vLE59%2BlDoK%2FTUaMJ%2B06cAGOqUB2eKUBlFUXCTJ%2BU0j2nS3cJIJdnWSiTil9xVvX41YyUpCin3xIP5KSA4aRHxwS7XQL9WvTbkI4fQZREJMGdkLOTM7wuYWN2ifl%2F0Yde0fbheYJJ2eaLulTjMbSsDEoQQiqXu41Yf%2BpHHi3nxf068a1BetzGVLjoHP19yRAC2LIdO0Rnckz2ClMKC2P3K0dcO1bB8Gvj3IyXmcflpxfzPuI9r7kDjW&X-Amz-Signature=5973c61d339ae3c816673c49278a9316cb740d47fff741617e07cd52d46fee9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHOXA57%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhmB9yXv8OJuCjUAYCZiKd9pekUeLK5tSBNcB%2FiS2rgQIgESVFg7OUkebcvrsOXQyZX1EXmma4AheGa9PpJYukxcgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDONM54h2p%2Fs3tdcJhyrcA6CTxnAbImS%2F7eDqDhFQISGKuuhpUssgWinaTSXP%2Bkrirll5NWHYbhDY5p93SC5CYvdrowPEd1Gxfrn2rywULOR7qBBqkaoTCDioMhP5DPPyMTFVthnia8vZu2kqTYO5KxHA%2Fqeia9cRTZJQUN2S4X7S%2FZAoYv16%2FUbP6jRStEWCRcanJ%2FBreAkkm3lI4CF2TyLW2bGJqxfEbOHwCp%2Fmcl2A9o0pzsd4uqdGHYXEHDNOqMgLl6uJTcj0tTM3V0109iEpaPUX6%2B9sjKeSnOtSWZqMqTR%2F2b5HbHP3BNor1sqYl0Lr%2BZEx9iFd1ervi1XZwIjm7TwrvERymoTDJfdj0l4o6WH%2BWyOHr1mstz8XwxMbi84RG6%2BazjYS3zCJCcQ75MMo8u2nYuW58VwSEo8HoplVL0r8w%2BjicCdD%2F5%2FiWNaNmZblQahhj%2BWY5egwWEAaRpywgH6gK0kIWE446CnmNb%2B%2BdToiQePBxTpfegyaYF8x0BscFqATMACDWLdmc6k78Fi3v654lWfZB5sL77G%2FThWpGdFTr23JGs8k%2FRa9%2Fa%2FLifjKiPKAtB27AOBkF6iJKilT70AM6PrxAR7SYQ2mTJQNYbcL7s4tdG4lqUHEJtNZZ4vLE59%2BlDoK%2FTUaMJ%2B06cAGOqUB2eKUBlFUXCTJ%2BU0j2nS3cJIJdnWSiTil9xVvX41YyUpCin3xIP5KSA4aRHxwS7XQL9WvTbkI4fQZREJMGdkLOTM7wuYWN2ifl%2F0Yde0fbheYJJ2eaLulTjMbSsDEoQQiqXu41Yf%2BpHHi3nxf068a1BetzGVLjoHP19yRAC2LIdO0Rnckz2ClMKC2P3K0dcO1bB8Gvj3IyXmcflpxfzPuI9r7kDjW&X-Amz-Signature=477c106c18159ead7ad44c7f32160b94a83c71a1a0beceb53c905a3057460f70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHOXA57%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhmB9yXv8OJuCjUAYCZiKd9pekUeLK5tSBNcB%2FiS2rgQIgESVFg7OUkebcvrsOXQyZX1EXmma4AheGa9PpJYukxcgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDONM54h2p%2Fs3tdcJhyrcA6CTxnAbImS%2F7eDqDhFQISGKuuhpUssgWinaTSXP%2Bkrirll5NWHYbhDY5p93SC5CYvdrowPEd1Gxfrn2rywULOR7qBBqkaoTCDioMhP5DPPyMTFVthnia8vZu2kqTYO5KxHA%2Fqeia9cRTZJQUN2S4X7S%2FZAoYv16%2FUbP6jRStEWCRcanJ%2FBreAkkm3lI4CF2TyLW2bGJqxfEbOHwCp%2Fmcl2A9o0pzsd4uqdGHYXEHDNOqMgLl6uJTcj0tTM3V0109iEpaPUX6%2B9sjKeSnOtSWZqMqTR%2F2b5HbHP3BNor1sqYl0Lr%2BZEx9iFd1ervi1XZwIjm7TwrvERymoTDJfdj0l4o6WH%2BWyOHr1mstz8XwxMbi84RG6%2BazjYS3zCJCcQ75MMo8u2nYuW58VwSEo8HoplVL0r8w%2BjicCdD%2F5%2FiWNaNmZblQahhj%2BWY5egwWEAaRpywgH6gK0kIWE446CnmNb%2B%2BdToiQePBxTpfegyaYF8x0BscFqATMACDWLdmc6k78Fi3v654lWfZB5sL77G%2FThWpGdFTr23JGs8k%2FRa9%2Fa%2FLifjKiPKAtB27AOBkF6iJKilT70AM6PrxAR7SYQ2mTJQNYbcL7s4tdG4lqUHEJtNZZ4vLE59%2BlDoK%2FTUaMJ%2B06cAGOqUB2eKUBlFUXCTJ%2BU0j2nS3cJIJdnWSiTil9xVvX41YyUpCin3xIP5KSA4aRHxwS7XQL9WvTbkI4fQZREJMGdkLOTM7wuYWN2ifl%2F0Yde0fbheYJJ2eaLulTjMbSsDEoQQiqXu41Yf%2BpHHi3nxf068a1BetzGVLjoHP19yRAC2LIdO0Rnckz2ClMKC2P3K0dcO1bB8Gvj3IyXmcflpxfzPuI9r7kDjW&X-Amz-Signature=d53a7ffef8c80d53f2aa624248d7cd4e3ac5a95fd3f50c94c4bc37a02fa00b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHOXA57%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhmB9yXv8OJuCjUAYCZiKd9pekUeLK5tSBNcB%2FiS2rgQIgESVFg7OUkebcvrsOXQyZX1EXmma4AheGa9PpJYukxcgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDONM54h2p%2Fs3tdcJhyrcA6CTxnAbImS%2F7eDqDhFQISGKuuhpUssgWinaTSXP%2Bkrirll5NWHYbhDY5p93SC5CYvdrowPEd1Gxfrn2rywULOR7qBBqkaoTCDioMhP5DPPyMTFVthnia8vZu2kqTYO5KxHA%2Fqeia9cRTZJQUN2S4X7S%2FZAoYv16%2FUbP6jRStEWCRcanJ%2FBreAkkm3lI4CF2TyLW2bGJqxfEbOHwCp%2Fmcl2A9o0pzsd4uqdGHYXEHDNOqMgLl6uJTcj0tTM3V0109iEpaPUX6%2B9sjKeSnOtSWZqMqTR%2F2b5HbHP3BNor1sqYl0Lr%2BZEx9iFd1ervi1XZwIjm7TwrvERymoTDJfdj0l4o6WH%2BWyOHr1mstz8XwxMbi84RG6%2BazjYS3zCJCcQ75MMo8u2nYuW58VwSEo8HoplVL0r8w%2BjicCdD%2F5%2FiWNaNmZblQahhj%2BWY5egwWEAaRpywgH6gK0kIWE446CnmNb%2B%2BdToiQePBxTpfegyaYF8x0BscFqATMACDWLdmc6k78Fi3v654lWfZB5sL77G%2FThWpGdFTr23JGs8k%2FRa9%2Fa%2FLifjKiPKAtB27AOBkF6iJKilT70AM6PrxAR7SYQ2mTJQNYbcL7s4tdG4lqUHEJtNZZ4vLE59%2BlDoK%2FTUaMJ%2B06cAGOqUB2eKUBlFUXCTJ%2BU0j2nS3cJIJdnWSiTil9xVvX41YyUpCin3xIP5KSA4aRHxwS7XQL9WvTbkI4fQZREJMGdkLOTM7wuYWN2ifl%2F0Yde0fbheYJJ2eaLulTjMbSsDEoQQiqXu41Yf%2BpHHi3nxf068a1BetzGVLjoHP19yRAC2LIdO0Rnckz2ClMKC2P3K0dcO1bB8Gvj3IyXmcflpxfzPuI9r7kDjW&X-Amz-Signature=ee0031b812fecfbe2ad7649502862fcfbdc89382b1967b1f1f92e8571500da3b&X-Amz-SignedHeaders=host&x-id=GetObject)
