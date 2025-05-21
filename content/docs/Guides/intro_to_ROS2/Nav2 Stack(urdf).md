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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4TO34M%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3f5t75Soq322n4CvOxKscwg6E0qnWe%2BPUFsCIqS4SCAIgfd7jqzhgyY4DnTf6zMiT%2FF4FiE3XPjfBPKcH7f65LqkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGaYucwaqYKR34JDSrcA1kpK7%2BI3f4SF9PwcTFYbfiACxGWFe99FzdXECoV7aduAhiKGT8i7TZk6SDZW4%2Bo4rQ4xn9BhTeYjtWxTnJk9%2BBY6OSlogKSA31cE7QQD8FnJpIm90FMujA1ACeCZUWf5DcIxtrwDPCmutmDm6xf3P9MBqZop99vEhoogl1n%2F176FGe6Q9KN%2FoM9A5olZq0JBFs8i81Pz3C1%2Fuqrn3JjBN7oIZhT5fcAYfNoXYuQv%2BJpEqFQSH1se4Uyio9p7k31zWHAiquweK835CfO%2BNFwrekTbaDqyyxNv4cAU3Mm8FW%2B9MAWr67LTq%2FGTocXMIIbxnGmOIUbRGRwMSgyQdCulbYRskKwPRV3JQzMWHhNZvAnsIoL5G67BNvlvr3lo%2FZR9PKHPZHho4JPTRekNwBcRkttuMU6vh6DWoF2CHbXMDSeCpx21P%2Bio74gezJwaFwDtRUPdC%2FmDgKco6n%2BZoa%2FuMRmSAJSnhgb5aJHIiWRbs1G%2Bnj%2Be6y8CgjhJa%2BQvUW8OTdTdSu7ELf3eF5x2kmTgyevxWHBP29KtXCRlyXFB6fn3FmqNu%2FgpK5v7bDM%2F4RkwXaLOqQMB5T3gqH1wlfufu%2F1YooTkmqwJ3on7a%2FzQqyoF9wkbqiZHJF03CyQMOKiuMEGOqUBZuQZjmXbvY5XO4tYa5BynyVip2IfTh6hfFvr4LAobX0v3sGymNV0CT1U7pkuXzjkLsA8%2By3AERkLwpndsaNwYWXyOKBNz7NWFbWnF6MBZBTPdtHBBDpoEcaRBdKxW5IMTN5pqSjXiIlAhkte2D%2F1ysh4GWflggv51Xh6WF1lvW8YIHGYLbj2S7Z%2FYZVcOh8uG2WhWbhCGsZ%2BndeoSs9ytPcEikgN&X-Amz-Signature=129340319cf9a853c8315effb34f2d9c26d79a5245ead179ef70bbc5054afc9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4TO34M%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3f5t75Soq322n4CvOxKscwg6E0qnWe%2BPUFsCIqS4SCAIgfd7jqzhgyY4DnTf6zMiT%2FF4FiE3XPjfBPKcH7f65LqkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGaYucwaqYKR34JDSrcA1kpK7%2BI3f4SF9PwcTFYbfiACxGWFe99FzdXECoV7aduAhiKGT8i7TZk6SDZW4%2Bo4rQ4xn9BhTeYjtWxTnJk9%2BBY6OSlogKSA31cE7QQD8FnJpIm90FMujA1ACeCZUWf5DcIxtrwDPCmutmDm6xf3P9MBqZop99vEhoogl1n%2F176FGe6Q9KN%2FoM9A5olZq0JBFs8i81Pz3C1%2Fuqrn3JjBN7oIZhT5fcAYfNoXYuQv%2BJpEqFQSH1se4Uyio9p7k31zWHAiquweK835CfO%2BNFwrekTbaDqyyxNv4cAU3Mm8FW%2B9MAWr67LTq%2FGTocXMIIbxnGmOIUbRGRwMSgyQdCulbYRskKwPRV3JQzMWHhNZvAnsIoL5G67BNvlvr3lo%2FZR9PKHPZHho4JPTRekNwBcRkttuMU6vh6DWoF2CHbXMDSeCpx21P%2Bio74gezJwaFwDtRUPdC%2FmDgKco6n%2BZoa%2FuMRmSAJSnhgb5aJHIiWRbs1G%2Bnj%2Be6y8CgjhJa%2BQvUW8OTdTdSu7ELf3eF5x2kmTgyevxWHBP29KtXCRlyXFB6fn3FmqNu%2FgpK5v7bDM%2F4RkwXaLOqQMB5T3gqH1wlfufu%2F1YooTkmqwJ3on7a%2FzQqyoF9wkbqiZHJF03CyQMOKiuMEGOqUBZuQZjmXbvY5XO4tYa5BynyVip2IfTh6hfFvr4LAobX0v3sGymNV0CT1U7pkuXzjkLsA8%2By3AERkLwpndsaNwYWXyOKBNz7NWFbWnF6MBZBTPdtHBBDpoEcaRBdKxW5IMTN5pqSjXiIlAhkte2D%2F1ysh4GWflggv51Xh6WF1lvW8YIHGYLbj2S7Z%2FYZVcOh8uG2WhWbhCGsZ%2BndeoSs9ytPcEikgN&X-Amz-Signature=49b27a41d4a984988eda593a1125c244eb8bd37cbee4e9f932884134b34ec53a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4TO34M%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3f5t75Soq322n4CvOxKscwg6E0qnWe%2BPUFsCIqS4SCAIgfd7jqzhgyY4DnTf6zMiT%2FF4FiE3XPjfBPKcH7f65LqkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGaYucwaqYKR34JDSrcA1kpK7%2BI3f4SF9PwcTFYbfiACxGWFe99FzdXECoV7aduAhiKGT8i7TZk6SDZW4%2Bo4rQ4xn9BhTeYjtWxTnJk9%2BBY6OSlogKSA31cE7QQD8FnJpIm90FMujA1ACeCZUWf5DcIxtrwDPCmutmDm6xf3P9MBqZop99vEhoogl1n%2F176FGe6Q9KN%2FoM9A5olZq0JBFs8i81Pz3C1%2Fuqrn3JjBN7oIZhT5fcAYfNoXYuQv%2BJpEqFQSH1se4Uyio9p7k31zWHAiquweK835CfO%2BNFwrekTbaDqyyxNv4cAU3Mm8FW%2B9MAWr67LTq%2FGTocXMIIbxnGmOIUbRGRwMSgyQdCulbYRskKwPRV3JQzMWHhNZvAnsIoL5G67BNvlvr3lo%2FZR9PKHPZHho4JPTRekNwBcRkttuMU6vh6DWoF2CHbXMDSeCpx21P%2Bio74gezJwaFwDtRUPdC%2FmDgKco6n%2BZoa%2FuMRmSAJSnhgb5aJHIiWRbs1G%2Bnj%2Be6y8CgjhJa%2BQvUW8OTdTdSu7ELf3eF5x2kmTgyevxWHBP29KtXCRlyXFB6fn3FmqNu%2FgpK5v7bDM%2F4RkwXaLOqQMB5T3gqH1wlfufu%2F1YooTkmqwJ3on7a%2FzQqyoF9wkbqiZHJF03CyQMOKiuMEGOqUBZuQZjmXbvY5XO4tYa5BynyVip2IfTh6hfFvr4LAobX0v3sGymNV0CT1U7pkuXzjkLsA8%2By3AERkLwpndsaNwYWXyOKBNz7NWFbWnF6MBZBTPdtHBBDpoEcaRBdKxW5IMTN5pqSjXiIlAhkte2D%2F1ysh4GWflggv51Xh6WF1lvW8YIHGYLbj2S7Z%2FYZVcOh8uG2WhWbhCGsZ%2BndeoSs9ytPcEikgN&X-Amz-Signature=b33cf09ca5521f5d8d08c1a37a9680f35aee361f09d6d8ef55a6b0416fde5992&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4TO34M%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3f5t75Soq322n4CvOxKscwg6E0qnWe%2BPUFsCIqS4SCAIgfd7jqzhgyY4DnTf6zMiT%2FF4FiE3XPjfBPKcH7f65LqkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGaYucwaqYKR34JDSrcA1kpK7%2BI3f4SF9PwcTFYbfiACxGWFe99FzdXECoV7aduAhiKGT8i7TZk6SDZW4%2Bo4rQ4xn9BhTeYjtWxTnJk9%2BBY6OSlogKSA31cE7QQD8FnJpIm90FMujA1ACeCZUWf5DcIxtrwDPCmutmDm6xf3P9MBqZop99vEhoogl1n%2F176FGe6Q9KN%2FoM9A5olZq0JBFs8i81Pz3C1%2Fuqrn3JjBN7oIZhT5fcAYfNoXYuQv%2BJpEqFQSH1se4Uyio9p7k31zWHAiquweK835CfO%2BNFwrekTbaDqyyxNv4cAU3Mm8FW%2B9MAWr67LTq%2FGTocXMIIbxnGmOIUbRGRwMSgyQdCulbYRskKwPRV3JQzMWHhNZvAnsIoL5G67BNvlvr3lo%2FZR9PKHPZHho4JPTRekNwBcRkttuMU6vh6DWoF2CHbXMDSeCpx21P%2Bio74gezJwaFwDtRUPdC%2FmDgKco6n%2BZoa%2FuMRmSAJSnhgb5aJHIiWRbs1G%2Bnj%2Be6y8CgjhJa%2BQvUW8OTdTdSu7ELf3eF5x2kmTgyevxWHBP29KtXCRlyXFB6fn3FmqNu%2FgpK5v7bDM%2F4RkwXaLOqQMB5T3gqH1wlfufu%2F1YooTkmqwJ3on7a%2FzQqyoF9wkbqiZHJF03CyQMOKiuMEGOqUBZuQZjmXbvY5XO4tYa5BynyVip2IfTh6hfFvr4LAobX0v3sGymNV0CT1U7pkuXzjkLsA8%2By3AERkLwpndsaNwYWXyOKBNz7NWFbWnF6MBZBTPdtHBBDpoEcaRBdKxW5IMTN5pqSjXiIlAhkte2D%2F1ysh4GWflggv51Xh6WF1lvW8YIHGYLbj2S7Z%2FYZVcOh8uG2WhWbhCGsZ%2BndeoSs9ytPcEikgN&X-Amz-Signature=14628fe3d0f177db197744d7e8d8aeb804b3487142c64c6a69e9cc5183336bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4TO34M%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3f5t75Soq322n4CvOxKscwg6E0qnWe%2BPUFsCIqS4SCAIgfd7jqzhgyY4DnTf6zMiT%2FF4FiE3XPjfBPKcH7f65LqkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGaYucwaqYKR34JDSrcA1kpK7%2BI3f4SF9PwcTFYbfiACxGWFe99FzdXECoV7aduAhiKGT8i7TZk6SDZW4%2Bo4rQ4xn9BhTeYjtWxTnJk9%2BBY6OSlogKSA31cE7QQD8FnJpIm90FMujA1ACeCZUWf5DcIxtrwDPCmutmDm6xf3P9MBqZop99vEhoogl1n%2F176FGe6Q9KN%2FoM9A5olZq0JBFs8i81Pz3C1%2Fuqrn3JjBN7oIZhT5fcAYfNoXYuQv%2BJpEqFQSH1se4Uyio9p7k31zWHAiquweK835CfO%2BNFwrekTbaDqyyxNv4cAU3Mm8FW%2B9MAWr67LTq%2FGTocXMIIbxnGmOIUbRGRwMSgyQdCulbYRskKwPRV3JQzMWHhNZvAnsIoL5G67BNvlvr3lo%2FZR9PKHPZHho4JPTRekNwBcRkttuMU6vh6DWoF2CHbXMDSeCpx21P%2Bio74gezJwaFwDtRUPdC%2FmDgKco6n%2BZoa%2FuMRmSAJSnhgb5aJHIiWRbs1G%2Bnj%2Be6y8CgjhJa%2BQvUW8OTdTdSu7ELf3eF5x2kmTgyevxWHBP29KtXCRlyXFB6fn3FmqNu%2FgpK5v7bDM%2F4RkwXaLOqQMB5T3gqH1wlfufu%2F1YooTkmqwJ3on7a%2FzQqyoF9wkbqiZHJF03CyQMOKiuMEGOqUBZuQZjmXbvY5XO4tYa5BynyVip2IfTh6hfFvr4LAobX0v3sGymNV0CT1U7pkuXzjkLsA8%2By3AERkLwpndsaNwYWXyOKBNz7NWFbWnF6MBZBTPdtHBBDpoEcaRBdKxW5IMTN5pqSjXiIlAhkte2D%2F1ysh4GWflggv51Xh6WF1lvW8YIHGYLbj2S7Z%2FYZVcOh8uG2WhWbhCGsZ%2BndeoSs9ytPcEikgN&X-Amz-Signature=0cbe73c3a058cb3187711b4b84d5daf8511dd038666780560dc3d5177eb640cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4TO34M%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD3f5t75Soq322n4CvOxKscwg6E0qnWe%2BPUFsCIqS4SCAIgfd7jqzhgyY4DnTf6zMiT%2FF4FiE3XPjfBPKcH7f65LqkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGaYucwaqYKR34JDSrcA1kpK7%2BI3f4SF9PwcTFYbfiACxGWFe99FzdXECoV7aduAhiKGT8i7TZk6SDZW4%2Bo4rQ4xn9BhTeYjtWxTnJk9%2BBY6OSlogKSA31cE7QQD8FnJpIm90FMujA1ACeCZUWf5DcIxtrwDPCmutmDm6xf3P9MBqZop99vEhoogl1n%2F176FGe6Q9KN%2FoM9A5olZq0JBFs8i81Pz3C1%2Fuqrn3JjBN7oIZhT5fcAYfNoXYuQv%2BJpEqFQSH1se4Uyio9p7k31zWHAiquweK835CfO%2BNFwrekTbaDqyyxNv4cAU3Mm8FW%2B9MAWr67LTq%2FGTocXMIIbxnGmOIUbRGRwMSgyQdCulbYRskKwPRV3JQzMWHhNZvAnsIoL5G67BNvlvr3lo%2FZR9PKHPZHho4JPTRekNwBcRkttuMU6vh6DWoF2CHbXMDSeCpx21P%2Bio74gezJwaFwDtRUPdC%2FmDgKco6n%2BZoa%2FuMRmSAJSnhgb5aJHIiWRbs1G%2Bnj%2Be6y8CgjhJa%2BQvUW8OTdTdSu7ELf3eF5x2kmTgyevxWHBP29KtXCRlyXFB6fn3FmqNu%2FgpK5v7bDM%2F4RkwXaLOqQMB5T3gqH1wlfufu%2F1YooTkmqwJ3on7a%2FzQqyoF9wkbqiZHJF03CyQMOKiuMEGOqUBZuQZjmXbvY5XO4tYa5BynyVip2IfTh6hfFvr4LAobX0v3sGymNV0CT1U7pkuXzjkLsA8%2By3AERkLwpndsaNwYWXyOKBNz7NWFbWnF6MBZBTPdtHBBDpoEcaRBdKxW5IMTN5pqSjXiIlAhkte2D%2F1ysh4GWflggv51Xh6WF1lvW8YIHGYLbj2S7Z%2FYZVcOh8uG2WhWbhCGsZ%2BndeoSs9ytPcEikgN&X-Amz-Signature=f243e56b8efb5f79e68a442278c1971e8914dee867d1f97b1f772adb693edfc1&X-Amz-SignedHeaders=host&x-id=GetObject)
