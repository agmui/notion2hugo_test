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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4YNTKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBb6DvgA80T1%2Fij7TwXdxQwSMKB9rtjPq28VpuKJPTyAiBlCwabzQsC85VeLcSJnOdb9iO9C4KxEgalOY3t5PtQMiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEMsriQNKvSGP3izDKtwDXdmelY3kazckV0G2vxVCXXVRdwHWjvZfavGgU5Z%2BCI8m1Tg97C7VLs8pxuKY0gkCD73mJv2cKAnNep7u%2FBMcV8HE%2FxLL7pHq1mdRlJBzshdcudDYCnSDD03zr5d9TUu0875m0nXAdHcdqPxuugG3XjUdVRBxvDA2TWZNLyZh2e53uJ5p5Z2CrIZ23dsF3OD6B08uErFmJB4FI5%2B38pBigwkIf%2FqL8j4pcoFfEbTdBbt8WYf6h8y%2BDJcbu61kBKcjTrKsMTscDk7U8Xl84dJWNZakfos2G73afN9ISiWVCbDek0GkOXhrCloaXIvhR3k%2BBPsX1S5V4B%2BJVNwP%2FoljaulOLwGc%2FFz0LGosRlJYjoFV35zQ34Y14g2due6XFB27wvrk0qtnIUX7mNWbSGJUB31z4wvJSpKccpoccFvuGYq2lQvNKVlNEG8ooqn6MgwWAmDj0qPGxLgtf%2B2bsDqUCvsaSz3ql5lB7y237flUxYqfwlOsQ5AaqkTiwqGEmaIQSaHvhOsXK9qa0TeiT38IYqwrM67NtqTAMVs2S2acKnMNUOQW7QFHfbE1gFfBO8VmXZqF4QBqXQRAVqR5ylaMokasZQ8scTs6Or9uUerF3wOP4BXL5bTFpvXiIVow38HKvgY6pgFz15gTFUk%2B3gPpD7zevJxS%2BdN5lNENveilZ3Eeye8awLw%2FWf0EkOB9h8zGXzPOLT6ycJ7TQkFM897NYGjCBBvsiVxfy0kHcTPDHi2LDTJCor8pMhv2fxeFsrjtYNnuDZFr4xIx3rLOiUBk6aOnSPIHHkV3D%2FY1Tf3dizthBDoF2fyZA25M7A%2FPQdTTQyMxgEdH%2BwdPykzv%2FwdzYhq0vhhZGhj42Rlm&X-Amz-Signature=c572a85b783e6f9f47abe3d20f339e215bc7bd8579fabd09b7775b633c933e26&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4YNTKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBb6DvgA80T1%2Fij7TwXdxQwSMKB9rtjPq28VpuKJPTyAiBlCwabzQsC85VeLcSJnOdb9iO9C4KxEgalOY3t5PtQMiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEMsriQNKvSGP3izDKtwDXdmelY3kazckV0G2vxVCXXVRdwHWjvZfavGgU5Z%2BCI8m1Tg97C7VLs8pxuKY0gkCD73mJv2cKAnNep7u%2FBMcV8HE%2FxLL7pHq1mdRlJBzshdcudDYCnSDD03zr5d9TUu0875m0nXAdHcdqPxuugG3XjUdVRBxvDA2TWZNLyZh2e53uJ5p5Z2CrIZ23dsF3OD6B08uErFmJB4FI5%2B38pBigwkIf%2FqL8j4pcoFfEbTdBbt8WYf6h8y%2BDJcbu61kBKcjTrKsMTscDk7U8Xl84dJWNZakfos2G73afN9ISiWVCbDek0GkOXhrCloaXIvhR3k%2BBPsX1S5V4B%2BJVNwP%2FoljaulOLwGc%2FFz0LGosRlJYjoFV35zQ34Y14g2due6XFB27wvrk0qtnIUX7mNWbSGJUB31z4wvJSpKccpoccFvuGYq2lQvNKVlNEG8ooqn6MgwWAmDj0qPGxLgtf%2B2bsDqUCvsaSz3ql5lB7y237flUxYqfwlOsQ5AaqkTiwqGEmaIQSaHvhOsXK9qa0TeiT38IYqwrM67NtqTAMVs2S2acKnMNUOQW7QFHfbE1gFfBO8VmXZqF4QBqXQRAVqR5ylaMokasZQ8scTs6Or9uUerF3wOP4BXL5bTFpvXiIVow38HKvgY6pgFz15gTFUk%2B3gPpD7zevJxS%2BdN5lNENveilZ3Eeye8awLw%2FWf0EkOB9h8zGXzPOLT6ycJ7TQkFM897NYGjCBBvsiVxfy0kHcTPDHi2LDTJCor8pMhv2fxeFsrjtYNnuDZFr4xIx3rLOiUBk6aOnSPIHHkV3D%2FY1Tf3dizthBDoF2fyZA25M7A%2FPQdTTQyMxgEdH%2BwdPykzv%2FwdzYhq0vhhZGhj42Rlm&X-Amz-Signature=00d8ae4b097dd01b40aaca97253ebb73f4879b412d91aa4a4908dd6547e313cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4YNTKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBb6DvgA80T1%2Fij7TwXdxQwSMKB9rtjPq28VpuKJPTyAiBlCwabzQsC85VeLcSJnOdb9iO9C4KxEgalOY3t5PtQMiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEMsriQNKvSGP3izDKtwDXdmelY3kazckV0G2vxVCXXVRdwHWjvZfavGgU5Z%2BCI8m1Tg97C7VLs8pxuKY0gkCD73mJv2cKAnNep7u%2FBMcV8HE%2FxLL7pHq1mdRlJBzshdcudDYCnSDD03zr5d9TUu0875m0nXAdHcdqPxuugG3XjUdVRBxvDA2TWZNLyZh2e53uJ5p5Z2CrIZ23dsF3OD6B08uErFmJB4FI5%2B38pBigwkIf%2FqL8j4pcoFfEbTdBbt8WYf6h8y%2BDJcbu61kBKcjTrKsMTscDk7U8Xl84dJWNZakfos2G73afN9ISiWVCbDek0GkOXhrCloaXIvhR3k%2BBPsX1S5V4B%2BJVNwP%2FoljaulOLwGc%2FFz0LGosRlJYjoFV35zQ34Y14g2due6XFB27wvrk0qtnIUX7mNWbSGJUB31z4wvJSpKccpoccFvuGYq2lQvNKVlNEG8ooqn6MgwWAmDj0qPGxLgtf%2B2bsDqUCvsaSz3ql5lB7y237flUxYqfwlOsQ5AaqkTiwqGEmaIQSaHvhOsXK9qa0TeiT38IYqwrM67NtqTAMVs2S2acKnMNUOQW7QFHfbE1gFfBO8VmXZqF4QBqXQRAVqR5ylaMokasZQ8scTs6Or9uUerF3wOP4BXL5bTFpvXiIVow38HKvgY6pgFz15gTFUk%2B3gPpD7zevJxS%2BdN5lNENveilZ3Eeye8awLw%2FWf0EkOB9h8zGXzPOLT6ycJ7TQkFM897NYGjCBBvsiVxfy0kHcTPDHi2LDTJCor8pMhv2fxeFsrjtYNnuDZFr4xIx3rLOiUBk6aOnSPIHHkV3D%2FY1Tf3dizthBDoF2fyZA25M7A%2FPQdTTQyMxgEdH%2BwdPykzv%2FwdzYhq0vhhZGhj42Rlm&X-Amz-Signature=050cd284896a91db8113175475d0bf2c251e73a636385662ab3c2ce243e718c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4YNTKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBb6DvgA80T1%2Fij7TwXdxQwSMKB9rtjPq28VpuKJPTyAiBlCwabzQsC85VeLcSJnOdb9iO9C4KxEgalOY3t5PtQMiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEMsriQNKvSGP3izDKtwDXdmelY3kazckV0G2vxVCXXVRdwHWjvZfavGgU5Z%2BCI8m1Tg97C7VLs8pxuKY0gkCD73mJv2cKAnNep7u%2FBMcV8HE%2FxLL7pHq1mdRlJBzshdcudDYCnSDD03zr5d9TUu0875m0nXAdHcdqPxuugG3XjUdVRBxvDA2TWZNLyZh2e53uJ5p5Z2CrIZ23dsF3OD6B08uErFmJB4FI5%2B38pBigwkIf%2FqL8j4pcoFfEbTdBbt8WYf6h8y%2BDJcbu61kBKcjTrKsMTscDk7U8Xl84dJWNZakfos2G73afN9ISiWVCbDek0GkOXhrCloaXIvhR3k%2BBPsX1S5V4B%2BJVNwP%2FoljaulOLwGc%2FFz0LGosRlJYjoFV35zQ34Y14g2due6XFB27wvrk0qtnIUX7mNWbSGJUB31z4wvJSpKccpoccFvuGYq2lQvNKVlNEG8ooqn6MgwWAmDj0qPGxLgtf%2B2bsDqUCvsaSz3ql5lB7y237flUxYqfwlOsQ5AaqkTiwqGEmaIQSaHvhOsXK9qa0TeiT38IYqwrM67NtqTAMVs2S2acKnMNUOQW7QFHfbE1gFfBO8VmXZqF4QBqXQRAVqR5ylaMokasZQ8scTs6Or9uUerF3wOP4BXL5bTFpvXiIVow38HKvgY6pgFz15gTFUk%2B3gPpD7zevJxS%2BdN5lNENveilZ3Eeye8awLw%2FWf0EkOB9h8zGXzPOLT6ycJ7TQkFM897NYGjCBBvsiVxfy0kHcTPDHi2LDTJCor8pMhv2fxeFsrjtYNnuDZFr4xIx3rLOiUBk6aOnSPIHHkV3D%2FY1Tf3dizthBDoF2fyZA25M7A%2FPQdTTQyMxgEdH%2BwdPykzv%2FwdzYhq0vhhZGhj42Rlm&X-Amz-Signature=8618547b1ac7b54b0b5bd02282c00fc1dea81d60f2291884b07abb4cc10d2a30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4YNTKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBb6DvgA80T1%2Fij7TwXdxQwSMKB9rtjPq28VpuKJPTyAiBlCwabzQsC85VeLcSJnOdb9iO9C4KxEgalOY3t5PtQMiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEMsriQNKvSGP3izDKtwDXdmelY3kazckV0G2vxVCXXVRdwHWjvZfavGgU5Z%2BCI8m1Tg97C7VLs8pxuKY0gkCD73mJv2cKAnNep7u%2FBMcV8HE%2FxLL7pHq1mdRlJBzshdcudDYCnSDD03zr5d9TUu0875m0nXAdHcdqPxuugG3XjUdVRBxvDA2TWZNLyZh2e53uJ5p5Z2CrIZ23dsF3OD6B08uErFmJB4FI5%2B38pBigwkIf%2FqL8j4pcoFfEbTdBbt8WYf6h8y%2BDJcbu61kBKcjTrKsMTscDk7U8Xl84dJWNZakfos2G73afN9ISiWVCbDek0GkOXhrCloaXIvhR3k%2BBPsX1S5V4B%2BJVNwP%2FoljaulOLwGc%2FFz0LGosRlJYjoFV35zQ34Y14g2due6XFB27wvrk0qtnIUX7mNWbSGJUB31z4wvJSpKccpoccFvuGYq2lQvNKVlNEG8ooqn6MgwWAmDj0qPGxLgtf%2B2bsDqUCvsaSz3ql5lB7y237flUxYqfwlOsQ5AaqkTiwqGEmaIQSaHvhOsXK9qa0TeiT38IYqwrM67NtqTAMVs2S2acKnMNUOQW7QFHfbE1gFfBO8VmXZqF4QBqXQRAVqR5ylaMokasZQ8scTs6Or9uUerF3wOP4BXL5bTFpvXiIVow38HKvgY6pgFz15gTFUk%2B3gPpD7zevJxS%2BdN5lNENveilZ3Eeye8awLw%2FWf0EkOB9h8zGXzPOLT6ycJ7TQkFM897NYGjCBBvsiVxfy0kHcTPDHi2LDTJCor8pMhv2fxeFsrjtYNnuDZFr4xIx3rLOiUBk6aOnSPIHHkV3D%2FY1Tf3dizthBDoF2fyZA25M7A%2FPQdTTQyMxgEdH%2BwdPykzv%2FwdzYhq0vhhZGhj42Rlm&X-Amz-Signature=9b90c1f1d35db141fc382a96583a09788f8c206864f7716c1a524e4ab611c6a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4YNTKA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBb6DvgA80T1%2Fij7TwXdxQwSMKB9rtjPq28VpuKJPTyAiBlCwabzQsC85VeLcSJnOdb9iO9C4KxEgalOY3t5PtQMiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEMsriQNKvSGP3izDKtwDXdmelY3kazckV0G2vxVCXXVRdwHWjvZfavGgU5Z%2BCI8m1Tg97C7VLs8pxuKY0gkCD73mJv2cKAnNep7u%2FBMcV8HE%2FxLL7pHq1mdRlJBzshdcudDYCnSDD03zr5d9TUu0875m0nXAdHcdqPxuugG3XjUdVRBxvDA2TWZNLyZh2e53uJ5p5Z2CrIZ23dsF3OD6B08uErFmJB4FI5%2B38pBigwkIf%2FqL8j4pcoFfEbTdBbt8WYf6h8y%2BDJcbu61kBKcjTrKsMTscDk7U8Xl84dJWNZakfos2G73afN9ISiWVCbDek0GkOXhrCloaXIvhR3k%2BBPsX1S5V4B%2BJVNwP%2FoljaulOLwGc%2FFz0LGosRlJYjoFV35zQ34Y14g2due6XFB27wvrk0qtnIUX7mNWbSGJUB31z4wvJSpKccpoccFvuGYq2lQvNKVlNEG8ooqn6MgwWAmDj0qPGxLgtf%2B2bsDqUCvsaSz3ql5lB7y237flUxYqfwlOsQ5AaqkTiwqGEmaIQSaHvhOsXK9qa0TeiT38IYqwrM67NtqTAMVs2S2acKnMNUOQW7QFHfbE1gFfBO8VmXZqF4QBqXQRAVqR5ylaMokasZQ8scTs6Or9uUerF3wOP4BXL5bTFpvXiIVow38HKvgY6pgFz15gTFUk%2B3gPpD7zevJxS%2BdN5lNENveilZ3Eeye8awLw%2FWf0EkOB9h8zGXzPOLT6ycJ7TQkFM897NYGjCBBvsiVxfy0kHcTPDHi2LDTJCor8pMhv2fxeFsrjtYNnuDZFr4xIx3rLOiUBk6aOnSPIHHkV3D%2FY1Tf3dizthBDoF2fyZA25M7A%2FPQdTTQyMxgEdH%2BwdPykzv%2FwdzYhq0vhhZGhj42Rlm&X-Amz-Signature=6409bb7d45b89f3e462c3d16385e7fe488591f3306c57027aad46f2e5a15a277&X-Amz-SignedHeaders=host&x-id=GetObject)
