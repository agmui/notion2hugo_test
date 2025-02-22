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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5JC7RY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj3eLyMchxfWXleWt8m3gv5fCManKSwySGP8GUdEEhMAiBDq9uaOBnALB2suuGVA88tspdL7JFP%2B3xyCJBJnfQXDCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWw6mPuBdLb5ZgZBiKtwD6LQFJt92CFLmJe6fov7rH33GC0SG3NYlxirx8js50dZOxV51bDHF9Wb%2BCt451Eak992E6nh2rOpPoppAjgnoc9ME2mfwCQ0T5UaJZNl4rCrsk83Bnmb5znCTY3906YvU9uWNQUHOwaFyMy21oFpN7XMWUs2mP5wmmhZR1Kx3LT2WprFLVkDVtey9Mg%2B0vrIzxX8QHUVj8R%2FO00SUVOw2jxr9vmq1%2FkxBxuycad0mftdRXwJMHLdpN7TprWPfRUUYeFhckFTCfBB7d8Rm7A7ooMEuHVSm0YKGX%2BBiuipXejC2XnkRsDWJ0vw2SGTr0l3ceYjl%2F5aSzPb6mP9XC6Lo4COk6Ebj4jhzF4HM0IN5KuzMZwBXzMXGZG0yaahspCDH%2BSHCzIQJQ1ot3gbp3RR6mO6pLWsDvL3aXEnZWJDxkJxJJSUujp4Bv4zIrkWv%2B2eshuZmdXuSjLq%2FlZ5igcjgS2r9hBPP1eSrdf8dArVDW6CGO%2By9cNcVDQ2yXN%2BlbXlmTzAUFDWpTJsc6DLY4igZwXe821%2FACesp8kE4fgvrCxvrPRDVqJhrtzsnCANqq70798uau7ip8nPdoeU0bkPbk3L%2B6293A4y5X5jaOmMChs2Ind%2BZ9B%2B5HvB2A8kwl4PovQY6pgFsKH8L2L3%2FHpuX9BKlgI%2FgiPsVCUmUJRnfwpSsAsRxU%2BGzP%2Fw5c3NpUU7drmliz3nKnfJC%2F7Cqet9BnwqstzlSOmIJEJoeSS%2BO6l9nov%2FtjTHkKmvXHufWU%2FY0vk6FuyeVACo84KBrTr42ANRwAQU0XnBBEzQACrvdciqsZ%2FDw0i9paV6r2fbYb2upD04mZekoPljgLirRk1BV2V5xomk1E4ytGGXJ&X-Amz-Signature=5b2a75789e3781b41c55ebfcfe9df7459aa05086fd160a6dee9c2113921d3257&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5JC7RY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj3eLyMchxfWXleWt8m3gv5fCManKSwySGP8GUdEEhMAiBDq9uaOBnALB2suuGVA88tspdL7JFP%2B3xyCJBJnfQXDCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWw6mPuBdLb5ZgZBiKtwD6LQFJt92CFLmJe6fov7rH33GC0SG3NYlxirx8js50dZOxV51bDHF9Wb%2BCt451Eak992E6nh2rOpPoppAjgnoc9ME2mfwCQ0T5UaJZNl4rCrsk83Bnmb5znCTY3906YvU9uWNQUHOwaFyMy21oFpN7XMWUs2mP5wmmhZR1Kx3LT2WprFLVkDVtey9Mg%2B0vrIzxX8QHUVj8R%2FO00SUVOw2jxr9vmq1%2FkxBxuycad0mftdRXwJMHLdpN7TprWPfRUUYeFhckFTCfBB7d8Rm7A7ooMEuHVSm0YKGX%2BBiuipXejC2XnkRsDWJ0vw2SGTr0l3ceYjl%2F5aSzPb6mP9XC6Lo4COk6Ebj4jhzF4HM0IN5KuzMZwBXzMXGZG0yaahspCDH%2BSHCzIQJQ1ot3gbp3RR6mO6pLWsDvL3aXEnZWJDxkJxJJSUujp4Bv4zIrkWv%2B2eshuZmdXuSjLq%2FlZ5igcjgS2r9hBPP1eSrdf8dArVDW6CGO%2By9cNcVDQ2yXN%2BlbXlmTzAUFDWpTJsc6DLY4igZwXe821%2FACesp8kE4fgvrCxvrPRDVqJhrtzsnCANqq70798uau7ip8nPdoeU0bkPbk3L%2B6293A4y5X5jaOmMChs2Ind%2BZ9B%2B5HvB2A8kwl4PovQY6pgFsKH8L2L3%2FHpuX9BKlgI%2FgiPsVCUmUJRnfwpSsAsRxU%2BGzP%2Fw5c3NpUU7drmliz3nKnfJC%2F7Cqet9BnwqstzlSOmIJEJoeSS%2BO6l9nov%2FtjTHkKmvXHufWU%2FY0vk6FuyeVACo84KBrTr42ANRwAQU0XnBBEzQACrvdciqsZ%2FDw0i9paV6r2fbYb2upD04mZekoPljgLirRk1BV2V5xomk1E4ytGGXJ&X-Amz-Signature=f635d5618f6e43b2a6a66cf6e71c0c2ba1ca7788029ab6c47f651cfc969bb9a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5JC7RY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj3eLyMchxfWXleWt8m3gv5fCManKSwySGP8GUdEEhMAiBDq9uaOBnALB2suuGVA88tspdL7JFP%2B3xyCJBJnfQXDCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWw6mPuBdLb5ZgZBiKtwD6LQFJt92CFLmJe6fov7rH33GC0SG3NYlxirx8js50dZOxV51bDHF9Wb%2BCt451Eak992E6nh2rOpPoppAjgnoc9ME2mfwCQ0T5UaJZNl4rCrsk83Bnmb5znCTY3906YvU9uWNQUHOwaFyMy21oFpN7XMWUs2mP5wmmhZR1Kx3LT2WprFLVkDVtey9Mg%2B0vrIzxX8QHUVj8R%2FO00SUVOw2jxr9vmq1%2FkxBxuycad0mftdRXwJMHLdpN7TprWPfRUUYeFhckFTCfBB7d8Rm7A7ooMEuHVSm0YKGX%2BBiuipXejC2XnkRsDWJ0vw2SGTr0l3ceYjl%2F5aSzPb6mP9XC6Lo4COk6Ebj4jhzF4HM0IN5KuzMZwBXzMXGZG0yaahspCDH%2BSHCzIQJQ1ot3gbp3RR6mO6pLWsDvL3aXEnZWJDxkJxJJSUujp4Bv4zIrkWv%2B2eshuZmdXuSjLq%2FlZ5igcjgS2r9hBPP1eSrdf8dArVDW6CGO%2By9cNcVDQ2yXN%2BlbXlmTzAUFDWpTJsc6DLY4igZwXe821%2FACesp8kE4fgvrCxvrPRDVqJhrtzsnCANqq70798uau7ip8nPdoeU0bkPbk3L%2B6293A4y5X5jaOmMChs2Ind%2BZ9B%2B5HvB2A8kwl4PovQY6pgFsKH8L2L3%2FHpuX9BKlgI%2FgiPsVCUmUJRnfwpSsAsRxU%2BGzP%2Fw5c3NpUU7drmliz3nKnfJC%2F7Cqet9BnwqstzlSOmIJEJoeSS%2BO6l9nov%2FtjTHkKmvXHufWU%2FY0vk6FuyeVACo84KBrTr42ANRwAQU0XnBBEzQACrvdciqsZ%2FDw0i9paV6r2fbYb2upD04mZekoPljgLirRk1BV2V5xomk1E4ytGGXJ&X-Amz-Signature=bc73200ed299bf8929b104cfa1a6c882d313aaafbb8e6cef22016fe4d039e5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5JC7RY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj3eLyMchxfWXleWt8m3gv5fCManKSwySGP8GUdEEhMAiBDq9uaOBnALB2suuGVA88tspdL7JFP%2B3xyCJBJnfQXDCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWw6mPuBdLb5ZgZBiKtwD6LQFJt92CFLmJe6fov7rH33GC0SG3NYlxirx8js50dZOxV51bDHF9Wb%2BCt451Eak992E6nh2rOpPoppAjgnoc9ME2mfwCQ0T5UaJZNl4rCrsk83Bnmb5znCTY3906YvU9uWNQUHOwaFyMy21oFpN7XMWUs2mP5wmmhZR1Kx3LT2WprFLVkDVtey9Mg%2B0vrIzxX8QHUVj8R%2FO00SUVOw2jxr9vmq1%2FkxBxuycad0mftdRXwJMHLdpN7TprWPfRUUYeFhckFTCfBB7d8Rm7A7ooMEuHVSm0YKGX%2BBiuipXejC2XnkRsDWJ0vw2SGTr0l3ceYjl%2F5aSzPb6mP9XC6Lo4COk6Ebj4jhzF4HM0IN5KuzMZwBXzMXGZG0yaahspCDH%2BSHCzIQJQ1ot3gbp3RR6mO6pLWsDvL3aXEnZWJDxkJxJJSUujp4Bv4zIrkWv%2B2eshuZmdXuSjLq%2FlZ5igcjgS2r9hBPP1eSrdf8dArVDW6CGO%2By9cNcVDQ2yXN%2BlbXlmTzAUFDWpTJsc6DLY4igZwXe821%2FACesp8kE4fgvrCxvrPRDVqJhrtzsnCANqq70798uau7ip8nPdoeU0bkPbk3L%2B6293A4y5X5jaOmMChs2Ind%2BZ9B%2B5HvB2A8kwl4PovQY6pgFsKH8L2L3%2FHpuX9BKlgI%2FgiPsVCUmUJRnfwpSsAsRxU%2BGzP%2Fw5c3NpUU7drmliz3nKnfJC%2F7Cqet9BnwqstzlSOmIJEJoeSS%2BO6l9nov%2FtjTHkKmvXHufWU%2FY0vk6FuyeVACo84KBrTr42ANRwAQU0XnBBEzQACrvdciqsZ%2FDw0i9paV6r2fbYb2upD04mZekoPljgLirRk1BV2V5xomk1E4ytGGXJ&X-Amz-Signature=e01dca9d9e8ee3c2a614b0bbff8d2721f321e4eb8b56d85dfe47d1d87b3fca4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5JC7RY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj3eLyMchxfWXleWt8m3gv5fCManKSwySGP8GUdEEhMAiBDq9uaOBnALB2suuGVA88tspdL7JFP%2B3xyCJBJnfQXDCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWw6mPuBdLb5ZgZBiKtwD6LQFJt92CFLmJe6fov7rH33GC0SG3NYlxirx8js50dZOxV51bDHF9Wb%2BCt451Eak992E6nh2rOpPoppAjgnoc9ME2mfwCQ0T5UaJZNl4rCrsk83Bnmb5znCTY3906YvU9uWNQUHOwaFyMy21oFpN7XMWUs2mP5wmmhZR1Kx3LT2WprFLVkDVtey9Mg%2B0vrIzxX8QHUVj8R%2FO00SUVOw2jxr9vmq1%2FkxBxuycad0mftdRXwJMHLdpN7TprWPfRUUYeFhckFTCfBB7d8Rm7A7ooMEuHVSm0YKGX%2BBiuipXejC2XnkRsDWJ0vw2SGTr0l3ceYjl%2F5aSzPb6mP9XC6Lo4COk6Ebj4jhzF4HM0IN5KuzMZwBXzMXGZG0yaahspCDH%2BSHCzIQJQ1ot3gbp3RR6mO6pLWsDvL3aXEnZWJDxkJxJJSUujp4Bv4zIrkWv%2B2eshuZmdXuSjLq%2FlZ5igcjgS2r9hBPP1eSrdf8dArVDW6CGO%2By9cNcVDQ2yXN%2BlbXlmTzAUFDWpTJsc6DLY4igZwXe821%2FACesp8kE4fgvrCxvrPRDVqJhrtzsnCANqq70798uau7ip8nPdoeU0bkPbk3L%2B6293A4y5X5jaOmMChs2Ind%2BZ9B%2B5HvB2A8kwl4PovQY6pgFsKH8L2L3%2FHpuX9BKlgI%2FgiPsVCUmUJRnfwpSsAsRxU%2BGzP%2Fw5c3NpUU7drmliz3nKnfJC%2F7Cqet9BnwqstzlSOmIJEJoeSS%2BO6l9nov%2FtjTHkKmvXHufWU%2FY0vk6FuyeVACo84KBrTr42ANRwAQU0XnBBEzQACrvdciqsZ%2FDw0i9paV6r2fbYb2upD04mZekoPljgLirRk1BV2V5xomk1E4ytGGXJ&X-Amz-Signature=dc620a6c769236079e1da6be89200b7ce5b63dfd1f3ad548ad5fc7c7be47c3fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5JC7RY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj3eLyMchxfWXleWt8m3gv5fCManKSwySGP8GUdEEhMAiBDq9uaOBnALB2suuGVA88tspdL7JFP%2B3xyCJBJnfQXDCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWw6mPuBdLb5ZgZBiKtwD6LQFJt92CFLmJe6fov7rH33GC0SG3NYlxirx8js50dZOxV51bDHF9Wb%2BCt451Eak992E6nh2rOpPoppAjgnoc9ME2mfwCQ0T5UaJZNl4rCrsk83Bnmb5znCTY3906YvU9uWNQUHOwaFyMy21oFpN7XMWUs2mP5wmmhZR1Kx3LT2WprFLVkDVtey9Mg%2B0vrIzxX8QHUVj8R%2FO00SUVOw2jxr9vmq1%2FkxBxuycad0mftdRXwJMHLdpN7TprWPfRUUYeFhckFTCfBB7d8Rm7A7ooMEuHVSm0YKGX%2BBiuipXejC2XnkRsDWJ0vw2SGTr0l3ceYjl%2F5aSzPb6mP9XC6Lo4COk6Ebj4jhzF4HM0IN5KuzMZwBXzMXGZG0yaahspCDH%2BSHCzIQJQ1ot3gbp3RR6mO6pLWsDvL3aXEnZWJDxkJxJJSUujp4Bv4zIrkWv%2B2eshuZmdXuSjLq%2FlZ5igcjgS2r9hBPP1eSrdf8dArVDW6CGO%2By9cNcVDQ2yXN%2BlbXlmTzAUFDWpTJsc6DLY4igZwXe821%2FACesp8kE4fgvrCxvrPRDVqJhrtzsnCANqq70798uau7ip8nPdoeU0bkPbk3L%2B6293A4y5X5jaOmMChs2Ind%2BZ9B%2B5HvB2A8kwl4PovQY6pgFsKH8L2L3%2FHpuX9BKlgI%2FgiPsVCUmUJRnfwpSsAsRxU%2BGzP%2Fw5c3NpUU7drmliz3nKnfJC%2F7Cqet9BnwqstzlSOmIJEJoeSS%2BO6l9nov%2FtjTHkKmvXHufWU%2FY0vk6FuyeVACo84KBrTr42ANRwAQU0XnBBEzQACrvdciqsZ%2FDw0i9paV6r2fbYb2upD04mZekoPljgLirRk1BV2V5xomk1E4ytGGXJ&X-Amz-Signature=cea0619191785eae01ee88a28fb88cc5d0b585a5fea0e08d0a6f40cf802da224&X-Amz-SignedHeaders=host&x-id=GetObject)
