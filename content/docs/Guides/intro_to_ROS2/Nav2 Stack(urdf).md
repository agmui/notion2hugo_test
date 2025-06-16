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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBDI7EP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDGQw6gqAmeMObo%2BQqw1sXbZLMoH4W2Gv6gwchLxNtGVAIgV24BSQgoi3%2FHqtPkKn3kOoaUdyS%2FUgQwYf3vPhjQeVQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAsfJ4a81jnIrN73QCrcA9S2ocqZV6UnOw23di%2BP9UXvtz0P27ElcMrYGCoVxE42tkEX1C0SJwR3GMFtkzF5%2B06WQRcb2PX0q6fed%2BqIgTdW84i8TCwqIHgsjDjXu8iUX8GdArxcdpwlre5H2A6TxtK2r2Jw0S%2F2TdadP55QPkueygAQ%2BI%2BxkH3OI2rwcPhFUi8U0elDTqU7qQ5FRCFGsqJEkK4CJdDLxZalj%2B25Wb6gssrqx3s4fjB2C18a4owWy%2F3Wi6489ajAyH2tK3ckCIWDi5BN1pcgCf3fLzt6jZUYOnTsurf6WWrciV4SFxy6nq5rysUteaGGD2GcqpW%2FV3xvv0CfmgT00c379RZcBtYzv6Ji3OSC9LFUVRkPcZDUygQhnarK9%2Fj3%2B1aQsgIhmzuR51rcYsReyGleLmMtuBdV9f2gfVuK2z3X2JzctsF88fuPZN49V22L6QZY0pvBNrIdmhju%2BKN3zcnwPUBt4rr7SUi6%2BjJkdKvCutYvu06U2rSUpKkqGJH6bbC0VjCAiAc%2FRi7OUFaoO69BZdkhjMwlAB2MvyzQcwPYrwVBCKCrv0lIcLD5QYBoOvQhQf34hcMNrV2oMiVxpYGLzDk6NycJvK9UD2OWrqTGPgR2GryKmxZx0QRFa%2F3d4ETVMOOSvsIGOqUBDFxy3kirDrhZS8zqXtITrrIOGyKLKmJ%2FLrK4cdwFtomXRKRjyBSseuLcuyJ%2FnI3fnVPF4qrMPsa1aHheOb3pmSd%2FYzQHQ5ysbxjY%2BCGHXTO8aHdP1EpTFDSQJefTAcJp%2FFq%2F%2BEmkZEBn58DyaXuXDPp%2B9%2FPjWu%2B4BtiYJDZorUkVt5y3nkZ5Z9NOxIe%2F%2FTbd5XlxJX%2BWCuAskn4KHUgF27kbwO39&X-Amz-Signature=fdb537434b566b38ebd5e4eb9f341512461b9c5a73368476a2e64d006f554da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBDI7EP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDGQw6gqAmeMObo%2BQqw1sXbZLMoH4W2Gv6gwchLxNtGVAIgV24BSQgoi3%2FHqtPkKn3kOoaUdyS%2FUgQwYf3vPhjQeVQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAsfJ4a81jnIrN73QCrcA9S2ocqZV6UnOw23di%2BP9UXvtz0P27ElcMrYGCoVxE42tkEX1C0SJwR3GMFtkzF5%2B06WQRcb2PX0q6fed%2BqIgTdW84i8TCwqIHgsjDjXu8iUX8GdArxcdpwlre5H2A6TxtK2r2Jw0S%2F2TdadP55QPkueygAQ%2BI%2BxkH3OI2rwcPhFUi8U0elDTqU7qQ5FRCFGsqJEkK4CJdDLxZalj%2B25Wb6gssrqx3s4fjB2C18a4owWy%2F3Wi6489ajAyH2tK3ckCIWDi5BN1pcgCf3fLzt6jZUYOnTsurf6WWrciV4SFxy6nq5rysUteaGGD2GcqpW%2FV3xvv0CfmgT00c379RZcBtYzv6Ji3OSC9LFUVRkPcZDUygQhnarK9%2Fj3%2B1aQsgIhmzuR51rcYsReyGleLmMtuBdV9f2gfVuK2z3X2JzctsF88fuPZN49V22L6QZY0pvBNrIdmhju%2BKN3zcnwPUBt4rr7SUi6%2BjJkdKvCutYvu06U2rSUpKkqGJH6bbC0VjCAiAc%2FRi7OUFaoO69BZdkhjMwlAB2MvyzQcwPYrwVBCKCrv0lIcLD5QYBoOvQhQf34hcMNrV2oMiVxpYGLzDk6NycJvK9UD2OWrqTGPgR2GryKmxZx0QRFa%2F3d4ETVMOOSvsIGOqUBDFxy3kirDrhZS8zqXtITrrIOGyKLKmJ%2FLrK4cdwFtomXRKRjyBSseuLcuyJ%2FnI3fnVPF4qrMPsa1aHheOb3pmSd%2FYzQHQ5ysbxjY%2BCGHXTO8aHdP1EpTFDSQJefTAcJp%2FFq%2F%2BEmkZEBn58DyaXuXDPp%2B9%2FPjWu%2B4BtiYJDZorUkVt5y3nkZ5Z9NOxIe%2F%2FTbd5XlxJX%2BWCuAskn4KHUgF27kbwO39&X-Amz-Signature=615feec62ac3335f545903db93fc14eb5c7bb67f9087a8a938c6a3184adcf22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBDI7EP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDGQw6gqAmeMObo%2BQqw1sXbZLMoH4W2Gv6gwchLxNtGVAIgV24BSQgoi3%2FHqtPkKn3kOoaUdyS%2FUgQwYf3vPhjQeVQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAsfJ4a81jnIrN73QCrcA9S2ocqZV6UnOw23di%2BP9UXvtz0P27ElcMrYGCoVxE42tkEX1C0SJwR3GMFtkzF5%2B06WQRcb2PX0q6fed%2BqIgTdW84i8TCwqIHgsjDjXu8iUX8GdArxcdpwlre5H2A6TxtK2r2Jw0S%2F2TdadP55QPkueygAQ%2BI%2BxkH3OI2rwcPhFUi8U0elDTqU7qQ5FRCFGsqJEkK4CJdDLxZalj%2B25Wb6gssrqx3s4fjB2C18a4owWy%2F3Wi6489ajAyH2tK3ckCIWDi5BN1pcgCf3fLzt6jZUYOnTsurf6WWrciV4SFxy6nq5rysUteaGGD2GcqpW%2FV3xvv0CfmgT00c379RZcBtYzv6Ji3OSC9LFUVRkPcZDUygQhnarK9%2Fj3%2B1aQsgIhmzuR51rcYsReyGleLmMtuBdV9f2gfVuK2z3X2JzctsF88fuPZN49V22L6QZY0pvBNrIdmhju%2BKN3zcnwPUBt4rr7SUi6%2BjJkdKvCutYvu06U2rSUpKkqGJH6bbC0VjCAiAc%2FRi7OUFaoO69BZdkhjMwlAB2MvyzQcwPYrwVBCKCrv0lIcLD5QYBoOvQhQf34hcMNrV2oMiVxpYGLzDk6NycJvK9UD2OWrqTGPgR2GryKmxZx0QRFa%2F3d4ETVMOOSvsIGOqUBDFxy3kirDrhZS8zqXtITrrIOGyKLKmJ%2FLrK4cdwFtomXRKRjyBSseuLcuyJ%2FnI3fnVPF4qrMPsa1aHheOb3pmSd%2FYzQHQ5ysbxjY%2BCGHXTO8aHdP1EpTFDSQJefTAcJp%2FFq%2F%2BEmkZEBn58DyaXuXDPp%2B9%2FPjWu%2B4BtiYJDZorUkVt5y3nkZ5Z9NOxIe%2F%2FTbd5XlxJX%2BWCuAskn4KHUgF27kbwO39&X-Amz-Signature=fef4759d56b78dbb437caf0f5dc49db050a2672dc86cb1e9469fa36008171475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBDI7EP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDGQw6gqAmeMObo%2BQqw1sXbZLMoH4W2Gv6gwchLxNtGVAIgV24BSQgoi3%2FHqtPkKn3kOoaUdyS%2FUgQwYf3vPhjQeVQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAsfJ4a81jnIrN73QCrcA9S2ocqZV6UnOw23di%2BP9UXvtz0P27ElcMrYGCoVxE42tkEX1C0SJwR3GMFtkzF5%2B06WQRcb2PX0q6fed%2BqIgTdW84i8TCwqIHgsjDjXu8iUX8GdArxcdpwlre5H2A6TxtK2r2Jw0S%2F2TdadP55QPkueygAQ%2BI%2BxkH3OI2rwcPhFUi8U0elDTqU7qQ5FRCFGsqJEkK4CJdDLxZalj%2B25Wb6gssrqx3s4fjB2C18a4owWy%2F3Wi6489ajAyH2tK3ckCIWDi5BN1pcgCf3fLzt6jZUYOnTsurf6WWrciV4SFxy6nq5rysUteaGGD2GcqpW%2FV3xvv0CfmgT00c379RZcBtYzv6Ji3OSC9LFUVRkPcZDUygQhnarK9%2Fj3%2B1aQsgIhmzuR51rcYsReyGleLmMtuBdV9f2gfVuK2z3X2JzctsF88fuPZN49V22L6QZY0pvBNrIdmhju%2BKN3zcnwPUBt4rr7SUi6%2BjJkdKvCutYvu06U2rSUpKkqGJH6bbC0VjCAiAc%2FRi7OUFaoO69BZdkhjMwlAB2MvyzQcwPYrwVBCKCrv0lIcLD5QYBoOvQhQf34hcMNrV2oMiVxpYGLzDk6NycJvK9UD2OWrqTGPgR2GryKmxZx0QRFa%2F3d4ETVMOOSvsIGOqUBDFxy3kirDrhZS8zqXtITrrIOGyKLKmJ%2FLrK4cdwFtomXRKRjyBSseuLcuyJ%2FnI3fnVPF4qrMPsa1aHheOb3pmSd%2FYzQHQ5ysbxjY%2BCGHXTO8aHdP1EpTFDSQJefTAcJp%2FFq%2F%2BEmkZEBn58DyaXuXDPp%2B9%2FPjWu%2B4BtiYJDZorUkVt5y3nkZ5Z9NOxIe%2F%2FTbd5XlxJX%2BWCuAskn4KHUgF27kbwO39&X-Amz-Signature=db5f9e10f116a5dd9f0ccf1afe028c44751ee6f21bb2309322a0081f56e0a534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBDI7EP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDGQw6gqAmeMObo%2BQqw1sXbZLMoH4W2Gv6gwchLxNtGVAIgV24BSQgoi3%2FHqtPkKn3kOoaUdyS%2FUgQwYf3vPhjQeVQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAsfJ4a81jnIrN73QCrcA9S2ocqZV6UnOw23di%2BP9UXvtz0P27ElcMrYGCoVxE42tkEX1C0SJwR3GMFtkzF5%2B06WQRcb2PX0q6fed%2BqIgTdW84i8TCwqIHgsjDjXu8iUX8GdArxcdpwlre5H2A6TxtK2r2Jw0S%2F2TdadP55QPkueygAQ%2BI%2BxkH3OI2rwcPhFUi8U0elDTqU7qQ5FRCFGsqJEkK4CJdDLxZalj%2B25Wb6gssrqx3s4fjB2C18a4owWy%2F3Wi6489ajAyH2tK3ckCIWDi5BN1pcgCf3fLzt6jZUYOnTsurf6WWrciV4SFxy6nq5rysUteaGGD2GcqpW%2FV3xvv0CfmgT00c379RZcBtYzv6Ji3OSC9LFUVRkPcZDUygQhnarK9%2Fj3%2B1aQsgIhmzuR51rcYsReyGleLmMtuBdV9f2gfVuK2z3X2JzctsF88fuPZN49V22L6QZY0pvBNrIdmhju%2BKN3zcnwPUBt4rr7SUi6%2BjJkdKvCutYvu06U2rSUpKkqGJH6bbC0VjCAiAc%2FRi7OUFaoO69BZdkhjMwlAB2MvyzQcwPYrwVBCKCrv0lIcLD5QYBoOvQhQf34hcMNrV2oMiVxpYGLzDk6NycJvK9UD2OWrqTGPgR2GryKmxZx0QRFa%2F3d4ETVMOOSvsIGOqUBDFxy3kirDrhZS8zqXtITrrIOGyKLKmJ%2FLrK4cdwFtomXRKRjyBSseuLcuyJ%2FnI3fnVPF4qrMPsa1aHheOb3pmSd%2FYzQHQ5ysbxjY%2BCGHXTO8aHdP1EpTFDSQJefTAcJp%2FFq%2F%2BEmkZEBn58DyaXuXDPp%2B9%2FPjWu%2B4BtiYJDZorUkVt5y3nkZ5Z9NOxIe%2F%2FTbd5XlxJX%2BWCuAskn4KHUgF27kbwO39&X-Amz-Signature=880eec694f18e1b3ab5c651f167c8185f51b8bcf6fe65dd16468cad7045586c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBDI7EP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDGQw6gqAmeMObo%2BQqw1sXbZLMoH4W2Gv6gwchLxNtGVAIgV24BSQgoi3%2FHqtPkKn3kOoaUdyS%2FUgQwYf3vPhjQeVQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAsfJ4a81jnIrN73QCrcA9S2ocqZV6UnOw23di%2BP9UXvtz0P27ElcMrYGCoVxE42tkEX1C0SJwR3GMFtkzF5%2B06WQRcb2PX0q6fed%2BqIgTdW84i8TCwqIHgsjDjXu8iUX8GdArxcdpwlre5H2A6TxtK2r2Jw0S%2F2TdadP55QPkueygAQ%2BI%2BxkH3OI2rwcPhFUi8U0elDTqU7qQ5FRCFGsqJEkK4CJdDLxZalj%2B25Wb6gssrqx3s4fjB2C18a4owWy%2F3Wi6489ajAyH2tK3ckCIWDi5BN1pcgCf3fLzt6jZUYOnTsurf6WWrciV4SFxy6nq5rysUteaGGD2GcqpW%2FV3xvv0CfmgT00c379RZcBtYzv6Ji3OSC9LFUVRkPcZDUygQhnarK9%2Fj3%2B1aQsgIhmzuR51rcYsReyGleLmMtuBdV9f2gfVuK2z3X2JzctsF88fuPZN49V22L6QZY0pvBNrIdmhju%2BKN3zcnwPUBt4rr7SUi6%2BjJkdKvCutYvu06U2rSUpKkqGJH6bbC0VjCAiAc%2FRi7OUFaoO69BZdkhjMwlAB2MvyzQcwPYrwVBCKCrv0lIcLD5QYBoOvQhQf34hcMNrV2oMiVxpYGLzDk6NycJvK9UD2OWrqTGPgR2GryKmxZx0QRFa%2F3d4ETVMOOSvsIGOqUBDFxy3kirDrhZS8zqXtITrrIOGyKLKmJ%2FLrK4cdwFtomXRKRjyBSseuLcuyJ%2FnI3fnVPF4qrMPsa1aHheOb3pmSd%2FYzQHQ5ysbxjY%2BCGHXTO8aHdP1EpTFDSQJefTAcJp%2FFq%2F%2BEmkZEBn58DyaXuXDPp%2B9%2FPjWu%2B4BtiYJDZorUkVt5y3nkZ5Z9NOxIe%2F%2FTbd5XlxJX%2BWCuAskn4KHUgF27kbwO39&X-Amz-Signature=566c54f5fccf2fbea598c76304be152e25785be63695e6b676b86ccceaffcfa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
