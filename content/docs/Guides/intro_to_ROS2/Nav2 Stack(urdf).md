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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNITJ2LX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHEnFuC57ArEgP9tJ99JId5ay7EK2szJ55ofw%2BtuGseBAiAKcjqYUqWFDczt4Ef0uAYnYrNF3b5KL%2BZ7swuuPaze1yqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Jr2ptITIKx2dg6lKtwDLhmO5sJFeaI3bmWMIJ4MVqZLk2REkLsN1ZOrguiW19r%2BWV2UttDeiw2AJQt3dqrGrwN4i5LrSYWEwn0KMRAz84WiaPWGhsVfUFzE8L0OUE3HIKkSLi3WatMB3uykGWhk7eG0dzyyjVedKeAoNtr1IKMtHyKEFX%2F3WmiuCOS6UzuQrysw2ZpCyA%2F%2F3qW4dA0vkEd%2FdO12Zs9xk7NTIq3Dqh4%2Blo9%2FwqM0MzmhxClhRQDH6XS7mVa%2Fl6UC46z93jmwjCJTdw4yd3aOKrQLBhi3%2BvmqgGes9D7utBLRimRerlOO96nB3VkdU7Of3ChbBLZB7eTLl5iIFDSEDlnyYeeC1E5HMDxD1nWlbtlkIS67N2831GBbo4HH5E9R%2FBscl4sloirJgqK170yzMKpj5m%2BKsLjBxaT4C8fo2eAFGzp4wOuCvDxEJAd6P%2BnSHc7i6cudHrajOghIEXlEP8iHoscYS5CL6jTn7dKyqkIU7%2Fzz9yexc9MvMIntKa8SULj%2F8YJTGWBGIUP6n%2B5AgMBhfV3BHdET%2BkLEpdlT2FGIPXnoQRmZRyQ11U9SHpfvFjQb0O1D%2BWnkc342fJikIUQzp9JJYZgj1iMBl1o1ZhTJa0gKMPvM8bHb2XtfctpOh%2Bgw7dePvgY6pgFbQjAnrKumR2SV9%2B2fqJ3l9A2RitBkbY79m4D%2Bj248siMLEewvF0UgUJWPP6XxD3C3YK1Rp0cnMGTqbXvBWBgvTzYUxahzLU7NnudCpukl4YB6yOOsK%2F1dtenEq%2BLrqxYiMm9dpTctFKuL%2BzxNPkUeekKPbWX428QGfhqGtJI6MBzBubZWsCaRcU3lwN306QZoONzfPOWZb%2FBciU3wArAHr0v8gnaQ&X-Amz-Signature=8db37d77c996a1a533fecb48c21429f3d05a59419c0dc1d99e85a5f65f966a8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNITJ2LX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHEnFuC57ArEgP9tJ99JId5ay7EK2szJ55ofw%2BtuGseBAiAKcjqYUqWFDczt4Ef0uAYnYrNF3b5KL%2BZ7swuuPaze1yqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Jr2ptITIKx2dg6lKtwDLhmO5sJFeaI3bmWMIJ4MVqZLk2REkLsN1ZOrguiW19r%2BWV2UttDeiw2AJQt3dqrGrwN4i5LrSYWEwn0KMRAz84WiaPWGhsVfUFzE8L0OUE3HIKkSLi3WatMB3uykGWhk7eG0dzyyjVedKeAoNtr1IKMtHyKEFX%2F3WmiuCOS6UzuQrysw2ZpCyA%2F%2F3qW4dA0vkEd%2FdO12Zs9xk7NTIq3Dqh4%2Blo9%2FwqM0MzmhxClhRQDH6XS7mVa%2Fl6UC46z93jmwjCJTdw4yd3aOKrQLBhi3%2BvmqgGes9D7utBLRimRerlOO96nB3VkdU7Of3ChbBLZB7eTLl5iIFDSEDlnyYeeC1E5HMDxD1nWlbtlkIS67N2831GBbo4HH5E9R%2FBscl4sloirJgqK170yzMKpj5m%2BKsLjBxaT4C8fo2eAFGzp4wOuCvDxEJAd6P%2BnSHc7i6cudHrajOghIEXlEP8iHoscYS5CL6jTn7dKyqkIU7%2Fzz9yexc9MvMIntKa8SULj%2F8YJTGWBGIUP6n%2B5AgMBhfV3BHdET%2BkLEpdlT2FGIPXnoQRmZRyQ11U9SHpfvFjQb0O1D%2BWnkc342fJikIUQzp9JJYZgj1iMBl1o1ZhTJa0gKMPvM8bHb2XtfctpOh%2Bgw7dePvgY6pgFbQjAnrKumR2SV9%2B2fqJ3l9A2RitBkbY79m4D%2Bj248siMLEewvF0UgUJWPP6XxD3C3YK1Rp0cnMGTqbXvBWBgvTzYUxahzLU7NnudCpukl4YB6yOOsK%2F1dtenEq%2BLrqxYiMm9dpTctFKuL%2BzxNPkUeekKPbWX428QGfhqGtJI6MBzBubZWsCaRcU3lwN306QZoONzfPOWZb%2FBciU3wArAHr0v8gnaQ&X-Amz-Signature=b02dab47d9dc9cb49e735673c573fd28c3772c28d3ccbb1d546d5dd0141bb701&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNITJ2LX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHEnFuC57ArEgP9tJ99JId5ay7EK2szJ55ofw%2BtuGseBAiAKcjqYUqWFDczt4Ef0uAYnYrNF3b5KL%2BZ7swuuPaze1yqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Jr2ptITIKx2dg6lKtwDLhmO5sJFeaI3bmWMIJ4MVqZLk2REkLsN1ZOrguiW19r%2BWV2UttDeiw2AJQt3dqrGrwN4i5LrSYWEwn0KMRAz84WiaPWGhsVfUFzE8L0OUE3HIKkSLi3WatMB3uykGWhk7eG0dzyyjVedKeAoNtr1IKMtHyKEFX%2F3WmiuCOS6UzuQrysw2ZpCyA%2F%2F3qW4dA0vkEd%2FdO12Zs9xk7NTIq3Dqh4%2Blo9%2FwqM0MzmhxClhRQDH6XS7mVa%2Fl6UC46z93jmwjCJTdw4yd3aOKrQLBhi3%2BvmqgGes9D7utBLRimRerlOO96nB3VkdU7Of3ChbBLZB7eTLl5iIFDSEDlnyYeeC1E5HMDxD1nWlbtlkIS67N2831GBbo4HH5E9R%2FBscl4sloirJgqK170yzMKpj5m%2BKsLjBxaT4C8fo2eAFGzp4wOuCvDxEJAd6P%2BnSHc7i6cudHrajOghIEXlEP8iHoscYS5CL6jTn7dKyqkIU7%2Fzz9yexc9MvMIntKa8SULj%2F8YJTGWBGIUP6n%2B5AgMBhfV3BHdET%2BkLEpdlT2FGIPXnoQRmZRyQ11U9SHpfvFjQb0O1D%2BWnkc342fJikIUQzp9JJYZgj1iMBl1o1ZhTJa0gKMPvM8bHb2XtfctpOh%2Bgw7dePvgY6pgFbQjAnrKumR2SV9%2B2fqJ3l9A2RitBkbY79m4D%2Bj248siMLEewvF0UgUJWPP6XxD3C3YK1Rp0cnMGTqbXvBWBgvTzYUxahzLU7NnudCpukl4YB6yOOsK%2F1dtenEq%2BLrqxYiMm9dpTctFKuL%2BzxNPkUeekKPbWX428QGfhqGtJI6MBzBubZWsCaRcU3lwN306QZoONzfPOWZb%2FBciU3wArAHr0v8gnaQ&X-Amz-Signature=65f4cd8455971fedd8b35b5db65d438ac477b22e3323b22c62343dbf64115b76&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNITJ2LX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHEnFuC57ArEgP9tJ99JId5ay7EK2szJ55ofw%2BtuGseBAiAKcjqYUqWFDczt4Ef0uAYnYrNF3b5KL%2BZ7swuuPaze1yqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Jr2ptITIKx2dg6lKtwDLhmO5sJFeaI3bmWMIJ4MVqZLk2REkLsN1ZOrguiW19r%2BWV2UttDeiw2AJQt3dqrGrwN4i5LrSYWEwn0KMRAz84WiaPWGhsVfUFzE8L0OUE3HIKkSLi3WatMB3uykGWhk7eG0dzyyjVedKeAoNtr1IKMtHyKEFX%2F3WmiuCOS6UzuQrysw2ZpCyA%2F%2F3qW4dA0vkEd%2FdO12Zs9xk7NTIq3Dqh4%2Blo9%2FwqM0MzmhxClhRQDH6XS7mVa%2Fl6UC46z93jmwjCJTdw4yd3aOKrQLBhi3%2BvmqgGes9D7utBLRimRerlOO96nB3VkdU7Of3ChbBLZB7eTLl5iIFDSEDlnyYeeC1E5HMDxD1nWlbtlkIS67N2831GBbo4HH5E9R%2FBscl4sloirJgqK170yzMKpj5m%2BKsLjBxaT4C8fo2eAFGzp4wOuCvDxEJAd6P%2BnSHc7i6cudHrajOghIEXlEP8iHoscYS5CL6jTn7dKyqkIU7%2Fzz9yexc9MvMIntKa8SULj%2F8YJTGWBGIUP6n%2B5AgMBhfV3BHdET%2BkLEpdlT2FGIPXnoQRmZRyQ11U9SHpfvFjQb0O1D%2BWnkc342fJikIUQzp9JJYZgj1iMBl1o1ZhTJa0gKMPvM8bHb2XtfctpOh%2Bgw7dePvgY6pgFbQjAnrKumR2SV9%2B2fqJ3l9A2RitBkbY79m4D%2Bj248siMLEewvF0UgUJWPP6XxD3C3YK1Rp0cnMGTqbXvBWBgvTzYUxahzLU7NnudCpukl4YB6yOOsK%2F1dtenEq%2BLrqxYiMm9dpTctFKuL%2BzxNPkUeekKPbWX428QGfhqGtJI6MBzBubZWsCaRcU3lwN306QZoONzfPOWZb%2FBciU3wArAHr0v8gnaQ&X-Amz-Signature=8f621e318609501d3590b72a621f7b388032163d97bfa140b52601dd53d5c964&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNITJ2LX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHEnFuC57ArEgP9tJ99JId5ay7EK2szJ55ofw%2BtuGseBAiAKcjqYUqWFDczt4Ef0uAYnYrNF3b5KL%2BZ7swuuPaze1yqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Jr2ptITIKx2dg6lKtwDLhmO5sJFeaI3bmWMIJ4MVqZLk2REkLsN1ZOrguiW19r%2BWV2UttDeiw2AJQt3dqrGrwN4i5LrSYWEwn0KMRAz84WiaPWGhsVfUFzE8L0OUE3HIKkSLi3WatMB3uykGWhk7eG0dzyyjVedKeAoNtr1IKMtHyKEFX%2F3WmiuCOS6UzuQrysw2ZpCyA%2F%2F3qW4dA0vkEd%2FdO12Zs9xk7NTIq3Dqh4%2Blo9%2FwqM0MzmhxClhRQDH6XS7mVa%2Fl6UC46z93jmwjCJTdw4yd3aOKrQLBhi3%2BvmqgGes9D7utBLRimRerlOO96nB3VkdU7Of3ChbBLZB7eTLl5iIFDSEDlnyYeeC1E5HMDxD1nWlbtlkIS67N2831GBbo4HH5E9R%2FBscl4sloirJgqK170yzMKpj5m%2BKsLjBxaT4C8fo2eAFGzp4wOuCvDxEJAd6P%2BnSHc7i6cudHrajOghIEXlEP8iHoscYS5CL6jTn7dKyqkIU7%2Fzz9yexc9MvMIntKa8SULj%2F8YJTGWBGIUP6n%2B5AgMBhfV3BHdET%2BkLEpdlT2FGIPXnoQRmZRyQ11U9SHpfvFjQb0O1D%2BWnkc342fJikIUQzp9JJYZgj1iMBl1o1ZhTJa0gKMPvM8bHb2XtfctpOh%2Bgw7dePvgY6pgFbQjAnrKumR2SV9%2B2fqJ3l9A2RitBkbY79m4D%2Bj248siMLEewvF0UgUJWPP6XxD3C3YK1Rp0cnMGTqbXvBWBgvTzYUxahzLU7NnudCpukl4YB6yOOsK%2F1dtenEq%2BLrqxYiMm9dpTctFKuL%2BzxNPkUeekKPbWX428QGfhqGtJI6MBzBubZWsCaRcU3lwN306QZoONzfPOWZb%2FBciU3wArAHr0v8gnaQ&X-Amz-Signature=543e33f3c6b62f437f4afb0ae5a8accf34f1de35a0147bbd6a0e24cba3368c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNITJ2LX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHEnFuC57ArEgP9tJ99JId5ay7EK2szJ55ofw%2BtuGseBAiAKcjqYUqWFDczt4Ef0uAYnYrNF3b5KL%2BZ7swuuPaze1yqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Jr2ptITIKx2dg6lKtwDLhmO5sJFeaI3bmWMIJ4MVqZLk2REkLsN1ZOrguiW19r%2BWV2UttDeiw2AJQt3dqrGrwN4i5LrSYWEwn0KMRAz84WiaPWGhsVfUFzE8L0OUE3HIKkSLi3WatMB3uykGWhk7eG0dzyyjVedKeAoNtr1IKMtHyKEFX%2F3WmiuCOS6UzuQrysw2ZpCyA%2F%2F3qW4dA0vkEd%2FdO12Zs9xk7NTIq3Dqh4%2Blo9%2FwqM0MzmhxClhRQDH6XS7mVa%2Fl6UC46z93jmwjCJTdw4yd3aOKrQLBhi3%2BvmqgGes9D7utBLRimRerlOO96nB3VkdU7Of3ChbBLZB7eTLl5iIFDSEDlnyYeeC1E5HMDxD1nWlbtlkIS67N2831GBbo4HH5E9R%2FBscl4sloirJgqK170yzMKpj5m%2BKsLjBxaT4C8fo2eAFGzp4wOuCvDxEJAd6P%2BnSHc7i6cudHrajOghIEXlEP8iHoscYS5CL6jTn7dKyqkIU7%2Fzz9yexc9MvMIntKa8SULj%2F8YJTGWBGIUP6n%2B5AgMBhfV3BHdET%2BkLEpdlT2FGIPXnoQRmZRyQ11U9SHpfvFjQb0O1D%2BWnkc342fJikIUQzp9JJYZgj1iMBl1o1ZhTJa0gKMPvM8bHb2XtfctpOh%2Bgw7dePvgY6pgFbQjAnrKumR2SV9%2B2fqJ3l9A2RitBkbY79m4D%2Bj248siMLEewvF0UgUJWPP6XxD3C3YK1Rp0cnMGTqbXvBWBgvTzYUxahzLU7NnudCpukl4YB6yOOsK%2F1dtenEq%2BLrqxYiMm9dpTctFKuL%2BzxNPkUeekKPbWX428QGfhqGtJI6MBzBubZWsCaRcU3lwN306QZoONzfPOWZb%2FBciU3wArAHr0v8gnaQ&X-Amz-Signature=4f90c37be64a428811be7eb99beff0d18b931569e357ae1c3091949354b102fd&X-Amz-SignedHeaders=host&x-id=GetObject)
