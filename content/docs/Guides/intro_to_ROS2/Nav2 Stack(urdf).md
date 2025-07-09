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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL2WQN7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC%2BWaOABJEeaoET%2B9EGIYAqDgUjGI%2FfKUlf99Snu%2F3DAiEA7PpoxHF05xAGGAP0k5TieEEwSfrWeUsjPUzgEgNm4JoqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGvep1Pf4uAAt7tCircA1p1flw9a14DNUExFMf15Q2Z2Idyr8QOADTxmnNAsFUSUqH1KreIFnEGGuFTKUTC3GSJUjb%2BvIu39Z2bb0XedvVFGjSo7wVzhxn01kylfLFq2c1NjrPEEKmq2klBRxUSA7L871KOC6z7FbPaVyO8QWhHrj%2BFzGM790nXAV694K3DtVUZJqEf5KleiBLbhzcQfRn0viG8Tj4%2B1USUu8rKkI9q9qqlto16l%2FoxUririUFNZ7p9gmT5Abr97kWfNqO0ltLrnEFivzVPJJ12TwaTI0ujPSTjS4D2mQbIztDJEN5lKO%2BR2hOhFzyvmN1ucg1sBp5E4UKU%2FDx25mmSaTT91SM9hNG5ydY3ZSD1LjbnoMLUJLg7jXcW1j0QIEYmFlCO%2BX6tOZ0RcS6bPAp48Z0eP4GSO9qJ%2B1qXQdf5dDwG9CU0VFM3FjSA2PVI8qwY8v12vRCnb6sjckTpYb7QE5jmIHCUkgzq8l%2BfSp4Kbitde3acatObAyvDE11pSfHIeoMcW1cJn7Lu0rVU5yHdqCted1x9bkjORx0Jn3shEKincuJ%2B%2BmQVVqymQSHAj69vuGK9NiWRJ4kH6n3pRBoboncrUEcm%2BKtPJZ%2Fx3LrTwgR%2FK6prrYvGbWXM0mq2j%2FzlMPTEu8MGOqUBgbsgA3jECwIp8Pjbe4P7J8QRHWF9Ow%2FHN4VjTVGV%2FoIxIcKNShyU6LhIpkV53Q0y2qbWCgYtBWWby3Udc8E6NU18APD5LRBnTf8acgpP1jSiErWdCgBbtuOIB8mmzI1cUzDgqhX92HNlR8PutmrgJPClBP%2BAPanDHFuHfvVVzXFKmhvxYGHLpNRL%2F1GkBVo3svNFBaxtVpf1DFYcb5oZng%2FKCk%2BE&X-Amz-Signature=b6ce792f9cfb6b2c13bbc3ec65f308513d2fa13e381c1fe30267ecfd44719902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL2WQN7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC%2BWaOABJEeaoET%2B9EGIYAqDgUjGI%2FfKUlf99Snu%2F3DAiEA7PpoxHF05xAGGAP0k5TieEEwSfrWeUsjPUzgEgNm4JoqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGvep1Pf4uAAt7tCircA1p1flw9a14DNUExFMf15Q2Z2Idyr8QOADTxmnNAsFUSUqH1KreIFnEGGuFTKUTC3GSJUjb%2BvIu39Z2bb0XedvVFGjSo7wVzhxn01kylfLFq2c1NjrPEEKmq2klBRxUSA7L871KOC6z7FbPaVyO8QWhHrj%2BFzGM790nXAV694K3DtVUZJqEf5KleiBLbhzcQfRn0viG8Tj4%2B1USUu8rKkI9q9qqlto16l%2FoxUririUFNZ7p9gmT5Abr97kWfNqO0ltLrnEFivzVPJJ12TwaTI0ujPSTjS4D2mQbIztDJEN5lKO%2BR2hOhFzyvmN1ucg1sBp5E4UKU%2FDx25mmSaTT91SM9hNG5ydY3ZSD1LjbnoMLUJLg7jXcW1j0QIEYmFlCO%2BX6tOZ0RcS6bPAp48Z0eP4GSO9qJ%2B1qXQdf5dDwG9CU0VFM3FjSA2PVI8qwY8v12vRCnb6sjckTpYb7QE5jmIHCUkgzq8l%2BfSp4Kbitde3acatObAyvDE11pSfHIeoMcW1cJn7Lu0rVU5yHdqCted1x9bkjORx0Jn3shEKincuJ%2B%2BmQVVqymQSHAj69vuGK9NiWRJ4kH6n3pRBoboncrUEcm%2BKtPJZ%2Fx3LrTwgR%2FK6prrYvGbWXM0mq2j%2FzlMPTEu8MGOqUBgbsgA3jECwIp8Pjbe4P7J8QRHWF9Ow%2FHN4VjTVGV%2FoIxIcKNShyU6LhIpkV53Q0y2qbWCgYtBWWby3Udc8E6NU18APD5LRBnTf8acgpP1jSiErWdCgBbtuOIB8mmzI1cUzDgqhX92HNlR8PutmrgJPClBP%2BAPanDHFuHfvVVzXFKmhvxYGHLpNRL%2F1GkBVo3svNFBaxtVpf1DFYcb5oZng%2FKCk%2BE&X-Amz-Signature=2165f2b68c0e7bd626bb16a7b8e71d4b2854ec8cc3d0ed178501024c18854f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL2WQN7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC%2BWaOABJEeaoET%2B9EGIYAqDgUjGI%2FfKUlf99Snu%2F3DAiEA7PpoxHF05xAGGAP0k5TieEEwSfrWeUsjPUzgEgNm4JoqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGvep1Pf4uAAt7tCircA1p1flw9a14DNUExFMf15Q2Z2Idyr8QOADTxmnNAsFUSUqH1KreIFnEGGuFTKUTC3GSJUjb%2BvIu39Z2bb0XedvVFGjSo7wVzhxn01kylfLFq2c1NjrPEEKmq2klBRxUSA7L871KOC6z7FbPaVyO8QWhHrj%2BFzGM790nXAV694K3DtVUZJqEf5KleiBLbhzcQfRn0viG8Tj4%2B1USUu8rKkI9q9qqlto16l%2FoxUririUFNZ7p9gmT5Abr97kWfNqO0ltLrnEFivzVPJJ12TwaTI0ujPSTjS4D2mQbIztDJEN5lKO%2BR2hOhFzyvmN1ucg1sBp5E4UKU%2FDx25mmSaTT91SM9hNG5ydY3ZSD1LjbnoMLUJLg7jXcW1j0QIEYmFlCO%2BX6tOZ0RcS6bPAp48Z0eP4GSO9qJ%2B1qXQdf5dDwG9CU0VFM3FjSA2PVI8qwY8v12vRCnb6sjckTpYb7QE5jmIHCUkgzq8l%2BfSp4Kbitde3acatObAyvDE11pSfHIeoMcW1cJn7Lu0rVU5yHdqCted1x9bkjORx0Jn3shEKincuJ%2B%2BmQVVqymQSHAj69vuGK9NiWRJ4kH6n3pRBoboncrUEcm%2BKtPJZ%2Fx3LrTwgR%2FK6prrYvGbWXM0mq2j%2FzlMPTEu8MGOqUBgbsgA3jECwIp8Pjbe4P7J8QRHWF9Ow%2FHN4VjTVGV%2FoIxIcKNShyU6LhIpkV53Q0y2qbWCgYtBWWby3Udc8E6NU18APD5LRBnTf8acgpP1jSiErWdCgBbtuOIB8mmzI1cUzDgqhX92HNlR8PutmrgJPClBP%2BAPanDHFuHfvVVzXFKmhvxYGHLpNRL%2F1GkBVo3svNFBaxtVpf1DFYcb5oZng%2FKCk%2BE&X-Amz-Signature=51cf6669aa2e60529502afd7f009f6f4df14a62b888ec2595da26eaa0eed5f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL2WQN7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC%2BWaOABJEeaoET%2B9EGIYAqDgUjGI%2FfKUlf99Snu%2F3DAiEA7PpoxHF05xAGGAP0k5TieEEwSfrWeUsjPUzgEgNm4JoqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGvep1Pf4uAAt7tCircA1p1flw9a14DNUExFMf15Q2Z2Idyr8QOADTxmnNAsFUSUqH1KreIFnEGGuFTKUTC3GSJUjb%2BvIu39Z2bb0XedvVFGjSo7wVzhxn01kylfLFq2c1NjrPEEKmq2klBRxUSA7L871KOC6z7FbPaVyO8QWhHrj%2BFzGM790nXAV694K3DtVUZJqEf5KleiBLbhzcQfRn0viG8Tj4%2B1USUu8rKkI9q9qqlto16l%2FoxUririUFNZ7p9gmT5Abr97kWfNqO0ltLrnEFivzVPJJ12TwaTI0ujPSTjS4D2mQbIztDJEN5lKO%2BR2hOhFzyvmN1ucg1sBp5E4UKU%2FDx25mmSaTT91SM9hNG5ydY3ZSD1LjbnoMLUJLg7jXcW1j0QIEYmFlCO%2BX6tOZ0RcS6bPAp48Z0eP4GSO9qJ%2B1qXQdf5dDwG9CU0VFM3FjSA2PVI8qwY8v12vRCnb6sjckTpYb7QE5jmIHCUkgzq8l%2BfSp4Kbitde3acatObAyvDE11pSfHIeoMcW1cJn7Lu0rVU5yHdqCted1x9bkjORx0Jn3shEKincuJ%2B%2BmQVVqymQSHAj69vuGK9NiWRJ4kH6n3pRBoboncrUEcm%2BKtPJZ%2Fx3LrTwgR%2FK6prrYvGbWXM0mq2j%2FzlMPTEu8MGOqUBgbsgA3jECwIp8Pjbe4P7J8QRHWF9Ow%2FHN4VjTVGV%2FoIxIcKNShyU6LhIpkV53Q0y2qbWCgYtBWWby3Udc8E6NU18APD5LRBnTf8acgpP1jSiErWdCgBbtuOIB8mmzI1cUzDgqhX92HNlR8PutmrgJPClBP%2BAPanDHFuHfvVVzXFKmhvxYGHLpNRL%2F1GkBVo3svNFBaxtVpf1DFYcb5oZng%2FKCk%2BE&X-Amz-Signature=972d36c99c9f95d31d56080201d0088df94d85a413b7250c228a5d423fafee8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL2WQN7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC%2BWaOABJEeaoET%2B9EGIYAqDgUjGI%2FfKUlf99Snu%2F3DAiEA7PpoxHF05xAGGAP0k5TieEEwSfrWeUsjPUzgEgNm4JoqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGvep1Pf4uAAt7tCircA1p1flw9a14DNUExFMf15Q2Z2Idyr8QOADTxmnNAsFUSUqH1KreIFnEGGuFTKUTC3GSJUjb%2BvIu39Z2bb0XedvVFGjSo7wVzhxn01kylfLFq2c1NjrPEEKmq2klBRxUSA7L871KOC6z7FbPaVyO8QWhHrj%2BFzGM790nXAV694K3DtVUZJqEf5KleiBLbhzcQfRn0viG8Tj4%2B1USUu8rKkI9q9qqlto16l%2FoxUririUFNZ7p9gmT5Abr97kWfNqO0ltLrnEFivzVPJJ12TwaTI0ujPSTjS4D2mQbIztDJEN5lKO%2BR2hOhFzyvmN1ucg1sBp5E4UKU%2FDx25mmSaTT91SM9hNG5ydY3ZSD1LjbnoMLUJLg7jXcW1j0QIEYmFlCO%2BX6tOZ0RcS6bPAp48Z0eP4GSO9qJ%2B1qXQdf5dDwG9CU0VFM3FjSA2PVI8qwY8v12vRCnb6sjckTpYb7QE5jmIHCUkgzq8l%2BfSp4Kbitde3acatObAyvDE11pSfHIeoMcW1cJn7Lu0rVU5yHdqCted1x9bkjORx0Jn3shEKincuJ%2B%2BmQVVqymQSHAj69vuGK9NiWRJ4kH6n3pRBoboncrUEcm%2BKtPJZ%2Fx3LrTwgR%2FK6prrYvGbWXM0mq2j%2FzlMPTEu8MGOqUBgbsgA3jECwIp8Pjbe4P7J8QRHWF9Ow%2FHN4VjTVGV%2FoIxIcKNShyU6LhIpkV53Q0y2qbWCgYtBWWby3Udc8E6NU18APD5LRBnTf8acgpP1jSiErWdCgBbtuOIB8mmzI1cUzDgqhX92HNlR8PutmrgJPClBP%2BAPanDHFuHfvVVzXFKmhvxYGHLpNRL%2F1GkBVo3svNFBaxtVpf1DFYcb5oZng%2FKCk%2BE&X-Amz-Signature=5a8c3e2b76a9d557db4f0fc1de2eaf77baf7e7e752d773e6191da194f0efb5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL2WQN7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC%2BWaOABJEeaoET%2B9EGIYAqDgUjGI%2FfKUlf99Snu%2F3DAiEA7PpoxHF05xAGGAP0k5TieEEwSfrWeUsjPUzgEgNm4JoqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGvep1Pf4uAAt7tCircA1p1flw9a14DNUExFMf15Q2Z2Idyr8QOADTxmnNAsFUSUqH1KreIFnEGGuFTKUTC3GSJUjb%2BvIu39Z2bb0XedvVFGjSo7wVzhxn01kylfLFq2c1NjrPEEKmq2klBRxUSA7L871KOC6z7FbPaVyO8QWhHrj%2BFzGM790nXAV694K3DtVUZJqEf5KleiBLbhzcQfRn0viG8Tj4%2B1USUu8rKkI9q9qqlto16l%2FoxUririUFNZ7p9gmT5Abr97kWfNqO0ltLrnEFivzVPJJ12TwaTI0ujPSTjS4D2mQbIztDJEN5lKO%2BR2hOhFzyvmN1ucg1sBp5E4UKU%2FDx25mmSaTT91SM9hNG5ydY3ZSD1LjbnoMLUJLg7jXcW1j0QIEYmFlCO%2BX6tOZ0RcS6bPAp48Z0eP4GSO9qJ%2B1qXQdf5dDwG9CU0VFM3FjSA2PVI8qwY8v12vRCnb6sjckTpYb7QE5jmIHCUkgzq8l%2BfSp4Kbitde3acatObAyvDE11pSfHIeoMcW1cJn7Lu0rVU5yHdqCted1x9bkjORx0Jn3shEKincuJ%2B%2BmQVVqymQSHAj69vuGK9NiWRJ4kH6n3pRBoboncrUEcm%2BKtPJZ%2Fx3LrTwgR%2FK6prrYvGbWXM0mq2j%2FzlMPTEu8MGOqUBgbsgA3jECwIp8Pjbe4P7J8QRHWF9Ow%2FHN4VjTVGV%2FoIxIcKNShyU6LhIpkV53Q0y2qbWCgYtBWWby3Udc8E6NU18APD5LRBnTf8acgpP1jSiErWdCgBbtuOIB8mmzI1cUzDgqhX92HNlR8PutmrgJPClBP%2BAPanDHFuHfvVVzXFKmhvxYGHLpNRL%2F1GkBVo3svNFBaxtVpf1DFYcb5oZng%2FKCk%2BE&X-Amz-Signature=bccf6049cad73d625e111046563f8eaa540b55a6dab6457ea88c5db63f534870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
