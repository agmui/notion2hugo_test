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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFR5ONHW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRURoaNAScV6qCyvPlaCQnTl41%2B21oNJX9f%2BUKyC9CwAiBJoGZ%2BWLZwnm%2BNWvDy95UH80MxhhlPP%2FmmLIWhLoDOwir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMhh2OcwrMfNb%2BlLqhKtwDtA5kswLYgRlmGRyUifSonak%2F%2BDXik4%2Fmfm3FfXP81H285XvnXig%2BKVtB%2BU8YtS2HJLDnjBUDQXKGHn%2BS%2F7%2FldnrJ%2B4cUiQ%2FFR9K2Bl9GlS5bo%2F%2FGz13LEAS6c2REMqwcVjvE33RRiy07gw7TL9Rh0u97qWJokhoIz5n%2BoOHTGjyhPzmquCyP99Up3%2B1WS48zycakUe%2F37cDKSV5QXzGFztDH0NJoNRR5TkIOOzPRqW991fRinp7IaNRG%2FV3%2F03cKw0%2BpTZEWCtFNa7sqzPShFzaUEcggQaxUC8CNlHeF8uNm3L%2F1lFCkFyevv8RaFwTseFiny4yiVczXQN7e2ZeeYzcz%2BiMMapuW2E8YjeaENL4tT2cwxYGtzKqAOV2A5asqoUsxCGcKQg1ZitzONIP0bTUcqGPNdGjjEZfmzyEqmF7ddCpRWAg%2F6I1bE7K4jpy7tXx610a0S7GPsezZPH5zGselERZBPFNvKEiwz%2B%2FEda%2Bg0J7GM6VqsSgYNWjMIRUX5csqyml2LYUIXxcFOltwH4NSWJGw5zDJ0DLgP9z3MEURdyXbFK3LrbnSIKW6w175LUAxlkadfyLUrYxfPuLV1LEYxE9fA4UK2Rzd5UKWyQZtzgbA64sN5Sg80K0wu%2FefwQY6pgGJ3zuQ7GcThy047PVRhe0XNs0Gc8Jp3WsEilv79Tlu0LoOn2%2ByDKOoTk8RSefFapyPwLFIejoMV9tir8OiQ1plSEKHqGWExbwJAdaMoFQ6TJ6bYiT1R7CkVfVePyi3WcYRKcsRJf8xbGerjhurrZMlYUqVt0pw4mmNDGzAEz7k1pJdkDDuCk5ID2FzqQ1TqWFa9L3HUWr%2FVmof5xnpQnMhr6UqmuAD&X-Amz-Signature=1ecec90e18576175a1712ec61f15f2b3fe877fba93885060f381691fe9492d71&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFR5ONHW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRURoaNAScV6qCyvPlaCQnTl41%2B21oNJX9f%2BUKyC9CwAiBJoGZ%2BWLZwnm%2BNWvDy95UH80MxhhlPP%2FmmLIWhLoDOwir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMhh2OcwrMfNb%2BlLqhKtwDtA5kswLYgRlmGRyUifSonak%2F%2BDXik4%2Fmfm3FfXP81H285XvnXig%2BKVtB%2BU8YtS2HJLDnjBUDQXKGHn%2BS%2F7%2FldnrJ%2B4cUiQ%2FFR9K2Bl9GlS5bo%2F%2FGz13LEAS6c2REMqwcVjvE33RRiy07gw7TL9Rh0u97qWJokhoIz5n%2BoOHTGjyhPzmquCyP99Up3%2B1WS48zycakUe%2F37cDKSV5QXzGFztDH0NJoNRR5TkIOOzPRqW991fRinp7IaNRG%2FV3%2F03cKw0%2BpTZEWCtFNa7sqzPShFzaUEcggQaxUC8CNlHeF8uNm3L%2F1lFCkFyevv8RaFwTseFiny4yiVczXQN7e2ZeeYzcz%2BiMMapuW2E8YjeaENL4tT2cwxYGtzKqAOV2A5asqoUsxCGcKQg1ZitzONIP0bTUcqGPNdGjjEZfmzyEqmF7ddCpRWAg%2F6I1bE7K4jpy7tXx610a0S7GPsezZPH5zGselERZBPFNvKEiwz%2B%2FEda%2Bg0J7GM6VqsSgYNWjMIRUX5csqyml2LYUIXxcFOltwH4NSWJGw5zDJ0DLgP9z3MEURdyXbFK3LrbnSIKW6w175LUAxlkadfyLUrYxfPuLV1LEYxE9fA4UK2Rzd5UKWyQZtzgbA64sN5Sg80K0wu%2FefwQY6pgGJ3zuQ7GcThy047PVRhe0XNs0Gc8Jp3WsEilv79Tlu0LoOn2%2ByDKOoTk8RSefFapyPwLFIejoMV9tir8OiQ1plSEKHqGWExbwJAdaMoFQ6TJ6bYiT1R7CkVfVePyi3WcYRKcsRJf8xbGerjhurrZMlYUqVt0pw4mmNDGzAEz7k1pJdkDDuCk5ID2FzqQ1TqWFa9L3HUWr%2FVmof5xnpQnMhr6UqmuAD&X-Amz-Signature=42ec85fc62e938edc5d52a8bbc4c8e30dab01f291c502f7ff5ac4e76e8fb2b81&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFR5ONHW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRURoaNAScV6qCyvPlaCQnTl41%2B21oNJX9f%2BUKyC9CwAiBJoGZ%2BWLZwnm%2BNWvDy95UH80MxhhlPP%2FmmLIWhLoDOwir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMhh2OcwrMfNb%2BlLqhKtwDtA5kswLYgRlmGRyUifSonak%2F%2BDXik4%2Fmfm3FfXP81H285XvnXig%2BKVtB%2BU8YtS2HJLDnjBUDQXKGHn%2BS%2F7%2FldnrJ%2B4cUiQ%2FFR9K2Bl9GlS5bo%2F%2FGz13LEAS6c2REMqwcVjvE33RRiy07gw7TL9Rh0u97qWJokhoIz5n%2BoOHTGjyhPzmquCyP99Up3%2B1WS48zycakUe%2F37cDKSV5QXzGFztDH0NJoNRR5TkIOOzPRqW991fRinp7IaNRG%2FV3%2F03cKw0%2BpTZEWCtFNa7sqzPShFzaUEcggQaxUC8CNlHeF8uNm3L%2F1lFCkFyevv8RaFwTseFiny4yiVczXQN7e2ZeeYzcz%2BiMMapuW2E8YjeaENL4tT2cwxYGtzKqAOV2A5asqoUsxCGcKQg1ZitzONIP0bTUcqGPNdGjjEZfmzyEqmF7ddCpRWAg%2F6I1bE7K4jpy7tXx610a0S7GPsezZPH5zGselERZBPFNvKEiwz%2B%2FEda%2Bg0J7GM6VqsSgYNWjMIRUX5csqyml2LYUIXxcFOltwH4NSWJGw5zDJ0DLgP9z3MEURdyXbFK3LrbnSIKW6w175LUAxlkadfyLUrYxfPuLV1LEYxE9fA4UK2Rzd5UKWyQZtzgbA64sN5Sg80K0wu%2FefwQY6pgGJ3zuQ7GcThy047PVRhe0XNs0Gc8Jp3WsEilv79Tlu0LoOn2%2ByDKOoTk8RSefFapyPwLFIejoMV9tir8OiQ1plSEKHqGWExbwJAdaMoFQ6TJ6bYiT1R7CkVfVePyi3WcYRKcsRJf8xbGerjhurrZMlYUqVt0pw4mmNDGzAEz7k1pJdkDDuCk5ID2FzqQ1TqWFa9L3HUWr%2FVmof5xnpQnMhr6UqmuAD&X-Amz-Signature=89233033a4b36d4b90ed640ca508b17231f7c41eb6e15757a1de88206c00f097&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFR5ONHW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRURoaNAScV6qCyvPlaCQnTl41%2B21oNJX9f%2BUKyC9CwAiBJoGZ%2BWLZwnm%2BNWvDy95UH80MxhhlPP%2FmmLIWhLoDOwir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMhh2OcwrMfNb%2BlLqhKtwDtA5kswLYgRlmGRyUifSonak%2F%2BDXik4%2Fmfm3FfXP81H285XvnXig%2BKVtB%2BU8YtS2HJLDnjBUDQXKGHn%2BS%2F7%2FldnrJ%2B4cUiQ%2FFR9K2Bl9GlS5bo%2F%2FGz13LEAS6c2REMqwcVjvE33RRiy07gw7TL9Rh0u97qWJokhoIz5n%2BoOHTGjyhPzmquCyP99Up3%2B1WS48zycakUe%2F37cDKSV5QXzGFztDH0NJoNRR5TkIOOzPRqW991fRinp7IaNRG%2FV3%2F03cKw0%2BpTZEWCtFNa7sqzPShFzaUEcggQaxUC8CNlHeF8uNm3L%2F1lFCkFyevv8RaFwTseFiny4yiVczXQN7e2ZeeYzcz%2BiMMapuW2E8YjeaENL4tT2cwxYGtzKqAOV2A5asqoUsxCGcKQg1ZitzONIP0bTUcqGPNdGjjEZfmzyEqmF7ddCpRWAg%2F6I1bE7K4jpy7tXx610a0S7GPsezZPH5zGselERZBPFNvKEiwz%2B%2FEda%2Bg0J7GM6VqsSgYNWjMIRUX5csqyml2LYUIXxcFOltwH4NSWJGw5zDJ0DLgP9z3MEURdyXbFK3LrbnSIKW6w175LUAxlkadfyLUrYxfPuLV1LEYxE9fA4UK2Rzd5UKWyQZtzgbA64sN5Sg80K0wu%2FefwQY6pgGJ3zuQ7GcThy047PVRhe0XNs0Gc8Jp3WsEilv79Tlu0LoOn2%2ByDKOoTk8RSefFapyPwLFIejoMV9tir8OiQ1plSEKHqGWExbwJAdaMoFQ6TJ6bYiT1R7CkVfVePyi3WcYRKcsRJf8xbGerjhurrZMlYUqVt0pw4mmNDGzAEz7k1pJdkDDuCk5ID2FzqQ1TqWFa9L3HUWr%2FVmof5xnpQnMhr6UqmuAD&X-Amz-Signature=61350519df3c553735c05f1671f078803f49e4b9b407e4916c39d7947fb8fe68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFR5ONHW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRURoaNAScV6qCyvPlaCQnTl41%2B21oNJX9f%2BUKyC9CwAiBJoGZ%2BWLZwnm%2BNWvDy95UH80MxhhlPP%2FmmLIWhLoDOwir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMhh2OcwrMfNb%2BlLqhKtwDtA5kswLYgRlmGRyUifSonak%2F%2BDXik4%2Fmfm3FfXP81H285XvnXig%2BKVtB%2BU8YtS2HJLDnjBUDQXKGHn%2BS%2F7%2FldnrJ%2B4cUiQ%2FFR9K2Bl9GlS5bo%2F%2FGz13LEAS6c2REMqwcVjvE33RRiy07gw7TL9Rh0u97qWJokhoIz5n%2BoOHTGjyhPzmquCyP99Up3%2B1WS48zycakUe%2F37cDKSV5QXzGFztDH0NJoNRR5TkIOOzPRqW991fRinp7IaNRG%2FV3%2F03cKw0%2BpTZEWCtFNa7sqzPShFzaUEcggQaxUC8CNlHeF8uNm3L%2F1lFCkFyevv8RaFwTseFiny4yiVczXQN7e2ZeeYzcz%2BiMMapuW2E8YjeaENL4tT2cwxYGtzKqAOV2A5asqoUsxCGcKQg1ZitzONIP0bTUcqGPNdGjjEZfmzyEqmF7ddCpRWAg%2F6I1bE7K4jpy7tXx610a0S7GPsezZPH5zGselERZBPFNvKEiwz%2B%2FEda%2Bg0J7GM6VqsSgYNWjMIRUX5csqyml2LYUIXxcFOltwH4NSWJGw5zDJ0DLgP9z3MEURdyXbFK3LrbnSIKW6w175LUAxlkadfyLUrYxfPuLV1LEYxE9fA4UK2Rzd5UKWyQZtzgbA64sN5Sg80K0wu%2FefwQY6pgGJ3zuQ7GcThy047PVRhe0XNs0Gc8Jp3WsEilv79Tlu0LoOn2%2ByDKOoTk8RSefFapyPwLFIejoMV9tir8OiQ1plSEKHqGWExbwJAdaMoFQ6TJ6bYiT1R7CkVfVePyi3WcYRKcsRJf8xbGerjhurrZMlYUqVt0pw4mmNDGzAEz7k1pJdkDDuCk5ID2FzqQ1TqWFa9L3HUWr%2FVmof5xnpQnMhr6UqmuAD&X-Amz-Signature=626498a1268cfbb648712eeb580b0deba5fcd4855f43686652435bb49d814d90&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFR5ONHW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRURoaNAScV6qCyvPlaCQnTl41%2B21oNJX9f%2BUKyC9CwAiBJoGZ%2BWLZwnm%2BNWvDy95UH80MxhhlPP%2FmmLIWhLoDOwir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMhh2OcwrMfNb%2BlLqhKtwDtA5kswLYgRlmGRyUifSonak%2F%2BDXik4%2Fmfm3FfXP81H285XvnXig%2BKVtB%2BU8YtS2HJLDnjBUDQXKGHn%2BS%2F7%2FldnrJ%2B4cUiQ%2FFR9K2Bl9GlS5bo%2F%2FGz13LEAS6c2REMqwcVjvE33RRiy07gw7TL9Rh0u97qWJokhoIz5n%2BoOHTGjyhPzmquCyP99Up3%2B1WS48zycakUe%2F37cDKSV5QXzGFztDH0NJoNRR5TkIOOzPRqW991fRinp7IaNRG%2FV3%2F03cKw0%2BpTZEWCtFNa7sqzPShFzaUEcggQaxUC8CNlHeF8uNm3L%2F1lFCkFyevv8RaFwTseFiny4yiVczXQN7e2ZeeYzcz%2BiMMapuW2E8YjeaENL4tT2cwxYGtzKqAOV2A5asqoUsxCGcKQg1ZitzONIP0bTUcqGPNdGjjEZfmzyEqmF7ddCpRWAg%2F6I1bE7K4jpy7tXx610a0S7GPsezZPH5zGselERZBPFNvKEiwz%2B%2FEda%2Bg0J7GM6VqsSgYNWjMIRUX5csqyml2LYUIXxcFOltwH4NSWJGw5zDJ0DLgP9z3MEURdyXbFK3LrbnSIKW6w175LUAxlkadfyLUrYxfPuLV1LEYxE9fA4UK2Rzd5UKWyQZtzgbA64sN5Sg80K0wu%2FefwQY6pgGJ3zuQ7GcThy047PVRhe0XNs0Gc8Jp3WsEilv79Tlu0LoOn2%2ByDKOoTk8RSefFapyPwLFIejoMV9tir8OiQ1plSEKHqGWExbwJAdaMoFQ6TJ6bYiT1R7CkVfVePyi3WcYRKcsRJf8xbGerjhurrZMlYUqVt0pw4mmNDGzAEz7k1pJdkDDuCk5ID2FzqQ1TqWFa9L3HUWr%2FVmof5xnpQnMhr6UqmuAD&X-Amz-Signature=1fb315282da0bb2fd3b510d9083e7b7d3dfde08202b7d9b26ff9fdac345cd3e2&X-Amz-SignedHeaders=host&x-id=GetObject)
