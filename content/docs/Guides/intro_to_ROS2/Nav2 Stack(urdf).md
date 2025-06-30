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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HE66R7W%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtvVC40BCdLlm7FEpBXKdQz5S6bmzR2dsggsxD9TnDAAiEAghx0iG7B0PzkmxEfyYrL7Ni5bwDB4Q3g%2B%2BifnHpMYCsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6NB93vq5YW33tgfCrcA2ZvbiHc5r3%2FO%2BcgYPQE6XLwkJ%2Bz6srYvthoPc3e%2BKupY5JAHIMiO7enbedJa54eBQly2MdzhH4XYQsVCeL8S50kObHO77rhb3FXXUOx9%2Bjlljeq2OkKx4Bd8Uk8FGVLUkqtBIAQjNxYzlXWTQtr0uqhk9%2F24zeMCaXJ%2F8GHam7Ymu16NsTj61%2BBz6P05JnKl0jE3pVxCfagQVW0eflQvTr4%2BeCkwRtAuPsgXwfUKtDUVQHgsutktRo97hJlq8stV9j842ax8g7x%2BM6kQbGpmcoxYooe%2F1d78drMotBbTu8wrhLTNLcRRQND9e00LMxoYrvN%2BmUUZf0NYtwJ34FdwFskrnvhTilwUHshfxiLgWi0X0J8Awbmrey%2BHCQ96Jiu%2Fz%2Bs8VqT6xvaSoOCetC%2BGLZApPEjkP3h7SRE7s%2F9bDUprXV0tO3TTRwDRlYikJOblQ2OojDZ1InP0nrdZYhzpNDQfPq7H6UMd9qLg%2BPlZRwHxFsU1j1%2BfE4sSaeNoXkcW5Cag1ZxWkFWxsFHwC42J47oShYbFid3OYWpl4lx4WU8w2c8YlMLwcDA9Z7dSTAfUZvoHe1UJZdO6SssBYWpfpHp%2BK12pnkgRzEoKInM4X03xmnwm28rOEtGJbYnMIjOicMGOqUBHb4burIIgKnA9ZvBmzq3b05b5sN86u9RWIVmXEW%2F4lnKkTwCM2yPrEDDDvi9ZQpLyY90SH7fSLtWIbEJF3EddeEFHh9cS%2F4xUKZ3MrL4XVj2WCkbnAgbLMJm6OxRZSWuGMoTMFPCbg6Poh8msjaPPZT8oJMp%2BFcdeup65w2hzeGJwndwB%2B3QyrXNZ60zAO%2B3%2FdvipNtFgZZJVT2hbHD8XiAqzJCD&X-Amz-Signature=059673fae810f2841c9040da304a26b51926e0778d0b106f8b2499defb18dfa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HE66R7W%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtvVC40BCdLlm7FEpBXKdQz5S6bmzR2dsggsxD9TnDAAiEAghx0iG7B0PzkmxEfyYrL7Ni5bwDB4Q3g%2B%2BifnHpMYCsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6NB93vq5YW33tgfCrcA2ZvbiHc5r3%2FO%2BcgYPQE6XLwkJ%2Bz6srYvthoPc3e%2BKupY5JAHIMiO7enbedJa54eBQly2MdzhH4XYQsVCeL8S50kObHO77rhb3FXXUOx9%2Bjlljeq2OkKx4Bd8Uk8FGVLUkqtBIAQjNxYzlXWTQtr0uqhk9%2F24zeMCaXJ%2F8GHam7Ymu16NsTj61%2BBz6P05JnKl0jE3pVxCfagQVW0eflQvTr4%2BeCkwRtAuPsgXwfUKtDUVQHgsutktRo97hJlq8stV9j842ax8g7x%2BM6kQbGpmcoxYooe%2F1d78drMotBbTu8wrhLTNLcRRQND9e00LMxoYrvN%2BmUUZf0NYtwJ34FdwFskrnvhTilwUHshfxiLgWi0X0J8Awbmrey%2BHCQ96Jiu%2Fz%2Bs8VqT6xvaSoOCetC%2BGLZApPEjkP3h7SRE7s%2F9bDUprXV0tO3TTRwDRlYikJOblQ2OojDZ1InP0nrdZYhzpNDQfPq7H6UMd9qLg%2BPlZRwHxFsU1j1%2BfE4sSaeNoXkcW5Cag1ZxWkFWxsFHwC42J47oShYbFid3OYWpl4lx4WU8w2c8YlMLwcDA9Z7dSTAfUZvoHe1UJZdO6SssBYWpfpHp%2BK12pnkgRzEoKInM4X03xmnwm28rOEtGJbYnMIjOicMGOqUBHb4burIIgKnA9ZvBmzq3b05b5sN86u9RWIVmXEW%2F4lnKkTwCM2yPrEDDDvi9ZQpLyY90SH7fSLtWIbEJF3EddeEFHh9cS%2F4xUKZ3MrL4XVj2WCkbnAgbLMJm6OxRZSWuGMoTMFPCbg6Poh8msjaPPZT8oJMp%2BFcdeup65w2hzeGJwndwB%2B3QyrXNZ60zAO%2B3%2FdvipNtFgZZJVT2hbHD8XiAqzJCD&X-Amz-Signature=b984f0e93834f71a246d3db77d0828d447001a9fe60795c21085d3ca458b530f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HE66R7W%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtvVC40BCdLlm7FEpBXKdQz5S6bmzR2dsggsxD9TnDAAiEAghx0iG7B0PzkmxEfyYrL7Ni5bwDB4Q3g%2B%2BifnHpMYCsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6NB93vq5YW33tgfCrcA2ZvbiHc5r3%2FO%2BcgYPQE6XLwkJ%2Bz6srYvthoPc3e%2BKupY5JAHIMiO7enbedJa54eBQly2MdzhH4XYQsVCeL8S50kObHO77rhb3FXXUOx9%2Bjlljeq2OkKx4Bd8Uk8FGVLUkqtBIAQjNxYzlXWTQtr0uqhk9%2F24zeMCaXJ%2F8GHam7Ymu16NsTj61%2BBz6P05JnKl0jE3pVxCfagQVW0eflQvTr4%2BeCkwRtAuPsgXwfUKtDUVQHgsutktRo97hJlq8stV9j842ax8g7x%2BM6kQbGpmcoxYooe%2F1d78drMotBbTu8wrhLTNLcRRQND9e00LMxoYrvN%2BmUUZf0NYtwJ34FdwFskrnvhTilwUHshfxiLgWi0X0J8Awbmrey%2BHCQ96Jiu%2Fz%2Bs8VqT6xvaSoOCetC%2BGLZApPEjkP3h7SRE7s%2F9bDUprXV0tO3TTRwDRlYikJOblQ2OojDZ1InP0nrdZYhzpNDQfPq7H6UMd9qLg%2BPlZRwHxFsU1j1%2BfE4sSaeNoXkcW5Cag1ZxWkFWxsFHwC42J47oShYbFid3OYWpl4lx4WU8w2c8YlMLwcDA9Z7dSTAfUZvoHe1UJZdO6SssBYWpfpHp%2BK12pnkgRzEoKInM4X03xmnwm28rOEtGJbYnMIjOicMGOqUBHb4burIIgKnA9ZvBmzq3b05b5sN86u9RWIVmXEW%2F4lnKkTwCM2yPrEDDDvi9ZQpLyY90SH7fSLtWIbEJF3EddeEFHh9cS%2F4xUKZ3MrL4XVj2WCkbnAgbLMJm6OxRZSWuGMoTMFPCbg6Poh8msjaPPZT8oJMp%2BFcdeup65w2hzeGJwndwB%2B3QyrXNZ60zAO%2B3%2FdvipNtFgZZJVT2hbHD8XiAqzJCD&X-Amz-Signature=5d9e6001c59cd7b2e1c7aad2f866558ef7095e01df7f2f1de60e871927a64e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HE66R7W%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtvVC40BCdLlm7FEpBXKdQz5S6bmzR2dsggsxD9TnDAAiEAghx0iG7B0PzkmxEfyYrL7Ni5bwDB4Q3g%2B%2BifnHpMYCsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6NB93vq5YW33tgfCrcA2ZvbiHc5r3%2FO%2BcgYPQE6XLwkJ%2Bz6srYvthoPc3e%2BKupY5JAHIMiO7enbedJa54eBQly2MdzhH4XYQsVCeL8S50kObHO77rhb3FXXUOx9%2Bjlljeq2OkKx4Bd8Uk8FGVLUkqtBIAQjNxYzlXWTQtr0uqhk9%2F24zeMCaXJ%2F8GHam7Ymu16NsTj61%2BBz6P05JnKl0jE3pVxCfagQVW0eflQvTr4%2BeCkwRtAuPsgXwfUKtDUVQHgsutktRo97hJlq8stV9j842ax8g7x%2BM6kQbGpmcoxYooe%2F1d78drMotBbTu8wrhLTNLcRRQND9e00LMxoYrvN%2BmUUZf0NYtwJ34FdwFskrnvhTilwUHshfxiLgWi0X0J8Awbmrey%2BHCQ96Jiu%2Fz%2Bs8VqT6xvaSoOCetC%2BGLZApPEjkP3h7SRE7s%2F9bDUprXV0tO3TTRwDRlYikJOblQ2OojDZ1InP0nrdZYhzpNDQfPq7H6UMd9qLg%2BPlZRwHxFsU1j1%2BfE4sSaeNoXkcW5Cag1ZxWkFWxsFHwC42J47oShYbFid3OYWpl4lx4WU8w2c8YlMLwcDA9Z7dSTAfUZvoHe1UJZdO6SssBYWpfpHp%2BK12pnkgRzEoKInM4X03xmnwm28rOEtGJbYnMIjOicMGOqUBHb4burIIgKnA9ZvBmzq3b05b5sN86u9RWIVmXEW%2F4lnKkTwCM2yPrEDDDvi9ZQpLyY90SH7fSLtWIbEJF3EddeEFHh9cS%2F4xUKZ3MrL4XVj2WCkbnAgbLMJm6OxRZSWuGMoTMFPCbg6Poh8msjaPPZT8oJMp%2BFcdeup65w2hzeGJwndwB%2B3QyrXNZ60zAO%2B3%2FdvipNtFgZZJVT2hbHD8XiAqzJCD&X-Amz-Signature=14da5591e6e9bbb182c5f4b2ca12f41dfce5766973e3a1fc9eb3320c8bf96fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HE66R7W%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtvVC40BCdLlm7FEpBXKdQz5S6bmzR2dsggsxD9TnDAAiEAghx0iG7B0PzkmxEfyYrL7Ni5bwDB4Q3g%2B%2BifnHpMYCsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6NB93vq5YW33tgfCrcA2ZvbiHc5r3%2FO%2BcgYPQE6XLwkJ%2Bz6srYvthoPc3e%2BKupY5JAHIMiO7enbedJa54eBQly2MdzhH4XYQsVCeL8S50kObHO77rhb3FXXUOx9%2Bjlljeq2OkKx4Bd8Uk8FGVLUkqtBIAQjNxYzlXWTQtr0uqhk9%2F24zeMCaXJ%2F8GHam7Ymu16NsTj61%2BBz6P05JnKl0jE3pVxCfagQVW0eflQvTr4%2BeCkwRtAuPsgXwfUKtDUVQHgsutktRo97hJlq8stV9j842ax8g7x%2BM6kQbGpmcoxYooe%2F1d78drMotBbTu8wrhLTNLcRRQND9e00LMxoYrvN%2BmUUZf0NYtwJ34FdwFskrnvhTilwUHshfxiLgWi0X0J8Awbmrey%2BHCQ96Jiu%2Fz%2Bs8VqT6xvaSoOCetC%2BGLZApPEjkP3h7SRE7s%2F9bDUprXV0tO3TTRwDRlYikJOblQ2OojDZ1InP0nrdZYhzpNDQfPq7H6UMd9qLg%2BPlZRwHxFsU1j1%2BfE4sSaeNoXkcW5Cag1ZxWkFWxsFHwC42J47oShYbFid3OYWpl4lx4WU8w2c8YlMLwcDA9Z7dSTAfUZvoHe1UJZdO6SssBYWpfpHp%2BK12pnkgRzEoKInM4X03xmnwm28rOEtGJbYnMIjOicMGOqUBHb4burIIgKnA9ZvBmzq3b05b5sN86u9RWIVmXEW%2F4lnKkTwCM2yPrEDDDvi9ZQpLyY90SH7fSLtWIbEJF3EddeEFHh9cS%2F4xUKZ3MrL4XVj2WCkbnAgbLMJm6OxRZSWuGMoTMFPCbg6Poh8msjaPPZT8oJMp%2BFcdeup65w2hzeGJwndwB%2B3QyrXNZ60zAO%2B3%2FdvipNtFgZZJVT2hbHD8XiAqzJCD&X-Amz-Signature=ce6bf1a09fa73b168cd10a5354839ab1c1dc64f95cf761e69239d811f5e0c639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HE66R7W%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtvVC40BCdLlm7FEpBXKdQz5S6bmzR2dsggsxD9TnDAAiEAghx0iG7B0PzkmxEfyYrL7Ni5bwDB4Q3g%2B%2BifnHpMYCsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6NB93vq5YW33tgfCrcA2ZvbiHc5r3%2FO%2BcgYPQE6XLwkJ%2Bz6srYvthoPc3e%2BKupY5JAHIMiO7enbedJa54eBQly2MdzhH4XYQsVCeL8S50kObHO77rhb3FXXUOx9%2Bjlljeq2OkKx4Bd8Uk8FGVLUkqtBIAQjNxYzlXWTQtr0uqhk9%2F24zeMCaXJ%2F8GHam7Ymu16NsTj61%2BBz6P05JnKl0jE3pVxCfagQVW0eflQvTr4%2BeCkwRtAuPsgXwfUKtDUVQHgsutktRo97hJlq8stV9j842ax8g7x%2BM6kQbGpmcoxYooe%2F1d78drMotBbTu8wrhLTNLcRRQND9e00LMxoYrvN%2BmUUZf0NYtwJ34FdwFskrnvhTilwUHshfxiLgWi0X0J8Awbmrey%2BHCQ96Jiu%2Fz%2Bs8VqT6xvaSoOCetC%2BGLZApPEjkP3h7SRE7s%2F9bDUprXV0tO3TTRwDRlYikJOblQ2OojDZ1InP0nrdZYhzpNDQfPq7H6UMd9qLg%2BPlZRwHxFsU1j1%2BfE4sSaeNoXkcW5Cag1ZxWkFWxsFHwC42J47oShYbFid3OYWpl4lx4WU8w2c8YlMLwcDA9Z7dSTAfUZvoHe1UJZdO6SssBYWpfpHp%2BK12pnkgRzEoKInM4X03xmnwm28rOEtGJbYnMIjOicMGOqUBHb4burIIgKnA9ZvBmzq3b05b5sN86u9RWIVmXEW%2F4lnKkTwCM2yPrEDDDvi9ZQpLyY90SH7fSLtWIbEJF3EddeEFHh9cS%2F4xUKZ3MrL4XVj2WCkbnAgbLMJm6OxRZSWuGMoTMFPCbg6Poh8msjaPPZT8oJMp%2BFcdeup65w2hzeGJwndwB%2B3QyrXNZ60zAO%2B3%2FdvipNtFgZZJVT2hbHD8XiAqzJCD&X-Amz-Signature=130b660ecdde93ecff26756fd3e96bec874102c82a37a19270ba25cc834270c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
