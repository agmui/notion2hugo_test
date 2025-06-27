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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SG2EHC4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFr5DxZsFEuDmKlIVQq415j3Cv2uOGiTlOuUjSWfgQS2AiEA11DZqM1UQmhI%2BOZ2e15gza59jVpP1H71VT%2F%2BrjR%2F6toq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA6U3r5X%2BUu7QGkq5ircA051HwC8zyhOxF7sBDb9el3v7GldehmommPnlnn4o1JNva4pSy11Yq6MQOgLjL2C6X1SlprFl2dTQuiPk8DthKuzXPMifikQCahVajG3fJA4kPISGZekkzkveGZj0m0V9sq1H5N0TzLJEMPYklPU0F8WhnPjqHLKoVbW7xKL%2Foqvp7VksmyUGIRM467hBFPaSnbY0%2FiNnecVgsrEVKwc5vdbL0WFbn4LFxDIFeOX3L0mDYkB%2FesIObxB%2BwOKASDMUfBW3cxVli0pJcvJZ4yprdeYt4KqUPVOLUXQAIAdtvI53pSxWik2XJBOhz1PVG%2B4AqqlsyEL0KSqGRPc%2BCMJMK3Mgu2Be%2FlmUfkAD0kIxDRZPp1vn0uIZmXNLQQZDd%2F7hMzbADtXxjhvcvPNnALxp7aMsyMHeBDT3q4LXJ1izAYIOYPUoPLTf7%2BT3E%2BmwrIt1OWEciyX8VVMfDMF%2BXpYbQRwRd4RVvafyO5Tz7r7bhlm2fLaRsR4rblgBg9JHha3OE%2F0KXlcO%2BamjMO9QGOlkN5Eynhd0X695XcRTT1eNWlDa3ntDRd5bF%2Fd2ufD7qucPObYwPpKNM4HQG0vagvhz3Fz4zxx6GdcIAWngpEWYkUwnhx2YKuXvSRUbfvtMKL%2B%2BcIGOqUBFTHHjRpUKcuFeiCzGSeAdnGevZdlxSuPbe9%2BzrSb1Yqf3CDVrwjwKbTQQ3icDmtP5lFvAkP3NhPPxoH%2F2JraRUY3mERDHmRilDYr3qTU2KLJtN9P7O8pBI2qlWpu7FwLm7miUo1FUf8%2F%2BFvMvFP8c%2Bb8tPi9rmQ4PpT5PhXUOtHFqYyUlm21YD9yi9mXWGRDTtWSa27QJ9G28CD%2Buew7kAFRb7Pm&X-Amz-Signature=2c70381a249f647823a069ee4d8b425162a7d3c6715a3aa8d43b79a932d2a25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SG2EHC4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFr5DxZsFEuDmKlIVQq415j3Cv2uOGiTlOuUjSWfgQS2AiEA11DZqM1UQmhI%2BOZ2e15gza59jVpP1H71VT%2F%2BrjR%2F6toq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA6U3r5X%2BUu7QGkq5ircA051HwC8zyhOxF7sBDb9el3v7GldehmommPnlnn4o1JNva4pSy11Yq6MQOgLjL2C6X1SlprFl2dTQuiPk8DthKuzXPMifikQCahVajG3fJA4kPISGZekkzkveGZj0m0V9sq1H5N0TzLJEMPYklPU0F8WhnPjqHLKoVbW7xKL%2Foqvp7VksmyUGIRM467hBFPaSnbY0%2FiNnecVgsrEVKwc5vdbL0WFbn4LFxDIFeOX3L0mDYkB%2FesIObxB%2BwOKASDMUfBW3cxVli0pJcvJZ4yprdeYt4KqUPVOLUXQAIAdtvI53pSxWik2XJBOhz1PVG%2B4AqqlsyEL0KSqGRPc%2BCMJMK3Mgu2Be%2FlmUfkAD0kIxDRZPp1vn0uIZmXNLQQZDd%2F7hMzbADtXxjhvcvPNnALxp7aMsyMHeBDT3q4LXJ1izAYIOYPUoPLTf7%2BT3E%2BmwrIt1OWEciyX8VVMfDMF%2BXpYbQRwRd4RVvafyO5Tz7r7bhlm2fLaRsR4rblgBg9JHha3OE%2F0KXlcO%2BamjMO9QGOlkN5Eynhd0X695XcRTT1eNWlDa3ntDRd5bF%2Fd2ufD7qucPObYwPpKNM4HQG0vagvhz3Fz4zxx6GdcIAWngpEWYkUwnhx2YKuXvSRUbfvtMKL%2B%2BcIGOqUBFTHHjRpUKcuFeiCzGSeAdnGevZdlxSuPbe9%2BzrSb1Yqf3CDVrwjwKbTQQ3icDmtP5lFvAkP3NhPPxoH%2F2JraRUY3mERDHmRilDYr3qTU2KLJtN9P7O8pBI2qlWpu7FwLm7miUo1FUf8%2F%2BFvMvFP8c%2Bb8tPi9rmQ4PpT5PhXUOtHFqYyUlm21YD9yi9mXWGRDTtWSa27QJ9G28CD%2Buew7kAFRb7Pm&X-Amz-Signature=1373cd1779176dcec103459ee957e13581df620f8a9d2090d232ecd2021d253a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SG2EHC4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFr5DxZsFEuDmKlIVQq415j3Cv2uOGiTlOuUjSWfgQS2AiEA11DZqM1UQmhI%2BOZ2e15gza59jVpP1H71VT%2F%2BrjR%2F6toq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA6U3r5X%2BUu7QGkq5ircA051HwC8zyhOxF7sBDb9el3v7GldehmommPnlnn4o1JNva4pSy11Yq6MQOgLjL2C6X1SlprFl2dTQuiPk8DthKuzXPMifikQCahVajG3fJA4kPISGZekkzkveGZj0m0V9sq1H5N0TzLJEMPYklPU0F8WhnPjqHLKoVbW7xKL%2Foqvp7VksmyUGIRM467hBFPaSnbY0%2FiNnecVgsrEVKwc5vdbL0WFbn4LFxDIFeOX3L0mDYkB%2FesIObxB%2BwOKASDMUfBW3cxVli0pJcvJZ4yprdeYt4KqUPVOLUXQAIAdtvI53pSxWik2XJBOhz1PVG%2B4AqqlsyEL0KSqGRPc%2BCMJMK3Mgu2Be%2FlmUfkAD0kIxDRZPp1vn0uIZmXNLQQZDd%2F7hMzbADtXxjhvcvPNnALxp7aMsyMHeBDT3q4LXJ1izAYIOYPUoPLTf7%2BT3E%2BmwrIt1OWEciyX8VVMfDMF%2BXpYbQRwRd4RVvafyO5Tz7r7bhlm2fLaRsR4rblgBg9JHha3OE%2F0KXlcO%2BamjMO9QGOlkN5Eynhd0X695XcRTT1eNWlDa3ntDRd5bF%2Fd2ufD7qucPObYwPpKNM4HQG0vagvhz3Fz4zxx6GdcIAWngpEWYkUwnhx2YKuXvSRUbfvtMKL%2B%2BcIGOqUBFTHHjRpUKcuFeiCzGSeAdnGevZdlxSuPbe9%2BzrSb1Yqf3CDVrwjwKbTQQ3icDmtP5lFvAkP3NhPPxoH%2F2JraRUY3mERDHmRilDYr3qTU2KLJtN9P7O8pBI2qlWpu7FwLm7miUo1FUf8%2F%2BFvMvFP8c%2Bb8tPi9rmQ4PpT5PhXUOtHFqYyUlm21YD9yi9mXWGRDTtWSa27QJ9G28CD%2Buew7kAFRb7Pm&X-Amz-Signature=eacb6e7b5f7efac85a4fef72056d177a64dc5033efef72f2206038333c24834a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SG2EHC4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFr5DxZsFEuDmKlIVQq415j3Cv2uOGiTlOuUjSWfgQS2AiEA11DZqM1UQmhI%2BOZ2e15gza59jVpP1H71VT%2F%2BrjR%2F6toq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA6U3r5X%2BUu7QGkq5ircA051HwC8zyhOxF7sBDb9el3v7GldehmommPnlnn4o1JNva4pSy11Yq6MQOgLjL2C6X1SlprFl2dTQuiPk8DthKuzXPMifikQCahVajG3fJA4kPISGZekkzkveGZj0m0V9sq1H5N0TzLJEMPYklPU0F8WhnPjqHLKoVbW7xKL%2Foqvp7VksmyUGIRM467hBFPaSnbY0%2FiNnecVgsrEVKwc5vdbL0WFbn4LFxDIFeOX3L0mDYkB%2FesIObxB%2BwOKASDMUfBW3cxVli0pJcvJZ4yprdeYt4KqUPVOLUXQAIAdtvI53pSxWik2XJBOhz1PVG%2B4AqqlsyEL0KSqGRPc%2BCMJMK3Mgu2Be%2FlmUfkAD0kIxDRZPp1vn0uIZmXNLQQZDd%2F7hMzbADtXxjhvcvPNnALxp7aMsyMHeBDT3q4LXJ1izAYIOYPUoPLTf7%2BT3E%2BmwrIt1OWEciyX8VVMfDMF%2BXpYbQRwRd4RVvafyO5Tz7r7bhlm2fLaRsR4rblgBg9JHha3OE%2F0KXlcO%2BamjMO9QGOlkN5Eynhd0X695XcRTT1eNWlDa3ntDRd5bF%2Fd2ufD7qucPObYwPpKNM4HQG0vagvhz3Fz4zxx6GdcIAWngpEWYkUwnhx2YKuXvSRUbfvtMKL%2B%2BcIGOqUBFTHHjRpUKcuFeiCzGSeAdnGevZdlxSuPbe9%2BzrSb1Yqf3CDVrwjwKbTQQ3icDmtP5lFvAkP3NhPPxoH%2F2JraRUY3mERDHmRilDYr3qTU2KLJtN9P7O8pBI2qlWpu7FwLm7miUo1FUf8%2F%2BFvMvFP8c%2Bb8tPi9rmQ4PpT5PhXUOtHFqYyUlm21YD9yi9mXWGRDTtWSa27QJ9G28CD%2Buew7kAFRb7Pm&X-Amz-Signature=35cb08d45fd530d25ab2cc98fe3d3fe922bbed9397196e43f9b137e44a479a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SG2EHC4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFr5DxZsFEuDmKlIVQq415j3Cv2uOGiTlOuUjSWfgQS2AiEA11DZqM1UQmhI%2BOZ2e15gza59jVpP1H71VT%2F%2BrjR%2F6toq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA6U3r5X%2BUu7QGkq5ircA051HwC8zyhOxF7sBDb9el3v7GldehmommPnlnn4o1JNva4pSy11Yq6MQOgLjL2C6X1SlprFl2dTQuiPk8DthKuzXPMifikQCahVajG3fJA4kPISGZekkzkveGZj0m0V9sq1H5N0TzLJEMPYklPU0F8WhnPjqHLKoVbW7xKL%2Foqvp7VksmyUGIRM467hBFPaSnbY0%2FiNnecVgsrEVKwc5vdbL0WFbn4LFxDIFeOX3L0mDYkB%2FesIObxB%2BwOKASDMUfBW3cxVli0pJcvJZ4yprdeYt4KqUPVOLUXQAIAdtvI53pSxWik2XJBOhz1PVG%2B4AqqlsyEL0KSqGRPc%2BCMJMK3Mgu2Be%2FlmUfkAD0kIxDRZPp1vn0uIZmXNLQQZDd%2F7hMzbADtXxjhvcvPNnALxp7aMsyMHeBDT3q4LXJ1izAYIOYPUoPLTf7%2BT3E%2BmwrIt1OWEciyX8VVMfDMF%2BXpYbQRwRd4RVvafyO5Tz7r7bhlm2fLaRsR4rblgBg9JHha3OE%2F0KXlcO%2BamjMO9QGOlkN5Eynhd0X695XcRTT1eNWlDa3ntDRd5bF%2Fd2ufD7qucPObYwPpKNM4HQG0vagvhz3Fz4zxx6GdcIAWngpEWYkUwnhx2YKuXvSRUbfvtMKL%2B%2BcIGOqUBFTHHjRpUKcuFeiCzGSeAdnGevZdlxSuPbe9%2BzrSb1Yqf3CDVrwjwKbTQQ3icDmtP5lFvAkP3NhPPxoH%2F2JraRUY3mERDHmRilDYr3qTU2KLJtN9P7O8pBI2qlWpu7FwLm7miUo1FUf8%2F%2BFvMvFP8c%2Bb8tPi9rmQ4PpT5PhXUOtHFqYyUlm21YD9yi9mXWGRDTtWSa27QJ9G28CD%2Buew7kAFRb7Pm&X-Amz-Signature=24ffc293118b782a7739e01b836964591ae7a43a73a712473abf5aeed226e88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SG2EHC4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFr5DxZsFEuDmKlIVQq415j3Cv2uOGiTlOuUjSWfgQS2AiEA11DZqM1UQmhI%2BOZ2e15gza59jVpP1H71VT%2F%2BrjR%2F6toq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA6U3r5X%2BUu7QGkq5ircA051HwC8zyhOxF7sBDb9el3v7GldehmommPnlnn4o1JNva4pSy11Yq6MQOgLjL2C6X1SlprFl2dTQuiPk8DthKuzXPMifikQCahVajG3fJA4kPISGZekkzkveGZj0m0V9sq1H5N0TzLJEMPYklPU0F8WhnPjqHLKoVbW7xKL%2Foqvp7VksmyUGIRM467hBFPaSnbY0%2FiNnecVgsrEVKwc5vdbL0WFbn4LFxDIFeOX3L0mDYkB%2FesIObxB%2BwOKASDMUfBW3cxVli0pJcvJZ4yprdeYt4KqUPVOLUXQAIAdtvI53pSxWik2XJBOhz1PVG%2B4AqqlsyEL0KSqGRPc%2BCMJMK3Mgu2Be%2FlmUfkAD0kIxDRZPp1vn0uIZmXNLQQZDd%2F7hMzbADtXxjhvcvPNnALxp7aMsyMHeBDT3q4LXJ1izAYIOYPUoPLTf7%2BT3E%2BmwrIt1OWEciyX8VVMfDMF%2BXpYbQRwRd4RVvafyO5Tz7r7bhlm2fLaRsR4rblgBg9JHha3OE%2F0KXlcO%2BamjMO9QGOlkN5Eynhd0X695XcRTT1eNWlDa3ntDRd5bF%2Fd2ufD7qucPObYwPpKNM4HQG0vagvhz3Fz4zxx6GdcIAWngpEWYkUwnhx2YKuXvSRUbfvtMKL%2B%2BcIGOqUBFTHHjRpUKcuFeiCzGSeAdnGevZdlxSuPbe9%2BzrSb1Yqf3CDVrwjwKbTQQ3icDmtP5lFvAkP3NhPPxoH%2F2JraRUY3mERDHmRilDYr3qTU2KLJtN9P7O8pBI2qlWpu7FwLm7miUo1FUf8%2F%2BFvMvFP8c%2Bb8tPi9rmQ4PpT5PhXUOtHFqYyUlm21YD9yi9mXWGRDTtWSa27QJ9G28CD%2Buew7kAFRb7Pm&X-Amz-Signature=a8ba1884826945acfd7e0b870df10cd248a3859fac1fabd36683b6ab6e67f215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
