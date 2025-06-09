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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZERYPGJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2iMH%2FWa2X2IfCypReVLbpfj4umR8d0W16sduXFXkgtgIgeaWbIBhOE8r9WacW9GNmgHha%2BghPGfPGPmYW1DO%2Bh24qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9bqp4f1bYsuQhLjCrcA3TvHfd7QlNFRgNhcK8DrF9uFrfDpxMAW%2FPlfM0nahUQQ4YGTgB2TUH8rsz4h5ml6h75ovr5E5t%2F4ppaprz5f2UU%2BGSzbnVzVjOECG0xrPOhh02zG5355p9cIBeXATsJQA5WBMj0dg7GtY9EmvEk8%2F50mqJX9gHon2LqPrV2XWbuD84EznyFHujLasInigzi6Wl5lnm0JDfdGrsB%2B48zQTGMagUx2cg9EsrIAXpZgBBmuYvXm2Zct4xq0my0xWdd7ETyiEV%2Bml8U5Y8tIS2jmV8IkibWdS7Zp%2FIOkd5FLW7QpBk7tpnslmR9Qu1nBTm3W99GtgVBYul6rUNuQoJreioffLiJ2wc%2FrB0pd9sDIVDdhCTI%2BIqgWNvhRwN6ZamGHcMBeucs8mTdUZL%2BaTl%2BJuBl1sFlKm8t%2BtHaCyq0%2BX5iRvE2yL61fztkcgjI5PTFguSU6KqnIiI9vK0Qiu1QXrng9nrOAxTPmTRquhi8V4h4AVbb1i51KhkZCAddToFA%2BCQRkPukegXBEvdVI8htfG46NxHP%2BQSZMblYHCeNEkMlBE7A18e2t%2BHYBmZDC9FJ88kglD1up6xgJPqkP3%2BX818Q3AKaC3xxvbl5bbCA7HXhJZ1hcWnhSZZEqMa2MNiancIGOqUBYLxZY%2F3Ua0gWBzj4CCda1dtvtNEEaaNTotWIYSs7CeKy%2FnFSoVQadNapytj4D1Ofizf5nSyjPKRJrkJJFyKNqZoQB8F2zu4FdZ%2FpIPN1WSfIpQc%2FQ%2Fz6J4r3E88dZ5PQBgfuzByGVSuTD%2FL0Dp0EYTt%2FLPvyU6bqkxcI2pMR7AxdinOfiqsxzLUHbIsQ5EgB3t4qUn0tfjAMkUJz1afS%2FGlu%2FS16&X-Amz-Signature=211709a04879305c466e1f834ad9f7761ecd94b2ea8ac3346653c8f544c1afb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZERYPGJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2iMH%2FWa2X2IfCypReVLbpfj4umR8d0W16sduXFXkgtgIgeaWbIBhOE8r9WacW9GNmgHha%2BghPGfPGPmYW1DO%2Bh24qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9bqp4f1bYsuQhLjCrcA3TvHfd7QlNFRgNhcK8DrF9uFrfDpxMAW%2FPlfM0nahUQQ4YGTgB2TUH8rsz4h5ml6h75ovr5E5t%2F4ppaprz5f2UU%2BGSzbnVzVjOECG0xrPOhh02zG5355p9cIBeXATsJQA5WBMj0dg7GtY9EmvEk8%2F50mqJX9gHon2LqPrV2XWbuD84EznyFHujLasInigzi6Wl5lnm0JDfdGrsB%2B48zQTGMagUx2cg9EsrIAXpZgBBmuYvXm2Zct4xq0my0xWdd7ETyiEV%2Bml8U5Y8tIS2jmV8IkibWdS7Zp%2FIOkd5FLW7QpBk7tpnslmR9Qu1nBTm3W99GtgVBYul6rUNuQoJreioffLiJ2wc%2FrB0pd9sDIVDdhCTI%2BIqgWNvhRwN6ZamGHcMBeucs8mTdUZL%2BaTl%2BJuBl1sFlKm8t%2BtHaCyq0%2BX5iRvE2yL61fztkcgjI5PTFguSU6KqnIiI9vK0Qiu1QXrng9nrOAxTPmTRquhi8V4h4AVbb1i51KhkZCAddToFA%2BCQRkPukegXBEvdVI8htfG46NxHP%2BQSZMblYHCeNEkMlBE7A18e2t%2BHYBmZDC9FJ88kglD1up6xgJPqkP3%2BX818Q3AKaC3xxvbl5bbCA7HXhJZ1hcWnhSZZEqMa2MNiancIGOqUBYLxZY%2F3Ua0gWBzj4CCda1dtvtNEEaaNTotWIYSs7CeKy%2FnFSoVQadNapytj4D1Ofizf5nSyjPKRJrkJJFyKNqZoQB8F2zu4FdZ%2FpIPN1WSfIpQc%2FQ%2Fz6J4r3E88dZ5PQBgfuzByGVSuTD%2FL0Dp0EYTt%2FLPvyU6bqkxcI2pMR7AxdinOfiqsxzLUHbIsQ5EgB3t4qUn0tfjAMkUJz1afS%2FGlu%2FS16&X-Amz-Signature=e9b66afb179652da18736f6c988e34ffd51a0a163d04ce4e7ba272588c60ee0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZERYPGJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2iMH%2FWa2X2IfCypReVLbpfj4umR8d0W16sduXFXkgtgIgeaWbIBhOE8r9WacW9GNmgHha%2BghPGfPGPmYW1DO%2Bh24qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9bqp4f1bYsuQhLjCrcA3TvHfd7QlNFRgNhcK8DrF9uFrfDpxMAW%2FPlfM0nahUQQ4YGTgB2TUH8rsz4h5ml6h75ovr5E5t%2F4ppaprz5f2UU%2BGSzbnVzVjOECG0xrPOhh02zG5355p9cIBeXATsJQA5WBMj0dg7GtY9EmvEk8%2F50mqJX9gHon2LqPrV2XWbuD84EznyFHujLasInigzi6Wl5lnm0JDfdGrsB%2B48zQTGMagUx2cg9EsrIAXpZgBBmuYvXm2Zct4xq0my0xWdd7ETyiEV%2Bml8U5Y8tIS2jmV8IkibWdS7Zp%2FIOkd5FLW7QpBk7tpnslmR9Qu1nBTm3W99GtgVBYul6rUNuQoJreioffLiJ2wc%2FrB0pd9sDIVDdhCTI%2BIqgWNvhRwN6ZamGHcMBeucs8mTdUZL%2BaTl%2BJuBl1sFlKm8t%2BtHaCyq0%2BX5iRvE2yL61fztkcgjI5PTFguSU6KqnIiI9vK0Qiu1QXrng9nrOAxTPmTRquhi8V4h4AVbb1i51KhkZCAddToFA%2BCQRkPukegXBEvdVI8htfG46NxHP%2BQSZMblYHCeNEkMlBE7A18e2t%2BHYBmZDC9FJ88kglD1up6xgJPqkP3%2BX818Q3AKaC3xxvbl5bbCA7HXhJZ1hcWnhSZZEqMa2MNiancIGOqUBYLxZY%2F3Ua0gWBzj4CCda1dtvtNEEaaNTotWIYSs7CeKy%2FnFSoVQadNapytj4D1Ofizf5nSyjPKRJrkJJFyKNqZoQB8F2zu4FdZ%2FpIPN1WSfIpQc%2FQ%2Fz6J4r3E88dZ5PQBgfuzByGVSuTD%2FL0Dp0EYTt%2FLPvyU6bqkxcI2pMR7AxdinOfiqsxzLUHbIsQ5EgB3t4qUn0tfjAMkUJz1afS%2FGlu%2FS16&X-Amz-Signature=a2fdb4fc5898694f9df04ebf77b2e269acc4c6bff6968bc97662e511fe15dfb9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZERYPGJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2iMH%2FWa2X2IfCypReVLbpfj4umR8d0W16sduXFXkgtgIgeaWbIBhOE8r9WacW9GNmgHha%2BghPGfPGPmYW1DO%2Bh24qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9bqp4f1bYsuQhLjCrcA3TvHfd7QlNFRgNhcK8DrF9uFrfDpxMAW%2FPlfM0nahUQQ4YGTgB2TUH8rsz4h5ml6h75ovr5E5t%2F4ppaprz5f2UU%2BGSzbnVzVjOECG0xrPOhh02zG5355p9cIBeXATsJQA5WBMj0dg7GtY9EmvEk8%2F50mqJX9gHon2LqPrV2XWbuD84EznyFHujLasInigzi6Wl5lnm0JDfdGrsB%2B48zQTGMagUx2cg9EsrIAXpZgBBmuYvXm2Zct4xq0my0xWdd7ETyiEV%2Bml8U5Y8tIS2jmV8IkibWdS7Zp%2FIOkd5FLW7QpBk7tpnslmR9Qu1nBTm3W99GtgVBYul6rUNuQoJreioffLiJ2wc%2FrB0pd9sDIVDdhCTI%2BIqgWNvhRwN6ZamGHcMBeucs8mTdUZL%2BaTl%2BJuBl1sFlKm8t%2BtHaCyq0%2BX5iRvE2yL61fztkcgjI5PTFguSU6KqnIiI9vK0Qiu1QXrng9nrOAxTPmTRquhi8V4h4AVbb1i51KhkZCAddToFA%2BCQRkPukegXBEvdVI8htfG46NxHP%2BQSZMblYHCeNEkMlBE7A18e2t%2BHYBmZDC9FJ88kglD1up6xgJPqkP3%2BX818Q3AKaC3xxvbl5bbCA7HXhJZ1hcWnhSZZEqMa2MNiancIGOqUBYLxZY%2F3Ua0gWBzj4CCda1dtvtNEEaaNTotWIYSs7CeKy%2FnFSoVQadNapytj4D1Ofizf5nSyjPKRJrkJJFyKNqZoQB8F2zu4FdZ%2FpIPN1WSfIpQc%2FQ%2Fz6J4r3E88dZ5PQBgfuzByGVSuTD%2FL0Dp0EYTt%2FLPvyU6bqkxcI2pMR7AxdinOfiqsxzLUHbIsQ5EgB3t4qUn0tfjAMkUJz1afS%2FGlu%2FS16&X-Amz-Signature=75c2061ec6a1a1d793cc7c05e20c3ebafbbd7b7facda39025a2ca0e9f24f4da7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZERYPGJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2iMH%2FWa2X2IfCypReVLbpfj4umR8d0W16sduXFXkgtgIgeaWbIBhOE8r9WacW9GNmgHha%2BghPGfPGPmYW1DO%2Bh24qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9bqp4f1bYsuQhLjCrcA3TvHfd7QlNFRgNhcK8DrF9uFrfDpxMAW%2FPlfM0nahUQQ4YGTgB2TUH8rsz4h5ml6h75ovr5E5t%2F4ppaprz5f2UU%2BGSzbnVzVjOECG0xrPOhh02zG5355p9cIBeXATsJQA5WBMj0dg7GtY9EmvEk8%2F50mqJX9gHon2LqPrV2XWbuD84EznyFHujLasInigzi6Wl5lnm0JDfdGrsB%2B48zQTGMagUx2cg9EsrIAXpZgBBmuYvXm2Zct4xq0my0xWdd7ETyiEV%2Bml8U5Y8tIS2jmV8IkibWdS7Zp%2FIOkd5FLW7QpBk7tpnslmR9Qu1nBTm3W99GtgVBYul6rUNuQoJreioffLiJ2wc%2FrB0pd9sDIVDdhCTI%2BIqgWNvhRwN6ZamGHcMBeucs8mTdUZL%2BaTl%2BJuBl1sFlKm8t%2BtHaCyq0%2BX5iRvE2yL61fztkcgjI5PTFguSU6KqnIiI9vK0Qiu1QXrng9nrOAxTPmTRquhi8V4h4AVbb1i51KhkZCAddToFA%2BCQRkPukegXBEvdVI8htfG46NxHP%2BQSZMblYHCeNEkMlBE7A18e2t%2BHYBmZDC9FJ88kglD1up6xgJPqkP3%2BX818Q3AKaC3xxvbl5bbCA7HXhJZ1hcWnhSZZEqMa2MNiancIGOqUBYLxZY%2F3Ua0gWBzj4CCda1dtvtNEEaaNTotWIYSs7CeKy%2FnFSoVQadNapytj4D1Ofizf5nSyjPKRJrkJJFyKNqZoQB8F2zu4FdZ%2FpIPN1WSfIpQc%2FQ%2Fz6J4r3E88dZ5PQBgfuzByGVSuTD%2FL0Dp0EYTt%2FLPvyU6bqkxcI2pMR7AxdinOfiqsxzLUHbIsQ5EgB3t4qUn0tfjAMkUJz1afS%2FGlu%2FS16&X-Amz-Signature=ecb3f40b660f53ef25790459e9e4ceef324ec949ba70904fa64ed2e4917e2479&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZERYPGJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2iMH%2FWa2X2IfCypReVLbpfj4umR8d0W16sduXFXkgtgIgeaWbIBhOE8r9WacW9GNmgHha%2BghPGfPGPmYW1DO%2Bh24qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9bqp4f1bYsuQhLjCrcA3TvHfd7QlNFRgNhcK8DrF9uFrfDpxMAW%2FPlfM0nahUQQ4YGTgB2TUH8rsz4h5ml6h75ovr5E5t%2F4ppaprz5f2UU%2BGSzbnVzVjOECG0xrPOhh02zG5355p9cIBeXATsJQA5WBMj0dg7GtY9EmvEk8%2F50mqJX9gHon2LqPrV2XWbuD84EznyFHujLasInigzi6Wl5lnm0JDfdGrsB%2B48zQTGMagUx2cg9EsrIAXpZgBBmuYvXm2Zct4xq0my0xWdd7ETyiEV%2Bml8U5Y8tIS2jmV8IkibWdS7Zp%2FIOkd5FLW7QpBk7tpnslmR9Qu1nBTm3W99GtgVBYul6rUNuQoJreioffLiJ2wc%2FrB0pd9sDIVDdhCTI%2BIqgWNvhRwN6ZamGHcMBeucs8mTdUZL%2BaTl%2BJuBl1sFlKm8t%2BtHaCyq0%2BX5iRvE2yL61fztkcgjI5PTFguSU6KqnIiI9vK0Qiu1QXrng9nrOAxTPmTRquhi8V4h4AVbb1i51KhkZCAddToFA%2BCQRkPukegXBEvdVI8htfG46NxHP%2BQSZMblYHCeNEkMlBE7A18e2t%2BHYBmZDC9FJ88kglD1up6xgJPqkP3%2BX818Q3AKaC3xxvbl5bbCA7HXhJZ1hcWnhSZZEqMa2MNiancIGOqUBYLxZY%2F3Ua0gWBzj4CCda1dtvtNEEaaNTotWIYSs7CeKy%2FnFSoVQadNapytj4D1Ofizf5nSyjPKRJrkJJFyKNqZoQB8F2zu4FdZ%2FpIPN1WSfIpQc%2FQ%2Fz6J4r3E88dZ5PQBgfuzByGVSuTD%2FL0Dp0EYTt%2FLPvyU6bqkxcI2pMR7AxdinOfiqsxzLUHbIsQ5EgB3t4qUn0tfjAMkUJz1afS%2FGlu%2FS16&X-Amz-Signature=10185aebf3ed7f210a8e2b96625101c5eb20d1d12f8e79e7f7ba96c2f95247bd&X-Amz-SignedHeaders=host&x-id=GetObject)
