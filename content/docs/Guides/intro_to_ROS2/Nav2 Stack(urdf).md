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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AATSXU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBS9kTvlThXoSVSVxhVjlg%2BdjJ8eTwJkDfoe%2F0qx2%2BdCAiBquHIxgjl4vhDB328Oj%2F%2FqsgEmAOwnxc0C22c60YnOyCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe3MyixHVZ%2BNeT4jeKtwDRg7pu0Ym0tEXTg7EfV%2Bb4dimT%2FFLJ5qIEFhng5AuEPCatDCHsKhzemqO4vUEFoon1wh9pDSm%2BdFcps2ja4iJ4kqZceBZdtD0jleAfS7xlpRTQ35Bt8s6ykbxthMKvCPUQ0%2BIgspY7uGix%2BTTlz9xO3qYt9oOwTA6TU7H6xGzmAbRAqA48HOD%2BXhkxSYFok1nMJenPkN4omiR22GiofweVC0tDR8qrua74se9%2FPzw3pKoHoMwN1sxc99P3b%2FzbPk6eOGyT9Kbin6lYeT6nbg0kJEeHdYi48ZupGuPkB5I4cv2lbBpPLLc6Vz0BxA8zUFl1vOnJdlcGfhIYR4KbARiwvhR0Y3XU5PB1eZhGrK09KjcE%2BcjRRYcAnG1NP0XWMVOJziEPWiZfad%2Bg2dyONEBCEwbqd7Wk0xcyTQ1bFXUzgdzMJTor2gruH0kiMxKH9knNqFp2yn5saApfrr9q6VmVBwHpZPcQqLUvBStu%2FV1r9DxWDh%2F7zTAebK79m3YFGOcbaYVnzzic5nRRG%2FFvfxiT2hiG3SwH6a38xnVyRgMRxvUQCo14iqnjgzjigK1UbV%2Bjdc6vkIIzxjI1T%2FSMiWDhSC%2Bi3PNH02oxVhKV7i3oY9LkvgcviTJu1V0G8Mw3eTwvgY6pgEATMRAqjLNFi5EqBc%2BSIUSGKUZEVfbbYDBxjqORYB8x3nzx5caVGeRJgtkcLTi%2Bo9uPEQSiJxH4ap37GFvxWLOOVZ6u0looduF0YdVk4s02%2FHoQQ5E33fp4I4L%2FygAfa25EMekQGF7PO8N3x8hKf3o9toWpDj4bw5DGgYpepwjczYoxk7jz3NWIsfc4Fgqwh59cBOepBrZZd8%2Fdw0H4fzd2pJ4HV7P&X-Amz-Signature=43c4287142a6cc11753e1d82589321870da3712ceb5af0cbb28a39906c3b2df4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AATSXU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBS9kTvlThXoSVSVxhVjlg%2BdjJ8eTwJkDfoe%2F0qx2%2BdCAiBquHIxgjl4vhDB328Oj%2F%2FqsgEmAOwnxc0C22c60YnOyCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe3MyixHVZ%2BNeT4jeKtwDRg7pu0Ym0tEXTg7EfV%2Bb4dimT%2FFLJ5qIEFhng5AuEPCatDCHsKhzemqO4vUEFoon1wh9pDSm%2BdFcps2ja4iJ4kqZceBZdtD0jleAfS7xlpRTQ35Bt8s6ykbxthMKvCPUQ0%2BIgspY7uGix%2BTTlz9xO3qYt9oOwTA6TU7H6xGzmAbRAqA48HOD%2BXhkxSYFok1nMJenPkN4omiR22GiofweVC0tDR8qrua74se9%2FPzw3pKoHoMwN1sxc99P3b%2FzbPk6eOGyT9Kbin6lYeT6nbg0kJEeHdYi48ZupGuPkB5I4cv2lbBpPLLc6Vz0BxA8zUFl1vOnJdlcGfhIYR4KbARiwvhR0Y3XU5PB1eZhGrK09KjcE%2BcjRRYcAnG1NP0XWMVOJziEPWiZfad%2Bg2dyONEBCEwbqd7Wk0xcyTQ1bFXUzgdzMJTor2gruH0kiMxKH9knNqFp2yn5saApfrr9q6VmVBwHpZPcQqLUvBStu%2FV1r9DxWDh%2F7zTAebK79m3YFGOcbaYVnzzic5nRRG%2FFvfxiT2hiG3SwH6a38xnVyRgMRxvUQCo14iqnjgzjigK1UbV%2Bjdc6vkIIzxjI1T%2FSMiWDhSC%2Bi3PNH02oxVhKV7i3oY9LkvgcviTJu1V0G8Mw3eTwvgY6pgEATMRAqjLNFi5EqBc%2BSIUSGKUZEVfbbYDBxjqORYB8x3nzx5caVGeRJgtkcLTi%2Bo9uPEQSiJxH4ap37GFvxWLOOVZ6u0looduF0YdVk4s02%2FHoQQ5E33fp4I4L%2FygAfa25EMekQGF7PO8N3x8hKf3o9toWpDj4bw5DGgYpepwjczYoxk7jz3NWIsfc4Fgqwh59cBOepBrZZd8%2Fdw0H4fzd2pJ4HV7P&X-Amz-Signature=d459a8f3bba61910b08237af57a984991901583f24a9de65367fb658fc399e72&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AATSXU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBS9kTvlThXoSVSVxhVjlg%2BdjJ8eTwJkDfoe%2F0qx2%2BdCAiBquHIxgjl4vhDB328Oj%2F%2FqsgEmAOwnxc0C22c60YnOyCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe3MyixHVZ%2BNeT4jeKtwDRg7pu0Ym0tEXTg7EfV%2Bb4dimT%2FFLJ5qIEFhng5AuEPCatDCHsKhzemqO4vUEFoon1wh9pDSm%2BdFcps2ja4iJ4kqZceBZdtD0jleAfS7xlpRTQ35Bt8s6ykbxthMKvCPUQ0%2BIgspY7uGix%2BTTlz9xO3qYt9oOwTA6TU7H6xGzmAbRAqA48HOD%2BXhkxSYFok1nMJenPkN4omiR22GiofweVC0tDR8qrua74se9%2FPzw3pKoHoMwN1sxc99P3b%2FzbPk6eOGyT9Kbin6lYeT6nbg0kJEeHdYi48ZupGuPkB5I4cv2lbBpPLLc6Vz0BxA8zUFl1vOnJdlcGfhIYR4KbARiwvhR0Y3XU5PB1eZhGrK09KjcE%2BcjRRYcAnG1NP0XWMVOJziEPWiZfad%2Bg2dyONEBCEwbqd7Wk0xcyTQ1bFXUzgdzMJTor2gruH0kiMxKH9knNqFp2yn5saApfrr9q6VmVBwHpZPcQqLUvBStu%2FV1r9DxWDh%2F7zTAebK79m3YFGOcbaYVnzzic5nRRG%2FFvfxiT2hiG3SwH6a38xnVyRgMRxvUQCo14iqnjgzjigK1UbV%2Bjdc6vkIIzxjI1T%2FSMiWDhSC%2Bi3PNH02oxVhKV7i3oY9LkvgcviTJu1V0G8Mw3eTwvgY6pgEATMRAqjLNFi5EqBc%2BSIUSGKUZEVfbbYDBxjqORYB8x3nzx5caVGeRJgtkcLTi%2Bo9uPEQSiJxH4ap37GFvxWLOOVZ6u0looduF0YdVk4s02%2FHoQQ5E33fp4I4L%2FygAfa25EMekQGF7PO8N3x8hKf3o9toWpDj4bw5DGgYpepwjczYoxk7jz3NWIsfc4Fgqwh59cBOepBrZZd8%2Fdw0H4fzd2pJ4HV7P&X-Amz-Signature=539cb24fa2b43384ad24491cf9702ab1c53a1e3f89d1ef6365095ee44bd25665&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AATSXU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBS9kTvlThXoSVSVxhVjlg%2BdjJ8eTwJkDfoe%2F0qx2%2BdCAiBquHIxgjl4vhDB328Oj%2F%2FqsgEmAOwnxc0C22c60YnOyCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe3MyixHVZ%2BNeT4jeKtwDRg7pu0Ym0tEXTg7EfV%2Bb4dimT%2FFLJ5qIEFhng5AuEPCatDCHsKhzemqO4vUEFoon1wh9pDSm%2BdFcps2ja4iJ4kqZceBZdtD0jleAfS7xlpRTQ35Bt8s6ykbxthMKvCPUQ0%2BIgspY7uGix%2BTTlz9xO3qYt9oOwTA6TU7H6xGzmAbRAqA48HOD%2BXhkxSYFok1nMJenPkN4omiR22GiofweVC0tDR8qrua74se9%2FPzw3pKoHoMwN1sxc99P3b%2FzbPk6eOGyT9Kbin6lYeT6nbg0kJEeHdYi48ZupGuPkB5I4cv2lbBpPLLc6Vz0BxA8zUFl1vOnJdlcGfhIYR4KbARiwvhR0Y3XU5PB1eZhGrK09KjcE%2BcjRRYcAnG1NP0XWMVOJziEPWiZfad%2Bg2dyONEBCEwbqd7Wk0xcyTQ1bFXUzgdzMJTor2gruH0kiMxKH9knNqFp2yn5saApfrr9q6VmVBwHpZPcQqLUvBStu%2FV1r9DxWDh%2F7zTAebK79m3YFGOcbaYVnzzic5nRRG%2FFvfxiT2hiG3SwH6a38xnVyRgMRxvUQCo14iqnjgzjigK1UbV%2Bjdc6vkIIzxjI1T%2FSMiWDhSC%2Bi3PNH02oxVhKV7i3oY9LkvgcviTJu1V0G8Mw3eTwvgY6pgEATMRAqjLNFi5EqBc%2BSIUSGKUZEVfbbYDBxjqORYB8x3nzx5caVGeRJgtkcLTi%2Bo9uPEQSiJxH4ap37GFvxWLOOVZ6u0looduF0YdVk4s02%2FHoQQ5E33fp4I4L%2FygAfa25EMekQGF7PO8N3x8hKf3o9toWpDj4bw5DGgYpepwjczYoxk7jz3NWIsfc4Fgqwh59cBOepBrZZd8%2Fdw0H4fzd2pJ4HV7P&X-Amz-Signature=79445727ac70a19f760896a95424c8e0ba364b7bda1f2a36c5dbb2d01d37d982&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AATSXU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBS9kTvlThXoSVSVxhVjlg%2BdjJ8eTwJkDfoe%2F0qx2%2BdCAiBquHIxgjl4vhDB328Oj%2F%2FqsgEmAOwnxc0C22c60YnOyCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe3MyixHVZ%2BNeT4jeKtwDRg7pu0Ym0tEXTg7EfV%2Bb4dimT%2FFLJ5qIEFhng5AuEPCatDCHsKhzemqO4vUEFoon1wh9pDSm%2BdFcps2ja4iJ4kqZceBZdtD0jleAfS7xlpRTQ35Bt8s6ykbxthMKvCPUQ0%2BIgspY7uGix%2BTTlz9xO3qYt9oOwTA6TU7H6xGzmAbRAqA48HOD%2BXhkxSYFok1nMJenPkN4omiR22GiofweVC0tDR8qrua74se9%2FPzw3pKoHoMwN1sxc99P3b%2FzbPk6eOGyT9Kbin6lYeT6nbg0kJEeHdYi48ZupGuPkB5I4cv2lbBpPLLc6Vz0BxA8zUFl1vOnJdlcGfhIYR4KbARiwvhR0Y3XU5PB1eZhGrK09KjcE%2BcjRRYcAnG1NP0XWMVOJziEPWiZfad%2Bg2dyONEBCEwbqd7Wk0xcyTQ1bFXUzgdzMJTor2gruH0kiMxKH9knNqFp2yn5saApfrr9q6VmVBwHpZPcQqLUvBStu%2FV1r9DxWDh%2F7zTAebK79m3YFGOcbaYVnzzic5nRRG%2FFvfxiT2hiG3SwH6a38xnVyRgMRxvUQCo14iqnjgzjigK1UbV%2Bjdc6vkIIzxjI1T%2FSMiWDhSC%2Bi3PNH02oxVhKV7i3oY9LkvgcviTJu1V0G8Mw3eTwvgY6pgEATMRAqjLNFi5EqBc%2BSIUSGKUZEVfbbYDBxjqORYB8x3nzx5caVGeRJgtkcLTi%2Bo9uPEQSiJxH4ap37GFvxWLOOVZ6u0looduF0YdVk4s02%2FHoQQ5E33fp4I4L%2FygAfa25EMekQGF7PO8N3x8hKf3o9toWpDj4bw5DGgYpepwjczYoxk7jz3NWIsfc4Fgqwh59cBOepBrZZd8%2Fdw0H4fzd2pJ4HV7P&X-Amz-Signature=d9b6250515bfa7e56d86e9216b274d5113cc912d56f6b955f6bd31ea846bb0de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AATSXU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBS9kTvlThXoSVSVxhVjlg%2BdjJ8eTwJkDfoe%2F0qx2%2BdCAiBquHIxgjl4vhDB328Oj%2F%2FqsgEmAOwnxc0C22c60YnOyCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe3MyixHVZ%2BNeT4jeKtwDRg7pu0Ym0tEXTg7EfV%2Bb4dimT%2FFLJ5qIEFhng5AuEPCatDCHsKhzemqO4vUEFoon1wh9pDSm%2BdFcps2ja4iJ4kqZceBZdtD0jleAfS7xlpRTQ35Bt8s6ykbxthMKvCPUQ0%2BIgspY7uGix%2BTTlz9xO3qYt9oOwTA6TU7H6xGzmAbRAqA48HOD%2BXhkxSYFok1nMJenPkN4omiR22GiofweVC0tDR8qrua74se9%2FPzw3pKoHoMwN1sxc99P3b%2FzbPk6eOGyT9Kbin6lYeT6nbg0kJEeHdYi48ZupGuPkB5I4cv2lbBpPLLc6Vz0BxA8zUFl1vOnJdlcGfhIYR4KbARiwvhR0Y3XU5PB1eZhGrK09KjcE%2BcjRRYcAnG1NP0XWMVOJziEPWiZfad%2Bg2dyONEBCEwbqd7Wk0xcyTQ1bFXUzgdzMJTor2gruH0kiMxKH9knNqFp2yn5saApfrr9q6VmVBwHpZPcQqLUvBStu%2FV1r9DxWDh%2F7zTAebK79m3YFGOcbaYVnzzic5nRRG%2FFvfxiT2hiG3SwH6a38xnVyRgMRxvUQCo14iqnjgzjigK1UbV%2Bjdc6vkIIzxjI1T%2FSMiWDhSC%2Bi3PNH02oxVhKV7i3oY9LkvgcviTJu1V0G8Mw3eTwvgY6pgEATMRAqjLNFi5EqBc%2BSIUSGKUZEVfbbYDBxjqORYB8x3nzx5caVGeRJgtkcLTi%2Bo9uPEQSiJxH4ap37GFvxWLOOVZ6u0looduF0YdVk4s02%2FHoQQ5E33fp4I4L%2FygAfa25EMekQGF7PO8N3x8hKf3o9toWpDj4bw5DGgYpepwjczYoxk7jz3NWIsfc4Fgqwh59cBOepBrZZd8%2Fdw0H4fzd2pJ4HV7P&X-Amz-Signature=9783d4f4c0eaa966b138c4483c04e9c056bb7a013dc9710ae5a9e9fb9a00a5d4&X-Amz-SignedHeaders=host&x-id=GetObject)
