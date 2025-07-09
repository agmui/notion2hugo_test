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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6CX272%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsBZY06tsIJyjn%2B19YRHfoaFkmNVRiiMdIdG8YTswdSAiEAqWfNhFGut1umWa3JO6VbLpzrMJ2GY6FyVRAsDQ2AnggqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKD5PrSw4rpklgf4JircA399xNxDQdrtsmoEdcEQNLrjAzPAFNRdsy%2FK8t3qK4D%2BEzn8RbVhlXXKi%2FPYkoFQsmkr3K1Eeaa4%2B7CrVdIxVjjpkybAZY2H5OudbBrqWLEnYGZwKBZBbIdoTMqprm8pX1QUFqnyIAkpdBWIqaixJnl39QspmQ7uV0tGNTJy5NDt8neSbWfTaBrlU%2FJc4ZlkpZa3MaKUBFqbJA%2BwcwALMk6dEBSawssu%2FAfWhIGthgZgAgvzwROQo658jwm4FIgb9AAFvGKiiCaZYpfLGdDxxMV8G2ymsl4YIngNInwEVhTCQv7K0pHUU0CZl%2BAnZYNYk89Ld3PHG0DmEzKDi%2FPPtzlA0Ni%2FWcftNmMh8VFG4VoAQLRQOr39DiV3pcuEBCwRTpdmhnRfkYytpReUlkWZ9%2FdKC1rgvymA%2BmU9wLELbk5vk3dNKzUC%2BA8FPoo7WtLc0QrZrxWBGXFZS2a3BoA%2FfbHNw08xpj3CW3W0fTEbjvZBAsceBXQVCQTEa%2FCwzahXUduBFlGyvycUeRk6HdBoumleoPfQ3qgpOfVMDPaqCRiRO2vtDuOj7gP%2BgHBM9eZV9BnuHXG2PoGCVmIH%2B6jDFX45iv40EN8xZ3vb5Sv77V3Bc8Hmq88Nm354x1OVMNaLucMGOqUBhQjjQNXN0RHuv7K%2FB%2BOVK%2FTzY%2BrqN%2FABUI5Epjaj%2F8t7HwfQqo739ECSO1nSrn3ZKbHTQcHQjZtrSwiwZ8U8qCFCWgE7uaV1uWqhiQ2ya%2BmT7svZBOTOPtpavkKbxfLO7TD%2FQZu9acvC7atkijSPGzfGJeN5qQFkbp44TQxkJXNcCmgHMhAEWaq2mqeHf%2BBFAzycRJQvY8nL17oAzeh90viD64cI&X-Amz-Signature=cca09292c7a98499c1652d4ea8a1186f0a7652169ce5a26488502600b5ca73cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6CX272%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsBZY06tsIJyjn%2B19YRHfoaFkmNVRiiMdIdG8YTswdSAiEAqWfNhFGut1umWa3JO6VbLpzrMJ2GY6FyVRAsDQ2AnggqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKD5PrSw4rpklgf4JircA399xNxDQdrtsmoEdcEQNLrjAzPAFNRdsy%2FK8t3qK4D%2BEzn8RbVhlXXKi%2FPYkoFQsmkr3K1Eeaa4%2B7CrVdIxVjjpkybAZY2H5OudbBrqWLEnYGZwKBZBbIdoTMqprm8pX1QUFqnyIAkpdBWIqaixJnl39QspmQ7uV0tGNTJy5NDt8neSbWfTaBrlU%2FJc4ZlkpZa3MaKUBFqbJA%2BwcwALMk6dEBSawssu%2FAfWhIGthgZgAgvzwROQo658jwm4FIgb9AAFvGKiiCaZYpfLGdDxxMV8G2ymsl4YIngNInwEVhTCQv7K0pHUU0CZl%2BAnZYNYk89Ld3PHG0DmEzKDi%2FPPtzlA0Ni%2FWcftNmMh8VFG4VoAQLRQOr39DiV3pcuEBCwRTpdmhnRfkYytpReUlkWZ9%2FdKC1rgvymA%2BmU9wLELbk5vk3dNKzUC%2BA8FPoo7WtLc0QrZrxWBGXFZS2a3BoA%2FfbHNw08xpj3CW3W0fTEbjvZBAsceBXQVCQTEa%2FCwzahXUduBFlGyvycUeRk6HdBoumleoPfQ3qgpOfVMDPaqCRiRO2vtDuOj7gP%2BgHBM9eZV9BnuHXG2PoGCVmIH%2B6jDFX45iv40EN8xZ3vb5Sv77V3Bc8Hmq88Nm354x1OVMNaLucMGOqUBhQjjQNXN0RHuv7K%2FB%2BOVK%2FTzY%2BrqN%2FABUI5Epjaj%2F8t7HwfQqo739ECSO1nSrn3ZKbHTQcHQjZtrSwiwZ8U8qCFCWgE7uaV1uWqhiQ2ya%2BmT7svZBOTOPtpavkKbxfLO7TD%2FQZu9acvC7atkijSPGzfGJeN5qQFkbp44TQxkJXNcCmgHMhAEWaq2mqeHf%2BBFAzycRJQvY8nL17oAzeh90viD64cI&X-Amz-Signature=db11f40ef3b44c4d14ef776d3b48849b39f04773412da0105f255f576572a54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6CX272%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsBZY06tsIJyjn%2B19YRHfoaFkmNVRiiMdIdG8YTswdSAiEAqWfNhFGut1umWa3JO6VbLpzrMJ2GY6FyVRAsDQ2AnggqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKD5PrSw4rpklgf4JircA399xNxDQdrtsmoEdcEQNLrjAzPAFNRdsy%2FK8t3qK4D%2BEzn8RbVhlXXKi%2FPYkoFQsmkr3K1Eeaa4%2B7CrVdIxVjjpkybAZY2H5OudbBrqWLEnYGZwKBZBbIdoTMqprm8pX1QUFqnyIAkpdBWIqaixJnl39QspmQ7uV0tGNTJy5NDt8neSbWfTaBrlU%2FJc4ZlkpZa3MaKUBFqbJA%2BwcwALMk6dEBSawssu%2FAfWhIGthgZgAgvzwROQo658jwm4FIgb9AAFvGKiiCaZYpfLGdDxxMV8G2ymsl4YIngNInwEVhTCQv7K0pHUU0CZl%2BAnZYNYk89Ld3PHG0DmEzKDi%2FPPtzlA0Ni%2FWcftNmMh8VFG4VoAQLRQOr39DiV3pcuEBCwRTpdmhnRfkYytpReUlkWZ9%2FdKC1rgvymA%2BmU9wLELbk5vk3dNKzUC%2BA8FPoo7WtLc0QrZrxWBGXFZS2a3BoA%2FfbHNw08xpj3CW3W0fTEbjvZBAsceBXQVCQTEa%2FCwzahXUduBFlGyvycUeRk6HdBoumleoPfQ3qgpOfVMDPaqCRiRO2vtDuOj7gP%2BgHBM9eZV9BnuHXG2PoGCVmIH%2B6jDFX45iv40EN8xZ3vb5Sv77V3Bc8Hmq88Nm354x1OVMNaLucMGOqUBhQjjQNXN0RHuv7K%2FB%2BOVK%2FTzY%2BrqN%2FABUI5Epjaj%2F8t7HwfQqo739ECSO1nSrn3ZKbHTQcHQjZtrSwiwZ8U8qCFCWgE7uaV1uWqhiQ2ya%2BmT7svZBOTOPtpavkKbxfLO7TD%2FQZu9acvC7atkijSPGzfGJeN5qQFkbp44TQxkJXNcCmgHMhAEWaq2mqeHf%2BBFAzycRJQvY8nL17oAzeh90viD64cI&X-Amz-Signature=44a0e2272368d9a4abfb080d13dffd182fc9d0c779f99e3e55ebee128d3601d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6CX272%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsBZY06tsIJyjn%2B19YRHfoaFkmNVRiiMdIdG8YTswdSAiEAqWfNhFGut1umWa3JO6VbLpzrMJ2GY6FyVRAsDQ2AnggqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKD5PrSw4rpklgf4JircA399xNxDQdrtsmoEdcEQNLrjAzPAFNRdsy%2FK8t3qK4D%2BEzn8RbVhlXXKi%2FPYkoFQsmkr3K1Eeaa4%2B7CrVdIxVjjpkybAZY2H5OudbBrqWLEnYGZwKBZBbIdoTMqprm8pX1QUFqnyIAkpdBWIqaixJnl39QspmQ7uV0tGNTJy5NDt8neSbWfTaBrlU%2FJc4ZlkpZa3MaKUBFqbJA%2BwcwALMk6dEBSawssu%2FAfWhIGthgZgAgvzwROQo658jwm4FIgb9AAFvGKiiCaZYpfLGdDxxMV8G2ymsl4YIngNInwEVhTCQv7K0pHUU0CZl%2BAnZYNYk89Ld3PHG0DmEzKDi%2FPPtzlA0Ni%2FWcftNmMh8VFG4VoAQLRQOr39DiV3pcuEBCwRTpdmhnRfkYytpReUlkWZ9%2FdKC1rgvymA%2BmU9wLELbk5vk3dNKzUC%2BA8FPoo7WtLc0QrZrxWBGXFZS2a3BoA%2FfbHNw08xpj3CW3W0fTEbjvZBAsceBXQVCQTEa%2FCwzahXUduBFlGyvycUeRk6HdBoumleoPfQ3qgpOfVMDPaqCRiRO2vtDuOj7gP%2BgHBM9eZV9BnuHXG2PoGCVmIH%2B6jDFX45iv40EN8xZ3vb5Sv77V3Bc8Hmq88Nm354x1OVMNaLucMGOqUBhQjjQNXN0RHuv7K%2FB%2BOVK%2FTzY%2BrqN%2FABUI5Epjaj%2F8t7HwfQqo739ECSO1nSrn3ZKbHTQcHQjZtrSwiwZ8U8qCFCWgE7uaV1uWqhiQ2ya%2BmT7svZBOTOPtpavkKbxfLO7TD%2FQZu9acvC7atkijSPGzfGJeN5qQFkbp44TQxkJXNcCmgHMhAEWaq2mqeHf%2BBFAzycRJQvY8nL17oAzeh90viD64cI&X-Amz-Signature=f49555fd087e39ee4c2bc6b89436d1318dbd68a7630d0d65dfca2bc73fa4f339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6CX272%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsBZY06tsIJyjn%2B19YRHfoaFkmNVRiiMdIdG8YTswdSAiEAqWfNhFGut1umWa3JO6VbLpzrMJ2GY6FyVRAsDQ2AnggqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKD5PrSw4rpklgf4JircA399xNxDQdrtsmoEdcEQNLrjAzPAFNRdsy%2FK8t3qK4D%2BEzn8RbVhlXXKi%2FPYkoFQsmkr3K1Eeaa4%2B7CrVdIxVjjpkybAZY2H5OudbBrqWLEnYGZwKBZBbIdoTMqprm8pX1QUFqnyIAkpdBWIqaixJnl39QspmQ7uV0tGNTJy5NDt8neSbWfTaBrlU%2FJc4ZlkpZa3MaKUBFqbJA%2BwcwALMk6dEBSawssu%2FAfWhIGthgZgAgvzwROQo658jwm4FIgb9AAFvGKiiCaZYpfLGdDxxMV8G2ymsl4YIngNInwEVhTCQv7K0pHUU0CZl%2BAnZYNYk89Ld3PHG0DmEzKDi%2FPPtzlA0Ni%2FWcftNmMh8VFG4VoAQLRQOr39DiV3pcuEBCwRTpdmhnRfkYytpReUlkWZ9%2FdKC1rgvymA%2BmU9wLELbk5vk3dNKzUC%2BA8FPoo7WtLc0QrZrxWBGXFZS2a3BoA%2FfbHNw08xpj3CW3W0fTEbjvZBAsceBXQVCQTEa%2FCwzahXUduBFlGyvycUeRk6HdBoumleoPfQ3qgpOfVMDPaqCRiRO2vtDuOj7gP%2BgHBM9eZV9BnuHXG2PoGCVmIH%2B6jDFX45iv40EN8xZ3vb5Sv77V3Bc8Hmq88Nm354x1OVMNaLucMGOqUBhQjjQNXN0RHuv7K%2FB%2BOVK%2FTzY%2BrqN%2FABUI5Epjaj%2F8t7HwfQqo739ECSO1nSrn3ZKbHTQcHQjZtrSwiwZ8U8qCFCWgE7uaV1uWqhiQ2ya%2BmT7svZBOTOPtpavkKbxfLO7TD%2FQZu9acvC7atkijSPGzfGJeN5qQFkbp44TQxkJXNcCmgHMhAEWaq2mqeHf%2BBFAzycRJQvY8nL17oAzeh90viD64cI&X-Amz-Signature=066ea7b861cc5855137efff5131549c0cd550107090aefda6324ee12a5e0e3d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6CX272%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsBZY06tsIJyjn%2B19YRHfoaFkmNVRiiMdIdG8YTswdSAiEAqWfNhFGut1umWa3JO6VbLpzrMJ2GY6FyVRAsDQ2AnggqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKD5PrSw4rpklgf4JircA399xNxDQdrtsmoEdcEQNLrjAzPAFNRdsy%2FK8t3qK4D%2BEzn8RbVhlXXKi%2FPYkoFQsmkr3K1Eeaa4%2B7CrVdIxVjjpkybAZY2H5OudbBrqWLEnYGZwKBZBbIdoTMqprm8pX1QUFqnyIAkpdBWIqaixJnl39QspmQ7uV0tGNTJy5NDt8neSbWfTaBrlU%2FJc4ZlkpZa3MaKUBFqbJA%2BwcwALMk6dEBSawssu%2FAfWhIGthgZgAgvzwROQo658jwm4FIgb9AAFvGKiiCaZYpfLGdDxxMV8G2ymsl4YIngNInwEVhTCQv7K0pHUU0CZl%2BAnZYNYk89Ld3PHG0DmEzKDi%2FPPtzlA0Ni%2FWcftNmMh8VFG4VoAQLRQOr39DiV3pcuEBCwRTpdmhnRfkYytpReUlkWZ9%2FdKC1rgvymA%2BmU9wLELbk5vk3dNKzUC%2BA8FPoo7WtLc0QrZrxWBGXFZS2a3BoA%2FfbHNw08xpj3CW3W0fTEbjvZBAsceBXQVCQTEa%2FCwzahXUduBFlGyvycUeRk6HdBoumleoPfQ3qgpOfVMDPaqCRiRO2vtDuOj7gP%2BgHBM9eZV9BnuHXG2PoGCVmIH%2B6jDFX45iv40EN8xZ3vb5Sv77V3Bc8Hmq88Nm354x1OVMNaLucMGOqUBhQjjQNXN0RHuv7K%2FB%2BOVK%2FTzY%2BrqN%2FABUI5Epjaj%2F8t7HwfQqo739ECSO1nSrn3ZKbHTQcHQjZtrSwiwZ8U8qCFCWgE7uaV1uWqhiQ2ya%2BmT7svZBOTOPtpavkKbxfLO7TD%2FQZu9acvC7atkijSPGzfGJeN5qQFkbp44TQxkJXNcCmgHMhAEWaq2mqeHf%2BBFAzycRJQvY8nL17oAzeh90viD64cI&X-Amz-Signature=e7a84e78b097d0b9a216e581555fa2428f5f775da14373218344a1393e565408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
