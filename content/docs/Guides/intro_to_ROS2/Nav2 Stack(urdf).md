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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5E37PVP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoccOqVvbyCJMcV%2FUU7S4vevCl8ASHxnm1lYTT5cFgiAiEAtOwhqvEpRLJpAkkds3nIkUeE2WLOVaAVNMwd52rbHYwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTQnxybd6bGCZWHkSrcA%2BZEgGsFdCZgFivMFV48teCgbyNMEUPANhWxIJfmEz7KHmJbbZjGMxSKtdSxomTyKTJQ2tpL7lK5mrhwP9engxDa3DoziMJjLUrratlZ2%2FZ3aRph%2Fly82Y0wwYokNFrWB7bUVCV2mS2%2F6hN6TGzTnv15lFSM4yV3yp82XlIzzseeBNmZvlbJAEelUfFTBzmA3AoQUK%2B%2BxDRgnajFpXXBnyC8HAItLnyVzlS220SZBaq%2BaMzwgO19MPDVzhMtHbyuyBBc9A%2FlXr0zosDJJ3liSVpcLjsxXae7Ux%2Bl7RZRQdXW8e%2Fstpo4AsEQyBNum4Z2f1Ga%2B0%2F2pSnAdeO52d3cXCdtiD62N%2F8XlFt3pPqenCY8OBpPLvK4wJFjE8ovL1EAacQGxmCBnbqcZ0n3chBDMi57qv59RCUsq3RCnQmS4uT8xsRxF%2FNgk4y3nrEohzIYeiHKFlH%2FkHMHHZkubHQdAeLRaPETDyW72mSIiGK6P9rDVprlttpxBzTb%2BXW%2FM2BkmV%2BIFstAL7Ui3VOAnO8MJ8hyKbSec0387r8uuvlPlzsrfjy4Yt8ysdKyx4DGbkYSURmRUNsoMo3BNSlAWWODPTMsVYU8voQ8hNAogftxPlBrubkfLdzJ0OxcwuKRMPKXh8MGOqUBja%2Bxk8X6mV5zWs%2Fxfj2Gbzt5NBe5nO2U3dxuWrPp%2BZYo2OT7syUJTe5%2B9LvzBUNp1qZ5L%2FBuzxKfQwyA85pgOyhLDkke5qUOgORiJ5L1k%2BlcvyGllcv0oVIFdon0hAOtdzwH%2F7yZAvjtXoByQaYxT7P97dpj40AU1Q17hEctkRZWyYXDcqY6YNmHArcBA%2FjVyBBL7O85MIMPo1U7wItWehvGGgXb&X-Amz-Signature=1bb45f11f62c88cfabcc53fbbb38badfc612331f0b9c65c26ed0810a8acf3ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5E37PVP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoccOqVvbyCJMcV%2FUU7S4vevCl8ASHxnm1lYTT5cFgiAiEAtOwhqvEpRLJpAkkds3nIkUeE2WLOVaAVNMwd52rbHYwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTQnxybd6bGCZWHkSrcA%2BZEgGsFdCZgFivMFV48teCgbyNMEUPANhWxIJfmEz7KHmJbbZjGMxSKtdSxomTyKTJQ2tpL7lK5mrhwP9engxDa3DoziMJjLUrratlZ2%2FZ3aRph%2Fly82Y0wwYokNFrWB7bUVCV2mS2%2F6hN6TGzTnv15lFSM4yV3yp82XlIzzseeBNmZvlbJAEelUfFTBzmA3AoQUK%2B%2BxDRgnajFpXXBnyC8HAItLnyVzlS220SZBaq%2BaMzwgO19MPDVzhMtHbyuyBBc9A%2FlXr0zosDJJ3liSVpcLjsxXae7Ux%2Bl7RZRQdXW8e%2Fstpo4AsEQyBNum4Z2f1Ga%2B0%2F2pSnAdeO52d3cXCdtiD62N%2F8XlFt3pPqenCY8OBpPLvK4wJFjE8ovL1EAacQGxmCBnbqcZ0n3chBDMi57qv59RCUsq3RCnQmS4uT8xsRxF%2FNgk4y3nrEohzIYeiHKFlH%2FkHMHHZkubHQdAeLRaPETDyW72mSIiGK6P9rDVprlttpxBzTb%2BXW%2FM2BkmV%2BIFstAL7Ui3VOAnO8MJ8hyKbSec0387r8uuvlPlzsrfjy4Yt8ysdKyx4DGbkYSURmRUNsoMo3BNSlAWWODPTMsVYU8voQ8hNAogftxPlBrubkfLdzJ0OxcwuKRMPKXh8MGOqUBja%2Bxk8X6mV5zWs%2Fxfj2Gbzt5NBe5nO2U3dxuWrPp%2BZYo2OT7syUJTe5%2B9LvzBUNp1qZ5L%2FBuzxKfQwyA85pgOyhLDkke5qUOgORiJ5L1k%2BlcvyGllcv0oVIFdon0hAOtdzwH%2F7yZAvjtXoByQaYxT7P97dpj40AU1Q17hEctkRZWyYXDcqY6YNmHArcBA%2FjVyBBL7O85MIMPo1U7wItWehvGGgXb&X-Amz-Signature=9a4fcaa84230747e18d8ab6d2fa06390fe939b2b71ae742c903266419c1acdbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5E37PVP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoccOqVvbyCJMcV%2FUU7S4vevCl8ASHxnm1lYTT5cFgiAiEAtOwhqvEpRLJpAkkds3nIkUeE2WLOVaAVNMwd52rbHYwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTQnxybd6bGCZWHkSrcA%2BZEgGsFdCZgFivMFV48teCgbyNMEUPANhWxIJfmEz7KHmJbbZjGMxSKtdSxomTyKTJQ2tpL7lK5mrhwP9engxDa3DoziMJjLUrratlZ2%2FZ3aRph%2Fly82Y0wwYokNFrWB7bUVCV2mS2%2F6hN6TGzTnv15lFSM4yV3yp82XlIzzseeBNmZvlbJAEelUfFTBzmA3AoQUK%2B%2BxDRgnajFpXXBnyC8HAItLnyVzlS220SZBaq%2BaMzwgO19MPDVzhMtHbyuyBBc9A%2FlXr0zosDJJ3liSVpcLjsxXae7Ux%2Bl7RZRQdXW8e%2Fstpo4AsEQyBNum4Z2f1Ga%2B0%2F2pSnAdeO52d3cXCdtiD62N%2F8XlFt3pPqenCY8OBpPLvK4wJFjE8ovL1EAacQGxmCBnbqcZ0n3chBDMi57qv59RCUsq3RCnQmS4uT8xsRxF%2FNgk4y3nrEohzIYeiHKFlH%2FkHMHHZkubHQdAeLRaPETDyW72mSIiGK6P9rDVprlttpxBzTb%2BXW%2FM2BkmV%2BIFstAL7Ui3VOAnO8MJ8hyKbSec0387r8uuvlPlzsrfjy4Yt8ysdKyx4DGbkYSURmRUNsoMo3BNSlAWWODPTMsVYU8voQ8hNAogftxPlBrubkfLdzJ0OxcwuKRMPKXh8MGOqUBja%2Bxk8X6mV5zWs%2Fxfj2Gbzt5NBe5nO2U3dxuWrPp%2BZYo2OT7syUJTe5%2B9LvzBUNp1qZ5L%2FBuzxKfQwyA85pgOyhLDkke5qUOgORiJ5L1k%2BlcvyGllcv0oVIFdon0hAOtdzwH%2F7yZAvjtXoByQaYxT7P97dpj40AU1Q17hEctkRZWyYXDcqY6YNmHArcBA%2FjVyBBL7O85MIMPo1U7wItWehvGGgXb&X-Amz-Signature=a6d58be73362a11c770323ae9af84cc3a75707c5e055b2e391c683f2a364c76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5E37PVP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoccOqVvbyCJMcV%2FUU7S4vevCl8ASHxnm1lYTT5cFgiAiEAtOwhqvEpRLJpAkkds3nIkUeE2WLOVaAVNMwd52rbHYwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTQnxybd6bGCZWHkSrcA%2BZEgGsFdCZgFivMFV48teCgbyNMEUPANhWxIJfmEz7KHmJbbZjGMxSKtdSxomTyKTJQ2tpL7lK5mrhwP9engxDa3DoziMJjLUrratlZ2%2FZ3aRph%2Fly82Y0wwYokNFrWB7bUVCV2mS2%2F6hN6TGzTnv15lFSM4yV3yp82XlIzzseeBNmZvlbJAEelUfFTBzmA3AoQUK%2B%2BxDRgnajFpXXBnyC8HAItLnyVzlS220SZBaq%2BaMzwgO19MPDVzhMtHbyuyBBc9A%2FlXr0zosDJJ3liSVpcLjsxXae7Ux%2Bl7RZRQdXW8e%2Fstpo4AsEQyBNum4Z2f1Ga%2B0%2F2pSnAdeO52d3cXCdtiD62N%2F8XlFt3pPqenCY8OBpPLvK4wJFjE8ovL1EAacQGxmCBnbqcZ0n3chBDMi57qv59RCUsq3RCnQmS4uT8xsRxF%2FNgk4y3nrEohzIYeiHKFlH%2FkHMHHZkubHQdAeLRaPETDyW72mSIiGK6P9rDVprlttpxBzTb%2BXW%2FM2BkmV%2BIFstAL7Ui3VOAnO8MJ8hyKbSec0387r8uuvlPlzsrfjy4Yt8ysdKyx4DGbkYSURmRUNsoMo3BNSlAWWODPTMsVYU8voQ8hNAogftxPlBrubkfLdzJ0OxcwuKRMPKXh8MGOqUBja%2Bxk8X6mV5zWs%2Fxfj2Gbzt5NBe5nO2U3dxuWrPp%2BZYo2OT7syUJTe5%2B9LvzBUNp1qZ5L%2FBuzxKfQwyA85pgOyhLDkke5qUOgORiJ5L1k%2BlcvyGllcv0oVIFdon0hAOtdzwH%2F7yZAvjtXoByQaYxT7P97dpj40AU1Q17hEctkRZWyYXDcqY6YNmHArcBA%2FjVyBBL7O85MIMPo1U7wItWehvGGgXb&X-Amz-Signature=ef2f9c7aa4cdddac958f7eb31a6a73c24b8bd5a1c138fdbad8fc86615395e72c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5E37PVP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoccOqVvbyCJMcV%2FUU7S4vevCl8ASHxnm1lYTT5cFgiAiEAtOwhqvEpRLJpAkkds3nIkUeE2WLOVaAVNMwd52rbHYwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTQnxybd6bGCZWHkSrcA%2BZEgGsFdCZgFivMFV48teCgbyNMEUPANhWxIJfmEz7KHmJbbZjGMxSKtdSxomTyKTJQ2tpL7lK5mrhwP9engxDa3DoziMJjLUrratlZ2%2FZ3aRph%2Fly82Y0wwYokNFrWB7bUVCV2mS2%2F6hN6TGzTnv15lFSM4yV3yp82XlIzzseeBNmZvlbJAEelUfFTBzmA3AoQUK%2B%2BxDRgnajFpXXBnyC8HAItLnyVzlS220SZBaq%2BaMzwgO19MPDVzhMtHbyuyBBc9A%2FlXr0zosDJJ3liSVpcLjsxXae7Ux%2Bl7RZRQdXW8e%2Fstpo4AsEQyBNum4Z2f1Ga%2B0%2F2pSnAdeO52d3cXCdtiD62N%2F8XlFt3pPqenCY8OBpPLvK4wJFjE8ovL1EAacQGxmCBnbqcZ0n3chBDMi57qv59RCUsq3RCnQmS4uT8xsRxF%2FNgk4y3nrEohzIYeiHKFlH%2FkHMHHZkubHQdAeLRaPETDyW72mSIiGK6P9rDVprlttpxBzTb%2BXW%2FM2BkmV%2BIFstAL7Ui3VOAnO8MJ8hyKbSec0387r8uuvlPlzsrfjy4Yt8ysdKyx4DGbkYSURmRUNsoMo3BNSlAWWODPTMsVYU8voQ8hNAogftxPlBrubkfLdzJ0OxcwuKRMPKXh8MGOqUBja%2Bxk8X6mV5zWs%2Fxfj2Gbzt5NBe5nO2U3dxuWrPp%2BZYo2OT7syUJTe5%2B9LvzBUNp1qZ5L%2FBuzxKfQwyA85pgOyhLDkke5qUOgORiJ5L1k%2BlcvyGllcv0oVIFdon0hAOtdzwH%2F7yZAvjtXoByQaYxT7P97dpj40AU1Q17hEctkRZWyYXDcqY6YNmHArcBA%2FjVyBBL7O85MIMPo1U7wItWehvGGgXb&X-Amz-Signature=69fe851388559cda638f8acb63ca5603aefd87885cd315ababe3a95e23b5d4fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5E37PVP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoccOqVvbyCJMcV%2FUU7S4vevCl8ASHxnm1lYTT5cFgiAiEAtOwhqvEpRLJpAkkds3nIkUeE2WLOVaAVNMwd52rbHYwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTQnxybd6bGCZWHkSrcA%2BZEgGsFdCZgFivMFV48teCgbyNMEUPANhWxIJfmEz7KHmJbbZjGMxSKtdSxomTyKTJQ2tpL7lK5mrhwP9engxDa3DoziMJjLUrratlZ2%2FZ3aRph%2Fly82Y0wwYokNFrWB7bUVCV2mS2%2F6hN6TGzTnv15lFSM4yV3yp82XlIzzseeBNmZvlbJAEelUfFTBzmA3AoQUK%2B%2BxDRgnajFpXXBnyC8HAItLnyVzlS220SZBaq%2BaMzwgO19MPDVzhMtHbyuyBBc9A%2FlXr0zosDJJ3liSVpcLjsxXae7Ux%2Bl7RZRQdXW8e%2Fstpo4AsEQyBNum4Z2f1Ga%2B0%2F2pSnAdeO52d3cXCdtiD62N%2F8XlFt3pPqenCY8OBpPLvK4wJFjE8ovL1EAacQGxmCBnbqcZ0n3chBDMi57qv59RCUsq3RCnQmS4uT8xsRxF%2FNgk4y3nrEohzIYeiHKFlH%2FkHMHHZkubHQdAeLRaPETDyW72mSIiGK6P9rDVprlttpxBzTb%2BXW%2FM2BkmV%2BIFstAL7Ui3VOAnO8MJ8hyKbSec0387r8uuvlPlzsrfjy4Yt8ysdKyx4DGbkYSURmRUNsoMo3BNSlAWWODPTMsVYU8voQ8hNAogftxPlBrubkfLdzJ0OxcwuKRMPKXh8MGOqUBja%2Bxk8X6mV5zWs%2Fxfj2Gbzt5NBe5nO2U3dxuWrPp%2BZYo2OT7syUJTe5%2B9LvzBUNp1qZ5L%2FBuzxKfQwyA85pgOyhLDkke5qUOgORiJ5L1k%2BlcvyGllcv0oVIFdon0hAOtdzwH%2F7yZAvjtXoByQaYxT7P97dpj40AU1Q17hEctkRZWyYXDcqY6YNmHArcBA%2FjVyBBL7O85MIMPo1U7wItWehvGGgXb&X-Amz-Signature=59db617cdeffbc673bacc361d467d2f6af3881948c88af6f0ff86d0342120ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
