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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOAFRYK3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlnVbWl4yxMks99UYC%2FqFHAgLMNJXJJBaDgi1yTSWUZAiEAoVCxCW%2FO%2FR9NL2Lx9vkKypjDY4c6kgy8nJA0sjsqztEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FXYa%2B73KHCRztz8yrcA%2B%2FChLnSIxmxPV%2FnnpVwSXaY2qtkU4sFbRUwT1Oj1E4UzXE%2FZKyHfP3U%2BuAmhtp5GmTFFfWKXnCj2W5ltvxoyINp65OpQtBSh%2FbKDTUXc219pVb1h8WmWb1CJHhSNzuuPnDOvBzTE1xlNWG7f%2BFCZ1xIQ3%2BCReRShGUyCX6NtffoEYy0xfLTTHxCRDqwmBH7vFqzhvWoutVm0wbWfERw0zJQBIqnf3%2B4vy9WPyR4Io5fmlS80ws%2BrHxRmC3PQs1Rul3bY%2Bl%2F8OmJpudRJg46ZvkeRIWKCrO1Z%2BTCfzARr0PTg4t4nuMekwSno2VcPonCUtN5geXGjcRX25R1vQQS886r4qyxnBXtfk3rHY8KK2fDy75BP%2BCMGjo%2FVXFZnzjVeLoYXPAd0CC3hKrU3i2cTUZYKfmS7A4p4B%2BpMoJBA9PS6H%2Bqum4NjHUe3LdPP%2BrI79TNKvdIfKVyYK16bEfKimAFFSxpzsFE38Rdbc55%2FiLlIN1vMZdKj7OIaeC3hReAfYiOrmNAbYKt0zUEHV6iKlf%2BojRPWa4zfohiN5P6moeqqAoX54VlPe4Fo%2BDMSO%2B6AIaElmzSDHICxo54wCfX8LFFnEX33LPmTIv%2FYqFarPscRhIjkkmHDFmOB4tLMPXb88MGOqUB4Ra%2F6d54Y04NDwvkdBlb7irm7ofDTr4AqmX%2B422r5ZDOG%2BgNcvjP7%2BXdIU2wo%2BcsJNVo9ueo2BI%2FnZhn4l7G40FDWmjThjlQV6BmyjYPbty6Q2kvmU41feymIWjparKWAT2EX7eI%2FW9FfpgmYrjiJfiyjc6uPjkBe8FGf%2BvvbYRa9bf9cNgqHkEL4p5JntBVWtiemkfBEg%2BGngT06G0bixDez09v&X-Amz-Signature=4e9cfd228e26e5066a8091306492aaa942c05619b09e53f2cf26d2941ab5916f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOAFRYK3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlnVbWl4yxMks99UYC%2FqFHAgLMNJXJJBaDgi1yTSWUZAiEAoVCxCW%2FO%2FR9NL2Lx9vkKypjDY4c6kgy8nJA0sjsqztEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FXYa%2B73KHCRztz8yrcA%2B%2FChLnSIxmxPV%2FnnpVwSXaY2qtkU4sFbRUwT1Oj1E4UzXE%2FZKyHfP3U%2BuAmhtp5GmTFFfWKXnCj2W5ltvxoyINp65OpQtBSh%2FbKDTUXc219pVb1h8WmWb1CJHhSNzuuPnDOvBzTE1xlNWG7f%2BFCZ1xIQ3%2BCReRShGUyCX6NtffoEYy0xfLTTHxCRDqwmBH7vFqzhvWoutVm0wbWfERw0zJQBIqnf3%2B4vy9WPyR4Io5fmlS80ws%2BrHxRmC3PQs1Rul3bY%2Bl%2F8OmJpudRJg46ZvkeRIWKCrO1Z%2BTCfzARr0PTg4t4nuMekwSno2VcPonCUtN5geXGjcRX25R1vQQS886r4qyxnBXtfk3rHY8KK2fDy75BP%2BCMGjo%2FVXFZnzjVeLoYXPAd0CC3hKrU3i2cTUZYKfmS7A4p4B%2BpMoJBA9PS6H%2Bqum4NjHUe3LdPP%2BrI79TNKvdIfKVyYK16bEfKimAFFSxpzsFE38Rdbc55%2FiLlIN1vMZdKj7OIaeC3hReAfYiOrmNAbYKt0zUEHV6iKlf%2BojRPWa4zfohiN5P6moeqqAoX54VlPe4Fo%2BDMSO%2B6AIaElmzSDHICxo54wCfX8LFFnEX33LPmTIv%2FYqFarPscRhIjkkmHDFmOB4tLMPXb88MGOqUB4Ra%2F6d54Y04NDwvkdBlb7irm7ofDTr4AqmX%2B422r5ZDOG%2BgNcvjP7%2BXdIU2wo%2BcsJNVo9ueo2BI%2FnZhn4l7G40FDWmjThjlQV6BmyjYPbty6Q2kvmU41feymIWjparKWAT2EX7eI%2FW9FfpgmYrjiJfiyjc6uPjkBe8FGf%2BvvbYRa9bf9cNgqHkEL4p5JntBVWtiemkfBEg%2BGngT06G0bixDez09v&X-Amz-Signature=822355e206ef7d83c384f88e43e5fbb88fabbeb424fcbbbba1c49098493eafc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOAFRYK3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlnVbWl4yxMks99UYC%2FqFHAgLMNJXJJBaDgi1yTSWUZAiEAoVCxCW%2FO%2FR9NL2Lx9vkKypjDY4c6kgy8nJA0sjsqztEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FXYa%2B73KHCRztz8yrcA%2B%2FChLnSIxmxPV%2FnnpVwSXaY2qtkU4sFbRUwT1Oj1E4UzXE%2FZKyHfP3U%2BuAmhtp5GmTFFfWKXnCj2W5ltvxoyINp65OpQtBSh%2FbKDTUXc219pVb1h8WmWb1CJHhSNzuuPnDOvBzTE1xlNWG7f%2BFCZ1xIQ3%2BCReRShGUyCX6NtffoEYy0xfLTTHxCRDqwmBH7vFqzhvWoutVm0wbWfERw0zJQBIqnf3%2B4vy9WPyR4Io5fmlS80ws%2BrHxRmC3PQs1Rul3bY%2Bl%2F8OmJpudRJg46ZvkeRIWKCrO1Z%2BTCfzARr0PTg4t4nuMekwSno2VcPonCUtN5geXGjcRX25R1vQQS886r4qyxnBXtfk3rHY8KK2fDy75BP%2BCMGjo%2FVXFZnzjVeLoYXPAd0CC3hKrU3i2cTUZYKfmS7A4p4B%2BpMoJBA9PS6H%2Bqum4NjHUe3LdPP%2BrI79TNKvdIfKVyYK16bEfKimAFFSxpzsFE38Rdbc55%2FiLlIN1vMZdKj7OIaeC3hReAfYiOrmNAbYKt0zUEHV6iKlf%2BojRPWa4zfohiN5P6moeqqAoX54VlPe4Fo%2BDMSO%2B6AIaElmzSDHICxo54wCfX8LFFnEX33LPmTIv%2FYqFarPscRhIjkkmHDFmOB4tLMPXb88MGOqUB4Ra%2F6d54Y04NDwvkdBlb7irm7ofDTr4AqmX%2B422r5ZDOG%2BgNcvjP7%2BXdIU2wo%2BcsJNVo9ueo2BI%2FnZhn4l7G40FDWmjThjlQV6BmyjYPbty6Q2kvmU41feymIWjparKWAT2EX7eI%2FW9FfpgmYrjiJfiyjc6uPjkBe8FGf%2BvvbYRa9bf9cNgqHkEL4p5JntBVWtiemkfBEg%2BGngT06G0bixDez09v&X-Amz-Signature=f14a61bf6339c327af7214a30f5d90e8cd8d415503cdcf66502d573d9e1efe76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOAFRYK3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlnVbWl4yxMks99UYC%2FqFHAgLMNJXJJBaDgi1yTSWUZAiEAoVCxCW%2FO%2FR9NL2Lx9vkKypjDY4c6kgy8nJA0sjsqztEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FXYa%2B73KHCRztz8yrcA%2B%2FChLnSIxmxPV%2FnnpVwSXaY2qtkU4sFbRUwT1Oj1E4UzXE%2FZKyHfP3U%2BuAmhtp5GmTFFfWKXnCj2W5ltvxoyINp65OpQtBSh%2FbKDTUXc219pVb1h8WmWb1CJHhSNzuuPnDOvBzTE1xlNWG7f%2BFCZ1xIQ3%2BCReRShGUyCX6NtffoEYy0xfLTTHxCRDqwmBH7vFqzhvWoutVm0wbWfERw0zJQBIqnf3%2B4vy9WPyR4Io5fmlS80ws%2BrHxRmC3PQs1Rul3bY%2Bl%2F8OmJpudRJg46ZvkeRIWKCrO1Z%2BTCfzARr0PTg4t4nuMekwSno2VcPonCUtN5geXGjcRX25R1vQQS886r4qyxnBXtfk3rHY8KK2fDy75BP%2BCMGjo%2FVXFZnzjVeLoYXPAd0CC3hKrU3i2cTUZYKfmS7A4p4B%2BpMoJBA9PS6H%2Bqum4NjHUe3LdPP%2BrI79TNKvdIfKVyYK16bEfKimAFFSxpzsFE38Rdbc55%2FiLlIN1vMZdKj7OIaeC3hReAfYiOrmNAbYKt0zUEHV6iKlf%2BojRPWa4zfohiN5P6moeqqAoX54VlPe4Fo%2BDMSO%2B6AIaElmzSDHICxo54wCfX8LFFnEX33LPmTIv%2FYqFarPscRhIjkkmHDFmOB4tLMPXb88MGOqUB4Ra%2F6d54Y04NDwvkdBlb7irm7ofDTr4AqmX%2B422r5ZDOG%2BgNcvjP7%2BXdIU2wo%2BcsJNVo9ueo2BI%2FnZhn4l7G40FDWmjThjlQV6BmyjYPbty6Q2kvmU41feymIWjparKWAT2EX7eI%2FW9FfpgmYrjiJfiyjc6uPjkBe8FGf%2BvvbYRa9bf9cNgqHkEL4p5JntBVWtiemkfBEg%2BGngT06G0bixDez09v&X-Amz-Signature=3eb90ab023694632e71cac802f67ac6f82cecb5d50834d4a1dc7c01a8f24d95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOAFRYK3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlnVbWl4yxMks99UYC%2FqFHAgLMNJXJJBaDgi1yTSWUZAiEAoVCxCW%2FO%2FR9NL2Lx9vkKypjDY4c6kgy8nJA0sjsqztEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FXYa%2B73KHCRztz8yrcA%2B%2FChLnSIxmxPV%2FnnpVwSXaY2qtkU4sFbRUwT1Oj1E4UzXE%2FZKyHfP3U%2BuAmhtp5GmTFFfWKXnCj2W5ltvxoyINp65OpQtBSh%2FbKDTUXc219pVb1h8WmWb1CJHhSNzuuPnDOvBzTE1xlNWG7f%2BFCZ1xIQ3%2BCReRShGUyCX6NtffoEYy0xfLTTHxCRDqwmBH7vFqzhvWoutVm0wbWfERw0zJQBIqnf3%2B4vy9WPyR4Io5fmlS80ws%2BrHxRmC3PQs1Rul3bY%2Bl%2F8OmJpudRJg46ZvkeRIWKCrO1Z%2BTCfzARr0PTg4t4nuMekwSno2VcPonCUtN5geXGjcRX25R1vQQS886r4qyxnBXtfk3rHY8KK2fDy75BP%2BCMGjo%2FVXFZnzjVeLoYXPAd0CC3hKrU3i2cTUZYKfmS7A4p4B%2BpMoJBA9PS6H%2Bqum4NjHUe3LdPP%2BrI79TNKvdIfKVyYK16bEfKimAFFSxpzsFE38Rdbc55%2FiLlIN1vMZdKj7OIaeC3hReAfYiOrmNAbYKt0zUEHV6iKlf%2BojRPWa4zfohiN5P6moeqqAoX54VlPe4Fo%2BDMSO%2B6AIaElmzSDHICxo54wCfX8LFFnEX33LPmTIv%2FYqFarPscRhIjkkmHDFmOB4tLMPXb88MGOqUB4Ra%2F6d54Y04NDwvkdBlb7irm7ofDTr4AqmX%2B422r5ZDOG%2BgNcvjP7%2BXdIU2wo%2BcsJNVo9ueo2BI%2FnZhn4l7G40FDWmjThjlQV6BmyjYPbty6Q2kvmU41feymIWjparKWAT2EX7eI%2FW9FfpgmYrjiJfiyjc6uPjkBe8FGf%2BvvbYRa9bf9cNgqHkEL4p5JntBVWtiemkfBEg%2BGngT06G0bixDez09v&X-Amz-Signature=f0ddfb35a97b2ec9c568a7f161d58ec37749ee96c843b6a18b560c36cb39bb6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOAFRYK3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlnVbWl4yxMks99UYC%2FqFHAgLMNJXJJBaDgi1yTSWUZAiEAoVCxCW%2FO%2FR9NL2Lx9vkKypjDY4c6kgy8nJA0sjsqztEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FXYa%2B73KHCRztz8yrcA%2B%2FChLnSIxmxPV%2FnnpVwSXaY2qtkU4sFbRUwT1Oj1E4UzXE%2FZKyHfP3U%2BuAmhtp5GmTFFfWKXnCj2W5ltvxoyINp65OpQtBSh%2FbKDTUXc219pVb1h8WmWb1CJHhSNzuuPnDOvBzTE1xlNWG7f%2BFCZ1xIQ3%2BCReRShGUyCX6NtffoEYy0xfLTTHxCRDqwmBH7vFqzhvWoutVm0wbWfERw0zJQBIqnf3%2B4vy9WPyR4Io5fmlS80ws%2BrHxRmC3PQs1Rul3bY%2Bl%2F8OmJpudRJg46ZvkeRIWKCrO1Z%2BTCfzARr0PTg4t4nuMekwSno2VcPonCUtN5geXGjcRX25R1vQQS886r4qyxnBXtfk3rHY8KK2fDy75BP%2BCMGjo%2FVXFZnzjVeLoYXPAd0CC3hKrU3i2cTUZYKfmS7A4p4B%2BpMoJBA9PS6H%2Bqum4NjHUe3LdPP%2BrI79TNKvdIfKVyYK16bEfKimAFFSxpzsFE38Rdbc55%2FiLlIN1vMZdKj7OIaeC3hReAfYiOrmNAbYKt0zUEHV6iKlf%2BojRPWa4zfohiN5P6moeqqAoX54VlPe4Fo%2BDMSO%2B6AIaElmzSDHICxo54wCfX8LFFnEX33LPmTIv%2FYqFarPscRhIjkkmHDFmOB4tLMPXb88MGOqUB4Ra%2F6d54Y04NDwvkdBlb7irm7ofDTr4AqmX%2B422r5ZDOG%2BgNcvjP7%2BXdIU2wo%2BcsJNVo9ueo2BI%2FnZhn4l7G40FDWmjThjlQV6BmyjYPbty6Q2kvmU41feymIWjparKWAT2EX7eI%2FW9FfpgmYrjiJfiyjc6uPjkBe8FGf%2BvvbYRa9bf9cNgqHkEL4p5JntBVWtiemkfBEg%2BGngT06G0bixDez09v&X-Amz-Signature=279aaa64dfbb49757655240945cd7d5f612504dd3d193680a1d5ca51c6651074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
