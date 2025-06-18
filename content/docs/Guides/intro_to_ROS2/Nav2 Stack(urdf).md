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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6TI64M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCTJgP06uTPB0W%2BEKdh%2BbmeFn5wQGhVE3nUQDneTuaQwIgQglNm%2F9lYt42XElVSwpIlhbgV0v7ZG0gnqtLBIEh4fEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrXBUcm6fyxwhCnsircAxchoORJ2LhetXfCfBlW8ChAVJnBxW46v49Grekk3A1egB4bgwhZ7n39KV4aeLe%2F3Vdju0xO7Q8o5BOJJAV19SKH5u8O4tsx9n7nAGZmFeVdE3NYCcaHBmZ6s6l9AEIwuNvWorkpotLWbsm5twdyJweCqGYICxvERV%2Fyeti5YwSXyOCnzsW8qj%2BPR9f4FjDSvZxZWxhPuLHZ4oUCCO8J4n0Qz6H%2Bv9oAQJEBcBCwSpTnF0QZs2pcH9Tw6v7mQ1pyQieqbIWRRDAePlkMngXOLUEDyTKN%2FH2oHlb1%2BG9PHa1koHNtLXqSd0gl7TUIbLhgNnv%2FK7OSRa2ORojcNrl32Z8bgvzqi2%2BsCoKHR5AvZnuSWBIaBnUonDI%2BBqqxpcLwRJbtSHl7iDZrLYPsG8zFgzBJQHjYu32FBN%2BPNuIoOEm5uuF6vMkc1BqTVQVGxqoHy9899aWSZRZXc0sRDfaVRYYqoP8ttxZv60U4bNdMxx%2BKMQHC2L4bWAZOmF40joWsl70mAPCof8LWDfChQkbsmlAgHSLb75nQ%2FrwwJJYYY42LNYzj2ay8906pleQaaPAj8ba50knYpAsHYat6O4cGR9XNM1yeNuYz1u%2Fsr157UUVS81eqm6yZb1LLzR8nMMvsx8IGOqUBs9l5VO5ACMEcpOyhJMOPjkCTj8QRKk6JNedKN3S82XIIuybGgGOWt3aARQWT7UmI6yUKCi71YXTbyI4%2Fy%2F8vy%2BCVuYaA03K6CmY%2FVsdwvMW5UlgYoeNim%2BYpTILOR0%2B41shqCskFb1ChLoM8gGtsvwwm29YIMue9tkLhSxR5qBxjigkk2vdqK4YbRdWyfaCHkFWMhx66qo0TStDgcb6xYKGrbz56&X-Amz-Signature=1a5369e26101f0cf0370b89dfca5162808cdd26f70497590e149e24875eb0157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6TI64M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCTJgP06uTPB0W%2BEKdh%2BbmeFn5wQGhVE3nUQDneTuaQwIgQglNm%2F9lYt42XElVSwpIlhbgV0v7ZG0gnqtLBIEh4fEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrXBUcm6fyxwhCnsircAxchoORJ2LhetXfCfBlW8ChAVJnBxW46v49Grekk3A1egB4bgwhZ7n39KV4aeLe%2F3Vdju0xO7Q8o5BOJJAV19SKH5u8O4tsx9n7nAGZmFeVdE3NYCcaHBmZ6s6l9AEIwuNvWorkpotLWbsm5twdyJweCqGYICxvERV%2Fyeti5YwSXyOCnzsW8qj%2BPR9f4FjDSvZxZWxhPuLHZ4oUCCO8J4n0Qz6H%2Bv9oAQJEBcBCwSpTnF0QZs2pcH9Tw6v7mQ1pyQieqbIWRRDAePlkMngXOLUEDyTKN%2FH2oHlb1%2BG9PHa1koHNtLXqSd0gl7TUIbLhgNnv%2FK7OSRa2ORojcNrl32Z8bgvzqi2%2BsCoKHR5AvZnuSWBIaBnUonDI%2BBqqxpcLwRJbtSHl7iDZrLYPsG8zFgzBJQHjYu32FBN%2BPNuIoOEm5uuF6vMkc1BqTVQVGxqoHy9899aWSZRZXc0sRDfaVRYYqoP8ttxZv60U4bNdMxx%2BKMQHC2L4bWAZOmF40joWsl70mAPCof8LWDfChQkbsmlAgHSLb75nQ%2FrwwJJYYY42LNYzj2ay8906pleQaaPAj8ba50knYpAsHYat6O4cGR9XNM1yeNuYz1u%2Fsr157UUVS81eqm6yZb1LLzR8nMMvsx8IGOqUBs9l5VO5ACMEcpOyhJMOPjkCTj8QRKk6JNedKN3S82XIIuybGgGOWt3aARQWT7UmI6yUKCi71YXTbyI4%2Fy%2F8vy%2BCVuYaA03K6CmY%2FVsdwvMW5UlgYoeNim%2BYpTILOR0%2B41shqCskFb1ChLoM8gGtsvwwm29YIMue9tkLhSxR5qBxjigkk2vdqK4YbRdWyfaCHkFWMhx66qo0TStDgcb6xYKGrbz56&X-Amz-Signature=f38977d230fef5584caa6063b5cc0d08469c0c6a6dcd399c1179dc66893578ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6TI64M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCTJgP06uTPB0W%2BEKdh%2BbmeFn5wQGhVE3nUQDneTuaQwIgQglNm%2F9lYt42XElVSwpIlhbgV0v7ZG0gnqtLBIEh4fEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrXBUcm6fyxwhCnsircAxchoORJ2LhetXfCfBlW8ChAVJnBxW46v49Grekk3A1egB4bgwhZ7n39KV4aeLe%2F3Vdju0xO7Q8o5BOJJAV19SKH5u8O4tsx9n7nAGZmFeVdE3NYCcaHBmZ6s6l9AEIwuNvWorkpotLWbsm5twdyJweCqGYICxvERV%2Fyeti5YwSXyOCnzsW8qj%2BPR9f4FjDSvZxZWxhPuLHZ4oUCCO8J4n0Qz6H%2Bv9oAQJEBcBCwSpTnF0QZs2pcH9Tw6v7mQ1pyQieqbIWRRDAePlkMngXOLUEDyTKN%2FH2oHlb1%2BG9PHa1koHNtLXqSd0gl7TUIbLhgNnv%2FK7OSRa2ORojcNrl32Z8bgvzqi2%2BsCoKHR5AvZnuSWBIaBnUonDI%2BBqqxpcLwRJbtSHl7iDZrLYPsG8zFgzBJQHjYu32FBN%2BPNuIoOEm5uuF6vMkc1BqTVQVGxqoHy9899aWSZRZXc0sRDfaVRYYqoP8ttxZv60U4bNdMxx%2BKMQHC2L4bWAZOmF40joWsl70mAPCof8LWDfChQkbsmlAgHSLb75nQ%2FrwwJJYYY42LNYzj2ay8906pleQaaPAj8ba50knYpAsHYat6O4cGR9XNM1yeNuYz1u%2Fsr157UUVS81eqm6yZb1LLzR8nMMvsx8IGOqUBs9l5VO5ACMEcpOyhJMOPjkCTj8QRKk6JNedKN3S82XIIuybGgGOWt3aARQWT7UmI6yUKCi71YXTbyI4%2Fy%2F8vy%2BCVuYaA03K6CmY%2FVsdwvMW5UlgYoeNim%2BYpTILOR0%2B41shqCskFb1ChLoM8gGtsvwwm29YIMue9tkLhSxR5qBxjigkk2vdqK4YbRdWyfaCHkFWMhx66qo0TStDgcb6xYKGrbz56&X-Amz-Signature=6bcf499dccf138f8d113d767419da4e75a230b3649a69d60be0deb15c7f2bb2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6TI64M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCTJgP06uTPB0W%2BEKdh%2BbmeFn5wQGhVE3nUQDneTuaQwIgQglNm%2F9lYt42XElVSwpIlhbgV0v7ZG0gnqtLBIEh4fEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrXBUcm6fyxwhCnsircAxchoORJ2LhetXfCfBlW8ChAVJnBxW46v49Grekk3A1egB4bgwhZ7n39KV4aeLe%2F3Vdju0xO7Q8o5BOJJAV19SKH5u8O4tsx9n7nAGZmFeVdE3NYCcaHBmZ6s6l9AEIwuNvWorkpotLWbsm5twdyJweCqGYICxvERV%2Fyeti5YwSXyOCnzsW8qj%2BPR9f4FjDSvZxZWxhPuLHZ4oUCCO8J4n0Qz6H%2Bv9oAQJEBcBCwSpTnF0QZs2pcH9Tw6v7mQ1pyQieqbIWRRDAePlkMngXOLUEDyTKN%2FH2oHlb1%2BG9PHa1koHNtLXqSd0gl7TUIbLhgNnv%2FK7OSRa2ORojcNrl32Z8bgvzqi2%2BsCoKHR5AvZnuSWBIaBnUonDI%2BBqqxpcLwRJbtSHl7iDZrLYPsG8zFgzBJQHjYu32FBN%2BPNuIoOEm5uuF6vMkc1BqTVQVGxqoHy9899aWSZRZXc0sRDfaVRYYqoP8ttxZv60U4bNdMxx%2BKMQHC2L4bWAZOmF40joWsl70mAPCof8LWDfChQkbsmlAgHSLb75nQ%2FrwwJJYYY42LNYzj2ay8906pleQaaPAj8ba50knYpAsHYat6O4cGR9XNM1yeNuYz1u%2Fsr157UUVS81eqm6yZb1LLzR8nMMvsx8IGOqUBs9l5VO5ACMEcpOyhJMOPjkCTj8QRKk6JNedKN3S82XIIuybGgGOWt3aARQWT7UmI6yUKCi71YXTbyI4%2Fy%2F8vy%2BCVuYaA03K6CmY%2FVsdwvMW5UlgYoeNim%2BYpTILOR0%2B41shqCskFb1ChLoM8gGtsvwwm29YIMue9tkLhSxR5qBxjigkk2vdqK4YbRdWyfaCHkFWMhx66qo0TStDgcb6xYKGrbz56&X-Amz-Signature=f51a3a72f61a7d7741cd17fc642b59796d60057e5f2fde8396ece34eb9764528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6TI64M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCTJgP06uTPB0W%2BEKdh%2BbmeFn5wQGhVE3nUQDneTuaQwIgQglNm%2F9lYt42XElVSwpIlhbgV0v7ZG0gnqtLBIEh4fEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrXBUcm6fyxwhCnsircAxchoORJ2LhetXfCfBlW8ChAVJnBxW46v49Grekk3A1egB4bgwhZ7n39KV4aeLe%2F3Vdju0xO7Q8o5BOJJAV19SKH5u8O4tsx9n7nAGZmFeVdE3NYCcaHBmZ6s6l9AEIwuNvWorkpotLWbsm5twdyJweCqGYICxvERV%2Fyeti5YwSXyOCnzsW8qj%2BPR9f4FjDSvZxZWxhPuLHZ4oUCCO8J4n0Qz6H%2Bv9oAQJEBcBCwSpTnF0QZs2pcH9Tw6v7mQ1pyQieqbIWRRDAePlkMngXOLUEDyTKN%2FH2oHlb1%2BG9PHa1koHNtLXqSd0gl7TUIbLhgNnv%2FK7OSRa2ORojcNrl32Z8bgvzqi2%2BsCoKHR5AvZnuSWBIaBnUonDI%2BBqqxpcLwRJbtSHl7iDZrLYPsG8zFgzBJQHjYu32FBN%2BPNuIoOEm5uuF6vMkc1BqTVQVGxqoHy9899aWSZRZXc0sRDfaVRYYqoP8ttxZv60U4bNdMxx%2BKMQHC2L4bWAZOmF40joWsl70mAPCof8LWDfChQkbsmlAgHSLb75nQ%2FrwwJJYYY42LNYzj2ay8906pleQaaPAj8ba50knYpAsHYat6O4cGR9XNM1yeNuYz1u%2Fsr157UUVS81eqm6yZb1LLzR8nMMvsx8IGOqUBs9l5VO5ACMEcpOyhJMOPjkCTj8QRKk6JNedKN3S82XIIuybGgGOWt3aARQWT7UmI6yUKCi71YXTbyI4%2Fy%2F8vy%2BCVuYaA03K6CmY%2FVsdwvMW5UlgYoeNim%2BYpTILOR0%2B41shqCskFb1ChLoM8gGtsvwwm29YIMue9tkLhSxR5qBxjigkk2vdqK4YbRdWyfaCHkFWMhx66qo0TStDgcb6xYKGrbz56&X-Amz-Signature=89b4806e346e0b1c4216de16d1652d87aa6993dc852b5b639744a4faf3faaae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6TI64M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCTJgP06uTPB0W%2BEKdh%2BbmeFn5wQGhVE3nUQDneTuaQwIgQglNm%2F9lYt42XElVSwpIlhbgV0v7ZG0gnqtLBIEh4fEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrXBUcm6fyxwhCnsircAxchoORJ2LhetXfCfBlW8ChAVJnBxW46v49Grekk3A1egB4bgwhZ7n39KV4aeLe%2F3Vdju0xO7Q8o5BOJJAV19SKH5u8O4tsx9n7nAGZmFeVdE3NYCcaHBmZ6s6l9AEIwuNvWorkpotLWbsm5twdyJweCqGYICxvERV%2Fyeti5YwSXyOCnzsW8qj%2BPR9f4FjDSvZxZWxhPuLHZ4oUCCO8J4n0Qz6H%2Bv9oAQJEBcBCwSpTnF0QZs2pcH9Tw6v7mQ1pyQieqbIWRRDAePlkMngXOLUEDyTKN%2FH2oHlb1%2BG9PHa1koHNtLXqSd0gl7TUIbLhgNnv%2FK7OSRa2ORojcNrl32Z8bgvzqi2%2BsCoKHR5AvZnuSWBIaBnUonDI%2BBqqxpcLwRJbtSHl7iDZrLYPsG8zFgzBJQHjYu32FBN%2BPNuIoOEm5uuF6vMkc1BqTVQVGxqoHy9899aWSZRZXc0sRDfaVRYYqoP8ttxZv60U4bNdMxx%2BKMQHC2L4bWAZOmF40joWsl70mAPCof8LWDfChQkbsmlAgHSLb75nQ%2FrwwJJYYY42LNYzj2ay8906pleQaaPAj8ba50knYpAsHYat6O4cGR9XNM1yeNuYz1u%2Fsr157UUVS81eqm6yZb1LLzR8nMMvsx8IGOqUBs9l5VO5ACMEcpOyhJMOPjkCTj8QRKk6JNedKN3S82XIIuybGgGOWt3aARQWT7UmI6yUKCi71YXTbyI4%2Fy%2F8vy%2BCVuYaA03K6CmY%2FVsdwvMW5UlgYoeNim%2BYpTILOR0%2B41shqCskFb1ChLoM8gGtsvwwm29YIMue9tkLhSxR5qBxjigkk2vdqK4YbRdWyfaCHkFWMhx66qo0TStDgcb6xYKGrbz56&X-Amz-Signature=84b8ef22c5a3ed2a1d3e64a49120469aca4de2ec4538a8e6f23d4549ca853dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
