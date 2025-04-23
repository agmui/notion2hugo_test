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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675EHFB5M%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICWaMhylkNodAF2aqPhqSNWUFDwbyjoPXu3zpwiqjwEOAiBq2bYE89w9HGuTgZggjpntww75%2BHhuRH1hIM6KGenOByqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkzfgzQKmtiNiG1eKtwDNuISvd9cskK4Hxu3a6VFMJoKNvZQbvu9t62YuMubLxAJ8wtX7mZxUXuYU05qB4jSw9cZiFDj3hyn%2BogREotZfRcw0OaJ%2BJK6d78C%2FJxtIqvyk0NMdxTyjRhewGWiGDf4ztJFwpIxehpRBLRWqLN61o1dLKzkBn7zsuql2%2Fbz%2BnZSQWEu79cp44QHzl6J0MIueEdUUPMh1pfmX8VtfXLfMNLwLBTCSQZoeQIz3cBLq2i0N0WC2ne9pkkWf9kU5CP6IvwD6KmT2F1oHYqScK0yZRuu%2Fnyjnj4FIrmFgtF0pd4L0WHUOsmDu6tIJzrQlI2pgOwO1FqDmJWeuPL0p0xiGSc3xOBxLpwrcXQnSK3shQBj0UMC6wcQcH8lNQl3XcCP8iB9%2FJRrqBWN0DyhH%2Fsl%2BDUFR5Ku7XjN9qf2RnBIrXxv1ypPMj7GaKs8FNWO090EYvjy9Yl%2B3f7E3rBWxvYC9v5ugcwvnAQqtatKEjemsrWWUH62BDArq%2BMG66XII7j26%2F6lGR3C3LIH7o6mmu%2BkRM2btdVaoESjeBYHOV8U17fyPqimS2EabE9pMABE46EjCDrczvyfqvzSdpnBUDn5jNMKHZEVz%2BS%2FBM3ftNQeertQg0yDHWdzQtlpfg0w8MalwAY6pgHXr5EPE3dPWT%2BkWHjNnNE8VXCS75s1rBpNQrnDNEG7p20bjMQJowFvw6i%2FgJqggzN8LT27ufLt6o5%2F99owxBWa8AAWtANW8pyYrq9Ob2VdvNpbHsEUVxOrog%2FqXn%2Bg6WEqXedACGJ1T%2B8FjqtI1TTVzeZWnzgbnksRUrsT7NAqtffyt5PXaaf7KVW2rwQ896MUwmuP48QDwc2k4r1F20DJNNjxvN%2FZ&X-Amz-Signature=af7400a759ba14b9cea4102c3b94316bc39416e6d6d38f20165a30b8021543ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675EHFB5M%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICWaMhylkNodAF2aqPhqSNWUFDwbyjoPXu3zpwiqjwEOAiBq2bYE89w9HGuTgZggjpntww75%2BHhuRH1hIM6KGenOByqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkzfgzQKmtiNiG1eKtwDNuISvd9cskK4Hxu3a6VFMJoKNvZQbvu9t62YuMubLxAJ8wtX7mZxUXuYU05qB4jSw9cZiFDj3hyn%2BogREotZfRcw0OaJ%2BJK6d78C%2FJxtIqvyk0NMdxTyjRhewGWiGDf4ztJFwpIxehpRBLRWqLN61o1dLKzkBn7zsuql2%2Fbz%2BnZSQWEu79cp44QHzl6J0MIueEdUUPMh1pfmX8VtfXLfMNLwLBTCSQZoeQIz3cBLq2i0N0WC2ne9pkkWf9kU5CP6IvwD6KmT2F1oHYqScK0yZRuu%2Fnyjnj4FIrmFgtF0pd4L0WHUOsmDu6tIJzrQlI2pgOwO1FqDmJWeuPL0p0xiGSc3xOBxLpwrcXQnSK3shQBj0UMC6wcQcH8lNQl3XcCP8iB9%2FJRrqBWN0DyhH%2Fsl%2BDUFR5Ku7XjN9qf2RnBIrXxv1ypPMj7GaKs8FNWO090EYvjy9Yl%2B3f7E3rBWxvYC9v5ugcwvnAQqtatKEjemsrWWUH62BDArq%2BMG66XII7j26%2F6lGR3C3LIH7o6mmu%2BkRM2btdVaoESjeBYHOV8U17fyPqimS2EabE9pMABE46EjCDrczvyfqvzSdpnBUDn5jNMKHZEVz%2BS%2FBM3ftNQeertQg0yDHWdzQtlpfg0w8MalwAY6pgHXr5EPE3dPWT%2BkWHjNnNE8VXCS75s1rBpNQrnDNEG7p20bjMQJowFvw6i%2FgJqggzN8LT27ufLt6o5%2F99owxBWa8AAWtANW8pyYrq9Ob2VdvNpbHsEUVxOrog%2FqXn%2Bg6WEqXedACGJ1T%2B8FjqtI1TTVzeZWnzgbnksRUrsT7NAqtffyt5PXaaf7KVW2rwQ896MUwmuP48QDwc2k4r1F20DJNNjxvN%2FZ&X-Amz-Signature=284329b5a6dfc4753843fbbd02fe2c23cde271cfa8dfdf39d62e0ac67e6e8aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675EHFB5M%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICWaMhylkNodAF2aqPhqSNWUFDwbyjoPXu3zpwiqjwEOAiBq2bYE89w9HGuTgZggjpntww75%2BHhuRH1hIM6KGenOByqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkzfgzQKmtiNiG1eKtwDNuISvd9cskK4Hxu3a6VFMJoKNvZQbvu9t62YuMubLxAJ8wtX7mZxUXuYU05qB4jSw9cZiFDj3hyn%2BogREotZfRcw0OaJ%2BJK6d78C%2FJxtIqvyk0NMdxTyjRhewGWiGDf4ztJFwpIxehpRBLRWqLN61o1dLKzkBn7zsuql2%2Fbz%2BnZSQWEu79cp44QHzl6J0MIueEdUUPMh1pfmX8VtfXLfMNLwLBTCSQZoeQIz3cBLq2i0N0WC2ne9pkkWf9kU5CP6IvwD6KmT2F1oHYqScK0yZRuu%2Fnyjnj4FIrmFgtF0pd4L0WHUOsmDu6tIJzrQlI2pgOwO1FqDmJWeuPL0p0xiGSc3xOBxLpwrcXQnSK3shQBj0UMC6wcQcH8lNQl3XcCP8iB9%2FJRrqBWN0DyhH%2Fsl%2BDUFR5Ku7XjN9qf2RnBIrXxv1ypPMj7GaKs8FNWO090EYvjy9Yl%2B3f7E3rBWxvYC9v5ugcwvnAQqtatKEjemsrWWUH62BDArq%2BMG66XII7j26%2F6lGR3C3LIH7o6mmu%2BkRM2btdVaoESjeBYHOV8U17fyPqimS2EabE9pMABE46EjCDrczvyfqvzSdpnBUDn5jNMKHZEVz%2BS%2FBM3ftNQeertQg0yDHWdzQtlpfg0w8MalwAY6pgHXr5EPE3dPWT%2BkWHjNnNE8VXCS75s1rBpNQrnDNEG7p20bjMQJowFvw6i%2FgJqggzN8LT27ufLt6o5%2F99owxBWa8AAWtANW8pyYrq9Ob2VdvNpbHsEUVxOrog%2FqXn%2Bg6WEqXedACGJ1T%2B8FjqtI1TTVzeZWnzgbnksRUrsT7NAqtffyt5PXaaf7KVW2rwQ896MUwmuP48QDwc2k4r1F20DJNNjxvN%2FZ&X-Amz-Signature=a74753511cc3030ca5f30bfd9bbf132f5a3a1798e3f8f03c7b2540557b8ee39b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675EHFB5M%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICWaMhylkNodAF2aqPhqSNWUFDwbyjoPXu3zpwiqjwEOAiBq2bYE89w9HGuTgZggjpntww75%2BHhuRH1hIM6KGenOByqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkzfgzQKmtiNiG1eKtwDNuISvd9cskK4Hxu3a6VFMJoKNvZQbvu9t62YuMubLxAJ8wtX7mZxUXuYU05qB4jSw9cZiFDj3hyn%2BogREotZfRcw0OaJ%2BJK6d78C%2FJxtIqvyk0NMdxTyjRhewGWiGDf4ztJFwpIxehpRBLRWqLN61o1dLKzkBn7zsuql2%2Fbz%2BnZSQWEu79cp44QHzl6J0MIueEdUUPMh1pfmX8VtfXLfMNLwLBTCSQZoeQIz3cBLq2i0N0WC2ne9pkkWf9kU5CP6IvwD6KmT2F1oHYqScK0yZRuu%2Fnyjnj4FIrmFgtF0pd4L0WHUOsmDu6tIJzrQlI2pgOwO1FqDmJWeuPL0p0xiGSc3xOBxLpwrcXQnSK3shQBj0UMC6wcQcH8lNQl3XcCP8iB9%2FJRrqBWN0DyhH%2Fsl%2BDUFR5Ku7XjN9qf2RnBIrXxv1ypPMj7GaKs8FNWO090EYvjy9Yl%2B3f7E3rBWxvYC9v5ugcwvnAQqtatKEjemsrWWUH62BDArq%2BMG66XII7j26%2F6lGR3C3LIH7o6mmu%2BkRM2btdVaoESjeBYHOV8U17fyPqimS2EabE9pMABE46EjCDrczvyfqvzSdpnBUDn5jNMKHZEVz%2BS%2FBM3ftNQeertQg0yDHWdzQtlpfg0w8MalwAY6pgHXr5EPE3dPWT%2BkWHjNnNE8VXCS75s1rBpNQrnDNEG7p20bjMQJowFvw6i%2FgJqggzN8LT27ufLt6o5%2F99owxBWa8AAWtANW8pyYrq9Ob2VdvNpbHsEUVxOrog%2FqXn%2Bg6WEqXedACGJ1T%2B8FjqtI1TTVzeZWnzgbnksRUrsT7NAqtffyt5PXaaf7KVW2rwQ896MUwmuP48QDwc2k4r1F20DJNNjxvN%2FZ&X-Amz-Signature=a38898940127cbe0150a4f825f2295e07441d9252d08dabef1abaa673e43e4c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675EHFB5M%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICWaMhylkNodAF2aqPhqSNWUFDwbyjoPXu3zpwiqjwEOAiBq2bYE89w9HGuTgZggjpntww75%2BHhuRH1hIM6KGenOByqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkzfgzQKmtiNiG1eKtwDNuISvd9cskK4Hxu3a6VFMJoKNvZQbvu9t62YuMubLxAJ8wtX7mZxUXuYU05qB4jSw9cZiFDj3hyn%2BogREotZfRcw0OaJ%2BJK6d78C%2FJxtIqvyk0NMdxTyjRhewGWiGDf4ztJFwpIxehpRBLRWqLN61o1dLKzkBn7zsuql2%2Fbz%2BnZSQWEu79cp44QHzl6J0MIueEdUUPMh1pfmX8VtfXLfMNLwLBTCSQZoeQIz3cBLq2i0N0WC2ne9pkkWf9kU5CP6IvwD6KmT2F1oHYqScK0yZRuu%2Fnyjnj4FIrmFgtF0pd4L0WHUOsmDu6tIJzrQlI2pgOwO1FqDmJWeuPL0p0xiGSc3xOBxLpwrcXQnSK3shQBj0UMC6wcQcH8lNQl3XcCP8iB9%2FJRrqBWN0DyhH%2Fsl%2BDUFR5Ku7XjN9qf2RnBIrXxv1ypPMj7GaKs8FNWO090EYvjy9Yl%2B3f7E3rBWxvYC9v5ugcwvnAQqtatKEjemsrWWUH62BDArq%2BMG66XII7j26%2F6lGR3C3LIH7o6mmu%2BkRM2btdVaoESjeBYHOV8U17fyPqimS2EabE9pMABE46EjCDrczvyfqvzSdpnBUDn5jNMKHZEVz%2BS%2FBM3ftNQeertQg0yDHWdzQtlpfg0w8MalwAY6pgHXr5EPE3dPWT%2BkWHjNnNE8VXCS75s1rBpNQrnDNEG7p20bjMQJowFvw6i%2FgJqggzN8LT27ufLt6o5%2F99owxBWa8AAWtANW8pyYrq9Ob2VdvNpbHsEUVxOrog%2FqXn%2Bg6WEqXedACGJ1T%2B8FjqtI1TTVzeZWnzgbnksRUrsT7NAqtffyt5PXaaf7KVW2rwQ896MUwmuP48QDwc2k4r1F20DJNNjxvN%2FZ&X-Amz-Signature=f7dce2d3ce47b2986d713a850bf0b1e9af560360adeec4ba3cd94b5723a6c709&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675EHFB5M%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICWaMhylkNodAF2aqPhqSNWUFDwbyjoPXu3zpwiqjwEOAiBq2bYE89w9HGuTgZggjpntww75%2BHhuRH1hIM6KGenOByqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkzfgzQKmtiNiG1eKtwDNuISvd9cskK4Hxu3a6VFMJoKNvZQbvu9t62YuMubLxAJ8wtX7mZxUXuYU05qB4jSw9cZiFDj3hyn%2BogREotZfRcw0OaJ%2BJK6d78C%2FJxtIqvyk0NMdxTyjRhewGWiGDf4ztJFwpIxehpRBLRWqLN61o1dLKzkBn7zsuql2%2Fbz%2BnZSQWEu79cp44QHzl6J0MIueEdUUPMh1pfmX8VtfXLfMNLwLBTCSQZoeQIz3cBLq2i0N0WC2ne9pkkWf9kU5CP6IvwD6KmT2F1oHYqScK0yZRuu%2Fnyjnj4FIrmFgtF0pd4L0WHUOsmDu6tIJzrQlI2pgOwO1FqDmJWeuPL0p0xiGSc3xOBxLpwrcXQnSK3shQBj0UMC6wcQcH8lNQl3XcCP8iB9%2FJRrqBWN0DyhH%2Fsl%2BDUFR5Ku7XjN9qf2RnBIrXxv1ypPMj7GaKs8FNWO090EYvjy9Yl%2B3f7E3rBWxvYC9v5ugcwvnAQqtatKEjemsrWWUH62BDArq%2BMG66XII7j26%2F6lGR3C3LIH7o6mmu%2BkRM2btdVaoESjeBYHOV8U17fyPqimS2EabE9pMABE46EjCDrczvyfqvzSdpnBUDn5jNMKHZEVz%2BS%2FBM3ftNQeertQg0yDHWdzQtlpfg0w8MalwAY6pgHXr5EPE3dPWT%2BkWHjNnNE8VXCS75s1rBpNQrnDNEG7p20bjMQJowFvw6i%2FgJqggzN8LT27ufLt6o5%2F99owxBWa8AAWtANW8pyYrq9Ob2VdvNpbHsEUVxOrog%2FqXn%2Bg6WEqXedACGJ1T%2B8FjqtI1TTVzeZWnzgbnksRUrsT7NAqtffyt5PXaaf7KVW2rwQ896MUwmuP48QDwc2k4r1F20DJNNjxvN%2FZ&X-Amz-Signature=21a9a07a894ce2a228977e124c4ca01bfe9ee8f8a1927c4afbdf3bba58ee12e5&X-Amz-SignedHeaders=host&x-id=GetObject)
