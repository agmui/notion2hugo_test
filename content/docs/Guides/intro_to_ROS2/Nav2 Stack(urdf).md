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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJM7NB6C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQ2RPOoM9ZZAaAY65Fg2MQy461DWqPRherqwTpjRFmRgIhAOrCTrYwuldOJINKm11hlbjpnEsAmp9jK6a7XWIQzGwAKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAHnrqEVMvNwbFM5Iq3AOOwZ5xFGdeinyYwqLMyFtlnOe403s%2Bhwd0RoaTGF2vefVSdILfeOQWKphqIR5h6kM2e6axZQ%2FmCJt%2FraPcO9bO4Vj61wstMZFnI2hdUV%2BdjZc25JI1adcG%2FBYFL%2B%2Bv0Fo68HkLVm8P54YvMAIxV5ftApueV3qBAYCZ1LLGgT3fsg%2FSa20TNP9uxhf7D6kQqOmS2p%2BB60JWo9RYTqcwJxj%2BYMd16Zbtb3I6W7kNRRQLvTkfenkvWzvHNB7%2FGPAIW3XpYaLO%2FZcyiHt%2B34VcLlQSyuRbQdLmZpvguVwVFddmmjJE%2F5XtLs2ygUWaEJJyjJxhdBx2P4z2Aeuz2XsemUHIU6nSCWEgnyBZu%2FyIuBf4xcL%2FZKs70FxSDbAUHSHdFTUf8EDFKLZ8GoqdIe%2Fy6HU07LbM09NInv9y90PFt3x8ePWMo58jBKIZe2%2FfOlCjCZckniiO2S8WBZNSF2teOGdkr%2Bheg%2BHjZXsQpwyHtRQtK2ihjNBJv5lP1XsPGgrd%2B6l8wLBPLliy8iCVWmPXtrd9vPO7BwAOYJEVjOZg37JbcaysQtM%2Bv3Pz1xbKimo1zKhOjGgPN27lcB9nQ9SJ78Zme1BA%2F44E4ORy%2Fckvxc%2BwSqC8sESk9vjN2hsCRDCCsPC%2FBjqkAZWo7WabuGIBIt%2BZso8vw%2Bqo%2Fb170dXRHzskja7nY9w6RNj6VoVK4HazG1bHzJY3M0ZASXHKhTkexb7xtlhKyjbdShXy%2FpauSVhK9UgAl0HtpQfodbcHlyba%2BqIdAk9E%2FuhiWZ%2FQ11RmaxP1VNfZOE1fs%2B3ubq25fEb7qnbW9jacd%2BrkWX8w1G%2F%2BAxX0WiUnllscSF7orq1JsXQgMpEVFY3uWUsy&X-Amz-Signature=c09c6a1afe9896e6b5d11a76305879bc7c16ab1112c80dfd24217f340f6158f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJM7NB6C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQ2RPOoM9ZZAaAY65Fg2MQy461DWqPRherqwTpjRFmRgIhAOrCTrYwuldOJINKm11hlbjpnEsAmp9jK6a7XWIQzGwAKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAHnrqEVMvNwbFM5Iq3AOOwZ5xFGdeinyYwqLMyFtlnOe403s%2Bhwd0RoaTGF2vefVSdILfeOQWKphqIR5h6kM2e6axZQ%2FmCJt%2FraPcO9bO4Vj61wstMZFnI2hdUV%2BdjZc25JI1adcG%2FBYFL%2B%2Bv0Fo68HkLVm8P54YvMAIxV5ftApueV3qBAYCZ1LLGgT3fsg%2FSa20TNP9uxhf7D6kQqOmS2p%2BB60JWo9RYTqcwJxj%2BYMd16Zbtb3I6W7kNRRQLvTkfenkvWzvHNB7%2FGPAIW3XpYaLO%2FZcyiHt%2B34VcLlQSyuRbQdLmZpvguVwVFddmmjJE%2F5XtLs2ygUWaEJJyjJxhdBx2P4z2Aeuz2XsemUHIU6nSCWEgnyBZu%2FyIuBf4xcL%2FZKs70FxSDbAUHSHdFTUf8EDFKLZ8GoqdIe%2Fy6HU07LbM09NInv9y90PFt3x8ePWMo58jBKIZe2%2FfOlCjCZckniiO2S8WBZNSF2teOGdkr%2Bheg%2BHjZXsQpwyHtRQtK2ihjNBJv5lP1XsPGgrd%2B6l8wLBPLliy8iCVWmPXtrd9vPO7BwAOYJEVjOZg37JbcaysQtM%2Bv3Pz1xbKimo1zKhOjGgPN27lcB9nQ9SJ78Zme1BA%2F44E4ORy%2Fckvxc%2BwSqC8sESk9vjN2hsCRDCCsPC%2FBjqkAZWo7WabuGIBIt%2BZso8vw%2Bqo%2Fb170dXRHzskja7nY9w6RNj6VoVK4HazG1bHzJY3M0ZASXHKhTkexb7xtlhKyjbdShXy%2FpauSVhK9UgAl0HtpQfodbcHlyba%2BqIdAk9E%2FuhiWZ%2FQ11RmaxP1VNfZOE1fs%2B3ubq25fEb7qnbW9jacd%2BrkWX8w1G%2F%2BAxX0WiUnllscSF7orq1JsXQgMpEVFY3uWUsy&X-Amz-Signature=9da4bf644e56a72efe0c3ed33b322a3b46b1eb7b8d761562de63c91508c0d2cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJM7NB6C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQ2RPOoM9ZZAaAY65Fg2MQy461DWqPRherqwTpjRFmRgIhAOrCTrYwuldOJINKm11hlbjpnEsAmp9jK6a7XWIQzGwAKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAHnrqEVMvNwbFM5Iq3AOOwZ5xFGdeinyYwqLMyFtlnOe403s%2Bhwd0RoaTGF2vefVSdILfeOQWKphqIR5h6kM2e6axZQ%2FmCJt%2FraPcO9bO4Vj61wstMZFnI2hdUV%2BdjZc25JI1adcG%2FBYFL%2B%2Bv0Fo68HkLVm8P54YvMAIxV5ftApueV3qBAYCZ1LLGgT3fsg%2FSa20TNP9uxhf7D6kQqOmS2p%2BB60JWo9RYTqcwJxj%2BYMd16Zbtb3I6W7kNRRQLvTkfenkvWzvHNB7%2FGPAIW3XpYaLO%2FZcyiHt%2B34VcLlQSyuRbQdLmZpvguVwVFddmmjJE%2F5XtLs2ygUWaEJJyjJxhdBx2P4z2Aeuz2XsemUHIU6nSCWEgnyBZu%2FyIuBf4xcL%2FZKs70FxSDbAUHSHdFTUf8EDFKLZ8GoqdIe%2Fy6HU07LbM09NInv9y90PFt3x8ePWMo58jBKIZe2%2FfOlCjCZckniiO2S8WBZNSF2teOGdkr%2Bheg%2BHjZXsQpwyHtRQtK2ihjNBJv5lP1XsPGgrd%2B6l8wLBPLliy8iCVWmPXtrd9vPO7BwAOYJEVjOZg37JbcaysQtM%2Bv3Pz1xbKimo1zKhOjGgPN27lcB9nQ9SJ78Zme1BA%2F44E4ORy%2Fckvxc%2BwSqC8sESk9vjN2hsCRDCCsPC%2FBjqkAZWo7WabuGIBIt%2BZso8vw%2Bqo%2Fb170dXRHzskja7nY9w6RNj6VoVK4HazG1bHzJY3M0ZASXHKhTkexb7xtlhKyjbdShXy%2FpauSVhK9UgAl0HtpQfodbcHlyba%2BqIdAk9E%2FuhiWZ%2FQ11RmaxP1VNfZOE1fs%2B3ubq25fEb7qnbW9jacd%2BrkWX8w1G%2F%2BAxX0WiUnllscSF7orq1JsXQgMpEVFY3uWUsy&X-Amz-Signature=dc8a2169c59f5510b280b6f4ed36caad7c9c2523779f80c382f62a169bb8a35a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJM7NB6C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQ2RPOoM9ZZAaAY65Fg2MQy461DWqPRherqwTpjRFmRgIhAOrCTrYwuldOJINKm11hlbjpnEsAmp9jK6a7XWIQzGwAKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAHnrqEVMvNwbFM5Iq3AOOwZ5xFGdeinyYwqLMyFtlnOe403s%2Bhwd0RoaTGF2vefVSdILfeOQWKphqIR5h6kM2e6axZQ%2FmCJt%2FraPcO9bO4Vj61wstMZFnI2hdUV%2BdjZc25JI1adcG%2FBYFL%2B%2Bv0Fo68HkLVm8P54YvMAIxV5ftApueV3qBAYCZ1LLGgT3fsg%2FSa20TNP9uxhf7D6kQqOmS2p%2BB60JWo9RYTqcwJxj%2BYMd16Zbtb3I6W7kNRRQLvTkfenkvWzvHNB7%2FGPAIW3XpYaLO%2FZcyiHt%2B34VcLlQSyuRbQdLmZpvguVwVFddmmjJE%2F5XtLs2ygUWaEJJyjJxhdBx2P4z2Aeuz2XsemUHIU6nSCWEgnyBZu%2FyIuBf4xcL%2FZKs70FxSDbAUHSHdFTUf8EDFKLZ8GoqdIe%2Fy6HU07LbM09NInv9y90PFt3x8ePWMo58jBKIZe2%2FfOlCjCZckniiO2S8WBZNSF2teOGdkr%2Bheg%2BHjZXsQpwyHtRQtK2ihjNBJv5lP1XsPGgrd%2B6l8wLBPLliy8iCVWmPXtrd9vPO7BwAOYJEVjOZg37JbcaysQtM%2Bv3Pz1xbKimo1zKhOjGgPN27lcB9nQ9SJ78Zme1BA%2F44E4ORy%2Fckvxc%2BwSqC8sESk9vjN2hsCRDCCsPC%2FBjqkAZWo7WabuGIBIt%2BZso8vw%2Bqo%2Fb170dXRHzskja7nY9w6RNj6VoVK4HazG1bHzJY3M0ZASXHKhTkexb7xtlhKyjbdShXy%2FpauSVhK9UgAl0HtpQfodbcHlyba%2BqIdAk9E%2FuhiWZ%2FQ11RmaxP1VNfZOE1fs%2B3ubq25fEb7qnbW9jacd%2BrkWX8w1G%2F%2BAxX0WiUnllscSF7orq1JsXQgMpEVFY3uWUsy&X-Amz-Signature=2f6982e5a71c73dd2e2c12fba65a91271ff7610e01a9a727e596f4185380edf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJM7NB6C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQ2RPOoM9ZZAaAY65Fg2MQy461DWqPRherqwTpjRFmRgIhAOrCTrYwuldOJINKm11hlbjpnEsAmp9jK6a7XWIQzGwAKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAHnrqEVMvNwbFM5Iq3AOOwZ5xFGdeinyYwqLMyFtlnOe403s%2Bhwd0RoaTGF2vefVSdILfeOQWKphqIR5h6kM2e6axZQ%2FmCJt%2FraPcO9bO4Vj61wstMZFnI2hdUV%2BdjZc25JI1adcG%2FBYFL%2B%2Bv0Fo68HkLVm8P54YvMAIxV5ftApueV3qBAYCZ1LLGgT3fsg%2FSa20TNP9uxhf7D6kQqOmS2p%2BB60JWo9RYTqcwJxj%2BYMd16Zbtb3I6W7kNRRQLvTkfenkvWzvHNB7%2FGPAIW3XpYaLO%2FZcyiHt%2B34VcLlQSyuRbQdLmZpvguVwVFddmmjJE%2F5XtLs2ygUWaEJJyjJxhdBx2P4z2Aeuz2XsemUHIU6nSCWEgnyBZu%2FyIuBf4xcL%2FZKs70FxSDbAUHSHdFTUf8EDFKLZ8GoqdIe%2Fy6HU07LbM09NInv9y90PFt3x8ePWMo58jBKIZe2%2FfOlCjCZckniiO2S8WBZNSF2teOGdkr%2Bheg%2BHjZXsQpwyHtRQtK2ihjNBJv5lP1XsPGgrd%2B6l8wLBPLliy8iCVWmPXtrd9vPO7BwAOYJEVjOZg37JbcaysQtM%2Bv3Pz1xbKimo1zKhOjGgPN27lcB9nQ9SJ78Zme1BA%2F44E4ORy%2Fckvxc%2BwSqC8sESk9vjN2hsCRDCCsPC%2FBjqkAZWo7WabuGIBIt%2BZso8vw%2Bqo%2Fb170dXRHzskja7nY9w6RNj6VoVK4HazG1bHzJY3M0ZASXHKhTkexb7xtlhKyjbdShXy%2FpauSVhK9UgAl0HtpQfodbcHlyba%2BqIdAk9E%2FuhiWZ%2FQ11RmaxP1VNfZOE1fs%2B3ubq25fEb7qnbW9jacd%2BrkWX8w1G%2F%2BAxX0WiUnllscSF7orq1JsXQgMpEVFY3uWUsy&X-Amz-Signature=35de269253b7d1a308e8787b208aeeedc06b519a7acac28e90abdfb27aa740b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJM7NB6C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQ2RPOoM9ZZAaAY65Fg2MQy461DWqPRherqwTpjRFmRgIhAOrCTrYwuldOJINKm11hlbjpnEsAmp9jK6a7XWIQzGwAKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAHnrqEVMvNwbFM5Iq3AOOwZ5xFGdeinyYwqLMyFtlnOe403s%2Bhwd0RoaTGF2vefVSdILfeOQWKphqIR5h6kM2e6axZQ%2FmCJt%2FraPcO9bO4Vj61wstMZFnI2hdUV%2BdjZc25JI1adcG%2FBYFL%2B%2Bv0Fo68HkLVm8P54YvMAIxV5ftApueV3qBAYCZ1LLGgT3fsg%2FSa20TNP9uxhf7D6kQqOmS2p%2BB60JWo9RYTqcwJxj%2BYMd16Zbtb3I6W7kNRRQLvTkfenkvWzvHNB7%2FGPAIW3XpYaLO%2FZcyiHt%2B34VcLlQSyuRbQdLmZpvguVwVFddmmjJE%2F5XtLs2ygUWaEJJyjJxhdBx2P4z2Aeuz2XsemUHIU6nSCWEgnyBZu%2FyIuBf4xcL%2FZKs70FxSDbAUHSHdFTUf8EDFKLZ8GoqdIe%2Fy6HU07LbM09NInv9y90PFt3x8ePWMo58jBKIZe2%2FfOlCjCZckniiO2S8WBZNSF2teOGdkr%2Bheg%2BHjZXsQpwyHtRQtK2ihjNBJv5lP1XsPGgrd%2B6l8wLBPLliy8iCVWmPXtrd9vPO7BwAOYJEVjOZg37JbcaysQtM%2Bv3Pz1xbKimo1zKhOjGgPN27lcB9nQ9SJ78Zme1BA%2F44E4ORy%2Fckvxc%2BwSqC8sESk9vjN2hsCRDCCsPC%2FBjqkAZWo7WabuGIBIt%2BZso8vw%2Bqo%2Fb170dXRHzskja7nY9w6RNj6VoVK4HazG1bHzJY3M0ZASXHKhTkexb7xtlhKyjbdShXy%2FpauSVhK9UgAl0HtpQfodbcHlyba%2BqIdAk9E%2FuhiWZ%2FQ11RmaxP1VNfZOE1fs%2B3ubq25fEb7qnbW9jacd%2BrkWX8w1G%2F%2BAxX0WiUnllscSF7orq1JsXQgMpEVFY3uWUsy&X-Amz-Signature=77e21e42d07c911c8f36fde888549fae310d3c529c77b2835f0532437803b0e8&X-Amz-SignedHeaders=host&x-id=GetObject)
