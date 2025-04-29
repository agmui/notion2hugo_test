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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MS4ZAEJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMkjyKRRZsvGupT2a4rzG5YSbMwsN7Vy6nSKWZ50ESvAIhANnLS%2FLG56n2KdkxYquPOPRZN69n%2F46ATA%2BtYt3TQQ3pKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqD3f%2BGAqZcuGFvyQq3AP3BbMAfyZl0wkv6ZnYHSMKqjFwe8gNdZWVberMTtG%2BMcfJ%2FHtBrqSMk6t9qMVc2nltLAHgzWr7EN943rB%2BoRK%2FtkcWOs88NlKQ%2B0F93D2VYhI4KPT1USxv5HLl5FN4RLB0AuhPkupcEZYbCZhhXUa%2FstWm%2Bb1Y5REgxSmfwulpjhpN1UspExsMRh7U3VMTDQ1n9dWmoDDriXY%2BSMOkBQcz290WyrTUw6l99lGeZta%2F17qvSH%2FJkVkmUv%2BVgh%2BzgGxfMuShodFaDZsu1hQI514%2Fajz7X3yNdwhPZu%2Bfi%2FM3m3YdkfPeViE4ia0rJnoQp1cxaASnmLe2RTqLYLmxmXDlIL06FohO7NebU8msbDh%2FBvGavmwGFmNyzZpnV%2FAN83S94v2gceob%2BDQMhXekTmPL9EPClhS2iHKF%2BSHA7OFEBVNSBShzyelPvNobyEr1CljdUprojRns9IrZHRIIWR4%2FR2gg3dHuD4ThzIHOtjpQ6WDaEMf4DiCWM2lsTGpqcnTBPoWZy1SOH%2FfkKXpQqTqPg4AHVUn6K0p12tqAt0%2Bewt%2F%2Fwq7NrA2XoRNnRXgNDJ7HOTKCMGaq2CRYQjSCN35mrqHI5acoWBYL38p2scgeI8MjTPL7m1NnaqRU4DDMrcTABjqkASxHqLcKVTQHy8umsr0jZJtVuyzYKbOkFlawbvz3ffpWQS9bRRLPsbcNoS8L3vpkzlfO6knMqexeOm04zGW82vB9k1x7pwhZyE30MNnNeGK84ynxl0k9dtRo0HaaD9eoKWrIYwZFs4vTMkuKDAW%2BS0GurU2IdEexrUDQDJPqW6ul7swOwmG8%2BtQ%2Fl2WSDwcR8CPfAe5rmDGazlUO1%2FbNyRqIxw%2F%2F&X-Amz-Signature=3a91370edcdc401fe0ee5643a2466213e1bfa27b7ea57a14f30817df2163c344&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MS4ZAEJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMkjyKRRZsvGupT2a4rzG5YSbMwsN7Vy6nSKWZ50ESvAIhANnLS%2FLG56n2KdkxYquPOPRZN69n%2F46ATA%2BtYt3TQQ3pKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqD3f%2BGAqZcuGFvyQq3AP3BbMAfyZl0wkv6ZnYHSMKqjFwe8gNdZWVberMTtG%2BMcfJ%2FHtBrqSMk6t9qMVc2nltLAHgzWr7EN943rB%2BoRK%2FtkcWOs88NlKQ%2B0F93D2VYhI4KPT1USxv5HLl5FN4RLB0AuhPkupcEZYbCZhhXUa%2FstWm%2Bb1Y5REgxSmfwulpjhpN1UspExsMRh7U3VMTDQ1n9dWmoDDriXY%2BSMOkBQcz290WyrTUw6l99lGeZta%2F17qvSH%2FJkVkmUv%2BVgh%2BzgGxfMuShodFaDZsu1hQI514%2Fajz7X3yNdwhPZu%2Bfi%2FM3m3YdkfPeViE4ia0rJnoQp1cxaASnmLe2RTqLYLmxmXDlIL06FohO7NebU8msbDh%2FBvGavmwGFmNyzZpnV%2FAN83S94v2gceob%2BDQMhXekTmPL9EPClhS2iHKF%2BSHA7OFEBVNSBShzyelPvNobyEr1CljdUprojRns9IrZHRIIWR4%2FR2gg3dHuD4ThzIHOtjpQ6WDaEMf4DiCWM2lsTGpqcnTBPoWZy1SOH%2FfkKXpQqTqPg4AHVUn6K0p12tqAt0%2Bewt%2F%2Fwq7NrA2XoRNnRXgNDJ7HOTKCMGaq2CRYQjSCN35mrqHI5acoWBYL38p2scgeI8MjTPL7m1NnaqRU4DDMrcTABjqkASxHqLcKVTQHy8umsr0jZJtVuyzYKbOkFlawbvz3ffpWQS9bRRLPsbcNoS8L3vpkzlfO6knMqexeOm04zGW82vB9k1x7pwhZyE30MNnNeGK84ynxl0k9dtRo0HaaD9eoKWrIYwZFs4vTMkuKDAW%2BS0GurU2IdEexrUDQDJPqW6ul7swOwmG8%2BtQ%2Fl2WSDwcR8CPfAe5rmDGazlUO1%2FbNyRqIxw%2F%2F&X-Amz-Signature=de3f9dc72818ba439cedd92f2300763705b18c374a7621d1e890fc4f2628e254&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MS4ZAEJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMkjyKRRZsvGupT2a4rzG5YSbMwsN7Vy6nSKWZ50ESvAIhANnLS%2FLG56n2KdkxYquPOPRZN69n%2F46ATA%2BtYt3TQQ3pKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqD3f%2BGAqZcuGFvyQq3AP3BbMAfyZl0wkv6ZnYHSMKqjFwe8gNdZWVberMTtG%2BMcfJ%2FHtBrqSMk6t9qMVc2nltLAHgzWr7EN943rB%2BoRK%2FtkcWOs88NlKQ%2B0F93D2VYhI4KPT1USxv5HLl5FN4RLB0AuhPkupcEZYbCZhhXUa%2FstWm%2Bb1Y5REgxSmfwulpjhpN1UspExsMRh7U3VMTDQ1n9dWmoDDriXY%2BSMOkBQcz290WyrTUw6l99lGeZta%2F17qvSH%2FJkVkmUv%2BVgh%2BzgGxfMuShodFaDZsu1hQI514%2Fajz7X3yNdwhPZu%2Bfi%2FM3m3YdkfPeViE4ia0rJnoQp1cxaASnmLe2RTqLYLmxmXDlIL06FohO7NebU8msbDh%2FBvGavmwGFmNyzZpnV%2FAN83S94v2gceob%2BDQMhXekTmPL9EPClhS2iHKF%2BSHA7OFEBVNSBShzyelPvNobyEr1CljdUprojRns9IrZHRIIWR4%2FR2gg3dHuD4ThzIHOtjpQ6WDaEMf4DiCWM2lsTGpqcnTBPoWZy1SOH%2FfkKXpQqTqPg4AHVUn6K0p12tqAt0%2Bewt%2F%2Fwq7NrA2XoRNnRXgNDJ7HOTKCMGaq2CRYQjSCN35mrqHI5acoWBYL38p2scgeI8MjTPL7m1NnaqRU4DDMrcTABjqkASxHqLcKVTQHy8umsr0jZJtVuyzYKbOkFlawbvz3ffpWQS9bRRLPsbcNoS8L3vpkzlfO6knMqexeOm04zGW82vB9k1x7pwhZyE30MNnNeGK84ynxl0k9dtRo0HaaD9eoKWrIYwZFs4vTMkuKDAW%2BS0GurU2IdEexrUDQDJPqW6ul7swOwmG8%2BtQ%2Fl2WSDwcR8CPfAe5rmDGazlUO1%2FbNyRqIxw%2F%2F&X-Amz-Signature=877b5b641e768836ac93ed7db3bd4dfe74151db04fd608b9204ff9c044923479&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MS4ZAEJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMkjyKRRZsvGupT2a4rzG5YSbMwsN7Vy6nSKWZ50ESvAIhANnLS%2FLG56n2KdkxYquPOPRZN69n%2F46ATA%2BtYt3TQQ3pKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqD3f%2BGAqZcuGFvyQq3AP3BbMAfyZl0wkv6ZnYHSMKqjFwe8gNdZWVberMTtG%2BMcfJ%2FHtBrqSMk6t9qMVc2nltLAHgzWr7EN943rB%2BoRK%2FtkcWOs88NlKQ%2B0F93D2VYhI4KPT1USxv5HLl5FN4RLB0AuhPkupcEZYbCZhhXUa%2FstWm%2Bb1Y5REgxSmfwulpjhpN1UspExsMRh7U3VMTDQ1n9dWmoDDriXY%2BSMOkBQcz290WyrTUw6l99lGeZta%2F17qvSH%2FJkVkmUv%2BVgh%2BzgGxfMuShodFaDZsu1hQI514%2Fajz7X3yNdwhPZu%2Bfi%2FM3m3YdkfPeViE4ia0rJnoQp1cxaASnmLe2RTqLYLmxmXDlIL06FohO7NebU8msbDh%2FBvGavmwGFmNyzZpnV%2FAN83S94v2gceob%2BDQMhXekTmPL9EPClhS2iHKF%2BSHA7OFEBVNSBShzyelPvNobyEr1CljdUprojRns9IrZHRIIWR4%2FR2gg3dHuD4ThzIHOtjpQ6WDaEMf4DiCWM2lsTGpqcnTBPoWZy1SOH%2FfkKXpQqTqPg4AHVUn6K0p12tqAt0%2Bewt%2F%2Fwq7NrA2XoRNnRXgNDJ7HOTKCMGaq2CRYQjSCN35mrqHI5acoWBYL38p2scgeI8MjTPL7m1NnaqRU4DDMrcTABjqkASxHqLcKVTQHy8umsr0jZJtVuyzYKbOkFlawbvz3ffpWQS9bRRLPsbcNoS8L3vpkzlfO6knMqexeOm04zGW82vB9k1x7pwhZyE30MNnNeGK84ynxl0k9dtRo0HaaD9eoKWrIYwZFs4vTMkuKDAW%2BS0GurU2IdEexrUDQDJPqW6ul7swOwmG8%2BtQ%2Fl2WSDwcR8CPfAe5rmDGazlUO1%2FbNyRqIxw%2F%2F&X-Amz-Signature=9a27f41846e9faa7485792b754a08678a5f3ba3a07dab10d890d0b04e78de0ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MS4ZAEJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMkjyKRRZsvGupT2a4rzG5YSbMwsN7Vy6nSKWZ50ESvAIhANnLS%2FLG56n2KdkxYquPOPRZN69n%2F46ATA%2BtYt3TQQ3pKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqD3f%2BGAqZcuGFvyQq3AP3BbMAfyZl0wkv6ZnYHSMKqjFwe8gNdZWVberMTtG%2BMcfJ%2FHtBrqSMk6t9qMVc2nltLAHgzWr7EN943rB%2BoRK%2FtkcWOs88NlKQ%2B0F93D2VYhI4KPT1USxv5HLl5FN4RLB0AuhPkupcEZYbCZhhXUa%2FstWm%2Bb1Y5REgxSmfwulpjhpN1UspExsMRh7U3VMTDQ1n9dWmoDDriXY%2BSMOkBQcz290WyrTUw6l99lGeZta%2F17qvSH%2FJkVkmUv%2BVgh%2BzgGxfMuShodFaDZsu1hQI514%2Fajz7X3yNdwhPZu%2Bfi%2FM3m3YdkfPeViE4ia0rJnoQp1cxaASnmLe2RTqLYLmxmXDlIL06FohO7NebU8msbDh%2FBvGavmwGFmNyzZpnV%2FAN83S94v2gceob%2BDQMhXekTmPL9EPClhS2iHKF%2BSHA7OFEBVNSBShzyelPvNobyEr1CljdUprojRns9IrZHRIIWR4%2FR2gg3dHuD4ThzIHOtjpQ6WDaEMf4DiCWM2lsTGpqcnTBPoWZy1SOH%2FfkKXpQqTqPg4AHVUn6K0p12tqAt0%2Bewt%2F%2Fwq7NrA2XoRNnRXgNDJ7HOTKCMGaq2CRYQjSCN35mrqHI5acoWBYL38p2scgeI8MjTPL7m1NnaqRU4DDMrcTABjqkASxHqLcKVTQHy8umsr0jZJtVuyzYKbOkFlawbvz3ffpWQS9bRRLPsbcNoS8L3vpkzlfO6knMqexeOm04zGW82vB9k1x7pwhZyE30MNnNeGK84ynxl0k9dtRo0HaaD9eoKWrIYwZFs4vTMkuKDAW%2BS0GurU2IdEexrUDQDJPqW6ul7swOwmG8%2BtQ%2Fl2WSDwcR8CPfAe5rmDGazlUO1%2FbNyRqIxw%2F%2F&X-Amz-Signature=68920c56198cb52619673d8859b8c20a4ee538bf926461f2b6c4cd5cce907eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MS4ZAEJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMkjyKRRZsvGupT2a4rzG5YSbMwsN7Vy6nSKWZ50ESvAIhANnLS%2FLG56n2KdkxYquPOPRZN69n%2F46ATA%2BtYt3TQQ3pKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqD3f%2BGAqZcuGFvyQq3AP3BbMAfyZl0wkv6ZnYHSMKqjFwe8gNdZWVberMTtG%2BMcfJ%2FHtBrqSMk6t9qMVc2nltLAHgzWr7EN943rB%2BoRK%2FtkcWOs88NlKQ%2B0F93D2VYhI4KPT1USxv5HLl5FN4RLB0AuhPkupcEZYbCZhhXUa%2FstWm%2Bb1Y5REgxSmfwulpjhpN1UspExsMRh7U3VMTDQ1n9dWmoDDriXY%2BSMOkBQcz290WyrTUw6l99lGeZta%2F17qvSH%2FJkVkmUv%2BVgh%2BzgGxfMuShodFaDZsu1hQI514%2Fajz7X3yNdwhPZu%2Bfi%2FM3m3YdkfPeViE4ia0rJnoQp1cxaASnmLe2RTqLYLmxmXDlIL06FohO7NebU8msbDh%2FBvGavmwGFmNyzZpnV%2FAN83S94v2gceob%2BDQMhXekTmPL9EPClhS2iHKF%2BSHA7OFEBVNSBShzyelPvNobyEr1CljdUprojRns9IrZHRIIWR4%2FR2gg3dHuD4ThzIHOtjpQ6WDaEMf4DiCWM2lsTGpqcnTBPoWZy1SOH%2FfkKXpQqTqPg4AHVUn6K0p12tqAt0%2Bewt%2F%2Fwq7NrA2XoRNnRXgNDJ7HOTKCMGaq2CRYQjSCN35mrqHI5acoWBYL38p2scgeI8MjTPL7m1NnaqRU4DDMrcTABjqkASxHqLcKVTQHy8umsr0jZJtVuyzYKbOkFlawbvz3ffpWQS9bRRLPsbcNoS8L3vpkzlfO6knMqexeOm04zGW82vB9k1x7pwhZyE30MNnNeGK84ynxl0k9dtRo0HaaD9eoKWrIYwZFs4vTMkuKDAW%2BS0GurU2IdEexrUDQDJPqW6ul7swOwmG8%2BtQ%2Fl2WSDwcR8CPfAe5rmDGazlUO1%2FbNyRqIxw%2F%2F&X-Amz-Signature=0b168d37ef479b97894955a7af043a401ccbf91b0786349b033a739ac1a57ce1&X-Amz-SignedHeaders=host&x-id=GetObject)
