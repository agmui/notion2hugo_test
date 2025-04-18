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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JOLJUK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXiUT6Tw33ImBRfTz8MwtFAywy1jWA7dsIRvZ9Y4F6BAiEAs2gCK%2Fkft9mN%2BI4X%2FPKMZFYIzWFO7vYiIofavq4sZNMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCT5P28eeNjK%2FX8H2CrcA3rc2KFQa0Xgcv2QmGvuxQjmnJVztF8v5Fz0ixSvGeqpcuZHW5BbpV5gs3KLWn421eeD8G80yDmGxmcQPeACJdlvIFirX1MfcmZmNgwFhKrpo32EHpWJF1anDEAoFOuZzxDXRLGHP0HV5UxrC4BWDTiKYBAMrxGSm9RbZQK1MZVsmVSqX1R6QUOIJ0XQrwklDihTTUV8DnN2e3XGhFdRbyGK4RNOW7Scxj4Jq6rGVk66QmAHG2W58YBG042tiHY%2FjDNCcKg1gRCaBc9V58Df87P%2BRRGGl9Q8fEtga2k9NNevodamyZIEj3lVujx0tk9LsHDXmWZN2DWcbRFIrpS9McBrowKXq34ltipew81jq%2FJmt2kuGatvV%2Fh0YTaVZAENRD8Oz77BTqVRCbRsOB7nec8pKY3XiBXDYvgUW2C7m3OvWSSyzNRnVLgx1XypVZOJ1MIuH1FmyRH0ORV2nMLnTVPjTcX7wzrmyZL6hrs6%2BgCZSLl8Mf6xmTH2xJTHNToVS0pWiDh5mVJuX0ApzLu3DDHg5AE7h9H%2FzxOLTHw%2FoPN5j92SjUTDjsepTIsPzgegR6s%2Bwb4X9csosbDX8S6eKssnwnArcg9OYH%2FyDQhqAZLmqW86%2F9yIxbK2kkfDMJmph8AGOqUBOWUzgVVDogiD6hYtzvSLNf32UhB%2BdgoHGbU60u4dkaMUmf2hEKEGtREn6CyST7vgDJKjzumDX2u9XP2W4bOdzBBgZqkFAIXy%2BVoYH71dblgKqolc4aqHfiVxPjWcu7rUPuv93XO7NIPGvVWPtZhgky%2FCITaW74XRFXdo6TIsXAEBLo7I7rFxpc4UpfcPiHTaRtOzPhollF3a6c3TOdm%2FxpOdWpO2&X-Amz-Signature=1fb08895d6ff39b1c647c39d34b79af7c810117dc7e2409132ab9f91b6719bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JOLJUK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXiUT6Tw33ImBRfTz8MwtFAywy1jWA7dsIRvZ9Y4F6BAiEAs2gCK%2Fkft9mN%2BI4X%2FPKMZFYIzWFO7vYiIofavq4sZNMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCT5P28eeNjK%2FX8H2CrcA3rc2KFQa0Xgcv2QmGvuxQjmnJVztF8v5Fz0ixSvGeqpcuZHW5BbpV5gs3KLWn421eeD8G80yDmGxmcQPeACJdlvIFirX1MfcmZmNgwFhKrpo32EHpWJF1anDEAoFOuZzxDXRLGHP0HV5UxrC4BWDTiKYBAMrxGSm9RbZQK1MZVsmVSqX1R6QUOIJ0XQrwklDihTTUV8DnN2e3XGhFdRbyGK4RNOW7Scxj4Jq6rGVk66QmAHG2W58YBG042tiHY%2FjDNCcKg1gRCaBc9V58Df87P%2BRRGGl9Q8fEtga2k9NNevodamyZIEj3lVujx0tk9LsHDXmWZN2DWcbRFIrpS9McBrowKXq34ltipew81jq%2FJmt2kuGatvV%2Fh0YTaVZAENRD8Oz77BTqVRCbRsOB7nec8pKY3XiBXDYvgUW2C7m3OvWSSyzNRnVLgx1XypVZOJ1MIuH1FmyRH0ORV2nMLnTVPjTcX7wzrmyZL6hrs6%2BgCZSLl8Mf6xmTH2xJTHNToVS0pWiDh5mVJuX0ApzLu3DDHg5AE7h9H%2FzxOLTHw%2FoPN5j92SjUTDjsepTIsPzgegR6s%2Bwb4X9csosbDX8S6eKssnwnArcg9OYH%2FyDQhqAZLmqW86%2F9yIxbK2kkfDMJmph8AGOqUBOWUzgVVDogiD6hYtzvSLNf32UhB%2BdgoHGbU60u4dkaMUmf2hEKEGtREn6CyST7vgDJKjzumDX2u9XP2W4bOdzBBgZqkFAIXy%2BVoYH71dblgKqolc4aqHfiVxPjWcu7rUPuv93XO7NIPGvVWPtZhgky%2FCITaW74XRFXdo6TIsXAEBLo7I7rFxpc4UpfcPiHTaRtOzPhollF3a6c3TOdm%2FxpOdWpO2&X-Amz-Signature=f2a5de2d2a34d5089cfae7673f402f35b47aaab24c5f79c741a602c9d4249327&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JOLJUK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXiUT6Tw33ImBRfTz8MwtFAywy1jWA7dsIRvZ9Y4F6BAiEAs2gCK%2Fkft9mN%2BI4X%2FPKMZFYIzWFO7vYiIofavq4sZNMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCT5P28eeNjK%2FX8H2CrcA3rc2KFQa0Xgcv2QmGvuxQjmnJVztF8v5Fz0ixSvGeqpcuZHW5BbpV5gs3KLWn421eeD8G80yDmGxmcQPeACJdlvIFirX1MfcmZmNgwFhKrpo32EHpWJF1anDEAoFOuZzxDXRLGHP0HV5UxrC4BWDTiKYBAMrxGSm9RbZQK1MZVsmVSqX1R6QUOIJ0XQrwklDihTTUV8DnN2e3XGhFdRbyGK4RNOW7Scxj4Jq6rGVk66QmAHG2W58YBG042tiHY%2FjDNCcKg1gRCaBc9V58Df87P%2BRRGGl9Q8fEtga2k9NNevodamyZIEj3lVujx0tk9LsHDXmWZN2DWcbRFIrpS9McBrowKXq34ltipew81jq%2FJmt2kuGatvV%2Fh0YTaVZAENRD8Oz77BTqVRCbRsOB7nec8pKY3XiBXDYvgUW2C7m3OvWSSyzNRnVLgx1XypVZOJ1MIuH1FmyRH0ORV2nMLnTVPjTcX7wzrmyZL6hrs6%2BgCZSLl8Mf6xmTH2xJTHNToVS0pWiDh5mVJuX0ApzLu3DDHg5AE7h9H%2FzxOLTHw%2FoPN5j92SjUTDjsepTIsPzgegR6s%2Bwb4X9csosbDX8S6eKssnwnArcg9OYH%2FyDQhqAZLmqW86%2F9yIxbK2kkfDMJmph8AGOqUBOWUzgVVDogiD6hYtzvSLNf32UhB%2BdgoHGbU60u4dkaMUmf2hEKEGtREn6CyST7vgDJKjzumDX2u9XP2W4bOdzBBgZqkFAIXy%2BVoYH71dblgKqolc4aqHfiVxPjWcu7rUPuv93XO7NIPGvVWPtZhgky%2FCITaW74XRFXdo6TIsXAEBLo7I7rFxpc4UpfcPiHTaRtOzPhollF3a6c3TOdm%2FxpOdWpO2&X-Amz-Signature=e8fca4e503dc82c63f6c1a227d7d045250f9004c18d18cb4a76581bdb5f3b628&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JOLJUK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXiUT6Tw33ImBRfTz8MwtFAywy1jWA7dsIRvZ9Y4F6BAiEAs2gCK%2Fkft9mN%2BI4X%2FPKMZFYIzWFO7vYiIofavq4sZNMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCT5P28eeNjK%2FX8H2CrcA3rc2KFQa0Xgcv2QmGvuxQjmnJVztF8v5Fz0ixSvGeqpcuZHW5BbpV5gs3KLWn421eeD8G80yDmGxmcQPeACJdlvIFirX1MfcmZmNgwFhKrpo32EHpWJF1anDEAoFOuZzxDXRLGHP0HV5UxrC4BWDTiKYBAMrxGSm9RbZQK1MZVsmVSqX1R6QUOIJ0XQrwklDihTTUV8DnN2e3XGhFdRbyGK4RNOW7Scxj4Jq6rGVk66QmAHG2W58YBG042tiHY%2FjDNCcKg1gRCaBc9V58Df87P%2BRRGGl9Q8fEtga2k9NNevodamyZIEj3lVujx0tk9LsHDXmWZN2DWcbRFIrpS9McBrowKXq34ltipew81jq%2FJmt2kuGatvV%2Fh0YTaVZAENRD8Oz77BTqVRCbRsOB7nec8pKY3XiBXDYvgUW2C7m3OvWSSyzNRnVLgx1XypVZOJ1MIuH1FmyRH0ORV2nMLnTVPjTcX7wzrmyZL6hrs6%2BgCZSLl8Mf6xmTH2xJTHNToVS0pWiDh5mVJuX0ApzLu3DDHg5AE7h9H%2FzxOLTHw%2FoPN5j92SjUTDjsepTIsPzgegR6s%2Bwb4X9csosbDX8S6eKssnwnArcg9OYH%2FyDQhqAZLmqW86%2F9yIxbK2kkfDMJmph8AGOqUBOWUzgVVDogiD6hYtzvSLNf32UhB%2BdgoHGbU60u4dkaMUmf2hEKEGtREn6CyST7vgDJKjzumDX2u9XP2W4bOdzBBgZqkFAIXy%2BVoYH71dblgKqolc4aqHfiVxPjWcu7rUPuv93XO7NIPGvVWPtZhgky%2FCITaW74XRFXdo6TIsXAEBLo7I7rFxpc4UpfcPiHTaRtOzPhollF3a6c3TOdm%2FxpOdWpO2&X-Amz-Signature=1120dc6ed544e9d288438944e57fad5ab8c7739bbf0ab950ded93370ab247e23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JOLJUK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXiUT6Tw33ImBRfTz8MwtFAywy1jWA7dsIRvZ9Y4F6BAiEAs2gCK%2Fkft9mN%2BI4X%2FPKMZFYIzWFO7vYiIofavq4sZNMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCT5P28eeNjK%2FX8H2CrcA3rc2KFQa0Xgcv2QmGvuxQjmnJVztF8v5Fz0ixSvGeqpcuZHW5BbpV5gs3KLWn421eeD8G80yDmGxmcQPeACJdlvIFirX1MfcmZmNgwFhKrpo32EHpWJF1anDEAoFOuZzxDXRLGHP0HV5UxrC4BWDTiKYBAMrxGSm9RbZQK1MZVsmVSqX1R6QUOIJ0XQrwklDihTTUV8DnN2e3XGhFdRbyGK4RNOW7Scxj4Jq6rGVk66QmAHG2W58YBG042tiHY%2FjDNCcKg1gRCaBc9V58Df87P%2BRRGGl9Q8fEtga2k9NNevodamyZIEj3lVujx0tk9LsHDXmWZN2DWcbRFIrpS9McBrowKXq34ltipew81jq%2FJmt2kuGatvV%2Fh0YTaVZAENRD8Oz77BTqVRCbRsOB7nec8pKY3XiBXDYvgUW2C7m3OvWSSyzNRnVLgx1XypVZOJ1MIuH1FmyRH0ORV2nMLnTVPjTcX7wzrmyZL6hrs6%2BgCZSLl8Mf6xmTH2xJTHNToVS0pWiDh5mVJuX0ApzLu3DDHg5AE7h9H%2FzxOLTHw%2FoPN5j92SjUTDjsepTIsPzgegR6s%2Bwb4X9csosbDX8S6eKssnwnArcg9OYH%2FyDQhqAZLmqW86%2F9yIxbK2kkfDMJmph8AGOqUBOWUzgVVDogiD6hYtzvSLNf32UhB%2BdgoHGbU60u4dkaMUmf2hEKEGtREn6CyST7vgDJKjzumDX2u9XP2W4bOdzBBgZqkFAIXy%2BVoYH71dblgKqolc4aqHfiVxPjWcu7rUPuv93XO7NIPGvVWPtZhgky%2FCITaW74XRFXdo6TIsXAEBLo7I7rFxpc4UpfcPiHTaRtOzPhollF3a6c3TOdm%2FxpOdWpO2&X-Amz-Signature=587e378001364f724a447ccde56b458f340f0e53f88d1e7fcf2166b87e57f93d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JOLJUK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXiUT6Tw33ImBRfTz8MwtFAywy1jWA7dsIRvZ9Y4F6BAiEAs2gCK%2Fkft9mN%2BI4X%2FPKMZFYIzWFO7vYiIofavq4sZNMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCT5P28eeNjK%2FX8H2CrcA3rc2KFQa0Xgcv2QmGvuxQjmnJVztF8v5Fz0ixSvGeqpcuZHW5BbpV5gs3KLWn421eeD8G80yDmGxmcQPeACJdlvIFirX1MfcmZmNgwFhKrpo32EHpWJF1anDEAoFOuZzxDXRLGHP0HV5UxrC4BWDTiKYBAMrxGSm9RbZQK1MZVsmVSqX1R6QUOIJ0XQrwklDihTTUV8DnN2e3XGhFdRbyGK4RNOW7Scxj4Jq6rGVk66QmAHG2W58YBG042tiHY%2FjDNCcKg1gRCaBc9V58Df87P%2BRRGGl9Q8fEtga2k9NNevodamyZIEj3lVujx0tk9LsHDXmWZN2DWcbRFIrpS9McBrowKXq34ltipew81jq%2FJmt2kuGatvV%2Fh0YTaVZAENRD8Oz77BTqVRCbRsOB7nec8pKY3XiBXDYvgUW2C7m3OvWSSyzNRnVLgx1XypVZOJ1MIuH1FmyRH0ORV2nMLnTVPjTcX7wzrmyZL6hrs6%2BgCZSLl8Mf6xmTH2xJTHNToVS0pWiDh5mVJuX0ApzLu3DDHg5AE7h9H%2FzxOLTHw%2FoPN5j92SjUTDjsepTIsPzgegR6s%2Bwb4X9csosbDX8S6eKssnwnArcg9OYH%2FyDQhqAZLmqW86%2F9yIxbK2kkfDMJmph8AGOqUBOWUzgVVDogiD6hYtzvSLNf32UhB%2BdgoHGbU60u4dkaMUmf2hEKEGtREn6CyST7vgDJKjzumDX2u9XP2W4bOdzBBgZqkFAIXy%2BVoYH71dblgKqolc4aqHfiVxPjWcu7rUPuv93XO7NIPGvVWPtZhgky%2FCITaW74XRFXdo6TIsXAEBLo7I7rFxpc4UpfcPiHTaRtOzPhollF3a6c3TOdm%2FxpOdWpO2&X-Amz-Signature=768fd03128bb6fba2c615c2b337aede234de6cdf0543e3324ffac28a0b264d3f&X-Amz-SignedHeaders=host&x-id=GetObject)
