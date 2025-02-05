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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG2NF32P%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE7pZyhAvDo9pTqPBllc49eo5ZqCiDGOWFDAQu9RTcIEAiBT0eKMmFrZ2%2BRGTiX%2F8m%2BuCfaobG9k40ssCfRv02THqir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMAVWl8YEHmLbqMXeqKtwD1a0bkXqKrw8ZoUmmdGOwoodIuCWdmhIsd4Nma8sJfP5LTbsaBfZlY%2Fuk8wf9ATKl4RcTPwfPsJafZJuWmWMh%2Fdt8qHzwoQv3Ft2uyHdF5mlHoRqWTdQaKjb%2FEv2I%2BU3ej3qzqGdDIJuLSujznnFBhbKzTpVjn%2BHvLyDEE5fE2Xk2P7nu1qd1BWXq51VhiSO4jB%2BCjP1E5s%2FNhBsYD9k9t28KF2dn%2FondL9%2BhZVxTJ28XQbLhQPIHBlPKmk%2Bcs59DrpzqRQMypQIsCpGcz2AD2szSYE8PVld2ptMXaRYGTUDjKX5ydaYqrlvQBFrDH1nqBtyKlDDrXIc2umVLi35bcaIl0oqpYG3M%2BPv3nQGR%2BCnXseHDofh521ZsM3ryNO9x9Byqhet6PbK770TPBCXG4UaNSAQMNKYToAq%2FFKeQND8rCPqmyRd1pWvD8No%2BqRr3XIfijZvy0OMqU%2FK0O8BQZ9ftxgjJwcCJ6CiFgGHJaa6BxM1vVaX2xVXLxNxxvVEP3AWW9rwVtG0G61BnUq68RSPtsvIG%2BEEXY1bNsGGf8kebW6z7FN01m2QV7%2BvFbRhiWnaeof5x7BO1xYriSnjENnEnFTGhxu6fg5q%2F3ecsKwtlmrU0kqFak3cWEBEw8YyNvQY6pgFqoFTsi9SPUSO4W5rg6k1Q%2BOoje4NlSYexw8zeti8R3%2Fg1ROX5KNZ8eZ0H8wTsbzb0iTCJ37TaL3Q9ZpJXv7R2%2BHbnaylRrM3AMB8SX1HMEjPFoX8N98l6gSbDxggOPlXFIil8QCfip17pr%2FO1zRLDV8Hizcvjx53a9LWGXZ7LUCbAMsYUvx7JOeWt8QQZKpyh8vXYWA%2BrA1ucVZvec9sQ6l0cpg8Y&X-Amz-Signature=967e97517cd81cb07b94f5c1b61f413b91e9703a1917ff8295dfe2c2a8c5756e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG2NF32P%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE7pZyhAvDo9pTqPBllc49eo5ZqCiDGOWFDAQu9RTcIEAiBT0eKMmFrZ2%2BRGTiX%2F8m%2BuCfaobG9k40ssCfRv02THqir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMAVWl8YEHmLbqMXeqKtwD1a0bkXqKrw8ZoUmmdGOwoodIuCWdmhIsd4Nma8sJfP5LTbsaBfZlY%2Fuk8wf9ATKl4RcTPwfPsJafZJuWmWMh%2Fdt8qHzwoQv3Ft2uyHdF5mlHoRqWTdQaKjb%2FEv2I%2BU3ej3qzqGdDIJuLSujznnFBhbKzTpVjn%2BHvLyDEE5fE2Xk2P7nu1qd1BWXq51VhiSO4jB%2BCjP1E5s%2FNhBsYD9k9t28KF2dn%2FondL9%2BhZVxTJ28XQbLhQPIHBlPKmk%2Bcs59DrpzqRQMypQIsCpGcz2AD2szSYE8PVld2ptMXaRYGTUDjKX5ydaYqrlvQBFrDH1nqBtyKlDDrXIc2umVLi35bcaIl0oqpYG3M%2BPv3nQGR%2BCnXseHDofh521ZsM3ryNO9x9Byqhet6PbK770TPBCXG4UaNSAQMNKYToAq%2FFKeQND8rCPqmyRd1pWvD8No%2BqRr3XIfijZvy0OMqU%2FK0O8BQZ9ftxgjJwcCJ6CiFgGHJaa6BxM1vVaX2xVXLxNxxvVEP3AWW9rwVtG0G61BnUq68RSPtsvIG%2BEEXY1bNsGGf8kebW6z7FN01m2QV7%2BvFbRhiWnaeof5x7BO1xYriSnjENnEnFTGhxu6fg5q%2F3ecsKwtlmrU0kqFak3cWEBEw8YyNvQY6pgFqoFTsi9SPUSO4W5rg6k1Q%2BOoje4NlSYexw8zeti8R3%2Fg1ROX5KNZ8eZ0H8wTsbzb0iTCJ37TaL3Q9ZpJXv7R2%2BHbnaylRrM3AMB8SX1HMEjPFoX8N98l6gSbDxggOPlXFIil8QCfip17pr%2FO1zRLDV8Hizcvjx53a9LWGXZ7LUCbAMsYUvx7JOeWt8QQZKpyh8vXYWA%2BrA1ucVZvec9sQ6l0cpg8Y&X-Amz-Signature=eb0e65a955c8fde1564ed8b941bd695eb39726f7d3494efe9710d9da5c170e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG2NF32P%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE7pZyhAvDo9pTqPBllc49eo5ZqCiDGOWFDAQu9RTcIEAiBT0eKMmFrZ2%2BRGTiX%2F8m%2BuCfaobG9k40ssCfRv02THqir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMAVWl8YEHmLbqMXeqKtwD1a0bkXqKrw8ZoUmmdGOwoodIuCWdmhIsd4Nma8sJfP5LTbsaBfZlY%2Fuk8wf9ATKl4RcTPwfPsJafZJuWmWMh%2Fdt8qHzwoQv3Ft2uyHdF5mlHoRqWTdQaKjb%2FEv2I%2BU3ej3qzqGdDIJuLSujznnFBhbKzTpVjn%2BHvLyDEE5fE2Xk2P7nu1qd1BWXq51VhiSO4jB%2BCjP1E5s%2FNhBsYD9k9t28KF2dn%2FondL9%2BhZVxTJ28XQbLhQPIHBlPKmk%2Bcs59DrpzqRQMypQIsCpGcz2AD2szSYE8PVld2ptMXaRYGTUDjKX5ydaYqrlvQBFrDH1nqBtyKlDDrXIc2umVLi35bcaIl0oqpYG3M%2BPv3nQGR%2BCnXseHDofh521ZsM3ryNO9x9Byqhet6PbK770TPBCXG4UaNSAQMNKYToAq%2FFKeQND8rCPqmyRd1pWvD8No%2BqRr3XIfijZvy0OMqU%2FK0O8BQZ9ftxgjJwcCJ6CiFgGHJaa6BxM1vVaX2xVXLxNxxvVEP3AWW9rwVtG0G61BnUq68RSPtsvIG%2BEEXY1bNsGGf8kebW6z7FN01m2QV7%2BvFbRhiWnaeof5x7BO1xYriSnjENnEnFTGhxu6fg5q%2F3ecsKwtlmrU0kqFak3cWEBEw8YyNvQY6pgFqoFTsi9SPUSO4W5rg6k1Q%2BOoje4NlSYexw8zeti8R3%2Fg1ROX5KNZ8eZ0H8wTsbzb0iTCJ37TaL3Q9ZpJXv7R2%2BHbnaylRrM3AMB8SX1HMEjPFoX8N98l6gSbDxggOPlXFIil8QCfip17pr%2FO1zRLDV8Hizcvjx53a9LWGXZ7LUCbAMsYUvx7JOeWt8QQZKpyh8vXYWA%2BrA1ucVZvec9sQ6l0cpg8Y&X-Amz-Signature=186643758bf49d4af7bed182ece9944cdad48e259d5da9ba8fffdbb5112f9dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG2NF32P%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE7pZyhAvDo9pTqPBllc49eo5ZqCiDGOWFDAQu9RTcIEAiBT0eKMmFrZ2%2BRGTiX%2F8m%2BuCfaobG9k40ssCfRv02THqir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMAVWl8YEHmLbqMXeqKtwD1a0bkXqKrw8ZoUmmdGOwoodIuCWdmhIsd4Nma8sJfP5LTbsaBfZlY%2Fuk8wf9ATKl4RcTPwfPsJafZJuWmWMh%2Fdt8qHzwoQv3Ft2uyHdF5mlHoRqWTdQaKjb%2FEv2I%2BU3ej3qzqGdDIJuLSujznnFBhbKzTpVjn%2BHvLyDEE5fE2Xk2P7nu1qd1BWXq51VhiSO4jB%2BCjP1E5s%2FNhBsYD9k9t28KF2dn%2FondL9%2BhZVxTJ28XQbLhQPIHBlPKmk%2Bcs59DrpzqRQMypQIsCpGcz2AD2szSYE8PVld2ptMXaRYGTUDjKX5ydaYqrlvQBFrDH1nqBtyKlDDrXIc2umVLi35bcaIl0oqpYG3M%2BPv3nQGR%2BCnXseHDofh521ZsM3ryNO9x9Byqhet6PbK770TPBCXG4UaNSAQMNKYToAq%2FFKeQND8rCPqmyRd1pWvD8No%2BqRr3XIfijZvy0OMqU%2FK0O8BQZ9ftxgjJwcCJ6CiFgGHJaa6BxM1vVaX2xVXLxNxxvVEP3AWW9rwVtG0G61BnUq68RSPtsvIG%2BEEXY1bNsGGf8kebW6z7FN01m2QV7%2BvFbRhiWnaeof5x7BO1xYriSnjENnEnFTGhxu6fg5q%2F3ecsKwtlmrU0kqFak3cWEBEw8YyNvQY6pgFqoFTsi9SPUSO4W5rg6k1Q%2BOoje4NlSYexw8zeti8R3%2Fg1ROX5KNZ8eZ0H8wTsbzb0iTCJ37TaL3Q9ZpJXv7R2%2BHbnaylRrM3AMB8SX1HMEjPFoX8N98l6gSbDxggOPlXFIil8QCfip17pr%2FO1zRLDV8Hizcvjx53a9LWGXZ7LUCbAMsYUvx7JOeWt8QQZKpyh8vXYWA%2BrA1ucVZvec9sQ6l0cpg8Y&X-Amz-Signature=8baa6073abfb934445b01bd8c18c799962d28c8341a4d7d4871b80e9784d83cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG2NF32P%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE7pZyhAvDo9pTqPBllc49eo5ZqCiDGOWFDAQu9RTcIEAiBT0eKMmFrZ2%2BRGTiX%2F8m%2BuCfaobG9k40ssCfRv02THqir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMAVWl8YEHmLbqMXeqKtwD1a0bkXqKrw8ZoUmmdGOwoodIuCWdmhIsd4Nma8sJfP5LTbsaBfZlY%2Fuk8wf9ATKl4RcTPwfPsJafZJuWmWMh%2Fdt8qHzwoQv3Ft2uyHdF5mlHoRqWTdQaKjb%2FEv2I%2BU3ej3qzqGdDIJuLSujznnFBhbKzTpVjn%2BHvLyDEE5fE2Xk2P7nu1qd1BWXq51VhiSO4jB%2BCjP1E5s%2FNhBsYD9k9t28KF2dn%2FondL9%2BhZVxTJ28XQbLhQPIHBlPKmk%2Bcs59DrpzqRQMypQIsCpGcz2AD2szSYE8PVld2ptMXaRYGTUDjKX5ydaYqrlvQBFrDH1nqBtyKlDDrXIc2umVLi35bcaIl0oqpYG3M%2BPv3nQGR%2BCnXseHDofh521ZsM3ryNO9x9Byqhet6PbK770TPBCXG4UaNSAQMNKYToAq%2FFKeQND8rCPqmyRd1pWvD8No%2BqRr3XIfijZvy0OMqU%2FK0O8BQZ9ftxgjJwcCJ6CiFgGHJaa6BxM1vVaX2xVXLxNxxvVEP3AWW9rwVtG0G61BnUq68RSPtsvIG%2BEEXY1bNsGGf8kebW6z7FN01m2QV7%2BvFbRhiWnaeof5x7BO1xYriSnjENnEnFTGhxu6fg5q%2F3ecsKwtlmrU0kqFak3cWEBEw8YyNvQY6pgFqoFTsi9SPUSO4W5rg6k1Q%2BOoje4NlSYexw8zeti8R3%2Fg1ROX5KNZ8eZ0H8wTsbzb0iTCJ37TaL3Q9ZpJXv7R2%2BHbnaylRrM3AMB8SX1HMEjPFoX8N98l6gSbDxggOPlXFIil8QCfip17pr%2FO1zRLDV8Hizcvjx53a9LWGXZ7LUCbAMsYUvx7JOeWt8QQZKpyh8vXYWA%2BrA1ucVZvec9sQ6l0cpg8Y&X-Amz-Signature=b3196ed6e1471e2b7cd57ffb9f3b1aab00abc12e87bf94e82999686337ae196a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG2NF32P%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIE7pZyhAvDo9pTqPBllc49eo5ZqCiDGOWFDAQu9RTcIEAiBT0eKMmFrZ2%2BRGTiX%2F8m%2BuCfaobG9k40ssCfRv02THqir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMAVWl8YEHmLbqMXeqKtwD1a0bkXqKrw8ZoUmmdGOwoodIuCWdmhIsd4Nma8sJfP5LTbsaBfZlY%2Fuk8wf9ATKl4RcTPwfPsJafZJuWmWMh%2Fdt8qHzwoQv3Ft2uyHdF5mlHoRqWTdQaKjb%2FEv2I%2BU3ej3qzqGdDIJuLSujznnFBhbKzTpVjn%2BHvLyDEE5fE2Xk2P7nu1qd1BWXq51VhiSO4jB%2BCjP1E5s%2FNhBsYD9k9t28KF2dn%2FondL9%2BhZVxTJ28XQbLhQPIHBlPKmk%2Bcs59DrpzqRQMypQIsCpGcz2AD2szSYE8PVld2ptMXaRYGTUDjKX5ydaYqrlvQBFrDH1nqBtyKlDDrXIc2umVLi35bcaIl0oqpYG3M%2BPv3nQGR%2BCnXseHDofh521ZsM3ryNO9x9Byqhet6PbK770TPBCXG4UaNSAQMNKYToAq%2FFKeQND8rCPqmyRd1pWvD8No%2BqRr3XIfijZvy0OMqU%2FK0O8BQZ9ftxgjJwcCJ6CiFgGHJaa6BxM1vVaX2xVXLxNxxvVEP3AWW9rwVtG0G61BnUq68RSPtsvIG%2BEEXY1bNsGGf8kebW6z7FN01m2QV7%2BvFbRhiWnaeof5x7BO1xYriSnjENnEnFTGhxu6fg5q%2F3ecsKwtlmrU0kqFak3cWEBEw8YyNvQY6pgFqoFTsi9SPUSO4W5rg6k1Q%2BOoje4NlSYexw8zeti8R3%2Fg1ROX5KNZ8eZ0H8wTsbzb0iTCJ37TaL3Q9ZpJXv7R2%2BHbnaylRrM3AMB8SX1HMEjPFoX8N98l6gSbDxggOPlXFIil8QCfip17pr%2FO1zRLDV8Hizcvjx53a9LWGXZ7LUCbAMsYUvx7JOeWt8QQZKpyh8vXYWA%2BrA1ucVZvec9sQ6l0cpg8Y&X-Amz-Signature=48241ee9c0064cdef275b0fd03d8475b48e2b6dbd254d64d3fc9f56d9020bb9b&X-Amz-SignedHeaders=host&x-id=GetObject)
