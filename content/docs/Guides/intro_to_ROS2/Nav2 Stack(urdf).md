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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2LX7PY6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCraudJ1faJ4RppIL%2B1SAOHCxorziXBHDQkCTDK0nG5SQIgPnjbtS8saDkmz5ww9ks68I5ouGhrrWGNFN%2FLOJ7S%2BKcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDaANw%2Bh0ZQyALvtRyrcAzDBJcrUxfsj4g02tiG4EjZjAGzEHKSNkG%2BANipWHWpzs1S4p4WlrT7w10QwdgXvUM9MJdRywCYhc0Fs4tgtD%2FuRM8jvQyXCUUdN06aD5exywecIIy9dWJT8PrdCgWWU7nX1%2FfjV5p5%2B3%2BWMOgmRd45s4OCDdtuEIJ5pX8Jn56v4zptjlmfImDsdrLq%2FiTe3%2BcPmi3hOVk4veRduuqNq3GYYgsgUcTGF%2BG2rY3rwdtObKXu8mR1U3f9AyValSwiCzBjA%2FRhYElk5xFeogbxGs2QyfV4DaGPYSK%2BK73tgxuB3I7lbnIk1SNANPv6EvlJRKFUeAQGKrVFot9D7ROSKlfOH3iWuesr%2Fs2OMNjE2VDyD4VzDUh%2FblkPWVuXaOMM8UkTja5uzKM%2B1zW9fH02UqszIGNA%2F3OwCnAl7oR3GINQzbIOdokbP9qcdzmAjPbqZavikQgi7df5wB%2BsLYLorZzVqvRbedRUFx7SCCrYvzIiocLR2v4FxMWhTOxCnU2UqYYRm6mOwScBWZKzkBdoyeBHRhRqO2iKugyVwZeBJwwr4zcUI5MU%2BeCEBufMqYKEoSdy5K0J4zV1IMs4gl9UsItBsBivHEac9GTToW5woDJC2wYGXvx%2FXpLAbJfwNMIT%2BmcEGOqUBRmyZyPrecz%2FRAKTCqJw%2BeTlA0k5f%2FZz3ReMD%2B%2B63cE758XNgIgizjQx7%2Fh0xLky3Tdzh9W%2BmoSIHY3gKFsZfzHxG%2FHXftLwbJ%2BWCeZ%2BY4TXeLkqyMjSUKo7dX8Z3Y3RJFaFsrNRnkLIzjZaSix0GOLDm3PN3c8WFX100CjrQHNvKnpxgqtmiG51UX0f7bdiq8BaQ25%2BeVKr606L%2BtOCl27xCQEVH&X-Amz-Signature=094c66cfc70b07910361848d04ee526bb0fe322639bed9bed80219a5865bfc02&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2LX7PY6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCraudJ1faJ4RppIL%2B1SAOHCxorziXBHDQkCTDK0nG5SQIgPnjbtS8saDkmz5ww9ks68I5ouGhrrWGNFN%2FLOJ7S%2BKcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDaANw%2Bh0ZQyALvtRyrcAzDBJcrUxfsj4g02tiG4EjZjAGzEHKSNkG%2BANipWHWpzs1S4p4WlrT7w10QwdgXvUM9MJdRywCYhc0Fs4tgtD%2FuRM8jvQyXCUUdN06aD5exywecIIy9dWJT8PrdCgWWU7nX1%2FfjV5p5%2B3%2BWMOgmRd45s4OCDdtuEIJ5pX8Jn56v4zptjlmfImDsdrLq%2FiTe3%2BcPmi3hOVk4veRduuqNq3GYYgsgUcTGF%2BG2rY3rwdtObKXu8mR1U3f9AyValSwiCzBjA%2FRhYElk5xFeogbxGs2QyfV4DaGPYSK%2BK73tgxuB3I7lbnIk1SNANPv6EvlJRKFUeAQGKrVFot9D7ROSKlfOH3iWuesr%2Fs2OMNjE2VDyD4VzDUh%2FblkPWVuXaOMM8UkTja5uzKM%2B1zW9fH02UqszIGNA%2F3OwCnAl7oR3GINQzbIOdokbP9qcdzmAjPbqZavikQgi7df5wB%2BsLYLorZzVqvRbedRUFx7SCCrYvzIiocLR2v4FxMWhTOxCnU2UqYYRm6mOwScBWZKzkBdoyeBHRhRqO2iKugyVwZeBJwwr4zcUI5MU%2BeCEBufMqYKEoSdy5K0J4zV1IMs4gl9UsItBsBivHEac9GTToW5woDJC2wYGXvx%2FXpLAbJfwNMIT%2BmcEGOqUBRmyZyPrecz%2FRAKTCqJw%2BeTlA0k5f%2FZz3ReMD%2B%2B63cE758XNgIgizjQx7%2Fh0xLky3Tdzh9W%2BmoSIHY3gKFsZfzHxG%2FHXftLwbJ%2BWCeZ%2BY4TXeLkqyMjSUKo7dX8Z3Y3RJFaFsrNRnkLIzjZaSix0GOLDm3PN3c8WFX100CjrQHNvKnpxgqtmiG51UX0f7bdiq8BaQ25%2BeVKr606L%2BtOCl27xCQEVH&X-Amz-Signature=1990be4cac6ead3797571f4e48998cc47646367cf3c630fb8d8740dab2380263&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2LX7PY6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCraudJ1faJ4RppIL%2B1SAOHCxorziXBHDQkCTDK0nG5SQIgPnjbtS8saDkmz5ww9ks68I5ouGhrrWGNFN%2FLOJ7S%2BKcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDaANw%2Bh0ZQyALvtRyrcAzDBJcrUxfsj4g02tiG4EjZjAGzEHKSNkG%2BANipWHWpzs1S4p4WlrT7w10QwdgXvUM9MJdRywCYhc0Fs4tgtD%2FuRM8jvQyXCUUdN06aD5exywecIIy9dWJT8PrdCgWWU7nX1%2FfjV5p5%2B3%2BWMOgmRd45s4OCDdtuEIJ5pX8Jn56v4zptjlmfImDsdrLq%2FiTe3%2BcPmi3hOVk4veRduuqNq3GYYgsgUcTGF%2BG2rY3rwdtObKXu8mR1U3f9AyValSwiCzBjA%2FRhYElk5xFeogbxGs2QyfV4DaGPYSK%2BK73tgxuB3I7lbnIk1SNANPv6EvlJRKFUeAQGKrVFot9D7ROSKlfOH3iWuesr%2Fs2OMNjE2VDyD4VzDUh%2FblkPWVuXaOMM8UkTja5uzKM%2B1zW9fH02UqszIGNA%2F3OwCnAl7oR3GINQzbIOdokbP9qcdzmAjPbqZavikQgi7df5wB%2BsLYLorZzVqvRbedRUFx7SCCrYvzIiocLR2v4FxMWhTOxCnU2UqYYRm6mOwScBWZKzkBdoyeBHRhRqO2iKugyVwZeBJwwr4zcUI5MU%2BeCEBufMqYKEoSdy5K0J4zV1IMs4gl9UsItBsBivHEac9GTToW5woDJC2wYGXvx%2FXpLAbJfwNMIT%2BmcEGOqUBRmyZyPrecz%2FRAKTCqJw%2BeTlA0k5f%2FZz3ReMD%2B%2B63cE758XNgIgizjQx7%2Fh0xLky3Tdzh9W%2BmoSIHY3gKFsZfzHxG%2FHXftLwbJ%2BWCeZ%2BY4TXeLkqyMjSUKo7dX8Z3Y3RJFaFsrNRnkLIzjZaSix0GOLDm3PN3c8WFX100CjrQHNvKnpxgqtmiG51UX0f7bdiq8BaQ25%2BeVKr606L%2BtOCl27xCQEVH&X-Amz-Signature=4e9da1dc0c946662634f04e8b079637d9a5f9b578820495fd70cdeee6f9bebec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2LX7PY6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCraudJ1faJ4RppIL%2B1SAOHCxorziXBHDQkCTDK0nG5SQIgPnjbtS8saDkmz5ww9ks68I5ouGhrrWGNFN%2FLOJ7S%2BKcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDaANw%2Bh0ZQyALvtRyrcAzDBJcrUxfsj4g02tiG4EjZjAGzEHKSNkG%2BANipWHWpzs1S4p4WlrT7w10QwdgXvUM9MJdRywCYhc0Fs4tgtD%2FuRM8jvQyXCUUdN06aD5exywecIIy9dWJT8PrdCgWWU7nX1%2FfjV5p5%2B3%2BWMOgmRd45s4OCDdtuEIJ5pX8Jn56v4zptjlmfImDsdrLq%2FiTe3%2BcPmi3hOVk4veRduuqNq3GYYgsgUcTGF%2BG2rY3rwdtObKXu8mR1U3f9AyValSwiCzBjA%2FRhYElk5xFeogbxGs2QyfV4DaGPYSK%2BK73tgxuB3I7lbnIk1SNANPv6EvlJRKFUeAQGKrVFot9D7ROSKlfOH3iWuesr%2Fs2OMNjE2VDyD4VzDUh%2FblkPWVuXaOMM8UkTja5uzKM%2B1zW9fH02UqszIGNA%2F3OwCnAl7oR3GINQzbIOdokbP9qcdzmAjPbqZavikQgi7df5wB%2BsLYLorZzVqvRbedRUFx7SCCrYvzIiocLR2v4FxMWhTOxCnU2UqYYRm6mOwScBWZKzkBdoyeBHRhRqO2iKugyVwZeBJwwr4zcUI5MU%2BeCEBufMqYKEoSdy5K0J4zV1IMs4gl9UsItBsBivHEac9GTToW5woDJC2wYGXvx%2FXpLAbJfwNMIT%2BmcEGOqUBRmyZyPrecz%2FRAKTCqJw%2BeTlA0k5f%2FZz3ReMD%2B%2B63cE758XNgIgizjQx7%2Fh0xLky3Tdzh9W%2BmoSIHY3gKFsZfzHxG%2FHXftLwbJ%2BWCeZ%2BY4TXeLkqyMjSUKo7dX8Z3Y3RJFaFsrNRnkLIzjZaSix0GOLDm3PN3c8WFX100CjrQHNvKnpxgqtmiG51UX0f7bdiq8BaQ25%2BeVKr606L%2BtOCl27xCQEVH&X-Amz-Signature=8a2f5a982ce2245a7b8f0292644ded2f0e3fa99967dd115c302b9cd0c0f3e9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2LX7PY6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCraudJ1faJ4RppIL%2B1SAOHCxorziXBHDQkCTDK0nG5SQIgPnjbtS8saDkmz5ww9ks68I5ouGhrrWGNFN%2FLOJ7S%2BKcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDaANw%2Bh0ZQyALvtRyrcAzDBJcrUxfsj4g02tiG4EjZjAGzEHKSNkG%2BANipWHWpzs1S4p4WlrT7w10QwdgXvUM9MJdRywCYhc0Fs4tgtD%2FuRM8jvQyXCUUdN06aD5exywecIIy9dWJT8PrdCgWWU7nX1%2FfjV5p5%2B3%2BWMOgmRd45s4OCDdtuEIJ5pX8Jn56v4zptjlmfImDsdrLq%2FiTe3%2BcPmi3hOVk4veRduuqNq3GYYgsgUcTGF%2BG2rY3rwdtObKXu8mR1U3f9AyValSwiCzBjA%2FRhYElk5xFeogbxGs2QyfV4DaGPYSK%2BK73tgxuB3I7lbnIk1SNANPv6EvlJRKFUeAQGKrVFot9D7ROSKlfOH3iWuesr%2Fs2OMNjE2VDyD4VzDUh%2FblkPWVuXaOMM8UkTja5uzKM%2B1zW9fH02UqszIGNA%2F3OwCnAl7oR3GINQzbIOdokbP9qcdzmAjPbqZavikQgi7df5wB%2BsLYLorZzVqvRbedRUFx7SCCrYvzIiocLR2v4FxMWhTOxCnU2UqYYRm6mOwScBWZKzkBdoyeBHRhRqO2iKugyVwZeBJwwr4zcUI5MU%2BeCEBufMqYKEoSdy5K0J4zV1IMs4gl9UsItBsBivHEac9GTToW5woDJC2wYGXvx%2FXpLAbJfwNMIT%2BmcEGOqUBRmyZyPrecz%2FRAKTCqJw%2BeTlA0k5f%2FZz3ReMD%2B%2B63cE758XNgIgizjQx7%2Fh0xLky3Tdzh9W%2BmoSIHY3gKFsZfzHxG%2FHXftLwbJ%2BWCeZ%2BY4TXeLkqyMjSUKo7dX8Z3Y3RJFaFsrNRnkLIzjZaSix0GOLDm3PN3c8WFX100CjrQHNvKnpxgqtmiG51UX0f7bdiq8BaQ25%2BeVKr606L%2BtOCl27xCQEVH&X-Amz-Signature=81c5757d4d316d46c96361e8582e93640ea1217588e47ef70755179fe4ac179d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2LX7PY6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCraudJ1faJ4RppIL%2B1SAOHCxorziXBHDQkCTDK0nG5SQIgPnjbtS8saDkmz5ww9ks68I5ouGhrrWGNFN%2FLOJ7S%2BKcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDaANw%2Bh0ZQyALvtRyrcAzDBJcrUxfsj4g02tiG4EjZjAGzEHKSNkG%2BANipWHWpzs1S4p4WlrT7w10QwdgXvUM9MJdRywCYhc0Fs4tgtD%2FuRM8jvQyXCUUdN06aD5exywecIIy9dWJT8PrdCgWWU7nX1%2FfjV5p5%2B3%2BWMOgmRd45s4OCDdtuEIJ5pX8Jn56v4zptjlmfImDsdrLq%2FiTe3%2BcPmi3hOVk4veRduuqNq3GYYgsgUcTGF%2BG2rY3rwdtObKXu8mR1U3f9AyValSwiCzBjA%2FRhYElk5xFeogbxGs2QyfV4DaGPYSK%2BK73tgxuB3I7lbnIk1SNANPv6EvlJRKFUeAQGKrVFot9D7ROSKlfOH3iWuesr%2Fs2OMNjE2VDyD4VzDUh%2FblkPWVuXaOMM8UkTja5uzKM%2B1zW9fH02UqszIGNA%2F3OwCnAl7oR3GINQzbIOdokbP9qcdzmAjPbqZavikQgi7df5wB%2BsLYLorZzVqvRbedRUFx7SCCrYvzIiocLR2v4FxMWhTOxCnU2UqYYRm6mOwScBWZKzkBdoyeBHRhRqO2iKugyVwZeBJwwr4zcUI5MU%2BeCEBufMqYKEoSdy5K0J4zV1IMs4gl9UsItBsBivHEac9GTToW5woDJC2wYGXvx%2FXpLAbJfwNMIT%2BmcEGOqUBRmyZyPrecz%2FRAKTCqJw%2BeTlA0k5f%2FZz3ReMD%2B%2B63cE758XNgIgizjQx7%2Fh0xLky3Tdzh9W%2BmoSIHY3gKFsZfzHxG%2FHXftLwbJ%2BWCeZ%2BY4TXeLkqyMjSUKo7dX8Z3Y3RJFaFsrNRnkLIzjZaSix0GOLDm3PN3c8WFX100CjrQHNvKnpxgqtmiG51UX0f7bdiq8BaQ25%2BeVKr606L%2BtOCl27xCQEVH&X-Amz-Signature=7b6a29628b08b0563f655e41c514d886ca34506ddf710c18d446d7030a92fa25&X-Amz-SignedHeaders=host&x-id=GetObject)
