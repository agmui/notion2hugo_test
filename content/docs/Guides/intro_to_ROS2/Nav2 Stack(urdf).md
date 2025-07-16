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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L77NJK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA%2FP1N3ZoR%2F5qHSgjd7NH0BE0I%2BfCXI7L8O%2FfO5kUDD5AiEA%2BQ8xer4Jb7vNmudXtvUsiqdqb99F4pf7Tv3hgFkn4k0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDD9atZtVIE5StWfxFCrcA3CdIvUQ%2B5VpWLtIQJRbWxBsIn6MfdfS1v5LGEMtcLvETdgx%2BvJrJG3buijfSe9eveKOID29uw7l93Ff8wZnbCgf7W0YSC%2BuTXM4pdUsTyz5z71FgThqOt0hLyX9YVAchY%2F74mWpwWywr%2ByHbSs%2F3ZLUT7fdnXJtN73cH5Th0DAMioCaf14TFYkhNhN%2F42KIX%2BT9vMwQN%2FeIzariVY0nkR29Oc9VnJGAJYkHEpBCoE5TRKlxptB80usmcJPsQGsbbZcdbmJA33r1xs%2F8xJ6KuVC3A6CvB5LsfvoryZivoRXs5HpQ7tydEXHM%2FZxGKKOtsbYWDenDqMFA1GOMBHup2H3%2B7ln5PCA1b%2B0%2F%2BLM%2FhhGE%2FmulriWXOaKeH0VVjdon3QRFK0IbsHxmqxenspHVeS2TgE7Lx5P4Q8kg1%2FwwMcciO%2BR%2FI3O%2F5WYPJv%2BSxuuL%2Br7aH5TeqjSsQJfHe4ZqguPwlaiiquUE0CfHxiXe8c6bH8fxIRg5i7yOjulZ%2Br6gNAyadR79gwcfOScHYs4j%2FA%2B6PiIDTKycLtL0i0h7Qo3RHeZSLlGRDXvemQ%2Fn0LQAITVzpwSz8xsmpbUHxrCEEiAdLp6i7fom3IRVsGVgtmws%2FD8u9mjg3O5Gnt%2B5MMjd3MMGOqUBe5agn0HFY7ChXuz%2B9UjNxnJder2TRQ%2BzMncR5D9OUOKy7pk86XPP187hfHuip1TzRnvi%2Fi9AzHmcw3ZIBD1A7W30G4PoJX9f0pWhC2Zv0rR21hczQ0V%2BtZMWrQzjWQ%2F506YSH9lM79u%2F0cZyJYsTIzKVecRtXVQJl9zEQwtQLADlldCMVfEOznXUZZDymQDV0kd7dKd4b1Chd4XwkZ5lhhyhcwY%2F&X-Amz-Signature=5f88540ea1f1ac8672807c4dac33962f989c4cc45e4a0d48cd49917359c97f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L77NJK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA%2FP1N3ZoR%2F5qHSgjd7NH0BE0I%2BfCXI7L8O%2FfO5kUDD5AiEA%2BQ8xer4Jb7vNmudXtvUsiqdqb99F4pf7Tv3hgFkn4k0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDD9atZtVIE5StWfxFCrcA3CdIvUQ%2B5VpWLtIQJRbWxBsIn6MfdfS1v5LGEMtcLvETdgx%2BvJrJG3buijfSe9eveKOID29uw7l93Ff8wZnbCgf7W0YSC%2BuTXM4pdUsTyz5z71FgThqOt0hLyX9YVAchY%2F74mWpwWywr%2ByHbSs%2F3ZLUT7fdnXJtN73cH5Th0DAMioCaf14TFYkhNhN%2F42KIX%2BT9vMwQN%2FeIzariVY0nkR29Oc9VnJGAJYkHEpBCoE5TRKlxptB80usmcJPsQGsbbZcdbmJA33r1xs%2F8xJ6KuVC3A6CvB5LsfvoryZivoRXs5HpQ7tydEXHM%2FZxGKKOtsbYWDenDqMFA1GOMBHup2H3%2B7ln5PCA1b%2B0%2F%2BLM%2FhhGE%2FmulriWXOaKeH0VVjdon3QRFK0IbsHxmqxenspHVeS2TgE7Lx5P4Q8kg1%2FwwMcciO%2BR%2FI3O%2F5WYPJv%2BSxuuL%2Br7aH5TeqjSsQJfHe4ZqguPwlaiiquUE0CfHxiXe8c6bH8fxIRg5i7yOjulZ%2Br6gNAyadR79gwcfOScHYs4j%2FA%2B6PiIDTKycLtL0i0h7Qo3RHeZSLlGRDXvemQ%2Fn0LQAITVzpwSz8xsmpbUHxrCEEiAdLp6i7fom3IRVsGVgtmws%2FD8u9mjg3O5Gnt%2B5MMjd3MMGOqUBe5agn0HFY7ChXuz%2B9UjNxnJder2TRQ%2BzMncR5D9OUOKy7pk86XPP187hfHuip1TzRnvi%2Fi9AzHmcw3ZIBD1A7W30G4PoJX9f0pWhC2Zv0rR21hczQ0V%2BtZMWrQzjWQ%2F506YSH9lM79u%2F0cZyJYsTIzKVecRtXVQJl9zEQwtQLADlldCMVfEOznXUZZDymQDV0kd7dKd4b1Chd4XwkZ5lhhyhcwY%2F&X-Amz-Signature=c922b98f45b3ba612c7f4d2f2aab2b1c5a4de97e62d18dad4dfe0766c70d15e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L77NJK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA%2FP1N3ZoR%2F5qHSgjd7NH0BE0I%2BfCXI7L8O%2FfO5kUDD5AiEA%2BQ8xer4Jb7vNmudXtvUsiqdqb99F4pf7Tv3hgFkn4k0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDD9atZtVIE5StWfxFCrcA3CdIvUQ%2B5VpWLtIQJRbWxBsIn6MfdfS1v5LGEMtcLvETdgx%2BvJrJG3buijfSe9eveKOID29uw7l93Ff8wZnbCgf7W0YSC%2BuTXM4pdUsTyz5z71FgThqOt0hLyX9YVAchY%2F74mWpwWywr%2ByHbSs%2F3ZLUT7fdnXJtN73cH5Th0DAMioCaf14TFYkhNhN%2F42KIX%2BT9vMwQN%2FeIzariVY0nkR29Oc9VnJGAJYkHEpBCoE5TRKlxptB80usmcJPsQGsbbZcdbmJA33r1xs%2F8xJ6KuVC3A6CvB5LsfvoryZivoRXs5HpQ7tydEXHM%2FZxGKKOtsbYWDenDqMFA1GOMBHup2H3%2B7ln5PCA1b%2B0%2F%2BLM%2FhhGE%2FmulriWXOaKeH0VVjdon3QRFK0IbsHxmqxenspHVeS2TgE7Lx5P4Q8kg1%2FwwMcciO%2BR%2FI3O%2F5WYPJv%2BSxuuL%2Br7aH5TeqjSsQJfHe4ZqguPwlaiiquUE0CfHxiXe8c6bH8fxIRg5i7yOjulZ%2Br6gNAyadR79gwcfOScHYs4j%2FA%2B6PiIDTKycLtL0i0h7Qo3RHeZSLlGRDXvemQ%2Fn0LQAITVzpwSz8xsmpbUHxrCEEiAdLp6i7fom3IRVsGVgtmws%2FD8u9mjg3O5Gnt%2B5MMjd3MMGOqUBe5agn0HFY7ChXuz%2B9UjNxnJder2TRQ%2BzMncR5D9OUOKy7pk86XPP187hfHuip1TzRnvi%2Fi9AzHmcw3ZIBD1A7W30G4PoJX9f0pWhC2Zv0rR21hczQ0V%2BtZMWrQzjWQ%2F506YSH9lM79u%2F0cZyJYsTIzKVecRtXVQJl9zEQwtQLADlldCMVfEOznXUZZDymQDV0kd7dKd4b1Chd4XwkZ5lhhyhcwY%2F&X-Amz-Signature=717145fc4930e8bc8f9ef0cd4efbb620c932bd6e5e976c3c01b52b0c9a4a3708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L77NJK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA%2FP1N3ZoR%2F5qHSgjd7NH0BE0I%2BfCXI7L8O%2FfO5kUDD5AiEA%2BQ8xer4Jb7vNmudXtvUsiqdqb99F4pf7Tv3hgFkn4k0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDD9atZtVIE5StWfxFCrcA3CdIvUQ%2B5VpWLtIQJRbWxBsIn6MfdfS1v5LGEMtcLvETdgx%2BvJrJG3buijfSe9eveKOID29uw7l93Ff8wZnbCgf7W0YSC%2BuTXM4pdUsTyz5z71FgThqOt0hLyX9YVAchY%2F74mWpwWywr%2ByHbSs%2F3ZLUT7fdnXJtN73cH5Th0DAMioCaf14TFYkhNhN%2F42KIX%2BT9vMwQN%2FeIzariVY0nkR29Oc9VnJGAJYkHEpBCoE5TRKlxptB80usmcJPsQGsbbZcdbmJA33r1xs%2F8xJ6KuVC3A6CvB5LsfvoryZivoRXs5HpQ7tydEXHM%2FZxGKKOtsbYWDenDqMFA1GOMBHup2H3%2B7ln5PCA1b%2B0%2F%2BLM%2FhhGE%2FmulriWXOaKeH0VVjdon3QRFK0IbsHxmqxenspHVeS2TgE7Lx5P4Q8kg1%2FwwMcciO%2BR%2FI3O%2F5WYPJv%2BSxuuL%2Br7aH5TeqjSsQJfHe4ZqguPwlaiiquUE0CfHxiXe8c6bH8fxIRg5i7yOjulZ%2Br6gNAyadR79gwcfOScHYs4j%2FA%2B6PiIDTKycLtL0i0h7Qo3RHeZSLlGRDXvemQ%2Fn0LQAITVzpwSz8xsmpbUHxrCEEiAdLp6i7fom3IRVsGVgtmws%2FD8u9mjg3O5Gnt%2B5MMjd3MMGOqUBe5agn0HFY7ChXuz%2B9UjNxnJder2TRQ%2BzMncR5D9OUOKy7pk86XPP187hfHuip1TzRnvi%2Fi9AzHmcw3ZIBD1A7W30G4PoJX9f0pWhC2Zv0rR21hczQ0V%2BtZMWrQzjWQ%2F506YSH9lM79u%2F0cZyJYsTIzKVecRtXVQJl9zEQwtQLADlldCMVfEOznXUZZDymQDV0kd7dKd4b1Chd4XwkZ5lhhyhcwY%2F&X-Amz-Signature=4356e1fde1d2b8f473df01806a03dcc3a789c9bf376cfd1ccbcac2f341acbc49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L77NJK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA%2FP1N3ZoR%2F5qHSgjd7NH0BE0I%2BfCXI7L8O%2FfO5kUDD5AiEA%2BQ8xer4Jb7vNmudXtvUsiqdqb99F4pf7Tv3hgFkn4k0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDD9atZtVIE5StWfxFCrcA3CdIvUQ%2B5VpWLtIQJRbWxBsIn6MfdfS1v5LGEMtcLvETdgx%2BvJrJG3buijfSe9eveKOID29uw7l93Ff8wZnbCgf7W0YSC%2BuTXM4pdUsTyz5z71FgThqOt0hLyX9YVAchY%2F74mWpwWywr%2ByHbSs%2F3ZLUT7fdnXJtN73cH5Th0DAMioCaf14TFYkhNhN%2F42KIX%2BT9vMwQN%2FeIzariVY0nkR29Oc9VnJGAJYkHEpBCoE5TRKlxptB80usmcJPsQGsbbZcdbmJA33r1xs%2F8xJ6KuVC3A6CvB5LsfvoryZivoRXs5HpQ7tydEXHM%2FZxGKKOtsbYWDenDqMFA1GOMBHup2H3%2B7ln5PCA1b%2B0%2F%2BLM%2FhhGE%2FmulriWXOaKeH0VVjdon3QRFK0IbsHxmqxenspHVeS2TgE7Lx5P4Q8kg1%2FwwMcciO%2BR%2FI3O%2F5WYPJv%2BSxuuL%2Br7aH5TeqjSsQJfHe4ZqguPwlaiiquUE0CfHxiXe8c6bH8fxIRg5i7yOjulZ%2Br6gNAyadR79gwcfOScHYs4j%2FA%2B6PiIDTKycLtL0i0h7Qo3RHeZSLlGRDXvemQ%2Fn0LQAITVzpwSz8xsmpbUHxrCEEiAdLp6i7fom3IRVsGVgtmws%2FD8u9mjg3O5Gnt%2B5MMjd3MMGOqUBe5agn0HFY7ChXuz%2B9UjNxnJder2TRQ%2BzMncR5D9OUOKy7pk86XPP187hfHuip1TzRnvi%2Fi9AzHmcw3ZIBD1A7W30G4PoJX9f0pWhC2Zv0rR21hczQ0V%2BtZMWrQzjWQ%2F506YSH9lM79u%2F0cZyJYsTIzKVecRtXVQJl9zEQwtQLADlldCMVfEOznXUZZDymQDV0kd7dKd4b1Chd4XwkZ5lhhyhcwY%2F&X-Amz-Signature=860c1d9d7bc1a3b53016b481fb039872f023944eebd6746a8d404fee7af5d079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2L77NJK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA%2FP1N3ZoR%2F5qHSgjd7NH0BE0I%2BfCXI7L8O%2FfO5kUDD5AiEA%2BQ8xer4Jb7vNmudXtvUsiqdqb99F4pf7Tv3hgFkn4k0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDD9atZtVIE5StWfxFCrcA3CdIvUQ%2B5VpWLtIQJRbWxBsIn6MfdfS1v5LGEMtcLvETdgx%2BvJrJG3buijfSe9eveKOID29uw7l93Ff8wZnbCgf7W0YSC%2BuTXM4pdUsTyz5z71FgThqOt0hLyX9YVAchY%2F74mWpwWywr%2ByHbSs%2F3ZLUT7fdnXJtN73cH5Th0DAMioCaf14TFYkhNhN%2F42KIX%2BT9vMwQN%2FeIzariVY0nkR29Oc9VnJGAJYkHEpBCoE5TRKlxptB80usmcJPsQGsbbZcdbmJA33r1xs%2F8xJ6KuVC3A6CvB5LsfvoryZivoRXs5HpQ7tydEXHM%2FZxGKKOtsbYWDenDqMFA1GOMBHup2H3%2B7ln5PCA1b%2B0%2F%2BLM%2FhhGE%2FmulriWXOaKeH0VVjdon3QRFK0IbsHxmqxenspHVeS2TgE7Lx5P4Q8kg1%2FwwMcciO%2BR%2FI3O%2F5WYPJv%2BSxuuL%2Br7aH5TeqjSsQJfHe4ZqguPwlaiiquUE0CfHxiXe8c6bH8fxIRg5i7yOjulZ%2Br6gNAyadR79gwcfOScHYs4j%2FA%2B6PiIDTKycLtL0i0h7Qo3RHeZSLlGRDXvemQ%2Fn0LQAITVzpwSz8xsmpbUHxrCEEiAdLp6i7fom3IRVsGVgtmws%2FD8u9mjg3O5Gnt%2B5MMjd3MMGOqUBe5agn0HFY7ChXuz%2B9UjNxnJder2TRQ%2BzMncR5D9OUOKy7pk86XPP187hfHuip1TzRnvi%2Fi9AzHmcw3ZIBD1A7W30G4PoJX9f0pWhC2Zv0rR21hczQ0V%2BtZMWrQzjWQ%2F506YSH9lM79u%2F0cZyJYsTIzKVecRtXVQJl9zEQwtQLADlldCMVfEOznXUZZDymQDV0kd7dKd4b1Chd4XwkZ5lhhyhcwY%2F&X-Amz-Signature=a5b65c3bf7072fbf261cac7be17ec5a0c8daad04274623d162cba814f5cb93bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
