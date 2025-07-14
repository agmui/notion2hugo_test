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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBGS7ZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIBa56SCpex6LTI3DpEyTN0L10Se6xknzvIeMTTWsu%2F3ZAiAkiU6%2FFR%2B0ygV0s5HLISBkgFIIhH3q7c2mFToktj7%2B9yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdb%2Fj4u8Nd%2B0wrHYiKtwDlViTgbOBgyFu7CIL9VlvLGvarM4ulFYUPoc8uzvOLkucKtVwAY1sJg4hPo%2BYMWkfi2sbAMb7Te7vhyDMRYNgsg116%2BBB1pT69Ap2ZhkshII%2FT4qRglFtXcbMZyFwPEqEuschJRNT850jfSjqndoBI1AtD4s%2BlrSDYD3gYDjc%2BkM2dGGpAxNXpXOzUrDtjacJFW9TBsXW2wZljKzwjrb5flkhaJfs9PmPEwU6HS0sU%2BTncNPCvWp8MdGDTBU8%2BmkOhvnnMP6IO1pGFH%2FBsB%2FbHZd%2BiASwp5XPduDKQZWxIFPMaz1A1TEwhVMOVl6vxYlJYr%2BI%2FUzadXeuCKdeSjGqeBHnWf3DZlYcsqf%2F%2BKBB90aXt2OAQwSO6uksvqZbmjS34xVQCQWWO2PBQRG88%2F9E2ef2Gr82AqbH3lQo%2Bf2vvnJILpJnHsrs9WeSCIVW4cVj1l5tJjt8oWYWIEB6hYcL1AGaPSD9KRKVguE9Y1fcXET3N%2FfBKwpG4mzC1kBQaHqlnbA%2FoJ%2B%2F3aQ0QNgXFmpZxdaPMbPRKU4Cc8YmdhpLohv8hMo3Qu3eCcQNGVCqPkvl4lPsnf60h2lHCSE4pVxRAaTE6M4%2FCe%2B9%2BPqZicqK3vhHJwmP7maR2%2B9tQYcwkoXUwwY6pgHmzJihWADFaQs0TMW4CXzdmDGa%2FTobTbxZ0%2Bl5mY3r0709%2Fecm4Gz288bcHuH0ti%2B4ue9CFLLImxf6KT2bb%2FCzVVq92KvphYctY61AaVmROy24fVS06JN%2BhszpbzPAEqxCqhX%2BXBiZjhPj0FsLKm8xIYPlu5vvsYmyru0v2lJZCYmiFXn2g4gbmJF27Izvvv3RENagE2Yj5kpTLPKZ2LjtvC47tC5u&X-Amz-Signature=07af62dd2faf54bf2480f74288f1825c049578c2cf66acb5d61fa0602be72d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBGS7ZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIBa56SCpex6LTI3DpEyTN0L10Se6xknzvIeMTTWsu%2F3ZAiAkiU6%2FFR%2B0ygV0s5HLISBkgFIIhH3q7c2mFToktj7%2B9yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdb%2Fj4u8Nd%2B0wrHYiKtwDlViTgbOBgyFu7CIL9VlvLGvarM4ulFYUPoc8uzvOLkucKtVwAY1sJg4hPo%2BYMWkfi2sbAMb7Te7vhyDMRYNgsg116%2BBB1pT69Ap2ZhkshII%2FT4qRglFtXcbMZyFwPEqEuschJRNT850jfSjqndoBI1AtD4s%2BlrSDYD3gYDjc%2BkM2dGGpAxNXpXOzUrDtjacJFW9TBsXW2wZljKzwjrb5flkhaJfs9PmPEwU6HS0sU%2BTncNPCvWp8MdGDTBU8%2BmkOhvnnMP6IO1pGFH%2FBsB%2FbHZd%2BiASwp5XPduDKQZWxIFPMaz1A1TEwhVMOVl6vxYlJYr%2BI%2FUzadXeuCKdeSjGqeBHnWf3DZlYcsqf%2F%2BKBB90aXt2OAQwSO6uksvqZbmjS34xVQCQWWO2PBQRG88%2F9E2ef2Gr82AqbH3lQo%2Bf2vvnJILpJnHsrs9WeSCIVW4cVj1l5tJjt8oWYWIEB6hYcL1AGaPSD9KRKVguE9Y1fcXET3N%2FfBKwpG4mzC1kBQaHqlnbA%2FoJ%2B%2F3aQ0QNgXFmpZxdaPMbPRKU4Cc8YmdhpLohv8hMo3Qu3eCcQNGVCqPkvl4lPsnf60h2lHCSE4pVxRAaTE6M4%2FCe%2B9%2BPqZicqK3vhHJwmP7maR2%2B9tQYcwkoXUwwY6pgHmzJihWADFaQs0TMW4CXzdmDGa%2FTobTbxZ0%2Bl5mY3r0709%2Fecm4Gz288bcHuH0ti%2B4ue9CFLLImxf6KT2bb%2FCzVVq92KvphYctY61AaVmROy24fVS06JN%2BhszpbzPAEqxCqhX%2BXBiZjhPj0FsLKm8xIYPlu5vvsYmyru0v2lJZCYmiFXn2g4gbmJF27Izvvv3RENagE2Yj5kpTLPKZ2LjtvC47tC5u&X-Amz-Signature=b7afe2b7f68cb7bdfde65483dd479675cbe8853c5ead276b870390c6adcfbbd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBGS7ZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIBa56SCpex6LTI3DpEyTN0L10Se6xknzvIeMTTWsu%2F3ZAiAkiU6%2FFR%2B0ygV0s5HLISBkgFIIhH3q7c2mFToktj7%2B9yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdb%2Fj4u8Nd%2B0wrHYiKtwDlViTgbOBgyFu7CIL9VlvLGvarM4ulFYUPoc8uzvOLkucKtVwAY1sJg4hPo%2BYMWkfi2sbAMb7Te7vhyDMRYNgsg116%2BBB1pT69Ap2ZhkshII%2FT4qRglFtXcbMZyFwPEqEuschJRNT850jfSjqndoBI1AtD4s%2BlrSDYD3gYDjc%2BkM2dGGpAxNXpXOzUrDtjacJFW9TBsXW2wZljKzwjrb5flkhaJfs9PmPEwU6HS0sU%2BTncNPCvWp8MdGDTBU8%2BmkOhvnnMP6IO1pGFH%2FBsB%2FbHZd%2BiASwp5XPduDKQZWxIFPMaz1A1TEwhVMOVl6vxYlJYr%2BI%2FUzadXeuCKdeSjGqeBHnWf3DZlYcsqf%2F%2BKBB90aXt2OAQwSO6uksvqZbmjS34xVQCQWWO2PBQRG88%2F9E2ef2Gr82AqbH3lQo%2Bf2vvnJILpJnHsrs9WeSCIVW4cVj1l5tJjt8oWYWIEB6hYcL1AGaPSD9KRKVguE9Y1fcXET3N%2FfBKwpG4mzC1kBQaHqlnbA%2FoJ%2B%2F3aQ0QNgXFmpZxdaPMbPRKU4Cc8YmdhpLohv8hMo3Qu3eCcQNGVCqPkvl4lPsnf60h2lHCSE4pVxRAaTE6M4%2FCe%2B9%2BPqZicqK3vhHJwmP7maR2%2B9tQYcwkoXUwwY6pgHmzJihWADFaQs0TMW4CXzdmDGa%2FTobTbxZ0%2Bl5mY3r0709%2Fecm4Gz288bcHuH0ti%2B4ue9CFLLImxf6KT2bb%2FCzVVq92KvphYctY61AaVmROy24fVS06JN%2BhszpbzPAEqxCqhX%2BXBiZjhPj0FsLKm8xIYPlu5vvsYmyru0v2lJZCYmiFXn2g4gbmJF27Izvvv3RENagE2Yj5kpTLPKZ2LjtvC47tC5u&X-Amz-Signature=fe27862f35eb15b4e57261c95e7eb9474900fda705f5f9f89bc76d709ffe08d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBGS7ZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIBa56SCpex6LTI3DpEyTN0L10Se6xknzvIeMTTWsu%2F3ZAiAkiU6%2FFR%2B0ygV0s5HLISBkgFIIhH3q7c2mFToktj7%2B9yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdb%2Fj4u8Nd%2B0wrHYiKtwDlViTgbOBgyFu7CIL9VlvLGvarM4ulFYUPoc8uzvOLkucKtVwAY1sJg4hPo%2BYMWkfi2sbAMb7Te7vhyDMRYNgsg116%2BBB1pT69Ap2ZhkshII%2FT4qRglFtXcbMZyFwPEqEuschJRNT850jfSjqndoBI1AtD4s%2BlrSDYD3gYDjc%2BkM2dGGpAxNXpXOzUrDtjacJFW9TBsXW2wZljKzwjrb5flkhaJfs9PmPEwU6HS0sU%2BTncNPCvWp8MdGDTBU8%2BmkOhvnnMP6IO1pGFH%2FBsB%2FbHZd%2BiASwp5XPduDKQZWxIFPMaz1A1TEwhVMOVl6vxYlJYr%2BI%2FUzadXeuCKdeSjGqeBHnWf3DZlYcsqf%2F%2BKBB90aXt2OAQwSO6uksvqZbmjS34xVQCQWWO2PBQRG88%2F9E2ef2Gr82AqbH3lQo%2Bf2vvnJILpJnHsrs9WeSCIVW4cVj1l5tJjt8oWYWIEB6hYcL1AGaPSD9KRKVguE9Y1fcXET3N%2FfBKwpG4mzC1kBQaHqlnbA%2FoJ%2B%2F3aQ0QNgXFmpZxdaPMbPRKU4Cc8YmdhpLohv8hMo3Qu3eCcQNGVCqPkvl4lPsnf60h2lHCSE4pVxRAaTE6M4%2FCe%2B9%2BPqZicqK3vhHJwmP7maR2%2B9tQYcwkoXUwwY6pgHmzJihWADFaQs0TMW4CXzdmDGa%2FTobTbxZ0%2Bl5mY3r0709%2Fecm4Gz288bcHuH0ti%2B4ue9CFLLImxf6KT2bb%2FCzVVq92KvphYctY61AaVmROy24fVS06JN%2BhszpbzPAEqxCqhX%2BXBiZjhPj0FsLKm8xIYPlu5vvsYmyru0v2lJZCYmiFXn2g4gbmJF27Izvvv3RENagE2Yj5kpTLPKZ2LjtvC47tC5u&X-Amz-Signature=49e514c8cdf2a1778dc9c8bf166440c57f7a3d93be4283e0bca240326a09b586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBGS7ZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIBa56SCpex6LTI3DpEyTN0L10Se6xknzvIeMTTWsu%2F3ZAiAkiU6%2FFR%2B0ygV0s5HLISBkgFIIhH3q7c2mFToktj7%2B9yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdb%2Fj4u8Nd%2B0wrHYiKtwDlViTgbOBgyFu7CIL9VlvLGvarM4ulFYUPoc8uzvOLkucKtVwAY1sJg4hPo%2BYMWkfi2sbAMb7Te7vhyDMRYNgsg116%2BBB1pT69Ap2ZhkshII%2FT4qRglFtXcbMZyFwPEqEuschJRNT850jfSjqndoBI1AtD4s%2BlrSDYD3gYDjc%2BkM2dGGpAxNXpXOzUrDtjacJFW9TBsXW2wZljKzwjrb5flkhaJfs9PmPEwU6HS0sU%2BTncNPCvWp8MdGDTBU8%2BmkOhvnnMP6IO1pGFH%2FBsB%2FbHZd%2BiASwp5XPduDKQZWxIFPMaz1A1TEwhVMOVl6vxYlJYr%2BI%2FUzadXeuCKdeSjGqeBHnWf3DZlYcsqf%2F%2BKBB90aXt2OAQwSO6uksvqZbmjS34xVQCQWWO2PBQRG88%2F9E2ef2Gr82AqbH3lQo%2Bf2vvnJILpJnHsrs9WeSCIVW4cVj1l5tJjt8oWYWIEB6hYcL1AGaPSD9KRKVguE9Y1fcXET3N%2FfBKwpG4mzC1kBQaHqlnbA%2FoJ%2B%2F3aQ0QNgXFmpZxdaPMbPRKU4Cc8YmdhpLohv8hMo3Qu3eCcQNGVCqPkvl4lPsnf60h2lHCSE4pVxRAaTE6M4%2FCe%2B9%2BPqZicqK3vhHJwmP7maR2%2B9tQYcwkoXUwwY6pgHmzJihWADFaQs0TMW4CXzdmDGa%2FTobTbxZ0%2Bl5mY3r0709%2Fecm4Gz288bcHuH0ti%2B4ue9CFLLImxf6KT2bb%2FCzVVq92KvphYctY61AaVmROy24fVS06JN%2BhszpbzPAEqxCqhX%2BXBiZjhPj0FsLKm8xIYPlu5vvsYmyru0v2lJZCYmiFXn2g4gbmJF27Izvvv3RENagE2Yj5kpTLPKZ2LjtvC47tC5u&X-Amz-Signature=e3c510cc39871a2bacf759d632c206816a2f5b02534c9203ac023cd05bf5f0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBGS7ZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIBa56SCpex6LTI3DpEyTN0L10Se6xknzvIeMTTWsu%2F3ZAiAkiU6%2FFR%2B0ygV0s5HLISBkgFIIhH3q7c2mFToktj7%2B9yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdb%2Fj4u8Nd%2B0wrHYiKtwDlViTgbOBgyFu7CIL9VlvLGvarM4ulFYUPoc8uzvOLkucKtVwAY1sJg4hPo%2BYMWkfi2sbAMb7Te7vhyDMRYNgsg116%2BBB1pT69Ap2ZhkshII%2FT4qRglFtXcbMZyFwPEqEuschJRNT850jfSjqndoBI1AtD4s%2BlrSDYD3gYDjc%2BkM2dGGpAxNXpXOzUrDtjacJFW9TBsXW2wZljKzwjrb5flkhaJfs9PmPEwU6HS0sU%2BTncNPCvWp8MdGDTBU8%2BmkOhvnnMP6IO1pGFH%2FBsB%2FbHZd%2BiASwp5XPduDKQZWxIFPMaz1A1TEwhVMOVl6vxYlJYr%2BI%2FUzadXeuCKdeSjGqeBHnWf3DZlYcsqf%2F%2BKBB90aXt2OAQwSO6uksvqZbmjS34xVQCQWWO2PBQRG88%2F9E2ef2Gr82AqbH3lQo%2Bf2vvnJILpJnHsrs9WeSCIVW4cVj1l5tJjt8oWYWIEB6hYcL1AGaPSD9KRKVguE9Y1fcXET3N%2FfBKwpG4mzC1kBQaHqlnbA%2FoJ%2B%2F3aQ0QNgXFmpZxdaPMbPRKU4Cc8YmdhpLohv8hMo3Qu3eCcQNGVCqPkvl4lPsnf60h2lHCSE4pVxRAaTE6M4%2FCe%2B9%2BPqZicqK3vhHJwmP7maR2%2B9tQYcwkoXUwwY6pgHmzJihWADFaQs0TMW4CXzdmDGa%2FTobTbxZ0%2Bl5mY3r0709%2Fecm4Gz288bcHuH0ti%2B4ue9CFLLImxf6KT2bb%2FCzVVq92KvphYctY61AaVmROy24fVS06JN%2BhszpbzPAEqxCqhX%2BXBiZjhPj0FsLKm8xIYPlu5vvsYmyru0v2lJZCYmiFXn2g4gbmJF27Izvvv3RENagE2Yj5kpTLPKZ2LjtvC47tC5u&X-Amz-Signature=aed61936097da53dc4dca064913f0f089885d42352a40b306d837e2d3d05dc2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
