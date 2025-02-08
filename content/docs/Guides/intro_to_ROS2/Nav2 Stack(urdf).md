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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHUTMSS%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDC8mA4dirbumoepVWs08whA4oZBf2qxO9NlVUwnRoHBQIgHOrrf1%2BtAvYtsRm6YhaUIkkdVCOwjOM6brBSfHzq3q8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPufzhq1lrD6IGpHWCrcA791nqiNsJ9JGq5vb0BeXVbd5DXsflxFFB5VPWPMvVgeWAVVFJCX6P0E0pKFCCOYhc9sopXNwRc3OeAQ%2FHlECScry%2FV1ed4w%2Fm9fud4%2F9tJmv9ZsEjqDckxW5G7bIWAYAPuP6eUaoAycTrXOXdgj%2FBZB%2FQ1paqWlTosGAAE4pBz5P6TajtWuhq5v3yRBn1WY7TrO5nbEQvq2VYNVGPH5BuOSNPCv%2B1A4KRMynsixHWeanRmnwVtBhoEIn4rt5x9WZ6jZ%2FcmS077wq1pBSmhxt6sZPcKy1RVvlE%2FzQDNAHgsphzyUz9gN4rouRJk53HqtbCOiwXKT0yTDWEKqyMELyJHroE%2BjmTXhJqL231BF7e4iEfcPyWmtqzDBhQbBU7CDRg7mJH%2FLD9SeuuQ2oyJHGQe1YthPFRq9cSEtEiiMRuwi1vRuywUg3bJNvA7b0JwgdE7rPkyXduSOywkybleFCFQE4SdqBjZTpYjjo4lBQlrjwSljGBpX0UqtSo25XUq7HS0xzE0hbT%2FAn7saPb%2FunHAvtsLAurtN5CTP9kOPNQVA9k1uh2tR42GwBFSGvzxGHCjN5Hqr3haQ%2FePKCAk7mSKutTKimcZ9WF2bhH2mSAyMcRYVDThCW%2FkTcpTSMJDfmr0GOqUB1jZjPn8lap3oVYkuvS4zS3uGqYF0QrSxF%2B0j2DbTG45mHSz7jGsud5fLRZ%2BoSm1wLv5MB8s2uR%2Bou3LtfLR8Arkinlu%2BSbWLy%2B%2FK6qSaUDrchGf6VsSQ1uYnidSnVKKwL0XkuFfbjea%2BaIwhZrEQfcMmw0%2BFv7jWHl1i4fEGqpCIWxKr3yDTB8tJDPmGRlme1fMysaXSd0Sx2Ory5M8X4Qef9OBx&X-Amz-Signature=773cf480720e5870807ef46b3a1591c5aff34033b0f3ce546ca2951b2324b889&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHUTMSS%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDC8mA4dirbumoepVWs08whA4oZBf2qxO9NlVUwnRoHBQIgHOrrf1%2BtAvYtsRm6YhaUIkkdVCOwjOM6brBSfHzq3q8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPufzhq1lrD6IGpHWCrcA791nqiNsJ9JGq5vb0BeXVbd5DXsflxFFB5VPWPMvVgeWAVVFJCX6P0E0pKFCCOYhc9sopXNwRc3OeAQ%2FHlECScry%2FV1ed4w%2Fm9fud4%2F9tJmv9ZsEjqDckxW5G7bIWAYAPuP6eUaoAycTrXOXdgj%2FBZB%2FQ1paqWlTosGAAE4pBz5P6TajtWuhq5v3yRBn1WY7TrO5nbEQvq2VYNVGPH5BuOSNPCv%2B1A4KRMynsixHWeanRmnwVtBhoEIn4rt5x9WZ6jZ%2FcmS077wq1pBSmhxt6sZPcKy1RVvlE%2FzQDNAHgsphzyUz9gN4rouRJk53HqtbCOiwXKT0yTDWEKqyMELyJHroE%2BjmTXhJqL231BF7e4iEfcPyWmtqzDBhQbBU7CDRg7mJH%2FLD9SeuuQ2oyJHGQe1YthPFRq9cSEtEiiMRuwi1vRuywUg3bJNvA7b0JwgdE7rPkyXduSOywkybleFCFQE4SdqBjZTpYjjo4lBQlrjwSljGBpX0UqtSo25XUq7HS0xzE0hbT%2FAn7saPb%2FunHAvtsLAurtN5CTP9kOPNQVA9k1uh2tR42GwBFSGvzxGHCjN5Hqr3haQ%2FePKCAk7mSKutTKimcZ9WF2bhH2mSAyMcRYVDThCW%2FkTcpTSMJDfmr0GOqUB1jZjPn8lap3oVYkuvS4zS3uGqYF0QrSxF%2B0j2DbTG45mHSz7jGsud5fLRZ%2BoSm1wLv5MB8s2uR%2Bou3LtfLR8Arkinlu%2BSbWLy%2B%2FK6qSaUDrchGf6VsSQ1uYnidSnVKKwL0XkuFfbjea%2BaIwhZrEQfcMmw0%2BFv7jWHl1i4fEGqpCIWxKr3yDTB8tJDPmGRlme1fMysaXSd0Sx2Ory5M8X4Qef9OBx&X-Amz-Signature=0df851acfc4aff37c4bcdc21dff7ebcfddb9911ca6baefa3037f17dc13b22d91&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHUTMSS%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDC8mA4dirbumoepVWs08whA4oZBf2qxO9NlVUwnRoHBQIgHOrrf1%2BtAvYtsRm6YhaUIkkdVCOwjOM6brBSfHzq3q8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPufzhq1lrD6IGpHWCrcA791nqiNsJ9JGq5vb0BeXVbd5DXsflxFFB5VPWPMvVgeWAVVFJCX6P0E0pKFCCOYhc9sopXNwRc3OeAQ%2FHlECScry%2FV1ed4w%2Fm9fud4%2F9tJmv9ZsEjqDckxW5G7bIWAYAPuP6eUaoAycTrXOXdgj%2FBZB%2FQ1paqWlTosGAAE4pBz5P6TajtWuhq5v3yRBn1WY7TrO5nbEQvq2VYNVGPH5BuOSNPCv%2B1A4KRMynsixHWeanRmnwVtBhoEIn4rt5x9WZ6jZ%2FcmS077wq1pBSmhxt6sZPcKy1RVvlE%2FzQDNAHgsphzyUz9gN4rouRJk53HqtbCOiwXKT0yTDWEKqyMELyJHroE%2BjmTXhJqL231BF7e4iEfcPyWmtqzDBhQbBU7CDRg7mJH%2FLD9SeuuQ2oyJHGQe1YthPFRq9cSEtEiiMRuwi1vRuywUg3bJNvA7b0JwgdE7rPkyXduSOywkybleFCFQE4SdqBjZTpYjjo4lBQlrjwSljGBpX0UqtSo25XUq7HS0xzE0hbT%2FAn7saPb%2FunHAvtsLAurtN5CTP9kOPNQVA9k1uh2tR42GwBFSGvzxGHCjN5Hqr3haQ%2FePKCAk7mSKutTKimcZ9WF2bhH2mSAyMcRYVDThCW%2FkTcpTSMJDfmr0GOqUB1jZjPn8lap3oVYkuvS4zS3uGqYF0QrSxF%2B0j2DbTG45mHSz7jGsud5fLRZ%2BoSm1wLv5MB8s2uR%2Bou3LtfLR8Arkinlu%2BSbWLy%2B%2FK6qSaUDrchGf6VsSQ1uYnidSnVKKwL0XkuFfbjea%2BaIwhZrEQfcMmw0%2BFv7jWHl1i4fEGqpCIWxKr3yDTB8tJDPmGRlme1fMysaXSd0Sx2Ory5M8X4Qef9OBx&X-Amz-Signature=a3bbc1451636d5a9476728a050147df817ed2caec52da401b2b97cab6feec109&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHUTMSS%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDC8mA4dirbumoepVWs08whA4oZBf2qxO9NlVUwnRoHBQIgHOrrf1%2BtAvYtsRm6YhaUIkkdVCOwjOM6brBSfHzq3q8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPufzhq1lrD6IGpHWCrcA791nqiNsJ9JGq5vb0BeXVbd5DXsflxFFB5VPWPMvVgeWAVVFJCX6P0E0pKFCCOYhc9sopXNwRc3OeAQ%2FHlECScry%2FV1ed4w%2Fm9fud4%2F9tJmv9ZsEjqDckxW5G7bIWAYAPuP6eUaoAycTrXOXdgj%2FBZB%2FQ1paqWlTosGAAE4pBz5P6TajtWuhq5v3yRBn1WY7TrO5nbEQvq2VYNVGPH5BuOSNPCv%2B1A4KRMynsixHWeanRmnwVtBhoEIn4rt5x9WZ6jZ%2FcmS077wq1pBSmhxt6sZPcKy1RVvlE%2FzQDNAHgsphzyUz9gN4rouRJk53HqtbCOiwXKT0yTDWEKqyMELyJHroE%2BjmTXhJqL231BF7e4iEfcPyWmtqzDBhQbBU7CDRg7mJH%2FLD9SeuuQ2oyJHGQe1YthPFRq9cSEtEiiMRuwi1vRuywUg3bJNvA7b0JwgdE7rPkyXduSOywkybleFCFQE4SdqBjZTpYjjo4lBQlrjwSljGBpX0UqtSo25XUq7HS0xzE0hbT%2FAn7saPb%2FunHAvtsLAurtN5CTP9kOPNQVA9k1uh2tR42GwBFSGvzxGHCjN5Hqr3haQ%2FePKCAk7mSKutTKimcZ9WF2bhH2mSAyMcRYVDThCW%2FkTcpTSMJDfmr0GOqUB1jZjPn8lap3oVYkuvS4zS3uGqYF0QrSxF%2B0j2DbTG45mHSz7jGsud5fLRZ%2BoSm1wLv5MB8s2uR%2Bou3LtfLR8Arkinlu%2BSbWLy%2B%2FK6qSaUDrchGf6VsSQ1uYnidSnVKKwL0XkuFfbjea%2BaIwhZrEQfcMmw0%2BFv7jWHl1i4fEGqpCIWxKr3yDTB8tJDPmGRlme1fMysaXSd0Sx2Ory5M8X4Qef9OBx&X-Amz-Signature=5abbc39ad056ff890c22acb4b4de01867d92d8772c585639f85a3cc67a315c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHUTMSS%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDC8mA4dirbumoepVWs08whA4oZBf2qxO9NlVUwnRoHBQIgHOrrf1%2BtAvYtsRm6YhaUIkkdVCOwjOM6brBSfHzq3q8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPufzhq1lrD6IGpHWCrcA791nqiNsJ9JGq5vb0BeXVbd5DXsflxFFB5VPWPMvVgeWAVVFJCX6P0E0pKFCCOYhc9sopXNwRc3OeAQ%2FHlECScry%2FV1ed4w%2Fm9fud4%2F9tJmv9ZsEjqDckxW5G7bIWAYAPuP6eUaoAycTrXOXdgj%2FBZB%2FQ1paqWlTosGAAE4pBz5P6TajtWuhq5v3yRBn1WY7TrO5nbEQvq2VYNVGPH5BuOSNPCv%2B1A4KRMynsixHWeanRmnwVtBhoEIn4rt5x9WZ6jZ%2FcmS077wq1pBSmhxt6sZPcKy1RVvlE%2FzQDNAHgsphzyUz9gN4rouRJk53HqtbCOiwXKT0yTDWEKqyMELyJHroE%2BjmTXhJqL231BF7e4iEfcPyWmtqzDBhQbBU7CDRg7mJH%2FLD9SeuuQ2oyJHGQe1YthPFRq9cSEtEiiMRuwi1vRuywUg3bJNvA7b0JwgdE7rPkyXduSOywkybleFCFQE4SdqBjZTpYjjo4lBQlrjwSljGBpX0UqtSo25XUq7HS0xzE0hbT%2FAn7saPb%2FunHAvtsLAurtN5CTP9kOPNQVA9k1uh2tR42GwBFSGvzxGHCjN5Hqr3haQ%2FePKCAk7mSKutTKimcZ9WF2bhH2mSAyMcRYVDThCW%2FkTcpTSMJDfmr0GOqUB1jZjPn8lap3oVYkuvS4zS3uGqYF0QrSxF%2B0j2DbTG45mHSz7jGsud5fLRZ%2BoSm1wLv5MB8s2uR%2Bou3LtfLR8Arkinlu%2BSbWLy%2B%2FK6qSaUDrchGf6VsSQ1uYnidSnVKKwL0XkuFfbjea%2BaIwhZrEQfcMmw0%2BFv7jWHl1i4fEGqpCIWxKr3yDTB8tJDPmGRlme1fMysaXSd0Sx2Ory5M8X4Qef9OBx&X-Amz-Signature=0593bd1547362d7f48f55cbcdfb3c294c8723e72ca7d7f0b7117e79fc576a0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHUTMSS%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDC8mA4dirbumoepVWs08whA4oZBf2qxO9NlVUwnRoHBQIgHOrrf1%2BtAvYtsRm6YhaUIkkdVCOwjOM6brBSfHzq3q8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPufzhq1lrD6IGpHWCrcA791nqiNsJ9JGq5vb0BeXVbd5DXsflxFFB5VPWPMvVgeWAVVFJCX6P0E0pKFCCOYhc9sopXNwRc3OeAQ%2FHlECScry%2FV1ed4w%2Fm9fud4%2F9tJmv9ZsEjqDckxW5G7bIWAYAPuP6eUaoAycTrXOXdgj%2FBZB%2FQ1paqWlTosGAAE4pBz5P6TajtWuhq5v3yRBn1WY7TrO5nbEQvq2VYNVGPH5BuOSNPCv%2B1A4KRMynsixHWeanRmnwVtBhoEIn4rt5x9WZ6jZ%2FcmS077wq1pBSmhxt6sZPcKy1RVvlE%2FzQDNAHgsphzyUz9gN4rouRJk53HqtbCOiwXKT0yTDWEKqyMELyJHroE%2BjmTXhJqL231BF7e4iEfcPyWmtqzDBhQbBU7CDRg7mJH%2FLD9SeuuQ2oyJHGQe1YthPFRq9cSEtEiiMRuwi1vRuywUg3bJNvA7b0JwgdE7rPkyXduSOywkybleFCFQE4SdqBjZTpYjjo4lBQlrjwSljGBpX0UqtSo25XUq7HS0xzE0hbT%2FAn7saPb%2FunHAvtsLAurtN5CTP9kOPNQVA9k1uh2tR42GwBFSGvzxGHCjN5Hqr3haQ%2FePKCAk7mSKutTKimcZ9WF2bhH2mSAyMcRYVDThCW%2FkTcpTSMJDfmr0GOqUB1jZjPn8lap3oVYkuvS4zS3uGqYF0QrSxF%2B0j2DbTG45mHSz7jGsud5fLRZ%2BoSm1wLv5MB8s2uR%2Bou3LtfLR8Arkinlu%2BSbWLy%2B%2FK6qSaUDrchGf6VsSQ1uYnidSnVKKwL0XkuFfbjea%2BaIwhZrEQfcMmw0%2BFv7jWHl1i4fEGqpCIWxKr3yDTB8tJDPmGRlme1fMysaXSd0Sx2Ory5M8X4Qef9OBx&X-Amz-Signature=c5d493335dbac4bd7c7252276a45d3c70ec88a6ce575f41f6b38ed0b0e7aafe9&X-Amz-SignedHeaders=host&x-id=GetObject)
