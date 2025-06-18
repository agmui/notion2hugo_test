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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JPLCAO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQi40CeTQI9vaTTH4iaRdUs%2B7JXOhqBLTV%2BJE3Vluk4AiARNqjjutQZ7VSebTaV3zti9eaT42lbEXMlvKvy8WIuhyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMv2V9HO0MZrE2sSKtwDhHNYLWDGo%2B1Z2664hv7gzirJRH1nVrHG%2FYq6YvqbxzKWGDCvJhqGDy0I%2Fl22Gl7XqDeRCAAAKlg2I%2FUeg6aDDdajqWNu8daVRXx5cAFhy299UpjBbUZsmKF4GFZITHYdZlE8R0IU%2FB9aK7A5o7MSV1yV9KJytp82KEckRWZfCWi563QFLcWf4zG1UK1VC6YBBPwe6RZBMfg7KolEqSj6E6pSjVOsKoxvSfTzMxqEu%2FjdcPLIx3lBrNkQykcbzkbYXF6jczR1Q%2BoldiLzoMMd5zMW96MFxhymK5E9oYw%2F5JWqT3v83VLNLi%2B2UsWM1fRRSvTtkEAgWG67slfN8%2Bfv3i0NtGIt9BHAs0G0tkbG4uLY1OwotnM1kJ0l5lSWAPJn3tc5MjxtCK6sgEorTyDV5Im84P%2FZ%2F0dNHnDZ6G5kiXNDRHPaBvMCeMGCM5kJo3iyynyezxeANv1QU7r%2FSVYKlUexh0OHYlgGAYaHRSbUylhlAAUjj0jXepzwr2X8QWwEhYmqzVyib4Kw8J771jtLSApxxKkP7TXevzrqdiqwc%2BXC6BMhPX0BX6OKGhnUtvi4VNrc7w5x9q%2B6%2F2bE%2FQuEVPuT27FZhtPJngM0btDOZzGhiK34rB6t30ET0R4w4vPKwgY6pgHivH0l9xjZkfuVW063Mtouy7k1wuy0DjnnZ24hBDrb9FH91gzVx96Da0ZjsN9RiSzRrvEup1oERAl0GuW6UidaV3nBAhzW76eLlZmQXrkzt6XfGLoRkQ3OTQBq5GNpFLgdwwfcVZSoOTWYYV1vCnbfxBKNgA98evq8doOueBIN0rMBhkdpyRTrER037skHMBBrfMRaOV1d6v%2BYBcjglr%2Bi3neRDK1Y&X-Amz-Signature=d3338b080fff4d477cbe1fdb98ffe44f8b96ce403e61621b642cdf6ce13801be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JPLCAO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQi40CeTQI9vaTTH4iaRdUs%2B7JXOhqBLTV%2BJE3Vluk4AiARNqjjutQZ7VSebTaV3zti9eaT42lbEXMlvKvy8WIuhyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMv2V9HO0MZrE2sSKtwDhHNYLWDGo%2B1Z2664hv7gzirJRH1nVrHG%2FYq6YvqbxzKWGDCvJhqGDy0I%2Fl22Gl7XqDeRCAAAKlg2I%2FUeg6aDDdajqWNu8daVRXx5cAFhy299UpjBbUZsmKF4GFZITHYdZlE8R0IU%2FB9aK7A5o7MSV1yV9KJytp82KEckRWZfCWi563QFLcWf4zG1UK1VC6YBBPwe6RZBMfg7KolEqSj6E6pSjVOsKoxvSfTzMxqEu%2FjdcPLIx3lBrNkQykcbzkbYXF6jczR1Q%2BoldiLzoMMd5zMW96MFxhymK5E9oYw%2F5JWqT3v83VLNLi%2B2UsWM1fRRSvTtkEAgWG67slfN8%2Bfv3i0NtGIt9BHAs0G0tkbG4uLY1OwotnM1kJ0l5lSWAPJn3tc5MjxtCK6sgEorTyDV5Im84P%2FZ%2F0dNHnDZ6G5kiXNDRHPaBvMCeMGCM5kJo3iyynyezxeANv1QU7r%2FSVYKlUexh0OHYlgGAYaHRSbUylhlAAUjj0jXepzwr2X8QWwEhYmqzVyib4Kw8J771jtLSApxxKkP7TXevzrqdiqwc%2BXC6BMhPX0BX6OKGhnUtvi4VNrc7w5x9q%2B6%2F2bE%2FQuEVPuT27FZhtPJngM0btDOZzGhiK34rB6t30ET0R4w4vPKwgY6pgHivH0l9xjZkfuVW063Mtouy7k1wuy0DjnnZ24hBDrb9FH91gzVx96Da0ZjsN9RiSzRrvEup1oERAl0GuW6UidaV3nBAhzW76eLlZmQXrkzt6XfGLoRkQ3OTQBq5GNpFLgdwwfcVZSoOTWYYV1vCnbfxBKNgA98evq8doOueBIN0rMBhkdpyRTrER037skHMBBrfMRaOV1d6v%2BYBcjglr%2Bi3neRDK1Y&X-Amz-Signature=65fa7366231d4e83397063162e720cb9463711deac8fb666647fcdb4675bdc91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JPLCAO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQi40CeTQI9vaTTH4iaRdUs%2B7JXOhqBLTV%2BJE3Vluk4AiARNqjjutQZ7VSebTaV3zti9eaT42lbEXMlvKvy8WIuhyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMv2V9HO0MZrE2sSKtwDhHNYLWDGo%2B1Z2664hv7gzirJRH1nVrHG%2FYq6YvqbxzKWGDCvJhqGDy0I%2Fl22Gl7XqDeRCAAAKlg2I%2FUeg6aDDdajqWNu8daVRXx5cAFhy299UpjBbUZsmKF4GFZITHYdZlE8R0IU%2FB9aK7A5o7MSV1yV9KJytp82KEckRWZfCWi563QFLcWf4zG1UK1VC6YBBPwe6RZBMfg7KolEqSj6E6pSjVOsKoxvSfTzMxqEu%2FjdcPLIx3lBrNkQykcbzkbYXF6jczR1Q%2BoldiLzoMMd5zMW96MFxhymK5E9oYw%2F5JWqT3v83VLNLi%2B2UsWM1fRRSvTtkEAgWG67slfN8%2Bfv3i0NtGIt9BHAs0G0tkbG4uLY1OwotnM1kJ0l5lSWAPJn3tc5MjxtCK6sgEorTyDV5Im84P%2FZ%2F0dNHnDZ6G5kiXNDRHPaBvMCeMGCM5kJo3iyynyezxeANv1QU7r%2FSVYKlUexh0OHYlgGAYaHRSbUylhlAAUjj0jXepzwr2X8QWwEhYmqzVyib4Kw8J771jtLSApxxKkP7TXevzrqdiqwc%2BXC6BMhPX0BX6OKGhnUtvi4VNrc7w5x9q%2B6%2F2bE%2FQuEVPuT27FZhtPJngM0btDOZzGhiK34rB6t30ET0R4w4vPKwgY6pgHivH0l9xjZkfuVW063Mtouy7k1wuy0DjnnZ24hBDrb9FH91gzVx96Da0ZjsN9RiSzRrvEup1oERAl0GuW6UidaV3nBAhzW76eLlZmQXrkzt6XfGLoRkQ3OTQBq5GNpFLgdwwfcVZSoOTWYYV1vCnbfxBKNgA98evq8doOueBIN0rMBhkdpyRTrER037skHMBBrfMRaOV1d6v%2BYBcjglr%2Bi3neRDK1Y&X-Amz-Signature=3e64c076cc209e50ebfcd30a4257df7f97a26226f80ea0e79ad2068d719d859e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JPLCAO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQi40CeTQI9vaTTH4iaRdUs%2B7JXOhqBLTV%2BJE3Vluk4AiARNqjjutQZ7VSebTaV3zti9eaT42lbEXMlvKvy8WIuhyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMv2V9HO0MZrE2sSKtwDhHNYLWDGo%2B1Z2664hv7gzirJRH1nVrHG%2FYq6YvqbxzKWGDCvJhqGDy0I%2Fl22Gl7XqDeRCAAAKlg2I%2FUeg6aDDdajqWNu8daVRXx5cAFhy299UpjBbUZsmKF4GFZITHYdZlE8R0IU%2FB9aK7A5o7MSV1yV9KJytp82KEckRWZfCWi563QFLcWf4zG1UK1VC6YBBPwe6RZBMfg7KolEqSj6E6pSjVOsKoxvSfTzMxqEu%2FjdcPLIx3lBrNkQykcbzkbYXF6jczR1Q%2BoldiLzoMMd5zMW96MFxhymK5E9oYw%2F5JWqT3v83VLNLi%2B2UsWM1fRRSvTtkEAgWG67slfN8%2Bfv3i0NtGIt9BHAs0G0tkbG4uLY1OwotnM1kJ0l5lSWAPJn3tc5MjxtCK6sgEorTyDV5Im84P%2FZ%2F0dNHnDZ6G5kiXNDRHPaBvMCeMGCM5kJo3iyynyezxeANv1QU7r%2FSVYKlUexh0OHYlgGAYaHRSbUylhlAAUjj0jXepzwr2X8QWwEhYmqzVyib4Kw8J771jtLSApxxKkP7TXevzrqdiqwc%2BXC6BMhPX0BX6OKGhnUtvi4VNrc7w5x9q%2B6%2F2bE%2FQuEVPuT27FZhtPJngM0btDOZzGhiK34rB6t30ET0R4w4vPKwgY6pgHivH0l9xjZkfuVW063Mtouy7k1wuy0DjnnZ24hBDrb9FH91gzVx96Da0ZjsN9RiSzRrvEup1oERAl0GuW6UidaV3nBAhzW76eLlZmQXrkzt6XfGLoRkQ3OTQBq5GNpFLgdwwfcVZSoOTWYYV1vCnbfxBKNgA98evq8doOueBIN0rMBhkdpyRTrER037skHMBBrfMRaOV1d6v%2BYBcjglr%2Bi3neRDK1Y&X-Amz-Signature=167e1cd1ca684e989993009d6954d9096979277bf31101fae3def0da497f8c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JPLCAO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQi40CeTQI9vaTTH4iaRdUs%2B7JXOhqBLTV%2BJE3Vluk4AiARNqjjutQZ7VSebTaV3zti9eaT42lbEXMlvKvy8WIuhyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMv2V9HO0MZrE2sSKtwDhHNYLWDGo%2B1Z2664hv7gzirJRH1nVrHG%2FYq6YvqbxzKWGDCvJhqGDy0I%2Fl22Gl7XqDeRCAAAKlg2I%2FUeg6aDDdajqWNu8daVRXx5cAFhy299UpjBbUZsmKF4GFZITHYdZlE8R0IU%2FB9aK7A5o7MSV1yV9KJytp82KEckRWZfCWi563QFLcWf4zG1UK1VC6YBBPwe6RZBMfg7KolEqSj6E6pSjVOsKoxvSfTzMxqEu%2FjdcPLIx3lBrNkQykcbzkbYXF6jczR1Q%2BoldiLzoMMd5zMW96MFxhymK5E9oYw%2F5JWqT3v83VLNLi%2B2UsWM1fRRSvTtkEAgWG67slfN8%2Bfv3i0NtGIt9BHAs0G0tkbG4uLY1OwotnM1kJ0l5lSWAPJn3tc5MjxtCK6sgEorTyDV5Im84P%2FZ%2F0dNHnDZ6G5kiXNDRHPaBvMCeMGCM5kJo3iyynyezxeANv1QU7r%2FSVYKlUexh0OHYlgGAYaHRSbUylhlAAUjj0jXepzwr2X8QWwEhYmqzVyib4Kw8J771jtLSApxxKkP7TXevzrqdiqwc%2BXC6BMhPX0BX6OKGhnUtvi4VNrc7w5x9q%2B6%2F2bE%2FQuEVPuT27FZhtPJngM0btDOZzGhiK34rB6t30ET0R4w4vPKwgY6pgHivH0l9xjZkfuVW063Mtouy7k1wuy0DjnnZ24hBDrb9FH91gzVx96Da0ZjsN9RiSzRrvEup1oERAl0GuW6UidaV3nBAhzW76eLlZmQXrkzt6XfGLoRkQ3OTQBq5GNpFLgdwwfcVZSoOTWYYV1vCnbfxBKNgA98evq8doOueBIN0rMBhkdpyRTrER037skHMBBrfMRaOV1d6v%2BYBcjglr%2Bi3neRDK1Y&X-Amz-Signature=8dd3ee60f87f003c594a931c45111a9e040e31ca43dc393f633b73de7427c300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JPLCAO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQi40CeTQI9vaTTH4iaRdUs%2B7JXOhqBLTV%2BJE3Vluk4AiARNqjjutQZ7VSebTaV3zti9eaT42lbEXMlvKvy8WIuhyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMv2V9HO0MZrE2sSKtwDhHNYLWDGo%2B1Z2664hv7gzirJRH1nVrHG%2FYq6YvqbxzKWGDCvJhqGDy0I%2Fl22Gl7XqDeRCAAAKlg2I%2FUeg6aDDdajqWNu8daVRXx5cAFhy299UpjBbUZsmKF4GFZITHYdZlE8R0IU%2FB9aK7A5o7MSV1yV9KJytp82KEckRWZfCWi563QFLcWf4zG1UK1VC6YBBPwe6RZBMfg7KolEqSj6E6pSjVOsKoxvSfTzMxqEu%2FjdcPLIx3lBrNkQykcbzkbYXF6jczR1Q%2BoldiLzoMMd5zMW96MFxhymK5E9oYw%2F5JWqT3v83VLNLi%2B2UsWM1fRRSvTtkEAgWG67slfN8%2Bfv3i0NtGIt9BHAs0G0tkbG4uLY1OwotnM1kJ0l5lSWAPJn3tc5MjxtCK6sgEorTyDV5Im84P%2FZ%2F0dNHnDZ6G5kiXNDRHPaBvMCeMGCM5kJo3iyynyezxeANv1QU7r%2FSVYKlUexh0OHYlgGAYaHRSbUylhlAAUjj0jXepzwr2X8QWwEhYmqzVyib4Kw8J771jtLSApxxKkP7TXevzrqdiqwc%2BXC6BMhPX0BX6OKGhnUtvi4VNrc7w5x9q%2B6%2F2bE%2FQuEVPuT27FZhtPJngM0btDOZzGhiK34rB6t30ET0R4w4vPKwgY6pgHivH0l9xjZkfuVW063Mtouy7k1wuy0DjnnZ24hBDrb9FH91gzVx96Da0ZjsN9RiSzRrvEup1oERAl0GuW6UidaV3nBAhzW76eLlZmQXrkzt6XfGLoRkQ3OTQBq5GNpFLgdwwfcVZSoOTWYYV1vCnbfxBKNgA98evq8doOueBIN0rMBhkdpyRTrER037skHMBBrfMRaOV1d6v%2BYBcjglr%2Bi3neRDK1Y&X-Amz-Signature=5aafdac6799e90458b8bd68c0392902a8321b0475550981329d1deb5cfa4e24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
