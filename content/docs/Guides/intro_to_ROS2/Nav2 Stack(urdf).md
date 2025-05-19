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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7NOM5C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOKxoVI75dNs0p7gaG3ieOtwEwXNyeibgFfFJNcQbTJAiEAiqTZkdLegXQ2x54pXWKTuWBCks%2BzcfCFxvUrXUYPkzMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEobWXVNpMoCmZ77QircA9tRyxAWlclnLIVM2YLmiX2RrxOUBIPUhpp76xJjvK1PbOhe8QxVD%2FypY5ZszwME1Iio23PcXMv%2FbzEtD0rRhTRwnihc%2B1hS6d7TIV1wo2tCujcnb%2FzxjA1iUqrZiseJFKBwkBHNyUCMyYifW%2FW4sbHELRg8in5NivrgB7qWzQ5u754vwSO1QL%2BDvlXzD2OsRav0xUP5a3sg1aac1D1yodDI6x7lxTP62uXZRMfbv%2F9c5U3wHpv74Bvo6HOkCuJTHt9IWyDdV8RVf1HDT3frqWT%2FgWjrP%2Bbc%2B4Sh2vf%2F1WfiCaF%2Bd3eUOXqoUDguMgdW7zl%2Fr9pUHZu3SkNkoekK07EkUaf4bGO3l4IpPJ2wyZbb2jwqY3ECmec2pVjJIxXK4M5wiqh78wr40V0hn%2FAozkufDmOm0KHPe6SjYWW%2FAKysnQqFJQhJfB55Slw6ZHZxZkYTKFob2%2BP6gw2E2QfE2GuRulV5GnbuDXfMdkM42bjFyKz1tdPKR2ZcS3FYV5ktl7%2BAws7LEntFWr6ED%2BSP9ji650QecfFx8dD%2BGPfgsVZjsQpk6u1qkiVElhlJQc3qC%2FYRlvn%2BXoeI%2BU48XtQQ0oDg53jwsAkB0Ja3z28tCh6pTExgpzXKczN9AplaMPqxrMEGOqUBEnJEcDw2g3tOMAfgT43FnxDb2cTfaWnsspp0VZMD%2FP1ONjEcdqHbGikH%2FWWSSYM5lhrtkwSwYI1RL%2BC3tOzt3VTP2G8zOWQ8%2Bl%2FR8sRu%2BYw54J8BnKsO5pR8wWPKreTv5AOUcXytvLtsZohNVNUfwN68FF5eAIPm5w57H7LW3kFKSAhLJZHrOcxTZYbsYB3kXPKGjykwE6%2BkDMEXtlPsC%2BZEe31y&X-Amz-Signature=8cfce66dbd1fda984660971e218ad6258e161862cf1b80297f0dbdf258d328ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7NOM5C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOKxoVI75dNs0p7gaG3ieOtwEwXNyeibgFfFJNcQbTJAiEAiqTZkdLegXQ2x54pXWKTuWBCks%2BzcfCFxvUrXUYPkzMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEobWXVNpMoCmZ77QircA9tRyxAWlclnLIVM2YLmiX2RrxOUBIPUhpp76xJjvK1PbOhe8QxVD%2FypY5ZszwME1Iio23PcXMv%2FbzEtD0rRhTRwnihc%2B1hS6d7TIV1wo2tCujcnb%2FzxjA1iUqrZiseJFKBwkBHNyUCMyYifW%2FW4sbHELRg8in5NivrgB7qWzQ5u754vwSO1QL%2BDvlXzD2OsRav0xUP5a3sg1aac1D1yodDI6x7lxTP62uXZRMfbv%2F9c5U3wHpv74Bvo6HOkCuJTHt9IWyDdV8RVf1HDT3frqWT%2FgWjrP%2Bbc%2B4Sh2vf%2F1WfiCaF%2Bd3eUOXqoUDguMgdW7zl%2Fr9pUHZu3SkNkoekK07EkUaf4bGO3l4IpPJ2wyZbb2jwqY3ECmec2pVjJIxXK4M5wiqh78wr40V0hn%2FAozkufDmOm0KHPe6SjYWW%2FAKysnQqFJQhJfB55Slw6ZHZxZkYTKFob2%2BP6gw2E2QfE2GuRulV5GnbuDXfMdkM42bjFyKz1tdPKR2ZcS3FYV5ktl7%2BAws7LEntFWr6ED%2BSP9ji650QecfFx8dD%2BGPfgsVZjsQpk6u1qkiVElhlJQc3qC%2FYRlvn%2BXoeI%2BU48XtQQ0oDg53jwsAkB0Ja3z28tCh6pTExgpzXKczN9AplaMPqxrMEGOqUBEnJEcDw2g3tOMAfgT43FnxDb2cTfaWnsspp0VZMD%2FP1ONjEcdqHbGikH%2FWWSSYM5lhrtkwSwYI1RL%2BC3tOzt3VTP2G8zOWQ8%2Bl%2FR8sRu%2BYw54J8BnKsO5pR8wWPKreTv5AOUcXytvLtsZohNVNUfwN68FF5eAIPm5w57H7LW3kFKSAhLJZHrOcxTZYbsYB3kXPKGjykwE6%2BkDMEXtlPsC%2BZEe31y&X-Amz-Signature=3660d7f4d37361715651532e6f50eabd1644dcd8163c2c6e2397d3ff66338f46&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7NOM5C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOKxoVI75dNs0p7gaG3ieOtwEwXNyeibgFfFJNcQbTJAiEAiqTZkdLegXQ2x54pXWKTuWBCks%2BzcfCFxvUrXUYPkzMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEobWXVNpMoCmZ77QircA9tRyxAWlclnLIVM2YLmiX2RrxOUBIPUhpp76xJjvK1PbOhe8QxVD%2FypY5ZszwME1Iio23PcXMv%2FbzEtD0rRhTRwnihc%2B1hS6d7TIV1wo2tCujcnb%2FzxjA1iUqrZiseJFKBwkBHNyUCMyYifW%2FW4sbHELRg8in5NivrgB7qWzQ5u754vwSO1QL%2BDvlXzD2OsRav0xUP5a3sg1aac1D1yodDI6x7lxTP62uXZRMfbv%2F9c5U3wHpv74Bvo6HOkCuJTHt9IWyDdV8RVf1HDT3frqWT%2FgWjrP%2Bbc%2B4Sh2vf%2F1WfiCaF%2Bd3eUOXqoUDguMgdW7zl%2Fr9pUHZu3SkNkoekK07EkUaf4bGO3l4IpPJ2wyZbb2jwqY3ECmec2pVjJIxXK4M5wiqh78wr40V0hn%2FAozkufDmOm0KHPe6SjYWW%2FAKysnQqFJQhJfB55Slw6ZHZxZkYTKFob2%2BP6gw2E2QfE2GuRulV5GnbuDXfMdkM42bjFyKz1tdPKR2ZcS3FYV5ktl7%2BAws7LEntFWr6ED%2BSP9ji650QecfFx8dD%2BGPfgsVZjsQpk6u1qkiVElhlJQc3qC%2FYRlvn%2BXoeI%2BU48XtQQ0oDg53jwsAkB0Ja3z28tCh6pTExgpzXKczN9AplaMPqxrMEGOqUBEnJEcDw2g3tOMAfgT43FnxDb2cTfaWnsspp0VZMD%2FP1ONjEcdqHbGikH%2FWWSSYM5lhrtkwSwYI1RL%2BC3tOzt3VTP2G8zOWQ8%2Bl%2FR8sRu%2BYw54J8BnKsO5pR8wWPKreTv5AOUcXytvLtsZohNVNUfwN68FF5eAIPm5w57H7LW3kFKSAhLJZHrOcxTZYbsYB3kXPKGjykwE6%2BkDMEXtlPsC%2BZEe31y&X-Amz-Signature=6eb101edd0b24406dd1ba69693b7f7ab676f8cdc595a118a60cd33e895df82d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7NOM5C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOKxoVI75dNs0p7gaG3ieOtwEwXNyeibgFfFJNcQbTJAiEAiqTZkdLegXQ2x54pXWKTuWBCks%2BzcfCFxvUrXUYPkzMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEobWXVNpMoCmZ77QircA9tRyxAWlclnLIVM2YLmiX2RrxOUBIPUhpp76xJjvK1PbOhe8QxVD%2FypY5ZszwME1Iio23PcXMv%2FbzEtD0rRhTRwnihc%2B1hS6d7TIV1wo2tCujcnb%2FzxjA1iUqrZiseJFKBwkBHNyUCMyYifW%2FW4sbHELRg8in5NivrgB7qWzQ5u754vwSO1QL%2BDvlXzD2OsRav0xUP5a3sg1aac1D1yodDI6x7lxTP62uXZRMfbv%2F9c5U3wHpv74Bvo6HOkCuJTHt9IWyDdV8RVf1HDT3frqWT%2FgWjrP%2Bbc%2B4Sh2vf%2F1WfiCaF%2Bd3eUOXqoUDguMgdW7zl%2Fr9pUHZu3SkNkoekK07EkUaf4bGO3l4IpPJ2wyZbb2jwqY3ECmec2pVjJIxXK4M5wiqh78wr40V0hn%2FAozkufDmOm0KHPe6SjYWW%2FAKysnQqFJQhJfB55Slw6ZHZxZkYTKFob2%2BP6gw2E2QfE2GuRulV5GnbuDXfMdkM42bjFyKz1tdPKR2ZcS3FYV5ktl7%2BAws7LEntFWr6ED%2BSP9ji650QecfFx8dD%2BGPfgsVZjsQpk6u1qkiVElhlJQc3qC%2FYRlvn%2BXoeI%2BU48XtQQ0oDg53jwsAkB0Ja3z28tCh6pTExgpzXKczN9AplaMPqxrMEGOqUBEnJEcDw2g3tOMAfgT43FnxDb2cTfaWnsspp0VZMD%2FP1ONjEcdqHbGikH%2FWWSSYM5lhrtkwSwYI1RL%2BC3tOzt3VTP2G8zOWQ8%2Bl%2FR8sRu%2BYw54J8BnKsO5pR8wWPKreTv5AOUcXytvLtsZohNVNUfwN68FF5eAIPm5w57H7LW3kFKSAhLJZHrOcxTZYbsYB3kXPKGjykwE6%2BkDMEXtlPsC%2BZEe31y&X-Amz-Signature=cda53ea95114e58bd4bebd956906d34645a6b9a05f7d0dc1a521cc1c49a5f929&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7NOM5C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOKxoVI75dNs0p7gaG3ieOtwEwXNyeibgFfFJNcQbTJAiEAiqTZkdLegXQ2x54pXWKTuWBCks%2BzcfCFxvUrXUYPkzMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEobWXVNpMoCmZ77QircA9tRyxAWlclnLIVM2YLmiX2RrxOUBIPUhpp76xJjvK1PbOhe8QxVD%2FypY5ZszwME1Iio23PcXMv%2FbzEtD0rRhTRwnihc%2B1hS6d7TIV1wo2tCujcnb%2FzxjA1iUqrZiseJFKBwkBHNyUCMyYifW%2FW4sbHELRg8in5NivrgB7qWzQ5u754vwSO1QL%2BDvlXzD2OsRav0xUP5a3sg1aac1D1yodDI6x7lxTP62uXZRMfbv%2F9c5U3wHpv74Bvo6HOkCuJTHt9IWyDdV8RVf1HDT3frqWT%2FgWjrP%2Bbc%2B4Sh2vf%2F1WfiCaF%2Bd3eUOXqoUDguMgdW7zl%2Fr9pUHZu3SkNkoekK07EkUaf4bGO3l4IpPJ2wyZbb2jwqY3ECmec2pVjJIxXK4M5wiqh78wr40V0hn%2FAozkufDmOm0KHPe6SjYWW%2FAKysnQqFJQhJfB55Slw6ZHZxZkYTKFob2%2BP6gw2E2QfE2GuRulV5GnbuDXfMdkM42bjFyKz1tdPKR2ZcS3FYV5ktl7%2BAws7LEntFWr6ED%2BSP9ji650QecfFx8dD%2BGPfgsVZjsQpk6u1qkiVElhlJQc3qC%2FYRlvn%2BXoeI%2BU48XtQQ0oDg53jwsAkB0Ja3z28tCh6pTExgpzXKczN9AplaMPqxrMEGOqUBEnJEcDw2g3tOMAfgT43FnxDb2cTfaWnsspp0VZMD%2FP1ONjEcdqHbGikH%2FWWSSYM5lhrtkwSwYI1RL%2BC3tOzt3VTP2G8zOWQ8%2Bl%2FR8sRu%2BYw54J8BnKsO5pR8wWPKreTv5AOUcXytvLtsZohNVNUfwN68FF5eAIPm5w57H7LW3kFKSAhLJZHrOcxTZYbsYB3kXPKGjykwE6%2BkDMEXtlPsC%2BZEe31y&X-Amz-Signature=9d10b027e37c072e0aa1fa7443214578924b4495b4402d14c429f503eeeca32b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7NOM5C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOKxoVI75dNs0p7gaG3ieOtwEwXNyeibgFfFJNcQbTJAiEAiqTZkdLegXQ2x54pXWKTuWBCks%2BzcfCFxvUrXUYPkzMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEobWXVNpMoCmZ77QircA9tRyxAWlclnLIVM2YLmiX2RrxOUBIPUhpp76xJjvK1PbOhe8QxVD%2FypY5ZszwME1Iio23PcXMv%2FbzEtD0rRhTRwnihc%2B1hS6d7TIV1wo2tCujcnb%2FzxjA1iUqrZiseJFKBwkBHNyUCMyYifW%2FW4sbHELRg8in5NivrgB7qWzQ5u754vwSO1QL%2BDvlXzD2OsRav0xUP5a3sg1aac1D1yodDI6x7lxTP62uXZRMfbv%2F9c5U3wHpv74Bvo6HOkCuJTHt9IWyDdV8RVf1HDT3frqWT%2FgWjrP%2Bbc%2B4Sh2vf%2F1WfiCaF%2Bd3eUOXqoUDguMgdW7zl%2Fr9pUHZu3SkNkoekK07EkUaf4bGO3l4IpPJ2wyZbb2jwqY3ECmec2pVjJIxXK4M5wiqh78wr40V0hn%2FAozkufDmOm0KHPe6SjYWW%2FAKysnQqFJQhJfB55Slw6ZHZxZkYTKFob2%2BP6gw2E2QfE2GuRulV5GnbuDXfMdkM42bjFyKz1tdPKR2ZcS3FYV5ktl7%2BAws7LEntFWr6ED%2BSP9ji650QecfFx8dD%2BGPfgsVZjsQpk6u1qkiVElhlJQc3qC%2FYRlvn%2BXoeI%2BU48XtQQ0oDg53jwsAkB0Ja3z28tCh6pTExgpzXKczN9AplaMPqxrMEGOqUBEnJEcDw2g3tOMAfgT43FnxDb2cTfaWnsspp0VZMD%2FP1ONjEcdqHbGikH%2FWWSSYM5lhrtkwSwYI1RL%2BC3tOzt3VTP2G8zOWQ8%2Bl%2FR8sRu%2BYw54J8BnKsO5pR8wWPKreTv5AOUcXytvLtsZohNVNUfwN68FF5eAIPm5w57H7LW3kFKSAhLJZHrOcxTZYbsYB3kXPKGjykwE6%2BkDMEXtlPsC%2BZEe31y&X-Amz-Signature=d5666047bd3fdadaf4fcc4b9250a473821a0831e6137c149b3f099a723ce44e9&X-Amz-SignedHeaders=host&x-id=GetObject)
