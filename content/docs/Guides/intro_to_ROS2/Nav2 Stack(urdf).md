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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUNDMIU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrjnTaYKojA7ZV%2BoJuP6JNnOzLi9aOp2nDw3CGq3dk4gIhAMoMsxfvWf6pmhImE8PILBPeMqRZnIvpTWryJGuS4IdtKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2D3OLMdG4R4mOwZwq3AOA2o95w4MO%2BFRHZnaXCED0X4RTkW7YwMhvsOJE9hHwM70ofjRWcKnZu2H4%2FhwNXbCT3A5hMwtbeucUytgCbUmwibXAuZ0XfxzXg7JfxzNQOKIN%2BbzMkq6k%2F%2Bh8S0HmnzujLWZgJUBDMCB3nAApIvBz%2BY3r8o%2FWEavLkXZl5W9UTH%2B4YQQ2DATyvByhZQvjj1CqDBxvjv6vuPZ5SBp3IJcupq1l3zl1M29%2BhcgZsiDNGh8%2BDsYuOPr0iu4zgYpAE1piCDOeS5xfyN7ptba22hDXo1lMzKRMaVQzNoC7X2TbcU6mLe%2F1rDSPnNBofLLXHU7%2B3EWzHMYx%2BLEyrtMAShA0LoLtw9utBMQLLT2TXJBKOhE%2FK3T%2F%2BumesJbSeCyfyinlJNQIGjNF4I5xFLK%2FxkLvocZzOztdbN0Yo1HR9xuwpKZihD8zIJfzJ3AL%2FZyXdhCMDWCL%2FTxgQzSBAyJv02rc5U%2BBzjtlY8t%2B02uV%2Ff7kLIc%2FbLyGPwxKbYbtnuoo%2F%2Fnd%2FPYZZCvUr%2FeBuzKPdKSMWG6P7cfO4GgFIOAvuCY3kfkgI0O%2FdEeKO78ruKw3CsazFhj48Mhdr%2BEafSTJKdN7M52H%2BwPzw6arKbr5N7wlwV1QCW5eZpbJGpFMzzDOqLS9BjqkAXZXOmOPjV9zath4sstilIjg5JO0%2FWO7FwHe6ku20WDwSaKjEnyMOLTV5%2B%2B0uWpKMTi4gEvtkd4SxHjxVILnBTZfRJ7Sx9m3vF%2FXAFeUwzZC8wJr%2BghaJY3CLVdXdppnQmxsj%2BbqKxMfrAYq7%2BckTAmEnmjulAA%2FH%2BAURzA7imIRSCb4xA6TGKXzEnX5cX2iTxP6Ul5kXkGfP0uXUobhoMIIv2w%2B&X-Amz-Signature=52465a6e0ce6e0b9655f9a81b5d5384d78f26f47e78d568d4bd46176981aa07b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUNDMIU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrjnTaYKojA7ZV%2BoJuP6JNnOzLi9aOp2nDw3CGq3dk4gIhAMoMsxfvWf6pmhImE8PILBPeMqRZnIvpTWryJGuS4IdtKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2D3OLMdG4R4mOwZwq3AOA2o95w4MO%2BFRHZnaXCED0X4RTkW7YwMhvsOJE9hHwM70ofjRWcKnZu2H4%2FhwNXbCT3A5hMwtbeucUytgCbUmwibXAuZ0XfxzXg7JfxzNQOKIN%2BbzMkq6k%2F%2Bh8S0HmnzujLWZgJUBDMCB3nAApIvBz%2BY3r8o%2FWEavLkXZl5W9UTH%2B4YQQ2DATyvByhZQvjj1CqDBxvjv6vuPZ5SBp3IJcupq1l3zl1M29%2BhcgZsiDNGh8%2BDsYuOPr0iu4zgYpAE1piCDOeS5xfyN7ptba22hDXo1lMzKRMaVQzNoC7X2TbcU6mLe%2F1rDSPnNBofLLXHU7%2B3EWzHMYx%2BLEyrtMAShA0LoLtw9utBMQLLT2TXJBKOhE%2FK3T%2F%2BumesJbSeCyfyinlJNQIGjNF4I5xFLK%2FxkLvocZzOztdbN0Yo1HR9xuwpKZihD8zIJfzJ3AL%2FZyXdhCMDWCL%2FTxgQzSBAyJv02rc5U%2BBzjtlY8t%2B02uV%2Ff7kLIc%2FbLyGPwxKbYbtnuoo%2F%2Fnd%2FPYZZCvUr%2FeBuzKPdKSMWG6P7cfO4GgFIOAvuCY3kfkgI0O%2FdEeKO78ruKw3CsazFhj48Mhdr%2BEafSTJKdN7M52H%2BwPzw6arKbr5N7wlwV1QCW5eZpbJGpFMzzDOqLS9BjqkAXZXOmOPjV9zath4sstilIjg5JO0%2FWO7FwHe6ku20WDwSaKjEnyMOLTV5%2B%2B0uWpKMTi4gEvtkd4SxHjxVILnBTZfRJ7Sx9m3vF%2FXAFeUwzZC8wJr%2BghaJY3CLVdXdppnQmxsj%2BbqKxMfrAYq7%2BckTAmEnmjulAA%2FH%2BAURzA7imIRSCb4xA6TGKXzEnX5cX2iTxP6Ul5kXkGfP0uXUobhoMIIv2w%2B&X-Amz-Signature=980880b99efa8506948c8b4c4f4f202b826ded604ef76ecb2ba27ee4e5227aab&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUNDMIU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrjnTaYKojA7ZV%2BoJuP6JNnOzLi9aOp2nDw3CGq3dk4gIhAMoMsxfvWf6pmhImE8PILBPeMqRZnIvpTWryJGuS4IdtKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2D3OLMdG4R4mOwZwq3AOA2o95w4MO%2BFRHZnaXCED0X4RTkW7YwMhvsOJE9hHwM70ofjRWcKnZu2H4%2FhwNXbCT3A5hMwtbeucUytgCbUmwibXAuZ0XfxzXg7JfxzNQOKIN%2BbzMkq6k%2F%2Bh8S0HmnzujLWZgJUBDMCB3nAApIvBz%2BY3r8o%2FWEavLkXZl5W9UTH%2B4YQQ2DATyvByhZQvjj1CqDBxvjv6vuPZ5SBp3IJcupq1l3zl1M29%2BhcgZsiDNGh8%2BDsYuOPr0iu4zgYpAE1piCDOeS5xfyN7ptba22hDXo1lMzKRMaVQzNoC7X2TbcU6mLe%2F1rDSPnNBofLLXHU7%2B3EWzHMYx%2BLEyrtMAShA0LoLtw9utBMQLLT2TXJBKOhE%2FK3T%2F%2BumesJbSeCyfyinlJNQIGjNF4I5xFLK%2FxkLvocZzOztdbN0Yo1HR9xuwpKZihD8zIJfzJ3AL%2FZyXdhCMDWCL%2FTxgQzSBAyJv02rc5U%2BBzjtlY8t%2B02uV%2Ff7kLIc%2FbLyGPwxKbYbtnuoo%2F%2Fnd%2FPYZZCvUr%2FeBuzKPdKSMWG6P7cfO4GgFIOAvuCY3kfkgI0O%2FdEeKO78ruKw3CsazFhj48Mhdr%2BEafSTJKdN7M52H%2BwPzw6arKbr5N7wlwV1QCW5eZpbJGpFMzzDOqLS9BjqkAXZXOmOPjV9zath4sstilIjg5JO0%2FWO7FwHe6ku20WDwSaKjEnyMOLTV5%2B%2B0uWpKMTi4gEvtkd4SxHjxVILnBTZfRJ7Sx9m3vF%2FXAFeUwzZC8wJr%2BghaJY3CLVdXdppnQmxsj%2BbqKxMfrAYq7%2BckTAmEnmjulAA%2FH%2BAURzA7imIRSCb4xA6TGKXzEnX5cX2iTxP6Ul5kXkGfP0uXUobhoMIIv2w%2B&X-Amz-Signature=4cf1a029bdf67550dbeb990a1305c4f559b395e4f7b65ced58ecb16ea811f187&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUNDMIU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrjnTaYKojA7ZV%2BoJuP6JNnOzLi9aOp2nDw3CGq3dk4gIhAMoMsxfvWf6pmhImE8PILBPeMqRZnIvpTWryJGuS4IdtKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2D3OLMdG4R4mOwZwq3AOA2o95w4MO%2BFRHZnaXCED0X4RTkW7YwMhvsOJE9hHwM70ofjRWcKnZu2H4%2FhwNXbCT3A5hMwtbeucUytgCbUmwibXAuZ0XfxzXg7JfxzNQOKIN%2BbzMkq6k%2F%2Bh8S0HmnzujLWZgJUBDMCB3nAApIvBz%2BY3r8o%2FWEavLkXZl5W9UTH%2B4YQQ2DATyvByhZQvjj1CqDBxvjv6vuPZ5SBp3IJcupq1l3zl1M29%2BhcgZsiDNGh8%2BDsYuOPr0iu4zgYpAE1piCDOeS5xfyN7ptba22hDXo1lMzKRMaVQzNoC7X2TbcU6mLe%2F1rDSPnNBofLLXHU7%2B3EWzHMYx%2BLEyrtMAShA0LoLtw9utBMQLLT2TXJBKOhE%2FK3T%2F%2BumesJbSeCyfyinlJNQIGjNF4I5xFLK%2FxkLvocZzOztdbN0Yo1HR9xuwpKZihD8zIJfzJ3AL%2FZyXdhCMDWCL%2FTxgQzSBAyJv02rc5U%2BBzjtlY8t%2B02uV%2Ff7kLIc%2FbLyGPwxKbYbtnuoo%2F%2Fnd%2FPYZZCvUr%2FeBuzKPdKSMWG6P7cfO4GgFIOAvuCY3kfkgI0O%2FdEeKO78ruKw3CsazFhj48Mhdr%2BEafSTJKdN7M52H%2BwPzw6arKbr5N7wlwV1QCW5eZpbJGpFMzzDOqLS9BjqkAXZXOmOPjV9zath4sstilIjg5JO0%2FWO7FwHe6ku20WDwSaKjEnyMOLTV5%2B%2B0uWpKMTi4gEvtkd4SxHjxVILnBTZfRJ7Sx9m3vF%2FXAFeUwzZC8wJr%2BghaJY3CLVdXdppnQmxsj%2BbqKxMfrAYq7%2BckTAmEnmjulAA%2FH%2BAURzA7imIRSCb4xA6TGKXzEnX5cX2iTxP6Ul5kXkGfP0uXUobhoMIIv2w%2B&X-Amz-Signature=2bc9066967d9946798c832f0fb1738cde349a4efc07dd32708a095818f0977d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUNDMIU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrjnTaYKojA7ZV%2BoJuP6JNnOzLi9aOp2nDw3CGq3dk4gIhAMoMsxfvWf6pmhImE8PILBPeMqRZnIvpTWryJGuS4IdtKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2D3OLMdG4R4mOwZwq3AOA2o95w4MO%2BFRHZnaXCED0X4RTkW7YwMhvsOJE9hHwM70ofjRWcKnZu2H4%2FhwNXbCT3A5hMwtbeucUytgCbUmwibXAuZ0XfxzXg7JfxzNQOKIN%2BbzMkq6k%2F%2Bh8S0HmnzujLWZgJUBDMCB3nAApIvBz%2BY3r8o%2FWEavLkXZl5W9UTH%2B4YQQ2DATyvByhZQvjj1CqDBxvjv6vuPZ5SBp3IJcupq1l3zl1M29%2BhcgZsiDNGh8%2BDsYuOPr0iu4zgYpAE1piCDOeS5xfyN7ptba22hDXo1lMzKRMaVQzNoC7X2TbcU6mLe%2F1rDSPnNBofLLXHU7%2B3EWzHMYx%2BLEyrtMAShA0LoLtw9utBMQLLT2TXJBKOhE%2FK3T%2F%2BumesJbSeCyfyinlJNQIGjNF4I5xFLK%2FxkLvocZzOztdbN0Yo1HR9xuwpKZihD8zIJfzJ3AL%2FZyXdhCMDWCL%2FTxgQzSBAyJv02rc5U%2BBzjtlY8t%2B02uV%2Ff7kLIc%2FbLyGPwxKbYbtnuoo%2F%2Fnd%2FPYZZCvUr%2FeBuzKPdKSMWG6P7cfO4GgFIOAvuCY3kfkgI0O%2FdEeKO78ruKw3CsazFhj48Mhdr%2BEafSTJKdN7M52H%2BwPzw6arKbr5N7wlwV1QCW5eZpbJGpFMzzDOqLS9BjqkAXZXOmOPjV9zath4sstilIjg5JO0%2FWO7FwHe6ku20WDwSaKjEnyMOLTV5%2B%2B0uWpKMTi4gEvtkd4SxHjxVILnBTZfRJ7Sx9m3vF%2FXAFeUwzZC8wJr%2BghaJY3CLVdXdppnQmxsj%2BbqKxMfrAYq7%2BckTAmEnmjulAA%2FH%2BAURzA7imIRSCb4xA6TGKXzEnX5cX2iTxP6Ul5kXkGfP0uXUobhoMIIv2w%2B&X-Amz-Signature=85ec1e58e781aab2c56e1cbba7355d752c72db885f2428fde918e38ff2836cff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUNDMIU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrjnTaYKojA7ZV%2BoJuP6JNnOzLi9aOp2nDw3CGq3dk4gIhAMoMsxfvWf6pmhImE8PILBPeMqRZnIvpTWryJGuS4IdtKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2D3OLMdG4R4mOwZwq3AOA2o95w4MO%2BFRHZnaXCED0X4RTkW7YwMhvsOJE9hHwM70ofjRWcKnZu2H4%2FhwNXbCT3A5hMwtbeucUytgCbUmwibXAuZ0XfxzXg7JfxzNQOKIN%2BbzMkq6k%2F%2Bh8S0HmnzujLWZgJUBDMCB3nAApIvBz%2BY3r8o%2FWEavLkXZl5W9UTH%2B4YQQ2DATyvByhZQvjj1CqDBxvjv6vuPZ5SBp3IJcupq1l3zl1M29%2BhcgZsiDNGh8%2BDsYuOPr0iu4zgYpAE1piCDOeS5xfyN7ptba22hDXo1lMzKRMaVQzNoC7X2TbcU6mLe%2F1rDSPnNBofLLXHU7%2B3EWzHMYx%2BLEyrtMAShA0LoLtw9utBMQLLT2TXJBKOhE%2FK3T%2F%2BumesJbSeCyfyinlJNQIGjNF4I5xFLK%2FxkLvocZzOztdbN0Yo1HR9xuwpKZihD8zIJfzJ3AL%2FZyXdhCMDWCL%2FTxgQzSBAyJv02rc5U%2BBzjtlY8t%2B02uV%2Ff7kLIc%2FbLyGPwxKbYbtnuoo%2F%2Fnd%2FPYZZCvUr%2FeBuzKPdKSMWG6P7cfO4GgFIOAvuCY3kfkgI0O%2FdEeKO78ruKw3CsazFhj48Mhdr%2BEafSTJKdN7M52H%2BwPzw6arKbr5N7wlwV1QCW5eZpbJGpFMzzDOqLS9BjqkAXZXOmOPjV9zath4sstilIjg5JO0%2FWO7FwHe6ku20WDwSaKjEnyMOLTV5%2B%2B0uWpKMTi4gEvtkd4SxHjxVILnBTZfRJ7Sx9m3vF%2FXAFeUwzZC8wJr%2BghaJY3CLVdXdppnQmxsj%2BbqKxMfrAYq7%2BckTAmEnmjulAA%2FH%2BAURzA7imIRSCb4xA6TGKXzEnX5cX2iTxP6Ul5kXkGfP0uXUobhoMIIv2w%2B&X-Amz-Signature=30334b8d0ce467748fea7bbd38ffbda78dd3c2e28d0beba5aa9fb305b1602efc&X-Amz-SignedHeaders=host&x-id=GetObject)
