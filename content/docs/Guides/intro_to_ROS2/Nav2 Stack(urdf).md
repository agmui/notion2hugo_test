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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5YDXIU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOp9e27dd8BVId0pZ04E1GAn3e%2FMduHiYJnpXGastBaAiEA9cJ5ci1Ouo4O%2FDhsy4FwULH6nCnoG%2BCd1kjamYC6CuUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEW803tT67L7BGswuircAxnadewF%2B%2BRUxh1vx6CNBKkq1CE6SWBMnVs4aeNaqm%2FbeDmcJQQP4UKfzR%2Bkts2%2B0gpOU4JfYyEQHuWHKMCJIQDzcn%2FXwtxsUzzxzU1e0Hjfvkj2F%2B6hfpvWE0s0paL5QurL7GvnVmQm6wJR%2F%2FeEXEt1Oq%2FBxn51ERODHM8yPA4cIjQ6A8Y0fGXp97jdiFysPjR%2BLafieT1v4hajejTiSdOn9VuQN63Z4pyPN7DPrabUel5ED240%2BhP%2F%2FFYuK8plavURM0y5s5BvvIYgBLo09w03wr2wMloNOsbIkUAqhYELdotVsi7luZNWuJJblJIk7LYUlHOqMOlNg7HfDCIiCtculvBfN2PSoWyX1CnMJ6txIATRL1nk1shuDmafJY%2FPVJTzjgm4%2BMaNVIOJ2wKQbZdKBXGY3EYpLuGWBg9yD0JqIEIvqQY4qj84CTQ%2B0aunt2PXVpUUtPs6Km4CNTziN%2FNz9XmXwP3yPfrYVUsHqkVE6xN3SQpN%2FgxQitVcVBKUsYFBNueg3ZZvsvZbMteNMLaGiLopsdajSJ9FD1Pf63FPWABrOvHnMGsDpplOn8pHXOkQ5gZfga%2FRtZSgyXf9vy3MQj1mq5bcbmukDWVg7toZrMwVjh5qvsW3G%2FpWMJrv1b4GOqUBZIFMWCMPQf4XhLq4RLrxYdNCREtiDo8OnrVrEtznu%2FDSn8AM5PAiX%2FhmbU7MFOn9I0fnzxjt%2BjUsVoc5hmhim%2BmXhTBlxma40OZDYrBFi2FTFIMSSRrx2CSfI%2B0iVH2KTKghoHTcGUtPUtskfd9OJUJZwCoYwe4yO5z7KLAOUL%2BY1FZFu112x7P4t%2Barx%2BeHhipJYCw33umE0gzYZGt6Zsluflhn&X-Amz-Signature=93eb30d6144e9523f3a64c78abb31c0403d987e3e95b538fe365881045304366&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5YDXIU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOp9e27dd8BVId0pZ04E1GAn3e%2FMduHiYJnpXGastBaAiEA9cJ5ci1Ouo4O%2FDhsy4FwULH6nCnoG%2BCd1kjamYC6CuUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEW803tT67L7BGswuircAxnadewF%2B%2BRUxh1vx6CNBKkq1CE6SWBMnVs4aeNaqm%2FbeDmcJQQP4UKfzR%2Bkts2%2B0gpOU4JfYyEQHuWHKMCJIQDzcn%2FXwtxsUzzxzU1e0Hjfvkj2F%2B6hfpvWE0s0paL5QurL7GvnVmQm6wJR%2F%2FeEXEt1Oq%2FBxn51ERODHM8yPA4cIjQ6A8Y0fGXp97jdiFysPjR%2BLafieT1v4hajejTiSdOn9VuQN63Z4pyPN7DPrabUel5ED240%2BhP%2F%2FFYuK8plavURM0y5s5BvvIYgBLo09w03wr2wMloNOsbIkUAqhYELdotVsi7luZNWuJJblJIk7LYUlHOqMOlNg7HfDCIiCtculvBfN2PSoWyX1CnMJ6txIATRL1nk1shuDmafJY%2FPVJTzjgm4%2BMaNVIOJ2wKQbZdKBXGY3EYpLuGWBg9yD0JqIEIvqQY4qj84CTQ%2B0aunt2PXVpUUtPs6Km4CNTziN%2FNz9XmXwP3yPfrYVUsHqkVE6xN3SQpN%2FgxQitVcVBKUsYFBNueg3ZZvsvZbMteNMLaGiLopsdajSJ9FD1Pf63FPWABrOvHnMGsDpplOn8pHXOkQ5gZfga%2FRtZSgyXf9vy3MQj1mq5bcbmukDWVg7toZrMwVjh5qvsW3G%2FpWMJrv1b4GOqUBZIFMWCMPQf4XhLq4RLrxYdNCREtiDo8OnrVrEtznu%2FDSn8AM5PAiX%2FhmbU7MFOn9I0fnzxjt%2BjUsVoc5hmhim%2BmXhTBlxma40OZDYrBFi2FTFIMSSRrx2CSfI%2B0iVH2KTKghoHTcGUtPUtskfd9OJUJZwCoYwe4yO5z7KLAOUL%2BY1FZFu112x7P4t%2Barx%2BeHhipJYCw33umE0gzYZGt6Zsluflhn&X-Amz-Signature=d4a86cb7b9b3ab80c25865727cf793647a7721426a83cab93439144dd02d3707&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5YDXIU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOp9e27dd8BVId0pZ04E1GAn3e%2FMduHiYJnpXGastBaAiEA9cJ5ci1Ouo4O%2FDhsy4FwULH6nCnoG%2BCd1kjamYC6CuUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEW803tT67L7BGswuircAxnadewF%2B%2BRUxh1vx6CNBKkq1CE6SWBMnVs4aeNaqm%2FbeDmcJQQP4UKfzR%2Bkts2%2B0gpOU4JfYyEQHuWHKMCJIQDzcn%2FXwtxsUzzxzU1e0Hjfvkj2F%2B6hfpvWE0s0paL5QurL7GvnVmQm6wJR%2F%2FeEXEt1Oq%2FBxn51ERODHM8yPA4cIjQ6A8Y0fGXp97jdiFysPjR%2BLafieT1v4hajejTiSdOn9VuQN63Z4pyPN7DPrabUel5ED240%2BhP%2F%2FFYuK8plavURM0y5s5BvvIYgBLo09w03wr2wMloNOsbIkUAqhYELdotVsi7luZNWuJJblJIk7LYUlHOqMOlNg7HfDCIiCtculvBfN2PSoWyX1CnMJ6txIATRL1nk1shuDmafJY%2FPVJTzjgm4%2BMaNVIOJ2wKQbZdKBXGY3EYpLuGWBg9yD0JqIEIvqQY4qj84CTQ%2B0aunt2PXVpUUtPs6Km4CNTziN%2FNz9XmXwP3yPfrYVUsHqkVE6xN3SQpN%2FgxQitVcVBKUsYFBNueg3ZZvsvZbMteNMLaGiLopsdajSJ9FD1Pf63FPWABrOvHnMGsDpplOn8pHXOkQ5gZfga%2FRtZSgyXf9vy3MQj1mq5bcbmukDWVg7toZrMwVjh5qvsW3G%2FpWMJrv1b4GOqUBZIFMWCMPQf4XhLq4RLrxYdNCREtiDo8OnrVrEtznu%2FDSn8AM5PAiX%2FhmbU7MFOn9I0fnzxjt%2BjUsVoc5hmhim%2BmXhTBlxma40OZDYrBFi2FTFIMSSRrx2CSfI%2B0iVH2KTKghoHTcGUtPUtskfd9OJUJZwCoYwe4yO5z7KLAOUL%2BY1FZFu112x7P4t%2Barx%2BeHhipJYCw33umE0gzYZGt6Zsluflhn&X-Amz-Signature=2de7553df9965ca75973b7a74c4e3cd69166a0fc720676ce9fc97a8e616d91e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5YDXIU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOp9e27dd8BVId0pZ04E1GAn3e%2FMduHiYJnpXGastBaAiEA9cJ5ci1Ouo4O%2FDhsy4FwULH6nCnoG%2BCd1kjamYC6CuUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEW803tT67L7BGswuircAxnadewF%2B%2BRUxh1vx6CNBKkq1CE6SWBMnVs4aeNaqm%2FbeDmcJQQP4UKfzR%2Bkts2%2B0gpOU4JfYyEQHuWHKMCJIQDzcn%2FXwtxsUzzxzU1e0Hjfvkj2F%2B6hfpvWE0s0paL5QurL7GvnVmQm6wJR%2F%2FeEXEt1Oq%2FBxn51ERODHM8yPA4cIjQ6A8Y0fGXp97jdiFysPjR%2BLafieT1v4hajejTiSdOn9VuQN63Z4pyPN7DPrabUel5ED240%2BhP%2F%2FFYuK8plavURM0y5s5BvvIYgBLo09w03wr2wMloNOsbIkUAqhYELdotVsi7luZNWuJJblJIk7LYUlHOqMOlNg7HfDCIiCtculvBfN2PSoWyX1CnMJ6txIATRL1nk1shuDmafJY%2FPVJTzjgm4%2BMaNVIOJ2wKQbZdKBXGY3EYpLuGWBg9yD0JqIEIvqQY4qj84CTQ%2B0aunt2PXVpUUtPs6Km4CNTziN%2FNz9XmXwP3yPfrYVUsHqkVE6xN3SQpN%2FgxQitVcVBKUsYFBNueg3ZZvsvZbMteNMLaGiLopsdajSJ9FD1Pf63FPWABrOvHnMGsDpplOn8pHXOkQ5gZfga%2FRtZSgyXf9vy3MQj1mq5bcbmukDWVg7toZrMwVjh5qvsW3G%2FpWMJrv1b4GOqUBZIFMWCMPQf4XhLq4RLrxYdNCREtiDo8OnrVrEtznu%2FDSn8AM5PAiX%2FhmbU7MFOn9I0fnzxjt%2BjUsVoc5hmhim%2BmXhTBlxma40OZDYrBFi2FTFIMSSRrx2CSfI%2B0iVH2KTKghoHTcGUtPUtskfd9OJUJZwCoYwe4yO5z7KLAOUL%2BY1FZFu112x7P4t%2Barx%2BeHhipJYCw33umE0gzYZGt6Zsluflhn&X-Amz-Signature=dc3ceb9fa6d2a4361d1802677f9f5b92672f3bd1ccf43bad515f531b05fd4a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5YDXIU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOp9e27dd8BVId0pZ04E1GAn3e%2FMduHiYJnpXGastBaAiEA9cJ5ci1Ouo4O%2FDhsy4FwULH6nCnoG%2BCd1kjamYC6CuUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEW803tT67L7BGswuircAxnadewF%2B%2BRUxh1vx6CNBKkq1CE6SWBMnVs4aeNaqm%2FbeDmcJQQP4UKfzR%2Bkts2%2B0gpOU4JfYyEQHuWHKMCJIQDzcn%2FXwtxsUzzxzU1e0Hjfvkj2F%2B6hfpvWE0s0paL5QurL7GvnVmQm6wJR%2F%2FeEXEt1Oq%2FBxn51ERODHM8yPA4cIjQ6A8Y0fGXp97jdiFysPjR%2BLafieT1v4hajejTiSdOn9VuQN63Z4pyPN7DPrabUel5ED240%2BhP%2F%2FFYuK8plavURM0y5s5BvvIYgBLo09w03wr2wMloNOsbIkUAqhYELdotVsi7luZNWuJJblJIk7LYUlHOqMOlNg7HfDCIiCtculvBfN2PSoWyX1CnMJ6txIATRL1nk1shuDmafJY%2FPVJTzjgm4%2BMaNVIOJ2wKQbZdKBXGY3EYpLuGWBg9yD0JqIEIvqQY4qj84CTQ%2B0aunt2PXVpUUtPs6Km4CNTziN%2FNz9XmXwP3yPfrYVUsHqkVE6xN3SQpN%2FgxQitVcVBKUsYFBNueg3ZZvsvZbMteNMLaGiLopsdajSJ9FD1Pf63FPWABrOvHnMGsDpplOn8pHXOkQ5gZfga%2FRtZSgyXf9vy3MQj1mq5bcbmukDWVg7toZrMwVjh5qvsW3G%2FpWMJrv1b4GOqUBZIFMWCMPQf4XhLq4RLrxYdNCREtiDo8OnrVrEtznu%2FDSn8AM5PAiX%2FhmbU7MFOn9I0fnzxjt%2BjUsVoc5hmhim%2BmXhTBlxma40OZDYrBFi2FTFIMSSRrx2CSfI%2B0iVH2KTKghoHTcGUtPUtskfd9OJUJZwCoYwe4yO5z7KLAOUL%2BY1FZFu112x7P4t%2Barx%2BeHhipJYCw33umE0gzYZGt6Zsluflhn&X-Amz-Signature=e7677888f968ea7f598cbf58b39845373c6d7c176b0f6216867d7bbc5c56cc05&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5YDXIU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOp9e27dd8BVId0pZ04E1GAn3e%2FMduHiYJnpXGastBaAiEA9cJ5ci1Ouo4O%2FDhsy4FwULH6nCnoG%2BCd1kjamYC6CuUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEW803tT67L7BGswuircAxnadewF%2B%2BRUxh1vx6CNBKkq1CE6SWBMnVs4aeNaqm%2FbeDmcJQQP4UKfzR%2Bkts2%2B0gpOU4JfYyEQHuWHKMCJIQDzcn%2FXwtxsUzzxzU1e0Hjfvkj2F%2B6hfpvWE0s0paL5QurL7GvnVmQm6wJR%2F%2FeEXEt1Oq%2FBxn51ERODHM8yPA4cIjQ6A8Y0fGXp97jdiFysPjR%2BLafieT1v4hajejTiSdOn9VuQN63Z4pyPN7DPrabUel5ED240%2BhP%2F%2FFYuK8plavURM0y5s5BvvIYgBLo09w03wr2wMloNOsbIkUAqhYELdotVsi7luZNWuJJblJIk7LYUlHOqMOlNg7HfDCIiCtculvBfN2PSoWyX1CnMJ6txIATRL1nk1shuDmafJY%2FPVJTzjgm4%2BMaNVIOJ2wKQbZdKBXGY3EYpLuGWBg9yD0JqIEIvqQY4qj84CTQ%2B0aunt2PXVpUUtPs6Km4CNTziN%2FNz9XmXwP3yPfrYVUsHqkVE6xN3SQpN%2FgxQitVcVBKUsYFBNueg3ZZvsvZbMteNMLaGiLopsdajSJ9FD1Pf63FPWABrOvHnMGsDpplOn8pHXOkQ5gZfga%2FRtZSgyXf9vy3MQj1mq5bcbmukDWVg7toZrMwVjh5qvsW3G%2FpWMJrv1b4GOqUBZIFMWCMPQf4XhLq4RLrxYdNCREtiDo8OnrVrEtznu%2FDSn8AM5PAiX%2FhmbU7MFOn9I0fnzxjt%2BjUsVoc5hmhim%2BmXhTBlxma40OZDYrBFi2FTFIMSSRrx2CSfI%2B0iVH2KTKghoHTcGUtPUtskfd9OJUJZwCoYwe4yO5z7KLAOUL%2BY1FZFu112x7P4t%2Barx%2BeHhipJYCw33umE0gzYZGt6Zsluflhn&X-Amz-Signature=326a75dd9104ebe72d75fd041bd76bb40ecffaa74ac27bde0ab4e55b6ee86aa4&X-Amz-SignedHeaders=host&x-id=GetObject)
