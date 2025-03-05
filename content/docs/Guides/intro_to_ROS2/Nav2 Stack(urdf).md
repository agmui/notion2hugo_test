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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LG7SAVN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdm4oQvkQx7AResdk%2BPlQZzz55TGyXhqwpMpJUsKW%2BeAiAzBr%2Bzyv8iBoabQlAD0soyMIJFdP2QIh%2Fsgeb%2Flfewnyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMU67S5trAPhy3cS6BKtwDQd9p5mpPuxVJsgOeAs0F3Ep98DK1%2FZDs6CNJAjZC0KzxDHZ%2BfociAdYLMxmRNxlMevjFCDLKu5tGCQqV7MQ6kv%2B3TZCut20JYam4qGzk6sFBMDNt2HBsdxeZNLc%2FARGR3F0l%2BAgUj2ibN%2BNwTF6%2ByuD1FKNkl3DxiYAlQV%2BXYfyUGOpob1YL4FrYbY00WdxebXzesTuDmoJBuyNBs4JUFIzZk6%2BeSa%2Ffe1ULq8oYoWy5I74xKSQ%2F6xbP21DXgZUfz309TFzf01rAYd5TiEMbxa78pUfqU199f229vE1aZGzTAt6wLbyhWzcTPdPgTvV9vxP7HMErXkTG%2FghQcXt%2Fc5lsC9tN2Oz9AyA4Ku6d5Pjja8EgAbF0QblMyfg5gq6AffrVraUcRZdgsMFsFG%2F8uSLktvqtTmua6XSIXDDplDCGyPYHUhnGs0ESdipeu%2FtIJeyzqA4ECqxxVOtZv34lnsdPlLSAUROmJ1g6G%2FbNL1DU2SK9zIeQUNJ7oMY2DhmIqhghWCRolsz5GoKaZQ%2B6gJBU0vsNy8aMATVbG6y%2FYEdjumWjW3WMnfFgGvrOImJvRo7jnLLzcpGw8kpDifHIvE8rx5q0KUI9cP8vs8DX8OZTfpQ37lPF0aV4DtIwoI2gvgY6pgEH%2FTjg%2FttChTiY7RuXbU%2Bb0BO4xPNnbyHwBGNFO2RM%2B%2FttefZCy8O6uKjeIFHPHFS2HY0wcgmn1009tiB6ELH505YhIhPcwZoC1AVjLn8XCzLrlQM9%2FTVPprK%2BUcDJQGQt6VBzGQWdjBLPNxIAucO8LqNPa4NKBpUykErzOqWrglLSsIz%2FRD%2B8ZnjkF5%2B5Ao68PIHGKGwK72Wn%2F8feTraZHexYzDlB&X-Amz-Signature=3fcd49c5bc5270e7d1b22519c3eb34b1ad5b2dca10c4e085357f4cdeef6f1940&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LG7SAVN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdm4oQvkQx7AResdk%2BPlQZzz55TGyXhqwpMpJUsKW%2BeAiAzBr%2Bzyv8iBoabQlAD0soyMIJFdP2QIh%2Fsgeb%2Flfewnyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMU67S5trAPhy3cS6BKtwDQd9p5mpPuxVJsgOeAs0F3Ep98DK1%2FZDs6CNJAjZC0KzxDHZ%2BfociAdYLMxmRNxlMevjFCDLKu5tGCQqV7MQ6kv%2B3TZCut20JYam4qGzk6sFBMDNt2HBsdxeZNLc%2FARGR3F0l%2BAgUj2ibN%2BNwTF6%2ByuD1FKNkl3DxiYAlQV%2BXYfyUGOpob1YL4FrYbY00WdxebXzesTuDmoJBuyNBs4JUFIzZk6%2BeSa%2Ffe1ULq8oYoWy5I74xKSQ%2F6xbP21DXgZUfz309TFzf01rAYd5TiEMbxa78pUfqU199f229vE1aZGzTAt6wLbyhWzcTPdPgTvV9vxP7HMErXkTG%2FghQcXt%2Fc5lsC9tN2Oz9AyA4Ku6d5Pjja8EgAbF0QblMyfg5gq6AffrVraUcRZdgsMFsFG%2F8uSLktvqtTmua6XSIXDDplDCGyPYHUhnGs0ESdipeu%2FtIJeyzqA4ECqxxVOtZv34lnsdPlLSAUROmJ1g6G%2FbNL1DU2SK9zIeQUNJ7oMY2DhmIqhghWCRolsz5GoKaZQ%2B6gJBU0vsNy8aMATVbG6y%2FYEdjumWjW3WMnfFgGvrOImJvRo7jnLLzcpGw8kpDifHIvE8rx5q0KUI9cP8vs8DX8OZTfpQ37lPF0aV4DtIwoI2gvgY6pgEH%2FTjg%2FttChTiY7RuXbU%2Bb0BO4xPNnbyHwBGNFO2RM%2B%2FttefZCy8O6uKjeIFHPHFS2HY0wcgmn1009tiB6ELH505YhIhPcwZoC1AVjLn8XCzLrlQM9%2FTVPprK%2BUcDJQGQt6VBzGQWdjBLPNxIAucO8LqNPa4NKBpUykErzOqWrglLSsIz%2FRD%2B8ZnjkF5%2B5Ao68PIHGKGwK72Wn%2F8feTraZHexYzDlB&X-Amz-Signature=f38c58d5fc4239705b5124f29d3270f96e10ab7b6ffd8084eba619a07c74dbea&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LG7SAVN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdm4oQvkQx7AResdk%2BPlQZzz55TGyXhqwpMpJUsKW%2BeAiAzBr%2Bzyv8iBoabQlAD0soyMIJFdP2QIh%2Fsgeb%2Flfewnyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMU67S5trAPhy3cS6BKtwDQd9p5mpPuxVJsgOeAs0F3Ep98DK1%2FZDs6CNJAjZC0KzxDHZ%2BfociAdYLMxmRNxlMevjFCDLKu5tGCQqV7MQ6kv%2B3TZCut20JYam4qGzk6sFBMDNt2HBsdxeZNLc%2FARGR3F0l%2BAgUj2ibN%2BNwTF6%2ByuD1FKNkl3DxiYAlQV%2BXYfyUGOpob1YL4FrYbY00WdxebXzesTuDmoJBuyNBs4JUFIzZk6%2BeSa%2Ffe1ULq8oYoWy5I74xKSQ%2F6xbP21DXgZUfz309TFzf01rAYd5TiEMbxa78pUfqU199f229vE1aZGzTAt6wLbyhWzcTPdPgTvV9vxP7HMErXkTG%2FghQcXt%2Fc5lsC9tN2Oz9AyA4Ku6d5Pjja8EgAbF0QblMyfg5gq6AffrVraUcRZdgsMFsFG%2F8uSLktvqtTmua6XSIXDDplDCGyPYHUhnGs0ESdipeu%2FtIJeyzqA4ECqxxVOtZv34lnsdPlLSAUROmJ1g6G%2FbNL1DU2SK9zIeQUNJ7oMY2DhmIqhghWCRolsz5GoKaZQ%2B6gJBU0vsNy8aMATVbG6y%2FYEdjumWjW3WMnfFgGvrOImJvRo7jnLLzcpGw8kpDifHIvE8rx5q0KUI9cP8vs8DX8OZTfpQ37lPF0aV4DtIwoI2gvgY6pgEH%2FTjg%2FttChTiY7RuXbU%2Bb0BO4xPNnbyHwBGNFO2RM%2B%2FttefZCy8O6uKjeIFHPHFS2HY0wcgmn1009tiB6ELH505YhIhPcwZoC1AVjLn8XCzLrlQM9%2FTVPprK%2BUcDJQGQt6VBzGQWdjBLPNxIAucO8LqNPa4NKBpUykErzOqWrglLSsIz%2FRD%2B8ZnjkF5%2B5Ao68PIHGKGwK72Wn%2F8feTraZHexYzDlB&X-Amz-Signature=6b9255fe57fdb93b384b8b1e0cd04a55aab14f1c1255703b32359f9e90e6fab5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LG7SAVN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdm4oQvkQx7AResdk%2BPlQZzz55TGyXhqwpMpJUsKW%2BeAiAzBr%2Bzyv8iBoabQlAD0soyMIJFdP2QIh%2Fsgeb%2Flfewnyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMU67S5trAPhy3cS6BKtwDQd9p5mpPuxVJsgOeAs0F3Ep98DK1%2FZDs6CNJAjZC0KzxDHZ%2BfociAdYLMxmRNxlMevjFCDLKu5tGCQqV7MQ6kv%2B3TZCut20JYam4qGzk6sFBMDNt2HBsdxeZNLc%2FARGR3F0l%2BAgUj2ibN%2BNwTF6%2ByuD1FKNkl3DxiYAlQV%2BXYfyUGOpob1YL4FrYbY00WdxebXzesTuDmoJBuyNBs4JUFIzZk6%2BeSa%2Ffe1ULq8oYoWy5I74xKSQ%2F6xbP21DXgZUfz309TFzf01rAYd5TiEMbxa78pUfqU199f229vE1aZGzTAt6wLbyhWzcTPdPgTvV9vxP7HMErXkTG%2FghQcXt%2Fc5lsC9tN2Oz9AyA4Ku6d5Pjja8EgAbF0QblMyfg5gq6AffrVraUcRZdgsMFsFG%2F8uSLktvqtTmua6XSIXDDplDCGyPYHUhnGs0ESdipeu%2FtIJeyzqA4ECqxxVOtZv34lnsdPlLSAUROmJ1g6G%2FbNL1DU2SK9zIeQUNJ7oMY2DhmIqhghWCRolsz5GoKaZQ%2B6gJBU0vsNy8aMATVbG6y%2FYEdjumWjW3WMnfFgGvrOImJvRo7jnLLzcpGw8kpDifHIvE8rx5q0KUI9cP8vs8DX8OZTfpQ37lPF0aV4DtIwoI2gvgY6pgEH%2FTjg%2FttChTiY7RuXbU%2Bb0BO4xPNnbyHwBGNFO2RM%2B%2FttefZCy8O6uKjeIFHPHFS2HY0wcgmn1009tiB6ELH505YhIhPcwZoC1AVjLn8XCzLrlQM9%2FTVPprK%2BUcDJQGQt6VBzGQWdjBLPNxIAucO8LqNPa4NKBpUykErzOqWrglLSsIz%2FRD%2B8ZnjkF5%2B5Ao68PIHGKGwK72Wn%2F8feTraZHexYzDlB&X-Amz-Signature=26dcbb9de7befac9a072bb61e447ce3856b1cec7ce111683ea04ea3c6ae84da8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LG7SAVN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdm4oQvkQx7AResdk%2BPlQZzz55TGyXhqwpMpJUsKW%2BeAiAzBr%2Bzyv8iBoabQlAD0soyMIJFdP2QIh%2Fsgeb%2Flfewnyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMU67S5trAPhy3cS6BKtwDQd9p5mpPuxVJsgOeAs0F3Ep98DK1%2FZDs6CNJAjZC0KzxDHZ%2BfociAdYLMxmRNxlMevjFCDLKu5tGCQqV7MQ6kv%2B3TZCut20JYam4qGzk6sFBMDNt2HBsdxeZNLc%2FARGR3F0l%2BAgUj2ibN%2BNwTF6%2ByuD1FKNkl3DxiYAlQV%2BXYfyUGOpob1YL4FrYbY00WdxebXzesTuDmoJBuyNBs4JUFIzZk6%2BeSa%2Ffe1ULq8oYoWy5I74xKSQ%2F6xbP21DXgZUfz309TFzf01rAYd5TiEMbxa78pUfqU199f229vE1aZGzTAt6wLbyhWzcTPdPgTvV9vxP7HMErXkTG%2FghQcXt%2Fc5lsC9tN2Oz9AyA4Ku6d5Pjja8EgAbF0QblMyfg5gq6AffrVraUcRZdgsMFsFG%2F8uSLktvqtTmua6XSIXDDplDCGyPYHUhnGs0ESdipeu%2FtIJeyzqA4ECqxxVOtZv34lnsdPlLSAUROmJ1g6G%2FbNL1DU2SK9zIeQUNJ7oMY2DhmIqhghWCRolsz5GoKaZQ%2B6gJBU0vsNy8aMATVbG6y%2FYEdjumWjW3WMnfFgGvrOImJvRo7jnLLzcpGw8kpDifHIvE8rx5q0KUI9cP8vs8DX8OZTfpQ37lPF0aV4DtIwoI2gvgY6pgEH%2FTjg%2FttChTiY7RuXbU%2Bb0BO4xPNnbyHwBGNFO2RM%2B%2FttefZCy8O6uKjeIFHPHFS2HY0wcgmn1009tiB6ELH505YhIhPcwZoC1AVjLn8XCzLrlQM9%2FTVPprK%2BUcDJQGQt6VBzGQWdjBLPNxIAucO8LqNPa4NKBpUykErzOqWrglLSsIz%2FRD%2B8ZnjkF5%2B5Ao68PIHGKGwK72Wn%2F8feTraZHexYzDlB&X-Amz-Signature=68440a3d0d60f619190356abf989078e2e7a6d41045e118a27411156707b1463&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LG7SAVN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdm4oQvkQx7AResdk%2BPlQZzz55TGyXhqwpMpJUsKW%2BeAiAzBr%2Bzyv8iBoabQlAD0soyMIJFdP2QIh%2Fsgeb%2Flfewnyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMU67S5trAPhy3cS6BKtwDQd9p5mpPuxVJsgOeAs0F3Ep98DK1%2FZDs6CNJAjZC0KzxDHZ%2BfociAdYLMxmRNxlMevjFCDLKu5tGCQqV7MQ6kv%2B3TZCut20JYam4qGzk6sFBMDNt2HBsdxeZNLc%2FARGR3F0l%2BAgUj2ibN%2BNwTF6%2ByuD1FKNkl3DxiYAlQV%2BXYfyUGOpob1YL4FrYbY00WdxebXzesTuDmoJBuyNBs4JUFIzZk6%2BeSa%2Ffe1ULq8oYoWy5I74xKSQ%2F6xbP21DXgZUfz309TFzf01rAYd5TiEMbxa78pUfqU199f229vE1aZGzTAt6wLbyhWzcTPdPgTvV9vxP7HMErXkTG%2FghQcXt%2Fc5lsC9tN2Oz9AyA4Ku6d5Pjja8EgAbF0QblMyfg5gq6AffrVraUcRZdgsMFsFG%2F8uSLktvqtTmua6XSIXDDplDCGyPYHUhnGs0ESdipeu%2FtIJeyzqA4ECqxxVOtZv34lnsdPlLSAUROmJ1g6G%2FbNL1DU2SK9zIeQUNJ7oMY2DhmIqhghWCRolsz5GoKaZQ%2B6gJBU0vsNy8aMATVbG6y%2FYEdjumWjW3WMnfFgGvrOImJvRo7jnLLzcpGw8kpDifHIvE8rx5q0KUI9cP8vs8DX8OZTfpQ37lPF0aV4DtIwoI2gvgY6pgEH%2FTjg%2FttChTiY7RuXbU%2Bb0BO4xPNnbyHwBGNFO2RM%2B%2FttefZCy8O6uKjeIFHPHFS2HY0wcgmn1009tiB6ELH505YhIhPcwZoC1AVjLn8XCzLrlQM9%2FTVPprK%2BUcDJQGQt6VBzGQWdjBLPNxIAucO8LqNPa4NKBpUykErzOqWrglLSsIz%2FRD%2B8ZnjkF5%2B5Ao68PIHGKGwK72Wn%2F8feTraZHexYzDlB&X-Amz-Signature=8a4bd22a2184853b2518bade958b7d0fa7d06a42ac93467a02dba999e851231a&X-Amz-SignedHeaders=host&x-id=GetObject)
