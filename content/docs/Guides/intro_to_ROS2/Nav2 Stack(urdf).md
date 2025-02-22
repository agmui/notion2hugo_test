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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYSIEGP5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiSEswPbvSetMMCg1zVg%2B2SnBFPVUl6KQpBnQ04O%2B6hgIhAK1sMY1p8zTFh5pGs6oOp4yzRokc7iCCuTHdKd0g2AoOKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6AD8JJq55N2l6lOQq3AOcUF626NP%2B2NFii526MisAV3HbzjgSvdu2oBDY0Jt7XgQuNuF8oZ%2FlyBL7bCMWwMcjjbKUQAgHULBkIn63egChUcj5TBBkXhJfMsyuA%2F7zzSYIevBId2cQ1YurxxphDPAofGA2PrEuP1sLBWbCQy5%2FlLnqAt0YWpq9kFR3f6xMGR0TyvwSJH0izw5OSVXj%2F46EB176coCj%2Fa5riDSqrxTWTXeUzekwXGtQomTy2NFdeTPKpr76PnMWQRUhV%2ByCGZ%2B4t7svkr%2BvDAB0LE3nS%2Fd64DpNfUbU3SCC9vGXH4MMo%2F36IKn%2FfLRcXQCzFUN%2FUhXFS1O2kpi%2B6s2ayhHuJQk1tRE%2B9oMGAcIqHcsc0Pg7ZVyi%2Fxyg%2FXXFq%2BMxbRLeCOdb%2FXEdYnCqgimT0TkADkQzUDLe1HaaSzbV%2FCaNVHPyjX6O2UlTR9V9wpt6v9P3lXUq%2BLltb5mkPzDynyPBKs1eXWNIMjqWAyHKRxKBq%2FxBaxXf%2F2m1ImRoRdwANQ%2FRm2lA8%2FbMunDp2DR1cMfC3RS7CVPOtJxNV4s1FGWwbCH%2FexzYB2IpHFRR9ZkFKRpN8tAvbCJMt07IflGNYN0ZeW3bzV44SU39j8wtjLxjXXIWiaAwpgNfGQfcr4j1aTD1p%2Bi9BjqkARcNRZIdUCKc13KJ4wFnUmO6VZmS8R6w2caY3ARynMyMQHHj02Cx7lTKhVWA%2FWdSAJsIBOwXiKC%2B8FoCGfe6o3j3o%2FWa7FbcyD3WX9hWEC0kVvVNeqc704a6qDp7o7sAyRgL0x8dM4WSXl1EJdzAcq7QGD%2F9YZv%2FC1JssIKf%2FvgEzA3VX5JwhP3CbsS2If4rESiOK1FFf0jobNLeiDXcuj4j9DrG&X-Amz-Signature=5d0bb521fca14abdd191872bbb0f8a459e03f9c8c5c31d5013aca151a3c3f490&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYSIEGP5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiSEswPbvSetMMCg1zVg%2B2SnBFPVUl6KQpBnQ04O%2B6hgIhAK1sMY1p8zTFh5pGs6oOp4yzRokc7iCCuTHdKd0g2AoOKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6AD8JJq55N2l6lOQq3AOcUF626NP%2B2NFii526MisAV3HbzjgSvdu2oBDY0Jt7XgQuNuF8oZ%2FlyBL7bCMWwMcjjbKUQAgHULBkIn63egChUcj5TBBkXhJfMsyuA%2F7zzSYIevBId2cQ1YurxxphDPAofGA2PrEuP1sLBWbCQy5%2FlLnqAt0YWpq9kFR3f6xMGR0TyvwSJH0izw5OSVXj%2F46EB176coCj%2Fa5riDSqrxTWTXeUzekwXGtQomTy2NFdeTPKpr76PnMWQRUhV%2ByCGZ%2B4t7svkr%2BvDAB0LE3nS%2Fd64DpNfUbU3SCC9vGXH4MMo%2F36IKn%2FfLRcXQCzFUN%2FUhXFS1O2kpi%2B6s2ayhHuJQk1tRE%2B9oMGAcIqHcsc0Pg7ZVyi%2Fxyg%2FXXFq%2BMxbRLeCOdb%2FXEdYnCqgimT0TkADkQzUDLe1HaaSzbV%2FCaNVHPyjX6O2UlTR9V9wpt6v9P3lXUq%2BLltb5mkPzDynyPBKs1eXWNIMjqWAyHKRxKBq%2FxBaxXf%2F2m1ImRoRdwANQ%2FRm2lA8%2FbMunDp2DR1cMfC3RS7CVPOtJxNV4s1FGWwbCH%2FexzYB2IpHFRR9ZkFKRpN8tAvbCJMt07IflGNYN0ZeW3bzV44SU39j8wtjLxjXXIWiaAwpgNfGQfcr4j1aTD1p%2Bi9BjqkARcNRZIdUCKc13KJ4wFnUmO6VZmS8R6w2caY3ARynMyMQHHj02Cx7lTKhVWA%2FWdSAJsIBOwXiKC%2B8FoCGfe6o3j3o%2FWa7FbcyD3WX9hWEC0kVvVNeqc704a6qDp7o7sAyRgL0x8dM4WSXl1EJdzAcq7QGD%2F9YZv%2FC1JssIKf%2FvgEzA3VX5JwhP3CbsS2If4rESiOK1FFf0jobNLeiDXcuj4j9DrG&X-Amz-Signature=e1145cf40acc5cd933939285cdf3e2788456c79a714cc0ee09b1b715c77cd952&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYSIEGP5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiSEswPbvSetMMCg1zVg%2B2SnBFPVUl6KQpBnQ04O%2B6hgIhAK1sMY1p8zTFh5pGs6oOp4yzRokc7iCCuTHdKd0g2AoOKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6AD8JJq55N2l6lOQq3AOcUF626NP%2B2NFii526MisAV3HbzjgSvdu2oBDY0Jt7XgQuNuF8oZ%2FlyBL7bCMWwMcjjbKUQAgHULBkIn63egChUcj5TBBkXhJfMsyuA%2F7zzSYIevBId2cQ1YurxxphDPAofGA2PrEuP1sLBWbCQy5%2FlLnqAt0YWpq9kFR3f6xMGR0TyvwSJH0izw5OSVXj%2F46EB176coCj%2Fa5riDSqrxTWTXeUzekwXGtQomTy2NFdeTPKpr76PnMWQRUhV%2ByCGZ%2B4t7svkr%2BvDAB0LE3nS%2Fd64DpNfUbU3SCC9vGXH4MMo%2F36IKn%2FfLRcXQCzFUN%2FUhXFS1O2kpi%2B6s2ayhHuJQk1tRE%2B9oMGAcIqHcsc0Pg7ZVyi%2Fxyg%2FXXFq%2BMxbRLeCOdb%2FXEdYnCqgimT0TkADkQzUDLe1HaaSzbV%2FCaNVHPyjX6O2UlTR9V9wpt6v9P3lXUq%2BLltb5mkPzDynyPBKs1eXWNIMjqWAyHKRxKBq%2FxBaxXf%2F2m1ImRoRdwANQ%2FRm2lA8%2FbMunDp2DR1cMfC3RS7CVPOtJxNV4s1FGWwbCH%2FexzYB2IpHFRR9ZkFKRpN8tAvbCJMt07IflGNYN0ZeW3bzV44SU39j8wtjLxjXXIWiaAwpgNfGQfcr4j1aTD1p%2Bi9BjqkARcNRZIdUCKc13KJ4wFnUmO6VZmS8R6w2caY3ARynMyMQHHj02Cx7lTKhVWA%2FWdSAJsIBOwXiKC%2B8FoCGfe6o3j3o%2FWa7FbcyD3WX9hWEC0kVvVNeqc704a6qDp7o7sAyRgL0x8dM4WSXl1EJdzAcq7QGD%2F9YZv%2FC1JssIKf%2FvgEzA3VX5JwhP3CbsS2If4rESiOK1FFf0jobNLeiDXcuj4j9DrG&X-Amz-Signature=5fe4b885d1f05012b37a2e0de9128677041976a41194fcb726c7084b5159a4c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYSIEGP5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiSEswPbvSetMMCg1zVg%2B2SnBFPVUl6KQpBnQ04O%2B6hgIhAK1sMY1p8zTFh5pGs6oOp4yzRokc7iCCuTHdKd0g2AoOKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6AD8JJq55N2l6lOQq3AOcUF626NP%2B2NFii526MisAV3HbzjgSvdu2oBDY0Jt7XgQuNuF8oZ%2FlyBL7bCMWwMcjjbKUQAgHULBkIn63egChUcj5TBBkXhJfMsyuA%2F7zzSYIevBId2cQ1YurxxphDPAofGA2PrEuP1sLBWbCQy5%2FlLnqAt0YWpq9kFR3f6xMGR0TyvwSJH0izw5OSVXj%2F46EB176coCj%2Fa5riDSqrxTWTXeUzekwXGtQomTy2NFdeTPKpr76PnMWQRUhV%2ByCGZ%2B4t7svkr%2BvDAB0LE3nS%2Fd64DpNfUbU3SCC9vGXH4MMo%2F36IKn%2FfLRcXQCzFUN%2FUhXFS1O2kpi%2B6s2ayhHuJQk1tRE%2B9oMGAcIqHcsc0Pg7ZVyi%2Fxyg%2FXXFq%2BMxbRLeCOdb%2FXEdYnCqgimT0TkADkQzUDLe1HaaSzbV%2FCaNVHPyjX6O2UlTR9V9wpt6v9P3lXUq%2BLltb5mkPzDynyPBKs1eXWNIMjqWAyHKRxKBq%2FxBaxXf%2F2m1ImRoRdwANQ%2FRm2lA8%2FbMunDp2DR1cMfC3RS7CVPOtJxNV4s1FGWwbCH%2FexzYB2IpHFRR9ZkFKRpN8tAvbCJMt07IflGNYN0ZeW3bzV44SU39j8wtjLxjXXIWiaAwpgNfGQfcr4j1aTD1p%2Bi9BjqkARcNRZIdUCKc13KJ4wFnUmO6VZmS8R6w2caY3ARynMyMQHHj02Cx7lTKhVWA%2FWdSAJsIBOwXiKC%2B8FoCGfe6o3j3o%2FWa7FbcyD3WX9hWEC0kVvVNeqc704a6qDp7o7sAyRgL0x8dM4WSXl1EJdzAcq7QGD%2F9YZv%2FC1JssIKf%2FvgEzA3VX5JwhP3CbsS2If4rESiOK1FFf0jobNLeiDXcuj4j9DrG&X-Amz-Signature=47626f99f4acbee5b6d2dd05e6fe82f71e5f88dc6de42727b86d16de3d556c70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYSIEGP5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiSEswPbvSetMMCg1zVg%2B2SnBFPVUl6KQpBnQ04O%2B6hgIhAK1sMY1p8zTFh5pGs6oOp4yzRokc7iCCuTHdKd0g2AoOKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6AD8JJq55N2l6lOQq3AOcUF626NP%2B2NFii526MisAV3HbzjgSvdu2oBDY0Jt7XgQuNuF8oZ%2FlyBL7bCMWwMcjjbKUQAgHULBkIn63egChUcj5TBBkXhJfMsyuA%2F7zzSYIevBId2cQ1YurxxphDPAofGA2PrEuP1sLBWbCQy5%2FlLnqAt0YWpq9kFR3f6xMGR0TyvwSJH0izw5OSVXj%2F46EB176coCj%2Fa5riDSqrxTWTXeUzekwXGtQomTy2NFdeTPKpr76PnMWQRUhV%2ByCGZ%2B4t7svkr%2BvDAB0LE3nS%2Fd64DpNfUbU3SCC9vGXH4MMo%2F36IKn%2FfLRcXQCzFUN%2FUhXFS1O2kpi%2B6s2ayhHuJQk1tRE%2B9oMGAcIqHcsc0Pg7ZVyi%2Fxyg%2FXXFq%2BMxbRLeCOdb%2FXEdYnCqgimT0TkADkQzUDLe1HaaSzbV%2FCaNVHPyjX6O2UlTR9V9wpt6v9P3lXUq%2BLltb5mkPzDynyPBKs1eXWNIMjqWAyHKRxKBq%2FxBaxXf%2F2m1ImRoRdwANQ%2FRm2lA8%2FbMunDp2DR1cMfC3RS7CVPOtJxNV4s1FGWwbCH%2FexzYB2IpHFRR9ZkFKRpN8tAvbCJMt07IflGNYN0ZeW3bzV44SU39j8wtjLxjXXIWiaAwpgNfGQfcr4j1aTD1p%2Bi9BjqkARcNRZIdUCKc13KJ4wFnUmO6VZmS8R6w2caY3ARynMyMQHHj02Cx7lTKhVWA%2FWdSAJsIBOwXiKC%2B8FoCGfe6o3j3o%2FWa7FbcyD3WX9hWEC0kVvVNeqc704a6qDp7o7sAyRgL0x8dM4WSXl1EJdzAcq7QGD%2F9YZv%2FC1JssIKf%2FvgEzA3VX5JwhP3CbsS2If4rESiOK1FFf0jobNLeiDXcuj4j9DrG&X-Amz-Signature=4ef1f7285ef6f1cad60097ac7023aeb639afc7b54d00b6948ed2601ab9d2b1c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYSIEGP5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiSEswPbvSetMMCg1zVg%2B2SnBFPVUl6KQpBnQ04O%2B6hgIhAK1sMY1p8zTFh5pGs6oOp4yzRokc7iCCuTHdKd0g2AoOKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6AD8JJq55N2l6lOQq3AOcUF626NP%2B2NFii526MisAV3HbzjgSvdu2oBDY0Jt7XgQuNuF8oZ%2FlyBL7bCMWwMcjjbKUQAgHULBkIn63egChUcj5TBBkXhJfMsyuA%2F7zzSYIevBId2cQ1YurxxphDPAofGA2PrEuP1sLBWbCQy5%2FlLnqAt0YWpq9kFR3f6xMGR0TyvwSJH0izw5OSVXj%2F46EB176coCj%2Fa5riDSqrxTWTXeUzekwXGtQomTy2NFdeTPKpr76PnMWQRUhV%2ByCGZ%2B4t7svkr%2BvDAB0LE3nS%2Fd64DpNfUbU3SCC9vGXH4MMo%2F36IKn%2FfLRcXQCzFUN%2FUhXFS1O2kpi%2B6s2ayhHuJQk1tRE%2B9oMGAcIqHcsc0Pg7ZVyi%2Fxyg%2FXXFq%2BMxbRLeCOdb%2FXEdYnCqgimT0TkADkQzUDLe1HaaSzbV%2FCaNVHPyjX6O2UlTR9V9wpt6v9P3lXUq%2BLltb5mkPzDynyPBKs1eXWNIMjqWAyHKRxKBq%2FxBaxXf%2F2m1ImRoRdwANQ%2FRm2lA8%2FbMunDp2DR1cMfC3RS7CVPOtJxNV4s1FGWwbCH%2FexzYB2IpHFRR9ZkFKRpN8tAvbCJMt07IflGNYN0ZeW3bzV44SU39j8wtjLxjXXIWiaAwpgNfGQfcr4j1aTD1p%2Bi9BjqkARcNRZIdUCKc13KJ4wFnUmO6VZmS8R6w2caY3ARynMyMQHHj02Cx7lTKhVWA%2FWdSAJsIBOwXiKC%2B8FoCGfe6o3j3o%2FWa7FbcyD3WX9hWEC0kVvVNeqc704a6qDp7o7sAyRgL0x8dM4WSXl1EJdzAcq7QGD%2F9YZv%2FC1JssIKf%2FvgEzA3VX5JwhP3CbsS2If4rESiOK1FFf0jobNLeiDXcuj4j9DrG&X-Amz-Signature=704c27d0dc6d9a4355d5cb681ae98072a8e8f7d8eb080de3bae2b7360649be93&X-Amz-SignedHeaders=host&x-id=GetObject)
