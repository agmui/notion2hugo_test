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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4CSZTC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQzIGiaXr%2B0ciF6J6uFS5fHINY4GIk7fBDuMSm9PfiuAiEAzk82ib7gzI6F2Iqo%2Fwni5zZ8z8rDpr2ntB6uaxU4x1gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKVeQRZazmQUpPjP0CrcAwtlB637jieqaJS1Yf5IFe1Dw%2BDABbBhsEaOo0S4hXLSEGnj2u6yx4SkOKHU0%2FUaP9gOhzlQwDZu%2BLd%2BVwb2amOMvjK%2FY7wwfgs7oSGVexDas3qZpa3lFLEL7%2FyboOtn%2FiUoGUyuDnF1mAmIZ2gqI4Q3wmnvjgntu31w%2BloLtLhtuuiVffYQ045zp4eZ0qU%2Bi073oyc2ETy6Yhfpz9XHo4TV5TPxbQGts4G69weiMVAzVhHcClzjtju8mO5VYvcQLNbSyqPeXU4FjWJ0sqzGE8qMRGesRLOTfcFKXxIAJWJrn5SkHv5nq542jlLR015yyQOuX9QSKNo9a%2Fg8qTSjeRPq5%2FspVVGajwCSaXvrwfbLNZCGHwCHHaZLBL7oPEsuCB3vm4bp%2FkCjFx1YDbEd9No9pEo%2F%2F3IT1BZOMUU68D8YZCIxFEahMu4utTNptltrgHiCWARuP1Dvtr9DVquM%2FHbGyq7rXZSGrTndfx5YQWfdwM7rjkZiNt9DUAlt12CfSWM2oGkZ0GK%2FQ9TYNnZz1W9BKiLcHmfIX1k%2Bt%2F18Gtx1tBU88tjxEU72exY9pXi6nyFGuGqUx39gylt%2FqwbWCIcpMn5wb0PzMC04Z4Vqgq9L2hrKsiRy1GJ7%2FBpmMLetgsAGOqUBuQFwS2ioqQYhc3KOyeELNWEGbslkWZZ5XN5N7MMQduz%2BmYinGGup6oamtsdvlQHhT4Ft2v7xjQBlirJo7nNIoFNWDWKvb2zEhzyNPILYTHMHczAeKWKs2qcqzGL2Nj6DjzDsIkpeeRSHcG8nBmInzJKeB3te4pCaUya8X2AxIwZoe2yz71XhFuN4%2Babxk8UCjqNxDXeAsyM0nShrFud4rZhdrbWY&X-Amz-Signature=fb75974feba4d2f5ddb8c330e57e3be4288c4195538bbe671b63229779ad0f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4CSZTC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQzIGiaXr%2B0ciF6J6uFS5fHINY4GIk7fBDuMSm9PfiuAiEAzk82ib7gzI6F2Iqo%2Fwni5zZ8z8rDpr2ntB6uaxU4x1gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKVeQRZazmQUpPjP0CrcAwtlB637jieqaJS1Yf5IFe1Dw%2BDABbBhsEaOo0S4hXLSEGnj2u6yx4SkOKHU0%2FUaP9gOhzlQwDZu%2BLd%2BVwb2amOMvjK%2FY7wwfgs7oSGVexDas3qZpa3lFLEL7%2FyboOtn%2FiUoGUyuDnF1mAmIZ2gqI4Q3wmnvjgntu31w%2BloLtLhtuuiVffYQ045zp4eZ0qU%2Bi073oyc2ETy6Yhfpz9XHo4TV5TPxbQGts4G69weiMVAzVhHcClzjtju8mO5VYvcQLNbSyqPeXU4FjWJ0sqzGE8qMRGesRLOTfcFKXxIAJWJrn5SkHv5nq542jlLR015yyQOuX9QSKNo9a%2Fg8qTSjeRPq5%2FspVVGajwCSaXvrwfbLNZCGHwCHHaZLBL7oPEsuCB3vm4bp%2FkCjFx1YDbEd9No9pEo%2F%2F3IT1BZOMUU68D8YZCIxFEahMu4utTNptltrgHiCWARuP1Dvtr9DVquM%2FHbGyq7rXZSGrTndfx5YQWfdwM7rjkZiNt9DUAlt12CfSWM2oGkZ0GK%2FQ9TYNnZz1W9BKiLcHmfIX1k%2Bt%2F18Gtx1tBU88tjxEU72exY9pXi6nyFGuGqUx39gylt%2FqwbWCIcpMn5wb0PzMC04Z4Vqgq9L2hrKsiRy1GJ7%2FBpmMLetgsAGOqUBuQFwS2ioqQYhc3KOyeELNWEGbslkWZZ5XN5N7MMQduz%2BmYinGGup6oamtsdvlQHhT4Ft2v7xjQBlirJo7nNIoFNWDWKvb2zEhzyNPILYTHMHczAeKWKs2qcqzGL2Nj6DjzDsIkpeeRSHcG8nBmInzJKeB3te4pCaUya8X2AxIwZoe2yz71XhFuN4%2Babxk8UCjqNxDXeAsyM0nShrFud4rZhdrbWY&X-Amz-Signature=b7c170800e66dc42a6b1c9a955a4cce6682f64e05c64894216a7623c5cecc35a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4CSZTC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQzIGiaXr%2B0ciF6J6uFS5fHINY4GIk7fBDuMSm9PfiuAiEAzk82ib7gzI6F2Iqo%2Fwni5zZ8z8rDpr2ntB6uaxU4x1gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKVeQRZazmQUpPjP0CrcAwtlB637jieqaJS1Yf5IFe1Dw%2BDABbBhsEaOo0S4hXLSEGnj2u6yx4SkOKHU0%2FUaP9gOhzlQwDZu%2BLd%2BVwb2amOMvjK%2FY7wwfgs7oSGVexDas3qZpa3lFLEL7%2FyboOtn%2FiUoGUyuDnF1mAmIZ2gqI4Q3wmnvjgntu31w%2BloLtLhtuuiVffYQ045zp4eZ0qU%2Bi073oyc2ETy6Yhfpz9XHo4TV5TPxbQGts4G69weiMVAzVhHcClzjtju8mO5VYvcQLNbSyqPeXU4FjWJ0sqzGE8qMRGesRLOTfcFKXxIAJWJrn5SkHv5nq542jlLR015yyQOuX9QSKNo9a%2Fg8qTSjeRPq5%2FspVVGajwCSaXvrwfbLNZCGHwCHHaZLBL7oPEsuCB3vm4bp%2FkCjFx1YDbEd9No9pEo%2F%2F3IT1BZOMUU68D8YZCIxFEahMu4utTNptltrgHiCWARuP1Dvtr9DVquM%2FHbGyq7rXZSGrTndfx5YQWfdwM7rjkZiNt9DUAlt12CfSWM2oGkZ0GK%2FQ9TYNnZz1W9BKiLcHmfIX1k%2Bt%2F18Gtx1tBU88tjxEU72exY9pXi6nyFGuGqUx39gylt%2FqwbWCIcpMn5wb0PzMC04Z4Vqgq9L2hrKsiRy1GJ7%2FBpmMLetgsAGOqUBuQFwS2ioqQYhc3KOyeELNWEGbslkWZZ5XN5N7MMQduz%2BmYinGGup6oamtsdvlQHhT4Ft2v7xjQBlirJo7nNIoFNWDWKvb2zEhzyNPILYTHMHczAeKWKs2qcqzGL2Nj6DjzDsIkpeeRSHcG8nBmInzJKeB3te4pCaUya8X2AxIwZoe2yz71XhFuN4%2Babxk8UCjqNxDXeAsyM0nShrFud4rZhdrbWY&X-Amz-Signature=b2befc68cfaf70936ab026c624f4d0ad926990355945c2b22663a90781014175&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4CSZTC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQzIGiaXr%2B0ciF6J6uFS5fHINY4GIk7fBDuMSm9PfiuAiEAzk82ib7gzI6F2Iqo%2Fwni5zZ8z8rDpr2ntB6uaxU4x1gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKVeQRZazmQUpPjP0CrcAwtlB637jieqaJS1Yf5IFe1Dw%2BDABbBhsEaOo0S4hXLSEGnj2u6yx4SkOKHU0%2FUaP9gOhzlQwDZu%2BLd%2BVwb2amOMvjK%2FY7wwfgs7oSGVexDas3qZpa3lFLEL7%2FyboOtn%2FiUoGUyuDnF1mAmIZ2gqI4Q3wmnvjgntu31w%2BloLtLhtuuiVffYQ045zp4eZ0qU%2Bi073oyc2ETy6Yhfpz9XHo4TV5TPxbQGts4G69weiMVAzVhHcClzjtju8mO5VYvcQLNbSyqPeXU4FjWJ0sqzGE8qMRGesRLOTfcFKXxIAJWJrn5SkHv5nq542jlLR015yyQOuX9QSKNo9a%2Fg8qTSjeRPq5%2FspVVGajwCSaXvrwfbLNZCGHwCHHaZLBL7oPEsuCB3vm4bp%2FkCjFx1YDbEd9No9pEo%2F%2F3IT1BZOMUU68D8YZCIxFEahMu4utTNptltrgHiCWARuP1Dvtr9DVquM%2FHbGyq7rXZSGrTndfx5YQWfdwM7rjkZiNt9DUAlt12CfSWM2oGkZ0GK%2FQ9TYNnZz1W9BKiLcHmfIX1k%2Bt%2F18Gtx1tBU88tjxEU72exY9pXi6nyFGuGqUx39gylt%2FqwbWCIcpMn5wb0PzMC04Z4Vqgq9L2hrKsiRy1GJ7%2FBpmMLetgsAGOqUBuQFwS2ioqQYhc3KOyeELNWEGbslkWZZ5XN5N7MMQduz%2BmYinGGup6oamtsdvlQHhT4Ft2v7xjQBlirJo7nNIoFNWDWKvb2zEhzyNPILYTHMHczAeKWKs2qcqzGL2Nj6DjzDsIkpeeRSHcG8nBmInzJKeB3te4pCaUya8X2AxIwZoe2yz71XhFuN4%2Babxk8UCjqNxDXeAsyM0nShrFud4rZhdrbWY&X-Amz-Signature=66c0623945980f65d5aa0aeb3e0d762699194239c8806b0be8d0dc76e1cfd6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4CSZTC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQzIGiaXr%2B0ciF6J6uFS5fHINY4GIk7fBDuMSm9PfiuAiEAzk82ib7gzI6F2Iqo%2Fwni5zZ8z8rDpr2ntB6uaxU4x1gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKVeQRZazmQUpPjP0CrcAwtlB637jieqaJS1Yf5IFe1Dw%2BDABbBhsEaOo0S4hXLSEGnj2u6yx4SkOKHU0%2FUaP9gOhzlQwDZu%2BLd%2BVwb2amOMvjK%2FY7wwfgs7oSGVexDas3qZpa3lFLEL7%2FyboOtn%2FiUoGUyuDnF1mAmIZ2gqI4Q3wmnvjgntu31w%2BloLtLhtuuiVffYQ045zp4eZ0qU%2Bi073oyc2ETy6Yhfpz9XHo4TV5TPxbQGts4G69weiMVAzVhHcClzjtju8mO5VYvcQLNbSyqPeXU4FjWJ0sqzGE8qMRGesRLOTfcFKXxIAJWJrn5SkHv5nq542jlLR015yyQOuX9QSKNo9a%2Fg8qTSjeRPq5%2FspVVGajwCSaXvrwfbLNZCGHwCHHaZLBL7oPEsuCB3vm4bp%2FkCjFx1YDbEd9No9pEo%2F%2F3IT1BZOMUU68D8YZCIxFEahMu4utTNptltrgHiCWARuP1Dvtr9DVquM%2FHbGyq7rXZSGrTndfx5YQWfdwM7rjkZiNt9DUAlt12CfSWM2oGkZ0GK%2FQ9TYNnZz1W9BKiLcHmfIX1k%2Bt%2F18Gtx1tBU88tjxEU72exY9pXi6nyFGuGqUx39gylt%2FqwbWCIcpMn5wb0PzMC04Z4Vqgq9L2hrKsiRy1GJ7%2FBpmMLetgsAGOqUBuQFwS2ioqQYhc3KOyeELNWEGbslkWZZ5XN5N7MMQduz%2BmYinGGup6oamtsdvlQHhT4Ft2v7xjQBlirJo7nNIoFNWDWKvb2zEhzyNPILYTHMHczAeKWKs2qcqzGL2Nj6DjzDsIkpeeRSHcG8nBmInzJKeB3te4pCaUya8X2AxIwZoe2yz71XhFuN4%2Babxk8UCjqNxDXeAsyM0nShrFud4rZhdrbWY&X-Amz-Signature=a4935e5b5cbfd1d305a220441853ad1711a89563e16b4f53b2d70c6ff0252418&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4CSZTC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQzIGiaXr%2B0ciF6J6uFS5fHINY4GIk7fBDuMSm9PfiuAiEAzk82ib7gzI6F2Iqo%2Fwni5zZ8z8rDpr2ntB6uaxU4x1gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKVeQRZazmQUpPjP0CrcAwtlB637jieqaJS1Yf5IFe1Dw%2BDABbBhsEaOo0S4hXLSEGnj2u6yx4SkOKHU0%2FUaP9gOhzlQwDZu%2BLd%2BVwb2amOMvjK%2FY7wwfgs7oSGVexDas3qZpa3lFLEL7%2FyboOtn%2FiUoGUyuDnF1mAmIZ2gqI4Q3wmnvjgntu31w%2BloLtLhtuuiVffYQ045zp4eZ0qU%2Bi073oyc2ETy6Yhfpz9XHo4TV5TPxbQGts4G69weiMVAzVhHcClzjtju8mO5VYvcQLNbSyqPeXU4FjWJ0sqzGE8qMRGesRLOTfcFKXxIAJWJrn5SkHv5nq542jlLR015yyQOuX9QSKNo9a%2Fg8qTSjeRPq5%2FspVVGajwCSaXvrwfbLNZCGHwCHHaZLBL7oPEsuCB3vm4bp%2FkCjFx1YDbEd9No9pEo%2F%2F3IT1BZOMUU68D8YZCIxFEahMu4utTNptltrgHiCWARuP1Dvtr9DVquM%2FHbGyq7rXZSGrTndfx5YQWfdwM7rjkZiNt9DUAlt12CfSWM2oGkZ0GK%2FQ9TYNnZz1W9BKiLcHmfIX1k%2Bt%2F18Gtx1tBU88tjxEU72exY9pXi6nyFGuGqUx39gylt%2FqwbWCIcpMn5wb0PzMC04Z4Vqgq9L2hrKsiRy1GJ7%2FBpmMLetgsAGOqUBuQFwS2ioqQYhc3KOyeELNWEGbslkWZZ5XN5N7MMQduz%2BmYinGGup6oamtsdvlQHhT4Ft2v7xjQBlirJo7nNIoFNWDWKvb2zEhzyNPILYTHMHczAeKWKs2qcqzGL2Nj6DjzDsIkpeeRSHcG8nBmInzJKeB3te4pCaUya8X2AxIwZoe2yz71XhFuN4%2Babxk8UCjqNxDXeAsyM0nShrFud4rZhdrbWY&X-Amz-Signature=974b1f3e84d11923940689b120da7c8774991add438e2069132b82caae607c94&X-Amz-SignedHeaders=host&x-id=GetObject)
