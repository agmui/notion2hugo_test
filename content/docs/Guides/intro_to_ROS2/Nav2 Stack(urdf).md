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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK36JIM7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHegt0N1vl%2Fdghp6FdeoOsjG%2B22sNAUO%2FQDaPdF1So%2BlAiEA0%2BhYoPwj4s9v2EdnWI5QHazZAkmZyXfHomWHUn%2FHm0oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW97Q0VI%2FdcJDpWQCrcA606efoFQIr6%2F5jRhhCO9Pkmsho37mAdoXeJpLA%2F7oKzPyOCF984jg1izISwuJR38QePJJlGGI4uIMlt39cnMP8yhj7HdbpvoqS1lqvIfqSM7FgVkEZTj51FIwF6XjIeiHmDaX7K2BgFOsFftHBupWFi4vvZvxg4QCVXgchIjyJfodbutsuBMkvt%2BdXLXHraMBStdlu3ftpn45xghdGwpE5HMR7w1ZQitbdkWPyFn8L7%2FmtcYM%2Fai2x6efRKT4d1EJGT8sVp%2FG0IK%2BUYB9hpZ%2Fy2vvaxEbiPY0v%2BaGis6ATa8QK%2FhfY7rK9OxFvz4yDZVm9KdHjpdWwj45RUHGPfj2Jek8wPjXfqbbwDR7Xh5tdXdMqDq7lpE4QeILBumSp1hmRFP693UjM6lGvg3vk2xD2EcHigAYQJTqVYJ3H1T4FpevN%2Fz1aeBl2j0q9uTL%2BHwXTXBsfqPF0f8eq6vXwuK5%2BvsYjxc6H3pTa8bvFY1B%2Bkm2g5%2FBUmUyRG54IysIQciPie68Px9aIVd%2F0Vp%2BOVYFnzqEp4m%2FWjmwkIkLCLJUf9DI9srtQo7pXoW4DQjQyDgbzymuX1kSeAV9nVOdhFjtQ6enhtpzOFN7JymnqeF6l31hoed67MPIuNeX4BMIKx5L0GOqUB38VuqItZrY1UO1E3uXSj7vNVu5cOhrcBtT32MQkV3APJHMDgbUYF4prpFgHW62Y7Dnzffdu1y9iK8l%2FvIq0ZyAeIs6NMcjRby%2FeHBzDCTjrlpHtxEf5SIRcy%2F8EJ08ZM5KkNHh8nnC6qdL7Vnqj3zMtCFY4f4KPwwXRia%2BNSDBtXHo7jhjG8T99SrtoHffn%2B11YnX%2BqnoWib2mKAuNl8LDsA6Ieb&X-Amz-Signature=dd3f06b4a414db17b5c0abf739c6a5c59cd9bd989e8cd25485b440eed7db3725&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK36JIM7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHegt0N1vl%2Fdghp6FdeoOsjG%2B22sNAUO%2FQDaPdF1So%2BlAiEA0%2BhYoPwj4s9v2EdnWI5QHazZAkmZyXfHomWHUn%2FHm0oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW97Q0VI%2FdcJDpWQCrcA606efoFQIr6%2F5jRhhCO9Pkmsho37mAdoXeJpLA%2F7oKzPyOCF984jg1izISwuJR38QePJJlGGI4uIMlt39cnMP8yhj7HdbpvoqS1lqvIfqSM7FgVkEZTj51FIwF6XjIeiHmDaX7K2BgFOsFftHBupWFi4vvZvxg4QCVXgchIjyJfodbutsuBMkvt%2BdXLXHraMBStdlu3ftpn45xghdGwpE5HMR7w1ZQitbdkWPyFn8L7%2FmtcYM%2Fai2x6efRKT4d1EJGT8sVp%2FG0IK%2BUYB9hpZ%2Fy2vvaxEbiPY0v%2BaGis6ATa8QK%2FhfY7rK9OxFvz4yDZVm9KdHjpdWwj45RUHGPfj2Jek8wPjXfqbbwDR7Xh5tdXdMqDq7lpE4QeILBumSp1hmRFP693UjM6lGvg3vk2xD2EcHigAYQJTqVYJ3H1T4FpevN%2Fz1aeBl2j0q9uTL%2BHwXTXBsfqPF0f8eq6vXwuK5%2BvsYjxc6H3pTa8bvFY1B%2Bkm2g5%2FBUmUyRG54IysIQciPie68Px9aIVd%2F0Vp%2BOVYFnzqEp4m%2FWjmwkIkLCLJUf9DI9srtQo7pXoW4DQjQyDgbzymuX1kSeAV9nVOdhFjtQ6enhtpzOFN7JymnqeF6l31hoed67MPIuNeX4BMIKx5L0GOqUB38VuqItZrY1UO1E3uXSj7vNVu5cOhrcBtT32MQkV3APJHMDgbUYF4prpFgHW62Y7Dnzffdu1y9iK8l%2FvIq0ZyAeIs6NMcjRby%2FeHBzDCTjrlpHtxEf5SIRcy%2F8EJ08ZM5KkNHh8nnC6qdL7Vnqj3zMtCFY4f4KPwwXRia%2BNSDBtXHo7jhjG8T99SrtoHffn%2B11YnX%2BqnoWib2mKAuNl8LDsA6Ieb&X-Amz-Signature=71b4815fa564d2709c2bea35769253f1a518db5aee5065eda3d01976d26edfc9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK36JIM7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHegt0N1vl%2Fdghp6FdeoOsjG%2B22sNAUO%2FQDaPdF1So%2BlAiEA0%2BhYoPwj4s9v2EdnWI5QHazZAkmZyXfHomWHUn%2FHm0oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW97Q0VI%2FdcJDpWQCrcA606efoFQIr6%2F5jRhhCO9Pkmsho37mAdoXeJpLA%2F7oKzPyOCF984jg1izISwuJR38QePJJlGGI4uIMlt39cnMP8yhj7HdbpvoqS1lqvIfqSM7FgVkEZTj51FIwF6XjIeiHmDaX7K2BgFOsFftHBupWFi4vvZvxg4QCVXgchIjyJfodbutsuBMkvt%2BdXLXHraMBStdlu3ftpn45xghdGwpE5HMR7w1ZQitbdkWPyFn8L7%2FmtcYM%2Fai2x6efRKT4d1EJGT8sVp%2FG0IK%2BUYB9hpZ%2Fy2vvaxEbiPY0v%2BaGis6ATa8QK%2FhfY7rK9OxFvz4yDZVm9KdHjpdWwj45RUHGPfj2Jek8wPjXfqbbwDR7Xh5tdXdMqDq7lpE4QeILBumSp1hmRFP693UjM6lGvg3vk2xD2EcHigAYQJTqVYJ3H1T4FpevN%2Fz1aeBl2j0q9uTL%2BHwXTXBsfqPF0f8eq6vXwuK5%2BvsYjxc6H3pTa8bvFY1B%2Bkm2g5%2FBUmUyRG54IysIQciPie68Px9aIVd%2F0Vp%2BOVYFnzqEp4m%2FWjmwkIkLCLJUf9DI9srtQo7pXoW4DQjQyDgbzymuX1kSeAV9nVOdhFjtQ6enhtpzOFN7JymnqeF6l31hoed67MPIuNeX4BMIKx5L0GOqUB38VuqItZrY1UO1E3uXSj7vNVu5cOhrcBtT32MQkV3APJHMDgbUYF4prpFgHW62Y7Dnzffdu1y9iK8l%2FvIq0ZyAeIs6NMcjRby%2FeHBzDCTjrlpHtxEf5SIRcy%2F8EJ08ZM5KkNHh8nnC6qdL7Vnqj3zMtCFY4f4KPwwXRia%2BNSDBtXHo7jhjG8T99SrtoHffn%2B11YnX%2BqnoWib2mKAuNl8LDsA6Ieb&X-Amz-Signature=c5d480cca1c38df37bc2e3ea0c36851e9e27c480edd6c39ba1957cdf936caa4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK36JIM7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHegt0N1vl%2Fdghp6FdeoOsjG%2B22sNAUO%2FQDaPdF1So%2BlAiEA0%2BhYoPwj4s9v2EdnWI5QHazZAkmZyXfHomWHUn%2FHm0oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW97Q0VI%2FdcJDpWQCrcA606efoFQIr6%2F5jRhhCO9Pkmsho37mAdoXeJpLA%2F7oKzPyOCF984jg1izISwuJR38QePJJlGGI4uIMlt39cnMP8yhj7HdbpvoqS1lqvIfqSM7FgVkEZTj51FIwF6XjIeiHmDaX7K2BgFOsFftHBupWFi4vvZvxg4QCVXgchIjyJfodbutsuBMkvt%2BdXLXHraMBStdlu3ftpn45xghdGwpE5HMR7w1ZQitbdkWPyFn8L7%2FmtcYM%2Fai2x6efRKT4d1EJGT8sVp%2FG0IK%2BUYB9hpZ%2Fy2vvaxEbiPY0v%2BaGis6ATa8QK%2FhfY7rK9OxFvz4yDZVm9KdHjpdWwj45RUHGPfj2Jek8wPjXfqbbwDR7Xh5tdXdMqDq7lpE4QeILBumSp1hmRFP693UjM6lGvg3vk2xD2EcHigAYQJTqVYJ3H1T4FpevN%2Fz1aeBl2j0q9uTL%2BHwXTXBsfqPF0f8eq6vXwuK5%2BvsYjxc6H3pTa8bvFY1B%2Bkm2g5%2FBUmUyRG54IysIQciPie68Px9aIVd%2F0Vp%2BOVYFnzqEp4m%2FWjmwkIkLCLJUf9DI9srtQo7pXoW4DQjQyDgbzymuX1kSeAV9nVOdhFjtQ6enhtpzOFN7JymnqeF6l31hoed67MPIuNeX4BMIKx5L0GOqUB38VuqItZrY1UO1E3uXSj7vNVu5cOhrcBtT32MQkV3APJHMDgbUYF4prpFgHW62Y7Dnzffdu1y9iK8l%2FvIq0ZyAeIs6NMcjRby%2FeHBzDCTjrlpHtxEf5SIRcy%2F8EJ08ZM5KkNHh8nnC6qdL7Vnqj3zMtCFY4f4KPwwXRia%2BNSDBtXHo7jhjG8T99SrtoHffn%2B11YnX%2BqnoWib2mKAuNl8LDsA6Ieb&X-Amz-Signature=b2769846b66417f588da74533ce6dd558576f72ab45582b7935dc4d99d7b4d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK36JIM7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHegt0N1vl%2Fdghp6FdeoOsjG%2B22sNAUO%2FQDaPdF1So%2BlAiEA0%2BhYoPwj4s9v2EdnWI5QHazZAkmZyXfHomWHUn%2FHm0oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW97Q0VI%2FdcJDpWQCrcA606efoFQIr6%2F5jRhhCO9Pkmsho37mAdoXeJpLA%2F7oKzPyOCF984jg1izISwuJR38QePJJlGGI4uIMlt39cnMP8yhj7HdbpvoqS1lqvIfqSM7FgVkEZTj51FIwF6XjIeiHmDaX7K2BgFOsFftHBupWFi4vvZvxg4QCVXgchIjyJfodbutsuBMkvt%2BdXLXHraMBStdlu3ftpn45xghdGwpE5HMR7w1ZQitbdkWPyFn8L7%2FmtcYM%2Fai2x6efRKT4d1EJGT8sVp%2FG0IK%2BUYB9hpZ%2Fy2vvaxEbiPY0v%2BaGis6ATa8QK%2FhfY7rK9OxFvz4yDZVm9KdHjpdWwj45RUHGPfj2Jek8wPjXfqbbwDR7Xh5tdXdMqDq7lpE4QeILBumSp1hmRFP693UjM6lGvg3vk2xD2EcHigAYQJTqVYJ3H1T4FpevN%2Fz1aeBl2j0q9uTL%2BHwXTXBsfqPF0f8eq6vXwuK5%2BvsYjxc6H3pTa8bvFY1B%2Bkm2g5%2FBUmUyRG54IysIQciPie68Px9aIVd%2F0Vp%2BOVYFnzqEp4m%2FWjmwkIkLCLJUf9DI9srtQo7pXoW4DQjQyDgbzymuX1kSeAV9nVOdhFjtQ6enhtpzOFN7JymnqeF6l31hoed67MPIuNeX4BMIKx5L0GOqUB38VuqItZrY1UO1E3uXSj7vNVu5cOhrcBtT32MQkV3APJHMDgbUYF4prpFgHW62Y7Dnzffdu1y9iK8l%2FvIq0ZyAeIs6NMcjRby%2FeHBzDCTjrlpHtxEf5SIRcy%2F8EJ08ZM5KkNHh8nnC6qdL7Vnqj3zMtCFY4f4KPwwXRia%2BNSDBtXHo7jhjG8T99SrtoHffn%2B11YnX%2BqnoWib2mKAuNl8LDsA6Ieb&X-Amz-Signature=6a3392d09c707a64bdbcc1c5f17e1230af4b737f8099947b9ed81eb606f70e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK36JIM7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHegt0N1vl%2Fdghp6FdeoOsjG%2B22sNAUO%2FQDaPdF1So%2BlAiEA0%2BhYoPwj4s9v2EdnWI5QHazZAkmZyXfHomWHUn%2FHm0oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW97Q0VI%2FdcJDpWQCrcA606efoFQIr6%2F5jRhhCO9Pkmsho37mAdoXeJpLA%2F7oKzPyOCF984jg1izISwuJR38QePJJlGGI4uIMlt39cnMP8yhj7HdbpvoqS1lqvIfqSM7FgVkEZTj51FIwF6XjIeiHmDaX7K2BgFOsFftHBupWFi4vvZvxg4QCVXgchIjyJfodbutsuBMkvt%2BdXLXHraMBStdlu3ftpn45xghdGwpE5HMR7w1ZQitbdkWPyFn8L7%2FmtcYM%2Fai2x6efRKT4d1EJGT8sVp%2FG0IK%2BUYB9hpZ%2Fy2vvaxEbiPY0v%2BaGis6ATa8QK%2FhfY7rK9OxFvz4yDZVm9KdHjpdWwj45RUHGPfj2Jek8wPjXfqbbwDR7Xh5tdXdMqDq7lpE4QeILBumSp1hmRFP693UjM6lGvg3vk2xD2EcHigAYQJTqVYJ3H1T4FpevN%2Fz1aeBl2j0q9uTL%2BHwXTXBsfqPF0f8eq6vXwuK5%2BvsYjxc6H3pTa8bvFY1B%2Bkm2g5%2FBUmUyRG54IysIQciPie68Px9aIVd%2F0Vp%2BOVYFnzqEp4m%2FWjmwkIkLCLJUf9DI9srtQo7pXoW4DQjQyDgbzymuX1kSeAV9nVOdhFjtQ6enhtpzOFN7JymnqeF6l31hoed67MPIuNeX4BMIKx5L0GOqUB38VuqItZrY1UO1E3uXSj7vNVu5cOhrcBtT32MQkV3APJHMDgbUYF4prpFgHW62Y7Dnzffdu1y9iK8l%2FvIq0ZyAeIs6NMcjRby%2FeHBzDCTjrlpHtxEf5SIRcy%2F8EJ08ZM5KkNHh8nnC6qdL7Vnqj3zMtCFY4f4KPwwXRia%2BNSDBtXHo7jhjG8T99SrtoHffn%2B11YnX%2BqnoWib2mKAuNl8LDsA6Ieb&X-Amz-Signature=4c5b508163e888a0dcff84e3ecb4c8a17995c15d55619d6e036a7f7217367740&X-Amz-SignedHeaders=host&x-id=GetObject)
