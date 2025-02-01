---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCSYH5I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALo27GqOFsyY8L2dwHlXhAS4LcWDM3TY8PCIydtsADiAiA%2FzsOCLcCWo0tPGzflx%2FzwLSonjMv%2FNcHvWKf5cj0mqSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtA0PHTTZm6ub9nQKtwDiRt3g40XQkHTqwgock59eJwy%2By1pS5oGzlAMMqfjVgyZsB10I%2F64EANIboqLQg9F73l3qKOyO32ZwkUEEFLXAujPJxhcnWLFUvgzXwU9xdk7efFqONxYx9Hitb1GP1ShOs8q3O0IQEmZBWIzu%2BlXoiauaTRS5myEGBPqyEVqVXTllnVDYQYy6%2FzMn9Y297KmSaOzENW9vkUtOnEdMlyv6GGYUJWEHPOqEirgicBNfsoJ3nBP8JCjQsPVmOKzLFNECi2VYlkXuVcEBZosjjVu8uNc6p7ddzvDjBzwFADd4Wdzy2QdvsAo%2BQbgYaxdhXaJFmGz2wpvzxovUNrP3%2BpDfOzoQPI%2Bi5mi6c2%2FRKb098TWrNkVpnZTuCH%2BJgmfLHiViGsv5%2B6bVm1m84PD6WBO6ynJHmaBksvg53xHtLx7s1fhI%2BHNpbcHwjKXELTW1Pa0%2BVejWpblEcXEJ5e9QSENFjWMyeXXx3WUpTxSMBK9SgGgP3T%2BYK9rYsWgPPV9hv2mCwmAUd5CdIYPlZLpP22vU9IWVb7%2Bs5kT%2F8tRSiTL6DApnBWcu1ZUUIY603Ixn1YRNvXClU%2FBdUEY99Zs7Ft8c7e1XZzrFMYNcH6Ul50fqQERkJUR1skBBYsNFTwwsaf2vAY6pgFlk1yRlKnUC5h3aRpaKPd7oah8bulsgQcGeiVcaXYmRYv5fKVJNHAjqZD1jdalojjieL1GbvGsvLGtKQ%2F2TN%2BiVSd%2BjEvOKtBORSRaxcd0br1W3Ri%2FljICgmGHnZwao0JK5tr8d734JHrJjyfjmbBlcIDGJN0ChJstD11LLdXweK9%2FSbQkDhZ7goFDzqpSvM7Y8iFYdVEm%2FNygLFXTJOyL5SVyPkvz&X-Amz-Signature=8c6688dc76f2502481db3d8abd4b4318a933f71aeea3c30f91e4f47b0008bac5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCSYH5I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALo27GqOFsyY8L2dwHlXhAS4LcWDM3TY8PCIydtsADiAiA%2FzsOCLcCWo0tPGzflx%2FzwLSonjMv%2FNcHvWKf5cj0mqSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtA0PHTTZm6ub9nQKtwDiRt3g40XQkHTqwgock59eJwy%2By1pS5oGzlAMMqfjVgyZsB10I%2F64EANIboqLQg9F73l3qKOyO32ZwkUEEFLXAujPJxhcnWLFUvgzXwU9xdk7efFqONxYx9Hitb1GP1ShOs8q3O0IQEmZBWIzu%2BlXoiauaTRS5myEGBPqyEVqVXTllnVDYQYy6%2FzMn9Y297KmSaOzENW9vkUtOnEdMlyv6GGYUJWEHPOqEirgicBNfsoJ3nBP8JCjQsPVmOKzLFNECi2VYlkXuVcEBZosjjVu8uNc6p7ddzvDjBzwFADd4Wdzy2QdvsAo%2BQbgYaxdhXaJFmGz2wpvzxovUNrP3%2BpDfOzoQPI%2Bi5mi6c2%2FRKb098TWrNkVpnZTuCH%2BJgmfLHiViGsv5%2B6bVm1m84PD6WBO6ynJHmaBksvg53xHtLx7s1fhI%2BHNpbcHwjKXELTW1Pa0%2BVejWpblEcXEJ5e9QSENFjWMyeXXx3WUpTxSMBK9SgGgP3T%2BYK9rYsWgPPV9hv2mCwmAUd5CdIYPlZLpP22vU9IWVb7%2Bs5kT%2F8tRSiTL6DApnBWcu1ZUUIY603Ixn1YRNvXClU%2FBdUEY99Zs7Ft8c7e1XZzrFMYNcH6Ul50fqQERkJUR1skBBYsNFTwwsaf2vAY6pgFlk1yRlKnUC5h3aRpaKPd7oah8bulsgQcGeiVcaXYmRYv5fKVJNHAjqZD1jdalojjieL1GbvGsvLGtKQ%2F2TN%2BiVSd%2BjEvOKtBORSRaxcd0br1W3Ri%2FljICgmGHnZwao0JK5tr8d734JHrJjyfjmbBlcIDGJN0ChJstD11LLdXweK9%2FSbQkDhZ7goFDzqpSvM7Y8iFYdVEm%2FNygLFXTJOyL5SVyPkvz&X-Amz-Signature=3808d898e4a502b5795a450f8dcff1cec08c5711f596af23ee80e2a6db84a1f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCSYH5I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALo27GqOFsyY8L2dwHlXhAS4LcWDM3TY8PCIydtsADiAiA%2FzsOCLcCWo0tPGzflx%2FzwLSonjMv%2FNcHvWKf5cj0mqSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtA0PHTTZm6ub9nQKtwDiRt3g40XQkHTqwgock59eJwy%2By1pS5oGzlAMMqfjVgyZsB10I%2F64EANIboqLQg9F73l3qKOyO32ZwkUEEFLXAujPJxhcnWLFUvgzXwU9xdk7efFqONxYx9Hitb1GP1ShOs8q3O0IQEmZBWIzu%2BlXoiauaTRS5myEGBPqyEVqVXTllnVDYQYy6%2FzMn9Y297KmSaOzENW9vkUtOnEdMlyv6GGYUJWEHPOqEirgicBNfsoJ3nBP8JCjQsPVmOKzLFNECi2VYlkXuVcEBZosjjVu8uNc6p7ddzvDjBzwFADd4Wdzy2QdvsAo%2BQbgYaxdhXaJFmGz2wpvzxovUNrP3%2BpDfOzoQPI%2Bi5mi6c2%2FRKb098TWrNkVpnZTuCH%2BJgmfLHiViGsv5%2B6bVm1m84PD6WBO6ynJHmaBksvg53xHtLx7s1fhI%2BHNpbcHwjKXELTW1Pa0%2BVejWpblEcXEJ5e9QSENFjWMyeXXx3WUpTxSMBK9SgGgP3T%2BYK9rYsWgPPV9hv2mCwmAUd5CdIYPlZLpP22vU9IWVb7%2Bs5kT%2F8tRSiTL6DApnBWcu1ZUUIY603Ixn1YRNvXClU%2FBdUEY99Zs7Ft8c7e1XZzrFMYNcH6Ul50fqQERkJUR1skBBYsNFTwwsaf2vAY6pgFlk1yRlKnUC5h3aRpaKPd7oah8bulsgQcGeiVcaXYmRYv5fKVJNHAjqZD1jdalojjieL1GbvGsvLGtKQ%2F2TN%2BiVSd%2BjEvOKtBORSRaxcd0br1W3Ri%2FljICgmGHnZwao0JK5tr8d734JHrJjyfjmbBlcIDGJN0ChJstD11LLdXweK9%2FSbQkDhZ7goFDzqpSvM7Y8iFYdVEm%2FNygLFXTJOyL5SVyPkvz&X-Amz-Signature=18ff09b6f24e116697789bc12c483a2b0dd34efd80202bbb88dc68b99fd9f658&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCSYH5I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALo27GqOFsyY8L2dwHlXhAS4LcWDM3TY8PCIydtsADiAiA%2FzsOCLcCWo0tPGzflx%2FzwLSonjMv%2FNcHvWKf5cj0mqSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtA0PHTTZm6ub9nQKtwDiRt3g40XQkHTqwgock59eJwy%2By1pS5oGzlAMMqfjVgyZsB10I%2F64EANIboqLQg9F73l3qKOyO32ZwkUEEFLXAujPJxhcnWLFUvgzXwU9xdk7efFqONxYx9Hitb1GP1ShOs8q3O0IQEmZBWIzu%2BlXoiauaTRS5myEGBPqyEVqVXTllnVDYQYy6%2FzMn9Y297KmSaOzENW9vkUtOnEdMlyv6GGYUJWEHPOqEirgicBNfsoJ3nBP8JCjQsPVmOKzLFNECi2VYlkXuVcEBZosjjVu8uNc6p7ddzvDjBzwFADd4Wdzy2QdvsAo%2BQbgYaxdhXaJFmGz2wpvzxovUNrP3%2BpDfOzoQPI%2Bi5mi6c2%2FRKb098TWrNkVpnZTuCH%2BJgmfLHiViGsv5%2B6bVm1m84PD6WBO6ynJHmaBksvg53xHtLx7s1fhI%2BHNpbcHwjKXELTW1Pa0%2BVejWpblEcXEJ5e9QSENFjWMyeXXx3WUpTxSMBK9SgGgP3T%2BYK9rYsWgPPV9hv2mCwmAUd5CdIYPlZLpP22vU9IWVb7%2Bs5kT%2F8tRSiTL6DApnBWcu1ZUUIY603Ixn1YRNvXClU%2FBdUEY99Zs7Ft8c7e1XZzrFMYNcH6Ul50fqQERkJUR1skBBYsNFTwwsaf2vAY6pgFlk1yRlKnUC5h3aRpaKPd7oah8bulsgQcGeiVcaXYmRYv5fKVJNHAjqZD1jdalojjieL1GbvGsvLGtKQ%2F2TN%2BiVSd%2BjEvOKtBORSRaxcd0br1W3Ri%2FljICgmGHnZwao0JK5tr8d734JHrJjyfjmbBlcIDGJN0ChJstD11LLdXweK9%2FSbQkDhZ7goFDzqpSvM7Y8iFYdVEm%2FNygLFXTJOyL5SVyPkvz&X-Amz-Signature=541bcf531a79f361a82d998a9ed0ddbef7c46aa6d86c64573d5327c79ca44a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCSYH5I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALo27GqOFsyY8L2dwHlXhAS4LcWDM3TY8PCIydtsADiAiA%2FzsOCLcCWo0tPGzflx%2FzwLSonjMv%2FNcHvWKf5cj0mqSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtA0PHTTZm6ub9nQKtwDiRt3g40XQkHTqwgock59eJwy%2By1pS5oGzlAMMqfjVgyZsB10I%2F64EANIboqLQg9F73l3qKOyO32ZwkUEEFLXAujPJxhcnWLFUvgzXwU9xdk7efFqONxYx9Hitb1GP1ShOs8q3O0IQEmZBWIzu%2BlXoiauaTRS5myEGBPqyEVqVXTllnVDYQYy6%2FzMn9Y297KmSaOzENW9vkUtOnEdMlyv6GGYUJWEHPOqEirgicBNfsoJ3nBP8JCjQsPVmOKzLFNECi2VYlkXuVcEBZosjjVu8uNc6p7ddzvDjBzwFADd4Wdzy2QdvsAo%2BQbgYaxdhXaJFmGz2wpvzxovUNrP3%2BpDfOzoQPI%2Bi5mi6c2%2FRKb098TWrNkVpnZTuCH%2BJgmfLHiViGsv5%2B6bVm1m84PD6WBO6ynJHmaBksvg53xHtLx7s1fhI%2BHNpbcHwjKXELTW1Pa0%2BVejWpblEcXEJ5e9QSENFjWMyeXXx3WUpTxSMBK9SgGgP3T%2BYK9rYsWgPPV9hv2mCwmAUd5CdIYPlZLpP22vU9IWVb7%2Bs5kT%2F8tRSiTL6DApnBWcu1ZUUIY603Ixn1YRNvXClU%2FBdUEY99Zs7Ft8c7e1XZzrFMYNcH6Ul50fqQERkJUR1skBBYsNFTwwsaf2vAY6pgFlk1yRlKnUC5h3aRpaKPd7oah8bulsgQcGeiVcaXYmRYv5fKVJNHAjqZD1jdalojjieL1GbvGsvLGtKQ%2F2TN%2BiVSd%2BjEvOKtBORSRaxcd0br1W3Ri%2FljICgmGHnZwao0JK5tr8d734JHrJjyfjmbBlcIDGJN0ChJstD11LLdXweK9%2FSbQkDhZ7goFDzqpSvM7Y8iFYdVEm%2FNygLFXTJOyL5SVyPkvz&X-Amz-Signature=dafd9ad7491f76ec0d47af74f0a5514d5a5e5aea89aab15fbda38856a14872bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCSYH5I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALo27GqOFsyY8L2dwHlXhAS4LcWDM3TY8PCIydtsADiAiA%2FzsOCLcCWo0tPGzflx%2FzwLSonjMv%2FNcHvWKf5cj0mqSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtA0PHTTZm6ub9nQKtwDiRt3g40XQkHTqwgock59eJwy%2By1pS5oGzlAMMqfjVgyZsB10I%2F64EANIboqLQg9F73l3qKOyO32ZwkUEEFLXAujPJxhcnWLFUvgzXwU9xdk7efFqONxYx9Hitb1GP1ShOs8q3O0IQEmZBWIzu%2BlXoiauaTRS5myEGBPqyEVqVXTllnVDYQYy6%2FzMn9Y297KmSaOzENW9vkUtOnEdMlyv6GGYUJWEHPOqEirgicBNfsoJ3nBP8JCjQsPVmOKzLFNECi2VYlkXuVcEBZosjjVu8uNc6p7ddzvDjBzwFADd4Wdzy2QdvsAo%2BQbgYaxdhXaJFmGz2wpvzxovUNrP3%2BpDfOzoQPI%2Bi5mi6c2%2FRKb098TWrNkVpnZTuCH%2BJgmfLHiViGsv5%2B6bVm1m84PD6WBO6ynJHmaBksvg53xHtLx7s1fhI%2BHNpbcHwjKXELTW1Pa0%2BVejWpblEcXEJ5e9QSENFjWMyeXXx3WUpTxSMBK9SgGgP3T%2BYK9rYsWgPPV9hv2mCwmAUd5CdIYPlZLpP22vU9IWVb7%2Bs5kT%2F8tRSiTL6DApnBWcu1ZUUIY603Ixn1YRNvXClU%2FBdUEY99Zs7Ft8c7e1XZzrFMYNcH6Ul50fqQERkJUR1skBBYsNFTwwsaf2vAY6pgFlk1yRlKnUC5h3aRpaKPd7oah8bulsgQcGeiVcaXYmRYv5fKVJNHAjqZD1jdalojjieL1GbvGsvLGtKQ%2F2TN%2BiVSd%2BjEvOKtBORSRaxcd0br1W3Ri%2FljICgmGHnZwao0JK5tr8d734JHrJjyfjmbBlcIDGJN0ChJstD11LLdXweK9%2FSbQkDhZ7goFDzqpSvM7Y8iFYdVEm%2FNygLFXTJOyL5SVyPkvz&X-Amz-Signature=731f8fd8b186ae14dfc46899b46d50365f7993290051824dd94883ef7be8619f&X-Amz-SignedHeaders=host&x-id=GetObject)
