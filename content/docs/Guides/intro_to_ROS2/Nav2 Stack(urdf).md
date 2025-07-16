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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKNZECP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDZWxCBXGr3ftpwxbi4xhAvxwWnVXW7ZRPsJzKk4uPzmQIhAJTBGo6vkMD%2FFyEEgjvr6R3VYxpmUfag4dH6eqz9McWWKv8DCFEQABoMNjM3NDIzMTgzODA1Igyhpihn4XoUJNqsy4Qq3APaf6%2FFtjxNFt0hnDAngK6HfeqHXfwWLSNW2kPKiNz5764AS3yPuvRSTorlNPtsya8bkYKl1p4NZuzYpWnyCKspK%2BSmgDqE2pDKkXODcphkA7GoI89Lt91PxptOkeRURguj9U9gLg8lmJo5x0tNU6ufyx8eKLCgLvnXum%2BPCuEORDyrolTQq5xf1Sri0r0KJBNZooAl5PTeZCSbFkvQTJEmC%2BS8gAOOq2HaMM9iynIO0%2FFyz1wAyDszh1j9eHCu5XZNqjmVeH22lPPrsHk3Nl%2FrPX%2F1CXpjQnVWks7Iazeobe0j3ZqFLYbPjkmGKrSgIs%2FXWfLkl%2Bn2k3Df40xAZBbMWtb6TZg9hTcIHRH4cObwv3WWyDn0OiNBg0cNvECVZtYwkdNX3nZJcorWKATidY1oYKil8LdBmProXmQT7rX1SL9PrvG%2ByT3%2B0wpkJ%2F%2FhnBzzoD1LBA5uP9sxqlT0CD2Yo2x%2BHLiETjD4dOhL8DmwSP3%2FOMaHPoy6tQsQtKlPInUbG8024qM%2BbG4fGhMpLo9bjcaW27BI%2FopmZ28Ns7ySBLyC17KiWlWP3Ctglzog9GRMCqihfDMSNShLMgCCPngyCEAhcnPskSA2oW0P5y2L9CMgTNz8pLho3M6RFjDK0dvDBjqkAY37wLo44UagFzSKjf4bZinSX6N33gqkfxs3ACXIaH20EEch8hVq5TqzswO2uL8SE06vaDENHugz9Nb4%2Bufj2mxwmNcyGp%2FNeKD3FgxjP%2BTmdpjFQjIsirbi8gRO71u50yyc4XdDYB8TuO1zjMVKIz3Bblzm%2BdIz6PdM1rx6prA%2BOu3p3dNu690ucshSENkbNlzo9xXP6d2mZDMhVDJZH8GU89Q%2F&X-Amz-Signature=92861fbaa0cb83e9a33e79d34cefe24782cb9607a9ec33f5dc448bcce4098177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKNZECP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDZWxCBXGr3ftpwxbi4xhAvxwWnVXW7ZRPsJzKk4uPzmQIhAJTBGo6vkMD%2FFyEEgjvr6R3VYxpmUfag4dH6eqz9McWWKv8DCFEQABoMNjM3NDIzMTgzODA1Igyhpihn4XoUJNqsy4Qq3APaf6%2FFtjxNFt0hnDAngK6HfeqHXfwWLSNW2kPKiNz5764AS3yPuvRSTorlNPtsya8bkYKl1p4NZuzYpWnyCKspK%2BSmgDqE2pDKkXODcphkA7GoI89Lt91PxptOkeRURguj9U9gLg8lmJo5x0tNU6ufyx8eKLCgLvnXum%2BPCuEORDyrolTQq5xf1Sri0r0KJBNZooAl5PTeZCSbFkvQTJEmC%2BS8gAOOq2HaMM9iynIO0%2FFyz1wAyDszh1j9eHCu5XZNqjmVeH22lPPrsHk3Nl%2FrPX%2F1CXpjQnVWks7Iazeobe0j3ZqFLYbPjkmGKrSgIs%2FXWfLkl%2Bn2k3Df40xAZBbMWtb6TZg9hTcIHRH4cObwv3WWyDn0OiNBg0cNvECVZtYwkdNX3nZJcorWKATidY1oYKil8LdBmProXmQT7rX1SL9PrvG%2ByT3%2B0wpkJ%2F%2FhnBzzoD1LBA5uP9sxqlT0CD2Yo2x%2BHLiETjD4dOhL8DmwSP3%2FOMaHPoy6tQsQtKlPInUbG8024qM%2BbG4fGhMpLo9bjcaW27BI%2FopmZ28Ns7ySBLyC17KiWlWP3Ctglzog9GRMCqihfDMSNShLMgCCPngyCEAhcnPskSA2oW0P5y2L9CMgTNz8pLho3M6RFjDK0dvDBjqkAY37wLo44UagFzSKjf4bZinSX6N33gqkfxs3ACXIaH20EEch8hVq5TqzswO2uL8SE06vaDENHugz9Nb4%2Bufj2mxwmNcyGp%2FNeKD3FgxjP%2BTmdpjFQjIsirbi8gRO71u50yyc4XdDYB8TuO1zjMVKIz3Bblzm%2BdIz6PdM1rx6prA%2BOu3p3dNu690ucshSENkbNlzo9xXP6d2mZDMhVDJZH8GU89Q%2F&X-Amz-Signature=0ff2ad862dd369ba74d5e19171c2cf41674e8fb26a1343a94326098f1093aff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKNZECP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDZWxCBXGr3ftpwxbi4xhAvxwWnVXW7ZRPsJzKk4uPzmQIhAJTBGo6vkMD%2FFyEEgjvr6R3VYxpmUfag4dH6eqz9McWWKv8DCFEQABoMNjM3NDIzMTgzODA1Igyhpihn4XoUJNqsy4Qq3APaf6%2FFtjxNFt0hnDAngK6HfeqHXfwWLSNW2kPKiNz5764AS3yPuvRSTorlNPtsya8bkYKl1p4NZuzYpWnyCKspK%2BSmgDqE2pDKkXODcphkA7GoI89Lt91PxptOkeRURguj9U9gLg8lmJo5x0tNU6ufyx8eKLCgLvnXum%2BPCuEORDyrolTQq5xf1Sri0r0KJBNZooAl5PTeZCSbFkvQTJEmC%2BS8gAOOq2HaMM9iynIO0%2FFyz1wAyDszh1j9eHCu5XZNqjmVeH22lPPrsHk3Nl%2FrPX%2F1CXpjQnVWks7Iazeobe0j3ZqFLYbPjkmGKrSgIs%2FXWfLkl%2Bn2k3Df40xAZBbMWtb6TZg9hTcIHRH4cObwv3WWyDn0OiNBg0cNvECVZtYwkdNX3nZJcorWKATidY1oYKil8LdBmProXmQT7rX1SL9PrvG%2ByT3%2B0wpkJ%2F%2FhnBzzoD1LBA5uP9sxqlT0CD2Yo2x%2BHLiETjD4dOhL8DmwSP3%2FOMaHPoy6tQsQtKlPInUbG8024qM%2BbG4fGhMpLo9bjcaW27BI%2FopmZ28Ns7ySBLyC17KiWlWP3Ctglzog9GRMCqihfDMSNShLMgCCPngyCEAhcnPskSA2oW0P5y2L9CMgTNz8pLho3M6RFjDK0dvDBjqkAY37wLo44UagFzSKjf4bZinSX6N33gqkfxs3ACXIaH20EEch8hVq5TqzswO2uL8SE06vaDENHugz9Nb4%2Bufj2mxwmNcyGp%2FNeKD3FgxjP%2BTmdpjFQjIsirbi8gRO71u50yyc4XdDYB8TuO1zjMVKIz3Bblzm%2BdIz6PdM1rx6prA%2BOu3p3dNu690ucshSENkbNlzo9xXP6d2mZDMhVDJZH8GU89Q%2F&X-Amz-Signature=13c7d459f9842beefe814820d0e34734b3f16d381abc693ce2b36ede4ee42285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKNZECP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDZWxCBXGr3ftpwxbi4xhAvxwWnVXW7ZRPsJzKk4uPzmQIhAJTBGo6vkMD%2FFyEEgjvr6R3VYxpmUfag4dH6eqz9McWWKv8DCFEQABoMNjM3NDIzMTgzODA1Igyhpihn4XoUJNqsy4Qq3APaf6%2FFtjxNFt0hnDAngK6HfeqHXfwWLSNW2kPKiNz5764AS3yPuvRSTorlNPtsya8bkYKl1p4NZuzYpWnyCKspK%2BSmgDqE2pDKkXODcphkA7GoI89Lt91PxptOkeRURguj9U9gLg8lmJo5x0tNU6ufyx8eKLCgLvnXum%2BPCuEORDyrolTQq5xf1Sri0r0KJBNZooAl5PTeZCSbFkvQTJEmC%2BS8gAOOq2HaMM9iynIO0%2FFyz1wAyDszh1j9eHCu5XZNqjmVeH22lPPrsHk3Nl%2FrPX%2F1CXpjQnVWks7Iazeobe0j3ZqFLYbPjkmGKrSgIs%2FXWfLkl%2Bn2k3Df40xAZBbMWtb6TZg9hTcIHRH4cObwv3WWyDn0OiNBg0cNvECVZtYwkdNX3nZJcorWKATidY1oYKil8LdBmProXmQT7rX1SL9PrvG%2ByT3%2B0wpkJ%2F%2FhnBzzoD1LBA5uP9sxqlT0CD2Yo2x%2BHLiETjD4dOhL8DmwSP3%2FOMaHPoy6tQsQtKlPInUbG8024qM%2BbG4fGhMpLo9bjcaW27BI%2FopmZ28Ns7ySBLyC17KiWlWP3Ctglzog9GRMCqihfDMSNShLMgCCPngyCEAhcnPskSA2oW0P5y2L9CMgTNz8pLho3M6RFjDK0dvDBjqkAY37wLo44UagFzSKjf4bZinSX6N33gqkfxs3ACXIaH20EEch8hVq5TqzswO2uL8SE06vaDENHugz9Nb4%2Bufj2mxwmNcyGp%2FNeKD3FgxjP%2BTmdpjFQjIsirbi8gRO71u50yyc4XdDYB8TuO1zjMVKIz3Bblzm%2BdIz6PdM1rx6prA%2BOu3p3dNu690ucshSENkbNlzo9xXP6d2mZDMhVDJZH8GU89Q%2F&X-Amz-Signature=69231435f49630eaec5ea19c9efa18cf124b86ffd3f3d0d5cef1d380cd2c7392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKNZECP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDZWxCBXGr3ftpwxbi4xhAvxwWnVXW7ZRPsJzKk4uPzmQIhAJTBGo6vkMD%2FFyEEgjvr6R3VYxpmUfag4dH6eqz9McWWKv8DCFEQABoMNjM3NDIzMTgzODA1Igyhpihn4XoUJNqsy4Qq3APaf6%2FFtjxNFt0hnDAngK6HfeqHXfwWLSNW2kPKiNz5764AS3yPuvRSTorlNPtsya8bkYKl1p4NZuzYpWnyCKspK%2BSmgDqE2pDKkXODcphkA7GoI89Lt91PxptOkeRURguj9U9gLg8lmJo5x0tNU6ufyx8eKLCgLvnXum%2BPCuEORDyrolTQq5xf1Sri0r0KJBNZooAl5PTeZCSbFkvQTJEmC%2BS8gAOOq2HaMM9iynIO0%2FFyz1wAyDszh1j9eHCu5XZNqjmVeH22lPPrsHk3Nl%2FrPX%2F1CXpjQnVWks7Iazeobe0j3ZqFLYbPjkmGKrSgIs%2FXWfLkl%2Bn2k3Df40xAZBbMWtb6TZg9hTcIHRH4cObwv3WWyDn0OiNBg0cNvECVZtYwkdNX3nZJcorWKATidY1oYKil8LdBmProXmQT7rX1SL9PrvG%2ByT3%2B0wpkJ%2F%2FhnBzzoD1LBA5uP9sxqlT0CD2Yo2x%2BHLiETjD4dOhL8DmwSP3%2FOMaHPoy6tQsQtKlPInUbG8024qM%2BbG4fGhMpLo9bjcaW27BI%2FopmZ28Ns7ySBLyC17KiWlWP3Ctglzog9GRMCqihfDMSNShLMgCCPngyCEAhcnPskSA2oW0P5y2L9CMgTNz8pLho3M6RFjDK0dvDBjqkAY37wLo44UagFzSKjf4bZinSX6N33gqkfxs3ACXIaH20EEch8hVq5TqzswO2uL8SE06vaDENHugz9Nb4%2Bufj2mxwmNcyGp%2FNeKD3FgxjP%2BTmdpjFQjIsirbi8gRO71u50yyc4XdDYB8TuO1zjMVKIz3Bblzm%2BdIz6PdM1rx6prA%2BOu3p3dNu690ucshSENkbNlzo9xXP6d2mZDMhVDJZH8GU89Q%2F&X-Amz-Signature=87d45525739a717cbab09727396c3ef4ec4325d1310ec23ef8535bb678a02469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKNZECP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDZWxCBXGr3ftpwxbi4xhAvxwWnVXW7ZRPsJzKk4uPzmQIhAJTBGo6vkMD%2FFyEEgjvr6R3VYxpmUfag4dH6eqz9McWWKv8DCFEQABoMNjM3NDIzMTgzODA1Igyhpihn4XoUJNqsy4Qq3APaf6%2FFtjxNFt0hnDAngK6HfeqHXfwWLSNW2kPKiNz5764AS3yPuvRSTorlNPtsya8bkYKl1p4NZuzYpWnyCKspK%2BSmgDqE2pDKkXODcphkA7GoI89Lt91PxptOkeRURguj9U9gLg8lmJo5x0tNU6ufyx8eKLCgLvnXum%2BPCuEORDyrolTQq5xf1Sri0r0KJBNZooAl5PTeZCSbFkvQTJEmC%2BS8gAOOq2HaMM9iynIO0%2FFyz1wAyDszh1j9eHCu5XZNqjmVeH22lPPrsHk3Nl%2FrPX%2F1CXpjQnVWks7Iazeobe0j3ZqFLYbPjkmGKrSgIs%2FXWfLkl%2Bn2k3Df40xAZBbMWtb6TZg9hTcIHRH4cObwv3WWyDn0OiNBg0cNvECVZtYwkdNX3nZJcorWKATidY1oYKil8LdBmProXmQT7rX1SL9PrvG%2ByT3%2B0wpkJ%2F%2FhnBzzoD1LBA5uP9sxqlT0CD2Yo2x%2BHLiETjD4dOhL8DmwSP3%2FOMaHPoy6tQsQtKlPInUbG8024qM%2BbG4fGhMpLo9bjcaW27BI%2FopmZ28Ns7ySBLyC17KiWlWP3Ctglzog9GRMCqihfDMSNShLMgCCPngyCEAhcnPskSA2oW0P5y2L9CMgTNz8pLho3M6RFjDK0dvDBjqkAY37wLo44UagFzSKjf4bZinSX6N33gqkfxs3ACXIaH20EEch8hVq5TqzswO2uL8SE06vaDENHugz9Nb4%2Bufj2mxwmNcyGp%2FNeKD3FgxjP%2BTmdpjFQjIsirbi8gRO71u50yyc4XdDYB8TuO1zjMVKIz3Bblzm%2BdIz6PdM1rx6prA%2BOu3p3dNu690ucshSENkbNlzo9xXP6d2mZDMhVDJZH8GU89Q%2F&X-Amz-Signature=dfd0e0a196914a5ee04708d3c0eedfc0c48175ae87c057ebee9a9052262df156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
