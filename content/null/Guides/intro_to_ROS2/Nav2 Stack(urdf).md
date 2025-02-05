---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYVMKGAI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIDMFo7FF0ETfS0CgaGa%2BPWic2dUTGyJAxFiCtLpCfbljAiEAuHMkD2fAXEHV4ers0aaAUKed492%2FdMK74oycqmitAhMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAT%2Fz2Zd6TCY95F4HyrcA74spgaemSvpwPCJvG7vKvWWNSKEAfOpGikFBOkXl5EQolNp8DwnfHE4dsX%2FOqFqs7Xfzp2ULVfzlGN%2BlS4HIQm9%2BmR629WYjYBLtRQJ4qCD4OE0CEAITlDAB2A4JIQO3%2Ba9VzF44aFGRencvfGG%2FRr%2BN6Qdty3d7XXOMyhc5DP6If%2FZBV4qLK6Pdl4N2xhpbOQ%2F9rLc7YRmDKuMVwQ3N1ROLfxDfThxmsL7dg4oSVV%2Fq9sagU%2FXMV5KEflr6d%2B9sMCzSUTq3nCEwuPDlc5vle%2B6%2BlWWJAtM6nXYYwMzjMMHP8EA61hlM8YBnWWYTixApD8itDC0DTFHG0FQmQg7NeNRXu2zsJlhrzIhP7NXLtUjG%2BOew9%2BhbpSRCsuS6lHFykIHpYbar%2BuJZYceadwuXdUzx3cMa55ABLlCfrQMtMAsXbsJE8Yzla9F009VDWB0lGDDnkcDYYm%2BpX%2FezyzvoAI1uXEXblWhKrm4QC44lLRE3RkaZ8qz%2BLsIijSK4dMPRTogF7HDl4ih1aZPObE6ARyf%2BefTKMs62pTtXVj8sqMpeMtrS4%2FIYfqFKgna93UoVWjjQdysONiJQWmB1ehYorXgDFD%2BEUmU3VLm9wc4iEJt%2BG3zNWl7FDU2OoSSMMCXjL0GOqUB8%2FIOcombwpzYj5g256n%2F5YJdXwcTmKUrMoLvQ9uV2Yfrxyk0u49Nt109f8Q4SM2beNkZgTHINujW1J3ZRDg5zPpRHtWgwr45aPhpaZyY3eK2qwjahz1jaA%2BTCHSunAIT81k4t2Aq3JWWWZgqqBsZGT7Qgu2dZBrDiVaK6GXEwagLv93wl4NtKZJpdLKvzmuXbGMklF%2FUqDoG8eu0KJR3DrB7r5hL&X-Amz-Signature=5164007f9edb3c0187e2f52c7fe5934d380b2d87e8d332bee8b029f85e11bcf7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYVMKGAI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIDMFo7FF0ETfS0CgaGa%2BPWic2dUTGyJAxFiCtLpCfbljAiEAuHMkD2fAXEHV4ers0aaAUKed492%2FdMK74oycqmitAhMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAT%2Fz2Zd6TCY95F4HyrcA74spgaemSvpwPCJvG7vKvWWNSKEAfOpGikFBOkXl5EQolNp8DwnfHE4dsX%2FOqFqs7Xfzp2ULVfzlGN%2BlS4HIQm9%2BmR629WYjYBLtRQJ4qCD4OE0CEAITlDAB2A4JIQO3%2Ba9VzF44aFGRencvfGG%2FRr%2BN6Qdty3d7XXOMyhc5DP6If%2FZBV4qLK6Pdl4N2xhpbOQ%2F9rLc7YRmDKuMVwQ3N1ROLfxDfThxmsL7dg4oSVV%2Fq9sagU%2FXMV5KEflr6d%2B9sMCzSUTq3nCEwuPDlc5vle%2B6%2BlWWJAtM6nXYYwMzjMMHP8EA61hlM8YBnWWYTixApD8itDC0DTFHG0FQmQg7NeNRXu2zsJlhrzIhP7NXLtUjG%2BOew9%2BhbpSRCsuS6lHFykIHpYbar%2BuJZYceadwuXdUzx3cMa55ABLlCfrQMtMAsXbsJE8Yzla9F009VDWB0lGDDnkcDYYm%2BpX%2FezyzvoAI1uXEXblWhKrm4QC44lLRE3RkaZ8qz%2BLsIijSK4dMPRTogF7HDl4ih1aZPObE6ARyf%2BefTKMs62pTtXVj8sqMpeMtrS4%2FIYfqFKgna93UoVWjjQdysONiJQWmB1ehYorXgDFD%2BEUmU3VLm9wc4iEJt%2BG3zNWl7FDU2OoSSMMCXjL0GOqUB8%2FIOcombwpzYj5g256n%2F5YJdXwcTmKUrMoLvQ9uV2Yfrxyk0u49Nt109f8Q4SM2beNkZgTHINujW1J3ZRDg5zPpRHtWgwr45aPhpaZyY3eK2qwjahz1jaA%2BTCHSunAIT81k4t2Aq3JWWWZgqqBsZGT7Qgu2dZBrDiVaK6GXEwagLv93wl4NtKZJpdLKvzmuXbGMklF%2FUqDoG8eu0KJR3DrB7r5hL&X-Amz-Signature=f44b336a282bf9020f98e160b39e6a468306c99968af9d1d862a7af2197bdc8d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYVMKGAI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIDMFo7FF0ETfS0CgaGa%2BPWic2dUTGyJAxFiCtLpCfbljAiEAuHMkD2fAXEHV4ers0aaAUKed492%2FdMK74oycqmitAhMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAT%2Fz2Zd6TCY95F4HyrcA74spgaemSvpwPCJvG7vKvWWNSKEAfOpGikFBOkXl5EQolNp8DwnfHE4dsX%2FOqFqs7Xfzp2ULVfzlGN%2BlS4HIQm9%2BmR629WYjYBLtRQJ4qCD4OE0CEAITlDAB2A4JIQO3%2Ba9VzF44aFGRencvfGG%2FRr%2BN6Qdty3d7XXOMyhc5DP6If%2FZBV4qLK6Pdl4N2xhpbOQ%2F9rLc7YRmDKuMVwQ3N1ROLfxDfThxmsL7dg4oSVV%2Fq9sagU%2FXMV5KEflr6d%2B9sMCzSUTq3nCEwuPDlc5vle%2B6%2BlWWJAtM6nXYYwMzjMMHP8EA61hlM8YBnWWYTixApD8itDC0DTFHG0FQmQg7NeNRXu2zsJlhrzIhP7NXLtUjG%2BOew9%2BhbpSRCsuS6lHFykIHpYbar%2BuJZYceadwuXdUzx3cMa55ABLlCfrQMtMAsXbsJE8Yzla9F009VDWB0lGDDnkcDYYm%2BpX%2FezyzvoAI1uXEXblWhKrm4QC44lLRE3RkaZ8qz%2BLsIijSK4dMPRTogF7HDl4ih1aZPObE6ARyf%2BefTKMs62pTtXVj8sqMpeMtrS4%2FIYfqFKgna93UoVWjjQdysONiJQWmB1ehYorXgDFD%2BEUmU3VLm9wc4iEJt%2BG3zNWl7FDU2OoSSMMCXjL0GOqUB8%2FIOcombwpzYj5g256n%2F5YJdXwcTmKUrMoLvQ9uV2Yfrxyk0u49Nt109f8Q4SM2beNkZgTHINujW1J3ZRDg5zPpRHtWgwr45aPhpaZyY3eK2qwjahz1jaA%2BTCHSunAIT81k4t2Aq3JWWWZgqqBsZGT7Qgu2dZBrDiVaK6GXEwagLv93wl4NtKZJpdLKvzmuXbGMklF%2FUqDoG8eu0KJR3DrB7r5hL&X-Amz-Signature=89c8edf8ea464bfa782980be75f5a92ff5b855bd7aa5a8bcc7b4ba688a5e5fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYVMKGAI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIDMFo7FF0ETfS0CgaGa%2BPWic2dUTGyJAxFiCtLpCfbljAiEAuHMkD2fAXEHV4ers0aaAUKed492%2FdMK74oycqmitAhMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAT%2Fz2Zd6TCY95F4HyrcA74spgaemSvpwPCJvG7vKvWWNSKEAfOpGikFBOkXl5EQolNp8DwnfHE4dsX%2FOqFqs7Xfzp2ULVfzlGN%2BlS4HIQm9%2BmR629WYjYBLtRQJ4qCD4OE0CEAITlDAB2A4JIQO3%2Ba9VzF44aFGRencvfGG%2FRr%2BN6Qdty3d7XXOMyhc5DP6If%2FZBV4qLK6Pdl4N2xhpbOQ%2F9rLc7YRmDKuMVwQ3N1ROLfxDfThxmsL7dg4oSVV%2Fq9sagU%2FXMV5KEflr6d%2B9sMCzSUTq3nCEwuPDlc5vle%2B6%2BlWWJAtM6nXYYwMzjMMHP8EA61hlM8YBnWWYTixApD8itDC0DTFHG0FQmQg7NeNRXu2zsJlhrzIhP7NXLtUjG%2BOew9%2BhbpSRCsuS6lHFykIHpYbar%2BuJZYceadwuXdUzx3cMa55ABLlCfrQMtMAsXbsJE8Yzla9F009VDWB0lGDDnkcDYYm%2BpX%2FezyzvoAI1uXEXblWhKrm4QC44lLRE3RkaZ8qz%2BLsIijSK4dMPRTogF7HDl4ih1aZPObE6ARyf%2BefTKMs62pTtXVj8sqMpeMtrS4%2FIYfqFKgna93UoVWjjQdysONiJQWmB1ehYorXgDFD%2BEUmU3VLm9wc4iEJt%2BG3zNWl7FDU2OoSSMMCXjL0GOqUB8%2FIOcombwpzYj5g256n%2F5YJdXwcTmKUrMoLvQ9uV2Yfrxyk0u49Nt109f8Q4SM2beNkZgTHINujW1J3ZRDg5zPpRHtWgwr45aPhpaZyY3eK2qwjahz1jaA%2BTCHSunAIT81k4t2Aq3JWWWZgqqBsZGT7Qgu2dZBrDiVaK6GXEwagLv93wl4NtKZJpdLKvzmuXbGMklF%2FUqDoG8eu0KJR3DrB7r5hL&X-Amz-Signature=c1959227e55f6e8fea38cd2243a0fd1dc0f8719745fc05a41b2157c16fcfbf99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYVMKGAI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIDMFo7FF0ETfS0CgaGa%2BPWic2dUTGyJAxFiCtLpCfbljAiEAuHMkD2fAXEHV4ers0aaAUKed492%2FdMK74oycqmitAhMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAT%2Fz2Zd6TCY95F4HyrcA74spgaemSvpwPCJvG7vKvWWNSKEAfOpGikFBOkXl5EQolNp8DwnfHE4dsX%2FOqFqs7Xfzp2ULVfzlGN%2BlS4HIQm9%2BmR629WYjYBLtRQJ4qCD4OE0CEAITlDAB2A4JIQO3%2Ba9VzF44aFGRencvfGG%2FRr%2BN6Qdty3d7XXOMyhc5DP6If%2FZBV4qLK6Pdl4N2xhpbOQ%2F9rLc7YRmDKuMVwQ3N1ROLfxDfThxmsL7dg4oSVV%2Fq9sagU%2FXMV5KEflr6d%2B9sMCzSUTq3nCEwuPDlc5vle%2B6%2BlWWJAtM6nXYYwMzjMMHP8EA61hlM8YBnWWYTixApD8itDC0DTFHG0FQmQg7NeNRXu2zsJlhrzIhP7NXLtUjG%2BOew9%2BhbpSRCsuS6lHFykIHpYbar%2BuJZYceadwuXdUzx3cMa55ABLlCfrQMtMAsXbsJE8Yzla9F009VDWB0lGDDnkcDYYm%2BpX%2FezyzvoAI1uXEXblWhKrm4QC44lLRE3RkaZ8qz%2BLsIijSK4dMPRTogF7HDl4ih1aZPObE6ARyf%2BefTKMs62pTtXVj8sqMpeMtrS4%2FIYfqFKgna93UoVWjjQdysONiJQWmB1ehYorXgDFD%2BEUmU3VLm9wc4iEJt%2BG3zNWl7FDU2OoSSMMCXjL0GOqUB8%2FIOcombwpzYj5g256n%2F5YJdXwcTmKUrMoLvQ9uV2Yfrxyk0u49Nt109f8Q4SM2beNkZgTHINujW1J3ZRDg5zPpRHtWgwr45aPhpaZyY3eK2qwjahz1jaA%2BTCHSunAIT81k4t2Aq3JWWWZgqqBsZGT7Qgu2dZBrDiVaK6GXEwagLv93wl4NtKZJpdLKvzmuXbGMklF%2FUqDoG8eu0KJR3DrB7r5hL&X-Amz-Signature=23557f52c78df3b8ee3061c61533ecc1e57c02d7bbc8106c115f55aa7c4e99f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYVMKGAI%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIDMFo7FF0ETfS0CgaGa%2BPWic2dUTGyJAxFiCtLpCfbljAiEAuHMkD2fAXEHV4ers0aaAUKed492%2FdMK74oycqmitAhMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAT%2Fz2Zd6TCY95F4HyrcA74spgaemSvpwPCJvG7vKvWWNSKEAfOpGikFBOkXl5EQolNp8DwnfHE4dsX%2FOqFqs7Xfzp2ULVfzlGN%2BlS4HIQm9%2BmR629WYjYBLtRQJ4qCD4OE0CEAITlDAB2A4JIQO3%2Ba9VzF44aFGRencvfGG%2FRr%2BN6Qdty3d7XXOMyhc5DP6If%2FZBV4qLK6Pdl4N2xhpbOQ%2F9rLc7YRmDKuMVwQ3N1ROLfxDfThxmsL7dg4oSVV%2Fq9sagU%2FXMV5KEflr6d%2B9sMCzSUTq3nCEwuPDlc5vle%2B6%2BlWWJAtM6nXYYwMzjMMHP8EA61hlM8YBnWWYTixApD8itDC0DTFHG0FQmQg7NeNRXu2zsJlhrzIhP7NXLtUjG%2BOew9%2BhbpSRCsuS6lHFykIHpYbar%2BuJZYceadwuXdUzx3cMa55ABLlCfrQMtMAsXbsJE8Yzla9F009VDWB0lGDDnkcDYYm%2BpX%2FezyzvoAI1uXEXblWhKrm4QC44lLRE3RkaZ8qz%2BLsIijSK4dMPRTogF7HDl4ih1aZPObE6ARyf%2BefTKMs62pTtXVj8sqMpeMtrS4%2FIYfqFKgna93UoVWjjQdysONiJQWmB1ehYorXgDFD%2BEUmU3VLm9wc4iEJt%2BG3zNWl7FDU2OoSSMMCXjL0GOqUB8%2FIOcombwpzYj5g256n%2F5YJdXwcTmKUrMoLvQ9uV2Yfrxyk0u49Nt109f8Q4SM2beNkZgTHINujW1J3ZRDg5zPpRHtWgwr45aPhpaZyY3eK2qwjahz1jaA%2BTCHSunAIT81k4t2Aq3JWWWZgqqBsZGT7Qgu2dZBrDiVaK6GXEwagLv93wl4NtKZJpdLKvzmuXbGMklF%2FUqDoG8eu0KJR3DrB7r5hL&X-Amz-Signature=4fe4d8168b7f9a44e3001714f5b878c5e83ad06d1125751e4afb21c71945107f&X-Amz-SignedHeaders=host&x-id=GetObject)
