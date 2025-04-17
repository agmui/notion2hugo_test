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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTANH5DE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoIP0Il2nEIrrpndfNGGdn%2B0L8t%2FIHmPt6oKYsSToYeAiEA8NLv6nFlX4DsCvTQ%2F6B3o29VkYN6QKi%2F5uI2bhGThioq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP%2FsvjhLVw%2FXY9iNiSrcA3o4HKAFdToT2gCv9On8jr8%2Fm5eFzo%2BdJA6IugcptFNGtbxNarpmfC0i6qH7OMy8tVLBpSKQNMLo5E82%2FBS2l90kp8rr1lUcOGWMg8%2FWGpo2f0LxdoLWLmWT3yjWRk8PvmP3DS7aX8agURcD0Ysa1cbmyM7nOA%2FdI2xyDFavDFX5uTJ0B68u7yuqUi%2F1vNU3vvVbez9Z1SEqSqct%2FQ7zqX0MLHse%2BFMAWe%2FqKcZlbNB3S118GrsN%2Bp%2Fk08ydqcXDukNOJoWjE5lMLXyIh3yUPzjGWqTzCQBtPvI4R2TtIcW9Lp00O2%2Bry%2BIOvCTVCiWvYp0jGTBBTPqvQNn6QTY7dGab49kaKsddzyBONyCIUo7nPXRob34tNt5oHOnhYBJUG1fa9CuN98Fuul3NhsEMgj7x%2FRxrR0IIgLX8jH97CP50mr5VX71aVtcvZyYtsIBxxTIRHCzLTbWnC4Am1NsZqfNS8PJQj%2FcRY%2F9QO9DFMZHhpG7lgsIRPVAYGLxroLHsl978xZAtJY0JncQd13xJRDJ9pxgCxFzexDiTWLAoKOF5R3Gz1lZDYDKMpjQrN07Wruup3R7aUn6%2BDtw5GxzKeEbeN6KVKzImjze3ZYa1DktHGjPqKGv1CE05ZgMvMJLIgsAGOqUB6VtR%2B7cv77VbzQN7XoPdUg1Tse58tK7QJQrbAqPKs8XvCIupT5sv%2FBLWOZ5EP6AhVyOXHBVlUodSmM9Rm1ctNsyuTjraPVo9TeRxSd4KwaEcPSQn4pDJD4y%2BvFQX21wJKEoUaVWQ%2Bko371Sz4Fu4CmXPYYe0rLRBAPUJdi6Jc9PLZ9VLeGvupSK3Q5mBgXgMMvuYUsKxuyeSY9nS6IK8LYoLlgW5&X-Amz-Signature=d67d35ea7578cd7cbc02407890510711fbc3dfa6525719987e7ae5b13d8e2f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTANH5DE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoIP0Il2nEIrrpndfNGGdn%2B0L8t%2FIHmPt6oKYsSToYeAiEA8NLv6nFlX4DsCvTQ%2F6B3o29VkYN6QKi%2F5uI2bhGThioq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP%2FsvjhLVw%2FXY9iNiSrcA3o4HKAFdToT2gCv9On8jr8%2Fm5eFzo%2BdJA6IugcptFNGtbxNarpmfC0i6qH7OMy8tVLBpSKQNMLo5E82%2FBS2l90kp8rr1lUcOGWMg8%2FWGpo2f0LxdoLWLmWT3yjWRk8PvmP3DS7aX8agURcD0Ysa1cbmyM7nOA%2FdI2xyDFavDFX5uTJ0B68u7yuqUi%2F1vNU3vvVbez9Z1SEqSqct%2FQ7zqX0MLHse%2BFMAWe%2FqKcZlbNB3S118GrsN%2Bp%2Fk08ydqcXDukNOJoWjE5lMLXyIh3yUPzjGWqTzCQBtPvI4R2TtIcW9Lp00O2%2Bry%2BIOvCTVCiWvYp0jGTBBTPqvQNn6QTY7dGab49kaKsddzyBONyCIUo7nPXRob34tNt5oHOnhYBJUG1fa9CuN98Fuul3NhsEMgj7x%2FRxrR0IIgLX8jH97CP50mr5VX71aVtcvZyYtsIBxxTIRHCzLTbWnC4Am1NsZqfNS8PJQj%2FcRY%2F9QO9DFMZHhpG7lgsIRPVAYGLxroLHsl978xZAtJY0JncQd13xJRDJ9pxgCxFzexDiTWLAoKOF5R3Gz1lZDYDKMpjQrN07Wruup3R7aUn6%2BDtw5GxzKeEbeN6KVKzImjze3ZYa1DktHGjPqKGv1CE05ZgMvMJLIgsAGOqUB6VtR%2B7cv77VbzQN7XoPdUg1Tse58tK7QJQrbAqPKs8XvCIupT5sv%2FBLWOZ5EP6AhVyOXHBVlUodSmM9Rm1ctNsyuTjraPVo9TeRxSd4KwaEcPSQn4pDJD4y%2BvFQX21wJKEoUaVWQ%2Bko371Sz4Fu4CmXPYYe0rLRBAPUJdi6Jc9PLZ9VLeGvupSK3Q5mBgXgMMvuYUsKxuyeSY9nS6IK8LYoLlgW5&X-Amz-Signature=62e744439bb893e03a238f802c959dd6fc80f46121fc725078d97a792abc4243&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTANH5DE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoIP0Il2nEIrrpndfNGGdn%2B0L8t%2FIHmPt6oKYsSToYeAiEA8NLv6nFlX4DsCvTQ%2F6B3o29VkYN6QKi%2F5uI2bhGThioq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP%2FsvjhLVw%2FXY9iNiSrcA3o4HKAFdToT2gCv9On8jr8%2Fm5eFzo%2BdJA6IugcptFNGtbxNarpmfC0i6qH7OMy8tVLBpSKQNMLo5E82%2FBS2l90kp8rr1lUcOGWMg8%2FWGpo2f0LxdoLWLmWT3yjWRk8PvmP3DS7aX8agURcD0Ysa1cbmyM7nOA%2FdI2xyDFavDFX5uTJ0B68u7yuqUi%2F1vNU3vvVbez9Z1SEqSqct%2FQ7zqX0MLHse%2BFMAWe%2FqKcZlbNB3S118GrsN%2Bp%2Fk08ydqcXDukNOJoWjE5lMLXyIh3yUPzjGWqTzCQBtPvI4R2TtIcW9Lp00O2%2Bry%2BIOvCTVCiWvYp0jGTBBTPqvQNn6QTY7dGab49kaKsddzyBONyCIUo7nPXRob34tNt5oHOnhYBJUG1fa9CuN98Fuul3NhsEMgj7x%2FRxrR0IIgLX8jH97CP50mr5VX71aVtcvZyYtsIBxxTIRHCzLTbWnC4Am1NsZqfNS8PJQj%2FcRY%2F9QO9DFMZHhpG7lgsIRPVAYGLxroLHsl978xZAtJY0JncQd13xJRDJ9pxgCxFzexDiTWLAoKOF5R3Gz1lZDYDKMpjQrN07Wruup3R7aUn6%2BDtw5GxzKeEbeN6KVKzImjze3ZYa1DktHGjPqKGv1CE05ZgMvMJLIgsAGOqUB6VtR%2B7cv77VbzQN7XoPdUg1Tse58tK7QJQrbAqPKs8XvCIupT5sv%2FBLWOZ5EP6AhVyOXHBVlUodSmM9Rm1ctNsyuTjraPVo9TeRxSd4KwaEcPSQn4pDJD4y%2BvFQX21wJKEoUaVWQ%2Bko371Sz4Fu4CmXPYYe0rLRBAPUJdi6Jc9PLZ9VLeGvupSK3Q5mBgXgMMvuYUsKxuyeSY9nS6IK8LYoLlgW5&X-Amz-Signature=57c817ca31b2f70d911b97f99e30d1df6c5a0cb52025d1393f686a54861aff0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTANH5DE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoIP0Il2nEIrrpndfNGGdn%2B0L8t%2FIHmPt6oKYsSToYeAiEA8NLv6nFlX4DsCvTQ%2F6B3o29VkYN6QKi%2F5uI2bhGThioq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP%2FsvjhLVw%2FXY9iNiSrcA3o4HKAFdToT2gCv9On8jr8%2Fm5eFzo%2BdJA6IugcptFNGtbxNarpmfC0i6qH7OMy8tVLBpSKQNMLo5E82%2FBS2l90kp8rr1lUcOGWMg8%2FWGpo2f0LxdoLWLmWT3yjWRk8PvmP3DS7aX8agURcD0Ysa1cbmyM7nOA%2FdI2xyDFavDFX5uTJ0B68u7yuqUi%2F1vNU3vvVbez9Z1SEqSqct%2FQ7zqX0MLHse%2BFMAWe%2FqKcZlbNB3S118GrsN%2Bp%2Fk08ydqcXDukNOJoWjE5lMLXyIh3yUPzjGWqTzCQBtPvI4R2TtIcW9Lp00O2%2Bry%2BIOvCTVCiWvYp0jGTBBTPqvQNn6QTY7dGab49kaKsddzyBONyCIUo7nPXRob34tNt5oHOnhYBJUG1fa9CuN98Fuul3NhsEMgj7x%2FRxrR0IIgLX8jH97CP50mr5VX71aVtcvZyYtsIBxxTIRHCzLTbWnC4Am1NsZqfNS8PJQj%2FcRY%2F9QO9DFMZHhpG7lgsIRPVAYGLxroLHsl978xZAtJY0JncQd13xJRDJ9pxgCxFzexDiTWLAoKOF5R3Gz1lZDYDKMpjQrN07Wruup3R7aUn6%2BDtw5GxzKeEbeN6KVKzImjze3ZYa1DktHGjPqKGv1CE05ZgMvMJLIgsAGOqUB6VtR%2B7cv77VbzQN7XoPdUg1Tse58tK7QJQrbAqPKs8XvCIupT5sv%2FBLWOZ5EP6AhVyOXHBVlUodSmM9Rm1ctNsyuTjraPVo9TeRxSd4KwaEcPSQn4pDJD4y%2BvFQX21wJKEoUaVWQ%2Bko371Sz4Fu4CmXPYYe0rLRBAPUJdi6Jc9PLZ9VLeGvupSK3Q5mBgXgMMvuYUsKxuyeSY9nS6IK8LYoLlgW5&X-Amz-Signature=a3a1eac24528194e43577e2c21da401b2c737a909e4f7bfe4f06cd49661d3190&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTANH5DE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoIP0Il2nEIrrpndfNGGdn%2B0L8t%2FIHmPt6oKYsSToYeAiEA8NLv6nFlX4DsCvTQ%2F6B3o29VkYN6QKi%2F5uI2bhGThioq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP%2FsvjhLVw%2FXY9iNiSrcA3o4HKAFdToT2gCv9On8jr8%2Fm5eFzo%2BdJA6IugcptFNGtbxNarpmfC0i6qH7OMy8tVLBpSKQNMLo5E82%2FBS2l90kp8rr1lUcOGWMg8%2FWGpo2f0LxdoLWLmWT3yjWRk8PvmP3DS7aX8agURcD0Ysa1cbmyM7nOA%2FdI2xyDFavDFX5uTJ0B68u7yuqUi%2F1vNU3vvVbez9Z1SEqSqct%2FQ7zqX0MLHse%2BFMAWe%2FqKcZlbNB3S118GrsN%2Bp%2Fk08ydqcXDukNOJoWjE5lMLXyIh3yUPzjGWqTzCQBtPvI4R2TtIcW9Lp00O2%2Bry%2BIOvCTVCiWvYp0jGTBBTPqvQNn6QTY7dGab49kaKsddzyBONyCIUo7nPXRob34tNt5oHOnhYBJUG1fa9CuN98Fuul3NhsEMgj7x%2FRxrR0IIgLX8jH97CP50mr5VX71aVtcvZyYtsIBxxTIRHCzLTbWnC4Am1NsZqfNS8PJQj%2FcRY%2F9QO9DFMZHhpG7lgsIRPVAYGLxroLHsl978xZAtJY0JncQd13xJRDJ9pxgCxFzexDiTWLAoKOF5R3Gz1lZDYDKMpjQrN07Wruup3R7aUn6%2BDtw5GxzKeEbeN6KVKzImjze3ZYa1DktHGjPqKGv1CE05ZgMvMJLIgsAGOqUB6VtR%2B7cv77VbzQN7XoPdUg1Tse58tK7QJQrbAqPKs8XvCIupT5sv%2FBLWOZ5EP6AhVyOXHBVlUodSmM9Rm1ctNsyuTjraPVo9TeRxSd4KwaEcPSQn4pDJD4y%2BvFQX21wJKEoUaVWQ%2Bko371Sz4Fu4CmXPYYe0rLRBAPUJdi6Jc9PLZ9VLeGvupSK3Q5mBgXgMMvuYUsKxuyeSY9nS6IK8LYoLlgW5&X-Amz-Signature=4c6dea1d5210ab097a4d91465b16e74c8206d6f3510702263181828daedde12d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTANH5DE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoIP0Il2nEIrrpndfNGGdn%2B0L8t%2FIHmPt6oKYsSToYeAiEA8NLv6nFlX4DsCvTQ%2F6B3o29VkYN6QKi%2F5uI2bhGThioq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP%2FsvjhLVw%2FXY9iNiSrcA3o4HKAFdToT2gCv9On8jr8%2Fm5eFzo%2BdJA6IugcptFNGtbxNarpmfC0i6qH7OMy8tVLBpSKQNMLo5E82%2FBS2l90kp8rr1lUcOGWMg8%2FWGpo2f0LxdoLWLmWT3yjWRk8PvmP3DS7aX8agURcD0Ysa1cbmyM7nOA%2FdI2xyDFavDFX5uTJ0B68u7yuqUi%2F1vNU3vvVbez9Z1SEqSqct%2FQ7zqX0MLHse%2BFMAWe%2FqKcZlbNB3S118GrsN%2Bp%2Fk08ydqcXDukNOJoWjE5lMLXyIh3yUPzjGWqTzCQBtPvI4R2TtIcW9Lp00O2%2Bry%2BIOvCTVCiWvYp0jGTBBTPqvQNn6QTY7dGab49kaKsddzyBONyCIUo7nPXRob34tNt5oHOnhYBJUG1fa9CuN98Fuul3NhsEMgj7x%2FRxrR0IIgLX8jH97CP50mr5VX71aVtcvZyYtsIBxxTIRHCzLTbWnC4Am1NsZqfNS8PJQj%2FcRY%2F9QO9DFMZHhpG7lgsIRPVAYGLxroLHsl978xZAtJY0JncQd13xJRDJ9pxgCxFzexDiTWLAoKOF5R3Gz1lZDYDKMpjQrN07Wruup3R7aUn6%2BDtw5GxzKeEbeN6KVKzImjze3ZYa1DktHGjPqKGv1CE05ZgMvMJLIgsAGOqUB6VtR%2B7cv77VbzQN7XoPdUg1Tse58tK7QJQrbAqPKs8XvCIupT5sv%2FBLWOZ5EP6AhVyOXHBVlUodSmM9Rm1ctNsyuTjraPVo9TeRxSd4KwaEcPSQn4pDJD4y%2BvFQX21wJKEoUaVWQ%2Bko371Sz4Fu4CmXPYYe0rLRBAPUJdi6Jc9PLZ9VLeGvupSK3Q5mBgXgMMvuYUsKxuyeSY9nS6IK8LYoLlgW5&X-Amz-Signature=9cffd6890414376a056d296ad3420653a79948be15c146c7fa3f0a39d951db15&X-Amz-SignedHeaders=host&x-id=GetObject)
