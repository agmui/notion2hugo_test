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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DBVQYJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC2XO8ryyoJbkf387vKXl2gsGcRcC7g0G5%2BbfpW8F76EgIhANJroMlBCeqD3ZImStz5EY0cqjGryzf11XFJ0ZoGGFqMKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyelT7sSRCRDT71dGUq3AMMqSxS9J4JBkQBjbeuL%2BH%2Bb3XZi5OHIPI%2FdumlLGRr7dGLgnbBgVUlgikqk7vu0jBIrjFzjJmw162Zwszv0qiM5Hp2ovvruIfaQVkEMcNhUwiApVRUXtMHxpPievEj4bg%2B4Hwcj6UMz%2F7G7SfKsU9nnIALw5p2ieYg9Iyu4i5jXZNanK9tEU7P43KneQnP13Uif0OjfI7xIYEPI4h3Et409eQC11Mopmkf5Srm5fWXjpgJX4QbCPJuVWClpL5ECfUbFbWeitEKY7jAP%2BSgLE3y7TDoeQ%2FmMwmTJ1sdIkbJCPn%2BHJj1sBIAAHBGkW5YtY%2FtDJuIUD2MmYUNEsFQtM%2FLKtLt%2FvXmUQAuJ%2B%2Bi%2BNZzF%2Ff8UpsXdRupgO33P3%2FYUisQMhtgtpCqnI53IAGloXaOUm3uelhSVYK1QRRYza2O3m3OJeVuqh%2BPwECSR9arxtLlpmJmffZ53Ly6YB0BqO%2F2o32R7flKxYRdHiURoH1k%2FrA5%2BlVaGZZ6MeMIrl%2BU48A80RzV6jQSfLpEVbYt43OTTISAg3ElvtKO%2B1Msw9hN0%2FwdNq%2BddS0Q5vHce9EjWw19p5bo9bP4ve8tdjsEKcQGA8o%2F8iC30Q8p3KNygFEUryBC62ygVyUiVwBtcDC694rBBjqkAfJvGRTF3Ea88C5VnroHpXsawMO8U8jzZ7%2ByPVWN5S6PHMKn%2BSOoITsSIjj8wm8oQFaISFOHOdQk6a90wSFdfnw6KU3wxWddBXl0g8NtewnHGcFF4dbE5u%2BO5rirBBH5%2BcUANkCaHUq93Xzj8B7V46UaofhOzadtkrVMD6l2C49OPj8kI2CUruqDIosiN%2FzaZzEZjsi8tY8Sk86VPeFJbcj%2BqcxV&X-Amz-Signature=65207c43a02681c356d17f174395e4ed7de657c280239d478d9f7073962be7b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DBVQYJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC2XO8ryyoJbkf387vKXl2gsGcRcC7g0G5%2BbfpW8F76EgIhANJroMlBCeqD3ZImStz5EY0cqjGryzf11XFJ0ZoGGFqMKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyelT7sSRCRDT71dGUq3AMMqSxS9J4JBkQBjbeuL%2BH%2Bb3XZi5OHIPI%2FdumlLGRr7dGLgnbBgVUlgikqk7vu0jBIrjFzjJmw162Zwszv0qiM5Hp2ovvruIfaQVkEMcNhUwiApVRUXtMHxpPievEj4bg%2B4Hwcj6UMz%2F7G7SfKsU9nnIALw5p2ieYg9Iyu4i5jXZNanK9tEU7P43KneQnP13Uif0OjfI7xIYEPI4h3Et409eQC11Mopmkf5Srm5fWXjpgJX4QbCPJuVWClpL5ECfUbFbWeitEKY7jAP%2BSgLE3y7TDoeQ%2FmMwmTJ1sdIkbJCPn%2BHJj1sBIAAHBGkW5YtY%2FtDJuIUD2MmYUNEsFQtM%2FLKtLt%2FvXmUQAuJ%2B%2Bi%2BNZzF%2Ff8UpsXdRupgO33P3%2FYUisQMhtgtpCqnI53IAGloXaOUm3uelhSVYK1QRRYza2O3m3OJeVuqh%2BPwECSR9arxtLlpmJmffZ53Ly6YB0BqO%2F2o32R7flKxYRdHiURoH1k%2FrA5%2BlVaGZZ6MeMIrl%2BU48A80RzV6jQSfLpEVbYt43OTTISAg3ElvtKO%2B1Msw9hN0%2FwdNq%2BddS0Q5vHce9EjWw19p5bo9bP4ve8tdjsEKcQGA8o%2F8iC30Q8p3KNygFEUryBC62ygVyUiVwBtcDC694rBBjqkAfJvGRTF3Ea88C5VnroHpXsawMO8U8jzZ7%2ByPVWN5S6PHMKn%2BSOoITsSIjj8wm8oQFaISFOHOdQk6a90wSFdfnw6KU3wxWddBXl0g8NtewnHGcFF4dbE5u%2BO5rirBBH5%2BcUANkCaHUq93Xzj8B7V46UaofhOzadtkrVMD6l2C49OPj8kI2CUruqDIosiN%2FzaZzEZjsi8tY8Sk86VPeFJbcj%2BqcxV&X-Amz-Signature=362ef652343a9f3291b49586fa2be486fc3b44372f88b072b582e2158bfd073e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DBVQYJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC2XO8ryyoJbkf387vKXl2gsGcRcC7g0G5%2BbfpW8F76EgIhANJroMlBCeqD3ZImStz5EY0cqjGryzf11XFJ0ZoGGFqMKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyelT7sSRCRDT71dGUq3AMMqSxS9J4JBkQBjbeuL%2BH%2Bb3XZi5OHIPI%2FdumlLGRr7dGLgnbBgVUlgikqk7vu0jBIrjFzjJmw162Zwszv0qiM5Hp2ovvruIfaQVkEMcNhUwiApVRUXtMHxpPievEj4bg%2B4Hwcj6UMz%2F7G7SfKsU9nnIALw5p2ieYg9Iyu4i5jXZNanK9tEU7P43KneQnP13Uif0OjfI7xIYEPI4h3Et409eQC11Mopmkf5Srm5fWXjpgJX4QbCPJuVWClpL5ECfUbFbWeitEKY7jAP%2BSgLE3y7TDoeQ%2FmMwmTJ1sdIkbJCPn%2BHJj1sBIAAHBGkW5YtY%2FtDJuIUD2MmYUNEsFQtM%2FLKtLt%2FvXmUQAuJ%2B%2Bi%2BNZzF%2Ff8UpsXdRupgO33P3%2FYUisQMhtgtpCqnI53IAGloXaOUm3uelhSVYK1QRRYza2O3m3OJeVuqh%2BPwECSR9arxtLlpmJmffZ53Ly6YB0BqO%2F2o32R7flKxYRdHiURoH1k%2FrA5%2BlVaGZZ6MeMIrl%2BU48A80RzV6jQSfLpEVbYt43OTTISAg3ElvtKO%2B1Msw9hN0%2FwdNq%2BddS0Q5vHce9EjWw19p5bo9bP4ve8tdjsEKcQGA8o%2F8iC30Q8p3KNygFEUryBC62ygVyUiVwBtcDC694rBBjqkAfJvGRTF3Ea88C5VnroHpXsawMO8U8jzZ7%2ByPVWN5S6PHMKn%2BSOoITsSIjj8wm8oQFaISFOHOdQk6a90wSFdfnw6KU3wxWddBXl0g8NtewnHGcFF4dbE5u%2BO5rirBBH5%2BcUANkCaHUq93Xzj8B7V46UaofhOzadtkrVMD6l2C49OPj8kI2CUruqDIosiN%2FzaZzEZjsi8tY8Sk86VPeFJbcj%2BqcxV&X-Amz-Signature=ff7a638cb68cf61178929248f7cac885f990791982c7268c7dafd7a1cc9b5261&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DBVQYJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC2XO8ryyoJbkf387vKXl2gsGcRcC7g0G5%2BbfpW8F76EgIhANJroMlBCeqD3ZImStz5EY0cqjGryzf11XFJ0ZoGGFqMKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyelT7sSRCRDT71dGUq3AMMqSxS9J4JBkQBjbeuL%2BH%2Bb3XZi5OHIPI%2FdumlLGRr7dGLgnbBgVUlgikqk7vu0jBIrjFzjJmw162Zwszv0qiM5Hp2ovvruIfaQVkEMcNhUwiApVRUXtMHxpPievEj4bg%2B4Hwcj6UMz%2F7G7SfKsU9nnIALw5p2ieYg9Iyu4i5jXZNanK9tEU7P43KneQnP13Uif0OjfI7xIYEPI4h3Et409eQC11Mopmkf5Srm5fWXjpgJX4QbCPJuVWClpL5ECfUbFbWeitEKY7jAP%2BSgLE3y7TDoeQ%2FmMwmTJ1sdIkbJCPn%2BHJj1sBIAAHBGkW5YtY%2FtDJuIUD2MmYUNEsFQtM%2FLKtLt%2FvXmUQAuJ%2B%2Bi%2BNZzF%2Ff8UpsXdRupgO33P3%2FYUisQMhtgtpCqnI53IAGloXaOUm3uelhSVYK1QRRYza2O3m3OJeVuqh%2BPwECSR9arxtLlpmJmffZ53Ly6YB0BqO%2F2o32R7flKxYRdHiURoH1k%2FrA5%2BlVaGZZ6MeMIrl%2BU48A80RzV6jQSfLpEVbYt43OTTISAg3ElvtKO%2B1Msw9hN0%2FwdNq%2BddS0Q5vHce9EjWw19p5bo9bP4ve8tdjsEKcQGA8o%2F8iC30Q8p3KNygFEUryBC62ygVyUiVwBtcDC694rBBjqkAfJvGRTF3Ea88C5VnroHpXsawMO8U8jzZ7%2ByPVWN5S6PHMKn%2BSOoITsSIjj8wm8oQFaISFOHOdQk6a90wSFdfnw6KU3wxWddBXl0g8NtewnHGcFF4dbE5u%2BO5rirBBH5%2BcUANkCaHUq93Xzj8B7V46UaofhOzadtkrVMD6l2C49OPj8kI2CUruqDIosiN%2FzaZzEZjsi8tY8Sk86VPeFJbcj%2BqcxV&X-Amz-Signature=550bcf128816580bcce1c72b161cc28b6808deae247e1f27c6caee244ae7d80c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DBVQYJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC2XO8ryyoJbkf387vKXl2gsGcRcC7g0G5%2BbfpW8F76EgIhANJroMlBCeqD3ZImStz5EY0cqjGryzf11XFJ0ZoGGFqMKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyelT7sSRCRDT71dGUq3AMMqSxS9J4JBkQBjbeuL%2BH%2Bb3XZi5OHIPI%2FdumlLGRr7dGLgnbBgVUlgikqk7vu0jBIrjFzjJmw162Zwszv0qiM5Hp2ovvruIfaQVkEMcNhUwiApVRUXtMHxpPievEj4bg%2B4Hwcj6UMz%2F7G7SfKsU9nnIALw5p2ieYg9Iyu4i5jXZNanK9tEU7P43KneQnP13Uif0OjfI7xIYEPI4h3Et409eQC11Mopmkf5Srm5fWXjpgJX4QbCPJuVWClpL5ECfUbFbWeitEKY7jAP%2BSgLE3y7TDoeQ%2FmMwmTJ1sdIkbJCPn%2BHJj1sBIAAHBGkW5YtY%2FtDJuIUD2MmYUNEsFQtM%2FLKtLt%2FvXmUQAuJ%2B%2Bi%2BNZzF%2Ff8UpsXdRupgO33P3%2FYUisQMhtgtpCqnI53IAGloXaOUm3uelhSVYK1QRRYza2O3m3OJeVuqh%2BPwECSR9arxtLlpmJmffZ53Ly6YB0BqO%2F2o32R7flKxYRdHiURoH1k%2FrA5%2BlVaGZZ6MeMIrl%2BU48A80RzV6jQSfLpEVbYt43OTTISAg3ElvtKO%2B1Msw9hN0%2FwdNq%2BddS0Q5vHce9EjWw19p5bo9bP4ve8tdjsEKcQGA8o%2F8iC30Q8p3KNygFEUryBC62ygVyUiVwBtcDC694rBBjqkAfJvGRTF3Ea88C5VnroHpXsawMO8U8jzZ7%2ByPVWN5S6PHMKn%2BSOoITsSIjj8wm8oQFaISFOHOdQk6a90wSFdfnw6KU3wxWddBXl0g8NtewnHGcFF4dbE5u%2BO5rirBBH5%2BcUANkCaHUq93Xzj8B7V46UaofhOzadtkrVMD6l2C49OPj8kI2CUruqDIosiN%2FzaZzEZjsi8tY8Sk86VPeFJbcj%2BqcxV&X-Amz-Signature=557af864cee15f2e4d6199e09cc6ce3f3478e44789b94237ec780d08db3691ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DBVQYJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC2XO8ryyoJbkf387vKXl2gsGcRcC7g0G5%2BbfpW8F76EgIhANJroMlBCeqD3ZImStz5EY0cqjGryzf11XFJ0ZoGGFqMKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyelT7sSRCRDT71dGUq3AMMqSxS9J4JBkQBjbeuL%2BH%2Bb3XZi5OHIPI%2FdumlLGRr7dGLgnbBgVUlgikqk7vu0jBIrjFzjJmw162Zwszv0qiM5Hp2ovvruIfaQVkEMcNhUwiApVRUXtMHxpPievEj4bg%2B4Hwcj6UMz%2F7G7SfKsU9nnIALw5p2ieYg9Iyu4i5jXZNanK9tEU7P43KneQnP13Uif0OjfI7xIYEPI4h3Et409eQC11Mopmkf5Srm5fWXjpgJX4QbCPJuVWClpL5ECfUbFbWeitEKY7jAP%2BSgLE3y7TDoeQ%2FmMwmTJ1sdIkbJCPn%2BHJj1sBIAAHBGkW5YtY%2FtDJuIUD2MmYUNEsFQtM%2FLKtLt%2FvXmUQAuJ%2B%2Bi%2BNZzF%2Ff8UpsXdRupgO33P3%2FYUisQMhtgtpCqnI53IAGloXaOUm3uelhSVYK1QRRYza2O3m3OJeVuqh%2BPwECSR9arxtLlpmJmffZ53Ly6YB0BqO%2F2o32R7flKxYRdHiURoH1k%2FrA5%2BlVaGZZ6MeMIrl%2BU48A80RzV6jQSfLpEVbYt43OTTISAg3ElvtKO%2B1Msw9hN0%2FwdNq%2BddS0Q5vHce9EjWw19p5bo9bP4ve8tdjsEKcQGA8o%2F8iC30Q8p3KNygFEUryBC62ygVyUiVwBtcDC694rBBjqkAfJvGRTF3Ea88C5VnroHpXsawMO8U8jzZ7%2ByPVWN5S6PHMKn%2BSOoITsSIjj8wm8oQFaISFOHOdQk6a90wSFdfnw6KU3wxWddBXl0g8NtewnHGcFF4dbE5u%2BO5rirBBH5%2BcUANkCaHUq93Xzj8B7V46UaofhOzadtkrVMD6l2C49OPj8kI2CUruqDIosiN%2FzaZzEZjsi8tY8Sk86VPeFJbcj%2BqcxV&X-Amz-Signature=9665024529b7b81ef2a4aba332db6cf94210a7682a9e4a01c7c0470c024a3bae&X-Amz-SignedHeaders=host&x-id=GetObject)
