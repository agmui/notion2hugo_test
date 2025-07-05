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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQW762C%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIArso%2FTH3H53upJ3stCBmSlysEzommKGaHiiibMSgmZcAiEAl062Y8uJuG9y%2FzQYENxKCfG0CYmGnhKN1VvqxXUV9IQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJFndp%2F8FYL0JzGoryrcA7dB%2FD9nHpY5jEmTfFLG5erj6sIvaLaU0G38lmrWqJN9VDLie2xznDe%2BAo9cK20z%2BANiAP%2FbedMHSNXajbbTAZfEeI7gQRfNM91JgKw7%2BYMCgDj8J3LJW5%2FkcxhdJ8rMdUyWmuY%2B6cks%2BTpTZmPmB8uqKDg1zIk9JrOltQVaUuaJgMTN1u9tHoFs0i5vZvBwDDAeWTH0q9FqiIz7yojEO%2F93L7PKx59YIsQYHpBAv7DTXDvuNb9R6VVO8WACniQuRqhy3M2v9sfJz2Kg9eLL64bK0K5FD8if9nSVtd3TZ6o6Urq1AgXbGrz5U%2F66yfxMynvM%2BktbOSU%2BUChlNY9HflYopM8Z0eiDf0eeh2cs7lVzpu%2FneM0wyuKhA%2FI%2BefL0t9bxgYCe8%2Fn8iVi966UqI0WoOxGSytyvC3b8AntR30MQkYpwL1B9IcMDl5HBrRIt62HdfOFQqhS3v2%2BvUtqhln4CYjUSx3Iq3lBrJu7f7MIA323JO2x2Jt8UMgVcTxgBcOmkMQ5p2AkB7HiOzbPAOnHB8Z6XZyLFcIJYVX9jeexVpkjEunrziTsHYn4%2FS7OESuqytb2KSeZJJozDpEedbmIv%2FH%2Fszil5R7hWSRlcN6UuYvgvCFMGgYTUJrK7MLqmo8MGOqUB5XNCtKt%2FenfksCntOoiXvOONER%2Feo5vCvghXKLdGmXs%2FmpMoYLPWUO%2F2xNzu0kTh1aKYHMCHNmiOQRYR7pTs%2BnTukNlhChe2SwAPqAdIQvRMpg6LlZNaoipGS5WN7VWduyMLEMhoX5DZZ%2Fdd3xxBwjIvU%2B6Bwpp4EL88%2FxX3pRru7meRBL3%2BhE1pJoK6A0FGlZRJV%2Bd0xLtFz7Pu6RuYL8VG45Xl&X-Amz-Signature=1e11ecd2f73365e0b3ea6fa8d732c4ed27c45ae252442e28fd3bab156c385e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQW762C%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIArso%2FTH3H53upJ3stCBmSlysEzommKGaHiiibMSgmZcAiEAl062Y8uJuG9y%2FzQYENxKCfG0CYmGnhKN1VvqxXUV9IQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJFndp%2F8FYL0JzGoryrcA7dB%2FD9nHpY5jEmTfFLG5erj6sIvaLaU0G38lmrWqJN9VDLie2xznDe%2BAo9cK20z%2BANiAP%2FbedMHSNXajbbTAZfEeI7gQRfNM91JgKw7%2BYMCgDj8J3LJW5%2FkcxhdJ8rMdUyWmuY%2B6cks%2BTpTZmPmB8uqKDg1zIk9JrOltQVaUuaJgMTN1u9tHoFs0i5vZvBwDDAeWTH0q9FqiIz7yojEO%2F93L7PKx59YIsQYHpBAv7DTXDvuNb9R6VVO8WACniQuRqhy3M2v9sfJz2Kg9eLL64bK0K5FD8if9nSVtd3TZ6o6Urq1AgXbGrz5U%2F66yfxMynvM%2BktbOSU%2BUChlNY9HflYopM8Z0eiDf0eeh2cs7lVzpu%2FneM0wyuKhA%2FI%2BefL0t9bxgYCe8%2Fn8iVi966UqI0WoOxGSytyvC3b8AntR30MQkYpwL1B9IcMDl5HBrRIt62HdfOFQqhS3v2%2BvUtqhln4CYjUSx3Iq3lBrJu7f7MIA323JO2x2Jt8UMgVcTxgBcOmkMQ5p2AkB7HiOzbPAOnHB8Z6XZyLFcIJYVX9jeexVpkjEunrziTsHYn4%2FS7OESuqytb2KSeZJJozDpEedbmIv%2FH%2Fszil5R7hWSRlcN6UuYvgvCFMGgYTUJrK7MLqmo8MGOqUB5XNCtKt%2FenfksCntOoiXvOONER%2Feo5vCvghXKLdGmXs%2FmpMoYLPWUO%2F2xNzu0kTh1aKYHMCHNmiOQRYR7pTs%2BnTukNlhChe2SwAPqAdIQvRMpg6LlZNaoipGS5WN7VWduyMLEMhoX5DZZ%2Fdd3xxBwjIvU%2B6Bwpp4EL88%2FxX3pRru7meRBL3%2BhE1pJoK6A0FGlZRJV%2Bd0xLtFz7Pu6RuYL8VG45Xl&X-Amz-Signature=e326904875e54f16e73e357373a802e58546f306eccbef1c4373d74398e9a0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQW762C%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIArso%2FTH3H53upJ3stCBmSlysEzommKGaHiiibMSgmZcAiEAl062Y8uJuG9y%2FzQYENxKCfG0CYmGnhKN1VvqxXUV9IQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJFndp%2F8FYL0JzGoryrcA7dB%2FD9nHpY5jEmTfFLG5erj6sIvaLaU0G38lmrWqJN9VDLie2xznDe%2BAo9cK20z%2BANiAP%2FbedMHSNXajbbTAZfEeI7gQRfNM91JgKw7%2BYMCgDj8J3LJW5%2FkcxhdJ8rMdUyWmuY%2B6cks%2BTpTZmPmB8uqKDg1zIk9JrOltQVaUuaJgMTN1u9tHoFs0i5vZvBwDDAeWTH0q9FqiIz7yojEO%2F93L7PKx59YIsQYHpBAv7DTXDvuNb9R6VVO8WACniQuRqhy3M2v9sfJz2Kg9eLL64bK0K5FD8if9nSVtd3TZ6o6Urq1AgXbGrz5U%2F66yfxMynvM%2BktbOSU%2BUChlNY9HflYopM8Z0eiDf0eeh2cs7lVzpu%2FneM0wyuKhA%2FI%2BefL0t9bxgYCe8%2Fn8iVi966UqI0WoOxGSytyvC3b8AntR30MQkYpwL1B9IcMDl5HBrRIt62HdfOFQqhS3v2%2BvUtqhln4CYjUSx3Iq3lBrJu7f7MIA323JO2x2Jt8UMgVcTxgBcOmkMQ5p2AkB7HiOzbPAOnHB8Z6XZyLFcIJYVX9jeexVpkjEunrziTsHYn4%2FS7OESuqytb2KSeZJJozDpEedbmIv%2FH%2Fszil5R7hWSRlcN6UuYvgvCFMGgYTUJrK7MLqmo8MGOqUB5XNCtKt%2FenfksCntOoiXvOONER%2Feo5vCvghXKLdGmXs%2FmpMoYLPWUO%2F2xNzu0kTh1aKYHMCHNmiOQRYR7pTs%2BnTukNlhChe2SwAPqAdIQvRMpg6LlZNaoipGS5WN7VWduyMLEMhoX5DZZ%2Fdd3xxBwjIvU%2B6Bwpp4EL88%2FxX3pRru7meRBL3%2BhE1pJoK6A0FGlZRJV%2Bd0xLtFz7Pu6RuYL8VG45Xl&X-Amz-Signature=9ef5ee0ebcb8de4086607dd1699fb486016d4af022dce7c592215c049696abaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQW762C%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIArso%2FTH3H53upJ3stCBmSlysEzommKGaHiiibMSgmZcAiEAl062Y8uJuG9y%2FzQYENxKCfG0CYmGnhKN1VvqxXUV9IQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJFndp%2F8FYL0JzGoryrcA7dB%2FD9nHpY5jEmTfFLG5erj6sIvaLaU0G38lmrWqJN9VDLie2xznDe%2BAo9cK20z%2BANiAP%2FbedMHSNXajbbTAZfEeI7gQRfNM91JgKw7%2BYMCgDj8J3LJW5%2FkcxhdJ8rMdUyWmuY%2B6cks%2BTpTZmPmB8uqKDg1zIk9JrOltQVaUuaJgMTN1u9tHoFs0i5vZvBwDDAeWTH0q9FqiIz7yojEO%2F93L7PKx59YIsQYHpBAv7DTXDvuNb9R6VVO8WACniQuRqhy3M2v9sfJz2Kg9eLL64bK0K5FD8if9nSVtd3TZ6o6Urq1AgXbGrz5U%2F66yfxMynvM%2BktbOSU%2BUChlNY9HflYopM8Z0eiDf0eeh2cs7lVzpu%2FneM0wyuKhA%2FI%2BefL0t9bxgYCe8%2Fn8iVi966UqI0WoOxGSytyvC3b8AntR30MQkYpwL1B9IcMDl5HBrRIt62HdfOFQqhS3v2%2BvUtqhln4CYjUSx3Iq3lBrJu7f7MIA323JO2x2Jt8UMgVcTxgBcOmkMQ5p2AkB7HiOzbPAOnHB8Z6XZyLFcIJYVX9jeexVpkjEunrziTsHYn4%2FS7OESuqytb2KSeZJJozDpEedbmIv%2FH%2Fszil5R7hWSRlcN6UuYvgvCFMGgYTUJrK7MLqmo8MGOqUB5XNCtKt%2FenfksCntOoiXvOONER%2Feo5vCvghXKLdGmXs%2FmpMoYLPWUO%2F2xNzu0kTh1aKYHMCHNmiOQRYR7pTs%2BnTukNlhChe2SwAPqAdIQvRMpg6LlZNaoipGS5WN7VWduyMLEMhoX5DZZ%2Fdd3xxBwjIvU%2B6Bwpp4EL88%2FxX3pRru7meRBL3%2BhE1pJoK6A0FGlZRJV%2Bd0xLtFz7Pu6RuYL8VG45Xl&X-Amz-Signature=6bb00d09815da2ba0c996aa54a21263987805d508c4741b86efa565a64802bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQW762C%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIArso%2FTH3H53upJ3stCBmSlysEzommKGaHiiibMSgmZcAiEAl062Y8uJuG9y%2FzQYENxKCfG0CYmGnhKN1VvqxXUV9IQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJFndp%2F8FYL0JzGoryrcA7dB%2FD9nHpY5jEmTfFLG5erj6sIvaLaU0G38lmrWqJN9VDLie2xznDe%2BAo9cK20z%2BANiAP%2FbedMHSNXajbbTAZfEeI7gQRfNM91JgKw7%2BYMCgDj8J3LJW5%2FkcxhdJ8rMdUyWmuY%2B6cks%2BTpTZmPmB8uqKDg1zIk9JrOltQVaUuaJgMTN1u9tHoFs0i5vZvBwDDAeWTH0q9FqiIz7yojEO%2F93L7PKx59YIsQYHpBAv7DTXDvuNb9R6VVO8WACniQuRqhy3M2v9sfJz2Kg9eLL64bK0K5FD8if9nSVtd3TZ6o6Urq1AgXbGrz5U%2F66yfxMynvM%2BktbOSU%2BUChlNY9HflYopM8Z0eiDf0eeh2cs7lVzpu%2FneM0wyuKhA%2FI%2BefL0t9bxgYCe8%2Fn8iVi966UqI0WoOxGSytyvC3b8AntR30MQkYpwL1B9IcMDl5HBrRIt62HdfOFQqhS3v2%2BvUtqhln4CYjUSx3Iq3lBrJu7f7MIA323JO2x2Jt8UMgVcTxgBcOmkMQ5p2AkB7HiOzbPAOnHB8Z6XZyLFcIJYVX9jeexVpkjEunrziTsHYn4%2FS7OESuqytb2KSeZJJozDpEedbmIv%2FH%2Fszil5R7hWSRlcN6UuYvgvCFMGgYTUJrK7MLqmo8MGOqUB5XNCtKt%2FenfksCntOoiXvOONER%2Feo5vCvghXKLdGmXs%2FmpMoYLPWUO%2F2xNzu0kTh1aKYHMCHNmiOQRYR7pTs%2BnTukNlhChe2SwAPqAdIQvRMpg6LlZNaoipGS5WN7VWduyMLEMhoX5DZZ%2Fdd3xxBwjIvU%2B6Bwpp4EL88%2FxX3pRru7meRBL3%2BhE1pJoK6A0FGlZRJV%2Bd0xLtFz7Pu6RuYL8VG45Xl&X-Amz-Signature=aa224b3003da8e161e549aebb44462dd8b60f0c044eb6ff1c9df1843be4478c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQW762C%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIArso%2FTH3H53upJ3stCBmSlysEzommKGaHiiibMSgmZcAiEAl062Y8uJuG9y%2FzQYENxKCfG0CYmGnhKN1VvqxXUV9IQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJFndp%2F8FYL0JzGoryrcA7dB%2FD9nHpY5jEmTfFLG5erj6sIvaLaU0G38lmrWqJN9VDLie2xznDe%2BAo9cK20z%2BANiAP%2FbedMHSNXajbbTAZfEeI7gQRfNM91JgKw7%2BYMCgDj8J3LJW5%2FkcxhdJ8rMdUyWmuY%2B6cks%2BTpTZmPmB8uqKDg1zIk9JrOltQVaUuaJgMTN1u9tHoFs0i5vZvBwDDAeWTH0q9FqiIz7yojEO%2F93L7PKx59YIsQYHpBAv7DTXDvuNb9R6VVO8WACniQuRqhy3M2v9sfJz2Kg9eLL64bK0K5FD8if9nSVtd3TZ6o6Urq1AgXbGrz5U%2F66yfxMynvM%2BktbOSU%2BUChlNY9HflYopM8Z0eiDf0eeh2cs7lVzpu%2FneM0wyuKhA%2FI%2BefL0t9bxgYCe8%2Fn8iVi966UqI0WoOxGSytyvC3b8AntR30MQkYpwL1B9IcMDl5HBrRIt62HdfOFQqhS3v2%2BvUtqhln4CYjUSx3Iq3lBrJu7f7MIA323JO2x2Jt8UMgVcTxgBcOmkMQ5p2AkB7HiOzbPAOnHB8Z6XZyLFcIJYVX9jeexVpkjEunrziTsHYn4%2FS7OESuqytb2KSeZJJozDpEedbmIv%2FH%2Fszil5R7hWSRlcN6UuYvgvCFMGgYTUJrK7MLqmo8MGOqUB5XNCtKt%2FenfksCntOoiXvOONER%2Feo5vCvghXKLdGmXs%2FmpMoYLPWUO%2F2xNzu0kTh1aKYHMCHNmiOQRYR7pTs%2BnTukNlhChe2SwAPqAdIQvRMpg6LlZNaoipGS5WN7VWduyMLEMhoX5DZZ%2Fdd3xxBwjIvU%2B6Bwpp4EL88%2FxX3pRru7meRBL3%2BhE1pJoK6A0FGlZRJV%2Bd0xLtFz7Pu6RuYL8VG45Xl&X-Amz-Signature=9c696cbd194da8108d875b5e4c23e14462f7df3eb38a074f9996d18b8387f076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
