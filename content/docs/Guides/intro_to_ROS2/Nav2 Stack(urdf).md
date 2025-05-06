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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXLSZR6A%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm6CxP5ywaWdtaOzAfU2J%2BQF9sS4KJX5bRPkDDMBMkaAiAiM1bAUV2aFUwuGxaftJsQv298ndGp%2FUj2gjMmivv%2BHCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMXoh1ukKJOzWn7j3oKtwDGlZGZLFC3oRdPlaB7i3px3ds6nNDGdd1feyAL2ajAW2C8%2F8NCIUPCH2nl2sGW5yeB%2FEUh0E%2FvtW%2FMDrndg880bFAUCoNv3dEJZ109TSffRcNDEZlF4XVHNNvOP03K1eFy2zO%2BUyJResVKTdZ8N%2Fq%2BFQ%2BX4DODfLc%2FoO2WnrgbVslWfqXPyLzo9IoISRZ0kGEmmfy0pAln%2FwwDcc8K90o48pT9iDzkT1be3DUslOVv8qfKy%2BSIL6PtzR6Jd3xn1zOe%2BgQldhCCLCLoZ6D4QmRWHgH4N3j8dNIT9wL4T6esUrOiJMAIYI6DMsz5zbGkBOnx%2BTT4IlHAXUk7tesbSU3x9ijyIer18bAqn07dLdODx0h%2BpdjGqnSjFXmU5u%2F2I0P8frWZqEBk%2BeRn4HhWyrUT%2BHqtmyH9xLxv2T%2BKhk5MYeGebBNVaTFR3GtXy5pwRug1IdbDqztemKupmY4LR%2F2rEfopF3zVNPj1V8NgQPVZGHAXEtVrC0ABMLaIr0L%2BmHRk5GsFGysNvREa2UXr%2FIAoxkDbCjXNx2kKYxGTpKc%2F3Jmz4cGR9bXGHmx2fo2BbLLU4vXlUZQ3VsfJjHo6WamEsKvEs%2BDMcRWLqodoJSJFei1CA9Ib46sfNCHwfcwlvfnwAY6pgEPCnhL0GLrdLOVEgyqG7aB0zN8tfqWStL36z%2FNC4zcQYIhRe7VkAKt2DcwOMz1%2FOfXHUh%2FpTFATWjxLgZZcnLGybFOudKy0sbzM4VCNyq43Fe6fb%2F2lbzMeFUEi6V6oS3DKzuhbBfHBg0Wbnlf4psqjcD0Dm5G0crr3JPV943i7E6FgcsiSoztChsypkbzf4NJD%2FCp8IvOjMoxrI%2F3ObHtp4fK%2B2r3&X-Amz-Signature=7c0ad0baa0d97db315f47b18e30c3f1a09fae5b4ab6bcc5b2187adf805c70aed&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXLSZR6A%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm6CxP5ywaWdtaOzAfU2J%2BQF9sS4KJX5bRPkDDMBMkaAiAiM1bAUV2aFUwuGxaftJsQv298ndGp%2FUj2gjMmivv%2BHCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMXoh1ukKJOzWn7j3oKtwDGlZGZLFC3oRdPlaB7i3px3ds6nNDGdd1feyAL2ajAW2C8%2F8NCIUPCH2nl2sGW5yeB%2FEUh0E%2FvtW%2FMDrndg880bFAUCoNv3dEJZ109TSffRcNDEZlF4XVHNNvOP03K1eFy2zO%2BUyJResVKTdZ8N%2Fq%2BFQ%2BX4DODfLc%2FoO2WnrgbVslWfqXPyLzo9IoISRZ0kGEmmfy0pAln%2FwwDcc8K90o48pT9iDzkT1be3DUslOVv8qfKy%2BSIL6PtzR6Jd3xn1zOe%2BgQldhCCLCLoZ6D4QmRWHgH4N3j8dNIT9wL4T6esUrOiJMAIYI6DMsz5zbGkBOnx%2BTT4IlHAXUk7tesbSU3x9ijyIer18bAqn07dLdODx0h%2BpdjGqnSjFXmU5u%2F2I0P8frWZqEBk%2BeRn4HhWyrUT%2BHqtmyH9xLxv2T%2BKhk5MYeGebBNVaTFR3GtXy5pwRug1IdbDqztemKupmY4LR%2F2rEfopF3zVNPj1V8NgQPVZGHAXEtVrC0ABMLaIr0L%2BmHRk5GsFGysNvREa2UXr%2FIAoxkDbCjXNx2kKYxGTpKc%2F3Jmz4cGR9bXGHmx2fo2BbLLU4vXlUZQ3VsfJjHo6WamEsKvEs%2BDMcRWLqodoJSJFei1CA9Ib46sfNCHwfcwlvfnwAY6pgEPCnhL0GLrdLOVEgyqG7aB0zN8tfqWStL36z%2FNC4zcQYIhRe7VkAKt2DcwOMz1%2FOfXHUh%2FpTFATWjxLgZZcnLGybFOudKy0sbzM4VCNyq43Fe6fb%2F2lbzMeFUEi6V6oS3DKzuhbBfHBg0Wbnlf4psqjcD0Dm5G0crr3JPV943i7E6FgcsiSoztChsypkbzf4NJD%2FCp8IvOjMoxrI%2F3ObHtp4fK%2B2r3&X-Amz-Signature=0525fb81c05743d93325f385bd3c9410a2758abf923ad2d177d9fcf08e959a34&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXLSZR6A%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm6CxP5ywaWdtaOzAfU2J%2BQF9sS4KJX5bRPkDDMBMkaAiAiM1bAUV2aFUwuGxaftJsQv298ndGp%2FUj2gjMmivv%2BHCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMXoh1ukKJOzWn7j3oKtwDGlZGZLFC3oRdPlaB7i3px3ds6nNDGdd1feyAL2ajAW2C8%2F8NCIUPCH2nl2sGW5yeB%2FEUh0E%2FvtW%2FMDrndg880bFAUCoNv3dEJZ109TSffRcNDEZlF4XVHNNvOP03K1eFy2zO%2BUyJResVKTdZ8N%2Fq%2BFQ%2BX4DODfLc%2FoO2WnrgbVslWfqXPyLzo9IoISRZ0kGEmmfy0pAln%2FwwDcc8K90o48pT9iDzkT1be3DUslOVv8qfKy%2BSIL6PtzR6Jd3xn1zOe%2BgQldhCCLCLoZ6D4QmRWHgH4N3j8dNIT9wL4T6esUrOiJMAIYI6DMsz5zbGkBOnx%2BTT4IlHAXUk7tesbSU3x9ijyIer18bAqn07dLdODx0h%2BpdjGqnSjFXmU5u%2F2I0P8frWZqEBk%2BeRn4HhWyrUT%2BHqtmyH9xLxv2T%2BKhk5MYeGebBNVaTFR3GtXy5pwRug1IdbDqztemKupmY4LR%2F2rEfopF3zVNPj1V8NgQPVZGHAXEtVrC0ABMLaIr0L%2BmHRk5GsFGysNvREa2UXr%2FIAoxkDbCjXNx2kKYxGTpKc%2F3Jmz4cGR9bXGHmx2fo2BbLLU4vXlUZQ3VsfJjHo6WamEsKvEs%2BDMcRWLqodoJSJFei1CA9Ib46sfNCHwfcwlvfnwAY6pgEPCnhL0GLrdLOVEgyqG7aB0zN8tfqWStL36z%2FNC4zcQYIhRe7VkAKt2DcwOMz1%2FOfXHUh%2FpTFATWjxLgZZcnLGybFOudKy0sbzM4VCNyq43Fe6fb%2F2lbzMeFUEi6V6oS3DKzuhbBfHBg0Wbnlf4psqjcD0Dm5G0crr3JPV943i7E6FgcsiSoztChsypkbzf4NJD%2FCp8IvOjMoxrI%2F3ObHtp4fK%2B2r3&X-Amz-Signature=d926b1b0fab431fc0ee0deb0c337d74eac54abe2d6133fb8342e90891bcfc0f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXLSZR6A%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm6CxP5ywaWdtaOzAfU2J%2BQF9sS4KJX5bRPkDDMBMkaAiAiM1bAUV2aFUwuGxaftJsQv298ndGp%2FUj2gjMmivv%2BHCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMXoh1ukKJOzWn7j3oKtwDGlZGZLFC3oRdPlaB7i3px3ds6nNDGdd1feyAL2ajAW2C8%2F8NCIUPCH2nl2sGW5yeB%2FEUh0E%2FvtW%2FMDrndg880bFAUCoNv3dEJZ109TSffRcNDEZlF4XVHNNvOP03K1eFy2zO%2BUyJResVKTdZ8N%2Fq%2BFQ%2BX4DODfLc%2FoO2WnrgbVslWfqXPyLzo9IoISRZ0kGEmmfy0pAln%2FwwDcc8K90o48pT9iDzkT1be3DUslOVv8qfKy%2BSIL6PtzR6Jd3xn1zOe%2BgQldhCCLCLoZ6D4QmRWHgH4N3j8dNIT9wL4T6esUrOiJMAIYI6DMsz5zbGkBOnx%2BTT4IlHAXUk7tesbSU3x9ijyIer18bAqn07dLdODx0h%2BpdjGqnSjFXmU5u%2F2I0P8frWZqEBk%2BeRn4HhWyrUT%2BHqtmyH9xLxv2T%2BKhk5MYeGebBNVaTFR3GtXy5pwRug1IdbDqztemKupmY4LR%2F2rEfopF3zVNPj1V8NgQPVZGHAXEtVrC0ABMLaIr0L%2BmHRk5GsFGysNvREa2UXr%2FIAoxkDbCjXNx2kKYxGTpKc%2F3Jmz4cGR9bXGHmx2fo2BbLLU4vXlUZQ3VsfJjHo6WamEsKvEs%2BDMcRWLqodoJSJFei1CA9Ib46sfNCHwfcwlvfnwAY6pgEPCnhL0GLrdLOVEgyqG7aB0zN8tfqWStL36z%2FNC4zcQYIhRe7VkAKt2DcwOMz1%2FOfXHUh%2FpTFATWjxLgZZcnLGybFOudKy0sbzM4VCNyq43Fe6fb%2F2lbzMeFUEi6V6oS3DKzuhbBfHBg0Wbnlf4psqjcD0Dm5G0crr3JPV943i7E6FgcsiSoztChsypkbzf4NJD%2FCp8IvOjMoxrI%2F3ObHtp4fK%2B2r3&X-Amz-Signature=ec07d4ed13bec0dc4c454c17b1f574aeff02d598740f612280d6afd092c83302&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXLSZR6A%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm6CxP5ywaWdtaOzAfU2J%2BQF9sS4KJX5bRPkDDMBMkaAiAiM1bAUV2aFUwuGxaftJsQv298ndGp%2FUj2gjMmivv%2BHCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMXoh1ukKJOzWn7j3oKtwDGlZGZLFC3oRdPlaB7i3px3ds6nNDGdd1feyAL2ajAW2C8%2F8NCIUPCH2nl2sGW5yeB%2FEUh0E%2FvtW%2FMDrndg880bFAUCoNv3dEJZ109TSffRcNDEZlF4XVHNNvOP03K1eFy2zO%2BUyJResVKTdZ8N%2Fq%2BFQ%2BX4DODfLc%2FoO2WnrgbVslWfqXPyLzo9IoISRZ0kGEmmfy0pAln%2FwwDcc8K90o48pT9iDzkT1be3DUslOVv8qfKy%2BSIL6PtzR6Jd3xn1zOe%2BgQldhCCLCLoZ6D4QmRWHgH4N3j8dNIT9wL4T6esUrOiJMAIYI6DMsz5zbGkBOnx%2BTT4IlHAXUk7tesbSU3x9ijyIer18bAqn07dLdODx0h%2BpdjGqnSjFXmU5u%2F2I0P8frWZqEBk%2BeRn4HhWyrUT%2BHqtmyH9xLxv2T%2BKhk5MYeGebBNVaTFR3GtXy5pwRug1IdbDqztemKupmY4LR%2F2rEfopF3zVNPj1V8NgQPVZGHAXEtVrC0ABMLaIr0L%2BmHRk5GsFGysNvREa2UXr%2FIAoxkDbCjXNx2kKYxGTpKc%2F3Jmz4cGR9bXGHmx2fo2BbLLU4vXlUZQ3VsfJjHo6WamEsKvEs%2BDMcRWLqodoJSJFei1CA9Ib46sfNCHwfcwlvfnwAY6pgEPCnhL0GLrdLOVEgyqG7aB0zN8tfqWStL36z%2FNC4zcQYIhRe7VkAKt2DcwOMz1%2FOfXHUh%2FpTFATWjxLgZZcnLGybFOudKy0sbzM4VCNyq43Fe6fb%2F2lbzMeFUEi6V6oS3DKzuhbBfHBg0Wbnlf4psqjcD0Dm5G0crr3JPV943i7E6FgcsiSoztChsypkbzf4NJD%2FCp8IvOjMoxrI%2F3ObHtp4fK%2B2r3&X-Amz-Signature=f8207e67516d3517e0f0cffa313248028c6d9bb41e1f46f0060b4ff4c78dba6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXLSZR6A%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm6CxP5ywaWdtaOzAfU2J%2BQF9sS4KJX5bRPkDDMBMkaAiAiM1bAUV2aFUwuGxaftJsQv298ndGp%2FUj2gjMmivv%2BHCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMXoh1ukKJOzWn7j3oKtwDGlZGZLFC3oRdPlaB7i3px3ds6nNDGdd1feyAL2ajAW2C8%2F8NCIUPCH2nl2sGW5yeB%2FEUh0E%2FvtW%2FMDrndg880bFAUCoNv3dEJZ109TSffRcNDEZlF4XVHNNvOP03K1eFy2zO%2BUyJResVKTdZ8N%2Fq%2BFQ%2BX4DODfLc%2FoO2WnrgbVslWfqXPyLzo9IoISRZ0kGEmmfy0pAln%2FwwDcc8K90o48pT9iDzkT1be3DUslOVv8qfKy%2BSIL6PtzR6Jd3xn1zOe%2BgQldhCCLCLoZ6D4QmRWHgH4N3j8dNIT9wL4T6esUrOiJMAIYI6DMsz5zbGkBOnx%2BTT4IlHAXUk7tesbSU3x9ijyIer18bAqn07dLdODx0h%2BpdjGqnSjFXmU5u%2F2I0P8frWZqEBk%2BeRn4HhWyrUT%2BHqtmyH9xLxv2T%2BKhk5MYeGebBNVaTFR3GtXy5pwRug1IdbDqztemKupmY4LR%2F2rEfopF3zVNPj1V8NgQPVZGHAXEtVrC0ABMLaIr0L%2BmHRk5GsFGysNvREa2UXr%2FIAoxkDbCjXNx2kKYxGTpKc%2F3Jmz4cGR9bXGHmx2fo2BbLLU4vXlUZQ3VsfJjHo6WamEsKvEs%2BDMcRWLqodoJSJFei1CA9Ib46sfNCHwfcwlvfnwAY6pgEPCnhL0GLrdLOVEgyqG7aB0zN8tfqWStL36z%2FNC4zcQYIhRe7VkAKt2DcwOMz1%2FOfXHUh%2FpTFATWjxLgZZcnLGybFOudKy0sbzM4VCNyq43Fe6fb%2F2lbzMeFUEi6V6oS3DKzuhbBfHBg0Wbnlf4psqjcD0Dm5G0crr3JPV943i7E6FgcsiSoztChsypkbzf4NJD%2FCp8IvOjMoxrI%2F3ObHtp4fK%2B2r3&X-Amz-Signature=2d41b6af3ccaf79dd2baf11314ddd8d6146f68cf828e80426566e06d3f175b39&X-Amz-SignedHeaders=host&x-id=GetObject)
