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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUGA2R2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDwJ1u04rVceTO1TM4az9STgXMQ9OHCzX0UuKOT%2B6OFIQIhAK%2FkGuUmDVk67QuySz%2F0o%2F4wTVUiMZdHahyEho%2BpiskTKv8DCDUQABoMNjM3NDIzMTgzODA1IgzvX1s9oQp5S1rncm0q3APraH1srSqWvwCxE8y43AqImVds7pSdguLtclYxVNFQTyo3BG5vv4MjyC1FkIioTAm2m99MQrbUl9YO7W%2BzXOJdthANDcLdg5442lMGYzhowsg74HNSsU5mDNr1KuPKy2U51%2F5fiO6aQiasmQi2KAVipB7vFUZpjdHVihcfosfG1Pxtfl29I3KVhvtFUnGnbjCN67P7E1pOPpjOJ0ozHRNHsGGqZA1p1MGfzn%2FDeOaC8QpczBcRDv3%2FIusRCG3JsfGgEITEPi6Ebm78aX0Dkzm9ml5ceh7%2B31kujMmZQ8kixQ3NEiX608Px1vqvDD6keELqlWt4ftpyJMr7aRKUiiIAvGk9PqaoHsdavUbt4poqYU%2BbXVIkRB33Zbq9F3jjiIOQZNKBY3Zu0btZtHDzkbeIoTR%2FK4GRCFtEfR2gxch0T3TdfzsxFfhzxk%2Ba2469aWVwhgOuMLilj2cCEmMz4YCo90Tjq%2BeJRnGT6rdTMZCKcdYFgejCTIq1D3BoDtR%2FSYypEWVfOtj4Uc6tmskBaTBh1EZQ%2BgtwifShtf2BZ7RWr4l7tFnQV3QESdpWkbCHoGRZ%2F1%2BXsneKiPk3stfgYLNyMufCTXlYWcl%2F3wp8Dk8GYJG8k%2FL2PFqOtsqGTTCI6KDDBjqkAaX56LqGGt9VuFSN4IVcUJ%2FgK0rb0eLMUZwYJO%2BXJspIYiwpoiLf7AZvZdrEwUW%2FUtgDeYGHF7hvFosB0ikrZ5riZ3g6qb1ksVc9iIP7hwVoGigzWtHDB5za8NfwKRdPyI3q5Fwt7zj4N%2BT%2FTKbLG5i1ahJuoJxRQohTq%2BKR0AQfAr%2Fi154dZA8DFnDAZc5ZWNavDEnH5M%2FPKIMKLmRAEc0%2BSnJS&X-Amz-Signature=aa8a1367b6f71b96520da73b6aa8d1dc440ce3f3f10927b85de1425b02120271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUGA2R2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDwJ1u04rVceTO1TM4az9STgXMQ9OHCzX0UuKOT%2B6OFIQIhAK%2FkGuUmDVk67QuySz%2F0o%2F4wTVUiMZdHahyEho%2BpiskTKv8DCDUQABoMNjM3NDIzMTgzODA1IgzvX1s9oQp5S1rncm0q3APraH1srSqWvwCxE8y43AqImVds7pSdguLtclYxVNFQTyo3BG5vv4MjyC1FkIioTAm2m99MQrbUl9YO7W%2BzXOJdthANDcLdg5442lMGYzhowsg74HNSsU5mDNr1KuPKy2U51%2F5fiO6aQiasmQi2KAVipB7vFUZpjdHVihcfosfG1Pxtfl29I3KVhvtFUnGnbjCN67P7E1pOPpjOJ0ozHRNHsGGqZA1p1MGfzn%2FDeOaC8QpczBcRDv3%2FIusRCG3JsfGgEITEPi6Ebm78aX0Dkzm9ml5ceh7%2B31kujMmZQ8kixQ3NEiX608Px1vqvDD6keELqlWt4ftpyJMr7aRKUiiIAvGk9PqaoHsdavUbt4poqYU%2BbXVIkRB33Zbq9F3jjiIOQZNKBY3Zu0btZtHDzkbeIoTR%2FK4GRCFtEfR2gxch0T3TdfzsxFfhzxk%2Ba2469aWVwhgOuMLilj2cCEmMz4YCo90Tjq%2BeJRnGT6rdTMZCKcdYFgejCTIq1D3BoDtR%2FSYypEWVfOtj4Uc6tmskBaTBh1EZQ%2BgtwifShtf2BZ7RWr4l7tFnQV3QESdpWkbCHoGRZ%2F1%2BXsneKiPk3stfgYLNyMufCTXlYWcl%2F3wp8Dk8GYJG8k%2FL2PFqOtsqGTTCI6KDDBjqkAaX56LqGGt9VuFSN4IVcUJ%2FgK0rb0eLMUZwYJO%2BXJspIYiwpoiLf7AZvZdrEwUW%2FUtgDeYGHF7hvFosB0ikrZ5riZ3g6qb1ksVc9iIP7hwVoGigzWtHDB5za8NfwKRdPyI3q5Fwt7zj4N%2BT%2FTKbLG5i1ahJuoJxRQohTq%2BKR0AQfAr%2Fi154dZA8DFnDAZc5ZWNavDEnH5M%2FPKIMKLmRAEc0%2BSnJS&X-Amz-Signature=ed2976860bfb6a37ea14f7cac2fd6748e6d568c48f65264c7b25178f42dea241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUGA2R2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDwJ1u04rVceTO1TM4az9STgXMQ9OHCzX0UuKOT%2B6OFIQIhAK%2FkGuUmDVk67QuySz%2F0o%2F4wTVUiMZdHahyEho%2BpiskTKv8DCDUQABoMNjM3NDIzMTgzODA1IgzvX1s9oQp5S1rncm0q3APraH1srSqWvwCxE8y43AqImVds7pSdguLtclYxVNFQTyo3BG5vv4MjyC1FkIioTAm2m99MQrbUl9YO7W%2BzXOJdthANDcLdg5442lMGYzhowsg74HNSsU5mDNr1KuPKy2U51%2F5fiO6aQiasmQi2KAVipB7vFUZpjdHVihcfosfG1Pxtfl29I3KVhvtFUnGnbjCN67P7E1pOPpjOJ0ozHRNHsGGqZA1p1MGfzn%2FDeOaC8QpczBcRDv3%2FIusRCG3JsfGgEITEPi6Ebm78aX0Dkzm9ml5ceh7%2B31kujMmZQ8kixQ3NEiX608Px1vqvDD6keELqlWt4ftpyJMr7aRKUiiIAvGk9PqaoHsdavUbt4poqYU%2BbXVIkRB33Zbq9F3jjiIOQZNKBY3Zu0btZtHDzkbeIoTR%2FK4GRCFtEfR2gxch0T3TdfzsxFfhzxk%2Ba2469aWVwhgOuMLilj2cCEmMz4YCo90Tjq%2BeJRnGT6rdTMZCKcdYFgejCTIq1D3BoDtR%2FSYypEWVfOtj4Uc6tmskBaTBh1EZQ%2BgtwifShtf2BZ7RWr4l7tFnQV3QESdpWkbCHoGRZ%2F1%2BXsneKiPk3stfgYLNyMufCTXlYWcl%2F3wp8Dk8GYJG8k%2FL2PFqOtsqGTTCI6KDDBjqkAaX56LqGGt9VuFSN4IVcUJ%2FgK0rb0eLMUZwYJO%2BXJspIYiwpoiLf7AZvZdrEwUW%2FUtgDeYGHF7hvFosB0ikrZ5riZ3g6qb1ksVc9iIP7hwVoGigzWtHDB5za8NfwKRdPyI3q5Fwt7zj4N%2BT%2FTKbLG5i1ahJuoJxRQohTq%2BKR0AQfAr%2Fi154dZA8DFnDAZc5ZWNavDEnH5M%2FPKIMKLmRAEc0%2BSnJS&X-Amz-Signature=736605efbb1bc7f74cb593e56b29b4aeb4b7e1c0d63cdd8584bbb387134f9410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUGA2R2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDwJ1u04rVceTO1TM4az9STgXMQ9OHCzX0UuKOT%2B6OFIQIhAK%2FkGuUmDVk67QuySz%2F0o%2F4wTVUiMZdHahyEho%2BpiskTKv8DCDUQABoMNjM3NDIzMTgzODA1IgzvX1s9oQp5S1rncm0q3APraH1srSqWvwCxE8y43AqImVds7pSdguLtclYxVNFQTyo3BG5vv4MjyC1FkIioTAm2m99MQrbUl9YO7W%2BzXOJdthANDcLdg5442lMGYzhowsg74HNSsU5mDNr1KuPKy2U51%2F5fiO6aQiasmQi2KAVipB7vFUZpjdHVihcfosfG1Pxtfl29I3KVhvtFUnGnbjCN67P7E1pOPpjOJ0ozHRNHsGGqZA1p1MGfzn%2FDeOaC8QpczBcRDv3%2FIusRCG3JsfGgEITEPi6Ebm78aX0Dkzm9ml5ceh7%2B31kujMmZQ8kixQ3NEiX608Px1vqvDD6keELqlWt4ftpyJMr7aRKUiiIAvGk9PqaoHsdavUbt4poqYU%2BbXVIkRB33Zbq9F3jjiIOQZNKBY3Zu0btZtHDzkbeIoTR%2FK4GRCFtEfR2gxch0T3TdfzsxFfhzxk%2Ba2469aWVwhgOuMLilj2cCEmMz4YCo90Tjq%2BeJRnGT6rdTMZCKcdYFgejCTIq1D3BoDtR%2FSYypEWVfOtj4Uc6tmskBaTBh1EZQ%2BgtwifShtf2BZ7RWr4l7tFnQV3QESdpWkbCHoGRZ%2F1%2BXsneKiPk3stfgYLNyMufCTXlYWcl%2F3wp8Dk8GYJG8k%2FL2PFqOtsqGTTCI6KDDBjqkAaX56LqGGt9VuFSN4IVcUJ%2FgK0rb0eLMUZwYJO%2BXJspIYiwpoiLf7AZvZdrEwUW%2FUtgDeYGHF7hvFosB0ikrZ5riZ3g6qb1ksVc9iIP7hwVoGigzWtHDB5za8NfwKRdPyI3q5Fwt7zj4N%2BT%2FTKbLG5i1ahJuoJxRQohTq%2BKR0AQfAr%2Fi154dZA8DFnDAZc5ZWNavDEnH5M%2FPKIMKLmRAEc0%2BSnJS&X-Amz-Signature=81ea7e98788069b1a70de1df8d55ad1685c787b6d4c88b6fcef3e7929414a145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUGA2R2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDwJ1u04rVceTO1TM4az9STgXMQ9OHCzX0UuKOT%2B6OFIQIhAK%2FkGuUmDVk67QuySz%2F0o%2F4wTVUiMZdHahyEho%2BpiskTKv8DCDUQABoMNjM3NDIzMTgzODA1IgzvX1s9oQp5S1rncm0q3APraH1srSqWvwCxE8y43AqImVds7pSdguLtclYxVNFQTyo3BG5vv4MjyC1FkIioTAm2m99MQrbUl9YO7W%2BzXOJdthANDcLdg5442lMGYzhowsg74HNSsU5mDNr1KuPKy2U51%2F5fiO6aQiasmQi2KAVipB7vFUZpjdHVihcfosfG1Pxtfl29I3KVhvtFUnGnbjCN67P7E1pOPpjOJ0ozHRNHsGGqZA1p1MGfzn%2FDeOaC8QpczBcRDv3%2FIusRCG3JsfGgEITEPi6Ebm78aX0Dkzm9ml5ceh7%2B31kujMmZQ8kixQ3NEiX608Px1vqvDD6keELqlWt4ftpyJMr7aRKUiiIAvGk9PqaoHsdavUbt4poqYU%2BbXVIkRB33Zbq9F3jjiIOQZNKBY3Zu0btZtHDzkbeIoTR%2FK4GRCFtEfR2gxch0T3TdfzsxFfhzxk%2Ba2469aWVwhgOuMLilj2cCEmMz4YCo90Tjq%2BeJRnGT6rdTMZCKcdYFgejCTIq1D3BoDtR%2FSYypEWVfOtj4Uc6tmskBaTBh1EZQ%2BgtwifShtf2BZ7RWr4l7tFnQV3QESdpWkbCHoGRZ%2F1%2BXsneKiPk3stfgYLNyMufCTXlYWcl%2F3wp8Dk8GYJG8k%2FL2PFqOtsqGTTCI6KDDBjqkAaX56LqGGt9VuFSN4IVcUJ%2FgK0rb0eLMUZwYJO%2BXJspIYiwpoiLf7AZvZdrEwUW%2FUtgDeYGHF7hvFosB0ikrZ5riZ3g6qb1ksVc9iIP7hwVoGigzWtHDB5za8NfwKRdPyI3q5Fwt7zj4N%2BT%2FTKbLG5i1ahJuoJxRQohTq%2BKR0AQfAr%2Fi154dZA8DFnDAZc5ZWNavDEnH5M%2FPKIMKLmRAEc0%2BSnJS&X-Amz-Signature=29fa0c49d15ae344e7cbd19e296f856527948749a284c52b912b4be684bf7f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEUGA2R2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDwJ1u04rVceTO1TM4az9STgXMQ9OHCzX0UuKOT%2B6OFIQIhAK%2FkGuUmDVk67QuySz%2F0o%2F4wTVUiMZdHahyEho%2BpiskTKv8DCDUQABoMNjM3NDIzMTgzODA1IgzvX1s9oQp5S1rncm0q3APraH1srSqWvwCxE8y43AqImVds7pSdguLtclYxVNFQTyo3BG5vv4MjyC1FkIioTAm2m99MQrbUl9YO7W%2BzXOJdthANDcLdg5442lMGYzhowsg74HNSsU5mDNr1KuPKy2U51%2F5fiO6aQiasmQi2KAVipB7vFUZpjdHVihcfosfG1Pxtfl29I3KVhvtFUnGnbjCN67P7E1pOPpjOJ0ozHRNHsGGqZA1p1MGfzn%2FDeOaC8QpczBcRDv3%2FIusRCG3JsfGgEITEPi6Ebm78aX0Dkzm9ml5ceh7%2B31kujMmZQ8kixQ3NEiX608Px1vqvDD6keELqlWt4ftpyJMr7aRKUiiIAvGk9PqaoHsdavUbt4poqYU%2BbXVIkRB33Zbq9F3jjiIOQZNKBY3Zu0btZtHDzkbeIoTR%2FK4GRCFtEfR2gxch0T3TdfzsxFfhzxk%2Ba2469aWVwhgOuMLilj2cCEmMz4YCo90Tjq%2BeJRnGT6rdTMZCKcdYFgejCTIq1D3BoDtR%2FSYypEWVfOtj4Uc6tmskBaTBh1EZQ%2BgtwifShtf2BZ7RWr4l7tFnQV3QESdpWkbCHoGRZ%2F1%2BXsneKiPk3stfgYLNyMufCTXlYWcl%2F3wp8Dk8GYJG8k%2FL2PFqOtsqGTTCI6KDDBjqkAaX56LqGGt9VuFSN4IVcUJ%2FgK0rb0eLMUZwYJO%2BXJspIYiwpoiLf7AZvZdrEwUW%2FUtgDeYGHF7hvFosB0ikrZ5riZ3g6qb1ksVc9iIP7hwVoGigzWtHDB5za8NfwKRdPyI3q5Fwt7zj4N%2BT%2FTKbLG5i1ahJuoJxRQohTq%2BKR0AQfAr%2Fi154dZA8DFnDAZc5ZWNavDEnH5M%2FPKIMKLmRAEc0%2BSnJS&X-Amz-Signature=70a59313aa8e884d1eb3c071c80b6608365eb547336b47b0eb807669cccff97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
