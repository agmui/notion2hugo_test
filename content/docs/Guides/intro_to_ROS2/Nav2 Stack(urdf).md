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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5LBU2B3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD45TYwMq2bEtjiugCohAE0Pl%2FPkWnhCowubE%2BCvvWq5AIhAIwcWeftVf4s5OCw4PvwRu8Sgsge6PDo1TzR8EboglO5KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh7qHzubRIvCWlKOUq3AMvIpNUf49jHHTV6BuQD6VTK84plLkbD6pPRYas00n8vJyVFKk5Lk3UB%2B5kzn5yGm3ka7%2Bj8MgJWps3xaclhJHKgTQO1hYVmFbX7h7d7X2D%2F%2FaTqNmQuQMAiKCBXRN4XLe1KLIBqf4Zg998XohkVTWW0NG0maZq0bLGUKonI8a%2FvQRYJLlTf0CVnlrUXE%2FEnJMOtL7f2CVGI9m4EAcpV3X48bmYnHvvkSKt3xq1xv2EIRBbisBbTuamU4Q%2FM1TSGU14WdCubKl88pNPCr0gDJXoiJ6Fr3OpxGpFDbYPqISR0vI86oOeuKinK0OLhOPDM1%2BHPTBf5gLHJtgRfcQmBwO3ml6ETqH68uxbUeYkCBvqYz%2BUyQsL1ID%2BnqFTLkKzuwW8BjXHoJFNAmCBVRkc734IhDZJmsDWri3YQEFiDVJkU4oZGmjZeU8WC08yPK3rVoMEhxRLWlyVu593uAD6sgagu7z53hhV7H2FwC9gmngoqHFuOcsteLSpwcn%2F%2Bv8CvnB7uoB29BJ6VJyZmP6T0VSqcn%2BjSpZQEcjbMiepdshpDNJyPccTS%2FxQV9Tz4eFVK9JO4CItVe0gzLJa2R8R7i3U7JNcw4SZHL1SLqmrTr5fxfTwzi5GB3yB2qepNzCk7qPABjqkAbs1aw5ObkQ22F2iPXH3Q0J6G44WohPo0TJ8Ec1OeAX7QVWWUovfsk3CKTAvUvvg2CNWP2qcP5Us%2FmKci1WdTlsz0jyWGJddWinpZCtFNzGP1v5MqcmGBYUTVdWNFds36Qz2sSiEglR0ZV53a%2BlD%2FByfPW7reB0E8lYmyIBQmC9nunCuadTg7cSLvZsrWt5FXUFTFgpMABduwGTbApC1Ck1MdPK%2B&X-Amz-Signature=0b542e2481ea59ec4eaec53a572444fbe766de5e86f66a8ae4f09f3eea76c270&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5LBU2B3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD45TYwMq2bEtjiugCohAE0Pl%2FPkWnhCowubE%2BCvvWq5AIhAIwcWeftVf4s5OCw4PvwRu8Sgsge6PDo1TzR8EboglO5KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh7qHzubRIvCWlKOUq3AMvIpNUf49jHHTV6BuQD6VTK84plLkbD6pPRYas00n8vJyVFKk5Lk3UB%2B5kzn5yGm3ka7%2Bj8MgJWps3xaclhJHKgTQO1hYVmFbX7h7d7X2D%2F%2FaTqNmQuQMAiKCBXRN4XLe1KLIBqf4Zg998XohkVTWW0NG0maZq0bLGUKonI8a%2FvQRYJLlTf0CVnlrUXE%2FEnJMOtL7f2CVGI9m4EAcpV3X48bmYnHvvkSKt3xq1xv2EIRBbisBbTuamU4Q%2FM1TSGU14WdCubKl88pNPCr0gDJXoiJ6Fr3OpxGpFDbYPqISR0vI86oOeuKinK0OLhOPDM1%2BHPTBf5gLHJtgRfcQmBwO3ml6ETqH68uxbUeYkCBvqYz%2BUyQsL1ID%2BnqFTLkKzuwW8BjXHoJFNAmCBVRkc734IhDZJmsDWri3YQEFiDVJkU4oZGmjZeU8WC08yPK3rVoMEhxRLWlyVu593uAD6sgagu7z53hhV7H2FwC9gmngoqHFuOcsteLSpwcn%2F%2Bv8CvnB7uoB29BJ6VJyZmP6T0VSqcn%2BjSpZQEcjbMiepdshpDNJyPccTS%2FxQV9Tz4eFVK9JO4CItVe0gzLJa2R8R7i3U7JNcw4SZHL1SLqmrTr5fxfTwzi5GB3yB2qepNzCk7qPABjqkAbs1aw5ObkQ22F2iPXH3Q0J6G44WohPo0TJ8Ec1OeAX7QVWWUovfsk3CKTAvUvvg2CNWP2qcP5Us%2FmKci1WdTlsz0jyWGJddWinpZCtFNzGP1v5MqcmGBYUTVdWNFds36Qz2sSiEglR0ZV53a%2BlD%2FByfPW7reB0E8lYmyIBQmC9nunCuadTg7cSLvZsrWt5FXUFTFgpMABduwGTbApC1Ck1MdPK%2B&X-Amz-Signature=dff1765bebf7998f5124e3fd5a4beb11f02644a76b8a038e3f77bf1012e6fd4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5LBU2B3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD45TYwMq2bEtjiugCohAE0Pl%2FPkWnhCowubE%2BCvvWq5AIhAIwcWeftVf4s5OCw4PvwRu8Sgsge6PDo1TzR8EboglO5KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh7qHzubRIvCWlKOUq3AMvIpNUf49jHHTV6BuQD6VTK84plLkbD6pPRYas00n8vJyVFKk5Lk3UB%2B5kzn5yGm3ka7%2Bj8MgJWps3xaclhJHKgTQO1hYVmFbX7h7d7X2D%2F%2FaTqNmQuQMAiKCBXRN4XLe1KLIBqf4Zg998XohkVTWW0NG0maZq0bLGUKonI8a%2FvQRYJLlTf0CVnlrUXE%2FEnJMOtL7f2CVGI9m4EAcpV3X48bmYnHvvkSKt3xq1xv2EIRBbisBbTuamU4Q%2FM1TSGU14WdCubKl88pNPCr0gDJXoiJ6Fr3OpxGpFDbYPqISR0vI86oOeuKinK0OLhOPDM1%2BHPTBf5gLHJtgRfcQmBwO3ml6ETqH68uxbUeYkCBvqYz%2BUyQsL1ID%2BnqFTLkKzuwW8BjXHoJFNAmCBVRkc734IhDZJmsDWri3YQEFiDVJkU4oZGmjZeU8WC08yPK3rVoMEhxRLWlyVu593uAD6sgagu7z53hhV7H2FwC9gmngoqHFuOcsteLSpwcn%2F%2Bv8CvnB7uoB29BJ6VJyZmP6T0VSqcn%2BjSpZQEcjbMiepdshpDNJyPccTS%2FxQV9Tz4eFVK9JO4CItVe0gzLJa2R8R7i3U7JNcw4SZHL1SLqmrTr5fxfTwzi5GB3yB2qepNzCk7qPABjqkAbs1aw5ObkQ22F2iPXH3Q0J6G44WohPo0TJ8Ec1OeAX7QVWWUovfsk3CKTAvUvvg2CNWP2qcP5Us%2FmKci1WdTlsz0jyWGJddWinpZCtFNzGP1v5MqcmGBYUTVdWNFds36Qz2sSiEglR0ZV53a%2BlD%2FByfPW7reB0E8lYmyIBQmC9nunCuadTg7cSLvZsrWt5FXUFTFgpMABduwGTbApC1Ck1MdPK%2B&X-Amz-Signature=d0179278abef1bcf93726ca9d341be8cf97d5996c754f6d0e03c12e90e1e3f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5LBU2B3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD45TYwMq2bEtjiugCohAE0Pl%2FPkWnhCowubE%2BCvvWq5AIhAIwcWeftVf4s5OCw4PvwRu8Sgsge6PDo1TzR8EboglO5KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh7qHzubRIvCWlKOUq3AMvIpNUf49jHHTV6BuQD6VTK84plLkbD6pPRYas00n8vJyVFKk5Lk3UB%2B5kzn5yGm3ka7%2Bj8MgJWps3xaclhJHKgTQO1hYVmFbX7h7d7X2D%2F%2FaTqNmQuQMAiKCBXRN4XLe1KLIBqf4Zg998XohkVTWW0NG0maZq0bLGUKonI8a%2FvQRYJLlTf0CVnlrUXE%2FEnJMOtL7f2CVGI9m4EAcpV3X48bmYnHvvkSKt3xq1xv2EIRBbisBbTuamU4Q%2FM1TSGU14WdCubKl88pNPCr0gDJXoiJ6Fr3OpxGpFDbYPqISR0vI86oOeuKinK0OLhOPDM1%2BHPTBf5gLHJtgRfcQmBwO3ml6ETqH68uxbUeYkCBvqYz%2BUyQsL1ID%2BnqFTLkKzuwW8BjXHoJFNAmCBVRkc734IhDZJmsDWri3YQEFiDVJkU4oZGmjZeU8WC08yPK3rVoMEhxRLWlyVu593uAD6sgagu7z53hhV7H2FwC9gmngoqHFuOcsteLSpwcn%2F%2Bv8CvnB7uoB29BJ6VJyZmP6T0VSqcn%2BjSpZQEcjbMiepdshpDNJyPccTS%2FxQV9Tz4eFVK9JO4CItVe0gzLJa2R8R7i3U7JNcw4SZHL1SLqmrTr5fxfTwzi5GB3yB2qepNzCk7qPABjqkAbs1aw5ObkQ22F2iPXH3Q0J6G44WohPo0TJ8Ec1OeAX7QVWWUovfsk3CKTAvUvvg2CNWP2qcP5Us%2FmKci1WdTlsz0jyWGJddWinpZCtFNzGP1v5MqcmGBYUTVdWNFds36Qz2sSiEglR0ZV53a%2BlD%2FByfPW7reB0E8lYmyIBQmC9nunCuadTg7cSLvZsrWt5FXUFTFgpMABduwGTbApC1Ck1MdPK%2B&X-Amz-Signature=cf878757885310a69260c6a4ba645cfe477f3944b52484058d8e993d693216d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5LBU2B3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD45TYwMq2bEtjiugCohAE0Pl%2FPkWnhCowubE%2BCvvWq5AIhAIwcWeftVf4s5OCw4PvwRu8Sgsge6PDo1TzR8EboglO5KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh7qHzubRIvCWlKOUq3AMvIpNUf49jHHTV6BuQD6VTK84plLkbD6pPRYas00n8vJyVFKk5Lk3UB%2B5kzn5yGm3ka7%2Bj8MgJWps3xaclhJHKgTQO1hYVmFbX7h7d7X2D%2F%2FaTqNmQuQMAiKCBXRN4XLe1KLIBqf4Zg998XohkVTWW0NG0maZq0bLGUKonI8a%2FvQRYJLlTf0CVnlrUXE%2FEnJMOtL7f2CVGI9m4EAcpV3X48bmYnHvvkSKt3xq1xv2EIRBbisBbTuamU4Q%2FM1TSGU14WdCubKl88pNPCr0gDJXoiJ6Fr3OpxGpFDbYPqISR0vI86oOeuKinK0OLhOPDM1%2BHPTBf5gLHJtgRfcQmBwO3ml6ETqH68uxbUeYkCBvqYz%2BUyQsL1ID%2BnqFTLkKzuwW8BjXHoJFNAmCBVRkc734IhDZJmsDWri3YQEFiDVJkU4oZGmjZeU8WC08yPK3rVoMEhxRLWlyVu593uAD6sgagu7z53hhV7H2FwC9gmngoqHFuOcsteLSpwcn%2F%2Bv8CvnB7uoB29BJ6VJyZmP6T0VSqcn%2BjSpZQEcjbMiepdshpDNJyPccTS%2FxQV9Tz4eFVK9JO4CItVe0gzLJa2R8R7i3U7JNcw4SZHL1SLqmrTr5fxfTwzi5GB3yB2qepNzCk7qPABjqkAbs1aw5ObkQ22F2iPXH3Q0J6G44WohPo0TJ8Ec1OeAX7QVWWUovfsk3CKTAvUvvg2CNWP2qcP5Us%2FmKci1WdTlsz0jyWGJddWinpZCtFNzGP1v5MqcmGBYUTVdWNFds36Qz2sSiEglR0ZV53a%2BlD%2FByfPW7reB0E8lYmyIBQmC9nunCuadTg7cSLvZsrWt5FXUFTFgpMABduwGTbApC1Ck1MdPK%2B&X-Amz-Signature=1ac78442b722a5b6e8979161412e3f6b133603a6440491fce869f37657c576c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5LBU2B3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD45TYwMq2bEtjiugCohAE0Pl%2FPkWnhCowubE%2BCvvWq5AIhAIwcWeftVf4s5OCw4PvwRu8Sgsge6PDo1TzR8EboglO5KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh7qHzubRIvCWlKOUq3AMvIpNUf49jHHTV6BuQD6VTK84plLkbD6pPRYas00n8vJyVFKk5Lk3UB%2B5kzn5yGm3ka7%2Bj8MgJWps3xaclhJHKgTQO1hYVmFbX7h7d7X2D%2F%2FaTqNmQuQMAiKCBXRN4XLe1KLIBqf4Zg998XohkVTWW0NG0maZq0bLGUKonI8a%2FvQRYJLlTf0CVnlrUXE%2FEnJMOtL7f2CVGI9m4EAcpV3X48bmYnHvvkSKt3xq1xv2EIRBbisBbTuamU4Q%2FM1TSGU14WdCubKl88pNPCr0gDJXoiJ6Fr3OpxGpFDbYPqISR0vI86oOeuKinK0OLhOPDM1%2BHPTBf5gLHJtgRfcQmBwO3ml6ETqH68uxbUeYkCBvqYz%2BUyQsL1ID%2BnqFTLkKzuwW8BjXHoJFNAmCBVRkc734IhDZJmsDWri3YQEFiDVJkU4oZGmjZeU8WC08yPK3rVoMEhxRLWlyVu593uAD6sgagu7z53hhV7H2FwC9gmngoqHFuOcsteLSpwcn%2F%2Bv8CvnB7uoB29BJ6VJyZmP6T0VSqcn%2BjSpZQEcjbMiepdshpDNJyPccTS%2FxQV9Tz4eFVK9JO4CItVe0gzLJa2R8R7i3U7JNcw4SZHL1SLqmrTr5fxfTwzi5GB3yB2qepNzCk7qPABjqkAbs1aw5ObkQ22F2iPXH3Q0J6G44WohPo0TJ8Ec1OeAX7QVWWUovfsk3CKTAvUvvg2CNWP2qcP5Us%2FmKci1WdTlsz0jyWGJddWinpZCtFNzGP1v5MqcmGBYUTVdWNFds36Qz2sSiEglR0ZV53a%2BlD%2FByfPW7reB0E8lYmyIBQmC9nunCuadTg7cSLvZsrWt5FXUFTFgpMABduwGTbApC1Ck1MdPK%2B&X-Amz-Signature=bb76223f6ff3b1617c1fa1e91922a6e78a5cf05898f57afe2f76b567496e543b&X-Amz-SignedHeaders=host&x-id=GetObject)
