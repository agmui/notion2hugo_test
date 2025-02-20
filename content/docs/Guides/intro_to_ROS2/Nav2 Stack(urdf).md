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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QTXM3X%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTnyBidWkp30W2bEPe4FgtwQaDQHlw9zAujmX2chAYlgIhAMyZYoq%2F7Psqwm1obY%2FdHFHnVJnB43Ra8xbkRy%2BbkUi3KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3XreKgxokutBYI6Eq3AOUCMu6cwOYC%2Fna%2BLly1AXpcoudh1WBk66qq4muesg%2F7UcOH6DldZ4PDjfS9Ir3sJVIdzEI1ASnk%2BgWLOHhcLClDsOjGzZJ2H1YVcSDhrlbZ5IJ2bEKu%2FJR%2Frdusq5mPMWYLYuq%2FLQDppfmypE1Hy%2F3Jx7VdBXtsAZfx%2FGAXJRPmDVwtkDLa9TZXxhmxPOE70VWwmwfkJv669BK5UMGTyiiZi3zSKPLsXy1XEnSiky9tJKUuF3cQtNkfsZwUBZX2R1Y5h%2FF3yI%2BIKcaXmtsB1X9H7dT%2BQNHDqW9UH6aOTUGCjcyRLrDeZAb0w8%2BEMDbmVvImpLLBuXCRhTLFCNjJ1IenX930VK%2B9u%2FGw1WBn0hC%2FG4oAKHYJfr4zo%2B8LIzVx5qx5M2zHCFi%2FwGxV0pfjeWhhVZju5IauT%2BWsrsjUK57CMlCpfuLn3BwNiBIvgcVm%2BJCYqKyR0uVB0OKrmms5E3cLmHac9NCDfF678V9o0hNlPlbiXohPBZIDxBxyLdJq6vfKa7kkqI5VxLMPvjGWJcuaJb23lMupJEdfzoQyWY1dJWtOGZO61l2dAlTH2NFVXW9j4E68zZLgWze8Kp9DhaKBX1uyLM2LWt2O4b%2BHo9nq7HS5c1PtMCnjo7q3DCLrdy9BjqkATPtVRc3dfyW%2Bh%2FzxSbM49O6i2VCxJpiqlhNNOULQ6vD9Sz9SQSGnzR8Wcs2QRmpKkEax9GFXlm4%2FTFjq8le3ApU09OgiaYwfCqPGLs0gBpwcbOpsFkxoVNPq1s8W45fKLTORg7VONSkxSEMGnl9auQ8hODIqrmF2nWS8CbOHL7RbQPeNN3wEmdR0sq5btbLtHcMUEcl5hPweN2QpkvKmtn0Dq79&X-Amz-Signature=270e493e472cdcc4f5b03239171532919519b188c10217bb21a66ae36b4d7d55&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QTXM3X%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTnyBidWkp30W2bEPe4FgtwQaDQHlw9zAujmX2chAYlgIhAMyZYoq%2F7Psqwm1obY%2FdHFHnVJnB43Ra8xbkRy%2BbkUi3KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3XreKgxokutBYI6Eq3AOUCMu6cwOYC%2Fna%2BLly1AXpcoudh1WBk66qq4muesg%2F7UcOH6DldZ4PDjfS9Ir3sJVIdzEI1ASnk%2BgWLOHhcLClDsOjGzZJ2H1YVcSDhrlbZ5IJ2bEKu%2FJR%2Frdusq5mPMWYLYuq%2FLQDppfmypE1Hy%2F3Jx7VdBXtsAZfx%2FGAXJRPmDVwtkDLa9TZXxhmxPOE70VWwmwfkJv669BK5UMGTyiiZi3zSKPLsXy1XEnSiky9tJKUuF3cQtNkfsZwUBZX2R1Y5h%2FF3yI%2BIKcaXmtsB1X9H7dT%2BQNHDqW9UH6aOTUGCjcyRLrDeZAb0w8%2BEMDbmVvImpLLBuXCRhTLFCNjJ1IenX930VK%2B9u%2FGw1WBn0hC%2FG4oAKHYJfr4zo%2B8LIzVx5qx5M2zHCFi%2FwGxV0pfjeWhhVZju5IauT%2BWsrsjUK57CMlCpfuLn3BwNiBIvgcVm%2BJCYqKyR0uVB0OKrmms5E3cLmHac9NCDfF678V9o0hNlPlbiXohPBZIDxBxyLdJq6vfKa7kkqI5VxLMPvjGWJcuaJb23lMupJEdfzoQyWY1dJWtOGZO61l2dAlTH2NFVXW9j4E68zZLgWze8Kp9DhaKBX1uyLM2LWt2O4b%2BHo9nq7HS5c1PtMCnjo7q3DCLrdy9BjqkATPtVRc3dfyW%2Bh%2FzxSbM49O6i2VCxJpiqlhNNOULQ6vD9Sz9SQSGnzR8Wcs2QRmpKkEax9GFXlm4%2FTFjq8le3ApU09OgiaYwfCqPGLs0gBpwcbOpsFkxoVNPq1s8W45fKLTORg7VONSkxSEMGnl9auQ8hODIqrmF2nWS8CbOHL7RbQPeNN3wEmdR0sq5btbLtHcMUEcl5hPweN2QpkvKmtn0Dq79&X-Amz-Signature=33f880062287cb292820dff0edebaf672f0ab049059102284280c17d932f20ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QTXM3X%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTnyBidWkp30W2bEPe4FgtwQaDQHlw9zAujmX2chAYlgIhAMyZYoq%2F7Psqwm1obY%2FdHFHnVJnB43Ra8xbkRy%2BbkUi3KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3XreKgxokutBYI6Eq3AOUCMu6cwOYC%2Fna%2BLly1AXpcoudh1WBk66qq4muesg%2F7UcOH6DldZ4PDjfS9Ir3sJVIdzEI1ASnk%2BgWLOHhcLClDsOjGzZJ2H1YVcSDhrlbZ5IJ2bEKu%2FJR%2Frdusq5mPMWYLYuq%2FLQDppfmypE1Hy%2F3Jx7VdBXtsAZfx%2FGAXJRPmDVwtkDLa9TZXxhmxPOE70VWwmwfkJv669BK5UMGTyiiZi3zSKPLsXy1XEnSiky9tJKUuF3cQtNkfsZwUBZX2R1Y5h%2FF3yI%2BIKcaXmtsB1X9H7dT%2BQNHDqW9UH6aOTUGCjcyRLrDeZAb0w8%2BEMDbmVvImpLLBuXCRhTLFCNjJ1IenX930VK%2B9u%2FGw1WBn0hC%2FG4oAKHYJfr4zo%2B8LIzVx5qx5M2zHCFi%2FwGxV0pfjeWhhVZju5IauT%2BWsrsjUK57CMlCpfuLn3BwNiBIvgcVm%2BJCYqKyR0uVB0OKrmms5E3cLmHac9NCDfF678V9o0hNlPlbiXohPBZIDxBxyLdJq6vfKa7kkqI5VxLMPvjGWJcuaJb23lMupJEdfzoQyWY1dJWtOGZO61l2dAlTH2NFVXW9j4E68zZLgWze8Kp9DhaKBX1uyLM2LWt2O4b%2BHo9nq7HS5c1PtMCnjo7q3DCLrdy9BjqkATPtVRc3dfyW%2Bh%2FzxSbM49O6i2VCxJpiqlhNNOULQ6vD9Sz9SQSGnzR8Wcs2QRmpKkEax9GFXlm4%2FTFjq8le3ApU09OgiaYwfCqPGLs0gBpwcbOpsFkxoVNPq1s8W45fKLTORg7VONSkxSEMGnl9auQ8hODIqrmF2nWS8CbOHL7RbQPeNN3wEmdR0sq5btbLtHcMUEcl5hPweN2QpkvKmtn0Dq79&X-Amz-Signature=2296a7d502386fb225826976e73421120d0fe1ad011fd03a3ab8b4330cda8446&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QTXM3X%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTnyBidWkp30W2bEPe4FgtwQaDQHlw9zAujmX2chAYlgIhAMyZYoq%2F7Psqwm1obY%2FdHFHnVJnB43Ra8xbkRy%2BbkUi3KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3XreKgxokutBYI6Eq3AOUCMu6cwOYC%2Fna%2BLly1AXpcoudh1WBk66qq4muesg%2F7UcOH6DldZ4PDjfS9Ir3sJVIdzEI1ASnk%2BgWLOHhcLClDsOjGzZJ2H1YVcSDhrlbZ5IJ2bEKu%2FJR%2Frdusq5mPMWYLYuq%2FLQDppfmypE1Hy%2F3Jx7VdBXtsAZfx%2FGAXJRPmDVwtkDLa9TZXxhmxPOE70VWwmwfkJv669BK5UMGTyiiZi3zSKPLsXy1XEnSiky9tJKUuF3cQtNkfsZwUBZX2R1Y5h%2FF3yI%2BIKcaXmtsB1X9H7dT%2BQNHDqW9UH6aOTUGCjcyRLrDeZAb0w8%2BEMDbmVvImpLLBuXCRhTLFCNjJ1IenX930VK%2B9u%2FGw1WBn0hC%2FG4oAKHYJfr4zo%2B8LIzVx5qx5M2zHCFi%2FwGxV0pfjeWhhVZju5IauT%2BWsrsjUK57CMlCpfuLn3BwNiBIvgcVm%2BJCYqKyR0uVB0OKrmms5E3cLmHac9NCDfF678V9o0hNlPlbiXohPBZIDxBxyLdJq6vfKa7kkqI5VxLMPvjGWJcuaJb23lMupJEdfzoQyWY1dJWtOGZO61l2dAlTH2NFVXW9j4E68zZLgWze8Kp9DhaKBX1uyLM2LWt2O4b%2BHo9nq7HS5c1PtMCnjo7q3DCLrdy9BjqkATPtVRc3dfyW%2Bh%2FzxSbM49O6i2VCxJpiqlhNNOULQ6vD9Sz9SQSGnzR8Wcs2QRmpKkEax9GFXlm4%2FTFjq8le3ApU09OgiaYwfCqPGLs0gBpwcbOpsFkxoVNPq1s8W45fKLTORg7VONSkxSEMGnl9auQ8hODIqrmF2nWS8CbOHL7RbQPeNN3wEmdR0sq5btbLtHcMUEcl5hPweN2QpkvKmtn0Dq79&X-Amz-Signature=614d43fe28d66e8fad7d4a79bd683986c6c6f2b786cee27b3556c6c70de81530&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QTXM3X%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTnyBidWkp30W2bEPe4FgtwQaDQHlw9zAujmX2chAYlgIhAMyZYoq%2F7Psqwm1obY%2FdHFHnVJnB43Ra8xbkRy%2BbkUi3KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3XreKgxokutBYI6Eq3AOUCMu6cwOYC%2Fna%2BLly1AXpcoudh1WBk66qq4muesg%2F7UcOH6DldZ4PDjfS9Ir3sJVIdzEI1ASnk%2BgWLOHhcLClDsOjGzZJ2H1YVcSDhrlbZ5IJ2bEKu%2FJR%2Frdusq5mPMWYLYuq%2FLQDppfmypE1Hy%2F3Jx7VdBXtsAZfx%2FGAXJRPmDVwtkDLa9TZXxhmxPOE70VWwmwfkJv669BK5UMGTyiiZi3zSKPLsXy1XEnSiky9tJKUuF3cQtNkfsZwUBZX2R1Y5h%2FF3yI%2BIKcaXmtsB1X9H7dT%2BQNHDqW9UH6aOTUGCjcyRLrDeZAb0w8%2BEMDbmVvImpLLBuXCRhTLFCNjJ1IenX930VK%2B9u%2FGw1WBn0hC%2FG4oAKHYJfr4zo%2B8LIzVx5qx5M2zHCFi%2FwGxV0pfjeWhhVZju5IauT%2BWsrsjUK57CMlCpfuLn3BwNiBIvgcVm%2BJCYqKyR0uVB0OKrmms5E3cLmHac9NCDfF678V9o0hNlPlbiXohPBZIDxBxyLdJq6vfKa7kkqI5VxLMPvjGWJcuaJb23lMupJEdfzoQyWY1dJWtOGZO61l2dAlTH2NFVXW9j4E68zZLgWze8Kp9DhaKBX1uyLM2LWt2O4b%2BHo9nq7HS5c1PtMCnjo7q3DCLrdy9BjqkATPtVRc3dfyW%2Bh%2FzxSbM49O6i2VCxJpiqlhNNOULQ6vD9Sz9SQSGnzR8Wcs2QRmpKkEax9GFXlm4%2FTFjq8le3ApU09OgiaYwfCqPGLs0gBpwcbOpsFkxoVNPq1s8W45fKLTORg7VONSkxSEMGnl9auQ8hODIqrmF2nWS8CbOHL7RbQPeNN3wEmdR0sq5btbLtHcMUEcl5hPweN2QpkvKmtn0Dq79&X-Amz-Signature=58f9bceeb9245d2398bb901b90bcd43177562e69d6b4b41060a0dcc1aa052d91&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QTXM3X%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTnyBidWkp30W2bEPe4FgtwQaDQHlw9zAujmX2chAYlgIhAMyZYoq%2F7Psqwm1obY%2FdHFHnVJnB43Ra8xbkRy%2BbkUi3KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3XreKgxokutBYI6Eq3AOUCMu6cwOYC%2Fna%2BLly1AXpcoudh1WBk66qq4muesg%2F7UcOH6DldZ4PDjfS9Ir3sJVIdzEI1ASnk%2BgWLOHhcLClDsOjGzZJ2H1YVcSDhrlbZ5IJ2bEKu%2FJR%2Frdusq5mPMWYLYuq%2FLQDppfmypE1Hy%2F3Jx7VdBXtsAZfx%2FGAXJRPmDVwtkDLa9TZXxhmxPOE70VWwmwfkJv669BK5UMGTyiiZi3zSKPLsXy1XEnSiky9tJKUuF3cQtNkfsZwUBZX2R1Y5h%2FF3yI%2BIKcaXmtsB1X9H7dT%2BQNHDqW9UH6aOTUGCjcyRLrDeZAb0w8%2BEMDbmVvImpLLBuXCRhTLFCNjJ1IenX930VK%2B9u%2FGw1WBn0hC%2FG4oAKHYJfr4zo%2B8LIzVx5qx5M2zHCFi%2FwGxV0pfjeWhhVZju5IauT%2BWsrsjUK57CMlCpfuLn3BwNiBIvgcVm%2BJCYqKyR0uVB0OKrmms5E3cLmHac9NCDfF678V9o0hNlPlbiXohPBZIDxBxyLdJq6vfKa7kkqI5VxLMPvjGWJcuaJb23lMupJEdfzoQyWY1dJWtOGZO61l2dAlTH2NFVXW9j4E68zZLgWze8Kp9DhaKBX1uyLM2LWt2O4b%2BHo9nq7HS5c1PtMCnjo7q3DCLrdy9BjqkATPtVRc3dfyW%2Bh%2FzxSbM49O6i2VCxJpiqlhNNOULQ6vD9Sz9SQSGnzR8Wcs2QRmpKkEax9GFXlm4%2FTFjq8le3ApU09OgiaYwfCqPGLs0gBpwcbOpsFkxoVNPq1s8W45fKLTORg7VONSkxSEMGnl9auQ8hODIqrmF2nWS8CbOHL7RbQPeNN3wEmdR0sq5btbLtHcMUEcl5hPweN2QpkvKmtn0Dq79&X-Amz-Signature=2aad4abad7b6ffd2b9dbc44ccb6d24d22cc376b4ec113d6753dcffe8fe43a9d6&X-Amz-SignedHeaders=host&x-id=GetObject)
