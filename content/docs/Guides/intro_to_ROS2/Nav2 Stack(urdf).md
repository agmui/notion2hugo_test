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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77BH2SI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCRtJQ4eVzbhEYEqZosZXCS5qBDrtAJoONflalE8RPPQgIgc66B4YbGe7xfR7QJJUG1P%2F%2F3gpcxhKIuL3tlQ6aedokq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBOaYm%2FL00rCWlnG5SrcA%2F06RIYEQYabgo%2Fevhg9AmMwa%2BpOC51XuduIoKcmB1HI%2F4WFX2dxYOJ3otTFvnJkbQ7bgcapSCUm8C8j0lp%2B3yUgdml2ObUo9kipSg97PCgPJ4DzgRtkJA3Fgw%2BZ%2BbE%2F%2BpkvhGNyF1R0dmsiQPdyFt5fT4q4wpJfFnAvlf12fTXdgyQLs%2BbAz8OeqULRPhEJ37kkVKaQXRKHWHlZOfc9hKTYkzKRW6%2Fr6RPWL3EuMUExOjZBlJJYe73xVfOQh7%2B7sEBr6TyZOhYja36TReACELOWTbKi96oqqRj6uGvfiSbmjAnsvFItPt3C9kn%2B55j%2BS8NTm%2Fq8HIf%2BJzRQ4EeTWGVZ%2BRXIvz%2B1DaKNR6DtV4FDfJPabYj4V2Hl48q1MZfojFNm49K4BN%2FJk1E6eaXvM5YHQeg1QLR8YcAOflKYEyifC4%2FDRJgbnrCzYtfqq2nDeYJrx3lz2mWvS7Jmvrw5jIY1E2OMlP47Lwp5o6GBhASyPr4j0z4PSlndHwDplGzWXur17M%2BtANuEza7o3tEKhcFK9TuJHExJdJ%2FU1UgBslVPS4J2aSmKGntku0sMnAb%2BvJGGX%2BlvWUi%2BBXKjg8niKU6N7fdifJUDxIzxuEjd8KzunQRlJCJx%2BTMKwGHdMKfv7MIGOqUBQYJtEueoFqafWR3kk8r5zLnxFcFkfeulQ%2FXyUCFyOM9h4ZyS1HhC%2FmuSc8sgBYPF2hHJY35rF3CFR8m%2BRvj3ddEoCNAnMIsIekoOGPrqwpRwTBw7AM6d25avabh5tZJQ%2FAildjeBl3f6n%2FCFlDgS2KmR15GhEXYoY1sDzukyIR2B6Vlozhjp6Jdmhj5YPy4Ub4X2e3yN8OyY0rLcIi6D3fJ6%2FZLk&X-Amz-Signature=57ff9f225afe9e26cc3b8b421747c2266ec89f6619f0a1a600ea5a15896063d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77BH2SI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCRtJQ4eVzbhEYEqZosZXCS5qBDrtAJoONflalE8RPPQgIgc66B4YbGe7xfR7QJJUG1P%2F%2F3gpcxhKIuL3tlQ6aedokq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBOaYm%2FL00rCWlnG5SrcA%2F06RIYEQYabgo%2Fevhg9AmMwa%2BpOC51XuduIoKcmB1HI%2F4WFX2dxYOJ3otTFvnJkbQ7bgcapSCUm8C8j0lp%2B3yUgdml2ObUo9kipSg97PCgPJ4DzgRtkJA3Fgw%2BZ%2BbE%2F%2BpkvhGNyF1R0dmsiQPdyFt5fT4q4wpJfFnAvlf12fTXdgyQLs%2BbAz8OeqULRPhEJ37kkVKaQXRKHWHlZOfc9hKTYkzKRW6%2Fr6RPWL3EuMUExOjZBlJJYe73xVfOQh7%2B7sEBr6TyZOhYja36TReACELOWTbKi96oqqRj6uGvfiSbmjAnsvFItPt3C9kn%2B55j%2BS8NTm%2Fq8HIf%2BJzRQ4EeTWGVZ%2BRXIvz%2B1DaKNR6DtV4FDfJPabYj4V2Hl48q1MZfojFNm49K4BN%2FJk1E6eaXvM5YHQeg1QLR8YcAOflKYEyifC4%2FDRJgbnrCzYtfqq2nDeYJrx3lz2mWvS7Jmvrw5jIY1E2OMlP47Lwp5o6GBhASyPr4j0z4PSlndHwDplGzWXur17M%2BtANuEza7o3tEKhcFK9TuJHExJdJ%2FU1UgBslVPS4J2aSmKGntku0sMnAb%2BvJGGX%2BlvWUi%2BBXKjg8niKU6N7fdifJUDxIzxuEjd8KzunQRlJCJx%2BTMKwGHdMKfv7MIGOqUBQYJtEueoFqafWR3kk8r5zLnxFcFkfeulQ%2FXyUCFyOM9h4ZyS1HhC%2FmuSc8sgBYPF2hHJY35rF3CFR8m%2BRvj3ddEoCNAnMIsIekoOGPrqwpRwTBw7AM6d25avabh5tZJQ%2FAildjeBl3f6n%2FCFlDgS2KmR15GhEXYoY1sDzukyIR2B6Vlozhjp6Jdmhj5YPy4Ub4X2e3yN8OyY0rLcIi6D3fJ6%2FZLk&X-Amz-Signature=923e61b508b611c833038fa6905dff6ca7e2bc1ff63f0ac3c6bc30f0878970a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77BH2SI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCRtJQ4eVzbhEYEqZosZXCS5qBDrtAJoONflalE8RPPQgIgc66B4YbGe7xfR7QJJUG1P%2F%2F3gpcxhKIuL3tlQ6aedokq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBOaYm%2FL00rCWlnG5SrcA%2F06RIYEQYabgo%2Fevhg9AmMwa%2BpOC51XuduIoKcmB1HI%2F4WFX2dxYOJ3otTFvnJkbQ7bgcapSCUm8C8j0lp%2B3yUgdml2ObUo9kipSg97PCgPJ4DzgRtkJA3Fgw%2BZ%2BbE%2F%2BpkvhGNyF1R0dmsiQPdyFt5fT4q4wpJfFnAvlf12fTXdgyQLs%2BbAz8OeqULRPhEJ37kkVKaQXRKHWHlZOfc9hKTYkzKRW6%2Fr6RPWL3EuMUExOjZBlJJYe73xVfOQh7%2B7sEBr6TyZOhYja36TReACELOWTbKi96oqqRj6uGvfiSbmjAnsvFItPt3C9kn%2B55j%2BS8NTm%2Fq8HIf%2BJzRQ4EeTWGVZ%2BRXIvz%2B1DaKNR6DtV4FDfJPabYj4V2Hl48q1MZfojFNm49K4BN%2FJk1E6eaXvM5YHQeg1QLR8YcAOflKYEyifC4%2FDRJgbnrCzYtfqq2nDeYJrx3lz2mWvS7Jmvrw5jIY1E2OMlP47Lwp5o6GBhASyPr4j0z4PSlndHwDplGzWXur17M%2BtANuEza7o3tEKhcFK9TuJHExJdJ%2FU1UgBslVPS4J2aSmKGntku0sMnAb%2BvJGGX%2BlvWUi%2BBXKjg8niKU6N7fdifJUDxIzxuEjd8KzunQRlJCJx%2BTMKwGHdMKfv7MIGOqUBQYJtEueoFqafWR3kk8r5zLnxFcFkfeulQ%2FXyUCFyOM9h4ZyS1HhC%2FmuSc8sgBYPF2hHJY35rF3CFR8m%2BRvj3ddEoCNAnMIsIekoOGPrqwpRwTBw7AM6d25avabh5tZJQ%2FAildjeBl3f6n%2FCFlDgS2KmR15GhEXYoY1sDzukyIR2B6Vlozhjp6Jdmhj5YPy4Ub4X2e3yN8OyY0rLcIi6D3fJ6%2FZLk&X-Amz-Signature=9ad6e71ddc8b8f0cfc202ed412d1443e032c897f8ac1f5290721ff1e929a2c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77BH2SI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCRtJQ4eVzbhEYEqZosZXCS5qBDrtAJoONflalE8RPPQgIgc66B4YbGe7xfR7QJJUG1P%2F%2F3gpcxhKIuL3tlQ6aedokq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBOaYm%2FL00rCWlnG5SrcA%2F06RIYEQYabgo%2Fevhg9AmMwa%2BpOC51XuduIoKcmB1HI%2F4WFX2dxYOJ3otTFvnJkbQ7bgcapSCUm8C8j0lp%2B3yUgdml2ObUo9kipSg97PCgPJ4DzgRtkJA3Fgw%2BZ%2BbE%2F%2BpkvhGNyF1R0dmsiQPdyFt5fT4q4wpJfFnAvlf12fTXdgyQLs%2BbAz8OeqULRPhEJ37kkVKaQXRKHWHlZOfc9hKTYkzKRW6%2Fr6RPWL3EuMUExOjZBlJJYe73xVfOQh7%2B7sEBr6TyZOhYja36TReACELOWTbKi96oqqRj6uGvfiSbmjAnsvFItPt3C9kn%2B55j%2BS8NTm%2Fq8HIf%2BJzRQ4EeTWGVZ%2BRXIvz%2B1DaKNR6DtV4FDfJPabYj4V2Hl48q1MZfojFNm49K4BN%2FJk1E6eaXvM5YHQeg1QLR8YcAOflKYEyifC4%2FDRJgbnrCzYtfqq2nDeYJrx3lz2mWvS7Jmvrw5jIY1E2OMlP47Lwp5o6GBhASyPr4j0z4PSlndHwDplGzWXur17M%2BtANuEza7o3tEKhcFK9TuJHExJdJ%2FU1UgBslVPS4J2aSmKGntku0sMnAb%2BvJGGX%2BlvWUi%2BBXKjg8niKU6N7fdifJUDxIzxuEjd8KzunQRlJCJx%2BTMKwGHdMKfv7MIGOqUBQYJtEueoFqafWR3kk8r5zLnxFcFkfeulQ%2FXyUCFyOM9h4ZyS1HhC%2FmuSc8sgBYPF2hHJY35rF3CFR8m%2BRvj3ddEoCNAnMIsIekoOGPrqwpRwTBw7AM6d25avabh5tZJQ%2FAildjeBl3f6n%2FCFlDgS2KmR15GhEXYoY1sDzukyIR2B6Vlozhjp6Jdmhj5YPy4Ub4X2e3yN8OyY0rLcIi6D3fJ6%2FZLk&X-Amz-Signature=c5f91ab43ac635aa6f2ef455807f431701ef3bc10b5d89c2b0801a0a2b77bfd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77BH2SI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCRtJQ4eVzbhEYEqZosZXCS5qBDrtAJoONflalE8RPPQgIgc66B4YbGe7xfR7QJJUG1P%2F%2F3gpcxhKIuL3tlQ6aedokq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBOaYm%2FL00rCWlnG5SrcA%2F06RIYEQYabgo%2Fevhg9AmMwa%2BpOC51XuduIoKcmB1HI%2F4WFX2dxYOJ3otTFvnJkbQ7bgcapSCUm8C8j0lp%2B3yUgdml2ObUo9kipSg97PCgPJ4DzgRtkJA3Fgw%2BZ%2BbE%2F%2BpkvhGNyF1R0dmsiQPdyFt5fT4q4wpJfFnAvlf12fTXdgyQLs%2BbAz8OeqULRPhEJ37kkVKaQXRKHWHlZOfc9hKTYkzKRW6%2Fr6RPWL3EuMUExOjZBlJJYe73xVfOQh7%2B7sEBr6TyZOhYja36TReACELOWTbKi96oqqRj6uGvfiSbmjAnsvFItPt3C9kn%2B55j%2BS8NTm%2Fq8HIf%2BJzRQ4EeTWGVZ%2BRXIvz%2B1DaKNR6DtV4FDfJPabYj4V2Hl48q1MZfojFNm49K4BN%2FJk1E6eaXvM5YHQeg1QLR8YcAOflKYEyifC4%2FDRJgbnrCzYtfqq2nDeYJrx3lz2mWvS7Jmvrw5jIY1E2OMlP47Lwp5o6GBhASyPr4j0z4PSlndHwDplGzWXur17M%2BtANuEza7o3tEKhcFK9TuJHExJdJ%2FU1UgBslVPS4J2aSmKGntku0sMnAb%2BvJGGX%2BlvWUi%2BBXKjg8niKU6N7fdifJUDxIzxuEjd8KzunQRlJCJx%2BTMKwGHdMKfv7MIGOqUBQYJtEueoFqafWR3kk8r5zLnxFcFkfeulQ%2FXyUCFyOM9h4ZyS1HhC%2FmuSc8sgBYPF2hHJY35rF3CFR8m%2BRvj3ddEoCNAnMIsIekoOGPrqwpRwTBw7AM6d25avabh5tZJQ%2FAildjeBl3f6n%2FCFlDgS2KmR15GhEXYoY1sDzukyIR2B6Vlozhjp6Jdmhj5YPy4Ub4X2e3yN8OyY0rLcIi6D3fJ6%2FZLk&X-Amz-Signature=0c390a0ef2cb37c578ffb83f788fb88609d96d23d1e56373b5fd75a1d9e1b909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77BH2SI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCRtJQ4eVzbhEYEqZosZXCS5qBDrtAJoONflalE8RPPQgIgc66B4YbGe7xfR7QJJUG1P%2F%2F3gpcxhKIuL3tlQ6aedokq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBOaYm%2FL00rCWlnG5SrcA%2F06RIYEQYabgo%2Fevhg9AmMwa%2BpOC51XuduIoKcmB1HI%2F4WFX2dxYOJ3otTFvnJkbQ7bgcapSCUm8C8j0lp%2B3yUgdml2ObUo9kipSg97PCgPJ4DzgRtkJA3Fgw%2BZ%2BbE%2F%2BpkvhGNyF1R0dmsiQPdyFt5fT4q4wpJfFnAvlf12fTXdgyQLs%2BbAz8OeqULRPhEJ37kkVKaQXRKHWHlZOfc9hKTYkzKRW6%2Fr6RPWL3EuMUExOjZBlJJYe73xVfOQh7%2B7sEBr6TyZOhYja36TReACELOWTbKi96oqqRj6uGvfiSbmjAnsvFItPt3C9kn%2B55j%2BS8NTm%2Fq8HIf%2BJzRQ4EeTWGVZ%2BRXIvz%2B1DaKNR6DtV4FDfJPabYj4V2Hl48q1MZfojFNm49K4BN%2FJk1E6eaXvM5YHQeg1QLR8YcAOflKYEyifC4%2FDRJgbnrCzYtfqq2nDeYJrx3lz2mWvS7Jmvrw5jIY1E2OMlP47Lwp5o6GBhASyPr4j0z4PSlndHwDplGzWXur17M%2BtANuEza7o3tEKhcFK9TuJHExJdJ%2FU1UgBslVPS4J2aSmKGntku0sMnAb%2BvJGGX%2BlvWUi%2BBXKjg8niKU6N7fdifJUDxIzxuEjd8KzunQRlJCJx%2BTMKwGHdMKfv7MIGOqUBQYJtEueoFqafWR3kk8r5zLnxFcFkfeulQ%2FXyUCFyOM9h4ZyS1HhC%2FmuSc8sgBYPF2hHJY35rF3CFR8m%2BRvj3ddEoCNAnMIsIekoOGPrqwpRwTBw7AM6d25avabh5tZJQ%2FAildjeBl3f6n%2FCFlDgS2KmR15GhEXYoY1sDzukyIR2B6Vlozhjp6Jdmhj5YPy4Ub4X2e3yN8OyY0rLcIi6D3fJ6%2FZLk&X-Amz-Signature=5ced772023331b3f32a43cbae9209f16c8593cc39326589a726317b92982e7b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
