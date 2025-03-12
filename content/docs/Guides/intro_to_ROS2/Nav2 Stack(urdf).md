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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVTQ3HC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHxyYaRBbS%2BJvUi3yyobbjBAUjfuS0BZq2YeXNOW8fPCAiBdBKL6e4jEakw7Ic0FE%2Bo0g1jhRROC1GI0UNzfzYm%2FUSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9LeOFrPfXTPW1yIQKtwDreiVt%2FMQq3m%2F%2BTxQP0jg6o98cmqdDHhJSnr4PZViuMUhLvL12t0AHyVlCn6iiVbvthWaOWUjulHCSu9k%2Bx1FkeTQvWZ4XCrpKsV11E5D35aen32dX3CFCmsh%2BkR9JqF2mSKJkWihyrImCJVxIg0lKtfqR3uacCYFOAQ5cr7DUMTdYWGW2q8yDJ9wQd3zUOMfIQUdwAq4LfXkTCjviJkIQKmRfAn3e3HTZUj%2Fa4A6VPxnVxrhKEoMehsjahuc4fTiGGcSexy92UUkDfPCOQclpPejalozT7%2B%2BpCDfOk2X1ZxjT5bL0CSXGW9ON5Bn8tMsL4QLR2080YxS7C8W6W8FtyEA4CyFTrfNBiEyfo2vAlyU898NkxByrZ21wJkjE465ZKcB9fEDTPfmx4vmUV64bweSgR%2BSm7vv%2FckwVe94IVv1QgH6c4lEdd70jPSSbIGv%2FUTp4240BynOFJS7XYxHTROez9j%2B4%2Fd8swuIChzCpC5W%2FIms0zmMQpdNW5jYbfuHoyoDqlIUdH3A%2BYr5sImgyO%2Bh7tElqEdaq%2BLA2NP0VnfgV2vmUESWHla1dQrSk0ZgIKcZEjxSaP4zq3wR%2F0Olf%2FcCZXq15yJY%2Bx%2FaC%2FW96ZiJDvWw25XNwLRgCPsw0drDvgY6pgGnCdwVAoMFrx9hyAxAznzG%2FisQk3v08alPotMdNwCTGe3zk2CymKHdKYR0KjGlooXQHYff1podt4gNxF%2FD4a%2BzY77q9eJLFp12fnQKPOElTzmCu4ysT7aqkjx3oDTVhZ4MyPD0oOn5m9L%2FbxFIV79Ha%2B4iQPW83F2fMbSak%2FS3zU6jsn5xRSxpbuvVEIpjPGEatC9w4HOHL8aSSzxPAVK0IAMRhYfb&X-Amz-Signature=30607cf07af82bae3d6464d77dadc8059ce1b33256041b1a984d5125b78df680&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVTQ3HC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHxyYaRBbS%2BJvUi3yyobbjBAUjfuS0BZq2YeXNOW8fPCAiBdBKL6e4jEakw7Ic0FE%2Bo0g1jhRROC1GI0UNzfzYm%2FUSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9LeOFrPfXTPW1yIQKtwDreiVt%2FMQq3m%2F%2BTxQP0jg6o98cmqdDHhJSnr4PZViuMUhLvL12t0AHyVlCn6iiVbvthWaOWUjulHCSu9k%2Bx1FkeTQvWZ4XCrpKsV11E5D35aen32dX3CFCmsh%2BkR9JqF2mSKJkWihyrImCJVxIg0lKtfqR3uacCYFOAQ5cr7DUMTdYWGW2q8yDJ9wQd3zUOMfIQUdwAq4LfXkTCjviJkIQKmRfAn3e3HTZUj%2Fa4A6VPxnVxrhKEoMehsjahuc4fTiGGcSexy92UUkDfPCOQclpPejalozT7%2B%2BpCDfOk2X1ZxjT5bL0CSXGW9ON5Bn8tMsL4QLR2080YxS7C8W6W8FtyEA4CyFTrfNBiEyfo2vAlyU898NkxByrZ21wJkjE465ZKcB9fEDTPfmx4vmUV64bweSgR%2BSm7vv%2FckwVe94IVv1QgH6c4lEdd70jPSSbIGv%2FUTp4240BynOFJS7XYxHTROez9j%2B4%2Fd8swuIChzCpC5W%2FIms0zmMQpdNW5jYbfuHoyoDqlIUdH3A%2BYr5sImgyO%2Bh7tElqEdaq%2BLA2NP0VnfgV2vmUESWHla1dQrSk0ZgIKcZEjxSaP4zq3wR%2F0Olf%2FcCZXq15yJY%2Bx%2FaC%2FW96ZiJDvWw25XNwLRgCPsw0drDvgY6pgGnCdwVAoMFrx9hyAxAznzG%2FisQk3v08alPotMdNwCTGe3zk2CymKHdKYR0KjGlooXQHYff1podt4gNxF%2FD4a%2BzY77q9eJLFp12fnQKPOElTzmCu4ysT7aqkjx3oDTVhZ4MyPD0oOn5m9L%2FbxFIV79Ha%2B4iQPW83F2fMbSak%2FS3zU6jsn5xRSxpbuvVEIpjPGEatC9w4HOHL8aSSzxPAVK0IAMRhYfb&X-Amz-Signature=3311c0fd6b48f805fba2faa404d85f3821c07fb27577bfa95b5af1e6c70ffd1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVTQ3HC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHxyYaRBbS%2BJvUi3yyobbjBAUjfuS0BZq2YeXNOW8fPCAiBdBKL6e4jEakw7Ic0FE%2Bo0g1jhRROC1GI0UNzfzYm%2FUSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9LeOFrPfXTPW1yIQKtwDreiVt%2FMQq3m%2F%2BTxQP0jg6o98cmqdDHhJSnr4PZViuMUhLvL12t0AHyVlCn6iiVbvthWaOWUjulHCSu9k%2Bx1FkeTQvWZ4XCrpKsV11E5D35aen32dX3CFCmsh%2BkR9JqF2mSKJkWihyrImCJVxIg0lKtfqR3uacCYFOAQ5cr7DUMTdYWGW2q8yDJ9wQd3zUOMfIQUdwAq4LfXkTCjviJkIQKmRfAn3e3HTZUj%2Fa4A6VPxnVxrhKEoMehsjahuc4fTiGGcSexy92UUkDfPCOQclpPejalozT7%2B%2BpCDfOk2X1ZxjT5bL0CSXGW9ON5Bn8tMsL4QLR2080YxS7C8W6W8FtyEA4CyFTrfNBiEyfo2vAlyU898NkxByrZ21wJkjE465ZKcB9fEDTPfmx4vmUV64bweSgR%2BSm7vv%2FckwVe94IVv1QgH6c4lEdd70jPSSbIGv%2FUTp4240BynOFJS7XYxHTROez9j%2B4%2Fd8swuIChzCpC5W%2FIms0zmMQpdNW5jYbfuHoyoDqlIUdH3A%2BYr5sImgyO%2Bh7tElqEdaq%2BLA2NP0VnfgV2vmUESWHla1dQrSk0ZgIKcZEjxSaP4zq3wR%2F0Olf%2FcCZXq15yJY%2Bx%2FaC%2FW96ZiJDvWw25XNwLRgCPsw0drDvgY6pgGnCdwVAoMFrx9hyAxAznzG%2FisQk3v08alPotMdNwCTGe3zk2CymKHdKYR0KjGlooXQHYff1podt4gNxF%2FD4a%2BzY77q9eJLFp12fnQKPOElTzmCu4ysT7aqkjx3oDTVhZ4MyPD0oOn5m9L%2FbxFIV79Ha%2B4iQPW83F2fMbSak%2FS3zU6jsn5xRSxpbuvVEIpjPGEatC9w4HOHL8aSSzxPAVK0IAMRhYfb&X-Amz-Signature=a26bcba0d54e4216733e051c51f775c354888c90532e44b78ddc561b6618db2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVTQ3HC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHxyYaRBbS%2BJvUi3yyobbjBAUjfuS0BZq2YeXNOW8fPCAiBdBKL6e4jEakw7Ic0FE%2Bo0g1jhRROC1GI0UNzfzYm%2FUSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9LeOFrPfXTPW1yIQKtwDreiVt%2FMQq3m%2F%2BTxQP0jg6o98cmqdDHhJSnr4PZViuMUhLvL12t0AHyVlCn6iiVbvthWaOWUjulHCSu9k%2Bx1FkeTQvWZ4XCrpKsV11E5D35aen32dX3CFCmsh%2BkR9JqF2mSKJkWihyrImCJVxIg0lKtfqR3uacCYFOAQ5cr7DUMTdYWGW2q8yDJ9wQd3zUOMfIQUdwAq4LfXkTCjviJkIQKmRfAn3e3HTZUj%2Fa4A6VPxnVxrhKEoMehsjahuc4fTiGGcSexy92UUkDfPCOQclpPejalozT7%2B%2BpCDfOk2X1ZxjT5bL0CSXGW9ON5Bn8tMsL4QLR2080YxS7C8W6W8FtyEA4CyFTrfNBiEyfo2vAlyU898NkxByrZ21wJkjE465ZKcB9fEDTPfmx4vmUV64bweSgR%2BSm7vv%2FckwVe94IVv1QgH6c4lEdd70jPSSbIGv%2FUTp4240BynOFJS7XYxHTROez9j%2B4%2Fd8swuIChzCpC5W%2FIms0zmMQpdNW5jYbfuHoyoDqlIUdH3A%2BYr5sImgyO%2Bh7tElqEdaq%2BLA2NP0VnfgV2vmUESWHla1dQrSk0ZgIKcZEjxSaP4zq3wR%2F0Olf%2FcCZXq15yJY%2Bx%2FaC%2FW96ZiJDvWw25XNwLRgCPsw0drDvgY6pgGnCdwVAoMFrx9hyAxAznzG%2FisQk3v08alPotMdNwCTGe3zk2CymKHdKYR0KjGlooXQHYff1podt4gNxF%2FD4a%2BzY77q9eJLFp12fnQKPOElTzmCu4ysT7aqkjx3oDTVhZ4MyPD0oOn5m9L%2FbxFIV79Ha%2B4iQPW83F2fMbSak%2FS3zU6jsn5xRSxpbuvVEIpjPGEatC9w4HOHL8aSSzxPAVK0IAMRhYfb&X-Amz-Signature=ed1603e2cff7b1a7e8956fc05d92e268a53412321fddea5f4268ef8ab949a287&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVTQ3HC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHxyYaRBbS%2BJvUi3yyobbjBAUjfuS0BZq2YeXNOW8fPCAiBdBKL6e4jEakw7Ic0FE%2Bo0g1jhRROC1GI0UNzfzYm%2FUSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9LeOFrPfXTPW1yIQKtwDreiVt%2FMQq3m%2F%2BTxQP0jg6o98cmqdDHhJSnr4PZViuMUhLvL12t0AHyVlCn6iiVbvthWaOWUjulHCSu9k%2Bx1FkeTQvWZ4XCrpKsV11E5D35aen32dX3CFCmsh%2BkR9JqF2mSKJkWihyrImCJVxIg0lKtfqR3uacCYFOAQ5cr7DUMTdYWGW2q8yDJ9wQd3zUOMfIQUdwAq4LfXkTCjviJkIQKmRfAn3e3HTZUj%2Fa4A6VPxnVxrhKEoMehsjahuc4fTiGGcSexy92UUkDfPCOQclpPejalozT7%2B%2BpCDfOk2X1ZxjT5bL0CSXGW9ON5Bn8tMsL4QLR2080YxS7C8W6W8FtyEA4CyFTrfNBiEyfo2vAlyU898NkxByrZ21wJkjE465ZKcB9fEDTPfmx4vmUV64bweSgR%2BSm7vv%2FckwVe94IVv1QgH6c4lEdd70jPSSbIGv%2FUTp4240BynOFJS7XYxHTROez9j%2B4%2Fd8swuIChzCpC5W%2FIms0zmMQpdNW5jYbfuHoyoDqlIUdH3A%2BYr5sImgyO%2Bh7tElqEdaq%2BLA2NP0VnfgV2vmUESWHla1dQrSk0ZgIKcZEjxSaP4zq3wR%2F0Olf%2FcCZXq15yJY%2Bx%2FaC%2FW96ZiJDvWw25XNwLRgCPsw0drDvgY6pgGnCdwVAoMFrx9hyAxAznzG%2FisQk3v08alPotMdNwCTGe3zk2CymKHdKYR0KjGlooXQHYff1podt4gNxF%2FD4a%2BzY77q9eJLFp12fnQKPOElTzmCu4ysT7aqkjx3oDTVhZ4MyPD0oOn5m9L%2FbxFIV79Ha%2B4iQPW83F2fMbSak%2FS3zU6jsn5xRSxpbuvVEIpjPGEatC9w4HOHL8aSSzxPAVK0IAMRhYfb&X-Amz-Signature=22c4ed97c30bb42e15f17043ae41a957188cc65aed8f8d7dc03c8db05c2a58fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVTQ3HC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHxyYaRBbS%2BJvUi3yyobbjBAUjfuS0BZq2YeXNOW8fPCAiBdBKL6e4jEakw7Ic0FE%2Bo0g1jhRROC1GI0UNzfzYm%2FUSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9LeOFrPfXTPW1yIQKtwDreiVt%2FMQq3m%2F%2BTxQP0jg6o98cmqdDHhJSnr4PZViuMUhLvL12t0AHyVlCn6iiVbvthWaOWUjulHCSu9k%2Bx1FkeTQvWZ4XCrpKsV11E5D35aen32dX3CFCmsh%2BkR9JqF2mSKJkWihyrImCJVxIg0lKtfqR3uacCYFOAQ5cr7DUMTdYWGW2q8yDJ9wQd3zUOMfIQUdwAq4LfXkTCjviJkIQKmRfAn3e3HTZUj%2Fa4A6VPxnVxrhKEoMehsjahuc4fTiGGcSexy92UUkDfPCOQclpPejalozT7%2B%2BpCDfOk2X1ZxjT5bL0CSXGW9ON5Bn8tMsL4QLR2080YxS7C8W6W8FtyEA4CyFTrfNBiEyfo2vAlyU898NkxByrZ21wJkjE465ZKcB9fEDTPfmx4vmUV64bweSgR%2BSm7vv%2FckwVe94IVv1QgH6c4lEdd70jPSSbIGv%2FUTp4240BynOFJS7XYxHTROez9j%2B4%2Fd8swuIChzCpC5W%2FIms0zmMQpdNW5jYbfuHoyoDqlIUdH3A%2BYr5sImgyO%2Bh7tElqEdaq%2BLA2NP0VnfgV2vmUESWHla1dQrSk0ZgIKcZEjxSaP4zq3wR%2F0Olf%2FcCZXq15yJY%2Bx%2FaC%2FW96ZiJDvWw25XNwLRgCPsw0drDvgY6pgGnCdwVAoMFrx9hyAxAznzG%2FisQk3v08alPotMdNwCTGe3zk2CymKHdKYR0KjGlooXQHYff1podt4gNxF%2FD4a%2BzY77q9eJLFp12fnQKPOElTzmCu4ysT7aqkjx3oDTVhZ4MyPD0oOn5m9L%2FbxFIV79Ha%2B4iQPW83F2fMbSak%2FS3zU6jsn5xRSxpbuvVEIpjPGEatC9w4HOHL8aSSzxPAVK0IAMRhYfb&X-Amz-Signature=bde1b7b2f59a00bf4071dd58fade23bb2e73af05fb67fde39c3d6f106ca0bbe3&X-Amz-SignedHeaders=host&x-id=GetObject)
